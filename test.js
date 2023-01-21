import assert from 'node:assert/strict'
import test from 'node:test'
import {position, pointStart, pointEnd} from './index.js'

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

const generated = {line: null, column: null, offset: null}

test('position', () => {
  assert.deepEqual(
    position(properties),
    properties.position,
    'should get the whole position'
  )

  assert.deepEqual(
    position(noFields),
    {start: generated, end: generated},
    'should return an empty position without fields'
  )

  assert.deepEqual(
    position(noPoints),
    {start: generated, end: generated},
    'should return an empty position without points'
  )

  assert.deepEqual(
    position(noPosition),
    {start: generated, end: generated},
    'should return an empty position without position'
  )

  assert.deepEqual(
    position(),
    {start: generated, end: generated},
    'should return an empty position without node'
  )
})

test('pointStart', () => {
  assert.deepEqual(
    pointStart(properties),
    properties.position.start,
    'should get a side'
  )

  assert.deepEqual(
    pointStart(noFields),
    generated,
    'should return an empty point without fields'
  )

  assert.deepEqual(
    pointStart(noPoints),
    generated,
    'should return an empty point without points'
  )

  assert.deepEqual(
    pointStart(noPosition),
    generated,
    'should return an empty point without position'
  )

  assert.deepEqual(
    pointStart(),
    generated,
    'should return an empty point without node'
  )
})

test('pointEnd', () => {
  assert.deepEqual(
    pointEnd(properties),
    properties.position.end,
    'should get a side'
  )

  assert.deepEqual(
    pointEnd(noFields),
    generated,
    'should return an empty point without fields'
  )

  assert.deepEqual(
    pointEnd(noPoints),
    generated,
    'should return an empty point without points'
  )

  assert.deepEqual(
    pointEnd(noPosition),
    generated,
    'should return an empty point without position'
  )

  assert.deepEqual(
    pointEnd(),
    generated,
    'should return an empty point without node'
  )
})
