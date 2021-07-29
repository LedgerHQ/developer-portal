---
title: Building iOS Dev App
subtitle:
tags: []
author:
layout: doc_ci
---

<!-- 2021-03-30 based on 2177138906 in Confluence -->

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

This page explains how to install the Ledger Live dev app for iOS on macOS.

## Prerequisites

1.  Xcode (Download [here](https://developer.apple.com/download/more/). An Apple ID is needed)

2.  [Brew](https://brew.sh/)

3.  The Swift toolchain 4.2.4 (download [here](https://swift.org/builds/swift-4.2.4-release/xcode/swift-4.2.4-RELEASE/swift-4.2.4-RELEASE-osx.pkg))

4.  Having an Apple account

5.  Being a member of the Ledger iOS dev
    group: to check if you're a member
    - open Xcode → Preferences... → Accounts,
    - verify that "Ledger SAS"  appears as a Team member

<!-- ------------- Image ------------- -->
<div style="text-align:center">
<img width="680" src="../images/2177138906/2175697305.png" ></div>
<!-- --------------------------------- -->

Here, you can also check that you're using the correct toolchain and that you have an iOS simulator installed. It is advisable to have multiple simulators.

<!-- ------------- Image ------------- -->
<div style="text-align:center">
<img width="680" src="../images/2177138906/2175730132.png" ></div>
<!-- --------------------------------- -->

<!-- ------------- Image ------------- -->
<div style="text-align:center">
<img width="680" src="../images/2177138906/2177171698.png" ></div>
<!-- --------------------------------- -->


## Steps

Install dependencies using brew


```sh
brew install ruby watchman yarn
```

Then clone ledger-live-mobile, and cd into the folder.

```sh
git clone git@github.com:LedgerHQ/ledger-live-mobile.git
cd ledger-live-mobile
```
Use the yarn command.

```sh
yarn
```

When it has finished, execute:

```sh
yarn pod
```

This command may fail. Like this, for example.

<!-- ------------- Image ------------- -->
<div style="text-align:center">
<img width="680" src="../images/2177138906/2177171709.png" ></div>
<!-- --------------------------------- -->

One solution is to run:

```sh
sudo gem install bundler:2.1.4
```

Then re-do the **yarn** and **yarn pod** commands.

Open a second terminal, cd into the ledger-live-mobile repository, and run:

```sh
yarn start
```

Wait until you see a message indicating "Loading dependency graph, done."

<!-- ------------- Image ------------- -->
<div style="text-align:center">
<img width="680" src="../images/2177138906/2177204490.png" ></div>
<!-- --------------------------------- -->

Return to the first terminal, and run

```sh
yarn ios
```

It will compile the whole iOS application, so go and grab a coffee.

Then eventually, an iOS simulator will open, and after some time again, you'll see a LL [DEV] application on the screen.

<!-- ------------- Image ------------- -->
<div style="text-align:center">
<img width="340" src="../images/2177138906/2177237212.png" ></div>
<!-- --------------------------------- -->
