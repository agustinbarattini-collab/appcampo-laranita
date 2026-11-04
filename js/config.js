const APP_CONFIG = {
  empresaId: "laranita",
  empresaNombre: "La Ranita",
  colorPrimario: "#2a422b",
  colorSecundario: "#748475",
  // URL del Web App de Google Apps Script (ver DUPLICAR.md). Vacío = sin sincronización.
  sheetsWebAppUrl: "https://script.google.com/macros/s/AKfycby-1LU2ys8iXlA8vHQ4AtouuxCumoL1oUNpofdEFKExByPwkb9lt9_KR5XofffqWXp2/exec",
  // Mismo token que SHARED_SECRET en google-apps-script/Code.gs.
  sheetsSyncToken: "RAN2026",
  // Esta empresa no maneja retiros de insumos por contratista (no tiene
  // Insumos → Salida): Fitosanitarios no controla stock pendiente.
  controlStockContratista: false,
};

export { APP_CONFIG };
