### ローカル開発

- 環境変数読み込み
```sh
$ touch .envrc
or
$ cp .envrc.example .envrc
$ brew install direnv
- 適宜更新
$ direnv allow

- Docker 立ち上げ
```sh
# ローカル開発環境
$ docker compose down
- Mac
$ docker compose build --build-arg OS_TYPE=darwin
- Devin
$ docker compose build
$ docker compose up -d

# コンテナ作り直しスクリプト
$ ./remake-container.sh

http://127.0.0.1:8080/api/hello
http://127.0.0.1:5173/
```

```sh
- バックエンド ruff によるコード整形
$ docker compose run --rm backend uv run ruff format .
- linter 実行
$ docker compose run --rm backend uv run ruff check . --fix

- フロントエンド formatter の実行
$ npx prettier --write frontend --log-level warn
$ npx eslint --config frontend/eslint.config.js --fix frontend
```

### package-json, package-json-lock のアプデ
```sh
$ cd frontend
$ npx npm-check-updates -u
$ npx npm-check-updates -u --target minor
$ npx npm-check-updates -u --target patch
$ npm install
cd ..
```

- Dockerのキャッシュ削除、Build 履歴削除
```sh
$ docker builder prune -f
$ docker buildx history rm --all
```

### Devin

- [Devin's Machine](https://app.devin.ai/workspace) でリポジトリ追加

#### 1.Git Pull
- そのまま

#### 2.Configure Secrets
```sh
# 環境変数用のファイル作成
$ touch .envrc

# 環境変数サンプルをコピー。中身は適宜変更
$ cp .envrc.example .envrc

# 環境変数を読み込む
$ direnv allow
```

- ローカル用
```sh
$ brew install direnv
```
#### 4.Maintain Dependencies
```sh
# ローカルM1Mac用
$ docker compose up -d
# Devin用
$ docker compose up -d

# コンテナ作り直し
$ ./remake-container.sh
```

#### 5.SetUp Lint
```sh
$ docker compose run --rm backend uv run ruff check .
$ docker compose run --rm frontend npx eslint --config frontend/eslint.config.js
```

#### 6.SetUp Tests
```sh
$ docker compose run --rm backend uv run pytest
$ docker compose run --rm frontend npx jest tests/jest

# Playwright
$ docker compose run --rm frontend npx playwright test --project firefox
```

### 7.Setup Local App

```sh
$ http://0.0.0.0:8080/ がフロントエンドのURL
$ http://127.0.0.1:5173/ がバックエンドのURL
```

#### 8.Additional Notes
- 必ず日本語で回答してください
を入力

### OPENAI-API で PR-Review
- [Qodo Merge](https://qodo-merge-docs.qodo.ai/installation/github/)
  - GPT-4.1利用
  - 日本語の回答をするようプロンプト設定
- GitHub の Repository >> Settings >> Secretes and variables >> Actions の Repository secrets の New repository secret を登録
  - OPENAI_KEY という名称で OPENAI API keys の SECRET KEY を登録
    - [OPENAI API keys](https://platform.openai.com/settings/organization/api-keys) 
```sh
--- .github/
           |- workflows/
                        |-- pr_agent.yml
