# Lesson 06: Update（更新）

## このレッスンで学ぶこと

SQLModel の更新は「取得 → 書き換え → コミット」の3ステップ。
SQL の UPDATE 文を直接書く代わりに、Python のオブジェクト操作でデータを更新する。

---

## 何を実装するか

`src/lessons/06-update/UpdateLesson.py` の `run()` 関数に以下を実装する。

### 実装チェックリスト

- [ ] `session.get(Hero, 1)` で更新対象を取得する
- [ ] `hero.age = 16` のように属性を書き換える
- [ ] `session.add(hero)` で変更をセッションに伝える
- [ ] `session.commit()` で DB に反映する
- [ ] `session.refresh(hero)` で最新の値を取得して確認する

### 動作イメージ

```
=== Lesson 06: Update（更新） ===
更新前: id=1 name='Spider-Boy' age=None
更新後: id=1 name='Spider-Boy' age=16
```

---

## ヒント

```python
with Session(engine) as session:
    # ① 取得
    hero = session.get(Hero, 1)

    # ② 書き換え（普通の属性代入）
    hero.age = 16

    # ③ add → commit（SQLAlchemy がUPDATE文を自動生成する）
    session.add(hero)
    session.commit()
    session.refresh(hero)
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- 更新の3ステップを自分の言葉で書く -->

### 最小実装
```python
# 1件更新する最小コードを書く
```

### 実務での型
```python
# 複数フィールドをまとめて更新するパターン（model_validate など）
```

### 落とし穴
<!-- session.add を忘れると更新されない、など -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
