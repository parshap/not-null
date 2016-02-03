# not-null

Return the first argument that is `!= null` (i.e., `null` or
`undefined`).

This is a fork of [`defined`][defined] which is the same except with
`!== undefined`.

[defined]: https://www.npmjs.com/package/defined

Most of the time when I chain together `||`s, I actually just want the
first item that is not `undefined` or `null`, not the first non-falsy
item.

## Install

[npm: *not-null*](https://www.npmjs.com/package/not-null)

```
npm install not-null
```

## Example

``` js
var notnull = require('not-null');
var opts = { y : false, w : 4, z: null };
var x = defined(opts.z, opts.x, opts.y, opts.w, 100);
console.log(x);
```

```
$ node example/defined.js
false
```

The return value is `false` because `false` is the first item that is
`!= null`.

## API

``` js
var notnull = require('notnull')
```

### `var x = notnull(a, b, c...)`

Return the first item in the argument list `a, b, c...` that is `!= null`.

If all the items are `== null`, return undefined.
