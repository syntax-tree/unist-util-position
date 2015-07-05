'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var position = require('./index.js');
var assert = require('assert');

/*
 * Fixture.
 */

var properties = {
    'position': {
        'start': {
            'line': 1,
            'column': 1,
            'indent': [],
            'offset': 0
        },
        'end': {
            'line': 1,
            'column': 2,
            'indent': [],
            'offset': 1
        }
    }
};

var objects = {
    'position': {
        'start': {},
        'end': {}
    }
};

var values = {
    'position': {}
};

var none = {};

var pos = {
    'line': null,
    'column': null,
    'offset': null,
    'indent': null
};

/*
 * Tests.
 */

describe('mdast-util-position', function () {
    ['start', 'end'].forEach(function (type) {
        describe(type, function () {
            var fn = position[type];

            it('should not throw without node', function () {
                assert.deepEqual(fn(), pos);
            });

            it('should get type', function () {
                assert.deepEqual(fn(properties), properties.position[type]);
            });

            it('should return an empty object without objects', function () {
                assert.deepEqual(fn(objects), pos);
            });

            it('should return an empty object without values', function () {
                assert.deepEqual(fn(values), pos);
            });

            it('should return an empty object without position', function () {
                assert.deepEqual(fn(none), pos);
            });
        });
    });

    describe('generated', function () {
        it('should not throw without node', function () {
            assert.equal(position.generated(), true);
        });

        it('should return false when with properties', function () {
            assert.equal(position.generated(properties), false);
        });

        it('should return false when without properties', function () {
            assert.equal(position.generated(objects), true);
        });

        it('should return false when without objects', function () {
            assert.equal(position.generated(values), true);
        });

        it('should return false when without position', function () {
            assert.equal(position.generated(none), true);
        });
    });
});
