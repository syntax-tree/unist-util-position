# mdast-util-position [![Build Status][build-badge]][build-status] [![Coverage Status][coverage-badge]][coverage-status] [![Chat][chat-badge]][chat]

<!--lint disable heading-increment no-duplicate-headings-->

[**mdast**][mdast] utility to get the position of nodes.

*   Supports index-based positional information;
*   Supports [`indent`][mdast-indent].

## Installation

[npm][]:

```bash
npm install mdast-util-position
```

**mdast-util-position** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

```js
var remark = require('remark');
var position = require('mdast-util-position');

var ast = remark().parse([
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

Get the bound position of `node`.

###### Parameters

*   `node` ([`Node?`][node]) — Node to check.

###### Returns

[`Position`][mdast-position] — Filled with `line` (nullable
`uint32 >= 1`), `column` (nullable `uint32 >= 1`), `offset` (nullable
`uint32 >= 0`), and `indent`.

### `position.generated([node])`

Get the heading style of a node.

###### Parameters

*   `node` ([`Node`][mdast-node]) — Node to check;

###### Returns

`boolean` — Whether or not `node` has positional information (both
starting and ending lines and columns).  This is useful when checking
if a node is inserted by plug-ins.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/mdast-util-position.svg

[build-status]: https://travis-ci.org/wooorm/mdast-util-position

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/mdast-util-position.svg

[coverage-status]: https://codecov.io/github/wooorm/mdast-util-position

[chat-badge]: https://img.shields.io/gitter/room/wooorm/remark.svg

[chat]: https://gitter.im/wooorm/remark

[releases]: https://github.com/wooorm/mdast-util-position/releases

[license]: LICENSE

[author]: http://wooorm.com

[npm]: https://docs.npmjs.com/cli/install

[mdast]: https://github.com/wooorm/mdast

[node]: https://github.com/wooorm/mdast#node

[mdast-node]: https://github.com/wooorm/mdast#node

[mdast-indent]: https://github.com/wooorm/mdast#location

[mdast-position]: https://github.com/wooorm/mdast/blob/master/doc/nodes.md#position
