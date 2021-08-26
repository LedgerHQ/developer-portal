---
title: Introduction
subtitle:
tags: []
layout: doc_pa
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## Context


In this article, we will guide you through the process of developing and integrating your Platform application to the Ledger Live ecosystem. By having your application supported in Ledger Live, you increase the security and ease of use for your users, while simultaneously having access to over 3 million Ledger Live users.

## What is a Platform Application ?

A Platform Application is an application that leverages the Ledger Live API. By doing so it can get access to the native features of Ledger Live and to the user’s accounts and information.

[In a previous article](https://developers.ledger.com/docs/dapp/introduction/), we described the process to get a Decentralized Application (DApp) listed in the Ledger Live Discover section. The DApps running in this section are in fact executed within the first Platform Application Ledger designed : the Dapp Browser.

![interaction between Ledger Live and the Live Apps](../images/ledger_live_interaction_live_apps.png "interaction between Ledger Live and the Live Apps")

## Prerequisites

(TBD) To set up your dev environment, you will need to:
- Install a recent [node.js](https://nodejs.org/) and [Yarn 1 (classic)](https://classic.yarnpkg.com/lang/en/),
- Install our typescript Platform SDK library (“yarn add ledgersdk”),
- Unlock the [Developer mode](../developer-mode) inside Ledger Live.

You can access our Demo repository here (link), a github repository with a standard “Hello World” Platform App to get you started.
