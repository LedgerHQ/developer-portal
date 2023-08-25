---
title: Choose the right transport
subtitle: 
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author: Ledger
toc: true
layout: doc
---

For the client's side device (Desktop & Mobile), several technologies can be used to communicate with Ledger hardware devices.

Based on your current service core technology, you could choose different types of integration. First of all, it will depend on your current service implementation technology.

### WebApp
For a web application three options are possible :
- Web HID
- Web USB
- Web Bluetooth (Nano X)

{: .center}
[![WebApp](../images/webAppsummary.png)](../images/webAppsummary.png)
*Fig. 1: WebApp Transports*

Getting started with WebApp integration:
 - [HID/USB](../web-hid-usb/)
 - [Bluetooth](../web-bluetooth/)
 

### Mobile Application
For Mobile applications, you can integrate through React Native libraries HID and Bluetooth for Nano X wallets.
- React Native HID (Only Android)
- React Native Bluetooth (Nano X)

{: .center}
[![Mobile Application Transports](../images/mobile-integration.png)](../images/mobile-integration.png)
*Fig. 2: Mobile Application Transports*

Getting started with React Native Mobile App integration:
 - [React Native HID - Android Only](../react-native-android-hid/)
 - [React Native Bluetooth - iOS](../react-native-bluetooth-ios/)
 - [React Native Bluetooth - Android](../react-native-bluetooth-android/)

### Desktop Application
For a desktop application, your option is to use Node HID Transport layer. The library is only supported on Electron/Node.js
- Node HID


{: .center}
[![Desktop Application Transports](../images/desktop-integration.png)](../images/desktop-integration.png)
*Fig. 2: Desktop Application Transports*

Getting started with Desktop App integration [Node HID](../node-electron-hid/)
