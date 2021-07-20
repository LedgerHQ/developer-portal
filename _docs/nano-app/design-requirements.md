---
title: Design requirements
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

## Guidelines

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
