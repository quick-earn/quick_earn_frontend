(()=>{var e={};e.id=701,e.ids=[701],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8886:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>l}),r(7038),r(6960),r(2029),r(5866);var A=r(3191),a=r(8716),n=r(7922),i=r.n(n),s=r(5231),o={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);r.d(t,o);let l=["",{children:["pages",{children:["dashboard",{children:["user",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7038)),"D:\\node test\\frontend-nextjs\\src\\app\\pages\\dashboard\\user\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6960)),"D:\\node test\\frontend-nextjs\\src\\app\\pages\\dashboard\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"D:\\node test\\frontend-nextjs\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\node test\\frontend-nextjs\\src\\app\\pages\\dashboard\\user\\page.tsx"],c="/pages/dashboard/user/page",d={require:r,loadChunk:()=>Promise.resolve()},h=new A.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/pages/dashboard/user/page",pathname:"/pages/dashboard/user",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},2533:(e,t,r)=>{Promise.resolve().then(r.bind(r,8431))},3416:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return A}}),r(3658);let A=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9683:(e,t,r)=>{"use strict";function A(e,t,r,A){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return A}}),r(3658),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9404:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let A=r(1174),a=r(326),n=A._(r(7577)),i=r(5619),s=r(944),o=r(3071),l=r(1348),u=r(3416),c=r(131),d=r(2413),h=r(9408),f=r(9683),g=r(3486),p=r(7767);function m(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}let b=n.default.forwardRef(function(e,t){let r,A;let{href:o,as:b,children:x,prefetch:E=null,passHref:B,replace:j,shallow:y,scroll:w,locale:O,onClick:C,onMouseEnter:R,onTouchStart:Y,legacyBehavior:v=!1,...N}=e;r=x,v&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let F=n.default.useContext(c.RouterContext),P=n.default.useContext(d.AppRouterContext),Q=null!=F?F:P,I=!F,M=!1!==E,D=null===E?p.PrefetchKind.AUTO:p.PrefetchKind.FULL,{href:S,as:U}=n.default.useMemo(()=>{if(!F){let e=m(o);return{href:e,as:b?m(b):e}}let[e,t]=(0,i.resolveHref)(F,o,!0);return{href:e,as:b?(0,i.resolveHref)(F,b):t||e}},[F,o,b]),k=n.default.useRef(S),T=n.default.useRef(U);v&&(A=n.default.Children.only(r));let W=v?A&&"object"==typeof A&&A.ref:t,[_,V,L]=(0,h.useIntersection)({rootMargin:"200px"}),Z=n.default.useCallback(e=>{(T.current!==U||k.current!==S)&&(L(),T.current=U,k.current=S),_(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[U,W,S,L,_]);n.default.useEffect(()=>{},[U,S,V,O,M,null==F?void 0:F.locale,Q,I,D]);let G={ref:Z,onClick(e){v||"function"!=typeof C||C(e),v&&A.props&&"function"==typeof A.props.onClick&&A.props.onClick(e),Q&&!e.defaultPrevented&&function(e,t,r,A,a,i,o,l,u){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==o||o;"beforePopState"in t?t[a?"replace":"push"](r,A,{shallow:i,locale:l,scroll:e}):t[a?"replace":"push"](A||r,{scroll:e})};u?n.default.startTransition(d):d()}(e,Q,S,U,j,y,w,O,I)},onMouseEnter(e){v||"function"!=typeof R||R(e),v&&A.props&&"function"==typeof A.props.onMouseEnter&&A.props.onMouseEnter(e)},onTouchStart:function(e){v||"function"!=typeof Y||Y(e),v&&A.props&&"function"==typeof A.props.onTouchStart&&A.props.onTouchStart(e)}};if((0,l.isAbsoluteUrl)(U))G.href=U;else if(!v||B||"a"===A.type&&!("href"in A.props)){let e=void 0!==O?O:null==F?void 0:F.locale,t=(null==F?void 0:F.isLocaleDomain)&&(0,f.getDomainLocale)(U,e,null==F?void 0:F.locales,null==F?void 0:F.domainLocales);G.href=t||(0,g.addBasePath)((0,u.addLocale)(U,e,null==F?void 0:F.defaultLocale))}return v?n.default.cloneElement(A,G):(0,a.jsx)("a",{...N,...G,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},956:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return A},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},A="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5619:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return c}});let A=r(2149),a=r(3071),n=r(757),i=r(1348),s=r(3658),o=r(944),l=r(4903),u=r(1394);function c(e,t,r){let c;let d="string"==typeof t?t:(0,a.formatWithValidation)(t),h=d.match(/^[a-zA-Z]{1,}:\/\//),f=h?d.slice(h[0].length):d;if((f.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,i.normalizeRepeatedSlashes)(f);d=(h?h[0]:"")+t}if(!(0,o.isLocalURL)(d))return r?[d]:d;try{c=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){c=new URL("/","http://n")}try{let e=new URL(d,c);e.pathname=(0,s.normalizePathTrailingSlash)(e.pathname);let t="";if((0,l.isDynamicRoute)(e.pathname)&&e.searchParams&&r){let r=(0,A.searchParamsToUrlQuery)(e.searchParams),{result:i,params:s}=(0,u.interpolateAs)(e.pathname,e.pathname,r);i&&(t=(0,a.formatWithValidation)({pathname:i,hash:e.hash,query:(0,n.omit)(r,s)}))}let i=e.origin===c.origin?e.href.slice(e.origin.length):e.href;return r?[i,t||i]:i}catch(e){return r?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return o}});let A=r(7577),a=r(956),n="function"==typeof IntersectionObserver,i=new Map,s=[];function o(e){let{rootRef:t,rootMargin:r,disabled:o}=e,l=o||!n,[u,c]=(0,A.useState)(!1),d=(0,A.useRef)(null),h=(0,A.useCallback)(e=>{d.current=e},[]);return(0,A.useEffect)(()=>{if(n){if(l||u)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:A,observer:a,elements:n}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},A=s.find(e=>e.root===r.root&&e.margin===r.margin);if(A&&(t=i.get(A)))return t;let a=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:a},s.push(r),i.set(r,t),t}(r);return n.set(e,t),a.observe(e),function(){if(n.delete(e),a.unobserve(e),0===n.size){a.disconnect(),i.delete(A);let e=s.findIndex(e=>e.root===A.root&&e.margin===A.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,a.requestIdleCallback)(()=>c(!0));return()=>(0,a.cancelIdleCallback)(e)}},[l,r,t,u,d.current]),[h,u,(0,A.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2451:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return a}});let r=/[|\\{}()[\]^$+*?.-]/,A=/[|\\{}()[\]^$+*?.-]/g;function a(e){return r.test(e)?e.replace(A,"\\$&"):e}},3071:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return n},formatWithValidation:function(){return s},urlObjectKeys:function(){return i}});let A=r(8374)._(r(2149)),a=/https?|ftp|gopher|file/;function n(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",o=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),o&&"object"==typeof o&&(o=String(A.urlQueryToSearchParams(o)));let u=e.search||o&&"?"+o||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||a.test(n))&&!1!==l?(l="//"+(l||""),i&&"/"!==i[0]&&(i="/"+i)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),""+n+l+(i=i.replace(/[?#]/g,encodeURIComponent))+(u=u.replace("#","%23"))+s}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return n(e)}},4903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getSortedRoutes:function(){return A.getSortedRoutes},isDynamicRoute:function(){return a.isDynamicRoute}});let A=r(4712),a=r(5541)},1394:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return n}});let A=r(9966),a=r(7249);function n(e,t,r){let n="",i=(0,a.getRouteRegex)(e),s=i.groups,o=(t!==e?(0,A.getRouteMatcher)(i)(t):"")||r;n=e;let l=Object.keys(s);return l.every(e=>{let t=o[e]||"",{repeat:r,optional:A}=s[e],a="["+(r?"...":"")+e+"]";return A&&(a=(t?"":"/")+"["+a+"]"),r&&!Array.isArray(t)&&(t=[t]),(A||e in o)&&(n=n.replace(a,r?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(n=""),{params:l,result:n}}},5541:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return n}});let A=r(7356),a=/\/\[[^/]+?\](?=\/|$)/;function n(e){return(0,A.isInterceptionRouteAppPath)(e)&&(e=(0,A.extractInterceptionRouteInformation)(e).interceptedRoute),a.test(e)}},944:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return n}});let A=r(1348),a=r(7929);function n(e){if(!(0,A.isAbsoluteUrl)(e))return!0;try{let t=(0,A.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},757:(e,t)=>{"use strict";function r(e,t){let r={};return Object.keys(e).forEach(A=>{t.includes(A)||(r[A]=e[A])}),r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return r}})},2149:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function A(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,a]=e;Array.isArray(a)?a.forEach(e=>t.append(r,A(e))):t.set(r,A(a))}),t}function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),A=1;A<t;A++)r[A-1]=arguments[A];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return n},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return a}})},9966:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return a}});let A=r(1348);function a(e){let{re:t,groups:r}=e;return e=>{let a=t.exec(e);if(!a)return!1;let n=e=>{try{return decodeURIComponent(e)}catch(e){throw new A.DecodeError("failed to decode param")}},i={};return Object.keys(r).forEach(e=>{let t=r[e],A=a[t.pos];void 0!==A&&(i[e]=~A.indexOf("/")?A.split("/").map(e=>n(e)):t.repeat?[n(A)]:n(A))}),i}}},7249:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return c},getRouteRegex:function(){return o}});let A=r(7356),a=r(2451),n=r(3236);function i(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,n.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=A.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),n=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&n){let{key:e,optional:A,repeat:o}=i(n[1]);return r[e]={pos:s++,repeat:o,optional:A},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!n)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:A}=i(n[1]);return r[e]={pos:s++,repeat:t,optional:A},t?A?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function o(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function l(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:A,routeKeys:n,keyPrefix:s}=e,{key:o,optional:l,repeat:u}=i(A),c=o.replace(/\W/g,"");s&&(c=""+s+c);let d=!1;(0===c.length||c.length>30)&&(d=!0),isNaN(parseInt(c.slice(0,1)))||(d=!0),d&&(c=r()),s?n[c]=""+s+o:n[c]=o;let h=t?(0,a.escapeStringRegexp)(t):"";return u?l?"(?:/"+h+"(?<"+c+">.+?))?":"/"+h+"(?<"+c+">.+?)":"/"+h+"(?<"+c+">[^/]+?)"}function u(e,t){let r;let i=(0,n.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),o={};return{namedParameterizedRoute:i.map(e=>{let r=A.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),n=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&n){let[r]=e.split(n[0]);return l({getSafeRouteKey:s,interceptionMarker:r,segment:n[1],routeKeys:o,keyPrefix:t?"nxtI":void 0})}return n?l({getSafeRouteKey:s,segment:n[1],routeKeys:o,keyPrefix:t?"nxtP":void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:o}}function c(e,t){let r=u(e,t);return{...o(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function d(e,t){let{parameterizedRoute:r}=s(e),{catchAll:A=!0}=t;if("/"===r)return{namedRegex:"^/"+(A?".*":"")+"$"};let{namedParameterizedRoute:a}=u(e,!1);return{namedRegex:"^"+a+(A?"(?:(/.*)?)":"")+"$"}}},4712:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return A}});class r{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let r=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&r.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');r.unshift(t)}return null!==this.restSlugName&&r.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&r.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),r}_insert(e,t,A){if(0===e.length){this.placeholder=!1;return}if(A)throw Error("Catch-all must be the last part of the URL.");let a=e[0];if(a.startsWith("[")&&a.endsWith("]")){let r=a.slice(1,-1),i=!1;if(r.startsWith("[")&&r.endsWith("]")&&(r=r.slice(1,-1),i=!0),r.startsWith("...")&&(r=r.substring(3),A=!0),r.startsWith("[")||r.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+r+"').");if(r.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+r+"').");function n(e,r){if(null!==e&&e!==r)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+r+"').");t.forEach(e=>{if(e===r)throw Error('You cannot have the same slug name "'+r+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===a.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+r+'" differ only by non-word symbols within a single dynamic path')}),t.push(r)}if(A){if(i){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');n(this.optionalRestSlugName,r),this.optionalRestSlugName=r,a="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');n(this.restSlugName,r),this.restSlugName=r,a="[...]"}}else{if(i)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');n(this.slugName,r),this.slugName=r,a="[]"}}this.children.has(a)||this.children.set(a,new r),this.children.get(a)._insert(e.slice(1),t,A)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function A(e){let t=new r;return e.forEach(e=>t.insert(e)),t.smoosh()}},1348:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return f},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return m},NormalizeError:function(){return g},PageNotFoundError:function(){return p},SP:function(){return d},ST:function(){return h},WEB_VITALS:function(){return r},execOnce:function(){return A},getDisplayName:function(){return o},getLocationOrigin:function(){return i},getURL:function(){return s},isAbsoluteUrl:function(){return n},isResSent:function(){return l},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function A(e){let t,r=!1;return function(){for(var A=arguments.length,a=Array(A),n=0;n<A;n++)a[n]=arguments[n];return r||(r=!0,t=e(...a)),t}}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,n=e=>a.test(e);function i(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=i();return e.substring(t.length)}function o(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let A=await e.getInitialProps(t);if(r&&l(r))return A;if(!A)throw Error('"'+o(e)+'.getInitialProps()" should resolve to an object. But found "'+A+'" instead.');return A}let d="undefined"!=typeof performance,h=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class f extends Error{}class g extends Error{}class p extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},8431:(e,t,r)=>{"use strict";r.d(t,{default:()=>D});var A=r(326),a=r(6418),n=r(5597),i=r(4099),s=r(5047),o=r(7577),l=r(6226),u=r(8129),c=r(7618),d=r(9404),h=r.n(d),f=r(9275);let g={src:"/_next/static/media/ajkerdealAd1.b58e7c0a.png",height:177,width:284,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAdklEQVR42mP4jwT+/fr14+SRn5fO/vv3j+EXkPPjx98/f/78+/d99+aP0XofQmV+nD7KcPPmzRPHj589d+7R3bvf1y4Cyn3fvv7b9nUMQOWfPn36/evX3///v29b+8Gf4XNz/s8zxxlQ7Pj7F2jBr2uX/v//DwC/vGin/2iVSwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},p={src:"/_next/static/media/ajkerdealAd2.bc2c2b83.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKsTt//EABsQAAIBBQAAAAAAAAAAAAAAAAECAwAFERJR/9oACAEBAAE/ALVKiDCQopeMOx6Qda//xAAaEQABBQEAAAAAAAAAAAAAAAACAAEDEyFR/9oACAECAQE/AIiKtt6v/8QAGhEAAQUBAAAAAAAAAAAAAAAAAgABAxIhQf/aAAgBAwEBPwCQRuWNxf/Z",blurWidth:8,blurHeight:5},m={src:"/_next/static/media/bikroyAd1.7cb14c83.png",height:900,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AOfu8fX6++7z9tXd4bfEyam8uaG0s114gADI1Nfh6OvR3NrM2de9zdDF0NCptbVceYEArr7C5ebj4+7z6fP22+LepqWkjZSZaoWMAJmvt9bJqOnRnfPoz+jr6tbTzsjMzWqGjgCMoai4u6/TyrDu6d3w8vXT09O/xMWYqq7Se1w3k1a2AgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},b={src:"/_next/static/media/bikroyAd2.5899ccb5.jpg",height:720,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAq4P/xAAaEAABBQEAAAAAAAAAAAAAAAADAAECESFR/9oACAEBAAE/ABjHZ5NGt1u4v//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCI/9k=",blurWidth:8,blurHeight:5},x={src:"/_next/static/media/darazAd1.9b80cad1.jpg",height:628,width:1200,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAvQdf/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQMEAAIREhP/2gAIAQEAAT8AbFTFSJC9uixkE3Gv/8QAGREAAgMBAAAAAAAAAAAAAAAAEiIAAyFB/9oACAECAQE/ALEEcXk//8QAGREBAQEAAwAAAAAAAAAAAAAAAQIDABEh/9oACAEDAQE/AMA2m61C0tO695//2Q==",blurWidth:8,blurHeight:4},E={src:"/_next/static/media/darazAd2.f7f68fbf.png",height:631,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ANXZz9Pe1dbXztjRx87m3r3SzL22rrf8+ADV1cvXzcPT3NPE/fjS0MfrUQXnjXjXqJsAwvnzwvbxw/v1xP756YNs7mY/75R+7TQAAMH/+8H//MH/+sD//srg2d6mmPlQANiqncjLSbagqtYEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},B={src:"/_next/static/media/othobaAd1.72e65e93.jpeg",height:800,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKCIv//EABwQAAICAgMAAAAAAAAAAAAAAAEDAhEABBMhYf/aAAgBAQABPwDX3OYsgWVJbJdE1Y8rP//EABkRAAMAAwAAAAAAAAAAAAAAAAECEQADcf/aAAgBAgEBPwA7XSC3uf/EABcRAQADAAAAAAAAAAAAAAAAAAIAEjH/2gAIAQMBAT8AZNsn/9k=",blurWidth:8,blurHeight:8},j={src:"/_next/static/media/setting.c29d85e0.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR42m3POwqDQBCAYZu8JJJzpEgCpk8TklRJEBu3sNDGxk5F7RVPIB7AW3gavYn/CoKKC9/uzs4wyyhrS+TdbhpoVtYGSBHBRQPfyruTLNgSXPHGAzfEOA+duKhUflBxf3IK2PiJrD3IDiqJF0oY+MPEl9x+/OIOHR4ELtDpslHYjgQJHBSoESAkp83Gkw/LkXvKumSAJVOUuwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},y={src:"/_next/static/media/work.18fc1c08.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnUlEQVR42k2OPQrCQBCFYwot7W1s7DyBqCh4CHcVkl7QzkbQaiIoi5fzAMlC7pF8AzuQhY/5eW/fbuaqOMrSoV8rNnvTvDQ5QwkhUerOXFsnzRcecIUbvOCHtlNDQezGYgfPLeGshiMcUtrYS5wg3OFJylSdBazsJkthbjHX9EENe4YP9UI9OYmBvoM/hso+OmOxoM71CYQ3RvES8x5ICmjeUCW3RwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},w={src:"/_next/static/media/deposit.07bbc55b.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVZheFYheFZhOBYhOFYhOAAAABYhOBZheFYhOBYhOBYhOBZheFYhOBYhOBZheFZheFYhOBYhOBYheFYhOBYhOBYheFYheFYheFYhOBYhODJ0kiYAAAAGnRSTlMAAAAAAAABAgIFCxgYIigpL01ZZWZweoW7vDMepTUAAAA7SURBVHjaBYABEkAgAAQP6xBRUfH/jxrNGMysyaSE0biRMxtadD33qVUe9u89sGghxtAQpdfaCzIA+AdMwQJaP4VJ+gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},O={src:"/_next/static/media/withdraw.4c4c1976.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVZheFZheBYheFYhOBZheFYheFYhOBZheFYhOBZheFZheBZhOBYhOBZheFYhOBYhOBYhOBZheFYhOBZheFYhOBYhOBYhOBYheFYheFYheFYheFYhOBYhODRQj/dAAAAHXRSTlMAAAAAAQEBAgIDAwgIDRQkJTMzSEhMTVlweYS+v7RaLLIAAAA/SURBVHjaHcVJFkAwAETBTxOCxJiR+5+TpzYFWGHhm+tsppZRx3PvDHS4EBw9zIpRC6j4bfVFKNWcaxJGP/MCUHMCfhwaxSMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},C={src:"/_next/static/media/packages.ab2fba7a.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEVZheFYheFZhOBYhOBYhOFYhOBZheFYhOBZheFZhOFYhOBZhOFYhOFYhOBYheFYheFYhOBZheFYheFZheFZheFYheFYhOBYhOBYhOBYhOBZheFZheFYheFYhOBYheFYhOBYheFYhOBYheFYhOBYhOBYhOBYhOCUVHoxAAAAJ3RSTlMAAAAAAQECCQoRERYWHh8iIi4wMTJTVFhaZ3Bxc3N3d4GBg4eIj5FiFgAkAAAARklEQVR42h3GVxZAMBQE0HmG6L1GCaLsf4ly3K+LNPaUYpKhXkBybiDPrfX1CmDKcap2lzVqu3BzOQogPwnprTF2EPj8BR+B/gOGDRd7/wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},R={src:"/_next/static/media/transaction.100e4b9e.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEVYheFYheBZhOBYhOBZheFZheBZheFZheBZheFYhOBYhOBYhOBYhOBYhOBYheFYhOBYhOBYhOBYhOBYheFYhOBYhOBYhOBYheFYhOBYheGvkdltAAAAGnRSTlMAAAAAAQEfICFDUFFUVVZWW1xpbJOYmZ6gqv/dvzAAAAA3SURBVHjaY2BiYGYAAiYGVk5+bi4eTlYGDlFJYUE+cXYGDhEJIQFeMTY4Ay4FU8zCwMTACNYOAGFMAq5k4zaIAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},Y={src:"/_next/static/media/refer.8251d35e.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVZheFZheBYheFZhOFZhOBYhOBZhOFZheBYhOBZheBYheFYhOBYhOBZhOBYhOBYheBYheBZheBYhOBYheBZheFYhOBYhOBYheFYheFZheFYheBZheFYhOBZhOBYhOBZheFYheFZhOBYhOBYhOFYheBYheFZheFZheFYheFYhOBDbK4GAAAAJ3RSTlMAAAAAAAABAgIEBAglLy82N0lJS1VYWXJ8fX2GhqSkuL3MzNHS7O1YYnjsAAAAR0lEQVR42gVABxaAEAD9CQ2aRGnQzv0v2ENecICXGRjS0TGSoN/EeYm1w/I2SrXfDGmG+zFGIsTDTXsMsF7XlfYWhFICSvEDl4MEfLP6ouAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},v={src:"/_next/static/media/help.be0b67fe.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR42jWPQQ6CMBBFJ3FljGvjgnIF9+4UFkYTt0XxAl7BjZA24ZjtTXhDB5IXZv77DUV8TBvh6WJyPubOqJcs4IrMDYWR9xP5gD97W2TIDhF09iG9kV/2HQxQC0EPFytsCX+w59Nn+FghNVY4IW3OLXfoBVkRTlY4wFFnzShVYssVIhe7cequs2ZSTtlv0ka+PFB0q5sBN2NkTe+OL9IAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},N={src:"/_next/static/media/about.202ae4af.png",height:2e3,width:2e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAjklEQVR42jWPQQoCMQxFC+70DB3cuBDPoIJFbyBkYMbTtNhjJjfx2WQKn6b5j580SdNd4sxNszRbQ9PoVTw3raAvuouLWktyyqa/GeABYx81EEnQCxq0VD1TX0ZNAloC0GcAb94fB+w11wFoJqpH84hOMaJLtZzi8WCXzn1jh2vML8lj45vQRK6CgPLm/QCJQmAnFCxMVgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},F={src:"/_next/static/media/daraz.21b31e37.png",height:2474,width:3500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEX+WQT+WAT+WAT+WQT+WAT+WAT+WAT+WQT+WQT+WQT+WAT+WQT+WQT+WAT+WQT+WAT+WQT+WAT+WQT+WAT+WQT+WQT+WAT+WQT+WAT+WQT+WAT+WAT+WASP0VlzAAAAHXRSTlMAAAEDAwoLDRIXGRsdIzo7PkNfaWp/f5CforfB/jollM0AAAA5SURBVHjaY2BmZGBhZmZhYmAU5GVkYAAidnERYQE+fi4GURkhSWkJKUEGHjFudg5WTjawNCMjAyMALcEBwGqLTjwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6},P={src:"/_next/static/media/adlogo.1b46d855.svg",height:200,width:381,blurWidth:0,blurHeight:0},Q={src:"/_next/static/media/bikroyLogo.20c953eb.png",height:386,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42gXAoREAEAAAwF9JlRy6oghO1lSbGc9xTNfQVc3i2YKoyJLyAWJEBXpXi8ziAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},I={src:"/_next/static/media/othobaLogo.4d57f926.jpg",height:920,width:1392,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsYP/xAAZEAADAAMAAAAAAAAAAAAAAAABAhIAITL/2gAIAQEAAT8AFhulK0dTn//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:5};var M=r(9484);let D=()=>{let e=(0,s.useRouter)(),[t,r]=(0,o.useState)(null),[d,D]=(0,o.useState)(1),[S,U]=(0,o.useState)(!1);if((0,o.useEffect)(()=>{(async()=>{if(null!=sessionStorage.getItem("loginId")){let t=await i.Z.get(a.Z.GetDataById+sessionStorage.getItem("loginId"));return r(t.data),t.data?.role!="user"&&e.push(n.Z.LogIn),t.data}e.push(n.Z.LogIn)})()},[]),(0,o.useEffect)(()=>{setTimeout(()=>{1==d?D(d+1):2==d?D(d+1):3==d?D(d+1):4==d?D(d+1):5==d?D(d+1):6==d?D(d+1):D(1)},5e3)},[d]),t?.role=="user")return(0,A.jsxs)(A.Fragment,{children:[A.jsx(M.Z,{isLoading:S,message:"Loading..."}),(0,A.jsxs)("div",{className:"border dark:border-white/20 border-black/30 shadow-xl rounded w-[90%] relative left-[5%] my-4 ",children:[A.jsx("h1",{className:"border-b dark:border-white/20 border-black/30 mb-4 py-2 text-3xl text-center",children:"My Ads"}),(0,A.jsxs)("div",{className:"grid grid-cols-4",children:[(0,A.jsxs)("button",{className:"mb-4 grid justify-items-center md:scale-100 scale-90",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:y,alt:"NF",className:""})}),"My Work"]}),(0,A.jsxs)("button",{onClick:()=>{e.push(n.Z.Depost),U(!0)},className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:w,alt:"NF",className:""})}),"Deposit"]}),(0,A.jsxs)("button",{onClick:()=>{e.push(n.Z.Withdraw),U(!0)},className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 rounded-full overflow-hidden",children:A.jsx(l.default,{src:O,alt:"NF",className:""})}),"Withdraw"]}),(0,A.jsxs)("button",{onClick:()=>{e.push(n.Z.Packages),U(!0)},className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:C,alt:"NF",className:""})}),"Package"]}),(0,A.jsxs)("button",{className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:f.Z,alt:"NF",className:""})}),"Profile"]}),(0,A.jsxs)("button",{className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:Y,alt:"NF",className:""})}),"Refer"]}),(0,A.jsxs)("button",{className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:R,alt:"NF",className:""})}),"Transaction"]}),(0,A.jsxs)("button",{className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:v,alt:"NF",className:""})}),"Helpline"]})]})]}),(0,A.jsxs)("div",{className:"border dark:border-white/20 border-black/30 shadow-xl h-[200px] md:h-[500px] w-[90%] relative left-[5%] mb-4 overflow-hidden rounded",children:[A.jsx(u.M,{children:1==d&&A.jsx(c.E.div,{className:"absolute left-0 right-0 grid place-items-center",initial:{opacity:0,x:-1e3},animate:{opacity:1,x:0},exit:{opacity:0,x:1e3},transition:{duration:1},children:A.jsx(l.default,{src:g,alt:"NF",className:"object-fill"})})}),A.jsx(u.M,{children:2==d&&A.jsx(c.E.div,{className:"absolute left-0 right-0 grid place-items-center",initial:{opacity:0,x:-1e3},animate:{opacity:1,x:0},exit:{opacity:0,x:1e3},transition:{duration:1},children:A.jsx(l.default,{src:p,alt:"NF",className:""})})}),A.jsx(u.M,{children:3==d&&A.jsx(c.E.div,{className:"absolute left-0 right-0 grid place-items-center",initial:{opacity:0,x:-1e3},animate:{opacity:1,x:0},exit:{opacity:0,x:1e3},transition:{duration:1},children:A.jsx(l.default,{src:m,alt:"NF"})})}),A.jsx(u.M,{children:4==d&&A.jsx(c.E.div,{className:"absolute left-0 right-0 grid place-items-center",initial:{opacity:0,x:-1e3},animate:{opacity:1,x:0},exit:{opacity:0,x:1e3},transition:{duration:1},children:A.jsx(l.default,{src:b,alt:"NF",className:"object-fill"})})}),A.jsx(u.M,{children:5==d&&A.jsx(c.E.div,{className:"absolute left-0 right-0 grid place-items-center",initial:{opacity:0,x:-1e3},animate:{opacity:1,x:0},exit:{opacity:0,x:1e3},transition:{duration:1},children:A.jsx(l.default,{src:x,alt:"NF",className:"object-fill"})})}),A.jsx(u.M,{children:6==d&&A.jsx(c.E.div,{className:"absolute left-0 right-0 grid place-items-center",initial:{opacity:0,x:-1e3},animate:{opacity:1,x:0},exit:{opacity:0,x:1e3},transition:{duration:1},children:A.jsx(l.default,{src:E,alt:"NF",className:"object-fill"})})}),A.jsx(u.M,{children:7==d&&A.jsx(c.E.div,{className:"absolute left-0 right-0 grid place-items-center",initial:{opacity:0,x:-1e3},animate:{opacity:1,x:0},exit:{opacity:0,x:1e3},transition:{duration:1},children:A.jsx(l.default,{src:B,alt:"NF",className:"object-fill"})})})]}),(0,A.jsxs)("div",{className:"border dark:border-white/20 border-black/30 shadow-xl w-[90%] relative left-[5%] mb-4 rounded ",children:[A.jsx("h1",{className:"border-b dark:border-white/20 border-black/20 mb-4 py-2 text-3xl text-center",children:"Company"}),(0,A.jsxs)("div",{className:"grid grid-cols-4",children:[(0,A.jsxs)("button",{className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:j,alt:"NF",className:""})}),"Settings"]}),(0,A.jsxs)("button",{className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 rounded-full overflow-hidden",children:A.jsx(l.default,{src:N,alt:"NF",className:""})}),"About"]})]})]}),(0,A.jsxs)("div",{className:"border dark:border-white/20 border-black/30 shadow-xl w-[90%] relative left-[5%] mb-4 rounded ",children:[A.jsx("h1",{className:"border-b dark:border-white/20 border-black/30 mb-4 py-2 text-3xl text-center",children:"Other Partner"}),(0,A.jsxs)("div",{className:"grid grid-cols-4",children:[(0,A.jsxs)(h(),{href:"https://www.daraz.com.bd/",target:"_blank",className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 bg-white/70 rounded-full overflow-hidden content-center",children:A.jsx(l.default,{src:F,alt:"NF",className:""})}),"Daraz"]}),(0,A.jsxs)(h(),{href:"https://ajkerdeal.com/",target:"_blank",className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 bg-white/70 rounded-full overflow-hidden content-center",children:A.jsx(l.default,{src:P,alt:"NF",className:""})}),"AjkerDeal"]}),(0,A.jsxs)(h(),{href:"https://bikroy.com/",target:"_blank",className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 bg-white/70 rounded-full overflow-hidden content-center",children:A.jsx(l.default,{src:Q,alt:"NF",className:""})}),"Bikroy"]}),(0,A.jsxs)(h(),{href:"https://www.othoba.com/",target:"_blank",className:"mb-4 grid justify-items-center rounded",children:[A.jsx("div",{className:"w-10 h-10 mb-2 bg-white/70 rounded-full overflow-hidden content-center",children:A.jsx(l.default,{src:I,alt:"NF",className:""})}),"Othoba"]})]})]})]})}},7038:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var A=r(9510);let a=(0,r(8570).createProxy)(String.raw`D:\node test\frontend-nextjs\src\app\pages\dashboard\user\dashboard.tsx#default`),n={title:"Dashboard | User"},i=()=>A.jsx(A.Fragment,{children:A.jsx(a,{})})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),A=t.X(0,[948,500,621,323,99,226,264],()=>r(8886));module.exports=A})();