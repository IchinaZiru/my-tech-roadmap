import { useState } from 'react'

// ── レッスンを実装したら下のimportコメントを外す ──────────────────────────
import HelloWorldLesson    from './lessons/01-hello-world/HelloWorldLesson'
import RegisterLesson      from './lessons/02-register/RegisterLesson'
import ValidationLesson    from './lessons/03-validation/ValidationLesson'
import ErrorsLesson        from './lessons/04-errors/ErrorsLesson'
import WatchLesson         from './lessons/05-watch/WatchLesson'
import DefaultValuesLesson from './lessons/06-default-values/DefaultValuesLesson'
import ControllerLesson    from './lessons/07-controller/ControllerLesson'
import ZodLesson           from './lessons/08-zod/ZodLesson'
import AsyncLesson         from './lessons/09-async/AsyncLesson'
import FieldArrayLesson    from './lessons/10-field-array/FieldArrayLesson'
// ─────────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  Component: (() => JSX.Element) | null
}

const LESSONS: Lesson[] = [
  { label: '01 Hello World',    Component: HelloWorldLesson },
  { label: '02 register',       Component: RegisterLesson },
  { label: '03 validation',     Component: ValidationLesson },
  { label: '04 errors',         Component: ErrorsLesson },
  { label: '05 watch',          Component: WatchLesson },
  { label: '06 defaultValues',  Component: DefaultValuesLesson },
  { label: '07 Controller',     Component: ControllerLesson },
  { label: '08 Zod',            Component: ZodLesson },
  { label: '09 async',          Component: AsyncLesson },
  { label: '10 useFieldArray',  Component: FieldArrayLesson },
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
