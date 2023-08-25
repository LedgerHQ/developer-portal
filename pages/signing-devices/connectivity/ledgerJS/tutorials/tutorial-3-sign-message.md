---
title: Sign a personal message
subtitle:
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author:
toc: true
layout: doc
---

## Introduction

In this section, we will guide you through the creation of a web application. This application will connect to your Nano and will display the “test“ message to be signed with an Ethereum account using the personal sign message functionality introduced by EIP-191.

Web USB and Web HID applications are implemented with `@ledgerhq/hw-transport-webusb` and `@ledgerhq/hw-transport-webhid` respectively.

## Use case

This tutorial will let you sign a message with your private key in order to verify and prove that you’re the owner of the address. 

## Prerequisites

- Ensure you have gone through the prerequisites. 
- Install or update your Ethereum Embedded App to the version 1.9.19 or later.

## Coding

### Initialization

First, open a terminal and create a new folder in your usual working directory. For this tutorial, the folder will be named “example-sign-personal-message”.

Run:

```bash
mkdir example-sign-personal-message
cd example-sign-personal-message
```


Initialize the project by running:

```bash
npm init
```


Answer the questions displayed or by default press enter. There is no incidence on the execution.

Run:

```bash
mkdir src
touch src/index.html
touch src/main.js
```

Your folder must look like this: 

{: .center}
[![Folder USB and HID](../images/folderUsbHid.png)](../images/folderUsbHid.png){: style="border-bottom:none;"}  


### Coding

Open the folder example-sign-personal-message in a code editor.

#### index.html

In index.html copy and paste the following code:

```html
<!doctype html>
<html lang="en">
 <head>
   <meta charset="utf-8"/>
   <title>My First Embedded App</title>
   <script type="module" src="main.js"></script>
 </head>
 <body>
   <div id="main">

   </div>
   <button id="hashMessage">Hash my message</button>
 </body>
</html>
```


#### main.js	

In main.js copy and paste the following code:

<!--  -->
{% include alert.html style="important" text="Comment out or remove the Transport package you are not using (<code>@ledgerhq/hw-transport-webusb</code> or <code>@ledgerhq/hw-transport-webhid</code>) and the corresponding <code>const</code>. In the example, we use webusb. Webhid is already commented in line 8 and line 23." %}
<!--  -->


```js
import 'core-js/actual';
import { listen } from "@ledgerhq/logs";
import Eth from "@ledgerhq/hw-app-eth";

// Keep this import if you want to use a Ledger Nano S/X/S Plus with the USB protocol and delete the @ledgerhq/hw-transport-webhid import
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
// Keep this import if you want to use a Ledger Nano S/X/S Plus with the HID protocol and delete the @ledgerhq/hw-transport-webusb import
// import TransportWebHID from "@ledgerhq/hw-transport-webhid";

//Display the header in the div which has the ID "main"
const initial = "<h1>Connect your Nano and open the Ethereum app. Click on “Hash my message”</h1>";
const $main = document.getElementById("main");
$main.innerHTML = initial;

document.querySelector("#hashMessage").addEventListener("click", async () => {
 $main.innerHTML = initial;
 try {

   //trying to connect to your Ledger device with USB protocol
   const transport = await TransportWebUSB.create();

   //trying to connect to your Ledger device with HID protocol
   // const transport = await TransportWebHID.create();

   //listen to the events which are sent by the Ledger packages in order to debug the app
   listen(log => console.log(log))

   //When the Ledger device connected it is trying to display the bitcoin address
   const eth = new Eth(transport);
   const signature = await eth.signPersonalMessage("44'/60'/0'/0/0", Buffer.from("test").toString("hex"));
   const signedHash = "0x" + signature.r + signature.s + signature.v.toString(16);

   //Display your bitcoin address on the screen
   const h2 = document.createElement("h2");
   h2.textContent = signedHash;
   $main.innerHTML = "<h1>Your signed message:</h1>";
   $main.appendChild(h2);

   //Display the address on the Ledger device and ask to verify the address
   const { address } = await eth.getAddress("44'/60'/0'/0/0");
   const add = document.createElement("div");
   add.textContent = address
   $main.appendChild(add);
 } catch (e) {

   //Catch any error thrown and displays it on the screen
   const $err = document.createElement("code");
   $err.style.color = "#f66";
   $err.textContent = String(e.message || e);
   $main.appendChild($err);
 }
});
```



## Dependencies Installation

### Install the packages

Run: 

```bash
npm install --save core-js
npm install --save @ledgerhq/logs
npm install --save-dev parcel
npm install --save @ledgerhq/hw-app-eth
npm install --save eth-crypto
npm install --save-dev buffer
npm install --save-dev process
npm install --save-dev stream-browserify
```

### Install the Transport HID or USB package

Then depending on your choice install one of the corresponding packages: 
- Install the Ledger package `@ledgerhq/hw-transport-webhid` which provide you with all the methods to interact with your Nano with an HID connection (make sure that you use the 6.27.1 version):
`npm install --save @ledgerhq/hw-transport-webhid@6.27.1`

- Install the Ledger package `@ledgerhq/hw-transport-webusb` which provide you with all the methods to interact with your Nano with a USB connection (make sure that you use the 6.27.1 version):
`npm install --save @ledgerhq/hw-transport-webusb@6.27.1`


### Package.json

Modify `“main”: “index.js”` to `“source”:”src/index.html”`.

And ensure you have this line in your `package.json`:

```json
"scripts": {
   "build": "parcel build",
   "start": "parcel"
 },
```

Your `package.json` should look like this:

```json
{
 "name": "example-sign-personal-message",
 "version": "1.0.0",
 "description": "",
 "source": "src/index.html",
 "scripts": {
   "build": "parcel build",
   "start": "parcel"
 },
 "author": "",
 "license": "ISC",
 "dependencies": {
   "@ledgerhq/hw-app-eth": "^6.29.0",
   "@ledgerhq/hw-transport-webusb": "^6.27.1",
   "@ledgerhq/logs": "^6.10.0",
   "core-js": "^3.23.3",
   "eth-crypto": "^2.3.0"
 },
 "devDependencies": {
   "buffer": "^6.0.3",
   "parcel": "^2.6.2",
   "process": "^0.11.10",
   "stream-browserify": "^3.0.0"
 }
}
```



## Usage

### Start the development server

Now that the Setup is finished, the app has to be built to be displayed. Start the development server:

```bash
npm run start
```

Now the application is up and running. Open the browser and go to `localhost:1234`, it will display: 

{: .center}
[![Hash Message](../images/hash-message.png)](../images/hash-message.png){: style="border-bottom:none;"}  


### Plug your Nano

Before clicking on the “Hash my message”, connect your Nano to the USB port, unlock it and run the ethereum application. Then, click on “Hash my message”.

### Go to your Nano

When you click on the “Hash my message”, a popup message will be prompt inviting you to sign a message.

<!-- ------------- Image ------------- -->
<div class="uk-text-center">
  <img width="250"  src="../images/sign-message-01.png" >
</div>
<!-- --------------------------------- -->

Click the right button to see the content of the message that you are going to sign with your Ethereum address:

<!-- ------------- Image ------------- -->
<div class="uk-text-center">
  <img width="250"  src="../images/sign-message-02.png" >
</div>
<!-- --------------------------------- -->


### Sign the message

Click the right button to the next screens to sign the “test” message or decline it:

<!-- ------------- Image ------------- -->
<div class="uk-text-center">
  <img width="250"  src="../images/sign-message-03.png" >
</div>
<!-- --------------------------------- -->

<!-- ------------- Image ------------- -->
<div class="uk-text-center">
  <img width="250"  src="../images/sign-message-04.png" >
</div>
<!-- --------------------------------- -->


Once signed, the webapp will display:
- The signed message (“hash”)
- The Ethereum address used to sign the message



### Verify on runkit.com

You can verify that you are the one who signed the message by signing in on [runkit.com](https://runkit.com/home) and running the following piece of code.

1. Adapt the code with the message you signed and the hash of the message:

	```js
	const { ethers } = require("ethers");

	ethers.utils.verifyMessage("test","0xefb42c22baa0143b322e93b24b0903a0ef47a64b716fbb77debbea55a93dec3e4417aff7dce845723240916c6e34cf17c674828b3addfb0afad966334df5b6311b");
	```

2. Run your code, it should now display the Ethereum address linked to the signed message (the run can take a bit of time):

{: .center}
[![Runkit](../images/runkit-verification.png)](../images/runkit-verification.png){: style="border-bottom:none;"}  
