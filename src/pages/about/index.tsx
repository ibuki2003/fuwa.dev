import React from "react";
import Title from "components/title";

import "./about.scss";

import LaravelLogo from "./skill-icons/laravel.svg";
import PhpLogo from "./skill-icons/php.svg";
import DockerLogo from "./skill-icons/docker.svg";
import ArchLinuxLogo from "./skill-icons/archlinux.svg";
import VueLogo from "./skill-icons/vue.svg";
import Html5Logo from "./skill-icons/html5.svg";
import CppIcon from "./skill-icons/cpp.svg";
import GitIcon from "./skill-icons/git.svg";
import ReactIcon from "./skill-icons/react.svg";
import TSIcon from "./skill-icons/ts.png";
import PythonLogo from "./skill-icons/python.svg";
import JavaLogo from "./skill-icons/java.svg";
import SqlLogo from "./skill-icons/mysql.svg";

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
      <div className="works-card-container">
        <Card
          icon={Afes73Icon}
          title={
            <a href="https://73.afes.info">
              麻布学園 第73回文化祭公式ウェブサイト
            </a>
          }
        >
          <ul>
            <li>2019/12〜2020/11</li>
            <li>
              <a href="https://github.com/afes-website">GitHub</a>
            </li>
            <li>Vue.js</li>
            <li>TypeScript</li>
            <li>Lumen</li>
            <li>初チーム開発</li>
            <li>たくさんの来場/閲覧 ありがとうございました!</li>
          </ul>
        </Card>
        <Card
          title={<a href="https://onlinemathcontest.com">OnlineMathContest</a>}
        >
          <ul>
            <li>2020/09〜</li>
            <li>Laravel</li>
            <li>Typescript</li>
            <li>React</li>
            <li>
              <a href="https://twitter.com/OMathC_official">
                Twitter@OmathC_official
              </a>
            </li>
          </ul>
        </Card>
        <Card title={<a href="https://oj.fuwa.dev/">Fuwa Online Judge</a>}>
          <ul>
            <li>2018/11〜 (1世代目:2017/10〜2018/10)</li>
            <li>
              <a href="https://github.com/ibuki2003/onlinejudge">repo</a>
            </li>
            <li>Laravel</li>
            <li>BootStrap</li>
          </ul>
        </Card>
        <Card title={<a href="https://oj.fuwa.dev/">Fuwa Online Judge</a>}>
          <ul>
            <li>2019/10〜</li>
            <li>CHUNITHMのプレイ記録ツール</li>
            <li>
              <a href="https://github.com/ibuki2003/chunilog">repo</a>
            </li>
            <li>Laravel</li>
            <li>BootStrap</li>
          </ul>
        </Card>
        <Card
          title={
            <a href="https://github.com/aspida/eslint-plugin-aspida/">
              eslint-plugin-aspida
            </a>
          }
        >
          <ul>
            <li>2020/07〜</li>
            <li>
              <a href="https://github.com/aspida/aspida/">aspida</a>
              の型定義支援用eslintプラグイン
            </li>
          </ul>
        </Card>
      </div>
    </section>
    <section>
      <h2>System Info.</h2>
      <h3>Laptop</h3>
      <ul>
        <li>ThinkPad X1 Carbon 4th Gen.</li>
        <li>Arch Linux</li>
        <li>Vivaldi</li>
        <li>NeoVim(, VSCode, Atom)</li>
        <li>i3wm</li>
        <li>zsh</li>
        <li>P2418D (as an external display)</li>
      </ul>
      <h3>Gadgets</h3>
      <ul>
        <li>Google Pixel 4</li>
        <li>iPad Air Gen3</li>
        <li>Happy Hacking KeyBoard Professional Hybrid Type-S</li>
        <li>Google Home Mini (Chalk)</li>
        <li>Nature Remo Mini</li>
        <li>ChromeCast Ultra</li>
        <li>ScanSnap iX1500</li>
      </ul>
      <h3>Server</h3>
      <ul>
        <li>Sakura VPS</li>
        <li>Ubuntu 20.04</li>
        <li>RAM 2GB</li>
        <li>SSD 200GB</li>
        <li>nginx, php7</li>
      </ul>
    </section>
  </>
);

interface CardProps {
  icon?: string;
  title: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => (
  <div className="card skillcard">
    <h3>
      {props.icon && <img src={props.icon} className="header-icon" />}
      {props.title}
    </h3>
    {props.children}
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
