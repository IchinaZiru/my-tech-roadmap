// Lesson 01: Hello World
// docs/01-hello-world.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useQuery を import する
//   [ ] queryKey に ['post'] を指定する
//   [ ] queryFn で JSONPlaceholder の /posts/1 を fetch して JSON を返す
//   [ ] data.title と data.body を画面に表示する

import { useQuery } from '@tanstack/react-query'

export default function HelloWorldLesson() {
  // ここに useQuery を実装する
  // const { data } = useQuery({ ... })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 01: Hello World</h2>
      {/* 取得した data.title と data.body をここに表示する */}
    </div>
  )
}
