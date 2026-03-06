import { useState } from 'react'

// ── レッスンを実装したら下のimportコメントを外す ──────────────────────
// import HelloWorldLesson       from './lessons/01-hello-world/HelloWorldLesson'
// import PrimitiveTypesLesson   from './lessons/02-primitive-types/PrimitiveTypesLesson'
// import ObjectSchemaLesson     from './lessons/03-object-schema/ObjectSchemaLesson'
// import ArrayLesson            from './lessons/04-array/ArrayLesson'
// import OptionalNullableLesson from './lessons/05-optional-nullable/OptionalNullableLesson'
// import StringValidationsLesson from './lessons/06-string-validations/StringValidationsLesson'
// import NumberValidationsLesson from './lessons/07-number-validations/NumberValidationsLesson'
// import SafeParseErrorsLesson  from './lessons/08-safe-parse-errors/SafeParseErrorsLesson'
// import UnionEnumLesson        from './lessons/09-union-enum/UnionEnumLesson'
// import TransformDefaultLesson from './lessons/10-transform-default/TransformDefaultLesson'
// import TypeInferenceLesson    from './lessons/11-type-inference/TypeInferenceLesson'
// import FormValidationLesson   from './lessons/12-form-validation/FormValidationLesson'
// ────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  Component: (() => JSX.Element) | null
}

const LESSONS: Lesson[] = [
  { label: '01 Hello World',        Component: null },
  { label: '02 Primitive Types',    Component: null },
  { label: '03 Object Schema',      Component: null },
  { label: '04 Array',              Component: null },
  { label: '05 Optional / Nullable', Component: null },
  { label: '06 String Validations', Component: null },
  { label: '07 Number Validations', Component: null },
  { label: '08 safeParse & Errors', Component: null },
  { label: '09 Union & Enum',       Component: null },
  { label: '10 Transform & Default', Component: null },
  { label: '11 Type Inference',     Component: null },
  { label: '12 Form Validation',    Component: null },
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const { Component } = LESSONS[current]

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <nav style={{
        background: '#fff',
        borderBottom: '1px solid #e5e7eb',
        padding: '12px 16px',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {LESSONS.map((lesson, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '13px',
                fontWeight: current === i ? 600 : 400,
                background: current === i ? '#0ea5e9' : '#f3f4f6',
                color: current === i ? '#fff' : '#374151',
                transition: 'background 0.15s',
              }}
            >
              {lesson.label}
            </button>
          ))}
        </div>
      </nav>

      <main style={{ padding: '32px' }}>
        {Component
          ? <Component />
          : <p style={{ color: '#9ca3af' }}>このレッスンはまだ実装されていません。</p>
        }
      </main>
    </div>
  )
}
