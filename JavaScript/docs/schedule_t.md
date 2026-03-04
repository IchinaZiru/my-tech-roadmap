## 前提とゴール

README の方針に合わせて、「最小実装 → 少し応用 → まとめ」という流れで、JavaScript 基礎を 4 週間で学ぶスケジュール例を用意します。 [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/173318642/ec8e3836-3a67-49e4-afe0-420147749a3d/README.md)
教材として MDN の JavaScript ガイド・チュートリアルを併用する前提で組みます。 [developer.mozilla](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide)

***

## 全体像（4 週間プラン）

| 週 | テーマ | 重点スキル | 成果物（コードお題） |
| --- | --- | --- | --- |
| 1週目 | 文法の基礎 | 変数・型・演算・if・for | 数当てゲーム（コンソール版） |
| 2週目 | 関数と配列・オブジェクト | 関数・配列メソッド・オブジェクト | TODO リスト（コンソール版） |
| 3週目 | DOM とイベント | DOM 操作・イベント・フォーム | シンプル電卓 / カウンターアプリ（ブラウザ） |
| 4週目 | 非同期とモジュール | fetch・Promise・モジュール | API から天気 or 曜日を表示するウィジェット |

以下、各週の詳細です。

***

## 1週目：文法の基礎

### 学習内容

- JavaScript とは何か（どこで動くか、何ができるか）。 [mdn2.netlify](https://mdn2.netlify.app/en-us/docs/web/javascript/)
- 変数宣言：`let` / `const` と `var` の違い。  
- プリミティブ型：数値・文字列・真偽値・`null`・`undefined`。  
- 演算子：四則演算、比較演算子、論理演算子。  
- 制御構文：`if / else`、`switch`、`for`、`while`。  
- ブラウザのコンソールで JS を実行する方法。 [developer.mozilla](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Introduction)

### 推奨外部ソース

- MDN JavaScript ガイド「入門編」「最初のステップ」周辺。 [developer.mozilla.org.cach3](https://developer.mozilla.org.cach3.com/en-US/docs/Learn/JavaScript)

### コードお題

1. Hello World & 簡単な計算
   - ブラウザのコンソールで `console.log("Hello JavaScript")` を出す。  
   - 2 つの数を足し算して表示する簡単なスクリプト。  

2. BMI 計算機（コンソール）
   - 変数 `height`（m）, `weight`（kg）から BMI を計算してコンソール出力。  
   - `if` を使って「痩せ気味 / 普通 / 太り気味」などのカテゴリを出す。  

3. 数当てゲーム（コンソール版）
   - 1〜10 のランダムな数を 1 つ生成。  
   - ユーザーの推測（`prompt` または仮の変数）と答えを比較して、「大きすぎ」「小さすぎ」「正解！」を出力。  
   - チャレンジ：`for` で最大 3 回まで挑戦できるようにする。

***

## 2週目：関数・配列・オブジェクト

### 学習内容

- 関数宣言・関数式・アロー関数。  
- スコープの基本（関数スコープとブロックスコープ）。  
- 配列の基本操作：`push` / `pop` / `shift` / `unshift` / `includes` / `indexOf` / `slice` / `splice` など。 [youtube](https://www.youtube.com/watch?v=O3iR-CIufKM)
- ループと配列の組み合わせ。  
- オブジェクトリテラルとプロパティの読み書き。  

### 推奨外部ソース

- MDN JavaScript ガイド「組み込みオブジェクト」「配列」「関数」周辺。 [developer.mozilla](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide)

### コードお題

1. 関数の練習セット
   - 足し算・平均・最大値を求める関数をそれぞれ実装（引数と戻り値に慣れる）。  
   - 文字列を受け取って「こんにちは, 名前さん！」と返す関数。  

2. 成績管理ミニアプリ（コンソール）
   - 学生の点数配列を用意し、平均点・最高点・最低点を出力。  
   - 平均点以上の人だけを抽出する処理を書く。  

3. TODO リスト（コンソール版）
   - TODO を文字列配列で管理。  
   - `addTodo`, `listTodos`, `removeTodo(index)` などの関数を作る。  
   - チャレンジ：TODO をオブジェクト（`{id, title, done}`）で管理する。

***

## 3週目：DOM 操作とイベント

### 学習内容

- HTML と JavaScript ファイルを分けて読み込む方法（`<script src="main.js"></script>`）。 [developer.mozilla](https://developer.mozilla.org/ja/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
- DOM とは何か、`document.querySelector` などの基本。 [unwiredlearning](https://unwiredlearning.com/assets/roadmap/frontend-development-javascript-react-roadmap.pdf)
- テキストや属性の変更：`textContent` / `innerHTML` / `setAttribute`。  
- イベントリスナー：`click`、`input`、`submit` など。  
- 簡単なフォーム処理。

### 推奨外部ソース

- MDN 「JavaScript: 操作の追加」「DOM 入門」など。 [developer.mozilla](https://developer.mozilla.org/ja/docs/MDN/Tutorials)

### コードお題

1. クリックでメッセージ変更
   - HTML に `<h1>` とボタンを用意。  
   - ボタンをクリックしたら `<h1>` のテキストを変更するスクリプト。  

2. カウンターアプリ
   - 「+」「-」「リセット」ボタンと数字を表示する `<span>` を用意。  
   - ボタンを押すと数値が増減・リセットされる。  
   - チャレンジ：0 未満にはならないようにガードを入れる。  

3. シンプル電卓
   - 2 つの数値入力と演算子選択（`+ - * /`）のフォーム。  
   - 「計算」ボタンで結果を画面に表示。  
   - 入力チェック（空欄・数値でない場合のエラー表示）も追加。

***

## 4週目：非同期処理・モジュール・まとめ

### 学習内容

- `setTimeout` / `setInterval` での簡単な非同期。  
- `fetch` を使った HTTP リクエストの基本。  
- `Promise` と `async/await` の使い方。  
- ES Modules の基本（`export` / `import`）構文。 [mdn2.netlify](https://mdn2.netlify.app/en-us/docs/web/javascript/)
- ここまでの要素を組み合わせて小さなアプリを完成。

### 推奨外部ソース

- MDN JavaScript ガイド「非同期 JavaScript」「モジュール」など。 [developer.mozilla](https://developer.mozilla.org/ja/docs/MDN/Tutorials)

### コードお題

1. 現在時刻・タイマー表示
   - 1 秒おきに現在時刻を更新表示する時計。  
   - チャレンジ：スタート / ストップ ボタンを追加。  

2. API を叩いて表示するウィジェット
   - 公開 API（天気・ポケモン・JSONPlaceholder など）からデータ取得。  
   - ボタンを押すとデータを取得して、画面のカードに表示。  
   - `async/await` を使う。  

3. モジュール分割
   - 2. のアプリを `api.js`（データ取得）と `ui.js`（DOM 操作）に分割。  
   - README の「Router / Service / Gateway」のように、責務を分ける意識で構成する。 [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/173318642/ec8e3836-3a67-49e4-afe0-420147749a3d/README.md)

***

## 実際のリポジトリ構成アイデア

README の方針に合わせるなら、JavaScript 用に以下のようなフォルダを切ると整理しやすいです。 [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/173318642/ec8e3836-3a67-49e4-afe0-420147749a3d/README.md)

- `javascript-week1/`〜`javascript-week4/`
- 各フォルダに:
  - `src/`：その週の完成コード  
  - `memo.md`：学んだこと・エラー・疑問点のメモ（任意）

***

## 補足：JS → React へのつなぎ

この 4 週間で、React を学ぶ前提として必要な **コア JavaScript** の基礎（変数・関数・配列・オブジェクト・DOM・非同期）をざっくり一通り触れる想定です。 [learnsoftorganization](https://www.learnsoftorganization.in/blog/reactjs-prerequisites-guide)
終わったら、React 学習用に別途「React 1 週目：コンポーネントと JSX」などのロードマップも、この README のスタイルに合わせて組んでいけます。 [unwiredlearning](https://unwiredlearning.com/assets/roadmap/frontend-development-javascript-react-roadmap.pdf)