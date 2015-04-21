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

    it('should not curry if invoked with both arguments', function() {
        expect( randi(1,{}) ).not.to.be.a('function');
    });
});

describe('Return value', function() {

    it('should return a string', function() {
        expect( randi(1) ).to.be.a('string');
    });

    it('should have the given length', function() {
        for( var i = 0; i < 10; i++ )
            expect( randi(i).length ).to.equal(i);
    });
});
