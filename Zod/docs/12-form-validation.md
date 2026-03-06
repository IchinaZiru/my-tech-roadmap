# Lesson 12: フォームバリデーション（実践）

## このレッスンで学ぶこと

### これまでの集大成

このレッスンでは、Lesson 01〜11 で学んだ全ての知識を組み合わせます：

- `z.object()` でフォームスキーマを定義
- 文字列・数値バリデーション
- `.safeParse()` でエラーを安全に取り出す
- `ZodError.issues` から各フィールドのエラーを特定
- `z.infer<>` でフォームデータの型を生成

### .refine() とは

`.refine()` はカスタムバリデーションを追加します。
スキーマのメソッドでは表現できないルール（例：2つのフィールドの相関チェック）に使います。

```ts
const schema = z.object({
  password: z.string(),
  confirmPassword: z.string(),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "パスワードが一致しません",
    path: ["confirmPassword"],  // エラーが出るフィールド
  }
)
```

### React フォームとの組み合わせ方

```ts
function handleSubmit(e: React.FormEvent) {
  e.preventDefault()

  const result = schema.safeParse(formData)

  if (!result.success) {
    // errors を state にセットして表示
    const fieldErrors: Record<string, string> = {}
    result.error.issues.forEach(issue => {
      const field = issue.path[0] as string
      fieldErrors[field] = issue.message
    })
    setErrors(fieldErrors)
    return
  }

  // 送信成功
  console.log(result.data)
}
```

---

## 何を実装するか

`src/lessons/12-form-validation/FormValidationLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] 登録フォームのスキーマ（名前・メール・パスワード・年齢）を定義する
- [ ] `.refine()` でパスワード確認フィールドの一致チェックを実装する
- [ ] 送信時に `safeParse` で検証してエラーを各フィールドに表示する
- [ ] 全バリデーションが通ったら「登録完了」画面を表示する
- [ ] `z.infer<typeof registerSchema>` で型を生成して使う

---

## 画面イメージ

```
┌──────────────────────────────────────┐
│ Lesson 12: フォームバリデーション    │
│                                      │
│  名前                                │
│  [                ]                  │
│  ❌ 名前は必須です                   │
│                                      │
│  メールアドレス                      │
│  [not-an-email    ]                  │
│  ❌ 正しいメールアドレスを入力して   │
│     ください                         │
│                                      │
│  パスワード（8文字以上）             │
│  [****            ]                  │
│                                      │
│  パスワード（確認）                  │
│  [*****           ]                  │
│  ❌ パスワードが一致しません         │
│                                      │
│  年齢（18歳以上）                    │
│  [15              ]                  │
│  ❌ 18歳以上のみ登録できます         │
│                                      │
│  [登録する]                          │
└──────────────────────────────────────┘
```

---

## ヒント

### エラーをフィールドに割り当てる

`issues.forEach()` で全エラーを走査し、`issue.path[0]` をキーにした
`Record<string, string>` オブジェクトを作ると、フィールドごとのエラーを管理できます。

### age の型変換

フォームの入力値は常に文字列です。`z.preprocess()` を使うか、
`{ age: Number(form.age) }` のように変換してから `safeParse` に渡しましょう。

### .refine() のエラー表示

`.refine()` に `path: ["confirmPassword"]` を指定すると、
そのエラーも `issues` に含まれ `path[0]` が `"confirmPassword"` になります。

---

## 学習ノート

### 概念

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（react-hook-form + Zod の組み合わせが実務ではよく使われる）

### 落とし穴
（`.refine()` のエラーの `path` を忘れると、エラーがどのフィールドか分からなくなる）

### 説明できる状態
- [ ] `.refine()` の使い方を説明できる
- [ ] React フォームと Zod を組み合わせる基本パターンを書ける
- [ ] 各フィールドにエラーを割り当てる方法を説明できる
- [ ] Zod で学んだことを全体的に振り返って説明できる
