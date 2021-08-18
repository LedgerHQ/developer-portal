---
title: ERC20
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

## How to request a token addition

### 1. Is my ERC20 token listed ?

First, make sure your token isn’t already listed by checking this table of the [supported crypto-assets](https://github.com/LedgerHQ/ledger-live-desktop/blob/develop/cryptoassets.md).

### 2. How to get my token listed ?

Then, fill in [this form](https://developers.ledger.com/contact/). Please make sure to share with us the details of your ERC20 token, and a link to Etherscan to allow us to double check the information.

### 3. How do I add my token icon ?

Ledger Live relies on [this repository](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/data/icons/svg) to manage coins and tokens icons. Please make a PR to the [repository](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/data/icons/svg) to get your token icon visible on Ledger Live.

You can find an example of such Pull Request [here](https://github.com/LedgerHQ/ledger-live-common/pull/1316)

In order to keep integration of icons homogeneous through our app we don't allow for use of gradients in icons and usually use a flat design icon.
Also prefer merging all the paths together as we will parse the svg file in order to export components for our mobile and desktop app from it, replacing the fill attribute everywhere we find it by the associated color. Here are a list of supported svg tags you can use to structure your icon:

* path
* rect
* circle
* polygon
* line
* polyline
* ellipse
* g

Please take a look at the other icons we have in the repository in order to see what is the required format.

### What will Ledger do ?

We will review the list of tokens on a bi-montly basis and will apply our own internal signature process. Once signed, the new tokens will become available after a Ledger Live update. Ledger reserves the right to decide which token will be listed.
