import assert from 'node:assert/strict'
import test from 'node:test'
import {pointEnd, pointStart, position} from 'unist-util-position'

const properties = {
  type: 'a',
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 2, offset: 1}
  }
}

const noFields = {type: 'b', position: {start: {}, end: {}}}

const noPoints = {type: 'c', position: {}}

const noPosition = {type: 'd'}

test('core', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('unist-util-position')).sort(), [
      'pointEnd',
      'pointStart',
      'position'
    ])
  })
})

test('position', async function (t) {
  await t.test('should get the whole position', async function () {
    assert.deepEqual(position(properties), properties.position)
  })

  await t.test('should not get too low values', async function () {
    assert.deepEqual(
      position({
        type: 'x',
        position: {
          start: {line: 0, column: 0, offset: -1},
          end: {line: 0, column: 0, offset: -1}
        }
      }),
      undefined
    )
  })

  await t.test('should support points w/o `offset`', async function () {
    assert.deepEqual(
      position({
        type: 'x',
        position: {start: {line: 1, column: 1}, end: {line: 1, column: 2}}
      }),
      {
        start: {line: 1, column: 1, offset: undefined},
        end: {line: 1, column: 2, offset: undefined}
      }
    )
  })

  await t.test('should return nothing when without fields', async function () {
    assert.deepEqual(position(noFields), undefined)
  })

  await t.test('should return nothing when without points', async function () {
    assert.deepEqual(position(noPoints), undefined)
  })

  await t.test(
    'should return nothing when without position',
    async function () {
      assert.deepEqual(position(noPosition), undefined)
    }
  )

  await t.test('should return nothing when without node', async function () {
    assert.deepEqual(position(), undefined)
  })
})

test('pointStart', async function (t) {
  await t.test('should get a side', async function () {
    assert.deepEqual(pointStart(properties), properties.position.start)
  })

  await t.test('should not get too low values', async function () {
    assert.deepEqual(
      pointStart({
        type: 'x',
        position: {
          start: {line: 0, column: 0, offset: -1},
          end: {line: 0, column: 0, offset: -1}
        }
      }),
      undefined
    )
  })

  await t.test('should support points w/o `offset`', async function () {
    assert.deepEqual(
      pointStart({
        type: 'x',
        position: {start: {line: 1, column: 1}, end: {line: 1, column: 2}}
      }),
      {line: 1, column: 1, offset: undefined}
    )
  })

  await t.test('should return nothing when without fields', async function () {
    assert.deepEqual(pointStart(noFields), undefined)
  })

  await t.test('should return nothing when without points', async function () {
    assert.deepEqual(pointStart(noPoints), undefined)
  })

  await t.test(
    'should return nothing when without position',
    async function () {
      assert.deepEqual(pointStart(noPosition), undefined)
    }
  )

  await t.test('should return nothing when without node', async function () {
    assert.deepEqual(pointStart(), undefined)
  })
})

test('pointEnd', async function (t) {
  await t.test('should get a side', async function () {
    assert.deepEqual(pointEnd(properties), properties.position.end)
  })

  await t.test('should not get too low values', async function () {
    assert.deepEqual(
      pointEnd({
        type: 'x',
        position: {
          start: {line: 0, column: 0, offset: -1},
          end: {line: 0, column: 0, offset: -1}
        }
      }),
      undefined
    )
  })

  await t.test('should support points w/o `offset`', async function () {
    assert.deepEqual(
      pointEnd({
        type: 'x',
        position: {start: {line: 1, column: 1}, end: {line: 1, column: 2}}
      }),
      {line: 1, column: 2, offset: undefined}
    )
  })

  await t.test('should return nothing when without fields', async function () {
    assert.deepEqual(pointEnd(noFields), undefined)
  })

  await t.test('should return nothing when without points', async function () {
    assert.deepEqual(pointEnd(noPoints), undefined)
  })

  await t.test(
    'should return nothing when without position',
    async function () {
      assert.deepEqual(pointEnd(noPosition), undefined)
    }
  )

  await t.test('should return nothing when without node', async function () {
    assert.deepEqual(pointEnd(), undefined)
  })
})
