---
title: Functional requirements
subtitle:
tags: []
toc: true
toc_sticky: true
author:
layout: doc_na
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## Guidelines on app name and ticker

Ensure that the application name defined in makefile matches the one you want to have displayed on the manager.
Ticker name must be added via ledgerjs update and not directly on makefile.

## Wallet requirements

The wallet must give an option to verify the receiving address on the Nano device.
It should also have an affiliate link next connect with ledger option

## Smart contracts & token support

Ledger users must be able to verify every transaction they perform using your Bolos application.
If your chain supports other tokens, ensure that the correct ticker, amount, and destination address are displayed while interacting with them.
If this is not the case, you need to implement a blind signature setting on the application, which by default must be disabled.

## Staking feature

For every staking operation, ledger users must be able to verify the amount, validator/nominator address(es)
