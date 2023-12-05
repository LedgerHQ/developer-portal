export type FooterLinkType = {label: string, link: string, scrollLink: string | null}
export type FooterBlockType = {name: string, links: FooterLinkType[]}
export type FooterDataType = FooterBlockType[]

export const FooterData: FooterDataType = [
  {
    name: "Ledger Developer Portal",
    links: [
      {
        label: "Home",
        link: "https://shop.ledger.com/pages/ledger-stax",
        scrollLink: "home",
      },
      {
        label: "Docs",
        link: "/docs/sections",
        scrollLink: null,
      },
      {
        label: "Discord",
        link: "https://ledgeropen.herokuapp.com/pro",
        scrollLink: null,
      },
    ]
  },
  {
    name: "Legal",
    links: [
      {
        label: "Terms and Conditions",
        link: "https://shop.ledger.com/pages/terms-and-conditions",
        scrollLink: null,
      },
      {
        label: "Ledger's privacy policy",
        link: "https://www.ledger.com/privacy-policy",
        scrollLink: null,
      },
      {
        label: "Cookie statement",
        link: "https://shop.ledger.com/pages/cookie-policy",
        scrollLink: null,
      },
    ]
  },
]