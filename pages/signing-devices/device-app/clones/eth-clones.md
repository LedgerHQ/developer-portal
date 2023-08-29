---
title: 2 - All other paths
subtitle:
tags: []
category: Embedded Application
redirect_from: 
  - docs/nano-app/eth-clones
  - docs/nano-app/eth-clones/
toc: true
author:
layout: doc
---

Follow this process if your chain uses another path than 44/60.

<!--  -->
{% include alert.html style="warning" text="If your chain does not use the `44/60` path, you won't be able to use Metamask with your embedded app." %}
<!--  -->

## Start here

Instead of building your application in a separate repository, you will make changes to the [Ethereum app](https://github.com/LedgerHQ/app-ethereum).

- Fork the [Ethereum app](https://github.com/LedgerHQ/app-ethereum)
- Before committing your changes remember to sign your commits.
- Please make your changes to the `develop` branch

The following page uses the Tomo Chain as an example, please replace every `TOMO` or `TOMOCHAIN` occurence with the name of your coin and chain.

{% include alert.html style="important" text="For security reasons, the repository is set up to accept only pull requests with signed commits. To sign your commits, use the -S flag : <code>$ git commit -S -m your commit message</code>" %}

## 1. Create a file in app-ethereum/makefile_conf/chain

Following the next example, add a `.mk` file in `app-ethereum/makefile_conf/chain`

``` c
APP_LOAD_PARAMS += --path "44'/889'"
DEFINES += CHAINID_UPCASE=\"TOMOCHAIN\" CHAINID_COINNAME=\"TOMO\"CHAIN_KIND=CHAIN_KIND_TOMOCHAIN CHAIN_ID=88
APPNAME = "TomoChain"
```

<!--  -->
{% include alert.html style="important" text="It is necessary to choose a Derivation Path and a Chain ID specific to your network to prevent the risk of replay attack (Introduced by EIP155) that can happen when using the same Derivation Path ( m/44'/60'/0') and Chain ID as Ethereum. This could expose your users to loss of funds.<br>
You can either use the same Derivation Path but define a new chain ID (make sure this is not used by another network) or use slip44/BIP44 standard to reserve a dedicated coin type that will allow you to define a new derivation path." %}
<!--  -->

## 2. Modify src/chainConfig.h

Inside `scr/chainConfig.h`, add your chain in `chain_kind_e`:

``` c
typedef enum chain_kind_e {
    CHAIN_KIND_ETHEREUM,
  CHAIN_KIND_REOSC,
  (...)
  CHAIN_KIND_HPB,
  CHAIN_KIND_TOMOCHAIN
} chain_kind_t;

```

## 3. Upload your app's icons

Once you have created your App's icons following the [Design requirements](../design-requirements/), upload them in the `/icons` folder.

## 4. Modify src/main.c

Add:

```c
case CHAIN_KIND_TOMOCHAIN:
    numTokens = NUM_TOKENS_TOMOCHAIN;
    break;
```

and:
```c
case CHAIN_KIND_TOMOCHAIN:
    currentToken = (tokenDefinition_t *)PIC(&TOKENS_TOMOCHAIN[i]);
    break;
```

### 5. Build the application

To build the clone application, [follow these guidelines](../app-builder-container/).
1. First run the `make` command for the Ethereum App and run `make load`
2. Run `make clean`
2. Load the Embedded App clone with the name of your chain. E.g: `make load CHAIN=tomochain`

## 6. Add your Network to Chainlist.org and SLIP-0044

- Chainlist.org: Click "Add Your Network +" on [the Chainlist homepage](https://chainlist.org/) and follow the ReadMe to add your Network.

- SLIP-0044: Open a PR to add your network [in this file](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)

## 7. Open a pull request

When your application is ready, open a pull request on the Ethereum application repository.

Please get in touch with our team on the [Ledger's Discord server](https://developers.ledger.com/discord/) to get your PR reviewed.


## Publishing the application

If you want to publish a clone application, follow the process in [Publishing an application](../release-requirements/).
