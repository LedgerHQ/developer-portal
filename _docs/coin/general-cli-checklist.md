---
title: General CLI Checklist - User tests
subtitle:
tags: []
author:
layout: doc_ci
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## Checklist

- Create a new account
- Retrive the receive address of the new account
- Get the balance of the account (before and after sending funds to it)
- Handle all user-level errors
- Synchronize account
- Retrieve operations
- Performance test. E.g., Synch account holding 1000 operations in less than 30s
- Display the details of an operation, RX TX addresses, Hash, Date and Time, Fees.

---

## How-to test

[Sync](../bridge-test/#sync-accounts)


[Send](../bridge-test/#send-get-transaction-status)

