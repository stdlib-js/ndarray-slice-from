// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-null@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-undefined@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice-from@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function h(h,p){var f,a,v,c,g,x,b;if(v={strict:!0},a=arguments.length,!s(h))throw new TypeError(l("1mx4f",h));if(r(arguments[a-1])){if(d(f=arguments[a-=1],"strict")){if(!i(f.strict))throw new TypeError(l("1mx2o","strict",f.strict));v.strict=f.strict}if(g=o(h),1===a&&g.length>0)throw new RangeError(l("1mxFE",g.join(","),0))}if(t(p)){if(c=p,a>2)throw new Error(l("1mx0m"))}else for(c=[],x=1;x<a;x++)c.push(arguments[x]);for(x=0;x<c.length;x++)if(b=c[x],!(e(b)||n(b)||m(b)))throw new TypeError(l("1mxFF",String(c[x])));return j(h,c,v.strict,!1)}export{h as default};
//# sourceMappingURL=index.mjs.map
