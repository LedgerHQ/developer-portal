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


## Global architecture overview

<!-- ------------- Image ------------- -->
![app_architecture](../images/app_architecture.png)
<!-- --------------------------------- -->

- The Ledger device acts as a signing box and it defers most of the technical complexity to a **wallet application** (Ledger Live or a third-party wallet). The wallet application contains the business logic and is (typically) a GUI, running on a computer or a phone connected to the device.
- The Nano application acts as a transaction signer key in a deterministic way. Having a publicly listed Nano application is a mandatory requirement before getting your blockchain supported on Ledger Live.
- In the case of Ledger Live, and for performance reason, a third layer is handling the indexing of transaction for a given blockchain.


## What is Ledger Live ?

Ledger Live is Ledger's offical wallet application for Desktop and Mobile, providing a unique interface to maintain multiple crypto currencies
for Ledger Nano S and X, manage devices, create accounts, receive and send cryptoassets. It communicates with hardware wallet devices to verify
addresses and sign transactions with ledgerjs.

Ledger Live desktop is an hybrid application built using Electron, React Native, React, Redux, RxJS. It is compatible with **macOS 10.10+, Windows 8+ (x64)** and **Linux (x64)**.
The Ledger Live mobile app is compatible with **iOS** and **Android**.


### Ledger Live architecture

<!-- ------------- Image ------------- -->
![global-architecture](../images/global-architecture.png)
<!-- --------------------------------- -->

The Ledger Live application act as a relay between the different blockchains, and the hardware wallets.

#### Live Common

The Common library of Ledger Live is called [Ledger-live-common](https://github.com/LedgerHQ/ledger-live-common). It provides a single library compatible with both desktop and mobile version of Ledger Live.

#### Communication with the Device

[ledgerjs](https://github.com/LedgerHQ/ledgerjs) is a set of JavaScript library. It allows a javascript
application to use the API of a Nano app. Nano apps are using APDU to
transfer data and commands to and from the external world. `ledgerjs` only
allows to use commands developed on the Nano app.


#### Communication with the different blockchains

The Ledger Live application wil retrieve transaction history and broadcast new transactions using different explorers.

As part of a Ledger Live coin integration, you should provide a indexer allowing a Ledger Live user to synchronize his account in a timely manner. It can be an open source project or your own explorer.

The Ledger Live application uses our own explorers for Bitcoin and Ethereum forks.


## How to integrate your coin to Ledger Live

To integrate your coin to Ledger Live you will need to:
- Have a Nano Application (see [how to develop your Nano App](https://developers.ledger.com/docs/nano-app/introduction/))
- Provide an indexer (see the [prerequisites](https://developers.ledger.com/docs/coin/prerequisites/))
- Add your coin to [ledgerjs](https://developers.ledger.com/docs/coin/js-bindings/)
- Add your coin to [the Cryptoassets library](https://developers.ledger.com/docs/coin/cryptoassets-library/)
- Add your coin to [live-common](https://developers.ledger.com/docs/coin/live-common/)
- Add your coin to [Ledger Live desktop and mobile](https://developers.ledger.com/docs/coin/desktop-mobile/)
