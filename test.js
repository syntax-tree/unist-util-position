import assert from 'node:assert/strict'
import test from 'node:test'
import {position, pointStart, pointEnd} from './index.js'
import * as mod from './index.js'

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

test('core', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['pointEnd', 'pointStart', 'position'],
    'should expose the public api'
  )
})

test('position', () => {
  assert.deepEqual(
    position(properties),
    properties.position,
    'should get the whole position'
  )

  assert.deepEqual(
    position({
      type: 'x',
      position: {
        start: {line: 0, column: 0, offset: -1},
        end: {line: 0, column: 0, offset: -1}
      }
    }),
    undefined,
    'should not get too low values'
  )

  assert.deepEqual(
    position({
      type: 'x',
      position: {start: {line: 1, column: 1}, end: {line: 1, column: 2}}
    }),
    {
      start: {line: 1, column: 1, offset: undefined},
      end: {line: 1, column: 2, offset: undefined}
    },
    'should support points w/o `offset`'
  )

  assert.deepEqual(
    position(noFields),
    undefined,
    'should return nothing when without fields'
  )

  assert.deepEqual(
    position(noPoints),
    undefined,
    'should return nothing when without points'
  )

  assert.deepEqual(
    position(noPosition),
    undefined,
    'should return nothing when without position'
  )

  assert.deepEqual(
    position(),
    undefined,
    'should return nothing when without node'
  )
})

test('pointStart', () => {
  assert.deepEqual(
    pointStart(properties),
    properties.position.start,
    'should get a side'
  )

  assert.deepEqual(
    pointStart({
      type: 'x',
      position: {
        start: {line: 0, column: 0, offset: -1},
        end: {line: 0, column: 0, offset: -1}
      }
    }),
    undefined,
    'should not get too low values'
  )

  assert.deepEqual(
    pointStart({
      type: 'x',
      position: {start: {line: 1, column: 1}, end: {line: 1, column: 2}}
    }),
    {line: 1, column: 1, offset: undefined},
    'should support points w/o `offset`'
  )

  assert.deepEqual(
    pointStart(noFields),
    undefined,
    'should return nothing when without fields'
  )

  assert.deepEqual(
    pointStart(noPoints),
    undefined,
    'should return nothing when without points'
  )

  assert.deepEqual(
    pointStart(noPosition),
    undefined,
    'should return nothing when without position'
  )

  assert.deepEqual(
    pointStart(),
    undefined,
    'should return nothing when without node'
  )
})

test('pointEnd', () => {
  assert.deepEqual(
    pointEnd(properties),
    properties.position.end,
    'should get a side'
  )

  assert.deepEqual(
    pointEnd({
      type: 'x',
      position: {
        start: {line: 0, column: 0, offset: -1},
        end: {line: 0, column: 0, offset: -1}
      }
    }),
    undefined,
    'should not get too low values'
  )

  assert.deepEqual(
    pointEnd({
      type: 'x',
      position: {start: {line: 1, column: 1}, end: {line: 1, column: 2}}
    }),
    {line: 1, column: 2, offset: undefined},
    'should support points w/o `offset`'
  )

  assert.deepEqual(
    pointEnd(noFields),
    undefined,
    'should return nothing when without fields'
  )

  assert.deepEqual(
    pointEnd(noPoints),
    undefined,
    'should return nothing when without points'
  )

  assert.deepEqual(
    pointEnd(noPosition),
    undefined,
    'should return nothing when without position'
  )

  assert.deepEqual(
    pointEnd(),
    undefined,
    'should return nothing when without node'
  )
})
