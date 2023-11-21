const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});



module.exports = {
  ...withNextra(),
  async redirects() {
    return [
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
        destination: '/docs/exchange/native-integration',
        permanent: true,
       },
      {
        source: '/docs/swap/flow',
        destination: '/docs/exchange/native-integration/flow',
        permanent: true,
       },
      {
        source: '/docs/swap/howto',
        destination: '/docs/exchange/native-integration/howto/requirements',
        permanent: true,
       },
      {
        source: '/docs/swap/howto/providers-endpoints',
        destination: '/docs/exchange/native-integration/howto/providers-endpoints',
        permanent: true,
       },  
      {
        source: '/docs/swap/howto/providers-liveapp',
        destination: '/docs/exchange/native-integration/howto/providers-liveapp',
        permanent: true,
       },  
      {
        source: '/docs/swap/howto/ledger-exchange-sdk',
        destination: '/docs/exchange/native-integration/howto/ledger-walletAPI-sdk',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/start-here',
        destination: '/docs/exchange/embedded-app/start-here',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/quote',
        destination: '/docs/exchange/embedded-app/flow-breakdown/quote',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/partner-live-app',
        destination: '/docs/exchange/embedded-app/flow-breakdown/partner-live-app',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/device-flow',
        destination: '/docs/exchange/embedded-app/flow-breakdown/device-flow',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/transaction-status',
        destination: '/docs/exchange/embedded-app/flow-breakdown/transaction-status',
        permanent: true,
       },
      {
        source: '/docs/swap/live-app/edge-cases',
        destination: '/docs/exchange/embedded-app/flow-breakdown/edge-cases',
        permanent: true,
       },                                                                                                                                                                                                                                                              
    ];
  },
}
