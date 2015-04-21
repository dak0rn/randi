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

        options = options || {};
        var charset = options.charset || "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

        var gen = function(length) {
            var r = '';
            var i = length + 1;
            var l = charset.length;

            while( --i > 0 )
                r += charset[ Math.floor( Math.random() * l )  ];

            return r;
        };

        if( 'number' === typeof length && length >= 0 )
            return gen(length);
        else
            return gen;
    };

}));
