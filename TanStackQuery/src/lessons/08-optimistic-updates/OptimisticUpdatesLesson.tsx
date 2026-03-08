// Lesson 08: Optimistic Updates（楽観的更新）
// docs/08-optimistic-updates.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 投稿リストを取得して「いいね数」を表示する（ローカル状態で管理）
//   [ ] 「いいね」ボタンを押したとき、サーバーの応答を待たずに即座に数を+1する（onMutate）
//   [ ] ミューテーションが失敗したとき、元の値に戻す（onError でロールバック）
//   [ ] onSettled で最終的に invalidateQueries を呼んでサーバーと同期する

import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Post = {
  id: number
  title: string
  likes: number
}

export default function OptimisticUpdatesLesson() {
  // ローカルで「いいね数」を管理する（実際はサーバーで管理）
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'First Post', likes: 10 },
    { id: 2, title: 'Second Post', likes: 5 },
    { id: 3, title: 'Third Post', likes: 23 },
  ])

  const queryClient = useQueryClient()

  // ここに useMutation を実装する
  // onMutate: 楽観的にローカル状態を更新する
  // onError: ロールバックする
  // onSettled: 最終的に整合性を取る
  // const likeMutation = useMutation({ ... })
  const likeMutation = useMutation({
    mutationFn: async (postId: number) => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      return postId
    },
    onMutate: (postId: number) => {
      const previousPosts = posts

      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      )

      return { previousPosts }
    },
    onError: (_err, _postId, context) => {
      if (context?.previousPosts) {
        setPosts(context.previousPosts)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })

  
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 08: Optimistic Updates</h2>

      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between border rounded p-4">
            <span>{post.title}</span>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">❤️ {post.likes}</span>
              <button
                className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 text-sm"
                onClick={() => {
                  // ここで likeMutation.mutate(post.id) を呼ぶ
                  likeMutation.mutate(post.id)
                }}
              >
                いいね
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
