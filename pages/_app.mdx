import '../style/styles.css'
import Script from "next/script";
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  }) {
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

return (

<>
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>

  {/* Google Tag Manager Header */}
  {" "}

  <Script
    id="google-tag-manager-header"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      (function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.setAttributeNode(d.createAttribute('data-ot-ignore'));
      j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', '${GTM_ID}');
      `,
    }}
  />
  {/* End Google Tag Manager Haeader */}

  {/* Google Tag Manager Body (no script) */}
  <noscript 
    id="google-tag-manager" 
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `,
    }}
  />
  {/* End Google Tag Manager Body (no script) */}
</>
)
}

