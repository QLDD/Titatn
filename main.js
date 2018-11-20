const { app, BrowserWindow, globalShortcut } = require('electron');

function createWindow() {

    let win = new BrowserWindow({
        width: 800,
        height: 600
    });

    // win.loadFile('index.html'); // loadUrl
    
    win.loadURL(`file://${__dirname}/src/index.html`);

    // win.loadURL(`file://${__dirname}/dist/index.html`);

    globalShortcut.register('CommandOrControl+Shift+D', () => {
        if (win) {
            win.webContents.openDevTools();
        }
    });
}

app.on('ready', createWindow);