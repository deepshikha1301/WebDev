const electron = require("electron")
const path = require('path')
const url = require('url')
const { app, BrowserWindow } = electron;

app.on("ready", calInit);
let win

function calInit() {
    win = new BrowserWindow({
        height: 800,
        width: 500
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

// #########################################################################
// APP functions
// #########################################################################
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})