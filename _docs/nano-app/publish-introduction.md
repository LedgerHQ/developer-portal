---
title: Introduction
subtitle:
tags: []
toc: true
toc_sticky: true
author:
layout: doc_na
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}


## Global architecture

Let’s see the typical end-to-end architecture of a BOLOS application, in the case of an app for a cryptocurrency:

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/app_architecture.png" class="align-center" alt="End-to-end architecture of a BOLOS application" /><figcaption aria-hidden="true">End-to-end architecture of a BOLOS application</figcaption>
</figure>

Three pieces of software are required:
- A BOLOS application, written in C, running on a Ledger device
- The companion app, with business logic and typically a GUI, running on a computer or a phone connected to the Ledger device
- A transaction explorer that interfaces between the front-end and the cryptocurrency daemon, running either locally (in the case of a full node) or remotely (light wallet)

If you’re not developing an app adding support for a cryptocurrency, then you can ignore the 3rd piece. Depending on your use case, the companion app might be a simple daemon or a command line tool, without a GUI.

The Ledger Manager is the service which centralizes the distribution of [BOLOS](https://developers.ledger.com/docs/nano-app/bolos-introduction/) applications on Ledger devices. It is the place where both Ledger’s apps and third party apps are distributed to users.

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/manager.png" class="align-center" alt="The Ledger Manager" /><figcaption aria-hidden="true">The Ledger Manager</figcaption>
</figure>


When these pieces are ready for deployment, they must be sent to Ledger for a security review. One of the things we're going to do is review the security of the BOLOS application code, and check that it functions as intended in conjunction with its companion app. Here is a non-exhaustive list of what we're looking at during the review process:

-   Backdoors
-   Buffer overflows
-   Correct use of the device (for example, minimizing [NVRAM wearing](../persistent-storage#flash-memory-endurance))
-   Correct use of the SDK
-   Application stability, correct handling of errors
-   Correct usability (see [Design Guidelines](#design-guidelines))

Review time depends on Ledger’s available resources and code complexity. The more unique and complex the code, the longer the review. Please note that forks of supported BOLOS apps will require a new review. The decision to reject or revoke an app is at Ledger’s sole discretion. We will make our best efforts to provide a rationale for such decisions. Upon fixing identified issues, app authors will be allowed to re-submit their apps.


## Release and deliverables

### Release processes

There are different release levels for a given application:

-   **Public release** (official Ledger support)
-   **Developer mode release** (experimental support)
    -   Developer mode with an **audited** application
    -   Developer mode with an **unaudited** application

In any case, Ledger's decision to publish a third party application may not be considered as any form of partnership or endorsement.

As long as an application isn't audited by Ledger security team, the message `Pending Ledger Review` will be displayed when the application is started. The user can aknowledge and skip this warning by pressing both buttons and use the application at his own risks. As an unaudited application is considered experimental, such application will be visible **only when the developer mode settings is enabled** in Ledger Live settings.

Some applications are also visible when the developer mode setting is enabled, not because of a lack of security review, but rather because they are considered too complex to use. It can be that the mandatory compatible GUI is missing, or that the application purpose is considered too technical for the vast majority of users.

An application will be listed publicly (official Ledger support) when:

-   It passed the security audit
-   It's been tested and validated by at least someone from Ledger Customer Success Team
-   The application is compatible with a GUI companion app (CLI is not enough)
-   Ledger is ready to communicate officially about the app release (tweet, blogpost, website page update)
-   Customer support pages are available on Ledger Help Center

### Deliverables summary

-   Bolos app Release Candidate source code (preferably a git repository)
-   Companion app (binaries or package, for Windows/MacOS/Linux)
-   Adobe Illustrator templates filled with your icons (see [Design Guidelines](../design-requirements))
-   Contact information (Name, Surname, Legal Entity, URL, email address, phone number)
-   Link to tutorial hosted on third party website (see [Third Party Applications Support](../support-maintenance-requirements))
-   Video of your application running on the Ledger device
    -   Verify public address on the Ledger device
    -   Display transaction information before allowing signature
    -   Reject a transaction on the Ledger device
    -   Sign a transaction on the Ledger device


### Release processes and deliverables overview

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/listing-program.png" class="align-center" alt="Ledger listing program" />
</figure>


## Warranty and liability disclaimer

The review and publication of third-party Ledger device applications (collectively “the Service”) are provided by Ledger on an “as-is” and “as-available” basis. The Service is subject to change without notice. Ledger disclaims all warranties of accuracy, non-infringement, merchantability and fitness for a particular purpose. To the extent that Ledger makes any pre-release of Ledger device applications available to third-party developers, you understand that Ledger is under no obligation to provide updates, enhancements, or corrections, or to notify you of any changes that Ledger may make, or to publicly announce or introduce the Ledger device applications at any time in the future.

To the extent not prohibited by applicable law, in no event will Ledger be liable for personal injury, or any incidental, special, indirect, consequential or punitive damages whatsoever, including, without limitation, damages resulting from delay of delivery, for loss of profits, data, business or goodwill, for business interruption, or any other commercial damages or losses, arising out of or related to this agreement or your use or inability to use the service.

