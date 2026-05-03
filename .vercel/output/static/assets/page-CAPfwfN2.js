import"./index-BBR7LY95.js";import{r as ee,z as zf,A as Hf,o as I,w as Gf}from"./jsx-runtime-zFjROY_C.js";import{S as jf,s as Wf,h as $l,g as $f,n as hd,u as Xf,a as qf,b as Yf,R as Kf}from"./layout-Cy-pCOHM.js";import{C as $}from"./PolymorphicComponent-BtQMmtxk.js";if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}var Zf=class extends jf{#t;#i=void 0;#e;#n;constructor(n,e){super(),this.#t=n,this.setOptions(e),this.bindMethods(),this.#s()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){const e=this.options;this.options=this.#t.defaultMutationOptions(n),Wf(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#e,observer:this}),e?.mutationKey&&this.options.mutationKey&&$l(e.mutationKey)!==$l(this.options.mutationKey)?this.reset():this.#e?.state.status==="pending"&&this.#e.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#e?.removeObserver(this)}onMutationUpdate(n){this.#s(),this.#r(n)}getCurrentResult(){return this.#i}reset(){this.#e?.removeObserver(this),this.#e=void 0,this.#s(),this.#r()}mutate(n,e){return this.#n=e,this.#e?.removeObserver(this),this.#e=this.#t.getMutationCache().build(this.#t,this.options),this.#e.addObserver(this),this.#e.execute(n)}#s(){const n=this.#e?.state??$f();this.#i={...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset}}#r(n){hd.batch(()=>{if(this.#n&&this.hasListeners()){const e=this.#i.variables,t=this.#i.context,i={client:this.#t,meta:this.options.meta,mutationKey:this.options.mutationKey};if(n?.type==="success"){try{this.#n.onSuccess?.(n.data,e,t,i)}catch(s){Promise.reject(s)}try{this.#n.onSettled?.(n.data,null,e,t,i)}catch(s){Promise.reject(s)}}else if(n?.type==="error"){try{this.#n.onError?.(n.error,e,t,i)}catch(s){Promise.reject(s)}try{this.#n.onSettled?.(void 0,n.error,e,t,i)}catch(s){Promise.reject(s)}}}this.listeners.forEach(e=>{e(this.#i)})})}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function fd(n,e){const t=Xf(),[i]=ee.useState(()=>new Zf(t,n));ee.useEffect(()=>{i.setOptions(n)},[i,n]);const s=ee.useSyncExternalStore(ee.useCallback(o=>i.subscribe(hd.batchCalls(o)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),r=ee.useCallback((o,a)=>{i.mutate(o,a).catch(qf)},[i]);if(s.error&&Yf(i.options.throwOnError,[s.error]))throw s.error;return{...s,mutate:r,mutateAsync:s.mutate}}var hi={};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}var Xl;function Jf(){if(Xl)return hi;Xl=1;var n={},e=zf();function t(x){return x&&typeof x=="object"&&"default"in x?x:{default:x}}var i=t(e);function s(x,E){for(var B=0;B<E.length;B++){var A=E[B];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(x,A.key,A)}}function r(x,E,B){return E&&s(x.prototype,E),x}var o=typeof process<"u"&&n&&!0,a=function(x){return Object.prototype.toString.call(x)==="[object String]"},l=(function(){function x(B){var A=B===void 0?{}:B,N=A.name,H=N===void 0?"stylesheet":N,V=A.optimizeForSpeed,q=V===void 0?o:V;c(a(H),"`name` must be a string"),this._name=H,this._deletedRulePlaceholder="#"+H+"-deleted-rule____{}",c(typeof q=="boolean","`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=q,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var G=typeof window<"u"&&document.querySelector('meta[property="csp-nonce"]');this._nonce=G?G.getAttribute("content"):null}var E=x.prototype;return E.setOptimizeForSpeed=function(A){c(typeof A=="boolean","`setOptimizeForSpeed` accepts a boolean"),c(this._rulesCount===0,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=A,this.inject()},E.isOptimizeForSpeed=function(){return this._optimizeForSpeed},E.inject=function(){var A=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,typeof window<"u"&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(N,H){return typeof H=="number"?A._serverSheet.cssRules[H]={cssText:N}:A._serverSheet.cssRules.push({cssText:N}),H},deleteRule:function(N){A._serverSheet.cssRules[N]=null}}},E.getSheetForTag=function(A){if(A.sheet)return A.sheet;for(var N=0;N<document.styleSheets.length;N++)if(document.styleSheets[N].ownerNode===A)return document.styleSheets[N]},E.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},E.insertRule=function(A,N){if(c(a(A),"`insertRule` accepts only strings"),typeof window>"u")return typeof N!="number"&&(N=this._serverSheet.cssRules.length),this._serverSheet.insertRule(A,N),this._rulesCount++;if(this._optimizeForSpeed){var H=this.getSheet();typeof N!="number"&&(N=H.cssRules.length);try{H.insertRule(A,N)}catch{return o||console.warn(`StyleSheet: illegal rule: 

`+A+`

See https://stackoverflow.com/q/20007992 for more info`),-1}}else{var V=this._tags[N];this._tags.push(this.makeStyleTag(this._name,A,V))}return this._rulesCount++},E.replaceRule=function(A,N){if(this._optimizeForSpeed||typeof window>"u"){var H=typeof window<"u"?this.getSheet():this._serverSheet;if(N.trim()||(N=this._deletedRulePlaceholder),!H.cssRules[A])return A;H.deleteRule(A);try{H.insertRule(N,A)}catch{o||console.warn(`StyleSheet: illegal rule: 

`+N+`

See https://stackoverflow.com/q/20007992 for more info`),H.insertRule(this._deletedRulePlaceholder,A)}}else{var V=this._tags[A];c(V,"old rule at index `"+A+"` not found"),V.textContent=N}return A},E.deleteRule=function(A){if(typeof window>"u"){this._serverSheet.deleteRule(A);return}if(this._optimizeForSpeed)this.replaceRule(A,"");else{var N=this._tags[A];c(N,"rule at index `"+A+"` not found"),N.parentNode.removeChild(N),this._tags[A]=null}},E.flush=function(){this._injected=!1,this._rulesCount=0,typeof window<"u"?(this._tags.forEach(function(A){return A&&A.parentNode.removeChild(A)}),this._tags=[]):this._serverSheet.cssRules=[]},E.cssRules=function(){var A=this;return typeof window>"u"?this._serverSheet.cssRules:this._tags.reduce(function(N,H){return H?N=N.concat(Array.prototype.map.call(A.getSheetForTag(H).cssRules,function(V){return V.cssText===A._deletedRulePlaceholder?null:V})):N.push(null),N},[])},E.makeStyleTag=function(A,N,H){N&&c(a(N),"makeStyleTag accepts only strings as second parameter");var V=document.createElement("style");this._nonce&&V.setAttribute("nonce",this._nonce),V.type="text/css",V.setAttribute("data-"+A,""),N&&V.appendChild(document.createTextNode(N));var q=document.head||document.getElementsByTagName("head")[0];return H?q.insertBefore(V,H):q.appendChild(V),V},r(x,[{key:"length",get:function(){return this._rulesCount}}]),x})();function c(x,E){if(!x)throw new Error("StyleSheet: "+E+".")}function u(x){for(var E=5381,B=x.length;B;)E=E*33^x.charCodeAt(--B);return E>>>0}var d=u,h=function(x){return x.replace(/\/style/gi,"\\/style")},p={};function g(x,E){if(!E)return"jsx-"+x;var B=String(E),A=x+B;return p[A]||(p[A]="jsx-"+d(x+"-"+B)),p[A]}function v(x,E){var B=/__jsx-style-dynamic-selector/g;typeof window>"u"&&(E=h(E));var A=x+E;return p[A]||(p[A]=E.replace(B,x)),p[A]}function m(x,E){return E===void 0&&(E={}),x.map(function(B){var A=B[0],N=B[1];return i.default.createElement("style",{id:"__"+A,key:"__"+A,nonce:E.nonce?E.nonce:void 0,dangerouslySetInnerHTML:{__html:N}})})}var f=(function(){function x(B){var A=B===void 0?{}:B,N=A.styleSheet,H=N===void 0?null:N,V=A.optimizeForSpeed,q=V===void 0?!1:V;this._sheet=H||new l({name:"styled-jsx",optimizeForSpeed:q}),this._sheet.inject(),H&&typeof q=="boolean"&&(this._sheet.setOptimizeForSpeed(q),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var E=x.prototype;return E.add=function(A){var N=this;this._optimizeForSpeed===void 0&&(this._optimizeForSpeed=Array.isArray(A.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),typeof window<"u"&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(ne,oe){return ne[oe]=0,ne},{}));var H=this.getIdAndRules(A),V=H.styleId,q=H.rules;if(V in this._instancesCounts){this._instancesCounts[V]+=1;return}var G=q.map(function(ne){return N._sheet.insertRule(ne)}).filter(function(ne){return ne!==-1});this._indices[V]=G,this._instancesCounts[V]=1},E.remove=function(A){var N=this,H=this.getIdAndRules(A).styleId;if(w(H in this._instancesCounts,"styleId: `"+H+"` not found"),this._instancesCounts[H]-=1,this._instancesCounts[H]<1){var V=this._fromServer&&this._fromServer[H];V?(V.parentNode.removeChild(V),delete this._fromServer[H]):(this._indices[H].forEach(function(q){return N._sheet.deleteRule(q)}),delete this._indices[H]),delete this._instancesCounts[H]}},E.update=function(A,N){this.add(N),this.remove(A)},E.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},E.cssRules=function(){var A=this,N=this._fromServer?Object.keys(this._fromServer).map(function(V){return[V,A._fromServer[V]]}):[],H=this._sheet.cssRules();return N.concat(Object.keys(this._indices).map(function(V){return[V,A._indices[V].map(function(q){return H[q].cssText}).join(A._optimizeForSpeed?"":`
`)]}).filter(function(V){return!!V[1]}))},E.styles=function(A){return m(this.cssRules(),A)},E.getIdAndRules=function(A){var N=A.children,H=A.dynamic,V=A.id;if(H){var q=g(V,H);return{styleId:q,rules:Array.isArray(N)?N.map(function(G){return v(q,G)}):[v(q,N)]}}return{styleId:g(V),rules:Array.isArray(N)?N:[N]}},E.selectFromServer=function(){var A=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return A.reduce(function(N,H){var V=H.id.slice(2);return N[V]=H,N},{})},x})();function w(x,E){if(!x)throw new Error("StyleSheetRegistry: "+E+".")}var _=e.createContext(null);_.displayName="StyleSheetContext";function T(){return new f}function P(x){var E=x.registry,B=x.children,A=e.useContext(_),N=e.useState(function(){return A||E||T()}),H=N[0];return i.default.createElement(_.Provider,{value:H},B)}function R(){return e.useContext(_)}var C=i.default.useInsertionEffect||e.useLayoutEffect,L=typeof window<"u"?T():void 0;function S(x){var E=L||R(),B=e.useRef(!1);return E?typeof window>"u"?(E.add(x),null):(C(function(){if(document.head)return E.add(x),B.current=!0,function(){B.current=!1,E.remove(x)}},[x.id,String(x.dynamic)]),e.useLayoutEffect(function(){if(!(!document.head||B.current))return E.add(x),function(){E.remove(x)}},[x.id,String(x.dynamic)]),null):null}return S.dynamic=function(x){return x.map(function(E){var B=E[0],A=E[1];return g(B,A)}).join(" ")},hi.StyleRegistry=P,hi.createStyleRegistry=T,hi.style=S,hi.useStyleRegistry=R,hi}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}var Hr,ql;function Qf(){return ql||(ql=1,Hr=Jf().style),Hr}var ep=Qf();const tp=Hf(ep);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var np={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ct=(n,e)=>{const t=ee.forwardRef(({color:i="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:a="",children:l,...c},u)=>ee.createElement("svg",{ref:u,...np,width:s,height:s,stroke:i,strokeWidth:o?Number(r)*24/Number(s):r,className:["lucide",`lucide-${ip(n)}`,a].join(" "),...c},[...e.map(([d,h])=>ee.createElement(d,h)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Yl=Ct("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const sp=Ct("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const rp=Ct("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const op=Ct("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ap=Ct("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const lp=Ct("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const cp=Ct("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const up=Ct("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const dp=Ct("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const hp=Ct("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const fp=Ct("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const pp=Ct("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const mp=Ct("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const gp=Ct("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const pd=Ct("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Za=ee.createContext({});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ja(n){const e=ee.useRef(null);return e.current===null&&(e.current=n()),e.current}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const md=typeof window<"u";if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const gd=md?ee.useLayoutEffect:ee.useEffect;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ir=ee.createContext(null);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Qa(n,e){n.indexOf(e)===-1&&n.push(e)}function _r(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const fn=(n,e,t)=>t>e?e:t<n?n:t;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}let el=()=>{};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const En={};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const vd=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function xd(n){return typeof n=="object"&&n!==null}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const bd=n=>/^0[^.\s]+$/u.test(n);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function _d(n){let e;return()=>(e===void 0&&(e=n()),e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const $t=n=>n;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const vp=(n,e)=>t=>e(n(t)),xs=(...n)=>n.reduce(vp);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const cs=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class tl{constructor(){this.subscriptions=[]}add(e){return Qa(this.subscriptions,e),()=>_r(this.subscriptions,e)}notify(e,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const sn=n=>n*1e3,Wt=n=>n/1e3;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function yd(n,e){return e?n*(1e3/e):0}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Td=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,xp=1e-7,bp=12;function _p(n,e,t,i,s){let r,o,a=0;do o=e+(t-e)/2,r=Td(o,i,s)-n,r>0?t=o:e=o;while(Math.abs(r)>xp&&++a<bp);return o}function bs(n,e,t,i){if(n===e&&t===i)return $t;const s=r=>_p(r,0,1,n,t);return r=>r===0||r===1?r:Td(s(r),e,i)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Sd=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const wd=n=>e=>1-n(1-e);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Md=bs(.33,1.53,.69,.99),nl=wd(Md),Ed=Sd(nl);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ad=n=>(n*=2)<1?.5*nl(n):.5*(2-Math.pow(2,-10*(n-1)));if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const il=n=>1-Math.sin(Math.acos(n)),Rd=wd(il),Pd=Sd(il);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const yp=bs(.42,0,1,1),Tp=bs(0,0,.58,1),Cd=bs(.42,0,.58,1);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Sp=n=>Array.isArray(n)&&typeof n[0]!="number";if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Dd=n=>Array.isArray(n)&&typeof n[0]=="number";if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const wp={linear:$t,easeIn:yp,easeInOut:Cd,easeOut:Tp,circIn:il,circInOut:Pd,circOut:Rd,backIn:nl,backInOut:Ed,backOut:Md,anticipate:Ad},Mp=n=>typeof n=="string",Kl=n=>{if(Dd(n)){el(n.length===4);const[e,t,i,s]=n;return bs(e,t,i,s)}else if(Mp(n))return wp[n];return n};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Cs=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ep(n,e){let t=new Set,i=new Set,s=!1,r=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),n()),u(a)}const c={schedule:(u,d=!1,h=!1)=>{const g=h&&s?t:i;return d&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,s){r=!0;return}s=!0,[t,i]=[i,t],t.forEach(l),t.clear(),s=!1,r&&(r=!1,c.process(u))}};return c}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ap=40;function Ld(n,e){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>t=!0,o=Cs.reduce((_,T)=>(_[T]=Ep(r),_),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:h,render:p,postRender:g}=o,v=()=>{const _=En.useManualTiming?s.timestamp:performance.now();t=!1,En.useManualTiming||(s.delta=i?1e3/60:Math.max(Math.min(_-s.timestamp,Ap),1)),s.timestamp=_,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),d.process(s),h.process(s),p.process(s),g.process(s),s.isProcessing=!1,t&&e&&(i=!1,n(v))},m=()=>{t=!0,i=!0,s.isProcessing||n(v)};return{schedule:Cs.reduce((_,T)=>{const P=o[T];return _[T]=(R,C=!1,L=!1)=>(t||m(),P.schedule(R,C,L)),_},{}),cancel:_=>{for(let T=0;T<Cs.length;T++)o[Cs[T]].cancel(_)},state:s,steps:o}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const{schedule:tt,cancel:kn,state:_t,steps:Gr}=Ld(typeof requestAnimationFrame<"u"?requestAnimationFrame:$t,!0);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}let or;function Rp(){or=void 0}const At={now:()=>(or===void 0&&At.set(_t.isProcessing||En.useManualTiming?_t.timestamp:performance.now()),or),set:n=>{or=n,queueMicrotask(Rp)}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Id=n=>e=>typeof e=="string"&&e.startsWith(n),Ud=Id("--"),Pp=Id("var(--"),sl=n=>Pp(n)?Cp.test(n.split("/*")[0].trim()):!1,Cp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Zl(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Gi={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},us={...Gi,transform:n=>fn(0,1,n)},Ds={...Gi,default:1};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const rs=n=>Math.round(n*1e5)/1e5;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const rl=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Dp(n){return n==null}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Lp=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ol=(n,e)=>t=>!!(typeof t=="string"&&Lp.test(t)&&t.startsWith(n)||e&&!Dp(t)&&Object.prototype.hasOwnProperty.call(t,e)),Nd=(n,e,t)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(rl);return{[n]:parseFloat(s),[e]:parseFloat(r),[t]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ip=n=>fn(0,255,n),jr={...Gi,transform:n=>Math.round(Ip(n))},si={test:ol("rgb","red"),parse:Nd("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+jr.transform(n)+", "+jr.transform(e)+", "+jr.transform(t)+", "+rs(us.transform(i))+")"};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Up(n){let e="",t="",i="",s="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),e+=e,t+=t,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Bo={test:ol("#"),parse:Up,transform:si.transform};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const _s=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Nn=_s("deg"),dn=_s("%"),me=_s("px"),Np=_s("vh"),Op=_s("vw"),Jl={...dn,parse:n=>dn.parse(n)/100,transform:n=>dn.transform(n*100)};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ri={test:ol("hsl","hue"),parse:Nd("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+dn.transform(rs(e))+", "+dn.transform(rs(t))+", "+rs(us.transform(i))+")"};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const pt={test:n=>si.test(n)||Bo.test(n)||Ri.test(n),parse:n=>si.test(n)?si.parse(n):Ri.test(n)?Ri.parse(n):Bo.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?si.transform(n):Ri.transform(n),getAnimatableNone:n=>{const e=pt.parse(n);return e.alpha=0,pt.transform(e)}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Fp=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Bp(n){return isNaN(n)&&typeof n=="string"&&(n.match(rl)?.length||0)+(n.match(Fp)?.length||0)>0}const Od="number",Fd="color",Vp="var",kp="var(",Ql="${}",zp=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ds(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=e.replace(zp,l=>(pt.test(l)?(i.color.push(r),s.push(Fd),t.push(pt.parse(l))):l.startsWith(kp)?(i.var.push(r),s.push(Vp),t.push(l)):(i.number.push(r),s.push(Od),t.push(parseFloat(l))),++r,Ql)).split(Ql);return{values:t,split:a,indexes:i,types:s}}function Bd(n){return ds(n).values}function Vd(n){const{split:e,types:t}=ds(n),i=e.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=e[o],s[o]!==void 0){const a=t[o];a===Od?r+=rs(s[o]):a===Fd?r+=pt.transform(s[o]):r+=s[o]}return r}}const Hp=n=>typeof n=="number"?0:pt.test(n)?pt.getAnimatableNone(n):n;function Gp(n){const e=Bd(n);return Vd(n)(e.map(Hp))}const rn={test:Bp,parse:Bd,createTransformer:Vd,getAnimatableNone:Gp};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Wr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function jp({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let s=0,r=0,o=0;if(!e)s=r=o=t;else{const a=t<.5?t*(1+e):t+e-t*e,l=2*t-a;s=Wr(l,a,n+1/3),r=Wr(l,a,n),o=Wr(l,a,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function yr(n,e){return t=>t>0?e:n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const rt=(n,e,t)=>n+(e-n)*t;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const $r=(n,e,t)=>{const i=n*n,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},Wp=[Bo,si,Ri],$p=n=>Wp.find(e=>e.test(n));function ec(n){const e=$p(n);if(!e)return!1;let t=e.parse(n);return e===Ri&&(t=jp(t)),t}const tc=(n,e)=>{const t=ec(n),i=ec(e);if(!t||!i)return yr(n,e);const s={...t};return r=>(s.red=$r(t.red,i.red,r),s.green=$r(t.green,i.green,r),s.blue=$r(t.blue,i.blue,r),s.alpha=rt(t.alpha,i.alpha,r),si.transform(s))};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Vo=new Set(["none","hidden"]);function Xp(n,e){return Vo.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function qp(n,e){return t=>rt(n,e,t)}function al(n){return typeof n=="number"?qp:typeof n=="string"?sl(n)?yr:pt.test(n)?tc:Zp:Array.isArray(n)?kd:typeof n=="object"?pt.test(n)?tc:Yp:yr}function kd(n,e){const t=[...n],i=t.length,s=n.map((r,o)=>al(r)(r,e[o]));return r=>{for(let o=0;o<i;o++)t[o]=s[o](r);return t}}function Yp(n,e){const t={...n,...e},i={};for(const s in t)n[s]!==void 0&&e[s]!==void 0&&(i[s]=al(n[s])(n[s],e[s]));return s=>{for(const r in i)t[r]=i[r](s);return t}}function Kp(n,e){const t=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const r=e.types[s],o=n.indexes[r][i[r]],a=n.values[o]??0;t[s]=a,i[r]++}return t}const Zp=(n,e)=>{const t=rn.createTransformer(e),i=ds(n),s=ds(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Vo.has(n)&&!s.values.length||Vo.has(e)&&!i.values.length?Xp(n,e):xs(kd(Kp(i,s),s.values),t):yr(n,e)};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function zd(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?rt(n,e,t):al(n)(n,e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Jp=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>tt.update(e,t),stop:()=>kn(e),now:()=>_t.isProcessing?_t.timestamp:At.now()}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Hd=(n,e,t=10)=>{let i="";const s=Math.max(Math.round(e/t),2);for(let r=0;r<s;r++)i+=Math.round(n(r/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Tr=2e4;function ll(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Tr;)e+=t,i=n.next(e);return e>=Tr?1/0:e}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Qp(n,e=100,t){const i=t({...n,keyframes:[0,e]}),s=Math.min(ll(i),Tr);return{type:"keyframes",ease:r=>i.next(s*r).value/e,duration:Wt(s)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const em=5;function Gd(n,e,t){const i=Math.max(e-em,0);return yd(t-n(i),e-i)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const lt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Xr=.001;function tm({duration:n=lt.duration,bounce:e=lt.bounce,velocity:t=lt.velocity,mass:i=lt.mass}){let s,r,o=1-e;o=fn(lt.minDamping,lt.maxDamping,o),n=fn(lt.minDuration,lt.maxDuration,Wt(n)),o<1?(s=c=>{const u=c*o,d=u*n,h=u-t,p=ko(c,o),g=Math.exp(-d);return Xr-h/p*g},r=c=>{const d=c*o*n,h=d*t+t,p=Math.pow(o,2)*Math.pow(c,2)*n,g=Math.exp(-d),v=ko(Math.pow(c,2),o);return(-s(c)+Xr>0?-1:1)*((h-p)*g)/v}):(s=c=>{const u=Math.exp(-c*n),d=(c-t)*n+1;return-Xr+u*d},r=c=>{const u=Math.exp(-c*n),d=(t-c)*(n*n);return u*d});const a=5/n,l=im(s,r,a);if(n=sn(n),isNaN(l))return{stiffness:lt.stiffness,damping:lt.damping,duration:n};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:n}}}const nm=12;function im(n,e,t){let i=t;for(let s=1;s<nm;s++)i=i-n(i)/e(i);return i}function ko(n,e){return n*Math.sqrt(1-e*e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const sm=["duration","bounce"],rm=["stiffness","damping","mass"];function nc(n,e){return e.some(t=>n[t]!==void 0)}function om(n){let e={velocity:lt.velocity,stiffness:lt.stiffness,damping:lt.damping,mass:lt.mass,isResolvedFromDuration:!1,...n};if(!nc(n,rm)&&nc(n,sm))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),s=i*i,r=2*fn(.05,1,1-(n.bounce||0))*Math.sqrt(s);e={...e,mass:lt.mass,stiffness:s,damping:r}}else{const t=tm({...n,velocity:0});e={...e,...t,mass:lt.mass},e.isResolvedFromDuration=!0}return e}function Sr(n=lt.visualDuration,e=lt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:s}=t;const r=t.keyframes[0],o=t.keyframes[t.keyframes.length-1],a={done:!1,value:r},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=om({...t,velocity:-Wt(t.velocity||0)}),g=h||0,v=c/(2*Math.sqrt(l*u)),m=o-r,f=Wt(Math.sqrt(l/u)),w=Math.abs(m)<5;i||(i=w?lt.restSpeed.granular:lt.restSpeed.default),s||(s=w?lt.restDelta.granular:lt.restDelta.default);let _;if(v<1){const P=ko(f,v);_=R=>{const C=Math.exp(-v*f*R);return o-C*((g+v*f*m)/P*Math.sin(P*R)+m*Math.cos(P*R))}}else if(v===1)_=P=>o-Math.exp(-f*P)*(m+(g+f*m)*P);else{const P=f*Math.sqrt(v*v-1);_=R=>{const C=Math.exp(-v*f*R),L=Math.min(P*R,300);return o-C*((g+v*f*m)*Math.sinh(L)+P*m*Math.cosh(L))/P}}const T={calculatedDuration:p&&d||null,next:P=>{const R=_(P);if(p)a.done=P>=d;else{let C=P===0?g:0;v<1&&(C=P===0?sn(g):Gd(_,P,R));const L=Math.abs(C)<=i,S=Math.abs(o-R)<=s;a.done=L&&S}return a.value=a.done?o:R,a},toString:()=>{const P=Math.min(ll(T),Tr),R=Hd(C=>T.next(P*C).value,P,30);return P+"ms "+R},toTransition:()=>{}};return T}Sr.applyToOptions=n=>{const e=Qp(n,100,Sr);return n.ease=e.ease,n.duration=sn(e.duration),n.type="keyframes",n};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function zo({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=n[0],h={done:!1,value:d},p=L=>a!==void 0&&L<a||l!==void 0&&L>l,g=L=>a===void 0?l:l===void 0||Math.abs(a-L)<Math.abs(l-L)?a:l;let v=t*e;const m=d+v,f=o===void 0?m:o(m);f!==m&&(v=f-d);const w=L=>-v*Math.exp(-L/i),_=L=>f+w(L),T=L=>{const S=w(L),x=_(L);h.done=Math.abs(S)<=c,h.value=h.done?f:x};let P,R;const C=L=>{p(h.value)&&(P=L,R=Sr({keyframes:[h.value,g(h.value)],velocity:Gd(_,L,h.value),damping:s,stiffness:r,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:L=>{let S=!1;return!R&&P===void 0&&(S=!0,T(L),C(L)),P!==void 0&&L>=P?R.next(L-P):(!S&&T(L),h)}}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function am(n,e,t){const i=[],s=t||En.mix||zd,r=n.length-1;for(let o=0;o<r;o++){let a=s(n[o],n[o+1]);if(e){const l=Array.isArray(e)?e[o]||$t:e;a=xs(l,a)}i.push(a)}return i}function lm(n,e,{clamp:t=!0,ease:i,mixer:s}={}){const r=n.length;if(el(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=n[0]===n[1];n[0]>n[r-1]&&(n=[...n].reverse(),e=[...e].reverse());const a=am(e,i,s),l=a.length,c=u=>{if(o&&u<n[0])return e[0];let d=0;if(l>1)for(;d<n.length-2&&!(u<n[d+1]);d++);const h=cs(n[d],n[d+1],u);return a[d](h)};return t?u=>c(fn(n[0],n[r-1],u)):c}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function cm(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const s=cs(0,e,i);n.push(rt(t,1,s))}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function um(n){const e=[0];return cm(e,n.length-1),e}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function dm(n,e){return n.map(t=>t*e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function hm(n,e){return n.map(()=>e||Cd).splice(0,n.length-1)}function os({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const s=Sp(i)?i.map(Kl):Kl(i),r={done:!1,value:e[0]},o=dm(t&&t.length===e.length?t:um(e),n),a=lm(o,e,{ease:Array.isArray(s)?s:hm(e,s)});return{calculatedDuration:n,next:l=>(r.value=a(l),r.done=l>=n,r)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const fm=n=>n!==null;function cl(n,{repeat:e,repeatType:t="loop"},i,s=1){const r=n.filter(fm),a=s<0||e&&t!=="loop"&&e%2===1?0:r.length-1;return!a||i===void 0?r[a]:i}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const pm={decay:zo,inertia:zo,tween:os,keyframes:os,spring:Sr};function jd(n){typeof n.type=="string"&&(n.type=pm[n.type])}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class ul{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const mm=n=>n/100;class dl extends ul{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==At.now()&&this.tick(At.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;jd(e);const{type:t=os,repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=e;let{keyframes:a}=e;const l=t||os;l!==os&&typeof a[0]!="number"&&(this.mixKeyframes=xs(mm,zd(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});r==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=ll(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=c}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:s,mixKeyframes:r,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:h,repeatDelay:p,type:g,onUpdate:v,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const f=this.currentTime-c*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?f<0:f>s;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let _=this.currentTime,T=i;if(d){const L=Math.min(this.currentTime,s)/a;let S=Math.floor(L),x=L%1;!x&&L>=1&&(x=1),x===1&&S--,S=Math.min(S,d+1),!!(S%2)&&(h==="reverse"?(x=1-x,p&&(x-=p/a)):h==="mirror"&&(T=o)),_=fn(0,1,x)*a}const P=w?{done:!1,value:u[0]}:T.next(_);r&&(P.value=r(P.value));let{done:R}=P;!w&&l!==null&&(R=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&R);return C&&g!==zo&&(P.value=cl(u,this.options,m,this.speed)),v&&v(P.value),C&&this.finish(),P}then(e,t){return this.finished.then(e,t)}get duration(){return Wt(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wt(e)}get time(){return Wt(this.currentTime)}set time(e){e=sn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(At.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Wt(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Jp,startTime:t}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),this.options.onPlay?.();const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(At.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function gm(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ri=n=>n*180/Math.PI,Ho=n=>{const e=ri(Math.atan2(n[1],n[0]));return Go(e)},vm={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Ho,rotateZ:Ho,skewX:n=>ri(Math.atan(n[1])),skewY:n=>ri(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Go=n=>(n=n%360,n<0&&(n+=360),n),ic=Ho,sc=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),rc=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),xm={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sc,scaleY:rc,scale:n=>(sc(n)+rc(n))/2,rotateX:n=>Go(ri(Math.atan2(n[6],n[5]))),rotateY:n=>Go(ri(Math.atan2(-n[2],n[0]))),rotateZ:ic,rotate:ic,skewX:n=>ri(Math.atan(n[4])),skewY:n=>ri(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function jo(n){return n.includes("scale")?1:0}function Wo(n,e){if(!n||n==="none")return jo(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,s;if(t)i=xm,s=t;else{const a=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=vm,s=a}if(!s)return jo(e);const r=i[e],o=s[1].split(",").map(_m);return typeof r=="function"?r(o):o[r]}const bm=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Wo(t,e)};function _m(n){return parseFloat(n.trim())}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ji=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Wi=new Set(ji);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const oc=n=>n===Gi||n===me,ym=new Set(["x","y","z"]),Tm=ji.filter(n=>!ym.has(n));function Sm(n){const e=[];return Tm.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const Fn={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Wo(e,"x"),y:(n,{transform:e})=>Wo(e,"y")};Fn.translateX=Fn.x;Fn.translateY=Fn.y;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const li=new Set;let $o=!1,Xo=!1,qo=!1;function Wd(){if(Xo){const n=Array.from(li).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const s=Sm(i);s.length&&(t.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=t.get(i);s&&s.forEach(([r,o])=>{i.getValue(r)?.set(o)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Xo=!1,$o=!1,li.forEach(n=>n.complete(qo)),li.clear()}function $d(){li.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Xo=!0)})}function wm(){qo=!0,$d(),Wd(),qo=!1}class hl{constructor(e,t,i,s,r,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(li.add(this),$o||($o=!0,tt.read($d),tt.resolveKeyframes(Wd))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;if(e[0]===null){const r=s?.get(),o=e[e.length-1];if(r!==void 0)e[0]=r;else if(i&&t){const a=i.readValue(t,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),s&&r===void 0&&s.set(e[0])}gm(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),li.delete(this)}cancel(){this.state==="scheduled"&&(li.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Mm=n=>n.startsWith("--");if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Em(n,e,t){Mm(e)?n.style.setProperty(e,t):n.style[e]=t}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Am={};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Xd(n,e){const t=_d(n);return()=>Am[e]??t()}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Rm=Xd(()=>window.ScrollTimeline!==void 0,"scrollTimeline");if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const qd=Xd(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const is=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ac={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:is([0,.65,.55,1]),circOut:is([.55,0,1,.45]),backIn:is([.31,.01,.66,-.59]),backOut:is([.33,1.53,.69,.99])};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Yd(n,e){if(n)return typeof n=="function"?qd()?Hd(n,e):"ease-out":Dd(n)?is(n):Array.isArray(n)?n.map(t=>Yd(t,e)||ac.easeOut):ac[n]}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Pm(n,e,t,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:t};l&&(u.offset=l);const d=Yd(a,s);Array.isArray(d)&&(u.easing=d);const h={delay:i,duration:s,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),n.animate(u,h)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Kd(n){return typeof n=="function"&&"applyToOptions"in n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Cm({type:n,...e}){return Kd(n)&&qd()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Zd extends ul{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:s,pseudoElement:r,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!r,this.allowFlatten=o,this.options=e,el(typeof e.type!="string");const c=Cm(e);this.animation=Pm(t,i,s,c,r),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!r){const u=cl(s,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):Em(t,i,u),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Wt(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Wt(e)}get time(){return Wt(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=sn(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&Rm()?(this.animation.timeline=e,$t):t(this)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Jd={anticipate:Ad,backInOut:Ed,circInOut:Pd};function Dm(n){return n in Jd}function Lm(n){typeof n.ease=="string"&&Dm(n.ease)&&(n.ease=Jd[n.ease])}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const qr=10;class Im extends Zd{constructor(e){Lm(e),jd(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:i,onComplete:s,element:r,...o}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const a=new dl({...o,autoplay:!1}),l=Math.max(qr,At.now()-this.startTime),c=fn(0,qr,l-qr);t.setWithVelocity(a.sample(Math.max(0,l-c)).value,a.sample(l).value,c),a.stop()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const lc=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(rn.test(n)||n==="0")&&!n.startsWith("url("));if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Um(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function Nm(n,e,t,i){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const r=n[n.length-1],o=lc(s,e),a=lc(r,e);return!o||!a?!1:Um(n)||(t==="spring"||Kd(t))&&i}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Yo(n){n.duration=0,n.type="keyframes"}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Om=new Set(["opacity","clipPath","filter","transform"]),Fm=_d(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Bm(n){const{motionValue:e,name:t,repeatDelay:i,repeatType:s,damping:r,type:o}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return Fm()&&t&&Om.has(t)&&(t!=="transform"||!c)&&!l&&!i&&s!=="mirror"&&r!==0&&o!=="inertia"}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Vm=40;class km extends ul{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=At.now();const h={autoplay:e,delay:t,type:i,repeat:s,repeatDelay:r,repeatType:o,name:l,motionValue:c,element:u,...d},p=u?.KeyframeResolver||hl;this.keyframeResolver=new p(a,(g,v,m)=>this.onKeyframesResolved(g,v,h,!m),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,i,s){this.keyframeResolver=void 0;const{name:r,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=At.now(),Nm(e,r,o,a)||((En.instantAnimations||!l)&&u?.(cl(e,i,t)),e[0]=e[e.length-1],Yo(i),i.repeat=0);const h={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>Vm?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},p=!c&&Bm(h),g=h.motionValue?.owner?.current,v=p?new Im({...h,element:g}):new dl(h);v.finished.then(()=>{this.notifyFinished()}).catch($t),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),wm()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Qd(n,e,t,i=0,s=1){const r=Array.from(n).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=n.size,a=(o-1)*i;return typeof t=="function"?t(r,o):s===1?r*i:a-r*i}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const zm=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Hm(n){const e=zm.exec(n);if(!e)return[,];const[,t,i,s]=e;return[`--${t??i}`,s]}function eh(n,e,t=1){const[i,s]=Hm(n);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return vd(o)?parseFloat(o):o}return sl(s)?eh(s,e,t+1):s}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Gm={type:"spring",stiffness:500,damping:25,restSpeed:10},jm=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Wm={type:"keyframes",duration:.8},$m={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Xm=(n,{keyframes:e})=>e.length>2?Wm:Wi.has(n)?n.startsWith("scale")?jm(e[1]):Gm:$m;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const qm=n=>n!==null;function Ym(n,{repeat:e,repeatType:t="loop"},i){const s=n.filter(qm),r=e&&t!=="loop"&&e%2===1?0:s.length-1;return s[r]}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function th(n,e){if(n?.inherit&&e){const{inherit:t,...i}=n;return{...e,...i}}return n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function fl(n,e){const t=n?.[e]??n?.default??n;return t!==n?th(t,n):t}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Km({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const pl=(n,e,t,i={},s,r)=>o=>{const a=fl(i,n)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-sn(l);const u={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:n,motionValue:e,element:r?void 0:s};Km(a)||Object.assign(u,Xm(n,u)),u.duration&&(u.duration=sn(u.duration)),u.repeatDelay&&(u.repeatDelay=sn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Yo(u),u.delay===0&&(d=!0)),(En.instantAnimations||En.skipAnimations||s?.shouldSkipAnimations)&&(d=!0,Yo(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!r&&e.get()!==void 0){const h=Ym(u.keyframes,a);if(h!==void 0){tt.update(()=>{u.onUpdate(h),u.onComplete()});return}}return a.isSync?new dl(u):new km(u)};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function cc(n){const e=[{},{}];return n?.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function ml(n,e,t,i){if(typeof e=="function"){const[s,r]=cc(i);e=e(t!==void 0?t:n.custom,s,r)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,r]=cc(i);e=e(t!==void 0?t:n.custom,s,r)}return e}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ui(n,e,t){const i=n.getProps();return ml(i,e,t!==void 0?t:i.custom,n)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const nh=new Set(["width","height","top","left","right","bottom",...ji]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const uc=30,Zm=n=>!isNaN(parseFloat(n));class Jm{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const s=At.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const r of this.dependents)r.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=At.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Zm(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new tl);const i=this.events[e].add(t);return e==="change"?()=>{i(),tt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=At.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>uc)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,uc);return yd(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Fi(n,e){return new Jm(n,e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ko=n=>Array.isArray(n);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Qm(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Fi(t))}function eg(n){return Ko(n)?n[n.length-1]||0:n}function tg(n,e){const t=Ui(n,e);let{transitionEnd:i={},transition:s={},...r}=t||{};r={...r,...i};for(const o in r){const a=eg(r[o]);Qm(n,o,a)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const wt=n=>!!(n&&n.getVelocity);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function ng(n){return!!(wt(n)&&n.add)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Zo(n,e){const t=n.getValue("willChange");if(ng(t))return t.add(e);if(!t&&En.WillChange){const i=new En.WillChange("auto");n.addValue("willChange",i),i.add(e)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function gl(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ig="framerAppearId",ih="data-"+gl(ig);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function sh(n){return n.props[ih]}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function sg({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function rh(n,e,{delay:t=0,transitionOverride:i,type:s}={}){let{transition:r,transitionEnd:o,...a}=e;const l=n.getDefaultTransition();r=r?th(r,l):l;const c=r?.reduceMotion;i&&(r=i);const u=[],d=s&&n.animationState&&n.animationState.getState()[s];for(const h in a){const p=n.getValue(h,n.latestValues[h]??null),g=a[h];if(g===void 0||d&&sg(d,h))continue;const v={delay:t,...fl(r||{},h)},m=p.get();if(m!==void 0&&!p.isAnimating&&!Array.isArray(g)&&g===m&&!v.velocity)continue;let f=!1;if(window.MotionHandoffAnimation){const T=sh(n);if(T){const P=window.MotionHandoffAnimation(T,h,tt);P!==null&&(v.startTime=P,f=!0)}}Zo(n,h);const w=c??n.shouldReduceMotion;p.start(pl(h,p,g,w&&nh.has(h)?{type:!1}:v,n,f));const _=p.animation;_&&u.push(_)}if(o){const h=()=>tt.update(()=>{o&&tg(n,o)});u.length?Promise.all(u).then(h):h()}return u}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Jo(n,e,t={}){const i=Ui(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:s=n.getDefaultTransition()||{}}=i||{};t.transitionOverride&&(s=t.transitionOverride);const r=i?()=>Promise.all(rh(n,i,t)):()=>Promise.resolve(),o=n.variantChildren&&n.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:d}=s;return rg(n,e,l,c,u,d,t)}:()=>Promise.resolve(),{when:a}=s;if(a){const[l,c]=a==="beforeChildren"?[r,o]:[o,r];return l().then(()=>c())}else return Promise.all([r(),o(t.delay)])}function rg(n,e,t=0,i=0,s=0,r=1,o){const a=[];for(const l of n.variantChildren)l.notify("AnimationStart",e),a.push(Jo(l,e,{...o,delay:t+(typeof i=="function"?0:i)+Qd(n.variantChildren,l,i,s,r)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function og(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>Jo(n,r,t));i=Promise.all(s)}else if(typeof e=="string")i=Jo(n,e,t);else{const s=typeof e=="function"?Ui(n,e,t.custom):e;i=Promise.all(rh(n,s,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ag={test:n=>n==="auto",parse:n=>n};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const oh=n=>e=>e.test(n);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ah=[Gi,me,dn,Nn,Op,Np,ag],dc=n=>ah.find(oh(n));if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function lg(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||bd(n):!0}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const cg=new Set(["brightness","contrast","saturate","opacity"]);function ug(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(rl)||[];if(!i)return n;const s=t.replace(i,"");let r=cg.has(e)?1:0;return i!==t&&(r*=100),e+"("+r+s+")"}const dg=/\b([a-z-]*)\(.*?\)/gu,Qo={...rn,getAnimatableNone:n=>{const e=n.match(dg);return e?e.map(ug).join(" "):n}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ea={...rn,getAnimatableNone:n=>{const e=rn.parse(n);return rn.createTransformer(n)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const hc={...Gi,transform:Math.round};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const hg={rotate:Nn,rotateX:Nn,rotateY:Nn,rotateZ:Nn,scale:Ds,scaleX:Ds,scaleY:Ds,scaleZ:Ds,skew:Nn,skewX:Nn,skewY:Nn,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:us,originX:Jl,originY:Jl,originZ:me};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const vl={borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,top:me,right:me,bottom:me,left:me,inset:me,insetBlock:me,insetBlockStart:me,insetBlockEnd:me,insetInline:me,insetInlineStart:me,insetInlineEnd:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,paddingBlock:me,paddingBlockStart:me,paddingBlockEnd:me,paddingInline:me,paddingInlineStart:me,paddingInlineEnd:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,marginBlock:me,marginBlockStart:me,marginBlockEnd:me,marginInline:me,marginInlineStart:me,marginInlineEnd:me,fontSize:me,backgroundPositionX:me,backgroundPositionY:me,...hg,zIndex:hc,fillOpacity:us,strokeOpacity:us,numOctaves:hc};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const fg={...vl,color:pt,backgroundColor:pt,outlineColor:pt,fill:pt,stroke:pt,borderColor:pt,borderTopColor:pt,borderRightColor:pt,borderBottomColor:pt,borderLeftColor:pt,filter:Qo,WebkitFilter:Qo,mask:ea,WebkitMask:ea},lh=n=>fg[n];if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const pg=new Set([Qo,ea]);function ch(n,e){let t=lh(n);return pg.has(t)||(t=rn),t.getAnimatableNone?t.getAnimatableNone(e):void 0}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const mg=new Set(["auto","none","0"]);function gg(n,e,t){let i=0,s;for(;i<n.length&&!s;){const r=n[i];typeof r=="string"&&!mg.has(r)&&ds(r).values.length&&(s=n[i]),i++}if(s&&t)for(const r of e)n[r]=ch(t,s)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class vg extends hl{constructor(e,t,i,s,r){super(e,t,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let d=e[u];if(typeof d=="string"&&(d=d.trim(),sl(d))){const h=eh(d,t.current);h!==void 0&&(e[u]=h),u===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!nh.has(i)||e.length!==2)return;const[s,r]=e,o=dc(s),a=dc(r),l=Zl(s),c=Zl(r);if(l!==c&&Fn[i]){this.needsMeasurement=!0;return}if(o!==a)if(oc(o)&&oc(a))for(let u=0;u<e.length;u++){const d=e[u];typeof d=="string"&&(e[u]=parseFloat(d))}else Fn[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let s=0;s<e.length;s++)(e[s]===null||lg(e[s]))&&i.push(s);i.length&&gg(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Fn[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const s=e.getValue(t);s&&s.jump(this.measuredOrigin,!1);const r=i.length-1,o=i[r];i[r]=Fn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const xg=new Set(["opacity","clipPath","filter","transform"]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function uh(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let i=document;const s=t?.[n]??i.querySelectorAll(n);return s?Array.from(s):[]}return Array.from(n).filter(i=>i!=null)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const dh=(n,e)=>e&&typeof n=="number"?e.transform(n):n;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function ta(n){return xd(n)&&"offsetHeight"in n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const{schedule:xl}=Ld(queueMicrotask,!1);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const en={x:!1,y:!1};function hh(){return en.x||en.y}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function bg(n){return n==="x"||n==="y"?en[n]?null:(en[n]=!0,()=>{en[n]=!1}):en.x||en.y?null:(en.x=en.y=!0,()=>{en.x=en.y=!1})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function fh(n,e){const t=uh(n),i=new AbortController,s={passive:!0,...e,signal:i.signal};return[t,s,()=>i.abort()]}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function _g(n){return!(n.pointerType==="touch"||hh())}function yg(n,e,t={}){const[i,s,r]=fh(n,t);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",g)},d=m=>{c&&(c(m),c=void 0),u()},h=m=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,d(m))},p=()=>{a=!0,window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",h,s)},g=m=>{if(m.pointerType!=="touch"){if(a){l=!0;return}d(m)}},v=m=>{if(!_g(m))return;l=!1;const f=e(o,m);typeof f=="function"&&(c=f,o.addEventListener("pointerleave",g,s))};o.addEventListener("pointerenter",v,s),o.addEventListener("pointerdown",p,s)}),r}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ph=(n,e)=>e?n===e?!0:ph(n,e.parentElement):!1;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const bl=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Tg=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Sg(n){return Tg.has(n.tagName)||n.isContentEditable===!0}const wg=new Set(["INPUT","SELECT","TEXTAREA"]);function Mg(n){return wg.has(n.tagName)||n.isContentEditable===!0}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ar=new WeakSet;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function fc(n){return e=>{e.key==="Enter"&&n(e)}}function Yr(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Eg=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=fc(()=>{if(ar.has(t))return;Yr(t,"down");const s=fc(()=>{Yr(t,"up")}),r=()=>Yr(t,"cancel");t.addEventListener("keyup",s,e),t.addEventListener("blur",r,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function pc(n){return bl(n)&&!hh()}const mc=new WeakSet;function Ag(n,e,t={}){const[i,s,r]=fh(n,t),o=a=>{const l=a.currentTarget;if(!pc(a)||mc.has(a))return;ar.add(l),t.stopPropagation&&mc.add(a);const c=e(l,a),u=(p,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),ar.has(l)&&ar.delete(l),pc(p)&&typeof c=="function"&&c(p,{success:g})},d=p=>{u(p,l===window||l===document||t.useGlobalTarget||ph(l,p.target))},h=p=>{u(p,!1)};window.addEventListener("pointerup",d,s),window.addEventListener("pointercancel",h,s)};return i.forEach(a=>{(t.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),ta(a)&&(a.addEventListener("focus",c=>Eg(c,s)),!Sg(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),r}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function _l(n){return xd(n)&&"ownerSVGElement"in n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const lr=new WeakMap;let cr;const mh=(n,e,t)=>(i,s)=>s&&s[0]?s[0][n+"Size"]:_l(i)&&"getBBox"in i?i.getBBox()[e]:i[t],Rg=mh("inline","width","offsetWidth"),Pg=mh("block","height","offsetHeight");function Cg({target:n,borderBoxSize:e}){lr.get(n)?.forEach(t=>{t(n,{get width(){return Rg(n,e)},get height(){return Pg(n,e)}})})}function Dg(n){n.forEach(Cg)}function Lg(){typeof ResizeObserver>"u"||(cr=new ResizeObserver(Dg))}function Ig(n,e){cr||Lg();const t=uh(n);return t.forEach(i=>{let s=lr.get(i);s||(s=new Set,lr.set(i,s)),s.add(e),cr?.observe(i)}),()=>{t.forEach(i=>{const s=lr.get(i);s?.delete(e),s?.size||cr?.unobserve(i)})}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ur=new Set;let Pi;function Ug(){Pi=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ur.forEach(e=>e(n))},window.addEventListener("resize",Pi)}function Ng(n){return ur.add(n),Pi||Ug(),()=>{ur.delete(n),!ur.size&&typeof Pi=="function"&&(window.removeEventListener("resize",Pi),Pi=void 0)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function gc(n,e){return typeof n=="function"?Ng(n):Ig(n,e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Og(n){return _l(n)&&n.tagName==="svg"}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Fg=[...ah,pt,rn],Bg=n=>Fg.find(oh(n));if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const vc=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ci=()=>({x:vc(),y:vc()}),xc=()=>({min:0,max:0}),mt=()=>({x:xc(),y:xc()});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Vg=new WeakMap;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ur(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function hs(n){return typeof n=="string"||Array.isArray(n)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const yl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Tl=["initial",...yl];if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Nr(n){return Ur(n.animate)||Tl.some(e=>hs(n[e]))}function gh(n){return!!(Nr(n)||n.variants)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function kg(n,e,t){for(const i in e){const s=e[i],r=t[i];if(wt(s))n.addValue(i,s);else if(wt(r))n.addValue(i,Fi(s,{owner:n}));else if(r!==s)if(n.hasValue(i)){const o=n.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=n.getStaticValue(i);n.addValue(i,Fi(o!==void 0?o:s,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const na={current:null},vh={current:!1};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const zg=typeof window<"u";function Hg(){if(vh.current=!0,!!zg)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>na.current=n.matches;n.addEventListener("change",e),e()}else na.current=!1}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const bc=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let wr={};function xh(n){wr=n}function Gg(){return wr}class jg{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:s,skipAnimations:r,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=hl,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=At.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,tt.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=r,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Nr(t),this.isVariantNode=gh(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(t,{},this);for(const p in h){const g=h[p];c[p]!==void 0&&wt(g)&&g.set(c[p])}}mount(e){if(this.hasBeenMounted)for(const t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,Vg.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(vh.current||Hg(),this.shouldReduceMotion=na.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),kn(this.notifyUpdate),kn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&xg.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=t.accelerate,d=new Zd({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:sn(u)}),h=o(d);this.valueSubscriptions.set(e,()=>{h(),d.cancel()});return}const i=Wi.has(e);i&&this.onBindTransform&&this.onBindTransform();const s=t.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&tt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let r;typeof window<"u"&&window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),r&&r(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in wr){const t=wr[e];if(!t)continue;const{isEnabled:i,Feature:s}=t;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<bc.length;i++){const s=bc[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=e[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=kg(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Fi(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(vd(i)||bd(i))?i=parseFloat(i):!Bg(i)&&rn.test(t)&&(i=ch(e,t)),this.setBaseTarget(e,wt(i)?i.get():i)),wt(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let i;if(typeof t=="string"||typeof t=="object"){const r=ml(this.props,t,this.presenceContext?.custom);r&&(i=r[e])}if(t&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!wt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new tl),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){xl.render(this.render)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class bh extends jg{constructor(){super(...arguments),this.KeyframeResolver=vg}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;wt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Gn{constructor(e){this.isMounted=!1,this.node=e}update(){}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function _h({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function Wg({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function $g(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Kr(n){return n===void 0||n===1}function ia({scale:n,scaleX:e,scaleY:t}){return!Kr(n)||!Kr(e)||!Kr(t)}function Qn(n){return ia(n)||yh(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function yh(n){return _c(n.x)||_c(n.y)}function _c(n){return n&&n!=="0%"}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Mr(n,e,t){const i=n-t,s=e*i;return t+s}function yc(n,e,t,i,s){return s!==void 0&&(n=Mr(n,s,i)),Mr(n,t,i)+e}function sa(n,e=0,t=1,i,s){n.min=yc(n.min,e,t,i,s),n.max=yc(n.max,e,t,i,s)}function Th(n,{x:e,y:t}){sa(n.x,e.translate,e.scale,e.originPoint),sa(n.y,t.translate,t.scale,t.originPoint)}const Tc=.999999999999,Sc=1.0000000000001;function Xg(n,e,t,i=!1){const s=t.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=t[a],o=r.projectionDelta;const{visualElement:l}=r.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&Li(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Th(n,o)),i&&Qn(r.latestValues)&&Li(n,r.latestValues))}e.x<Sc&&e.x>Tc&&(e.x=1),e.y<Sc&&e.y>Tc&&(e.y=1)}function Di(n,e){n.min=n.min+e,n.max=n.max+e}function wc(n,e,t,i,s=.5){const r=rt(n.min,n.max,s);sa(n,e,t,r,i)}function Li(n,e){wc(n.x,e.x,e.scaleX,e.scale,e.originX),wc(n.y,e.y,e.scaleY,e.scale,e.originY)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Sh(n,e){return _h($g(n.getBoundingClientRect(),e))}function qg(n,e,t){const i=Sh(n,t),{scroll:s}=e;return s&&(Di(i.x,s.offset.x),Di(i.y,s.offset.y)),i}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Yg={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Kg=ji.length;function Zg(n,e,t){let i="",s=!0;for(let r=0;r<Kg;r++){const o=ji[r],a=n[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||t){const c=dh(a,vl[o]);if(!l){s=!1;const u=Yg[o]||o;i+=`${u}(${c}) `}t&&(e[o]=c)}}return i=i.trim(),t?i=t(e,s?"":i):s&&(i="none"),i}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Sl(n,e,t){const{style:i,vars:s,transformOrigin:r}=n;let o=!1,a=!1;for(const l in e){const c=e[l];if(Wi.has(l)){o=!0;continue}else if(Ud(l)){s[l]=c;continue}else{const u=dh(c,vl[l]);l.startsWith("origin")?(a=!0,r[l]=u):i[l]=u}}if(e.transform||(o||t?i.transform=Zg(e,n.transform,t):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=r;i.transformOrigin=`${l} ${c} ${u}`}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function wh(n,{style:e,vars:t},i,s){const r=n.style;let o;for(o in e)r[o]=e[o];s?.applyProjectionStyles(r,i);for(o in t)r.setProperty(o,t[o])}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Mc(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ki={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(me.test(n))n=parseFloat(n);else return n;const t=Mc(n,e.target.x),i=Mc(n,e.target.y);return`${t}% ${i}%`}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Jg={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,s=rn.parse(n);if(s.length>5)return i;const r=rn.createTransformer(n),o=typeof s[0]!="number"?1:0,a=t.x.scale*e.x,l=t.y.scale*e.y;s[0+o]/=a,s[1+o]/=l;const c=rt(a,l,.5);return typeof s[2+o]=="number"&&(s[2+o]/=c),typeof s[3+o]=="number"&&(s[3+o]/=c),r(s)}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ra={borderRadius:{...Ki,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ki,borderTopRightRadius:Ki,borderBottomLeftRadius:Ki,borderBottomRightRadius:Ki,boxShadow:Jg};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Mh(n,{layout:e,layoutId:t}){return Wi.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!ra[n]||n==="opacity")}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function wl(n,e,t){const i=n.style,s=e?.style,r={};if(!i)return r;for(const o in i)(wt(i[o])||s&&wt(s[o])||Mh(o,n)||t?.getValue(o)?.liveStyle!==void 0)&&(r[o]=i[o]);return r}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Qg(n){return window.getComputedStyle(n)}class ev extends bh{constructor(){super(...arguments),this.type="html",this.renderInstance=wh}readValueFromInstance(e,t){if(Wi.has(t))return this.projection?.isProjecting?jo(t):bm(e,t);{const i=Qg(e),s=(Ud(t)?i.getPropertyValue(t):i[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Sh(e,t)}build(e,t,i){Sl(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return wl(e,t,i)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const tv={offset:"stroke-dashoffset",array:"stroke-dasharray"},nv={offset:"strokeDashoffset",array:"strokeDasharray"};function iv(n,e,t=1,i=0,s=!0){n.pathLength=1;const r=s?tv:nv;n[r.offset]=`${-i}`,n[r.array]=`${e} ${t}`}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const sv=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Eh(n,{attrX:e,attrY:t,attrScale:i,pathLength:s,pathSpacing:r=1,pathOffset:o=0,...a},l,c,u){if(Sl(n,a,c),l){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:d,style:h}=n;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=u?.transformBox??"fill-box",delete d.transformBox);for(const p of sv)d[p]!==void 0&&(h[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),t!==void 0&&(d.y=t),i!==void 0&&(d.scale=i),s!==void 0&&iv(d,s,r,o,!1)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ah=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Rh=n=>typeof n=="string"&&n.toLowerCase()==="svg";if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function rv(n,e,t,i){wh(n,e,void 0,i);for(const s in e.attrs)n.setAttribute(Ah.has(s)?s:gl(s),e.attrs[s])}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ph(n,e,t){const i=wl(n,e,t);for(const s in n)if(wt(n[s])||wt(e[s])){const r=ji.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=n[s]}return i}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class ov extends bh{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=mt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Wi.has(t)){const i=lh(t);return i&&i.default||0}return t=Ah.has(t)?t:gl(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return Ph(e,t,i)}build(e,t,i){Eh(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,s){rv(e,t,i,s)}mount(e){this.isSVGTag=Rh(e.tagName),super.mount(e)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const av=Tl.length;function Ch(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Ch(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<av;t++){const i=Tl[t],s=n.props[i];(hs(s)||s===!1)&&(e[i]=s)}return e}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Dh(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const lv=[...yl].reverse(),cv=yl.length;function uv(n){return e=>Promise.all(e.map(({animation:t,options:i})=>og(n,t,i)))}function dv(n){let e=uv(n),t=Ec(),i=!0;const s=l=>(c,u)=>{const d=Ui(n,u,l==="exit"?n.presenceContext?.custom:void 0);if(d){const{transition:h,transitionEnd:p,...g}=d;c={...c,...g,...p}}return c};function r(l){e=l(n)}function o(l){const{props:c}=n,u=Ch(n.parent)||{},d=[],h=new Set;let p={},g=1/0;for(let m=0;m<cv;m++){const f=lv[m],w=t[f],_=c[f]!==void 0?c[f]:u[f],T=hs(_),P=f===l?w.isActive:null;P===!1&&(g=m);let R=_===u[f]&&_!==c[f]&&T;if(R&&i&&n.manuallyAnimateOnMount&&(R=!1),w.protectedKeys={...p},!w.isActive&&P===null||!_&&!w.prevProp||Ur(_)||typeof _=="boolean")continue;if(f==="exit"&&w.isActive&&P!==!0){w.prevResolvedValues&&(p={...p,...w.prevResolvedValues});continue}const C=hv(w.prevProp,_);let L=C||f===l&&w.isActive&&!R&&T||m>g&&T,S=!1;const x=Array.isArray(_)?_:[_];let E=x.reduce(s(f),{});P===!1&&(E={});const{prevResolvedValues:B={}}=w,A={...B,...E},N=q=>{L=!0,h.has(q)&&(S=!0,h.delete(q)),w.needsAnimating[q]=!0;const G=n.getValue(q);G&&(G.liveStyle=!1)};for(const q in A){const G=E[q],ne=B[q];if(p.hasOwnProperty(q))continue;let oe=!1;Ko(G)&&Ko(ne)?oe=!Dh(G,ne):oe=G!==ne,oe?G!=null?N(q):h.add(q):G!==void 0&&h.has(q)?N(q):w.protectedKeys[q]=!0}w.prevProp=_,w.prevResolvedValues=E,w.isActive&&(p={...p,...E}),i&&n.blockInitialAnimation&&(L=!1);const H=R&&C;L&&(!H||S)&&d.push(...x.map(q=>{const G={type:f};if(typeof q=="string"&&i&&!H&&n.manuallyAnimateOnMount&&n.parent){const{parent:ne}=n,oe=Ui(ne,q);if(ne.enteringChildren&&oe){const{delayChildren:ye}=oe.transition||{};G.delay=Qd(ne.enteringChildren,n,ye)}}return{animation:q,options:G}}))}if(h.size){const m={};if(typeof c.initial!="boolean"){const f=Ui(n,Array.isArray(c.initial)?c.initial[0]:c.initial);f&&f.transition&&(m.transition=f.transition)}h.forEach(f=>{const w=n.getBaseTarget(f),_=n.getValue(f);_&&(_.liveStyle=!0),m[f]=w??null}),d.push({animation:m})}let v=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!n.manuallyAnimateOnMount&&(v=!1),i=!1,v?e(d):Promise.resolve()}function a(l,c){if(t[l].isActive===c)return Promise.resolve();n.variantChildren?.forEach(d=>d.animationState?.setActive(l,c)),t[l].isActive=c;const u=o(l);for(const d in t)t[d].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>t,reset:()=>{t=Ec()}}}function hv(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Dh(e,n):!1}function $n(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ec(){return{animate:$n(!0),whileInView:$n(),whileHover:$n(),whileTap:$n(),whileDrag:$n(),whileFocus:$n(),exit:$n()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ac(n,e){n.min=e.min,n.max=e.max}function Kt(n,e){Ac(n.x,e.x),Ac(n.y,e.y)}function Rc(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Lh=1e-4,fv=1-Lh,pv=1+Lh,Ih=.01,mv=0-Ih,gv=0+Ih;function Rt(n){return n.max-n.min}function vv(n,e,t){return Math.abs(n-e)<=t}function Pc(n,e,t,i=.5){n.origin=i,n.originPoint=rt(e.min,e.max,n.origin),n.scale=Rt(t)/Rt(e),n.translate=rt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=fv&&n.scale<=pv||isNaN(n.scale))&&(n.scale=1),(n.translate>=mv&&n.translate<=gv||isNaN(n.translate))&&(n.translate=0)}function as(n,e,t,i){Pc(n.x,e.x,t.x,i?i.originX:void 0),Pc(n.y,e.y,t.y,i?i.originY:void 0)}function Cc(n,e,t){n.min=t.min+e.min,n.max=n.min+Rt(e)}function xv(n,e,t){Cc(n.x,e.x,t.x),Cc(n.y,e.y,t.y)}function Dc(n,e,t){n.min=e.min-t.min,n.max=n.min+Rt(e)}function Er(n,e,t){Dc(n.x,e.x,t.x),Dc(n.y,e.y,t.y)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Lc(n,e,t,i,s){return n-=e,n=Mr(n,1/t,i),s!==void 0&&(n=Mr(n,1/s,i)),n}function bv(n,e=0,t=1,i=.5,s,r=n,o=n){if(dn.test(e)&&(e=parseFloat(e),e=rt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=rt(r.min,r.max,i);n===r&&(a-=e),n.min=Lc(n.min,e,t,a,s),n.max=Lc(n.max,e,t,a,s)}function Ic(n,e,[t,i,s],r,o){bv(n,e[t],e[i],e[s],e.scale,r,o)}const _v=["x","scaleX","originX"],yv=["y","scaleY","originY"];function Uc(n,e,t,i){Ic(n.x,e,_v,t?t.x:void 0,i?i.x:void 0),Ic(n.y,e,yv,t?t.y:void 0,i?i.y:void 0)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Nc(n){return n.translate===0&&n.scale===1}function Uh(n){return Nc(n.x)&&Nc(n.y)}function Oc(n,e){return n.min===e.min&&n.max===e.max}function Tv(n,e){return Oc(n.x,e.x)&&Oc(n.y,e.y)}function Fc(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Nh(n,e){return Fc(n.x,e.x)&&Fc(n.y,e.y)}function Bc(n){return Rt(n.x)/Rt(n.y)}function Vc(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function ln(n){return[n("x"),n("y")]}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Sv(n,e,t){let i="";const s=n.x.translate/e.x,r=n.y.translate/e.y,o=t?.z||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:p,skewY:g}=t;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=n.x.scale*e.x,l=n.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Oh=["TopLeft","TopRight","BottomLeft","BottomRight"],wv=Oh.length,kc=n=>typeof n=="string"?parseFloat(n):n,zc=n=>typeof n=="number"||me.test(n);function Mv(n,e,t,i,s,r){s?(n.opacity=rt(0,t.opacity??1,Ev(i)),n.opacityExit=rt(e.opacity??1,0,Av(i))):r&&(n.opacity=rt(e.opacity??1,t.opacity??1,i));for(let o=0;o<wv;o++){const a=`border${Oh[o]}Radius`;let l=Hc(e,a),c=Hc(t,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||zc(l)===zc(c)?(n[a]=Math.max(rt(kc(l),kc(c),i),0),(dn.test(c)||dn.test(l))&&(n[a]+="%")):n[a]=c}(e.rotate||t.rotate)&&(n.rotate=rt(e.rotate||0,t.rotate||0,i))}function Hc(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Ev=Fh(0,.5,Rd),Av=Fh(.5,.95,$t);function Fh(n,e,t){return i=>i<n?0:i>e?1:t(cs(n,e,i))}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Rv(n,e,t){const i=wt(n)?n:Fi(n);return i.start(pl("",i,e,t)),i.animation}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function fs(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Pv=(n,e)=>n.depth-e.depth;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Cv{constructor(){this.children=[],this.isDirty=!1}add(e){Qa(this.children,e),this.isDirty=!0}remove(e){_r(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Pv),this.isDirty=!1,this.children.forEach(e)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Dv(n,e){const t=At.now(),i=({timestamp:s})=>{const r=s-t;r>=e&&(kn(i),n(r-e))};return tt.setup(i,!0),()=>kn(i)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function dr(n){return wt(n)?n.get():n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Lv{constructor(){this.members=[]}add(e){Qa(this.members,e);for(let t=this.members.length-1;t>=0;t--){const i=this.members[t];if(i===e||i===this.lead||i===this.prevLead)continue;const s=i.instance;s&&s.isConnected===!1&&i.isPresent!==!1&&!i.snapshot&&_r(this.members,i)}e.scheduleRender()}remove(e){if(_r(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(s=>e===s);if(t===0)return!1;let i;for(let s=t;s>=0;s--){const r=this.members[s],o=r.instance;if(r.isPresent!==!1&&(!o||o.isConnected!==!1)){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender();const s=i.options.layoutDependency,r=e.options.layoutDependency;if(!(s!==void 0&&r!==void 0&&s===r)){const l=i.instance;l&&l.isConnected===!1&&!i.snapshot||(e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0))}const{crossfade:a}=e.options;a===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const hr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Zr=["","X","Y","Z"],Iv=1e3;let Uv=0;function Jr(n,e,t,i){const{latestValues:s}=e;s[n]&&(t[n]=s[n],e.setStaticValue(n,0),i&&(i[n]=0))}function Bh(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=sh(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:r}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",tt,!(s||r))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&Bh(i)}function Vh({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e?.()){this.id=Uv++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Fv),this.nodes.forEach(zv),this.nodes.forEach(Hv),this.nodes.forEach(Bv)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Cv)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new tl),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=_l(o)&&!Og(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),n){let u,d=0;const h=()=>this.root.updateBlockedByResize=!1;tt.read(()=>{d=window.innerWidth}),n(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,u&&u(),u=Dv(h,250),hr.hasAnimatedSinceResize&&(hr.hasAnimatedSinceResize=!1,this.nodes.forEach(Wc)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||Xv,{onLayoutAnimationStart:v,onLayoutAnimationComplete:m}=c.getProps(),f=!this.targetLayout||!Nh(this.targetLayout,p),w=!d&&h;if(this.options.layoutRoot||this.resumeFrom||w||d&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...fl(g,"layout"),onPlay:v,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(u,w)}else d||Wc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),kn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Gv),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Bh(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Gc);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(jc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(kv),this.nodes.forEach(Nv),this.nodes.forEach(Ov)):this.nodes.forEach(jc),this.clearAllSnapshots();const a=At.now();_t.delta=fn(0,1e3/60,a-_t.timestamp),_t.timestamp=a,_t.isProcessing=!0,Gr.update.process(_t),Gr.preRender.process(_t),Gr.render.process(_t),_t.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Vv),this.sharedNodes.forEach(jv)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Rt(this.snapshot.measuredBox.x)&&!Rt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=mt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Uh(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Qn(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),qv(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return mt();const a=o.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Yv))){const{scroll:c}=this.root;c&&(Di(a.x,c.offset.x),Di(a.y,c.offset.y))}return a}removeElementScroll(o){const a=mt();if(Kt(a,o),this.scroll?.wasRoot)return a;for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;c!==this.root&&u&&d.layoutScroll&&(u.wasRoot&&Kt(a,o),Di(a.x,u.offset.x),Di(a.y,u.offset.y))}return a}applyTransform(o,a=!1){const l=mt();Kt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Li(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Qn(u.latestValues)&&Li(l,u.latestValues)}return Qn(this.latestValues)&&Li(l,this.latestValues),l}removeTransform(o){const a=mt();Kt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Qn(c.latestValues))continue;ia(c.latestValues)&&c.updateSnapshot();const u=mt(),d=c.measurePageBox();Kt(u,d),Uc(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Qn(this.latestValues)&&Uc(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_t.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=_t.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=mt(),this.targetWithTransforms=mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),xv(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Kt(this.target,this.layout.layoutBox),Th(this.target,this.targetDelta)):Kt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||ia(this.parent.latestValues)||yh(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=mt(),this.relativeTargetOrigin=mt(),Er(this.relativeTargetOrigin,a,l),Kt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===_t.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Kt(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;Xg(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=mt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Rc(this.prevProjectionDelta.x,this.projectionDelta.x),Rc(this.prevProjectionDelta.y,this.projectionDelta.y)),as(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!Vc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Vc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.visualElement?.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ci(),this.projectionDelta=Ci(),this.projectionDeltaWithTransform=Ci()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Ci();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=mt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,v=p!==g,m=this.getStack(),f=!m||m.members.length<=1,w=!!(v&&!f&&this.options.crossfade===!0&&!this.path.some($v));this.animationProgress=0;let _;this.mixTargetDelta=T=>{const P=T/1e3;$c(d.x,o.x,P),$c(d.y,o.y,P),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Er(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Wv(this.relativeTarget,this.relativeTargetOrigin,h,P),_&&Tv(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=mt()),Kt(_,this.relativeTarget)),v&&(this.animationValues=u,Mv(u,c,this.latestValues,P,w,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(kn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tt.update(()=>{hr.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Fi(0)),this.motionValue.jump(0,!1),this.currentAnimation=Rv(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Iv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&kh(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||mt();const d=Rt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=Rt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Kt(a,l),Li(a,u),as(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Lv),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){const{layoutId:o}=this.options;return o?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:o}=this.options;return o?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Jr("z",o,c,this.animationValues);for(let u=0;u<Zr.length;u++)Jr(`rotate${Zr[u]}`,o,c,this.animationValues),Jr(`skew${Zr[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=dr(a?.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=dr(a?.pointerEvents)||""),this.hasProjected&&!Qn(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=Sv(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:h,y:p}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in ra){if(u[g]===void 0)continue;const{correct:v,applyTo:m,isCSSVariable:f}=ra[g],w=d==="none"?u[g]:v(u[g],c);if(m){const _=m.length;for(let T=0;T<_;T++)o[m[T]]=w}else f?this.options.visualElement.renderState.vars[g]=w:o[g]=w}this.options.layoutId&&(o.pointerEvents=c===this?dr(a?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>o.currentAnimation?.stop()),this.root.nodes.forEach(Gc),this.root.sharedNodes.clear()}}}function Nv(n){n.updateLayout()}function Ov(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:i}=n.layout,{animationType:s}=n.options,r=e.source!==n.layout.source;s==="size"?ln(u=>{const d=r?e.measuredBox[u]:e.layoutBox[u],h=Rt(d);d.min=t[u].min,d.max=d.min+h}):kh(s,e.layoutBox,t)&&ln(u=>{const d=r?e.measuredBox[u]:e.layoutBox[u],h=Rt(t[u]);d.max=d.min+h,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[u].max=n.relativeTarget[u].min+h)});const o=Ci();as(o,t,e.layoutBox);const a=Ci();r?as(a,n.applyTransform(i,!0),e.measuredBox):as(a,t,e.layoutBox);const l=!Uh(o);let c=!1;if(!n.resumeFrom){const u=n.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:d,layout:h}=u;if(d&&h){const p=mt();Er(p,e.layoutBox,d.layoutBox);const g=mt();Er(g,t,h.layoutBox),Nh(p,g)||(c=!0),u.options.layoutRoot&&(n.relativeTarget=g,n.relativeTargetOrigin=p,n.relativeParent=u)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:a,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function Fv(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Bv(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function Vv(n){n.clearSnapshot()}function Gc(n){n.clearMeasurements()}function jc(n){n.isLayoutDirty=!1}function kv(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Wc(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function zv(n){n.resolveTargetDelta()}function Hv(n){n.calcProjection()}function Gv(n){n.resetSkewAndRotation()}function jv(n){n.removeLeadSnapshot()}function $c(n,e,t){n.translate=rt(e.translate,0,t),n.scale=rt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Xc(n,e,t,i){n.min=rt(e.min,t.min,i),n.max=rt(e.max,t.max,i)}function Wv(n,e,t,i){Xc(n.x,e.x,t.x,i),Xc(n.y,e.y,t.y,i)}function $v(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Xv={duration:.45,ease:[.4,0,.1,1]},qc=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Yc=qc("applewebkit/")&&!qc("chrome/")?Math.round:$t;function Kc(n){n.min=Yc(n.min),n.max=Yc(n.max)}function qv(n){Kc(n.x),Kc(n.y)}function kh(n,e,t){return n==="position"||n==="preserve-aspect"&&!vv(Bc(e),Bc(t),.2)}function Yv(n){return n!==n.root&&n.scroll?.wasRoot}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Kv=Vh({attachResizeListener:(n,e)=>fs(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Qr={current:void 0},zh=Vh({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Qr.current){const n=new Kv({});n.mount(window),n.setOptions({layoutScroll:!0}),Qr.current=n}return Qr.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ml=ee.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Zc(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function Zv(...n){return e=>{let t=!1;const i=n.map(s=>{const r=Zc(s,e);return!t&&typeof r=="function"&&(t=!0),r});if(t)return()=>{for(let s=0;s<i.length;s++){const r=i[s];typeof r=="function"?r():Zc(n[s],null)}}}}function Jv(...n){return ee.useCallback(Zv(...n),n)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Qv extends ee.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=t.offsetParent,s=ta(i)&&i.offsetWidth||0,r=ta(i)&&i.offsetHeight||0,o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft,o.right=s-o.width-o.left,o.bottom=r-o.height-o.top}return null}componentDidUpdate(){}render(){return this.props.children}}function ex({children:n,isPresent:e,anchorX:t,anchorY:i,root:s,pop:r}){const o=ee.useId(),a=ee.useRef(null),l=ee.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=ee.useContext(Ml),u=n.props?.ref??n?.ref,d=Jv(a,u);return ee.useInsertionEffect(()=>{const{width:h,height:p,top:g,left:v,right:m,bottom:f}=l.current;if(e||r===!1||!a.current||!h||!p)return;const w=t==="left"?`left: ${v}`:`right: ${m}`,_=i==="bottom"?`bottom: ${f}`:`top: ${g}`;a.current.dataset.motionPopId=o;const T=document.createElement("style");c&&(T.nonce=c);const P=s??document.head;return P.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${p}px !important;
            ${w}px !important;
            ${_}px !important;
          }
        `),()=>{P.contains(T)&&P.removeChild(T)}},[e]),I.jsx(Qv,{isPresent:e,childRef:a,sizeRef:l,pop:r,children:r===!1?n:ee.cloneElement(n,{ref:d})})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const tx=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:s,presenceAffectsLayout:r,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=Ja(nx),d=ee.useId();let h=!0,p=ee.useMemo(()=>(h=!1,{id:d,initial:e,isPresent:t,custom:s,onExitComplete:g=>{u.set(g,!0);for(const v of u.values())if(!v)return;i&&i()},register:g=>(u.set(g,!1),()=>u.delete(g))}),[t,u,i]);return r&&h&&(p={...p}),ee.useMemo(()=>{u.forEach((g,v)=>u.set(v,!1))},[t]),ee.useEffect(()=>{!t&&!u.size&&i&&i()},[t]),n=I.jsx(ex,{pop:o==="popLayout",isPresent:t,anchorX:a,anchorY:l,root:c,children:n}),I.jsx(Ir.Provider,{value:p,children:n})};function nx(){return new Map}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Hh(n=!0){const e=ee.useContext(Ir);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:s}=e,r=ee.useId();ee.useEffect(()=>{if(n)return s(r)},[n]);const o=ee.useCallback(()=>n&&i&&i(r),[r,i,n]);return!t&&i?[!1,o]:[!0]}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Ls=n=>n.key||"";function Jc(n){const e=[];return ee.Children.forEach(n,t=>{ee.isValidElement(t)&&e.push(t)}),e}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const El=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:r="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,d]=Hh(o),h=ee.useMemo(()=>Jc(n),[n]),p=o&&!u?[]:h.map(Ls),g=ee.useRef(!0),v=ee.useRef(h),m=Ja(()=>new Map),f=ee.useRef(new Set),[w,_]=ee.useState(h),[T,P]=ee.useState(h);gd(()=>{g.current=!1,v.current=h;for(let L=0;L<T.length;L++){const S=Ls(T[L]);p.includes(S)?(m.delete(S),f.current.delete(S)):m.get(S)!==!0&&m.set(S,!1)}},[T,p.length,p.join("-")]);const R=[];if(h!==w){let L=[...h];for(let S=0;S<T.length;S++){const x=T[S],E=Ls(x);p.includes(E)||(L.splice(S,0,x),R.push(x))}return r==="wait"&&R.length&&(L=R),P(Jc(L)),_(h),null}const{forceRender:C}=ee.useContext(Za);return I.jsx(I.Fragment,{children:T.map(L=>{const S=Ls(L),x=o&&!u?!1:h===T||p.includes(S),E=()=>{if(f.current.has(S))return;if(f.current.add(S),m.has(S))m.set(S,!0);else return;let B=!0;m.forEach(A=>{A||(B=!1)}),B&&(C?.(),P(v.current),o&&d?.(),i&&i())};return I.jsx(tx,{isPresent:x,initial:!g.current||t?void 0:!1,custom:e,presenceAffectsLayout:s,mode:r,root:c,onExitComplete:x?void 0:E,anchorX:a,anchorY:l,children:L},S)})})};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Gh=ee.createContext({strict:!1});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Qc={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let eu=!1;function ix(){if(eu)return;const n={};for(const e in Qc)n[e]={isEnabled:t=>Qc[e].some(i=>!!t[i])};xh(n),eu=!0}function jh(){return ix(),Gg()}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function sx(n){const e=jh();for(const t in n)e[t]={...e[t],...n[t]};xh(e)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const rx=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ar(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||rx.has(n)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}let Wh=n=>!Ar(n);function ox(n){typeof n=="function"&&(Wh=e=>e.startsWith("on")?!Ar(e):n(e))}try{ox(require("@emotion/is-prop-valid").default)}catch{}function ax(n,e,t){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(Wh(s)||t===!0&&Ar(s)||!e&&!Ar(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Or=ee.createContext({});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function lx(n,e){if(Nr(n)){const{initial:t,animate:i}=n;return{initial:t===!1||hs(t)?t:void 0,animate:hs(i)?i:void 0}}return n.inherit!==!1?e:{}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function cx(n){const{initial:e,animate:t}=lx(n,ee.useContext(Or));return ee.useMemo(()=>({initial:e,animate:t}),[tu(e),tu(t)])}function tu(n){return Array.isArray(n)?n.join(" "):n}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Al=()=>({style:{},transform:{},transformOrigin:{},vars:{}});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function $h(n,e,t){for(const i in e)!wt(e[i])&&!Mh(i,t)&&(n[i]=e[i])}function ux({transformTemplate:n},e){return ee.useMemo(()=>{const t=Al();return Sl(t,e,n),Object.assign({},t.vars,t.style)},[e])}function dx(n,e){const t=n.style||{},i={};return $h(i,t,n),Object.assign(i,ux(n,e)),i}function hx(n,e){const t={},i=dx(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Xh=()=>({...Al(),attrs:{}});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function fx(n,e,t,i){const s=ee.useMemo(()=>{const r=Xh();return Eh(r,e,Rh(i),n.transformTemplate,n.style),{...r.attrs,style:{...r.style}}},[e]);if(n.style){const r={};$h(r,n.style,n),s.style={...r,...s.style}}return s}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const px=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Rl(n){return typeof n!="string"||n.includes("-")?!1:!!(px.indexOf(n)>-1||/[A-Z]/u.test(n))}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function mx(n,e,t,{latestValues:i},s,r=!1,o){const l=(o??Rl(n)?fx:hx)(e,i,s,n),c=ax(e,typeof n=="string",r),u=n!==ee.Fragment?{...c,...l,ref:t}:{},{children:d}=e,h=ee.useMemo(()=>wt(d)?d.get():d,[d]);return ee.createElement(n,{...u,children:h})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function gx({scrapeMotionValuesFromProps:n,createRenderState:e},t,i,s){return{latestValues:vx(t,i,s,n),renderState:e()}}function vx(n,e,t,i){const s={},r=i(n,{});for(const h in r)s[h]=dr(r[h]);let{initial:o,animate:a}=n;const l=Nr(n),c=gh(n);e&&c&&!l&&n.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=t?t.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Ur(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const g=ml(n,h[p]);if(g){const{transitionEnd:v,transition:m,...f}=g;for(const w in f){let _=f[w];if(Array.isArray(_)){const T=u?_.length-1:0;_=_[T]}_!==null&&(s[w]=_)}for(const w in v)s[w]=v[w]}}}return s}const qh=n=>(e,t)=>{const i=ee.useContext(Or),s=ee.useContext(Ir),r=()=>gx(n,e,i,s);return t?r():Ja(r)};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const xx=qh({scrapeMotionValuesFromProps:wl,createRenderState:Al});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const bx=qh({scrapeMotionValuesFromProps:Ph,createRenderState:Xh});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const _x=Symbol.for("motionComponentSymbol");if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function yx(n,e,t){const i=ee.useRef(t);ee.useInsertionEffect(()=>{i.current=t});const s=ee.useRef(null);return ee.useCallback(r=>{r&&n.onMount?.(r),e&&(r?e.mount(r):e.unmount());const o=i.current;if(typeof o=="function")if(r){const a=o(r);typeof a=="function"&&(s.current=a)}else s.current?(s.current(),s.current=null):o(r);else o&&(o.current=r)},[e])}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Yh=ee.createContext({});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ai(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Tx(n,e,t,i,s,r){const{visualElement:o}=ee.useContext(Or),a=ee.useContext(Gh),l=ee.useContext(Ir),c=ee.useContext(Ml),u=c.reducedMotion,d=c.skipAnimations,h=ee.useRef(null),p=ee.useRef(!1);i=i||a.renderer,!h.current&&i&&(h.current=i(n,{visualState:e,parent:o,props:t,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:r}),p.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const g=h.current,v=ee.useContext(Yh);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&Sx(h.current,t,s,v);const m=ee.useRef(!1);ee.useInsertionEffect(()=>{g&&m.current&&g.update(t,l)});const f=t[ih],w=ee.useRef(!!f&&!window.MotionHandoffIsComplete?.(f)&&window.MotionHasOptimisedAnimation?.(f));return gd(()=>{p.current=!0,g&&(m.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),w.current&&g.animationState&&g.animationState.animateChanges())}),ee.useEffect(()=>{g&&(!w.current&&g.animationState&&g.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(f)}),w.current=!1),g.enteringChildren=void 0)}),g}function Sx(n,e,t,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Kh(n.parent)),n.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Ai(a),visualElement:n,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function Kh(n){if(n)return n.options.allowProjection!==!1?n.projection:Kh(n.parent)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function eo(n,{forwardMotionProps:e=!1,type:t}={},i,s){i&&sx(i);const r=t?t==="svg":Rl(n),o=r?bx:xx;function a(c,u){let d;const h={...ee.useContext(Ml),...c,layoutId:wx(c)},{isStatic:p}=h,g=cx(c),v=o(c,p);if(!p&&md){Mx();const m=Ex(h);d=m.MeasureLayout,g.visualElement=Tx(n,v,h,s,m.ProjectionNode,r)}return I.jsxs(Or.Provider,{value:g,children:[d&&g.visualElement?I.jsx(d,{visualElement:g.visualElement,...h}):null,mx(n,c,yx(v,g.visualElement,u),v,p,e,r)]})}a.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const l=ee.forwardRef(a);return l[_x]=n,l}function wx({layoutId:n}){const e=ee.useContext(Za).id;return e&&n!==void 0?e+"-"+n:n}function Mx(n,e){ee.useContext(Gh).strict}function Ex(n){const e=jh(),{drag:t,layout:i}=e;if(!t&&!i)return{};const s={...t,...i};return{MeasureLayout:t?.isEnabled(n)||i?.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Ax(n,e){if(typeof Proxy>"u")return eo;const t=new Map,i=(r,o)=>eo(r,o,n,e),s=(r,o)=>i(r,o);return new Proxy(s,{get:(r,o)=>o==="create"?i:(t.has(o)||t.set(o,eo(o,void 0,n,e)),t.get(o))})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Rx=(n,e)=>e.isSVG??Rl(n)?new ov(e):new ev(e,{allowProjection:n!==ee.Fragment});if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Px extends Gn{constructor(e){super(e),e.animationState||(e.animationState=dv(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ur(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}let Cx=0;class Dx extends Gn{constructor(){super(...arguments),this.id=Cx++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Lx={animation:{Feature:Px},exit:{Feature:Dx}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function ys(n){return{point:{x:n.pageX,y:n.pageY}}}const Ix=n=>e=>bl(e)&&n(e,ys(e));if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function ls(n,e,t,i){return fs(n,e,Ix(t),i)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Zh=({current:n})=>n?n.ownerDocument.defaultView:null;if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const nu=(n,e)=>Math.abs(n-e);function Ux(n,e){const t=nu(n.x,e.x),i=nu(n.y,e.y);return Math.sqrt(t**2+i**2)}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const iu=new Set(["auto","scroll"]);class Jh{constructor(e,t,{transformPagePoint:i,contextWindow:s=window,dragSnapToOrigin:r=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=no(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,v=Ux(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!v)return;const{point:m}=p,{timestamp:f}=_t;this.history.push({...m,timestamp:f});const{onStart:w,onMove:_}=this.handlers;g||(w&&w(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,p)},this.handlePointerMove=(p,g)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=to(g,this.transformPagePoint),tt.update(this.updatePoint,!0)},this.handlePointerUp=(p,g)=>{this.end();const{onEnd:v,onSessionEnd:m,resumeAnimation:f}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&f&&f(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=no(p.type==="pointercancel"?this.lastMoveEventInfo:to(g,this.transformPagePoint),this.history);this.startEvent&&v&&v(p,w),m&&m(p,w)},!bl(e))return;this.dragSnapToOrigin=r,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=s||window;const l=ys(e),c=to(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=_t;this.history=[{...u,timestamp:d}];const{onSessionStart:h}=t;h&&h(e,no(c,this.history)),this.removeListeners=xs(ls(this.contextWindow,"pointermove",this.handlePointerMove),ls(this.contextWindow,"pointerup",this.handlePointerUp),ls(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let t=e.parentElement;for(;t;){const i=getComputedStyle(t);(iu.has(i.overflowX)||iu.has(i.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const i=e===window,s=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},r={x:s.x-t.x,y:s.y-t.y};r.x===0&&r.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=r.x,this.lastMoveEventInfo.point.y+=r.y):this.history.length>0&&(this.history[0].x-=r.x,this.history[0].y-=r.y),this.scrollPositions.set(e,s),tt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),kn(this.updatePoint)}}function to(n,e){return e?{point:e(n.point)}:n}function su(n,e){return{x:n.x-e.x,y:n.y-e.y}}function no({point:n},e){return{point:n,delta:su(n,Qh(e)),offset:su(n,Nx(e)),velocity:Ox(e,.1)}}function Nx(n){return n[0]}function Qh(n){return n[n.length-1]}function Ox(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const s=Qh(n);for(;t>=0&&(i=n[t],!(s.timestamp-i.timestamp>sn(e)));)t--;if(!i)return{x:0,y:0};i===n[0]&&n.length>2&&s.timestamp-i.timestamp>sn(e)*2&&(i=n[1]);const r=Wt(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Fx(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?rt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?rt(t,n,i.max):Math.min(n,t)),n}function ru(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function Bx(n,{top:e,left:t,bottom:i,right:s}){return{x:ru(n.x,t,s),y:ru(n.y,e,i)}}function ou(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function Vx(n,e){return{x:ou(n.x,e.x),y:ou(n.y,e.y)}}function kx(n,e){let t=.5;const i=Rt(n),s=Rt(e);return s>i?t=cs(e.min,e.max-i,n.min):i>s&&(t=cs(n.min,n.max-s,e.min)),fn(0,1,t)}function zx(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const oa=.35;function Hx(n=oa){return n===!1?n=0:n===!0&&(n=oa),{x:au(n,"left","right"),y:au(n,"top","bottom")}}function au(n,e,t){return{min:lu(n,e),max:lu(n,t)}}function lu(n,e){return typeof n=="number"?n:n[e]||0}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Gx=new WeakMap;class jx{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=mt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const r=d=>{t&&this.snapToCursor(ys(d).point),this.stopAnimation()},o=(d,h)=>{const{drag:p,dragPropagation:g,onDragStart:v}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=bg(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ln(f=>{let w=this.getAxisMotionValue(f).get()||0;if(dn.test(w)){const{projection:_}=this.visualElement;if(_&&_.layout){const T=_.layout.layoutBox[f];T&&(w=Rt(T)*(parseFloat(w)/100))}}this.originPoint[f]=w}),v&&tt.update(()=>v(d,h),!1,!0),Zo(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:v,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:f}=h;if(g&&this.currentDirection===null){this.currentDirection=$x(f),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",h.point,f),this.updateAxis("y",h.point,f),this.visualElement.render(),m&&tt.update(()=>m(d,h),!1,!0)},l=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new Jh(e,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:Zh(this.visualElement),element:this.visualElement.current})}stop(e,t){const i=e||this.latestPointerEvent,s=t||this.latestPanInfo,r=this.isDragging;if(this.cancel(),!r||!s||!i)return;const{velocity:o}=s;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&tt.postRender(()=>a(i,s))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,i){const{drag:s}=this.getProps();if(!i||!Is(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Fx(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;e&&Ai(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=Bx(i.layoutBox,e):this.constraints=!1,this.elastic=Hx(t),s!==this.constraints&&!Ai(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&ln(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=zx(i.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Ai(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=qg(i,s.root,this.visualElement.getTransformPagePoint());let o=Vx(s.layout.layoutBox,r);if(t){const a=t(Wg(o));this.hasMutatedConstraints=!!a,a&&(o=_h(a))}return o}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ln(u=>{if(!Is(u,t,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=s?200:1e6,p=s?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...r,...d};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Zo(this.visualElement,e),i.start(pl(e,i,0,t,this.visualElement,!1))}stopAnimation(){ln(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[t];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){ln(t=>{const{drag:i}=this.getProps();if(!Is(t,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(t);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[t],l=r.get()||0;r.set(e[t]-rt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!Ai(t)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};ln(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();s[o]=kx({min:l,max:l},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),ln(o=>{if(!Is(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(rt(l,c,s[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Gx.set(this.visualElement,this);const e=this.visualElement.current,t=ls(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps(),h=c.target,p=h!==e&&Mg(h);u&&d&&!p&&this.start(c)});let i;const s=()=>{const{dragConstraints:c}=this.getProps();Ai(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=Wx(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:r}=this.visualElement,o=r.addEventListener("measure",s);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),tt.read(s);const a=fs(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",(({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(ln(d=>{const h=this.getAxisMotionValue(d);h&&(this.originPoint[d]+=c[d].translate,h.set(h.get()+c[d].translate))}),this.visualElement.render())}));return()=>{a(),t(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=oa,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function cu(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function Wx(n,e,t){const i=gc(n,cu(t)),s=gc(e,cu(t));return()=>{i(),s()}}function Is(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function $x(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Xx extends Gn{constructor(e){super(e),this.removeGroupControls=$t,this.removeListeners=$t,this.controls=new jx(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$t}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const io=n=>(e,t)=>{n&&tt.update(()=>n(e,t),!1,!0)};class qx extends Gn{constructor(){super(...arguments),this.removePointerDownListener=$t}onPointerDown(e){this.session=new Jh(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zh(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:io(e),onStart:io(t),onMove:io(i),onEnd:(r,o)=>{delete this.session,s&&tt.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=ls(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}let so=!1;class Yx extends ee.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;r&&(t.group&&t.group.add(r),i&&i.register&&s&&i.register(r),so&&r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),hr.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:s,isPresent:r}=this.props,{projection:o}=i;return o&&(o.isPresent=r,e.layoutDependency!==t&&o.setOptions({...o.options,layoutDependency:t}),so=!0,s||e.layoutDependency!==t||t===void 0||e.isPresent!==r?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||tt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),xl.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:s}=e;so=!0,s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ef(n){const[e,t]=Hh(),i=ee.useContext(Za);return I.jsx(Yx,{...n,layoutGroup:i,switchLayoutGroup:ee.useContext(Yh),isPresent:e,safeToRemove:t})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Kx={pan:{Feature:qx},drag:{Feature:Xx,ProjectionNode:zh,MeasureLayout:ef}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function uu(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const s="onHover"+t,r=i[s];r&&tt.postRender(()=>r(e,ys(e)))}class Zx extends Gn{mount(){const{current:e}=this.node;e&&(this.unmount=yg(e,(t,i)=>(uu(this.node,i,"Start"),s=>uu(this.node,s,"End"))))}unmount(){}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}class Jx extends Gn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=xs(fs(this.node.current,"focus",()=>this.onFocus()),fs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function du(n,e,t){const{props:i}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const s="onTap"+(t==="End"?"":t),r=i[s];r&&tt.postRender(()=>r(e,ys(e)))}class Qx extends Gn{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:i}=this.node.props;this.unmount=Ag(e,(s,r)=>(du(this.node,r,"Start"),(o,{success:a})=>du(this.node,o,a?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:i?.tap===!1})}unmount(){}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const aa=new WeakMap,ro=new WeakMap,eb=n=>{const e=aa.get(n.target);e&&e(n)},tb=n=>{n.forEach(eb)};function nb({root:n,...e}){const t=n||document;ro.has(t)||ro.set(t,{});const i=ro.get(t),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(tb,{root:n,...e})),i[s]}function ib(n,e,t){const i=nb(e);return aa.set(n,t),i.observe(n),()=>{aa.delete(n),i.unobserve(n)}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const sb={some:0,all:1};class rb extends Gn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:r}=e,o={root:t?t.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:sb[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,r&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return ib(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(ob(e,t))&&this.startObserver()}unmount(){}}function ob({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ab={inView:{Feature:rb},tap:{Feature:Qx},focus:{Feature:Jx},hover:{Feature:Zx}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const lb={layout:{ProjectionNode:zh,MeasureLayout:ef}};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const cb={...Lx,...ab,...Kx,...lb};if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Bt=Ax(cb,Rx);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pl="175",ub=0,hu=1,db=2,tf=1,hb=2,_n=3,zn=0,It=1,yn=2,Bn=0,Ni=1,la=2,fu=3,pu=4,fb=5,ni=100,pb=101,mb=102,gb=103,vb=104,xb=200,bb=201,_b=202,yb=203,ca=204,ua=205,Tb=206,Sb=207,wb=208,Mb=209,Eb=210,Ab=211,Rb=212,Pb=213,Cb=214,da=0,ha=1,fa=2,Bi=3,pa=4,ma=5,ga=6,va=7,nf=0,Db=1,Lb=2,Vn=0,Ib=1,Ub=2,Nb=3,Ob=4,Fb=5,Bb=6,Vb=7,sf=300,Vi=301,ki=302,xa=303,ba=304,Fr=306,_a=1e3,oi=1001,ya=1002,on=1003,kb=1004,Us=1005,un=1006,oo=1007,ai=1008,An=1009,rf=1010,of=1011,ps=1012,Cl=1013,ci=1014,Tn=1015,Ts=1016,Dl=1017,Ll=1018,ms=1020,af=35902,lf=1021,cf=1022,nn=1023,uf=1024,df=1025,gs=1026,vs=1027,hf=1028,Il=1029,ff=1030,Ul=1031,Nl=1033,fr=33776,pr=33777,mr=33778,gr=33779,Ta=35840,Sa=35841,wa=35842,Ma=35843,Ea=36196,Aa=37492,Ra=37496,Pa=37808,Ca=37809,Da=37810,La=37811,Ia=37812,Ua=37813,Na=37814,Oa=37815,Fa=37816,Ba=37817,Va=37818,ka=37819,za=37820,Ha=37821,vr=36492,Ga=36494,ja=36495,pf=36283,Wa=36284,$a=36285,Xa=36286,zb=3200,Hb=3201,Gb=0,jb=1,On="",Gt="srgb",zi="srgb-linear",Rr="linear",Ze="srgb",fi=7680,mu=519,Wb=512,$b=513,Xb=514,mf=515,qb=516,Yb=517,Kb=518,Zb=519,gu=35044,vu="300 es",Sn=2e3,Pr=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ao=Math.PI/180,qa=180/Math.PI;function Ss(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Fe(n,e,t){return Math.max(e,Math.min(t,n))}function Jb(n,e){return(n%e+e)%e}function lo(n,e,t){return(1-t)*n+t*e}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,i,s,r,o,a,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],w=s[1],_=s[4],T=s[7],P=s[2],R=s[5],C=s[8];return r[0]=o*v+a*w+l*P,r[3]=o*m+a*_+l*R,r[6]=o*f+a*T+l*C,r[1]=c*v+u*w+d*P,r[4]=c*m+u*_+d*R,r[7]=c*f+u*T+d*C,r[2]=h*v+p*w+g*P,r[5]=h*m+p*_+g*R,r[8]=h*f+p*T+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*d+i*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Ie;function gf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qb(){const n=Cr("canvas");return n.style.display="block",n}const xu={};function xr(n){n in xu||(xu[n]=!0,console.warn(n))}function e_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function t_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function n_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bu=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function i_(){const n={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ze&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Rr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zi]:{primaries:e,whitePoint:i,transfer:Rr,toXYZ:bu,fromXYZ:_u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:Ze,toXYZ:bu,fromXYZ:_u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const We=i_();function Mn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pi;class s_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pi===void 0&&(pi=Cr("canvas")),pi.width=e.width,pi.height=e.height;const s=pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=pi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mn(t[i]/255)*255):t[i]=Mn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r_=0;class Ol{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uo(s[o].image)):r.push(uo(s[o]))}else r=uo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?s_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let o_=0;class Ut extends $i{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,i=oi,s=oi,r=un,o=ai,a=nn,l=An,c=Ut.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Ss(),this.name="",this.source=new Ol(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=sf;Ut.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,T=(p+1)/2,P=(f+1)/2,R=(u+h)/4,C=(d+v)/4,L=(g+m)/4;return _>T&&_>P?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=C/i):T>P?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=R/s,r=L/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=C/r,s=L/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a_ extends $i{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ut(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ol(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends a_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vf extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l_ extends Ut{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*v,w=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const P=Math.sqrt(_),R=Math.atan2(P,f*w);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const T=a*w;if(l=l*m+h*T,c=c*m+p*T,u=u*m+g*T,d=d*m+v*T,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Fe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new z,yu=new ws;class Ms{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(r,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ji),Os.subVectors(this.max,Ji),mi.subVectors(e.a,Ji),gi.subVectors(e.b,Ji),vi.subVectors(e.c,Ji),Pn.subVectors(gi,mi),Cn.subVectors(vi,gi),Xn.subVectors(mi,vi);let t=[0,-Pn.z,Pn.y,0,-Cn.z,Cn.y,0,-Xn.z,Xn.y,Pn.z,0,-Pn.x,Cn.z,0,-Cn.x,Xn.z,0,-Xn.x,-Pn.y,Pn.x,0,-Cn.y,Cn.x,0,-Xn.y,Xn.x,0];return!fo(t,mi,gi,vi,Os)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,mi,gi,vi,Os))?!1:(Fs.crossVectors(Pn,Cn),t=[Fs.x,Fs.y,Fs.z],fo(t,mi,gi,vi,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new z,new z,new z,new z,new z,new z,new z,new z],Zt=new z,Ns=new Ms,mi=new z,gi=new z,vi=new z,Pn=new z,Cn=new z,Xn=new z,Ji=new z,Os=new z,Fs=new z,qn=new z;function fo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qn.fromArray(n,r);const a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),u=i.dot(qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const c_=new Ms,Qi=new z,po=new z;class Es{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):c_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qi,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(po)),this.expandByPoint(Qi.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new z,mo=new z,Bs=new z,Dn=new z,go=new z,Vs=new z,vo=new z;class Fl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mo.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(mo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=Dn.dot(this.direction),l=-Dn.dot(Bs),c=Dn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(mo).addScaledVector(Bs,h),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),s=gn.dot(gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,s,r){go.subVectors(t,e),Vs.subVectors(i,e),vo.crossVectors(go,Vs);let o=this.direction.dot(vo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const l=a*this.direction.dot(Vs.crossVectors(Dn,Vs));if(l<0)return null;const c=a*this.direction.dot(go.cross(Dn));if(c<0||l+c>o)return null;const u=-a*Dn.dot(vo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,s,r,o,a,l,c,u,d,h,p,g,v,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,p,g,v,m)}set(e,t,i,s,r,o,a,l,c,u,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,v=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,d_)}lookAt(e,t,i){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Ln.crossVectors(i,Ot),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Ln.crossVectors(i,Ot)),Ln.normalize(),ks.crossVectors(Ot,Ln),s[0]=Ln.x,s[4]=ks.x,s[8]=Ot.x,s[1]=Ln.y,s[5]=ks.y,s[9]=Ot.y,s[2]=Ln.z,s[6]=ks.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],w=i[3],_=i[7],T=i[11],P=i[15],R=s[0],C=s[4],L=s[8],S=s[12],x=s[1],E=s[5],B=s[9],A=s[13],N=s[2],H=s[6],V=s[10],q=s[14],G=s[3],ne=s[7],oe=s[11],ye=s[15];return r[0]=o*R+a*x+l*N+c*G,r[4]=o*C+a*E+l*H+c*ne,r[8]=o*L+a*B+l*V+c*oe,r[12]=o*S+a*A+l*q+c*ye,r[1]=u*R+d*x+h*N+p*G,r[5]=u*C+d*E+h*H+p*ne,r[9]=u*L+d*B+h*V+p*oe,r[13]=u*S+d*A+h*q+p*ye,r[2]=g*R+v*x+m*N+f*G,r[6]=g*C+v*E+m*H+f*ne,r[10]=g*L+v*B+m*V+f*oe,r[14]=g*S+v*A+m*q+f*ye,r[3]=w*R+_*x+T*N+P*G,r[7]=w*C+_*E+T*H+P*ne,r[11]=w*L+_*B+T*V+P*oe,r[15]=w*S+_*A+T*q+P*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*p-i*l*p)+v*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*d-t*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],w=d*m*c-v*h*c+v*l*p-a*m*p-d*l*f+a*h*f,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,T=u*v*c-g*d*c+g*a*p-o*v*p-u*a*f+o*d*f,P=g*d*l-u*v*l-g*a*h+o*v*h+u*a*m-o*d*m,R=t*w+i*_+s*T+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=w*C,e[1]=(v*h*r-d*m*r-v*s*p+i*m*p+d*s*f-i*h*f)*C,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*f+i*l*f)*C,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*p-i*l*p)*C,e[4]=_*C,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*f+t*h*f)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*C,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*C,e[8]=T*C,e[9]=(g*d*r-u*v*r-g*i*p+t*v*p+u*i*f-t*d*f)*C,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*C,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*p-t*a*p)*C,e[12]=P*C,e[13]=(u*v*s-g*d*s+g*i*h-t*v*h-u*i*m+t*d*m)*C,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,v=o*u,m=o*d,f=a*d,w=l*c,_=l*u,T=l*d,P=i.x,R=i.y,C=i.z;return s[0]=(1-(v+f))*P,s[1]=(p+T)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(p-T)*R,s[5]=(1-(h+f))*R,s[6]=(m+w)*R,s[7]=0,s[8]=(g+_)*C,s[9]=(m-w)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=xi.set(s[0],s[1],s[2]).length();const o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const c=1/r,u=1/o,d=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Sn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let p,g;if(a===Sn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Sn){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,p=(i+s)*u;let g,v;if(a===Sn)g=(o+r)*d,v=-2*d;else if(a===Pr)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xi=new z,Jt=new ct,u_=new z(0,0,0),d_=new z(1,1,1),Ln=new z,ks=new z,Ot=new z,Tu=new ct,Su=new ws;class Rn{constructor(e=0,t=0,i=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Su.setFromEuler(this),this.setFromQuaternion(Su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let h_=0;const wu=new z,bi=new ws,vn=new ct,zs=new z,es=new z,f_=new z,p_=new ws,Mu=new z(1,0,0),Eu=new z(0,1,0),Au=new z(0,0,1),Ru={type:"added"},m_={type:"removed"},_i={type:"childadded",child:null},xo={type:"childremoved",child:null};class Pt extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new z,t=new Rn,i=new ws,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ie}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.multiply(bi),this}rotateOnWorldAxis(e,t){return bi.setFromAxisAngle(e,t),this.quaternion.premultiply(bi),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(Eu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(Eu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zs.copy(e):zs.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(es,zs,this.up):vn.lookAt(zs,es,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(vn),this.quaternion.premultiply(bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ru),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ru),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new z(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new z,xn=new z,bo=new z,bn=new z,yi=new z,Ti=new z,Pu=new z,_o=new z,yo=new z,To=new z,So=new dt,wo=new dt,Mo=new dt;class tn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qt.subVectors(s,t),xn.subVectors(i,t),bo.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(xn),l=Qt.dot(bo),c=xn.dot(xn),u=xn.dot(bo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return So.setScalar(0),wo.setScalar(0),Mo.setScalar(0),So.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,i),Mo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(So,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(Mo,r.z),o}static isFrontFacing(e,t,i,s){return Qt.subVectors(i,t),xn.subVectors(e,t),Qt.cross(xn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Qt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;yi.subVectors(s,i),Ti.subVectors(r,i),_o.subVectors(e,i);const l=yi.dot(_o),c=Ti.dot(_o);if(l<=0&&c<=0)return t.copy(i);yo.subVectors(e,s);const u=yi.dot(yo),d=Ti.dot(yo);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(yi,o);To.subVectors(e,r);const p=yi.dot(To),g=Ti.dot(To);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ti,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Pu.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(Pu,a);const f=1/(m+v+h);return o=v*f,a=h*f,t.copy(i).addScaledVector(yi,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=We.workingColorSpace){if(e=Jb(e,1),t=Fe(t,0,1),i=Fe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Eo(o,r,e+1/3),this.g=Eo(o,r,e),this.b=Eo(o,r,e-1/3)}return We.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=bf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return We.fromWorkingColorSpace(St.copy(this),e),Math.round(Fe(St.r*255,0,255))*65536+Math.round(Fe(St.g*255,0,255))*256+Math.round(Fe(St.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(St.copy(this),t);const i=St.r,s=St.g,r=St.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Gt){We.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,s=St.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(In),this.setHSL(In.h+e,In.s+t,In.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(In),e.getHSL(Hs);const i=lo(In.h,Hs.h,t),s=lo(In.s,Hs.s,t),r=lo(In.l,Hs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ye;Ye.NAMES=bf;let g_=0;class Xi extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Ni,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ua,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ca&&(i.blendSrc=this.blendSrc),this.blendDst!==ua&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class _f extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new z,Gs=new Qe;let v_=0;class Xt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class yf extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tf extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hn extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let x_=0;const Ht=new ct,Ao=new Pt,Si=new z,Ft=new Ms,ts=new Ms,xt=new z;class an extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?Tf:yf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Ft.min,ts.min),Ft.expandByPoint(xt),xt.addVectors(Ft.max,ts.max),Ft.expandByPoint(xt)):(Ft.expandByPoint(ts.min),Ft.expandByPoint(ts.max))}Ft.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xt.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(e,c),xt.add(Si)),s=Math.max(s,i.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new z,l[L]=new z;const c=new z,u=new z,d=new z,h=new Qe,p=new Qe,g=new Qe,v=new z,m=new z;function f(L,S,x){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,x),h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),a[L].add(v),a[S].add(v),a[x].add(v),l[L].add(m),l[S].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,S=w.length;L<S;++L){const x=w[L],E=x.start,B=x.count;for(let A=E,N=E+B;A<N;A+=3)f(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const _=new z,T=new z,P=new z,R=new z;function C(L){P.fromBufferAttribute(s,L),R.copy(P);const S=a[L];_.copy(S),_.sub(P.multiplyScalar(P.dot(S))).normalize(),T.crossVectors(R,S);const E=T.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,E)}for(let L=0,S=w.length;L<S;++L){const x=w[L],E=x.start,B=x.count;for(let A=E,N=E+B;A<N;A+=3)C(e.getX(A+0)),C(e.getX(A+1)),C(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Xt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new ct,Yn=new Fl,js=new Es,Du=new z,Ws=new z,$s=new z,Xs=new z,Ro=new z,qs=new z,Lu=new z,Ys=new z;class wn extends Pt{constructor(e=new an,t=new _f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ro.fromBufferAttribute(d,e),o?qs.addScaledVector(Ro,u):qs.addScaledVector(Ro.sub(t),u))}t.add(qs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(js.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(js,Du)===null||Yn.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Cu),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,P=_;T<P;T+=3){const R=a.getX(T),C=a.getX(T+1),L=a.getX(T+2);s=Ks(this,f,e,i,c,u,d,R,C,L),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=a.getX(m),_=a.getX(m+1),T=a.getX(m+2);s=Ks(this,o,e,i,c,u,d,w,_,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=w,P=_;T<P;T+=3){const R=T,C=T+1,L=T+2;s=Ks(this,f,e,i,c,u,d,R,C,L),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=m,_=m+1,T=m+2;s=Ks(this,o,e,i,c,u,d,w,_,T),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function b_(n,e,t,i,s,r,o,a){let l;if(e.side===It?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===zn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:n}}function Ks(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ws),n.getVertexPosition(l,$s),n.getVertexPosition(c,Xs);const u=b_(n,e,t,i,Ws,$s,Xs,Lu);if(u){const d=new z;tn.getBarycoord(Lu,Ws,$s,Xs,d),s&&(u.uv=tn.getInterpolatedAttribute(s,a,l,c,d,new Qe)),r&&(u.uv1=tn.getInterpolatedAttribute(r,a,l,c,d,new Qe)),o&&(u.normal=tn.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};tn.getNormal(Ws,$s,Xs,h.normal),u.face=h,u.barycoord=d}return u}class As extends an{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(d,2));function g(v,m,f,w,_,T,P,R,C,L,S){const x=T/C,E=P/L,B=T/2,A=P/2,N=R/2,H=C+1,V=L+1;let q=0,G=0;const ne=new z;for(let oe=0;oe<V;oe++){const ye=oe*E-A;for(let Oe=0;Oe<H;Oe++){const Je=Oe*x-B;ne[v]=Je*w,ne[m]=ye*_,ne[f]=N,c.push(ne.x,ne.y,ne.z),ne[v]=0,ne[m]=0,ne[f]=R>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(Oe/C),d.push(1-oe/L),q+=1}}for(let oe=0;oe<L;oe++)for(let ye=0;ye<C;ye++){const Oe=h+ye+H*oe,Je=h+ye+H*(oe+1),K=h+(ye+1)+H*(oe+1),se=h+(ye+1)+H*oe;l.push(Oe,Je,se),l.push(Je,K,se),G+=6}a.addGroup(p,G,S),p+=G,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Et(n){const e={};for(let t=0;t<n.length;t++){const i=Hi(n[t]);for(const s in i)e[s]=i[s]}return e}function __(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const y_={clone:Hi,merge:Et};var T_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T_,this.fragmentShader=S_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wf extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new z,Iu=new Qe,Uu=new Qe;class jt extends wf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qa*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Uu),t.subVectors(Uu,Iu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Mi=1;class w_ extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt(wi,Mi,e,t);s.layers=this.layers,this.add(s);const r=new jt(wi,Mi,e,t);r.layers=this.layers,this.add(r);const o=new jt(wi,Mi,e,t);o.layers=this.layers,this.add(o);const a=new jt(wi,Mi,e,t);a.layers=this.layers,this.add(a);const l=new jt(wi,Mi,e,t);l.layers=this.layers,this.add(l);const c=new jt(wi,Mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mf extends Ut{constructor(e=[],t=Vi,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M_ extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Mf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new As(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Bn});r.uniforms.tEquirect.value=t;const o=new wn(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=un),new w_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Zs extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E_={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class A_ extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Co=new z,R_=new z,P_=new Ie;class ei{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Co.subVectors(i,t).cross(R_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Co),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||P_.getNormalMatrix(e),s=this.coplanarPoint(Co).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new Es,Js=new z;class Ef{constructor(e=new ei,t=new ei,i=new ei,s=new ei,r=new ei,o=new ei){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],g=s[9],v=s[10],m=s[11],f=s[12],w=s[13],_=s[14],T=s[15];if(i[0].setComponents(l-r,h-c,m-p,T-f).normalize(),i[1].setComponents(l+r,h+c,m+p,T+f).normalize(),i[2].setComponents(l+o,h+u,m+g,T+w).normalize(),i[3].setComponents(l-o,h-u,m-g,T-w).normalize(),i[4].setComponents(l-a,h-d,m-v,T-_).normalize(),t===Sn)i[5].setComponents(l+a,h+d,m+v,T+_).normalize();else if(t===Pr)i[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Af extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dr=new z,Lr=new z,Nu=new ct,ns=new Fl,Qs=new Es,Do=new z,Ou=new z;class C_ extends Pt{constructor(e=new an,t=new Af){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Dr.fromBufferAttribute(t,s-1),Lr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Dr.distanceTo(Lr);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,e.ray.intersectsSphere(Qs)===!1)return;Nu.copy(s).invert(),ns.copy(e.ray).applyMatrix4(Nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=u.getX(v),w=u.getX(v+1),_=er(this,e,ns,l,f,w,v);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),f=er(this,e,ns,l,v,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=er(this,e,ns,l,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=er(this,e,ns,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function er(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Dr.fromBufferAttribute(a,s),Lr.fromBufferAttribute(a,r),t.distanceSqToSegment(Dr,Lr,Do,Ou)>i)return;Do.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Do);if(!(c<e.near||c>e.far))return{distance:c,point:Ou.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Fu=new z,Bu=new z;class D_ extends C_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Fu.fromBufferAttribute(t,s),Bu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Fu.distanceTo(Bu);e.setAttribute("lineDistance",new hn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rf extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new ct,Ya=new Fl,tr=new Es,nr=new z;class L_ extends Pt{constructor(e=new an,t=new Rf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,e.ray.intersectsSphere(tr)===!1)return;Vu.copy(s).invert(),Ya.copy(e.ray).applyMatrix4(Vu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,v=p;g<v;g++){const m=c.getX(g);nr.fromBufferAttribute(d,m),ku(nr,m,l,s,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,v=p;g<v;g++)nr.fromBufferAttribute(d,g),ku(nr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ku(n,e,t,i,s,r,o){const a=Ya.distanceSqToPoint(n);if(a<t){const l=new z;Ya.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pf extends Ut{constructor(e,t,i=ci,s,r,o,a=on,l=on,c,u=gs){if(u!==gs&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ol(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Br extends an{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const w=f*h-o;for(let _=0;_<c;_++){const T=_*d-r;g.push(T,-w,0),v.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const _=w+c*f,T=w+c*(f+1),P=w+1+c*(f+1),R=w+1+c*f;p.push(_,T,R),p.push(T,P,R)}this.setIndex(p),this.setAttribute("position",new hn(g,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}class I_ extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U_ extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class N_ extends wf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class O_ extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function zu(n,e,t,i){const s=F_(i);switch(t){case lf:return n*e;case uf:return n*e;case df:return n*e*2;case hf:return n*e/s.components*s.byteLength;case Il:return n*e/s.components*s.byteLength;case ff:return n*e*2/s.components*s.byteLength;case Ul:return n*e*2/s.components*s.byteLength;case cf:return n*e*3/s.components*s.byteLength;case nn:return n*e*4/s.components*s.byteLength;case Nl:return n*e*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sa:case Ma:return Math.max(n,16)*Math.max(e,8)/4;case Ta:case wa:return Math.max(n,8)*Math.max(e,8)/2;case Ea:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case La:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Na:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case vr:case Ga:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pf:case Wa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $a:case Xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F_(n){switch(n){case An:case rf:return{byteLength:1,components:1};case ps:case of:case Ts:return{byteLength:2,components:1};case Dl:case Ll:return{byteLength:2,components:4};case ci:case Cl:case Tn:return{byteLength:4,components:1};case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pl);if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Cf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function B_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,d[h]=v)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,W_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,J_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ay=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,my=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,by=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_y=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,My=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ly=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const By=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$y=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Xy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:V_,alphahash_pars_fragment:k_,alphamap_fragment:z_,alphamap_pars_fragment:H_,alphatest_fragment:G_,alphatest_pars_fragment:j_,aomap_fragment:W_,aomap_pars_fragment:$_,batching_pars_vertex:X_,batching_vertex:q_,begin_vertex:Y_,beginnormal_vertex:K_,bsdfs:Z_,iridescence_fragment:J_,bumpmap_pars_fragment:Q_,clipping_planes_fragment:e0,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:s0,color_pars_fragment:r0,color_pars_vertex:o0,color_vertex:a0,common:l0,cube_uv_reflection_fragment:c0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:h0,emissivemap_fragment:f0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:b0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:D0,envmap_vertex:y0,fog_vertex:T0,fog_pars_vertex:S0,fog_fragment:w0,fog_pars_fragment:M0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:P0,lights_pars_begin:C0,lights_toon_fragment:L0,lights_toon_pars_fragment:I0,lights_phong_fragment:U0,lights_phong_pars_fragment:N0,lights_physical_fragment:O0,lights_physical_pars_fragment:F0,lights_fragment_begin:B0,lights_fragment_maps:V0,lights_fragment_end:k0,logdepthbuf_fragment:z0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:j0,map_fragment:W0,map_pars_fragment:$0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:K0,morphinstance_vertex:Z0,morphcolor_vertex:J0,morphnormal_vertex:Q0,morphtarget_pars_vertex:ey,morphtarget_vertex:ty,normal_fragment_begin:ny,normal_fragment_maps:iy,normal_pars_fragment:sy,normal_pars_vertex:ry,normal_vertex:oy,normalmap_pars_fragment:ay,clearcoat_normal_fragment_begin:ly,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:uy,iridescence_pars_fragment:dy,opaque_fragment:hy,packing:fy,premultiplied_alpha_fragment:py,project_vertex:my,dithering_fragment:gy,dithering_pars_fragment:vy,roughnessmap_fragment:xy,roughnessmap_pars_fragment:by,shadowmap_pars_fragment:_y,shadowmap_pars_vertex:yy,shadowmap_vertex:Ty,shadowmask_pars_fragment:Sy,skinbase_vertex:wy,skinning_pars_vertex:My,skinning_vertex:Ey,skinnormal_vertex:Ay,specularmap_fragment:Ry,specularmap_pars_fragment:Py,tonemapping_fragment:Cy,tonemapping_pars_fragment:Dy,transmission_fragment:Ly,transmission_pars_fragment:Iy,uv_pars_fragment:Uy,uv_pars_vertex:Ny,uv_vertex:Oy,worldpos_vertex:Fy,background_vert:By,background_frag:Vy,backgroundCube_vert:ky,backgroundCube_frag:zy,cube_vert:Hy,cube_frag:Gy,depth_vert:jy,depth_frag:Wy,distanceRGBA_vert:$y,distanceRGBA_frag:Xy,equirect_vert:qy,equirect_frag:Yy,linedashed_vert:Ky,linedashed_frag:Zy,meshbasic_vert:Jy,meshbasic_frag:Qy,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:sT,meshnormal_frag:rT,meshphong_vert:oT,meshphong_frag:aT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:dT,points_vert:hT,points_frag:fT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:vT},re={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},cn={basic:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Et([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Et([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Et([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Et([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Et([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Et([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Et([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Et([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Et([re.common,re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Et([re.lights,re.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};cn.physical={uniforms:Et([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const ir={r:0,b:0,g:0},Zn=new Rn,xT=new ct;function bT(n,e,t,i,s,r,o){const a=new Ye(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(_){let T=_.isScene===!0?_.background:null;return T&&T.isTexture&&(T=(_.backgroundBlurriness>0?t:e).get(T)),T}function v(_){let T=!1;const P=g(_);P===null?f(a,l):P&&P.isColor&&(f(P,1),T=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,T){const P=g(T);P&&(P.isCubeTexture||P.mapping===Fr)?(u===void 0&&(u=new wn(new As(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Hi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Zn.copy(T.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Zn)),u.material.toneMapped=We.getTransfer(P.colorSpace)!==Ze,(d!==P||h!==P.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=P,h=P.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new wn(new Br(2,2),new Hn({name:"BackgroundMaterial",uniforms:Hi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=We.getTransfer(P.colorSpace)!==Ze,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||h!==P.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=P,h=P.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,T){_.getRGB(ir,Sf(n)),i.buffers.color.setClear(ir.r,ir.g,ir.b,T,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,T=1){a.set(_),l=T,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:v,addToRenderList:m,dispose:w}}function _T(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(x,E,B,A,N){let H=!1;const V=d(A,B,E);r!==V&&(r=V,c(r.object)),H=p(x,A,B,N),H&&g(x,A,B,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,T(x,E,B,A),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,E,B){const A=B.wireframe===!0;let N=i[x.id];N===void 0&&(N={},i[x.id]=N);let H=N[E.id];H===void 0&&(H={},N[E.id]=H);let V=H[A];return V===void 0&&(V=h(l()),H[A]=V),V}function h(x){const E=[],B=[],A=[];for(let N=0;N<t;N++)E[N]=0,B[N]=0,A[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:B,attributeDivisors:A,object:x,attributes:{},index:null}}function p(x,E,B,A){const N=r.attributes,H=E.attributes;let V=0;const q=B.getAttributes();for(const G in q)if(q[G].location>=0){const oe=N[G];let ye=H[G];if(ye===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ye=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ye=x.instanceColor)),oe===void 0||oe.attribute!==ye||ye&&oe.data!==ye.data)return!0;V++}return r.attributesNum!==V||r.index!==A}function g(x,E,B,A){const N={},H=E.attributes;let V=0;const q=B.getAttributes();for(const G in q)if(q[G].location>=0){let oe=H[G];oe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor));const ye={};ye.attribute=oe,oe&&oe.data&&(ye.data=oe.data),N[G]=ye,V++}r.attributes=N,r.attributesNum=V,r.index=A}function v(){const x=r.newAttributes;for(let E=0,B=x.length;E<B;E++)x[E]=0}function m(x){f(x,0)}function f(x,E){const B=r.newAttributes,A=r.enabledAttributes,N=r.attributeDivisors;B[x]=1,A[x]===0&&(n.enableVertexAttribArray(x),A[x]=1),N[x]!==E&&(n.vertexAttribDivisor(x,E),N[x]=E)}function w(){const x=r.newAttributes,E=r.enabledAttributes;for(let B=0,A=E.length;B<A;B++)E[B]!==x[B]&&(n.disableVertexAttribArray(B),E[B]=0)}function _(x,E,B,A,N,H,V){V===!0?n.vertexAttribIPointer(x,E,B,N,H):n.vertexAttribPointer(x,E,B,A,N,H)}function T(x,E,B,A){v();const N=A.attributes,H=B.getAttributes(),V=E.defaultAttributeValues;for(const q in H){const G=H[q];if(G.location>=0){let ne=N[q];if(ne===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const oe=ne.normalized,ye=ne.itemSize,Oe=e.get(ne);if(Oe===void 0)continue;const Je=Oe.buffer,K=Oe.type,se=Oe.bytesPerElement,be=K===n.INT||K===n.UNSIGNED_INT||ne.gpuType===Cl;if(ne.isInterleavedBufferAttribute){const le=ne.data,Ee=le.stride,$e=ne.offset;if(le.isInstancedInterleavedBuffer){for(let Re=0;Re<G.locationSize;Re++)f(G.location+Re,le.meshPerAttribute);x.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Re=0;Re<G.locationSize;Re++)m(G.location+Re);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let Re=0;Re<G.locationSize;Re++)_(G.location+Re,ye/G.locationSize,K,oe,Ee*se,($e+ye/G.locationSize*Re)*se,be)}else{if(ne.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)f(G.location+le,ne.meshPerAttribute);x.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);n.bindBuffer(n.ARRAY_BUFFER,Je);for(let le=0;le<G.locationSize;le++)_(G.location+le,ye/G.locationSize,K,oe,ye*se,ye/G.locationSize*le*se,be)}}else if(V!==void 0){const oe=V[q];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(G.location,oe);break;case 3:n.vertexAttrib3fv(G.location,oe);break;case 4:n.vertexAttrib4fv(G.location,oe);break;default:n.vertexAttrib1fv(G.location,oe)}}}}w()}function P(){L();for(const x in i){const E=i[x];for(const B in E){const A=E[B];for(const N in A)u(A[N].object),delete A[N];delete E[B]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const B in E){const A=E[B];for(const N in A)u(A[N].object),delete A[N];delete E[B]}delete i[x.id]}function C(x){for(const E in i){const B=i[E];if(B[x.id]===void 0)continue;const A=B[x.id];for(const N in A)u(A[N].object),delete A[N];delete B[x.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function yT(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TT(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==An&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Tn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:P,maxSamples:R}}function ST(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ei,a=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,_=w*4;let T=f.clippingState||null;l.value=T,T=u(g,h,_,p);for(let P=0;P!==_;++P)T[P]=t[P];f.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,T=p;_!==v;++_,T+=4)o.copy(d[_]).applyMatrix4(w,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function wT(n){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=Vi:a===ba&&(o.mapping=ki),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===ba)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new M_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ii=4,Hu=[.125,.215,.35,.446,.526,.582],ii=20,Lo=new N_,Gu=new Ye;let Io=null,Uo=0,No=0,Oo=!1;const ti=(1+Math.sqrt(5))/2,Ei=1/ti,ju=[new z(-ti,Ei,0),new z(ti,Ei,0),new z(-Ei,0,ti),new z(Ei,0,ti),new z(0,ti,-Ei),new z(0,ti,Ei),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],MT=new z;class Wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=MT}=r;Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Uo,No),this._renderer.xr.enabled=Oo,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ts,format:nn,colorSpace:zi,depthBuffer:!1},s=$u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$u(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(r)),this._blurMaterial=AT(r,e,t)}return s}_compileMaterial(e){const t=new wn(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,i,s,r){const l=new jt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Gu),d.toneMapping=Vn,d.autoClear=!1;const g=new _f({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),v=new wn(new As,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Gu),m=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const T=this._cubeSize;sr(s,_*T,w>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(v,l),d.render(e,l)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Vi||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;sr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ju[(s-r-1)%ju.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new wn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ii-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const f=[];let w=0;for(let C=0;C<ii;++C){const L=C/v,S=Math.exp(-L*L/2);f.push(S),C===0?w+=S:C<m&&(w+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const T=this._sizeLods[s],P=3*T*(s>_-Ii?s-_+Ii:0),R=4*(this._cubeSize-T);sr(t,P,R,3*T,2*T),l.setRenderTarget(t),l.render(d,Lo)}}function ET(n){const e=[],t=[],i=[];let s=n;const r=n-Ii+1+Hu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ii?l=Hu[o-n+Ii-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),_=new Float32Array(m*g*p),T=new Float32Array(f*g*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,L=R>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(S,v*g*R),_.set(h,m*g*R);const x=[R,R,R,R,R,R];T.set(x,f*g*R)}const P=new an;P.setAttribute("position",new Xt(w,v)),P.setAttribute("uv",new Xt(_,m)),P.setAttribute("faceIndex",new Xt(T,f)),e.push(P),s>Ii&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $u(n,e,t){const i=new ui(n,e,t);return i.texture.mapping=Fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function AT(n,e,t){const i=new Float32Array(ii),s=new z(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Xu(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function qu(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xa||l===ba,u=l===Vi||l===ki;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Wu(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Wu(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function PT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function CT(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let _=0,T=w.length;_<T;_+=3){const P=w[_+0],R=w[_+1],C=w[_+2];h.push(P,R,R,C,C,P)}}else if(g!==void 0){const w=g.array;v=g.version;for(let _=0,T=w.length/3-1;_<T;_+=3){const P=_+0,R=_+1,C=_+2;h.push(P,R,R,C,C,P)}}else return;const m=new(gf(h)?Tf:yf)(h,1);m.version=v;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function DT(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,h*o,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(h,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*v[w];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function LT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function IT(n,e,t){const i=new WeakMap,s=new dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let T=a.attributes.position.count*_,P=1;T>e.maxTextureSize&&(P=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*P*4*d),C=new vf(R,T,P,d);C.type=Tn,C.needsUpdate=!0;const L=_*4;for(let x=0;x<d;x++){const E=m[x],B=f[x],A=w[x],N=T*P*4*x;for(let H=0;H<E.count;H++){const V=H*L;p===!0&&(s.fromBufferAttribute(E,H),R[N+V+0]=s.x,R[N+V+1]=s.y,R[N+V+2]=s.z,R[N+V+3]=0),g===!0&&(s.fromBufferAttribute(B,H),R[N+V+4]=s.x,R[N+V+5]=s.y,R[N+V+6]=s.z,R[N+V+7]=0),v===!0&&(s.fromBufferAttribute(A,H),R[N+V+8]=s.x,R[N+V+9]=s.y,R[N+V+10]=s.z,R[N+V+11]=A.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Qe(T,P)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function UT(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Df=new Ut,Yu=new Pf(1,1),Lf=new vf,If=new l_,Uf=new Mf,Ku=[],Zu=[],Ju=new Float32Array(16),Qu=new Float32Array(9),ed=new Float32Array(4);function qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vr(n,e){let t=Zu[e];t===void 0&&(t=new Int32Array(e),Zu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function FT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function VT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;ed.set(i),n.uniformMatrix2fv(this.addr,!1,ed),vt(t,i)}}function kT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Qu.set(i),n.uniformMatrix3fv(this.addr,!1,Qu),vt(t,i)}}function zT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(gt(t,i))return;Ju.set(i),n.uniformMatrix4fv(this.addr,!1,Ju),vt(t,i)}}function HT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function GT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function jT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function WT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function $T(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function XT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function qT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function YT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function KT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yu.compareFunction=mf,r=Yu):r=Df,t.setTexture2D(e||r,s)}function ZT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||If,s)}function JT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uf,s)}function QT(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lf,s)}function eS(n){switch(n){case 5126:return NT;case 35664:return OT;case 35665:return FT;case 35666:return BT;case 35674:return VT;case 35675:return kT;case 35676:return zT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return jT;case 35669:case 35673:return WT;case 5125:return $T;case 36294:return XT;case 36295:return qT;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}function tS(n,e){n.uniform1fv(this.addr,e)}function nS(n,e){const t=qi(e,this.size,2);n.uniform2fv(this.addr,t)}function iS(n,e){const t=qi(e,this.size,3);n.uniform3fv(this.addr,t)}function sS(n,e){const t=qi(e,this.size,4);n.uniform4fv(this.addr,t)}function rS(n,e){const t=qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oS(n,e){const t=qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aS(n,e){const t=qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lS(n,e){n.uniform1iv(this.addr,e)}function cS(n,e){n.uniform2iv(this.addr,e)}function uS(n,e){n.uniform3iv(this.addr,e)}function dS(n,e){n.uniform4iv(this.addr,e)}function hS(n,e){n.uniform1uiv(this.addr,e)}function fS(n,e){n.uniform2uiv(this.addr,e)}function pS(n,e){n.uniform3uiv(this.addr,e)}function mS(n,e){n.uniform4uiv(this.addr,e)}function gS(n,e,t){const i=this.cache,s=e.length,r=Vr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Df,r[o])}function vS(n,e,t){const i=this.cache,s=e.length,r=Vr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||If,r[o])}function xS(n,e,t){const i=this.cache,s=e.length,r=Vr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Uf,r[o])}function bS(n,e,t){const i=this.cache,s=e.length,r=Vr(t,s);gt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Lf,r[o])}function _S(n){switch(n){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return sS;case 35674:return rS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return uS;case 35669:case 35673:return dS;case 5125:return hS;case 36294:return fS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return bS}}class yS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eS(t.type)}}class TS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_S(t.type)}}class SS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function td(n,e){n.seq.push(e),n.map[e.id]=e}function wS(n,e,t){const i=n.name,s=i.length;for(Fo.lastIndex=0;;){const r=Fo.exec(i),o=Fo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){td(t,c===void 0?new yS(a,n,e):new TS(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new SS(a),td(t,d)),t=d}}}class br{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);wS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function nd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const MS=37297;let ES=0;function AS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const id=new Ie;function RS(n){We._getMatrix(id,We.workingColorSpace,n);const e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(n)){case Rr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function sd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+AS(n.getShaderSource(e),o)}else return s}function PS(n,e){const t=RS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function CS(n,e){let t;switch(e){case Ib:t="Linear";break;case Ub:t="Reinhard";break;case Nb:t="Cineon";break;case Ob:t="ACESFilmic";break;case Bb:t="AgX";break;case Vb:t="Neutral";break;case Fb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rr=new z;function DS(){We.getLuminanceCoefficients(rr);const n=rr.x.toFixed(4),e=rr.y.toFixed(4),t=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function IS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function US(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ss(n){return n!==""}function rd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(n){return n.replace(NS,FS)}const OS=new Map;function FS(n,e){let t=Ne[e];if(t===void 0){const i=OS.get(e);if(i!==void 0)t=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}const BS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(n){return n.replace(BS,VS)}function VS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function zS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vi:case ki:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function GS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nf:e="ENVMAP_BLENDING_MULTIPLY";break;case Db:e="ENVMAP_BLENDING_MIX";break;case Lb:e="ENVMAP_BLENDING_ADD";break}return e}function jS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function WS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kS(t),c=zS(t),u=HS(t),d=GS(t),h=jS(t),p=LS(t),g=IS(r),v=s.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(m=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Vn?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,PS("linearToOutputTexel",t.outputColorSpace),DS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=Ka(o),o=rd(o,t),o=od(o,t),a=Ka(a),a=rd(a,t),a=od(a,t),o=ad(o),a=ad(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=w+m+o,T=w+f+a,P=nd(s,s.VERTEX_SHADER,_),R=nd(s,s.FRAGMENT_SHADER,T);s.attachShader(v,P),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(E){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),A=s.getShaderInfoLog(P).trim(),N=s.getShaderInfoLog(R).trim();let H=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,R);else{const q=sd(s,P,"vertex"),G=sd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+B+`
`+q+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(A===""||N==="")&&(V=!1);V&&(E.diagnostics={runnable:H,programLog:B,vertexShader:{log:A,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(P),s.deleteShader(R),L=new br(s,v),S=US(s,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,MS)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ES++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let $S=0;class XS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qS(e),t.set(e,i)),i}}class qS{constructor(e){this.id=$S++,this.code=e,this.usedTimes=0}}function YS(n,e,t,i,s,r,o){const a=new xf,l=new XS,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,E,B,A){const N=B.fog,H=A.geometry,V=S.isMeshStandardMaterial?B.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),G=q&&q.mapping===Fr?q.image.height:null,ne=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ye=oe!==void 0?oe.length:0;let Oe=0;H.morphAttributes.position!==void 0&&(Oe=1),H.morphAttributes.normal!==void 0&&(Oe=2),H.morphAttributes.color!==void 0&&(Oe=3);let Je,K,se,be;if(ne){const Ke=cn[ne];Je=Ke.vertexShader,K=Ke.fragmentShader}else Je=S.vertexShader,K=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const le=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),$e=A.isInstancedMesh===!0,Re=A.isBatchedMesh===!0,ut=!!S.map,st=!!S.matcap,Be=!!q,D=!!S.aoMap,Vt=!!S.lightMap,ze=!!S.bumpMap,Ve=!!S.normalMap,Se=!!S.displacementMap,nt=!!S.emissiveMap,Te=!!S.metalnessMap,M=!!S.roughnessMap,b=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,Q=S.iridescence>0,Y=S.sheen>0,_e=S.transmission>0,ce=b&&!!S.anisotropyMap,pe=k&&!!S.clearcoatMap,He=k&&!!S.clearcoatNormalMap,ie=k&&!!S.clearcoatRoughnessMap,ge=Q&&!!S.iridescenceMap,Ae=Q&&!!S.iridescenceThicknessMap,Ce=Y&&!!S.sheenColorMap,ve=Y&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Ue=!!S.specularColorMap,et=!!S.specularIntensityMap,U=_e&&!!S.transmissionMap,ue=_e&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,he=S.alphaTest>0,de=!!S.alphaHash,Le=!!S.extensions;let ot=Vn;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ot=n.toneMapping);const yt={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:K,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Re,batchingColor:Re&&A._colorsTexture!==null,instancing:$e,instancingColor:$e&&A.instanceColor!==null,instancingMorph:$e&&A.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:zi,alphaToCoverage:!!S.alphaToCoverage,map:ut,matcap:st,envMap:Be,envMapMode:Be&&q.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Vt,bumpMap:ze,normalMap:Ve,displacementMap:h&&Se,emissiveMap:nt,normalMapObjectSpace:Ve&&S.normalMapType===jb,normalMapTangentSpace:Ve&&S.normalMapType===Gb,metalnessMap:Te,roughnessMap:M,anisotropy:b,anisotropyMap:ce,clearcoat:k,clearcoatMap:pe,clearcoatNormalMap:He,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:Q,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:Y,sheenColorMap:Ce,sheenRoughnessMap:ve,specularMap:ke,specularColorMap:Ue,specularIntensityMap:et,transmission:_e,transmissionMap:U,thicknessMap:ue,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ni&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:de,combine:S.combine,mapUv:ut&&v(S.map.channel),aoMapUv:D&&v(S.aoMap.channel),lightMapUv:Vt&&v(S.lightMap.channel),bumpMapUv:ze&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:Se&&v(S.displacementMap.channel),emissiveMapUv:nt&&v(S.emissiveMap.channel),metalnessMapUv:Te&&v(S.metalnessMap.channel),roughnessMapUv:M&&v(S.roughnessMap.channel),anisotropyMapUv:ce&&v(S.anisotropyMap.channel),clearcoatMapUv:pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(S.sheenRoughnessMap.channel),specularMapUv:ke&&v(S.specularMap.channel),specularColorMapUv:Ue&&v(S.specularColorMap.channel),specularIntensityMapUv:et&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:J&&v(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ve||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!H.attributes.uv&&(ut||J),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ee,skinning:A.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Oe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&E.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===Ze,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===Ze,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Le&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&S.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const E in S.defines)x.push(E),x.push(S.defines[E]);return S.isRawShaderMaterial===!1&&(w(x,S),_(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function _(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function T(S){const x=g[S.type];let E;if(x){const B=cn[x];E=y_.clone(B.uniforms)}else E=S.uniforms;return E}function P(S,x){let E;for(let B=0,A=u.length;B<A;B++){const N=u[B];if(N.cacheKey===x){E=N,++E.usedTimes;break}}return E===void 0&&(E=new WS(n,x,S,r),u.push(E)),E}function R(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:L}}function KS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ZS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ud(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,p,g,v,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||ZS),i.length>1&&i.sort(h||cd),s.length>1&&s.sort(h||cd)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function JS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ud,n.set(i,[o])):s>=r.length?(o=new ud,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ye};break;case"SpotLight":t={position:new z,direction:new z,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function ew(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tw=0;function nw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iw(n){const e=new QS,t=ew(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new ct,o=new ct;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,w=0,_=0,T=0,P=0,R=0,C=0;c.sort(nw);for(let S=0,x=c.length;S<x;S++){const E=c[S],B=E.color,A=E.intensity,N=E.distance,H=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=B.r*A,d+=B.g*A,h+=B.b*A;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],A);C++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const q=E.shadow,G=t.get(E);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=E.shadow.matrix,w++}i.directional[p]=V,p++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(B).multiplyScalar(A),V.distance=N,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[v]=V;const q=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,q.updateMatrices(E),E.castShadow&&R++),i.spotLightMatrix[v]=q.matrix,E.castShadow){const G=t.get(E);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=H,T++}v++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(B).multiplyScalar(A),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=V,m++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const q=E.shadow,G=t.get(E);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=E.shadow.matrix,_++}i.point[g]=V,g++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(A),V.groundColor.copy(E.groundColor).multiplyScalar(A),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==w||L.numPointShadows!==_||L.numSpotShadows!==T||L.numSpotMaps!==P||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=T+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=w,L.numPointShadows=_,L.numSpotShadows=T,L.numSpotMaps=P,L.numLightProbes=C,i.version=tw++)}function l(c,u){let d=0,h=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const _=c[f];if(_.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(_.isSpotLight){const T=i.spot[p];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function dd(n){const e=new iw(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sw(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new dd(n),e.set(s,[a])):r>=o.length?(a=new dd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aw(n,e,t){let i=new Ef;const s=new Qe,r=new Qe,o=new dt,a=new I_({depthPacking:Hb}),l=new U_,c={},u=t.maxTextureSize,d={[zn]:It,[It]:zn,[yn]:yn},h=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:rw,fragmentShader:ow}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let f=this.type;this.render=function(R,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Bn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const A=f!==_n&&this.type===_n,N=f===_n&&this.type!==_n;for(let H=0,V=R.length;H<V;H++){const q=R[H],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ne=G.getFrameExtents();if(s.multiply(ne),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y)),G.map===null||A===!0||N===!0){const ye=this.type!==_n?{minFilter:on,magFilter:on}:{};G.map!==null&&G.map.dispose(),G.map=new ui(s.x,s.y,ye),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const oe=G.getViewportCount();for(let ye=0;ye<oe;ye++){const Oe=G.getViewport(ye);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),B.viewport(o),G.updateMatrices(q,ye),i=G.getFrustum(),T(C,L,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===_n&&w(G,L),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,x,E)};function w(R,C){const L=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ui(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,h,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,p,v,null)}function _(R,C,L,S){let x=null;const E=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(E!==void 0)x=E;else if(x=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=x.uuid,A=C.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let H=N[A];H===void 0&&(H=x.clone(),N[A]=H,C.addEventListener("dispose",P)),x=H}if(x.visible=C.visible,x.wireframe=C.wireframe,S===_n?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=n.properties.get(x);B.light=L}return x}function T(R,C,L,S,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===_n)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const A=e.update(R),N=R.material;if(Array.isArray(N)){const H=A.groups;for(let V=0,q=H.length;V<q;V++){const G=H[V],ne=N[G.materialIndex];if(ne&&ne.visible){const oe=_(R,ne,S,x);R.onBeforeShadow(n,R,C,L,A,oe,G),n.renderBufferDirect(L,null,A,oe,R,G),R.onAfterShadow(n,R,C,L,A,oe,G)}}}else if(N.visible){const H=_(R,N,S,x);R.onBeforeShadow(n,R,C,L,A,H,null),n.renderBufferDirect(L,null,A,H,R,null),R.onAfterShadow(n,R,C,L,A,H,null)}}const B=R.children;for(let A=0,N=B.length;A<N;A++)T(B[A],C,L,S,x)}function P(R){R.target.removeEventListener("dispose",P);for(const L in c){const S=c[L],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const lw={[da]:ha,[fa]:ga,[pa]:va,[Bi]:ma,[ha]:da,[ga]:fa,[va]:pa,[ma]:Bi};function cw(n,e){function t(){let U=!1;const ue=new dt;let X=null;const J=new dt(0,0,0,0);return{setMask:function(he){X!==he&&!U&&(n.colorMask(he,he,he,he),X=he)},setLocked:function(he){U=he},setClear:function(he,de,Le,ot,yt){yt===!0&&(he*=ot,de*=ot,Le*=ot),ue.set(he,de,Le,ot),J.equals(ue)===!1&&(n.clearColor(he,de,Le,ot),J.copy(ue))},reset:function(){U=!1,X=null,J.set(-1,0,0,0)}}}function i(){let U=!1,ue=!1,X=null,J=null,he=null;return{setReversed:function(de){if(ue!==de){const Le=e.get("EXT_clip_control");de?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=de;const ot=he;he=null,this.setClear(ot)}},getReversed:function(){return ue},setTest:function(de){de?le(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(de){X!==de&&!U&&(n.depthMask(de),X=de)},setFunc:function(de){if(ue&&(de=lw[de]),J!==de){switch(de){case da:n.depthFunc(n.NEVER);break;case ha:n.depthFunc(n.ALWAYS);break;case fa:n.depthFunc(n.LESS);break;case Bi:n.depthFunc(n.LEQUAL);break;case pa:n.depthFunc(n.EQUAL);break;case ma:n.depthFunc(n.GEQUAL);break;case ga:n.depthFunc(n.GREATER);break;case va:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=de}},setLocked:function(de){U=de},setClear:function(de){he!==de&&(ue&&(de=1-de),n.clearDepth(de),he=de)},reset:function(){U=!1,X=null,J=null,he=null,ue=!1}}}function s(){let U=!1,ue=null,X=null,J=null,he=null,de=null,Le=null,ot=null,yt=null;return{setTest:function(Ke){U||(Ke?le(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!U&&(n.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,qt,pn){(X!==Ke||J!==qt||he!==pn)&&(n.stencilFunc(Ke,qt,pn),X=Ke,J=qt,he=pn)},setOp:function(Ke,qt,pn){(de!==Ke||Le!==qt||ot!==pn)&&(n.stencilOp(Ke,qt,pn),de=Ke,Le=qt,ot=pn)},setLocked:function(Ke){U=Ke},setClear:function(Ke){yt!==Ke&&(n.clearStencil(Ke),yt=Ke)},reset:function(){U=!1,ue=null,X=null,J=null,he=null,de=null,Le=null,ot=null,yt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,_=null,T=null,P=null,R=null,C=new Ye(0,0,0),L=0,S=!1,x=null,E=null,B=null,A=null,N=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let ne=null,oe={};const ye=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Je=new dt().fromArray(ye),K=new dt().fromArray(Oe);function se(U,ue,X,J){const he=new Uint8Array(4),de=n.createTexture();n.bindTexture(U,de),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<X;Le++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ue,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(ue+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return de}const be={};be[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(n.DEPTH_TEST),o.setFunc(Bi),ze(!1),Ve(hu),le(n.CULL_FACE),D(Bn);function le(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Ee(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function $e(U,ue){return d[U]!==ue?(n.bindFramebuffer(U,ue),d[U]=ue,U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ue),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(U,ue){let X=p,J=!1;if(U){X=h.get(ue),X===void 0&&(X=[],h.set(ue,X));const he=U.textures;if(X.length!==he.length||X[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Le=he.length;de<Le;de++)X[de]=n.COLOR_ATTACHMENT0+de;X.length=he.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function ut(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const st={[ni]:n.FUNC_ADD,[pb]:n.FUNC_SUBTRACT,[mb]:n.FUNC_REVERSE_SUBTRACT};st[gb]=n.MIN,st[vb]=n.MAX;const Be={[xb]:n.ZERO,[bb]:n.ONE,[_b]:n.SRC_COLOR,[ca]:n.SRC_ALPHA,[Eb]:n.SRC_ALPHA_SATURATE,[wb]:n.DST_COLOR,[Tb]:n.DST_ALPHA,[yb]:n.ONE_MINUS_SRC_COLOR,[ua]:n.ONE_MINUS_SRC_ALPHA,[Mb]:n.ONE_MINUS_DST_COLOR,[Sb]:n.ONE_MINUS_DST_ALPHA,[Ab]:n.CONSTANT_COLOR,[Rb]:n.ONE_MINUS_CONSTANT_COLOR,[Pb]:n.CONSTANT_ALPHA,[Cb]:n.ONE_MINUS_CONSTANT_ALPHA};function D(U,ue,X,J,he,de,Le,ot,yt,Ke){if(U===Bn){v===!0&&(Ee(n.BLEND),v=!1);return}if(v===!1&&(le(n.BLEND),v=!0),U!==fb){if(U!==m||Ke!==S){if((f!==ni||T!==ni)&&(n.blendEquation(n.FUNC_ADD),f=ni,T=ni),Ke)switch(U){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case la:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case la:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,_=null,P=null,R=null,C.set(0,0,0),L=0,m=U,S=Ke}return}he=he||ue,de=de||X,Le=Le||J,(ue!==f||he!==T)&&(n.blendEquationSeparate(st[ue],st[he]),f=ue,T=he),(X!==w||J!==_||de!==P||Le!==R)&&(n.blendFuncSeparate(Be[X],Be[J],Be[de],Be[Le]),w=X,_=J,P=de,R=Le),(ot.equals(C)===!1||yt!==L)&&(n.blendColor(ot.r,ot.g,ot.b,yt),C.copy(ot),L=yt),m=U,S=!1}function Vt(U,ue){U.side===yn?Ee(n.CULL_FACE):le(n.CULL_FACE);let X=U.side===It;ue&&(X=!X),ze(X),U.blending===Ni&&U.transparent===!1?D(Bn):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),nt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){x!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),x=U)}function Ve(U){U!==ub?(le(n.CULL_FACE),U!==E&&(U===hu?n.cullFace(n.BACK):U===db?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),E=U}function Se(U){U!==B&&(V&&n.lineWidth(U),B=U)}function nt(U,ue,X){U?(le(n.POLYGON_OFFSET_FILL),(A!==ue||N!==X)&&(n.polygonOffset(ue,X),A=ue,N=X)):Ee(n.POLYGON_OFFSET_FILL)}function Te(U){U?le(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function M(U){U===void 0&&(U=n.TEXTURE0+H-1),ne!==U&&(n.activeTexture(U),ne=U)}function b(U,ue,X){X===void 0&&(ne===null?X=n.TEXTURE0+H-1:X=ne);let J=oe[X];J===void 0&&(J={type:void 0,texture:void 0},oe[X]=J),(J.type!==U||J.texture!==ue)&&(ne!==X&&(n.activeTexture(X),ne=X),n.bindTexture(U,ue||be[U]),J.type=U,J.texture=ue)}function k(){const U=oe[ne];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(U){Je.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Je.copy(U))}function ve(U){K.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function ke(U,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let J=X.get(U);J===void 0&&(J=n.getUniformBlockIndex(ue,U.name),X.set(U,J))}function Ue(U,ue){const J=c.get(ue).get(U);l.get(ue)!==J&&(n.uniformBlockBinding(ue,J,U.__bindingPointIndex),l.set(ue,J))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ne=null,oe={},d={},h=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,_=null,T=null,P=null,R=null,C=new Ye(0,0,0),L=0,S=!1,x=null,E=null,B=null,A=null,N=null,Je.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Ee,bindFramebuffer:$e,drawBuffers:Re,useProgram:ut,setBlending:D,setMaterial:Vt,setFlipSided:ze,setCullFace:Ve,setLineWidth:Se,setPolygonOffset:nt,setScissorTest:Te,activeTexture:M,bindTexture:b,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:ge,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Ue,texStorage2D:He,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Ce,viewport:ve,reset:et}}function uw(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,b){return p?new OffscreenCanvas(M,b):Cr("canvas")}function v(M,b,k){let Z=1;const Q=Te(M);if((Q.width>k||Q.height>k)&&(Z=k/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Y=Math.floor(Z*Q.width),_e=Math.floor(Z*Q.height);d===void 0&&(d=g(Y,_e));const ce=b?g(Y,_e):d;return ce.width=Y,ce.height=_e,ce.getContext("2d").drawImage(M,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+_e+")."),ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){n.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(M,b,k,Z,Q=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=b;if(b===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),b===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),b===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),b===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),b===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),b===n.RGBA){const _e=Q?Rr:We.getTransfer(Z);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=_e===Ze?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(M,b){let k;return M?b===null||b===ci||b===ms?k=n.DEPTH24_STENCIL8:b===Tn?k=n.DEPTH32F_STENCIL8:b===ps&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ci||b===ms?k=n.DEPTH_COMPONENT24:b===Tn?k=n.DEPTH_COMPONENT32F:b===ps&&(k=n.DEPTH_COMPONENT16),k}function P(M,b){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==on&&M.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?b.mipmaps.length:1}function R(M){const b=M.target;b.removeEventListener("dispose",R),L(b),b.isVideoTexture&&u.delete(b)}function C(M){const b=M.target;b.removeEventListener("dispose",C),x(b)}function L(M){const b=i.get(M);if(b.__webglInit===void 0)return;const k=M.source,Z=h.get(k);if(Z){const Q=Z[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(M),Object.keys(Z).length===0&&h.delete(k)}i.remove(M)}function S(M){const b=i.get(M);n.deleteTexture(b.__webglTexture);const k=M.source,Z=h.get(k);delete Z[b.__cacheKey],o.memory.textures--}function x(M){const b=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let Q=0;Q<b.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)n.deleteFramebuffer(b.__webglFramebuffer[Z]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=M.textures;for(let Z=0,Q=k.length;Z<Q;Z++){const Y=i.get(k[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(M)}let E=0;function B(){E=0}function A(){const M=E;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),E+=1,M}function N(M){const b=[];return b.push(M.wrapS),b.push(M.wrapT),b.push(M.wrapR||0),b.push(M.magFilter),b.push(M.minFilter),b.push(M.anisotropy),b.push(M.internalFormat),b.push(M.format),b.push(M.type),b.push(M.generateMipmaps),b.push(M.premultiplyAlpha),b.push(M.flipY),b.push(M.unpackAlignment),b.push(M.colorSpace),b.join()}function H(M,b){const k=i.get(M);if(M.isVideoTexture&&Se(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,M,b);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function V(M,b){const k=i.get(M);if(M.version>0&&k.__version!==M.version){K(k,M,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function q(M,b){const k=i.get(M);if(M.version>0&&k.__version!==M.version){K(k,M,b);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function G(M,b){const k=i.get(M);if(M.version>0&&k.__version!==M.version){se(k,M,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}const ne={[_a]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[ya]:n.MIRRORED_REPEAT},oe={[on]:n.NEAREST,[kb]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[oo]:n.LINEAR_MIPMAP_NEAREST,[ai]:n.LINEAR_MIPMAP_LINEAR},ye={[Wb]:n.NEVER,[Zb]:n.ALWAYS,[$b]:n.LESS,[mf]:n.LEQUAL,[Xb]:n.EQUAL,[Kb]:n.GEQUAL,[qb]:n.GREATER,[Yb]:n.NOTEQUAL};function Oe(M,b){if(b.type===Tn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===un||b.magFilter===oo||b.magFilter===Us||b.magFilter===ai||b.minFilter===un||b.minFilter===oo||b.minFilter===Us||b.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ne[b.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ne[b.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ne[b.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,oe[b.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,oe[b.minFilter]),b.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==Us&&b.minFilter!==ai||b.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Je(M,b){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,b.addEventListener("dispose",R));const Z=b.source;let Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));const Y=N(b);if(Y!==M.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[Y].usedTimes++;const _e=Q[M.__cacheKey];_e!==void 0&&(Q[M.__cacheKey].usedTimes--,_e.usedTimes===0&&S(b)),M.__cacheKey=Y,M.__webglTexture=Q[Y].texture}return k}function K(M,b,k){let Z=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=Je(M,b),Y=b.source;t.bindTexture(Z,M.__webglTexture,n.TEXTURE0+k);const _e=i.get(Y);if(Y.version!==_e.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const ce=We.getPrimaries(We.workingColorSpace),pe=b.colorSpace===On?null:We.getPrimaries(b.colorSpace),He=b.colorSpace===On||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ie=v(b.image,!1,s.maxTextureSize);ie=nt(b,ie);const ge=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type);let Ce=_(b.internalFormat,ge,Ae,b.colorSpace,b.isVideoTexture);Oe(Z,b);let ve;const ke=b.mipmaps,Ue=b.isVideoTexture!==!0,et=_e.__version===void 0||Q===!0,U=Y.dataReady,ue=P(b,ie);if(b.isDepthTexture)Ce=T(b.format===vs,b.type),et&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,ge,Ae,null));else if(b.isDataTexture)if(ke.length>0){Ue&&et&&t.texStorage2D(n.TEXTURE_2D,ue,Ce,ke[0].width,ke[0].height);for(let X=0,J=ke.length;X<J;X++)ve=ke[X],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,ge,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,X,Ce,ve.width,ve.height,0,ge,Ae,ve.data);b.generateMipmaps=!1}else Ue?(et&&t.texStorage2D(n.TEXTURE_2D,ue,Ce,ie.width,ie.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Ae,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,ge,Ae,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ue&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ce,ke[0].width,ke[0].height,ie.depth);for(let X=0,J=ke.length;X<J;X++)if(ve=ke[X],b.format!==nn)if(ge!==null)if(Ue){if(U)if(b.layerUpdates.size>0){const he=zu(ve.width,ve.height,b.format,b.type);for(const de of b.layerUpdates){const Le=ve.data.subarray(de*he/ve.data.BYTES_PER_ELEMENT,(de+1)*he/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,de,ve.width,ve.height,1,ge,Le)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Ce,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ie.depth,ge,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Ce,ve.width,ve.height,ie.depth,0,ge,Ae,ve.data)}else{Ue&&et&&t.texStorage2D(n.TEXTURE_2D,ue,Ce,ke[0].width,ke[0].height);for(let X=0,J=ke.length;X<J;X++)ve=ke[X],b.format!==nn?ge!==null?Ue?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,ge,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,X,Ce,ve.width,ve.height,0,ge,Ae,ve.data)}else if(b.isDataArrayTexture)if(Ue){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,Ce,ie.width,ie.height,ie.depth),U)if(b.layerUpdates.size>0){const X=zu(ie.width,ie.height,b.format,b.type);for(const J of b.layerUpdates){const he=ie.data.subarray(J*X/ie.data.BYTES_PER_ELEMENT,(J+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ge,Ae,he)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(b.isData3DTexture)Ue?(et&&t.texStorage3D(n.TEXTURE_3D,ue,Ce,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(b.isFramebufferTexture){if(et)if(Ue)t.texStorage2D(n.TEXTURE_2D,ue,Ce,ie.width,ie.height);else{let X=ie.width,J=ie.height;for(let he=0;he<ue;he++)t.texImage2D(n.TEXTURE_2D,he,Ce,X,J,0,ge,Ae,null),X>>=1,J>>=1}}else if(ke.length>0){if(Ue&&et){const X=Te(ke[0]);t.texStorage2D(n.TEXTURE_2D,ue,Ce,X.width,X.height)}for(let X=0,J=ke.length;X<J;X++)ve=ke[X],Ue?U&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge,Ae,ve):t.texImage2D(n.TEXTURE_2D,X,Ce,ge,Ae,ve);b.generateMipmaps=!1}else if(Ue){if(et){const X=Te(ie);t.texStorage2D(n.TEXTURE_2D,ue,Ce,X.width,X.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ae,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ge,Ae,ie);m(b)&&f(Z),_e.__version=Y.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function se(M,b,k){if(b.image.length!==6)return;const Z=Je(M,b),Q=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+k);const Y=i.get(Q);if(Q.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);const _e=We.getPrimaries(We.workingColorSpace),ce=b.colorSpace===On?null:We.getPrimaries(b.colorSpace),pe=b.colorSpace===On||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const He=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!He&&!ie?ge[J]=v(b.image[J],!0,s.maxCubemapSize):ge[J]=ie?b.image[J].image:b.image[J],ge[J]=nt(b,ge[J]);const Ae=ge[0],Ce=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),ke=_(b.internalFormat,Ce,ve,b.colorSpace),Ue=b.isVideoTexture!==!0,et=Y.__version===void 0||Z===!0,U=Q.dataReady;let ue=P(b,Ae);Oe(n.TEXTURE_CUBE_MAP,b);let X;if(He){Ue&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ke,Ae.width,Ae.height);for(let J=0;J<6;J++){X=ge[J].mipmaps;for(let he=0;he<X.length;he++){const de=X[he];b.format!==nn?Ce!==null?Ue?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,de.width,de.height,Ce,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,ke,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,de.width,de.height,Ce,ve,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,ke,de.width,de.height,0,Ce,ve,de.data)}}}else{if(X=b.mipmaps,Ue&&et){X.length>0&&ue++;const J=Te(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ke,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Ce,ve,ge[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,ge[J].width,ge[J].height,0,Ce,ve,ge[J].data);for(let he=0;he<X.length;he++){const Le=X[he].image[J].image;Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Le.width,Le.height,Ce,ve,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,ke,Le.width,Le.height,0,Ce,ve,Le.data)}}else{Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,ve,ge[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ke,Ce,ve,ge[J]);for(let he=0;he<X.length;he++){const de=X[he];Ue?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ce,ve,de.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,ke,Ce,ve,de.image[J])}}}m(b)&&f(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,b.onUpdate&&b.onUpdate(b)}M.__version=b.version}function be(M,b,k,Z,Q,Y){const _e=r.convert(k.format,k.colorSpace),ce=r.convert(k.type),pe=_(k.internalFormat,_e,ce,k.colorSpace),He=i.get(b),ie=i.get(k);if(ie.__renderTarget=b,!He.__hasExternalTextures){const ge=Math.max(1,b.width>>Y),Ae=Math.max(1,b.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,pe,ge,Ae,b.depth,0,_e,ce,null):t.texImage2D(Q,Y,pe,ge,Ae,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),Ve(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,ie.__webglTexture,0,ze(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,ie.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(M,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,M),b.depthBuffer){const Z=b.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,Y=T(b.stencilBuffer,Q),_e=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=ze(b);Ve(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Y,b.width,b.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Y,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Y,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,M)}else{const Z=b.textures;for(let Q=0;Q<Z.length;Q++){const Y=Z[Q],_e=r.convert(Y.format,Y.colorSpace),ce=r.convert(Y.type),pe=_(Y.internalFormat,_e,ce,Y.colorSpace),He=ze(b);k&&Ve(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,pe,b.width,b.height):Ve(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,pe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,pe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(M,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const Q=Z.__webglTexture,Y=ze(b);if(b.depthTexture.format===gs)Ve(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(b.depthTexture.format===vs)Ve(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function $e(M){const b=i.get(M),k=M.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==M.depthTexture){const Z=M.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Z}if(M.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ee(b.__webglFramebuffer,M)}else if(k){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=n.createRenderbuffer(),le(b.__webglDepthbuffer[Z],M,!1);else{const Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),le(b.__webglDepthbuffer,M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(M,b,k){const Z=i.get(M);b!==void 0&&be(Z.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&$e(M)}function ut(M){const b=M.texture,k=i.get(M),Z=i.get(b);M.addEventListener("dispose",C);const Q=M.textures,Y=M.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=b.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let pe=0;pe<b.mipmaps.length;pe++)k.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else k.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<b.mipmaps.length;ce++)k.__webglFramebuffer[ce]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(_e)for(let ce=0,pe=Q.length;ce<pe;ce++){const He=i.get(Q[ce]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&Ve(M)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const pe=Q[ce];k.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const He=r.convert(pe.format,pe.colorSpace),ie=r.convert(pe.type),ge=_(pe.internalFormat,He,ie,pe.colorSpace,M.isXRRenderTarget===!0),Ae=ze(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ge,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),le(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,b);for(let ce=0;ce<6;ce++)if(b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)be(k.__webglFramebuffer[ce][pe],M,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else be(k.__webglFramebuffer[ce],M,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(b)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ce=0,pe=Q.length;ce<pe;ce++){const He=Q[ce],ie=i.get(He);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Oe(n.TEXTURE_2D,He),be(k.__webglFramebuffer,M,He,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(He)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),Oe(ce,b),b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)be(k.__webglFramebuffer[pe],M,b,n.COLOR_ATTACHMENT0,ce,pe);else be(k.__webglFramebuffer,M,b,n.COLOR_ATTACHMENT0,ce,0);m(b)&&f(ce),t.unbindTexture()}M.depthBuffer&&$e(M)}function st(M){const b=M.textures;for(let k=0,Z=b.length;k<Z;k++){const Q=b[k];if(m(Q)){const Y=w(M),_e=i.get(Q).__webglTexture;t.bindTexture(Y,_e),f(Y),t.unbindTexture()}}}const Be=[],D=[];function Vt(M){if(M.samples>0){if(Ve(M)===!1){const b=M.textures,k=M.width,Z=M.height;let Q=n.COLOR_BUFFER_BIT;const Y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(M),ce=b.length>1;if(ce)for(let pe=0;pe<b.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);const He=i.get(b[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,n.NEAREST),l===!0&&(Be.length=0,D.length=0,Be.push(n.COLOR_ATTACHMENT0+pe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Be.push(Y),D.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<b.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);const He=i.get(b[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const b=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ze(M){return Math.min(s.maxSamples,M.samples)}function Ve(M){const b=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Se(M){const b=o.render.frame;u.get(M)!==b&&(u.set(M,b),M.update())}function nt(M,b){const k=M.colorSpace,Z=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||k!==zi&&k!==On&&(We.getTransfer(k)===Ze?(Z!==nn||Q!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Te(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=A,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Re,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ve}function dw(n,e){function t(i,s=On){let r;const o=We.getTransfer(s);if(i===An)return n.UNSIGNED_BYTE;if(i===Dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===af)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rf)return n.BYTE;if(i===of)return n.SHORT;if(i===ps)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Ts)return n.HALF_FLOAT;if(i===lf)return n.ALPHA;if(i===cf)return n.RGB;if(i===nn)return n.RGBA;if(i===uf)return n.LUMINANCE;if(i===df)return n.LUMINANCE_ALPHA;if(i===gs)return n.DEPTH_COMPONENT;if(i===vs)return n.DEPTH_STENCIL;if(i===hf)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===ff)return n.RG;if(i===Ul)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(o===Ze)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ta||i===Sa||i===wa||i===Ma)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===Aa||i===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===Aa)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ra)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pa||i===Ca||i===Da||i===La||i===Ia||i===Ua||i===Na||i===Oa||i===Fa||i===Ba||i===Va||i===ka||i===za||i===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pa)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ca)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Da)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===La)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ia)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ua)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Na)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oa)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fa)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ba)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Va)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ka)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===za)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ha)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vr||i===Ga||i===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===vr)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pf||i===Wa||i===$a||i===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ut,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hn({vertexShader:hw,fragmentShader:fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends $i{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const v=new pw,m=t.getContextAttributes();let f=null,w=null;const _=[],T=[],P=new Qe;let R=null;const C=new jt;C.viewport=new dt;const L=new jt;L.viewport=new dt;const S=[C,L],x=new O_;let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=_[K];return se===void 0&&(se=new Po,_[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=_[K];return se===void 0&&(se=new Po,_[K]=se),se.getGripSpace()},this.getHand=function(K){let se=_[K];return se===void 0&&(se=new Po,_[K]=se),se.getHandSpace()};function A(K){const se=T.indexOf(K.inputSource);if(se===-1)return;const be=_[se];be!==void 0&&(be.update(K.inputSource,K.frame,c||o),be.dispatchEvent({type:K.type,data:K.inputSource}))}function N(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",H);for(let K=0;K<_.length;K++){const se=T[K];se!==null&&(T[K]=null,_[K].disconnect(se))}E=null,B=null,v.reset(),e.setRenderTarget(f),p=null,h=null,d=null,s=null,w=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",N),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,le=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?vs:gs,le=m.stencil?ms:ci);const $e={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new ui(h.textureWidth,h.textureHeight,{format:nn,type:An,depthTexture:new Pf(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ui(p.framebufferWidth,p.framebufferHeight,{format:nn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(K){for(let se=0;se<K.removed.length;se++){const be=K.removed[se],le=T.indexOf(be);le>=0&&(T[le]=null,_[le].disconnect(be))}for(let se=0;se<K.added.length;se++){const be=K.added[se];let le=T.indexOf(be);if(le===-1){for(let $e=0;$e<_.length;$e++)if($e>=T.length){T.push(be),le=$e;break}else if(T[$e]===null){T[$e]=be,le=$e;break}if(le===-1)break}const Ee=_[le];Ee&&Ee.connect(be)}}const V=new z,q=new z;function G(K,se,be){V.setFromMatrixPosition(se.matrixWorld),q.setFromMatrixPosition(be.matrixWorld);const le=V.distanceTo(q),Ee=se.projectionMatrix.elements,$e=be.projectionMatrix.elements,Re=Ee[14]/(Ee[10]-1),ut=Ee[14]/(Ee[10]+1),st=(Ee[9]+1)/Ee[5],Be=(Ee[9]-1)/Ee[5],D=(Ee[8]-1)/Ee[0],Vt=($e[8]+1)/$e[0],ze=Re*D,Ve=Re*Vt,Se=le/(-D+Vt),nt=Se*-D;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Se),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Te=Re+Se,M=ut+Se,b=ze-nt,k=Ve+(le-nt),Z=st*ut/M*Te,Q=Be*ut/M*Te;K.projectionMatrix.makePerspective(b,k,Z,Q,Te,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let se=K.near,be=K.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(be=v.depthFar)),x.near=L.near=C.near=se,x.far=L.far=C.far=be,(E!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,B=x.far),C.layers.mask=K.layers.mask|2,L.layers.mask=K.layers.mask|4,x.layers.mask=C.layers.mask|L.layers.mask;const le=K.parent,Ee=x.cameras;ne(x,le);for(let $e=0;$e<Ee.length;$e++)ne(Ee[$e],le);Ee.length===2?G(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),oe(K,x,le)};function oe(K,se,be){be===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(be.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=qa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ye=null;function Oe(K,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let le=!1;be.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Re=0;Re<be.length;Re++){const ut=be[Re];let st=null;if(p!==null)st=p.getViewport(ut);else{const D=d.getViewSubImage(h,ut);st=D.viewport,Re===0&&(e.setRenderTargetTextures(w,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(w))}let Be=S[Re];Be===void 0&&(Be=new jt,Be.layers.enable(Re),Be.viewport=new dt,S[Re]=Be),Be.matrix.fromArray(ut.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(ut.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(st.x,st.y,st.width,st.height),Re===0&&(x.matrix.copy(Be.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(Be)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Re=d.getDepthInformation(be[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,s.renderState)}}for(let be=0;be<_.length;be++){const le=T[be],Ee=_[be];le!==null&&Ee!==void 0&&Ee.update(le,se,c||o)}ye&&ye(K,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Je=new Cf;Je.setAnimationLoop(Oe),this.setAnimationLoop=function(K){ye=K},this.dispose=function(){}}}const Jn=new Rn,gw=new ct;function vw(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Sf(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,_,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===It&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===It&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),_=w.envMap,T=w.envMapRotation;_&&(m.envMap.value=_,Jn.copy(T),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4(gw.makeRotationFromEuler(Jn)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===It&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xw(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){const T=_.program;i.uniformBlockBinding(w,T)}function c(w,_){let T=s[w.id];T===void 0&&(g(w),T=u(w),s[w.id]=T,w.addEventListener("dispose",m));const P=_.program;i.updateUBOMapping(w,P);const R=e.render.frame;r[w.id]!==R&&(h(w),r[w.id]=R)}function u(w){const _=d();w.__bindingPointIndex=_;const T=n.createBuffer(),P=w.__size,R=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,T),T}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const _=s[w.id],T=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,C=T.length;R<C;R++){const L=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,x=L.length;S<x;S++){const E=L[S];if(p(E,R,S,P)===!0){const B=E.__offset,A=Array.isArray(E.value)?E.value:[E.value];let N=0;for(let H=0;H<A.length;H++){const V=A[H],q=v(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,B+N,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,N),N+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,_,T,P){const R=w.value,C=_+"_"+T;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{const L=P[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return P[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(w){const _=w.uniforms;let T=0;const P=16;for(let C=0,L=_.length;C<L;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,E=S.length;x<E;x++){const B=S[x],A=Array.isArray(B.value)?B.value:[B.value];for(let N=0,H=A.length;N<H;N++){const V=A[N],q=v(V),G=T%P,ne=G%q.boundary,oe=G+ne;T+=ne,oe!==0&&P-oe<q.storage&&(T+=P-oe),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=q.storage}}}const R=T%P;return R>0&&(T+=P-R),w.__size=T,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function m(w){const _=w.target;_.removeEventListener("dispose",m);const T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class bw{constructor(e={}){const{canvas:t=Qb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const w=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let P=!1;this._outputColorSpace=Gt;let R=0,C=0,L=null,S=-1,x=null;const E=new dt,B=new dt;let A=null;const N=new Ye(0);let H=0,V=t.width,q=t.height,G=1,ne=null,oe=null;const ye=new dt(0,0,V,q),Oe=new dt(0,0,V,q);let Je=!1;const K=new Ef;let se=!1,be=!1;const le=new ct,Ee=new ct,$e=new z,Re=new dt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function Be(){return L===null?G:1}let D=i;function Vt(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){const O="webgl2";if(D=Vt(O,y),D===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ze,Ve,Se,nt,Te,M,b,k,Z,Q,Y,_e,ce,pe,He,ie,ge,Ae,Ce,ve,ke,Ue,et,U;function ue(){ze=new PT(D),ze.init(),Ue=new dw(D,ze),Ve=new TT(D,ze,e,Ue),Se=new cw(D,ze),Ve.reverseDepthBuffer&&h&&Se.buffers.depth.setReversed(!0),nt=new LT(D),Te=new KS,M=new uw(D,ze,Se,Te,Ve,Ue,nt),b=new wT(T),k=new RT(T),Z=new B_(D),et=new _T(D,Z),Q=new CT(D,Z,nt,et),Y=new UT(D,Q,Z,nt),Ce=new IT(D,Ve,M),ie=new ST(Te),_e=new YS(T,b,k,ze,Ve,et,ie),ce=new vw(T,Te),pe=new JS,He=new sw(ze),Ae=new bT(T,b,k,Se,Y,p,l),ge=new aw(T,Y,Ve),U=new xw(D,nt,Ve,Se),ve=new yT(D,ze,nt),ke=new DT(D,ze,nt),nt.programs=_e.programs,T.capabilities=Ve,T.extensions=ze,T.properties=Te,T.renderLists=pe,T.shadowMap=ge,T.state=Se,T.info=nt}ue();const X=new mw(T,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(V,q,!1))},this.getSize=function(y){return y.set(V,q)},this.setSize=function(y,O,j=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=y,q=O,t.width=Math.floor(y*G),t.height=Math.floor(O*G),j===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(V*G,q*G).floor()},this.setDrawingBufferSize=function(y,O,j){V=y,q=O,G=j,t.width=Math.floor(y*j),t.height=Math.floor(O*j),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(E)},this.getViewport=function(y){return y.copy(ye)},this.setViewport=function(y,O,j,W){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,O,j,W),Se.viewport(E.copy(ye).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Oe)},this.setScissor=function(y,O,j,W){y.isVector4?Oe.set(y.x,y.y,y.z,y.w):Oe.set(y,O,j,W),Se.scissor(B.copy(Oe).multiplyScalar(G).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(y){Se.setScissorTest(Je=y)},this.setOpaqueSort=function(y){ne=y},this.setTransparentSort=function(y){oe=y},this.getClearColor=function(y){return y.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,j=!0){let W=0;if(y){let F=!1;if(L!==null){const te=L.texture.format;F=te===Nl||te===Ul||te===Il}if(F){const te=L.texture.type,ae=te===An||te===ci||te===ps||te===ms||te===Dl||te===Ll,fe=Ae.getClearColor(),xe=Ae.getClearAlpha(),De=fe.r,Pe=fe.g,we=fe.b;ae?(g[0]=De,g[1]=Pe,g[2]=we,g[3]=xe,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=De,v[1]=Pe,v[2]=we,v[3]=xe,D.clearBufferiv(D.COLOR,0,v))}else W|=D.COLOR_BUFFER_BIT}O&&(W|=D.DEPTH_BUFFER_BIT),j&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ae.dispose(),pe.dispose(),He.dispose(),Te.dispose(),b.dispose(),k.dispose(),Y.dispose(),et.dispose(),U.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",Vl),X.removeEventListener("sessionend",kl),jn.stop()};function J(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const y=nt.autoReset,O=ge.enabled,j=ge.autoUpdate,W=ge.needsUpdate,F=ge.type;ue(),nt.autoReset=y,ge.enabled=O,ge.autoUpdate=j,ge.needsUpdate=W,ge.type=F}function de(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Le(y){const O=y.target;O.removeEventListener("dispose",Le),ot(O)}function ot(y){yt(y),Te.remove(y)}function yt(y){const O=Te.get(y).programs;O!==void 0&&(O.forEach(function(j){_e.releaseProgram(j)}),y.isShaderMaterial&&_e.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,j,W,F,te){O===null&&(O=ut);const ae=F.isMesh&&F.matrixWorld.determinant()<0,fe=Nf(y,O,j,W,F);Se.setMaterial(W,ae);let xe=j.index,De=1;if(W.wireframe===!0){if(xe=Q.getWireframeAttribute(j),xe===void 0)return;De=2}const Pe=j.drawRange,we=j.attributes.position;let Ge=Pe.start*De,Xe=(Pe.start+Pe.count)*De;te!==null&&(Ge=Math.max(Ge,te.start*De),Xe=Math.min(Xe,(te.start+te.count)*De)),xe!==null?(Ge=Math.max(Ge,0),Xe=Math.min(Xe,xe.count)):we!=null&&(Ge=Math.max(Ge,0),Xe=Math.min(Xe,we.count));const ht=Xe-Ge;if(ht<0||ht===1/0)return;et.setup(F,W,fe,j,xe);let at,je=ve;if(xe!==null&&(at=Z.get(xe),je=ke,je.setIndex(at)),F.isMesh)W.wireframe===!0?(Se.setLineWidth(W.wireframeLinewidth*Be()),je.setMode(D.LINES)):je.setMode(D.TRIANGLES);else if(F.isLine){let Me=W.linewidth;Me===void 0&&(Me=1),Se.setLineWidth(Me*Be()),F.isLineSegments?je.setMode(D.LINES):F.isLineLoop?je.setMode(D.LINE_LOOP):je.setMode(D.LINE_STRIP)}else F.isPoints?je.setMode(D.POINTS):F.isSprite&&je.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Me=F._multiDrawStarts,bt=F._multiDrawCounts,qe=F._multiDrawCount,Yt=xe?Z.get(xe).bytesPerElement:1,di=Te.get(W).currentProgram.getUniforms();for(let Nt=0;Nt<qe;Nt++)di.setValue(D,"_gl_DrawID",Nt),je.render(Me[Nt]/Yt,bt[Nt])}else if(F.isInstancedMesh)je.renderInstances(Ge,ht,F.count);else if(j.isInstancedBufferGeometry){const Me=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bt=Math.min(j.instanceCount,Me);je.renderInstances(Ge,ht,bt)}else je.render(Ge,ht)};function Ke(y,O,j){y.transparent===!0&&y.side===yn&&y.forceSinglePass===!1?(y.side=It,y.needsUpdate=!0,Ps(y,O,j),y.side=zn,y.needsUpdate=!0,Ps(y,O,j),y.side=yn):Ps(y,O,j)}this.compile=function(y,O,j=null){j===null&&(j=y),f=He.get(j),f.init(O),_.push(f),j.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),y!==j&&y.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const W=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let ae=0;ae<te.length;ae++){const fe=te[ae];Ke(fe,j,F),W.add(fe)}else Ke(te,j,F),W.add(te)}),f=_.pop(),W},this.compileAsync=function(y,O,j=null){const W=this.compile(y,O,j);return new Promise(F=>{function te(){if(W.forEach(function(ae){Te.get(ae).currentProgram.isReady()&&W.delete(ae)}),W.size===0){F(y);return}setTimeout(te,10)}ze.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let qt=null;function pn(y){qt&&qt(y)}function Vl(){jn.stop()}function kl(){jn.start()}const jn=new Cf;jn.setAnimationLoop(pn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(y){qt=y,X.setAnimationLoop(y),y===null?jn.stop():jn.start()},X.addEventListener("sessionstart",Vl),X.addEventListener("sessionend",kl),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),y.isScene===!0&&y.onBeforeRender(T,y,O,L),f=He.get(y,_.length),f.init(O),_.push(f),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(Ee),be=this.localClippingEnabled,se=ie.init(this.clippingPlanes,be),m=pe.get(y,w.length),m.init(),w.push(m),X.enabled===!0&&X.isPresenting===!0){const te=T.xr.getDepthSensingMesh();te!==null&&kr(te,O,-1/0,T.sortObjects)}kr(y,O,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(ne,oe),st=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,st&&Ae.addToRenderList(m,y),this.info.render.frame++,se===!0&&ie.beginShadows();const j=f.state.shadowsArray;ge.render(j,y,O),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,F=m.transmissive;if(f.setupLights(),O.isArrayCamera){const te=O.cameras;if(F.length>0)for(let ae=0,fe=te.length;ae<fe;ae++){const xe=te[ae];Hl(W,F,y,xe)}st&&Ae.render(y);for(let ae=0,fe=te.length;ae<fe;ae++){const xe=te[ae];zl(m,y,xe,xe.viewport)}}else F.length>0&&Hl(W,F,y,O),st&&Ae.render(y),zl(m,y,O);L!==null&&C===0&&(M.updateMultisampleRenderTarget(L),M.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(T,y,O),et.resetDefaultState(),S=-1,x=null,_.pop(),_.length>0?(f=_[_.length-1],se===!0&&ie.setGlobalState(T.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function kr(y,O,j,W){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||K.intersectsSprite(y)){W&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ee);const ae=Y.update(y),fe=y.material;fe.visible&&m.push(y,ae,fe,j,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||K.intersectsObject(y))){const ae=Y.update(y),fe=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Re.copy(ae.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(Ee)),Array.isArray(fe)){const xe=ae.groups;for(let De=0,Pe=xe.length;De<Pe;De++){const we=xe[De],Ge=fe[we.materialIndex];Ge&&Ge.visible&&m.push(y,ae,Ge,j,Re.z,we)}}else fe.visible&&m.push(y,ae,fe,j,Re.z,null)}}const te=y.children;for(let ae=0,fe=te.length;ae<fe;ae++)kr(te[ae],O,j,W)}function zl(y,O,j,W){const F=y.opaque,te=y.transmissive,ae=y.transparent;f.setupLightsView(j),se===!0&&ie.setGlobalState(T.clippingPlanes,j),W&&Se.viewport(E.copy(W)),F.length>0&&Rs(F,O,j),te.length>0&&Rs(te,O,j),ae.length>0&&Rs(ae,O,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Hl(y,O,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ui(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Ts:An,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));const te=f.state.transmissionRenderTarget[W.id],ae=W.viewport||E;te.setSize(ae.z*T.transmissionResolutionScale,ae.w*T.transmissionResolutionScale);const fe=T.getRenderTarget();T.setRenderTarget(te),T.getClearColor(N),H=T.getClearAlpha(),H<1&&T.setClearColor(16777215,.5),T.clear(),st&&Ae.render(j);const xe=T.toneMapping;T.toneMapping=Vn;const De=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),se===!0&&ie.setGlobalState(T.clippingPlanes,W),Rs(y,j,W),M.updateMultisampleRenderTarget(te),M.updateRenderTargetMipmap(te),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let we=0,Ge=O.length;we<Ge;we++){const Xe=O[we],ht=Xe.object,at=Xe.geometry,je=Xe.material,Me=Xe.group;if(je.side===yn&&ht.layers.test(W.layers)){const bt=je.side;je.side=It,je.needsUpdate=!0,Gl(ht,j,W,at,je,Me),je.side=bt,je.needsUpdate=!0,Pe=!0}}Pe===!0&&(M.updateMultisampleRenderTarget(te),M.updateRenderTargetMipmap(te))}T.setRenderTarget(fe),T.setClearColor(N,H),De!==void 0&&(W.viewport=De),T.toneMapping=xe}function Rs(y,O,j){const W=O.isScene===!0?O.overrideMaterial:null;for(let F=0,te=y.length;F<te;F++){const ae=y[F],fe=ae.object,xe=ae.geometry,De=ae.group;let Pe=ae.material;Pe.allowOverride===!0&&W!==null&&(Pe=W),fe.layers.test(j.layers)&&Gl(fe,O,j,xe,Pe,De)}}function Gl(y,O,j,W,F,te){y.onBeforeRender(T,O,j,W,F,te),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(T,O,j,W,y,te),F.transparent===!0&&F.side===yn&&F.forceSinglePass===!1?(F.side=It,F.needsUpdate=!0,T.renderBufferDirect(j,O,W,F,y,te),F.side=zn,F.needsUpdate=!0,T.renderBufferDirect(j,O,W,F,y,te),F.side=yn):T.renderBufferDirect(j,O,W,F,y,te),y.onAfterRender(T,O,j,W,F,te)}function Ps(y,O,j){O.isScene!==!0&&(O=ut);const W=Te.get(y),F=f.state.lights,te=f.state.shadowsArray,ae=F.state.version,fe=_e.getParameters(y,F.state,te,O,j),xe=_e.getProgramCacheKey(fe);let De=W.programs;W.environment=y.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(y.isMeshStandardMaterial?k:b).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",Le),De=new Map,W.programs=De);let Pe=De.get(xe);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===ae)return Wl(y,fe),Pe}else fe.uniforms=_e.getUniforms(y),y.onBeforeCompile(fe,T),Pe=_e.acquireProgram(fe,xe),De.set(xe,Pe),W.uniforms=fe.uniforms;const we=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=ie.uniform),Wl(y,fe),W.needsLights=Ff(y),W.lightsStateVersion=ae,W.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function jl(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=br.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Wl(y,O){const j=Te.get(y);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Nf(y,O,j,W,F){O.isScene!==!0&&(O=ut),M.resetTextureUnits();const te=O.fog,ae=W.isMeshStandardMaterial?O.environment:null,fe=L===null?T.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:zi,xe=(W.isMeshStandardMaterial?k:b).get(W.envMap||ae),De=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Pe=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!j.morphAttributes.position,Ge=!!j.morphAttributes.normal,Xe=!!j.morphAttributes.color;let ht=Vn;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ht=T.toneMapping);const at=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,je=at!==void 0?at.length:0,Me=Te.get(W),bt=f.state.lights;if(se===!0&&(be===!0||y!==x)){const Mt=y===x&&W.id===S;ie.setState(W,y,Mt)}let qe=!1;W.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==bt.state.version||Me.outputColorSpace!==fe||F.isBatchedMesh&&Me.batching===!1||!F.isBatchedMesh&&Me.batching===!0||F.isBatchedMesh&&Me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Me.instancing===!1||!F.isInstancedMesh&&Me.instancing===!0||F.isSkinnedMesh&&Me.skinning===!1||!F.isSkinnedMesh&&Me.skinning===!0||F.isInstancedMesh&&Me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Me.instancingMorph===!1&&F.morphTexture!==null||Me.envMap!==xe||W.fog===!0&&Me.fog!==te||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ie.numPlanes||Me.numIntersection!==ie.numIntersection)||Me.vertexAlphas!==De||Me.vertexTangents!==Pe||Me.morphTargets!==we||Me.morphNormals!==Ge||Me.morphColors!==Xe||Me.toneMapping!==ht||Me.morphTargetsCount!==je)&&(qe=!0):(qe=!0,Me.__version=W.version);let Yt=Me.currentProgram;qe===!0&&(Yt=Ps(W,O,F));let di=!1,Nt=!1,Yi=!1;const it=Yt.getUniforms(),kt=Me.uniforms;if(Se.useProgram(Yt.program)&&(di=!0,Nt=!0,Yi=!0),W.id!==S&&(S=W.id,Nt=!0),di||x!==y){Se.buffers.depth.getReversed()?(le.copy(y.projectionMatrix),t_(le),n_(le),it.setValue(D,"projectionMatrix",le)):it.setValue(D,"projectionMatrix",y.projectionMatrix),it.setValue(D,"viewMatrix",y.matrixWorldInverse);const Dt=it.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,$e.setFromMatrixPosition(y.matrixWorld)),Ve.logarithmicDepthBuffer&&it.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,Nt=!0,Yi=!0)}if(F.isSkinnedMesh){it.setOptional(D,F,"bindMatrix"),it.setOptional(D,F,"bindMatrixInverse");const Mt=F.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),it.setValue(D,"boneTexture",Mt.boneTexture,M))}F.isBatchedMesh&&(it.setOptional(D,F,"batchingTexture"),it.setValue(D,"batchingTexture",F._matricesTexture,M),it.setOptional(D,F,"batchingIdTexture"),it.setValue(D,"batchingIdTexture",F._indirectTexture,M),it.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&it.setValue(D,"batchingColorTexture",F._colorsTexture,M));const zt=j.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&Ce.update(F,j,Yt),(Nt||Me.receiveShadow!==F.receiveShadow)&&(Me.receiveShadow=F.receiveShadow,it.setValue(D,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(kt.envMap.value=xe,kt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(kt.envMapIntensity.value=O.environmentIntensity),Nt&&(it.setValue(D,"toneMappingExposure",T.toneMappingExposure),Me.needsLights&&Of(kt,Yi),te&&W.fog===!0&&ce.refreshFogUniforms(kt,te),ce.refreshMaterialUniforms(kt,W,G,q,f.state.transmissionRenderTarget[y.id]),br.upload(D,jl(Me),kt,M)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(br.upload(D,jl(Me),kt,M),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(D,"center",F.center),it.setValue(D,"modelViewMatrix",F.modelViewMatrix),it.setValue(D,"normalMatrix",F.normalMatrix),it.setValue(D,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Mt=W.uniformsGroups;for(let Dt=0,zr=Mt.length;Dt<zr;Dt++){const Wn=Mt[Dt];U.update(Wn,Yt),U.bind(Wn,Yt)}}return Yt}function Of(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Ff(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,O,j){const W=Te.get(y);W.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Te.get(y.texture).__webglTexture=O,Te.get(y.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const j=Te.get(y);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0};const Bf=D.createFramebuffer();this.setRenderTarget=function(y,O=0,j=0){L=y,R=O,C=j;let W=!0,F=null,te=!1,ae=!1;if(y){const xe=Te.get(y);if(xe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(xe.__webglFramebuffer===void 0)M.setupRenderTarget(y);else if(xe.__hasExternalTextures)M.rebindTextures(y,Te.get(y.texture).__webglTexture,Te.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const we=y.depthTexture;if(xe.__boundDepthTexture!==we){if(we!==null&&Te.has(we)&&(y.width!==we.image.width||y.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(y)}}const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ae=!0);const Pe=Te.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?F=Pe[O][j]:F=Pe[O],te=!0):y.samples>0&&M.useMultisampledRTT(y)===!1?F=Te.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[j]:F=Pe,E.copy(y.viewport),B.copy(y.scissor),A=y.scissorTest}else E.copy(ye).multiplyScalar(G).floor(),B.copy(Oe).multiplyScalar(G).floor(),A=Je;if(j!==0&&(F=Bf),Se.bindFramebuffer(D.FRAMEBUFFER,F)&&W&&Se.drawBuffers(y,F),Se.viewport(E),Se.scissor(B),Se.setScissorTest(A),te){const xe=Te.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,j)}else if(ae){const xe=Te.get(y.texture),De=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,j,De)}else if(y!==null&&j!==0){const xe=Te.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(y,O,j,W,F,te,ae){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){Se.bindFramebuffer(D.FRAMEBUFFER,fe);try{const xe=y.texture,De=xe.format,Pe=xe.type;if(!Ve.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-W&&j>=0&&j<=y.height-F&&D.readPixels(O,j,W,F,Ue.convert(De),Ue.convert(Pe),te)}finally{const xe=L!==null?Te.get(L).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(y,O,j,W,F,te,ae){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe)if(O>=0&&O<=y.width-W&&j>=0&&j<=y.height-F){Se.bindFramebuffer(D.FRAMEBUFFER,fe);const xe=y.texture,De=xe.format,Pe=xe.type;if(!Ve.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),D.readPixels(O,j,W,F,Ue.convert(De),Ue.convert(Pe),0);const Ge=L!==null?Te.get(L).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Ge);const Xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await e_(D,Xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te),D.deleteBuffer(we),D.deleteSync(Xe),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,j=0){const W=Math.pow(2,-j),F=Math.floor(y.image.width*W),te=Math.floor(y.image.height*W),ae=O!==null?O.x:0,fe=O!==null?O.y:0;M.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,ae,fe,F,te),Se.unbindTexture()};const Vf=D.createFramebuffer(),kf=D.createFramebuffer();this.copyTextureToTexture=function(y,O,j=null,W=null,F=0,te=null){te===null&&(F!==0?(xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let ae,fe,xe,De,Pe,we,Ge,Xe,ht;const at=y.isCompressedTexture?y.mipmaps[te]:y.image;if(j!==null)ae=j.max.x-j.min.x,fe=j.max.y-j.min.y,xe=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Pe=j.min.y,we=j.isBox3?j.min.z:0;else{const zt=Math.pow(2,-F);ae=Math.floor(at.width*zt),fe=Math.floor(at.height*zt),y.isDataArrayTexture?xe=at.depth:y.isData3DTexture?xe=Math.floor(at.depth*zt):xe=1,De=0,Pe=0,we=0}W!==null?(Ge=W.x,Xe=W.y,ht=W.z):(Ge=0,Xe=0,ht=0);const je=Ue.convert(O.format),Me=Ue.convert(O.type);let bt;O.isData3DTexture?(M.setTexture3D(O,0),bt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(M.setTexture2DArray(O,0),bt=D.TEXTURE_2D_ARRAY):(M.setTexture2D(O,0),bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const qe=D.getParameter(D.UNPACK_ROW_LENGTH),Yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),di=D.getParameter(D.UNPACK_SKIP_PIXELS),Nt=D.getParameter(D.UNPACK_SKIP_ROWS),Yi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we);const it=y.isDataArrayTexture||y.isData3DTexture,kt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const zt=Te.get(y),Mt=Te.get(O),Dt=Te.get(zt.__renderTarget),zr=Te.get(Mt.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Dt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Wn=0;Wn<xe;Wn++)it&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(y).__webglTexture,F,we+Wn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(O).__webglTexture,te,ht+Wn)),D.blitFramebuffer(De,Pe,ae,fe,Ge,Xe,ae,fe,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||Te.has(y)){const zt=Te.get(y),Mt=Te.get(O);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Vf),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,kf);for(let Dt=0;Dt<xe;Dt++)it?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,F,we+Dt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,zt.__webglTexture,F),kt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,te,ht+Dt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,te),F!==0?D.blitFramebuffer(De,Pe,ae,fe,Ge,Xe,ae,fe,D.COLOR_BUFFER_BIT,D.NEAREST):kt?D.copyTexSubImage3D(bt,te,Ge,Xe,ht+Dt,De,Pe,ae,fe):D.copyTexSubImage2D(bt,te,Ge,Xe,De,Pe,ae,fe);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else kt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(bt,te,Ge,Xe,ht,ae,fe,xe,je,Me,at.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,te,Ge,Xe,ht,ae,fe,xe,je,at.data):D.texSubImage3D(bt,te,Ge,Xe,ht,ae,fe,xe,je,Me,at):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Ge,Xe,ae,fe,je,Me,at.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Ge,Xe,at.width,at.height,je,at.data):D.texSubImage2D(D.TEXTURE_2D,te,Ge,Xe,ae,fe,je,Me,at);D.pixelStorei(D.UNPACK_ROW_LENGTH,qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,di),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yi),te===0&&O.generateMipmaps&&D.generateMipmap(bt),Se.unbindTexture()},this.copyTextureToTexture3D=function(y,O,j=null,W=null,F=0){return xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,O,j,W,F)},this.initRenderTarget=function(y){Te.get(y).__webglFramebuffer===void 0&&M.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),Se.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,Se.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function _w(){const n=ee.useRef(null);return ee.useEffect(()=>{if(!n.current)return;let e,t;try{const i=new A_,s=new jt(75,window.innerWidth/window.innerHeight,.1,1e3);e=new bw({alpha:!0,antialias:!0}),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.current.appendChild(e.domElement);const r=1500,o=new an,a=new Float32Array(r*3),l=new Float32Array(r*3);for(let _=0;_<r;_++)a[_*3]=(Math.random()-.5)*20,a[_*3+1]=(Math.random()-.5)*20,a[_*3+2]=(Math.random()-.5)*20,l[_*3]=Math.random()*.2+.1,l[_*3+1]=Math.random()*.6+.4,l[_*3+2]=Math.random()*.3+.1;o.setAttribute("position",new Xt(a,3)),o.setAttribute("color",new Xt(l,3));const c=new Rf({size:.15,vertexColors:!0,transparent:!0,opacity:1,blending:la}),u=new L_(o,c);i.add(u);const d=50,h=[];for(let _=0;_<d;_++)h.push(new z((Math.random()-.5)*10,(Math.random()-.5)*10,(Math.random()-.5)*10));const p=[];for(let _=0;_<d;_++)for(let T=_+1;T<d;T++)h[_].distanceTo(h[T])<4&&p.push(h[_].x,h[_].y,h[_].z,h[T].x,h[T].y,h[T].z);const g=new an;g.setAttribute("position",new hn(p,3));const v=new Af({color:54442,transparent:!0,opacity:.6}),m=new D_(g,v);i.add(m),s.position.z=5;const f=()=>{t=requestAnimationFrame(f),u.rotation.y+=5e-4,u.rotation.x+=2e-4,m.rotation.y-=3e-4,e.render(i,s)};f();const w=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w),t&&cancelAnimationFrame(t),e&&(e.dispose(),n.current&&e.domElement.parentNode===n.current&&n.current.removeChild(e.domElement))}}catch(i){console.warn("ThreeBackground: WebGL not available, skipping 3D background.",i.message)}},[]),I.jsx($,{ref:n,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1,pointerEvents:"none"},renderId:"render-a44b2b04",as:"div"})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function yw(){const n=ee.useRef(null),e=ee.useRef(null),[t,i]=ee.useState(!1);return ee.useEffect(()=>{const s=()=>{i(window.innerWidth<=768)};s(),window.addEventListener("resize",s);let r=0,o=0,a=0,l=0;const c=v=>{r=v.clientX,o=v.clientY,n.current&&(n.current.style.transform=`translate(${r}px, ${o}px)`)},u=()=>{a+=(r-a)*.15,l+=(o-l)*.15,e.current&&(e.current.style.transform=`translate(${a}px, ${l}px)`),requestAnimationFrame(u)};window.addEventListener("mousemove",c);const d=requestAnimationFrame(u),h=()=>{e.current&&(e.current.style.width="60px",e.current.style.height="60px")},p=()=>{e.current&&(e.current.style.width="40px",e.current.style.height="40px")},g=document.querySelectorAll("a, button, .card-hover, input, select, textarea");return g.forEach(v=>{v.addEventListener("mouseenter",h),v.addEventListener("mouseleave",p)}),()=>{window.removeEventListener("resize",s),window.removeEventListener("mousemove",c),cancelAnimationFrame(d),g.forEach(v=>{v.removeEventListener("mouseenter",h),v.removeEventListener("mouseleave",p)})}},[]),t?null:I.jsxs(I.Fragment,{children:[I.jsx($,{ref:n,className:"fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2",style:{boxShadow:"0 0 0 2px #0A1929, 0 0 12px rgba(255, 255, 255, 0.9), 0 0 24px rgba(255, 215, 0, 0.5)"},renderId:"render-2de0af95",as:"div"}),I.jsx($,{ref:e,className:"fixed top-0 left-0 w-10 h-10 border-2 border-[#FFD700] rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-[width,height] duration-200",style:{boxShadow:"0 0 0 1px rgba(10, 25, 41, 0.8), 0 0 16px rgba(255, 215, 0, 0.4)"},renderId:"render-45d38085",as:"div"})]})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Tw({onOpenComingSoon:n}){const[e,t]=ee.useState(!1),[i,s]=ee.useState(!1);ee.useEffect(()=>{const l=()=>{t(window.scrollY>50),i&&s(!1)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[i]);const r=[{name:"Home",id:"home"},{name:"Properties",id:"properties"},{name:"Blockchain",id:"blockchain"},{name:"Academy",id:"academy"},{name:"Contact",id:"contact"}],o=l=>{const c=document.getElementById(l);if(c){const d=document.body.getBoundingClientRect().top,g=c.getBoundingClientRect().top-d-90;window.scrollTo({top:g,behavior:"smooth"})}},a=l=>{s(!1),l.href?window.location.href=l.href:setTimeout(()=>o(l.id),100)};return I.jsxs(I.Fragment,{children:[I.jsx($,{className:`fixed top-0 w-full z-50 px-6 transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${e?"py-2 bg-[#0A1929]/90":"py-4 bg-transparent"}`,renderId:"render-8cbfd770",as:"nav",children:I.jsxs($,{className:"max-w-7xl mx-auto flex justify-between items-center",renderId:"render-87205254",as:"div",children:[I.jsxs($,{className:"flex items-center gap-3",renderId:"render-e3dfb7fb",as:"div",children:[I.jsx($,{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4AA] to-[#FFD700] flex items-center justify-center font-display font-bold text-xl text-black shrink-0",renderId:"render-2ea5a96e",as:"div",children:"XM"}),I.jsx($,{className:"font-display font-semibold tracking-wide hidden sm:block text-white",renderId:"render-9de4fe16",as:"span",children:"REAL ESTATE & PROPERTIES"})]}),I.jsx($,{className:"hidden md:flex gap-8 text-sm font-medium",renderId:"render-c7d20d9b",as:"div",children:r.map(l=>I.jsxs($,{onClick:()=>a(l),className:"relative text-gray-300 hover:text-white transition-colors group",renderId:"render-87e8f5db",as:"button",children:[l.name,I.jsx($,{className:"absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D4AA] transition-all group-hover:w-full",renderId:"render-5a7ce4af",as:"span"})]},l.id))}),I.jsxs($,{className:"flex items-center gap-3",renderId:"render-f845d652",as:"div",children:[I.jsx($,{onClick:n,className:"px-5 py-2 rounded-full bg-[#00D4AA]/20 border border-[#00D4AA]/50 text-[#00D4AA] hover:bg-[#00D4AA] hover:text-black transition-all duration-300 font-medium text-sm",renderId:"render-359efd4c",as:"button",children:"Invest Now"}),I.jsx($,{onClick:()=>s(l=>!l),className:"md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all","aria-label":"Toggle menu",renderId:"render-384ddec3",as:"button",children:i?I.jsx(pd,{size:20}):I.jsx(cp,{size:20})})]})]})}),I.jsx(El,{children:i&&I.jsx(Bt.div,{initial:{opacity:0,y:-12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.18},className:"fixed top-[65px] left-0 right-0 z-40 md:hidden bg-[#0A1929]/97 backdrop-blur-xl border-b border-white/10 px-6 py-4",children:I.jsxs($,{className:"flex flex-col gap-1 max-w-7xl mx-auto",renderId:"render-23bc2e2e",as:"div",children:[r.map(l=>I.jsx($,{onClick:()=>a(l),className:"w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all font-medium text-base",renderId:"render-146ba6ff",as:"button",children:l.name},l.id)),I.jsx($,{className:"h-px bg-white/10 my-2",renderId:"render-7bebbb45",as:"div"}),I.jsx($,{onClick:()=>{s(!1),n()},className:"w-full px-4 py-3 rounded-xl bg-[#00D4AA]/20 border border-[#00D4AA]/40 text-[#00D4AA] font-bold text-base text-left hover:bg-[#00D4AA]/30 transition-all",renderId:"render-c96d43b2",as:"button",children:"Invest Now"})]})})})]})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}function Sw({isOpen:n,onClose:e}){const[t,i]=ee.useState(""),s=fd({mutationFn:async o=>{const a=await fetch("/api/notifications",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})});if(!a.ok)throw new Error("Subscription failed");return a.json()},onSuccess:()=>{alert("Thank you! You'll be the first to know when we launch."),i(""),e()},onError:()=>{alert("Something went wrong. Please try again.")}}),r=()=>{t&&t.includes("@")?s.mutate(t):alert("Please enter a valid email address.")};return I.jsx(El,{children:n&&I.jsxs($,{className:"fixed inset-0 z-[10001] flex items-center justify-center p-4",renderId:"render-0b9f2529",as:"div",children:[I.jsx(Bt.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:e,className:"absolute inset-0 bg-black/70 backdrop-blur-sm"}),I.jsxs(Bt.div,{initial:{scale:.9,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.9,opacity:0,y:20},className:"relative bg-gradient-to-br from-[#0d1f33] to-[#0A1929] border border-[#00D4AA]/20 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl",children:[I.jsx($,{onClick:e,className:"absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors",renderId:"render-4b543176",as:"button",children:I.jsx(pd,{size:20})}),I.jsx($,{className:"w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-emerald-500/20 flex items-center justify-center border border-yellow-500/30",renderId:"render-e160e022",as:"div",children:I.jsx(fp,{className:"w-8 h-8 text-yellow-400"})}),I.jsx($,{className:"font-display text-2xl font-bold mb-2 text-white",renderId:"render-2757f168",as:"h3",children:"Coming Soon!"}),I.jsx($,{className:"text-gray-400 mb-6 text-sm leading-relaxed",renderId:"render-da534650",as:"p",children:"We're building something incredible. Blockchain-powered property investments are launching soon. Be the first to know when we go live."}),I.jsx($,{className:"space-y-3 mb-6",renderId:"render-bcbce794",as:"div",children:[{icon:op,text:"Tokenized Property Ownership",color:"text-yellow-400"},{icon:gp,text:"Wallet Connect & On-Chain Payments",color:"text-emerald-400"},{icon:hp,text:"Secondary Market Token Trading",color:"text-blue-400"}].map((o,a)=>I.jsxs($,{className:"flex items-center gap-3 text-left p-3 rounded-xl bg-white/5 border border-white/10",renderId:"render-10f62918",as:"div",children:[I.jsx(o.icon,{className:`w-5 h-5 ${o.color} flex-shrink-0`}),I.jsx($,{className:"text-sm text-gray-300",renderId:"render-43317050",as:"span",children:o.text}),I.jsx($,{className:"ml-auto",renderId:"render-68557b39",as:"span",children:I.jsx($,{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-[10px] font-bold text-yellow-500 uppercase tracking-wider",renderId:"render-fe9ad435",as:"span",children:"Soon"})})]},a))}),I.jsx($,{className:"text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold",renderId:"render-931bc359",as:"p",children:"Get notified when we launch"}),I.jsxs($,{className:"flex gap-2",renderId:"render-d640d660",as:"div",children:[I.jsx($,{type:"email",placeholder:"your@email.com",className:"flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00D4AA] focus:ring-1 focus:ring-[#00D4AA] transition-all",value:t,onChange:o=>i(o.target.value),renderId:"render-60fd74aa",as:"input"}),I.jsx($,{onClick:r,disabled:s.isPending,className:"px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 transition-all font-semibold text-sm whitespace-nowrap text-white disabled:opacity-50",renderId:"render-685e6096",as:"button",children:s.isPending?"Joining...":"Notify Me"})]})]})]})})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const ww=[{id:1,title:"Semi-Detached Duplex",image:"/properties/duplex.png",tag:"Verified",beds:4,location:"Abuja Central",priceNgn:"₦350M",priceUsd:"$420K",verified:!0},{id:2,title:"Executive Terraces",image:"/properties/terraces.png",tag:"Coming Soon",beds:5,location:"Maitama District",priceNgn:"₦520M",priceUsd:"$620K",verified:!1,soon:!0},{id:3,title:"Blockchain Villa",image:"/properties/villa.png",tag:"Tokenized",beds:6,location:"Asokoro Layout",priceNgn:"₦850M",priceUsd:"$1.02M",verified:!1,tokenized:!0}];function Mw(){const[n,e]=ee.useState(!1),[t,i]=ee.useState(!0),[s,r]=ee.useState(0),[o,a]=ee.useState(!0),[l,c]=ee.useState(0),[u,d]=ee.useState(!0),h=ee.useRef(null);ee.useEffect(()=>{const f=setInterval(()=>{c(w=>w>=100?(clearInterval(f),setTimeout(()=>a(!1),500),100):w+Math.random()*15)},100);return()=>clearInterval(f)},[]),ee.useEffect(()=>{const f=()=>{const w=document.documentElement.scrollHeight-window.innerHeight,_=window.scrollY;r(_/w*100)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const p=fd({mutationFn:async f=>{const w=await fetch("/api/inquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)});if(!w.ok)throw new Error("Submission failed");return w.json()}}),g=async f=>{f.preventDefault();const w=f.target,_={fullName:w[0].value,email:w[1].value,whatsappNumber:w[2].value,investmentInterest:w[3].value,message:w[4].value};try{await p.mutateAsync(_),alert("Inquiry received! Our team will contact you via WhatsApp shortly."),w.reset()}catch{alert("Failed to submit inquiry. Please try again.")}},v=()=>{window.open("https://wa.me/2349038507913?text=Hi%20XM%20Team,%20I%27m%20interested%20in%20your%20blockchain%20properties.","_blank")},m=()=>{h.current&&(h.current.muted=!h.current.muted,d(h.current.muted))};return I.jsxs($,{className:"jsx-1992196375 relative min-h-screen text-white font-sans selection:bg-[#00D4AA] selection:text-black",renderId:"render-82fa40cc",as:"main",children:[I.jsx(El,{children:o&&I.jsxs(Bt.div,{exit:{opacity:0},className:"fixed inset-0 z-[10002] bg-[#0A1929] flex flex-col items-center justify-center",children:[I.jsx($,{className:"jsx-1992196375 font-display text-3xl font-bold bg-gradient-to-r from-[#00D4AA] to-[#FFD700] bg-clip-text text-transparent mb-6",renderId:"render-71253190",as:"h1",children:"XM REAL ESTATE"}),I.jsx($,{className:"jsx-1992196375 w-48 h-1 bg-white/10 rounded-full overflow-hidden",renderId:"render-f8ea5220",as:"div",children:I.jsx(Bt.div,{className:"h-full bg-gradient-to-r from-[#00D4AA] to-[#FFD700]",animate:{width:`${l}%`}})})]})}),I.jsx(_w,{}),I.jsx(yw,{}),I.jsx($,{style:{width:`${s}%`},className:"jsx-1992196375 fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#00D4AA] to-[#FFD700] z-[9999] transition-all duration-100 ease-out",renderId:"render-f1ecf02b",as:"div"}),I.jsx(Tw,{onOpenComingSoon:()=>e(!0)}),I.jsx(Sw,{isOpen:n,onClose:()=>e(!1)}),I.jsxs($,{id:"home",className:"jsx-1992196375 relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 overflow-hidden",renderId:"render-490c765a",as:"section",children:[I.jsx(Bt.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},className:"px-4 py-1.5 rounded-full bg-white/5 border border-white/20 text-[10px] font-bold tracking-widest uppercase backdrop-blur-md mb-8 text-emerald-400",children:"🌍 The First of Many Investments"}),I.jsxs(Bt.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.2},className:"font-display text-[clamp(2.25rem,7.2vw,5.4rem)] leading-[1.1] font-bold max-w-5xl mb-8",children:[I.jsx($,{className:"jsx-1992196375 block whitespace-nowrap",renderId:"render-825e0c42",as:"span",children:"Blockchain Properties"}),I.jsx($,{className:"jsx-1992196375 bg-gradient-to-r from-[#00D4AA] via-[#00FFD0] to-[#FFD700] bg-clip-text text-transparent",renderId:"render-9b890013",as:"span",children:"Reimagining Ownership"})]}),I.jsx(Bt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},className:"text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10",children:"Luxury real estate in Abuja, verified on-chain. Tokenized ownership, instant allocation, and seamless liquidity. Powered by XM Trading Academy."}),I.jsxs(Bt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"flex flex-col sm:flex-row gap-4 justify-center",children:[I.jsx($,{onClick:()=>document.getElementById("properties").scrollIntoView({behavior:"smooth",block:"start"}),className:"jsx-1992196375 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-black font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-emerald-500/30",renderId:"render-31a54461",as:"button",children:"Explore Properties"}),I.jsx($,{onClick:()=>document.getElementById("blockchain").scrollIntoView({behavior:"smooth",block:"start"}),className:"jsx-1992196375 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md font-bold text-lg hover:bg-white/10 transition-all text-white",renderId:"render-ffc4c0dd",as:"button",children:"How Blockchain Works"})]}),I.jsxs(Bt.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.8},className:"mt-16 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-black",children:[I.jsx("video",{ref:h,src:"https://ucarecdn.com/5d5a4c10-d76e-4d43-8335-a3eb6cc0c7eb/",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"jsx-1992196375 w-full h-auto aspect-video object-cover opacity-90"}),I.jsx($,{className:"jsx-1992196375 absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent pointer-events-none",renderId:"render-f0e2d6b5",as:"div"}),I.jsx($,{onClick:m,"aria-label":u?"Unmute video":"Mute video",className:"jsx-1992196375 absolute top-4 right-4 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 hover:border-emerald-500/50 transition-all group pointer-events-auto z-10",renderId:"render-66a1adfa",as:"button",children:u?I.jsx(mp,{className:"w-5 h-5 group-hover:text-emerald-400 transition-colors"}):I.jsx(pp,{className:"w-5 h-5 text-emerald-400"})})]}),I.jsx(Bt.div,{animate:{y:[0,10,0]},transition:{repeat:1/0,duration:2},className:"absolute bottom-10",children:I.jsx(rp,{className:"w-6 h-6 text-gray-500"})})]}),I.jsx($,{id:"properties",className:"jsx-1992196375 relative z-10 py-24 px-6",renderId:"render-6b5c08b9",as:"section",children:I.jsxs($,{className:"jsx-1992196375 max-w-7xl mx-auto",renderId:"render-577cd94c",as:"div",children:[I.jsxs($,{className:"jsx-1992196375 text-center mb-16",renderId:"render-1ab6a9fa",as:"div",children:[I.jsxs($,{className:"jsx-1992196375 font-display text-4xl md:text-5xl font-bold mb-4",renderId:"render-0a2c2338",as:"h2",children:["Featured"," ",I.jsx($,{className:"jsx-1992196375 bg-gradient-to-r from-[#00D4AA] to-[#FFD700] bg-clip-text text-transparent",renderId:"render-b50f009d",as:"span",children:"Luxury Developments"})]}),I.jsx($,{className:"jsx-1992196375 text-gray-400 max-w-xl mx-auto",renderId:"render-7b3de100",as:"p",children:"Premium properties in Abuja with transparent, blockchain-verified ownership."})]}),I.jsx($,{className:"jsx-1992196375 grid md:grid-cols-2 lg:grid-cols-3 gap-8",renderId:"render-3f692ebc",as:"div",children:ww.map((f,w)=>I.jsxs(Bt.div,{whileHover:{y:-8},className:"bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 group hover:border-emerald-500/30 transition-all cursor-pointer",children:[I.jsxs($,{className:"jsx-1992196375 h-48 rounded-2xl mb-6 border border-white/5 group-hover:border-emerald-500/20 transition-colors overflow-hidden relative",renderId:"render-fcec1d8e",as:"div",children:[I.jsx(Bt.img,{src:f.image,alt:f.title,className:"w-full h-full object-cover",whileHover:{scale:1.07},transition:{duration:.5,ease:"easeOut"}}),I.jsx($,{className:"jsx-1992196375 absolute inset-0 bg-gradient-to-t from-[#0A1929]/80 via-transparent to-transparent pointer-events-none",renderId:"render-6532d503",as:"div"}),I.jsx($,{className:"jsx-1992196375 absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none",renderId:"render-1d5e7ebb",as:"div"})]}),I.jsxs($,{className:"jsx-1992196375 flex justify-between items-start mb-2",renderId:"render-36c91813",as:"div",children:[I.jsx($,{className:"jsx-1992196375 font-display text-xl font-bold",renderId:"render-d50482b0",as:"h3",children:f.title}),I.jsx($,{className:`jsx-1992196375 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${f.verified?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/20":"bg-yellow-500/20 text-yellow-400 border border-yellow-500/20"}`,renderId:"render-2e5ec0fc",as:"span",children:f.tag})]}),I.jsxs($,{className:"jsx-1992196375 text-gray-400 text-sm mb-6",renderId:"render-31e4ca44",as:"p",children:[f.beds," Beds • Modern Amenities • ",f.location]}),I.jsxs($,{className:"jsx-1992196375 flex justify-between items-center",renderId:"render-3c699ce7",as:"div",children:[I.jsxs($,{className:"jsx-1992196375",renderId:"render-739ef8ee",as:"div",children:[I.jsx($,{className:"jsx-1992196375 text-xl font-bold text-white",renderId:"render-d6f2fda0",as:"p",children:t?f.priceNgn:f.priceUsd}),I.jsx($,{className:"jsx-1992196375 text-[10px] text-gray-500 font-mono uppercase",renderId:"render-9f6fdabc",as:"p",children:t?"Naira Allocation":"USD Valuation"})]}),I.jsxs($,{onClick:f.soon||f.tokenized?()=>e(!0):v,className:"jsx-1992196375 flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors",renderId:"render-b2738472",as:"button",children:[f.soon||f.tokenized?"Pre-Register":"Inquire"," ",I.jsx(Yl,{size:16})]})]})]},f.id))}),I.jsx($,{className:"jsx-1992196375 text-center mt-12",renderId:"render-edd63778",as:"div",children:I.jsxs($,{className:"jsx-1992196375 inline-flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md",renderId:"render-cd01653a",as:"div",children:[I.jsx($,{className:`jsx-1992196375 text-xs font-bold transition-colors ${t?"text-emerald-400":"text-gray-500"}`,renderId:"render-49bbf8cc",as:"span",children:"NGN"}),I.jsx($,{onClick:()=>i(!t),className:"jsx-1992196375 w-12 h-6 bg-gray-700 rounded-full relative p-1",renderId:"render-4183658f",as:"button",children:I.jsx($,{className:`jsx-1992196375 w-4 h-4 bg-emerald-500 rounded-full transition-all ${t?"translate-x-0":"translate-x-6"}`,renderId:"render-edd7f022",as:"div"})}),I.jsx($,{className:`jsx-1992196375 text-xs font-bold transition-colors ${t?"text-gray-500":"text-emerald-400"}`,renderId:"render-15567b0d",as:"span",children:"USD"})]})})]})}),I.jsx($,{id:"blockchain",className:"jsx-1992196375 relative z-10 py-24 px-6 bg-black/20",renderId:"render-12554248",as:"section",children:I.jsxs($,{className:"jsx-1992196375 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center",renderId:"render-1ef64e68",as:"div",children:[I.jsxs($,{className:"jsx-1992196375",renderId:"render-19af39ef",as:"div",children:[I.jsxs($,{className:"jsx-1992196375 font-display text-4xl md:text-5xl font-bold mb-8",renderId:"render-69d0da58",as:"h2",children:["Why"," ",I.jsx($,{className:"jsx-1992196375 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent",renderId:"render-ce66a91c",as:"span",children:"Blockchain Properties?"})]}),I.jsx($,{className:"jsx-1992196375 text-gray-400 text-lg leading-relaxed mb-10",renderId:"render-8a3fa9d3",as:"p",children:"Traditional real estate is slow, opaque, and fragmented. XM Real Estate integrates blockchain technology to bring transparency, fractional ownership, and instant liquidity to luxury property investments in Nigeria."}),I.jsx($,{className:"jsx-1992196375 space-y-6",renderId:"render-f050f304",as:"div",children:[{title:"Tokenized Ownership",desc:"Own a fraction of premium Abuja properties from ₦500K"},{title:"On-Chain Verification",desc:"Every deed and transaction immutably recorded"},{title:"Instant Liquidity",desc:"Trade property tokens seamlessly on partner platforms"}].map((f,w)=>I.jsxs($,{className:"jsx-1992196375 flex gap-4",renderId:"render-1193fed6",as:"div",children:[I.jsx($,{className:"jsx-1992196375 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1",renderId:"render-6890e8de",as:"div",children:I.jsx(sp,{className:"w-4 h-4 text-emerald-400"})}),I.jsxs($,{className:"jsx-1992196375",renderId:"render-6c6f8f34",as:"div",children:[I.jsx($,{className:"jsx-1992196375 font-bold text-white mb-1",renderId:"render-60f9fea0",as:"h4",children:f.title}),I.jsxs($,{className:"jsx-1992196375 text-gray-400 text-sm",renderId:"render-0d688c2d",as:"p",children:[f.desc," ",I.jsx($,{className:"jsx-1992196375 text-yellow-500/80 text-[10px] font-bold uppercase ml-2 px-2 py-0.5 border border-yellow-500/30 rounded-full",renderId:"render-db0e4cb2",as:"span",children:"Coming Soon"})]})]})]},w))})]}),I.jsxs($,{className:"jsx-1992196375 bg-white/5 border border-white/10 rounded-[32px] p-8 relative overflow-hidden backdrop-blur-xl shadow-2xl",renderId:"render-28879cdb",as:"div",children:[I.jsx($,{className:"jsx-1992196375 absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full",renderId:"render-b2c8723b",as:"div"}),I.jsxs($,{className:"jsx-1992196375 space-y-6 relative z-10",renderId:"render-3a6d3ff3",as:"div",children:[[{label:"Blockchain Network",value:"Polygon (MATIC)"},{label:"Token Standard",value:"ERC-721 / ERC-20"},{label:"Smart Contract",value:"Audited & Verified"}].map((f,w)=>I.jsxs($,{className:"jsx-1992196375 flex justify-between items-center p-5 bg-white/5 border border-white/10 rounded-2xl",renderId:"render-074e73ee",as:"div",children:[I.jsxs($,{className:"jsx-1992196375",renderId:"render-e102d177",as:"div",children:[I.jsx($,{className:"jsx-1992196375 text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1",renderId:"render-bd3ea0c0",as:"p",children:f.label}),I.jsx($,{className:"jsx-1992196375 text-lg font-bold text-white",renderId:"render-060c8b29",as:"p",children:f.value})]}),I.jsx($,{className:"jsx-1992196375 text-[9px] font-bold text-emerald-400 border border-emerald-400/30 px-2 py-1 rounded-full uppercase",renderId:"render-5c8ff155",as:"span",children:"Locked"})]},w)),I.jsxs($,{onClick:()=>e(!0),className:"jsx-1992196375 w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 font-bold text-sm hover:bg-white/10 transition-all flex justify-between px-6",renderId:"render-6034c87c",as:"button",children:[I.jsx($,{className:"jsx-1992196375",renderId:"render-30d83aaf",as:"span",children:"View Smart Contract Explorer"}),I.jsx($,{className:"jsx-1992196375 text-yellow-500",renderId:"render-3f865555",as:"span",children:"Coming Soon"})]})]})]})]})}),I.jsx($,{id:"academy",className:"jsx-1992196375 relative z-10 py-24 px-6",renderId:"render-4ef93e96",as:"section",children:I.jsxs($,{className:"jsx-1992196375 max-w-4xl mx-auto bg-gradient-to-br from-[#122538] to-[#0A1929] border border-yellow-500/20 rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-center relative overflow-hidden",renderId:"render-9366607c",as:"div",children:[I.jsx($,{className:"jsx-1992196375 absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/5 blur-[80px] rounded-full",renderId:"render-de9c52b9",as:"div"}),I.jsxs($,{className:"jsx-1992196375 font-display text-3xl md:text-4xl font-bold mb-4 relative z-10",renderId:"render-1b101cf7",as:"h2",children:["Powered by"," ",I.jsx($,{className:"jsx-1992196375 text-yellow-400",renderId:"render-d4047445",as:"span",children:"XM Trading Academy"})]}),I.jsx($,{className:"jsx-1992196375 text-gray-400 text-lg mb-10 relative z-10",renderId:"render-4e934591",as:"p",children:"Learn Crypto. Build Skills. Trade Smarter. Now applied to Real World Assets."}),I.jsxs($,{href:"https://xmacademy.net",target:"_blank",rel:"noopener noreferrer",className:"jsx-1992196375 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all font-bold relative z-10",renderId:"render-effdcdb3",as:"a",children:["Visit Trading Academy ",I.jsx(Yl,{size:18})]})]})}),I.jsx($,{id:"contact",className:"jsx-1992196375 relative z-10 py-24 px-6 border-t border-white/10",renderId:"render-6233391a",as:"section",children:I.jsxs($,{className:"jsx-1992196375 max-w-7xl mx-auto grid md:grid-cols-2 gap-16",renderId:"render-a76bacd2",as:"div",children:[I.jsxs($,{className:"jsx-1992196375",renderId:"render-ed67d340",as:"div",children:[I.jsx($,{className:"jsx-1992196375 font-display text-4xl font-bold mb-6",renderId:"render-f9057540",as:"h3",children:"Ready to Own the Future?"}),I.jsx($,{className:"jsx-1992196375 text-gray-400 text-lg leading-relaxed mb-10",renderId:"render-496523ef",as:"p",children:"Connect with our Abuja-based investment team. Secure allocations, blockchain verification, and premium property tours."}),I.jsx($,{className:"jsx-1992196375 space-y-8",renderId:"render-f888300f",as:"div",children:[{icon:lp,text:"Abuja, Nigeria (Headquarters)"},{icon:ap,text:"invest@xmrealestate.ng"},{icon:dp,text:"+234 903 850 7913"}].map((f,w)=>I.jsxs($,{className:"jsx-1992196375 flex items-center gap-4",renderId:"render-2d9fbbd8",as:"div",children:[I.jsx($,{className:"jsx-1992196375 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400",renderId:"render-9ad5850f",as:"div",children:I.jsx(f.icon,{size:24})}),I.jsx($,{className:"jsx-1992196375 text-lg text-gray-300 font-medium",renderId:"render-b30b4def",as:"span",children:f.text})]},w))})]}),I.jsxs($,{onSubmit:g,className:"jsx-1992196375 space-y-6 bg-white/5 border border-white/10 p-8 rounded-[32px] backdrop-blur-md",renderId:"render-10f3b70b",as:"form",children:[I.jsxs($,{className:"jsx-1992196375 grid sm:grid-cols-2 gap-6",renderId:"render-0bd64db6",as:"div",children:[I.jsxs($,{className:"jsx-1992196375 space-y-2",renderId:"render-e0036039",as:"div",children:[I.jsx($,{className:"jsx-1992196375 text-xs font-bold text-gray-500 uppercase tracking-widest",renderId:"render-9ef88978",as:"label",children:"Full Name"}),I.jsx($,{required:!0,placeholder:"Your Name",className:"jsx-1992196375 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all",renderId:"render-9b749cb9",as:"input"})]}),I.jsxs($,{className:"jsx-1992196375 space-y-2",renderId:"render-93b27c24",as:"div",children:[I.jsx($,{className:"jsx-1992196375 text-xs font-bold text-gray-500 uppercase tracking-widest",renderId:"render-4090f744",as:"label",children:"Email Address"}),I.jsx($,{required:!0,type:"email",placeholder:"email@example.com",className:"jsx-1992196375 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all",renderId:"render-37521e8b",as:"input"})]})]}),I.jsxs($,{className:"jsx-1992196375 space-y-2",renderId:"render-96550dcf",as:"div",children:[I.jsx($,{className:"jsx-1992196375 text-xs font-bold text-gray-500 uppercase tracking-widest",renderId:"render-84bd5be3",as:"label",children:"WhatsApp Number"}),I.jsx($,{placeholder:"+234 ...",className:"jsx-1992196375 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all",renderId:"render-007a79e1",as:"input"})]}),I.jsxs($,{className:"jsx-1992196375 space-y-2",renderId:"render-c385dc81",as:"div",children:[I.jsx($,{className:"jsx-1992196375 text-xs font-bold text-gray-500 uppercase tracking-widest",renderId:"render-63bbdabc",as:"label",children:"Investment Interest"}),I.jsxs($,{required:!0,defaultValue:"",className:"jsx-1992196375 w-full bg-[#0A1929] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer",renderId:"render-2eb4873e",as:"select",children:[I.jsx($,{value:"",disabled:!0,className:"jsx-1992196375",renderId:"render-49823779",as:"option",children:"Select Interest"}),I.jsx($,{className:"jsx-1992196375",renderId:"render-bf052a60",as:"option",children:"4-Bed Semi-Detached Duplex"}),I.jsx($,{className:"jsx-1992196375",renderId:"render-b90ef530",as:"option",children:"Executive Terraces"}),I.jsx($,{className:"jsx-1992196375",renderId:"render-06678a87",as:"option",children:"Blockchain Villa (Asokoro)"}),I.jsx($,{className:"jsx-1992196375",renderId:"render-ea756b3d",as:"option",children:"Token Allocation (Fractional Ownership)"}),I.jsx($,{className:"jsx-1992196375",renderId:"render-c64549d8",as:"option",children:"Academy Partnership"})]})]}),I.jsxs($,{className:"jsx-1992196375 space-y-2",renderId:"render-bb58929d",as:"div",children:[I.jsx($,{className:"jsx-1992196375 text-xs font-bold text-gray-500 uppercase tracking-widest",renderId:"render-dac8e1f7",as:"label",children:"Message (Optional)"}),I.jsx($,{placeholder:"Your message...",className:"jsx-1992196375 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-emerald-500 outline-none transition-all min-h-[120px] resize-none",renderId:"render-49a8f254",as:"textarea"})]}),I.jsx($,{type:"submit",disabled:p.isPending,className:"jsx-1992196375 w-full py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-lg hover:shadow-xl hover:shadow-emerald-600/20 transition-all disabled:opacity-50",renderId:"render-933833a6",as:"button",children:p.isPending?"Submitting...":"Submit Inquiry"})]})]})}),I.jsxs($,{className:"jsx-1992196375 relative z-10 py-12 px-6 text-center border-t border-white/10 bg-black/20",renderId:"render-4e693bc1",as:"footer",children:[I.jsx($,{className:"jsx-1992196375 text-gray-500 font-medium",renderId:"render-45b86c4b",as:"p",children:"© 2026 XM Real Estate & Properties. All rights reserved."}),I.jsx($,{className:"jsx-1992196375 mt-2 text-xs text-gray-600 uppercase tracking-widest font-bold",renderId:"render-31976525",as:"p",children:"Verified on Polygon • Built for Nigeria's Future"})]}),I.jsx($,{className:"jsx-1992196375 fixed bottom-8 right-8 z-[9997]",renderId:"render-08b64356",as:"div",children:I.jsxs($,{onClick:v,className:"jsx-1992196375 flex items-center gap-3 px-6 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-600/40 transition-all hover:scale-110 active:scale-95 group",renderId:"render-95793f75",as:"button",children:[I.jsx(up,{size:24,className:"group-hover:rotate-12 transition-transform"}),I.jsx($,{className:"jsx-1992196375 font-bold text-sm tracking-wide",renderId:"render-f1690e77",as:"span",children:"Chat with Team"})]})}),I.jsx(tp,{id:"1992196375",children:["@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');",":root{--font-sans:'Inter',system-ui,-apple-system,sans-serif;--font-display:'Space Grotesk',sans-serif;}","html{background:#0A1929;}","body{font-family:var(--font-sans);cursor:none;background:transparent;}",".font-display{font-family:var(--font-display);}","@media (max-width:768px){html,body{cursor:auto;}}"]})]})}if(typeof window<"u"){const n={};globalThis.process??={};const e=globalThis.process.env??{};globalThis.process.env=new Proxy(Object.assign({},n,e),{get(t,i){return i in t?t[i]:void 0},has(){return!0}})}const Dw=Gf(function(e){return I.jsx(Kf,{children:I.jsx(Mw,{...e})})});export{Dw as default};
