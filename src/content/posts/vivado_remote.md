---
date: 2026-07-28
---

# Vivadoのリモートビルド機能を使う

Vivadoには合成をリモートホストで行う機能がありますが、
何をすれば動くのか情報が**あまりにも**少ないので、手元で動作させた方法をまとめます。

(各個人の微妙な環境の相違はあると思うが、達成方法とrepoをLLMに与えればたぶん構築してくれるはず。便利な時代になりましたね)

## 環境

- Vivado 2025.1 (FPGAs_AdaptiveSoCs_Unified_SDI_2025.1_0530_0145_Lin64)
- NixOS 26.11
- Docker
  - VivadoをDockerコンテナに閉じ込めて使用しています [^myon] [^repo]

## おことわり

調査の大部分をLLMに任せて、その結果を記事にまとめているものです。手元での動作確認はしていますが、正しさの保証はできかねます。

## 前提

前提とされる制約条件がいくつかあります:

- ホスト(ジョブを投げる側)はLinuxである必要がある
  - (直感的には、逆だろ、という気もするが…)
  - Windowsには remote-shell 相当の機能がないため、ということらしい。
- 両マシンに同じバージョンのVivadoがインストールされており、同じパスにインストールされていること。
  - たぶん絶対パスで呼び出している
- プロジェクトが同じパスに存在すること

私の環境であれば、物理マシンの構成にかかわらず、コンテナ単位で好きなように設定できるから、これらの要件を安易に満たすことができますね。つまり:

- Linuxである必要 → コンテナ内はLinuxが動作している
- Vivadoが同じバージョン・パス → 同じコンテナイメージを共有すればOK。
- プロジェクトが同じパス → ホストマシンでどこに置いてあっても、コンテナにマウントする位置さえ調整すればOK。

## 構成

コンテナの構成にはdocker composeを用いることにしました。
実際の定義はレポジトリ[^repo]内のファイルを読んでもらうとして、
構成の意味くらいは解説します

以下、
「ホスト」: プロジェクトファイルが存在して、Vivado GUIを操作するマシン
「サーバ」: リモート接続を受けて、合成をおこなうマシン
と呼ぶことにします。

- vivado (@ホスト)
  - Vivado GUIが動作します。この構成は、参考[^myon]そのままになってる、はず
- nfs-server (@ホスト)
  - プロジェクトファイルをNFSで公開します。
- vivado-remote (@サーバ)
  - Dockerが入った環境でsshdを動かします
- vivado-remote-gui (@サーバ)
  - vivado GUIを起動します。同じ環境を揃えてあるなら、実はremote buildである必要はないよねっていう

## 接続設定

.ssh/configや.ssh/id_ed25519や.ssh/authorized_keysに設定を入れます
passphraseは設定しないほうがいいと思う

Settings - Tool Settings - Remote Hosts - Manual Configuration
HostsをAdd...してHost Nameにssh configの名前を入れる
jobsは適当にコア数くらいにしとけばいいと思う

## dashまわりの不具合

コンテナのcommandにこういう記述を入れています。
```bash
echo "dash dash/sh boolean false" | debconf-set-selections
```

これがないとvivadoからのTestに失敗し、メッセージから得られる情報がほぼないのでキレそうになりながら調査を進めました
bashからssh叩くと普通に成功する。*Launch jobs with:*にsshのラッパスクリプトを設定しても呼ばれる気配がない。

> 原因わかった。**Vivadoのバグ**。
>
> VivadoがSSHを呼ぶ前に実行するスクリプトが `#!/bin/sh` で書かれているのに、bash前提の内容が含まれている。Ubuntuでは `/bin/sh` がデフォルトで `dash` を指しているため、スクリプトがSSHを呼ぶ前に死んでいる。[Thalheim](https://blog.thalheim.io/2017/04/13/solve-vivado-remote-connection-test-failed/)
>
> だからSSHが一切呼ばれない。ラップトップ側のVivadoコンテナの中で:
>
> ```sh
> # 方法1: dpkg-reconfigure (コンテナ内でrootとして)
> sudo dpkg-reconfigure dash
> # "Install dash as /bin/sh?" -> No
>
> # 方法2: ユーザーローカルにbashへのsymlinkを置く
> mkdir -p ~/.local/bin
> ln -s /bin/bash ~/.local/bin/sh
> # ~/.local/bin が /bin より前にPATHにあることを確認
> ```
>
> Dockerfileに焼くなら:
>
> ```dockerfile
> RUN echo "dash dash/sh boolean false" | debconf-set-selections && \
>     DEBIAN_FRONTEND=noninteractive dpkg-reconfigure dash
> ```

## なんか落ちる

Synthesisは動いて、Implementationの最後のほうにクラッシュして、長い時間待ったのに水の泡、という事象が何度かありました。
合成自体は完了してて、Report生成でクラッシュしてるので、救いはあるのかもしれないが、……
kernelとglibcまわりが怪しそう、なログが出てたので、サーバマシン側のOS更新をかけたら収まった気がする。同様の事象に遭遇したら参考にしてください。
または、根本原因や解決方法がわかったら教えてほしい。

[^myon]: [AMD/Xilinx Vivado を Docker コンテナに閉じ込める | Tosainu Lab](https://myon.info/blog/2024/07/06/vivado-docker/)
[^repo]: [ibuki2003/docker-vivado: Dockerfile for AMD/Xilinx Vivado](https://github.com/ibuki2003/docker-vivado)

