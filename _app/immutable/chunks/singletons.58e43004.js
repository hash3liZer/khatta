import{w as u}from"./index.f6403797.js";var p;const k=((p=globalThis.__sveltekit_ogurjr)==null?void 0:p.base)??"";var g;const m=((g=globalThis.__sveltekit_ogurjr)==null?void 0:g.assets)??k,w="1688236749945",T="sveltekit:snapshot",y="sveltekit:scroll",I="sveltekit:index",f={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function c(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const d={...f,"":f.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function U(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!a||A(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:r,target:a,download:l}}function j(e){let t=null,n=null,a=null,r=null,l=null,o=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=c(s,"preload-code")),r===null&&(r=c(s,"preload-data")),t===null&&(t=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),l===null&&(l=c(s,"reload")),o===null&&(o=c(s,"replacestate")),s=h(s);function i(v){switch(v){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:d[a??"off"],preload_data:d[r??"off"],keep_focus:i(t),noscroll:i(n),reload:i(l),replace_state:i(o)}}function _(e){const t=u(e);let n=!0;function a(){n=!0,t.update(o=>o)}function r(o){n=!1,t.set(o)}function l(o){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&o(s=i)})}return{notify:a,set:r,subscribe:l}}function E(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${m}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const o=(await r.json()).version!==w;return o&&(e(!0),clearTimeout(n)),o}catch{return!1}}return{subscribe:t,check:a}}function A(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let b;function L(e){b=e.client}function N(e){return(...t)=>b[e](...t)}const P={url:_({}),page:_({}),navigating:u(null),updated:E()};export{I,f as P,y as S,T as a,U as b,j as c,x as d,k as e,O as f,S as g,L as h,A as i,N as j,P as s};
