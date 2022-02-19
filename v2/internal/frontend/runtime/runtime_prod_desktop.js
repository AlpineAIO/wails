(()=>{var b=Object.defineProperty;var O=e=>b(e,"__esModule",{value:!0});var W=(e,n)=>{O(e);for(var o in n)b(e,o,{get:n[o],enumerable:!0})};var g={};W(g,{LogDebug:()=>C,LogError:()=>H,LogFatal:()=>J,LogInfo:()=>D,LogLevel:()=>G,LogPrint:()=>R,LogTrace:()=>T,LogWarning:()=>B,SetLogLevel:()=>F});function w(e,n){window.WailsInvoke("L"+e+n)}function T(e){w("T",e)}function R(e){w("P",e)}function C(e){w("D",e)}function D(e){w("I",e)}function B(e){w("W",e)}function H(e){w("E",e)}function J(e){w("F",e)}function F(e){w("S",e)}var G={TRACE:1,DEBUG:2,INFO:3,WARNING:4,ERROR:5};var E=class{constructor(n,o){o=o||-1,this.Callback=i=>(n.apply(null,i),o===-1?!1:(o-=1,o===0))}},s={};function c(e,n,o){s[e]=s[e]||[];let i=new E(n,o);s[e].push(i)}function k(e,n){c(e,n,-1)}function m(e,n){c(e,n,1)}function h(e){let n=e.name;if(s[n]){let o=s[n].slice();for(let i=0;i<s[n].length;i+=1){let t=s[n][i],r=e.data;t.Callback(r)&&o.splice(i,1)}s[n]=o}}function I(e){let n;try{n=JSON.parse(e)}catch(o){let i="Invalid JSON passed to Notify: "+e;throw new Error(i)}h(n)}function y(e){let n={name:e,data:[].slice.apply(arguments).slice(1)};h(n),window.WailsInvoke("EE"+JSON.stringify(n))}function S(e){delete s[e],window.WailsInvoke("EX"+e)}var d={};function M(){var e=new Uint32Array(1);return window.crypto.getRandomValues(e)[0]}function U(){return Math.random()*9007199254740991}var p;window.crypto?p=M:p=U;function f(e,n,o){return o==null&&(o=0),new Promise(function(i,t){var r;do r=e+"-"+p();while(d[r]);var a;o>0&&(a=setTimeout(function(){t(Error("Call to "+e+" timed out. Request ID: "+r))},o)),d[r]={timeoutHandle:a,reject:t,resolve:i};try{let u={name:e,args:n,callbackID:r};window.WailsInvoke("C"+JSON.stringify(u))}catch(u){console.error(u)}})}function L(e){let n;try{n=JSON.parse(e)}catch(t){let r=`Invalid JSON passed to callback: ${t.message}. Message: ${e}`;throw runtime.LogDebug(r),new Error(r)}let o=n.callbackid,i=d[o];if(!i){let t=`Callback '${o}' not registered!!!`;throw console.error(t),new Error(t)}clearTimeout(i.timeoutHandle),delete d[o],n.error?i.reject(n.error):i.resolve(n.result)}window.go={};function z(e){try{e=JSON.parse(e)}catch(n){console.error(n)}window.go=window.go||{},Object.keys(e).forEach(n=>{window.go[n]=window.go[n]||{},Object.keys(e[n]).forEach(o=>{window.go[n][o]=window.go[n][o]||{},Object.keys(e[n][o]).forEach(i=>{window.go[n][o][i]=function(){let t=0;function r(){let a=[].slice.call(arguments);return f([n,o,i].join("."),a,t)}return r.setTimeout=function(a){t=a},r.getTimeout=function(){return t},r}()})})})}var v={};W(v,{WindowCenter:()=>P,WindowFullscreen:()=>X,WindowGetPosition:()=>Z,WindowGetSize:()=>Q,WindowHide:()=>K,WindowMaximise:()=>ee,WindowMinimise:()=>ie,WindowReload:()=>A,WindowSetMaxSize:()=>V,WindowSetMinSize:()=>q,WindowSetPosition:()=>N,WindowSetRGBA:()=>re,WindowSetSize:()=>$,WindowSetTitle:()=>j,WindowShow:()=>_,WindowToggleMaximise:()=>ne,WindowUnFullscreen:()=>Y,WindowUnmaximise:()=>oe,WindowUnminimise:()=>te});function A(){window.location.reload()}function P(){window.WailsInvoke("Wc")}function j(e){window.WailsInvoke("WT"+e)}function X(){window.WailsInvoke("WF")}function Y(){window.WailsInvoke("Wf")}function $(e,n){window.WailsInvoke("Ws:"+e+":"+n)}function Q(){return f(":wails:WindowGetSize")}function V(e,n){window.WailsInvoke("WZ:"+e+":"+n)}function q(e,n){window.WailsInvoke("Wz:"+e+":"+n)}function N(e,n){window.WailsInvoke("Wp:"+e+":"+n)}function Z(){return f(":wails:WindowGetPos")}function K(){window.WailsInvoke("WH")}function _(){window.WailsInvoke("WS")}function ee(){window.WailsInvoke("WM")}function ne(){window.WailsInvoke("Wt")}function oe(){window.WailsInvoke("WU")}function ie(){window.WailsInvoke("Wm")}function te(){window.WailsInvoke("Wu")}function re(e,n,o,i){let t=JSON.stringify({r:e||0,g:n||0,b:o||0,a:i||255});window.WailsInvoke("Wr:"+t)}var x={};W(x,{BrowserOpenURL:()=>se});function se(e){window.WailsInvoke("BO:"+e)}function le(){window.WailsInvoke("Q")}window.runtime={...g,...v,...x,EventsOn:k,EventsOnce:m,EventsOnMultiple:c,EventsEmit:y,EventsOff:S,Quit:le};window.wails={Callback:L,EventsNotify:I,SetBindings:z,eventListeners:s,callbacks:d,flags:{disableScrollbarDrag:!1,disableWailsDefaultContextMenu:!1,enableResize:!1,defaultCursor:null,borderThickness:6}};window.wails.SetBindings(window.wailsbindings);delete window.wails.SetBindings;window.addEventListener("mousedown",e=>{if(window.wails.flags.resizeEdge){window.WailsInvoke("resize:"+window.wails.flags.resizeEdge),e.preventDefault();return}let n=e.target;for(;n!=null&&!n.hasAttribute("data-wails-no-drag");){if(n.hasAttribute("data-wails-drag")){if(window.wails.flags.disableScrollbarDrag&&(e.offsetX>e.target.clientWidth||e.offsetY>e.target.clientHeight))break;window.WailsInvoke("drag"),e.preventDefault();break}n=n.parentElement}});function l(e){document.body.style.cursor=e||window.wails.flags.defaultCursor,window.wails.flags.resizeEdge=e}window.addEventListener("mousemove",function(e){if(!window.wails.flags.enableResize)return;window.wails.flags.defaultCursor==null&&(window.wails.flags.defaultCursor=document.body.style.cursor),window.outerWidth-e.clientX<window.wails.flags.borderThickness&&window.outerHeight-e.clientY<window.wails.flags.borderThickness&&(document.body.style.cursor="se-resize");let n=window.outerWidth-e.clientX<window.wails.flags.borderThickness,o=e.clientX<window.wails.flags.borderThickness,i=e.clientY<window.wails.flags.borderThickness,t=window.outerHeight-e.clientY<window.wails.flags.borderThickness;!o&&!n&&!i&&!t&&window.wails.flags.resizeEdge!==void 0?l():n&&t?l("se-resize"):o&&t?l("sw-resize"):o&&i?l("nw-resize"):i&&n?l("ne-resize"):o?l("w-resize"):i?l("n-resize"):t?l("s-resize"):n&&l("e-resize")});window.addEventListener("contextmenu",function(e){window.wails.flags.disableWailsDefaultContextMenu&&e.preventDefault()});})();
