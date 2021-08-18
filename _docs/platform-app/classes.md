---
title: Default classes
subtitle:
tags: []
layout: doc_pa
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}


## Constructors

### constructor

• **new default**(`transport`, `logger?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transport` | [`Transport`](../interfaces/Transport.md) |
| `logger` | `default` |

#### Defined in

[LedgerLivePlatformSDK/index.ts:46](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L46)

## Properties

### logger

• `Private` **logger**: `default`

#### Defined in

[LedgerLivePlatformSDK/index.ts:42](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L42)

___

### serverAndClient

• `Private` `Optional` **serverAndClient**: `JSONRPCServerAndClient`<`void`, `void`\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:44](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L44)

___

### transport

• `Private` **transport**: [`Transport`](../interfaces/Transport.md)

#### Defined in

[LedgerLivePlatformSDK/index.ts:40](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L40)

## Methods

### \_request

▸ `Private` **_request**<`T`\>(`method`, `params?`): `Promise`<`T`\>

Wrapper to api request for logging

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `JSONRPCParams` |

#### Returns

`Promise`<`T`\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:54](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L54)

___

### bridgeApp

▸ **bridgeApp**<`Result`\>(`_appName`, `_handler`): `Promise`<`Result`\>

Open a bridge to an application to exchange APDUs with a device application

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_appName` | `string` |
| `_handler` | <Result\>(`deviceBridge`: `default`) => `Promise`<`Result`\> |

#### Returns

`Promise`<`Result`\>

The result of the handler function

#### Defined in

[LedgerLivePlatformSDK/index.ts:81](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L81)

___

### bridgeDashboard

▸ **bridgeDashboard**<`Result`\>(`_handler`): `Promise`<`Result`\>

Open a bridge to a the device dashboard to exchange APDUs

#### Type parameters

| Name |
| :------ |
| `Result` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_handler` | <Result\>(`deviceBridge`: `default`) => `Promise`<`Result`\> |

#### Returns

`Promise`<`Result`\>

The result of the handler function

#### Defined in

[LedgerLivePlatformSDK/index.ts:94](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L94)

___

### broadcastSignedTransaction

▸ **broadcastSignedTransaction**(`accountId`, `signedTransaction`): `Promise`<`string`\>

Broadcast a signed transaction through Ledger Live, providing an optimistic Operation given by signTransaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | LL id of the account |
| `signedTransaction` | [`SignedTransaction`](../modules#signedtransaction) | a signed transaction given by LL when signing |

#### Returns

`Promise`<`string`\>

- hash of the transaction

#### Defined in

[LedgerLivePlatformSDK/index.ts:107](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L107)

___

### completeExchange

▸ **completeExchange**(`_exchangePayload`, `_payloadSignature`, `_txFeesLevel`): `Promise`<`void`\>

Complete an exchange process by passing by the exchange content and its signature.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_exchangePayload` | [`ExchangePayload`](../modules#exchangepayload) |
| `_payloadSignature` | [`EcdsaSignature`](../modules#ecdsasignature) |
| `_txFeesLevel` | [`FeesLevel`](../fees-level) |

#### Returns

`Promise`<`void`\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:123](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L123)

___

### connect

▸ **connect**(): `void`

Connect the SDK to the Ledger Live instance

#### Returns

`void`

#### Defined in

[LedgerLivePlatformSDK/index.ts:134](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L134)

___

### disconnect

▸ **disconnect**(): `void`

Disconnect the SDK

#### Returns

`void`

#### Defined in

[LedgerLivePlatformSDK/index.ts:150](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L150)

___

### estimateTransactionFees

▸ **estimateTransactionFees**(`_accountId`, `_transaction`): `Promise`<[`EstimatedFees`](../modules#estimatedfees)\>

Estimate fees required to successfully broadcast a transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |
| `_transaction` | [`Transaction`](../modules#transaction) |

#### Returns

`Promise`<[`EstimatedFees`](../modules#estimatedfees)\>

- Estimated fees for 3 level of confirmation speed

#### Defined in

[LedgerLivePlatformSDK/index.ts:163](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L163)

___

### getDeviceInfo

▸ **getDeviceInfo**(): `Promise`<[`DeviceDetails`](../modules#devicedetails)\>

Get information about a currently connected device (firmware version...)

#### Returns

`Promise`<[`DeviceDetails`](../modules#devicedetails)\>

Informations about a currently connected device

#### Defined in

[LedgerLivePlatformSDK/index.ts:175](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L175)

___

### initExchange

▸ **initExchange**(`_exchangeType`, `_partnerName`): `Promise`<`string`\>

Start the exchange process by generating a nonce on Ledger device

#### Parameters

| Name | Type |
| :------ | :------ |
| `_exchangeType` | [`ExchangeType`](../exchange-type) |
| `_partnerName` | `string` |

#### Returns

`Promise`<`string`\>

The nonce of the exchange

#### Defined in

[LedgerLivePlatformSDK/index.ts:186](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L186)

___

### listAccounts

▸ **listAccounts**(): `Promise`<[`Account`](../modules#account)[]\>

List accounts added by user on Ledger Live

#### Returns

`Promise`<[`Account`](../modules#account)[]\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:198](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L198)

___

### listApps

▸ **listApps**(): `Promise`<[`ApplicationDetails`](../modules#applicationdetails)[]\>

List applications opened on a currently connected device

#### Returns

`Promise`<[`ApplicationDetails`](../modules#applicationdetails)[]\>

The list of applications

#### Defined in

[LedgerLivePlatformSDK/index.ts:209](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L209)

___

### listCurrencies

▸ **listCurrencies**(`params?`): `Promise`<[`Currency`](../modules#currency)[]\>

List crypto-currencies supported by Ledger Live, providing filters by name or ticker

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `ListCurrenciesParams` | filters for currencies |

#### Returns

`Promise`<[`Currency`](../modules#currency)[]\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:219](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L219)

___

### receive

▸ **receive**(`accountId`): `Promise`<`string`\>

Let user verify it's account address on his device through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | LL id of the account |

#### Returns

`Promise`<`string`\>

- the verified address

#### Defined in

[LedgerLivePlatformSDK/index.ts:229](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L229)

___

### requestAccount

▸ **requestAccount**(`params`): `Promise`<[`Account`](../modules#account)\>

Let user choose an account in a Ledger Live, providing filters for choosing currency or allowing add account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `RequestAccountParams` | parameters for the request modal |

#### Returns

`Promise`<[`Account`](../modules#account)\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:239](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L239)

___

### signTransaction

▸ **signTransaction**(`accountId`, `transaction`, `params?`): `Promise`<[`SignedTransaction`](../modules#signedtransaction)\>

Let user sign a transaction through Ledger Live

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `string` | LL id of the account |
| `transaction` | [`Transaction`](../modules#transaction) | the transaction in the currency family-specific format |
| `params?` | `SignTransactionParams` | parameters for the sign modal |

#### Returns

`Promise`<[`SignedTransaction`](../modules#signedtransaction)\>

#### Defined in

[LedgerLivePlatformSDK/index.ts:256](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L256)

___

### synchronizeAccount

▸ **synchronizeAccount**(`_accountId`): `Promise`<[`Account`](../modules#account)\>

Synchronize an account with its network and return an updated view of the account

#### Parameters

| Name | Type |
| :------ | :------ |
| `_accountId` | `string` |

#### Returns

`Promise`<[`Account`](../modules#account)\>

An updated view of the account

#### Defined in

[LedgerLivePlatformSDK/index.ts:279](https://github.com/LedgerHQ/ledger-live-platform-sdk/blob/248c4d7/src/LedgerLivePlatformSDK/index.ts#L279)
