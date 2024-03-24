import React from "react";
import Title from "components/title";

import styles from "./about.module.scss";

export const config = {
  unstable_runtimeJS: false,
};

const links = [
  [
    "./icons/github.svg",
    "GitHub@ibuki2003",
    "https://github.com/ibuki2003",
  ],
  [
    "./icons/qiita.svg",
    "Qiita@ibuki2003",
    "https://qiita.com/ibuki2003",
  ],
  [
    "./icons/zenn.svg",
    "Zenn@fuwa2003",
    "https://zenn.dev/fuwa2003",
  ],
  [
    "./icons/twitter.svg",
    "Twitter@ibuki2003",
    "https://twitter.com/ibuki2003",
  ],
  [
    "./icons/misskey_io.svg",
    "@fuwa2003@misskey.io",
    "https://misskey.io/@fuwa2003",
  ],
  [
    "./icons/keybase.png",
    "keybase@fuwa2003",
    "https://keybase.io/fuwa2003",
  ],
  [
    "https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2Fibuki2003",
    "AtCoder@ibuki2003",
    "https://atcoder.jp/users/ibuki2003",
  ],
] as const

const AboutPage: React.FC = () => (
  <article className={styles.main}>
    <Title>About Me</Title>
    <section id={styles.personal_info}>
      <img className={styles.profilePic} src="/assets/fuwa.svg" alt="" />
      <div>
        <h2>杉山 衣吹 (にこなのにふわわあ)</h2>
        <p>Ibuki Sugiyama</p>
        <table id={styles.profile_table}>
          <tbody>
            <tr>
              <th>Affiliation</th>
              <td>
                東京大学 (理科一類, 理学部進学予定)
                <br />
                The University of Tokyo
                <br />
                (B1, 2027/03 卒業予定)
              </td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>2003/04/26</td>
            </tr>
            <tr>
              <th>OpenPGP Key</th>
              <td>
                <a href="https://fuwa.dev/fuwa.asc">
                  <code className={styles.pgpKey}>
                    <span>B9C6</span>
                    <span>B4B0</span>
                    <span>956F</span>
                    <span>BAE9</span>
                    <span>456E</span>
                    <span>2B38</span>
                    <span>615E</span>
                    <span>83E8</span>
                    <span>4465</span>
                    <span>1088</span>
                  </code>
                </a>
              </td>
            </tr>
            <tr>
              <th>Call sign</th>
              <td>JJ1FYD</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.links}>
          <ul className={styles.linkIcons}>
            {links.filter(a => a[0]).map(([icon, alt, href]) => (
              <li key={alt}>
                <a href={href} rel="me">
                  <Img src={icon} alt={alt} title={alt} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <section>
      <h2>Skills / Languages</h2>
      <ul className={styles.skills}>
        {(
          [
            ["C/C++", "./icons/cpp.svg"],
            ["Rust", "./icons/rust.svg"],
            ["HTML/JS/CSS", "./icons/html5.svg"],
            ["TypeScript", "./icons/typescript.svg"],
            ["PHP", "./icons/php.svg"],
            ["React.js", "./icons/react.svg"],
            ["Vue.js", "./icons/vue.svg"],
            ["Python3", "./icons/python.svg"],
            ["RDB / SQL", "./icons/mysql.svg"],
            ["Java", "./icons/java.svg"],
            ["Laravel (,Lumen)", "./icons/laravel.svg"],
            ["Git", "./icons/git.svg"],
            ["Linux", "./icons/archlinux.svg"],
            ["Docker", "./icons/docker.svg"],
          ] as const)
          .map(([name, logo]) => (
            <li key={name}>
              <Img src={logo} alt="" />
              <div>{name}</div>
            </li>
          ))}
      </ul>
    </section>
    <section>
      <h2>History</h2>
      <ul className={styles.timeline}>
        <li aria-hidden="true"></li>
        <TimelineEntry date="2016/04">APCC入部</TimelineEntry>
        <TimelineEntry date="2017/05">競技プログラミング開始</TimelineEntry>

        <TimelineEntry date="2019/02" icon="./icons/joi.png">
          JOI2018本選
          <br />
          <a href="/posts/joi2019ho/">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2019/08" icon="./icons/joi.png">
          JOI夏季セミナー2019参加
          <br />
          <a href="/posts/joiss2019/">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2020/02" icon="./icons/joi.png">
          JOI2019本選
          <br />
          <a href="/posts/joi2020ho/">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2020/11">
          パソコン甲子園2020 グランプリ
        </TimelineEntry>
        <TimelineEntry date="2021/02" icon="./icons/joi.png">
          JOI2020本選
          <br />
          <a href="/posts/joi2021ho/">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2022/03" icon="./icons/azb.svg">
          麻布高等学校 卒業
        </TimelineEntry>
        <TimelineEntry date="2022/04" icon="./icons/ut.svg">
          東京大学 入学
        </TimelineEntry>
      </ul>
    </section>
    <section>
      <h2>Notable Works</h2>
      <div className={styles.works}>
        <WorksCard
          icon="./icons/afes73.svg"
          title="麻布学園 文化祭管理システムCAPPUCCINO"
          tags={[
            { name: "React.js", image: "./icons/react.svg" },
            { name: "Lumen", image: "./icons/laravel.svg" },
            { name: "MySQL", image: "./icons/mysql.svg" },
            {
              name: "GitHub",
              image: "./icons/github.svg",
              href: "https://github.com/afes-website",
            },
          ]}
        >
          <ul>
            <li>2020/12〜2021/11</li>
            <li>
              <a href="https://zenn.dev/su8ru/articles/cappuccino-system">
                開発・運用記
              </a>
            </li>
          </ul>
        </WorksCard>
        <WorksCard
          title={<a href="https://onlinemathcontest.com">OnlineMathContest</a>}
          tags={[
            { name: "React.js", image: "./icons/react.svg" },
            { name: "Laravel", image: "./icons/laravel.svg" },
          ]}
        >
          <ul>
            <li>worked in 2020/09〜2020/12</li>
          </ul>
        </WorksCard>
        <WorksCard
          title={<a href="https://oj.fuwa.dev/">Fuwa Online Judge</a>}
          tags={[
            { name: "Laravel", image: "./icons/laravel.svg" },
            { name: "Python", image: "./icons/python.svg" },
            {
              name: "GitHub",
              image: "./icons/github.svg",
              href: "https://github.com/ibuki2003/onlinejudge",
            },
          ]}
        >
          <ul>
            <li>2018/11〜 (1世代目:2017/10〜2018/10)</li>
          </ul>
        </WorksCard>
        <WorksCard
          icon="./icons/pskey.png"
          title={<a href="https://github.com/ibuki2003/pskey">PSkey</a>}
          tags={[
            { name: "React Native", image: "./icons/react.svg" },
          ]}
        >
          <ul>
            <li>2023/07〜</li>
            <li>
              <a href="https://misskey-hub.net/">Misskey</a> Client App for Android
            </li>
          </ul>
        </WorksCard>
        <WorksCard
          title={<a href="https://github.com/ibuki2003/morsecord">MorseCord</a>}
          tags={[
            { name: "Discord", image: "./icons/discord.svg" },
            { name: "Rust", image: "./icons/rust.svg" },
          ]}
        >
          <ul>
            <li>2023/07〜</li>
            <li>
              モールス符号聞き取り練習 Discord Bot
            </li>
          </ul>
        </WorksCard>
      </div>
      <p><a href="https://github.com/ibuki2003">And more at GitHub</a></p>
    </section>
    <section>
      <h2>More information</h2>
      <ul>
        <li>
          <a href="/about/system/">System Information</a>
        </li>
      </ul>
    </section>
  </article>
);

const WorksCard: React.FC<{
  icon?: ImgSrc;
  title: React.ReactNode;
  tags?: { name: string; image: ImgSrc; href?: string }[];
  children: React.ReactNode;
}> = (props) => (
  <div className={styles.entryCard}>
    <h3 className={styles.cardTitle}>
      {props.icon && (
        <Img className={styles.cardIcon} src={props.icon} alt="" />
      )}
      {props.title}
    </h3>
    <div className={styles.entryDescription}>{props.children}</div>
    <ul className={styles.cardTags}>
      {props.tags &&
        props.tags.map(({ name, image, href }) => (
          <li key={name}>
            {href ? (
              <a href={href}>
                <Img src={image} alt={name} />
              </a>
            ) : (
              <>
                <Img src={image} alt={name} />
              </>
            )}
          </li>
        ))}
    </ul>
  </div>
);

const TimelineEntry: React.FC<{
  date: string;
  icon?: ImgSrc;
  children: React.ReactNode;
}> = (props) => (
  <li className={styles.timelineEntry}>
    {props.icon && <Img src={props.icon} className={styles.icon} alt="" />}
    <span className={styles.date}>{props.date}</span>
    <span className={styles.detail}>{props.children}</span>
  </li>
);

type ImgObj = { default: { src: string } };
type ImgSrc = string | ImgObj;

const isImgObject = (src: unknown): src is ImgObj => {
  // easy and loose check
  return typeof src === "object" && src !== null && "default" in src;
};

const Img: React.FC<
  Omit<React.ImgHTMLAttributes<Element>, "src"> & { src: ImgSrc }
> = ({ src, ...props }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img src={isImgObject(src) ? src.default.src : src} {...props} />
);

export default AboutPage;
