# C1 Tracker

App para pasar de **B1 a C1** (Cambridge C1 Advanced) estudiando desde casa: ruta por niveles con teoría, ejercicios autocorregidos, **lecturas desmontadas** (sujeto, verbo y piezas de cada frase en colores), tarjetas de vocabulario con repetición espaciada, calendario de 3 horas al día y series y películas en inglés desde tu servidor Jellyfin.

**Web y descargas:** https://robertmartib.github.io/C1-Schedule · **Versión web/móvil:** https://robertmartib.github.io/C1-Schedule/app/

Disponible para **Android (APK)**, **Linux** (.deb y AppImage), **Windows** (.zip) y como app web instalable.

## Estructura

- `src/`: la app (HTML, CSS y JS sin dependencias). La comparten las tres plataformas.
  - `course.js`: niveles, temario y calendario.
  - `units/uXX.js`: contenido de cada unidad (teoría, ejercicios y lectura).
  - `unit.js`, `vocab.js`, `sync.js`, `jellyfin.js`, `app.js`: pantallas y lógica.
- `main.js`: ventana de escritorio (Electron).
- `android/`: proyecto Android (Capacitor). El APK se compila en GitHub Actions al publicar una versión.
- `website/`: la web de descarga (GitHub Pages; la app web se copia en `website/app/` al publicar).

## Desarrollo

```bash
npm install
npm start            # app de escritorio
npm run dist:linux   # .deb y AppImage en dist/
npm run dist:win     # .zip para Windows en dist/
npx cap sync android # copiar la app al proyecto Android
```

Para publicar una versión: sube `version` en `package.json`, compila los instaladores y crea la release (`gh release create vX.Y.Z dist/*`). El APK se añade solo a la release.

## Firma del APK

Si existen los secretos `ANDROID_KEYSTORE_BASE64` y `ANDROID_KEYSTORE_PASSWORD`, el APK se firma con esa clave (las actualizaciones se instalan encima). Si no, se firma con una clave de pruebas.
