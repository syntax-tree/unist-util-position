'use strict'

var test = require('tape')
var position = require('.')

var properties = {
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 2, offset: 1}
  }
}

var noFields = {position: {start: {}, end: {}}}

var noPoints = {position: {}}

var noPosition = {}

var generated = {line: null, column: null, offset: null}

test('unist-util-position', function (t) {
  var sides = ['start', 'end']

  t.test('position', function (t) {
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

  // eslint-disable-next-line unicorn/no-array-for-each
  sides.forEach(function (side) {
    t.test('position.' + side, function (t) {
      var fn = position[side]

      t.same(fn(properties), properties.position[side], 'should get a side')

      t.same(
        fn(noFields),
        generated,
        'should return an empty point without fields'
      )

      t.same(
        fn(noPoints),
        generated,
        'should return an empty point without points'
      )

      t.same(
        fn(noPosition),
        generated,
        'should return an empty point without position'
      )

      t.same(fn(), generated, 'should return an empty point without node')

      t.end()
    })
  })

  t.end()
})
