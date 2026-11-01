// Before any module: Excalidraw reads this when it loads, and without it asks an outside server for fonts.
window.EXCALIDRAW_ASSET_PATH = new URL("./", location.href).href;
// GitHub Pages cannot send a frame header, so inside another site's frame this page stops and shows nothing.
if (window.top !== window.self) {
  window.stop();
  document.documentElement.remove();
}
