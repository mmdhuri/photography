import{c as q,i as ee,e as H,p as U,a as g,h as p,l as K,d as te,g as E,w as Q,o as $,f as D,n as X,j as W,r as w,k as I,m as j,q as L,s as ne,t as B,u as oe,v as ie,x,y as f,z,A as R,B as le,C as re}from"./index.9840484d.js";import{h as se,a as ae}from"./render.800c307f.js";import{c as N,g as ce}from"./dom.08e8c6b3.js";var ue=q({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:n}}=E(),t=ee(K,H);if(t===H)return console.error("QPageContainer needs to be child of QLayout"),H;U(te,!0);const l=g(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>p("div",{class:"q-page-container",style:l.value},se(a.default))}});const de=[Element,String],fe=[null,document,document.body,document.scrollingElement,document.documentElement];function he(e,a){let n=ce(a);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return fe.includes(n)?window:n}function me(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ve(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let C;function O(){if(C!==void 0)return C;const e=document.createElement("p"),a=document.createElement("div");N(e,{width:"100%",height:"200px"}),N(a,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),a.appendChild(e),document.body.appendChild(a);const n=e.offsetWidth;a.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=a.clientWidth),a.remove(),C=n-t,C}const{passive:V}=W,ge=["both","horizontal","vertical"];var pe=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ge.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:de},emits:["scroll"],setup(e,{emit:a}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,s;Q(()=>e.scrollTarget,()=>{r(),m()});function u(){t!==null&&t();const v=Math.max(0,me(l)),y=ve(l),d={top:v-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const S=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:v,left:y},n.directionChanged=n.direction!==S,n.delta=d,n.directionChanged===!0&&(n.direction=S,n.inflectionPoint=n.position),a("scroll",{...n})}function m(){l=he(s,e.scrollTarget),l.addEventListener("scroll",i,V),i(!0)}function r(){l!==void 0&&(l.removeEventListener("scroll",i,V),l=void 0)}function i(v){if(v===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[y,d]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{d(y),t=null}}}const{proxy:h}=E();return Q(()=>h.$q.lang.rtl,u),$(()=>{s=h.$el.parentNode,m()}),D(()=>{t!==null&&t(),r()}),Object.assign(h,{trigger:i,getPosition:()=>n}),X}});function we(){const e=w(!I.value);return e.value===!1&&$(()=>{e.value=!0}),{isHydrated:e}}const G=typeof ResizeObserver!="undefined",Y=G===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var A=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let n=null,t,l={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:i}=t;(r!==l.width||i!==l.height)&&(l={width:r,height:i},a("resize",l))}}const{proxy:m}=E();if(m.trigger=s,G===!0){let r;const i=h=>{t=m.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):h!==!0&&j(()=>{i(!0)})};return $(()=>{i()}),D(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),X}else{let h=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,W.passive),i=void 0)},v=function(){h(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,W.passive),u())};const{isHydrated:r}=we();let i;return $(()=>{j(()=>{t=m.$el,t&&v()})}),D(h),()=>{if(r.value===!0)return p("object",{class:"q--avoid-card-border",style:Y.style,tabindex:-1,type:"text/html",data:Y.url,"aria-hidden":"true",onLoad:v})}}}}),be=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:n}){const{proxy:{$q:t}}=E(),l=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),m=w({position:0,direction:"down",inflectionPoint:0}),r=w(0),i=w(I.value===!0?0:O()),h=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=g(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=g(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=g(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function S(o){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};m.value=c,e.onScroll!==void 0&&n("scroll",c)}}function J(o){const{height:c,width:b}=o;let _=!1;s.value!==c&&(_=!0,s.value=c,e.onScrollHeight!==void 0&&n("scrollHeight",c),k()),u.value!==b&&(_=!0,u.value=b),_===!0&&e.onResize!==void 0&&n("resize",o)}function Z({height:o}){r.value!==o&&(r.value=o,k())}function k(){if(e.container===!0){const o=s.value>r.value?O():0;i.value!==o&&(i.value=o)}}let T=null;const F={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:l,height:s,containerHeight:r,scrollbarWidth:i,totalWidth:g(()=>u.value+i.value),rows:g(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:L({size:0,offset:0,space:!1}),right:L({size:300,offset:0,space:!1}),footer:L({size:0,offset:0,space:!1}),left:L({size:300,offset:0,space:!1}),scroll:m,animate(){T!==null?clearTimeout(T):document.body.classList.add("q-body--layout-animate"),T=setTimeout(()=>{T=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,c,b){F[o][c]=b}};if(U(K,F),O()>0){let b=function(){o=null,c.classList.remove("hide-scrollbar")},_=function(){if(o===null){if(c.scrollHeight>t.screen.height)return;c.classList.add("hide-scrollbar")}else clearTimeout(o);o=setTimeout(b,300)},P=function(M){o!==null&&M==="remove"&&(clearTimeout(o),b()),window[`${M}EventListener`]("resize",_)},o=null;const c=document.body;Q(()=>e.container!==!0?"add":"remove",P),e.container!==!0&&P("add"),ne(()=>{P("remove")})}return()=>{const o=ae(a.default,[p(pe,{onScroll:S}),p(A,{onResize:J})]),c=p("div",{class:h.value,style:v.value,ref:e.container===!0?void 0:l,tabindex:-1},o);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:l},[p(A,{onResize:Z}),p("div",{class:"absolute-full",style:y.value},[p("div",{class:"scroll",style:d.value},[c])])]):c}}}),ye="/assets/logo.6aaaddfc.png";const _e={class:"home-header"},xe={class:"flex justify-between items-center container"},ze=f("img",{src:ye,width:"80"},null,-1),Se={class:"flex"},Te={class:"menu"},Le={class:"menu"},Ce=f("div",null,null,-1),$e={class:"home-footer",align:"center"},qe={class:"q-mb-none"},Ee=f("a",{href:"mailto:manishdhuri2000@gmail.com"},"Manish Dhuri",-1),Oe=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){w(1);const a=new Date().getFullYear();return w(!1),(n,t)=>{const l=B("router-link"),s=B("router-view");return oe(),ie(be,{view:"lHh Lpr lFf"},{default:x(()=>[f("div",_e,[f("div",xe,[f("div",null,[z(l,{to:"/",class:"menu-item q-px-sm text-weight-medium"},{default:x(()=>[ze]),_:1})]),f("div",Se,[f("div",Te,[z(l,{to:"/",class:"menu-item q-px-sm text-weight-medium"},{default:x(()=>[R(" Home ")]),_:1})]),f("div",Le,[z(l,{to:"/contact-us",class:"menu-item q-px-sm text-weight-medium"},{default:x(()=>[R(" Contact Us ")]),_:1})])]),Ce])]),z(ue,null,{default:x(()=>[z(s)]),_:1}),f("div",$e,[f("p",qe,[R(le(re(a))+" Designed & Developed by ",1),Ee])])]),_:1})}}});export{Oe as default};