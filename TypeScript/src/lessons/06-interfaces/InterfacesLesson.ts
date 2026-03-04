// Lesson 06: Interfaces
// docs/06-interfaces.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] interface で Animal を定義する（name: string, sound: string）
//   [ ] interface で Dog を定義し Animal を extends する（breed を追加）
//   [ ] Animal 型と Dog 型の変数をそれぞれ作って表示する
//   [ ] interface と type の違いをコメントで説明する

interface Animal { 
  name: string
  sound: string
}

interface Dog extends Animal { 
  breed: string
}

export function run(): string {
  // ここに実装する
  const animal: Animal = { name: 'ネコ', sound: 'にゃー' }
  const dog: Dog ={ name: 'ポチ', sound: 'ワン', breed: '柴犬' }
  return `
  <h2>--- Animal ---</h2>
  <p>名前: ${animal.name}</p>
  <p>鳴き声: ${animal.sound}</p>
  <h2>--- Dog ---</h2>
  <p>名前: ${dog.name}</p>
  <p>鳴き声: ${dog.sound}</p>
  <p>犬種: ${dog.breed}</p>
  `
}
