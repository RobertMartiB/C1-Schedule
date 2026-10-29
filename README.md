# C1 Tracker

App de escritorio (Linux y Windows) para seguir un plan de estudio de 16 semanas para el **Cambridge C1 Advanced**: tareas de cada día, calendario, libros de la biblioteca y series y películas en inglés desde tu servidor Jellyfin.

**Web y descargas:** https://robertmartib.github.io/c1-tracker

## Desarrollo

```bash
npm install
npm start            # abrir la app
npm run dist:linux   # .deb y AppImage en dist/
npm run dist:win     # .zip para Windows en dist/
```

- `src/`: la app (HTML/CSS/JS). El plan está en `src/plan.js`.
- `main.js`: ventana de Electron.
- `website/`: la web de descarga (se publica sola en GitHub Pages).
