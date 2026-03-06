# Lesson 04: Create（追加）

## このレッスンで学ぶこと

`Session` はDBとのやり取りをまとめる「作業単位」。
`session.add()` で「追加予定」にして、`session.commit()` で「確定」する。
コミットして初めて DB に書き込まれる。

用語メモ：
- **セッション（Session）** — DB との一連の操作をまとめるオブジェクト。`with` で使うと自動で閉じられる
- **コミット（commit）** — 変更を DB に確定させる操作

---

## 何を実装するか

`src/lessons/04-create/CreateLesson.py` の `run()` 関数に以下を実装する。

### 実装チェックリスト

- [ ] `Hero` インスタンスを3件作る
- [ ] `with Session(engine) as session:` で Session を開く
- [ ] `session.add(hero)` でそれぞれを追加する
- [ ] `session.commit()` で確定する
- [ ] `session.refresh(hero)` で DB から最新の値（id）を取得する
- [ ] `print(hero.id, hero.name)` で id が振られていることを確認する

### 動作イメージ

```
=== Lesson 04: Create（追加） ===
1 Deadpond
2 Spider-Boy
3 Rusty-Man
```

---

## ヒント

```python
from sqlmodel import Session

with Session(engine) as session:
    hero = Hero(name="Deadpond", secret_name="Dive Wilson")
    session.add(hero)
    session.commit()
    # refresh で DB から最新状態（id）を再取得する
    session.refresh(hero)
    print(hero.id)   # 1
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Session と commit の役割を1〜3行で書く -->

### 最小実装
```python
# 1件追加する最小コードを書く
```

### 実務での型
```python
# 複数件をまとめて追加するパターンを書く
```

### 落とし穴
<!-- commit を忘れた・refresh を忘れた場合のエラー -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
