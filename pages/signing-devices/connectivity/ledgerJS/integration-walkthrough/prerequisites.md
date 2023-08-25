---
title: Prerequisites
subtitle:
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author:
toc: true
layout: doc
---

## Summary

To connect your app you will need to install:
- [Node (for Desktop apps) and NPM](#node-and-npm)
- [Ledger Live](#ledger-live-installation)
- [The Ledger Embedded App](#embedded-app-installation) of the coin that you are going to use (to use this documentation you will need Bitcoin, Ethereum and Solana)
- At least [one account](#account-creation) for each coin (except for Solana).

## Node and NPM

If not already installed, install <a href="https://nodejs.org/en/download/">Node & npm</a>, choose the LTS version of your operating system. You can check if you have it installed by checking the version with the following commands:

```
$ node -v
v14.18.0

$ npm -v
6.14.15
```

The commands should print the versions of Node.js and npm accordingly.

<!--  -->
{% include alert.html style="note" text="The integrations and tutorials should work with older versions of Node and npm but it has not been tested by our team." %}
<!--  -->

<!--  -->
{% include alert.html style="important" text="Please remember that the React Native and the ledger packages have been updated since the creation of the documentation and there might be some breaking changes. If you encounter difficulties with more recent packages, you can downgrade to the versions used in the documentation." %}
<!--  -->



---------------------------------
## Ledger Live Installation

Now that node and npm are installed, you have to install the [Ledger Live](https://www.ledger.com/ledger-live/download) desktop application to connect your Ledger device.
After the installation, open Ledger Live and go to the **Manager** tab.

{: .center}
[![Ledger Live Prerequisites](../images/ledgerlivetabs.png)](../images/ledgerlivetabs.png){: style="border-bottom:none;"}      
*Fig. 1: Ledger Live Prerequisites*

Then connect your Ledger Nano to your computer and unlock it.

{: .center}
[![Ledger Device Unlock](../images/ledgerCodePin.jpg){:width="300px"}](../images/ledgerCodePin.jpg){: style="border-bottom:none;"}        
*Fig. 2: Ledger Device Unlock*

Then Ledger Live will ask you to allow the Ledger device, just press the two buttons simultaneously to allow it.


{: .center}
[![Ledger Live Animation](../images/ledgerConnect.png){:width="300px"}](../images/ledgerConnect.png){: style="border-bottom:none;"}   
*Fig. 3: Ledger Live Animation*


{: .center}
[![Ledger Live Notification on Ledger Device](../images/ledgerAllow.jpg){:width="300px"}](../images/ledgerAllow.jpg){: style="border-bottom:none;"}   
*Fig. 4: Ledger Live Notification on Ledger Device*



## Embedded App Installation

Now you can install the Ethereum and bitcoin application into your Ledger Nano S/X/S Plus.
In this integration, we will use the Ethereum and Bitcoin application.


{: .center}
[![Ethereum App Installation](../images/ethereumInstallation.png){:width="840"}](../images/ethereumInstallation.png){: style="border-bottom:none;"}     
*Fig. 5: Ethereum App Installation*


## Account Creation

To use the Bitcoin/Ethereum Embedded Apps you have to create a Bitcoin/Ethereum account.
We will present there the creation of a bitcoin account but it is the same for any application supported by Ledger Live.


To create your Bitcoin account:

- Launch the Bitcoin application on your Ledger Nano S/X/S Plus

- Open the Bitcoin app on your ledger device

{: .center}
[![Bitcoin App Launch](../images/ledgerBtc.jpg){:width="300"}](../images/ledgerBtc.jpg){: style="border-bottom:none;"}     
*Fig. 6: Bitcoin App Launch*


{: .center}
[![Bitcoin App Ready](../images/ledgerReady.jpg){:width="300"}](../images/ledgerReady.jpg){: style="border-bottom:none;"}    
*Fig. 7: Bitcoin App Ready*

- Create an account by going to the **Manager** tab and click on **Add account**.

{: .center}
[![Bitcoin App Add Account](../images/bitcoinInstalled.png){:width="840"}](../images/bitcoinInstalled.png){: style="border-bottom:none;"} 
*Fig. 8: Bitcoin App Add Account*


- Click on **Add account** button.

{: .center}
[![Bitcoin Account Creation](../images/step1account.png){:width="840"}](../images/step1account.png){: style="border-bottom:none;"}   
*Fig. 9: Bitcoin Account Creation*


- Your account is created.

{: .center}
[![Bitcoin Account Selection](../images/step2account.png){:width="840"}](../images/step2account.png){: style="border-bottom:none;"}   
*Fig. 10: Bitcoin Account Selection*


You have now a secured bitcoin account on your Ledger Device, congratulations!

{: .center}
[![Bitcoin Account Created](../images/step3account.png){:width="840"}](../images/step3account.png){: style="border-bottom:none;"}   
*Fig. 11: Bitcoin Account Created*
