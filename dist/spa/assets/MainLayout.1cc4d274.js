import{c as k,i as ae,e as H,p as te,a as d,h as b,l as ne,d as se,g as E,w as N,o as B,f as W,n as ie,j as D,r as w,k as oe,m as A,q as $,s as re,t as ue,u as ce,v as F,x as I,y as g,z as p,A as de,B as S,C as K,D as U,E as _}from"./index.f72472e7.js";import{h as M,a as fe,b as ve}from"./render.2b977c60.js";import{c as X,g as me,u as he,a as ge,Q as be}from"./use-router-link.b56cd115.js";import{u as pe,a as ye}from"./use-dark.735a7535.js";var we=k({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=E(),t=ae(ne,H);if(t===H)return console.error("QPageContainer needs to be child of QLayout"),H;te(se,!0);const a=d(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>b("div",{class:"q-page-container",style:a.value},M(o.default))}});const _e=[Element,String],xe=[null,document,document.body,document.scrollingElement,document.documentElement];function qe(e,o){let n=me(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return xe.includes(n)?window:n}function Se(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ke(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let R;function j(){if(R!==void 0)return R;const e=document.createElement("p"),o=document.createElement("div");X(e,{width:"100%",height:"200px"}),X(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=o.clientWidth),o.remove(),R=n-t,R}const{passive:Y}=D,Le=["both","horizontal","vertical"];var ze=k({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Le.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:_e},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,a,r;N(()=>e.scrollTarget,()=>{s(),y()});function f(){t!==null&&t();const h=Math.max(0,Se(a)),x=ke(a),c={top:h-n.position.top,left:x-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const L=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:h,left:x},n.directionChanged=n.direction!==L,n.delta=c,n.directionChanged===!0&&(n.direction=L,n.inflectionPoint=n.position),o("scroll",{...n})}function y(){a=qe(r,e.scrollTarget),a.addEventListener("scroll",l,Y),l(!0)}function s(){a!==void 0&&(a.removeEventListener("scroll",l,Y),a=void 0)}function l(h){if(h===!0||e.debounce===0||e.debounce==="0")f();else if(t===null){const[x,c]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];t=()=>{c(x),t=null}}}const{proxy:v}=E();return N(()=>v.$q.lang.rtl,f),B(()=>{r=v.$el.parentNode,y()}),W(()=>{t!==null&&t(),s()}),Object.assign(v,{trigger:l,getPosition:()=>n}),ie}});function Ce(){const e=w(!oe.value);return e.value===!1&&B(()=>{e.value=!0}),{isHydrated:e}}const le=typeof ResizeObserver!="undefined",G=le===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var J=k({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,t,a={width:-1,height:-1};function r(s){s===!0||e.debounce===0||e.debounce==="0"?f():n===null&&(n=setTimeout(f,e.debounce))}function f(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:l}=t;(s!==a.width||l!==a.height)&&(a={width:s,height:l},o("resize",a))}}const{proxy:y}=E();if(y.trigger=r,le===!0){let s;const l=v=>{t=y.$el.parentNode,t?(s=new ResizeObserver(r),s.observe(t),f()):v!==!0&&A(()=>{l(!0)})};return B(()=>{l()}),W(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),ie}else{let v=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",r,D.passive),l=void 0)},h=function(){v(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",r,D.passive),f())};const{isHydrated:s}=Ce();let l;return B(()=>{A(()=>{t=y.$el,t&&h()})}),W(v),()=>{if(s.value===!0)return b("object",{class:"q--avoid-card-border",style:G.style,tabindex:-1,type:"text/html",data:G.url,"aria-hidden":"true",onLoad:h})}}}}),Ee=k({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=E(),a=w(null),r=w(t.screen.height),f=w(e.container===!0?0:t.screen.width),y=w({position:0,direction:"down",inflectionPoint:0}),s=w(0),l=w(oe.value===!0?0:j()),v=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=d(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),c=d(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function L(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};y.value=m,e.onScroll!==void 0&&n("scroll",m)}}function P(i){const{height:m,width:q}=i;let C=!1;r.value!==m&&(C=!0,r.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),T()),f.value!==q&&(C=!0,f.value=q),C===!0&&e.onResize!==void 0&&n("resize",i)}function Q({height:i}){s.value!==i&&(s.value=i,T())}function T(){if(e.container===!0){const i=r.value>s.value?j():0;l.value!==i&&(l.value=i)}}let z=null;const u={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:a,height:r,containerHeight:s,scrollbarWidth:l,totalWidth:d(()=>f.value+l.value),rows:d(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:$({size:0,offset:0,space:!1}),right:$({size:300,offset:0,space:!1}),footer:$({size:0,offset:0,space:!1}),left:$({size:300,offset:0,space:!1}),scroll:y,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,q){u[i][m]=q}};if(te(ne,u),j()>0){let q=function(){i=null,m.classList.remove("hide-scrollbar")},C=function(){if(i===null){if(m.scrollHeight>t.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(q,300)},O=function(V){i!==null&&V==="remove"&&(clearTimeout(i),q()),window[`${V}EventListener`]("resize",C)},i=null;const m=document.body;N(()=>e.container!==!0?"add":"remove",O),e.container!==!0&&O("add"),re(()=>{O("remove")})}return()=>{const i=fe(o.default,[b(ze,{onScroll:L}),b(J,{onResize:P})]),m=b("div",{class:v.value,style:h.value,ref:e.container===!0?void 0:a,tabindex:-1},i);return e.container===!0?b("div",{class:"q-layout-container overflow-hidden",ref:a},[b(J,{onResize:Q}),b("div",{class:"absolute-full",style:x.value},[b("div",{class:"scroll",style:c.value},[m])])]):m}}}),Te="/assets/logo.059477db.png",Z=k({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>b("div",{class:n.value},M(o.default))}}),ee=k({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=d(()=>parseInt(e.lines,10)),t=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=d(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>b("div",{style:a.value,class:t.value},M(o.default))}}),$e=k({name:"QItem",props:{...pe,...he,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:t}}=E(),a=ye(e,t),{hasLink:r,linkAttrs:f,linkClass:y,linkTag:s,navigateOnClick:l}=ge(),v=w(null),h=w(null),x=d(()=>e.clickable===!0||r.value===!0||e.tag==="label"),c=d(()=>e.disable!==!0&&x.value===!0),L=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?y.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),P=d(()=>{if(e.insetLevel===void 0)return null;const u=t.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function Q(u){c.value===!0&&(h.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===v.value?h.value.focus():document.activeElement===h.value&&v.value.focus()),l(u))}function T(u){if(c.value===!0&&ue(u,[13,32])===!0){ce(u),u.qKeyEvent=!0;const i=new MouseEvent("click",u);i.qKeyEvent=!0,v.value.dispatchEvent(i)}n("keyup",u)}function z(){const u=ve(o.default,[]);return c.value===!0&&u.unshift(b("div",{class:"q-focus-helper",tabindex:-1,ref:h})),u}return()=>{const u={ref:v,class:L.value,style:P.value,role:"listitem",onClick:Q,onKeyup:T};return c.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,f.value)):x.value===!0&&(u["aria-disabled"]="true"),b(s.value,u,z())}}});Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const o=e;return(n,t)=>(F(),I($e,{clickable:"",tag:"a",target:"_blank",href:o.link},{default:g(()=>[o.icon?(F(),I(Z,{key:0,avatar:""},{default:g(()=>[p(be,{name:o.icon},null,8,["name"])]),_:1})):de("",!0),p(Z,null,{default:g(()=>[p(ee,null,{default:g(()=>[S(K(o.title),1)]),_:1}),p(ee,{caption:""},{default:g(()=>[S(K(o.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});const Re={class:"home-header flex justify-between items-center"},Be=_("img",{src:Te,width:"120"},null,-1),Pe={class:"flex"},Qe={class:"menu"},Oe={class:"menu"},He={class:"menu"},je={class:"menu"},Ne={class:"menu"},We=_("div",null,null,-1),Ve=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){return w(1),w(!1),(o,n)=>{const t=U("router-link"),a=U("router-view");return F(),I(Ee,{view:"lHh Lpr lFf"},{default:g(()=>[_("div",Re,[_("div",null,[p(t,{to:"/",class:"menu-item q-px-sm text-weight-medium"},{default:g(()=>[Be]),_:1})]),_("div",Pe,[_("div",Qe,[p(t,{to:"/",class:"menu-item q-px-sm text-weight-medium"},{default:g(()=>[S(" Home ")]),_:1})]),_("div",Oe,[p(t,{to:"/",class:"menu-item q-px-sm text-weight-medium"},{default:g(()=>[S(" Restaurants ")]),_:1})]),_("div",He,[p(t,{to:"/",class:"menu-item q-px-sm text-weight-medium"},{default:g(()=>[S(" Menu ")]),_:1})]),_("div",je,[p(t,{to:"/about-us",class:"menu-item q-px-sm text-weight-medium"},{default:g(()=>[S(" About Us ")]),_:1})]),_("div",Ne,[p(t,{to:"/contact-us",class:"menu-item q-px-sm text-weight-medium"},{default:g(()=>[S(" Contact Us ")]),_:1})])]),We]),p(we,null,{default:g(()=>[p(a)]),_:1})]),_:1})}}});export{Ve as default};
