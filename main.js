const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

//auto reloading for frontend development
if (process.env.NODE_ENV !== 'production') {
  require('electron-reload')(__dirname, {
    electron: require(path.join(__dirname, 'node_modules', 'electron')),
    forceHardReset: true,
    hardResetMethod: 'exit',
  });
}

//rendering everything
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 900,
    icon: path.join(__dirname, './renders/images/logo.png'),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load your HTML file or entry point URL
  mainWindow.loadFile(path.join(__dirname, './renders/Main_Landing.html'));

  // Create an empty menu
  const menu = Menu.buildFromTemplate([]);
  
  // Set the menu to null on the window
  mainWindow.setMenu(menu);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (mainWindow === null) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
