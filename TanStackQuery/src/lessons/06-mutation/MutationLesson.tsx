// Lesson 06: Mutation
// docs/06-mutation.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useMutation を import して POST リクエストを送る関数を mutationFn に渡す
//   [ ] フォームで title と body を入力できるようにする
//   [ ] 送信ボタンで mutate({ title, body }) を呼ぶ
//   [ ] isPending（送信中）と isSuccess（成功）でUIを出し分ける
//   [ ] onSuccess コールバックでフォームをリセットする

import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

export default function MutationLesson() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // ここに useMutation を実装する
  // const mutation = useMutation({ mutationFn: ... })
  const mutation = useMutation({
    mutationFn: async (data: { title: string, body: string }) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // mutation.mutate({ title, body }) を呼ぶ
    mutation.mutate({title, body})
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 06: Mutation</h2>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">本文</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border rounded px-3 py-2"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          {/* mutation.isPending のとき「送信中...」に変える */}
          投稿する
        </button>
      </form>
      {mutation.isPending && <p className="text-gray-400">送信中...</p>}
      {mutation.isSuccess && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>投稿が正常に作成されました！</p>
          <p>ID: {mutation.data?.id}</p>
          <p>タイトル: {mutation.data?.title}</p>
          <p>本文: {mutation.data?.body}</p>
        </div>
      )}
    </div>
  )
}
