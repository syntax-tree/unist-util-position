/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer. All rights reserved.
 * @module mdast-util-position
 * @fileoverview Utility to get either the starting or the
 *   ending position of a node, and if its generated or not.
 */

'use strict';

/**
 * Factory to get a position at `type`.
 *
 * @param {string} type - Either `'start'` or `'end'`.
 * @return {function(Node): Object}
 */
function positionFactory(type) {
    /**
     * Get a position in `node` at a bound `type`.
     *
     * @param {Node} node - Node to check.
     * @return {Object} - Position at `type` in `node`, or
     *   an empty object.
     */
    return function (node) {
        var pos = (node && node.position && node.position[type]) || {};

        return {
            'line': pos.line || null,
            'column': pos.column || null
        };
    };
}

/*
 * Getters.
 */

var position = {
    'start': positionFactory('start'),
    'end': positionFactory('end')
};

/**
 * Detect if a node was available in the original document.
 *
 * @param {Node} node - Node to test.
 * @return {boolean} - Whether or not `node` is generated.
 */
function generated(node) {
    var initial = position.start(node);
    var final = position.end(node);

    return initial.line === null || initial.column === null ||
        final.line === null || final.column === null;
}

position.generated = generated;

/*
 * Expose.
 */

module.exports = position;
