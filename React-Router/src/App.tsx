import { useState } from 'react'

// ── レッスンを実装したら下のimportコメントを外す ──────────────────────
// import HelloRouterLesson   from './lessons/01-hello-router/HelloRouterLesson'
// import LinkLesson          from './lessons/02-link/LinkLesson'
// import NavLinkLesson       from './lessons/03-nav-link/NavLinkLesson'
// import UrlParamsLesson     from './lessons/04-url-params/UrlParamsLesson'
// import NestedRoutesLesson  from './lessons/05-nested-routes/NestedRoutesLesson'
// import NotFoundLesson      from './lessons/06-not-found/NotFoundLesson'
// import NavigateLesson      from './lessons/07-navigate/NavigateLesson'
// import SearchParamsLesson  from './lessons/08-search-params/SearchParamsLesson'
// import ProtectedLesson     from './lessons/09-protected-routes/ProtectedRoutesLesson'
// import LayoutRoutesLesson  from './lessons/10-layout-routes/LayoutRoutesLesson'
// ────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  Component: (() => JSX.Element) | null
}

const LESSONS: Lesson[] = [
  { label: '01 Hello Router',     Component: null },
  { label: '02 Link',             Component: null },
  { label: '03 NavLink',          Component: null },
  { label: '04 URL Params',       Component: null },
  { label: '05 Nested Routes',    Component: null },
  { label: '06 Not Found',        Component: null },
  { label: '07 Navigate',         Component: null },
  { label: '08 Search Params',    Component: null },
  { label: '09 Protected Routes', Component: null },
  { label: '10 Layout Routes',    Component: null },
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
