/**
 * Created by xobtah on 21/07/17.
 */

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow () {
    let screenSize = require('electron').screen.getPrimaryDisplay().size;
    win = new BrowserWindow({ width: screenSize.width * 0.75, height: screenSize.height * 0.75 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'public/index.html'), protocol: 'file:', slashes: true
    }));
    //win.webContents.openDevTools();
    win.on('closed', () => { win = null; });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

app.on('activate', () => {
    if (!win)
        createWindow();
});