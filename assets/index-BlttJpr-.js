function Qc(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Kc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xc={exports:{}},Qi={},Yc={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _o=Symbol.for("react.element"),Qp=Symbol.for("react.portal"),Kp=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Yp=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),Zp=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),nh=Symbol.for("react.memo"),th=Symbol.for("react.lazy"),du=Symbol.iterator;function rh(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var Gc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Jc={};function Cr(e,n,t){this.props=e,this.context=n,this.refs=Jc,this.updater=t||Gc}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ed(){}ed.prototype=Cr.prototype;function Yl(e,n,t){this.props=e,this.context=n,this.refs=Jc,this.updater=t||Gc}var Gl=Yl.prototype=new ed;Gl.constructor=Yl;Zc(Gl,Cr.prototype);Gl.isPureReactComponent=!0;var fu=Array.isArray,nd=Object.prototype.hasOwnProperty,Zl={current:null},td={key:!0,ref:!0,__self:!0,__source:!0};function rd(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)nd.call(n,r)&&!td.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:_o,type:e,key:i,ref:a,props:o,_owner:Zl.current}}function oh(e,n){return{$$typeof:_o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===_o}function ih(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var pu=/\/+/g;function va(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ih(""+e.key):n.toString(36)}function li(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case _o:case Qp:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+va(a,0):r,fu(o)?(t="",e!=null&&(t=e.replace(pu,"$&/")+"/"),li(o,n,t,"",function(u){return u})):o!=null&&(Jl(o)&&(o=oh(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(pu,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",fu(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+va(i,l);a+=li(i,n,t,s,o)}else if(s=rh(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+va(i,l++),a+=li(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function $o(e,n,t){if(e==null)return e;var r=[],o=0;return li(e,r,"","",function(i){return n.call(t,i,o++)}),r}function ah(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var qe={current:null},si={transition:null},lh={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:si,ReactCurrentOwner:Zl};function od(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:$o,forEach:function(e,n,t){$o(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return $o(e,function(){n++}),n},toArray:function(e){return $o(e,function(n){return n})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Cr;K.Fragment=Kp;K.Profiler=Yp;K.PureComponent=Yl;K.StrictMode=Xp;K.Suspense=eh;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lh;K.act=od;K.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zc({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Zl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)nd.call(n,s)&&!td.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_o,type:e.type,key:o,ref:i,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:Zp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Gp,_context:e},e.Consumer=e};K.createElement=rd;K.createFactory=function(e){var n=rd.bind(null,e);return n.type=e,n};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Jp,render:e}};K.isValidElement=Jl;K.lazy=function(e){return{$$typeof:th,_payload:{_status:-1,_result:e},_init:ah}};K.memo=function(e,n){return{$$typeof:nh,type:e,compare:n===void 0?null:n}};K.startTransition=function(e){var n=si.transition;si.transition={};try{e()}finally{si.transition=n}};K.unstable_act=od;K.useCallback=function(e,n){return qe.current.useCallback(e,n)};K.useContext=function(e){return qe.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return qe.current.useDeferredValue(e)};K.useEffect=function(e,n){return qe.current.useEffect(e,n)};K.useId=function(){return qe.current.useId()};K.useImperativeHandle=function(e,n,t){return qe.current.useImperativeHandle(e,n,t)};K.useInsertionEffect=function(e,n){return qe.current.useInsertionEffect(e,n)};K.useLayoutEffect=function(e,n){return qe.current.useLayoutEffect(e,n)};K.useMemo=function(e,n){return qe.current.useMemo(e,n)};K.useReducer=function(e,n,t){return qe.current.useReducer(e,n,t)};K.useRef=function(e){return qe.current.useRef(e)};K.useState=function(e){return qe.current.useState(e)};K.useSyncExternalStore=function(e,n,t){return qe.current.useSyncExternalStore(e,n,t)};K.useTransition=function(){return qe.current.useTransition()};K.version="18.3.1";Yc.exports=K;var E=Yc.exports;const We=Kc(E),sh=Qc({__proto__:null,default:We},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=E,ch=Symbol.for("react.element"),dh=Symbol.for("react.fragment"),fh=Object.prototype.hasOwnProperty,ph=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hh={key:!0,ref:!0,__self:!0,__source:!0};function id(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)fh.call(n,r)&&!hh.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:ch,type:e,key:i,ref:a,props:o,_owner:ph.current}}Qi.Fragment=dh;Qi.jsx=id;Qi.jsxs=id;Xc.exports=Qi;var $=Xc.exports,Xa={},ad={exports:{}},an={},ld={exports:{}},sd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(M,H){var q=M.length;M.push(H);e:for(;0<q;){var G=q-1>>>1,ae=M[G];if(0<o(ae,H))M[G]=H,M[q]=ae,q=G;else break e}}function t(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var H=M[0],q=M.pop();if(q!==H){M[0]=q;e:for(var G=0,ae=M.length,On=ae>>>1;G<On;){var Re=2*(G+1)-1,mn=M[Re],Ie=Re+1,Wt=M[Ie];if(0>o(mn,q))Ie<ae&&0>o(Wt,mn)?(M[G]=Wt,M[Ie]=q,G=Ie):(M[G]=mn,M[Re]=q,G=Re);else if(Ie<ae&&0>o(Wt,q))M[G]=Wt,M[Ie]=q,G=Ie;else break e}}return H}function o(M,H){var q=M.sortIndex-H.sortIndex;return q!==0?q:M.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,c=null,p=3,k=!1,x=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var H=t(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=M)r(u),H.sortIndex=H.expirationTime,n(s,H);else break;H=t(u)}}function S(M){if(m=!1,g(M),!x)if(t(s)!==null)x=!0,Yn(C);else{var H=t(u);H!==null&&ce(S,H.startTime-M)}}function C(M,H){x=!1,m&&(m=!1,h(z),z=-1),k=!0;var q=p;try{for(g(H),c=t(s);c!==null&&(!(c.expirationTime>H)||M&&!Y());){var G=c.callback;if(typeof G=="function"){c.callback=null,p=c.priorityLevel;var ae=G(c.expirationTime<=H);H=e.unstable_now(),typeof ae=="function"?c.callback=ae:c===t(s)&&r(s),g(H)}else r(s);c=t(s)}if(c!==null)var On=!0;else{var Re=t(u);Re!==null&&ce(S,Re.startTime-H),On=!1}return On}finally{c=null,p=q,k=!1}}var y=!1,R=null,z=-1,D=5,j=-1;function Y(){return!(e.unstable_now()-j<D)}function ue(){if(R!==null){var M=e.unstable_now();j=M;var H=!0;try{H=R(!0,M)}finally{H?Ce():(y=!1,R=null)}}else y=!1}var Ce;if(typeof d=="function")Ce=function(){d(ue)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Cn=re.port2;re.port1.onmessage=ue,Ce=function(){Cn.postMessage(null)}}else Ce=function(){_(ue,0)};function Yn(M){R=M,y||(y=!0,Ce())}function ce(M,H){z=_(function(){M(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Yn(C))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var q=p;p=H;try{return M()}finally{p=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var q=p;p=M;try{return H()}finally{p=q}},e.unstable_scheduleCallback=function(M,H,q){var G=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?G+q:G):q=G,M){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=q+ae,M={id:f++,callback:H,priorityLevel:M,startTime:q,expirationTime:ae,sortIndex:-1},q>G?(M.sortIndex=q,n(u,M),t(s)===null&&M===t(u)&&(m?(h(z),z=-1):m=!0,ce(S,q-G))):(M.sortIndex=ae,n(s,M),x||k||(x=!0,Yn(C))),M},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(M){var H=p;return function(){var q=p;p=H;try{return M.apply(this,arguments)}finally{p=q}}}})(sd);ld.exports=sd;var mh=ld.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh=E,on=mh;function O(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ud=new Set,ao={};function qt(e,n){br(e,n),br(e+"Capture",n)}function br(e,n){for(ao[e]=n,e=0;e<n.length;e++)ud.add(n[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hu={},mu={};function yh(e){return Ya.call(mu,e)?!0:Ya.call(hu,e)?!1:vh.test(e)?mu[e]=!0:(hu[e]=!0,!1)}function bh(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xh(e,n,t,r){if(n===null||typeof n>"u"||bh(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ve(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Le[n]=new Ve(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var es=/[\-:]([a-z])/g;function ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(es,ns);Le[n]=new Ve(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(es,ns);Le[n]=new Ve(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(es,ns);Le[n]=new Ve(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function ts(e,n,t,r){var o=Le.hasOwnProperty(n)?Le[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xh(n,t,o,r)&&(t=null),r||o===null?yh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Kn=gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),er=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),rs=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),dd=Symbol.for("react.context"),os=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),Ja=Symbol.for("react.suspense_list"),is=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),fd=Symbol.for("react.offscreen"),gu=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,ya;function Vr(e){if(ya===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ya=n&&n[1]||""}return`
`+ya+e}var ba=!1;function xa(e,n){if(!e||ba)return"";ba=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{ba=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vr(e):""}function wh(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=xa(e.type,!1),e;case 11:return e=xa(e.type.render,!1),e;case 1:return e=xa(e.type,!0),e;default:return""}}function el(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case er:return"Portal";case Ga:return"Profiler";case rs:return"StrictMode";case Za:return"Suspense";case Ja:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dd:return(e.displayName||"Context")+".Consumer";case cd:return(e._context.displayName||"Context")+".Provider";case os:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case is:return n=e.displayName||null,n!==null?n:el(e.type)||"Memo";case rt:n=e._payload,e=e._init;try{return el(e(n))}catch{}}return null}function kh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return el(n);case 8:return n===rs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Sh(e){var n=pd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ho(e){e._valueTracker||(e._valueTracker=Sh(e))}function hd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=pd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function wi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,n){var t=n.checked;return ve({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function vu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function md(e,n){n=n.checked,n!=null&&ts(e,"checked",n,!1)}function tl(e,n){md(e,n);var t=vt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?rl(e,n.type,t):n.hasOwnProperty("defaultValue")&&rl(e,n.type,vt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function yu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function rl(e,n,t){(n!=="number"||wi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Wr=Array.isArray;function pr(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function ol(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(O(91));return ve({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(O(92));if(Wr(t)){if(1<t.length)throw Error(O(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vt(t)}}function gd(e,n){var t=vt(n.value),r=vt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function xu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function vd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?vd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qo,yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function lo(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ph=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(e){Ph.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Gr[n]=Gr[e]})});function bd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Gr.hasOwnProperty(e)&&Gr[e]?(""+n).trim():n+"px"}function xd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=bd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var Eh=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(e,n){if(n){if(Eh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(O(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(O(61))}if(n.style!=null&&typeof n.style!="object")throw Error(O(62))}}function ll(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function as(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ul=null,hr=null,mr=null;function wu(e){if(e=zo(e)){if(typeof ul!="function")throw Error(O(280));var n=e.stateNode;n&&(n=Zi(n),ul(e.stateNode,e.type,n))}}function wd(e){hr?mr?mr.push(e):mr=[e]:hr=e}function kd(){if(hr){var e=hr,n=mr;if(mr=hr=null,wu(e),n)for(e=0;e<n.length;e++)wu(n[e])}}function Sd(e,n){return e(n)}function Pd(){}var wa=!1;function Ed(e,n,t){if(wa)return e(n,t);wa=!0;try{return Sd(e,n,t)}finally{wa=!1,(hr!==null||mr!==null)&&(Pd(),kd())}}function so(e,n){var t=e.stateNode;if(t===null)return null;var r=Zi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(O(231,n,typeof t));return t}var cl=!1;if(qn)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){cl=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{cl=!1}function _h(e,n,t,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Zr=!1,ki=null,Si=!1,dl=null,Ch={onError:function(e){Zr=!0,ki=e}};function Oh(e,n,t,r,o,i,a,l,s){Zr=!1,ki=null,_h.apply(Ch,arguments)}function zh(e,n,t,r,o,i,a,l,s){if(Oh.apply(this,arguments),Zr){if(Zr){var u=ki;Zr=!1,ki=null}else throw Error(O(198));Si||(Si=!0,dl=u)}}function Vt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function _d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ku(e){if(Vt(e)!==e)throw Error(O(188))}function Rh(e){var n=e.alternate;if(!n){if(n=Vt(e),n===null)throw Error(O(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return ku(o),e;if(i===r)return ku(o),n;i=i.sibling}throw Error(O(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(O(189))}}if(t.alternate!==r)throw Error(O(190))}if(t.tag!==3)throw Error(O(188));return t.stateNode.current===t?e:n}function Cd(e){return e=Rh(e),e!==null?Od(e):null}function Od(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Od(e);if(n!==null)return n;e=e.sibling}return null}var zd=on.unstable_scheduleCallback,Su=on.unstable_cancelCallback,Th=on.unstable_shouldYield,Dh=on.unstable_requestPaint,xe=on.unstable_now,Mh=on.unstable_getCurrentPriorityLevel,ls=on.unstable_ImmediatePriority,Rd=on.unstable_UserBlockingPriority,Pi=on.unstable_NormalPriority,Lh=on.unstable_LowPriority,Td=on.unstable_IdlePriority,Ki=null,Mn=null;function Nh(e){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(Ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:Ah,jh=Math.log,Fh=Math.LN2;function Ah(e){return e>>>=0,e===0?32:31-(jh(e)/Fh|0)|0}var Vo=64,Wo=4194304;function Qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ei(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=Qr(l):(i&=a,i!==0&&(r=Qr(i)))}else a=t&~o,a!==0?r=Qr(a):i!==0&&(r=Qr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Pn(n),o=1<<t,r|=e[t],n&=~o;return r}function Ih(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Pn(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=Ih(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dd(){var e=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),e}function ka(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Co(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Pn(n),e[n]=t}function $h(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-Pn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function ss(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Pn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var ee=0;function Md(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ld,us,Nd,jd,Fd,pl=!1,Qo=[],ut=null,ct=null,dt=null,uo=new Map,co=new Map,it=[],Bh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,n){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":uo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(n.pointerId)}}function jr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=zo(n),n!==null&&us(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Hh(e,n,t,r,o){switch(n){case"focusin":return ut=jr(ut,e,n,t,r,o),!0;case"dragenter":return ct=jr(ct,e,n,t,r,o),!0;case"mouseover":return dt=jr(dt,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return uo.set(i,jr(uo.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,co.set(i,jr(co.get(i)||null,e,n,t,r,o)),!0}return!1}function Ad(e){var n=Tt(e.target);if(n!==null){var t=Vt(n);if(t!==null){if(n=t.tag,n===13){if(n=_d(t),n!==null){e.blockedOn=n,Fd(e.priority,function(){Nd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ui(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=hl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);sl=r,t.target.dispatchEvent(r),sl=null}else return n=zo(t),n!==null&&us(n),e.blockedOn=t,!1;n.shift()}return!0}function Eu(e,n,t){ui(e)&&t.delete(n)}function qh(){pl=!1,ut!==null&&ui(ut)&&(ut=null),ct!==null&&ui(ct)&&(ct=null),dt!==null&&ui(dt)&&(dt=null),uo.forEach(Eu),co.forEach(Eu)}function Fr(e,n){e.blockedOn===n&&(e.blockedOn=null,pl||(pl=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,qh)))}function fo(e){function n(o){return Fr(o,e)}if(0<Qo.length){Fr(Qo[0],e);for(var t=1;t<Qo.length;t++){var r=Qo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&Fr(ut,e),ct!==null&&Fr(ct,e),dt!==null&&Fr(dt,e),uo.forEach(n),co.forEach(n),t=0;t<it.length;t++)r=it[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(t=it[0],t.blockedOn===null);)Ad(t),t.blockedOn===null&&it.shift()}var gr=Kn.ReactCurrentBatchConfig,_i=!0;function Vh(e,n,t,r){var o=ee,i=gr.transition;gr.transition=null;try{ee=1,cs(e,n,t,r)}finally{ee=o,gr.transition=i}}function Wh(e,n,t,r){var o=ee,i=gr.transition;gr.transition=null;try{ee=4,cs(e,n,t,r)}finally{ee=o,gr.transition=i}}function cs(e,n,t,r){if(_i){var o=hl(e,n,t,r);if(o===null)Da(e,n,r,Ci,t),Pu(e,r);else if(Hh(o,e,n,t,r))r.stopPropagation();else if(Pu(e,r),n&4&&-1<Bh.indexOf(e)){for(;o!==null;){var i=zo(o);if(i!==null&&Ld(i),i=hl(e,n,t,r),i===null&&Da(e,n,r,Ci,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Da(e,n,r,null,t)}}var Ci=null;function hl(e,n,t,r){if(Ci=null,e=as(r),e=Tt(e),e!==null)if(n=Vt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=_d(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ci=e,null}function Id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mh()){case ls:return 1;case Rd:return 4;case Pi:case Lh:return 16;case Td:return 536870912;default:return 16}default:return 16}}var lt=null,ds=null,ci=null;function Ud(){if(ci)return ci;var e,n=ds,t=n.length,r,o="value"in lt?lt.value:lt.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return ci=o.slice(e,1<r?1-r:void 0)}function di(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function _u(){return!1}function ln(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ko:_u,this.isPropagationStopped=_u,this}return ve(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=ln(Or),Oo=ve({},Or,{view:0,detail:0}),Qh=ln(Oo),Sa,Pa,Ar,Xi=ve({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ar&&(Ar&&e.type==="mousemove"?(Sa=e.screenX-Ar.screenX,Pa=e.screenY-Ar.screenY):Pa=Sa=0,Ar=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:Pa}}),Cu=ln(Xi),Kh=ve({},Xi,{dataTransfer:0}),Xh=ln(Kh),Yh=ve({},Oo,{relatedTarget:0}),Ea=ln(Yh),Gh=ve({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Zh=ln(Gh),Jh=ve({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=ln(Jh),nm=ve({},Or,{data:0}),Ou=ln(nm),tm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function im(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=om[e])?!!n[e]:!1}function ps(){return im}var am=ve({},Oo,{key:function(e){if(e.key){var n=tm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=ln(am),sm=ve({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zu=ln(sm),um=ve({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),cm=ln(um),dm=ve({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),fm=ln(dm),pm=ve({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=ln(pm),mm=[9,13,27,32],hs=qn&&"CompositionEvent"in window,Jr=null;qn&&"documentMode"in document&&(Jr=document.documentMode);var gm=qn&&"TextEvent"in window&&!Jr,$d=qn&&(!hs||Jr&&8<Jr&&11>=Jr),Ru=" ",Tu=!1;function Bd(e,n){switch(e){case"keyup":return mm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function vm(e,n){switch(e){case"compositionend":return Hd(n);case"keypress":return n.which!==32?null:(Tu=!0,Ru);case"textInput":return e=n.data,e===Ru&&Tu?null:e;default:return null}}function ym(e,n){if(tr)return e==="compositionend"||!hs&&Bd(e,n)?(e=Ud(),ci=ds=lt=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $d&&n.locale!=="ko"?null:n.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bm[e.type]:n==="textarea"}function qd(e,n,t,r){wd(r),n=Oi(n,"onChange"),0<n.length&&(t=new fs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var eo=null,po=null;function xm(e){nf(e,0)}function Yi(e){var n=ir(e);if(hd(n))return e}function wm(e,n){if(e==="change")return n}var Vd=!1;if(qn){var _a;if(qn){var Ca="oninput"in document;if(!Ca){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),Ca=typeof Mu.oninput=="function"}_a=Ca}else _a=!1;Vd=_a&&(!document.documentMode||9<document.documentMode)}function Lu(){eo&&(eo.detachEvent("onpropertychange",Wd),po=eo=null)}function Wd(e){if(e.propertyName==="value"&&Yi(po)){var n=[];qd(n,po,e,as(e)),Ed(xm,n)}}function km(e,n,t){e==="focusin"?(Lu(),eo=n,po=t,eo.attachEvent("onpropertychange",Wd)):e==="focusout"&&Lu()}function Sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(po)}function Pm(e,n){if(e==="click")return Yi(n)}function Em(e,n){if(e==="input"||e==="change")return Yi(n)}function _m(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:_m;function ho(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Ya.call(n,o)||!_n(e[o],n[o]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,n){var t=Nu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Nu(t)}}function Qd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(){for(var e=window,n=wi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=wi(e.document)}return n}function ms(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Cm(e){var n=Kd(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qd(t.ownerDocument.documentElement,t)){if(r!==null&&ms(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ju(t,i);var a=ju(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Om=qn&&"documentMode"in document&&11>=document.documentMode,rr=null,ml=null,no=null,gl=!1;function Fu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;gl||rr==null||rr!==wi(r)||(r=rr,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&ho(no,r)||(no=r,r=Oi(ml,"onSelect"),0<r.length&&(n=new fs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=rr)))}function Xo(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var or={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Oa={},Xd={};qn&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function Gi(e){if(Oa[e])return Oa[e];if(!or[e])return e;var n=or[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Xd)return Oa[e]=n[t];return e}var Yd=Gi("animationend"),Gd=Gi("animationiteration"),Zd=Gi("animationstart"),Jd=Gi("transitionend"),ef=new Map,Au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,n){ef.set(e,n),qt(n,[e])}for(var za=0;za<Au.length;za++){var Ra=Au[za],zm=Ra.toLowerCase(),Rm=Ra[0].toUpperCase()+Ra.slice(1);kt(zm,"on"+Rm)}kt(Yd,"onAnimationEnd");kt(Gd,"onAnimationIteration");kt(Zd,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(Jd,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kr));function Iu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,zh(r,n,void 0,e),e.currentTarget=null}function nf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Iu(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Iu(o,l,u),i=s}}}if(Si)throw e=dl,Si=!1,dl=null,e}function le(e,n){var t=n[wl];t===void 0&&(t=n[wl]=new Set);var r=e+"__bubble";t.has(r)||(tf(n,e,2,!1),t.add(r))}function Ta(e,n,t){var r=0;n&&(r|=4),tf(t,e,r,n)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Yo]){e[Yo]=!0,ud.forEach(function(t){t!=="selectionchange"&&(Tm.has(t)||Ta(t,!1,e),Ta(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yo]||(n[Yo]=!0,Ta("selectionchange",!1,n))}}function tf(e,n,t,r){switch(Id(n)){case 1:var o=Vh;break;case 4:o=Wh;break;default:o=cs}t=o.bind(null,n,t,e),o=void 0,!cl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Da(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=Tt(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Ed(function(){var u=i,f=as(t),c=[];e:{var p=ef.get(e);if(p!==void 0){var k=fs,x=e;switch(e){case"keypress":if(di(t)===0)break e;case"keydown":case"keyup":k=lm;break;case"focusin":x="focus",k=Ea;break;case"focusout":x="blur",k=Ea;break;case"beforeblur":case"afterblur":k=Ea;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Cu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=cm;break;case Yd:case Gd:case Zd:k=Zh;break;case Jd:k=fm;break;case"scroll":k=Qh;break;case"wheel":k=hm;break;case"copy":case"cut":case"paste":k=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=zu}var m=(n&4)!==0,_=!m&&e==="scroll",h=m?p!==null?p+"Capture":null:p;m=[];for(var d=u,g;d!==null;){g=d;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=so(d,h),S!=null&&m.push(go(d,S,g)))),_)break;d=d.return}0<m.length&&(p=new k(p,x,null,t,f),c.push({event:p,listeners:m}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",p&&t!==sl&&(x=t.relatedTarget||t.fromElement)&&(Tt(x)||x[Vn]))break e;if((k||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,k?(x=t.relatedTarget||t.toElement,k=u,x=x?Tt(x):null,x!==null&&(_=Vt(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=u),k!==x)){if(m=Cu,S="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(m=zu,S="onPointerLeave",h="onPointerEnter",d="pointer"),_=k==null?p:ir(k),g=x==null?p:ir(x),p=new m(S,d+"leave",k,t,f),p.target=_,p.relatedTarget=g,S=null,Tt(f)===u&&(m=new m(h,d+"enter",x,t,f),m.target=g,m.relatedTarget=_,S=m),_=S,k&&x)n:{for(m=k,h=x,d=0,g=m;g;g=Gt(g))d++;for(g=0,S=h;S;S=Gt(S))g++;for(;0<d-g;)m=Gt(m),d--;for(;0<g-d;)h=Gt(h),g--;for(;d--;){if(m===h||h!==null&&m===h.alternate)break n;m=Gt(m),h=Gt(h)}m=null}else m=null;k!==null&&Uu(c,p,k,m,!1),x!==null&&_!==null&&Uu(c,_,x,m,!0)}}e:{if(p=u?ir(u):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var C=wm;else if(Du(p))if(Vd)C=Em;else{C=Sm;var y=km}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Pm);if(C&&(C=C(e,u))){qd(c,C,t,f);break e}y&&y(e,p,u),e==="focusout"&&(y=p._wrapperState)&&y.controlled&&p.type==="number"&&rl(p,"number",p.value)}switch(y=u?ir(u):window,e){case"focusin":(Du(y)||y.contentEditable==="true")&&(rr=y,ml=u,no=null);break;case"focusout":no=ml=rr=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,Fu(c,t,f);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":Fu(c,t,f)}var R;if(hs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else tr?Bd(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&($d&&t.locale!=="ko"&&(tr||z!=="onCompositionStart"?z==="onCompositionEnd"&&tr&&(R=Ud()):(lt=f,ds="value"in lt?lt.value:lt.textContent,tr=!0)),y=Oi(u,z),0<y.length&&(z=new Ou(z,e,null,t,f),c.push({event:z,listeners:y}),R?z.data=R:(R=Hd(t),R!==null&&(z.data=R)))),(R=gm?vm(e,t):ym(e,t))&&(u=Oi(u,"onBeforeInput"),0<u.length&&(f=new Ou("onBeforeInput","beforeinput",null,t,f),c.push({event:f,listeners:u}),f.data=R))}nf(c,n)})}function go(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Oi(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=so(e,t),i!=null&&r.unshift(go(e,i,o)),i=so(e,n),i!=null&&r.push(go(e,i,o))),e=e.return}return r}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uu(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=so(t,i),s!=null&&a.unshift(go(t,s,l))):o||(s=so(t,i),s!=null&&a.push(go(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Dm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function $u(e){return(typeof e=="string"?e:""+e).replace(Dm,`
`).replace(Mm,"")}function Go(e,n,t){if(n=$u(n),$u(e)!==n&&t)throw Error(O(425))}function zi(){}var vl=null,yl=null;function bl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,Bu=typeof Promise=="function"?Promise:void 0,Nm=typeof queueMicrotask=="function"?queueMicrotask:typeof Bu<"u"?function(e){return Bu.resolve(null).then(e).catch(jm)}:xl;function jm(e){setTimeout(function(){throw e})}function Ma(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),fo(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);fo(n)}function ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Hu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var zr=Math.random().toString(36).slice(2),Dn="__reactFiber$"+zr,vo="__reactProps$"+zr,Vn="__reactContainer$"+zr,wl="__reactEvents$"+zr,Fm="__reactListeners$"+zr,Am="__reactHandles$"+zr;function Tt(e){var n=e[Dn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Vn]||t[Dn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Hu(e);e!==null;){if(t=e[Dn])return t;e=Hu(e)}return n}e=t,t=e.parentNode}return null}function zo(e){return e=e[Dn]||e[Vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Zi(e){return e[vo]||null}var kl=[],ar=-1;function St(e){return{current:e}}function se(e){0>ar||(e.current=kl[ar],kl[ar]=null,ar--)}function ie(e,n){ar++,kl[ar]=e.current,e.current=n}var yt={},Ae=St(yt),Xe=St(!1),At=yt;function xr(e,n){var t=e.type.contextTypes;if(!t)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function Ri(){se(Xe),se(Ae)}function qu(e,n,t){if(Ae.current!==yt)throw Error(O(168));ie(Ae,n),ie(Xe,t)}function rf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(O(108,kh(e)||"Unknown",o));return ve({},t,r)}function Ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,At=Ae.current,ie(Ae,e),ie(Xe,Xe.current),!0}function Vu(e,n,t){var r=e.stateNode;if(!r)throw Error(O(169));t?(e=rf(e,n,At),r.__reactInternalMemoizedMergedChildContext=e,se(Xe),se(Ae),ie(Ae,e)):se(Xe),ie(Xe,t)}var Un=null,Ji=!1,La=!1;function of(e){Un===null?Un=[e]:Un.push(e)}function Im(e){Ji=!0,of(e)}function Pt(){if(!La&&Un!==null){La=!0;var e=0,n=ee;try{var t=Un;for(ee=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Un=null,Ji=!1}catch(o){throw Un!==null&&(Un=Un.slice(e+1)),zd(ls,Pt),o}finally{ee=n,La=!1}}return null}var lr=[],sr=0,Di=null,Mi=0,un=[],cn=0,It=null,$n=1,Bn="";function Ot(e,n){lr[sr++]=Mi,lr[sr++]=Di,Di=e,Mi=n}function af(e,n,t){un[cn++]=$n,un[cn++]=Bn,un[cn++]=It,It=e;var r=$n;e=Bn;var o=32-Pn(r)-1;r&=~(1<<o),t+=1;var i=32-Pn(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,$n=1<<32-Pn(n)+o|t<<o|r,Bn=i+e}else $n=1<<i|t<<o|r,Bn=e}function gs(e){e.return!==null&&(Ot(e,1),af(e,1,0))}function vs(e){for(;e===Di;)Di=lr[--sr],lr[sr]=null,Mi=lr[--sr],lr[sr]=null;for(;e===It;)It=un[--cn],un[cn]=null,Bn=un[--cn],un[cn]=null,$n=un[--cn],un[cn]=null}var rn=null,tn=null,pe=!1,wn=null;function lf(e,n){var t=dn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Wu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,tn=ft(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,tn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=It!==null?{id:$n,overflow:Bn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=dn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,tn=null,!0):!1;default:return!1}}function Sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(pe){var n=tn;if(n){var t=n;if(!Wu(e,n)){if(Sl(e))throw Error(O(418));n=ft(t.nextSibling);var r=rn;n&&Wu(e,n)?lf(r,t):(e.flags=e.flags&-4097|2,pe=!1,rn=e)}}else{if(Sl(e))throw Error(O(418));e.flags=e.flags&-4097|2,pe=!1,rn=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Zo(e){if(e!==rn)return!1;if(!pe)return Qu(e),pe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!bl(e.type,e.memoizedProps)),n&&(n=tn)){if(Sl(e))throw sf(),Error(O(418));for(;n;)lf(e,n),n=ft(n.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){tn=ft(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}tn=null}}else tn=rn?ft(e.stateNode.nextSibling):null;return!0}function sf(){for(var e=tn;e;)e=ft(e.nextSibling)}function wr(){tn=rn=null,pe=!1}function ys(e){wn===null?wn=[e]:wn.push(e)}var Um=Kn.ReactCurrentBatchConfig;function Ir(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(O(309));var r=t.stateNode}if(!r)throw Error(O(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(O(284));if(!t._owner)throw Error(O(290,e))}return e}function Jo(e,n){throw e=Object.prototype.toString.call(n),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ku(e){var n=e._init;return n(e._payload)}function uf(e){function n(h,d){if(e){var g=h.deletions;g===null?(h.deletions=[d],h.flags|=16):g.push(d)}}function t(h,d){if(!e)return null;for(;d!==null;)n(h,d),d=d.sibling;return null}function r(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function o(h,d){return h=gt(h,d),h.index=0,h.sibling=null,h}function i(h,d,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<d?(h.flags|=2,d):g):(h.flags|=2,d)):(h.flags|=1048576,d)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,d,g,S){return d===null||d.tag!==6?(d=$a(g,h.mode,S),d.return=h,d):(d=o(d,g),d.return=h,d)}function s(h,d,g,S){var C=g.type;return C===nr?f(h,d,g.props.children,S,g.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&Ku(C)===d.type)?(S=o(d,g.props),S.ref=Ir(h,d,g),S.return=h,S):(S=yi(g.type,g.key,g.props,null,h.mode,S),S.ref=Ir(h,d,g),S.return=h,S)}function u(h,d,g,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Ba(g,h.mode,S),d.return=h,d):(d=o(d,g.children||[]),d.return=h,d)}function f(h,d,g,S,C){return d===null||d.tag!==7?(d=Ft(g,h.mode,S,C),d.return=h,d):(d=o(d,g),d.return=h,d)}function c(h,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=$a(""+d,h.mode,g),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Bo:return g=yi(d.type,d.key,d.props,null,h.mode,g),g.ref=Ir(h,null,d),g.return=h,g;case er:return d=Ba(d,h.mode,g),d.return=h,d;case rt:var S=d._init;return c(h,S(d._payload),g)}if(Wr(d)||Lr(d))return d=Ft(d,h.mode,g,null),d.return=h,d;Jo(h,d)}return null}function p(h,d,g,S){var C=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(h,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bo:return g.key===C?s(h,d,g,S):null;case er:return g.key===C?u(h,d,g,S):null;case rt:return C=g._init,p(h,d,C(g._payload),S)}if(Wr(g)||Lr(g))return C!==null?null:f(h,d,g,S,null);Jo(h,g)}return null}function k(h,d,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,l(d,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bo:return h=h.get(S.key===null?g:S.key)||null,s(d,h,S,C);case er:return h=h.get(S.key===null?g:S.key)||null,u(d,h,S,C);case rt:var y=S._init;return k(h,d,g,y(S._payload),C)}if(Wr(S)||Lr(S))return h=h.get(g)||null,f(d,h,S,C,null);Jo(d,S)}return null}function x(h,d,g,S){for(var C=null,y=null,R=d,z=d=0,D=null;R!==null&&z<g.length;z++){R.index>z?(D=R,R=null):D=R.sibling;var j=p(h,R,g[z],S);if(j===null){R===null&&(R=D);break}e&&R&&j.alternate===null&&n(h,R),d=i(j,d,z),y===null?C=j:y.sibling=j,y=j,R=D}if(z===g.length)return t(h,R),pe&&Ot(h,z),C;if(R===null){for(;z<g.length;z++)R=c(h,g[z],S),R!==null&&(d=i(R,d,z),y===null?C=R:y.sibling=R,y=R);return pe&&Ot(h,z),C}for(R=r(h,R);z<g.length;z++)D=k(R,h,z,g[z],S),D!==null&&(e&&D.alternate!==null&&R.delete(D.key===null?z:D.key),d=i(D,d,z),y===null?C=D:y.sibling=D,y=D);return e&&R.forEach(function(Y){return n(h,Y)}),pe&&Ot(h,z),C}function m(h,d,g,S){var C=Lr(g);if(typeof C!="function")throw Error(O(150));if(g=C.call(g),g==null)throw Error(O(151));for(var y=C=null,R=d,z=d=0,D=null,j=g.next();R!==null&&!j.done;z++,j=g.next()){R.index>z?(D=R,R=null):D=R.sibling;var Y=p(h,R,j.value,S);if(Y===null){R===null&&(R=D);break}e&&R&&Y.alternate===null&&n(h,R),d=i(Y,d,z),y===null?C=Y:y.sibling=Y,y=Y,R=D}if(j.done)return t(h,R),pe&&Ot(h,z),C;if(R===null){for(;!j.done;z++,j=g.next())j=c(h,j.value,S),j!==null&&(d=i(j,d,z),y===null?C=j:y.sibling=j,y=j);return pe&&Ot(h,z),C}for(R=r(h,R);!j.done;z++,j=g.next())j=k(R,h,z,j.value,S),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?z:j.key),d=i(j,d,z),y===null?C=j:y.sibling=j,y=j);return e&&R.forEach(function(ue){return n(h,ue)}),pe&&Ot(h,z),C}function _(h,d,g,S){if(typeof g=="object"&&g!==null&&g.type===nr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Bo:e:{for(var C=g.key,y=d;y!==null;){if(y.key===C){if(C=g.type,C===nr){if(y.tag===7){t(h,y.sibling),d=o(y,g.props.children),d.return=h,h=d;break e}}else if(y.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rt&&Ku(C)===y.type){t(h,y.sibling),d=o(y,g.props),d.ref=Ir(h,y,g),d.return=h,h=d;break e}t(h,y);break}else n(h,y);y=y.sibling}g.type===nr?(d=Ft(g.props.children,h.mode,S,g.key),d.return=h,h=d):(S=yi(g.type,g.key,g.props,null,h.mode,S),S.ref=Ir(h,d,g),S.return=h,h=S)}return a(h);case er:e:{for(y=g.key;d!==null;){if(d.key===y)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(h,d.sibling),d=o(d,g.children||[]),d.return=h,h=d;break e}else{t(h,d);break}else n(h,d);d=d.sibling}d=Ba(g,h.mode,S),d.return=h,h=d}return a(h);case rt:return y=g._init,_(h,d,y(g._payload),S)}if(Wr(g))return x(h,d,g,S);if(Lr(g))return m(h,d,g,S);Jo(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(h,d.sibling),d=o(d,g),d.return=h,h=d):(t(h,d),d=$a(g,h.mode,S),d.return=h,h=d),a(h)):t(h,d)}return _}var kr=uf(!0),cf=uf(!1),Li=St(null),Ni=null,ur=null,bs=null;function xs(){bs=ur=Ni=null}function ws(e){var n=Li.current;se(Li),e._currentValue=n}function El(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function vr(e,n){Ni=e,bs=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ke=!0),e.firstContext=null)}function pn(e){var n=e._currentValue;if(bs!==e)if(e={context:e,memoizedValue:n,next:null},ur===null){if(Ni===null)throw Error(O(308));ur=e,Ni.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return n}var Dt=null;function ks(e){Dt===null?Dt=[e]:Dt.push(e)}function df(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,ks(n)):(t.next=o.next,o.next=t),n.interleaved=t,Wn(e,r)}function Wn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ot=!1;function Ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function pt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Wn(e,t)}return o=r.interleaved,o===null?(n.next=n,ks(r)):(n.next=o.next,o.next=n),r.interleaved=n,Wn(e,t)}function fi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ss(e,t)}}function Xu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ji(e,n,t,r){var o=e.updateQueue;ot=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;a=0,f=u=s=null,l=i;do{var p=l.lane,k=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,m=l;switch(p=n,k=t,m.tag){case 1:if(x=m.payload,typeof x=="function"){c=x.call(k,c,p);break e}c=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,p=typeof x=="function"?x.call(k,c,p):x,p==null)break e;c=ve({},c,p);break e;case 2:ot=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else k={eventTime:k,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=k,s=c):f=f.next=k,a|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(f===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);$t|=a,e.lanes=a,e.memoizedState=c}}function Yu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(O(191,o));o.call(r)}}}var Ro={},Ln=St(Ro),yo=St(Ro),bo=St(Ro);function Mt(e){if(e===Ro)throw Error(O(174));return e}function Ps(e,n){switch(ie(bo,n),ie(yo,e),ie(Ln,Ro),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:il(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=il(n,e)}se(Ln),ie(Ln,n)}function Sr(){se(Ln),se(yo),se(bo)}function pf(e){Mt(bo.current);var n=Mt(Ln.current),t=il(n,e.type);n!==t&&(ie(yo,e),ie(Ln,t))}function Es(e){yo.current===e&&(se(Ln),se(yo))}var me=St(0);function Fi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Na=[];function _s(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var pi=Kn.ReactCurrentDispatcher,ja=Kn.ReactCurrentBatchConfig,Ut=0,ge=null,Pe=null,Oe=null,Ai=!1,to=!1,xo=0,$m=0;function Ne(){throw Error(O(321))}function Cs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_n(e[t],n[t]))return!1;return!0}function Os(e,n,t,r,o,i){if(Ut=i,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,pi.current=e===null||e.memoizedState===null?Vm:Wm,e=t(r,o),to){i=0;do{if(to=!1,xo=0,25<=i)throw Error(O(301));i+=1,Oe=Pe=null,n.updateQueue=null,pi.current=Qm,e=t(r,o)}while(to)}if(pi.current=Ii,n=Pe!==null&&Pe.next!==null,Ut=0,Oe=Pe=ge=null,Ai=!1,n)throw Error(O(300));return e}function zs(){var e=xo!==0;return xo=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ge.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function hn(){if(Pe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=Oe===null?ge.memoizedState:Oe.next;if(n!==null)Oe=n,Pe=e;else{if(e===null)throw Error(O(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Oe===null?ge.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function wo(e,n){return typeof n=="function"?n(e):n}function Fa(e){var n=hn(),t=n.queue;if(t===null)throw Error(O(311));t.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var f=u.lane;if((Ut&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=c,a=r):s=s.next=c,ge.lanes|=f,$t|=f}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,_n(r,n.memoizedState)||(Ke=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,ge.lanes|=i,$t|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Aa(e){var n=hn(),t=n.queue;if(t===null)throw Error(O(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);_n(i,n.memoizedState)||(Ke=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function hf(){}function mf(e,n){var t=ge,r=hn(),o=n(),i=!_n(r.memoizedState,o);if(i&&(r.memoizedState=o,Ke=!0),r=r.queue,Rs(yf.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Oe!==null&&Oe.memoizedState.tag&1){if(t.flags|=2048,ko(9,vf.bind(null,t,r,o,n),void 0,null),ze===null)throw Error(O(349));Ut&30||gf(t,n,o)}return o}function gf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function vf(e,n,t,r){n.value=t,n.getSnapshot=r,bf(n)&&xf(e)}function yf(e,n,t){return t(function(){bf(n)&&xf(e)})}function bf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_n(e,t)}catch{return!0}}function xf(e){var n=Wn(e,1);n!==null&&En(n,e,1,-1)}function Gu(e){var n=Tn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},n.queue=e,e=e.dispatch=qm.bind(null,ge,e),[n.memoizedState,e]}function ko(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function wf(){return hn().memoizedState}function hi(e,n,t,r){var o=Tn();ge.flags|=e,o.memoizedState=ko(1|n,t,void 0,r===void 0?null:r)}function ea(e,n,t,r){var o=hn();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var a=Pe.memoizedState;if(i=a.destroy,r!==null&&Cs(r,a.deps)){o.memoizedState=ko(n,t,i,r);return}}ge.flags|=e,o.memoizedState=ko(1|n,t,i,r)}function Zu(e,n){return hi(8390656,8,e,n)}function Rs(e,n){return ea(2048,8,e,n)}function kf(e,n){return ea(4,2,e,n)}function Sf(e,n){return ea(4,4,e,n)}function Pf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ef(e,n,t){return t=t!=null?t.concat([e]):null,ea(4,4,Pf.bind(null,n,e),t)}function Ts(){}function _f(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Cs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Cf(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Cs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Of(e,n,t){return Ut&21?(_n(t,n)||(t=Dd(),ge.lanes|=t,$t|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=t)}function Bm(e,n){var t=ee;ee=t!==0&&4>t?t:4,e(!0);var r=ja.transition;ja.transition={};try{e(!1),n()}finally{ee=t,ja.transition=r}}function zf(){return hn().memoizedState}function Hm(e,n,t){var r=mt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Rf(e))Tf(n,t);else if(t=df(e,n,t,r),t!==null){var o=He();En(t,e,r,o),Df(t,n,r)}}function qm(e,n,t){var r=mt(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Rf(e))Tf(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,_n(l,a)){var s=n.interleaved;s===null?(o.next=o,ks(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=df(e,n,o,r),t!==null&&(o=He(),En(t,e,r,o),Df(t,n,r))}}function Rf(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function Tf(e,n){to=Ai=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Df(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ss(e,t)}}var Ii={readContext:pn,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},Vm={readContext:pn,useCallback:function(e,n){return Tn().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Zu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,hi(4194308,4,Pf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return hi(4194308,4,e,n)},useInsertionEffect:function(e,n){return hi(4,2,e,n)},useMemo:function(e,n){var t=Tn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Tn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Hm.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var n=Tn();return e={current:e},n.memoizedState=e},useState:Gu,useDebugValue:Ts,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=Gu(!1),n=e[0];return e=Bm.bind(null,e[1]),Tn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ge,o=Tn();if(pe){if(t===void 0)throw Error(O(407));t=t()}else{if(t=n(),ze===null)throw Error(O(349));Ut&30||gf(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Zu(yf.bind(null,r,i,e),[e]),r.flags|=2048,ko(9,vf.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Tn(),n=ze.identifierPrefix;if(pe){var t=Bn,r=$n;t=(r&~(1<<32-Pn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=xo++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$m++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Wm={readContext:pn,useCallback:_f,useContext:pn,useEffect:Rs,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Cf,useReducer:Fa,useRef:wf,useState:function(){return Fa(wo)},useDebugValue:Ts,useDeferredValue:function(e){var n=hn();return Of(n,Pe.memoizedState,e)},useTransition:function(){var e=Fa(wo)[0],n=hn().memoizedState;return[e,n]},useMutableSource:hf,useSyncExternalStore:mf,useId:zf,unstable_isNewReconciler:!1},Qm={readContext:pn,useCallback:_f,useContext:pn,useEffect:Rs,useImperativeHandle:Ef,useInsertionEffect:kf,useLayoutEffect:Sf,useMemo:Cf,useReducer:Aa,useRef:wf,useState:function(){return Aa(wo)},useDebugValue:Ts,useDeferredValue:function(e){var n=hn();return Pe===null?n.memoizedState=e:Of(n,Pe.memoizedState,e)},useTransition:function(){var e=Aa(wo)[0],n=hn().memoizedState;return[e,n]},useMutableSource:hf,useSyncExternalStore:mf,useId:zf,unstable_isNewReconciler:!1};function yn(e,n){if(e&&e.defaultProps){n=ve({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function _l(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ve({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var na={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=He(),o=mt(e),i=Hn(r,o);i.payload=n,t!=null&&(i.callback=t),n=pt(e,i,o),n!==null&&(En(n,e,o,r),fi(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=He(),o=mt(e),i=Hn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=pt(e,i,o),n!==null&&(En(n,e,o,r),fi(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=He(),r=mt(e),o=Hn(t,r);o.tag=2,n!=null&&(o.callback=n),n=pt(e,o,r),n!==null&&(En(n,e,r,t),fi(n,e,r))}};function Ju(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!ho(t,r)||!ho(o,i):!0}function Mf(e,n,t){var r=!1,o=yt,i=n.contextType;return typeof i=="object"&&i!==null?i=pn(i):(o=Ye(n)?At:Ae.current,r=n.contextTypes,i=(r=r!=null)?xr(e,o):yt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=na,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function ec(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&na.enqueueReplaceState(n,n.state,null)}function Cl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Ss(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=pn(i):(i=Ye(n)?At:Ae.current,o.context=xr(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(_l(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&na.enqueueReplaceState(o,o.state,null),ji(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Pr(e,n){try{var t="",r=n;do t+=wh(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function Ia(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ol(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function Lf(e,n,t){t=Hn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){$i||($i=!0,Al=r),Ol(e,n)},t}function Nf(e,n,t){t=Hn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Ol(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ol(e,n),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function nc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Km;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=s0.bind(null,e,n,t),n.then(e,e))}function tc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function rc(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Hn(-1,1),n.tag=2,pt(t,n,1))),t.lanes|=1),e)}var Xm=Kn.ReactCurrentOwner,Ke=!1;function Be(e,n,t,r){n.child=e===null?cf(n,null,t,r):kr(n,e.child,t,r)}function oc(e,n,t,r,o){t=t.render;var i=n.ref;return vr(n,o),r=Os(e,n,t,r,i,o),t=zs(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Qn(e,n,o)):(pe&&t&&gs(n),n.flags|=1,Be(e,n,r,o),n.child)}function ic(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Is(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,jf(e,n,i,r,o)):(e=yi(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:ho,t(a,r)&&e.ref===n.ref)return Qn(e,n,o)}return n.flags|=1,e=gt(i,r),e.ref=n.ref,e.return=n,n.child=e}function jf(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(ho(i,r)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ke=!0);else return n.lanes=e.lanes,Qn(e,n,o)}return zl(e,n,t,r,o)}function Ff(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(dr,en),en|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ie(dr,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,ie(dr,en),en|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,ie(dr,en),en|=r;return Be(e,n,o,t),n.child}function Af(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zl(e,n,t,r,o){var i=Ye(t)?At:Ae.current;return i=xr(n,i),vr(n,o),t=Os(e,n,t,r,i,o),r=zs(),e!==null&&!Ke?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Qn(e,n,o)):(pe&&r&&gs(n),n.flags|=1,Be(e,n,t,o),n.child)}function ac(e,n,t,r,o){if(Ye(t)){var i=!0;Ti(n)}else i=!1;if(vr(n,o),n.stateNode===null)mi(e,n),Mf(n,t,r),Cl(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,u=t.contextType;typeof u=="object"&&u!==null?u=pn(u):(u=Ye(t)?At:Ae.current,u=xr(n,u));var f=t.getDerivedStateFromProps,c=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";c||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&ec(n,a,r,u),ot=!1;var p=n.memoizedState;a.state=p,ji(n,r,a,o),s=n.memoizedState,l!==r||p!==s||Xe.current||ot?(typeof f=="function"&&(_l(n,t,f,r),s=n.memoizedState),(l=ot||Ju(n,t,l,r,p,s,u))?(c||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,ff(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:yn(n.type,l),a.props=u,c=n.pendingProps,p=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=pn(s):(s=Ye(t)?At:Ae.current,s=xr(n,s));var k=t.getDerivedStateFromProps;(f=typeof k=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==c||p!==s)&&ec(n,a,r,s),ot=!1,p=n.memoizedState,a.state=p,ji(n,r,a,o);var x=n.memoizedState;l!==c||p!==x||Xe.current||ot?(typeof k=="function"&&(_l(n,t,k,r),x=n.memoizedState),(u=ot||Ju(n,t,u,r,p,x,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),a.props=r,a.state=x,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Rl(e,n,t,r,i,o)}function Rl(e,n,t,r,o,i){Af(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&Vu(n,t,!1),Qn(e,n,i);r=n.stateNode,Xm.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=kr(n,e.child,null,i),n.child=kr(n,null,l,i)):Be(e,n,l,i),n.memoizedState=r.state,o&&Vu(n,t,!0),n.child}function If(e){var n=e.stateNode;n.pendingContext?qu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&qu(e,n.context,!1),Ps(e,n.containerInfo)}function lc(e,n,t,r,o){return wr(),ys(o),n.flags|=256,Be(e,n,t,r),n.child}var Tl={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,n,t){var r=n.pendingProps,o=me.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(me,o&1),e===null)return Pl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=oa(a,r,0,null),e=Ft(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Dl(t),n.memoizedState=Tl,e):Ds(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Ym(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=gt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=gt(l,i):(i=Ft(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?Dl(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Tl,r}return i=e.child,e=i.sibling,r=gt(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ds(e,n){return n=oa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ei(e,n,t,r){return r!==null&&ys(r),kr(n,e.child,null,t),e=Ds(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Ym(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=Ia(Error(O(422))),ei(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=oa({mode:"visible",children:r.children},o,0,null),i=Ft(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&kr(n,e.child,null,a),n.child.memoizedState=Dl(a),n.memoizedState=Tl,i);if(!(n.mode&1))return ei(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(O(419)),r=Ia(i,r,void 0),ei(e,n,a,r)}if(l=(a&e.childLanes)!==0,Ke||l){if(r=ze,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Wn(e,o),En(r,e,o,-1))}return As(),r=Ia(Error(O(421))),ei(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=u0.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,tn=ft(o.nextSibling),rn=n,pe=!0,wn=null,e!==null&&(un[cn++]=$n,un[cn++]=Bn,un[cn++]=It,$n=e.id,Bn=e.overflow,It=n),n=Ds(n,r.children),n.flags|=4096,n)}function sc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),El(e.return,n,t)}function Ua(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function $f(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(Be(e,n,r.children,t),r=me.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,t,n);else if(e.tag===19)sc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(me,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Fi(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Ua(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Fi(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Ua(n,!0,t,null,i);break;case"together":Ua(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Qn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),$t|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(O(153));if(n.child!==null){for(e=n.child,t=gt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Gm(e,n,t){switch(n.tag){case 3:If(n),wr();break;case 5:pf(n);break;case 1:Ye(n.type)&&Ti(n);break;case 4:Ps(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;ie(Li,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ie(me,me.current&1),n.flags|=128,null):t&n.child.childLanes?Uf(e,n,t):(ie(me,me.current&1),e=Qn(e,n,t),e!==null?e.sibling:null);ie(me,me.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return $f(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(me,me.current),r)break;return null;case 22:case 23:return n.lanes=0,Ff(e,n,t)}return Qn(e,n,t)}var Bf,Ml,Hf,qf;Bf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ml=function(){};Hf=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,Mt(Ln.current);var i=null;switch(t){case"input":o=nl(e,o),r=nl(e,r),i=[];break;case"select":o=ve({},o,{value:void 0}),r=ve({},r,{value:void 0}),i=[];break;case"textarea":o=ol(e,o),r=ol(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=zi)}al(t,r);var a;t=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&le("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};qf=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ur(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Zm(e,n,t){var r=n.pendingProps;switch(vs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return Ye(n.type)&&Ri(),je(n),null;case 3:return r=n.stateNode,Sr(),se(Xe),se(Ae),_s(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,wn!==null&&($l(wn),wn=null))),Ml(e,n),je(n),null;case 5:Es(n);var o=Mt(bo.current);if(t=n.type,e!==null&&n.stateNode!=null)Hf(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(O(166));return je(n),null}if(e=Mt(Ln.current),Zo(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Dn]=n,r[vo]=i,e=(n.mode&1)!==0,t){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<Kr.length;o++)le(Kr[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":vu(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":bu(r,i),le("invalid",r)}al(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Go(r.textContent,l,e),o=["children",""+l]):ao.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&le("scroll",r)}switch(t){case"input":Ho(r),yu(r,i,!0);break;case"textarea":Ho(r),xu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=zi)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[Dn]=n,e[vo]=r,Bf(e,n,!1,!1),n.stateNode=e;e:{switch(a=ll(t,r),t){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<Kr.length;o++)le(Kr[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":vu(e,r),o=nl(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ve({},r,{value:void 0}),le("invalid",e);break;case"textarea":bu(e,r),o=ol(e,r),le("invalid",e);break;default:o=r}al(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?xd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&yd(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&lo(e,s):typeof s=="number"&&lo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ao.hasOwnProperty(i)?s!=null&&i==="onScroll"&&le("scroll",e):s!=null&&ts(e,i,s,a))}switch(t){case"input":Ho(e),yu(e,r,!1);break;case"textarea":Ho(e),xu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return je(n),null;case 6:if(e&&n.stateNode!=null)qf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(O(166));if(t=Mt(bo.current),Mt(Ln.current),Zo(n)){if(r=n.stateNode,t=n.memoizedProps,r[Dn]=n,(i=r.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:Go(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Go(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Dn]=n,n.stateNode=r}return je(n),null;case 13:if(se(me),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(pe&&tn!==null&&n.mode&1&&!(n.flags&128))sf(),wr(),n.flags|=98560,i=!1;else if(i=Zo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(O(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[Dn]=n}else wr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;je(n),i=!1}else wn!==null&&($l(wn),wn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||me.current&1?Ee===0&&(Ee=3):As())),n.updateQueue!==null&&(n.flags|=4),je(n),null);case 4:return Sr(),Ml(e,n),e===null&&mo(n.stateNode.containerInfo),je(n),null;case 10:return ws(n.type._context),je(n),null;case 17:return Ye(n.type)&&Ri(),je(n),null;case 19:if(se(me),i=n.memoizedState,i===null)return je(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)Ur(i,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=Fi(e),a!==null){for(n.flags|=128,Ur(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ie(me,me.current&1|2),n.child}e=e.sibling}i.tail!==null&&xe()>Er&&(n.flags|=128,r=!0,Ur(i,!1),n.lanes=4194304)}else{if(!r)if(e=Fi(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ur(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!pe)return je(n),null}else 2*xe()-i.renderingStartTime>Er&&t!==1073741824&&(n.flags|=128,r=!0,Ur(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=xe(),n.sibling=null,t=me.current,ie(me,r?t&1|2:t&1),n):(je(n),null);case 22:case 23:return Fs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?en&1073741824&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),null;case 24:return null;case 25:return null}throw Error(O(156,n.tag))}function Jm(e,n){switch(vs(n),n.tag){case 1:return Ye(n.type)&&Ri(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sr(),se(Xe),se(Ae),_s(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Es(n),null;case 13:if(se(me),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(O(340));wr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return se(me),null;case 4:return Sr(),null;case 10:return ws(n.type._context),null;case 22:case 23:return Fs(),null;case 24:return null;default:return null}}var ni=!1,Fe=!1,e0=typeof WeakSet=="function"?WeakSet:Set,N=null;function cr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){be(e,n,r)}else t.current=null}function Ll(e,n,t){try{t()}catch(r){be(e,n,r)}}var uc=!1;function n0(e,n){if(vl=_i,e=Kd(),ms(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,u=0,f=0,c=e,p=null;n:for(;;){for(var k;c!==t||o!==0&&c.nodeType!==3||(l=a+o),c!==i||r!==0&&c.nodeType!==3||(s=a+r),c.nodeType===3&&(a+=c.nodeValue.length),(k=c.firstChild)!==null;)p=c,c=k;for(;;){if(c===e)break n;if(p===t&&++u===o&&(l=a),p===i&&++f===r&&(s=a),(k=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=k}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(yl={focusedElem:e,selectionRange:t},_i=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,_=x.memoizedState,h=n.stateNode,d=h.getSnapshotBeforeUpdate(n.elementType===n.type?m:yn(n.type,m),_);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(S){be(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return x=uc,uc=!1,x}function ro(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ll(n,t,i)}o=o.next}while(o!==r)}}function ta(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Nl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Vf(e){var n=e.alternate;n!==null&&(e.alternate=null,Vf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Dn],delete n[vo],delete n[wl],delete n[Fm],delete n[Am])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zi));else if(r!==4&&(e=e.child,e!==null))for(jl(e,n,t),e=e.sibling;e!==null;)jl(e,n,t),e=e.sibling}function Fl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,n,t),e=e.sibling;e!==null;)Fl(e,n,t),e=e.sibling}var De=null,bn=!1;function et(e,n,t){for(t=t.child;t!==null;)Qf(e,n,t),t=t.sibling}function Qf(e,n,t){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(Ki,t)}catch{}switch(t.tag){case 5:Fe||cr(t,n);case 6:var r=De,o=bn;De=null,et(e,n,t),De=r,bn=o,De!==null&&(bn?(e=De,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):De.removeChild(t.stateNode));break;case 18:De!==null&&(bn?(e=De,t=t.stateNode,e.nodeType===8?Ma(e.parentNode,t):e.nodeType===1&&Ma(e,t),fo(e)):Ma(De,t.stateNode));break;case 4:r=De,o=bn,De=t.stateNode.containerInfo,bn=!0,et(e,n,t),De=r,bn=o;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Ll(t,n,a),o=o.next}while(o!==r)}et(e,n,t);break;case 1:if(!Fe&&(cr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){be(t,n,l)}et(e,n,t);break;case 21:et(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,et(e,n,t),Fe=r):et(e,n,t);break;default:et(e,n,t)}}function dc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new e0),n.forEach(function(r){var o=c0.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function gn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,bn=!1;break e;case 3:De=l.stateNode.containerInfo,bn=!0;break e;case 4:De=l.stateNode.containerInfo,bn=!0;break e}l=l.return}if(De===null)throw Error(O(160));Qf(i,a,o),De=null,bn=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){be(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Kf(n,e),n=n.sibling}function Kf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gn(n,e),Rn(e),r&4){try{ro(3,e,e.return),ta(3,e)}catch(m){be(e,e.return,m)}try{ro(5,e,e.return)}catch(m){be(e,e.return,m)}}break;case 1:gn(n,e),Rn(e),r&512&&t!==null&&cr(t,t.return);break;case 5:if(gn(n,e),Rn(e),r&512&&t!==null&&cr(t,t.return),e.flags&32){var o=e.stateNode;try{lo(o,"")}catch(m){be(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&md(o,i),ll(l,a);var u=ll(l,i);for(a=0;a<s.length;a+=2){var f=s[a],c=s[a+1];f==="style"?xd(o,c):f==="dangerouslySetInnerHTML"?yd(o,c):f==="children"?lo(o,c):ts(o,f,c,u)}switch(l){case"input":tl(o,i);break;case"textarea":gd(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?pr(o,!!i.multiple,k,!1):p!==!!i.multiple&&(i.defaultValue!=null?pr(o,!!i.multiple,i.defaultValue,!0):pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[vo]=i}catch(m){be(e,e.return,m)}}break;case 6:if(gn(n,e),Rn(e),r&4){if(e.stateNode===null)throw Error(O(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){be(e,e.return,m)}}break;case 3:if(gn(n,e),Rn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{fo(n.containerInfo)}catch(m){be(e,e.return,m)}break;case 4:gn(n,e),Rn(e);break;case 13:gn(n,e),Rn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ns=xe())),r&4&&dc(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||f,gn(n,e),Fe=u):gn(n,e),Rn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(c=N=f;N!==null;){switch(p=N,k=p.child,p.tag){case 0:case 11:case 14:case 15:ro(4,p,p.return);break;case 1:cr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(m){be(r,t,m)}}break;case 5:cr(p,p.return);break;case 22:if(p.memoizedState!==null){pc(c);continue}}k!==null?(k.return=p,N=k):pc(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=c.stateNode,s=c.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=bd("display",a))}catch(m){be(e,e.return,m)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){be(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:gn(n,e),Rn(e),r&4&&dc(e);break;case 21:break;default:gn(n,e),Rn(e)}}function Rn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Wf(t)){var r=t;break e}t=t.return}throw Error(O(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lo(o,""),r.flags&=-33);var i=cc(e);Fl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=cc(e);jl(e,l,a);break;default:throw Error(O(161))}}catch(s){be(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function t0(e,n,t){N=e,Xf(e)}function Xf(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ni;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||Fe;l=ni;var u=Fe;if(ni=a,(Fe=s)&&!u)for(N=o;N!==null;)a=N,s=a.child,a.tag===22&&a.memoizedState!==null?hc(o):s!==null?(s.return=a,N=s):hc(o);for(;i!==null;)N=i,Xf(i),i=i.sibling;N=o,ni=l,Fe=u}fc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):fc(e)}}function fc(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fe||ta(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:yn(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&Yu(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Yu(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&fo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Fe||n.flags&512&&Nl(n)}catch(p){be(n,n.return,p)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function pc(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function hc(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ta(4,n)}catch(s){be(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){be(n,o,s)}}var i=n.return;try{Nl(n)}catch(s){be(n,i,s)}break;case 5:var a=n.return;try{Nl(n)}catch(s){be(n,a,s)}}}catch(s){be(n,n.return,s)}if(n===e){N=null;break}var l=n.sibling;if(l!==null){l.return=n.return,N=l;break}N=n.return}}var r0=Math.ceil,Ui=Kn.ReactCurrentDispatcher,Ms=Kn.ReactCurrentOwner,fn=Kn.ReactCurrentBatchConfig,X=0,ze=null,Se=null,Me=0,en=0,dr=St(0),Ee=0,So=null,$t=0,ra=0,Ls=0,oo=null,Qe=null,Ns=0,Er=1/0,In=null,$i=!1,Al=null,ht=null,ti=!1,st=null,Bi=0,io=0,Il=null,gi=-1,vi=0;function He(){return X&6?xe():gi!==-1?gi:gi=xe()}function mt(e){return e.mode&1?X&2&&Me!==0?Me&-Me:Um.transition!==null?(vi===0&&(vi=Dd()),vi):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Id(e.type)),e):1}function En(e,n,t,r){if(50<io)throw io=0,Il=null,Error(O(185));Co(e,t,r),(!(X&2)||e!==ze)&&(e===ze&&(!(X&2)&&(ra|=t),Ee===4&&at(e,Me)),Ge(e,r),t===1&&X===0&&!(n.mode&1)&&(Er=xe()+500,Ji&&Pt()))}function Ge(e,n){var t=e.callbackNode;Uh(e,n);var r=Ei(e,e===ze?Me:0);if(r===0)t!==null&&Su(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Su(t),n===1)e.tag===0?Im(mc.bind(null,e)):of(mc.bind(null,e)),Nm(function(){!(X&6)&&Pt()}),t=null;else{switch(Md(r)){case 1:t=ls;break;case 4:t=Rd;break;case 16:t=Pi;break;case 536870912:t=Td;break;default:t=Pi}t=rp(t,Yf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Yf(e,n){if(gi=-1,vi=0,X&6)throw Error(O(327));var t=e.callbackNode;if(yr()&&e.callbackNode!==t)return null;var r=Ei(e,e===ze?Me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Hi(e,r);else{n=r;var o=X;X|=2;var i=Zf();(ze!==e||Me!==n)&&(In=null,Er=xe()+500,jt(e,n));do try{a0();break}catch(l){Gf(e,l)}while(!0);xs(),Ui.current=i,X=o,Se!==null?n=0:(ze=null,Me=0,n=Ee)}if(n!==0){if(n===2&&(o=fl(e),o!==0&&(r=o,n=Ul(e,o))),n===1)throw t=So,jt(e,0),at(e,r),Ge(e,xe()),t;if(n===6)at(e,r);else{if(o=e.current.alternate,!(r&30)&&!o0(o)&&(n=Hi(e,r),n===2&&(i=fl(e),i!==0&&(r=i,n=Ul(e,i))),n===1))throw t=So,jt(e,0),at(e,r),Ge(e,xe()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(O(345));case 2:zt(e,Qe,In);break;case 3:if(at(e,r),(r&130023424)===r&&(n=Ns+500-xe(),10<n)){if(Ei(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=xl(zt.bind(null,e,Qe,In),n);break}zt(e,Qe,In);break;case 4:if(at(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-Pn(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r0(r/1960))-r,10<r){e.timeoutHandle=xl(zt.bind(null,e,Qe,In),r);break}zt(e,Qe,In);break;case 5:zt(e,Qe,In);break;default:throw Error(O(329))}}}return Ge(e,xe()),e.callbackNode===t?Yf.bind(null,e):null}function Ul(e,n){var t=oo;return e.current.memoizedState.isDehydrated&&(jt(e,n).flags|=256),e=Hi(e,n),e!==2&&(n=Qe,Qe=t,n!==null&&$l(n)),e}function $l(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function o0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!_n(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function at(e,n){for(n&=~Ls,n&=~ra,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Pn(n),r=1<<t;e[t]=-1,n&=~r}}function mc(e){if(X&6)throw Error(O(327));yr();var n=Ei(e,0);if(!(n&1))return Ge(e,xe()),null;var t=Hi(e,n);if(e.tag!==0&&t===2){var r=fl(e);r!==0&&(n=r,t=Ul(e,r))}if(t===1)throw t=So,jt(e,0),at(e,n),Ge(e,xe()),t;if(t===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zt(e,Qe,In),Ge(e,xe()),null}function js(e,n){var t=X;X|=1;try{return e(n)}finally{X=t,X===0&&(Er=xe()+500,Ji&&Pt())}}function Bt(e){st!==null&&st.tag===0&&!(X&6)&&yr();var n=X;X|=1;var t=fn.transition,r=ee;try{if(fn.transition=null,ee=1,e)return e()}finally{ee=r,fn.transition=t,X=n,!(X&6)&&Pt()}}function Fs(){en=dr.current,se(dr)}function jt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lm(t)),Se!==null)for(t=Se.return;t!==null;){var r=t;switch(vs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:Sr(),se(Xe),se(Ae),_s();break;case 5:Es(r);break;case 4:Sr();break;case 13:se(me);break;case 19:se(me);break;case 10:ws(r.type._context);break;case 22:case 23:Fs()}t=t.return}if(ze=e,Se=e=gt(e.current,null),Me=en=n,Ee=0,So=null,Ls=ra=$t=0,Qe=oo=null,Dt!==null){for(n=0;n<Dt.length;n++)if(t=Dt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}Dt=null}return e}function Gf(e,n){do{var t=Se;try{if(xs(),pi.current=Ii,Ai){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ai=!1}if(Ut=0,Oe=Pe=ge=null,to=!1,xo=0,Ms.current=null,t===null||t.return===null){Ee=1,So=n,Se=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=Me,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=tc(a);if(k!==null){k.flags&=-257,rc(k,a,l,i,n),k.mode&1&&nc(i,u,n),n=k,s=u;var x=n.updateQueue;if(x===null){var m=new Set;m.add(s),n.updateQueue=m}else x.add(s);break e}else{if(!(n&1)){nc(i,u,n),As();break e}s=Error(O(426))}}else if(pe&&l.mode&1){var _=tc(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),rc(_,a,l,i,n),ys(Pr(s,l));break e}}i=s=Pr(s,l),Ee!==4&&(Ee=2),oo===null?oo=[i]:oo.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var h=Lf(i,s,n);Xu(i,h);break e;case 1:l=s;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ht===null||!ht.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var S=Nf(i,l,n);Xu(i,S);break e}}i=i.return}while(i!==null)}ep(t)}catch(C){n=C,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function Zf(){var e=Ui.current;return Ui.current=Ii,e===null?Ii:e}function As(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),ze===null||!($t&268435455)&&!(ra&268435455)||at(ze,Me)}function Hi(e,n){var t=X;X|=2;var r=Zf();(ze!==e||Me!==n)&&(In=null,jt(e,n));do try{i0();break}catch(o){Gf(e,o)}while(!0);if(xs(),X=t,Ui.current=r,Se!==null)throw Error(O(261));return ze=null,Me=0,Ee}function i0(){for(;Se!==null;)Jf(Se)}function a0(){for(;Se!==null&&!Th();)Jf(Se)}function Jf(e){var n=tp(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?ep(e):Se=n,Ms.current=null}function ep(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Jm(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,Se=null;return}}else if(t=Zm(t,n,en),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Ee===0&&(Ee=5)}function zt(e,n,t){var r=ee,o=fn.transition;try{fn.transition=null,ee=1,l0(e,n,t,r)}finally{fn.transition=o,ee=r}return null}function l0(e,n,t,r){do yr();while(st!==null);if(X&6)throw Error(O(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if($h(e,i),e===ze&&(Se=ze=null,Me=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ti||(ti=!0,rp(Pi,function(){return yr(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=fn.transition,fn.transition=null;var a=ee;ee=1;var l=X;X|=4,Ms.current=null,n0(e,t),Kf(t,e),Cm(yl),_i=!!vl,yl=vl=null,e.current=t,t0(t),Dh(),X=l,ee=a,fn.transition=i}else e.current=t;if(ti&&(ti=!1,st=e,Bi=o),i=e.pendingLanes,i===0&&(ht=null),Nh(t.stateNode),Ge(e,xe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if($i)throw $i=!1,e=Al,Al=null,e;return Bi&1&&e.tag!==0&&yr(),i=e.pendingLanes,i&1?e===Il?io++:(io=0,Il=e):io=0,Pt(),null}function yr(){if(st!==null){var e=Md(Bi),n=fn.transition,t=ee;try{if(fn.transition=null,ee=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,Bi=0,X&6)throw Error(O(331));var o=X;for(X|=4,N=e.current;N!==null;){var i=N,a=i.child;if(N.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(N=u;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:ro(8,f,i)}var c=f.child;if(c!==null)c.return=f,N=c;else for(;N!==null;){f=N;var p=f.sibling,k=f.return;if(Vf(f),f===u){N=null;break}if(p!==null){p.return=k,N=p;break}N=k}}}var x=i.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}N=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ro(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,N=h;break e}N=i.return}}var d=e.current;for(N=d;N!==null;){a=N;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,N=g;else e:for(a=d;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ta(9,l)}}catch(C){be(l,l.return,C)}if(l===a){N=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,N=S;break e}N=l.return}}if(X=o,Pt(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(Ki,e)}catch{}r=!0}return r}finally{ee=t,fn.transition=n}}return!1}function gc(e,n,t){n=Pr(t,n),n=Lf(e,n,1),e=pt(e,n,1),n=He(),e!==null&&(Co(e,1,n),Ge(e,n))}function be(e,n,t){if(e.tag===3)gc(e,e,t);else for(;n!==null;){if(n.tag===3){gc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=Pr(t,e),e=Nf(n,e,1),n=pt(n,e,1),e=He(),n!==null&&(Co(n,1,e),Ge(n,e));break}}n=n.return}}function s0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=He(),e.pingedLanes|=e.suspendedLanes&t,ze===e&&(Me&t)===t&&(Ee===4||Ee===3&&(Me&130023424)===Me&&500>xe()-Ns?jt(e,0):Ls|=t),Ge(e,n)}function np(e,n){n===0&&(e.mode&1?(n=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):n=1);var t=He();e=Wn(e,n),e!==null&&(Co(e,n,t),Ge(e,t))}function u0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),np(e,t)}function c0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(n),np(e,t)}var tp;tp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)Ke=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ke=!1,Gm(e,n,t);Ke=!!(e.flags&131072)}else Ke=!1,pe&&n.flags&1048576&&af(n,Mi,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;mi(e,n),e=n.pendingProps;var o=xr(n,Ae.current);vr(n,t),o=Os(null,n,r,e,o,t);var i=zs();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ye(r)?(i=!0,Ti(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ss(n),o.updater=na,n.stateNode=o,o._reactInternals=n,Cl(n,r,e,t),n=Rl(null,n,r,!0,i,t)):(n.tag=0,pe&&i&&gs(n),Be(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(mi(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=f0(r),e=yn(r,e),o){case 0:n=zl(null,n,r,e,t);break e;case 1:n=ac(null,n,r,e,t);break e;case 11:n=oc(null,n,r,e,t);break e;case 14:n=ic(null,n,r,yn(r.type,e),t);break e}throw Error(O(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yn(r,o),zl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yn(r,o),ac(e,n,r,o,t);case 3:e:{if(If(n),e===null)throw Error(O(387));r=n.pendingProps,i=n.memoizedState,o=i.element,ff(e,n),ji(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=Pr(Error(O(423)),n),n=lc(e,n,r,t,o);break e}else if(r!==o){o=Pr(Error(O(424)),n),n=lc(e,n,r,t,o);break e}else for(tn=ft(n.stateNode.containerInfo.firstChild),rn=n,pe=!0,wn=null,t=cf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(wr(),r===o){n=Qn(e,n,t);break e}Be(e,n,r,t)}n=n.child}return n;case 5:return pf(n),e===null&&Pl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,bl(r,o)?a=null:i!==null&&bl(r,i)&&(n.flags|=32),Af(e,n),Be(e,n,a,t),n.child;case 6:return e===null&&Pl(n),null;case 13:return Uf(e,n,t);case 4:return Ps(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=kr(n,null,r,t):Be(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yn(r,o),oc(e,n,r,o,t);case 7:return Be(e,n,n.pendingProps,t),n.child;case 8:return Be(e,n,n.pendingProps.children,t),n.child;case 12:return Be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,ie(Li,r._currentValue),r._currentValue=a,i!==null)if(_n(i.value,a)){if(i.children===o.children&&!Xe.current){n=Qn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Hn(-1,t&-t),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),El(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(O(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),El(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Be(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,vr(n,t),o=pn(o),r=r(o),n.flags|=1,Be(e,n,r,t),n.child;case 14:return r=n.type,o=yn(r,n.pendingProps),o=yn(r.type,o),ic(e,n,r,o,t);case 15:return jf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:yn(r,o),mi(e,n),n.tag=1,Ye(r)?(e=!0,Ti(n)):e=!1,vr(n,t),Mf(n,r,o),Cl(n,r,o,t),Rl(null,n,r,!0,e,t);case 19:return $f(e,n,t);case 22:return Ff(e,n,t)}throw Error(O(156,n.tag))};function rp(e,n){return zd(e,n)}function d0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,n,t,r){return new d0(e,n,t,r)}function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f0(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===os)return 11;if(e===is)return 14}return 2}function gt(e,n){var t=e.alternate;return t===null?(t=dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function yi(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")Is(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case nr:return Ft(t.children,o,i,n);case rs:a=8,o|=8;break;case Ga:return e=dn(12,t,n,o|2),e.elementType=Ga,e.lanes=i,e;case Za:return e=dn(13,t,n,o),e.elementType=Za,e.lanes=i,e;case Ja:return e=dn(19,t,n,o),e.elementType=Ja,e.lanes=i,e;case fd:return oa(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cd:a=10;break e;case dd:a=9;break e;case os:a=11;break e;case is:a=14;break e;case rt:a=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return n=dn(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function Ft(e,n,t,r){return e=dn(7,e,r,n),e.lanes=t,e}function oa(e,n,t,r){return e=dn(22,e,r,n),e.elementType=fd,e.lanes=t,e.stateNode={isHidden:!1},e}function $a(e,n,t){return e=dn(6,e,null,n),e.lanes=t,e}function Ba(e,n,t){return n=dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function p0(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Us(e,n,t,r,o,i,a,l,s){return e=new p0(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=dn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ss(i),e}function h0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function op(e){if(!e)return yt;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(O(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(O(171))}if(e.tag===1){var t=e.type;if(Ye(t))return rf(e,t,n)}return n}function ip(e,n,t,r,o,i,a,l,s){return e=Us(t,r,!0,e,o,i,a,l,s),e.context=op(null),t=e.current,r=He(),o=mt(t),i=Hn(r,o),i.callback=n??null,pt(t,i,o),e.current.lanes=o,Co(e,o,r),Ge(e,r),e}function ia(e,n,t,r){var o=n.current,i=He(),a=mt(o);return t=op(t),n.context===null?n.context=t:n.pendingContext=t,n=Hn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=pt(o,n,a),e!==null&&(En(e,o,a,i),fi(e,o,a)),a}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function $s(e,n){vc(e,n),(e=e.alternate)&&vc(e,n)}function m0(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}aa.prototype.render=Bs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(O(409));ia(e,n,null,null)};aa.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bt(function(){ia(null,e,null,null)}),n[Vn]=null}};function aa(e){this._internalRoot=e}aa.prototype.unstable_scheduleHydration=function(e){if(e){var n=jd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<it.length&&n!==0&&n<it[t].priority;t++);it.splice(t,0,e),t===0&&Ad(e)}};function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function la(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function g0(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=qi(a);i.call(u)}}var a=ip(n,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=a,e[Vn]=a.current,mo(e.nodeType===8?e.parentNode:e),Bt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=qi(s);l.call(u)}}var s=Us(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=s,e[Vn]=s.current,mo(e.nodeType===8?e.parentNode:e),Bt(function(){ia(n,s,t,r)}),s}function sa(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=qi(a);l.call(s)}}ia(n,a,e,o)}else a=g0(t,n,e,o,r);return qi(a)}Ld=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Qr(n.pendingLanes);t!==0&&(ss(n,t|1),Ge(n,xe()),!(X&6)&&(Er=xe()+500,Pt()))}break;case 13:Bt(function(){var r=Wn(e,1);if(r!==null){var o=He();En(r,e,1,o)}}),$s(e,1)}};us=function(e){if(e.tag===13){var n=Wn(e,134217728);if(n!==null){var t=He();En(n,e,134217728,t)}$s(e,134217728)}};Nd=function(e){if(e.tag===13){var n=mt(e),t=Wn(e,n);if(t!==null){var r=He();En(t,e,n,r)}$s(e,n)}};jd=function(){return ee};Fd=function(e,n){var t=ee;try{return ee=e,n()}finally{ee=t}};ul=function(e,n,t){switch(n){case"input":if(tl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Zi(r);if(!o)throw Error(O(90));hd(r),tl(r,o)}}}break;case"textarea":gd(e,t);break;case"select":n=t.value,n!=null&&pr(e,!!t.multiple,n,!1)}};Sd=js;Pd=Bt;var v0={usingClientEntryPoint:!1,Events:[zo,ir,Zi,wd,kd,js]},$r={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y0={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cd(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||m0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Ki=ri.inject(y0),Mn=ri}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;an.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hs(n))throw Error(O(200));return h0(e,n,null,t)};an.createRoot=function(e,n){if(!Hs(e))throw Error(O(299));var t=!1,r="",o=ap;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Us(e,1,!1,null,null,t,!1,r,o),e[Vn]=n.current,mo(e.nodeType===8?e.parentNode:e),new Bs(n)};an.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Cd(n),e=e===null?null:e.stateNode,e};an.flushSync=function(e){return Bt(e)};an.hydrate=function(e,n,t){if(!la(n))throw Error(O(200));return sa(null,e,n,!0,t)};an.hydrateRoot=function(e,n,t){if(!Hs(e))throw Error(O(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=ap;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=ip(n,null,e,1,t??null,o,!1,i,a),e[Vn]=n.current,mo(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new aa(n)};an.render=function(e,n,t){if(!la(n))throw Error(O(200));return sa(null,e,n,!1,t)};an.unmountComponentAtNode=function(e){if(!la(e))throw Error(O(40));return e._reactRootContainer?(Bt(function(){sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Vn]=null})}),!0):!1};an.unstable_batchedUpdates=js;an.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!la(t))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return sa(e,n,t,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lp)}catch(e){console.error(e)}}lp(),ad.exports=an;var qs=ad.exports;const b0=Kc(qs),x0=Qc({__proto__:null,default:b0},[qs]);var bc=qs;Xa.createRoot=bc.createRoot,Xa.hydrateRoot=bc.hydrateRoot;function w0({colorInfo:e,width:n}){const t={width:`${n}%`,height:"100%",minWidth:"10%",backgroundColor:e.hex,position:"relative",overflow:"hidden"},r={fontSize:n*.2>2?"2rem":"1.5rem"};async function o(){navigator.clipboard&&navigator.clipboard.writeText(e.hex).then(()=>{const i=document.getElementById(`value-copied-prompt-${e.hex}`);i&&(i.style.opacity="1",setTimeout(()=>i.style.opacity="0",1e3))}).catch(i=>console.log("Error while copying hex value: "+i))}return $.jsxs("div",{style:t,onClick:o,children:[$.jsxs("div",{className:"color-info",style:r,children:[$.jsx("div",{className:"color-code",children:e.hex}),$.jsx("div",{style:{},className:"color-name",children:e.name})]}),$.jsx("div",{id:`value-copied-prompt-${e.hex}`,className:"value-copied-prompt",children:"Hex Copied"})]})}function k0({colorsInfo:e}){const n=100/e.length,t=e.map(r=>$.jsx(w0,{colorInfo:r,width:n},r.hex));return $.jsx("div",{className:"pallet",children:t})}/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},he.apply(this,arguments)}var ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ke||(ke={}));const xc="popstate";function S0(e){e===void 0&&(e={});function n(r,o){let{pathname:i,search:a,hash:l}=r.location;return Po("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:bt(o)}return E0(n,t,null,e)}function V(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function _r(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function P0(){return Math.random().toString(36).substr(2,8)}function wc(e,n){return{usr:e.state,key:e.key,idx:n}}function Po(e,n,t,r){return t===void 0&&(t=null),he({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Et(n):n,{state:t,key:n&&n.key||r||P0()})}function bt(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Et(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function E0(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=ke.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(he({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function c(){l=ke.Pop;let _=f(),h=_==null?null:_-u;u=_,s&&s({action:l,location:m.location,delta:h})}function p(_,h){l=ke.Push;let d=Po(m.location,_,h);u=f()+1;let g=wc(d,u),S=m.createHref(d);try{a.pushState(g,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(S)}i&&s&&s({action:l,location:m.location,delta:1})}function k(_,h){l=ke.Replace;let d=Po(m.location,_,h);u=f();let g=wc(d,u),S=m.createHref(d);a.replaceState(g,"",S),i&&s&&s({action:l,location:m.location,delta:0})}function x(_){let h=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof _=="string"?_:bt(_);return d=d.replace(/ $/,"%20"),V(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let m={get action(){return l},get location(){return e(o,a)},listen(_){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(xc,c),s=_,()=>{o.removeEventListener(xc,c),s=null}},createHref(_){return n(o,_)},createURL:x,encodeLocation(_){let h=x(_);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:k,go(_){return a.go(_)}};return m}var oe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(oe||(oe={}));const _0=new Set(["lazy","caseSensitive","path","id","index","children"]);function C0(e){return e.index===!0}function Eo(e,n,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...t,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(V(o.index!==!0||!o.children,"Cannot specify children on an index route"),V(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),C0(o)){let s=he({},o,n(o),{id:l});return r[l]=s,s}else{let s=he({},o,n(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=Eo(o.children,n,a,r)),s}})}function Rt(e,n,t){return t===void 0&&(t="/"),bi(e,n,t,!1)}function bi(e,n,t,r){let o=typeof n=="string"?Et(n):n,i=xt(o.pathname||"/",t);if(i==null)return null;let a=sp(e);z0(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=U0(i);l=A0(a[s],u,r)}return l}function O0(e,n){let{route:t,pathname:r,params:o}=e;return{id:t.id,pathname:r,params:o,data:n[t.id],handle:t.handle}}function sp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(V(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Nn([r,s.relativePath]),f=t.concat(s);i.children&&i.children.length>0&&(V(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),sp(i.children,n,f,u)),!(i.path==null&&!i.index)&&n.push({path:u,score:j0(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of up(i.path))o(i,a,s)}),n}function up(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=up(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function z0(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:F0(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const R0=/^:[\w-]+$/,T0=3,D0=2,M0=1,L0=10,N0=-2,kc=e=>e==="*";function j0(e,n){let t=e.split("/"),r=t.length;return t.some(kc)&&(r+=N0),n&&(r+=D0),t.filter(o=>!kc(o)).reduce((o,i)=>o+(R0.test(i)?T0:i===""?M0:L0),r)}function F0(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function A0(e,n,t){t===void 0&&(t=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,f=i==="/"?n:n.slice(i.length)||"/",c=Sc({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),p=s.route;if(!c&&u&&t&&!r[r.length-1].route.index&&(c=Sc({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},f)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:Nn([i,c.pathname]),pathnameBase:H0(Nn([i,c.pathnameBase])),route:p}),c.pathnameBase!=="/"&&(i=Nn([i,c.pathnameBase]))}return a}function Sc(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=I0(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:p,isOptional:k}=f;if(p==="*"){let m=l[c]||"";a=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const x=l[c];return k&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function I0(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),_r(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function U0(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return _r(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function xt(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function $0(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Et(e):e;return{pathname:t?t.startsWith("/")?t:B0(t,n):n,search:q0(r),hash:V0(o)}}function B0(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ha(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cp(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Vs(e,n){let t=cp(e);return n?t.map((r,o)=>o===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Ws(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Et(e):(o=he({},e),V(!o.pathname||!o.pathname.includes("?"),Ha("?","pathname","search",o)),V(!o.pathname||!o.pathname.includes("#"),Ha("#","pathname","hash",o)),V(!o.search||!o.search.includes("#"),Ha("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=t;else{let c=n.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),c-=1;o.pathname=p.join("/")}l=c>=0?n[c]:"/"}let s=$0(o,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),H0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),q0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,V0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Bl extends Error{}class W0{constructor(n,t){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],V(n&&typeof n=="object"&&!Array.isArray(n),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((i,a)=>r=a),this.controller=new AbortController;let o=()=>r(new Bl("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",o),this.controller.signal.addEventListener("abort",o),this.data=Object.entries(n).reduce((i,a)=>{let[l,s]=a;return Object.assign(i,{[l]:this.trackPromise(l,s)})},{}),this.done&&this.unlistenAbortSignal(),this.init=t}trackPromise(n,t){if(!(t instanceof Promise))return t;this.deferredKeys.push(n),this.pendingKeysSet.add(n);let r=Promise.race([t,this.abortPromise]).then(o=>this.onSettle(r,n,void 0,o),o=>this.onSettle(r,n,o));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(n,t,r,o){if(this.controller.signal.aborted&&r instanceof Bl)return this.unlistenAbortSignal(),Object.defineProperty(n,"_error",{get:()=>r}),Promise.reject(r);if(this.pendingKeysSet.delete(t),this.done&&this.unlistenAbortSignal(),r===void 0&&o===void 0){let i=new Error('Deferred data for key "'+t+'" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');return Object.defineProperty(n,"_error",{get:()=>i}),this.emit(!1,t),Promise.reject(i)}return o===void 0?(Object.defineProperty(n,"_error",{get:()=>r}),this.emit(!1,t),Promise.reject(r)):(Object.defineProperty(n,"_data",{get:()=>o}),this.emit(!1,t),o)}emit(n,t){this.subscribers.forEach(r=>r(n,t))}subscribe(n){return this.subscribers.add(n),()=>this.subscribers.delete(n)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((n,t)=>this.pendingKeysSet.delete(t)),this.emit(!0)}async resolveData(n){let t=!1;if(!this.done){let r=()=>this.cancel();n.addEventListener("abort",r),t=await new Promise(o=>{this.subscribe(i=>{n.removeEventListener("abort",r),(i||this.done)&&o(i)})})}return t}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return V(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((n,t)=>{let[r,o]=t;return Object.assign(n,{[r]:K0(o)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function Q0(e){return e instanceof Promise&&e._tracked===!0}function K0(e){if(!Q0(e))return e;if(e._error)throw e._error;return e._data}const X0=function(n,t){t===void 0&&(t={});let r=typeof t=="number"?{status:t}:t;return new W0(n,r)};class Qs{constructor(n,t,r,o){o===void 0&&(o=!1),this.status=n,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function To(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const dp=["post","put","patch","delete"],Y0=new Set(dp),G0=["get",...dp],Z0=new Set(G0),J0=new Set([301,302,303,307,308]),eg=new Set([307,308]),qa={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ng={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Br={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ks=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tg=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),fp="remix-router-transitions";function rg(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u",r=!t;V(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let v=e.detectErrorBoundary;o=b=>({hasErrorBoundary:v(b)})}else o=tg;let i={},a=Eo(e.routes,o,void 0,i),l,s=e.basename||"/",u=e.unstable_dataStrategy||sg,f=e.unstable_patchRoutesOnMiss,c=he({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),p=null,k=new Set,x=null,m=null,_=null,h=e.hydrationData!=null,d=Rt(a,e.history.location,s),g=null;if(d==null&&!f){let v=$e(404,{pathname:e.history.location.pathname}),{matches:b,route:w}=Mc(a);d=b,g={[w.id]:v}}d&&f&&!e.hydrationData&&ga(d,a,e.history.location.pathname).active&&(d=null);let S;if(!d)S=!1,d=[];else if(d.some(v=>v.route.lazy))S=!1;else if(!d.some(v=>v.route.loader))S=!0;else if(c.v7_partialHydration){let v=e.hydrationData?e.hydrationData.loaderData:null,b=e.hydrationData?e.hydrationData.errors:null,w=P=>P.route.loader?typeof P.route.loader=="function"&&P.route.loader.hydrate===!0?!1:v&&v[P.route.id]!==void 0||b&&b[P.route.id]!==void 0:!0;if(b){let P=d.findIndex(L=>b[L.route.id]!==void 0);S=d.slice(0,P+1).every(w)}else S=d.every(w)}else S=e.hydrationData!=null;let C,y={historyAction:e.history.action,location:e.history.location,matches:d,initialized:S,navigation:qa,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},R=ke.Pop,z=!1,D,j=!1,Y=new Map,ue=null,Ce=!1,re=!1,Cn=[],Yn=[],ce=new Map,M=0,H=-1,q=new Map,G=new Set,ae=new Map,On=new Map,Re=new Set,mn=new Map,Ie=new Map,Wt=new Map,fa=!1;function Rp(){if(p=e.history.listen(v=>{let{action:b,location:w,delta:P}=v;if(fa){fa=!1;return}_r(Ie.size===0||P!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let L=lu({currentLocation:y.location,nextLocation:w,historyAction:b});if(L&&P!=null){fa=!0,e.history.go(P*-1),No(L,{state:"blocked",location:w,proceed(){No(L,{state:"proceeding",proceed:void 0,reset:void 0,location:w}),e.history.go(P)},reset(){let F=new Map(y.blockers);F.set(L,Br),Ue({blockers:F})}});return}return Ct(b,w)}),t){wg(n,Y);let v=()=>kg(n,Y);n.addEventListener("pagehide",v),ue=()=>n.removeEventListener("pagehide",v)}return y.initialized||Ct(ke.Pop,y.location,{initialHydration:!0}),C}function Tp(){p&&p(),ue&&ue(),k.clear(),D&&D.abort(),y.fetchers.forEach((v,b)=>Lo(b)),y.blockers.forEach((v,b)=>au(b))}function Dp(v){return k.add(v),()=>k.delete(v)}function Ue(v,b){b===void 0&&(b={}),y=he({},y,v);let w=[],P=[];c.v7_fetcherPersist&&y.fetchers.forEach((L,F)=>{L.state==="idle"&&(Re.has(F)?P.push(F):w.push(F))}),[...k].forEach(L=>L(y,{deletedFetchers:P,unstable_viewTransitionOpts:b.viewTransitionOpts,unstable_flushSync:b.flushSync===!0})),c.v7_fetcherPersist&&(w.forEach(L=>y.fetchers.delete(L)),P.forEach(L=>Lo(L)))}function Qt(v,b,w){var P,L;let{flushSync:F}=w===void 0?{}:w,B=y.actionData!=null&&y.navigation.formMethod!=null&&xn(y.navigation.formMethod)&&y.navigation.state==="loading"&&((P=v.state)==null?void 0:P._isRedirect)!==!0,T;b.actionData?Object.keys(b.actionData).length>0?T=b.actionData:T=null:B?T=y.actionData:T=null;let W=b.loaderData?Tc(y.loaderData,b.loaderData,b.matches||[],b.errors):y.loaderData,I=y.blockers;I.size>0&&(I=new Map(I),I.forEach((J,te)=>I.set(te,Br)));let U=z===!0||y.navigation.formMethod!=null&&xn(y.navigation.formMethod)&&((L=v.state)==null?void 0:L._isRedirect)!==!0;l&&(a=l,l=void 0),Ce||R===ke.Pop||(R===ke.Push?e.history.push(v,v.state):R===ke.Replace&&e.history.replace(v,v.state));let ne;if(R===ke.Pop){let J=Y.get(y.location.pathname);J&&J.has(v.pathname)?ne={currentLocation:y.location,nextLocation:v}:Y.has(v.pathname)&&(ne={currentLocation:v,nextLocation:y.location})}else if(j){let J=Y.get(y.location.pathname);J?J.add(v.pathname):(J=new Set([v.pathname]),Y.set(y.location.pathname,J)),ne={currentLocation:y.location,nextLocation:v}}Ue(he({},b,{actionData:T,loaderData:W,historyAction:R,location:v,initialized:!0,navigation:qa,revalidation:"idle",restoreScrollPosition:uu(v,b.matches||y.matches),preventScrollReset:U,blockers:I}),{viewTransitionOpts:ne,flushSync:F===!0}),R=ke.Pop,z=!1,j=!1,Ce=!1,re=!1,Cn=[],Yn=[]}async function Js(v,b){if(typeof v=="number"){e.history.go(v);return}let w=Hl(y.location,y.matches,s,c.v7_prependBasename,v,c.v7_relativeSplatPath,b==null?void 0:b.fromRouteId,b==null?void 0:b.relative),{path:P,submission:L,error:F}=Pc(c.v7_normalizeFormMethod,!1,w,b),B=y.location,T=Po(y.location,P,b&&b.state);T=he({},T,e.history.encodeLocation(T));let W=b&&b.replace!=null?b.replace:void 0,I=ke.Push;W===!0?I=ke.Replace:W===!1||L!=null&&xn(L.formMethod)&&L.formAction===y.location.pathname+y.location.search&&(I=ke.Replace);let U=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,ne=(b&&b.unstable_flushSync)===!0,J=lu({currentLocation:B,nextLocation:T,historyAction:I});if(J){No(J,{state:"blocked",location:T,proceed(){No(J,{state:"proceeding",proceed:void 0,reset:void 0,location:T}),Js(v,b)},reset(){let te=new Map(y.blockers);te.set(J,Br),Ue({blockers:te})}});return}return await Ct(I,T,{submission:L,pendingError:F,preventScrollReset:U,replace:b&&b.replace,enableViewTransition:b&&b.unstable_viewTransition,flushSync:ne})}function Mp(){if(pa(),Ue({revalidation:"loading"}),y.navigation.state!=="submitting"){if(y.navigation.state==="idle"){Ct(y.historyAction,y.location,{startUninterruptedRevalidation:!0});return}Ct(R||y.historyAction,y.navigation.location,{overrideNavigation:y.navigation})}}async function Ct(v,b,w){D&&D.abort(),D=null,R=v,Ce=(w&&w.startUninterruptedRevalidation)===!0,Hp(y.location,y.matches),z=(w&&w.preventScrollReset)===!0,j=(w&&w.enableViewTransition)===!0;let P=l||a,L=w&&w.overrideNavigation,F=Rt(P,b,s),B=(w&&w.flushSync)===!0,T=ga(F,P,b.pathname);if(T.active&&T.matches&&(F=T.matches),!F){let{error:Z,notFoundMatches:Te,route:we}=ha(b.pathname);Qt(b,{matches:Te,loaderData:{},errors:{[we.id]:Z}},{flushSync:B});return}if(y.initialized&&!re&&hg(y.location,b)&&!(w&&w.submission&&xn(w.submission.formMethod))){Qt(b,{matches:F},{flushSync:B});return}D=new AbortController;let W=Zt(e.history,b,D.signal,w&&w.submission),I;if(w&&w.pendingError)I=[fr(F).route.id,{type:oe.error,error:w.pendingError}];else if(w&&w.submission&&xn(w.submission.formMethod)){let Z=await Lp(W,b,w.submission,F,T.active,{replace:w.replace,flushSync:B});if(Z.shortCircuited)return;if(Z.pendingActionResult){let[Te,we]=Z.pendingActionResult;if(nn(we)&&To(we.error)&&we.error.status===404){D=null,Qt(b,{matches:Z.matches,loaderData:{},errors:{[Te]:we.error}});return}}F=Z.matches||F,I=Z.pendingActionResult,L=Va(b,w.submission),B=!1,T.active=!1,W=Zt(e.history,W.url,W.signal)}let{shortCircuited:U,matches:ne,loaderData:J,errors:te}=await Np(W,b,F,T.active,L,w&&w.submission,w&&w.fetcherSubmission,w&&w.replace,w&&w.initialHydration===!0,B,I);U||(D=null,Qt(b,he({matches:ne||F},Dc(I),{loaderData:J,errors:te})))}async function Lp(v,b,w,P,L,F){F===void 0&&(F={}),pa();let B=bg(b,w);if(Ue({navigation:B},{flushSync:F.flushSync===!0}),L){let I=await Fo(P,b.pathname,v.signal);if(I.type==="aborted")return{shortCircuited:!0};if(I.type==="error"){let{boundaryId:U,error:ne}=jo(b.pathname,I);return{matches:I.partialMatches,pendingActionResult:[U,{type:oe.error,error:ne}]}}else if(I.matches)P=I.matches;else{let{notFoundMatches:U,error:ne,route:J}=ha(b.pathname);return{matches:U,pendingActionResult:[J.id,{type:oe.error,error:ne}]}}}let T,W=Xr(P,b);if(!W.route.action&&!W.route.lazy)T={type:oe.error,error:$e(405,{method:v.method,pathname:b.pathname,routeId:W.route.id})};else if(T=(await Dr("action",v,[W],P))[0],v.signal.aborted)return{shortCircuited:!0};if(Nt(T)){let I;return F&&F.replace!=null?I=F.replace:I=Oc(T.response.headers.get("Location"),new URL(v.url),s)===y.location.pathname+y.location.search,await Tr(v,T,{submission:w,replace:I}),{shortCircuited:!0}}if(Lt(T))throw $e(400,{type:"defer-action"});if(nn(T)){let I=fr(P,W.route.id);return(F&&F.replace)!==!0&&(R=ke.Push),{matches:P,pendingActionResult:[I.route.id,T]}}return{matches:P,pendingActionResult:[W.route.id,T]}}async function Np(v,b,w,P,L,F,B,T,W,I,U){let ne=L||Va(b,F),J=F||B||jc(ne),te=!Ce&&(!c.v7_partialHydration||!W);if(P){if(te){let ye=eu(U);Ue(he({navigation:ne},ye!==void 0?{actionData:ye}:{}),{flushSync:I})}let Q=await Fo(w,b.pathname,v.signal);if(Q.type==="aborted")return{shortCircuited:!0};if(Q.type==="error"){let{boundaryId:ye,error:Ze}=jo(b.pathname,Q);return{matches:Q.partialMatches,loaderData:{},errors:{[ye]:Ze}}}else if(Q.matches)w=Q.matches;else{let{error:ye,notFoundMatches:Ze,route:de}=ha(b.pathname);return{matches:Ze,loaderData:{},errors:{[de.id]:ye}}}}let Z=l||a,[Te,we]=Ec(e.history,y,w,J,b,c.v7_partialHydration&&W===!0,c.v7_skipActionErrorRevalidation,re,Cn,Yn,Re,ae,G,Z,s,U);if(ma(Q=>!(w&&w.some(ye=>ye.route.id===Q))||Te&&Te.some(ye=>ye.route.id===Q)),H=++M,Te.length===0&&we.length===0){let Q=ou();return Qt(b,he({matches:w,loaderData:{},errors:U&&nn(U[1])?{[U[0]]:U[1].error}:null},Dc(U),Q?{fetchers:new Map(y.fetchers)}:{}),{flushSync:I}),{shortCircuited:!0}}if(te){let Q={};if(!P){Q.navigation=ne;let ye=eu(U);ye!==void 0&&(Q.actionData=ye)}we.length>0&&(Q.fetchers=jp(we)),Ue(Q,{flushSync:I})}we.forEach(Q=>{ce.has(Q.key)&&Zn(Q.key),Q.controller&&ce.set(Q.key,Q.controller)});let Mr=()=>we.forEach(Q=>Zn(Q.key));D&&D.signal.addEventListener("abort",Mr);let{loaderResults:Jn,fetcherResults:Kt}=await nu(y.matches,w,Te,we,v);if(v.signal.aborted)return{shortCircuited:!0};D&&D.signal.removeEventListener("abort",Mr),we.forEach(Q=>ce.delete(Q.key));let Xt=Lc([...Jn,...Kt]);if(Xt){if(Xt.idx>=Te.length){let Q=we[Xt.idx-Te.length].key;G.add(Q)}return await Tr(v,Xt.result,{replace:T}),{shortCircuited:!0}}let{loaderData:Yt,errors:zn}=Rc(y,w,Te,Jn,U,we,Kt,mn);mn.forEach((Q,ye)=>{Q.subscribe(Ze=>{(Ze||Q.done)&&mn.delete(ye)})}),c.v7_partialHydration&&W&&y.errors&&Object.entries(y.errors).filter(Q=>{let[ye]=Q;return!Te.some(Ze=>Ze.route.id===ye)}).forEach(Q=>{let[ye,Ze]=Q;zn=Object.assign(zn||{},{[ye]:Ze})});let Ao=ou(),Io=iu(H),Uo=Ao||Io||we.length>0;return he({matches:w,loaderData:Yt,errors:zn},Uo?{fetchers:new Map(y.fetchers)}:{})}function eu(v){if(v&&!nn(v[1]))return{[v[0]]:v[1].data};if(y.actionData)return Object.keys(y.actionData).length===0?null:y.actionData}function jp(v){return v.forEach(b=>{let w=y.fetchers.get(b.key),P=Hr(void 0,w?w.data:void 0);y.fetchers.set(b.key,P)}),new Map(y.fetchers)}function Fp(v,b,w,P){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");ce.has(v)&&Zn(v);let L=(P&&P.unstable_flushSync)===!0,F=l||a,B=Hl(y.location,y.matches,s,c.v7_prependBasename,w,c.v7_relativeSplatPath,b,P==null?void 0:P.relative),T=Rt(F,B,s),W=ga(T,F,B);if(W.active&&W.matches&&(T=W.matches),!T){jn(v,b,$e(404,{pathname:B}),{flushSync:L});return}let{path:I,submission:U,error:ne}=Pc(c.v7_normalizeFormMethod,!0,B,P);if(ne){jn(v,b,ne,{flushSync:L});return}let J=Xr(T,I);if(z=(P&&P.preventScrollReset)===!0,U&&xn(U.formMethod)){Ap(v,b,I,J,T,W.active,L,U);return}ae.set(v,{routeId:b,path:I}),Ip(v,b,I,J,T,W.active,L,U)}async function Ap(v,b,w,P,L,F,B,T){pa(),ae.delete(v);function W(de){if(!de.route.action&&!de.route.lazy){let Fn=$e(405,{method:T.formMethod,pathname:w,routeId:b});return jn(v,b,Fn,{flushSync:B}),!0}return!1}if(!F&&W(P))return;let I=y.fetchers.get(v);Gn(v,xg(T,I),{flushSync:B});let U=new AbortController,ne=Zt(e.history,w,U.signal,T);if(F){let de=await Fo(L,w,ne.signal);if(de.type==="aborted")return;if(de.type==="error"){let{error:Fn}=jo(w,de);jn(v,b,Fn,{flushSync:B});return}else if(de.matches){if(L=de.matches,P=Xr(L,w),W(P))return}else{jn(v,b,$e(404,{pathname:w}),{flushSync:B});return}}ce.set(v,U);let J=M,Z=(await Dr("action",ne,[P],L))[0];if(ne.signal.aborted){ce.get(v)===U&&ce.delete(v);return}if(c.v7_fetcherPersist&&Re.has(v)){if(Nt(Z)||nn(Z)){Gn(v,tt(void 0));return}}else{if(Nt(Z))if(ce.delete(v),H>J){Gn(v,tt(void 0));return}else return G.add(v),Gn(v,Hr(T)),Tr(ne,Z,{fetcherSubmission:T});if(nn(Z)){jn(v,b,Z.error);return}}if(Lt(Z))throw $e(400,{type:"defer-action"});let Te=y.navigation.location||y.location,we=Zt(e.history,Te,U.signal),Mr=l||a,Jn=y.navigation.state!=="idle"?Rt(Mr,y.navigation.location,s):y.matches;V(Jn,"Didn't find any matches after fetcher action");let Kt=++M;q.set(v,Kt);let Xt=Hr(T,Z.data);y.fetchers.set(v,Xt);let[Yt,zn]=Ec(e.history,y,Jn,T,Te,!1,c.v7_skipActionErrorRevalidation,re,Cn,Yn,Re,ae,G,Mr,s,[P.route.id,Z]);zn.filter(de=>de.key!==v).forEach(de=>{let Fn=de.key,cu=y.fetchers.get(Fn),Wp=Hr(void 0,cu?cu.data:void 0);y.fetchers.set(Fn,Wp),ce.has(Fn)&&Zn(Fn),de.controller&&ce.set(Fn,de.controller)}),Ue({fetchers:new Map(y.fetchers)});let Ao=()=>zn.forEach(de=>Zn(de.key));U.signal.addEventListener("abort",Ao);let{loaderResults:Io,fetcherResults:Uo}=await nu(y.matches,Jn,Yt,zn,we);if(U.signal.aborted)return;U.signal.removeEventListener("abort",Ao),q.delete(v),ce.delete(v),zn.forEach(de=>ce.delete(de.key));let Q=Lc([...Io,...Uo]);if(Q){if(Q.idx>=Yt.length){let de=zn[Q.idx-Yt.length].key;G.add(de)}return Tr(we,Q.result)}let{loaderData:ye,errors:Ze}=Rc(y,y.matches,Yt,Io,void 0,zn,Uo,mn);if(y.fetchers.has(v)){let de=tt(Z.data);y.fetchers.set(v,de)}iu(Kt),y.navigation.state==="loading"&&Kt>H?(V(R,"Expected pending action"),D&&D.abort(),Qt(y.navigation.location,{matches:Jn,loaderData:ye,errors:Ze,fetchers:new Map(y.fetchers)})):(Ue({errors:Ze,loaderData:Tc(y.loaderData,ye,Jn,Ze),fetchers:new Map(y.fetchers)}),re=!1)}async function Ip(v,b,w,P,L,F,B,T){let W=y.fetchers.get(v);Gn(v,Hr(T,W?W.data:void 0),{flushSync:B});let I=new AbortController,U=Zt(e.history,w,I.signal);if(F){let Z=await Fo(L,w,U.signal);if(Z.type==="aborted")return;if(Z.type==="error"){let{error:Te}=jo(w,Z);jn(v,b,Te,{flushSync:B});return}else if(Z.matches)L=Z.matches,P=Xr(L,w);else{jn(v,b,$e(404,{pathname:w}),{flushSync:B});return}}ce.set(v,I);let ne=M,te=(await Dr("loader",U,[P],L))[0];if(Lt(te)&&(te=await vp(te,U.signal,!0)||te),ce.get(v)===I&&ce.delete(v),!U.signal.aborted){if(Re.has(v)){Gn(v,tt(void 0));return}if(Nt(te))if(H>ne){Gn(v,tt(void 0));return}else{G.add(v),await Tr(U,te);return}if(nn(te)){jn(v,b,te.error);return}V(!Lt(te),"Unhandled fetcher deferred data"),Gn(v,tt(te.data))}}async function Tr(v,b,w){let{submission:P,fetcherSubmission:L,replace:F}=w===void 0?{}:w;b.response.headers.has("X-Remix-Revalidate")&&(re=!0);let B=b.response.headers.get("Location");V(B,"Expected a Location header on the redirect Response"),B=Oc(B,new URL(v.url),s);let T=Po(y.location,B,{_isRedirect:!0});if(t){let te=!1;if(b.response.headers.has("X-Remix-Reload-Document"))te=!0;else if(Ks.test(B)){const Z=e.history.createURL(B);te=Z.origin!==n.location.origin||xt(Z.pathname,s)==null}if(te){F?n.location.replace(B):n.location.assign(B);return}}D=null;let W=F===!0?ke.Replace:ke.Push,{formMethod:I,formAction:U,formEncType:ne}=y.navigation;!P&&!L&&I&&U&&ne&&(P=jc(y.navigation));let J=P||L;if(eg.has(b.response.status)&&J&&xn(J.formMethod))await Ct(W,T,{submission:he({},J,{formAction:B}),preventScrollReset:z});else{let te=Va(T,P);await Ct(W,T,{overrideNavigation:te,fetcherSubmission:L,preventScrollReset:z})}}async function Dr(v,b,w,P){try{let L=await ug(u,v,b,w,P,i,o);return await Promise.all(L.map((F,B)=>{if(gg(F)){let T=F.result;return{type:oe.redirect,response:fg(T,b,w[B].route.id,P,s,c.v7_relativeSplatPath)}}return dg(F)}))}catch(L){return w.map(()=>({type:oe.error,error:L}))}}async function nu(v,b,w,P,L){let[F,...B]=await Promise.all([w.length?Dr("loader",L,w,b):[],...P.map(T=>{if(T.matches&&T.match&&T.controller){let W=Zt(e.history,T.path,T.controller.signal);return Dr("loader",W,[T.match],T.matches).then(I=>I[0])}else return Promise.resolve({type:oe.error,error:$e(404,{pathname:T.path})})})]);return await Promise.all([Nc(v,w,F,F.map(()=>L.signal),!1,y.loaderData),Nc(v,P.map(T=>T.match),B,P.map(T=>T.controller?T.controller.signal:null),!0)]),{loaderResults:F,fetcherResults:B}}function pa(){re=!0,Cn.push(...ma()),ae.forEach((v,b)=>{ce.has(b)&&(Yn.push(b),Zn(b))})}function Gn(v,b,w){w===void 0&&(w={}),y.fetchers.set(v,b),Ue({fetchers:new Map(y.fetchers)},{flushSync:(w&&w.flushSync)===!0})}function jn(v,b,w,P){P===void 0&&(P={});let L=fr(y.matches,b);Lo(v),Ue({errors:{[L.route.id]:w},fetchers:new Map(y.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function tu(v){return c.v7_fetcherPersist&&(On.set(v,(On.get(v)||0)+1),Re.has(v)&&Re.delete(v)),y.fetchers.get(v)||ng}function Lo(v){let b=y.fetchers.get(v);ce.has(v)&&!(b&&b.state==="loading"&&q.has(v))&&Zn(v),ae.delete(v),q.delete(v),G.delete(v),Re.delete(v),y.fetchers.delete(v)}function Up(v){if(c.v7_fetcherPersist){let b=(On.get(v)||0)-1;b<=0?(On.delete(v),Re.add(v)):On.set(v,b)}else Lo(v);Ue({fetchers:new Map(y.fetchers)})}function Zn(v){let b=ce.get(v);V(b,"Expected fetch controller: "+v),b.abort(),ce.delete(v)}function ru(v){for(let b of v){let w=tu(b),P=tt(w.data);y.fetchers.set(b,P)}}function ou(){let v=[],b=!1;for(let w of G){let P=y.fetchers.get(w);V(P,"Expected fetcher: "+w),P.state==="loading"&&(G.delete(w),v.push(w),b=!0)}return ru(v),b}function iu(v){let b=[];for(let[w,P]of q)if(P<v){let L=y.fetchers.get(w);V(L,"Expected fetcher: "+w),L.state==="loading"&&(Zn(w),q.delete(w),b.push(w))}return ru(b),b.length>0}function $p(v,b){let w=y.blockers.get(v)||Br;return Ie.get(v)!==b&&Ie.set(v,b),w}function au(v){y.blockers.delete(v),Ie.delete(v)}function No(v,b){let w=y.blockers.get(v)||Br;V(w.state==="unblocked"&&b.state==="blocked"||w.state==="blocked"&&b.state==="blocked"||w.state==="blocked"&&b.state==="proceeding"||w.state==="blocked"&&b.state==="unblocked"||w.state==="proceeding"&&b.state==="unblocked","Invalid blocker state transition: "+w.state+" -> "+b.state);let P=new Map(y.blockers);P.set(v,b),Ue({blockers:P})}function lu(v){let{currentLocation:b,nextLocation:w,historyAction:P}=v;if(Ie.size===0)return;Ie.size>1&&_r(!1,"A router only supports one blocker at a time");let L=Array.from(Ie.entries()),[F,B]=L[L.length-1],T=y.blockers.get(F);if(!(T&&T.state==="proceeding")&&B({currentLocation:b,nextLocation:w,historyAction:P}))return F}function ha(v){let b=$e(404,{pathname:v}),w=l||a,{matches:P,route:L}=Mc(w);return ma(),{notFoundMatches:P,route:L,error:b}}function jo(v,b){return{boundaryId:fr(b.partialMatches).route.id,error:$e(400,{type:"route-discovery",pathname:v,message:b.error!=null&&"message"in b.error?b.error:String(b.error)})}}function ma(v){let b=[];return mn.forEach((w,P)=>{(!v||v(P))&&(w.cancel(),b.push(P),mn.delete(P))}),b}function Bp(v,b,w){if(x=v,_=b,m=w||null,!h&&y.navigation===qa){h=!0;let P=uu(y.location,y.matches);P!=null&&Ue({restoreScrollPosition:P})}return()=>{x=null,_=null,m=null}}function su(v,b){return m&&m(v,b.map(P=>O0(P,y.loaderData)))||v.key}function Hp(v,b){if(x&&_){let w=su(v,b);x[w]=_()}}function uu(v,b){if(x){let w=su(v,b),P=x[w];if(typeof P=="number")return P}return null}function ga(v,b,w){if(f)if(v){let P=v[v.length-1].route;if(P.path&&(P.path==="*"||P.path.endsWith("/*")))return{active:!0,matches:bi(b,w,s,!0)}}else return{active:!0,matches:bi(b,w,s,!0)||[]};return{active:!1,matches:null}}async function Fo(v,b,w){let P=v,L=P.length>0?P[P.length-1].route:null;for(;;){let F=l==null,B=l||a;try{await lg(f,b,P,B,i,o,Wt,w)}catch(U){return{type:"error",error:U,partialMatches:P}}finally{F&&(a=[...a])}if(w.aborted)return{type:"aborted"};let T=Rt(B,b,s),W=!1;if(T){let U=T[T.length-1].route;if(U.index)return{type:"success",matches:T};if(U.path&&U.path.length>0)if(U.path==="*")W=!0;else return{type:"success",matches:T}}let I=bi(B,b,s,!0);if(!I||P.map(U=>U.route.id).join("-")===I.map(U=>U.route.id).join("-"))return{type:"success",matches:W?T:null};if(P=I,L=P[P.length-1].route,L.path==="*")return{type:"success",matches:P}}}function qp(v){i={},l=Eo(v,o,void 0,i)}function Vp(v,b){let w=l==null;hp(v,b,l||a,i,o),w&&(a=[...a],Ue({}))}return C={get basename(){return s},get future(){return c},get state(){return y},get routes(){return a},get window(){return n},initialize:Rp,subscribe:Dp,enableScrollRestoration:Bp,navigate:Js,fetch:Fp,revalidate:Mp,createHref:v=>e.history.createHref(v),encodeLocation:v=>e.history.encodeLocation(v),getFetcher:tu,deleteFetcher:Up,dispose:Tp,getBlocker:$p,deleteBlocker:au,patchRoutes:Vp,_internalFetchControllers:ce,_internalActiveDeferreds:mn,_internalSetRoutes:qp},C}function og(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Hl(e,n,t,r,o,i,a,l){let s,u;if(a){s=[];for(let c of n)if(s.push(c),c.route.id===a){u=c;break}}else s=n,u=n[n.length-1];let f=Ws(o||".",Vs(s,i),xt(e.pathname,t)||e.pathname,l==="path");return o==null&&(f.search=e.search,f.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Xs(f.search)&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Nn([t,f.pathname])),bt(f)}function Pc(e,n,t,r){if(!r||!og(r))return{path:t};if(r.formMethod&&!yg(r.formMethod))return{path:t,error:$e(405,{method:r.formMethod})};let o=()=>({path:t,error:$e(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=mp(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!xn(a))return o();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((k,x)=>{let[m,_]=x;return""+k+m+"="+_+`
`},""):String(r.body);return{path:t,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!xn(a))return o();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return o()}}}V(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=ql(r.formData),u=r.formData;else if(r.body instanceof FormData)s=ql(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=zc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=zc(s)}catch{return o()}let f={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(xn(f.formMethod))return{path:t,submission:f};let c=Et(t);return n&&c.search&&Xs(c.search)&&s.append("index",""),c.search="?"+s,{path:bt(c),submission:f}}function ig(e,n){let t=e;if(n){let r=e.findIndex(o=>o.route.id===n);r>=0&&(t=e.slice(0,r))}return t}function Ec(e,n,t,r,o,i,a,l,s,u,f,c,p,k,x,m){let _=m?nn(m[1])?m[1].error:m[1].data:void 0,h=e.createURL(n.location),d=e.createURL(o),g=m&&nn(m[1])?m[0]:void 0,S=g?ig(t,g):t,C=m?m[1].statusCode:void 0,y=a&&C&&C>=400,R=S.filter((D,j)=>{let{route:Y}=D;if(Y.lazy)return!0;if(Y.loader==null)return!1;if(i)return typeof Y.loader!="function"||Y.loader.hydrate?!0:n.loaderData[Y.id]===void 0&&(!n.errors||n.errors[Y.id]===void 0);if(ag(n.loaderData,n.matches[j],D)||s.some(re=>re===D.route.id))return!0;let ue=n.matches[j],Ce=D;return _c(D,he({currentUrl:h,currentParams:ue.params,nextUrl:d,nextParams:Ce.params},r,{actionResult:_,actionStatus:C,defaultShouldRevalidate:y?!1:l||h.pathname+h.search===d.pathname+d.search||h.search!==d.search||pp(ue,Ce)}))}),z=[];return c.forEach((D,j)=>{if(i||!t.some(Cn=>Cn.route.id===D.routeId)||f.has(j))return;let Y=Rt(k,D.path,x);if(!Y){z.push({key:j,routeId:D.routeId,path:D.path,matches:null,match:null,controller:null});return}let ue=n.fetchers.get(j),Ce=Xr(Y,D.path),re=!1;p.has(j)?re=!1:u.includes(j)?re=!0:ue&&ue.state!=="idle"&&ue.data===void 0?re=l:re=_c(Ce,he({currentUrl:h,currentParams:n.matches[n.matches.length-1].params,nextUrl:d,nextParams:t[t.length-1].params},r,{actionResult:_,actionStatus:C,defaultShouldRevalidate:y?!1:l})),re&&z.push({key:j,routeId:D.routeId,path:D.path,matches:Y,match:Ce,controller:new AbortController})}),[R,z]}function ag(e,n,t){let r=!n||t.route.id!==n.route.id,o=e[t.route.id]===void 0;return r||o}function pp(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function _c(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}async function lg(e,n,t,r,o,i,a,l){let s=[n,...t.map(u=>u.route.id)].join("-");try{let u=a.get(s);u||(u=e({path:n,matches:t,patch:(f,c)=>{l.aborted||hp(f,c,r,o,i)}}),a.set(s,u)),u&&mg(u)&&await u}finally{a.delete(s)}}function hp(e,n,t,r,o){if(e){var i;let a=r[e];V(a,"No route found to patch children into: routeId = "+e);let l=Eo(n,o,[e,"patch",String(((i=a.children)==null?void 0:i.length)||"0")],r);a.children?a.children.push(...l):a.children=l}else{let a=Eo(n,o,["patch",String(t.length||"0")],r);t.push(...a)}}async function Cc(e,n,t){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=t[e.id];V(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";_r(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!_0.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,he({},n(o),{lazy:void 0}))}function sg(e){return Promise.all(e.matches.map(n=>n.resolve()))}async function ug(e,n,t,r,o,i,a,l){let s=r.reduce((c,p)=>c.add(p.route.id),new Set),u=new Set,f=await e({matches:o.map(c=>{let p=s.has(c.route.id);return he({},c,{shouldLoad:p,resolve:x=>(u.add(c.route.id),p?cg(n,t,c,i,a,x,l):Promise.resolve({type:oe.data,result:void 0}))})}),request:t,params:o[0].params,context:l});return o.forEach(c=>V(u.has(c.route.id),'`match.resolve()` was not called for route id "'+c.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),f.filter((c,p)=>s.has(o[p].route.id))}async function cg(e,n,t,r,o,i,a){let l,s,u=f=>{let c,p=new Promise((m,_)=>c=_);s=()=>c(),n.signal.addEventListener("abort",s);let k=m=>typeof f!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+t.route.id+"]"))):f({request:n,params:t.params,context:a},...m!==void 0?[m]:[]),x;return i?x=i(m=>k(m)):x=(async()=>{try{return{type:"data",result:await k()}}catch(m){return{type:"error",result:m}}})(),Promise.race([x,p])};try{let f=t.route[e];if(t.route.lazy)if(f){let c,[p]=await Promise.all([u(f).catch(k=>{c=k}),Cc(t.route,o,r)]);if(c!==void 0)throw c;l=p}else if(await Cc(t.route,o,r),f=t.route[e],f)l=await u(f);else if(e==="action"){let c=new URL(n.url),p=c.pathname+c.search;throw $e(405,{method:n.method,pathname:p,routeId:t.route.id})}else return{type:oe.data,result:void 0};else if(f)l=await u(f);else{let c=new URL(n.url),p=c.pathname+c.search;throw $e(404,{pathname:p})}V(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(f){return{type:oe.error,result:f}}finally{s&&n.signal.removeEventListener("abort",s)}return l}async function dg(e){let{result:n,type:t,status:r}=e;if(gp(n)){let a;try{let l=n.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?n.body==null?a=null:a=await n.json():a=await n.text()}catch(l){return{type:oe.error,error:l}}return t===oe.error?{type:oe.error,error:new Qs(n.status,n.statusText,a),statusCode:n.status,headers:n.headers}:{type:oe.data,data:a,statusCode:n.status,headers:n.headers}}if(t===oe.error)return{type:oe.error,error:n,statusCode:To(n)?n.status:r};if(vg(n)){var o,i;return{type:oe.deferred,deferredData:n,statusCode:(o=n.init)==null?void 0:o.status,headers:((i=n.init)==null?void 0:i.headers)&&new Headers(n.init.headers)}}return{type:oe.data,data:n,statusCode:r}}function fg(e,n,t,r,o,i){let a=e.headers.get("Location");if(V(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ks.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===t)+1);a=Hl(new URL(n.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function Oc(e,n,t){if(Ks.test(e)){let r=e,o=r.startsWith("//")?new URL(n.protocol+r):new URL(r),i=xt(o.pathname,t)!=null;if(o.origin===n.origin&&i)return o.pathname+o.search+o.hash}return e}function Zt(e,n,t,r){let o=e.createURL(mp(n)).toString(),i={signal:t};if(r&&xn(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=ql(r.formData):i.body=r.formData}return new Request(o,i)}function ql(e){let n=new URLSearchParams;for(let[t,r]of e.entries())n.append(t,typeof r=="string"?r:r.name);return n}function zc(e){let n=new FormData;for(let[t,r]of e.entries())n.append(t,r);return n}function pg(e,n,t,r,o,i){let a={},l=null,s,u=!1,f={},c=r&&nn(r[1])?r[1].error:void 0;return t.forEach((p,k)=>{let x=n[k].route.id;if(V(!Nt(p),"Cannot handle redirect results in processLoaderData"),nn(p)){let m=p.error;c!==void 0&&(m=c,c=void 0),l=l||{};{let _=fr(e,x);l[_.route.id]==null&&(l[_.route.id]=m)}a[x]=void 0,u||(u=!0,s=To(p.error)?p.error.status:500),p.headers&&(f[x]=p.headers)}else Lt(p)?(o.set(x,p.deferredData),a[x]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!u&&(s=p.statusCode),p.headers&&(f[x]=p.headers)):(a[x]=p.data,p.statusCode&&p.statusCode!==200&&!u&&(s=p.statusCode),p.headers&&(f[x]=p.headers))}),c!==void 0&&r&&(l={[r[0]]:c},a[r[0]]=void 0),{loaderData:a,errors:l,statusCode:s||200,loaderHeaders:f}}function Rc(e,n,t,r,o,i,a,l){let{loaderData:s,errors:u}=pg(n,t,r,o,l);for(let f=0;f<i.length;f++){let{key:c,match:p,controller:k}=i[f];V(a!==void 0&&a[f]!==void 0,"Did not find corresponding fetcher result");let x=a[f];if(!(k&&k.signal.aborted))if(nn(x)){let m=fr(e.matches,p==null?void 0:p.route.id);u&&u[m.route.id]||(u=he({},u,{[m.route.id]:x.error})),e.fetchers.delete(c)}else if(Nt(x))V(!1,"Unhandled fetcher revalidation redirect");else if(Lt(x))V(!1,"Unhandled fetcher deferred data");else{let m=tt(x.data);e.fetchers.set(c,m)}}return{loaderData:s,errors:u}}function Tc(e,n,t,r){let o=he({},n);for(let i of t){let a=i.route.id;if(n.hasOwnProperty(a)?n[a]!==void 0&&(o[a]=n[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Dc(e){return e?nn(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function fr(e,n){return(n?e.slice(0,e.findIndex(r=>r.route.id===n)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Mc(e){let n=e.length===1?e[0]:e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function $e(e,n){let{pathname:t,routeId:r,method:o,type:i,message:a}=n===void 0?{}:n,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",i==="route-discovery"?s='Unable to match URL "'+t+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+a):o&&t&&r?s="You made a "+o+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+t+'"'):e===404?(l="Not Found",s='No route matches URL "'+t+'"'):e===405&&(l="Method Not Allowed",o&&t&&r?s="You made a "+o.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new Qs(e||500,l,new Error(s),!0)}function Lc(e){for(let n=e.length-1;n>=0;n--){let t=e[n];if(Nt(t))return{result:t,idx:n}}}function mp(e){let n=typeof e=="string"?Et(e):e;return bt(he({},n,{hash:""}))}function hg(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function mg(e){return typeof e=="object"&&e!=null&&"then"in e}function gg(e){return gp(e.result)&&J0.has(e.result.status)}function Lt(e){return e.type===oe.deferred}function nn(e){return e.type===oe.error}function Nt(e){return(e&&e.type)===oe.redirect}function vg(e){let n=e;return n&&typeof n=="object"&&typeof n.data=="object"&&typeof n.subscribe=="function"&&typeof n.cancel=="function"&&typeof n.resolveData=="function"}function gp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yg(e){return Z0.has(e.toLowerCase())}function xn(e){return Y0.has(e.toLowerCase())}async function Nc(e,n,t,r,o,i){for(let a=0;a<t.length;a++){let l=t[a],s=n[a];if(!s)continue;let u=e.find(c=>c.route.id===s.route.id),f=u!=null&&!pp(u,s)&&(i&&i[s.route.id])!==void 0;if(Lt(l)&&(o||f)){let c=r[a];V(c,"Expected an AbortSignal for revalidating fetcher deferred result"),await vp(l,c,o).then(p=>{p&&(t[a]=p||t[a])})}}}async function vp(e,n,t){if(t===void 0&&(t=!1),!await e.deferredData.resolveData(n)){if(t)try{return{type:oe.data,data:e.deferredData.unwrappedData}}catch(o){return{type:oe.error,error:o}}return{type:oe.data,data:e.deferredData.data}}}function Xs(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function Xr(e,n){let t=typeof n=="string"?Et(n).search:n.search;if(e[e.length-1].route.index&&Xs(t||""))return e[e.length-1];let r=cp(e);return r[r.length-1]}function jc(e){let{formMethod:n,formAction:t,formEncType:r,text:o,formData:i,json:a}=e;if(!(!n||!t||!r)){if(o!=null)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:n,formAction:t,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:n,formAction:t,formEncType:r,formData:void 0,json:a,text:void 0}}}function Va(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function bg(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Hr(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function xg(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function tt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function wg(e,n){try{let t=e.sessionStorage.getItem(fp);if(t){let r=JSON.parse(t);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&n.set(o,new Set(i||[]))}}catch{}}function kg(e,n){if(n.size>0){let t={};for(let[r,o]of n)t[r]=[...o];try{e.sessionStorage.setItem(fp,JSON.stringify(t))}catch(r){_r(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Vi.apply(this,arguments)}const Do=E.createContext(null),yp=E.createContext(null),Vl=E.createContext(null),Xn=E.createContext(null),Ys=E.createContext(null),_t=E.createContext({outlet:null,matches:[],isDataRoute:!1}),bp=E.createContext(null);function Sg(e,n){let{relative:t}=n===void 0?{}:n;Mo()||V(!1);let{basename:r,navigator:o}=E.useContext(Xn),{hash:i,pathname:a,search:l}=Gs(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:Nn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function Mo(){return E.useContext(Ys)!=null}function Rr(){return Mo()||V(!1),E.useContext(Ys).location}function xp(e){E.useContext(Xn).static||E.useLayoutEffect(e)}function wp(){let{isDataRoute:e}=E.useContext(_t);return e?Fg():Pg()}function Pg(){Mo()||V(!1);let e=E.useContext(Do),{basename:n,future:t,navigator:r}=E.useContext(Xn),{matches:o}=E.useContext(_t),{pathname:i}=Rr(),a=JSON.stringify(Vs(o,t.v7_relativeSplatPath)),l=E.useRef(!1);return xp(()=>{l.current=!0}),E.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let c=Ws(u,JSON.parse(a),i,f.relative==="path");e==null&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Nn([n,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[n,r,a,i,e])}function Gs(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=E.useContext(Xn),{matches:o}=E.useContext(_t),{pathname:i}=Rr(),a=JSON.stringify(Vs(o,r.v7_relativeSplatPath));return E.useMemo(()=>Ws(e,JSON.parse(a),i,t==="path"),[e,a,i,t])}function Eg(e,n,t,r){Mo()||V(!1);let{navigator:o}=E.useContext(Xn),{matches:i}=E.useContext(_t),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Rr(),f;f=u;let c=f.pathname||"/",p=c;if(s!=="/"){let m=s.replace(/^\//,"").split("/");p="/"+c.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=Rt(e,{pathname:p});return Rg(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:Nn([s,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:Nn([s,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,t,r)}function _g(){let e=Sp(),n=To(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:o},t):null,null)}const Cg=E.createElement(_g,null);class Og extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(_t.Provider,{value:this.props.routeContext},E.createElement(bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zg(e){let{routeContext:n,match:t,children:r}=e,o=E.useContext(Do);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(_t.Provider,{value:n},r)}function Rg(e,n,t,r){var o;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var i;if((i=t)!=null&&i.errors)e=t.matches;else return null}let a=e,l=(o=t)==null?void 0:o.errors;if(l!=null){let f=a.findIndex(c=>c.route.id&&(l==null?void 0:l[c.route.id])!==void 0);f>=0||V(!1),a=a.slice(0,Math.min(a.length,f+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let c=a[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:p,errors:k}=t,x=c.route.loader&&p[c.route.id]===void 0&&(!k||k[c.route.id]===void 0);if(c.route.lazy||x){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,c,p)=>{let k,x=!1,m=null,_=null;t&&(k=l&&c.route.id?l[c.route.id]:void 0,m=c.route.errorElement||Cg,s&&(u<0&&p===0?(x=!0,_=null):u===p&&(x=!0,_=c.route.hydrateFallbackElement||null)));let h=n.concat(a.slice(0,p+1)),d=()=>{let g;return k?g=m:x?g=_:c.route.Component?g=E.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=f,E.createElement(zg,{match:c,routeContext:{outlet:f,matches:h,isDataRoute:t!=null},children:g})};return t&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?E.createElement(Og,{location:t.location,revalidation:t.revalidation,component:m,error:k,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var kp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kp||{}),wt=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wt||{});function Tg(e){let n=E.useContext(Do);return n||V(!1),n}function Zs(e){let n=E.useContext(yp);return n||V(!1),n}function Dg(e){let n=E.useContext(_t);return n||V(!1),n}function ua(e){let n=Dg(),t=n.matches[n.matches.length-1];return t.route.id||V(!1),t.route.id}function Mg(){return ua(wt.UseRouteId)}function Lg(){return Zs(wt.UseNavigation).navigation}function Ng(){let e=Zs(wt.UseLoaderData),n=ua(wt.UseLoaderData);if(e.errors&&e.errors[n]!=null){console.error("You cannot `useLoaderData` in an errorElement (routeId: "+n+")");return}return e.loaderData[n]}function Sp(){var e;let n=E.useContext(bp),t=Zs(wt.UseRouteError),r=ua(wt.UseRouteError);return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function jg(){let e=E.useContext(Vl);return e==null?void 0:e._data}function Fg(){let{router:e}=Tg(kp.UseNavigateStable),n=ua(wt.UseNavigateStable),t=E.useRef(!1);return xp(()=>{t.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),t.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Vi({fromRouteId:n},i)))},[e,n])}function Pp(e){V(!1)}function Ag(e){let{basename:n="/",children:t=null,location:r,navigationType:o=ke.Pop,navigator:i,static:a=!1,future:l}=e;Mo()&&V(!1);let s=n.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:i,static:a,future:Vi({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Et(r));let{pathname:f="/",search:c="",hash:p="",state:k=null,key:x="default"}=r,m=E.useMemo(()=>{let _=xt(f,s);return _==null?null:{location:{pathname:_,search:c,hash:p,state:k,key:x},navigationType:o}},[s,f,c,p,k,x,o]);return m==null?null:E.createElement(Xn.Provider,{value:u},E.createElement(Ys.Provider,{children:t,value:m}))}function Ig(e){let{children:n,errorElement:t,resolve:r}=e;return E.createElement($g,{resolve:r,errorElement:t},E.createElement(Bg,null,n))}var sn=function(e){return e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error",e}(sn||{});const Ug=new Promise(()=>{});class $g extends E.Component{constructor(n){super(n),this.state={error:null}}static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,t){console.error("<Await> caught the following error during render",n,t)}render(){let{children:n,errorElement:t,resolve:r}=this.props,o=null,i=sn.pending;if(!(r instanceof Promise))i=sn.success,o=Promise.resolve(),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_data",{get:()=>r});else if(this.state.error){i=sn.error;let a=this.state.error;o=Promise.reject().catch(()=>{}),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_error",{get:()=>a})}else r._tracked?(o=r,i="_error"in o?sn.error:"_data"in o?sn.success:sn.pending):(i=sn.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),o=r.then(a=>Object.defineProperty(r,"_data",{get:()=>a}),a=>Object.defineProperty(r,"_error",{get:()=>a})));if(i===sn.error&&o._error instanceof Bl)throw Ug;if(i===sn.error&&!t)throw o._error;if(i===sn.error)return E.createElement(Vl.Provider,{value:o,children:t});if(i===sn.success)return E.createElement(Vl.Provider,{value:o,children:n});throw o}}function Bg(e){let{children:n}=e,t=jg(),r=typeof n=="function"?n(t):n;return E.createElement(E.Fragment,null,r)}function Wl(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;let i=[...n,o];if(r.type===E.Fragment){t.push.apply(t,Wl(r.props.children,i));return}r.type!==Pp&&V(!1),!r.props.index||!r.props.children||V(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Wl(r.props.children,i)),t.push(a)}),t}function Hg(e){let n={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(n,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(n,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(n,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ht(){return Ht=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ht.apply(this,arguments)}function Ep(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}const xi="get",Wa="application/x-www-form-urlencoded";function ca(e){return e!=null&&typeof e.tagName=="string"}function qg(e){return ca(e)&&e.tagName.toLowerCase()==="button"}function Vg(e){return ca(e)&&e.tagName.toLowerCase()==="form"}function Wg(e){return ca(e)&&e.tagName.toLowerCase()==="input"}function Qg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kg(e,n){return e.button===0&&(!n||n==="_self")&&!Qg(e)}function Ql(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((n,t)=>{let r=e[t];return n.concat(Array.isArray(r)?r.map(o=>[t,o]):[[t,r]])},[]))}function Xg(e,n){let t=Ql(e);return n&&n.forEach((r,o)=>{t.has(o)||n.getAll(o).forEach(i=>{t.append(o,i)})}),t}let oi=null;function Yg(){if(oi===null)try{new FormData(document.createElement("form"),0),oi=!1}catch{oi=!0}return oi}const Gg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qa(e){return e!=null&&!Gg.has(e)?null:e}function Zg(e,n){let t,r,o,i,a;if(Vg(e)){let l=e.getAttribute("action");r=l?xt(l,n):null,t=e.getAttribute("method")||xi,o=Qa(e.getAttribute("enctype"))||Wa,i=new FormData(e)}else if(qg(e)||Wg(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||l.getAttribute("action");if(r=s?xt(s,n):null,t=e.getAttribute("formmethod")||l.getAttribute("method")||xi,o=Qa(e.getAttribute("formenctype"))||Qa(l.getAttribute("enctype"))||Wa,i=new FormData(l,e),!Yg()){let{name:u,type:f,value:c}=e;if(f==="image"){let p=u?u+".":"";i.append(p+"x","0"),i.append(p+"y","0")}else u&&i.append(u,c)}}else{if(ca(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=xi,r=null,o=Wa,a=e}return i&&o==="text/plain"&&(a=i,i=void 0),{action:r,method:t.toLowerCase(),encType:o,formData:i,body:a}}const Jg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ev=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"],nv="6";try{window.__reactRouterVersion=nv}catch{}function tv(e,n){return rg({basename:void 0,future:Ht({},void 0,{v7_prependBasename:!0}),history:S0({window:void 0}),hydrationData:rv(),routes:e,mapRouteProperties:Hg,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function rv(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=Ht({},n,{errors:ov(n.errors)})),n}function ov(e){if(!e)return null;let n=Object.entries(e),t={};for(let[r,o]of n)if(o&&o.__type==="RouteErrorResponse")t[r]=new Qs(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",t[r]=a}catch{}}if(t[r]==null){let i=new Error(o.message);i.stack="",t[r]=i}}else t[r]=o;return t}const iv=E.createContext({isTransitioning:!1}),av=E.createContext(new Map),lv="startTransition",Fc=sh[lv],sv="flushSync",Ac=x0[sv];function uv(e){Fc?Fc(e):e()}function qr(e){Ac?Ac(e):e()}class cv{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",n(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}}function dv(e){let{fallbackElement:n,router:t,future:r}=e,[o,i]=E.useState(t.state),[a,l]=E.useState(),[s,u]=E.useState({isTransitioning:!1}),[f,c]=E.useState(),[p,k]=E.useState(),[x,m]=E.useState(),_=E.useRef(new Map),{v7_startTransition:h}=r||{},d=E.useCallback(z=>{h?uv(z):z()},[h]),g=E.useCallback((z,D)=>{let{deletedFetchers:j,unstable_flushSync:Y,unstable_viewTransitionOpts:ue}=D;j.forEach(re=>_.current.delete(re)),z.fetchers.forEach((re,Cn)=>{re.data!==void 0&&_.current.set(Cn,re.data)});let Ce=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!ue||Ce){Y?qr(()=>i(z)):d(()=>i(z));return}if(Y){qr(()=>{p&&(f&&f.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:ue.currentLocation,nextLocation:ue.nextLocation})});let re=t.window.document.startViewTransition(()=>{qr(()=>i(z))});re.finished.finally(()=>{qr(()=>{c(void 0),k(void 0),l(void 0),u({isTransitioning:!1})})}),qr(()=>k(re));return}p?(f&&f.resolve(),p.skipTransition(),m({state:z,currentLocation:ue.currentLocation,nextLocation:ue.nextLocation})):(l(z),u({isTransitioning:!0,flushSync:!1,currentLocation:ue.currentLocation,nextLocation:ue.nextLocation}))},[t.window,p,f,_,d]);E.useLayoutEffect(()=>t.subscribe(g),[t,g]),E.useEffect(()=>{s.isTransitioning&&!s.flushSync&&c(new cv)},[s]),E.useEffect(()=>{if(f&&a&&t.window){let z=a,D=f.promise,j=t.window.document.startViewTransition(async()=>{d(()=>i(z)),await D});j.finished.finally(()=>{c(void 0),k(void 0),l(void 0),u({isTransitioning:!1})}),k(j)}},[d,a,f,t.window]),E.useEffect(()=>{f&&a&&o.location.key===a.location.key&&f.resolve()},[f,p,o.location,a]),E.useEffect(()=>{!s.isTransitioning&&x&&(l(x.state),u({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),m(void 0))},[s.isTransitioning,x]),E.useEffect(()=>{},[]);let S=E.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:z=>t.navigate(z),push:(z,D,j)=>t.navigate(z,{state:D,preventScrollReset:j==null?void 0:j.preventScrollReset}),replace:(z,D,j)=>t.navigate(z,{replace:!0,state:D,preventScrollReset:j==null?void 0:j.preventScrollReset})}),[t]),C=t.basename||"/",y=E.useMemo(()=>({router:t,navigator:S,static:!1,basename:C}),[t,S,C]),R=E.useMemo(()=>({v7_relativeSplatPath:t.future.v7_relativeSplatPath}),[t.future.v7_relativeSplatPath]);return E.createElement(E.Fragment,null,E.createElement(Do.Provider,{value:y},E.createElement(yp.Provider,{value:o},E.createElement(av.Provider,{value:_.current},E.createElement(iv.Provider,{value:s},E.createElement(Ag,{basename:C,location:o.location,navigationType:o.historyAction,navigator:S,future:R},o.initialized||t.future.v7_partialHydration?E.createElement(fv,{routes:t.routes,future:t.future,state:o}):n))))),null)}const fv=E.memo(pv);function pv(e){let{routes:n,future:t,state:r}=e;return Eg(n,void 0,r,t)}const hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gv=E.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:f,unstable_viewTransition:c}=n,p=Ep(n,Jg),{basename:k}=E.useContext(Xn),x,m=!1;if(typeof u=="string"&&mv.test(u)&&(x=u,hv))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=xt(S.pathname,k);S.origin===g.origin&&C!=null?u=C+S.search+S.hash:m=!0}catch{}let _=Sg(u,{relative:o}),h=bv(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:o,unstable_viewTransition:c});function d(g){r&&r(g),g.defaultPrevented||h(g)}return E.createElement("a",Ht({},p,{href:x||_,onClick:m||i?r:d,ref:t,target:s}))}),vv=E.forwardRef((e,n)=>{let{fetcherKey:t,navigate:r,reloadDocument:o,replace:i,state:a,method:l=xi,action:s,onSubmit:u,relative:f,preventScrollReset:c,unstable_viewTransition:p}=e,k=Ep(e,ev),x=Pv(),m=Ev(s,{relative:f}),_=l.toLowerCase()==="get"?"get":"post",h=d=>{if(u&&u(d),d.defaultPrevented)return;d.preventDefault();let g=d.nativeEvent.submitter,S=(g==null?void 0:g.getAttribute("formmethod"))||l;x(g||d.currentTarget,{fetcherKey:t,method:S,navigate:r,replace:i,state:a,relative:f,preventScrollReset:c,unstable_viewTransition:p})};return E.createElement("form",Ht({ref:n,method:_,action:m,onSubmit:o?u:h},k))});var Kl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kl||(Kl={}));var Ic;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ic||(Ic={}));function yv(e){let n=E.useContext(Do);return n||V(!1),n}function bv(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=n===void 0?{}:n,s=wp(),u=Rr(),f=Gs(e,{relative:a});return E.useCallback(c=>{if(Kg(c,t)){c.preventDefault();let p=r!==void 0?r:bt(u)===bt(f);s(e,{replace:p,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,f,r,o,t,e,i,a,l])}function xv(e){let n=E.useRef(Ql(e)),t=E.useRef(!1),r=Rr(),o=E.useMemo(()=>Xg(r.search,t.current?null:n.current),[r.search]),i=wp(),a=E.useCallback((l,s)=>{const u=Ql(typeof l=="function"?l(o):l);t.current=!0,i("?"+u,s)},[i,o]);return[o,a]}function wv(){if(typeof document>"u")throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}let kv=0,Sv=()=>"__"+String(++kv)+"__";function Pv(){let{router:e}=yv(Kl.UseSubmit),{basename:n}=E.useContext(Xn),t=Mg();return E.useCallback(function(r,o){o===void 0&&(o={}),wv();let{action:i,method:a,encType:l,formData:s,body:u}=Zg(r,n);if(o.navigate===!1){let f=o.fetcherKey||Sv();e.fetch(f,t,o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:u,formMethod:o.method||a,formEncType:o.encType||l,unstable_flushSync:o.unstable_flushSync})}else e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:u,formMethod:o.method||a,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:t,unstable_flushSync:o.unstable_flushSync,unstable_viewTransition:o.unstable_viewTransition})},[e,n,t])}function Ev(e,n){let{relative:t}=n===void 0?{}:n,{basename:r}=E.useContext(Xn),o=E.useContext(_t);o||V(!1);let[i]=o.matches.slice(-1),a=Ht({},Gs(e||".",{relative:t})),l=Rr();if(e==null){a.search=l.search;let s=new URLSearchParams(a.search);s.has("index")&&s.get("index")===""&&(s.delete("index"),a.search=s.toString()?"?"+s.toString():"")}return(!e||e===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:Nn([r,a.pathname])),bt(a)}function _p(e){const n=e.get("color")||"#42bff5",t=e.get("mode")||"monochrome",r=e.get("count")||"5";return{color:n.slice(1),mode:t,count:r}}async function _v(e){const n=await fetch(e);if(!n.ok)throw{msg:"Failed to Fetch Response",status:n.status,manual:!0};const t=await n.json();if(console.log("API DAta: ",t),t.code===400)throw{msg:"API RETURNED AN ERROR ",status:t.code,manual:!0};return Cv(t.colors)}function Cv(e){return e.map(t=>({hex:t.hex.value,name:t.name.value}))}function Ov(){const[e]=xv(),{color:n,mode:t,count:r}=_p(e);return $.jsx("div",{className:"form-container",children:$.jsxs(vv,{replace:!0,className:"form",children:[$.jsx("input",{type:"color",name:"color",id:"color",defaultValue:`#${n}`,"aria-label":"color"}),$.jsxs("div",{className:"inputContainer",children:[$.jsx("label",{htmlFor:"mode",children:"Mode"}),$.jsxs("select",{name:"mode",id:"mode",defaultValue:t,className:"border",children:[$.jsx("option",{value:"monochrome",children:"Monochrome"}),$.jsx("option",{value:"monochrome-dark",children:"Monochrome Dark"}),$.jsx("option",{value:"monochrome-light",children:"Monochrome Light"}),$.jsx("option",{value:"analogic",children:"Analogic"}),$.jsx("option",{value:"complement",children:"Complement"}),$.jsx("option",{value:"analogic-complement",children:"Analogic Complement"}),$.jsx("option",{value:"triad",children:"Triad"}),$.jsx("option",{value:"quad",children:"Quad"})]})]}),$.jsxs("div",{className:"inputContainer",children:[$.jsx("label",{htmlFor:"count",children:"Count"}),$.jsx("input",{type:"number",name:"count",id:"count",max:50,min:1,defaultValue:r,className:"border",required:!0})]}),$.jsx("button",{className:"btn border",children:"Get scheme"})]})})}function _e(e,n){n===void 0&&(n={});var t=n.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}_e(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var kn=function(){return kn=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},kn.apply(this,arguments)};function Wi(e){return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Wi(e)}var zv=/^\s+/,Rv=/\s+$/;function A(e,n){if(n=n||{},(e=e||"")instanceof A)return e;if(!(this instanceof A))return new A(e,n);var t=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,f=!1;typeof r=="string"&&(r=function(x){x=x.replace(zv,"").replace(Rv,"").toLowerCase();var m,_=!1;if(Xl[x])x=Xl[x],_=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=vn.rgb.exec(x))?{r:m[1],g:m[2],b:m[3]}:(m=vn.rgba.exec(x))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=vn.hsl.exec(x))?{h:m[1],s:m[2],l:m[3]}:(m=vn.hsla.exec(x))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=vn.hsv.exec(x))?{h:m[1],s:m[2],v:m[3]}:(m=vn.hsva.exec(x))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=vn.hex8.exec(x))?{r:Je(m[1]),g:Je(m[2]),b:Je(m[3]),a:Vc(m[4]),format:_?"name":"hex8"}:(m=vn.hex6.exec(x))?{r:Je(m[1]),g:Je(m[2]),b:Je(m[3]),format:_?"name":"hex"}:(m=vn.hex4.exec(x))?{r:Je(m[1]+""+m[1]),g:Je(m[2]+""+m[2]),b:Je(m[3]+""+m[3]),a:Vc(m[4]+""+m[4]),format:_?"name":"hex8"}:(m=vn.hex3.exec(x))?{r:Je(m[1]+""+m[1]),g:Je(m[2]+""+m[2]),b:Je(m[3]+""+m[3]),format:_?"name":"hex"}:!1}(r)),Wi(r)=="object"&&(An(r.r)&&An(r.g)&&An(r.b)?(c=r.r,p=r.g,k=r.b,o={r:255*fe(c,255),g:255*fe(p,255),b:255*fe(k,255)},u=!0,f=String(r.r).substr(-1)==="%"?"prgb":"rgb"):An(r.h)&&An(r.s)&&An(r.v)?(a=Yr(r.s),l=Yr(r.v),o=function(x,m,_){x=6*fe(x,360),m=fe(m,100),_=fe(_,100);var h=Math.floor(x),d=x-h,g=_*(1-m),S=_*(1-d*m),C=_*(1-(1-d)*m),y=h%6,R=[_,S,g,g,C,_][y],z=[C,_,_,S,g,g][y],D=[g,g,C,_,_,S][y];return{r:255*R,g:255*z,b:255*D}}(r.h,a,l),u=!0,f="hsv"):An(r.h)&&An(r.s)&&An(r.l)&&(a=Yr(r.s),s=Yr(r.l),o=function(x,m,_){var h,d,g;function S(R,z,D){return D<0&&(D+=1),D>1&&(D-=1),D<1/6?R+6*(z-R)*D:D<.5?z:D<2/3?R+(z-R)*(2/3-D)*6:R}if(x=fe(x,360),m=fe(m,100),_=fe(_,100),m===0)h=d=g=_;else{var C=_<.5?_*(1+m):_+m-_*m,y=2*_-C;h=S(y,C,x+1/3),d=S(y,C,x),g=S(y,C,x-1/3)}return{r:255*h,g:255*d,b:255*g}}(r.h,a,s),u=!0,f="hsl"),r.hasOwnProperty("a")&&(i=r.a));var c,p,k;return i=Cp(i),{ok:u,format:r.format||f,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||t.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}function Uc(e,n,t){e=fe(e,255),n=fe(n,255),t=fe(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,l}}function $c(e,n,t){e=fe(e,255),n=fe(n,255),t=fe(t,255);var r,o,i=Math.max(e,n,t),a=Math.min(e,n,t),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(n-t)/s+(n<t?6:0);break;case n:r=(t-e)/s+2;break;case t:r=(e-n)/s+4}r/=6}return{h:r,s:o,v:l}}function Bc(e,n,t,r){var o=[Sn(Math.round(e).toString(16)),Sn(Math.round(n).toString(16)),Sn(Math.round(t).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Hc(e,n,t,r){return[Sn(Op(r)),Sn(Math.round(e).toString(16)),Sn(Math.round(n).toString(16)),Sn(Math.round(t).toString(16))].join("")}function Tv(e,n){n=n===0?0:n||10;var t=A(e).toHsl();return t.s-=n/100,t.s=da(t.s),A(t)}function Dv(e,n){n=n===0?0:n||10;var t=A(e).toHsl();return t.s+=n/100,t.s=da(t.s),A(t)}function Mv(e){return A(e).desaturate(100)}function Lv(e,n){n=n===0?0:n||10;var t=A(e).toHsl();return t.l+=n/100,t.l=da(t.l),A(t)}function Nv(e,n){n=n===0?0:n||10;var t=A(e).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-n/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-n/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-n/100*255))),A(t)}function jv(e,n){n=n===0?0:n||10;var t=A(e).toHsl();return t.l-=n/100,t.l=da(t.l),A(t)}function Fv(e,n){var t=A(e).toHsl(),r=(t.h+n)%360;return t.h=r<0?360+r:r,A(t)}function Av(e){var n=A(e).toHsl();return n.h=(n.h+180)%360,A(n)}function qc(e,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var t=A(e).toHsl(),r=[A(e)],o=360/n,i=1;i<n;i++)r.push(A({h:(t.h+i*o)%360,s:t.s,l:t.l}));return r}function Iv(e){var n=A(e).toHsl(),t=n.h;return[A(e),A({h:(t+72)%360,s:n.s,l:n.l}),A({h:(t+216)%360,s:n.s,l:n.l})]}function Uv(e,n,t){n=n||6,t=t||30;var r=A(e).toHsl(),o=360/t,i=[A(e)];for(r.h=(r.h-(o*n>>1)+720)%360;--n;)r.h=(r.h+o)%360,i.push(A(r));return i}function $v(e,n){n=n||6;for(var t=A(e).toHsv(),r=t.h,o=t.s,i=t.v,a=[],l=1/n;n--;)a.push(A({h:r,s:o,v:i})),i=(i+l)%1;return a}A.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,n,t,r=this.toRgb();return e=r.r/255,n=r.g/255,t=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))},setAlpha:function(e){return this._a=Cp(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=$c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=$c(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+n+", "+t+"%, "+r+"%)":"hsva("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Uc(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Uc(this._r,this._g,this._b),n=Math.round(360*e.h),t=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+n+", "+t+"%, "+r+"%)":"hsla("+n+", "+t+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Bc(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(n,t,r,o,i){var a=[Sn(Math.round(n).toString(16)),Sn(Math.round(t).toString(16)),Sn(Math.round(r).toString(16)),Sn(Op(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*fe(this._r,255))+"%",g:Math.round(100*fe(this._g,255))+"%",b:Math.round(100*fe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*fe(this._r,255))+"%, "+Math.round(100*fe(this._g,255))+"%, "+Math.round(100*fe(this._b,255))+"%)":"rgba("+Math.round(100*fe(this._r,255))+"%, "+Math.round(100*fe(this._g,255))+"%, "+Math.round(100*fe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Bv[Bc(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var n="#"+Hc(this._r,this._g,this._b,this._a),t=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=A(e);t="#"+Hc(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+t+")"},toString:function(e){var n=!!e;e=e||this._format;var t=!1,r=this._a<1&&this._a>=0;return n||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(t=this.toRgbString()),e==="prgb"&&(t=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(t=this.toHexString()),e==="hex3"&&(t=this.toHexString(!0)),e==="hex4"&&(t=this.toHex8String(!0)),e==="hex8"&&(t=this.toHex8String()),e==="name"&&(t=this.toName()),e==="hsl"&&(t=this.toHslString()),e==="hsv"&&(t=this.toHsvString()),t||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return A(this.toString())},_applyModification:function(e,n){var t=e.apply(null,[this].concat([].slice.call(n)));return this._r=t._r,this._g=t._g,this._b=t._b,this.setAlpha(t._a),this},lighten:function(){return this._applyModification(Lv,arguments)},brighten:function(){return this._applyModification(Nv,arguments)},darken:function(){return this._applyModification(jv,arguments)},desaturate:function(){return this._applyModification(Tv,arguments)},saturate:function(){return this._applyModification(Dv,arguments)},greyscale:function(){return this._applyModification(Mv,arguments)},spin:function(){return this._applyModification(Fv,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(Uv,arguments)},complement:function(){return this._applyCombination(Av,arguments)},monochromatic:function(){return this._applyCombination($v,arguments)},splitcomplement:function(){return this._applyCombination(Iv,arguments)},triad:function(){return this._applyCombination(qc,[3])},tetrad:function(){return this._applyCombination(qc,[4])}},A.fromRatio=function(e,n){if(Wi(e)=="object"){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=r==="a"?e[r]:Yr(e[r]));e=t}return A(e,n)},A.equals=function(e,n){return!(!e||!n)&&A(e).toRgbString()==A(n).toRgbString()},A.random=function(){return A.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},A.mix=function(e,n,t){t=t===0?0:t||50;var r=A(e).toRgb(),o=A(n).toRgb(),i=t/100;return A({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},A.readability=function(e,n){var t=A(e),r=A(n);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)},A.isReadable=function(e,n,t){var r,o,i=A.readability(e,n);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(t)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},A.mostReadable=function(e,n,t){var r,o,i,a,l=null,s=0;o=(t=t||{}).includeFallbackColors,i=t.level,a=t.size;for(var u=0;u<n.length;u++)(r=A.readability(e,n[u]))>s&&(s=r,l=A(n[u]));return A.isReadable(e,l,{level:i,size:a})||!o?l:(t.includeFallbackColors=!1,A.mostReadable(e,["#fff","#000"],t))};var Xl=A.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Bv=A.hexNames=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[e[t]]=t);return n}(Xl);function Cp(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function fe(e,n){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var t=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(n,Math.max(0,parseFloat(e))),t&&(e=parseInt(e*n,10)/100),Math.abs(e-n)<1e-6?1:e%n/parseFloat(n)}function da(e){return Math.min(1,Math.max(0,e))}function Je(e){return parseInt(e,16)}function Sn(e){return e.length==1?"0"+e:""+e}function Yr(e){return e<=1&&(e=100*e+"%"),e}function Op(e){return Math.round(255*parseFloat(e)).toString(16)}function Vc(e){return Je(e)/255}var nt,ii,ai,vn=(ii="[\\s|\\(]+("+(nt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+nt+")[,|\\s]+("+nt+")\\s*\\)?",ai="[\\s|\\(]+("+nt+")[,|\\s]+("+nt+")[,|\\s]+("+nt+")[,|\\s]+("+nt+")\\s*\\)?",{CSS_UNIT:new RegExp(nt),rgb:new RegExp("rgb"+ii),rgba:new RegExp("rgba"+ai),hsl:new RegExp("hsl"+ii),hsla:new RegExp("hsla"+ai),hsv:new RegExp("hsv"+ii),hsva:new RegExp("hsva"+ai),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function An(e){return!!vn.CSS_UNIT.exec(e)}var Hv=function(e,n){var t=(typeof e=="string"?parseInt(e):e)||0;if(t>=-5&&t<=5){var r=t,o=parseFloat(n),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:n}},qv=function(e,n){var t=e||{},r="";switch(n){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(t.fontSize){var i=t.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var f=0;for(u=Object.getOwnPropertySymbols(a);f<u.length;f++)l.indexOf(u[f])<0&&Object.prototype.propertyIsEnumerable.call(a,u[f])&&(s[u[f]]=a[u[f]])}return s}(t,["fontSize"]),r=i}return{fontSize:r,styles:o}},Vv={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Wv=function(e){var n=e.className,t=e.text,r=e.textColor,o=e.staticText,i=e.style;return t?We.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:kn(kn(kn({},o&&Vv),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof t=="string"&&t.length?t:"loading"):null},zp="rgb(50, 205, 50)";function Qv(e,n){n===void 0&&(n=0);var t=[];return function r(o,i){return i===void 0&&(i=0),t.push.apply(t,o),t.length<i&&r(t,i),t.slice(0,i)}(e,n)}_e(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);A(zp).toRgb();Array.from({length:4},function(e,n){return"--atom-phase".concat(n+1,"-rgb")});_e(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--commet-phase".concat(n+1,"-color")});_e(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--OP-annulus-phase".concat(n+1,"-color")});function Ka(e){return e&&e.Math===Math&&e}_e(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ka(typeof window=="object"&&window)||Ka(typeof self=="object"&&self)||Ka(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,n){return"--OP-dotted-phase".concat(n+1,"-color")});_e(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--OP-spokes-phase".concat(n+1,"-color")});_e(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")});_e(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]});_e(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--four-square-phase".concat(n+1,"-color")});_e(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);var Jt=Array.from({length:4},function(e,n){return"--mosaic-phase".concat(n+1,"-color")}),Wc=function(e){var n,t=qv(e==null?void 0:e.style,e==null?void 0:e.size),r=t.styles,o=t.fontSize,i=e==null?void 0:e.easing,a=Hv(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,l=Math.round(parseFloat(a)/9*100)/100;l+="s";var s=function(u){var f={};if(u instanceof Array){for(var c=Qv(u,Jt.length),p=0;p<c.length&&!(p>=4);p++)f[Jt[p]]=c[p];return f}try{if(typeof u!="string")throw new Error("Color String expected");for(var k=0;k<Jt.length;k++)f[Jt[k]]=u}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),k=0;k<Jt.length;k++)f[Jt[k]]=zp}return f}((n=e==null?void 0:e.color)!==null&&n!==void 0?n:"");return We.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:kn(kn(kn(kn(kn({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},We.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:kn({},l&&{"--mosaic-skip-interval":l})},We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),We.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),We.createElement(Wv,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};_e(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--riple-phase".concat(n+1,"-color")});_e(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-pulsate-phase".concat(n+1,"-color")});_e(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});_e(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bob-phase".concat(n+1,"-color")});_e(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--TD-bounce-phase".concat(n+1,"-color")});_e(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--shape-phase".concat(n+1,"-color")});_e(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--trophySpin-phase".concat(n+1,"-color")});_e(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--slab-phase".concat(n+1,"-color")});_e(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,n){return"--life-line-phase".concat(n+1,"-color")});function Kv({children:e}){return $.jsx($.Fragment,{children:$.jsx("div",{className:"placeholder-container",children:e})})}function Xv({request:e}){const n=new URL(e.url).searchParams,{color:t,mode:r,count:o}=_p(n),i="https://www.thecolorapi.com/scheme",a=`?hex=${t}&mode=${r}&count=${o}&format=json`;return X0({colorsInfo:_v(i+a)})}function Yv(){const e=Ng(),n=Lg(),t=n.state==="loading"&&n.formData!=null&&n.formAction===n.location.pathname+n.location.search,r=n.state==="loading"&&n.formData!=null&&n.formAction!==n.location.pathname+n.location.search;function o(i){return $.jsx(k0,{colorsInfo:i})}return $.jsxs("main",{children:[$.jsx(Ov,{}),t||r?$.jsx(Kv,{children:$.jsx(Wc,{color:["#b956a9","#d7b54a","#efff00"],size:"large"})}):$.jsx(E.Suspense,{fallback:$.jsx(Wc,{color:["#9d00ff","#b956a9","#d7b54a","#efff00"],size:"large"}),children:$.jsx(Ig,{resolve:e.colorsInfo,children:o})})]})}function Gv(){return $.jsx("nav",{children:$.jsx("h1",{children:"Color Scheme Generator"})})}function Zv({width:e="100%",height:n="100%",backgroundColor:t="white",links:r=[{path:"/",text:"Go to Homepage"}]}){const o=Sp();console.log("Error:",o),To(o)&&console.log("isRouteErrorResponse is true");let i,a;o.manual?{msg:i,status:a}=o:(i="Internal Server Error",a=500);const l=r.map(s=>$.jsx(gv,{to:s.path,className:"error-btn",children:s.text}));return console.log(l),$.jsx("div",{style:{width:e,height:n,backgroundColor:t},children:$.jsxs("div",{className:"error-container",children:[$.jsx("div",{className:"xl-font",children:"Oops!"}),$.jsxs("h2",{className:"error-heading",children:[a," - ",i]}),$.jsx("p",{className:"error-body",children:"You can try reloading the page or go back to HomePage"}),l]})})}function Jv(){const e=tv(Wl($.jsx(Pp,{path:"/",element:$.jsx(Yv,{}),loader:Xv,errorElement:$.jsx(Zv,{width:"100%",height:"90vh",backgroundColor:"whitesmoke"})})));return $.jsxs($.Fragment,{children:[$.jsx(Gv,{}),$.jsx(dv,{router:e})]})}Xa.createRoot(document.getElementById("root")).render($.jsx(Jv,{}));
