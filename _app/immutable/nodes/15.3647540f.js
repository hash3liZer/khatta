import{S as Do,i as Fo,s as Bo,N as Mo,k as a,q as s,a as c,l,m as r,r as i,h as t,c as u,n,T as Lo,b as _,D as e,u as pl,O as Zo,P as jo,Q as zo,g as bl,d as Sl,U as El,y as Ho,z as Vo,A as Uo,V as Ko,W as Ro,B as Wo,X as Oo,a8 as fr,a9 as cr,E as Qo}from"../chunks/index.725d15e1.js";import{P as Jo}from"../chunks/post_layout.1a04af22.js";import{s as W}from"../chunks/icon.4ac474f8.js";function No(S){let f,h;return{c(){f=a("div"),h=s(S[2]),this.h()},l(d){f=l(d,"DIV",{class:!0});var m=r(f);h=i(m,S[2]),m.forEach(t),this.h()},h(){n(f,"class","opacity-50")},m(d,m){_(d,f,m),e(f,h)},p(d,m){m&4&&pl(h,d[2])},d(d){d&&t(f)}}}function Go(S){let f,h=(S[3]??W.author.bio)+"";return{c(){f=a("div")},l(d){f=l(d,"DIV",{});var m=r(f);m.forEach(t)},m(d,m){_(d,f,m),f.innerHTML=h},p(d,m){m&8&&h!==(h=(d[3]??W.author.bio)+"")&&(f.innerHTML=h)},d(d){d&&t(f)}}}function qo(S){let f,h,d=(S[1]??W.author.name)+"",m,p,E,I,C,v,T,P,H,L,F=(S[1]??W.author.name)+"",R,N,B,O,A=S[2]&&No(S),y=(S[3]||W.author.bio)&&Go(S);const V=S[5].default,w=Mo(V,S,S[4],null);return{c(){f=a("div"),h=a("div"),m=s(d),p=c(),E=a("div"),I=a("div"),C=a("img"),P=c(),A&&A.c(),H=c(),L=a("div"),R=s(F),N=c(),y&&y.c(),B=c(),w&&w.c(),this.h()},l(b){f=l(b,"DIV",{class:!0});var k=r(f);h=l(k,"DIV",{class:!0});var Q=r(h);m=i(Q,d),Q.forEach(t),p=u(k),E=l(k,"DIV",{class:!0});var q=r(E);I=l(q,"DIV",{class:!0});var Ne=r(I);C=l(Ne,"IMG",{class:!0,alt:!0,loading:!0,decoding:!0,src:!0}),Ne.forEach(t),q.forEach(t),P=u(k),A&&A.l(k),H=u(k),L=l(k,"DIV",{class:!0});var Ge=r(L);R=i(Ge,F),Ge.forEach(t),N=u(k),y&&y.l(k),B=u(k),w&&w.l(k),k.forEach(t),this.h()},h(){n(h,"class","absolute -top-4 opacity-10 text-[12rem] text-neutral leading-tight rotate-[30deg]"),n(C,"class","hover:rotate-[360deg] transition-transform duration-1000 ease-in-out m-0"),n(C,"alt",v=S[1]??W.author.name),n(C,"loading","lazy"),n(C,"decoding","async"),Lo(C.src,T=S[0]??W.author.avatar)||n(C,"src",T),n(I,"class","rounded-full border-2 border-white shadow-xl w-16 h-16"),n(E,"class","avatar mb-4"),n(L,"class","text-2xl mb-2"),n(f,"class","relative w-auto min-h-48 rounded-box overflow-hidden bg-gradient-to-b from-primary to-secondary text-primary-content transition-shadow duration-200 shadow-xl hover:shadow-2xl p-4 md:p-8 my-4")},m(b,k){_(b,f,k),e(f,h),e(h,m),e(f,p),e(f,E),e(E,I),e(I,C),e(f,P),A&&A.m(f,null),e(f,H),e(f,L),e(L,R),e(f,N),y&&y.m(f,null),e(f,B),w&&w.m(f,null),O=!0},p(b,[k]){(!O||k&2)&&d!==(d=(b[1]??W.author.name)+"")&&pl(m,d),(!O||k&2&&v!==(v=b[1]??W.author.name))&&n(C,"alt",v),(!O||k&1&&!Lo(C.src,T=b[0]??W.author.avatar))&&n(C,"src",T),b[2]?A?A.p(b,k):(A=No(b),A.c(),A.m(f,H)):A&&(A.d(1),A=null),(!O||k&2)&&F!==(F=(b[1]??W.author.name)+"")&&pl(R,F),b[3]||W.author.bio?y?y.p(b,k):(y=Go(b),y.c(),y.m(f,B)):y&&(y.d(1),y=null),w&&w.p&&(!O||k&16)&&Zo(w,V,b,b[4],O?zo(V,b[4],k,null):jo(b[4]),null)},i(b){O||(bl(w,b),O=!0)},o(b){Sl(w,b),O=!1},d(b){b&&t(f),A&&A.d(),y&&y.d(),w&&w.d(b)}}}function $o(S,f,h){let{$$slots:d={},$$scope:m}=f,{avatar:p}=f,{name:E}=f,{subname:I}=f,{bio:C}=f;return S.$$set=v=>{"avatar"in v&&h(0,p=v.avatar),"name"in v&&h(1,E=v.name),"subname"in v&&h(2,I=v.subname),"bio"in v&&h(3,C=v.bio),"$$scope"in v&&h(4,m=v.$$scope)},[p,E,I,C,m,d]}class Xo extends Do{constructor(f){super(),Fo(this,f,$o,qo,Bo,{avatar:0,name:1,subname:2,bio:3})}}function Yo(S){let f,h,d,m,p,E,I,C,v,T,P,H,L,F;return{c(){f=a("div"),h=a("a"),d=fr("svg"),m=fr("path"),p=c(),E=a("span"),I=s("Shameer Kashif"),C=c(),v=a("a"),T=fr("svg"),P=fr("path"),H=c(),L=a("span"),F=s("@hash3liZer"),this.h()},l(R){f=l(R,"DIV",{class:!0});var N=r(f);h=l(N,"A",{href:!0,rel:!0,target:!0,class:!0});var B=r(h);d=cr(B,"svg",{class:!0,viewBox:!0,xmlns:!0});var O=r(d);m=cr(O,"path",{fill:!0,d:!0}),r(m).forEach(t),O.forEach(t),p=u(B),E=l(B,"SPAN",{class:!0});var A=r(E);I=i(A,"Shameer Kashif"),A.forEach(t),B.forEach(t),C=u(N),v=l(N,"A",{href:!0,rel:!0,target:!0,class:!0});var y=r(v);T=cr(y,"svg",{class:!0,viewBox:!0,xmlns:!0});var V=r(T);P=cr(V,"path",{fill:!0,"fill-rule":!0,d:!0}),r(P).forEach(t),V.forEach(t),H=u(y),L=l(y,"SPAN",{class:!0});var w=r(L);F=i(w,"@hash3liZer"),w.forEach(t),y.forEach(t),N.forEach(t),this.h()},h(){n(m,"fill","#fff"),n(m,"d","M.632.55v22.9H2.28V24H0V0h2.28v.55zm7.043 7.26v1.157h.033a3.312 3.312 0 0 1 1.117-1.024c.433-.245.936-.365 1.5-.365c.54 0 1.033.107 1.481.314c.448.208.785.582 1.02 1.108c.254-.374.6-.706 1.034-.992c.434-.287.95-.43 1.546-.43c.453 0 .872.056 1.26.167c.388.11.716.286.993.53c.276.245.489.559.646.951c.152.392.23.863.23 1.417v5.728h-2.349V11.52c0-.286-.01-.559-.032-.812a1.755 1.755 0 0 0-.18-.66a1.106 1.106 0 0 0-.438-.448c-.194-.11-.457-.166-.785-.166c-.332 0-.6.064-.803.189a1.38 1.38 0 0 0-.48.499a1.946 1.946 0 0 0-.231.696a5.56 5.56 0 0 0-.06.785v4.768h-2.35v-4.8c0-.254-.004-.503-.018-.752a2.074 2.074 0 0 0-.143-.688a1.052 1.052 0 0 0-.415-.503c-.194-.125-.476-.19-.854-.19c-.111 0-.259.024-.439.074c-.18.051-.36.143-.53.282a1.637 1.637 0 0 0-.439.595c-.12.259-.18.6-.18 1.02v4.966H5.46V7.81zm15.693 15.64V.55H21.72V0H24v24h-2.28v-.55z"),n(d,"class","absolute w-16 h-16 left-10 opacity-20 fill-white transform-gpu transition-transform ease-in-out duration-500 group-hover:scale-125"),n(d,"viewBox","0 0 24 24"),n(d,"xmlns","http://www.w3.org/2000/svg"),n(E,"class","z-10 !text-white"),n(h,"href","https://shameerkashif.me"),n(h,"rel","noopener external"),n(h,"target","_blank"),n(h,"class","group flex-1 relative overflow-hidden btn btn-block normal-case border-none no-underline bg-[#110019] hover:bg-[#0077B3]"),n(P,"fill","#fff"),n(P,"fill-rule","evenodd"),n(P,"d","M20.375 8.174c.163-.4.688-1.987-.163-4.137c0 0-1.312-.413-4.3 1.625c-1.25-.35-2.587-.4-3.912-.4c-1.325 0-2.662.05-3.912.4c-2.988-2.05-4.3-1.625-4.3-1.625c-.85 2.15-.325 3.737-.163 4.137C2.612 9.262 2 10.662 2 12.362c0 6.437 4.162 7.887 9.975 7.887S22 18.799 22 12.362c0-1.7-.613-3.1-1.625-4.188ZM12 19.024c-4.125 0-7.475-.187-7.475-4.187c0-.95.475-1.85 1.275-2.588c1.338-1.225 3.625-.575 6.2-.575c2.588 0 4.85-.65 6.2.575c.813.738 1.275 1.625 1.275 2.588c0 3.987-3.35 4.187-7.475 4.187Zm-3.137-6.262c-.825 0-1.5 1-1.5 2.225s.674 2.237 1.5 2.237c.825 0 1.5-1 1.5-2.237c0-1.238-.675-2.225-1.5-2.225Zm6.274 0c-.825 0-1.5.987-1.5 2.225c0 1.237.675 2.237 1.5 2.237s1.5-1 1.5-2.237c0-1.238-.662-2.225-1.5-2.225Z"),n(T,"class","absolute w-16 h-16 right-10 opacity-20 fill-white transform-gpu transition-transform ease-in-out duration-500 group-hover:scale-125"),n(T,"viewBox","0 0 24 24"),n(T,"xmlns","http://www.w3.org/2000/svg"),n(L,"class","z-10 !text-white"),n(v,"href","https://github.com/hash3liZer"),n(v,"rel","noopener external"),n(v,"target","_blank"),n(v,"class","group flex-1 relative overflow-hidden btn btn-block normal-case border-none no-underline bg-[#110019] hover:bg-[#2A3192]"),n(f,"class","flex flex-col md:flex-row gap-4 mt-4")},m(R,N){_(R,f,N),e(f,h),e(h,d),e(d,m),e(h,p),e(h,E),e(E,I),e(f,C),e(f,v),e(v,T),e(T,P),e(v,H),e(v,L),e(L,F)},p:Qo,d(R){R&&t(f)}}}function es(S){let f,h,d,m,p,E,I,C,v,T,P,H,L,F,R,N,B,O,A,y,V,w,b,k,Q,q,Ne,Ge,ur,xe,lt,hr,dr,Ft,ue,De,vr,Bt,x,$,ot,gr,_r,he,mr,pr,Er,X,st,br,Sr,de,yr,kr,Cr,Y,it,Ar,Ir,ve,Tr,wr,Pr,Fe,nt,Lr,Rr,Or,ee,ft,Nr,Gr,ge,xr,Dr,Ht,_e,Be,Fr,Vt,He,J,Br,ct,Hr,Vr,me,Ur,Wr,Ut,pe,Ve,Mr,Wt,te,Ee,Zr,ut,jr,zr,Kr,be,Qr,ht,Jr,qr,Mt,Se,Ue,$r,Zt,D,ye,Xr,dt,Yr,ea,ta,ke,ra,vt,aa,la,oa,Ce,sa,gt,ia,na,fa,Ae,ca,_t,ua,ha,da,Ie,va,mt,ga,_a,jt,Te,We,ma,zt,G,Me,pt,re,pa,Ea,ba,Ze,Et,ae,Sa,ya,ka,je,bt,le,Ca,Aa,Ia,ze,St,oe,Ta,wa,Pa,Ke,yt,se,La,Ra,Oa,Qe,kt,ie,Na,Ga,Kt,we,Je,xa,Qt,M,ne,Ct,Da,Fa,At,fe,Ba,Ha,Va,qe,It,Ua,Wa,Ma,$e,Tt,Za,ja,Jt,Pe,Xe,za,qt,Z,Le,wt,Ka,Qa,Ye,Ja,qa,Re,Pt,$a,Xa,et,Ya,el,Oe,Lt,tl,rl,ce,al,$t;return f=new Xo({props:{subname:"Shameer Kashif",bio:"A Guy in Cyber Security, Crafting Code & Breaking Applications",$$slots:{default:[Yo]},$$scope:{ctx:S}}}),{c(){Ho(f.$$.fragment),h=c(),d=a("hr"),m=c(),p=a("h2"),E=a("a"),I=s("Skills"),C=c(),v=a("ul"),T=a("li"),P=a("strong"),H=s("Cyber Security"),L=s(": AD Exploitation, Binary, Web Exploitation, Penetration Testing, Code Review, Black Box, Smart Contracts"),F=c(),R=a("li"),N=a("strong"),B=s("CI/CD"),O=s(": Terraform, Ansible, Vagrant, Snyk, Docker, CirlceCI, Github Actions, Kubernetes, SonarQube"),A=c(),y=a("li"),V=a("strong"),w=s("Programming Languages"),b=s(": Python 3/2, Javascript, Typescript, C/C++, Bash, Powershell, HTML5/CSS, Innosetup, SQL"),k=c(),Q=a("li"),q=a("strong"),Ne=s("Tools & Frameworks"),Ge=s(": Django, React, Next, FastAPI, DRF, MySQL, PostgreSQL,"),ur=c(),xe=a("li"),lt=a("strong"),hr=s("Platforms & Cloud"),dr=s(": Openstack, AWS, Google Cloud, DigitalOcean, Linux, Kali, WinAPI"),Ft=c(),ue=a("h2"),De=a("a"),vr=s("Experience"),Bt=c(),x=a("ul"),$=a("li"),ot=a("strong"),gr=s("Application Security Engineer (Appsec & DevSecOps)"),_r=s(" at "),he=a("a"),mr=s("Trustline"),pr=s(" Full time (Oct 2023 - Present) [Riyadh, KSA / Remote]"),Er=c(),X=a("li"),st=a("strong"),br=s("Cyber Security Specialist & DevOps"),Sr=s(" at "),de=a("a"),yr=s("The COZM"),kr=s(" Contract (July 2023 - Present) [London, United Kingdom / Remote]"),Cr=c(),Y=a("li"),it=a("strong"),Ar=s("DevSecOps Engineer"),Ir=s(" at "),ve=a("a"),Tr=s("SNSkies"),wr=s(" Full Time (Dec 2021 - Oct 2023) [Islamabad / Onsite]"),Pr=c(),Fe=a("li"),nt=a("strong"),Lr=s("Full Stack Engineer (Cyber Security)"),Rr=s(" Contract for a Cyber Security Project (2020 - 2022) [Sao Palo, Brazil / Remote]"),Or=c(),ee=a("li"),ft=a("strong"),Nr=s("Full Stack & Cyber Security"),Gr=s(" at "),ge=a("a"),xr=s("Upwork"),Dr=s(" Freelance (2019 - Present) [Islamabad]"),Ht=c(),_e=a("h2"),Be=a("a"),Fr=s("Education"),Vt=c(),He=a("ul"),J=a("li"),Br=s("Bachelors in "),ct=a("strong"),Hr=s("Cyber Security"),Vr=s(" from "),me=a("a"),Ur=s("Air University, Islamabad"),Wr=s(" (2019-2023)"),Ut=c(),pe=a("h2"),Ve=a("a"),Mr=s("Certifications"),Wt=c(),te=a("ul"),Ee=a("li"),Zr=s("Certified  "),ut=a("strong"),jr=s("Cyber Security"),zr=s(" by ISC2 [2023]"),Kr=c(),be=a("li"),Qr=s("Certified "),ht=a("strong"),Jr=s("eCPPTv2"),qr=s(" (Certified Professional Penetration Tester) [2023]"),Mt=c(),Se=a("h2"),Ue=a("a"),$r=s("Acheivements"),Zt=c(),D=a("ul"),ye=a("li"),Xr=s("Winner in "),dt=a("strong"),Yr=s("Digital Pakistan Cyber Security Hackathon"),ea=s(" Capture the Flag 2023"),ta=c(),ke=a("li"),ra=s("27h Place in "),vt=a("strong"),aa=s("Blackhat MEA 23"),la=s(" Capture the Flag (2023)"),oa=c(),Ce=a("li"),sa=s("2nd Place in "),gt=a("strong"),ia=s("Digital Pakistan Cyber Security Hackathon"),na=s(" organized by MoITT and IGNITE, on-site in Islamabad (2021) [Network attacks and Exploitation]"),fa=c(),Ae=a("li"),ca=s("3rd Place in "),_t=a("strong"),ua=s("Digital Pakistan Cyber Security Hackathon"),ha=s(" organized by MoITT and IGNITE, on-site in Islamabad (2021) [Speed Programming]"),da=c(),Ie=a("li"),va=s("Awarded with "),mt=a("strong"),ga=s("Top Rated Plus"),_a=s(" badge on Upwork for bringing in a good value."),jt=c(),Te=a("h2"),We=a("a"),ma=s("Projects"),zt=c(),G=a("ul"),Me=a("li"),pt=a("strong"),re=a("a"),pa=s("WiFiBroot"),Ea=s(": A WiFi Pentest utility."),ba=c(),Ze=a("li"),Et=a("strong"),ae=a("a"),Sa=s("Subrake"),ya=s(": A Powerful subdomain enumeration & takeover assessment toolkit."),ka=c(),je=a("li"),bt=a("strong"),le=a("a"),Ca=s("SillyRAT"),Aa=s(": A cross platform python based RAT for getting reverse connections."),Ia=c(),ze=a("li"),St=a("strong"),oe=a("a"),Ta=s("WiFiJammer"),wa=s(": A Scapy based CLI tool to jam nearby wireless devices."),Pa=c(),Ke=a("li"),yt=a("strong"),se=a("a"),La=s("SecureLinkCargos"),Ra=s(": A Web portal for a Shipping company."),Oa=c(),Qe=a("li"),kt=a("strong"),ie=a("a"),Na=s("Locohunt"),Ga=s(": A scanner for looking secrets in files and folders."),Kt=c(),we=a("h2"),Je=a("a"),xa=s("Volunteering and Startups"),Qt=c(),M=a("ul"),ne=a("li"),Ct=a("strong"),Da=s("Co Founder"),Fa=s(" at "),At=a("strong"),fe=a("a"),Ba=s("AirOverflow"),Ha=s(" (2022-2023)"),Va=c(),qe=a("li"),It=a("strong"),Ua=s("Coding Lead"),Wa=s(" at Air University Cyber Security Society."),Ma=c(),$e=a("li"),Tt=a("strong"),Za=s("Vice President"),ja=s(" at Air university Bits & Bytes Society."),Jt=c(),Pe=a("h2"),Xe=a("a"),za=s("Contact"),qt=c(),Z=a("ul"),Le=a("li"),wt=a("strong"),Ka=s("Email"),Qa=s(": "),Ye=a("a"),Ja=s("me@shameerkashif.me"),qa=c(),Re=a("li"),Pt=a("strong"),$a=s("Discord"),Xa=s(": "),et=a("a"),Ya=s("hash3liZer"),el=c(),Oe=a("li"),Lt=a("strong"),tl=s("Website"),rl=s(": "),ce=a("a"),al=s("https://shameerkashif.me"),this.h()},l(o){Vo(f.$$.fragment,o),h=u(o),d=l(o,"HR",{}),m=u(o),p=l(o,"H2",{id:!0});var g=r(p);E=l(g,"A",{href:!0});var Rt=r(E);I=i(Rt,"Skills"),Rt.forEach(t),g.forEach(t),C=u(o),v=l(o,"UL",{});var j=r(v);T=l(j,"LI",{});var ll=r(T);P=l(ll,"STRONG",{});var yl=r(P);H=i(yl,"Cyber Security"),yl.forEach(t),L=i(ll,": AD Exploitation, Binary, Web Exploitation, Penetration Testing, Code Review, Black Box, Smart Contracts"),ll.forEach(t),F=u(j),R=l(j,"LI",{});var ol=r(R);N=l(ol,"STRONG",{});var kl=r(N);B=i(kl,"CI/CD"),kl.forEach(t),O=i(ol,": Terraform, Ansible, Vagrant, Snyk, Docker, CirlceCI, Github Actions, Kubernetes, SonarQube"),ol.forEach(t),A=u(j),y=l(j,"LI",{});var sl=r(y);V=l(sl,"STRONG",{});var Cl=r(V);w=i(Cl,"Programming Languages"),Cl.forEach(t),b=i(sl,": Python 3/2, Javascript, Typescript, C/C++, Bash, Powershell, HTML5/CSS, Innosetup, SQL"),sl.forEach(t),k=u(j),Q=l(j,"LI",{});var il=r(Q);q=l(il,"STRONG",{});var Al=r(q);Ne=i(Al,"Tools & Frameworks"),Al.forEach(t),Ge=i(il,": Django, React, Next, FastAPI, DRF, MySQL, PostgreSQL,"),il.forEach(t),ur=u(j),xe=l(j,"LI",{});var nl=r(xe);lt=l(nl,"STRONG",{});var Il=r(lt);hr=i(Il,"Platforms & Cloud"),Il.forEach(t),dr=i(nl,": Openstack, AWS, Google Cloud, DigitalOcean, Linux, Kali, WinAPI"),nl.forEach(t),j.forEach(t),Ft=u(o),ue=l(o,"H2",{id:!0});var Tl=r(ue);De=l(Tl,"A",{href:!0});var wl=r(De);vr=i(wl,"Experience"),wl.forEach(t),Tl.forEach(t),Bt=u(o),x=l(o,"UL",{});var z=r(x);$=l(z,"LI",{});var Ot=r($);ot=l(Ot,"STRONG",{});var Pl=r(ot);gr=i(Pl,"Application Security Engineer (Appsec & DevSecOps)"),Pl.forEach(t),_r=i(Ot," at "),he=l(Ot,"A",{href:!0,target:!0});var Ll=r(he);mr=i(Ll,"Trustline"),Ll.forEach(t),pr=i(Ot," Full time (Oct 2023 - Present) [Riyadh, KSA / Remote]"),Ot.forEach(t),Er=u(z),X=l(z,"LI",{});var Nt=r(X);st=l(Nt,"STRONG",{});var Rl=r(st);br=i(Rl,"Cyber Security Specialist & DevOps"),Rl.forEach(t),Sr=i(Nt," at "),de=l(Nt,"A",{href:!0,target:!0});var Ol=r(de);yr=i(Ol,"The COZM"),Ol.forEach(t),kr=i(Nt," Contract (July 2023 - Present) [London, United Kingdom / Remote]"),Nt.forEach(t),Cr=u(z),Y=l(z,"LI",{});var Gt=r(Y);it=l(Gt,"STRONG",{});var Nl=r(it);Ar=i(Nl,"DevSecOps Engineer"),Nl.forEach(t),Ir=i(Gt," at "),ve=l(Gt,"A",{href:!0,target:!0});var Gl=r(ve);Tr=i(Gl,"SNSkies"),Gl.forEach(t),wr=i(Gt," Full Time (Dec 2021 - Oct 2023) [Islamabad / Onsite]"),Gt.forEach(t),Pr=u(z),Fe=l(z,"LI",{});var fl=r(Fe);nt=l(fl,"STRONG",{});var xl=r(nt);Lr=i(xl,"Full Stack Engineer (Cyber Security)"),xl.forEach(t),Rr=i(fl," Contract for a Cyber Security Project (2020 - 2022) [Sao Palo, Brazil / Remote]"),fl.forEach(t),Or=u(z),ee=l(z,"LI",{});var xt=r(ee);ft=l(xt,"STRONG",{});var Dl=r(ft);Nr=i(Dl,"Full Stack & Cyber Security"),Dl.forEach(t),Gr=i(xt," at "),ge=l(xt,"A",{href:!0,target:!0});var Fl=r(ge);xr=i(Fl,"Upwork"),Fl.forEach(t),Dr=i(xt," Freelance (2019 - Present) [Islamabad]"),xt.forEach(t),z.forEach(t),Ht=u(o),_e=l(o,"H2",{id:!0});var Bl=r(_e);Be=l(Bl,"A",{href:!0});var Hl=r(Be);Fr=i(Hl,"Education"),Hl.forEach(t),Bl.forEach(t),Vt=u(o),He=l(o,"UL",{});var Vl=r(He);J=l(Vl,"LI",{});var tt=r(J);Br=i(tt,"Bachelors in "),ct=l(tt,"STRONG",{});var Ul=r(ct);Hr=i(Ul,"Cyber Security"),Ul.forEach(t),Vr=i(tt," from "),me=l(tt,"A",{href:!0,target:!0});var Wl=r(me);Ur=i(Wl,"Air University, Islamabad"),Wl.forEach(t),Wr=i(tt," (2019-2023)"),tt.forEach(t),Vl.forEach(t),Ut=u(o),pe=l(o,"H2",{id:!0});var Ml=r(pe);Ve=l(Ml,"A",{href:!0});var Zl=r(Ve);Mr=i(Zl,"Certifications"),Zl.forEach(t),Ml.forEach(t),Wt=u(o),te=l(o,"UL",{});var Xt=r(te);Ee=l(Xt,"LI",{});var Yt=r(Ee);Zr=i(Yt,"Certified  "),ut=l(Yt,"STRONG",{});var jl=r(ut);jr=i(jl,"Cyber Security"),jl.forEach(t),zr=i(Yt," by ISC2 [2023]"),Yt.forEach(t),Kr=u(Xt),be=l(Xt,"LI",{});var er=r(be);Qr=i(er,"Certified "),ht=l(er,"STRONG",{});var zl=r(ht);Jr=i(zl,"eCPPTv2"),zl.forEach(t),qr=i(er," (Certified Professional Penetration Tester) [2023]"),er.forEach(t),Xt.forEach(t),Mt=u(o),Se=l(o,"H2",{id:!0});var Kl=r(Se);Ue=l(Kl,"A",{href:!0});var Ql=r(Ue);$r=i(Ql,"Acheivements"),Ql.forEach(t),Kl.forEach(t),Zt=u(o),D=l(o,"UL",{});var K=r(D);ye=l(K,"LI",{});var tr=r(ye);Xr=i(tr,"Winner in "),dt=l(tr,"STRONG",{});var Jl=r(dt);Yr=i(Jl,"Digital Pakistan Cyber Security Hackathon"),Jl.forEach(t),ea=i(tr," Capture the Flag 2023"),tr.forEach(t),ta=u(K),ke=l(K,"LI",{});var rr=r(ke);ra=i(rr,"27h Place in "),vt=l(rr,"STRONG",{});var ql=r(vt);aa=i(ql,"Blackhat MEA 23"),ql.forEach(t),la=i(rr," Capture the Flag (2023)"),rr.forEach(t),oa=u(K),Ce=l(K,"LI",{});var ar=r(Ce);sa=i(ar,"2nd Place in "),gt=l(ar,"STRONG",{});var $l=r(gt);ia=i($l,"Digital Pakistan Cyber Security Hackathon"),$l.forEach(t),na=i(ar," organized by MoITT and IGNITE, on-site in Islamabad (2021) [Network attacks and Exploitation]"),ar.forEach(t),fa=u(K),Ae=l(K,"LI",{});var lr=r(Ae);ca=i(lr,"3rd Place in "),_t=l(lr,"STRONG",{});var Xl=r(_t);ua=i(Xl,"Digital Pakistan Cyber Security Hackathon"),Xl.forEach(t),ha=i(lr," organized by MoITT and IGNITE, on-site in Islamabad (2021) [Speed Programming]"),lr.forEach(t),da=u(K),Ie=l(K,"LI",{});var or=r(Ie);va=i(or,"Awarded with "),mt=l(or,"STRONG",{});var Yl=r(mt);ga=i(Yl,"Top Rated Plus"),Yl.forEach(t),_a=i(or," badge on Upwork for bringing in a good value."),or.forEach(t),K.forEach(t),jt=u(o),Te=l(o,"H2",{id:!0});var eo=r(Te);We=l(eo,"A",{href:!0});var to=r(We);ma=i(to,"Projects"),to.forEach(t),eo.forEach(t),zt=u(o),G=l(o,"UL",{});var U=r(G);Me=l(U,"LI",{});var cl=r(Me);pt=l(cl,"STRONG",{});var ro=r(pt);re=l(ro,"A",{href:!0,rel:!0,target:!0});var ao=r(re);pa=i(ao,"WiFiBroot"),ao.forEach(t),ro.forEach(t),Ea=i(cl,": A WiFi Pentest utility."),cl.forEach(t),ba=u(U),Ze=l(U,"LI",{});var ul=r(Ze);Et=l(ul,"STRONG",{});var lo=r(Et);ae=l(lo,"A",{href:!0,rel:!0,target:!0});var oo=r(ae);Sa=i(oo,"Subrake"),oo.forEach(t),lo.forEach(t),ya=i(ul,": A Powerful subdomain enumeration & takeover assessment toolkit."),ul.forEach(t),ka=u(U),je=l(U,"LI",{});var hl=r(je);bt=l(hl,"STRONG",{});var so=r(bt);le=l(so,"A",{href:!0,rel:!0,target:!0});var io=r(le);Ca=i(io,"SillyRAT"),io.forEach(t),so.forEach(t),Aa=i(hl,": A cross platform python based RAT for getting reverse connections."),hl.forEach(t),Ia=u(U),ze=l(U,"LI",{});var dl=r(ze);St=l(dl,"STRONG",{});var no=r(St);oe=l(no,"A",{href:!0,rel:!0,target:!0});var fo=r(oe);Ta=i(fo,"WiFiJammer"),fo.forEach(t),no.forEach(t),wa=i(dl,": A Scapy based CLI tool to jam nearby wireless devices."),dl.forEach(t),Pa=u(U),Ke=l(U,"LI",{});var vl=r(Ke);yt=l(vl,"STRONG",{});var co=r(yt);se=l(co,"A",{href:!0,rel:!0,target:!0});var uo=r(se);La=i(uo,"SecureLinkCargos"),uo.forEach(t),co.forEach(t),Ra=i(vl,": A Web portal for a Shipping company."),vl.forEach(t),Oa=u(U),Qe=l(U,"LI",{});var gl=r(Qe);kt=l(gl,"STRONG",{});var ho=r(kt);ie=l(ho,"A",{href:!0,rel:!0,target:!0});var vo=r(ie);Na=i(vo,"Locohunt"),vo.forEach(t),ho.forEach(t),Ga=i(gl,": A scanner for looking secrets in files and folders."),gl.forEach(t),U.forEach(t),Kt=u(o),we=l(o,"H2",{id:!0});var go=r(we);Je=l(go,"A",{href:!0});var _o=r(Je);xa=i(_o,"Volunteering and Startups"),_o.forEach(t),go.forEach(t),Qt=u(o),M=l(o,"UL",{});var rt=r(M);ne=l(rt,"LI",{});var Dt=r(ne);Ct=l(Dt,"STRONG",{});var mo=r(Ct);Da=i(mo,"Co Founder"),mo.forEach(t),Fa=i(Dt," at "),At=l(Dt,"STRONG",{});var po=r(At);fe=l(po,"A",{href:!0,rel:!0,target:!0});var Eo=r(fe);Ba=i(Eo,"AirOverflow"),Eo.forEach(t),po.forEach(t),Ha=i(Dt," (2022-2023)"),Dt.forEach(t),Va=u(rt),qe=l(rt,"LI",{});var _l=r(qe);It=l(_l,"STRONG",{});var bo=r(It);Ua=i(bo,"Coding Lead"),bo.forEach(t),Wa=i(_l," at Air University Cyber Security Society."),_l.forEach(t),Ma=u(rt),$e=l(rt,"LI",{});var ml=r($e);Tt=l(ml,"STRONG",{});var So=r(Tt);Za=i(So,"Vice President"),So.forEach(t),ja=i(ml," at Air university Bits & Bytes Society."),ml.forEach(t),rt.forEach(t),Jt=u(o),Pe=l(o,"H2",{id:!0});var yo=r(Pe);Xe=l(yo,"A",{href:!0});var ko=r(Xe);za=i(ko,"Contact"),ko.forEach(t),yo.forEach(t),qt=u(o),Z=l(o,"UL",{});var at=r(Z);Le=l(at,"LI",{});var sr=r(Le);wt=l(sr,"STRONG",{});var Co=r(wt);Ka=i(Co,"Email"),Co.forEach(t),Qa=i(sr,": "),Ye=l(sr,"A",{href:!0});var Ao=r(Ye);Ja=i(Ao,"me@shameerkashif.me"),Ao.forEach(t),sr.forEach(t),qa=u(at),Re=l(at,"LI",{});var ir=r(Re);Pt=l(ir,"STRONG",{});var Io=r(Pt);$a=i(Io,"Discord"),Io.forEach(t),Xa=i(ir,": "),et=l(ir,"A",{href:!0});var To=r(et);Ya=i(To,"hash3liZer"),To.forEach(t),ir.forEach(t),el=u(at),Oe=l(at,"LI",{});var nr=r(Oe);Lt=l(nr,"STRONG",{});var wo=r(Lt);tl=i(wo,"Website"),wo.forEach(t),rl=i(nr,": "),ce=l(nr,"A",{href:!0,rel:!0,target:!0});var Po=r(ce);al=i(Po,"https://shameerkashif.me"),Po.forEach(t),nr.forEach(t),at.forEach(t),this.h()},h(){n(E,"href","#skills"),n(p,"id","skills"),n(De,"href","#experience"),n(ue,"id","experience"),n(he,"href","https://trustline.sa"),n(he,"target","_blank"),n(de,"href","https://thecozm.com/"),n(de,"target","_blank"),n(ve,"href","#k"),n(ve,"target","_blank"),n(ge,"href","https://upwork.com"),n(ge,"target","_blank"),n(Be,"href","#education"),n(_e,"id","education"),n(me,"href","https:/au.edu.pk"),n(me,"target","_blank"),n(Ve,"href","#certifications"),n(pe,"id","certifications"),n(Ue,"href","#acheivements"),n(Se,"id","acheivements"),n(We,"href","#projects"),n(Te,"id","projects"),n(re,"href","https://github.com/hash3liZer/wifibroot"),n(re,"rel","nofollow noopener noreferrer external"),n(re,"target","_blank"),n(ae,"href","https://github.com/hash3liZer/subrake"),n(ae,"rel","nofollow noopener noreferrer external"),n(ae,"target","_blank"),n(le,"href","https://github.com/hash3liZer/sillyrat"),n(le,"rel","nofollow noopener noreferrer external"),n(le,"target","_blank"),n(oe,"href","https://github.com/hash3liZer/wifijammer"),n(oe,"rel","nofollow noopener noreferrer external"),n(oe,"target","_blank"),n(se,"href","https://securelinkcargos.com"),n(se,"rel","nofollow noopener noreferrer external"),n(se,"target","_blank"),n(ie,"href","https://github.com/hash3liZer/locohunt"),n(ie,"rel","nofollow noopener noreferrer external"),n(ie,"target","_blank"),n(Je,"href","#volunteering-and-startups"),n(we,"id","volunteering-and-startups"),n(fe,"href","https://airoverflow.com"),n(fe,"rel","nofollow noopener noreferrer external"),n(fe,"target","_blank"),n(Xe,"href","#contact"),n(Pe,"id","contact"),n(Ye,"href","mailto:me@shameerkashif.me"),n(et,"href","#"),n(ce,"href","https://shameerkashif.me"),n(ce,"rel","nofollow noopener noreferrer external"),n(ce,"target","_blank")},m(o,g){Uo(f,o,g),_(o,h,g),_(o,d,g),_(o,m,g),_(o,p,g),e(p,E),e(E,I),_(o,C,g),_(o,v,g),e(v,T),e(T,P),e(P,H),e(T,L),e(v,F),e(v,R),e(R,N),e(N,B),e(R,O),e(v,A),e(v,y),e(y,V),e(V,w),e(y,b),e(v,k),e(v,Q),e(Q,q),e(q,Ne),e(Q,Ge),e(v,ur),e(v,xe),e(xe,lt),e(lt,hr),e(xe,dr),_(o,Ft,g),_(o,ue,g),e(ue,De),e(De,vr),_(o,Bt,g),_(o,x,g),e(x,$),e($,ot),e(ot,gr),e($,_r),e($,he),e(he,mr),e($,pr),e(x,Er),e(x,X),e(X,st),e(st,br),e(X,Sr),e(X,de),e(de,yr),e(X,kr),e(x,Cr),e(x,Y),e(Y,it),e(it,Ar),e(Y,Ir),e(Y,ve),e(ve,Tr),e(Y,wr),e(x,Pr),e(x,Fe),e(Fe,nt),e(nt,Lr),e(Fe,Rr),e(x,Or),e(x,ee),e(ee,ft),e(ft,Nr),e(ee,Gr),e(ee,ge),e(ge,xr),e(ee,Dr),_(o,Ht,g),_(o,_e,g),e(_e,Be),e(Be,Fr),_(o,Vt,g),_(o,He,g),e(He,J),e(J,Br),e(J,ct),e(ct,Hr),e(J,Vr),e(J,me),e(me,Ur),e(J,Wr),_(o,Ut,g),_(o,pe,g),e(pe,Ve),e(Ve,Mr),_(o,Wt,g),_(o,te,g),e(te,Ee),e(Ee,Zr),e(Ee,ut),e(ut,jr),e(Ee,zr),e(te,Kr),e(te,be),e(be,Qr),e(be,ht),e(ht,Jr),e(be,qr),_(o,Mt,g),_(o,Se,g),e(Se,Ue),e(Ue,$r),_(o,Zt,g),_(o,D,g),e(D,ye),e(ye,Xr),e(ye,dt),e(dt,Yr),e(ye,ea),e(D,ta),e(D,ke),e(ke,ra),e(ke,vt),e(vt,aa),e(ke,la),e(D,oa),e(D,Ce),e(Ce,sa),e(Ce,gt),e(gt,ia),e(Ce,na),e(D,fa),e(D,Ae),e(Ae,ca),e(Ae,_t),e(_t,ua),e(Ae,ha),e(D,da),e(D,Ie),e(Ie,va),e(Ie,mt),e(mt,ga),e(Ie,_a),_(o,jt,g),_(o,Te,g),e(Te,We),e(We,ma),_(o,zt,g),_(o,G,g),e(G,Me),e(Me,pt),e(pt,re),e(re,pa),e(Me,Ea),e(G,ba),e(G,Ze),e(Ze,Et),e(Et,ae),e(ae,Sa),e(Ze,ya),e(G,ka),e(G,je),e(je,bt),e(bt,le),e(le,Ca),e(je,Aa),e(G,Ia),e(G,ze),e(ze,St),e(St,oe),e(oe,Ta),e(ze,wa),e(G,Pa),e(G,Ke),e(Ke,yt),e(yt,se),e(se,La),e(Ke,Ra),e(G,Oa),e(G,Qe),e(Qe,kt),e(kt,ie),e(ie,Na),e(Qe,Ga),_(o,Kt,g),_(o,we,g),e(we,Je),e(Je,xa),_(o,Qt,g),_(o,M,g),e(M,ne),e(ne,Ct),e(Ct,Da),e(ne,Fa),e(ne,At),e(At,fe),e(fe,Ba),e(ne,Ha),e(M,Va),e(M,qe),e(qe,It),e(It,Ua),e(qe,Wa),e(M,Ma),e(M,$e),e($e,Tt),e(Tt,Za),e($e,ja),_(o,Jt,g),_(o,Pe,g),e(Pe,Xe),e(Xe,za),_(o,qt,g),_(o,Z,g),e(Z,Le),e(Le,wt),e(wt,Ka),e(Le,Qa),e(Le,Ye),e(Ye,Ja),e(Z,qa),e(Z,Re),e(Re,Pt),e(Pt,$a),e(Re,Xa),e(Re,et),e(et,Ya),e(Z,el),e(Z,Oe),e(Oe,Lt),e(Lt,tl),e(Oe,rl),e(Oe,ce),e(ce,al),$t=!0},p(o,g){const Rt={};g&2&&(Rt.$$scope={dirty:g,ctx:o}),f.$set(Rt)},i(o){$t||(bl(f.$$.fragment,o),$t=!0)},o(o){Sl(f.$$.fragment,o),$t=!1},d(o){Wo(f,o),o&&t(h),o&&t(d),o&&t(m),o&&t(p),o&&t(C),o&&t(v),o&&t(Ft),o&&t(ue),o&&t(Bt),o&&t(x),o&&t(Ht),o&&t(_e),o&&t(Vt),o&&t(He),o&&t(Ut),o&&t(pe),o&&t(Wt),o&&t(te),o&&t(Mt),o&&t(Se),o&&t(Zt),o&&t(D),o&&t(jt),o&&t(Te),o&&t(zt),o&&t(G),o&&t(Kt),o&&t(we),o&&t(Qt),o&&t(M),o&&t(Jt),o&&t(Pe),o&&t(qt),o&&t(Z)}}}function ts(S){let f,h;const d=[S[0],xo];let m={$$slots:{default:[es]},$$scope:{ctx:S}};for(let p=0;p<d.length;p+=1)m=El(m,d[p]);return f=new Jo({props:m}),{c(){Ho(f.$$.fragment)},l(p){Vo(f.$$.fragment,p)},m(p,E){Uo(f,p,E),h=!0},p(p,[E]){const I=E&1?Ko(d,[E&1&&Ro(p[0]),E&0&&Ro(xo)]):{};E&2&&(I.$$scope={dirty:E,ctx:p}),f.$set(I)},i(p){h||(bl(f.$$.fragment,p),h=!0)},o(p){Sl(f.$$.fragment,p),h=!1},d(p){Wo(f,p)}}}const xo={title:"Resume",created:"2022-05-06T00:00:00.000Z",flags:["unlisted"],updated:"2024-08-18T21:46:54.110Z",slug:"/resume/+page.svelte.md",path:"/resume",toc:[{depth:2,title:"Skills",slug:"skills"},{depth:2,title:"Experience",slug:"experience"},{depth:2,title:"Education",slug:"education"},{depth:2,title:"Certifications",slug:"certifications"},{depth:2,title:"Acheivements",slug:"acheivements"},{depth:2,title:"Projects",slug:"projects"},{depth:2,title:"Volunteering and Startups",slug:"volunteering-and-startups"},{depth:2,title:"Contact",slug:"contact"}]};function rs(S,f,h){return S.$$set=d=>{h(0,f=El(El({},f),Oo(d)))},f=Oo(f),[f]}class ss extends Do{constructor(f){super(),Fo(this,f,rs,ts,Bo,{})}}export{ss as component};
