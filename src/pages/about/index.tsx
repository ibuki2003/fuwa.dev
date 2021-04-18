import React from "react";
import Title from "components/title";

import Card from "./card";

import "./about.scss";

import LaravelLogo from "./skill-icons/laravel.svg";
import PhpLogo from "./skill-icons/php.svg";
import AtCoderLogo from "./skill-icons/atcoder.png";
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

import JOILogo from "./joi.png";
import Afes73Icon from "./afes73.png";

const AboutPage: React.FC = () => (
  <>
    <Title>About</Title>
    <section id="personal_info">
      <img src="https://fuwa.dev/favicon.png" />
      <div>
        <h2>にこなのにふわわあ</h2>
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
              <th>GPG Key</th>
              <td>
                <a href="https://fuwa.dev/fuwa.gpg">
                  <code>B9C6 B4B0 956F BAE9 456E 2B38 615E 83E8 4465 1088</code>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Accounts</h3>

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
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <h2>Skills</h2>
      <div className="skill-card-container">
        <Card icon={CppIcon} title="C/C++">
          since 2013(C), 2017(C++)
        </Card>
        <Card icon={GitIcon} title="Git">
          since 2018
        </Card>
        <Card icon={PhpLogo} title="PHP">
          since 2016
        </Card>
        <Card icon={Html5Logo} title="HTML/JS/CSS">
          since 2012
        </Card>
        <Card icon={TSIcon} title="TypeScript">
          since 2020
        </Card>
        <Card icon={VueLogo} title="Vue.js">
          since 2018
        </Card>
        <Card icon={ReactIcon} title="React.js">
          since 2020
        </Card>
        <Card icon={DockerLogo} title="Docker">
          since 2020
        </Card>
        <Card icon={LaravelLogo} title="Laravel/Lumen">
          since 2018
        </Card>
        <Card icon={AtCoderLogo} title="Competitive Programming">
          since 2017
        </Card>
        <Card icon={ArchLinuxLogo} title="Linux">
          since 2017
        </Card>
        <Card title="SQL">since 2016</Card>
        <Card icon={PythonLogo} title="Python3">
          since 2017
        </Card>
        <Card icon={JavaLogo} title="Java">
          since 2014
        </Card>
        <Card title="MS Excel">since 2009</Card>
      </div>
    </section>
    <section>
      <h2>History</h2>
      <div className="history-card-container">
        <Card title="プログラミング入門">2016/04</Card>
        <Card title="麻布中学校入学">2016/04</Card>
        <Card title="競技プログラミング開始">2017/05</Card>
        <Card icon={JOILogo} title="JOI2018本選">
          <div>
            2019/02
            <br />
            <a href="/log/competitive/joi2019ho">参加記</a>
          </div>
        </Card>
        <Card icon={JOILogo} title="JOI夏季セミナー2019">
          <div>
            2019/02
            <br />
            <a href="/log/competitive/joiss2019">参加記</a>
          </div>
        </Card>
        <Card icon={JOILogo} title="JOI2019本選">
          <div>
            2020/02
            <br />
            <a href="/log/competitive/joi2020ho">参加記</a>
          </div>
        </Card>
        <Card title="パソコン甲子園2020 グランプリ">2020/11</Card>
        <Card title="APCC引退">2020/11</Card>
        <Card icon={JOILogo} title="JOI2020本選">
          <div>
            2021/02
            <br />
            <a href="/log/competitive/joi2021ho">参加記</a>
          </div>
        </Card>
      </div>
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

export default AboutPage;
