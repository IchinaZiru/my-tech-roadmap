// Lesson 10: Custom Hooks（カスタムフック）
// docs/10-custom-hooks.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] useLocalStorage(key, initialValue) を作る
//       → リロードしても値が消えない state
//   [ ] useFetch(url) を作る
//       → { data, loading, error } を返す
//   [ ] 作ったカスタムフックをコンポーネントで使う

import { useState, useEffect } from 'react'

// ここにカスタムフックを定義する
// function useLocalStorage<T>(key: string, initialValue: T) { ... }
// function useFetch<T>(url: string) { ... }

export default function CustomHooksLesson() {
  // ここで作ったカスタムフックを使う

  return (
    <div>
      <h2>Lesson 10: カスタムフック</h2>
      {/* useLocalStorage と useFetch の動作確認をここに作る */}
    </div>
  )
}
