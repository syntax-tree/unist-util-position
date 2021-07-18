import test from 'tape'
import {position, pointStart, pointEnd} from './index.js'

const properties = {
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 2, offset: 1}
  }
}

const noFields = {position: {start: {}, end: {}}}

const noPoints = {position: {}}

const noPosition = {}

const generated = {line: null, column: null, offset: null}

test('unist-util-position', (t) => {
  t.test('position', (t) => {
    t.same(
      position(properties),
      properties.position,
      'should get the whole position'
    )

    t.same(
      position(noFields),
      {start: generated, end: generated},
      'should return an empty position without fields'
    )

    t.same(
      position(noPoints),
      {start: generated, end: generated},
      'should return an empty position without points'
    )

    t.same(
      position(noPosition),
      {start: generated, end: generated},
      'should return an empty position without position'
    )

    t.same(
      position(),
      {start: generated, end: generated},
      'should return an empty position without node'
    )

    t.end()
  })

  t.test('pointStart', (t) => {
    t.same(
      pointStart(properties),
      properties.position.start,
      'should get a side'
    )

    t.same(
      pointStart(noFields),
      generated,
      'should return an empty point without fields'
    )

    t.same(
      pointStart(noPoints),
      generated,
      'should return an empty point without points'
    )

    t.same(
      pointStart(noPosition),
      generated,
      'should return an empty point without position'
    )

    t.same(pointStart(), generated, 'should return an empty point without node')

    t.end()
  })

  t.test('pointEnd', (t) => {
    t.same(pointEnd(properties), properties.position.end, 'should get a side')

    t.same(
      pointEnd(noFields),
      generated,
      'should return an empty point without fields'
    )

    t.same(
      pointEnd(noPoints),
      generated,
      'should return an empty point without points'
    )

    t.same(
      pointEnd(noPosition),
      generated,
      'should return an empty point without position'
    )

    t.same(pointEnd(), generated, 'should return an empty point without node')

    t.end()
  })

  t.end()
})
