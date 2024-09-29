# SQL チートシート

文法覚えてられないので、例を挙げておきます


```sql
INSERT INTO table (column,...) VALUES (value,...), (...);
UPDATE table set column='value', column2='value2';
DELETE FROM table;
SELECT <columns> where 1 = 1;

CREATE DATABASE database;
CREATE TABLE table (
    id int unsigned not null auto_increment,
    name text,
    primary key (id),
    index idx1 (id, name(30))
    -- no trailing comma
);

```

## MySQL / MariaDB

```sql
USE database;

CREATE USER 'user' IDENTIFIED BY 'password';
GRANT 権限 ON db.table TO user;
GRANT ALL ON db.* TO user;
```

### テクニック

```sql
-- 存在確認
SELECT EXISTS(SELECT TOP(1) 1 FROM ...) AS exist

-- AIリセット
-- num:次に使われる数
ALTER TABLE table AUTO_INCREMENT = num
```

- OR/ANDは短絡評価をしない
- MariaDBはfulltextにエンジンが指定できない


