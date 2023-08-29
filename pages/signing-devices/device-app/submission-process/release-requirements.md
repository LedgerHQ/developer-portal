# Release types and requirements

## Developer mode releases and public release

There are different release types for an application:

-   **Developer mode release**  
-   **Public release** (official Ledger support)  

An application can go through Ledger acceptance several times, according to release type.

<!--  -->
{% include alert.html style="note" text="
Until the application is audited, the message <code>Pending Ledger Review</code> is displayed when the application is used. The user must acknowledge this warning by pressing both buttons to use the application, which is at their own risk. " %}
<!--  -->

Developer mode applications are considered experimental and such application will be visible **only when the [developer mode](../../live-app/developer-mode/) setting is enabled** in Ledger Live settings.

<!--  -->
{% include alert.html style="note" text="Some applications are only visible if developer mode is enabled, not because of a lack of security review, but rather because they are considered too complex to use. For example, the mandatory compatible GUI may be missing, or perhaps the application is considered too technical for the majority of users."%}
<!--  -->


## Release Requirements

### 1 - General information

- Embedded app name
- The name of your token as displayed in [CoinMarketCap](https://coinmarketcap.com/)
- Legal Entity name
- Postal address
- Email address


### 2 - Security

- I have read the [security guidelines](../secure-app/)
- The [guideline_enforcer workflow](../framework#CI) succeeds
- All vulnerabilities have been fixed


### 3 - Embedded app 

- I have read the [coding guidelines](../global-architecture/)
- Embedded app source code (GitHub repository)
- My app repository has a test folder that contains the Functional tests and Unit tests
- The App has been fully tested with a companion wallet (CLI or GUI)
- Two icons for the Ledger Stax, Nano and for the Ledger Live Manager in PNG or GIF (see [Icons](../icons/))
- [Video](../ui-flow-video/#video) of your application running on the Ledger device (for Ledger Nano only)
- The App has a [Blind Signing](../blind-signing) setting (if applicable)
- The [Guidelines_enforcer and Build_and_functional_tests workflow](../framework#CI) succeeds


### 4 - Companion Wallet

- A link to the Companion Wallet The wallet must give an option to verify the receiving address on a Ledger device. It should also have an affiliate link next to the "Connect with Ledger" option. You must provide either:
  - a link to the CLI repository, or
  - a link to the GUI running on Windows/MacOS/Linux (mandatory for Public release)

### 5- Documentation

- Document in the App's repository the list of the app's APDUs and status words
- Link to a Google doc tutorial about how to install and use your app (see [Third Party Applications Support](../support-requirements/))
    - The doc must include the link to the published tutorial hosted on third party website 


### 6 - Support

- I have read the [support page](../support-requirements/)
- Main support contact (mail address, Slack/Reddit/Telegram/Discord communities)


### 7 - Marketing (Mandatory for Public release)

- I have read the [marketing page](../marketing-requirements/) 
- Marketing plan


### 8 - Warranty and liability

- I have read and agree with information laid out the [warranty and liability disclaimer](../warranty-disclaimer/)

## Disclaimer

Ledger's release of a third party application must not be considered as any form of partnership or endorsement.