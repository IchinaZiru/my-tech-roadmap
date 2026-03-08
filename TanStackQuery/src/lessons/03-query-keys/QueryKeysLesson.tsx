// Lesson 03: Query Keys
// docs/03-query-keys.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useState で postId（初期値: 1）を管理する
//   [ ] queryKey を ['post', postId] のように変数を含む形にする
//   [ ] ボタン（1〜3番）で postId を切り替えると別の投稿が表示されることを確認する
//   [ ] 一度表示した投稿に戻ったとき、即座に表示される（キャッシュが効いている）ことを確認する

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function QueryKeysLesson() {
  // postId の状態管理をここに追加する
  const [postId, setPostId] = useState(1)

  const { data, isPending } = useQuery({
    queryKey: ['post', postId], // postId が変わると別のキャッシュとして扱われる
    queryFn: async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      return res.json()
    },
  })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 03: Query Keys</h2>

      {/* postId を切り替えるボタンをここに追加する（1・2・3番） */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setPostId(1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            投稿1
          </button>
          <button
            onClick={() => setPostId(2)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            投稿2
          </button>
          <button
            onClick={() => setPostId(3)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            投稿3
          </button>
        </div>
      {isPending && <p className="text-gray-400">読み込み中...</p>}
      {/* data.title と data.body をここに表示する */}
      <p>Title: {data?.title}</p>
      <p>Body: {data?.body}</p>
    </div>
  )
}
