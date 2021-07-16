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

## Token on the Ledger support website

The list of supported assets on the [website](https://www.ledger.com/supported-crypto-assets/) is managed through an internal Ledger process. For the moment it’s difficult to guarantee the exact mapping between tokens available on Ledger Live and listed on the website. The true list of supported assets is visible [here](https://github.com/LedgerHQ/ledgerjs/tree/master/packages/cryptoassets/data).  We will soon improve our process so that the [website](https://www.ledger.com/supported-crypto-assets/) reflects exactly what is available on the Ledger Live software. In the meantime, the website list contains less tokens than the actual list.

## How to request a token addition ?

Click [here](../erc20) for erc20, [here](../asa) for ASA, and [here](../trc) for TRC10/20.
