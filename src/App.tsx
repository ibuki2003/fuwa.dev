import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import { MDXProvider } from "@mdx-js/react";
import Title, { TitleH1 } from "components/title";
import RawParagraph from "components/RawParagraph";
import HLCode from "components/HLCode";
import Gtag from "components/Gtag";

import "./app.scss";

const App: React.FC = () => {
  return (
    <Root>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Gtag />
        <Title>{""}</Title> {/* fallback */}
        <header>
          <a href="/" className="navbar-brand">
            ふわわあのへや
          </a>
          <small>競プロとか、好きなこと、いろいろ。</small>
        </header>
        <main id="md">
          <article>
            <MDXProvider
              components={{
                h1: TitleH1,
                p: RawParagraph,
                code: HLCode,
              }}
            >
              <Router>
                <Routes path="*" />
              </Router>
            </MDXProvider>
          </article>
        </main>
        <footer>
          <small>ibuki2003</small>
        </footer>
      </React.Suspense>
    </Root>
  );
};

export default App;
