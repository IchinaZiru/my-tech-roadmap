// Lesson 03: Button Variants
// docs/03-button-variants.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] variant="default" / "destructive" / "outline" / "secondary" / "ghost" / "link" を全部表示する
//   [ ] size="sm" / "default" / "lg" を全部表示する
//   [ ] disabled 状態のボタンを表示する
//   [ ] components/ui/button.tsx の cva() を読んで、バリアントの仕組みを理解する

import { Button } from '@/components/ui/button'

export default function ButtonVariantsLesson() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 03: Button Variants</h2>

      {/* variant のバリエーションを表示する */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">variant</h3>
        <div className="flex flex-wrap gap-3">
          {/* ここに各 variant のボタンを追加する */}
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>

          <Button variant="outline" size="sm">Small Outline</Button>
        </div>
      </section>

      {/* size のバリエーションを表示する */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">size</h3>
        <div className="flex flex-wrap items-center gap-3">
          {/* ここに各 size のボタンを追加する */}
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* disabled 状態 */}
      <section>
        <h3 className="text-lg font-semibold mb-4">disabled</h3>
        {/* ここに disabled ボタンを追加する */}
        <Button disabled>Disabled</Button>
      </section>
    </div>
  )
}
