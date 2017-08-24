'use strict';

var test = require('tape');
var position = require('./index.js');

var properties = {
  position: {
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 2, offset: 1}
  }
};

var objects = {
  position: {start: {}, end: {}}
};

var values = {position: {}};

var none = {};

var generated = {line: null, column: null, offset: null};

test('unist-util-position', function (t) {
  ['start', 'end'].forEach(function (type) {
    t.test(type, function (st) {
      var fn = position[type];

      st.same(
        fn(),
        generated,
        'should not throw without node'
      );

      st.same(
        fn(properties),
        properties.position[type],
        'should get type'
      );

      st.same(
        fn(objects),
        generated,
        'should return an empty object without objects'
      );

      st.same(
        fn(values),
        generated,
        'should return an empty object without values'
      );

      st.same(
        fn(none),
        generated,
        'should return an empty object without position'
      );

      st.end();
    });
  });

  t.end();
});
