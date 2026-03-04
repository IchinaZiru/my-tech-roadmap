// Lesson 11: Utility Types
// docs/11-utility-types.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Partial<User> で全プロパティをオプショナルにする
//   [ ] Readonly<User> で全プロパティを読み取り専用にする
//   [ ] Pick<User, 'name' | 'email'> で一部プロパティを抽出する
//   [ ] Omit<User, 'password'> で一部プロパティを除外する

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
//const user: FrozenUser = { name: '田中', email: '...', password: '...', age: 25 }
// user.name = '鈴木'  // ← エラー: Cannot assign to 'name' because it is a read-only property

// Pick: 指定したプロパティだけを抽出する
type PublicProfile = Pick<User, 'name' | 'email'>
// → { name: string; email: string }

// Omit: 指定したプロパティを除外する
type SafeUser = Omit<User, 'password'>
// → { name: string; email: string; age: number }
export function run(): string {
  // ここに実装する
  const update: UpdateUser = {name: '田中'}

  // Readonly: 全プロパティ変更不可
  const frozenUser: FrozenUser = { name: '田中', email: 'tanaka@example.com', password: '***', age: 25 }

  // Pick: name と email だけのオブジェクト
  const profile: PublicProfile = { name: '田中', email: 'tanaka@example.com' }

  // Omit: password なしのオブジェクト
  const safeUser: SafeUser = { name: '田中', email: 'tanaka@example.com', age: 25 }


  return `
  <h1>Lesson 11: Utility Types</h1>
  <h2>---元の User 型---</h2>
  <pre>${JSON.stringify({ name: '田中', email: '...', password: '...', age: 25 }, null, 2)}</pre>
  <h2> --- Partial<User>(更新用) ---</h2>
  <p>更新内容: ${JSON.stringify(update)}</p>

  <h2>Readonly</h2>
  <p>${JSON.stringify(frozenUser)}</p>

  <h2>Pick</h2>
  <p>${JSON.stringify(profile)}</p>

  <h2>Omit</h2>
  <p>${JSON.stringify(safeUser)}</p>
  `
}
