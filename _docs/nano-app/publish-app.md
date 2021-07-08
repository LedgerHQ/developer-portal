---
title: Publishing an Application
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

## Introduction

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

## Design Guidelines

The design of your device app will be added to our website to inform that your app is available. Please provide us your design in the required format and measurements.

There are 2 mandatory icons that should be provided for Ledger to release an app:

-   The Device icon, displayed on the Nano S dashboard
-   The Manager icon, displayed in the Manager application list

Below are the Adobe Illustrator templates for such icons, please respect their guidance.

-   The color palette for Blue icons contains 16 colors maximum
-   The icon file does not contain any alpha channel
-   In order to blend well with the Blue's Dashboard background, the 4 rounded white corners of the blue icon are set to this RGB value: \#F9F9F9 (and not \#FFFFFF)
-   Nano X icons are 14x14 px in size. Developers can create their Nano X icons from the 16x16 px Nano S one with the following command on Linux (install the package **imagemagick** first): `convert nanos_app_<token>.gif -crop 14x14+1+1 +repage -negate nanox_app_<token>.gif`

**Click on each image to download the corresponding .ai file, and fill them directly before sending them back. They should correspond to the icons used to compile your app.**

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/device_template.png" class="align-center" alt="Device icon template (click to access Illustrator file)" /><figcaption aria-hidden="true">Device icon template (click to access Illustrator file)</figcaption>
</figure>

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/manager_template.png" class="align-center" alt="Manager icon template (click to access Illustrator file)" /><figcaption aria-hidden="true">Manager icon template (click to access Illustrator file)</figcaption>
</figure>

The Device icon must be displayed on the first welcome screen.

Most of the time, Bolos apps expose few functionalities to the user. However, despite this simplicity, it is still challenging to build a user-friendly interface, because of the few inputs (only 2 buttons !) and also because of the screen size which offer only 128\*32 pixels. Ledger provides some guidance to avoid third party developers to reinvent the wheel.

<!--  -->
{% include alert.html style="primary" text="See the <a href='../display-management' class='alert-link'> BAGL Toolkit </a> for more information on the BOLOS Application Graphics Library technical details." %}
<!--  -->


Even though the screen is small, you don't want to bloat it with plenty of tiny text to fit everything in a single time. Instead, multiple successives screens are the way to go, with a configurable time interval between each screen switch. Doing this allows you to split and segment the information to display. It is also a good practice to inform the user of what is the kind of information currently displayed, by giving it a title. In some cases, even when the information is segmented by type, there won't be enough space for it to fit entirely on screen. Rather than splitting this information in multiple screens, it is better to use automatic scrolling display. Here is an example that sums it up:

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/scroll.gif" class="align-center" alt="Example: transaction confirmation screen" /><figcaption aria-hidden="true">Example: transaction confirmation screen</figcaption>
</figure>

On this example two pieces of information are shown: an amount of bitcoins, and a destination address. The two screens are alternating until the user validates or cancel. A title describes each information. Automatic scrolling is used for addresses that are too long to be displayed.

Graphical pointers (glyphs) shows the effects of the right and left buttons. There are four principal functions fulfilled by pressing buttons:

-   Making a binary choice for answering a question asked by the device (1 button)
-   Moving in a menu (1 button)
-   Selecting a menu entry (2 buttons)
-   Proceeding with a disclaimer (2 buttons)

To propose a binary choice to the user, 2 glyphs representing the 2 choices should be placed on each side of the screen (a cross symbol to cancel and a validation symbol to accept). You can display a question and relevant information in between the glyphs, like in the upper example.

To move inside a menu, be it vertical or horizontal, the same technique is applied with different glyphs. We recommend using arrows: up and down for a vertical menu, left and right for a horizontal one).

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/horizontal_menu.png" class="align-center" alt="Example use of arrows in an horizontal menu" /><figcaption aria-hidden="true">Example use of arrows in an horizontal menu</figcaption>
</figure>

<!-- ------------- Image ------------- -->
<!-- --------------------------------- -->
<figure>
<img src="../images/vertical_menu.png" class="align-center" alt="Example use of arrows in a vertical menu" /><figcaption aria-hidden="true">Example use of arrows in a vertical menu</figcaption>
</figure>

Once positioned on the right menu entry, the user can select the entry by pressing both buttons. This action is not represented by glyphs. Same goes when going through a set of disclaimer screens: only text is displayed, and the user goes to the next part by pressing both buttons. This is a consistent behavior across the device, so you can assume that users are used to it. It should feel obvious when the user has to press two buttons to go through something in your app.

Ledger does not impose the icons nor the interface for third party applications, however user friendliness and guidelines compliance is something being reviewed during the integration process. Therefore, a very poor design might be a cause of delay in your release roadmaps. Don't neglect it !

## Design Warranty

The design of your app must be free from any encumbrances and must not infringe upon any third party intellectual property right, in particular trademark and design rights. You grant Ledger the right to use such design for free with the right to reproduce and exploit the design for the duration of its display on Ledger website.

You represent and warrant that the app you are making available on Ledger Live is in compliance with all relevant laws and regulations.

You agree to hold Ledger harmless of any claim arising out of the use of the design and or distribution of your app .

## Release Process

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


<!--  -->
{% include alert.html style="success" text="Ledger releases new cryptocurrency apps for its devices whenever reviews, tests, and resources allow it." %}
<!--  -->


## Third Party Applications Support

<!--  -->
{% include alert.html style="success" text="The following only applies if you are adding support for a cryptocurrency and chose to build your own companion app." %}
<!--  -->


Ledger does not provide support for third party applications. **It is required for third party teams to provide and host a complete tutorial that will guide users before the app is released on the Ledger Manager** (please follow [these guidelines](../documentation-requirements)).

Along with your publication request, app sources and tutorial, please provide information that will allow the Ledger support team to redirect users to relevant support resources:

-   **Identity: Name, Surname, Legal Entity**
-   **Point of Contact: URL, email address, phone number**

<!--  -->
{% include alert.html style="success" text="Name, surname and phone number are kept private and will be used only in case of emergency." %}
<!--  -->


## Warranty and liability disclaimer

The review and publication of third-party Ledger device applications (collectively “the Service”) are provided by Ledger on an “as-is” and “as-available” basis. The Service is subject to change without notice. Ledger disclaims all warranties of accuracy, non-infringement, merchantability and fitness for a particular purpose. To the extent that Ledger makes any pre-release of Ledger device applications available to third-party developers, you understand that Ledger is under no obligation to provide updates, enhancements, or corrections, or to notify you of any changes that Ledger may make, or to publicly announce or introduce the Ledger device applications at any time in the future.

To the extent not prohibited by applicable law, in no event will Ledger be liable for personal injury, or any incidental, special, indirect, consequential or punitive damages whatsoever, including, without limitation, damages resulting from delay of delivery, for loss of profits, data, business or goodwill, for business interruption, or any other commercial damages or losses, arising out of or related to this agreement or your use or inability to use the service.

## Deliverables summary

Please apply on [Ledger's Listing
Program](https://ledger.typeform.com/to/qQSf7CVh):

-   Bolos app Release Candidate source code (preferably a git repository)
-   Companion app (binaries or package, for Windows/MacOS/Linux)
-   Adobe Illustrator templates filled with your icons (see [Design Guidelines](#design-guidelines))
-   Contact information (Name, Surname, Legal Entity, URL, email address, phone number)
-   Link to tutorial hosted on third party website (see [Third Party Applications Support](#third-party-applications-support))
-   Video of your application running on the Ledger device
    -   Verify public address on the Ledger device
    -   Display transaction information before allowing signature
    -   Reject a transaction on the Ledger device
    -   Sign a transaction on the Ledger device


<!--  -->
{% include alert.html style="success" text="Ledger will review new applications and Pull Requests on a best-effort basis. Submitting an application or a Pull Request isn't a guarantee it will be released." %}
<!--  -->

