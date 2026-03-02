// Lesson 08: Search Params
// docs/08-search-params.md を読んで実装する
//
// 実装チェックリスト:
//   [ ] テキスト入力欄を作る
//   [ ] 入力するたびに URL の ?q=入力値 が更新される
//   [ ] URL の ?q=... の値を読んでフィルタリングした結果を表示する
//   [ ] initialEntries で ?q=re を渡すと "React" だけが表示される

import { MemoryRouter, Routes, Route, useSearchParams } from 'react-router-dom'

const FRAMEWORKS = ['React', 'Vue', 'Angular', 'Svelte']

function SearchPage() {
  // useSearchParams で [searchParams, setSearchParams] を取得する
  // searchParams.get('q') で現在の検索ワードを読む
  // FRAMEWORKS を filter してキーワードに一致するものだけ表示する
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  //フィルタリング処理
  const filtered = FRAMEWORKS.filter(name => name.toLowerCase().includes(query.toLowerCase()))

  const handleChange = (value : string) => {
    setSearchParams({ q: value })
  }

  return (
    <div>
      <label>
        検索:{' '}
        {/* input の value と onChange を設定する */}
        <input type="text" value={query} onChange={(e) => handleChange(e.target.value)}/>
      </label>
      <ul>
        {/* フィルタリングした結果をリスト表示する */}
        {filtered.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default function SearchParamsLesson() {
  return (
    <div>
      <h2>Lesson 08: Search Params</h2>
      {/* initialEntries={['/?q=re']} に変えると「React」だけ表示される */}
      <MemoryRouter initialEntries={['/?q=Re']}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </MemoryRouter>
    </div>
  )
}
