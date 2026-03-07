// Lesson 04: Card
// docs/04-card.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter を使ったカードを作る
//   [ ] ユーザープロフィールカードを作る（名前・説明・ボタン）
//   [ ] 複数のカードを横並びで表示する
//   [ ] components/ui/card.tsx を読んで、合成コンポーネントの構造を理解する

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CardLesson() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 04: Card</h2>

      {/* ユーザープロフィールカードを作る */}
      {/* ヒント: Card > CardHeader > CardTitle + CardDescription の順に入れ子にする */}
    </div>
  )
}
