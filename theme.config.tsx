import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { Copy } from "./components/features/copy-page-url";
import { Footer } from "./components/Homepage/Footer";

const config: DocsThemeConfig = {
  banner: {
    key: "Developer Kits",
    content: (
      <a href="https://developers.ledger.com/docs/news" target="_blank">
        🎉 New developers kits released. Read more →
      </a>
    ),
  },
  project: {
    link: "https://github.com/LedgerHQ/developer-portal",
  },
  chat: {
    link: "https://discord.gg/Ledger",
  },
  docsRepositoryBase: "https://github.com/LedgerHQ/developer-portal/blob/main",
  footer: {
    content: "Ledger Developer Portal",
    component: () => (
      <>
        {/* Your footer code */}
        <Footer />
      </>
    ),
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    extraContent: () => {
      return <Copy />;
    },
  },
  head: function Head() {
    const { asPath } = useRouter();
    const config = useConfig();

    const pageTitle = config.frontMatter.title || config.title;

    const siteTitle = "Ledger Developer Portal";
    const title = pageTitle ? `${pageTitle} - ${siteTitle}` : siteTitle;

    const url = `https://developers.ledger.com${asPath}`;
    const description =
      "All the tools and documentation," + "to integrate with Ledger";

    return (
      <>
        {/* OneTrust Cookies Consent Notice start for developers.ledger.com */}
        <script 
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  
          type="text/javascript" 
          charSet="UTF-8" 
          data-domain-script="01951e62-1715-7295-9348-db82fa9a7d1f" >
        </script>
        <script type="text/javascript"> function OptanonWrapper() { }</script>
        {/* OneTrust Cookies Consent Notice end for developers.ledger.com */}
        
        <title>{title}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content={description} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/homepage/bg-interaction.jpg" />
        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href={url} />

        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicons/android-chrome-512x512.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </>
    );
  },
  color: {
    hue: 35,
  },
  nextThemes: {
    forcedTheme: "dark",
  },
  darkMode: false,
  logo: (
    <>
      <svg
        width="37"
        height="32"
        viewBox="0 0 37 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 22.9137V32H13.9173V29.9849H2.02778V22.9137H0ZM34.9722 22.9137V29.9849H23.0827V31.9995H37V22.9137H34.9722ZM13.9375 9.08631V22.9132H23.0827V21.0961H15.9653V9.08631H13.9375ZM0 0V9.08631H2.02778V2.01461H13.9173V0H0ZM23.0827 0V2.01461H34.9722V9.08631H37V0H23.0827Z"
          fill="currentColor"
        />
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        Developer Portal
      </span>
    </>
  ),
};

export default config;
