# KAIZEN BOARD チーム開発演習テンプレート

AI駆動開発の最終回で、チームの方針合わせ、個人実装、Pull Request、相互レビュー、CI/CD、公開判断を体験するためのサンプルWebアプリです。

## このテンプレートで体験すること

```text
チーム用リポジトリを設定する
  ↓
チームで方針と完成条件を揃える
  ↓
BranchでAIと機能を実装する
  ↓
テストとPull Requestを作成する
  ↓
別の参加者がレビューする
  ↓
チームで公開を判断する
  ↓
mainへマージする
  ↓
GitHub Pagesへ自動デプロイする
  ↓
公開結果と学びを共有する
```

## アプリの概要

社内で見つかった改善アイデアを共有する、一画面のアイデアボードです。スターターでは3件の匿名サンプルデータを表示します。

外部API、データベース、認証、秘密情報は使用しません。

## スターターでできること

- 3件の改善アイデアを一覧で確認する
- 各アイデアのカテゴリ、投稿部門、背景、現在の票数を確認する

投票、カテゴリでの絞り込み、新しいアイデアの追加、カテゴリ別集計は、まだ画面にありません。
開発する機能は、チームでGitHub Issueとして起票してから担当します。

## 開発を始める前にIssueを作る

チーム用リポジトリを作成したら、代表者が画面を共有して「Issues」から「New issue」を開きます。
表示されたIssueテンプレートを使い、参加人数分のIssueを作成してください。

| Ticket | 追加する機能 |
|---|---|
| Ticket A | アイデアへの投票 |
| Ticket B | カテゴリでの絞り込み |
| Ticket C | 新しいアイデアの追加 |
| Ticket D | カテゴリ別の件数集計 |

- 3人チーム：Ticket A、B、Cを起票する
- 4人チーム：Ticket A、B、C、Dを起票する

各Issueの背景と受け入れ条件を全員で読み、画面のどこが変わるかを話し合います。
その後、各自が担当したいIssueを伝え、Assigneesへ担当者を設定してください。

必須Issueの実装、レビュー、マージが終わって時間が余った場合は、アプリをより良くする機能やデザインを話し合います。
追加開発も、背景と完了条件を新しいIssueへ記載してから担当を決めます。

## 開発環境

- Node.js 22.22.2以上の22系
- Next.js / React / TypeScript
- Vitest / Testing Library
- GitHub Actions
- GitHub Pages

## ローカルで起動する

```bash
npm ci
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## まとめて検証する

```bash
npm run check
```

Lint、型チェック、テスト、静的サイトのビルドを順番に実行します。

## 演習資料

- リポジトリ設定：[TEAM_SETUP.md](./TEAM_SETUP.md)
- 受講生用：[WORKSHOP.md](./WORKSHOP.md)
- レビュー用：[REVIEW_GUIDE.md](./REVIEW_GUIDE.md)
- 完了条件：[DEFINITION_OF_DONE.md](./DEFINITION_OF_DONE.md)
- 講師用準備：[instructor/SETUP.md](./instructor/SETUP.md)
- ワーク案内スライド原稿：[instructor/WORKSHOP_SLIDES.md](./instructor/WORKSHOP_SLIDES.md)
- GitHub Issueテンプレート：[.github/ISSUE_TEMPLATE](./.github/ISSUE_TEMPLATE)
- Ticket原稿：[instructor/tickets](./instructor/tickets)

全員が1件実装し、隣の参加者のPull Requestを1件レビューします。
マージ前にはチームで公開可否を判断し、公開後にAIへ任せたこと、人間が判断したこと、レビューで得た気づきを共有します。
