---
title: React Native Bluetooth on iOS (Nano X only)
subtitle:
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author:
toc: true
layout: doc
---
## Introduction
In this section, you will see how to create a React Native application using the [@ledgerhq/react-native-hw-transport-ble](https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-transport-web-ble).
For this project some general prerequisites are mandatory and you can find them [here](../prerequisites/).

Then you can now go through the prerequisite for iOS development below.

## Prerequisites

#### Install Homebrew
Homebrew is a package manager for macOS. When it needs to install software from third-party websites. To install it, run:

```console
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
```



#### Install watchman
React Native uses watchman to detect real-time code changes and it automatically builds and pushes the update to your device without manually refreshing.

```console
brew install watchman
```


#### Install Java JRE and JDK
There is a risk of react-native build failure if you don’t have a complete installation of Java. Downloading Android Studio is not enough since it comes bundled with its own JRE.


```console
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```


#### Install React Native
With React Native, you can write an application in Javascript and then the React Native Compiler will convert your Javascript code into native code for iOS and Android environments.
React Native command line interface can be installed using npm as below.

```console
npm install -g react-native-cli
```


### iOS development prerequisites

To develop an iOS application we have to install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) via the Mac App Store.

When the installation is complete, open Xcode then go to Settings => Locations.

{: .center}
[![Xcode Settings](../images/Xcode-settings.png){:width="840"}](../images/Xcode-settings.png){: style="border-bottom:none;"}   
*Fig. 1: Xcode Settings*

Select the most recent version from the "Command Line Tools" dropdown.

{: .center}
[![Xcode Location Settings](../images/Xcode-locations.png){:width="840"}](../images/Xcode-locations.png){: style="border-bottom:none;"}   
*Fig. 2: Xcode Location Settings*

Finally, install cocoapods by running:
```console
sudo gem install cocoapods
```


## Mobile App Build
Now that we have set up the prerequisites, you can now create the application.
In this integration, we will use the ethereum application.

### Project Initialization
First, open a terminal and create a new project. For this tutorial the project will be named “ledgerApp”.

Run:

```console
react-native init ledgerApp
cd ledgerApp
```

<!--  -->
{% include alert.html style="tip" text="During the initialization, it is installing required 'CocoaPods' dependencies and it may take time." %}
<!--  -->

### Code Implementation

Run:
```console
mkdir src
touch polyfill.js
touch src/DeviceItem.js
touch src/DeviceSelectionScreen.js
touch src/ShowAddressScreen.js
```

#### polyfill.js

In "polyfill.js", copy-paste the following code:

```javascript
global.Buffer = require("buffer").Buffer;
```

#### index.js

Then import the polyfill in "index.js" as shown below:

```javascript
/**
 * @format
 */

import "./polyfill";    //import this
import {AppRegistry} from 'react-native';
import App from './src/App';    //modify this import
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

#### App.js

Move the file named "App.js" in the "src" folder and copy-paste the following code:

```javascript
import React, { Component } from "react";

import DeviceSelectionScreen from "./DeviceSelectionScreen";
import ShowAddressScreen from "./ShowAddressScreen";

import TransportBLE from "@ledgerhq/react-native-hw-transport-ble";

// This is helpful if you want to see BLE logs. (only to use in dev mode)

class App extends Component {
  state = {
    transport: null
  };

  onSelectDevice = async device => {
    const transport = await TransportBLE.open(device);
    transport.on("disconnect", () => {
      // Intentionally for the sake of simplicity we use a transport local state
      // and remove it on disconnect.
      // A better way is to pass in the device.id and handle the connection internally.
      this.setState({ transport: null });
    });
    this.setState({ transport });
  };

  render() {
    const { transport } = this.state;
    if (!transport) {
      return <DeviceSelectionScreen onSelectDevice={this.onSelectDevice} />;
    }
    return <ShowAddressScreen transport={transport} />;
  }
}

export default App;
```

In "DeviceItem.js" copy-paste the following code:

```javascript
import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";

class DeviceItem extends Component {
  state = {
    pending: false
  };
  onPress = async () => {
    this.setState({ pending: true });
    try {
      await this.props.onSelect(this.props.device);
    } finally {
      this.setState({ pending: false });
    }
  };

  render() {
    const { device } = this.props;
    const { pending } = this.state;
    return (
      <TouchableOpacity
        style={styles.deviceItem}
        onPress={this.onPress}
        disabled={pending}
      >
        <Text style={styles.deviceName}>{device.name}</Text>
        {pending ? <ActivityIndicator /> : null}
      </TouchableOpacity>
    );
  }
}
export default DeviceItem;

const styles = StyleSheet.create({
  deviceItem: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "#ccc",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  deviceName: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
```

In "DeviceSelectionScreen.js", copy-paste the following code:

```javascript
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  PermissionsAndroid
} from "react-native";
import { Observable } from "rxjs";
import AppEth from "@ledgerhq/hw-app-eth";
import TransportBLE from "@ledgerhq/react-native-hw-transport-ble";
import QRCode from "react-native-qrcode-svg";
import DeviceItem from "./DeviceItem";

const deviceAddition = device => ({ devices }) => ({
  devices: devices.some(i => i.id === device.id)
    ? devices
    : devices.concat(device)
});

class DeviceSelectionScreen extends Component {
  state = {
    devices: [],
    error: null,
    refreshing: false
  };

  async componentDidMount() {
    // NB: this is the bare minimal. We recommend to implement a screen to explain to user.
    if (Platform.OS === "android") {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
      );
    }
    let previousAvailable = false;
    new Observable(TransportBLE.observeState).subscribe(e => {
      if (e.available !== previousAvailable) {
        previousAvailable = e.available;
        if (e.available) {
          this.reload();
        }
      }
    });

    this.startScan();
  }

  componentWillUnmount() {
    if (this.sub) this.sub.unsubscribe();
  }

  startScan = async () => {
    this.setState({ refreshing: true });
    this.sub = new Observable(TransportBLE.listen).subscribe({
      complete: () => {
        this.setState({ refreshing: false });
      },
      next: e => {
        if (e.type === "add") {
          this.setState(deviceAddition(e.descriptor));
        }
        // NB there is no "remove" case in BLE.
      },
      error: error => {
        this.setState({ error, refreshing: false });
      }
    });
  };

  reload = async () => {
    if (this.sub) this.sub.unsubscribe();
    this.setState(
      { devices: [], error: null, refreshing: false },
      this.startScan
    );
  };

  keyExtractor = (item: *) => item.id;

  onSelectDevice = async device => {
    try {
      await this.props.onSelectDevice(device);
    } catch (error) {
      this.setState({ error });
    }
  };

  renderItem = ({ item }: { item: * }) => {
    return <DeviceItem device={item} onSelect={this.onSelectDevice} />;
  };

  ListHeader = () => {
    const { error } = this.state;
    return error ? (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sorry, an error occured</Text>
        <Text style={styles.errorTitle}>{String(error.message)}</Text>
      </View>
    ) : (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scanning for Bluetooth...</Text>
        <Text style={styles.headerSubtitle}>
          Power up your Ledger Nano X and enter your pin.
        </Text>
      </View>
    );
  };

  render() {
    const { devices, error, refreshing } = this.state;

    return (
      <FlatList
        extraData={error}
        style={styles.list}
        data={devices}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ListHeaderComponent={this.ListHeader}
        onRefresh={this.reload}
        refreshing={refreshing}
      />
    );
  }
}

export default DeviceSelectionScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: 80,
    paddingBottom: 36,
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 22,
    marginBottom: 16
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#999"
  },
  list: {
    flex: 1
  },
  errorTitle: {
    color: "#c00",
    fontSize: 16,
    marginBottom: 16
  }
});
```

In "ShowAddressScreen.js", copy-paste the following code:

```javascript
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppEth from "@ledgerhq/hw-app-eth";
import TransportBLE from "@ledgerhq/react-native-hw-transport-ble";
import QRCode from "react-native-qrcode-svg";

const delay = ms => new Promise(success => setTimeout(success, ms));

class ShowAddressScreen extends Component {
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
    await this.fetchAddress(true);
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
      if (this.unmounted) return;
      this.setState({ error });
      return null;
    }
  };

  render() {
    const { address, error } = this.state;

    return (
      <View style={styles.ShowAddressScreen}>
        {!address ? (
          <>
            <Text style={styles.loading}>Loading your Ethereum address...</Text>
            {error ? (
              <Text style={styles.error}>
                A problem occurred, make sure to open the Ethereum application
                on your Ledger Nano X. (
                {String((error && error.message) || error)})
              </Text>
            ) : null}
          </>
        ) : (
          <>
            <Text style={styles.title}>Ledger Live Ethereum Account 1</Text>
            <QRCode value={address} size={300} />
            <Text style={styles.address}>{address}</Text>
          </>
        )}
      </View>
    );
  }
}

export default ShowAddressScreen;

const styles = StyleSheet.create({
  ShowAddressScreen: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    color: "#c00",
    fontSize: 16
  },
  loading: {
    color: "#999",
    fontSize: 16
  },
  title: {
    fontSize: 22,
    marginBottom: 16
  },
  address: {
    marginTop: 16,
    color: "#555",
    fontSize: 14
  }
});
```

Your folder must look like this.

{: .center}
[![Folder of the Application](../images/folder-rn-ble.png){:width="210"}](../images/folder-rn-ble.png){: style="border-bottom:none;"}   
*Fig. 3: Folder of the Application*

### Dependencies Installation

Run:
```console
npm install --save react-native-qrcode-svg
npm install --save react-native-svg
npm install --save rxjs
npm install --save @ledgerhq/react-native-hw-transport-ble
npm install --save react-native-ble-plx
npx react-native link react-native-ble-plx
npm install --save buffer
npm install --save @ledgerhq/hw-app-eth
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
            <td><a href="https://www.npmjs.com/package/react-native-qrcode-svg">react-native-qrcode-svg</a></td>
            <td colspan="2">It allows you to create a QR code.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/react-native-svg">react-native-svg</a></td>
            <td colspan="2">It is a package mandatory to use <a href="https://www.npmjs.com/package/react-native-qrcode-svg">react-native-qrcode-svg</a>.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/rxjs">rxjs</a></td>
            <td colspan="2">It is a rewrite of "Reactive-Extensions/RxJS" and is the latest production-ready version of RxJS. </td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/react-native-hw-transport-ble">@ledgerhq/react-native-hw-transport-ble</a></td>
            <td colspan="2">It provides you with all the methods to interact with  your Ledger Nano X with a Bluetooth connexion. </td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/react-native-ble-plx">react-native-ble-plx</a></td>
            <td colspan="2">It scans the bluetooth devices.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/buffer">Buffer</a></td>
            <td colspan="2"></td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledger-live/tree/develop/libs/ledgerjs/packages/hw-app-eth">It helps you ask your Ledger device to access the ethereum address. </a></td>
            <td colspan="2"></td>
        </tr>
    </tbody>
</table>

#### Package.json dependencies
Now that the dependencies are installed you can find them in the “package.js”.
This is how your “package.json” has to look like.

```javascript
{
  "name": "ledgerApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "@ledgerhq/hw-app-eth": "^6.16.2",
    "@ledgerhq/react-native-hw-transport-ble": "^6.15.0",
    "buffer": "^6.0.3",
    "react": "17.0.2",
    "react-native": "0.66.3",
    "react-native-ble-plx": "^2.0.3",
    "react-native-qrcode-svg": "^6.1.1",
    "react-native-svg": "^12.1.1",
    "rxjs": "^7.4.0"
  },
  "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/runtime": "^7.16.3",
    "@react-native-community/eslint-config": "^3.0.1",
    "babel-jest": "^27.3.1",
    "eslint": "^8.3.0",
    "jest": "^27.3.1",
    "metro-react-native-babel-preset": "^0.66.2",
    "react-test-renderer": "17.0.2"
  },
  "jest": {
    "preset": "react-native"
  }
}

```

#### Pod Installation

Then the pod has to be installed in the "ios" folder:
```console
cd ios/
pod install
pod update
```

#### Enable The Bluetooth Usage
Launch Xcode and open the ios folder in the "ledgerApp" folder to add the "NSBluetoothAlwaysUsageDescription" key to the "info.plist".

{: .center}
[![Open a Project on Xcode](../images/Xcode.png){:width="840"}](../images/Xcode.png){: style="border-bottom:none;"}   
*Fig. 4: Open a Project on Xcode*

{: .center}
[![Choose the Project](../images/Xcode-project.png){:width="840"}](../images/Xcode-project.png){: style="border-bottom:none;"}   
*Fig. 5: Choose the Project*

{: .center}
[![Add NSBluetoothAlwaysUsageDescription in info.plist](../images/infoplist.png){:width="840"}](../images/infoplist.png){: style="border-bottom:none;"}   
*Fig. 6: Add NSBluetoothAlwaysUsageDescription in info.plist*

You can now test the application you have built.

## Mobile App Test

The app testing will be executed on your smartphone because the Xcode emulator environment does not allow you to use either Bluetooth or USB connexion.


<!--  -->
{% include alert.html style="tip" text="Please refer to the information for <a href='https://developer.apple.com/forums/thread/14983' class='alert-link'> iOS Emulator limitation </a>." %}
<!--  -->


### Application Build on Xcode
Now to build your application on your Apple device you have to connect Xcode to an Apple account as demonstrated below.

{: .center}
[![Connect Xcode to an Apple Account](../images/Xcode-signing-capabilities.png){:width="840"}](../images/Xcode-signing-capabilities.png){: style="border-bottom:none;"}   
*Fig. 7: Connect Xcode to an Apple Account*

Then connect your Apple device to your computer to build the application directly on the Apple device.
If all goes well the device name will be displayed on the top of the Xcode window, all you have to do is click on the triangle icon on the top left corner to build the app on your Apple device.

{: .center}
[![Build the Application](../images/Xcode-build.png){:width="840"}](../images/Xcode-build.png){: style="border-bottom:none;"}   
*Fig. 8: Build the Application*

### Trusting the Apple Development
To accept the installation of the application.
You have to trust the "Apple development" on your device. Follow the steps below.

{: .center}
[![Iphone Settings](../images/iphone-settings-1.png){:width="210"}](../images/iphone-settings-1.png) [![Iphone Settings](../images/iphone-settings-2.png){:width="210"}](../images/iphone-settings-2.png) [![Iphone Settings](../images/iphone-settings-3.png){:width="210"}](../images/iphone-settings-3.png)  
[![Iphone Settings](../images/iphone-settings-4.png){:width="210"}](../images/iphone-settings-4.png) [![Iphone Settings](../images/iphone-settings-5.png){:width="210"}](../images/iphone-settings-5.png)   
*Fig. 9: Trusting the Apple Development*

You can finally test the application by launching it.

### Launching the Application
When launching the application it will be displayed as shown below. You must have the Bluetooth and location activated.

{: .center}
[![Launching the Application](../images/iphone-rn-ble1.png){:width="210"}](../images/iphone-rn-ble1.png) [![Launching the Application](../images/iphone-rn-ble2.png){:width="210"}](../images/iphone-rn-ble2.png) [![Launching the Application](../images/iphone-rn-ble3.png){:width="210"}](../images/iphone-rn-ble3.png)  
*Fig. 10: Launching the Application*

### Pairing the Ledger Nano X
To pair your Ledger Nano X you must unlock it.


{: .center}
[![Nano Code Pin](../images/ledgerCodePin.jpg){:width="300"}](../images/ledgerCodePin.jpg){: style="border-bottom:none;"}   
*Fig. 11: Nano Code Pin*

Now try to pair the Ledger Nano X to your Apple device.

{: .center}
[![Pairing the Ledger Nano](../images/iphone-rn-ble4.png){:width="210"}](../images/iphone-rn-ble4.png) [![Pairing the Ledger Nano](../images/iphone-rn-ble5.png){:width="210"}](../images/iphone-rn-ble5.png)  
*Fig. 12: Pairing the Ledger Nano X*

### Pairing and Launching the Ethereum App on the Nano X
When pairing, the pairing code will be displayed on your Ledger Nano X to confirm.

{: .center}
[![Confirm the pairing](../images/ledgerPairing.jpg){:width="300"}](../images/ledgerPairing.jpg){: style="border-bottom:none;"}  
*Fig. 13: Confirm the pairing*

{: .center}
[![Embedded Application](../images/ledgerEth.jpg){:width="300"}](../images/ledgerEth.jpg){: style="border-bottom:none;"}   
*Fig. 14: Embedded Application*

{: .center}
[![Nano Run Application](../images/ledgerReady.jpg){:width="300"}](../images/ledgerReady.jpg){: style="border-bottom:none;"}   
*Fig. 15: Nano Run Application*

Now that the pairing is done, the Nano X is ready with the ethereum application.
If all goes well you must see the address of your ethereum account displayed.

{: .center}
[![Address Account Displayed on Smartphone](../images/iphone-rn-ble6.png){:width="210px"}](../images/iphone-rn-ble6.png){: style="border-bottom:none;"}   
*Fig. 16: Address Account Displayed on Smartphone*

### Verify the Address
For security purposes, we display on your Nano X the same ethereum address for you to confirm.

{: .center}
[![Nano Verify Screen](../images/ledgerVerify.jpg){:width="300"}](../images/ledgerVerify.jpg){: style="border-bottom:none;"}   
*Fig. 17: Nano Verify Screen*

{: .center}
[![Nano Verify Address Screen](../images/ledgerAddress.jpg){:width="300"}](../images/ledgerAddress.jpg){: style="border-bottom:none;"}   
*Fig. 18: Nano Verify Address Screen*

{: .center}
[![Embedded Approve Screen](../images/ledgerApprove.jpg){:width="300"}](../images/ledgerApprove.jpg){: style="border-bottom:none;"}   
*Fig. 19: Embedded Approve Screen*

Congratulations you have successfully built your first application connected with Ledger on an Apple device!