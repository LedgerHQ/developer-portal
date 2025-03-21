import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

// Device App related redirects
const deviceAppRedirects = [
  // Multiple paths to device-app/getting-started consolidated
  {
    source: "/(?:docs\\/nano-app|docs\\/embedded-app|docs\\/device-app(?:\\/introduction)?)/:slug*",
    destination: "/docs/device-app/getting-started",
    permanent: true,
  },
  // Architecture and develop catch-all redirects
  {
    source: "/docs/device-app/(?:develop|architecture)/:slug*",
    destination: "/docs/device-app/getting-started",
    permanent: true,
    has: [
      {
        type: 'header',
        key: 'x-not-specific-paths',
        value: '(?!)'
      }
    ]
  },
  // Plugin related redirects consolidated
  {
    source: "/(?:docs\\/plugin|docs\\/device-app\\/develop\\/code\\/plugin)/:slug*",
    destination: "/docs/device-app/develop/code/plugin",
    permanent: true,
  },
  // Specific develop paths
  {
    source: "/docs/device-app/develop/code/c",
    destination: "/docs/device-app/integration/how-to/c-boilerplate",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop/code/rust",
    destination: "/docs/device-app/integration/how-to/rust-boilerplate",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop/code/plugin",
    destination: "/docs/device-app/integration/how-to/plugin",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop/code/clone",
    destination: "/docs/device-app/integration/how-to/clone",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop",
    destination: "/docs/device-app/integration/requirements/development",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop/quickstart",
    destination: "/docs/device-app/beginner/vscode-extension",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop/requirements/security",
    destination: "/docs/device-app/integration/requirements/security",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop/requirements/development",
    destination: "/docs/device-app/integration/requirements/development",
    permanent: true,
  },
  // UI flows consolidated
  {
    source: "/docs/device-app/develop/ui/flows/:type(?:display-management-flow|advanced-display-management)",
    destination: "/docs/device-app/integration/design-guidelines/display-management/:type",
    permanent: true,
  },
  {
    source: "/docs/device-app/develop/tools",
    destination: "/docs/device-app/references/tools",
    permanent: true,
  },
  // Deliver paths
  {
    source: "/docs/device-app/deliver",
    destination: "/docs/device-app/references/tools",
    permanent: true,
  },
  {
    source: "/docs/device-app/deliver/process",
    destination: "/docs/device-app/submission-process/process",
    permanent: true,
  },
  {
    source: "/docs/device-app/deliver/deliverables/:slug*",
    destination: "/docs/device-app/submission-process/deliverables/:slug*",
    permanent: true,
  },
  {
    source: "/docs/device-app/deliver/deliverables",
    destination: "/docs/device-app/submission-process/deliverables/security-audit",
    permanent: true,
  },
  {
    source: "/docs/device-app/deliver/submission-form",
    destination: "/docs/device-app/submission-process/submission-form",
    permanent: true,
  },
  {
    source: "/docs/device-app/deliver/maintenance",
    destination: "/docs/device-app/submission-process/maintenance",
    permanent: true,
  },
  {
    source: "/docs/device-app/deliver/partners",
    destination: "/docs/device-app/getting-started#need-to-hire-a-team-to-develop-your-device-app",
    permanent: true,
  },
];

// Device Interaction related redirects
const deviceInteractionRedirects = [
  // All device interaction paths consolidated
  {
    source: "/docs/(?:transport|connect|dapp-connect-kit|connectivity\\/connect-kit|connectivity\\/ledgerJS)/:slug*",
    destination: "/docs/device-interaction/getting-started",
    permanent: true,
  },
  {
    source: "/docs/device-interaction/integration/ldmk",
    destination: "/docs/device-interaction/beginner/init_dmk",
    permanent: true,
  },
];

// Ledger Live related redirects
const ledgerLiveRedirects = [
  // All ledger live discover paths consolidated
  {
    source: "/(?:discover|docs\\/discover|docs\\/live-app|docs\\/dapp|docs\\/non-dapp|APIs)/:slug*",
    destination: "/docs/ledger-live/discover/getting-started",
    permanent: true,
  },
  // All blockchain/coin paths consolidated
  {
    source: "/docs/(?:coin|blockchain)/:slug*",
    destination: "/docs/ledger-live/accounts/getting-started",
    permanent: true,
  },
  {
    source: "/docs/blockchain",
    destination: "/docs/ledger-live/accounts/getting-started",
    permanent: true,
  },
  {
    source: "/docs/wallet-api/:slug*",
    destination: "/docs/ledger-live/discover/integration/wallet-api/introduction",
    permanent: true,
  },
];

// Token related redirects
const tokenRedirects = [
  // All token paths consolidated
  {
    source: "/docs/tokens?/:slug*",
    destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
    permanent: true,
  },
  {
    source: "/docs/tokens",
    destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
    permanent: true,
  },
];

// Exchange related redirects
const exchangeRedirects = [
  {
    source: "/docs/exchange/swap/glossary",
    destination: "/docs/exchange/glossary",
    permanent: true,
  },
  {
    source: "/docs/swap/:slug*",
    destination: "/docs/exchange/swap",
    permanent: true,
  },
  {
    source: "/docs/exchange/swap",
    destination: "/docs/ledger-live/exchange/swap",
    permanent: true,
  },
  {
    source: "/docs/exchange/integration/:slug*",
    destination: "/docs/ledger-live/exchange",
    permanent: true,
  },
  {
    source: "/docs/exchange/:slug*",
    destination: "/docs/ledger-live/exchange/:slug*",
    permanent: true,
  },
];

// NFT Display related redirects
const nftDisplayRedirects = [
  // Redirect from metadata-tool to optimized-images
  // This is needed as the Ledger Stax Metadata tool is no longer available
  {
    source: "/docs/nft-display/metadata-tool",
    destination: "/docs/nft-display/optimized-images",
    permanent: true,
  },
  // Add other NFT Display related redirects here as needed
];

// Clear Signing related redirects
const clearSigningRedirects = [
  // ERC7730 redirects consolidated
  {
    source: "/docs/(?:erc7730|clear-signing\\/erc7730)",
    destination: "/docs/clear-signing/erc7730/process",
    permanent: true,
  },
  // EIP712 messages redirects consolidated
  {
    source: "/docs/(?:token\\/eip712-messages|clear-signing\\/eip712-messages)",
    destination: "/docs/clear-signing/erc7730/eip712-messages",
    permanent: true,
  },
  {
    source: "/docs/clear-signing/eip712",
    destination: "/docs/clear-signing/erc7730/process",
    permanent: true,
  },
  {
    source: "/docs/clear-signing/nft",
    destination: "/docs/clear-signing/tokens",
    permanent: true,
  },
  // Clear-signing paths consolidated
  {
    source: "/(?:docs\\/)?clear-signing",
    destination: "/docs/clear-signing/getting-started",
    permanent: true,
  },
];

// Miscellaneous redirects
const miscRedirects = [
  {
    source: "/docs/dev-tracks/:slug*",
    destination: "/dev-tracks/:slug*",
    permanent: true,
  },
  {
    source: "/dev-tracks",
    destination: "/dev-tracks/quickstart",
    permanent: true,
  },
  // Discord related redirects consolidated
  {
    source: "/(?:discord|discord-pro|contact)",
    destination: "https://discord.gg/Ledger",
    permanent: true,
  },
  // Dev tracks/sections redirects consolidated
  {
    source: "/docs/(?:section|dev-journey|sections)",
    destination: "/docs/dev-tracks/quickstart",
    permanent: true,
  },
  {
    source: "/docs",
    destination: "/docs/dev-tracks/quickstart",
    permanent: true,
  },
];

// Key high-traffic rewrites for better performance
// These paths will be rewritten internally without changing the URL in the browser
const highTrafficRewrites = [
  // Main entry points
  {
    source: "/docs",
    destination: "/docs/dev-tracks/quickstart",
  },
  {
    source: "/dev-tracks",
    destination: "/dev-tracks/quickstart",
  },
  // Popular device app paths
  {
    source: "/docs/device-app",
    destination: "/docs/device-app/getting-started",
  },
  {
    source: "/docs/plugin",
    destination: "/docs/device-app/develop/code/plugin",
  },
  // Popular ledger live paths
  {
    source: "/discover",
    destination: "/docs/ledger-live/discover/getting-started",
  },
  {
    source: "/docs/tokens",
    destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
  },
  // Clear signing (likely high traffic based on its prominence)
  {
    source: "/clear-signing",
    destination: "/docs/clear-signing/getting-started",
  },
  // Social links
  {
    source: "/discord",
    destination: "https://discord.gg/Ledger",
  },
];

export default withNextra({
  // Keep all redirects for SEO and compatibility
  redirects: () => [
    ...deviceAppRedirects,
    ...deviceInteractionRedirects,
    ...ledgerLiveRedirects,
    ...tokenRedirects,
    ...exchangeRedirects,
    ...nftDisplayRedirects,
    ...clearSigningRedirects,
    ...miscRedirects,
  ],
  
  // Add rewrites for high-traffic paths
  // Rewrites happen internally without changing the URL,
  // providing a better user experience for frequently accessed paths
  rewrites: () => highTrafficRewrites,
});