import{S as Y1,i as J1,s as x1,k,q as Z,a as V,T as Q,l as E,m as b,r as D,h as n,c as M,U as W,n as f,b as x,D as h,E as R,F as b1,e as F1,V as W1,G as Y,y as h1,z as C1,A as _1,d as A,f as m1,g as H,I as n1,M as f1,B as p1,R as X1,o as e2,H as K1,u as y1,v as v1,L as u1}from"../chunks/index.54014205.js";import{t as t2,f as N}from"../chunks/title.9992e2d6.js";import{p as l2}from"../chunks/stores.7555bf5d.js";import{j as r2}from"../chunks/singletons.9506628e.js";import{a as a2,t as s2}from"../chunks/posts.15a47f46.js";import{H as i2,F as o2}from"../chunks/footer.c33ffc90.js";import{P as n2}from"../chunks/post_card.53437310.js";import{s as P}from"../chunks/icon.ef698b28.js";const f2=r2("goto");function P1(s,e,l){const t=s.slice();return t[0]=e[l].text,t[1]=e[l].icon,t[2]=e[l].link,t[3]=e[l].rel,t}function u2(s){let e,l;return{c(){e=k("img"),this.h()},l(t){e=E(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(e,"class","u-photo rounded-full shadow-xl w-32 h-32 hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"),W1(e.src,l=P.author.avatar)||f(e,"src",l),f(e,"alt",P.author.name)},m(t,r){x(t,e,r)},p:R,d(t){t&&n(e)}}}function c2(s){let e,l=P.author.status+"",t;return{c(){e=k("div"),t=Z(l),this.h()},l(r){e=E(r,"DIV",{class:!0});var o=b(e);t=D(o,l),o.forEach(n),this.h()},h(){f(e,"class","heart absolute rounded-full w-10 h-10 bottom-0 right-0 bg-base-100 shadow-xl text-xl text-center py-1.5 svelte-vn9h8n")},m(r,o){x(r,e,o),h(e,t)},p:R,d(r){r&&n(e)}}}function d2(s){let e,l=P.author.metadata,t=[];for(let r=0;r<l.length;r+=1)t[r]=A1(P1(s,l,r));return{c(){e=k("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var o=b(e);for(let a=0;a<t.length;a+=1)t[a].l(o);o.forEach(n),this.h()},h(){f(e,"class","flex gap-1 flex-wrap justify-center")},m(r,o){x(r,e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(r,o){if(o&0){l=P.author.metadata;let a;for(a=0;a<l.length;a+=1){const i=P1(r,l,a);t[a]?t[a].p(i,o):(t[a]=A1(i),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(r){r&&n(e),b1(t,r)}}}function h2(s){let e,l,t,r=s[1]&&_2(s),o=s[0]&&m2(s);return{c(){e=k("button"),r&&r.c(),l=V(),o&&o.c(),t=V(),this.h()},l(a){e=E(a,"BUTTON",{class:!0});var i=b(e);r&&r.l(i),l=M(i),o&&o.l(i),t=M(i),i.forEach(n),this.h()},h(){f(e,"class","btn btn-sm btn-ghost normal-case gap-2"),Y(e,"btn-square",!s[0])},m(a,i){x(a,e,i),r&&r.m(e,null),h(e,l),o&&o.m(e,null),h(e,t)},p(a,i){a[1]&&r.p(a,i),a[0]&&o.p(a,i)},d(a){a&&n(e),r&&r.d(),o&&o.d()}}}function C2(s){let e,l,t,r=s[1]&&p2(s),o=s[0]&&v2(s);return{c(){e=k("a"),r&&r.c(),l=V(),o&&o.c(),t=V(),this.h()},l(a){e=E(a,"A",{href:!0,rel:!0,class:!0,target:!0});var i=b(e);r&&r.l(i),l=M(i),o&&o.l(i),t=M(i),i.forEach(n),this.h()},h(){f(e,"href",s[2]),f(e,"rel",s[3]??"me noopener  noreferrer external"),f(e,"class","btn btn-sm btn-ghost normal-case gap-2 u-url"),f(e,"target","_blank"),Y(e,"btn-square",!s[0])},m(a,i){x(a,e,i),r&&r.m(e,null),h(e,l),o&&o.m(e,null),h(e,t)},p(a,i){a[1]&&r.p(a,i),a[0]&&o.p(a,i)},d(a){a&&n(e),r&&r.d(),o&&o.d()}}}function _2(s){let e;return{c(){e=k("span"),this.h()},l(l){e=E(l,"SPAN",{class:!0}),b(e).forEach(n),this.h()},h(){f(e,"class",s[1]+" !w-5 !h-5 svelte-vn9h8n")},m(l,t){x(l,e,t)},p:R,d(l){l&&n(e)}}}function m2(s){let e=s[0]+"",l;return{c(){l=Z(e)},l(t){l=D(t,e)},m(t,r){x(t,l,r)},p:R,d(t){t&&n(l)}}}function p2(s){let e;return{c(){e=k("span"),this.h()},l(l){e=E(l,"SPAN",{class:!0}),b(e).forEach(n),this.h()},h(){f(e,"class",s[1]+" !w-5 !h-5 svelte-vn9h8n")},m(l,t){x(l,e,t)},p:R,d(l){l&&n(e)}}}function v2(s){let e=s[0]+"",l;return{c(){l=Z(e)},l(t){l=D(t,e)},m(t,r){x(t,l,r)},p:R,d(t){t&&n(l)}}}function A1(s){let e;function l(o,a){return o[2]?C2:h2}let r=l(s)(s);return{c(){r.c(),e=F1()},l(o){r.l(o),e=F1()},m(o,a){r.m(o,a),x(o,e,a)},p(o,a){r.p(o,a)},d(o){r.d(o),o&&n(e)}}}function b2(s){let e,l,t,r=P.author.name+"",o,a,i,_,p,d,c,w=P.author.name+"",g,$,m,v=P.author.bio+"",u,L,C,y,B,T,I,X,e1,g1,t1,F,J,S,l1,c1,r1,K,w1,a1,s1,U=u2(),j=c2(),q=P.author.metadata&&d2(s);return{c(){e=k("div"),l=k("div"),t=k("a"),o=Z(r),a=V(),i=k("figure"),U&&U.c(),_=V(),j&&j.c(),p=V(),d=k("div"),c=k("h2"),g=Z(w),$=V(),m=k("p"),u=V(),L=k("label"),C=k("span"),y=Z(`
        Remote Follow`),B=V(),q&&q.c(),T=V(),I=k("div"),X=k("button"),e1=k("a"),g1=V(),t1=k("div"),F=Q("svg"),J=Q("g"),S=Q("path"),l1=Q("path"),c1=Q("defs"),r1=Q("clipPath"),K=Q("rect"),w1=V(),a1=k("button"),s1=k("a"),this.h()},l(z){e=E(z,"DIV",{class:!0});var O=b(e);l=E(O,"DIV",{class:!0});var i1=b(l);t=E(i1,"A",{href:!0,class:!0});var V1=b(t);o=D(V1,r),V1.forEach(n),a=M(i1),i=E(i1,"FIGURE",{class:!0});var d1=b(i);U&&U.l(d1),_=M(d1),j&&j.l(d1),d1.forEach(n),p=M(i1),d=E(i1,"DIV",{class:!0});var G=b(d);c=E(G,"H2",{class:!0});var M1=b(c);g=D(M1,w),M1.forEach(n),$=M(G),m=E(G,"P",{class:!0});var Q1=b(m);Q1.forEach(n),u=M(G),L=E(G,"LABEL",{for:!0,class:!0});var k1=b(L);C=E(k1,"SPAN",{class:!0}),b(C).forEach(n),y=D(k1,`
        Remote Follow`),k1.forEach(n),B=M(G),q&&q.l(G),G.forEach(n),i1.forEach(n),T=M(O),I=E(O,"DIV",{class:!0});var o1=b(I);X=E(o1,"BUTTON",{class:!0});var $1=b(X);e1=E($1,"A",{href:!0,class:!0}),b(e1).forEach(n),$1.forEach(n),g1=M(o1),t1=E(o1,"DIV",{class:!0});var Z1=b(t1);F=W(Z1,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,class:!0});var E1=b(F);J=W(E1,"g",{"clip-path":!0});var L1=b(J);S=W(L1,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0,"fill-opacity":!0}),b(S).forEach(n),l1=W(L1,"path",{d:!0,fill:!0}),b(l1).forEach(n),L1.forEach(n),c1=W(E1,"defs",{});var D1=b(c1);r1=W(D1,"clipPath",{id:!0});var H1=b(r1);K=W(H1,"rect",{width:!0,height:!0,fill:!0}),b(K).forEach(n),H1.forEach(n),D1.forEach(n),E1.forEach(n),Z1.forEach(n),w1=M(o1),a1=E(o1,"BUTTON",{class:!0});var I1=b(a1);s1=E(I1,"A",{href:!0,class:!0}),b(s1).forEach(n),I1.forEach(n),o1.forEach(n),O.forEach(n),this.h()},h(){f(t,"href",P.protocol+P.domain),f(t,"class","hidden u-url u-uid"),f(i,"class","relative mx-auto group"),f(c,"class","text-2xl font-bold mt-0 mb-2 p-name"),f(m,"class","opacity-75 p-note"),f(C,"class","i-material-symbols-group-add-rounded"),f(L,"for","remote-follow"),f(L,"class","btn btn-active btn-outline btn-xs modal-button w-fit mx-auto normal-case mt-4 gap-2"),f(d,"class","text-center flex flex-col gap-2"),f(l,"class","h-card flex flex-col gap-4 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10"),f(e1,"href","https://xn--sr8hvo.ws/%F0%9F%94%9D%F0%9F%9A%B9%F0%9F%9A%90/previous"),f(e1,"class","i-ic-round-keyboard-double-arrow-left h-5 w-5 p-0"),f(X,"class","btn btn-ghost btn-xs"),f(S,"fill-rule","evenodd"),f(S,"clip-rule","evenodd"),f(S,"d","M143.792 75.0454C143.674 74.9308 143.556 74.8162 143.423 74.7295L143.434 74.6909C126.901 59.7718 118.637 36.634 123.788 13.3255C123.814 13.2237 123.837 13.1113 123.864 13.0096C123.985 12.6909 124.057 12.3644 124.073 12.044C124.43 10.4008 123.406 8.78503 121.759 8.41712C120.98 8.24267 120.209 8.39249 119.58 8.76651C119.346 8.84031 119.116 8.92473 118.872 9.00188C96.2767 16.1367 74.075 14.4909 57.7844 -0.399755C57.1778 -1.24792 56.2027 -1.74608 55.1634 -1.74498C55.1093 -1.74885 55.055 -1.74735 55.0012 -1.74051C54.9308 -1.74163 54.8603 -1.74275 54.7932 -1.73325C54.772 -1.72654 54.7507 -1.71983 54.7261 -1.72374C54.5461 -1.70194 54.3694 -1.66952 54.1995 -1.61585L54.1782 -1.60914C54.0083 -1.55547 53.845 -1.48055 53.6851 -1.39501C53.5929 -1.3542 53.5179 -1.2955 53.429 -1.24406L53.3223 -1.1753C52.4461 -0.583226 51.9301 0.409158 51.9239 1.46249C47.1427 22.9837 29.9442 37.0709 7.39183 44.1923C7.15813 44.2661 6.92443 44.3399 6.67675 44.4064C5.94992 44.4724 5.23316 44.7922 4.69194 45.3719C4.21846 45.889 3.93858 46.5541 3.89984 47.2542C3.86109 47.9542 4.06589 48.6461 4.47942 49.2123C4.78748 49.7809 5.24872 50.2428 5.84639 50.5447C5.84639 50.5447 5.84974 50.5553 5.86037 50.552C23.4179 66.643 29.9478 90.2817 25.0374 111.949C24.7372 112.663 24.707 113.455 24.9351 114.177C24.9451 114.209 24.9446 114.244 24.9547 114.276C24.9714 114.329 24.9988 114.379 25.0262 114.429C25.057 114.489 25.0771 114.553 25.1078 114.613C25.4517 115.369 26.07 115.922 26.7985 116.194C26.865 116.22 26.921 116.249 26.9841 116.264C26.9981 116.271 27.0087 116.268 27.0227 116.275C27.8955 116.56 28.8521 116.445 29.6521 115.982L30.0239 115.865C52.5019 108.767 74.5649 110.269 90.8231 124.983C91.1791 125.65 91.7574 126.171 92.4577 126.456C93.158 126.741 93.936 126.771 94.6563 126.542C96.1647 126.065 97.0794 124.597 96.9028 123.075C101.77 101.679 118.99 87.7717 141.511 80.6604L141.808 80.5664C142.538 80.5111 143.205 80.2187 143.731 79.7373C144.217 79.3561 144.575 78.8358 144.759 78.2459C144.942 77.6559 144.941 77.0242 144.756 76.4348C144.595 75.9249 144.309 75.5011 143.945 75.1606C143.889 75.1315 143.84 75.0885 143.792 75.0454ZM75.826 56.1804L69.4258 35.912C76.1114 38.2167 83.0733 39.7683 90.1855 40.5014L75.826 56.1804ZM94.9886 44.8725C96.3566 51.9054 98.5314 58.7185 101.434 65.1733L80.6112 60.5688L94.9886 44.8725ZM69.6435 58.1327L48.8944 53.5399C54.2641 48.8807 59.0778 43.6171 63.24 37.8536L69.6435 58.1327ZM68.2462 64.4733L53.8794 80.1663C52.5523 73.2257 50.4267 66.4204 47.5111 59.8879L68.2462 64.4733ZM40.2614 58.2753C44.6161 66.8613 47.5203 76.1086 48.8564 85.6426L32.4495 103.568C33.9169 85.7223 28.5767 67.4789 16.6017 53.0479L40.2614 58.2753ZM73.0281 68.8511L79.388 88.9921C72.7135 86.6904 65.798 85.1585 58.7759 84.4262L73.0281 68.8511ZM79.2106 66.8989L99.8333 71.4614C94.5037 76.0966 89.7187 81.323 85.5705 87.0398L79.2106 66.8989ZM108.705 66.7792C104.308 58.1932 101.369 48.9357 100.008 39.3856L116.408 21.4736C114.863 40.2206 120.981 58.2649 132.484 72.0507L108.705 66.7792ZM111.486 17.2451L95.223 34.9972C85.5973 34.5022 76.1209 32.4097 67.1817 28.8053L61.2109 9.89659C75.6662 19.2337 93.2765 21.1377 111.486 17.2451ZM55.0317 11.8595L61.0026 30.7682C55.7597 38.8481 49.2108 46.0008 41.6234 51.9341L18.1007 46.7335C35.2365 39.4768 48.56 27.8048 55.0317 11.8595ZM37.554 107.599L53.7529 89.9024C63.409 90.4046 72.8175 92.5271 81.6254 96.0775L87.556 114.859C73.17 105.593 55.6682 103.737 37.554 107.599ZM93.7418 112.917L87.8112 94.1359C93.0405 86.1023 99.5603 78.9873 107.108 73.0779L130.518 78.2555C113.463 85.51 100.201 97.0809 93.7418 112.917Z"),f(S,"fill","#2E3440"),f(S,"fill-opacity","0.15"),f(l1,"d","M167.496 63.0721L145.992 132H136.776L119.976 80.8801C119.592 79.8561 119.256 78.6241 118.968 77.1841C118.616 78.6561 118.28 79.8881 117.96 80.8801L100.968 132H91.8L70.296 63.0721H78.84C79.736 63.0721 80.488 63.2961 81.096 63.7441C81.704 64.1601 82.104 64.7361 82.296 65.4721L95.88 111.6C96.136 112.496 96.36 113.472 96.552 114.528C96.776 115.584 97 116.688 97.224 117.84C97.448 116.688 97.672 115.584 97.896 114.528C98.152 113.472 98.44 112.496 98.76 111.6L114.312 65.4721C114.504 64.8321 114.904 64.2721 115.512 63.7921C116.152 63.3121 116.904 63.0721 117.768 63.0721H120.696C121.592 63.0721 122.328 63.2961 122.904 63.7441C123.48 64.1921 123.896 64.7681 124.152 65.4721L139.656 111.6C140.232 113.36 140.744 115.36 141.192 117.6C141.576 115.392 141.992 113.392 142.44 111.6L156.072 65.4721C156.232 64.8321 156.632 64.2721 157.272 63.7921C157.912 63.3121 158.664 63.0721 159.528 63.0721H167.496ZM202.099 102.192C202.099 100.336 201.827 98.6241 201.283 97.0561C200.771 95.4881 200.003 94.1281 198.979 92.9761C197.955 91.8241 196.707 90.9281 195.235 90.2881C193.763 89.6481 192.067 89.3281 190.147 89.3281C186.211 89.3281 183.107 90.4641 180.835 92.7361C178.595 95.0081 177.171 98.1601 176.563 102.192H202.099ZM209.827 125.04C208.675 126.384 207.347 127.552 205.843 128.544C204.339 129.504 202.739 130.288 201.043 130.896C199.347 131.504 197.587 131.952 195.763 132.24C193.971 132.528 192.195 132.672 190.435 132.672C187.075 132.672 183.955 132.112 181.075 130.992C178.227 129.84 175.747 128.176 173.635 126C171.555 123.792 169.923 121.072 168.739 117.84C167.587 114.576 167.011 110.832 167.011 106.608C167.011 103.216 167.539 100.064 168.595 97.1521C169.651 94.2081 171.155 91.6481 173.107 89.4721C175.091 87.2961 177.507 85.5841 180.355 84.3361C183.203 83.0881 186.403 82.4641 189.955 82.4641C192.931 82.4641 195.667 82.9601 198.163 83.9521C200.691 84.9121 202.867 86.3201 204.691 88.1761C206.515 90.0321 207.939 92.3201 208.963 95.0401C210.019 97.7601 210.547 100.864 210.547 104.352C210.547 105.792 210.387 106.768 210.067 107.28C209.747 107.76 209.155 108 208.291 108H176.323C176.419 110.912 176.835 113.456 177.571 115.632C178.307 117.776 179.315 119.568 180.595 121.008C181.907 122.448 183.459 123.52 185.251 124.224C187.043 124.928 189.043 125.28 191.251 125.28C193.331 125.28 195.123 125.04 196.627 124.56C198.163 124.08 199.475 123.568 200.563 123.024C201.683 122.448 202.611 121.92 203.347 121.44C204.115 120.96 204.787 120.72 205.363 120.72C206.131 120.72 206.723 121.008 207.139 121.584L209.827 125.04ZM229.967 120C231.503 122.016 233.167 123.424 234.959 124.224C236.751 125.024 238.703 125.424 240.815 125.424C245.167 125.424 248.511 123.872 250.847 120.768C253.215 117.664 254.399 112.976 254.399 106.704C254.399 100.912 253.359 96.6721 251.279 93.9841C249.199 91.2641 246.255 89.9041 242.447 89.9041C239.759 89.9041 237.423 90.5121 235.439 91.7281C233.487 92.9441 231.663 94.6721 229.967 96.9121V120ZM229.967 89.9521C231.983 87.7121 234.271 85.9041 236.831 84.5281C239.391 83.1521 242.303 82.4641 245.567 82.4641C248.415 82.4641 250.975 83.0241 253.247 84.1441C255.551 85.2321 257.503 86.8161 259.103 88.8961C260.703 90.9441 261.935 93.4401 262.799 96.3841C263.663 99.3281 264.095 102.656 264.095 106.368C264.095 110.304 263.599 113.888 262.607 117.12C261.647 120.352 260.255 123.12 258.431 125.424C256.639 127.728 254.447 129.52 251.855 130.8C249.263 132.048 246.351 132.672 243.119 132.672C241.551 132.672 240.111 132.512 238.799 132.192C237.487 131.904 236.271 131.472 235.151 130.896C234.063 130.32 233.055 129.616 232.127 128.784C231.199 127.952 230.319 127.008 229.487 125.952L229.055 130.032C228.799 131.344 227.999 132 226.655 132H220.607V61.1521H229.967V89.9521ZM283.346 92.5921C284.914 89.3921 286.802 86.8801 289.01 85.0561C291.218 83.2321 293.874 82.3201 296.978 82.3201C298.034 82.3201 299.026 82.4481 299.954 82.7041C300.914 82.9281 301.746 83.2801 302.45 83.7601L301.826 90.8161C301.602 91.6801 301.074 92.1121 300.242 92.1121C299.794 92.1121 299.122 92.0321 298.226 91.8721C297.33 91.6801 296.37 91.5841 295.346 91.5841C293.842 91.5841 292.514 91.8081 291.362 92.2561C290.21 92.6721 289.17 93.3121 288.242 94.1761C287.346 95.0081 286.546 96.0481 285.842 97.2961C285.138 98.5121 284.482 99.9041 283.874 101.472V132H274.514V83.2321H279.89C280.914 83.2321 281.602 83.4241 281.954 83.8081C282.338 84.1601 282.61 84.8001 282.77 85.7281L283.346 92.5921ZM319.462 83.2321V132H310.102V83.2321H319.462ZM321.238 68.1601C321.238 69.0241 321.062 69.8561 320.71 70.6561C320.358 71.4241 319.878 72.1121 319.27 72.7201C318.694 73.2961 318.006 73.7601 317.206 74.1121C316.406 74.4321 315.574 74.5921 314.71 74.5921C313.846 74.5921 313.03 74.4321 312.262 74.1121C311.494 73.7601 310.806 73.2961 310.198 72.7201C309.622 72.1121 309.158 71.4241 308.806 70.6561C308.486 69.8561 308.326 69.0241 308.326 68.1601C308.326 67.2641 308.486 66.4321 308.806 65.6641C309.158 64.8641 309.622 64.1761 310.198 63.6001C310.806 62.9921 311.494 62.5281 312.262 62.2081C313.03 61.8561 313.846 61.6801 314.71 61.6801C315.574 61.6801 316.406 61.8561 317.206 62.2081C318.006 62.5281 318.694 62.9921 319.27 63.6001C319.878 64.1761 320.358 64.8641 320.71 65.6641C321.062 66.4321 321.238 67.2641 321.238 68.1601ZM341.798 90.0001C342.854 88.8801 343.958 87.8561 345.11 86.9281C346.262 86.0001 347.478 85.2161 348.758 84.5761C350.07 83.9041 351.462 83.3921 352.934 83.0401C354.438 82.6561 356.038 82.4641 357.734 82.4641C360.422 82.4641 362.774 82.9121 364.79 83.8081C366.838 84.7041 368.55 85.9681 369.926 87.6001C371.302 89.2001 372.342 91.1361 373.046 93.4081C373.75 95.6801 374.102 98.1921 374.102 100.944V132H364.694V100.944C364.694 97.4561 363.894 94.7521 362.294 92.8321C360.694 90.8801 358.246 89.9041 354.95 89.9041C352.55 89.9041 350.294 90.4801 348.182 91.6321C346.102 92.7521 344.166 94.2881 342.374 96.2401V132H333.014V83.2321H338.63C339.942 83.2321 340.758 83.8561 341.078 85.1041L341.798 90.0001ZM403.868 107.664C405.532 107.664 406.988 107.44 408.236 106.992C409.516 106.544 410.572 105.92 411.404 105.12C412.268 104.288 412.908 103.296 413.324 102.144C413.772 100.992 413.996 99.7281 413.996 98.3521C413.996 95.5361 413.132 93.2961 411.404 91.6321C409.708 89.9361 407.196 89.0881 403.868 89.0881C400.572 89.0881 398.06 89.9361 396.332 91.6321C394.636 93.2961 393.788 95.5361 393.788 98.3521C393.788 99.7281 393.996 100.992 394.412 102.144C394.86 103.264 395.5 104.24 396.332 105.072C397.196 105.872 398.252 106.512 399.5 106.992C400.78 107.44 402.236 107.664 403.868 107.664ZM418.796 134.544C418.796 133.392 418.476 132.48 417.836 131.808C417.196 131.104 416.316 130.56 415.196 130.176C414.108 129.76 412.828 129.472 411.356 129.312C409.884 129.12 408.332 128.976 406.7 128.88C405.1 128.784 403.452 128.704 401.756 128.64C400.06 128.544 398.428 128.384 396.86 128.16C395.196 128.992 393.82 130 392.732 131.184C391.676 132.368 391.148 133.76 391.148 135.36C391.148 136.384 391.404 137.344 391.916 138.24C392.46 139.136 393.276 139.904 394.364 140.544C395.484 141.216 396.876 141.728 398.54 142.08C400.236 142.464 402.252 142.656 404.588 142.656C406.892 142.656 408.924 142.448 410.684 142.032C412.444 141.648 413.916 141.088 415.1 140.352C416.316 139.648 417.228 138.8 417.836 137.808C418.476 136.816 418.796 135.728 418.796 134.544ZM428.3 85.0561V88.5601C428.3 89.7121 427.58 90.4321 426.14 90.7201L420.908 91.4881C421.356 92.4801 421.708 93.5361 421.964 94.6561C422.22 95.7441 422.348 96.8961 422.348 98.1121C422.348 100.512 421.884 102.688 420.956 104.64C420.028 106.56 418.748 108.208 417.116 109.584C415.484 110.96 413.532 112.016 411.26 112.752C409.02 113.488 406.556 113.856 403.868 113.856C401.66 113.856 399.596 113.616 397.676 113.136C396.716 113.712 395.98 114.352 395.468 115.056C394.988 115.728 394.748 116.4 394.748 117.072C394.748 118.192 395.212 119.024 396.14 119.568C397.1 120.112 398.332 120.512 399.836 120.768C401.372 120.992 403.116 121.136 405.068 121.2C407.052 121.264 409.052 121.376 411.068 121.536C413.116 121.664 415.116 121.92 417.068 122.304C419.052 122.656 420.796 123.248 422.3 124.08C423.836 124.88 425.068 126 425.996 127.44C426.956 128.848 427.436 130.688 427.436 132.96C427.436 135.072 426.908 137.12 425.852 139.104C424.828 141.088 423.324 142.848 421.34 144.384C419.356 145.92 416.94 147.152 414.092 148.08C411.244 149.008 408.012 149.472 404.396 149.472C400.78 149.472 397.628 149.12 394.94 148.416C392.284 147.712 390.06 146.768 388.268 145.584C386.508 144.4 385.18 143.024 384.284 141.456C383.42 139.888 382.988 138.256 382.988 136.56C382.988 134.192 383.724 132.192 385.196 130.56C386.668 128.896 388.7 127.6 391.292 126.672C389.884 126.032 388.764 125.168 387.932 124.08C387.1 122.96 386.684 121.488 386.684 119.664C386.684 118.96 386.812 118.24 387.068 117.504C387.324 116.736 387.708 115.984 388.22 115.248C388.764 114.48 389.42 113.76 390.188 113.088C390.988 112.416 391.9 111.808 392.924 111.264C390.524 109.92 388.636 108.144 387.26 105.936C385.884 103.696 385.196 101.088 385.196 98.1121C385.196 95.7121 385.66 93.5521 386.588 91.6321C387.516 89.7121 388.796 88.0641 390.428 86.6881C392.092 85.3121 394.06 84.2561 396.332 83.5201C398.636 82.7841 401.148 82.4161 403.868 82.4161C408.092 82.4161 411.724 83.2961 414.764 85.0561H428.3Z"),f(l1,"fill","#535251"),f(J,"clip-path","url(#clip0_1356_3)"),f(K,"width","478"),f(K,"height","174"),f(K,"fill","white"),f(r1,"id","clip0_1356_3"),f(F,"width","478"),f(F,"height","174"),f(F,"viewBox","0 0 478 174"),f(F,"fill","none"),f(F,"xmlns","http://www.w3.org/2000/svg"),f(F,"class","h-7 w-auto"),f(t1,"class","-mt-1 -mr-2"),f(s1,"href","https://xn--sr8hvo.ws/%F0%9F%94%9D%F0%9F%9A%B9%F0%9F%9A%90/next"),f(s1,"class","i-ic-round-keyboard-double-arrow-right h-5 w-5 p-0"),f(a1,"class","btn btn-ghost btn-xs"),f(I,"class","h-card p-4 items-right xl:py-2 xl:max-w-xs btn-group flex gap-2 justify-center"),f(e,"class","sticky flex flex-col gap-4 top-24 xl:ml-auto xl:mr-8 xl:max-w-xs")},m(z,O){x(z,e,O),h(e,l),h(l,t),h(t,o),h(l,a),h(l,i),U&&U.m(i,null),h(i,_),j&&j.m(i,null),h(l,p),h(l,d),h(d,c),h(c,g),h(d,$),h(d,m),m.innerHTML=v,h(d,u),h(d,L),h(L,C),h(L,y),h(d,B),q&&q.m(d,null),h(e,T),h(e,I),h(I,X),h(X,e1),h(I,g1),h(I,t1),h(t1,F),h(F,J),h(J,S),h(J,l1),h(F,c1),h(c1,r1),h(r1,K),h(I,w1),h(I,a1),h(a1,s1)},p(z,[O]){U.p(z,O),j.p(z,O),P.author.metadata&&q.p(z,O)},i:R,o:R,d(z){z&&n(e),U&&U.d(),j&&j.d(),q&&q.d()}}}class g2 extends Y1{constructor(e){super(),J1(this,e,null,b2,x1,{})}}function N1(s,e,l){const t=s.slice();t[9]=e[l],t[12]=l;const r=new Date(t[9].published??t[9].created).getFullYear();return t[10]=r,t}function B1(s,e,l){const t=s.slice();return t[13]=e[l],t[15]=l,t}function T1(s,e,l){const t=s.slice();return t[13]=e[l],t}function O1(s){let e,l=s[2],t=[];for(let r=0;r<l.length;r+=1)t[r]=S1(T1(s,l,r));return{c(){e=k("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var o=b(e);for(let a=0;a<t.length;a+=1)t[a].l(o);o.forEach(n),this.h()},h(){f(e,"class","flex xl:flex-wrap gap-2 overflow-x-auto xl:overflow-x-hidden overflow-y-hidden max-h-24 my-auto xl:max-h-fit max-w-fit xl:max-w-full pl-8 md:px-0 xl:pl-8 xl:pt-8")},m(r,o){x(r,e,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(r,o){if(o&6){l=r[2];let a;for(a=0;a<l.length;a+=1){const i=T1(r,l,a);t[a]?t[a].p(i,o):(t[a]=S1(i),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(r){r&&n(e),b1(t,r)}}}function S1(s){let e,l,t=s[13]+"",r,o,a,i,_;function p(){return s[6](s[13])}return{c(){e=k("button"),l=Z("#"),r=Z(t),o=V(),this.h()},l(d){e=E(d,"BUTTON",{id:!0,class:!0});var c=b(e);l=D(c,"#"),r=D(c,t),o=M(c),c.forEach(n),this.h()},h(){f(e,"id",a=s[13]),f(e,"class","btn btn-sm btn-ghost normal-case border-dotted border-base-content/20 border-2 mt-4 mb-8 xl:m-0"),Y(e,"!btn-secondary",s[1].includes(s[13])),Y(e,"shadow-lg",s[1].includes(s[13]))},m(d,c){x(d,e,c),h(e,l),h(e,r),h(e,o),i||(_=K1(e,"click",p),i=!0)},p(d,c){s=d,c&4&&t!==(t=s[13]+"")&&y1(r,t),c&4&&a!==(a=s[13])&&f(e,"id",a),c&6&&Y(e,"!btn-secondary",s[1].includes(s[13])),c&6&&Y(e,"shadow-lg",s[1].includes(s[13]))},d(d){d&&n(e),i=!1,_()}}}function U1(s){let e,l,t,r,o,a,i,_,p,d,c,w,g,$,m=s[1],v=[];for(let u=0;u<m.length;u+=1)v[u]=q1(B1(s,m,u));return{c(){e=k("div"),l=k("div"),t=k("h2"),r=Z("Not found: [");for(let u=0;u<v.length;u+=1)v[u].c();o=Z("]"),a=V(),i=k("button"),_=k("span"),p=Z(`
              tags = []`),this.h()},l(u){e=E(u,"DIV",{class:!0});var L=b(e);l=E(L,"DIV",{class:!0});var C=b(l);t=E(C,"H2",{});var y=b(t);r=D(y,"Not found: [");for(let T=0;T<v.length;T+=1)v[T].l(y);o=D(y,"]"),y.forEach(n),a=M(C),i=E(C,"BUTTON",{class:!0});var B=b(i);_=E(B,"SPAN",{class:!0}),b(_).forEach(n),p=D(B,`
              tags = []`),B.forEach(n),C.forEach(n),L.forEach(n),this.h()},h(){f(_,"class","i-heroicons-outline-trash mr-2"),f(i,"class","btn btn-secondary"),f(l,"class","prose items-center"),f(e,"class","bg-base-300 text-base-content shadow-inner text-center md:rounded-box p-10 -mb-2 md:mb-0 relative z-10")},m(u,L){x(u,e,L),h(e,l),h(l,t),h(t,r);for(let C=0;C<v.length;C+=1)v[C]&&v[C].m(t,null);h(t,o),h(l,a),h(l,i),h(i,_),h(i,p),w=!0,g||($=K1(i,"click",s[7]),g=!0)},p(u,L){if(L&2){m=u[1];let C;for(C=0;C<m.length;C+=1){const y=B1(u,m,C);v[C]?v[C].p(y,L):(v[C]=q1(y),v[C].c(),v[C].m(t,o))}for(;C<v.length;C+=1)v[C].d(1);v.length=m.length}},i(u){w||(n1(()=>{w&&(c&&c.end(1),d=u1(e,N,{x:100,duration:300,delay:500}),d.start())}),w=!0)},o(u){d&&d.invalidate(),c=f1(e,N,{x:-100,duration:300}),w=!1},d(u){u&&n(e),b1(v,u),u&&c&&c.end(),g=!1,$()}}}function j1(s){let e;return{c(){e=Z(",")},l(l){e=D(l,",")},m(l,t){x(l,e,t)},d(l){l&&n(e)}}}function q1(s){let e,l=s[13]+"",t,r,o,a=s[15]+1<s[1].length&&j1();return{c(){e=Z("'"),t=Z(l),r=Z("'"),a&&a.c(),o=V()},l(i){e=D(i,"'"),t=D(i,l),r=D(i,"'"),a&&a.l(i),o=M(i)},m(i,_){x(i,e,_),x(i,t,_),x(i,r,_),a&&a.m(i,_),x(i,o,_)},p(i,_){_&2&&l!==(l=i[13]+"")&&y1(t,l),i[15]+1<i[1].length?a||(a=j1(),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},d(i){i&&n(e),i&&n(t),i&&n(r),a&&a.d(i),i&&n(o)}}}function z1(s){let e,l=(s[4].push(s[10])&&s[10])+"",t,r,o,a;return{c(){e=k("div"),t=Z(l),this.h()},l(i){e=E(i,"DIV",{class:!0});var _=b(e);t=D(_,l),_.forEach(n),this.h()},h(){f(e,"class","divider my-4 md:my-0")},m(i,_){x(i,e,_),h(e,t),a=!0},p(i,_){(!a||_&17)&&l!==(l=(i[4].push(i[10])&&i[10])+"")&&y1(t,l)},i(i){a||(n1(()=>{a&&(o&&o.end(1),r=u1(e,N,{x:s[12]%2?100:-100,duration:300,delay:500}),r.start())}),a=!0)},o(i){r&&r.invalidate(),o=f1(e,N,{x:s[12]%2?-100:100,duration:300}),a=!1},d(i){i&&n(e),i&&o&&o.end()}}}function R1(s){let e=!s[4].includes(s[10]),l,t,r,o,a,i,_,p=e&&z1(s);return r=new n2({props:{post:s[9],preview:!0,loading:s[12]<5?"eager":"lazy",decoding:s[12]<5?"auto":"async"}}),{c(){p&&p.c(),l=V(),t=k("div"),h1(r.$$.fragment),o=V(),this.h()},l(d){p&&p.l(d),l=M(d),t=E(d,"DIV",{class:!0});var c=b(t);C1(r.$$.fragment,c),o=M(c),c.forEach(n),this.h()},h(){f(t,"class","rounded-box transition-all duration-500 ease-in-out hover:z-30 hover:shadow-lg md:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-0.5")},m(d,c){p&&p.m(d,c),x(d,l,c),x(d,t,c),_1(r,t,null),h(t,o),_=!0},p(d,c){c&17&&(e=!d[4].includes(d[10])),e?p?(p.p(d,c),c&17&&H(p,1)):(p=z1(d),p.c(),H(p,1),p.m(l.parentNode,l)):p&&(v1(),A(p,1,1,()=>{p=null}),m1());const w={};c&1&&(w.post=d[9]),r.$set(w)},i(d){_||(H(p),H(r.$$.fragment,d),n1(()=>{_&&(i&&i.end(1),a=u1(t,N,{x:s[12]%2?100:-100,duration:300,delay:500}),a.start())}),_=!0)},o(d){A(p),A(r.$$.fragment,d),a&&a.invalidate(),i=f1(t,N,{x:s[12]%2?-100:100,duration:300}),_=!1},d(d){p&&p.d(d),d&&n(l),d&&n(t),p1(r),d&&i&&i.end()}}}function G1(s){let e,l,t,r,o,a,i,_,p,d,c=s[3]&&s[0].length===0&&U1(s),w=s[0],g=[];for(let m=0;m<w.length;m+=1)g[m]=R1(N1(s,w,m));const $=m=>A(g[m],1,1,()=>{g[m]=null});return i=new o2({}),{c(){c&&c.c(),e=V(),l=k("main");for(let m=0;m<g.length;m+=1)g[m].c();t=V(),r=k("div"),o=k("div"),a=V(),h1(i.$$.fragment),this.h()},l(m){c&&c.l(m),e=M(m),l=E(m,"MAIN",{class:!0,itemprop:!0,itemscope:!0,itemtype:!0});var v=b(l);for(let L=0;L<g.length;L+=1)g[L].l(v);v.forEach(n),t=M(m),r=E(m,"DIV",{class:!0});var u=b(r);o=E(u,"DIV",{class:!0}),b(o).forEach(n),a=M(u),C1(i.$$.fragment,u),u.forEach(n),this.h()},h(){f(l,"class","flex flex-col relative bg-base-100 md:bg-transparent md:gap-8 z-10"),f(l,"itemprop","mainEntityOfPage"),f(l,"itemscope",""),f(l,"itemtype","https://schema.org/Blog"),f(o,"class","divider mt-0 mb-8 hidden lg:flex"),f(r,"class","sticky bottom-0 md:static md:mt-8"),Y(r,"hidden",!s[3])},m(m,v){c&&c.m(m,v),x(m,e,v),x(m,l,v);for(let u=0;u<g.length;u+=1)g[u]&&g[u].m(l,null);x(m,t,v),x(m,r,v),h(r,o),h(r,a),_1(i,r,null),d=!0},p(m,v){if(s=m,s[3]&&s[0].length===0?c?(c.p(s,v),v&9&&H(c,1)):(c=U1(s),c.c(),H(c,1),c.m(e.parentNode,e)):c&&(v1(),A(c,1,1,()=>{c=null}),m1()),v&17){w=s[0];let u;for(u=0;u<w.length;u+=1){const L=N1(s,w,u);g[u]?(g[u].p(L,v),H(g[u],1)):(g[u]=R1(L),g[u].c(),H(g[u],1),g[u].m(l,null))}for(v1(),u=w.length;u<g.length;u+=1)$(u);m1()}(!d||v&8)&&Y(r,"hidden",!s[3])},i(m){if(!d){H(c);for(let v=0;v<w.length;v+=1)H(g[v]);H(i.$$.fragment,m),n1(()=>{d&&(p&&p.end(1),_=u1(r,N,{x:s[0].length+1%2?100:-100,duration:300,delay:500}),_.start())}),d=!0}},o(m){A(c),g=g.filter(Boolean);for(let v=0;v<g.length;v+=1)A(g[v]);A(i.$$.fragment,m),_&&_.invalidate(),p=f1(r,N,{x:s[0].length+1%2?-100:100,duration:300}),d=!1},d(m){c&&c.d(m),m&&n(e),m&&n(l),b1(g,m),m&&n(t),m&&n(r),p1(i),m&&p&&p.end()}}}function w2(s){let e,l,t,r,o,a,i,_,p,d=s[2]&&Object.keys(s[2]).length>0,c,w,g,$,m=s[0],v;e=new i2({}),o=new g2({});let u=d&&O1(s),L=G1(s);return{c(){h1(e.$$.fragment),l=V(),t=k("div"),r=k("div"),h1(o.$$.fragment),_=V(),p=k("div"),u&&u.c(),g=V(),$=k("div"),L.c(),this.h()},l(C){C1(e.$$.fragment,C),l=M(C),t=E(C,"DIV",{class:!0});var y=b(t);r=E(y,"DIV",{class:!0});var B=b(r);C1(o.$$.fragment,B),B.forEach(n),_=M(y),p=E(y,"DIV",{class:!0});var T=b(p);u&&u.l(T),T.forEach(n),g=M(y),$=E(y,"DIV",{class:!0});var I=b($);L.l(I),I.forEach(n),y.forEach(n),this.h()},h(){f(r,"class","flex-1 w-full max-w-screen-md order-first mx-auto xl:mr-0 xl:ml-8 xl:max-w-md"),f(p,"class","flex-1 w-full max-w-screen-md xl:order-last mx-auto xl:ml-0 xl:mr-8 xl:max-w-md"),f($,"class","flex-none w-full max-w-screen-md mx-auto xl:mx-0"),f(t,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap h-feed")},m(C,y){_1(e,C,y),x(C,l,y),x(C,t,y),h(t,r),_1(o,r,null),h(t,_),h(t,p),u&&u.m(p,null),h(t,g),h(t,$),L.m($,null),v=!0},p(C,[y]){y&4&&(d=C[2]&&Object.keys(C[2]).length>0),d?u?u.p(C,y):(u=O1(C),u.c(),u.m(p,null)):u&&(u.d(1),u=null),y&1&&x1(m,m=C[0])?(v1(),A(L,1,1,R),m1(),L=G1(C),L.c(),H(L,1),L.m($,null)):L.p(C,y)},i(C){v||(H(e.$$.fragment,C),H(o.$$.fragment,C),n1(()=>{v&&(i&&i.end(1),a=u1(r,N,{x:25,duration:300,delay:500}),a.start())}),n1(()=>{v&&(w&&w.end(1),c=u1(p,N,{x:-25,duration:300,delay:500}),c.start())}),H(L),v=!0)},o(C){A(e.$$.fragment,C),A(o.$$.fragment,C),a&&a.invalidate(),i=f1(r,N,{x:25,duration:300}),c&&c.invalidate(),w=f1(p,N,{x:-25,duration:300}),A(L),v=!1},d(C){p1(e,C),C&&n(l),C&&n(t),p1(o),C&&i&&i.end(),u&&u.d(),C&&w&&w.end(),L.d(C)}}}function k2(s,e,l){let t;X1(s,l2,w=>l(8,t=w));let r,o,a,[i,_,p]=[[],[],[]];t2.set(""),e2(()=>{var w;t.url.searchParams.get("tags")&&l(1,_=((w=t.url.searchParams.get("tags"))==null?void 0:w.split(","))??[]),l(3,a=!0)});const d=w=>_.includes(w)?l(1,_=_.filter(g=>g!=w)):l(1,_=[..._,w]),c=()=>l(1,_=[]);return s.$$.update=()=>{s.$$.dirty&34&&_&&(l(0,i=_?r.filter(w=>_.every(g=>{var $;return($=w.tags)==null?void 0:$.includes(g)})):r),window.location.pathname==="/"&&f2(_.length>0?`?tags=${_.toString()}`:"/",{replaceState:!0})),s.$$.dirty&1&&i.length>1&&l(4,p=[new Date(i[0].published??i[0].created).getFullYear()])},a2.subscribe(w=>l(5,r=w.filter(g=>{var $;return!(($=g.flags)!=null&&$.includes("unlisted"))}))),s2.subscribe(w=>l(2,o=w)),[i,_,o,a,p,r,d,c]}class D2 extends Y1{constructor(e){super(),J1(this,e,k2,w2,x1,{})}}export{D2 as component};
