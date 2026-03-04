# Lesson 11: Utility Types

## このレッスンで学ぶこと

既存の型を**変換**する組み込みユーティリティ型を学ぶ。

自分で型を定義するだけでなく、TypeScript には「型を加工する道具」が標準で用意されている。
`Partial` で全プロパティをオプショナルに、`Readonly` で変更不可に、
`Pick` や `Omit` で一部だけ取り出す/除外する。「型をコピーせず再利用する」発想が実務で重要。

---

## なぜ必要か（実生活の例）

`User` 型という「設計図」があるとする。

```
User = { name, email, password, age }（全部必須）
```

この設計図を**そのままでは使いにくい場面**が実務では頻繁に起こる。

| 場面 | 問題 | 解決するツール |
|------|------|--------------|
| プロフィール更新フォーム | 「名前だけ変えたい」→ 他の項目も必須だと困る | `Partial` |
| DBから読んだデータの表示 | うっかり書き換えてしまうと困る | `Readonly` |
| ブログの著者欄 | パスワード・年齢は見せたくない | `Pick`（必要なものだけ選ぶ） |
| APIレスポンス | パスワードだけは絶対返したくない | `Omit`（不要なものだけ除く） |

**ポイント**: 元の `User` 型を変えずに、用途ごとに「ちょうどいい型」を作れる。

---

## 何を実装するか

`src/lessons/11-utility-types/UtilityTypesLesson.ts` に以下を全て含むコードを書く。

### 実装チェックリスト

- [ ] `type User` を定義する（`name`, `email`, `password`, `age` の4プロパティ）
- [ ] `Partial<User>` を使って更新用の型（全プロパティがオプショナル）を作る
- [ ] `Readonly<User>` を使って読み取り専用の型を作り、代入を試みるとエラーになることをコメントで示す
- [ ] `Pick<User, 'name' | 'email'>` で公開用プロフィール型を作る
- [ ] `Omit<User, 'password'>` でパスワードを除いた型を作る

### 画面イメージ

```
Lesson 11: Utility Types

--- 元の User 型 ---
{ name: string; email: string; password: string; age: number }

--- Partial<User>（更新用） ---
全プロパティがオプショナルになる
{ name?: '田中' } だけの更新オブジェクトが作れる

--- Readonly<User>（読み取り専用） ---
user.name = '...' → コンパイルエラー（代入不可）

--- Pick<User, 'name' | 'email'>（公開プロフィール） ---
{ name: '田中', email: 'tanaka@example.com' }

--- Omit<User, 'password'>（安全なユーザー情報） ---
{ name: '田中', email: 'tanaka@example.com', age: 25 }
```

---

## ヒント

```ts
type User = {
  name: string
  email: string
  password: string
  age: number
}

// Partial: 全プロパティを ? にする（部分更新に便利）
type UpdateUser = Partial<User>
// → { name?: string; email?: string; password?: string; age?: number }

// Readonly: 全プロパティを readonly にする（変更禁止）
type FrozenUser = Readonly<User>
const user: FrozenUser = { name: '田中', email: '...', password: '...', age: 25 }
// user.name = '鈴木'  // ← エラー: Cannot assign to 'name' because it is a read-only property

// Pick: 指定したプロパティだけを抽出する
type PublicProfile = Pick<User, 'name' | 'email'>
// → { name: string; email: string }

// Omit: 指定したプロパティを除外する
type SafeUser = Omit<User, 'password'>
// → { name: string; email: string; age: number }
```

---

## main.ts への接続方法

```ts
// コメントを外す
import * as UtilityTypesLesson from './lessons/11-utility-types/UtilityTypesLesson'

// run: null を変更する
{ label: '11 Utility Types', run: UtilityTypesLesson.run },
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- ユーティリティ型とは何か、1〜3行で書く -->

### 最小実装
```ts
// Partial と Omit の最小使用例を書く
```

### 実務での型
```ts
// フォームの更新処理・API レスポンス加工など、実務でよく見るパターンを書く
```

### 落とし穴
<!-- Partial と Optional の混同・深いネストへの非対応など -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
