var O=Object.defineProperty;var G=(t,e,n)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function I(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function F(t){return t()}function ot(){return Object.create(null)}function U(t){t.forEach(F)}function at(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function ft(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function dt(t){return Object.keys(t).length===0}function S(t,...e){if(t==null){for(const i of e)i(void 0);return I}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function _t(t){let e;return S(t,n=>e=n)(),e}function ht(t,e,n){t.$$.on_destroy.push(S(e,n))}function mt(t,e,n,i){if(t){const s=j(t,e,n,i);return t[0](s)}}function j(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function yt(t,e,n,i,s,c){if(s){const r=j(e,n,i,c);t.p(r,s)}}function bt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function gt(t){return t??""}let x=!1;function xt(){x=!0}function wt(){x=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:J(1,s,W=>e[n[W]].claim_order,a))-1;i[l]=n[u]+1;const k=u+1;n[k]=l,s=Math.max(k,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const u=a<c.length?c[a]:null;t.insertBefore(r[l],u)}}function Q(t,e){t.appendChild(e)}function V(t,e){if(x){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function X(t,e,n){t.insertBefore(e,n||null)}function Y(t,e,n){x&&!n?V(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function N(t){return document.createElement(t)}function D(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function vt(){return A(" ")}function Tt(){return A("")}function C(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t,e){for(const n in e)Z(t,n,e[n])}function At(t){return t.dataset.svelteH}function kt(t){return t===""?null:+t}function Ct(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,s=!1){P(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function q(t,e,n,i){return z(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return q(t,e,n,N)}function Mt(t,e,n){return q(t,e,n,D)}function $(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Lt(t){return $(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function St(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new w(e);P(t);const s=t.splice(n,i-n+1);b(s[0]),b(s[s.length-1]);const c=s.slice(1,s.length-1);if(c.length===0)return new w(e);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new w(e,c)}function jt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function Pt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let y;function tt(){if(y===void 0){y=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{y=!0}}return y}function zt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=N("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=tt();let c;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",c=C(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{c=C(i.contentWindow,"resize",e),e()}),Q(t,i),()=>{(s||c&&i.contentWindow)&&c(),b(i)}}function qt(t,e,n){t.classList.toggle(e,!!n)}function et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Bt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const c=s.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(s)):c===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class nt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=D(n.nodeName):this.e=N(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)X(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(b)}}class w extends nt{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Y(this.t,this.n[i],n)}}function Wt(t,e){return new t(e)}let g;function E(t){g=t}function h(){if(!g)throw new Error("Function called outside component initialization");return g}function Ot(t){h().$$.on_mount.push(t)}function Gt(t){h().$$.after_update.push(t)}function It(t){h().$$.on_destroy.push(t)}function Rt(){const t=h();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=et(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function Ft(t,e){return h().$$.context.set(t,e),e}function Ut(t){return h().$$.context.get(t)}function Jt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],M=[];let _=[];const L=[],B=Promise.resolve();let T=!1;function it(){T||(T=!0,B.then(rt))}function Kt(){return it(),B}function st(t){_.push(t)}const v=new Set;let d=0;function rt(){if(d!==0)return;const t=g;do{try{for(;d<m.length;){const e=m[d];d++,E(e),ct(e.$$)}}catch(e){throw m.length=0,d=0,e}for(E(null),m.length=0,d=0;M.length;)M.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];v.has(n)||(v.add(n),n())}_.length=0}while(m.length);for(;L.length;)L.pop()();T=!1,v.clear(),E(t)}function ct(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}function Qt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{D as $,E as A,F as B,m as C,it as D,xt as E,wt as F,Gt as G,Pt as H,jt as I,M as J,Wt as K,Kt as L,w as M,St as N,ft as O,Dt as P,C as Q,kt as R,Rt as S,mt as T,qt as U,yt as V,bt as W,pt as X,Jt as Y,Et as Z,R as _,Z as a,Mt as a0,Nt as a1,zt as a2,It as a3,_t as a4,ht as a5,Ft as a6,gt as a7,Tt as b,Ht as c,b as d,N as e,Ut as f,At as g,vt as h,Y as i,Ct as j,$ as k,Lt as l,V as m,I as n,Ot as o,Bt as p,ot as q,U as r,ut as s,A as t,rt as u,at as v,dt as w,st as x,Qt as y,g as z};
