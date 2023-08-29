# Developing and submitting an Embedded App

## What is an Embedded App?

<figure>
  <a href="/nanosplus.png" style="border-bottom: none;">
  <img style="width:250px; float:right; border:none;" src="/nanosplus.png" class="align-center" />
  </a>
</figure>

There are three types of embedded apps: Classical embedded apps, DApp plugins, and utility applications. 

### Classical embedded apps
This is the application that allows the users to manage their crypto-assets with their Ledger devices. It is the first step to an integration of your coin or token to the Ledger environment and to an integration of your blockchain to Ledger Live. The following sections will help you develop this type of application. For more information about the role of the Ledger embedded app, read [this Academy article](https://www.ledger.com/academy/hardwarewallet/what-are-ledger-applications-and-why-do-i-need-them). 

### DApp plugins
DApp Plugins are developed to integrate an Ethereum DApp to Ledger live. Ledger Live has a DApp browser where your DApp will be visible and usable through an iframe. Ethereum DApps can be developed for example to lend or borrow, swap, trade, pay with cryptoassets or manage your portfolio. The documentation for DApp plugins is in the [Live App section](../../dapp/process/).

### Utility applications
These applications leverage Ledger technology but are not involved in managing crypto assets. They interact with Ledger devices and BOLOS operating system and can serve many purposes. They can be, for example, a password manager application, or a two-factor authentication application. 

**You are developing a classical embedded App or a utility application, you are in the right section!**

## Development and submission phases

[![Development phases](/dev-sub-flow.png)](/dev-sub-flow.png)

See the complete submission flow [here](../release-flow).

## Your developer journey

### Engage with the Ledger developer community

Joining Discord is not required to code your embedded application, but it will be easier to meet with our team and discuss the specifics of your project. Join us on the [Ledger's Discord server](https://developers.ledger.com/discord/) and introduce your project in the **#embedded-app** channel.

### Understand the process & meet the requirements

Ensure that you have a clear understanding of the [Process](../release-flow/) and are able to meet the [Requirements](../release-requirements/) listed here.


### Begin Coding

Embedded applications are primarily developed in C using the Blockchain Open Ledger Operating System (BOLOS).

To develop an embedded application, ensure that you:
- Use Linux, Mac or Windows
- Use the [Ledger Framework](../framework)
- Use either a physical device or the Speculos emulator (available in the [Ledger Framework](../framework))


## Core concepts

### The BOLOS platform

BOLOS, the operating system powering all Ledger personal security devices, offers a lightweight and open-source framework. Developers can use this to build portable applications that run securely.

[Discover more about the BOLOS platform](../bolos-introduction/)

### Personal Security Devices

Ledger Personal Security Devices provide a secure and convenient way for users to store cryptographic secrets and sign transactions. Understanding their operation is crucial before starting the embedded application development process.

[Learn about the personal security devices](../psd-introduction/)


## Contributing

Interested in enhancing our documentation? Feel free to leave your suggestions in the comment box at the bottom of each page. We value your input.
