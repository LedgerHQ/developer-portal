---
title: Live Common Bridge Test Framework
subtitle:
tags: []
author:
layout: doc_ci
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

<!-- 2021-03-30 based on 1809613975 in Confluence -->

Live-common lib is used to test Ledger Live in a headless way:

-   Currency Bridge: Scan accounts

-   Account Bridge: Sync, Check transaction status


<!-- ------------- Image ------------- -->
<img width="50%" src="../images/bridge-test-framework.png">
<!-- --------------------------------- -->


This document describes how tests are implemented in order to test live-common bridge.
<ul>
<li>Transaction status</li>
<li>Account synchronisation</li>
</ul>


The approach is to test transactions and accounts synchronisation for the different currencies supported in Ledger Live. The transactions are not Broadcasted to the blockchain. We just verify that the bridge behave properly regarding to a tx inputs (recipient address, amount, fee…).

We record the synchronisation state to produce an expected output (Number of accounts, account balance, fresh address…).

For a specific currency, the seed used needs to be frozen, it’s mean that no new operation should be on the accounts used in the dataset as been recorded neither new accounts created.

By doing so we can ensure that the account synchronisation and the transaction status will always provide the same results.

<!--  -->
{% include alert.html style="warning" text="<b>Prerequisite</b> - Your computer is expected to have been set up accordingly. Please follow the following guides for this purpose:<br>
<div> <ul>
<li><a href='https://ledgerhq.atlassian.net/wiki/spaces/WALLETCO/pages/2610659678/Ledger+Live+Common#ledger-live-cli-setup' class='alert-link'>ledger-live CLI</a></li>
<li>Physical Nano device or an <a href='https://developers.ledger.com/docs/speculos/start-here/' class='alert-link'>emulated device with Speculos</a></li>
</ul></div> " %}
<!--  -->

## Currency / Account bridge

This section will explain how to generate and add test cases for Accounts and Currencies.

Dataset location: `ledger-live-common/src/families/{currency}`

### Sync accounts

Generate sync dataset (needs a Nano device connected with the corresponding app opened).

```sh
ledger-live generateTestScanAccounts -c <currency>    #Record the APDUs exchanged with the device
```

Then copy the result in:

`ledger-live-common/src/families/<currency>/datasets/<currency>.scanAccounts.1.js`


### Send (get transaction status)

Only verify that transaction status is OK, sign and broadcast are out of the scope of those tests.

Test cases: [TestRail](https://ledger.testrail.io/index.php?/suites/overview/9)

Generate account data:

```sh
ledger-live generateTestTransaction -c bitcoin -i 1 -s 'native_segwit' --recipient 13LcRWZyZnZu1xrABuAK9Ayftg4kfVs1AA --amount 0.002
```

Then copy the result in:

`ledger-live-common/src/families/<currency>/datasets/<currency>.js` or `ledger-live-common/src/families/<currency>/test-dataset.js`

```js
const dataset: CurrenciesData<Transaction> = {
  scanAccounts: [scanAccounts1],
  accounts: [
    {
      transactions: [
        {
          name: "on native segwit recipient",
          transaction: fromTransactionRaw({
            family: "bitcoin",
            recipient: "bc1qqmxqdrkxgx6swrvjl9l2e6szvvkg45all5u4fl",
            amount: "997",
            feePerByte: "1",
            networkInfo
          }),
          expectedStatus: {
            amount: BigNumber("997"),
            estimatedFees: BigNumber("250"),
            totalSpent: BigNumber("1247"),
            errors: {},
            warnings: {
              feeTooHigh: new FeeTooHigh()
            }
          }
        }
      ],
// Account that will be use to send funds from
      raw: {
        id:
          "libcore:1:bitcoin:xpub6BuPWhjLqutPV8SF4RMrrn8c3t7uBZbz4CBbThpbg9GYjqRMncra9mjgSfWSK7uMDz37hhzJ8wvkbDDQQJt6VgwLoszvmPiSBtLA1bPLLSn:",
        seedIdentifier:
          "041caa3a42db5bdd125b2530c47cfbe829539b5a20a5562ec839d241c67d1862f2980d26ebffee25e4f924410c3316b397f34bd572543e72c59a7569ef9032f498",
        name: "Bitcoin 1 (legacy)",
        derivationMode: "",
        index: 0,
        freshAddress: "17gPmBH8b6UkvSmxMfVjuLNAqzgAroiPSe",
        freshAddressPath: "44'/0'/0'/0/59",
        freshAddresses: [
          {
            address: "17gPmBH8b6UkvSmxMfVjuLNAqzgAroiPSe",
            derivationPath: "44'/0'/0'/0/59"
          }
        ],
        pendingOperations: [],
        operations: [],
        currencyId: "bitcoin",
        unitMagnitude: 8,
        balance: "2757",
        blockHeight: 0,
        lastSyncDate: "",
        xpub:
          "xpub6BuPWhjLqutPV8SF4RMrrn8c3t7uBZbz4CBbThpbg9GYjqRMncra9mjgSfWSK7uMDz37hhzJ8wvkbDDQQJt6VgwLoszvmPiSBtLA1bPLLSn"
      }
    }
  ]
};
```

For some currencies, more specific tests are specified in: `ledger-live-common/src/families/<currency>/test-specifics.js`


After adding or modify a test you must run:
```sh
cd cli && yarn build
cd .. && yarn build
```


**Record new outputs**:

The following command will produce snapshots used as expected results for the tests.
```sh
yarn test -u
```

**Run tests**:

```sh
yarn test -t <currency>   #specific currency
yarn test                 #all
```
