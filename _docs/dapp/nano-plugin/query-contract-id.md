---
title: Query Contract ID
subtitle:
tags: [dapp, DApp plugin]
category: "Live App: Dapp integration"
author:
toc:
layout: doc
---

The Ethereum App asks for information to be displayed. For the moment, it just wants an overview of this method (in our case, a swap). Let's look at what needs to be done.

The device screen has two lines. For example:
```
|  Ledger  |    <-- Upper line
|   Rocks   |    <-- Bottom line
```

In this call, the upper line is `msg->name`. It is the Plugin name.
The bottom line is `msg->version` (legacy name, etc.). It is the action context, for example "Stake", "Vote", "Buy", etc. In our example, the user is swapping, so we use "Swap".

The boilerplate repository already contains code that copies `PLUGIN_NAME` to `msg->name`, so we only need to handle the `switch` case condition:
```c
switch (context->selectorIndex) {
    case SWAP_EXACTH_ETH_FOR_TOKENS:
        strlcpy(msg->version, "Swap", msg->versionLength);
        break;
}
```

This results in the following screen:
```
| Uniswap |
|    Swap    |
```

That's it! Now we can proceed to the last section.
