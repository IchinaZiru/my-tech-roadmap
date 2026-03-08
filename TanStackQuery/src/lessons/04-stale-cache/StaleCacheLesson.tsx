// Lesson 04: Stale Time & Cache
// docs/04-stale-cache.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] staleTime: 0 のクエリと staleTime: 30000 のクエリを並べて作る
//   [ ] ブラウザのタブを切り替えて戻ったとき、どちらが再取得されるか確認する
//   [ ] DevTools（React Query Devtools）で各クエリのステータスを観察する
//   [ ] （おまけ）gcTime を短くして、キャッシュが消えるタイミングを確認する

import { useQuery } from '@tanstack/react-query'

export default function StaleCacheLesson() {
  // staleTime: 0（デフォルト）— データはすぐ「古い」と判定される
  const freshQuery = useQuery({
    queryKey: ['post-fresh', 1],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      return res.json()
    },
    staleTime: 0,
  })

  const staleQuery = useQuery({
    queryKey: ['post-stale', 2],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/2')
      return res.json()
    },
    staleTime: 5_000,
  })

  // staleTime: 30000 — 30秒間は「新鮮」なので再取得しない
  // ここに staleQuery を追加する（queryKey: ['post-stale', 1], staleTime: 30_000）

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 04: Stale Time & Cache</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="border rounded p-4">
          <h3 className="font-bold mb-2">staleTime: 0（デフォルト）</h3>
          {/* freshQuery の結果をここに表示する */}
          {freshQuery.data && (
            <div>
              <p>Title: {freshQuery.data.title}</p>
              <p>Body: {freshQuery.data.body}</p>
            </div>
          )}
        </div>

        <div className="border rounded p-4">
          <h3 className="font-bold mb-2">staleTime: 30秒</h3>
          {/* staleQuery の結果をここに表示する */}
          {staleQuery.data && (
            <div>
              <p>Title: {staleQuery.data.title}</p>
              <p>Body: {staleQuery.data.body}</p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        タブを切り替えて戻ると、staleTime: 0 のほうだけ再取得されます。
      </p>
    </div>
  )
}
