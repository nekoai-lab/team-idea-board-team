# KAIZEN BOARD チーム開発演習テンプレート

AI駆動開発の最終回で、全員が「実装・Pull Request・レビュー・CI・デプロイ」を体験するためのサンプルWebアプリです。

## このテンプレートで体験すること

```text
Issueを読む
  ↓
BranchでAIと機能を実装する
  ↓
テストとPull Requestを作成する
  ↓
別の参加者がレビューする
  ↓
mainへマージする
  ↓
GitHub Pagesへ自動デプロイする
```

## アプリの概要

社内で見つかった改善アイデアを共有する、一画面のアイデアボードです。スターターでは3件の匿名サンプルデータを表示します。

外部API、データベース、認証、秘密情報は使用しません。

## 開発環境

- Node.js 22推奨（20.9以上）
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

- 受講生用：[WORKSHOP.md](./WORKSHOP.md)
- レビュー用：[REVIEW_GUIDE.md](./REVIEW_GUIDE.md)
- 完了条件：[DEFINITION_OF_DONE.md](./DEFINITION_OF_DONE.md)
- 講師用準備：[instructor/SETUP.md](./instructor/SETUP.md)
- Ticket原稿：[instructor/tickets](./instructor/tickets)

## 標準の担当

- 3人チーム：Ticket A・B・C
- 4人チーム：Ticket A・B・C・D

全員が1件実装し、隣の参加者のPull Requestを1件レビューします。
