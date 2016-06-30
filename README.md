# postcss-times

[![npm version](https://badge.fury.io/js/postcss-times.svg)](https://badge.fury.io/js/postcss-times)
[![Build Status](https://travis-ci.org/totora0155/postcss-times.svg?branch=master)](https://travis-ci.org/totora0155/postcss-times)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

<p><img width="20" src="https://camo.githubusercontent.com/2ec260a9d4d3dcc109be800af0b29a8471ad5967/687474703a2f2f706f73746373732e6769746875622e696f2f706f73746373732f6c6f676f2e737667"> <a href="https://github.com/postcss/postcss">PostCSS</a> plugin that to use instead of !important</p>

---

## Install

```
npm i postcss-times
```

## Usage

Write css.

```css
#id:times(2) {}
.class:times(3) {}
.parent .child:times(2) {}
.parent .child.multi:times(2) {}
[attr=class]:times(2) {}
[attr^=class]:times(2) {}
[attr$=class]:times(2) {}
[attr="class"]:times(2) {}

#id:times(str) {}
```

## Transform

```javascript
const fs = require('fs');
const postcss = require('postcss');
const times = require('..');

const css = fs.readFileSync('./sample.css', 'utf-8');

postcss([times])
  .process(css)
  .then(result => console.log(result.css));
```

## Output

Get like this.

```css
#id#id {}
.class.class.class {}
.parent .child.child {}
.parent .child.multi.multi {}
[attr=class][attr=class] {}
[attr^=class][attr^=class] {}
[attr$=class][attr$=class] {}
[attr="class"][attr="class"] {}

#id {}
```

## Run to example

**1** Clone this

```
git clone git@github.com:totora0155/postcss-times.git
```

**2** Change directory
```
cd postcss-times
```

**3** Install modules
```
npm install
```

**4** Run to script
```
cd examples && node postcss.js
```

## Change log

|version|log|
|:-:|:--|
|1.0.0|Rewrite es6|
|0.0.1|Release!|
