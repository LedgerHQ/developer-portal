---
title: 1 - Using the 44/60 path
subtitle:
tags: []
category: Embedded Application
redirect_from: 
  - docs/nano-app/eth-app-update
  - docs/nano-app/eth-app-update/
author:
layout: doc
---

## Prerequisites 

Follow this process if your chain uses the 44/60 path. 

## Start here

Instead of building your application in a separate repository, you will make changes to the [Ethereum app](https://github.com/LedgerHQ/app-ethereum).

- Fork the [Ethereum app](https://github.com/LedgerHQ/app-ethereum)
- Before committing your changes remember to sign your commits.
- Please make your changes to the `develop` branch

{% include alert.html style="important" text="For security reasons, the repository is set up to accept only pull requests with signed commits. To sign your commits, use the -S flag : <code>$ git commit -S -m your commit message</code>" %}

## 1. Modify app-ethereum/src_common/network.c

Add your chain ID, chain name and Ticker to [network.c](https://github.com/LedgerHQ/app-ethereum/blob/develop/src_common/network.c) following this example:

```js
{.chain_id = 592, .name = "Astar", .ticker = "ASTR "};
```


## 2. Add your Network to Chainlist.org and SLIP-0044

- Chainlist.org: Click "Add Your Network +" on [the Chainlist homepage](https://chainlist.org/) and follow the ReadMe to add your Network.

- SLIP-0044: Open a PR to add your network [in this file](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)
