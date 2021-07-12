---
title: Integrating tokens
subtitle:
tags: []
toc: true
toc_sticky: true
author:
layout: doc_et
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

Ledger Live currently supports ERC20 tokens on Ethereum, ASAs on Algorand and TRC10/TRC20 tokens on Tron. The process to integrate varies depending on which kind of token you would like to integrate to Ledger Live, but there are a few common specs.

## How it works

Similarly to transferring native assets, transferring tokens requires the end-user to confirm the transaction details on the Nano devices’ screens. Such verification is a security requirement and must be made available before the application is released by Ledger. Expected information to verify are (at least) : the amount transferred, the token name and/or ticker, the recipient address.

Different tokens imply multiple names, multiple tickers, multiple identifiers and, sometimes, different magnitudes (or decimals). As an example, BAT and USDT tokens are both ERC20 tokens on the Ethereum network and have each their own set of characteristics :

|     BAT       |     USDT     |
|---------------|--------------|
|{"ticker": "BAT","name": "BAT","contract_address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF","decimals": 18}|{"ticker": "USDT","name": "Tether USDT","contract_address": "0xdAC17F958D2ee523a2206206994597C13D831ec7","decimals": 6}|

<!--  -->
{% include alert.html style="warning" text="<ul><li><b>The smart contract address is important</b> as this information will allow the Nano Ethereum or Algorand application to correctly determine the token being transferred and its characteristics.</li><li><b>The decimals information is important</b> as an error in its value will result in the wrong amount being displayed on the Nano screen. A user may approve a transaction to transfer 10 USDT, when in reality, they are approving a transaction for 1000 USDT.</li></ul>" %}
<!--  -->

Ledger applies a specific signature to the triplet **{"ticker”,"contract_address","decimals”}**. As a consequence, the Nano is able to verify the information has not been tampered with.


## How to request a token addition

### Is my token listed ?

First, make sure your token isn’t already listed by checking the [repository](https://github.com/LedgerHQ/ledgerjs/tree/master/packages/cryptoassets/data). Then :

|     ERC20       |     ASA     |       TRC10/20      |
|-----------------|-------------|---------------------|
|Make a request to our [customer success team](https://support.ledger.com/hc/en-us/requests/new) and select Ledger Products - Technical Inquiries. Please make sure to share with us the details of your ERC20 token, and a link to Etherscan to allow us to double check the information. | Update the [Algorand Nano app](https://github.com/LedgerHQ/app-algorand/blob/master/src/algo_asa.c) and the [ledgerjs package](https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/data/asa.js). To ensure both these topics are handled properly, we invite you to contact our engineering team through the [Ledger's Developer Slack](https://ledger-dev.slack.com), or use [this contact form](https://developers.ledger.com/contact/) to get signed in.| Work in progress |

<!--  -->
{% include alert.html style="success" text="The process differs due to the fact that, for ASA, tokens details are hardcoded within the Algorand Nano application instead of being streamed to the device." %}
<!--  -->

### What will Ledger do ?

We will review the list of tokens on a bi-montly basis and will apply our own internal signature process. Once signed, the new tokens will become available after a Ledger Live update. Ledger reserves the right to decide which token will be listed.

### How do I add my token icon ?

Ledger Live relies on [this repository](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/data/icons/svg) to manage coins and tokens icons. Please make a PR to the [repository](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/data/icons/svg) to get your token icon visible on Ledger Live.

## Token on the Ledger support website

The list of supported assets on the [website](https://www.ledger.com/supported-crypto-assets/) is managed through an internal Ledger process. For the moment it’s difficult to guarantee the exact mapping between tokens available on Ledger Live and listed on the website. The true list of supported assets is visible [here](https://github.com/LedgerHQ/ledgerjs/tree/master/packages/cryptoassets/data).  We will soon improve our process so that the [website](https://www.ledger.com/supported-crypto-assets/) reflects exactly what is available on the Ledger Live software. In the meantime, the website list contains less tokens than the actual list.

