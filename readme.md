# mdast-util-position [![Build Status][travis-badge]][travis] [![Coverage Status][coverage-badge]][coverage]

[**mdast**][mdast] utility to get the position of nodes.

*   Supports index-based positional information patched by
    [**mdast-range**][mdast-range];

*   Supports [`indent`][mdast-indent].

Utility to get the style of an [**mdast**][mdast] heading.

## Installation

[npm][npm-install]:

```bash
npm install mdast-util-position
```

**mdast-util-position** is also available for [duo][],
and as an AMD, CommonJS, and globals module,
[uncompressed and compressed][releases].

## Usage

```js
var remark = require('remark');
var position = require('mdast-util-position');

var ast = remark.parse([
    '# foo',
    '',
    '* bar',
    ''
].join('\n'));

position.start(ast) // {line: 1, column: 1}
position.end(ast) // {line: 4, column: 1}
position.generated(ast) // false

position.start() // {line: null, column: null}
position.end() // {line: null, column: null}
position.generated() // true
```

## API

### `position.start([node])`

### `position.end([node])`

Get the heading style of a node.

**Parameters**:

*   `node` ([`Node`][mdast-node]) — Node to check;

**Returns** ([`Position`][mdast-position]) — Filled with `line`
(nullable `uint32 >= 1`) and `column` (nullable `uint32 >= 1`).

### `position.generated([node])`

Get the heading style of a node.

**Parameters**:

*   `node` ([`Node`][mdast-node]) — Node to check;

**Returns** (`boolean`) — Whether or not `node` has positional
information (both starting and ending lines and columns).  This is
useful when checking if a node is inserted by plug-ins.

## License

[MIT][license] © [Titus Wormer][home]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/mdast-util-position.svg

[travis]: https://travis-ci.org/wooorm/mdast-util-position

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/mdast-util-position.svg

[coverage]: https://codecov.io/github/wooorm/mdast-util-position

[mdast]: https://github.com/wooorm/mdast

[mdast-node]: https://github.com/wooorm/mdast#node

[mdast-range]: https://github.com/wooorm/mdast-range

[mdast-indent]: https://github.com/wooorm/mdast#location

[mdast-position]: https://github.com/wooorm/mdast/blob/master/doc/nodes.md#position

[npm-install]: https://docs.npmjs.com/cli/install

[duo]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/mdast-util-position/releases

[license]: LICENSE

[home]: http://wooorm.com
