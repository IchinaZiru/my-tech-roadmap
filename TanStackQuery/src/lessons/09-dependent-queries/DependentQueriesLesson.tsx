// Lesson 09: Dependent Queries（依存クエリ）
// docs/09-dependent-queries.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 最初のクエリ（ユーザー情報）を取得する
//   [ ] userId が取得できるまで2番目のクエリを enabled: false で止める
//   [ ] userId が取得できたら enabled: !!userId で2番目のクエリを起動する
//   [ ] 1番目と2番目のクエリの状態（isPending）を個別に表示する

import { useQuery } from '@tanstack/react-query'

export default function DependentQueriesLesson() {
  // Step 1: 投稿ID=1 からユーザーIDを取得する
  const { data: post, isPending: isPostPending } = useQuery({
    queryKey: ['post-for-user', 1],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      return res.json()
    },
  })

  // userId は post.userId から取得する（post が undefined の間は undefined）
  const userId = post?.userId

  // Step 2: userId が取得できたらユーザー情報を取得する
  // enabled: !!userId で userId が truthy になるまでクエリを止める
  // ここに userQuery を実装する
  // const { data: user, isPending: isUserPending } = useQuery({ ... })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 09: Dependent Queries</h2>

      <div className="space-y-6">
        <div className="border rounded p-4">
          <h3 className="font-bold mb-2">Step 1: 投稿を取得</h3>
          {isPostPending
            ? <p className="text-gray-400">取得中...</p>
            : <p>{post?.title}</p>
          }
        </div>

        <div className="border rounded p-4">
          <h3 className="font-bold mb-2">Step 2: 投稿者のユーザー情報を取得</h3>
          {/* isUserPending の状態と user.name を表示する */}
          {!userId && <p className="text-gray-400">Step 1 完了後に取得します...</p>}
        </div>
      </div>
    </div>
  )
}
