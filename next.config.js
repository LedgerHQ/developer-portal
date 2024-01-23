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
        destination: 'https://ledgeropen.herokuapp.com/pro ',
        permanent: true,
      },
      {
        source: '/discord-pro',
        destination: 'https://ledgeropen.herokuapp.com/pro ',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/introduction',
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
        destination: '/docs/device-app/deliver/references',
        permanent: true,
      },
      
      {
        source: '/docs/device-app/getting-started/external-dev',
        destination: '/docs/device-app/deliver/references',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/release-requirements',
        destination: '/docs/device-app/deliver/requirements',
        permanent: true,
      },
      {
        source: '/docs/device-app/submission/requirements',
        destination: '/docs/device-app/deliver/requirements',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/security-audit',
        destination: '/docs/device-app/deliver/references',
        permanent: true,
      },
      {
        source: '/docs/device-app/submission/security-audit',
        destination: '/docs/device-app/deliver/references',
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
        source: '/docs/embedded-app/clone-intro',
        destination: '/docs/device-app/develop/tutorials/clone',
        permanent: true,
       },
      {
        source: '/docs/device-app/clones',
        destination: '/docs/device-app/develop/tutorials/clone',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/eth-app-update',
        destination: '/docs/device-app/develop/tutorials/clone',
        permanent: true,
       },
      {
        source: '/docs/device-app/clones/eth-app-update',
        destination: '/docs/device-app/develop/tutorials/clone',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/eth-clones',
        destination: '/docs/device-app/develop/tutorials/clone',
        permanent: true,
       },
      {
        source: '/docs/device-app/clones/eth-clones',
        destination: '/docs/device-app/develop/tutorials/clone',
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
        destination: '/docs/device-app/develop/sdk/memory/persistent-storage',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/memory/persistent-storage',
        destination: '/docs/device-app/develop/sdk/memory/persistent-storage',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/position-independent-code',
        destination: '/docs/device-app/develop/sdk/memory/position-independent-code',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/memory/position-independent-code',
        destination: '/docs/device-app/develop/sdk/memory/position-independent-code',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/memory-alignment',
        destination: '/docs/device-app/develop/sdk/memory/memory-alignment',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/memory/memory-alignment',
        destination: '/docs/device-app/develop/sdk/memory/memory-alignment',
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
        destination: '/docs/device-app/develop/sdk/ui/flows/display-management-flow',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/flows/display-management-flow',
        destination: '/docs/device-app/develop/sdk/ui/flows/display-management-flow',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/advanced-display-management',
        destination: '/docs/device-app/develop/sdk/ui/flows/advanced-display-management',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/flows/advanced-display-management',
        destination: '/docs/device-app/develop/sdk/ui/flows/advanced-display-management',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/design-requirements',
        destination: '/docs/device-app/develop/sdk/ui/ledger-nano-display/design-requirements',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-nano-display/design-requirements',
        destination: '/docs/device-app/develop/sdk/ui/ledger-nano-display/design-requirements',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/display-management-design',
        destination: '/docs/device-app/develop/sdk/ui/ledger-nano-display/display-management-design',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/display-management-design',
        destination: '/docs/device-app/develop/sdk/ui/ledger-nano-display/display-management-design',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/low-level-display-management',
        destination: '/docs/device-app/develop/sdk/ui/ledger-nano-display/low-level-display-management',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-nano-display/low-level-display-management',
        destination: '/docs/device-app/develop/sdk/ui/ledger-nano-display/low-level-display-management',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-home',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/home',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/home',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/home',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-info-settings',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/info-settings',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/info-settings',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/info-settings',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-transactions',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/transactions',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/transactions',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/transactions',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-address',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/address',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/address',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/address',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-messages',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/messages',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/messages',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/messages',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-graphic-lib',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/graphic-lib',
        permanent: true,
       },
      {
        source: '/docs/device-app/coding-guidelines/ledger-stax-display/graphic-lib',
        destination: '/docs/device-app/develop/sdk/ui/ledger-stax-display/graphic-lib',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/icons',
        destination: '/docs/device-app/deliver/requirements/deliverables/icons',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/icons',
        destination: '/docs/device-app/deliver/requirements/deliverables/icons',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/ui-flow-video',
        destination: '/docs/device-app/deliver/requirements/deliverables/ui-flow-video',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/ui-flow-video',
        destination: '/docs/device-app/deliver/requirements/deliverables/ui-flow-video',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/documentation-requirements',
        destination: '/docs/device-app/deliver/requirements/deliverables/documentation',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/documentation-requirements',
        destination: '/docs/device-app/deliver/requirements/deliverables/documentation',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/documentation-requirements',
        destination: '/docs/device-app/deliver/requirements/deliverables/support',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/support-requirements',
        destination: '/docs/device-app/deliver/requirements/deliverables/support',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/support-requirements',
        destination: '/docs/device-app/deliverables/marketing-requirements',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/marketing-requirements',
        destination: '/docs/device-app/deliver/requirements/deliverables/marketing',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/marketing-requirements',
        destination: '/docs/device-app/deliver/requirements/deliverables/marketing',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/warranty-disclaimer',
        destination: '/docs/device-app/deliver/requirements/legal',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliverables/warranty-disclaimer',
        destination: '/docs/device-app/deliver/requirements/legal',
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
        source: '/docs/speculos/:slug',
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
        source: '/docs/transport/overview',
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
        destination: '/docs/connectivity/connect-kit',
        permanent: true,
       },
      {
        source: '/docs/dapp-connect-kit/:slug',
        destination: '/docs/connectivity/connect-kit/:slug',
        permanent: true,
       },
      {
        source: '/docs/nft/:slug',
        destination: '/docs/nft-display/:slug',
        permanent: true,
       },
      {
        source: '/docs/live-app/start-here',
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
        source: '/docs/dapp/requirements',
        destination: '/docs/plugin/requirements',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/overview',
        destination: '/docs/plugin/overview',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/code-overview',
        destination: '/docs/plugin/code-walkthrough',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/boilerplate-plugin',
        destination: '/docs/plugin/code-walkthrough/boilerplate-plugin',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/selectors',
        destination: '/docs/plugin/code-walkthrough/selectors',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/init-contract',
        destination: '/docs/plugin/code-walkthrough/selectors-detailed/init-contract',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/provide-parameter',
        destination: '/docs/plugin/code-walkthrough/selectors-detailed/provide-parameter',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/finalize',
        destination: '/docs/plugin/code-walkthrough/selectors-detailed/finalize',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/provide-token',
        destination: '/docs/plugin/code-walkthrough/selectors-detailed/provide-token',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/query-contract-id',
        destination: '/docs/plugin/code-walkthrough/selectors-detailed/query-contract-id',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/query-contract-ui',
        destination: '/docs/plugin/code-walkthrough/selectors-detailed/query-contract-ui',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/testing',
        destination: '/docs/plugin/code-walkthrough/testing',
        permanent: true,
       },
      {
        source: '/docs/dapp/embedded-plugin/flow',
        destination: '/docs/plugin/code-walkthrough/flow',
        permanent: true,
       },              
      {
        source: '/docs/non-dapp/introduction',
        destination: '/docs/discover/web3-app',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/use-cases',
        destination: '/docs/discover/web3-app/use-cases',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/ux-req',
        destination: '/docs/discover/web3-app/ux-requirements',
        permanent: true,
       },
      {
        source: '/docs/non-dapp/reference/manifest',
        destination: '/docs/discover/non-dapp',
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
        source: '/docs/swap/introduction',
        destination: '/docs/exchange/integration',
        permanent: true,
       },
      {
        source: '/docs/swap/flow',
        destination: '/docs/exchange/integration/flow',
        permanent: true,
       },
      {
        source: '/docs/swap/howto',
        destination: '/docs/exchange/integration/howto/requirements',
        permanent: true,
       },
      {
        source: '/docs/swap/howto/providers-endpoints',
        destination: '/docs/exchange/integration/howto/providers-endpoints',
        permanent: true,
       },  
      {
        source: '/docs/swap/howto/providers-liveapp',
        destination: '/docs/exchange/integration/howto/providers-liveapp',
        permanent: true,
       },  
      {
        source: '/docs/swap/howto/ledger-exchange-sdk',
        destination: '/docs/exchange/integration/howto/ledger-exchange-sdk',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/start-here',
        destination: '/docs/exchange/flow/start-here',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/quote',
        destination: '/docs/exchange/flow/flow-breakdown/quote',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/partner-live-app',
        destination: '/docs/exchange/flow/flow-breakdown/partner-live-app',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/device-flow',
        destination: '/docs/exchange/flow/flow-breakdown/device-flow',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/transaction-status',
        destination: '/docs/exchange/flow/flow-breakdown/transaction-status',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/edge-cases',
        destination: '/docs/exchange/flow/flow-breakdown/edge-cases',
        permanent: true,
       },                                                                                                                                                                                                                                                              
    ];
  },
}
