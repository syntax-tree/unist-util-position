(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.mdastUtilPosition = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});