// Servidor de Talkiro Pro: guarda la clave de API de Anthropic y deja usar el tutor de IA solo a quien tiene Pro.
// La app usa el SDK oficial con baseURL apuntando aquí y el token de Pro como «apiKey»: este servidor comprueba
// el token, aplica el límite de gasto mensual y reenvía la conversación a Claude en streaming.
//
// Variables de entorno (ver README.md):
//   ANTHROPIC_API_KEY   clave de la API (obligatoria)
//   PORT                puerto (por defecto 8787)
//   PRO_MODEL           modelo del tutor (por defecto claude-opus-5-5)
//   MONTHLY_BUDGET_USD  gasto máximo por usuario y mes en dólares (por defecto 3)
//   PRO_CODES           códigos de invitación separados por comas (p. ej. para testers)
//   CODE_DEVICES        dispositivos por código (por defecto 2)
//   PLAY_PACKAGE        paquete de Android (por defecto dev.robert.c1tracker)
//   PLAY_SERVICE_ACCOUNT_FILE  JSON de la cuenta de servicio de Google Play (para verificar suscripciones)
//   DATA_FILE           dónde se guardan tokens y gasto (por defecto ./data.json)
//   ALLOWED_ORIGINS     orígenes permitidos para CORS, separados por comas (por defecto *)
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import Anthropic from '@anthropic-ai/sdk';

const env = process.env;
const PORT = Number(env.PORT || 8787);
const MODEL = env.PRO_MODEL || 'claude-opus-5-5';
const BUDGET = Number(env.MONTHLY_BUDGET_USD || 3);
const CODES = new Set((env.PRO_CODES || '').split(',').map(s => s.trim().toUpperCase()).filter(Boolean));
const CODE_DEVICES = Number(env.CODE_DEVICES || 2);
const PLAY_PACKAGE = env.PLAY_PACKAGE || 'dev.robert.c1tracker';
const DATA_FILE = env.DATA_FILE || new URL('./data.json', import.meta.url).pathname;
const ORIGINS = (env.ALLOWED_ORIGINS || '*').split(',').map(s => s.trim());
const MAX_TOKENS = 8000;      // tope por respuesta (es un chat)
const PER_MINUTE = 10;        // mensajes por minuto y usuario

// Precio por millón de tokens [entrada, salida, lectura de caché]
const PRICES = {
  'claude-opus-5-5': [4, 20, 0.2], 'claude-sonnet-5-5': [2, 10, 0.2], 'claude-haiku-4-5': [1, 5, 0.1],
  'claude-opus-5': [5, 25, 0.5], 'claude-opus-4-8': [5, 25, 0.5], 'claude-sonnet-5': [2, 10, 0.2],
};

if (!env.ANTHROPIC_API_KEY) { console.error('Falta ANTHROPIC_API_KEY'); process.exit(1); }
const claude = new Anthropic();

// ---------- Datos: tokens de Pro y gasto del mes ----------
let db = { tokens: {}, codes: {}, usage: {} };
try { db = { ...db, ...JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')) }; } catch {}
let saving = null;
function save() {
  clearTimeout(saving);
  saving = setTimeout(() => { fs.writeFileSync(DATA_FILE + '.tmp', JSON.stringify(db)); fs.renameSync(DATA_FILE + '.tmp', DATA_FILE); }, 200);
}
const month = () => new Date().toISOString().slice(0, 7);
const spent = token => (db.usage[token]?.month === month() ? db.usage[token].usd : 0);
function addCost(token, usd) {
  const u = db.usage[token]?.month === month() ? db.usage[token] : { month: month(), usd: 0 };
  u.usd += usd; db.usage[token] = u; save();
}
function costOf(model, usage) {
  const [i, o, c] = PRICES[model] || PRICES[MODEL] || [5, 25, 0.5];
  const write = usage.cache_creation_input_tokens || 0, read = usage.cache_read_input_tokens || 0;
  return ((usage.input_tokens || 0) * i + write * i * 1.25 + read * c + (usage.output_tokens || 0) * o) / 1e6;
}
const newToken = () => 'tkp_' + crypto.randomBytes(24).toString('base64url');

// ---------- Google Play: comprobar que la suscripción está activa ----------
let googleToken = null;
async function googleAccess() {
  if (googleToken && googleToken.exp > Date.now() + 60e3) return googleToken.value;
  const sa = JSON.parse(fs.readFileSync(env.PLAY_SERVICE_ACCOUNT_FILE, 'utf8'));
  const b64 = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const body = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/androidpublisher', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })}`;
  const jwt = `${body}.${crypto.createSign('RSA-SHA256').update(body).sign(sa.private_key).toString('base64url')}`;
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }) });
  const j = await r.json();
  if (!r.ok) throw new Error('Google OAuth: ' + (j.error_description || r.status));
  googleToken = { value: j.access_token, exp: Date.now() + j.expires_in * 1000 };
  return googleToken.value;
}
async function checkPlay(purchaseToken) {
  const url = `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${PLAY_PACKAGE}/purchases/subscriptionsv2/tokens/${encodeURIComponent(purchaseToken)}`;
  const r = await fetch(url, { headers: { authorization: 'Bearer ' + await googleAccess() } });
  if (!r.ok) return { active: false };
  const s = await r.json();
  const active = ['SUBSCRIPTION_STATE_ACTIVE', 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD'].includes(s.subscriptionState);
  const expires = Math.max(...(s.lineItems || []).map(l => Date.parse(l.expiryTime) || 0), 0);
  return { active, expires };
}
// Un token sirve si viene de un código válido o de una suscripción de Play que no ha caducado (se revisa cada hora)
async function tokenValid(token) {
  const t = db.tokens[token];
  if (!t) return false;
  if (t.code) return CODES.has(t.code);
  if (t.play) {
    if (t.checked > Date.now() - 3600e3 && t.expires > Date.now()) return true;
    try { const r = await checkPlay(t.play); Object.assign(t, r, { checked: Date.now() }); save(); return r.active; }
    catch (e) { console.error(e.message); return t.expires > Date.now(); }
  }
  return false;
}

// ---------- HTTP ----------
function cors(req, res) {
  const origin = req.headers.origin;
  const allow = ORIGINS.includes('*') ? '*' : ORIGINS.includes(origin) ? origin : '';
  if (allow) res.setHeader('access-control-allow-origin', allow);
  res.setHeader('access-control-allow-methods', 'GET, POST, OPTIONS');
  res.setHeader('access-control-allow-headers', req.headers['access-control-request-headers'] || 'content-type, x-api-key, authorization');
  res.setHeader('access-control-max-age', '86400');
}
// Errores con la misma forma que la API de Anthropic, para que el SDK de la app los reconozca
function fail(res, status, type, message) {
  res.writeHead(status, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ type: 'error', error: { type, message } }));
}
function json(res, status, data) { res.writeHead(status, { 'content-type': 'application/json' }); res.end(JSON.stringify(data)); }
async function readBody(req, limit = 2e6) {
  let size = 0; const chunks = [];
  for await (const c of req) { size += c.length; if (size > limit) throw new Error('too big'); chunks.push(c); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}
const recent = new Map(); // token → marcas de tiempo del último minuto
function tooFast(token) {
  const now = Date.now(), list = (recent.get(token) || []).filter(t => t > now - 60e3);
  list.push(now); recent.set(token, list);
  return list.length > PER_MINUTE;
}
const authToken = req => req.headers['x-api-key'] || (req.headers.authorization || '').replace(/^Bearer /i, '');

async function chat(req, res) {
  const token = authToken(req);
  if (!await tokenValid(token)) return fail(res, 401, 'authentication_error', 'Tu Talkiro Pro no está activo.');
  if (spent(token) >= BUDGET) return fail(res, 429, 'rate_limit_error', 'Has llegado al límite de este mes. Se renueva el día 1.');
  if (tooFast(token)) return fail(res, 429, 'rate_limit_error', 'Demasiadas preguntas seguidas. Espera un minuto.');
  let body;
  try { body = await readBody(req); } catch { return fail(res, 400, 'invalid_request_error', 'Petición no válida.'); }
  // De la app solo se aceptan el sistema y los mensajes; el modelo y los límites los pone el servidor
  const messages = Array.isArray(body.messages) ? body.messages.slice(-40) : [];
  if (!messages.length) return fail(res, 400, 'invalid_request_error', 'No hay mensajes.');
  const params = {
    model: MODEL, max_tokens: MAX_TOKENS, messages,
    system: typeof body.system === 'string' ? body.system.slice(0, 4000) : undefined,
    output_config: { effort: 'low' },
  };
  const fallbackable = ['claude-opus-5-5', 'claude-opus-5', 'claude-sonnet-5-5', 'claude-fable-5-1'].includes(MODEL);
  const stream = fallbackable
    ? claude.beta.messages.stream({ ...params, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' })
    : claude.messages.stream(params);
  req.on('close', () => { if (!res.writableEnded) stream.abort(); });
  let started = false;
  try {
    for await (const event of stream) {
      if (!started) { res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive' }); started = true; }
      res.write(`event: ${event.type}\ndata: ${JSON.stringify(event)}\n\n`);
    }
    const final = await stream.finalMessage();
    addCost(token, costOf(final.model || MODEL, final.usage || {}));
    res.end();
  } catch (err) {
    const status = err instanceof Anthropic.APIError ? err.status || 500 : 500;
    const type = status === 429 ? 'rate_limit_error' : status === 529 ? 'overloaded_error' : 'api_error';
    const message = status === 429 || status === 529 ? 'Claude está saturado. Inténtalo en un momento.' : 'No se ha podido contactar con Claude.';
    console.error('chat:', status, err.message);
    if (!started) return fail(res, status === 529 ? 529 : status === 429 ? 429 : 502, type, message);
    res.write(`event: error\ndata: ${JSON.stringify({ type: 'error', error: { type, message } })}\n\n`);
    res.end();
  }
}

async function redeem(req, res) {
  let body; try { body = await readBody(req, 1e4); } catch { return json(res, 400, { error: 'Petición no válida.' }); }
  const code = String(body.code || '').trim().toUpperCase();
  if (!CODES.has(code)) return json(res, 403, { error: 'Ese código no es válido.' });
  const used = Object.values(db.tokens).filter(t => t.code === code).length;
  if (used >= CODE_DEVICES) return json(res, 403, { error: `Ese código ya se ha usado en ${CODE_DEVICES} dispositivos.` });
  const token = newToken();
  db.tokens[token] = { code, created: Date.now() }; save();
  json(res, 200, { token, budgetUsd: BUDGET });
}

async function play(req, res) {
  if (!env.PLAY_SERVICE_ACCOUNT_FILE) return json(res, 503, { error: 'El pago con Google Play aún no está configurado.' });
  let body; try { body = await readBody(req, 1e4); } catch { return json(res, 400, { error: 'Petición no válida.' }); }
  const purchaseToken = String(body.purchaseToken || '');
  if (!purchaseToken) return json(res, 400, { error: 'Falta la compra.' });
  const existing = Object.entries(db.tokens).find(([, t]) => t.play === purchaseToken);
  try {
    const r = await checkPlay(purchaseToken);
    if (!r.active) return json(res, 402, { error: 'La suscripción no está activa.' });
    const token = existing?.[0] || newToken();
    db.tokens[token] = { ...(existing?.[1] || { created: Date.now() }), play: purchaseToken, ...r, checked: Date.now() }; save();
    json(res, 200, { token, budgetUsd: BUDGET });
  } catch (e) { console.error('play:', e.message); json(res, 502, { error: 'No se ha podido comprobar la compra.' }); }
}

async function status(req, res) {
  const token = authToken(req);
  const active = await tokenValid(token);
  const now = new Date();
  json(res, 200, { active, spentUsd: active ? Math.round(spent(token) * 100) / 100 : 0, budgetUsd: BUDGET, resetsOn: new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1)).toISOString().slice(0, 10) });
}

http.createServer(async (req, res) => {
  cors(req, res);
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
  const path = new URL(req.url, 'http://x').pathname.replace(/\/+$/, '');
  try {
    if (req.method === 'POST' && path === '/v1/messages') return await chat(req, res);
    if (req.method === 'POST' && path === '/pro/redeem') return await redeem(req, res);
    if (req.method === 'POST' && path === '/pro/play') return await play(req, res);
    if (req.method === 'GET' && path === '/pro/status') return await status(req, res);
    if (req.method === 'GET' && path === '') return json(res, 200, { ok: true, service: 'Talkiro Pro' });
    json(res, 404, { error: 'No existe.' });
  } catch (e) { console.error(e); if (!res.headersSent) json(res, 500, { error: 'Error del servidor.' }); else res.end(); }
}).listen(PORT, () => console.log(`Talkiro Pro escuchando en :${PORT} · modelo ${MODEL} · límite ${BUDGET} $/mes`));
