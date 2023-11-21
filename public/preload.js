const { contextBridge, ipcRenderer } = require('electron')
console.log('O preload script está funcionando corretamente.');
contextBridge.exposeInMainWorld('electron', {})