import{S as Dl,i as El,s as fl,U as Re,y as vl,z as hl,A as ul,V as wl,W as pl,g as ml,d as _l,B as Cl,X as rl,k as t,q as a,a as d,Y as xe,e as Fl,l as n,m as p,r as o,h as l,c as y,Z as ke,n as f,T as Al,b as F,D as e,E as gl}from"../chunks/index.725d15e1.js";import{P as bl}from"../chunks/post_layout.16d8f082.js";function Tl(S){let i,E,C,A,c,h,g,Ps,Os,G,Bs,Ls,Y,Ms,Ss,Es,w,qs,N,Hs,Is,z,$s,Us,fs,R,q,js,vs,P,H,Ws,hs,m,Vs,X,Zs,Gs,J,Ys,Ns,us,K,il=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" bash="true"><div class="language-id">bash</div><div class='code-container'><code><div class='line'><span style="color: #EEFFFF">$ ngrok http 8000</span></div></code></div></pre>`,Q,I,zs,ws,b,Pe,ms,O,$,Xs,_s,D,Js,ss,Ks,Qs,es,se,ee,ls,le,ae,as,oe,te,os,ne,pe,Cs,ts,dl=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" javascript="true"><div class="language-id">javascript</div><div class='code-container'><code><div class='line'><span style="color: #546E7A">// Listen for messages from the extension</span></div><div class='line'><span style="color: #EEFFFF">window</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">addEventListener</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">message</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">event</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #89DDFF">    </span><span style="color: #546E7A">// Check if the message is from the extension</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">event</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">source</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">window</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&&</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">event</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">data</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">action</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">populatePassword</span><span style="color: #89DDFF">"</span><span style="color: #F07178">) </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #89DDFF">        </span><span style="color: #546E7A">// Find the password input field</span></div><div class='line'><span style="color: #F07178">        </span><span style="color: #C792EA">var</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">passwordField</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">document</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">querySelector</span><span style="color: #F07178">(</span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">input[type="password"]</span><span style="color: #89DDFF">'</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">        </span><span style="color: #546E7A">// Populate the password field with the specified string</span></div><div class='line'><span style="color: #F07178">        </span><span style="color: #89DDFF">if</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">passwordField</span><span style="color: #F07178">) </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">            </span><span style="color: #EEFFFF">passwordField</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">value</span><span style="color: #F07178"> </span><span style="color: #89DDFF">=</span><span style="color: #F07178"> (</span><span style="color: #EEFFFF">event</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">data</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">url</span><span style="color: #F07178"> </span><span style="color: #89DDFF">===</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">http://flag</span><span style="color: #89DDFF">"</span><span style="color: #F07178">) </span><span style="color: #89DDFF">?</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">BSidevTLV2023&#123;TheFlag&#125;</span><span style="color: #89DDFF">"</span><span style="color: #F07178"> </span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">MyDefaultPassword</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #F07178">        </span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">&#125;</span></div><div class='line'><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></div><div class='line'></div><div class='line'><span style="color: #546E7A">// Send a message to populate the password field on page load</span></div><div class='line'><span style="color: #EEFFFF">window</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">addEventListener</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">load</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">()</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #EEFFFF">window</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">postMessage</span><span style="color: #F07178">(</span><span style="color: #89DDFF">&#123;</span></div><div class='line'><span style="color: #F07178">        action</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">populatePassword</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #F07178">        url</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #EEFFFF">window</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">location</span><span style="color: #89DDFF">.</span><span style="color: #EEFFFF">href</span><span style="color: #89DDFF">,</span></div><div class='line'><span style="color: #F07178">        password</span><span style="color: #89DDFF">:</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">YourPassword</span><span style="color: #89DDFF">"</span><span style="color: #F07178"> </span><span style="color: #546E7A">// Replace with the desired password</span></div><div class='line'><span style="color: #F07178">    </span><span style="color: #89DDFF">&#125;,</span><span style="color: #F07178"> </span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">*</span><span style="color: #89DDFF">"</span><span style="color: #F07178">)</span><span style="color: #89DDFF">;</span></div><div class='line'><span style="color: #89DDFF">&#125;</span><span style="color: #EEFFFF">)</span><span style="color: #89DDFF">;</span></div></code></div></pre>`,ns,B,U,re,As,j,Fe,gs,_,L,ce,ps,ie,de,ye,M,De,rs,Ee,fe,ve,u,he,Fs,ue,we,cs,me,_e,is,Ce,Ae,bs,T,ge,ds,be,Te,Ts,ys,yl=`<pre class="shiki material-default" style="background-color: #263238; color: #EEFFFF" python="true"><div class="language-id">python</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> http</span><span style="color: #89DDFF">.</span><span style="color: #F07178">server</span></div><div class='line'><span style="color: #89DDFF">import</span><span style="color: #EEFFFF"> socketserver</span></div><div class='line'></div><div class='line'><span style="color: #EEFFFF">PORT </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #F78C6C">8000</span></div><div class='line'></div><div class='line'><span style="color: #EEFFFF">html_content </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">r</span><span style="color: #89DDFF">'''</span></div><div class='line'><span style="color: #C3E88D">PAYLOAD HERE</span></div><div class='line'><span style="color: #89DDFF">'''</span></div><div class='line'></div><div class='line'><span style="color: #546E7A"># Request Handler</span></div><div class='line'><span style="color: #C792EA">class</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">MyHandler</span><span style="color: #89DDFF">(</span><span style="color: #FFCB6B">http</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">server</span><span style="color: #89DDFF">.</span><span style="color: #FFCB6B">BaseHTTPRequestHandler</span><span style="color: #89DDFF">):</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #C792EA">def</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">do_GET</span><span style="color: #89DDFF">(</span><span style="color: #EEFFFF">self</span><span style="color: #89DDFF">):</span></div><div class='line'><span style="color: #EEFFFF">        self</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send_response</span><span style="color: #89DDFF">(</span><span style="color: #F78C6C">200</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">        self</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">send_header</span><span style="color: #89DDFF">(</span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">Content-type</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> </span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">text/html</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">        self</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">end_headers</span><span style="color: #89DDFF">()</span></div><div class='line'><span style="color: #EEFFFF">        self</span><span style="color: #89DDFF">.</span><span style="color: #F07178">wfile</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">write</span><span style="color: #89DDFF">(</span><span style="color: #82AAFF">html_content</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">encode</span><span style="color: #89DDFF">(</span><span style="color: #89DDFF">'</span><span style="color: #C3E88D">utf-8</span><span style="color: #89DDFF">'</span><span style="color: #89DDFF">))</span></div><div class='line'></div><div class='line'><span style="color: #89DDFF">with</span><span style="color: #EEFFFF"> socketserver</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">TCPServer</span><span style="color: #89DDFF">((</span><span style="color: #89DDFF">"</span><span style="color: #C3E88D">0.0.0.0</span><span style="color: #89DDFF">"</span><span style="color: #89DDFF">,</span><span style="color: #82AAFF"> PORT</span><span style="color: #89DDFF">),</span><span style="color: #82AAFF"> MyHandler</span><span style="color: #89DDFF">)</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">as</span><span style="color: #EEFFFF"> httpd</span><span style="color: #89DDFF">:</span></div><div class='line'><span style="color: #EEFFFF">    </span><span style="color: #82AAFF">print</span><span style="color: #89DDFF">(</span><span style="color: #C792EA">f</span><span style="color: #C3E88D">"Serving at port </span><span style="color: #82AAFF">&#123;PORT&#125;</span><span style="color: #C3E88D">"</span><span style="color: #89DDFF">)</span></div><div class='line'><span style="color: #EEFFFF">    httpd</span><span style="color: #89DDFF">.</span><span style="color: #82AAFF">serve_forever</span><span style="color: #89DDFF">()</span></div></code></div></pre>`,Ds;return{c(){i=t("h1"),E=t("a"),C=a("Introducton"),A=d(),c=t("p"),h=a("This writeup is for the "),g=t("strong"),Ps=a("Browselicious"),Os=a(" challenge from "),G=t("strong"),Bs=a("Misc"),Ls=a(" category in BSidesTLV CTF held online. The challenge had an external link and a "),Y=t("code"),Ms=a("js"),Ss=a(" file that contained browser extension code. The external link was a simple website that had a URL Input field. The URL was probably being processed in a browser on the backend with the extension installed."),Es=d(),w=t("p"),qs=a("To complete the challenge, one had to create a document with a "),N=t("code"),Hs=a('input[type="password"]'),Is=a(" field and capture the value of this field when populated by the extension itself. But also, we needed to exploit a race condition here by doing a "),z=t("code"),$s=a("postMessage"),Us=a(" before the extension itself."),fs=d(),R=t("h1"),q=t("a"),js=a("Writeup"),vs=d(),P=t("h3"),H=t("a"),Ws=a("Server Request"),hs=d(),m=t("p"),Vs=a("Right after i visited the page, it said "),X=t("em"),Zs=a("Our Extension is coming soon"),Gs=a(" and there was an input field that accepted a URL. So, right away i fired up "),J=t("code"),Ys=a("ngrok"),Ns=a(" without actually running anything for the proxy and checked if i received anything back."),us=d(),K=new xe(!1),Q=d(),I=t("p"),zs=a("And i got requests back on terminal."),ws=d(),b=t("img"),ms=d(),O=t("h3"),$=t("a"),Xs=a("Code Review"),_s=d(),D=t("p"),Js=a("Then i opened the "),ss=t("code"),Ks=a("js"),Qs=a(" file and the code has 2 main events: "),es=t("code"),se=a("onMessage"),ee=a(" and "),ls=t("code"),le=a("onLoad"),ae=a(". The first event checks for a couple conditions and populates data in the "),as=t("code"),oe=a('input[type="password"]'),te=a(" field. The second event simply fires a "),os=t("code"),ne=a("postMessage"),pe=a(" to the current window with some data."),Cs=d(),ts=new xe(!1),ns=d(),B=t("h3"),U=t("a"),re=a("Exploit"),As=d(),j=t("p"),Fe=a("To exploit the challenge, we need to implement 3 things in the PoC:"),gs=d(),_=t("ul"),L=t("li"),ce=a("Create a web page with "),ps=t("code"),ie=a('input[type="password"]'),de=a(" form field which will accept the data."),ye=d(),M=t("li"),De=a("Exploit the Race condition by setting an interval in "),rs=t("em"),Ee=a("milliseconds"),fe=a("."),ve=d(),u=t("li"),he=a("In the "),Fs=t("code"),ue=a("postMessage"),we=a(", set the value of "),cs=t("code"),me=a("url"),_e=a(" to "),is=t("code"),Ce=a("http://flag"),Ae=a("."),bs=d(),T=t("p"),ge=a("First setup a "),ds=t("code"),be=a("python"),Te=a(" file to act as our server:"),Ts=d(),ys=new xe(!1),Ds=Fl(),this.h()},l(s){i=n(s,"H1",{id:!0});var r=p(i);E=n(r,"A",{href:!0});var Oe=p(E);C=o(Oe,"Introducton"),Oe.forEach(l),r.forEach(l),A=y(s),c=n(s,"P",{});var x=p(c);h=o(x,"This writeup is for the "),g=n(x,"STRONG",{});var Be=p(g);Ps=o(Be,"Browselicious"),Be.forEach(l),Os=o(x," challenge from "),G=n(x,"STRONG",{});var Le=p(G);Bs=o(Le,"Misc"),Le.forEach(l),Ls=o(x," category in BSidesTLV CTF held online. The challenge had an external link and a "),Y=n(x,"CODE",{});var Me=p(Y);Ms=o(Me,"js"),Me.forEach(l),Ss=o(x," file that contained browser extension code. The external link was a simple website that had a URL Input field. The URL was probably being processed in a browser on the backend with the extension installed."),x.forEach(l),Es=y(s),w=n(s,"P",{});var W=p(w);qs=o(W,"To complete the challenge, one had to create a document with a "),N=n(W,"CODE",{});var Se=p(N);Hs=o(Se,'input[type="password"]'),Se.forEach(l),Is=o(W," field and capture the value of this field when populated by the extension itself. But also, we needed to exploit a race condition here by doing a "),z=n(W,"CODE",{});var qe=p(z);$s=o(qe,"postMessage"),qe.forEach(l),Us=o(W," before the extension itself."),W.forEach(l),fs=y(s),R=n(s,"H1",{id:!0});var He=p(R);q=n(He,"A",{href:!0});var Ie=p(q);js=o(Ie,"Writeup"),Ie.forEach(l),He.forEach(l),vs=y(s),P=n(s,"H3",{id:!0});var $e=p(P);H=n($e,"A",{href:!0});var Ue=p(H);Ws=o(Ue,"Server Request"),Ue.forEach(l),$e.forEach(l),hs=y(s),m=n(s,"P",{});var V=p(m);Vs=o(V,"Right after i visited the page, it said "),X=n(V,"EM",{});var je=p(X);Zs=o(je,"Our Extension is coming soon"),je.forEach(l),Gs=o(V," and there was an input field that accepted a URL. So, right away i fired up "),J=n(V,"CODE",{});var We=p(J);Ys=o(We,"ngrok"),We.forEach(l),Ns=o(V," without actually running anything for the proxy and checked if i received anything back."),V.forEach(l),us=y(s),K=ke(s,!1),Q=y(s),I=n(s,"P",{});var Ve=p(I);zs=o(Ve,"And i got requests back on terminal."),Ve.forEach(l),ws=y(s),b=n(s,"IMG",{width:!0,alt:!0,src:!0}),ms=y(s),O=n(s,"H3",{id:!0});var Ze=p(O);$=n(Ze,"A",{href:!0});var Ge=p($);Xs=o(Ge,"Code Review"),Ge.forEach(l),Ze.forEach(l),_s=y(s),D=n(s,"P",{});var v=p(D);Js=o(v,"Then i opened the "),ss=n(v,"CODE",{});var Ye=p(ss);Ks=o(Ye,"js"),Ye.forEach(l),Qs=o(v," file and the code has 2 main events: "),es=n(v,"CODE",{});var Ne=p(es);se=o(Ne,"onMessage"),Ne.forEach(l),ee=o(v," and "),ls=n(v,"CODE",{});var ze=p(ls);le=o(ze,"onLoad"),ze.forEach(l),ae=o(v,". The first event checks for a couple conditions and populates data in the "),as=n(v,"CODE",{});var Xe=p(as);oe=o(Xe,'input[type="password"]'),Xe.forEach(l),te=o(v," field. The second event simply fires a "),os=n(v,"CODE",{});var Je=p(os);ne=o(Je,"postMessage"),Je.forEach(l),pe=o(v," to the current window with some data."),v.forEach(l),Cs=y(s),ts=ke(s,!1),ns=y(s),B=n(s,"H3",{id:!0});var Ke=p(B);U=n(Ke,"A",{href:!0});var Qe=p(U);re=o(Qe,"Exploit"),Qe.forEach(l),Ke.forEach(l),As=y(s),j=n(s,"P",{});var sl=p(j);Fe=o(sl,"To exploit the challenge, we need to implement 3 things in the PoC:"),sl.forEach(l),gs=y(s),_=n(s,"UL",{});var Z=p(_);L=n(Z,"LI",{});var xs=p(L);ce=o(xs,"Create a web page with "),ps=n(xs,"CODE",{});var el=p(ps);ie=o(el,'input[type="password"]'),el.forEach(l),de=o(xs," form field which will accept the data."),xs.forEach(l),ye=y(Z),M=n(Z,"LI",{});var ks=p(M);De=o(ks,"Exploit the Race condition by setting an interval in "),rs=n(ks,"EM",{});var ll=p(rs);Ee=o(ll,"milliseconds"),ll.forEach(l),fe=o(ks,"."),ks.forEach(l),ve=y(Z),u=n(Z,"LI",{});var k=p(u);he=o(k,"In the "),Fs=n(k,"CODE",{});var al=p(Fs);ue=o(al,"postMessage"),al.forEach(l),we=o(k,", set the value of "),cs=n(k,"CODE",{});var ol=p(cs);me=o(ol,"url"),ol.forEach(l),_e=o(k," to "),is=n(k,"CODE",{});var tl=p(is);Ce=o(tl,"http://flag"),tl.forEach(l),Ae=o(k,"."),k.forEach(l),Z.forEach(l),bs=y(s),T=n(s,"P",{});var Rs=p(T);ge=o(Rs,"First setup a "),ds=n(Rs,"CODE",{});var nl=p(ds);be=o(nl,"python"),nl.forEach(l),Te=o(Rs," file to act as our server:"),Rs.forEach(l),Ts=y(s),ys=ke(s,!1),Ds=Fl(),this.h()},h(){f(E,"href","#introducton"),f(i,"id","introducton"),f(q,"href","#writeup"),f(R,"id","writeup"),f(H,"href","#server-request"),f(P,"id","server-request"),K.a=Q,f(b,"width","946"),f(b,"alt","image"),Al(b.src,Pe="https://github.com/hash3liZer/khatta/assets/29171692/ba40787f-c811-46ec-93a5-1a67298d9a28")||f(b,"src",Pe),f($,"href","#code-review"),f(O,"id","code-review"),ts.a=ns,f(U,"href","#exploit"),f(B,"id","exploit"),ys.a=Ds},m(s,r){F(s,i,r),e(i,E),e(E,C),F(s,A,r),F(s,c,r),e(c,h),e(c,g),e(g,Ps),e(c,Os),e(c,G),e(G,Bs),e(c,Ls),e(c,Y),e(Y,Ms),e(c,Ss),F(s,Es,r),F(s,w,r),e(w,qs),e(w,N),e(N,Hs),e(w,Is),e(w,z),e(z,$s),e(w,Us),F(s,fs,r),F(s,R,r),e(R,q),e(q,js),F(s,vs,r),F(s,P,r),e(P,H),e(H,Ws),F(s,hs,r),F(s,m,r),e(m,Vs),e(m,X),e(X,Zs),e(m,Gs),e(m,J),e(J,Ys),e(m,Ns),F(s,us,r),K.m(il,s,r),F(s,Q,r),F(s,I,r),e(I,zs),F(s,ws,r),F(s,b,r),F(s,ms,r),F(s,O,r),e(O,$),e($,Xs),F(s,_s,r),F(s,D,r),e(D,Js),e(D,ss),e(ss,Ks),e(D,Qs),e(D,es),e(es,se),e(D,ee),e(D,ls),e(ls,le),e(D,ae),e(D,as),e(as,oe),e(D,te),e(D,os),e(os,ne),e(D,pe),F(s,Cs,r),ts.m(dl,s,r),F(s,ns,r),F(s,B,r),e(B,U),e(U,re),F(s,As,r),F(s,j,r),e(j,Fe),F(s,gs,r),F(s,_,r),e(_,L),e(L,ce),e(L,ps),e(ps,ie),e(L,de),e(_,ye),e(_,M),e(M,De),e(M,rs),e(rs,Ee),e(M,fe),e(_,ve),e(_,u),e(u,he),e(u,Fs),e(Fs,ue),e(u,we),e(u,cs),e(cs,me),e(u,_e),e(u,is),e(is,Ce),e(u,Ae),F(s,bs,r),F(s,T,r),e(T,ge),e(T,ds),e(ds,be),e(T,Te),F(s,Ts,r),ys.m(yl,s,r),F(s,Ds,r)},p:gl,d(s){s&&l(i),s&&l(A),s&&l(c),s&&l(Es),s&&l(w),s&&l(fs),s&&l(R),s&&l(vs),s&&l(P),s&&l(hs),s&&l(m),s&&l(us),s&&K.d(),s&&l(Q),s&&l(I),s&&l(ws),s&&l(b),s&&l(ms),s&&l(O),s&&l(_s),s&&l(D),s&&l(Cs),s&&ts.d(),s&&l(ns),s&&l(B),s&&l(As),s&&l(j),s&&l(gs),s&&l(_),s&&l(bs),s&&l(T),s&&l(Ts),s&&l(Ds),s&&ys.d()}}}function xl(S){let i,E;const C=[S[0],cl];let A={$$slots:{default:[Tl]},$$scope:{ctx:S}};for(let c=0;c<C.length;c+=1)A=Re(A,C[c]);return i=new bl({props:A}),{c(){vl(i.$$.fragment)},l(c){hl(i.$$.fragment,c)},m(c,h){ul(i,c,h),E=!0},p(c,[h]){const g=h&1?wl(C,[h&1&&pl(c[0]),h&0&&pl(cl)]):{};h&2&&(g.$$scope={dirty:h,ctx:c}),i.$set(g)},i(c){E||(ml(i.$$.fragment,c),E=!0)},o(c){_l(i.$$.fragment,c),E=!1},d(c){Cl(i,c)}}}const cl={title:"BSidesTLV CTF 2023 Browselicious (Misc) Writeup",tags:["ctf","writeups","bsidestlv-ctf-2023"],categories:["CTF Writeups"],summary:"Writeup for Browselicious challenge (Misc) from BsidesTLV CTF 2023",created:"2023-06-28T00:00:00.000Z",lastmod:"2023-06-28T00:00:00.000Z",image:"https://github.com/hash3liZer/khatta/assets/29171692/1788ec87-fc59-49a7-a035-ec767504fb3d",flags:[],updated:"2023-06-28T19:09:59.496Z",slug:"/blog/2023/writeup-browselicious-challenge-bsidestlv-ctf/+page.md",path:"/blog/2023/writeup-browselicious-challenge-bsidestlv-ctf",toc:[{depth:1,title:"Introducton",slug:"introducton"},{depth:1,title:"Writeup",slug:"writeup"},{depth:3,title:"Server Request",slug:"server-request"},{depth:3,title:"Code Review",slug:"code-review"},{depth:3,title:"Exploit",slug:"exploit"}]};function kl(S,i,E){return S.$$set=C=>{E(0,i=Re(Re({},i),rl(C)))},i=rl(i),[i]}class Ol extends Dl{constructor(i){super(),El(this,i,kl,xl,fl,{})}}export{Ol as component};
