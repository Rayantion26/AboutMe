(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();var b0={exports:{}},qu={};var KS;function YT(){if(KS)return qu;KS=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var c=null;if(l!==void 0&&(c=""+l),r.key!==void 0&&(c=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:o,type:a,key:c,ref:r!==void 0?r:null,props:l}}return qu.Fragment=t,qu.jsx=n,qu.jsxs=n,qu}var QS;function qT(){return QS||(QS=1,b0.exports=YT()),b0.exports}var we=qT(),M0={exports:{}},Se={};var JS;function ZT(){if(JS)return Se;JS=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function v(B){return B===null||typeof B!="object"?null:(B=x&&B[x]||B["@@iterator"],typeof B=="function"?B:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function S(B,rt,xt){this.props=B,this.context=rt,this.refs=y,this.updater=xt||M}S.prototype.isReactComponent={},S.prototype.setState=function(B,rt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,rt,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function w(){}w.prototype=S.prototype;function C(B,rt,xt){this.props=B,this.context=rt,this.refs=y,this.updater=xt||M}var U=C.prototype=new w;U.constructor=C,b(U,S.prototype),U.isPureReactComponent=!0;var P=Array.isArray;function L(){}var D={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function A(B,rt,xt){var St=xt.ref;return{$$typeof:o,type:B,key:rt,ref:St!==void 0?St:null,props:xt}}function T(B,rt){return A(B.type,rt,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function W(B){var rt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(xt){return rt[xt]})}var it=/\/+/g;function at(B,rt){return typeof B=="object"&&B!==null&&B.key!=null?W(""+B.key):rt.toString(36)}function J(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(rt){B.status==="pending"&&(B.status="fulfilled",B.value=rt)},function(rt){B.status==="pending"&&(B.status="rejected",B.reason=rt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,rt,xt,St,wt){var et=typeof B;(et==="undefined"||et==="boolean")&&(B=null);var ot=!1;if(B===null)ot=!0;else switch(et){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(B.$$typeof){case o:case t:ot=!0;break;case _:return ot=B._init,z(ot(B._payload),rt,xt,St,wt)}}if(ot)return wt=wt(B),ot=St===""?"."+at(B,0):St,P(wt)?(xt="",ot!=null&&(xt=ot.replace(it,"$&/")+"/"),z(wt,rt,xt,"",function(Ft){return Ft})):wt!=null&&(G(wt)&&(wt=T(wt,xt+(wt.key==null||B&&B.key===wt.key?"":(""+wt.key).replace(it,"$&/")+"/")+ot)),rt.push(wt)),1;ot=0;var At=St===""?".":St+":";if(P(B))for(var Nt=0;Nt<B.length;Nt++)St=B[Nt],et=At+at(St,Nt),ot+=z(St,rt,xt,et,wt);else if(Nt=v(B),typeof Nt=="function")for(B=Nt.call(B),Nt=0;!(St=B.next()).done;)St=St.value,et=At+at(St,Nt++),ot+=z(St,rt,xt,et,wt);else if(et==="object"){if(typeof B.then=="function")return z(J(B),rt,xt,St,wt);throw rt=String(B),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return ot}function k(B,rt,xt){if(B==null)return B;var St=[],wt=0;return z(B,St,"","",function(et){return rt.call(xt,et,wt++)}),St}function q(B){if(B._status===-1){var rt=B._result;rt=rt(),rt.then(function(xt){(B._status===0||B._status===-1)&&(B._status=1,B._result=xt)},function(xt){(B._status===0||B._status===-1)&&(B._status=2,B._result=xt)}),B._status===-1&&(B._status=0,B._result=rt)}if(B._status===1)return B._result.default;throw B._result}var ft=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},F={map:k,forEach:function(B,rt,xt){k(B,function(){rt.apply(this,arguments)},xt)},count:function(B){var rt=0;return k(B,function(){rt++}),rt},toArray:function(B){return k(B,function(rt){return rt})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return Se.Activity=g,Se.Children=F,Se.Component=S,Se.Fragment=n,Se.Profiler=r,Se.PureComponent=C,Se.StrictMode=a,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Se.__COMPILER_RUNTIME={__proto__:null,c:function(B){return D.H.useMemoCache(B)}},Se.cache=function(B){return function(){return B.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(B,rt,xt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var St=b({},B.props),wt=B.key;if(rt!=null)for(et in rt.key!==void 0&&(wt=""+rt.key),rt)!V.call(rt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&rt.ref===void 0||(St[et]=rt[et]);var et=arguments.length-2;if(et===1)St.children=xt;else if(1<et){for(var ot=Array(et),At=0;At<et;At++)ot[At]=arguments[At+2];St.children=ot}return A(B.type,wt,St)},Se.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},Se.createElement=function(B,rt,xt){var St,wt={},et=null;if(rt!=null)for(St in rt.key!==void 0&&(et=""+rt.key),rt)V.call(rt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(wt[St]=rt[St]);var ot=arguments.length-2;if(ot===1)wt.children=xt;else if(1<ot){for(var At=Array(ot),Nt=0;Nt<ot;Nt++)At[Nt]=arguments[Nt+2];wt.children=At}if(B&&B.defaultProps)for(St in ot=B.defaultProps,ot)wt[St]===void 0&&(wt[St]=ot[St]);return A(B,et,wt)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(B){return{$$typeof:f,render:B}},Se.isValidElement=G,Se.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:q}},Se.memo=function(B,rt){return{$$typeof:h,type:B,compare:rt===void 0?null:rt}},Se.startTransition=function(B){var rt=D.T,xt={};D.T=xt;try{var St=B(),wt=D.S;wt!==null&&wt(xt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(L,ft)}catch(et){ft(et)}finally{rt!==null&&xt.types!==null&&(rt.types=xt.types),D.T=rt}},Se.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Se.use=function(B){return D.H.use(B)},Se.useActionState=function(B,rt,xt){return D.H.useActionState(B,rt,xt)},Se.useCallback=function(B,rt){return D.H.useCallback(B,rt)},Se.useContext=function(B){return D.H.useContext(B)},Se.useDebugValue=function(){},Se.useDeferredValue=function(B,rt){return D.H.useDeferredValue(B,rt)},Se.useEffect=function(B,rt){return D.H.useEffect(B,rt)},Se.useEffectEvent=function(B){return D.H.useEffectEvent(B)},Se.useId=function(){return D.H.useId()},Se.useImperativeHandle=function(B,rt,xt){return D.H.useImperativeHandle(B,rt,xt)},Se.useInsertionEffect=function(B,rt){return D.H.useInsertionEffect(B,rt)},Se.useLayoutEffect=function(B,rt){return D.H.useLayoutEffect(B,rt)},Se.useMemo=function(B,rt){return D.H.useMemo(B,rt)},Se.useOptimistic=function(B,rt){return D.H.useOptimistic(B,rt)},Se.useReducer=function(B,rt,xt){return D.H.useReducer(B,rt,xt)},Se.useRef=function(B){return D.H.useRef(B)},Se.useState=function(B){return D.H.useState(B)},Se.useSyncExternalStore=function(B,rt,xt){return D.H.useSyncExternalStore(B,rt,xt)},Se.useTransition=function(){return D.H.useTransition()},Se.version="19.2.0",Se}var $S;function N_(){return $S||($S=1,M0.exports=ZT()),M0.exports}var Ye=N_(),E0={exports:{}},Zu={},T0={exports:{}},A0={};var ty;function jT(){return ty||(ty=1,(function(o){function t(z,k){var q=z.length;z.push(k);t:for(;0<q;){var ft=q-1>>>1,F=z[ft];if(0<r(F,k))z[ft]=k,z[q]=F,q=ft;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var k=z[0],q=z.pop();if(q!==k){z[0]=q;t:for(var ft=0,F=z.length,B=F>>>1;ft<B;){var rt=2*(ft+1)-1,xt=z[rt],St=rt+1,wt=z[St];if(0>r(xt,q))St<F&&0>r(wt,xt)?(z[ft]=wt,z[St]=q,ft=St):(z[ft]=xt,z[rt]=q,ft=rt);else if(St<F&&0>r(wt,q))z[ft]=wt,z[St]=q,ft=St;else break t}}return k}function r(z,k){var q=z.sortIndex-k.sortIndex;return q!==0?q:z.id-k.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],h=[],_=1,g=null,x=3,v=!1,M=!1,b=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var k=n(h);k!==null;){if(k.callback===null)a(h);else if(k.startTime<=z)a(h),k.sortIndex=k.expirationTime,t(p,k);else break;k=n(h)}}function P(z){if(b=!1,U(z),!M)if(n(p)!==null)M=!0,L||(L=!0,W());else{var k=n(h);k!==null&&J(P,k.startTime-z)}}var L=!1,D=-1,V=5,A=-1;function T(){return y?!0:!(o.unstable_now()-A<V)}function G(){if(y=!1,L){var z=o.unstable_now();A=z;var k=!0;try{t:{M=!1,b&&(b=!1,w(D),D=-1),v=!0;var q=x;try{e:{for(U(z),g=n(p);g!==null&&!(g.expirationTime>z&&T());){var ft=g.callback;if(typeof ft=="function"){g.callback=null,x=g.priorityLevel;var F=ft(g.expirationTime<=z);if(z=o.unstable_now(),typeof F=="function"){g.callback=F,U(z),k=!0;break e}g===n(p)&&a(p),U(z)}else a(p);g=n(p)}if(g!==null)k=!0;else{var B=n(h);B!==null&&J(P,B.startTime-z),k=!1}}break t}finally{g=null,x=q,v=!1}k=void 0}}finally{k?W():L=!1}}}var W;if(typeof C=="function")W=function(){C(G)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,at=it.port2;it.port1.onmessage=G,W=function(){at.postMessage(null)}}else W=function(){S(G,0)};function J(z,k){D=S(function(){z(o.unstable_now())},k)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var q=x;x=k;try{return z()}finally{x=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,k){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=x;x=z;try{return k()}finally{x=q}},o.unstable_scheduleCallback=function(z,k,q){var ft=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ft+q:ft):q=ft,z){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=q+F,z={id:_++,callback:k,priorityLevel:z,startTime:q,expirationTime:F,sortIndex:-1},q>ft?(z.sortIndex=q,t(h,z),n(p)===null&&z===n(h)&&(b?(w(D),D=-1):b=!0,J(P,q-ft))):(z.sortIndex=F,t(p,z),M||v||(M=!0,L||(L=!0,W()))),z},o.unstable_shouldYield=T,o.unstable_wrapCallback=function(z){var k=x;return function(){var q=x;x=k;try{return z.apply(this,arguments)}finally{x=q}}}})(A0)),A0}var ey;function KT(){return ey||(ey=1,T0.exports=jT()),T0.exports}var R0={exports:{}},gi={};var ny;function QT(){if(ny)return gi;ny=1;var o=N_();function t(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(p,h,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:g==null?null:""+g,children:p,containerInfo:h,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return gi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,gi.createPortal=function(p,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(p,h,null,_)},gi.flushSync=function(p){var h=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=h,a.p=_,a.d.f()}},gi.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(p,h))},gi.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},gi.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var _=h.as,g=f(_,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?a.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:v}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:x,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},gi.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=f(h.as,h.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(p)},gi.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,g=f(_,h.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},gi.preloadModule=function(p,h){if(typeof p=="string")if(h){var _=f(h.as,h.crossOrigin);a.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(p)},gi.requestFormReset=function(p){a.d.r(p)},gi.unstable_batchedUpdates=function(p,h){return p(h)},gi.useFormState=function(p,h,_){return c.H.useFormState(p,h,_)},gi.useFormStatus=function(){return c.H.useHostTransitionStatus()},gi.version="19.2.0",gi}var iy;function JT(){if(iy)return R0.exports;iy=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),R0.exports=QT(),R0.exports}var ay;function $T(){if(ay)return Zu;ay=1;var o=KT(),t=N_(),n=JT();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function h(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,u=i;;){var d=s.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){s=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===s)return p(d),e;if(m===u)return p(d),i;m=m.sibling}throw Error(a(188))}if(s.return!==u.return)s=d,u=m;else{for(var E=!1,N=d.child;N;){if(N===s){E=!0,s=d,u=m;break}if(N===u){E=!0,u=d,s=m;break}N=N.sibling}if(!E){for(N=m.child;N;){if(N===s){E=!0,s=m,u=d;break}if(N===u){E=!0,u=m,s=d;break}N=N.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),C=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case L:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case C:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return i=e.displayName||null,i!==null?i:at(e.type)||"Memo";case V:i=e._payload,e=e._init;try{return at(e(i))}catch{}}return null}var J=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ft=[],F=-1;function B(e){return{current:e}}function rt(e){0>F||(e.current=ft[F],ft[F]=null,F--)}function xt(e,i){F++,ft[F]=e.current,e.current=i}var St=B(null),wt=B(null),et=B(null),ot=B(null);function At(e,i){switch(xt(et,i),xt(wt,e),xt(St,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?vS(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=vS(i),e=SS(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(St),xt(St,e)}function Nt(){rt(St),rt(wt),rt(et)}function Ft(e){e.memoizedState!==null&&xt(ot,e);var i=St.current,s=SS(i,e.type);i!==s&&(xt(wt,e),xt(St,s))}function qt(e){wt.current===e&&(rt(St),rt(wt)),ot.current===e&&(rt(ot),ku._currentValue=q)}var _e,Ot;function ee(e){if(_e===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);_e=i&&i[1]||"",Ot=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+Ot}var X=!1;function se(e,i){if(!e||X)return"";X=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(dt){var ct=dt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(dt){ct=dt}e.call(bt.prototype)}}else{try{throw Error()}catch(dt){ct=dt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(dt){if(dt&&ct&&typeof dt.stack=="string")return[dt.stack,ct.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],N=m[1];if(E&&N){var Y=E.split(`
`),ut=N.split(`
`);for(d=u=0;u<Y.length&&!Y[u].includes("DetermineComponentFrameRoot");)u++;for(;d<ut.length&&!ut[d].includes("DetermineComponentFrameRoot");)d++;if(u===Y.length||d===ut.length)for(u=Y.length-1,d=ut.length-1;1<=u&&0<=d&&Y[u]!==ut[d];)d--;for(;1<=u&&0<=d;u--,d--)if(Y[u]!==ut[d]){if(u!==1||d!==1)do if(u--,d--,0>d||Y[u]!==ut[d]){var _t=`
`+Y[u].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=u&&0<=d);break}}}finally{X=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ee(s):""}function nt(e,i){switch(e.tag){case 26:case 27:case 5:return ee(e.type);case 16:return ee("Lazy");case 13:return e.child!==i&&i!==null?ee("Suspense Fallback"):ee("Suspense");case 19:return ee("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return ee("Activity");default:return""}}function ge(e){try{var i="",s=null;do i+=nt(e,s),s=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Xt=Object.prototype.hasOwnProperty,Fe=o.unstable_scheduleCallback,Bt=o.unstable_cancelCallback,ue=o.unstable_shouldYield,I=o.unstable_requestPaint,R=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,mt=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,ie=o.log,zt=o.unstable_setDisableYieldValue,Et=null,Tt=null;function $t(e){if(typeof ie=="function"&&zt(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Et,e)}catch{}}var Zt=Math.clz32?Math.clz32:H,It=Math.log,oe=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(It(e)/oe|0)|0}var Lt=256,Rt=262144,Ct=4194304;function Mt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,s){var u=e.pendingLanes;if(u===0)return 0;var d=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var N=u&134217727;return N!==0?(u=N&~m,u!==0?d=Mt(u):(E&=N,E!==0?d=Mt(E):s||(s=N&~e,s!==0&&(d=Mt(s))))):(N=u&~m,N!==0?d=Mt(N):E!==0?d=Mt(E):s||(s=u&~e,s!==0&&(d=Mt(s)))),d===0?0:i!==0&&i!==d&&(i&m)===0&&(m=d&-d,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:d}function Wt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function le(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function We(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function Vt(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Kt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xe(e,i,s,u,d,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var N=e.entanglements,Y=e.expirationTimes,ut=e.hiddenUpdates;for(s=E&~s;0<s;){var _t=31-Zt(s),bt=1<<_t;N[_t]=0,Y[_t]=-1;var ct=ut[_t];if(ct!==null)for(ut[_t]=null,_t=0;_t<ct.length;_t++){var dt=ct[_t];dt!==null&&(dt.lane&=-536870913)}s&=~bt}u!==0&&Ht(e,u,0),m!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Ht(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Zt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|s&261930}function me(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var u=31-Zt(s),d=1<<u;d&i|e[u]&i&&(e[u]|=i),s&=~d}}function ae(e,i){var s=i&-i;return s=(s&42)!==0?1:ce(s),(s&(e.suspendedLanes|i))!==0?0:s}function ce(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:kS(e.type))}function fn(e,i){var s=k.p;try{return k.p=e,i()}finally{k.p=s}}var tn=Math.random().toString(36).slice(2),ye="__reactFiber$"+tn,ve="__reactProps$"+tn,Oe="__reactContainer$"+tn,ti="__reactEvents$"+tn,hn="__reactListeners$"+tn,ui="__reactHandles$"+tn,Ti="__reactResources$"+tn,yn="__reactMarker$"+tn;function Rn(e){delete e[ye],delete e[ve],delete e[ti],delete e[hn],delete e[ui]}function bn(e){var i=e[ye];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Oe]||s[ye]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=RS(e);e!==null;){if(s=e[ye])return s;e=RS(e)}return i}e=s,s=e.parentNode}return null}function O(e){if(e=e[ye]||e[Oe]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function j(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function st(e){var i=e[Ti];return i||(i=e[Ti]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function tt(e){e[yn]=!0}var K=new Set,Dt={};function Pt(e,i){Yt(e,i),Yt(e+"Capture",i)}function Yt(e,i){for(Dt[e]=i,e=0;e<i.length;e++)K.add(i[e])}var Gt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},fe={};function te(e){return Xt.call(fe,e)?!0:Xt.call(re,e)?!1:Gt.test(e)?fe[e]=!0:(re[e]=!0,!1)}function Te(e,i,s){if(te(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Ze(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function je(e,i,s,u){if(u===null)e.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+u)}}function He(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function en(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function de(e,i,s){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function dn(e){if(!e._valueTracker){var i=en(e)?"checked":"value";e._valueTracker=de(e,i,""+e[i])}}function Ge(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return e&&(u=en(e)?e.checked?"true":"false":e.value),e=u,e!==s?(i.setValue(e),!0):!1}function ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Zr=/[\n"\\]/g;function xn(e){return e.replace(Zr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function or(e,i,s,u,d,m,E,N){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+He(i)):e.value!==""+He(i)&&(e.value=""+He(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?ni(e,E,He(i)):s!=null?ni(e,E,He(s)):u!=null&&e.removeAttribute("value"),d==null&&m!=null&&(e.defaultChecked=!!m),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+He(N):e.removeAttribute("name")}function vn(e,i,s,u,d,m,E,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){dn(e);return}s=s!=null?""+He(s):"",i=i!=null?""+He(i):s,N||i===e.value||(e.value=i),e.defaultValue=i}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=N?e.checked:!!u,e.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),dn(e)}function ni(e,i,s){i==="number"&&ei(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function qn(e,i,s,u){if(e=e.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=i.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&u&&(e[s].defaultSelected=!0)}else{for(s=""+He(s),i=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,u&&(e[d].defaultSelected=!0);return}i!==null||e[d].disabled||(i=e[d])}i!==null&&(i.selected=!0)}}function ii(e,i,s){if(i!=null&&(i=""+He(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+He(s):""}function ci(e,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(J(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=He(i),e.defaultValue=s,u=e.textContent,u===s&&u!==""&&u!==null&&(e.value=u),dn(e)}function Wa(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var lr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _g(e,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,s):typeof s!="number"||s===0||lr.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function gg(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var d in i)u=i[d],i.hasOwnProperty(d)&&s[d]!==u&&_g(e,d,u)}else for(var m in i)i.hasOwnProperty(m)&&_g(e,m,i[m])}function xd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wc(e){return kM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ur(){}var vd=null;function Sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bo=null,Io=null;function xg(e){var i=O(e);if(i&&(e=i.stateNode)){var s=e[ve]||null;t:switch(e=i.stateNode,i.type){case"input":if(or(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+xn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==e&&u.form===e.form){var d=u[ve]||null;if(!d)throw Error(a(90));or(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===e.form&&Ge(u)}break t;case"textarea":ii(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&qn(e,!!s.multiple,i,!1)}}}var yd=!1;function vg(e,i,s){if(yd)return e(i,s);yd=!0;try{var u=e(i);return u}finally{if(yd=!1,(Bo!==null||Io!==null)&&(Nf(),Bo&&(i=Bo,e=Io,Io=Bo=null,xg(i),e)))for(i=0;i<e.length;i++)xg(e[i])}}function su(e,i){var s=e.stateNode;if(s===null)return null;var u=s[ve]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=!1;if(cr)try{var ou={};Object.defineProperty(ou,"passive",{get:function(){bd=!0}}),window.addEventListener("test",ou,ou),window.removeEventListener("test",ou,ou)}catch{bd=!1}var jr=null,Md=null,Yc=null;function Sg(){if(Yc)return Yc;var e,i=Md,s=i.length,u,d="value"in jr?jr.value:jr.textContent,m=d.length;for(e=0;e<s&&i[e]===d[e];e++);var E=s-e;for(u=1;u<=E&&i[s-u]===d[m-u];u++);return Yc=d.slice(e,1<u?1-u:void 0)}function qc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Zc(){return!0}function yg(){return!1}function zi(e){function i(s,u,d,m,E){this._reactName=s,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(s=e[N],this[N]=s?s(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Zc:yg,this.isPropagationStopped=yg,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Zc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Zc)},persist:function(){},isPersistent:Zc}),i}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=zi(ks),lu=g({},ks,{view:0,detail:0}),XM=zi(lu),Ed,Td,uu,Kc=g({},lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==uu&&(uu&&e.type==="mousemove"?(Ed=e.screenX-uu.screenX,Td=e.screenY-uu.screenY):Td=Ed=0,uu=e),Ed)},movementY:function(e){return"movementY"in e?e.movementY:Td}}),bg=zi(Kc),WM=g({},Kc,{dataTransfer:0}),YM=zi(WM),qM=g({},lu,{relatedTarget:0}),Ad=zi(qM),ZM=g({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),jM=zi(ZM),KM=g({},ks,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QM=zi(KM),JM=g({},ks,{data:0}),Mg=zi(JM),$M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nE(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=eE[e])?!!i[e]:!1}function Rd(){return nE}var iE=g({},lu,{key:function(e){if(e.key){var i=$M[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=qc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(e){return e.type==="keypress"?qc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),aE=zi(iE),rE=g({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=zi(rE),sE=g({},lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),oE=zi(sE),lE=g({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),uE=zi(lE),cE=g({},Kc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=zi(cE),hE=g({},ks,{newState:0,oldState:0}),dE=zi(hE),pE=[9,13,27,32],Cd=cr&&"CompositionEvent"in window,cu=null;cr&&"documentMode"in document&&(cu=document.documentMode);var mE=cr&&"TextEvent"in window&&!cu,Tg=cr&&(!Cd||cu&&8<cu&&11>=cu),Ag=" ",Rg=!1;function Cg(e,i){switch(e){case"keyup":return pE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ho=!1;function _E(e,i){switch(e){case"compositionend":return wg(i);case"keypress":return i.which!==32?null:(Rg=!0,Ag);case"textInput":return e=i.data,e===Ag&&Rg?null:e;default:return null}}function gE(e,i){if(Ho)return e==="compositionend"||!Cd&&Cg(e,i)?(e=Sg(),Yc=Md=jr=null,Ho=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Tg&&i.locale!=="ko"?null:i.data;default:return null}}var xE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!xE[e.type]:i==="textarea"}function Ug(e,i,s,u){Bo?Io?Io.push(u):Io=[u]:Bo=u,i=Hf(i,"onChange"),0<i.length&&(s=new jc("onChange","change",null,s,u),e.push({event:s,listeners:i}))}var fu=null,hu=null;function vE(e){dS(e,0)}function Qc(e){var i=j(e);if(Ge(i))return e}function Lg(e,i){if(e==="change")return i}var Ng=!1;if(cr){var wd;if(cr){var Dd="oninput"in document;if(!Dd){var Og=document.createElement("div");Og.setAttribute("oninput","return;"),Dd=typeof Og.oninput=="function"}wd=Dd}else wd=!1;Ng=wd&&(!document.documentMode||9<document.documentMode)}function Pg(){fu&&(fu.detachEvent("onpropertychange",zg),hu=fu=null)}function zg(e){if(e.propertyName==="value"&&Qc(hu)){var i=[];Ug(i,hu,e,Sd(e)),vg(vE,i)}}function SE(e,i,s){e==="focusin"?(Pg(),fu=i,hu=s,fu.attachEvent("onpropertychange",zg)):e==="focusout"&&Pg()}function yE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qc(hu)}function bE(e,i){if(e==="click")return Qc(i)}function ME(e,i){if(e==="input"||e==="change")return Qc(i)}function EE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Ki=typeof Object.is=="function"?Object.is:EE;function du(e,i){if(Ki(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var d=s[u];if(!Xt.call(i,d)||!Ki(e[d],i[d]))return!1}return!0}function Fg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bg(e,i){var s=Fg(e);e=0;for(var u;s;){if(s.nodeType===3){if(u=e+s.textContent.length,e<=i&&u>=i)return{node:s,offset:i-e};e=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Fg(s)}}function Ig(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ig(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Hg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ei(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=ei(e.document)}return i}function Ud(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var TE=cr&&"documentMode"in document&&11>=document.documentMode,Go=null,Ld=null,pu=null,Nd=!1;function Gg(e,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Nd||Go==null||Go!==ei(u)||(u=Go,"selectionStart"in u&&Ud(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),pu&&du(pu,u)||(pu=u,u=Hf(Ld,"onSelect"),0<u.length&&(i=new jc("onSelect","select",null,i,s),e.push({event:i,listeners:u}),i.target=Go)))}function Xs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Vo={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionrun:Xs("Transition","TransitionRun"),transitionstart:Xs("Transition","TransitionStart"),transitioncancel:Xs("Transition","TransitionCancel"),transitionend:Xs("Transition","TransitionEnd")},Od={},Vg={};cr&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete Vo.animationend.animation,delete Vo.animationiteration.animation,delete Vo.animationstart.animation),"TransitionEvent"in window||delete Vo.transitionend.transition);function Ws(e){if(Od[e])return Od[e];if(!Vo[e])return e;var i=Vo[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Vg)return Od[e]=i[s];return e}var kg=Ws("animationend"),Xg=Ws("animationiteration"),Wg=Ws("animationstart"),AE=Ws("transitionrun"),RE=Ws("transitionstart"),CE=Ws("transitioncancel"),Yg=Ws("transitionend"),qg=new Map,Pd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pd.push("scrollEnd");function Pa(e,i){qg.set(e,i),Pt(i,[e])}var Jc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ga=[],ko=0,zd=0;function $c(){for(var e=ko,i=zd=ko=0;i<e;){var s=ga[i];ga[i++]=null;var u=ga[i];ga[i++]=null;var d=ga[i];ga[i++]=null;var m=ga[i];if(ga[i++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}m!==0&&Zg(s,d,m)}}function tf(e,i,s,u){ga[ko++]=e,ga[ko++]=i,ga[ko++]=s,ga[ko++]=u,zd|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Fd(e,i,s,u){return tf(e,i,s,u),ef(e)}function Ys(e,i){return tf(e,null,null,i),ef(e)}function Zg(e,i,s){e.lanes|=s;var u=e.alternate;u!==null&&(u.lanes|=s);for(var d=!1,m=e.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(d=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,d&&i!==null&&(d=31-Zt(s),e=m.hiddenUpdates,u=e[d],u===null?e[d]=[i]:u.push(i),i.lane=s|536870912),m):null}function ef(e){if(50<zu)throw zu=0,Yp=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Xo={};function wE(e,i,s,u){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qi(e,i,s,u){return new wE(e,i,s,u)}function Bd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fr(e,i){var s=e.alternate;return s===null?(s=Qi(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function jg(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function nf(e,i,s,u,d,m){var E=0;if(u=e,typeof e=="function")Bd(e)&&(E=1);else if(typeof e=="string")E=OT(e,s,St.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=Qi(31,s,i,d),e.elementType=A,e.lanes=m,e;case b:return qs(s.children,d,m,i);case y:E=8,d|=24;break;case S:return e=Qi(12,s,i,d|2),e.elementType=S,e.lanes=m,e;case P:return e=Qi(13,s,i,d),e.elementType=P,e.lanes=m,e;case L:return e=Qi(19,s,i,d),e.elementType=L,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:E=10;break t;case w:E=9;break t;case U:E=11;break t;case D:E=14;break t;case V:E=16,u=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=Qi(E,s,i,d),i.elementType=e,i.type=u,i.lanes=m,i}function qs(e,i,s,u){return e=Qi(7,e,u,i),e.lanes=s,e}function Id(e,i,s){return e=Qi(6,e,null,i),e.lanes=s,e}function Kg(e){var i=Qi(18,null,null,0);return i.stateNode=e,i}function Hd(e,i,s){return i=Qi(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Qg=new WeakMap;function xa(e,i){if(typeof e=="object"&&e!==null){var s=Qg.get(e);return s!==void 0?s:(i={value:e,source:i,stack:ge(i)},Qg.set(e,i),i)}return{value:e,source:i,stack:ge(i)}}var Wo=[],Yo=0,af=null,mu=0,va=[],Sa=0,Kr=null,Ya=1,qa="";function hr(e,i){Wo[Yo++]=mu,Wo[Yo++]=af,af=e,mu=i}function Jg(e,i,s){va[Sa++]=Ya,va[Sa++]=qa,va[Sa++]=Kr,Kr=e;var u=Ya;e=qa;var d=32-Zt(u)-1;u&=~(1<<d),s+=1;var m=32-Zt(i)+d;if(30<m){var E=d-d%5;m=(u&(1<<E)-1).toString(32),u>>=E,d-=E,Ya=1<<32-Zt(i)+d|s<<d|u,qa=m+e}else Ya=1<<m|s<<d|u,qa=e}function Gd(e){e.return!==null&&(hr(e,1),Jg(e,1,0))}function Vd(e){for(;e===af;)af=Wo[--Yo],Wo[Yo]=null,mu=Wo[--Yo],Wo[Yo]=null;for(;e===Kr;)Kr=va[--Sa],va[Sa]=null,qa=va[--Sa],va[Sa]=null,Ya=va[--Sa],va[Sa]=null}function $g(e,i){va[Sa++]=Ya,va[Sa++]=qa,va[Sa++]=Kr,Ya=i.id,qa=i.overflow,Kr=e}var fi=null,Mn=null,Ve=!1,Qr=null,ya=!1,kd=Error(a(519));function Jr(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _u(xa(i,e)),kd}function tx(e){var i=e.stateNode,s=e.type,u=e.memoizedProps;switch(i[ye]=e,i[ve]=u,s){case"dialog":ze("cancel",i),ze("close",i);break;case"iframe":case"object":case"embed":ze("load",i);break;case"video":case"audio":for(s=0;s<Bu.length;s++)ze(Bu[s],i);break;case"source":ze("error",i);break;case"img":case"image":case"link":ze("error",i),ze("load",i);break;case"details":ze("toggle",i);break;case"input":ze("invalid",i),vn(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":ze("invalid",i);break;case"textarea":ze("invalid",i),ci(i,u.value,u.defaultValue,u.children)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||gS(i.textContent,s)?(u.popover!=null&&(ze("beforetoggle",i),ze("toggle",i)),u.onScroll!=null&&ze("scroll",i),u.onScrollEnd!=null&&ze("scrollend",i),u.onClick!=null&&(i.onclick=ur),i=!0):i=!1,i||Jr(e,!0)}function ex(e){for(fi=e.return;fi;)switch(fi.tag){case 5:case 31:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:fi=fi.return}}function qo(e){if(e!==fi)return!1;if(!Ve)return ex(e),Ve=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||o0(e.type,e.memoizedProps)),s=!s),s&&Mn&&Jr(e),ex(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Mn=AS(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Mn=AS(e)}else i===27?(i=Mn,hs(e.type)?(e=h0,h0=null,Mn=e):Mn=i):Mn=fi?Ma(e.stateNode.nextSibling):null;return!0}function Zs(){Mn=fi=null,Ve=!1}function Xd(){var e=Qr;return e!==null&&(Hi===null?Hi=e:Hi.push.apply(Hi,e),Qr=null),e}function _u(e){Qr===null?Qr=[e]:Qr.push(e)}var Wd=B(null),js=null,dr=null;function $r(e,i,s){xt(Wd,i._currentValue),i._currentValue=s}function pr(e){e._currentValue=Wd.current,rt(Wd)}function Yd(e,i,s){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===s)break;e=e.return}}function qd(e,i,s,u){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var m=d.dependencies;if(m!==null){var E=d.child;m=m.firstContext;t:for(;m!==null;){var N=m;m=d;for(var Y=0;Y<i.length;Y++)if(N.context===i[Y]){m.lanes|=s,N=m.alternate,N!==null&&(N.lanes|=s),Yd(m.return,s,e),u||(E=null);break t}m=N.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Yd(E,s,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Zo(e,i,s,u){e=null;for(var d=i,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var N=d.type;Ki(d.pendingProps.value,E.value)||(e!==null?e.push(N):e=[N])}}else if(d===ot.current){if(E=d.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(ku):e=[ku])}d=d.return}e!==null&&qd(i,e,s,u),i.flags|=262144}function rf(e){for(e=e.firstContext;e!==null;){if(!Ki(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ks(e){js=e,dr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hi(e){return nx(js,e)}function sf(e,i){return js===null&&Ks(e),nx(e,i)}function nx(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},dr===null){if(e===null)throw Error(a(308));dr=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else dr=dr.next=i;return s}var DE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},UE=o.unstable_scheduleCallback,LE=o.unstable_NormalPriority,In={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zd(){return{controller:new DE,data:new Map,refCount:0}}function gu(e){e.refCount--,e.refCount===0&&UE(LE,function(){e.controller.abort()})}var xu=null,jd=0,jo=0,Ko=null;function NE(e,i){if(xu===null){var s=xu=[];jd=0,jo=Jp(),Ko={status:"pending",value:void 0,then:function(u){s.push(u)}}}return jd++,i.then(ix,ix),i}function ix(){if(--jd===0&&xu!==null){Ko!==null&&(Ko.status="fulfilled");var e=xu;xu=null,jo=0,Ko=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function OE(e,i){var s=[],u={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var d=0;d<s.length;d++)(0,s[d])(i)},function(d){for(u.status="rejected",u.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),u}var ax=z.S;z.S=function(e,i){Gv=R(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&NE(e,i),ax!==null&&ax(e,i)};var Qs=B(null);function Kd(){var e=Qs.current;return e!==null?e:pn.pooledCache}function of(e,i){i===null?xt(Qs,Qs.current):xt(Qs,i.pool)}function rx(){var e=Kd();return e===null?null:{parent:In._currentValue,pool:e}}var Qo=Error(a(460)),Qd=Error(a(474)),lf=Error(a(542)),uf={then:function(){}};function sx(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ox(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ur,ur),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ux(e),e;default:if(typeof i.status=="string")i.then(ur,ur);else{if(e=pn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var d=i;d.status="fulfilled",d.value=u}},function(u){if(i.status==="pending"){var d=i;d.status="rejected",d.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ux(e),e}throw $s=i,Qo}}function Js(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?($s=s,Qo):s}}var $s=null;function lx(){if($s===null)throw Error(a(459));var e=$s;return $s=null,e}function ux(e){if(e===Qo||e===lf)throw Error(a(483))}var Jo=null,vu=0;function cf(e){var i=vu;return vu+=1,Jo===null&&(Jo=[]),ox(Jo,e,i)}function Su(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ff(e,i){throw i.$$typeof===x?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function cx(e){function i(Q,Z){if(e){var lt=Q.deletions;lt===null?(Q.deletions=[Z],Q.flags|=16):lt.push(Z)}}function s(Q,Z){if(!e)return null;for(;Z!==null;)i(Q,Z),Z=Z.sibling;return null}function u(Q){for(var Z=new Map;Q!==null;)Q.key!==null?Z.set(Q.key,Q):Z.set(Q.index,Q),Q=Q.sibling;return Z}function d(Q,Z){return Q=fr(Q,Z),Q.index=0,Q.sibling=null,Q}function m(Q,Z,lt){return Q.index=lt,e?(lt=Q.alternate,lt!==null?(lt=lt.index,lt<Z?(Q.flags|=67108866,Z):lt):(Q.flags|=67108866,Z)):(Q.flags|=1048576,Z)}function E(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function N(Q,Z,lt,yt){return Z===null||Z.tag!==6?(Z=Id(lt,Q.mode,yt),Z.return=Q,Z):(Z=d(Z,lt),Z.return=Q,Z)}function Y(Q,Z,lt,yt){var he=lt.type;return he===b?_t(Q,Z,lt.props.children,yt,lt.key):Z!==null&&(Z.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===V&&Js(he)===Z.type)?(Z=d(Z,lt.props),Su(Z,lt),Z.return=Q,Z):(Z=nf(lt.type,lt.key,lt.props,null,Q.mode,yt),Su(Z,lt),Z.return=Q,Z)}function ut(Q,Z,lt,yt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==lt.containerInfo||Z.stateNode.implementation!==lt.implementation?(Z=Hd(lt,Q.mode,yt),Z.return=Q,Z):(Z=d(Z,lt.children||[]),Z.return=Q,Z)}function _t(Q,Z,lt,yt,he){return Z===null||Z.tag!==7?(Z=qs(lt,Q.mode,yt,he),Z.return=Q,Z):(Z=d(Z,lt),Z.return=Q,Z)}function bt(Q,Z,lt){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Id(""+Z,Q.mode,lt),Z.return=Q,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case v:return lt=nf(Z.type,Z.key,Z.props,null,Q.mode,lt),Su(lt,Z),lt.return=Q,lt;case M:return Z=Hd(Z,Q.mode,lt),Z.return=Q,Z;case V:return Z=Js(Z),bt(Q,Z,lt)}if(J(Z)||W(Z))return Z=qs(Z,Q.mode,lt,null),Z.return=Q,Z;if(typeof Z.then=="function")return bt(Q,cf(Z),lt);if(Z.$$typeof===C)return bt(Q,sf(Q,Z),lt);ff(Q,Z)}return null}function ct(Q,Z,lt,yt){var he=Z!==null?Z.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return he!==null?null:N(Q,Z,""+lt,yt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case v:return lt.key===he?Y(Q,Z,lt,yt):null;case M:return lt.key===he?ut(Q,Z,lt,yt):null;case V:return lt=Js(lt),ct(Q,Z,lt,yt)}if(J(lt)||W(lt))return he!==null?null:_t(Q,Z,lt,yt,null);if(typeof lt.then=="function")return ct(Q,Z,cf(lt),yt);if(lt.$$typeof===C)return ct(Q,Z,sf(Q,lt),yt);ff(Q,lt)}return null}function dt(Q,Z,lt,yt,he){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return Q=Q.get(lt)||null,N(Z,Q,""+yt,he);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case v:return Q=Q.get(yt.key===null?lt:yt.key)||null,Y(Z,Q,yt,he);case M:return Q=Q.get(yt.key===null?lt:yt.key)||null,ut(Z,Q,yt,he);case V:return yt=Js(yt),dt(Q,Z,lt,yt,he)}if(J(yt)||W(yt))return Q=Q.get(lt)||null,_t(Z,Q,yt,he,null);if(typeof yt.then=="function")return dt(Q,Z,lt,cf(yt),he);if(yt.$$typeof===C)return dt(Q,Z,lt,sf(Z,yt),he);ff(Z,yt)}return null}function Qt(Q,Z,lt,yt){for(var he=null,Ke=null,ne=Z,Ae=Z=0,Ie=null;ne!==null&&Ae<lt.length;Ae++){ne.index>Ae?(Ie=ne,ne=null):Ie=ne.sibling;var Qe=ct(Q,ne,lt[Ae],yt);if(Qe===null){ne===null&&(ne=Ie);break}e&&ne&&Qe.alternate===null&&i(Q,ne),Z=m(Qe,Z,Ae),Ke===null?he=Qe:Ke.sibling=Qe,Ke=Qe,ne=Ie}if(Ae===lt.length)return s(Q,ne),Ve&&hr(Q,Ae),he;if(ne===null){for(;Ae<lt.length;Ae++)ne=bt(Q,lt[Ae],yt),ne!==null&&(Z=m(ne,Z,Ae),Ke===null?he=ne:Ke.sibling=ne,Ke=ne);return Ve&&hr(Q,Ae),he}for(ne=u(ne);Ae<lt.length;Ae++)Ie=dt(ne,Q,Ae,lt[Ae],yt),Ie!==null&&(e&&Ie.alternate!==null&&ne.delete(Ie.key===null?Ae:Ie.key),Z=m(Ie,Z,Ae),Ke===null?he=Ie:Ke.sibling=Ie,Ke=Ie);return e&&ne.forEach(function(gs){return i(Q,gs)}),Ve&&hr(Q,Ae),he}function pe(Q,Z,lt,yt){if(lt==null)throw Error(a(151));for(var he=null,Ke=null,ne=Z,Ae=Z=0,Ie=null,Qe=lt.next();ne!==null&&!Qe.done;Ae++,Qe=lt.next()){ne.index>Ae?(Ie=ne,ne=null):Ie=ne.sibling;var gs=ct(Q,ne,Qe.value,yt);if(gs===null){ne===null&&(ne=Ie);break}e&&ne&&gs.alternate===null&&i(Q,ne),Z=m(gs,Z,Ae),Ke===null?he=gs:Ke.sibling=gs,Ke=gs,ne=Ie}if(Qe.done)return s(Q,ne),Ve&&hr(Q,Ae),he;if(ne===null){for(;!Qe.done;Ae++,Qe=lt.next())Qe=bt(Q,Qe.value,yt),Qe!==null&&(Z=m(Qe,Z,Ae),Ke===null?he=Qe:Ke.sibling=Qe,Ke=Qe);return Ve&&hr(Q,Ae),he}for(ne=u(ne);!Qe.done;Ae++,Qe=lt.next())Qe=dt(ne,Q,Ae,Qe.value,yt),Qe!==null&&(e&&Qe.alternate!==null&&ne.delete(Qe.key===null?Ae:Qe.key),Z=m(Qe,Z,Ae),Ke===null?he=Qe:Ke.sibling=Qe,Ke=Qe);return e&&ne.forEach(function(WT){return i(Q,WT)}),Ve&&hr(Q,Ae),he}function ln(Q,Z,lt,yt){if(typeof lt=="object"&&lt!==null&&lt.type===b&&lt.key===null&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case v:t:{for(var he=lt.key;Z!==null;){if(Z.key===he){if(he=lt.type,he===b){if(Z.tag===7){s(Q,Z.sibling),yt=d(Z,lt.props.children),yt.return=Q,Q=yt;break t}}else if(Z.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===V&&Js(he)===Z.type){s(Q,Z.sibling),yt=d(Z,lt.props),Su(yt,lt),yt.return=Q,Q=yt;break t}s(Q,Z);break}else i(Q,Z);Z=Z.sibling}lt.type===b?(yt=qs(lt.props.children,Q.mode,yt,lt.key),yt.return=Q,Q=yt):(yt=nf(lt.type,lt.key,lt.props,null,Q.mode,yt),Su(yt,lt),yt.return=Q,Q=yt)}return E(Q);case M:t:{for(he=lt.key;Z!==null;){if(Z.key===he)if(Z.tag===4&&Z.stateNode.containerInfo===lt.containerInfo&&Z.stateNode.implementation===lt.implementation){s(Q,Z.sibling),yt=d(Z,lt.children||[]),yt.return=Q,Q=yt;break t}else{s(Q,Z);break}else i(Q,Z);Z=Z.sibling}yt=Hd(lt,Q.mode,yt),yt.return=Q,Q=yt}return E(Q);case V:return lt=Js(lt),ln(Q,Z,lt,yt)}if(J(lt))return Qt(Q,Z,lt,yt);if(W(lt)){if(he=W(lt),typeof he!="function")throw Error(a(150));return lt=he.call(lt),pe(Q,Z,lt,yt)}if(typeof lt.then=="function")return ln(Q,Z,cf(lt),yt);if(lt.$$typeof===C)return ln(Q,Z,sf(Q,lt),yt);ff(Q,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,Z!==null&&Z.tag===6?(s(Q,Z.sibling),yt=d(Z,lt),yt.return=Q,Q=yt):(s(Q,Z),yt=Id(lt,Q.mode,yt),yt.return=Q,Q=yt),E(Q)):s(Q,Z)}return function(Q,Z,lt,yt){try{vu=0;var he=ln(Q,Z,lt,yt);return Jo=null,he}catch(ne){if(ne===Qo||ne===lf)throw ne;var Ke=Qi(29,ne,null,Q.mode);return Ke.lanes=yt,Ke.return=Q,Ke}finally{}}}var to=cx(!0),fx=cx(!1),ts=!1;function Jd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $d(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function es(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ns(e,i,s){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,($e&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,i=ef(e),Zg(e,null,s),i}return tf(e,u,i,s),ef(e)}function yu(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,me(e,s)}}function tp(e,i){var s=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var d=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?d=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?d=m=i:m=m.next=i}else d=m=i;s={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var ep=!1;function bu(){if(ep){var e=Ko;if(e!==null)throw e}}function Mu(e,i,s,u){ep=!1;var d=e.updateQueue;ts=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var Y=N,ut=Y.next;Y.next=null,E===null?m=ut:E.next=ut,E=Y;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,N=_t.lastBaseUpdate,N!==E&&(N===null?_t.firstBaseUpdate=ut:N.next=ut,_t.lastBaseUpdate=Y))}if(m!==null){var bt=d.baseState;E=0,_t=ut=Y=null,N=m;do{var ct=N.lane&-536870913,dt=ct!==N.lane;if(dt?(Be&ct)===ct:(u&ct)===ct){ct!==0&&ct===jo&&(ep=!0),_t!==null&&(_t=_t.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var Qt=e,pe=N;ct=i;var ln=s;switch(pe.tag){case 1:if(Qt=pe.payload,typeof Qt=="function"){bt=Qt.call(ln,bt,ct);break t}bt=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=pe.payload,ct=typeof Qt=="function"?Qt.call(ln,bt,ct):Qt,ct==null)break t;bt=g({},bt,ct);break t;case 2:ts=!0}}ct=N.callback,ct!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=d.callbacks,dt===null?d.callbacks=[ct]:dt.push(ct))}else dt={lane:ct,tag:N.tag,payload:N.payload,callback:N.callback,next:null},_t===null?(ut=_t=dt,Y=bt):_t=_t.next=dt,E|=ct;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;dt=N,N=dt.next,dt.next=null,d.lastBaseUpdate=dt,d.shared.pending=null}}while(!0);_t===null&&(Y=bt),d.baseState=Y,d.firstBaseUpdate=ut,d.lastBaseUpdate=_t,m===null&&(d.shared.lanes=0),os|=E,e.lanes=E,e.memoizedState=bt}}function hx(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function dx(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)hx(s[e],i)}var $o=B(null),hf=B(0);function px(e,i){e=Mr,xt(hf,e),xt($o,i),Mr=e|i.baseLanes}function np(){xt(hf,Mr),xt($o,$o.current)}function ip(){Mr=hf.current,rt($o),rt(hf)}var Ji=B(null),ba=null;function is(e){var i=e.alternate;xt(Nn,Nn.current&1),xt(Ji,e),ba===null&&(i===null||$o.current!==null||i.memoizedState!==null)&&(ba=e)}function ap(e){xt(Nn,Nn.current),xt(Ji,e),ba===null&&(ba=e)}function mx(e){e.tag===22?(xt(Nn,Nn.current),xt(Ji,e),ba===null&&(ba=e)):as()}function as(){xt(Nn,Nn.current),xt(Ji,Ji.current)}function $i(e){rt(Ji),ba===e&&(ba=null),rt(Nn)}var Nn=B(0);function df(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||c0(s)||f0(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var mr=0,be=null,sn=null,Hn=null,pf=!1,tl=!1,eo=!1,mf=0,Eu=0,el=null,PE=0;function Dn(){throw Error(a(321))}function rp(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Ki(e[s],i[s]))return!1;return!0}function sp(e,i,s,u,d,m){return mr=m,be=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?Jx:yp,eo=!1,m=s(u,d),eo=!1,tl&&(m=gx(i,s,u,d)),_x(e),m}function _x(e){z.H=Ru;var i=sn!==null&&sn.next!==null;if(mr=0,Hn=sn=be=null,pf=!1,Eu=0,el=null,i)throw Error(a(300));e===null||Gn||(e=e.dependencies,e!==null&&rf(e)&&(Gn=!0))}function gx(e,i,s,u){be=e;var d=0;do{if(tl&&(el=null),Eu=0,tl=!1,25<=d)throw Error(a(301));if(d+=1,Hn=sn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=$x,m=i(s,u)}while(tl);return m}function zE(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?Tu(i):i,e=e.useState()[0],(sn!==null?sn.memoizedState:null)!==e&&(be.flags|=1024),i}function op(){var e=mf!==0;return mf=0,e}function lp(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function up(e){if(pf){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}pf=!1}mr=0,Hn=sn=be=null,tl=!1,Eu=mf=0,el=null}function Ai(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hn===null?be.memoizedState=Hn=e:Hn=Hn.next=e,Hn}function On(){if(sn===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=sn.next;var i=Hn===null?be.memoizedState:Hn.next;if(i!==null)Hn=i,sn=e;else{if(e===null)throw be.alternate===null?Error(a(467)):Error(a(310));sn=e,e={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},Hn===null?be.memoizedState=Hn=e:Hn=Hn.next=e}return Hn}function _f(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tu(e){var i=Eu;return Eu+=1,el===null&&(el=[]),e=ox(el,e,i),i=be,(Hn===null?i.memoizedState:Hn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?Jx:yp),e}function gf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tu(e);if(e.$$typeof===C)return hi(e)}throw Error(a(438,String(e)))}function cp(e){var i=null,s=be.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=be.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(d){return d.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=_f(),be.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),u=0;u<e;u++)s[u]=T;return i.index++,s}function _r(e,i){return typeof i=="function"?i(e):i}function xf(e){var i=On();return fp(i,sn,e)}function fp(e,i,s){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var d=e.baseQueue,m=u.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}i.baseQueue=d=m,u.pending=null}if(m=e.baseState,d===null)e.memoizedState=m;else{i=d.next;var N=E=null,Y=null,ut=i,_t=!1;do{var bt=ut.lane&-536870913;if(bt!==ut.lane?(Be&bt)===bt:(mr&bt)===bt){var ct=ut.revertLane;if(ct===0)Y!==null&&(Y=Y.next={lane:0,revertLane:0,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),bt===jo&&(_t=!0);else if((mr&ct)===ct){ut=ut.next,ct===jo&&(_t=!0);continue}else bt={lane:0,revertLane:ut.revertLane,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},Y===null?(N=Y=bt,E=m):Y=Y.next=bt,be.lanes|=ct,os|=ct;bt=ut.action,eo&&s(m,bt),m=ut.hasEagerState?ut.eagerState:s(m,bt)}else ct={lane:bt,revertLane:ut.revertLane,gesture:ut.gesture,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},Y===null?(N=Y=ct,E=m):Y=Y.next=ct,be.lanes|=bt,os|=bt;ut=ut.next}while(ut!==null&&ut!==i);if(Y===null?E=m:Y.next=N,!Ki(m,e.memoizedState)&&(Gn=!0,_t&&(s=Ko,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=Y,u.lastRenderedState=m}return d===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function hp(e){var i=On(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var u=s.dispatch,d=s.pending,m=i.memoizedState;if(d!==null){s.pending=null;var E=d=d.next;do m=e(m,E.action),E=E.next;while(E!==d);Ki(m,i.memoizedState)||(Gn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function xx(e,i,s){var u=be,d=On(),m=Ve;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Ki((sn||d).memoizedState,s);if(E&&(d.memoizedState=s,Gn=!0),d=d.queue,mp(yx.bind(null,u,d,e),[e]),d.getSnapshot!==i||E||Hn!==null&&Hn.memoizedState.tag&1){if(u.flags|=2048,nl(9,{destroy:void 0},Sx.bind(null,u,d,s,i),null),pn===null)throw Error(a(349));m||(mr&127)!==0||vx(u,i,s)}return s}function vx(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=be.updateQueue,i===null?(i=_f(),be.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Sx(e,i,s,u){i.value=s,i.getSnapshot=u,bx(i)&&Mx(e)}function yx(e,i,s){return s(function(){bx(i)&&Mx(e)})}function bx(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Ki(e,s)}catch{return!0}}function Mx(e){var i=Ys(e,2);i!==null&&Gi(i,e,2)}function dp(e){var i=Ai();if(typeof e=="function"){var s=e;if(e=s(),eo){$t(!0);try{s()}finally{$t(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},i}function Ex(e,i,s,u){return e.baseState=s,fp(e,sn,typeof u=="function"?u:_r)}function FE(e,i,s,u,d){if(yf(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?s(!0):m.isTransition=!1,u(m),s=i.pending,s===null?(m.next=i.pending=m,Tx(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Tx(e,i){var s=i.action,u=i.payload,d=e.state;if(i.isTransition){var m=z.T,E={};z.T=E;try{var N=s(d,u),Y=z.S;Y!==null&&Y(E,N),Ax(e,i,N)}catch(ut){pp(e,i,ut)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=s(d,u),Ax(e,i,m)}catch(ut){pp(e,i,ut)}}function Ax(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){Rx(e,i,u)},function(u){return pp(e,i,u)}):Rx(e,i,s)}function Rx(e,i,s){i.status="fulfilled",i.value=s,Cx(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Tx(e,s)))}function pp(e,i,s){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,Cx(i),i=i.next;while(i!==u)}e.action=null}function Cx(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function wx(e,i){return i}function Dx(e,i){if(Ve){var s=pn.formState;if(s!==null){t:{var u=be;if(Ve){if(Mn){e:{for(var d=Mn,m=ya;d.nodeType!==8;){if(!m){d=null;break e}if(d=Ma(d.nextSibling),d===null){d=null;break e}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){Mn=Ma(d.nextSibling),u=d.data==="F!";break t}}Jr(u)}u=!1}u&&(i=s[0])}}return s=Ai(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wx,lastRenderedState:i},s.queue=u,s=jx.bind(null,be,u),u.dispatch=s,u=dp(!1),m=Sp.bind(null,be,!1,u.queue),u=Ai(),d={state:i,dispatch:null,action:e,pending:null},u.queue=d,s=FE.bind(null,be,d,m,s),d.dispatch=s,u.memoizedState=e,[i,s,!1]}function Ux(e){var i=On();return Lx(i,sn,e)}function Lx(e,i,s){if(i=fp(e,i,wx)[0],e=xf(_r)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Tu(i)}catch(E){throw E===Qo?lf:E}else u=i;i=On();var d=i.queue,m=d.dispatch;return s!==i.memoizedState&&(be.flags|=2048,nl(9,{destroy:void 0},BE.bind(null,d,s),null)),[u,m,e]}function BE(e,i){e.action=i}function Nx(e){var i=On(),s=sn;if(s!==null)return Lx(i,s,e);On(),i=i.memoizedState,s=On();var u=s.queue.dispatch;return s.memoizedState=e,[i,u,!1]}function nl(e,i,s,u){return e={tag:e,create:s,deps:u,inst:i,next:null},i=be.updateQueue,i===null&&(i=_f(),be.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(u=s.next,s.next=e,e.next=u,i.lastEffect=e),e}function Ox(){return On().memoizedState}function vf(e,i,s,u){var d=Ai();be.flags|=e,d.memoizedState=nl(1|i,{destroy:void 0},s,u===void 0?null:u)}function Sf(e,i,s,u){var d=On();u=u===void 0?null:u;var m=d.memoizedState.inst;sn!==null&&u!==null&&rp(u,sn.memoizedState.deps)?d.memoizedState=nl(i,m,s,u):(be.flags|=e,d.memoizedState=nl(1|i,m,s,u))}function Px(e,i){vf(8390656,8,e,i)}function mp(e,i){Sf(2048,8,e,i)}function IE(e){be.flags|=4;var i=be.updateQueue;if(i===null)i=_f(),be.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function zx(e){var i=On().memoizedState;return IE({ref:i,nextImpl:e}),function(){if(($e&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Fx(e,i){return Sf(4,2,e,i)}function Bx(e,i){return Sf(4,4,e,i)}function Ix(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Hx(e,i,s){s=s!=null?s.concat([e]):null,Sf(4,4,Ix.bind(null,i,e),s)}function _p(){}function Gx(e,i){var s=On();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&rp(i,u[1])?u[0]:(s.memoizedState=[e,i],e)}function Vx(e,i){var s=On();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&rp(i,u[1]))return u[0];if(u=e(),eo){$t(!0);try{e()}finally{$t(!1)}}return s.memoizedState=[u,i],u}function gp(e,i,s){return s===void 0||(mr&1073741824)!==0&&(Be&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=kv(),be.lanes|=e,os|=e,s)}function kx(e,i,s,u){return Ki(s,i)?s:$o.current!==null?(e=gp(e,s,u),Ki(e,i)||(Gn=!0),e):(mr&42)===0||(mr&1073741824)!==0&&(Be&261930)===0?(Gn=!0,e.memoizedState=s):(e=kv(),be.lanes|=e,os|=e,i)}function Xx(e,i,s,u,d){var m=k.p;k.p=m!==0&&8>m?m:8;var E=z.T,N={};z.T=N,Sp(e,!1,i,s);try{var Y=d(),ut=z.S;if(ut!==null&&ut(N,Y),Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var _t=OE(Y,u);Au(e,i,_t,na(e))}else Au(e,i,u,na(e))}catch(bt){Au(e,i,{then:function(){},status:"rejected",reason:bt},na())}finally{k.p=m,E!==null&&N.types!==null&&(E.types=N.types),z.T=E}}function HE(){}function xp(e,i,s,u){if(e.tag!==5)throw Error(a(476));var d=Wx(e).queue;Xx(e,d,i,q,s===null?HE:function(){return Yx(e),s(u)})}function Wx(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Yx(e){var i=Wx(e);i.next===null&&(i=e.alternate.memoizedState),Au(e,i.next.queue,{},na())}function vp(){return hi(ku)}function qx(){return On().memoizedState}function Zx(){return On().memoizedState}function GE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=na();e=es(s);var u=ns(i,e,s);u!==null&&(Gi(u,i,s),yu(u,i,s)),i={cache:Zd()},e.payload=i;return}i=i.return}}function VE(e,i,s){var u=na();s={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yf(e)?Kx(i,s):(s=Fd(e,i,s,u),s!==null&&(Gi(s,e,u),Qx(s,i,u)))}function jx(e,i,s){var u=na();Au(e,i,s,u)}function Au(e,i,s,u){var d={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(yf(e))Kx(i,d);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,N=m(E,s);if(d.hasEagerState=!0,d.eagerState=N,Ki(N,E))return tf(e,i,d,0),pn===null&&$c(),!1}catch{}finally{}if(s=Fd(e,i,d,u),s!==null)return Gi(s,e,u),Qx(s,i,u),!0}return!1}function Sp(e,i,s,u){if(u={lane:2,revertLane:Jp(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},yf(e)){if(i)throw Error(a(479))}else i=Fd(e,s,u,2),i!==null&&Gi(i,e,2)}function yf(e){var i=e.alternate;return e===be||i!==null&&i===be}function Kx(e,i){tl=pf=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Qx(e,i,s){if((s&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,me(e,s)}}var Ru={readContext:hi,use:gf,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useLayoutEffect:Dn,useInsertionEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useSyncExternalStore:Dn,useId:Dn,useHostTransitionStatus:Dn,useFormState:Dn,useActionState:Dn,useOptimistic:Dn,useMemoCache:Dn,useCacheRefresh:Dn};Ru.useEffectEvent=Dn;var Jx={readContext:hi,use:gf,useCallback:function(e,i){return Ai().memoizedState=[e,i===void 0?null:i],e},useContext:hi,useEffect:Px,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,vf(4194308,4,Ix.bind(null,i,e),s)},useLayoutEffect:function(e,i){return vf(4194308,4,e,i)},useInsertionEffect:function(e,i){vf(4,2,e,i)},useMemo:function(e,i){var s=Ai();i=i===void 0?null:i;var u=e();if(eo){$t(!0);try{e()}finally{$t(!1)}}return s.memoizedState=[u,i],u},useReducer:function(e,i,s){var u=Ai();if(s!==void 0){var d=s(i);if(eo){$t(!0);try{s(i)}finally{$t(!1)}}}else d=i;return u.memoizedState=u.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},u.queue=e,e=e.dispatch=VE.bind(null,be,e),[u.memoizedState,e]},useRef:function(e){var i=Ai();return e={current:e},i.memoizedState=e},useState:function(e){e=dp(e);var i=e.queue,s=jx.bind(null,be,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:_p,useDeferredValue:function(e,i){var s=Ai();return gp(s,e,i)},useTransition:function(){var e=dp(!1);return e=Xx.bind(null,be,e.queue,!0,!1),Ai().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var u=be,d=Ai();if(Ve){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),pn===null)throw Error(a(349));(Be&127)!==0||vx(u,i,s)}d.memoizedState=s;var m={value:s,getSnapshot:i};return d.queue=m,Px(yx.bind(null,u,m,e),[e]),u.flags|=2048,nl(9,{destroy:void 0},Sx.bind(null,u,m,s,i),null),s},useId:function(){var e=Ai(),i=pn.identifierPrefix;if(Ve){var s=qa,u=Ya;s=(u&~(1<<32-Zt(u)-1)).toString(32)+s,i="_"+i+"R_"+s,s=mf++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=PE++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:vp,useFormState:Dx,useActionState:Dx,useOptimistic:function(e){var i=Ai();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Sp.bind(null,be,!0,s),s.dispatch=i,[e,i]},useMemoCache:cp,useCacheRefresh:function(){return Ai().memoizedState=GE.bind(null,be)},useEffectEvent:function(e){var i=Ai(),s={impl:e};return i.memoizedState=s,function(){if(($e&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},yp={readContext:hi,use:gf,useCallback:Gx,useContext:hi,useEffect:mp,useImperativeHandle:Hx,useInsertionEffect:Fx,useLayoutEffect:Bx,useMemo:Vx,useReducer:xf,useRef:Ox,useState:function(){return xf(_r)},useDebugValue:_p,useDeferredValue:function(e,i){var s=On();return kx(s,sn.memoizedState,e,i)},useTransition:function(){var e=xf(_r)[0],i=On().memoizedState;return[typeof e=="boolean"?e:Tu(e),i]},useSyncExternalStore:xx,useId:qx,useHostTransitionStatus:vp,useFormState:Ux,useActionState:Ux,useOptimistic:function(e,i){var s=On();return Ex(s,sn,e,i)},useMemoCache:cp,useCacheRefresh:Zx};yp.useEffectEvent=zx;var $x={readContext:hi,use:gf,useCallback:Gx,useContext:hi,useEffect:mp,useImperativeHandle:Hx,useInsertionEffect:Fx,useLayoutEffect:Bx,useMemo:Vx,useReducer:hp,useRef:Ox,useState:function(){return hp(_r)},useDebugValue:_p,useDeferredValue:function(e,i){var s=On();return sn===null?gp(s,e,i):kx(s,sn.memoizedState,e,i)},useTransition:function(){var e=hp(_r)[0],i=On().memoizedState;return[typeof e=="boolean"?e:Tu(e),i]},useSyncExternalStore:xx,useId:qx,useHostTransitionStatus:vp,useFormState:Nx,useActionState:Nx,useOptimistic:function(e,i){var s=On();return sn!==null?Ex(s,sn,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:cp,useCacheRefresh:Zx};$x.useEffectEvent=zx;function bp(e,i,s,u){i=e.memoizedState,s=s(u,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Mp={enqueueSetState:function(e,i,s){e=e._reactInternals;var u=na(),d=es(u);d.payload=i,s!=null&&(d.callback=s),i=ns(e,d,u),i!==null&&(Gi(i,e,u),yu(i,e,u))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var u=na(),d=es(u);d.tag=1,d.payload=i,s!=null&&(d.callback=s),i=ns(e,d,u),i!==null&&(Gi(i,e,u),yu(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=na(),u=es(s);u.tag=2,i!=null&&(u.callback=i),i=ns(e,u,s),i!==null&&(Gi(i,e,s),yu(i,e,s))}};function tv(e,i,s,u,d,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!du(s,u)||!du(d,m):!0}function ev(e,i,s,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==e&&Mp.enqueueReplaceState(i,i.state,null)}function no(e,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function nv(e){Jc(e)}function iv(e){console.error(e)}function av(e){Jc(e)}function bf(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function rv(e,i,s){try{var u=e.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Ep(e,i,s){return s=es(s),s.tag=3,s.payload={element:null},s.callback=function(){bf(e,i)},s}function sv(e){return e=es(e),e.tag=3,e}function ov(e,i,s,u){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;e.payload=function(){return d(m)},e.callback=function(){rv(i,s,u)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){rv(i,s,u),typeof d!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function kE(e,i,s,u,d){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&Zo(i,s,d,!0),s=Ji.current,s!==null){switch(s.tag){case 31:case 13:return ba===null?Of():s.alternate===null&&Un===0&&(Un=3),s.flags&=-257,s.flags|=65536,s.lanes=d,u===uf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),jp(e,u,d)),!1;case 22:return s.flags|=65536,u===uf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),jp(e,u,d)),!1}throw Error(a(435,s.tag))}return jp(e,u,d),Of(),!1}if(Ve)return i=Ji.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=d,u!==kd&&(e=Error(a(422),{cause:u}),_u(xa(e,s)))):(u!==kd&&(i=Error(a(423),{cause:u}),_u(xa(i,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,u=xa(u,s),d=Ep(e.stateNode,u,d),tp(e,d),Un!==4&&(Un=2)),!1;var m=Error(a(520),{cause:u});if(m=xa(m,s),Pu===null?Pu=[m]:Pu.push(m),Un!==4&&(Un=2),i===null)return!0;u=xa(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=Ep(s.stateNode,u,e),tp(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ls===null||!ls.has(m))))return s.flags|=65536,d&=-d,s.lanes|=d,d=sv(d),ov(d,e,s,u),tp(s,d),!1}s=s.return}while(s!==null);return!1}var Tp=Error(a(461)),Gn=!1;function di(e,i,s,u){i.child=e===null?fx(i,null,s,u):to(i,e.child,s,u)}function lv(e,i,s,u,d){s=s.render;var m=i.ref;if("ref"in u){var E={};for(var N in u)N!=="ref"&&(E[N]=u[N])}else E=u;return Ks(i),u=sp(e,i,s,E,m,d),N=op(),e!==null&&!Gn?(lp(e,i,d),gr(e,i,d)):(Ve&&N&&Gd(i),i.flags|=1,di(e,i,u,d),i.child)}function uv(e,i,s,u,d){if(e===null){var m=s.type;return typeof m=="function"&&!Bd(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,cv(e,i,m,u,d)):(e=nf(s.type,null,u,i,i.mode,d),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Np(e,d)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:du,s(E,u)&&e.ref===i.ref)return gr(e,i,d)}return i.flags|=1,e=fr(m,u),e.ref=i.ref,e.return=i,i.child=e}function cv(e,i,s,u,d){if(e!==null){var m=e.memoizedProps;if(du(m,u)&&e.ref===i.ref)if(Gn=!1,i.pendingProps=u=m,Np(e,d))(e.flags&131072)!==0&&(Gn=!0);else return i.lanes=e.lanes,gr(e,i,d)}return Ap(e,i,s,u,d)}function fv(e,i,s,u){var d=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~m}else u=0,i.child=null;return hv(e,i,m,s,u)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&of(i,m!==null?m.cachePool:null),m!==null?px(i,m):np(),mx(i);else return u=i.lanes=536870912,hv(e,i,m!==null?m.baseLanes|s:s,s,u)}else m!==null?(of(i,m.cachePool),px(i,m),as(),i.memoizedState=null):(e!==null&&of(i,null),np(),as());return di(e,i,d,s),i.child}function Cu(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function hv(e,i,s,u,d){var m=Kd();return m=m===null?null:{parent:In._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&of(i,null),np(),mx(i),e!==null&&Zo(e,i,u,!0),i.childLanes=d,null}function Mf(e,i){return i=Tf({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function dv(e,i,s){return to(i,e.child,null,s),e=Mf(i,i.pendingProps),e.flags|=2,$i(i),i.memoizedState=null,e}function XE(e,i,s){var u=i.pendingProps,d=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ve){if(u.mode==="hidden")return e=Mf(i,u),i.lanes=536870912,Cu(null,e);if(ap(i),(e=Mn)?(e=TS(e,ya),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Kr!==null?{id:Ya,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},s=Kg(e),s.return=i,i.child=s,fi=i,Mn=null)):e=null,e===null)throw Jr(i);return i.lanes=536870912,null}return Mf(i,u)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(ap(i),d)if(i.flags&256)i.flags&=-257,i=dv(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Gn||Zo(e,i,s,!1),d=(s&e.childLanes)!==0,Gn||d){if(u=pn,u!==null&&(E=ae(u,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,Ys(e,E),Gi(u,e,E),Tp;Of(),i=dv(e,i,s)}else e=m.treeContext,Mn=Ma(E.nextSibling),fi=i,Ve=!0,Qr=null,ya=!1,e!==null&&$g(i,e),i=Mf(i,u),i.flags|=4096;return i}return e=fr(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Ef(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Ap(e,i,s,u,d){return Ks(i),s=sp(e,i,s,u,void 0,d),u=op(),e!==null&&!Gn?(lp(e,i,d),gr(e,i,d)):(Ve&&u&&Gd(i),i.flags|=1,di(e,i,s,d),i.child)}function pv(e,i,s,u,d,m){return Ks(i),i.updateQueue=null,s=gx(i,u,s,d),_x(e),u=op(),e!==null&&!Gn?(lp(e,i,m),gr(e,i,m)):(Ve&&u&&Gd(i),i.flags|=1,di(e,i,s,m),i.child)}function mv(e,i,s,u,d){if(Ks(i),i.stateNode===null){var m=Xo,E=s.contextType;typeof E=="object"&&E!==null&&(m=hi(E)),m=new s(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Mp,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},Jd(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?hi(E):Xo,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(bp(i,s,E,u),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Mp.enqueueReplaceState(m,m.state,null),Mu(i,u,m,d),bu(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var N=i.memoizedProps,Y=no(s,N);m.props=Y;var ut=m.context,_t=s.contextType;E=Xo,typeof _t=="object"&&_t!==null&&(E=hi(_t));var bt=s.getDerivedStateFromProps;_t=typeof bt=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,_t||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||ut!==E)&&ev(i,m,u,E),ts=!1;var ct=i.memoizedState;m.state=ct,Mu(i,u,m,d),bu(),ut=i.memoizedState,N||ct!==ut||ts?(typeof bt=="function"&&(bp(i,s,bt,u),ut=i.memoizedState),(Y=ts||tv(i,s,Y,u,ct,ut,E))?(_t||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=ut),m.props=u,m.state=ut,m.context=E,u=Y):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,$d(e,i),E=i.memoizedProps,_t=no(s,E),m.props=_t,bt=i.pendingProps,ct=m.context,ut=s.contextType,Y=Xo,typeof ut=="object"&&ut!==null&&(Y=hi(ut)),N=s.getDerivedStateFromProps,(ut=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==bt||ct!==Y)&&ev(i,m,u,Y),ts=!1,ct=i.memoizedState,m.state=ct,Mu(i,u,m,d),bu();var dt=i.memoizedState;E!==bt||ct!==dt||ts||e!==null&&e.dependencies!==null&&rf(e.dependencies)?(typeof N=="function"&&(bp(i,s,N,u),dt=i.memoizedState),(_t=ts||tv(i,s,_t,u,ct,dt,Y)||e!==null&&e.dependencies!==null&&rf(e.dependencies))?(ut||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,dt,Y),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,dt,Y)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=dt),m.props=u,m.state=dt,m.context=Y,u=_t):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,Ef(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=to(i,e.child,null,d),i.child=to(i,null,s,d)):di(e,i,s,d),i.memoizedState=m.state,e=i.child):e=gr(e,i,d),e}function _v(e,i,s,u){return Zs(),i.flags|=256,di(e,i,s,u),i.child}var Rp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cp(e){return{baseLanes:e,cachePool:rx()}}function wp(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ea),e}function gv(e,i,s){var u=i.pendingProps,d=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),E&&(d=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ve){if(d?is(i):as(),(e=Mn)?(e=TS(e,ya),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Kr!==null?{id:Ya,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},s=Kg(e),s.return=i,i.child=s,fi=i,Mn=null)):e=null,e===null)throw Jr(i);return f0(e)?i.lanes=32:i.lanes=536870912,null}var N=u.children;return u=u.fallback,d?(as(),d=i.mode,N=Tf({mode:"hidden",children:N},d),u=qs(u,d,s,null),N.return=i,u.return=i,N.sibling=u,i.child=N,u=i.child,u.memoizedState=Cp(s),u.childLanes=wp(e,E,s),i.memoizedState=Rp,Cu(null,u)):(is(i),Dp(i,N))}var Y=e.memoizedState;if(Y!==null&&(N=Y.dehydrated,N!==null)){if(m)i.flags&256?(is(i),i.flags&=-257,i=Up(e,i,s)):i.memoizedState!==null?(as(),i.child=e.child,i.flags|=128,i=null):(as(),N=u.fallback,d=i.mode,u=Tf({mode:"visible",children:u.children},d),N=qs(N,d,s,null),N.flags|=2,u.return=i,N.return=i,u.sibling=N,i.child=u,to(i,e.child,null,s),u=i.child,u.memoizedState=Cp(s),u.childLanes=wp(e,E,s),i.memoizedState=Rp,i=Cu(null,u));else if(is(i),f0(N)){if(E=N.nextSibling&&N.nextSibling.dataset,E)var ut=E.dgst;E=ut,u=Error(a(419)),u.stack="",u.digest=E,_u({value:u,source:null,stack:null}),i=Up(e,i,s)}else if(Gn||Zo(e,i,s,!1),E=(s&e.childLanes)!==0,Gn||E){if(E=pn,E!==null&&(u=ae(E,s),u!==0&&u!==Y.retryLane))throw Y.retryLane=u,Ys(e,u),Gi(E,e,u),Tp;c0(N)||Of(),i=Up(e,i,s)}else c0(N)?(i.flags|=192,i.child=e.child,i=null):(e=Y.treeContext,Mn=Ma(N.nextSibling),fi=i,Ve=!0,Qr=null,ya=!1,e!==null&&$g(i,e),i=Dp(i,u.children),i.flags|=4096);return i}return d?(as(),N=u.fallback,d=i.mode,Y=e.child,ut=Y.sibling,u=fr(Y,{mode:"hidden",children:u.children}),u.subtreeFlags=Y.subtreeFlags&65011712,ut!==null?N=fr(ut,N):(N=qs(N,d,s,null),N.flags|=2),N.return=i,u.return=i,u.sibling=N,i.child=u,Cu(null,u),u=i.child,N=e.child.memoizedState,N===null?N=Cp(s):(d=N.cachePool,d!==null?(Y=In._currentValue,d=d.parent!==Y?{parent:Y,pool:Y}:d):d=rx(),N={baseLanes:N.baseLanes|s,cachePool:d}),u.memoizedState=N,u.childLanes=wp(e,E,s),i.memoizedState=Rp,Cu(e.child,u)):(is(i),s=e.child,e=s.sibling,s=fr(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function Dp(e,i){return i=Tf({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Tf(e,i){return e=Qi(22,e,null,i),e.lanes=0,e}function Up(e,i,s){return to(i,e.child,null,s),e=Dp(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function xv(e,i,s){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),Yd(e.return,i,s)}function Lp(e,i,s,u,d,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:d,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=s,E.tailMode=d,E.treeForkCount=m)}function vv(e,i,s){var u=i.pendingProps,d=u.revealOrder,m=u.tail;u=u.children;var E=Nn.current,N=(E&2)!==0;if(N?(E=E&1|2,i.flags|=128):E&=1,xt(Nn,E),di(e,i,u,s),u=Ve?mu:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xv(e,s,i);else if(e.tag===19)xv(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=i.child,d=null;s!==null;)e=s.alternate,e!==null&&df(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Lp(i,!1,d,s,m,u);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(e=d.alternate,e!==null&&df(e)===null){i.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Lp(i,!0,s,null,m,u);break;case"together":Lp(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function gr(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),os|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(Zo(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=fr(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=fr(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Np(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&rf(e)))}function WE(e,i,s){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),$r(i,In,e.memoizedState.cache),Zs();break;case 27:case 5:Ft(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:$r(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ap(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(is(i),i.flags|=128,null):(s&i.child.childLanes)!==0?gv(e,i,s):(is(i),e=gr(e,i,s),e!==null?e.sibling:null);is(i);break;case 19:var d=(e.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||(Zo(e,i,s,!1),u=(s&i.childLanes)!==0),d){if(u)return vv(e,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),xt(Nn,Nn.current),u)break;return null;case 22:return i.lanes=0,fv(e,i,s,i.pendingProps);case 24:$r(i,In,e.memoizedState.cache)}return gr(e,i,s)}function Sv(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)Gn=!0;else{if(!Np(e,s)&&(i.flags&128)===0)return Gn=!1,WE(e,i,s);Gn=(e.flags&131072)!==0}else Gn=!1,Ve&&(i.flags&1048576)!==0&&Jg(i,mu,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=Js(i.elementType),i.type=e,typeof e=="function")Bd(e)?(u=no(e,u),i.tag=1,i=mv(null,i,e,u,s)):(i.tag=0,i=Ap(null,i,e,u,s));else{if(e!=null){var d=e.$$typeof;if(d===U){i.tag=11,i=lv(null,i,e,u,s);break t}else if(d===D){i.tag=14,i=uv(null,i,e,u,s);break t}}throw i=at(e)||e,Error(a(306,i,""))}}return i;case 0:return Ap(e,i,i.type,i.pendingProps,s);case 1:return u=i.type,d=no(u,i.pendingProps),mv(e,i,u,d,s);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;d=m.element,$d(e,i),Mu(i,u,null,s);var E=i.memoizedState;if(u=E.cache,$r(i,In,u),u!==m.cache&&qd(i,[In],s,!0),bu(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=_v(e,i,u,s);break t}else if(u!==d){d=xa(Error(a(424)),i),_u(d),i=_v(e,i,u,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Mn=Ma(e.firstChild),fi=i,Ve=!0,Qr=null,ya=!0,s=fx(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Zs(),u===d){i=gr(e,i,s);break t}di(e,i,u,s)}i=i.child}return i;case 26:return Ef(e,i),e===null?(s=US(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ve||(s=i.type,e=i.pendingProps,u=Gf(et.current).createElement(s),u[ye]=i,u[ve]=e,pi(u,s,e),tt(u),i.stateNode=u):i.memoizedState=US(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ft(i),e===null&&Ve&&(u=i.stateNode=CS(i.type,i.pendingProps,et.current),fi=i,ya=!0,d=Mn,hs(i.type)?(h0=d,Mn=Ma(u.firstChild)):Mn=d),di(e,i,i.pendingProps.children,s),Ef(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ve&&((d=u=Mn)&&(u=yT(u,i.type,i.pendingProps,ya),u!==null?(i.stateNode=u,fi=i,Mn=Ma(u.firstChild),ya=!1,d=!0):d=!1),d||Jr(i)),Ft(i),d=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,u=m.children,o0(d,m)?u=null:E!==null&&o0(d,E)&&(i.flags|=32),i.memoizedState!==null&&(d=sp(e,i,zE,null,null,s),ku._currentValue=d),Ef(e,i),di(e,i,u,s),i.child;case 6:return e===null&&Ve&&((e=s=Mn)&&(s=bT(s,i.pendingProps,ya),s!==null?(i.stateNode=s,fi=i,Mn=null,e=!0):e=!1),e||Jr(i)),null;case 13:return gv(e,i,s);case 4:return At(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=to(i,null,u,s):di(e,i,u,s),i.child;case 11:return lv(e,i,i.type,i.pendingProps,s);case 7:return di(e,i,i.pendingProps,s),i.child;case 8:return di(e,i,i.pendingProps.children,s),i.child;case 12:return di(e,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,$r(i,i.type,u.value),di(e,i,u.children,s),i.child;case 9:return d=i.type._context,u=i.pendingProps.children,Ks(i),d=hi(d),u=u(d),i.flags|=1,di(e,i,u,s),i.child;case 14:return uv(e,i,i.type,i.pendingProps,s);case 15:return cv(e,i,i.type,i.pendingProps,s);case 19:return vv(e,i,s);case 31:return XE(e,i,s);case 22:return fv(e,i,s,i.pendingProps);case 24:return Ks(i),u=hi(In),e===null?(d=Kd(),d===null&&(d=pn,m=Zd(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=s),d=m),i.memoizedState={parent:u,cache:d},Jd(i),$r(i,In,d)):((e.lanes&s)!==0&&($d(e,i),Mu(i,null,null,s),bu()),d=e.memoizedState,m=i.memoizedState,d.parent!==u?(d={parent:u,cache:u},i.memoizedState=d,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=d),$r(i,In,u)):(u=m.cache,$r(i,In,u),u!==d.cache&&qd(i,[In],s,!0))),di(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function xr(e){e.flags|=4}function Op(e,i,s,u,d){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(qv())e.flags|=8192;else throw $s=uf,Qd}else e.flags&=-16777217}function yv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zS(i))if(qv())e.flags|=8192;else throw $s=uf,Qd}function Af(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?We():536870912,e.lanes|=i,sl|=i)}function wu(e,i){if(!Ve)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function En(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,u=0;if(i)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=u,e.childLanes=s,i}function YE(e,i,s){var u=i.pendingProps;switch(Vd(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return En(i),null;case 3:return s=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),pr(In),Nt(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(qo(i)?xr(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xd())),En(i),null;case 26:var d=i.type,m=i.memoizedState;return e===null?(xr(i),m!==null?(En(i),yv(i,m)):(En(i),Op(i,d,null,u,s))):m?m!==e.memoizedState?(xr(i),En(i),yv(i,m)):(En(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&xr(i),En(i),Op(i,d,e,u,s)),null;case 27:if(qt(i),s=et.current,d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&xr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return En(i),null}e=St.current,qo(i)?tx(i):(e=CS(d,u,s),i.stateNode=e,xr(i))}return En(i),null;case 5:if(qt(i),d=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&xr(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return En(i),null}if(m=St.current,qo(i))tx(i);else{var E=Gf(et.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?E.createElement(d,{is:u.is}):E.createElement(d)}}m[ye]=i,m[ve]=u;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(pi(m,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&xr(i)}}return En(i),Op(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&xr(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=et.current,qo(i)){if(e=i.stateNode,s=i.memoizedProps,u=null,d=fi,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}e[ye]=i,e=!!(e.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||gS(e.nodeValue,s)),e||Jr(i,!0)}else e=Gf(e).createTextNode(u),e[ye]=i,i.stateNode=e}return En(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(u=qo(i),s!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[ye]=i}else Zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),e=!1}else s=Xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?($i(i),i):($i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return En(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=qo(i),u!==null&&u.dehydrated!==null){if(e===null){if(!d)throw Error(a(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(a(317));d[ye]=i}else Zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),d=!1}else d=Xd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return i.flags&256?($i(i),i):($i(i),null)}return $i(i),(i.flags&128)!==0?(i.lanes=s,i):(s=u!==null,e=e!==null&&e.memoizedState!==null,s&&(u=i.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Af(i,i.updateQueue),En(i),null);case 4:return Nt(),e===null&&n0(i.stateNode.containerInfo),En(i),null;case 10:return pr(i.type),En(i),null;case 19:if(rt(Nn),u=i.memoizedState,u===null)return En(i),null;if(d=(i.flags&128)!==0,m=u.rendering,m===null)if(d)wu(u,!1);else{if(Un!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=df(e),m!==null){for(i.flags|=128,wu(u,!1),e=m.updateQueue,i.updateQueue=e,Af(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)jg(s,e),s=s.sibling;return xt(Nn,Nn.current&1|2),Ve&&hr(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&R()>Uf&&(i.flags|=128,d=!0,wu(u,!1),i.lanes=4194304)}else{if(!d)if(e=df(m),e!==null){if(i.flags|=128,d=!0,e=e.updateQueue,i.updateQueue=e,Af(i,e),wu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Ve)return En(i),null}else 2*R()-u.renderingStartTime>Uf&&s!==536870912&&(i.flags|=128,d=!0,wu(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=R(),e.sibling=null,s=Nn.current,xt(Nn,d?s&1|2:s&1),Ve&&hr(i,u.treeForkCount),e):(En(i),null);case 22:case 23:return $i(i),ip(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),s=i.updateQueue,s!==null&&Af(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),e!==null&&rt(Qs),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),pr(In),En(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function qE(e,i){switch(Vd(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return pr(In),Nt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return qt(i),null;case 31:if(i.memoizedState!==null){if($i(i),i.alternate===null)throw Error(a(340));Zs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if($i(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Zs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return rt(Nn),null;case 4:return Nt(),null;case 10:return pr(i.type),null;case 22:case 23:return $i(i),ip(),e!==null&&rt(Qs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return pr(In),null;case 25:return null;default:return null}}function bv(e,i){switch(Vd(i),i.tag){case 3:pr(In),Nt();break;case 26:case 27:case 5:qt(i);break;case 4:Nt();break;case 31:i.memoizedState!==null&&$i(i);break;case 13:$i(i);break;case 19:rt(Nn);break;case 10:pr(i.type);break;case 22:case 23:$i(i),ip(),e!==null&&rt(Qs);break;case 24:pr(In)}}function Du(e,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var d=u.next;s=d;do{if((s.tag&e)===e){u=void 0;var m=s.create,E=s.inst;u=m(),E.destroy=u}s=s.next}while(s!==d)}}catch(N){rn(i,i.return,N)}}function rs(e,i,s){try{var u=i.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&e)===e){var E=u.inst,N=E.destroy;if(N!==void 0){E.destroy=void 0,d=i;var Y=s,ut=N;try{ut()}catch(_t){rn(d,Y,_t)}}}u=u.next}while(u!==m)}}catch(_t){rn(i,i.return,_t)}}function Mv(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{dx(i,s)}catch(u){rn(e,e.return,u)}}}function Ev(e,i,s){s.props=no(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(u){rn(e,i,u)}}function Uu(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(d){rn(e,i,d)}}function Za(e,i){var s=e.ref,u=e.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(d){rn(e,i,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){rn(e,i,d)}else s.current=null}function Tv(e){var i=e.type,s=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(d){rn(e,e.return,d)}}function Pp(e,i,s){try{var u=e.stateNode;mT(u,e.type,s,i),u[ve]=i}catch(d){rn(e,e.return,d)}}function Av(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hs(e.type)||e.tag===4}function zp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Av(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fp(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ur));else if(u!==4&&(u===27&&hs(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Fp(e,i,s),e=e.sibling;e!==null;)Fp(e,i,s),e=e.sibling}function Rf(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(u!==4&&(u===27&&hs(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(Rf(e,i,s),e=e.sibling;e!==null;)Rf(e,i,s),e=e.sibling}function Rv(e){var i=e.stateNode,s=e.memoizedProps;try{for(var u=e.type,d=i.attributes;d.length;)i.removeAttributeNode(d[0]);pi(i,u,s),i[ye]=e,i[ve]=s}catch(m){rn(e,e.return,m)}}var vr=!1,Vn=!1,Bp=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,ai=null;function ZE(e,i){if(e=e.containerInfo,r0=Zf,e=Hg(e),Ud(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,N=-1,Y=-1,ut=0,_t=0,bt=e,ct=null;e:for(;;){for(var dt;bt!==s||d!==0&&bt.nodeType!==3||(N=E+d),bt!==m||u!==0&&bt.nodeType!==3||(Y=E+u),bt.nodeType===3&&(E+=bt.nodeValue.length),(dt=bt.firstChild)!==null;)ct=bt,bt=dt;for(;;){if(bt===e)break e;if(ct===s&&++ut===d&&(N=E),ct===m&&++_t===u&&(Y=E),(dt=bt.nextSibling)!==null)break;bt=ct,ct=bt.parentNode}bt=dt}s=N===-1||Y===-1?null:{start:N,end:Y}}else s=null}s=s||{start:0,end:0}}else s=null;for(s0={focusedElem:e,selectionRange:s},Zf=!1,ai=i;ai!==null;)if(i=ai,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,ai=e;else for(;ai!==null;){switch(i=ai,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,d=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var Qt=no(s.type,d);e=u.getSnapshotBeforeUpdate(Qt,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(pe){rn(s,s.return,pe)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)u0(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":u0(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,ai=e;break}ai=i.return}}function wv(e,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:yr(e,s),u&4&&Du(5,s);break;case 1:if(yr(e,s),u&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){rn(s,s.return,E)}else{var d=no(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(d,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){rn(s,s.return,E)}}u&64&&Mv(s),u&512&&Uu(s,s.return);break;case 3:if(yr(e,s),u&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{dx(e,i)}catch(E){rn(s,s.return,E)}}break;case 27:i===null&&u&4&&Rv(s);case 26:case 5:yr(e,s),i===null&&u&4&&Tv(s),u&512&&Uu(s,s.return);break;case 12:yr(e,s);break;case 31:yr(e,s),u&4&&Lv(e,s);break;case 13:yr(e,s),u&4&&Nv(e,s),u&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=iT.bind(null,s),MT(e,s))));break;case 22:if(u=s.memoizedState!==null||vr,!u){i=i!==null&&i.memoizedState!==null||Vn,d=vr;var m=Vn;vr=u,(Vn=i)&&!m?br(e,s,(s.subtreeFlags&8772)!==0):yr(e,s),vr=d,Vn=m}break;case 30:break;default:yr(e,s)}}function Dv(e){var i=e.alternate;i!==null&&(e.alternate=null,Dv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Rn(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Tn=null,Fi=!1;function Sr(e,i,s){for(s=s.child;s!==null;)Uv(e,i,s),s=s.sibling}function Uv(e,i,s){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Et,s)}catch{}switch(s.tag){case 26:Vn||Za(s,i),Sr(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Vn||Za(s,i);var u=Tn,d=Fi;hs(s.type)&&(Tn=s.stateNode,Fi=!1),Sr(e,i,s),Hu(s.stateNode),Tn=u,Fi=d;break;case 5:Vn||Za(s,i);case 6:if(u=Tn,d=Fi,Tn=null,Sr(e,i,s),Tn=u,Fi=d,Tn!==null)if(Fi)try{(Tn.nodeType===9?Tn.body:Tn.nodeName==="HTML"?Tn.ownerDocument.body:Tn).removeChild(s.stateNode)}catch(m){rn(s,i,m)}else try{Tn.removeChild(s.stateNode)}catch(m){rn(s,i,m)}break;case 18:Tn!==null&&(Fi?(e=Tn,MS(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),pl(e)):MS(Tn,s.stateNode));break;case 4:u=Tn,d=Fi,Tn=s.stateNode.containerInfo,Fi=!0,Sr(e,i,s),Tn=u,Fi=d;break;case 0:case 11:case 14:case 15:rs(2,s,i),Vn||rs(4,s,i),Sr(e,i,s);break;case 1:Vn||(Za(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&Ev(s,i,u)),Sr(e,i,s);break;case 21:Sr(e,i,s);break;case 22:Vn=(u=Vn)||s.memoizedState!==null,Sr(e,i,s),Vn=u;break;default:Sr(e,i,s)}}function Lv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pl(e)}catch(s){rn(i,i.return,s)}}}function Nv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pl(e)}catch(s){rn(i,i.return,s)}}function jE(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Cv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Cv),i;default:throw Error(a(435,e.tag))}}function Cf(e,i){var s=jE(e);i.forEach(function(u){if(!s.has(u)){s.add(u);var d=aT.bind(null,e,u);u.then(d,d)}})}function Bi(e,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var d=s[u],m=e,E=i,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(hs(N.type)){Tn=N.stateNode,Fi=!1;break t}break;case 5:Tn=N.stateNode,Fi=!1;break t;case 3:case 4:Tn=N.stateNode.containerInfo,Fi=!0;break t}N=N.return}if(Tn===null)throw Error(a(160));Uv(m,E,d),Tn=null,Fi=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ov(i,e),i=i.sibling}var za=null;function Ov(e,i){var s=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bi(i,e),Ii(e),u&4&&(rs(3,e,e.return),Du(3,e),rs(5,e,e.return));break;case 1:Bi(i,e),Ii(e),u&512&&(Vn||s===null||Za(s,s.return)),u&64&&vr&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var d=za;if(Bi(i,e),Ii(e),u&512&&(Vn||s===null||Za(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=e.memoizedState,s===null)if(u===null)if(e.stateNode===null){t:{u=e.type,s=e.memoizedProps,d=d.ownerDocument||d;e:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[yn]||m[ye]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),pi(m,u,s),m[ye]=e,tt(m),u=m;break t;case"link":var E=OS("link","href",d).get(u+(s.href||""));if(E){for(var N=0;N<E.length;N++)if(m=E[N],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(N,1);break e}}m=d.createElement(u),pi(m,u,s),d.head.appendChild(m);break;case"meta":if(E=OS("meta","content",d).get(u+(s.content||""))){for(N=0;N<E.length;N++)if(m=E[N],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(N,1);break e}}m=d.createElement(u),pi(m,u,s),d.head.appendChild(m);break;default:throw Error(a(468,u))}m[ye]=e,tt(m),u=m}e.stateNode=u}else PS(d,e.type,e.stateNode);else e.stateNode=NS(d,u,e.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?PS(d,e.type,e.stateNode):NS(d,u,e.memoizedProps)):u===null&&e.stateNode!==null&&Pp(e,e.memoizedProps,s.memoizedProps)}break;case 27:Bi(i,e),Ii(e),u&512&&(Vn||s===null||Za(s,s.return)),s!==null&&u&4&&Pp(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Bi(i,e),Ii(e),u&512&&(Vn||s===null||Za(s,s.return)),e.flags&32){d=e.stateNode;try{Wa(d,"")}catch(Qt){rn(e,e.return,Qt)}}u&4&&e.stateNode!=null&&(d=e.memoizedProps,Pp(e,d,s!==null?s.memoizedProps:d)),u&1024&&(Bp=!0);break;case 6:if(Bi(i,e),Ii(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,s=e.stateNode;try{s.nodeValue=u}catch(Qt){rn(e,e.return,Qt)}}break;case 3:if(Xf=null,d=za,za=Vf(i.containerInfo),Bi(i,e),za=d,Ii(e),u&4&&s!==null&&s.memoizedState.isDehydrated)try{pl(i.containerInfo)}catch(Qt){rn(e,e.return,Qt)}Bp&&(Bp=!1,Pv(e));break;case 4:u=za,za=Vf(e.stateNode.containerInfo),Bi(i,e),Ii(e),za=u;break;case 12:Bi(i,e),Ii(e);break;case 31:Bi(i,e),Ii(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Cf(e,u)));break;case 13:Bi(i,e),Ii(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Df=R()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Cf(e,u)));break;case 22:d=e.memoizedState!==null;var Y=s!==null&&s.memoizedState!==null,ut=vr,_t=Vn;if(vr=ut||d,Vn=_t||Y,Bi(i,e),Vn=_t,vr=ut,Ii(e),u&8192)t:for(i=e.stateNode,i._visibility=d?i._visibility&-2:i._visibility|1,d&&(s===null||Y||vr||Vn||io(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){Y=s=i;try{if(m=Y.stateNode,d)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{N=Y.stateNode;var bt=Y.memoizedProps.style,ct=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;N.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Qt){rn(Y,Y.return,Qt)}}}else if(i.tag===6){if(s===null){Y=i;try{Y.stateNode.nodeValue=d?"":Y.memoizedProps}catch(Qt){rn(Y,Y.return,Qt)}}}else if(i.tag===18){if(s===null){Y=i;try{var dt=Y.stateNode;d?ES(dt,!0):ES(Y.stateNode,!1)}catch(Qt){rn(Y,Y.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,Cf(e,s))));break;case 19:Bi(i,e),Ii(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,Cf(e,u)));break;case 30:break;case 21:break;default:Bi(i,e),Ii(e)}}function Ii(e){var i=e.flags;if(i&2){try{for(var s,u=e.return;u!==null;){if(Av(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var d=s.stateNode,m=zp(e);Rf(e,m,d);break;case 5:var E=s.stateNode;s.flags&32&&(Wa(E,""),s.flags&=-33);var N=zp(e);Rf(e,N,E);break;case 3:case 4:var Y=s.stateNode.containerInfo,ut=zp(e);Fp(e,ut,Y);break;default:throw Error(a(161))}}catch(_t){rn(e,e.return,_t)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Pv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Pv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function yr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)wv(e,i.alternate,i),i=i.sibling}function io(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:rs(4,i,i.return),io(i);break;case 1:Za(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ev(i,i.return,s),io(i);break;case 27:Hu(i.stateNode);case 26:case 5:Za(i,i.return),io(i);break;case 22:i.memoizedState===null&&io(i);break;case 30:io(i);break;default:io(i)}e=e.sibling}}function br(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,d=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:br(d,m,s),Du(4,m);break;case 1:if(br(d,m,s),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(ut){rn(u,u.return,ut)}if(u=m,d=u.updateQueue,d!==null){var N=u.stateNode;try{var Y=d.shared.hiddenCallbacks;if(Y!==null)for(d.shared.hiddenCallbacks=null,d=0;d<Y.length;d++)hx(Y[d],N)}catch(ut){rn(u,u.return,ut)}}s&&E&64&&Mv(m),Uu(m,m.return);break;case 27:Rv(m);case 26:case 5:br(d,m,s),s&&u===null&&E&4&&Tv(m),Uu(m,m.return);break;case 12:br(d,m,s);break;case 31:br(d,m,s),s&&E&4&&Lv(d,m);break;case 13:br(d,m,s),s&&E&4&&Nv(d,m);break;case 22:m.memoizedState===null&&br(d,m,s),Uu(m,m.return);break;case 30:break;default:br(d,m,s)}i=i.sibling}}function Ip(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&gu(s))}function Hp(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&gu(e))}function Fa(e,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)zv(e,i,s,u),i=i.sibling}function zv(e,i,s,u){var d=i.flags;switch(i.tag){case 0:case 11:case 15:Fa(e,i,s,u),d&2048&&Du(9,i);break;case 1:Fa(e,i,s,u);break;case 3:Fa(e,i,s,u),d&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&gu(e)));break;case 12:if(d&2048){Fa(e,i,s,u),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Y){rn(i,i.return,Y)}}else Fa(e,i,s,u);break;case 31:Fa(e,i,s,u);break;case 13:Fa(e,i,s,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Fa(e,i,s,u):Lu(e,i):m._visibility&2?Fa(e,i,s,u):(m._visibility|=2,il(e,i,s,u,(i.subtreeFlags&10256)!==0||!1)),d&2048&&Ip(E,i);break;case 24:Fa(e,i,s,u),d&2048&&Hp(i.alternate,i);break;default:Fa(e,i,s,u)}}function il(e,i,s,u,d){for(d=d&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,N=s,Y=u,ut=E.flags;switch(E.tag){case 0:case 11:case 15:il(m,E,N,Y,d),Du(8,E);break;case 23:break;case 22:var _t=E.stateNode;E.memoizedState!==null?_t._visibility&2?il(m,E,N,Y,d):Lu(m,E):(_t._visibility|=2,il(m,E,N,Y,d)),d&&ut&2048&&Ip(E.alternate,E);break;case 24:il(m,E,N,Y,d),d&&ut&2048&&Hp(E.alternate,E);break;default:il(m,E,N,Y,d)}i=i.sibling}}function Lu(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,u=i,d=u.flags;switch(u.tag){case 22:Lu(s,u),d&2048&&Ip(u.alternate,u);break;case 24:Lu(s,u),d&2048&&Hp(u.alternate,u);break;default:Lu(s,u)}i=i.sibling}}var Nu=8192;function al(e,i,s){if(e.subtreeFlags&Nu)for(e=e.child;e!==null;)Fv(e,i,s),e=e.sibling}function Fv(e,i,s){switch(e.tag){case 26:al(e,i,s),e.flags&Nu&&e.memoizedState!==null&&PT(s,za,e.memoizedState,e.memoizedProps);break;case 5:al(e,i,s);break;case 3:case 4:var u=za;za=Vf(e.stateNode.containerInfo),al(e,i,s),za=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=Nu,Nu=16777216,al(e,i,s),Nu=u):al(e,i,s));break;default:al(e,i,s)}}function Bv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ou(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];ai=u,Hv(u,e)}Bv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iv(e),e=e.sibling}function Iv(e){switch(e.tag){case 0:case 11:case 15:Ou(e),e.flags&2048&&rs(9,e,e.return);break;case 3:Ou(e);break;case 12:Ou(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,wf(e)):Ou(e);break;default:Ou(e)}}function wf(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];ai=u,Hv(u,e)}Bv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:rs(8,i,i.return),wf(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,wf(i));break;default:wf(i)}e=e.sibling}}function Hv(e,i){for(;ai!==null;){var s=ai;switch(s.tag){case 0:case 11:case 15:rs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:gu(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,ai=u;else t:for(s=e;ai!==null;){u=ai;var d=u.sibling,m=u.return;if(Dv(u),u===s){ai=null;break t}if(d!==null){d.return=m,ai=d;break t}ai=m}}}var KE={getCacheForType:function(e){var i=hi(In),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return hi(In).controller.signal}},QE=typeof WeakMap=="function"?WeakMap:Map,$e=0,pn=null,Pe=null,Be=0,an=0,ta=null,ss=!1,rl=!1,Gp=!1,Mr=0,Un=0,os=0,ao=0,Vp=0,ea=0,sl=0,Pu=null,Hi=null,kp=!1,Df=0,Gv=0,Uf=1/0,Lf=null,ls=null,Zn=0,us=null,ol=null,Er=0,Xp=0,Wp=null,Vv=null,zu=0,Yp=null;function na(){return($e&2)!==0&&Be!==0?Be&-Be:z.T!==null?Jp():Ee()}function kv(){if(ea===0)if((Be&536870912)===0||Ve){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ea=e}else ea=536870912;return e=Ji.current,e!==null&&(e.flags|=32),ea}function Gi(e,i,s){(e===pn&&(an===2||an===9)||e.cancelPendingCommit!==null)&&(ll(e,0),cs(e,Be,ea,!1)),Kt(e,s),(($e&2)===0||e!==pn)&&(e===pn&&(($e&2)===0&&(ao|=s),Un===4&&cs(e,Be,ea,!1)),ja(e))}function Xv(e,i,s){if(($e&6)!==0)throw Error(a(327));var u=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Wt(e,i),d=u?tT(e,i):Zp(e,i,!0),m=u;do{if(d===0){rl&&!u&&cs(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!JE(s)){d=Zp(e,i,!1),m=!1;continue}if(d===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var N=e;d=Pu;var Y=N.current.memoizedState.isDehydrated;if(Y&&(ll(N,E).flags|=256),E=Zp(N,E,!1),E!==2){if(Gp&&!Y){N.errorRecoveryDisabledLanes|=m,ao|=m,d=4;break t}m=Hi,Hi=d,m!==null&&(Hi===null?Hi=m:Hi.push.apply(Hi,m))}d=E}if(m=!1,d!==2)continue}}if(d===1){ll(e,0),cs(e,i,0,!0);break}t:{switch(u=e,m=d,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:cs(u,i,ea,!ss);break t;case 2:Hi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(d=Df+300-R(),10<d)){if(cs(u,i,ea,!ss),vt(u,0,!0)!==0)break t;Er=i,u.timeoutHandle=yS(Wv.bind(null,u,s,Hi,Lf,kp,i,ea,ao,sl,ss,m,"Throttled",-0,0),d);break t}Wv(u,s,Hi,Lf,kp,i,ea,ao,sl,ss,m,null,-0,0)}}break}while(!0);ja(e)}function Wv(e,i,s,u,d,m,E,N,Y,ut,_t,bt,ct,dt){if(e.timeoutHandle=-1,bt=i.subtreeFlags,bt&8192||(bt&16785408)===16785408){bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ur},Fv(i,m,bt);var Qt=(m&62914560)===m?Df-R():(m&4194048)===m?Gv-R():0;if(Qt=zT(bt,Qt),Qt!==null){Er=m,e.cancelPendingCommit=Qt($v.bind(null,e,i,m,s,u,d,E,N,Y,_t,bt,null,ct,dt)),cs(e,m,E,!ut);return}}$v(e,i,m,s,u,d,E,N,Y)}function JE(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var d=s[u],m=d.getSnapshot;d=d.value;try{if(!Ki(m(),d))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cs(e,i,s,u){i&=~Vp,i&=~ao,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var d=i;0<d;){var m=31-Zt(d),E=1<<m;u[m]=-1,d&=~E}s!==0&&Ht(e,s,i)}function Nf(){return($e&6)===0?(Fu(0),!1):!0}function qp(){if(Pe!==null){if(an===0)var e=Pe.return;else e=Pe,dr=js=null,up(e),Jo=null,vu=0,e=Pe;for(;e!==null;)bv(e.alternate,e),e=e.return;Pe=null}}function ll(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,xT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Er=0,qp(),pn=e,Pe=s=fr(e.current,null),Be=i,an=0,ta=null,ss=!1,rl=Wt(e,i),Gp=!1,sl=ea=Vp=ao=os=Un=0,Hi=Pu=null,kp=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var d=31-Zt(u),m=1<<d;i|=e[d],u&=~m}return Mr=i,$c(),s}function Yv(e,i){be=null,z.H=Ru,i===Qo||i===lf?(i=lx(),an=3):i===Qd?(i=lx(),an=4):an=i===Tp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ta=i,Pe===null&&(Un=1,bf(e,xa(i,e.current)))}function qv(){var e=Ji.current;return e===null?!0:(Be&4194048)===Be?ba===null:(Be&62914560)===Be||(Be&536870912)!==0?e===ba:!1}function Zv(){var e=z.H;return z.H=Ru,e===null?Ru:e}function jv(){var e=z.A;return z.A=KE,e}function Of(){Un=4,ss||(Be&4194048)!==Be&&Ji.current!==null||(rl=!0),(os&134217727)===0&&(ao&134217727)===0||pn===null||cs(pn,Be,ea,!1)}function Zp(e,i,s){var u=$e;$e|=2;var d=Zv(),m=jv();(pn!==e||Be!==i)&&(Lf=null,ll(e,i)),i=!1;var E=Un;t:do try{if(an!==0&&Pe!==null){var N=Pe,Y=ta;switch(an){case 8:qp(),E=6;break t;case 3:case 2:case 9:case 6:Ji.current===null&&(i=!0);var ut=an;if(an=0,ta=null,ul(e,N,Y,ut),s&&rl){E=0;break t}break;default:ut=an,an=0,ta=null,ul(e,N,Y,ut)}}$E(),E=Un;break}catch(_t){Yv(e,_t)}while(!0);return i&&e.shellSuspendCounter++,dr=js=null,$e=u,z.H=d,z.A=m,Pe===null&&(pn=null,Be=0,$c()),E}function $E(){for(;Pe!==null;)Kv(Pe)}function tT(e,i){var s=$e;$e|=2;var u=Zv(),d=jv();pn!==e||Be!==i?(Lf=null,Uf=R()+500,ll(e,i)):rl=Wt(e,i);t:do try{if(an!==0&&Pe!==null){i=Pe;var m=ta;e:switch(an){case 1:an=0,ta=null,ul(e,i,m,1);break;case 2:case 9:if(sx(m)){an=0,ta=null,Qv(i);break}i=function(){an!==2&&an!==9||pn!==e||(an=7),ja(e)},m.then(i,i);break t;case 3:an=7;break t;case 4:an=5;break t;case 7:sx(m)?(an=0,ta=null,Qv(i)):(an=0,ta=null,ul(e,i,m,7));break;case 5:var E=null;switch(Pe.tag){case 26:E=Pe.memoizedState;case 5:case 27:var N=Pe;if(E?zS(E):N.stateNode.complete){an=0,ta=null;var Y=N.sibling;if(Y!==null)Pe=Y;else{var ut=N.return;ut!==null?(Pe=ut,Pf(ut)):Pe=null}break e}}an=0,ta=null,ul(e,i,m,5);break;case 6:an=0,ta=null,ul(e,i,m,6);break;case 8:qp(),Un=6;break t;default:throw Error(a(462))}}eT();break}catch(_t){Yv(e,_t)}while(!0);return dr=js=null,z.H=u,z.A=d,$e=s,Pe!==null?0:(pn=null,Be=0,$c(),Un)}function eT(){for(;Pe!==null&&!ue();)Kv(Pe)}function Kv(e){var i=Sv(e.alternate,e,Mr);e.memoizedProps=e.pendingProps,i===null?Pf(e):Pe=i}function Qv(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=pv(s,i,i.pendingProps,i.type,void 0,Be);break;case 11:i=pv(s,i,i.pendingProps,i.type.render,i.ref,Be);break;case 5:up(i);default:bv(s,i),i=Pe=jg(i,Mr),i=Sv(s,i,Mr)}e.memoizedProps=e.pendingProps,i===null?Pf(e):Pe=i}function ul(e,i,s,u){dr=js=null,up(i),Jo=null,vu=0;var d=i.return;try{if(kE(e,d,i,s,Be)){Un=1,bf(e,xa(s,e.current)),Pe=null;return}}catch(m){if(d!==null)throw Pe=d,m;Un=1,bf(e,xa(s,e.current)),Pe=null;return}i.flags&32768?(Ve||u===1?e=!0:rl||(Be&536870912)!==0?e=!1:(ss=e=!0,(u===2||u===9||u===3||u===6)&&(u=Ji.current,u!==null&&u.tag===13&&(u.flags|=16384))),Jv(i,e)):Pf(i)}function Pf(e){var i=e;do{if((i.flags&32768)!==0){Jv(i,ss);return}e=i.return;var s=YE(i.alternate,i,Mr);if(s!==null){Pe=s;return}if(i=i.sibling,i!==null){Pe=i;return}Pe=i=e}while(i!==null);Un===0&&(Un=5)}function Jv(e,i){do{var s=qE(e.alternate,e);if(s!==null){s.flags&=32767,Pe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=s}while(e!==null);Un=6,Pe=null}function $v(e,i,s,u,d,m,E,N,Y){e.cancelPendingCommit=null;do zf();while(Zn!==0);if(($e&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=zd,xe(e,s,m,E,N,Y),e===pn&&(Pe=pn=null,Be=0),ol=i,us=e,Er=s,Xp=m,Wp=d,Vv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rT(ht,function(){return aS(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,d=k.p,k.p=2,E=$e,$e|=4;try{ZE(e,i,s)}finally{$e=E,k.p=d,z.T=u}}Zn=1,tS(),eS(),nS()}}function tS(){if(Zn===1){Zn=0;var e=us,i=ol,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var u=k.p;k.p=2;var d=$e;$e|=4;try{Ov(i,e);var m=s0,E=Hg(e.containerInfo),N=m.focusedElem,Y=m.selectionRange;if(E!==N&&N&&N.ownerDocument&&Ig(N.ownerDocument.documentElement,N)){if(Y!==null&&Ud(N)){var ut=Y.start,_t=Y.end;if(_t===void 0&&(_t=ut),"selectionStart"in N)N.selectionStart=ut,N.selectionEnd=Math.min(_t,N.value.length);else{var bt=N.ownerDocument||document,ct=bt&&bt.defaultView||window;if(ct.getSelection){var dt=ct.getSelection(),Qt=N.textContent.length,pe=Math.min(Y.start,Qt),ln=Y.end===void 0?pe:Math.min(Y.end,Qt);!dt.extend&&pe>ln&&(E=ln,ln=pe,pe=E);var Q=Bg(N,pe),Z=Bg(N,ln);if(Q&&Z&&(dt.rangeCount!==1||dt.anchorNode!==Q.node||dt.anchorOffset!==Q.offset||dt.focusNode!==Z.node||dt.focusOffset!==Z.offset)){var lt=bt.createRange();lt.setStart(Q.node,Q.offset),dt.removeAllRanges(),pe>ln?(dt.addRange(lt),dt.extend(Z.node,Z.offset)):(lt.setEnd(Z.node,Z.offset),dt.addRange(lt))}}}}for(bt=[],dt=N;dt=dt.parentNode;)dt.nodeType===1&&bt.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<bt.length;N++){var yt=bt[N];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}Zf=!!r0,s0=r0=null}finally{$e=d,k.p=u,z.T=s}}e.current=i,Zn=2}}function eS(){if(Zn===2){Zn=0;var e=us,i=ol,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var u=k.p;k.p=2;var d=$e;$e|=4;try{wv(e,i.alternate,i)}finally{$e=d,k.p=u,z.T=s}}Zn=3}}function nS(){if(Zn===4||Zn===3){Zn=0,I();var e=us,i=ol,s=Er,u=Vv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Zn=5:(Zn=0,ol=us=null,iS(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(ls=null),gn(s),i=i.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=z.T,d=k.p,k.p=2,z.T=null;try{for(var m=e.onRecoverableError,E=0;E<u.length;E++){var N=u[E];m(N.value,{componentStack:N.stack})}}finally{z.T=i,k.p=d}}(Er&3)!==0&&zf(),ja(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===Yp?zu++:(zu=0,Yp=e):zu=0,Fu(0)}}function iS(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,gu(i)))}function zf(){return tS(),eS(),nS(),aS()}function aS(){if(Zn!==5)return!1;var e=us,i=Xp;Xp=0;var s=gn(Er),u=z.T,d=k.p;try{k.p=32>s?32:s,z.T=null,s=Wp,Wp=null;var m=us,E=Er;if(Zn=0,ol=us=null,Er=0,($e&6)!==0)throw Error(a(331));var N=$e;if($e|=4,Iv(m.current),zv(m,m.current,E,s),$e=N,Fu(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Et,m)}catch{}return!0}finally{k.p=d,z.T=u,iS(e,i)}}function rS(e,i,s){i=xa(s,i),i=Ep(e.stateNode,i,2),e=ns(e,i,2),e!==null&&(Kt(e,2),ja(e))}function rn(e,i,s){if(e.tag===3)rS(e,e,s);else for(;i!==null;){if(i.tag===3){rS(i,e,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ls===null||!ls.has(u))){e=xa(s,e),s=sv(2),u=ns(i,s,2),u!==null&&(ov(s,u,i,e),Kt(u,2),ja(u));break}}i=i.return}}function jp(e,i,s){var u=e.pingCache;if(u===null){u=e.pingCache=new QE;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(s)||(Gp=!0,d.add(s),e=nT.bind(null,e,i,s),i.then(e,e))}function nT(e,i,s){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,pn===e&&(Be&s)===s&&(Un===4||Un===3&&(Be&62914560)===Be&&300>R()-Df?($e&2)===0&&ll(e,0):Vp|=s,sl===Be&&(sl=0)),ja(e)}function sS(e,i){i===0&&(i=We()),e=Ys(e,i),e!==null&&(Kt(e,i),ja(e))}function iT(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),sS(e,s)}function aT(e,i){var s=0;switch(e.tag){case 31:case 13:var u=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),sS(e,s)}function rT(e,i){return Fe(e,i)}var Ff=null,cl=null,Kp=!1,Bf=!1,Qp=!1,fs=0;function ja(e){e!==cl&&e.next===null&&(cl===null?Ff=cl=e:cl=cl.next=e),Bf=!0,Kp||(Kp=!0,oT())}function Fu(e,i){if(!Qp&&Bf){Qp=!0;do for(var s=!1,u=Ff;u!==null;){if(e!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var E=u.suspendedLanes,N=u.pingedLanes;m=(1<<31-Zt(42|e)+1)-1,m&=d&~(E&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,cS(u,m))}else m=Be,m=vt(u,u===pn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Wt(u,m)||(s=!0,cS(u,m));u=u.next}while(s);Qp=!1}}function sT(){oS()}function oS(){Bf=Kp=!1;var e=0;fs!==0&&gT()&&(e=fs);for(var i=R(),s=null,u=Ff;u!==null;){var d=u.next,m=lS(u,i);m===0?(u.next=null,s===null?Ff=d:s.next=d,d===null&&(cl=s)):(s=u,(e!==0||(m&3)!==0)&&(Bf=!0)),u=d}Zn!==0&&Zn!==5||Fu(e),fs!==0&&(fs=0)}function lS(e,i){for(var s=e.suspendedLanes,u=e.pingedLanes,d=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Zt(m),N=1<<E,Y=d[E];Y===-1?((N&s)===0||(N&u)!==0)&&(d[E]=le(N,i)):Y<=i&&(e.expiredLanes|=N),m&=~N}if(i=pn,s=Be,s=vt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,s===0||e===i&&(an===2||an===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&Bt(u),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Wt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(u!==null&&Bt(u),gn(s)){case 2:case 8:s=mt;break;case 32:s=ht;break;case 268435456:s=Ut;break;default:s=ht}return u=uS.bind(null,e),s=Fe(s,u),e.callbackPriority=i,e.callbackNode=s,i}return u!==null&&u!==null&&Bt(u),e.callbackPriority=2,e.callbackNode=null,2}function uS(e,i){if(Zn!==0&&Zn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(zf()&&e.callbackNode!==s)return null;var u=Be;return u=vt(e,e===pn?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(Xv(e,u,i),lS(e,R()),e.callbackNode!=null&&e.callbackNode===s?uS.bind(null,e):null)}function cS(e,i){if(zf())return null;Xv(e,i,!0)}function oT(){vT(function(){($e&6)!==0?Fe(gt,sT):oS()})}function Jp(){if(fs===0){var e=jo;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),fs=e}return fs}function fS(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wc(""+e)}function hS(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function lT(e,i,s,u,d){if(i==="submit"&&s&&s.stateNode===d){var m=fS((d[ve]||null).action),E=u.submitter;E&&(i=(i=E[ve]||null)?fS(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var N=new jc("action","action",null,u,d);e.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(fs!==0){var Y=E?hS(d,E):new FormData(d);xp(s,{pending:!0,data:Y,method:d.method,action:m},null,Y)}}else typeof m=="function"&&(N.preventDefault(),Y=E?hS(d,E):new FormData(d),xp(s,{pending:!0,data:Y,method:d.method,action:m},m,Y))},currentTarget:d}]})}}for(var $p=0;$p<Pd.length;$p++){var t0=Pd[$p],uT=t0.toLowerCase(),cT=t0[0].toUpperCase()+t0.slice(1);Pa(uT,"on"+cT)}Pa(kg,"onAnimationEnd"),Pa(Xg,"onAnimationIteration"),Pa(Wg,"onAnimationStart"),Pa("dblclick","onDoubleClick"),Pa("focusin","onFocus"),Pa("focusout","onBlur"),Pa(AE,"onTransitionRun"),Pa(RE,"onTransitionStart"),Pa(CE,"onTransitionCancel"),Pa(Yg,"onTransitionEnd"),Yt("onMouseEnter",["mouseout","mouseover"]),Yt("onMouseLeave",["mouseout","mouseover"]),Yt("onPointerEnter",["pointerout","pointerover"]),Yt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bu));function dS(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var u=e[s],d=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var N=u[E],Y=N.instance,ut=N.currentTarget;if(N=N.listener,Y!==m&&d.isPropagationStopped())break t;m=N,d.currentTarget=ut;try{m(d)}catch(_t){Jc(_t)}d.currentTarget=null,m=Y}else for(E=0;E<u.length;E++){if(N=u[E],Y=N.instance,ut=N.currentTarget,N=N.listener,Y!==m&&d.isPropagationStopped())break t;m=N,d.currentTarget=ut;try{m(d)}catch(_t){Jc(_t)}d.currentTarget=null,m=Y}}}}function ze(e,i){var s=i[ti];s===void 0&&(s=i[ti]=new Set);var u=e+"__bubble";s.has(u)||(pS(i,e,2,!1),s.add(u))}function e0(e,i,s){var u=0;i&&(u|=4),pS(s,e,u,i)}var If="_reactListening"+Math.random().toString(36).slice(2);function n0(e){if(!e[If]){e[If]=!0,K.forEach(function(s){s!=="selectionchange"&&(fT.has(s)||e0(s,!1,e),e0(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[If]||(i[If]=!0,e0("selectionchange",!1,i))}}function pS(e,i,s,u){switch(kS(i)){case 2:var d=IT;break;case 8:d=HT;break;default:d=g0}s=d.bind(null,i,s,e),d=void 0,!bd||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?e.addEventListener(i,s,{capture:!0,passive:d}):e.addEventListener(i,s,!0):d!==void 0?e.addEventListener(i,s,{passive:d}):e.addEventListener(i,s,!1)}function i0(e,i,s,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var N=u.stateNode.containerInfo;if(N===d)break;if(E===4)for(E=u.return;E!==null;){var Y=E.tag;if((Y===3||Y===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;N!==null;){if(E=bn(N),E===null)return;if(Y=E.tag,Y===5||Y===6||Y===26||Y===27){u=m=E;continue t}N=N.parentNode}}u=u.return}vg(function(){var ut=m,_t=Sd(s),bt=[];t:{var ct=qg.get(e);if(ct!==void 0){var dt=jc,Qt=e;switch(e){case"keypress":if(qc(s)===0)break t;case"keydown":case"keyup":dt=aE;break;case"focusin":Qt="focus",dt=Ad;break;case"focusout":Qt="blur",dt=Ad;break;case"beforeblur":case"afterblur":dt=Ad;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=YM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=oE;break;case kg:case Xg:case Wg:dt=jM;break;case Yg:dt=uE;break;case"scroll":case"scrollend":dt=XM;break;case"wheel":dt=fE;break;case"copy":case"cut":case"paste":dt=QM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Eg;break;case"toggle":case"beforetoggle":dt=dE}var pe=(i&4)!==0,ln=!pe&&(e==="scroll"||e==="scrollend"),Q=pe?ct!==null?ct+"Capture":null:ct;pe=[];for(var Z=ut,lt;Z!==null;){var yt=Z;if(lt=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||lt===null||Q===null||(yt=su(Z,Q),yt!=null&&pe.push(Iu(Z,yt,lt))),ln)break;Z=Z.return}0<pe.length&&(ct=new dt(ct,Qt,null,s,_t),bt.push({event:ct,listeners:pe}))}}if((i&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",ct&&s!==vd&&(Qt=s.relatedTarget||s.fromElement)&&(bn(Qt)||Qt[Oe]))break t;if((dt||ct)&&(ct=_t.window===_t?_t:(ct=_t.ownerDocument)?ct.defaultView||ct.parentWindow:window,dt?(Qt=s.relatedTarget||s.toElement,dt=ut,Qt=Qt?bn(Qt):null,Qt!==null&&(ln=l(Qt),pe=Qt.tag,Qt!==ln||pe!==5&&pe!==27&&pe!==6)&&(Qt=null)):(dt=null,Qt=ut),dt!==Qt)){if(pe=bg,yt="onMouseLeave",Q="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Eg,yt="onPointerLeave",Q="onPointerEnter",Z="pointer"),ln=dt==null?ct:j(dt),lt=Qt==null?ct:j(Qt),ct=new pe(yt,Z+"leave",dt,s,_t),ct.target=ln,ct.relatedTarget=lt,yt=null,bn(_t)===ut&&(pe=new pe(Q,Z+"enter",Qt,s,_t),pe.target=lt,pe.relatedTarget=ln,yt=pe),ln=yt,dt&&Qt)e:{for(pe=hT,Q=dt,Z=Qt,lt=0,yt=Q;yt;yt=pe(yt))lt++;yt=0;for(var he=Z;he;he=pe(he))yt++;for(;0<lt-yt;)Q=pe(Q),lt--;for(;0<yt-lt;)Z=pe(Z),yt--;for(;lt--;){if(Q===Z||Z!==null&&Q===Z.alternate){pe=Q;break e}Q=pe(Q),Z=pe(Z)}pe=null}else pe=null;dt!==null&&mS(bt,ct,dt,pe,!1),Qt!==null&&ln!==null&&mS(bt,ln,Qt,pe,!0)}}t:{if(ct=ut?j(ut):window,dt=ct.nodeName&&ct.nodeName.toLowerCase(),dt==="select"||dt==="input"&&ct.type==="file")var Ke=Lg;else if(Dg(ct))if(Ng)Ke=ME;else{Ke=yE;var ne=SE}else dt=ct.nodeName,!dt||dt.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?ut&&xd(ut.elementType)&&(Ke=Lg):Ke=bE;if(Ke&&(Ke=Ke(e,ut))){Ug(bt,Ke,s,_t);break t}ne&&ne(e,ct,ut),e==="focusout"&&ut&&ct.type==="number"&&ut.memoizedProps.value!=null&&ni(ct,"number",ct.value)}switch(ne=ut?j(ut):window,e){case"focusin":(Dg(ne)||ne.contentEditable==="true")&&(Go=ne,Ld=ut,pu=null);break;case"focusout":pu=Ld=Go=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,Gg(bt,s,_t);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":Gg(bt,s,_t)}var Ae;if(Cd)t:{switch(e){case"compositionstart":var Ie="onCompositionStart";break t;case"compositionend":Ie="onCompositionEnd";break t;case"compositionupdate":Ie="onCompositionUpdate";break t}Ie=void 0}else Ho?Cg(e,s)&&(Ie="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ie="onCompositionStart");Ie&&(Tg&&s.locale!=="ko"&&(Ho||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Ho&&(Ae=Sg()):(jr=_t,Md="value"in jr?jr.value:jr.textContent,Ho=!0)),ne=Hf(ut,Ie),0<ne.length&&(Ie=new Mg(Ie,e,null,s,_t),bt.push({event:Ie,listeners:ne}),Ae?Ie.data=Ae:(Ae=wg(s),Ae!==null&&(Ie.data=Ae)))),(Ae=mE?_E(e,s):gE(e,s))&&(Ie=Hf(ut,"onBeforeInput"),0<Ie.length&&(ne=new Mg("onBeforeInput","beforeinput",null,s,_t),bt.push({event:ne,listeners:Ie}),ne.data=Ae)),lT(bt,e,ut,s,_t)}dS(bt,i)})}function Iu(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Hf(e,i){for(var s=i+"Capture",u=[];e!==null;){var d=e,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=su(e,s),d!=null&&u.unshift(Iu(e,d,m)),d=su(e,i),d!=null&&u.push(Iu(e,d,m))),e.tag===3)return u;e=e.return}return[]}function hT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mS(e,i,s,u,d){for(var m=i._reactName,E=[];s!==null&&s!==u;){var N=s,Y=N.alternate,ut=N.stateNode;if(N=N.tag,Y!==null&&Y===u)break;N!==5&&N!==26&&N!==27||ut===null||(Y=ut,d?(ut=su(s,m),ut!=null&&E.unshift(Iu(s,ut,Y))):d||(ut=su(s,m),ut!=null&&E.push(Iu(s,ut,Y)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var dT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function _S(e){return(typeof e=="string"?e:""+e).replace(dT,`
`).replace(pT,"")}function gS(e,i){return i=_S(i),_S(e)===i}function on(e,i,s,u,d,m){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||Wa(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&Wa(e,""+u);break;case"className":Ze(e,"class",u);break;case"tabIndex":Ze(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(e,s,u);break;case"style":gg(e,u,m);break;case"data":if(i!=="object"){Ze(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Wc(""+u),e.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&on(e,i,"name",d.name,d,null),on(e,i,"formEncType",d.formEncType,d,null),on(e,i,"formMethod",d.formMethod,d,null),on(e,i,"formTarget",d.formTarget,d,null)):(on(e,i,"encType",d.encType,d,null),on(e,i,"method",d.method,d,null),on(e,i,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Wc(""+u),e.setAttribute(s,u);break;case"onClick":u!=null&&(e.onclick=ur);break;case"onScroll":u!=null&&ze("scroll",e);break;case"onScrollEnd":u!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}s=Wc(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""+u):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":u===!0?e.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,u):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(s,u):e.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(s):e.setAttribute(s,u);break;case"popover":ze("beforetoggle",e),ze("toggle",e),Te(e,"popover",u);break;case"xlinkActuate":je(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":je(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":je(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":je(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":je(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":je(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":je(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":je(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":je(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Te(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=VM.get(s)||s,Te(e,s,u))}}function a0(e,i,s,u,d,m){switch(s){case"style":gg(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(d.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof u=="string"?Wa(e,u):(typeof u=="number"||typeof u=="bigint")&&Wa(e,""+u);break;case"onScroll":u!=null&&ze("scroll",e);break;case"onScrollEnd":u!=null&&ze("scrollend",e);break;case"onClick":u!=null&&(e.onclick=ur);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),i=s.slice(2,d?s.length-7:void 0),m=e[ve]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,u,d);break t}s in e?e[s]=u:u===!0?e.setAttribute(s,""):Te(e,s,u)}}}function pi(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var u=!1,d=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:on(e,i,m,E,s,null)}}d&&on(e,i,"srcSet",s.srcSet,s,null),u&&on(e,i,"src",s.src,s,null);return;case"input":ze("invalid",e);var N=m=E=d=null,Y=null,ut=null;for(u in s)if(s.hasOwnProperty(u)){var _t=s[u];if(_t!=null)switch(u){case"name":d=_t;break;case"type":E=_t;break;case"checked":Y=_t;break;case"defaultChecked":ut=_t;break;case"value":m=_t;break;case"defaultValue":N=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(a(137,i));break;default:on(e,i,u,_t,s,null)}}vn(e,m,N,Y,ut,E,d,!1);return;case"select":ze("invalid",e),u=E=m=null;for(d in s)if(s.hasOwnProperty(d)&&(N=s[d],N!=null))switch(d){case"value":m=N;break;case"defaultValue":E=N;break;case"multiple":u=N;default:on(e,i,d,N,s,null)}i=m,s=E,e.multiple=!!u,i!=null?qn(e,!!u,i,!1):s!=null&&qn(e,!!u,s,!0);return;case"textarea":ze("invalid",e),m=d=u=null;for(E in s)if(s.hasOwnProperty(E)&&(N=s[E],N!=null))switch(E){case"value":u=N;break;case"defaultValue":d=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:on(e,i,E,N,s,null)}ci(e,u,d,m);return;case"option":for(Y in s)if(s.hasOwnProperty(Y)&&(u=s[Y],u!=null))switch(Y){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:on(e,i,Y,u,s,null)}return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(u=0;u<Bu.length;u++)ze(Bu[u],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in s)if(s.hasOwnProperty(ut)&&(u=s[ut],u!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:on(e,i,ut,u,s,null)}return;default:if(xd(i)){for(_t in s)s.hasOwnProperty(_t)&&(u=s[_t],u!==void 0&&a0(e,i,_t,u,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(u=s[N],u!=null&&on(e,i,N,u,s,null))}function mT(e,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,E=null,N=null,Y=null,ut=null,_t=null;for(dt in s){var bt=s[dt];if(s.hasOwnProperty(dt)&&bt!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":Y=bt;default:u.hasOwnProperty(dt)||on(e,i,dt,null,u,bt)}}for(var ct in u){var dt=u[ct];if(bt=s[ct],u.hasOwnProperty(ct)&&(dt!=null||bt!=null))switch(ct){case"type":m=dt;break;case"name":d=dt;break;case"checked":ut=dt;break;case"defaultChecked":_t=dt;break;case"value":E=dt;break;case"defaultValue":N=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:dt!==bt&&on(e,i,ct,dt,u,bt)}}or(e,E,N,Y,ut,_t,m,d);return;case"select":dt=E=N=ct=null;for(m in s)if(Y=s[m],s.hasOwnProperty(m)&&Y!=null)switch(m){case"value":break;case"multiple":dt=Y;default:u.hasOwnProperty(m)||on(e,i,m,null,u,Y)}for(d in u)if(m=u[d],Y=s[d],u.hasOwnProperty(d)&&(m!=null||Y!=null))switch(d){case"value":ct=m;break;case"defaultValue":N=m;break;case"multiple":E=m;default:m!==Y&&on(e,i,d,m,u,Y)}i=N,s=E,u=dt,ct!=null?qn(e,!!s,ct,!1):!!u!=!!s&&(i!=null?qn(e,!!s,i,!0):qn(e,!!s,s?[]:"",!1));return;case"textarea":dt=ct=null;for(N in s)if(d=s[N],s.hasOwnProperty(N)&&d!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:on(e,i,N,null,u,d)}for(E in u)if(d=u[E],m=s[E],u.hasOwnProperty(E)&&(d!=null||m!=null))switch(E){case"value":ct=d;break;case"defaultValue":dt=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(a(91));break;default:d!==m&&on(e,i,E,d,u,m)}ii(e,ct,dt);return;case"option":for(var Qt in s)if(ct=s[Qt],s.hasOwnProperty(Qt)&&ct!=null&&!u.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:on(e,i,Qt,null,u,ct)}for(Y in u)if(ct=u[Y],dt=s[Y],u.hasOwnProperty(Y)&&ct!==dt&&(ct!=null||dt!=null))switch(Y){case"selected":e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol";break;default:on(e,i,Y,ct,u,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in s)ct=s[pe],s.hasOwnProperty(pe)&&ct!=null&&!u.hasOwnProperty(pe)&&on(e,i,pe,null,u,ct);for(ut in u)if(ct=u[ut],dt=s[ut],u.hasOwnProperty(ut)&&ct!==dt&&(ct!=null||dt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:on(e,i,ut,ct,u,dt)}return;default:if(xd(i)){for(var ln in s)ct=s[ln],s.hasOwnProperty(ln)&&ct!==void 0&&!u.hasOwnProperty(ln)&&a0(e,i,ln,void 0,u,ct);for(_t in u)ct=u[_t],dt=s[_t],!u.hasOwnProperty(_t)||ct===dt||ct===void 0&&dt===void 0||a0(e,i,_t,ct,u,dt);return}}for(var Q in s)ct=s[Q],s.hasOwnProperty(Q)&&ct!=null&&!u.hasOwnProperty(Q)&&on(e,i,Q,null,u,ct);for(bt in u)ct=u[bt],dt=s[bt],!u.hasOwnProperty(bt)||ct===dt||ct==null&&dt==null||on(e,i,bt,ct,u,dt)}function xS(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _T(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),u=0;u<s.length;u++){var d=s[u],m=d.transferSize,E=d.initiatorType,N=d.duration;if(m&&N&&xS(E)){for(E=0,N=d.responseEnd,u+=1;u<s.length;u++){var Y=s[u],ut=Y.startTime;if(ut>N)break;var _t=Y.transferSize,bt=Y.initiatorType;_t&&xS(bt)&&(Y=Y.responseEnd,E+=_t*(Y<N?1:(N-ut)/(Y-ut)))}if(--u,i+=8*(m+E)/(d.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var r0=null,s0=null;function Gf(e){return e.nodeType===9?e:e.ownerDocument}function vS(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function SS(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function o0(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var l0=null;function gT(){var e=window.event;return e&&e.type==="popstate"?e===l0?!1:(l0=e,!0):(l0=null,!1)}var yS=typeof setTimeout=="function"?setTimeout:void 0,xT=typeof clearTimeout=="function"?clearTimeout:void 0,bS=typeof Promise=="function"?Promise:void 0,vT=typeof queueMicrotask=="function"?queueMicrotask:typeof bS<"u"?function(e){return bS.resolve(null).then(e).catch(ST)}:yS;function ST(e){setTimeout(function(){throw e})}function hs(e){return e==="head"}function MS(e,i){var s=i,u=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(u===0){e.removeChild(d),pl(i);return}u--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")u++;else if(s==="html")Hu(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Hu(s);for(var m=s.firstChild;m;){var E=m.nextSibling,N=m.nodeName;m[yn]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&Hu(e.ownerDocument.body);s=d}while(s);pl(i)}function ES(e,i){var s=e;e=0;do{var u=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=u}while(s)}function u0(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":u0(s),Rn(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function yT(e,i,s,u){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[yn])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ma(e.nextSibling),e===null)break}return null}function bT(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ma(e.nextSibling),e===null))return null;return e}function TS(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ma(e.nextSibling),e===null))return null;return e}function c0(e){return e.data==="$?"||e.data==="$~"}function f0(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MT(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Ma(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var h0=null;function AS(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ma(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function RS(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function CS(e,i,s){switch(i=Gf(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Hu(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Rn(e)}var Ea=new Map,wS=new Set;function Vf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Tr=k.d;k.d={f:ET,r:TT,D:AT,C:RT,L:CT,m:wT,X:UT,S:DT,M:LT};function ET(){var e=Tr.f(),i=Nf();return e||i}function TT(e){var i=O(e);i!==null&&i.tag===5&&i.type==="form"?Yx(i):Tr.r(e)}var fl=typeof document>"u"?null:document;function DS(e,i,s){var u=fl;if(u&&typeof i=="string"&&i){var d=xn(i);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),wS.has(d)||(wS.add(d),e={rel:e,crossOrigin:s,href:i},u.querySelector(d)===null&&(i=u.createElement("link"),pi(i,"link",e),tt(i),u.head.appendChild(i)))}}function AT(e){Tr.D(e),DS("dns-prefetch",e,null)}function RT(e,i){Tr.C(e,i),DS("preconnect",e,i)}function CT(e,i,s){Tr.L(e,i,s);var u=fl;if(u&&e&&i){var d='link[rel="preload"][as="'+xn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+xn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+xn(s.imageSizes)+'"]')):d+='[href="'+xn(e)+'"]';var m=d;switch(i){case"style":m=hl(e);break;case"script":m=dl(e)}Ea.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ea.set(m,e),u.querySelector(d)!==null||i==="style"&&u.querySelector(Gu(m))||i==="script"&&u.querySelector(Vu(m))||(i=u.createElement("link"),pi(i,"link",e),tt(i),u.head.appendChild(i)))}}function wT(e,i){Tr.m(e,i);var s=fl;if(s&&e){var u=i&&typeof i.as=="string"?i.as:"script",d='link[rel="modulepreload"][as="'+xn(u)+'"][href="'+xn(e)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=dl(e)}if(!Ea.has(m)&&(e=g({rel:"modulepreload",href:e},i),Ea.set(m,e),s.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Vu(m)))return}u=s.createElement("link"),pi(u,"link",e),tt(u),s.head.appendChild(u)}}}function DT(e,i,s){Tr.S(e,i,s);var u=fl;if(u&&e){var d=st(u).hoistableStyles,m=hl(e);i=i||"default";var E=d.get(m);if(!E){var N={loading:0,preload:null};if(E=u.querySelector(Gu(m)))N.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ea.get(m))&&d0(e,s);var Y=E=u.createElement("link");tt(Y),pi(Y,"link",e),Y._p=new Promise(function(ut,_t){Y.onload=ut,Y.onerror=_t}),Y.addEventListener("load",function(){N.loading|=1}),Y.addEventListener("error",function(){N.loading|=2}),N.loading|=4,kf(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:N},d.set(m,E)}}}function UT(e,i){Tr.X(e,i);var s=fl;if(s&&e){var u=st(s).hoistableScripts,d=dl(e),m=u.get(d);m||(m=s.querySelector(Vu(d)),m||(e=g({src:e,async:!0},i),(i=Ea.get(d))&&p0(e,i),m=s.createElement("script"),tt(m),pi(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function LT(e,i){Tr.M(e,i);var s=fl;if(s&&e){var u=st(s).hoistableScripts,d=dl(e),m=u.get(d);m||(m=s.querySelector(Vu(d)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Ea.get(d))&&p0(e,i),m=s.createElement("script"),tt(m),pi(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function US(e,i,s,u){var d=(d=et.current)?Vf(d):null;if(!d)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=hl(s.href),s=st(d).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=hl(s.href);var m=st(d).hoistableStyles,E=m.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=d.querySelector(Gu(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Ea.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ea.set(e,s),m||NT(d,e,s,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=dl(s),s=st(d).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function hl(e){return'href="'+xn(e)+'"'}function Gu(e){return'link[rel="stylesheet"]['+e+"]"}function LS(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function NT(e,i,s,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),pi(i,"link",s),tt(i),e.head.appendChild(i))}function dl(e){return'[src="'+xn(e)+'"]'}function Vu(e){return"script[async]"+e}function NS(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+xn(s.href)+'"]');if(u)return i.instance=u,tt(u),u;var d=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),tt(u),pi(u,"style",d),kf(u,s.precedence,e),i.instance=u;case"stylesheet":d=hl(s.href);var m=e.querySelector(Gu(d));if(m)return i.state.loading|=4,i.instance=m,tt(m),m;u=LS(s),(d=Ea.get(d))&&d0(u,d),m=(e.ownerDocument||e).createElement("link"),tt(m);var E=m;return E._p=new Promise(function(N,Y){E.onload=N,E.onerror=Y}),pi(m,"link",u),i.state.loading|=4,kf(m,s.precedence,e),i.instance=m;case"script":return m=dl(s.src),(d=e.querySelector(Vu(m)))?(i.instance=d,tt(d),d):(u=s,(d=Ea.get(m))&&(u=g({},s),p0(u,d)),e=e.ownerDocument||e,d=e.createElement("script"),tt(d),pi(d,"link",u),e.head.appendChild(d),i.instance=d);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,kf(u,s.precedence,e));return i.instance}function kf(e,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,E=0;E<u.length;E++){var N=u[E];if(N.dataset.precedence===i)m=N;else if(m!==d)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function d0(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function p0(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Xf=null;function OS(e,i,s){if(Xf===null){var u=new Map,d=Xf=new Map;d.set(s,u)}else d=Xf,u=d.get(s),u||(u=new Map,d.set(s,u));if(u.has(e))return u;for(u.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var m=s[d];if(!(m[yn]||m[ye]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var N=u.get(E);N?N.push(m):u.set(E,[m])}}return u}function PS(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function OT(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function zS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function PT(e,i,s,u){if(s.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=hl(u.href),m=i.querySelector(Gu(d));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Wf.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,tt(m);return}m=i.ownerDocument||i,u=LS(u),(d=Ea.get(d))&&d0(u,d),m=m.createElement("link"),tt(m);var E=m;E._p=new Promise(function(N,Y){E.onload=N,E.onerror=Y}),pi(m,"link",u),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Wf.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var m0=0;function zT(e,i){return e.stylesheets&&e.count===0&&qf(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var u=setTimeout(function(){if(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&m0===0&&(m0=62500*_T());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>m0?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function Wf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function qf(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,i.forEach(FT,e),Yf=null,Wf.call(e))}function FT(e,i){if(!(i.state.loading&4)){var s=Yf.get(e);if(s)var u=s.get(null);else{s=new Map,Yf.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var E=d[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),u=E)}u&&s.set(null,u)}d=i.instance,E=d.getAttribute("data-precedence"),m=s.get(E)||u,m===u&&s.set(null,d),s.set(E,d),this.count++,u=Wf.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),i.state.loading|=4}}var ku={$$typeof:C,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function BT(e,i,s,u,d,m,E,N,Y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.hiddenUpdates=Vt(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Y,this.incompleteTransitions=new Map}function FS(e,i,s,u,d,m,E,N,Y,ut,_t,bt){return e=new BT(e,i,s,E,Y,ut,_t,bt,N),i=1,m===!0&&(i|=24),m=Qi(3,null,null,i),e.current=m,m.stateNode=e,i=Zd(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:i},Jd(m),e}function BS(e){return e?(e=Xo,e):Xo}function IS(e,i,s,u,d,m){d=BS(d),u.context===null?u.context=d:u.pendingContext=d,u=es(i),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=ns(e,u,i),s!==null&&(Gi(s,e,i),yu(s,e,i))}function HS(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function _0(e,i){HS(e,i),(e=e.alternate)&&HS(e,i)}function GS(e){if(e.tag===13||e.tag===31){var i=Ys(e,67108864);i!==null&&Gi(i,e,67108864),_0(e,67108864)}}function VS(e){if(e.tag===13||e.tag===31){var i=na();i=ce(i);var s=Ys(e,i);s!==null&&Gi(s,e,i),_0(e,i)}}var Zf=!0;function IT(e,i,s,u){var d=z.T;z.T=null;var m=k.p;try{k.p=2,g0(e,i,s,u)}finally{k.p=m,z.T=d}}function HT(e,i,s,u){var d=z.T;z.T=null;var m=k.p;try{k.p=8,g0(e,i,s,u)}finally{k.p=m,z.T=d}}function g0(e,i,s,u){if(Zf){var d=x0(u);if(d===null)i0(e,i,u,jf,s),XS(e,u);else if(VT(d,e,i,s,u))u.stopPropagation();else if(XS(e,u),i&4&&-1<GT.indexOf(e)){for(;d!==null;){var m=O(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Mt(m.pendingLanes);if(E!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;E;){var Y=1<<31-Zt(E);N.entanglements[1]|=Y,E&=~Y}ja(m),($e&6)===0&&(Uf=R()+500,Fu(0))}}break;case 31:case 13:N=Ys(m,2),N!==null&&Gi(N,m,2),Nf(),_0(m,2)}if(m=x0(u),m===null&&i0(e,i,u,jf,s),m===d)break;d=m}d!==null&&u.stopPropagation()}else i0(e,i,u,null,s)}}function x0(e){return e=Sd(e),v0(e)}var jf=null;function v0(e){if(jf=null,e=bn(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=c(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return jf=e,null}function kS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case gt:return 2;case mt:return 8;case ht:case jt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var S0=!1,ds=null,ps=null,ms=null,Xu=new Map,Wu=new Map,_s=[],GT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function XS(e,i){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":Xu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wu.delete(i.pointerId)}}function Yu(e,i,s,u,d,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=O(i),i!==null&&GS(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),e)}function VT(e,i,s,u,d){switch(i){case"focusin":return ds=Yu(ds,e,i,s,u,d),!0;case"dragenter":return ps=Yu(ps,e,i,s,u,d),!0;case"mouseover":return ms=Yu(ms,e,i,s,u,d),!0;case"pointerover":var m=d.pointerId;return Xu.set(m,Yu(Xu.get(m)||null,e,i,s,u,d)),!0;case"gotpointercapture":return m=d.pointerId,Wu.set(m,Yu(Wu.get(m)||null,e,i,s,u,d)),!0}return!1}function WS(e){var i=bn(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){e.blockedOn=i,fn(e.priority,function(){VS(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,fn(e.priority,function(){VS(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kf(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=x0(e.nativeEvent);if(s===null){s=e.nativeEvent;var u=new s.constructor(s.type,s);vd=u,s.target.dispatchEvent(u),vd=null}else return i=O(s),i!==null&&GS(i),e.blockedOn=s,!1;i.shift()}return!0}function YS(e,i,s){Kf(e)&&s.delete(i)}function kT(){S0=!1,ds!==null&&Kf(ds)&&(ds=null),ps!==null&&Kf(ps)&&(ps=null),ms!==null&&Kf(ms)&&(ms=null),Xu.forEach(YS),Wu.forEach(YS)}function Qf(e,i){e.blockedOn===i&&(e.blockedOn=null,S0||(S0=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kT)))}var Jf=null;function qS(e){Jf!==e&&(Jf=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Jf===e&&(Jf=null);for(var i=0;i<e.length;i+=3){var s=e[i],u=e[i+1],d=e[i+2];if(typeof u!="function"){if(v0(u||s)===null)continue;break}var m=O(s);m!==null&&(e.splice(i,3),i-=3,xp(m,{pending:!0,data:d,method:s.method,action:u},u,d))}}))}function pl(e){function i(Y){return Qf(Y,e)}ds!==null&&Qf(ds,e),ps!==null&&Qf(ps,e),ms!==null&&Qf(ms,e),Xu.forEach(i),Wu.forEach(i);for(var s=0;s<_s.length;s++){var u=_s[s];u.blockedOn===e&&(u.blockedOn=null)}for(;0<_s.length&&(s=_s[0],s.blockedOn===null);)WS(s),s.blockedOn===null&&_s.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var d=s[u],m=s[u+1],E=d[ve]||null;if(typeof m=="function")E||qS(s);else if(E){var N=null;if(m&&m.hasAttribute("formAction")){if(d=m,E=m[ve]||null)N=E.formAction;else if(v0(d)!==null)continue}else N=E.action;typeof N=="function"?s[u+1]=N:(s.splice(u,3),u-=3),qS(s)}}}function ZS(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return d=E})},focusReset:"manual",scroll:"manual"})}function i(){d!==null&&(d(),d=null),u||setTimeout(s,20)}function s(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),d!==null&&(d(),d=null)}}}function y0(e){this._internalRoot=e}$f.prototype.render=y0.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=na();IS(s,u,e,i,null,null)},$f.prototype.unmount=y0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;IS(e.current,2,null,e,null,null),Nf(),i[Oe]=null}};function $f(e){this._internalRoot=e}$f.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ee();e={blockedOn:null,target:e,priority:i};for(var s=0;s<_s.length&&i!==0&&i<_s[s].priority;s++);_s.splice(s,0,e),s===0&&WS(e)}};var jS=t.version;if(jS!=="19.2.0")throw Error(a(527,jS,"19.2.0"));k.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var XT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!th.isDisabled&&th.supportsFiber)try{Et=th.inject(XT),Tt=th}catch{}}return Zu.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,u="",d=nv,m=iv,E=av;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(d=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=FS(e,1,!1,null,null,s,u,null,d,m,E,ZS),e[Oe]=i.current,n0(e),new y0(i)},Zu.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var u=!1,d="",m=nv,E=iv,N=av,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(Y=s.formState)),i=FS(e,1,!0,i,s??null,u,d,Y,m,E,N,ZS),i.context=BS(null),s=i.current,u=na(),u=ce(u),d=es(u),d.callback=null,ns(s,d,u),s=u,i.current.lanes=s,Kt(i,s),ja(i),e[Oe]=i.current,n0(e),new $f(i)},Zu.version="19.2.0",Zu}var ry;function t3(){if(ry)return E0.exports;ry=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),E0.exports=$T(),E0.exports}var e3=t3(),n3="1.3.15";function G1(o,t,n){return Math.max(o,Math.min(t,n))}function i3(o,t,n){return(1-n)*o+n*t}function a3(o,t,n,a){return i3(o,t,1-Math.exp(-n*a))}function r3(o,t){return(o%t+t)%t}var s3=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(o){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=o;const n=G1(0,this.currentTime/this.duration,1);t=n>=1;const a=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=a3(this.value,this.to,this.lerp*60,o),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(o,t,{lerp:n,duration:a,easing:r,onStart:l,onUpdate:c}){this.from=this.value=o,this.to=t,this.lerp=n,this.duration=a,this.easing=r,this.currentTime=0,this.isRunning=!0,l?.(),this.onUpdate=c}};function o3(o,t){let n;return function(...a){let r=this;clearTimeout(n),n=setTimeout(()=>{n=void 0,o.apply(r,a)},t)}}var l3=class{constructor(o,t,{autoResize:n=!0,debounce:a=250}={}){this.wrapper=o,this.content=t,n&&(this.debouncedResize=o3(this.resize,a),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},V1=class{events={};emit(o,...t){let n=this.events[o]||[];for(let a=0,r=n.length;a<r;a++)n[a]?.(...t)}on(o,t){return this.events[o]?.push(t)||(this.events[o]=[t]),()=>{this.events[o]=this.events[o]?.filter(n=>t!==n)}}off(o,t){this.events[o]=this.events[o]?.filter(n=>t!==n)}destroy(){this.events={}}},sy=100/6,xs={passive:!1},u3=class{constructor(o,t={wheelMultiplier:1,touchMultiplier:1}){this.element=o,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,xs),this.element.addEventListener("touchstart",this.onTouchStart,xs),this.element.addEventListener("touchmove",this.onTouchMove,xs),this.element.addEventListener("touchend",this.onTouchEnd,xs)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new V1;on(o,t){return this.emitter.on(o,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,xs),this.element.removeEventListener("touchstart",this.onTouchStart,xs),this.element.removeEventListener("touchmove",this.onTouchMove,xs),this.element.removeEventListener("touchend",this.onTouchEnd,xs)}onTouchStart=o=>{const{clientX:t,clientY:n}=o.targetTouches?o.targetTouches[0]:o;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:o})};onTouchMove=o=>{const{clientX:t,clientY:n}=o.targetTouches?o.targetTouches[0]:o,a=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:a,y:r},this.emitter.emit("scroll",{deltaX:a,deltaY:r,event:o})};onTouchEnd=o=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:o})};onWheel=o=>{let{deltaX:t,deltaY:n,deltaMode:a}=o;const r=a===1?sy:a===2?this.window.width:1,l=a===1?sy:a===2?this.window.height:1;t*=r,n*=l,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:n,event:o})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},oy=o=>Math.min(1,1.001-Math.pow(2,-10*o)),c3=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new s3;emitter=new V1;dimensions;virtualScroll;constructor({wrapper:o=window,content:t=document.documentElement,eventsTarget:n=o,smoothWheel:a=!0,syncTouch:r=!1,syncTouchLerp:l=.075,touchInertiaExponent:c=1.7,duration:f,easing:p,lerp:h=.1,infinite:_=!1,orientation:g="vertical",gestureOrientation:x=g==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:M=1,autoResize:b=!0,prevent:y,virtualScroll:S,overscroll:w=!0,autoRaf:C=!1,anchors:U=!1,autoToggle:P=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:D=!1}={}){window.lenisVersion=n3,(!o||o===document.documentElement)&&(o=window),typeof f=="number"&&typeof p!="function"?p=oy:typeof p=="function"&&typeof f!="number"&&(f=1),this.options={wrapper:o,content:t,eventsTarget:n,smoothWheel:a,syncTouch:r,syncTouchLerp:l,touchInertiaExponent:c,duration:f,easing:p,lerp:h,infinite:_,gestureOrientation:x,orientation:g,touchMultiplier:v,wheelMultiplier:M,autoResize:b,prevent:y,virtualScroll:S,overscroll:w,autoRaf:C,anchors:U,autoToggle:P,allowNestedScroll:L,__experimental__naiveDimensions:D},this.dimensions=new l3(o,t,{autoResize:b}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new u3(n,{touchMultiplier:v,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(o,t){return this.emitter.on(o,t)}off(o,t){return this.emitter.off(o,t)}onScrollEnd=o=>{o instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&o.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=o=>{if(o.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",n=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(n)?this.internalStop():this.internalStart()}};setScroll(o){this.isHorizontal?this.options.wrapper.scrollTo({left:o,behavior:"instant"}):this.options.wrapper.scrollTo({top:o,behavior:"instant"})}onClick=o=>{const n=o.composedPath().find(a=>a instanceof HTMLAnchorElement&&a.getAttribute("href")?.includes("#"));if(n){const a=n.getAttribute("href");if(a){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=`#${a.split("#")[1]}`;this.scrollTo(l,r)}}};onPointerDown=o=>{o.button===1&&this.reset()};onVirtualScroll=o=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(o)===!1)return;const{deltaX:t,deltaY:n,event:a}=o;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:n,event:a}),a.ctrlKey||a.lenisStopPropagation)return;const r=a.type.includes("touch"),l=a.type.includes("wheel");this.isTouching=a.type==="touchstart"||a.type==="touchmove";const c=t===0&&n===0;if(this.options.syncTouch&&r&&a.type==="touchstart"&&c&&!this.isStopped&&!this.isLocked){this.reset();return}const p=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&t===0;if(c||p)return;let h=a.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const _=this.options.prevent;if(h.find(y=>y instanceof HTMLElement&&(typeof _=="function"&&_?.(y)||y.hasAttribute?.("data-lenis-prevent")||r&&y.hasAttribute?.("data-lenis-prevent-touch")||l&&y.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(y,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){a.cancelable&&a.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&l)){this.isScrolling="native",this.animate.stop(),a.lenisStopPropagation=!0;return}let x=n;this.options.gestureOrientation==="both"?x=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation==="horizontal"&&(x=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(a.lenisStopPropagation=!0),a.cancelable&&a.preventDefault();const v=r&&this.options.syncTouch,b=r&&a.type==="touchend";b&&(x=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+x,{programmatic:!1,...v?{lerp:b?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const o=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-o,this.direction=Math.sign(this.animatedScroll-o),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=o=>{const t=o-(this.time||o);this.time=o,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(o,{offset:t=0,immediate:n=!1,lock:a=!1,duration:r=this.options.duration,easing:l=this.options.easing,lerp:c=this.options.lerp,onStart:f,onComplete:p,force:h=!1,programmatic:_=!0,userData:g}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof o=="string"&&["top","left","start","#"].includes(o))o=0;else if(typeof o=="string"&&["bottom","right","end"].includes(o))o=this.limit;else{let x;if(typeof o=="string"?(x=document.querySelector(o),x||(o==="#top"?o=0:console.warn("Lenis: Target not found",o))):o instanceof HTMLElement&&o?.nodeType&&(x=o),x){if(this.options.wrapper!==window){const M=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?M.left:M.top}const v=x.getBoundingClientRect();o=(this.isHorizontal?v.left:v.top)+this.animatedScroll}}if(typeof o=="number"){if(o+=t,o=Math.round(o),this.options.infinite){if(_){this.targetScroll=this.animatedScroll=this.scroll;const x=o-this.animatedScroll;x>this.limit/2?o=o-this.limit:x<-this.limit/2&&(o=o+this.limit)}}else o=G1(0,o,this.limit);if(o===this.targetScroll){f?.(this),p?.(this);return}if(this.userData=g??{},n){this.animatedScroll=this.targetScroll=o,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}_||(this.targetScroll=o),typeof r=="number"&&typeof l!="function"?l=oy:typeof l=="function"&&typeof r!="number"&&(r=1),this.animate.fromTo(this.animatedScroll,o,{duration:r,easing:l,lerp:c,onStart:()=>{a&&(this.isLocked=!0),this.isScrolling="smooth",f?.(this)},onUpdate:(x,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=x-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=x,this.setScroll(this.scroll),_&&(this.targetScroll=x),v||this.emit(),v&&(this.reset(),this.emit(),p?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(o,{deltaX:t,deltaY:n}){const a=Date.now(),r=o._lenis??={};let l,c,f,p,h,_,g,x;const v=this.options.gestureOrientation;if(a-(r.time??0)>2e3){r.time=Date.now();const P=window.getComputedStyle(o);r.computedStyle=P;const L=P.overflowX,D=P.overflowY;if(l=["auto","overlay","scroll"].includes(L),c=["auto","overlay","scroll"].includes(D),r.hasOverflowX=l,r.hasOverflowY=c,!l&&!c||v==="vertical"&&!c||v==="horizontal"&&!l)return!1;h=o.scrollWidth,_=o.scrollHeight,g=o.clientWidth,x=o.clientHeight,f=h>g,p=_>x,r.isScrollableX=f,r.isScrollableY=p,r.scrollWidth=h,r.scrollHeight=_,r.clientWidth=g,r.clientHeight=x}else f=r.isScrollableX,p=r.isScrollableY,l=r.hasOverflowX,c=r.hasOverflowY,h=r.scrollWidth,_=r.scrollHeight,g=r.clientWidth,x=r.clientHeight;if(!l&&!c||!f&&!p||v==="vertical"&&(!c||!p)||v==="horizontal"&&(!l||!f))return!1;let M;if(v==="horizontal")M="x";else if(v==="vertical")M="y";else{const P=t!==0,L=n!==0;P&&l&&f&&(M="x"),L&&c&&p&&(M="y")}if(!M)return!1;let b,y,S,w,C;if(M==="x")b=o.scrollLeft,y=h-g,S=t,w=l,C=f;else if(M==="y")b=o.scrollTop,y=_-x,S=n,w=c,C=p;else return!1;return(S>0?b<y:b>0)&&w&&C}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const o=this.options.wrapper;return this.isHorizontal?o.scrollX??o.scrollLeft:o.scrollY??o.scrollTop}get scroll(){return this.options.infinite?r3(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(o){this._isScrolling!==o&&(this._isScrolling=o,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(o){this._isStopped!==o&&(this._isStopped=o,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(o){this._isLocked!==o&&(this._isLocked=o,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let o="lenis";return this.options.autoToggle&&(o+=" lenis-autoToggle"),this.isStopped&&(o+=" lenis-stopped"),this.isLocked&&(o+=" lenis-locked"),this.isScrolling&&(o+=" lenis-scrolling"),this.isScrolling==="smooth"&&(o+=" lenis-smooth"),o}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};const O_="181",f3=0,ly=1,h3=2,k1=1,d3=2,Lr=3,Fs=0,Xi=1,Pr=2,Hr=0,Fl=1,uy=2,cy=3,fy=4,p3=5,xo=100,m3=101,_3=102,g3=103,x3=104,v3=200,S3=201,y3=202,b3=203,vm=204,Sm=205,M3=206,E3=207,T3=208,A3=209,R3=210,C3=211,w3=212,D3=213,U3=214,ym=0,bm=1,Mm=2,Wl=3,Em=4,Tm=5,Am=6,Rm=7,X1=0,L3=1,N3=2,Ns=0,O3=1,P3=2,z3=3,F3=4,B3=5,I3=6,H3=7,W1=300,Yl=301,ql=302,Cm=303,wm=304,cd=306,Dm=1e3,Fr=1001,Um=1002,ha=1003,G3=1004,eh=1005,Da=1006,C0=1007,So=1008,kr=1009,Y1=1010,q1=1011,Tc=1012,P_=1013,Uo=1014,Br=1015,iu=1016,z_=1017,F_=1018,Ac=1020,Z1=35902,j1=35899,K1=1021,Q1=1022,Xa=1023,Rc=1026,Cc=1027,J1=1028,B_=1029,I_=1030,H_=1031,G_=1033,Ph=33776,zh=33777,Fh=33778,Bh=33779,Lm=35840,Nm=35841,Om=35842,Pm=35843,zm=36196,Fm=37492,Bm=37496,Im=37808,Hm=37809,Gm=37810,Vm=37811,km=37812,Xm=37813,Wm=37814,Ym=37815,qm=37816,Zm=37817,jm=37818,Km=37819,Qm=37820,Jm=37821,$m=36492,t_=36494,e_=36495,n_=36283,i_=36284,a_=36285,r_=36286,V3=3200,k3=3201,X3=0,W3=1,As="",Ra="srgb",Zl="srgb-linear",jh="linear",un="srgb",ml=7680,hy=519,Y3=512,q3=513,Z3=514,$1=515,j3=516,K3=517,Q3=518,J3=519,dy=35044,py="300 es",tr=2e3,Kh=2001;function tb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Qh(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $3(){const o=Qh("canvas");return o.style.display="block",o}const my={};function _y(...o){const t="THREE."+o.shift();console.log(t,...o)}function Me(...o){const t="THREE."+o.shift();console.warn(t,...o)}function zn(...o){const t="THREE."+o.shift();console.error(t,...o)}function wc(...o){const t=o.join(" ");t in my||(my[t]=!0,Me(...o))}function t2(o,t,n){return new Promise(function(a,r){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:r();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}class au{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const r=a[t];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,c=r.length;l<c;l++)r[l].call(this,t);t.target=null}}}const xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],w0=Math.PI/180,s_=180/Math.PI;function Ic(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(xi[o&255]+xi[o>>8&255]+xi[o>>16&255]+xi[o>>24&255]+"-"+xi[t&255]+xi[t>>8&255]+"-"+xi[t>>16&15|64]+xi[t>>24&255]+"-"+xi[n&63|128]+xi[n>>8&255]+"-"+xi[n>>16&255]+xi[n>>24&255]+xi[a&255]+xi[a>>8&255]+xi[a>>16&255]+xi[a>>24&255]).toLowerCase()}function ke(o,t,n){return Math.max(t,Math.min(n,o))}function e2(o,t){return(o%t+t)%t}function D0(o,t,n){return(1-n)*o+n*t}function ju(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class qe{constructor(t=0,n=0){qe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ke(this.x,t.x,n.x),this.y=ke(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ke(this.x,t,n),this.y=ke(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ke(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ke(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*r+t.x,this.y=l*r+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hc{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,l,c,f){let p=a[r+0],h=a[r+1],_=a[r+2],g=a[r+3],x=l[c+0],v=l[c+1],M=l[c+2],b=l[c+3];if(f<=0){t[n+0]=p,t[n+1]=h,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=x,t[n+1]=v,t[n+2]=M,t[n+3]=b;return}if(g!==b||p!==x||h!==v||_!==M){let y=p*x+h*v+_*M+g*b;y<0&&(x=-x,v=-v,M=-M,b=-b,y=-y);let S=1-f;if(y<.9995){const w=Math.acos(y),C=Math.sin(w);S=Math.sin(S*w)/C,f=Math.sin(f*w)/C,p=p*S+x*f,h=h*S+v*f,_=_*S+M*f,g=g*S+b*f}else{p=p*S+x*f,h=h*S+v*f,_=_*S+M*f,g=g*S+b*f;const w=1/Math.sqrt(p*p+h*h+_*_+g*g);p*=w,h*=w,_*=w,g*=w}}t[n]=p,t[n+1]=h,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,r,l,c){const f=a[r],p=a[r+1],h=a[r+2],_=a[r+3],g=l[c],x=l[c+1],v=l[c+2],M=l[c+3];return t[n]=f*M+_*g+p*v-h*x,t[n+1]=p*M+_*x+h*g-f*v,t[n+2]=h*M+_*v+f*x-p*g,t[n+3]=_*M-f*g-p*x-h*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,h=f(a/2),_=f(r/2),g=f(l/2),x=p(a/2),v=p(r/2),M=p(l/2);switch(c){case"XYZ":this._x=x*_*g+h*v*M,this._y=h*v*g-x*_*M,this._z=h*_*M+x*v*g,this._w=h*_*g-x*v*M;break;case"YXZ":this._x=x*_*g+h*v*M,this._y=h*v*g-x*_*M,this._z=h*_*M-x*v*g,this._w=h*_*g+x*v*M;break;case"ZXY":this._x=x*_*g-h*v*M,this._y=h*v*g+x*_*M,this._z=h*_*M+x*v*g,this._w=h*_*g-x*v*M;break;case"ZYX":this._x=x*_*g-h*v*M,this._y=h*v*g+x*_*M,this._z=h*_*M-x*v*g,this._w=h*_*g+x*v*M;break;case"YZX":this._x=x*_*g+h*v*M,this._y=h*v*g+x*_*M,this._z=h*_*M-x*v*g,this._w=h*_*g-x*v*M;break;case"XZY":this._x=x*_*g-h*v*M,this._y=h*v*g-x*_*M,this._z=h*_*M+x*v*g,this._w=h*_*g+x*v*M;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],l=n[8],c=n[1],f=n[5],p=n[9],h=n[2],_=n[6],g=n[10],x=a+f+g;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(_-p)*v,this._y=(l-h)*v,this._z=(c-r)*v}else if(a>f&&a>g){const v=2*Math.sqrt(1+a-f-g);this._w=(_-p)/v,this._x=.25*v,this._y=(r+c)/v,this._z=(l+h)/v}else if(f>g){const v=2*Math.sqrt(1+f-a-g);this._w=(l-h)/v,this._x=(r+c)/v,this._y=.25*v,this._z=(p+_)/v}else{const v=2*Math.sqrt(1+g-a-f);this._w=(c-r)/v,this._x=(l+h)/v,this._y=(p+_)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,l=t._z,c=t._w,f=n._x,p=n._y,h=n._z,_=n._w;return this._x=a*_+c*f+r*h-l*p,this._y=r*_+c*p+l*f-a*h,this._z=l*_+c*h+a*p-r*f,this._w=c*_-a*f-r*p-l*h,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,r=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,r=-r,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const h=Math.acos(f),_=Math.sin(h);p=Math.sin(p*h)/_,n=Math.sin(n*h)/_,this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+r*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pt{constructor(t=0,n=0,a=0){pt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(gy.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(gy.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,l=t.x,c=t.y,f=t.z,p=t.w,h=2*(c*r-f*a),_=2*(f*n-l*r),g=2*(l*a-c*n);return this.x=n+p*h+c*g-f*_,this.y=a+p*_+f*h-l*g,this.z=r+p*g+l*_-c*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ke(this.x,t.x,n.x),this.y=ke(this.y,t.y,n.y),this.z=ke(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ke(this.x,t,n),this.y=ke(this.y,t,n),this.z=ke(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ke(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=r*p-l*f,this.y=l*c-a*p,this.z=a*f-r*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return U0.copy(this).projectOnVector(t),this.sub(U0)}reflect(t){return this.sub(U0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ke(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const U0=new pt,gy=new Hc;class Re{constructor(t,n,a,r,l,c,f,p,h){Re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,h)}set(t,n,a,r,l,c,f,p,h){const _=this.elements;return _[0]=t,_[1]=r,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],h=a[1],_=a[4],g=a[7],x=a[2],v=a[5],M=a[8],b=r[0],y=r[3],S=r[6],w=r[1],C=r[4],U=r[7],P=r[2],L=r[5],D=r[8];return l[0]=c*b+f*w+p*P,l[3]=c*y+f*C+p*L,l[6]=c*S+f*U+p*D,l[1]=h*b+_*w+g*P,l[4]=h*y+_*C+g*L,l[7]=h*S+_*U+g*D,l[2]=x*b+v*w+M*P,l[5]=x*y+v*C+M*L,l[8]=x*S+v*U+M*D,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],_=t[8];return n*c*_-n*f*h-a*l*_+a*f*p+r*l*h-r*c*p}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],_=t[8],g=_*c-f*h,x=f*p-_*l,v=h*l-c*p,M=n*g+a*x+r*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=g*b,t[1]=(r*h-_*a)*b,t[2]=(f*a-r*c)*b,t[3]=x*b,t[4]=(_*n-r*p)*b,t[5]=(r*l-f*n)*b,t[6]=v*b,t[7]=(a*p-h*n)*b,t[8]=(c*n-a*l)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,l,c,f){const p=Math.cos(l),h=Math.sin(l);return this.set(a*p,a*h,-a*(p*c+h*f)+c+t,-r*h,r*p,-r*(-h*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(L0.makeScale(t,n)),this}rotate(t){return this.premultiply(L0.makeRotation(-t)),this}translate(t,n){return this.premultiply(L0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const L0=new Re,xy=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vy=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n2(){const o={enabled:!0,workingColorSpace:Zl,spaces:{},convert:function(r,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===un&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[l].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===un&&(r.r=Bl(r.r),r.g=Bl(r.g),r.b=Bl(r.b))),r},workingToColorSpace:function(r,l){return this.convert(r,this.workingColorSpace,l)},colorSpaceToWorking:function(r,l){return this.convert(r,l,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===As?jh:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,l=this.workingColorSpace){return r.fromArray(this.spaces[l].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,l,c){return r.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,l){return wc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(r,l)},toWorkingColorSpace:function(r,l){return wc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(r,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[Zl]:{primaries:t,whitePoint:a,transfer:jh,toXYZ:xy,fromXYZ:vy,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ra},outputColorSpaceConfig:{drawingBufferColorSpace:Ra}},[Ra]:{primaries:t,whitePoint:a,transfer:un,toXYZ:xy,fromXYZ:vy,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ra}}}),o}const Je=n2();function Gr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bl(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _l;class i2{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{_l===void 0&&(_l=Qh("canvas")),_l.width=t.width,_l.height=t.height;const r=_l.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),a=_l}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Qh("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let c=0;c<l.length;c++)l[c]=Gr(l[c]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Gr(n[a]/255)*255):n[a]=Gr(n[a]);return{data:n,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let a2=0;class V_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=Ic(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let c=0,f=r.length;c<f;c++)r[c].isDataTexture?l.push(N0(r[c].image)):l.push(N0(r[c]))}else l=N0(r);a.url=l}return n||(t.images[this.uuid]=a),a}}function N0(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?i2.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}let r2=0;const O0=new pt;class Pi extends au{constructor(t=Pi.DEFAULT_IMAGE,n=Pi.DEFAULT_MAPPING,a=Fr,r=Fr,l=Da,c=So,f=Xa,p=kr,h=Pi.DEFAULT_ANISOTROPY,_=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=Ic(),this.name="",this.source=new V_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(O0).x}get height(){return this.source.getSize(O0).y}get depth(){return this.source.getSize(O0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){Me(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Me(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&a&&r.isVector2&&a.isVector2||r&&a&&r.isVector3&&a.isVector3||r&&a&&r.isMatrix3&&a.isMatrix3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==W1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dm:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case Um:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dm:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case Um:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pi.DEFAULT_IMAGE=null;Pi.DEFAULT_MAPPING=W1;Pi.DEFAULT_ANISOTROPY=1;class Fn{constructor(t=0,n=0,a=0,r=1){Fn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*r+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*r+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*r+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*r+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,l;const p=t.elements,h=p[0],_=p[4],g=p[8],x=p[1],v=p[5],M=p[9],b=p[2],y=p[6],S=p[10];if(Math.abs(_-x)<.01&&Math.abs(g-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+b)<.1&&Math.abs(M+y)<.1&&Math.abs(h+v+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(h+1)/2,U=(v+1)/2,P=(S+1)/2,L=(_+x)/4,D=(g+b)/4,V=(M+y)/4;return C>U&&C>P?C<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(C),r=L/a,l=D/a):U>P?U<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(U),a=L/r,l=V/r):P<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(P),a=D/l,r=V/l),this.set(a,r,l,n),this}let w=Math.sqrt((y-M)*(y-M)+(g-b)*(g-b)+(x-_)*(x-_));return Math.abs(w)<.001&&(w=1),this.x=(y-M)/w,this.y=(g-b)/w,this.z=(x-_)/w,this.w=Math.acos((h+v+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ke(this.x,t.x,n.x),this.y=ke(this.y,t.y,n.y),this.z=ke(this.z,t.z,n.z),this.w=ke(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ke(this.x,t,n),this.y=ke(this.y,t,n),this.z=ke(this.z,t,n),this.w=ke(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ke(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s2 extends au{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Da,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new Fn(0,0,t,n),this.scissorTest=!1,this.viewport=new Fn(0,0,t,n);const r={width:t,height:n,depth:a.depth},l=new Pi(r);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Da,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},t.textures[n].image);this.textures[n].source=new V_(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends s2{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class eb extends Pi{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=ha,this.minFilter=ha,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class o2 extends Pi{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=ha,this.minFilter=ha,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gc{constructor(t=new pt(1/0,1/0,1/0),n=new pt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ba.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ba.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ba.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Ba):Ba.fromBufferAttribute(l,c),Ba.applyMatrix4(t.matrixWorld),this.expandByPoint(Ba);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nh.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),nh.copy(a.boundingBox)),nh.applyMatrix4(t.matrixWorld),this.union(nh)}const r=t.children;for(let l=0,c=r.length;l<c;l++)this.expandByObject(r[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ba),Ba.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ku),ih.subVectors(this.max,Ku),gl.subVectors(t.a,Ku),xl.subVectors(t.b,Ku),vl.subVectors(t.c,Ku),vs.subVectors(xl,gl),Ss.subVectors(vl,xl),ro.subVectors(gl,vl);let n=[0,-vs.z,vs.y,0,-Ss.z,Ss.y,0,-ro.z,ro.y,vs.z,0,-vs.x,Ss.z,0,-Ss.x,ro.z,0,-ro.x,-vs.y,vs.x,0,-Ss.y,Ss.x,0,-ro.y,ro.x,0];return!P0(n,gl,xl,vl,ih)||(n=[1,0,0,0,1,0,0,0,1],!P0(n,gl,xl,vl,ih))?!1:(ah.crossVectors(vs,Ss),n=[ah.x,ah.y,ah.z],P0(n,gl,xl,vl,ih))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ba).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ba).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ar),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ar=[new pt,new pt,new pt,new pt,new pt,new pt,new pt,new pt],Ba=new pt,nh=new Gc,gl=new pt,xl=new pt,vl=new pt,vs=new pt,Ss=new pt,ro=new pt,Ku=new pt,ih=new pt,ah=new pt,so=new pt;function P0(o,t,n,a,r){for(let l=0,c=o.length-3;l<=c;l+=3){so.fromArray(o,l);const f=r.x*Math.abs(so.x)+r.y*Math.abs(so.y)+r.z*Math.abs(so.z),p=t.dot(so),h=n.dot(so),_=a.dot(so);if(Math.max(-Math.max(p,h,_),Math.min(p,h,_))>f)return!1}return!0}const l2=new Gc,Qu=new pt,z0=new pt;class k_{constructor(t=new pt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):l2.setFromPoints(t).getCenter(a);let r=0;for(let l=0,c=t.length;l<c;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qu.subVectors(t,this.center);const n=Qu.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Qu,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(z0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qu.copy(t.center).add(z0)),this.expandByPoint(Qu.copy(t.center).sub(z0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rr=new pt,F0=new pt,rh=new pt,ys=new pt,B0=new pt,sh=new pt,I0=new pt;class u2{constructor(t=new pt,n=new pt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rr)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Rr.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Rr.copy(this.origin).addScaledVector(this.direction,n),Rr.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){F0.copy(t).add(n).multiplyScalar(.5),rh.copy(n).sub(t).normalize(),ys.copy(this.origin).sub(F0);const l=t.distanceTo(n)*.5,c=-this.direction.dot(rh),f=ys.dot(this.direction),p=-ys.dot(rh),h=ys.lengthSq(),_=Math.abs(1-c*c);let g,x,v,M;if(_>0)if(g=c*p-f,x=c*f-p,M=l*_,g>=0)if(x>=-M)if(x<=M){const b=1/_;g*=b,x*=b,v=g*(g+c*x+2*f)+x*(c*g+x+2*p)+h}else x=l,g=Math.max(0,-(c*x+f)),v=-g*g+x*(x+2*p)+h;else x=-l,g=Math.max(0,-(c*x+f)),v=-g*g+x*(x+2*p)+h;else x<=-M?(g=Math.max(0,-(-c*l+f)),x=g>0?-l:Math.min(Math.max(-l,-p),l),v=-g*g+x*(x+2*p)+h):x<=M?(g=0,x=Math.min(Math.max(-l,-p),l),v=x*(x+2*p)+h):(g=Math.max(0,-(c*l+f)),x=g>0?l:Math.min(Math.max(-l,-p),l),v=-g*g+x*(x+2*p)+h);else x=c>0?-l:l,g=Math.max(0,-(c*x+f)),v=-g*g+x*(x+2*p)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(F0).addScaledVector(rh,x),v}intersectSphere(t,n){Rr.subVectors(t.center,this.origin);const a=Rr.dot(this.direction),r=Rr.dot(Rr)-a*a,l=t.radius*t.radius;if(r>l)return null;const c=Math.sqrt(l-r),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,l,c,f,p;const h=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return h>=0?(a=(t.min.x-x.x)*h,r=(t.max.x-x.x)*h):(a=(t.max.x-x.x)*h,r=(t.min.x-x.x)*h),_>=0?(l=(t.min.y-x.y)*_,c=(t.max.y-x.y)*_):(l=(t.max.y-x.y)*_,c=(t.min.y-x.y)*_),a>c||l>r||((l>a||isNaN(a))&&(a=l),(c<r||isNaN(r))&&(r=c),g>=0?(f=(t.min.z-x.z)*g,p=(t.max.z-x.z)*g):(f=(t.max.z-x.z)*g,p=(t.min.z-x.z)*g),a>p||f>r)||((f>a||a!==a)&&(a=f),(p<r||r!==r)&&(r=p),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,Rr)!==null}intersectTriangle(t,n,a,r,l){B0.subVectors(n,t),sh.subVectors(a,t),I0.crossVectors(B0,sh);let c=this.direction.dot(I0),f;if(c>0){if(r)return null;f=1}else if(c<0)f=-1,c=-c;else return null;ys.subVectors(this.origin,t);const p=f*this.direction.dot(sh.crossVectors(ys,sh));if(p<0)return null;const h=f*this.direction.dot(B0.cross(ys));if(h<0||p+h>c)return null;const _=-f*ys.dot(I0);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qn{constructor(t,n,a,r,l,c,f,p,h,_,g,x,v,M,b,y){Qn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,c,f,p,h,_,g,x,v,M,b,y)}set(t,n,a,r,l,c,f,p,h,_,g,x,v,M,b,y){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=r,S[1]=l,S[5]=c,S[9]=f,S[13]=p,S[2]=h,S[6]=_,S[10]=g,S[14]=x,S[3]=v,S[7]=M,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,r=1/Sl.setFromMatrixColumn(t,0).length(),l=1/Sl.setFromMatrixColumn(t,1).length(),c=1/Sl.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(r),h=Math.sin(r),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const x=c*_,v=c*g,M=f*_,b=f*g;n[0]=p*_,n[4]=-p*g,n[8]=h,n[1]=v+M*h,n[5]=x-b*h,n[9]=-f*p,n[2]=b-x*h,n[6]=M+v*h,n[10]=c*p}else if(t.order==="YXZ"){const x=p*_,v=p*g,M=h*_,b=h*g;n[0]=x+b*f,n[4]=M*f-v,n[8]=c*h,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=v*f-M,n[6]=b+x*f,n[10]=c*p}else if(t.order==="ZXY"){const x=p*_,v=p*g,M=h*_,b=h*g;n[0]=x-b*f,n[4]=-c*g,n[8]=M+v*f,n[1]=v+M*f,n[5]=c*_,n[9]=b-x*f,n[2]=-c*h,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const x=c*_,v=c*g,M=f*_,b=f*g;n[0]=p*_,n[4]=M*h-v,n[8]=x*h+b,n[1]=p*g,n[5]=b*h+x,n[9]=v*h-M,n[2]=-h,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const x=c*p,v=c*h,M=f*p,b=f*h;n[0]=p*_,n[4]=b-x*g,n[8]=M*g+v,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-h*_,n[6]=v*g+M,n[10]=x-b*g}else if(t.order==="XZY"){const x=c*p,v=c*h,M=f*p,b=f*h;n[0]=p*_,n[4]=-g,n[8]=h*_,n[1]=x*g+b,n[5]=c*_,n[9]=v*g-M,n[2]=M*g-v,n[6]=f*_,n[10]=b*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(c2,t,f2)}lookAt(t,n,a){const r=this.elements;return ia.subVectors(t,n),ia.lengthSq()===0&&(ia.z=1),ia.normalize(),bs.crossVectors(a,ia),bs.lengthSq()===0&&(Math.abs(a.z)===1?ia.x+=1e-4:ia.z+=1e-4,ia.normalize(),bs.crossVectors(a,ia)),bs.normalize(),oh.crossVectors(ia,bs),r[0]=bs.x,r[4]=oh.x,r[8]=ia.x,r[1]=bs.y,r[5]=oh.y,r[9]=ia.y,r[2]=bs.z,r[6]=oh.z,r[10]=ia.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],h=a[12],_=a[1],g=a[5],x=a[9],v=a[13],M=a[2],b=a[6],y=a[10],S=a[14],w=a[3],C=a[7],U=a[11],P=a[15],L=r[0],D=r[4],V=r[8],A=r[12],T=r[1],G=r[5],W=r[9],it=r[13],at=r[2],J=r[6],z=r[10],k=r[14],q=r[3],ft=r[7],F=r[11],B=r[15];return l[0]=c*L+f*T+p*at+h*q,l[4]=c*D+f*G+p*J+h*ft,l[8]=c*V+f*W+p*z+h*F,l[12]=c*A+f*it+p*k+h*B,l[1]=_*L+g*T+x*at+v*q,l[5]=_*D+g*G+x*J+v*ft,l[9]=_*V+g*W+x*z+v*F,l[13]=_*A+g*it+x*k+v*B,l[2]=M*L+b*T+y*at+S*q,l[6]=M*D+b*G+y*J+S*ft,l[10]=M*V+b*W+y*z+S*F,l[14]=M*A+b*it+y*k+S*B,l[3]=w*L+C*T+U*at+P*q,l[7]=w*D+C*G+U*J+P*ft,l[11]=w*V+C*W+U*z+P*F,l[15]=w*A+C*it+U*k+P*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],l=t[12],c=t[1],f=t[5],p=t[9],h=t[13],_=t[2],g=t[6],x=t[10],v=t[14],M=t[3],b=t[7],y=t[11],S=t[15];return M*(+l*p*g-r*h*g-l*f*x+a*h*x+r*f*v-a*p*v)+b*(+n*p*v-n*h*x+l*c*x-r*c*v+r*h*_-l*p*_)+y*(+n*h*g-n*f*v-l*c*g+a*c*v+l*f*_-a*h*_)+S*(-r*f*_-n*p*g+n*f*x+r*c*g-a*c*x+a*p*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],c=t[4],f=t[5],p=t[6],h=t[7],_=t[8],g=t[9],x=t[10],v=t[11],M=t[12],b=t[13],y=t[14],S=t[15],w=g*y*h-b*x*h+b*p*v-f*y*v-g*p*S+f*x*S,C=M*x*h-_*y*h-M*p*v+c*y*v+_*p*S-c*x*S,U=_*b*h-M*g*h+M*f*v-c*b*v-_*f*S+c*g*S,P=M*g*p-_*b*p-M*f*x+c*b*x+_*f*y-c*g*y,L=n*w+a*C+r*U+l*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return t[0]=w*D,t[1]=(b*x*l-g*y*l-b*r*v+a*y*v+g*r*S-a*x*S)*D,t[2]=(f*y*l-b*p*l+b*r*h-a*y*h-f*r*S+a*p*S)*D,t[3]=(g*p*l-f*x*l-g*r*h+a*x*h+f*r*v-a*p*v)*D,t[4]=C*D,t[5]=(_*y*l-M*x*l+M*r*v-n*y*v-_*r*S+n*x*S)*D,t[6]=(M*p*l-c*y*l-M*r*h+n*y*h+c*r*S-n*p*S)*D,t[7]=(c*x*l-_*p*l+_*r*h-n*x*h-c*r*v+n*p*v)*D,t[8]=U*D,t[9]=(M*g*l-_*b*l-M*a*v+n*b*v+_*a*S-n*g*S)*D,t[10]=(c*b*l-M*f*l+M*a*h-n*b*h-c*a*S+n*f*S)*D,t[11]=(_*f*l-c*g*l-_*a*h+n*g*h+c*a*v-n*f*v)*D,t[12]=P*D,t[13]=(_*b*r-M*g*r+M*a*x-n*b*x-_*a*y+n*g*y)*D,t[14]=(M*f*r-c*b*r-M*a*p+n*b*p+c*a*y-n*f*y)*D,t[15]=(c*g*r-_*f*r+_*a*p-n*g*p-c*a*x+n*f*x)*D,this}scale(t){const n=this.elements,a=t.x,r=t.y,l=t.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,h=l*c,_=l*f;return this.set(h*c+a,h*f-r*p,h*p+r*f,0,h*f+r*p,_*f+a,_*p-r*c,0,h*p-r*f,_*p+r*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,l,c){return this.set(1,a,l,0,t,1,c,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,h=l+l,_=c+c,g=f+f,x=l*h,v=l*_,M=l*g,b=c*_,y=c*g,S=f*g,w=p*h,C=p*_,U=p*g,P=a.x,L=a.y,D=a.z;return r[0]=(1-(b+S))*P,r[1]=(v+U)*P,r[2]=(M-C)*P,r[3]=0,r[4]=(v-U)*L,r[5]=(1-(x+S))*L,r[6]=(y+w)*L,r[7]=0,r[8]=(M+C)*D,r[9]=(y-w)*D,r[10]=(1-(x+b))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;let l=Sl.set(r[0],r[1],r[2]).length();const c=Sl.set(r[4],r[5],r[6]).length(),f=Sl.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Ia.copy(this);const h=1/l,_=1/c,g=1/f;return Ia.elements[0]*=h,Ia.elements[1]*=h,Ia.elements[2]*=h,Ia.elements[4]*=_,Ia.elements[5]*=_,Ia.elements[6]*=_,Ia.elements[8]*=g,Ia.elements[9]*=g,Ia.elements[10]*=g,n.setFromRotationMatrix(Ia),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,r,l,c,f=tr,p=!1){const h=this.elements,_=2*l/(n-t),g=2*l/(a-r),x=(n+t)/(n-t),v=(a+r)/(a-r);let M,b;if(p)M=l/(c-l),b=c*l/(c-l);else if(f===tr)M=-(c+l)/(c-l),b=-2*c*l/(c-l);else if(f===Kh)M=-c/(c-l),b=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=g,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,r,l,c,f=tr,p=!1){const h=this.elements,_=2/(n-t),g=2/(a-r),x=-(n+t)/(n-t),v=-(a+r)/(a-r);let M,b;if(p)M=1/(c-l),b=c/(c-l);else if(f===tr)M=-2/(c-l),b=-(c+l)/(c-l);else if(f===Kh)M=-1/(c-l),b=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=_,h[4]=0,h[8]=0,h[12]=x,h[1]=0,h[5]=g,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Sl=new pt,Ia=new Qn,c2=new pt(0,0,0),f2=new pt(1,1,1),bs=new pt,oh=new pt,ia=new pt,Sy=new Qn,yy=new Hc;class Xr{constructor(t=0,n=0,a=0,r=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,l=r[0],c=r[4],f=r[8],p=r[1],h=r[5],_=r[9],g=r[2],x=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,v),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ke(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ke(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,v),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Sy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sy,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return yy.setFromEuler(this),this.setFromQuaternion(yy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class nb{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let h2=0;const by=new pt,yl=new Hc,Cr=new Qn,lh=new pt,Ju=new pt,d2=new pt,p2=new Hc,My=new pt(1,0,0),Ey=new pt(0,1,0),Ty=new pt(0,0,1),Ay={type:"added"},m2={type:"removed"},bl={type:"childadded",child:null},H0={type:"childremoved",child:null};class da extends au{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h2++}),this.uuid=Ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=da.DEFAULT_UP.clone();const t=new pt,n=new Xr,a=new Hc,r=new pt(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qn},normalMatrix:{value:new Re}}),this.matrix=new Qn,this.matrixWorld=new Qn,this.matrixAutoUpdate=da.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=da.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return yl.setFromAxisAngle(t,n),this.quaternion.multiply(yl),this}rotateOnWorldAxis(t,n){return yl.setFromAxisAngle(t,n),this.quaternion.premultiply(yl),this}rotateX(t){return this.rotateOnAxis(My,t)}rotateY(t){return this.rotateOnAxis(Ey,t)}rotateZ(t){return this.rotateOnAxis(Ty,t)}translateOnAxis(t,n){return by.copy(t).applyQuaternion(this.quaternion),this.position.add(by.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(My,t)}translateY(t){return this.translateOnAxis(Ey,t)}translateZ(t){return this.translateOnAxis(Ty,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?lh.copy(t):lh.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Ju.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(Ju,lh,this.up):Cr.lookAt(lh,Ju,this.up),this.quaternion.setFromRotationMatrix(Cr),r&&(Cr.extractRotation(r.matrixWorld),yl.setFromRotationMatrix(Cr),this.quaternion.premultiply(yl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(zn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ay),bl.child=t,this.dispatchEvent(bl),bl.child=null):zn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(m2),H0.child=t,this.dispatchEvent(H0),H0.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ay),bl.child=t,this.dispatchEvent(bl),bl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ju,t,d2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ju,p2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let l=0,c=r.length;l<c;l++)r[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(f=>({...f})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,_=p.length;h<_;h++){const g=p[h];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(t.materials,this.material[p]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];r.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),h=c(t.textures),_=c(t.images),g=c(t.shapes),x=c(t.skeletons),v=c(t.animations),M=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),h.length>0&&(a.textures=h),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),x.length>0&&(a.skeletons=x),v.length>0&&(a.animations=v),M.length>0&&(a.nodes=M)}return a.object=r,a;function c(f){const p=[];for(const h in f){const _=f[h];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}da.DEFAULT_UP=new pt(0,1,0);da.DEFAULT_MATRIX_AUTO_UPDATE=!0;da.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ha=new pt,wr=new pt,G0=new pt,Dr=new pt,Ml=new pt,El=new pt,Ry=new pt,V0=new pt,k0=new pt,X0=new pt,W0=new Fn,Y0=new Fn,q0=new Fn;class ka{constructor(t=new pt,n=new pt,a=new pt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Ha.subVectors(t,n),r.cross(Ha);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,n,a,r,l){Ha.subVectors(r,n),wr.subVectors(a,n),G0.subVectors(t,n);const c=Ha.dot(Ha),f=Ha.dot(wr),p=Ha.dot(G0),h=wr.dot(wr),_=wr.dot(G0),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const x=1/g,v=(h*p-f*_)*x,M=(c*_-f*p)*x;return l.set(1-v-M,M,v)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,Dr)===null?!1:Dr.x>=0&&Dr.y>=0&&Dr.x+Dr.y<=1}static getInterpolation(t,n,a,r,l,c,f,p){return this.getBarycoord(t,n,a,r,Dr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Dr.x),p.addScaledVector(c,Dr.y),p.addScaledVector(f,Dr.z),p)}static getInterpolatedAttribute(t,n,a,r,l,c){return W0.setScalar(0),Y0.setScalar(0),q0.setScalar(0),W0.fromBufferAttribute(t,n),Y0.fromBufferAttribute(t,a),q0.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(W0,l.x),c.addScaledVector(Y0,l.y),c.addScaledVector(q0,l.z),c}static isFrontFacing(t,n,a,r){return Ha.subVectors(a,n),wr.subVectors(t,n),Ha.cross(wr).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ha.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Ha.cross(wr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ka.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ka.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,l){return ka.getInterpolation(t,this.a,this.b,this.c,n,a,r,l)}containsPoint(t){return ka.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ka.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,l=this.c;let c,f;Ml.subVectors(r,a),El.subVectors(l,a),V0.subVectors(t,a);const p=Ml.dot(V0),h=El.dot(V0);if(p<=0&&h<=0)return n.copy(a);k0.subVectors(t,r);const _=Ml.dot(k0),g=El.dot(k0);if(_>=0&&g<=_)return n.copy(r);const x=p*g-_*h;if(x<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(Ml,c);X0.subVectors(t,l);const v=Ml.dot(X0),M=El.dot(X0);if(M>=0&&v<=M)return n.copy(l);const b=v*h-p*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),n.copy(a).addScaledVector(El,f);const y=_*M-v*g;if(y<=0&&g-_>=0&&v-M>=0)return Ry.subVectors(l,r),f=(g-_)/(g-_+(v-M)),n.copy(r).addScaledVector(Ry,f);const S=1/(y+b+x);return c=b*S,f=x*S,n.copy(a).addScaledVector(Ml,c).addScaledVector(El,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ib={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},uh={h:0,s:0,l:0};function Z0(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class cn{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ra){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(t,n,a,r=Je.workingColorSpace){return this.r=t,this.g=n,this.b=a,Je.colorSpaceToWorking(this,r),this}setHSL(t,n,a,r=Je.workingColorSpace){if(t=e2(t,1),n=ke(n,0,1),a=ke(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Z0(c,l,t+1/3),this.g=Z0(c,l,t),this.b=Z0(c,l,t-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(t,n=Ra){function a(l){l!==void 0&&parseFloat(l)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=r[1],f=r[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:Me("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ra){const a=ib[t.toLowerCase()];return a!==void 0?this.setHex(a,n):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}copyLinearToSRGB(t){return this.r=Bl(t.r),this.g=Bl(t.g),this.b=Bl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ra){return Je.workingToColorSpace(vi.copy(this),t),Math.round(ke(vi.r*255,0,255))*65536+Math.round(ke(vi.g*255,0,255))*256+Math.round(ke(vi.b*255,0,255))}getHexString(t=Ra){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Je.workingColorSpace){Je.workingToColorSpace(vi.copy(this),n);const a=vi.r,r=vi.g,l=vi.b,c=Math.max(a,r,l),f=Math.min(a,r,l);let p,h;const _=(f+c)/2;if(f===c)p=0,h=0;else{const g=c-f;switch(h=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(r-l)/g+(r<l?6:0);break;case r:p=(l-a)/g+2;break;case l:p=(a-r)/g+4;break}p/=6}return t.h=p,t.s=h,t.l=_,t}getRGB(t,n=Je.workingColorSpace){return Je.workingToColorSpace(vi.copy(this),n),t.r=vi.r,t.g=vi.g,t.b=vi.b,t}getStyle(t=Ra){Je.workingToColorSpace(vi.copy(this),t);const n=vi.r,a=vi.g,r=vi.b;return t!==Ra?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+n,Ms.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ms),t.getHSL(uh);const a=D0(Ms.h,uh.h,n),r=D0(Ms.s,uh.s,n),l=D0(Ms.l,uh.l,n);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new cn;cn.NAMES=ib;let _2=0;class fd extends au{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_2++}),this.uuid=Ic(),this.name="",this.type="Material",this.blending=Fl,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vm,this.blendDst=Sm,this.blendEquation=xo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new cn(0,0,0),this.blendAlpha=0,this.depthFunc=Wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){Me(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Me(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Fl&&(a.blending=this.blending),this.side!==Fs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==vm&&(a.blendSrc=this.blendSrc),this.blendDst!==Sm&&(a.blendDst=this.blendDst),this.blendEquation!==xo&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Wl&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hy&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ml&&(a.stencilFail=this.stencilFail),this.stencilZFail!==ml&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==ml&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=r(t.textures),c=r(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ab extends fd{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new cn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=X1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const kn=new pt,ch=new qe;let g2=0;class ir{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=dy,this.updateRanges=[],this.gpuType=Br,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)ch.fromBufferAttribute(this,n),ch.applyMatrix3(t),this.setXY(n,ch.x,ch.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix3(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix4(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.applyNormalMatrix(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)kn.fromBufferAttribute(this,n),kn.transformDirection(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=ju(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Vi(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ju(n,this.array)),n}setX(t,n){return this.normalized&&(n=Vi(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ju(n,this.array)),n}setY(t,n){return this.normalized&&(n=Vi(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ju(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Vi(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ju(n,this.array)),n}setW(t,n){return this.normalized&&(n=Vi(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Vi(n,this.array),a=Vi(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Vi(n,this.array),a=Vi(a,this.array),r=Vi(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,l){return t*=this.itemSize,this.normalized&&(n=Vi(n,this.array),a=Vi(a,this.array),r=Vi(r,this.array),l=Vi(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dy&&(t.usage=this.usage),t}}class rb extends ir{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class sb extends ir{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Mo extends ir{constructor(t,n,a){super(new Float32Array(t),n,a)}}let x2=0;const Ta=new Qn,j0=new da,Tl=new pt,aa=new Gc,$u=new Gc,ri=new pt;class Gs extends au{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:x2++}),this.uuid=Ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tb(t)?sb:rb)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new Re().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ta.makeRotationFromQuaternion(t),this.applyMatrix4(Ta),this}rotateX(t){return Ta.makeRotationX(t),this.applyMatrix4(Ta),this}rotateY(t){return Ta.makeRotationY(t),this.applyMatrix4(Ta),this}rotateZ(t){return Ta.makeRotationZ(t),this.applyMatrix4(Ta),this}translate(t,n,a){return Ta.makeTranslation(t,n,a),this.applyMatrix4(Ta),this}scale(t,n,a){return Ta.makeScale(t,n,a),this.applyMatrix4(Ta),this}lookAt(t){return j0.lookAt(t),j0.updateMatrix(),this.applyMatrix4(j0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tl).negate(),this.translate(Tl.x,Tl.y,Tl.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let r=0,l=t.length;r<l;r++){const c=t[r];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Mo(a,3))}else{const a=Math.min(t.length,n.count);for(let r=0;r<a;r++){const l=t[r];n.setXYZ(r,l.x,l.y,l.z||0)}t.length>n.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pt(-1/0,-1/0,-1/0),new pt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];aa.setFromBufferAttribute(l),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,aa.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,aa.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(aa.min),this.boundingBox.expandByPoint(aa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new k_);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pt,1/0);return}if(t){const a=this.boundingSphere.center;if(aa.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];$u.setFromBufferAttribute(f),this.morphTargetsRelative?(ri.addVectors(aa.min,$u.min),aa.expandByPoint(ri),ri.addVectors(aa.max,$u.max),aa.expandByPoint(ri)):(aa.expandByPoint($u.min),aa.expandByPoint($u.max))}aa.getCenter(a);let r=0;for(let l=0,c=t.count;l<c;l++)ri.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(ri));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let h=0,_=f.count;h<_;h++)ri.fromBufferAttribute(f,h),p&&(Tl.fromBufferAttribute(t,h),ri.add(Tl)),r=Math.max(r,a.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&zn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){zn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ir(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let V=0;V<a.count;V++)f[V]=new pt,p[V]=new pt;const h=new pt,_=new pt,g=new pt,x=new qe,v=new qe,M=new qe,b=new pt,y=new pt;function S(V,A,T){h.fromBufferAttribute(a,V),_.fromBufferAttribute(a,A),g.fromBufferAttribute(a,T),x.fromBufferAttribute(l,V),v.fromBufferAttribute(l,A),M.fromBufferAttribute(l,T),_.sub(h),g.sub(h),v.sub(x),M.sub(x);const G=1/(v.x*M.y-M.x*v.y);isFinite(G)&&(b.copy(_).multiplyScalar(M.y).addScaledVector(g,-v.y).multiplyScalar(G),y.copy(g).multiplyScalar(v.x).addScaledVector(_,-M.x).multiplyScalar(G),f[V].add(b),f[A].add(b),f[T].add(b),p[V].add(y),p[A].add(y),p[T].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let V=0,A=w.length;V<A;++V){const T=w[V],G=T.start,W=T.count;for(let it=G,at=G+W;it<at;it+=3)S(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const C=new pt,U=new pt,P=new pt,L=new pt;function D(V){P.fromBufferAttribute(r,V),L.copy(P);const A=f[V];C.copy(A),C.sub(P.multiplyScalar(P.dot(A))).normalize(),U.crossVectors(L,A);const G=U.dot(p[V])<0?-1:1;c.setXYZW(V,C.x,C.y,C.z,G)}for(let V=0,A=w.length;V<A;++V){const T=w[V],G=T.start,W=T.count;for(let it=G,at=G+W;it<at;it+=3)D(t.getX(it+0)),D(t.getX(it+1)),D(t.getX(it+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ir(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,v=a.count;x<v;x++)a.setXYZ(x,0,0,0);const r=new pt,l=new pt,c=new pt,f=new pt,p=new pt,h=new pt,_=new pt,g=new pt;if(t)for(let x=0,v=t.count;x<v;x+=3){const M=t.getX(x+0),b=t.getX(x+1),y=t.getX(x+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,y),_.subVectors(c,l),g.subVectors(r,l),_.cross(g),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,b),h.fromBufferAttribute(a,y),f.add(_),p.add(_),h.add(_),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,p.x,p.y,p.z),a.setXYZ(y,h.x,h.y,h.z)}else for(let x=0,v=n.count;x<v;x+=3)r.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),c.fromBufferAttribute(n,x+2),_.subVectors(c,l),g.subVectors(r,l),_.cross(g),a.setXYZ(x+0,_.x,_.y,_.z),a.setXYZ(x+1,_.x,_.y,_.z),a.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)ri.fromBufferAttribute(t,n),ri.normalize(),t.setXYZ(n,ri.x,ri.y,ri.z)}toNonIndexed(){function t(f,p){const h=f.array,_=f.itemSize,g=f.normalized,x=new h.constructor(p.length*_);let v=0,M=0;for(let b=0,y=p.length;b<y;b++){f.isInterleavedBufferAttribute?v=p[b]*f.data.stride+f.offset:v=p[b]*_;for(let S=0;S<_;S++)x[M++]=h[v++]}return new ir(x,_,g)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gs,a=this.index.array,r=this.attributes;for(const f in r){const p=r[f],h=t(p,a);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let _=0,g=h.length;_<g;_++){const x=h[_],v=t(x,a);p.push(v)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const h=c[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(t[h]=p[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const h=a[p];t.data.attributes[p]=h.toJSON(t.data)}const r={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],_=[];for(let g=0,x=h.length;g<x;g++){const v=h[g];_.push(v.toJSON(t.data))}_.length>0&&(r[p]=_,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const r=t.attributes;for(const h in r){const _=r[h];this.setAttribute(h,_.clone(n))}const l=t.morphAttributes;for(const h in l){const _=[],g=l[h];for(let x=0,v=g.length;x<v;x++)_.push(g[x].clone(n));this.morphAttributes[h]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let h=0,_=c.length;h<_;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cy=new Qn,oo=new u2,fh=new k_,wy=new pt,hh=new pt,dh=new pt,ph=new pt,K0=new pt,mh=new pt,Dy=new pt,_h=new pt;class Wr extends da{constructor(t=new Gs,n=new ab){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=r.length;l<c;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){mh.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const _=f[p],g=l[p];_!==0&&(K0.fromBufferAttribute(g,t),c?mh.addScaledVector(K0,_):mh.addScaledVector(K0.sub(n),_))}n.add(mh)}return n}raycast(t,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),fh.copy(a.boundingSphere),fh.applyMatrix4(l),oo.copy(t.ray).recast(t.near),!(fh.containsPoint(oo.origin)===!1&&(oo.intersectSphere(fh,wy)===null||oo.origin.distanceToSquared(wy)>(t.far-t.near)**2))&&(Cy.copy(l).invert(),oo.copy(t.ray).applyMatrix4(Cy),!(a.boundingBox!==null&&oo.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,oo)))}_computeIntersections(t,n,a){let r;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,x=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,b=x.length;M<b;M++){const y=x[M],S=c[y.materialIndex],w=Math.max(y.start,v.start),C=Math.min(f.count,Math.min(y.start+y.count,v.start+v.count));for(let U=w,P=C;U<P;U+=3){const L=f.getX(U),D=f.getX(U+1),V=f.getX(U+2);r=gh(this,S,t,a,h,_,g,L,D,V),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const M=Math.max(0,v.start),b=Math.min(f.count,v.start+v.count);for(let y=M,S=b;y<S;y+=3){const w=f.getX(y),C=f.getX(y+1),U=f.getX(y+2);r=gh(this,c,t,a,h,_,g,w,C,U),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,b=x.length;M<b;M++){const y=x[M],S=c[y.materialIndex],w=Math.max(y.start,v.start),C=Math.min(p.count,Math.min(y.start+y.count,v.start+v.count));for(let U=w,P=C;U<P;U+=3){const L=U,D=U+1,V=U+2;r=gh(this,S,t,a,h,_,g,L,D,V),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=y.materialIndex,n.push(r))}}else{const M=Math.max(0,v.start),b=Math.min(p.count,v.start+v.count);for(let y=M,S=b;y<S;y+=3){const w=y,C=y+1,U=y+2;r=gh(this,c,t,a,h,_,g,w,C,U),r&&(r.faceIndex=Math.floor(y/3),n.push(r))}}}}function v2(o,t,n,a,r,l,c,f){let p;if(t.side===Xi?p=a.intersectTriangle(c,l,r,!0,f):p=a.intersectTriangle(r,l,c,t.side===Fs,f),p===null)return null;_h.copy(f),_h.applyMatrix4(o.matrixWorld);const h=n.ray.origin.distanceTo(_h);return h<n.near||h>n.far?null:{distance:h,point:_h.clone(),object:o}}function gh(o,t,n,a,r,l,c,f,p,h){o.getVertexPosition(f,hh),o.getVertexPosition(p,dh),o.getVertexPosition(h,ph);const _=v2(o,t,n,a,hh,dh,ph,Dy);if(_){const g=new pt;ka.getBarycoord(Dy,hh,dh,ph,g),r&&(_.uv=ka.getInterpolatedAttribute(r,f,p,h,g,new qe)),l&&(_.uv1=ka.getInterpolatedAttribute(l,f,p,h,g,new qe)),c&&(_.normal=ka.getInterpolatedAttribute(c,f,p,h,g,new pt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:p,c:h,normal:new pt,materialIndex:0};ka.getNormal(hh,dh,ph,x.normal),_.face=x,_.barycoord=g}return _}class Vc extends Gs{constructor(t=1,n=1,a=1,r=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:c};const f=this;r=Math.floor(r),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],_=[],g=[];let x=0,v=0;M("z","y","x",-1,-1,a,n,t,c,l,0),M("z","y","x",1,-1,a,n,-t,c,l,1),M("x","z","y",1,1,t,a,n,r,c,2),M("x","z","y",1,-1,t,a,-n,r,c,3),M("x","y","z",1,-1,t,n,a,r,l,4),M("x","y","z",-1,-1,t,n,-a,r,l,5),this.setIndex(p),this.setAttribute("position",new Mo(h,3)),this.setAttribute("normal",new Mo(_,3)),this.setAttribute("uv",new Mo(g,2));function M(b,y,S,w,C,U,P,L,D,V,A){const T=U/D,G=P/V,W=U/2,it=P/2,at=L/2,J=D+1,z=V+1;let k=0,q=0;const ft=new pt;for(let F=0;F<z;F++){const B=F*G-it;for(let rt=0;rt<J;rt++){const xt=rt*T-W;ft[b]=xt*w,ft[y]=B*C,ft[S]=at,h.push(ft.x,ft.y,ft.z),ft[b]=0,ft[y]=0,ft[S]=L>0?1:-1,_.push(ft.x,ft.y,ft.z),g.push(rt/D),g.push(1-F/V),k+=1}}for(let F=0;F<V;F++)for(let B=0;B<D;B++){const rt=x+B+J*F,xt=x+B+J*(F+1),St=x+(B+1)+J*(F+1),wt=x+(B+1)+J*F;p.push(rt,xt,wt),p.push(xt,St,wt),q+=6}f.addGroup(v,q,A),v+=q,x+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function jl(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const r=o[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function wi(o){const t={};for(let n=0;n<o.length;n++){const a=jl(o[n]);for(const r in a)t[r]=a[r]}return t}function S2(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function ob(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}const y2={clone:jl,merge:wi};var b2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends fd{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b2,this.fragmentShader=M2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=jl(t.uniforms),this.uniformsGroups=S2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?n.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[r]={type:"m4",value:c.toArray()}:n.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class lb extends da{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qn,this.projectionMatrix=new Qn,this.projectionMatrixInverse=new Qn,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Es=new pt,Uy=new qe,Ly=new qe;class Va extends lb{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=s_*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(w0*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return s_*2*Math.atan(Math.tan(w0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,n){return this.getViewBounds(t,Uy,Ly),n.subVectors(Ly,Uy)}setViewOffset(t,n,a,r,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(w0*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*r/p,n-=c.offsetY*a/h,r*=c.width/p,a*=c.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Al=-90,Rl=1;class E2 extends da{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Va(Al,Rl,t,n);r.layers=this.layers,this.add(r);const l=new Va(Al,Rl,t,n);l.layers=this.layers,this.add(l);const c=new Va(Al,Rl,t,n);c.layers=this.layers,this.add(c);const f=new Va(Al,Rl,t,n);f.layers=this.layers,this.add(f);const p=new Va(Al,Rl,t,n);p.layers=this.layers,this.add(p);const h=new Va(Al,Rl,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,l,c,f,p]=n;for(const h of n)this.remove(h);if(t===tr)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Kh)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,h,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,l),t.setRenderTarget(a,1,r),t.render(n,c),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,p),t.setRenderTarget(a,4,r),t.render(n,h),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,r),t.render(n,_),t.setRenderTarget(g,x,v),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class ub extends Pi{constructor(t=[],n=Yl,a,r,l,c,f,p,h,_){super(t,n,a,r,l,c,f,p,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class T2 extends Lo{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new ub(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vc(5,5,5),l=new rr({name:"CubemapFromEquirect",uniforms:jl(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Xi,blending:Hr});l.uniforms.tEquirect.value=n;const c=new Wr(r,l),f=n.minFilter;return n.minFilter===So&&(n.minFilter=Da),new E2(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,r=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,r);t.setRenderTarget(l)}}class xh extends da{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A2={type:"move"};class Q0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,l=null,c=null;const f=this._targetRay,p=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){c=!0;for(const b of t.hand.values()){const y=n.getJointPose(b,a),S=this._getHandJoint(h,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],x=_.position.distanceTo(g.position),v=.02,M=.005;h.inputState.pinching&&x>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&x<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(A2)))}return f!==null&&(f.visible=r!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new xh;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class R2 extends da{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class C2 extends Pi{constructor(t=null,n=1,a=1,r,l,c,f,p,h=ha,_=ha,g,x){super(null,c,f,p,h,_,r,l,g,x),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const J0=new pt,w2=new pt,D2=new Re;class po{constructor(t=new pt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=J0.subVectors(a,n).cross(w2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(J0),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||D2.getNormalMatrix(t),r=this.coplanarPoint(J0).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lo=new k_,U2=new qe(.5,.5),vh=new pt;class cb{constructor(t=new po,n=new po,a=new po,r=new po,l=new po,c=new po){this.planes=[t,n,a,r,l,c]}set(t,n,a,r,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=tr,a=!1){const r=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],h=l[3],_=l[4],g=l[5],x=l[6],v=l[7],M=l[8],b=l[9],y=l[10],S=l[11],w=l[12],C=l[13],U=l[14],P=l[15];if(r[0].setComponents(h-c,v-_,S-M,P-w).normalize(),r[1].setComponents(h+c,v+_,S+M,P+w).normalize(),r[2].setComponents(h+f,v+g,S+b,P+C).normalize(),r[3].setComponents(h-f,v-g,S-b,P-C).normalize(),a)r[4].setComponents(p,x,y,U).normalize(),r[5].setComponents(h-p,v-x,S-y,P-U).normalize();else if(r[4].setComponents(h-p,v-x,S-y,P-U).normalize(),n===tr)r[5].setComponents(h+p,v+x,S+y,P+U).normalize();else if(n===Kh)r[5].setComponents(p,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lo)}intersectsSprite(t){lo.center.set(0,0,0);const n=U2.distanceTo(t.center);return lo.radius=.7071067811865476+n,lo.applyMatrix4(t.matrixWorld),this.intersectsSphere(lo)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(vh.x=r.normal.x>0?t.max.x:t.min.x,vh.y=r.normal.y>0?t.max.y:t.min.y,vh.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(vh)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fb extends Pi{constructor(t,n,a=Uo,r,l,c,f=ha,p=ha,h,_=Rc,g=1){if(_!==Rc&&_!==Cc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:g};super(x,r,l,c,f,p,_,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new V_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hb extends Pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class kc extends Gs{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(r),h=f+1,_=p+1,g=t/f,x=n/p,v=[],M=[],b=[],y=[];for(let S=0;S<_;S++){const w=S*x-c;for(let C=0;C<h;C++){const U=C*g-l;M.push(U,-w,0),b.push(0,0,1),y.push(C/f),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let w=0;w<f;w++){const C=w+h*S,U=w+h*(S+1),P=w+1+h*(S+1),L=w+1+h*S;v.push(C,U,L),v.push(U,P,L)}this.setIndex(v),this.setAttribute("position",new Mo(M,3)),this.setAttribute("normal",new Mo(b,3)),this.setAttribute("uv",new Mo(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class L2 extends fd{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N2 extends fd{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class db extends lb{constructor(t=-1,n=1,a=1,r=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=r+n,p=r-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class O2 extends Va{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class P2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Ny(o,t,n,a){const r=z2(a);switch(n){case K1:return o*t;case J1:return o*t/r.components*r.byteLength;case B_:return o*t/r.components*r.byteLength;case I_:return o*t*2/r.components*r.byteLength;case H_:return o*t*2/r.components*r.byteLength;case Q1:return o*t*3/r.components*r.byteLength;case Xa:return o*t*4/r.components*r.byteLength;case G_:return o*t*4/r.components*r.byteLength;case Ph:case zh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fh:case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nm:case Pm:return Math.max(o,16)*Math.max(t,8)/4;case Lm:case Om:return Math.max(o,8)*Math.max(t,8)/2;case zm:case Fm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Im:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hm:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Vm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case km:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ym:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case qm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Zm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case jm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Km:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case $m:case t_:case e_:return Math.ceil(o/4)*Math.ceil(t/4)*16;case n_:case i_:return Math.ceil(o/4)*Math.ceil(t/4)*8;case a_:case r_:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function z2(o){switch(o){case kr:case Y1:return{byteLength:1,components:1};case Tc:case q1:case iu:return{byteLength:2,components:1};case z_:case F_:return{byteLength:2,components:4};case Uo:case P_:case Br:return{byteLength:4,components:1};case Z1:case j1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:O_}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=O_);function pb(){let o=null,t=!1,n=null,a=null;function r(l,c){n(l,c),a=o.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(r),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function F2(o){const t=new WeakMap;function n(f,p){const h=f.array,_=f.usage,g=h.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,h,_),f.onUploadCallback();let v;if(h instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=o.SHORT;else if(h instanceof Uint32Array)v=o.UNSIGNED_INT;else if(h instanceof Int32Array)v=o.INT;else if(h instanceof Int8Array)v=o.BYTE;else if(h instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,h){const _=p.array,g=p.updateRanges;if(o.bindBuffer(h,f),g.length===0)o.bufferSubData(h,0,_);else{g.sort((v,M)=>v.start-M.start);let x=0;for(let v=1;v<g.length;v++){const M=g[x],b=g[v];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++x,g[x]=b)}g.length=x+1;for(let v=0,M=g.length;v<M;v++){const b=g[v];o.bufferSubData(h,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,n(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,p),h.version=f.version}}return{get:r,remove:l,update:c}}var B2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I2=`#ifdef USE_ALPHAHASH
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
#endif`,H2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X2=`#ifdef USE_AOMAP
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
#endif`,W2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y2=`#ifdef USE_BATCHING
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
#endif`,q2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q2=`#ifdef USE_IRIDESCENCE
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
#endif`,J2=`#ifdef USE_BUMPMAP
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
#endif`,$2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oA=`#define PI 3.141592653589793
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
} // validated`,lA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uA=`vec3 transformedNormal = objectNormal;
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
#endif`,cA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pA="gl_FragColor = linearToOutputTexel( gl_FragColor );",mA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_A=`#ifdef USE_ENVMAP
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
#endif`,gA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xA=`#ifdef USE_ENVMAP
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
#endif`,vA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SA=`#ifdef USE_ENVMAP
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
#endif`,yA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TA=`#ifdef USE_GRADIENTMAP
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
}`,AA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wA=`uniform bool receiveShadow;
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
#endif`,DA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,UA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PA=`PhysicalMaterial material;
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
#endif`,zA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,FA=`
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
#endif`,BA=`#if defined( RE_IndirectDiffuse )
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
#endif`,IA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qA=`#if defined( USE_POINTS_UV )
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
#endif`,ZA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$A=`#ifdef USE_MORPHTARGETS
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
#endif`,tR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sR=`#ifdef USE_NORMALMAP
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
#endif`,oR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_R=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,SR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bR=`float getShadowMask() {
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
}`,MR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ER=`#ifdef USE_SKINNING
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
#endif`,TR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AR=`#ifdef USE_SKINNING
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
#endif`,RR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UR=`#ifdef USE_TRANSMISSION
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
#endif`,LR=`#ifdef USE_TRANSMISSION
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
#endif`,NR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BR=`uniform sampler2D t2D;
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
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kR=`#include <common>
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
}`,XR=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,WR=`#define DISTANCE
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
}`,YR=`#define DISTANCE
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
}`,qR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jR=`uniform float scale;
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
}`,KR=`uniform vec3 diffuse;
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
}`,QR=`#include <common>
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
}`,JR=`uniform vec3 diffuse;
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
}`,$R=`#define LAMBERT
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
}`,tC=`#define LAMBERT
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
}`,eC=`#define MATCAP
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
}`,nC=`#define MATCAP
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
}`,iC=`#define NORMAL
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
}`,aC=`#define NORMAL
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
}`,rC=`#define PHONG
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
}`,sC=`#define PHONG
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
}`,oC=`#define STANDARD
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
}`,lC=`#define STANDARD
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
}`,uC=`#define TOON
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
}`,cC=`#define TOON
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
}`,fC=`uniform float size;
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
}`,hC=`uniform vec3 diffuse;
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
}`,dC=`#include <common>
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
}`,pC=`uniform vec3 color;
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
}`,mC=`uniform float rotation;
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
}`,_C=`uniform vec3 diffuse;
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
}`,Ce={alphahash_fragment:B2,alphahash_pars_fragment:I2,alphamap_fragment:H2,alphamap_pars_fragment:G2,alphatest_fragment:V2,alphatest_pars_fragment:k2,aomap_fragment:X2,aomap_pars_fragment:W2,batching_pars_vertex:Y2,batching_vertex:q2,begin_vertex:Z2,beginnormal_vertex:j2,bsdfs:K2,iridescence_fragment:Q2,bumpmap_pars_fragment:J2,clipping_planes_fragment:$2,clipping_planes_pars_fragment:tA,clipping_planes_pars_vertex:eA,clipping_planes_vertex:nA,color_fragment:iA,color_pars_fragment:aA,color_pars_vertex:rA,color_vertex:sA,common:oA,cube_uv_reflection_fragment:lA,defaultnormal_vertex:uA,displacementmap_pars_vertex:cA,displacementmap_vertex:fA,emissivemap_fragment:hA,emissivemap_pars_fragment:dA,colorspace_fragment:pA,colorspace_pars_fragment:mA,envmap_fragment:_A,envmap_common_pars_fragment:gA,envmap_pars_fragment:xA,envmap_pars_vertex:vA,envmap_physical_pars_fragment:DA,envmap_vertex:SA,fog_vertex:yA,fog_pars_vertex:bA,fog_fragment:MA,fog_pars_fragment:EA,gradientmap_pars_fragment:TA,lightmap_pars_fragment:AA,lights_lambert_fragment:RA,lights_lambert_pars_fragment:CA,lights_pars_begin:wA,lights_toon_fragment:UA,lights_toon_pars_fragment:LA,lights_phong_fragment:NA,lights_phong_pars_fragment:OA,lights_physical_fragment:PA,lights_physical_pars_fragment:zA,lights_fragment_begin:FA,lights_fragment_maps:BA,lights_fragment_end:IA,logdepthbuf_fragment:HA,logdepthbuf_pars_fragment:GA,logdepthbuf_pars_vertex:VA,logdepthbuf_vertex:kA,map_fragment:XA,map_pars_fragment:WA,map_particle_fragment:YA,map_particle_pars_fragment:qA,metalnessmap_fragment:ZA,metalnessmap_pars_fragment:jA,morphinstance_vertex:KA,morphcolor_vertex:QA,morphnormal_vertex:JA,morphtarget_pars_vertex:$A,morphtarget_vertex:tR,normal_fragment_begin:eR,normal_fragment_maps:nR,normal_pars_fragment:iR,normal_pars_vertex:aR,normal_vertex:rR,normalmap_pars_fragment:sR,clearcoat_normal_fragment_begin:oR,clearcoat_normal_fragment_maps:lR,clearcoat_pars_fragment:uR,iridescence_pars_fragment:cR,opaque_fragment:fR,packing:hR,premultiplied_alpha_fragment:dR,project_vertex:pR,dithering_fragment:mR,dithering_pars_fragment:_R,roughnessmap_fragment:gR,roughnessmap_pars_fragment:xR,shadowmap_pars_fragment:vR,shadowmap_pars_vertex:SR,shadowmap_vertex:yR,shadowmask_pars_fragment:bR,skinbase_vertex:MR,skinning_pars_vertex:ER,skinning_vertex:TR,skinnormal_vertex:AR,specularmap_fragment:RR,specularmap_pars_fragment:CR,tonemapping_fragment:wR,tonemapping_pars_fragment:DR,transmission_fragment:UR,transmission_pars_fragment:LR,uv_pars_fragment:NR,uv_pars_vertex:OR,uv_vertex:PR,worldpos_vertex:zR,background_vert:FR,background_frag:BR,backgroundCube_vert:IR,backgroundCube_frag:HR,cube_vert:GR,cube_frag:VR,depth_vert:kR,depth_frag:XR,distanceRGBA_vert:WR,distanceRGBA_frag:YR,equirect_vert:qR,equirect_frag:ZR,linedashed_vert:jR,linedashed_frag:KR,meshbasic_vert:QR,meshbasic_frag:JR,meshlambert_vert:$R,meshlambert_frag:tC,meshmatcap_vert:eC,meshmatcap_frag:nC,meshnormal_vert:iC,meshnormal_frag:aC,meshphong_vert:rC,meshphong_frag:sC,meshphysical_vert:oC,meshphysical_frag:lC,meshtoon_vert:uC,meshtoon_frag:cC,points_vert:fC,points_frag:hC,shadow_vert:dC,shadow_frag:pC,sprite_vert:mC,sprite_frag:_C},kt={common:{diffuse:{value:new cn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new cn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new cn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new cn(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Ja={basic:{uniforms:wi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:wi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new cn(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:wi([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new cn(0)},specular:{value:new cn(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:wi([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new cn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:wi([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new cn(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:wi([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:wi([kt.points,kt.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:wi([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:wi([kt.common,kt.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:wi([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:wi([kt.sprite,kt.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:wi([kt.common,kt.displacementmap,{referencePosition:{value:new pt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:wi([kt.lights,kt.fog,{color:{value:new cn(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Ja.physical={uniforms:wi([Ja.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new cn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new cn(0)},specularColor:{value:new cn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Sh={r:0,b:0,g:0},uo=new Xr,gC=new Qn;function xC(o,t,n,a,r,l,c){const f=new cn(0);let p=l===!0?0:1,h,_,g=null,x=0,v=null;function M(C){let U=C.isScene===!0?C.background:null;return U&&U.isTexture&&(U=(C.backgroundBlurriness>0?n:t).get(U)),U}function b(C){let U=!1;const P=M(C);P===null?S(f,p):P&&P.isColor&&(S(P,1),U=!0);const L=o.xr.getEnvironmentBlendMode();L==="additive"?a.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||U)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(C,U){const P=M(U);P&&(P.isCubeTexture||P.mapping===cd)?(_===void 0&&(_=new Wr(new Vc(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:jl(Ja.backgroundCube.uniforms),vertexShader:Ja.backgroundCube.vertexShader,fragmentShader:Ja.backgroundCube.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(L,D,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),uo.copy(U.backgroundRotation),uo.x*=-1,uo.y*=-1,uo.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(gC.makeRotationFromEuler(uo)),_.material.toneMapped=Je.getTransfer(P.colorSpace)!==un,(g!==P||x!==P.version||v!==o.toneMapping)&&(_.material.needsUpdate=!0,g=P,x=P.version,v=o.toneMapping),_.layers.enableAll(),C.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Wr(new kc(2,2),new rr({name:"BackgroundMaterial",uniforms:jl(Ja.background.uniforms),vertexShader:Ja.background.vertexShader,fragmentShader:Ja.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.toneMapped=Je.getTransfer(P.colorSpace)!==un,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,g=P,x=P.version,v=o.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function S(C,U){C.getRGB(Sh,ob(o)),a.buffers.color.setClear(Sh.r,Sh.g,Sh.b,U,c)}function w(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(C,U=1){f.set(C),p=U,S(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,S(f,p)},render:b,addToRenderList:y,dispose:w}}function vC(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},r=x(null);let l=r,c=!1;function f(T,G,W,it,at){let J=!1;const z=g(it,W,G);l!==z&&(l=z,h(l.object)),J=v(T,it,W,at),J&&M(T,it,W,at),at!==null&&t.update(at,o.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,U(T,G,W,it),at!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function p(){return o.createVertexArray()}function h(T){return o.bindVertexArray(T)}function _(T){return o.deleteVertexArray(T)}function g(T,G,W){const it=W.wireframe===!0;let at=a[T.id];at===void 0&&(at={},a[T.id]=at);let J=at[G.id];J===void 0&&(J={},at[G.id]=J);let z=J[it];return z===void 0&&(z=x(p()),J[it]=z),z}function x(T){const G=[],W=[],it=[];for(let at=0;at<n;at++)G[at]=0,W[at]=0,it[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:it,object:T,attributes:{},index:null}}function v(T,G,W,it){const at=l.attributes,J=G.attributes;let z=0;const k=W.getAttributes();for(const q in k)if(k[q].location>=0){const F=at[q];let B=J[q];if(B===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(B=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(B=T.instanceColor)),F===void 0||F.attribute!==B||B&&F.data!==B.data)return!0;z++}return l.attributesNum!==z||l.index!==it}function M(T,G,W,it){const at={},J=G.attributes;let z=0;const k=W.getAttributes();for(const q in k)if(k[q].location>=0){let F=J[q];F===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(F=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(F=T.instanceColor));const B={};B.attribute=F,F&&F.data&&(B.data=F.data),at[q]=B,z++}l.attributes=at,l.attributesNum=z,l.index=it}function b(){const T=l.newAttributes;for(let G=0,W=T.length;G<W;G++)T[G]=0}function y(T){S(T,0)}function S(T,G){const W=l.newAttributes,it=l.enabledAttributes,at=l.attributeDivisors;W[T]=1,it[T]===0&&(o.enableVertexAttribArray(T),it[T]=1),at[T]!==G&&(o.vertexAttribDivisor(T,G),at[T]=G)}function w(){const T=l.newAttributes,G=l.enabledAttributes;for(let W=0,it=G.length;W<it;W++)G[W]!==T[W]&&(o.disableVertexAttribArray(W),G[W]=0)}function C(T,G,W,it,at,J,z){z===!0?o.vertexAttribIPointer(T,G,W,at,J):o.vertexAttribPointer(T,G,W,it,at,J)}function U(T,G,W,it){b();const at=it.attributes,J=W.getAttributes(),z=G.defaultAttributeValues;for(const k in J){const q=J[k];if(q.location>=0){let ft=at[k];if(ft===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const F=ft.normalized,B=ft.itemSize,rt=t.get(ft);if(rt===void 0)continue;const xt=rt.buffer,St=rt.type,wt=rt.bytesPerElement,et=St===o.INT||St===o.UNSIGNED_INT||ft.gpuType===P_;if(ft.isInterleavedBufferAttribute){const ot=ft.data,At=ot.stride,Nt=ft.offset;if(ot.isInstancedInterleavedBuffer){for(let Ft=0;Ft<q.locationSize;Ft++)S(q.location+Ft,ot.meshPerAttribute);T.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ft=0;Ft<q.locationSize;Ft++)y(q.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let Ft=0;Ft<q.locationSize;Ft++)C(q.location+Ft,B/q.locationSize,St,F,At*wt,(Nt+B/q.locationSize*Ft)*wt,et)}else{if(ft.isInstancedBufferAttribute){for(let ot=0;ot<q.locationSize;ot++)S(q.location+ot,ft.meshPerAttribute);T.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ot=0;ot<q.locationSize;ot++)y(q.location+ot);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ot=0;ot<q.locationSize;ot++)C(q.location+ot,B/q.locationSize,St,F,B*wt,B/q.locationSize*ot*wt,et)}}else if(z!==void 0){const F=z[k];if(F!==void 0)switch(F.length){case 2:o.vertexAttrib2fv(q.location,F);break;case 3:o.vertexAttrib3fv(q.location,F);break;case 4:o.vertexAttrib4fv(q.location,F);break;default:o.vertexAttrib1fv(q.location,F)}}}}w()}function P(){V();for(const T in a){const G=a[T];for(const W in G){const it=G[W];for(const at in it)_(it[at].object),delete it[at];delete G[W]}delete a[T]}}function L(T){if(a[T.id]===void 0)return;const G=a[T.id];for(const W in G){const it=G[W];for(const at in it)_(it[at].object),delete it[at];delete G[W]}delete a[T.id]}function D(T){for(const G in a){const W=a[G];if(W[T.id]===void 0)continue;const it=W[T.id];for(const at in it)_(it[at].object),delete it[at];delete W[T.id]}}function V(){A(),c=!0,l!==r&&(l=r,h(l.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:V,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:y,disableUnusedAttributes:w}}function SC(o,t,n){let a;function r(h){a=h}function l(h,_){o.drawArrays(a,h,_),n.update(_,a,1)}function c(h,_,g){g!==0&&(o.drawArraysInstanced(a,h,_,g),n.update(_,a,g))}function f(h,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,_,0,g);let v=0;for(let M=0;M<g;M++)v+=_[M];n.update(v,a,1)}function p(h,_,g,x){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)c(h[M],_[M],x[M]);else{v.multiDrawArraysInstancedWEBGL(a,h,0,_,0,x,0,g);let M=0;for(let b=0;b<g;b++)M+=_[b]*x[b];n.update(M,a,1)}}this.setMode=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function yC(o,t,n,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(D){return!(D!==Xa&&a.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const V=D===iu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==kr&&a.convert(D)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Br&&!V)}function p(D){if(D==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const _=p(h);_!==h&&(Me("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),C=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,L=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:v,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:U,vertexTextures:P,maxSamples:L}}function bC(o){const t=this;let n=null,a=0,r=!1,l=!1;const c=new po,f=new Re,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const v=g.length!==0||x||a!==0||r;return r=x,a=g.length,v},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){n=_(g,x,0)},this.setState=function(g,x,v){const M=g.clippingPlanes,b=g.clipIntersection,y=g.clipShadows,S=o.get(g);if(!r||M===null||M.length===0||l&&!y)l?_(null):h();else{const w=l?0:a,C=w*4;let U=S.clippingState||null;p.value=U,U=_(M,x,C,v);for(let P=0;P!==C;++P)U[P]=n[P];S.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,x,v,M){const b=g!==null?g.length:0;let y=null;if(b!==0){if(y=p.value,M!==!0||y===null){const S=v+b*4,w=x.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,U=v;C!==b;++C,U+=4)c.copy(g[C]).applyMatrix4(w,f),c.normal.toArray(y,U),y[U+3]=c.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function MC(o){let t=new WeakMap;function n(c,f){return f===Cm?c.mapping=Yl:f===wm&&(c.mapping=ql),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===Cm||f===wm)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new T2(p.height);return h.fromEquirectangularTexture(o,c),t.set(c,h),c.addEventListener("dispose",r),n(h.texture,c.mapping)}else return null}}return c}function r(c){const f=c.target;f.removeEventListener("dispose",r);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Rs=4,Oy=[.125,.215,.35,.446,.526,.582],vo=20,EC=256,tc=new db,Py=new cn;let $0=null,tm=0,em=0,nm=!1;const TC=new pt;class zy{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,r=100,l={}){const{size:c=256,position:f=TC}=l;$0=this._renderer.getRenderTarget(),tm=this._renderer.getActiveCubeFace(),em=this._renderer.getActiveMipmapLevel(),nm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,r,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=By(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($0,tm,em),this._renderer.xr.enabled=nm,t.scissorTest=!1,Cl(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Yl||t.mapping===ql?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$0=this._renderer.getRenderTarget(),tm=this._renderer.getActiveCubeFace(),em=this._renderer.getActiveMipmapLevel(),nm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Da,minFilter:Da,generateMipmaps:!1,type:iu,format:Xa,colorSpace:Zl,depthBuffer:!1},r=Fy(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fy(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AC(l)),this._blurMaterial=CC(l,t,n),this._ggxMaterial=RC(l,t,n)}return r}_compileMaterial(t){const n=new Wr(new Gs,t);this._renderer.compile(n,tc)}_sceneToCubeUV(t,n,a,r,l){const p=new Va(90,1,n,a),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(Py),g.toneMapping=Ns,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wr(new Vc,new ab({name:"PMREM.Background",side:Xi,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,S=!0):(y.color.copy(Py),S=!0);for(let C=0;C<6;C++){const U=C%3;U===0?(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[C],l.y,l.z)):U===1?(p.up.set(0,0,h[C]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[C],l.z)):(p.up.set(0,h[C],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[C]));const P=this._cubeSize;Cl(r,U*P,C>2?P:0,P,P),g.setRenderTarget(r),S&&g.render(b,p),g.render(t,p)}g.toneMapping=v,g.autoClear=x,t.background=w}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Yl||t.mapping===ql;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=By());const l=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Cl(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,tc)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let l=1;l<r;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const r=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,h=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-_*_),x=.05+h*.95,v=g*x,{_lodMax:M}=this,b=this._sizeLods[a],y=3*b*(a>M-Rs?a-M+Rs:0),S=4*(this._cubeSize-b);p.envMap.value=t.texture,p.roughness.value=v,p.mipInt.value=M-n,Cl(l,y,S,3*b,2*b),r.setRenderTarget(l),r.render(f,tc),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-a,Cl(t,y,S,3*b,2*b),r.setRenderTarget(t),r.render(f,tc)}_blur(t,n,a,r,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,r,"latitudinal",l),this._halfBlur(c,t,a,a,r,"longitudinal",l)}_halfBlur(t,n,a,r,l,c,f){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&zn("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[r];g.material=h;const x=h.uniforms,v=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*vo-1),b=l/M,y=isFinite(l)?1+Math.floor(_*b):vo;y>vo&&Me(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vo}`);const S=[];let w=0;for(let D=0;D<vo;++D){const V=D/b,A=Math.exp(-V*V/2);S.push(A),D===0?w+=A:D<y&&(w+=2*A)}for(let D=0;D<S.length;D++)S[D]=S[D]/w;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:C}=this;x.dTheta.value=M,x.mipInt.value=C-a;const U=this._sizeLods[r],P=3*U*(r>C-Rs?r-C+Rs:0),L=4*(this._cubeSize-U);Cl(n,P,L,3*U,2*U),p.setRenderTarget(n),p.render(g,tc)}}function AC(o){const t=[],n=[],a=[];let r=o;const l=o-Rs+1+Oy.length;for(let c=0;c<l;c++){const f=Math.pow(2,r);t.push(f);let p=1/f;c>o-Rs?p=Oy[c-o+Rs-1]:c===0&&(p=0),n.push(p);const h=1/(f-2),_=-h,g=1+h,x=[_,_,g,_,g,g,_,_,g,g,_,g],v=6,M=6,b=3,y=2,S=1,w=new Float32Array(b*M*v),C=new Float32Array(y*M*v),U=new Float32Array(S*M*v);for(let L=0;L<v;L++){const D=L%3*2/3-1,V=L>2?0:-1,A=[D,V,0,D+2/3,V,0,D+2/3,V+1,0,D,V,0,D+2/3,V+1,0,D,V+1,0];w.set(A,b*M*L),C.set(x,y*M*L);const T=[L,L,L,L,L,L];U.set(T,S*M*L)}const P=new Gs;P.setAttribute("position",new ir(w,b)),P.setAttribute("uv",new ir(C,y)),P.setAttribute("faceIndex",new ir(U,S)),a.push(new Wr(P,null)),r>Rs&&r--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Fy(o,t,n){const a=new Lo(o,t,n);return a.texture.mapping=cd,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Cl(o,t,n,a,r){o.viewport.set(t,n,a,r),o.scissor.set(t,n,a,r)}function RC(o,t,n){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function CC(o,t,n){const a=new Float32Array(vo),r=new pt(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:vo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function By(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

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
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function Iy(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hr,depthTest:!1,depthWrite:!1})}function hd(){return`

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
	`}function wC(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,h=p===Cm||p===wm,_=p===Yl||p===ql;if(h||_){let g=t.get(f);const x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new zy(o)),g=h?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return h&&v&&v.height>0||_&&v&&r(v)?(n===null&&(n=new zy(o)),g=h?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function r(f){let p=0;const h=6;for(let _=0;_<h;_++)f[_]!==void 0&&p++;return p===h}function l(f){const p=f.target;p.removeEventListener("dispose",l);const h=t.get(p);h!==void 0&&(t.delete(p),h.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function DC(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const r=o.getExtension(a);return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&wc("WebGLRenderer: "+a+" extension not supported."),r}}}function UC(o,t,n,a){const r={},l=new WeakMap;function c(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const M in x.attributes)t.remove(x.attributes[M]);x.removeEventListener("dispose",c),delete r[x.id];const v=l.get(x);v&&(t.remove(v),l.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(g,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,n.memory.geometries++),x}function p(g){const x=g.attributes;for(const v in x)t.update(x[v],o.ARRAY_BUFFER)}function h(g){const x=[],v=g.index,M=g.attributes.position;let b=0;if(v!==null){const w=v.array;b=v.version;for(let C=0,U=w.length;C<U;C+=3){const P=w[C+0],L=w[C+1],D=w[C+2];x.push(P,L,L,D,D,P)}}else if(M!==void 0){const w=M.array;b=M.version;for(let C=0,U=w.length/3-1;C<U;C+=3){const P=C+0,L=C+1,D=C+2;x.push(P,L,L,D,D,P)}}else return;const y=new(tb(x)?sb:rb)(x,1);y.version=b;const S=l.get(g);S&&t.remove(S),l.set(g,y)}function _(g){const x=l.get(g);if(x){const v=g.index;v!==null&&x.version<v.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function LC(o,t,n){let a;function r(x){a=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function p(x,v){o.drawElements(a,v,l,x*c),n.update(v,a,1)}function h(x,v,M){M!==0&&(o.drawElementsInstanced(a,v,l,x*c,M),n.update(v,a,M))}function _(x,v,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,l,x,0,M);let y=0;for(let S=0;S<M;S++)y+=v[S];n.update(y,a,1)}function g(x,v,M,b){if(M===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)h(x[S]/c,v[S],b[S]);else{y.multiDrawElementsInstancedWEBGL(a,v,0,l,x,0,b,0,M);let S=0;for(let w=0;w<M;w++)S+=v[w]*b[w];n.update(S,a,1)}}this.setMode=r,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function NC(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:zn("WebGLInfo: Unknown draw mode:",c);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function OC(o,t,n){const a=new WeakMap,r=new Fn;function l(c,f,p){const h=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let x=a.get(f);if(x===void 0||x.count!==g){let T=function(){V.dispose(),a.delete(f),f.removeEventListener("dispose",T)};var v=T;x!==void 0&&x.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let U=0;M===!0&&(U=1),b===!0&&(U=2),y===!0&&(U=3);let P=f.attributes.position.count*U,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const D=new Float32Array(P*L*4*g),V=new eb(D,P,L,g);V.type=Br,V.needsUpdate=!0;const A=U*4;for(let G=0;G<g;G++){const W=S[G],it=w[G],at=C[G],J=P*L*4*G;for(let z=0;z<W.count;z++){const k=z*A;M===!0&&(r.fromBufferAttribute(W,z),D[J+k+0]=r.x,D[J+k+1]=r.y,D[J+k+2]=r.z,D[J+k+3]=0),b===!0&&(r.fromBufferAttribute(it,z),D[J+k+4]=r.x,D[J+k+5]=r.y,D[J+k+6]=r.z,D[J+k+7]=0),y===!0&&(r.fromBufferAttribute(at,z),D[J+k+8]=r.x,D[J+k+9]=r.y,D[J+k+10]=r.z,D[J+k+11]=at.itemSize===4?r.w:1)}}x={count:g,texture:V,size:new qe(P,L)},a.set(f,x),f.addEventListener("dispose",T)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const b=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",h)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:l}}function PC(o,t,n,a){let r=new WeakMap;function l(p){const h=a.render.frame,_=p.geometry,g=t.get(p,_);if(r.get(g)!==h&&(t.update(g),r.set(g,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),r.get(p)!==h&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),r.set(p,h))),p.isSkinnedMesh){const x=p.skeleton;r.get(x)!==h&&(x.update(),r.set(x,h))}return g}function c(){r=new WeakMap}function f(p){const h=p.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:c}}const mb=new Pi,Hy=new fb(1,1),_b=new eb,gb=new o2,xb=new ub,Gy=[],Vy=[],ky=new Float32Array(16),Xy=new Float32Array(9),Wy=new Float32Array(4);function ru(o,t,n){const a=o[0];if(a<=0||a>0)return o;const r=t*n;let l=Gy[r];if(l===void 0&&(l=new Float32Array(r),Gy[r]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(l,f)}return l}function Jn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function $n(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function dd(o,t){let n=Vy[t];n===void 0&&(n=new Int32Array(t),Vy[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function zC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function FC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Jn(n,t))return;o.uniform2fv(this.addr,t),$n(n,t)}}function BC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Jn(n,t))return;o.uniform3fv(this.addr,t),$n(n,t)}}function IC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Jn(n,t))return;o.uniform4fv(this.addr,t),$n(n,t)}}function HC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Jn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),$n(n,t)}else{if(Jn(n,a))return;Wy.set(a),o.uniformMatrix2fv(this.addr,!1,Wy),$n(n,a)}}function GC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Jn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),$n(n,t)}else{if(Jn(n,a))return;Xy.set(a),o.uniformMatrix3fv(this.addr,!1,Xy),$n(n,a)}}function VC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Jn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),$n(n,t)}else{if(Jn(n,a))return;ky.set(a),o.uniformMatrix4fv(this.addr,!1,ky),$n(n,a)}}function kC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function XC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Jn(n,t))return;o.uniform2iv(this.addr,t),$n(n,t)}}function WC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Jn(n,t))return;o.uniform3iv(this.addr,t),$n(n,t)}}function YC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Jn(n,t))return;o.uniform4iv(this.addr,t),$n(n,t)}}function qC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function ZC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Jn(n,t))return;o.uniform2uiv(this.addr,t),$n(n,t)}}function jC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Jn(n,t))return;o.uniform3uiv(this.addr,t),$n(n,t)}}function KC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Jn(n,t))return;o.uniform4uiv(this.addr,t),$n(n,t)}}function QC(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r);let l;this.type===o.SAMPLER_2D_SHADOW?(Hy.compareFunction=$1,l=Hy):l=mb,n.setTexture2D(t||l,r)}function JC(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||gb,r)}function $C(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||xb,r)}function tw(o,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(o.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||_b,r)}function ew(o){switch(o){case 5126:return zC;case 35664:return FC;case 35665:return BC;case 35666:return IC;case 35674:return HC;case 35675:return GC;case 35676:return VC;case 5124:case 35670:return kC;case 35667:case 35671:return XC;case 35668:case 35672:return WC;case 35669:case 35673:return YC;case 5125:return qC;case 36294:return ZC;case 36295:return jC;case 36296:return KC;case 35678:case 36198:case 36298:case 36306:case 35682:return QC;case 35679:case 36299:case 36307:return JC;case 35680:case 36300:case 36308:case 36293:return $C;case 36289:case 36303:case 36311:case 36292:return tw}}function nw(o,t){o.uniform1fv(this.addr,t)}function iw(o,t){const n=ru(t,this.size,2);o.uniform2fv(this.addr,n)}function aw(o,t){const n=ru(t,this.size,3);o.uniform3fv(this.addr,n)}function rw(o,t){const n=ru(t,this.size,4);o.uniform4fv(this.addr,n)}function sw(o,t){const n=ru(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function ow(o,t){const n=ru(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function lw(o,t){const n=ru(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function uw(o,t){o.uniform1iv(this.addr,t)}function cw(o,t){o.uniform2iv(this.addr,t)}function fw(o,t){o.uniform3iv(this.addr,t)}function hw(o,t){o.uniform4iv(this.addr,t)}function dw(o,t){o.uniform1uiv(this.addr,t)}function pw(o,t){o.uniform2uiv(this.addr,t)}function mw(o,t){o.uniform3uiv(this.addr,t)}function _w(o,t){o.uniform4uiv(this.addr,t)}function gw(o,t,n){const a=this.cache,r=t.length,l=dd(n,r);Jn(a,l)||(o.uniform1iv(this.addr,l),$n(a,l));for(let c=0;c!==r;++c)n.setTexture2D(t[c]||mb,l[c])}function xw(o,t,n){const a=this.cache,r=t.length,l=dd(n,r);Jn(a,l)||(o.uniform1iv(this.addr,l),$n(a,l));for(let c=0;c!==r;++c)n.setTexture3D(t[c]||gb,l[c])}function vw(o,t,n){const a=this.cache,r=t.length,l=dd(n,r);Jn(a,l)||(o.uniform1iv(this.addr,l),$n(a,l));for(let c=0;c!==r;++c)n.setTextureCube(t[c]||xb,l[c])}function Sw(o,t,n){const a=this.cache,r=t.length,l=dd(n,r);Jn(a,l)||(o.uniform1iv(this.addr,l),$n(a,l));for(let c=0;c!==r;++c)n.setTexture2DArray(t[c]||_b,l[c])}function yw(o){switch(o){case 5126:return nw;case 35664:return iw;case 35665:return aw;case 35666:return rw;case 35674:return sw;case 35675:return ow;case 35676:return lw;case 5124:case 35670:return uw;case 35667:case 35671:return cw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return dw;case 36294:return pw;case 36295:return mw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return Sw}}class bw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=ew(n.type)}}class Mw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yw(n.type)}}class Ew{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let l=0,c=r.length;l!==c;++l){const f=r[l];f.setValue(t,n[f.id],a)}}}const im=/(\w+)(\])?(\[|\.)?/g;function Yy(o,t){o.seq.push(t),o.map[t.id]=t}function Tw(o,t,n){const a=o.name,r=a.length;for(im.lastIndex=0;;){const l=im.exec(a),c=im.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&c+2===r){Yy(n,h===void 0?new bw(f,o,t):new Mw(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new Ew(f),Yy(n,g)),n=g}}}class Ih{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(n,r),c=t.getUniformLocation(n,l.name);Tw(l,c,this)}}setValue(t,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,l=t.length;r!==l;++r){const c=t[r];c.id in n&&a.push(c)}return a}}function qy(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const Aw=37297;let Rw=0;function Cw(o,t){const n=o.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=r;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const Zy=new Re;function ww(o){Je._getMatrix(Zy,Je.workingColorSpace,o);const t=`mat3( ${Zy.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(o)){case jh:return[t,"LinearTransferOETF"];case un:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function jy(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+Cw(o.getShaderSource(t),f)}else return l}function Dw(o,t){const n=ww(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Uw(o,t){let n;switch(t){case O3:n="Linear";break;case P3:n="Reinhard";break;case z3:n="Cineon";break;case F3:n="ACESFilmic";break;case I3:n="AgX";break;case H3:n="Neutral";break;case B3:n="Custom";break;default:Me("WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yh=new pt;function Lw(){Je.getLuminanceCoefficients(yh);const o=yh.x.toFixed(4),t=yh.y.toFixed(4),n=yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ac).join(`
`)}function Ow(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Pw(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=o.getActiveAttrib(t,r),c=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function ac(o){return o!==""}function Ky(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qy(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zw=/^[ \t]*#include +<([\w\d./]+)>/gm;function o_(o){return o.replace(zw,Bw)}const Fw=new Map;function Bw(o,t){let n=Ce[t];if(n===void 0){const a=Fw.get(t);if(a!==void 0)n=Ce[a],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return o_(n)}const Iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jy(o){return o.replace(Iw,Hw)}function Hw(o,t,n,a){let r="";for(let l=parseInt(t);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function $y(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gw(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===k1?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===d3?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Lr&&(t="SHADOWMAP_TYPE_VSM"),t}function Vw(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Yl:case ql:t="ENVMAP_TYPE_CUBE";break;case cd:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kw(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ql:t="ENVMAP_MODE_REFRACTION";break}return t}function Xw(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case X1:t="ENVMAP_BLENDING_MULTIPLY";break;case L3:t="ENVMAP_BLENDING_MIX";break;case N3:t="ENVMAP_BLENDING_ADD";break}return t}function Ww(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function Yw(o,t,n,a){const r=o.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=Gw(n),h=Vw(n),_=kw(n),g=Xw(n),x=Ww(n),v=Nw(n),M=Ow(l),b=r.createProgram();let y,S,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ac).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ac).join(`
`),S.length>0&&(S+=`
`)):(y=[$y(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ac).join(`
`),S=[$y(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ns?"#define TONE_MAPPING":"",n.toneMapping!==Ns?Ce.tonemapping_pars_fragment:"",n.toneMapping!==Ns?Uw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ce.colorspace_pars_fragment,Dw("linearToOutputTexel",n.outputColorSpace),Lw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ac).join(`
`)),c=o_(c),c=Ky(c,n),c=Qy(c,n),f=o_(f),f=Ky(f,n),f=Qy(f,n),c=Jy(c),f=Jy(f),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===py?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===py?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=w+y+c,U=w+S+f,P=qy(r,r.VERTEX_SHADER,C),L=qy(r,r.FRAGMENT_SHADER,U);r.attachShader(b,P),r.attachShader(b,L),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function D(G){if(o.debug.checkShaderErrors){const W=r.getProgramInfoLog(b)||"",it=r.getShaderInfoLog(P)||"",at=r.getShaderInfoLog(L)||"",J=W.trim(),z=it.trim(),k=at.trim();let q=!0,ft=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(r,b,P,L);else{const F=jy(r,P,"vertex"),B=jy(r,L,"fragment");zn("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+F+`
`+B)}else J!==""?Me("WebGLProgram: Program Info Log:",J):(z===""||k==="")&&(ft=!1);ft&&(G.diagnostics={runnable:q,programLog:J,vertexShader:{log:z,prefix:y},fragmentShader:{log:k,prefix:S}})}r.deleteShader(P),r.deleteShader(L),V=new Ih(r,b),A=Pw(r,b)}let V;this.getUniforms=function(){return V===void 0&&D(this),V};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(b,Aw)),T},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Rw++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=L,this}let qw=0;class Zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new jw(t),n.set(t,a)),a}}class jw{constructor(t){this.id=qw++,this.code=t,this.usedTimes=0}}function Kw(o,t,n,a,r,l,c){const f=new nb,p=new Zw,h=new Set,_=[],g=r.logarithmicDepthBuffer,x=r.vertexTextures;let v=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,T,G,W,it){const at=W.fog,J=it.geometry,z=A.isMeshStandardMaterial?W.environment:null,k=(A.isMeshStandardMaterial?n:t).get(A.envMap||z),q=k&&k.mapping===cd?k.image.height:null,ft=M[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&Me("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const F=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,B=F!==void 0?F.length:0;let rt=0;J.morphAttributes.position!==void 0&&(rt=1),J.morphAttributes.normal!==void 0&&(rt=2),J.morphAttributes.color!==void 0&&(rt=3);let xt,St,wt,et;if(ft){const Vt=Ja[ft];xt=Vt.vertexShader,St=Vt.fragmentShader}else xt=A.vertexShader,St=A.fragmentShader,p.update(A),wt=p.getVertexShaderID(A),et=p.getFragmentShaderID(A);const ot=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Nt=it.isInstancedMesh===!0,Ft=it.isBatchedMesh===!0,qt=!!A.map,_e=!!A.matcap,Ot=!!k,ee=!!A.aoMap,X=!!A.lightMap,se=!!A.bumpMap,nt=!!A.normalMap,ge=!!A.displacementMap,Xt=!!A.emissiveMap,Fe=!!A.metalnessMap,Bt=!!A.roughnessMap,ue=A.anisotropy>0,I=A.clearcoat>0,R=A.dispersion>0,$=A.iridescence>0,gt=A.sheen>0,mt=A.transmission>0,ht=ue&&!!A.anisotropyMap,jt=I&&!!A.clearcoatMap,Ut=I&&!!A.clearcoatNormalMap,ie=I&&!!A.clearcoatRoughnessMap,zt=$&&!!A.iridescenceMap,Et=$&&!!A.iridescenceThicknessMap,Tt=gt&&!!A.sheenColorMap,$t=gt&&!!A.sheenRoughnessMap,Zt=!!A.specularMap,It=!!A.specularColorMap,oe=!!A.specularIntensityMap,H=mt&&!!A.transmissionMap,Lt=mt&&!!A.thicknessMap,Rt=!!A.gradientMap,Ct=!!A.alphaMap,Mt=A.alphaTest>0,vt=!!A.alphaHash,Wt=!!A.extensions;let le=Ns;A.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(le=o.toneMapping);const We={shaderID:ft,shaderType:A.type,shaderName:A.name,vertexShader:xt,fragmentShader:St,defines:A.defines,customVertexShaderID:wt,customFragmentShaderID:et,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Ft,batchingColor:Ft&&it._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&it.instanceColor!==null,instancingMorph:Nt&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Zl,alphaToCoverage:!!A.alphaToCoverage,map:qt,matcap:_e,envMap:Ot,envMapMode:Ot&&k.mapping,envMapCubeUVHeight:q,aoMap:ee,lightMap:X,bumpMap:se,normalMap:nt,displacementMap:x&&ge,emissiveMap:Xt,normalMapObjectSpace:nt&&A.normalMapType===W3,normalMapTangentSpace:nt&&A.normalMapType===X3,metalnessMap:Fe,roughnessMap:Bt,anisotropy:ue,anisotropyMap:ht,clearcoat:I,clearcoatMap:jt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:ie,dispersion:R,iridescence:$,iridescenceMap:zt,iridescenceThicknessMap:Et,sheen:gt,sheenColorMap:Tt,sheenRoughnessMap:$t,specularMap:Zt,specularColorMap:It,specularIntensityMap:oe,transmission:mt,transmissionMap:H,thicknessMap:Lt,gradientMap:Rt,opaque:A.transparent===!1&&A.blending===Fl&&A.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Mt,alphaHash:vt,combine:A.combine,mapUv:qt&&b(A.map.channel),aoMapUv:ee&&b(A.aoMap.channel),lightMapUv:X&&b(A.lightMap.channel),bumpMapUv:se&&b(A.bumpMap.channel),normalMapUv:nt&&b(A.normalMap.channel),displacementMapUv:ge&&b(A.displacementMap.channel),emissiveMapUv:Xt&&b(A.emissiveMap.channel),metalnessMapUv:Fe&&b(A.metalnessMap.channel),roughnessMapUv:Bt&&b(A.roughnessMap.channel),anisotropyMapUv:ht&&b(A.anisotropyMap.channel),clearcoatMapUv:jt&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:$t&&b(A.sheenRoughnessMap.channel),specularMapUv:Zt&&b(A.specularMap.channel),specularColorMapUv:It&&b(A.specularColorMap.channel),specularIntensityMapUv:oe&&b(A.specularIntensityMap.channel),transmissionMapUv:H&&b(A.transmissionMap.channel),thicknessMapUv:Lt&&b(A.thicknessMap.channel),alphaMapUv:Ct&&b(A.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(nt||ue),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!J.attributes.uv&&(qt||Ct),fog:!!at,useFog:A.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:it.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:rt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:qt&&A.map.isVideoTexture===!0&&Je.getTransfer(A.map.colorSpace)===un,decodeVideoTextureEmissive:Xt&&A.emissiveMap.isVideoTexture===!0&&Je.getTransfer(A.emissiveMap.colorSpace)===un,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Pr,flipSided:A.side===Xi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Wt&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&A.extensions.multiDraw===!0||Ft)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return We.vertexUv1s=h.has(1),We.vertexUv2s=h.has(2),We.vertexUv3s=h.has(3),h.clear(),We}function S(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const G in A.defines)T.push(G),T.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(w(T,A),C(T,A),T.push(o.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function w(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function C(A,T){f.disableAll(),T.supportsVertexTextures&&f.enable(0),T.instancing&&f.enable(1),T.instancingColor&&f.enable(2),T.instancingMorph&&f.enable(3),T.matcap&&f.enable(4),T.envMap&&f.enable(5),T.normalMapObjectSpace&&f.enable(6),T.normalMapTangentSpace&&f.enable(7),T.clearcoat&&f.enable(8),T.iridescence&&f.enable(9),T.alphaTest&&f.enable(10),T.vertexColors&&f.enable(11),T.vertexAlphas&&f.enable(12),T.vertexUv1s&&f.enable(13),T.vertexUv2s&&f.enable(14),T.vertexUv3s&&f.enable(15),T.vertexTangents&&f.enable(16),T.anisotropy&&f.enable(17),T.alphaHash&&f.enable(18),T.batching&&f.enable(19),T.dispersion&&f.enable(20),T.batchingColor&&f.enable(21),T.gradientMap&&f.enable(22),A.push(f.mask),f.disableAll(),T.fog&&f.enable(0),T.useFog&&f.enable(1),T.flatShading&&f.enable(2),T.logarithmicDepthBuffer&&f.enable(3),T.reversedDepthBuffer&&f.enable(4),T.skinning&&f.enable(5),T.morphTargets&&f.enable(6),T.morphNormals&&f.enable(7),T.morphColors&&f.enable(8),T.premultipliedAlpha&&f.enable(9),T.shadowMapEnabled&&f.enable(10),T.doubleSided&&f.enable(11),T.flipSided&&f.enable(12),T.useDepthPacking&&f.enable(13),T.dithering&&f.enable(14),T.transmission&&f.enable(15),T.sheen&&f.enable(16),T.opaque&&f.enable(17),T.pointsUvs&&f.enable(18),T.decodeVideoTexture&&f.enable(19),T.decodeVideoTextureEmissive&&f.enable(20),T.alphaToCoverage&&f.enable(21),A.push(f.mask)}function U(A){const T=M[A.type];let G;if(T){const W=Ja[T];G=y2.clone(W.uniforms)}else G=A.uniforms;return G}function P(A,T){let G;for(let W=0,it=_.length;W<it;W++){const at=_[W];if(at.cacheKey===T){G=at,++G.usedTimes;break}}return G===void 0&&(G=new Yw(o,T,A,l),_.push(G)),G}function L(A){if(--A.usedTimes===0){const T=_.indexOf(A);_[T]=_[_.length-1],_.pop(),A.destroy()}}function D(A){p.remove(A)}function V(){p.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:U,acquireProgram:P,releaseProgram:L,releaseShaderCache:D,programs:_,dispose:V}}function Qw(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function r(c,f,p){o.get(c)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:r,dispose:l}}function Jw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function t1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function e1(){const o=[];let t=0;const n=[],a=[],r=[];function l(){t=0,n.length=0,a.length=0,r.length=0}function c(g,x,v,M,b,y){let S=o[t];return S===void 0?(S={id:g.id,object:g,geometry:x,material:v,groupOrder:M,renderOrder:g.renderOrder,z:b,group:y},o[t]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=v,S.groupOrder=M,S.renderOrder=g.renderOrder,S.z=b,S.group=y),t++,S}function f(g,x,v,M,b,y){const S=c(g,x,v,M,b,y);v.transmission>0?a.push(S):v.transparent===!0?r.push(S):n.push(S)}function p(g,x,v,M,b,y){const S=c(g,x,v,M,b,y);v.transmission>0?a.unshift(S):v.transparent===!0?r.unshift(S):n.unshift(S)}function h(g,x){n.length>1&&n.sort(g||Jw),a.length>1&&a.sort(x||t1),r.length>1&&r.sort(x||t1)}function _(){for(let g=t,x=o.length;g<x;g++){const v=o[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:f,unshift:p,finish:_,sort:h}}function $w(){let o=new WeakMap;function t(a,r){const l=o.get(a);let c;return l===void 0?(c=new e1,o.set(a,[c])):r>=l.length?(c=new e1,l.push(c)):c=l[r],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function tD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new pt,color:new cn};break;case"SpotLight":n={position:new pt,direction:new pt,color:new cn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new pt,color:new cn,distance:0,decay:0};break;case"HemisphereLight":n={direction:new pt,skyColor:new cn,groundColor:new cn};break;case"RectAreaLight":n={color:new cn,position:new pt,halfWidth:new pt,halfHeight:new pt};break}return o[t.id]=n,n}}}function eD(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let nD=0;function iD(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function aD(o){const t=new tD,n=eD(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new pt);const r=new pt,l=new Qn,c=new Qn;function f(h){let _=0,g=0,x=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let v=0,M=0,b=0,y=0,S=0,w=0,C=0,U=0,P=0,L=0,D=0;h.sort(iD);for(let A=0,T=h.length;A<T;A++){const G=h[A],W=G.color,it=G.intensity,at=G.distance,J=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)_+=W.r*it,g+=W.g*it,x+=W.b*it;else if(G.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(G.sh.coefficients[z],it);D++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const k=G.shadow,q=n.get(G);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,a.directionalShadow[v]=q,a.directionalShadowMap[v]=J,a.directionalShadowMatrix[v]=G.shadow.matrix,w++}a.directional[v]=z,v++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(W).multiplyScalar(it),z.distance=at,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,a.spot[b]=z;const k=G.shadow;if(G.map&&(a.spotLightMap[P]=G.map,P++,k.updateMatrices(G),G.castShadow&&L++),a.spotLightMatrix[b]=k.matrix,G.castShadow){const q=n.get(G);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,a.spotShadow[b]=q,a.spotShadowMap[b]=J,U++}b++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(W).multiplyScalar(it),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const k=G.shadow,q=n.get(G);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,a.pointShadow[M]=q,a.pointShadowMap[M]=J,a.pointShadowMatrix[M]=G.shadow.matrix,C++}a.point[M]=z,M++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar(it),z.groundColor.copy(G.groundColor).multiplyScalar(it),a.hemi[S]=z,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=kt.LTC_FLOAT_1,a.rectAreaLTC2=kt.LTC_FLOAT_2):(a.rectAreaLTC1=kt.LTC_HALF_1,a.rectAreaLTC2=kt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=x;const V=a.hash;(V.directionalLength!==v||V.pointLength!==M||V.spotLength!==b||V.rectAreaLength!==y||V.hemiLength!==S||V.numDirectionalShadows!==w||V.numPointShadows!==C||V.numSpotShadows!==U||V.numSpotMaps!==P||V.numLightProbes!==D)&&(a.directional.length=v,a.spot.length=b,a.rectArea.length=y,a.point.length=M,a.hemi.length=S,a.directionalShadow.length=w,a.directionalShadowMap.length=w,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=w,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=U+P-L,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=D,V.directionalLength=v,V.pointLength=M,V.spotLength=b,V.rectAreaLength=y,V.hemiLength=S,V.numDirectionalShadows=w,V.numPointShadows=C,V.numSpotShadows=U,V.numSpotMaps=P,V.numLightProbes=D,a.version=nD++)}function p(h,_){let g=0,x=0,v=0,M=0,b=0;const y=_.matrixWorldInverse;for(let S=0,w=h.length;S<w;S++){const C=h[S];if(C.isDirectionalLight){const U=a.directional[g];U.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(y),g++}else if(C.isSpotLight){const U=a.spot[v];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(y),v++}else if(C.isRectAreaLight){const U=a.rectArea[M];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const U=a.point[x];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(y),x++}else if(C.isHemisphereLight){const U=a.hemi[b];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(y),b++}}}return{setup:f,setupView:p,state:a}}function n1(o){const t=new aD(o),n=[],a=[];function r(_){h.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function rD(o){let t=new WeakMap;function n(r,l=0){const c=t.get(r);let f;return c===void 0?(f=new n1(o),t.set(r,[f])):l>=c.length?(f=new n1(o),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const sD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oD=`uniform sampler2D shadow_pass;
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
}`;function lD(o,t,n){let a=new cb;const r=new qe,l=new qe,c=new Fn,f=new L2({depthPacking:k3}),p=new N2,h={},_=n.maxTextureSize,g={[Fs]:Xi,[Xi]:Fs,[Pr]:Pr},x=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:sD,fragmentShader:oD}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const M=new Gs;M.setAttribute("position",new ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Wr(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k1;let S=this.type;this.render=function(L,D,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const A=o.getRenderTarget(),T=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Hr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const it=S!==Lr&&this.type===Lr,at=S===Lr&&this.type!==Lr;for(let J=0,z=L.length;J<z;J++){const k=L[J],q=k.shadow;if(q===void 0){Me("WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ft=q.getFrameExtents();if(r.multiply(ft),l.copy(q.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(l.x=Math.floor(_/ft.x),r.x=l.x*ft.x,q.mapSize.x=l.x),r.y>_&&(l.y=Math.floor(_/ft.y),r.y=l.y*ft.y,q.mapSize.y=l.y)),q.map===null||it===!0||at===!0){const B=this.type!==Lr?{minFilter:ha,magFilter:ha}:{};q.map!==null&&q.map.dispose(),q.map=new Lo(r.x,r.y,B),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const F=q.getViewportCount();for(let B=0;B<F;B++){const rt=q.getViewport(B);c.set(l.x*rt.x,l.y*rt.y,l.x*rt.z,l.y*rt.w),W.viewport(c),q.updateMatrices(k,B),a=q.getFrustum(),U(D,V,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===Lr&&w(q,V),q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(A,T,G)};function w(L,D){const V=t.update(b);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Lo(r.x,r.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(D,null,V,x,b,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(D,null,V,v,b,null)}function C(L,D,V,A){let T=null;const G=V.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)T=G;else if(T=V.isPointLight===!0?p:f,o.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const W=T.uuid,it=D.uuid;let at=h[W];at===void 0&&(at={},h[W]=at);let J=at[it];J===void 0&&(J=T.clone(),at[it]=J,D.addEventListener("dispose",P)),T=J}if(T.visible=D.visible,T.wireframe=D.wireframe,A===Lr?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:g[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=o.properties.get(T);W.light=V}return T}function U(L,D,V,A,T){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===Lr)&&(!L.frustumCulled||a.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,L.matrixWorld);const it=t.update(L),at=L.material;if(Array.isArray(at)){const J=it.groups;for(let z=0,k=J.length;z<k;z++){const q=J[z],ft=at[q.materialIndex];if(ft&&ft.visible){const F=C(L,ft,A,T);L.onBeforeShadow(o,L,D,V,it,F,q),o.renderBufferDirect(V,null,it,F,L,q),L.onAfterShadow(o,L,D,V,it,F,q)}}}else if(at.visible){const J=C(L,at,A,T);L.onBeforeShadow(o,L,D,V,it,J,null),o.renderBufferDirect(V,null,it,J,L,null),L.onAfterShadow(o,L,D,V,it,J,null)}}const W=L.children;for(let it=0,at=W.length;it<at;it++)U(W[it],D,V,A,T)}function P(L){L.target.removeEventListener("dispose",P);for(const V in h){const A=h[V],T=L.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const uD={[ym]:bm,[Mm]:Am,[Em]:Rm,[Wl]:Tm,[bm]:ym,[Am]:Mm,[Rm]:Em,[Tm]:Wl};function cD(o,t){function n(){let H=!1;const Lt=new Fn;let Rt=null;const Ct=new Fn(0,0,0,0);return{setMask:function(Mt){Rt!==Mt&&!H&&(o.colorMask(Mt,Mt,Mt,Mt),Rt=Mt)},setLocked:function(Mt){H=Mt},setClear:function(Mt,vt,Wt,le,We){We===!0&&(Mt*=le,vt*=le,Wt*=le),Lt.set(Mt,vt,Wt,le),Ct.equals(Lt)===!1&&(o.clearColor(Mt,vt,Wt,le),Ct.copy(Lt))},reset:function(){H=!1,Rt=null,Ct.set(-1,0,0,0)}}}function a(){let H=!1,Lt=!1,Rt=null,Ct=null,Mt=null;return{setReversed:function(vt){if(Lt!==vt){const Wt=t.get("EXT_clip_control");vt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Lt=vt;const le=Mt;Mt=null,this.setClear(le)}},getReversed:function(){return Lt},setTest:function(vt){vt?ot(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(vt){Rt!==vt&&!H&&(o.depthMask(vt),Rt=vt)},setFunc:function(vt){if(Lt&&(vt=uD[vt]),Ct!==vt){switch(vt){case ym:o.depthFunc(o.NEVER);break;case bm:o.depthFunc(o.ALWAYS);break;case Mm:o.depthFunc(o.LESS);break;case Wl:o.depthFunc(o.LEQUAL);break;case Em:o.depthFunc(o.EQUAL);break;case Tm:o.depthFunc(o.GEQUAL);break;case Am:o.depthFunc(o.GREATER);break;case Rm:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ct=vt}},setLocked:function(vt){H=vt},setClear:function(vt){Mt!==vt&&(Lt&&(vt=1-vt),o.clearDepth(vt),Mt=vt)},reset:function(){H=!1,Rt=null,Ct=null,Mt=null,Lt=!1}}}function r(){let H=!1,Lt=null,Rt=null,Ct=null,Mt=null,vt=null,Wt=null,le=null,We=null;return{setTest:function(Vt){H||(Vt?ot(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Vt){Lt!==Vt&&!H&&(o.stencilMask(Vt),Lt=Vt)},setFunc:function(Vt,Kt,xe){(Rt!==Vt||Ct!==Kt||Mt!==xe)&&(o.stencilFunc(Vt,Kt,xe),Rt=Vt,Ct=Kt,Mt=xe)},setOp:function(Vt,Kt,xe){(vt!==Vt||Wt!==Kt||le!==xe)&&(o.stencilOp(Vt,Kt,xe),vt=Vt,Wt=Kt,le=xe)},setLocked:function(Vt){H=Vt},setClear:function(Vt){We!==Vt&&(o.clearStencil(Vt),We=Vt)},reset:function(){H=!1,Lt=null,Rt=null,Ct=null,Mt=null,vt=null,Wt=null,le=null,We=null}}}const l=new n,c=new a,f=new r,p=new WeakMap,h=new WeakMap;let _={},g={},x=new WeakMap,v=[],M=null,b=!1,y=null,S=null,w=null,C=null,U=null,P=null,L=null,D=new cn(0,0,0),V=0,A=!1,T=null,G=null,W=null,it=null,at=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=k>=2);let ft=null,F={};const B=o.getParameter(o.SCISSOR_BOX),rt=o.getParameter(o.VIEWPORT),xt=new Fn().fromArray(B),St=new Fn().fromArray(rt);function wt(H,Lt,Rt,Ct){const Mt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(H,vt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Rt;Wt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Lt+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return vt}const et={};et[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ot(o.DEPTH_TEST),c.setFunc(Wl),se(!1),nt(ly),ot(o.CULL_FACE),ee(Hr);function ot(H){_[H]!==!0&&(o.enable(H),_[H]=!0)}function At(H){_[H]!==!1&&(o.disable(H),_[H]=!1)}function Nt(H,Lt){return g[H]!==Lt?(o.bindFramebuffer(H,Lt),g[H]=Lt,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ft(H,Lt){let Rt=v,Ct=!1;if(H){Rt=x.get(Lt),Rt===void 0&&(Rt=[],x.set(Lt,Rt));const Mt=H.textures;if(Rt.length!==Mt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Wt=Mt.length;vt<Wt;vt++)Rt[vt]=o.COLOR_ATTACHMENT0+vt;Rt.length=Mt.length,Ct=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(Rt)}function qt(H){return M!==H?(o.useProgram(H),M=H,!0):!1}const _e={[xo]:o.FUNC_ADD,[m3]:o.FUNC_SUBTRACT,[_3]:o.FUNC_REVERSE_SUBTRACT};_e[g3]=o.MIN,_e[x3]=o.MAX;const Ot={[v3]:o.ZERO,[S3]:o.ONE,[y3]:o.SRC_COLOR,[vm]:o.SRC_ALPHA,[R3]:o.SRC_ALPHA_SATURATE,[T3]:o.DST_COLOR,[M3]:o.DST_ALPHA,[b3]:o.ONE_MINUS_SRC_COLOR,[Sm]:o.ONE_MINUS_SRC_ALPHA,[A3]:o.ONE_MINUS_DST_COLOR,[E3]:o.ONE_MINUS_DST_ALPHA,[C3]:o.CONSTANT_COLOR,[w3]:o.ONE_MINUS_CONSTANT_COLOR,[D3]:o.CONSTANT_ALPHA,[U3]:o.ONE_MINUS_CONSTANT_ALPHA};function ee(H,Lt,Rt,Ct,Mt,vt,Wt,le,We,Vt){if(H===Hr){b===!0&&(At(o.BLEND),b=!1);return}if(b===!1&&(ot(o.BLEND),b=!0),H!==p3){if(H!==y||Vt!==A){if((S!==xo||U!==xo)&&(o.blendEquation(o.FUNC_ADD),S=xo,U=xo),Vt)switch(H){case Fl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uy:o.blendFunc(o.ONE,o.ONE);break;case cy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case fy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:zn("WebGLState: Invalid blending: ",H);break}else switch(H){case Fl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uy:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case cy:zn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fy:zn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zn("WebGLState: Invalid blending: ",H);break}w=null,C=null,P=null,L=null,D.set(0,0,0),V=0,y=H,A=Vt}return}Mt=Mt||Lt,vt=vt||Rt,Wt=Wt||Ct,(Lt!==S||Mt!==U)&&(o.blendEquationSeparate(_e[Lt],_e[Mt]),S=Lt,U=Mt),(Rt!==w||Ct!==C||vt!==P||Wt!==L)&&(o.blendFuncSeparate(Ot[Rt],Ot[Ct],Ot[vt],Ot[Wt]),w=Rt,C=Ct,P=vt,L=Wt),(le.equals(D)===!1||We!==V)&&(o.blendColor(le.r,le.g,le.b,We),D.copy(le),V=We),y=H,A=!1}function X(H,Lt){H.side===Pr?At(o.CULL_FACE):ot(o.CULL_FACE);let Rt=H.side===Xi;Lt&&(Rt=!Rt),se(Rt),H.blending===Fl&&H.transparent===!1?ee(Hr):ee(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ct=H.stencilWrite;f.setTest(Ct),Ct&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Xt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(H){T!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),T=H)}function nt(H){H!==f3?(ot(o.CULL_FACE),H!==G&&(H===ly?o.cullFace(o.BACK):H===h3?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),G=H}function ge(H){H!==W&&(z&&o.lineWidth(H),W=H)}function Xt(H,Lt,Rt){H?(ot(o.POLYGON_OFFSET_FILL),(it!==Lt||at!==Rt)&&(o.polygonOffset(Lt,Rt),it=Lt,at=Rt)):At(o.POLYGON_OFFSET_FILL)}function Fe(H){H?ot(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Bt(H){H===void 0&&(H=o.TEXTURE0+J-1),ft!==H&&(o.activeTexture(H),ft=H)}function ue(H,Lt,Rt){Rt===void 0&&(ft===null?Rt=o.TEXTURE0+J-1:Rt=ft);let Ct=F[Rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},F[Rt]=Ct),(Ct.type!==H||Ct.texture!==Lt)&&(ft!==Rt&&(o.activeTexture(Rt),ft=Rt),o.bindTexture(H,Lt||et[H]),Ct.type=H,Ct.texture=Lt)}function I(){const H=F[ft];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function gt(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function mt(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ut(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ie(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function zt(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Et(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Tt(H){xt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),xt.copy(H))}function $t(H){St.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),St.copy(H))}function Zt(H,Lt){let Rt=h.get(Lt);Rt===void 0&&(Rt=new WeakMap,h.set(Lt,Rt));let Ct=Rt.get(H);Ct===void 0&&(Ct=o.getUniformBlockIndex(Lt,H.name),Rt.set(H,Ct))}function It(H,Lt){const Ct=h.get(Lt).get(H);p.get(Lt)!==Ct&&(o.uniformBlockBinding(Lt,Ct,H.__bindingPointIndex),p.set(Lt,Ct))}function oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ft=null,F={},g={},x=new WeakMap,v=[],M=null,b=!1,y=null,S=null,w=null,C=null,U=null,P=null,L=null,D=new cn(0,0,0),V=0,A=!1,T=null,G=null,W=null,it=null,at=null,xt.set(0,0,o.canvas.width,o.canvas.height),St.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ot,disable:At,bindFramebuffer:Nt,drawBuffers:Ft,useProgram:qt,setBlending:ee,setMaterial:X,setFlipSided:se,setCullFace:nt,setLineWidth:ge,setPolygonOffset:Xt,setScissorTest:Fe,activeTexture:Bt,bindTexture:ue,unbindTexture:I,compressedTexImage2D:R,compressedTexImage3D:$,texImage2D:zt,texImage3D:Et,updateUBOMapping:Zt,uniformBlockBinding:It,texStorage2D:Ut,texStorage3D:ie,texSubImage2D:gt,texSubImage3D:mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:jt,scissor:Tt,viewport:$t,reset:oe}}function fD(o,t,n,a,r,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,_=new WeakMap;let g;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,R){return v?new OffscreenCanvas(I,R):Qh("canvas")}function b(I,R,$){let gt=1;const mt=ue(I);if((mt.width>$||mt.height>$)&&(gt=$/Math.max(mt.width,mt.height)),gt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ht=Math.floor(gt*mt.width),jt=Math.floor(gt*mt.height);g===void 0&&(g=M(ht,jt));const Ut=R?M(ht,jt):g;return Ut.width=ht,Ut.height=jt,Ut.getContext("2d").drawImage(I,0,0,ht,jt),Me("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ht+"x"+jt+")."),Ut}else return"data"in I&&Me("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),I;return I}function y(I){return I.generateMipmaps}function S(I){o.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(I,R,$,gt,mt=!1){if(I!==null){if(o[I]!==void 0)return o[I];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ht=R;if(R===o.RED&&($===o.FLOAT&&(ht=o.R32F),$===o.HALF_FLOAT&&(ht=o.R16F),$===o.UNSIGNED_BYTE&&(ht=o.R8)),R===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.R8UI),$===o.UNSIGNED_SHORT&&(ht=o.R16UI),$===o.UNSIGNED_INT&&(ht=o.R32UI),$===o.BYTE&&(ht=o.R8I),$===o.SHORT&&(ht=o.R16I),$===o.INT&&(ht=o.R32I)),R===o.RG&&($===o.FLOAT&&(ht=o.RG32F),$===o.HALF_FLOAT&&(ht=o.RG16F),$===o.UNSIGNED_BYTE&&(ht=o.RG8)),R===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RG8UI),$===o.UNSIGNED_SHORT&&(ht=o.RG16UI),$===o.UNSIGNED_INT&&(ht=o.RG32UI),$===o.BYTE&&(ht=o.RG8I),$===o.SHORT&&(ht=o.RG16I),$===o.INT&&(ht=o.RG32I)),R===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),$===o.UNSIGNED_INT&&(ht=o.RGB32UI),$===o.BYTE&&(ht=o.RGB8I),$===o.SHORT&&(ht=o.RGB16I),$===o.INT&&(ht=o.RGB32I)),R===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),$===o.UNSIGNED_INT&&(ht=o.RGBA32UI),$===o.BYTE&&(ht=o.RGBA8I),$===o.SHORT&&(ht=o.RGBA16I),$===o.INT&&(ht=o.RGBA32I)),R===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),R===o.RGBA){const jt=mt?jh:Je.getTransfer(gt);$===o.FLOAT&&(ht=o.RGBA32F),$===o.HALF_FLOAT&&(ht=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ht=jt===un?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function U(I,R){let $;return I?R===null||R===Uo||R===Ac?$=o.DEPTH24_STENCIL8:R===Br?$=o.DEPTH32F_STENCIL8:R===Tc&&($=o.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Uo||R===Ac?$=o.DEPTH_COMPONENT24:R===Br?$=o.DEPTH_COMPONENT32F:R===Tc&&($=o.DEPTH_COMPONENT16),$}function P(I,R){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==ha&&I.minFilter!==Da?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function L(I){const R=I.target;R.removeEventListener("dispose",L),V(R),R.isVideoTexture&&_.delete(R)}function D(I){const R=I.target;R.removeEventListener("dispose",D),T(R)}function V(I){const R=a.get(I);if(R.__webglInit===void 0)return;const $=I.source,gt=x.get($);if(gt){const mt=gt[R.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&A(I),Object.keys(gt).length===0&&x.delete($)}a.remove(I)}function A(I){const R=a.get(I);o.deleteTexture(R.__webglTexture);const $=I.source,gt=x.get($);delete gt[R.__cacheKey],c.memory.textures--}function T(I){const R=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(R.__webglFramebuffer[gt]))for(let mt=0;mt<R.__webglFramebuffer[gt].length;mt++)o.deleteFramebuffer(R.__webglFramebuffer[gt][mt]);else o.deleteFramebuffer(R.__webglFramebuffer[gt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[gt])}else{if(Array.isArray(R.__webglFramebuffer))for(let gt=0;gt<R.__webglFramebuffer.length;gt++)o.deleteFramebuffer(R.__webglFramebuffer[gt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let gt=0;gt<R.__webglColorRenderbuffer.length;gt++)R.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[gt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const $=I.textures;for(let gt=0,mt=$.length;gt<mt;gt++){const ht=a.get($[gt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),c.memory.textures--),a.remove($[gt])}a.remove(I)}let G=0;function W(){G=0}function it(){const I=G;return I>=r.maxTextures&&Me("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),G+=1,I}function at(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function J(I,R){const $=a.get(I);if(I.isVideoTexture&&Fe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){const gt=I.image;if(gt===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{et($,I,R);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+R)}function z(I,R){const $=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){et($,I,R);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+R)}function k(I,R){const $=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){et($,I,R);return}n.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+R)}function q(I,R){const $=a.get(I);if(I.version>0&&$.__version!==I.version){ot($,I,R);return}n.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+R)}const ft={[Dm]:o.REPEAT,[Fr]:o.CLAMP_TO_EDGE,[Um]:o.MIRRORED_REPEAT},F={[ha]:o.NEAREST,[G3]:o.NEAREST_MIPMAP_NEAREST,[eh]:o.NEAREST_MIPMAP_LINEAR,[Da]:o.LINEAR,[C0]:o.LINEAR_MIPMAP_NEAREST,[So]:o.LINEAR_MIPMAP_LINEAR},B={[Y3]:o.NEVER,[J3]:o.ALWAYS,[q3]:o.LESS,[$1]:o.LEQUAL,[Z3]:o.EQUAL,[Q3]:o.GEQUAL,[j3]:o.GREATER,[K3]:o.NOTEQUAL};function rt(I,R){if(R.type===Br&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Da||R.magFilter===C0||R.magFilter===eh||R.magFilter===So||R.minFilter===Da||R.minFilter===C0||R.minFilter===eh||R.minFilter===So)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ft[R.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ft[R.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ft[R.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,F[R.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,F[R.minFilter]),R.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,B[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===ha||R.minFilter!==eh&&R.minFilter!==So||R.type===Br&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function xt(I,R){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",L));const gt=R.source;let mt=x.get(gt);mt===void 0&&(mt={},x.set(gt,mt));const ht=at(R);if(ht!==I.__cacheKey){mt[ht]===void 0&&(mt[ht]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),mt[ht].usedTimes++;const jt=mt[I.__cacheKey];jt!==void 0&&(mt[I.__cacheKey].usedTimes--,jt.usedTimes===0&&A(R)),I.__cacheKey=ht,I.__webglTexture=mt[ht].texture}return $}function St(I,R,$){return Math.floor(Math.floor(I/$)/R)}function wt(I,R,$,gt){const ht=I.updateRanges;if(ht.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,$,gt,R.data);else{ht.sort((Et,Tt)=>Et.start-Tt.start);let jt=0;for(let Et=1;Et<ht.length;Et++){const Tt=ht[jt],$t=ht[Et],Zt=Tt.start+Tt.count,It=St($t.start,R.width,4),oe=St(Tt.start,R.width,4);$t.start<=Zt+1&&It===oe&&St($t.start+$t.count-1,R.width,4)===It?Tt.count=Math.max(Tt.count,$t.start+$t.count-Tt.start):(++jt,ht[jt]=$t)}ht.length=jt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),ie=o.getParameter(o.UNPACK_SKIP_PIXELS),zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Et=0,Tt=ht.length;Et<Tt;Et++){const $t=ht[Et],Zt=Math.floor($t.start/4),It=Math.ceil($t.count/4),oe=Zt%R.width,H=Math.floor(Zt/R.width),Lt=It,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,oe),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),n.texSubImage2D(o.TEXTURE_2D,0,oe,H,Lt,Rt,$,gt,R.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,ie),o.pixelStorei(o.UNPACK_SKIP_ROWS,zt)}}function et(I,R,$){let gt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(gt=o.TEXTURE_3D);const mt=xt(I,R),ht=R.source;n.bindTexture(gt,I.__webglTexture,o.TEXTURE0+$);const jt=a.get(ht);if(ht.version!==jt.__version||mt===!0){n.activeTexture(o.TEXTURE0+$);const Ut=Je.getPrimaries(Je.workingColorSpace),ie=R.colorSpace===As?null:Je.getPrimaries(R.colorSpace),zt=R.colorSpace===As||Ut===ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let Et=b(R.image,!1,r.maxTextureSize);Et=Bt(R,Et);const Tt=l.convert(R.format,R.colorSpace),$t=l.convert(R.type);let Zt=C(R.internalFormat,Tt,$t,R.colorSpace,R.isVideoTexture);rt(gt,R);let It;const oe=R.mipmaps,H=R.isVideoTexture!==!0,Lt=jt.__version===void 0||mt===!0,Rt=ht.dataReady,Ct=P(R,Et);if(R.isDepthTexture)Zt=U(R.format===Cc,R.type),Lt&&(H?n.texStorage2D(o.TEXTURE_2D,1,Zt,Et.width,Et.height):n.texImage2D(o.TEXTURE_2D,0,Zt,Et.width,Et.height,0,Tt,$t,null));else if(R.isDataTexture)if(oe.length>0){H&&Lt&&n.texStorage2D(o.TEXTURE_2D,Ct,Zt,oe[0].width,oe[0].height);for(let Mt=0,vt=oe.length;Mt<vt;Mt++)It=oe[Mt],H?Rt&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Tt,$t,It.data):n.texImage2D(o.TEXTURE_2D,Mt,Zt,It.width,It.height,0,Tt,$t,It.data);R.generateMipmaps=!1}else H?(Lt&&n.texStorage2D(o.TEXTURE_2D,Ct,Zt,Et.width,Et.height),Rt&&wt(R,Et,Tt,$t)):n.texImage2D(o.TEXTURE_2D,0,Zt,Et.width,Et.height,0,Tt,$t,Et.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){H&&Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Zt,oe[0].width,oe[0].height,Et.depth);for(let Mt=0,vt=oe.length;Mt<vt;Mt++)if(It=oe[Mt],R.format!==Xa)if(Tt!==null)if(H){if(Rt)if(R.layerUpdates.size>0){const Wt=Ny(It.width,It.height,R.format,R.type);for(const le of R.layerUpdates){const We=It.data.subarray(le*Wt/It.data.BYTES_PER_ELEMENT,(le+1)*Wt/It.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,le,It.width,It.height,1,Tt,We)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,Et.depth,Tt,It.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Zt,It.width,It.height,Et.depth,0,It.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Rt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,It.width,It.height,Et.depth,Tt,$t,It.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Zt,It.width,It.height,Et.depth,0,Tt,$t,It.data)}else{H&&Lt&&n.texStorage2D(o.TEXTURE_2D,Ct,Zt,oe[0].width,oe[0].height);for(let Mt=0,vt=oe.length;Mt<vt;Mt++)It=oe[Mt],R.format!==Xa?Tt!==null?H?Rt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Tt,It.data):n.compressedTexImage2D(o.TEXTURE_2D,Mt,Zt,It.width,It.height,0,It.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Rt&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,It.width,It.height,Tt,$t,It.data):n.texImage2D(o.TEXTURE_2D,Mt,Zt,It.width,It.height,0,Tt,$t,It.data)}else if(R.isDataArrayTexture)if(H){if(Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Zt,Et.width,Et.height,Et.depth),Rt)if(R.layerUpdates.size>0){const Mt=Ny(Et.width,Et.height,R.format,R.type);for(const vt of R.layerUpdates){const Wt=Et.data.subarray(vt*Mt/Et.data.BYTES_PER_ELEMENT,(vt+1)*Mt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,Tt,$t,Wt)}R.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Tt,$t,Et.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,Et.width,Et.height,Et.depth,0,Tt,$t,Et.data);else if(R.isData3DTexture)H?(Lt&&n.texStorage3D(o.TEXTURE_3D,Ct,Zt,Et.width,Et.height,Et.depth),Rt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Tt,$t,Et.data)):n.texImage3D(o.TEXTURE_3D,0,Zt,Et.width,Et.height,Et.depth,0,Tt,$t,Et.data);else if(R.isFramebufferTexture){if(Lt)if(H)n.texStorage2D(o.TEXTURE_2D,Ct,Zt,Et.width,Et.height);else{let Mt=Et.width,vt=Et.height;for(let Wt=0;Wt<Ct;Wt++)n.texImage2D(o.TEXTURE_2D,Wt,Zt,Mt,vt,0,Tt,$t,null),Mt>>=1,vt>>=1}}else if(oe.length>0){if(H&&Lt){const Mt=ue(oe[0]);n.texStorage2D(o.TEXTURE_2D,Ct,Zt,Mt.width,Mt.height)}for(let Mt=0,vt=oe.length;Mt<vt;Mt++)It=oe[Mt],H?Rt&&n.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Tt,$t,It):n.texImage2D(o.TEXTURE_2D,Mt,Zt,Tt,$t,It);R.generateMipmaps=!1}else if(H){if(Lt){const Mt=ue(Et);n.texStorage2D(o.TEXTURE_2D,Ct,Zt,Mt.width,Mt.height)}Rt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,$t,Et)}else n.texImage2D(o.TEXTURE_2D,0,Zt,Tt,$t,Et);y(R)&&S(gt),jt.__version=ht.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ot(I,R,$){if(R.image.length!==6)return;const gt=xt(I,R),mt=R.source;n.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+$);const ht=a.get(mt);if(mt.version!==ht.__version||gt===!0){n.activeTexture(o.TEXTURE0+$);const jt=Je.getPrimaries(Je.workingColorSpace),Ut=R.colorSpace===As?null:Je.getPrimaries(R.colorSpace),ie=R.colorSpace===As||jt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const zt=R.isCompressedTexture||R.image[0].isCompressedTexture,Et=R.image[0]&&R.image[0].isDataTexture,Tt=[];for(let vt=0;vt<6;vt++)!zt&&!Et?Tt[vt]=b(R.image[vt],!0,r.maxCubemapSize):Tt[vt]=Et?R.image[vt].image:R.image[vt],Tt[vt]=Bt(R,Tt[vt]);const $t=Tt[0],Zt=l.convert(R.format,R.colorSpace),It=l.convert(R.type),oe=C(R.internalFormat,Zt,It,R.colorSpace),H=R.isVideoTexture!==!0,Lt=ht.__version===void 0||gt===!0,Rt=mt.dataReady;let Ct=P(R,$t);rt(o.TEXTURE_CUBE_MAP,R);let Mt;if(zt){H&&Lt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,oe,$t.width,$t.height);for(let vt=0;vt<6;vt++){Mt=Tt[vt].mipmaps;for(let Wt=0;Wt<Mt.length;Wt++){const le=Mt[Wt];R.format!==Xa?Zt!==null?H?Rt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,le.width,le.height,Zt,le.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,oe,le.width,le.height,0,le.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,0,0,le.width,le.height,Zt,It,le.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt,oe,le.width,le.height,0,Zt,It,le.data)}}}else{if(Mt=R.mipmaps,H&&Lt){Mt.length>0&&Ct++;const vt=ue(Tt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,oe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){H?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Tt[vt].width,Tt[vt].height,Zt,It,Tt[vt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Tt[vt].width,Tt[vt].height,0,Zt,It,Tt[vt].data);for(let Wt=0;Wt<Mt.length;Wt++){const We=Mt[Wt].image[vt].image;H?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,We.width,We.height,Zt,It,We.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,oe,We.width,We.height,0,Zt,It,We.data)}}else{H?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Zt,It,Tt[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,oe,Zt,It,Tt[vt]);for(let Wt=0;Wt<Mt.length;Wt++){const le=Mt[Wt];H?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,0,0,Zt,It,le.image[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Wt+1,oe,Zt,It,le.image[vt])}}}y(R)&&S(o.TEXTURE_CUBE_MAP),ht.__version=mt.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function At(I,R,$,gt,mt,ht){const jt=l.convert($.format,$.colorSpace),Ut=l.convert($.type),ie=C($.internalFormat,jt,Ut,$.colorSpace),zt=a.get(R),Et=a.get($);if(Et.__renderTarget=R,!zt.__hasExternalTextures){const Tt=Math.max(1,R.width>>ht),$t=Math.max(1,R.height>>ht);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?n.texImage3D(mt,ht,ie,Tt,$t,R.depth,0,jt,Ut,null):n.texImage2D(mt,ht,ie,Tt,$t,0,jt,Ut,null)}n.bindFramebuffer(o.FRAMEBUFFER,I),Xt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,mt,Et.__webglTexture,0,ge(R)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,mt,Et.__webglTexture,ht),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Nt(I,R,$){if(o.bindRenderbuffer(o.RENDERBUFFER,I),R.depthBuffer){const gt=R.depthTexture,mt=gt&&gt.isDepthTexture?gt.type:null,ht=U(R.stencilBuffer,mt),jt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=ge(R);Xt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ht,R.width,R.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ht,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ht,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,I)}else{const gt=R.textures;for(let mt=0;mt<gt.length;mt++){const ht=gt[mt],jt=l.convert(ht.format,ht.colorSpace),Ut=l.convert(ht.type),ie=C(ht.internalFormat,jt,Ut,ht.colorSpace),zt=ge(R);$&&Xt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,ie,R.width,R.height):Xt(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,zt,ie,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,ie,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=a.get(R.depthTexture);gt.__renderTarget=R,(!gt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),J(R.depthTexture,0);const mt=gt.__webglTexture,ht=ge(R);if(R.depthTexture.format===Rc)Xt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,mt,0);else if(R.depthTexture.format===Cc)Xt(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function qt(I){const R=a.get(I),$=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const gt=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),gt){const mt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,gt.removeEventListener("dispose",mt)};gt.addEventListener("dispose",mt),R.__depthDisposeCallback=mt}R.__boundDepthTexture=gt}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const gt=I.texture.mipmaps;gt&&gt.length>0?Ft(R.__webglFramebuffer[0],I):Ft(R.__webglFramebuffer,I)}else if($){R.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[gt]),R.__webglDepthbuffer[gt]===void 0)R.__webglDepthbuffer[gt]=o.createRenderbuffer(),Nt(R.__webglDepthbuffer[gt],I,!1);else{const mt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=R.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,ht)}}else{const gt=I.texture.mipmaps;if(gt&&gt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Nt(R.__webglDepthbuffer,I,!1);else{const mt=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,ht)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function _e(I,R,$){const gt=a.get(I);R!==void 0&&At(gt.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&qt(I)}function Ot(I){const R=I.texture,$=a.get(I),gt=a.get(R);I.addEventListener("dispose",D);const mt=I.textures,ht=I.isWebGLCubeRenderTarget===!0,jt=mt.length>1;if(jt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=R.version,c.memory.textures++),ht){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let ie=0;ie<R.mipmaps.length;ie++)$.__webglFramebuffer[Ut][ie]=o.createFramebuffer()}else $.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<R.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Ut=0,ie=mt.length;Ut<ie;Ut++){const zt=a.get(mt[Ut]);zt.__webglTexture===void 0&&(zt.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&Xt(I)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<mt.length;Ut++){const ie=mt[Ut];$.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const zt=l.convert(ie.format,ie.colorSpace),Et=l.convert(ie.type),Tt=C(ie.internalFormat,zt,Et,ie.colorSpace,I.isXRRenderTarget===!0),$t=ge(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,Tt,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Nt($.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){n.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),rt(o.TEXTURE_CUBE_MAP,R);for(let Ut=0;Ut<6;Ut++)if(R.mipmaps&&R.mipmaps.length>0)for(let ie=0;ie<R.mipmaps.length;ie++)At($.__webglFramebuffer[Ut][ie],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ie);else At($.__webglFramebuffer[Ut],I,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);y(R)&&S(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(jt){for(let Ut=0,ie=mt.length;Ut<ie;Ut++){const zt=mt[Ut],Et=a.get(zt);let Tt=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Tt=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Tt,Et.__webglTexture),rt(Tt,zt),At($.__webglFramebuffer,I,zt,o.COLOR_ATTACHMENT0+Ut,Tt,0),y(zt)&&S(Tt)}n.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ut=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Ut,gt.__webglTexture),rt(Ut,R),R.mipmaps&&R.mipmaps.length>0)for(let ie=0;ie<R.mipmaps.length;ie++)At($.__webglFramebuffer[ie],I,R,o.COLOR_ATTACHMENT0,Ut,ie);else At($.__webglFramebuffer,I,R,o.COLOR_ATTACHMENT0,Ut,0);y(R)&&S(Ut),n.unbindTexture()}I.depthBuffer&&qt(I)}function ee(I){const R=I.textures;for(let $=0,gt=R.length;$<gt;$++){const mt=R[$];if(y(mt)){const ht=w(I),jt=a.get(mt).__webglTexture;n.bindTexture(ht,jt),S(ht),n.unbindTexture()}}}const X=[],se=[];function nt(I){if(I.samples>0){if(Xt(I)===!1){const R=I.textures,$=I.width,gt=I.height;let mt=o.COLOR_BUFFER_BIT;const ht=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=a.get(I),Ut=R.length>1;if(Ut)for(let zt=0;zt<R.length;zt++)n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const ie=I.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let zt=0;zt<R.length;zt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[zt]);const Et=a.get(R[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,$,gt,0,0,$,gt,mt,o.NEAREST),p===!0&&(X.length=0,se.length=0,X.push(o.COLOR_ATTACHMENT0+zt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(X.push(ht),se.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,se)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,X))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let zt=0;zt<R.length;zt++){n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,jt.__webglColorRenderbuffer[zt]);const Et=a.get(R[zt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,Et,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const R=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function ge(I){return Math.min(r.maxSamples,I.samples)}function Xt(I){const R=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Fe(I){const R=c.render.frame;_.get(I)!==R&&(_.set(I,R),I.update())}function Bt(I,R){const $=I.colorSpace,gt=I.format,mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Zl&&$!==As&&(Je.getTransfer($)===un?(gt!==Xa||mt!==kr)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zn("WebGLTextures: Unsupported texture color space:",$)),R}function ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=it,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=_e,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Xt}function hD(o,t){function n(a,r=As){let l;const c=Je.getTransfer(r);if(a===kr)return o.UNSIGNED_BYTE;if(a===z_)return o.UNSIGNED_SHORT_4_4_4_4;if(a===F_)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Z1)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===j1)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Y1)return o.BYTE;if(a===q1)return o.SHORT;if(a===Tc)return o.UNSIGNED_SHORT;if(a===P_)return o.INT;if(a===Uo)return o.UNSIGNED_INT;if(a===Br)return o.FLOAT;if(a===iu)return o.HALF_FLOAT;if(a===K1)return o.ALPHA;if(a===Q1)return o.RGB;if(a===Xa)return o.RGBA;if(a===Rc)return o.DEPTH_COMPONENT;if(a===Cc)return o.DEPTH_STENCIL;if(a===J1)return o.RED;if(a===B_)return o.RED_INTEGER;if(a===I_)return o.RG;if(a===H_)return o.RG_INTEGER;if(a===G_)return o.RGBA_INTEGER;if(a===Ph||a===zh||a===Fh||a===Bh)if(c===un)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Ph)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===zh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Bh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Ph)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===zh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Bh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Lm||a===Nm||a===Om||a===Pm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Lm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Nm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Om)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Pm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zm||a===Fm||a===Bm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===zm||a===Fm)return c===un?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Bm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Im||a===Hm||a===Gm||a===Vm||a===km||a===Xm||a===Wm||a===Ym||a===qm||a===Zm||a===jm||a===Km||a===Qm||a===Jm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Im)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Gm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Vm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===km)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Wm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ym)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===qm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Zm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===jm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Km)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Qm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Jm)return c===un?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===$m||a===t_||a===e_)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===$m)return c===un?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===t_)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===e_)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===n_||a===i_||a===a_||a===r_)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===n_)return l.COMPRESSED_RED_RGTC1_EXT;if(a===i_)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===a_)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===r_)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ac?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const dD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pD=`
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

}`;class mD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new hb(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new rr({vertexShader:dD,fragmentShader:pD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wr(new kc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _D extends au{constructor(t,n){super();const a=this;let r=null,l=1,c=null,f="local-floor",p=1,h=null,_=null,g=null,x=null,v=null,M=null;const b=typeof XRWebGLBinding<"u",y=new mD,S={},w=n.getContextAttributes();let C=null,U=null;const P=[],L=[],D=new qe;let V=null;const A=new Va;A.viewport=new Fn;const T=new Va;T.viewport=new Fn;const G=[A,T],W=new O2;let it=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ot=P[et];return ot===void 0&&(ot=new Q0,P[et]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(et){let ot=P[et];return ot===void 0&&(ot=new Q0,P[et]=ot),ot.getGripSpace()},this.getHand=function(et){let ot=P[et];return ot===void 0&&(ot=new Q0,P[et]=ot),ot.getHandSpace()};function J(et){const ot=L.indexOf(et.inputSource);if(ot===-1)return;const At=P[ot];At!==void 0&&(At.update(et.inputSource,et.frame,h||c),At.dispatchEvent({type:et.type,data:et.inputSource}))}function z(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",k);for(let et=0;et<P.length;et++){const ot=L[et];ot!==null&&(L[et]=null,P[et].disconnect(ot))}it=null,at=null,y.reset();for(const et in S)delete S[et];t.setRenderTarget(C),v=null,x=null,g=null,r=null,U=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(V),t.setSize(D.width,D.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){l=et,a.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){f=et,a.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(r,n)),g},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(C=t.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",z),r.addEventListener("inputsourceschange",k),w.xrCompatible!==!0&&await n.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(D),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Nt=null,Ft=null;w.depth&&(Ft=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=w.stencil?Cc:Rc,Nt=w.stencil?Ac:Uo);const qt={colorFormat:n.RGBA8,depthFormat:Ft,scaleFactor:l};g=this.getBinding(),x=g.createProjectionLayer(qt),r.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Lo(x.textureWidth,x.textureHeight,{format:Xa,type:kr,depthTexture:new fb(x.textureWidth,x.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const At={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(r,n,At),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),U=new Lo(v.framebufferWidth,v.framebufferHeight,{format:Xa,type:kr,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await r.requestReferenceSpace(f),wt.setContext(r),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(et){for(let ot=0;ot<et.removed.length;ot++){const At=et.removed[ot],Nt=L.indexOf(At);Nt>=0&&(L[Nt]=null,P[Nt].disconnect(At))}for(let ot=0;ot<et.added.length;ot++){const At=et.added[ot];let Nt=L.indexOf(At);if(Nt===-1){for(let qt=0;qt<P.length;qt++)if(qt>=L.length){L.push(At),Nt=qt;break}else if(L[qt]===null){L[qt]=At,Nt=qt;break}if(Nt===-1)break}const Ft=P[Nt];Ft&&Ft.connect(At)}}const q=new pt,ft=new pt;function F(et,ot,At){q.setFromMatrixPosition(ot.matrixWorld),ft.setFromMatrixPosition(At.matrixWorld);const Nt=q.distanceTo(ft),Ft=ot.projectionMatrix.elements,qt=At.projectionMatrix.elements,_e=Ft[14]/(Ft[10]-1),Ot=Ft[14]/(Ft[10]+1),ee=(Ft[9]+1)/Ft[5],X=(Ft[9]-1)/Ft[5],se=(Ft[8]-1)/Ft[0],nt=(qt[8]+1)/qt[0],ge=_e*se,Xt=_e*nt,Fe=Nt/(-se+nt),Bt=Fe*-se;if(ot.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Bt),et.translateZ(Fe),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Ft[10]===-1)et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const ue=_e+Fe,I=Ot+Fe,R=ge-Bt,$=Xt+(Nt-Bt),gt=ee*Ot/I*ue,mt=X*Ot/I*ue;et.projectionMatrix.makePerspective(R,$,gt,mt,ue,I),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function B(et,ot){ot===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ot.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;let ot=et.near,At=et.far;y.texture!==null&&(y.depthNear>0&&(ot=y.depthNear),y.depthFar>0&&(At=y.depthFar)),W.near=T.near=A.near=ot,W.far=T.far=A.far=At,(it!==W.near||at!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),it=W.near,at=W.far),W.layers.mask=et.layers.mask|6,A.layers.mask=W.layers.mask&3,T.layers.mask=W.layers.mask&5;const Nt=et.parent,Ft=W.cameras;B(W,Nt);for(let qt=0;qt<Ft.length;qt++)B(Ft[qt],Nt);Ft.length===2?F(W,A,T):W.projectionMatrix.copy(A.projectionMatrix),rt(et,W,Nt)};function rt(et,ot,At){At===null?et.matrix.copy(ot.matrixWorld):(et.matrix.copy(At.matrixWorld),et.matrix.invert(),et.matrix.multiply(ot.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ot.projectionMatrix),et.projectionMatrixInverse.copy(ot.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=s_*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(x===null&&v===null))return p},this.setFoveation=function(et){p=et,x!==null&&(x.fixedFoveation=et),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(et){return S[et]};let xt=null;function St(et,ot){if(_=ot.getViewerPose(h||c),M=ot,_!==null){const At=_.views;v!==null&&(t.setRenderTargetFramebuffer(U,v.framebuffer),t.setRenderTarget(U));let Nt=!1;At.length!==W.cameras.length&&(W.cameras.length=0,Nt=!0);for(let Ot=0;Ot<At.length;Ot++){const ee=At[Ot];let X=null;if(v!==null)X=v.getViewport(ee);else{const nt=g.getViewSubImage(x,ee);X=nt.viewport,Ot===0&&(t.setRenderTargetTextures(U,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(U))}let se=G[Ot];se===void 0&&(se=new Va,se.layers.enable(Ot),se.viewport=new Fn,G[Ot]=se),se.matrix.fromArray(ee.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ee.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(X.x,X.y,X.width,X.height),Ot===0&&(W.matrix.copy(se.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Nt===!0&&W.cameras.push(se)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){g=a.getBinding();const Ot=g.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&y.init(Ot,r.renderState)}if(Ft&&Ft.includes("camera-access")&&b){t.state.unbindTexture(),g=a.getBinding();for(let Ot=0;Ot<At.length;Ot++){const ee=At[Ot].camera;if(ee){let X=S[ee];X||(X=new hb,S[ee]=X);const se=g.getCameraImage(ee);X.sourceTexture=se}}}}for(let At=0;At<P.length;At++){const Nt=L[At],Ft=P[At];Nt!==null&&Ft!==void 0&&Ft.update(Nt,ot,h||c)}xt&&xt(et,ot),ot.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ot}),M=null}const wt=new pb;wt.setAnimationLoop(St),this.setAnimationLoop=function(et){xt=et},this.dispose=function(){}}}const co=new Xr,gD=new Qn;function xD(o,t){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,ob(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function r(y,S,w,C,U){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(y,S):S.isMeshToonMaterial?(l(y,S),g(y,S)):S.isMeshPhongMaterial?(l(y,S),_(y,S)):S.isMeshStandardMaterial?(l(y,S),x(y,S),S.isMeshPhysicalMaterial&&v(y,S,U)):S.isMeshMatcapMaterial?(l(y,S),M(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?p(y,S,w,C):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Xi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Xi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=t.get(S),C=w.envMap,U=w.envMapRotation;C&&(y.envMap.value=C,co.copy(U),co.x*=-1,co.y*=-1,co.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(co.y*=-1,co.z*=-1),y.envMapRotation.value.setFromMatrix4(gD.makeRotationFromEuler(co)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,w,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=C*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function v(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const w=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function vD(o,t,n,a){let r={},l={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,C){const U=C.program;a.uniformBlockBinding(w,U)}function h(w,C){let U=r[w.id];U===void 0&&(M(w),U=_(w),r[w.id]=U,w.addEventListener("dispose",y));const P=C.program;a.updateUBOMapping(w,P);const L=t.render.frame;l[w.id]!==L&&(x(w),l[w.id]=L)}function _(w){const C=g();w.__bindingPointIndex=C;const U=o.createBuffer(),P=w.__size,L=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,P,L),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,U),U}function g(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return zn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const C=r[w.id],U=w.uniforms,P=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let L=0,D=U.length;L<D;L++){const V=Array.isArray(U[L])?U[L]:[U[L]];for(let A=0,T=V.length;A<T;A++){const G=V[A];if(v(G,L,A,P)===!0){const W=G.__offset,it=Array.isArray(G.value)?G.value:[G.value];let at=0;for(let J=0;J<it.length;J++){const z=it[J],k=b(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,W+at,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,at),at+=k.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(w,C,U,P){const L=w.value,D=C+"_"+U;if(P[D]===void 0)return typeof L=="number"||typeof L=="boolean"?P[D]=L:P[D]=L.clone(),!0;{const V=P[D];if(typeof L=="number"||typeof L=="boolean"){if(V!==L)return P[D]=L,!0}else if(V.equals(L)===!1)return V.copy(L),!0}return!1}function M(w){const C=w.uniforms;let U=0;const P=16;for(let D=0,V=C.length;D<V;D++){const A=Array.isArray(C[D])?C[D]:[C[D]];for(let T=0,G=A.length;T<G;T++){const W=A[T],it=Array.isArray(W.value)?W.value:[W.value];for(let at=0,J=it.length;at<J;at++){const z=it[at],k=b(z),q=U%P,ft=q%k.boundary,F=q+ft;U+=ft,F!==0&&P-F<k.storage&&(U+=P-F),W.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=U,U+=k.storage}}}const L=U%P;return L>0&&(U+=P-L),w.__size=U,w.__cache={},this}function b(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",w),C}function y(w){const C=w.target;C.removeEventListener("dispose",y);const U=c.indexOf(C.__bindingPointIndex);c.splice(U,1),o.deleteBuffer(r[C.id]),delete r[C.id],delete l[C.id]}function S(){for(const w in r)o.deleteBuffer(r[w]);c=[],r={},l={}}return{bind:p,update:h,dispose:S}}const SD=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ur=null;function yD(){return Ur===null&&(Ur=new C2(SD,32,32,I_,iu),Ur.minFilter=Da,Ur.magFilter=Da,Ur.wrapS=Fr,Ur.wrapT=Fr,Ur.generateMipmaps=!1,Ur.needsUpdate=!0),Ur}class bD{constructor(t={}){const{canvas:n=$3(),context:a=null,depth:r=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let v;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=a.getContextAttributes().alpha}else v=c;const M=new Set([G_,H_,B_]),b=new Set([kr,Uo,Tc,Ac,z_,F_]),y=new Uint32Array(4),S=new Int32Array(4);let w=null,C=null;const U=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let D=!1;this._outputColorSpace=Ra;let V=0,A=0,T=null,G=-1,W=null;const it=new Fn,at=new Fn;let J=null;const z=new cn(0);let k=0,q=n.width,ft=n.height,F=1,B=null,rt=null;const xt=new Fn(0,0,q,ft),St=new Fn(0,0,q,ft);let wt=!1;const et=new cb;let ot=!1,At=!1;const Nt=new Qn,Ft=new pt,qt=new Fn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function ee(){return T===null?F:1}let X=a;function se(O,j){return n.getContext(O,j)}try{const O={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${O_}`),n.addEventListener("webglcontextlost",Mt,!1),n.addEventListener("webglcontextrestored",vt,!1),n.addEventListener("webglcontextcreationerror",Wt,!1),X===null){const j="webgl2";if(X=se(j,O),X===null)throw se(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw O("WebGLRenderer: "+O.message),O}let nt,ge,Xt,Fe,Bt,ue,I,R,$,gt,mt,ht,jt,Ut,ie,zt,Et,Tt,$t,Zt,It,oe,H,Lt;function Rt(){nt=new DC(X),nt.init(),oe=new hD(X,nt),ge=new yC(X,nt,t,oe),Xt=new cD(X,nt),ge.reversedDepthBuffer&&x&&Xt.buffers.depth.setReversed(!0),Fe=new NC(X),Bt=new Qw,ue=new fD(X,nt,Xt,Bt,ge,oe,Fe),I=new MC(L),R=new wC(L),$=new F2(X),H=new vC(X,$),gt=new UC(X,$,Fe,H),mt=new PC(X,gt,$,Fe),$t=new OC(X,ge,ue),zt=new bC(Bt),ht=new Kw(L,I,R,nt,ge,H,zt),jt=new xD(L,Bt),Ut=new $w,ie=new rD(nt),Tt=new xC(L,I,R,Xt,mt,v,p),Et=new lD(L,mt,ge),Lt=new vD(X,Fe,ge,Xt),Zt=new SC(X,nt,Fe),It=new LC(X,nt,Fe),Fe.programs=ht.programs,L.capabilities=ge,L.extensions=nt,L.properties=Bt,L.renderLists=Ut,L.shadowMap=Et,L.state=Xt,L.info=Fe}Rt();const Ct=new _D(L,X);this.xr=Ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const O=nt.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=nt.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(O){O!==void 0&&(F=O,this.setSize(q,ft,!1))},this.getSize=function(O){return O.set(q,ft)},this.setSize=function(O,j,st=!0){if(Ct.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}q=O,ft=j,n.width=Math.floor(O*F),n.height=Math.floor(j*F),st===!0&&(n.style.width=O+"px",n.style.height=j+"px"),this.setViewport(0,0,O,j)},this.getDrawingBufferSize=function(O){return O.set(q*F,ft*F).floor()},this.setDrawingBufferSize=function(O,j,st){q=O,ft=j,F=st,n.width=Math.floor(O*st),n.height=Math.floor(j*st),this.setViewport(0,0,O,j)},this.getCurrentViewport=function(O){return O.copy(it)},this.getViewport=function(O){return O.copy(xt)},this.setViewport=function(O,j,st,tt){O.isVector4?xt.set(O.x,O.y,O.z,O.w):xt.set(O,j,st,tt),Xt.viewport(it.copy(xt).multiplyScalar(F).round())},this.getScissor=function(O){return O.copy(St)},this.setScissor=function(O,j,st,tt){O.isVector4?St.set(O.x,O.y,O.z,O.w):St.set(O,j,st,tt),Xt.scissor(at.copy(St).multiplyScalar(F).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(O){Xt.setScissorTest(wt=O)},this.setOpaqueSort=function(O){B=O},this.setTransparentSort=function(O){rt=O},this.getClearColor=function(O){return O.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(O=!0,j=!0,st=!0){let tt=0;if(O){let K=!1;if(T!==null){const Dt=T.texture.format;K=M.has(Dt)}if(K){const Dt=T.texture.type,Pt=b.has(Dt),Yt=Tt.getClearColor(),Gt=Tt.getClearAlpha(),re=Yt.r,fe=Yt.g,te=Yt.b;Pt?(y[0]=re,y[1]=fe,y[2]=te,y[3]=Gt,X.clearBufferuiv(X.COLOR,0,y)):(S[0]=re,S[1]=fe,S[2]=te,S[3]=Gt,X.clearBufferiv(X.COLOR,0,S))}else tt|=X.COLOR_BUFFER_BIT}j&&(tt|=X.DEPTH_BUFFER_BIT),st&&(tt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",vt,!1),n.removeEventListener("webglcontextcreationerror",Wt,!1),Tt.dispose(),Ut.dispose(),ie.dispose(),Bt.dispose(),I.dispose(),R.dispose(),mt.dispose(),H.dispose(),Lt.dispose(),ht.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",me),Ct.removeEventListener("sessionend",ae),ce.stop()};function Mt(O){O.preventDefault(),_y("WebGLRenderer: Context Lost."),D=!0}function vt(){_y("WebGLRenderer: Context Restored."),D=!1;const O=Fe.autoReset,j=Et.enabled,st=Et.autoUpdate,tt=Et.needsUpdate,K=Et.type;Rt(),Fe.autoReset=O,Et.enabled=j,Et.autoUpdate=st,Et.needsUpdate=tt,Et.type=K}function Wt(O){zn("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function le(O){const j=O.target;j.removeEventListener("dispose",le),We(j)}function We(O){Vt(O),Bt.remove(O)}function Vt(O){const j=Bt.get(O).programs;j!==void 0&&(j.forEach(function(st){ht.releaseProgram(st)}),O.isShaderMaterial&&ht.releaseShaderCache(O))}this.renderBufferDirect=function(O,j,st,tt,K,Dt){j===null&&(j=_e);const Pt=K.isMesh&&K.matrixWorld.determinant()<0,Yt=hn(O,j,st,tt,K);Xt.setMaterial(tt,Pt);let Gt=st.index,re=1;if(tt.wireframe===!0){if(Gt=gt.getWireframeAttribute(st),Gt===void 0)return;re=2}const fe=st.drawRange,te=st.attributes.position;let Te=fe.start*re,Ze=(fe.start+fe.count)*re;Dt!==null&&(Te=Math.max(Te,Dt.start*re),Ze=Math.min(Ze,(Dt.start+Dt.count)*re)),Gt!==null?(Te=Math.max(Te,0),Ze=Math.min(Ze,Gt.count)):te!=null&&(Te=Math.max(Te,0),Ze=Math.min(Ze,te.count));const je=Ze-Te;if(je<0||je===1/0)return;H.setup(K,tt,Yt,st,Gt);let He,en=Zt;if(Gt!==null&&(He=$.get(Gt),en=It,en.setIndex(He)),K.isMesh)tt.wireframe===!0?(Xt.setLineWidth(tt.wireframeLinewidth*ee()),en.setMode(X.LINES)):en.setMode(X.TRIANGLES);else if(K.isLine){let de=tt.linewidth;de===void 0&&(de=1),Xt.setLineWidth(de*ee()),K.isLineSegments?en.setMode(X.LINES):K.isLineLoop?en.setMode(X.LINE_LOOP):en.setMode(X.LINE_STRIP)}else K.isPoints?en.setMode(X.POINTS):K.isSprite&&en.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)wc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),en.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))en.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const de=K._multiDrawStarts,dn=K._multiDrawCounts,Ge=K._multiDrawCount,ei=Gt?$.get(Gt).bytesPerElement:1,Zr=Bt.get(tt).currentProgram.getUniforms();for(let xn=0;xn<Ge;xn++)Zr.setValue(X,"_gl_DrawID",xn),en.render(de[xn]/ei,dn[xn])}else if(K.isInstancedMesh)en.renderInstances(Te,je,K.count);else if(st.isInstancedBufferGeometry){const de=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,dn=Math.min(st.instanceCount,de);en.renderInstances(Te,je,dn)}else en.render(Te,je)};function Kt(O,j,st){O.transparent===!0&&O.side===Pr&&O.forceSinglePass===!1?(O.side=Xi,O.needsUpdate=!0,ve(O,j,st),O.side=Fs,O.needsUpdate=!0,ve(O,j,st),O.side=Pr):ve(O,j,st)}this.compile=function(O,j,st=null){st===null&&(st=O),C=ie.get(st),C.init(j),P.push(C),st.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),O!==st&&O.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(C.pushLight(K),K.castShadow&&C.pushShadow(K))}),C.setupLights();const tt=new Set;return O.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let Pt=0;Pt<Dt.length;Pt++){const Yt=Dt[Pt];Kt(Yt,st,K),tt.add(Yt)}else Kt(Dt,st,K),tt.add(Dt)}),C=P.pop(),tt},this.compileAsync=function(O,j,st=null){const tt=this.compile(O,j,st);return new Promise(K=>{function Dt(){if(tt.forEach(function(Pt){Bt.get(Pt).currentProgram.isReady()&&tt.delete(Pt)}),tt.size===0){K(O);return}setTimeout(Dt,10)}nt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let xe=null;function Ht(O){xe&&xe(O)}function me(){ce.stop()}function ae(){ce.start()}const ce=new pb;ce.setAnimationLoop(Ht),typeof self<"u"&&ce.setContext(self),this.setAnimationLoop=function(O){xe=O,Ct.setAnimationLoop(O),O===null?ce.stop():ce.start()},Ct.addEventListener("sessionstart",me),Ct.addEventListener("sessionend",ae),this.render=function(O,j){if(j!==void 0&&j.isCamera!==!0){zn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(j),j=Ct.getCamera()),O.isScene===!0&&O.onBeforeRender(L,O,j,T),C=ie.get(O,P.length),C.init(j),P.push(C),Nt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),et.setFromProjectionMatrix(Nt,tr,j.reversedDepth),At=this.localClippingEnabled,ot=zt.init(this.clippingPlanes,At),w=Ut.get(O,U.length),w.init(),U.push(w),Ct.enabled===!0&&Ct.isPresenting===!0){const Dt=L.xr.getDepthSensingMesh();Dt!==null&&gn(Dt,j,-1/0,L.sortObjects)}gn(O,j,0,L.sortObjects),w.finish(),L.sortObjects===!0&&w.sort(B,rt),Ot=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Ot&&Tt.addToRenderList(w,O),this.info.render.frame++,ot===!0&&zt.beginShadows();const st=C.state.shadowsArray;Et.render(st,O,j),ot===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=w.opaque,K=w.transmissive;if(C.setupLights(),j.isArrayCamera){const Dt=j.cameras;if(K.length>0)for(let Pt=0,Yt=Dt.length;Pt<Yt;Pt++){const Gt=Dt[Pt];fn(tt,K,O,Gt)}Ot&&Tt.render(O);for(let Pt=0,Yt=Dt.length;Pt<Yt;Pt++){const Gt=Dt[Pt];Ee(w,O,Gt,Gt.viewport)}}else K.length>0&&fn(tt,K,O,j),Ot&&Tt.render(O),Ee(w,O,j);T!==null&&A===0&&(ue.updateMultisampleRenderTarget(T),ue.updateRenderTargetMipmap(T)),O.isScene===!0&&O.onAfterRender(L,O,j),H.resetDefaultState(),G=-1,W=null,P.pop(),P.length>0?(C=P[P.length-1],ot===!0&&zt.setGlobalState(L.clippingPlanes,C.state.camera)):C=null,U.pop(),U.length>0?w=U[U.length-1]:w=null};function gn(O,j,st,tt){if(O.visible===!1)return;if(O.layers.test(j.layers)){if(O.isGroup)st=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(j);else if(O.isLight)C.pushLight(O),O.castShadow&&C.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||et.intersectsSprite(O)){tt&&qt.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Nt);const Pt=mt.update(O),Yt=O.material;Yt.visible&&w.push(O,Pt,Yt,st,qt.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||et.intersectsObject(O))){const Pt=mt.update(O),Yt=O.material;if(tt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),qt.copy(O.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),qt.copy(Pt.boundingSphere.center)),qt.applyMatrix4(O.matrixWorld).applyMatrix4(Nt)),Array.isArray(Yt)){const Gt=Pt.groups;for(let re=0,fe=Gt.length;re<fe;re++){const te=Gt[re],Te=Yt[te.materialIndex];Te&&Te.visible&&w.push(O,Pt,Te,st,qt.z,te)}}else Yt.visible&&w.push(O,Pt,Yt,st,qt.z,null)}}const Dt=O.children;for(let Pt=0,Yt=Dt.length;Pt<Yt;Pt++)gn(Dt[Pt],j,st,tt)}function Ee(O,j,st,tt){const{opaque:K,transmissive:Dt,transparent:Pt}=O;C.setupLightsView(st),ot===!0&&zt.setGlobalState(L.clippingPlanes,st),tt&&Xt.viewport(it.copy(tt)),K.length>0&&tn(K,j,st),Dt.length>0&&tn(Dt,j,st),Pt.length>0&&tn(Pt,j,st),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function fn(O,j,st,tt){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;C.state.transmissionRenderTarget[tt.id]===void 0&&(C.state.transmissionRenderTarget[tt.id]=new Lo(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?iu:kr,minFilter:So,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const Dt=C.state.transmissionRenderTarget[tt.id],Pt=tt.viewport||it;Dt.setSize(Pt.z*L.transmissionResolutionScale,Pt.w*L.transmissionResolutionScale);const Yt=L.getRenderTarget(),Gt=L.getActiveCubeFace(),re=L.getActiveMipmapLevel();L.setRenderTarget(Dt),L.getClearColor(z),k=L.getClearAlpha(),k<1&&L.setClearColor(16777215,.5),L.clear(),Ot&&Tt.render(st);const fe=L.toneMapping;L.toneMapping=Ns;const te=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),C.setupLightsView(tt),ot===!0&&zt.setGlobalState(L.clippingPlanes,tt),tn(O,st,tt),ue.updateMultisampleRenderTarget(Dt),ue.updateRenderTargetMipmap(Dt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Ze=0,je=j.length;Ze<je;Ze++){const He=j[Ze],{object:en,geometry:de,material:dn,group:Ge}=He;if(dn.side===Pr&&en.layers.test(tt.layers)){const ei=dn.side;dn.side=Xi,dn.needsUpdate=!0,ye(en,st,tt,de,dn,Ge),dn.side=ei,dn.needsUpdate=!0,Te=!0}}Te===!0&&(ue.updateMultisampleRenderTarget(Dt),ue.updateRenderTargetMipmap(Dt))}L.setRenderTarget(Yt,Gt,re),L.setClearColor(z,k),te!==void 0&&(tt.viewport=te),L.toneMapping=fe}function tn(O,j,st){const tt=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Dt=O.length;K<Dt;K++){const Pt=O[K],{object:Yt,geometry:Gt,group:re}=Pt;let fe=Pt.material;fe.allowOverride===!0&&tt!==null&&(fe=tt),Yt.layers.test(st.layers)&&ye(Yt,j,st,Gt,fe,re)}}function ye(O,j,st,tt,K,Dt){O.onBeforeRender(L,j,st,tt,K,Dt),O.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),K.onBeforeRender(L,j,st,tt,O,Dt),K.transparent===!0&&K.side===Pr&&K.forceSinglePass===!1?(K.side=Xi,K.needsUpdate=!0,L.renderBufferDirect(st,j,tt,K,O,Dt),K.side=Fs,K.needsUpdate=!0,L.renderBufferDirect(st,j,tt,K,O,Dt),K.side=Pr):L.renderBufferDirect(st,j,tt,K,O,Dt),O.onAfterRender(L,j,st,tt,K,Dt)}function ve(O,j,st){j.isScene!==!0&&(j=_e);const tt=Bt.get(O),K=C.state.lights,Dt=C.state.shadowsArray,Pt=K.state.version,Yt=ht.getParameters(O,K.state,Dt,j,st),Gt=ht.getProgramCacheKey(Yt);let re=tt.programs;tt.environment=O.isMeshStandardMaterial?j.environment:null,tt.fog=j.fog,tt.envMap=(O.isMeshStandardMaterial?R:I).get(O.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&O.envMap===null?j.environmentRotation:O.envMapRotation,re===void 0&&(O.addEventListener("dispose",le),re=new Map,tt.programs=re);let fe=re.get(Gt);if(fe!==void 0){if(tt.currentProgram===fe&&tt.lightsStateVersion===Pt)return ti(O,Yt),fe}else Yt.uniforms=ht.getUniforms(O),O.onBeforeCompile(Yt,L),fe=ht.acquireProgram(Yt,Gt),re.set(Gt,fe),tt.uniforms=Yt.uniforms;const te=tt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(te.clippingPlanes=zt.uniform),ti(O,Yt),tt.needsLights=Ti(O),tt.lightsStateVersion=Pt,tt.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),tt.currentProgram=fe,tt.uniformsList=null,fe}function Oe(O){if(O.uniformsList===null){const j=O.currentProgram.getUniforms();O.uniformsList=Ih.seqWithValue(j.seq,O.uniforms)}return O.uniformsList}function ti(O,j){const st=Bt.get(O);st.outputColorSpace=j.outputColorSpace,st.batching=j.batching,st.batchingColor=j.batchingColor,st.instancing=j.instancing,st.instancingColor=j.instancingColor,st.instancingMorph=j.instancingMorph,st.skinning=j.skinning,st.morphTargets=j.morphTargets,st.morphNormals=j.morphNormals,st.morphColors=j.morphColors,st.morphTargetsCount=j.morphTargetsCount,st.numClippingPlanes=j.numClippingPlanes,st.numIntersection=j.numClipIntersection,st.vertexAlphas=j.vertexAlphas,st.vertexTangents=j.vertexTangents,st.toneMapping=j.toneMapping}function hn(O,j,st,tt,K){j.isScene!==!0&&(j=_e),ue.resetTextureUnits();const Dt=j.fog,Pt=tt.isMeshStandardMaterial?j.environment:null,Yt=T===null?L.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zl,Gt=(tt.isMeshStandardMaterial?R:I).get(tt.envMap||Pt),re=tt.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,fe=!!st.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),te=!!st.morphAttributes.position,Te=!!st.morphAttributes.normal,Ze=!!st.morphAttributes.color;let je=Ns;tt.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(je=L.toneMapping);const He=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,en=He!==void 0?He.length:0,de=Bt.get(tt),dn=C.state.lights;if(ot===!0&&(At===!0||O!==W)){const ii=O===W&&tt.id===G;zt.setState(tt,O,ii)}let Ge=!1;tt.version===de.__version?(de.needsLights&&de.lightsStateVersion!==dn.state.version||de.outputColorSpace!==Yt||K.isBatchedMesh&&de.batching===!1||!K.isBatchedMesh&&de.batching===!0||K.isBatchedMesh&&de.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&de.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&de.instancing===!1||!K.isInstancedMesh&&de.instancing===!0||K.isSkinnedMesh&&de.skinning===!1||!K.isSkinnedMesh&&de.skinning===!0||K.isInstancedMesh&&de.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&de.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&de.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&de.instancingMorph===!1&&K.morphTexture!==null||de.envMap!==Gt||tt.fog===!0&&de.fog!==Dt||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==zt.numPlanes||de.numIntersection!==zt.numIntersection)||de.vertexAlphas!==re||de.vertexTangents!==fe||de.morphTargets!==te||de.morphNormals!==Te||de.morphColors!==Ze||de.toneMapping!==je||de.morphTargetsCount!==en)&&(Ge=!0):(Ge=!0,de.__version=tt.version);let ei=de.currentProgram;Ge===!0&&(ei=ve(tt,j,K));let Zr=!1,xn=!1,or=!1;const vn=ei.getUniforms(),ni=de.uniforms;if(Xt.useProgram(ei.program)&&(Zr=!0,xn=!0,or=!0),tt.id!==G&&(G=tt.id,xn=!0),Zr||W!==O){Xt.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),vn.setValue(X,"projectionMatrix",O.projectionMatrix),vn.setValue(X,"viewMatrix",O.matrixWorldInverse);const ci=vn.map.cameraPosition;ci!==void 0&&ci.setValue(X,Ft.setFromMatrixPosition(O.matrixWorld)),ge.logarithmicDepthBuffer&&vn.setValue(X,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&vn.setValue(X,"isOrthographic",O.isOrthographicCamera===!0),W!==O&&(W=O,xn=!0,or=!0)}if(K.isSkinnedMesh){vn.setOptional(X,K,"bindMatrix"),vn.setOptional(X,K,"bindMatrixInverse");const ii=K.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),vn.setValue(X,"boneTexture",ii.boneTexture,ue))}K.isBatchedMesh&&(vn.setOptional(X,K,"batchingTexture"),vn.setValue(X,"batchingTexture",K._matricesTexture,ue),vn.setOptional(X,K,"batchingIdTexture"),vn.setValue(X,"batchingIdTexture",K._indirectTexture,ue),vn.setOptional(X,K,"batchingColorTexture"),K._colorsTexture!==null&&vn.setValue(X,"batchingColorTexture",K._colorsTexture,ue));const qn=st.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&$t.update(K,st,ei),(xn||de.receiveShadow!==K.receiveShadow)&&(de.receiveShadow=K.receiveShadow,vn.setValue(X,"receiveShadow",K.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(ni.envMap.value=Gt,ni.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&j.environment!==null&&(ni.envMapIntensity.value=j.environmentIntensity),ni.dfgLUT!==void 0&&(ni.dfgLUT.value=yD()),xn&&(vn.setValue(X,"toneMappingExposure",L.toneMappingExposure),de.needsLights&&ui(ni,or),Dt&&tt.fog===!0&&jt.refreshFogUniforms(ni,Dt),jt.refreshMaterialUniforms(ni,tt,F,ft,C.state.transmissionRenderTarget[O.id]),Ih.upload(X,Oe(de),ni,ue)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Ih.upload(X,Oe(de),ni,ue),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&vn.setValue(X,"center",K.center),vn.setValue(X,"modelViewMatrix",K.modelViewMatrix),vn.setValue(X,"normalMatrix",K.normalMatrix),vn.setValue(X,"modelMatrix",K.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const ii=tt.uniformsGroups;for(let ci=0,Wa=ii.length;ci<Wa;ci++){const lr=ii[ci];Lt.update(lr,ei),Lt.bind(lr,ei)}}return ei}function ui(O,j){O.ambientLightColor.needsUpdate=j,O.lightProbe.needsUpdate=j,O.directionalLights.needsUpdate=j,O.directionalLightShadows.needsUpdate=j,O.pointLights.needsUpdate=j,O.pointLightShadows.needsUpdate=j,O.spotLights.needsUpdate=j,O.spotLightShadows.needsUpdate=j,O.rectAreaLights.needsUpdate=j,O.hemisphereLights.needsUpdate=j}function Ti(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(O,j,st){const tt=Bt.get(O);tt.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Bt.get(O.texture).__webglTexture=j,Bt.get(O.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:st,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,j){const st=Bt.get(O);st.__webglFramebuffer=j,st.__useDefaultFramebuffer=j===void 0};const yn=X.createFramebuffer();this.setRenderTarget=function(O,j=0,st=0){T=O,V=j,A=st;let tt=!0,K=null,Dt=!1,Pt=!1;if(O){const Gt=Bt.get(O);if(Gt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(X.FRAMEBUFFER,null),tt=!1;else if(Gt.__webglFramebuffer===void 0)ue.setupRenderTarget(O);else if(Gt.__hasExternalTextures)ue.rebindTextures(O,Bt.get(O.texture).__webglTexture,Bt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const te=O.depthTexture;if(Gt.__boundDepthTexture!==te){if(te!==null&&Bt.has(te)&&(O.width!==te.image.width||O.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(O)}}const re=O.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Pt=!0);const fe=Bt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(fe[j])?K=fe[j][st]:K=fe[j],Dt=!0):O.samples>0&&ue.useMultisampledRTT(O)===!1?K=Bt.get(O).__webglMultisampledFramebuffer:Array.isArray(fe)?K=fe[st]:K=fe,it.copy(O.viewport),at.copy(O.scissor),J=O.scissorTest}else it.copy(xt).multiplyScalar(F).floor(),at.copy(St).multiplyScalar(F).floor(),J=wt;if(st!==0&&(K=yn),Xt.bindFramebuffer(X.FRAMEBUFFER,K)&&tt&&Xt.drawBuffers(O,K),Xt.viewport(it),Xt.scissor(at),Xt.setScissorTest(J),Dt){const Gt=Bt.get(O.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+j,Gt.__webglTexture,st)}else if(Pt){const Gt=j;for(let re=0;re<O.textures.length;re++){const fe=Bt.get(O.textures[re]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+re,fe.__webglTexture,st,Gt)}}else if(O!==null&&st!==0){const Gt=Bt.get(O.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Gt.__webglTexture,st)}G=-1},this.readRenderTargetPixels=function(O,j,st,tt,K,Dt,Pt,Yt=0){if(!(O&&O.isWebGLRenderTarget)){zn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Bt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0&&(Gt=Gt[Pt]),Gt){Xt.bindFramebuffer(X.FRAMEBUFFER,Gt);try{const re=O.textures[Yt],fe=re.format,te=re.type;if(!ge.textureFormatReadable(fe)){zn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(te)){zn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=O.width-tt&&st>=0&&st<=O.height-K&&(O.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Yt),X.readPixels(j,st,tt,K,oe.convert(fe),oe.convert(te),Dt))}finally{const re=T!==null?Bt.get(T).__webglFramebuffer:null;Xt.bindFramebuffer(X.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(O,j,st,tt,K,Dt,Pt,Yt=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Bt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Pt!==void 0&&(Gt=Gt[Pt]),Gt)if(j>=0&&j<=O.width-tt&&st>=0&&st<=O.height-K){Xt.bindFramebuffer(X.FRAMEBUFFER,Gt);const re=O.textures[Yt],fe=re.format,te=re.type;if(!ge.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Te),X.bufferData(X.PIXEL_PACK_BUFFER,Dt.byteLength,X.STREAM_READ),O.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Yt),X.readPixels(j,st,tt,K,oe.convert(fe),oe.convert(te),0);const Ze=T!==null?Bt.get(T).__webglFramebuffer:null;Xt.bindFramebuffer(X.FRAMEBUFFER,Ze);const je=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await t2(X,je,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Te),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Dt),X.deleteBuffer(Te),X.deleteSync(je),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,j=null,st=0){const tt=Math.pow(2,-st),K=Math.floor(O.image.width*tt),Dt=Math.floor(O.image.height*tt),Pt=j!==null?j.x:0,Yt=j!==null?j.y:0;ue.setTexture2D(O,0),X.copyTexSubImage2D(X.TEXTURE_2D,st,0,0,Pt,Yt,K,Dt),Xt.unbindTexture()};const Rn=X.createFramebuffer(),bn=X.createFramebuffer();this.copyTextureToTexture=function(O,j,st=null,tt=null,K=0,Dt=null){Dt===null&&(K!==0?(wc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=K,K=0):Dt=0);let Pt,Yt,Gt,re,fe,te,Te,Ze,je;const He=O.isCompressedTexture?O.mipmaps[Dt]:O.image;if(st!==null)Pt=st.max.x-st.min.x,Yt=st.max.y-st.min.y,Gt=st.isBox3?st.max.z-st.min.z:1,re=st.min.x,fe=st.min.y,te=st.isBox3?st.min.z:0;else{const qn=Math.pow(2,-K);Pt=Math.floor(He.width*qn),Yt=Math.floor(He.height*qn),O.isDataArrayTexture?Gt=He.depth:O.isData3DTexture?Gt=Math.floor(He.depth*qn):Gt=1,re=0,fe=0,te=0}tt!==null?(Te=tt.x,Ze=tt.y,je=tt.z):(Te=0,Ze=0,je=0);const en=oe.convert(j.format),de=oe.convert(j.type);let dn;j.isData3DTexture?(ue.setTexture3D(j,0),dn=X.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ue.setTexture2DArray(j,0),dn=X.TEXTURE_2D_ARRAY):(ue.setTexture2D(j,0),dn=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,j.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,j.unpackAlignment);const Ge=X.getParameter(X.UNPACK_ROW_LENGTH),ei=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Zr=X.getParameter(X.UNPACK_SKIP_PIXELS),xn=X.getParameter(X.UNPACK_SKIP_ROWS),or=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,He.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,He.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,re),X.pixelStorei(X.UNPACK_SKIP_ROWS,fe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,te);const vn=O.isDataArrayTexture||O.isData3DTexture,ni=j.isDataArrayTexture||j.isData3DTexture;if(O.isDepthTexture){const qn=Bt.get(O),ii=Bt.get(j),ci=Bt.get(qn.__renderTarget),Wa=Bt.get(ii.__renderTarget);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,ci.__webglFramebuffer),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Wa.__webglFramebuffer);for(let lr=0;lr<Gt;lr++)vn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bt.get(O).__webglTexture,K,te+lr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bt.get(j).__webglTexture,Dt,je+lr)),X.blitFramebuffer(re,fe,Pt,Yt,Te,Ze,Pt,Yt,X.DEPTH_BUFFER_BIT,X.NEAREST);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(K!==0||O.isRenderTargetTexture||Bt.has(O)){const qn=Bt.get(O),ii=Bt.get(j);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,Rn),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,bn);for(let ci=0;ci<Gt;ci++)vn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qn.__webglTexture,K,te+ci):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qn.__webglTexture,K),ni?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ii.__webglTexture,Dt,je+ci):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ii.__webglTexture,Dt),K!==0?X.blitFramebuffer(re,fe,Pt,Yt,Te,Ze,Pt,Yt,X.COLOR_BUFFER_BIT,X.NEAREST):ni?X.copyTexSubImage3D(dn,Dt,Te,Ze,je+ci,re,fe,Pt,Yt):X.copyTexSubImage2D(dn,Dt,Te,Ze,re,fe,Pt,Yt);Xt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ni?O.isDataTexture||O.isData3DTexture?X.texSubImage3D(dn,Dt,Te,Ze,je,Pt,Yt,Gt,en,de,He.data):j.isCompressedArrayTexture?X.compressedTexSubImage3D(dn,Dt,Te,Ze,je,Pt,Yt,Gt,en,He.data):X.texSubImage3D(dn,Dt,Te,Ze,je,Pt,Yt,Gt,en,de,He):O.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Dt,Te,Ze,Pt,Yt,en,de,He.data):O.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Dt,Te,Ze,He.width,He.height,en,He.data):X.texSubImage2D(X.TEXTURE_2D,Dt,Te,Ze,Pt,Yt,en,de,He);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ge),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ei),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Zr),X.pixelStorei(X.UNPACK_SKIP_ROWS,xn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,or),Dt===0&&j.generateMipmaps&&X.generateMipmap(dn),Xt.unbindTexture()},this.initRenderTarget=function(O){Bt.get(O).__webglFramebuffer===void 0&&ue.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?ue.setTextureCube(O,0):O.isData3DTexture?ue.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?ue.setTexture2DArray(O,0):ue.setTexture2D(O,0),Xt.unbindTexture()},this.resetState=function(){V=0,A=0,T=null,Xt.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(t),n.unpackColorSpace=Je._getUnpackColorSpace()}}const MD=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ED=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,i1=8;function TD(o){let t=o.trim();t.startsWith("#")&&(t=t.slice(1));let n=255,a=255,r=255;return t.length===3?(n=parseInt(t[0]+t[0],16),a=parseInt(t[1]+t[1],16),r=parseInt(t[2]+t[2],16)):t.length===6&&(n=parseInt(t.slice(0,2),16),a=parseInt(t.slice(2,4),16),r=parseInt(t.slice(4,6),16)),new pt(n/255,a/255,r/255)}function AD({linesGradient:o,enabledWaves:t=["top","middle","bottom"],lineCount:n=[6],lineDistance:a=[5],topWavePosition:r,middleWavePosition:l,bottomWavePosition:c={x:2,y:-.7,rotate:-1},animationSpeed:f=1,interactive:p=!0,bendRadius:h=5,bendStrength:_=-.5,mouseDamping:g=.05,parallax:x=!0,parallaxStrength:v=.2,mixBlendMode:M="normal",paused:b=!1}){const y=Ye.useRef(null),S=Ye.useRef(new qe(-1e3,-1e3)),w=Ye.useRef(new qe(-1e3,-1e3)),C=Ye.useRef(0),U=Ye.useRef(0),P=Ye.useRef(new qe(0,0)),L=Ye.useRef(new qe(0,0)),D=Ye.useRef(b);Ye.useEffect(()=>{D.current=b},[b]);const V=z=>{if(typeof n=="number")return n;if(!t.includes(z))return 0;const k=t.indexOf(z);return n[k]??6},A=z=>{if(typeof a=="number")return a;if(!t.includes(z))return .1;const k=t.indexOf(z);return a[k]??.1},T=t.includes("top")?V("top"):0,G=t.includes("middle")?V("middle"):0,W=t.includes("bottom")?V("bottom"):0,it=t.includes("top")?A("top")*.01:.01,at=t.includes("middle")?A("middle")*.01:.01,J=t.includes("bottom")?A("bottom")*.01:.01;return Ye.useEffect(()=>{if(!y.current)return;const z=new R2,k=new db(-1,1,1,-1,0,1);k.position.z=1;const q=new bD({antialias:!0,alpha:!1});q.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),q.domElement.style.width="100%",q.domElement.style.height="100%",y.current.appendChild(q.domElement);const ft={iTime:{value:0},iResolution:{value:new pt(1,1,1)},animationSpeed:{value:f},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:T},middleLineCount:{value:G},bottomLineCount:{value:W},topLineDistance:{value:it},middleLineDistance:{value:at},bottomLineDistance:{value:J},topWavePosition:{value:new pt(r?.x??10,r?.y??.5,r?.rotate??-.4)},middleWavePosition:{value:new pt(l?.x??5,l?.y??0,l?.rotate??.2)},bottomWavePosition:{value:new pt(c?.x??2,c?.y??-.7,c?.rotate??.4)},iMouse:{value:new qe(-1e3,-1e3)},interactive:{value:p},bendRadius:{value:h},bendStrength:{value:_},bendInfluence:{value:0},parallax:{value:x},parallaxStrength:{value:v},parallaxOffset:{value:new qe(0,0)},lineGradient:{value:Array.from({length:i1},()=>new pt(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const Ft=o.slice(0,i1);ft.lineGradientCount.value=Ft.length,Ft.forEach((qt,_e)=>{const Ot=TD(qt);ft.lineGradient.value[_e].set(Ot.x,Ot.y,Ot.z)})}const F=new rr({uniforms:ft,vertexShader:MD,fragmentShader:ED}),B=new kc(2,2),rt=new Wr(B,F);z.add(rt);const xt=new P2,St=()=>{const Ft=y.current,qt=Ft.clientWidth||1,_e=Ft.clientHeight||1;q.setSize(qt,_e,!1);const Ot=q.domElement.width,ee=q.domElement.height;ft.iResolution.value.set(Ot,ee,1)};St();const wt=typeof ResizeObserver<"u"?new ResizeObserver(St):null;wt&&y.current&&wt.observe(y.current);const et=Ft=>{const qt=q.domElement.getBoundingClientRect(),_e=Ft.clientX-qt.left,Ot=Ft.clientY-qt.top,ee=q.getPixelRatio();if(S.current.set(_e*ee,(qt.height-Ot)*ee),C.current=1,x){const X=qt.width/2,se=qt.height/2,nt=(_e-X)/qt.width,ge=-(Ot-se)/qt.height;P.current.set(nt*v,ge*v)}},ot=()=>{C.current=0};p&&(window.addEventListener("pointermove",et),window.addEventListener("pointerleave",ot));let At=0;const Nt=()=>{D.current||(ft.iTime.value=xt.getElapsedTime(),p&&(w.current.lerp(S.current,g),ft.iMouse.value.copy(w.current),U.current+=(C.current-U.current)*g,ft.bendInfluence.value=U.current),x&&(L.current.lerp(P.current,g),ft.parallaxOffset.value.copy(L.current)),q.render(z,k)),At=requestAnimationFrame(Nt)};return Nt(),()=>{cancelAnimationFrame(At),wt&&y.current&&wt.disconnect(),p&&(window.removeEventListener("pointermove",et),window.removeEventListener("pointerleave",ot)),B.dispose(),F.dispose(),q.dispose(),q.domElement.parentElement&&q.domElement.parentElement.removeChild(q.domElement)}},[o,t,n,a,r,l,c,f,p,h,_,g,x,v]),we.jsx("div",{ref:y,className:"floating-lines-container",style:{mixBlendMode:M}})}const a1=({text:o="Compressa",fontFamily:t="Compressa VF",fontUrl:n="https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2",width:a=!0,weight:r=!0,italic:l=!0,alpha:c=!1,flex:f=!0,stroke:p=!1,scale:h=!1,textColor:_="#FFFFFF",strokeColor:g="#FF0000",className:x="",minFontSize:v=24,active:M=!0})=>{const b=Ye.useRef(null),y=Ye.useRef(null),S=Ye.useRef([]),w=Ye.useRef({x:0,y:0}),C=Ye.useRef({x:0,y:0}),[U,P]=Ye.useState(v),[L,D]=Ye.useState(1),[V,A]=Ye.useState(1),T=o.split(""),G=(at,J)=>{const z=J.x-at.x,k=J.y-at.y;return Math.sqrt(z*z+k*k)};Ye.useEffect(()=>{if(!M)return;const at=z=>{C.current.x=z.clientX,C.current.y=z.clientY},J=z=>{const k=z.touches[0];C.current.x=k.clientX,C.current.y=k.clientY};if(window.addEventListener("mousemove",at),window.addEventListener("touchmove",J,{passive:!1}),b.current){const{left:z,top:k,width:q,height:ft}=b.current.getBoundingClientRect();w.current.x=z+q/2,w.current.y=k+ft/2,C.current.x=w.current.x,C.current.y=w.current.y}return()=>{window.removeEventListener("mousemove",at),window.removeEventListener("touchmove",J)}},[M]);const W=()=>{if(!b.current||!y.current)return;const{width:at,height:J}=b.current.getBoundingClientRect();let z=at/(T.length/2);z=Math.max(z,v),P(z),D(1),A(1),requestAnimationFrame(()=>{if(!y.current)return;const k=y.current.getBoundingClientRect();if(h&&k.height>0){const q=J/k.height;D(q),A(q)}})};Ye.useEffect(()=>{let at;const J=()=>{clearTimeout(at),at=setTimeout(W,150)};return W(),window.addEventListener("resize",J),()=>{window.removeEventListener("resize",J),clearTimeout(at)}},[h,o]),Ye.useEffect(()=>{if(!M)return;let at,J=0;const k=1e3/30,q=ft=>{at=requestAnimationFrame(q);const F=ft-J;if(!(F<k)&&(J=ft-F%k,w.current.x+=(C.current.x-w.current.x)/15,w.current.y+=(C.current.y-w.current.y)/15,y.current)){const rt=y.current.getBoundingClientRect().width/2;S.current.forEach(xt=>{if(!xt)return;const St=xt.getBoundingClientRect(),wt={x:St.x+St.width/2,y:St.y+St.height/2},et=G(w.current,wt),ot=(_e,Ot,ee)=>{const X=ee-Math.abs(ee*_e/rt);return Math.max(Ot,X+Ot)},At=a?Math.floor(ot(et,5,200)):100,Nt=r?Math.floor(ot(et,100,900)):400,Ft=l?ot(et,0,1).toFixed(2):0,qt=c?ot(et,0,1).toFixed(2):1;xt.style.opacity=qt,xt.style.fontVariationSettings=`'wght' ${Nt}, 'wdth' ${At}, 'ital' ${Ft}`})}};return at=requestAnimationFrame(q),()=>cancelAnimationFrame(at)},[a,r,l,c,T.length,M]);const it=[x,f?"flex":"",p?"stroke":""].filter(Boolean).join(" ");return we.jsxs("div",{ref:b,style:{position:"relative",width:"100%",height:"100%",background:"transparent"},children:[we.jsx("style",{children:`
        @font-face {
          font-family: '${t}';
          src: url('${n}');
          font-style: normal;
        }

        .flex {
          display: flex;
          justify-content: space-between;
        }

        .stroke span {
          position: relative;
          color: ${_};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${g};
        }

        .text-pressure-title {
          color: ${_};
        }
      `}),we.jsx("h1",{ref:y,className:`text-pressure-title ${it}`,style:{fontFamily:t,textTransform:"uppercase",fontSize:U,lineHeight:V,transform:`scale(1, ${L})`,transformOrigin:"center top",margin:0,textAlign:"center",userSelect:"none",whiteSpace:"nowrap",fontWeight:100,width:"100%"},children:T.map((at,J)=>we.jsx("span",{ref:z=>S.current[J]=z,"data-char":at,style:{display:"inline-block",color:p?void 0:_,willChange:"opacity, font-variation-settings"},children:at},J))})]})};function Nr(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function vb(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var pa={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Kl={duration:.5,overwrite:!1,delay:0},X_,_i,An,Ua=1e8,_n=1/Ua,l_=Math.PI*2,RD=l_/4,CD=0,Sb=Math.sqrt,wD=Math.cos,DD=Math.sin,li=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},Yr=function(t){return typeof t=="number"},W_=function(t){return typeof t>"u"},sr=function(t){return typeof t=="object"},Wi=function(t){return t!==!1},Y_=function(){return typeof window<"u"},bh=function(t){return Ln(t)||li(t)},yb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ei=Array.isArray,u_=/(?:-?\.?\d|\.)+/gi,bb=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ol=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,am=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Mb=/[+-]=-?[.\d]+/,Eb=/[^,'"\[\]\s]+/gi,UD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Cn,Ka,c_,q_,ma={},Jh={},Tb,Ab=function(t){return(Jh=Ql(t,ma))&&ji},Z_=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Dc=function(t,n){return!n&&console.warn(t)},Rb=function(t,n){return t&&(ma[t]=n)&&Jh&&(Jh[t]=n)||ma},Uc=function(){return 0},LD={suppressEvents:!0,isStart:!0,kill:!1},Hh={suppressEvents:!0,kill:!1},ND={suppressEvents:!0},j_={},Os=[],f_={},Cb,oa={},rm={},r1=30,Gh=[],K_="",Q_=function(t){var n=t[0],a,r;if(sr(n)||Ln(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(r=Gh.length;r--&&!Gh[r].targetTest(n););a=Gh[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Jb(t[r],a)))||t.splice(r,1);return t},Eo=function(t){return t._gsap||Q_(La(t))[0]._gsap},wb=function(t,n,a){return(a=t[n])&&Ln(a)?t[n]():W_(a)&&t.getAttribute&&t.getAttribute(n)||a},Yi=function(t,n){return(t=t.split(",")).forEach(n)||t},Pn=function(t){return Math.round(t*1e5)/1e5||0},Yn=function(t){return Math.round(t*1e7)/1e7||0},Il=function(t,n){var a=n.charAt(0),r=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+r:a==="-"?t-r:a==="*"?t*r:t/r},OD=function(t,n){for(var a=n.length,r=0;t.indexOf(n[r])<0&&++r<a;);return r<a},$h=function(){var t=Os.length,n=Os.slice(0),a,r;for(f_={},Os.length=0,a=0;a<t;a++)r=n[a],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},J_=function(t){return!!(t._initted||t._startAt||t.add)},Db=function(t,n,a,r){Os.length&&!_i&&$h(),t.render(n,a,!!(_i&&n<0&&J_(t))),Os.length&&!_i&&$h()},Ub=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(Eb).length<2?n:li(t)?t.trim():t},Lb=function(t){return t},_a=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},PD=function(t){return function(n,a){for(var r in a)r in n||r==="duration"&&t||r==="ease"||(n[r]=a[r])}},Ql=function(t,n){for(var a in n)t[a]=n[a];return t},s1=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=sr(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},td=function(t,n){var a={},r;for(r in t)r in n||(a[r]=t[r]);return a},hc=function(t){var n=t.parent||Cn,a=t.keyframes?PD(Ei(t.keyframes)):_a;if(Wi(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},zD=function(t,n){for(var a=t.length,r=a===n.length;r&&a--&&t[a]===n[a];);return a<0},Nb=function(t,n,a,r,l){var c=t[r],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[r]=n,n._prev=c,n.parent=n._dp=t,n},pd=function(t,n,a,r){a===void 0&&(a="_first"),r===void 0&&(r="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[r]===n&&(t[r]=l),n._next=n._prev=n.parent=null},Bs=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},To=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},FD=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},h_=function(t,n,a,r){return t._startAt&&(_i?t._startAt.revert(Hh):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,r))},BD=function o(t){return!t||t._ts&&o(t.parent)},o1=function(t){return t._repeat?Jl(t._tTime,t=t.duration()+t._rDelay)*t:0},Jl=function(t,n){var a=Math.floor(t=Yn(t/n));return t&&a===t?a-1:a},ed=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},md=function(t){return t._end=Yn(t._start+(t._tDur/Math.abs(t._ts||t._rts||_n)||0))},_d=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=Yn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),md(t),a._dirty||To(a,t)),t},Ob=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=ed(t.rawTime(),n),(!n._dur||Xc(0,n.totalDuration(),a)-n._tTime>_n)&&n.render(a,!0)),To(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-_n}},$a=function(t,n,a,r){return n.parent&&Bs(n),n._start=Yn((Yr(a)?a:a||t!==Cn?Aa(t,a,n):t._time)+n._delay),n._end=Yn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Nb(t,n,"_first","_last",t._sort?"_start":0),d_(n)||(t._recent=n),r||Ob(t,n),t._ts<0&&_d(t,t._tTime),t},Pb=function(t,n){return(ma.ScrollTrigger||Z_("scrollTrigger",n))&&ma.ScrollTrigger.create(n,t)},zb=function(t,n,a,r,l){if(tg(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!_i&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Cb!==ua.frame)return Os.push(t),t._lazy=[l,r],1},ID=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},d_=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},HD=function(t,n,a,r){var l=t.ratio,c=n<0||!n&&(!t._start&&ID(t)&&!(!t._initted&&d_(t))||(t._ts<0||t._dp._ts<0)&&!d_(t))?0:1,f=t._rDelay,p=0,h,_,g;if(f&&t._repeat&&(p=Xc(0,t._tDur,n),_=Jl(p,f),t._yoyo&&_&1&&(c=1-c),_!==Jl(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||_i||r||t._zTime===_n||!n&&t._zTime){if(!t._initted&&zb(t,n,r,a,p))return;for(g=t._zTime,t._zTime=n||(a?_n:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,h=t._pt;h;)h.r(c,h.d),h=h._next;n<0&&h_(t,n,a,!0),t._onUpdate&&!a&&fa(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&fa(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Bs(t,1),!a&&!_i&&(fa(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},GD=function(t,n,a){var r;if(a>n)for(r=t._first;r&&r._start<=a;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=t._last;r&&r._start>=a;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},$l=function(t,n,a,r){var l=t._repeat,c=Yn(n)||0,f=t._tTime/t._tDur;return f&&!r&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Yn(c*(l+1)+t._rDelay*l):c,f>0&&!r&&_d(t,t._tTime=t._tDur*f),t.parent&&md(t),a||To(t.parent,t),t},l1=function(t){return t instanceof Ni?To(t):$l(t,t._dur)},VD={_start:0,endTime:Uc,totalDuration:Uc},Aa=function o(t,n,a){var r=t.labels,l=t._recent||VD,c=t.duration()>=Ua?l.endTime(!1):t._dur,f,p,h;return li(n)&&(isNaN(n)||n in r)?(p=n.charAt(0),h=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(h?(f<0?l:a).totalDuration()/100:1)):f<0?(n in r||(r[n]=c),r[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),h&&a&&(p=p/100*(Ei(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},dc=function(t,n,a){var r=Yr(n[1]),l=(r?2:1)+(t<2?0:1),c=n[l],f,p;if(r&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=Wi(p.vars.inherit)&&p.parent;c.immediateRender=Wi(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new Wn(n[0],c,n[l+1])},Vs=function(t,n){return t||t===0?n(t):n},Xc=function(t,n,a){return a<t?t:a>n?n:a},bi=function(t,n){return!li(t)||!(n=UD.exec(t))?"":n[1]},kD=function(t,n,a){return Vs(a,function(r){return Xc(t,n,r)})},p_=[].slice,Fb=function(t,n){return t&&sr(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&sr(t[0]))&&!t.nodeType&&t!==Ka},XD=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(r){var l;return li(r)&&!n||Fb(r,1)?(l=a).push.apply(l,La(r)):a.push(r)})||a},La=function(t,n,a){return An&&!n&&An.selector?An.selector(t):li(t)&&!a&&(c_||!tu())?p_.call((n||q_).querySelectorAll(t),0):Ei(t)?XD(t,a):Fb(t)?p_.call(t,0):t?[t]:[]},m_=function(t){return t=La(t)[0]||Dc("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return La(n,a.querySelectorAll?a:a===t?Dc("Invalid scope")||q_.createElement("div"):t)}},Bb=function(t){return t.sort(function(){return .5-Math.random()})},Ib=function(t){if(Ln(t))return t;var n=sr(t)?t:{each:t},a=Ao(n.ease),r=n.from||0,l=parseFloat(n.base)||0,c={},f=r>0&&r<1,p=isNaN(r)||f,h=n.axis,_=r,g=r;return li(r)?_=g={center:.5,edges:.5,end:1}[r]||0:!f&&p&&(_=r[0],g=r[1]),function(x,v,M){var b=(M||n).length,y=c[b],S,w,C,U,P,L,D,V,A;if(!y){if(A=n.grid==="auto"?0:(n.grid||[1,Ua])[1],!A){for(D=-Ua;D<(D=M[A++].getBoundingClientRect().left)&&A<b;);A<b&&A--}for(y=c[b]=[],S=p?Math.min(A,b)*_-.5:r%A,w=A===Ua?0:p?b*g/A-.5:r/A|0,D=0,V=Ua,L=0;L<b;L++)C=L%A-S,U=w-(L/A|0),y[L]=P=h?Math.abs(h==="y"?U:C):Sb(C*C+U*U),P>D&&(D=P),P<V&&(V=P);r==="random"&&Bb(y),y.max=D-V,y.min=V,y.v=b=(parseFloat(n.amount)||parseFloat(n.each)*(A>b?b-1:h?h==="y"?b/A:A:Math.max(A,b/A))||0)*(r==="edges"?-1:1),y.b=b<0?l-b:l,y.u=bi(n.amount||n.each)||0,a=a&&b<0?jb(a):a}return b=(y[x]-y.min)/y.max||0,Yn(y.b+(a?a(b):b)*y.v)+y.u}},__=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var r=Yn(Math.round(parseFloat(a)/t)*t*n);return(r-r%1)/n+(Yr(a)?0:bi(a))}},Hb=function(t,n){var a=Ei(t),r,l;return!a&&sr(t)&&(r=a=t.radius||Ua,t.values?(t=La(t.values),(l=!Yr(t[0]))&&(r*=r)):t=__(t.increment)),Vs(n,a?Ln(t)?function(c){return l=t(c),Math.abs(l-c)<=r?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),h=Ua,_=0,g=t.length,x,v;g--;)l?(x=t[g].x-f,v=t[g].y-p,x=x*x+v*v):x=Math.abs(t[g]-f),x<h&&(h=x,_=g);return _=!r||h<=r?t[_]:c,l||_===c||Yr(c)?_:_+bi(c)}:__(t))},Gb=function(t,n,a,r){return Vs(Ei(t)?!n:a===!0?!!(a=0):!r,function(){return Ei(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(r=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*r)/r})},WD=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(r){return n.reduce(function(l,c){return c(l)},r)}},YD=function(t,n){return function(a){return t(parseFloat(a))+(n||bi(a))}},qD=function(t,n,a){return kb(t,n,0,1,a)},Vb=function(t,n,a){return Vs(a,function(r){return t[~~n(r)]})},ZD=function o(t,n,a){var r=n-t;return Ei(t)?Vb(t,o(0,t.length),n):Vs(a,function(l){return(r+(l-t)%r)%r+t})},jD=function o(t,n,a){var r=n-t,l=r*2;return Ei(t)?Vb(t,o(0,t.length-1),n):Vs(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>r?l-c:c)})},Lc=function(t){for(var n=0,a="",r,l,c,f;~(r=t.indexOf("random(",n));)c=t.indexOf(")",r),f=t.charAt(r+7)==="[",l=t.substr(r+7,c-r-7).match(f?Eb:u_),a+=t.substr(n,r-n)+Gb(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),n=c+1;return a+t.substr(n,t.length-n)},kb=function(t,n,a,r,l){var c=n-t,f=r-a;return Vs(l,function(p){return a+((p-t)/c*f||0)})},KD=function o(t,n,a,r){var l=isNaN(t+n)?0:function(v){return(1-v)*t+v*n};if(!l){var c=li(t),f={},p,h,_,g,x;if(a===!0&&(r=1)&&(a=null),c)t={p:t},n={p:n};else if(Ei(t)&&!Ei(n)){for(_=[],g=t.length,x=g-2,h=1;h<g;h++)_.push(o(t[h-1],t[h]));g--,l=function(M){M*=g;var b=Math.min(x,~~M);return _[b](M-b)},a=n}else r||(t=Ql(Ei(t)?[]:{},t));if(!_){for(p in n)$_.call(f,t,p,"get",n[p]);l=function(M){return ig(M,f)||(c?t.p:t)}}}return Vs(a,l)},u1=function(t,n,a){var r=t.labels,l=Ua,c,f,p;for(c in r)f=r[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},fa=function(t,n,a){var r=t.vars,l=r[n],c=An,f=t._ctx,p,h,_;if(l)return p=r[n+"Params"],h=r.callbackScope||t,a&&Os.length&&$h(),f&&(An=f),_=p?l.apply(h,p):l.call(h),An=c,_},rc=function(t){return Bs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_i),t.progress()<1&&fa(t,"onInterrupt"),t},Pl,Xb=[],Wb=function(t){if(t)if(t=!t.name&&t.default||t,Y_()||t.headless){var n=t.name,a=Ln(t),r=n&&!a&&t.init?function(){this._props=[]}:t,l={init:Uc,render:ig,add:$_,kill:hU,modifier:fU,rawVars:0},c={targetTest:0,get:0,getSetter:ng,aliases:{},register:0};if(tu(),t!==r){if(oa[n])return;_a(r,_a(td(t,l),c)),Ql(r.prototype,Ql(l,td(t,c))),oa[r.prop=n]=r,t.targetTest&&(Gh.push(r),j_[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Rb(n,r),t.register&&t.register(ji,r,qi)}else Xb.push(t)},mn=255,sc={aqua:[0,mn,mn],lime:[0,mn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mn],navy:[0,0,128],white:[mn,mn,mn],olive:[128,128,0],yellow:[mn,mn,0],orange:[mn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mn,0,0],pink:[mn,192,203],cyan:[0,mn,mn],transparent:[mn,mn,mn,0]},sm=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*mn+.5|0},Yb=function(t,n,a){var r=t?Yr(t)?[t>>16,t>>8&mn,t&mn]:0:sc.black,l,c,f,p,h,_,g,x,v,M;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),sc[t])r=sc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&mn,r&mn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&mn,t&mn]}else if(t.substr(0,3)==="hsl"){if(r=M=t.match(u_),!n)p=+r[0]%360/360,h=+r[1]/100,_=+r[2]/100,c=_<=.5?_*(h+1):_+h-_*h,l=_*2-c,r.length>3&&(r[3]*=1),r[0]=sm(p+1/3,l,c),r[1]=sm(p,l,c),r[2]=sm(p-1/3,l,c);else if(~t.indexOf("="))return r=t.match(bb),a&&r.length<4&&(r[3]=1),r}else r=t.match(u_)||sc.transparent;r=r.map(Number)}return n&&!M&&(l=r[0]/mn,c=r[1]/mn,f=r[2]/mn,g=Math.max(l,c,f),x=Math.min(l,c,f),_=(g+x)/2,g===x?p=h=0:(v=g-x,h=_>.5?v/(2-g-x):v/(g+x),p=g===l?(c-f)/v+(c<f?6:0):g===c?(f-l)/v+2:(l-c)/v+4,p*=60),r[0]=~~(p+.5),r[1]=~~(h*100+.5),r[2]=~~(_*100+.5)),a&&r.length<4&&(r[3]=1),r},qb=function(t){var n=[],a=[],r=-1;return t.split(Ps).forEach(function(l){var c=l.match(Ol)||[];n.push.apply(n,c),a.push(r+=c.length+1)}),n.c=a,n},c1=function(t,n,a){var r="",l=(t+r).match(Ps),c=n?"hsla(":"rgba(",f=0,p,h,_,g;if(!l)return t;if(l=l.map(function(x){return(x=Yb(x,n,1))&&c+(n?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),a&&(_=qb(t),p=a.c,p.join(r)!==_.c.join(r)))for(h=t.replace(Ps,"1").split(Ol),g=h.length-1;f<g;f++)r+=h[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!h)for(h=t.split(Ps),g=h.length-1;f<g;f++)r+=h[f]+l[f];return r+h[g]},Ps=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in sc)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),QD=/hsl[a]?\(/,Zb=function(t){var n=t.join(" "),a;if(Ps.lastIndex=0,Ps.test(n))return a=QD.test(n),t[1]=c1(t[1],a),t[0]=c1(t[0],a,qb(t[1])),!0},Nc,ua=(function(){var o=Date.now,t=500,n=33,a=o(),r=a,l=1e3/240,c=l,f=[],p,h,_,g,x,v,M=function b(y){var S=o()-r,w=y===!0,C,U,P,L;if((S>t||S<0)&&(a+=S-n),r+=S,P=r-a,C=P-c,(C>0||w)&&(L=++g.frame,x=P-g.time*1e3,g.time=P=P/1e3,c+=C+(C>=l?4:l-C),U=1),w||(p=h(b)),U)for(v=0;v<f.length;v++)f[v](P,x,L,y)};return g={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(y){return x/(1e3/(y||60))},wake:function(){Tb&&(!c_&&Y_()&&(Ka=c_=window,q_=Ka.document||{},ma.gsap=ji,(Ka.gsapVersions||(Ka.gsapVersions=[])).push(ji.version),Ab(Jh||Ka.GreenSockGlobals||!Ka.gsap&&Ka||{}),Xb.forEach(Wb)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),h=_||function(y){return setTimeout(y,c-g.time*1e3+1|0)},Nc=1,M(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Nc=0,h=Uc},lagSmoothing:function(y,S){t=y||1/0,n=Math.min(S||33,t)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,S,w){var C=S?function(U,P,L,D){y(U,P,L,D),g.remove(C)}:y;return g.remove(y),f[w?"unshift":"push"](C),tu(),C},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&v>=S&&v--},_listeners:f},g})(),tu=function(){return!Nc&&ua.wake()},Xe={},JD=/^[\d.\-M][\d.\-,\s]/,$D=/["']/g,tU=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),r=a[0],l=1,c=a.length,f,p,h;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,h=p.substr(0,f),n[r]=isNaN(h)?h.replace($D,"").trim():+h,r=p.substr(f+1).trim();return n},eU=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),r=t.indexOf("(",n);return t.substring(n,~r&&r<a?t.indexOf(")",a+1):a)},nU=function(t){var n=(t+"").split("("),a=Xe[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[tU(n[1])]:eU(t).split(",").map(Ub)):Xe._CE&&JD.test(t)?Xe._CE("",t):a},jb=function(t){return function(n){return 1-t(1-n)}},Kb=function o(t,n){for(var a=t._first,r;a;)a instanceof Ni?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(r=a._ease,a._ease=a._yEase,a._yEase=r,a._yoyo=n)),a=a._next},Ao=function(t,n){return t&&(Ln(t)?t:Xe[t]||nU(t))||n},Fo=function(t,n,a,r){a===void 0&&(a=function(p){return 1-n(1-p)}),r===void 0&&(r=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:r},c;return Yi(t,function(f){Xe[f]=ma[f]=l,Xe[c=f.toLowerCase()]=a;for(var p in l)Xe[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Xe[f+"."+p]=l[p]}),l},Qb=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},om=function o(t,n,a){var r=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/l_*(Math.asin(1/r)||0),f=function(_){return _===1?1:r*Math.pow(2,-10*_)*DD((_-c)*l)+1},p=t==="out"?f:t==="in"?function(h){return 1-f(1-h)}:Qb(f);return l=l_/l,p.config=function(h,_){return o(t,h,_)},p},lm=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},r=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Qb(a);return r.config=function(l){return o(t,l)},r};Yi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Fo(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Fo("Elastic",om("in"),om("out"),om());(function(o,t){var n=1/t,a=2*n,r=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<r?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Fo("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);Fo("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Fo("Circ",function(o){return-(Sb(1-o*o)-1)});Fo("Sine",function(o){return o===1?1:-wD(o*RD)+1});Fo("Back",lm("in"),lm("out"),lm());Xe.SteppedEase=Xe.steps=ma.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,r=t+(n?0:1),l=n?1:0,c=1-_n;return function(f){return((r*Xc(0,c,f)|0)+l)*a}}};Kl.ease=Xe["quad.out"];Yi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return K_+=o+","+o+"Params,"});var Jb=function(t,n){this.id=CD++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:wb,this.set=n?n.getSetter:ng},Oc=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,$l(this,+n.duration,1,1),this.data=n.data,An&&(this._ctx=An,An.data.push(this)),Nc||ua.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,$l(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,r){if(tu(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(_d(this,a),!l._dp||l.parent||Ob(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&$a(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===_n||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Db(this,a,r)),this},t.time=function(a,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+o1(this))%(this._dur+this._rDelay)||(a?this._dur:0),r):this._time},t.totalProgress=function(a,r){return arguments.length?this.totalTime(this.totalDuration()*a,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+o1(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,r){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,r):this._repeat?Jl(this._tTime,l)+1:1},t.timeScale=function(a,r){if(!arguments.length)return this._rts===-_n?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?ed(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-_n?0:this._rts,this.totalTime(Xc(-Math.abs(this._delay),this.totalDuration(),l),r!==!1),md(this),FD(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(tu(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_n&&(this._tTime-=_n)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=a;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$a(r,this,a-this._delay),this}return this._start},t.endTime=function(a){return this._start+(Wi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var r=this.parent||this._dp;return r?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ed(r.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=ND);var r=_i;return _i=a,J_(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),_i=r,this},t.globalTime=function(a){for(var r=this,l=arguments.length?a:r.rawTime();r;)l=r._start+l/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,l1(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var r=this._time;return this._rDelay=a,l1(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,r){return this.totalTime(Aa(this,a),Wi(r))},t.restart=function(a,r){return this.play().totalTime(a?-this._delay:0,Wi(r)),this._dur||(this._zTime=-_n),this},t.play=function(a,r){return a!=null&&this.seek(a,r),this.reversed(!1).paused(!1)},t.reverse=function(a,r){return a!=null&&this.seek(a||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(a,r){return a!=null&&this.seek(a,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-_n:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_n,this},t.isActive=function(){var a=this.parent||this._dp,r=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=r&&l<this.endTime(!0)-_n)},t.eventCallback=function(a,r,l){var c=this.vars;return arguments.length>1?(r?(c[a]=r,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=r)):delete c[a],this):c[a]},t.then=function(a){var r=this;return new Promise(function(l){var c=Ln(a)?a:Lb,f=function(){var h=r.then;r.then=null,Ln(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=h),l(c),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},t.kill=function(){rc(this)},o})();_a(Oc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_n,_prom:0,_ps:!1,_rts:1});var Ni=(function(o){vb(t,o);function t(a,r){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=Wi(a.sortChildren),Cn&&$a(a.parent||Cn,Nr(l),r),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&Pb(Nr(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(r,l,c){return dc(0,arguments,this),this},n.from=function(r,l,c){return dc(1,arguments,this),this},n.fromTo=function(r,l,c,f){return dc(2,arguments,this),this},n.set=function(r,l,c){return l.duration=0,l.parent=this,hc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Wn(r,l,Aa(this,c),1),this},n.call=function(r,l,c){return $a(this,Wn.delayedCall(0,r,l),c)},n.staggerTo=function(r,l,c,f,p,h,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=h,c.onCompleteParams=_,c.parent=this,new Wn(r,c,Aa(this,p)),this},n.staggerFrom=function(r,l,c,f,p,h,_){return c.runBackwards=1,hc(c).immediateRender=Wi(c.immediateRender),this.staggerTo(r,l,c,f,p,h,_)},n.staggerFromTo=function(r,l,c,f,p,h,_,g){return f.startAt=c,hc(f).immediateRender=Wi(f.immediateRender),this.staggerTo(r,l,f,p,h,_,g)},n.render=function(r,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,h=this._dur,_=r<=0?0:Yn(r),g=this._zTime<0!=r<0&&(this._initted||!h),x,v,M,b,y,S,w,C,U,P,L,D;if(this!==Cn&&_>p&&r>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&h&&(_+=this._time-f,r+=this._time-f),x=_,U=this._start,C=this._ts,S=!C,g&&(h||(f=this._zTime),(r||!l)&&(this._zTime=r)),this._repeat){if(L=this._yoyo,y=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,l,c);if(x=Yn(_%y),_===p?(b=this._repeat,x=h):(P=Yn(_/y),b=~~P,b&&b===P&&(x=h,b--),x>h&&(x=h)),P=Jl(this._tTime,y),!f&&this._tTime&&P!==b&&this._tTime-P*y-this._dur<=0&&(P=b),L&&b&1&&(x=h-x,D=1),b!==P&&!this._lock){var V=L&&P&1,A=V===(L&&b&1);if(b<P&&(V=!V),f=V?0:_%h?h:_,this._lock=1,this.render(f||(D?0:Yn(b*y)),l,!h)._lock=0,this._tTime=_,!l&&this.parent&&fa(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,p=this._tDur,A&&(this._lock=2,f=V?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;Kb(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=GD(this,Yn(f),Yn(x)),w&&(_-=x-(x=w._start))),this._tTime=_,this._time=x,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,f=0),!f&&_&&!l&&!P&&(fa(this,"onStart"),this._tTime!==_))return this;if(x>=f&&r>=0)for(v=this._first;v;){if(M=v._next,(v._act||x>=v._start)&&v._ts&&w!==v){if(v.parent!==this)return this.render(r,l,c);if(v.render(v._ts>0?(x-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(x-v._start)*v._ts,l,c),x!==this._time||!this._ts&&!S){w=0,M&&(_+=this._zTime=-_n);break}}v=M}else{v=this._last;for(var T=r<0?r:x;v;){if(M=v._prev,(v._act||T<=v._end)&&v._ts&&w!==v){if(v.parent!==this)return this.render(r,l,c);if(v.render(v._ts>0?(T-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(T-v._start)*v._ts,l,c||_i&&J_(v)),x!==this._time||!this._ts&&!S){w=0,M&&(_+=this._zTime=T?-_n:_n);break}}v=M}}if(w&&!l&&(this.pause(),w.render(x>=f?0:-_n)._zTime=x>=f?1:-1,this._ts))return this._start=U,md(this),this.render(r,l,c);this._onUpdate&&!l&&fa(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(U===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Bs(this,1),!l&&!(r<0&&!f)&&(_||f||!p)&&(fa(this,_===p&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,l){var c=this;if(Yr(l)||(l=Aa(this,l,r)),!(r instanceof Oc)){if(Ei(r))return r.forEach(function(f){return c.add(f,l)}),this;if(li(r))return this.addLabel(r,l);if(Ln(r))r=Wn.delayedCall(0,r);else return this}return this!==r?$a(this,r,l):this},n.getChildren=function(r,l,c,f){r===void 0&&(r=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Ua);for(var p=[],h=this._first;h;)h._start>=f&&(h instanceof Wn?l&&p.push(h):(c&&p.push(h),r&&p.push.apply(p,h.getChildren(!0,l,c)))),h=h._next;return p},n.getById=function(r){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===r)return l[c]},n.remove=function(r){return li(r)?this.removeLabel(r):Ln(r)?this.killTweensOf(r):(r.parent===this&&pd(this,r),r===this._recent&&(this._recent=this._last),To(this))},n.totalTime=function(r,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Yn(ua.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),o.prototype.totalTime.call(this,r,l),this._forcing=0,this):this._tTime},n.addLabel=function(r,l){return this.labels[r]=Aa(this,l),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,l,c){var f=Wn.delayedCall(0,l||Uc,c);return f.data="isPause",this._hasPause=1,$a(this,f,Aa(this,r))},n.removePause=function(r){var l=this._first;for(r=Aa(this,r);l;)l._start===r&&l.data==="isPause"&&Bs(l),l=l._next},n.killTweensOf=function(r,l,c){for(var f=this.getTweensOf(r,c),p=f.length;p--;)Cs!==f[p]&&f[p].kill(r,l);return this},n.getTweensOf=function(r,l){for(var c=[],f=La(r),p=this._first,h=Yr(l),_;p;)p instanceof Wn?OD(p._targets,f)&&(h?(!Cs||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(r,l){l=l||{};var c=this,f=Aa(c,r),p=l,h=p.startAt,_=p.onStart,g=p.onStartParams,x=p.immediateRender,v,M=Wn.to(c,_a({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale())||_n,onStart:function(){if(c.pause(),!v){var y=l.duration||Math.abs((f-(h&&"time"in h?h.time:c._time))/c.timeScale());M._dur!==y&&$l(M,y,0,1).render(M._time,!0,!0),v=1}_&&_.apply(M,g||[])}},l));return x?M.render(0):M},n.tweenFromTo=function(r,l,c){return this.tweenTo(l,_a({startAt:{time:Aa(this,r)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),u1(this,Aa(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),u1(this,Aa(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+_n)},n.shiftChildren=function(r,l,c){c===void 0&&(c=0);for(var f=this._first,p=this.labels,h;f;)f._start>=c&&(f._start+=r,f._end+=r),f=f._next;if(l)for(h in p)p[h]>=c&&(p[h]+=r);return To(this)},n.invalidate=function(r){var l=this._first;for(this._lock=0;l;)l.invalidate(r),l=l._next;return o.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),To(this)},n.totalDuration=function(r){var l=0,c=this,f=c._last,p=Ua,h,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-r:r));if(c._dirty){for(g=c.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,$a(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=_/c._ts,c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=h;$l(c,c===Cn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(r){if(Cn._ts&&(Db(Cn,ed(r,Cn)),Cb=ua.frame),ua.frame>=r1){r1+=pa.autoSleep||120;var l=Cn._first;if((!l||!l._ts)&&pa.autoSleep&&ua._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||ua.sleep()}}},t})(Oc);_a(Ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var iU=function(t,n,a,r,l,c,f){var p=new qi(this._pt,t,n,0,1,aM,null,l),h=0,_=0,g,x,v,M,b,y,S,w;for(p.b=a,p.e=r,a+="",r+="",(S=~r.indexOf("random("))&&(r=Lc(r)),c&&(w=[a,r],c(w,t,n),a=w[0],r=w[1]),x=a.match(am)||[];g=am.exec(r);)M=g[0],b=r.substring(h,g.index),v?v=(v+1)%5:b.substr(-5)==="rgba("&&(v=1),M!==x[_++]&&(y=parseFloat(x[_-1])||0,p._pt={_next:p._pt,p:b||_===1?b:",",s:y,c:M.charAt(1)==="="?Il(y,M)-y:parseFloat(M)-y,m:v&&v<4?Math.round:0},h=am.lastIndex);return p.c=h<r.length?r.substring(h,r.length):"",p.fp=f,(Mb.test(r)||S)&&(p.e=0),this._pt=p,p},$_=function(t,n,a,r,l,c,f,p,h,_){Ln(r)&&(r=r(l||0,t,c));var g=t[n],x=a!=="get"?a:Ln(g)?h?t[n.indexOf("set")||!Ln(t["get"+n.substr(3)])?n:"get"+n.substr(3)](h):t[n]():g,v=Ln(g)?h?lU:nM:eg,M;if(li(r)&&(~r.indexOf("random(")&&(r=Lc(r)),r.charAt(1)==="="&&(M=Il(x,r)+(bi(x)||0),(M||M===0)&&(r=M))),!_||x!==r||g_)return!isNaN(x*r)&&r!==""?(M=new qi(this._pt,t,n,+x||0,r-(x||0),typeof g=="boolean"?cU:iM,0,v),h&&(M.fp=h),f&&M.modifier(f,this,t),this._pt=M):(!g&&!(n in t)&&Z_(n,r),iU.call(this,t,n,x,r,v,p||pa.stringFilter,h))},aU=function(t,n,a,r,l){if(Ln(t)&&(t=pc(t,l,n,a,r)),!sr(t)||t.style&&t.nodeType||Ei(t)||yb(t))return li(t)?pc(t,l,n,a,r):t;var c={},f;for(f in t)c[f]=pc(t[f],l,n,a,r);return c},$b=function(t,n,a,r,l,c){var f,p,h,_;if(oa[t]&&(f=new oa[t]).init(l,f.rawVars?n[t]:aU(n[t],r,l,c,a),a,r,c)!==!1&&(a._pt=p=new qi(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==Pl))for(h=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)h[f._props[_]]=p;return f},Cs,g_,tg=function o(t,n,a){var r=t.vars,l=r.ease,c=r.startAt,f=r.immediateRender,p=r.lazy,h=r.onUpdate,_=r.runBackwards,g=r.yoyoEase,x=r.keyframes,v=r.autoRevert,M=t._dur,b=t._startAt,y=t._targets,S=t.parent,w=S&&S.data==="nested"?S.vars.targets:y,C=t._overwrite==="auto"&&!X_,U=t.timeline,P,L,D,V,A,T,G,W,it,at,J,z,k;if(U&&(!x||!l)&&(l="none"),t._ease=Ao(l,Kl.ease),t._yEase=g?jb(Ao(g===!0?l:g,Kl.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!U&&!!r.runBackwards,!U||x&&!r.stagger){if(W=y[0]?Eo(y[0]).harness:0,z=W&&r[W.prop],P=td(r,j_),b&&(b._zTime<0&&b.progress(1),n<0&&_&&f&&!v?b.render(-1,!0):b.revert(_&&M?Hh:LD),b._lazy=0),c){if(Bs(t._startAt=Wn.set(y,_a({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!b&&Wi(p),startAt:null,delay:0,onUpdate:h&&function(){return fa(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(_i||!f&&!v)&&t._startAt.revert(Hh),f&&M&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&M&&!b){if(n&&(f=!1),D=_a({overwrite:!1,data:"isFromStart",lazy:f&&!b&&Wi(p),immediateRender:f,stagger:0,parent:S},P),z&&(D[W.prop]=z),Bs(t._startAt=Wn.set(y,D)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(_i?t._startAt.revert(Hh):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,_n,_n);else if(!n)return}for(t._pt=t._ptCache=0,p=M&&Wi(p)||p&&!M,L=0;L<y.length;L++){if(A=y[L],G=A._gsap||Q_(y)[L]._gsap,t._ptLookup[L]=at={},f_[G.id]&&Os.length&&$h(),J=w===y?L:w.indexOf(A),W&&(it=new W).init(A,z||P,t,J,w)!==!1&&(t._pt=V=new qi(t._pt,A,it.name,0,1,it.render,it,0,it.priority),it._props.forEach(function(q){at[q]=V}),it.priority&&(T=1)),!W||z)for(D in P)oa[D]&&(it=$b(D,P,t,J,A,w))?it.priority&&(T=1):at[D]=V=$_.call(t,A,D,"get",P[D],J,w,0,r.stringFilter);t._op&&t._op[L]&&t.kill(A,t._op[L]),C&&t._pt&&(Cs=t,Cn.killTweensOf(A,at,t.globalTime(n)),k=!t.parent,Cs=0),t._pt&&p&&(f_[G.id]=1)}T&&rM(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!k,x&&n<=0&&U.render(Ua,!0,!0)},rU=function(t,n,a,r,l,c,f,p){var h=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,x,v;if(!h)for(h=t._ptCache[n]=[],x=t._ptLookup,v=t._targets.length;v--;){if(_=x[v][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return g_=1,t.vars[n]="+=0",tg(t,f),g_=0,p?Dc(n+" not eligible for reset"):1;h.push(_)}for(v=h.length;v--;)g=h[v],_=g._pt||g,_.s=(r||r===0)&&!l?r:_.s+(r||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=Pn(a)+bi(g.e)),g.b&&(g.b=_.s+bi(g.b))},sU=function(t,n){var a=t[0]?Eo(t[0]).harness:0,r=a&&a.aliases,l,c,f,p;if(!r)return n;l=Ql({},n);for(c in r)if(c in l)for(p=r[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},oU=function(t,n,a,r){var l=n.ease||r||"power1.inOut",c,f;if(Ei(n))f=a[t]||(a[t]=[]),n.forEach(function(p,h){return f.push({t:h/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},pc=function(t,n,a,r,l){return Ln(t)?t.call(n,a,r,l):li(t)&&~t.indexOf("random(")?Lc(t):t},tM=K_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",eM={};Yi(tM+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return eM[o]=1});var Wn=(function(o){vb(t,o);function t(a,r,l,c){var f;typeof r=="number"&&(l.duration=r,r=l,l=null),f=o.call(this,c?r:hc(r))||this;var p=f.vars,h=p.duration,_=p.delay,g=p.immediateRender,x=p.stagger,v=p.overwrite,M=p.keyframes,b=p.defaults,y=p.scrollTrigger,S=p.yoyoEase,w=r.parent||Cn,C=(Ei(a)||yb(a)?Yr(a[0]):"length"in r)?[a]:La(a),U,P,L,D,V,A,T,G;if(f._targets=C.length?Q_(C):Dc("GSAP target "+a+" not found. https://gsap.com",!pa.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,M||x||bh(h)||bh(_)){if(r=f.vars,U=f.timeline=new Ni({data:"nested",defaults:b||{},targets:w&&w.data==="nested"?w.vars.targets:C}),U.kill(),U.parent=U._dp=Nr(f),U._start=0,x||bh(h)||bh(_)){if(D=C.length,T=x&&Ib(x),sr(x))for(V in x)~tM.indexOf(V)&&(G||(G={}),G[V]=x[V]);for(P=0;P<D;P++)L=td(r,eM),L.stagger=0,S&&(L.yoyoEase=S),G&&Ql(L,G),A=C[P],L.duration=+pc(h,Nr(f),P,A,C),L.delay=(+pc(_,Nr(f),P,A,C)||0)-f._delay,!x&&D===1&&L.delay&&(f._delay=_=L.delay,f._start+=_,L.delay=0),U.to(A,L,T?T(P,A,C):0),U._ease=Xe.none;U.duration()?h=_=0:f.timeline=0}else if(M){hc(_a(U.vars.defaults,{ease:"none"})),U._ease=Ao(M.ease||r.ease||"none");var W=0,it,at,J;if(Ei(M))M.forEach(function(z){return U.to(C,z,">")}),U.duration();else{L={};for(V in M)V==="ease"||V==="easeEach"||oU(V,M[V],L,M.easeEach);for(V in L)for(it=L[V].sort(function(z,k){return z.t-k.t}),W=0,P=0;P<it.length;P++)at=it[P],J={ease:at.e,duration:(at.t-(P?it[P-1].t:0))/100*h},J[V]=at.v,U.to(C,J,W),W+=J.duration;U.duration()<h&&U.to({},{duration:h-U.duration()})}}h||f.duration(h=U.duration())}else f.timeline=0;return v===!0&&!X_&&(Cs=Nr(f),Cn.killTweensOf(C),Cs=0),$a(w,Nr(f),l),r.reversed&&f.reverse(),r.paused&&f.paused(!0),(g||!h&&!M&&f._start===Yn(w._time)&&Wi(g)&&BD(Nr(f))&&w.data!=="nested")&&(f._tTime=-_n,f.render(Math.max(0,-_)||0)),y&&Pb(Nr(f),y),f}var n=t.prototype;return n.render=function(r,l,c){var f=this._time,p=this._tDur,h=this._dur,_=r<0,g=r>p-_n&&!_?p:r<_n?0:r,x,v,M,b,y,S,w,C,U;if(!h)HD(this,r,l,c);else if(g!==this._tTime||!r||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(x=g,C=this.timeline,this._repeat){if(b=h+this._rDelay,this._repeat<-1&&_)return this.totalTime(b*100+r,l,c);if(x=Yn(g%b),g===p?(M=this._repeat,x=h):(y=Yn(g/b),M=~~y,M&&M===y?(x=h,M--):x>h&&(x=h)),S=this._yoyo&&M&1,S&&(U=this._yEase,x=h-x),y=Jl(this._tTime,b),x===f&&!c&&this._initted&&M===y)return this._tTime=g,this;M!==y&&(C&&this._yEase&&Kb(C,S),this.vars.repeatRefresh&&!S&&!this._lock&&x!==b&&this._initted&&(this._lock=c=1,this.render(Yn(b*M),!0).invalidate()._lock=0))}if(!this._initted){if(zb(this,_?r:x,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&M!==y))return this;if(h!==this._dur)return this.render(r,l,c)}if(this._tTime=g,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(U||this._ease)(x/h),this._from&&(this.ratio=w=1-w),!f&&g&&!l&&!y&&(fa(this,"onStart"),this._tTime!==g))return this;for(v=this._pt;v;)v.r(w,v.d),v=v._next;C&&C.render(r<0?r:C._dur*C._ease(x/this._dur),l,c)||this._startAt&&(this._zTime=r),this._onUpdate&&!l&&(_&&h_(this,r,l,c),fa(this,"onUpdate")),this._repeat&&M!==y&&this.vars.onRepeat&&!l&&this.parent&&fa(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&h_(this,r,!0,!0),(r||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Bs(this,1),!l&&!(_&&!f)&&(g||f||S)&&(fa(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),o.prototype.invalidate.call(this,r)},n.resetTo=function(r,l,c,f,p){Nc||ua.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||tg(this,h),_=this._ease(h/this._dur),rU(this,r,l,c,f,_,h,p)?this.resetTo(r,l,c,f,1):(_d(this,0),this.parent||Nb(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,l){if(l===void 0&&(l="all"),!r&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?rc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_i),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(r,l,Cs&&Cs.vars.overwrite!==!0)._first||rc(this),this.parent&&c!==this.timeline.totalDuration()&&$l(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=r?La(r):f,h=this._ptLookup,_=this._pt,g,x,v,M,b,y,S;if((!l||l==="all")&&zD(f,p))return l==="all"&&(this._pt=0),rc(this);for(g=this._op=this._op||[],l!=="all"&&(li(l)&&(b={},Yi(l,function(w){return b[w]=1}),l=b),l=sU(f,l)),S=f.length;S--;)if(~p.indexOf(f[S])){x=h[S],l==="all"?(g[S]=l,M=x,v={}):(v=g[S]=g[S]||{},M=l);for(b in M)y=x&&x[b],y&&((!("kill"in y.d)||y.d.kill(b)===!0)&&pd(this,y,"_pt"),delete x[b]),v!=="all"&&(v[b]=1)}return this._initted&&!this._pt&&_&&rc(this),this},t.to=function(r,l){return new t(r,l,arguments[2])},t.from=function(r,l){return dc(1,arguments)},t.delayedCall=function(r,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(r,l,c){return dc(2,arguments)},t.set=function(r,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(r,l)},t.killTweensOf=function(r,l,c){return Cn.killTweensOf(r,l,c)},t})(Oc);_a(Wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yi("staggerTo,staggerFrom,staggerFromTo",function(o){Wn[o]=function(){var t=new Ni,n=p_.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var eg=function(t,n,a){return t[n]=a},nM=function(t,n,a){return t[n](a)},lU=function(t,n,a,r){return t[n](r.fp,a)},uU=function(t,n,a){return t.setAttribute(n,a)},ng=function(t,n){return Ln(t[n])?nM:W_(t[n])&&t.setAttribute?uU:eg},iM=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},cU=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},aM=function(t,n){var a=n._pt,r="";if(!t&&n.b)r=n.b;else if(t===1&&n.e)r=n.e;else{for(;a;)r=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+r,a=a._next;r+=n.c}n.set(n.t,n.p,r,n)},ig=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},fU=function(t,n,a,r){for(var l=this._pt,c;l;)c=l._next,l.p===r&&l.modifier(t,n,a),l=c},hU=function(t){for(var n=this._pt,a,r;n;)r=n._next,n.p===t&&!n.op||n.op===t?pd(this,n,"_pt"):n.dep||(a=1),n=r;return!a},dU=function(t,n,a,r){r.mSet(t,n,r.m.call(r.tween,a,r.mt),r)},rM=function(t){for(var n=t._pt,a,r,l,c;n;){for(a=n._next,r=l;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:c)?n._prev._next=n:l=n,(n._next=r)?r._prev=n:c=n,n=a}t._pt=l},qi=(function(){function o(n,a,r,l,c,f,p,h,_){this.t=a,this.s=l,this.c=c,this.p=r,this.r=f||iM,this.d=p||this,this.set=h||eg,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,r,l){this.mSet=this.mSet||this.set,this.set=dU,this.m=a,this.mt=l,this.tween=r},o})();Yi(K_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return j_[o]=1});ma.TweenMax=ma.TweenLite=Wn;ma.TimelineLite=ma.TimelineMax=Ni;Cn=new Ni({sortChildren:!1,defaults:Kl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pa.stringFilter=Zb;var Ro=[],Vh={},pU=[],f1=0,mU=0,um=function(t){return(Vh[t]||pU).map(function(n){return n()})},x_=function(){var t=Date.now(),n=[];t-f1>2&&(um("matchMediaInit"),Ro.forEach(function(a){var r=a.queries,l=a.conditions,c,f,p,h;for(f in r)c=Ka.matchMedia(r[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,h=1);h&&(a.revert(),p&&n.push(a))}),um("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(r){return a.add(null,r)})}),f1=t,um("matchMedia"))},sM=(function(){function o(n,a){this.selector=a&&m_(a),this.data=[],this._r=[],this.isReverted=!1,this.id=mU++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,r,l){Ln(a)&&(l=r,r=a,a=Ln);var c=this,f=function(){var h=An,_=c.selector,g;return h&&h!==c&&h.data.push(c),l&&(c.selector=m_(l)),An=c,g=r.apply(c,arguments),Ln(g)&&c._r.push(g),An=h,c.selector=_,c.isReverted=!1,g};return c.last=f,a===Ln?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var r=An;An=null,a(this),An=r},t.getTweens=function(){var a=[];return this.data.forEach(function(r){return r instanceof o?a.push.apply(a,r.getTweens()):r instanceof Wn&&!(r.parent&&r.parent.data==="nested")&&a.push(r)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,r){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,h;p--;)h=l.data[p],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)h=l.data[p],h instanceof Ni?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Wn)&&h.revert&&h.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),r)for(var c=Ro.length;c--;)Ro[c].id===this.id&&Ro.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),_U=(function(){function o(n){this.contexts=[],this.scope=n,An&&An.data.push(this)}var t=o.prototype;return t.add=function(a,r,l){sr(a)||(a={matches:a});var c=new sM(0,l||this.scope),f=c.conditions={},p,h,_;An&&!c.selector&&(c.selector=An.selector),this.contexts.push(c),r=c.add("onMatch",r),c.queries=a;for(h in a)h==="all"?_=1:(p=Ka.matchMedia(a[h]),p&&(Ro.indexOf(c)<0&&Ro.push(c),(f[h]=p.matches)&&(_=1),p.addListener?p.addListener(x_):p.addEventListener("change",x_)));return _&&r(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(r){return r.kill(a,!0)})},o})(),nd={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(r){return Wb(r)})},timeline:function(t){return new Ni(t)},getTweensOf:function(t,n){return Cn.getTweensOf(t,n)},getProperty:function(t,n,a,r){li(t)&&(t=La(t)[0]);var l=Eo(t||{}).get,c=a?Lb:Ub;return a==="native"&&(a=""),t&&(n?c((oa[n]&&oa[n].get||l)(t,n,a,r)):function(f,p,h){return c((oa[f]&&oa[f].get||l)(t,f,p,h))})},quickSetter:function(t,n,a){if(t=La(t),t.length>1){var r=t.map(function(_){return ji.quickSetter(_,n,a)}),l=r.length;return function(_){for(var g=l;g--;)r[g](_)}}t=t[0]||{};var c=oa[n],f=Eo(t),p=f.harness&&(f.harness.aliases||{})[n]||n,h=c?function(_){var g=new c;Pl._pt=0,g.init(t,a?_+a:_,Pl,0,[t]),g.render(1,g),Pl._pt&&ig(1,Pl)}:f.set(t,p);return c?h:function(_){return h(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var r,l=ji.to(t,_a((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),a||{})),c=function(p,h,_){return l.resetTo(n,p,h,_)};return c.tween=l,c},isTweening:function(t){return Cn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ao(t.ease,Kl.ease)),s1(Kl,t||{})},config:function(t){return s1(pa,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,r=t.plugins,l=t.defaults,c=t.extendTimeline;(r||"").split(",").forEach(function(f){return f&&!oa[f]&&!ma[f]&&Dc(n+" effect requires "+f+" plugin.")}),rm[n]=function(f,p,h){return a(La(f),_a(p||{},l),h)},c&&(Ni.prototype[n]=function(f,p,h){return this.add(rm[n](f,sr(p)?p:(h=p)&&{},this),h)})},registerEase:function(t,n){Xe[t]=Ao(n)},parseEase:function(t,n){return arguments.length?Ao(t,n):Xe},getById:function(t){return Cn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Ni(t),r,l;for(a.smoothChildTiming=Wi(t.smoothChildTiming),Cn.remove(a),a._dp=0,a._time=a._tTime=Cn._time,r=Cn._first;r;)l=r._next,(n||!(!r._dur&&r instanceof Wn&&r.vars.onComplete===r._targets[0]))&&$a(a,r,r._start-r._delay),r=l;return $a(Cn,a,0),a},context:function(t,n){return t?new sM(t,n):An},matchMedia:function(t){return new _U(t)},matchMediaRefresh:function(){return Ro.forEach(function(t){var n=t.conditions,a,r;for(r in n)n[r]&&(n[r]=!1,a=1);a&&t.revert()})||x_()},addEventListener:function(t,n){var a=Vh[t]||(Vh[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Vh[t],r=a&&a.indexOf(n);r>=0&&a.splice(r,1)},utils:{wrap:ZD,wrapYoyo:jD,distribute:Ib,random:Gb,snap:Hb,normalize:qD,getUnit:bi,clamp:kD,splitColor:Yb,toArray:La,selector:m_,mapRange:kb,pipe:WD,unitize:YD,interpolate:KD,shuffle:Bb},install:Ab,effects:rm,ticker:ua,updateRoot:Ni.updateRoot,plugins:oa,globalTimeline:Cn,core:{PropTween:qi,globals:Rb,Tween:Wn,Timeline:Ni,Animation:Oc,getCache:Eo,_removeLinkedListItem:pd,reverting:function(){return _i},context:function(t){return t&&An&&(An.data.push(t),t._ctx=An),An},suppressOverwrites:function(t){return X_=t}}};Yi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return nd[o]=Wn[o]});ua.add(Ni.updateRoot);Pl=nd.to({},{duration:0});var gU=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},xU=function(t,n){var a=t._targets,r,l,c;for(r in n)for(l=a.length;l--;)c=t._ptLookup[l][r],c&&(c=c.d)&&(c._pt&&(c=gU(c,r)),c&&c.modifier&&c.modifier(n[r],t,a[l],r))},cm=function(t,n){return{name:t,headless:1,rawVars:1,init:function(r,l,c){c._onInit=function(f){var p,h;if(li(l)&&(p={},Yi(l,function(_){return p[_]=1}),l=p),n){p={};for(h in l)p[h]=n(l[h]);l=p}xU(f,l)}}}},ji=nd.registerPlugin({name:"attr",init:function(t,n,a,r,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],r,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)_i?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},cm("roundProps",__),cm("modifiers"),cm("snap",Hb))||nd;Wn.version=Ni.version=ji.version="3.13.0";Tb=1;Y_()&&tu();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;var h1,ws,Hl,ag,yo,d1,rg,vU=function(){return typeof window<"u"},qr={},mo=180/Math.PI,Gl=Math.PI/180,wl=Math.atan2,p1=1e8,sg=/([A-Z])/g,SU=/(left|right|width|margin|padding|x)/i,yU=/[\s,\(]\S/,er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},v_=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},bU=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},MU=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},EU=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},oM=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},lM=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},TU=function(t,n,a){return t.style[n]=a},AU=function(t,n,a){return t.style.setProperty(n,a)},RU=function(t,n,a){return t._gsap[n]=a},CU=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},wU=function(t,n,a,r,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},DU=function(t,n,a,r,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},wn="transform",Zi=wn+"Origin",UU=function o(t,n){var a=this,r=this.target,l=r.style,c=r._gsap;if(t in qr&&l){if(this.tfm=this.tfm||{},t!=="transform")t=er[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Or(r,f)}):this.tfm[t]=c.x?c[t]:Or(r,t),t===Zi&&(this.tfm.zOrigin=c.zOrigin);else return er.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(wn)>=0)return;c.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Zi,n,"")),t=wn}(l||n)&&this.props.push(t,n,l[t])},uM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},LU=function(){var t=this.props,n=this.target,a=n.style,r=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(sg,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)r[c]=this.tfm[c];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=rg(),(!l||!l.isStart)&&!a[wn]&&(uM(a),r.zOrigin&&a[Zi]&&(a[Zi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},cM=function(t,n){var a={target:t,props:[],revert:LU,save:UU};return t._gsap||ji.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(r){return a.save(r)}),a},fM,S_=function(t,n){var a=ws.createElementNS?ws.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ws.createElement(t);return a&&a.style?a:ws.createElement(t)},Na=function o(t,n,a){var r=getComputedStyle(t);return r[n]||r.getPropertyValue(n.replace(sg,"-$1").toLowerCase())||r.getPropertyValue(n)||!a&&o(t,eu(n)||n,1)||""},m1="O,Moz,ms,Ms,Webkit".split(","),eu=function(t,n,a){var r=n||yo,l=r.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(m1[c]+t in l););return c<0?null:(c===3?"ms":c>=0?m1[c]:"")+t},y_=function(){vU()&&window.document&&(h1=window,ws=h1.document,Hl=ws.documentElement,yo=S_("div")||{style:{}},S_("div"),wn=eu(wn),Zi=wn+"Origin",yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fM=!!eu("perspective"),rg=ji.core.reverting,ag=1)},_1=function(t){var n=t.ownerSVGElement,a=S_("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),l;r.style.display="block",a.appendChild(r),Hl.appendChild(a);try{l=r.getBBox()}catch{}return a.removeChild(r),Hl.removeChild(a),l},g1=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},hM=function(t){var n,a;try{n=t.getBBox()}catch{n=_1(t),a=1}return n&&(n.width||n.height)||a||(n=_1(t)),n&&!n.width&&!n.x&&!n.y?{x:+g1(t,["x","cx","x1"])||0,y:+g1(t,["y","cy","y1"])||0,width:0,height:0}:n},dM=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&hM(t))},No=function(t,n){if(n){var a=t.style,r;n in qr&&n!==Zi&&(n=wn),a.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(r==="--"?n:n.replace(sg,"-$1").toLowerCase())):a.removeAttribute(n)}},Ds=function(t,n,a,r,l,c){var f=new qi(t._pt,n,a,0,1,c?lM:oM);return t._pt=f,f.b=r,f.e=l,t._props.push(a),f},x1={deg:1,rad:1,turn:1},NU={grid:1,flex:1},Is=function o(t,n,a,r){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=yo.style,p=SU.test(n),h=t.tagName.toLowerCase()==="svg",_=(h?"client":"offset")+(p?"Width":"Height"),g=100,x=r==="px",v=r==="%",M,b,y,S;if(r===c||!l||x1[r]||x1[c])return l;if(c!=="px"&&!x&&(l=o(t,n,a,"px")),S=t.getCTM&&dM(t),(v||c==="%")&&(qr[n]||~n.indexOf("adius")))return M=S?t.getBBox()[p?"width":"height"]:t[_],Pn(v?l/M*g:l/100*M);if(f[p?"width":"height"]=g+(x?c:r),b=r!=="rem"&&~n.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,S&&(b=(t.ownerSVGElement||{}).parentNode),(!b||b===ws||!b.appendChild)&&(b=ws.body),y=b._gsap,y&&v&&y.width&&p&&y.time===ua.time&&!y.uncache)return Pn(l/y.width*g);if(v&&(n==="height"||n==="width")){var w=t.style[n];t.style[n]=g+r,M=t[_],w?t.style[n]=w:No(t,n)}else(v||c==="%")&&!NU[Na(b,"display")]&&(f.position=Na(t,"position")),b===t&&(f.position="static"),b.appendChild(yo),M=yo[_],b.removeChild(yo),f.position="absolute";return p&&v&&(y=Eo(b),y.time=ua.time,y.width=b[_]),Pn(x?M*l/g:M&&l?g/M*l:0)},Or=function(t,n,a,r){var l;return ag||y_(),n in er&&n!=="transform"&&(n=er[n],~n.indexOf(",")&&(n=n.split(",")[0])),qr[n]&&n!=="transform"?(l=zc(t,r),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:ad(Na(t,Zi))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||r||~(l+"").indexOf("calc("))&&(l=id[n]&&id[n](t,n,a)||Na(t,n)||wb(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Is(t,n,l,a)+a:l},OU=function(t,n,a,r){if(!a||a==="none"){var l=eu(n,t,1),c=l&&Na(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Na(t,"borderTopColor"))}var f=new qi(this._pt,t.style,n,0,1,aM),p=0,h=0,_,g,x,v,M,b,y,S,w,C,U,P;if(f.b=a,f.e=r,a+="",r+="",r.substring(0,6)==="var(--"&&(r=Na(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(b=t.style[n],t.style[n]=r,r=Na(t,n)||r,b?t.style[n]=b:No(t,n)),_=[a,r],Zb(_),a=_[0],r=_[1],x=a.match(Ol)||[],P=r.match(Ol)||[],P.length){for(;g=Ol.exec(r);)y=g[0],w=r.substring(p,g.index),M?M=(M+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(M=1),y!==(b=x[h++]||"")&&(v=parseFloat(b)||0,U=b.substr((v+"").length),y.charAt(1)==="="&&(y=Il(v,y)+U),S=parseFloat(y),C=y.substr((S+"").length),p=Ol.lastIndex-C.length,C||(C=C||pa.units[n]||U,p===r.length&&(r+=C,f.e+=C)),U!==C&&(v=Is(t,n,b,C)||0),f._pt={_next:f._pt,p:w||h===1?w:",",s:v,c:S-v,m:M&&M<4||n==="zIndex"?Math.round:0});f.c=p<r.length?r.substring(p,r.length):""}else f.r=n==="display"&&r==="none"?lM:oM;return Mb.test(r)&&(f.e=0),this._pt=f,f},v1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PU=function(t){var n=t.split(" "),a=n[0],r=n[1]||"50%";return(a==="top"||a==="bottom"||r==="left"||r==="right")&&(t=a,a=r,r=t),n[0]=v1[a]||a,n[1]=v1[r]||r,n.join(" ")},zU=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,r=a.style,l=n.u,c=a._gsap,f,p,h;if(l==="all"||l===!0)r.cssText="",p=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],qr[f]&&(p=1,f=f==="transformOrigin"?Zi:wn),No(a,f);p&&(No(a,wn),c&&(c.svg&&a.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",zc(a,1),c.uncache=1,uM(r)))}},id={clearProps:function(t,n,a,r,l){if(l.data!=="isFromStart"){var c=t._pt=new qi(t._pt,n,a,0,0,zU);return c.u=r,c.pr=-10,c.tween=l,t._props.push(a),1}}},Pc=[1,0,0,1,0,0],pM={},mM=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},S1=function(t){var n=Na(t,wn);return mM(n)?Pc:n.substr(7).match(bb).map(Pn)},og=function(t,n){var a=t._gsap||Eo(t),r=t.style,l=S1(t),c,f,p,h;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?Pc:l):(l===Pc&&!t.offsetParent&&t!==Hl&&!a.svg&&(p=r.display,r.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,f=t.nextElementSibling,Hl.appendChild(t)),l=S1(t),p?r.display=p:No(t,"display"),h&&(f?c.insertBefore(t,f):c?c.appendChild(t):Hl.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},b_=function(t,n,a,r,l,c){var f=t._gsap,p=l||og(t,!0),h=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,x=f.yOffset||0,v=p[0],M=p[1],b=p[2],y=p[3],S=p[4],w=p[5],C=n.split(" "),U=parseFloat(C[0])||0,P=parseFloat(C[1])||0,L,D,V,A;a?p!==Pc&&(D=v*y-M*b)&&(V=U*(y/D)+P*(-b/D)+(b*w-y*S)/D,A=U*(-M/D)+P*(v/D)-(v*w-M*S)/D,U=V,P=A):(L=hM(t),U=L.x+(~C[0].indexOf("%")?U/100*L.width:U),P=L.y+(~(C[1]||C[0]).indexOf("%")?P/100*L.height:P)),r||r!==!1&&f.smooth?(S=U-h,w=P-_,f.xOffset=g+(S*v+w*b)-S,f.yOffset=x+(S*M+w*y)-w):f.xOffset=f.yOffset=0,f.xOrigin=U,f.yOrigin=P,f.smooth=!!r,f.origin=n,f.originIsAbsolute=!!a,t.style[Zi]="0px 0px",c&&(Ds(c,f,"xOrigin",h,U),Ds(c,f,"yOrigin",_,P),Ds(c,f,"xOffset",g,f.xOffset),Ds(c,f,"yOffset",x,f.yOffset)),t.setAttribute("data-svg-origin",U+" "+P)},zc=function(t,n){var a=t._gsap||new Jb(t);if("x"in a&&!n&&!a.uncache)return a;var r=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),h=Na(t,Zi)||"0",_,g,x,v,M,b,y,S,w,C,U,P,L,D,V,A,T,G,W,it,at,J,z,k,q,ft,F,B,rt,xt,St,wt;return _=g=x=b=y=S=w=C=U=0,v=M=1,a.svg=!!(t.getCTM&&dM(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(r[wn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[wn]!=="none"?p[wn]:"")),r.scale=r.rotate=r.translate="none"),D=og(t,a.svg),a.svg&&(a.uncache?(q=t.getBBox(),h=a.xOrigin-q.x+"px "+(a.yOrigin-q.y)+"px",k=""):k=!n&&t.getAttribute("data-svg-origin"),b_(t,k||h,!!k||a.originIsAbsolute,a.smooth!==!1,D)),P=a.xOrigin||0,L=a.yOrigin||0,D!==Pc&&(G=D[0],W=D[1],it=D[2],at=D[3],_=J=D[4],g=z=D[5],D.length===6?(v=Math.sqrt(G*G+W*W),M=Math.sqrt(at*at+it*it),b=G||W?wl(W,G)*mo:0,w=it||at?wl(it,at)*mo+b:0,w&&(M*=Math.abs(Math.cos(w*Gl))),a.svg&&(_-=P-(P*G+L*it),g-=L-(P*W+L*at))):(wt=D[6],xt=D[7],F=D[8],B=D[9],rt=D[10],St=D[11],_=D[12],g=D[13],x=D[14],V=wl(wt,rt),y=V*mo,V&&(A=Math.cos(-V),T=Math.sin(-V),k=J*A+F*T,q=z*A+B*T,ft=wt*A+rt*T,F=J*-T+F*A,B=z*-T+B*A,rt=wt*-T+rt*A,St=xt*-T+St*A,J=k,z=q,wt=ft),V=wl(-it,rt),S=V*mo,V&&(A=Math.cos(-V),T=Math.sin(-V),k=G*A-F*T,q=W*A-B*T,ft=it*A-rt*T,St=at*T+St*A,G=k,W=q,it=ft),V=wl(W,G),b=V*mo,V&&(A=Math.cos(V),T=Math.sin(V),k=G*A+W*T,q=J*A+z*T,W=W*A-G*T,z=z*A-J*T,G=k,J=q),y&&Math.abs(y)+Math.abs(b)>359.9&&(y=b=0,S=180-S),v=Pn(Math.sqrt(G*G+W*W+it*it)),M=Pn(Math.sqrt(z*z+wt*wt)),V=wl(J,z),w=Math.abs(V)>2e-4?V*mo:0,U=St?1/(St<0?-St:St):0),a.svg&&(k=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!mM(Na(t,wn)),k&&t.setAttribute("transform",k))),Math.abs(w)>90&&Math.abs(w)<270&&(l?(v*=-1,w+=b<=0?180:-180,b+=b<=0?180:-180):(M*=-1,w+=w<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=x+c,a.scaleX=Pn(v),a.scaleY=Pn(M),a.rotation=Pn(b)+f,a.rotationX=Pn(y)+f,a.rotationY=Pn(S)+f,a.skewX=w+f,a.skewY=C+f,a.transformPerspective=U+c,(a.zOrigin=parseFloat(h.split(" ")[2])||!n&&a.zOrigin||0)&&(r[Zi]=ad(h)),a.xOffset=a.yOffset=0,a.force3D=pa.force3D,a.renderTransform=a.svg?BU:fM?_M:FU,a.uncache=0,a},ad=function(t){return(t=t.split(" "))[0]+" "+t[1]},fm=function(t,n,a){var r=bi(n);return Pn(parseFloat(n)+parseFloat(Is(t,"x",a+"px",r)))+r},FU=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,_M(t,n)},fo="0deg",ec="0px",ho=") ",_M=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,h=a.rotation,_=a.rotationY,g=a.rotationX,x=a.skewX,v=a.skewY,M=a.scaleX,b=a.scaleY,y=a.transformPerspective,S=a.force3D,w=a.target,C=a.zOrigin,U="",P=S==="auto"&&t&&t!==1||S===!0;if(C&&(g!==fo||_!==fo)){var L=parseFloat(_)*Gl,D=Math.sin(L),V=Math.cos(L),A;L=parseFloat(g)*Gl,A=Math.cos(L),c=fm(w,c,D*A*-C),f=fm(w,f,-Math.sin(L)*-C),p=fm(w,p,V*A*-C+C)}y!==ec&&(U+="perspective("+y+ho),(r||l)&&(U+="translate("+r+"%, "+l+"%) "),(P||c!==ec||f!==ec||p!==ec)&&(U+=p!==ec||P?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ho),h!==fo&&(U+="rotate("+h+ho),_!==fo&&(U+="rotateY("+_+ho),g!==fo&&(U+="rotateX("+g+ho),(x!==fo||v!==fo)&&(U+="skew("+x+", "+v+ho),(M!==1||b!==1)&&(U+="scale("+M+", "+b+ho),w.style[wn]=U||"translate(0, 0)"},BU=function(t,n){var a=n||this,r=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,h=a.skewX,_=a.skewY,g=a.scaleX,x=a.scaleY,v=a.target,M=a.xOrigin,b=a.yOrigin,y=a.xOffset,S=a.yOffset,w=a.forceCSS,C=parseFloat(c),U=parseFloat(f),P,L,D,V,A;p=parseFloat(p),h=parseFloat(h),_=parseFloat(_),_&&(_=parseFloat(_),h+=_,p+=_),p||h?(p*=Gl,h*=Gl,P=Math.cos(p)*g,L=Math.sin(p)*g,D=Math.sin(p-h)*-x,V=Math.cos(p-h)*x,h&&(_*=Gl,A=Math.tan(h-_),A=Math.sqrt(1+A*A),D*=A,V*=A,_&&(A=Math.tan(_),A=Math.sqrt(1+A*A),P*=A,L*=A)),P=Pn(P),L=Pn(L),D=Pn(D),V=Pn(V)):(P=g,V=x,L=D=0),(C&&!~(c+"").indexOf("px")||U&&!~(f+"").indexOf("px"))&&(C=Is(v,"x",c,"px"),U=Is(v,"y",f,"px")),(M||b||y||S)&&(C=Pn(C+M-(M*P+b*D)+y),U=Pn(U+b-(M*L+b*V)+S)),(r||l)&&(A=v.getBBox(),C=Pn(C+r/100*A.width),U=Pn(U+l/100*A.height)),A="matrix("+P+","+L+","+D+","+V+","+C+","+U+")",v.setAttribute("transform",A),w&&(v.style[wn]=A)},IU=function(t,n,a,r,l){var c=360,f=li(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?mo:1),h=p-r,_=r+h+"deg",g,x;return f&&(g=l.split("_")[1],g==="short"&&(h%=c,h!==h%(c/2)&&(h+=h<0?c:-c)),g==="cw"&&h<0?h=(h+c*p1)%c-~~(h/c)*c:g==="ccw"&&h>0&&(h=(h-c*p1)%c-~~(h/c)*c)),t._pt=x=new qi(t._pt,n,a,r,h,bU),x.e=_,x.u="deg",t._props.push(a),x},y1=function(t,n){for(var a in n)t[a]=n[a];return t},HU=function(t,n,a){var r=y1({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,h,_,g,x,v,M;r.svg?(h=a.getAttribute("transform"),a.setAttribute("transform",""),c[wn]=n,f=zc(a,1),No(a,wn),a.setAttribute("transform",h)):(h=getComputedStyle(a)[wn],c[wn]=n,f=zc(a,1),c[wn]=h);for(p in qr)h=r[p],_=f[p],h!==_&&l.indexOf(p)<0&&(v=bi(h),M=bi(_),g=v!==M?Is(a,p,h,M):parseFloat(h),x=parseFloat(_),t._pt=new qi(t._pt,f,p,g,x-g,v_),t._pt.u=M||0,t._props.push(p));y1(f,r)};Yi("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",r="Bottom",l="Left",c=(t<3?[n,a,r,l]:[n+l,n+a,r+a,r+l]).map(function(f){return t<2?o+f:"border"+f+o});id[t>1?"border"+o:o]=function(f,p,h,_,g){var x,v;if(arguments.length<4)return x=c.map(function(M){return Or(f,M,h)}),v=x.join(" "),v.split(x[0]).length===5?x[0]:v;x=(_+"").split(" "),v={},c.forEach(function(M,b){return v[M]=x[b]=x[b]||x[(b-1)/2|0]}),f.init(p,v,g)}});var gM={name:"css",register:y_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,r,l){var c=this._props,f=t.style,p=a.vars.startAt,h,_,g,x,v,M,b,y,S,w,C,U,P,L,D,V;ag||y_(),this.styles=this.styles||cM(t),V=this.styles.props,this.tween=a;for(b in n)if(b!=="autoRound"&&(_=n[b],!(oa[b]&&$b(b,n,a,r,t,l)))){if(v=typeof _,M=id[b],v==="function"&&(_=_.call(a,r,t,l),v=typeof _),v==="string"&&~_.indexOf("random(")&&(_=Lc(_)),M)M(this,t,b,_,a)&&(D=1);else if(b.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(b)+"").trim(),_+="",Ps.lastIndex=0,Ps.test(h)||(y=bi(h),S=bi(_)),S?y!==S&&(h=Is(t,b,h,S)+S):y&&(_+=y),this.add(f,"setProperty",h,_,r,l,0,0,b),c.push(b),V.push(b,0,f[b]);else if(v!=="undefined"){if(p&&b in p?(h=typeof p[b]=="function"?p[b].call(a,r,t,l):p[b],li(h)&&~h.indexOf("random(")&&(h=Lc(h)),bi(h+"")||h==="auto"||(h+=pa.units[b]||bi(Or(t,b))||""),(h+"").charAt(1)==="="&&(h=Or(t,b))):h=Or(t,b),x=parseFloat(h),w=v==="string"&&_.charAt(1)==="="&&_.substr(0,2),w&&(_=_.substr(2)),g=parseFloat(_),b in er&&(b==="autoAlpha"&&(x===1&&Or(t,"visibility")==="hidden"&&g&&(x=0),V.push("visibility",0,f.visibility),Ds(this,f,"visibility",x?"inherit":"hidden",g?"inherit":"hidden",!g)),b!=="scale"&&b!=="transform"&&(b=er[b],~b.indexOf(",")&&(b=b.split(",")[0]))),C=b in qr,C){if(this.styles.save(b),v==="string"&&_.substring(0,6)==="var(--"&&(_=Na(t,_.substring(4,_.indexOf(")"))),g=parseFloat(_)),U||(P=t._gsap,P.renderTransform&&!n.parseTransform||zc(t,n.parseTransform),L=n.smoothOrigin!==!1&&P.smooth,U=this._pt=new qi(this._pt,f,wn,0,1,P.renderTransform,P,0,-1),U.dep=1),b==="scale")this._pt=new qi(this._pt,P,"scaleY",P.scaleY,(w?Il(P.scaleY,w+g):g)-P.scaleY||0,v_),this._pt.u=0,c.push("scaleY",b),b+="X";else if(b==="transformOrigin"){V.push(Zi,0,f[Zi]),_=PU(_),P.svg?b_(t,_,0,L,0,this):(S=parseFloat(_.split(" ")[2])||0,S!==P.zOrigin&&Ds(this,P,"zOrigin",P.zOrigin,S),Ds(this,f,b,ad(h),ad(_)));continue}else if(b==="svgOrigin"){b_(t,_,1,L,0,this);continue}else if(b in pM){IU(this,P,b,x,w?Il(x,w+_):_);continue}else if(b==="smoothOrigin"){Ds(this,P,"smooth",P.smooth,_);continue}else if(b==="force3D"){P[b]=_;continue}else if(b==="transform"){HU(this,_,t);continue}}else b in f||(b=eu(b)||b);if(C||(g||g===0)&&(x||x===0)&&!yU.test(_)&&b in f)y=(h+"").substr((x+"").length),g||(g=0),S=bi(_)||(b in pa.units?pa.units[b]:y),y!==S&&(x=Is(t,b,h,S)),this._pt=new qi(this._pt,C?P:f,b,x,(w?Il(x,w+g):g)-x,!C&&(S==="px"||b==="zIndex")&&n.autoRound!==!1?EU:v_),this._pt.u=S||0,y!==S&&S!=="%"&&(this._pt.b=h,this._pt.r=MU);else if(b in f)OU.call(this,t,b,h,w?w+_:_);else if(b in t)this.add(t,b,h||t[b],w?w+_:_,r,l);else if(b!=="parseTransform"){Z_(b,_);continue}C||(b in f?V.push(b,0,f[b]):typeof t[b]=="function"?V.push(b,2,t[b]()):V.push(b,1,h||t[b])),c.push(b)}}D&&rM(this)},render:function(t,n){if(n.tween._time||!rg())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Or,aliases:er,getSetter:function(t,n,a){var r=er[n];return r&&r.indexOf(",")<0&&(n=r),n in qr&&n!==Zi&&(t._gsap.x||Or(t,"x"))?a&&d1===a?n==="scale"?CU:RU:(d1=a||{})&&(n==="scale"?wU:DU):t.style&&!W_(t.style[n])?TU:~n.indexOf("-")?AU:ng(t,n)},core:{_removeProperty:No,_getMatrix:og}};ji.utils.checkPrefix=eu;ji.core.getStyleSaver=cM;(function(o,t,n,a){var r=Yi(o+","+t+","+n,function(l){qr[l]=1});Yi(t,function(l){pa.units[l]="deg",pM[l]=1}),er[r[13]]=o+","+t,Yi(a,function(l){var c=l.split(":");er[c[1]]=r[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){pa.units[o]="px"});ji.registerPlugin(gM);var mc=ji.registerPlugin(gM)||ji;mc.core.Tween;function GU(o,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(o,a.key,a)}}function VU(o,t,n){return t&&GU(o.prototype,t),o}var mi,kh,ca,Us,Ls,Vl,xM,_o,_c,vM,Ir,Ga,SM,yM=function(){return mi||typeof window<"u"&&(mi=window.gsap)&&mi.registerPlugin&&mi},bM=1,zl=[],Le=[],ar=[],gc=Date.now,M_=function(t,n){return n},kU=function(){var t=_c.core,n=t.bridge||{},a=t._scrollers,r=t._proxies;a.push.apply(a,Le),r.push.apply(r,ar),Le=a,ar=r,M_=function(c,f){return n[c](f)}},zs=function(t,n){return~ar.indexOf(t)&&ar[ar.indexOf(t)+1][n]},xc=function(t){return!!~vM.indexOf(t)},Ci=function(t,n,a,r,l){return t.addEventListener(n,a,{passive:r!==!1,capture:!!l})},Ri=function(t,n,a,r){return t.removeEventListener(n,a,!!r)},Mh="scrollLeft",Eh="scrollTop",E_=function(){return Ir&&Ir.isPressed||Le.cache++},rd=function(t,n){var a=function r(l){if(l||l===0){bM&&(ca.history.scrollRestoration="manual");var c=Ir&&Ir.isPressed;l=r.v=Math.round(l)||(Ir&&Ir.iOS?1:0),t(l),r.cacheID=Le.cache,c&&M_("ss",l)}else(n||Le.cache!==r.cacheID||M_("ref"))&&(r.cacheID=Le.cache,r.v=t());return r.v+r.offset};return a.offset=0,t&&a},Oi={s:Mh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:rd(function(o){return arguments.length?ca.scrollTo(o,Kn.sc()):ca.pageXOffset||Us[Mh]||Ls[Mh]||Vl[Mh]||0})},Kn={s:Eh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Oi,sc:rd(function(o){return arguments.length?ca.scrollTo(Oi.sc(),o):ca.pageYOffset||Us[Eh]||Ls[Eh]||Vl[Eh]||0})},ki=function(t,n){return(n&&n._ctx&&n._ctx.selector||mi.utils.toArray)(t)[0]||(typeof t=="string"&&mi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},XU=function(t,n){for(var a=n.length;a--;)if(n[a]===t||n[a].contains(t))return!0;return!1},Hs=function(t,n){var a=n.s,r=n.sc;xc(t)&&(t=Us.scrollingElement||Ls);var l=Le.indexOf(t),c=r===Kn.sc?1:2;!~l&&(l=Le.push(t)-1),Le[l+c]||Ci(t,"scroll",E_);var f=Le[l+c],p=f||(Le[l+c]=rd(zs(t,a),!0)||(xc(t)?r:rd(function(h){return arguments.length?t[a]=h:t[a]})));return p.target=t,f||(p.smooth=mi.getProperty(t,"scrollBehavior")==="smooth"),p},T_=function(t,n,a){var r=t,l=t,c=gc(),f=c,p=n||50,h=Math.max(500,p*3),_=function(M,b){var y=gc();b||y-c>p?(l=r,r=M,f=c,c=y):a?r+=M:r=l+(M-l)/(y-f)*(c-f)},g=function(){l=r=a?0:r,f=c=0},x=function(M){var b=f,y=l,S=gc();return(M||M===0)&&M!==r&&_(M),c===f||S-f>h?0:(r+(a?y:-y))/((a?S:c)-b)*1e3};return{update:_,reset:g,getVelocity:x}},nc=function(t,n){return n&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},b1=function(t){var n=Math.max.apply(Math,t),a=Math.min.apply(Math,t);return Math.abs(n)>=Math.abs(a)?n:a},MM=function(){_c=mi.core.globals().ScrollTrigger,_c&&_c.core&&kU()},EM=function(t){return mi=t||yM(),!kh&&mi&&typeof document<"u"&&document.body&&(ca=window,Us=document,Ls=Us.documentElement,Vl=Us.body,vM=[ca,Us,Ls,Vl],mi.utils.clamp,SM=mi.core.context||function(){},_o="onpointerenter"in Vl?"pointer":"mouse",xM=Bn.isTouch=ca.matchMedia&&ca.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ca||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ga=Bn.eventTypes=("ontouchstart"in Ls?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ls?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bM=0},500),MM(),kh=1),kh};Oi.op=Kn;Le.cache=0;var Bn=(function(){function o(n){this.init(n)}var t=o.prototype;return t.init=function(a){kh||EM(mi)||console.warn("Please gsap.registerPlugin(Observer)"),_c||MM();var r=a.tolerance,l=a.dragMinimum,c=a.type,f=a.target,p=a.lineHeight,h=a.debounce,_=a.preventDefault,g=a.onStop,x=a.onStopDelay,v=a.ignore,M=a.wheelSpeed,b=a.event,y=a.onDragStart,S=a.onDragEnd,w=a.onDrag,C=a.onPress,U=a.onRelease,P=a.onRight,L=a.onLeft,D=a.onUp,V=a.onDown,A=a.onChangeX,T=a.onChangeY,G=a.onChange,W=a.onToggleX,it=a.onToggleY,at=a.onHover,J=a.onHoverEnd,z=a.onMove,k=a.ignoreCheck,q=a.isNormalizer,ft=a.onGestureStart,F=a.onGestureEnd,B=a.onWheel,rt=a.onEnable,xt=a.onDisable,St=a.onClick,wt=a.scrollSpeed,et=a.capture,ot=a.allowClicks,At=a.lockAxis,Nt=a.onLockAxis;this.target=f=ki(f)||Ls,this.vars=a,v&&(v=mi.utils.toArray(v)),r=r||1e-9,l=l||0,M=M||1,wt=wt||1,c=c||"wheel,touch,pointer",h=h!==!1,p||(p=parseFloat(ca.getComputedStyle(Vl).lineHeight)||22);var Ft,qt,_e,Ot,ee,X,se,nt=this,ge=0,Xt=0,Fe=a.passive||!_&&a.passive!==!1,Bt=Hs(f,Oi),ue=Hs(f,Kn),I=Bt(),R=ue(),$=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Ga[0]==="pointerdown",gt=xc(f),mt=f.ownerDocument||Us,ht=[0,0,0],jt=[0,0,0],Ut=0,ie=function(){return Ut=gc()},zt=function(Kt,xe){return(nt.event=Kt)&&v&&XU(Kt.target,v)||xe&&$&&Kt.pointerType!=="touch"||k&&k(Kt,xe)},Et=function(){nt._vx.reset(),nt._vy.reset(),qt.pause(),g&&g(nt)},Tt=function(){var Kt=nt.deltaX=b1(ht),xe=nt.deltaY=b1(jt),Ht=Math.abs(Kt)>=r,me=Math.abs(xe)>=r;G&&(Ht||me)&&G(nt,Kt,xe,ht,jt),Ht&&(P&&nt.deltaX>0&&P(nt),L&&nt.deltaX<0&&L(nt),A&&A(nt),W&&nt.deltaX<0!=ge<0&&W(nt),ge=nt.deltaX,ht[0]=ht[1]=ht[2]=0),me&&(V&&nt.deltaY>0&&V(nt),D&&nt.deltaY<0&&D(nt),T&&T(nt),it&&nt.deltaY<0!=Xt<0&&it(nt),Xt=nt.deltaY,jt[0]=jt[1]=jt[2]=0),(Ot||_e)&&(z&&z(nt),_e&&(y&&_e===1&&y(nt),w&&w(nt),_e=0),Ot=!1),X&&!(X=!1)&&Nt&&Nt(nt),ee&&(B(nt),ee=!1),Ft=0},$t=function(Kt,xe,Ht){ht[Ht]+=Kt,jt[Ht]+=xe,nt._vx.update(Kt),nt._vy.update(xe),h?Ft||(Ft=requestAnimationFrame(Tt)):Tt()},Zt=function(Kt,xe){At&&!se&&(nt.axis=se=Math.abs(Kt)>Math.abs(xe)?"x":"y",X=!0),se!=="y"&&(ht[2]+=Kt,nt._vx.update(Kt,!0)),se!=="x"&&(jt[2]+=xe,nt._vy.update(xe,!0)),h?Ft||(Ft=requestAnimationFrame(Tt)):Tt()},It=function(Kt){if(!zt(Kt,1)){Kt=nc(Kt,_);var xe=Kt.clientX,Ht=Kt.clientY,me=xe-nt.x,ae=Ht-nt.y,ce=nt.isDragging;nt.x=xe,nt.y=Ht,(ce||(me||ae)&&(Math.abs(nt.startX-xe)>=l||Math.abs(nt.startY-Ht)>=l))&&(_e=ce?2:1,ce||(nt.isDragging=!0),Zt(me,ae))}},oe=nt.onPress=function(Vt){zt(Vt,1)||Vt&&Vt.button||(nt.axis=se=null,qt.pause(),nt.isPressed=!0,Vt=nc(Vt),ge=Xt=0,nt.startX=nt.x=Vt.clientX,nt.startY=nt.y=Vt.clientY,nt._vx.reset(),nt._vy.reset(),Ci(q?f:mt,Ga[1],It,Fe,!0),nt.deltaX=nt.deltaY=0,C&&C(nt))},H=nt.onRelease=function(Vt){if(!zt(Vt,1)){Ri(q?f:mt,Ga[1],It,!0);var Kt=!isNaN(nt.y-nt.startY),xe=nt.isDragging,Ht=xe&&(Math.abs(nt.x-nt.startX)>3||Math.abs(nt.y-nt.startY)>3),me=nc(Vt);!Ht&&Kt&&(nt._vx.reset(),nt._vy.reset(),_&&ot&&mi.delayedCall(.08,function(){if(gc()-Ut>300&&!Vt.defaultPrevented){if(Vt.target.click)Vt.target.click();else if(mt.createEvent){var ae=mt.createEvent("MouseEvents");ae.initMouseEvent("click",!0,!0,ca,1,me.screenX,me.screenY,me.clientX,me.clientY,!1,!1,!1,!1,0,null),Vt.target.dispatchEvent(ae)}}})),nt.isDragging=nt.isGesturing=nt.isPressed=!1,g&&xe&&!q&&qt.restart(!0),_e&&Tt(),S&&xe&&S(nt),U&&U(nt,Ht)}},Lt=function(Kt){return Kt.touches&&Kt.touches.length>1&&(nt.isGesturing=!0)&&ft(Kt,nt.isDragging)},Rt=function(){return(nt.isGesturing=!1)||F(nt)},Ct=function(Kt){if(!zt(Kt)){var xe=Bt(),Ht=ue();$t((xe-I)*wt,(Ht-R)*wt,1),I=xe,R=Ht,g&&qt.restart(!0)}},Mt=function(Kt){if(!zt(Kt)){Kt=nc(Kt,_),B&&(ee=!0);var xe=(Kt.deltaMode===1?p:Kt.deltaMode===2?ca.innerHeight:1)*M;$t(Kt.deltaX*xe,Kt.deltaY*xe,0),g&&!q&&qt.restart(!0)}},vt=function(Kt){if(!zt(Kt)){var xe=Kt.clientX,Ht=Kt.clientY,me=xe-nt.x,ae=Ht-nt.y;nt.x=xe,nt.y=Ht,Ot=!0,g&&qt.restart(!0),(me||ae)&&Zt(me,ae)}},Wt=function(Kt){nt.event=Kt,at(nt)},le=function(Kt){nt.event=Kt,J(nt)},We=function(Kt){return zt(Kt)||nc(Kt,_)&&St(nt)};qt=nt._dc=mi.delayedCall(x||.25,Et).pause(),nt.deltaX=nt.deltaY=0,nt._vx=T_(0,50,!0),nt._vy=T_(0,50,!0),nt.scrollX=Bt,nt.scrollY=ue,nt.isDragging=nt.isGesturing=nt.isPressed=!1,SM(this),nt.enable=function(Vt){return nt.isEnabled||(Ci(gt?mt:f,"scroll",E_),c.indexOf("scroll")>=0&&Ci(gt?mt:f,"scroll",Ct,Fe,et),c.indexOf("wheel")>=0&&Ci(f,"wheel",Mt,Fe,et),(c.indexOf("touch")>=0&&xM||c.indexOf("pointer")>=0)&&(Ci(f,Ga[0],oe,Fe,et),Ci(mt,Ga[2],H),Ci(mt,Ga[3],H),ot&&Ci(f,"click",ie,!0,!0),St&&Ci(f,"click",We),ft&&Ci(mt,"gesturestart",Lt),F&&Ci(mt,"gestureend",Rt),at&&Ci(f,_o+"enter",Wt),J&&Ci(f,_o+"leave",le),z&&Ci(f,_o+"move",vt)),nt.isEnabled=!0,nt.isDragging=nt.isGesturing=nt.isPressed=Ot=_e=!1,nt._vx.reset(),nt._vy.reset(),I=Bt(),R=ue(),Vt&&Vt.type&&oe(Vt),rt&&rt(nt)),nt},nt.disable=function(){nt.isEnabled&&(zl.filter(function(Vt){return Vt!==nt&&xc(Vt.target)}).length||Ri(gt?mt:f,"scroll",E_),nt.isPressed&&(nt._vx.reset(),nt._vy.reset(),Ri(q?f:mt,Ga[1],It,!0)),Ri(gt?mt:f,"scroll",Ct,et),Ri(f,"wheel",Mt,et),Ri(f,Ga[0],oe,et),Ri(mt,Ga[2],H),Ri(mt,Ga[3],H),Ri(f,"click",ie,!0),Ri(f,"click",We),Ri(mt,"gesturestart",Lt),Ri(mt,"gestureend",Rt),Ri(f,_o+"enter",Wt),Ri(f,_o+"leave",le),Ri(f,_o+"move",vt),nt.isEnabled=nt.isPressed=nt.isDragging=!1,xt&&xt(nt))},nt.kill=nt.revert=function(){nt.disable();var Vt=zl.indexOf(nt);Vt>=0&&zl.splice(Vt,1),Ir===nt&&(Ir=0)},zl.push(nt),q&&xc(f)&&(Ir=nt),nt.enable(b)},VU(o,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),o})();Bn.version="3.13.0";Bn.create=function(o){return new Bn(o)};Bn.register=EM;Bn.getAll=function(){return zl.slice()};Bn.getById=function(o){return zl.filter(function(t){return t.vars.id===o})[0]};yM()&&mi.registerPlugin(Bn);var Jt,Ll,Ue,Sn,la,nn,lg,sd,Fc,vc,oc,Th,Si,gd,A_,Ui,M1,E1,Nl,TM,hm,AM,Di,R_,RM,CM,Ts,C_,ug,kl,cg,od,w_,dm,Ah=1,yi=Date.now,pm=yi(),Oa=0,lc=0,T1=function(t,n,a){var r=sa(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return a["_"+n+"Clamp"]=r,r?t.substr(6,t.length-7):t},A1=function(t,n){return n&&(!sa(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},WU=function o(){return lc&&requestAnimationFrame(o)},R1=function(){return gd=1},C1=function(){return gd=0},Qa=function(t){return t},uc=function(t){return Math.round(t*1e5)/1e5||0},wM=function(){return typeof window<"u"},DM=function(){return Jt||wM()&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},Oo=function(t){return!!~lg.indexOf(t)},UM=function(t){return(t==="Height"?cg:Ue["inner"+t])||la["client"+t]||nn["client"+t]},LM=function(t){return zs(t,"getBoundingClientRect")||(Oo(t)?function(){return Zh.width=Ue.innerWidth,Zh.height=cg,Zh}:function(){return zr(t)})},YU=function(t,n,a){var r=a.d,l=a.d2,c=a.a;return(c=zs(t,"getBoundingClientRect"))?function(){return c()[r]}:function(){return(n?UM(l):t["client"+l])||0}},qU=function(t,n){return!n||~ar.indexOf(t)?LM(t):function(){return Zh}},nr=function(t,n){var a=n.s,r=n.d2,l=n.d,c=n.a;return Math.max(0,(a="scroll"+r)&&(c=zs(t,a))?c()-LM(t)()[l]:Oo(t)?(la[a]||nn[a])-UM(r):t[a]-t["offset"+r])},Rh=function(t,n){for(var a=0;a<Nl.length;a+=3)(!n||~n.indexOf(Nl[a+1]))&&t(Nl[a],Nl[a+1],Nl[a+2])},sa=function(t){return typeof t=="string"},Mi=function(t){return typeof t=="function"},cc=function(t){return typeof t=="number"},go=function(t){return typeof t=="object"},ic=function(t,n,a){return t&&t.progress(n?0:1)&&a&&t.pause()},mm=function(t,n){if(t.enabled){var a=t._ctx?t._ctx.add(function(){return n(t)}):n(t);a&&a.totalTime&&(t.callbackAnimation=a)}},Dl=Math.abs,NM="left",OM="top",fg="right",hg="bottom",Co="width",wo="height",Sc="Right",yc="Left",bc="Top",Mc="Bottom",Xn="padding",Ca="margin",nu="Width",dg="Height",jn="px",wa=function(t){return Ue.getComputedStyle(t)},ZU=function(t){var n=wa(t).position;t.style.position=n==="absolute"||n==="fixed"?n:"relative"},w1=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},zr=function(t,n){var a=n&&wa(t)[A_]!=="matrix(1, 0, 0, 1, 0, 0)"&&Jt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return a&&a.progress(0).kill(),r},ld=function(t,n){var a=n.d2;return t["offset"+a]||t["client"+a]||0},PM=function(t){var n=[],a=t.labels,r=t.duration(),l;for(l in a)n.push(a[l]/r);return n},jU=function(t){return function(n){return Jt.utils.snap(PM(t),n)}},pg=function(t){var n=Jt.utils.snap(t),a=Array.isArray(t)&&t.slice(0).sort(function(r,l){return r-l});return a?function(r,l,c){c===void 0&&(c=.001);var f;if(!l)return n(r);if(l>0){for(r-=c,f=0;f<a.length;f++)if(a[f]>=r)return a[f];return a[f-1]}else for(f=a.length,r+=c;f--;)if(a[f]<=r)return a[f];return a[0]}:function(r,l,c){c===void 0&&(c=.001);var f=n(r);return!l||Math.abs(f-r)<c||f-r<0==l<0?f:n(l<0?r-t:r+t)}},KU=function(t){return function(n,a){return pg(PM(t))(n,a.direction)}},Ch=function(t,n,a,r){return a.split(",").forEach(function(l){return t(n,l,r)})},oi=function(t,n,a,r,l){return t.addEventListener(n,a,{passive:!r,capture:!!l})},si=function(t,n,a,r){return t.removeEventListener(n,a,!!r)},wh=function(t,n,a){a=a&&a.wheelHandler,a&&(t(n,"wheel",a),t(n,"touchmove",a))},D1={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Dh={toggleActions:"play",anticipatePin:0},ud={top:0,left:0,center:.5,bottom:1,right:1},Xh=function(t,n){if(sa(t)){var a=t.indexOf("="),r=~a?+(t.charAt(a-1)+1)*parseFloat(t.substr(a+1)):0;~a&&(t.indexOf("%")>a&&(r*=n/100),t=t.substr(0,a-1)),t=r+(t in ud?ud[t]*n:~t.indexOf("%")?parseFloat(t)*n/100:parseFloat(t)||0)}return t},Uh=function(t,n,a,r,l,c,f,p){var h=l.startColor,_=l.endColor,g=l.fontSize,x=l.indent,v=l.fontWeight,M=Sn.createElement("div"),b=Oo(a)||zs(a,"pinType")==="fixed",y=t.indexOf("scroller")!==-1,S=b?nn:a,w=t.indexOf("start")!==-1,C=w?h:_,U="border-color:"+C+";font-size:"+g+";color:"+C+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return U+="position:"+((y||p)&&b?"fixed;":"absolute;"),(y||p||!b)&&(U+=(r===Kn?fg:hg)+":"+(c+parseFloat(x))+"px;"),f&&(U+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),M._isStart=w,M.setAttribute("class","gsap-marker-"+t+(n?" marker-"+n:"")),M.style.cssText=U,M.innerText=n||n===0?t+"-"+n:t,S.children[0]?S.insertBefore(M,S.children[0]):S.appendChild(M),M._offset=M["offset"+r.op.d2],Wh(M,0,r,w),M},Wh=function(t,n,a,r){var l={display:"block"},c=a[r?"os2":"p2"],f=a[r?"p2":"os2"];t._isFlipped=r,l[a.a+"Percent"]=r?-100:0,l[a.a]=r?"1px":0,l["border"+c+nu]=1,l["border"+f+nu]=0,l[a.p]=n+"px",Jt.set(t,l)},De=[],D_={},Bc,U1=function(){return yi()-Oa>34&&(Bc||(Bc=requestAnimationFrame(Vr)))},Ul=function(){(!Di||!Di.isPressed||Di.startX>nn.clientWidth)&&(Le.cache++,Di?Bc||(Bc=requestAnimationFrame(Vr)):Vr(),Oa||zo("scrollStart"),Oa=yi())},_m=function(){CM=Ue.innerWidth,RM=Ue.innerHeight},fc=function(t){Le.cache++,(t===!0||!Si&&!AM&&!Sn.fullscreenElement&&!Sn.webkitFullscreenElement&&(!R_||CM!==Ue.innerWidth||Math.abs(Ue.innerHeight-RM)>Ue.innerHeight*.25))&&sd.restart(!0)},Po={},QU=[],zM=function o(){return si(Ne,"scrollEnd",o)||bo(!0)},zo=function(t){return Po[t]&&Po[t].map(function(n){return n()})||QU},ra=[],FM=function(t){for(var n=0;n<ra.length;n+=5)(!t||ra[n+4]&&ra[n+4].query===t)&&(ra[n].style.cssText=ra[n+1],ra[n].getBBox&&ra[n].setAttribute("transform",ra[n+2]||""),ra[n+3].uncache=1)},mg=function(t,n){var a;for(Ui=0;Ui<De.length;Ui++)a=De[Ui],a&&(!n||a._ctx===n)&&(t?a.kill(1):a.revert(!0,!0));od=!0,n&&FM(n),n||zo("revert")},BM=function(t,n){Le.cache++,(n||!Li)&&Le.forEach(function(a){return Mi(a)&&a.cacheID++&&(a.rec=0)}),sa(t)&&(Ue.history.scrollRestoration=ug=t)},Li,Do=0,L1,JU=function(){if(L1!==Do){var t=L1=Do;requestAnimationFrame(function(){return t===Do&&bo(!0)})}},IM=function(){nn.appendChild(kl),cg=!Di&&kl.offsetHeight||Ue.innerHeight,nn.removeChild(kl)},N1=function(t){return Fc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n){return n.style.display=t?"none":"block"})},bo=function(t,n){if(la=Sn.documentElement,nn=Sn.body,lg=[Ue,Sn,la,nn],Oa&&!t&&!od){oi(Ne,"scrollEnd",zM);return}IM(),Li=Ne.isRefreshing=!0,Le.forEach(function(r){return Mi(r)&&++r.cacheID&&(r.rec=r())});var a=zo("refreshInit");TM&&Ne.sort(),n||mg(),Le.forEach(function(r){Mi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),De.slice(0).forEach(function(r){return r.refresh()}),od=!1,De.forEach(function(r){if(r._subPinOffset&&r.pin){var l=r.vars.horizontal?"offsetWidth":"offsetHeight",c=r.pin[l];r.revert(!0,1),r.adjustPinSpacing(r.pin[l]-c),r.refresh()}}),w_=1,N1(!0),De.forEach(function(r){var l=nr(r.scroller,r._dir),c=r.vars.end==="max"||r._endClamp&&r.end>l,f=r._startClamp&&r.start>=l;(c||f)&&r.setPositions(f?l-1:r.start,c?Math.max(f?l:r.start+1,l):r.end,!0)}),N1(!1),w_=0,a.forEach(function(r){return r&&r.render&&r.render(-1)}),Le.forEach(function(r){Mi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),BM(ug,1),sd.pause(),Do++,Li=2,Vr(2),De.forEach(function(r){return Mi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Li=Ne.isRefreshing=!1,zo("refresh")},U_=0,Yh=1,Ec,Vr=function(t){if(t===2||!Li&&!od){Ne.isUpdating=!0,Ec&&Ec.update(0);var n=De.length,a=yi(),r=a-pm>=50,l=n&&De[0].scroll();if(Yh=U_>l?-1:1,Li||(U_=l),r&&(Oa&&!gd&&a-Oa>200&&(Oa=0,zo("scrollEnd")),oc=pm,pm=a),Yh<0){for(Ui=n;Ui-- >0;)De[Ui]&&De[Ui].update(0,r);Yh=1}else for(Ui=0;Ui<n;Ui++)De[Ui]&&De[Ui].update(0,r);Ne.isUpdating=!1}Bc=0},L_=[NM,OM,hg,fg,Ca+Mc,Ca+Sc,Ca+bc,Ca+yc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],qh=L_.concat([Co,wo,"boxSizing","max"+nu,"max"+dg,"position",Ca,Xn,Xn+bc,Xn+Sc,Xn+Mc,Xn+yc]),$U=function(t,n,a){Xl(a);var r=t._gsap;if(r.spacerIsNative)Xl(r.spacerState);else if(t._gsap.swappedIn){var l=n.parentNode;l&&(l.insertBefore(t,n),l.removeChild(n))}t._gsap.swappedIn=!1},gm=function(t,n,a,r){if(!t._gsap.swappedIn){for(var l=L_.length,c=n.style,f=t.style,p;l--;)p=L_[l],c[p]=a[p];c.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(c.display="inline-block"),f[hg]=f[fg]="auto",c.flexBasis=a.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Co]=ld(t,Oi)+jn,c[wo]=ld(t,Kn)+jn,c[Xn]=f[Ca]=f[OM]=f[NM]="0",Xl(r),f[Co]=f["max"+nu]=a[Co],f[wo]=f["max"+dg]=a[wo],f[Xn]=a[Xn],t.parentNode!==n&&(t.parentNode.insertBefore(n,t),n.appendChild(t)),t._gsap.swappedIn=!0}},tL=/([A-Z])/g,Xl=function(t){if(t){var n=t.t.style,a=t.length,r=0,l,c;for((t.t._gsap||Jt.core.getCache(t.t)).uncache=1;r<a;r+=2)c=t[r+1],l=t[r],c?n[l]=c:n[l]&&n.removeProperty(l.replace(tL,"-$1").toLowerCase())}},Lh=function(t){for(var n=qh.length,a=t.style,r=[],l=0;l<n;l++)r.push(qh[l],a[qh[l]]);return r.t=t,r},eL=function(t,n,a){for(var r=[],l=t.length,c=a?8:0,f;c<l;c+=2)f=t[c],r.push(f,f in n?n[f]:t[c+1]);return r.t=t.t,r},Zh={left:0,top:0},O1=function(t,n,a,r,l,c,f,p,h,_,g,x,v,M){Mi(t)&&(t=t(p)),sa(t)&&t.substr(0,3)==="max"&&(t=x+(t.charAt(4)==="="?Xh("0"+t.substr(3),a):0));var b=v?v.time():0,y,S,w;if(v&&v.seek(0),isNaN(t)||(t=+t),cc(t))v&&(t=Jt.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,x,t)),f&&Wh(f,a,r,!0);else{Mi(n)&&(n=n(p));var C=(t||"0").split(" "),U,P,L,D;w=ki(n,p)||nn,U=zr(w)||{},(!U||!U.left&&!U.top)&&wa(w).display==="none"&&(D=w.style.display,w.style.display="block",U=zr(w),D?w.style.display=D:w.style.removeProperty("display")),P=Xh(C[0],U[r.d]),L=Xh(C[1]||"0",a),t=U[r.p]-h[r.p]-_+P+l-L,f&&Wh(f,L,r,a-L<20||f._isStart&&L>20),a-=a-L}if(M&&(p[M]=t||-.001,t<0&&(t=0)),c){var V=t+a,A=c._isStart;y="scroll"+r.d2,Wh(c,V,r,A&&V>20||!A&&(g?Math.max(nn[y],la[y]):c.parentNode[y])<=V+1),g&&(h=zr(f),g&&(c.style[r.op.p]=h[r.op.p]-r.op.m-c._offset+jn))}return v&&w&&(y=zr(w),v.seek(x),S=zr(w),v._caScrollDist=y[r.p]-S[r.p],t=t/v._caScrollDist*x),v&&v.seek(b),v?t:Math.round(t)},nL=/(webkit|moz|length|cssText|inset)/i,P1=function(t,n,a,r){if(t.parentNode!==n){var l=t.style,c,f;if(n===nn){t._stOrig=l.cssText,f=wa(t);for(c in f)!+c&&!nL.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=a,l.left=r}else l.cssText=t._stOrig;Jt.core.getCache(t).uncache=1,n.appendChild(t)}},HM=function(t,n,a){var r=n,l=r;return function(c){var f=Math.round(t());return f!==r&&f!==l&&Math.abs(f-r)>3&&Math.abs(f-l)>3&&(c=f,a&&a()),l=r,r=Math.round(c),r}},Nh=function(t,n,a){var r={};r[n.p]="+="+a,Jt.set(t,r)},z1=function(t,n){var a=Hs(t,n),r="_scroll"+n.p2,l=function c(f,p,h,_,g){var x=c.tween,v=p.onComplete,M={};h=h||a();var b=HM(a,h,function(){x.kill(),c.tween=0});return g=_&&g||0,_=_||f-h,x&&x.kill(),p[r]=f,p.inherit=!1,p.modifiers=M,M[r]=function(){return b(h+_*x.ratio+g*x.ratio*x.ratio)},p.onUpdate=function(){Le.cache++,c.tween&&Vr()},p.onComplete=function(){c.tween=0,v&&v.call(x)},x=c.tween=Jt.to(t,p),x};return t[r]=a,a.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},oi(t,"wheel",a.wheelHandler),Ne.isTouch&&oi(t,"touchmove",a.wheelHandler),l},Ne=(function(){function o(n,a){Ll||o.register(Jt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),C_(this),this.init(n,a)}var t=o.prototype;return t.init=function(a,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!lc){this.update=this.refresh=this.kill=Qa;return}a=w1(sa(a)||cc(a)||a.nodeType?{trigger:a}:a,Dh);var l=a,c=l.onUpdate,f=l.toggleClass,p=l.id,h=l.onToggle,_=l.onRefresh,g=l.scrub,x=l.trigger,v=l.pin,M=l.pinSpacing,b=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,w=l.onSnapComplete,C=l.once,U=l.snap,P=l.pinReparent,L=l.pinSpacer,D=l.containerAnimation,V=l.fastScrollEnd,A=l.preventOverlaps,T=a.horizontal||a.containerAnimation&&a.horizontal!==!1?Oi:Kn,G=!g&&g!==0,W=ki(a.scroller||Ue),it=Jt.core.getCache(W),at=Oo(W),J=("pinType"in a?a.pinType:zs(W,"pinType")||at&&"fixed")==="fixed",z=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],k=G&&a.toggleActions.split(" "),q="markers"in a?a.markers:Dh.markers,ft=at?0:parseFloat(wa(W)["border"+T.p2+nu])||0,F=this,B=a.onRefreshInit&&function(){return a.onRefreshInit(F)},rt=YU(W,at,T),xt=qU(W,at),St=0,wt=0,et=0,ot=Hs(W,T),At,Nt,Ft,qt,_e,Ot,ee,X,se,nt,ge,Xt,Fe,Bt,ue,I,R,$,gt,mt,ht,jt,Ut,ie,zt,Et,Tt,$t,Zt,It,oe,H,Lt,Rt,Ct,Mt,vt,Wt,le;if(F._startClamp=F._endClamp=!1,F._dir=T,y*=45,F.scroller=W,F.scroll=D?D.time.bind(D):ot,qt=ot(),F.vars=a,r=r||a.animation,"refreshPriority"in a&&(TM=1,a.refreshPriority===-9999&&(Ec=F)),it.tweenScroll=it.tweenScroll||{top:z1(W,Kn),left:z1(W,Oi)},F.tweenTo=At=it.tweenScroll[T.p],F.scrubDuration=function(Ht){Lt=cc(Ht)&&Ht,Lt?H?H.duration(Ht):H=Jt.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Lt,paused:!0,onComplete:function(){return S&&S(F)}}):(H&&H.progress(1).kill(),H=0)},r&&(r.vars.lazy=!1,r._initted&&!F.isReverted||r.vars.immediateRender!==!1&&a.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),F.animation=r.pause(),r.scrollTrigger=F,F.scrubDuration(g),It=0,p||(p=r.vars.id)),U&&((!go(U)||U.push)&&(U={snapTo:U}),"scrollBehavior"in nn.style&&Jt.set(at?[nn,la]:W,{scrollBehavior:"auto"}),Le.forEach(function(Ht){return Mi(Ht)&&Ht.target===(at?Sn.scrollingElement||la:W)&&(Ht.smooth=!1)}),Ft=Mi(U.snapTo)?U.snapTo:U.snapTo==="labels"?jU(r):U.snapTo==="labelsDirectional"?KU(r):U.directional!==!1?function(Ht,me){return pg(U.snapTo)(Ht,yi()-wt<500?0:me.direction)}:Jt.utils.snap(U.snapTo),Rt=U.duration||{min:.1,max:2},Rt=go(Rt)?vc(Rt.min,Rt.max):vc(Rt,Rt),Ct=Jt.delayedCall(U.delay||Lt/2||.1,function(){var Ht=ot(),me=yi()-wt<500,ae=At.tween;if((me||Math.abs(F.getVelocity())<10)&&!ae&&!gd&&St!==Ht){var ce=(Ht-Ot)/Bt,gn=r&&!G?r.totalProgress():ce,Ee=me?0:(gn-oe)/(yi()-oc)*1e3||0,fn=Jt.utils.clamp(-ce,1-ce,Dl(Ee/2)*Ee/.185),tn=ce+(U.inertia===!1?0:fn),ye,ve,Oe=U,ti=Oe.onStart,hn=Oe.onInterrupt,ui=Oe.onComplete;if(ye=Ft(tn,F),cc(ye)||(ye=tn),ve=Math.max(0,Math.round(Ot+ye*Bt)),Ht<=ee&&Ht>=Ot&&ve!==Ht){if(ae&&!ae._initted&&ae.data<=Dl(ve-Ht))return;U.inertia===!1&&(fn=ye-ce),At(ve,{duration:Rt(Dl(Math.max(Dl(tn-gn),Dl(ye-gn))*.185/Ee/.05||0)),ease:U.ease||"power3",data:Dl(ve-Ht),onInterrupt:function(){return Ct.restart(!0)&&hn&&hn(F)},onComplete:function(){F.update(),St=ot(),r&&!G&&(H?H.resetTo("totalProgress",ye,r._tTime/r._tDur):r.progress(ye)),It=oe=r&&!G?r.totalProgress():F.progress,w&&w(F),ui&&ui(F)}},Ht,fn*Bt,ve-Ht-fn*Bt),ti&&ti(F,At.tween)}}else F.isActive&&St!==Ht&&Ct.restart(!0)}).pause()),p&&(D_[p]=F),x=F.trigger=ki(x||v!==!0&&v),le=x&&x._gsap&&x._gsap.stRevert,le&&(le=le(F)),v=v===!0?x:ki(v),sa(f)&&(f={targets:x,className:f}),v&&(M===!1||M===Ca||(M=!M&&v.parentNode&&v.parentNode.style&&wa(v.parentNode).display==="flex"?!1:Xn),F.pin=v,Nt=Jt.core.getCache(v),Nt.spacer?ue=Nt.pinState:(L&&(L=ki(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Nt.spacerIsNative=!!L,L&&(Nt.spacerState=Lh(L))),Nt.spacer=$=L||Sn.createElement("div"),$.classList.add("pin-spacer"),p&&$.classList.add("pin-spacer-"+p),Nt.pinState=ue=Lh(v)),a.force3D!==!1&&Jt.set(v,{force3D:!0}),F.spacer=$=Nt.spacer,Zt=wa(v),ie=Zt[M+T.os2],mt=Jt.getProperty(v),ht=Jt.quickSetter(v,T.a,jn),gm(v,$,Zt),R=Lh(v)),q){Xt=go(q)?w1(q,D1):D1,nt=Uh("scroller-start",p,W,T,Xt,0),ge=Uh("scroller-end",p,W,T,Xt,0,nt),gt=nt["offset"+T.op.d2];var We=ki(zs(W,"content")||W);X=this.markerStart=Uh("start",p,We,T,Xt,gt,0,D),se=this.markerEnd=Uh("end",p,We,T,Xt,gt,0,D),D&&(Wt=Jt.quickSetter([X,se],T.a,jn)),!J&&!(ar.length&&zs(W,"fixedMarkers")===!0)&&(ZU(at?nn:W),Jt.set([nt,ge],{force3D:!0}),Et=Jt.quickSetter(nt,T.a,jn),$t=Jt.quickSetter(ge,T.a,jn))}if(D){var Vt=D.vars.onUpdate,Kt=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){F.update(0,0,1),Vt&&Vt.apply(D,Kt||[])})}if(F.previous=function(){return De[De.indexOf(F)-1]},F.next=function(){return De[De.indexOf(F)+1]},F.revert=function(Ht,me){if(!me)return F.kill(!0);var ae=Ht!==!1||!F.enabled,ce=Si;ae!==F.isReverted&&(ae&&(Mt=Math.max(ot(),F.scroll.rec||0),et=F.progress,vt=r&&r.progress()),X&&[X,se,nt,ge].forEach(function(gn){return gn.style.display=ae?"none":"block"}),ae&&(Si=F,F.update(ae)),v&&(!P||!F.isActive)&&(ae?$U(v,$,ue):gm(v,$,wa(v),zt)),ae||F.update(ae),Si=ce,F.isReverted=ae)},F.refresh=function(Ht,me,ae,ce){if(!((Si||!F.enabled)&&!me)){if(v&&Ht&&Oa){oi(o,"scrollEnd",zM);return}!Li&&B&&B(F),Si=F,At.tween&&!ae&&(At.tween.kill(),At.tween=0),H&&H.pause(),b&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(te){return te.vars.immediateRender&&te.render(0,!0,!0)})),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var gn=rt(),Ee=xt(),fn=D?D.duration():nr(W,T),tn=Bt<=.01||!Bt,ye=0,ve=ce||0,Oe=go(ae)?ae.end:a.end,ti=a.endTrigger||x,hn=go(ae)?ae.start:a.start||(a.start===0||!x?0:v?"0 0":"0 100%"),ui=F.pinnedContainer=a.pinnedContainer&&ki(a.pinnedContainer,F),Ti=x&&Math.max(0,De.indexOf(F))||0,yn=Ti,Rn,bn,O,j,st,tt,K,Dt,Pt,Yt,Gt,re,fe;for(q&&go(ae)&&(re=Jt.getProperty(nt,T.p),fe=Jt.getProperty(ge,T.p));yn-- >0;)tt=De[yn],tt.end||tt.refresh(0,1)||(Si=F),K=tt.pin,K&&(K===x||K===v||K===ui)&&!tt.isReverted&&(Yt||(Yt=[]),Yt.unshift(tt),tt.revert(!0,!0)),tt!==De[yn]&&(Ti--,yn--);for(Mi(hn)&&(hn=hn(F)),hn=T1(hn,"start",F),Ot=O1(hn,x,gn,T,ot(),X,nt,F,Ee,ft,J,fn,D,F._startClamp&&"_startClamp")||(v?-.001:0),Mi(Oe)&&(Oe=Oe(F)),sa(Oe)&&!Oe.indexOf("+=")&&(~Oe.indexOf(" ")?Oe=(sa(hn)?hn.split(" ")[0]:"")+Oe:(ye=Xh(Oe.substr(2),gn),Oe=sa(hn)?hn:(D?Jt.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,Ot):Ot)+ye,ti=x)),Oe=T1(Oe,"end",F),ee=Math.max(Ot,O1(Oe||(ti?"100% 0":fn),ti,gn,T,ot()+ye,se,ge,F,Ee,ft,J,fn,D,F._endClamp&&"_endClamp"))||-.001,ye=0,yn=Ti;yn--;)tt=De[yn],K=tt.pin,K&&tt.start-tt._pinPush<=Ot&&!D&&tt.end>0&&(Rn=tt.end-(F._startClamp?Math.max(0,tt.start):tt.start),(K===x&&tt.start-tt._pinPush<Ot||K===ui)&&isNaN(hn)&&(ye+=Rn*(1-tt.progress)),K===v&&(ve+=Rn));if(Ot+=ye,ee+=ye,F._startClamp&&(F._startClamp+=ye),F._endClamp&&!Li&&(F._endClamp=ee||-.001,ee=Math.min(ee,nr(W,T))),Bt=ee-Ot||(Ot-=.01)&&.001,tn&&(et=Jt.utils.clamp(0,1,Jt.utils.normalize(Ot,ee,Mt))),F._pinPush=ve,X&&ye&&(Rn={},Rn[T.a]="+="+ye,ui&&(Rn[T.p]="-="+ot()),Jt.set([X,se],Rn)),v&&!(w_&&F.end>=nr(W,T)))Rn=wa(v),j=T===Kn,O=ot(),jt=parseFloat(mt(T.a))+ve,!fn&&ee>1&&(Gt=(at?Sn.scrollingElement||la:W).style,Gt={style:Gt,value:Gt["overflow"+T.a.toUpperCase()]},at&&wa(nn)["overflow"+T.a.toUpperCase()]!=="scroll"&&(Gt.style["overflow"+T.a.toUpperCase()]="scroll")),gm(v,$,Rn),R=Lh(v),bn=zr(v,!0),Dt=J&&Hs(W,j?Oi:Kn)(),M?(zt=[M+T.os2,Bt+ve+jn],zt.t=$,yn=M===Xn?ld(v,T)+Bt+ve:0,yn&&(zt.push(T.d,yn+jn),$.style.flexBasis!=="auto"&&($.style.flexBasis=yn+jn)),Xl(zt),ui&&De.forEach(function(te){te.pin===ui&&te.vars.pinSpacing!==!1&&(te._subPinOffset=!0)}),J&&ot(Mt)):(yn=ld(v,T),yn&&$.style.flexBasis!=="auto"&&($.style.flexBasis=yn+jn)),J&&(st={top:bn.top+(j?O-Ot:Dt)+jn,left:bn.left+(j?Dt:O-Ot)+jn,boxSizing:"border-box",position:"fixed"},st[Co]=st["max"+nu]=Math.ceil(bn.width)+jn,st[wo]=st["max"+dg]=Math.ceil(bn.height)+jn,st[Ca]=st[Ca+bc]=st[Ca+Sc]=st[Ca+Mc]=st[Ca+yc]="0",st[Xn]=Rn[Xn],st[Xn+bc]=Rn[Xn+bc],st[Xn+Sc]=Rn[Xn+Sc],st[Xn+Mc]=Rn[Xn+Mc],st[Xn+yc]=Rn[Xn+yc],I=eL(ue,st,P),Li&&ot(0)),r?(Pt=r._initted,hm(1),r.render(r.duration(),!0,!0),Ut=mt(T.a)-jt+Bt+ve,Tt=Math.abs(Bt-Ut)>1,J&&Tt&&I.splice(I.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),hm(0)):Ut=Bt,Gt&&(Gt.value?Gt.style["overflow"+T.a.toUpperCase()]=Gt.value:Gt.style.removeProperty("overflow-"+T.a));else if(x&&ot()&&!D)for(bn=x.parentNode;bn&&bn!==nn;)bn._pinOffset&&(Ot-=bn._pinOffset,ee-=bn._pinOffset),bn=bn.parentNode;Yt&&Yt.forEach(function(te){return te.revert(!1,!0)}),F.start=Ot,F.end=ee,qt=_e=Li?Mt:ot(),!D&&!Li&&(qt<Mt&&ot(Mt),F.scroll.rec=0),F.revert(!1,!0),wt=yi(),Ct&&(St=-1,Ct.restart(!0)),Si=0,r&&G&&(r._initted||vt)&&r.progress()!==vt&&r.progress(vt||0,!0).render(r.time(),!0,!0),(tn||et!==F.progress||D||b||r&&!r._initted)&&(r&&!G&&(r._initted||et||r.vars.immediateRender!==!1)&&r.totalProgress(D&&Ot<-.001&&!et?Jt.utils.normalize(Ot,ee,0):et,!0),F.progress=tn||(qt-Ot)/Bt===et?0:et),v&&M&&($._pinOffset=Math.round(F.progress*Ut)),H&&H.invalidate(),isNaN(re)||(re-=Jt.getProperty(nt,T.p),fe-=Jt.getProperty(ge,T.p),Nh(nt,T,re),Nh(X,T,re-(ce||0)),Nh(ge,T,fe),Nh(se,T,fe-(ce||0))),tn&&!Li&&F.update(),_&&!Li&&!Fe&&(Fe=!0,_(F),Fe=!1)}},F.getVelocity=function(){return(ot()-_e)/(yi()-oc)*1e3||0},F.endAnimation=function(){ic(F.callbackAnimation),r&&(H?H.progress(1):r.paused()?G||ic(r,F.direction<0,1):ic(r,r.reversed()))},F.labelToScroll=function(Ht){return r&&r.labels&&(Ot||F.refresh()||Ot)+r.labels[Ht]/r.duration()*Bt||0},F.getTrailing=function(Ht){var me=De.indexOf(F),ae=F.direction>0?De.slice(0,me).reverse():De.slice(me+1);return(sa(Ht)?ae.filter(function(ce){return ce.vars.preventOverlaps===Ht}):ae).filter(function(ce){return F.direction>0?ce.end<=Ot:ce.start>=ee})},F.update=function(Ht,me,ae){if(!(D&&!ae&&!Ht)){var ce=Li===!0?Mt:F.scroll(),gn=Ht?0:(ce-Ot)/Bt,Ee=gn<0?0:gn>1?1:gn||0,fn=F.progress,tn,ye,ve,Oe,ti,hn,ui,Ti;if(me&&(_e=qt,qt=D?ot():ce,U&&(oe=It,It=r&&!G?r.totalProgress():Ee)),y&&v&&!Si&&!Ah&&Oa&&(!Ee&&Ot<ce+(ce-_e)/(yi()-oc)*y?Ee=1e-4:Ee===1&&ee>ce+(ce-_e)/(yi()-oc)*y&&(Ee=.9999)),Ee!==fn&&F.enabled){if(tn=F.isActive=!!Ee&&Ee<1,ye=!!fn&&fn<1,hn=tn!==ye,ti=hn||!!Ee!=!!fn,F.direction=Ee>fn?1:-1,F.progress=Ee,ti&&!Si&&(ve=Ee&&!fn?0:Ee===1?1:fn===1?2:3,G&&(Oe=!hn&&k[ve+1]!=="none"&&k[ve+1]||k[ve],Ti=r&&(Oe==="complete"||Oe==="reset"||Oe in r))),A&&(hn||Ti)&&(Ti||g||!r)&&(Mi(A)?A(F):F.getTrailing(A).forEach(function(O){return O.endAnimation()})),G||(H&&!Si&&!Ah?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",Ee,r._tTime/r._tDur):(H.vars.totalProgress=Ee,H.invalidate().restart())):r&&r.totalProgress(Ee,!!(Si&&(wt||Ht)))),v){if(Ht&&M&&($.style[M+T.os2]=ie),!J)ht(uc(jt+Ut*Ee));else if(ti){if(ui=!Ht&&Ee>fn&&ee+1>ce&&ce+1>=nr(W,T),P)if(!Ht&&(tn||ui)){var yn=zr(v,!0),Rn=ce-Ot;P1(v,nn,yn.top+(T===Kn?Rn:0)+jn,yn.left+(T===Kn?0:Rn)+jn)}else P1(v,$);Xl(tn||ui?I:R),Tt&&Ee<1&&tn||ht(jt+(Ee===1&&!ui?Ut:0))}}U&&!At.tween&&!Si&&!Ah&&Ct.restart(!0),f&&(hn||C&&Ee&&(Ee<1||!dm))&&Fc(f.targets).forEach(function(O){return O.classList[tn||C?"add":"remove"](f.className)}),c&&!G&&!Ht&&c(F),ti&&!Si?(G&&(Ti&&(Oe==="complete"?r.pause().totalProgress(1):Oe==="reset"?r.restart(!0).pause():Oe==="restart"?r.restart(!0):r[Oe]()),c&&c(F)),(hn||!dm)&&(h&&hn&&mm(F,h),z[ve]&&mm(F,z[ve]),C&&(Ee===1?F.kill(!1,1):z[ve]=0),hn||(ve=Ee===1?1:3,z[ve]&&mm(F,z[ve]))),V&&!tn&&Math.abs(F.getVelocity())>(cc(V)?V:2500)&&(ic(F.callbackAnimation),H?H.progress(1):ic(r,Oe==="reverse"?1:!Ee,1))):G&&c&&!Si&&c(F)}if($t){var bn=D?ce/D.duration()*(D._caScrollDist||0):ce;Et(bn+(nt._isFlipped?1:0)),$t(bn)}Wt&&Wt(-ce/D.duration()*(D._caScrollDist||0))}},F.enable=function(Ht,me){F.enabled||(F.enabled=!0,oi(W,"resize",fc),at||oi(W,"scroll",Ul),B&&oi(o,"refreshInit",B),Ht!==!1&&(F.progress=et=0,qt=_e=St=ot()),me!==!1&&F.refresh())},F.getTween=function(Ht){return Ht&&At?At.tween:H},F.setPositions=function(Ht,me,ae,ce){if(D){var gn=D.scrollTrigger,Ee=D.duration(),fn=gn.end-gn.start;Ht=gn.start+fn*Ht/Ee,me=gn.start+fn*me/Ee}F.refresh(!1,!1,{start:A1(Ht,ae&&!!F._startClamp),end:A1(me,ae&&!!F._endClamp)},ce),F.update()},F.adjustPinSpacing=function(Ht){if(zt&&Ht){var me=zt.indexOf(T.d)+1;zt[me]=parseFloat(zt[me])+Ht+jn,zt[1]=parseFloat(zt[1])+Ht+jn,Xl(zt)}},F.disable=function(Ht,me){if(F.enabled&&(Ht!==!1&&F.revert(!0,!0),F.enabled=F.isActive=!1,me||H&&H.pause(),Mt=0,Nt&&(Nt.uncache=1),B&&si(o,"refreshInit",B),Ct&&(Ct.pause(),At.tween&&At.tween.kill()&&(At.tween=0)),!at)){for(var ae=De.length;ae--;)if(De[ae].scroller===W&&De[ae]!==F)return;si(W,"resize",fc),at||si(W,"scroll",Ul)}},F.kill=function(Ht,me){F.disable(Ht,me),H&&!me&&H.kill(),p&&delete D_[p];var ae=De.indexOf(F);ae>=0&&De.splice(ae,1),ae===Ui&&Yh>0&&Ui--,ae=0,De.forEach(function(ce){return ce.scroller===F.scroller&&(ae=1)}),ae||Li||(F.scroll.rec=0),r&&(r.scrollTrigger=null,Ht&&r.revert({kill:!1}),me||r.kill()),X&&[X,se,nt,ge].forEach(function(ce){return ce.parentNode&&ce.parentNode.removeChild(ce)}),Ec===F&&(Ec=0),v&&(Nt&&(Nt.uncache=1),ae=0,De.forEach(function(ce){return ce.pin===v&&ae++}),ae||(Nt.spacer=0)),a.onKill&&a.onKill(F)},De.push(F),F.enable(!1,!1),le&&le(F),r&&r.add&&!Bt){var xe=F.update;F.update=function(){F.update=xe,Le.cache++,Ot||ee||F.refresh()},Jt.delayedCall(.01,F.update),Bt=.01,Ot=ee=0}else F.refresh();v&&JU()},o.register=function(a){return Ll||(Jt=a||DM(),wM()&&window.document&&o.enable(),Ll=lc),Ll},o.defaults=function(a){if(a)for(var r in a)Dh[r]=a[r];return Dh},o.disable=function(a,r){lc=0,De.forEach(function(c){return c[r?"kill":"disable"](a)}),si(Ue,"wheel",Ul),si(Sn,"scroll",Ul),clearInterval(Th),si(Sn,"touchcancel",Qa),si(nn,"touchstart",Qa),Ch(si,Sn,"pointerdown,touchstart,mousedown",R1),Ch(si,Sn,"pointerup,touchend,mouseup",C1),sd.kill(),Rh(si);for(var l=0;l<Le.length;l+=3)wh(si,Le[l],Le[l+1]),wh(si,Le[l],Le[l+2])},o.enable=function(){if(Ue=window,Sn=document,la=Sn.documentElement,nn=Sn.body,Jt&&(Fc=Jt.utils.toArray,vc=Jt.utils.clamp,C_=Jt.core.context||Qa,hm=Jt.core.suppressOverwrites||Qa,ug=Ue.history.scrollRestoration||"auto",U_=Ue.pageYOffset||0,Jt.core.globals("ScrollTrigger",o),nn)){lc=1,kl=document.createElement("div"),kl.style.height="100vh",kl.style.position="absolute",IM(),WU(),Bn.register(Jt),o.isTouch=Bn.isTouch,Ts=Bn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),R_=Bn.isTouch===1,oi(Ue,"wheel",Ul),lg=[Ue,Sn,la,nn],Jt.matchMedia?(o.matchMedia=function(h){var _=Jt.matchMedia(),g;for(g in h)_.add(g,h[g]);return _},Jt.addEventListener("matchMediaInit",function(){return mg()}),Jt.addEventListener("matchMediaRevert",function(){return FM()}),Jt.addEventListener("matchMedia",function(){bo(0,1),zo("matchMedia")}),Jt.matchMedia().add("(orientation: portrait)",function(){return _m(),_m})):console.warn("Requires GSAP 3.11.0 or later"),_m(),oi(Sn,"scroll",Ul);var a=nn.hasAttribute("style"),r=nn.style,l=r.borderTopStyle,c=Jt.core.Animation.prototype,f,p;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",f=zr(nn),Kn.m=Math.round(f.top+Kn.sc())||0,Oi.m=Math.round(f.left+Oi.sc())||0,l?r.borderTopStyle=l:r.removeProperty("border-top-style"),a||(nn.setAttribute("style",""),nn.removeAttribute("style")),Th=setInterval(U1,250),Jt.delayedCall(.5,function(){return Ah=0}),oi(Sn,"touchcancel",Qa),oi(nn,"touchstart",Qa),Ch(oi,Sn,"pointerdown,touchstart,mousedown",R1),Ch(oi,Sn,"pointerup,touchend,mouseup",C1),A_=Jt.utils.checkPrefix("transform"),qh.push(A_),Ll=yi(),sd=Jt.delayedCall(.2,bo).pause(),Nl=[Sn,"visibilitychange",function(){var h=Ue.innerWidth,_=Ue.innerHeight;Sn.hidden?(M1=h,E1=_):(M1!==h||E1!==_)&&fc()},Sn,"DOMContentLoaded",bo,Ue,"load",bo,Ue,"resize",fc],Rh(oi),De.forEach(function(h){return h.enable(0,1)}),p=0;p<Le.length;p+=3)wh(si,Le[p],Le[p+1]),wh(si,Le[p],Le[p+2])}},o.config=function(a){"limitCallbacks"in a&&(dm=!!a.limitCallbacks);var r=a.syncInterval;r&&clearInterval(Th)||(Th=r)&&setInterval(U1,r),"ignoreMobileResize"in a&&(R_=o.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Rh(si)||Rh(oi,a.autoRefreshEvents||"none"),AM=(a.autoRefreshEvents+"").indexOf("resize")===-1)},o.scrollerProxy=function(a,r){var l=ki(a),c=Le.indexOf(l),f=Oo(l);~c&&Le.splice(c,f?6:2),r&&(f?ar.unshift(Ue,r,nn,r,la,r):ar.unshift(l,r))},o.clearMatchMedia=function(a){De.forEach(function(r){return r._ctx&&r._ctx.query===a&&r._ctx.kill(!0,!0)})},o.isInViewport=function(a,r,l){var c=(sa(a)?ki(a):a).getBoundingClientRect(),f=c[l?Co:wo]*r||0;return l?c.right-f>0&&c.left+f<Ue.innerWidth:c.bottom-f>0&&c.top+f<Ue.innerHeight},o.positionInViewport=function(a,r,l){sa(a)&&(a=ki(a));var c=a.getBoundingClientRect(),f=c[l?Co:wo],p=r==null?f/2:r in ud?ud[r]*f:~r.indexOf("%")?parseFloat(r)*f/100:parseFloat(r)||0;return l?(c.left+p)/Ue.innerWidth:(c.top+p)/Ue.innerHeight},o.killAll=function(a){if(De.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),a!==!0){var r=Po.killAll||[];Po={},r.forEach(function(l){return l()})}},o})();Ne.version="3.13.0";Ne.saveStyles=function(o){return o?Fc(o).forEach(function(t){if(t&&t.style){var n=ra.indexOf(t);n>=0&&ra.splice(n,5),ra.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Jt.core.getCache(t),C_())}}):ra};Ne.revert=function(o,t){return mg(!o,t)};Ne.create=function(o,t){return new Ne(o,t)};Ne.refresh=function(o){return o?fc(!0):(Ll||Ne.register())&&bo(!0)};Ne.update=function(o){return++Le.cache&&Vr(o===!0?2:0)};Ne.clearScrollMemory=BM;Ne.maxScroll=function(o,t){return nr(o,t?Oi:Kn)};Ne.getScrollFunc=function(o,t){return Hs(ki(o),t?Oi:Kn)};Ne.getById=function(o){return D_[o]};Ne.getAll=function(){return De.filter(function(o){return o.vars.id!=="ScrollSmoother"})};Ne.isScrolling=function(){return!!Oa};Ne.snapDirectional=pg;Ne.addEventListener=function(o,t){var n=Po[o]||(Po[o]=[]);~n.indexOf(t)||n.push(t)};Ne.removeEventListener=function(o,t){var n=Po[o],a=n&&n.indexOf(t);a>=0&&n.splice(a,1)};Ne.batch=function(o,t){var n=[],a={},r=t.interval||.016,l=t.batchMax||1e9,c=function(h,_){var g=[],x=[],v=Jt.delayedCall(r,function(){_(g,x),g=[],x=[]}).pause();return function(M){g.length||v.restart(!0),g.push(M.trigger),x.push(M),l<=g.length&&v.progress(1)}},f;for(f in t)a[f]=f.substr(0,2)==="on"&&Mi(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return Mi(l)&&(l=l(),oi(Ne,"refresh",function(){return l=t.batchMax()})),Fc(o).forEach(function(p){var h={};for(f in a)h[f]=a[f];h.trigger=p,n.push(Ne.create(h))}),n};var F1=function(t,n,a,r){return n>r?t(r):n<0&&t(0),a>r?(r-n)/(a-n):a<0?n/(n-a):1},xm=function o(t,n){n===!0?t.style.removeProperty("touch-action"):t.style.touchAction=n===!0?"auto":n?"pan-"+n+(Bn.isTouch?" pinch-zoom":""):"none",t===la&&o(nn,n)},Oh={auto:1,scroll:1},iL=function(t){var n=t.event,a=t.target,r=t.axis,l=(n.changedTouches?n.changedTouches[0]:n).target,c=l._gsap||Jt.core.getCache(l),f=yi(),p;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==nn&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(Oh[(p=wa(l)).overflowY]||Oh[p.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==a&&!Oo(l)&&(Oh[(p=wa(l)).overflowY]||Oh[p.overflowX]),c._isScrollT=f}(c._isScroll||r==="x")&&(n.stopPropagation(),n._gsapAllow=!0)},GM=function(t,n,a,r){return Bn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:n,onWheel:r=r&&iL,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return a&&oi(Sn,Bn.eventTypes[0],I1,!1,!0)},onDisable:function(){return si(Sn,Bn.eventTypes[0],I1,!0)}})},aL=/(input|label|select|textarea)/i,B1,I1=function(t){var n=aL.test(t.target.tagName);(n||B1)&&(t._gsapAllow=!0,B1=n)},rL=function(t){go(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var n=t,a=n.normalizeScrollX,r=n.momentum,l=n.allowNestedScroll,c=n.onRelease,f,p,h=ki(t.target)||la,_=Jt.core.globals().ScrollSmoother,g=_&&_.get(),x=Ts&&(t.content&&ki(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),v=Hs(h,Kn),M=Hs(h,Oi),b=1,y=(Bn.isTouch&&Ue.visualViewport?Ue.visualViewport.scale*Ue.visualViewport.width:Ue.outerWidth)/Ue.innerWidth,S=0,w=Mi(r)?function(){return r(f)}:function(){return r||2.8},C,U,P=GM(h,t.type,!0,l),L=function(){return U=!1},D=Qa,V=Qa,A=function(){p=nr(h,Kn),V=vc(Ts?1:0,p),a&&(D=vc(0,nr(h,Oi))),C=Do},T=function(){x._gsap.y=uc(parseFloat(x._gsap.y)+v.offset)+"px",x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(x._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},G=function(){if(U){requestAnimationFrame(L);var q=uc(f.deltaY/2),ft=V(v.v-q);if(x&&ft!==v.v+v.offset){v.offset=ft-v.v;var F=uc((parseFloat(x&&x._gsap.y)||0)-v.offset);x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",x._gsap.y=F+"px",v.cacheID=Le.cache,Vr()}return!0}v.offset&&T(),U=!0},W,it,at,J,z=function(){A(),W.isActive()&&W.vars.scrollY>p&&(v()>p?W.progress(1)&&v(p):W.resetTo("scrollY",p))};return x&&Jt.set(x,{y:"+=0"}),t.ignoreCheck=function(k){return Ts&&k.type==="touchmove"&&G()||b>1.05&&k.type!=="touchstart"||f.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){U=!1;var k=b;b=uc((Ue.visualViewport&&Ue.visualViewport.scale||1)/y),W.pause(),k!==b&&xm(h,b>1.01?!0:a?!1:"x"),it=M(),at=v(),A(),C=Do},t.onRelease=t.onGestureStart=function(k,q){if(v.offset&&T(),!q)J.restart(!0);else{Le.cache++;var ft=w(),F,B;a&&(F=M(),B=F+ft*.05*-k.velocityX/.227,ft*=F1(M,F,B,nr(h,Oi)),W.vars.scrollX=D(B)),F=v(),B=F+ft*.05*-k.velocityY/.227,ft*=F1(v,F,B,nr(h,Kn)),W.vars.scrollY=V(B),W.invalidate().duration(ft).play(.01),(Ts&&W.vars.scrollY>=p||F>=p-1)&&Jt.to({},{onUpdate:z,duration:ft})}c&&c(k)},t.onWheel=function(){W._ts&&W.pause(),yi()-S>1e3&&(C=0,S=yi())},t.onChange=function(k,q,ft,F,B){if(Do!==C&&A(),q&&a&&M(D(F[2]===q?it+(k.startX-k.x):M()+q-F[1])),ft){v.offset&&T();var rt=B[2]===ft,xt=rt?at+k.startY-k.y:v()+ft-B[1],St=V(xt);rt&&xt!==St&&(at+=St-xt),v(St)}(ft||q)&&Vr()},t.onEnable=function(){xm(h,a?!1:"x"),Ne.addEventListener("refresh",z),oi(Ue,"resize",z),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=M.smooth=!1),P.enable()},t.onDisable=function(){xm(h,!0),si(Ue,"resize",z),Ne.removeEventListener("refresh",z),P.kill()},t.lockAxis=t.lockAxis!==!1,f=new Bn(t),f.iOS=Ts,Ts&&!v()&&v(1),Ts&&Jt.ticker.add(Qa),J=f._dc,W=Jt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:HM(v,v(),function(){return W.pause()})},onUpdate:Vr,onComplete:J.vars.onComplete}),f};Ne.sort=function(o){if(Mi(o))return De.sort(o);var t=Ue.pageYOffset||0;return Ne.getAll().forEach(function(n){return n._sortY=n.trigger?t+n.trigger.getBoundingClientRect().top:n.start+Ue.innerHeight}),De.sort(o||function(n,a){return(n.vars.refreshPriority||0)*-1e6+(n.vars.containerAnimation?1e6:n._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};Ne.observe=function(o){return new Bn(o)};Ne.normalizeScroll=function(o){if(typeof o>"u")return Di;if(o===!0&&Di)return Di.enable();if(o===!1){Di&&Di.kill(),Di=o;return}var t=o instanceof Bn?o:rL(o);return Di&&Di.target===t.target&&Di.kill(),Oo(t.target)&&(Di=t),t};Ne.core={_getVelocityProp:T_,_inputObserver:GM,_scrollers:Le,_proxies:ar,bridge:{ss:function(){Oa||zo("scrollStart"),Oa=yi()},ref:function(){return Si}}};DM()&&Jt.registerPlugin(Ne);mc.registerPlugin(Ne);const H1=({children:o,scrollContainerRef:t,enableBlur:n=!0,baseOpacity:a=.1,baseRotation:r=3,blurStrength:l=4,containerClassName:c="",textClassName:f="",rotationEnd:p="bottom bottom",wordAnimationEnd:h="bottom bottom"})=>{const _=Ye.useRef(null),g=Ye.useMemo(()=>(typeof o=="string"?o:"").split(/(\s+)/).map((v,M)=>v.match(/^\s+$/)?v:we.jsx("span",{className:"word",children:v},M)),[o]);return Ye.useEffect(()=>{const x=_.current;if(!x)return;const v=t&&t.current?t.current:window;mc.fromTo(x,{transformOrigin:"0% 50%",rotate:r},{ease:"none",rotate:0,scrollTrigger:{trigger:x,scroller:v,start:"top bottom",end:p,scrub:!0}});const M=x.querySelectorAll(".word");return mc.fromTo(M,{opacity:a,willChange:"opacity"},{ease:"none",opacity:1,stagger:.05,scrollTrigger:{trigger:x,scroller:v,start:"top bottom-=20%",end:h,scrub:!0}}),n&&mc.fromTo(M,{filter:`blur(${l}px)`},{ease:"none",filter:"blur(0px)",stagger:.05,scrollTrigger:{trigger:x,scroller:v,start:"top bottom-=20%",end:h,scrub:!0}}),()=>{Ne.getAll().forEach(b=>b.kill())}},[t,n,r,a,p,h,l]),we.jsx("h2",{ref:_,className:`scroll-reveal ${c}`,children:we.jsx("p",{className:`scroll-reveal-text ${f}`,children:g})})};function sL(){const[o,t]=Ye.useState(!1),[n,a]=Ye.useState(!0),r=Ye.useRef(null),[l,c]=Ye.useState(!1),f=Ye.useRef(null);return Ye.useEffect(()=>{const p=h=>{l&&h.preventDefault()};return window.addEventListener("wheel",p,{passive:!1}),window.addEventListener("touchmove",p,{passive:!1}),()=>{window.removeEventListener("wheel",p),window.removeEventListener("touchmove",p)}},[l]),Ye.useEffect(()=>{const p=new c3({duration:5,easing:_=>Math.min(1,1.001-Math.pow(2,-10*_)),direction:"vertical",gestureDirection:"vertical",smooth:!0,mouseMultiplier:.08,smoothTouch:!1,touchMultiplier:1,infinite:!1});f.current=p;function h(_){if(l){requestAnimationFrame(h);return}p.raf(_),requestAnimationFrame(h)}return requestAnimationFrame(h),()=>{p.destroy()}},[l]),Ye.useEffect(()=>{f.current&&(l?f.current.stop():f.current.start())},[l]),Ye.useEffect(()=>{const p=()=>{const h=window.scrollY,_=window.innerHeight,g=0,x=_*.8;let v=1-(h-g)/(x-g);v=Math.max(0,Math.min(1,v)),r.current&&(r.current.style.opacity=v,r.current.style.pointerEvents=v>0?"auto":"none"),v<=0&&n?a(!1):v>0&&!n&&a(!0),h>_*.8?t(!0):t(!1)};return window.addEventListener("scroll",p),p(),()=>window.removeEventListener("scroll",p)},[n]),we.jsxs(we.Fragment,{children:[we.jsxs("div",{className:"content-wrapper",children:[we.jsxs("header",{className:"top-bar",children:[we.jsx("div",{className:"logo",children:"TzuChi"})," ",we.jsx("div",{className:"center-top"}),we.jsxs("div",{className:"date-location",children:["Created",we.jsx("br",{}),"2025/11/21"]})]}),we.jsxs("main",{className:"center-content",children:[we.jsx("h1",{children:"Aaron Preston"}),we.jsx("h2",{children:"李宜倖"}),we.jsx("div",{className:"role",children:"Year 2"})]}),we.jsx("div",{})]}),we.jsx("div",{style:{width:"100%",height:"800px",backgroundColor:"#000",zIndex:2}}),we.jsx("div",{style:{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,background:"linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 20%)",marginTop:"-20vh",paddingTop:"20vh"},children:we.jsxs("div",{style:{position:"relative",height:"800px",width:"100%",display:"flex",flexDirection:"column"},children:[we.jsx("div",{style:{position:"relative",flex:1,width:"100%"},children:we.jsx(a1,{text:"MY DREAM",flex:!0,alpha:!1,stroke:!0,width:!0,weight:!0,italic:!0,textColor:"#ffffff",strokeColor:"#ff0000",minFontSize:36,active:!0})}),we.jsx("div",{style:{position:"relative",height:"100vh",flex:1,width:"100%"},children:we.jsx(a1,{text:"IN 5 YEARS??",flex:!0,alpha:!1,stroke:!0,width:!0,weight:!0,italic:!0,textColor:"#c8ff81ff",strokeColor:"#ffffffff",minFontSize:36,active:!0})})]})}),we.jsx("div",{style:{width:"100%",height:"50px",backgroundColor:"#000",zIndex:2}}),we.jsx("div",{style:{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,backgroundColor:"black",padding:"40px"},children:we.jsx("div",{style:{maxWidth:"800px",color:"white"},children:we.jsx(H1,{baseOpacity:.1,enableBlur:!1,baseRotation:35,blurStrength:5,children:"nothing"})})}),we.jsx("div",{style:{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,backgroundColor:"black",padding:"60px"},children:we.jsx("div",{style:{maxWidth:"1000px",color:"white"},children:we.jsx(H1,{baseOpacity:.2,enableBlur:!1,baseRotation:15,blurStrength:6,children:`---------But as how matthew said--------- "Every day, every week, every year of my life, my hero's always 10 years away. I'm never going to be my hero. I'm not going to attain that. I know I'm not, and that's just fine with me, because that keeps me with somebody to keep on chasing." - Matthew McConaughey's`})})}),we.jsx("div",{ref:r,style:{width:"100%",height:"100%",position:"fixed",top:0,left:0,zIndex:0,transition:"opacity 0.1s ease-out"},children:we.jsx(AD,{enabledWaves:["top","middle","bottom"],lineCount:[7,5,4],lineDistance:[20,22,18],bendRadius:10,bendStrength:-1,interactive:!0,parallax:!0,paused:!n})})]})}e3.createRoot(document.getElementById("root")).render(we.jsx(Ye.StrictMode,{children:we.jsx(sL,{})}));
