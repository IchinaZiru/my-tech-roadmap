// Lesson 05: Input & Label
// docs/05-input-label.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Label と Input を htmlFor / id で関連付ける
//   [ ] テキスト入力・メール入力・パスワード入力のフォームを作る
//   [ ] disabled と placeholder を使う
//   [ ] Input に入力した値を useState で管理して画面に表示する

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function InputLabelLesson() {
  const [name, setName] = useState('')

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 05: Input & Label</h2>

      {/* フォームを作る */}
      <div className="max-w-sm space-y-4">
        {/* ヒント: Label の htmlFor と Input の id を同じ文字列にする */}

        {/* 入力した値をリアルタイム表示する */}
        {name && <p className="text-sm text-gray-600">入力中: {name}</p>}
      </div>
    </div>
  )
}
