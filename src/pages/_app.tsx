import type { AppProps } from "next/app";

import "app.scss";
import "katex/dist/katex.min.css";
import "highlight.js/scss/default.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <a href="/" className="navbar-brand">
          ふわわあのへや
        </a>
        <small>競プロとか、好きなこと、いろいろ。</small>
      </header>
      <main id="md">
        <Component {...pageProps} />
      </main>
      <footer>
        <small>ibuki2003</small>
      </footer>
    </>
  );
}

export default MyApp;
