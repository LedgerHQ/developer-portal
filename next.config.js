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
        source: '/docs',
        destination: '/docs/dev-tracks/quickstart',
        permanent: true,
      },
      {
        source: '/docs/section',
        destination: '/docs/dev-tracks/quickstart',
        permanent: true,
      },
      {
        source: '/docs/nano-app/:slug*',
        destination: '/docs/device-app/getting-started',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/:slug*',
        destination: '/docs/device-app/getting-started',
        permanent: true,
      },
      {
        source: '/docs/device-app',
        destination: '/docs/device-app/getting-started',
        permanent: true,
      },
      {
        source: '/docs/device-app/introduction',
        destination: '/docs/device-app/getting-started',
        permanent: true,
       },
      {
        source: '/docs/device-app/introduction/:slug*',
        destination: '/docs/device-app/getting-started',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop',
        destination: '/docs/device-app/integration/requirements/development',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/quickstart',
        destination: '/docs/device-app/beginner/vscode-extension',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/code/c',
        destination: '/docs/device-app/integration/how-to/c-boilerplate',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/code/c',
        destination: '/docs/device-app/integration/how-to/c-boilerplate',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/code/rust',
        destination: '/docs/device-app/integration/how-to/rust-boilerplate',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/code/rust',
        destination: '/docs/device-app/integration/how-to/rust-boilerplate',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/code/plugin',
        destination: '/docs/device-app/integration/how-to/plugin',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/code/clone',
        destination: '/docs/device-app/integration/how-to/clone',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/requirements/security',
        destination: '/docs/device-app/integration/requirements/security',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/requirements/development',
        destination: '/docs/device-app/integration/requirements/development',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/ui/flows/display-management-flow',
        destination: '/docs/device-app/integration/design-guidelines/display-management/flows',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/ui/flows/advanced-display-management',
        destination: '/docs/device-app/integration/design-guidelines/display-management/advanced',
        permanent: true,
       },
      {
        source: '/docs/device-app/develop/tools',
        destination: '/docs/device-app/references/tools',
        permanent: true,
       },
      {
        source: '/docs/device-app/deliver',
        destination: '/docs/device-app/references/tools',
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
        source: '/docs/clear-signing/eip7730',
        destination: '/docs/clear-signing/erc7730',
        permanent: true,
       },
      {
        source: '/docs/transport/clear-signing',
        destination: '/docs/clear-signing/eip712',
        permanent: true,
       },
      {
        source: '/docs/connectivity/ledgerJS/clear-signing',
        destination: '/docs/clear-signing/eip712',
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
        source: '/docs/dapp-connect-kit/:slug*',
        destination: '/docs/connectivity',
        permanent: true,
       },
      {
        source: '/docs/connectivity/connect-kit/:slug*',
        destination: '/docs/connectivity',
        permanent: true,
       },
      {
        source: '/docs/connect/:slug*',
        destination: '/docs/connectivity',
        permanent: true,
       },
      {
        source: '/docs/nft/:slug*',
        destination: '/docs/nft-display/:slug*',
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
        source: '/docs/device-app/develop/tutorials',
        destination: '/docs/device-app/develop/quickstart',
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
        source: '/docs/device-app/develop/tutorials/:slug*',
        destination: '/docs/device-app/develop/code/:slug*',
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
        source: '/APIs/:slug*',
        destination: '/docs/discover/:slug*',
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
        source: '/docs/non-dapp/:slug*',
        destination: '/docs/discover',
        permanent: true,
       },        
      {
        source: '/docs/coin/:slug*',
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
        destination: '/docs/tokens/faq',
        permanent: true,
       },

      {
        source: '/docs/tokens/integrating-tokens/faq',
        destination: '/docs/tokens/faq',
        permanent: true,
       },
      {
        source: '/docs/token/erc20-bep20',
        destination: '/docs/tokens/evm-chains-tokens',
        permanent: true,
       },
      {
        source: '/docs/token/erc20',
        destination: '/docs/tokens/evm-chains-tokens',
        permanent: true,
       },
      {
        source: '/docs/token/evm-chains-tokens',
        destination: '/docs/tokens/evm-chains-tokens',
        permanent: true,
       },

      {
        source: '/docs/tokens/integrating-tokens/evm-chains-tokens',
        destination: '/docs/tokens/evm-chains-tokens',
        permanent: true,
       },
      {
        source: '/docs/tokens/integrating-tokens/asa',
        destination: '/docs/tokens/asa',
        permanent: true,
       },
      {
        source: '/docs/token/asa',
        destination: '/docs/tokens/asa',
        permanent: true,
       },
      {
        source: '/docs/token/trc',
        destination: '/docs/tokens/integrating-tokens/trc',
        permanent: true,
       },
      {
        source: '/docs/tokens/integrating-tokens/trcc',
        destination: '/docs/tokens/trc',
        permanent: true,
       },
      {
        source: '/docs/token/eip712-messages',
        destination: '/docs/clear-signing/nft',
        permanent: true,
       },
      {
        source: '/docs/tokens/eip712-messages',
        destination: '/docs/clear-signing/nft',
        permanent: true,
       },
      {
        source: '/docs/exchange/swap/glossary',
        destination: '/docs/exchange/glossary',
        permanent: true,
       },
      {
        source: '/docs/swap/:slug*',
        destination: '/docs/exchange/swap',
        permanent: true,
       },
      {
        source: '/docs/exchange/integration/:slug*',
        destination: '/docs/exchange',
        permanent: true,
       },                                                                                                                                                                                                                                                           
    ];
  },
}
