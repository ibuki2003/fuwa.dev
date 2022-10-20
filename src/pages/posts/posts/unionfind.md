---
date: 2019-01-12
---

# UnionFind木について

[aising2019](https:///atcoder.jp/contests/aising2019)の[C問](https://atcoder.jp/contests/aising2019/tasks/aising2019_c)で出てきた問題で使ったのでまとめ.

## UnionFind木とは?

グループ分けして同グループに属するか調べるデータ構造.
1次元配列を持っておいてそれぞれ自分のルートを保持しておくことで同グループに所属することを判定できる.
多くの操作がほぼ定数時間できる

## テンプレは以下

```cpp
class UnionFind{
private:
    vi data;
public:
    UnionFind(int size):data(size,-1){}
    bool unite(int x,int y){
        x=root(x);y=root(y);
        if(x!=y){
            if(data[y]<data[x])swap(x,y);
            data[x]+=data[y];data[y]=x;
        }
        return x!=y;
    }
    bool find(int x,int y){
        return root(x)==root(y);
    }
    int root(int x){
        return data[x]<0?x:data[x]=root(data[x]);
    }
    int size(int x){
        return -data[root(x)];
    }
};
```
