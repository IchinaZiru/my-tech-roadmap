import { useState } from 'react'

// ── レッスンを実装したら下のimportコメントを外す ──────────────────────
// import HelloWorldLesson    from './lessons/01-hello-world/HelloWorldLesson'
// import CnUtilityLesson     from './lessons/02-cn-utility/CnUtilityLesson'
// import ButtonVariantsLesson from './lessons/03-button-variants/ButtonVariantsLesson'
// import CardLesson          from './lessons/04-card/CardLesson'
// import InputLabelLesson    from './lessons/05-input-label/InputLabelLesson'
// import DialogLesson        from './lessons/06-dialog/DialogLesson'
// import TabsLesson          from './lessons/07-tabs/TabsLesson'
// import BadgeAlertLesson    from './lessons/08-badge-alert/BadgeAlertLesson'
// ────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  Component: (() => JSX.Element) | null
}

const LESSONS: Lesson[] = [
  { label: '01 Hello World',      Component: null },
  { label: '02 cn() ユーティリティ', Component: null },
  { label: '03 Button Variants',  Component: null },
  { label: '04 Card',             Component: null },
  { label: '05 Input & Label',    Component: null },
  { label: '06 Dialog',           Component: null },
  { label: '07 Tabs',             Component: null },
  { label: '08 Badge & Alert',    Component: null },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const { Component } = LESSONS[current]

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 p-4">
        <div className="flex flex-wrap gap-2">
          {LESSONS.map((lesson, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                current === i
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {lesson.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="p-8">
        {Component
          ? <Component />
          : <p className="text-gray-400">このレッスンはまだ実装されていません。</p>
        }
      </main>
    </div>
  )
}
