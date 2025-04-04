import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Ajout des types pour DocsBotAI
declare global {
  interface Window {
    DocsBotAI: {
      init: (config: any) => Promise<any>;
      mount: (config: any) => Promise<any>;
    } | Record<string, any>;
  }
}

const ChatPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { query } = router.query;

    if (typeof window !== 'undefined') {
      // Initialisation de DocsBotAI
      window.DocsBotAI = window.DocsBotAI || {};
      window.DocsBotAI.init = function (e: any): Promise<void> {
        return new Promise<void>((t, r) => {
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = true;
          n.src = "https://widget.docsbot.ai/chat.js";
          let o = document.getElementsByTagName("script")[0];
          if (o.parentNode) {
            o.parentNode.insertBefore(n, o);
          }
          n.addEventListener("load", () => {
            Promise.all([
              new Promise<void>((t, r) => { 
                window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r) 
              }), 
              function e(t: string): Promise<Element | null> { 
                return new Promise<Element | null>(e => { 
                  if (document.querySelector(t)) return e(document.querySelector(t)); 
                  let r = new MutationObserver(n => { 
                    if (document.querySelector(t)) {
                      e(document.querySelector(t));
                      r.disconnect();
                    }
                  }); 
                  r.observe(document.body, { childList: true, subtree: true });
                });
              }("#docsbotai-root")
            ]).then(() => t()).catch(r);
          });
          n.addEventListener("error", (e) => { r(e.message); });
        });
      };

      // Initialisation avec votre CSS personnalisé qui fonctionne
      window.DocsBotAI.init({
        id: 'y6yhkqNYg3oA2868fs0k/2c8nTqVZnzyql7x9pFCC',
        options: {
          color: "#d4a0ff",
          hideHeader: true,
          customCSS: `
          .docsbot-chat-inner-container {
            background-color:black !important;
            border: none !important;
            border-radius: 15px;
          }
          .docsbot-chat-btn-send{
            background-color: black !important;
          }
          .docsbot-chat-btn-send:disabled {
            opacity: 1 !important;
          }
          .docsbot-chat-btn-send {
            padding-left: 12.5px !important;
          }
          .docsbot-user-chat-message {
            font-weight: 600 !important;
            background-color: black; 
            color: white;
            border: 1px solid rgb(197, 206, 214);
          }
          .docsbot-chat-header button {
            color: white !important;
          }
          .docsbot-chat-bot-message a {
            font-weight: 600 !important;
          }
          .docsbot-chat-bot-message {
            background-color: black !important;
            color: white !important;
            border: 1px solid #d4a0ff;
          }
          .docsbot-chat-container {
            font-family: inherit !important;
          }
          .docsbot-chat-input {
            background-color: black
          }
        `,
        },
      }).then(() => {
        console.log("DocsBot loaded");
        if (query) {
          // Cast explicite pour éviter les erreurs TypeScript
          const input = document.querySelector('.docsbot-chat-input') as HTMLInputElement; 
          if (input && typeof query === 'string') {
            input.value = query;
          }
        }
      });
    }
  }, [router.query]);

  return (
    <>
      <div id="docsbot-widget-embed" style={{ maxWidth: '100%', height: '80vh', margin: '20px auto' }}></div>
    </>
  );
};

export default ChatPage;
