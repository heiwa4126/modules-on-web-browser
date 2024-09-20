# modules-on-web-browser

最近のブラウザはバンドルしなくても import が使えるそうなので試してみる。  
(import が使えるブラウザ一覧: [import - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#browser_compatibility))

このプロジェクトでは
package.json は書いてあるけど、
npm は
タスクランナーと
[http-server](https://www.npmjs.com/package/http-server) 読むだけ。
npm じゃなくて pnpm, Bun でも OK。

## 実行

```sh
npm i
npm run start # http-serverでキャッシュが無効
# or
npm run preview # キャッシュを3600秒にして本番風にする
```

で、ブラウザで <http://127.0.0.1:8080> を開く。

## TODO

- CDN にあるパッケージも使ってみる。✅
  - [UNPKG](https://unpkg.com/)
  - [jsDelivr - A free, fast, and reliable CDN for JS and open source](https://www.jsdelivr.com/)
- GitHub Pages にする。
- npm モジュールを使ってみる、のは無理そうなのでやめる。素直にバンドラを使うべし。

## メモ: UNPKG と jsDelivr、あと cdnjs

UNPKG と jsDelivr は
機械的に npm.js のモジュールが公開されてる(かオンデマンドで変換されてるか)らしい。

例えば [cowsay - npm](https://www.npmjs.com/package/cowsay) だったら

- [UNPKG - cowsay](https://www.unpkg.com/browse/cowsay@1.6.0/)
- [cowsay CDN by jsDelivr - A CDN for npm and GitHub](https://www.jsdelivr.com/package/npm/cowsay)

が存在する。

ESM (import 文 で読めるやつ) に関しては、対応してるモジュールとそうでないのがある
(ESM のサンプルは `src/esm-example.html`)。
cowsay はダメだった。

どうやって ESM 対応か知るのかは不明。元の npm.js 見る?
→
ヘッダのところに「ESM が使える」マークが書いてあったら使えるらしい。

- ESM が使える - [lodash-es CDN by jsDelivr - A CDN for npm and GitHub](https://www.jsdelivr.com/package/npm/lodash-es)
- ESM が使えない - [lodash CDN by jsDelivr - A CDN for npm and GitHub](https://www.jsdelivr.com/package/npm/lodash)

で、もう 1 つ

- [cdnjs - The #1 free and open source CDN built to make life easier for developers](https://cdnjs.com/)

こっちは機械的に npm.js から変換してるわけじゃないらしい。
