---
date: 2019-06-29
---

# 自然数を順序を考慮して分割

## 問題

[ABC132 D - Blue and Red Balls](https://atcoder.jp/contests/abc132/tasks/abc132_d)

### 問題概要

ボール:$N$個
うち青:$K$個
ボールを並べて
青の島(青の連続区間の個数)が$i$個になる並べ方の個数
※同色ボールは区別できない

### 解法

$\left( K\text{を}i\text{個の自然数に分割する方法 } \right) \times \left( N-K\text{を}i+1\text{個の自然数(両端は}0\text{可)に分割する方法} \right)$

## $n$を$r$個の自然数に分割する方法

$\displaystyle 0$を許可するとき,${}_{n+r-1}C_{r-1}$
これは丸と線で区切る考え方のやつ.
`O|OO|O|OO||O|OO|`をシャッフルする,みたいな

$0$を許可しないために事前に1つ入れておく.
$0$が許されない箇所が$k$個あったとき,
$\displaystyle {}_{n-k+r-1}C_{r-1}$
