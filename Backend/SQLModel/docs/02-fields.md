# Lesson 02: フィールド型

## このレッスンで学ぶこと

`Field()` は SQLModel のフィールドに「追加の情報」を付けるための関数。
「このカラムは主キー」「インデックスを付ける」「デフォルト値はこれ」などを指定できる。
`Optional[int]` は「値が入っているかもしれないし、None かもしれない」という型。

---

## 何を実装するか

`src/lessons/02-fields/FieldsLesson.py` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `id: Optional[int] = Field(default=None, primary_key=True)` を定義する
- [ ] `name: str`（必須・デフォルトなし）を定義する
- [ ] `age: Optional[int] = None`（任意・省略可）を定義する
- [ ] `secret_name: str = Field(index=True)`（インデックス付き）を定義する
- [ ] インスタンスを作って各フィールドの値を `print()` する

### 動作イメージ

```
=== Lesson 02: フィールド型 ===
id=None  （まだDBに保存していないので None）
name='Spider-Boy'
age=None  （省略したので None）
secret_name='Pedro Parqueador'
```

---

## ヒント

```python
from typing import Optional
from sqlmodel import SQLModel, Field

class Hero(SQLModel):
    # primary_key=True: このフィールドがテーブルの主キー
    id: Optional[int] = Field(default=None, primary_key=True)

    # Field なしでも書ける（必須フィールド）
    name: str

    # Optional にすると省略できる
    age: Optional[int] = None

    # index=True: このカラムに検索用インデックスを作る
    secret_name: str = Field(index=True)
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Field() の役割を1〜3行で書く -->

### 最小実装
```python
# Optional を使った最小のモデルを書く
```

### 実務での型
```python
# よく使う Field オプションをまとめる
```

### 落とし穴
<!-- Optional と必須フィールドの違いで詰まった点 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
