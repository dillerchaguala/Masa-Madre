const { app, BrowserWindow } = require('electron');
const path = require('path');

/**
 * Crea la ventana principal de la aplicación Electron.
 * En desarrollo carga el servidor de Vite (http://localhost:5173).
 * En producción carga el archivo dist/index.html generado por Vite.
 */
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1024,
    minHeight: 600,
    backgroundColor: '#ffffff',
    title: 'Masa Madre',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  if (!app.isPackaged) {
    // Modo desarrollo: usamos el servidor de Vite
    const devUrl = 'http://localhost:5173/';
    mainWindow.loadURL(devUrl);
  } else {
    // Modo producción: cargamos el build estático de Vite
    const indexPath = path.join(__dirname, '../dist/index.html');
    mainWindow.loadFile(indexPath);
  }
}

app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
