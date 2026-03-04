import { useState } from 'react'

// ── レッスンを実装したら下のimportコメントを外す ──────────────────────
// import HelloWorldLesson       from './lessons/01-hello-world/HelloWorldLesson'
// import SpacingLesson          from './lessons/02-spacing/SpacingLesson'
// import TypographyLesson       from './lessons/03-typography/TypographyLesson'
// import ColorsLesson           from './lessons/04-colors/ColorsLesson'
// import FlexboxLesson          from './lessons/05-flexbox/FlexboxLesson'
// import GridLesson             from './lessons/06-grid/GridLesson'
// import SizingLesson           from './lessons/07-sizing/SizingLesson'
// import BordersLesson          from './lessons/08-borders/BordersLesson'
// import ResponsiveLesson       from './lessons/09-responsive/ResponsiveLesson'
// import StatesLesson           from './lessons/10-states/StatesLesson'
// import DarkModeLesson         from './lessons/11-dark-mode/DarkModeLesson'
// import ComponentPatternsLesson from './lessons/12-component-patterns/ComponentPatternsLesson'
// ────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  Component: (() => JSX.Element) | null
}

const LESSONS: Lesson[] = [
  { label: '01 Hello World',       Component: null },
  { label: '02 Spacing',           Component: null },
  { label: '03 Typography',        Component: null },
  { label: '04 Colors',            Component: null },
  { label: '05 Flexbox',           Component: null },
  { label: '06 Grid',              Component: null },
  { label: '07 Sizing',            Component: null },
  { label: '08 Borders',           Component: null },
  { label: '09 Responsive',        Component: null },
  { label: '10 States',            Component: null },
  { label: '11 Dark Mode',         Component: null },
  { label: '12 Component Patterns', Component: null },
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
                  ? 'bg-sky-500 text-white font-semibold'
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
