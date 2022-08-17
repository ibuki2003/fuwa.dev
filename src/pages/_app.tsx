import "../styles/globals.css";
import type { AppProps } from "next/app";

import "katex/dist/katex.min.css";
import "highlight.js/scss/default.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
