---
title: Quickstart
subtitle: Putting it together
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

This article is a fast track to quickly setting up your BOLOS development environment up.

If you want to set up your environment following more detailed explanations, read the [next article](../deepdive).

## 1 - Setting up the environment

1 - Download [this script](../../../files/setup-env.sh) to setup and configure the development environment for Nano apps.

2 - Move the script to your working folder.
```bash
mv setup-env <my-working-folder>
```

3 - Run the script:
```bash
source setup-env
```

The setup take a couple of minutes to run. Here is a video to show what is happening.

<video controls muted ><source src="../videos/nano-setup.mp4" type='video/mp4'></video><br>
## 2 - Get the sample Boilerplate app

Applications that support multiple BOLOS devices are typically contained within a single repository, so you can use the same repository to build an app for different Ledger devices. Just make sure that you've set `BOLOS_SDK` to the appropriate SDK for the device you're using. The Makefiles used by our apps use the contents of the SDK to determine which device you're using.

The [app-boilerplate](https://github.com/LedgerHQ/app-boilerplate.git) is a thoroughly documented app that was specifically designed for developers to play around with and read the code.

```bash
git clone https://github.com/LedgerHQ/app-boilerplate.git
```
## 3 - Building the app

Now you can let the Makefile do all the work. The `load` target will build the app if necessary and load it onto your device over USB.

```bash
cd app-boilerplate/
make
make load
```

This video shows the loading and the public key verification (00:25") and the application hash verification (00:44").
It ends showing the Boilerplate app is correctly installed on the Nano.

<video controls muted ><source src="../videos/load.mp4" type='video/mp4'></video><br>

## 4 - Deleting the app from the Nano

The app can be deleted from the Nano like so:
```bash
make delete
```
This video shows the app being unloaded, the public key verification (00:07") and the identifer hash (00:15").
The app is completely uninstalled at 00:19".
<video controls muted ><source src="../videos/delete.mp4" type='video/mp4'></video><br>

## Moving on

This was the [app-boilerplate](https://github.com/LedgerHQ/app-boilerplate.git). If you want to get inspired, very good codebases are available for you to learn from.

The [app-sia](https://github.com/LedgerHQ/app-sia.git) and [solana](https://github.com/LedgerHQ/app-solana) are also a thoroughly documented app written by the community. If you wish to study fully-fledged apps, these are the one for you.
