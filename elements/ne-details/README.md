# Details - Native Elements
> by [Native Elements](https://github.com/equinusocio/native-elements)

Native HTML `<details>` and `<summary>` elements with **CSS API** that give you superpowers. 🕶

- [Folding - Native Elements](#folding---native-elements)
  - [Example](#example)
  - [CSS API](#css-api)
  - [Install](#install)
  - [Usage](#usage)
    - [PostCSS](#postcss)

---

## Example

```html
  <details ne-details>
    <summary>My folding summary</summary>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
  </details>

  <!-- Grouped folding -->
  <section ne-details-group>
    <details ne-details>
      <summary>My folding summary</summary>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
    </details>
    <details ne-details>
      <summary>My folding summary</summary>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident saepe deserunt veritatis? Totam, corrupti. Dolor quos, numquam totam quae ea enim maiores sequi et? Optio harum adipisci neque nemo.</p>
    </details>
  </section>
```

```css
html {
  --ne-details-background: deeppink;
}

.SpecialFolding {
  --ne-details-summary-font-weight: 400;
}
```

Check the [live demo](https://ne-details.stackblitz.io/)


## CSS API

```css
* {
  /* Border API */
  --ne-details-separator: 1px solid rgba(0, 0, 0, 0.05); /* border */

  /* Background API */
  ---ne-details-background: #FFF; /* background */
  ---ne-details-summary-background: #FFF; /* background */

  /* Foreground API */
  --ne-details-summary-font-size: initial; /* font-size */
  --ne-details-summary-font-weight: 700; /* font-weight */
  --ne-details-summary-open-color: hsl(233, 64%, 62%); /* color */

  /* Misc API */
  --ne-details-max-height: 300px; /* height */
  --ne-details-border-radius: 4px; /* border-radius */
  --ne-details-summary-padding: 16px; /* padding */
  --ne-details-shadow: 0 1px 2px rgba(0, 0, 0, 0.16); /* box-shadow */
}
```

## Install

You can just install it with **npm** by running:
```
yarn add -D @native-elements/ne-details
```


## Usage
Just import the css inside your project from the **node_modules**.
```css
@import '@native-elements/ne-details/dist/ne-details.css';
```

### PostCSS
If you are inside a postCSS environment you can also import the `.pcss` source file and build it with your buil process:
```css
@import '@native-elements/ne-details/src/ne-details.pcss';
```

_**NOTE:** You need some PostCSS plugins to build Native Elements components._