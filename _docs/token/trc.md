---
title: TRC10/20
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

### 1. Is my TRC10/20 token listed ?

First, make sure your token isn’t already listed by checking this table of the [supported crypto-assets](https://github.com/LedgerHQ/ledger-live-desktop/blob/develop/cryptoassets.md).

### 2. How to get my token listed ?


|     TRC10       |     TRC20     |
|-----------------|---------------|
| 1. Update the [ledgerjs package](https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/data/trc10.js).| 1. Update the [ledgerjs package](https://github.com/LedgerHQ/ledgerjs/blob/master/packages/cryptoassets/data/trc20.js).|
| 2. A specific signature is required on the [Tron Nano App](https://github.com/LedgerHQ/app-tron). | 2. Update both `src/tokens.c` and `src/tokens.h` in the [Tron Nano App](https://github.com/LedgerHQ/app-tron). |

<!--  -->
{% include alert.html style="warning" text="To ensure both these topics are handled properly, we invite you to contact our engineering team through the <a href='https://ledger-dev.slack.com'>Ledger's Developer Slack</a>, or use <a href='https://developers.ledger.com/contact/'>this contact form</a> to get signed in." %}
<!--  -->

### What will Ledger do ?

We will review the list of tokens on a bi-montly basis and will apply our own internal signature process. Once signed, the new tokens will become available after a Ledger Live update. Ledger reserves the right to decide which token will be listed.

