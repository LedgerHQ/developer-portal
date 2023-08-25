---
title: Web USB/HID
subtitle:
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author:
toc: true
layout: doc
---
## Introduction
In this section, we will guide you through the creation of a web application. This application will connect to your Nano to display the address of a Bitcoin account. If you want it for Ethereum you can easily modify it.

Web USB and Web HID applications are implemented with [@ledgerhq/hw-transport-webusb](https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-webusb) and [@ledgerhq/hw-transport-webhid](https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-webhid) respectively.

## Prerequisites
Before starting ensure you have gone through the [prerequisites](../prerequisites).

## Coding



### Initialization
First, open a terminal and create a new folder in your usual working directory. For this tutorial, the folder will be named "example-web-hid-usb".

Run:

```console
mkdir example-web-hid-usb
cd example-web-hid-usb
```

Initialize the project by running:

```console
npm init
```

Answer the questions displayed or by default press enter. There is no incidence on the execution.

Run:

```console
mkdir src
touch src/index.html
touch src/main.js
```

Your folder must look like this.

{: .center}
[![Folder USB and HID](../images/folderUsbHid.png)](../images/folderUsbHid.png){: style="border-bottom:none;"}  
*Fig. 1: File structure*

### Coding
Open the folder example-web-hid-usb in an code editor.

#### index.html
In index.html copy-paste the following code :


```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>My First Embedded App</title>
    <script type="module" src="main.js"></script>
  </head>
  <body id="main">

  </body>
</html>
```


#### main.js

In main.js copy-paste the following code:

<!--  -->
{% include alert.html style="important" text="Comment out or remove the Transport package you are not using (@ledgerhq/hw-transport-webusb or @ledgerhq/hw-transport-webhid) and the corresponding <code>const</code>." %}
<!--  -->

```javascript
import 'core-js/actual';
import { listen } from "@ledgerhq/logs";
import AppBtc from "@ledgerhq/hw-app-btc";

// Keep this import if you want to use a Ledger Nano S/X/S Plus with the USB protocol and delete the @ledgerhq/hw-transport-webhid import
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
// Keep this import if you want to use a Ledger Nano S/X/S Plus with the HID protocol and delete the @ledgerhq/hw-transport-webusb import
import TransportWebHID from "@ledgerhq/hw-transport-webhid";

//Display the header in the div which has the ID "main"
const initial = "<h1>Connect your Nano and open the Bitcoin app. Click anywhere to start...</h1>";
const $main = document.getElementById("main");
$main.innerHTML = initial;

document.body.addEventListener("click", async () => {
  $main.innerHTML = initial;
  try {

    // Keep if you chose the USB protocol
    const transport = await TransportWebUSB.create();

    // Keep if you chose the HID protocol
    const transport = await TransportWebHID.create();

    //listen to the events which are sent by the Ledger packages in order to debug the app
    listen(log => console.log(log))

    //When the Ledger device connected it is trying to display the bitcoin address
    const appBtc = new AppBtc(transport);
    const { bitcoinAddress } = await appBtc.getWalletPublicKey(
      "44'/0'/0'/0/0",
      { verify: false, format: "legacy"}
    );

    //Display your bitcoin address on the screen
    const h2 = document.createElement("h2");
    h2.textContent = bitcoinAddress;
    $main.innerHTML = "<h1>Your first Bitcoin address:</h1>";
    $main.appendChild(h2);

    //Display the address on the Ledger device and ask to verify the address
    await appBtc.getWalletPublicKey("44'/0'/0'/0/0", {format:"legacy", verify: true});
  } catch (e) {

    //Catch any error thrown and displays it on the screen
    const $err = document.createElement("code");
    $err.style.color = "#f66";
    $err.textContent = String(e.message || e);
    $main.appendChild($err);
  }
});
```
### Dependencies Installation

#### Install the packages

Run:

```console
npm install --save core-js
npm install --save @ledgerhq/logs
npm install --save-dev parcel
npm install --save @ledgerhq/hw-app-btc
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
            <td><a href="https://www.npmjs.com/package/core-js">core-js</a></td>
            <td colspan="2">Modular standard library for JavaScript.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/@ledgerhq/logs">@ledgerhq/logs</a></td>
            <td colspan="2">It provides you the log of all the errors from your connection with your Nano that may appear when developing.</td>
        </tr>
        <tr>
            <td><a href="https://parceljs.org/">parcel</a></td>
            <td colspan="2">It is a build tool that will help you package your application to run it in the browser.</td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-app-btc">@ledgerhq/hw-app-btc</a></td>
            <td colspan="2">It will help you ask your Nano to access the Bitcoin address.</td>
        </tr>
    </tbody>
</table>


#### Install the Transport HID or USB package
Then depending on your choice install one of the corresponding packages:
- Install the Ledger package [@ledgerhq/hw-transport-webhid](https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-webhid) which provide you with all the methods to interact with your Nano with an HID connection:
    ```console
    npm install --save @ledgerhq/hw-transport-webhid
    ```
- Install the Ledger package [@ledgerhq/hw-transport-webusb](https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-webusb) which provide you with all the methods to interact with your Nano with a USB connection:
    ```console
    npm install --save @ledgerhq/hw-transport-webusb
    ``` 


#### Package.json

Modify `"main": "index.js"` to `"source": "src/index.html"`.

And ensure you have this line in your package.json:
```javascript
  "scripts": {
    "build": "parcel build", 
    "start": "parcel"
  },
```

Add this at the end of the script:

```javascript
  "alias": {
    "@ledgerhq/devices": "@ledgerhq/devices/lib-es"
  }
```

Your "package.json" should look like this:

```javascript
{
  "name": "example-web-hid-usb",
  "version": "1.0.0",
  "description": "",
  "source": "src/index.html",
  "dependencies": {
    "@ledgerhq/hw-app-btc": "^6.24.1",
    "@ledgerhq/hw-transport-webhid": "^6.24.1", 
    "@ledgerhq/hw-transport-webusb": "^6.24.1", 
    "@ledgerhq/logs": "^6.10.0",
    "core-js": "^3.21.1"
  },
  "devDependencies": {
      "parcel": "^2.0.0"
  },
  "scripts": {
    "build": "parcel build", 
    "start": "parcel"
  },
  "author": "",
  "license": "ISC",

  "alias": {
    "@ledgerhq/devices": "@ledgerhq/devices/lib-es"
  }
}
```

<!--  -->
{% include alert.html style="important" text="In package.json, remove the Transport package you are not using (@ledgerhq/hw-transport-webusb or @ledgerhq/hw-transport-webhid)." %}
<!--  -->

## Launch

### Start the Development Server
Now that the Setup is finished, the app has to be built to be displayed.
Start the development server:

```console
npm run start
```

Now the application is up and running. Open the browser and go to `localhost:1234`, it will display :

{: .center}
[![Application running on browser](../images/webapp1.png)](../images/webapp1.png){: style="border-bottom:none;"}  
*Fig. 3: Application Running on Browser*
### Plug your Nano
Before clicking on the text connect your Nano to the USB port, unlock it and run the bitcoin application.
The steps are described below.

{: .center}
[![Enter Pin](../images/ledgerCodePin.jpg){:width="300"}](../images/ledgerCodePin.jpg){: style="border-bottom:none;"}   
*Fig. 4: Enter Pin*

{: .center}
[![Selection Bitcoin](../images/ledgerBtc.jpg){:width="300"}](../images/ledgerBtc.jpg){: style="border-bottom:none;"}   
*Fig. 5: Select Bictoin*

{: .center}
[![Run App](../images/ledgerReady.jpg){:width="300"}](../images/ledgerReady.jpg){: style="border-bottom:none;"}   
*Fig. 6: The App is running*

### Connect Your Nano to the Application
Now you can click on the text and a popup will be prompt. Choose your Nano and click connect:

{: .center}
[![Connect your Nano](../images/webapp2.png)](../images/webapp2.png){: style="border-bottom:none;"}  
*Fig. 7: Connect your Nano*

Then if all goes well you must have the bitcoin address you just create [previously](#prerequisites)

{: .center}
[![Address Account Displayed](../images/webapp3.png)](../images/webapp3.png){: style="border-bottom:none;"}  
*Fig. 8: Address Account Displayed*

Congratulations, you have successfully built your first application connected with a Nano !

<!--  -->
{% include alert.html style="note" text="Note that if your finalize the operation on your Nano by accepting or rejecting, the corresponding message appears on your web application." %}
<!--  -->


## Android chrome

Android chrome supports the use of the Ledger device by HID and USB.
On a mobile phone, only android can support the web application.
Moreover, on android, just chrome can support the web application.

### Launch on Android chrome
To test your application on android, a little change has to be made. Just add the "--https" flag in your start script, and run the script.

#### package.json
```javascript
{
  "name": "example-web-hid-usb",
  "version": "1.0.0",
  "description": "",
  "source": "src/index.html",
  "dependencies": {
    "@ledgerhq/hw-app-btc": "^6.12.1",
    "@ledgerhq/hw-transport-webhid": "^6.11.2", 
    "@ledgerhq/hw-transport-webusb": "^6.11.2",
    "@ledgerhq/logs": "^6.10.0",
    "core-js": "^3.20.2"
  },
  "devDependencies": {
    "parcel": "^2.0.0"
  },
  "scripts": {
    "build": "parcel build",
    "start": "parcel --https" 
  },
  "author": "",
  "license": "ISC"
}
```

<!--  -->
{% include alert.html style="important" text="In package.json, remove the Transport package you are not using (@ledgerhq/hw-transport-webusb or @ledgerhq/hw-transport-webhid)." %}
<!--  -->

The browser will ask you that the website is malicious, to continue, click on "advanced settings" and then on "continue to the localhost site".
Now you can test to connect your Nano on your android just like the [previous step](#web-app-test).

