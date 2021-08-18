---
title: Context
subtitle:
tags: []
layout: doc_pa
---

#### Sections in this article
{:.no_toc}
* TOC
{:toc}

## Introduction

In this article, we will guide you through the process of developing and integrating your Platform application to the Ledger Live ecosystem. By having your application supported in Ledger Live, you increase the security and ease of use for your users, while simultaneously having access to over 3 million Ledger Live users.

## What is a Platform Application ?

A Platform Application is an application that leverages the Ledger Live API. By doing so it can get access to the native features of Ledger Live and to the user’s accounts and information.

In a previous article, we described the process to get a Decentralized Application (DApp) listed in the Ledger Live Discover section. The DApps running in this section are in fact executed within the first Platform Application Ledger designed : the Dapp Browser.

![interaction between Ledger Live and the Live Apps](../images/ledger_live_interaction_live_apps.png "interaction between Ledger Live and the Live Apps")

## How to

In order to develop an application compatible with Ledger Live Platform, we provide you with a set of particular APIs (Ledger Live API) to integrate features and interact with Ledger Live. This set of APIs will evolve over time. You develop a web version of your application, which is then integrated in an iframe inside the platform so all the Ledger Live users can discover it.

You will find below the steps needed to have your application compatible with Ledger Live Platform.

### Setup dev environment

(TBD)
You will need to:
- Install a recent [node.js](https://nodejs.org/) or [Yarn 1 (classic)](https://classic.yarnpkg.com/lang/en/),
- Install our typescript Platform SDK library (“yarn add ledgersdk”),
- Unlock Developer mode inside Ledger Live.

You can access our Demo repository here (link), a github repository with a standard “Hello World” Platform App to get you started.

### Unlock Developer mode inside Ledger Live

To activate the developer mode in Ledger Live, go to the Settings/About section, and click ten times on the Ledger Live version.

This will make the Developer tab appear.

![screenshot of the Developer tab](../images/developer_mode_tab.png "Developer tab")

Note : this feature is available only for Ledger Live version 2.32 and above.

This new section will give you access to the following content :

- **Allow debug apps** : Display and allow opening debug tagged platform apps.
- **Allow experimental apps** : Display and allow opening experimental tagged platform apps.
- **Set the catalog provider** : Switch between multiple platform apps sources (Production of Staging).
- **Enable platform dev tools** : Enable opening platform apps dev tools window.
- **Add a local app** : Browse local files and add a local app using a local manifest.

We’ll dive into each section to describe how they work.

#### Allow debug apps

This setting, when enabled, will display and allow opening “debug” tagged platform apps.
The first debug tagged platform app you will now see appear in the Discover section will be the Debugger. This app has been designed by Ledger to specifically allow you to test the API and understand how it works.

#### Allow experimental apps

This setting, when enabled, will display and allow opening “experimental” tagged platform apps.
As long as an application hasn’t been reviewed and approved by Ledger, it can only remain experimental.

#### Set the catalog provider

The catalog provider is a variable used to define the list of applications being displayed in the discover section. Ledger uses two lists of applications, those in staging (currently being tested), and those in production (validated already, and usually available to all our users).

#### Enable Platform dev tools

This setting will enable opening the platform apps dev tools window, which can become handy when debugging your application.

![screenshot of the Platform dev tools](../images/platform_dev_tools.png "Developer tools window")

#### Add a local app

This option will allow you to browse for local files and add a local app using a local manifest.
With it you can be autonomous in testing your application.
You’ll have to load your own manifest to make your application appear in the Discover section.

### Write your Manifest file

To be able to test your application,  you first need to write your application manifest file.
This file must contain some mandatory information, such as the app package names, the components, the permissions needed, the hardware and software features, etc.

Tip: You can use our [Manifest template](https://github.com/LedgerHQ/ledger-live-assets/blob/develop/platform/apps/v1/schema.ts) from the Demo repository (link TBD).

Example of manifest (JSON format) for the “Lido” application:

```json
{
    "id": "lido",
    "name": "Lido",
    "url": "https://ledger-live-platform-apps.vercel.app/app/dapp-browser?dappName=Lido&nanoApp=Lido&url=https%3A%2F%2Fstake.lido.fi%2F%3Fref%3D0x558247e365be655f9144e1a0140D793984372Ef3%26embed%3Dtrue",
    "homepageUrl": "https://lido.fi/",
    "icon": "https://cdn.live.ledger.com/icons/platform/lido.png",
    "platform": "all",
    "apiVersion": "0.0.1",
    "manifestVersion": "1",
    "branch": "stable",
    "categories": [
      "staking",
      "defi"
    ],
    "currencies": [
      "ethereum"
    ],
    "content": {
      "shortDescription": {
        "en": "Stake your ETH with Lido to earn daily staking rewards."
      },
      "description": {
        "en": "Stake your ETH with Lido to earn daily staking rewards."
      }
    },
    "permissions": [],
    "domains": [
      "https://*"
    ]
  }
```

Here is the list of the mandatory fields required in your manifest file:
- `id`: the identification of your application. Must be in lowercase.
Type: string.
- `name`: the name of your application ("Lido" in this example).
Type: string.
- `url`: the URL of your application. Must be expressed in the following way "https://ledger-live-platform-apps.vercel.app/app/dapp-browser?dappName=Lido&nanoApp=Lido&url=YOUR_URL", with YOUR_URL being encoded with a tool like [this one](https://meyerweb.com/eric/tools/dencoder/).
Type: string.
- `homepageUrl`: the homepage of your service, for instance "https://www.google.fr/"
Type: string.
- `icon`: a link to the icon being displayed in the Ledger Live Discover section. Will be hosted on Ledger CDN before being released in production.
Type: url.
- `platform`: a parameter to determine on which platform (desktop, mobile, iOS, android) your service will be available. By default you should set the value to "all".
Type: string.
- `apiVersion`: the API version, by default "0.0.1".
Type: string.
- `manifestVersion`: the manifest version, by default should be "1".
Type: string.
- `branch`: the specific branch used by Ledger to deploy the changes. Can take the values stable | experimental | debug | soon. By default you should set it to  "stable". The value “soon” will mark your app as “Coming soon” and it won’t be usable.
Type: string.
- `categories`: a JSON array containing metadata information about your application. For instance : ["staking","defi" ]
Type: list(string).
- `currencies`: a JSON array describing the currency/network being used by your application. For instance ["ethereum",”polygon”]
Type: list(string).
- `content`: a description of your service. It wiill be visible in the entry card of your application.
Type: l18n strings.
- `permissions`:
- `domains`:

(TBD) Manifest validation tool ?

### Develop your Platform App

To develop the web version of your application, you need to use the Ledger Live Platform SDK. According to the services and features you want to provide, you may have to use some specific APIs in order to interact with Ledger Live. An example would be account registration, or signing transactions.

(TBD) API Doc and code samples
(TBD) Demo repo

### Test your Platform App in Ledger Live

Make sure you have unlocked the Ledger Live developer mode. You can find the procedure above.
In the Ledger Live developer tab, you will need to use the options “Enable Platform dev tools” to open the developer tools window, as well as “Add a local app”, to be able to locally load your manifest file and make your app appear in the “Discover” section.

You are now able to locally and autonomously test your application integration inside Ledger Live.

## Release process

### Submit the form

Once your application is ready, start the release process by filling the “Submit form” here (link).

Ledger will then review your application and get in touch with you.

### Send your Manifest file

As part of your application submission, you’ll be requested to provide us with your manifest file.
You can use our [manifest template](https://github.com/LedgerHQ/ledger-live-assets/blob/develop/platform/apps/v1/schema.ts) from the Demo repository (link). Please make sure to test it within your own Ledger Live first to ensure it’s fully functional.

### Wait for the Ledger review

After sending your application, it will not be listed in Ledger Live right away. Ledger needs to review and validate the code, from a functionality, security, design and business point of view.

An application will be listed publicly (official Ledger support) only when:
- It has been tested and validated by at least someone from Ledger Developer Success Team,
- It passed the security audit (including plugin when necessary),
- Ledger is ready to communicate officially about the app release (tweet, blogpost, website page update),
- Customer support pages are available on Ledger Help Center,
- General T&Cs have been signed,
- There is a link for a tutorial hosted on third party website,
- Contact information (Name, Surname, Legal Entity, URL, email address, phone number) have been provided in the application form,
- A video of your application running in the Ledger Discover section has been provided in the application form.

Once Ledger finishes the review, your application is added to the Ledger Live “Discover” section, and all our users are able to use it.

## Contact us

If you wish to contact us, please have a look at [this page](https://developers.ledger.com/contact/) where we describe all the relevant communication channels you can use. If you are a developer and wish to get in touch with our engineering team, don’t wait and reach out to us [on Slack](https://join.slack.com/t/ledger-dev/shared_invite/zt-iskfi3kl-CXw9Uz2dOOYSLKe_e4tcmw). Please introduce yourself to the developer community in the **#introductions** channel and get help in the **#support** and **#ledgerjs** channels.

