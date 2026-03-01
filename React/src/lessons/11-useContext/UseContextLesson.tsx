// Lesson 11: useContext
// docs/11-useContext.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] createContext でContextを作る
//   [ ] Provider でコンポーネントツリーを囲む
//   [ ] 深い子コンポーネントで useContext を使って値を取り出す
//   [ ] 中間コンポーネントには Props を渡さない（これが useContext の価値）
//   [ ] ボタンでテーマ（ライト/ダーク）を切り替える

import { useState, useContext, createContext } from 'react'

// 1. Context を作る
// const ThemeContext = createContext<'light' | 'dark'>('light')
const ThemeContext = createContext('light')

// 2. Contextを使う深い子コンポーネント（Propsは受け取らない）
// function ThemedButton() { ... }
function ThemeButton() {
  const theme = useContext(ThemeContext)
  return <button style={{ background: theme === 'dark' ? '#1f2937' : '#f3f4f6' }}>
    テーマ: {theme}
  </button>
}

// 3. 中間コンポーネント（themeを受け取らない）
// function ContentArea() { ... }
function ContentArea() {
  return (
    <div>
      <p>ContentArea（中間層: theme propsを持っていない）</p>
      <ThemeButton /> 
    </div>
  )
}

export default function UseContextLesson() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    // 4. Provider で囲んで value を渡す
    <div>
    <ThemeContext.Provider value={theme}>
      <ContentArea />
    </ThemeContext.Provider>
      <h2>Lesson 11: useContext</h2>
      {/* Provider・ContentArea・テーマ切替ボタンをここに作る */}
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        テーマ切替
      </button>
    </div>
  )
}
