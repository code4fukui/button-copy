# button-copy

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A zero-dependency custom element (`<button-copy>`) that adds a one-click "copy to clipboard" button for text inputs and textareas.

## Demo

Try it live: [https://code4fukui.github.io/button-copy/](https://code4fukui.github.io/button-copy/)

## Features

- **Zero-dependency:** A lightweight, standalone Web Component.
- **Easy to use:** Add a script tag and the custom element to your HTML. No build step required.
- **Flexible:** Works with both `<input>` and `<textarea>` elements.
- **Customizable:** The button's text is set by the content within the `<button-copy>` tags.
- **Modern:** Uses the asynchronous Clipboard API with basic error handling.

## Usage

1.  Include the `button-copy.js` script in your HTML. It's an ES module, so be sure to use `type="module"`.

    ```html
    <script type="module" src="https://code4fukui.github.io/button-copy/button-copy.js"></script>
    ```

2.  Add the `<button-copy>` element to your page. Set its `target` attribute to the `id` of the input field you want to copy from.

### Examples

**Basic example with an `<input>`:**

```html
<!-- The input field to copy from -->
<input id="share-url" value="https://example.com" readonly>

<!-- The copy button -->
<button-copy target="share-url">Copy URL</button-copy>
```

**Example with a `<textarea>` and different button text:**

```html
<!-- The textarea to copy from -->
<textarea id="code-snippet">console.log("Hello, world!");</textarea>

<!-- The copy button -->
<button-copy target="code-snippet">Copy Code</button-copy>
```

## Attributes

### `target` (required)

The `id` of the `<input>` or `<textarea>` element whose value you want to copy.

## Browser Support

This component relies on modern browser features: Custom Elements, ES Modules, and the Clipboard API (`navigator.clipboard`). It is supported in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

MIT License — see [LICENSE](LICENSE).