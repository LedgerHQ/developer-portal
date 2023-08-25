---
title: Interact with the Cosmos App
subtitle:
tags: [transport, device, communicate, companion wallet]
category: Connect your app
author:
toc: true
layout: doc
---

## Introduction 

In this section, we will guide you through the creation of a web application. This application will connect to your Nano and will allow you to use the Cosmos Embedded App. 
 
Web USB and Web HID applications are implemented with `@ledgerhq/hw-transport-webusb` and `@ledgerhq/hw-transport-webhid`  respectively.

This web application was originally developed by the Zondax team (here is a link to [their website](https://zondax.ch/) and to their [Twitter feed](https://twitter.com/_zondax_)) through [this source repo](https://github.com/cosmos/ledger-cosmos-js.git)). Zondax has been developing innovative end-to-end software solutions that are used by a large number of exchanges, hardware wallets, privacy coins, and decentralized finance (DeFi) protocols. Zondax has proven to be a reliable partner for Ledger apps development with more than 35 applications built to date.

## Use case

You will be able to do the following actions:

- Get information about the Cosmos Embedded App installed on your Nano device
- Get information about the public key and the public address
- Sign an example of transaction with your Ledger Nano device

## Prerequisites

- Ensure you have gone through the prerequisites.
- Install or update your Cosmos Embedded app to the last version.

## Installation

First, open a terminal and create a new folder in your usual working directory. For this tutorial, the folder will be named “use-cosmos-webapp”.

Run:
```bash
mkdir use-cosmos-webapp
cd use-cosmos-webapp
```

Clone the repo (master branch) and go to the repo folder:
```bash
git clone https://github.com/LedgerHQ/ledger-cosmos-js.git
cd ledger-cosmos-js
```

Run:
```bash
yarn install 
npm install -g @vue/cli 
npm install -g @vue/cli-plugin-typescript
npm install vue-template-compiler
npm install --save-dev webpack
```


## Usage

Now, that all the needed packages are installed, you can launch the webapp by runnig:
```bash
npm run serve
```

The application is up and running. Open the browser and go to `http://localhost:8080`, it will display:

{: .center}
[![Cosmos integration example](../images/cosmos-01.png)](../images/cosmos-01.png)

- Make sure to select the **WebUSB** option (as the U2F option is deprecated). 

- Connect your Nano to the USB port, unlock it and run the cosmos application. You’re now able to interact with the cosmos application.

- Click on **Get Version**:

{: .center}
[![Cosmos integration example](../images/cosmos-02.png)](../images/cosmos-02.png)

You’re able to retrieve the app version installed on your Ledger Nano device and some other information using the `getVersion()` function.

- Click on **AppInfo**:

{: .center}
[![Cosmos integration example](../images/cosmos-03.png)](../images/cosmos-03.png)

You’re able to retrieve the app version but also the app name and some other information using the `appInfo()` function.

- Click on **Get pubkey only**:

{: .center}
[![Cosmos integration example](../images/cosmos-04.png)](../images/cosmos-04.png)

You can retrieve the data contained in the public key and some other information using the `getPublicKey()` function.

- Click on **Get Address and Pubkey**:

{: .center}
[![Cosmos integration example](../images/cosmos-05.png)](../images/cosmos-05.png)


You can retrieve the public address, the data contained in the public key and some other information using the `getAddress()` and `getPublicKey()` functions.

- Click on **Show Address and Pubkey**:

	{: .center}
	[![Cosmos integration example](../images/cosmos-06.png)](../images/cosmos-06.png) 


	As in the previous step, you can retrieve the public address, the data contained in the public key and some other information, but here you can preview the public address on your Nano. The address you see on the Nano is the same as what you can have on your web app. In this case, the `showAddressAndPubKey()` function is used.

	- Press the right button to do the review:

	{: .center}
	[![Cosmos integration example](../images/please-review-cosmos.png){: width="250px" }](../images/please-review-cosmos.png)

	- Verify that the correct address is showing on your Nano. Then, you can press the right button to approve or reject.

	{: .center}
	[![Cosmos integration example](../images/address-cosmos.png){: width="250px" }](../images/address-cosmos.png)

	- You can confirm by pressing both buttons.

	{: .center}
	[![Cosmos integration example](../images/approve-cosmos.png){: width="250px" }](../images/approve-cosmos.png)

	- You can also reject.

	{: .center}
	[![Cosmos integration example](../images/reject-cosmos.png){: width="250px" }](../images/reject-cosmos.png)

	After approving the review, the webapp will display to you the public address, the data of the public key and some other information.

- Click on **Sign Example TX**: 

{: .center}
[![Cosmos integration example](../images/cosmos-07.png)](../images/cosmos-07.png)

Here, it provides you with an example of a transaction to sign on your Ledger Nano device using the `signExampleTx()` function. You’ll have to review the Chain ID, the Account, the Sequence, the Type, the Amount, the Delegator, the Validator, the Memo, the Fees and the Gas. Then you can approve or decline the transaction. 

{: .center}
[![Cosmos integration example](../images/please-review-cosmos.png){: width="250px" }](../images/please-review-cosmos.png)

{: .center}
[![Cosmos integration example](../images/chain-id-cosmos.png){: width="250px" }](../images/chain-id-cosmos.png)

{: .center}
[![Cosmos integration example](../images/account-cosmos.png){: width="250px" }](../images/account-cosmos.png)

{: .center}
[![Cosmos integration example](../images/sequence-cosmos.png){: width="250px" }](../images/sequence-cosmos.png)

{: .center}
[![Cosmos integration example](../images/type-cosmos.png){: width="250px" }](../images/type-cosmos.png)

{: .center}
[![Cosmos integration example](../images/amount-cosmos.png){: width="250px" }](../images/amount-cosmos.png)

{: .center}
[![Cosmos integration example](../images/delegator-cosmos.png){: width="250px" }](../images/delegator-cosmos.png)

{: .center}
[![Cosmos integration example](../images/validator-cosmos.png){: width="250px" }](../images/validator-cosmos.png)

{: .center}
[![Cosmos integration example](../images/memo-cosmos.png){: width="250px" }](../images/memo-cosmos.png)

{: .center}
[![Cosmos integration example](../images/fee-cosmos.png){: width="250px" }](../images/fee-cosmos.png)

{: .center}
[![Cosmos integration example](../images/gas-cosmos.png){: width="250px" }](../images/gas-cosmos.png)

{: .center}
[![Cosmos integration example](../images/approve-cosmos.png){: width="250px" }](../images/approve-cosmos.png)

If approved, your transaction is signed and the webapp will display it along with the type of transaction (here, a signature) and some other information.

{: .center}
[![Cosmos integration example](../images/cosmos-08.png)](../images/cosmos-08.png)



