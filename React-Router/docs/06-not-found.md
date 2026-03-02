# Lesson 06: Not Found

## このレッスンで学ぶこと

`path="*"` は「どの Route にもマッチしない URL」にマッチする特殊なパターン。
これを使って 404 ページ（Not Found）を作る。

`<Routes>` はリストの上から順にマッチを試みて、最初に一致したものだけを描画する。
`*` はどんな文字列にも一致するため、最後に置けば「残り全部」を受け取れる。

---

## 何を実装するか

`src/lessons/06-not-found/NotFoundLesson.tsx` に以下を実装する。

### 実装チェックリスト

- [ ] `path="/"` と `path="/about"` の2ページを用意する
- [ ] `path="*"` で `<NotFound />` コンポーネントを表示する
- [ ] `initialEntries={['/unknown']}` にすると NotFound ページが出る
- [ ] NotFound ページから Home へ戻る `<Link>` を置く

### 画面イメージ

`/unknown` にアクセスした場合：

```
Lesson 06: Not Found

404 - ページが見つかりません

[Home に戻る]
```

---

## App.tsx への接続方法

```tsx
import NotFoundLesson from './lessons/06-not-found/NotFoundLesson'
{ label: '06 Not Found', Component: NotFoundLesson },
```

---

## ヒント

```tsx
// * は必ず最後に置く（上にあると全てのURLをキャッチしてしまう）
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- path="*" の役割を1〜3行で書く -->
どのパスにもマッチしていない場合の遷移処理を任せられる
### 最小実装
```tsx
<Route path="*" element={<NotFound />} />
```

### 実務での型
```tsx
<Route path="*" element={<NotFound />} />

function NotFound() {
  return (
    <div>
      {/* 404 メッセージと Home への Link を作る */}
      <p>404 - ページが見つかりません</p>
      <Link to ="/">Home に戻る</Link>
    </div>
  )
}
```

### 落とし穴
<!-- よくあるエラーと回避策 -->

### 説明できる状態
<!-- 口頭で人に説明できるようになったら1〜2文でまとめる -->
ページが存在しないリンクを踏まれた時の遷移処理を作るには`path="*"`を使用する