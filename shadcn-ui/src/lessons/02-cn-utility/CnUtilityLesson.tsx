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

      {/* 例2: 条件付きクラスを切り替える */}
      {/* ヒント: cn("基本クラス", isActive && "アクティブ時のクラス") */}

      {/* ボタンで isActive を切り替える */}
      <button onClick={() => setIsActive(!isActive)}>
        切り替え（現在: {isActive ? 'ON' : 'OFF'}）
      </button>
    </div>
  )
}
