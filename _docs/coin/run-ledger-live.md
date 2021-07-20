---
title: Getting your Ledger Live running
subtitle:
tags: []
author:
layout: doc_ci
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## Getting started

To start, fork and clone git@github.com:LedgerHQ/ledger-live-common.git
```bash
cd ledger-live-common
yarn install
yalc publish
cd cli
yalc add @ledgerhq/live-common
yarn install
```



> CLI ready to be used based on local live-common

***


## test-dataset

This file allows us to simulate some transactions of our implementation.

First, create a `test-dataset.js` file and fill it with this empty template :

```js
import type { DatasetTest } from "../../types";
import type { Transaction } from "./types";

export default dataset: DatasetTest<Transaction> = {
  implementations: ["js"],
  currencies: {
    mycoin: {
    }
  }
}
```

Then connect your nano with a seed that you want to freeze (that means you don't want to do anymore transaction with that seed, or you will need to regenerate the snapshot everytime) and execute in the CLI the command :
```sh
`ledger-live generateTestScanAccounts -c mycoin`
```

The expected output is:

```js
// @flow

import type { CurrenciesData } from "../../../types";
import type { Transaction } from "../types";

const dataset: CurrenciesData<Transaction> = {
  scanAccounts: [
    {
      name: "mycoin seed 1",
      apdus: `
      => 100112344221c00002200000000000000000000000
      <= 213321ac21234122100000000000000000
      => 100112344221c00002200000800000008000000080
      <= 213321ac21234122100000000000000000
      => 100112344221c00002210000800000008000000080
      <= 213321ac21234122100000000000000000
      => 100112344221c00002220000800000008000000080
      <= 213321ac21234122100000000000000000
      => 100112344221c00002230000800000008000000080
      `,
    },
  ],
};

export default dataset;
```

Just keep the part with the scanAccounts and put it the `mycoin` part :

```js
// @flow

import type { DatasetTest } from "../../types";
import type { Transaction } from "./types";

const dataset: DatasetTest<Transaction> = {
  implementations: ["js"],
  currencies: {
    mycoin: {
      scanAccounts: [
        {
          name: "mycoin seed 1",
          apdus: `
            => 100112344221c00002200000000000000000000000
            <= 213321ac21234122100000000000000000
            => 100112344221c00002200000800000008000000080
            <= 213321ac21234122100000000000000000
            => 100112344221c00002210000800000008000000080
            <= 213321ac21234122100000000000000000
            => 100112344221c00002220000800000008000000080
            <= 213321ac21234122100000000000000000
            => 100112344221c00002230000800000008000000080
            `,
        },
      ],
    },
  },
};

export default dataset;
```

Then, get info on the accounts that you want to freeze, they will be used as references for our tests.
It should look something like this:

```js
// @flow

import type { DatasetTest } from "../../types";
import type { Transaction } from "./types";

const dataset: DatasetTest<Transaction> = {
  implementations: ["js"],
  currencies: {
    mycoin: {
      scanAccounts: [
        {
          name: "mycoin seed 1",
          apdus: `
            => 100112344221c00002200000000000000000000000
            <= 213321ac21234122100000000000000000
            => 100112344221c00002200000800000008000000080
            <= 213321ac21234122100000000000000000
            => 100112344221c00002210000800000008000000080
            <= 213321ac21234122100000000000000000
            => 100112344221c00002220000800000008000000080
            <= 213321ac21234122100000000000000000
            => 100112344221c00002230000800000008000000080
            `,
        },
      ],
      accounts: [
        {
          raw: {
            id: `js:2:mycoin:ADDR:`,
            seedIdentifier: ADDR,
            name: "MyCoin 1",
            derivationMode: "",
            index: 0,
            freshAddress: ADDR,
            freshAddressPath: "44'/354'/0'/0/0'",
            freshAddresses: [],
            blockHeight: 0,
            operations: [],
            pendingOperations: [],
            currencyId: "mycoin",
            unitMagnitude: 10,
            lastSyncDate: "",
            balance: "2111000",
          },
          transactions: [
            // HERE WE WILL INSERT OUR test
          ],
        },
      ],
    },
  },
};

export default dataset;
```

## How does a test work ?

The test-dataset simulates an object `Transaction` that we have as input, and a `TransactionStatus` as an output that we compare with an expected status.

There's some generic tests that are already made in `src/__tests__/test-helpers/bridge.js` that are mandatory to pass.

To implement your own test in `test-dataset.js`, add an Object typed like this in the array of `transactions`:

```js
// @flow
import Transaction from "./types.js"

type TestTransaction =
    {
        name: string,
        transaction: Transaction,
        expectedStatus: {
            amount: BigNumber,
            errors: {},
            warnings: {}
        }
    }
```

This `TestTransaction` uses as mainAccount the account that we have set before and then execute the command `getTransactionStatus` by using the `transaction` object as input.

## What are the focus when testing ?

We tried to cover as many cases as possible that are in `getTransactionStatus`.

You can also check `test-specifics.js` if you want to mock some specific part that is not covered by transactionStatus.

Transaction broadcast is an exception, it is tested differently, by a tool that we call "the bot". See below.

--------------

Requirement :

- Docker
- [github.com/LedgerHQ/coin-apps](https://github.com/LedgerHQ/coin-apps) or an elf of the Nano app for LNS (create a empty folder with like : `<device>/<firmware version>/<appName>` example `nanos/1.6.1/mycoin`. The build of your Nano app must have the following format: `app_VERSION.elf`, for example `app_1.2.3.elf`)
- Some currencies of the coin

## What is this testing ?

We are testing the broadcast part and sync part.

## How it works

```sh
ledger-live cleanSpeculos && SEED="generate a seed for testing" COINAPPS="/path/to/coin/apps/folder" ledger-live bot -c mycoin
```

- Generate a SEED, [iancoleman.io/bip39/](https://iancoleman.io/bip39/). Use this seed for testing purpose only, then use the command before to have an adresse and send some currencies into it

- The bot will execute each scenario if it met the requirement, then it will wait until the sync find the broadcasted transaction

- You also need to specify how the bot will react when he encounter certain screen, create `speculos-deviceActions.js`

## How to define a test

`speculos-deviceActions.js`

It is required to know every screen that your nano app contains, it will use the `title` of the screen then optionally check if the `expectedValue` of that screen is what it expects, then eventually execute the `button` action.

```js
title : name of the screen title
button: "Rr" for the bot to push the Right button of the nano || "Ll" same for left || "LRlr" same but for both
expectedValue: string of what we want to compare
```

You can use the following example to help you start to write how the bot will react :

```js
// @flow

import type { DeviceAction } from "../../bot/types";
import type { Transaction } from "./types";
import { formatCurrencyUnit } from "../../currencies";
import { deviceActionFlow } from "../../bot/specs";

const expectedAmount = ({ account, status }) =>
  formatCurrencyUnit(account.unit, status.amount, {
    disableRounding: true,
  }) + " MCN";

const acceptTransaction: DeviceAction<Transaction, *> = deviceActionFlow({
  steps: [
    {
      title: "Starting Balance",
      button: "Rr",
      expectedValue: expectedAmount,
    },
    {
      title: "Send",
      button: "Rr",
      expectedValue: expectedAmount,
    },
    {
      title: "Fee",
      button: "Rr",
      expectedValue: ({ account, status }) =>
        formatCurrencyUnit(account.unit, status.estimatedFees, {
          disableRounding: true,
        }) + " XLM",
    },
    {
      title: "Destination",
      button: "Rr",
      expectedValue: ({ transaction }) => transaction.recipient,
    },
    {
      title: "Accept",
      button: "LRlr",
    },
  ],
});

export default { acceptTransaction };
```

`specs.js`

You can check the following example to help you write your specs.

The bot will execute all the `mutations` if it doesn't encounter an invariant.

Then it will execute all the `updates` of the `Transaction` object.

The bot will try to sign the transaction using instructions that you provided in `speculos-deviceActions.js`

Eventually it will broadcast the transaction in the blockchain and wait for the `sync` to find the operation and its optimisic version.

```js
// @flow
import expect from "expect";
import invariant from "invariant";
import type { AppSpec } from "../../bot/types";
import type { Transaction } from "./types";
import type { Account } from "../../types";
import { pickSiblings } from "../../bot/specs";
import { isAccountEmpty } from "../../account";

// Ensure that, when the recipient corresponds to an empty account,
// the amount to send is greater or equal to the required minimum
// balance for such a recipient
const checkSendableToEmptyAccount = (amount, recipient) => {
  if (isAccountEmpty(recipient) && amount.lte(minBalanceNewAccount)) {
    invariant(
      amount.gt(minBalanceNewAccount),
      "not enough funds to send to new account"
    );
  }
};

const mycoin: AppSpec<Transaction> = {
  name: "mycoin",
  currency,
  appQuery: {
    model: "nanoS",
    appName: "mycoin",
  },
  mutations: [
    {
      name: "move ~50%",
      maxRun: 2,
      transaction: ({ account, siblings, bridge, maxSpendable }) => {
        const sibling = pickSiblings(siblings, 4);
        const recipient = sibling.freshAddress;

        let transaction = bridge.createTransaction(account);

        let amount = spendableBalance
          .div(1.9 + 0.2 * Math.random())
          .integerValue();

        checkSendableToEmptyAccount(amount, sibling);

        const updates = [{ amount }, { recipient }];
        return {
          transaction,
          updates,
        };
      },
      test: ({ account, accountBeforeTransaction, operation }) => {
        const rewards =
          accountBeforeTransaction.algorandResources?.rewards || 0;

        expect(account.balance.plus(rewards).toString()).toBe(
          accountBeforeTransaction.balance.minus(operation.value).toString()
        );
      },
    },
  ],
};

export default { mycoin };
```


[//]: > ** **Internal Note ** **
[//]: >
[//]: > Still useful? <https://github.com/LedgerHQ/ledger-live-common/tree/master/cli>

