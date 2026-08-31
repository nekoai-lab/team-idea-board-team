# KAIZEN BOARD 開発ルール

このリポジトリは、AI駆動開発のチーム演習用スターターです。

## 目的

各参加者が1つのGitHub Issueを担当し、1 Branch、1 Pull Requestで小さな機能を追加します。
実装前にチームで担当範囲と完成条件を揃え、実装後は別の参加者がPull Requestをレビューします。
マージと公開の最終判断はチームが行います。

## 作業ルール

- `main`へ直接Commit・Pushしない
- 作業前に担当Issue、受け入れ条件、チームで確認した方針を読む
- チームで確認した方針とIssueが矛盾する場合は、実装前に人間へ確認する
- 1つのIssueで、担当外の機能まで変更しない
- 受け入れ条件を確認できるテストを先に具体化する
- 既存の`it.todo`を実際のテストへ置き換える
- 外部API、データベース、認証、秘密情報を追加しない
- 新しい依存パッケージは、必要性を説明して人間の承認を得るまで追加しない
- キーボード操作、ラベル、エラー理由など、基本的なアクセシビリティを保つ

## 実装後の確認

以下をすべて実行してください。

```bash
npm run check
```

成功したら、変更内容、確認方法、影響範囲、AIが提案した内容、人間が判断した内容を分けて説明し、現在のBranchへCommitしてください。
自分で`main`へマージはせず、Pull Requestを作成してレビューを依頼してください。

## プロジェクト構成

- `components/`：画面を構成する機能単位のコンポーネント
- `tests/`：Ticketごとの受け入れ条件を確認するテスト
- `data/ideas.ts`：匿名の固定サンプルデータ
- `.github/workflows/`：CIとGitHub PagesへのCD

スターター画面には、現在利用できるアイデア一覧と票数だけが表示されています。
Ticket A〜Dのコンポーネントと`it.todo`は、チームでIssueを起票した後に実装するための境界です。
未実装のボタンやフォームを無効状態で先に表示せず、担当Issueの受け入れ条件を満たす機能として完成させてください。

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
