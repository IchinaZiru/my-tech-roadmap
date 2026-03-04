// ── レッスンを実装したら下のimportコメントを外す ──────────────────────
// import * as HelloWorldLesson    from './lessons/01-hello-world/HelloWorldLesson'
// import * as BasicTypesLesson    from './lessons/02-basic-types/BasicTypesLesson'
// import * as TypeInferenceLesson from './lessons/03-type-inference/TypeInferenceLesson'
// import * as ArraysTuplesLesson  from './lessons/04-arrays-tuples/ArraysTuplesLesson'
// import * as ObjectsTypesLesson  from './lessons/05-objects-types/ObjectsTypesLesson'
// import * as InterfacesLesson    from './lessons/06-interfaces/InterfacesLesson'
// import * as FunctionsLesson     from './lessons/07-functions/FunctionsLesson'
// import * as UnionLiteralLesson  from './lessons/08-union-literal/UnionLiteralLesson'
// import * as GenericsLesson      from './lessons/09-generics/GenericsLesson'
// import * as TypeNarrowingLesson from './lessons/10-type-narrowing/TypeNarrowingLesson'
// import * as UtilityTypesLesson  from './lessons/11-utility-types/UtilityTypesLesson'
// ────────────────────────────────────────────────────────────────────────

type Lesson = {
  label: string
  run: (() => string) | null
}

const LESSONS: Lesson[] = [
  { label: '01 Hello World',    run: null },
  { label: '02 Basic Types',    run: null },
  { label: '03 Type Inference', run: null },
  { label: '04 Arrays Tuples',  run: null },
  { label: '05 Objects Types',  run: null },
  { label: '06 Interfaces',     run: null },
  { label: '07 Functions',      run: null },
  { label: '08 Union Literal',  run: null },
  { label: '09 Generics',       run: null },
  { label: '10 Type Narrowing', run: null },
  { label: '11 Utility Types',  run: null },
]

// ── DOM 構築 ──────────────────────────────────────────────────────────

const app = document.getElementById('app')!

const style = document.createElement('style')
style.textContent = `
  * { box-sizing: border-box; }
  body { font-family: sans-serif; margin: 0; padding: 0; }
  nav {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding: 16px;
    background: #f1f5f9;
    border-bottom: 1px solid #e2e8f0;
  }
  nav button {
    padding: 6px 12px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
  }
  nav button.active { font-weight: bold; background: #e2e8f0; }
  main { padding: 24px; max-width: 800px; }
  .placeholder { color: #9ca3af; }
`
document.head.appendChild(style)

const nav = document.createElement('nav')
const main = document.createElement('main')
app.appendChild(nav)
app.appendChild(main)

// ── ナビゲーション ────────────────────────────────────────────────────

function render(index: number): void {
  nav.querySelectorAll('button').forEach((btn, i) => {
    btn.classList.toggle('active', i === index)
  })

  const lesson = LESSONS[index]
  if (lesson.run === null) {
    main.innerHTML = '<p class="placeholder">このレッスンはまだ実装されていません。</p>'
  } else {
    main.innerHTML = lesson.run()
  }
}

LESSONS.forEach((lesson, i) => {
  const btn = document.createElement('button')
  btn.textContent = lesson.label
  btn.addEventListener('click', () => render(i))
  nav.appendChild(btn)
})

render(0)
