# mdast-util-position [![Build Status](https://img.shields.io/travis/wooorm/mdast-util-position.svg)](https://travis-ci.org/wooorm/mdast-util-position) [![Coverage Status](https://img.shields.io/codecov/c/github/wooorm/mdast-util-position.svg)](https://codecov.io/github/wooorm/mdast-util-position)

[**mdast**](https://github.com/wooorm/mdast) utility to get the position
of nodes.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install mdast-util-position
```

**mdast-util-position** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), and
[duo](http://duojs.org/#getting-started), and as an AMD, CommonJS, and globals
module, [uncompressed](mdast-util-position.js) and
[compressed](mdast-util-position.min.js).

*   Supports index-based positional information patched by
    [**mdast-range**](https://github.com/wooorm/mdast-range);

*   Supports [`indent`](https://github.com/wooorm/mdast#location).

## Usage

```js
var mdast = require('mdast');
var position = require('mdast-util-position');

var ast = mdast.parse(`# foo

* bar
`);

position.start(ast) // {line: 1, column: 1}
position.end(ast) // {line: 4, column: 1}
position.generated(ast) // false

position.start() // {line: null, column: null}
position.end() // {line: null, column: null}
position.generated() // true
```

## API

### position.start(node?)

### position.end(node?)

Parameters:

*   `node` (optional [`Node`](https://github.com/wooorm/mdast/blob/master/doc/nodes.md#node))
    — Node to check

Returns: [`Position`](https://github.com/wooorm/mdast/blob/master/doc/nodes.md#position)
— Filled with `line` (nullable `uint32 >= 1`) and `column` (nullable
`uint32 >= 1`).

### position.generated(node?)

Parameters:

*   `node` (optional [`Node`](https://github.com/wooorm/mdast/blob/master/doc/nodes.md#node))
    — Node to check

Returns: `boolean`, whether or not `node` has positional information (both
starting and ending lines and columns). This is useful when checking if a node
is inserted by plug-ins.

## License

[MIT](LICENSE) © [Titus Wormer](http://wooorm.com)
