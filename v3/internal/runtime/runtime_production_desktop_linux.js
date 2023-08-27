(()=>{var se=Object.defineProperty;var g=(t,e)=>{for(var n in e)se(t,n,{get:e[n],enumerable:!0})};var S={};g(S,{SetText:()=>me,Text:()=>pe});var ue=window.location.origin+"/wails/runtime",r={Call:0,Clipboard:1,Application:2,Events:3,ContextMenu:4,Dialog:5,Window:6,Screens:7,System:8};function ce(t,e,n,o){let i=new URL(ue);i.searchParams.append("object",t),i.searchParams.append("method",e);let a={headers:{}};return n&&(a.headers["x-wails-window-name"]=n),o&&i.searchParams.append("args",JSON.stringify(o)),new Promise((c,W)=>{fetch(i,a).then(s=>{if(s.ok)return s.headers.get("Content-Type")&&s.headers.get("Content-Type").indexOf("application/json")!==-1?s.json():s.text();W(Error(s.statusText))}).then(s=>c(s)).catch(s=>W(s))})}function l(t,e){return function(n,o=null){return ce(t,n,e,o)}}var T=l(r.Clipboard),de=0,fe=1;function me(t){T(de,{text:t})}function pe(){return T(fe)}var E={};g(E,{Hide:()=>we,Quit:()=>he,Show:()=>ge});var M=l(r.Application),D={Hide:0,Show:1,Quit:2};function we(){M(D.Hide)}function ge(){M(D.Show)}function he(){M(D.Quit)}var R={};g(R,{GetAll:()=>We,GetCurrent:()=>Se,GetPrimary:()=>be});var y=l(r.Screens),xe=0,Ce=1,ve=2;function We(){return y(xe)}function be(){return y(Ce)}function Se(){return y(ve)}var O={};g(O,{IsDarkMode:()=>Ee});var Me=l(r.System),De=0;function Ee(){return Me(De)}var ye="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";var h=(t=21)=>{let e="",n=t;for(;n--;)e+=ye[Math.random()*64|0];return e};var Re=l(r.Call),k=0,d=new Map;function Oe(){let t;do t=h();while(d.has(t));return t}function A(t,e,n){let o=d.get(t);o&&(n?o.resolve(JSON.parse(e)):o.resolve(e),d.delete(t))}function j(t,e){let n=d.get(t);n&&(n.reject(e),d.delete(t))}function z(t,e){return new Promise((n,o)=>{let i=Oe();e=e||{},e["call-id"]=i,d.set(i,{resolve:n,reject:o}),Re(t,e).catch(a=>{o(a),d.delete(i)})})}function H(t){return z(k,t)}function B(t,...e){return z(k,{methodID:t,args:e})}function F(t,e,...n){return z(k,{packageName:"wails-plugins",structName:t,methodName:e,args:n})}var ke=0,ze=1,Ie=2,Le=3,Ne=4,Pe=5,Te=6,Ae=7,je=8,He=9,Be=10,Fe=11,Ge=12,Ue=13,Ze=14,Ye=15,Qe=16,Xe=17,Ve=18,Je=19,qe=20,_e=21,Ke=22,$e=23,et=24,tt=25,nt=26,ot=27,it=28,rt=29;function G(t){let e=l(r.Window,t);return{Center:()=>void e(ke),SetTitle:n=>void e(ze,{title:n}),Fullscreen:()=>void e(Ie),UnFullscreen:()=>void e(Le),SetSize:(n,o)=>e(Ne,{width:n,height:o}),Size:()=>e(Pe),SetMaxSize:(n,o)=>void e(Te,{width:n,height:o}),SetMinSize:(n,o)=>void e(Ae,{width:n,height:o}),SetAlwaysOnTop:n=>void e(je,{alwaysOnTop:n}),SetRelativePosition:(n,o)=>e(He,{x:n,y:o}),RelativePosition:()=>e(Be),Screen:()=>e(Fe),Hide:()=>void e(Ge),Maximise:()=>void e(Ue),Show:()=>void e(Je),Close:()=>void e(qe),ToggleMaximise:()=>void e(Ye),UnMaximise:()=>void e(Ze),Minimise:()=>void e(Qe),UnMinimise:()=>void e(Xe),Restore:()=>void e(Ve),SetBackgroundColour:(n,o,i,a)=>void e(_e,{r:n,g:o,b:i,a}),SetResizable:n=>void e(Ke,{resizable:n}),Width:()=>e($e),Height:()=>e(et),ZoomIn:()=>void e(tt),ZoomOut:()=>void e(nt),ZoomReset:()=>void e(ot),GetZoomLevel:()=>e(it),SetZoomLevel:n=>void e(rt,{zoomLevel:n})}}var lt=l(r.Events),at=0,I=class{constructor(e,n,o){this.eventName=e,this.maxCallbacks=o||-1,this.Callback=i=>(n(i),this.maxCallbacks===-1?!1:(this.maxCallbacks-=1,this.maxCallbacks===0))}},x=class{constructor(e,n=null){this.name=e,this.data=n}},u=new Map;function C(t,e,n){let o=u.get(t)||[],i=new I(t,e,n);return o.push(i),u.set(t,o),()=>st(i)}function U(t,e){return C(t,e,-1)}function Z(t,e){return C(t,e,1)}function st(t){let e=t.eventName,n=u.get(e).filter(o=>o!==t);n.length===0?u.delete(e):u.set(e,n)}function Y(t){let e=u.get(t.name);if(e){let n=[];e.forEach(o=>{o.Callback(t)&&n.push(o)}),n.length>0&&(e=e.filter(o=>!n.includes(o)),e.length===0?u.delete(t.name):u.set(t.name,e))}}function Q(t,...e){[t,...e].forEach(o=>{u.delete(o)})}function X(){u.clear()}function v(t){lt(at,t)}var ut=l(r.Dialog),ct=0,dt=1,ft=2,mt=3,pt=4,wt=5,f=new Map;function gt(){let t;do t=h();while(f.has(t));return t}function V(t,e,n){let o=f.get(t);o&&(n?o.resolve(JSON.parse(e)):o.resolve(e),f.delete(t))}function J(t,e){let n=f.get(t);n&&(n.reject(e),f.delete(t))}function m(t,e){return new Promise((n,o)=>{let i=gt();e=e||{},e["dialog-id"]=i,f.set(i,{resolve:n,reject:o}),ut(t,e).catch(a=>{o(a),f.delete(i)})})}function q(t){return m(ct,t)}function _(t){return m(dt,t)}function K(t){return m(ft,t)}function p(t){return m(mt,t)}function $(t){return m(pt,t)}function ee(t){return m(wt,t)}var ht=l(r.ContextMenu),xt=0;function Ct(t,e,n,o){ht(xt,{id:t,x:e,y:n,data:o})}function te(){window.addEventListener("contextmenu",vt)}function vt(t){let e=t.target,n=window.getComputedStyle(e).getPropertyValue("--custom-contextmenu");if(n=n?n.trim():"",n){t.preventDefault();let o=window.getComputedStyle(e).getPropertyValue("--custom-contextmenu-data");Ct(n,t.clientX,t.clientY,o);return}Wt(t)}function Wt(t){let e=t.target;switch(window.getComputedStyle(e).getPropertyValue("--default-contextmenu").trim()){case"show":return;case"hide":t.preventDefault();return;default:if(e.isContentEditable)return;let i=window.getSelection(),a=i.toString().length>0;if(a)for(let c=0;c<i.rangeCount;c++){let s=i.getRangeAt(c).getClientRects();for(let b=0;b<s.length;b++){let P=s[b];if(document.elementFromPoint(P.left,P.top)===e)return}}if((e.tagName==="INPUT"||e.tagName==="TEXTAREA")&&(a||!e.readOnly&&!e.disabled))return;t.preventDefault()}}function ne(t,e=null){let n=new x(t,e);v(n)}function bt(){document.querySelectorAll("[data-wml-event]").forEach(function(e){let n=e.getAttribute("data-wml-event"),o=e.getAttribute("data-wml-confirm"),i=e.getAttribute("data-wml-trigger")||"click",a=function(){if(o){p({Title:"Confirm",Message:o,Detached:!1,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(c){c!=="No"&&ne(n)});return}ne(n)};e.removeEventListener(i,a),e.addEventListener(i,a)})}function oe(t){wails.Window[t]===void 0&&console.log("Window method "+t+" not found"),wails.Window[t]()}function St(){document.querySelectorAll("[data-wml-window]").forEach(function(e){let n=e.getAttribute("data-wml-window"),o=e.getAttribute("data-wml-confirm"),i=e.getAttribute("data-wml-trigger")||"click",a=function(){if(o){p({Title:"Confirm",Message:o,Buttons:[{Label:"Yes"},{Label:"No",IsDefault:!0}]}).then(function(c){c!=="No"&&oe(n)});return}oe(n)};e.removeEventListener(i,a),e.addEventListener(i,a)})}function L(){bt(),St()}var ie=function(t){webkit.messageHandlers.external.postMessage(t)};var Mt=new Map;function re(t){let e=new Map;for(let[n,o]of Object.entries(t))typeof o=="object"&&o!==null?e.set(n,re(o)):e.set(n,o);return e}fetch("/wails/flags").then(t=>{t.json().then(e=>{Mt=re(e)})});var w=!1;function Dt(t){let e=window.getComputedStyle(t.target).getPropertyValue("--webkit-app-region");return e&&(e=e.trim()),e!=="drag"||t.buttons!==1?!1:t.detail===1}function le(){window.addEventListener("mousedown",Et),window.addEventListener("mousemove",Rt),window.addEventListener("mouseup",yt)}function Et(t){if(Dt(t)){if(t.offsetX>t.target.clientWidth||t.offsetY>t.target.clientHeight)return;w=!0}else w=!1}function yt(t){(t.buttons!==void 0?t.buttons:t.which)>0&&N()}function N(){document.body.style.cursor="default",w=!1}function Rt(t){if(w){w=!1,(t.buttons!==void 0?t.buttons:t.which)>0&&ie("drag");return}}window.wails={...ae(null),Capabilities:{}};fetch("/wails/capabilities").then(t=>{t.json().then(e=>{window.wails.Capabilities=e})});window._wails={dialogCallback:V,dialogErrorCallback:J,dispatchWailsEvent:Y,callCallback:A,callErrorCallback:j,endDrag:N};function ae(t){return{Clipboard:{...S},Application:{...E,GetWindowByName(e){return ae(e)}},System:O,Screens:R,Call:H,CallByID:B,Plugin:F,WML:{Reload:L},Dialog:{Info:q,Warning:_,Error:K,Question:p,OpenFile:$,SaveFile:ee},Events:{Emit:v,On:U,Once:Z,OnMultiple:C,Off:Q,OffAll:X},Window:G(t)}}te();le();document.addEventListener("DOMContentLoaded",function(t){L()});})();
