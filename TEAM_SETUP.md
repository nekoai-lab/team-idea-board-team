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
Node.jsは22.22.2以上の22系を使用します。

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
| Ruleset | レビューとCIが終わるまで`main`へマージできないようにする設定 |

## 20分の進め方

| 時間 | 内容 |
|---|---|
| 0〜5分 | テンプレートからPublicリポジトリを作り、チーム全員を招待する |
| 5〜10分 | GitHub Pagesの公開元とCIを準備し、`main`を保護する |
| 10〜15分 | 全員がリポジトリを取得し、ローカルで動作確認する |
| 15〜20分 | Issueを作成し、実装担当とレビュー相手を決める |

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

リポジトリ名は半角英数字とハイフンだけで作ります。
GitHubのRepository nameは半角英数字、`.`、`-`、`_`しか使えません。
またこのリポジトリ名は、最後に公開するアプリのURLへそのまま入ります。

```text
https://代表者のユーザー名.github.io/team-idea-board-01/
```

日本語のチーム名を使うと公開URLが読みにくくなるため、チーム番号を使います。

このリポジトリはインターネット上に公開されます。
この演習では匿名のサンプルデータだけを扱います。
個人情報、秘密情報、業務データ、顧客名は追加しないでください。

## 2. チーム全員を招待する

代表者が作成したリポジトリで、次の順番で操作します。

1. 「Settings」を開く
2. 左側の「Collaborators」を開く
3. 「Add people」を押す
4. チームメンバーのGitHubユーザー名を検索して招待する

招待された参加者は、メールまたはGitHubの通知から招待を承認します。
通知が見つからない場合は、代表者からリポジトリのURLを共有してもらい、ブラウザで直接開きます。
画面上部に「Accept invitation」が表示されるので、そこから承認します。
全員がリポジトリを開けることを確認してから次へ進みます。

ここまで終わったら、代表者は「リポジトリ作成と招待が完了しました」とチームへ伝えます。

## 3. GitHub Pagesの公開元とCIを準備する

ここから手順4までは代表者だけが操作します。
ほかのメンバーは待たずに、先に手順5の開発環境の準備を進めてください。

代表者が次の順番で操作します。

1. 「Settings」を開く
2. 左側の「Pages」を開く
3. 「Build and deployment」の「Source」で「GitHub Actions」を選ぶ
4. 「Actions」を開く
5. 左側から「CI」を選ぶ
6. 「Run workflow」を押し、Branchが`main`であることを確認して実行する
7. Jobの`quality`が緑色になるまで待つ

Actionsに「Deploy to GitHub Pages」の失敗が1件残っている場合があります。
これはリポジトリ作成直後、Pagesを有効にする前に自動実行されたものです。
このまま進めて問題ありません。手順3を終えた後のマージで、あらためて実行されて成功します。

このCI実行は、次の手順で`quality`を必須チェックとして選べるようにするための事前準備です。
実際のCIはPull Request上で体験し、アプリはレビュー後に`main`へマージしたときに自動公開します。
「Deploy to GitHub Pages」は、この時点では手動実行しません。

`quality`が失敗した場合は、最初に失敗したStepを開いて講師を呼びます。

## 4. Rulesetで`main`を保護する

CIの`quality`が成功した後、代表者が次の順番で設定します。

1. 「Settings」を開く
2. 左側の「Rules」から「Rulesets」を開く
3. 「New ruleset」を押し、「New branch ruleset」を選ぶ
4. Ruleset Nameへ`protect-main`と入力する
5. Enforcement statusが「Active」になっていることを確認する
6. 「Target branches」の「Add target」から「Include default branch」を選ぶ
7. Rulesの「Restrict deletions」を選ぶ
8. Rulesの「Block force pushes」を選ぶ
9. Rulesの「Require a pull request before merging」を選び、「Required approvals」を1にする
10. 同じ項目の中にある「Require conversation resolution before merging」を選ぶ
11. Rulesの「Require status checks to pass」を選び、「Add checks」から`quality`を選ぶ
12. 「Create」を押す

「Require branches to be up to date before merging」は選びません。
この演習では複数のPull Requestを短時間で順番にマージするため、毎回のBranch更新を必須にしない設定とします。

「Bypass list」には誰も追加しません。
代表者を含む全員が同じ条件でPull Requestを使う状態が、このワークで体験したい形です。

設定が終わったら、チーム全員で「Settings」の「Rules」を開きます。
Rulesetは読み取り権限があれば全員が確認できるため、`main`へ直接pushできない状態を各自の画面で確かめてから次へ進みます。

`quality`が選択肢に表示されない場合は、設定を続けず講師を呼びます。

## 5. 各自の開発環境を準備する

代表者以外は、手順3と手順4を待たずにここから始められます。
代表者は手順4を終えてから合流します。

全員が、自分のターミナルで次のコマンドを実行します。

```bash
gh repo clone リポジトリ所有者/team-idea-board-チーム番号
cd team-idea-board-チーム番号
nvm use
npm ci
npm run dev
```

`gh repo clone`で認証エラーが出る場合は、`gh auth login`を実行してから再試行します。
ブラウザでターミナルに表示されたURLを開き、3件の改善アイデアがカードとして表示されることを確認します。
確認後は`Ctrl + C`でアプリを停止します。

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

## 開発ワークの開始条件

- [ ] チーム用のPublicリポジトリが作成されている
- [ ] チーム全員がCollaboratorとして参加している
- [ ] GitHub PagesのSourceが「GitHub Actions」になっている
- [ ] CIの`quality`が1回成功している
- [ ] `protect-main` Rulesetが「Active」で、`main`にPull Request、Approve、CIが必須になっている
- [ ] 全員に担当Issueとレビュー相手が割り当てられている
- [ ] 全員のローカル環境で3件のアイデアカードを確認できる

## 公開URLの確認方法

公開URLは次の形式になります。

```text
https://代表者のユーザー名.github.io/team-idea-board-01/
```

ユーザー名の大文字は、URLではすべて小文字へ変換されます。
打ち間違いを防ぐため、URLは次のいずれかからコピーします。

- 「Settings」の「Pages」に表示される「Visit site」
- 「Actions」の「Deploy to GitHub Pages」の実行画面にある`deploy`ジョブ
- リポジトリのトップページ右側の「Deployments」

URLが表示されるのは、最初のデプロイが成功した後です。
手順3でSourceを設定した時点ではまだ表示されません。

## 参考

- [テンプレートからリポジトリを作成する](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
- [Collaboratorを招待する](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository)
- [GitHub PagesをGitHub Actionsで公開する](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Rulesetでブランチを保護する](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository)
