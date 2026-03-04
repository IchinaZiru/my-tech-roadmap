// Lesson 04: Arrays & Tuples
// docs/04-arrays-tuples.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] string[] 型の配列を宣言してすべての要素を表示する
//   [ ] number[] 型の配列で map / filter を使う
//   [ ] タプル型 [string, number] を宣言して要素にアクセスする
//   [ ] 配列とタプルの違いをコメントで説明する

export function run(): string {
  // ここに実装する

  //配列
  const fruits: string[] = [`リンゴ`, `バナナ`, `オレンジ`]
  const scores :number[] = [80, 90, 70]

  //タプル
  const person : [string, number] = ["田中", 25]
  return `
  <h2> Lesson 04: Arrays & Tuples</h2>
  <h3>--配列--</h3>
  <h3>fruits: ${fruits.join(', ')}</h3>
  <h3>scores: ${scores}</h3>
  <h3>2倍: ${scores.map(s => s * 2)}</h3>
  <h3>70以上：${scores.filter(s => s >= 70)}</h3>
  <h3>--タプル--</h3>
  <h3>person: ${person[0]}, ${person[1]}</h3>
  <h3>名前: ${person[0]}</h3>
  <h3>年齢 : ${person[1]}</h3>
  `
}
