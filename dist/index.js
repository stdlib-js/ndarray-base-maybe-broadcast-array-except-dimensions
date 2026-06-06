"use strict";var m=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var g=m(function(E,d){
var l=require('@stdlib/ndarray-base-broadcast-array-except-dimensions/dist'),q=require('@stdlib/ndarray-base-to-unique-normalized-indices/dist'),h=require('@stdlib/ndarray-base-shape/dist'),x=require('@stdlib/array-base-copy/dist'),c=require('@stdlib/array-base-join/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function w(n,r,a){var e,u,o,s,v,i,t;if(u=h(n,!1),s=r.length,v=u.length,v===s){if(e=x(a),o=e.length,e=q(e,v-1),e===null)throw new RangeError(f('2llHb',c(a,",")));if(e.sort(),e.length!==o)throw new Error(f('2llHc',c(a,",")));for(t=0,i=0;i<s;i++){if(t<o&&i===e[t]){t+=1;continue}if(u[i]!==r[i])return l(n,r,a)}return n}return l(n,r,a)}d.exports=w
});var b=g();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
