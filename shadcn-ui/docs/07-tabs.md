# Lesson 07: Tabs

## このレッスンで学ぶこと

### 複合コンポーネントと内部状態

Tabs は「どのタブが選択されているか」という状態を内部で管理している。
`defaultValue` でデフォルト選択タブを指定するが、状態の切り替えは Radix UI（内部）が処理する。

```tsx
// defaultValue で最初に表示するタブを指定
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">アカウント</TabsTrigger>
    <TabsTrigger value="password">パスワード</TabsTrigger>
  </TabsList>
  <TabsContent value="account">アカウント設定</TabsContent>
  <TabsContent value="password">パスワード設定</TabsContent>
</Tabs>
```

**重要なルール**: `TabsTrigger` の `value` と `TabsContent` の `value` が一致すると、そのタブが選択されたときにコンテンツが表示される。

### 制御と非制御

- `defaultValue` — 非制御（Radix が状態を管理）
- `value` + `onValueChange` — 制御（自分で useState で管理）

今回は `defaultValue` を使う非制御パターンを使う。

---

## 何を実装するか

`src/lessons/07-tabs/TabsLesson.tsx` に以下を書く。

### 実装チェックリスト

- [ ] `Tabs, TabsList, TabsTrigger, TabsContent` を使ったタブを作る
- [ ] 3つのタブ（プロフィール・設定・通知）を実装する
- [ ] 各タブの中身に `Card` を使ってコンテンツを表示する
- [ ] `defaultValue` でデフォルトタブを指定する

### 画面イメージ

```
┌────────────────────────────────────────────┐
│ Lesson 07: Tabs                            │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │ [プロフィール] [設定] [通知]          │ │ ← TabsList
│  └──────────────────────────────────────┘ │
│                                            │
│  ┌──────────────────────────────────────┐ │
│  │ プロフィール                          │ │ ← TabsContent
│  │ ────────────────────────────────     │ │
│  │ 名前: 山田太郎                        │ │
│  │ メール: yamada@example.com            │ │
│  └──────────────────────────────────────┘ │
│                                            │
└────────────────────────────────────────────┘
```

---

## App.tsx への接続方法

```tsx
import TabsLesson from './lessons/07-tabs/TabsLesson'

{ label: '07 Tabs', Component: TabsLesson },
```

---

## ヒント

### Tabs の基本構造

```tsx
<Tabs defaultValue="profile">
  <TabsList>
    <TabsTrigger value="profile">プロフィール</TabsTrigger>
    <TabsTrigger value="settings">設定</TabsTrigger>
    <TabsTrigger value="notifications">通知</TabsTrigger>
  </TabsList>

  <TabsContent value="profile">
    {/* プロフィールの内容 */}
  </TabsContent>
  <TabsContent value="settings">
    {/* 設定の内容 */}
  </TabsContent>
  <TabsContent value="notifications">
    {/* 通知の内容 */}
  </TabsContent>
</Tabs>
```

### TabsContent の中に Card を使う

```tsx
<TabsContent value="profile">
  <Card>
    <CardHeader>
      <CardTitle>プロフィール</CardTitle>
    </CardHeader>
    <CardContent>
      {/* 内容 */}
    </CardContent>
  </Card>
</TabsContent>
```

---

## 学習ノート（実装後に自分で埋める）

### 概念
<!-- Tabs の value の対応関係を1〜3行で書く -->

### 最小実装
```tsx
// 最もシンプルな Tabs の使い方（2タブ）を書く
```

### 実務での型
```tsx
// 制御コンポーネントとして Tabs を使うパターンを書く（value + onValueChange）
```

### 落とし穴
<!-- TabsTrigger と TabsContent の value が一致しないとどうなるか -->

### 説明できる状態
<!-- 非制御と制御の違いを説明できるようになったら書く -->
