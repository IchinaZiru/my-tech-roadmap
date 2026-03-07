// Lesson 01: Hello World
// docs/01-hello-world.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Button コンポーネントをインポートして表示する
//   [ ] 「shadcn/ui へようこそ！」と表示されるボタンを作る
//   [ ] components/ui/button.tsx を開いて、中身のコードを見てみる
//   [ ] shadcn/ui が「ライブラリではなくコードをコピーする仕組み」だと理解する

import { Button } from '@/components/ui/button'

function handleClick() {
  alert('ボタンがクリックされました！')
}

export default function HelloWorldLesson() {
  return (
    <div className="p-8 flex gap-4">
      <h2 className="text-2xl font-bold mb-6">Lesson 01: Hello World</h2>

      {/* ここにコードを追加する */}
      {/* ヒント: <Button> コンポーネントを使ってボタンを表示する */}
      <Button>shadcn/ui へようこそ！</Button>
      <Button onClick={handleClick}>shadcn/ui へようこそ！</Button>
    </div>
  )
}
