"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[216],{655:function(e,t,n){var r;n.r(t),n.d(t,{AbortedDeferredError:function(){return a.X3},Await:function(){return i.KP},BrowserRouter:function(){return F},Form:function(){return H},HashRouter:function(){return k},Link:function(){return N},MemoryRouter:function(){return i.VA},NavLink:function(){return O},Navigate:function(){return i.Fg},NavigationType:function(){return a.aU},Outlet:function(){return i.j3},Route:function(){return i.AW},Router:function(){return i.F0},RouterProvider:function(){return x},Routes:function(){return i.Z5},ScrollRestoration:function(){return V},UNSAFE_DataRouterContext:function(){return i.w3},UNSAFE_DataRouterStateContext:function(){return i.FR},UNSAFE_LocationContext:function(){return i.gd},UNSAFE_NavigationContext:function(){return i.Us},UNSAFE_RouteContext:function(){return i.pW},UNSAFE_ViewTransitionContext:function(){return L},UNSAFE_useRouteId:function(){return i.Yi},UNSAFE_useScrollRestoration:function(){return te},createBrowserRouter:function(){return R},createHashRouter:function(){return S},createMemoryRouter:function(){return i.bi},createPath:function(){return a.Ep},createRoutesFromChildren:function(){return i.is},createRoutesFromElements:function(){return i.i7},createSearchParams:function(){return m},defer:function(){return a.PQ},generatePath:function(){return a.Gn},isRouteErrorResponse:function(){return a.WK},json:function(){return a.AV},matchPath:function(){return a.LX},matchRoutes:function(){return a.fp},parsePath:function(){return a.cP},redirect:function(){return a.uX},redirectDocument:function(){return a.fZ},renderMatches:function(){return i.Oe},resolvePath:function(){return a.i3},unstable_HistoryRouter:function(){return A},unstable_useBlocker:function(){return i.aQ},unstable_usePrompt:function(){return re},unstable_useViewTransitionState:function(){return oe},useActionData:function(){return i.nA},useAsyncError:function(){return i.iG},useAsyncValue:function(){return i.qv},useBeforeUnload:function(){return ne},useFetcher:function(){return q},useFetchers:function(){return G},useFormAction:function(){return Y},useHref:function(){return i.oQ},useInRouterContext:function(){return i.GV},useLinkClickHandler:function(){return B},useLoaderData:function(){return i.f_},useLocation:function(){return i.TH},useMatch:function(){return i.bS},useMatches:function(){return i.SN},useNavigate:function(){return i.s0},useNavigation:function(){return i.HJ},useNavigationType:function(){return i.ur},useOutlet:function(){return i.pC},useOutletContext:function(){return i.bx},useParams:function(){return i.UO},useResolvedPath:function(){return i.WU},useRevalidator:function(){return i.xW},useRouteError:function(){return i.lk},useRouteLoaderData:function(){return i.V4},useRoutes:function(){return i.V$},useSearchParams:function(){return I},useSubmit:function(){return X}});var o=n(294),i=n(250),a=n(599),u=n(624);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}const l="get",f="application/x-www-form-urlencoded";function d(e){return null!=e&&"string"==typeof e.tagName}function m(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}let p=null;const v=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function h(e){return null==e||v.has(e)?e:null}function w(e,t){let n,r,o,i,u;if(d(s=e)&&"form"===s.tagName.toLowerCase()){let u=e.getAttribute("action");r=u?(0,a.Zn)(u,t):null,n=e.getAttribute("method")||l,o=h(e.getAttribute("enctype"))||f,i=new FormData(e)}else if(function(e){return d(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return d(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let u=e.form;if(null==u)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||u.getAttribute("action");if(r=s?(0,a.Zn)(s,t):null,n=e.getAttribute("formmethod")||u.getAttribute("method")||l,o=h(e.getAttribute("formenctype"))||h(u.getAttribute("enctype"))||f,i=new FormData(u,e),!function(){if(null===p)try{new FormData(document.createElement("form"),0),p=!1}catch(e){p=!0}return p}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?t+".":"";i.append(e+"x","0"),i.append(e+"y","0")}else t&&i.append(t,r)}}else{if(d(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=l,r=null,o=f,u=e}var s;return i&&"text/plain"===o&&(u=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:u}}const b=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],g=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],y=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset","unstable_viewTransition"];function R(e,t){return(0,a.p7)({basename:null==t?void 0:t.basename,future:s({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,a.lX)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||E(),routes:e,mapRouteProperties:i.us,window:null==t?void 0:t.window}).initialize()}function S(e,t){return(0,a.p7)({basename:null==t?void 0:t.basename,future:s({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,a.q_)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||E(),routes:e,mapRouteProperties:i.us,window:null==t?void 0:t.window}).initialize()}function E(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=s({},t,{errors:T(t.errors)})),t}function T(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,r]of t)if(r&&"RouteErrorResponse"===r.__type)n[e]=new a.OF(r.status,r.statusText,r.data,!0===r.internal);else if(r&&"Error"===r.__type){if(r.__subType){let t=window[r.__subType];if("function"==typeof t)try{let o=new t(r.message);o.stack="",n[e]=o}catch(e){}}if(null==n[e]){let t=new Error(r.message);t.stack="",n[e]=t}}else n[e]=r;return n}const L=o.createContext({isTransitioning:!1});const C=(r||(r=n.t(o,2))).startTransition;class _{constructor(){this.status="pending",this.promise=new u(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function x(e){let{fallbackElement:t,router:n,future:r}=e,[a,u]=o.useState(n.state),[s,c]=o.useState(),[l,f]=o.useState({isTransitioning:!1}),[d,m]=o.useState(),[p,v]=o.useState(),[h,w]=o.useState(),{v7_startTransition:b}=r||{},g=o.useCallback((e=>{b?function(e){C?C(e):e()}(e):e()}),[b]),y=o.useCallback(((e,t)=>{let{unstable_viewTransitionOpts:r}=t;r&&null!=n.window&&"function"==typeof n.window.document.startViewTransition?p&&d?(d.resolve(),p.skipTransition(),w({state:e,currentLocation:r.currentLocation,nextLocation:r.nextLocation})):(c(e),f({isTransitioning:!0,currentLocation:r.currentLocation,nextLocation:r.nextLocation})):g((()=>u(e)))}),[g,p,d,n.window]);o.useLayoutEffect((()=>n.subscribe(y)),[n,y]),o.useEffect((()=>{l.isTransitioning&&m(new _)}),[l.isTransitioning]),o.useEffect((()=>{if(d&&s&&n.window){let e=s,t=d.promise,r=n.window.document.startViewTransition((async()=>{g((()=>u(e))),await t}));r.finished.finally((()=>{m(void 0),v(void 0),c(void 0),f({isTransitioning:!1})})),v(r)}}),[g,s,d,n.window]),o.useEffect((()=>{d&&s&&a.location.key===s.location.key&&d.resolve()}),[d,p,a.location,s]),o.useEffect((()=>{!l.isTransitioning&&h&&(c(h.state),f({isTransitioning:!0,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),w(void 0))}),[l.isTransitioning,h]);let R=o.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),S=n.basename||"/",E=o.useMemo((()=>({router:n,navigator:R,static:!1,basename:S})),[n,R,S]);return o.createElement(o.Fragment,null,o.createElement(i.w3.Provider,{value:E},o.createElement(i.FR.Provider,{value:a},o.createElement(L.Provider,{value:l},o.createElement(i.F0,{basename:S,location:a.location,navigationType:a.historyAction,navigator:R},a.initialized?o.createElement(U,{routes:n.routes,state:a}):t)))),null)}function U(e){let{routes:t,state:n}=e;return(0,i.DY)(t,void 0,n)}function F(e){let{basename:t,children:n,future:r,window:u}=e,s=o.useRef();null==s.current&&(s.current=(0,a.lX)({window:u,v5Compat:!0}));let c=s.current,[l,f]=o.useState({action:c.action,location:c.location}),{v7_startTransition:d}=r||{},m=o.useCallback((e=>{d&&C?C((()=>f(e))):f(e)}),[f,d]);return o.useLayoutEffect((()=>c.listen(m)),[c,m]),o.createElement(i.F0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:c})}function k(e){let{basename:t,children:n,future:r,window:u}=e,s=o.useRef();null==s.current&&(s.current=(0,a.q_)({window:u,v5Compat:!0}));let c=s.current,[l,f]=o.useState({action:c.action,location:c.location}),{v7_startTransition:d}=r||{},m=o.useCallback((e=>{d&&C?C((()=>f(e))):f(e)}),[f,d]);return o.useLayoutEffect((()=>c.listen(m)),[c,m]),o.createElement(i.F0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:c})}function A(e){let{basename:t,children:n,future:r,history:a}=e,[u,s]=o.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},l=o.useCallback((e=>{c&&C?C((()=>s(e))):s(e)}),[s,c]);return o.useLayoutEffect((()=>a.listen(l)),[a,l]),o.createElement(i.F0,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:a})}const D="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,P=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N=o.forwardRef((function(e,t){let n,{onClick:r,relative:u,reloadDocument:l,replace:f,state:d,target:m,to:p,preventScrollReset:v,unstable_viewTransition:h}=e,w=c(e,b),{basename:g}=o.useContext(i.Us),y=!1;if("string"==typeof p&&P.test(p)&&(n=p,D))try{let e=new URL(window.location.href),t=p.startsWith("//")?new URL(e.protocol+p):new URL(p),n=(0,a.Zn)(t.pathname,g);t.origin===e.origin&&null!=n?p=n+t.search+t.hash:y=!0}catch(e){}let R=(0,i.oQ)(p,{relative:u}),S=B(p,{replace:f,state:d,target:m,preventScrollReset:v,relative:u,unstable_viewTransition:h});return o.createElement("a",s({},w,{href:n||R,onClick:y||l?r:function(e){r&&r(e),e.defaultPrevented||S(e)},ref:t,target:m}))}));const O=o.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:r=!1,className:a="",end:u=!1,style:l,to:f,unstable_viewTransition:d,children:m}=e,p=c(e,g),v=(0,i.WU)(f,{relative:p.relative}),h=(0,i.TH)(),w=o.useContext(i.FR),{navigator:b}=o.useContext(i.Us),y=null!=w&&oe(v)&&!0===d,R=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,S=h.pathname,E=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(S=S.toLowerCase(),E=E?E.toLowerCase():null,R=R.toLowerCase());let T,L=S===R||!u&&S.startsWith(R)&&"/"===S.charAt(R.length),C=null!=E&&(E===R||!u&&E.startsWith(R)&&"/"===E.charAt(R.length)),_={isActive:L,isPending:C,isTransitioning:y},x=L?n:void 0;T="function"==typeof a?a(_):[a,L?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let U="function"==typeof l?l(_):l;return o.createElement(N,s({},p,{"aria-current":x,className:T,ref:t,style:U,to:f,unstable_viewTransition:d}),"function"==typeof m?m(_):m)}));const H=o.forwardRef(((e,t)=>{let n=X();return o.createElement(J,s({},e,{submit:n,ref:t}))}));const J=o.forwardRef(((e,t)=>{let{reloadDocument:n,replace:r,state:i,method:a=l,action:u,onSubmit:f,submit:d,relative:m,preventScrollReset:p,unstable_viewTransition:v}=e,h=c(e,y),w="get"===a.toLowerCase()?"get":"post",b=Y(u,{relative:m});return o.createElement("form",s({ref:t,method:w,action:b,onSubmit:n?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=(null==t?void 0:t.getAttribute("formmethod"))||a;d(t||e.currentTarget,{method:n,replace:r,state:i,relative:m,preventScrollReset:p,unstable_viewTransition:v})}},h))}));function V(e){let{getKey:t,storageKey:n}=e;return te({getKey:t,storageKey:n}),null}var W,K;function j(e){let t=o.useContext(i.w3);return t||(0,a.J0)(!1),t}function M(e){let t=o.useContext(i.FR);return t||(0,a.J0)(!1),t}function B(e,t){let{target:n,replace:r,state:u,preventScrollReset:s,relative:c,unstable_viewTransition:l}=void 0===t?{}:t,f=(0,i.s0)(),d=(0,i.TH)(),m=(0,i.WU)(e,{relative:c});return o.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:(0,a.Ep)(d)===(0,a.Ep)(m);f(e,{replace:n,state:u,preventScrollReset:s,relative:c,unstable_viewTransition:l})}}),[d,f,m,r,u,n,e,s,c,l])}function I(e){let t=o.useRef(m(e)),n=o.useRef(!1),r=(0,i.TH)(),a=o.useMemo((()=>function(e,t){let n=m(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(r.search,n.current?null:t.current)),[r.search]),u=(0,i.s0)(),s=o.useCallback(((e,t)=>{const r=m("function"==typeof e?e(a):e);n.current=!0,u("?"+r,t)}),[u,a]);return[a,s]}function Z(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}function X(){let{router:e}=j(W.UseSubmit),{basename:t}=o.useContext(i.Us),n=(0,i.Yi)();return o.useCallback((function(r,o){void 0===o&&(o={}),Z();let{action:i,method:a,encType:u,formData:s,body:c}=w(r,t);e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:c,formMethod:o.method||a,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,unstable_viewTransition:o.unstable_viewTransition})}),[e,t,n])}function Q(e,t){let{router:n}=j(W.UseSubmitFetcher),{basename:r}=o.useContext(i.Us);return o.useCallback((function(o,i){void 0===i&&(i={}),Z();let{action:u,method:s,encType:c,formData:l,body:f}=w(o,r);null==t&&(0,a.J0)(!1),n.fetch(e,t,i.action||u,{preventScrollReset:i.preventScrollReset,formData:l,body:f,formMethod:i.method||s,formEncType:i.encType||c})}),[n,r,e,t])}function Y(e,t){let{relative:n}=void 0===t?{}:t,{basename:r}=o.useContext(i.Us),u=o.useContext(i.pW);u||(0,a.J0)(!1);let[c]=u.matches.slice(-1),l=s({},(0,i.WU)(e||".",{relative:n})),f=(0,i.TH)();if(null==e&&(l.search=f.search,c.route.index)){let e=new URLSearchParams(l.search);e.delete("index"),l.search=e.toString()?"?"+e.toString():""}return e&&"."!==e||!c.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),"/"!==r&&(l.pathname="/"===l.pathname?r:(0,a.RQ)([r,l.pathname])),(0,a.Ep)(l)}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(W||(W={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(K||(K={}));let z=0;function q(){var e;let{router:t}=j(W.UseFetcher),n=o.useContext(i.pW);n||(0,a.J0)(!1);let r=null==(e=n.matches[n.matches.length-1])?void 0:e.route.id;null==r&&(0,a.J0)(!1);let[u]=o.useState((()=>String(++z))),[c]=o.useState((()=>(r||(0,a.J0)(!1),function(e,t){return o.forwardRef(((n,r)=>{let i=Q(e,t);return o.createElement(J,s({},n,{ref:r,submit:i}))}))}(u,r)))),[l]=o.useState((()=>e=>{t||(0,a.J0)(!1),r||(0,a.J0)(!1),t.fetch(u,r,e)})),f=Q(u,r),d=t.getFetcher(u),m=o.useMemo((()=>s({Form:c,submit:f,load:l},d)),[d,c,f,l]);return o.useEffect((()=>()=>{t&&t.deleteFetcher(u)}),[t,u]),m}function G(){return[...M(K.UseFetchers).fetchers.values()]}const $="react-router-scroll-positions";let ee={};function te(e){let{getKey:t,storageKey:n}=void 0===e?{}:e,{router:r}=j(W.UseScrollRestoration),{restoreScrollPosition:u,preventScrollReset:c}=M(K.UseScrollRestoration),{basename:l}=o.useContext(i.Us),f=(0,i.TH)(),d=(0,i.SN)(),m=(0,i.HJ)();o.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),function(e,t){let{capture:n}=t||{};o.useEffect((()=>{let t=null!=n?{capture:n}:void 0;return window.addEventListener("pagehide",e,t),()=>{window.removeEventListener("pagehide",e,t)}}),[e,n])}(o.useCallback((()=>{if("idle"===m.state){let e=(t?t(f,d):null)||f.key;ee[e]=window.scrollY}try{sessionStorage.setItem(n||$,JSON.stringify(ee))}catch(e){}window.history.scrollRestoration="auto"}),[n,t,m.state,f,d])),"undefined"!=typeof document&&(o.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(n||$);e&&(ee=JSON.parse(e))}catch(e){}}),[n]),o.useLayoutEffect((()=>{let e=t&&"/"!==l?(e,n)=>t(s({},e,{pathname:(0,a.Zn)(e.pathname,l)||e.pathname}),n):t,n=null==r?void 0:r.enableScrollRestoration(ee,(()=>window.scrollY),e);return()=>n&&n()}),[r,l,t]),o.useLayoutEffect((()=>{if(!1!==u)if("number"!=typeof u){if(f.hash){let e=document.getElementById(decodeURIComponent(f.hash.slice(1)));if(e)return void e.scrollIntoView()}!0!==c&&window.scrollTo(0,0)}else window.scrollTo(0,u)}),[f,u,c]))}function ne(e,t){let{capture:n}=t||{};o.useEffect((()=>{let t=null!=n?{capture:n}:void 0;return window.addEventListener("beforeunload",e,t),()=>{window.removeEventListener("beforeunload",e,t)}}),[e,n])}function re(e){let{when:t,message:n}=e,r=(0,i.aQ)(t);o.useEffect((()=>{if("blocked"===r.state){window.confirm(n)?setTimeout(r.proceed,0):r.reset()}}),[r,n]),o.useEffect((()=>{"blocked"!==r.state||t||r.reset()}),[r,t])}function oe(e,t){void 0===t&&(t={});let n=o.useContext(L);null==n&&(0,a.J0)(!1);let{basename:r}=j(W.useViewTransitionState),u=(0,i.WU)(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=(0,a.Zn)(n.currentLocation.pathname,r)||n.currentLocation.pathname,c=(0,a.Zn)(n.nextLocation.pathname,r)||n.nextLocation.pathname;return null!=(0,a.LX)(u.pathname,c)||null!=(0,a.LX)(u.pathname,s)}}}]);