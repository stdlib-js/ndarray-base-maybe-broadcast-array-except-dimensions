"use strict";var m=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var g=m(function(E,d){
var l=require('@stdlib/ndarray-base-broadcast-array-except-dimensions/dist'),q=require('@stdlib/ndarray-base-to-unique-normalized-indices/dist'),h=require('@stdlib/ndarray-base-shape/dist'),x=require('@stdlib/array-base-copy/dist'),c=require('@stdlib/array-base-join/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function w(i,r,n){var e,u,o,s,v,a,t;if(u=h(i,!1),s=r.length,v=u.length,v===s){if(e=x(n),o=e.length,e=q(e,v-1),e===null)throw new RangeError(f('2llHb',c(n,",")));if(e.sort(),e.length!==o)throw new Error(f('2llHc',c(n,",")));for(t=0,a=0;a<s;a++){if(t<o&&a===e[t]){t+=1;continue}if(u[a]!==r[a])return l(i,r,n)}return i}return l(i,r,n)}d.exports=w
});var b=g();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
