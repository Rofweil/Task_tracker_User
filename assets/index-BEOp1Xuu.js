(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var lc={exports:{}},vs={},ac={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Y0(){if(Zp)return re;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),y=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=y&&I[y]||I["@@iterator"],typeof I=="function"?I:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,b={};function U(I,P,ne){this.props=I,this.context=P,this.refs=b,this.updater=ne||N}U.prototype.isReactComponent={},U.prototype.setState=function(I,P){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,P,"setState")},U.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function F(){}F.prototype=U.prototype;function V(I,P,ne){this.props=I,this.context=P,this.refs=b,this.updater=ne||N}var X=V.prototype=new F;X.constructor=V,R(X,U.prototype),X.isPureReactComponent=!0;var G=Array.isArray,je=Object.prototype.hasOwnProperty,Me={current:null},Ve={key:!0,ref:!0,__self:!0,__source:!0};function $e(I,P,ne){var oe,ce={},de=null,ye=null;if(P!=null)for(oe in P.ref!==void 0&&(ye=P.ref),P.key!==void 0&&(de=""+P.key),P)je.call(P,oe)&&!Ve.hasOwnProperty(oe)&&(ce[oe]=P[oe]);var pe=arguments.length-2;if(pe===1)ce.children=ne;else if(1<pe){for(var Te=Array(pe),It=0;It<pe;It++)Te[It]=arguments[It+2];ce.children=Te}if(I&&I.defaultProps)for(oe in pe=I.defaultProps,pe)ce[oe]===void 0&&(ce[oe]=pe[oe]);return{$$typeof:r,type:I,key:de,ref:ye,props:ce,_owner:Me.current}}function Jt(I,P){return{$$typeof:r,type:I.type,key:P,ref:I.ref,props:I.props,_owner:I._owner}}function ae(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function Se(I){var P={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ne){return P[ne]})}var Ze=/\/+/g;function Ne(I,P){return typeof I=="object"&&I!==null&&I.key!=null?Se(""+I.key):P.toString(36)}function mt(I,P,ne,oe,ce){var de=typeof I;(de==="undefined"||de==="boolean")&&(I=null);var ye=!1;if(I===null)ye=!0;else switch(de){case"string":case"number":ye=!0;break;case"object":switch(I.$$typeof){case r:case e:ye=!0}}if(ye)return ye=I,ce=ce(ye),I=oe===""?"."+Ne(ye,0):oe,G(ce)?(ne="",I!=null&&(ne=I.replace(Ze,"$&/")+"/"),mt(ce,P,ne,"",function(It){return It})):ce!=null&&(ae(ce)&&(ce=Jt(ce,ne+(!ce.key||ye&&ye.key===ce.key?"":(""+ce.key).replace(Ze,"$&/")+"/")+I)),P.push(ce)),1;if(ye=0,oe=oe===""?".":oe+":",G(I))for(var pe=0;pe<I.length;pe++){de=I[pe];var Te=oe+Ne(de,pe);ye+=mt(de,P,ne,Te,ce)}else if(Te=w(I),typeof Te=="function")for(I=Te.call(I),pe=0;!(de=I.next()).done;)de=de.value,Te=oe+Ne(de,pe++),ye+=mt(de,P,ne,Te,ce);else if(de==="object")throw P=String(I),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ye}function At(I,P,ne){if(I==null)return I;var oe=[],ce=0;return mt(I,oe,"","",function(de){return P.call(ne,de,ce++)}),oe}function it(I){if(I._status===-1){var P=I._result;P=P(),P.then(function(ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=ne)},function(ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=ne)}),I._status===-1&&(I._status=0,I._result=P)}if(I._status===1)return I._result.default;throw I._result}var ke={current:null},j={transition:null},Q={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:j,ReactCurrentOwner:Me};function B(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:At,forEach:function(I,P,ne){At(I,function(){P.apply(this,arguments)},ne)},count:function(I){var P=0;return At(I,function(){P++}),P},toArray:function(I){return At(I,function(P){return P})||[]},only:function(I){if(!ae(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},re.Component=U,re.Fragment=n,re.Profiler=l,re.PureComponent=V,re.StrictMode=s,re.Suspense=p,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,re.act=B,re.cloneElement=function(I,P,ne){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var oe=R({},I.props),ce=I.key,de=I.ref,ye=I._owner;if(P!=null){if(P.ref!==void 0&&(de=P.ref,ye=Me.current),P.key!==void 0&&(ce=""+P.key),I.type&&I.type.defaultProps)var pe=I.type.defaultProps;for(Te in P)je.call(P,Te)&&!Ve.hasOwnProperty(Te)&&(oe[Te]=P[Te]===void 0&&pe!==void 0?pe[Te]:P[Te])}var Te=arguments.length-2;if(Te===1)oe.children=ne;else if(1<Te){pe=Array(Te);for(var It=0;It<Te;It++)pe[It]=arguments[It+2];oe.children=pe}return{$$typeof:r,type:I.type,key:ce,ref:de,props:oe,_owner:ye}},re.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},re.createElement=$e,re.createFactory=function(I){var P=$e.bind(null,I);return P.type=I,P},re.createRef=function(){return{current:null}},re.forwardRef=function(I){return{$$typeof:f,render:I}},re.isValidElement=ae,re.lazy=function(I){return{$$typeof:E,_payload:{_status:-1,_result:I},_init:it}},re.memo=function(I,P){return{$$typeof:g,type:I,compare:P===void 0?null:P}},re.startTransition=function(I){var P=j.transition;j.transition={};try{I()}finally{j.transition=P}},re.unstable_act=B,re.useCallback=function(I,P){return ke.current.useCallback(I,P)},re.useContext=function(I){return ke.current.useContext(I)},re.useDebugValue=function(){},re.useDeferredValue=function(I){return ke.current.useDeferredValue(I)},re.useEffect=function(I,P){return ke.current.useEffect(I,P)},re.useId=function(){return ke.current.useId()},re.useImperativeHandle=function(I,P,ne){return ke.current.useImperativeHandle(I,P,ne)},re.useInsertionEffect=function(I,P){return ke.current.useInsertionEffect(I,P)},re.useLayoutEffect=function(I,P){return ke.current.useLayoutEffect(I,P)},re.useMemo=function(I,P){return ke.current.useMemo(I,P)},re.useReducer=function(I,P,ne){return ke.current.useReducer(I,P,ne)},re.useRef=function(I){return ke.current.useRef(I)},re.useState=function(I){return ke.current.useState(I)},re.useSyncExternalStore=function(I,P,ne){return ke.current.useSyncExternalStore(I,P,ne)},re.useTransition=function(){return ke.current.useTransition()},re.version="18.3.1",re}var em;function Zc(){return em||(em=1,ac.exports=Y0()),ac.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Q0(){if(tm)return vs;tm=1;var r=Zc(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,g){var E,y={},w=null,N=null;g!==void 0&&(w=""+g),p.key!==void 0&&(w=""+p.key),p.ref!==void 0&&(N=p.ref);for(E in p)s.call(p,E)&&!u.hasOwnProperty(E)&&(y[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)y[E]===void 0&&(y[E]=p[E]);return{$$typeof:e,type:f,key:w,ref:N,props:y,_owner:l.current}}return vs.Fragment=n,vs.jsx=d,vs.jsxs=d,vs}var nm;function X0(){return nm||(nm=1,lc.exports=Q0()),lc.exports}var _=X0(),fl={},uc={exports:{}},Et={},cc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function J0(){return rm||(rm=1,(function(r){function e(j,Q){var B=j.length;j.push(Q);e:for(;0<B;){var I=B-1>>>1,P=j[I];if(0<l(P,Q))j[I]=Q,j[B]=P,B=I;else break e}}function n(j){return j.length===0?null:j[0]}function s(j){if(j.length===0)return null;var Q=j[0],B=j.pop();if(B!==Q){j[0]=B;e:for(var I=0,P=j.length,ne=P>>>1;I<ne;){var oe=2*(I+1)-1,ce=j[oe],de=oe+1,ye=j[de];if(0>l(ce,B))de<P&&0>l(ye,ce)?(j[I]=ye,j[de]=B,I=de):(j[I]=ce,j[oe]=B,I=oe);else if(de<P&&0>l(ye,B))j[I]=ye,j[de]=B,I=de;else break e}}return Q}function l(j,Q){var B=j.sortIndex-Q.sortIndex;return B!==0?B:j.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();r.unstable_now=function(){return d.now()-f}}var p=[],g=[],E=1,y=null,w=3,N=!1,R=!1,b=!1,U=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(j){for(var Q=n(g);Q!==null;){if(Q.callback===null)s(g);else if(Q.startTime<=j)s(g),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=n(g)}}function G(j){if(b=!1,X(j),!R)if(n(p)!==null)R=!0,it(je);else{var Q=n(g);Q!==null&&ke(G,Q.startTime-j)}}function je(j,Q){R=!1,b&&(b=!1,F($e),$e=-1),N=!0;var B=w;try{for(X(Q),y=n(p);y!==null&&(!(y.expirationTime>Q)||j&&!Se());){var I=y.callback;if(typeof I=="function"){y.callback=null,w=y.priorityLevel;var P=I(y.expirationTime<=Q);Q=r.unstable_now(),typeof P=="function"?y.callback=P:y===n(p)&&s(p),X(Q)}else s(p);y=n(p)}if(y!==null)var ne=!0;else{var oe=n(g);oe!==null&&ke(G,oe.startTime-Q),ne=!1}return ne}finally{y=null,w=B,N=!1}}var Me=!1,Ve=null,$e=-1,Jt=5,ae=-1;function Se(){return!(r.unstable_now()-ae<Jt)}function Ze(){if(Ve!==null){var j=r.unstable_now();ae=j;var Q=!0;try{Q=Ve(!0,j)}finally{Q?Ne():(Me=!1,Ve=null)}}else Me=!1}var Ne;if(typeof V=="function")Ne=function(){V(Ze)};else if(typeof MessageChannel<"u"){var mt=new MessageChannel,At=mt.port2;mt.port1.onmessage=Ze,Ne=function(){At.postMessage(null)}}else Ne=function(){U(Ze,0)};function it(j){Ve=j,Me||(Me=!0,Ne())}function ke(j,Q){$e=U(function(){j(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){R||N||(R=!0,it(je))},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Jt=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_getFirstCallbackNode=function(){return n(p)},r.unstable_next=function(j){switch(w){case 1:case 2:case 3:var Q=3;break;default:Q=w}var B=w;w=Q;try{return j()}finally{w=B}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,Q){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var B=w;w=j;try{return Q()}finally{w=B}},r.unstable_scheduleCallback=function(j,Q,B){var I=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?I+B:I):B=I,j){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=B+P,j={id:E++,callback:Q,priorityLevel:j,startTime:B,expirationTime:P,sortIndex:-1},B>I?(j.sortIndex=B,e(g,j),n(p)===null&&j===n(g)&&(b?(F($e),$e=-1):b=!0,ke(G,B-I))):(j.sortIndex=P,e(p,j),R||N||(R=!0,it(je))),j},r.unstable_shouldYield=Se,r.unstable_wrapCallback=function(j){var Q=w;return function(){var B=w;w=Q;try{return j.apply(this,arguments)}finally{w=B}}}})(dc)),dc}var im;function Z0(){return im||(im=1,cc.exports=J0()),cc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function ew(){if(sm)return Et;sm=1;var r=Zc(),e=Z0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},y={};function w(t){return p.call(y,t)?!0:p.call(E,t)?!1:g.test(t)?y[t]=!0:(E[t]=!0,!1)}function N(t,i,o,a){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R(t,i,o,a){if(i===null||typeof i>"u"||N(t,i,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,a,c,h,m){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=m}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){U[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];U[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){U[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){U[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){U[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){U[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){U[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){U[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){U[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function V(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(F,V);U[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(F,V);U[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(F,V);U[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){U[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),U.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){U[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function X(t,i,o,a){var c=U.hasOwnProperty(i)?U[i]:null;(c!==null?c.type!==0:a||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(R(i,o,c,a)&&(o=null),a||c===null?w(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,a=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,a?t.setAttributeNS(a,i,o):t.setAttribute(i,o))))}var G=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Me=Symbol.for("react.portal"),Ve=Symbol.for("react.fragment"),$e=Symbol.for("react.strict_mode"),Jt=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Ze=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),mt=Symbol.for("react.suspense_list"),At=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),j=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var B=Object.assign,I;function P(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var ne=!1;function oe(t,i){if(!t||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(x){var a=x}Reflect.construct(t,[],i)}else{try{i.call()}catch(x){a=x}t.call(i.prototype)}else{try{throw Error()}catch(x){a=x}t()}}catch(x){if(x&&a&&typeof x.stack=="string"){for(var c=x.stack.split(`
`),h=a.stack.split(`
`),m=c.length-1,v=h.length-1;1<=m&&0<=v&&c[m]!==h[v];)v--;for(;1<=m&&0<=v;m--,v--)if(c[m]!==h[v]){if(m!==1||v!==1)do if(m--,v--,0>v||c[m]!==h[v]){var S=`
`+c[m].replace(" at new "," at ");return t.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",t.displayName)),S}while(1<=m&&0<=v);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?P(t):""}function ce(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return t=oe(t.type,!1),t;case 11:return t=oe(t.type.render,!1),t;case 1:return t=oe(t.type,!0),t;default:return""}}function de(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ve:return"Fragment";case Me:return"Portal";case Jt:return"Profiler";case $e:return"StrictMode";case Ne:return"Suspense";case mt:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Se:return(t.displayName||"Context")+".Consumer";case ae:return(t._context.displayName||"Context")+".Provider";case Ze:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case At:return i=t.displayName||null,i!==null?i:de(t.type)||"Memo";case it:i=t._payload,t=t._init;try{return de(t(i))}catch{}}return null}function ye(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(i);case 8:return i===$e?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Te(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function It(t){var i=Te(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),a=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(m){a=""+m,h.call(this,m)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function no(t){t._valueTracker||(t._valueTracker=It(t))}function ih(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),a="";return t&&(a=Te(t)?t.checked?"true":"false":t.value),t=a,t!==o?(i.setValue(t),!0):!1}function ro(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pa(t,i){var o=i.checked;return B({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function sh(t,i){var o=i.defaultValue==null?"":i.defaultValue,a=i.checked!=null?i.checked:i.defaultChecked;o=pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function oh(t,i){i=i.checked,i!=null&&X(t,"checked",i,!1)}function ma(t,i){oh(t,i);var o=pe(i.value),a=i.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ga(t,i.type,o):i.hasOwnProperty("defaultValue")&&ga(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function lh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var a=i.type;if(!(a!=="submit"&&a!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ga(t,i,o){(i!=="number"||ro(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Di=Array.isArray;function Wr(t,i,o,a){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&a&&(t[o].defaultSelected=!0)}else{for(o=""+pe(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,a&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function _a(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return B({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Di(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:pe(o)}}function uh(t,i){var o=pe(i.value),a=pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function ch(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function dh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?dh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,hh=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,a,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,a,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Li(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zy=["Webkit","ms","Moz","O"];Object.keys(Mi).forEach(function(t){Zy.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Mi[i]=Mi[t]})});function fh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Mi.hasOwnProperty(t)&&Mi[t]?(""+i).trim():i+"px"}function ph(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var a=o.indexOf("--")===0,c=fh(o,i[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,c):t[o]=c}}var ev=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(t,i){if(i){if(ev[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function wa(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=null;function Sa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,Hr=null,Vr=null;function mh(t){if(t=is(t)){if(typeof Ca!="function")throw Error(n(280));var i=t.stateNode;i&&(i=No(i),Ca(t.stateNode,t.type,i))}}function gh(t){Hr?Vr?Vr.push(t):Vr=[t]:Hr=t}function _h(){if(Hr){var t=Hr,i=Vr;if(Vr=Hr=null,mh(t),i)for(t=0;t<i.length;t++)mh(i[t])}}function yh(t,i){return t(i)}function vh(){}var Ia=!1;function wh(t,i,o){if(Ia)return t(i,o);Ia=!0;try{return yh(t,i,o)}finally{Ia=!1,(Hr!==null||Vr!==null)&&(vh(),_h())}}function Fi(t,i){var o=t.stateNode;if(o===null)return null;var a=No(o);if(a===null)return null;o=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ka=!1;if(f)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){ka=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{ka=!1}function tv(t,i,o,a,c,h,m,v,S){var x=Array.prototype.slice.call(arguments,3);try{i.apply(o,x)}catch(O){this.onError(O)}}var ji=!1,so=null,oo=!1,Ta=null,nv={onError:function(t){ji=!0,so=t}};function rv(t,i,o,a,c,h,m,v,S){ji=!1,so=null,tv.apply(nv,arguments)}function iv(t,i,o,a,c,h,m,v,S){if(rv.apply(this,arguments),ji){if(ji){var x=so;ji=!1,so=null}else throw Error(n(198));oo||(oo=!0,Ta=x)}}function dr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Eh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Sh(t){if(dr(t)!==t)throw Error(n(188))}function sv(t){var i=t.alternate;if(!i){if(i=dr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,a=i;;){var c=o.return;if(c===null)break;var h=c.alternate;if(h===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===o)return Sh(c),t;if(h===a)return Sh(c),i;h=h.sibling}throw Error(n(188))}if(o.return!==a.return)o=c,a=h;else{for(var m=!1,v=c.child;v;){if(v===o){m=!0,o=c,a=h;break}if(v===a){m=!0,a=c,o=h;break}v=v.sibling}if(!m){for(v=h.child;v;){if(v===o){m=!0,o=h,a=c;break}if(v===a){m=!0,a=h,o=c;break}v=v.sibling}if(!m)throw Error(n(189))}}if(o.alternate!==a)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Ch(t){return t=sv(t),t!==null?Ih(t):null}function Ih(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ih(t);if(i!==null)return i;t=t.sibling}return null}var kh=e.unstable_scheduleCallback,Th=e.unstable_cancelCallback,ov=e.unstable_shouldYield,lv=e.unstable_requestPaint,Fe=e.unstable_now,av=e.unstable_getCurrentPriorityLevel,xa=e.unstable_ImmediatePriority,xh=e.unstable_UserBlockingPriority,lo=e.unstable_NormalPriority,uv=e.unstable_LowPriority,Nh=e.unstable_IdlePriority,ao=null,Zt=null;function cv(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ao,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:fv,dv=Math.log,hv=Math.LN2;function fv(t){return t>>>=0,t===0?32:31-(dv(t)/hv|0)|0}var uo=64,co=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ho(t,i){var o=t.pendingLanes;if(o===0)return 0;var a=0,c=t.suspendedLanes,h=t.pingedLanes,m=o&268435455;if(m!==0){var v=m&~c;v!==0?a=zi(v):(h&=m,h!==0&&(a=zi(h)))}else m=o&~c,m!==0?a=zi(m):h!==0&&(a=zi(h));if(a===0)return 0;if(i!==0&&i!==a&&(i&c)===0&&(c=a&-a,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((a&4)!==0&&(a|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=a;0<i;)o=31-jt(i),c=1<<o,a|=t[o],i&=~c;return a}function pv(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(t,i){for(var o=t.suspendedLanes,a=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var m=31-jt(h),v=1<<m,S=c[m];S===-1?((v&o)===0||(v&a)!==0)&&(c[m]=pv(v,i)):S<=i&&(t.expiredLanes|=v),h&=~v}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rh(){var t=uo;return uo<<=1,(uo&4194240)===0&&(uo=64),t}function Ra(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Bi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-jt(i),t[i]=o}function gv(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-jt(o),h=1<<c;i[c]=0,a[c]=-1,t[c]=-1,o&=~h}}function Pa(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var a=31-jt(o),c=1<<a;c&i|t[a]&i&&(t[a]|=i),o&=~c}}var me=0;function Ph(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ah,Aa,bh,Oh,Dh,ba=!1,fo=[],Pn=null,An=null,bn=null,Wi=new Map,Hi=new Map,On=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lh(t,i){switch(t){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Wi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(i.pointerId)}}function Vi(t,i,o,a,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[c]},i!==null&&(i=is(i),i!==null&&Aa(i)),t):(t.eventSystemFlags|=a,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function yv(t,i,o,a,c){switch(i){case"focusin":return Pn=Vi(Pn,t,i,o,a,c),!0;case"dragenter":return An=Vi(An,t,i,o,a,c),!0;case"mouseover":return bn=Vi(bn,t,i,o,a,c),!0;case"pointerover":var h=c.pointerId;return Wi.set(h,Vi(Wi.get(h)||null,t,i,o,a,c)),!0;case"gotpointercapture":return h=c.pointerId,Hi.set(h,Vi(Hi.get(h)||null,t,i,o,a,c)),!0}return!1}function Mh(t){var i=hr(t.target);if(i!==null){var o=dr(i);if(o!==null){if(i=o.tag,i===13){if(i=Eh(o),i!==null){t.blockedOn=i,Dh(t.priority,function(){bh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function po(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Da(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Ea=a,o.target.dispatchEvent(a),Ea=null}else return i=is(o),i!==null&&Aa(i),t.blockedOn=o,!1;i.shift()}return!0}function Fh(t,i,o){po(t)&&o.delete(i)}function vv(){ba=!1,Pn!==null&&po(Pn)&&(Pn=null),An!==null&&po(An)&&(An=null),bn!==null&&po(bn)&&(bn=null),Wi.forEach(Fh),Hi.forEach(Fh)}function $i(t,i){t.blockedOn===i&&(t.blockedOn=null,ba||(ba=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vv)))}function qi(t){function i(c){return $i(c,t)}if(0<fo.length){$i(fo[0],t);for(var o=1;o<fo.length;o++){var a=fo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(Pn!==null&&$i(Pn,t),An!==null&&$i(An,t),bn!==null&&$i(bn,t),Wi.forEach(i),Hi.forEach(i),o=0;o<On.length;o++)a=On[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<On.length&&(o=On[0],o.blockedOn===null);)Mh(o),o.blockedOn===null&&On.shift()}var $r=G.ReactCurrentBatchConfig,mo=!0;function wv(t,i,o,a){var c=me,h=$r.transition;$r.transition=null;try{me=1,Oa(t,i,o,a)}finally{me=c,$r.transition=h}}function Ev(t,i,o,a){var c=me,h=$r.transition;$r.transition=null;try{me=4,Oa(t,i,o,a)}finally{me=c,$r.transition=h}}function Oa(t,i,o,a){if(mo){var c=Da(t,i,o,a);if(c===null)Xa(t,i,a,go,o),Lh(t,a);else if(yv(c,t,i,o,a))a.stopPropagation();else if(Lh(t,a),i&4&&-1<_v.indexOf(t)){for(;c!==null;){var h=is(c);if(h!==null&&Ah(h),h=Da(t,i,o,a),h===null&&Xa(t,i,a,go,o),h===c)break;c=h}c!==null&&a.stopPropagation()}else Xa(t,i,a,null,o)}}var go=null;function Da(t,i,o,a){if(go=null,t=Sa(a),t=hr(t),t!==null)if(i=dr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Eh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return go=t,null}function Uh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(av()){case xa:return 1;case xh:return 4;case lo:case uv:return 16;case Nh:return 536870912;default:return 16}default:return 16}}var Dn=null,La=null,_o=null;function jh(){if(_o)return _o;var t,i=La,o=i.length,a,c="value"in Dn?Dn.value:Dn.textContent,h=c.length;for(t=0;t<o&&i[t]===c[t];t++);var m=o-t;for(a=1;a<=m&&i[o-a]===c[h-a];a++);return _o=c.slice(t,1<a?1-a:void 0)}function yo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function zh(){return!1}function kt(t){function i(o,a,c,h,m){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=h,this.target=m,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(o=t[v],this[v]=o?o(h):h[v]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?vo:zh,this.isPropagationStopped=zh,this}return B(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=kt(qr),Gi=B({},qr,{view:0,detail:0}),Sv=kt(Gi),Fa,Ua,Ki,wo=B({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ki&&(Ki&&t.type==="mousemove"?(Fa=t.screenX-Ki.screenX,Ua=t.screenY-Ki.screenY):Ua=Fa=0,Ki=t),Fa)},movementY:function(t){return"movementY"in t?t.movementY:Ua}}),Bh=kt(wo),Cv=B({},wo,{dataTransfer:0}),Iv=kt(Cv),kv=B({},Gi,{relatedTarget:0}),ja=kt(kv),Tv=B({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=kt(Tv),Nv=B({},qr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rv=kt(Nv),Pv=B({},qr,{data:0}),Wh=kt(Pv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ov[t])?!!i[t]:!1}function za(){return Dv}var Lv=B({},Gi,{key:function(t){if(t.key){var i=Av[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(t){return t.type==="keypress"?yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mv=kt(Lv),Fv=B({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=kt(Fv),Uv=B({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),jv=kt(Uv),zv=B({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bv=kt(zv),Wv=B({},wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=kt(Wv),Vv=[9,13,27,32],Ba=f&&"CompositionEvent"in window,Yi=null;f&&"documentMode"in document&&(Yi=document.documentMode);var $v=f&&"TextEvent"in window&&!Yi,Vh=f&&(!Ba||Yi&&8<Yi&&11>=Yi),$h=" ",qh=!1;function Gh(t,i){switch(t){case"keyup":return Vv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function qv(t,i){switch(t){case"compositionend":return Kh(i);case"keypress":return i.which!==32?null:(qh=!0,$h);case"textInput":return t=i.data,t===$h&&qh?null:t;default:return null}}function Gv(t,i){if(Gr)return t==="compositionend"||!Ba&&Gh(t,i)?(t=jh(),_o=La=Dn=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vh&&i.locale!=="ko"?null:i.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Kv[t.type]:i==="textarea"}function Qh(t,i,o,a){gh(a),i=ko(i,"onChange"),0<i.length&&(o=new Ma("onChange","change",null,o,a),t.push({event:o,listeners:i}))}var Qi=null,Xi=null;function Yv(t){mf(t,0)}function Eo(t){var i=Jr(t);if(ih(i))return t}function Qv(t,i){if(t==="change")return i}var Xh=!1;if(f){var Wa;if(f){var Ha="oninput"in document;if(!Ha){var Jh=document.createElement("div");Jh.setAttribute("oninput","return;"),Ha=typeof Jh.oninput=="function"}Wa=Ha}else Wa=!1;Xh=Wa&&(!document.documentMode||9<document.documentMode)}function Zh(){Qi&&(Qi.detachEvent("onpropertychange",ef),Xi=Qi=null)}function ef(t){if(t.propertyName==="value"&&Eo(Xi)){var i=[];Qh(i,Xi,t,Sa(t)),wh(Yv,i)}}function Xv(t,i,o){t==="focusin"?(Zh(),Qi=i,Xi=o,Qi.attachEvent("onpropertychange",ef)):t==="focusout"&&Zh()}function Jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eo(Xi)}function Zv(t,i){if(t==="click")return Eo(i)}function e0(t,i){if(t==="input"||t==="change")return Eo(i)}function t0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var zt=typeof Object.is=="function"?Object.is:t0;function Ji(t,i){if(zt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),a=Object.keys(i);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!p.call(i,c)||!zt(t[c],i[c]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,i){var o=tf(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=i&&a>=i)return{node:o,offset:i-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tf(o)}}function rf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?rf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sf(){for(var t=window,i=ro();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ro(t.document)}return i}function Va(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function n0(t){var i=sf(),o=t.focusedElem,a=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&rf(o.ownerDocument.documentElement,o)){if(a!==null&&Va(o)){if(i=a.start,t=a.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,h=Math.min(a.start,c);a=a.end===void 0?h:Math.min(a.end,c),!t.extend&&h>a&&(c=a,a=h,h=c),c=nf(o,h);var m=nf(o,a);c&&m&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==m.node||t.focusOffset!==m.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>a?(t.addRange(i),t.extend(m.node,m.offset)):(i.setEnd(m.node,m.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var r0=f&&"documentMode"in document&&11>=document.documentMode,Kr=null,$a=null,Zi=null,qa=!1;function of(t,i,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;qa||Kr==null||Kr!==ro(a)||(a=Kr,"selectionStart"in a&&Va(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Zi&&Ji(Zi,a)||(Zi=a,a=ko($a,"onSelect"),0<a.length&&(i=new Ma("onSelect","select",null,i,o),t.push({event:i,listeners:a}),i.target=Kr)))}function So(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Yr={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Ga={},lf={};f&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Co(t){if(Ga[t])return Ga[t];if(!Yr[t])return t;var i=Yr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in lf)return Ga[t]=i[o];return t}var af=Co("animationend"),uf=Co("animationiteration"),cf=Co("animationstart"),df=Co("transitionend"),hf=new Map,ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,i){hf.set(t,i),u(i,[t])}for(var Ka=0;Ka<ff.length;Ka++){var Ya=ff[Ka],i0=Ya.toLowerCase(),s0=Ya[0].toUpperCase()+Ya.slice(1);Ln(i0,"on"+s0)}Ln(af,"onAnimationEnd"),Ln(uf,"onAnimationIteration"),Ln(cf,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(df,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o0=new Set("cancel close invalid load scroll toggle".split(" ").concat(es));function pf(t,i,o){var a=t.type||"unknown-event";t.currentTarget=o,iv(a,i,void 0,t),t.currentTarget=null}function mf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],c=a.event;a=a.listeners;e:{var h=void 0;if(i)for(var m=a.length-1;0<=m;m--){var v=a[m],S=v.instance,x=v.currentTarget;if(v=v.listener,S!==h&&c.isPropagationStopped())break e;pf(c,v,x),h=S}else for(m=0;m<a.length;m++){if(v=a[m],S=v.instance,x=v.currentTarget,v=v.listener,S!==h&&c.isPropagationStopped())break e;pf(c,v,x),h=S}}}if(oo)throw t=Ta,oo=!1,Ta=null,t}function Ce(t,i){var o=i[ru];o===void 0&&(o=i[ru]=new Set);var a=t+"__bubble";o.has(a)||(gf(i,t,2,!1),o.add(a))}function Qa(t,i,o){var a=0;i&&(a|=4),gf(o,t,a,i)}var Io="_reactListening"+Math.random().toString(36).slice(2);function ts(t){if(!t[Io]){t[Io]=!0,s.forEach(function(o){o!=="selectionchange"&&(o0.has(o)||Qa(o,!1,t),Qa(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Io]||(i[Io]=!0,Qa("selectionchange",!1,i))}}function gf(t,i,o,a){switch(Uh(i)){case 1:var c=wv;break;case 4:c=Ev;break;default:c=Oa}o=c.bind(null,i,o,t),c=void 0,!ka||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),a?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Xa(t,i,o,a,c){var h=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var m=a.tag;if(m===3||m===4){var v=a.stateNode.containerInfo;if(v===c||v.nodeType===8&&v.parentNode===c)break;if(m===4)for(m=a.return;m!==null;){var S=m.tag;if((S===3||S===4)&&(S=m.stateNode.containerInfo,S===c||S.nodeType===8&&S.parentNode===c))return;m=m.return}for(;v!==null;){if(m=hr(v),m===null)return;if(S=m.tag,S===5||S===6){a=h=m;continue e}v=v.parentNode}}a=a.return}wh(function(){var x=h,O=Sa(o),D=[];e:{var A=hf.get(t);if(A!==void 0){var z=Ma,H=t;switch(t){case"keypress":if(yo(o)===0)break e;case"keydown":case"keyup":z=Mv;break;case"focusin":H="focus",z=ja;break;case"focusout":H="blur",z=ja;break;case"beforeblur":case"afterblur":z=ja;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=jv;break;case af:case uf:case cf:z=xv;break;case df:z=Bv;break;case"scroll":z=Sv;break;case"wheel":z=Hv;break;case"copy":case"cut":case"paste":z=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=Hh}var $=(i&4)!==0,Ue=!$&&t==="scroll",k=$?A!==null?A+"Capture":null:A;$=[];for(var C=x,T;C!==null;){T=C;var L=T.stateNode;if(T.tag===5&&L!==null&&(T=L,k!==null&&(L=Fi(C,k),L!=null&&$.push(ns(C,L,T)))),Ue)break;C=C.return}0<$.length&&(A=new z(A,H,null,o,O),D.push({event:A,listeners:$}))}}if((i&7)===0){e:{if(A=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",A&&o!==Ea&&(H=o.relatedTarget||o.fromElement)&&(hr(H)||H[dn]))break e;if((z||A)&&(A=O.window===O?O:(A=O.ownerDocument)?A.defaultView||A.parentWindow:window,z?(H=o.relatedTarget||o.toElement,z=x,H=H?hr(H):null,H!==null&&(Ue=dr(H),H!==Ue||H.tag!==5&&H.tag!==6)&&(H=null)):(z=null,H=x),z!==H)){if($=Bh,L="onMouseLeave",k="onMouseEnter",C="mouse",(t==="pointerout"||t==="pointerover")&&($=Hh,L="onPointerLeave",k="onPointerEnter",C="pointer"),Ue=z==null?A:Jr(z),T=H==null?A:Jr(H),A=new $(L,C+"leave",z,o,O),A.target=Ue,A.relatedTarget=T,L=null,hr(O)===x&&($=new $(k,C+"enter",H,o,O),$.target=T,$.relatedTarget=Ue,L=$),Ue=L,z&&H)t:{for($=z,k=H,C=0,T=$;T;T=Qr(T))C++;for(T=0,L=k;L;L=Qr(L))T++;for(;0<C-T;)$=Qr($),C--;for(;0<T-C;)k=Qr(k),T--;for(;C--;){if($===k||k!==null&&$===k.alternate)break t;$=Qr($),k=Qr(k)}$=null}else $=null;z!==null&&_f(D,A,z,$,!1),H!==null&&Ue!==null&&_f(D,Ue,H,$,!0)}}e:{if(A=x?Jr(x):window,z=A.nodeName&&A.nodeName.toLowerCase(),z==="select"||z==="input"&&A.type==="file")var q=Qv;else if(Yh(A))if(Xh)q=e0;else{q=Jv;var K=Xv}else(z=A.nodeName)&&z.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(q=Zv);if(q&&(q=q(t,x))){Qh(D,q,o,O);break e}K&&K(t,A,x),t==="focusout"&&(K=A._wrapperState)&&K.controlled&&A.type==="number"&&ga(A,"number",A.value)}switch(K=x?Jr(x):window,t){case"focusin":(Yh(K)||K.contentEditable==="true")&&(Kr=K,$a=x,Zi=null);break;case"focusout":Zi=$a=Kr=null;break;case"mousedown":qa=!0;break;case"contextmenu":case"mouseup":case"dragend":qa=!1,of(D,o,O);break;case"selectionchange":if(r0)break;case"keydown":case"keyup":of(D,o,O)}var Y;if(Ba)e:{switch(t){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else Gr?Gh(t,o)&&(ee="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ee="onCompositionStart");ee&&(Vh&&o.locale!=="ko"&&(Gr||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Gr&&(Y=jh()):(Dn=O,La="value"in Dn?Dn.value:Dn.textContent,Gr=!0)),K=ko(x,ee),0<K.length&&(ee=new Wh(ee,t,null,o,O),D.push({event:ee,listeners:K}),Y?ee.data=Y:(Y=Kh(o),Y!==null&&(ee.data=Y)))),(Y=$v?qv(t,o):Gv(t,o))&&(x=ko(x,"onBeforeInput"),0<x.length&&(O=new Wh("onBeforeInput","beforeinput",null,o,O),D.push({event:O,listeners:x}),O.data=Y))}mf(D,i)})}function ns(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ko(t,i){for(var o=i+"Capture",a=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Fi(t,o),h!=null&&a.unshift(ns(t,h,c)),h=Fi(t,i),h!=null&&a.push(ns(t,h,c))),t=t.return}return a}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _f(t,i,o,a,c){for(var h=i._reactName,m=[];o!==null&&o!==a;){var v=o,S=v.alternate,x=v.stateNode;if(S!==null&&S===a)break;v.tag===5&&x!==null&&(v=x,c?(S=Fi(o,h),S!=null&&m.unshift(ns(o,S,v))):c||(S=Fi(o,h),S!=null&&m.push(ns(o,S,v)))),o=o.return}m.length!==0&&t.push({event:i,listeners:m})}var l0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function yf(t){return(typeof t=="string"?t:""+t).replace(l0,`
`).replace(a0,"")}function To(t,i,o){if(i=yf(i),yf(t)!==i&&o)throw Error(n(425))}function xo(){}var Ja=null,Za=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,u0=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,c0=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(d0)}:tu;function d0(t){setTimeout(function(){throw t})}function nu(t,i){var o=i,a=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(a===0){t.removeChild(c),qi(i);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=c}while(o);qi(i)}function Mn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function wf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),en="__reactFiber$"+Xr,rs="__reactProps$"+Xr,dn="__reactContainer$"+Xr,ru="__reactEvents$"+Xr,h0="__reactListeners$"+Xr,f0="__reactHandles$"+Xr;function hr(t){var i=t[en];if(i)return i;for(var o=t.parentNode;o;){if(i=o[dn]||o[en]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=wf(t);t!==null;){if(o=t[en])return o;t=wf(t)}return i}t=o,o=t.parentNode}return null}function is(t){return t=t[en]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function No(t){return t[rs]||null}var iu=[],Zr=-1;function Fn(t){return{current:t}}function Ie(t){0>Zr||(t.current=iu[Zr],iu[Zr]=null,Zr--)}function ve(t,i){Zr++,iu[Zr]=t.current,t.current=i}var Un={},st=Fn(Un),gt=Fn(!1),fr=Un;function ei(t,i){var o=t.type.contextTypes;if(!o)return Un;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===i)return a.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in o)c[h]=i[h];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function _t(t){return t=t.childContextTypes,t!=null}function Ro(){Ie(gt),Ie(st)}function Ef(t,i,o){if(st.current!==Un)throw Error(n(168));ve(st,i),ve(gt,o)}function Sf(t,i,o){var a=t.stateNode;if(i=i.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var c in a)if(!(c in i))throw Error(n(108,ye(t)||"Unknown",c));return B({},o,a)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Un,fr=st.current,ve(st,t),ve(gt,gt.current),!0}function Cf(t,i,o){var a=t.stateNode;if(!a)throw Error(n(169));o?(t=Sf(t,i,fr),a.__reactInternalMemoizedMergedChildContext=t,Ie(gt),Ie(st),ve(st,t)):Ie(gt),ve(gt,o)}var hn=null,Ao=!1,su=!1;function If(t){hn===null?hn=[t]:hn.push(t)}function p0(t){Ao=!0,If(t)}function jn(){if(!su&&hn!==null){su=!0;var t=0,i=me;try{var o=hn;for(me=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}hn=null,Ao=!1}catch(c){throw hn!==null&&(hn=hn.slice(t+1)),kh(xa,jn),c}finally{me=i,su=!1}}return null}var ti=[],ni=0,bo=null,Oo=0,bt=[],Ot=0,pr=null,fn=1,pn="";function mr(t,i){ti[ni++]=Oo,ti[ni++]=bo,bo=t,Oo=i}function kf(t,i,o){bt[Ot++]=fn,bt[Ot++]=pn,bt[Ot++]=pr,pr=t;var a=fn;t=pn;var c=32-jt(a)-1;a&=~(1<<c),o+=1;var h=32-jt(i)+c;if(30<h){var m=c-c%5;h=(a&(1<<m)-1).toString(32),a>>=m,c-=m,fn=1<<32-jt(i)+c|o<<c|a,pn=h+t}else fn=1<<h|o<<c|a,pn=t}function ou(t){t.return!==null&&(mr(t,1),kf(t,1,0))}function lu(t){for(;t===bo;)bo=ti[--ni],ti[ni]=null,Oo=ti[--ni],ti[ni]=null;for(;t===pr;)pr=bt[--Ot],bt[Ot]=null,pn=bt[--Ot],bt[Ot]=null,fn=bt[--Ot],bt[Ot]=null}var Tt=null,xt=null,xe=!1,Bt=null;function Tf(t,i){var o=Ft(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function xf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Tt=t,xt=Mn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Tt=t,xt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=pr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Ft(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Tt=t,xt=null,!0):!1;default:return!1}}function au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(xe){var i=xt;if(i){var o=i;if(!xf(t,i)){if(au(t))throw Error(n(418));i=Mn(o.nextSibling);var a=Tt;i&&xf(t,i)?Tf(a,o):(t.flags=t.flags&-4097|2,xe=!1,Tt=t)}}else{if(au(t))throw Error(n(418));t.flags=t.flags&-4097|2,xe=!1,Tt=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Do(t){if(t!==Tt)return!1;if(!xe)return Nf(t),xe=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=xt)){if(au(t))throw Rf(),Error(n(418));for(;i;)Tf(t,i),i=Mn(i.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){xt=Mn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}xt=null}}else xt=Tt?Mn(t.stateNode.nextSibling):null;return!0}function Rf(){for(var t=xt;t;)t=Mn(t.nextSibling)}function ri(){xt=Tt=null,xe=!1}function cu(t){Bt===null?Bt=[t]:Bt.push(t)}var m0=G.ReactCurrentBatchConfig;function ss(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var a=o.stateNode}if(!a)throw Error(n(147,t));var c=a,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(m){var v=c.refs;m===null?delete v[h]:v[h]=m},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Lo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Pf(t){var i=t._init;return i(t._payload)}function Af(t){function i(k,C){if(t){var T=k.deletions;T===null?(k.deletions=[C],k.flags|=16):T.push(C)}}function o(k,C){if(!t)return null;for(;C!==null;)i(k,C),C=C.sibling;return null}function a(k,C){for(k=new Map;C!==null;)C.key!==null?k.set(C.key,C):k.set(C.index,C),C=C.sibling;return k}function c(k,C){return k=Gn(k,C),k.index=0,k.sibling=null,k}function h(k,C,T){return k.index=T,t?(T=k.alternate,T!==null?(T=T.index,T<C?(k.flags|=2,C):T):(k.flags|=2,C)):(k.flags|=1048576,C)}function m(k){return t&&k.alternate===null&&(k.flags|=2),k}function v(k,C,T,L){return C===null||C.tag!==6?(C=tc(T,k.mode,L),C.return=k,C):(C=c(C,T),C.return=k,C)}function S(k,C,T,L){var q=T.type;return q===Ve?O(k,C,T.props.children,L,T.key):C!==null&&(C.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===it&&Pf(q)===C.type)?(L=c(C,T.props),L.ref=ss(k,C,T),L.return=k,L):(L=sl(T.type,T.key,T.props,null,k.mode,L),L.ref=ss(k,C,T),L.return=k,L)}function x(k,C,T,L){return C===null||C.tag!==4||C.stateNode.containerInfo!==T.containerInfo||C.stateNode.implementation!==T.implementation?(C=nc(T,k.mode,L),C.return=k,C):(C=c(C,T.children||[]),C.return=k,C)}function O(k,C,T,L,q){return C===null||C.tag!==7?(C=Cr(T,k.mode,L,q),C.return=k,C):(C=c(C,T),C.return=k,C)}function D(k,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return C=tc(""+C,k.mode,T),C.return=k,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case je:return T=sl(C.type,C.key,C.props,null,k.mode,T),T.ref=ss(k,null,C),T.return=k,T;case Me:return C=nc(C,k.mode,T),C.return=k,C;case it:var L=C._init;return D(k,L(C._payload),T)}if(Di(C)||Q(C))return C=Cr(C,k.mode,T,null),C.return=k,C;Lo(k,C)}return null}function A(k,C,T,L){var q=C!==null?C.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return q!==null?null:v(k,C,""+T,L);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case je:return T.key===q?S(k,C,T,L):null;case Me:return T.key===q?x(k,C,T,L):null;case it:return q=T._init,A(k,C,q(T._payload),L)}if(Di(T)||Q(T))return q!==null?null:O(k,C,T,L,null);Lo(k,T)}return null}function z(k,C,T,L,q){if(typeof L=="string"&&L!==""||typeof L=="number")return k=k.get(T)||null,v(C,k,""+L,q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case je:return k=k.get(L.key===null?T:L.key)||null,S(C,k,L,q);case Me:return k=k.get(L.key===null?T:L.key)||null,x(C,k,L,q);case it:var K=L._init;return z(k,C,T,K(L._payload),q)}if(Di(L)||Q(L))return k=k.get(T)||null,O(C,k,L,q,null);Lo(C,L)}return null}function H(k,C,T,L){for(var q=null,K=null,Y=C,ee=C=0,Ke=null;Y!==null&&ee<T.length;ee++){Y.index>ee?(Ke=Y,Y=null):Ke=Y.sibling;var he=A(k,Y,T[ee],L);if(he===null){Y===null&&(Y=Ke);break}t&&Y&&he.alternate===null&&i(k,Y),C=h(he,C,ee),K===null?q=he:K.sibling=he,K=he,Y=Ke}if(ee===T.length)return o(k,Y),xe&&mr(k,ee),q;if(Y===null){for(;ee<T.length;ee++)Y=D(k,T[ee],L),Y!==null&&(C=h(Y,C,ee),K===null?q=Y:K.sibling=Y,K=Y);return xe&&mr(k,ee),q}for(Y=a(k,Y);ee<T.length;ee++)Ke=z(Y,k,ee,T[ee],L),Ke!==null&&(t&&Ke.alternate!==null&&Y.delete(Ke.key===null?ee:Ke.key),C=h(Ke,C,ee),K===null?q=Ke:K.sibling=Ke,K=Ke);return t&&Y.forEach(function(Kn){return i(k,Kn)}),xe&&mr(k,ee),q}function $(k,C,T,L){var q=Q(T);if(typeof q!="function")throw Error(n(150));if(T=q.call(T),T==null)throw Error(n(151));for(var K=q=null,Y=C,ee=C=0,Ke=null,he=T.next();Y!==null&&!he.done;ee++,he=T.next()){Y.index>ee?(Ke=Y,Y=null):Ke=Y.sibling;var Kn=A(k,Y,he.value,L);if(Kn===null){Y===null&&(Y=Ke);break}t&&Y&&Kn.alternate===null&&i(k,Y),C=h(Kn,C,ee),K===null?q=Kn:K.sibling=Kn,K=Kn,Y=Ke}if(he.done)return o(k,Y),xe&&mr(k,ee),q;if(Y===null){for(;!he.done;ee++,he=T.next())he=D(k,he.value,L),he!==null&&(C=h(he,C,ee),K===null?q=he:K.sibling=he,K=he);return xe&&mr(k,ee),q}for(Y=a(k,Y);!he.done;ee++,he=T.next())he=z(Y,k,ee,he.value,L),he!==null&&(t&&he.alternate!==null&&Y.delete(he.key===null?ee:he.key),C=h(he,C,ee),K===null?q=he:K.sibling=he,K=he);return t&&Y.forEach(function(K0){return i(k,K0)}),xe&&mr(k,ee),q}function Ue(k,C,T,L){if(typeof T=="object"&&T!==null&&T.type===Ve&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case je:e:{for(var q=T.key,K=C;K!==null;){if(K.key===q){if(q=T.type,q===Ve){if(K.tag===7){o(k,K.sibling),C=c(K,T.props.children),C.return=k,k=C;break e}}else if(K.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===it&&Pf(q)===K.type){o(k,K.sibling),C=c(K,T.props),C.ref=ss(k,K,T),C.return=k,k=C;break e}o(k,K);break}else i(k,K);K=K.sibling}T.type===Ve?(C=Cr(T.props.children,k.mode,L,T.key),C.return=k,k=C):(L=sl(T.type,T.key,T.props,null,k.mode,L),L.ref=ss(k,C,T),L.return=k,k=L)}return m(k);case Me:e:{for(K=T.key;C!==null;){if(C.key===K)if(C.tag===4&&C.stateNode.containerInfo===T.containerInfo&&C.stateNode.implementation===T.implementation){o(k,C.sibling),C=c(C,T.children||[]),C.return=k,k=C;break e}else{o(k,C);break}else i(k,C);C=C.sibling}C=nc(T,k.mode,L),C.return=k,k=C}return m(k);case it:return K=T._init,Ue(k,C,K(T._payload),L)}if(Di(T))return H(k,C,T,L);if(Q(T))return $(k,C,T,L);Lo(k,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,C!==null&&C.tag===6?(o(k,C.sibling),C=c(C,T),C.return=k,k=C):(o(k,C),C=tc(T,k.mode,L),C.return=k,k=C),m(k)):o(k,C)}return Ue}var ii=Af(!0),bf=Af(!1),Mo=Fn(null),Fo=null,si=null,du=null;function hu(){du=si=Fo=null}function fu(t){var i=Mo.current;Ie(Mo),t._currentValue=i}function pu(t,i,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),t===o)break;t=t.return}}function oi(t,i){Fo=t,du=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(yt=!0),t.firstContext=null)}function Dt(t){var i=t._currentValue;if(du!==t)if(t={context:t,memoizedValue:i,next:null},si===null){if(Fo===null)throw Error(n(308));si=t,Fo.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return i}var gr=null;function mu(t){gr===null?gr=[t]:gr.push(t)}function Of(t,i,o,a){var c=i.interleaved;return c===null?(o.next=o,mu(i)):(o.next=c.next,c.next=o),i.interleaved=o,mn(t,a)}function mn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var zn=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Bn(t,i,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ue&2)!==0){var c=a.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),a.pending=i,mn(t,o)}return c=a.interleaved,c===null?(i.next=i,mu(a)):(i.next=c.next,c.next=i),a.interleaved=i,mn(t,o)}function Uo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Pa(t,o)}}function Lf(t,i){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var m={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?c=h=m:h=h.next=m,o=o.next}while(o!==null);h===null?c=h=i:h=h.next=i}else c=h=i;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function jo(t,i,o,a){var c=t.updateQueue;zn=!1;var h=c.firstBaseUpdate,m=c.lastBaseUpdate,v=c.shared.pending;if(v!==null){c.shared.pending=null;var S=v,x=S.next;S.next=null,m===null?h=x:m.next=x,m=S;var O=t.alternate;O!==null&&(O=O.updateQueue,v=O.lastBaseUpdate,v!==m&&(v===null?O.firstBaseUpdate=x:v.next=x,O.lastBaseUpdate=S))}if(h!==null){var D=c.baseState;m=0,O=x=S=null,v=h;do{var A=v.lane,z=v.eventTime;if((a&A)===A){O!==null&&(O=O.next={eventTime:z,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var H=t,$=v;switch(A=i,z=o,$.tag){case 1:if(H=$.payload,typeof H=="function"){D=H.call(z,D,A);break e}D=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=$.payload,A=typeof H=="function"?H.call(z,D,A):H,A==null)break e;D=B({},D,A);break e;case 2:zn=!0}}v.callback!==null&&v.lane!==0&&(t.flags|=64,A=c.effects,A===null?c.effects=[v]:A.push(v))}else z={eventTime:z,lane:A,tag:v.tag,payload:v.payload,callback:v.callback,next:null},O===null?(x=O=z,S=D):O=O.next=z,m|=A;if(v=v.next,v===null){if(v=c.shared.pending,v===null)break;A=v,v=A.next,A.next=null,c.lastBaseUpdate=A,c.shared.pending=null}}while(!0);if(O===null&&(S=D),c.baseState=S,c.firstBaseUpdate=x,c.lastBaseUpdate=O,i=c.shared.interleaved,i!==null){c=i;do m|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);vr|=m,t.lanes=m,t.memoizedState=D}}function Mf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var a=t[i],c=a.callback;if(c!==null){if(a.callback=null,a=o,typeof c!="function")throw Error(n(191,c));c.call(a)}}}var os={},tn=Fn(os),ls=Fn(os),as=Fn(os);function _r(t){if(t===os)throw Error(n(174));return t}function _u(t,i){switch(ve(as,i),ve(ls,t),ve(tn,os),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ya(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ya(i,t)}Ie(tn),ve(tn,i)}function li(){Ie(tn),Ie(ls),Ie(as)}function Ff(t){_r(as.current);var i=_r(tn.current),o=ya(i,t.type);i!==o&&(ve(ls,t),ve(tn,o))}function yu(t){ls.current===t&&(Ie(tn),Ie(ls))}var Re=Fn(0);function zo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vu=[];function wu(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Bo=G.ReactCurrentDispatcher,Eu=G.ReactCurrentBatchConfig,yr=0,Pe=null,Be=null,qe=null,Wo=!1,us=!1,cs=0,g0=0;function ot(){throw Error(n(321))}function Su(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!zt(t[o],i[o]))return!1;return!0}function Cu(t,i,o,a,c,h){if(yr=h,Pe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Bo.current=t===null||t.memoizedState===null?w0:E0,t=o(a,c),us){h=0;do{if(us=!1,cs=0,25<=h)throw Error(n(301));h+=1,qe=Be=null,i.updateQueue=null,Bo.current=S0,t=o(a,c)}while(us)}if(Bo.current=$o,i=Be!==null&&Be.next!==null,yr=0,qe=Be=Pe=null,Wo=!1,i)throw Error(n(300));return t}function Iu(){var t=cs!==0;return cs=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Pe.memoizedState=qe=t:qe=qe.next=t,qe}function Lt(){if(Be===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var i=qe===null?Pe.memoizedState:qe.next;if(i!==null)qe=i,Be=t;else{if(t===null)throw Error(n(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},qe===null?Pe.memoizedState=qe=t:qe=qe.next=t}return qe}function ds(t,i){return typeof i=="function"?i(t):i}function ku(t){var i=Lt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=Be,c=a.baseQueue,h=o.pending;if(h!==null){if(c!==null){var m=c.next;c.next=h.next,h.next=m}a.baseQueue=c=h,o.pending=null}if(c!==null){h=c.next,a=a.baseState;var v=m=null,S=null,x=h;do{var O=x.lane;if((yr&O)===O)S!==null&&(S=S.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),a=x.hasEagerState?x.eagerState:t(a,x.action);else{var D={lane:O,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};S===null?(v=S=D,m=a):S=S.next=D,Pe.lanes|=O,vr|=O}x=x.next}while(x!==null&&x!==h);S===null?m=a:S.next=v,zt(a,i.memoizedState)||(yt=!0),i.memoizedState=a,i.baseState=m,i.baseQueue=S,o.lastRenderedState=a}if(t=o.interleaved,t!==null){c=t;do h=c.lane,Pe.lanes|=h,vr|=h,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Tu(t){var i=Lt(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var a=o.dispatch,c=o.pending,h=i.memoizedState;if(c!==null){o.pending=null;var m=c=c.next;do h=t(h,m.action),m=m.next;while(m!==c);zt(h,i.memoizedState)||(yt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,a]}function Uf(){}function jf(t,i){var o=Pe,a=Lt(),c=i(),h=!zt(a.memoizedState,c);if(h&&(a.memoizedState=c,yt=!0),a=a.queue,xu(Wf.bind(null,o,a,t),[t]),a.getSnapshot!==i||h||qe!==null&&qe.memoizedState.tag&1){if(o.flags|=2048,hs(9,Bf.bind(null,o,a,c,i),void 0,null),Ge===null)throw Error(n(349));(yr&30)!==0||zf(o,i,c)}return c}function zf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Pe.updateQueue,i===null?(i={lastEffect:null,stores:null},Pe.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Bf(t,i,o,a){i.value=o,i.getSnapshot=a,Hf(i)&&Vf(t)}function Wf(t,i,o){return o(function(){Hf(i)&&Vf(t)})}function Hf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!zt(t,o)}catch{return!0}}function Vf(t){var i=mn(t,1);i!==null&&$t(i,t,1,-1)}function $f(t){var i=nn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:t},i.queue=t,t=t.dispatch=v0.bind(null,Pe,t),[i.memoizedState,t]}function hs(t,i,o,a){return t={tag:t,create:i,destroy:o,deps:a,next:null},i=Pe.updateQueue,i===null?(i={lastEffect:null,stores:null},Pe.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,i.lastEffect=t)),t}function qf(){return Lt().memoizedState}function Ho(t,i,o,a){var c=nn();Pe.flags|=t,c.memoizedState=hs(1|i,o,void 0,a===void 0?null:a)}function Vo(t,i,o,a){var c=Lt();a=a===void 0?null:a;var h=void 0;if(Be!==null){var m=Be.memoizedState;if(h=m.destroy,a!==null&&Su(a,m.deps)){c.memoizedState=hs(i,o,h,a);return}}Pe.flags|=t,c.memoizedState=hs(1|i,o,h,a)}function Gf(t,i){return Ho(8390656,8,t,i)}function xu(t,i){return Vo(2048,8,t,i)}function Kf(t,i){return Vo(4,2,t,i)}function Yf(t,i){return Vo(4,4,t,i)}function Qf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xf(t,i,o){return o=o!=null?o.concat([t]):null,Vo(4,4,Qf.bind(null,i,t),o)}function Nu(){}function Jf(t,i){var o=Lt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Su(i,a[1])?a[0]:(o.memoizedState=[t,i],t)}function Zf(t,i){var o=Lt();i=i===void 0?null:i;var a=o.memoizedState;return a!==null&&i!==null&&Su(i,a[1])?a[0]:(t=t(),o.memoizedState=[t,i],t)}function ep(t,i,o){return(yr&21)===0?(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=o):(zt(o,i)||(o=Rh(),Pe.lanes|=o,vr|=o,t.baseState=!0),i)}function _0(t,i){var o=me;me=o!==0&&4>o?o:4,t(!0);var a=Eu.transition;Eu.transition={};try{t(!1),i()}finally{me=o,Eu.transition=a}}function tp(){return Lt().memoizedState}function y0(t,i,o){var a=$n(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},np(t))rp(i,o);else if(o=Of(t,i,o,a),o!==null){var c=dt();$t(o,t,a,c),ip(o,i,a)}}function v0(t,i,o){var a=$n(t),c={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(np(t))rp(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var m=i.lastRenderedState,v=h(m,o);if(c.hasEagerState=!0,c.eagerState=v,zt(v,m)){var S=i.interleaved;S===null?(c.next=c,mu(i)):(c.next=S.next,S.next=c),i.interleaved=c;return}}catch{}finally{}o=Of(t,i,c,a),o!==null&&(c=dt(),$t(o,t,a,c),ip(o,i,a))}}function np(t){var i=t.alternate;return t===Pe||i!==null&&i===Pe}function rp(t,i){us=Wo=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ip(t,i,o){if((o&4194240)!==0){var a=i.lanes;a&=t.pendingLanes,o|=a,i.lanes=o,Pa(t,o)}}var $o={readContext:Dt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},w0={readContext:Dt,useCallback:function(t,i){return nn().memoizedState=[t,i===void 0?null:i],t},useContext:Dt,useEffect:Gf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ho(4194308,4,Qf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ho(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ho(4,2,t,i)},useMemo:function(t,i){var o=nn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var a=nn();return i=o!==void 0?o(i):i,a.memoizedState=a.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=y0.bind(null,Pe,t),[a.memoizedState,t]},useRef:function(t){var i=nn();return t={current:t},i.memoizedState=t},useState:$f,useDebugValue:Nu,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=$f(!1),i=t[0];return t=_0.bind(null,t[1]),nn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var a=Pe,c=nn();if(xe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ge===null)throw Error(n(349));(yr&30)!==0||zf(a,i,o)}c.memoizedState=o;var h={value:o,getSnapshot:i};return c.queue=h,Gf(Wf.bind(null,a,h,t),[t]),a.flags|=2048,hs(9,Bf.bind(null,a,h,o,i),void 0,null),o},useId:function(){var t=nn(),i=Ge.identifierPrefix;if(xe){var o=pn,a=fn;o=(a&~(1<<32-jt(a)-1)).toString(32)+o,i=":"+i+"R"+o,o=cs++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=g0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},E0={readContext:Dt,useCallback:Jf,useContext:Dt,useEffect:xu,useImperativeHandle:Xf,useInsertionEffect:Kf,useLayoutEffect:Yf,useMemo:Zf,useReducer:ku,useRef:qf,useState:function(){return ku(ds)},useDebugValue:Nu,useDeferredValue:function(t){var i=Lt();return ep(i,Be.memoizedState,t)},useTransition:function(){var t=ku(ds)[0],i=Lt().memoizedState;return[t,i]},useMutableSource:Uf,useSyncExternalStore:jf,useId:tp,unstable_isNewReconciler:!1},S0={readContext:Dt,useCallback:Jf,useContext:Dt,useEffect:xu,useImperativeHandle:Xf,useInsertionEffect:Kf,useLayoutEffect:Yf,useMemo:Zf,useReducer:Tu,useRef:qf,useState:function(){return Tu(ds)},useDebugValue:Nu,useDeferredValue:function(t){var i=Lt();return Be===null?i.memoizedState=t:ep(i,Be.memoizedState,t)},useTransition:function(){var t=Tu(ds)[0],i=Lt().memoizedState;return[t,i]},useMutableSource:Uf,useSyncExternalStore:jf,useId:tp,unstable_isNewReconciler:!1};function Wt(t,i){if(t&&t.defaultProps){i=B({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ru(t,i,o,a){i=t.memoizedState,o=o(a,i),o=o==null?i:B({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var qo={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var a=dt(),c=$n(t),h=gn(a,c);h.payload=i,o!=null&&(h.callback=o),i=Bn(t,h,c),i!==null&&($t(i,t,c,a),Uo(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var a=dt(),c=$n(t),h=gn(a,c);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=Bn(t,h,c),i!==null&&($t(i,t,c,a),Uo(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=dt(),a=$n(t),c=gn(o,a);c.tag=2,i!=null&&(c.callback=i),i=Bn(t,c,a),i!==null&&($t(i,t,a,o),Uo(i,t,a))}};function sp(t,i,o,a,c,h,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,h,m):i.prototype&&i.prototype.isPureReactComponent?!Ji(o,a)||!Ji(c,h):!0}function op(t,i,o){var a=!1,c=Un,h=i.contextType;return typeof h=="object"&&h!==null?h=Dt(h):(c=_t(i)?fr:st.current,a=i.contextTypes,h=(a=a!=null)?ei(t,c):Un),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,t.stateNode=i,i._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function lp(t,i,o,a){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,a),i.state!==t&&qo.enqueueReplaceState(i,i.state,null)}function Pu(t,i,o,a){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=Dt(h):(h=_t(i)?fr:st.current,c.context=ei(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ru(t,i,h,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&qo.enqueueReplaceState(c,c.state,null),jo(t,o,c,a),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ai(t,i){try{var o="",a=i;do o+=ce(a),a=a.return;while(a);var c=o}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Au(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function bu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var C0=typeof WeakMap=="function"?WeakMap:Map;function ap(t,i,o){o=gn(-1,o),o.tag=3,o.payload={element:null};var a=i.value;return o.callback=function(){Zo||(Zo=!0,Gu=a),bu(t,i)},o}function up(t,i,o){o=gn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var c=i.value;o.payload=function(){return a(c)},o.callback=function(){bu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){bu(t,i),typeof a!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})}),o}function cp(t,i,o){var a=t.pingCache;if(a===null){a=t.pingCache=new C0;var c=new Set;a.set(i,c)}else c=a.get(i),c===void 0&&(c=new Set,a.set(i,c));c.has(o)||(c.add(o),t=F0.bind(null,t,i,o),i.then(t,t))}function dp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function hp(t,i,o,a,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=gn(-1,1),i.tag=2,Bn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var I0=G.ReactCurrentOwner,yt=!1;function ct(t,i,o,a){i.child=t===null?bf(i,null,o,a):ii(i,t.child,o,a)}function fp(t,i,o,a,c){o=o.render;var h=i.ref;return oi(i,c),a=Cu(t,i,o,a,h,c),o=Iu(),t!==null&&!yt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,_n(t,i,c)):(xe&&o&&ou(i),i.flags|=1,ct(t,i,a,c),i.child)}function pp(t,i,o,a,c){if(t===null){var h=o.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,mp(t,i,h,a,c)):(t=sl(o.type,null,a,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var m=h.memoizedProps;if(o=o.compare,o=o!==null?o:Ji,o(m,a)&&t.ref===i.ref)return _n(t,i,c)}return i.flags|=1,t=Gn(h,a),t.ref=i.ref,t.return=i,i.child=t}function mp(t,i,o,a,c){if(t!==null){var h=t.memoizedProps;if(Ji(h,a)&&t.ref===i.ref)if(yt=!1,i.pendingProps=a=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(yt=!0);else return i.lanes=t.lanes,_n(t,i,c)}return Ou(t,i,o,a,c)}function gp(t,i,o){var a=i.pendingProps,c=a.children,h=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ci,Nt),Nt|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,ve(ci,Nt),Nt|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,ve(ci,Nt),Nt|=a}else h!==null?(a=h.baseLanes|o,i.memoizedState=null):a=o,ve(ci,Nt),Nt|=a;return ct(t,i,c,o),i.child}function _p(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Ou(t,i,o,a,c){var h=_t(o)?fr:st.current;return h=ei(i,h),oi(i,c),o=Cu(t,i,o,a,h,c),a=Iu(),t!==null&&!yt?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,_n(t,i,c)):(xe&&a&&ou(i),i.flags|=1,ct(t,i,o,c),i.child)}function yp(t,i,o,a,c){if(_t(o)){var h=!0;Po(i)}else h=!1;if(oi(i,c),i.stateNode===null)Ko(t,i),op(i,o,a),Pu(i,o,a,c),a=!0;else if(t===null){var m=i.stateNode,v=i.memoizedProps;m.props=v;var S=m.context,x=o.contextType;typeof x=="object"&&x!==null?x=Dt(x):(x=_t(o)?fr:st.current,x=ei(i,x));var O=o.getDerivedStateFromProps,D=typeof O=="function"||typeof m.getSnapshotBeforeUpdate=="function";D||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==a||S!==x)&&lp(i,m,a,x),zn=!1;var A=i.memoizedState;m.state=A,jo(i,a,m,c),S=i.memoizedState,v!==a||A!==S||gt.current||zn?(typeof O=="function"&&(Ru(i,o,O,a),S=i.memoizedState),(v=zn||sp(i,o,v,a,A,S,x))?(D||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=S),m.props=a,m.state=S,m.context=x,a=v):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{m=i.stateNode,Df(t,i),v=i.memoizedProps,x=i.type===i.elementType?v:Wt(i.type,v),m.props=x,D=i.pendingProps,A=m.context,S=o.contextType,typeof S=="object"&&S!==null?S=Dt(S):(S=_t(o)?fr:st.current,S=ei(i,S));var z=o.getDerivedStateFromProps;(O=typeof z=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(v!==D||A!==S)&&lp(i,m,a,S),zn=!1,A=i.memoizedState,m.state=A,jo(i,a,m,c);var H=i.memoizedState;v!==D||A!==H||gt.current||zn?(typeof z=="function"&&(Ru(i,o,z,a),H=i.memoizedState),(x=zn||sp(i,o,x,a,A,H,S)||!1)?(O||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(a,H,S),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(a,H,S)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=H),m.props=a,m.state=H,m.context=S,a=x):(typeof m.componentDidUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&A===t.memoizedState||(i.flags|=1024),a=!1)}return Du(t,i,o,a,h,c)}function Du(t,i,o,a,c,h){_p(t,i);var m=(i.flags&128)!==0;if(!a&&!m)return c&&Cf(i,o,!1),_n(t,i,h);a=i.stateNode,I0.current=i;var v=m&&typeof o.getDerivedStateFromError!="function"?null:a.render();return i.flags|=1,t!==null&&m?(i.child=ii(i,t.child,null,h),i.child=ii(i,null,v,h)):ct(t,i,v,h),i.memoizedState=a.state,c&&Cf(i,o,!0),i.child}function vp(t){var i=t.stateNode;i.pendingContext?Ef(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ef(t,i.context,!1),_u(t,i.containerInfo)}function wp(t,i,o,a,c){return ri(),cu(c),i.flags|=256,ct(t,i,o,a),i.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ep(t,i,o){var a=i.pendingProps,c=Re.current,h=!1,m=(i.flags&128)!==0,v;if((v=m)||(v=t!==null&&t.memoizedState===null?!1:(c&2)!==0),v?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),ve(Re,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(m=a.children,t=a.fallback,h?(a=i.mode,h=i.child,m={mode:"hidden",children:m},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=m):h=ol(m,a,0,null),t=Cr(t,a,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Mu(o),i.memoizedState=Lu,t):Fu(i,m));if(c=t.memoizedState,c!==null&&(v=c.dehydrated,v!==null))return k0(t,i,m,a,v,c,o);if(h){h=a.fallback,m=i.mode,c=t.child,v=c.sibling;var S={mode:"hidden",children:a.children};return(m&1)===0&&i.child!==c?(a=i.child,a.childLanes=0,a.pendingProps=S,i.deletions=null):(a=Gn(c,S),a.subtreeFlags=c.subtreeFlags&14680064),v!==null?h=Gn(v,h):(h=Cr(h,m,o,null),h.flags|=2),h.return=i,a.return=i,a.sibling=h,i.child=a,a=h,h=i.child,m=t.child.memoizedState,m=m===null?Mu(o):{baseLanes:m.baseLanes|o,cachePool:null,transitions:m.transitions},h.memoizedState=m,h.childLanes=t.childLanes&~o,i.memoizedState=Lu,a}return h=t.child,t=h.sibling,a=Gn(h,{mode:"visible",children:a.children}),(i.mode&1)===0&&(a.lanes=o),a.return=i,a.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=a,i.memoizedState=null,a}function Fu(t,i){return i=ol({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Go(t,i,o,a){return a!==null&&cu(a),ii(i,t.child,null,o),t=Fu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function k0(t,i,o,a,c,h,m){if(o)return i.flags&256?(i.flags&=-257,a=Au(Error(n(422))),Go(t,i,m,a)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=a.fallback,c=i.mode,a=ol({mode:"visible",children:a.children},c,0,null),h=Cr(h,c,m,null),h.flags|=2,a.return=i,h.return=i,a.sibling=h,i.child=a,(i.mode&1)!==0&&ii(i,t.child,null,m),i.child.memoizedState=Mu(m),i.memoizedState=Lu,h);if((i.mode&1)===0)return Go(t,i,m,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var v=a.dgst;return a=v,h=Error(n(419)),a=Au(h,a,void 0),Go(t,i,m,a)}if(v=(m&t.childLanes)!==0,yt||v){if(a=Ge,a!==null){switch(m&-m){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|m))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,mn(t,c),$t(a,t,c,-1))}return Zu(),a=Au(Error(n(421))),Go(t,i,m,a)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=U0.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,xt=Mn(c.nextSibling),Tt=i,xe=!0,Bt=null,t!==null&&(bt[Ot++]=fn,bt[Ot++]=pn,bt[Ot++]=pr,fn=t.id,pn=t.overflow,pr=i),i=Fu(i,a.children),i.flags|=4096,i)}function Sp(t,i,o){t.lanes|=i;var a=t.alternate;a!==null&&(a.lanes|=i),pu(t.return,i,o)}function Uu(t,i,o,a,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=c)}function Cp(t,i,o){var a=i.pendingProps,c=a.revealOrder,h=a.tail;if(ct(t,i,a.children,o),a=Re.current,(a&2)!==0)a=a&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,o,i);else if(t.tag===19)Sp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(ve(Re,a),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&zo(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Uu(i,!1,c,o,h);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&zo(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Uu(i,!0,o,null,h);break;case"together":Uu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ko(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function _n(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),vr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Gn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Gn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function T0(t,i,o){switch(i.tag){case 3:vp(i),ri();break;case 5:Ff(i);break;case 1:_t(i.type)&&Po(i);break;case 4:_u(i,i.stateNode.containerInfo);break;case 10:var a=i.type._context,c=i.memoizedProps.value;ve(Mo,a._currentValue),a._currentValue=c;break;case 13:if(a=i.memoizedState,a!==null)return a.dehydrated!==null?(ve(Re,Re.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Ep(t,i,o):(ve(Re,Re.current&1),t=_n(t,i,o),t!==null?t.sibling:null);ve(Re,Re.current&1);break;case 19:if(a=(o&i.childLanes)!==0,(t.flags&128)!==0){if(a)return Cp(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ve(Re,Re.current),a)break;return null;case 22:case 23:return i.lanes=0,gp(t,i,o)}return _n(t,i,o)}var Ip,ju,kp,Tp;Ip=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ju=function(){},kp=function(t,i,o,a){var c=t.memoizedProps;if(c!==a){t=i.stateNode,_r(tn.current);var h=null;switch(o){case"input":c=pa(t,c),a=pa(t,a),h=[];break;case"select":c=B({},c,{value:void 0}),a=B({},a,{value:void 0}),h=[];break;case"textarea":c=_a(t,c),a=_a(t,a),h=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=xo)}va(o,a);var m;o=null;for(x in c)if(!a.hasOwnProperty(x)&&c.hasOwnProperty(x)&&c[x]!=null)if(x==="style"){var v=c[x];for(m in v)v.hasOwnProperty(m)&&(o||(o={}),o[m]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(l.hasOwnProperty(x)?h||(h=[]):(h=h||[]).push(x,null));for(x in a){var S=a[x];if(v=c?.[x],a.hasOwnProperty(x)&&S!==v&&(S!=null||v!=null))if(x==="style")if(v){for(m in v)!v.hasOwnProperty(m)||S&&S.hasOwnProperty(m)||(o||(o={}),o[m]="");for(m in S)S.hasOwnProperty(m)&&v[m]!==S[m]&&(o||(o={}),o[m]=S[m])}else o||(h||(h=[]),h.push(x,o)),o=S;else x==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,v=v?v.__html:void 0,S!=null&&v!==S&&(h=h||[]).push(x,S)):x==="children"?typeof S!="string"&&typeof S!="number"||(h=h||[]).push(x,""+S):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(l.hasOwnProperty(x)?(S!=null&&x==="onScroll"&&Ce("scroll",t),h||v===S||(h=[])):(h=h||[]).push(x,S))}o&&(h=h||[]).push("style",o);var x=h;(i.updateQueue=x)&&(i.flags|=4)}},Tp=function(t,i,o,a){o!==a&&(i.flags|=4)};function fs(t,i){if(!xe)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function lt(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=a,t.childLanes=o,i}function x0(t,i,o){var a=i.pendingProps;switch(lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(i),null;case 1:return _t(i.type)&&Ro(),lt(i),null;case 3:return a=i.stateNode,li(),Ie(gt),Ie(st),wu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Do(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bt!==null&&(Qu(Bt),Bt=null))),ju(t,i),lt(i),null;case 5:yu(i);var c=_r(as.current);if(o=i.type,t!==null&&i.stateNode!=null)kp(t,i,o,a,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!a){if(i.stateNode===null)throw Error(n(166));return lt(i),null}if(t=_r(tn.current),Do(i)){a=i.stateNode,o=i.type;var h=i.memoizedProps;switch(a[en]=i,a[rs]=h,t=(i.mode&1)!==0,o){case"dialog":Ce("cancel",a),Ce("close",a);break;case"iframe":case"object":case"embed":Ce("load",a);break;case"video":case"audio":for(c=0;c<es.length;c++)Ce(es[c],a);break;case"source":Ce("error",a);break;case"img":case"image":case"link":Ce("error",a),Ce("load",a);break;case"details":Ce("toggle",a);break;case"input":sh(a,h),Ce("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ce("invalid",a);break;case"textarea":ah(a,h),Ce("invalid",a)}va(o,h),c=null;for(var m in h)if(h.hasOwnProperty(m)){var v=h[m];m==="children"?typeof v=="string"?a.textContent!==v&&(h.suppressHydrationWarning!==!0&&To(a.textContent,v,t),c=["children",v]):typeof v=="number"&&a.textContent!==""+v&&(h.suppressHydrationWarning!==!0&&To(a.textContent,v,t),c=["children",""+v]):l.hasOwnProperty(m)&&v!=null&&m==="onScroll"&&Ce("scroll",a)}switch(o){case"input":no(a),lh(a,h,!0);break;case"textarea":no(a),ch(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=xo)}a=c,i.updateQueue=a,a!==null&&(i.flags|=4)}else{m=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=m.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=m.createElement(o,{is:a.is}):(t=m.createElement(o),o==="select"&&(m=t,a.multiple?m.multiple=!0:a.size&&(m.size=a.size))):t=m.createElementNS(t,o),t[en]=i,t[rs]=a,Ip(t,i,!1,!1),i.stateNode=t;e:{switch(m=wa(o,a),o){case"dialog":Ce("cancel",t),Ce("close",t),c=a;break;case"iframe":case"object":case"embed":Ce("load",t),c=a;break;case"video":case"audio":for(c=0;c<es.length;c++)Ce(es[c],t);c=a;break;case"source":Ce("error",t),c=a;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),c=a;break;case"details":Ce("toggle",t),c=a;break;case"input":sh(t,a),c=pa(t,a),Ce("invalid",t);break;case"option":c=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},c=B({},a,{value:void 0}),Ce("invalid",t);break;case"textarea":ah(t,a),c=_a(t,a),Ce("invalid",t);break;default:c=a}va(o,c),v=c;for(h in v)if(v.hasOwnProperty(h)){var S=v[h];h==="style"?ph(t,S):h==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&hh(t,S)):h==="children"?typeof S=="string"?(o!=="textarea"||S!=="")&&Li(t,S):typeof S=="number"&&Li(t,""+S):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?S!=null&&h==="onScroll"&&Ce("scroll",t):S!=null&&X(t,h,S,m))}switch(o){case"input":no(t),lh(t,a,!1);break;case"textarea":no(t),ch(t);break;case"option":a.value!=null&&t.setAttribute("value",""+pe(a.value));break;case"select":t.multiple=!!a.multiple,h=a.value,h!=null?Wr(t,!!a.multiple,h,!1):a.defaultValue!=null&&Wr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=xo)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return lt(i),null;case 6:if(t&&i.stateNode!=null)Tp(t,i,t.memoizedProps,a);else{if(typeof a!="string"&&i.stateNode===null)throw Error(n(166));if(o=_r(as.current),_r(tn.current),Do(i)){if(a=i.stateNode,o=i.memoizedProps,a[en]=i,(h=a.nodeValue!==o)&&(t=Tt,t!==null))switch(t.tag){case 3:To(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(a.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[en]=i,i.stateNode=a}return lt(i),null;case 13:if(Ie(Re),a=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&xt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Rf(),ri(),i.flags|=98560,h=!1;else if(h=Do(i),a!==null&&a.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[en]=i}else ri(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;lt(i),h=!1}else Bt!==null&&(Qu(Bt),Bt=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Re.current&1)!==0?We===0&&(We=3):Zu())),i.updateQueue!==null&&(i.flags|=4),lt(i),null);case 4:return li(),ju(t,i),t===null&&ts(i.stateNode.containerInfo),lt(i),null;case 10:return fu(i.type._context),lt(i),null;case 17:return _t(i.type)&&Ro(),lt(i),null;case 19:if(Ie(Re),h=i.memoizedState,h===null)return lt(i),null;if(a=(i.flags&128)!==0,m=h.rendering,m===null)if(a)fs(h,!1);else{if(We!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=zo(t),m!==null){for(i.flags|=128,fs(h,!1),a=m.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),i.subtreeFlags=0,a=o,o=i.child;o!==null;)h=o,t=a,h.flags&=14680066,m=h.alternate,m===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=m.childLanes,h.lanes=m.lanes,h.child=m.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=m.memoizedProps,h.memoizedState=m.memoizedState,h.updateQueue=m.updateQueue,h.type=m.type,t=m.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return ve(Re,Re.current&1|2),i.child}t=t.sibling}h.tail!==null&&Fe()>di&&(i.flags|=128,a=!0,fs(h,!1),i.lanes=4194304)}else{if(!a)if(t=zo(m),t!==null){if(i.flags|=128,a=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),fs(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!xe)return lt(i),null}else 2*Fe()-h.renderingStartTime>di&&o!==1073741824&&(i.flags|=128,a=!0,fs(h,!1),i.lanes=4194304);h.isBackwards?(m.sibling=i.child,i.child=m):(o=h.last,o!==null?o.sibling=m:i.child=m,h.last=m)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Fe(),i.sibling=null,o=Re.current,ve(Re,a?o&1|2:o&1),i):(lt(i),null);case 22:case 23:return Ju(),a=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(i.flags|=8192),a&&(i.mode&1)!==0?(Nt&1073741824)!==0&&(lt(i),i.subtreeFlags&6&&(i.flags|=8192)):lt(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function N0(t,i){switch(lu(i),i.tag){case 1:return _t(i.type)&&Ro(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return li(),Ie(gt),Ie(st),wu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return yu(i),null;case 13:if(Ie(Re),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ri()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ie(Re),null;case 4:return li(),null;case 10:return fu(i.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var Yo=!1,at=!1,R0=typeof WeakSet=="function"?WeakSet:Set,W=null;function ui(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ae(t,i,a)}else o.current=null}function zu(t,i,o){try{o()}catch(a){Ae(t,i,a)}}var xp=!1;function P0(t,i){if(Ja=mo,t=sf(),Va(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var m=0,v=-1,S=-1,x=0,O=0,D=t,A=null;t:for(;;){for(var z;D!==o||c!==0&&D.nodeType!==3||(v=m+c),D!==h||a!==0&&D.nodeType!==3||(S=m+a),D.nodeType===3&&(m+=D.nodeValue.length),(z=D.firstChild)!==null;)A=D,D=z;for(;;){if(D===t)break t;if(A===o&&++x===c&&(v=m),A===h&&++O===a&&(S=m),(z=D.nextSibling)!==null)break;D=A,A=D.parentNode}D=z}o=v===-1||S===-1?null:{start:v,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(Za={focusedElem:t,selectionRange:o},mo=!1,W=i;W!==null;)if(i=W,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,W=t;else for(;W!==null;){i=W;try{var H=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var $=H.memoizedProps,Ue=H.memoizedState,k=i.stateNode,C=k.getSnapshotBeforeUpdate(i.elementType===i.type?$:Wt(i.type,$),Ue);k.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var T=i.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(L){Ae(i,i.return,L)}if(t=i.sibling,t!==null){t.return=i.return,W=t;break}W=i.return}return H=xp,xp=!1,H}function ps(t,i,o){var a=i.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&zu(i,o,h)}c=c.next}while(c!==a)}}function Qo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==i)}}function Bu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Np(t){var i=t.alternate;i!==null&&(t.alternate=null,Np(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[en],delete i[rs],delete i[ru],delete i[h0],delete i[f0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rp(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xo));else if(a!==4&&(t=t.child,t!==null))for(Wu(t,i,o),t=t.sibling;t!==null;)Wu(t,i,o),t=t.sibling}function Hu(t,i,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Hu(t,i,o),t=t.sibling;t!==null;)Hu(t,i,o),t=t.sibling}var et=null,Ht=!1;function Wn(t,i,o){for(o=o.child;o!==null;)Ap(t,i,o),o=o.sibling}function Ap(t,i,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ao,o)}catch{}switch(o.tag){case 5:at||ui(o,i);case 6:var a=et,c=Ht;et=null,Wn(t,i,o),et=a,Ht=c,et!==null&&(Ht?(t=et,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):et.removeChild(o.stateNode));break;case 18:et!==null&&(Ht?(t=et,o=o.stateNode,t.nodeType===8?nu(t.parentNode,o):t.nodeType===1&&nu(t,o),qi(t)):nu(et,o.stateNode));break;case 4:a=et,c=Ht,et=o.stateNode.containerInfo,Ht=!0,Wn(t,i,o),et=a,Ht=c;break;case 0:case 11:case 14:case 15:if(!at&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var h=c,m=h.destroy;h=h.tag,m!==void 0&&((h&2)!==0||(h&4)!==0)&&zu(o,i,m),c=c.next}while(c!==a)}Wn(t,i,o);break;case 1:if(!at&&(ui(o,i),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(v){Ae(o,i,v)}Wn(t,i,o);break;case 21:Wn(t,i,o);break;case 22:o.mode&1?(at=(a=at)||o.memoizedState!==null,Wn(t,i,o),at=a):Wn(t,i,o);break;default:Wn(t,i,o)}}function bp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new R0),i.forEach(function(a){var c=j0.bind(null,t,a);o.has(a)||(o.add(a),a.then(c,c))})}}function Vt(t,i){var o=i.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a];try{var h=t,m=i,v=m;e:for(;v!==null;){switch(v.tag){case 5:et=v.stateNode,Ht=!1;break e;case 3:et=v.stateNode.containerInfo,Ht=!0;break e;case 4:et=v.stateNode.containerInfo,Ht=!0;break e}v=v.return}if(et===null)throw Error(n(160));Ap(h,m,c),et=null,Ht=!1;var S=c.alternate;S!==null&&(S.return=null),c.return=null}catch(x){Ae(c,i,x)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Op(i,t),i=i.sibling}function Op(t,i){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(i,t),rn(t),a&4){try{ps(3,t,t.return),Qo(3,t)}catch($){Ae(t,t.return,$)}try{ps(5,t,t.return)}catch($){Ae(t,t.return,$)}}break;case 1:Vt(i,t),rn(t),a&512&&o!==null&&ui(o,o.return);break;case 5:if(Vt(i,t),rn(t),a&512&&o!==null&&ui(o,o.return),t.flags&32){var c=t.stateNode;try{Li(c,"")}catch($){Ae(t,t.return,$)}}if(a&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,m=o!==null?o.memoizedProps:h,v=t.type,S=t.updateQueue;if(t.updateQueue=null,S!==null)try{v==="input"&&h.type==="radio"&&h.name!=null&&oh(c,h),wa(v,m);var x=wa(v,h);for(m=0;m<S.length;m+=2){var O=S[m],D=S[m+1];O==="style"?ph(c,D):O==="dangerouslySetInnerHTML"?hh(c,D):O==="children"?Li(c,D):X(c,O,D,x)}switch(v){case"input":ma(c,h);break;case"textarea":uh(c,h);break;case"select":var A=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var z=h.value;z!=null?Wr(c,!!h.multiple,z,!1):A!==!!h.multiple&&(h.defaultValue!=null?Wr(c,!!h.multiple,h.defaultValue,!0):Wr(c,!!h.multiple,h.multiple?[]:"",!1))}c[rs]=h}catch($){Ae(t,t.return,$)}}break;case 6:if(Vt(i,t),rn(t),a&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch($){Ae(t,t.return,$)}}break;case 3:if(Vt(i,t),rn(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{qi(i.containerInfo)}catch($){Ae(t,t.return,$)}break;case 4:Vt(i,t),rn(t);break;case 13:Vt(i,t),rn(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(qu=Fe())),a&4&&bp(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(at=(x=at)||O,Vt(i,t),at=x):Vt(i,t),rn(t),a&8192){if(x=t.memoizedState!==null,(t.stateNode.isHidden=x)&&!O&&(t.mode&1)!==0)for(W=t,O=t.child;O!==null;){for(D=W=O;W!==null;){switch(A=W,z=A.child,A.tag){case 0:case 11:case 14:case 15:ps(4,A,A.return);break;case 1:ui(A,A.return);var H=A.stateNode;if(typeof H.componentWillUnmount=="function"){a=A,o=A.return;try{i=a,H.props=i.memoizedProps,H.state=i.memoizedState,H.componentWillUnmount()}catch($){Ae(a,o,$)}}break;case 5:ui(A,A.return);break;case 22:if(A.memoizedState!==null){Mp(D);continue}}z!==null?(z.return=A,W=z):Mp(D)}O=O.sibling}e:for(O=null,D=t;;){if(D.tag===5){if(O===null){O=D;try{c=D.stateNode,x?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(v=D.stateNode,S=D.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null,v.style.display=fh("display",m))}catch($){Ae(t,t.return,$)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=x?"":D.memoizedProps}catch($){Ae(t,t.return,$)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===t)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===t)break e;for(;D.sibling===null;){if(D.return===null||D.return===t)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Vt(i,t),rn(t),a&4&&bp(t);break;case 21:break;default:Vt(i,t),rn(t)}}function rn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Rp(o)){var a=o;break e}o=o.return}throw Error(n(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Li(c,""),a.flags&=-33);var h=Pp(t);Hu(t,h,c);break;case 3:case 4:var m=a.stateNode.containerInfo,v=Pp(t);Wu(t,v,m);break;default:throw Error(n(161))}}catch(S){Ae(t,t.return,S)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function A0(t,i,o){W=t,Dp(t)}function Dp(t,i,o){for(var a=(t.mode&1)!==0;W!==null;){var c=W,h=c.child;if(c.tag===22&&a){var m=c.memoizedState!==null||Yo;if(!m){var v=c.alternate,S=v!==null&&v.memoizedState!==null||at;v=Yo;var x=at;if(Yo=m,(at=S)&&!x)for(W=c;W!==null;)m=W,S=m.child,m.tag===22&&m.memoizedState!==null?Fp(c):S!==null?(S.return=m,W=S):Fp(c);for(;h!==null;)W=h,Dp(h),h=h.sibling;W=c,Yo=v,at=x}Lp(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,W=h):Lp(t)}}function Lp(t){for(;W!==null;){var i=W;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:at||Qo(5,i);break;case 1:var a=i.stateNode;if(i.flags&4&&!at)if(o===null)a.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:Wt(i.type,o.memoizedProps);a.componentDidUpdate(c,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Mf(i,h,a);break;case 3:var m=i.updateQueue;if(m!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Mf(i,m,o)}break;case 5:var v=i.stateNode;if(o===null&&i.flags&4){o=v;var S=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&o.focus();break;case"img":S.src&&(o.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var x=i.alternate;if(x!==null){var O=x.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&qi(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}at||i.flags&512&&Bu(i)}catch(A){Ae(i,i.return,A)}}if(i===t){W=null;break}if(o=i.sibling,o!==null){o.return=i.return,W=o;break}W=i.return}}function Mp(t){for(;W!==null;){var i=W;if(i===t){W=null;break}var o=i.sibling;if(o!==null){o.return=i.return,W=o;break}W=i.return}}function Fp(t){for(;W!==null;){var i=W;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Qo(4,i)}catch(S){Ae(i,o,S)}break;case 1:var a=i.stateNode;if(typeof a.componentDidMount=="function"){var c=i.return;try{a.componentDidMount()}catch(S){Ae(i,c,S)}}var h=i.return;try{Bu(i)}catch(S){Ae(i,h,S)}break;case 5:var m=i.return;try{Bu(i)}catch(S){Ae(i,m,S)}}}catch(S){Ae(i,i.return,S)}if(i===t){W=null;break}var v=i.sibling;if(v!==null){v.return=i.return,W=v;break}W=i.return}}var b0=Math.ceil,Xo=G.ReactCurrentDispatcher,Vu=G.ReactCurrentOwner,Mt=G.ReactCurrentBatchConfig,ue=0,Ge=null,ze=null,tt=0,Nt=0,ci=Fn(0),We=0,ms=null,vr=0,Jo=0,$u=0,gs=null,vt=null,qu=0,di=1/0,yn=null,Zo=!1,Gu=null,Hn=null,el=!1,Vn=null,tl=0,_s=0,Ku=null,nl=-1,rl=0;function dt(){return(ue&6)!==0?Fe():nl!==-1?nl:nl=Fe()}function $n(t){return(t.mode&1)===0?1:(ue&2)!==0&&tt!==0?tt&-tt:m0.transition!==null?(rl===0&&(rl=Rh()),rl):(t=me,t!==0||(t=window.event,t=t===void 0?16:Uh(t.type)),t)}function $t(t,i,o,a){if(50<_s)throw _s=0,Ku=null,Error(n(185));Bi(t,o,a),((ue&2)===0||t!==Ge)&&(t===Ge&&((ue&2)===0&&(Jo|=o),We===4&&qn(t,tt)),wt(t,a),o===1&&ue===0&&(i.mode&1)===0&&(di=Fe()+500,Ao&&jn()))}function wt(t,i){var o=t.callbackNode;mv(t,i);var a=ho(t,t===Ge?tt:0);if(a===0)o!==null&&Th(o),t.callbackNode=null,t.callbackPriority=0;else if(i=a&-a,t.callbackPriority!==i){if(o!=null&&Th(o),i===1)t.tag===0?p0(jp.bind(null,t)):If(jp.bind(null,t)),c0(function(){(ue&6)===0&&jn()}),o=null;else{switch(Ph(a)){case 1:o=xa;break;case 4:o=xh;break;case 16:o=lo;break;case 536870912:o=Nh;break;default:o=lo}o=Gp(o,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Up(t,i){if(nl=-1,rl=0,(ue&6)!==0)throw Error(n(327));var o=t.callbackNode;if(hi()&&t.callbackNode!==o)return null;var a=ho(t,t===Ge?tt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||i)i=il(t,a);else{i=a;var c=ue;ue|=2;var h=Bp();(Ge!==t||tt!==i)&&(yn=null,di=Fe()+500,Er(t,i));do try{L0();break}catch(v){zp(t,v)}while(!0);hu(),Xo.current=h,ue=c,ze!==null?i=0:(Ge=null,tt=0,i=We)}if(i!==0){if(i===2&&(c=Na(t),c!==0&&(a=c,i=Yu(t,c))),i===1)throw o=ms,Er(t,0),qn(t,a),wt(t,Fe()),o;if(i===6)qn(t,a);else{if(c=t.current.alternate,(a&30)===0&&!O0(c)&&(i=il(t,a),i===2&&(h=Na(t),h!==0&&(a=h,i=Yu(t,h))),i===1))throw o=ms,Er(t,0),qn(t,a),wt(t,Fe()),o;switch(t.finishedWork=c,t.finishedLanes=a,i){case 0:case 1:throw Error(n(345));case 2:Sr(t,vt,yn);break;case 3:if(qn(t,a),(a&130023424)===a&&(i=qu+500-Fe(),10<i)){if(ho(t,0)!==0)break;if(c=t.suspendedLanes,(c&a)!==a){dt(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Sr.bind(null,t,vt,yn),i);break}Sr(t,vt,yn);break;case 4:if(qn(t,a),(a&4194240)===a)break;for(i=t.eventTimes,c=-1;0<a;){var m=31-jt(a);h=1<<m,m=i[m],m>c&&(c=m),a&=~h}if(a=c,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*b0(a/1960))-a,10<a){t.timeoutHandle=tu(Sr.bind(null,t,vt,yn),a);break}Sr(t,vt,yn);break;case 5:Sr(t,vt,yn);break;default:throw Error(n(329))}}}return wt(t,Fe()),t.callbackNode===o?Up.bind(null,t):null}function Yu(t,i){var o=gs;return t.current.memoizedState.isDehydrated&&(Er(t,i).flags|=256),t=il(t,i),t!==2&&(i=vt,vt=o,i!==null&&Qu(i)),t}function Qu(t){vt===null?vt=t:vt.push.apply(vt,t)}function O0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var c=o[a],h=c.getSnapshot;c=c.value;try{if(!zt(h(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function qn(t,i){for(i&=~$u,i&=~Jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-jt(i),a=1<<o;t[o]=-1,i&=~a}}function jp(t){if((ue&6)!==0)throw Error(n(327));hi();var i=ho(t,0);if((i&1)===0)return wt(t,Fe()),null;var o=il(t,i);if(t.tag!==0&&o===2){var a=Na(t);a!==0&&(i=a,o=Yu(t,a))}if(o===1)throw o=ms,Er(t,0),qn(t,i),wt(t,Fe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Sr(t,vt,yn),wt(t,Fe()),null}function Xu(t,i){var o=ue;ue|=1;try{return t(i)}finally{ue=o,ue===0&&(di=Fe()+500,Ao&&jn())}}function wr(t){Vn!==null&&Vn.tag===0&&(ue&6)===0&&hi();var i=ue;ue|=1;var o=Mt.transition,a=me;try{if(Mt.transition=null,me=1,t)return t()}finally{me=a,Mt.transition=o,ue=i,(ue&6)===0&&jn()}}function Ju(){Nt=ci.current,Ie(ci)}function Er(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,u0(o)),ze!==null)for(o=ze.return;o!==null;){var a=o;switch(lu(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ro();break;case 3:li(),Ie(gt),Ie(st),wu();break;case 5:yu(a);break;case 4:li();break;case 13:Ie(Re);break;case 19:Ie(Re);break;case 10:fu(a.type._context);break;case 22:case 23:Ju()}o=o.return}if(Ge=t,ze=t=Gn(t.current,null),tt=Nt=i,We=0,ms=null,$u=Jo=vr=0,vt=gs=null,gr!==null){for(i=0;i<gr.length;i++)if(o=gr[i],a=o.interleaved,a!==null){o.interleaved=null;var c=a.next,h=o.pending;if(h!==null){var m=h.next;h.next=c,a.next=m}o.pending=a}gr=null}return t}function zp(t,i){do{var o=ze;try{if(hu(),Bo.current=$o,Wo){for(var a=Pe.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}Wo=!1}if(yr=0,qe=Be=Pe=null,us=!1,cs=0,Vu.current=null,o===null||o.return===null){We=1,ms=i,ze=null;break}e:{var h=t,m=o.return,v=o,S=i;if(i=tt,v.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var x=S,O=v,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var A=O.alternate;A?(O.updateQueue=A.updateQueue,O.memoizedState=A.memoizedState,O.lanes=A.lanes):(O.updateQueue=null,O.memoizedState=null)}var z=dp(m);if(z!==null){z.flags&=-257,hp(z,m,v,h,i),z.mode&1&&cp(h,x,i),i=z,S=x;var H=i.updateQueue;if(H===null){var $=new Set;$.add(S),i.updateQueue=$}else H.add(S);break e}else{if((i&1)===0){cp(h,x,i),Zu();break e}S=Error(n(426))}}else if(xe&&v.mode&1){var Ue=dp(m);if(Ue!==null){(Ue.flags&65536)===0&&(Ue.flags|=256),hp(Ue,m,v,h,i),cu(ai(S,v));break e}}h=S=ai(S,v),We!==4&&(We=2),gs===null?gs=[h]:gs.push(h),h=m;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var k=ap(h,S,i);Lf(h,k);break e;case 1:v=S;var C=h.type,T=h.stateNode;if((h.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Hn===null||!Hn.has(T)))){h.flags|=65536,i&=-i,h.lanes|=i;var L=up(h,v,i);Lf(h,L);break e}}h=h.return}while(h!==null)}Hp(o)}catch(q){i=q,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function Bp(){var t=Xo.current;return Xo.current=$o,t===null?$o:t}function Zu(){(We===0||We===3||We===2)&&(We=4),Ge===null||(vr&268435455)===0&&(Jo&268435455)===0||qn(Ge,tt)}function il(t,i){var o=ue;ue|=2;var a=Bp();(Ge!==t||tt!==i)&&(yn=null,Er(t,i));do try{D0();break}catch(c){zp(t,c)}while(!0);if(hu(),ue=o,Xo.current=a,ze!==null)throw Error(n(261));return Ge=null,tt=0,We}function D0(){for(;ze!==null;)Wp(ze)}function L0(){for(;ze!==null&&!ov();)Wp(ze)}function Wp(t){var i=qp(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,i===null?Hp(t):ze=i,Vu.current=null}function Hp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=x0(o,i,Nt),o!==null){ze=o;return}}else{if(o=N0(o,i),o!==null){o.flags&=32767,ze=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,ze=null;return}}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);We===0&&(We=5)}function Sr(t,i,o){var a=me,c=Mt.transition;try{Mt.transition=null,me=1,M0(t,i,o,a)}finally{Mt.transition=c,me=a}return null}function M0(t,i,o,a){do hi();while(Vn!==null);if((ue&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(gv(t,h),t===Ge&&(ze=Ge=null,tt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||el||(el=!0,Gp(lo,function(){return hi(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Mt.transition,Mt.transition=null;var m=me;me=1;var v=ue;ue|=4,Vu.current=null,P0(t,o),Op(o,t),n0(Za),mo=!!Ja,Za=Ja=null,t.current=o,A0(o),lv(),ue=v,me=m,Mt.transition=h}else t.current=o;if(el&&(el=!1,Vn=t,tl=c),h=t.pendingLanes,h===0&&(Hn=null),cv(o.stateNode),wt(t,Fe()),i!==null)for(a=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],a(c.value,{componentStack:c.stack,digest:c.digest});if(Zo)throw Zo=!1,t=Gu,Gu=null,t;return(tl&1)!==0&&t.tag!==0&&hi(),h=t.pendingLanes,(h&1)!==0?t===Ku?_s++:(_s=0,Ku=t):_s=0,jn(),null}function hi(){if(Vn!==null){var t=Ph(tl),i=Mt.transition,o=me;try{if(Mt.transition=null,me=16>t?16:t,Vn===null)var a=!1;else{if(t=Vn,Vn=null,tl=0,(ue&6)!==0)throw Error(n(331));var c=ue;for(ue|=4,W=t.current;W!==null;){var h=W,m=h.child;if((W.flags&16)!==0){var v=h.deletions;if(v!==null){for(var S=0;S<v.length;S++){var x=v[S];for(W=x;W!==null;){var O=W;switch(O.tag){case 0:case 11:case 15:ps(8,O,h)}var D=O.child;if(D!==null)D.return=O,W=D;else for(;W!==null;){O=W;var A=O.sibling,z=O.return;if(Np(O),O===x){W=null;break}if(A!==null){A.return=z,W=A;break}W=z}}}var H=h.alternate;if(H!==null){var $=H.child;if($!==null){H.child=null;do{var Ue=$.sibling;$.sibling=null,$=Ue}while($!==null)}}W=h}}if((h.subtreeFlags&2064)!==0&&m!==null)m.return=h,W=m;else e:for(;W!==null;){if(h=W,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:ps(9,h,h.return)}var k=h.sibling;if(k!==null){k.return=h.return,W=k;break e}W=h.return}}var C=t.current;for(W=C;W!==null;){m=W;var T=m.child;if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,W=T;else e:for(m=C;W!==null;){if(v=W,(v.flags&2048)!==0)try{switch(v.tag){case 0:case 11:case 15:Qo(9,v)}}catch(q){Ae(v,v.return,q)}if(v===m){W=null;break e}var L=v.sibling;if(L!==null){L.return=v.return,W=L;break e}W=v.return}}if(ue=c,jn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ao,t)}catch{}a=!0}return a}finally{me=o,Mt.transition=i}}return!1}function Vp(t,i,o){i=ai(o,i),i=ap(t,i,1),t=Bn(t,i,1),i=dt(),t!==null&&(Bi(t,1,i),wt(t,i))}function Ae(t,i,o){if(t.tag===3)Vp(t,t,o);else for(;i!==null;){if(i.tag===3){Vp(i,t,o);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Hn===null||!Hn.has(a))){t=ai(o,t),t=up(i,t,1),i=Bn(i,t,1),t=dt(),i!==null&&(Bi(i,1,t),wt(i,t));break}}i=i.return}}function F0(t,i,o){var a=t.pingCache;a!==null&&a.delete(i),i=dt(),t.pingedLanes|=t.suspendedLanes&o,Ge===t&&(tt&o)===o&&(We===4||We===3&&(tt&130023424)===tt&&500>Fe()-qu?Er(t,0):$u|=o),wt(t,i)}function $p(t,i){i===0&&((t.mode&1)===0?i=1:(i=co,co<<=1,(co&130023424)===0&&(co=4194304)));var o=dt();t=mn(t,i),t!==null&&(Bi(t,i,o),wt(t,o))}function U0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),$p(t,o)}function j0(t,i){var o=0;switch(t.tag){case 13:var a=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(n(314))}a!==null&&a.delete(i),$p(t,o)}var qp;qp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||gt.current)yt=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return yt=!1,T0(t,i,o);yt=(t.flags&131072)!==0}else yt=!1,xe&&(i.flags&1048576)!==0&&kf(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var a=i.type;Ko(t,i),t=i.pendingProps;var c=ei(i,st.current);oi(i,o),c=Cu(null,i,a,t,c,o);var h=Iu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,_t(a)?(h=!0,Po(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=qo,i.stateNode=c,c._reactInternals=i,Pu(i,a,t,o),i=Du(null,i,a,!0,h,o)):(i.tag=0,xe&&h&&ou(i),ct(null,i,c,o),i=i.child),i;case 16:a=i.elementType;e:{switch(Ko(t,i),t=i.pendingProps,c=a._init,a=c(a._payload),i.type=a,c=i.tag=B0(a),t=Wt(a,t),c){case 0:i=Ou(null,i,a,t,o);break e;case 1:i=yp(null,i,a,t,o);break e;case 11:i=fp(null,i,a,t,o);break e;case 14:i=pp(null,i,a,Wt(a.type,t),o);break e}throw Error(n(306,a,""))}return i;case 0:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),Ou(t,i,a,c,o);case 1:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),yp(t,i,a,c,o);case 3:e:{if(vp(i),t===null)throw Error(n(387));a=i.pendingProps,h=i.memoizedState,c=h.element,Df(t,i),jo(i,a,null,o);var m=i.memoizedState;if(a=m.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ai(Error(n(423)),i),i=wp(t,i,a,o,c);break e}else if(a!==c){c=ai(Error(n(424)),i),i=wp(t,i,a,o,c);break e}else for(xt=Mn(i.stateNode.containerInfo.firstChild),Tt=i,xe=!0,Bt=null,o=bf(i,null,a,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ri(),a===c){i=_n(t,i,o);break e}ct(t,i,a,o)}i=i.child}return i;case 5:return Ff(i),t===null&&uu(i),a=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,m=c.children,eu(a,c)?m=null:h!==null&&eu(a,h)&&(i.flags|=32),_p(t,i),ct(t,i,m,o),i.child;case 6:return t===null&&uu(i),null;case 13:return Ep(t,i,o);case 4:return _u(i,i.stateNode.containerInfo),a=i.pendingProps,t===null?i.child=ii(i,null,a,o):ct(t,i,a,o),i.child;case 11:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),fp(t,i,a,c,o);case 7:return ct(t,i,i.pendingProps,o),i.child;case 8:return ct(t,i,i.pendingProps.children,o),i.child;case 12:return ct(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(a=i.type._context,c=i.pendingProps,h=i.memoizedProps,m=c.value,ve(Mo,a._currentValue),a._currentValue=m,h!==null)if(zt(h.value,m)){if(h.children===c.children&&!gt.current){i=_n(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var v=h.dependencies;if(v!==null){m=h.child;for(var S=v.firstContext;S!==null;){if(S.context===a){if(h.tag===1){S=gn(-1,o&-o),S.tag=2;var x=h.updateQueue;if(x!==null){x=x.shared;var O=x.pending;O===null?S.next=S:(S.next=O.next,O.next=S),x.pending=S}}h.lanes|=o,S=h.alternate,S!==null&&(S.lanes|=o),pu(h.return,o,i),v.lanes|=o;break}S=S.next}}else if(h.tag===10)m=h.type===i.type?null:h.child;else if(h.tag===18){if(m=h.return,m===null)throw Error(n(341));m.lanes|=o,v=m.alternate,v!==null&&(v.lanes|=o),pu(m,o,i),m=h.sibling}else m=h.child;if(m!==null)m.return=h;else for(m=h;m!==null;){if(m===i){m=null;break}if(h=m.sibling,h!==null){h.return=m.return,m=h;break}m=m.return}h=m}ct(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,a=i.pendingProps.children,oi(i,o),c=Dt(c),a=a(c),i.flags|=1,ct(t,i,a,o),i.child;case 14:return a=i.type,c=Wt(a,i.pendingProps),c=Wt(a.type,c),pp(t,i,a,c,o);case 15:return mp(t,i,i.type,i.pendingProps,o);case 17:return a=i.type,c=i.pendingProps,c=i.elementType===a?c:Wt(a,c),Ko(t,i),i.tag=1,_t(a)?(t=!0,Po(i)):t=!1,oi(i,o),op(i,a,c),Pu(i,a,c,o),Du(null,i,a,!0,t,o);case 19:return Cp(t,i,o);case 22:return gp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return kh(t,i)}function z0(t,i,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,i,o,a){return new z0(t,i,o,a)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function B0(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ze)return 11;if(t===At)return 14}return 2}function Gn(t,i){var o=t.alternate;return o===null?(o=Ft(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function sl(t,i,o,a,c,h){var m=2;if(a=t,typeof t=="function")ec(t)&&(m=1);else if(typeof t=="string")m=5;else e:switch(t){case Ve:return Cr(o.children,c,h,i);case $e:m=8,c|=8;break;case Jt:return t=Ft(12,o,i,c|2),t.elementType=Jt,t.lanes=h,t;case Ne:return t=Ft(13,o,i,c),t.elementType=Ne,t.lanes=h,t;case mt:return t=Ft(19,o,i,c),t.elementType=mt,t.lanes=h,t;case ke:return ol(o,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ae:m=10;break e;case Se:m=9;break e;case Ze:m=11;break e;case At:m=14;break e;case it:m=16,a=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Ft(m,o,i,c),i.elementType=t,i.type=a,i.lanes=h,i}function Cr(t,i,o,a){return t=Ft(7,t,a,i),t.lanes=o,t}function ol(t,i,o,a){return t=Ft(22,t,a,i),t.elementType=ke,t.lanes=o,t.stateNode={isHidden:!1},t}function tc(t,i,o){return t=Ft(6,t,null,i),t.lanes=o,t}function nc(t,i,o){return i=Ft(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function W0(t,i,o,a,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function rc(t,i,o,a,c,h,m,v,S){return t=new W0(t,i,o,v,S),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Ft(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function H0(t,i,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Me,key:a==null?null:""+a,children:t,containerInfo:i,implementation:o}}function Kp(t){if(!t)return Un;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(_t(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(_t(o))return Sf(t,o,i)}return i}function Yp(t,i,o,a,c,h,m,v,S){return t=rc(o,a,!0,t,c,h,m,v,S),t.context=Kp(null),o=t.current,a=dt(),c=$n(o),h=gn(a,c),h.callback=i??null,Bn(o,h,c),t.current.lanes=c,Bi(t,c,a),wt(t,a),t}function ll(t,i,o,a){var c=i.current,h=dt(),m=$n(c);return o=Kp(o),i.context===null?i.context=o:i.pendingContext=o,i=gn(h,m),i.payload={element:t},a=a===void 0?null:a,a!==null&&(i.callback=a),t=Bn(c,i,m),t!==null&&($t(t,c,m,h),Uo(t,c,m)),m}function al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function ic(t,i){Qp(t,i),(t=t.alternate)&&Qp(t,i)}function V0(){return null}var Xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}ul.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ll(t,i,null,null)},ul.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;wr(function(){ll(null,t,null,null)}),i[dn]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var i=Oh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<On.length&&i!==0&&i<On[o].priority;o++);On.splice(o,0,t),o===0&&Mh(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jp(){}function $0(t,i,o,a,c){if(c){if(typeof a=="function"){var h=a;a=function(){var x=al(m);h.call(x)}}var m=Yp(i,a,t,0,null,!1,!1,"",Jp);return t._reactRootContainer=m,t[dn]=m.current,ts(t.nodeType===8?t.parentNode:t),wr(),m}for(;c=t.lastChild;)t.removeChild(c);if(typeof a=="function"){var v=a;a=function(){var x=al(S);v.call(x)}}var S=rc(t,0,!1,null,null,!1,!1,"",Jp);return t._reactRootContainer=S,t[dn]=S.current,ts(t.nodeType===8?t.parentNode:t),wr(function(){ll(i,S,o,a)}),S}function dl(t,i,o,a,c){var h=o._reactRootContainer;if(h){var m=h;if(typeof c=="function"){var v=c;c=function(){var S=al(m);v.call(S)}}ll(i,m,t,c)}else m=$0(o,i,t,c,a);return al(m)}Ah=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=zi(i.pendingLanes);o!==0&&(Pa(i,o|1),wt(i,Fe()),(ue&6)===0&&(di=Fe()+500,jn()))}break;case 13:wr(function(){var a=mn(t,1);if(a!==null){var c=dt();$t(a,t,1,c)}}),ic(t,1)}},Aa=function(t){if(t.tag===13){var i=mn(t,134217728);if(i!==null){var o=dt();$t(i,t,134217728,o)}ic(t,134217728)}},bh=function(t){if(t.tag===13){var i=$n(t),o=mn(t,i);if(o!==null){var a=dt();$t(o,t,i,a)}ic(t,i)}},Oh=function(){return me},Dh=function(t,i){var o=me;try{return me=t,i()}finally{me=o}},Ca=function(t,i,o){switch(i){case"input":if(ma(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var a=o[i];if(a!==t&&a.form===t.form){var c=No(a);if(!c)throw Error(n(90));ih(a),ma(a,c)}}}break;case"textarea":uh(t,o);break;case"select":i=o.value,i!=null&&Wr(t,!!o.multiple,i,!1)}},yh=Xu,vh=wr;var q0={usingClientEntryPoint:!1,Events:[is,Jr,No,gh,_h,Xu]},ys={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G0={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ch(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||V0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{ao=hl.inject(G0),Zt=hl}catch{}}return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q0,Et.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return H0(t,i,null,o)},Et.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var o=!1,a="",c=Xp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=rc(t,1,!1,null,null,o,!1,a,c),t[dn]=i.current,ts(t.nodeType===8?t.parentNode:t),new sc(i)},Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ch(i),t=t===null?null:t.stateNode,t},Et.flushSync=function(t){return wr(t)},Et.hydrate=function(t,i,o){if(!cl(i))throw Error(n(200));return dl(null,t,i,!0,o)},Et.hydrateRoot=function(t,i,o){if(!oc(t))throw Error(n(405));var a=o!=null&&o.hydratedSources||null,c=!1,h="",m=Xp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),i=Yp(i,null,t,1,o??null,c,!1,h,m),t[dn]=i.current,ts(t),a)for(t=0;t<a.length;t++)o=a[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new ul(i)},Et.render=function(t,i,o){if(!cl(i))throw Error(n(200));return dl(null,t,i,!1,o)},Et.unmountComponentAtNode=function(t){if(!cl(t))throw Error(n(40));return t._reactRootContainer?(wr(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1},Et.unstable_batchedUpdates=Xu,Et.unstable_renderSubtreeIntoContainer=function(t,i,o,a){if(!cl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return dl(t,i,o,!1,a)},Et.version="18.3.1-next-f1338f8080-20240426",Et}var om;function tw(){if(om)return uc.exports;om=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),uc.exports=ew(),uc.exports}var lm;function nw(){if(lm)return fl;lm=1;var r=tw();return fl.createRoot=r.createRoot,fl.hydrateRoot=r.hydrateRoot,fl}var rw=nw(),te=Zc();const iw=()=>{};var am={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(r,e){if(!r)throw Ni(e)},Ni=function(r){return new Error("Firebase Database ("+xg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},sw=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],d=r[n++],f=r[n++],p=((l&7)<<18|(u&63)<<12|(d&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],d=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|d&63)}}return e.join("")},ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],d=l+1<r.length,f=d?r[l+1]:0,p=l+2<r.length,g=p?r[l+2]:0,E=u>>2,y=(u&3)<<4|f>>4;let w=(f&15)<<2|g>>6,N=g&63;p||(N=64,d||(w=64)),s.push(n[E],n[y],n[w],n[N])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Ng(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):sw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],f=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const y=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||f==null||g==null||y==null)throw new ow;const w=u<<2|f>>4;if(s.push(w),g!==64){const N=f<<4&240|g>>2;if(s.push(N),y!==64){const R=g<<6&192|y;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rg=function(r){const e=Ng(r);return ed.encodeByteArray(e,!0)},kl=function(r){return Rg(r).replace(/\./g,"")},Tl=function(r){try{return ed.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(r){return Pg(void 0,r)}function Pg(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aw(n)||(r[n]=Pg(r[n],e[n]));return r}function aw(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=()=>uw().__FIREBASE_DEFAULTS__,dw=()=>{if(typeof process>"u"||typeof am>"u")return;const r=am.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Tl(r[1]);return e&&JSON.parse(e)},td=()=>{try{return iw()||cw()||dw()||hw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ag=r=>td()?.emulatorHosts?.[r],bg=r=>{const e=Ag(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Og=()=>td()?.config,Dg=r=>td()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nd(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[kl(JSON.stringify(n)),kl(JSON.stringify(d)),""].join(".")}const xs={};function fw(){const r={prod:[],emulator:[]};for(const e of Object.keys(xs))xs[e]?r.emulator.push(e):r.prod.push(e);return r}function pw(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let um=!1;function rd(r,e){if(typeof window>"u"||typeof document>"u"||!ar(window.location.host)||xs[r]===e||xs[r]||um)return;xs[r]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=fw().prod.length>0;function d(){const w=document.getElementById(s);w&&w.remove()}function f(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,N){w.setAttribute("width","24"),w.setAttribute("id",N),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{um=!0,d()},w}function E(w,N){w.setAttribute("id",N),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=pw(s),N=n("text"),R=document.getElementById(N)||document.createElement("span"),b=n("learnmore"),U=document.getElementById(b)||document.createElement("a"),F=n("preprendIcon"),V=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const X=w.element;f(X),E(U,b);const G=g();p(V,F),X.append(V,R,U,G),document.body.appendChild(X)}u?(R.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function id(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function mw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gw(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Mg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _w(){const r=pt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function yw(){return xg.NODE_ADMIN===!0}function vw(){try{return typeof indexedDB=="object"}catch{return!1}}function ww(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="FirebaseError";class xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ew,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gs.prototype.create)}}class Gs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],d=u?Sw(u,s):"Error",f=`${this.serviceName}: ${d} (${l}).`;return new xn(l,f,s)}}function Sw(r,e){return r.replace(Cw,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const Cw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r){return JSON.parse(r)}function Je(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=function(r){let e={},n={},s={},l="";try{const u=r.split(".");e=Ls(Tl(u[0])||""),n=Ls(Tl(u[1])||""),l=u[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},Iw=function(r){const e=Fg(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kw=function(r){const e=Fg(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Si(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Nc(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function xl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Nr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],d=e[l];if(cm(u)&&cm(d)){if(!Nr(u,d))return!1}else if(u!==d)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function cm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ks(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(u)}}),e}function Ts(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)s[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)s[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const w=s[y-3]^s[y-8]^s[y-14]^s[y-16];s[y]=(w<<1|w>>>31)&4294967295}let l=this.chain_[0],u=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,E;for(let y=0;y<80;y++){y<40?y<20?(g=f^u&(d^f),E=1518500249):(g=u^d^f,E=1859775393):y<60?(g=u&d|f&(u|d),E=2400959708):(g=u^d^f,E=3395469782);const w=(l<<5|l>>>27)+g+p+E+s[y]&4294967295;p=f,f=d,d=(u<<30|u>>>2)&4294967295,u=l,l=w}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+u&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const u=this.buf_;let d=this.inbuf_;for(;l<n;){if(d===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(u[d]=e.charCodeAt(l),++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}else for(;l<n;)if(u[d]=e[l],++d,++l,d===this.blockSize){this.compress_(u),d=0;break}}this.inbuf_=d,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let u=24;u>=0;u-=8)e[s]=this.chain_[l]>>u&255,++s;return e}}function xw(r,e){const n=new Nw(r,e);return n.subscribe.bind(n)}class Nw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Rw(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=hc),l.error===void 0&&(l.error=hc),l.complete===void 0&&(l.complete=hc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rw(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function hc(){}function Ql(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const u=l-55296;s++,M(s<r.length,"Surrogate pair missing trail surrogate.");const d=r.charCodeAt(s)-56320;l=65536+(u<<10)+d}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Xl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(r){return r&&r._delegate?r._delegate:r}class sr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new qs;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ow(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,d]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&d.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bw(r){return r===Ir?void 0:r}function Ow(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Aw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ge||(ge={}));const Lw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Mw=ge.INFO,Fw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Uw=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=Fw[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sd{constructor(e){this.name=e,this._logLevel=Mw,this._logHandler=Uw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const jw=(r,e)=>e.some(n=>r instanceof n);let dm,hm;function zw(){return dm||(dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bw(){return hm||(hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ug=new WeakMap,Rc=new WeakMap,jg=new WeakMap,fc=new WeakMap,od=new WeakMap;function Ww(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",d)},u=()=>{n(nr(r.result)),l()},d=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&Ug.set(n,r)}).catch(()=>{}),od.set(e,r),e}function Hw(r){if(Rc.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",d),r.removeEventListener("abort",d)},u=()=>{n(),l()},d=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",d),r.addEventListener("abort",d)});Rc.set(r,e)}let Pc={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Rc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||jg.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Vw(r){Pc=r(Pc)}function $w(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(pc(this),e,...n);return jg.set(s,e.sort?e.sort():[e]),nr(s)}:Bw().includes(r)?function(...e){return r.apply(pc(this),e),nr(Ug.get(this))}:function(...e){return nr(r.apply(pc(this),e))}}function qw(r){return typeof r=="function"?$w(r):(r instanceof IDBTransaction&&Hw(r),jw(r,zw())?new Proxy(r,Pc):r)}function nr(r){if(r instanceof IDBRequest)return Ww(r);if(fc.has(r))return fc.get(r);const e=qw(r);return e!==r&&(fc.set(r,e),od.set(e,r)),e}const pc=r=>od.get(r);function Gw(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const d=indexedDB.open(r,e),f=nr(d);return s&&d.addEventListener("upgradeneeded",p=>{s(nr(d.result),p.oldVersion,p.newVersion,nr(d.transaction),p)}),n&&d.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),f.then(p=>{u&&p.addEventListener("close",()=>u()),l&&p.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const Kw=["get","getKey","getAll","getAllKeys","count"],Yw=["put","add","delete","clear"],mc=new Map;function fm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(mc.get(e))return mc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=Yw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||Kw.includes(n)))return;const u=async function(d,...f){const p=this.transaction(d,l?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[n](...f),l&&p.done]))[0]};return mc.set(e,u),u}Vw(r=>({...r,get:(e,n,s)=>fm(e,n)||r.get(e,n,s),has:(e,n)=>!!fm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xw(r){return r.getComponent()?.type==="VERSION"}const Ac="@firebase/app",pm="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new sd("@firebase/app"),Jw="@firebase/app-compat",Zw="@firebase/analytics-compat",eE="@firebase/analytics",tE="@firebase/app-check-compat",nE="@firebase/app-check",rE="@firebase/auth",iE="@firebase/auth-compat",sE="@firebase/database",oE="@firebase/data-connect",lE="@firebase/database-compat",aE="@firebase/functions",uE="@firebase/functions-compat",cE="@firebase/installations",dE="@firebase/installations-compat",hE="@firebase/messaging",fE="@firebase/messaging-compat",pE="@firebase/performance",mE="@firebase/performance-compat",gE="@firebase/remote-config",_E="@firebase/remote-config-compat",yE="@firebase/storage",vE="@firebase/storage-compat",wE="@firebase/firestore",EE="@firebase/ai",SE="@firebase/firestore-compat",CE="firebase",IE="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="[DEFAULT]",kE={[Ac]:"fire-core",[Jw]:"fire-core-compat",[eE]:"fire-analytics",[Zw]:"fire-analytics-compat",[nE]:"fire-app-check",[tE]:"fire-app-check-compat",[rE]:"fire-auth",[iE]:"fire-auth-compat",[sE]:"fire-rtdb",[oE]:"fire-data-connect",[lE]:"fire-rtdb-compat",[aE]:"fire-fn",[uE]:"fire-fn-compat",[cE]:"fire-iid",[dE]:"fire-iid-compat",[hE]:"fire-fcm",[fE]:"fire-fcm-compat",[pE]:"fire-perf",[mE]:"fire-perf-compat",[gE]:"fire-rc",[_E]:"fire-rc-compat",[yE]:"fire-gcs",[vE]:"fire-gcs-compat",[wE]:"fire-fst",[SE]:"fire-fst-compat",[EE]:"fire-vertex","fire-js":"fire-js",[CE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Map,TE=new Map,Oc=new Map;function mm(r,e){try{r.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Rr(r){const e=r.name;if(Oc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Oc.set(e,r);for(const n of Nl.values())mm(n,r);for(const n of TE.values())mm(n,r);return!0}function Jl(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Rt(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Gs("app","Firebase",xE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=IE;function zg(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:bc,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw rr.create("bad-app-name",{appName:String(l)});if(n||(n=Og()),!n)throw rr.create("no-options");const u=Nl.get(l);if(u){if(Nr(n,u.options)&&Nr(s,u.config))return u;throw rr.create("duplicate-app",{appName:l})}const d=new Dw(l);for(const p of Oc.values())d.addComponent(p);const f=new NE(n,s,d);return Nl.set(l,f),f}function ld(r=bc){const e=Nl.get(r);if(!e&&r===bc&&Og())return zg();if(!e)throw rr.create("no-app",{appName:r});return e}function on(r,e,n){let s=kE[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(d.join(" "));return}Rr(new sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="firebase-heartbeat-database",PE=1,Ms="firebase-heartbeat-store";let gc=null;function Bg(){return gc||(gc=Gw(RE,PE,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ms)}catch(n){console.warn(n)}}}}).catch(r=>{throw rr.create("idb-open",{originalErrorMessage:r.message})})),gc}async function AE(r){try{const n=(await Bg()).transaction(Ms),s=await n.objectStore(Ms).get(Wg(r));return await n.done,s}catch(e){if(e instanceof xn)In.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e?.message});In.warn(n.message)}}}async function gm(r,e){try{const s=(await Bg()).transaction(Ms,"readwrite");await s.objectStore(Ms).put(e,Wg(r)),await s.done}catch(n){if(n instanceof xn)In.warn(n.message);else{const s=rr.create("idb-set",{originalErrorMessage:n?.message});In.warn(s.message)}}}function Wg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=1024,OE=30;class DE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ME(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_m();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>OE){const l=FE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){In.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_m(),{heartbeatsToSend:n,unsentEntries:s}=LE(this._heartbeatsCache.heartbeats),l=kl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return In.warn(e),""}}}function _m(){return new Date().toISOString().substring(0,10)}function LE(r,e=bE){const n=[];let s=r.slice();for(const l of r){const u=n.find(d=>d.agent===l.agent);if(u){if(u.dates.push(l.date),ym(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),ym(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ME{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vw()?ww().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AE(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ym(r){return kl(JSON.stringify({version:2,heartbeats:r})).length}function FE(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(r){Rr(new sr("platform-logger",e=>new Qw(e),"PRIVATE")),Rr(new sr("heartbeat",e=>new DE(e),"PRIVATE")),on(Ac,pm,r),on(Ac,pm,"esm2020"),on("fire-js","")}UE("");function Hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jE=Hg,Vg=new Gs("auth","Firebase",Hg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new sd("@firebase/auth");function zE(r,...e){Rl.logLevel<=ge.WARN&&Rl.warn(`Auth (${jr}): ${r}`,...e)}function wl(r,...e){Rl.logLevel<=ge.ERROR&&Rl.error(`Auth (${jr}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(r,...e){throw ad(r,...e)}function ln(r,...e){return ad(r,...e)}function $g(r,e,n){const s={...jE(),[e]:n};return new Gs("auth","Firebase",s).create(e,{appName:r.name})}function Sn(r){return $g(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ad(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return Vg.create(r,...e)}function J(r,e,...n){if(!r)throw ad(e,...n)}function vn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw wl(e),new Error(e)}function kn(r,e){r||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(){return typeof self<"u"&&self.location?.href||""}function BE(){return vm()==="http:"||vm()==="https:"}function vm(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BE()||gw()||"connection"in navigator)?navigator.onLine:!0}function HE(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=id()||Mg()}get(){return WE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(r,e){kn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qE=new Ks(3e4,6e4);function Nn(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Rn(r,e,n,s,l={}){return Gg(r,l,async()=>{let u={},d={};s&&(e==="GET"?d=s:u={body:JSON.stringify(s)});const f=Ri({key:r.config.apiKey,...d}).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:p,...u};return mw()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&ar(r.emulatorConfig.host)&&(g.credentials="include"),qg.fetch()(await Kg(r,r.config.apiHost,n,f),g)})}async function Gg(r,e,n){r._canInitEmulator=!1;const s={...VE,...e};try{const l=new KE(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw pl(r,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const f=u.ok?d.errorMessage:d.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw pl(r,"credential-already-in-use",d);if(p==="EMAIL_EXISTS")throw pl(r,"email-already-in-use",d);if(p==="USER_DISABLED")throw pl(r,"user-disabled",d);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw $g(r,E,g);Qt(r,E)}}catch(l){if(l instanceof xn)throw l;Qt(r,"network-request-failed",{message:String(l)})}}async function Ys(r,e,n,s,l={}){const u=await Rn(r,e,n,s,l);return"mfaPendingCredential"in u&&Qt(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function Kg(r,e,n,s){const l=`${e}${n}?${s}`,u=r,d=u.config.emulator?ud(r.config,l):`${r.config.apiScheme}://${l}`;return $E.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function GE(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ln(this.auth,"network-request-failed")),qE.get())})}}function pl(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=ln(r,e,s);return l.customData._tokenResponse=n,l}function wm(r){return r!==void 0&&r.enterprise!==void 0}class YE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function QE(r,e){return Rn(r,"GET","/v2/recaptchaConfig",Nn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XE(r,e){return Rn(r,"POST","/v1/accounts:delete",e)}async function Pl(r,e){return Rn(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JE(r,e=!1){const n=He(r),s=await n.getIdToken(e),l=cd(s);J(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,d=u?.sign_in_provider;return{claims:l,token:s,authTime:Ns(_c(l.auth_time)),issuedAtTime:Ns(_c(l.iat)),expirationTime:Ns(_c(l.exp)),signInProvider:d||null,signInSecondFactor:u?.sign_in_second_factor||null}}function _c(r){return Number(r)*1e3}function cd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const l=Tl(n);return l?JSON.parse(l):(wl("Failed to decode base64 JWT payload"),null)}catch(l){return wl("Caught error parsing JWT payload as JSON",l?.toString()),null}}function Em(r){const e=cd(r);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xn&&ZE(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ZE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(r){const e=r.auth,n=await r.getIdToken(),s=await Fs(r,Pl(e,{idToken:n}));J(s?.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const u=l.providerUserInfo?.length?Yg(l.providerUserInfo):[],d=nS(r.providerData,u),f=r.isAnonymous,p=!(r.email&&l.passwordHash)&&!d?.length,g=f?p:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Lc(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,E)}async function tS(r){const e=He(r);await Al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nS(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Yg(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(r,e){const n=await Gg(r,{},async()=>{const s=Ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,d=await Kg(r,l,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:s};return r.emulatorConfig&&ar(r.emulatorConfig.host)&&(p.credentials="include"),qg.fetch()(d,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iS(r,e){return Rn(r,"POST","/v2/accounts:revokeToken",Nn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Em(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Em(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await rS(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,d=new gi;return s&&(J(typeof s=="string","internal-error",{appName:e}),d.refreshToken=s),l&&(J(typeof l=="string","internal-error",{appName:e}),d.accessToken=l),u&&(J(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(r,e){J(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new eS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Lc(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JE(this,e)}reload(){return tS(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Al(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(Sn(this.auth));const e=await this.getIdToken();return await Fs(this,XE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,d=n.photoURL??void 0,f=n.tenantId??void 0,p=n._redirectEventId??void 0,g=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:N,providerData:R,stsTokenManager:b}=n;J(y&&b,e,"internal-error");const U=gi.fromJSON(this.name,b);J(typeof y=="string",e,"internal-error"),Yn(s,e.name),Yn(l,e.name),J(typeof w=="boolean",e,"internal-error"),J(typeof N=="boolean",e,"internal-error"),Yn(u,e.name),Yn(d,e.name),Yn(f,e.name),Yn(p,e.name),Yn(g,e.name),Yn(E,e.name);const F=new Gt({uid:y,auth:e,email:l,emailVerified:w,displayName:s,isAnonymous:N,photoURL:d,phoneNumber:u,tenantId:f,stsTokenManager:U,createdAt:g,lastLoginAt:E});return R&&Array.isArray(R)&&(F.providerData=R.map(V=>({...V}))),p&&(F._redirectEventId=p),F}static async _fromIdTokenResponse(e,n,s=!1){const l=new gi;l.updateFromServerResponse(n);const u=new Gt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Al(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];J(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Yg(l.providerUserInfo):[],d=!(l.email&&l.passwordHash)&&!u?.length,f=new gi;f.updateFromIdToken(s);const p=new Gt({uid:l.localId,auth:e,stsTokenManager:f,isAnonymous:d}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Lc(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Map;function wn(r){kn(r instanceof Function,"Expected a class definition");let e=Sm.get(r);return e?(kn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Sm.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qg.type="NONE";const Cm=Qg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(r,e,n){return`firebase:${r}:${e}:${n}`}class _i{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=El(this.userKey,l.apiKey,u),this.fullPersistenceKey=El("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Pl(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _i(wn(Cm),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||wn(Cm);const d=El(s,e.config.apiKey,e.name);let f=null;for(const g of n)try{const E=await g._get(d);if(E){let y;if(typeof E=="string"){const w=await Pl(e,{idToken:E}).catch(()=>{});if(!w)break;y=await Gt._fromGetAccountInfoResponse(e,w,E)}else y=Gt._fromJSON(e,E);g!==u&&(f=y),u=g;break}}catch{}const p=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new _i(u,e,s):(u=p[0],f&&await u._set(d,f.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(d)}catch{}})),new _i(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n_(e))return"Blackberry";if(r_(e))return"Webos";if(Jg(e))return"Safari";if((e.includes("chrome/")||Zg(e))&&!e.includes("edge/"))return"Chrome";if(t_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if(s?.length===2)return s[1]}return"Other"}function Xg(r=pt()){return/firefox\//i.test(r)}function Jg(r=pt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zg(r=pt()){return/crios\//i.test(r)}function e_(r=pt()){return/iemobile/i.test(r)}function t_(r=pt()){return/android/i.test(r)}function n_(r=pt()){return/blackberry/i.test(r)}function r_(r=pt()){return/webos/i.test(r)}function dd(r=pt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function sS(r=pt()){return dd(r)&&!!window.navigator?.standalone}function oS(){return _w()&&document.documentMode===10}function i_(r=pt()){return dd(r)||t_(r)||r_(r)||n_(r)||/windows phone/i.test(r)||e_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(r,e=[]){let n;switch(r){case"Browser":n=Im(pt());break;case"Worker":n=`${Im(pt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((d,f)=>{try{const p=e(u);d(p)}catch(p){f(p)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aS(r,e={}){return Rn(r,"GET","/v2/passwordPolicy",Nn(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=6;class cS{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new km(this),this.idTokenSubscription=new km(this),this.beforeStateQueue=new lS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pl(this,{idToken:e}),s=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Rt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,d=s?._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&f?.user&&(s=f.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(Sn(this));const n=e?He(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aS(this),n=new cS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await iS(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(f,this,"internal-error"),f.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,s,l);return()=>{d=!0,p()}}else{const p=e.addObserver(n);return()=>{d=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&zE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ur(r){return He(r)}class km{constructor(e){this.auth=e,this.observer=null,this.addObserver=xw(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hS(r){Zl=r}function o_(r){return Zl.loadJS(r)}function fS(){return Zl.recaptchaEnterpriseScript}function pS(){return Zl.gapiScript}function mS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class gS{constructor(){this.enterprise=new _S}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class _S{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yS="recaptcha-enterprise",l_="NO_RECAPTCHA";class vS{constructor(e){this.type=yS,this.auth=ur(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,f)=>{QE(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new YE(p);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,d(g.siteKey)}}).catch(p=>{f(p)})})}function l(u,d,f){const p=window.grecaptcha;wm(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:e}).then(g=>{d(g)}).catch(()=>{d(l_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gS().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{s(this.auth).then(f=>{if(!n&&wm(window.grecaptcha))l(f,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let p=fS();p.length!==0&&(p+=f),o_(p).then(()=>{l(f,u,d)}).catch(g=>{d(g)})}}).catch(f=>{d(f)})})}}async function Tm(r,e,n,s=!1,l=!1){const u=new vS(r);let d;if(l)d=l_;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const f={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:d}):Object.assign(f,{captchaResponse:d}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function bl(r,e,n,s,l){if(r._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Tm(r,e,n,n==="getOobCode");return s(r,u)}else return s(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Tm(r,e,n,n==="getOobCode");return s(r,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(r,e){const n=Jl(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(Nr(u,e??{}))return l;Qt(l,"already-initialized")}return n.initialize({options:e})}function ES(r,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(wn);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function SS(r,e,n){const s=ur(r);J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=a_(e),{host:d,port:f}=CS(e),p=f===null?"":`:${f}`,g={url:`${u}//${d}${p}/`},E=Object.freeze({host:d,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){J(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),J(Nr(g,s.config.emulator)&&Nr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ar(d)?(nd(`${u}//${d}${p}`),rd("Auth",!0)):IS()}function a_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function CS(r){const e=a_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:xm(s.substr(u.length+1))}}else{const[u,d]=s.split(":");return{host:u,port:xm(d)}}}function xm(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function IS(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function kS(r,e){return Rn(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(r,e){return Ys(r,"POST","/v1/accounts:signInWithPassword",Nn(r,e))}async function xS(r,e){return Rn(r,"POST","/v1/accounts:sendOobCode",Nn(r,e))}async function NS(r,e){return xS(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(r,e){return Ys(r,"POST","/v1/accounts:signInWithEmailLink",Nn(r,e))}async function PS(r,e){return Ys(r,"POST","/v1/accounts:signInWithEmailLink",Nn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends hd{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Us(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Us(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,n,"signInWithPassword",TS);case"emailLink":return RS(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,s,"signUpPassword",kS);case"emailLink":return PS(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(r,e){return Ys(r,"POST","/v1/accounts:signInWithIdp",Nn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="http://localhost";class Pr extends hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const d=new Pr(s,l);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,yi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:AS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ri(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OS(r){const e=ks(Ts(r)).link,n=e?ks(Ts(e)).deep_link_id:null,s=ks(Ts(r)).deep_link_id;return(s?ks(Ts(s)).link:null)||s||n||e||r}class fd{constructor(e){const n=ks(Ts(e)),s=n.apiKey??null,l=n.oobCode??null,u=bS(n.mode??null);J(s&&l&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=OS(e);try{return new fd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return Us._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=fd.parseLink(n);return J(s,"argument-error"),Us._fromEmailAndCode(e,s.code,s.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends u_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Qs{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends Qs{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Qs{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zn.credential(n,s)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(r,e){return Ys(r,"POST","/v1/accounts:signUp",Nn(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await Gt._fromIdTokenResponse(e,s,l),d=Nm(s);return new Ar({user:u,providerId:d,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=Nm(s);return new Ar({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function Nm(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends xn{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Ol.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Ol(e,n,s,l)}}function c_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ol._fromErrorAndOperation(r,u,e,s):u})}async function LS(r,e,n=!1){const s=await Fs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ar._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(r,e,n=!1){const{auth:s}=r;if(Rt(s.app))return Promise.reject(Sn(s));const l="reauthenticate";try{const u=await Fs(r,c_(s,l,e,r),n);J(u.idToken,s,"internal-error");const d=cd(u.idToken);J(d,s,"internal-error");const{sub:f}=d;return J(r.uid===f,s,"user-mismatch"),Ar._forOperation(r,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&Qt(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_(r,e,n=!1){if(Rt(r.app))return Promise.reject(Sn(r));const s="signIn",l=await c_(r,s,e),u=await Ar._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}async function FS(r,e){return d_(ur(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(r){const e=ur(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function US(r,e,n){const s=ur(r);await bl(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",NS)}async function jS(r,e,n){if(Rt(r.app))return Promise.reject(Sn(r));const s=ur(r),d=await bl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",DS).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&h_(r),p}),f=await Ar._fromIdTokenResponse(s,"signIn",d);return await s._updateCurrentUser(f.user),f}function zS(r,e,n){return Rt(r.app)?Promise.reject(Sn(r)):FS(He(r),Pi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&h_(r),s})}function BS(r,e,n,s){return He(r).onIdTokenChanged(e,n,s)}function WS(r,e,n){return He(r).beforeAuthStateChanged(e,n)}function HS(r,e,n,s){return He(r).onAuthStateChanged(e,n,s)}function VS(r){return He(r).signOut()}const Dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dl,"1"),this.storage.removeItem(Dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=1e3,qS=10;class p_ extends f_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=i_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,f,p)=>{this.notifyListeners(d,p)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const d=this.storage.getItem(s);!n&&this.localCache[s]===d||this.notifyListeners(s,d)},u=this.storage.getItem(s);oS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,qS):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},$S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p_.type="LOCAL";const GS=p_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_ extends f_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m_.type="SESSION";const g_=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ea(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,d=this.handlersMap[l];if(!d?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const f=Array.from(d).map(async g=>g(n.origin,u)),p=await KS(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,d;return new Promise((f,p)=>{const g=pd("",20);l.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);d={messageChannel:l,onMessage(y){const w=y;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(w.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(d),l.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function QS(r){an().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function XS(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JS(){return navigator?.serviceWorker?.controller||null}function ZS(){return __()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="firebaseLocalStorageDb",eC=1,Ll="firebaseLocalStorage",v_="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ta(r,e){return r.transaction([Ll],e?"readwrite":"readonly").objectStore(Ll)}function tC(){const r=indexedDB.deleteDatabase(y_);return new Xs(r).toPromise()}function Mc(){const r=indexedDB.open(y_,eC);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ll,{keyPath:v_})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ll)?e(s):(s.close(),await tC(),e(await Mc()))})})}async function Rm(r,e,n){const s=ta(r,!0).put({[v_]:e,value:n});return new Xs(s).toPromise()}async function nC(r,e){const n=ta(r,!1).get(e),s=await new Xs(n).toPromise();return s===void 0?null:s.value}function Pm(r,e){const n=ta(r,!0).delete(e);return new Xs(n).toPromise()}const rC=800,iC=3;class w_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>iC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return __()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(ZS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await XS(),!this.activeServiceWorker)return;this.sender=new YS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Rm(e,Dl,"1"),await Pm(e,Dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>nC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=ta(l,!1).getAll();return new Xs(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w_.type="LOCAL";const sC=w_;new Ks(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(r,e){return e?wn(e):(J(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lC(r){return d_(r.auth,new md(r),r.bypassAuthState)}function aC(r){const{auth:e,user:n}=r;return J(n,e,"internal-error"),MS(n,new md(r),r.bypassAuthState)}async function uC(r){const{auth:e,user:n}=r;return J(n,e,"internal-error"),LS(n,new md(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:d,type:f}=e;if(d){this.reject(d);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lC;case"linkViaPopup":case"linkViaRedirect":return uC;case"reauthViaPopup":case"reauthViaRedirect":return aC;default:Qt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC=new Ks(2e3,1e4);class pi extends E_{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cC.get())};e()}}pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="pendingRedirect",Sl=new Map;class hC extends E_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const s=await fC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fC(r,e){const n=gC(e),s=mC(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function pC(r,e){Sl.set(r._key(),e)}function mC(r){return wn(r._redirectPersistence)}function gC(r){return El(dC,r.config.apiKey,r.name)}async function _C(r,e,n=!1){if(Rt(r.app))return Promise.reject(Sn(r));const s=ur(r),l=oC(s,e),d=await new hC(s,l,n).execute();return d&&!n&&(delete d.user._redirectEventId,await s._persistUserIfCurrent(d.user),await s._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=600*1e3;class vC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!S_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Am(e))}saveEventToCache(e){this.cachedEventUids.add(Am(e)),this.lastProcessedEventTime=Date.now()}}function Am(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function S_({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function wC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(r,e={}){return Rn(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CC=/^https?/;async function IC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await EC(r);for(const n of e)try{if(kC(n))return}catch{}Qt(r,"unauthorized-domain")}function kC(r){const e=Dc(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const d=new URL(r);return d.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===s}if(!CC.test(n))return!1;if(SC.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=new Ks(3e4,6e4);function bm(){const r=an().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function xC(r){return new Promise((e,n)=>{function s(){bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bm(),n(ln(r,"network-request-failed"))},timeout:TC.get()})}if(an().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(an().gapi?.load)s();else{const l=mS("iframefcb");return an()[l]=()=>{gapi.load?s():n(ln(r,"network-request-failed"))},o_(`${pS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Cl=null,e})}let Cl=null;function NC(r){return Cl=Cl||xC(r),Cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=new Ks(5e3,15e3),PC="__/auth/iframe",AC="emulator/auth/iframe",bC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DC(r){const e=r.config;J(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?ud(e,AC):`https://${r.config.authDomain}/${PC}`,s={apiKey:e.apiKey,appName:r.name,v:jr},l=OC.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ri(s).slice(1)}`}async function LC(r){const e=await NC(r),n=an().gapi;return J(n,r,"internal-error"),e.open({where:document.body,url:DC(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bC,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const d=ln(r,"network-request-failed"),f=an().setTimeout(()=>{u(d)},RC.get());function p(){an().clearTimeout(f),l(s)}s.ping(p).then(p,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FC=500,UC=600,jC="_blank",zC="http://localhost";class Om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BC(r,e,n,s=FC,l=UC){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),d=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p={...MC,width:s.toString(),height:l.toString(),top:u,left:d},g=pt().toLowerCase();n&&(f=Zg(g)?jC:n),Xg(g)&&(e=e||zC,p.scrollbars="yes");const E=Object.entries(p).reduce((w,[N,R])=>`${w}${N}=${R},`,"");if(sS(g)&&f!=="_self")return WC(e||"",f),new Om(null);const y=window.open(e||"",f,E);J(y,r,"popup-blocked");try{y.focus()}catch{}return new Om(y)}function WC(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="__/auth/handler",VC="emulator/auth/handler",$C=encodeURIComponent("fac");async function Dm(r,e,n,s,l,u){J(r.config.authDomain,r,"auth-domain-config-required"),J(r.config.apiKey,r,"invalid-api-key");const d={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:jr,eventId:l};if(e instanceof u_){e.setDefaultLanguage(r.languageCode),d.providerId=e.providerId||"",Nc(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,y]of Object.entries({}))d[E]=y}if(e instanceof Qs){const E=e.getScopes().filter(y=>y!=="");E.length>0&&(d.scopes=E.join(","))}r.tenantId&&(d.tid=r.tenantId);const f=d;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await r._getAppCheckToken(),g=p?`#${$C}=${encodeURIComponent(p)}`:"";return`${qC(r)}?${Ri(f).slice(1)}${g}`}function qC({config:r}){return r.emulator?ud(r,VC):`https://${r.authDomain}/${HC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="webStorageSupport";class GC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g_,this._completeRedirectFn=_C,this._overrideRedirectResult=pC}async _openPopup(e,n,s,l){kn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await Dm(e,n,s,Dc(),l);return BC(e,u,pd())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await Dm(e,n,s,Dc(),l);return QS(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(kn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await LC(e),s=new vC(e);return n.register("authEvent",l=>(J(l?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yc,{type:yc},l=>{const u=l?.[0]?.[yc];u!==void 0&&n(!!u),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return i_()||Jg()||dd()}}const KC=GC;var Lm="@firebase/auth",Mm="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XC(r){Rr(new sr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;J(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:d,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s_(r)},g=new dS(s,l,u,p);return ES(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Rr(new sr("auth-internal",e=>{const n=ur(e.getProvider("auth").getImmediate());return(s=>new YC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Lm,Mm,QC(r)),on(Lm,Mm,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=300,ZC=Dg("authIdTokenMaxAge")||JC;let Fm=null;const e1=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ZC)return;const l=n?.token;Fm!==l&&(Fm=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function t1(r=ld()){const e=Jl(r,"auth");if(e.isInitialized())return e.getImmediate();const n=wS(r,{popupRedirectResolver:KC,persistence:[sC,GS,g_]}),s=Dg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const d=e1(u.toString());WS(n,d,()=>d(n.currentUser)),BS(n,f=>d(f))}}const l=Ag("auth");return l&&SS(n,`http://${l}`),n}function n1(){return document.getElementsByTagName("head")?.[0]??document}hS({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=ln("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",n1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XC("Browser");var r1="firebase",i1="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(r1,i1,"app");var Um={};const jm="@firebase/database",zm="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let C_="";function s1(r){C_=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new o1(e)}}catch{}return new l1},Tr=I_("localStorage"),a1=I_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new sd("@firebase/database"),u1=(function(){let r=1;return function(){return r++}})(),k_=function(r){const e=Pw(r),n=new Tw;n.update(e);const s=n.digest();return ed.encodeByteArray(s)},Js=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Js.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let Rs=null,Bm=!0;const c1=function(r,e){M(!0,"Can't turn on custom loggers persistently."),vi.logLevel=ge.VERBOSE,Rs=vi.log.bind(vi)},nt=function(...r){if(Bm===!0&&(Bm=!1,Rs===null&&a1.get("logging_enabled")===!0&&c1()),Rs){const e=Js.apply(null,r);Rs(e)}},Zs=function(r){return function(...e){nt(r,...e)}},Fc=function(...r){const e="FIREBASE INTERNAL ERROR: "+Js(...r);vi.error(e)},Tn=function(...r){const e=`FIREBASE FATAL ERROR: ${Js(...r)}`;throw vi.error(e),new Error(e)},ft=function(...r){const e="FIREBASE WARNING: "+Js(...r);vi.warn(e)},d1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ft("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gd=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},h1=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ci="[MIN_NAME]",br="[MAX_NAME]",zr=function(r,e){if(r===e)return 0;if(r===Ci||e===br)return-1;if(e===Ci||r===br)return 1;{const n=Wm(r),s=Wm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},f1=function(r,e){return r===e?0:r<e?-1:1},ws=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Je(e))},_d=function(r){if(typeof r!="object"||r===null)return Je(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Je(e[s]),n+=":",n+=_d(r[e[s]]);return n+="}",n},T_=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function rt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const x_=function(r){M(!gd(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,u,d,f,p;r===0?(u=0,d=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(r)/Math.LN2),s),u=f+s,d=Math.round(r*Math.pow(2,n-f)-Math.pow(2,n))):(u=0,d=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(p=n;p;p-=1)g.push(d%2?1:0),d=Math.floor(d/2);for(p=e;p;p-=1)g.push(u%2?1:0),u=Math.floor(u/2);g.push(l?1:0),g.reverse();const E=g.join("");let y="";for(p=0;p<64;p+=8){let w=parseInt(E.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),y=y+w}return y.toLowerCase()},p1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},m1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function g1(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const _1=new RegExp("^-?(0*)\\d{1,10}$"),y1=-2147483648,v1=2147483647,Wm=function(r){if(_1.test(r)){const e=Number(r);if(e>=y1&&e<=v1)return e}return null},Ai=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ft("Exception was thrown by user callback.",n),e},Math.floor(0))}},w1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ps=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Rt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){ft(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ft(e)}}class Il{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Il.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="5",N_="v",R_="s",P_="r",A_="f",b_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,O_="ls",D_="p",Uc="ac",L_="websocket",M_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,s,l,u=!1,d="",f=!1,p=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=u,this.persistenceKey=d,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function C1(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function U_(r,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===L_)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===M_)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);C1(r)&&(n.ns=r.namespace);const l=[];return rt(n,(u,d)=>{l.push(u+"="+d)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(){this.counters_={}}incrementCounter(e,n=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={},wc={};function vd(r){const e=r.toString();return vc[e]||(vc[e]=new I1),vc[e]}function k1(r,e){const n=r.toString();return wc[n]||(wc[n]=e()),wc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ai(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="start",x1="close",N1="pLPCommand",R1="pRTLPCB",j_="id",z_="pw",B_="ser",P1="cb",A1="seg",b1="ts",O1="d",D1="dframe",W_=1870,H_=30,L1=W_-H_,M1=25e3,F1=3e4;class mi{constructor(e,n,s,l,u,d,f){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.transportSessionId=d,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zs(e),this.stats_=vd(n),this.urlFn=p=>(this.appCheckToken&&(p[Uc]=this.appCheckToken),U_(n,M_,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new T1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(F1)),h1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wd((...u)=>{const[d,f,p,g,E]=u;if(this.incrementIncomingBytes_(u),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,d===Hm)this.id=f,this.password=p;else if(d===x1)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+d)},(...u)=>{const[d,f]=u;this.incrementIncomingBytes_(u),this.myPacketOrderer.handleResponse(d,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hm]="t",s[B_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[P1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[N_]=yd,this.transportSessionId&&(s[R_]=this.transportSessionId),this.lastSessionId&&(s[O_]=this.lastSessionId),this.applicationId&&(s[D_]=this.applicationId),this.appCheckToken&&(s[Uc]=this.appCheckToken),typeof location<"u"&&location.hostname&&b_.test(location.hostname)&&(s[P_]=A_);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mi.forceAllow_=!0}static forceDisallow(){mi.forceDisallow_=!0}static isAvailable(){return mi.forceAllow_?!0:!mi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!p1()&&!m1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Rg(n),l=T_(s,L1);for(let u=0;u<l.length;u++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[u]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[D1]="t",s[j_]=e,s[z_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wd{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=u1(),window[N1+this.uniqueCallbackIdentifier]=e,window[R1+this.uniqueCallbackIdentifier]=n,this.myIFrame=wd.createIFrame_();let u="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(u='<script>document.domain="'+document.domain+'";<\/script>');const d="<html><body>"+u+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(d),this.myIFrame.doc.close()}catch(f){nt("frame writing exception"),f.stack&&nt(f.stack),nt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[j_]=this.myID,e[z_]=this.myPW,e[B_]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+H_+s.length<=W_;){const d=this.pendingSegs.shift();s=s+"&"+A1+l+"="+d.seg+"&"+b1+l+"="+d.ts+"&"+O1+l+"="+d.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(M1)),u=()=>{clearTimeout(l),s()};this.addTag(e,u)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=16384,j1=45e3;let Ml=null;typeof MozWebSocket<"u"?Ml=MozWebSocket:typeof WebSocket<"u"&&(Ml=WebSocket);class qt{constructor(e,n,s,l,u,d,f){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=u,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zs(this.connId),this.stats_=vd(n),this.connURL=qt.connectionURL_(n,d,f,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,u){const d={};return d[N_]=yd,typeof location<"u"&&location.hostname&&b_.test(location.hostname)&&(d[P_]=A_),n&&(d[R_]=n),s&&(d[O_]=s),l&&(d[Uc]=l),u&&(d[D_]=u),U_(e,L_,d)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tr.set("previous_websocket_failure",!0);try{let s;yw(),this.mySock=new Ml(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ml!==null&&!qt.forceDisallow_}static previouslyFailed(){return Tr.isInMemoryStorage||Tr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Tr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=T_(n,U1);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(j1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static get ALL_TRANSPORTS(){return[mi,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=qt&&qt.isAvailable();let s=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||ft("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[qt];else{const l=this.transports_=[];for(const u of js.ALL_TRANSPORTS)u&&u.isAvailable()&&l.push(u);js.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}js.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=6e4,B1=5e3,W1=10*1024,H1=100*1024,Ec="t",Vm="d",V1="s",$m="r",$1="e",qm="o",Gm="a",Km="n",Ym="p",q1="h";class G1{constructor(e,n,s,l,u,d,f,p,g,E){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=u,this.onMessage_=d,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zs("c:"+this.id+":"),this.transportManager_=new js(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Ps(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>H1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>W1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===Gm?this.upgradeIfSecondaryHealthy_():n===$m?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ym,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Km,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ws("t",e),s=ws("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ws(Ec,e);if(Vm in e){const s=e[Vm];if(n===q1){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Km){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===V1?this.onConnectionShutdown_(s):n===$m?this.onReset_(s):n===$1?Fc("Server Error: "+s):n===qm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),yd!==s&&ft("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ps(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(z1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ps(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(B1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ym,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let u=0;u<l.length;u++)if(l[u].callback===n&&(!s||s===l[u].context)){l.splice(u,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends $_{static getInstance(){return new Fl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!id()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=32,Xm=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function fe(){return new _e("")}function ie(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function or(r){return r.pieces_.length-r.pieceNum_}function Ee(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new _e(r.pieces_,e)}function Ed(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function K1(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function zs(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function q_(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new _e(e,0)}function be(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof _e)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new _e(n,0)}function le(r){return r.pieceNum_>=r.pieces_.length}function St(r,e){const n=ie(r),s=ie(e);if(n===null)return e;if(n===s)return St(Ee(r),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function Y1(r,e){const n=zs(r,0),s=zs(e,0);for(let l=0;l<n.length&&l<s.length;l++){const u=zr(n[l],s[l]);if(u!==0)return u}return n.length===s.length?0:n.length<s.length?-1:1}function Sd(r,e){if(or(r)!==or(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ut(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(or(r)>or(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Q1{constructor(e,n){this.errorPrefix_=n,this.parts_=zs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xl(this.parts_[s]);G_(this)}}function X1(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Xl(e),G_(r)}function J1(r){const e=r.parts_.pop();r.byteLength_-=Xl(e),r.parts_.length>0&&(r.byteLength_-=1)}function G_(r){if(r.byteLength_>Xm)throw new Error(r.errorPrefix_+"has a key path longer than "+Xm+" bytes ("+r.byteLength_+").");if(r.parts_.length>Qm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qm+") or object contains a cycle "+kr(r))}function kr(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends $_{static getInstance(){return new Cd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=1e3,Z1=300*1e3,Jm=30*1e3,eI=1.3,tI=3e4,nI="server_kill",Zm=3;class Cn extends V_{constructor(e,n,s,l,u,d,f,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=u,this.authTokenProvider_=d,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=Cn.nextPersistentConnectionId_++,this.log_=Zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Es,this.maxReconnectDelay_=Z1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,u={r:l,a:e,b:n};this.log_(Je(u)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(u),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new qs,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:d=>{const f=d.d;d.s==="ok"?n.resolve(f):n.reject(f)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const u=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(u),n.promise}listen(e,n,s,l){this.initConnection_();const u=e._queryIdentifier,d=e._path.toString();this.log_("Listen called for "+d+" "+u),this.listens.has(d)||this.listens.set(d,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(d).has(u),"listen() called twice for same path/queryId.");const f={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(d).set(u,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const u={p:s},d="q";e.tag&&(u.q=n._queryObject,u.t=e.tag),u.h=e.hashFn(),this.sendRequest(d,u,f=>{const p=f.d,g=f.s;Cn.warnOnListenWarnings_(p,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&cn(e,"w")){const s=Si(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',u=n._path.toString();ft(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${u} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Iw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const u=l.s,d=l.d||"error";this.authToken_===e&&(u==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(u,d))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const u={p:e},d="n";l&&(u.q=s,u.t=l),this.sendRequest(d,u)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const u={p:n,d:s};this.log_("onDisconnect "+e,u),this.sendRequest(e,u,d=>{l&&setTimeout(()=>{l(d.s,d.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,u){this.initConnection_();const d={p:n,d:s};u!==void 0&&(d.h=u),this.outstandingPuts_.push({action:e,request:d,onComplete:l}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,u=>{this.log_(n+" response",u),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(u.s,u.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const u=s.d;this.log_("reportStats","Error sending stats: "+u)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fc("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tI&&(this.reconnectDelay_=Es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+Cn.nextConnectionId_++,u=this.lastSessionId;let d=!1,f=null;const p=function(){f?f.close():(d=!0,s())},g=function(y){M(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(y)};this.realtime_={close:p,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,w]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);d?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=w&&w.token,f=new G1(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,N=>{ft(N+" ("+this.repoInfo_.toString()+")"),this.interrupt(nI)},u))}catch(y){this.log_("Failed to get token: "+y),d||(this.repoInfo_.nodeAdmin&&ft(y),p())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nc(this.interruptReasons_)&&(this.reconnectDelay_=Es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(u=>_d(u)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new _e(e).toString();let l;if(this.listens.has(s)){const u=this.listens.get(s);l=u.get(n),u.delete(n),u.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zm&&(this.reconnectDelay_=Jm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+C_.replace(/\./g,"-")]=1,id()?e["framework.cordova"]=1:Mg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fl.getInstance().currentlyOnline();return Nc(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new se(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new se(Ci,e),l=new se(Ci,n);return this.compare(s,l)!==0}minPost(){return se.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;class K_ extends na{static get __EMPTY_NODE(){return ml}static set __EMPTY_NODE(e){ml=e}compare(e,n){return zr(e.name,n.name)}isDefinedOn(e){throw Ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return se.MIN}maxPost(){return new se(br,ml)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new se(e,ml)}toString(){return".key"}}const wi=new K_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s,l,u=null){this.isReverse_=l,this.resultGenerator_=u,this.nodeStack_=[];let d=1;for(;!e.isEmpty();)if(e=e,d=n?s(e.key,n):1,l&&(d*=-1),d<0)this.isReverse_?e=e.left:e=e.right;else if(d===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=l??Ct.EMPTY_NODE,this.right=u??Ct.EMPTY_NODE}copy(e,n,s,l,u){return new Qe(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return u<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ct.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class rI{copy(e,n,s,l,u){return this}insert(e,n,s){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new gl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new gl(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new rI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(r,e){return zr(r.name,e.name)}function Id(r,e){return zr(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc;function sI(r){jc=r}const Y_=function(r){return typeof r=="number"?"number:"+x_(r):"string:"+r},Q_=function(r){if(r.isLeafNode()){const e=r.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else M(r===jc||r.isEmpty(),"priority of unexpected type.");M(r===jc||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg;class Ye{static set __childrenNodeConstructor(e){eg=e}static get __childrenNodeConstructor(){return eg}constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Q_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ie(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||or(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Y_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=x_(this.value_):e+=this.value_,this.lazyHash_=k_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Ye.VALUE_TYPE_ORDER.indexOf(n),u=Ye.VALUE_TYPE_ORDER.indexOf(s);return M(l>=0,"Unknown leaf type: "+n),M(u>=0,"Unknown leaf type: "+s),l===u?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:u-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X_,J_;function oI(r){X_=r}function lI(r){J_=r}class aI extends na{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),u=s.compareTo(l);return u===0?zr(e.name,n.name):u}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return se.MIN}maxPost(){return new se(br,new Ye("[PRIORITY-POST]",J_))}makePost(e,n){const s=X_(e);return new se(n,new Ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const Oe=new aI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=Math.log(2);class cI{constructor(e){const n=u=>parseInt(Math.log(u)/uI,10),s=u=>parseInt(Array(u+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ul=function(r,e,n,s){r.sort(e);const l=function(p,g){const E=g-p;let y,w;if(E===0)return null;if(E===1)return y=r[p],w=n?n(y):y,new Qe(w,y.node,Qe.BLACK,null,null);{const N=parseInt(E/2,10)+p,R=l(p,N),b=l(N+1,g);return y=r[N],w=n?n(y):y,new Qe(w,y.node,Qe.BLACK,R,b)}},u=function(p){let g=null,E=null,y=r.length;const w=function(R,b){const U=y-R,F=y;y-=R;const V=l(U+1,F),X=r[U],G=n?n(X):X;N(new Qe(G,X.node,b,null,V))},N=function(R){g?(g.left=R,g=R):(E=R,g=R)};for(let R=0;R<p.count;++R){const b=p.nextBitIsOne(),U=Math.pow(2,p.count-(R+1));b?w(U,Qe.BLACK):(w(U,Qe.BLACK),w(U,Qe.RED))}return E},d=new cI(r.length),f=u(d);return new Ct(s||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;const fi={};class En{static get Default(){return M(fi&&Oe,"ChildrenNode.ts has not been loaded"),Sc=Sc||new En({".priority":fi},{".priority":Oe}),Sc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Si(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const u=n.getIterator(se.Wrap);let d=u.getNext();for(;d;)l=l||e.isDefinedOn(d.node),s.push(d),d=u.getNext();let f;l?f=Ul(s,e.getCompare()):f=fi;const p=e.toString(),g={...this.indexSet_};g[p]=e;const E={...this.indexes_};return E[p]=f,new En(E,g)}addToIndexes(e,n){const s=xl(this.indexes_,(l,u)=>{const d=Si(this.indexSet_,u);if(M(d,"Missing index implementation for "+u),l===fi)if(d.isDefinedOn(e.node)){const f=[],p=n.getIterator(se.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),Ul(f,d.getCompare())}else return fi;else{const f=n.get(e.name);let p=l;return f&&(p=p.remove(new se(e.name,f))),p.insert(e,e.node)}});return new En(s,this.indexSet_)}removeFromIndexes(e,n){const s=xl(this.indexes_,l=>{if(l===fi)return l;{const u=n.get(e.name);return u?l.remove(new se(e.name,u)):l}});return new En(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss;class Z{static get EMPTY_NODE(){return Ss||(Ss=new Z(new Ct(Id),null,En.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Q_(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ss}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ss:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new se(e,n);let l,u;n.isEmpty()?(l=this.children_.remove(e),u=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),u=this.indexMap_.addToIndexes(s,this.children_));const d=l.isEmpty()?Ss:this.priorityNode_;return new Z(l,d,u)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{M(ie(e)!==".priority"||or(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,u=!0;if(this.forEachChild(Oe,(d,f)=>{n[d]=f.val(e),s++,u&&Z.INTEGER_REGEXP_.test(d)?l=Math.max(l,Number(d)):u=!1}),!e&&u&&l<2*s){const d=[];for(const f in n)d[f]=n[f];return d}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Y_(this.getPriority().val())+":"),this.forEachChild(Oe,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":k_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const u=l.getPredecessorKey(new se(e,n));return u?u.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new se(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new se(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,se.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)<0;)l.getNext(),u=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,se.Wrap);let u=l.peek();for(;u!=null&&n.compare(u,e)>0;)l.getNext(),u=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===eo?-1:0}withIndex(e){if(e===wi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Oe),l=n.getIterator(Oe);let u=s.getNext(),d=l.getNext();for(;u&&d;){if(u.name!==d.name||!u.node.equals(d.node))return!1;u=s.getNext(),d=l.getNext()}return u===null&&d===null}else return!1;else return!1}}resolveIndex_(e){return e===wi?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dI extends Z{constructor(){super(new Ct(Id),Z.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const eo=new dI;Object.defineProperties(se,{MIN:{value:new se(Ci,Z.EMPTY_NODE)},MAX:{value:new se(br,eo)}});K_.__EMPTY_NODE=Z.EMPTY_NODE;Ye.__childrenNodeConstructor=Z;sI(eo);lI(eo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=!0;function Xe(r,e=null){if(r===null)return Z.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Ye(n,Xe(e))}if(!(r instanceof Array)&&hI){const n=[];let s=!1;if(rt(r,(d,f)=>{if(d.substring(0,1)!=="."){const p=Xe(f);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),n.push(new se(d,p)))}}),n.length===0)return Z.EMPTY_NODE;const u=Ul(n,iI,d=>d.name,Id);if(s){const d=Ul(n,Oe.getCompare());return new Z(u,Xe(e),new En({".priority":d},{".priority":Oe}))}else return new Z(u,Xe(e),En.Default)}else{let n=Z.EMPTY_NODE;return rt(r,(s,l)=>{if(cn(r,s)&&s.substring(0,1)!=="."){const u=Xe(l);(u.isLeafNode()||!u.isEmpty())&&(n=n.updateImmediateChild(s,u))}}),n.updatePriority(Xe(e))}}oI(Xe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI extends na{constructor(e){super(),this.indexPath_=e,M(!le(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),u=s.compareTo(l);return u===0?zr(e.name,n.name):u}makePost(e,n){const s=Xe(e),l=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new se(n,l)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,eo);return new se(br,e)}toString(){return zs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI extends na{compare(e,n){const s=e.node.compareTo(n.node);return s===0?zr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return se.MIN}maxPost(){return se.MAX}makePost(e,n){const s=Xe(e);return new se(n,s)}toString(){return".value"}}const mI=new pI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(r){return{type:"value",snapshotNode:r}}function Ii(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Bs(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Ws(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function gI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.index_=e}updateChild(e,n,s,l,u,d){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(n);return f.getChild(l).equals(s.getChild(l))&&f.isEmpty()===s.isEmpty()||(d!=null&&(s.isEmpty()?e.hasChild(n)?d.trackChildChange(Bs(n,f)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?d.trackChildChange(Ii(n,s)):d.trackChildChange(Ws(n,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Oe,(l,u)=>{n.hasChild(l)||s.trackChildChange(Bs(l,u))}),n.isLeafNode()||n.forEachChild(Oe,(l,u)=>{if(e.hasChild(l)){const d=e.getImmediateChild(l);d.equals(u)||s.trackChildChange(Ws(l,u,d))}else s.trackChildChange(Ii(l,u))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.indexedFilter_=new kd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Hs.getStartPost_(e),this.endPost_=Hs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,u,d){return this.matches(new se(n,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,u,d)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Z.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(Z.EMPTY_NODE);const u=this;return n.forEachChild(Oe,(d,f)=>{u.matches(new se(d,f))||(l=l.updateImmediateChild(d,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Hs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,u,d){return this.rangedFilter_.matches(new se(n,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,u,d):this.fullLimitUpdateChild_(e,n,s,u,d)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=Z.EMPTY_NODE.withIndex(this.index_);let u;this.reverse_?u=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):u=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let d=0;for(;u.hasNext()&&d<this.limit_;){const f=u.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))l=l.updateImmediateChild(f.name,f.node),d++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(Z.EMPTY_NODE);let u;this.reverse_?u=l.getReverseIterator(this.index_):u=l.getIterator(this.index_);let d=0;for(;u.hasNext();){const f=u.getNext();d<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?d++:l=l.updateImmediateChild(f.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,u){let d;if(this.reverse_){const y=this.index_.getCompare();d=(w,N)=>y(N,w)}else d=this.index_.getCompare();const f=e;M(f.numChildren()===this.limit_,"");const p=new se(n,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),E=this.rangedFilter_.matches(p);if(f.hasChild(n)){const y=f.getImmediateChild(n);let w=l.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===n||f.hasChild(w.name));)w=l.getChildAfterChild(this.index_,w,this.reverse_);const N=w==null?1:d(w,p);if(E&&!s.isEmpty()&&N>=0)return u?.trackChildChange(Ws(n,s,y)),f.updateImmediateChild(n,s);{u?.trackChildChange(Bs(n,y));const b=f.updateImmediateChild(n,Z.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(u?.trackChildChange(Ii(w.name,w.node)),b.updateImmediateChild(w.name,w.node)):b}}else return s.isEmpty()?e:E&&d(g,p)>=0?(u!=null&&(u.trackChildChange(Bs(g.name,g.node)),u.trackChildChange(Ii(n,s))),f.updateImmediateChild(n,s).updateImmediateChild(g.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ci}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:br}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Td;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yI(r){return r.loadsAllData()?new kd(r.getIndex()):r.hasLimit()?new _I(r):new Hs(r)}function tg(r){const e={};if(r.isDefault())return e;let n;if(r.index_===Oe?n="$priority":r.index_===mI?n="$value":r.index_===wi?n="$key":(M(r.index_ instanceof fI,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Je(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Je(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Je(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Je(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Je(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function ng(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==Oe&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends V_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Zs("p:rest:"),this.listens_={}}listen(e,n,s,l){const u=e._path.toString();this.log_("Listen called for "+u+" "+e._queryIdentifier);const d=jl.getListenId_(e,s),f={};this.listens_[d]=f;const p=tg(e._queryParams);this.restRequest_(u+".json",p,(g,E)=>{let y=E;if(g===404&&(y=null,g=null),g===null&&this.onDataUpdate_(u,y,!1,s),Si(this.listens_,d)===f){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",l(w,null)}})}unlisten(e,n){const s=jl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=tg(e._queryParams),s=e._path.toString(),l=new qs;return this.restRequest_(s+".json",n,(u,d)=>{let f=d;u===404&&(f=null,u=null),u===null?(this.onDataUpdate_(s,f,!1,null),l.resolve(f)):l.reject(new Error(f))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,u])=>{l&&l.accessToken&&(n.auth=l.accessToken),u&&u.token&&(n.ac=u.token);const d=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ri(n);this.log_("Sending REST request for "+d);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+d+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Ls(f.responseText)}catch{ft("Failed to parse JSON response for "+d+": "+f.responseText)}s(null,p)}else f.status!==401&&f.status!==404&&ft("Got unsuccessful REST response for "+d+" Status: "+f.status),s(f.status);s=null}},f.open("GET",d,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){return{value:null,children:new Map}}function ey(r,e,n){if(le(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=ie(e);r.children.has(s)||r.children.set(s,zl());const l=r.children.get(s);e=Ee(e),ey(l,e,n)}}function zc(r,e,n){r.value!==null?n(e,r.value):wI(r,(s,l)=>{const u=new _e(e.toString()+"/"+s);zc(l,u,n)})}function wI(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&rt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=10*1e3,SI=30*1e3,CI=300*1e3;class II{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new EI(e);const s=rg+(SI-rg)*Math.random();Ps(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;rt(e,(l,u)=>{u>0&&cn(this.statsToReport_,l)&&(n[l]=u,s=!0)}),s&&this.server_.reportStats(n),Ps(this.reportStats_.bind(this),Math.floor(Math.random()*2*CI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=xd()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new Bl(fe(),n,this.revert)}}else return M(ie(this.path)===e,"operationForChild called for unrelated child."),new Bl(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Vs(this.source,fe()):new Vs(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return le(this.path)?new Or(this.source,fe(),this.snap.getImmediateChild(e)):new Or(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new Or(this.source,fe(),n.value):new ki(this.source,fe(),n)}else return M(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ki(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function TI(r,e,n,s){const l=[],u=[];return e.forEach(d=>{d.type==="child_changed"&&r.index_.indexedValueChanged(d.oldSnap,d.snapshotNode)&&u.push(gI(d.childName,d.snapshotNode))}),Cs(r,l,"child_removed",e,s,n),Cs(r,l,"child_added",e,s,n),Cs(r,l,"child_moved",u,s,n),Cs(r,l,"child_changed",e,s,n),Cs(r,l,"value",e,s,n),l}function Cs(r,e,n,s,l,u){const d=s.filter(f=>f.type===n);d.sort((f,p)=>NI(r,f,p)),d.forEach(f=>{const p=xI(r,f,u);l.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,r.query_))})})}function xI(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function NI(r,e,n){if(e.childName==null||n.childName==null)throw Ni("Should only compare child_ events.");const s=new se(e.childName,e.snapshotNode),l=new se(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(r,e){return{eventCache:r,serverCache:e}}function As(r,e,n,s){return ra(new Dr(e,n,s),r.serverCache)}function ty(r,e,n,s){return ra(r.eventCache,new Dr(e,n,s))}function Bc(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Lr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;const RI=()=>(Cc||(Cc=new Ct(f1)),Cc);class we{static fromObject(e){let n=new we(null);return rt(e,(s,l)=>{n=n.set(new _e(s),l)}),n}constructor(e,n=RI()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:fe(),value:this.value};if(le(e))return null;{const s=ie(e),l=this.children.get(s);if(l!==null){const u=l.findRootMostMatchingPathAndValue(Ee(e),n);return u!=null?{path:be(new _e(s),u.path),value:u.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new we(null)}}set(e,n){if(le(e))return new we(n,this.children);{const s=ie(e),u=(this.children.get(s)||new we(null)).set(Ee(e),n),d=this.children.insert(s,u);return new we(this.value,d)}}remove(e){if(le(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const l=s.remove(Ee(e));let u;return l.isEmpty()?u=this.children.remove(n):u=this.children.insert(n,l),this.value===null&&u.isEmpty()?new we(null):new we(this.value,u)}else return this}}get(e){if(le(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(le(e))return n;{const s=ie(e),u=(this.children.get(s)||new we(null)).setTree(Ee(e),n);let d;return u.isEmpty()?d=this.children.remove(s):d=this.children.insert(s,u),new we(this.value,d)}}fold(e){return this.fold_(fe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,u)=>{s[l]=u.fold_(be(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,fe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(le(e))return null;{const u=ie(e),d=this.children.get(u);return d?d.findOnPath_(Ee(e),be(n,u),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,fe(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const l=ie(e),u=this.children.get(l);return u?u.foreachOnPath_(Ee(e),be(n,l),s):new we(null)}}foreach(e){this.foreach_(fe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_(be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new we(null))}}function bs(r,e,n){if(le(e))return new Yt(new we(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let u=s.value;const d=St(l,e);return u=u.updateChild(d,n),new Yt(r.writeTree_.set(l,u))}else{const l=new we(n),u=r.writeTree_.setTree(e,l);return new Yt(u)}}}function Wc(r,e,n){let s=r;return rt(n,(l,u)=>{s=bs(s,be(e,l),u)}),s}function ig(r,e){if(le(e))return Yt.empty();{const n=r.writeTree_.setTree(e,new we(null));return new Yt(n)}}function Hc(r,e){return Br(r,e)!=null}function Br(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(St(n.path,e)):null}function sg(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(s,l)=>{e.push(new se(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new se(s,l.value))}),e}function ir(r,e){if(le(e))return r;{const n=Br(r,e);return n!=null?new Yt(new we(n)):new Yt(r.writeTree_.subtree(e))}}function Vc(r){return r.writeTree_.isEmpty()}function Ti(r,e){return ny(fe(),r.writeTree_,e)}function ny(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,u)=>{l===".priority"?(M(u.value!==null,"Priority writes must always be leaf nodes"),s=u.value):n=ny(be(r,l),u,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild(be(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(r,e){return oy(e,r)}function PI(r,e,n,s,l){M(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=bs(r.visibleWrites,e,n)),r.lastWriteId=s}function AI(r,e,n,s){M(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:n,writeId:s,visible:!0}),r.visibleWrites=Wc(r.visibleWrites,e,n),r.lastWriteId=s}function bI(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function OI(r,e){const n=r.allWrites.findIndex(f=>f.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,u=!1,d=r.allWrites.length-1;for(;l&&d>=0;){const f=r.allWrites[d];f.visible&&(d>=n&&DI(f,s.path)?l=!1:Ut(s.path,f.path)&&(u=!0)),d--}if(l){if(u)return LI(r),!0;if(s.snap)r.visibleWrites=ig(r.visibleWrites,s.path);else{const f=s.children;rt(f,p=>{r.visibleWrites=ig(r.visibleWrites,be(s.path,p))})}return!0}else return!1}function DI(r,e){if(r.snap)return Ut(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Ut(be(r.path,n),e))return!0;return!1}function LI(r){r.visibleWrites=ry(r.allWrites,MI,fe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function MI(r){return r.visible}function ry(r,e,n){let s=Yt.empty();for(let l=0;l<r.length;++l){const u=r[l];if(e(u)){const d=u.path;let f;if(u.snap)Ut(n,d)?(f=St(n,d),s=bs(s,f,u.snap)):Ut(d,n)&&(f=St(d,n),s=bs(s,fe(),u.snap.getChild(f)));else if(u.children){if(Ut(n,d))f=St(n,d),s=Wc(s,f,u.children);else if(Ut(d,n))if(f=St(d,n),le(f))s=Wc(s,fe(),u.children);else{const p=Si(u.children,ie(f));if(p){const g=p.getChild(Ee(f));s=bs(s,fe(),g)}}}else throw Ni("WriteRecord should have .snap or .children")}}return s}function iy(r,e,n,s,l){if(!s&&!l){const u=Br(r.visibleWrites,e);if(u!=null)return u;{const d=ir(r.visibleWrites,e);if(Vc(d))return n;if(n==null&&!Hc(d,fe()))return null;{const f=n||Z.EMPTY_NODE;return Ti(d,f)}}}else{const u=ir(r.visibleWrites,e);if(!l&&Vc(u))return n;if(!l&&n==null&&!Hc(u,fe()))return null;{const d=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Ut(g.path,e)||Ut(e,g.path))},f=ry(r.allWrites,d,e),p=n||Z.EMPTY_NODE;return Ti(f,p)}}}function FI(r,e,n){let s=Z.EMPTY_NODE;const l=Br(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Oe,(u,d)=>{s=s.updateImmediateChild(u,d)}),s;if(n){const u=ir(r.visibleWrites,e);return n.forEachChild(Oe,(d,f)=>{const p=Ti(ir(u,new _e(d)),f);s=s.updateImmediateChild(d,p)}),sg(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}else{const u=ir(r.visibleWrites,e);return sg(u).forEach(d=>{s=s.updateImmediateChild(d.name,d.node)}),s}}function UI(r,e,n,s,l){M(s||l,"Either existingEventSnap or existingServerSnap must exist");const u=be(e,n);if(Hc(r.visibleWrites,u))return null;{const d=ir(r.visibleWrites,u);return Vc(d)?l.getChild(n):Ti(d,l.getChild(n))}}function jI(r,e,n,s){const l=be(e,n),u=Br(r.visibleWrites,l);if(u!=null)return u;if(s.isCompleteForChild(n)){const d=ir(r.visibleWrites,l);return Ti(d,s.getNode().getImmediateChild(n))}else return null}function zI(r,e){return Br(r.visibleWrites,e)}function BI(r,e,n,s,l,u,d){let f;const p=ir(r.visibleWrites,e),g=Br(p,fe());if(g!=null)f=g;else if(n!=null)f=Ti(p,n);else return[];if(f=f.withIndex(d),!f.isEmpty()&&!f.isLeafNode()){const E=[],y=d.getCompare(),w=u?f.getReverseIteratorFrom(s,d):f.getIteratorFrom(s,d);let N=w.getNext();for(;N&&E.length<l;)y(N,s)!==0&&E.push(N),N=w.getNext();return E}else return[]}function WI(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Wl(r,e,n,s){return iy(r.writeTree,r.treePath,e,n,s)}function Ad(r,e){return FI(r.writeTree,r.treePath,e)}function og(r,e,n,s){return UI(r.writeTree,r.treePath,e,n,s)}function Hl(r,e){return zI(r.writeTree,be(r.treePath,e))}function HI(r,e,n,s,l,u){return BI(r.writeTree,r.treePath,e,n,s,l,u)}function bd(r,e,n){return jI(r.writeTree,r.treePath,e,n)}function sy(r,e){return oy(be(r.treePath,e),r.writeTree)}function oy(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const u=l.type;if(n==="child_added"&&u==="child_removed")this.changeMap.set(s,Ws(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&u==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&u==="child_changed")this.changeMap.set(s,Bs(s,l.oldSnap));else if(n==="child_changed"&&u==="child_added")this.changeMap.set(s,Ii(s,e.snapshotNode));else if(n==="child_changed"&&u==="child_changed")this.changeMap.set(s,Ws(s,e.snapshotNode,l.oldSnap));else throw Ni("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ly=new $I;class Od{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Lr(this.viewCache_),u=HI(this.writes_,l,n,1,s,e);return u.length===0?null:u[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(r){return{filter:r}}function GI(r,e){M(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function KI(r,e,n,s,l){const u=new VI;let d,f;if(n.type===Kt.OVERWRITE){const g=n;g.source.fromUser?d=$c(r,e,g.path,g.snap,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!le(g.path),d=Vl(r,e,g.path,g.snap,s,l,f,u))}else if(n.type===Kt.MERGE){const g=n;g.source.fromUser?d=QI(r,e,g.path,g.children,s,l,u):(M(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),d=qc(r,e,g.path,g.children,s,l,f,u))}else if(n.type===Kt.ACK_USER_WRITE){const g=n;g.revert?d=ZI(r,e,g.path,s,l,u):d=XI(r,e,g.path,g.affectedTree,s,l,u)}else if(n.type===Kt.LISTEN_COMPLETE)d=JI(r,e,n.path,s,u);else throw Ni("Unknown operation type: "+n.type);const p=u.getChanges();return YI(e,d,p),{viewCache:d,changes:p}}function YI(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),u=Bc(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(u)||!s.getNode().getPriority().equals(u.getPriority()))&&n.push(Z_(Bc(e)))}}function ay(r,e,n,s,l,u){const d=e.eventCache;if(Hl(s,n)!=null)return e;{let f,p;if(le(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Lr(e),E=g instanceof Z?g:Z.EMPTY_NODE,y=Ad(s,E);f=r.filter.updateFullNode(e.eventCache.getNode(),y,u)}else{const g=Wl(s,Lr(e));f=r.filter.updateFullNode(e.eventCache.getNode(),g,u)}else{const g=ie(n);if(g===".priority"){M(or(n)===1,"Can't have a priority with additional path components");const E=d.getNode();p=e.serverCache.getNode();const y=og(s,n,E,p);y!=null?f=r.filter.updatePriority(E,y):f=d.getNode()}else{const E=Ee(n);let y;if(d.isCompleteForChild(g)){p=e.serverCache.getNode();const w=og(s,n,d.getNode(),p);w!=null?y=d.getNode().getImmediateChild(g).updateChild(E,w):y=d.getNode().getImmediateChild(g)}else y=bd(s,g,e.serverCache);y!=null?f=r.filter.updateChild(d.getNode(),g,y,E,l,u):f=d.getNode()}}return As(e,f,d.isFullyInitialized()||le(n),r.filter.filtersNodes())}}function Vl(r,e,n,s,l,u,d,f){const p=e.serverCache;let g;const E=d?r.filter:r.filter.getIndexedFilter();if(le(n))g=E.updateFullNode(p.getNode(),s,null);else if(E.filtersNodes()&&!p.isFiltered()){const N=p.getNode().updateChild(n,s);g=E.updateFullNode(p.getNode(),N,null)}else{const N=ie(n);if(!p.isCompleteForPath(n)&&or(n)>1)return e;const R=Ee(n),U=p.getNode().getImmediateChild(N).updateChild(R,s);N===".priority"?g=E.updatePriority(p.getNode(),U):g=E.updateChild(p.getNode(),N,U,R,ly,null)}const y=ty(e,g,p.isFullyInitialized()||le(n),E.filtersNodes()),w=new Od(l,y,u);return ay(r,y,n,l,w,f)}function $c(r,e,n,s,l,u,d){const f=e.eventCache;let p,g;const E=new Od(l,e,u);if(le(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,d),p=As(e,g,!0,r.filter.filtersNodes());else{const y=ie(n);if(y===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),p=As(e,g,f.isFullyInitialized(),f.isFiltered());else{const w=Ee(n),N=f.getNode().getImmediateChild(y);let R;if(le(w))R=s;else{const b=E.getCompleteChild(y);b!=null?Ed(w)===".priority"&&b.getChild(q_(w)).isEmpty()?R=b:R=b.updateChild(w,s):R=Z.EMPTY_NODE}if(N.equals(R))p=e;else{const b=r.filter.updateChild(f.getNode(),y,R,w,E,d);p=As(e,b,f.isFullyInitialized(),r.filter.filtersNodes())}}}return p}function lg(r,e){return r.eventCache.isCompleteForChild(e)}function QI(r,e,n,s,l,u,d){let f=e;return s.foreach((p,g)=>{const E=be(n,p);lg(e,ie(E))&&(f=$c(r,f,E,g,l,u,d))}),s.foreach((p,g)=>{const E=be(n,p);lg(e,ie(E))||(f=$c(r,f,E,g,l,u,d))}),f}function ag(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function qc(r,e,n,s,l,u,d,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;le(n)?g=s:g=new we(null).setTree(n,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((y,w)=>{if(E.hasChild(y)){const N=e.serverCache.getNode().getImmediateChild(y),R=ag(r,N,w);p=Vl(r,p,new _e(y),R,l,u,d,f)}}),g.children.inorderTraversal((y,w)=>{const N=!e.serverCache.isCompleteForChild(y)&&w.value===null;if(!E.hasChild(y)&&!N){const R=e.serverCache.getNode().getImmediateChild(y),b=ag(r,R,w);p=Vl(r,p,new _e(y),b,l,u,d,f)}}),p}function XI(r,e,n,s,l,u,d){if(Hl(l,n)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(le(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Vl(r,e,n,p.getNode().getChild(n),l,u,f,d);if(le(n)){let g=new we(null);return p.getNode().forEachChild(wi,(E,y)=>{g=g.set(new _e(E),y)}),qc(r,e,n,g,l,u,f,d)}else return e}else{let g=new we(null);return s.foreach((E,y)=>{const w=be(n,E);p.isCompleteForPath(w)&&(g=g.set(E,p.getNode().getChild(w)))}),qc(r,e,n,g,l,u,f,d)}}function JI(r,e,n,s,l){const u=e.serverCache,d=ty(e,u.getNode(),u.isFullyInitialized()||le(n),u.isFiltered());return ay(r,d,n,s,ly,l)}function ZI(r,e,n,s,l,u){let d;if(Hl(s,n)!=null)return e;{const f=new Od(s,e,l),p=e.eventCache.getNode();let g;if(le(n)||ie(n)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=Wl(s,Lr(e));else{const y=e.serverCache.getNode();M(y instanceof Z,"serverChildren would be complete if leaf node"),E=Ad(s,y)}E=E,g=r.filter.updateFullNode(p,E,u)}else{const E=ie(n);let y=bd(s,E,e.serverCache);y==null&&e.serverCache.isCompleteForChild(E)&&(y=p.getImmediateChild(E)),y!=null?g=r.filter.updateChild(p,E,y,Ee(n),f,u):e.eventCache.getNode().hasChild(E)?g=r.filter.updateChild(p,E,Z.EMPTY_NODE,Ee(n),f,u):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(d=Wl(s,Lr(e)),d.isLeafNode()&&(g=r.filter.updateFullNode(g,d,u)))}return d=e.serverCache.isFullyInitialized()||Hl(s,fe())!=null,As(e,g,d,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new kd(s.getIndex()),u=yI(s);this.processor_=qI(u);const d=n.serverCache,f=n.eventCache,p=l.updateFullNode(Z.EMPTY_NODE,d.getNode(),null),g=u.updateFullNode(Z.EMPTY_NODE,f.getNode(),null),E=new Dr(p,d.isFullyInitialized(),l.filtersNodes()),y=new Dr(g,f.isFullyInitialized(),u.filtersNodes());this.viewCache_=ra(y,E),this.eventGenerator_=new kI(this.query_)}get query(){return this.query_}}function tk(r){return r.viewCache_.serverCache.getNode()}function nk(r,e){const n=Lr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function ug(r){return r.eventRegistrations_.length===0}function rk(r,e){r.eventRegistrations_.push(e)}function cg(r,e,n){const s=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(u=>{const d=u.createCancelEvent(n,l);d&&s.push(d)})}if(e){let l=[];for(let u=0;u<r.eventRegistrations_.length;++u){const d=r.eventRegistrations_[u];if(!d.matches(e))l.push(d);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(u+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function dg(r,e,n,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(M(Lr(r.viewCache_),"We should always have a full cache before handling merges"),M(Bc(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,u=KI(r.processor_,l,e,n,s);return GI(r.processor_,u.viewCache),M(u.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=u.viewCache,uy(r,u.changes,u.viewCache.eventCache.getNode(),null)}function ik(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(u,d)=>{s.push(Ii(u,d))}),n.isFullyInitialized()&&s.push(Z_(n.getNode())),uy(r,s,n.getNode(),e)}function uy(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return TI(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $l;class sk{constructor(){this.views=new Map}}function ok(r){M(!$l,"__referenceConstructor has already been defined"),$l=r}function lk(){return M($l,"Reference.ts has not been loaded"),$l}function ak(r){return r.views.size===0}function Dd(r,e,n,s){const l=e.source.queryId;if(l!==null){const u=r.views.get(l);return M(u!=null,"SyncTree gave us an op for an invalid query."),dg(u,e,n,s)}else{let u=[];for(const d of r.views.values())u=u.concat(dg(d,e,n,s));return u}}function uk(r,e,n,s,l){const u=e._queryIdentifier,d=r.views.get(u);if(!d){let f=Wl(n,l?s:null),p=!1;f?p=!0:s instanceof Z?(f=Ad(n,s),p=!1):(f=Z.EMPTY_NODE,p=!1);const g=ra(new Dr(f,p,!1),new Dr(s,l,!1));return new ek(e,g)}return d}function ck(r,e,n,s,l,u){const d=uk(r,e,s,l,u);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,d),rk(d,n),ik(d,n)}function dk(r,e,n,s){const l=e._queryIdentifier,u=[];let d=[];const f=lr(r);if(l==="default")for(const[p,g]of r.views.entries())d=d.concat(cg(g,n,s)),ug(g)&&(r.views.delete(p),g.query._queryParams.loadsAllData()||u.push(g.query));else{const p=r.views.get(l);p&&(d=d.concat(cg(p,n,s)),ug(p)&&(r.views.delete(l),p.query._queryParams.loadsAllData()||u.push(p.query)))}return f&&!lr(r)&&u.push(new(lk())(e._repo,e._path)),{removed:u,events:d}}function cy(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ei(r,e){let n=null;for(const s of r.views.values())n=n||nk(s,e);return n}function dy(r,e){if(e._queryParams.loadsAllData())return ia(r);{const s=e._queryIdentifier;return r.views.get(s)}}function hy(r,e){return dy(r,e)!=null}function lr(r){return ia(r)!=null}function ia(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;function hk(r){M(!ql,"__referenceConstructor has already been defined"),ql=r}function fk(){return M(ql,"Reference.ts has not been loaded"),ql}let pk=1;class hg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=WI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fy(r,e,n,s,l){return PI(r.pendingWriteTree_,e,n,s,l),l?bi(r,new Or(xd(),e,n)):[]}function mk(r,e,n,s){AI(r.pendingWriteTree_,e,n,s);const l=we.fromObject(n);return bi(r,new ki(xd(),e,l))}function tr(r,e,n=!1){const s=bI(r.pendingWriteTree_,e);if(OI(r.pendingWriteTree_,e)){let u=new we(null);return s.snap!=null?u=u.set(fe(),!0):rt(s.children,d=>{u=u.set(new _e(d),!0)}),bi(r,new Bl(s.path,u,n))}else return[]}function sa(r,e,n){return bi(r,new Or(Nd(),e,n))}function gk(r,e,n){const s=we.fromObject(n);return bi(r,new ki(Nd(),e,s))}function _k(r,e){return bi(r,new Vs(Nd(),e))}function yk(r,e,n){const s=Md(r,n);if(s){const l=Fd(s),u=l.path,d=l.queryId,f=St(u,e),p=new Vs(Rd(d),f);return Ud(r,u,p)}else return[]}function Gc(r,e,n,s,l=!1){const u=e._path,d=r.syncPointTree_.get(u);let f=[];if(d&&(e._queryIdentifier==="default"||hy(d,e))){const p=dk(d,e,n,s);ak(d)&&(r.syncPointTree_=r.syncPointTree_.remove(u));const g=p.removed;if(f=p.events,!l){const E=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,y=r.syncPointTree_.findOnPath(u,(w,N)=>lr(N));if(E&&!y){const w=r.syncPointTree_.subtree(u);if(!w.isEmpty()){const N=Ek(w);for(let R=0;R<N.length;++R){const b=N[R],U=b.query,F=gy(r,b);r.listenProvider_.startListening(Os(U),Gl(r,U),F.hashFn,F.onComplete)}}}!y&&g.length>0&&!s&&(E?r.listenProvider_.stopListening(Os(e),null):g.forEach(w=>{const N=r.queryToTagMap.get(oa(w));r.listenProvider_.stopListening(Os(w),N)}))}Sk(r,g)}return f}function vk(r,e,n,s){const l=Md(r,s);if(l!=null){const u=Fd(l),d=u.path,f=u.queryId,p=St(d,e),g=new Or(Rd(f),p,n);return Ud(r,d,g)}else return[]}function wk(r,e,n,s){const l=Md(r,s);if(l){const u=Fd(l),d=u.path,f=u.queryId,p=St(d,e),g=we.fromObject(n),E=new ki(Rd(f),p,g);return Ud(r,d,E)}else return[]}function fg(r,e,n,s=!1){const l=e._path;let u=null,d=!1;r.syncPointTree_.foreachOnPath(l,(w,N)=>{const R=St(w,l);u=u||Ei(N,R),d=d||lr(N)});let f=r.syncPointTree_.get(l);f?(d=d||lr(f),u=u||Ei(f,fe())):(f=new sk,r.syncPointTree_=r.syncPointTree_.set(l,f));let p;u!=null?p=!0:(p=!1,u=Z.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((N,R)=>{const b=Ei(R,fe());b&&(u=u.updateImmediateChild(N,b))}));const g=hy(f,e);if(!g&&!e._queryParams.loadsAllData()){const w=oa(e);M(!r.queryToTagMap.has(w),"View does not exist, but we have a tag");const N=Ck();r.queryToTagMap.set(w,N),r.tagToQueryMap.set(N,w)}const E=Pd(r.pendingWriteTree_,l);let y=ck(f,e,n,E,u,p);if(!g&&!d&&!s){const w=dy(f,e);y=y.concat(Ik(r,e,w))}return y}function Ld(r,e,n){const l=r.pendingWriteTree_,u=r.syncPointTree_.findOnPath(e,(d,f)=>{const p=St(d,e),g=Ei(f,p);if(g)return g});return iy(l,e,u,n,!0)}function bi(r,e){return py(e,r.syncPointTree_,null,Pd(r.pendingWriteTree_,fe()))}function py(r,e,n,s){if(le(r.path))return my(r,e,n,s);{const l=e.get(fe());n==null&&l!=null&&(n=Ei(l,fe()));let u=[];const d=ie(r.path),f=r.operationForChild(d),p=e.children.get(d);if(p&&f){const g=n?n.getImmediateChild(d):null,E=sy(s,d);u=u.concat(py(f,p,g,E))}return l&&(u=u.concat(Dd(l,r,s,n))),u}}function my(r,e,n,s){const l=e.get(fe());n==null&&l!=null&&(n=Ei(l,fe()));let u=[];return e.children.inorderTraversal((d,f)=>{const p=n?n.getImmediateChild(d):null,g=sy(s,d),E=r.operationForChild(d);E&&(u=u.concat(my(E,f,p,g)))}),l&&(u=u.concat(Dd(l,r,s,n))),u}function gy(r,e){const n=e.query,s=Gl(r,n);return{hashFn:()=>(tk(e)||Z.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?yk(r,n._path,s):_k(r,n._path);{const u=g1(l,n);return Gc(r,n,null,u)}}}}function Gl(r,e){const n=oa(e);return r.queryToTagMap.get(n)}function oa(r){return r._path.toString()+"$"+r._queryIdentifier}function Md(r,e){return r.tagToQueryMap.get(e)}function Fd(r){const e=r.indexOf("$");return M(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new _e(r.substr(0,e))}}function Ud(r,e,n){const s=r.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const l=Pd(r.pendingWriteTree_,e);return Dd(s,n,l,null)}function Ek(r){return r.fold((e,n,s)=>{if(n&&lr(n))return[ia(n)];{let l=[];return n&&(l=cy(n)),rt(s,(u,d)=>{l=l.concat(d)}),l}})}function Os(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(fk())(r._repo,r._path):r}function Sk(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=oa(s),u=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(u)}}}function Ck(){return pk++}function Ik(r,e,n){const s=e._path,l=Gl(r,e),u=gy(r,n),d=r.listenProvider_.startListening(Os(e),l,u.hashFn,u.onComplete),f=r.syncPointTree_.subtree(s);if(l)M(!lr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,E,y)=>{if(!le(g)&&E&&lr(E))return[ia(E).query];{let w=[];return E&&(w=w.concat(cy(E).map(N=>N.query))),rt(y,(N,R)=>{w=w.concat(R)}),w}});for(let g=0;g<p.length;++g){const E=p[g];r.listenProvider_.stopListening(Os(E),Gl(r,E))}}return d}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jd(n)}node(){return this.node_}}class zd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new zd(this.syncTree_,n)}node(){return Ld(this.syncTree_,this.path_)}}const kk=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},pg=function(r,e,n){if(!r||typeof r!="object")return r;if(M(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return Tk(r[".sv"],e,n);if(typeof r[".sv"]=="object")return xk(r[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},Tk=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+r)}},xk=function(r,e,n){r.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const l=e.node();if(M(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const d=l.getValue();return typeof d!="number"?s:d+s},_y=function(r,e,n,s){return Bd(e,new zd(n,r),s)},yy=function(r,e,n){return Bd(r,new jd(e),n)};function Bd(r,e,n){const s=r.getPriority().val(),l=pg(s,e.getImmediateChild(".priority"),n);let u;if(r.isLeafNode()){const d=r,f=pg(d.getValue(),e,n);return f!==d.getValue()||l!==d.getPriority().val()?new Ye(f,Xe(l)):r}else{const d=r;return u=d,l!==d.getPriority().val()&&(u=u.updatePriority(new Ye(l))),d.forEachChild(Oe,(f,p)=>{const g=Bd(p,e.getImmediateChild(f),n);g!==p&&(u=u.updateImmediateChild(f,g))}),u}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Hd(r,e){let n=e instanceof _e?e:new _e(e),s=r,l=ie(n);for(;l!==null;){const u=Si(s.node.children,l)||{children:{},childCount:0};s=new Wd(l,s,u),n=Ee(n),l=ie(n)}return s}function Oi(r){return r.node.value}function vy(r,e){r.node.value=e,Kc(r)}function wy(r){return r.node.childCount>0}function Nk(r){return Oi(r)===void 0&&!wy(r)}function la(r,e){rt(r.node.children,(n,s)=>{e(new Wd(n,r,s))})}function Ey(r,e,n,s){n&&e(r),la(r,l=>{Ey(l,e,!0)})}function Rk(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function to(r){return new _e(r.parent===null?r.name:to(r.parent)+"/"+r.name)}function Kc(r){r.parent!==null&&Pk(r.parent,r.name,r)}function Pk(r,e,n){const s=Nk(n),l=cn(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Kc(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Kc(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=/[\[\].#$\/\u0000-\u001F\u007F]/,bk=/[\[\].#$\u0000-\u001F\u007F]/,Ic=10*1024*1024,Vd=function(r){return typeof r=="string"&&r.length!==0&&!Ak.test(r)},Sy=function(r){return typeof r=="string"&&r.length!==0&&!bk.test(r)},Ok=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Sy(r)},Dk=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!gd(r)||r&&typeof r=="object"&&cn(r,".sv")},Cy=function(r,e,n,s){s&&e===void 0||aa(Ql(r,"value"),e,n)},aa=function(r,e,n){const s=n instanceof _e?new Q1(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+kr(s));if(typeof e=="function")throw new Error(r+"contains a function "+kr(s)+" with contents = "+e.toString());if(gd(e))throw new Error(r+"contains "+e.toString()+" "+kr(s));if(typeof e=="string"&&e.length>Ic/3&&Xl(e)>Ic)throw new Error(r+"contains a string greater than "+Ic+" utf8 bytes "+kr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,u=!1;if(rt(e,(d,f)=>{if(d===".value")l=!0;else if(d!==".priority"&&d!==".sv"&&(u=!0,!Vd(d)))throw new Error(r+" contains an invalid key ("+d+") "+kr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);X1(s,d),aa(r,f,s),J1(s)}),l&&u)throw new Error(r+' contains ".value" child '+kr(s)+" in addition to actual children.")}},Lk=function(r,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const u=zs(s);for(let d=0;d<u.length;d++)if(!(u[d]===".priority"&&d===u.length-1)){if(!Vd(u[d]))throw new Error(r+"contains an invalid key ("+u[d]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Y1);let l=null;for(n=0;n<e.length;n++){if(s=e[n],l!==null&&Ut(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},Mk=function(r,e,n,s){const l=Ql(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const u=[];rt(e,(d,f)=>{const p=new _e(d);if(aa(l,f,be(n,p)),Ed(p)===".priority"&&!Dk(f))throw new Error(l+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");u.push(p)}),Lk(l,u)},Iy=function(r,e,n,s){if(!Sy(n))throw new Error(Ql(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Fk=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iy(r,e,n)},ky=function(r,e){if(ie(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},Uk=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ok(n))throw new Error(Ql(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ua(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],u=l.getPath();n!==null&&!Sd(u,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:u}),n.events.push(l)}n&&r.eventLists_.push(n)}function Ty(r,e,n){ua(r,n),xy(r,s=>Sd(s,e))}function Xt(r,e,n){ua(r,n),xy(r,s=>Ut(s,e)||Ut(e,s))}function xy(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const u=l.path;e(u)?(zk(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function zk(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();Rs&&nt("event: "+n.toString()),Ai(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk="repo_interrupt",Wk=25;class Hk{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zl(),this.transactionQueueTree_=new Wd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vk(r,e,n){if(r.stats_=vd(r.repoInfo_),r.forceRestClient_||w1())r.server_=new jl(r.repoInfo_,(s,l,u,d)=>{mg(r,s,l,u,d)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>gg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new Cn(r.repoInfo_,e,(s,l,u,d)=>{mg(r,s,l,u,d)},s=>{gg(r,s)},s=>{$k(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=k1(r.repoInfo_,()=>new II(r.stats_,r.server_)),r.infoData_=new vI,r.infoSyncTree_=new hg({startListening:(s,l,u,d)=>{let f=[];const p=r.infoData_.getNode(s._path);return p.isEmpty()||(f=sa(r.infoSyncTree_,s._path,p),setTimeout(()=>{d("ok")},0)),f},stopListening:()=>{}}),$d(r,"connected",!1),r.serverSyncTree_=new hg({startListening:(s,l,u,d)=>(r.server_.listen(s,u,l,(f,p)=>{const g=d(f,p);Xt(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function Ny(r){const n=r.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ca(r){return kk({timestamp:Ny(r)})}function mg(r,e,n,s,l){r.dataUpdateCount++;const u=new _e(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let d=[];if(l)if(s){const p=xl(n,g=>Xe(g));d=wk(r.serverSyncTree_,u,p,l)}else{const p=Xe(n);d=vk(r.serverSyncTree_,u,p,l)}else if(s){const p=xl(n,g=>Xe(g));d=gk(r.serverSyncTree_,u,p)}else{const p=Xe(n);d=sa(r.serverSyncTree_,u,p)}let f=u;d.length>0&&(f=xi(r,u)),Xt(r.eventQueue_,f,d)}function gg(r,e){$d(r,"connected",e),e===!1&&Kk(r)}function $k(r,e){rt(e,(n,s)=>{$d(r,n,s)})}function $d(r,e,n){const s=new _e("/.info/"+e),l=Xe(n);r.infoData_.updateSnapshot(s,l);const u=sa(r.infoSyncTree_,s,l);Xt(r.eventQueue_,s,u)}function qd(r){return r.nextWriteId_++}function qk(r,e,n,s,l){da(r,"set",{path:e.toString(),value:n,priority:s});const u=ca(r),d=Xe(n,s),f=Ld(r.serverSyncTree_,e),p=yy(d,f,u),g=qd(r),E=fy(r.serverSyncTree_,e,p,g,!0);ua(r.eventQueue_,E),r.server_.put(e.toString(),d.val(!0),(w,N)=>{const R=w==="ok";R||ft("set at "+e+" failed: "+w);const b=tr(r.serverSyncTree_,g,!R);Xt(r.eventQueue_,e,b),Yc(r,l,w,N)});const y=Kd(r,e);xi(r,y),Xt(r.eventQueue_,y,[])}function Gk(r,e,n,s){da(r,"update",{path:e.toString(),value:n});let l=!0;const u=ca(r),d={};if(rt(n,(f,p)=>{l=!1,d[f]=_y(be(e,f),Xe(p),r.serverSyncTree_,u)}),l)nt("update() called with empty data.  Don't do anything."),Yc(r,s,"ok",void 0);else{const f=qd(r),p=mk(r.serverSyncTree_,e,d,f);ua(r.eventQueue_,p),r.server_.merge(e.toString(),n,(g,E)=>{const y=g==="ok";y||ft("update at "+e+" failed: "+g);const w=tr(r.serverSyncTree_,f,!y),N=w.length>0?xi(r,e):e;Xt(r.eventQueue_,N,w),Yc(r,s,g,E)}),rt(n,g=>{const E=Kd(r,be(e,g));xi(r,E)}),Xt(r.eventQueue_,e,[])}}function Kk(r){da(r,"onDisconnectEvents");const e=ca(r),n=zl();zc(r.onDisconnect_,fe(),(l,u)=>{const d=_y(l,u,r.serverSyncTree_,e);ey(n,l,d)});let s=[];zc(n,fe(),(l,u)=>{s=s.concat(sa(r.serverSyncTree_,l,u));const d=Kd(r,l);xi(r,d)}),r.onDisconnect_=zl(),Xt(r.eventQueue_,fe(),s)}function Yk(r,e,n){let s;ie(e._path)===".info"?s=fg(r.infoSyncTree_,e,n):s=fg(r.serverSyncTree_,e,n),Ty(r.eventQueue_,e._path,s)}function Qk(r,e,n){let s;ie(e._path)===".info"?s=Gc(r.infoSyncTree_,e,n):s=Gc(r.serverSyncTree_,e,n),Ty(r.eventQueue_,e._path,s)}function Xk(r){r.persistentConnection_&&r.persistentConnection_.interrupt(Bk)}function da(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),nt(n,...e)}function Yc(r,e,n,s){e&&Ai(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let u=l;s&&(u+=": "+s);const d=new Error(u);d.code=l,e(d)}})}function Ry(r,e,n){return Ld(r.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Gd(r,e=r.transactionQueueTree_){if(e||ha(r,e),Oi(e)){const n=Ay(r,e);M(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&Jk(r,to(e),n)}else wy(e)&&la(e,n=>{Gd(r,n)})}function Jk(r,e,n){const s=n.map(g=>g.currentWriteId),l=Ry(r,e,s);let u=l;const d=l.hash();for(let g=0;g<n.length;g++){const E=n[g];M(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const y=St(e,E.path);u=u.updateChild(y,E.currentOutputSnapshotRaw)}const f=u.val(!0),p=e;r.server_.put(p.toString(),f,g=>{da(r,"transaction put response",{path:p.toString(),status:g});let E=[];if(g==="ok"){const y=[];for(let w=0;w<n.length;w++)n[w].status=2,E=E.concat(tr(r.serverSyncTree_,n[w].currentWriteId)),n[w].onComplete&&y.push(()=>n[w].onComplete(null,!0,n[w].currentOutputSnapshotResolved)),n[w].unwatcher();ha(r,Hd(r.transactionQueueTree_,e)),Gd(r,r.transactionQueueTree_),Xt(r.eventQueue_,e,E);for(let w=0;w<y.length;w++)Ai(y[w])}else{if(g==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{ft("transaction at "+p.toString()+" failed: "+g);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=g}xi(r,e)}},d)}function xi(r,e){const n=Py(r,e),s=to(n),l=Ay(r,n);return Zk(r,l,s),s}function Zk(r,e,n){if(e.length===0)return;const s=[];let l=[];const d=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=St(n,p.path);let E=!1,y;if(M(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)E=!0,y=p.abortReason,l=l.concat(tr(r.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Wk)E=!0,y="maxretry",l=l.concat(tr(r.serverSyncTree_,p.currentWriteId,!0));else{const w=Ry(r,p.path,d);p.currentInputSnapshot=w;const N=e[f].update(w.val());if(N!==void 0){aa("transaction failed: Data returned ",N,p.path);let R=Xe(N);typeof N=="object"&&N!=null&&cn(N,".priority")||(R=R.updatePriority(w.getPriority()));const U=p.currentWriteId,F=ca(r),V=yy(R,w,F);p.currentOutputSnapshotRaw=R,p.currentOutputSnapshotResolved=V,p.currentWriteId=qd(r),d.splice(d.indexOf(U),1),l=l.concat(fy(r.serverSyncTree_,p.path,V,p.currentWriteId,p.applyLocally)),l=l.concat(tr(r.serverSyncTree_,U,!0))}else E=!0,y="nodata",l=l.concat(tr(r.serverSyncTree_,p.currentWriteId,!0))}Xt(r.eventQueue_,n,l),l=[],E&&(e[f].status=2,(function(w){setTimeout(w,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(y==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(y),!1,null))))}ha(r,r.transactionQueueTree_);for(let f=0;f<s.length;f++)Ai(s[f]);Gd(r,r.transactionQueueTree_)}function Py(r,e){let n,s=r.transactionQueueTree_;for(n=ie(e);n!==null&&Oi(s)===void 0;)s=Hd(s,n),e=Ee(e),n=ie(e);return s}function Ay(r,e){const n=[];return by(r,e,n),n.sort((s,l)=>s.order-l.order),n}function by(r,e,n){const s=Oi(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);la(e,l=>{by(r,l,n)})}function ha(r,e){const n=Oi(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,vy(e,n.length>0?n:void 0)}la(e,s=>{ha(r,s)})}function Kd(r,e){const n=to(Py(r,e)),s=Hd(r.transactionQueueTree_,e);return Rk(s,l=>{kc(r,l)}),kc(r,s),Ey(s,l=>{kc(r,l)}),n}function kc(r,e){const n=Oi(e);if(n){const s=[];let l=[],u=-1;for(let d=0;d<n.length;d++)n[d].status===3||(n[d].status===1?(M(u===d-1,"All SENT items should be at beginning of queue."),u=d,n[d].status=3,n[d].abortReason="set"):(M(n[d].status===0,"Unexpected transaction status in abort"),n[d].unwatcher(),l=l.concat(tr(r.serverSyncTree_,n[d].currentWriteId,!0)),n[d].onComplete&&s.push(n[d].onComplete.bind(null,new Error("set"),!1,null))));u===-1?vy(e,void 0):n.length=u+1,Xt(r.eventQueue_,to(e),l);for(let d=0;d<s.length;d++)Ai(s[d])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function tT(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ft(`Invalid query segment '${n}' in query '${r}'`)}return e}const _g=function(r,e){const n=nT(r),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||d1();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new F_(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new _e(n.pathString)}},nT=function(r){let e="",n="",s="",l="",u="",d=!0,f="https",p=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(f=r.substring(0,g-1),r=r.substring(g+2));let E=r.indexOf("/");E===-1&&(E=r.length);let y=r.indexOf("?");y===-1&&(y=r.length),e=r.substring(0,Math.min(E,y)),E<y&&(l=eT(r.substring(E,y)));const w=tT(r.substring(Math.min(r.length,y)));g=e.indexOf(":"),g>=0?(d=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const N=e.slice(0,g);if(N.toLowerCase()==="localhost")n="localhost";else if(N.split(".").length<=2)n=N;else{const R=e.indexOf(".");s=e.substring(0,R).toLowerCase(),n=e.substring(R+1),u=s}"ns"in w&&(u=w.ns)}return{host:e,port:p,domain:n,subdomain:s,secure:d,scheme:f,pathString:l,namespace:u}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rT=(function(){let r=0;const e=[];return function(n){const s=n===r;r=n;let l;const u=new Array(8);for(l=7;l>=0;l--)u[l]=yg.charAt(n%64),n=Math.floor(n/64);M(n===0,"Cannot push at time == 0");let d=u.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)d+=yg.charAt(e[l]);return M(d.length===20,"nextPushId: Length should be 20."),d}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class sT{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return le(this._path)?null:Ed(this._path)}get ref(){return new cr(this._repo,this._path)}get _queryIdentifier(){const e=ng(this._queryParams),n=_d(e);return n==="{}"?"default":n}get _queryObject(){return ng(this._queryParams)}isEqual(e){if(e=He(e),!(e instanceof Yd))return!1;const n=this._repo===e._repo,s=Sd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+K1(this._path)}}class cr extends Yd{constructor(e,n){super(e,n,new Td,!1)}get parent(){const e=q_(this._path);return e===null?null:new cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),s=$s(this.ref,e);return new Kl(this._node.getChild(n),s,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Kl(l,$s(this.ref,s),Oe)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mr(r,e){return r=He(r),r._checkNotDeleted("ref"),e!==void 0?$s(r._root,e):r._root}function $s(r,e){return r=He(r),ie(r._path)===null?Fk("child","path",e):Iy("child","path",e),new cr(r._repo,be(r._path,e))}function lT(r,e){r=He(r),ky("push",r._path),Cy("push",e,r._path,!0);const n=Ny(r._repo),s=rT(n),l=$s(r,s),u=$s(r,s);let d;return d=Promise.resolve(u),l.then=d.then.bind(d),l.catch=d.then.bind(d,void 0),l}function Oy(r,e){r=He(r),ky("set",r._path),Cy("set",e,r._path,!1);const n=new qs;return qk(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}function aT(r,e){Mk("update",e,r._path);const n=new qs;return Gk(r._repo,r._path,e,n.wrapCallback(()=>{})),n.promise}class Qd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new iT("value",this,new Kl(e.snapshotNode,new cr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sT(this,e,n):null}matches(e){return e instanceof Qd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uT(r,e,n,s,l){const u=new oT(n,void 0),d=new Qd(u);return Yk(r._repo,r,d),()=>Qk(r._repo,r,d)}function fa(r,e,n,s){return uT(r,"value",e)}ok(cr);hk(cr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT="FIREBASE_DATABASE_EMULATOR_HOST",Qc={};let dT=!1;function hT(r,e,n,s){const l=e.lastIndexOf(":"),u=e.substring(0,l),d=ar(u);r.repoInfo_=new F_(e,d,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function fT(r,e,n,s,l){let u=s||r.options.databaseURL;u===void 0&&(r.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",r.options.projectId),u=`${r.options.projectId}-default-rtdb.firebaseio.com`);let d=_g(u,l),f=d.repoInfo,p;typeof process<"u"&&Um&&(p=Um[cT]),p?(u=`http://${p}?ns=${f.namespace}`,d=_g(u,l),f=d.repoInfo):d.repoInfo.secure;const g=new S1(r.name,r.options,e);Uk("Invalid Firebase Database URL",d),le(d.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const E=mT(f,r,g,new E1(r,n));return new gT(E,r)}function pT(r,e){const n=Qc[e];(!n||n[r.key]!==r)&&Tn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),Xk(r),delete n[r.key]}function mT(r,e,n,s){let l=Qc[e.name];l||(l={},Qc[e.name]=l);let u=l[r.toURLString()];return u&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),u=new Hk(r,dT,n,s),l[r.toURLString()]=u,u}class gT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cr(this._repo,fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function _T(r=ld(),e){const n=Jl(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=bg("database");s&&yT(n,...s)}return n}function yT(r,e,n,s={}){r=He(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,u=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Nr(s,u.repoInfo_.emulatorOptions))return;Tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let d;if(u.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),d=new Il(Il.OWNER);else if(s.mockUserToken){const f=typeof s.mockUserToken=="string"?s.mockUserToken:Lg(s.mockUserToken,r.app.options.projectId);d=new Il(f)}ar(e)&&(nd(e),rd("Database",!0)),hT(u,l,s,d)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(r){s1(jr),Rr(new sr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),u=e.getProvider("app-check-internal");return fT(s,l,u,n)},"PUBLIC").setMultipleInstances(!0)),on(jm,zm,r),on(jm,zm,"esm2020")}Cn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};Cn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};vT();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="firebasestorage.googleapis.com",Ly="storageBucket",wT=120*1e3,ET=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends xn{constructor(e,n,s=0){super(Tc(e),`Firebase Storage: ${n} (${Tc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Tc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var De;(function(r){r.UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(De||(De={}));function Tc(r){return"storage/"+r}function Xd(){const r="An unknown error occurred, please check the error payload for server response.";return new Le(De.UNKNOWN,r)}function ST(r){return new Le(De.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")}function CT(r){return new Le(De.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IT(){const r="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(De.UNAUTHENTICATED,r)}function kT(){return new Le(De.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TT(r){return new Le(De.UNAUTHORIZED,"User does not have permission to access '"+r+"'.")}function xT(){return new Le(De.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NT(){return new Le(De.CANCELED,"User canceled the upload/download.")}function RT(r){return new Le(De.INVALID_URL,"Invalid URL '"+r+"'.")}function PT(r){return new Le(De.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.")}function AT(){return new Le(De.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ly+"' property when initializing the app?")}function bT(){return new Le(De.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OT(){return new Le(De.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function DT(r){return new Le(De.UNSUPPORTED_ENVIRONMENT,`${r} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xc(r){return new Le(De.INVALID_ARGUMENT,r)}function My(){return new Le(De.APP_DELETED,"The Firebase app was deleted.")}function LT(r){return new Le(De.INVALID_ROOT_OPERATION,"The operation '"+r+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ds(r,e){return new Le(De.INVALID_FORMAT,"String does not match format '"+r+"': "+e)}function Is(r){throw new Le(De.INTERNAL_ERROR,"Internal error: "+r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Pt.makeFromUrl(e,n)}catch{return new Pt(e,"")}if(s.path==="")return s;throw PT(e)}static makeFromUrl(e,n){let s=null;const l="([A-Za-z0-9.\\-_]+)";function u(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const d="(/(.*))?$",f=new RegExp("^gs://"+l+d,"i"),p={bucket:1,path:3};function g(G){G.path_=decodeURIComponent(G.path)}const E="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",N=new RegExp(`^https?://${y}/${E}/b/${l}/o${w}`,"i"),R={bucket:1,path:3},b=n===Dy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,U="([^?#]*)",F=new RegExp(`^https?://${b}/${l}/${U}`,"i"),X=[{regex:f,indices:p,postModify:u},{regex:N,indices:R,postModify:g},{regex:F,indices:{bucket:1,path:2},postModify:g}];for(let G=0;G<X.length;G++){const je=X[G],Me=je.regex.exec(e);if(Me){const Ve=Me[je.indices.bucket];let $e=Me[je.indices.path];$e||($e=""),s=new Pt(Ve,$e),je.postModify(s);break}}if(s==null)throw RT(e);return s}}class MT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(r,e,n){let s=1,l=null,u=null,d=!1,f=0;function p(){return f===2}let g=!1;function E(...U){g||(g=!0,e.apply(null,U))}function y(U){l=setTimeout(()=>{l=null,r(N,p())},U)}function w(){u&&clearTimeout(u)}function N(U,...F){if(g){w();return}if(U){w(),E.call(null,U,...F);return}if(p()||d){w(),E.call(null,U,...F);return}s<64&&(s*=2);let X;f===1?(f=2,X=0):X=(s+Math.random())*1e3,y(X)}let R=!1;function b(U){R||(R=!0,w(),!g&&(l!==null?(U||(f=2),clearTimeout(l),y(0)):U||(f=1)))}return y(0),u=setTimeout(()=>{d=!0,b(!0)},n),b}function UT(r){r(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(r){return r!==void 0}function zT(r){return typeof r=="object"&&!Array.isArray(r)}function Jd(r){return typeof r=="string"||r instanceof String}function vg(r){return Zd()&&r instanceof Blob}function Zd(){return typeof Blob<"u"}function wg(r,e,n,s){if(s<e)throw Xc(`Invalid value for '${r}'. Expected ${e} or greater.`);if(s>n)throw Xc(`Invalid value for '${r}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(r,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${r}`}function Fy(r){const e=encodeURIComponent;let n="?";for(const s in r)if(r.hasOwnProperty(s)){const l=e(s)+"="+e(r[s]);n=n+l+"&"}return n=n.slice(0,-1),n}var xr;(function(r){r[r.NO_ERROR=0]="NO_ERROR",r[r.NETWORK_ERROR=1]="NETWORK_ERROR",r[r.ABORT=2]="ABORT"})(xr||(xr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(r,e){const n=r>=500&&r<600,l=[408,429].indexOf(r)!==-1,u=e.indexOf(r)!==-1;return n||l||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,s,l,u,d,f,p,g,E,y,w=!0,N=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=l,this.successCodes_=u,this.additionalRetryCodes_=d,this.callback_=f,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=y,this.retry=w,this.isUsingEmulator=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,b)=>{this.resolve_=R,this.reject_=b,this.start_()})}start_(){const e=(s,l)=>{if(l){s(!1,new _l(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const d=f=>{const p=f.loaded,g=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&u.addUploadProgressListener(d),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(d),this.pendingConnection_=null;const f=u.getErrorCode()===xr.NO_ERROR,p=u.getStatus();if(!f||BT(p,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===xr.ABORT;s(!1,new _l(!1,null,E));return}const g=this.successCodes_.indexOf(p)!==-1;s(!0,new _l(g,u))})},n=(s,l)=>{const u=this.resolve_,d=this.reject_,f=l.connection;if(l.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());jT(p)?u(p):u()}catch(p){d(p)}else if(f!==null){const p=Xd();p.serverResponse=f.getErrorText(),this.errorCallback_?d(this.errorCallback_(f,p)):d(p)}else if(l.canceled){const p=this.appDelete_?My():NT();d(p)}else{const p=xT();d(p)}};this.canceled_?n(!1,new _l(!1,null,!0)):this.backoffId_=FT(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _l{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function HT(r,e){e!==null&&e.length>0&&(r.Authorization="Firebase "+e)}function VT(r,e){r["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $T(r,e){e&&(r["X-Firebase-GMPID"]=e)}function qT(r,e){e!==null&&(r["X-Firebase-AppCheck"]=e)}function GT(r,e,n,s,l,u,d=!0,f=!1){const p=Fy(r.urlParams),g=r.url+p,E=Object.assign({},r.headers);return $T(E,e),HT(E,n),VT(E,u),qT(E,s),new WT(g,r.method,E,r.body,r.successCodes,r.additionalRetryCodes,r.handler,r.errorHandler,r.timeout,r.progressCallback,l,d,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YT(...r){const e=KT();if(e!==void 0){const n=new e;for(let s=0;s<r.length;s++)n.append(r[s]);return n.getBlob()}else{if(Zd())return new Blob(r);throw new Le(De.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QT(r,e,n){return r.webkitSlice?r.webkitSlice(e,n):r.mozSlice?r.mozSlice(e,n):r.slice?r.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(r){if(typeof atob>"u")throw DT("base-64");return atob(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xc{constructor(e,n){this.data=e,this.contentType=n||null}}function JT(r,e){switch(r){case sn.RAW:return new xc(Uy(e));case sn.BASE64:case sn.BASE64URL:return new xc(jy(r,e));case sn.DATA_URL:return new xc(ex(e),tx(e))}throw Xd()}function Uy(r){const e=[];for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<r.length-1&&(r.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const u=s,d=r.charCodeAt(++n);s=65536|(u&1023)<<10|d&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function ZT(r){let e;try{e=decodeURIComponent(r)}catch{throw Ds(sn.DATA_URL,"Malformed data URL.")}return Uy(e)}function jy(r,e){switch(r){case sn.BASE64:{const l=e.indexOf("-")!==-1,u=e.indexOf("_")!==-1;if(l||u)throw Ds(r,"Invalid character '"+(l?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const l=e.indexOf("+")!==-1,u=e.indexOf("/")!==-1;if(l||u)throw Ds(r,"Invalid character '"+(l?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=XT(e)}catch(l){throw l.message.includes("polyfill")?l:Ds(r,"Invalid character found")}const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s}class zy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ds(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=nx(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function ex(r){const e=new zy(r);return e.base64?jy(sn.BASE64,e.rest):ZT(e.rest)}function tx(r){return new zy(r).contentType}function nx(r,e){return r.length>=e.length?r.substring(r.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){let s=0,l="";vg(e)?(this.data_=e,s=e.size,l=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=l}size(){return this.size_}type(){return this.type_}slice(e,n){if(vg(this.data_)){const s=this.data_,l=QT(s,e,n);return l===null?null:new er(l)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new er(s,!0)}}static getBlob(...e){if(Zd()){const n=e.map(s=>s instanceof er?s.data_:s);return new er(YT.apply(null,n))}else{const n=e.map(d=>Jd(d)?JT(sn.RAW,d).data:d.data_);let s=0;n.forEach(d=>{s+=d.byteLength});const l=new Uint8Array(s);let u=0;return n.forEach(d=>{for(let f=0;f<d.length;f++)l[u++]=d[f]}),new er(l,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(r){let e;try{e=JSON.parse(r)}catch{return null}return zT(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(r){if(r.length===0)return null;const e=r.lastIndexOf("/");return e===-1?"":r.slice(0,e)}function ix(r,e){const n=e.split("/").filter(s=>s.length>0).join("/");return r.length===0?n:r+"/"+n}function Wy(r){const e=r.lastIndexOf("/",r.length-2);return e===-1?r:r.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(r,e){return e}class ht{constructor(e,n,s,l){this.server=e,this.local=n||e,this.writable=!!s,this.xform=l||sx}}let yl=null;function ox(r){return!Jd(r)||r.length<2?r:Wy(r)}function Hy(){if(yl)return yl;const r=[];r.push(new ht("bucket")),r.push(new ht("generation")),r.push(new ht("metageneration")),r.push(new ht("name","fullPath",!0));function e(u,d){return ox(d)}const n=new ht("name");n.xform=e,r.push(n);function s(u,d){return d!==void 0?Number(d):d}const l=new ht("size");return l.xform=s,r.push(l),r.push(new ht("timeCreated")),r.push(new ht("updated")),r.push(new ht("md5Hash",null,!0)),r.push(new ht("cacheControl",null,!0)),r.push(new ht("contentDisposition",null,!0)),r.push(new ht("contentEncoding",null,!0)),r.push(new ht("contentLanguage",null,!0)),r.push(new ht("contentType",null,!0)),r.push(new ht("metadata","customMetadata",!0)),yl=r,yl}function lx(r,e){function n(){const s=r.bucket,l=r.fullPath,u=new Pt(s,l);return e._makeStorageReference(u)}Object.defineProperty(r,"ref",{get:n})}function ax(r,e,n){const s={};s.type="file";const l=n.length;for(let u=0;u<l;u++){const d=n[u];s[d.local]=d.xform(s,e[d.server])}return lx(s,r),s}function Vy(r,e,n){const s=By(e);return s===null?null:ax(r,s,n)}function ux(r,e,n,s){const l=By(e);if(l===null||!Jd(l.downloadTokens))return null;const u=l.downloadTokens;if(u.length===0)return null;const d=encodeURIComponent;return u.split(",").map(g=>{const E=r.bucket,y=r.fullPath,w="/b/"+d(E)+"/o/"+d(y),N=eh(w,n,s),R=Fy({alt:"media",token:g});return N+R})[0]}function cx(r,e){const n={},s=e.length;for(let l=0;l<s;l++){const u=e[l];u.writable&&(n[u.server]=r[u.local])}return JSON.stringify(n)}class $y{constructor(e,n,s,l){this.url=e,this.method=n,this.handler=s,this.timeout=l,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(r){if(!r)throw Xd()}function dx(r,e){function n(s,l){const u=Vy(r,l,e);return qy(u!==null),u}return n}function hx(r,e){function n(s,l){const u=Vy(r,l,e);return qy(u!==null),ux(u,l,r.host,r._protocol)}return n}function Gy(r){function e(n,s){let l;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?l=kT():l=IT():n.getStatus()===402?l=CT(r.bucket):n.getStatus()===403?l=TT(r.path):l=s,l.status=n.getStatus(),l.serverResponse=s.serverResponse,l}return e}function fx(r){const e=Gy(r);function n(s,l){let u=e(s,l);return s.getStatus()===404&&(u=ST(r.path)),u.serverResponse=l.serverResponse,u}return n}function px(r,e,n){const s=e.fullServerUrl(),l=eh(s,r.host,r._protocol),u="GET",d=r.maxOperationRetryTime,f=new $y(l,u,hx(r,n),d);return f.errorHandler=fx(e),f}function mx(r,e){return r&&r.contentType||e&&e.type()||"application/octet-stream"}function gx(r,e,n){const s=Object.assign({},n);return s.fullPath=r.path,s.size=e.size(),s.contentType||(s.contentType=mx(null,e)),s}function _x(r,e,n,s,l){const u=e.bucketOnlyServerUrl(),d={"X-Goog-Upload-Protocol":"multipart"};function f(){let X="";for(let G=0;G<2;G++)X=X+Math.random().toString().slice(2);return X}const p=f();d["Content-Type"]="multipart/related; boundary="+p;const g=gx(e,s,l),E=cx(g,n),y="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+p+`\r
Content-Type: `+g.contentType+`\r
\r
`,w=`\r
--`+p+"--",N=er.getBlob(y,s,w);if(N===null)throw bT();const R={name:g.fullPath},b=eh(u,r.host,r._protocol),U="POST",F=r.maxUploadRetryTime,V=new $y(b,U,dx(r,n),F);return V.urlParams=R,V.headers=d,V.body=N.uploadData(),V.errorHandler=Gy(e),V}class yx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,l,u){if(this.sent_)throw Is("cannot .send() more than once");if(ar(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),u!==void 0)for(const d in u)u.hasOwnProperty(d)&&this.xhr_.setRequestHeader(d,u[d].toString());return l!==void 0?this.xhr_.send(l):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Is("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Is("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Is("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Is("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class vx extends yx{initXhr(){this.xhr_.responseType="text"}}function Ky(){return new vx}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n){this._service=e,n instanceof Pt?this._location=n:this._location=Pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fr(e,n)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Wy(this._location.path)}get storage(){return this._service}get parent(){const e=rx(this._location.path);if(e===null)return null;const n=new Pt(this._location.bucket,e);return new Fr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LT(e)}}function wx(r,e,n){r._throwIfRoot("uploadBytes");const s=_x(r.storage,r._location,Hy(),new er(e,!0),n);return r.storage.makeRequestWithTokens(s,Ky).then(l=>({metadata:l,ref:r}))}function Ex(r){r._throwIfRoot("getDownloadURL");const e=px(r.storage,r._location,Hy());return r.storage.makeRequestWithTokens(e,Ky).then(n=>{if(n===null)throw OT();return n})}function Sx(r,e){const n=ix(r._location.path,e),s=new Pt(r._location.bucket,n);return new Fr(r.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(r){return/^[A-Za-z]+:\/\//.test(r)}function Ix(r,e){return new Fr(r,e)}function Yy(r,e){if(r instanceof th){const n=r;if(n._bucket==null)throw AT();const s=new Fr(n,n._bucket);return e!=null?Yy(s,e):s}else return e!==void 0?Sx(r,e):r}function kx(r,e){if(e&&Cx(e)){if(r instanceof th)return Ix(r,e);throw Xc("To use ref(service, url), the first argument must be a Storage instance.")}else return Yy(r,e)}function Eg(r,e){const n=e?.[Ly];return n==null?null:Pt.makeFromBucketSpec(n,r)}function Tx(r,e,n,s={}){r.host=`${e}:${n}`;const l=ar(e);l&&(nd(`https://${r.host}/b`),rd("Storage",!0)),r._isUsingEmulator=!0,r._protocol=l?"https":"http";const{mockUserToken:u}=s;u&&(r._overrideAuthToken=typeof u=="string"?u:Lg(u,r.app.options.projectId))}class th{constructor(e,n,s,l,u,d=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=l,this._firebaseVersion=u,this._isUsingEmulator=d,this._bucket=null,this._host=Dy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wT,this._maxUploadRetryTime=ET,this._requests=new Set,l!=null?this._bucket=Pt.makeFromBucketSpec(l,this._host):this._bucket=Eg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=Eg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fr(this,e)}_makeRequest(e,n,s,l,u=!0){if(this._deleted)return new MT(My());{const d=GT(e,this._appId,s,l,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,n){const[s,l]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,l).getPromise()}}const Sg="@firebase/storage",Cg="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="storage";function xx(r,e,n){return r=He(r),wx(r,e,n)}function Nx(r){return r=He(r),Ex(r)}function Rx(r,e){return r=He(r),kx(r,e)}function Px(r=ld(),e){r=He(r);const s=Jl(r,Qy).getImmediate({identifier:e}),l=bg("storage");return l&&Ax(s,...l),s}function Ax(r,e,n,s={}){Tx(r,e,n,s)}function bx(r,{instanceIdentifier:e}){const n=r.getProvider("app").getImmediate(),s=r.getProvider("auth-internal"),l=r.getProvider("app-check-internal");return new th(n,s,l,e,jr)}function Ox(){Rr(new sr(Qy,bx,"PUBLIC").setMultipleInstances(!0)),on(Sg,Cg,""),on(Sg,Cg,"esm2020")}Ox();const Dx={apiKey:"AIzaSyA5d1rWrn9C9x5slkvkLQXW29JiMXoMSeg",authDomain:"tasktracker-e2329.firebaseapp.com",projectId:"tasktracker-e2329",storageBucket:"tasktracker-e2329.firebasestorage.app",messagingSenderId:"1044567656792",appId:"1:1044567656792:web:58a8e5f942f1ac66213d2d",measurementId:"G-VNRBNZ4R28",databaseURL:"https://tasktracker-e2329-default-rtdb.asia-southeast1.firebasedatabase.app/"},nh=zg(Dx),un=t1(nh),Ur=_T(nh),Lx=Px(nh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fx=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),Ig=r=>{const e=Fx(r);return e.charAt(0).toUpperCase()+e.slice(1)},Xy=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ux={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=te.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...f},p)=>te.createElement("svg",{ref:p,...Ux,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:Xy("lucide",l),...f},[...d.map(([g,E])=>te.createElement(g,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(r,e)=>{const n=te.forwardRef(({className:s,...l},u)=>te.createElement(jx,{ref:u,iconNode:e,className:Xy(`lucide-${Mx(Ig(r))}`,`lucide-${r}`,s),...l}));return n.displayName=Ig(r),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Bx=ut("bell",zx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],Hx=ut("book",Wx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],$x=ut("circle-alert",Vx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Gx=ut("circle-check-big",qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Yx=ut("circle-help",Kx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Jy=ut("clock",Qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],kg=ut("file-text",Xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Yl=ut("loader-circle",Jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],eN=ut("log-in",Zx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],nN=ut("log-out",tN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],iN=ut("message-circle",rN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],oN=ut("send",sN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],Jc=ut("ticket",lN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Tg=ut("upload",aN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],cN=ut("user",uN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rh=ut("x",dN);function hN({mode:r,onClose:e,onSwitchMode:n}){const[s,l]=te.useState(""),[u,d]=te.useState(""),[f,p]=te.useState(""),[g,E]=te.useState(""),[y,w]=te.useState(!1),[N,R]=te.useState(""),[b,U]=te.useState(!1),F=async X=>{X.preventDefault(),R(""),w(!0);try{if(r==="signup"){const je=(await jS(un,s,u)).user;await Oy(Mr(Ur,"users/"+je.uid),{name:f,email:s,department:g,createdAt:new Date().toISOString(),role:"user"}),alert("Account created successfully! You can now sign in."),n()}else await zS(un,s,u),alert("Signed in successfully!"),e()}catch(G){console.error("Auth error:",G),G.code==="auth/email-already-in-use"?R("This email is already registered. Please sign in instead."):G.code==="auth/weak-password"?R("Password should be at least 6 characters."):G.code==="auth/invalid-email"?R("Invalid email address."):G.code==="auth/user-not-found"?R("No account found with this email."):G.code==="auth/wrong-password"?R("Incorrect password."):G.code==="auth/invalid-credential"?R("Invalid email or password."):R("An error occurred. Please try again.")}finally{w(!1)}},V=async()=>{if(!s){R("Please enter your email address first.");return}R(""),w(!0);try{await US(un,s),U(!0),alert("Password reset email sent! Please check your inbox.")}catch(X){console.error("Password reset error:",X),X.code==="auth/user-not-found"?R("No account found with this email."):R("Failed to send reset email. Please try again.")}finally{w(!1)}};return _.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:_.jsxs("div",{className:"bg-white rounded-lg max-w-md w-full p-6 relative",children:[_.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600",disabled:y,children:_.jsx(rh,{className:"w-6 h-6"})}),_.jsx("h2",{className:"text-gray-900 mb-6",children:r==="signin"?"Sign In":"Create Account"}),N&&_.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700",children:N}),b&&_.jsx("div",{className:"mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700",children:"Password reset email sent! Check your inbox."}),_.jsxs("form",{onSubmit:F,className:"space-y-4",children:[r==="signup"&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{children:[_.jsx("label",{htmlFor:"name",className:"block text-gray-700 mb-2",children:"Full Name"}),_.jsx("input",{type:"text",id:"name",value:f,onChange:X=>p(X.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0,disabled:y})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"department",className:"block text-gray-700 mb-2",children:"Department"}),_.jsxs("select",{id:"department",value:g,onChange:X=>E(X.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0,disabled:y,children:[_.jsx("option",{value:"",children:"Select Department"}),_.jsx("option",{value:"general-manager",children:"General Manager"}),_.jsx("option",{value:"accounts",children:"Accounts"}),_.jsx("option",{value:"social-media",children:"Social Media"}),_.jsx("option",{value:"reservation",children:"Reservation"}),_.jsx("option",{value:"admin",children:"Admin"}),_.jsx("option",{value:"customer-service",children:"Customer Service"}),_.jsx("option",{value:"human-resource",children:"Human Resource"}),_.jsx("option",{value:"technical",children:"Technical"}),_.jsx("option",{value:"operation",children:"Operation"}),_.jsx("option",{value:"kitchen",children:"Kitchen"}),_.jsx("option",{value:"activity-trainer",children:"Activity Trainer"})]})]})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"email",className:"block text-gray-700 mb-2",children:"Email Address"}),_.jsx("input",{type:"email",id:"email",value:s,onChange:X=>l(X.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0,disabled:y})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"password",className:"block text-gray-700 mb-2",children:"Password"}),_.jsx("input",{type:"password",id:"password",value:u,onChange:X=>d(X.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0,disabled:y,minLength:6})]}),r==="signin"&&_.jsx("div",{className:"text-right",children:_.jsx("button",{type:"button",onClick:V,className:"text-indigo-600 hover:text-indigo-700",disabled:y,children:"Forgot Password?"})}),_.jsxs("button",{type:"submit",className:"w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",disabled:y,children:[y&&_.jsx(Yl,{className:"w-4 h-4 animate-spin"}),r==="signin"?"Sign In":"Create Account"]})]}),_.jsx("div",{className:"mt-6 text-center text-gray-600",children:r==="signin"?_.jsxs(_.Fragment,{children:["Don't have an account?"," ",_.jsx("button",{onClick:n,className:"text-indigo-600 hover:text-indigo-700",disabled:y,children:"Sign Up"})]}):_.jsxs(_.Fragment,{children:["Already have an account?"," ",_.jsx("button",{onClick:n,className:"text-indigo-600 hover:text-indigo-700",disabled:y,children:"Sign In"})]})})]})})}function fN({userData:r}){const[e,n]=te.useState(""),[s,l]=te.useState(""),[u,d]=te.useState(""),[f,p]=te.useState("medium"),[g,E]=te.useState(""),[y,w]=te.useState(""),[N,R]=te.useState([]),[b,U]=te.useState(!1),[F,V]=te.useState(""),[X,G]=te.useState(!1),je=50*1024*1024,Me=ae=>{const Se=Array.from(ae.target.files||[]),Ze=Se.filter(Ne=>Ne.size>je);if(Ze.length>0){V(`Some files exceed the 50MB limit: ${Ze.map(Ne=>Ne.name).join(", ")}`);return}R(Ne=>[...Ne,...Se]),V("")},Ve=ae=>{R(Se=>Se.filter((Ze,Ne)=>Ne!==ae))},$e=ae=>ae<1024?ae+" B":ae<1024*1024?(ae/1024).toFixed(2)+" KB":(ae/(1024*1024)).toFixed(2)+" MB",Jt=async ae=>{ae.preventDefault(),V(""),U(!0);try{const Se=un.currentUser;if(!Se)throw new Error("User not authenticated");const Ze=[];if(N.length>0){const it=N.map(async j=>{const Q=Date.now(),B=`tickets/${Se.uid}/${Q}_${j.name}`,I=Rx(Lx,B);await xx(I,j);const P=await Nx(I);return{name:j.name,url:P,size:j.size}}),ke=await Promise.all(it);Ze.push(...ke)}const Ne=Mr(Ur,"tickets"),mt=lT(Ne),At={ticketId:mt.key,title:e,description:s,category:u,priority:f,location:g,contactNumber:y,attachments:Ze,status:"open",createdBy:{uid:Se.uid,name:r.name,email:r.email,department:r.department},createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};await Oy(mt,At),G(!0),n(""),l(""),d(""),p("medium"),E(""),w(""),R([]),setTimeout(()=>G(!1),5e3)}catch(Se){console.error("Error creating ticket:",Se),Se.code==="storage/retry-limit-exceeded"?V("File upload failed. Please ensure Firebase Storage is enabled in your Firebase Console."):Se.code==="storage/unauthorized"?V("Upload permission denied. Please check Firebase Storage security rules."):Se.code==="storage/canceled"?V("Upload was cancelled."):Se.code==="storage/quota-exceeded"?V("Storage quota exceeded. Please contact administrator."):V("Failed to submit ticket. Please try again or submit without attachments.")}finally{U(!1)}};return _.jsx("div",{className:"max-w-3xl mx-auto",children:_.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[_.jsx("h2",{className:"text-gray-900 mb-2",children:"Submit a Support Ticket"}),_.jsx("p",{className:"text-gray-600 mb-6",children:"Please provide detailed information about your issue so we can assist you quickly."}),F&&_.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700",children:F}),X&&_.jsx("div",{className:"mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700",children:"✓ Ticket submitted successfully! Our IT team will review it shortly."}),_.jsxs("form",{onSubmit:Jt,className:"space-y-6",children:[_.jsxs("div",{children:[_.jsxs("label",{htmlFor:"title",className:"block text-gray-700 mb-2",children:["Issue Title ",_.jsx("span",{className:"text-red-500",children:"*"})]}),_.jsx("input",{type:"text",id:"title",value:e,onChange:ae=>n(ae.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Brief description of the issue",required:!0,disabled:b})]}),_.jsxs("div",{children:[_.jsxs("label",{htmlFor:"category",className:"block text-gray-700 mb-2",children:["Category ",_.jsx("span",{className:"text-red-500",children:"*"})]}),_.jsxs("select",{id:"category",value:u,onChange:ae=>d(ae.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0,disabled:b,children:[_.jsx("option",{value:"",children:"Select a category"}),_.jsx("option",{value:"hardware",children:"Hardware Issue"}),_.jsx("option",{value:"software",children:"Software Issue"}),_.jsx("option",{value:"network",children:"Network/Connectivity"}),_.jsx("option",{value:"email",children:"Email Issue"}),_.jsx("option",{value:"password",children:"Password/Account Access"}),_.jsx("option",{value:"printer",children:"Printer Issue"}),_.jsx("option",{value:"phone",children:"Phone System"}),_.jsx("option",{value:"request",children:"New Equipment/Software Request"}),_.jsx("option",{value:"other",children:"Other"})]})]}),_.jsxs("div",{children:[_.jsxs("label",{htmlFor:"priority",className:"block text-gray-700 mb-2",children:["Priority ",_.jsx("span",{className:"text-red-500",children:"*"})]}),_.jsxs("select",{id:"priority",value:f,onChange:ae=>p(ae.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",required:!0,disabled:b,children:[_.jsx("option",{value:"low",children:"Low - Minor inconvenience"}),_.jsx("option",{value:"medium",children:"Medium - Affecting my work"}),_.jsx("option",{value:"high",children:"High - Cannot work"}),_.jsx("option",{value:"urgent",children:"Urgent - Critical business impact"})]})]}),_.jsxs("div",{children:[_.jsxs("label",{htmlFor:"description",className:"block text-gray-700 mb-2",children:["Detailed Description ",_.jsx("span",{className:"text-red-500",children:"*"})]}),_.jsx("textarea",{id:"description",value:s,onChange:ae=>l(ae.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]",placeholder:`Please describe the issue in detail. Include:
- What were you doing when the issue occurred?
- Any error messages you received
- Steps you've already tried
- When the issue started`,required:!0,disabled:b})]}),_.jsxs("div",{children:[_.jsxs("label",{htmlFor:"location",className:"block text-gray-700 mb-2",children:["Location ",_.jsx("span",{className:"text-red-500",children:"*"})]}),_.jsx("input",{type:"text",id:"location",value:g,onChange:ae=>E(ae.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Building/Floor/Room number",required:!0,disabled:b})]}),_.jsxs("div",{children:[_.jsxs("label",{htmlFor:"contactNumber",className:"block text-gray-700 mb-2",children:["Contact Number ",_.jsx("span",{className:"text-red-500",children:"*"})]}),_.jsx("input",{type:"tel",id:"contactNumber",value:y,onChange:ae=>w(ae.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",placeholder:"Your phone number",required:!0,disabled:b})]}),_.jsxs("div",{children:[_.jsx("label",{htmlFor:"attachments",className:"block text-gray-700 mb-2",children:"Attachments (Optional)"}),_.jsx("p",{className:"text-gray-600 mb-2",children:"Maximum file size: 50MB per file"}),_.jsxs("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-indigo-400 transition-colors",children:[_.jsx("input",{type:"file",id:"attachments",onChange:Me,className:"hidden",multiple:!0,disabled:b}),_.jsxs("label",{htmlFor:"attachments",className:"cursor-pointer flex flex-col items-center gap-2",children:[_.jsx(Tg,{className:"w-8 h-8 text-gray-400"}),_.jsx("span",{className:"text-gray-600",children:"Click to upload files or drag and drop"}),_.jsx("span",{className:"text-gray-500",children:"Screenshots, documents, images"})]})]}),N.length>0&&_.jsx("div",{className:"mt-3 space-y-2",children:N.map((ae,Se)=>_.jsxs("div",{className:"flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200",children:[_.jsxs("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:[_.jsx(Tg,{className:"w-4 h-4 text-gray-500 flex-shrink-0"}),_.jsx("span",{className:"text-gray-700 truncate",children:ae.name}),_.jsxs("span",{className:"text-gray-500 flex-shrink-0",children:["(",$e(ae.size),")"]})]}),_.jsx("button",{type:"button",onClick:()=>Ve(Se),className:"ml-2 text-red-500 hover:text-red-700 flex-shrink-0",disabled:b,children:_.jsx(rh,{className:"w-5 h-5"})})]},Se))})]}),_.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 border border-gray-200",children:[_.jsx("p",{className:"text-gray-700 mb-1",children:"Submitting as:"}),_.jsx("p",{className:"text-gray-900",children:r.name}),_.jsx("p",{className:"text-gray-600",children:r.email}),_.jsxs("p",{className:"text-gray-600",children:["Department: ",r.department]})]}),_.jsxs("button",{type:"submit",className:"w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",disabled:b,children:[b&&_.jsx(Yl,{className:"w-5 h-5 animate-spin"}),b?"Submitting...":"Submit Ticket"]})]})]})})}function pN({onNotificationClick:r}){const[e,n]=te.useState([]),[s,l]=te.useState(!1),[u,d]=te.useState(0);te.useEffect(()=>{const p=un.currentUser;if(!p)return;const g=Mr(Ur,"tickets"),E=fa(g,y=>{const w=[],N=y.val();console.log("NotificationBell - Current user:",p.uid),console.log("NotificationBell - All tickets:",N),N&&Object.entries(N).forEach(([R,b])=>{if(console.log(`Checking ticket ${R}:`,{createdByUid:b.createdBy?.uid,currentUserUid:p.uid,matches:b.createdBy?.uid===p.uid,messages:b.messages}),b.createdBy?.uid===p.uid&&(b.messages&&Object.entries(b.messages).forEach(([U,F])=>{console.log(`Message ${U}:`,F),F.sentBy?.role==="IT Staff"&&(console.log("Found IT Staff message!",F),w.push({ticketId:R,ticketTitle:b.title,message:F.text,timestamp:F.sentAt,read:F.read||!1}))}),b.status==="in_progress"||b.status==="resolved")){const U=b.status==="in_progress"?"Your ticket is being worked on":"Your ticket has been resolved";w.push({ticketId:R,ticketTitle:b.title,message:U,timestamp:b.updatedAt,read:!1})}}),w.sort((R,b)=>new Date(b.timestamp).getTime()-new Date(R.timestamp).getTime()),console.log("Final notifications list:",w),console.log("Unread count:",w.filter(R=>!R.read).length),n(w),d(w.filter(R=>!R.read).length)});return()=>E()},[]);const f=p=>{const g=new Date(p),y=new Date().getTime()-g.getTime(),w=Math.floor(y/6e4),N=Math.floor(y/36e5),R=Math.floor(y/864e5);return w<1?"Just now":w<60?`${w}m ago`:N<24?`${N}h ago`:R<7?`${R}d ago`:g.toLocaleDateString()};return _.jsxs("div",{className:"relative",children:[_.jsxs("button",{onClick:()=>l(!s),className:"relative p-2 text-gray-600 hover:text-gray-900 transition-colors",children:[_.jsx(Bx,{className:"w-6 h-6"}),u>0&&_.jsx("span",{className:"absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center",children:u>9?"9+":u})]}),s&&_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>l(!1)}),_.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-96 overflow-y-auto",children:[_.jsxs("div",{className:"p-4 border-b border-gray-200",children:[_.jsx("h3",{className:"text-gray-900",children:"Notifications"}),u>0&&_.jsxs("p",{className:"text-gray-600",children:[u," unread"]})]}),e.length===0?_.jsx("div",{className:"p-4 text-center text-gray-500",children:"No notifications yet"}):_.jsx("div",{className:"divide-y divide-gray-200",children:e.map((p,g)=>_.jsx("button",{onClick:()=>{r(p.ticketId),l(!1)},className:`w-full p-4 text-left hover:bg-gray-50 transition-colors ${p.read?"":"bg-blue-50"}`,children:_.jsxs("div",{className:"flex items-start gap-2",children:[!p.read&&_.jsx("div",{className:"w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"}),_.jsxs("div",{className:"flex-1 min-w-0",children:[_.jsx("p",{className:"text-gray-900 truncate",children:p.ticketTitle}),_.jsx("p",{className:"text-gray-600 line-clamp-2 mt-1",children:p.message}),_.jsx("p",{className:"text-gray-500 mt-1",children:f(p.timestamp)})]})]})},g))})]})]})]})}function mN({ticketId:r,onClose:e}){const[n,s]=te.useState(null),[l,u]=te.useState(""),[d,f]=te.useState(!0),[p,g]=te.useState(!1),E=te.useRef(null);te.useEffect(()=>{if(!r)return;const F=Mr(Ur,`tickets/${r}`),V=fa(F,X=>{const G=X.val();G&&s(G),f(!1)});return()=>V()},[r]),te.useEffect(()=>{E.current?.scrollIntoView({behavior:"smooth"})},[n?.messages]);const y=async()=>{if(!(!l.trim()||!n)){g(!0);try{const F=un.currentUser;if(!F)return;const V=Date.now(),X={sentBy:{uid:F.uid,email:n.createdBy.email,displayName:n.createdBy.name,role:"user"},text:l,sentAt:new Date().toISOString(),emailSent:!1},G=Mr(Ur,`tickets/${r}`);await aT(G,{[`messages/${V}`]:X,lastMessage:{text:l,sentAt:new Date().toISOString(),sentBy:{uid:F.uid,email:n.createdBy.email,displayName:n.createdBy.name,role:"user"},emailSent:!1},updatedAt:new Date().toISOString()}),u("")}catch(F){console.error("Error sending reply:",F),alert("Failed to send reply. Please try again.")}finally{g(!1)}}},w=F=>new Date(F).toLocaleString("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}),N=F=>{switch(F){case"urgent":return"text-red-600 bg-red-50 border-red-200";case"high":return"text-orange-600 bg-orange-50 border-orange-200";case"medium":return"text-yellow-600 bg-yellow-50 border-yellow-200";case"low":return"text-green-600 bg-green-50 border-green-200";default:return"text-gray-600 bg-gray-50 border-gray-200"}},R=F=>{switch(F){case"open":return"text-blue-600 bg-blue-50 border-blue-200";case"in_progress":return"text-purple-600 bg-purple-50 border-purple-200";case"resolved":return"text-green-600 bg-green-50 border-green-200";case"closed":return"text-gray-600 bg-gray-50 border-gray-200";default:return"text-gray-600 bg-gray-50 border-gray-200"}},b=F=>{switch(F){case"in_progress":return"In Progress";default:return F.charAt(0).toUpperCase()+F.slice(1)}};if(d)return _.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:_.jsx("div",{className:"bg-white rounded-lg p-8",children:_.jsx(Yl,{className:"w-8 h-8 animate-spin text-indigo-600"})})});if(!n)return _.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:_.jsx("div",{className:"bg-white rounded-lg p-8",children:_.jsx("p",{className:"text-gray-600",children:"Ticket not found"})})});const U=n.messages?Object.entries(n.messages).map(([F,V])=>({id:F,...V})).sort((F,V)=>new Date(F.sentAt).getTime()-new Date(V.sentAt).getTime()):[];return _.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto",children:_.jsxs("div",{className:"bg-white rounded-lg max-w-4xl w-full my-8 flex flex-col max-h-[90vh]",children:[_.jsxs("div",{className:"p-6 border-b border-gray-200 flex justify-between items-start flex-shrink-0",children:[_.jsxs("div",{className:"flex-1",children:[_.jsx("h2",{className:"text-gray-900 mb-2",children:n.title}),_.jsxs("div",{className:"flex gap-2 flex-wrap",children:[_.jsx("span",{className:`px-3 py-1 rounded-full border ${N(n.priority)}`,children:n.priority.charAt(0).toUpperCase()+n.priority.slice(1)}),_.jsx("span",{className:`px-3 py-1 rounded-full border ${R(n.status)}`,children:b(n.status)}),_.jsx("span",{className:"px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600",children:n.category})]})]}),_.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-600 ml-4",children:_.jsx(rh,{className:"w-6 h-6"})})]}),_.jsxs("div",{className:"flex-1 overflow-y-auto",children:[_.jsxs("div",{className:"p-6 border-b border-gray-200 bg-gray-50",children:[_.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-gray-600",children:"Created by"}),_.jsx("p",{className:"text-gray-900",children:n.createdBy.name}),_.jsx("p",{className:"text-gray-600",children:n.createdBy.email})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-gray-600",children:"Department"}),_.jsx("p",{className:"text-gray-900",children:n.createdBy.department})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-gray-600",children:"Location"}),_.jsx("p",{className:"text-gray-900",children:n.location})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-gray-600",children:"Contact"}),_.jsx("p",{className:"text-gray-900",children:n.contactNumber})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-gray-600",children:"Created"}),_.jsxs("p",{className:"text-gray-900 flex items-center gap-1",children:[_.jsx(Jy,{className:"w-4 h-4"}),w(n.createdAt)]})]})]}),_.jsxs("div",{className:"mt-4",children:[_.jsx("p",{className:"text-gray-600 mb-2",children:"Description"}),_.jsx("p",{className:"text-gray-900 whitespace-pre-wrap",children:n.description})]}),n.attachments&&n.attachments.length>0&&_.jsxs("div",{className:"mt-4",children:[_.jsx("p",{className:"text-gray-600 mb-2",children:"Attachments"}),_.jsx("div",{className:"space-y-2",children:n.attachments.map((F,V)=>_.jsx("a",{href:F.url,target:"_blank",rel:"noopener noreferrer",className:"block p-2 bg-white rounded border border-gray-200 hover:bg-gray-50 text-indigo-600",children:F.name},V))})]})]}),_.jsx("div",{className:"p-6 space-y-4 min-h-[200px]",children:U.length===0?_.jsxs("div",{className:"text-center text-gray-500 py-8",children:[_.jsx($x,{className:"w-12 h-12 mx-auto mb-2 text-gray-400"}),_.jsx("p",{children:"No replies yet. Our IT team will respond soon."})]}):_.jsxs(_.Fragment,{children:[U.map(F=>{const V=F.sentBy.role==="IT Staff";return _.jsx("div",{className:`flex ${V?"justify-start":"justify-end"}`,children:_.jsxs("div",{className:`max-w-[70%] rounded-lg p-4 ${V?"bg-gray-100 text-gray-900":"bg-indigo-600 text-white"}`,children:[_.jsxs("p",{className:`mb-1 ${V?"text-gray-600":"text-indigo-200"}`,children:[F.sentBy.displayName||F.sentBy.email,V&&" (IT Staff)"]}),_.jsx("p",{className:"whitespace-pre-wrap",children:F.text}),_.jsx("p",{className:`mt-2 ${V?"text-gray-500":"text-indigo-200"}`,children:w(F.sentAt)})]})},F.id)}),_.jsx("div",{ref:E})]})})]}),_.jsxs("div",{className:"p-6 border-t border-gray-200 bg-white flex-shrink-0",children:[_.jsxs("div",{className:"flex gap-2",children:[_.jsx("textarea",{value:l,onChange:F=>u(F.target.value),placeholder:"Type your reply...",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none",rows:3,disabled:p,onKeyDown:F=>{F.key==="Enter"&&!F.shiftKey&&(F.preventDefault(),y())}}),_.jsx("button",{onClick:y,disabled:!l.trim()||p,className:"px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",children:p?_.jsx(Yl,{className:"w-5 h-5 animate-spin"}):_.jsx(oN,{className:"w-5 h-5"})})]}),_.jsx("p",{className:"text-gray-500 mt-2",children:"Press Enter to send, Shift+Enter for new line"})]})]})})}function gN({onTicketClick:r}){const[e,n]=te.useState([]),[s,l]=te.useState(!0);te.useEffect(()=>{const y=un.currentUser;if(!y)return;const w=Mr(Ur,"tickets"),N=fa(w,R=>{const b=R.val(),U=[];b&&Object.entries(b).forEach(([F,V])=>{V.createdBy?.uid===y.uid&&U.push({ticketId:F,...V})}),U.sort((F,V)=>new Date(V.updatedAt).getTime()-new Date(F.updatedAt).getTime()),n(U),l(!1)});return()=>N()},[]);const u=y=>{switch(y){case"urgent":return"text-red-600 bg-red-50 border-red-200";case"high":return"text-orange-600 bg-orange-50 border-orange-200";case"medium":return"text-yellow-600 bg-yellow-50 border-yellow-200";case"low":return"text-green-600 bg-green-50 border-green-200";default:return"text-gray-600 bg-gray-50 border-gray-200"}},d=y=>{switch(y){case"open":return"text-blue-600 bg-blue-50 border-blue-200";case"in_progress":return"text-purple-600 bg-purple-50 border-purple-200";case"resolved":return"text-green-600 bg-green-50 border-green-200";case"closed":return"text-gray-600 bg-gray-50 border-gray-200";default:return"text-gray-600 bg-gray-50 border-gray-200"}},f=y=>{switch(y){case"in_progress":return"In Progress";default:return y.charAt(0).toUpperCase()+y.slice(1)}},p=y=>y.messages?Object.keys(y.messages).length:0,g=y=>y.messages?Object.values(y.messages).some(w=>w.sentBy?.role==="IT Staff"&&!w.read):!1,E=y=>new Date(y).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return s?_.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 text-center",children:_.jsx("p",{className:"text-gray-600",children:"Loading your tickets..."})}):_.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[_.jsx(kg,{className:"w-6 h-6 text-indigo-600"}),_.jsx("h2",{className:"text-gray-900",children:"My Tickets"})]}),e.length===0?_.jsxs("div",{className:"text-center py-8 text-gray-500",children:[_.jsx(kg,{className:"w-16 h-16 mx-auto mb-4 text-gray-300"}),_.jsx("p",{children:"You haven't submitted any tickets yet."})]}):_.jsx("div",{className:"space-y-4",children:e.map(y=>_.jsxs("button",{onClick:()=>r(y.ticketId),className:"w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors relative",children:[g(y)&&_.jsx("div",{className:"absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full"}),_.jsxs("div",{className:"flex justify-between items-start mb-2",children:[_.jsx("h3",{className:"text-gray-900 pr-4",children:y.title}),_.jsxs("div",{className:"flex gap-2 flex-shrink-0",children:[_.jsx("span",{className:`px-2 py-1 rounded-full border text-sm ${u(y.priority)}`,children:y.priority}),_.jsx("span",{className:`px-2 py-1 rounded-full border text-sm ${d(y.status)}`,children:f(y.status)})]})]}),_.jsx("p",{className:"text-gray-600 line-clamp-2 mb-3",children:y.description}),_.jsxs("div",{className:"flex justify-between items-center text-sm",children:[_.jsxs("div",{className:"flex items-center gap-4 text-gray-500",children:[_.jsxs("span",{className:"flex items-center gap-1",children:[_.jsx(Jy,{className:"w-4 h-4"}),E(y.createdAt)]}),p(y)>0&&_.jsxs("span",{className:"flex items-center gap-1 text-indigo-600",children:[_.jsx(iN,{className:"w-4 h-4"}),p(y)," ",p(y)===1?"message":"messages"]})]}),_.jsx("span",{className:"text-gray-400",children:y.category})]})]},y.ticketId))})]})}function _N(){const[r,e]=te.useState(null),[n,s]=te.useState(!0),[l,u]=te.useState(null);te.useEffect(()=>{const p=un.currentUser;if(!p)return;const g=Mr(Ur,"users/"+p.uid),E=fa(g,y=>{const w=y.val();w&&e({name:w.name,email:w.email,department:w.department}),s(!1)});return()=>E()},[]);const d=async()=>{try{await VS(un)}catch(p){console.error("Error signing out:",p)}},f=p=>{u(p)};return n?_.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center",children:_.jsx("div",{className:"text-gray-600",children:"Loading..."})}):r?_.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",children:[_.jsx("header",{className:"bg-white shadow-sm",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(Jc,{className:"w-8 h-8 text-indigo-600"}),_.jsx("span",{className:"text-indigo-900",children:"IT Support Ticketing System"})]}),_.jsxs("div",{className:"flex items-center gap-4",children:[_.jsx(pN,{onNotificationClick:f}),_.jsxs("div",{className:"flex items-center gap-2 text-gray-700",children:[_.jsx(cN,{className:"w-5 h-5"}),_.jsx("span",{children:r.name})]}),_.jsxs("button",{onClick:d,className:"px-4 py-2 text-red-600 hover:text-red-700 transition-colors flex items-center gap-2",children:[_.jsx(nN,{className:"w-4 h-4"}),"Sign Out"]})]})]})}),_.jsx("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:_.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[_.jsx("div",{children:_.jsx(fN,{userData:r})}),_.jsx("div",{children:_.jsx(gN,{onTicketClick:u})})]})}),_.jsx("footer",{className:"bg-white mt-16 py-8 border-t",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600",children:[_.jsx("p",{children:"Need immediate assistance? Call us: Adly: 011-6911 0701 / Eizzat: 012-861 7490"}),_.jsx("p",{className:"mt-2",children:"Available Monday - Friday: 8:30 AM - 5:30 PM & Saturday: 8:30 AM - 1:00 PM"})]})}),l&&_.jsx(mN,{ticketId:l,onClose:()=>u(null)})]}):_.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center",children:_.jsx("div",{className:"text-gray-600",children:"Unable to load user data"})})}function vl({icon:r,title:e,content:n}){return _.jsx("div",{className:"bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow",children:_.jsxs("div",{className:"flex items-start gap-4",children:[_.jsx("div",{className:"flex-shrink-0",children:r}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-gray-900 mb-3",children:e}),_.jsx("div",{children:n})]})]})})}function yN(){const[r,e]=te.useState(!1),[n,s]=te.useState("signin"),[l,u]=te.useState(null),[d,f]=te.useState(!0);te.useEffect(()=>{const g=HS(un,E=>{u(E),f(!1)});return()=>g()},[]);const p=g=>{s(g),e(!0)};return d?_.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center",children:_.jsx("div",{className:"text-gray-600",children:"Loading..."})}):l?_.jsx(_N,{}):_.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",children:[_.jsx("header",{className:"bg-white shadow-sm",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(Jc,{className:"w-8 h-8 text-indigo-600"}),_.jsx("span",{className:"text-indigo-900",children:"IT Support Ticketing System"})]}),_.jsxs("div",{className:"flex gap-3",children:[_.jsxs("button",{onClick:()=>p("signin"),className:"px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors flex items-center gap-2",children:[_.jsx(eN,{className:"w-4 h-4"}),"Sign In"]}),_.jsx("button",{onClick:()=>p("signup"),className:"px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",children:"Sign Up"})]})]})}),_.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[_.jsx("h1",{className:"text-indigo-900 mb-4",children:"Get IT Support When You Need It"}),_.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto mb-8",children:"Submit tickets, track progress, and resolve technical issues efficiently. Our IT team is here to help you get back to work quickly."}),_.jsx("button",{onClick:()=>p("signup"),className:"px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors",children:"Get Started"})]}),_.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8",children:[_.jsx(vl,{icon:_.jsx(Yx,{className:"w-8 h-8 text-indigo-600"}),title:"When to Use the System",content:_.jsxs("ul",{className:"space-y-2 text-gray-600",children:[_.jsx("li",{children:"• Hardware malfunctions (computer, monitor, keyboard, etc.)"}),_.jsx("li",{children:"• Software installation or troubleshooting"}),_.jsx("li",{children:"• Network connectivity issues"}),_.jsx("li",{children:"• Password resets and account access"}),_.jsx("li",{children:"• Email or application errors"}),_.jsx("li",{children:"• New equipment or software requests"})]})}),_.jsx(vl,{icon:_.jsx(Jc,{className:"w-8 h-8 text-indigo-600"}),title:"How to Submit a Good Ticket",content:_.jsxs("ul",{className:"space-y-2 text-gray-600",children:[_.jsx("li",{children:"• Provide a clear, descriptive title"}),_.jsx("li",{children:"• Include specific error messages (screenshots help!)"}),_.jsx("li",{children:"• Describe what you were doing when the issue occurred"}),_.jsx("li",{children:"• Mention steps you've already tried"}),_.jsx("li",{children:"• Specify urgency and impact on your work"}),_.jsx("li",{children:"• Include your location and contact information"})]})}),_.jsx(vl,{icon:_.jsx(Gx,{className:"w-8 h-8 text-indigo-600"}),title:"What Happens Next",content:_.jsxs("div",{className:"space-y-3 text-gray-600",children:[_.jsxs("div",{children:[_.jsx("span",{className:"text-indigo-600",children:"Step 1:"})," Your ticket is automatically logged and assigned a unique ID"]}),_.jsxs("div",{children:[_.jsx("span",{className:"text-indigo-600",children:"Step 2:"})," You'll receive a confirmation email with your ticket number"]}),_.jsxs("div",{children:[_.jsx("span",{className:"text-indigo-600",children:"Step 3:"})," An IT technician will review and prioritize your request"]}),_.jsxs("div",{children:[_.jsx("span",{className:"text-indigo-600",children:"Step 4:"})," You'll be notified of any updates or resolution"]})]})}),_.jsx(vl,{icon:_.jsx(Hx,{className:"w-8 h-8 text-indigo-600"}),title:"Self-Service/Knowledge Base",content:_.jsxs("div",{className:"text-gray-600 space-y-3",children:[_.jsx("p",{children:"Before submitting a ticket, check our knowledge base for quick solutions to common issues:"}),_.jsxs("ul",{className:"space-y-2",children:[_.jsx("li",{children:"• Password reset guides"}),_.jsx("li",{children:"• VPN connection setup"}),_.jsx("li",{children:"• Printer configuration"}),_.jsx("li",{children:"• Email setup on mobile devices"}),_.jsx("li",{children:"• Software installation tutorials"})]}),_.jsx("button",{onClick:()=>p("signin"),className:"mt-2 text-indigo-600 hover:text-indigo-700 underline",children:"Browse Knowledge Base →"})]})})]}),_.jsx("footer",{className:"bg-white mt-16 py-8 border-t",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600",children:[_.jsx("p",{children:"Need immediate assistance? Call us: Adly: 011-6911 0701 / Eizzat: 012-861 7490"}),_.jsx("p",{className:"mt-2",children:"Available Monday - Friday: 8:30 AM - 5:30 PM & Saturday: 8:30 AM - 1:00 PM"})]})}),r&&_.jsx(hN,{mode:n,onClose:()=>e(!1),onSwitchMode:()=>s(n==="signin"?"signup":"signin")})]})}rw.createRoot(document.getElementById("root")).render(_.jsx(yN,{}));
