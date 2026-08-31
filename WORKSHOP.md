# チーム演習：全員の機能をひとつのアプリへ届ける

## ゴール

全員が小さな機能を1つ実装し、別の参加者のPull Requestを1つレビューします。最後に、全員の変更をひとつのWebアプリとして公開します。

## ルール

- 1人1 Issue・1 Branch・1 Pull Request
- `main`へ直接Pushしない
- 担当Issueの範囲を越えて変更しない
- 自分のPull Requestを自分で承認・マージしない
- レビューではコードだけでなく、実際の画面も確認する

## 60分の進め方

| 時間 | 内容 |
|---|---|
| 0〜5分 | アプリ、担当Issue、レビュー相手を確認する |
| 5〜25分 | Branchを作り、AIと機能・テストを実装する |
| 25〜30分 | PushしてPull Requestを作成する |
| 30〜40分 | 隣の参加者のPull Requestをレビューする |
| 40〜50分 | 指摘を修正し、再確認・承認する |
| 50〜55分 | Pull Requestを順番にマージする |
| 55〜60分 | 公開URLで全機能を確認し、1人30秒で説明する |

## 1. 作業を開始する

```bash
git switch main
git pull
git switch -c feature/issue番号-短い機能名
```

担当IssueをClaude Codeへ渡し、次のように依頼します。

```text
担当するGitHub IssueとCLAUDE.mdを確認してください。
受け入れ条件を満たすための変更範囲とテスト方法を整理した後、
担当Issueの範囲だけを実装してください。
既存のit.todoを実際のテストへ置き換え、npm run checkまで実行してください。
```

## 2. Pull Requestを作成する

```bash
git add .
git commit -m "feat: 実装した機能を簡潔に記載"
git push -u origin 現在のブランチ名
gh pr create --fill
```

Pull Requestテンプレートを、自分の言葉で埋めてください。

## 3. 隣の人をレビューする

3人ならA→B→C→A、4人ならA→B→C→D→Aの順でレビューします。

`REVIEW_GUIDE.md`に沿って、最低1件の確認コメントを残してください。問題がなければApprove、問題があればRequest changesを選びます。

## 4. マージして公開する

全員のCIとレビューが完了したら、1本ずつ`main`へマージします。最後のマージ後、GitHub Actionsの「Deploy to GitHub Pages」が成功するまで待ちます。

公開URLで全機能を確認し、各自が次を説明できたら演習完了です。

```text
私は○○を実装しました。
この操作をすると、画面が○○に変わります。
○○というテストと画面操作で確認しました。
```
