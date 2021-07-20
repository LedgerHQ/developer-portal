---
title: Documentation requirements
subtitle: Ensuring your documentation is well documented
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

## Introduction

Ledger continually works to make its products and services easy and safe to use. Since the Ledger hardware wallet platform is open-source, members of the Ledger community are welcome to develop BOLOS apps. After a review and approval by Ledger, their apps can be installed through the Ledger Live Manager and used with third-party companion apps (web or desktop app).

As the companion apps are maintained by third-party members of the Ledger community, the documentation on how to use these third-party services needs to be provided during the app review process. This document presents guidelines for writing such documentation and it should be followed very carefully, as part of the app integration process.

<!--  -->
{% include alert.html style="warning" text="Without approval of your documentation, your app will not be released." %}
<!--  -->

## Documentation by Ledger

[Ledger Customer Support](https://support.ledgerwallet.com/hc/en-us) will write and publish an article ([example](https://support.ledgerwallet.com/hc/en-us/articles/360007583514-Ontology-ONT-)) that describes:
- Short introduction: what the app does, what crypto assets it can manage, using what service. Who has developed it. Ledger Nano S and Nano X supported?
- Requirements: What’s needed before starting.
- Installation instructions: How to install the app using Ledger Live.
- Next steps: link to third party documentation and where to get support.

## Third Party Documentation

Third Party will write and host an article ([example](https://blog.cyberrepublic.org/2020/06/15/how-to-use-your-ledger-device-with-the-elastos-light-wallet/)) that describes:
- Short introduction: what the app and service do, what crypto assets they can manage, why to use a Ledger device, where to get support.
- Requirements: What’s needed before starting.
- Installation instructions: How to install the app using Ledger Live.
- Setup instructions:
    - For a web app: how to connect the Ledger device.
    - For installable app: how to download and install it, how to connect to it.
- Where to view account balance.
- How to receive crypto assets
    - Document all the steps.
    - Explicitly instruct to verify receive addresses on the device.
- How to send crypto assets
    - Document all the steps and form fields to fill.
    - Explicitly instruct to verify transaction details on the device display, before confirming and signing it.
- Support: where to get help if needed (mail address, Slack/Reddit/Telegram communities).

## Writing tips

- Write short and concise sentences.
- Write clear section titles.
- Give actionable instructions: Click this, enter that. Verify this, confirm that.
- Use text formatting for UI text, example: Your device displays BTC app installed.
- Screenshots can support the instructions if the user interface is complicated.
- **Referring to the hardware wallet**: Ledger Nano S, Ledger Nano S device, device, hardware wallet, Ledger hardware wallet, Ledger device.
<i>Strictly avoid: wallet, Ledger wallet, a Ledger</i>.
- **Referring to crypto assets**: name, ticker, crypto asset(s), coin(s), cryptocurrency.
<i>Please avoid: money</i>.
- Be sure to check [this article](https://blog.cyberrepublic.org/2020/06/15/how-to-use-your-ledger-device-with-the-elastos-light-wallet/) for an example.
