// Lesson 06: Dialog
// docs/06-dialog.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] ボタンをクリックするとダイアログが開くようにする
//   [ ] Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription を使う
//   [ ] DialogFooter に「キャンセル」と「確認」ボタンを配置する
//   [ ] components/ui/dialog.tsx を開いて @radix-ui/react-dialog がどう使われているか確認する

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export default function DialogLesson() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Lesson 06: Dialog</h2>

      {/* Dialog コンポーネントを使う */}
      {/* ヒント: Dialog > DialogTrigger > Button の順。DialogContent は自動でポータルに表示される */}
    </div>
  )
}
