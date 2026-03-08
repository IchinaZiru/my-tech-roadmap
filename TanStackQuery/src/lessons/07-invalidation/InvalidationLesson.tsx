// Lesson 07: Query Invalidation
// docs/07-invalidation.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 投稿リストを useQuery で取得して表示する
//   [ ] useMutation で新しい投稿を作る（Lesson 06 と同じ）
//   [ ] onSuccess の中で queryClient.invalidateQueries({ queryKey: ['posts'] }) を呼ぶ
//   [ ] 投稿後にリストが自動更新されることを確認する
//   [ ] useQueryClient() で queryClient を取得することを覚える

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export default function InvalidationLesson() {
  const [title, setTitle] = useState('')

  // useQueryClient() で queryClient を取得する
  const queryClient = useQueryClient()

  const { data: posts, isPending } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      return res.json()
    },
  })

  // ここに useMutation を実装する
  // onSuccess で invalidateQueries を呼ぶ
  const mutation = useMutation({
    mutationFn: async (newPost: { title: string }) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      })

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`)
      }

      return res.json()
    },
    onSuccess: () => {
      setTitle('')
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate({ title })
  }


  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 07: Query Invalidation</h2>

      {/* 投稿フォームをここに追加する（title だけでOK） */}
      <form
        className="mb-6 flex gap-3"
        onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-3 py-2"
          placeholder="タイトル"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          投稿する
        </button>
      </form>

      <div className="mt-8">
        <h3 className="font-bold mb-4">投稿リスト</h3>
        {isPending && <p className="text-gray-400">読み込み中...</p>}
        {/* posts をリスト表示する */}
        <ul className="space-y-2">
          {posts?.map((post: any) => (
            <li key={post.id} className="border rounded p-4">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
