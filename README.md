# Tech Stack Practice Repo：学習目標（Roadmap）

このリポジトリは、技術スタックを「読む」だけでなく **自分で動くコードを書いて理解する**ための練習場である。  
ブランチ＋フォルダを技術単位で切り、各技術について **最小実装 → 少し応用 → まとめ**の順に理解を深める。

- 例：Reactなら `react` ブランチを作り、`react/` フォルダにコードと説明ドキュメントを置く
- 各技術フォルダには `README.md` を置き、「何を理解するためのコードか」「どこを見れば良いか」「何ができる状態になればOKか」を残す

---

## 進め方（共通ルール）

### 1. 技術ごとの成果物
各技術フォルダ（例：`react/`）で最低限これを作る。

- `src/`：動く最小コード（サンプル）
- `filename.md`：実装したサンプルの説明・詰まった点・エラー・解決・学び（任意）

### 2. 各技術の到達目標の型（共通テンプレ）
- **概念**：その技術は何を解決するか（1〜3行）
- **最小実装**：Hello Worldレベルで動かす
- **実務での型**：よく使うパターンを1つ作る
- **落とし穴**：よくあるエラーと回避策を1つまとめる
- **説明できる状態**：誰かに口頭で説明できる（=理解した）

---

## 目標：理解したい技術一覧（技術スタック）

> 以下の内容は、学習目標の「対象範囲」を固定するためのリストである。  
> **各技術について**「用途が説明できる」「最小実装が書ける」「よくある落とし穴を回避できる」状態を目指す。

---

## 2.1 フロントエンド（学習対象）

| 技術 | 用途 |
|------|------|
| **React** | UIライブラリ |
| **React Router** | ルーティング |
| **TypeScript** | 型安全性 |
| **TailwindCSS** | スタイリング |
| **shadcn/ui** | UIコンポーネントライブラリ |
| **TanStack Query** | サーバー状態管理 |
| **React Hook Form** | フォーム管理 |
| **Zod** | バリデーション |
| **@react-pdf/renderer** | PDF生成 |
| **@dnd-kit** | ドラッグ&ドロップ |
| **Recharts** | グラフ描画 |
| **date-fns** | 日付処理 |
| **Lucide React** | アイコン |

### フロントエンド：到達目標（共通）
- 各技術の「役割」を説明できる（何の問題を解決する技術か）
- 最小実装を書いて動かせる（動作確認手順をREADMEに残せる）
- 技術同士の繋がりを説明できる（例：Form + Zod、Query + API、Router + Page）

---

## 2.2 バックエンド（学習対象）

| 技術 | 用途 |
|------|------|
| **Python** | プログラミング言語 |
| **FastAPI** | Webフレームワーク |
| **SQLModel** | ORM（SQLAlchemyベース） |
| **Pydantic** | データバリデーション |
| **Alembic** | データベースマイグレーション |
| **uvicorn** | ASGIサーバー |
| **PostgreSQL** | データベース |
| **python-dateutil** | 日付処理 |

### バックエンド：到達目標（共通）
- APIのCRUDを最小構成で作れる（GET/POST/PUT/DELETE）
- ORMでテーブル定義と基本クエリが書ける
- マイグレーションの流れ（作成→適用→差分）が説明できる
- バリデーション（入力・出力）の責務が説明できる

---

## 2.3 開発ツール（学習対象）

| 技術 | 用途 |
|------|------|
| **Docker / Docker Compose** | コンテナ化とローカル開発環境 |
| **uv** | Python パッケージマネージャー |
| **yarn** | Node.js パッケージマネージャー |
| **ESLint** | JavaScriptリンター |
| **Ruff** | Pythonリンター・フォーマッター |
| **mypy** | Python型チェック |
| **Orval** | OpenAPIからTypeScriptクライアント生成 |

### 開発ツール：到達目標（共通）
- 「導入する理由」と「何を守ってくれるか」を説明できる
- 実行コマンドをREADMEに固定し、毎回同じ手順で回せる
- 生成物（Orval等）と手書きコードの境界を説明できる

---

## 2.4 アーキテクチャ

```mermaid
graph TD
    subgraph Client ["ブラウザ"]
        FE[React + TypeScript Frontend]
        FE_Lib["- React Router 7<br/>- TanStack Query<br/>- shadcn/ui"]
        FE --- FE_Lib
    end

    subgraph Server ["バックエンド"]
        Router["Router Layer<br/>(HTTP Handlers)"]
        Service["Service Layer<br/>(Business Logic)"]
        Gateway["Gateway Layer<br/>(Data Access)"]
        
        Router -->|Calls| Service
        Service -->|Calls| Gateway
    end

    subgraph Database ["データストア"]
        DB[(PostgreSQL)]
        Schema["- estimates<br/>- estimate_items<br/>- item_categories"]
        DB --- Schema
    end

    FE -->|HTTP/REST JSON| Router
    Gateway -->|SQLModel ORM| DB
