---
title: Demo
subtitle:
tags: [embedded app, embedded application, applications, deliverables]
category: Embedded Application
redirect_from: 
  - docs/nano-app/ui-flow-video
  - docs/nano-app/ui-flow-video/
toc: true
author:
layout: doc
---

You are required to submit a video demo of your Embedded App as described below (For Ledger Nano only).

## UI Flows

To create the flow you will show in the video, we recommend you follow the UI flows shown below.

### Send and receive examples

<!-- ------------- Image ------------- -->
<a href="/eth-flow.png">
	<img width="395" src="/eth-flow.png" style="float:right">
</a>
<!-- --------------------------------- -->

Please create your flow following the given [Ethereum example](../docs/eth-flow.pdf).  

It contains the basic functions App information, Receive and send operations. Include the main operations that your embedded app contains. Try to apply the same kind of flow design for all of them.  

### Blind signing

In case you need the users to blind sign transactions, you will need to include the blind signing flows.

- This screen should be displayed when blind signing is not enabled and the user wants to sign a transaction requiring blind signing:

{: .uk-text-center}
[![](/blind-signing-not-enabled.png){:width="180"}](/blind-signing-not-enabled.png)

- How to modify the blind signing settings:

{: .uk-text-center}
[![](/blind-signing-settings.png){:width="320"}](/blind-signing-settings.png)


- When blind signing is enabled:

{: .uk-text-center}
[![](/blind-signing-enabled.png){:width="550"}](/blind-signing-enabled.png)


## Video

You must **create your own video** using the example given.  

<div class="uk-text-center">
	<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pgGZvx30yNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

On the video demo you must show on a real device how to: 
- Import account
- Verify address
- Accept / reject a coin transfer transaction
- Show settings

If applicable :
- Transfer a token
- Delegate/Stake/Vote

If blind signing is implemented:
- Sign a blind signed transaction while setting is disabled
- Sign a blind signed transaction while setting is enabled

*Reminder : Blind signed operations must only be accessible behind a setting that must be disabled by default ([see blind signing section](../blind-signing/))*





