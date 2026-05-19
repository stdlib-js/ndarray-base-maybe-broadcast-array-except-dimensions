<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# maybeBroadcastArrayExceptDimensions

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Broadcast an [ndarray][@stdlib/ndarray/base/ctor] to a specified shape while keeping a list of specified dimensions unchanged if and only if the specified shape differs from the provided [ndarray][@stdlib/ndarray/base/ctor]'s shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
import maybeBroadcastArrayExceptDimensions from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions@deno/mod.js';
```

#### maybeBroadcastArrayExceptDimensions( arr, shape, dims )

Broadcasts an [ndarray][@stdlib/ndarray/base/ctor] to a specified shape while keeping a list of specified dimensions unchanged if and only if the specified shape differs from the provided [ndarray][@stdlib/ndarray/base/ctor]'s shape.

<!-- eslint-disable id-length -->

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

// Create a 2x2 ndarray:
var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
// returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]

// Perform broadcasting:
var y = maybeBroadcastArrayExceptDimensions( x, [ 3, 2, 2 ], [ -1 ] );
// returns <ndarray>[ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ] ]
```

The function accepts the following arguments:

-   **arr**: input [ndarray][@stdlib/ndarray/base/ctor].
-   **shape**: target shape.
-   **dims**: list of dimensions to exclude from broadcasting. Should be a list of negative integers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function throws an error if a provided [ndarray][@stdlib/ndarray/base/ctor] is [incompatible][@stdlib/ndarray/base/broadcast-shapes] with a provided shape.
-   If a provided [ndarray][@stdlib/ndarray/base/ctor] has the same shape as the specified shape (excluding the list of specified dimensions), the function returns the provided [ndarray][@stdlib/ndarray/base/ctor].
-   If a provided [ndarray][@stdlib/ndarray/base/ctor] has a different (broadcast compatible) shape than the specified shape, the function returns a new (base) [ndarray][@stdlib/ndarray/base/ctor] view of the provided [ndarray][@stdlib/ndarray/base/ctor]'s data. The view is typically **not** contiguous. As more than one element of a returned view may refer to the same memory location, writing to the view may affect multiple elements. If you need to write to the returned [ndarray][@stdlib/ndarray/base/ctor], copy the [ndarray][@stdlib/ndarray/base/ctor] **before** performing operations which may mutate elements.
-   If a provided [ndarray][@stdlib/ndarray/base/ctor] does not have the same shape as the specified shape (excluding the list of specified dimensions), the returned [ndarray][@stdlib/ndarray/base/ctor] is a "base" [ndarray][@stdlib/ndarray/base/ctor], and, thus, the returned [ndarray][@stdlib/ndarray/base/ctor] does not perform bounds checking or afford any of the guarantees of the non-base [ndarray][@stdlib/ndarray/ctor] constructor. The primary intent of this function is to broadcast an ndarray-like object within internal implementations and to do so with minimal overhead.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable id-length -->

<!-- eslint no-undef: "error" -->

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import numel from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@deno/mod.js';
import ind2sub from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ind2sub@deno/mod.js';
import getShape from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@deno/mod.js';
import maybeBroadcastArrayExceptDimensions from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions@deno/mod.js';

// Create a 1x3 array:
var x = array( [ [ 1, 2, 3 ] ] );
// returns <ndarray>[ [ 1, 2, 3 ] ]

// Broadcast the array to 2x1x3:
var y = maybeBroadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
// returns <ndarray>[ [ [ 1, 2, 3 ] ], [ [ 1, 2, 3 ] ] ]

// Retrieve the shape:
var sh = getShape( y );
// returns [ 2, 1, 3 ]

// Retrieve the number of elements:
var N = numel( sh );

// Loop through the array elements...
var sub;
var v;
var i;
for ( i = 0; i < N; i++ ) {
    v = y.iget( i );
    sub = ind2sub( sh, i );
    console.log( 'Y[%s] = %d', sub.join( ', ' ), v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-maybe-broadcast-array-except-dimensions.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-maybe-broadcast-array-except-dimensions

[test-image]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-maybe-broadcast-array-except-dimensions/blob/main/branches.md

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor/tree/deno

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

</section>

<!-- /.links -->
