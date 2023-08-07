---
title: Selector Setup
subtitle:
tags: [dapp, DApp plugin]
category: "Live App: Dapp integration"
redirect_from: /docs/dapp/nano-plugin/selectors
author:
toc: true
layout: doc
---
## main.c

Let’s go to the first `EDIT THIS` comment in `app-plugin-boilerplate/src/main.c`. We start by implementing just a single selector because others are added later.

The first selector (or methodID) to support is `SwapExactEthForToken` from Uniswap V2. 
You can find it using Etherscan, and you can also compose it using the ABI (Application Binary Interface).

By looking at [recent transactions on Uniswap](https://etherscan.io/txs?a=0x7a250d5630b4cf539739df2c5dacb4c659f2488d), we find a transaction with the "SwapExactEthForToken" method. Here is [an example](https://etherscan.io/tx/0x216bfa6fb8488901d168810cda1b716d1abcb002a87c3224180deaff00c950fc). Scroll down and click on "Click to see more", to read:

![Uniswap](/images/uniswap.png)

The header line shows `Method ID` to be `0x7ff36ab5`.  
This is going to be the 4 bytes of `SWAP_EXACT_ETH_FOR_TOKENS_SELECTOR`:
```c
static const uint32_t SWAP_EXACT_ETH_FOR_TOKENS_SELECTOR = 0x7ff36ab5;
```

Just a few lines below, the selectors are grouped in an array, in which there is `SWAP_EXACT_ETH_FOR_TOKENS_SELECTOR`. 

You can also change the name of `BOILERPLATE_SELECTORS` throughout the project code.

```c
// Array of all the different boilerplate selectors. 
// Make sure this follows the same order as the
// enum defined in `boilerplate_plugin.h`
const uint32_t BOILERPLATE_SELECTORS[NUM_SELECTORS] = {
    SWAP_EXACT_ETH_FOR_TOKENS_SELECTOR,
};
```
## boilerplate_plugin.h

Let's have a look at `boilerplate_plugin.h` mentioned in the code comments.

Start by checking the value of `NUM_SELECTORS`. Indeed, for the moment we only have two selectors.
```c
#define NUM_SELECTORS 1
```

Here `PLUGIN_NAME` is `Boilerplate`. Your plugin must be named appropriately here, and changed throughout the code

```c
#define PLUGIN_NAME "Boilerplate"
```

Now let's look for the selector mentioned in the comments. Since it is an enum let's change it in our selector:
```c
typedef enum {
    SWAP_EXACT_ETH_FOR_TOKENS,
} selector_t;
```

## dispatch_plugin_calls 

We must also change the name of `BOILERPLATE_SELECTORS` to match the one used in `main.c`.

Now let's go back to `main.c`. We see that it contains a function called `dispatch_plugin_calls()`. 
We will go through each case condition in the pages below. They must all have a corresponding `handle_*.c` located in `src/`. 
Remember to use the [reference flow](../flow/) to have a complete view of what is going on.

