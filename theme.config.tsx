import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/LedgerHQ/developer-portal-v2',
  footer: {
    text: 'Nextra Docs Template',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://developers.ledger.com/' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Developers'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Integrate your project with Ledger'}
        />
      </>
    )
  },
  primaryHue: { dark: 120; light: 270 }
}

export default config
