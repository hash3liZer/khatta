import{a0 as Ce,S as ee,i as te,s as le,k as b,l as p,m as y,h as m,n as _,I as be,b as C,a1 as Ee,g as k,v as x,f as $,d as w,F as Ie,a as H,c as j,p as U,D as g,e as P,a2 as pe,N as ve,O as ye,P as ke,Q as we,a3 as We,a4 as De,a5 as Me,L as Ve,M as Ae,a6 as Ne,a7 as He,E as M,q as z,r as B,y as X,z as J,A as Y,B as Z,V as je,w as ae,a8 as se,a9 as re}from"../chunks/index.54014205.js";import{c as Fe,a as oe,t as Pe}from"../chunks/title.9992e2d6.js";import{F as Se,H as qe}from"../chunks/footer.d3481229.js";const ze=[{id:"mantyke",rel:"friend",name:"塔塔",title:"小球飞鱼",link:"https://mantyke.icu/",descr:"我们会一起遇见鲸鱼吗？",avatar:"https://mantyke.icu/images/logo.png"},{id:"middleofnowhere",rel:"friend",name:"陆博学",title:"Middle of No where",link:"https://notes.midofnowhere.link/",descr:"Welcome to the middle of nowhere. That's right, absolute nowhere.",avatar:"https://github.com/yue2/picbed/blob/main/cutepic.png?raw=true"},{id:"chestnut",rel:"friend",name:"栗",title:"野生栗子🌰",link:"https://blog.chestnut.monster/"},{id:"summerblue",rel:"friend",name:"夏诤",title:"SummberBlue",link:"https://blog.summerblue.space/",descr:"早睡早起身体好"},{id:"loikin",rel:"friend",name:"Loikin",title:"此生未命名",link:"https://blog.loikein.one/",descr:"用爱和理性对抗荒谬",avatar:"/assets/loikin.png"},{id:"sharktale",rel:"friend",name:"鲨",title:"一只脆脆鲨",link:"https://woods.sharktale.xyz/",descr:"遇见一只脆脆鲨",avatar:"https://s2.loli.net/2022/03/30/xwOzn9G8TIqFPvR.jpg"},{id:"kwaa",rel:"friend",name:"藍+85CD",title:"./kwaa.dev",link:"https://kwaa.dev",descr:"[DATA EXPUNGED]",avatar:"https://kwaa.dev/assets/any@512.webp"},{id:"debula",rel:"friend",title:"秘密花园",name:"本宝宝",link:"https://blog.debula.ml",descr:"月亮一直跟着我走，它迷路了吗？",avatar:"https://blog.debula.ml/usr/uploads/violet.jpg"}];function Be(s,{from:e,to:t},l={}){const f=getComputedStyle(s),c=f.transform==="none"?"":f.transform,[u,n]=f.transformOrigin.split(" ").map(parseFloat),i=e.left+e.width*u/t.width-(t.left+u),o=e.top+e.height*n/t.height-(t.top+n),{delay:a=0,duration:r=E=>Math.sqrt(E)*120,easing:h=Fe}=l;return{delay:a,duration:Ce(r)?r(Math.sqrt(i*i+o*o)):r,easing:h,css:(E,v)=>{const I=v*i,S=v*o,V=E+v*e.width/t.width,F=E+v*e.height/t.height;return`transform: ${c} translate(${I}px, ${S}px) scale(${V}, ${F});`}}}function ce(s,e,t){const l=s.slice();return l[18]=e[t],l}function fe(s,e,t){const l=s.slice();return l[21]=e[t][0],l[22]=e[t][1],l}const Te=s=>({idx:s&1024,item:s&1024}),ue=s=>({idx:s[22],item:s[21]});function de(s,e,t){const l=s.slice();return l[21]=e[t][0],l[22]=e[t][1],l}const Ke=s=>({idx:s&1024,item:s&1024}),he=s=>({idx:s[22],item:s[21]});function Oe(s){let e=[],t=new Map,l,f,c=s[18];const u=n=>n[8](n[21]);for(let n=0;n<c.length;n+=1){let i=fe(s,c,n),o=u(i);t.set(o,e[n]=_e(o,i))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();l=P()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);l=P()},m(n,i){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,i);C(n,l,i),f=!0},p(n,i){i&34048&&(c=n[18],x(),e=pe(e,i,u,1,n,c,t,l.parentNode,Ne,_e,l,fe),$())},i(n){if(!f){for(let i=0;i<c.length;i+=1)k(e[i]);f=!0}},o(n){for(let i=0;i<e.length;i+=1)w(e[i]);f=!1},d(n){for(let i=0;i<e.length;i+=1)e[i].d(n);n&&m(l)}}}function Ge(s){let e=[],t=new Map,l,f,c=s[18];const u=n=>n[8](n[21]);for(let n=0;n<c.length;n+=1){let i=de(s,c,n),o=u(i);t.set(o,e[n]=me(o,i))}return{c(){for(let n=0;n<e.length;n+=1)e[n].c();l=P()},l(n){for(let i=0;i<e.length;i+=1)e[i].l(n);l=P()},m(n,i){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(n,i);C(n,l,i),f=!0},p(n,i){if(i&34112){c=n[18],x();for(let o=0;o<e.length;o+=1)e[o].r();e=pe(e,i,u,1,n,c,t,l.parentNode,He,me,l,de);for(let o=0;o<e.length;o+=1)e[o].a();$()}},i(n){if(!f){for(let i=0;i<c.length;i+=1)k(e[i]);f=!0}},o(n){for(let i=0;i<e.length;i+=1)w(e[i]);f=!1},d(n){for(let i=0;i<e.length;i+=1)e[i].d(n);n&&m(l)}}}function _e(s,e){let t,l;const f=e[16].default,c=ve(f,e,e[15],ue);return{key:s,first:null,c(){t=P(),c&&c.c(),this.h()},l(u){t=P(),c&&c.l(u),this.h()},h(){this.first=t},m(u,n){C(u,t,n),c&&c.m(u,n),l=!0},p(u,n){e=u,c&&c.p&&(!l||n&33792)&&ye(c,f,e,e[15],l?we(f,e[15],n,Te):ke(e[15]),ue)},i(u){l||(k(c,u),l=!0)},o(u){w(c,u),l=!1},d(u){u&&m(t),c&&c.d(u)}}}function me(s,e){let t,l,f,c,u,n=M,i;const o=e[16].default,a=ve(o,e,e[15],he);return{key:s,first:null,c(){t=b("div"),a&&a.c(),l=H(),this.h()},l(r){t=p(r,"DIV",{class:!0});var h=y(t);a&&a.l(h),l=j(h),h.forEach(m),this.h()},h(){_(t,"class","svelte-b2jtby"),this.first=t},m(r,h){C(r,t,h),a&&a.m(t,null),g(t,l),i=!0},p(r,h){e=r,a&&a.p&&(!i||h&33792)&&ye(a,o,e,e[15],i?we(o,e[15],h,Ke):ke(e[15]),he)},r(){u=t.getBoundingClientRect()},f(){We(t),n(),De(t,u)},a(){n(),n=Me(t,u,Be,{duration:e[6]})},i(r){i||(k(a,r),r&&be(()=>{i&&(c&&c.end(1),f=Ve(t,oe,{delay:100,duration:e[6]}),f.start())}),i=!0)},o(r){w(a,r),f&&f.invalidate(),r&&(c=Ae(t,oe,{delay:0,duration:e[6]})),i=!1},d(r){r&&m(t),a&&a.d(r),r&&c&&c.end()}}}function ge(s){let e,t,l,f,c,u;const n=[Ge,Oe],i=[];function o(a,r){return a[4]?0:1}return t=o(s),l=i[t]=n[t](s),{c(){e=b("div"),l.c(),f=H(),this.h()},l(a){e=p(a,"DIV",{class:!0,style:!0});var r=y(e);l.l(r),f=j(r),r.forEach(m),this.h()},h(){_(e,"class",c="col "+s[7]+" svelte-b2jtby"),U(e,"gap",s[3]+"px"),U(e,"max-width",s[2]+"px")},m(a,r){C(a,e,r),i[t].m(e,null),g(e,f),u=!0},p(a,r){let h=t;t=o(a),t===h?i[t].p(a,r):(x(),w(i[h],1,1,()=>{i[h]=null}),$(),l=i[t],l?l.p(a,r):(l=i[t]=n[t](a),l.c()),k(l,1),l.m(e,f)),(!u||r&128&&c!==(c="col "+a[7]+" svelte-b2jtby"))&&_(e,"class",c),(!u||r&8)&&U(e,"gap",a[3]+"px"),(!u||r&4)&&U(e,"max-width",a[2]+"px")},i(a){u||(k(l),u=!0)},o(a){w(l),u=!1},d(a){a&&m(e),i[t].d()}}}function Le(s){let e,t,l,f,c,u=s[10],n=[];for(let o=0;o<u.length;o+=1)n[o]=ge(ce(s,u,o));const i=o=>w(n[o],1,1,()=>{n[o]=null});return{c(){e=b("div");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=p(o,"DIV",{class:!0,style:!0});var a=y(e);for(let r=0;r<n.length;r+=1)n[r].l(a);a.forEach(m),this.h()},h(){_(e,"class",t="masonry "+s[9]+" svelte-b2jtby"),_(e,"style",l="gap: "+s[3]+"px; "+s[5]),be(()=>s[17].call(e))},m(o,a){C(o,e,a);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);f=Ee(e,s[17].bind(e)),c=!0},p(o,[a]){if(a&34012){u=o[10];let r;for(r=0;r<u.length;r+=1){const h=ce(o,u,r);n[r]?(n[r].p(h,a),k(n[r],1)):(n[r]=ge(h),n[r].c(),k(n[r],1),n[r].m(e,null))}for(x(),r=u.length;r<n.length;r+=1)i(r);$()}(!c||a&512&&t!==(t="masonry "+o[9]+" svelte-b2jtby"))&&_(e,"class",t),(!c||a&40&&l!==(l="gap: "+o[3]+"px; "+o[5]))&&_(e,"style",l)},i(o){if(!c){for(let a=0;a<u.length;a+=1)k(n[a]);c=!0}},o(o){n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)w(n[a]);c=!1},d(o){o&&m(e),Ie(n,o),f()}}}function Re(s,e,t){let l,f,{$$slots:c={},$$scope:u}=e,{items:n}=e,{minColWidth:i=330}=e,{maxColWidth:o=500}=e,{gap:a=20}=e,{masonryWidth:r=0}=e,{masonryHeight:h=0}=e,{animate:E=!0}=e,{style:v=""}=e,{duration:I=200}=e,{columnClass:S=""}=e,{idKey:V="id"}=e,{getId:F=d=>typeof d=="string"||typeof d=="number"?d:d[V]}=e,{class:A=""}=e;function O(){r=this.clientWidth,h=this.clientHeight,t(0,r),t(1,h)}return s.$$set=d=>{"items"in d&&t(11,n=d.items),"minColWidth"in d&&t(12,i=d.minColWidth),"maxColWidth"in d&&t(2,o=d.maxColWidth),"gap"in d&&t(3,a=d.gap),"masonryWidth"in d&&t(0,r=d.masonryWidth),"masonryHeight"in d&&t(1,h=d.masonryHeight),"animate"in d&&t(4,E=d.animate),"style"in d&&t(5,v=d.style),"duration"in d&&t(6,I=d.duration),"columnClass"in d&&t(7,S=d.columnClass),"idKey"in d&&t(13,V=d.idKey),"getId"in d&&t(8,F=d.getId),"class"in d&&t(9,A=d.class),"$$scope"in d&&t(15,u=d.$$scope)},s.$$.update=()=>{s.$$.dirty&6153&&t(14,l=Math.min(n.length,Math.floor(r/(i+a))||1)),s.$$.dirty&18432&&t(10,f=n.reduce((d,T,G)=>(d[G%d.length].push([T,G]),d),Array(l).fill(null).map(()=>[])))},[r,h,o,a,E,v,I,S,F,A,f,n,i,V,l,u,c,O]}class Qe extends ee{constructor(e){super(),te(this,e,Re,Le,le,{items:11,minColWidth:12,maxColWidth:2,gap:3,masonryWidth:0,masonryHeight:1,animate:4,style:5,duration:6,columnClass:7,idKey:13,getId:8,class:9})}}function Ue(s){let e,t,l=(s[0].name??"")+"",f,c,u,n,i=(s[0].title??"")+"",o,a,r,h,E,v,I,S=(s[0].name??"")+"",V,F,A,O=s[0].title+"",d,T;function G(W,D){return W[0].avatar?Ze:Ye}let K=G(s)(s),N=s[0].descr&&xe(s);return{c(){e=b("a"),t=b("div"),f=z(l),c=H(),u=b("br"),n=H(),o=z(i),a=H(),r=b("div"),h=b("div"),K.c(),E=H(),v=b("div"),I=b("span"),V=z(S),F=H(),A=b("span"),d=z(O),T=H(),N&&N.c(),this.h()},l(W){e=p(W,"A",{id:!0,rel:!0,href:!0,class:!0});var D=y(e);t=p(D,"DIV",{class:!0});var q=y(t);f=B(q,l),c=j(q),u=p(q,"BR",{}),n=j(q),o=B(q,i),q.forEach(m),a=j(D),r=p(D,"DIV",{class:!0});var L=y(r);h=p(L,"DIV",{class:!0});var R=y(h);K.l(R),E=j(R),v=p(R,"DIV",{class:!0});var Q=y(v);I=p(Q,"SPAN",{class:!0});var ne=y(I);V=B(ne,S),ne.forEach(m),F=j(Q),A=p(Q,"SPAN",{class:!0});var ie=y(A);d=B(ie,O),ie.forEach(m),Q.forEach(m),R.forEach(m),T=j(L),N&&N.l(L),L.forEach(m),D.forEach(m),this.h()},h(){_(t,"class","absolute text-4xl font-bold opacity-5 rotate-6 leading-tight top-4"),_(I,"class","text-right p-name"),_(A,"class","opacity-50 text-right"),_(v,"class","card-title flex-col gap-0 flex-1 items-end"),_(h,"class","flex items-center gap-4"),_(r,"class","card-body p-4"),_(e,"id",s[0].id),_(e,"rel",s[0].rel),_(e,"href",s[0].link),_(e,"class","card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow h-card u-url")},m(W,D){C(W,e,D),g(e,t),g(t,f),g(t,c),g(t,u),g(t,n),g(t,o),g(e,a),g(e,r),g(r,h),K.m(h,null),g(h,E),g(h,v),g(v,I),g(I,V),g(v,F),g(v,A),g(A,d),g(r,T),N&&N.m(r,null)},p(W,D){K.p(W,D),W[0].descr&&N.p(W,D)},i:M,o:M,d(W){W&&m(e),K.d(),N&&N.d()}}}function Xe(s){let e,t=s[0].html+"";return{c(){e=b("a"),this.h()},l(l){e=p(l,"A",{id:!0,rel:!0,href:!0,class:!0});var f=y(e);f.forEach(m),this.h()},h(){_(e,"id",s[0].id),_(e,"rel",s[0].rel),_(e,"href",s[0].link),_(e,"class","h-card u-url")},m(l,f){C(l,e,f),e.innerHTML=t},p:M,i:M,o:M,d(l){l&&m(e)}}}function Je(s){let e,t;return e=new Se({props:{rounded:!0,class:"p-4 md:p-8"}}),{c(){X(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,f){Y(e,l,f),t=!0},p:M,i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function Ye(s){let e,t,l,f=(s[0].name??s[0].title).charAt(0)+"",c;return{c(){e=b("div"),t=b("div"),l=b("span"),c=z(f),this.h()},l(u){e=p(u,"DIV",{class:!0});var n=y(e);t=p(n,"DIV",{class:!0});var i=y(t);l=p(i,"SPAN",{class:!0});var o=y(l);c=B(o,f),o.forEach(m),i.forEach(m),n.forEach(m),this.h()},h(){var u,n;_(l,"class","text-3xl"),_(t,"class",(((u=s[0].class)==null?void 0:u.img)??"bg-neutral-focus text-neutral-content shadow-inner rounded-xl")+" w-16"),_(e,"class","avatar "+((n=s[0].class)==null?void 0:n.avatar)+" placeholder mb-auto")},m(u,n){C(u,e,n),g(e,t),g(t,l),g(l,c)},p:M,d(u){u&&m(e)}}}function Ze(s){let e,t,l;return{c(){e=b("div"),t=b("img"),this.h()},l(f){e=p(f,"DIV",{class:!0});var c=y(e);t=p(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(m),this.h()},h(){var f,c;_(t,"class",(((f=s[0].class)==null?void 0:f.img)??"rounded-xl")+" u-photo"),je(t.src,l=s[0].avatar)||_(t,"src",l),_(t,"alt",s[0].title),_(e,"class","avatar "+((c=s[0].class)==null?void 0:c.avatar)+" shrink-0 w-16 mb-auto")},m(f,c){C(f,e,c),g(e,t)},p:M,d(f){f&&m(e)}}}function xe(s){let e,t=s[0].descr+"",l;return{c(){e=b("div"),l=z(t),this.h()},l(f){e=p(f,"DIV",{class:!0});var c=y(e);l=B(c,t),c.forEach(m),this.h()},h(){_(e,"class","prose opacity-70 p-note")},m(f,c){C(f,e,c),g(e,l)},p:M,d(f){f&&m(e)}}}function $e(s){let e,t,l,f;const c=[Je,Xe,Ue],u=[];function n(i,o){return i[0].id==="footer"?0:i[0].html?1:2}return e=n(s),t=u[e]=c[e](s),{c(){t.c(),l=P()},l(i){t.l(i),l=P()},m(i,o){u[e].m(i,o),C(i,l,o),f=!0},p(i,[o]){t.p(i,o)},i(i){f||(k(t),f=!0)},o(i){w(t),f=!1},d(i){u[e].d(i),i&&m(l)}}}function et(s,e,t){let{item:l}=e,f=l;return s.$$set=c=>{"item"in c&&t(1,l=c.item)},[f,l]}class tt extends ee{constructor(e){super(),te(this,e,et,$e,le,{item:1})}}function lt(s){let e,t;return e=new tt({props:{item:s[7]}}),{c(){X(e.$$.fragment)},l(l){J(e.$$.fragment,l)},m(l,f){Y(e,l,f),t=!0},p(l,f){const c={};f&128&&(c.item=l[7]),e.$set(c)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function nt(s){let e,t,l,f,c,u;e=new qe({props:{page:{title:"Friends",path:"/friends"}}});function n(a){s[3](a)}function i(a){s[4](a)}let o={items:s[2],minColWidth:384,maxColWidth:384,gap:32,class:"mx-4 sm:mx-8 md:my-4 lg:mx-16 lg:my-8 xl:mx-32 xl:my-16",$$slots:{default:[lt,({item:a})=>({7:a}),({item:a})=>a?128:0]},$$scope:{ctx:s}};return s[0]!==void 0&&(o.width=s[0]),s[1]!==void 0&&(o.height=s[1]),l=new Qe({props:o}),ae.push(()=>se(l,"width",n)),ae.push(()=>se(l,"height",i)),{c(){X(e.$$.fragment),t=H(),X(l.$$.fragment)},l(a){J(e.$$.fragment,a),t=j(a),J(l.$$.fragment,a)},m(a,r){Y(e,a,r),C(a,t,r),Y(l,a,r),u=!0},p(a,[r]){const h={};r&384&&(h.$$scope={dirty:r,ctx:a}),!f&&r&1&&(f=!0,h.width=a[0],re(()=>f=!1)),!c&&r&2&&(c=!0,h.height=a[1],re(()=>c=!1)),l.$set(h)},i(a){u||(k(e.$$.fragment,a),k(l.$$.fragment,a),u=!0)},o(a){w(e.$$.fragment,a),w(l.$$.fragment,a),u=!1},d(a){Z(e,a),a&&m(t),Z(l,a)}}}function it(s,e,t){const l=Math.random();let c=[...((a,r=0,h=a.length)=>{for(;h;)r=l*h--|0,[a[h],a[r]]=[a[r],a[h]];return a})(ze),{id:"footer"}],u,n;Pe.set("");function i(a){u=a,t(0,u)}function o(a){n=a,t(1,n)}return[u,n,c,i,o]}class ct extends ee{constructor(e){super(),te(this,e,it,nt,le,{})}}export{ct as component};