import{ac as f,ad as x}from"./index.54014205.js";import{w as _}from"./index.d615244a.js";function b(o){const t=o-1;return t*t*t+1}function S(o,{delay:t=0,duration:n=400,easing:s=x}={}){const a=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:s,css:c=>`opacity: ${c*a}`}}function U(o,{delay:t=0,duration:n=400,easing:s=b,x:a=0,y:c=0,opacity:u=0}={}){const r=getComputedStyle(o),e=+r.opacity,y=r.transform==="none"?"":r.transform,p=e*(1-u),[l,m]=f(a),[$,d]=f(c);return{delay:t,duration:n,easing:s,css:(i,g)=>`
			transform: ${y} translate(${(1-i)*l}${m}, ${(1-i)*$}${d});
			opacity: ${e-p*g}`}}const V=_({});export{S as a,b as c,U as f,V as t};
