// Lesson 05: Objects & Types
// docs/05-objects-types.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] インラインでオブジェクトの型を書く（{ name: string; age: number }）
//   [ ] type エイリアスで User 型を定義する
//   [ ] User 型の変数を作って各プロパティを表示する
//   [ ] オプショナルプロパティ（nickname?: string）を持つ型を作る

type User = {
    name : string
    age : number
    nickname? : string
  }

export function run(): string {
  // ここに実装する
  const point : {x : number,y : number} = {x: 10, y: 20}

  const user1 : User ={
    name : "田中",
    age : 25,
    nickname : "taro"
  }
  const user2 : User ={
    name : "鈴木",
    age: 30
  }

  return `
  <h1>Lesson 05: Objects & Types</h1>
  <h2>--- インライン型 ---</h2>
  <h2>座標 : x=${point.x}, y=${point.y}</h2>
  <h2>--- type エイリアス ---</h2>
  <h2>ユーザー1: ${user1.name},${user1.age},${user1.nickname ?? '(なし)'}</h2>
  <h2>ユーザー2: ${user2.name},${user2.age},${user2.nickname ?? '(なし)'}</h2>
  `
}
