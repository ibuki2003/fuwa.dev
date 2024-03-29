---
date: 2023-11-30
---

# 2種類のメモリを良い感じにOCする

## TL;DR
手動で良い感じに設定すれば動く

## 経緯

先日、ふわわあ~~自慢の~~デスクトップPCのメモリを増設し、CPUの上限容量となる32GB * 4 = 128GBを積みました。(使い切れないことは言うまでもないですね!)

> ふわ「今動いてるのがXMPで3200なんですけど、増設したらXMP効かなくなって低くなっちゃいますかねぇ…?」
> 店員「ちょっとわからないですね なにせそういう組み合わせをする事例があまりないもので…」
> 店員「交換保証つけると動かなかったときだけ差額で交換できますのでそれでいかがですか?」
> ふわ「なるほど…じゃあそれで…」

というわけでこの記事はこの2枚の設定をうまくやったお話です。
一般的に通用するかは分からないけど、事例の1つとして役に立てば…

## スペック

- PC
    - Ryzen9 5950X
    - X570 AORUS Pro EX21 GIGABYTE
- 旧
    - ADATA `AX4U3200732G16A-DCBK20`
    - 32GB * 2
    - XMP2.0 3200MHz
    - 1.35V
    - CL16 (
- 新
    - crucial `CT2K32G4DFD832A`
    - 32GB * 2
    - native 3200MHz
    - 1.2V
    - CL22

## 設定

今回の目標はメモリを3200MHzで動作させることです。タイミングを詰めるとかは考えていません。

マザーボード設定から、Advanced Memory Settingsに入ります。

クロック、タイミングは双方の動作域の低い方の値に合わせると、この設定で(速すぎて)動かないということは起こらないはずです。
実際に、次のように設定します。

- clock: 3200 (multiplier 32.00)
- CL 22
- (残りのタイミングも新しいほうの値に合わせる)
- 電圧は`Auto`のまま

この設定をすると、すんなり3200MHz動作してくれました。


## おまけ

メモリ速度の確認として、memtestが役に立ちました。OSの表示のクロックが正しくても実感できるほど速いわけじゃないので、ベンチマークという意味で…

ところで、Linuxで`lshw`で詳細を見るには`sudo`が要るんですね。たしかにユーザースペースに情報を開放するのは得策ではないとも言える。

