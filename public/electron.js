const { app, BrowserWindow } = require('electron')
const path = require('path')
app.commandLine.appendSwitch('disable-web-security');
app.whenReady().then(() => { 
  console.log('iniciando1') 
 
 
    const win = new BrowserWindow({
      webSecurity: false,
      width: 1000,
      height: 800,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    })  
    win.loadFile('./build/index.html')
})
