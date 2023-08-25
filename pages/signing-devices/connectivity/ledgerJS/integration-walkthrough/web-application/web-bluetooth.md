---
title: Web Bluetooth
subtitle:
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author:
toc: true
layout: doc
---
## Introduction
In this section, we will guide you through the creation of an application. This application will connect to your Ledger Nano X to display the address of your account (eg. bitcoin account, ethereum account).

## Prerequisites
Before starting, make sure you have gone through the [prerequisites](../prerequisites).

## Web App Bluetooth (only Nano X)

The Ledger Nano S and S Plus do not have the Bluetooth functionality. This tutorial will only work with a Ledger Nano X.

Please be aware that the Bluetooth implementation is only supported by a few browsers.
You can check the [browser support](https://caniuse.com/web-bluetooth) for the Web Bluetooth.

### Project Initialization
This web application is build with React, which is a frontend Javascript framework.


First, open a terminal and create a new project. For this tutorial the project will be named “examples-web-bluetooth”.

Run:

```console
npx create-react-app examples-web-bluetooth
cd examples-web-bluetooth
```

Open the folder in an editor.
The React app initialization creates a "src" folder where you will find all the code.

Run:

```console
touch ./src/QRCode.js
touch ./src/polyfill.js
```
Your folder must look like this.

{: .center}
[![Folder of the Application](../images/folderWebBle.png){:width="210"}](../images/folderWebBle.png){: style="border-bottom:none;"}  
*Fig. 1: Folder of the Application*

For this implemetation, you will only modify "App.js", "App.css”, "index.js", "polyfill.js" and “QRCode.js”.

### Code Implementation


#### polyfill.js

In "polyfill.js" copy-paste the following code:

```javascript
global.Buffer = require("buffer").Buffer;
```

#### index.js

In "index.js" add the following code:

```javascript
import './polyfill'
```
#### App.js

In App.js copy-paste the following code:

```javascript
import React, { Component } from "react";
import TransportWebBLE from "@ledgerhq/hw-transport-web-ble";
import AppEth from "@ledgerhq/hw-app-eth";
import QRCode from "./QRCode";
import "./App.css";

const delay = ms => new Promise(success => setTimeout(success, ms));

class DeviceSelectionScreen extends Component {
  //Component that will display all the Ledger Nano X that is recognized by bluetooth

  state = {
    devices: []
  };

  createBLE = async () => {
    const transport = await TransportWebBLE.create();
    this.props.onSelectDevice(transport);
  };

  render() {
    return (
      <div className="DeviceSelectionScreen">
        <p>
          Power up your Ledger Nano X and enter your pin before continuing...
        </p>
        <button onClick={this.createBLE}>Connect with Bluetooth</button>
      </div>
    );
  }
}

class ShowAddressScreen extends Component {
  //Component that is responsible to display your ethereum address

  state = {
    error: null,
    address: null
  };

  async componentDidMount() {
    while (!this.state.address) {
      if (this.unmounted) return;
      await this.fetchAddress(false);
      await delay(500);
    }
    this.fetchAddress(true);
  }

  async componentWillUnmount() {
    this.unmounted = true;
  }

  fetchAddress = async verify => {
    const { transport } = this.props;
    try {
      const eth = new AppEth(transport);
      const path = "44'/60'/0'/0/0"; // HD derivation path
      const { address } = await eth.getAddress(path, verify);
      if (this.unmounted) return;
      this.setState({ address });
    } catch (error) {
      // in this case, user is likely not on Ethereum app
      console.warn("Failed: " + error.message);
      if (this.unmounted) return;
      this.setState({ error });
      return null;
    }
  };

  render() {
    const { address, error } = this.state;

    return (
      <div className="ShowAddressScreen">
        {!address ? (
          <>
            <p className="loading">Loading your Ethereum address...</p>
            {error ? (
              <p className="error">
                A problem occurred, make sure to open the Ethereum application
                on your Ledger Nano X. (
                {String((error && error.message) || error)})
              </p>
            ) : null}
          </>
        ) : (
          <>
            <strong>Ledger Live Ethereum Account 1</strong>
            <QRCode data={address} size={300} />
            <strong>{address}</strong>
          </>
        )}
      </div>
    );
  }
}

class App extends Component {
  state = {
    transport: null
  };

  onSelectDevice = transport => {
    window.ledgerTransport = transport;
    transport.on("disconnect", () => {
      this.setState({ transport: null });
    });
    this.setState({ transport });
  };

  render() {
    const { transport } = this.state;
    return (
      <div className="App">
        {!transport ? (
          <DeviceSelectionScreen onSelectDevice={this.onSelectDevice} />
        ) : (
          <ShowAddressScreen transport={transport} />
        )}
      </div>
    );
  }
}

export default App;
```


#### App.css

In App.css copy-paste the following code:

```css
.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.App .DeviceSelectionScreen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.App .ShowAddressScreen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.App .error {
  color: #a00;
}

.App .ShowAddressScreen strong {
  margin: 1em;
}
```


#### QRCode.js

In "QRCode.js" copy-paste the following code:

```javascript
import React, { PureComponent } from "react";
import qrcode from "qrcode";

type Props = {
  data: string,
  errorCorrectionLevel: string,
  size: number,
  style?: *
};

export default class QRCode extends PureComponent<Props> {
  static defaultProps = {
    size: 200,
    errorCorrectionLevel: "H"
  };

  componentDidMount() {
    this.drawQRCode();
  }

  componentDidUpdate() {
    this.drawQRCode();
  }

  _canvas = null;

  drawQRCode() {
    const { data, size, errorCorrectionLevel } = this.props;
    qrcode.toCanvas(this._canvas, data, {
      width: size,
      margin: 0,
      errorCorrectionLevel,
      color: {
        light: "#ffffff"
      }
    });
  }

  render() {
    return <canvas style={this.props.style} ref={n => (this._canvas = n)} />;
  }
}
```

<!--  -->
{% include alert.html style="tip" text="Some error will be emphasized by your editor because of the 'QRCode.js' use some features from typescript. But you can skip those errors as they will not affect the application.
" %}
<!--  -->

### Dependencies Installation

Run:

```console
npm install --save qrcode
npm install --save @ledgerhq/hw-app-eth
npm install --save @ledgerhq/hw-transport-web-ble
npm install --save buffer
npm install --save node-polyfill-webpack-plugin
npm install --save stream
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
            <td><a href="https://www.npmjs.com/package/qrcode">qrcode</a></td>
            <td colspan="2">It allows you to create a QR code.</td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-app-eth">@ledgerhq/hw-app-eth</a></td>
            <td colspan="2">It will help you ask your Nano to access the ethereum address.</td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-web-ble">@ledgerhq/hw-transport-web-ble</a></td>
            <td colspan="2">It provides you with all the methods to interact with your Ledger Nano X with a Bluetooth connexion.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/buffer">buffer</a></td>
            <td colspan="2">The goal is to provide an API that is 100% identical to node's Buffer API.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/node-polyfill-webpack-plugin">node-polyfill-webpack-plugin</a></td>
            <td colspan="2">Polyfill Node.js core modules in Webpack. This module is only needed for webpack 5+.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/stream">stream</a></td>
            <td colspan="2">Node.js streams in the browser. Ported straight from the Node.js core and adapted to component/emitter's api.</td>
        </tr>
    </tbody>
</table>

#### Package.json Dependencies
Now that the dependencies are installed you can find them in the “package.js”.
This is how your “package.json” has to look like:

```javascript
{
  "name": "examples-web-bluetooth",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@ledgerhq/hw-app-eth": "^6.26.0",
    "@ledgerhq/hw-transport-web-ble": "^6.24.1",
    "@testing-library/jest-dom": "^5.16.1",
    "@testing-library/react": "^12.1.2",
    "@testing-library/user-event": "^13.5.0",
    "buffer": "^6.0.3",
    "eip55": "^2.1.0",
    "node-polyfill-webpack-plugin": "^1.1.4",
    "qrcode": "^1.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "stream": "^0.0.2",
    "web-vitals": "^2.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}


```
## Web App Test
### Start the Development Server

Make sure the Bluetooth feature of your Nano is enabled.

<!--  -->
{% include alert.html style="important" text="If it was not enabled, you need to enable it and then power off the power on your Nano." %}
<!--  -->


Now that the Setup is finished, the app has to be available to be displayed.
Therefore start the development server:

```console
npm run start
```

<!--  -->
{% include alert.html style="warning" text="All the browser do not support the Bluetooth please look at the <a href='https://caniuse.com/web-bluetooth' class='alert-link'> browser support </a>.
" %}
<!--  -->


Now the application is up and running. Open the browser and go to `localhost:3000`, it will display :

{: .center}
[![Application Running on Browser](../images/webBle1.png){:width="840"}](../images/webBle1.png){: style="border-bottom:none;"}   
*Fig. 2: Application Running on Browser*  

### Launch Ethereum App
Before clicking on the button, unlock it and run the Ethereum application.
The steps are described below.

{: .center}
[![Nano Enter Code Pin](../images/ledgerCodePin.jpg){:width="300"}](../images/ledgerCodePin.jpg){: style="border-bottom:none;"}  
*Fig. 4: Nano Enter Code Pin*

{: .center}
[![Embedded Application](../images/ledgerEth.jpg){:width="300"}](../images/ledgerEth.jpg){: style="border-bottom:none;"}   
*Fig. 5: Embedded Application*

{: .center}
[![Embedded Run Application](../images/ledgerReady.jpg){:width="300"}](../images/ledgerReady.jpg){: style="border-bottom:none;"}   
*Fig. 6: Embedded Run Application*

### Connect Your Nano to the Application
Now you can click on the button and a popup will be prompt. Choose your Ledger Nano X and click connexion

{: .center}
[![Connect the Nano with Bluetooth](../images/webBle2.png){:width="840"}](../images/webBle2.png){: style="border-bottom:none;"}   
*Fig. 7: Connect the Nano with Bluetooth*

Then another popup will be prompt to ask you to confirm the pairing

{: .center}
[![Request of Pairing](../images/webBle3.png){:width="840"}](../images/webBle3.png){: style="border-bottom:none;"}   
*Fig. 8: Request of Pairing*

Finally, if all goes well the address must be displayed with the QR code

{: .center}
[![Address Account Displayed](../images/webBle4.png){:width="840"}](../images/webBle4.png){: style="border-bottom:none;"}   
*Fig. 9: Address Account Displayed*

### Verify the Address on Nano
For security reasons, the address will also be displayed on your Ledger Nano X to verify and confirm the address.

{: .center}
[![Nano Verify Screen](../images/ledgerVerify.jpg){:width="300"}](../images/ledgerVerify.jpg){: style="border-bottom:none;"}   
*Fig. 10: Nano Verify Screen*

{: .center}
[![Nano Verify Address Screen](../images/ledgerAddress.jpg){:width="300"}](../images/ledgerAddress.jpg){: style="border-bottom:none;"}   
*Fig. 11: Nano Verify Address Screen*

{: .center}
[![Emnedded Approve Screen](../images/ledgerApprove.jpg){:width="300"}](../images/ledgerApprove.jpg){: style="border-bottom:none;"}   
*Fig. 12: Embedded Approve Screen*

Congratulations you have successfully built your first application connected with Ledger Nano X!
