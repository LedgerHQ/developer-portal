---
title: Transfer of Sol between accounts
subtitle:
tags: []
category: Connect a wallet
author:
toc: true
layout: doc
---
## Introduction
In this section, we will guide you through the creation of an application. This application will create a transaction that will be signed with the Ledger Nano before sending it to the blockchain.
The purpose of the application is to transfer sol from your solana account on your Ledger to another account.

## Prerequisites
Before startint, make sure you have gone through the [prerequisites](../prerequisites).

### Install the Solana Nano App
First you need to install the Solana Nano App from Ledger Live as shown in the [prerequisites](../prerequisites) for Ethereum.

## Tutorial implementation

In this implementation, we will be building a web application with vanilla javascript that uses the USB protocol from a [Ledger package](https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-transport-webusb) to communicate with the ledger.

### Project Initialization
It is time to implement the application and test it. First, open a terminal and create a new folder. For this tutorial, the folder will be named "e2e-sol-tutorial”.
Run:

```console
mkdir e2e-sol-tutorial
cd e2e-sol-tutorial
```

Then, initialize the project by running the following:

```console
npm init
```

Answer the questions displayed or by default press enter. There is no incidence on the execution.

Run:

```console
touch index.html
touch index.js
touch style.css
mkdir assets
```

Put [this logo](../images/ledger-logo.jpg) in the assets folder.

Your working folder must look like this.

{: .center}
[![Folder tutorial](../images/folder-e2e-sol.png)](../images/folder-e2e-sol.png){: style="border-bottom:none;"}   
*Fig. 2: Folder of the Application*

### Code Implementation

#### index.html

In index.html copy-paste the following code :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
    <script type="module" src="index.js"></script>
  </head>

  <body class="m-5">
    <div class="d-flex flex-column justify-content-center m-5 align-items-center">
      <p>Click on the bellow button to connect your Ledger Wallet</p>
      <div class="d-flex flex-row w-100 justify-content-around">
        <button class="btn btn-primary w-25" data-bs-toggle="modal" data-bs-target="#WalletModal">Connect your Wallet</button>
        <button class="btn btn-primary w-25" id="get-information">Get Information</button>
      </div>
    </div>
    <div class="d-flex flex-row">
      <div id="app" class="w-50">
        <form class="row g-3">
          <div class="col-md-12">
            <label for="wallet" class="form-label">Wallet Public Key</label>
            <input type="text" class="form-control" id="wallet" disabled>
          </div>
          <div class="col-md-12">
            <label for="recipient" class="form-label" disabled>Balance</label>
            <input type="text" class="form-control" id="balance">
          </div>
          <div class="col-md-12">
            <label for="recipient" class="form-label">Recipient</label>
            <input type="text" class="form-control" id="recipient">
          </div>
          <div class="col-md-6">
            <label for="gasPrice" class="form-label">Gas Price in lamports</label>
            <input type="text" class="form-control" id="gasPrice" disabled>
          </div>
          <div class="col-md-6">
            <label for="value" class="form-label">Value</label>
            <input type="text" class="form-control" id="value" >
          </div>
          <div class="col-12">
            <button type="button" id="tx-transfer" class="btn btn-primary">Create Transaction</button>
          </div>
        </form>
      </div>
      <div class="w-50 d-flex flex-column">
            <p class="url">Solana explorer:</p>
            <a id="url" href="" target="_blank"></a>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="WalletModal" tabindex="-1" aria-labelledby="WalletModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="WalletModalLabel">Choose your Wallet</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex justify-content-center">
            <button id="connect-ledger" class="rounded-3 align-self-center" data-bs-dismiss="modal">
              <img src="./assets/ledger-logo.jpg" class="card-img-top" alt="Ledger">
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```


#### index.js

In index.js copy-paste the following code :

```javascript
import * as SolanaWeb3 from '@solana/web3.js';
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import Solana from "@ledgerhq/hw-app-solana";
import { listen } from "@ledgerhq/logs";
import bs58 from "bs58";

//Infuria provider for Solana devnet network
const connection = new SolanaWeb3.Connection(SolanaWeb3.clusterApiUrl('devnet'),"confirmed");

let transport;
let _sol;
let addressWallet;
let recipient = SolanaWeb3.Keypair.generate().publicKey;
let value = 0.1;
let gasPrice;

//listen to all errors thrown by the Transport
listen(log => console.log(log));

document.getElementById("connect-ledger").onclick = async function () {
    //Connecting to the Ledger Nano with USB protocol
    transport = await TransportWebUSB.create();
}

document.getElementById("get-information").onclick = async function () {
    //Getting an Solana instance and get the Ledger Nano solana account public key
    _sol = new Solana(transport);
    const { address } = await _sol.getAddress("44'/501'/0'");
    addressWallet = new SolanaWeb3.PublicKey(bs58.encode(address));

    //Get some properties from provider
    const balance = await connection.getBalance(addressWallet);
    gasPrice = SolanaWeb3.LAMPORTS_PER_SOL / 100;

    //Fill the inputs with the default value
    document.getElementById("wallet").value = bs58.encode(address);
    document.getElementById("balance").value = balance/ SolanaWeb3.LAMPORTS_PER_SOL;
    document.getElementById("gasPrice").value = parseInt(gasPrice) + " wei";
    document.getElementById("value").value = value;
    document.getElementById("recipient").value = recipient.toBase58();
}


document.getElementById("tx-transfer").onclick = async function () {
    //Getting information from the inputs
    recipient = new SolanaWeb3.PublicKey(document.getElementById("recipient").value);
    value = document.getElementById("value").value;

    //Building transaction with the information gathered
    try {
        const recentBlockhash = await connection.getRecentBlockhash();
        const transaction = new SolanaWeb3.Transaction({ feePayer: addressWallet, recentBlockhash: recentBlockhash.blockhash}).add(
            SolanaWeb3.SystemProgram.transfer({
                fromPubkey: addressWallet,
                toPubkey: recipient,
                lamports: SolanaWeb3.LAMPORTS_PER_SOL * value,
            }),
        );


        //Serializing the transaction to pass it to Ledger Nano for signing
        const unsignedTx = transaction.serializeMessage();

        //Sign with the Ledger Nano (Sign what you see)
        const { signature } = await _sol.signTransaction("44'/501'/0'", unsignedTx);
        transaction.addSignature(addressWallet,signature);

        //Serialize the same transaction as before, but added the signature on it
        const signedTx = transaction.serialize();


        //Sending the transaction to the blockchain
        const hash = await connection.sendRawTransaction(signedTx, {preflightCommitment:"confirmed", skipPreflight: false});

        //Display the Solana explorer url on the screen
        const url = "https://explorer.solana.com/tx/" + hash +"?cluster=devnet";
        document.getElementById("url").innerHTML = url;
        document.getElementById("url").href = url;
    } catch (error) {
        console.log(error);
    }
}
```

#### style.css

In style.css copy-paste the following code :

```css
.modal-content{
    width: 300px;
    height: 400px;
}

#connect-ledger{
    width: 17rem;
    height: 9rem;
    background-color: white;
    border: none;
}

#connect-ledger:hover{
    background-color: #EDEFF3;
}

.modal-body{
    background-color: #F7F9FD;
}

#url,.url{
    text-align: center;
    margin-top: 160px;
    color: green;
}
```

### Dependencies Installation

#### Install the packages

Run:

```console
npm install --save-dev parcel
npm install --save @ledgerhq/hw-app-solana
npm install --save @ledgerhq/hw-transport-webusb
npm install --save @ledgerhq/logs
npm install --save @solana/web3.js
npm install --save bs58
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
            <td><a href="https://parceljs.org/">parcel</a></td>
            <td colspan="2">It is a build tool that will help you package your application to run it in the browser.</td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-app-solana">@ledgerhq/hw-app-solana</a></td>
            <td colspan="2">It will help you ask your Ledger Nano to access the solana application on the Ledger Nano.</td>
        </tr>
        <tr>
            <td><a href="https://github.com/LedgerHQ/ledgerjs/tree/master/packages/hw-transport-webusb">@ledgerhq/hw-transport-webusb</a></td>
            <td colspan="2">It provides you with all the methods to interact with your Ledger with an USB connexion.  </td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/@ledgerhq/logs">@ledgerhq/logs</a></td>
            <td colspan="2">It provides you the log of all the error from your connexion with your Ledger device that may appear when developing.</td>
        </tr>
        <tr>
            <td><a href="https://solana-labs.github.io/solana-web3.js/index.html">@solana/web3.js</a></td>
            <td colspan="2">It provides you with all the methods to interact with the solana blockchain.</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/bs58">bs58</a></td>
            <td colspan="2">It provides you with all the methods to compute base 58 encoding.</td>
        </tr>
    </tbody>
</table>


#### Modify Package.json

Modify the 5th line: `"main": "index.js"` => `"source": "index.html"`
And ensure you have this line in scripts:

```javascript
  "scripts": {
    "start": "parcel"
  },
```
Your file should know look like this:

```javascript
{
    "name": "e2e-sol-tutorial",
    "version": "1.0.0",
    "description": "",
    "source": "index.html",
    "scripts": {
        "start": "parcel"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "parcel": "^2.3.2"
    },
    "dependencies": {
        "@ledgerhq/hw-app-solana": "^6.26.0",
        "@ledgerhq/hw-transport-webusb": "^6.24.1",
        "@ledgerhq/logs": "^6.10.0",
        "@solana/web3.js": "^1.36.0",
        "bs58": "^5.0.0"
    }
}
```

## Tutorial Test

### Start the Development Server
Now that the Setup is finished, the app has to be built to be displayed.
Start the development server:

```console
npm run start
```

Now the application is up and running. Open Chrome and go to `localhost:1234`, it will display :

{: .center}
[![Application running on browser](../images/tutorial-1-solana.png)](../images/tutorial-1-solana.png){: style="border-bottom:none;"}   
*Fig. 3: Application Running on Browser*

### Plug Your Ledger Device
Before clicking on the text connect your Ledger to the USB port, unlock it and run the solana application.
The steps are described below.

{: .center}
[![Ledger Enter Code Pin](../images/ledgerCodePin.jpg){:width="300"}](../images/ledgerCodePin.jpg){: style="border-bottom:none;"}   
*Fig. 4: Ledger Enter Code Pin*

{: .center}
[![Run Solana Application on Ledger Nano](../images/ledgerSol.jpg){:width="300"}](../images/ledgerEth.jpg){: style="border-bottom:none;"}    
*Fig. 5: Run Solana Application on Ledger Nano*

{: .center}
[![Solana Application is Running on Ledger Nano](../images/ledgerReady.jpg){:width="300"}](../images/ledgerReady.jpg){: style="border-bottom:none;"}    
*Fig. 6: Solana Application is Running on Ledger Nano*


### Connect Your Ledger to the Application
Now you can click on the "Connect your Wallet" button and a modal will be opened.
Click on the Ledger logo.

{: .center}
[![Choice of Wallet](../images/tutorial-1-solana-wallet.png)](../images/tutorial-1-solana-wallet.png){: style="border-bottom:none;"}   
*Fig. 7: Choice of Wallet*

Now choose the Ledger Nano to connect it to the browser.

{: .center}
[![Connect the Ledger Nano](../images/tutorial-1-solana-pairing.png)](../images/tutorial-1-solana-pairing.png){: style="border-bottom:none;"}   
*Fig. 8: Connect the Ledger Nano*

After connecting the Nano, click on "Get Information". If all goes well, the input fields will be filled with data. The greyed input is not to be changed and it is directly extracted either from the blockchain or from your Ledger Nano application.

{: .center}
[![Application After Connecting Ledger Nano](../images/tutorial-1-solana-info.png)](../images/tutorial-1-solana-info.png){: style="border-bottom:none;"}   
*Fig. 9: Application After Connecting Ledger Nano*

### Send Sol token to your Ledger Nano solana account
To send some sol tokens on the Devnet network, you can either go to one of the solana faucet websites or do it with the solana cli:
- [Solana Faucet](https://solfaucet.com/)
- [Solana CLI](https://docs.solana.com/cli/transfer-tokens)

If you are looking for the easier and quicker way, use the Solana Faucet. If you would rather use the Solana CLI, please read this documentation to [install it](https://docs.solana.com/cli) before starting sending Sol.

The Solana Devnet is not visible on Ledger Live, you can then check the transaction passed on [the Solana Explorer](https://explorer.solana.com/?cluster=devnet). 

#### Option n°1 - Solana Faucet
Go to the [Solana Faucet](https://solfaucet.com/) website put your Wallet Public Key (displayed on the web app) on the input and click on "Devnet"

{: .center}
[![Solana Faucet](../images/solana-faucet.png){:width="840"}](../images/solana-faucet.png){: style="border-bottom:none;"}   
*Fig. 1: Solana Faucet*

#### Option n°2 -Solana CLI
Go to the [Solana CLI](https://docs.solana.com/cli/transfer-tokens) website, there are the steps to add some sol to your account.

```console
solana airdrop 1 <RECIPIENT_ACCOUNT_ADDRESS> --url https://api.devnet.solana.com
```
For example
```console
solana airdrop 1 72tCcW6F4gRWJLCXf3RGejNDZBwUvWCfxHTdxoLGV4ht --url https://api.devnet.solana.com
```

### Create a transaction to transfer sol

Now that the inputs are filled with data. It is time to transfer some sol tokens from your Ledger solana account to another account (you can keep the default account on the "index.js" file).  
Therefore, click on "Create Transaction" to create the transaction which will be signed by your ledger before sending it to the blockchain.  

{: .center}
[![Application After Connecting Ledger Nano](../images/tutorial-1-solana-create.png)](../images/tutorial-1-solana-create.png){: style="border-bottom:none;"}   
*Fig. 10: Application After Connecting Ledger Nano*

When the transaction proceed and finalize, an URL will be displayed on the screen. This URL is a link to Solana Explorer to review the transaction.  
There you can find all the information concerning the transaction you have previously sent.

{: .center}
[![Result after Sending Transaction](../images/tutorial-1-solana-transaction.png)](../images/tutorial-1-solana-transaction.png){: style="border-bottom:none;"}   
*Fig. 11: Transaction Information URL*

If you go on Solana Explorer you can see the information of your transaction.

{: .center}
[![Result after Sending Transaction](../images/solana-explorer-1.png)](../images/solana-explorer-1.png){: style="border-bottom:none;"}   
*Fig. 12: Result on Solana Explorer after Sending Transaction*

{: .center}
[![Result after Sending Transaction](../images/solana-explorer-2.png)](../images/solana-explorer-2.png){: style="border-bottom:none;"}   
*Fig. 13: Result on Solana Explorer after Sending Transaction*


Congratulations, you have successfully built your first transfer application connected with Ledger !!!