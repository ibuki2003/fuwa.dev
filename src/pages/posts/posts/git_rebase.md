---
date: 2020-02-20
---

# (たぶん)10分でわかる! git rebase 講座

同輩向けに書いたやつ。せっかくなので公開

## rebaseってなに

あるコミットを別のコミットの子に移籍させる操作のこと ~~(養子じゃん)~~

`re` — 再配置
`base` — 親

### ※正しいことをいうと

コミットはgarbage-collectorでないものからは削除されません: 同じ変更内容をもったコミットが新しく作られる が正しい挙動です

## rebase基礎

### 言葉で解説

HEADと指定コミットの直近の共通祖先までを「枝」と見て、指定コミットの先に枝をつなげる

### 見てわかる挙動

```
A
|
B-
| |
C |
| |
| X
D |
  Y <--- HEAD
```

`git rebase D`

```
A
|
B-
| |
C |
| |
| X
D |
| Y
|
X'
|
Y' <--- HEAD
```

## rebase応用

基礎とは大きく違いますが「rebaseってなに」の視点でみると同じです

### コラム エディタ

rebaseはテキストエディタを使用します。 vimあたりがデフォルトですが、まあ面倒だとおもうのでAtomにgit-plusとかプラグインを入れて頑張ってください。

### 言葉で解説

指定コミット _より後(以降ではないので注意)_ を入れ替えなどの任意の操作したのち保存します。 HEADは最終コミットになります
具体的には編集されたテキストを保存すると上から順に下記のとおり操作を行います。

### できる操作

```
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
```

#### pick

デフォルトはこれになっている。 そのコミットをそのまま配置する

#### reword

コミットメッセージを編集する
処理がその段階になるとメッセージ編集画面が表示されます

#### edit

コミットを編集する
(たぶん)そのコミットが適用された段階でシェルが戻ってくるので編集して`--amend`して`git rebase --continue`すると続行される

#### squash

直前のコミットと合体する
コミット整理だとよく使う コミットメッセージ編集画面には2つのコミットメッセージが並ぶのでどちらか残して削除しよう

#### fixup

squashとほぼ同じ。 コミットメッセージは直前のが採用される

#### drop

コミット削除
まず使わないっすね。というのも行削除すればいいので。

#### exec

#### break

#### label

#### reset

#### merge

しらねぇ。
