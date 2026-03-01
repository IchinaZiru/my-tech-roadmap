import { useState } from 'react'

// ── レッスンを実装したら下のimportコメントを外す ──────────────────────
import JsxLesson          from './lessons/01-jsx/JsxLesson'
import ComponentsLesson   from './lessons/02-components/ComponentsLesson'
import PropsLesson        from './lessons/03-props/PropsLesson'
import UseStateLesson     from './lessons/04-useState/UseStateLesson'
import EventsLesson       from './lessons/05-events/EventsLesson'
import ConditionalLesson  from './lessons/06-conditional/ConditionalLesson'
import ListsLesson        from './lessons/07-lists/ListsLesson'
import UseEffectLesson    from './lessons/08-useEffect/UseEffectLesson'
import FormsLesson        from './lessons/09-forms/FormsLesson'
import CustomHooksLesson  from './lessons/10-custom-hooks/CustomHooksLesson'
import UseContextLesson   from './lessons/11-useContext/UseContextLesson'
// ────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  Component: (() => JSX.Element) | null
}

const LESSONS: Lesson[] = [
  { label: '01 JSX',           Component: JsxLesson },
  { label: '02 Components',    Component: ComponentsLesson },
  { label: '03 Props',         Component: PropsLesson },
  { label: '04 useState',      Component: UseStateLesson },
  { label: '05 Events',        Component: EventsLesson },
  { label: '06 Conditional',   Component: ConditionalLesson },
  { label: '07 Lists',         Component: ListsLesson },
  { label: '08 useEffect',     Component: UseEffectLesson },
  { label: '09 Forms',         Component: FormsLesson },
  { label: '10 Custom Hooks',  Component: CustomHooksLesson },
  { label: '11 useContext',    Component: UseContextLesson },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const { Component } = LESSONS[current]

  return (
    <div>
      <nav>
        {LESSONS.map((lesson, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{ fontWeight: current === i ? 'bold' : 'normal' }}
          >
            {lesson.label}
          </button>
        ))}
      </nav>

      <main>
        {Component
          ? <Component />
          : <p style={{ color: '#9ca3af' }}>このレッスンはまだ実装されていません。</p>
        }
      </main>
    </div>
  )
}
