---
title: Architecture and work breakdown structure
subtitle: This section describes the high level technical architecture of Ledger Live and how the different components interact.
tags: []
author:
layout: doc_ci
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}


## Ledger Live

Ledger Live is a new generation wallet desktop application for Desktop and Mobile, providing a unique interface to maintain multiple cryptocurrencies for Ledger Nano S / Blue. Manage devices, create accounts, receive and send cryptoassets.

Ledger Live is an hybrid desktop application built using Electron, React, Redux, RxJS to deal with blockchains (sync, broadcast,..). It communicates with  hardware wallet devices to verify address and sign transactions with ledgerjs. Some logic is shared with live-common.

### Ledger Live Desktop

<!-- ------------- Image ------------- -->
<img width="255" src="../images/lld.png" style="float:right">
<!-- --------------------------------- -->

Ledger Live Desktop is the computer app for Ledger hardware wallets. It allows users to manage their crypto assets securely, such as Bitcoin, Ethereum, XRP and many others.

It is compatible with
\- **macOS 10.10+**
\- **Windows 8+ (x64)**
\- **Linux (x64)**

### Ledger Live Mobile

<!-- ------------- Image ------------- -->
<img align="left" width="109" src="../images/llm.png">
<!-- --------------------------------- -->

Ledger Live is a mobile companion app for Ledger hardware wallets. It allows users to manage their crypto assets securely, such as Bitcoin, Ethereum, XRP and many others.

It is compatible with
\- **iOS**
\- **Android**

Ledger Live mobile applica

***

## Modules – General Description Arch

### B2C Components

<!-- ------------- Image ------------- -->
![B2C-components](../images/B2C-components.png)
<!-- --------------------------------- -->
Ledger gives its user the ability to self-custody their assets on their Ledger device. This offers some undoubted advantages, but since the hardware wallet acts as a signing box, it defers most of the technical complexity to the **companion application**.

<!-- ------------- Image ------------- -->
![app_architecture](../images/app_architecture.png)
<!-- --------------------------------- -->


The companion application contains the business logic and is (typically) a GUI, running on a computer or a phone connected to the Ledger device. Ledger official companion application is [Ledger Live](https://www.ledger.com/ledger-live/download).

In the case of Ledger Live, and for performance reason, a third layer is handling the indexing of transaction for a given blockchain. We'll cover that more in details here (LINK)

## Global Architecture Overview

[//]: Update image : Replace Lib-Core with JS

<!-- ------------- Image ------------- -->
![global-architecture](../images/global-architecture.png)
<!-- --------------------------------- -->


The Ledger Live application act as a relay between the different
blockchains, and the hardware wallets ([Ledger Nano
S](https://www.ledger.com/products/ledger-nano-s), [Ledger Nano
X](https://www.ledger.com/products/ledger-nano-x)).

#### Flows

-   Ledger Live application communicates with the hardware wallets
    (through [ledgerjs](https://github.com/LedgerHQ/ledgerjs))

-   Ledger Live communicates (through the
    [Script-runner](https://github.com/LedgerHQ/ledger-update-python-api))
    with the HSM, which is a remote server where are securely located
    the binary of the applications.

-   Ledger Live communicates as well with the App Store API ([App Store
    Front](https://github.com/LedgerHQ/ledger-app-store-front), [App
    store back-end](https://github.com/LedgerHQ/ledger-app-store-api)).
    This API will, for instance, provide the <i>key</i> (path) to be provided
    to the script runner in order to download a specific application on
    the device.

-   Ledger Live communicates with the different blockchains through different
    explorers and indexing services.

-   Blockchain transactions, whether received or sent, will be first translated in the correct   blockchain format (by the
    [lib-core](https://github.com/LedgerHQ/lib-ledger-core)) or **by a dedicated JS package**.
    Then those messages will be provided to the explorer API which will in turn forward them to the nodes.


<i>From 2021, Ledger does not continue supporting new blockchain through the use of the lib-ledger-core. As such we won't be considering Pull Requests applied to the Lib-core repository</i>

***
## Ledger-Live Architecture Detailed

***
### BOLOS app

The BOLOS application is the Nano Application. It acts as a transaction signer
key in a deterministic way. Having a publicly listed Nano application is a mandatory requirement before getting your blockchain supported on Ledger Live.

To get more information about BOLOS application, please refer to this [documentation](../../nano-app/publish-app).

***
### Communication with the Device

The communication with the device is ensured by the following libraries.

<https://github.com/LedgerHQ/ledgerjs>


Documentation is available here

<http://ledgerhq.github.io/ledgerjs/docs/> - Dead page

***
### Communication with the different blockchains

The Ledger Live application wil retrieve transaction history and broadcast new transactions using different nodes and indexing services.

As part of a Ledger Live integration, you should provide a indexing service allowing a Ledger Live user to synchronize his account in a timely manner.

***
### Indexer and nodes

The indexers will retrieve a list of transaction for a specific address
based on a standard dB.

<https://github.com/LedgerHQ/blockchain-explorer>

The Explorer is a backend or a series of backend which keep a record of
transactions and blocks. Most of the times these modules will keep most
data of a blockchain and are able to send raw messages to the network.

***
### Live-Common

The Common library of Ledger Live is called Live-Common (live-com)

The [Ledger-live-common](https://github.com/LedgerHQ/ledger-live-common)
library aims to provide a single library compatible with both desktop
and mobile version of Ledger-Live.

The Ledger Live application retrieves transaction history and broadcasts new transactions using different nodes and indexing services.

As part of a Ledger Live integration, you should provide a indexing service allowing a Ledger Live user to synchronize his account(s) in a timely manner.

<i>Note</i> :

-   within the Live-Common, the coin will need to be included in the CryptoAssets library. This is seen in detail
    [later](../cryptoassets-library). It is used to define the list of currencies that will be visible on the
    front end of the application.

-   the [countervalue API](https://github.com/LedgerHQ/ledger-api-countervalue) is used
    to display the actual price and market cap to sort the information
    and accounts inside the application.

ledgerjs is a set of javascript library. It allows a javascript
application to use the API of a BOLOS app. BOLOS apps are using APDU to
transfer data and commands to and from the external world. ledgerjs only
allows to use commands developed on the BOLOS app.

The Countervalue API is a service to get the current market value of
different cryptocurrency.

tion is  compatible with the Ledger Nano X via Bluetooth connection.
