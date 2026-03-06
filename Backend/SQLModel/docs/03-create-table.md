# Lesson 03: テーブル作成

## このレッスンで学ぶこと

`table=True` を付けると SQLModel クラスが「DBのテーブル定義」になる。
`create_engine()` で SQLite ファイルへの接続を作り、
`SQLModel.metadata.create_all(engine)` でそのクラスに対応するテーブルを実際に作成する。

用語メモ：
- **エンジン（engine）** — Python と DB の間をつなぐ接続オブジェクト
- **メタデータ（metadata）** — どんなテーブルが存在するかの情報

---

## 何を実装するか

`src/lessons/03-create-table/CreateTableLesson.py` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `class Hero(SQLModel, table=True)` で DB テーブルとして定義する
- [ ] `create_engine("sqlite:///lesson03.db")` でエンジンを作る
- [ ] `SQLModel.metadata.create_all(engine)` でテーブルを作成する
- [ ] 実行後に `lesson03.db` ファイルが生成されることを確認する

### 動作イメージ

```
=== Lesson 03: テーブル作成 ===
テーブルを作成しました。lesson03.db を確認してください。
```

実行後、`src/lessons/03-create-table/` フォルダに `lesson03.db` が生成される。

---

## ヒント

```python
from sqlmodel import SQLModel, Field, create_engine

# table=True を付けると「実際のDBテーブル」になる
class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

# sqlite:/// の後がファイルパス（相対パス）
engine = create_engine("sqlite:///lesson03.db")

# このクラスに対応するテーブルを全て作成する
SQLModel.metadata.create_all(engine)
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- table=True と create_all の役割を1〜3行で書く -->

### 最小実装
```python
# テーブルを作る最小コードを書く
```

### 実務での型
```python
# よく使うエンジン設定パターンをまとめる
```

### 落とし穴
<!-- table=True なしのモデルとの違いで詰まった点 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
