---
title: How it works
subtitle:
tags: [erc20, asa, trc10, trc20]
category: Tokens
toc: true
author:
layout: doc
---

<div class="uk-text-center">
    <video controls muted preload='none' poster='/uploads//videos/covers/Tokens.png' ><source src="/uploads//videos/Tokens.mp4" type='video/mp4'></video><br>
</div>

Similarly to transferring native assets, transferring tokens requires the end-user to confirm the transaction details on the Nano devices’ screens. Such verification is a security requirement and must be made available before the application is released by Ledger. Expected information to verify are (at least) : the amount transferred, the token name and/or ticker, the recipient address.

Different tokens imply multiple names, multiple tickers, multiple identifiers and, sometimes, different magnitudes (or decimals). As an example, BAT and USDT tokens are both ERC20 tokens on the Ethereum network and have each their own set of characteristics :

|     BAT       |     USDT     |
|---------------|--------------|
|{"ticker": "BAT","name": "BAT","contract_address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF","decimals": 18}|{"ticker": "USDT","name": "Tether USDT","contract_address": "0xdAC17F958D2ee523a2206206994597C13D831ec7","decimals": 6}|

<!--  -->
{% include alert.html style="important" text="<ul><li><b>The smart contract address is important</b> as this information will allow the Nano Ethereum or Algorand application to correctly determine the token being transferred and its characteristics.</li><li><b>The decimals information is important</b> as an error in its value will result in the wrong amount being displayed on the Nano screen. A user may approve a transaction to transfer 10 USDT, when in reality, they are approving a transaction for 1000 USDT.</li></ul>" %}
<!--  -->

Ledger applies a specific signature to the triplet **{"ticker”,"contract_address","decimals”}**. As a consequence, the Nano is able to verify the information has not been tampered with.

## How to request a token addition?

Follow the action for:
- [ERC20, BEP20 or Polygon tokens](../erc20-bep20)
- [ASA](../asa) 
- [TRC10/20](../trc)

Other types of tokens are not supported for the moment. This documentation will be updated when new types are supported.

## Join us on Discord

If you need help or information about a token addition, join us on Discord and make sure you've joined the **#Tokens** chan.
