import React from "react";
import Title from "components/title";

import "./about.scss";

import AspidaIcon from "assets/icons/aspida.svg";
import LaravelLogo from "assets/icons/laravel.svg";
import PhpLogo from "assets/icons/php.svg";
import DockerLogo from "assets/icons/docker.svg";
import ArchLinuxLogo from "assets/icons/archlinux.svg";
import VueLogo from "assets/icons/vue.svg";
import Html5Logo from "assets/icons/html5.svg";
import CppIcon from "assets/icons/cpp.svg";
import GitIcon from "assets/icons/git.svg";
import GitHubIcon from "assets/icons/github.svg";
import ReactIcon from "assets/icons/react.svg";
import TSIcon from "assets/icons/ts.png";
import PythonLogo from "assets/icons/python.svg";
import JavaLogo from "assets/icons/java.svg";
import SqlLogo from "assets/icons/mysql.svg";

import JOILogo from "./joi.png";
import Afes73Icon from "./afes73.png";

const AboutPage: React.FC = () => (
  <>
    <Title>About</Title>
    <section id="personal_info">
      <img className="profile-pic" src="https://fuwa.dev/favicon.png" />
      <div>
        <h2>杉山 衣吹 (にこなのにふわわあ)</h2>
        <p>Ibuki Sugiyama</p>

        <table id="profile_table">
          <tbody>
            <tr>
              <th>Affiliation</th>
              <td>
                麻布高等学校
                <br />
                (2022/03 卒業予定)
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
                  <code className="pgp-key">
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
          </tbody>
        </table>

        <h3>Contacts/Links</h3>

        <table>
          <tbody>
            <tr>
              <th>GitHub</th>
              <td>
                <a href="https://github.com/ibuki2003">@ibuki2003</a>
              </td>
            </tr>
            <tr>
              <th>Qiita</th>
              <td>
                <a href="https://qiita.com/ibuki2003">@ibuki2003</a>
              </td>
            </tr>
            <tr>
              <th>Twitter</th>
              <td>
                <a href="https://twitter.com/ibuki2003">@ibuki2003</a>
              </td>
            </tr>
            <tr>
              <th>Zenn</th>
              <td>
                <a href="https://zenn.dev/fuwa2003">@fuwa2003</a>
              </td>
            </tr>
            <tr>
              <th>AtCoder</th>
              <td>
                <a
                  href="https://atcoder.jp/users/ibuki2003"
                  style={{ color: "#0000ff" }}
                >
                  ibuki2003
                </a>
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <a href="mailto:contact@fuwa.dev">contact@fuwa.dev</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>Skills</h2>
      <ul className="skills">
        {[
          ["C/C++", CppIcon],
          ["Git", GitIcon],
          ["PHP", PhpLogo],
          ["HTML/JS/CSS", Html5Logo],
          ["TypeScript", TSIcon],
          ["Vue.js", VueLogo],
          ["React.js", ReactIcon],
          ["Docker", DockerLogo],
          ["Laravel/Lumen", LaravelLogo],
          ["Linux", ArchLinuxLogo],
          ["Python3", PythonLogo],
          ["Java", JavaLogo],
          ["SQL", SqlLogo],
        ].map(([name, logo]) => (
          <li key={name}>
            <img src={logo} alt={name} />
            <div>{name}</div>
          </li>
        ))}
      </ul>
    </section>
    <section>
      <h2>History</h2>
      <ul className="timeline">
        <li aria-hidden="true"></li>
        <TimelineEntry date="2016/04">APCC入部</TimelineEntry>
        <TimelineEntry date="2017/05">競技プログラミング開始</TimelineEntry>

        <TimelineEntry date="2019/02" icon={JOILogo}>
          JOI2018本選
          <br />
          <a href="/log/competitive/joi2019ho">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2019/08" icon={JOILogo}>
          JOI夏季セミナー2019参加
          <br />
          <a href="/log/competitive/joiss2019">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2020/02" icon={JOILogo}>
          JOI2019本選
          <br />
          <a href="/log/competitive/joi2020ho">参加記</a>
        </TimelineEntry>
        <TimelineEntry date="2020/11">
          パソコン甲子園2020 グランプリ
        </TimelineEntry>
        <TimelineEntry date="2020/11">APCC引退</TimelineEntry>
        <TimelineEntry date="2021/02" icon={JOILogo}>
          JOI2020本選
          <br />
          <a href="/log/competitive/joi2021ho">参加記</a>
        </TimelineEntry>
      </ul>
    </section>
    <section>
      <h2>Works</h2>
      <div className="works">
        <WorksCard
          icon={Afes73Icon}
          title={
            <a href="https://73.afes.info">
              麻布学園 第73回文化祭公式ウェブサイト
            </a>
          }
          tags={[
            { name: "Vue.js", image: VueLogo },
            { name: "Lumen", image: LaravelLogo },
            { name: "MySQL", image: SqlLogo },
            {
              name: "GitHub",
              image: GitHubIcon,
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
          icon={Afes73Icon}
          title="文化祭管理システムCAPPUCCINO"
          tags={[
            { name: "React.js", image: ReactIcon },
            { name: "Lumen", image: LaravelLogo },
            { name: "MySQL", image: SqlLogo },
            {
              name: "GitHub",
              image: GitHubIcon,
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
            { name: "React.js", image: ReactIcon },
            { name: "Laravel", image: LaravelLogo },
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
            { name: "Laravel", image: LaravelLogo },
            { name: "Python", image: PythonLogo },
            {
              name: "GitHub",
              image: GitHubIcon,
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
              image: AspidaIcon,
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
  </>
);

const WorksCard: React.FC<{
  icon?: string;
  title: React.ReactNode;
  tags?: { name: string; image: string; href?: string }[];
}> = (props) => (
  <div className="entry-card">
    <div className="card-header">
      <h3 className="card-title">
        {props.icon && <img className="card-icon" src={props.icon} />}
        {props.title}
      </h3>
      <ul className="card-tags">
        {props.tags &&
          props.tags.map(({ name, image, href }) => (
            <li key={name}>
              {href ? (
                <a href={href}>
                  <img src={image} alt={name} />
                </a>
              ) : (
                <>
                  <img src={image} alt={name} />
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
    <div className="entry-description">{props.children}</div>
  </div>
);

const TimelineEntry: React.FC<{
  date: string;
  icon?: string;
  children: React.ReactNode;
}> = (props) => (
  <li className="timeline-entry">
    {props.icon && <img src={props.icon} className="icon" />}
    <span className="date">{props.date}</span>
    <span className="detail">{props.children}</span>
  </li>
);

export default AboutPage;
