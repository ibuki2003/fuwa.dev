# Linuxコマンド/その他のチートシート

## ワンライナー鯖

```bash
$ python3 -m SimpleHTTPServer 3000
$ python3 -m http.server 8000
```

```bash
$ php -S localhost:8000
$ php -S 0.0.0.0:8000
```

## tar

自動判別は1.15(2004リリース)以降

解凍はとりあえず`tar -xvf [File]`でよい

`tar -{c|x|t}{z|j|J|}{v|}f [出力先] [処理対象]`

- 何をするか
  - c:Create
  - x:eXtract
  - t:Test
- 圧縮のオプション
  - z:gzip
  - j:bzip
  - J:xz
  - 無指定:自動判別
- v:処理内容表示オプション

## 正規表現 (先|後)読み

`(?{場所}{状態})`

### 場所

- 先読み(直後): `(空文字列)`
- 後読み(直前): `<`

### 状態

- 一致: `=`
- 不一致: `!`
