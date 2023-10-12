export type FooterLinkType = {label: string, link: string}
export type FooterBlockType = {name: string, links: FooterLinkType[]}
export type FooterDataType = FooterBlockType[]

export const FooterData: FooterDataType = [
  {
    name: "Products",
    links: [
      {
        label: "Ledger Nano Stax",
        link: "https://shop.ledger.com/pages/ledger-stax"
      },
      {
        label: "Ledger Nano X",
        link: "https://shop.ledger.com/pages/ledger-nano-x"
      },
      {
        label: "Ledger Nano S Plus",
        link: "https://shop.ledger.com/pages/ledger-nano-s-plus"
      },
      {
        label: "Ledger Backup pack",
        link: "https://shop.ledger.com/products/ledger-backup-pack"
      },
      {
        label: "Compare our devices",
        link: "https://shop.ledger.com/pages/hardware-wallets-comparison"
      },
      {
        label: "Bundles",
        link: "https://shop.ledger.com/#category-bundle"
      },
      {
        label: "Accessories",
        link: "https://shop.ledger.com/#category-accessories"
      },
      {
        label: "All products",
        link: "https://shop.ledger.com/"
      },
      {
        label: "Downloads",
        link: "https://www.ledger.com/ledger-live"
      },
    ]
  },
  {
    name: "About",
    links: [
      {
        label: "Our vision",
        link: "https://www.ledger.com/blog/we-are-ledger-a-brand-vision"
      },
      {
        label: "Ledger Academy",
        link: "https://www.ledger.com/academy"
      },
      {
        label: "The company",
        link: "https://www.ledger.com/the-company"
      },
      {
        label: "The people",
        link: "https://www.ledger.com/the-people-behind-ledger"
      },
      {
        label: "In the news",
        link: "https://www.ledger.com/in-the-news"
      },
      {
        label: "Blog",
        link: "https://www.ledger.com/blogs"
      },
      {
        label: "Join Us",
        link: "https://www.ledger.com/join-us"
      },
    ]
  },
  {
    name: "For business",
    links: [
      {
        label: "Ledger Enterprise Solutions",
        link: "https://enterprise.ledger.com/"
      },
    ]
  },
  {
    name: "Get Started",
    links: [
      {
        label: "Start using Ledger devices",
        link: "https://www.ledger.com/start"
      },
      {
        label: "Compatible wallets and services",
        link: "https://www.ledger.com/ledger-wallets-and-services"
      },
      {
        label: "How to buy Bitcoin",
        link: "https://www.ledger.com/buy-bitcoin"
      },
    ]
  },
  {
    name: "See also",
    links: [
      {
        label: "Support",
        link: "https://support.ledger.com/hc"
      },
      {
        label: "Bounty Program",
        link: "https://donjon.ledger.com/bounty/"
      },
      {
        label: "Retailers",
        link: "https://www.ledger.com/reseller"
      },
      {
        label: "Affiliates",
        link: "https://www.ledgerwallet.com/affiliates/"
      },
      {
        label: "Status",
        link: "https://status.ledger.com/"
      },
      {
        label: "Developers",
        link: "https://developers.ledger.com/"
      },
    ]
  },
  {
    name: "Crypto Assets",
    links: [
      {
        label: "Bitcoin",
        link: "https://www.ledger.com/coin/wallet/bitcoin"
      },
      {
        label: "XRP",
        link: "https://www.ledger.com/coin/wallet/ripple"
      },
      {
        label: "Ethereum",
        link: "https://www.ledger.com/coin/wallet/ethereum"
      },
      {
        label: "Bitcoin Cash",
        link: "https://www.ledger.com/coin/wallet/bitcoin-cash"
      },
      {
        label: "EOS",
        link: "https://www.ledger.com/coin/wallet/eos"
      },
      {
        label: "Stellar",
        link: "https://www.ledger.com/coin/wallet/stellar"
      },
      {
        label: "See all assets",
        link: "https://www.ledger.com/supported-crypto-assets"
      },
    ]
  },
  {
    name: "Legal",
    links: [
      {
        label: "Sales Terms and Conditions",
        link: "https://shop.ledger.com/pages/terms-and-conditions"
      },
      {
        label: "Terms of Use and Disclaimer",
        link: "https://shop.ledger.com/pages/website-terms-of-use"
      },
      {
        label: "Privacy Policy",
        link: "https://www.ledger.com/privacy-policy"
      },
      {
        label: "Cookie Policy",
        link: "https://shop.ledger.com/pages/cookie-policy"
      },
      {
        label: "Other",
        link: "https://shop.ledger.com/pages/other"
      },
    ]
  },
]