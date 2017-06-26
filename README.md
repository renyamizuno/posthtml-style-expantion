# PostHTML-Style-Expansion

PostHTML plugin expand link rel="stylesheet".

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

