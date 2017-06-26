# PostHTML-Style-Expansion [![npm version](https://badge.fury.io/js/posthtml-style-expansion.svg)](https://badge.fury.io/js/posthtml-style-expansion) [![Build Status](https://travis-ci.org/renyamizuno/posthtml-style-expantion.svg?branch=master)](https://travis-ci.org/renyamizuno/posthtml-style-expantion)

PostHTML plugin expand link rel="stylesheet".

## Install

```
npm i -D posthtml-style-expansion
```

## Usage

```js
const posthtml = require('posthtml')

posthtml([require('posthtml-style-expansion')({ root: './', encoding: 'utf-8' })])
  .process('<link expand="true" href="/path/index.css" rel="stylesheet">')
  .then( result => console.log(result.html))
```

### Options
`root`: Root folder

`encoding`: Default `utf-8`

