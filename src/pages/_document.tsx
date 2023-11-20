import { Html, Head, Main, NextScript } from "next/document";

const gtag_id = "G-SY78XL8BN4";

export default function Document() {
  return (
    <Html>
      <Head>
        {process.env.NODE_ENV == "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag_id}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gtag_id}');`,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.fuwa.dev/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();`,
              }}
            />
          </>
        )}
        <script async src="https://platform.twitter.com/widgets.js" />
        <link rel="me" href="https://misskey.io/@fuwa2003" />
        <link rel="me" href="https://twitter.com/ibuki2003" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
