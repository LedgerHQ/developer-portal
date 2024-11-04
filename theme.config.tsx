import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { Copy } from './components/features/copy-page-url'
import DocslyClient from "./components/DocslyClient";
import AuthButton from "./auth-button"
import { Footer } from "./components/Homepage/Footer"


const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/LedgerHQ/developer-portal',
  },
  chat: {
    link: 'https://discord.gg/Ledger',
  },
  docsRepositoryBase: 'https://github.com/LedgerHQ/developer-portal/blob/main',
  footer: {
    content: 'Ledger Developer Portal',
    component: () => (
      <>
        {/* Your footer code */}
        <Footer />
        <DocslyClient />
      </>
    ),
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    extraContent: () => {
      return (
          <Copy />
        );
    }
  },
  head: function Head() {
    const { asPath } = useRouter()
    const config = useConfig()

    const pageTitle = config.frontMatter.title || config.title

    const siteTitle = "Ledger Developer Portal"
    const title = pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle
    
    const url = `https://developers.ledger.com${asPath}`
    const description = 
      "All the tools and documentation," +
      "to integrate with Ledger"
 
    return (
      <>
        <title>{title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={description} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/homepage/bg-interaction.jpg" />
        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="https://developers.ledger.com"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </>
    )
  },
  color: { 
    hue: 35
  },
  nextThemes: {
    forcedTheme: 'dark'
  },
  darkMode: false,
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
  navbar: {
    extraContent: (
      <AuthButton/>
    )
  },
}

export default config
