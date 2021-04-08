# C/C++(競プロ) チートシート

## 文字列

- 不等号で比較ができる
- 範囲指定置換は`s.replace(start,len,"String");`
- char複数置換は`replace(all(s), 'before', 'after');`

## STLのリスト

| なまえ      | 条件      |
| :---------- | :-------- |
| lower_bound | $\ge$ val |
| upper_bound | $>$ val   |

となる最初のitrを返す

`(lower|upper)_bound(all(a), val);`

添字を求めるには:

`lower_bound(all(a), val) - a.begin()`

## 経路探索

| 名前           | 計算量            | 辺の重み | 備考                                          |
|:-------------- |:----------------- |:-------- |:--------------------------------------------- |
| 幅優先         | $O(E)$            | $1$      |                                               |
| Bellman Ford   | $O(VE)$           | 実数     | 負ループ検出可                                |
| Dijkstra       | $O((E+V) \log V)$ | 正       |                                               |
| Warshall–Floyd | $O(V^3)$          | 実数     | 全組み合わせに対して求められる,負ループ検出可 | 

## オーダーを下げたい

- 二分探索
- デバッグ出力を消したら通るかもね
  (cerrでも時間はかかるので注意)
- 経路探索はアルゴリズムを見直そう
- めんどくさい実装はだいたいSTLにあるらしい.計算量節約になるかも…?

## 演算子優先順位

| 優先順位 | 演算子                                                                                                 | 結合性 |
| -------- | ------------------------------------------------------------------------------------------------------ | ------ |
| 1        | `::`                                                                                                   | 左     | 
| 2        | `a++` `a--` `type()` `type{}` `a()` `a[]` `.` `->`                                                     |        |
| 3        | `++a` `--a` `+a` `-a` `!` `~` `(type)` `*a` `&a` `sizeof` `co_await` `new` `new[]` `delete` `delete[]` | 右     |
| 4        | `a.b` `a->b`                                                                                           | 左     |
| 5        | `a*b` `a/b` `a%b`                                                                                      |        |
| 6        | `a+b` `a-b`                                                                                            |        |
| 7        | `<<` `>>`                                                                                              |        |
| 8        | `<=>`                                                                                                  |        |
| 9        | `<` `<=` `>` `>=`                                                                                      |        |
| 10       | `==` `!=`                                                                                              |        |
| 11       | `&`                                                                                                    |        |
| 12       | `^`                                                                                                    |        |
| 13       | `\|`                                                                                                   |        |
| 14       | `&&`                                                                                                   |        |
| 15       | `\|\|`                                                                                                 |        |
| 16       | `a?b:c` `throw` `co_yield` `=` `+=` `-=` `*=` `/=` `%=` `<<=` `>>=` `&=` `^=` `\|=`                    | 右     |
| 17       | `,`                                                                                                    | 左     |