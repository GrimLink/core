# Typography - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML typography elements with **CSS API** that give you superpowers. 🕶

- [Typography - Native Elements](#typography---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)

---

## Example

```html
  <h1>My beautiful heading</h1>
  <p>I'm a beautiful piece of typo</p>
```

```css
:root {
}

.MySpecialTitle {
}
```

Check the [live demo](https://ne-typo.stackblitz.io/)


## CSS API

```css
* {
  /* Misc API */
  --quoteFontSize: var(--ne-quote-font-size, 2rem);
  --quoteFontWeight: var(--ne-quote-font-weight, 100);
  --citeFontSize: var(--ne-cite-font-size, 1rem);
  --citeForeground: var(--ne-cite-foreground, hsl(235, 100%, 60%));
}
```
