# readline まとめ（Node.js のコンソール入力）

このドキュメントは、Node.js の **`readline`**（コンソール入力）を、混乱しやすいポイントに絞ってまとめたものです。

- 目的：コンソールで「入力→処理→出力」を作れるようにする
- 前提：`console.log` は **出力**、`readline` は **入力**

---

## 概念（何を解決するか）

`readline` は **ターミナル（コンソール）から1行の文字入力を受け取る**ための仕組みです。

- ブラウザ：`prompt()` で入力できる
- Node.js：`prompt()` は使えないので、`readline` などで入力を受け取る

---

## まず全体像（`readline` の部品）

`readline` でよく出てくる部品は次の3つです。

- `readline.createInterface({ input, output })`：入力と出力をつないだ「窓口」を作る
- `rl.question("...", (answer) => { ... })`：1回だけ質問して、1行の入力を受け取る
- `rl.on("line", (line) => { ... })`：Enter が押されるたびに、何度でも入力を受け取る

覚え方：
- `question` は「1回質問」
- `line` は「ずっと受付」

---

## セットアップ（よく使う読み込み方）

### CommonJS（`require`）

```js
const readline = require("node:readline");
```

### ES Modules（`import`）

```js
import readline from "node:readline";
```

どちらを使うかは、プロジェクトの設定（`type: module` など）に依存します。

---

## 最小実装（1回だけ入力をもらう）

最小の形は「質問する → 入力を受け取る → 終了する」です。

```js
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("名前は？: ", (text) => {
  console.log(`こんにちは、${text}さん！`);
  rl.close();
});
```

ここで覚えることは2つだけ。

- `text` は **ユーザーが入力して Enter を押した文字列**
- `rl.close()` を呼ぶと入力待ちが終わる（終了できる）

---

## 一般的な使い分け（`question` vs `line`）

### 1) `question`：単発の入力に向く

例：名前を1回だけ聞く、1回だけ数値を聞く、など。

- 書きやすい
- ただし複数回聞きたい場合は「次の `question` を呼ぶ」形でつなぐ

### 2) `line` イベント：繰り返しの入力に向く

例：REPLっぽいツール、コマンドを何度も受け付けるツール、など。

```js
const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("何か入力して Enter（exit で終了）");

rl.on("line", (line) => {
  if (line === "exit") {
    rl.close();
    return;
  }
  console.log("入力:", line);
});
```

---

## 複数質問の型（段階的に入力を集める）

「コマンド → 追加タイトル → 確認」など、質問が複数ある場合の考え方です。

- 入力は“後から来る”ので、次の質問は「前の入力を受け取った後」に出す
- 設計としては「次に何を聞いているか」を状態で持つか、関数で分ける

最小の考え方（日本語で）：

1. まず質問Aを出す
2. Aの入力が来たら、質問Bを出す
3. Bの入力が来たら、処理して終了 or 最初に戻る

---

## `async/await` で書きたいとき（Promise化）

コールバックが入れ子になって辛いときは、`question` を Promise で包むと `await` で書けます。

```js
const readline = require("node:readline");

function question(rl, prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => resolve(answer));
  });
}

(async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const name = await question(rl, "名前は？: ");
  const ageText = await question(rl, "年齢は？: ");

  console.log({ name, ageText });
  rl.close();
})();
```

ポイント：
- `await` すると「入力が返ってくるまで待てる」ように見える
- 実際には内部でコールバックが動いているが、書き味が読みやすくなる

---

## 実務での型（「繰り返し入力」の基本形）

「何回も入力を受ける」プログラムは、次の型になります。

- メニュー表示（出力）
- `readline` でコマンドを1回受け取る（入力）
- コマンドを処理する
- 終了でなければ、また次の入力へ

### 1) なぜ `while` が難しいのか（非同期）

`readline` は「入力が来るまで待つ」必要があるため、入力値は **後から届きます**。

- `const cmd = ...` みたいに“その場で”値が手に入るわけではない
- 入力された後に実行される場所（コールバック）で処理を書く

### 2) 何度も入力を受け取る（`question` を繰り返す）

`question` の中で、次の `question` を呼ぶことで「ループ」できます。

```js
function promptCommand() {
  showMenu();

  rl.question("command> ", (cmd) => {
    const result = handleCommand(cmd);

    if (result === "exit") {
      rl.close();
      return;
    }

    promptCommand();
  });
}

promptCommand();
```

ポイント：
- 入力は文字列なので、分岐もまずは文字列で行う（例：`switch (cmd)` → `case "1"`）
- 終了したいときだけ `rl.close()`

### 3) 連続入力向け（`line` イベント）

Enter を押すたびに `line` が発火します。

```js
rl.on("line", (line) => {
  console.log("入力:", line);
});
```

---

## 落とし穴（よくあるミス）

- **`console.log` は入力を受け取れない**
  - `const cmd = console.log("...")` は `cmd` が `undefined` になる
  - 入力は `rl.question(..., (cmd) => { ... })` の `cmd` で受け取る

- **入力は全部「文字列」**
  - 数字として使うなら `Number(text)` で変換する
  - 変換できない入力は `NaN` になるので `Number.isNaN(...)` でチェックする

- **`rl.close()` を忘れて終了しない**
  - 1回入力で終わるプログラムは、最後に `rl.close()` を呼ぶ

- **Ctrl+C（SIGINT）で終了したい**
  - ターミナルで Ctrl+C が押されたときに後片付けしたい場合は、`process.on("SIGINT", ...)` を使う
  - 例：入力中に中断しても `rl.close()` して終了する、など

- **処理を書く場所が違う（非同期）**
  - 入力された値を使う処理は、必ず `question` のコールバック内に置く

---

## 説明できる状態（チェックリスト）

- `readline` が「コンソール入力のための仕組み」だと説明できる
- `cmd` は「ユーザー入力の文字列」だと説明できる
- `console.log` は出力で、入力ではないと言える
- `question` のコールバックが「入力後に動く」理由を説明できる
- 「繰り返し入力」の型（次の `question` を呼ぶ、または `line` を使う）を説明できる

---

## 動作確認（例）

PowerShell で実行：

```powershell
node .\path\to\your_script.js
```

※ 実行したい `.js` ファイルのパスに置き換えてください。
