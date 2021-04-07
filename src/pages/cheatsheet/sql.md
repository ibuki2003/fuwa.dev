# SQL チートシート

## 普通

```sql
USE database;
```

```sql
INSERT INTO table (column,...) VALUES (value,...);
```

```sql
UPDATE table set column='value';
```

```sql
DELETE FROM table;
```

```sql
SELECT <columns>;
```

## はじめ

```sql
CREATE DATABASE database;
```

```sql
CREATE TABLE table (
    column type,
    column2 type
);
```

ユーザーの作成

```sql
CREATE USER 'user' IDENTIFIED BY 'password';
```

権限付与

```sql
GRANT 権限 ON db.table TO user;
GRANT ALL ON db.* TO user;
```

## テクニック

### 存在確認

```sql
SELECT EXISTS(SELECT TOP(1) 1 FROM ...) AS exist
```

### AIリセット

```sql
ALTER TABLE table AUTO_INCREMENT = num
```

num:次に使われる数

## その他,追記

- OR/ANDは短絡評価をしない
