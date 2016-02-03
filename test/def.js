var defined = require('../');
var test = require('tape');

test('defined-or', function (t) {
    var u = undefined;
    var n = null;
    
    t.equal(defined(), u, 'empty arguments');
    t.equal(defined(u), u, '1 undefined');
    t.equal(defined(u, n), u, '1 undefined');
    t.equal(defined(n, u), u, '1 undefined');
    t.equal(defined(u, u), u, '2 undefined');
    t.equal(defined(n, n), u, '1 undefined');
    t.equal(defined(u, u, u, u), u, '4 undefineds');
    t.equal(defined(u, u, n, n), u, '4 undefineds');
    t.equal(defined(n, n, u, u), u, '4 undefineds');
    t.equal(defined(n, u, u, n), u, '4 undefineds');
    t.equal(defined(n, u, n, u), u, '4 undefineds');
    t.equal(defined(n, n, n, n), u, '4 undefineds');
    
    t.equal(defined(undefined, false, true), false, 'false[0]');
    t.equal(defined(null, false, true), false, 'false[0]');
    t.equal(defined(undefined, null, false, true), false, 'false[0]');
    t.equal(defined(null, undefined, false, true), false, 'false[0]');
    t.equal(defined(false, true), false, 'false[1]');
    t.equal(defined(undefined, 0, true), 0, 'zero[0]');
    t.equal(defined(null, 0, true), 0, 'zero[0]');
    t.equal(defined(0, true), 0, 'zero[1]');
    
    t.equal(defined(3, undefined, 4), 3, 'first arg');
    t.equal(defined(3, null, 4), 3, 'first arg');
    t.equal(defined(undefined, 3, 4), 3, 'second arg');
    t.equal(defined(null, 3, 4), 3, 'second arg');
    t.equal(defined(undefined, undefined, 3), 3, 'third arg');
    t.equal(defined(null, undefined, 3), 3, 'third arg');
    t.equal(defined(undefined, null, 3), 3, 'third arg');
    t.equal(defined(null, null, 3), 3, 'third arg');
    
    t.end();
});
