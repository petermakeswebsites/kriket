import{S as te,i as re,s as oe,l as Q,g as c,o as V,p as se,q as W,d as a,n as ae,t as I,h as q,E as z,e as b,k as C,w as X,c as v,a as $,m as N,x as Y,b as F,H as w,y as Z,W as le,a3 as ne,j as U,B as x}from"../../chunks/index-950aed72.js";import{f as ee,R as ie}from"../../chunks/Root-7a947c2f.js";import{I as fe}from"../../chunks/Offcanvas.svelte_svelte_type_style_lang-c7c0051e.js";import"../../chunks/index-c6d6b0b6.js";function ue(u){let t;return{c(){t=I("whoops! an error happened")},l(r){t=q(r,"whoops! an error happened")},m(r,l){c(r,t,l)},p:z,i:z,o:z,d(r){r&&a(t)}}}function me(u){var J;let t,r=u[0].domain+"",l,m,i,n,_,o,f,p,h,D=((J=u[0].custom)==null?void 0:J.version)+"",B,H,k,M=ee(u[0].time,"MMM do yyyy h:mm bbb")+"",R,S,y,T=u[0].domain+"",A,d,g,G;return _=new ie({props:{value:u[0].error}}),f=new fe({props:{name:"braces"}}),{c(){t=b("h1"),l=I(r),m=C(),i=b("td"),n=b("div"),X(_.$$.fragment),o=b("a"),X(f.$$.fragment),p=C(),h=b("td"),B=I(D),H=C(),k=b("td"),R=I(M),S=C(),y=b("td"),A=I(T),this.h()},l(e){t=v(e,"H1",{});var s=$(t);l=q(s,r),s.forEach(a),m=N(e),i=v(e,"TD",{class:!0});var E=$(i);n=v(E,"DIV",{class:!0});var j=$(n);Y(_.$$.fragment,j),j.forEach(a),o=v(E,"A",{href:!0});var K=$(o);Y(f.$$.fragment,K),K.forEach(a),E.forEach(a),p=N(e),h=v(e,"TD",{});var L=$(h);B=q(L,D),L.forEach(a),H=N(e),k=v(e,"TD",{});var O=$(k);R=q(O,M),O.forEach(a),S=N(e),y=v(e,"TD",{});var P=$(y);A=q(P,T),P.forEach(a),this.h()},h(){F(n,"class","bug-list-error-tree"),F(o,"href","#"),F(i,"class","bug-list-error")},m(e,s){c(e,t,s),w(t,l),c(e,m,s),c(e,i,s),w(i,n),Z(_,n,null),w(i,o),Z(f,o,null),c(e,p,s),c(e,h,s),w(h,B),c(e,H,s),c(e,k,s),w(k,R),c(e,S,s),c(e,y,s),w(y,A),d=!0,g||(G=le(o,"click",ne(u[1])),g=!0)},p(e,s){var j;(!d||s&1)&&r!==(r=e[0].domain+"")&&U(l,r);const E={};s&1&&(E.value=e[0].error),_.$set(E),(!d||s&1)&&D!==(D=((j=e[0].custom)==null?void 0:j.version)+"")&&U(B,D),(!d||s&1)&&M!==(M=ee(e[0].time,"MMM do yyyy h:mm bbb")+"")&&U(R,M),(!d||s&1)&&T!==(T=e[0].domain+"")&&U(A,T)},i(e){d||(W(_.$$.fragment,e),W(f.$$.fragment,e),d=!0)},o(e){V(_.$$.fragment,e),V(f.$$.fragment,e),d=!1},d(e){e&&a(t),e&&a(m),e&&a(i),x(_),x(f),e&&a(p),e&&a(h),e&&a(H),e&&a(k),e&&a(S),e&&a(y),g=!1,G()}}}function _e(u){let t,r,l,m;const i=[me,ue],n=[];function _(o,f){return o[0]?0:1}return t=_(u),r=n[t]=i[t](u),{c(){r.c(),l=Q()},l(o){r.l(o),l=Q()},m(o,f){n[t].m(o,f),c(o,l,f),m=!0},p(o,[f]){let p=t;t=_(o),t===p?n[t].p(o,f):(ae(),V(n[p],1,1,()=>{n[p]=null}),se(),r=n[t],r?r.p(o,f):(r=n[t]=i[t](o),r.c()),W(r,1),r.m(l.parentNode,l))},i(o){m||(W(r),m=!0)},o(o){V(r),m=!1},d(o){n[t].d(o),o&&a(l)}}}function ce(u,t,r){let{bug:l}=t;const m=()=>console.warn(l.error);return u.$$set=i=>{"bug"in i&&r(0,l=i.bug)},[l,m]}class $e extends te{constructor(t){super(),re(this,t,ce,_e,oe,{bug:0})}}export{$e as default};
