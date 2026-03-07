// Lesson 02: cn() ユーティリティ
// docs/02-cn-utility.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] cn() 関数をインポートして使ってみる
//   [ ] 複数のクラスを結合する例を作る
//   [ ] 条件付きクラスを切り替える例を作る（ボタンで isActive を切り替える）
//   [ ] src/lib/utils.ts を開いて cn() の中身を理解する

import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function CnUtilityLesson() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 02: cn() ユーティリティ</h2>

      {/* 例1: 複数クラスを結合する */}
      {/* ヒント: cn("クラス1", "クラス2") のように使う */}
      <div className={cn('px-4', 'bg-gray-200', 'px-8')}>
        例1: 複数クラスを結合する
      </div>
      <div
        className={cn(
          'rounded-md border px-4 py-2 transition-colors',
          isActive && 'border-blue-600 bg-blue-500 text-white font-semibold'
        )}
      >
        条件付きクラスの例
      </div>
      {/* ボタンで isActive を切り替える */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="rounded-md border px-4 py-2"
      >
        切り替え（現在: {isActive ? 'ON' : 'OFF'}）
      </button>
    </div>
  )
}
