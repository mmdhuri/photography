import{a as o,c as F,h as d,H as J,t as M,M as Y,N as Z,O as V,P as ee,r as z,f as te,F as ne,g as ae,u as _,T as le,j as ue,Q as re,v as ie,J as se,E as O,z as oe}from"./index.b131fd7f.js";import{b as j,c as ce,d as de,e as fe,f as ve,a as be,Q as A}from"./use-router-link.89f2264e.js";import{a as me}from"./render.c923b6f2.js";const ge={size:{type:[String,Number],default:"1em"},color:String};function he(e){return{cSize:o(()=>e.size in j?`${j[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var ye=F({name:"QSpinner",props:{...ge,thickness:{type:Number,default:5}},setup(e){const{cSize:a,classes:l}=he(e);return()=>d("svg",{class:l.value+" q-spinner-mat",width:a.value,height:a.value,viewBox:"25 25 50 50"},[d("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function ke(e,a=250){let l=!1,i;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},a),i=e.apply(this,arguments)),i}}function K(e,a,l,i){l.modifiers.stop===!0&&V(e);const r=l.modifiers.color;let y=l.modifiers.center;y=y===!0||i===!0;const m=document.createElement("span"),c=document.createElement("span"),x=ee(e),{left:B,top:q,width:k,height:n}=a.getBoundingClientRect(),g=Math.sqrt(k*k+n*n),f=g/2,p=`${(k-g)/2}px`,u=y?p:`${x.left-B-f}px`,v=`${(n-g)/2}px`,R=y?v:`${x.top-q-f}px`;c.className="q-ripple__inner",ce(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${u},${R},0) scale3d(.2,.2,1)`,opacity:0}),m.className=`q-ripple${r?" text-"+r:""}`,m.setAttribute("dir","ltr"),m.appendChild(c),a.appendChild(m);const T=()=>{m.remove(),clearTimeout(L)};l.abort.push(T);let L=setTimeout(()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${p},${v},0) scale3d(1,1,1)`,c.style.opacity=.2,L=setTimeout(()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,L=setTimeout(()=>{m.remove(),l.abort.splice(l.abort.indexOf(T),1)},275)},250)},50)}function Q(e,{modifiers:a,value:l,arg:i}){const r=Object.assign({},e.cfg.ripple,a,l);e.modifiers={early:r.early===!0,stop:r.stop===!0,center:r.center===!0,color:r.color||i,keyCodes:[].concat(r.keyCodes||13)}}var pe=J({name:"ripple",beforeMount(e,a){const l=a.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const i={cfg:l,enabled:a.value!==!1,modifiers:{},abort:[],start(r){i.enabled===!0&&r.qSkipRipple!==!0&&r.type===(i.modifiers.early===!0?"pointerdown":"click")&&K(r,e,i,r.qKeyEvent===!0)},keystart:ke(r=>{i.enabled===!0&&r.qSkipRipple!==!0&&M(r,i.modifiers.keyCodes)===!0&&r.type===`key${i.modifiers.early===!0?"down":"up"}`&&K(r,e,i,!0)},300)};Q(i,a),e.__qripple=i,Y(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,a){if(a.oldValue!==a.value){const l=e.__qripple;l!==void 0&&(l.enabled=a.value!==!1,l.enabled===!0&&Object(a.value)===a.value&&Q(l,a))}},beforeUnmount(e){const a=e.__qripple;a!==void 0&&(a.abort.forEach(l=>{l()}),Z(a,"main"),delete e._qripple)}});const H={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},qe=Object.keys(H),xe={align:{type:String,validator:e=>qe.includes(e)}};function _e(e){return o(()=>{const a=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${H[a]}`})}const D={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ee={xs:8,sm:10,md:14,lg:20,xl:24},we=["button","submit","reset"],Ce=/[^\s]\/[^\s]/,Be=["flat","outline","push","unelevated"];function Le(e,a){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":a}const Se={...de,...fe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Be.reduce((e,a)=>(e[a]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...xe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},$e={...Se,round:Boolean};function Te(e){const a=ve(e,Ee),l=_e(e),{hasRouterLink:i,hasLink:r,linkTag:y,linkAttrs:m,navigateOnClick:c}=be({fallbackTag:"button"}),x=o(()=>{const u=e.fab===!1&&e.fabMini===!1?a.value:{};return e.padding!==void 0?Object.assign({},u,{padding:e.padding.split(/\s+/).map(v=>v in D?D[v]+"px":v).join(" "),minWidth:"0",minHeight:"0"}):u}),B=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),q=o(()=>e.disable!==!0&&e.loading!==!0),k=o(()=>q.value===!0?e.tabindex||0:-1),n=o(()=>Le(e,"standard")),g=o(()=>{const u={tabindex:k.value};return r.value===!0?Object.assign(u,m.value):we.includes(e.type)===!0&&(u.type=e.type),y.value==="a"?(e.disable===!0?u["aria-disabled"]="true":u.href===void 0&&(u.role="button"),i.value!==!0&&Ce.test(e.type)===!0&&(u.type=e.type)):e.disable===!0&&(u.disabled="",u["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(u,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),u}),f=o(()=>{let u;e.color!==void 0?e.flat===!0||e.outline===!0?u=`text-${e.textColor||e.color}`:u=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(u=`text-${e.textColor}`);const v=e.round===!0?"round":`rectangle${B.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${v}`+(u!==void 0?" "+u:"")+(q.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:f,style:x,innerClasses:p,attributes:g,hasLink:r,linkTag:y,navigateOnClick:c,isActionable:q}}const{passiveCapture:b}=ue;let E=null,w=null,C=null;var Pe=F({name:"QBtn",props:{...$e,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:a,emit:l}){const{proxy:i}=ae(),{classes:r,style:y,innerClasses:m,attributes:c,hasLink:x,linkTag:B,navigateOnClick:q,isActionable:k}=Te(e),n=z(null),g=z(null);let f=null,p,u=null;const v=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:x.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),T=o(()=>({center:e.round})),L=o(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),I=o(()=>{if(e.loading===!0)return{onMousedown:$,onTouchstart:$,onClick:$,onKeydown:$,onKeyup:$};if(k.value===!0){const t={onClick:N,onKeydown:U,onMousedown:G};if(i.$q.platform.has.touch===!0){const s=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${s}`]=X}return t}return{onClick:_}}),W=o(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+r.value,style:y.value,...c.value,...I.value}));function N(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const s=document.activeElement;if(e.type==="submit"&&s!==document.body&&n.value.contains(s)===!1&&s.contains(n.value)===!1){n.value.focus();const P=()=>{document.removeEventListener("keydown",_,!0),document.removeEventListener("keyup",P,b),n.value!==null&&n.value.removeEventListener("blur",P,b)};document.addEventListener("keydown",_,!0),document.addEventListener("keyup",P,b),n.value.addEventListener("blur",P,b)}}q(t)}}function U(t){n.value!==null&&(l("keydown",t),M(t,[13,32])===!0&&w!==n.value&&(w!==null&&S(),t.defaultPrevented!==!0&&(n.value.focus(),w=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",h,!0),n.value.addEventListener("blur",h,b)),_(t)))}function X(t){n.value!==null&&(l("touchstart",t),t.defaultPrevented!==!0&&(E!==n.value&&(E!==null&&S(),E=n.value,f=t.target,f.addEventListener("touchcancel",h,b),f.addEventListener("touchend",h,b)),p=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,p=!1},200)))}function G(t){n.value!==null&&(t.qSkipRipple=p===!0,l("mousedown",t),t.defaultPrevented!==!0&&C!==n.value&&(C!==null&&S(),C=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",h,b)))}function h(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(w===n.value&&M(t,[13,32])===!0){const s=new MouseEvent("click",t);s.qKeyEvent=!0,t.defaultPrevented===!0&&re(s),t.cancelBubble===!0&&V(s),n.value.dispatchEvent(s),_(t),t.qKeyEvent=!0}l("keyup",t)}S()}}function S(t){const s=g.value;t!==!0&&(E===n.value||C===n.value)&&s!==null&&s!==document.activeElement&&(s.setAttribute("tabindex",-1),s.focus()),E===n.value&&(f!==null&&(f.removeEventListener("touchcancel",h,b),f.removeEventListener("touchend",h,b)),E=f=null),C===n.value&&(document.removeEventListener("mouseup",h,b),C=null),w===n.value&&(document.removeEventListener("keyup",h,!0),n.value!==null&&n.value.removeEventListener("blur",h,b),w=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function $(t){_(t),t.qSkipRipple=!0}return te(()=>{S(!0)}),Object.assign(i,{click:t=>{k.value===!0&&N(t)}}),()=>{let t=[];e.icon!==void 0&&t.push(d(A,{name:e.icon,left:e.stack!==!0&&v.value===!0,role:"img"})),v.value===!0&&t.push(d("span",{class:"block"},[e.label])),t=me(a.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(d(A,{name:e.iconRight,right:e.stack!==!0&&v.value===!0,role:"img"}));const s=[d("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&s.push(d("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[d("span",{class:"q-btn__progress-indicator fit block",style:L.value})])),s.push(d("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+m.value},t)),e.loading!==null&&s.push(d(le,{name:"q-transition--fade"},()=>e.loading===!0?[d("span",{key:"loading",class:"absolute-full flex flex-center"},a.loading!==void 0?a.loading():[d(ye)])]:null)),ne(d(B.value,W.value,s),[[pe,R.value,void 0,T.value]])}}});const Re={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},Me=O("div",{style:{"font-size":"30vh"}}," 404 ",-1),Oe=O("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1),Ae=Object.assign({name:"ErrorNotFound"},{__name:"ErrorNotFound",setup(e){return(a,l)=>(ie(),se("div",Re,[O("div",null,[Me,Oe,oe(Pe,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])]))}});export{Ae as default};
