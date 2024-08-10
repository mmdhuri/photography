import{G as K,a as l,c as D,h as v,g as M}from"./index.f72472e7.js";import{h as Q,a as b}from"./render.2b977c60.js";function ue(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function le(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=K(e);if(t)return t.$el||t}const H={xs:18,sm:24,md:32,lg:38,xl:46},T={size:String};function G(e,t=H){return l(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const L="0 0 24 24",O=e=>e,S=e=>`ionicons ${e}`,j={"mdi-":e=>`mdi ${e}`,"icon-":O,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":O,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},I={o_:"-outlined",r_:"-round",s_:"-sharp"},q={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},U=new RegExp("^("+Object.keys(j).join("|")+")"),J=new RegExp("^("+Object.keys(I).join("|")+")"),w=new RegExp("^("+Object.keys(q).join("|")+")"),W=/^[Mm]\s?[-+]?\.?\d/,X=/^img:/,Y=/^svguse:/,Z=/^ion-/,ee=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var ce=D({name:"QIcon",props:{...T,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=M(),n=G(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=l(()=>{let o,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(W.test(r)===!0){const[s,h=L]=r.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(R=>{const[$,x,k]=R.split("@@");return v("path",{style:x,d:$,transform:k})})}}if(X.test(r)===!0)return{img:!0,src:r.substring(4)};if(Y.test(r)===!0){const[s,h=L]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let p=" ";const g=r.match(U);if(g!==null)o=j[g[1]](r);else if(ee.test(r)===!0)o=r;else if(Z.test(r)===!0)o=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(w.test(r)===!0){o="notranslate material-symbols";const s=r.match(w);s!==null&&(r=r.substring(6),o+=q[s[1]]),p=r}else{o="notranslate material-icons";const s=r.match(J);s!==null&&(r=r.substring(2),o+=I[s[1]]),p=r}return{cls:o,content:p}});return()=>{const o={class:c.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,o,Q(t.default)):u.value.img===!0?v(e.tag,o,b(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v(e.tag,o,b(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v(e.tag,o,b(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(o.class+=" "+u.value.cls),v(e.tag,o,b(t.default,[u.value.content])))}}});function V(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(a=>{V(e,a)}):e.add(t)}function fe(e){const t=new Set;return e.forEach(a=>{V(t,a)}),Array.from(t)}function te(e){return e.appContext.config.globalProperties.$router!==void 0}function z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ne(e,t){for(const a in t){const n=t[a],c=e[a];if(typeof n=="string"){if(n!==c)return!1}else if(Array.isArray(c)===!1||c.length!==n.length||n.some((u,o)=>u!==c[o]))return!1}return!0}function C(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function re(e,t){return Array.isArray(e)===!0?C(e,t):Array.isArray(t)===!0?C(t,e):e===t}function se(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(re(e[a],t[a])===!1)return!1;return!0}const ae={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},ve={...ae,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function ge({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=M(),{props:n,proxy:c,emit:u}=a,o=te(a),r=l(()=>n.disable!==!0&&n.href!==void 0),p=t===!0?l(()=>o===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):l(()=>o===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),g=l(()=>p.value===!0?E(n.to):null),s=l(()=>g.value!==null),h=l(()=>r.value===!0||s.value===!0),R=l(()=>n.type==="a"||h.value===!0?"a":n.tag||e||"div"),$=l(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:g.value.href,target:n.target}:{}),x=l(()=>{if(s.value===!1)return-1;const{matched:i}=g.value,{length:f}=i,d=i[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const y=m.findIndex(_.bind(null,d));if(y!==-1)return y;const B=z(i[f-2]);return f>1&&z(d)===B&&m[m.length-1].path!==B?m.findIndex(_.bind(null,i[f-2])):y}),k=l(()=>s.value===!0&&x.value!==-1&&ne(c.$route.params,g.value.params)),A=l(()=>k.value===!0&&x.value===c.$route.matched.length-1&&se(c.$route.params,g.value.params)),N=l(()=>s.value===!0?A.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function E(i){try{return c.$router.resolve(i)}catch{}return null}function P(i,{returnRouterError:f,to:d=n.to,replace:m=n.replace}={}){if(n.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||n.target==="_blank")return Promise.resolve(!1);i.preventDefault();const y=c.$router[m===!0?"replace":"push"](d);return f===!0?y:y.then(()=>{}).catch(()=>{})}function F(i){if(s.value===!0){const f=d=>P(i,d);u("click",i,f),i.defaultPrevented!==!0&&f()}else u("click",i)}return{hasRouterLink:s,hasHrefLink:r,hasLink:h,linkTag:R,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:N,linkAttrs:$,getLink:E,navigateToRouterLink:P,navigateOnClick:F}}export{ce as Q,ge as a,fe as b,ue as c,H as d,T as e,ae as f,le as g,G as h,ve as u,te as v};
