# Lesson 05: Read（取得）

## このレッスンで学ぶこと

DB からデータを取り出す3つのパターンを学ぶ：
1. `session.get()` — id（主キー）で1件取得
2. `select() + exec().all()` — 全件取得
3. `.where()` — 条件を絞って取得

用語メモ：
- **select** — SQL の SELECT 文に相当。「どのテーブルから何を取るか」を定義する
- **exec** — select の定義を実際に実行する

---

## 何を実装するか

`src/lessons/05-read/ReadLesson.py` の `run()` 関数に以下を実装する。

### 実装チェックリスト

- [ ] `session.get(Hero, 1)` で id=1 のヒーローを取得して表示する
- [ ] `session.exec(select(Hero)).all()` で全件取得して1件ずつ表示する
- [ ] `select(Hero).where(Hero.name == "Rusty-Man")` で条件検索する
- [ ] 存在しない id（例: 999）で `get()` して `None` が返ることを確認する

### 動作イメージ

```
=== Lesson 05: Read（取得） ===
--- id で1件取得 ---
id=1 name='Deadpond'

--- 全件取得 ---
id=1 name='Deadpond'
id=2 name='Spider-Boy'
id=3 name='Rusty-Man'

--- 条件で絞り込み ---
id=3 name='Rusty-Man' age=48
```

---

## ヒント

```python
from sqlmodel import select

# id で1件取得
hero = session.get(Hero, 1)

# 全件取得
statement = select(Hero)
heroes = session.exec(statement).all()

# 条件付き取得
statement = select(Hero).where(Hero.age >= 18)
results = session.exec(statement).all()
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- select と get の違いを1〜3行で書く -->

### 最小実装
```python
# 全件取得の最小コードを書く
```

### 実務での型
```python
# where を組み合わせたパターンを書く
```

### 落とし穴
<!-- first() と all() の使い分けで詰まった点 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
