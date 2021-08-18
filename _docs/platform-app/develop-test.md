---
title: Develop and Test
subtitle:
tags: []
layout: doc_pa
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

In order to develop an application compatible with Ledger Live Platform, we provide you with a set of particular APIs (Ledger Live API) to integrate features and interact with Ledger Live. This set of APIs will evolve over time. You basically develop a web version of your application, which is then integrated in an iframe inside the platform so all the Ledger Live users can discover it.

## Develop your Platform App

To develop the web version of your application, you need to use the Ledger Live Platform SDK. According to the services and features you want to provide, you may have to use some specific APIs in order to interact with Ledger Live. An example would be account registration, or signing transactions.

(TBD) API Doc and code samples
(TBD) Demo repo

## Test your Platform App in Ledger Live

Make sure you have unlocked the Ledger Live [Developer mode](../developer-mode). You can find the procedure above.
In the Ledger Live developer tab, you will need to use the options “Enable Platform dev tools” to open the developer tools window, as well as “Add a local app”, to be able to locally load your manifest file and make your app appear in the “Discover” section.

You are now able to locally and autonomously test your application integration inside Ledger Live.
