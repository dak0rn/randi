var expect = require('chai').expect;
var randi  = require('../randi');

describe('Export', function() {
    it('should be a function', function() {
        expect(randi).to.be.a('function');
    });

    it('should take two arguments', function() {
        expect( randi.length ).to.equal(2);
    });
});

describe('Currying', function() {
    it('should support curry', function() {
        var curried = randi({});

        expect( curried ).to.be.a('function');
        expect( curried.length ).to.equal(1);
    });

    it('should return the function itself if invoked without args',
            function() {
        expect( randi() ).to.equal( randi );
    });
});

