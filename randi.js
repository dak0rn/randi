/**
 * randi
 * Unique ID generator
 *
 * Copyright (c) Daniel Koch <https://github.com/dak0rn>
 */

(function (root, factory) {
        if (typeof define === 'function' && define.amd) {
                    define([], factory);
                        }
            else if (typeof exports === 'object') {
                        module.exports = factory();
                            }
    else {
                root.metacarattere = factory();
                    }
} (this, function () {

    return function(length, options) {

        if( 'undefined' === options && 
            null !== length &&
            'object' === typeof length ) {
            options = length;
            length  = undefined;
        }

        var gen = function(length) {
        };

        if( length && length >= 0 )
            return gen(length);
        else
            return gen;
    };

}));
