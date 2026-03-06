# Lesson 08: safeParse とエラーハンドリング

## このレッスンで学ぶこと

### .parse() の問題点

`.parse()` は検証に失敗すると**例外（エラー）を投げます**。
`try/catch` で必ず受け取る必要があり、コードが複雑になります。

```ts
try {
  const result = schema.parse(data)
  // 成功処理
} catch (e) {
  // 失敗処理
}
```

### .safeParse() とは

`.safeParse()` は例外を投げず、結果を**オブジェクトとして返します**：

```ts
const result = schema.safeParse(data)

if (result.success) {
  console.log(result.data)   // 検証済みデータ
} else {
  console.log(result.error)  // ZodError オブジェクト
}
```

### ZodError の中身

`result.error.issues` に全エラーの配列が入っています：

```ts
// issues の例
[
  {
    code: "too_small",
    minimum: 1,
    path: ["name"],           // エラーのあったフィールドのパス
    message: "String must contain at least 1 character(s)"
  },
  {
    code: "invalid_string",
    path: ["email"],
    message: "Invalid email"
  }
]
```

各 issue の主なプロパティ：
- `path`: どのフィールドでエラーが起きたか（例: `["user", "email"]`）
- `message`: エラーメッセージ
- `code`: エラーの種類

### .parse() vs .safeParse() の使い分け

| | .parse() | .safeParse() |
|---|---|---|
| エラー時 | 例外を投げる | 結果オブジェクトを返す |
| 使いどころ | エラーが「あり得ない」場所 | フォーム検証・API検証など |

---

## 何を実装するか

`src/lessons/08-safe-parse-errors/SafeParseErrorsLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `z.object()` で複数フィールドを持つスキーマを定義する
- [ ] `.safeParse()` でデータを検証する
- [ ] `result.success` で成功・失敗を分岐する
- [ ] `result.error.issues` から全エラーを取り出して表示する
- [ ] `issue.path` でどのフィールドのエラーかを表示する

---

## 画面イメージ

```
┌───────────────────────────────────────────┐
│ Lesson 08: safeParse とエラーハンドリング  │
│                                           │
│  ┌─────────────────────────────────────┐  │
│  │ {                                   │  │
│  │   "name": "",                       │  │
│  │   "email": "not-an-email",          │  │
│  │   "age": -5                         │  │
│  │ }                                   │  │
│  └─────────────────────────────────────┘  │
│                                           │
│  [safeParse する]                         │
│                                           │
│  ❌ 検証失敗（3件のエラー）               │
│  [name]: 1文字以上必要です                │
│  [email]: Invalid email                   │
│  [age]: 0より大きい値が必要です           │
└───────────────────────────────────────────┘
```

---

## ヒント

`result.error.issues` は配列です。`.map()` で全エラーを表示できます。

`issue.path` は配列（例: `["email"]`）なので、`issue.path.join(".")` で
`"email"` という文字列にできます。
ネストしたオブジェクトの場合は `"user.email"` のようになります。

---

## 学習ノート

### 概念

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（React フォームの送信ハンドラでよく使うパターン）

### 落とし穴
（`result.error` は `result.success === false` のときだけ存在する）

### 説明できる状態
- [ ] `.parse()` と `.safeParse()` の違いを説明できる
- [ ] `ZodError.issues` からエラー情報を取り出せる
- [ ] `issue.path` と `issue.message` の意味を説明できる
