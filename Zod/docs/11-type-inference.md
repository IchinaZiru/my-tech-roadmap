# Lesson 11: 型推論

## このレッスンで学ぶこと

### z.infer<> とは

`z.infer<typeof schema>` は、スキーマから TypeScript の型を**自動生成**します。

```ts
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
})

type User = z.infer<typeof userSchema>
// 上の型は以下と同じ：
// type User = {
//   id: number
//   name: string
//   email: string
// }
```

### なぜこれが重要なのか

スキーマと型を**二重管理せずに済む**のが最大のメリットです。

スキーマを変更するだけで型も自動で変わるため、「スキーマと型が食い違う」というバグがなくなります。

```ts
// スキーマにフィールドを追加
const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.enum(["admin", "user"]),  // ← 追加
})

// 型は自動で更新される
type User = z.infer<typeof userSchema>
// → { id: number; name: string; role: "admin" | "user" }
```

### z.input<> と z.output<>

`.transform()` があるスキーマでは、入力と出力の型が異なります：

```ts
const schema = z.object({
  score: z.string().transform(val => Number(val)),
})

type Input = z.input<typeof schema>   // { score: string }
type Output = z.output<typeof schema> // { score: number }
type Inferred = z.infer<typeof schema> // z.output<> と同じ
```

### 型のエクスポート

実務では型をエクスポートして他のファイルから使います：

```ts
// schemas/user.ts
export const userSchema = z.object({ ... })
export type User = z.infer<typeof userSchema>

// components/UserCard.tsx
import type { User } from '../schemas/user'
function UserCard({ user }: { user: User }) { ... }
```

---

## 何を実装するか

`src/lessons/11-type-inference/TypeInferenceLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] スキーマを定義して `z.infer<>` で型を生成する
- [ ] VSCode でホバーして型を確認する
- [ ] 生成した型を関数の引数型として使う
- [ ] スキーマにフィールドを追加して型が自動で変わることを確認する
- [ ] `.transform()` を使って `z.input<>` と `z.output<>` の違いを確認する

---

## 画面イメージ

このレッスンは UI 操作よりも VSCode での型確認が主役です。
コードを書きながら以下を確認してください：

```
1. z.infer<typeof userSchema> にホバー
   → "type User = { id: number; name: string; ... }" が表示される

2. userSchema.parse(sampleData) の戻り値を変数に代入
   → 変数にホバーすると User 型になっている

3. User 型の関数に引数を渡す
   → 型が合わないとコンパイルエラーが出る
```

---

## ヒント

`z.infer<>` は TypeScript のジェネリクスです。
`typeof schema` でスキーマの型を取り、`z.infer<>` がそれを TypeScript 型に変換します。

スキーマを変数に `as const` をつけずに定義すると型推論が正しく働きます。

---

## 学習ノート

### 概念

### 最小実装
```ts
// ここに最小限のコードを書く
```

### 実務での型
（スキーマファイルと型定義ファイルを分離しない書き方）

### 落とし穴
（`z.infer<>` は `z.output<>` と同じ。transform がある場合は入力型に注意）

### 説明できる状態
- [ ] `z.infer<>` の意味と使い方を説明できる
- [ ] スキーマから型を生成するメリットを説明できる
- [ ] `z.input<>` と `z.output<>` の違いを説明できる
