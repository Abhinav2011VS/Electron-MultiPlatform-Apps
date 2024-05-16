const { app, BrowserWindow } = require('electron');

// Function to create the app window
function createWindow() {
  // Create the browser window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the index.html file of the app
  mainWindow.loadFile('index.html');

  // Open the DevTools
  mainWindow.webContents.openDevTools();
}

// When Electron is ready, create the app window
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS where it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, re-create a window in the app when the dock icon is clicked and there are no other windows open
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
