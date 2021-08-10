---
title: Adding *MyCoin* to Live-Common
subtitle:
tags: []
author:
layout: doc_ci
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## Introduction

Ledger Live Common is the shared core library used by Ledger Live Desktop and Mobile, that also includes a CLI for testing purpose or for using Ledger Live features directly from a terminal (in a limited way).

This library is built upon a pretty standard ES6 + Typescript stack and relies on a bunch of [ledgerjs](https://github.com/LedgerHQ/ledgerjs) packages, [RxJS 6.x](https://github.com/ReactiveX/rxjs/tree/6.x), [bignumber.js](https://github.com/MikeMcl/bignumber.js) and [React](https://github.com/facebook/react/) + [Redux](https://github.com/reduxjs/redux) for some front-end utilities and hooks.

It is designed to have very generic models and mechanics (for currencies, accounts, storage, synchronisation, events...) that also facilitates new coin integrations through flexibility.
All integrated coins are implemented in a `src/families` dedicated folder which contains the specifics of a coin family - that can be shared by multiple crypto-assets that use the same implementation (i.e. Bitcoin-like coins share the same `bitcoin` family).

**This document only concerns new coin integrations using Typecript - we will use an imaginary coin named `MyCoin` as a walkthrough.**

## Setup

### Requirements

- [NodeJS LTS/Fermium (Node 14.x)](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/) 1.x (Classic)
- Python 2.7 or 3.5+
- A C/C++ toolchain (see node-gyp documentation)

### Development tools (used or required)

- [yalc](https://github.com/wclr/yalc) for locally linking live-common with other projects
- [eslint](https://github.com/eslint/eslint) - ensure it's working in your IDE ([vscode plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
- [prettier](https://github.com/prettier/prettier) - through an eslint-plugin
- [typescript](https://www.typescriptlang.org/) - ensure it works fine with your IDE

### Hardware prerequisites

- A physical device (Ledger Nano S or Ledger Nano X)
- <i>MyCoin</i> app installed on device

### Installation

- Clone project [https://github.com/LedgerHQ/ledger-live-common](https://github.com/LedgerHQ/ledger-live-common)
- `yarn install` will install all dependencies
- `yalc publish --push` will build and link live-common

## Structure

Your whole implementation of <i>MyCoin</i> must reside in a `mycoin` folder in `src/families/`, with the exception of some changes to apply in shared code.

Here is a typical family folder structure (TS integration):

```plaintext
./src/families/mycoin
├── bridge
│   └── js.ts
├── hw-app-mycoin
│   └── MyCoin.ts
├── api.ts
├── hw-getAddress.ts
├── errors.ts
├── deviceTransactionConfig.ts
├── account.ts
├── transaction.ts
├── serialization.ts
├── cli-transaction.ts
├── logic.ts
├── cache.ts
├── preload.ts
├── react.ts
├── specs.ts
├── speculos-deviceActions.ts
├── test-dataset.ts
├── test-specifics.ts
└── types.ts
```

<!--  -->
{% include alert.html style="primary" text="You can refer to existing implementations to complete given examples, like <a href='https://github.com/Ledger-Coin-Integration-team/ledger-live-common/src/families/polkadot'>Polkadot integration</a>" %}
<!--  -->



In the section Below, the files are marked as **Required**, **Recommended**, or **Optional** accordingly.

## Generating families-specific imports

All per-family imports are gathered in the [`src/generated`](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/generated) folder, for letting generic code to choose which implementation to use on a per-coin basis.

You should not update those files manually, but call a dedicated script:

```sh
./scripts/sync-families-dispatch.sh
```

{% include alert.html style="success" text="you may need to add <code>mycoin</code> to the <code>withoutNetworkInfo</code> in this script if you don't use a NetworkInfo type." %}


**As soon as you add a file in the family (that is part of the generated folder) you will need to execute this script before building.** Otherwise, your implementation will not be known by the live-common library.

## Building for Development

Do not forget to build before testing:

```sh
yalc publish --push
# if not yarn watch
cd cli
yarn build
```

### Environment Variables

Ledger Live provides a lot of flexibility through ENV variables. You can export them, define them before calling cli or use a tool like [direnv](https://direnv.net/).

To list them all, you can execute:

```sh
ledger-live envs
```

The one you will use the most before releasing you integration is:

```sh
EXPERIMENTAL_CURRENCIES=mycoin
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

### Linking local packages

You may need to override some package with a local version (like `@ledgerhq/cryptoassets` or `@ledgerhq/hw-app-mycoin`). Use `yalc add package-name` to do so.

Since your build would be used locally during developemnt, you may also want those dependencies to be local and included in the published local package.
Ensure the `.yalc` directory is included then in the package.json:

`package.json`:

```ts
  "files": [
    ...,
    ".yalc"
  ],
```
<!--  -->
{% include alert.html style="warning" text="Do not commit changes due to the usage of <code>yalc</code> as it may result in wrong behaviour." %}
<!--  -->


## Step by Step integration

### MyCoin cryptoassets

We will consider that <i>MyCoin</i> is already in [@ledgerhq/cryptoassets](https://github.com/LedgerHQ/ledgerjs/tree/master/packages/cryptoassets) package. If not, see [\*MyCoin\* in CryptoAssets](../cryptoassets-library).

### Derive Address from device

If your app JS bindings (See [\*My Coin\* App JS Bindings](../js-bindings)) are not yet published in [LedgerJS](https://github.com/LedgerHQ/ledgerjs), you can put them in `src/families/mycoin/hw-app-mycoin`.

First and easiest step is to get an address from the device for <i>MyCoin</i>, by creating the `hw-getAddress.ts` Resolver:

`src/families/mycoin/hw-getAddress.js`:

```ts
import type { Resolver } from "../../hw/getAddress/types";
import MyCoin from "./hw-app-mycoin/MyCoin";

const resolver: Resolver = async (transport, { path, verify }) => {
  const myCoin = new MyCoin(transport);

  const r = await myCoin.getAddress(path, verify);

  return {
    address: r.address,
    publicKey: r.publicKey,
    path,
  };
};

export default resolver;
```

Test that you can derive an address:

```sh
ledger-live getAddress --currency mycoin --path "44'/8008'/0'/0/0" --derivationMode ""
```

### Derivation

Ledger Live uses the BIP44 derivation mode by default (as `derivationMode=""`), which is standard and most common way for HD wallet.
If <i>MyCoin</i> has a conventional derivation path (BIP44), Ledger Live should already be able to derive an address correctly.

**If you need to use another derivation mode:**

Make changes to [`src/derivation.ts`](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/derivation.ts):

1. Add a new derivation mode with `overridesDerivation`:

```ts
// const modes = Object.freeze({
// ...
  mycoinbip44h: { // Hardened BIP44 for MyCoin
    overridesDerivation: "44'/8008'/<account>'/0'/<address>'",
  },
// });
```

2. add the mode to family in `legacyDerivations`:

```ts
// const legacyDerivations: $Shape<CryptoCurrencyConfig<DerivationMode[]>> = {
// ...
  mycoin: ["mycoinbip44h"],
// };
```

3. disable the default use of BIP44 in `disableBIP44`:

```ts
// const disableBIP44 = {
// ...
  mycoin: true,
// };
```

See [Derivation documentation](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/derivation.md) for further details.

You can check that the derivationMode is correct by executing:

```sh
ledger-live derivation --currency mycoin

#>  default: MyCoin 1: 44'/8008'/<account>'/<change>/<address>
```

### Types

Generic types can be found in [src/types/](https://github.com/Ledger-Coin-Integration-team/ledger-live-common/blob/master/src/types), with some documentation in source.

#### Semantics

> **Semantic: What is an Account?**

An account represents a wallet where a user detains crypto assets for a given crypto currency.

Ledger Live model is essentially an array of `Account` because many accounts can be created, even within a same crypto currency.

More technically, an account is a view of the blockchain in the context of a specific user. While blockchain tracks the series of transactions, assets motions that happen between addresses, an account essentializes that from the point of view of a user that owns a set of addresses and wants to view the associated funds they detain and be able to perform transactions with it.

Essentially what the user wants to see at the end is his balance, a historic graph, and a series of past operations that were performed. Moving from the blockchain to the concept of account is not necessarily trivial (in blockchains like Bitcoin, the concept of account does not exist – you don't create or destroy, this concept is a view, a lense, that we abstract for the user).

> **Semantic: What is an Operation?**

Note the wording "Operation" is used instead of "Transaction". An account does not have transactions, it has **operations**.

The same abstraction applies as for Account on top of blockchain: an Operation is a view of a transaction that happened in the blockchain that **concerns** the contextual account. It's always in the context of an account, in other words, an operation does not exist on its own.

Most of the time, a transaction yield of one operation. But in some blockchains (like Ethereum) one transaction that concerns the account associated addresses can result in 0 to N operations. A typical example is contract or token transfers (one transaction to move a token generate a token operation and a fee operation in the ethereum account). Another example that is possible in most blockchains is a "self" transaction yields two operations (sending out, sending in). But in fact, that's semantic, we, Ledger, have put. We could also have allowed the concept of "SELF" operation.

> **Semantic: What is a Transaction?**

In Ledger Live, the "Transaction" is the data model that is created and updated in order to build the final blob to be signed by the device, and then broadcasted to the blockchain.

It is highly specific to the blockchain protocol, and contains any data that will need to be serialized into the transmission format of the blockchain. It only lives for a short period of time in the application - during which the user is choosing the parameters of its transaction before it is signed and sent to the blockchain, after which it will be transformed into an Operation.

Note that this Operation will be considered "pending", as it is an optimistic version of the real Operation that will appear in the account history, after being synchronized.

#### Account

In Live Common, there are currently 3 types of accounts:

- `Account` which is a top level account associated to a `CryptoCurrency` - the "main" account.
- `TokenAccount` which is a nested level account, **inside** an Account and that is associated to a `TokenCurrency`.
- `ChildAccount` which is a variant of TokenAccount but more in context of a `CryptoCurrency` (typically used for Tezos)

They are aggregated as a single `AccountLike` type, used across Ledger Live implementations.

We will focus only on the `Account` type as we won't cover the Token integration in this document.

All main accounts share a common ground:

- `id: string`: a unique account identifier we build up with many pieces of information. It's generally composed of 5 parts split by a `:`
- `seedIdentifier: string`: a unique way to identify a seed the account was associated with
- `xpub?: string`: the xpub if relevant. This information is redundant with the `id` and might be eventually dropped
- `derivationMode: DerivationMode` identifies the derivation scheme that is used. See [Derivation](#derivation)
- `index: number`: the index of the account among a given `derivationMode`
- `freshAddress: string`: the "next" public address where a user should receive funds. For account-based blockchains, it is the current public address
- `freshAddressPath: string` represents the derivation path where the `freshAddress` was taken from
- `freshAddresses: Address[]`: an array of "future" fresh addresses. It is a generalisation of `freshAddress` and `freshAddressPath`
- `name: string`: name of the account that the user has set. It is not saved or restored from any place but is defined by the user and locally saved
- `balance: BigNumber` represent the total amount of assets that this account holds
- `spendableBalance: BigNumber`: represents the subset of `balance` that can be spent. Most of the time it will be equal to `balance` but this can vary in some blockchains
- `blockHeight: number`: tracks the current blockchain block height
- `currency: CryptoCurrency`: the associated crypto currency of the Account. See [\*MyCoin\* in CryptoAssets](../cryptoassets-library)
- `unit: Unit`: the user defined preferred unit to view the account with. It's initialized to `currency.units[0]`
- `operationsCount: number` gives the total number of operations this account contains. This field exists because the `operations` array is not guaranteed to be complete
- `operations: Operation[]`: an array of operations sorted from the most recent to the oldest one. It might be partial, containing only the last N operations but can be paginated on
- `pendingOperations: Operation[]`: like `operations` but only for <i>optimistic updates</i> of operations resulting from transactions that were just performed and not yet confirmed
- `lastSyncDate: Date`: the date of the last time a synchronisation was performed
- `subAccounts?: SubAccount[]`: an optional field that is defined for accounts that can contain children accounts. This is for instance used for tokens and Tezos originated accounts
- `balanceHistory?: BalanceHistoryMap`: a cache that contains the historical datapoints of the balance in different ranges of time. It might not be present in Account and in that case, a fallback JS implementation will be used to calculate this from the operations array

But if needed by the blockchain, an account can also contain coin-specific resources related to a single account, like its "nonce" or additional balances (e.g. for staking), or anything that may be displayed or used in your implementation. It's generally an additional field like `myCoinResources`. See [Family-specific types](#family-specific-types) below.

For further details, see [Account documentation](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/account.md) and [src/types/account.ts](https://github.com/Ledger-Coin-Integration-team/ledger-live-common/blob/master/src/types/account.ts)

#### Operation

In short, transactions history in Ledger Live is a list of `Operation`, that are confirmed, unconfirmed or pending (not yet fetched from explorer).

They all share the same model, with an `extra` field that can store any additional data you may need to display:

- `id: string`: unique identifier (encoded as `accountId-hash-TYPE`)
- `hash: string`: transaction hash from blockchain
- `type: OperationType`: see [Operation Type](#operation-type) below
- `value: BigNumber`: atomic value of the operation, as <i>a positive value</i> that affects the account balance (includes fees for OUT, not for IN, only fees for FEES...)
- `fee: BigNumber`: atomic value of the operation fees (no matter which direction)
- `senders: string[]`: list of senders addresses
- `recipients: string[]`: list of recipients addresses
- `blockHeight?: number`: (optional) height of the block on the blockchain
- `blockHash?: string`: (optional) hash of the block the operation is in
- `transactionSequenceNumber?: number`: sequence number of the transaction in blockchains (aka "nonce")
- `accountId: string`: the Ledger Live account id
- `date: Date`: parsed transaction date
- `hasFailed?: boolean`: does the transaction succeeded
- `subOperations?: Operation[]`: (advanced) in context of accounts that can have tokens, an operation can contains itself operations
- `internalOperations?: Operation[]`: (advanced) in context of accounts that have internal transactions that belong to a parent transaction
- `extra: Object`: Extra crypto specific fields

If <i>MyCoin</i> has specific operation fields (like `additionalField` we added for example), you will be able to display them later. They are not meant to be useful in any flow, only for UI.

If <i>MyCoin</i> uses a "nonce", then `transactionSequenceNumber` must be filled correctly, as it will be necessary for signing new transactions (and will interpreted to clear pending operations). Only outgoing transaction must have this value though. See [Optimistic Operation](#optimistic-operation).

See [src/types/operation.ts](https://github.com/Ledger-Coin-Integration-team/ledger-live-common/blob/master/src/types/operation.ts) for better understanding of all fields.

#### Operation Type

As said above, an `Operation` has a `type` which is generic string typed as `OperationType`, giving more or less the direction of the operation:

- `OUT`: A send / transfer amount transaction
- `IN`: A received / incoming amount transaction
- `FEES`: A transaction that only charges fees
- `NONE`: A transaction that does not affect balance
- `REWARD`: A claimed reward (as an outgoing transaction with fees)
- `REWARD_PAYOUT`: A received reward (as an incoming transaction)
- `SLASH`: A staking slash (with slashed amount generally)

There are more types available, existing one will have predefined icons, translations and behaviours (i.e. `getOperationAmountNumber()` in [src/operation.ts](https://github.com/Ledger-Coin-Integration-team/ledger-live-common/blob/master/src/operation.ts)).

<i>MyCoin</i> could have also specific operation types, if you need to add a type that is not yet implemented, add them in `src/types/operation.ts`. You will later need to implement some specific code for the Ledger Live Desktop and Mobile to display them correctly.

#### Transaction

`Transaction` will contains any data needed to create a transaction on the blockchain. It is created as soon as the user initiates a transaction flow on Ledger Live, and will be updated according to its inputs, like the amount or choosing a recipient.

It shares a common shape between all coins, to which we will add specific-fields:

- `amount: BigNumber`: amount parsed from user input - will be 0 if user use all amount
- `recipient: string`: the recipient of this amount
- `useAllAmount?: boolean`: indicated if user wants to transfer whole available balance
- `subAccountId?: ?string`: the child/token account id if relevant
- `family: string`: the coin-family of the transaction (as a coin discriminator)

Some coins also have some fields generally respecting the same semantics, here are some provided as example:

- `mode: string`: type of transaction to be broadcasted (`"send"`, `"freeze"`, `"delegate"`, `"claimReward"`...)
- `fees: BigNumber`: fees (provided by blockchain, or filled by user)
- `memo: ?string`: memo if required by exchange

Although some fields are required, they can be emptied (recipent = "" and amount = 0) and ignored for transactions not using them.

You should add any fields that would be required by <i>MyCoin</i> to be correctly broadcasted - respecting as much as possible its protocol's lexicon.

See existing implementations for inspiration: [Polkadot types](https://github.com/LedgerHQ/ledger-live-common/blob/master/src/families/polkadot/types.ts), [Cosmos types](https://github.com/LedgerHQ/ledger-live-common/blob/master/src/families/cosmos/types.ts)

#### Family-specific types

You will be implementing the flow types that will be used in your integration, like the Transaction type or the additional data needed to be added to the Account shared type, but also any other types that you will need (remember to always type your functions with flow types).

`src/families/mycoin/types.ts`:

```ts
import type { BigNumber } from "bignumber.js";
import type {
  TransactionCommon,
  TransactionCommonRaw,
} from "../../types/transaction";

// for legacy
export type CoreStatics = Record<any,any>;
export type CoreAccountSpecifics = Record<any,any>;
export type CoreOperationSpecifics = Record<any,any>;
export type CoreCurrencySpecifics = Record<any,any>;

/**
 * MyCoin account resources
 */
export type MyCoinResources = {
  nonce: number;
  additionalBalance: BigNumber;
};

/**
 * MyCoin account resources from raw JSON
 */
export type MyCoinResourcesRaw = {
  nonce: number;
  additionalBalance: string;
};

/**
 * MyCoin transaction
 */
export type Transaction = TransactionCommon & {
  mode: string;
  family: "mycoin";
  fees?: BigNumber;
  // add here all transaction-specific fields if you implement other modes than "send"
};

/**
 * MyCoin transaction from a raw JSON
 */
export type TransactionRaw =TransactionCommonRaw & {
  family: "mycoin";
  mode: string;
  fees?: string;
  // also the transaction fields as raw JSON data
};

/**
 * MyCoin currency data that will be preloaded.
 * You can for instance add a list of validators for Proof-of-Stake blockchains,
 * or any volatile data that could not be set as constants in the code (staking progress, fee estimation variables, etc.)
 */
export type MyCoinPreloadData = {
  somePreloadedData: Record<any, any>,
};

export const reflect = (_declare: *) => {};
```
<!--  -->
{% include alert.html style="success" text="Core types should be exported for legacy compatibility with existing libcore integrations." %}
<!--  -->



Since some of thoses types will be serialized when stored or cached, you may need to define serialize/deserialize functions for those:

`src/families/mycoin/serialization.ts`:

```ts
import { BigNumber } from "bignumber.js";
import type { MyCoinResourcesRaw, MyCoinResources } from "./types";

export function toMyCoinResourcesRaw(r: MyCoinResources): MyCoinResourcesRaw {
  const { nonce, additionalBalance } = r;
  return {
    nonce,
    additionalBalance: additionalBalance.toString(),
  };
}

export function fromMyCoinResourcesRaw(r: MyCoinResourcesRaw): MyCoinResources {
  const { nonce, additionalBalance } = r;
  return {
    nonce,
    additionalBalance: BigNumber(additionalBalance),
  };
}
```

Because of Account being generic, you may need to add your specific resources to `src/types/account.ts`...

```ts
// ...
import type {
  MyCoinResources,
  MyCoinResourcesRaw,
} from "../families/mycoin/types";

// export type Account = {
// ...
// // On some blockchain, an account can have resources (gained, delegated, ...)
  myCoinResources?: MyCoinResources;
// };

// export type AccountRaw = {
  myCoinResources?: MyCoinResourcesRawp;
// };
```

...and handle the associated serialization in `src/account/serialization.ts`:

```ts
// ...
import {
  toMyCoinResourcesRaw,
  fromMyCoinResourcesRaw,
} from "../families/mycoin/serialization";
// ...
export { toMyCoinResourcesRaw, fromMyCoinResourcesRaw };
// ...

// export function fromAccountRaw(rawAccount: AccountRaw): Account {
//   const {
//     ...
    myCoinResources,
// }
// ...
  if (myCoinResources) {
    res.myCoinResources = fromMyCoinResourcesRaw(myCoinResources);
  }
//   return res;
// }

// export function toAccountRaw({
// ...
  myCoinResources,
// }: Account): AccountRaw {
// ...
  if (myCoinResources) {
    res.myCoinResources = toMyCoinResourcesRaw(myCoinResources);
  }
//   return res;
// }
```

<!--  -->
{% include alert.html style="success" text="If your integration of <i>MyCoin</i> does not require coin-specific data in an account, you will not need to define <code>MyCoinResources</code>." %}
<!--  -->


#### Operation, Account and Transaction serialization

Since `Operation` will be stored as JSON, you will need to implement specific serializers for the `extra` field.

We also would like the `Operation` and `Account` to be displayed in CLI with their specifics, so you must provide formatters to display them.

`src/families/mycoin/account.ts`:

```ts
import { BigNumber } from "bignumber.js";
import type { Account, Operation, Unit } from "../../types";
import { getAccountUnit } from "../../account";
import { formatCurrencyUnit } from "../../currencies";

function formatAccountSpecifics(account: Account): string {
  const { myCoinResources } = account;
  if (!myCoinResources) {
    throw new Error("mycoin account expected")
  }
 
  const unit = getAccountUnit(account);
  const formatConfig = {
    disableRounding: true,
    alwaysShowSign: false,
    showCode: true,
  };

  let str = " ";

  str +=
    formatCurrencyUnit(unit, account.spendableBalance, formatConfig) +
    " spendable. ";

  if (myCoinResources.additionalBalance.gt(0)) {
    str +=
      formatCurrencyUnit(
        unit,
        myCoinResources.additionalBalance,
        formatConfig
      ) + " additional. ";
  }

  if (myCoinResources.nonce) {
    str += "\nonce : " + myCoinResources.nonce;
  }

  return str;
}

function formatOperationSpecifics(op: Operation, unit: ?Unit): string {
  const { additionalField } = op.extra;

  let str = " ";

  const formatConfig = {
    disableRounding: true,
    alwaysShowSign: false,
    showCode: true,
  };

  str +=
    additionalField && !additionalField.isNaN()
      ? `\n    additionalField: ${
          unit
            ? formatCurrencyUnit(unit, additionalField, formatConfig)
            : additionalField
        }`
      : "";

  return str;
}

export function fromOperationExtraRaw(extra: ?Object) {
  if (extra && extra.additionalField) {
    extra = {
      ...extra,
      additionalField: BigNumber(extra.additionalField),
    };
  }
  return extra;
}

export function toOperationExtraRaw(extra: ?Object) {
  if (extra && extra.additionalField) {
    extra = {
      ...extra,
      additionalField: extra.additionalField.toString(),
    };
  }
  return extra;
}

export default {
  formatAccountSpecifics,
  formatOperationSpecifics,
  fromOperationExtraRaw,
  toOperationExtraRaw,
};
```

<!--  -->
{% include alert.html style="success" text="<code>formatOperationSpecifics()</code> and <code>formatAccountSpecifics()</code> are used in the CLI to display account-specific fields and extras of the transaction history, useful for debugging." %}
<!--  -->

The same idea applies also to the `Transaction` type which needs to be serialized and formatted for CLI:

`src/families/mycoin/transaction.ts`:

```ts
import type { Transaction, TransactionRaw } from "./types";
import { BigNumber } from "bignumber.js";
import {
  fromTransactionCommonRaw,
  toTransactionCommonRaw,
} from "../../transaction/common";
import type { Account } from "../../types";
import { getAccountUnit } from "../../account";
import { formatCurrencyUnit } from "../../currencies";

export const formatTransaction = (
  { mode, amount, recipient, useAllAmount }: Transaction,
  account: Account
): string =>
  `
${mode.toUpperCase()} ${
    useAllAmount
      ? "MAX"
      : amount.isZero()
      ? ""
      : " " +
        formatCurrencyUnit(getAccountUnit(account), amount, {
          showCode: true,
          disableRounding: true,
        })
  }${recipient ? `\nTO ${recipient}` : ""}`;

export const fromTransactionRaw = (tr: TransactionRaw): Transaction => {
  const common = fromTransactionCommonRaw(tr);
  return {
    ...common,
    family: tr.family,
    mode: tr.mode,
    fees: tr.fees ? BigNumber(tr.fees) : null,
  };
};

export const toTransactionRaw = (t: Transaction): TransactionRaw => {
  const common = toTransactionCommonRaw(t);
  return {
    ...common,
    family: t.family,
    mode: t.mode,
    fees: t.fees?.toString() || null,
  };
};

export default { formatTransaction, fromTransactionRaw, toTransactionRaw };
```

### Wrap your API

Before this part, you will need an indexer/explorer to get a list of operations. You may also obtain from it, or from a SDK, the state of an account on the blockchain, such as balances, nonce (if your blockchain uses something similar), and any data relevant to show or fetch in Ledger Live.

For the example, we will assume that <i>MyCoin</i> provides a SDK that is able to do both getting the state and the account history.

The best way to implement your API in Live Common is to create a dedicated `api` subfolder, that exports all functions that require calls to 3rd-party and map their responses to Ledger Live types.

```plaintext
./src/families/mycoin
└── api
  ├── index.ts
  ├── sdk.ts
  └── sdk.types.ts
```
<!--  -->
{% include alert.html style="success" text="Try to separate as much as possible your different APIs (if you use multiple providers) and use typings to ensure you map correctly API responses to Ledger Live types" %}
<!--  -->

You will likely need to export thoses functions, but implemention is up-to-developer:

`src/families/mycoin/api/index.ts`:

```ts
export {
  getAccount,
  getOperations,
  getPreloadedData, // adjust with needs of preloaded data
  getFees,
  submit,
  disconnect, // if using persisting connection
} from "./sdk";
```

Basically, in the next sections, `getAccount` will be called to create an `Account` with balances and any additional resources, and `getOperations` will be called to fill the `operations[]` of this account, with the whole history of operations that can be requested incrementally. Then `getFees` before sending a transaction to let the user know of the network cost (estimated or effective), and `submit` to broadcast its transaction after signing.

See [Polkadot Coin Integration's api](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/families/polkadot/api) for good inspiration.

#### API Example

Here is an example of a <i>MyCoin</i> API implementation using a fictive SDK that uses something like WebSocket to fetch data.

<!--  -->
{% include alert.html style="success" text="We don't recommend using WebSocket as it could have drawbacks and is more difficult to scale up and put behind a reverse proxy. If possible, use HTTPS requests as much as possible." %}
<!--  -->

```ts
import MyCoinApi from "my-coin-sdk";
import type { MyCoinTransaction } from "my-coin-sdk";
import { BigNumber } from "bignumber.js";

import type { Operation, OperationType } from "../../../types";
import { getEnv } from "../../../env";
import { encodeOperationId } from "../../../operation";

type AsyncApiFunction = (api: typeof MyCoinApi) => Promise<any>;

const MYCOIN_API_ENDPOINT = () => getEnv("MYCOIN_API_ENDPOINT");

let api = null;

/**
 * Connects to MyCoin Api
 */
async function withApi(execute: AsyncApiFunction): Promise<any> {
  // If client is instanciated already, ensure it is connected & ready
  if (api) {
    try {
      await api.isReady;
    } catch (err) {
      api = null;
    }
  }

  if (!api) {
    api = new MyCoinApi(MYCOIN_API_ENDPOINT);
    api.connect();
    api.onClose(() => {
      api = null;
    });
    await api.isReady;
  }

  try {
    const res = await execute(api);

    return res;
  } catch {
    // Handle Error or Retry
    await disconnect();
  }
}

/**
 * Disconnects MyCoin Api
 */
export const disconnect = async () => {
  if (api) {
    const disconnecting = api;
    api = null;
    await disconnecting.close();
  }
};

/**
 * Get account balances and nonce
 */
export const getAccount = async (addr: string) =>
  withApi(async (api) => {
    const { balance, additionalBalance } = await api.getBalances(addr);
    const nonce = await api.getNonce(addr);
    const blockHeight = await api.getBlockHeight();

    return {
      blockHeight,
      balance: BigNumber(balance),
      additionalBalance: BigNumber(additionalBalance),
      nonce,
    };
  });

/**
 * Returns true if account is the signer
 */
function isSender(transaction: MyCoinTransaction, addr: string): boolean {
  return transaction.sender === addr;
}

/**
 * Map transaction to an Operation Type
 */
function getOperationType(
  transaction: MyCoinTransaction,
  addr: string
): OperationType {
  return isSender(transaction, addr) ? "OUT" : "IN";
}

/**
 * Map transaction to a correct Operation Value (affecting account balance)
 */
function getOperationValue(
  transaction: MyCoinTransaction,
  addr: string
): BigNumber {
  return isSender(transaction, addr)
    ? BigNumber(transaction.value).plus(transaction.fees)
    : BigNumber(transaction.value);
}

/**
 * Extract extra from transaction if any
 */
function getOperationExtra(transaction: MyCoinTransaction): Object {
  return {
    additionalField: transaction.additionalField,
  };
}

/**
 * Map the MyCoin history transaction to a Ledger Live Operation
 */
function transactionToOperation(
  accountId: string,
  addr: string,
  transaction: MyCoinTransaction
): Operation {
  const type = getOperationType(transaction, addr);

  return {
    id: encodeOperationId(accountId, transaction.hash, type),
    accountId,
    fee: BigNumber(transaction.fees || 0),
    value: getOperationValue(transaction, addr),
    type,
    hash: transaction.hash,
    blockHash: null,
    blockHeight: transaction.blockNumber,
    date: new Date(transaction.timestamp),
    extra: getOperationExtra(transaction),
    senders: [transaction.sender],
    recipients: transaction.recipient ? [transaction.recipient] : [],
    transactionSequenceNumber: isSender(transaction, addr)
      ? transaction.nonce
      : undefined,
    hasFailed: !transaction.success,
  };
}

/**
 * Fetch operation list
 */
export const getOperations = async (
  accountId: string,
  addr: string,
  startAt: number
): Promise<Operation[]> =>
  withApi(async (api) => {
    const rawTransactions = await api.getHistory(addr, startAt);

    return rawTransactions.map((transaction) =>
      transactionToOperation(accountId, addr, transaction)
    );
  });

/**
 * Obtain fees from blockchain
 */
export const getFees = async (unsigned: string): Promise<BigNumber> =>
  withApi(async (api: typeof MyCoinApi) => {
    const { fees } = await api.dryRun(unsigned);

    return BigNumber(fees);
  });

/**
 * Broadcast blob to blockchain
 */
export const submit = async (blob: string) =>
  withApi(async (api: typeof MyCoinApi) => {
    const { hash, fees } = await api.submit(blob);

    // Transaction hash is likely to be returned
    return { hash, fees: BigNumber(fees) };
  });
```

If you need to disconnect from your API after using it, update `src/api/index.ts` to add your api disconnect in the `disconnectAll` function, it will avoid tests and CLI to hang.

### JS Bridge

`bridge/js.ts` is the entry point of a coin integration. It must export two bridges:

- a CurrencyBridge
- an AccountBridge

#### Starting with a mock

TO BE WRITTEN

```ts
import { BigNumber } from "bignumber.js";
import {
  NotEnoughBalance,
  RecipientRequired,
  InvalidAddress,
  FeeTooHigh,
} from "@ledgerhq/errors";
import type { Transaction } from "../types";
import type { AccountBridge, CurrencyBridge } from "../../../types";
import {
  scanAccounts,
  signOperation,
  broadcast,
  sync,
  isInvalidRecipient,
} from "../../../bridge/mockHelpers";
import { getMainAccount } from "../../../account";
import { makeAccountBridgeReceive } from "../../../bridge/mockHelpers";

const receive = makeAccountBridgeReceive();

const createTransaction = (): Transaction => ({
  family: "mycoin",
  mode: "send",
  amount: BigNumber(0),
  recipient: "",
  useAllAmount: false,
  fees: null,
});

const updateTransaction = (t, patch) => ({ ...t, ...patch });

const prepareTransaction = async (a, t) => t;

const estimateMaxSpendable = ({ account, parentAccount, transaction }) => {
  const mainAccount = getMainAccount(account, parentAccount);
  const estimatedFees = transaction?.fees || BigNumber(5000);
  return Promise.resolve(
    BigNumber.max(0, mainAccount.balance.minus(estimatedFees))
  );
};

const getTransactionStatus = (account, t) => {
  const errors = {};
  const warnings = {};
  const useAllAmount = !!t.useAllAmount;

  const estimatedFees = BigNumber(5000);

  const totalSpent = useAllAmount
    ? account.balance
    : BigNumber(t.amount).plus(estimatedFees);

  const amount = useAllAmount
    ? account.balance.minus(estimatedFees)
    : BigNumber(t.amount);

  if (amount.gt(0) && estimatedFees.times(10).gt(amount)) {
    warnings.amount = new FeeTooHigh();
  }

  if (totalSpent.gt(account.balance)) {
    errors.amount = new NotEnoughBalance();
  }

  if (!t.recipient) {
    errors.recipient = new RecipientRequired();
  } else if (isInvalidRecipient(t.recipient)) {
    errors.recipient = new InvalidAddress();
  }

  return Promise.resolve({
    errors,
    warnings,
    estimatedFees,
    amount,
    totalSpent,
  });
};

const accountBridge: AccountBridge<Transaction> = {
  estimateMaxSpendable,
  createTransaction,
  updateTransaction,
  getTransactionStatus,
  prepareTransaction,
  sync,
  receive,
  signOperation,
  broadcast,
};

const currencyBridge: CurrencyBridge = {
  scanAccounts,
  preload: async () => {},
  hydrate: () => {},
};

export default { currencyBridge, accountBridge };
```

#### Split your code

You can now start to implement the JS bridge for <i>MyCoin</i>. It may need some changes back and forth between the types, your api wrapper, and the differente files.

The skeleton of `src/families/mycoin/bridge/js.ts` should look something like this:

```ts
import type { AccountBridge, CurrencyBridge } from "../../../types";
import type { Transaction } from "../types";
import { makeAccountBridgeReceive } from "../../../bridge/jsHelpers";

import { getPreloadStrategy, preload, hydrate } from "../preload";

import { sync, scanAccounts } from "../js-synchronisation";
import {
  createTransaction,
  updateTransaction,
  prepareTransaction,
} from "../js-transaction";
import getTransactionStatus from "../js-getTransactionStatus";
import estimateMaxSpendable from "../js-estimateMaxSpendable";
import signOperation from "../js-signOperation";
import broadcast from "../js-broadcast";

const receive = makeAccountBridgeReceive();

const currencyBridge: CurrencyBridge = {
  getPreloadStrategy,
  preload,
  hydrate,
  scanAccounts,
};

const accountBridge: AccountBridge<Transaction> = {
  estimateMaxSpendable,
  createTransaction,
  updateTransaction,
  getTransactionStatus,
  prepareTransaction,
  sync,
  receive,
  signOperation,
  broadcast,
};

export default { currencyBridge, accountBridge };
```

<!--  -->
{% include alert.html style="success" text="You could implement all the methods in a single file, but for better readability and maintainability, you should split your code into multiple files." %}
<!--  -->

### Account Bridge

AccountBridge offers a generic abstraction to synchronize accounts and perform transactions.

It is designed for the end user frontend interface and is agnostic of the way it runs, has multiple implementations and does not know how the data is even stored: in fact **it's just a set of stateless functions**.

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
![account bridge flow](../images/account-bridge-flow.png)

#### Receive

The `receive` method allows to derivate address of an account with a Nano device but also display it on the device if verify is passed in.
As you may see in `src/families/mycoin/bridge.ts`, Live Common provides a helper to implement it easily with `makeAccountBridgeReceive()`, and there is a very few reason to implement your own.

#### Synchronization

We usually group the `scanAccounts` and `sync` into the same file `js-synchronisation.ts` as they both use similar logic as a `getAccountShape` function passed to helpers.

`src/families/mycoin/js-synchronisation.ts`:

```ts
import type { Account } from "../../types";
import type { GetAccountShape } from "../../bridge/jsHelpers";
import { makeSync, makeScanAccounts, mergeOps } from "../../bridge/jsHelpers";

import { getAccount, getOperations } from "./api";

const getAccountShape: GetAccountShape = async (info) => {
  const { id, address, initialAccount } = info;
  const oldOperations = initialAccount?.operations || [];

  // Needed for incremental synchronisation
  const startAt = oldOperations.length
    ? (oldOperations[0].blockHeight || 0) + 1
    : 0;

  // get the current account balance state depending your api implementation
  const { blockHeight, balance, additionalBalance, nonce } = await getAccount(
    address
  );

  // Merge new operations with the previously synced ones
  const newOperations = await getOperations(id, address, startAt);
  const operations = mergeOps(oldOperations, newOperations);

  const shape = {
    id,
    balance,
    spendableBalance: balance,
    operationsCount: operations.length,
    blockHeight,
    myCoinResources: {
      nonce,
      additionalBalance,
    },
  };

  return { ...shape, operations };
};

const postSync = (initial: Account, parent: Account) => parent;

export const scanAccounts = makeScanAccounts(getAccountShape);

export const sync = makeSync(getAccountShape, postSync);
```

The `scanAccounts` function performs the derivation of addresses for a given `currency` and `deviceId`, and returns an Observable that will notify every `Account` that it discovered.

With the `makeScanAccounts` helper, you only have to pass a `getAccountShape` function to execute the generic scan that Ledger Live use with the correct derivation modes for <i>MyCoin</i>, and it will determine when to stop (generally as soon as an empty account was found).

The `sync` function performs one "Account synchronisation" which consists of refreshing all fields of a (previously created) Account from your api.

It is executed every 2 minutes if everything works as expected, but if it fails, a retry strategy will be executed with an increasing delay (to avoid burdening a failing API).

Under the hood of the `makeSync` helper, the returned value is an Observable of an updater function (Account=>Account), which is a pattern having some advantages:

- it avoids race conditions
- the updater is called in a reducer, and allows to produce an immutable state by applying the update to the latest account instance (with reconciliation on Ledger Live Desktop)
- it's an observable, so we can interrupt it when/if multiple updates occurs

In some cases, you might need to do a `postSync` patch to add some update logic after sync (<i>before the reconciliation that occurs on Ledger Live Desktop</i>). If this `postSync` function is complex, you should split this function in a `src/families/mycoin/js-postSyncPatch.js` file.

#### Reconciliation

Currently, Ledger Live Desktop executes this bridge in a separate thread. Thus, the "avoid race condition" aspect of sync might not be respected since the UI renderer thread does not share the same objects.
This may be improved in the future, but for updates to be reflected during sync, we implemented reconciliation in [src/reconciliation.js](https://github.com/Ledger-Coin-Integration-team/ledger-live-common/blob/master/src/reconciliation.ts), between the account that is in the renderer and the new account produced after sync.

Since we might have added some coin-specific data in `Account`, we must also reconciliate it:

`src/reconciliation`:

```ts
// import {
// ...
  fromMyCoinResourcesRaw,
// } from "./account";
// ...
// export function patchAccount(
//   account: Account,
//   updatedRaw: AccountRaw
// ): Account {
// ...
  if (
    updatedRaw.myCoinResources &&
    account.myCoinResources !== updatedRaw.myCoinResources
  ) {
    next.myCoinResources = fromMyCoinResourcesRaw(
      updatedRaw.myCoinResources
    );
    changed = true;
  }
//   if (!changed) return account; // nothing changed at all
//
//   return next;
// }
```

#### Transactions

`Transaction` objects are created from a default state (`createTransaction`), that will then be updated according to the flow and inputs of the user.

Everytime the transaction is updated through a patch (`updateTransaction`), its parameters will need to be validated to check if transaction can be signed and broadcasted (see [Validating Transactions](#validating-transactions)).

In some cases, this transaction will need to be prepared to correctly check status (`prepareTransaction`), like fetching the network fees, transforming some parameters, or setting default values, ...

`src/families/mycoin/js-transaction.ts`:

```ts
import { BigNumber } from "bignumber.js";
import type { Account } from "../../types";
import type { Transaction } from "./types";

import getEstimatedFees from "./js-getFeesForTransaction";

const sameFees = (a, b) => (!a || !b ? a === b : a.eq(b));

/**
 * Create an empty transaction
 *
 * @returns {Transaction}
 */
export const createTransaction = (): Transaction => ({
  family: "mycoin",
  mode: "send",
  amount: BigNumber(0),
  recipient: "",
  useAllAmount: false,
  fees: null,
});

/**
 * Apply patch to transaction
 *
 * @param {*} t
 * @param {*} patch
 */
export const updateTransaction = (
  t: Transaction,
  patch: $Shape<Transaction>
) => ({ ...t, ...patch });

/**
 * Prepare transaction before checking status
 *
 * @param {Account} a
 * @param {Transaction} t
 */
export const prepareTransaction = async (a: Account, t: Transaction) => {
  let fees = t.fees;

  fees = await getEstimatedFees({ a, t });

  if (!sameFees(t.fees, fees)) {
    return { ...t, fees };
  }

  return t;
};
```

#### Validating Transactions

We absolutely want to avoid users to sign transactions that do not meet the blockchain's requirements, and would be rejected - or worse - fail, risking them to loose funds.

Hence, we will validate every parameters that could lead to invalid transactions:

For instance we will check that:

- the recipient is not empty
- the recipient address is valid
- the recipient exists
- user have enough funds for the transaction
- user have enough funds to pay transaction fees
- the amount is strictly positive (avoiding zero sends)
- the minimum balance or existential deposit is respected if relevant
- etc

This validation is done everytime the user updates the transaction (any input changes) to give him immediate and contextual feedback. The status object returned by the `getTransactionStatus` follows this definition:

- `errors: { [string]: Error }`: potential error for each (user) field of the transaction
- `warnings: { [string]: Error }`: potential warning for each (user) field for a transaction
- `estimatedFees: BigNumber`: estimated total fees the tx is going to cost (in the mainAccount currency)
- `amount: BigNumber`: actual amount that the recipient will receive (in account currency)
- `totalSpent: BigNumber`: total amount that the sender will spend (in account currency)
- `recipientIsReadOnly?: boolean`: should the recipient be non editable

`errors` and `warnings` are key - value (error) objects that would have for each input (in the user perspective) the eventual error or notice that has been detected. To each key then it is expected that an input in Ledger Live Desktop and Mobile will exists to display the error.

`src/families/mycoin/js-getTransactionStatus.ts`:

```ts
import { BigNumber } from "bignumber.js";
import {
  NotEnoughBalance,
  RecipientRequired,
  InvalidAddress,
  FeeNotLoaded,
} from "@ledgerhq/errors";
import type { Account, TransactionStatus } from "../../types";
import type { Transaction } from "./types";

import { isValidAddress, specificCheck } from "./logic";
import { MyCoinSpecificError } from "./errors";

const getTransactionStatus = async (
  a: Account,
  t: Transaction
): Promise<TransactionStatus> => {
  const errors = {};
  const warnings = {};
  const useAllAmount = !!t.useAllAmount;

  if (!t.fees) {
    errors.fees = new FeeNotLoaded();
  }

  const estimatedFees = t.fees || BigNumber(0);

  const totalSpent = useAllAmount
    ? a.balance
    : BigNumber(t.amount).plus(estimatedFees);

  const amount = useAllAmount
    ? a.balance.minus(estimatedFees)
    : BigNumber(t.amount);

  if (totalSpent.gt(a.balance)) {
    errors.amount = new NotEnoughBalance();
  }

  // If MyCoin needs any specific requirement on amount for instance
  if (specificCheck(t.amount)) {
    errors.amount = new MyCoinSpecificError();
  }

  if (!t.recipient) {
    errors.recipient = new RecipientRequired();
  } else if (isValidAddress(t.recipient)) {
    errors.recipient = new InvalidAddress();
  }

  return Promise.resolve({
    errors,
    warnings,
    estimatedFees,
    amount,
    totalSpent,
  });
};

export default getTransactionStatus;
```

#### Dealing with Logic and Errors

As seen in the previous section, `getTransactionStatus` deals with errors in a Transaction, because of a wrong user input not meeting the coin logic.
Those are user-dependent errors handled in the UI for each input displayed, and are expected to happen from time to time - we are not throwing them.

But some errors can occur in a different context, and not be caused by user. Try as much as possible to handle all failing cases and throw coin-specific errors (if not generic error already exist), that you may define in an `errors.ts` file (for reusablity).

`src/families/mycoin/errors.ts`:

```ts
import { createCustomErrorClass } from "@ledgerhq/errors";

/**
 * MyCoin error thrown on a specifc check done on a transaction amount
 */
export const MyCoinSpecificError = createCustomErrorClass(
  "MyCoinSpecificError"
);
```

Add all exports to `src/errors.ts`:

```ts
// ...
export * from "./families/mycoin/errors";
```

Also, to avoid repeating code and facilitate usage of checks and constants, gather all your coin-specific logic functions in a single file (calculations, getters, boolean checks...). This will also ease maintenance, for instance when the blockchain's logic changes (constants or additional checks added).

`src/families/mycoin/logic.ts`:

```ts
import { BigNumber } from "bignumber.js";
import type { Account } from "../../types";

export const MAX_AMOUNT = 5000;

/**
 * Returns true if address is a valid md5
 *
 * @param {string} address
 */
export const isValidAddress = (address: string): boolean => {
  if (!address) return false;

  return !!address.match(/^[a-f0-9]{32}$/);
};

/**
 * Returns true if transaction amount is less than MAX AMOUNT and > 0
 *
 * @param {BigNumber} amount
 */
export const specificCheck = (amount: BigNumber): boolean => {
  return amount.gt(0) && amount.lte(MAX_AMOUNT);
};

/**
 * Returns nonce for an account
 *
 * @param {Account} a
 */
export const getNonce = (a: Account): number => {
  const lastPendingOp = a.pendingOperations[0];

  const nonce = Math.max(
    a.myCoinResources?.nonce || 0,
    lastPendingOp && typeof lastPendingOp.transactionSequenceNumber === "number"
      ? lastPendingOp.transactionSequenceNumber + 1
      : 0
  );

  return nonce;
};
```

#### Building and Signing transaction

The `Transaction` object is not exactly the transaction in the shape of the blockchain's protocol (which is generally serialized into a blob of bytes). So for convenience, you may implement a `buildTransaction` method to serialized it using <i>MyCoin</i> SDK, that could be reused for instance for estimating fees through the API.

`src/families/mycoin/js-buildTransaction.ts`:

```ts
import type { Transaction } from "./types";
import type { Account } from "../../types";

import { getNonce } from "./logic";

const getTransactionParams = (a: Account, t: Transaction) => {
  switch (t.mode) {
    case "send":
      return t.useAllAmount
        ? {
            method: "transferAll",
            args: {
              dest: t.recipient,
            },
          }
        : {
            method: "transfer",
            args: {
              dest: t.recipient,
              value: t.amount.toString(),
            },
          };
    default:
      throw new Error("Unknown mode in transaction");
  }
};

/**
 *
 * @param {Account} a
 * @param {Transaction} t
 */
export const buildTransaction = async (a: Account, t: Transaction) => {
  const address = a.freshAddress;
  const params = getTransactionParams(a, t);
  const nonce = getNonce(a);

  const unsigned = {
    address,
    nonce,
    params,
  };

  // Will likely be a call to MyCoin SDK
  return JSON.stringify(unsigned);
};
```

This `buildTransaction` function would return an unsigned transaction blob that would be signed with the <i>MyCoin</i> App on device:

`src/families/mycoin/js-signOperation.ts`:

```ts
import { BigNumber } from "bignumber.js";
import { Observable } from "rxjs";
import { FeeNotLoaded } from "@ledgerhq/errors";

import type { Transaction } from "./types";
import type { Account, Operation, SignOperationEvent } from "../../types";

import { open, close } from "../../hw";
import { encodeOperationId } from "../../operation";
import MyCoin from "./hw-app-mycoin/MyCoin";

import { buildTransaction } from "./js-buildTransaction";
import { getNonce } from "./logic";

const buildOptimisticOperation = (
  account: Account,
  transaction: Transaction,
  fee: BigNumber
): Operation => {
  const type = "OUT";

  const value = BigNumber(transaction.amount).plus(fee);

  const operation: $Exact<Operation> = {
    id: encodeOperationId(account.id, "", type),
    hash: "",
    type,
    value,
    fee,
    blockHash: null,
    blockHeight: null,
    senders: [account.freshAddress],
    recipients: [transaction.recipient].filter(Boolean),
    accountId: account.id,
    transactionSequenceNumber: getNonce(account),
    date: new Date(),
    extra: { additionalField: transaction.amount },
  };

  return operation;
};

/**
 * Adds signature to unsigned transaction. Will likely be a call to MyCoin SDK
 */
const signTx = (unsigned: string, signature: any) => {
  return `${unsigned}:${signature}`;
};

/**
 * Sign Transaction with Ledger hardware
 */
const signOperation = ({
  account,
  deviceId,
  transaction,
}: {
  account: Account,
  deviceId: *,
  transaction: Transaction,
}): Observable<SignOperationEvent> =>
  new Observable((o) => {
    async function main() {
      const transport = await open(deviceId);
      try {
        o.next({ type: "device-signature-requested" });

        if (!transaction.fees) {
          throw new FeeNotLoaded();
        }

        const unsigned = await buildTransaction(account, transaction);

        // Sign by device
        const myCoin = new MyCoin(transport);
        const r = await myCoin.signTransaction(
          account.freshAddressPath,
          unsigned
        );

        const signed = signTx(unsigned, r.signature);

        o.next({ type: "device-signature-granted" });

        const operation = buildOptimisticOperation(
          account,
          transaction,
          transaction.fees ?? BigNumber(0)
        );

        o.next({
          type: "signed",
          signedOperation: {
            operation,
            signature: signed,
            expirationDate: null,
          },
        });
      } finally {
        close(transport, deviceId);
      }
    }
    main().then(
      () => o.complete(),
      (e) => o.error(e)
    );
  });

export default signOperation;
```

The `signOperation` function returns an Observable that will notify its subscriber when the user grated the signature.
It must notify it with the signedOperation, with `signature` (generally contains the whole blob to be broadcasted) and `operation`.

This operation is an optimistic version of the `Operation` that would be displayed in the account history as a "Pending Operation" if the broadcast succeed. This pending operation is important to give feedback to the user, but may also be required for calculate the nonce (if relevant).

#### Broadcast

Once the transaction is signed, it must be broadcasted to MyCoin network. This is pretty easy if you correctly wrapped your API.

`src/families/mycoin/js-broadcast.ts`

```ts
import type { Operation, SignedOperation } from "../../types";
import { patchOperationWithHash } from "../../operation";

import { submit } from "./api";

/**
 * Broadcast the signed transaction
 * @param {signature: string, operation: string} signedOperation
 */
const broadcast = async ({
  signedOperation: { signature, operation },
}: {
  signedOperation: SignedOperation,
}): Promise<Operation> => {
  const { hash } = await submit(signature);

  return patchOperationWithHash(operation, hash);
};

export default broadcast;
```

This function must return the optimistic operation, patched with the `hash` generally provided by the network.
Once the operation is synced from <i>MyCoin</i> API, the AccountBridge will remove this optimistic operation from the `pendingOperations`.

<!--  -->
{% include alert.html style="success" text="When there are some pending operations, synchronization will occur every minutes." %}
<!--  -->

#### Estimate Max Spendable

The maximum spendable amount is the total balance in an account that is available to send in a transaction. This amount is specific to <i>MyCoin</i>, so you will need to provide this value depending on the transaction the user want to send.

See [https://support.ledger.com/hc/en-us/articles/360012960679-Maximum-spendable-amount](https://support.ledger.com/hc/en-us/articles/360012960679-Maximum-spendable-amount)

`src/families/mycoin/js-estimateMaxSpendable.ts`

```ts
import { BigNumber } from "bignumber.js";

import type { AccountLike, Account } from "../../types";
import { getMainAccount } from "../../account";

import type { Transaction } from "./types";

import { createTransaction } from "./js-transaction";
import getEstimatedFees from "./js-getFeesForTransaction";

/**
 * Returns the maximum possible amount for transaction
 *
 * @param {Object} param - the account, parentAccount and transaction
 */
const estimateMaxSpendable = async ({
  account,
  parentAccount,
  transaction,
}: {
  account: AccountLike,
  parentAccount?: Account,
  transaction?: Transaction,
}): Promise<BigNumber> => {
  const a = getMainAccount(account, parentAccount);
  const t = {
    ...createTransaction(),
    ...transaction,
    amount: a.spendableBalance,
  };

  const fees = await getEstimatedFees({ a, t });

  return a.spendableBalance.minus(fees);
};

export default estimateMaxSpendable;
```

Here, we only return the spendableBalance, but without the fees. Since Fee estimation can be used elsewhere (like in the `prepareTransaction`), you can put it's logic in a dedicated `js-getFeesForTransaction.ts` file. Here is an example for a fee fetched from network from an unsigned transaction (a bit like Polkadot), but you can also have specific calculation, with fee-per-byte value provided by the blockchain.

`src/families/mycoin/js-getFeesForTransaction.ts`:

```ts
import { BigNumber } from "bignumber.js";

import type { Account } from "../../types";
import type { Transaction } from "./types";

import { getFees } from "./api";
import { buildTransaction } from "./js-buildTransaction";

/**
 * Fetch the transaction fees for a transaction
 *
 * @param {Account} a
 * @param {Transaction} t
 */
const getEstimatedFees = async ({
  a,
  t,
}: {
  a: Account,
  t: Transaction,
}): Promise<BigNumber> => {
  const unsigned = await buildTransaction(a, t);
  const fees = await getFees(unsigned);

  return fees;
};

export default getEstimatedFees;
```

#### Testing send with CLI

Before being able to test a `send` operation with CLI you will need to bind arguments and infer a transaction from it. Since we defined a "mode" field in the transaction, this will be the only argument that will be necessary to test a send.

`src/families/mycoin/cli-transaction.ts`:

```ts
import flatMap from "lodash/flatMap";
import type { Transaction, AccountLike } from "../../types";

const options = [
  {
    name: "mode",
    type: String,
    desc: "mode of transaction: send",
  },
];

function inferTransactions(
  transactions: Array<{ account: AccountLike, transaction: Transaction }>,
  opts: Object
): Transaction[] {
  return flatMap(transactions, ({ transaction, account }) => {
    if (!transaction.family !== "mycoin") {
      throw new Error("transaction is not of type mycoin");
    }

    if (account.type === "Account" && !account.myCoinResources) {
      throw new Error("unactivated account");
    }

    return {
      ...transaction,
      family: "mycoin",
      mode: opts.mode || "send",
    };
  });
}

export default {
  options,
  inferTransactions,
};
```

Of course if <i>MyCoin</i> has more complex transactions, you can add many arguments to CLI. You can also define you own cli commands for any specific data you would like to fetch. See [Polkadot CLI commands](https://github.com/Ledger-Coin-Integration-team/ledger-live-common/blob/master/src/families/polkadot/cli-transaction.ts).

Now you can try a `getTransactionStatus` or a `send`:

```sh
ledger-live getTransactionStatus -c mycoin -i 0 --amount 0.002 --recipient 8b2d58d4a7638e9ce8a0423bff5a2de0

# TRANSACTION
# SEND  0.0002 MYC
# TO 8b2d58d4a7638e9ce8a0423bff5a2de0
# STATUS
#  amount: 0.0002 MYC
#  estimated fees: 0.00157511 MYC
#  total spent: 0.00177511 MYC

ledger-live send -c mycoin -i 0 --amount 0.002 --recipient 8b2d58d4a7638e9ce8a0423bff5a2de0

# {"type":"device-signature-requested"}
# {"type":"device-signature-granted"}
# {"id":"js:2:mycoin:0a93ac3773d54c77817e46e1007d66e3:-134ad522346bee108fa42a512788494e-OUT","hash":"134ad522346bee108fa42a512788494e","type":"OUT","blockHash":null,"blockHeight":null,"senders":["0a93ac3773d54c77817e46e1007d66e3"],"recipients":["8b2d58d4a7638e9ce8a0423bff5a2de0"],"accountId":"js:2:mycoin:0a93ac3773d54c77817e46e1007d66e3:","transactionSequenceNumber":0,"extra":{"additionalField":"20000"},"date":"2021-03-01T08:59:57.445Z","value":"177511","fee":"157511"}
```

---

### Currency Bridge

CurrencyBridge offers a generic abstraction (for all crypto currencies) to add accounts with a Ledger device.

It is responsible for scanning accounts for a crypto family, but also preloading any data needed for the integration to work.

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
![currency bridge flow](../images/currency-bridge-flow.png)

#### Scanning accounts

As we have seen [Synchronization](#synchronization), the `scanAccounts`, which is part of the CurrencyBridge, share common logic with the sync function, that's why we preferably put them in a `js-synchronisation.ts` file.

The `makeScanAccounts` helper will automatically execute the default address derivation logic, but for some reason if you need to have a completely new way to scan account, you could then implement your own strategy.

#### Preload currency data (optional)

Before creating or using a currency bridge (e.g. scanning accounts, or every 2 minutes for synchronization), Ledger Live will try to preload some currency data (e.g. tokens, delegators, etc) required for live-common feature to correctly work.

This preloaded data will be stored in a persisted cache for future use, for Ledger Live to still work if temporarily offline, and speed up startup, depending on `getPreloadStrategy` (`preloadMaxAge` determines the data expiration that will trigger a refresh).

This cache contains the JSON serialized response from `preload` which is then hydrated through `hydrate` (which needs deserialization), directly after preload, or after a boot.

Live-Common features will then be able to reuse those data anywhere (e.g. validating transactions) with `getCurrentMyCoinPreloadData`, or by subscribing to `getMyCoinPreloadDataUpdates` observable.

`src/families/mycoin/preload.ts`:
```ts
import { Observable, Subject } from "rxjs";
import { log } from "@ledgerhq/logs";

import type { MyCoinPreloadData } from "./types";
import { getPreloadedData } from "./api";

const PRELOAD_MAX_AGE = 30 * 60 * 1000; // 30 minutes

let currentPreloadedData: MyCoinPreloadData = {
  somePreloadedData: {},
};

function fromHydratePreloadData(data: any): MyCoinPreloadData {
  let foo = null;

  if (typeof data === "object" && data) {
    if (typeof data.somePreloadedData === "object" && data.somePreloadedData) {
      foo = data.somePreloadedData.foo || "bar";
    }
  }

  return {
    somePreloadedData: { foo },
  };
}

const updates = new Subject<MyCoinPreloadData>();

export function getCurrentMyCoinPreloadData(): MyCoinPreloadData {
  return currentPreloadedData;
}

export function setMyCoinPreloadData(data: MyCoinPreloadData) {
  if (data === currentPreloadedData) return;

  currentPreloadedData = data;

  updates.next(data);
}

export function getMyCoinPreloadDataUpdates(): Observable<MyCoinPreloadData> {
  return updates.asObservable();
}

export const getPreloadStrategy = () => ({
  preloadMaxAge: PRELOAD_MAX_AGE,
});

export const preload = async (): Promise<MyCoinPreloadData> => {
  log("mycoin/preload", "preloading mycoin data...");

  const somePreloadedData = await getPreloadedData();

  return { somePreloadedData };
};

export const hydrate = (data: any) => {
  const hydrated = fromHydratePreloadData(data);

  log("mycoin/preload", `hydrated foo with ${hydrated.somePreloadedData.foo}`);

  setMyCoinPreloadData(hydrated);
};
```

Read more on [Currency Bridge documentation](https://github.com/LedgerHQ/ledger-live-common/blob/master/docs/CurrencyBridge.md).

### Cache and performance

It is important to keep in mind that all currencies work independently and that Live Common provides a common framework to synchronize accounts with a polling strategy, and that network connectivity is not always stable and optimal.

Hence, the more cryptocurrencies Ledger Live is using, the more requests and calculations are executed, which can take time.

To avoid making the same requests several times, we recommend using a local cache in your implementation (e.g. fees estimations, some currency data to preload, etc in a `src/families/mycoin/cache.ts` file.

We have a [`src/cache.ts`](https://github.com/LedgerHQ/ledger-live-common/blob/master/src/cache.ts) helper for creating Least-Recently-Used caches anywhere if needed.

See for example the [Polkadot's cache implementation](https://github.com/LedgerHQ/ledger-live-common/blob/master/src/families/polkadot/cache.ts).


### Front-End helpers

Live Common is mainly dedicated to be used by Ledger Live front-ends (Desktop and Mobile), so it also contains utilities for react and displaying crypto-specific data.

#### Device transaction fields

When signing a transaction, the user is shown on his device all the parameters of this transaction through multiple screen, that he must check towards the value he entered, and compare with what Ledger Live is presenting.

The list of all displayed fields on device are provided by the `getDeviceTransactionConfig` function, which must return all transaction fields for a given transaction.

`src/families/mycoin/getDeviceTransactionConfig.ts`:
```ts
import type { AccountLike, Account, TransactionStatus } from "../../types";
import type { Transaction } from "./types";
import type { DeviceTransactionField } from "../../transaction";

function getDeviceTransactionConfig({
  transaction,
  status: { estimatedFees },
}: {
  account: AccountLike;
  parentAccount?: Account;
  transaction: Transaction;
  status: TransactionStatus;
}): Array<DeviceTransactionField> {
  const fields: Array<DeviceTransactionField> = [];

  if (transaction.useAllAmount) {
    fields.push({
      type: "text",
      label: "Method",
      value: "Transfer All",
    });
  } else {
    fields.push({
      type: "text",
      label: "Method",
      value: "Transfer",
    });
    fields.push({
      type: "amount",
      label: "Amount",
    });
  }

  if (!estimatedFees.isZero()) {
    fields.push({
      type: "fees",
      label: "Fees",
    });
  }

  return fields;
}

export default getDeviceTransactionConfig;
```
<!--  -->
{% include alert.html style="warning" text="Since a not-well-informed user could be tricked to sign transaction with wrong recipients, we never show the <code>destination</code> fields in Ledger Live applications, in order for users to get used to always verify it externally." %}
<!--  -->

### React hooks (optional / advanced)

If you are adding specific features to Ledger Live (like staking), you may need to access data through React hooks, that could provide common logic reusable for React components.

You are then free to add them in a `src/families/mycoin/react.ts` file.

See examples like sorting and filtering validators, subscribing to preloaded data observable, or waiting for a transaction to be reflected in account, in the [Polkadot React hooks](https://github.com/LedgerHQ/ledger-live-common/blob/master/src/families/polkadot/react.ts).

### Icon

Icons are usually maintained by Ledger's design team, so you must first check that <i>MyCoin</i> icon is not already added in live-common, in [src/data/icons/svg](https://github.com/LedgerHQ/ledger-live-common/tree/master/src/data/icons/svg). It contains cleaned-up versions of Cryptocurrency Icons from [cryptoicons.co](http://cryptoicons.co/), organized by ticker.

If you need to add your own, they must respect those requirements:
- Clean SVG with **only** `<path>` elements representing the crypto
- Size and viewport must be `24x24`
- Icon should be `18x18` and centered / padded
- Flat-styled, and must respect crypto color scheme (filled)
- No background or decorative shape added
- No `<g>` or `transform`, `style` attributes...

Name should be the coin's ticker (e.g. `MYC.svg`) and must not conflict with an existing coin or token.

When building live-common, a [script](https://github.com/LedgerHQ/ledger-live-common/blob/master/scripts/buildReactIcons.js) automatically converts them to React and React Native components.

## Testing

See [Testing](../tests)
