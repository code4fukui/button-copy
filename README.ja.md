# button-copy

依存関係のないカスタム要素（`<button-copy>`）です。テキスト入力やテキストエリアに、ワンクリックで「クリップボードにコピー」するボタンを追加します。

## デモ

デモを試す: [https://code4fukui.github.io/button-copy/](https://code4fukui.github.io/button-copy/)

## 特徴

- **依存関係なし:** 軽量でスタンドアロンなWebコンポーネントです。
- **使いやすい:** HTMLにスクリプトタグとカスタム要素を追加するだけです。ビルドステップは不要です。
- **柔軟:** `<input>` と `<textarea>` 要素の両方で動作します。
- **カスタマイズ可能:** ボタンのテキストは `<button-copy>` タグ内のコンテンツで設定できます。
- **モダン:** 非同期の Clipboard API を使用し、基本的なエラーハンドリングを備えています。

## 使い方

1.  HTMLに `button-copy.js` スクリプトを読み込みます。ESモジュールであるため、必ず `type="module"` を指定してください。

    ```html
    <script type="module" src="https://code4fukui.github.io/button-copy/button-copy.js"></script>
    ```

2.  ページに `<button-copy>` 要素を追加します。`target` 属性には、コピー元の入力フィールドの `id` を設定します。

### 例

**`<input>` を使用した基本的な例:**

```html
<!-- コピー元の入力フィールド -->
<input id="share-url" value="https://example.com" readonly>

<!-- コピー用ボタン -->
<button-copy target="share-url">Copy URL</button-copy>
```

**`<textarea>` を使用し、ボタンのテキストを変更した例:**

```html
<!-- コピー元のテキストエリア -->
<textarea id="code-snippet">console.log("Hello, world!");</textarea>

<!-- コピー用ボタン -->
<button-copy target="code-snippet">Copy Code</button-copy>
```

## 属性

### `target` (必須)

値をコピーしたい `<input>` または `<textarea>` 要素の `id` を指定します。

## ブラウザサポート

このコンポーネントは、モダンブラウザの機能（カスタム要素、ESモジュール、Clipboard API (`navigator.clipboard`)）に依存しています。すべてのモダンブラウザ（Chrome、Firefox、Safari、Edge）でサポートされています。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
