// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
console.log("preload.js loaded");
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
      send: ipcRenderer.send,
      on: (channel, func) =>
      ipcRenderer.on(channel, (event, ...args) => func(event, ...args)),
      removeListener: ipcRenderer.removeListener
      // ... other methods you need
  },
  getData: (channel) => {
    ipcRenderer.send(channel);
  },
});

