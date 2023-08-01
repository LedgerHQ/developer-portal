---
title: Building the CLI for development
subtitle:
tags: [clone ledger live]
category: Blockchain Support
author:
toc: true
layout: doc
---

Using a local version of Ledger Live to test your integration can be time consuming. If you would rather have a faster process, you can use the CLI.

## Set up

To install the CLI do:

```sh
pnpm i
```

To publish:

```sh
# build the cli for publishing
pnpm build:cli
```

To use it:
```sh
pnpm run:cli <command> args
```

You can test that your local Live Common and your device works correctly by executing a CLI command like:

```sh
pnpm run:cli version      # should print live-common version
pnpm run:cli deviceInfo   # should display information about connected device
```

If everything is fine, you are ready to start integrating your blockchain!


## Ledger Live CLI cmd example

```sh
pnpm run:cli sync -c bitcoin -i 0 -s native_segwit   # using device
pnpm run:cli sync -c bitcoin --xpub 'xpub......'    # using xpub
pnpm run:cli getAddress -c bitcoin --path "84'/0'/0'/0/0" --derivationMode ''
pnpm run:cli send -i 0 -s segwit --recipient 13LcRWZyZnZu1xrABuAK9Ayftg4kfVs1AA --amount 0.00056 --feePerByte 5
```

<!--  -->
{% include alert.html style="note" text="Be aware that the CLI has some limitations compared to Ledger Live. For example, every sync with the CLI will sync the entire account history." %}
<!--  -->
 

You will find a complete list of commands [here](https://github.com/LedgerHQ/ledger-live/tree/develop/apps/cli#documentation).

## Environment Variables

Ledger Live provides a lot of flexibility through ENV variables. You can export them, define them before calling cli or use a tool like [direnv](https://direnv.net/).

To list them all, you can execute:

```sh
pnpm run:cli envs
```

The one you will use the most before releasing you integration is:

```sh
EXPERIMENTAL_CURRENCIES=mycoin
```

to use them:
```sh
EXPERIMENTAL_CURRENCIES=mycoin pnpm run:cli -c mycoin --amount 0.1 ---recipient mycoinaddr -i 0
```

or for LLD:
```sh
EXPERIMENTAL_CURRENCIES=mycoin pnpm dev:lld
```

It will consider `mycoin` as supported (you can also add it to the supported currencies in `cli/src/live-common-setup-base.ts`).

**For clarity, we will omit this environment variable in this document.**

If needed, you can add your own in `src/env.ts` (always try to add a MYCOIN\_ prefix to avoid collisions):

```ts
// const envDefinitions = { ...
  MYCOIN_API_ENDPOINT: {
    def: "https://mycoin.coin.ledger.com",
    parser: stringParser,
    desc: "API for mycoin",
  },
// }
```

## Demo

<div class="uk-text-center">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XnbC5w5lBS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

- **00:00** Ledger Live Installation
- **00:38** CLI Build
- **01:20** CLI Usage
