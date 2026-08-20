const APP_CONFIG = {
  empresaId: "laranita",
  empresaNombre: "La Ranita",
  colorPrimario: "#2a422b",
  colorSecundario: "#748475",
  // URL del Web App de Google Apps Script (ver DUPLICAR.md). Vacío = sin sincronización.
  sheetsWebAppUrl: "https://script.google.com/macros/s/AKfycby-1LU2ys8iXlA8vHQ4AtouuxCumoL1oUNpofdEFKExByPwkb9lt9_KR5XofffqWXp2/exec",
  // Mismo token que SHARED_SECRET en google-apps-script/Code.gs.
  sheetsSyncToken: "RAN2026",
  // Subir este número fuerza, en cada teléfono, un borrado del caché local
  // (IndexedDB) y una resincronización completa desde cero contra la Sheet
  // — sin que haya que tocar nada a mano en el celular. Se usa cuando se
  // borra o reordena algo grande directo en la Sheet (ej. "arrancar de 0"
  // el stock de Insumos) y hace falta que la app deje de mostrar lo viejo.
  // Ver verificarResetRemoto() en app.js. Dejar en 0 en el uso normal.
  resetVersion: 0,
};

export { APP_CONFIG };
