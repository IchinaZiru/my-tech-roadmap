# Lesson 01: Hello SQLModel

## このレッスンで学ぶこと

SQLModel は Python のクラス定義だけで「データの形」を表現できるライブラリ。
このレッスンでは DB には繋がず、モデルクラスのインスタンスを作って `print()` するだけ。
まず「どう書けばモデルになるか」だけを体感する。

---

## 何を実装するか

`src/lessons/01-hello-sqlmodel/HelloSQLModelLesson.py` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `from sqlmodel import SQLModel, Field` をインポートする
- [ ] `Hero` クラスを `SQLModel` を継承して定義する
- [ ] `id`, `name`, `age` の3フィールドを持たせる
- [ ] `Hero(name="Deadpond", age=30)` のようにインスタンスを作る
- [ ] `print(hero)` でモデルの中身が表示されることを確認する
- [ ] `hero.model_dump()` で辞書に変換して表示する

### 動作イメージ

```
=== Lesson 01: Hello SQLModel ===
id=None name='Deadpond' age=30
{'id': None, 'name': 'Deadpond', 'age': 30}
```

---

## ヒント

```python
# SQLModel を継承するだけでモデルになる
class Hero(SQLModel):
    id: int | None = None
    name: str
    age: int | None = None

# インスタンスの作り方は普通のクラスと同じ
hero = Hero(name="...", age=...)
```

---

## main.py への接続方法

実装後、`main.py` を確認して `01` を選択して動作を確認する。

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- SQLModel とは何か、1〜3行で書く -->

### 最小実装
```python
# 最もシンプルなSQLModelクラスを書く
```

### 実務での型
```python
# よく使うパターンを書く
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
