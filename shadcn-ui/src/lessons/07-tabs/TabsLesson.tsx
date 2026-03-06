// Lesson 07: Tabs
// docs/07-tabs.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] Tabs, TabsList, TabsTrigger, TabsContent を使ったタブを作る
//   [ ] 3つのタブ（例: プロフィール・設定・通知）を実装する
//   [ ] 各タブの中身に Card を使ってコンテンツを表示する
//   [ ] defaultValue でデフォルト選択タブを指定する

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TabsLesson() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 07: Tabs</h2>

      {/* Tabs コンポーネントを使う */}
      {/* ヒント: <Tabs defaultValue="tab1"> で開始タブを指定。TabsTrigger と TabsContent の value を一致させる */}
    </div>
  )
}
