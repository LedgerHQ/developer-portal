---
title: Provide Token
subtitle:
tags: [dapp, DApp plugin]
category: "Live App: Dapp integration"
author:
toc:
layout: doc
---

If the Ethereum App finds information on the requested tokens, it will be in `msg->token1` and `msg->token2`.

In our plugin, we need to account for when the Ethereum App does NOT find the token.

Here is the code for our plugin, with comments:
```c
    if (msg->token1) {
        // The Ethereum App found the information for the requested token!
        // Store its decimals.
        context->decimals = msg->token1->decimals;
        // Store its ticker.
        strlcpy(context->ticker,
                (char *) msg->token1->ticker,
                sizeof(context->ticker));

        // Keep track of the token found.
        context->token_found = true;
    } else {
        // The Ethereum App did not manage to find 
        // the info for the requested token.
        context->token_found = false;

        // Default to ETH decimals (for wei).
        context->decimals = 18;
        // Default to "???" when information was not found.
        strlcpy(context->ticker, "???", sizeof(context->ticker));
        
        // If we wanted to add a screen, say a warning screen for example,
        // then we tell the Ethereum app to add an additional screen
        // by setting `msg->additionalScreens` here, just like so:
        // msg->additionalScreens = 1;
    }
```

The code is straightforward. Note that `msg->additionalScreens` tells the Ethereum App it needs X additional screens.

The next step is about how to word your first screen.
