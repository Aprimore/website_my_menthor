var E=Object.defineProperty;var C=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(C(t,typeof e!="symbol"?e+"":e,n),n);import{r as $,n as c,q as p,j as b,d as j,u as B,v,w as I,x,y as O,z,A as w,B as A,C as D,D as F,E as L,F as M}from"./scheduler.2tipIW4L.js";const o=new Set;let d;function H(){d={r:0,c:[],p:d}}function J(){d.r||$(d.c),d=d.p}function N(t,e){t&&t.i&&(o.delete(t),t.i(e))}function K(t,e,n,a){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function Q(t){t&&t.c()}function T(t,e){t&&t.l(e)}function P(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const f=t.$$.on_mount.map(A).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function R(t,e){const n=t.$$;n.fragment!==null&&(O(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function U(t,e){t.$$.dirty[0]===-1&&(D.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(t,e,n,a,i,f,l=null,S=[-1]){const u=z;w(t);const s=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||u.$$.root};l&&l(s.root);let h=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),h&&U(t,r)),g}):[],s.update(),h=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){L();const r=b(e.target);s.fragment&&s.fragment.l(r),r.forEach(j)}else s.fragment&&s.fragment.c();e.intro&&N(t.$$.fragment),P(t,e.target,e.anchor),M(),B()}w(u)}class X{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){R(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const V="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(V);export{X as S,K as a,Q as b,J as c,T as d,R as e,H as g,W as i,P as m,N as t};
