---
title: ASA
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

For ASAs, compared to ERC20, the process differs due to the fact that the tokens details are hardcoded within the Algorand Nano application instead of being streamed to the device.

## How to request a token addition

### 1. Is my ASA token listed ?

First, make sure your token isn’t already listed by checking the [repository](https://github.com/LedgerHQ/ledgerjs/tree/master/packages/cryptoassets/data).

### 2. How to get my token listed ?

Update the [Algorand Nano app](https://github.com/algorand/ledger-app-algorand/blob/master/src/algo_asa.c) and the [ledgerjs package](https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/data/asa.js).

<!--  -->
{% include alert.html style="warning" text="To ensure both these topics are handled properly, we invite you to contact our engineering team through the <a href='https://ledger-dev.slack.com'>Ledger's Developer Slack</a>, or use <a href='https://developers.ledger.com/contact/'>this contact form</a> to get signed in." %}
<!--  -->

### 3. How do I add my token icon ?

Ledger Live relies on [this repository](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/data/icons/svg) to manage coins and tokens icons. Please make a PR to the [repository](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/data/icons/svg) to get your token icon visible on Ledger Live.

### What will Ledger do ?

We will review the list of tokens on a bi-montly basis and will apply our own internal signature process. Once signed, the new tokens will become available after a Ledger Live update. Ledger reserves the right to decide which token will be listed.
