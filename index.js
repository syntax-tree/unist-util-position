'use strict'

module.exports = position

position.start = factory('start')
position.end = factory('end')

function position(node) {
  return {start: position.start(node), end: position.end(node)}
}

function factory(type) {
  point.displayName = type

  return point

  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: isNaN(point.offset) ? null : point.offset
    }
  }
}
