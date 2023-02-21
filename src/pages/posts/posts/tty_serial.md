---
date: 2023-02-22
---

# ttyACMのstty設定めも

[Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) のUSBシリアルを`cat`とかで読みたいときに、
初期設定だと使いものにならないので、その設定の備忘録

```sh
stty -F /dev/ttyACM0 min 10 time 2 -hupcl -icrnl -opost -onlcr -isig -icanon -echo
```

だいたいはGNU screenによる設定を参考にしてる。

## 解説

- `min 10`: 読み込み最小単位?
- `time 2`: ↑のタイムアウト、これに達してなくてもバッファが掃かれる
- `-hupcl`: HUPを送らないように
- `-icrnl`: CR `\x0d` を LF `\x0a` に変換しない
- `-opost`: tabとかの文字を弄らない
- `-onlcr`: LF `\x0a` を CR+LF `\x0d\x0a` にしない
- `-isig`: 割り込みなどの特殊文字を解釈しない (知らないうちにストリームが閉じちゃうのはこれ)
- `-icanon`: eraseなどの特殊文字を解釈しない
- `-echo`: エコーバック無効化

みんなtty向けの機能だから、ただのストリームとして使うには邪魔なんだなぁ。

