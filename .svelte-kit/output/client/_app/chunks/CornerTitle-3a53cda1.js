import{S as W,i as j,s as q,N as g,e as h,t as k,k as A,c as m,a as w,g as y,d,n as D,b as _,aa as z,f as C,L as c,h as E,O as T,ad as L,l as N,E as H,x as b,r as I,u as P,w as M,A as O}from"./vendor-dfb9df3e.js";function S(s){let e,a,f,t,i,r,o,u;return{c(){e=h("div"),a=h("p"),f=k(s[0]),t=A(),i=h("p"),r=k(s[1]),this.h()},l(l){e=m(l,"DIV",{"aria-hidden":!0,class:!0,style:!0});var n=w(e);a=m(n,"P",{class:!0});var p=w(a);f=y(p,s[0]),p.forEach(d),t=D(n),i=m(n,"P",{class:!0});var v=w(i);r=y(v,s[1]),v.forEach(d),n.forEach(d),this.h()},h(){_(a,"class","corner-title svelte-1o6wnzi"),_(i,"class","corner-subtitle svelte-1o6wnzi"),_(e,"aria-hidden","true"),_(e,"class","corner svelte-1o6wnzi"),z(e,"max-width",s[5]+"px")},m(l,n){C(l,e,n),c(e,a),c(a,f),c(e,t),c(e,i),c(i,r),u=!0},p(l,n){(!u||n&1)&&E(f,l[0]),(!u||n&2)&&E(r,l[1]),(!u||n&32)&&z(e,"max-width",l[5]+"px")},i(l){u||(l&&g(()=>{o||(o=T(e,L,{x:-200},!0)),o.run(1)}),u=!0)},o(l){l&&(o||(o=T(e,L,{x:-200},!1)),o.run(0)),u=!1},d(l){l&&d(e),l&&o&&o.end()}}}function V(s){let e,a,f;g(s[6]);let t=!s[2]&&s[3]>1168&&s[4]&&S(s);return{c(){t&&t.c(),e=N()},l(i){t&&t.l(i),e=N()},m(i,r){t&&t.m(i,r),C(i,e,r),a||(f=H(window,"resize",s[6]),a=!0)},p(i,[r]){!i[2]&&i[3]>1168&&i[4]?t?(t.p(i,r),r&28&&b(t,1)):(t=S(i),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(I(),P(t,1,1,()=>{t=null}),M())},i(i){b(t)},o(i){P(t)},d(i){t&&t.d(i),i&&d(e),a=!1,f()}}}function B(s,e,a){let f,{title:t}=e,{subtitle:i}=e,{intersecting:r}=e,o,u=!1;O(()=>{setTimeout(()=>{a(4,u=!0)},1500)});function l(){a(3,o=window.innerWidth)}return s.$$set=n=>{"title"in n&&a(0,t=n.title),"subtitle"in n&&a(1,i=n.subtitle),"intersecting"in n&&a(2,r=n.intersecting)},s.$$.update=()=>{s.$$.dirty&8&&a(5,f=(o-768)/2*.85)},[t,i,r,o,u,f,l]}class G extends W{constructor(e){super();j(this,e,B,V,q,{title:0,subtitle:1,intersecting:2})}}export{G as C};