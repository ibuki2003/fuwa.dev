import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";

import "./app.scss";

import twitter_icon from "assets/footer_icons/twitter.svg";
import github_icon from "assets/footer_icons/github.svg";
import zenn_icon from "assets/footer_icons/zenn.svg";
import qiita_icon from "assets/footer_icons/qiita.svg";
import telegram_icon from "assets/footer_icons/telegram.svg";
import stackoverflow_icon from "assets/footer_icons/stackoverflow.svg";

interface FooterLink {
  name: string;
  url: string;
  image: string;
}
const footer_links: FooterLink[] = [
  {
    name: "twitter",
    url: "https://twitter.com/ibuki2003",
    image: twitter_icon,
  },
  { name: "github", url: "https://github.com/ibuki2003", image: github_icon },
  { name: "zenn", url: "https://zenn.dev/fuwa2003", image: zenn_icon },
  { name: "qiita", url: "https://qiita.com/ibuki2003", image: qiita_icon },
  { name: "telegram", url: "https://t.me/ibuki2003", image: telegram_icon },
  {
    name: "stackoverflow",
    url: "https://stackoverflow.com/users/11062133/ibuki2003",
    image: stackoverflow_icon,
  },
];

const App: React.FC = () => (
  <Root>
    <header>
      <a href="/" className="navbar-brand">
        ふわわあのへや
      </a>
      <small>競プロとか、好きなこと、いろいろ。</small>
    </header>
    <main id="md">
      <article>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </article>
    </main>

    <footer>
      <small>ibuki2003</small>
      <ul>
        {footer_links.map((item) => (
          <li key={item.name}>
            <a href={item.url} aria-label={item.name}>
              <img src={item.image} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  </Root>
);

export default App;
