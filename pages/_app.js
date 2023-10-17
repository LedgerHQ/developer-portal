import '../style/styles.css'
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
  gtmId: 'GTM-TRV7TV5M'
}

if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}