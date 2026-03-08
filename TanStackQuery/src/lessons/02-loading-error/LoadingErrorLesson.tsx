// Lesson 02: Loading & Error States
// docs/02-loading-error.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] isPending が true のときに「読み込み中...」を表示する
//   [ ] isError が true のときにエラーメッセージを表示する
//   [ ] data がある（成功）ときに投稿タイトルを表示する
//   [ ] （おまけ）存在しないID（例: 9999）を指定してエラー状態を確認する

import { useQuery } from '@tanstack/react-query'

export default function LoadingErrorLesson() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['post', 1],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`)
      return res.json()
    },
  })

  // isPending のとき: ここに読み込み中UIを返す
  if(isPending) {
    return(
      <p>読み込み中...</p>
    )
  }
  // isError のとき: ここにエラーUIを返す（error.message を表示する）
  if(isError){
    return(
      <p>エラー: {error?.message}</p>
    )
  }
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 02: Loading & Error States</h2>
      {/* data がある（成功）ときのUIをここに書く */}
      <p>Data : {data?.title}</p>
      <p>Body : {data?.body}</p>
    </div>
  )
}
