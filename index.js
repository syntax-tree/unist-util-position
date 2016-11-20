'use strict';

/* Expose. */
var position = exports;

position.start = positionFactory('start');
position.end = positionFactory('end');
position.generated = generated;

/* Factory to get a position at `type`. */
function positionFactory(type) {
  return pos;

  /* Get a position in `node` at a bound `type`. */
  function pos(node) {
    var pos = (node && node.position && node.position[type]) || {};

    return {
      line: pos.line || null,
      column: pos.column || null,
      offset: isNaN(pos.offset) ? null : pos.offset
    };
  }
}

/* Detect if a node was available in the original document. */
function generated(node) {
  var initial = position.start(node);
  var final = position.end(node);

  return initial.line === null || initial.column === null ||
    final.line === null || final.column === null;
}
