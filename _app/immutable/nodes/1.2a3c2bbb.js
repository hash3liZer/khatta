import{S as x,i as S,s as g,k as u,q as h,a as k,l as d,m as v,r as E,h as m,c as y,b as _,D as b,u as $,E as q,R as C}from"../chunks/index.725d15e1.js";import{p as D}from"../chunks/stores.cc4dea00.js";function H(l){var f;let a,t=l[0].status+"",r,o,n,p=((f=l[0].error)==null?void 0:f.message)+"",c;return{c(){a=u("h1"),r=h(t),o=k(),n=u("p"),c=h(p)},l(e){a=d(e,"H1",{});var s=v(a);r=E(s,t),s.forEach(m),o=y(e),n=d(e,"P",{});var i=v(n);c=E(i,p),i.forEach(m)},m(e,s){_(e,a,s),b(a,r),_(e,o,s),_(e,n,s),b(n,c)},p(e,[s]){var i;s&1&&t!==(t=e[0].status+"")&&$(r,t),s&1&&p!==(p=((i=e[0].error)==null?void 0:i.message)+"")&&$(c,p)},i:q,o:q,d(e){e&&m(a),e&&m(o),e&&m(n)}}}function P(l,a,t){let r;return C(l,D,o=>t(0,r=o)),[r]}class w extends x{constructor(a){super(),S(this,a,P,H,g,{})}}export{w as component};