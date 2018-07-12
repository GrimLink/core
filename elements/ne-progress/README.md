# Progress - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<progress>` element with **CSS API** that give you superpowers. 🕶

<!-- TOC -->

- [Progress - Native Elements](#progress---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

<!-- /TOC -->

---

## Example

```html
<progress ne-progress value="50" max="100">Text</progress>
<progress ne-progress class="SpecialProgress" value="50" max="100">progress</progress>
```

```css
html {
  --ne-progress-border-color: #000;
}

.SpecialProgress {
  --ne-progress-height: 10px;
}
```

Check the [live demo](https://ne-progress.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-progress-border-color: hsl(0, 0%, 89%); /* color */

  /* Background API */
  --ne-progress-background: hsl(0, 0%, 97%); /* color */
  --ne-progress-filled-color: var(--ne-progress-border-color); /* color */

  /* Stripes API */
  --ne-progress-stripe-size: 16px; /* unit */
  --ne-progress-stripe-colors: rgba(255, 255, 255, 0.4); /* color */

  /* Misc API */
  --ne-progress-height: 5px; /* unit */
  --ne-progress-radius: 10px; /* border-radius */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-progress
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-progress/dist/ne-progress.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your build process::
```css
@import '@native-elements/ne-progress/src/ne-progress.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._