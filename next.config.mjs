import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({
  // Support trailing slashes properly
  trailingSlash: false,
  
  redirects: () => [
    {
      source: "/:path(discord|discord-pro|contact)",
      destination: "https://discord.gg/Ledger",
      permanent: true,
      statusCode: 308
    },
    
    // Main navigation redirects (high priority)
    {
      source: "/docs",
      destination: "/docs/dev-tracks/quickstart",
      permanent: true,
    },
    {
      source: "/docs/",
      destination: "/docs/dev-tracks/quickstart",
      permanent: true,
    },
    {
      source: "/dev-tracks",
      destination: "/dev-tracks/quickstart",
      permanent: true,
    },
    {
      source: "/dev-tracks/",
      destination: "/dev-tracks/quickstart",
      permanent: true,
    },
    {
      source: "/clear-signing",
      destination: "/docs/clear-signing/getting-started",
      permanent: true,
    },
    {
      source: "/clear-signing/",
      destination: "/docs/clear-signing/getting-started",
      permanent: true,
    },
    {
      source: "/discover",
      destination: "/docs/ledger-live/discover/getting-started",
      permanent: true,
    },
    {
      source: "/discover/:slug*",
      destination: "/docs/ledger-live/discover/getting-started",
      permanent: true,
    },
    
    // Dev tracks redirects (more specific before more general)
    {
      source: "/docs/dev-tracks/:slug*",
      destination: "/dev-tracks/:slug*",
      permanent: true,
    },
    {
      source: "/docs/section",
      destination: "/docs/dev-tracks/quickstart",
      permanent: true,
    },
    {
      source: "/docs/sections",
      destination: "/docs/dev-tracks/quickstart",
      permanent: true,
    },
    {
      source: "/docs/dev-journey/:slug*",
      destination: "/docs/dev-tracks/quickstart",
      permanent: true,
    },
    
    // Clear signing redirects - most specific first
    {
      source: "/docs/clear-signing/eip712-messages",
      destination: "/docs/clear-signing/erc7730/eip712-messages",
      permanent: true,
    },
    {
      source: "/docs/token/eip712-messages",
      destination: "/docs/clear-signing/erc7730/eip712-messages",
      permanent: true,
    },
    {
      source: "/docs/clear-signing/eip712",
      destination: "/docs/clear-signing/erc7730/process",
      permanent: true,
    },
    {
      source: "/docs/erc7730",
      destination: "/docs/clear-signing/erc7730/process",
      permanent: true,
    }, 
    {
      source: "/docs/clear-signing/nft",
      destination: "/docs/clear-signing/tokens",
      permanent: true,
    },
    {
      source: "/docs/clear-signing",
      destination: "/docs/clear-signing/getting-started",
      permanent: true,
    },
    {
      source: "/docs/clear-signing/erc7730",
      destination: "/docs/clear-signing/erc7730/process",
      permanent: true,
    },
    
    // Device app redirects - most specific paths first
    {
      source: "/docs/device-app/develop/ui/flows/display-management-flow",
      destination: "/docs/device-app/integration/design-guidelines/display-management/flows",
      permanent: true,
    },
    {
      source: "/docs/device-app/develop/ui/flows/advanced-display-management",
      destination: "/docs/device-app/integration/design-guidelines/display-management/advanced",
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
    {
      source: "/docs/device-app/develop/quickstart",
      destination: "/docs/device-app/beginner/vscode-extension",
      permanent: true,
    },
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
      source: "/docs/device-app/develop/code/clone",
      destination: "/docs/device-app/integration/how-to/clone",
      permanent: true,
    },
    {
      source: "/docs/device-app/develop/code/plugin",
      destination: "/docs/device-app/integration/how-to/plugin",
      permanent: true,
    },
    {
      source: "/docs/device-app/develop/code/plugin/:slug*",
      destination: "/docs/device-app/integration/how-to/plugin",
      permanent: true,
    },
    {
      source: "/docs/device-app/develop/tools",
      destination: "/docs/device-app/references/tools",
      permanent: true,
    },
    {
      source: "/docs/plugin",
      destination: "/docs/device-app/integration/how-to/plugin",
      permanent: true,
    },
    {
      source: "/docs/plugin/:slug*",
      destination: "/docs/device-app/integration/how-to/plugin",
      permanent: true,
    },
    
    // Device app delivery redirects
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
      source: "/docs/device-app/deliver/process",
      destination: "/docs/device-app/submission-process/process",
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
    {
      source: "/docs/device-app/deliver",
      destination: "/docs/device-app/references/tools",
      permanent: true,
    },
    {
      source: "/docs/device-app/develop",
      destination: "/docs/device-app/integration/requirements/development",
      permanent: true,
    },
    
    // Device app wildcard redirects (less specific, so placed after specific ones)
    {
      source: "/docs/device-app/develop/:slug*",
      destination: "/docs/device-app/getting-started",
      permanent: true,
    },
    {
      source: "/docs/device-app/introduction",
      destination: "/docs/device-app/getting-started",
      permanent: true,
    },
    {
      source: "/docs/device-app/introduction/:slug*",
      destination: "/docs/device-app/getting-started",
      permanent: true,
    },
    {
      source: "/docs/device-app/architecture/:slug*",
      destination: "/docs/device-app/getting-started",
      permanent: true,
    },
    {
      source: "/docs/nano-app/:slug*",
      destination: "/docs/device-app/getting-started",
      permanent: true,
    },
    {
      source: "/docs/embedded-app/:slug*",
      destination: "/docs/device-app/getting-started",
      permanent: true,
    },
    {
      source: "/docs/device-app",
      destination: "/docs/device-app/getting-started",
      permanent: true,
    },
    
    // Device interaction redirects
    {
      source: "/docs/device-interaction/integration/ldmk",
      destination: "/docs/device-interaction/beginner/init_dmk",
      permanent: true,
    },
    {
      source: "/docs/:path(transport|connect|dapp-connect-kit)/:slug*",
      destination: "/docs/device-interaction/getting-started",
      permanent: true,
    },
    {
      source: "/docs/connectivity/:path(connect-kit|ledgerJS)/:slug*",
      destination: "/docs/device-interaction/getting-started",
      permanent: true,
    },
    
    // Ledger Live redirects
    {
      source: "/docs/wallet-api/:slug*",
      destination: "/docs/ledger-live/discover/integration/wallet-api/introduction",
      permanent: true,
    },
    {
      source: "/docs/discover",
      destination: "/docs/ledger-live/discover/getting-started",
      permanent: true,
    },
    {
      source: "/docs/discover/:slug*",
      destination: "/docs/ledger-live/discover/getting-started",
      permanent: true,
    },
    {
      source: "/docs/:path(live-app|dapp|non-dapp)/:slug*",
      destination: "/docs/ledger-live/discover/getting-started",
      permanent: true,
    },
    {
      source: "/APIs/:slug*",
      destination: "/docs/ledger-live/discover/getting-started",
      permanent: true,
    },
    
    // Blockchain/tokens redirects
    {
      source: "/docs/tokens",
      destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
      permanent: true,
    },
    {
      source: "/docs/tokens/evm-chains-tokens",
      destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
      permanent: true,
    },
    {
      source: "/docs/tokens/integrating-tokens",
      destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
      permanent: true,
    },
    {
      source: "/docs/tokens/:slug*",
      destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
      permanent: true,
    },
    {
      source: "/docs/token/:slug*",
      destination: "/docs/ledger-live/accounts/integration/tokens/evm-chains-tokens",
      permanent: true,
    },
    {
      source: "/docs/blockchain",
      destination: "/docs/ledger-live/accounts/getting-started",
      permanent: true,
    },
    {
      source: "/docs/blockchain/:slug*",
      destination: "/docs/ledger-live/accounts/getting-started",
      permanent: true,
    },
    {
      source: "/docs/coin/:slug*",
      destination: "/docs/ledger-live/accounts/getting-started",
      permanent: true,
    },
    
    // Exchange redirects
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
  ],
});