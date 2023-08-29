---
title: Global architecture
subtitle:
tags: [embedded app, embedded application, dapp plugin, dapp, other applications, applications, apps]
category: Embedded Application
redirect_from: 
  - docs/nano-app/types-apps
  - docs/nano-app/types-apps/
toc: 
author:
layout: doc
---

Let’s see the typical end-to-end architecture of a BOLOS application, in the case of an app for a cryptocurrency:

<!-- ------------- Image ------------- -->
<div class="uk-text-center">
	<figure>
	    <a href="/app_architecture.png" style="border-bottom:none;">
			<img src="/app_architecture.png" class="align-center" alt="End-to-end architecture of a BOLOS application" />
		</a>
	<figcaption>End-to-end architecture of a BOLOS application</figcaption>
	</figure>
</div>
<!-- --------------------------------- -->

Three pieces of software are required:
- A BOLOS application, written in C, running on a Ledger device
- The with business logic and typically a GUI, running on a computer or a phone connected to the Ledger device
- A transaction explorer that interfaces between the front-end and the cryptocurrency daemon, running either locally (in the case of a full node) or remotely (light wallet)

If you’re not developing an app adding support for a cryptocurrency, then you can ignore the 3rd piece. Depending on your use case, the wallet app might be a simple daemon or a command line tool, without a GUI.

The Ledger Manager is the service which centralizes the distribution of [BOLOS](https://developers.ledger.com/docs/embedded-app/bolos-introduction/) applications on Ledger devices. It is the place where both Ledger’s apps and third party apps are distributed to users.

<!-- ------------- Image ------------- -->
<div class="uk-text-center">
	<figure>
	    <a href="/manager.png" style="border-bottom:none;">
			<img src="/manager.png" class="align-center" alt="The Ledger Manager" />
		</a>
		<figcaption aria-hidden="true">The Ledger Manager</figcaption>
	</figure>
</div>
<!-- --------------------------------- -->



