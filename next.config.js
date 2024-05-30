const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});



module.exports = {
  ...withNextra(),
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/Ledger',
        permanent: true,
      },
      {
        source: '/discord-pro',
        destination: 'https://discord.gg/Ledger',
        permanent: true,
      },
      {
        source: '/contact',
        destination: 'https://discord.gg/Ledger',
        permanent: true,
      },
      {
        source: '/docs/nano-app/:slug',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/what-to-do',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/dapp/embedded-plugin/environment-setup',
        destination: '/docs/device-app/introduction',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/introduction',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/case1',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/case2',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/case3',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/case4',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/case5',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/case6',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/required-skills',
        destination: '/docs/device-app/introduction',
        permanent: true,
      },
      {
        source: '/docs/device-app/getting-started/required-skills',
        destination: '/docs/device-app/introduction',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/external-dev',
        destination: '/docs/device-app/deliver/partners',
        permanent: true,
      },
      
      {
        source: '/docs/device-app/getting-started/external-dev',
        destination: '/docs/device-app/deliver/partners',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/release-requirements',
        destination: '/docs/device-app/deliver/requirements',
        permanent: true,
      },
      {
        source: '/docs/device-app/submission/requirements',
        destination: '/docs/device-app/develop/requirements',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/security-audit',
        destination: '/docs/device-app/deliver/partners',
        permanent: true,
      },
      {
        source: '/docs/device-app/submission/security-audit',
        destination: '/docs/device-app/deliver/partners',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/submission-form',
        destination: '/docs/device-app/deliver/submission-form',
        permanent: true,
      },
      {
        source: '/docs/device-app/submission/submission-form',
        destination: '/docs/device-app/deliver/submission-form',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/maintenance',
        destination: '/deliver/process',
        permanent: true,
      },
      {
        source: '/docs/device-app/submission/maintenance',
        destination: '/deliver/process',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/release-flow',
        destination: '/docs/device-app/deliver/process',
        permanent: true,
       },
      {
        source: '/docs/device-app/getting-started/release-flow',
        destination: '/docs/device-app/deliver/process',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/framework',
        destination: '/docs/device-app/develop/quickstart',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/debug/',
        destination: '/docs/device-app/develop/tips',
        permanent: true,
       },
      {
        source: '/docs/device-app/quickstart/framework',
        destination: '/docs/device-app/develop/quickstart',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/build-load',
        destination: '/docs/device-app/develop/quickstart',
        permanent: true,
       },
      {
        source: '/docs/device-app/quickstart/build-load',
        destination: '/docs/device-app/develop/quickstart',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/load-linux',
        destination: '/docs/device-app/develop/quickstart',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/clone-intro',
        destination: '/docs/device-app/develop/code/clone',
        permanent: true,
       },
      {
        source: '/docs/device-app/clones',
        destination: '/docs/device-app/develop/code/clone',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/eth-app-update',
        destination: '/docs/device-app/develop/code/clone',
        permanent: true,
       },
      {
        source: '/docs/device-app/clones/eth-app-update',
        destination: '/docs/device-app/develop/code/clone',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/eth-clones',
        destination: '/docs/device-app/develop/code/clone',
        permanent: true,
       },
      {
        source: '/docs/device-app/clones/eth-clones',
        destination: '/docs/device-app/develop/code/clone',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-porting',
        destination: '/docs/device-app/coding-guidelines/stax-porting',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/stax-porting',
        destination: '/docs/device-app/coding-guidelines/stax-porting',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/global-architecture',
        destination: '/docs/device-app/introduction/app',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/global-architecture',
        destination: '/docs/device-app/introduction/app',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/secure-app',
        destination: '/docs/device-app/coding-guidelines/secure-app',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/secure-app',
        destination: '/docs/device-app/coding-guidelines/secure-app',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/blind-signing',
        destination: '/docs/device-app/deliver/requirements/design',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/blind-signing',
        destination: '/docs/device-app/deliver/requirements/design',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/persistent-storage',
        destination: '/docs/device-app/architecture/memory/persistent-storage',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/memory/persistent-storage',
        destination: '/docs/device-app/architecture/memory/persistent-storage',
        permanent: true,
       },
      {
        source: '/docs/nano-app/persistent-storage/',
        destination: '/docs/device-app/architecture/memory/persistent-storage',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/position-independent-code',
        destination: '/docs/device-app/architecture/memory/position-independent-code',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/memory/position-independent-code',
        destination: '/docs/device-app/architecture/memory/position-independent-code',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/memory-alignment',
        destination: '/docs/device-app/architecture/memory/memory-alignment',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/memory/memory-alignment',
        destination: '/docs/device-app/architecture/memory/memory-alignment',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/memory',
        destination: '/docs/device-app/architecture/memory',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/interaction-bolos-apps',
        destination: '/docs/device-app/architecture/psd/application-isolation',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/io/interaction-bolos-apps',
        destination: '/docs/device-app/architecture/psd/application-isolation',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/application-structure',
        destination: '/docs/device-app/architecture/psd/application-isolation',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/io/interaction-bolos-apps',
        destination: '/docs/device-app/architecture/psd/application-isolation',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/display-management-flow',
        destination: '/docs/device-app/develop/ui/flows/display-management-flow',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/flows/display-management-flow',
        destination: '/docs/device-app/develop/ui/flows/display-management-flow',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/advanced-display-management',
        destination: '/docs/device-app/develop/ui/ledger-nano-display',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/flows/advanced-display-management',
        destination: '/docs/device-app/develop/ui/ledger-nano-display',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/design-requirements',
        destination: '/docs/device-app/develop/ui/ledger-nano-display/design-requirements',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-nano-display/design-requirements',
        destination: '/docs/device-app/develop/ui/ledger-nano-display/design-requirements',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/marketing-requirements',
        destination: '/docs/device-app/deliver/deliverables/marketing',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/documentation-requirements',
        destination: '/docs/device-app/deliver/deliverables/documentation',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/documentation-requirements',
        destination: '/docs/device-app/deliver/deliverables/documentation',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/display-management-design',
        destination: '/docs/device-app/develop/ui/ledger-nano-display/display-management-design',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/display-management-design',
        destination: '/docs/device-app/develop/ui/ledger-nano-display/display-management-design',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/low-level-display-management',
        destination: '/docs/device-app/develop/ui/ledger-nano-display/low-level-display-management',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-nano-display/low-level-display-management',
        destination: '/docs/device-app/develop/ui/ledger-nano-display/low-level-display-management',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-interactions',
        destination: '/docs/device-app/develop/ui/ledger-stax-display',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/sdk/ui/ledger-stax-display',
        destination: '/docs/device-app/develop/ui/ledger-stax-display',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-home',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/home',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/home',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/home',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-info-settings',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/info-settings',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/info-settings',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/info-settings',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-transactions',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/transactions',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/transactions',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/transactions',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-address',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/address',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/address',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/address',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-messages',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/messages',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/messages',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/messages',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-graphic-lib',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/graphic-lib',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/graphic-lib',
        destination: '/docs/device-app/develop/ui/ledger-stax-display/graphic-lib',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/icons',
        destination: '/docs/device-app/deliver/deliverables/icons',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/icons',
        destination: '/docs/device-app/deliver/deliverables/icons',
        permanent: true,
       },  
      {
        source: '/docs/embedded-app/stax-icon',
        destination: '/docs/device-app/deliver/deliverables/icons',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/ui-flow-video',
        destination: '/docs/device-app/deliver/deliverables/ui-flow-video',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/ui-flow-video',
        destination: '/docs/device-app/deliver/deliverables/ui-flow-video',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/documentation-requirements',
        destination: '/docs/device-app/deliver/deliverables/documentation',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/documentation-requirements',
        destination: '/docs/device-app/deliver/deliverables/documentation',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/documentation-requirements',
        destination: '/docs/device-app/deliver/deliverables/support',
        permanent: true,
       },
      {
        source: '/docs/nano-app/support-requirements',
        destination: '/docs/device-app/deliver/deliverables/support',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/support-requirements',
        destination: '/docs/device-app/deliver/deliverables/support',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/support-requirements',
        destination: '/docs/device-app/deliver/deliverables/marketing',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/marketing-requirements',
        destination: '/docs/device-app/deliver/deliverables/marketing',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/marketing-requirements',
        destination: '/docs/device-app/deliver/deliverables/marketing',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/warranty-disclaimer',
        destination: '/docs/device-app/deliver/deliverables/legal',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/warranty-disclaimer',
        destination: '/docs/device-app/deliver/deliverables/legal',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-introduction',
        destination: '/docs/device-app/architecture/psd',
        permanent: true,
       },
      {
        source: '/docs/device-app/psd',
        destination: '/docs/device-app/architecture/psd',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-masterseed',
        destination: '/docs/device-app/architecture/psd/masterseed',
        permanent: true,
       },
      {
        source: '/docs/device-app/psd/masterseed',
        destination: '/docs/device-app/architecture/psd/masterseed',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-keys',
        destination: '/docs/device-app/architecture/psd/keys',
        permanent: true,
       },
      {
        source: '/docs/device-app/psd/keys',
        destination: '/docs/device-app/architecture/psd/keys',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-applications',
        destination: '/docs/device-app/architecture/psd/applications',
        permanent: true,
       },
      {
        source: '/docs/device-app/psd/applications',
        destination: '/docs/device-app/architecture/psd/applications',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-application-isolation',
        destination: '/docs/device-app/architecture/psd/application-isolation',
        permanent: true,
       },
      {
        source: '/docs/device-app/psd/application-isolation',
        destination: '/docs/device-app/architecture/psd/application-isolation',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-introduction',
        destination: '/docs/device-app/architecture/bolos',
        permanent: true,
       },
      {
        source: '/docs/device-app/bolos',
        destination: '/docs/device-app/architecture/bolos',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-features',
        destination: '/docs/device-app/architecture/bolos/features',
        permanent: true,
       },
      {
        source: '/docs/device-app/bolos/features',
        destination: '/docs/device-app/architecture/bolos/features',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-hardware-architecture',
        destination: '/docs/device-app/architecture/bolos/hardware-architecturee',
        permanent: true,
       },
      {
        source: '/docs/device-app/bolos/hardware-architecture',
        destination: '/docs/device-app/architecture/bolos/hardware-architecture',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-application-environment',
        destination: '/docs/device-app/architecture/bolos/application-environment',
        permanent: true,
       },
      {
        source: '/docs/device-app/bolos/application-environment',
        destination: '/docs/device-app/architecture/bolos/application-environment',
        permanent: true,
       },
      {
        source: '/docs/device-app/tools/speculos/basic-usage/:slug',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/speculos/user/:slug',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/device-app/tools/speculos/:slug',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/device-app/tools/speculos',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/printf',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/device-app/tools/printf',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/device-app/tools/pin-bypass',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/ledgerctl',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/device-app/tools/ledgerctl',
        destination: '/docs/device-app/develop/tools',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/faq',
        destination: '/docs/device-app/develop/faq',
        permanent: true,
       },
      {
        source: '/docs/device-app/faq',
        destination: '/docs/device-app/develop/faq',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/troubleshooting',
        destination: '/docs/device-app/develop/tips',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/troubleshooting',
        destination: '/docs/device-app/develop/tips',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/version',
        destination: '/docs/device-app/introduction',
        permanent: true,
       },
      {
        source: '/docs/device-app/getting-started/version',
        destination: '/docs/device-app/introduction',
        permanent: true,
       },
      {
        source: '/docs/device-app/cryptography-lib/examples',
        destination: '/docs/device-app/architecture/cryptography/examples',
        permanent: true,
       },
      {
        source: '/docs/device-app/cryptography-lib/:slug',
        destination: '/docs/device-app/architecture/cryptography/reference',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/crypto-api/examples',
        destination: '/docs/device-app/architecture/cryptography/examples',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/crypto-api/:slug',
        destination: '/docs/device-app/architecture/cryptography/reference',
        permanent: true,
       },
      {
        source: '/docs/transport/overview',
        destination: '/docs/connectivity/ledgerJS',
        permanent: true,
       },
      {
        source: '/docs/transport/choose-the-transport',
        destination: '/docs/connectivity/ledgerJS',
        permanent: true,
       },
      {
        source: '/docs/transport/required-skills',
        destination: '/docs/connectivity/ledgerJS/required-skills',
        permanent: true,
       },
      {
        source: '/docs/transport/choose-the-transports',
        destination: '/docs/connectivity/ledgerJS',
        permanent: true,
       },
      {
        source: '/docs/transport/prerequisites',
        destination: '/docs/connectivity/ledgerJS/integration-walkthrough',
        permanent: true,
       },
      {
        source: '/docs/transport/web-hid-usb',
        destination: '/docs/connectivity/ledgerJS/integration-walkthrough/web-application/web-bluetooth',
        permanent: true,
       },
      {
        source: '/docs/transport/web-hid-usb',
        destination: '/docs/connectivity/ledgerJS/integration-walkthrough/web-application/web-bluetooth',
        permanent: true,
       },
      {
        source: '/docs/transport/react-native-android-hid',
        destination: '/docs/connectivity/ledgerJS/integration-walkthrough/mobile-application/react-native-android-hid',
        permanent: true,
       },
      {
        source: '/docs/transport/react-native-bluetooth-android',
        destination: '/docs/connectivity/ledgerJS/integration-walkthrough/mobile-application/react-native-bluetooth-android',
        permanent: true,
       },
      {
        source: '/docs/transport/react-native-bluetooth-ios',
        destination: '/docs/connectivity/ledgerJS/integration-walkthrough/mobile-application/react-native-bluetooth-ios',
        permanent: true,
       },
      {
        source: '/docs/transport/node-electron-hid',
        destination: '/docs/connectivity/ledgerJS/integration-walkthrough/desktop-application/node-electron-hid',
        permanent: true,
       },
      {
        source: '/docs/transport/tutorial-1-hid-ethereum',
        destination: '/docs/connectivity/ledgerJS/tutorials/tutorial-1-hid-ethereum',
        permanent: true,
       },
      {
        source: '/docs/transport/tutorial-1-usb-solana',
        destination: '/docs/connectivity/ledgerJS/tutorials/tutorial-1-usb-solana',
        permanent: true,
       },
      {
        source: '/docs/transport/tutorial-2-web-bluetooth',
        destination: '/docs/connectivity/ledgerJS/tutorials/tutorial-2-web-bluetooth',
        permanent: true,
       },
      {
        source: '/docs/transport/tutorial-3-sign-message',
        destination: '/docs/connectivity/ledgerJS/tutorials/tutorial-3-sign-message',
        permanent: true,
       },
      {
        source: '/docs/transport/tutorial-4-cosmos-webapp',
        destination: '/docs/connectivity/ledgerJS/tutorials/tutorial-4-cosmos-webapp',
        permanent: true,
       },
      {
        source: '/docs/transport/clear-signing',
        destination: '/docs/connectivity/ledgerJS/clear-signing',
        permanent: true,
       },
      {
        source: '/docs/transport/usb-identifiers',
        destination: '/docs/connectivity/ledgerJS/faq/usb-identifiers',
        permanent: true,
       },
      {
        source: '/docs/transport/U2F',
        destination: '/docs/connectivity/ledgerJS/faq/U2F',
        permanent: true,
       },
      {
        source: '/docs/transport/transport-nano',
        destination: '/docs/connectivity/ledgerJS/faq/transport-nano',
        permanent: true,
       },
      {
        source: '/docs/transport/ledger-logos',
        destination: '/docs/connectivity/ledgerJS/faq/ledger-logos',
        permanent: true,
       },
      {
        source: '/docs/dapp-connect-kit/introduction',
        destination: '/docs/connectivity',
        permanent: true,
       },
      {
        source: '/docs/dapp-connect-kit/:slug',
        destination: '/docs/connectivity',
        permanent: true,
       },
      {
        source: '/docs/connectivity/connect-kit/:slug',
        destination: '/docs/connectivity',
        permanent: true,
       },
      {
        source: '/docs/connect/:slug',
        destination: '/docs/connectivity',
        permanent: true,
       },
      {
        source: '/docs/nft/:slug',
        destination: '/docs/nft-display/:slug',
        permanent: true,
       },
      {
        source: '/discover',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/live-app/start-here',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/live-app/nano-less-part-02',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/live-app/nano-less-part-01',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/live-app/guidelines',
        destination: '/docs/discover/guidelines',
        permanent: true,
       },
      {
        source: '/docs/live-app/required-skills',
        destination: '/docs/discover/required-skills',
        permanent: true,
       },
      {
        source: '/docs/live-app/faq',
        destination: '/docs/discover/faq',
        permanent: true,
       },
      {
        source: '/docs/live-app/developer-mode',
        destination: '/docs/discover/developer-mode',
        permanent: true,
       },
      {
        source: '/docs/dapp/process',
        destination: '/docs/discover/dapp',
        permanent: true,
       },
      {
        source: '/docs/dapp/dapp-customisation',
        destination: '/docs/discover/dapp/dapp-customisation',
        permanent: true,
       },
      {
        source: '/docs/dapp/manifest',
        destination: '/docs/discover/dapp/manifest',
        permanent: true,
       }, 
      {
        source: '/docs/device-app/develop/tutorials/quickstart',
        destination: '/docs/device-app/develop/quickstart',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/environment',
        destination: '/docs/device-app/develop/quickstart',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/tutorials/:slug',
        destination: '/docs/device-app/develop/code/:slug',
        permanent: true,
       },
      {
        source: '/docs/dapp/requirements',
        destination: '/docs/device-app/deliver',
        permanent: true,
       },
      {
        source: '/docs/plugin',
        destination: '/docs/device-app/develop/code/plugin',
        permanent: true,
       },
      {
        source: '/docs/plugin/requirements',
        destination: '/docs/device-app/deliver',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/overview',
        destination: '/docs/device-app/develop/code/plugin',
        permanent: true,
       },
      {
        source: '/docs/plugin/overview',
        destination: '/docs/device-app/develop/code/plugin',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/code-overview',
        destination: '/docs/device-app/develop/code/plugin',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough',
        destination: '/docs/device-app/develop/code/plugin',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/boilerplate-plugin',
        destination: '/docs/device-app/develop/code/pluginh',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/boilerplate-plugin',
        destination: '/docs/device-app/develop/code/plugin',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/selectors',
        destination: '/docs/device-app/develop/code/plugin/selectors',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors',
        destination: '/docs/device-app/develop/code/plugin/selectors',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/init-contract',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/init-contract',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors-detailed/init-contract',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/init-contract',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/provide-parameter',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/provide-parameter',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors-detailed/provide-parameter',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/provide-parameter',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/finalize',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/finalize',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors-detailed/finalize',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/finalize',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/provide-token',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/provide-token',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors-detailed/provide-token',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/provide-token',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/query-contract-ui',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/query-contract-ui',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors-detailed/query-contract-ui',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/query-contract-ui',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/query-contract-id',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/query-contract-id',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors-detailed/query-contract-id',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/query-contract-id',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/selectors-detailed/query-contract-id',
        destination: '/docs/device-app/develop/code/plugin/selectors-detailed/query-contract-id',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/testing',
        destination: '/docs/device-app/develop/code/plugin/testing',
        permanent: true,
       },
      {
        source: '/docs/plugin/code-walkthrough/testing',
        destination: '/docs/device-app/develop/code/plugin/testing',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/flow',
        destination: '/docs/plugin/code-walkthrough/flow',
        permanent: true,
       },              
      {
        source: '/docs/non-dapp/introduction',
        destination: '/docs/discover',
        permanent: true,
       },              
      {
        source: '/docs/non-dapp/howto/test/',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/use-cases',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/ux-req',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/APIs/:slug',
        destination: '/docs/discover/:slug',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/reference/manifest',
        destination: '/docs/discover/wallet-api/appendix/manifest',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/tutorial/introduction',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/tutorial/1-setup',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/tutorial/3-import/',
        destination: '/docs/discover',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/:slug',
        destination: '/docs/discover',
        permanent: true,
       },        
      {
        source: '/docs/coin/:slug',
        destination: '/docs/blockchain',
        permanent: true,
      },
      {
        source: '/docs/coin/general-process',
        destination: '/docs/blockchain/getting-started',
        permanent: true,
       },
      {
        source: '/docs/coin/general-architecture',
        destination: '/docs/blockchain/getting-started/general-architecture',
        permanent: true,
       },
      {
        source: '/docs/coin/work-breakdown',
        destination: '/docs/blockchain/coding',
        permanent: true,
       },
      {
        source: '/docs/coin/required-skills',
        destination: '/docs/blockchain/getting-started/required-skills',
        permanent: true,
       },
      {
        source: '/docs/coin/live-common',
        destination: '/docs/blockchain/setup-build',
        permanent: true,
       },
      {
        source: '/docs/coin/ledger-live-cli',
        destination: '/docs/blockchain/setup-build/ledger-live-cli',
        permanent: true,
       },
      {
        source: '/docs/coin/mostusefulcmd',
        destination: '/docs/blockchain/setup-build/mostusefulcmd',
        permanent: true,
       },
      {
        source: '/docs/coin/ll-setup',
        destination: '/docs/blockchain/setup-build/ll-setup',
        permanent: true,
       },
      {
        source: '/docs/coin/ui-ux-guidelines',
        destination: '/docs/blockchain/ui-ux-guidelines',
        permanent: true,
       },
      {
        source: '/docs/coin/lld-ui-guidelines',
        destination: '/docs/blockchain/ui-ux-guidelines/lld-ui-guidelines',
        permanent: true,
       },
      {
        source: '/docs/coin/llm-ui-guidelines',
        destination: '/docs/blockchain/ui-ux-guidelines/llm-ui-guidelines',
        permanent: true,
       },
      {
        source: '/docs/coin/cryptoassets-library',
        destination: '/docs/blockchain/coding/cryptoassets-library',
        permanent: true,
       },
      {
        source: '/docs/coin/js-bindings',
        destination: '/docs/blockchain/coding/js-bindings',
        permanent: true,
       },
      {
        source: '/docs/coin/address-derivation',
        destination: '/docs/blockchain/coding/address-derivation',
        permanent: true,
       },
      {
        source: '/docs/coin/sync',
        destination: '/docs/blockchain/coding/light-sync',
        permanent: true,
       },
      {
        source: '/docs/coin/sync',
        destination: '/docs/blockchain/coding/sync',
        permanent: true,
       },
      {
        source: '/docs/coin/send',
        destination: '/docs/blockchain/coding/send',
        permanent: true,
       },
      {
        source: '/docs/coin/desktop-mobile',
        destination: '/docs/blockchain/coding/desktop-mobile',
        permanent: true,
       },
      {
        source: '/docs/coin/bugs-troubleshooting',
        destination: '/docs/blockchain/coding/bugs-troubleshooting',
        permanent: true,
       },
      {
        source: '/docs/coin/writing-tests',
        destination: '/docs/blockchain/testing',
        permanent: true,
       },
      {
        source: '/docs/coin/bridge-tests',
        destination: '/docs/blockchain/testing/bridge-test',
        permanent: true,
       },
      {
        source: '/docs/coin/generic-test-plan',
        destination: '/docs/blockchain/testing/generic-test-plan',
        permanent: true,
       },
      {
        source: '/docs/coin/ui-tests',
        destination: '/docs/blockchain/testing/ui-tests',
        permanent: true,
       },
      {
        source: '/docs/coin/faq',
        destination: '/docs/blockchain/testing/ui-tests',
        permanent: true,
       },
      {
        source: '/docs/coin/terms-conditions',
        destination: '/docs/blockchain/terms-conditions',
        permanent: true,
       },
      {
        source: '/docs/token/introduction',
        destination: '/docs/tokens',
        permanent: true,
       },
      {
        source: '/docs/token/faq',
        destination: '/docs/tokens/integrating-tokens/faq',
        permanent: true,
       },
      {
        source: '/docs/token/erc20-bep20',
        destination: '/docs/tokens/integrating-tokens/evm-chains-tokens',
        permanent: true,
       },
      {
        source: '/docs/token/erc20',
        destination: '/docs/tokens/integrating-tokens/evm-chains-tokens',
        permanent: true,
       },
      {
        source: '/docs/token/evm-chains-tokens',
        destination: '/docs/tokens/integrating-tokens/evm-chains-tokens',
        permanent: true,
       },
      {
        source: '/docs/token/asa',
        destination: '/docs/tokens/integrating-tokens/asa',
        permanent: true,
       },
      {
        source: '/docs/token/trc',
        destination: '/docs/tokens/integrating-tokens/trc',
        permanent: true,
       },
      {
        source: '/docs/token/eip712-messages',
        destination: '/docs/tokens/eip712-messages',
        permanent: true,
       },
      {
        source: '/docs/exchange/swap/glossary',
        destination: '/docs/exchange/glossary',
        permanent: true,
       },
      {
        source: '/docs/exchange/swap/:slug',
        destination: '/docs/exchange/swap',
        permanent: true,
       },
      {
        source: '/docs/swap/:slug',
        destination: '/docs/exchange/swap',
        permanent: true,
       },
      {
        source: '/docs/exchange/integration/:slug',
        destination: '/docs/exchange',
        permanent: true,
       },                                                                                                                                                                                                                                                           
    ];
  },
}
