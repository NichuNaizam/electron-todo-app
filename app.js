const { BrowserWindow, app, Menu } = require('electron');

let window;

function createWindow() {
    window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },

        width: 1280,
        height: 720,
    });

    window.loadFile('./index.html');

    const menu = Menu.buildFromTemplate([
        {
            label: 'Todos',
            submenu: [
                {
                    label: 'Clear all todos',
                    click: function () {
                        window.webContents.send('clear-all');
                    }
                }
            ]
        }
    ]);
    
	window.setMenu(menu);
}

app.on('ready', createWindow);

module.exports = window;