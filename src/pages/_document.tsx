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
          </>
        )}
        <script async src="https://platform.twitter.com/widgets.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
