### ローカル開発
```sh
- package.json を修正
https://zenn.dev/toshi052312/articles/ffd026e96a8d97#6.-vite-%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E4%BF%AE%E6%AD%A3
```sh
  "scripts": {
    // 修正前
    "dev": "vite",
    // 修正後
    "dev": "vite --host",
```

```sh
$ npm install axios --prefix frontend

- CORS 対策
```

```sh
# ローカル開発環境
$ docker compose down
$ docker compose build
$ docker compose up -d

$ source ./remake-container.sh

http://127.0.0.1:8080/api/hello
http://127.0.0.1:5173/
```

```sh
- バックエンド ruff によるコード整形
$ docker compose run --rm backend ruff check . --fix
$ docker compose run --rm backend ruff format .

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

### デプロイ
```sh
$ touch .envrc
or
$ cp .envrc.example .envrc
$ brew install direnv
- 適宜更新
$ direnv allow
```

```sh
$ docker builder prune -f
$ docker buildx history rm --all
```
