# rollup-plugin-preact-svg-lite

Import SVG files in preact.

## Purpose

This is a <a href="http://rollupjs.org/" target="_blank">Rollup</a> plugin for importing SVG files in <a href="http://preactjs.com/" target="_blank">Preact</a>.

It can work with rollup 2.x.x and @rollup/plugin-typescript 6.x.x.

## Installation

```bash
npm install rollup-plugin-preact-svg -D
```

## Usage

```javascript
// rollup.config.js

import svg from 'rollup-plugin-preact-svg-lite';

export default {
  // ...
  plugins: [
    svg()
  ]
}
```

## Example

```javascript
// main.ts
import {h, FunctionalComponent} from 'preact';
import Logo from 'path/to/logo.svg';

export const App: FunctionalComponent = () => (
  <Logo />
);
```

```javascript
// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import svg from 'rollup-plugin-preact-svg-lite';

export default {
  // ...
  plugins: [
    typescript(),
    svg(),
  ]
}
```
