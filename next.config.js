const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});



module.exports = {
  ...withNextra(),
  async redirects() {
    return [
      {
        source: '/docs/embedded-app/introduction',
        destination: '/docs/device-app',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/required-skills',
        destination: '/docs/device-app/getting-started/required-skills',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/external-dev',
        destination: '/docs/device-app/getting-started/external-devs',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/release-requirements',
        destination: '/docs/device-app/submission/requirements',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/security-audit',
        destination: '/docs/device-app/submission/security-audit',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/submission-form',
        destination: '/docs/device-app/submission/submission-form',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/maintenance',
        destination: '/docs/device-app/submission/maintenance',
        permanent: true,
      },
      {
        source: '/docs/embedded-app/release-flow',
        destination: '/docs/device-app/getting-started/release-flow',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/framework',
        destination: '/docs/device-app/quickstart/framework',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/build-load',
        destination: '/docs/device-app/quickstart/build-load',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/clone-intro',
        destination: '/docs/device-app/clones',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/eth-app-update',
        destination: '/docs/device-app/clones/eth-app-update',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/eth-clones',
        destination: '/docs/device-app/clones/eth-clones',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-porting',
        destination: '/docs/device-app/coding-guidelines/stax-porting',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/global-architecture',
        destination: '/docs/device-app/coding-guidelines/global-architecture',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/secure-app',
        destination: '/docs/device-app/coding-guidelines/secure-app',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/blind-signing',
        destination: '/docs/device-app/coding-guidelines/blind-signing',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/persistent-storage',
        destination: '/docs/device-app/coding-guidelines/memory/persistent-storage',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/position-independent-code',
        destination: '/docs/device-app/coding-guidelines/memory/position-independent-code',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/memory-alignment',
        destination: '/docs/device-app/coding-guidelines/memory/memory-alignment',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/interaction-bolos-apps',
        destination: '/docs/device-app/coding-guidelines/io/interaction-bolos-apps',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/application-structure',
        destination: '/docs/device-app/coding-guidelines/io/interaction-bolos-apps',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/display-management-flow',
        destination: '/docs/device-app/coding-guidelines/flows/display-management-flow',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/advanced-display-management',
        destination: '/docs/device-app/coding-guidelines/flows/advanced-display-management',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/design-requirements',
        destination: '/docs/device-app/coding-guidelines/ledger-nano-display/design-requirements',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/display-management-design',
        destination: '/docs/device-app/coding-guidelines/ledger-nano-display/display-management-design',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/low-level-display-management',
        destination: '/docs/device-app/coding-guidelines/ledger-nano-display/low-level-display-management',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-home',
        destination: '/docs/device-app/coding-guidelines/ledger-stax-display/home',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-info-settings',
        destination: '/docs/device-app/coding-guidelines/ledger-stax-display/info-settings',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-transactions',
        destination: '/docs/device-app/coding-guidelines/ledger-stax-display/transactions',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-address',
        destination: '/docs/device-app/coding-guidelines/ledger-stax-display/address',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-messages',
        destination: '/docs/device-app/coding-guidelines/ledger-stax-display/messages',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/stax-graphic-lib',
        destination: '/docs/device-app/coding-guidelines/ledger-stax-display/graphic-lib',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/icons',
        destination: '/docs/device-app/deliverables/icons',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/ui-flow-video',
        destination: '/docs/device-app/deliverables/ui-flow-video',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/documentation-requirements',
        destination: '/docs/device-app/deliverables/documentation-requirements',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/documentation-requirements',
        destination: '/docs/device-app/deliverables/support-requirements',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/support-requirements',
        destination: '/docs/device-app/deliverables/marketing-requirements',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/marketing-requirements',
        destination: '/docs/device-app/deliverables/marketing-requirements',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/warranty-disclaimer',
        destination: '/docs/device-app/deliverables/warranty-disclaimer',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-introduction',
        destination: '/docs/device-app/psd',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-masterseed',
        destination: '/docs/device-app/psd/masterseed',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-keys',
        destination: '/docs/device-app/psd/keys',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-applications',
        destination: '/docs/device-app/psd/applications',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/psd-application-isolation',
        destination: '/docs/device-app/psd/application-isolation',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-introduction',
        destination: '/docs/device-app/bolos',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-features',
        destination: '/docs/device-app/bolos/features',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-hardware-architecture',
        destination: '/docs/device-app/bolos/hardware-architecture',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/bolos-application-environment',
        destination: '/docs/device-app/bolos/application-environment',
        permanent: true,
       },
      {
        source: '/docs/speculos/:slug',
        destination: '/docs/device-app/tools/speculos',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/printf',
        destination: '/docs/device-app/tools/printf',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/pin-bypass',
        destination: '/docs/device-app/tools/pin-bypass',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/ledgerctl',
        destination: '/docs/device-app/tools/ledgerctl',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/faq',
        destination: '/docs/device-app/faq',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/troubleshooting',
        destination: '/docs/device-app/coding-guidelines/troubleshooting',
        permanent: true,
       },
      {
        source: '/docs/embedded-app/version',
        destination: '/docs/device-app/getting-started/version',
        permanent: true,
       },                                                                                         
    ];
  },
}
