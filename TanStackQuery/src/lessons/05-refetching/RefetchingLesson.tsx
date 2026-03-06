// Lesson 05: Refetching
// docs/05-refetching.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] 「手動で再取得」ボタンを作り、クリックで refetch() を呼ぶ
//   [ ] isFetching を使って「取得中...」インジケーターを表示する
//   [ ] refetchInterval: 5000 で5秒ごとの自動再取得を試す
//   [ ] refetchOnWindowFocus: false にして、タブ切り替えでの再取得を止める

import { useQuery } from '@tanstack/react-query'

export default function RefetchingLesson() {
  const { data, isPending, isFetching, refetch } = useQuery({
    queryKey: ['posts-list'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      return res.json()
    },
    // ここに refetchInterval や refetchOnWindowFocus を追加して試す
  })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 05: Refetching</h2>

      <div className="flex items-center gap-4 mb-6">
        {/* 手動再取得ボタンをここに追加する（onClick で refetch() を呼ぶ） */}
        {/* isFetching が true のとき「取得中...」を表示する */}
      </div>

      {isPending && <p className="text-gray-400">読み込み中...</p>}
      {/* 投稿リスト（data）をここに表示する */}
    </div>
  )
}
