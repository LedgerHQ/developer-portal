---
title: Integrating tokens
subtitle:
tags: []
toc: true
toc_sticky: true
author:
layout: doc_et
---

## Introduction


Similarly to transferring native assets, transferring tokens requires the end-user to confirm the transaction details on the Nano devices’ screens. Such verification is a security requirement and must be made available before the application is released by Ledger. Expected information to verify are (at least) : the amount transferred, the token name and/or ticker, the recipient address.


A major difference between tokens and native assets is the fact that different tokens imply multiple names, multiple tickers, multiple identifiers and, sometimes, different magnitudes (or decimals).

As an example : BAT and USDT tokens exist both as ERC20 tokens on the Ethereum network and have each their own set of characteristics :


<i>{
  "ticker": "BAT",
  "name": "BAT",
  "contract_address": "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
  "decimals": 18
}</i>

<i>{
  "ticker": "USDT",
  "name": "Tether USDT",
  "contract_address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  "decimals": 6
}</i>

The smart contract address is very important as this information will allow the Nano Ethereum application to correctly determine the token being transferred and its characteristics.

The decimals information is especially important: indeed, an error in its value will result in the wrong amount being displayed on the Nano screen. A user may approve a transaction to transfer 10 USDT, when in reality, he’s approving a transaction for 1000 USDT.

Because this information is important, Ledger applies a specific signature to the triplet <i>{"ticker”,"contract_address","decimals”}</i>. As a consequence, the Nano is able to verify the information has not been tampered with.

You can find the entire list of ERC20 tokens supported, along with their signature [here](https://github.com/LedgerHQ/ledgerjs/tree/master/packages/cryptoassets/data).


### How do I request a token addition ?

Ledger Live currently supports ERC20 tokens on Ethereum, ASAs on Algorand and TRC10/TRC20 tokens on Tron.

If you wish to add a new ERC20, [click here](../erc20)
For ASAs and TRC tokens [click here](../other-tokens)
