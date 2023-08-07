import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'



const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/LedgerHQ/developer-portal-v2',
  },
  chat: {
    link: 'https://ledgeropen.herokuapp.com/pro',
  },
  docsRepositoryBase: 'https://github.com/LedgerHQ/developer-portal-v2/blob/main',
  footer: {
    text: 'Ledger Developer Portal',
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1
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
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Ledger'
    }
  },
  primaryHue: { dark: 120, light: 270 },
  logo: (
    <>
      <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 22.9137V32H13.9173V29.9849H2.02778V22.9137H0ZM34.9722 22.9137V29.9849H23.0827V31.9995H37V22.9137H34.9722ZM13.9375 9.08631V22.9132H23.0827V21.0961H15.9653V9.08631H13.9375ZM0 0V9.08631H2.02778V2.01461H13.9173V0H0ZM23.0827 0V2.01461H34.9722V9.08631H37V0H23.0827Z" fill="currentColor"/>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Developer Portal
      </span>
    </>
  ),
  faviconGlyph: '💻',
  feedback: {
    content: 'Question? Give us feedback '
  }
}

export default config
