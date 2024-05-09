import{s as Me,b as R,h as b,p as Yl,d as n,l as E,m as a,i as V,n as F,a5 as La,a6 as ir,f as gt,Z as Xl,e as i,c,a as l,T as Jl,V as Ql,W as er,X as tr,a4 as ar,g as vt,t as w,j as h,k as L,H as ft,O as Te,Q as lr,P as cr,a7 as Oe}from"../chunks/scheduler.2tipIW4L.js";import{S as ze,i as Ke,g as ur,a as ee,c as fr,t as te,b as dt,d as ht,m as _t,e as mt}from"../chunks/index.DGUXgY3r.js";import{g as dr,a as hr}from"../chunks/arrow_right.DYZrMOtx.js";import{e as Nt}from"../chunks/each.D6YF6ztN.js";import{g as rr,a as _r,b as sr,s as nr,p as $t,n as mr,P as gr,L as vr,i as wa}from"../chunks/i18n.CNuOV8YO.js";import{b as pr,i as br,g as Er}from"../chunks/entry.BbKkY_OY.js";import{m as Ut,bn as xr,bo as yr,bp as wr,bq as Lr,br as Cr,bs as Dr,bt as kr,bu as Ar,bv as Ir,bw as $r,bx as Tr,by as Mr,bz as Vr,bA as Fr,bB as Pr,bC as Sr,bD as Hr,bE as Br,bF as Nr,bG as Ur,bH as jr,aM as Rr,bI as Gr,bJ as Or,bK as Zr,bL as zr,bM as Kr,bN as qr,bO as Wr,bP as Yr,bQ as Xr,bR as Jr,bS as Qr}from"../chunks/messages.Bd37YrLn.js";/* empty css                                                      */import{a as Bl,l as es}from"../chunks/runtime.CSQbeCrW.js";function ts(o,e){return o.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:o.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}function as(o,e,s){const t=new URL(s??"/",e).pathname;return o.origin!==e.origin||!o.pathname.startsWith(t)}function ls(o,e,s,t,r){const{path:u,lang:f,dataSuffix:m,trailingSlash:d}=rr(o,{base:r.base,availableLanguageTags:r.availableLanguageTags,defaultLanguageTag:r.defaultLanguageTag}),_=_r(u,f,s,t),v=sr(_,e,s,t);return nr({path:v,base:r.base,dataSuffix:m,includeLanguage:!0,lang:e,defaultLanguageTag:r.defaultLanguageTag,prefixDefaultLanguage:r.prefixDefaultLanguage,trailingSlash:d})}const{document:xa}=dr;function Nl(o,e,s){const t=o.slice();t[2]=e[s];const r=ls(t[1].url.pathname,t[2],t[0].config.translations,t[0].config.matchers,{base:t[4],availableLanguageTags:t[0].config.runtime.availableLanguageTags,defaultLanguageTag:t[0].config.defaultLanguageTag,prefixDefaultLanguage:t[0].config.prefixDefaultLanguage});t[14]=r;const u=t[1].url.host==="sveltekit-prerender"?t[14]:new URL(t[14],new URL(t[1].url)).href;return t[15]=u,t}function Ul(o){let e,s=o[0].config.runtime.availableLanguageTags.length>=1&&jl(o);return{c(){s&&s.c(),e=R()},l(t){s&&s.l(t),e=R()},m(t,r){s&&s.m(t,r),V(t,e,r)},p(t,r){t[0].config.runtime.availableLanguageTags.length>=1?s?s.p(t,r):(s=jl(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},d(t){t&&n(e),s&&s.d(t)}}}function jl(o){let e,s=Nt(o[0].config.runtime.availableLanguageTags),t=[];for(let r=0;r<s.length;r+=1)t[r]=Rl(Nl(o,s,r));return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=R()},l(r){for(let u=0;u<t.length;u+=1)t[u].l(r);e=R()},m(r,u){for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(r,u);V(r,e,u)},p(r,u){if(u&19){s=Nt(r[0].config.runtime.availableLanguageTags);let f;for(f=0;f<s.length;f+=1){const m=Nl(r,s,f);t[f]?t[f].p(m,u):(t[f]=Rl(m),t[f].c(),t[f].m(e.parentNode,e))}for(;f<t.length;f+=1)t[f].d(1);t.length=s.length}},d(r){r&&n(e),Xl(t,r)}}}function Rl(o){let e,s,t;return{c(){e=i("link"),this.h()},l(r){e=c(r,"LINK",{rel:!0,hreflang:!0,href:!0}),this.h()},h(){l(e,"rel","alternate"),l(e,"hreflang",s=o[2]),l(e,"href",t=o[15])},m(r,u){V(r,e,u)},p(r,u){u&1&&s!==(s=r[2])&&l(e,"hreflang",s),u&3&&t!==(t=r[15])&&l(e,"href",t)},d(r){r&&n(e)}}}function Gl(o){let e;const s=o[9].default,t=Jl(s,o,o[8],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,u){t&&t.m(r,u),e=!0},p(r,u){t&&t.p&&(!e||u&256)&&Ql(t,s,r,r[8],e?tr(s,r[8],u,null):er(r[8]),null)},i(r){e||(te(t,r),e=!0)},o(r){ee(t,r),e=!1},d(r){t&&t.d(r)}}}function rs(o){let e=o[0].config.seo.noAlternateLinks!==!0&&!o[0].config.exclude(o[1].url.pathname),s,t,r=o[3],u,f,m=e&&Ul(o),d=Gl(o);return{c(){m&&m.c(),s=R(),t=b(),d.c(),u=R()},l(_){const v=Yl("svelte-djwtu5",xa.head);m&&m.l(v),s=R(),v.forEach(n),t=E(_),d.l(_),u=R()},m(_,v){m&&m.m(xa.head,null),a(xa.head,s),V(_,t,v),d.m(_,v),V(_,u,v),f=!0},p(_,[v]){v&3&&(e=_[0].config.seo.noAlternateLinks!==!0&&!_[0].config.exclude(_[1].url.pathname)),e?m?m.p(_,v):(m=Ul(_),m.c(),m.m(s.parentNode,s)):m&&(m.d(1),m=null),v&8&&Me(r,r=_[3])?(ur(),ee(d,1,1,F),fr(),d=Gl(_),d.c(),te(d,1),d.m(u.parentNode,u)):d.p(_,v)},i(_){f||(te(d),f=!0)},o(_){ee(d),f=!1},d(_){_&&(n(t),n(u)),m&&m.d(_),n(s),d.d(_)}}}function ss(o,e,s){let t,r,u,f;La(o,$t,C=>s(1,f=C));let{$$slots:m={},$$scope:d}=e;const _=mr(pr,new URL(f.url))||"/";let{languageTag:v=void 0}=e,{i18n:g}=e,p=0;function A(C,k){const y=new URL(ar($t).url),I=new URL(C,new URL(y));if(as(I,y,_)||g.config.exclude(I.pathname))return C;const P=k??r,{path:T,trailingSlash:$}=rr(I.pathname,{base:_,availableLanguageTags:g.config.runtime.availableLanguageTags,defaultLanguageTag:g.config.defaultLanguageTag}),D=sr(T,P,g.config.translations,g.config.matchers),K=nr({base:_,lang:P,path:D,dataSuffix:void 0,includeLanguage:!0,trailingSlash:$,defaultLanguageTag:g.config.defaultLanguageTag,prefixDefaultLanguage:g.config.prefixDefaultLanguage}),S=new URL(I);return S.pathname=K,ts(y,S)}return ir(gr,{translateHref:A}),gt("$paraglide-sveltekit:context"),o.$$set=C=>{"languageTag"in C&&s(5,v=C.languageTag),"i18n"in C&&s(0,g=C.i18n),"$$scope"in C&&s(8,d=C.$$scope)},o.$$.update=()=>{o.$$.dirty&3&&s(7,t=g.getLanguageFromUrl(f.url)),o.$$.dirty&160&&s(2,r=v??t),o.$$.dirty&5&&g.config.runtime.setLanguageTag(r),o.$$.dirty&4&&(document.documentElement.lang=r),o.$$.dirty&5&&(document.documentElement.dir=g.config.textDirection[r]??"ltr"),o.$$.dirty&68&&r&&s(6,p+=1),o.$$.dirty&68&&r&&p>1&&br(vr),o.$$.dirty&4&&s(3,u=r)},[g,f,r,u,_,v,p,t,d,m]}class or extends ze{constructor(e){super(),Ke(this,e,ss,rs,Me,{languageTag:5,i18n:0})}}const ns=!0;async function os({url:o}){return{url:o.pathname}}const en=Object.freeze(Object.defineProperty({__proto__:null,load:os,prerender:ns},Symbol.toStringTag,{value:"Module"})),is=""+new URL("../assets/logo_footer.CTAxmBG9.webp",import.meta.url).href,Ol=""+new URL("../assets/og_image.Cj9OX1Cu.webp",import.meta.url).href,cs="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%203.41715e-07L14%206.46154L12.3667%207.96923L8.16667%204.09231L8.16667%2014L5.83333%2014L5.83333%204.09231L1.63333%207.96923L-2.94641e-07%206.46154L7%203.41715e-07Z'%20fill='%2325285F'/%3e%3c/svg%3e",us="data:image/svg+xml,%3csvg%20width='26'%20height='25'%20viewBox='0%200%2026%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.7777%200.0493164C6.00547%200.0493164%200.515869%205.57233%200.515869%2012.3857C0.515869%2018.5428%205%2023.6464%2010.8624%2024.5729V15.951H7.74787V12.3857H10.8624V9.66803C10.8624%206.57652%2012.6918%204.86916%2015.4936%204.86916C16.8351%204.86916%2018.2378%205.10972%2018.2378%205.10972V8.14448H16.6928C15.1687%208.14448%2014.6942%209.09562%2014.6942%2010.0714V12.3857H18.0944L17.5512%2015.951H14.6942V24.5729C20.5553%2023.6477%2025.0394%2018.5416%2025.0394%2012.3857C25.0394%205.57233%2019.5498%200.0493164%2012.7777%200.0493164Z'%20fill='%23D4D4ED'/%3e%3c/svg%3e",fs="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3012%200.0493164C15.6327%200.0493164%2016.0484%200.0615781%2017.3555%200.122887C18.6614%200.184196%2019.5504%200.388968%2020.3327%200.69306C21.142%201.00451%2021.8237%201.42632%2022.5055%202.10684C23.129%202.71981%2023.6114%203.46127%2023.9193%204.27963C24.2221%205.06071%2024.4281%205.95091%2024.4894%207.25679C24.5471%208.5639%2024.563%208.97958%2024.563%2012.3111C24.563%2015.6426%2024.5507%2016.0583%2024.4894%2017.3654C24.4281%2018.6713%2024.2221%2019.5603%2023.9193%2020.3426C23.6123%2021.1614%2023.1297%2021.903%2022.5055%2022.5154C21.8923%2023.1387%2021.1509%2023.6211%2020.3327%2023.9291C19.5516%2024.232%2018.6614%2024.438%2017.3555%2024.4993C16.0484%2024.557%2015.6327%2024.5729%2012.3012%2024.5729C8.96969%2024.5729%208.55401%2024.5606%207.24691%2024.4993C5.94103%2024.438%205.05205%2024.232%204.26975%2023.9291C3.45106%2023.622%202.70947%2023.1394%202.09696%2022.5154C1.47333%2021.9025%200.990859%2021.161%200.683173%2020.3426C0.37908%2019.5615%200.174308%2018.6713%200.112999%2017.3654C0.055369%2016.0583%200.0394287%2015.6426%200.0394287%2012.3111C0.0394287%208.97958%200.0516904%208.5639%200.112999%207.25679C0.174308%205.94969%200.37908%205.06193%200.683173%204.27963C0.990007%203.46077%201.47259%202.7191%202.09696%202.10684C2.70964%201.483%203.45118%201.0005%204.26975%200.69306C5.05205%200.388968%205.9398%200.184196%207.24691%200.122887C8.55401%200.0652567%208.96969%200.0493164%2012.3012%200.0493164ZM12.3012%206.18021C10.6752%206.18021%209.11579%206.82614%207.96602%207.97591C6.81625%209.12567%206.17032%2010.6851%206.17032%2012.3111C6.17032%2013.9371%206.81625%2015.4965%207.96602%2016.6463C9.11579%2017.7961%2010.6752%2018.442%2012.3012%2018.442C13.9272%2018.442%2015.4866%2017.7961%2016.6364%2016.6463C17.7862%2015.4965%2018.4321%2013.9371%2018.4321%2012.3111C18.4321%2010.6851%2017.7862%209.12567%2016.6364%207.97591C15.4866%206.82614%2013.9272%206.18021%2012.3012%206.18021ZM20.2714%205.87367C20.2714%205.46716%2020.1099%205.07731%2019.8225%204.78987C19.535%204.50243%2019.1452%204.34094%2018.7387%204.34094C18.3322%204.34094%2017.9423%204.50243%2017.6549%204.78987C17.3674%205.07731%2017.2059%205.46716%2017.2059%205.87367C17.2059%206.28017%2017.3674%206.67002%2017.6549%206.95746C17.9423%207.24491%2018.3322%207.40639%2018.7387%207.40639C19.1452%207.40639%2019.535%207.24491%2019.8225%206.95746C20.1099%206.67002%2020.2714%206.28017%2020.2714%205.87367ZM12.3012%208.63257C13.2768%208.63257%2014.2125%209.02013%2014.9023%209.70999C15.5922%2010.3998%2015.9798%2011.3355%2015.9798%2012.3111C15.9798%2013.2867%2015.5922%2014.2224%2014.9023%2014.9122C14.2125%2015.6021%2013.2768%2015.9896%2012.3012%2015.9896C11.3256%2015.9896%2010.39%2015.6021%209.7001%2014.9122C9.01024%2014.2224%208.62268%2013.2867%208.62268%2012.3111C8.62268%2011.3355%209.01024%2010.3998%209.7001%209.70999C10.39%209.02013%2011.3256%208.63257%2012.3012%208.63257Z'%20fill='%23D4D4ED'/%3e%3c/svg%3e",ds="data:image/svg+xml,%3csvg%20width='27'%20height='25'%20viewBox='0%200%2027%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.56471%202.73698C5.56434%203.46251%205.27085%204.15817%204.74879%204.67094C4.22674%205.18371%203.51889%205.47158%202.78096%205.47122C2.04304%205.47086%201.33548%205.18229%200.813949%204.66901C0.292417%204.15573%20-0.000368615%203.45977%203.48297e-07%202.73424C0.000369311%202.00871%200.293863%201.31304%200.815917%200.800274C1.33797%200.287505%202.04582%20-0.000362422%202.78375%203.42446e-07C3.52167%200.000363107%204.22923%200.288926%204.75076%200.802209C5.27229%201.31549%205.56508%202.01145%205.56471%202.73698ZM5.64818%207.49694H0.0834709V24.6218H5.64818V7.49694ZM14.4404%207.49694H8.90353V24.6218H14.3848V15.6354C14.3848%2010.6292%2021.0207%2010.1642%2021.0207%2015.6354V24.6218H26.5158V13.7752C26.5158%205.3358%2016.6941%205.6504%2014.3848%209.79485L14.4404%207.49694Z'%20fill='%23D4D4ED'/%3e%3c/svg%3e",hs=""+new URL("../assets/logo_navbar.K549ajSh.svg",import.meta.url).href,_s="data:image/svg+xml,%3csvg%20width='28'%20height='23'%20viewBox='0%200%2028%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.3602%203.74579C28%206.19604%2028%2011.311%2028%2011.311C28%2011.311%2028%2016.426%2027.3602%2018.8763C27.0046%2020.2307%2025.9644%2021.2963%2024.647%2021.6565C22.2544%2022.311%2014%2022.311%2014%2022.311C14%2022.311%205.7498%2022.311%203.353%2021.6565C2.03%2021.2908%200.9912%2020.2265%200.6398%2018.8763C4.17233e-08%2016.426%200%2011.311%200%2011.311C0%2011.311%204.17233e-08%206.19604%200.6398%203.74579C0.9954%202.39141%202.0356%201.32578%203.353%200.965535C5.7498%200.311035%2014%200.311035%2014%200.311035C14%200.311035%2022.2544%200.311035%2024.647%200.965535C25.97%201.33128%2027.0088%202.39554%2027.3602%203.74579ZM11.2%2016.1235L19.6%2011.311L11.2%206.49854V16.1235Z'%20fill='%23D4D4ED'/%3e%3c/svg%3e";function ms(o){let e,s="Loading...";return{c(){e=i("div"),e.textContent=s,this.h()},l(t){e=c(t,"DIV",{class:!0,"data-svelte-h":!0}),vt(e)!=="svelte-194gxkm"&&(e.textContent=s),this.h()},h(){l(e,"class","svelte-1rhm92s")},m(t,r){V(t,e,r)},p:F,d(t){t&&n(e)}}}function gs(o){let e,s,t,r,u,f=xr()+"",m,d,_,v,g,p=yr()+"",A,C,k,y,I=wr()+"",P,T,$,D,K=Lr()+"",S,M,x,N,B,W,H,he;return{c(){e=i("div"),s=i("div"),t=i("ul"),r=i("li"),u=i("a"),m=w(f),d=b(),_=i("ul"),v=i("li"),g=i("a"),A=w(p),C=b(),k=i("li"),y=i("a"),P=w(I),T=b(),$=i("li"),D=i("a"),S=w(K),M=b(),x=i("ul"),N=i("li"),B=i("button"),W=i("a"),H=i("img"),this.h()},l(q){e=c(q,"DIV",{class:!0});var G=h(e);s=c(G,"DIV",{class:!0});var U=h(s);t=c(U,"UL",{class:!0});var _e=h(t);r=c(_e,"LI",{class:!0});var ie=h(r);u=c(ie,"A",{href:!0,class:!0});var X=h(u);m=L(X,f),X.forEach(n),ie.forEach(n),_e.forEach(n),d=E(U),_=c(U,"UL",{class:!0});var O=h(_);v=c(O,"LI",{class:!0});var me=h(v);g=c(me,"A",{href:!0,class:!0,style:!0});var ce=h(g);A=L(ce,p),ce.forEach(n),me.forEach(n),C=E(O),k=c(O,"LI",{class:!0});var j=h(k);y=c(j,"A",{href:!0,class:!0,style:!0});var ae=h(y);P=L(ae,I),ae.forEach(n),j.forEach(n),T=E(O),$=c(O,"LI",{class:!0});var J=h($);D=c(J,"A",{href:!0,class:!0,style:!0});var Y=h(D);S=L(Y,K),Y.forEach(n),J.forEach(n),O.forEach(n),M=E(U),x=c(U,"UL",{class:!0});var z=h(x);N=c(z,"LI",{class:!0});var ne=h(N);B=c(ne,"BUTTON",{class:!0});var oe=h(B);W=c(oe,"A",{href:!0,class:!0});var Q=h(W);H=c(Q,"IMG",{src:!0,alt:!0,class:!0,"aria-label":!0}),Q.forEach(n),oe.forEach(n),ne.forEach(n),z.forEach(n),U.forEach(n),G.forEach(n),this.h()},h(){l(u,"href",o[0]("/",void 0)),l(u,"class"," svelte-1rhm92s"),l(r,"class"," svelte-1rhm92s"),l(t,"class","max-w-[90%]  svelte-1rhm92s"),l(g,"href",o[0]("/",void 0)),l(g,"class","underline svelte-1rhm92s"),ft(g,"min-width","48px"),ft(g,"min-height","48px"),l(v,"class","svelte-1rhm92s"),l(y,"href",o[0]("/",void 0)),l(y,"class","underline svelte-1rhm92s"),ft(y,"min-width","48px"),ft(y,"min-height","48px"),l(k,"class","svelte-1rhm92s"),l(D,"href",o[0]("/",void 0)),l(D,"class","text-white underline svelte-1rhm92s"),ft(D,"min-width","48px"),ft(D,"min-height","48px"),l($,"class","svelte-1rhm92s"),l(_,"class","flex max-md:flex-col md:justify-around gap-5 md:gap-10 md:ml-auto md:min-w-96 max-w-[90%]  svelte-1rhm92s"),Te(H.src,he=cs)||l(H,"src",he),l(H,"alt","arrow top"),l(H,"class","size-[14px] svelte-1rhm92s"),l(H,"aria-label","top button"),l(W,"href",o[0]("/",void 0)),l(W,"class","svelte-1rhm92s"),l(B,"class","bg-[#D4D4ED] size-[36px] flex justify-center items-center rounded-md Exo svelte-1rhm92s"),l(N,"class"," svelte-1rhm92s"),l(x,"class","max-md:absolute right-2 flex max-w-min ml-auto mb-auto svelte-1rhm92s"),l(s,"class","grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-10 mx-auto svelte-1rhm92s"),l(e,"class","copyright p-5 bg-blue-800 text-sm w-full svelte-1rhm92s")},m(q,G){V(q,e,G),a(e,s),a(s,t),a(t,r),a(r,u),a(u,m),a(s,d),a(s,_),a(_,v),a(v,g),a(g,A),a(_,C),a(_,k),a(k,y),a(y,P),a(_,T),a(_,$),a($,D),a(D,S),a(s,M),a(s,x),a(x,N),a(N,B),a(B,W),a(W,H)},p:F,d(q){q&&n(e)}}}function vs(o){let e;function s(u,f){return Ut?gs:ms}let r=s()(o);return{c(){r.c(),e=R()},l(u){r.l(u),e=R()},m(u,f){r.m(u,f),V(u,e,f)},p(u,[f]){r.p(u,f)},i:F,o:F,d(u){u&&n(e),r.d(u)}}}function ps(o){const e=gt("$paraglide-sveltekit:context");function s(t,r){return typeof t!="string"||!e?t:e.translateHref(t,r)}return[s]}class bs extends ze{constructor(e){super(),Ke(this,e,ps,vs,Me,{})}}function Es(o){let e,s="Loading...";return{c(){e=i("div"),e.textContent=s},l(t){e=c(t,"DIV",{"data-svelte-h":!0}),vt(e)!=="svelte-194gxkm"&&(e.textContent=s)},m(t,r){V(t,e,r)},p:F,i:F,o:F,d(t){t&&n(e)}}}function xs(o){let e,s,t,r,u,f,m,d,_,v,g,p,A=Cr()+"",C,k,y,I,P,T,$,D,K=Dr()+"",S,M,x,N,B,W=kr()+"",H,he,q,G,U=Ar()+"",_e,ie,X,O=Ir()+"",me,ce,j,ae,J,Y=$r()+"",z,ne,oe,Q,Z=Tr()+"",qe,We,xe,ue,pt=Mr()+"",Ye,Xe,Je,ye,Qe,Ca=Vr()+"",jt,Rt,le,bt,Ve,Da=Fr()+"",Gt,Ot,Et,Fe,ka=Pr()+"",Zt,zt,xt,Pe,Aa=Sr()+"",Kt,qt,yt,Se,Ia=Hr()+"",Wt,Yt,et,we,tt,$a=Br()+"",Xt,Jt,re,wt,He,Ta=Nr()+"",Qt,ea,Lt,Be,Ma=Ur()+"",ta,aa,Ct,Le,la,Va=jr()+"",ra,sa,Dt,Ne,Fa=Rr()+"",na,oa,Ce,De,at,Pa=Gr()+"",ia,ca,fe,kt,Ue,Sa=Or()+"",ua,fa,At,je,Ha=Zr()+"",da,ha,It,Re,Ba=zr()+"",_a,ma,lt,se,ge,rt,Na,ga,ve,st,Ua,va,pe,nt,ja,pa,be,ot,Ra,ba,Ge,Tt;return Ge=new bs({}),{c(){e=i("footer"),s=i("div"),t=i("div"),r=i("div"),u=i("div"),f=i("div"),m=i("a"),d=i("img"),v=b(),g=i("button"),p=i("a"),C=w(A),k=b(),y=i("img"),P=b(),T=i("div"),$=i("div"),D=i("p"),S=w(K),M=b(),x=i("ul"),N=i("li"),B=i("a"),H=w(W),he=b(),q=i("li"),G=i("a"),_e=w(U),ie=b(),X=i("p"),me=w(O),ce=b(),j=i("ul"),ae=i("li"),J=i("a"),z=w(Y),ne=b(),oe=i("li"),Q=i("a"),qe=w(Z),We=b(),xe=i("li"),ue=i("a"),Ye=w(pt),Xe=b(),Je=i("div"),ye=i("div"),Qe=i("p"),jt=w(Ca),Rt=b(),le=i("ul"),bt=i("li"),Ve=i("a"),Gt=w(Da),Ot=b(),Et=i("li"),Fe=i("a"),Zt=w(ka),zt=b(),xt=i("li"),Pe=i("a"),Kt=w(Aa),qt=b(),yt=i("li"),Se=i("a"),Wt=w(Ia),Yt=b(),et=i("div"),we=i("div"),tt=i("p"),Xt=w($a),Jt=b(),re=i("ul"),wt=i("li"),He=i("a"),Qt=w(Ta),ea=b(),Lt=i("li"),Be=i("a"),ta=w(Ma),aa=b(),Ct=i("li"),Le=i("a"),la=w("My "),ra=w(Va),sa=b(),Dt=i("li"),Ne=i("a"),na=w(Fa),oa=b(),Ce=i("div"),De=i("div"),at=i("p"),ia=w(Pa),ca=b(),fe=i("ul"),kt=i("li"),Ue=i("a"),ua=w(Sa),fa=b(),At=i("li"),je=i("a"),da=w(Ha),ha=b(),It=i("li"),Re=i("a"),_a=w(Ba),ma=b(),lt=i("div"),se=i("div"),ge=i("a"),rt=i("img"),ga=b(),ve=i("a"),st=i("img"),va=b(),pe=i("a"),nt=i("img"),pa=b(),be=i("a"),ot=i("img"),ba=b(),dt(Ge.$$.fragment),this.h()},l(Ee){e=c(Ee,"FOOTER",{class:!0});var it=h(e);s=c(it,"DIV",{class:!0});var Ga=h(s);t=c(Ga,"DIV",{class:!0});var Oa=h(t);r=c(Oa,"DIV",{class:!0});var de=h(r);u=c(de,"DIV",{class:!0});var Za=h(u);f=c(Za,"DIV",{class:!0});var Mt=h(f);m=c(Mt,"A",{href:!0,class:!0});var za=h(m);d=c(za,"IMG",{src:!0,alt:!0,class:!0}),za.forEach(n),v=E(Mt),g=c(Mt,"BUTTON",{class:!0});var Ka=h(g);p=c(Ka,"A",{class:!0,href:!0});var Vt=h(p);C=L(Vt,A),k=E(Vt),y=c(Vt,"IMG",{src:!0,class:!0,alt:!0}),Vt.forEach(n),Ka.forEach(n),Mt.forEach(n),Za.forEach(n),P=E(de),T=c(de,"DIV",{class:!0});var qa=h(T);$=c(qa,"DIV",{class:!0});var ke=h($);D=c(ke,"P",{class:!0});var Wa=h(D);S=L(Wa,K),Wa.forEach(n),M=E(ke),x=c(ke,"UL",{class:!0});var Ft=h(x);N=c(Ft,"LI",{});var Ya=h(N);B=c(Ya,"A",{href:!0,title:!0,class:!0});var Xa=h(B);H=L(Xa,W),Xa.forEach(n),Ya.forEach(n),he=E(Ft),q=c(Ft,"LI",{});var Ja=h(q);G=c(Ja,"A",{href:!0,title:!0,class:!0});var Qa=h(G);_e=L(Qa,U),Qa.forEach(n),Ja.forEach(n),Ft.forEach(n),ie=E(ke),X=c(ke,"P",{class:!0});var el=h(X);me=L(el,O),el.forEach(n),ce=E(ke),j=c(ke,"UL",{class:!0});var ct=h(j);ae=c(ct,"LI",{});var tl=h(ae);J=c(tl,"A",{href:!0,class:!0});var al=h(J);z=L(al,Y),al.forEach(n),tl.forEach(n),ne=E(ct),oe=c(ct,"LI",{});var ll=h(oe);Q=c(ll,"A",{href:!0,class:!0});var rl=h(Q);qe=L(rl,Z),rl.forEach(n),ll.forEach(n),We=E(ct),xe=c(ct,"LI",{});var sl=h(xe);ue=c(sl,"A",{href:!0,class:!0});var nl=h(ue);Ye=L(nl,pt),nl.forEach(n),sl.forEach(n),ct.forEach(n),ke.forEach(n),qa.forEach(n),Xe=E(de),Je=c(de,"DIV",{class:!0});var ol=h(Je);ye=c(ol,"DIV",{class:!0});var Pt=h(ye);Qe=c(Pt,"P",{class:!0});var il=h(Qe);jt=L(il,Ca),il.forEach(n),Rt=E(Pt),le=c(Pt,"UL",{class:!0});var Ae=h(le);bt=c(Ae,"LI",{});var cl=h(bt);Ve=c(cl,"A",{href:!0,class:!0});var ul=h(Ve);Gt=L(ul,Da),ul.forEach(n),cl.forEach(n),Ot=E(Ae),Et=c(Ae,"LI",{});var fl=h(Et);Fe=c(fl,"A",{href:!0,class:!0});var dl=h(Fe);Zt=L(dl,ka),dl.forEach(n),fl.forEach(n),zt=E(Ae),xt=c(Ae,"LI",{});var hl=h(xt);Pe=c(hl,"A",{href:!0,class:!0});var _l=h(Pe);Kt=L(_l,Aa),_l.forEach(n),hl.forEach(n),qt=E(Ae),yt=c(Ae,"LI",{});var ml=h(yt);Se=c(ml,"A",{href:!0,class:!0});var gl=h(Se);Wt=L(gl,Ia),gl.forEach(n),ml.forEach(n),Ae.forEach(n),Pt.forEach(n),ol.forEach(n),Yt=E(de),et=c(de,"DIV",{class:!0});var vl=h(et);we=c(vl,"DIV",{class:!0});var St=h(we);tt=c(St,"P",{class:!0});var pl=h(tt);Xt=L(pl,$a),pl.forEach(n),Jt=E(St),re=c(St,"UL",{class:!0});var Ie=h(re);wt=c(Ie,"LI",{});var bl=h(wt);He=c(bl,"A",{href:!0,class:!0});var El=h(He);Qt=L(El,Ta),El.forEach(n),bl.forEach(n),ea=E(Ie),Lt=c(Ie,"LI",{});var xl=h(Lt);Be=c(xl,"A",{href:!0,class:!0});var yl=h(Be);ta=L(yl,Ma),yl.forEach(n),xl.forEach(n),aa=E(Ie),Ct=c(Ie,"LI",{});var wl=h(Ct);Le=c(wl,"A",{href:!0,class:!0});var Ea=h(Le);la=L(Ea,"My "),ra=L(Ea,Va),Ea.forEach(n),wl.forEach(n),sa=E(Ie),Dt=c(Ie,"LI",{});var Ll=h(Dt);Ne=c(Ll,"A",{href:!0,class:!0});var Cl=h(Ne);na=L(Cl,Fa),Cl.forEach(n),Ll.forEach(n),Ie.forEach(n),St.forEach(n),vl.forEach(n),oa=E(de),Ce=c(de,"DIV",{class:!0});var Ht=h(Ce);De=c(Ht,"DIV",{class:!0});var Bt=h(De);at=c(Bt,"P",{class:!0});var Dl=h(at);ia=L(Dl,Pa),Dl.forEach(n),ca=E(Bt),fe=c(Bt,"UL",{class:!0});var ut=h(fe);kt=c(ut,"LI",{});var kl=h(kt);Ue=c(kl,"A",{href:!0,class:!0});var Al=h(Ue);ua=L(Al,Sa),Al.forEach(n),kl.forEach(n),fa=E(ut),At=c(ut,"LI",{});var Il=h(At);je=c(Il,"A",{href:!0,class:!0});var $l=h(je);da=L($l,Ha),$l.forEach(n),Il.forEach(n),ha=E(ut),It=c(ut,"LI",{});var Tl=h(It);Re=c(Tl,"A",{href:!0,class:!0});var Ml=h(Re);_a=L(Ml,Ba),Ml.forEach(n),Tl.forEach(n),ut.forEach(n),Bt.forEach(n),ma=E(Ht),lt=c(Ht,"DIV",{class:!0});var Vl=h(lt);se=c(Vl,"DIV",{class:!0});var $e=h(se);ge=c($e,"A",{href:!0,class:!0,"aria-label":!0,target:!0});var Fl=h(ge);rt=c(Fl,"IMG",{src:!0,alt:!0}),Fl.forEach(n),ga=E($e),ve=c($e,"A",{href:!0,class:!0,"aria-label":!0,target:!0});var Pl=h(ve);st=c(Pl,"IMG",{src:!0,alt:!0}),Pl.forEach(n),va=E($e),pe=c($e,"A",{href:!0,class:!0,"aria-label":!0,target:!0});var Sl=h(pe);nt=c(Sl,"IMG",{src:!0,alt:!0}),Sl.forEach(n),pa=E($e),be=c($e,"A",{href:!0,class:!0,"aria-label":!0,target:!0});var Hl=h(be);ot=c(Hl,"IMG",{src:!0,alt:!0}),Hl.forEach(n),$e.forEach(n),Vl.forEach(n),Ht.forEach(n),de.forEach(n),Oa.forEach(n),Ga.forEach(n),ba=E(it),ht(Ge.$$.fragment,it),it.forEach(n),this.h()},h(){Te(d.src,_=is)||l(d,"src",_),l(d,"alt","logo"),l(d,"class","inset-0 w-full h-full object-cover size-96"),l(m,"href",o[0]("/",void 0)),l(m,"class","mb-6 inline-block max-w-[250px]"),Te(y.src,I=hr)||l(y,"src",I),l(y,"class","z-10 absolute right-5 bottom-[22px] size-3"),l(y,"alt",""),l(p,"class","btn-agendar bg-[#8abb3f] flex items-center text-base text-[#17193B] py-4 px-10 mt-5 rounded-lg relative max-lg:whitespace-nowrap lg:whitespace-nowrap"),l(p,"href",o[0]("/company#contact",void 0)),l(g,"class","flex flex-wrap gap-4 Exo"),l(f,"class","w-full mb-10"),l(u,"class","mx-auto"),l(D,"class","text-[#F1F1F9] text-lg Exo-Semibold mb-5"),l(B,"href",o[0]("/products#platform",void 0)),l(B,"title","Learn more about our company"),l(B,"class","text-[#D4D4ED] text-sm"),l(G,"href",o[0]("/products#target-audience",void 0)),l(G,"title","Learn more about our company"),l(G,"class","text-[#D4D4ED] text-sm"),l(x,"class","space-y-3"),l(X,"class","text-[#F1F1F9] text-lg Exo-Semibold mb-5 mt-5"),l(J,"href",o[0]("/solutions#modules",void 0)),l(J,"class","text-[#D4D4ED] text-sm"),l(Q,"href",o[0]("/solutions#portfolio-services",void 0)),l(Q,"class","text-[#D4D4ED] text-sm"),l(ue,"href",o[0]("/solutions#packages",void 0)),l(ue,"class","text-[#D4D4ED] text-sm"),l(j,"class","space-y-3"),l($,"class","w-full mb-10"),l(T,"class","lg:ml-12 w-full"),l(Qe,"class","text-[#F1F1F9] text-lg Exo-Semibold mb-5"),l(Ve,"href",o[0]("/customers_and_partners#clients",void 0)),l(Ve,"class","text-[#D4D4ED] text-sm"),l(Fe,"href",o[0]("/customers_and_partners#cases",void 0)),l(Fe,"class","text-[#D4D4ED] text-sm"),l(Pe,"href",o[0]("/customers_and_partners#support",void 0)),l(Pe,"class","text-[#D4D4ED] text-sm"),l(Se,"href",o[0]("/customers_and_partners",void 0)),l(Se,"class","text-[#D4D4ED] text-sm"),l(le,"class","space-y-3"),l(ye,"class","w-full mb-10"),l(Je,"class","lg:ml-12 w-full"),l(tt,"class","text-[#F1F1F9] text-lg Exo-Semibold mb-5"),l(He,"href",o[0]("/",void 0)),l(He,"class","text-[#D4D4ED] text-sm"),l(Be,"href",o[0]("/",void 0)),l(Be,"class","text-[#D4D4ED] text-sm"),l(Le,"href",o[0]("/",void 0)),l(Le,"class","text-[#D4D4ED] text-sm"),l(Ne,"href",o[0]("/",void 0)),l(Ne,"class","text-[#D4D4ED] text-sm"),l(re,"class","space-y-3"),l(we,"class","w-full mb-10"),l(et,"class","lg:ml-12 w-full"),l(at,"class","text-[#F1F1F9] text-lg Exo-Semibold mb-5"),l(Ue,"href",o[0]("/company#about",void 0)),l(Ue,"class","text-[#D4D4ED] text-sm"),l(je,"href",o[0]("/company#purpose",void 0)),l(je,"class","text-[#D4D4ED] text-sm"),l(Re,"href",o[0]("/company#contact",void 0)),l(Re,"class","text-[#D4D4ED] text-sm"),l(fe,"class","space-y-3"),l(De,"class","w-full mb-10"),Te(rt.src,Na=_s)||l(rt,"src",Na),l(rt,"alt",""),l(ge,"href",o[0]("/",void 0)),l(ge,"class","flex items-center justify-center w-8 h-8"),l(ge,"aria-label","Youtube"),l(ge,"target","_blank"),Te(st.src,Ua=ds)||l(st,"src",Ua),l(st,"alt",""),l(ve,"href",o[0]("/",void 0)),l(ve,"class","flex items-center justify-center w-8 h-8"),l(ve,"aria-label","Linkedin"),l(ve,"target","_blank"),Te(nt.src,ja=us)||l(nt,"src",ja),l(nt,"alt",""),l(pe,"href",o[0]("/",void 0)),l(pe,"class","flex items-center justify-center w-8 h-8"),l(pe,"aria-label","Facebook"),l(pe,"target","_blank"),Te(ot.src,Ra=fs)||l(ot,"src",Ra),l(ot,"alt",""),l(be,"href",o[0]("/",void 0)),l(be,"class","flex items-center justify-center w-8 h-8"),l(be,"aria-label","Instagram"),l(be,"target","_blank"),l(se,"class","flex space-x-7"),l(lt,"class","xl:absolute bottom-0 right-5 mr-5"),l(Ce,"class","lg:ml-12 w-full relative"),l(r,"class","grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 md:gap-10 lg:gap-20 mx-auto p-3 sm:p-6"),l(t,"class","lg:p-12"),l(s,"class","lg:container mx-auto max-sm:flex justify-center"),l(e,"class","footer relative bg-[#17193b] w-full Exo")},m(Ee,it){V(Ee,e,it),a(e,s),a(s,t),a(t,r),a(r,u),a(u,f),a(f,m),a(m,d),a(f,v),a(f,g),a(g,p),a(p,C),a(p,k),a(p,y),a(r,P),a(r,T),a(T,$),a($,D),a(D,S),a($,M),a($,x),a(x,N),a(N,B),a(B,H),a(x,he),a(x,q),a(q,G),a(G,_e),a($,ie),a($,X),a(X,me),a($,ce),a($,j),a(j,ae),a(ae,J),a(J,z),a(j,ne),a(j,oe),a(oe,Q),a(Q,qe),a(j,We),a(j,xe),a(xe,ue),a(ue,Ye),a(r,Xe),a(r,Je),a(Je,ye),a(ye,Qe),a(Qe,jt),a(ye,Rt),a(ye,le),a(le,bt),a(bt,Ve),a(Ve,Gt),a(le,Ot),a(le,Et),a(Et,Fe),a(Fe,Zt),a(le,zt),a(le,xt),a(xt,Pe),a(Pe,Kt),a(le,qt),a(le,yt),a(yt,Se),a(Se,Wt),a(r,Yt),a(r,et),a(et,we),a(we,tt),a(tt,Xt),a(we,Jt),a(we,re),a(re,wt),a(wt,He),a(He,Qt),a(re,ea),a(re,Lt),a(Lt,Be),a(Be,ta),a(re,aa),a(re,Ct),a(Ct,Le),a(Le,la),a(Le,ra),a(re,sa),a(re,Dt),a(Dt,Ne),a(Ne,na),a(r,oa),a(r,Ce),a(Ce,De),a(De,at),a(at,ia),a(De,ca),a(De,fe),a(fe,kt),a(kt,Ue),a(Ue,ua),a(fe,fa),a(fe,At),a(At,je),a(je,da),a(fe,ha),a(fe,It),a(It,Re),a(Re,_a),a(Ce,ma),a(Ce,lt),a(lt,se),a(se,ge),a(ge,rt),a(se,ga),a(se,ve),a(ve,st),a(se,va),a(se,pe),a(pe,nt),a(se,pa),a(se,be),a(be,ot),a(e,ba),_t(Ge,e,null),Tt=!0},p:F,i(Ee){Tt||(te(Ge.$$.fragment,Ee),Tt=!0)},o(Ee){ee(Ge.$$.fragment,Ee),Tt=!1},d(Ee){Ee&&n(e),mt(Ge)}}}function ys(o){let e,s,t,r;const u=[xs,Es],f=[];function m(d,_){return Ut?0:1}return e=m(),s=f[e]=u[e](o),{c(){s.c(),t=R()},l(d){s.l(d),t=R()},m(d,_){f[e].m(d,_),V(d,t,_),r=!0},p(d,[_]){s.p(d,_)},i(d){r||(te(s),r=!0)},o(d){ee(s),r=!1},d(d){d&&n(t),f[e].d(d)}}}function ws(o){const e=gt("$paraglide-sveltekit:context");function s(t,r){return typeof t!="string"||!e?t:e.translateHref(t,r)}return[s]}class Ls extends ze{constructor(e){super(),Ke(this,e,ws,ys,Me,{})}}function Zl(o,e,s){const t=o.slice();return t[3]=e[s],t}function zl(o){let e,s=o[1][o[3]]+"",t;return{c(){e=i("option"),t=w(s),this.h()},l(r){e=c(r,"OPTION",{});var u=h(e);t=L(u,s),u.forEach(n),this.h()},h(){e.__value=o[3],cr(e,e.__value),e.selected=es()===o[3]},m(r,u){V(r,e,u),a(e,t)},p:F,d(r){r&&n(e)}}}function Cs(o){let e,s,t,r=Nt(Bl),u=[];for(let f=0;f<r.length;f+=1)u[f]=zl(Zl(o,r,f));return{c(){e=i("select");for(let f=0;f<u.length;f+=1)u[f].c();this.h()},l(f){e=c(f,"SELECT",{class:!0,"aria-label":!0});var m=h(e);for(let d=0;d<u.length;d+=1)u[d].l(m);m.forEach(n),this.h()},h(){l(e,"class","relative h-[2.5rem] bg-[#F1F1F9]"),l(e,"aria-label","Select Language")},m(f,m){V(f,e,m);for(let d=0;d<u.length;d+=1)u[d]&&u[d].m(e,null);s||(t=lr(e,"change",o[2]),s=!0)},p(f,[m]){if(m&2){r=Nt(Bl);let d;for(d=0;d<r.length;d+=1){const _=Zl(f,r,d);u[d]?u[d].p(_,m):(u[d]=zl(_),u[d].c(),u[d].m(e,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=r.length}},i:F,o:F,d(f){f&&n(e),Xl(u,f),s=!1,t()}}}function Ds(o){function e(r){const u=wa.route(ar($t).url.pathname),f=wa.resolveRoute(u,r);Er(f)}return[e,{en:"🇺🇸 EN","pt-br":"🇧🇷 PT-BR"},r=>e(r.target.value)]}class ks extends ze{constructor(e){super(),Ke(this,e,Ds,Cs,Me,{})}}function As(o){let e,s="Loading...";return{c(){e=i("div"),e.textContent=s},l(t){e=c(t,"DIV",{"data-svelte-h":!0}),vt(e)!=="svelte-194gxkm"&&(e.textContent=s)},m(t,r){V(t,e,r)},p:F,i:F,o:F,d(t){t&&n(e)}}}function Is(o){let e,s,t,r,u,f,m,d,_,v,g,p,A,C;return g=new ks({}),{c(){e=i("nav"),s=i("div"),t=i("div"),r=i("ul"),u=i("li"),f=i("a"),m=w("Login"),d=b(),_=i("li"),v=i("span"),dt(g.$$.fragment),p=b(),A=i("div"),this.h()},l(k){e=c(k,"NAV",{class:!0});var y=h(e);s=c(y,"DIV",{class:!0});var I=h(s);t=c(I,"DIV",{class:!0});var P=h(t);r=c(P,"UL",{class:!0});var T=h(r);u=c(T,"LI",{class:!0});var $=h(u);f=c($,"A",{class:!0,href:!0,target:!0});var D=h(f);m=L(D,"Login"),D.forEach(n),$.forEach(n),d=E(T),_=c(T,"LI",{class:!0});var K=h(_);v=c(K,"SPAN",{class:!0});var S=h(v);ht(g.$$.fragment,S),S.forEach(n),K.forEach(n),T.forEach(n),P.forEach(n),p=E(I),A=c(I,"DIV",{class:!0,id:!0}),h(A).forEach(n),I.forEach(n),y.forEach(n),this.h()},h(){l(f,"class","login Archivo block py-2 px-3 text-[#17193B] rounded bg-[#F1F1F9] svelte-riwvqd"),l(f,"href",o[0]("http://mymenthor.com.br/",void 0)),l(f,"target","_blank"),l(u,"class","bg-[#d4d4ed]"),l(v,"class","language block text-[#17193B] rounded md:hover:bg-transparent Archivo svelte-riwvqd"),l(_,"class","bg-[#F1F1F9] px-2"),l(r,"class","flex p-3 md:p-0 font-medium md:space-x-2 rtl:space-x-reverse m-0 border-0"),l(t,"class","flex md:order-2 space-x-3"),l(A,"class","items-center justify-between hidden w-full md:flex md:w-auto md:order-1"),l(A,"id","navbar-sticky"),l(s,"class","nav1 bg-transparent max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:p-2.5"),l(e,"class","navbar bg-[#d4d4ed] relative w-full z-20 top-0 start-0 border-b")},m(k,y){V(k,e,y),a(e,s),a(s,t),a(t,r),a(r,u),a(u,f),a(f,m),a(r,d),a(r,_),a(_,v),_t(g,v,null),a(s,p),a(s,A),C=!0},p:F,i(k){C||(te(g.$$.fragment,k),C=!0)},o(k){ee(g.$$.fragment,k),C=!1},d(k){k&&n(e),mt(g)}}}function $s(o){let e,s,t,r;const u=[Is,As],f=[];function m(d,_){return Ut?0:1}return e=m(),s=f[e]=u[e](o),{c(){s.c(),t=R()},l(d){s.l(d),t=R()},m(d,_){f[e].m(d,_),V(d,t,_),r=!0},p(d,[_]){s.p(d,_)},i(d){r||(te(s),r=!0)},o(d){ee(s),r=!1},d(d){d&&n(t),f[e].d(d)}}}function Ts(o){const e=gt("$paraglide-sveltekit:context");function s(t,r){return typeof t!="string"||!e?t:e.translateHref(t,r)}return[s]}class Ms extends ze{constructor(e){super(),Ke(this,e,Ts,$s,Me,{})}}function Vs(o){let e,s="Loading...";return{c(){e=i("div"),e.textContent=s},l(t){e=c(t,"DIV",{"data-svelte-h":!0}),vt(e)!=="svelte-194gxkm"&&(e.textContent=s)},m(t,r){V(t,e,r)},p:F,d(t){t&&n(e)}}}function Fs(o){let e,s,t,r,u,f,m,d,_='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#17193B" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>',v,g,p,A,C=Kr()+"",k,y,I,P=qr()+"",T,$,D,K=Wr()+"",S,M,x,N=Yr()+"",B,W,H,he=Xr()+"",q,G,U,_e=Jr()+"",ie,X,O,me=Qr()+"",ce,j,ae,J;return{c(){e=i("nav"),s=i("div"),t=i("a"),r=i("img"),f=b(),m=i("div"),d=i("button"),d.innerHTML=_,g=b(),p=i("div"),A=i("a"),k=w(C),y=b(),I=i("a"),T=w(P),$=b(),D=i("a"),S=w(K),M=b(),x=i("a"),B=w(N),W=b(),H=i("a"),q=w(he),G=b(),U=i("a"),ie=w(_e),X=b(),O=i("a"),ce=w(me),this.h()},l(Y){e=c(Y,"NAV",{class:!0});var z=h(e);s=c(z,"DIV",{class:!0,id:!0});var ne=h(s);t=c(ne,"A",{class:!0,"aria-label":!0,href:!0});var oe=h(t);r=c(oe,"IMG",{src:!0,class:!0,alt:!0}),oe.forEach(n),f=E(ne),m=c(ne,"DIV",{class:!0});var Q=h(m);d=c(Q,"BUTTON",{type:!0,"aria-label":!0,class:!0,"data-svelte-h":!0}),vt(d)!=="svelte-qn0cpy"&&(d.innerHTML=_),Q.forEach(n),ne.forEach(n),g=E(z),p=c(z,"DIV",{class:!0});var Z=h(p);A=c(Z,"A",{class:!0,href:!0});var qe=h(A);k=L(qe,C),qe.forEach(n),y=E(Z),I=c(Z,"A",{class:!0,href:!0});var We=h(I);T=L(We,P),We.forEach(n),$=E(Z),D=c(Z,"A",{class:!0,href:!0});var xe=h(D);S=L(xe,K),xe.forEach(n),M=E(Z),x=c(Z,"A",{class:!0,href:!0});var ue=h(x);B=L(ue,N),ue.forEach(n),W=E(Z),H=c(Z,"A",{class:!0,href:!0});var pt=h(H);q=L(pt,he),pt.forEach(n),G=E(Z),U=c(Z,"A",{class:!0,href:!0,target:!0});var Ye=h(U);ie=L(Ye,_e),Ye.forEach(n),X=E(Z),O=c(Z,"A",{class:!0,href:!0});var Xe=h(O);ce=L(Xe,me),Xe.forEach(n),Z.forEach(n),z.forEach(n),this.h()},h(){Te(r.src,u=hs)||l(r,"src",u),l(r,"class",""),l(r,"alt",""),l(t,"class","logoHeader text-white hover:text-slate-300 transition-transform transform hover:-translate-y-1"),l(t,"aria-label","My Menthor"),l(t,"href",o[3]("/",void 0)),l(d,"type","button"),l(d,"aria-label","Toggle Navigation"),l(d,"class","text-white hover:text-slate-300 focus:outline-none focus:text-slate-100"),l(m,"class","hamb flex lg:hidden Exo"),l(s,"class","flex items-center justify-between"),l(s,"id",v=Kl(o[1])),l(A,"class",Oe(Ze)+" svelte-t3yc5x"),l(A,"href",o[3]("/",void 0)),l(I,"class",Oe(Ze)+" svelte-t3yc5x"),l(I,"href",o[3]("/products",void 0)),l(D,"class",Oe(Ze)+" svelte-t3yc5x"),l(D,"href",o[3]("/solutions",void 0)),l(x,"class",Oe(Ze)+" svelte-t3yc5x"),l(x,"href",o[3]("/customers_and_partners",void 0)),l(H,"class",Oe(Ze)+" svelte-t3yc5x"),l(H,"href",o[3]("/resources",void 0)),l(U,"class",Oe(Ze)+" svelte-t3yc5x"),l(U,"href",o[3]("http://mymenthor.com/blog",void 0)),l(U,"target","_blank"),l(O,"class",Oe(Ze)+" svelte-t3yc5x"),l(O,"href",o[3]("/company",void 0)),l(p,"class",j="nav-links whitespace-nowrap mt-8 space-y-4 lg:flex sm:space-y-0 lg:flex-row lg:items-center lg:space-x-3 md:space-x-2 text-center md:mt-0 "+(o[0]?"flex":"hidden")+" svelte-t3yc5x"),l(e,"class","bg-[#F1F1F9] bg-opacity-80 relative max-md:py-3 px-6 py-8 mx-auto lg:flex md:justify-between md:items-center z-50 max-w-full")},m(Y,z){V(Y,e,z),a(e,s),a(s,t),a(t,r),a(s,f),a(s,m),a(m,d),a(e,g),a(e,p),a(p,A),a(A,k),a(p,y),a(p,I),a(I,T),a(p,$),a(p,D),a(D,S),a(p,M),a(p,x),a(x,B),a(p,W),a(p,H),a(H,q),a(p,G),a(p,U),a(U,ie),a(p,X),a(p,O),a(O,ce),ae||(J=lr(d,"click",o[2]),ae=!0)},p(Y,z){z&2&&v!==(v=Kl(Y[1]))&&l(s,"id",v),z&1&&j!==(j="nav-links whitespace-nowrap mt-8 space-y-4 lg:flex sm:space-y-0 lg:flex-row lg:items-center lg:space-x-3 md:space-x-2 text-center md:mt-0 "+(Y[0]?"flex":"hidden")+" svelte-t3yc5x")&&l(p,"class",j)},d(Y){Y&&n(e),ae=!1,J()}}}function Ps(o){let e;function s(u,f){return Ut?Fs:Vs}let r=s()(o);return{c(){r.c(),e=R()},l(u){r.l(u),e=R()},m(u,f){r.m(u,f),V(u,e,f)},p(u,[f]){r.p(u,f)},i:F,o:F,d(u){u&&n(e),r.d(u)}}}const Ze="text-[#17193B] py-2 md:px-3 transition-transform transform hover:-translate-y-1 hover:bg-[#20C997] rounded-lg hover:text-[#F1F1F9] Exo ";function Kl(o){return`${o}#top`}function Ss(o,e,s){let t;La(o,$t,_=>s(4,t=_));let r=!1;function u(){s(0,r=!r)}let f="";const m=gt("$paraglide-sveltekit:context");function d(_,v){return typeof _!="string"||!m?_:m.translateHref(_,v)}return o.$$.update=()=>{o.$$.dirty&16&&s(1,f=t.params.page||"home")},[r,f,u,d,t]}class Hs extends ze{constructor(e){super(),Ke(this,e,Ss,Ps,Me,{})}}const ql="https://www.mymenthor.com",Wl="Website My Menthor",ya="Your company on another management level. My Menthor is a SaaS Business Architecture platform that helps to unfold the company's strategy into a vision oriented by end-to-end, providing visibility of processes and aligning organizational components to achieve business objectives.",Bs="1280",Ns="720";function Us(o){let e,s="Loading...";return{c(){e=i("div"),e.textContent=s},l(t){e=c(t,"DIV",{"data-svelte-h":!0}),vt(e)!=="svelte-194gxkm"&&(e.textContent=s)},m(t,r){V(t,e,r)},p:F,i:F,o:F,d(t){t&&n(e)}}}function js(o){let e,s;return e=new or({props:{i18n:wa,$$slots:{default:[Rs]},$$scope:{ctx:o}}}),{c(){dt(e.$$.fragment)},l(t){ht(e.$$.fragment,t)},m(t,r){_t(e,t,r),s=!0},p(t,r){const u={};r&4&&(u.$$scope={dirty:r,ctx:t}),e.$set(u)},i(t){s||(te(e.$$.fragment,t),s=!0)},o(t){ee(e.$$.fragment,t),s=!1},d(t){mt(e,t)}}}function Rs(o){let e,s,t,r,u,f,m,d;s=new Ms({}),r=new Hs({});const _=o[1].default,v=Jl(_,o,o[2],null);return m=new Ls({}),{c(){e=i("main"),dt(s.$$.fragment),t=b(),dt(r.$$.fragment),u=b(),v&&v.c(),f=b(),dt(m.$$.fragment),this.h()},l(g){e=c(g,"MAIN",{class:!0});var p=h(e);ht(s.$$.fragment,p),t=E(p),ht(r.$$.fragment,p),u=E(p),v&&v.l(p),f=E(p),ht(m.$$.fragment,p),p.forEach(n),this.h()},h(){l(e,"class","relative")},m(g,p){V(g,e,p),_t(s,e,null),a(e,t),_t(r,e,null),a(e,u),v&&v.m(e,null),a(e,f),_t(m,e,null),d=!0},p(g,p){v&&v.p&&(!d||p&4)&&Ql(v,_,g,g[2],d?tr(_,g[2],p,null):er(g[2]),null)},i(g){d||(te(s.$$.fragment,g),te(r.$$.fragment,g),te(v,g),te(m.$$.fragment,g),d=!0)},o(g){ee(s.$$.fragment,g),ee(r.$$.fragment,g),ee(v,g),ee(m.$$.fragment,g),d=!1},d(g){g&&n(e),mt(s),mt(r),v&&v.d(g),mt(m)}}}function Gs(o){var S;let e,s,t,r,u,f,m,d,_,v,g,p,A,C,k,y,I,P,T;document.title=e=(S=o[0].data.post)==null?void 0:S.title;const $=[js,Us],D=[];function K(M,x){return or?0:1}return y=K(),I=D[y]=$[y](o),{c(){s=i("link"),t=i("meta"),r=i("meta"),u=i("meta"),f=i("meta"),m=i("meta"),d=i("meta"),_=i("meta"),v=i("meta"),g=i("meta"),p=i("meta"),A=i("meta"),C=i("meta"),k=b(),I.c(),P=R(),this.h()},l(M){const x=Yl("svelte-1jfj044",document.head);s=c(x,"LINK",{rel:!0,href:!0}),t=c(x,"META",{property:!0,content:!0}),r=c(x,"META",{property:!0,content:!0}),u=c(x,"META",{property:!0,content:!0}),f=c(x,"META",{name:!0,content:!0}),m=c(x,"META",{property:!0,content:!0}),d=c(x,"META",{property:!0,content:!0}),_=c(x,"META",{property:!0,content:!0}),v=c(x,"META",{property:!0,content:!0}),g=c(x,"META",{name:!0,content:!0}),p=c(x,"META",{name:!0,content:!0}),A=c(x,"META",{name:!0,content:!0}),C=c(x,"META",{name:!0,content:!0}),x.forEach(n),k=E(M),I.l(M),P=R(),this.h()},h(){document.title="My Menthor | Home",l(s,"rel","canonical"),l(s,"href",ql),l(t,"property","og:url"),l(t,"content",ql),l(r,"property","og:type"),l(r,"content","article"),l(u,"property","og:title"),l(u,"content",Wl),l(f,"name","Description"),l(f,"content",ya),l(m,"property","og:description"),l(m,"content",ya),l(d,"property","og:image"),l(d,"content",Ol),l(_,"property","og:image:width"),l(_,"content",Bs),l(v,"property","og:image:height"),l(v,"content",Ns),l(g,"name","twitter:image"),l(g,"content",Ol),l(p,"name","twitter:card"),l(p,"content","My Menthor | Your company on another management level"),l(A,"name","twitter:title"),l(A,"content",Wl),l(C,"name","twitter:description"),l(C,"content",ya)},m(M,x){a(document.head,s),a(document.head,t),a(document.head,r),a(document.head,u),a(document.head,f),a(document.head,m),a(document.head,d),a(document.head,_),a(document.head,v),a(document.head,g),a(document.head,p),a(document.head,A),a(document.head,C),V(M,k,x),D[y].m(M,x),V(M,P,x),T=!0},p(M,[x]){var N;(!T||x&1)&&e!==(e=(N=M[0].data.post)==null?void 0:N.title)&&(document.title=e),I.p(M,x)},i(M){T||(te(I),T=!0)},o(M){ee(I),T=!1},d(M){M&&(n(k),n(P)),n(s),n(t),n(r),n(u),n(f),n(m),n(d),n(_),n(v),n(g),n(p),n(A),n(C),D[y].d(M)}}}function Os(o,e,s){let t;La(o,$t,f=>s(0,t=f));let{$$slots:r={},$$scope:u}=e;return gt("$paraglide-sveltekit:context"),o.$$set=f=>{"$$scope"in f&&s(2,u=f.$$scope)},[t,r,u]}class tn extends ze{constructor(e){super(),Ke(this,e,Os,Gs,Me,{})}}export{tn as component,en as universal};
