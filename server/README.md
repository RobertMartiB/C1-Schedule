# Servidor de Talkiro Pro

Guarda la clave de API de Anthropic y deja usar el tutor de IA de Talkiro solo a quien tiene Pro, con un límite de gasto por usuario y mes. Los usuarios nunca ven la clave.

## Qué hace

- `POST /v1/messages`: el chat. La app usa el SDK oficial de Anthropic con este servidor como `baseURL` y su token de Pro como clave. El servidor comprueba el token, pone el modelo, el esfuerzo y el tope de tokens (la app no puede cambiarlos), reenvía la conversación a Claude en streaming y apunta lo que ha costado.
- `POST /pro/redeem` `{ code }`: canjea un código de invitación (para testers y amigos) y devuelve un token.
- `POST /pro/play` `{ purchaseToken }`: comprueba una suscripción de Google Play y devuelve un token.
- `GET /pro/status`: si el Pro está activo y cuánto se ha gastado este mes.

## Instalar

Necesita Node 20 o superior.

```bash
cd server
npm install
ANTHROPIC_API_KEY=sk-ant-... PRO_CODES=AMIGOS-2026 npm start
```

Tiene que ir detrás de **HTTPS** (la app web y la de Android no hablan con servidores sin cifrar). Lo más fácil es [Caddy](https://caddyserver.com), que saca el certificado solo:

```
pro.tudominio.com {
  reverse_proxy 127.0.0.1:8787
}
```

Para que arranque solo al encender el servidor, un servicio de systemd (`/etc/systemd/system/talkiro-pro.service`):

```ini
[Unit]
Description=Talkiro Pro
After=network.target

[Service]
WorkingDirectory=/opt/talkiro/server
ExecStart=/usr/bin/node index.js
EnvironmentFile=/opt/talkiro/server/.env
Restart=always
User=talkiro

[Install]
WantedBy=multi-user.target
```

Después, en la app: **Ajustes → Talkiro Pro → Avanzado → Servidor** con la dirección `https://pro.tudominio.com`. Cuando esté fija, se pone en `DEFAULT_SERVER` dentro de `src/pro.js` para que nadie tenga que escribirla.

## Variables (`.env`)

| Variable | Para qué | Por defecto |
|---|---|---|
| `ANTHROPIC_API_KEY` | Clave de la API de Anthropic | (obligatoria) |
| `PORT` | Puerto | `8787` |
| `PRO_MODEL` | Modelo del tutor | `claude-opus-5-5` |
| `MONTHLY_BUDGET_USD` | Gasto máximo por usuario y mes, en dólares | `3` |
| `PRO_CODES` | Códigos de invitación, separados por comas | (ninguno) |
| `CODE_DEVICES` | En cuántos dispositivos se puede usar cada código | `2` |
| `PLAY_PACKAGE` | Paquete de la app en Google Play | `dev.robert.c1tracker` |
| `PLAY_SERVICE_ACCOUNT_FILE` | JSON de la cuenta de servicio de Google Play (para verificar suscripciones) | (sin Play) |
| `DATA_FILE` | Dónde se guardan los tokens y el gasto | `./data.json` |
| `ALLOWED_ORIGINS` | Orígenes permitidos (CORS) | `*` |

## Números

Precio por millón de tokens (entrada / salida): Opus 5.5 4 $ / 20 $ · Sonnet 5.5 2 $ / 10 $ · Haiku 4.5 1 $ / 5 $.

De los 5 €/mes, Google se queda un 15 %: llegan unos 4,25 €. Con `MONTHLY_BUDGET_USD=3`, cada usuario puede gastar como mucho 3 $ al mes en Claude, así que siempre queda margen. El límite se comprueba antes de cada pregunta: la última pregunta del mes puede pasarse un poco.

## Google Play

Cuando la app esté en la Play Store con la suscripción creada:

1. En Google Cloud, crea una **cuenta de servicio** y descarga su JSON.
2. En Play Console → Usuarios y permisos, invítala con permiso para ver datos financieros y gestionar pedidos y suscripciones.
3. Pon la ruta del JSON en `PLAY_SERVICE_ACCOUNT_FILE`.

La app manda el `purchaseToken` de la compra a `/pro/play` y el servidor lo comprueba con Google cada hora.
