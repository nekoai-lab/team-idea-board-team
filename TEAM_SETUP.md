# チームリポジトリの準備

この手順は、60分の開発ワークを始める前にチームで行います。
所要時間は20分です。

## 準備するもの

- 講師から共有されたテンプレートリポジトリのURL
- チーム番号
- チーム全員のGitHubユーザー名
- リポジトリを作成する代表者1名

代表者はセットアップ作業だけを担当します。
開発ワークが始まった後の実装、レビュー、公開判断はチーム全員で行います。

## 20分を始める前の個人確認

参加者全員がGitHubへサインインし、ターミナルで次のコマンドを実行します。

```bash
gh auth status
node --version
npm --version
```

`gh auth status`が失敗する場合は`gh auth login`を実行します。
Node.jsは22を推奨し、20.9以上を使用します。

3つのコマンドを確認してから、チームの20分タイマーを開始します。

## セットアップ中の役割

- **代表者**：画面を共有し、GitHubの設定を操作する
- **ほかのメンバー**：GitHubユーザー名を伝え、招待を承認する
- **チーム全員**：最後にリポジトリを取得し、ローカルで動作確認する

GitHubの「Settings」は代表者だけが操作します。
複数人が同時に設定を変更すると確認しづらくなるため、ほかのメンバーは代表者の画面を見ながら待ちます。

## この手順で設定するもの

| 設定 | このワークでの役割 |
|---|---|
| Publicリポジトリ | チーム全員が同じコードを共有する場所 |
| Collaborator | チームメンバーがBranchやPull Requestを作れるようにする権限 |
| CI | コードの変更を自動で検証する仕組み |
| GitHub Pages | 完成したアプリを公開する場所 |
| Branch protection | レビューとCIが終わるまで`main`へマージできないようにする設定 |

## 20分の進め方

| 時間 | 内容 |
|---|---|
| 0〜5分 | テンプレートからPublicリポジトリを作り、チーム全員を招待する |
| 5〜10分 | CI、GitHub Pages、`main`の保護を設定する |
| 10〜15分 | Issueを作成し、実装担当とレビュー相手を決める |
| 15〜20分 | 全員がリポジトリを取得し、ローカルで動作確認する |

5分、10分、15分の時点で代表者が進捗をチームへ伝えます。
予定より遅れている場合は、同じ画面で試行錯誤を続けず講師を呼びます。

## 1. テンプレートからリポジトリを作成する

代表者がテンプレートリポジトリを開き、次の順番で操作します。

1. 「Use this template」を押す
2. 「Create a new repository」を選ぶ
3. Ownerに代表者のアカウントを選ぶ
4. Repository nameを`team-idea-board-チーム番号`にする
5. Visibilityで「Public」を選ぶ
6. 「Include all branches」は選ばない
7. 「Create repository from template」を押す

リポジトリ名の例です。

```text
team-idea-board-01
```

この演習では匿名のサンプルデータだけを扱います。
個人情報、秘密情報、業務データは追加しないでください。

## 2. チーム全員を招待する

代表者が作成したリポジトリで、次の順番で操作します。

1. 「Settings」を開く
2. 左側の「Collaborators」を開く
3. 「Add people」を押す
4. チームメンバーのGitHubユーザー名を検索して招待する

招待された参加者は、メールまたはGitHubの通知から招待を承認します。
全員がリポジトリを開けることを確認してから次へ進みます。

ここまで終わったら、代表者は「リポジトリ作成と招待が完了しました」とチームへ伝えます。

## 3. CIを実行する

代表者がリポジトリの「Actions」を開き、次の順番で操作します。

1. 左側から「CI」を選ぶ
2. 「Run workflow」を押す
3. Branchが`main`であることを確認する
4. もう一度「Run workflow」を押す
5. Jobの`quality`が緑色になるまで待つ

CIが失敗した場合は、最初に失敗したStepを開き、エラーを講師へ共有します。
内容が分からなくても、その場で設定を変更せず、失敗したStepの画面を共有してください。

## 4. GitHub Pagesを有効にする

代表者が次の順番で操作します。

1. 「Settings」を開く
2. 左側の「Pages」を開く
3. 「Build and deployment」の「Source」で「GitHub Actions」を選ぶ
4. 「Actions」を開く
5. 左側から「Deploy to GitHub Pages」を選ぶ
6. 「Run workflow」を押し、Branchが`main`であることを確認して実行する

Workflowが成功したら、表示された公開URLをチーム全員へ共有します。
公開URLでサンプルアイデアが3件表示されたら成功です。

ここまで終わったら、代表者は「CIと公開URLを確認できました」とチームへ伝えます。

## 5. `main`を保護する

CIの`quality`が成功した後、代表者が次の順番で設定します。

1. 「Settings」を開く
2. 左側の「Branches」を開く
3. 「Add branch protection rule」を押す
4. Branch name patternへ`main`と入力する
5. 「Require a pull request before merging」を選ぶ
6. Required approvalsを1にする
7. 「Require status checks to pass before merging」を選ぶ
8. Status checkから`quality`を選ぶ
9. 「Require conversation resolution before merging」を選ぶ
10. 設定を保存する

「Require branches to be up to date before merging」は選びません。
この演習では複数のPull Requestを短時間で順番にマージするため、毎回のBranch更新を必須にしない設定とします。

`quality`が選択肢に表示されない場合は、設定を続けず講師を呼びます。

## 6. Issueとレビュー相手を決める

リポジトリの「Issues」を開き、「New issue」を押します。
表示されたTicketテンプレートから、参加人数分のIssueを作成します。

- 3人チーム：Ticket A、Ticket B、Ticket C
- 4人チーム：Ticket A、Ticket B、Ticket C、Ticket D

各Issueへ実装担当者をAssignします。
レビュー相手は次の順番にします。

- 3人チーム：A→B→C→A
- 4人チーム：A→B→C→D→A

ここまで終わったら、各自が自分のIssueとレビュー相手を確認します。

## 7. 各自の開発環境を準備する

全員が、自分のターミナルで次のコマンドを実行します。

```bash
gh repo clone リポジトリ所有者/team-idea-board-チーム番号
cd team-idea-board-チーム番号
npm ci
npm run check
```

`gh repo clone`で認証エラーが出る場合は、次のコマンドでGitHubへログインしてから再実行します。

```bash
gh auth login
```

全員の`npm run check`が成功したら、60分の開発ワークへ進みます。
1人でも失敗している場合は、開発を始めず講師へ画面を共有します。

## 開発ワークの開始条件

- [ ] チーム用のPublicリポジトリが作成されている
- [ ] チーム全員がCollaboratorとして参加している
- [ ] CIの`quality`が成功している
- [ ] GitHub Pagesの公開URLでスターター画面を確認できる
- [ ] `main`にPull Request、Approve、CIを必須とする保護設定がある
- [ ] 全員に担当Issueとレビュー相手が割り当てられている
- [ ] 全員のローカル環境で`npm run check`が成功している

## 参考

- [テンプレートからリポジトリを作成する](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
- [Collaboratorを招待する](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)
- [GitHub PagesをGitHub Actionsで公開する](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Branch protection ruleを設定する](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)
