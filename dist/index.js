/** @license Apache-2.0 */

'use strict';

/**
* Broadcast an ndarray to a specified shape while keeping a list of specified dimensions unchanged if and only if the specified shape differs from the provided ndarray's shape.
*
* @module @stdlib/ndarray-base-maybe-broadcast-array-except-dimensions
*
* @example
* var array = require( '@stdlib/ndarray-array' );
* var maybeBroadcastArrayExceptDimensions = require( '@stdlib/ndarray-base-maybe-broadcast-array-except-dimensions' );
*
* var x = array( [ [ 1, 2, 3 ] ] );
* // returns <ndarray>[ [ 1, 2, 3 ] ]
*
* var y = maybeBroadcastArrayExceptDimensions( x, [ 2, 2, 3 ], [ -2 ] );
* // returns <ndarray>[ [ [ 1, 2, 3 ] ], [ [ 1, 2, 3 ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
