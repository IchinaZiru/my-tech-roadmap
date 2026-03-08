import { useState } from 'react'

// ── レッスンを実装したら下のimportコメントを外す ──────────────────────
import HelloWorldLesson       from './lessons/01-hello-world/HelloWorldLesson'
import LoadingErrorLesson     from './lessons/02-loading-error/LoadingErrorLesson'
import QueryKeysLesson        from './lessons/03-query-keys/QueryKeysLesson'
import StaleCacheLesson       from './lessons/04-stale-cache/StaleCacheLesson'
import RefetchingLesson       from './lessons/05-refetching/RefetchingLesson'
import MutationLesson         from './lessons/06-mutation/MutationLesson'
import InvalidationLesson     from './lessons/07-invalidation/InvalidationLesson'
import OptimisticUpdatesLesson from './lessons/08-optimistic-updates/OptimisticUpdatesLesson'
import DependentQueriesLesson from './lessons/09-dependent-queries/DependentQueriesLesson'
import PaginationLesson       from './lessons/10-pagination/PaginationLesson'
// ────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  Component: (() => JSX.Element) | null
}

const LESSONS: Lesson[] = [
  { label: '01 Hello World',        Component: HelloWorldLesson },
  { label: '02 Loading & Error',    Component: LoadingErrorLesson },
  { label: '03 Query Keys',         Component: QueryKeysLesson },
  { label: '04 Stale & Cache',      Component: StaleCacheLesson },
  { label: '05 Refetching',         Component: RefetchingLesson },
  { label: '06 Mutation',           Component: MutationLesson },
  { label: '07 Invalidation',       Component: InvalidationLesson },
  { label: '08 Optimistic Updates', Component: OptimisticUpdatesLesson },
  { label: '09 Dependent Queries',  Component: DependentQueriesLesson },
  { label: '10 Pagination',         Component: PaginationLesson },
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
                  ? 'bg-orange-500 text-white font-semibold'
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
