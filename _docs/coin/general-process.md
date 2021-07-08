---
title: General Process
subtitle: This article describes the general process and way of working Ledger will follow while interacting with the teams wishing to add their currency on Ledger Live.
tags: []
author:
toc: true
toc_sticky: true
layout: doc_ci
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## General Ledger Live Overview

If you already have a public Nano application and are looking for a way to get your blockchain supported on Ledger Live, then congratulations, you are in the right place.
To confirm if your Nano application is already supported, please check if your currency is visible on [this page](https://www.ledger.com/supported-crypto-assets/).

The Ledger Live application acts as a user-friendly platform for managing the digital assets as well as the application installed on the Ledger device.

Having your blockchain supported on Ledger Live will allow the community of users to easily interact with your protocol.

Ledger Live offers a standardized UI combined with a high quality of service. It also offers several features that are not available through other wallets.

These features include:

- Sending & receiving cryptocurrency
- Displaying account balances and a complete list of operations
- Installing and managing applications on your Ledger device
- Staking cryptocurrency (where applicable) to earn rewards
- Buying and swapping cryptocurrency (when applicable)

The Ledger Live application is available for Windows, Mac and Linux in its desktop version and on Android & iOS for mobile.

To be officially released by Ledger, your protocol must be included on all five platforms Ledger Live.

## Open source, but not Open bar

<!-- ------------- Image ------------- -->
<img align="left" width="132" src="../images/open_bar.png">
<!-- --------------------------------- -->


The Ledger Live code is Open source under MIT license. As such, you are free to copy/fork and modify it at will.

In some rare cases, you may want to <i>go it alone</i>, and do your own **Solo Integration**, where there is virtually no interaction with Ledger, nor code review, nor supported communication by Ledger to your blockchain community. You are free to use this documentation in that way.

In most cases however, you will want to have your blockchain officially supported in Ledger Live for your community, with an updated release of Ledger Live Desktop and Mobile. In this case it is a **Participant Integration**, because this involves various Ledger teams: Security, Product, Engineering and QA,  we will have discussions with you to enter into an Agreement Framework in order to clarify the roles and responsibilities between us.

## Agreeing on a Framework
<!-- ------------- Image ------------- -->
<img align="right" width="156"  src="../images/agreement.png" >
<!-- --------------------------------- -->
Assuming you are on course for a **Participant Integration**, here is how we suggest working together.

To set up a Launch meeting please make a request to Fabrice Dautriat (@Fabrice-ledger), on the Ledger Dev Slack. If you're not sign in yet, please make a request using [this form](https://developers.ledger.com/contact/).

The aim of the Launch meeting is to present and discuss together your project objective, and a high-level roadmap.

After the Launch meeting, we will assess the feasibility and the maturity of your coin integration project, and we will suggest an Agreement Framework, i.e. loose terms under which we agree to work. This also includes:

- Resources
- Support and communication channels
- Contact points for Technical and Documentation issues

<!--  -->
{% include alert.html style="success" text="Roadmaps and terms can be changed by any party along the way, of course, as long as these changes are talked about and agreed together." %}
<!--  -->



## Note about Code Reviews

#### For Solo Integrations

Ledger will still review pull requests, but on a best effort basis only. Please understand we can't allocate resources to carry out reviews which we were not informed of previously.

#### For Participant Integrations

Ledger will review PR according to the agreed roadmap as closely as possible.

***
## Ledger Live Development Phases

We have identified several phases, each giving rise to a deliverable.

The features supported by a blockchain protocol can be split between Generic and Specific ones.

Blockchain protocols mainly offer at least, Receive/Synchronise/Send functions. (Synchronising is the ability to return the balance of an account, including, but not necessarily, the list of operations). That is why these generic **(GEN)** features are a considered as one of the phases.

Many Blockchain protocols also offer staking functions. And these do not have the same mechanism from one protocol to another. That is why they are specific **(SPE)** features.

**<i>Please note that to be supported on Ledger Live, you must at least offer generic features.</i>**

In both cases, background work, or preliminary **Technical Assessment**, must be done. It ensures the blockchain knowledge has been acquired and agreed on, since we, at Ledger, will also have done this prior background work to validate the quality of your work when you will eventually submit it for review and release into our products.

When adding your blockchain support on Ledger Live, you can consider a CLI (command line interface) integration only, or a full CLI + GUI (graphical user interface) integration.

In any case, the CLI integration phase is mandatory and will allow you to verify the main features are properly working before having to wonder about actual user interfaces.

The **D** Phase (Specific GUI) relies on User flow diagrams, which must have been submitted at the end of the Technical Assessment phase.

This table shows which GEN/SPE components are involved is which phase.

| Phase           | <center>General (GEN) | <center>Specific (SPE) |
| --------------- | -------------- | ---- |
| A - Technical Assessment | <center><span class="uk-margin-small-right" uk-icon="check"></span>     |  <center><span class="uk-margin-small-right" uk-icon="check"></span>   |
| B - General **CLI** & **GUI** |         <center><span class="uk-margin-small-right" uk-icon="check"></span>        |     |
| C - Specific **CLI**  |                |   <center><span class="uk-margin-small-right" uk-icon="check"></span>   |
| D - Specific **GUI**  |                |   <center><span class="uk-margin-small-right" uk-icon="check"></span>   |


The table below shows what the inputs and outputs are for each phase, the work involved, as well as the main parts of this documentation are involved.

| Delivery<br>Phase  	|   Input<br>of the Phase	|   Work Package	|   Output<br>of the Phase	|   Main Chapters<br>involved	|
|---	|---	|---	|---	|---	|
|  <center>A 	|  <center>n/a 	|   Technical assessment	|   **Acceptance Plan**:<br>Indexer Solution<br>SPE Choices<br>SPE Use-Case Tests	|  <center>Prerequisites 	|
|  <center>B	|     **Acceptance Plan**:<br>Technical assessment   	|   GEN Features    	|   PR CLI & GUI    	|    <center>Coding & Testing   	|
|  <center>C 	| **Acceptance Plan**:<br>SPE Choices   	   	| SPE Features      	|  PR CLI      	|    <center>Coding & Testing   	|
|  <center>D 	| **Acceptance Plan**:<br>SPE Choices<br>SPE Use-Case Tests   	   	|  User journey (UI)     	|   PR  GUI    	|    <center>Coding & Testing   	|

Note PR: Pull request

***

### A - Technical Assessment

The prerequisites phase contains all the prior analysis of the blockchain and the choices to be made.

Importantly, it also contains research and choices concerning the Indexer/Explorer

The **output of this phase** is a presentation to Ledger of those technical choices

***
### B - CLI and GUI integration - General (GEN) features

**General features are Receive, Synch, Send**

1 - **Analysis**
\- Getting the JS app and the Nano App work together (APDU)
\- Recovering the Receive address
\- Piecing together a basic Synch  (see indexer)

2 - **Implementation**
\- Get a list of nominal errors returned: OK / No funds / etc
\- Work in the Families Folder in  Live Common.
\- Getting Receive, Synch, Send to work.
\- Verification of LLD and LLM UI flows

3 - **Code Review and functional test**
\- Code Delivery for Review by Ledger

***
### C - CLI integration - Specific (SPE) features

**Staking operations, Reward related actions**

1 - **Analysis**
\- Understanding staking operations is a basic first step
\- interpreting them. Considering the appropriate choices
\- Detailing the User Flows defined at Technical Assessment

2 - **Implementation**
\- Work on Specific Coin Folder in Live Common
\- Get Specific functions to work

3 - **Code Review**
\- Code Delivery for Review by Ledger

***
### D - GUI integration - Specific (SPE) features

1 - **Analysis**
\- Detailing the diagrams of User Flows defined at Technical Assessment

2 - **Implementation**
\- Work on Graphics designs and modal flows
\- Get Specific flows to work

3 - **Code Review**
\- Code Delivery for Review by Ledger

