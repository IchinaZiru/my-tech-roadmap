# 00: セットアップ — SQLModel を始める

## SQLModel とは

SQLModel は FastAPI の作者（Sebastián Ramírez）が作った Python のライブラリ。
「データベースのテーブル定義」と「データの型チェック」を **1つのクラスで同時に書ける** のが特徴。

内部では以下の2つを組み合わせている：

| ライブラリ | 役割 |
|-----------|------|
| SQLAlchemy | DB との通信（SQL の実行） |
| Pydantic | Python のデータ型チェック |

---

## このコースで使う技術

| 項目 | 内容 |
|------|------|
| 言語 | Python 3.10 以上 |
| DB | SQLite（ファイル1つ。追加インストール不要） |
| ライブラリ | sqlmodel |

---

## セットアップ手順

```bash
# Backend/SQLModel/ フォルダ内で実行

# 1. 仮想環境を作る（プロジェクトの依存関係を隔離する）
python -m venv venv

# 2. 仮想環境を有効にする
# Mac / Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# 3. SQLModel をインストールする
pip install -r requirements.txt
```

インストール後、以下が表示されれば成功：

```
Successfully installed sqlmodel-x.x.x ...
```

---

## フォルダ構成

```
Backend/SQLModel/
├── docs/                 ← ドキュメント（このフォルダ）
├── src/
│   └── lessons/
│       ├── 01-hello-sqlmodel/HelloSQLModelLesson.py
│       ├── 02-fields/FieldsLesson.py
│       └── ...
├── main.py               ← レッスンナビゲーター（ここから起動）
├── requirements.txt      ← 使うライブラリの一覧
└── .gitignore
```

---

## レッスンの進め方

```bash
# ナビゲーターを起動（仮想環境が有効な状態で）
python main.py
```

メニューが表示され、番号を入力するとそのレッスンが実行される。

各レッスンファイルは単体でも実行できる：

```bash
python src/lessons/01-hello-sqlmodel/HelloSQLModelLesson.py
```

---

## 仮想環境とは

> 「プロジェクトごとに専用の道具箱を用意する仕組み」

`pip install` でインストールしたライブラリを、他のプロジェクトと混在させないための仕組み。
`venv/` フォルダに全てが入る（git 管理外）。
