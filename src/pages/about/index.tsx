import React from "react";
import Title from "components/title";

import styles from "./about.module.scss";

export const config = {
  unstable_runtimeJS: false,
};

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
                東京大学 (教養学部: 前期課程)
                <br />
                (2027/03 卒業予定)
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

        <ul className={styles.linkIcons}>
          {(
            [
              [
                require("./icons/github.svg"),
                "GitHub@ibuki2003",
                "https://github.com/ibuki2003",
              ],
              [
                require("./icons/qiita.svg"),
                "Qiita@ibuki2003",
                "https://qiita.com/ibuki2003",
              ],
              [
                require("./icons/zenn.svg"),
                "Zenn@fuwa2003",
                "https://zenn.dev/fuwa2003",
              ],
              [
                require("./icons/twitter.svg"),
                "Twitter@ibuki2003",
                "https://twitter.com/ibuki2003",
              ],
              [
                require("./icons/misskey_io.svg"),
                "@fuwa2003@misskey.io",
                "https://misskey.io/@fuwa2003",
              ],
              [
                require("./icons/keybase.png"),
                "keybase@fuwa2003",
                "https://keybase.io/fuwa2003",
              ],
              [
                "https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2Fibuki2003",
                "AtCoder@ibuki2003",
                "https://atcoder.jp/users/ibuki2003",
              ],
            ] as const
          ).map(([icon, alt, href]) => (
            <li key={alt}>
              <a href={href}>
                <Img src={icon} alt={alt} title={alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <section>
      <h2>Skills</h2>
      <ul className={styles.skills}>
        {(
          [
            ["C/C++", require("./icons/cpp.svg")],
            ["Git", require("./icons/git.svg")],
            ["PHP", require("./icons/php.svg")],
            ["HTML/JS/CSS", require("./icons/html5.svg")],
            ["TypeScript", require("./icons/typescript.svg")],
            ["Vue.js", require("./icons/vue.svg")],
            ["React.js", require("./icons/react.svg")],
            ["Docker", require("./icons/docker.svg")],
            ["Laravel/Lumen", require("./icons/laravel.svg")],
            ["Linux", require("./icons/archlinux.svg")],
            ["Python3", require("./icons/python.svg")],
            ["Java", require("./icons/java.svg")],
            ["SQL", require("./icons/mysql.svg")],
          ] as const
        ).map(([name, logo]) => (
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

        <TimelineEntry date="2019/02" icon={require("./icons/joi.png")}>
          JOI2018本選
          <br />
          <a href="/posts/joi2019ho">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2019/08" icon={require("./icons/joi.png")}>
          JOI夏季セミナー2019参加
          <br />
          <a href="/posts/joiss2019">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2020/02" icon={require("./icons/joi.png")}>
          JOI2019本選
          <br />
          <a href="/posts/joi2020ho">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2020/11">
          パソコン甲子園2020 グランプリ
        </TimelineEntry>
        <TimelineEntry date="2020/11">APCC引退</TimelineEntry>
        <TimelineEntry date="2021/02" icon={require("./icons/joi.png")}>
          JOI2020本選
          <br />
          <a href="/posts/joi2021ho">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2022/03" icon={require("./icons/azb.svg")}>
          麻布高等学校 卒業
        </TimelineEntry>
        <TimelineEntry date="2022/04" icon={require("./icons/ut.svg")}>
          東京大学 入学
        </TimelineEntry>
      </ul>
    </section>
    <section>
      <h2>Works</h2>
      <div className={styles.works}>
        <WorksCard
          icon={require("./icons/afes73.svg")}
          title={
            <a href="https://73.afes.info">
              麻布学園 第73回文化祭公式ウェブサイト
            </a>
          }
          tags={[
            { name: "Vue.js", image: require("./icons/vue.svg") },
            { name: "Lumen", image: require("./icons/laravel.svg") },
            { name: "MySQL", image: require("./icons/mysql.svg") },
            {
              name: "GitHub",
              image: require("./icons/github.svg"),
              href: "https://github.com/afes-website",
            },
          ]}
        >
          <ul>
            <li>2019/12〜2020/11</li>
            <li>初チーム開発</li>
            <li>たくさんの来場/閲覧 ありがとうございました!</li>
          </ul>
        </WorksCard>
        <WorksCard
          icon={require("./icons/afes73.svg")}
          title="文化祭管理システムCAPPUCCINO"
          tags={[
            { name: "React.js", image: require("./icons/react.svg") },
            { name: "Lumen", image: require("./icons/laravel.svg") },
            { name: "MySQL", image: require("./icons/mysql.svg") },
            {
              name: "GitHub",
              image: require("./icons/github.svg"),
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
            <li>たくさんの来場ありがとうございました!</li>
          </ul>
        </WorksCard>
        <WorksCard
          title={<a href="https://onlinemathcontest.com">OnlineMathContest</a>}
          tags={[
            { name: "React.js", image: require("./icons/react.svg") },
            { name: "Laravel", image: require("./icons/laravel.svg") },
          ]}
        >
          <ul>
            <li>2020/09〜</li>
            <li>
              <a href="https://twitter.com/OMathC_official">
                Twitter@OmathC_official
              </a>
            </li>
          </ul>
        </WorksCard>
        <WorksCard
          title={<a href="https://oj.fuwa.dev/">Fuwa Online Judge</a>}
          tags={[
            { name: "Laravel", image: require("./icons/laravel.svg") },
            { name: "Python", image: require("./icons/python.svg") },
            {
              name: "GitHub",
              image: require("./icons/github.svg"),
              href: "https://github.com/ibuki2003/onlinejudge",
            },
          ]}
        >
          <ul>
            <li>2018/11〜 (1世代目:2017/10〜2018/10)</li>
            <li>Laravel</li>
            <li>BootStrap</li>
          </ul>
        </WorksCard>
        <WorksCard
          title={
            <a href="https://github.com/aspida/eslint-plugin-aspida/">
              eslint-plugin-aspida
            </a>
          }
          tags={[
            {
              name: "Aspida",
              image: require("./icons/aspida.svg"),
              href: "https://github.com/aspida/aspida/",
            },
          ]}
        >
          <ul>
            <li>2020/07〜</li>
            <li>
              <a href="https://github.com/aspida/aspida/">aspida</a>
              の型定義支援用eslintプラグイン
            </li>
          </ul>
        </WorksCard>
      </div>
    </section>
    <section>
      <h2>More information</h2>
      <ul>
        <li>
          <a href="/about/system">System Information</a>
        </li>
        <li>
          <a href="/about/deps">Dependencies</a>
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
    <div className={styles.cardHeader}>
      <h3 className={styles.cardTitle}>
        {props.icon && (
          <Img className={styles.cardIcon} src={props.icon} alt="" />
        )}
        {props.title}
      </h3>
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
    <div className={styles.entryDescription}>{props.children}</div>
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
