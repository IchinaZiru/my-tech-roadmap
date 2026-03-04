
# Week2 学習ログ（関数・配列・オブジェクト・コンソール入力）

Week2 は、JavaScript の「処理を関数で分ける」「配列/オブジェクトを扱う」に加えて、
Node.js のコンソール入力（`readline`）を使って小さなミニアプリを作る週です。

---

## 目的

- 関数で「入力/処理/出力」を分けて書けるようにする
- 配列操作（追加・一覧・削除）を自分の言葉で説明できるようにする
- `readline` の非同期入力に慣れて、CLIアプリの形を作れるようにする

---

## 成果物

- 教材（まとめ）: `JavaScript/docs/textbook2.md`
- `readline` まとめ: `JavaScript/docs/text_readline.md`
- 成績管理ミニアプリ: `JavaScript/src/grade_manager.js`（ログ: `JavaScript/docs/grade_manager.md`）
- TODOリスト（コンソール）: `JavaScript/src/todo_list.js`（ログ: `JavaScript/docs/todo_list.md`）

---

## Week2 で一番大事だったこと（TODOリストで詰まりやすい点）

### 1) `readline` は非同期（入力は“後から届く”）

`rl.question()` は「その場で値が返る」のではなく、
**入力が確定した後**にコールバックが動きます。

そのため `while` で回し続ける発想や、同期的な代入（`const cmd = ...`）にすると混乱しやすいです。

### 2) 入力待ちは「同時に2つ作らない」

`command>` を待つ `question` と、`Enter todo title:` を待つ `question` が同時に走ると、
プロンプトが競合して挙動が不安定になります。

対策はシンプルで、

- **操作が終わったら次の `command>` に戻す**

という流れに統一することです（`done()` パターンなど）。

### 3) `readline` は1回だけ作って共有する

関数のたびに `createInterface` すると、入力窓口が増えてさらに壊れやすくなります。

- `rl` はアプリ全体で1つ
- 終了するとき（Exit）だけ `rl.close()`

---

## 次にできるようになりたいこと（小目標）

- TODOを「完了/未完了」で持てるようにする（データをオブジェクトにする）
- 入力バリデーション（空文字・範囲外・NaN）を自力で追加できる

