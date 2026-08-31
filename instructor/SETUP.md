# 講師用セットアップ

## 1. チームごとのPublicリポジトリを作成する

このリポジトリをGitHub Template Repositoryに設定し、チームごとに複製します。

例：

```text
team-idea-board-01
team-idea-board-02
team-idea-board-03
```

サンプルデータのみを使用し、秘密情報や個人情報を含めないでください。

## 2. 参加者をCollaboratorへ追加する

各チームの参加者にWrite権限を付与します。講義前日までに、全員がリポジトリを開けることを確認します。

## 3. Issueを作成・割り当てる

`instructor/tickets/`の本文を使ってIssueを作成します。

- 3人チーム：Ticket A・B・C
- 4人チーム：Ticket A・B・C・D

Issueは事前に各参加者へAssignしてください。

## 4. GitHub Pagesを有効にする

Repository Settings → Pages → Build and deployment → Sourceで「GitHub Actions」を選択します。

`main`へPushされると、`.github/workflows/deploy-pages.yml`が検証とデプロイを実行します。

## 5. `main`を保護する

Repository Settingsから、`main`に次を設定します。

- Pull Requestを必須にする
- 1名以上のApproveを必須にする
- Status check `quality`の成功を必須にする
- 未解決の会話がある場合はマージ不可にする

## 6. 事前動作確認

講師アカウントで以下を確認します。

```bash
npm ci
npm run check
```

確認項目：

- スターターのCIが成功する
- 4件のTicketテストが`todo`として表示される
- `main`へのPushでGitHub Pagesが公開される
- 公開URLでサンプルアイデア3件が表示される

## 当日の復旧方針

- 実装が止まった場合：受け入れ条件を1つに絞る
- コンフリクトした場合：対象PRを最新の`main`から作り直し、変更ファイルだけを移す
- CIが失敗した場合：Actionsの最初の失敗箇所をAIへ渡して原因を説明させる
- デプロイが失敗した場合：`main`のCI成功を確認し、Deploy workflowを再実行する
- 時間切れの場合：完成したPRだけをマージし、未完了IssueはCloseせず残す
