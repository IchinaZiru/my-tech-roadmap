// Lesson 08: Badge & Alert
// docs/08-badge-alert.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Badge の全 variant（default, secondary, destructive, outline）を表示する
//   [ ] Alert の default / destructive バリアントを表示する
//   [ ] Alert に AlertTitle と AlertDescription を組み合わせる
//   [ ] Badge を Card の中で使う（例: ステータスラベル付きカード）

import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function BadgeAlertLesson() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 08: Badge & Alert</h2>

      {/* Badge の全バリアントを表示する */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Badge</h3>
        <div className="flex flex-wrap gap-2">
          {/* ここに各 variant の Badge を追加する */}
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      {/* Alert を表示する */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Alert</h3>
        <div className="space-y-4 max-w-lg">
          {/* ここに Alert を追加する */}
          <Alert>
            <AlertTitle>タイトル</AlertTitle>
            <AlertDescription>説明文</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>エラー</AlertTitle>
            <AlertDescription>操作に失敗しました。</AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Badge を Card の中で使う */}
      <section>
        <h3 className="text-lg font-semibold mb-4">Badge in Card</h3>
        {/* ヒント: CardHeader に Badge を組み合わせてステータス付きカードを作る */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>タスク管理アプリ</CardTitle>
            <Badge variant="outline" className="mb-2">進行中</Badge>
          </CardHeader>
          <CardContent>
              期限 : 2025/03/31
            </CardContent>
        </Card>
      </section>
    </div>
  )
}
