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

export default function InputLabelLesson() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 05: Input & Label</h2>

      {/* フォームを作る */}
      <div className="max-w-sm space-y-4">
        {/* ヒント: Label の htmlFor と Input の id を同じ文字列にする */}
        <div className="space-y-1">
          <Label htmlFor='name'>名前</Label>
          <Input
          id='name'
          type='text'
          placeholder='名前を入力してください'
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input id="email" type="email" placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">パスワード</Label>
          <Input id="password" type="password" placeholder="パスワードを入力してください"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* 入力した値をリアルタイム表示する */}
        {(name || email || password) && <p className="text-sm text-gray-600">入力中: {name || email || password}</p>}
        <div className="text-sm text-gray-600 space-y-1">
          <p>名前: {name}</p>
          <p>メール: {email}</p>
          <p>パスワード: {password}</p>
        </div>
      </div>
    </div>
  )
}
