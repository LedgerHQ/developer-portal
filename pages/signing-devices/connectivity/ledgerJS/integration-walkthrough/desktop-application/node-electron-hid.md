---
title: Node HID integration
subtitle:
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author:
toc: true
layout: doc
---
## Introduction
In this section, we will guide you through the creation of a desktop electron application. This application will be connected to your Nano to display the address of your account (eg. bitcoin account, ethereum account).

## Prerequisites
Before starting, make sure you have gone through the [prerequisites](../prerequisites/).

## Implementation for Web USB and Web HID on Nano S/X/S Plus

For this application we will use the Ledger node hid package which is [@ledgerhq/hw-transport-node-hid](https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-node-hid).

### Project Initialization
First, open a terminal and create a new folder. For this tutorial the folder will be named “examples-node-electron-hid”.
Run:

```console
mkdir examples-node-electron-hid
cd examples-node-electron-hid
```

Then, initialize the project:

```console
npm init
```

Answer the questions displayed or by default press enter. There is no incidence on the execution.

Run:

```console
touch index.html
touch main.js
touch renderer.js
```

Your folder must look like this.

{: .center}
[![Folder of the Application](../images/folderNodeHID.png){:width="210px"}](../images/folderNodeHID.png)  
*Fig. 1: Folder of the Application*

### Code Implementation

#### index.html

In index.html copy-paste the following code:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Ledger Basic Electron HID</title>
    <style>
      #main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: sans-serif;
      }
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 20px;
        font-weight: normal;
      }
    </style>
  </head>
  <body>
    <div id="main"></div>
    <script src="./renderer.js"></script>
  </body>
</html>
```

#### main.js

In main.js copy-paste the following code:

```javascript
// Modules to control application life and create native browser window
require("babel-polyfill");
const TransportNodeHid = require("@ledgerhq/hw-transport-node-hid").default;
const AppBtc = require("@ledgerhq/hw-app-btc").default;
const { listen } = require("@ledgerhq/logs");


const { app, BrowserWindow, ipcMain } = require("electron");

// This a very basic example
// Ideally you should not run this code in main thread
// but run it in a dedicated node.js process
function getBitcoinInfo(verify) {
  return TransportNodeHid.open("")
    .then(transport => {
      listen(log => console.log(log))
      const appBtc = new AppBtc(transport);
      return appBtc.getWalletPublicKey("44'/0'/0'/0/0",{verify: verify, format: "legacy"}).then(r =>
        transport
          .close()
          .catch(e => {})
          .then(() => r)
      );
    })
    .catch(e => {
      console.warn(e);
      // try again until success!
      return new Promise(s => setTimeout(s, 1000)).then(() =>
        getBitcoinInfo(verify)
      );
    });
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
})

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // ~~~ BASIC LEDGER EXAMPLE ~~~

  ipcMain.on("requestBitcoinInfo", () => {
    getBitcoinInfo(false).then(result => {
      mainWindow.webContents.send("bitcoinInfo", result);
    });
  });

  ipcMain.on("verifyBitcoinInfo", () => {
    getBitcoinInfo(true);
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
```

#### renderer.js

In renderer.js copy-paste the following code:

```javascript
const electron = require("electron");
const { ipcRenderer } = electron;

document.getElementById("main").innerHTML =
  "<h1>Connect your Nano and open Bitcoin app...</h1>";

ipcRenderer.on("bitcoinInfo", (event, arg) => {
  const h1 = document.createElement("h2");
  h1.textContent = arg.bitcoinAddress;
  document.getElementById("main").innerHTML =
    "<h1>Your first Bitcoin address:</h1>";
  document.getElementById("main").appendChild(h1);
  ipcRenderer.send("verifyBitcoinInfo");
});

ipcRenderer.send("requestBitcoinInfo");
```

### Dependencies Installation

#### Install the packages

Run:

```console
npm install --save-dev electron
npm install --save babel-polyfill
npm install @ledgerhq/logs
npm install --save @ledgerhq/hw-app-btc
npm install --save browserify
npm install --save @ledgerhq/hw-transport-node-hid
```

<table>
    <thead>
        <tr>
            <th colspan="1">Package</th>
            <th colspan="2">What does it do?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://www.electronjs.org/">Electron</a></td>
            <td colspan="2">It is a build tool that will help you package your application to run it as a desktop application.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/@babel/polyfill">Babel polyfill</a></td>
            <td colspan="2"></td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/@ledgerhq/logs">@ledgerhq/logs</a></td>
            <td colspan="2">It provides you with the log of all the error from your connexion with your Ledger device that may appear when developing. </td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-app-btc">@ledgerhq/hw-app-btc</a></td>
            <td colspan="2">It helps you ask your Ledger Nano to access the bitcoin address.</td>
        </tr>
        <tr>
            <td><a href="https://browserify.org/">Browserify</a></td>
            <td colspan="2">It helps you use "require" like Node does.</td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-node-hid">@ledgerhq/hw-transport-node-hid</a></td>
            <td colspan="2">It provides you with all the methods to interact with your Nano with an HID connexion.</td>
        </tr>
    </tbody>
</table>

Since automatic polyfills have been removed in webpack 5, run the following command to avoid errors when building the app locally:

```console
npm install node-polyfill-webpack-plugin
npm i stream
```

#### Modify Package.json

1. Modify the 5th line: `"main": "index.js"` => `"source": "index.html"`
2. Ensure you have this line in scripts:

```javascript
  "scripts": {
    "start": "electron"
  },
```

Your file should know look like this:

```javascript
{
  "name": "examples-node-electron-hid",
  "version": "1.0.0",
  "description": "",
  "source": "index.html",
  "scripts": {
    "start": "electron ."
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^16.0.10"
  },
  "dependencies": {
    "@ledgerhq/hw-app-btc": "^6.24.1",
    "@ledgerhq/hw-transport-node-hid": "^6.24.1",
    "@ledgerhq/logs": "^6.10.0",
    "babel-polyfill": "^6.26.0",
    "browserify": "^17.0.0",
    "node-polyfill-webpack-plugin": "^1.1.4",
    "stream": "^0.0.2"
  }
}
```
## Desktop App Test

### Start the Development Server
Now that the Setup is finished, let's start the application.
```console
node_modules/electron/dist/Electron.app/Contents/MacOS/Electron ./main.js
```

Now the application is up and running. A window must have been launched on your machine, it will display:

<div class="uk-text-center">
<a href="../images/electron-node-hid-window.png" style="border-bottom:none;">
<img src="../images/electron-node-hid-window.png" >
</a>
*Fig. 2: Node Desktop Application*
</div>

### Plug Your Nano
Connect your Nano to the USB port, unlock it and open the Bitcoin application.
The steps are described below.

{: .center}
[![Nano Enter Code Pin](../images/ledgerCodePin.jpg){:width="300"}](../images/ledgerCodePin.jpg)  
*Fig. 3: Nano Enter Code Pin*

{: .center}
[![Embedded Application](../images/ledgerBtc.jpg){:width="300"}](../images/ledgerBtc.jpg)   
*Fig. 4: Embedded Application*

{: .center}
[![Nano Run Application](../images/ledgerReady.jpg){:width="300"}](../images/ledgerReady.jpg)   
*Fig. 5: Nano Run Application*

Then, if all goes well, the Bitcoin address you've just [created](#prerequisites) is displayed on the application.


<div class="uk-text-center">
<a href="../images/electron-node-address.png" style="border-bottom:none;">
<img src="../images/electron-node-address.png" >
</a>
*Fig. 6: Address Account Displayed*
</div>

Congratulations you have successfully built your first application connected with Ledger!
