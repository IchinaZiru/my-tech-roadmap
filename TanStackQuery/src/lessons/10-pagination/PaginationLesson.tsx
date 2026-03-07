// Lesson 10: Pagination（ページネーション）
// docs/10-pagination.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useState で page（初期値: 1）を管理する
//   [ ] queryKey に page を含める（['posts', page]）
//   [ ] 「前のページ」「次のページ」ボタンを作る
//   [ ] placeholderData: keepPreviousData を設定して、ページ切り替え時にちらつきを防ぐ
//   [ ] isPlaceholderData を使って「更新中」状態を表示する

import { useState } from 'react'
import { useQuery, keepPreviousData } from '@tanstack/react-query'

const PER_PAGE = 5

export default function PaginationLesson() {
  // ここに page の状態管理を追加する
  const page = 1 // ← useState に変える

  const { data, isPending, isPlaceholderData } = useQuery({
    queryKey: ['posts', page],
    queryFn: async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${PER_PAGE}`
      )
      return res.json()
    },
    placeholderData: keepPreviousData, // ページ切り替え中に前のデータを表示し続ける
  })

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 10: Pagination</h2>

      {isPending && <p className="text-gray-400">読み込み中...</p>}

      {/* isPlaceholderData が true のとき「更新中...」を薄く表示する */}
      <ul className="space-y-2 mb-6">
        {/* data をリスト表示する */}
      </ul>

      <div className="flex items-center gap-4">
        {/* 「前のページ」ボタン（page === 1 のとき disabled） */}
        <span className="text-sm text-gray-600">ページ {page}</span>
        {/* 「次のページ」ボタン（isPlaceholderData のとき disabled） */}
      </div>
    </div>
  )
}
