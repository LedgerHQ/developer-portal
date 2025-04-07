export default {
  index: {
    title: 'Home',
    display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  'dev-tracks': {
    type: 'page',
    title: 'Dev Tracks',
    href: '/dev-tracks/quickstart'
  },
  docs: {
    type: 'menu',
    title: 'Documentation',
    items: { 
      'news': {
        type: 'page',
        title: "What's new?",
        href: '/docs/news'
      },
      'device-app': {
        title: 'Device App',
        href: '/docs/device-app/getting-started'
      },
      'device-interaction': {
        title: 'Device Interaction',
        href: '/docs/device-interaction/getting-started'
      },
      'ledger-live': {
        title: 'Ledger Live',
        href: '/docs/ledger-live/introduction'
      },
      'clear-signing': {
        title: 'Clear Signing',
        href: '/docs/clear-signing/introduction'
      }
    }
  }
}
