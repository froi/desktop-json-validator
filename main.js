const {app, BrowserWindow} = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({width: 1600, height: 1200});

  win.loadFile('index.html');

  win.on('close', () => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if(win === null) {
    createWindow();
  }
});