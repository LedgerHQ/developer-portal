---
title: Address verification and sharing
subtitle:
tags: [requirement, requirements]
category: Embedded Application
toc: true
author:
layout: doc
---

In addition to signing transactions, your app should let your users verify their receive addresses securely, leveraging the trusted display of Ledger Stax. This chapter goes over the best practices to show, share, and verify an address.

## Standard address verification

**Just like for transactions, address verification starts with a prompt that attracts the user’s attention and let them know what action they’re going to perform.**

<!-- ------------- Image ------------- -->
{: .center}
[![App architecture](/stax-address-verification.png)](/stax-address-verification.png)
<!-- --------------------------------- -->

To validate the address, users simply tap the black button. This action doesn’t leverage the “Hold to sign” gesture because it is reserved for signing transactions and messages.

## Sharing an address as a QR code

You can provide a visual representation of an address as a QR code. This lets your users easily share their addresses:
- for self-transfers to their Ledger Stax (from an exchange, a mobile wallet app, etc.);
- for peer-to-peer sharing.

<!-- ------------- Image ------------- -->
{: .center}
[![App architecture](/stax-qr-code.png)](/stax-qr-code.png)
<!-- --------------------------------- -->

A snippet of the address is repeated under the QR code to confirm that the data shown in the QR is indeed the address.

<!--  -->
{% include alert.html style="important" text="This QR feature could be proposed more widely throughout the SDK, outside of the receive flow (no design exists for this yet)." %}
<!--  -->


## Notifying the users of successful or failed verifications

As for transactions and messages, a user action must be followed by a notification:

<!-- ------------- Image ------------- -->
{: .center}
[![App architecture](/stax-address.png)](/stax-address.png)
<!-- --------------------------------- -->

As opposed to transactions, cancelling the verification is not destructive and we recommend not using a confirmation prompt.

## Displaying additional fields

You may want to show more information to advanced users, such as derivations paths.

In these cases, the content will not likely fit in one page with the confirmation button. Use a transaction-like flow with pagination, an operation prompt, and an operation verification. Start with the address on the first page.

Here’s an example with advanced Cardano address verification:

<!-- ------------- Image ------------- -->
{: .center}
[![App architecture](/stax-address-additional-fields.png)](/stax-address-additional-fields.png)
<!-- --------------------------------- -->


{% include alert.html style="important" text="Don’t show more fields than necessary for the majority of your users, in order to keep address verification simple and fast." %}


## Key Takeaway

{% include alert.html style="tip" text="<ul>
	<li>Make address verification simple and fast by conforming to the standard templates.</li>
	<li>Let your users show their address as a QR code for convenient sharing.</li>
</ul>" %}


## Stax Graphic Library APIs

- Use `nbgl_useCaseAddressConfirmation()` to make an address confirmation page, with the possibility to display it as QR Code.
- For specific cases (display derivation path for example), use `nbgl_useCaseAddressConfirmationExt()` to make an address confirmation page, with the possibility to display it as QR Code and some extra tag/value pairs. 

More info [here](../stax-graphic-lib/).

