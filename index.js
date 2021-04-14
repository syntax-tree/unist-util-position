export var pointStart = point('start')
export var pointEnd = point('end')

export function position(node) {
  return {start: pointStart(node), end: pointEnd(node)}
}

function point(type) {
  point.displayName = type

  return point

  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: point.offset > -1 ? point.offset : null
    }
  }
}
