// Ventana de escritorio de C1 Tracker. Sirve la app desde un servidor local con
// puerto fijo para que el progreso (localStorage) se conserve entre aperturas y
// para poder conectar con servidores Jellyfin por http.
const { app, BrowserWindow, shell } = require('electron');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 47821;
const ROOT = path.join(__dirname, 'src');
const TYPES = { '.webmanifest': 'application/manifest+json', '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json' };

function startServer() {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      const file = path.join(ROOT, rel === '/' ? 'index.html' : rel);
      if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
      fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); return res.end(); }
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.once('error', reject);
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1100, height: 800, minWidth: 380, minHeight: 500,
    title: 'C1 Tracker', icon: path.join(__dirname, 'src', 'icon.png'),
    autoHideMenuBar: true, backgroundColor: '#12141b',
  });
  // Los enlaces externos (Write & Improve, Cambridge…) se abren en el navegador.
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.loadURL(`http://127.0.0.1:${PORT}/`);
}

if (!app.requestSingleInstanceLock()) app.quit();
else {
  app.on('second-instance', () => {
    const [win] = BrowserWindow.getAllWindows();
    if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
  });
  app.whenReady().then(async () => {
    await startServer();
    createWindow();
    app.on('activate', () => BrowserWindow.getAllWindows().length || createWindow());
  });
  app.on('window-all-closed', () => app.quit());
}
