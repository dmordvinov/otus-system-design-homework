function Mm(e,n){for(var l=0;l<n.length;l++){const r=n[l];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const s=Object.getOwnPropertyDescriptor(r,o);s&&Object.defineProperty(e,o,s.get?s:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function X4(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ad={exports:{}},Fa={};var rg;function Gm(){if(rg)return Fa;rg=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function l(r,o,s){var u=null;if(s!==void 0&&(u=""+s),o.key!==void 0&&(u=""+o.key),"key"in o){s={};for(var f in o)f!=="key"&&(s[f]=o[f])}else s=o;return o=s.ref,{$$typeof:e,type:r,key:u,ref:o!==void 0?o:null,props:s}}return Fa.Fragment=n,Fa.jsx=l,Fa.jsxs=l,Fa}var ag;function qm(){return ag||(ag=1,ad.exports=Gm()),ad.exports}var Yd=qm(),od={exports:{}},me={};var og;function $m(){if(og)return me;og=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),b=Symbol.iterator;function v(A){return A===null||typeof A!="object"?null:(A=b&&A[b]||A["@@iterator"],typeof A=="function"?A:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,z={};function C(A,$,x){this.props=A,this.context=$,this.refs=z,this.updater=x||B}C.prototype.isReactComponent={},C.prototype.setState=function(A,$){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,$,"setState")},C.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function X(){}X.prototype=C.prototype;function q(A,$,x){this.props=A,this.context=$,this.refs=z,this.updater=x||B}var te=q.prototype=new X;te.constructor=q,R(te,C.prototype),te.isPureReactComponent=!0;var ne=Array.isArray;function M(){}var K={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function W(A,$,x){var ie=x.ref;return{$$typeof:e,type:A,key:$,ref:ie!==void 0?ie:null,props:x}}function _(A,$){return W(A.type,$,A.props)}function Z(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function V(A){var $={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(x){return $[x]})}var le=/\/+/g;function pe(A,$){return typeof A=="object"&&A!==null&&A.key!=null?V(""+A.key):$.toString(36)}function ue(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(M,M):(A.status="pending",A.then(function($){A.status==="pending"&&(A.status="fulfilled",A.value=$)},function($){A.status==="pending"&&(A.status="rejected",A.reason=$)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function P(A,$,x,ie,he){var se=typeof A;(se==="undefined"||se==="boolean")&&(A=null);var Se=!1;if(A===null)Se=!0;else switch(se){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(A.$$typeof){case e:case n:Se=!0;break;case y:return Se=A._init,P(Se(A._payload),$,x,ie,he)}}if(Se)return he=he(A),Se=ie===""?"."+pe(A,0):ie,ne(he)?(x="",Se!=null&&(x=Se.replace(le,"$&/")+"/"),P(he,$,x,"",function(on){return on})):he!=null&&(Z(he)&&(he=_(he,x+(he.key==null||A&&A.key===he.key?"":(""+he.key).replace(le,"$&/")+"/")+Se)),$.push(he)),1;Se=0;var Je=ie===""?".":ie+":";if(ne(A))for(var Ge=0;Ge<A.length;Ge++)ie=A[Ge],se=Je+pe(ie,Ge),Se+=P(ie,$,x,se,he);else if(Ge=v(A),typeof Ge=="function")for(A=Ge.call(A),Ge=0;!(ie=A.next()).done;)ie=ie.value,se=Je+pe(ie,Ge++),Se+=P(ie,$,x,se,he);else if(se==="object"){if(typeof A.then=="function")return P(ue(A),$,x,ie,he);throw $=String(A),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Y(A,$,x){if(A==null)return A;var ie=[],he=0;return P(A,ie,"","",function(se){return $.call(x,se,he++)}),ie}function ae(A){if(A._status===-1){var $=A._result;$=$(),$.then(function(x){(A._status===0||A._status===-1)&&(A._status=1,A._result=x)},function(x){(A._status===0||A._status===-1)&&(A._status=2,A._result=x)}),A._status===-1&&(A._status=0,A._result=$)}if(A._status===1)return A._result.default;throw A._result}var Te=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},w={map:Y,forEach:function(A,$,x){Y(A,function(){$.apply(this,arguments)},x)},count:function(A){var $=0;return Y(A,function(){$++}),$},toArray:function(A){return Y(A,function($){return $})||[]},only:function(A){if(!Z(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return me.Activity=m,me.Children=w,me.Component=C,me.Fragment=l,me.Profiler=o,me.PureComponent=q,me.StrictMode=r,me.Suspense=d,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,me.__COMPILER_RUNTIME={__proto__:null,c:function(A){return K.H.useMemoCache(A)}},me.cache=function(A){return function(){return A.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(A,$,x){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var ie=R({},A.props),he=A.key;if($!=null)for(se in $.key!==void 0&&(he=""+$.key),$)!I.call($,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&$.ref===void 0||(ie[se]=$[se]);var se=arguments.length-2;if(se===1)ie.children=x;else if(1<se){for(var Se=Array(se),Je=0;Je<se;Je++)Se[Je]=arguments[Je+2];ie.children=Se}return W(A.type,he,ie)},me.createContext=function(A){return A={$$typeof:u,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:s,_context:A},A},me.createElement=function(A,$,x){var ie,he={},se=null;if($!=null)for(ie in $.key!==void 0&&(se=""+$.key),$)I.call($,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(he[ie]=$[ie]);var Se=arguments.length-2;if(Se===1)he.children=x;else if(1<Se){for(var Je=Array(Se),Ge=0;Ge<Se;Ge++)Je[Ge]=arguments[Ge+2];he.children=Je}if(A&&A.defaultProps)for(ie in Se=A.defaultProps,Se)he[ie]===void 0&&(he[ie]=Se[ie]);return W(A,se,he)},me.createRef=function(){return{current:null}},me.forwardRef=function(A){return{$$typeof:f,render:A}},me.isValidElement=Z,me.lazy=function(A){return{$$typeof:y,_payload:{_status:-1,_result:A},_init:ae}},me.memo=function(A,$){return{$$typeof:h,type:A,compare:$===void 0?null:$}},me.startTransition=function(A){var $=K.T,x={};K.T=x;try{var ie=A(),he=K.S;he!==null&&he(x,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(M,Te)}catch(se){Te(se)}finally{$!==null&&x.types!==null&&($.types=x.types),K.T=$}},me.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},me.use=function(A){return K.H.use(A)},me.useActionState=function(A,$,x){return K.H.useActionState(A,$,x)},me.useCallback=function(A,$){return K.H.useCallback(A,$)},me.useContext=function(A){return K.H.useContext(A)},me.useDebugValue=function(){},me.useDeferredValue=function(A,$){return K.H.useDeferredValue(A,$)},me.useEffect=function(A,$){return K.H.useEffect(A,$)},me.useEffectEvent=function(A){return K.H.useEffectEvent(A)},me.useId=function(){return K.H.useId()},me.useImperativeHandle=function(A,$,x){return K.H.useImperativeHandle(A,$,x)},me.useInsertionEffect=function(A,$){return K.H.useInsertionEffect(A,$)},me.useLayoutEffect=function(A,$){return K.H.useLayoutEffect(A,$)},me.useMemo=function(A,$){return K.H.useMemo(A,$)},me.useOptimistic=function(A,$){return K.H.useOptimistic(A,$)},me.useReducer=function(A,$,x){return K.H.useReducer(A,$,x)},me.useRef=function(A){return K.H.useRef(A)},me.useState=function(A){return K.H.useState(A)},me.useSyncExternalStore=function(A,$,x){return K.H.useSyncExternalStore(A,$,x)},me.useTransition=function(){return K.H.useTransition()},me.version="19.2.4",me}var sg;function R1(){return sg||(sg=1,od.exports=$m()),od.exports}var yl=R1();const jm=X4(yl),oS=Mm({__proto__:null,default:jm},[yl]);var sd={exports:{}},Ia={},cd={exports:{}},ud={};var cg;function Um(){return cg||(cg=1,(function(e){function n(P,Y){var ae=P.length;P.push(Y);e:for(;0<ae;){var Te=ae-1>>>1,w=P[Te];if(0<o(w,Y))P[Te]=Y,P[ae]=w,ae=Te;else break e}}function l(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Y=P[0],ae=P.pop();if(ae!==Y){P[0]=ae;e:for(var Te=0,w=P.length,A=w>>>1;Te<A;){var $=2*(Te+1)-1,x=P[$],ie=$+1,he=P[ie];if(0>o(x,ae))ie<w&&0>o(he,x)?(P[Te]=he,P[ie]=ae,Te=ie):(P[Te]=x,P[$]=ae,Te=$);else if(ie<w&&0>o(he,ae))P[Te]=he,P[ie]=ae,Te=ie;else break e}}return Y}function o(P,Y){var ae=P.sortIndex-Y.sortIndex;return ae!==0?ae:P.id-Y.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var d=[],h=[],y=1,m=null,b=3,v=!1,B=!1,R=!1,z=!1,C=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function te(P){for(var Y=l(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=P)r(h),Y.sortIndex=Y.expirationTime,n(d,Y);else break;Y=l(h)}}function ne(P){if(R=!1,te(P),!B)if(l(d)!==null)B=!0,M||(M=!0,V());else{var Y=l(h);Y!==null&&ue(ne,Y.startTime-P)}}var M=!1,K=-1,I=5,W=-1;function _(){return z?!0:!(e.unstable_now()-W<I)}function Z(){if(z=!1,M){var P=e.unstable_now();W=P;var Y=!0;try{e:{B=!1,R&&(R=!1,X(K),K=-1),v=!0;var ae=b;try{t:{for(te(P),m=l(d);m!==null&&!(m.expirationTime>P&&_());){var Te=m.callback;if(typeof Te=="function"){m.callback=null,b=m.priorityLevel;var w=Te(m.expirationTime<=P);if(P=e.unstable_now(),typeof w=="function"){m.callback=w,te(P),Y=!0;break t}m===l(d)&&r(d),te(P)}else r(d);m=l(d)}if(m!==null)Y=!0;else{var A=l(h);A!==null&&ue(ne,A.startTime-P),Y=!1}}break e}finally{m=null,b=ae,v=!1}Y=void 0}}finally{Y?V():M=!1}}}var V;if(typeof q=="function")V=function(){q(Z)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,pe=le.port2;le.port1.onmessage=Z,V=function(){pe.postMessage(null)}}else V=function(){C(Z,0)};function ue(P,Y){K=C(function(){P(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(P){switch(b){case 1:case 2:case 3:var Y=3;break;default:Y=b}var ae=b;b=Y;try{return P()}finally{b=ae}},e.unstable_requestPaint=function(){z=!0},e.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ae=b;b=P;try{return Y()}finally{b=ae}},e.unstable_scheduleCallback=function(P,Y,ae){var Te=e.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Te+ae:Te):ae=Te,P){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=ae+w,P={id:y++,callback:Y,priorityLevel:P,startTime:ae,expirationTime:w,sortIndex:-1},ae>Te?(P.sortIndex=ae,n(h,P),l(d)===null&&P===l(h)&&(R?(X(K),K=-1):R=!0,ue(ne,ae-Te))):(P.sortIndex=w,n(d,P),B||v||(B=!0,M||(M=!0,V()))),P},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(P){var Y=b;return function(){var ae=b;b=Y;try{return P.apply(this,arguments)}finally{b=ae}}}})(ud)),ud}var ug;function Zm(){return ug||(ug=1,cd.exports=Um()),cd.exports}var fd={exports:{}},At={};var fg;function Hm(){if(fg)return At;fg=1;var e=R1();function n(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var r={d:{f:l,r:function(){throw Error(n(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},o=Symbol.for("react.portal");function s(d,h,y){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:m==null?null:""+m,children:d,containerInfo:h,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,At.createPortal=function(d,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(n(299));return s(d,h,null,y)},At.flushSync=function(d){var h=u.T,y=r.p;try{if(u.T=null,r.p=2,d)return d()}finally{u.T=h,r.p=y,r.d.f()}},At.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(d,h))},At.prefetchDNS=function(d){typeof d=="string"&&r.d.D(d)},At.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var y=h.as,m=f(y,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,v=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?r.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:m,integrity:b,fetchPriority:v}):y==="script"&&r.d.X(d,{crossOrigin:m,integrity:b,fetchPriority:v,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},At.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=f(h.as,h.crossOrigin);r.d.M(d,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(d)},At.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,m=f(y,h.crossOrigin);r.d.L(d,y,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},At.preloadModule=function(d,h){if(typeof d=="string")if(h){var y=f(h.as,h.crossOrigin);r.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(d)},At.requestFormReset=function(d){r.d.r(d)},At.unstable_batchedUpdates=function(d,h){return d(h)},At.useFormState=function(d,h,y){return u.H.useFormState(d,h,y)},At.useFormStatus=function(){return u.H.useHostTransitionStatus()},At.version="19.2.4",At}var dg;function Y4(){if(dg)return fd.exports;dg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),fd.exports=Hm(),fd.exports}var hg;function Km(){if(hg)return Ia;hg=1;var e=Zm(),n=R1(),l=Y4();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function s(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(s(t)!==t)throw Error(r(188))}function h(t){var i=t.alternate;if(!i){if(i=s(t),i===null)throw Error(r(188));return i!==t?null:t}for(var a=t,c=i;;){var p=a.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===a)return d(p),t;if(g===c)return d(p),i;g=g.sibling}throw Error(r(188))}if(a.return!==c.return)a=p,c=g;else{for(var T=!1,k=p.child;k;){if(k===a){T=!0,a=p,c=g;break}if(k===c){T=!0,c=p,a=g;break}k=k.sibling}if(!T){for(k=g.child;k;){if(k===a){T=!0,a=g,c=p;break}if(k===c){T=!0,c=g,a=p;break}k=k.sibling}if(!T)throw Error(r(189))}}if(a.alternate!==c)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:i}function y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=y(t),i!==null)return i;t=t.sibling}return null}var m=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),q=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),_=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case C:return"Profiler";case z:return"StrictMode";case ne:return"Suspense";case M:return"SuspenseList";case W:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case B:return"Portal";case q:return t.displayName||"Context";case X:return(t._context.displayName||"Context")+".Consumer";case te:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return i=t.displayName||null,i!==null?i:pe(t.type)||"Memo";case I:i=t._payload,t=t._init;try{return pe(t(i))}catch{}}return null}var ue=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Te=[],w=-1;function A(t){return{current:t}}function $(t){0>w||(t.current=Te[w],Te[w]=null,w--)}function x(t,i){w++,Te[w]=t.current,t.current=i}var ie=A(null),he=A(null),se=A(null),Se=A(null);function Je(t,i){switch(x(se,i),x(he,t),x(ie,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?S0(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=S0(i),t=D0(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$(ie),x(ie,t)}function Ge(){$(ie),$(he),$(se)}function on(t){t.memoizedState!==null&&x(Se,t);var i=ie.current,a=D0(i,t.type);i!==a&&(x(he,t),x(ie,a))}function Jl(t){he.current===t&&($(ie),$(he)),Se.current===t&&($(Se),La._currentValue=ae)}var Ur,yo;function Zn(t){if(Ur===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ur=i&&i[1]||"",yo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ur+t+yo}var Ni=!1;function Li(t,i){if(!t||Ni)return"";Ni=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var H=function(){throw Error()};if(Object.defineProperty(H.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(H,[])}catch(F){var L=F}Reflect.construct(t,[],H)}else{try{H.call()}catch(F){L=F}t.call(H.prototype)}}else{try{throw Error()}catch(F){L=F}(H=t())&&typeof H.catch=="function"&&H.catch(function(){})}}catch(F){if(F&&L&&typeof F.stack=="string")return[F.stack,L.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],k=g[1];if(T&&k){var E=T.split(`
`),N=k.split(`
`);for(p=c=0;c<E.length&&!E[c].includes("DetermineComponentFrameRoot");)c++;for(;p<N.length&&!N[p].includes("DetermineComponentFrameRoot");)p++;if(c===E.length||p===N.length)for(c=E.length-1,p=N.length-1;1<=c&&0<=p&&E[c]!==N[p];)p--;for(;1<=c&&0<=p;c--,p--)if(E[c]!==N[p]){if(c!==1||p!==1)do if(c--,p--,0>p||E[c]!==N[p]){var G=`
`+E[c].replace(" at new "," at ");return t.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",t.displayName)),G}while(1<=c&&0<=p);break}}}finally{Ni=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Zn(a):""}function mo(t,i){switch(t.tag){case 26:case 27:case 5:return Zn(t.type);case 16:return Zn("Lazy");case 13:return t.child!==i&&i!==null?Zn("Suspense Fallback"):Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 15:return Li(t.type,!1);case 11:return Li(t.type.render,!1);case 1:return Li(t.type,!0);case 31:return Zn("Activity");default:return""}}function To(t){try{var i="",a=null;do i+=mo(t,a),a=t,t=t.return;while(t);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Ri=Object.prototype.hasOwnProperty,zi=e.unstable_scheduleCallback,Zr=e.unstable_cancelCallback,Uc=e.unstable_shouldYield,Zc=e.unstable_requestPaint,Ot=e.unstable_now,Hc=e.unstable_getCurrentPriorityLevel,j=e.unstable_ImmediatePriority,ee=e.unstable_UserBlockingPriority,ge=e.unstable_NormalPriority,He=e.unstable_LowPriority,qe=e.unstable_IdlePriority,zn=e.log,vl=e.unstable_setDisableYieldValue,Nt=null,gt=null;function Ft(t){if(typeof zn=="function"&&vl(t),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(Nt,t)}catch{}}var Ke=Math.clz32?Math.clz32:E6,kl=Math.log,kn=Math.LN2;function E6(t){return t>>>=0,t===0?32:31-(kl(t)/kn|0)|0}var bo=256,vo=262144,ko=4194304;function ei(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xo(t,i,a){var c=t.pendingLanes;if(c===0)return 0;var p=0,g=t.suspendedLanes,T=t.pingedLanes;t=t.warmLanes;var k=c&134217727;return k!==0?(c=k&~g,c!==0?p=ei(c):(T&=k,T!==0?p=ei(T):a||(a=k&~t,a!==0&&(p=ei(a))))):(k=c&~g,k!==0?p=ei(k):T!==0?p=ei(T):a||(a=c&~t,a!==0&&(p=ei(a)))),p===0?0:i!==0&&i!==p&&(i&g)===0&&(g=p&-p,a=i&-i,g>=a||g===32&&(a&4194048)!==0)?i:p}function Hr(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function C6(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ch(){var t=ko;return ko<<=1,(ko&62914560)===0&&(ko=4194304),t}function Kc(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Kr(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function A6(t,i,a,c,p,g){var T=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var k=t.entanglements,E=t.expirationTimes,N=t.hiddenUpdates;for(a=T&~a;0<a;){var G=31-Ke(a),H=1<<G;k[G]=0,E[G]=-1;var L=N[G];if(L!==null)for(N[G]=null,G=0;G<L.length;G++){var F=L[G];F!==null&&(F.lane&=-536870913)}a&=~H}c!==0&&uh(t,c,0),g!==0&&p===0&&t.tag!==0&&(t.suspendedLanes|=g&~(T&~i))}function uh(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var c=31-Ke(i);t.entangledLanes|=i,t.entanglements[c]=t.entanglements[c]|1073741824|a&261930}function fh(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Ke(a),p=1<<c;p&i|t[c]&i&&(t[c]|=i),a&=~p}}function dh(t,i){var a=i&-i;return a=(a&42)!==0?1:Vc(a),(a&(t.suspendedLanes|i))!==0?0:a}function Vc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Xc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function hh(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:W0(t.type))}function ph(t,i){var a=Y.p;try{return Y.p=t,i()}finally{Y.p=a}}var xl=Math.random().toString(36).slice(2),xt="__reactFiber$"+xl,It="__reactProps$"+xl,Pi="__reactContainer$"+xl,Yc="__reactEvents$"+xl,S6="__reactListeners$"+xl,D6="__reactHandles$"+xl,gh="__reactResources$"+xl,Vr="__reactMarker$"+xl;function Qc(t){delete t[xt],delete t[It],delete t[Yc],delete t[S6],delete t[D6]}function Fi(t){var i=t[xt];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Pi]||a[xt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=P0(t);t!==null;){if(a=t[xt])return a;t=P0(t)}return i}t=a,a=t.parentNode}return null}function Ii(t){if(t=t[xt]||t[Pi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Xr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Mi(t){var i=t[gh];return i||(i=t[gh]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function bt(t){t[Vr]=!0}var yh=new Set,mh={};function ti(t,i){Gi(t,i),Gi(t+"Capture",i)}function Gi(t,i){for(mh[t]=i,t=0;t<i.length;t++)yh.add(i[t])}var _6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Th={},bh={};function O6(t){return Ri.call(bh,t)?!0:Ri.call(Th,t)?!1:_6.test(t)?bh[t]=!0:(Th[t]=!0,!1)}function Bo(t,i,a){if(O6(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function wo(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function Hn(t,i,a,c){if(c===null)t.removeAttribute(a);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+c)}}function sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vh(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function N6(t,i,a){var c=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,g=c.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return p.call(this)},set:function(T){a=""+T,g.call(this,T)}}),Object.defineProperty(t,i,{enumerable:c.enumerable}),{getValue:function(){return a},setValue:function(T){a=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Wc(t){if(!t._valueTracker){var i=vh(t)?"checked":"value";t._valueTracker=N6(t,i,""+t[i])}}function kh(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=vh(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function Eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var L6=/[\n"\\]/g;function cn(t){return t.replace(L6,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Jc(t,i,a,c,p,g,T,k){t.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.type=T:t.removeAttribute("type"),i!=null?T==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+sn(i)):t.value!==""+sn(i)&&(t.value=""+sn(i)):T!=="submit"&&T!=="reset"||t.removeAttribute("value"),i!=null?eu(t,T,sn(i)):a!=null?eu(t,T,sn(a)):c!=null&&t.removeAttribute("value"),p==null&&g!=null&&(t.defaultChecked=!!g),p!=null&&(t.checked=p&&typeof p!="function"&&typeof p!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?t.name=""+sn(k):t.removeAttribute("name")}function xh(t,i,a,c,p,g,T,k){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.type=g),i!=null||a!=null){if(!(g!=="submit"&&g!=="reset"||i!=null)){Wc(t);return}a=a!=null?""+sn(a):"",i=i!=null?""+sn(i):a,k||i===t.value||(t.value=i),t.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,t.checked=k?t.checked:!!c,t.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(t.name=T),Wc(t)}function eu(t,i,a){i==="number"&&Eo(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qi(t,i,a,c){if(t=t.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<t.length;a++)p=i.hasOwnProperty("$"+t[a].value),t[a].selected!==p&&(t[a].selected=p),p&&c&&(t[a].defaultSelected=!0)}else{for(a=""+sn(a),i=null,p=0;p<t.length;p++){if(t[p].value===a){t[p].selected=!0,c&&(t[p].defaultSelected=!0);return}i!==null||t[p].disabled||(i=t[p])}i!==null&&(i.selected=!0)}}function Bh(t,i,a){if(i!=null&&(i=""+sn(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+sn(a):""}function wh(t,i,a,c){if(i==null){if(c!=null){if(a!=null)throw Error(r(92));if(ue(c)){if(1<c.length)throw Error(r(93));c=c[0]}a=c}a==null&&(a=""),i=a}a=sn(i),t.defaultValue=a,c=t.textContent,c===a&&c!==""&&c!==null&&(t.value=c),Wc(t)}function $i(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var R6=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eh(t,i,a){var c=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?c?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":c?t.setProperty(i,a):typeof a!="number"||a===0||R6.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Ch(t,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,a!=null){for(var c in a)!a.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?t.setProperty(c,""):c==="float"?t.cssFloat="":t[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&a[p]!==c&&Eh(t,p,c)}else for(var g in i)i.hasOwnProperty(g)&&Eh(t,g,i[g])}function tu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z6=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P6=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Co(t){return P6.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Kn(){}var nu=null;function lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ji=null,Ui=null;function Ah(t){var i=Ii(t);if(i&&(t=i.stateNode)){var a=t[It]||null;e:switch(t=i.stateNode,i.type){case"input":if(Jc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var p=c[It]||null;if(!p)throw Error(r(90));Jc(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<a.length;i++)c=a[i],c.form===t.form&&kh(c)}break e;case"textarea":Bh(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&qi(t,!!a.multiple,i,!1)}}}var iu=!1;function Sh(t,i,a){if(iu)return t(i,a);iu=!0;try{var c=t(i);return c}finally{if(iu=!1,(ji!==null||Ui!==null)&&(hs(),ji&&(i=ji,t=Ui,Ui=ji=null,Ah(i),t)))for(i=0;i<t.length;i++)Ah(t[i])}}function Yr(t,i){var a=t.stateNode;if(a===null)return null;var c=a[It]||null;if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Vn)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{ru=!1}var Bl=null,au=null,Ao=null;function Dh(){if(Ao)return Ao;var t,i=au,a=i.length,c,p="value"in Bl?Bl.value:Bl.textContent,g=p.length;for(t=0;t<a&&i[t]===p[t];t++);var T=a-t;for(c=1;c<=T&&i[a-c]===p[g-c];c++);return Ao=p.slice(t,1<c?1-c:void 0)}function So(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function _h(){return!1}function Mt(t){function i(a,c,p,g,T){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Do:_h,this.isPropagationStopped=_h,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),i}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_o=Mt(ni),Wr=m({},ni,{view:0,detail:0}),F6=Mt(Wr),ou,su,Jr,Oo=m({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jr&&(Jr&&t.type==="mousemove"?(ou=t.screenX-Jr.screenX,su=t.screenY-Jr.screenY):su=ou=0,Jr=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Oh=Mt(Oo),I6=m({},Oo,{dataTransfer:0}),M6=Mt(I6),G6=m({},Wr,{relatedTarget:0}),cu=Mt(G6),q6=m({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),$6=Mt(q6),j6=m({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U6=Mt(j6),Z6=m({},ni,{data:0}),Nh=Mt(Z6),H6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X6(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=V6[t])?!!i[t]:!1}function uu(){return X6}var Y6=m({},Wr,{key:function(t){if(t.key){var i=H6[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q6=Mt(Y6),W6=m({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Mt(W6),J6=m({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),ey=Mt(J6),ty=m({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=Mt(ty),ly=m({},Oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),iy=Mt(ly),ry=m({},ni,{newState:0,oldState:0}),ay=Mt(ry),oy=[9,13,27,32],fu=Vn&&"CompositionEvent"in window,ea=null;Vn&&"documentMode"in document&&(ea=document.documentMode);var sy=Vn&&"TextEvent"in window&&!ea,Rh=Vn&&(!fu||ea&&8<ea&&11>=ea),zh=" ",Ph=!1;function Fh(t,i){switch(t){case"keyup":return oy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function cy(t,i){switch(t){case"compositionend":return Ih(i);case"keypress":return i.which!==32?null:(Ph=!0,zh);case"textInput":return t=i.data,t===zh&&Ph?null:t;default:return null}}function uy(t,i){if(Zi)return t==="compositionend"||!fu&&Fh(t,i)?(t=Dh(),Ao=au=Bl=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rh&&i.locale!=="ko"?null:i.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!fy[t.type]:i==="textarea"}function Gh(t,i,a,c){ji?Ui?Ui.push(c):Ui=[c]:ji=c,i=vs(i,"onChange"),0<i.length&&(a=new _o("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var ta=null,na=null;function dy(t){x0(t,0)}function No(t){var i=Xr(t);if(kh(i))return t}function qh(t,i){if(t==="change")return i}var $h=!1;if(Vn){var du;if(Vn){var hu="oninput"in document;if(!hu){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),hu=typeof jh.oninput=="function"}du=hu}else du=!1;$h=du&&(!document.documentMode||9<document.documentMode)}function Uh(){ta&&(ta.detachEvent("onpropertychange",Zh),na=ta=null)}function Zh(t){if(t.propertyName==="value"&&No(na)){var i=[];Gh(i,na,t,lu(t)),Sh(dy,i)}}function hy(t,i,a){t==="focusin"?(Uh(),ta=i,na=a,ta.attachEvent("onpropertychange",Zh)):t==="focusout"&&Uh()}function py(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return No(na)}function gy(t,i){if(t==="click")return No(i)}function yy(t,i){if(t==="input"||t==="change")return No(i)}function my(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Xt=typeof Object.is=="function"?Object.is:my;function la(t,i){if(Xt(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!Ri.call(i,p)||!Xt(t[p],i[p]))return!1}return!0}function Hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kh(t,i){var a=Hh(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Hh(a)}}function Vh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Xh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Eo(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Eo(t.document)}return i}function pu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ty=Vn&&"documentMode"in document&&11>=document.documentMode,Hi=null,gu=null,ia=null,yu=!1;function Yh(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Hi==null||Hi!==Eo(c)||(c=Hi,"selectionStart"in c&&pu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ia&&la(ia,c)||(ia=c,c=vs(gu,"onSelect"),0<c.length&&(i=new _o("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=Hi)))}function li(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ki={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionrun:li("Transition","TransitionRun"),transitionstart:li("Transition","TransitionStart"),transitioncancel:li("Transition","TransitionCancel"),transitionend:li("Transition","TransitionEnd")},mu={},Qh={};Vn&&(Qh=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function ii(t){if(mu[t])return mu[t];if(!Ki[t])return t;var i=Ki[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Qh)return mu[t]=i[a];return t}var Wh=ii("animationend"),Jh=ii("animationiteration"),ep=ii("animationstart"),by=ii("transitionrun"),vy=ii("transitionstart"),ky=ii("transitioncancel"),tp=ii("transitionend"),np=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function xn(t,i){np.set(t,i),ti(i,[t])}var Lo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},un=[],Vi=0,bu=0;function Ro(){for(var t=Vi,i=bu=Vi=0;i<t;){var a=un[i];un[i++]=null;var c=un[i];un[i++]=null;var p=un[i];un[i++]=null;var g=un[i];if(un[i++]=null,c!==null&&p!==null){var T=c.pending;T===null?p.next=p:(p.next=T.next,T.next=p),c.pending=p}g!==0&&lp(a,p,g)}}function zo(t,i,a,c){un[Vi++]=t,un[Vi++]=i,un[Vi++]=a,un[Vi++]=c,bu|=c,t.lanes|=c,t=t.alternate,t!==null&&(t.lanes|=c)}function vu(t,i,a,c){return zo(t,i,a,c),Po(t)}function ri(t,i){return zo(t,null,null,i),Po(t)}function lp(t,i,a){t.lanes|=a;var c=t.alternate;c!==null&&(c.lanes|=a);for(var p=!1,g=t.return;g!==null;)g.childLanes|=a,c=g.alternate,c!==null&&(c.childLanes|=a),g.tag===22&&(t=g.stateNode,t===null||t._visibility&1||(p=!0)),t=g,g=g.return;return t.tag===3?(g=t.stateNode,p&&i!==null&&(p=31-Ke(a),t=g.hiddenUpdates,c=t[p],c===null?t[p]=[i]:c.push(i),i.lane=a|536870912),g):null}function Po(t){if(50<Ca)throw Ca=0,_f=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Xi={};function xy(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,i,a,c){return new xy(t,i,a,c)}function ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xn(t,i){var a=t.alternate;return a===null?(a=Yt(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ip(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Fo(t,i,a,c,p,g){var T=0;if(c=t,typeof t=="function")ku(t)&&(T=1);else if(typeof t=="string")T=Am(t,a,ie.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case W:return t=Yt(31,a,i,p),t.elementType=W,t.lanes=g,t;case R:return ai(a.children,p,g,i);case z:T=8,p|=24;break;case C:return t=Yt(12,a,i,p|2),t.elementType=C,t.lanes=g,t;case ne:return t=Yt(13,a,i,p),t.elementType=ne,t.lanes=g,t;case M:return t=Yt(19,a,i,p),t.elementType=M,t.lanes=g,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case q:T=10;break e;case X:T=9;break e;case te:T=11;break e;case K:T=14;break e;case I:T=16,c=null;break e}T=29,a=Error(r(130,t===null?"null":typeof t,"")),c=null}return i=Yt(T,a,i,p),i.elementType=t,i.type=c,i.lanes=g,i}function ai(t,i,a,c){return t=Yt(7,t,c,i),t.lanes=a,t}function xu(t,i,a){return t=Yt(6,t,null,i),t.lanes=a,t}function rp(t){var i=Yt(18,null,null,0);return i.stateNode=t,i}function Bu(t,i,a){return i=Yt(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ap=new WeakMap;function fn(t,i){if(typeof t=="object"&&t!==null){var a=ap.get(t);return a!==void 0?a:(i={value:t,source:i,stack:To(i)},ap.set(t,i),i)}return{value:t,source:i,stack:To(i)}}var Yi=[],Qi=0,Io=null,ra=0,dn=[],hn=0,wl=null,Pn=1,Fn="";function Yn(t,i){Yi[Qi++]=ra,Yi[Qi++]=Io,Io=t,ra=i}function op(t,i,a){dn[hn++]=Pn,dn[hn++]=Fn,dn[hn++]=wl,wl=t;var c=Pn;t=Fn;var p=32-Ke(c)-1;c&=~(1<<p),a+=1;var g=32-Ke(i)+p;if(30<g){var T=p-p%5;g=(c&(1<<T)-1).toString(32),c>>=T,p-=T,Pn=1<<32-Ke(i)+p|a<<p|c,Fn=g+t}else Pn=1<<g|a<<p|c,Fn=t}function wu(t){t.return!==null&&(Yn(t,1),op(t,1,0))}function Eu(t){for(;t===Io;)Io=Yi[--Qi],Yi[Qi]=null,ra=Yi[--Qi],Yi[Qi]=null;for(;t===wl;)wl=dn[--hn],dn[hn]=null,Fn=dn[--hn],dn[hn]=null,Pn=dn[--hn],dn[hn]=null}function sp(t,i){dn[hn++]=Pn,dn[hn++]=Fn,dn[hn++]=wl,Pn=i.id,Fn=i.overflow,wl=t}var Bt=null,Qe=null,Ne=!1,El=null,pn=!1,Cu=Error(r(519));function Cl(t){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw aa(fn(i,t)),Cu}function cp(t){var i=t.stateNode,a=t.type,c=t.memoizedProps;switch(i[xt]=t,i[It]=c,a){case"dialog":Ce("cancel",i),Ce("close",i);break;case"iframe":case"object":case"embed":Ce("load",i);break;case"video":case"audio":for(a=0;a<Sa.length;a++)Ce(Sa[a],i);break;case"source":Ce("error",i);break;case"img":case"image":case"link":Ce("error",i),Ce("load",i);break;case"details":Ce("toggle",i);break;case"input":Ce("invalid",i),xh(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ce("invalid",i);break;case"textarea":Ce("invalid",i),wh(i,c.value,c.defaultValue,c.children)}a=c.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||c.suppressHydrationWarning===!0||C0(i.textContent,a)?(c.popover!=null&&(Ce("beforetoggle",i),Ce("toggle",i)),c.onScroll!=null&&Ce("scroll",i),c.onScrollEnd!=null&&Ce("scrollend",i),c.onClick!=null&&(i.onclick=Kn),i=!0):i=!1,i||Cl(t,!0)}function up(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:pn=!1;return;case 27:case 3:pn=!0;return;default:Bt=Bt.return}}function Wi(t){if(t!==Bt)return!1;if(!Ne)return up(t),Ne=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Zf(t.type,t.memoizedProps)),a=!a),a&&Qe&&Cl(t),up(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=z0(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qe=z0(t)}else i===27?(i=Qe,Gl(t.type)?(t=Yf,Yf=null,Qe=t):Qe=i):Qe=Bt?yn(t.stateNode.nextSibling):null;return!0}function oi(){Qe=Bt=null,Ne=!1}function Au(){var t=El;return t!==null&&(jt===null?jt=t:jt.push.apply(jt,t),El=null),t}function aa(t){El===null?El=[t]:El.push(t)}var Su=A(null),si=null,Qn=null;function Al(t,i,a){x(Su,i._currentValue),i._currentValue=a}function Wn(t){t._currentValue=Su.current,$(Su)}function Du(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function _u(t,i,a,c){var p=t.child;for(p!==null&&(p.return=t);p!==null;){var g=p.dependencies;if(g!==null){var T=p.child;g=g.firstContext;e:for(;g!==null;){var k=g;g=p;for(var E=0;E<i.length;E++)if(k.context===i[E]){g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Du(g.return,a,t),c||(T=null);break e}g=k.next}}else if(p.tag===18){if(T=p.return,T===null)throw Error(r(341));T.lanes|=a,g=T.alternate,g!==null&&(g.lanes|=a),Du(T,a,t),T=null}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===t){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}}function Ji(t,i,a,c){t=null;for(var p=i,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var T=p.alternate;if(T===null)throw Error(r(387));if(T=T.memoizedProps,T!==null){var k=p.type;Xt(p.pendingProps.value,T.value)||(t!==null?t.push(k):t=[k])}}else if(p===Se.current){if(T=p.alternate,T===null)throw Error(r(387));T.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(t!==null?t.push(La):t=[La])}p=p.return}t!==null&&_u(i,t,a,c),i.flags|=262144}function Mo(t){for(t=t.firstContext;t!==null;){if(!Xt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ci(t){si=t,Qn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wt(t){return fp(si,t)}function Go(t,i){return si===null&&ci(t),fp(t,i)}function fp(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Qn===null){if(t===null)throw Error(r(308));Qn=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Qn=Qn.next=i;return a}var By=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,c){t.push(c)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},wy=e.unstable_scheduleCallback,Ey=e.unstable_NormalPriority,ot={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new By,data:new Map,refCount:0}}function oa(t){t.refCount--,t.refCount===0&&wy(Ey,function(){t.controller.abort()})}var sa=null,Nu=0,er=0,tr=null;function Cy(t,i){if(sa===null){var a=sa=[];Nu=0,er=Pf(),tr={status:"pending",value:void 0,then:function(c){a.push(c)}}}return Nu++,i.then(dp,dp),i}function dp(){if(--Nu===0&&sa!==null){tr!==null&&(tr.status="fulfilled");var t=sa;sa=null,er=0,tr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ay(t,i){var a=[],c={status:"pending",value:null,reason:null,then:function(p){a.push(p)}};return t.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<a.length;p++)(0,a[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<a.length;p++)(0,a[p])(void 0)}),c}var hp=P.S;P.S=function(t,i){Y2=Ot(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Cy(t,i),hp!==null&&hp(t,i)};var ui=A(null);function Lu(){var t=ui.current;return t!==null?t:Ve.pooledCache}function qo(t,i){i===null?x(ui,ui.current):x(ui,i.pool)}function pp(){var t=Lu();return t===null?null:{parent:ot._currentValue,pool:t}}var nr=Error(r(460)),Ru=Error(r(474)),$o=Error(r(542)),jo={then:function(){}};function gp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yp(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Kn,Kn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Tp(t),t;default:if(typeof i.status=="string")i.then(Kn,Kn);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Tp(t),t}throw di=i,nr}}function fi(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(di=a,nr):a}}var di=null;function mp(){if(di===null)throw Error(r(459));var t=di;return di=null,t}function Tp(t){if(t===nr||t===$o)throw Error(r(483))}var lr=null,ca=0;function Uo(t){var i=ca;return ca+=1,lr===null&&(lr=[]),yp(lr,t,i)}function ua(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Zo(t,i){throw i.$$typeof===b?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function bp(t){function i(D,S){if(t){var O=D.deletions;O===null?(D.deletions=[S],D.flags|=16):O.push(S)}}function a(D,S){if(!t)return null;for(;S!==null;)i(D,S),S=S.sibling;return null}function c(D){for(var S=new Map;D!==null;)D.key!==null?S.set(D.key,D):S.set(D.index,D),D=D.sibling;return S}function p(D,S){return D=Xn(D,S),D.index=0,D.sibling=null,D}function g(D,S,O){return D.index=O,t?(O=D.alternate,O!==null?(O=O.index,O<S?(D.flags|=67108866,S):O):(D.flags|=67108866,S)):(D.flags|=1048576,S)}function T(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function k(D,S,O,U){return S===null||S.tag!==6?(S=xu(O,D.mode,U),S.return=D,S):(S=p(S,O),S.return=D,S)}function E(D,S,O,U){var ce=O.type;return ce===R?G(D,S,O.props.children,U,O.key):S!==null&&(S.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===I&&fi(ce)===S.type)?(S=p(S,O.props),ua(S,O),S.return=D,S):(S=Fo(O.type,O.key,O.props,null,D.mode,U),ua(S,O),S.return=D,S)}function N(D,S,O,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==O.containerInfo||S.stateNode.implementation!==O.implementation?(S=Bu(O,D.mode,U),S.return=D,S):(S=p(S,O.children||[]),S.return=D,S)}function G(D,S,O,U,ce){return S===null||S.tag!==7?(S=ai(O,D.mode,U,ce),S.return=D,S):(S=p(S,O),S.return=D,S)}function H(D,S,O){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=xu(""+S,D.mode,O),S.return=D,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case v:return O=Fo(S.type,S.key,S.props,null,D.mode,O),ua(O,S),O.return=D,O;case B:return S=Bu(S,D.mode,O),S.return=D,S;case I:return S=fi(S),H(D,S,O)}if(ue(S)||V(S))return S=ai(S,D.mode,O,null),S.return=D,S;if(typeof S.then=="function")return H(D,Uo(S),O);if(S.$$typeof===q)return H(D,Go(D,S),O);Zo(D,S)}return null}function L(D,S,O,U){var ce=S!==null?S.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return ce!==null?null:k(D,S,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case v:return O.key===ce?E(D,S,O,U):null;case B:return O.key===ce?N(D,S,O,U):null;case I:return O=fi(O),L(D,S,O,U)}if(ue(O)||V(O))return ce!==null?null:G(D,S,O,U,null);if(typeof O.then=="function")return L(D,S,Uo(O),U);if(O.$$typeof===q)return L(D,S,Go(D,O),U);Zo(D,O)}return null}function F(D,S,O,U,ce){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return D=D.get(O)||null,k(S,D,""+U,ce);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return D=D.get(U.key===null?O:U.key)||null,E(S,D,U,ce);case B:return D=D.get(U.key===null?O:U.key)||null,N(S,D,U,ce);case I:return U=fi(U),F(D,S,O,U,ce)}if(ue(U)||V(U))return D=D.get(O)||null,G(S,D,U,ce,null);if(typeof U.then=="function")return F(D,S,O,Uo(U),ce);if(U.$$typeof===q)return F(D,S,O,Go(S,U),ce);Zo(S,U)}return null}function re(D,S,O,U){for(var ce=null,Re=null,oe=S,Be=S=0,_e=null;oe!==null&&Be<O.length;Be++){oe.index>Be?(_e=oe,oe=null):_e=oe.sibling;var ze=L(D,oe,O[Be],U);if(ze===null){oe===null&&(oe=_e);break}t&&oe&&ze.alternate===null&&i(D,oe),S=g(ze,S,Be),Re===null?ce=ze:Re.sibling=ze,Re=ze,oe=_e}if(Be===O.length)return a(D,oe),Ne&&Yn(D,Be),ce;if(oe===null){for(;Be<O.length;Be++)oe=H(D,O[Be],U),oe!==null&&(S=g(oe,S,Be),Re===null?ce=oe:Re.sibling=oe,Re=oe);return Ne&&Yn(D,Be),ce}for(oe=c(oe);Be<O.length;Be++)_e=F(oe,D,Be,O[Be],U),_e!==null&&(t&&_e.alternate!==null&&oe.delete(_e.key===null?Be:_e.key),S=g(_e,S,Be),Re===null?ce=_e:Re.sibling=_e,Re=_e);return t&&oe.forEach(function(Zl){return i(D,Zl)}),Ne&&Yn(D,Be),ce}function de(D,S,O,U){if(O==null)throw Error(r(151));for(var ce=null,Re=null,oe=S,Be=S=0,_e=null,ze=O.next();oe!==null&&!ze.done;Be++,ze=O.next()){oe.index>Be?(_e=oe,oe=null):_e=oe.sibling;var Zl=L(D,oe,ze.value,U);if(Zl===null){oe===null&&(oe=_e);break}t&&oe&&Zl.alternate===null&&i(D,oe),S=g(Zl,S,Be),Re===null?ce=Zl:Re.sibling=Zl,Re=Zl,oe=_e}if(ze.done)return a(D,oe),Ne&&Yn(D,Be),ce;if(oe===null){for(;!ze.done;Be++,ze=O.next())ze=H(D,ze.value,U),ze!==null&&(S=g(ze,S,Be),Re===null?ce=ze:Re.sibling=ze,Re=ze);return Ne&&Yn(D,Be),ce}for(oe=c(oe);!ze.done;Be++,ze=O.next())ze=F(oe,D,Be,ze.value,U),ze!==null&&(t&&ze.alternate!==null&&oe.delete(ze.key===null?Be:ze.key),S=g(ze,S,Be),Re===null?ce=ze:Re.sibling=ze,Re=ze);return t&&oe.forEach(function(Im){return i(D,Im)}),Ne&&Yn(D,Be),ce}function Ue(D,S,O,U){if(typeof O=="object"&&O!==null&&O.type===R&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case v:e:{for(var ce=O.key;S!==null;){if(S.key===ce){if(ce=O.type,ce===R){if(S.tag===7){a(D,S.sibling),U=p(S,O.props.children),U.return=D,D=U;break e}}else if(S.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===I&&fi(ce)===S.type){a(D,S.sibling),U=p(S,O.props),ua(U,O),U.return=D,D=U;break e}a(D,S);break}else i(D,S);S=S.sibling}O.type===R?(U=ai(O.props.children,D.mode,U,O.key),U.return=D,D=U):(U=Fo(O.type,O.key,O.props,null,D.mode,U),ua(U,O),U.return=D,D=U)}return T(D);case B:e:{for(ce=O.key;S!==null;){if(S.key===ce)if(S.tag===4&&S.stateNode.containerInfo===O.containerInfo&&S.stateNode.implementation===O.implementation){a(D,S.sibling),U=p(S,O.children||[]),U.return=D,D=U;break e}else{a(D,S);break}else i(D,S);S=S.sibling}U=Bu(O,D.mode,U),U.return=D,D=U}return T(D);case I:return O=fi(O),Ue(D,S,O,U)}if(ue(O))return re(D,S,O,U);if(V(O)){if(ce=V(O),typeof ce!="function")throw Error(r(150));return O=ce.call(O),de(D,S,O,U)}if(typeof O.then=="function")return Ue(D,S,Uo(O),U);if(O.$$typeof===q)return Ue(D,S,Go(D,O),U);Zo(D,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,S!==null&&S.tag===6?(a(D,S.sibling),U=p(S,O),U.return=D,D=U):(a(D,S),U=xu(O,D.mode,U),U.return=D,D=U),T(D)):a(D,S)}return function(D,S,O,U){try{ca=0;var ce=Ue(D,S,O,U);return lr=null,ce}catch(oe){if(oe===nr||oe===$o)throw oe;var Re=Yt(29,oe,null,D.mode);return Re.lanes=U,Re.return=D,Re}}}var hi=bp(!0),vp=bp(!1),Sl=!1;function zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Dl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function _l(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Pe&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=Po(t),lp(t,null,a),i}return zo(t,c,i,a),Po(t)}function fa(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,fh(t,a)}}function Fu(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};g===null?p=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?p=g=i:g=g.next=i}else p=g=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var Iu=!1;function da(){if(Iu){var t=tr;if(t!==null)throw t}}function ha(t,i,a,c){Iu=!1;var p=t.updateQueue;Sl=!1;var g=p.firstBaseUpdate,T=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var E=k,N=E.next;E.next=null,T===null?g=N:T.next=N,T=E;var G=t.alternate;G!==null&&(G=G.updateQueue,k=G.lastBaseUpdate,k!==T&&(k===null?G.firstBaseUpdate=N:k.next=N,G.lastBaseUpdate=E))}if(g!==null){var H=p.baseState;T=0,G=N=E=null,k=g;do{var L=k.lane&-536870913,F=L!==k.lane;if(F?(De&L)===L:(c&L)===L){L!==0&&L===er&&(Iu=!0),G!==null&&(G=G.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var re=t,de=k;L=i;var Ue=a;switch(de.tag){case 1:if(re=de.payload,typeof re=="function"){H=re.call(Ue,H,L);break e}H=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=de.payload,L=typeof re=="function"?re.call(Ue,H,L):re,L==null)break e;H=m({},H,L);break e;case 2:Sl=!0}}L=k.callback,L!==null&&(t.flags|=64,F&&(t.flags|=8192),F=p.callbacks,F===null?p.callbacks=[L]:F.push(L))}else F={lane:L,tag:k.tag,payload:k.payload,callback:k.callback,next:null},G===null?(N=G=F,E=H):G=G.next=F,T|=L;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;F=k,k=F.next,F.next=null,p.lastBaseUpdate=F,p.shared.pending=null}}while(!0);G===null&&(E=H),p.baseState=E,p.firstBaseUpdate=N,p.lastBaseUpdate=G,g===null&&(p.shared.lanes=0),zl|=T,t.lanes=T,t.memoizedState=H}}function kp(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function xp(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)kp(a[t],i)}var ir=A(null),Ho=A(0);function Bp(t,i){t=ol,x(Ho,t),x(ir,i),ol=t|i.baseLanes}function Mu(){x(Ho,ol),x(ir,ir.current)}function Gu(){ol=Ho.current,$(ir),$(Ho)}var Qt=A(null),gn=null;function Ol(t){var i=t.alternate;x(rt,rt.current&1),x(Qt,t),gn===null&&(i===null||ir.current!==null||i.memoizedState!==null)&&(gn=t)}function qu(t){x(rt,rt.current),x(Qt,t),gn===null&&(gn=t)}function wp(t){t.tag===22?(x(rt,rt.current),x(Qt,t),gn===null&&(gn=t)):Nl()}function Nl(){x(rt,rt.current),x(Qt,Qt.current)}function Wt(t){$(Qt),gn===t&&(gn=null),$(rt)}var rt=A(0);function Ko(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vf(a)||Xf(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jn=0,be=null,$e=null,st=null,Vo=!1,rr=!1,pi=!1,Xo=0,pa=0,ar=null,Sy=0;function tt(){throw Error(r(321))}function $u(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Xt(t[a],i[a]))return!1;return!0}function ju(t,i,a,c,p,g){return Jn=g,be=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?o2:rf,pi=!1,g=a(c,p),pi=!1,rr&&(g=Cp(i,a,c,p)),Ep(t),g}function Ep(t){P.H=ma;var i=$e!==null&&$e.next!==null;if(Jn=0,st=$e=be=null,Vo=!1,pa=0,ar=null,i)throw Error(r(300));t===null||ct||(t=t.dependencies,t!==null&&Mo(t)&&(ct=!0))}function Cp(t,i,a,c){be=t;var p=0;do{if(rr&&(ar=null),pa=0,rr=!1,25<=p)throw Error(r(301));if(p+=1,st=$e=null,t.updateQueue!=null){var g=t.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}P.H=s2,g=i(a,c)}while(rr);return g}function Dy(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?ga(i):i,t=t.useState()[0],($e!==null?$e.memoizedState:null)!==t&&(be.flags|=1024),i}function Uu(){var t=Xo!==0;return Xo=0,t}function Zu(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function Hu(t){if(Vo){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Vo=!1}Jn=0,st=$e=be=null,rr=!1,pa=Xo=0,ar=null}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?be.memoizedState=st=t:st=st.next=t,st}function at(){if($e===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var i=st===null?be.memoizedState:st.next;if(i!==null)st=i,$e=t;else{if(t===null)throw be.alternate===null?Error(r(467)):Error(r(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},st===null?be.memoizedState=st=t:st=st.next=t}return st}function Yo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ga(t){var i=pa;return pa+=1,ar===null&&(ar=[]),t=yp(ar,t,i),i=be,(st===null?i.memoizedState:st.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?o2:rf),t}function Qo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ga(t);if(t.$$typeof===q)return wt(t)}throw Error(r(438,String(t)))}function Ku(t){var i=null,a=be.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var c=be.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Yo(),be.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),c=0;c<t;c++)a[c]=_;return i.index++,a}function el(t,i){return typeof i=="function"?i(t):i}function Wo(t){var i=at();return Vu(i,$e,t)}function Vu(t,i,a){var c=t.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=a;var p=t.baseQueue,g=c.pending;if(g!==null){if(p!==null){var T=p.next;p.next=g.next,g.next=T}i.baseQueue=p=g,c.pending=null}if(g=t.baseState,p===null)t.memoizedState=g;else{i=p.next;var k=T=null,E=null,N=i,G=!1;do{var H=N.lane&-536870913;if(H!==N.lane?(De&H)===H:(Jn&H)===H){var L=N.revertLane;if(L===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),H===er&&(G=!0);else if((Jn&L)===L){N=N.next,L===er&&(G=!0);continue}else H={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},E===null?(k=E=H,T=g):E=E.next=H,be.lanes|=L,zl|=L;H=N.action,pi&&a(g,H),g=N.hasEagerState?N.eagerState:a(g,H)}else L={lane:H,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},E===null?(k=E=L,T=g):E=E.next=L,be.lanes|=H,zl|=H;N=N.next}while(N!==null&&N!==i);if(E===null?T=g:E.next=k,!Xt(g,t.memoizedState)&&(ct=!0,G&&(a=tr,a!==null)))throw a;t.memoizedState=g,t.baseState=T,t.baseQueue=E,c.lastRenderedState=g}return p===null&&(c.lanes=0),[t.memoizedState,c.dispatch]}function Xu(t){var i=at(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var c=a.dispatch,p=a.pending,g=i.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do g=t(g,T.action),T=T.next;while(T!==p);Xt(g,i.memoizedState)||(ct=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Ap(t,i,a){var c=be,p=at(),g=Ne;if(g){if(a===void 0)throw Error(r(407));a=a()}else a=i();var T=!Xt(($e||p).memoizedState,a);if(T&&(p.memoizedState=a,ct=!0),p=p.queue,Wu(_p.bind(null,c,p,t),[t]),p.getSnapshot!==i||T||st!==null&&st.memoizedState.tag&1){if(c.flags|=2048,or(9,{destroy:void 0},Dp.bind(null,c,p,a,i),null),Ve===null)throw Error(r(349));g||(Jn&127)!==0||Sp(c,i,a)}return a}function Sp(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=be.updateQueue,i===null?(i=Yo(),be.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Dp(t,i,a,c){i.value=a,i.getSnapshot=c,Op(i)&&Np(t)}function _p(t,i,a){return a(function(){Op(i)&&Np(t)})}function Op(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Xt(t,a)}catch{return!0}}function Np(t){var i=ri(t,2);i!==null&&Ut(i,t,2)}function Yu(t){var i=Lt();if(typeof t=="function"){var a=t;if(t=a(),pi){Ft(!0);try{a()}finally{Ft(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:t},i}function Lp(t,i,a,c){return t.baseState=a,Vu(t,$e,typeof c=="function"?c:el)}function _y(t,i,a,c,p){if(ts(t))throw Error(r(485));if(t=i.action,t!==null){var g={payload:p,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};P.T!==null?a(!0):g.isTransition=!1,c(g),a=i.pending,a===null?(g.next=i.pending=g,Rp(i,g)):(g.next=a.next,i.pending=a.next=g)}}function Rp(t,i){var a=i.action,c=i.payload,p=t.state;if(i.isTransition){var g=P.T,T={};P.T=T;try{var k=a(p,c),E=P.S;E!==null&&E(T,k),zp(t,i,k)}catch(N){Qu(t,i,N)}finally{g!==null&&T.types!==null&&(g.types=T.types),P.T=g}}else try{g=a(p,c),zp(t,i,g)}catch(N){Qu(t,i,N)}}function zp(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(c){Pp(t,i,c)},function(c){return Qu(t,i,c)}):Pp(t,i,a)}function Pp(t,i,a){i.status="fulfilled",i.value=a,Fp(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,Rp(t,a)))}function Qu(t,i,a){var c=t.pending;if(t.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=a,Fp(i),i=i.next;while(i!==c)}t.action=null}function Fp(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Ip(t,i){return i}function Mp(t,i){if(Ne){var a=Ve.formState;if(a!==null){e:{var c=be;if(Ne){if(Qe){t:{for(var p=Qe,g=pn;p.nodeType!==8;){if(!g){p=null;break t}if(p=yn(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Qe=yn(p.nextSibling),c=p.data==="F!";break e}}Cl(c)}c=!1}c&&(i=a[0])}}return a=Lt(),a.memoizedState=a.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:i},a.queue=c,a=i2.bind(null,be,c),c.dispatch=a,c=Yu(!1),g=lf.bind(null,be,!1,c.queue),c=Lt(),p={state:i,dispatch:null,action:t,pending:null},c.queue=p,a=_y.bind(null,be,p,g,a),p.dispatch=a,c.memoizedState=t,[i,a,!1]}function Gp(t){var i=at();return qp(i,$e,t)}function qp(t,i,a){if(i=Vu(t,i,Ip)[0],t=Wo(el)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=ga(i)}catch(T){throw T===nr?$o:T}else c=i;i=at();var p=i.queue,g=p.dispatch;return a!==i.memoizedState&&(be.flags|=2048,or(9,{destroy:void 0},Oy.bind(null,p,a),null)),[c,g,t]}function Oy(t,i){t.action=i}function $p(t){var i=at(),a=$e;if(a!==null)return qp(i,a,t);at(),i=i.memoizedState,a=at();var c=a.queue.dispatch;return a.memoizedState=t,[i,c,!1]}function or(t,i,a,c){return t={tag:t,create:a,deps:c,inst:i,next:null},i=be.updateQueue,i===null&&(i=Yo(),be.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t),t}function jp(){return at().memoizedState}function Jo(t,i,a,c){var p=Lt();be.flags|=t,p.memoizedState=or(1|i,{destroy:void 0},a,c===void 0?null:c)}function es(t,i,a,c){var p=at();c=c===void 0?null:c;var g=p.memoizedState.inst;$e!==null&&c!==null&&$u(c,$e.memoizedState.deps)?p.memoizedState=or(i,g,a,c):(be.flags|=t,p.memoizedState=or(1|i,g,a,c))}function Up(t,i){Jo(8390656,8,t,i)}function Wu(t,i){es(2048,8,t,i)}function Ny(t){be.flags|=4;var i=be.updateQueue;if(i===null)i=Yo(),be.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function Zp(t){var i=at().memoizedState;return Ny({ref:i,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Hp(t,i){return es(4,2,t,i)}function Kp(t,i){return es(4,4,t,i)}function Vp(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xp(t,i,a){a=a!=null?a.concat([t]):null,es(4,4,Vp.bind(null,i,t),a)}function Ju(){}function Yp(t,i){var a=at();i=i===void 0?null:i;var c=a.memoizedState;return i!==null&&$u(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Qp(t,i){var a=at();i=i===void 0?null:i;var c=a.memoizedState;if(i!==null&&$u(i,c[1]))return c[0];if(c=t(),pi){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[c,i],c}function ef(t,i,a){return a===void 0||(Jn&1073741824)!==0&&(De&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=W2(),be.lanes|=t,zl|=t,a)}function Wp(t,i,a,c){return Xt(a,i)?a:ir.current!==null?(t=ef(t,a,c),Xt(t,i)||(ct=!0),t):(Jn&42)===0||(Jn&1073741824)!==0&&(De&261930)===0?(ct=!0,t.memoizedState=a):(t=W2(),be.lanes|=t,zl|=t,i)}function Jp(t,i,a,c,p){var g=Y.p;Y.p=g!==0&&8>g?g:8;var T=P.T,k={};P.T=k,lf(t,!1,i,a);try{var E=p(),N=P.S;if(N!==null&&N(k,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var G=Ay(E,c);ya(t,i,G,tn(t))}else ya(t,i,c,tn(t))}catch(H){ya(t,i,{then:function(){},status:"rejected",reason:H},tn())}finally{Y.p=g,T!==null&&k.types!==null&&(T.types=k.types),P.T=T}}function Ly(){}function tf(t,i,a,c){if(t.tag!==5)throw Error(r(476));var p=e2(t).queue;Jp(t,p,i,ae,a===null?Ly:function(){return t2(t),a(c)})}function e2(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:ae},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function t2(t){var i=e2(t);i.next===null&&(i=t.alternate.memoizedState),ya(t,i.next.queue,{},tn())}function nf(){return wt(La)}function n2(){return at().memoizedState}function l2(){return at().memoizedState}function Ry(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=tn();t=Dl(a);var c=_l(i,t,a);c!==null&&(Ut(c,i,a),fa(c,i,a)),i={cache:Ou()},t.payload=i;return}i=i.return}}function zy(t,i,a){var c=tn();a={lane:c,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ts(t)?r2(i,a):(a=vu(t,i,a,c),a!==null&&(Ut(a,t,c),a2(a,i,c)))}function i2(t,i,a){var c=tn();ya(t,i,a,c)}function ya(t,i,a,c){var p={lane:c,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ts(t))r2(i,p);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,k=g(T,a);if(p.hasEagerState=!0,p.eagerState=k,Xt(k,T))return zo(t,i,p,0),Ve===null&&Ro(),!1}catch{}if(a=vu(t,i,p,c),a!==null)return Ut(a,t,c),a2(a,i,c),!0}return!1}function lf(t,i,a,c){if(c={lane:2,revertLane:Pf(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},ts(t)){if(i)throw Error(r(479))}else i=vu(t,a,c,2),i!==null&&Ut(i,t,2)}function ts(t){var i=t.alternate;return t===be||i!==null&&i===be}function r2(t,i){rr=Vo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function a2(t,i,a){if((a&4194048)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,fh(t,a)}}var ma={readContext:wt,use:Qo,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};ma.useEffectEvent=tt;var o2={readContext:wt,use:Qo,useCallback:function(t,i){return Lt().memoizedState=[t,i===void 0?null:i],t},useContext:wt,useEffect:Up,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Jo(4194308,4,Vp.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Jo(4194308,4,t,i)},useInsertionEffect:function(t,i){Jo(4,2,t,i)},useMemo:function(t,i){var a=Lt();i=i===void 0?null:i;var c=t();if(pi){Ft(!0);try{t()}finally{Ft(!1)}}return a.memoizedState=[c,i],c},useReducer:function(t,i,a){var c=Lt();if(a!==void 0){var p=a(i);if(pi){Ft(!0);try{a(i)}finally{Ft(!1)}}}else p=i;return c.memoizedState=c.baseState=p,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:p},c.queue=t,t=t.dispatch=zy.bind(null,be,t),[c.memoizedState,t]},useRef:function(t){var i=Lt();return t={current:t},i.memoizedState=t},useState:function(t){t=Yu(t);var i=t.queue,a=i2.bind(null,be,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(t,i){var a=Lt();return ef(a,t,i)},useTransition:function(){var t=Yu(!1);return t=Jp.bind(null,be,t.queue,!0,!1),Lt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var c=be,p=Lt();if(Ne){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),Ve===null)throw Error(r(349));(De&127)!==0||Sp(c,i,a)}p.memoizedState=a;var g={value:a,getSnapshot:i};return p.queue=g,Up(_p.bind(null,c,g,t),[t]),c.flags|=2048,or(9,{destroy:void 0},Dp.bind(null,c,g,a,i),null),a},useId:function(){var t=Lt(),i=Ve.identifierPrefix;if(Ne){var a=Fn,c=Pn;a=(c&~(1<<32-Ke(c)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Xo++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=Sy++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:nf,useFormState:Mp,useActionState:Mp,useOptimistic:function(t){var i=Lt();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=lf.bind(null,be,!0,a),a.dispatch=i,[t,i]},useMemoCache:Ku,useCacheRefresh:function(){return Lt().memoizedState=Ry.bind(null,be)},useEffectEvent:function(t){var i=Lt(),a={impl:t};return i.memoizedState=a,function(){if((Pe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},rf={readContext:wt,use:Qo,useCallback:Yp,useContext:wt,useEffect:Wu,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Kp,useMemo:Qp,useReducer:Wo,useRef:jp,useState:function(){return Wo(el)},useDebugValue:Ju,useDeferredValue:function(t,i){var a=at();return Wp(a,$e.memoizedState,t,i)},useTransition:function(){var t=Wo(el)[0],i=at().memoizedState;return[typeof t=="boolean"?t:ga(t),i]},useSyncExternalStore:Ap,useId:n2,useHostTransitionStatus:nf,useFormState:Gp,useActionState:Gp,useOptimistic:function(t,i){var a=at();return Lp(a,$e,t,i)},useMemoCache:Ku,useCacheRefresh:l2};rf.useEffectEvent=Zp;var s2={readContext:wt,use:Qo,useCallback:Yp,useContext:wt,useEffect:Wu,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Kp,useMemo:Qp,useReducer:Xu,useRef:jp,useState:function(){return Xu(el)},useDebugValue:Ju,useDeferredValue:function(t,i){var a=at();return $e===null?ef(a,t,i):Wp(a,$e.memoizedState,t,i)},useTransition:function(){var t=Xu(el)[0],i=at().memoizedState;return[typeof t=="boolean"?t:ga(t),i]},useSyncExternalStore:Ap,useId:n2,useHostTransitionStatus:nf,useFormState:$p,useActionState:$p,useOptimistic:function(t,i){var a=at();return $e!==null?Lp(a,$e,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:l2};s2.useEffectEvent=Zp;function af(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:m({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var of={enqueueSetState:function(t,i,a){t=t._reactInternals;var c=tn(),p=Dl(c);p.payload=i,a!=null&&(p.callback=a),i=_l(t,p,c),i!==null&&(Ut(i,t,c),fa(i,t,c))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=tn(),p=Dl(c);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=_l(t,p,c),i!==null&&(Ut(i,t,c),fa(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=tn(),c=Dl(a);c.tag=2,i!=null&&(c.callback=i),i=_l(t,c,a),i!==null&&(Ut(i,t,a),fa(i,t,a))}};function c2(t,i,a,c,p,g,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!la(a,c)||!la(p,g):!0}function u2(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&of.enqueueReplaceState(i,i.state,null)}function gi(t,i){var a=i;if("ref"in i){a={};for(var c in i)c!=="ref"&&(a[c]=i[c])}if(t=t.defaultProps){a===i&&(a=m({},a));for(var p in t)a[p]===void 0&&(a[p]=t[p])}return a}function f2(t){Lo(t)}function d2(t){console.error(t)}function h2(t){Lo(t)}function ns(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function p2(t,i,a){try{var c=t.onCaughtError;c(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function sf(t,i,a){return a=Dl(a),a.tag=3,a.payload={element:null},a.callback=function(){ns(t,i)},a}function g2(t){return t=Dl(t),t.tag=3,t}function y2(t,i,a,c){var p=a.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;t.payload=function(){return p(g)},t.callback=function(){p2(i,a,c)}}var T=a.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(t.callback=function(){p2(i,a,c),typeof p!="function"&&(Pl===null?Pl=new Set([this]):Pl.add(this));var k=c.stack;this.componentDidCatch(c.value,{componentStack:k!==null?k:""})})}function Py(t,i,a,c,p){if(a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=a.alternate,i!==null&&Ji(i,a,p,!0),a=Qt.current,a!==null){switch(a.tag){case 31:case 13:return gn===null?ps():a.alternate===null&&nt===0&&(nt=3),a.flags&=-257,a.flags|=65536,a.lanes=p,c===jo?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([c]):i.add(c),Lf(t,c,p)),!1;case 22:return a.flags|=65536,c===jo?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([c]):a.add(c)),Lf(t,c,p)),!1}throw Error(r(435,a.tag))}return Lf(t,c,p),ps(),!1}if(Ne)return i=Qt.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==Cu&&(t=Error(r(422),{cause:c}),aa(fn(t,a)))):(c!==Cu&&(i=Error(r(423),{cause:c}),aa(fn(i,a))),t=t.current.alternate,t.flags|=65536,p&=-p,t.lanes|=p,c=fn(c,a),p=sf(t.stateNode,c,p),Fu(t,p),nt!==4&&(nt=2)),!1;var g=Error(r(520),{cause:c});if(g=fn(g,a),Ea===null?Ea=[g]:Ea.push(g),nt!==4&&(nt=2),i===null)return!0;c=fn(c,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=p&-p,a.lanes|=t,t=sf(a.stateNode,c,t),Fu(a,t),!1;case 1:if(i=a.type,g=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Pl===null||!Pl.has(g))))return a.flags|=65536,p&=-p,a.lanes|=p,p=g2(p),y2(p,t,a,c),Fu(a,p),!1}a=a.return}while(a!==null);return!1}var cf=Error(r(461)),ct=!1;function Et(t,i,a,c){i.child=t===null?vp(i,null,a,c):hi(i,t.child,a,c)}function m2(t,i,a,c,p){a=a.render;var g=i.ref;if("ref"in c){var T={};for(var k in c)k!=="ref"&&(T[k]=c[k])}else T=c;return ci(i),c=ju(t,i,a,T,g,p),k=Uu(),t!==null&&!ct?(Zu(t,i,p),tl(t,i,p)):(Ne&&k&&wu(i),i.flags|=1,Et(t,i,c,p),i.child)}function T2(t,i,a,c,p){if(t===null){var g=a.type;return typeof g=="function"&&!ku(g)&&g.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=g,b2(t,i,g,c,p)):(t=Fo(a.type,null,c,i,i.mode,p),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,!mf(t,p)){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(T,c)&&t.ref===i.ref)return tl(t,i,p)}return i.flags|=1,t=Xn(g,c),t.ref=i.ref,t.return=i,i.child=t}function b2(t,i,a,c,p){if(t!==null){var g=t.memoizedProps;if(la(g,c)&&t.ref===i.ref)if(ct=!1,i.pendingProps=c=g,mf(t,p))(t.flags&131072)!==0&&(ct=!0);else return i.lanes=t.lanes,tl(t,i,p)}return uf(t,i,a,c,p)}function v2(t,i,a,c){var p=c.children,g=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(g=g!==null?g.baseLanes|a:a,t!==null){for(c=i.child=t.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~g}else c=0,i.child=null;return k2(t,i,g,a,c)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&qo(i,g!==null?g.cachePool:null),g!==null?Bp(i,g):Mu(),wp(i);else return c=i.lanes=536870912,k2(t,i,g!==null?g.baseLanes|a:a,a,c)}else g!==null?(qo(i,g.cachePool),Bp(i,g),Nl(),i.memoizedState=null):(t!==null&&qo(i,null),Mu(),Nl());return Et(t,i,p,a),i.child}function Ta(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function k2(t,i,a,c,p){var g=Lu();return g=g===null?null:{parent:ot._currentValue,pool:g},i.memoizedState={baseLanes:a,cachePool:g},t!==null&&qo(i,null),Mu(),wp(i),t!==null&&Ji(t,i,c,!0),i.childLanes=p,null}function ls(t,i){return i=rs({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function x2(t,i,a){return hi(i,t.child,null,a),t=ls(i,i.pendingProps),t.flags|=2,Wt(i),i.memoizedState=null,t}function Fy(t,i,a){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ne){if(c.mode==="hidden")return t=ls(i,c),i.lanes=536870912,Ta(null,t);if(qu(i),(t=Qe)?(t=R0(t,pn),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:wl!==null?{id:Pn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=i,i.child=a,Bt=i,Qe=null)):t=null,t===null)throw Cl(i);return i.lanes=536870912,null}return ls(i,c)}var g=t.memoizedState;if(g!==null){var T=g.dehydrated;if(qu(i),p)if(i.flags&256)i.flags&=-257,i=x2(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(r(558));else if(ct||Ji(t,i,a,!1),p=(a&t.childLanes)!==0,ct||p){if(c=Ve,c!==null&&(T=dh(c,a),T!==0&&T!==g.retryLane))throw g.retryLane=T,ri(t,T),Ut(c,t,T),cf;ps(),i=x2(t,i,a)}else t=g.treeContext,Qe=yn(T.nextSibling),Bt=i,Ne=!0,El=null,pn=!1,t!==null&&sp(i,t),i=ls(i,c),i.flags|=4096;return i}return t=Xn(t.child,{mode:c.mode,children:c.children}),t.ref=i.ref,i.child=t,t.return=i,t}function is(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function uf(t,i,a,c,p){return ci(i),a=ju(t,i,a,c,void 0,p),c=Uu(),t!==null&&!ct?(Zu(t,i,p),tl(t,i,p)):(Ne&&c&&wu(i),i.flags|=1,Et(t,i,a,p),i.child)}function B2(t,i,a,c,p,g){return ci(i),i.updateQueue=null,a=Cp(i,c,a,p),Ep(t),c=Uu(),t!==null&&!ct?(Zu(t,i,g),tl(t,i,g)):(Ne&&c&&wu(i),i.flags|=1,Et(t,i,a,g),i.child)}function w2(t,i,a,c,p){if(ci(i),i.stateNode===null){var g=Xi,T=a.contextType;typeof T=="object"&&T!==null&&(g=wt(T)),g=new a(c,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=of,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=c,g.state=i.memoizedState,g.refs={},zu(i),T=a.contextType,g.context=typeof T=="object"&&T!==null?wt(T):Xi,g.state=i.memoizedState,T=a.getDerivedStateFromProps,typeof T=="function"&&(af(i,a,T,c),g.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&of.enqueueReplaceState(g,g.state,null),ha(i,c,g,p),da(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(t===null){g=i.stateNode;var k=i.memoizedProps,E=gi(a,k);g.props=E;var N=g.context,G=a.contextType;T=Xi,typeof G=="object"&&G!==null&&(T=wt(G));var H=a.getDerivedStateFromProps;G=typeof H=="function"||typeof g.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,G||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(k||N!==T)&&u2(i,g,c,T),Sl=!1;var L=i.memoizedState;g.state=L,ha(i,c,g,p),da(),N=i.memoizedState,k||L!==N||Sl?(typeof H=="function"&&(af(i,a,H,c),N=i.memoizedState),(E=Sl||c2(i,a,E,c,L,N,T))?(G||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=N),g.props=c,g.state=N,g.context=T,c=E):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{g=i.stateNode,Pu(t,i),T=i.memoizedProps,G=gi(a,T),g.props=G,H=i.pendingProps,L=g.context,N=a.contextType,E=Xi,typeof N=="object"&&N!==null&&(E=wt(N)),k=a.getDerivedStateFromProps,(N=typeof k=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==H||L!==E)&&u2(i,g,c,E),Sl=!1,L=i.memoizedState,g.state=L,ha(i,c,g,p),da();var F=i.memoizedState;T!==H||L!==F||Sl||t!==null&&t.dependencies!==null&&Mo(t.dependencies)?(typeof k=="function"&&(af(i,a,k,c),F=i.memoizedState),(G=Sl||c2(i,a,G,c,L,F,E)||t!==null&&t.dependencies!==null&&Mo(t.dependencies))?(N||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,F,E),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,F,E)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===t.memoizedProps&&L===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&L===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=F),g.props=c,g.state=F,g.context=E,c=G):(typeof g.componentDidUpdate!="function"||T===t.memoizedProps&&L===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===t.memoizedProps&&L===t.memoizedState||(i.flags|=1024),c=!1)}return g=c,is(t,i),c=(i.flags&128)!==0,g||c?(g=i.stateNode,a=c&&typeof a.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,t!==null&&c?(i.child=hi(i,t.child,null,p),i.child=hi(i,null,a,p)):Et(t,i,a,p),i.memoizedState=g.state,t=i.child):t=tl(t,i,p),t}function E2(t,i,a,c){return oi(),i.flags|=256,Et(t,i,a,c),i.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(t){return{baseLanes:t,cachePool:pp()}}function hf(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=en),t}function C2(t,i,a){var c=i.pendingProps,p=!1,g=(i.flags&128)!==0,T;if((T=g)||(T=t!==null&&t.memoizedState===null?!1:(rt.current&2)!==0),T&&(p=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ne){if(p?Ol(i):Nl(),(t=Qe)?(t=R0(t,pn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:wl!==null?{id:Pn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},a=rp(t),a.return=i,i.child=a,Bt=i,Qe=null)):t=null,t===null)throw Cl(i);return Xf(t)?i.lanes=32:i.lanes=536870912,null}var k=c.children;return c=c.fallback,p?(Nl(),p=i.mode,k=rs({mode:"hidden",children:k},p),c=ai(c,p,a,null),k.return=i,c.return=i,k.sibling=c,i.child=k,c=i.child,c.memoizedState=df(a),c.childLanes=hf(t,T,a),i.memoizedState=ff,Ta(null,c)):(Ol(i),pf(i,k))}var E=t.memoizedState;if(E!==null&&(k=E.dehydrated,k!==null)){if(g)i.flags&256?(Ol(i),i.flags&=-257,i=gf(t,i,a)):i.memoizedState!==null?(Nl(),i.child=t.child,i.flags|=128,i=null):(Nl(),k=c.fallback,p=i.mode,c=rs({mode:"visible",children:c.children},p),k=ai(k,p,a,null),k.flags|=2,c.return=i,k.return=i,c.sibling=k,i.child=c,hi(i,t.child,null,a),c=i.child,c.memoizedState=df(a),c.childLanes=hf(t,T,a),i.memoizedState=ff,i=Ta(null,c));else if(Ol(i),Xf(k)){if(T=k.nextSibling&&k.nextSibling.dataset,T)var N=T.dgst;T=N,c=Error(r(419)),c.stack="",c.digest=T,aa({value:c,source:null,stack:null}),i=gf(t,i,a)}else if(ct||Ji(t,i,a,!1),T=(a&t.childLanes)!==0,ct||T){if(T=Ve,T!==null&&(c=dh(T,a),c!==0&&c!==E.retryLane))throw E.retryLane=c,ri(t,c),Ut(T,t,c),cf;Vf(k)||ps(),i=gf(t,i,a)}else Vf(k)?(i.flags|=192,i.child=t.child,i=null):(t=E.treeContext,Qe=yn(k.nextSibling),Bt=i,Ne=!0,El=null,pn=!1,t!==null&&sp(i,t),i=pf(i,c.children),i.flags|=4096);return i}return p?(Nl(),k=c.fallback,p=i.mode,E=t.child,N=E.sibling,c=Xn(E,{mode:"hidden",children:c.children}),c.subtreeFlags=E.subtreeFlags&65011712,N!==null?k=Xn(N,k):(k=ai(k,p,a,null),k.flags|=2),k.return=i,c.return=i,c.sibling=k,i.child=c,Ta(null,c),c=i.child,k=t.child.memoizedState,k===null?k=df(a):(p=k.cachePool,p!==null?(E=ot._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=pp(),k={baseLanes:k.baseLanes|a,cachePool:p}),c.memoizedState=k,c.childLanes=hf(t,T,a),i.memoizedState=ff,Ta(t.child,c)):(Ol(i),a=t.child,t=a.sibling,a=Xn(a,{mode:"visible",children:c.children}),a.return=i,a.sibling=null,t!==null&&(T=i.deletions,T===null?(i.deletions=[t],i.flags|=16):T.push(t)),i.child=a,i.memoizedState=null,a)}function pf(t,i){return i=rs({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function rs(t,i){return t=Yt(22,t,null,i),t.lanes=0,t}function gf(t,i,a){return hi(i,t.child,null,a),t=pf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function A2(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Du(t.return,i,a)}function yf(t,i,a,c,p,g){var T=t.memoizedState;T===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p,treeForkCount:g}:(T.isBackwards=i,T.rendering=null,T.renderingStartTime=0,T.last=c,T.tail=a,T.tailMode=p,T.treeForkCount=g)}function S2(t,i,a){var c=i.pendingProps,p=c.revealOrder,g=c.tail;c=c.children;var T=rt.current,k=(T&2)!==0;if(k?(T=T&1|2,i.flags|=128):T&=1,x(rt,T),Et(t,i,c,a),c=Ne?ra:0,!k&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&A2(t,a,i);else if(t.tag===19)A2(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(p){case"forwards":for(a=i.child,p=null;a!==null;)t=a.alternate,t!==null&&Ko(t)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),yf(i,!1,p,a,g,c);break;case"backwards":case"unstable_legacy-backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(t=p.alternate,t!==null&&Ko(t)===null){i.child=p;break}t=p.sibling,p.sibling=a,a=p,p=t}yf(i,!0,a,null,g,c);break;case"together":yf(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function tl(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),zl|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Ji(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,a=Xn(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Xn(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function mf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Mo(t)))}function Iy(t,i,a){switch(i.tag){case 3:Je(i,i.stateNode.containerInfo),Al(i,ot,t.memoizedState.cache),oi();break;case 27:case 5:on(i);break;case 4:Je(i,i.stateNode.containerInfo);break;case 10:Al(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,qu(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(Ol(i),i.flags|=128,null):(a&i.child.childLanes)!==0?C2(t,i,a):(Ol(i),t=tl(t,i,a),t!==null?t.sibling:null);Ol(i);break;case 19:var p=(t.flags&128)!==0;if(c=(a&i.childLanes)!==0,c||(Ji(t,i,a,!1),c=(a&i.childLanes)!==0),p){if(c)return S2(t,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),x(rt,rt.current),c)break;return null;case 22:return i.lanes=0,v2(t,i,a,i.pendingProps);case 24:Al(i,ot,t.memoizedState.cache)}return tl(t,i,a)}function D2(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)ct=!0;else{if(!mf(t,a)&&(i.flags&128)===0)return ct=!1,Iy(t,i,a);ct=(t.flags&131072)!==0}else ct=!1,Ne&&(i.flags&1048576)!==0&&op(i,ra,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(t=fi(i.elementType),i.type=t,typeof t=="function")ku(t)?(c=gi(t,c),i.tag=1,i=w2(null,i,t,c,a)):(i.tag=0,i=uf(null,i,t,c,a));else{if(t!=null){var p=t.$$typeof;if(p===te){i.tag=11,i=m2(null,i,t,c,a);break e}else if(p===K){i.tag=14,i=T2(null,i,t,c,a);break e}}throw i=pe(t)||t,Error(r(306,i,""))}}return i;case 0:return uf(t,i,i.type,i.pendingProps,a);case 1:return c=i.type,p=gi(c,i.pendingProps),w2(t,i,c,p,a);case 3:e:{if(Je(i,i.stateNode.containerInfo),t===null)throw Error(r(387));c=i.pendingProps;var g=i.memoizedState;p=g.element,Pu(t,i),ha(i,c,null,a);var T=i.memoizedState;if(c=T.cache,Al(i,ot,c),c!==g.cache&&_u(i,[ot],a,!0),da(),c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=E2(t,i,c,a);break e}else if(c!==p){p=fn(Error(r(424)),i),aa(p),i=E2(t,i,c,a);break e}else for(t=i.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qe=yn(t.firstChild),Bt=i,Ne=!0,El=null,pn=!0,a=vp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(oi(),c===p){i=tl(t,i,a);break e}Et(t,i,c,a)}i=i.child}return i;case 26:return is(t,i),t===null?(a=G0(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ne||(a=i.type,t=i.pendingProps,c=ks(se.current).createElement(a),c[xt]=i,c[It]=t,Ct(c,a,t),bt(c),i.stateNode=c):i.memoizedState=G0(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return on(i),t===null&&Ne&&(c=i.stateNode=F0(i.type,i.pendingProps,se.current),Bt=i,pn=!0,p=Qe,Gl(i.type)?(Yf=p,Qe=yn(c.firstChild)):Qe=p),Et(t,i,i.pendingProps.children,a),is(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ne&&((p=c=Qe)&&(c=pm(c,i.type,i.pendingProps,pn),c!==null?(i.stateNode=c,Bt=i,Qe=yn(c.firstChild),pn=!1,p=!0):p=!1),p||Cl(i)),on(i),p=i.type,g=i.pendingProps,T=t!==null?t.memoizedProps:null,c=g.children,Zf(p,g)?c=null:T!==null&&Zf(p,T)&&(i.flags|=32),i.memoizedState!==null&&(p=ju(t,i,Dy,null,null,a),La._currentValue=p),is(t,i),Et(t,i,c,a),i.child;case 6:return t===null&&Ne&&((t=a=Qe)&&(a=gm(a,i.pendingProps,pn),a!==null?(i.stateNode=a,Bt=i,Qe=null,t=!0):t=!1),t||Cl(i)),null;case 13:return C2(t,i,a);case 4:return Je(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=hi(i,null,c,a):Et(t,i,c,a),i.child;case 11:return m2(t,i,i.type,i.pendingProps,a);case 7:return Et(t,i,i.pendingProps,a),i.child;case 8:return Et(t,i,i.pendingProps.children,a),i.child;case 12:return Et(t,i,i.pendingProps.children,a),i.child;case 10:return c=i.pendingProps,Al(i,i.type,c.value),Et(t,i,c.children,a),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,ci(i),p=wt(p),c=c(p),i.flags|=1,Et(t,i,c,a),i.child;case 14:return T2(t,i,i.type,i.pendingProps,a);case 15:return b2(t,i,i.type,i.pendingProps,a);case 19:return S2(t,i,a);case 31:return Fy(t,i,a);case 22:return v2(t,i,a,i.pendingProps);case 24:return ci(i),c=wt(ot),t===null?(p=Lu(),p===null&&(p=Ve,g=Ou(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=a),p=g),i.memoizedState={parent:c,cache:p},zu(i),Al(i,ot,p)):((t.lanes&a)!==0&&(Pu(t,i),ha(i,null,null,a),da()),p=t.memoizedState,g=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),Al(i,ot,c)):(c=g.cache,Al(i,ot,c),c!==p.cache&&_u(i,[ot],a,!0))),Et(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function nl(t){t.flags|=4}function Tf(t,i,a,c,p){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(p&335544128)===p)if(t.stateNode.complete)t.flags|=8192;else if(n0())t.flags|=8192;else throw di=jo,Ru}else t.flags&=-16777217}function _2(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Z0(i))if(n0())t.flags|=8192;else throw di=jo,Ru}function as(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?ch():536870912,t.lanes|=i,fr|=i)}function ba(t,i){if(!Ne)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function We(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var p=t.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function My(t,i,a){var c=i.pendingProps;switch(Eu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(i),null;case 1:return We(i),null;case 3:return a=i.stateNode,c=null,t!==null&&(c=t.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Wn(ot),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Wi(i)?nl(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Au())),We(i),null;case 26:var p=i.type,g=i.memoizedState;return t===null?(nl(i),g!==null?(We(i),_2(i,g)):(We(i),Tf(i,p,null,c,a))):g?g!==t.memoizedState?(nl(i),We(i),_2(i,g)):(We(i),i.flags&=-16777217):(t=t.memoizedProps,t!==c&&nl(i),We(i),Tf(i,p,t,c,a)),null;case 27:if(Jl(i),a=se.current,p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==c&&nl(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return We(i),null}t=ie.current,Wi(i)?cp(i):(t=F0(p,c,a),i.stateNode=t,nl(i))}return We(i),null;case 5:if(Jl(i),p=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==c&&nl(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return We(i),null}if(g=ie.current,Wi(i))cp(i);else{var T=ks(se.current);switch(g){case 1:g=T.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=T.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=T.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=T.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=T.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof c.is=="string"?T.createElement("select",{is:c.is}):T.createElement("select"),c.multiple?g.multiple=!0:c.size&&(g.size=c.size);break;default:g=typeof c.is=="string"?T.createElement(p,{is:c.is}):T.createElement(p)}}g[xt]=i,g[It]=c;e:for(T=i.child;T!==null;){if(T.tag===5||T.tag===6)g.appendChild(T.stateNode);else if(T.tag!==4&&T.tag!==27&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===i)break e;for(;T.sibling===null;){if(T.return===null||T.return===i)break e;T=T.return}T.sibling.return=T.return,T=T.sibling}i.stateNode=g;e:switch(Ct(g,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&nl(i)}}return We(i),Tf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==c&&nl(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(r(166));if(t=se.current,Wi(i)){if(t=i.stateNode,a=i.memoizedProps,c=null,p=Bt,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}t[xt]=i,t=!!(t.nodeValue===a||c!==null&&c.suppressHydrationWarning===!0||C0(t.nodeValue,a)),t||Cl(i,!0)}else t=ks(t).createTextNode(c),t[xt]=i,i.stateNode=t}return We(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(c=Wi(i),a!==null){if(t===null){if(!c)throw Error(r(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[xt]=i}else oi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),t=!1}else a=Au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(Wt(i),i):(Wt(i),null);if((i.flags&128)!==0)throw Error(r(558))}return We(i),null;case 13:if(c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(p=Wi(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(r(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[xt]=i}else oi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;We(i),p=!1}else p=Au(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(Wt(i),i):(Wt(i),null)}return Wt(i),(i.flags&128)!==0?(i.lanes=a,i):(a=c!==null,t=t!==null&&t.memoizedState!==null,a&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),g=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),as(i,i.updateQueue),We(i),null);case 4:return Ge(),t===null&&Gf(i.stateNode.containerInfo),We(i),null;case 10:return Wn(i.type),We(i),null;case 19:if($(rt),c=i.memoizedState,c===null)return We(i),null;if(p=(i.flags&128)!==0,g=c.rendering,g===null)if(p)ba(c,!1);else{if(nt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(g=Ko(t),g!==null){for(i.flags|=128,ba(c,!1),t=g.updateQueue,i.updateQueue=t,as(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)ip(a,t),a=a.sibling;return x(rt,rt.current&1|2),Ne&&Yn(i,c.treeForkCount),i.child}t=t.sibling}c.tail!==null&&Ot()>fs&&(i.flags|=128,p=!0,ba(c,!1),i.lanes=4194304)}else{if(!p)if(t=Ko(g),t!==null){if(i.flags|=128,p=!0,t=t.updateQueue,i.updateQueue=t,as(i,t),ba(c,!0),c.tail===null&&c.tailMode==="hidden"&&!g.alternate&&!Ne)return We(i),null}else 2*Ot()-c.renderingStartTime>fs&&a!==536870912&&(i.flags|=128,p=!0,ba(c,!1),i.lanes=4194304);c.isBackwards?(g.sibling=i.child,i.child=g):(t=c.last,t!==null?t.sibling=g:i.child=g,c.last=g)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Ot(),t.sibling=null,a=rt.current,x(rt,p?a&1|2:a&1),Ne&&Yn(i,c.treeForkCount),t):(We(i),null);case 22:case 23:return Wt(i),Gu(),c=i.memoizedState!==null,t!==null?t.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(a&536870912)!==0&&(i.flags&128)===0&&(We(i),i.subtreeFlags&6&&(i.flags|=8192)):We(i),a=i.updateQueue,a!==null&&as(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==a&&(i.flags|=2048),t!==null&&$(ui),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Wn(ot),We(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Gy(t,i){switch(Eu(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Wn(ot),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Jl(i),null;case 31:if(i.memoizedState!==null){if(Wt(i),i.alternate===null)throw Error(r(340));oi()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Wt(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));oi()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $(rt),null;case 4:return Ge(),null;case 10:return Wn(i.type),null;case 22:case 23:return Wt(i),Gu(),t!==null&&$(ui),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Wn(ot),null;case 25:return null;default:return null}}function O2(t,i){switch(Eu(i),i.tag){case 3:Wn(ot),Ge();break;case 26:case 27:case 5:Jl(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&Wt(i);break;case 13:Wt(i);break;case 19:$(rt);break;case 10:Wn(i.type);break;case 22:case 23:Wt(i),Gu(),t!==null&&$(ui);break;case 24:Wn(ot)}}function va(t,i){try{var a=i.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var p=c.next;a=p;do{if((a.tag&t)===t){c=void 0;var g=a.create,T=a.inst;c=g(),T.destroy=c}a=a.next}while(a!==p)}}catch(k){Me(i,i.return,k)}}function Ll(t,i,a){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&t)===t){var T=c.inst,k=T.destroy;if(k!==void 0){T.destroy=void 0,p=i;var E=a,N=k;try{N()}catch(G){Me(p,E,G)}}}c=c.next}while(c!==g)}}catch(G){Me(i,i.return,G)}}function N2(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{xp(i,a)}catch(c){Me(t,t.return,c)}}}function L2(t,i,a){a.props=gi(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(c){Me(t,i,c)}}function ka(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var c=t.stateNode;break;case 30:c=t.stateNode;break;default:c=t.stateNode}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(p){Me(t,i,p)}}function In(t,i){var a=t.ref,c=t.refCleanup;if(a!==null)if(typeof c=="function")try{c()}catch(p){Me(t,i,p)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(p){Me(t,i,p)}else a.current=null}function R2(t){var i=t.type,a=t.memoizedProps,c=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&c.focus();break e;case"img":a.src?c.src=a.src:a.srcSet&&(c.srcset=a.srcSet)}}catch(p){Me(t,t.return,p)}}function bf(t,i,a){try{var c=t.stateNode;sm(c,t.type,a,i),c[It]=i}catch(p){Me(t,t.return,p)}}function z2(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gl(t.type)||t.tag===4}function vf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z2(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gl(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kf(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Kn));else if(c!==4&&(c===27&&Gl(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(kf(t,i,a),t=t.sibling;t!==null;)kf(t,i,a),t=t.sibling}function os(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(c===27&&Gl(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(os(t,i,a),t=t.sibling;t!==null;)os(t,i,a),t=t.sibling}function P2(t){var i=t.stateNode,a=t.memoizedProps;try{for(var c=t.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Ct(i,c,a),i[xt]=t,i[It]=a}catch(g){Me(t,t.return,g)}}var ll=!1,ut=!1,xf=!1,F2=typeof WeakSet=="function"?WeakSet:Set,vt=null;function qy(t,i){if(t=t.containerInfo,jf=Ss,t=Xh(t),pu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,k=-1,E=-1,N=0,G=0,H=t,L=null;t:for(;;){for(var F;H!==a||p!==0&&H.nodeType!==3||(k=T+p),H!==g||c!==0&&H.nodeType!==3||(E=T+c),H.nodeType===3&&(T+=H.nodeValue.length),(F=H.firstChild)!==null;)L=H,H=F;for(;;){if(H===t)break t;if(L===a&&++N===p&&(k=T),L===g&&++G===c&&(E=T),(F=H.nextSibling)!==null)break;H=L,L=H.parentNode}H=F}a=k===-1||E===-1?null:{start:k,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:t,selectionRange:a},Ss=!1,vt=i;vt!==null;)if(i=vt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,vt=t;else for(;vt!==null;){switch(i=vt,g=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)p=t[a],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&g!==null){t=void 0,a=i,p=g.memoizedProps,g=g.memoizedState,c=a.stateNode;try{var re=gi(a.type,p);t=c.getSnapshotBeforeUpdate(re,g),c.__reactInternalSnapshotBeforeUpdate=t}catch(de){Me(a,a.return,de)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,vt=t;break}vt=i.return}}function I2(t,i,a){var c=a.flags;switch(a.tag){case 0:case 11:case 15:rl(t,a),c&4&&va(5,a);break;case 1:if(rl(t,a),c&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(T){Me(a,a.return,T)}else{var p=gi(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(p,i,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Me(a,a.return,T)}}c&64&&N2(a),c&512&&ka(a,a.return);break;case 3:if(rl(t,a),c&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{xp(t,i)}catch(T){Me(a,a.return,T)}}break;case 27:i===null&&c&4&&P2(a);case 26:case 5:rl(t,a),i===null&&c&4&&R2(a),c&512&&ka(a,a.return);break;case 12:rl(t,a);break;case 31:rl(t,a),c&4&&q2(t,a);break;case 13:rl(t,a),c&4&&$2(t,a),c&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Yy.bind(null,a),ym(t,a))));break;case 22:if(c=a.memoizedState!==null||ll,!c){i=i!==null&&i.memoizedState!==null||ut,p=ll;var g=ut;ll=c,(ut=i)&&!g?al(t,a,(a.subtreeFlags&8772)!==0):rl(t,a),ll=p,ut=g}break;case 30:break;default:rl(t,a)}}function M2(t){var i=t.alternate;i!==null&&(t.alternate=null,M2(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Qc(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var et=null,Gt=!1;function il(t,i,a){for(a=a.child;a!==null;)G2(t,i,a),a=a.sibling}function G2(t,i,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 26:ut||In(a,i),il(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ut||In(a,i);var c=et,p=Gt;Gl(a.type)&&(et=a.stateNode,Gt=!1),il(t,i,a),_a(a.stateNode),et=c,Gt=p;break;case 5:ut||In(a,i);case 6:if(c=et,p=Gt,et=null,il(t,i,a),et=c,Gt=p,et!==null)if(Gt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(a.stateNode)}catch(g){Me(a,i,g)}else try{et.removeChild(a.stateNode)}catch(g){Me(a,i,g)}break;case 18:et!==null&&(Gt?(t=et,N0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),br(t)):N0(et,a.stateNode));break;case 4:c=et,p=Gt,et=a.stateNode.containerInfo,Gt=!0,il(t,i,a),et=c,Gt=p;break;case 0:case 11:case 14:case 15:Ll(2,a,i),ut||Ll(4,a,i),il(t,i,a);break;case 1:ut||(In(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"&&L2(a,i,c)),il(t,i,a);break;case 21:il(t,i,a);break;case 22:ut=(c=ut)||a.memoizedState!==null,il(t,i,a),ut=c;break;default:il(t,i,a)}}function q2(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{br(t)}catch(a){Me(i,i.return,a)}}}function $2(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{br(t)}catch(a){Me(i,i.return,a)}}function $y(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new F2),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new F2),i;default:throw Error(r(435,t.tag))}}function ss(t,i){var a=$y(t);i.forEach(function(c){if(!a.has(c)){a.add(c);var p=Qy.bind(null,t,c);c.then(p,p)}})}function qt(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c],g=t,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 27:if(Gl(k.type)){et=k.stateNode,Gt=!1;break e}break;case 5:et=k.stateNode,Gt=!1;break e;case 3:case 4:et=k.stateNode.containerInfo,Gt=!0;break e}k=k.return}if(et===null)throw Error(r(160));G2(g,T,p),et=null,Gt=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)j2(i,t),i=i.sibling}var Bn=null;function j2(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qt(i,t),$t(t),c&4&&(Ll(3,t,t.return),va(3,t),Ll(5,t,t.return));break;case 1:qt(i,t),$t(t),c&512&&(ut||a===null||In(a,a.return)),c&64&&ll&&(t=t.updateQueue,t!==null&&(c=t.callbacks,c!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?c:a.concat(c))));break;case 26:var p=Bn;if(qt(i,t),$t(t),c&512&&(ut||a===null||In(a,a.return)),c&4){var g=a!==null?a.memoizedState:null;if(c=t.memoizedState,a===null)if(c===null)if(t.stateNode===null){e:{c=t.type,a=t.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Vr]||g[xt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),Ct(g,c,a),g[xt]=t,bt(g),c=g;break e;case"link":var T=j0("link","href",p).get(c+(a.href||""));if(T){for(var k=0;k<T.length;k++)if(g=T[k],g.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&g.getAttribute("rel")===(a.rel==null?null:a.rel)&&g.getAttribute("title")===(a.title==null?null:a.title)&&g.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){T.splice(k,1);break t}}g=p.createElement(c),Ct(g,c,a),p.head.appendChild(g);break;case"meta":if(T=j0("meta","content",p).get(c+(a.content||""))){for(k=0;k<T.length;k++)if(g=T[k],g.getAttribute("content")===(a.content==null?null:""+a.content)&&g.getAttribute("name")===(a.name==null?null:a.name)&&g.getAttribute("property")===(a.property==null?null:a.property)&&g.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&g.getAttribute("charset")===(a.charSet==null?null:a.charSet)){T.splice(k,1);break t}}g=p.createElement(c),Ct(g,c,a),p.head.appendChild(g);break;default:throw Error(r(468,c))}g[xt]=t,bt(g),c=g}t.stateNode=c}else U0(p,t.type,t.stateNode);else t.stateNode=$0(p,c,t.memoizedProps);else g!==c?(g===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):g.count--,c===null?U0(p,t.type,t.stateNode):$0(p,c,t.memoizedProps)):c===null&&t.stateNode!==null&&bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qt(i,t),$t(t),c&512&&(ut||a===null||In(a,a.return)),a!==null&&c&4&&bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qt(i,t),$t(t),c&512&&(ut||a===null||In(a,a.return)),t.flags&32){p=t.stateNode;try{$i(p,"")}catch(re){Me(t,t.return,re)}}c&4&&t.stateNode!=null&&(p=t.memoizedProps,bf(t,p,a!==null?a.memoizedProps:p)),c&1024&&(xf=!0);break;case 6:if(qt(i,t),$t(t),c&4){if(t.stateNode===null)throw Error(r(162));c=t.memoizedProps,a=t.stateNode;try{a.nodeValue=c}catch(re){Me(t,t.return,re)}}break;case 3:if(ws=null,p=Bn,Bn=xs(i.containerInfo),qt(i,t),Bn=p,$t(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{br(i.containerInfo)}catch(re){Me(t,t.return,re)}xf&&(xf=!1,U2(t));break;case 4:c=Bn,Bn=xs(t.stateNode.containerInfo),qt(i,t),$t(t),Bn=c;break;case 12:qt(i,t),$t(t);break;case 31:qt(i,t),$t(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,ss(t,c)));break;case 13:qt(i,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(us=Ot()),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,ss(t,c)));break;case 22:p=t.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,N=ll,G=ut;if(ll=N||p,ut=G||E,qt(i,t),ut=G,ll=N,$t(t),c&8192)e:for(i=t.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(a===null||E||ll||ut||yi(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){E=a=i;try{if(g=E.stateNode,p)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{k=E.stateNode;var H=E.memoizedProps.style,L=H!=null&&H.hasOwnProperty("display")?H.display:null;k.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(re){Me(E,E.return,re)}}}else if(i.tag===6){if(a===null){E=i;try{E.stateNode.nodeValue=p?"":E.memoizedProps}catch(re){Me(E,E.return,re)}}}else if(i.tag===18){if(a===null){E=i;try{var F=E.stateNode;p?L0(F,!0):L0(E.stateNode,!1)}catch(re){Me(E,E.return,re)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=t.updateQueue,c!==null&&(a=c.retryQueue,a!==null&&(c.retryQueue=null,ss(t,a))));break;case 19:qt(i,t),$t(t),c&4&&(c=t.updateQueue,c!==null&&(t.updateQueue=null,ss(t,c)));break;case 30:break;case 21:break;default:qt(i,t),$t(t)}}function $t(t){var i=t.flags;if(i&2){try{for(var a,c=t.return;c!==null;){if(z2(c)){a=c;break}c=c.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var p=a.stateNode,g=vf(t);os(t,g,p);break;case 5:var T=a.stateNode;a.flags&32&&($i(T,""),a.flags&=-33);var k=vf(t);os(t,k,T);break;case 3:case 4:var E=a.stateNode.containerInfo,N=vf(t);kf(t,N,E);break;default:throw Error(r(161))}}catch(G){Me(t,t.return,G)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function U2(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;U2(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function rl(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)I2(t,i.alternate,i),i=i.sibling}function yi(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ll(4,i,i.return),yi(i);break;case 1:In(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&L2(i,i.return,a),yi(i);break;case 27:_a(i.stateNode);case 26:case 5:In(i,i.return),yi(i);break;case 22:i.memoizedState===null&&yi(i);break;case 30:yi(i);break;default:yi(i)}t=t.sibling}}function al(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=t,g=i,T=g.flags;switch(g.tag){case 0:case 11:case 15:al(p,g,a),va(4,g);break;case 1:if(al(p,g,a),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(N){Me(c,c.return,N)}if(c=g,p=c.updateQueue,p!==null){var k=c.stateNode;try{var E=p.shared.hiddenCallbacks;if(E!==null)for(p.shared.hiddenCallbacks=null,p=0;p<E.length;p++)kp(E[p],k)}catch(N){Me(c,c.return,N)}}a&&T&64&&N2(g),ka(g,g.return);break;case 27:P2(g);case 26:case 5:al(p,g,a),a&&c===null&&T&4&&R2(g),ka(g,g.return);break;case 12:al(p,g,a);break;case 31:al(p,g,a),a&&T&4&&q2(p,g);break;case 13:al(p,g,a),a&&T&4&&$2(p,g);break;case 22:g.memoizedState===null&&al(p,g,a),ka(g,g.return);break;case 30:break;default:al(p,g,a)}i=i.sibling}}function Bf(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oa(a))}function wf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&oa(t))}function wn(t,i,a,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Z2(t,i,a,c),i=i.sibling}function Z2(t,i,a,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:wn(t,i,a,c),p&2048&&va(9,i);break;case 1:wn(t,i,a,c);break;case 3:wn(t,i,a,c),p&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&oa(t)));break;case 12:if(p&2048){wn(t,i,a,c),t=i.stateNode;try{var g=i.memoizedProps,T=g.id,k=g.onPostCommit;typeof k=="function"&&k(T,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(E){Me(i,i.return,E)}}else wn(t,i,a,c);break;case 31:wn(t,i,a,c);break;case 13:wn(t,i,a,c);break;case 23:break;case 22:g=i.stateNode,T=i.alternate,i.memoizedState!==null?g._visibility&2?wn(t,i,a,c):xa(t,i):g._visibility&2?wn(t,i,a,c):(g._visibility|=2,sr(t,i,a,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Bf(T,i);break;case 24:wn(t,i,a,c),p&2048&&wf(i.alternate,i);break;default:wn(t,i,a,c)}}function sr(t,i,a,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var g=t,T=i,k=a,E=c,N=T.flags;switch(T.tag){case 0:case 11:case 15:sr(g,T,k,E,p),va(8,T);break;case 23:break;case 22:var G=T.stateNode;T.memoizedState!==null?G._visibility&2?sr(g,T,k,E,p):xa(g,T):(G._visibility|=2,sr(g,T,k,E,p)),p&&N&2048&&Bf(T.alternate,T);break;case 24:sr(g,T,k,E,p),p&&N&2048&&wf(T.alternate,T);break;default:sr(g,T,k,E,p)}i=i.sibling}}function xa(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,c=i,p=c.flags;switch(c.tag){case 22:xa(a,c),p&2048&&Bf(c.alternate,c);break;case 24:xa(a,c),p&2048&&wf(c.alternate,c);break;default:xa(a,c)}i=i.sibling}}var Ba=8192;function cr(t,i,a){if(t.subtreeFlags&Ba)for(t=t.child;t!==null;)H2(t,i,a),t=t.sibling}function H2(t,i,a){switch(t.tag){case 26:cr(t,i,a),t.flags&Ba&&t.memoizedState!==null&&Sm(a,Bn,t.memoizedState,t.memoizedProps);break;case 5:cr(t,i,a);break;case 3:case 4:var c=Bn;Bn=xs(t.stateNode.containerInfo),cr(t,i,a),Bn=c;break;case 22:t.memoizedState===null&&(c=t.alternate,c!==null&&c.memoizedState!==null?(c=Ba,Ba=16777216,cr(t,i,a),Ba=c):cr(t,i,a));break;default:cr(t,i,a)}}function K2(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function wa(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];vt=c,X2(c,t)}K2(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)V2(t),t=t.sibling}function V2(t){switch(t.tag){case 0:case 11:case 15:wa(t),t.flags&2048&&Ll(9,t,t.return);break;case 3:wa(t);break;case 12:wa(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,cs(t)):wa(t);break;default:wa(t)}}function cs(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];vt=c,X2(c,t)}K2(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ll(8,i,i.return),cs(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,cs(i));break;default:cs(i)}t=t.sibling}}function X2(t,i){for(;vt!==null;){var a=vt;switch(a.tag){case 0:case 11:case 15:Ll(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var c=a.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:oa(a.memoizedState.cache)}if(c=a.child,c!==null)c.return=a,vt=c;else e:for(a=t;vt!==null;){c=vt;var p=c.sibling,g=c.return;if(M2(c),c===a){vt=null;break e}if(p!==null){p.return=g,vt=p;break e}vt=g}}}var jy={getCacheForType:function(t){var i=wt(ot),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return wt(ot).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ve=null,Ee=null,De=0,Ie=0,Jt=null,Rl=!1,ur=!1,Ef=!1,ol=0,nt=0,zl=0,mi=0,Cf=0,en=0,fr=0,Ea=null,jt=null,Af=!1,us=0,Y2=0,fs=1/0,ds=null,Pl=null,yt=0,Fl=null,dr=null,sl=0,Sf=0,Df=null,Q2=null,Ca=0,_f=null;function tn(){return(Pe&2)!==0&&De!==0?De&-De:P.T!==null?Pf():hh()}function W2(){if(en===0)if((De&536870912)===0||Ne){var t=vo;vo<<=1,(vo&3932160)===0&&(vo=262144),en=t}else en=536870912;return t=Qt.current,t!==null&&(t.flags|=32),en}function Ut(t,i,a){(t===Ve&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(hr(t,0),Il(t,De,en,!1)),Kr(t,a),((Pe&2)===0||t!==Ve)&&(t===Ve&&((Pe&2)===0&&(mi|=a),nt===4&&Il(t,De,en,!1)),Mn(t))}function J2(t,i,a){if((Pe&6)!==0)throw Error(r(327));var c=!a&&(i&127)===0&&(i&t.expiredLanes)===0||Hr(t,i),p=c?Ky(t,i):Nf(t,i,!0),g=c;do{if(p===0){ur&&!c&&Il(t,i,0,!1);break}else{if(a=t.current.alternate,g&&!Zy(a)){p=Nf(t,i,!1),g=!1;continue}if(p===2){if(g=i,t.errorRecoveryDisabledLanes&g)var T=0;else T=t.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;e:{var k=t;p=Ea;var E=k.current.memoizedState.isDehydrated;if(E&&(hr(k,T).flags|=256),T=Nf(k,T,!1),T!==2){if(Ef&&!E){k.errorRecoveryDisabledLanes|=g,mi|=g,p=4;break e}g=jt,jt=p,g!==null&&(jt===null?jt=g:jt.push.apply(jt,g))}p=T}if(g=!1,p!==2)continue}}if(p===1){hr(t,0),Il(t,i,0,!0);break}e:{switch(c=t,g=p,g){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Il(c,i,en,!Rl);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(p=us+300-Ot(),10<p)){if(Il(c,i,en,!Rl),xo(c,0,!0)!==0)break e;sl=i,c.timeoutHandle=_0(e0.bind(null,c,a,jt,ds,Af,i,en,mi,fr,Rl,g,"Throttled",-0,0),p);break e}e0(c,a,jt,ds,Af,i,en,mi,fr,Rl,g,null,-0,0)}}break}while(!0);Mn(t)}function e0(t,i,a,c,p,g,T,k,E,N,G,H,L,F){if(t.timeoutHandle=-1,H=i.subtreeFlags,H&8192||(H&16785408)===16785408){H={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kn},H2(i,g,H);var re=(g&62914560)===g?us-Ot():(g&4194048)===g?Y2-Ot():0;if(re=Dm(H,re),re!==null){sl=g,t.cancelPendingCommit=re(s0.bind(null,t,i,g,a,c,p,T,k,E,G,H,null,L,F)),Il(t,g,T,!N);return}}s0(t,i,g,a,c,p,T,k,E)}function Zy(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var c=0;c<a.length;c++){var p=a[c],g=p.getSnapshot;p=p.value;try{if(!Xt(g(),p))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Il(t,i,a,c){i&=~Cf,i&=~mi,t.suspendedLanes|=i,t.pingedLanes&=~i,c&&(t.warmLanes|=i),c=t.expirationTimes;for(var p=i;0<p;){var g=31-Ke(p),T=1<<g;c[g]=-1,p&=~T}a!==0&&uh(t,a,i)}function hs(){return(Pe&6)===0?(Aa(0),!1):!0}function Of(){if(Ee!==null){if(Ie===0)var t=Ee.return;else t=Ee,Qn=si=null,Hu(t),lr=null,ca=0,t=Ee;for(;t!==null;)O2(t.alternate,t),t=t.return;Ee=null}}function hr(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,fm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),sl=0,Of(),Ve=t,Ee=a=Xn(t.current,null),De=i,Ie=0,Jt=null,Rl=!1,ur=Hr(t,i),Ef=!1,fr=en=Cf=mi=zl=nt=0,jt=Ea=null,Af=!1,(i&8)!==0&&(i|=i&32);var c=t.entangledLanes;if(c!==0)for(t=t.entanglements,c&=i;0<c;){var p=31-Ke(c),g=1<<p;i|=t[p],c&=~g}return ol=i,Ro(),a}function t0(t,i){be=null,P.H=ma,i===nr||i===$o?(i=mp(),Ie=3):i===Ru?(i=mp(),Ie=4):Ie=i===cf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jt=i,Ee===null&&(nt=1,ns(t,fn(i,t.current)))}function n0(){var t=Qt.current;return t===null?!0:(De&4194048)===De?gn===null:(De&62914560)===De||(De&536870912)!==0?t===gn:!1}function l0(){var t=P.H;return P.H=ma,t===null?ma:t}function i0(){var t=P.A;return P.A=jy,t}function ps(){nt=4,Rl||(De&4194048)!==De&&Qt.current!==null||(ur=!0),(zl&134217727)===0&&(mi&134217727)===0||Ve===null||Il(Ve,De,en,!1)}function Nf(t,i,a){var c=Pe;Pe|=2;var p=l0(),g=i0();(Ve!==t||De!==i)&&(ds=null,hr(t,i)),i=!1;var T=nt;e:do try{if(Ie!==0&&Ee!==null){var k=Ee,E=Jt;switch(Ie){case 8:Of(),T=6;break e;case 3:case 2:case 9:case 6:Qt.current===null&&(i=!0);var N=Ie;if(Ie=0,Jt=null,pr(t,k,E,N),a&&ur){T=0;break e}break;default:N=Ie,Ie=0,Jt=null,pr(t,k,E,N)}}Hy(),T=nt;break}catch(G){t0(t,G)}while(!0);return i&&t.shellSuspendCounter++,Qn=si=null,Pe=c,P.H=p,P.A=g,Ee===null&&(Ve=null,De=0,Ro()),T}function Hy(){for(;Ee!==null;)r0(Ee)}function Ky(t,i){var a=Pe;Pe|=2;var c=l0(),p=i0();Ve!==t||De!==i?(ds=null,fs=Ot()+500,hr(t,i)):ur=Hr(t,i);e:do try{if(Ie!==0&&Ee!==null){i=Ee;var g=Jt;t:switch(Ie){case 1:Ie=0,Jt=null,pr(t,i,g,1);break;case 2:case 9:if(gp(g)){Ie=0,Jt=null,a0(i);break}i=function(){Ie!==2&&Ie!==9||Ve!==t||(Ie=7),Mn(t)},g.then(i,i);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:gp(g)?(Ie=0,Jt=null,a0(i)):(Ie=0,Jt=null,pr(t,i,g,7));break;case 5:var T=null;switch(Ee.tag){case 26:T=Ee.memoizedState;case 5:case 27:var k=Ee;if(T?Z0(T):k.stateNode.complete){Ie=0,Jt=null;var E=k.sibling;if(E!==null)Ee=E;else{var N=k.return;N!==null?(Ee=N,gs(N)):Ee=null}break t}}Ie=0,Jt=null,pr(t,i,g,5);break;case 6:Ie=0,Jt=null,pr(t,i,g,6);break;case 8:Of(),nt=6;break e;default:throw Error(r(462))}}Vy();break}catch(G){t0(t,G)}while(!0);return Qn=si=null,P.H=c,P.A=p,Pe=a,Ee!==null?0:(Ve=null,De=0,Ro(),nt)}function Vy(){for(;Ee!==null&&!Uc();)r0(Ee)}function r0(t){var i=D2(t.alternate,t,ol);t.memoizedProps=t.pendingProps,i===null?gs(t):Ee=i}function a0(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=B2(a,i,i.pendingProps,i.type,void 0,De);break;case 11:i=B2(a,i,i.pendingProps,i.type.render,i.ref,De);break;case 5:Hu(i);default:O2(a,i),i=Ee=ip(i,ol),i=D2(a,i,ol)}t.memoizedProps=t.pendingProps,i===null?gs(t):Ee=i}function pr(t,i,a,c){Qn=si=null,Hu(i),lr=null,ca=0;var p=i.return;try{if(Py(t,p,i,a,De)){nt=1,ns(t,fn(a,t.current)),Ee=null;return}}catch(g){if(p!==null)throw Ee=p,g;nt=1,ns(t,fn(a,t.current)),Ee=null;return}i.flags&32768?(Ne||c===1?t=!0:ur||(De&536870912)!==0?t=!1:(Rl=t=!0,(c===2||c===9||c===3||c===6)&&(c=Qt.current,c!==null&&c.tag===13&&(c.flags|=16384))),o0(i,t)):gs(i)}function gs(t){var i=t;do{if((i.flags&32768)!==0){o0(i,Rl);return}t=i.return;var a=My(i.alternate,i,ol);if(a!==null){Ee=a;return}if(i=i.sibling,i!==null){Ee=i;return}Ee=i=t}while(i!==null);nt===0&&(nt=5)}function o0(t,i){do{var a=Gy(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);nt=6,Ee=null}function s0(t,i,a,c,p,g,T,k,E){t.cancelPendingCommit=null;do ys();while(yt!==0);if((Pe&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(g=i.lanes|i.childLanes,g|=bu,A6(t,a,g,T,k,E),t===Ve&&(Ee=Ve=null,De=0),dr=i,Fl=t,sl=a,Sf=g,Df=p,Q2=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Wy(ge,function(){return h0(),null})):(t.callbackNode=null,t.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=P.T,P.T=null,p=Y.p,Y.p=2,T=Pe,Pe|=4;try{qy(t,i,a)}finally{Pe=T,Y.p=p,P.T=c}}yt=1,c0(),u0(),f0()}}function c0(){if(yt===1){yt=0;var t=Fl,i=dr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var c=Y.p;Y.p=2;var p=Pe;Pe|=4;try{j2(i,t);var g=Uf,T=Xh(t.containerInfo),k=g.focusedElem,E=g.selectionRange;if(T!==k&&k&&k.ownerDocument&&Vh(k.ownerDocument.documentElement,k)){if(E!==null&&pu(k)){var N=E.start,G=E.end;if(G===void 0&&(G=N),"selectionStart"in k)k.selectionStart=N,k.selectionEnd=Math.min(G,k.value.length);else{var H=k.ownerDocument||document,L=H&&H.defaultView||window;if(L.getSelection){var F=L.getSelection(),re=k.textContent.length,de=Math.min(E.start,re),Ue=E.end===void 0?de:Math.min(E.end,re);!F.extend&&de>Ue&&(T=Ue,Ue=de,de=T);var D=Kh(k,de),S=Kh(k,Ue);if(D&&S&&(F.rangeCount!==1||F.anchorNode!==D.node||F.anchorOffset!==D.offset||F.focusNode!==S.node||F.focusOffset!==S.offset)){var O=H.createRange();O.setStart(D.node,D.offset),F.removeAllRanges(),de>Ue?(F.addRange(O),F.extend(S.node,S.offset)):(O.setEnd(S.node,S.offset),F.addRange(O))}}}}for(H=[],F=k;F=F.parentNode;)F.nodeType===1&&H.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<H.length;k++){var U=H[k];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Ss=!!jf,Uf=jf=null}finally{Pe=p,Y.p=c,P.T=a}}t.current=i,yt=2}}function u0(){if(yt===2){yt=0;var t=Fl,i=dr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var c=Y.p;Y.p=2;var p=Pe;Pe|=4;try{I2(t,i.alternate,i)}finally{Pe=p,Y.p=c,P.T=a}}yt=3}}function f0(){if(yt===4||yt===3){yt=0,Zc();var t=Fl,i=dr,a=sl,c=Q2;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yt=5:(yt=0,dr=Fl=null,d0(t,t.pendingLanes));var p=t.pendingLanes;if(p===0&&(Pl=null),Xc(a),i=i.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Nt,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=P.T,p=Y.p,Y.p=2,P.T=null;try{for(var g=t.onRecoverableError,T=0;T<c.length;T++){var k=c[T];g(k.value,{componentStack:k.stack})}}finally{P.T=i,Y.p=p}}(sl&3)!==0&&ys(),Mn(t),p=t.pendingLanes,(a&261930)!==0&&(p&42)!==0?t===_f?Ca++:(Ca=0,_f=t):Ca=0,Aa(0)}}function d0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,oa(i)))}function ys(){return c0(),u0(),f0(),h0()}function h0(){if(yt!==5)return!1;var t=Fl,i=Sf;Sf=0;var a=Xc(sl),c=P.T,p=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Df,Df=null;var g=Fl,T=sl;if(yt=0,dr=Fl=null,sl=0,(Pe&6)!==0)throw Error(r(331));var k=Pe;if(Pe|=4,V2(g.current),Z2(g,g.current,T,a),Pe=k,Aa(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Nt,g)}catch{}return!0}finally{Y.p=p,P.T=c,d0(t,i)}}function p0(t,i,a){i=fn(a,i),i=sf(t.stateNode,i,2),t=_l(t,i,2),t!==null&&(Kr(t,2),Mn(t))}function Me(t,i,a){if(t.tag===3)p0(t,t,a);else for(;i!==null;){if(i.tag===3){p0(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pl===null||!Pl.has(c))){t=fn(a,t),a=g2(2),c=_l(i,a,2),c!==null&&(y2(a,c,i,t),Kr(c,2),Mn(c));break}}i=i.return}}function Lf(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Uy;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(Ef=!0,p.add(a),t=Xy.bind(null,t,i,a),i.then(t,t))}function Xy(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(De&a)===a&&(nt===4||nt===3&&(De&62914560)===De&&300>Ot()-us?(Pe&2)===0&&hr(t,0):Cf|=a,fr===De&&(fr=0)),Mn(t)}function g0(t,i){i===0&&(i=ch()),t=ri(t,i),t!==null&&(Kr(t,i),Mn(t))}function Yy(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),g0(t,a)}function Qy(t,i){var a=0;switch(t.tag){case 31:case 13:var c=t.stateNode,p=t.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=t.stateNode;break;case 22:c=t.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(i),g0(t,a)}function Wy(t,i){return zi(t,i)}var ms=null,gr=null,Rf=!1,Ts=!1,zf=!1,Ml=0;function Mn(t){t!==gr&&t.next===null&&(gr===null?ms=gr=t:gr=gr.next=t),Ts=!0,Rf||(Rf=!0,em())}function Aa(t,i){if(!zf&&Ts){zf=!0;do for(var a=!1,c=ms;c!==null;){if(t!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var T=c.suspendedLanes,k=c.pingedLanes;g=(1<<31-Ke(42|t)+1)-1,g&=p&~(T&~k),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(a=!0,b0(c,g))}else g=De,g=xo(c,c===Ve?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||Hr(c,g)||(a=!0,b0(c,g));c=c.next}while(a);zf=!1}}function Jy(){y0()}function y0(){Ts=Rf=!1;var t=0;Ml!==0&&um()&&(t=Ml);for(var i=Ot(),a=null,c=ms;c!==null;){var p=c.next,g=m0(c,i);g===0?(c.next=null,a===null?ms=p:a.next=p,p===null&&(gr=a)):(a=c,(t!==0||(g&3)!==0)&&(Ts=!0)),c=p}yt!==0&&yt!==5||Aa(t),Ml!==0&&(Ml=0)}function m0(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,p=t.expirationTimes,g=t.pendingLanes&-62914561;0<g;){var T=31-Ke(g),k=1<<T,E=p[T];E===-1?((k&a)===0||(k&c)!==0)&&(p[T]=C6(k,i)):E<=i&&(t.expiredLanes|=k),g&=~k}if(i=Ve,a=De,a=xo(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c=t.callbackNode,a===0||t===i&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return c!==null&&c!==null&&Zr(c),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Hr(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(c!==null&&Zr(c),Xc(a)){case 2:case 8:a=ee;break;case 32:a=ge;break;case 268435456:a=qe;break;default:a=ge}return c=T0.bind(null,t),a=zi(a,c),t.callbackPriority=i,t.callbackNode=a,i}return c!==null&&c!==null&&Zr(c),t.callbackPriority=2,t.callbackNode=null,2}function T0(t,i){if(yt!==0&&yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ys()&&t.callbackNode!==a)return null;var c=De;return c=xo(t,t===Ve?c:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),c===0?null:(J2(t,c,i),m0(t,Ot()),t.callbackNode!=null&&t.callbackNode===a?T0.bind(null,t):null)}function b0(t,i){if(ys())return null;J2(t,i,!0)}function em(){dm(function(){(Pe&6)!==0?zi(j,Jy):y0()})}function Pf(){if(Ml===0){var t=er;t===0&&(t=bo,bo<<=1,(bo&261888)===0&&(bo=256)),Ml=t}return Ml}function v0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Co(""+t)}function k0(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function tm(t,i,a,c,p){if(i==="submit"&&a&&a.stateNode===p){var g=v0((p[It]||null).action),T=c.submitter;T&&(i=(i=T[It]||null)?v0(i.formAction):T.getAttribute("formAction"),i!==null&&(g=i,T=null));var k=new _o("action","action",null,c,p);t.push({event:k,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ml!==0){var E=T?k0(p,T):new FormData(p);tf(a,{pending:!0,data:E,method:p.method,action:g},null,E)}}else typeof g=="function"&&(k.preventDefault(),E=T?k0(p,T):new FormData(p),tf(a,{pending:!0,data:E,method:p.method,action:g},g,E))},currentTarget:p}]})}}for(var Ff=0;Ff<Tu.length;Ff++){var If=Tu[Ff],nm=If.toLowerCase(),lm=If[0].toUpperCase()+If.slice(1);xn(nm,"on"+lm)}xn(Wh,"onAnimationEnd"),xn(Jh,"onAnimationIteration"),xn(ep,"onAnimationStart"),xn("dblclick","onDoubleClick"),xn("focusin","onFocus"),xn("focusout","onBlur"),xn(by,"onTransitionRun"),xn(vy,"onTransitionStart"),xn(ky,"onTransitionCancel"),xn(tp,"onTransitionEnd"),Gi("onMouseEnter",["mouseout","mouseover"]),Gi("onMouseLeave",["mouseout","mouseover"]),Gi("onPointerEnter",["pointerout","pointerover"]),Gi("onPointerLeave",["pointerout","pointerover"]),ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ti("onBeforeInput",["compositionend","keypress","textInput","paste"]),ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sa));function x0(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],p=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var k=c[T],E=k.instance,N=k.currentTarget;if(k=k.listener,E!==g&&p.isPropagationStopped())break e;g=k,p.currentTarget=N;try{g(p)}catch(G){Lo(G)}p.currentTarget=null,g=E}else for(T=0;T<c.length;T++){if(k=c[T],E=k.instance,N=k.currentTarget,k=k.listener,E!==g&&p.isPropagationStopped())break e;g=k,p.currentTarget=N;try{g(p)}catch(G){Lo(G)}p.currentTarget=null,g=E}}}}function Ce(t,i){var a=i[Yc];a===void 0&&(a=i[Yc]=new Set);var c=t+"__bubble";a.has(c)||(B0(i,t,2,!1),a.add(c))}function Mf(t,i,a){var c=0;i&&(c|=4),B0(a,t,c,i)}var bs="_reactListening"+Math.random().toString(36).slice(2);function Gf(t){if(!t[bs]){t[bs]=!0,yh.forEach(function(a){a!=="selectionchange"&&(im.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bs]||(i[bs]=!0,Mf("selectionchange",!1,i))}}function B0(t,i,a,c){switch(W0(i)){case 2:var p=Nm;break;case 8:p=Lm;break;default:p=td}a=p.bind(null,i,a,t),p=void 0,!ru||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?t.addEventListener(i,a,{capture:!0,passive:p}):t.addEventListener(i,a,!0):p!==void 0?t.addEventListener(i,a,{passive:p}):t.addEventListener(i,a,!1)}function qf(t,i,a,c,p){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var k=c.stateNode.containerInfo;if(k===p)break;if(T===4)for(T=c.return;T!==null;){var E=T.tag;if((E===3||E===4)&&T.stateNode.containerInfo===p)return;T=T.return}for(;k!==null;){if(T=Fi(k),T===null)return;if(E=T.tag,E===5||E===6||E===26||E===27){c=g=T;continue e}k=k.parentNode}}c=c.return}Sh(function(){var N=g,G=lu(a),H=[];e:{var L=np.get(t);if(L!==void 0){var F=_o,re=t;switch(t){case"keypress":if(So(a)===0)break e;case"keydown":case"keyup":F=Q6;break;case"focusin":re="focus",F=cu;break;case"focusout":re="blur",F=cu;break;case"beforeblur":case"afterblur":F=cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=M6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=ey;break;case Wh:case Jh:case ep:F=$6;break;case tp:F=ny;break;case"scroll":case"scrollend":F=F6;break;case"wheel":F=iy;break;case"copy":case"cut":case"paste":F=U6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Lh;break;case"toggle":case"beforetoggle":F=ay}var de=(i&4)!==0,Ue=!de&&(t==="scroll"||t==="scrollend"),D=de?L!==null?L+"Capture":null:L;de=[];for(var S=N,O;S!==null;){var U=S;if(O=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||O===null||D===null||(U=Yr(S,D),U!=null&&de.push(Da(S,U,O))),Ue)break;S=S.return}0<de.length&&(L=new F(L,re,null,a,G),H.push({event:L,listeners:de}))}}if((i&7)===0){e:{if(L=t==="mouseover"||t==="pointerover",F=t==="mouseout"||t==="pointerout",L&&a!==nu&&(re=a.relatedTarget||a.fromElement)&&(Fi(re)||re[Pi]))break e;if((F||L)&&(L=G.window===G?G:(L=G.ownerDocument)?L.defaultView||L.parentWindow:window,F?(re=a.relatedTarget||a.toElement,F=N,re=re?Fi(re):null,re!==null&&(Ue=s(re),de=re.tag,re!==Ue||de!==5&&de!==27&&de!==6)&&(re=null)):(F=null,re=N),F!==re)){if(de=Oh,U="onMouseLeave",D="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(de=Lh,U="onPointerLeave",D="onPointerEnter",S="pointer"),Ue=F==null?L:Xr(F),O=re==null?L:Xr(re),L=new de(U,S+"leave",F,a,G),L.target=Ue,L.relatedTarget=O,U=null,Fi(G)===N&&(de=new de(D,S+"enter",re,a,G),de.target=O,de.relatedTarget=Ue,U=de),Ue=U,F&&re)t:{for(de=rm,D=F,S=re,O=0,U=D;U;U=de(U))O++;U=0;for(var ce=S;ce;ce=de(ce))U++;for(;0<O-U;)D=de(D),O--;for(;0<U-O;)S=de(S),U--;for(;O--;){if(D===S||S!==null&&D===S.alternate){de=D;break t}D=de(D),S=de(S)}de=null}else de=null;F!==null&&w0(H,L,F,de,!1),re!==null&&Ue!==null&&w0(H,Ue,re,de,!0)}}e:{if(L=N?Xr(N):window,F=L.nodeName&&L.nodeName.toLowerCase(),F==="select"||F==="input"&&L.type==="file")var Re=qh;else if(Mh(L))if($h)Re=yy;else{Re=py;var oe=hy}else F=L.nodeName,!F||F.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?N&&tu(N.elementType)&&(Re=qh):Re=gy;if(Re&&(Re=Re(t,N))){Gh(H,Re,a,G);break e}oe&&oe(t,L,N),t==="focusout"&&N&&L.type==="number"&&N.memoizedProps.value!=null&&eu(L,"number",L.value)}switch(oe=N?Xr(N):window,t){case"focusin":(Mh(oe)||oe.contentEditable==="true")&&(Hi=oe,gu=N,ia=null);break;case"focusout":ia=gu=Hi=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Yh(H,a,G);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":Yh(H,a,G)}var Be;if(fu)e:{switch(t){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Zi?Fh(t,a)&&(_e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Rh&&a.locale!=="ko"&&(Zi||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Zi&&(Be=Dh()):(Bl=G,au="value"in Bl?Bl.value:Bl.textContent,Zi=!0)),oe=vs(N,_e),0<oe.length&&(_e=new Nh(_e,t,null,a,G),H.push({event:_e,listeners:oe}),Be?_e.data=Be:(Be=Ih(a),Be!==null&&(_e.data=Be)))),(Be=sy?cy(t,a):uy(t,a))&&(_e=vs(N,"onBeforeInput"),0<_e.length&&(oe=new Nh("onBeforeInput","beforeinput",null,a,G),H.push({event:oe,listeners:_e}),oe.data=Be)),tm(H,t,N,a,G)}x0(H,i)})}function Da(t,i,a){return{instance:t,listener:i,currentTarget:a}}function vs(t,i){for(var a=i+"Capture",c=[];t!==null;){var p=t,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Yr(t,a),p!=null&&c.unshift(Da(t,p,g)),p=Yr(t,i),p!=null&&c.push(Da(t,p,g))),t.tag===3)return c;t=t.return}return[]}function rm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function w0(t,i,a,c,p){for(var g=i._reactName,T=[];a!==null&&a!==c;){var k=a,E=k.alternate,N=k.stateNode;if(k=k.tag,E!==null&&E===c)break;k!==5&&k!==26&&k!==27||N===null||(E=N,p?(N=Yr(a,g),N!=null&&T.unshift(Da(a,N,E))):p||(N=Yr(a,g),N!=null&&T.push(Da(a,N,E)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var am=/\r\n?/g,om=/\u0000|\uFFFD/g;function E0(t){return(typeof t=="string"?t:""+t).replace(am,`
`).replace(om,"")}function C0(t,i){return i=E0(i),E0(t)===i}function je(t,i,a,c,p,g){switch(a){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||$i(t,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&$i(t,""+c);break;case"className":wo(t,"class",c);break;case"tabIndex":wo(t,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":wo(t,a,c);break;case"style":Ch(t,c,g);break;case"data":if(i!=="object"){wo(t,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(a);break}c=Co(""+c),t.setAttribute(a,c);break;case"action":case"formAction":if(typeof c=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(a==="formAction"?(i!=="input"&&je(t,i,"name",p.name,p,null),je(t,i,"formEncType",p.formEncType,p,null),je(t,i,"formMethod",p.formMethod,p,null),je(t,i,"formTarget",p.formTarget,p,null)):(je(t,i,"encType",p.encType,p,null),je(t,i,"method",p.method,p,null),je(t,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){t.removeAttribute(a);break}c=Co(""+c),t.setAttribute(a,c);break;case"onClick":c!=null&&(t.onclick=Kn);break;case"onScroll":c!=null&&Ce("scroll",t);break;case"onScrollEnd":c!=null&&Ce("scrollend",t);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(a=c.__html,a!=null){if(p.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":t.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){t.removeAttribute("xlink:href");break}a=Co(""+c),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(a,""+c):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":c===!0?t.setAttribute(a,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?t.setAttribute(a,c):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?t.setAttribute(a,c):t.removeAttribute(a);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?t.removeAttribute(a):t.setAttribute(a,c);break;case"popover":Ce("beforetoggle",t),Ce("toggle",t),Bo(t,"popover",c);break;case"xlinkActuate":Hn(t,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Hn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Hn(t,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Hn(t,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Hn(t,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Hn(t,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Hn(t,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Hn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Hn(t,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Bo(t,"is",c);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=z6.get(a)||a,Bo(t,a,c))}}function $f(t,i,a,c,p,g){switch(a){case"style":Ch(t,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(a=c.__html,a!=null){if(p.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof c=="string"?$i(t,c):(typeof c=="number"||typeof c=="bigint")&&$i(t,""+c);break;case"onScroll":c!=null&&Ce("scroll",t);break;case"onScrollEnd":c!=null&&Ce("scrollend",t);break;case"onClick":c!=null&&(t.onclick=Kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mh.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(p=a.endsWith("Capture"),i=a.slice(2,p?a.length-7:void 0),g=t[It]||null,g=g!=null?g[a]:null,typeof g=="function"&&t.removeEventListener(i,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,c,p);break e}a in t?t[a]=c:c===!0?t.setAttribute(a,""):Bo(t,a,c)}}}function Ct(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",t),Ce("load",t);var c=!1,p=!1,g;for(g in a)if(a.hasOwnProperty(g)){var T=a[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:je(t,i,g,T,a,null)}}p&&je(t,i,"srcSet",a.srcSet,a,null),c&&je(t,i,"src",a.src,a,null);return;case"input":Ce("invalid",t);var k=g=T=p=null,E=null,N=null;for(c in a)if(a.hasOwnProperty(c)){var G=a[c];if(G!=null)switch(c){case"name":p=G;break;case"type":T=G;break;case"checked":E=G;break;case"defaultChecked":N=G;break;case"value":g=G;break;case"defaultValue":k=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,i));break;default:je(t,i,c,G,a,null)}}xh(t,g,k,E,N,T,p,!1);return;case"select":Ce("invalid",t),c=T=g=null;for(p in a)if(a.hasOwnProperty(p)&&(k=a[p],k!=null))switch(p){case"value":g=k;break;case"defaultValue":T=k;break;case"multiple":c=k;default:je(t,i,p,k,a,null)}i=g,a=T,t.multiple=!!c,i!=null?qi(t,!!c,i,!1):a!=null&&qi(t,!!c,a,!0);return;case"textarea":Ce("invalid",t),g=p=c=null;for(T in a)if(a.hasOwnProperty(T)&&(k=a[T],k!=null))switch(T){case"value":c=k;break;case"defaultValue":p=k;break;case"children":g=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(91));break;default:je(t,i,T,k,a,null)}wh(t,c,p,g);return;case"option":for(E in a)a.hasOwnProperty(E)&&(c=a[E],c!=null)&&(E==="selected"?t.selected=c&&typeof c!="function"&&typeof c!="symbol":je(t,i,E,c,a,null));return;case"dialog":Ce("beforetoggle",t),Ce("toggle",t),Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":Ce("load",t);break;case"video":case"audio":for(c=0;c<Sa.length;c++)Ce(Sa[c],t);break;case"image":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"embed":case"source":case"link":Ce("error",t),Ce("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(c=a[N],c!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:je(t,i,N,c,a,null)}return;default:if(tu(i)){for(G in a)a.hasOwnProperty(G)&&(c=a[G],c!==void 0&&$f(t,i,G,c,a,void 0));return}}for(k in a)a.hasOwnProperty(k)&&(c=a[k],c!=null&&je(t,i,k,c,a,null))}function sm(t,i,a,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,T=null,k=null,E=null,N=null,G=null;for(F in a){var H=a[F];if(a.hasOwnProperty(F)&&H!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":E=H;default:c.hasOwnProperty(F)||je(t,i,F,null,c,H)}}for(var L in c){var F=c[L];if(H=a[L],c.hasOwnProperty(L)&&(F!=null||H!=null))switch(L){case"type":g=F;break;case"name":p=F;break;case"checked":N=F;break;case"defaultChecked":G=F;break;case"value":T=F;break;case"defaultValue":k=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,i));break;default:F!==H&&je(t,i,L,F,c,H)}}Jc(t,T,k,E,N,G,g,p);return;case"select":F=T=k=L=null;for(g in a)if(E=a[g],a.hasOwnProperty(g)&&E!=null)switch(g){case"value":break;case"multiple":F=E;default:c.hasOwnProperty(g)||je(t,i,g,null,c,E)}for(p in c)if(g=c[p],E=a[p],c.hasOwnProperty(p)&&(g!=null||E!=null))switch(p){case"value":L=g;break;case"defaultValue":k=g;break;case"multiple":T=g;default:g!==E&&je(t,i,p,g,c,E)}i=k,a=T,c=F,L!=null?qi(t,!!a,L,!1):!!c!=!!a&&(i!=null?qi(t,!!a,i,!0):qi(t,!!a,a?[]:"",!1));return;case"textarea":F=L=null;for(k in a)if(p=a[k],a.hasOwnProperty(k)&&p!=null&&!c.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:je(t,i,k,null,c,p)}for(T in c)if(p=c[T],g=a[T],c.hasOwnProperty(T)&&(p!=null||g!=null))switch(T){case"value":L=p;break;case"defaultValue":F=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(r(91));break;default:p!==g&&je(t,i,T,p,c,g)}Bh(t,L,F);return;case"option":for(var re in a)L=a[re],a.hasOwnProperty(re)&&L!=null&&!c.hasOwnProperty(re)&&(re==="selected"?t.selected=!1:je(t,i,re,null,c,L));for(E in c)L=c[E],F=a[E],c.hasOwnProperty(E)&&L!==F&&(L!=null||F!=null)&&(E==="selected"?t.selected=L&&typeof L!="function"&&typeof L!="symbol":je(t,i,E,L,c,F));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)L=a[de],a.hasOwnProperty(de)&&L!=null&&!c.hasOwnProperty(de)&&je(t,i,de,null,c,L);for(N in c)if(L=c[N],F=a[N],c.hasOwnProperty(N)&&L!==F&&(L!=null||F!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(r(137,i));break;default:je(t,i,N,L,c,F)}return;default:if(tu(i)){for(var Ue in a)L=a[Ue],a.hasOwnProperty(Ue)&&L!==void 0&&!c.hasOwnProperty(Ue)&&$f(t,i,Ue,void 0,c,L);for(G in c)L=c[G],F=a[G],!c.hasOwnProperty(G)||L===F||L===void 0&&F===void 0||$f(t,i,G,L,c,F);return}}for(var D in a)L=a[D],a.hasOwnProperty(D)&&L!=null&&!c.hasOwnProperty(D)&&je(t,i,D,null,c,L);for(H in c)L=c[H],F=a[H],!c.hasOwnProperty(H)||L===F||L==null&&F==null||je(t,i,H,L,c,F)}function A0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),c=0;c<a.length;c++){var p=a[c],g=p.transferSize,T=p.initiatorType,k=p.duration;if(g&&k&&A0(T)){for(T=0,k=p.responseEnd,c+=1;c<a.length;c++){var E=a[c],N=E.startTime;if(N>k)break;var G=E.transferSize,H=E.initiatorType;G&&A0(H)&&(E=E.responseEnd,T+=G*(E<k?1:(k-N)/(E-N)))}if(--c,i+=8*(g+T)/(p.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var jf=null,Uf=null;function ks(t){return t.nodeType===9?t:t.ownerDocument}function S0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function D0(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Zf(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Hf=null;function um(){var t=window.event;return t&&t.type==="popstate"?t===Hf?!1:(Hf=t,!0):(Hf=null,!1)}var _0=typeof setTimeout=="function"?setTimeout:void 0,fm=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,dm=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(t){return O0.resolve(null).then(t).catch(hm)}:_0;function hm(t){setTimeout(function(){throw t})}function Gl(t){return t==="head"}function N0(t,i){var a=i,c=0;do{var p=a.nextSibling;if(t.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"||a==="/&"){if(c===0){t.removeChild(p),br(i);return}c--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")c++;else if(a==="html")_a(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_a(a);for(var g=a.firstChild;g;){var T=g.nextSibling,k=g.nodeName;g[Vr]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=T}}else a==="body"&&_a(t.ownerDocument.body);a=p}while(a);br(i)}function L0(t,i){var a=t;t=0;do{var c=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=c}while(a)}function Kf(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Qc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function pm(t,i,a,c){for(;t.nodeType===1;){var p=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(c){if(!t[Vr])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(g=t.getAttribute("rel"),g==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(g!==p.rel||t.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||t.getAttribute("title")!==(p.title==null?null:p.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(g=t.getAttribute("src"),(g!==(p.src==null?null:p.src)||t.getAttribute("type")!==(p.type==null?null:p.type)||t.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&t.getAttribute("name")===g)return t}else return t;if(t=yn(t.nextSibling),t===null)break}return null}function gm(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yn(t.nextSibling),t===null))return null;return t}function R0(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=yn(t.nextSibling),t===null))return null;return t}function Vf(t){return t.data==="$?"||t.data==="$~"}function Xf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ym(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var c=function(){i(),a.removeEventListener("DOMContentLoaded",c)};a.addEventListener("DOMContentLoaded",c),t._reactRetry=c}}function yn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Yf=null;function z0(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return yn(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function P0(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function F0(t,i,a){switch(i=ks(a),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _a(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Qc(t)}var mn=new Map,I0=new Set;function xs(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var cl=Y.d;Y.d={f:mm,r:Tm,D:bm,C:vm,L:km,m:xm,X:wm,S:Bm,M:Em};function mm(){var t=cl.f(),i=hs();return t||i}function Tm(t){var i=Ii(t);i!==null&&i.tag===5&&i.type==="form"?t2(i):cl.r(t)}var yr=typeof document>"u"?null:document;function M0(t,i,a){var c=yr;if(c&&typeof i=="string"&&i){var p=cn(i);p='link[rel="'+t+'"][href="'+p+'"]',typeof a=="string"&&(p+='[crossorigin="'+a+'"]'),I0.has(p)||(I0.add(p),t={rel:t,crossOrigin:a,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),Ct(i,"link",t),bt(i),c.head.appendChild(i)))}}function bm(t){cl.D(t),M0("dns-prefetch",t,null)}function vm(t,i){cl.C(t,i),M0("preconnect",t,i)}function km(t,i,a){cl.L(t,i,a);var c=yr;if(c&&t&&i){var p='link[rel="preload"][as="'+cn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(p+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(p+='[imagesizes="'+cn(a.imageSizes)+'"]')):p+='[href="'+cn(t)+'"]';var g=p;switch(i){case"style":g=mr(t);break;case"script":g=Tr(t)}mn.has(g)||(t=m({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),mn.set(g,t),c.querySelector(p)!==null||i==="style"&&c.querySelector(Oa(g))||i==="script"&&c.querySelector(Na(g))||(i=c.createElement("link"),Ct(i,"link",t),bt(i),c.head.appendChild(i)))}}function xm(t,i){cl.m(t,i);var a=yr;if(a&&t){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+cn(c)+'"][href="'+cn(t)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Tr(t)}if(!mn.has(g)&&(t=m({rel:"modulepreload",href:t},i),mn.set(g,t),a.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Na(g)))return}c=a.createElement("link"),Ct(c,"link",t),bt(c),a.head.appendChild(c)}}}function Bm(t,i,a){cl.S(t,i,a);var c=yr;if(c&&t){var p=Mi(c).hoistableStyles,g=mr(t);i=i||"default";var T=p.get(g);if(!T){var k={loading:0,preload:null};if(T=c.querySelector(Oa(g)))k.loading=5;else{t=m({rel:"stylesheet",href:t,"data-precedence":i},a),(a=mn.get(g))&&Qf(t,a);var E=T=c.createElement("link");bt(E),Ct(E,"link",t),E._p=new Promise(function(N,G){E.onload=N,E.onerror=G}),E.addEventListener("load",function(){k.loading|=1}),E.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Bs(T,i,c)}T={type:"stylesheet",instance:T,count:1,state:k},p.set(g,T)}}}function wm(t,i){cl.X(t,i);var a=yr;if(a&&t){var c=Mi(a).hoistableScripts,p=Tr(t),g=c.get(p);g||(g=a.querySelector(Na(p)),g||(t=m({src:t,async:!0},i),(i=mn.get(p))&&Wf(t,i),g=a.createElement("script"),bt(g),Ct(g,"link",t),a.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function Em(t,i){cl.M(t,i);var a=yr;if(a&&t){var c=Mi(a).hoistableScripts,p=Tr(t),g=c.get(p);g||(g=a.querySelector(Na(p)),g||(t=m({src:t,async:!0,type:"module"},i),(i=mn.get(p))&&Wf(t,i),g=a.createElement("script"),bt(g),Ct(g,"link",t),a.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function G0(t,i,a,c){var p=(p=se.current)?xs(p):null;if(!p)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=mr(a.href),a=Mi(p).hoistableStyles,c=a.get(i),c||(c={type:"style",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=mr(a.href);var g=Mi(p).hoistableStyles,T=g.get(t);if(T||(p=p.ownerDocument||p,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(t,T),(g=p.querySelector(Oa(t)))&&!g._p&&(T.instance=g,T.state.loading=5),mn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mn.set(t,a),g||Cm(p,t,a,T.state))),i&&c===null)throw Error(r(528,""));return T}if(i&&c!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Tr(a),a=Mi(p).hoistableScripts,c=a.get(i),c||(c={type:"script",instance:null,count:0,state:null},a.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function mr(t){return'href="'+cn(t)+'"'}function Oa(t){return'link[rel="stylesheet"]['+t+"]"}function q0(t){return m({},t,{"data-precedence":t.precedence,precedence:null})}function Cm(t,i,a,c){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=t.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Ct(i,"link",a),bt(i),t.head.appendChild(i))}function Tr(t){return'[src="'+cn(t)+'"]'}function Na(t){return"script[async]"+t}function $0(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var c=t.querySelector('style[data-href~="'+cn(a.href)+'"]');if(c)return i.instance=c,bt(c),c;var p=m({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return c=(t.ownerDocument||t).createElement("style"),bt(c),Ct(c,"style",p),Bs(c,a.precedence,t),i.instance=c;case"stylesheet":p=mr(a.href);var g=t.querySelector(Oa(p));if(g)return i.state.loading|=4,i.instance=g,bt(g),g;c=q0(a),(p=mn.get(p))&&Qf(c,p),g=(t.ownerDocument||t).createElement("link"),bt(g);var T=g;return T._p=new Promise(function(k,E){T.onload=k,T.onerror=E}),Ct(g,"link",c),i.state.loading|=4,Bs(g,a.precedence,t),i.instance=g;case"script":return g=Tr(a.src),(p=t.querySelector(Na(g)))?(i.instance=p,bt(p),p):(c=a,(p=mn.get(g))&&(c=m({},a),Wf(c,p)),t=t.ownerDocument||t,p=t.createElement("script"),bt(p),Ct(p,"link",c),t.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Bs(c,a.precedence,t));return i.instance}function Bs(t,i,a){for(var c=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,T=0;T<c.length;T++){var k=c[T];if(k.dataset.precedence===i)g=k;else if(g!==p)break}g?g.parentNode.insertBefore(t,g.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Qf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Wf(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var ws=null;function j0(t,i,a){if(ws===null){var c=new Map,p=ws=new Map;p.set(a,c)}else p=ws,c=p.get(a),c||(c=new Map,p.set(a,c));if(c.has(t))return c;for(c.set(t,null),a=a.getElementsByTagName(t),p=0;p<a.length;p++){var g=a[p];if(!(g[Vr]||g[xt]||t==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(i)||"";T=t+T;var k=c.get(T);k?k.push(g):c.set(T,[g])}}return c}function U0(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function Am(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(t=i.disabled,typeof i.precedence=="string"&&t==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Z0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Sm(t,i,a,c){if(a.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var p=mr(c.href),g=i.querySelector(Oa(p));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Es.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=g,bt(g);return}g=i.ownerDocument||i,c=q0(c),(p=mn.get(p))&&Qf(c,p),g=g.createElement("link"),bt(g);var T=g;T._p=new Promise(function(k,E){T.onload=k,T.onerror=E}),Ct(g,"link",c),a.instance=g}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Es.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var Jf=0;function Dm(t,i){return t.stylesheets&&t.count===0&&As(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var c=setTimeout(function(){if(t.stylesheets&&As(t,t.stylesheets),t.unsuspend){var g=t.unsuspend;t.unsuspend=null,g()}},6e4+i);0<t.imgBytes&&Jf===0&&(Jf=62500*cm());var p=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&As(t,t.stylesheets),t.unsuspend)){var g=t.unsuspend;t.unsuspend=null,g()}},(t.imgBytes>Jf?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function Es(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)As(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Cs=null;function As(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Cs=new Map,i.forEach(_m,t),Cs=null,Es.call(t))}function _m(t,i){if(!(i.state.loading&4)){var a=Cs.get(t);if(a)var c=a.get(null);else{a=new Map,Cs.set(t,a);for(var p=t.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var T=p[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(a.set(T.dataset.precedence,T),c=T)}c&&a.set(null,c)}p=i.instance,T=p.getAttribute("data-precedence"),g=a.get(T)||c,g===c&&a.set(null,p),a.set(T,p),this.count++,c=Es.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(p,t.firstChild)),i.state.loading|=4}}var La={$$typeof:q,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Om(t,i,a,c,p,g,T,k,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.hiddenUpdates=Kc(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function H0(t,i,a,c,p,g,T,k,E,N,G,H){return t=new Om(t,i,a,T,E,N,G,H,k),i=1,g===!0&&(i|=24),g=Yt(3,null,null,i),t.current=g,g.stateNode=t,i=Ou(),i.refCount++,t.pooledCache=i,i.refCount++,g.memoizedState={element:c,isDehydrated:a,cache:i},zu(g),t}function K0(t){return t?(t=Xi,t):Xi}function V0(t,i,a,c,p,g){p=K0(p),c.context===null?c.context=p:c.pendingContext=p,c=Dl(i),c.payload={element:a},g=g===void 0?null:g,g!==null&&(c.callback=g),a=_l(t,c,i),a!==null&&(Ut(a,t,i),fa(a,t,i))}function X0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function ed(t,i){X0(t,i),(t=t.alternate)&&X0(t,i)}function Y0(t){if(t.tag===13||t.tag===31){var i=ri(t,67108864);i!==null&&Ut(i,t,67108864),ed(t,67108864)}}function Q0(t){if(t.tag===13||t.tag===31){var i=tn();i=Vc(i);var a=ri(t,i);a!==null&&Ut(a,t,i),ed(t,i)}}var Ss=!0;function Nm(t,i,a,c){var p=P.T;P.T=null;var g=Y.p;try{Y.p=2,td(t,i,a,c)}finally{Y.p=g,P.T=p}}function Lm(t,i,a,c){var p=P.T;P.T=null;var g=Y.p;try{Y.p=8,td(t,i,a,c)}finally{Y.p=g,P.T=p}}function td(t,i,a,c){if(Ss){var p=nd(c);if(p===null)qf(t,i,c,Ds,a),J0(t,c);else if(zm(p,t,i,a,c))c.stopPropagation();else if(J0(t,c),i&4&&-1<Rm.indexOf(t)){for(;p!==null;){var g=Ii(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=ei(g.pendingLanes);if(T!==0){var k=g;for(k.pendingLanes|=2,k.entangledLanes|=2;T;){var E=1<<31-Ke(T);k.entanglements[1]|=E,T&=~E}Mn(g),(Pe&6)===0&&(fs=Ot()+500,Aa(0))}}break;case 31:case 13:k=ri(g,2),k!==null&&Ut(k,g,2),hs(),ed(g,2)}if(g=nd(c),g===null&&qf(t,i,c,Ds,a),g===p)break;p=g}p!==null&&c.stopPropagation()}else qf(t,i,c,null,a)}}function nd(t){return t=lu(t),ld(t)}var Ds=null;function ld(t){if(Ds=null,t=Fi(t),t!==null){var i=s(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=u(i),t!==null)return t;t=null}else if(a===31){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Ds=t,null}function W0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hc()){case j:return 2;case ee:return 8;case ge:case He:return 32;case qe:return 268435456;default:return 32}default:return 32}}var id=!1,ql=null,$l=null,jl=null,Ra=new Map,za=new Map,Ul=[],Rm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J0(t,i){switch(t){case"focusin":case"focusout":ql=null;break;case"dragenter":case"dragleave":$l=null;break;case"mouseover":case"mouseout":jl=null;break;case"pointerover":case"pointerout":Ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(i.pointerId)}}function Pa(t,i,a,c,p,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},i!==null&&(i=Ii(i),i!==null&&Y0(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),t)}function zm(t,i,a,c,p){switch(i){case"focusin":return ql=Pa(ql,t,i,a,c,p),!0;case"dragenter":return $l=Pa($l,t,i,a,c,p),!0;case"mouseover":return jl=Pa(jl,t,i,a,c,p),!0;case"pointerover":var g=p.pointerId;return Ra.set(g,Pa(Ra.get(g)||null,t,i,a,c,p)),!0;case"gotpointercapture":return g=p.pointerId,za.set(g,Pa(za.get(g)||null,t,i,a,c,p)),!0}return!1}function eg(t){var i=Fi(t.target);if(i!==null){var a=s(i);if(a!==null){if(i=a.tag,i===13){if(i=u(a),i!==null){t.blockedOn=i,ph(t.priority,function(){Q0(a)});return}}else if(i===31){if(i=f(a),i!==null){t.blockedOn=i,ph(t.priority,function(){Q0(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _s(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=nd(t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);nu=c,a.target.dispatchEvent(c),nu=null}else return i=Ii(a),i!==null&&Y0(i),t.blockedOn=a,!1;i.shift()}return!0}function tg(t,i,a){_s(t)&&a.delete(i)}function Pm(){id=!1,ql!==null&&_s(ql)&&(ql=null),$l!==null&&_s($l)&&($l=null),jl!==null&&_s(jl)&&(jl=null),Ra.forEach(tg),za.forEach(tg)}function Os(t,i){t.blockedOn===i&&(t.blockedOn=null,id||(id=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pm)))}var Ns=null;function ng(t){Ns!==t&&(Ns=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ns===t&&(Ns=null);for(var i=0;i<t.length;i+=3){var a=t[i],c=t[i+1],p=t[i+2];if(typeof c!="function"){if(ld(c||a)===null)continue;break}var g=Ii(a);g!==null&&(t.splice(i,3),i-=3,tf(g,{pending:!0,data:p,method:a.method,action:c},c,p))}}))}function br(t){function i(E){return Os(E,t)}ql!==null&&Os(ql,t),$l!==null&&Os($l,t),jl!==null&&Os(jl,t),Ra.forEach(i),za.forEach(i);for(var a=0;a<Ul.length;a++){var c=Ul[a];c.blockedOn===t&&(c.blockedOn=null)}for(;0<Ul.length&&(a=Ul[0],a.blockedOn===null);)eg(a),a.blockedOn===null&&Ul.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(c=0;c<a.length;c+=3){var p=a[c],g=a[c+1],T=p[It]||null;if(typeof g=="function")T||ng(a);else if(T){var k=null;if(g&&g.hasAttribute("formAction")){if(p=g,T=g[It]||null)k=T.formAction;else if(ld(p)!==null)continue}else k=T.action;typeof k=="function"?a[c+1]=k:(a.splice(c,3),c-=3),ng(a)}}}function lg(){function t(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(T){return p=T})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(a,20)}function a(){if(!c&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){c=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function rd(t){this._internalRoot=t}Ls.prototype.render=rd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,c=tn();V0(a,c,t,i,null,null)},Ls.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;V0(t.current,2,null,t,null,null),hs(),i[Pi]=null}};function Ls(t){this._internalRoot=t}Ls.prototype.unstable_scheduleHydration=function(t){if(t){var i=hh();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ul.length&&i!==0&&i<Ul[a].priority;a++);Ul.splice(a,0,t),a===0&&eg(t)}};var ig=n.version;if(ig!=="19.2.4")throw Error(r(527,ig,"19.2.4"));Y.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(i),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Fm={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Nt=Rs.inject(Fm),gt=Rs}catch{}}return Ia.createRoot=function(t,i){if(!o(t))throw Error(r(299));var a=!1,c="",p=f2,g=d2,T=h2;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError)),i=H0(t,1,!1,null,null,a,c,null,p,g,T,lg),t[Pi]=i.current,Gf(t),new rd(i)},Ia.hydrateRoot=function(t,i,a){if(!o(t))throw Error(r(299));var c=!1,p="",g=f2,T=d2,k=h2,E=null;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onUncaughtError!==void 0&&(g=a.onUncaughtError),a.onCaughtError!==void 0&&(T=a.onCaughtError),a.onRecoverableError!==void 0&&(k=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),i=H0(t,1,!0,i,a??null,c,p,E,g,T,k,lg),i.context=K0(null),a=i.current,c=tn(),c=Vc(c),p=Dl(c),p.callback=null,_l(a,p,c),a=c,i.current.lanes=a,Kr(i,a),Mn(i),t[Pi]=i.current,Gf(t),new Ls(i)},Ia.version="19.2.4",Ia}var pg;function Vm(){if(pg)return sd.exports;pg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),sd.exports=Km(),sd.exports}var sS=Vm();const Xm="modulepreload",Ym=function(e){return"/"+e},gg={},_i=function(n,l,r){let o=Promise.resolve();if(l&&l.length>0){let d=function(h){return Promise.all(h.map(y=>Promise.resolve(y).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=u?.nonce||u?.getAttribute("nonce");o=d(l.map(h=>{if(h=Ym(h),h in gg)return;gg[h]=!0;const y=h.endsWith(".css"),m=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const b=document.createElement("link");if(b.rel=y?"stylesheet":Xm,y||(b.as="script"),b.crossOrigin="",b.href=h,f&&b.setAttribute("nonce",f),document.head.appendChild(b),y)return new Promise((v,B)=>{b.addEventListener("load",v),b.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return o.then(u=>{for(const f of u||[])f.status==="rejected"&&s(f.reason);return n().catch(s)})};var Qm=Y4();const cS=X4(Qm);let En=[],Hl=0,Vs=0;const z1=e=>{let n=[],l={get(){return l.lc||l.listen(()=>{})(),l.value},lc:0,listen(r){return l.lc=n.push(r),()=>{for(let s=Hl+4;s<En.length;)En[s]===r?En.splice(s,4):s+=4;let o=n.indexOf(r);~o&&(n.splice(o,1),--l.lc||l.off())}},notify(r,o){Vs++;let s=!En.length;for(let u of n)En.push(u,l.value,r,o);if(s){for(Hl=0;Hl<En.length;Hl+=4)En[Hl](En[Hl+1],En[Hl+2],En[Hl+3]);En.length=0}},off(){},set(r){let o=l.value;o!==r&&(l.value=r,l.notify(o))},subscribe(r){let o=l.listen(r);return r(l.value),o},value:e};return l};let Wm=(e,n,l,r)=>(e.events=e.events||{},e.events[l+10]||(e.events[l+10]=r(o=>{e.events[l].reduceRight((s,u)=>(u(s),s),{shared:{},...o})})),e.events[l]=e.events[l]||[],e.events[l].push(n),()=>{let o=e.events[l],s=o.indexOf(n);o.splice(s,1),o.length||(delete e.events[l],e.events[l+10](),delete e.events[l+10])}),Jm=(e,n)=>Wm(e,r=>{let o=n(r);o&&e.events[6].push(o)},5,r=>{let o=e.listen;e.listen=(...u)=>(!e.lc&&!e.active&&(e.active=!0,r()),o(...u));let s=e.off;return e.events[6]=[],e.off=()=>{s(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let u of e.events[6])u();e.events[6]=[]}},1e3)},()=>{e.listen=o,e.off=s}}),e5=(e,n,l)=>{Array.isArray(e)||(e=[e]);let r,o,s=()=>{if(o===Vs)return;o=Vs;let h=e.map(y=>y.get());if(!r||h.some((y,m)=>y!==r[m])){r=h;let y=n(...h);y&&y.then&&y.t?y.then(m=>{r===h&&u.set(m)}):(u.set(y),o=Vs)}},u=z1(void 0),f=u.get;u.get=()=>(s(),f());let d=s;return Jm(u,()=>{let h=e.map(y=>y.listen(d));return s(),()=>{for(let y of h)y()}}),u};const yg=(e,n)=>e5(e,n);function t5(e,n,l){let r=new Set(n).add(void 0);return e.listen((o,s,u)=>{r.has(u)&&l(o,s,u)})}let dd=(e,n)=>l=>{e.current!==l&&(e.current=l,n())};function Qd(e,{keys:n,deps:l=[e,n]}={}){let r=yl.useRef();r.current=e.get();let o=yl.useCallback(u=>(dd(r,u)(e.value),n?.length>0?t5(e,n,dd(r,u)):e.listen(dd(r,u))),l),s=()=>r.current;return yl.useSyncExternalStore(o,s,s)}Math.random.bind(Math);function n5(e,n,l){let r=o=>e(o,...n);return l===void 0?r:Object.assign(r,{lazy:l,lazyArgs:n})}function Q4(e,n,l){let r=e.length-n.length;if(r===0)return e(...n);if(r===1)return n5(e,n,l);throw Error("Wrong number of arguments")}function mg(...e){return Q4(ao,e)}function ao(e,n){if(e===n||Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(n))return!1;if(Array.isArray(e))return l5(e,n);if(e instanceof Map)return i5(e,n);if(e instanceof Set)return r5(e,n);if(e instanceof Date)return e.getTime()===n.getTime();if(e instanceof RegExp)return e.toString()===n.toString();if(Object.keys(e).length!==Object.keys(n).length)return!1;for(let[l,r]of Object.entries(e))if(!(l in n)||!ao(r,n[l]))return!1;return!0}function l5(e,n){if(e.length!==n.length)return!1;for(let[l,r]of e.entries())if(!ao(r,n[l]))return!1;return!0}function i5(e,n){if(e.size!==n.size)return!1;for(let[l,r]of e.entries())if(!n.has(l)||!ao(r,n.get(l)))return!1;return!0}function r5(e,n){if(e.size!==n.size)return!1;let l=[...n];for(let r of e){let o=!1;for(let[s,u]of l.entries())if(ao(r,u)){o=!0,l.splice(s,1);break}if(!o)return!1}return!0}function a5(...e){return Q4(o5,e)}function o5(e,n){let l={};for(let[r,o]of Object.entries(e))l[r]=n(o,r,e);return l}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function hd(e){if(typeof e!="object"||!e)return!1;let n=Object.getPrototypeOf(e);return n!==null&&n!==Object.prototype&&Object.getPrototypeOf(n)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function Wd(e,n,l=".",r){if(!hd(n))return Wd(e,{},l);let o=Object.assign({},n);for(let s in e){if(s==="__proto__"||s==="constructor")continue;let u=e[s];u!=null&&(Array.isArray(u)&&Array.isArray(o[s])?o[s]=[...u,...o[s]]:hd(u)&&hd(o[s])?o[s]=Wd(u,o[s],(l?`${l}.`:"")+s.toString()):o[s]=u)}return o}function s5(e){return(...n)=>n.reduce((l,r)=>Wd(l,r,""),{})}const W4=s5();function c5(e,n,l){let r=o=>e(o,...n);return l===void 0?r:Object.assign(r,{lazy:l,lazyArgs:n})}function mt(e,n,l){let r=e.length-n.length;if(r===0)return e(...n);if(r===1)return c5(e,n,l);throw Error("Wrong number of arguments")}function u5(...e){return mt(f5,e)}const f5=(e,n)=>n.every(l=>l(e));function d5(...e){return mt(h5,e)}const h5=(e,n)=>n.some(l=>l(e)),Bc={done:!1,hasNext:!1},p5=e=>({hasNext:!0,next:e,done:!1});function Rn(e,...n){let l=e,r=n.map(s=>"lazy"in s?g5(s):void 0),o=0;for(;o<n.length;){if(r[o]===void 0||!y5(l)){let d=n[o];l=d(l),o+=1;continue}let s=[];for(let d=o;d<n.length;d++){let h=r[d];if(h===void 0||(s.push(h),h.isSingle))break}let u=[];for(let d of l)if(J4(d,u,s))break;let{isSingle:f}=s.at(-1);l=f?u[0]:u,o+=s.length}return l}function J4(e,n,l){if(l.length===0)return n.push(e),!1;let r=e,o=Bc,s=!1;for(let[u,f]of l.entries()){let{index:d,items:h}=f;if(h.push(r),o=f(r,d,h),f.index+=1,o.hasNext){if(o.hasMany??!1){for(let y of o.next)if(J4(y,n,l.slice(u+1)))return!0;return s}r=o.next}if(!o.hasNext)break;o.done&&(s=!0)}return o.hasNext&&n.push(r),s}function g5(e){let{lazy:n,lazyArgs:l}=e,r=n(...l);return Object.assign(r,{isSingle:n.single??!1,index:0,items:[]})}function y5(e){return typeof e=="string"||typeof e=="object"&&!!e&&Symbol.iterator in e}function m5(e,n){let l=n.length-e.length;if(l===1){let[r,...o]=n;return Rn(r,{lazy:e,lazyArgs:o})}if(l===0){let r={lazy:e,lazyArgs:n};return Object.assign(o=>Rn(o,r),r)}throw Error("Wrong number of arguments")}function T5(...e){return mt(b5,e,v5)}const b5=(e,n)=>n<0?[...e]:e.slice(n);function v5(e){if(e<=0)return p5;let n=e;return l=>n>0?(--n,Bc):{done:!1,hasNext:!0,next:l}}function jn(...e){return mt(k5,e)}const k5=(e,n)=>e.length>=n,e3={asc:(e,n)=>e>n,desc:(e,n)=>e<n};function x5(e,n){let[l,...r]=n;if(!B5(l))return e(l,Jd(...r));let o=Jd(l,...r);return s=>e(s,o)}function Jd(e,n,...l){let r=typeof e=="function"?e:e[0],o=typeof e=="function"?"asc":e[1],{[o]:s}=e3,u=n===void 0?void 0:Jd(n,...l);return(f,d)=>{let h=r(f),y=r(d);return s(h,y)?1:s(y,h)?-1:u?.(f,d)??0}}function B5(e){if(Tg(e))return!0;if(typeof e!="object"||!Array.isArray(e))return!1;let[n,l,...r]=e;return Tg(n)&&typeof l=="string"&&l in e3&&r.length===0}const Tg=e=>typeof e=="function"&&e.length===1;function Ha(...e){return mt(Object.entries,e)}function t3(...e){return mt(w5,e,E5)}const w5=(e,n)=>e.filter(n),E5=e=>(n,l,r)=>e(n,l,r)?{done:!1,hasNext:!0,next:n}:Bc;function bg(...e){return mt(C5,e,A5)}const C5=(e,n)=>e.flatMap(n),A5=e=>(n,l,r)=>{let o=e(n,l,r);return Array.isArray(o)?{done:!1,hasNext:!0,hasMany:!0,next:o}:{done:!1,hasNext:!0,next:o}};function pd(...e){return mt(S5,e)}const S5=(e,n)=>{let l=Object.create(null);for(let r=0;r<e.length;r++){let o=e[r],s=n(o,r,e);if(s!==void 0){let u=l[s];u===void 0?l[s]=[o]:u.push(o)}}return Object.setPrototypeOf(l,Object.prototype),l};function ac(...e){return mt(oo,e)}function oo(e,n){if(e===n||Object.is(e,n))return!0;if(typeof e!="object"||typeof n!="object"||e===null||n===null||Object.getPrototypeOf(e)!==Object.getPrototypeOf(n))return!1;if(Array.isArray(e))return D5(e,n);if(e instanceof Map)return _5(e,n);if(e instanceof Set)return O5(e,n);if(e instanceof Date)return e.getTime()===n.getTime();if(e instanceof RegExp)return e.toString()===n.toString();if(Object.keys(e).length!==Object.keys(n).length)return!1;for(let[l,r]of Object.entries(e))if(!(l in n)||!oo(r,n[l]))return!1;return!0}function D5(e,n){if(e.length!==n.length)return!1;for(let[l,r]of e.entries())if(!oo(r,n[l]))return!1;return!0}function _5(e,n){if(e.size!==n.size)return!1;for(let[l,r]of e.entries())if(!n.has(l)||!oo(r,n.get(l)))return!1;return!0}function O5(e,n){if(e.size!==n.size)return!1;let l=[...n];for(let r of e){let o=!1;for(let[s,u]of l.entries())if(oo(r,u)){o=!0,l.splice(s,1);break}if(!o)return!1}return!0}function so(e){return e===""||e===void 0?!0:Array.isArray(e)?e.length===0:Object.keys(e).length===0}function Or(e){if(e==null||e==="")return!0;if(typeof e!="object")return!1;if("length"in e&&typeof e.length=="number")return e.length===0;if("size"in e&&typeof e.size=="number")return e.size===0;for(let n in e)return!1;return Object.getOwnPropertySymbols(e).length===0}const wc=e=>typeof e=="function";function N5(e){return e!=null}function n3(e){return n=>!e(n)}function lt(e){return e==null}function L5(e){return typeof e=="number"&&!Number.isNaN(e)}function P1(...e){return mt(R5,e)}function R5(e,n){if(e===n||Object.is(e,n))return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;if(e instanceof Map&&n instanceof Map)return z5(e,n);if(e instanceof Set&&n instanceof Set)return P5(e,n);let l=Object.keys(e);if(l.length!==Object.keys(n).length)return!1;for(let r of l){if(!Object.hasOwn(n,r))return!1;let{[r]:o}=e,{[r]:s}=n;if(o!==s||!Object.is(o,s))return!1}return!0}function z5(e,n){if(e.size!==n.size)return!1;for(let[l,r]of e){let o=n.get(l);if(r!==o||!Object.is(r,o))return!1}return!0}function P5(e,n){if(e.size!==n.size)return!1;for(let l of e)if(!n.has(l))return!1;return!0}function Sn(e){return typeof e=="string"}function On(e){return!!e}function F5(...e){return mt(I5,e)}const I5=e=>e.at(-1);function Qa(...e){return mt(M5,e,G5)}const M5=(e,n)=>e.map(n),G5=e=>(n,l,r)=>({done:!1,hasNext:!0,next:e(n,l,r)});function gd(...e){return mt(q5,e)}function q5(e,n){let l={};for(let[r,o]of Object.entries(e))l[r]=n(o,r,e);return l}function $5(...e){return mt(j5,e)}function j5(e,n){let l={...e};for(let[r,o]of Object.entries(l))n(o,r,e)&&delete l[r];return l}function U5(e){let n=!1,l;return()=>(n||=(l=e(),!0),l)}function vg(...e){return mt(Z5,e)}function Z5(e,n){let l={};for(let r of n)r in e&&(l[r]=e[r]);return l}function yd(...e){return n=>Rn(n,...e)}function ki(e,...n){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"?l=>kg(l,e,...n):kg(e,...n)}function kg(e,...n){let l=e;for(let r of n){if(l==null)return;l=l[r]}return l}function H5(e,n){let l=Math.ceil(e),r=Math.floor(n);if(r<l)throw RangeError(`randomInteger: The range [${e.toString()},${n.toString()}] contains no integer`);return Math.floor(Math.random()*(r-l+1)+l)}function K5(...e){return mt(V5,e)}const V5=(e,n,l)=>e.reduce(n,l);function md(...e){return mt(X5,e)}function X5(e,n){let l=[...e];return l.sort(n),l}function l3(...e){return x5(Y5,e)}const Y5=(e,n)=>[...e].sort(n);function xg(e,n,l){return typeof n=="number"||n===void 0?r=>r.split(e,n):e.split(n,l)}[...`	.
.\v.\f.\r. .. . . . . . . . . . . . . .\u2028.\u2029. . .　.\uFEFF`.split(".")];function Ec(...e){return m5(Q5,e)}function Q5(){let e=new Set;return n=>e.has(n)?Bc:(e.add(n),{done:!1,hasNext:!0,next:n})}function oc(...e){return mt(Object.values,e)}function W5(...e){return mt(J5,e,e9)}const J5=(e,n)=>e.length<n.length?e.map((l,r)=>[l,n[r]]):n.map((l,r)=>[e[r],l]),e9=e=>(n,l)=>({hasNext:!0,next:[n,e[l]],done:l>=e.length-1});var t9=Object.create,sc=Object.defineProperty,n9=Object.getOwnPropertyDescriptor,l9=Object.getOwnPropertyNames,i9=Object.getPrototypeOf,r9=Object.prototype.hasOwnProperty,it=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports),co=(e,n)=>{let l={};for(var r in e)sc(l,r,{get:e[r],enumerable:!0});return sc(l,Symbol.toStringTag,{value:"Module"}),l},a9=(e,n,l,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(var o=l9(n),s=0,u=o.length,f;s<u;s++)f=o[s],!r9.call(e,f)&&f!==l&&sc(e,f,{get:(d=>n[d]).bind(null,f),enumerable:!(r=n9(n,f))||r.enumerable});return e},Un=(e,n,l)=>(l=e==null?{}:t9(i9(e)),a9(sc(l,"default",{value:e,enumerable:!0}),e)),o9=it((e=>{e.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u",e.SYMBOL_SUPPORT=typeof Symbol<"u"})),bl=it(((e,n)=>{var l=o9(),r=l.ARRAY_BUFFER_SUPPORT,o=l.SYMBOL_SUPPORT;n.exports=function(u,f){var d,h,y,m,b;if(!u)throw Error("obliterator/forEach: invalid iterable.");if(typeof f!="function")throw Error("obliterator/forEach: expecting a callback.");if(Array.isArray(u)||r&&ArrayBuffer.isView(u)||typeof u=="string"||u.toString()==="[object Arguments]"){for(y=0,m=u.length;y<m;y++)f(u[y],y);return}if(typeof u.forEach=="function"){u.forEach(f);return}if(o&&Symbol.iterator in u&&typeof u.next!="function"&&(u=u[Symbol.iterator]()),typeof u.next=="function"){for(d=u,y=0;b=d.next(),b.done!==!0;)f(b.value,y),y++;return}for(h in u)u.hasOwnProperty(h)&&f(u[h],h)}})),Ir=it(((e,n)=>{function l(r){if(typeof r!="function")throw Error("obliterator/iterator: expecting a function!");this.next=r}typeof Symbol<"u"&&(l.prototype[Symbol.iterator]=function(){return this}),l.of=function(){var r=arguments,o=r.length,s=0;return new l(function(){return s>=o?{done:!0}:{done:!1,value:r[s++]}})},l.empty=function(){return new l(function(){return{done:!0}})},l.fromSequence=function(r){var o=0,s=r.length;return new l(function(){return o>=s?{done:!0}:{done:!1,value:r[o++]}})},l.is=function(r){return r instanceof l?!0:typeof r=="object"&&!!r&&typeof r.next=="function"},n.exports=l})),Cc=it((e=>{var n=255,l=2**16-1,r=2**32-1,o=2**7-1,s=2**15-1,u=2**31-1;e.getPointerArray=function(d){var h=d-1;if(h<=n)return Uint8Array;if(h<=l)return Uint16Array;if(h<=r)return Uint32Array;throw Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},e.getSignedPointerArray=function(d){var h=d-1;return h<=o?Int8Array:h<=s?Int16Array:h<=u?Int32Array:Float64Array},e.getNumberType=function(d){return d===(d|0)?Math.sign(d)===-1?d<=127&&d>=-128?Int8Array:d<=32767&&d>=-32768?Int16Array:Int32Array:d<=255?Uint8Array:d<=65535?Uint16Array:Uint32Array:Float64Array};var f={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};e.getMinimalRepresentation=function(d,h){var y=null,m=0,b,v,B,R,z;for(R=0,z=d.length;R<z;R++)B=h?h(d[R]):d[R],v=e.getNumberType(B),b=f[v.name],b>m&&(m=b,y=v);return y},e.isTypedArray=function(d){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(d)},e.concat=function(){var d=0,h,y,m;for(h=0,m=arguments.length;h<m;h++)d+=arguments[h].length;var b=new arguments[0].constructor(d);for(h=0,y=0;h<m;h++)b.set(arguments[h],y),y+=arguments[h].length;return b},e.indices=function(d){for(var h=new(e.getPointerArray(d))(d),y=0;y<d;y++)h[y]=y;return h}})),Ac=it((e=>{var n=bl(),l=Cc();function r(f){return Array.isArray(f)||l.isTypedArray(f)}function o(f){if(typeof f.length=="number")return f.length;if(typeof f.size=="number")return f.size}function s(f){var d=o(f),h=typeof d=="number"?Array(d):[],y=0;return n(f,function(m){h[y++]=m}),h}function u(f){var d=o(f),h=typeof d=="number"?l.getPointerArray(d):Array,y=typeof d=="number"?Array(d):[],m=typeof d=="number"?new h(d):[],b=0;return n(f,function(v){y[b]=v,m[b]=b++}),[y,m]}e.isArrayLike=r,e.guessLength=o,e.toArray=s,e.toArrayWithIndices=u})),i3=it(((e,n)=>{n.exports=function(r){return typeof r=="object"&&!!r&&typeof r.addUndirectedEdgeWithKey=="function"&&typeof r.dropNode=="function"&&typeof r.multi=="boolean"}})),s9=it(((e,n)=>{var l=Ac(),r=Ir();function o(s,u){if(arguments.length<2)throw Error("mnemonist/fixed-deque: expecting an Array class and a capacity.");if(typeof u!="number"||u<=0)throw Error("mnemonist/fixed-deque: `capacity` should be a positive number.");this.ArrayClass=s,this.capacity=u,this.items=new s(this.capacity),this.clear()}o.prototype.clear=function(){this.start=0,this.size=0},o.prototype.push=function(s){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.push: deque capacity ("+this.capacity+") exceeded!");var u=this.start+this.size;return u>=this.capacity&&(u-=this.capacity),this.items[u]=s,++this.size},o.prototype.unshift=function(s){if(this.size===this.capacity)throw Error("mnemonist/fixed-deque.unshift: deque capacity ("+this.capacity+") exceeded!");var u=this.start-1;return this.start===0&&(u=this.capacity-1),this.items[u]=s,this.start=u,++this.size},o.prototype.pop=function(){if(this.size!==0){this.size--;var s=this.start+this.size;return s>=this.capacity&&(s-=this.capacity),this.items[s]}},o.prototype.shift=function(){if(this.size!==0){var s=this.start;return this.size--,this.start++,this.start===this.capacity&&(this.start=0),this.items[s]}},o.prototype.peekFirst=function(){if(this.size!==0)return this.items[this.start]},o.prototype.peekLast=function(){if(this.size!==0){var s=this.start+this.size-1;return s>=this.capacity&&(s-=this.capacity),this.items[s]}},o.prototype.get=function(s){if(!(this.size===0||s>=this.capacity))return s=this.start+s,s>=this.capacity&&(s-=this.capacity),this.items[s]},o.prototype.forEach=function(s,u){u=arguments.length>1?u:this;for(var f=this.capacity,d=this.size,h=this.start,y=0;y<d;)s.call(u,this.items[h],y,this),h++,y++,h===f&&(h=0)},o.prototype.toArray=function(){var s=this.start+this.size;if(s<this.capacity)return this.items.slice(this.start,s);for(var u=new this.ArrayClass(this.size),f=this.capacity,d=this.size,h=this.start,y=0;y<d;)u[y]=this.items[h],h++,y++,h===f&&(h=0);return u},o.prototype.values=function(){var s=this.items,u=this.capacity,f=this.size,d=this.start,h=0;return new r(function(){if(h>=f)return{done:!0};var y=s[d];return d++,h++,d===u&&(d=0),{value:y,done:!1}})},o.prototype.entries=function(){var s=this.items,u=this.capacity,f=this.size,d=this.start,h=0;return new r(function(){if(h>=f)return{done:!0};var y=s[d];return d++,d===u&&(d=0),{value:[h++,y],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.inspect=function(){var s=this.toArray();return s.type=this.ArrayClass.name,s.capacity=this.capacity,Object.defineProperty(s,"constructor",{value:o,enumerable:!1}),s},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(s,u,f){if(arguments.length<3&&(f=l.guessLength(s),typeof f!="number"))throw Error("mnemonist/fixed-deque.from: could not guess iterable length. Please provide desired capacity as last argument.");var d=new o(u,f);if(l.isArrayLike(s)){var h,y;for(h=0,y=s.length;h<y;h++)d.items[h]=s[h];return d.size=y,d}return l.forEach(s,function(m){d.push(m)}),d},n.exports=o})),c9=it((e=>{let n=i3(),l=s9();function r(u,f){let d=0;return u.forEachInNeighbor(f,()=>{d++}),d}function o(u,f){if(!n(u))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");if(u.type==="undirected"||u.undirectedSize!==0)throw Error("graphology-dag/topological-sort: cannot work if graph is not directed.");if(u.order===0)return;let d=new l(Array,u.order),h={},y=0;u.forEachNode((v,B)=>{let R=u.multi?r(u,v):u.inDegree(v);R===0?d.push([v,B,0]):(h[v]=R,y+=R)});let m=0;function b(v,B){let R=--h[v];y--,R===0&&d.push([v,B,m+1]),h[v]=R}for(;d.size!==0;){let[v,B,R]=d.shift();m=R,f(v,B,R),u.forEachOutNeighbor(v,b)}if(y!==0)throw Error("graphology-dag/topological-sort: given graph is not acyclic.")}function s(u){if(!n(u))throw Error("graphology-dag/topological-sort: the given graph is not a valid graphology instance.");let f=Array(u.order),d=0;return o(u,h=>{f[d++]=h}),f}e.topologicalSort=s})),u9=it(((e,n)=>{let l=i3();n.exports=function(o,s,u){if(!l(o))throw Error("graphology-dag/will-create-cycle: the given graph is not a valid graphology instance.");if(s=""+s,u=""+u,s===u)return!0;if(!o.hasNode(s)||!o.hasNode(u)||o.hasDirectedEdge(s,u))return!1;if(o.hasDirectedEdge(u,s))return!0;let f=o.outNeighbors(u);function d(h){f.push(h)}for(;f.length!==0;){let h=f.pop();if(h===s)return!0;o.forEachOutNeighbor(h,d)}return!1}})),f9=it(((e,n)=>{var l=bl();function r(d){this.size=0,this.items=new Map,this.inverse=d}function o(){this.size=0,this.items=new Map,this.inverse=new r(this)}function s(){this.size=0,this.items.clear(),this.inverse.items.clear()}o.prototype.clear=s,r.prototype.clear=s;function u(d,h){if(this.items.has(d)){var y=this.items.get(d);if(y===h)return this;this.inverse.items.delete(y)}if(this.inverse.items.has(h)){var m=this.inverse.items.get(h);if(m===d)return this;this.items.delete(m)}return this.items.set(d,h),this.inverse.items.set(h,d),this.size=this.items.size,this.inverse.size=this.inverse.items.size,this}o.prototype.set=u,r.prototype.set=u;function f(d){if(this.items.has(d)){var h=this.items.get(d);return this.items.delete(d),this.inverse.items.delete(h),this.size=this.items.size,this.inverse.size=this.inverse.items.size,!0}return!1}o.prototype.delete=f,r.prototype.delete=f,["has","get","forEach","keys","values","entries"].forEach(function(d){o.prototype[d]=r.prototype[d]=function(){return Map.prototype[d].apply(this.items,arguments)}}),typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries,r.prototype[Symbol.iterator]=r.prototype.entries),o.prototype.inspect=function(){var d={left:this.items,right:this.inverse.items};return Object.defineProperty(d,"constructor",{value:o,enumerable:!1}),d},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),r.prototype.inspect=function(){var d={left:this.inverse.items,right:this.items};return Object.defineProperty(d,"constructor",{value:r,enumerable:!1}),d},typeof Symbol<"u"&&(r.prototype[Symbol.for("nodejs.util.inspect.custom")]=r.prototype.inspect),o.from=function(d){var h=new o;return l(d,function(y,m){h.set(m,y)}),h},n.exports=o})),d9=it(((e,n)=>{function l(r){if(typeof r!="function")throw Error("mnemonist/DefaultMap.constructor: expecting a function.");this.items=new Map,this.factory=r,this.size=0}l.prototype.clear=function(){this.items.clear(),this.size=0},l.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r,this.size),this.items.set(r,o),this.size++),o},l.prototype.peek=function(r){return this.items.get(r)},l.prototype.set=function(r,o){return this.items.set(r,o),this.size=this.items.size,this},l.prototype.has=function(r){return this.items.has(r)},l.prototype.delete=function(r){var o=this.items.delete(r);return this.size=this.items.size,o},l.prototype.forEach=function(r,o){o=arguments.length>1?o:this,this.items.forEach(r,o)},l.prototype.entries=function(){return this.items.entries()},l.prototype.keys=function(){return this.items.keys()},l.prototype.values=function(){return this.items.values()},typeof Symbol<"u"&&(l.prototype[Symbol.iterator]=l.prototype.entries),l.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(l.prototype[Symbol.for("nodejs.util.inspect.custom")]=l.prototype.inspect),l.autoIncrement=function(){var r=0;return function(){return r++}},n.exports=l})),h9=it(((e,n)=>{function l(r){if(typeof r!="function")throw Error("mnemonist/DefaultWeakMap.constructor: expecting a function.");this.items=new WeakMap,this.factory=r}l.prototype.clear=function(){this.items=new WeakMap},l.prototype.get=function(r){var o=this.items.get(r);return o===void 0&&(o=this.factory(r),this.items.set(r,o)),o},l.prototype.peek=function(r){return this.items.get(r)},l.prototype.set=function(r,o){return this.items.set(r,o),this},l.prototype.has=function(r){return this.items.has(r)},l.prototype.delete=function(r){return this.items.delete(r)},l.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(l.prototype[Symbol.for("nodejs.util.inspect.custom")]=l.prototype.inspect),n.exports=l})),p9=it(((e,n)=>{var l=Ir(),r=bl();function o(){this.clear()}o.prototype.clear=function(){this.head=null,this.tail=null,this.size=0},o.prototype.first=function(){return this.head?this.head.item:void 0},o.prototype.peek=o.prototype.first,o.prototype.last=function(){return this.tail?this.tail.item:void 0},o.prototype.push=function(s){var u={item:s,next:null};return this.head?(this.tail.next=u,this.tail=u):(this.head=u,this.tail=u),this.size++,this.size},o.prototype.unshift=function(s){var u={item:s,next:null};return this.head?(this.head.next||(this.tail=this.head),u.next=this.head,this.head=u):(this.head=u,this.tail=u),this.size++,this.size},o.prototype.shift=function(){if(this.size){var s=this.head;return this.head=s.next,this.size--,s.item}},o.prototype.forEach=function(s,u){if(this.size){u=arguments.length>1?u:this;for(var f=this.head,d=0;f;)s.call(u,f.item,d,this),f=f.next,d++}},o.prototype.toArray=function(){if(!this.size)return[];for(var s=Array(this.size),u=0,f=this.size,d=this.head;u<f;u++)s[u]=d.item,d=d.next;return s},o.prototype.values=function(){var s=this.head;return new l(function(){if(!s)return{done:!0};var u=s.item;return s=s.next,{value:u,done:!1}})},o.prototype.entries=function(){var s=this.head,u=0;return new l(function(){if(!s)return{done:!0};var f=s.item;return s=s.next,u++,{value:[u-1,f],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var s=this.toArray();return Object.defineProperty(s,"constructor",{value:o,enumerable:!1}),s},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(s){var u=new o;return r(s,function(f){u.push(f)}),u},n.exports=o})),g9=it(((e,n)=>{var l=Ir(),r=bl();function o(s){this.Container=s||Array,this.items=new Map,this.clear(),Object.defineProperty(this.items,"constructor",{value:o,enumerable:!1})}o.prototype.clear=function(){this.size=0,this.dimension=0,this.items.clear()},o.prototype.set=function(s,u){var f=this.items.get(s),d;return f||(this.dimension++,f=new this.Container,this.items.set(s,f)),this.Container===Set?(d=f.size,f.add(u),d<f.size&&this.size++):(f.push(u),this.size++),this},o.prototype.delete=function(s){var u=this.items.get(s);return u?(this.size-=this.Container===Set?u.size:u.length,this.dimension--,this.items.delete(s),!0):!1},o.prototype.remove=function(s,u){var f=this.items.get(s),d,h;return f?this.Container===Set?(d=f.delete(u),d&&this.size--,f.size===0&&(this.items.delete(s),this.dimension--),d):(h=f.indexOf(u),h===-1?!1:(this.size--,f.length===1?(this.items.delete(s),this.dimension--,!0):(f.splice(h,1),!0))):!1},o.prototype.has=function(s){return this.items.has(s)},o.prototype.get=function(s){return this.items.get(s)},o.prototype.multiplicity=function(s){var u=this.items.get(s);return u===void 0?0:this.Container===Set?u.size:u.length},o.prototype.count=o.prototype.multiplicity,o.prototype.forEach=function(s,u){u=arguments.length>1?u:this;var f;function d(h){s.call(u,h,f)}this.items.forEach(function(h,y){f=y,h.forEach(d)})},o.prototype.forEachAssociation=function(s,u){u=arguments.length>1?u:this,this.items.forEach(s,u)},o.prototype.keys=function(){return this.items.keys()},o.prototype.values=function(){var s=this.items.values(),u=!1,f,d,h,y;return this.Container===Set?new l(function m(){if(!u){if(d=s.next(),d.done)return{done:!0};u=!0,f=d.value.values()}return d=f.next(),d.done?(u=!1,m()):{done:!1,value:d.value}}):new l(function m(){if(!u){if(d=s.next(),d.done)return{done:!0};u=!0,f=d.value,h=0,y=f.length}return h>=y?(u=!1,m()):{done:!1,value:f[h++]}})},o.prototype.entries=function(){var s=this.items.entries(),u=!1,f,d,h,y,m;return this.Container===Set?new l(function b(){if(!u){if(d=s.next(),d.done)return{done:!0};u=!0,h=d.value[0],f=d.value[1].values()}return d=f.next(),d.done?(u=!1,b()):{done:!1,value:[h,d.value]}}):new l(function b(){if(!u){if(d=s.next(),d.done)return{done:!0};u=!0,h=d.value[0],f=d.value[1],y=0,m=f.length}return y>=m?(u=!1,b()):{done:!1,value:[h,f[y++]]}})},o.prototype.containers=function(){return this.items.values()},o.prototype.associations=function(){return this.items.entries()},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.entries),o.prototype.inspect=function(){return this.items},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.prototype.toJSON=function(){return this.items},o.from=function(s,u){var f=new o(u);return r(s,function(d,h){f.set(h,d)}),f},n.exports=o})),y9=it(((e,n)=>{var l=Ir(),r=bl();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.offset=0,this.size=0},o.prototype.enqueue=function(s){return this.items.push(s),++this.size},o.prototype.dequeue=function(){if(this.size){var s=this.items[this.offset];return++this.offset*2>=this.items.length&&(this.items=this.items.slice(this.offset),this.offset=0),this.size--,s}},o.prototype.peek=function(){if(this.size)return this.items[this.offset]},o.prototype.forEach=function(s,u){u=arguments.length>1?u:this;for(var f=this.offset,d=0,h=this.items.length;f<h;f++,d++)s.call(u,this.items[f],d,this)},o.prototype.toArray=function(){return this.items.slice(this.offset)},o.prototype.values=function(){var s=this.items,u=this.offset;return new l(function(){if(u>=s.length)return{done:!0};var f=s[u];return u++,{value:f,done:!1}})},o.prototype.entries=function(){var s=this.items,u=this.offset,f=0;return new l(function(){if(u>=s.length)return{done:!0};var d=s[u];return u++,{value:[f++,d],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var s=this.toArray();return Object.defineProperty(s,"constructor",{value:o,enumerable:!1}),s},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(s){var u=new o;return r(s,function(f){u.enqueue(f)}),u},o.of=function(){return o.from(arguments)},n.exports=o})),m9=it(((e,n)=>{var l=Ir(),r=bl(),o=Cc(),s=Ac();function u(f,d,h){if(arguments.length<2&&(h=f,f=null,d=null),this.capacity=h,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-cache: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-cache: capacity should be a finite positive integer.");var y=o.getPointerArray(h);this.forward=new y(h),this.backward=new y(h),this.K=typeof f=="function"?new f(h):Array(h),this.V=typeof d=="function"?new d(h):Array(h),this.size=0,this.head=0,this.tail=0,this.items={}}u.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items={}},u.prototype.splayOnTop=function(f){var d=this.head;if(this.head===f)return this;var h=this.backward[f],y=this.forward[f];return this.tail===f?this.tail=h:this.backward[y]=h,this.forward[h]=y,this.backward[d]=f,this.head=f,this.forward[f]=d,this},u.prototype.set=function(f,d){var h=this.items[f];if(h!==void 0){this.splayOnTop(h),this.V[h]=d;return}this.size<this.capacity?h=this.size++:(h=this.tail,this.tail=this.backward[h],delete this.items[this.K[h]]),this.items[f]=h,this.K[h]=f,this.V[h]=d,this.forward[h]=this.head,this.backward[this.head]=h,this.head=h},u.prototype.setpop=function(f,d){var h=null,y=null,m=this.items[f];return m===void 0?(this.size<this.capacity?m=this.size++:(m=this.tail,this.tail=this.backward[m],h=this.V[m],y=this.K[m],delete this.items[y]),this.items[f]=m,this.K[m]=f,this.V[m]=d,this.forward[m]=this.head,this.backward[this.head]=m,this.head=m,y?{evicted:!0,key:y,value:h}:null):(this.splayOnTop(m),h=this.V[m],this.V[m]=d,{evicted:!1,key:f,value:h})},u.prototype.has=function(f){return f in this.items},u.prototype.get=function(f){var d=this.items[f];if(d!==void 0)return this.splayOnTop(d),this.V[d]},u.prototype.peek=function(f){var d=this.items[f];if(d!==void 0)return this.V[d]},u.prototype.forEach=function(f,d){d=arguments.length>1?d:this;for(var h=0,y=this.size,m=this.head,b=this.K,v=this.V,B=this.forward;h<y;)f.call(d,v[m],b[m],this),m=B[m],h++},u.prototype.keys=function(){var f=0,d=this.size,h=this.head,y=this.K,m=this.forward;return new l(function(){if(f>=d)return{done:!0};var b=y[h];return f++,f<d&&(h=m[h]),{done:!1,value:b}})},u.prototype.values=function(){var f=0,d=this.size,h=this.head,y=this.V,m=this.forward;return new l(function(){if(f>=d)return{done:!0};var b=y[h];return f++,f<d&&(h=m[h]),{done:!1,value:b}})},u.prototype.entries=function(){var f=0,d=this.size,h=this.head,y=this.K,m=this.V,b=this.forward;return new l(function(){if(f>=d)return{done:!0};var v=y[h],B=m[h];return f++,f<d&&(h=b[h]),{done:!1,value:[v,B]}})},typeof Symbol<"u"&&(u.prototype[Symbol.iterator]=u.prototype.entries),u.prototype.inspect=function(){for(var f=new Map,d=this.entries(),h;h=d.next(),!h.done;)f.set(h.value[0],h.value[1]);return Object.defineProperty(f,"constructor",{value:u,enumerable:!1}),f},typeof Symbol<"u"&&(u.prototype[Symbol.for("nodejs.util.inspect.custom")]=u.prototype.inspect),u.from=function(f,d,h,y){if(arguments.length<2){if(y=s.guessLength(f),typeof y!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(y=d,d=null,h=null);var m=new u(d,h,y);return r(f,function(b,v){m.set(v,b)}),m},n.exports=u})),r3=it(((e,n)=>{var l=m9(),r=bl(),o=Cc(),s=Ac();function u(f,d,h){if(arguments.length<2&&(h=f,f=null,d=null),this.capacity=h,typeof this.capacity!="number"||this.capacity<=0)throw Error("mnemonist/lru-map: capacity should be positive number.");if(!isFinite(this.capacity)||Math.floor(this.capacity)!==this.capacity)throw Error("mnemonist/lru-map: capacity should be a finite positive integer.");var y=o.getPointerArray(h);this.forward=new y(h),this.backward=new y(h),this.K=typeof f=="function"?new f(h):Array(h),this.V=typeof d=="function"?new d(h):Array(h),this.size=0,this.head=0,this.tail=0,this.items=new Map}u.prototype.clear=function(){this.size=0,this.head=0,this.tail=0,this.items.clear()},u.prototype.set=function(f,d){var h=this.items.get(f);if(h!==void 0){this.splayOnTop(h),this.V[h]=d;return}this.size<this.capacity?h=this.size++:(h=this.tail,this.tail=this.backward[h],this.items.delete(this.K[h])),this.items.set(f,h),this.K[h]=f,this.V[h]=d,this.forward[h]=this.head,this.backward[this.head]=h,this.head=h},u.prototype.setpop=function(f,d){var h=null,y=null,m=this.items.get(f);return m===void 0?(this.size<this.capacity?m=this.size++:(m=this.tail,this.tail=this.backward[m],h=this.V[m],y=this.K[m],this.items.delete(y)),this.items.set(f,m),this.K[m]=f,this.V[m]=d,this.forward[m]=this.head,this.backward[this.head]=m,this.head=m,y?{evicted:!0,key:y,value:h}:null):(this.splayOnTop(m),h=this.V[m],this.V[m]=d,{evicted:!1,key:f,value:h})},u.prototype.has=function(f){return this.items.has(f)},u.prototype.get=function(f){var d=this.items.get(f);if(d!==void 0)return this.splayOnTop(d),this.V[d]},u.prototype.peek=function(f){var d=this.items.get(f);if(d!==void 0)return this.V[d]},u.prototype.splayOnTop=l.prototype.splayOnTop,u.prototype.forEach=l.prototype.forEach,u.prototype.keys=l.prototype.keys,u.prototype.values=l.prototype.values,u.prototype.entries=l.prototype.entries,typeof Symbol<"u"&&(u.prototype[Symbol.iterator]=u.prototype.entries),u.prototype.inspect=l.prototype.inspect,u.from=function(f,d,h,y){if(arguments.length<2){if(y=s.guessLength(f),typeof y!="number")throw Error("mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(y=d,d=null,h=null);var m=new u(d,h,y);return r(f,function(b,v){m.set(v,b)}),m},n.exports=u})),T9=it(((e,n)=>{var l=r3(),r=bl(),o=Cc(),s=Ac();function u(d,h,y){arguments.length<2?l.call(this,d):l.call(this,d,h,y),this.deleted=new(o.getPointerArray(this.capacity))(this.capacity),this.deletedSize=0}for(var f in l.prototype)u.prototype[f]=l.prototype[f];typeof Symbol<"u"&&(u.prototype[Symbol.iterator]=l.prototype[Symbol.iterator]),u.prototype.clear=function(){l.prototype.clear.call(this),this.deletedSize=0},u.prototype.set=function(d,h){var y=this.items.get(d);if(y!==void 0){this.splayOnTop(y),this.V[y]=h;return}this.size<this.capacity?(y=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(y=this.tail,this.tail=this.backward[y],this.items.delete(this.K[y])),this.items.set(d,y),this.K[y]=d,this.V[y]=h,this.forward[y]=this.head,this.backward[this.head]=y,this.head=y},u.prototype.setpop=function(d,h){var y=null,m=null,b=this.items.get(d);return b===void 0?(this.size<this.capacity?(b=this.deletedSize>0?this.deleted[--this.deletedSize]:this.size,this.size++):(b=this.tail,this.tail=this.backward[b],y=this.V[b],m=this.K[b],this.items.delete(m)),this.items.set(d,b),this.K[b]=d,this.V[b]=h,this.forward[b]=this.head,this.backward[this.head]=b,this.head=b,m?{evicted:!0,key:m,value:y}:null):(this.splayOnTop(b),y=this.V[b],this.V[b]=h,{evicted:!1,key:d,value:y})},u.prototype.delete=function(d){var h=this.items.get(d);if(h===void 0)return!1;if(this.items.delete(d),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,!0;var y=this.backward[h],m=this.forward[h];return this.head===h&&(this.head=m),this.tail===h&&(this.tail=y),this.forward[y]=m,this.backward[m]=y,this.size--,this.deleted[this.deletedSize++]=h,!0},u.prototype.remove=function(d,h=void 0){var y=this.items.get(d);if(y===void 0)return h;var m=this.V[y];if(this.items.delete(d),this.size===1)return this.size=0,this.head=0,this.tail=0,this.deletedSize=0,m;var b=this.backward[y],v=this.forward[y];return this.head===y&&(this.head=v),this.tail===y&&(this.tail=b),this.forward[b]=v,this.backward[v]=b,this.size--,this.deleted[this.deletedSize++]=y,m},u.from=function(d,h,y,m){if(arguments.length<2){if(m=s.guessLength(d),typeof m!="number")throw Error("mnemonist/lru-map.from: could not guess iterable length. Please provide desired capacity as last argument.")}else arguments.length===2&&(m=h,h=null,y=null);var b=new u(h,y,m);return r(d,function(v,B){b.set(B,v)}),b},n.exports=u})),b9=it((e=>{e.intersection=function(){if(arguments.length<2)throw Error("mnemonist/Set.intersection: needs at least two arguments.");var n=new Set,l=1/0,r=null,o,s,u=arguments.length;for(s=0;s<u;s++){if(o=arguments[s],o.size===0)return n;o.size<l&&(l=o.size,r=o)}for(var f=r.values(),d,h,y,m;d=f.next(),!d.done;){for(h=d.value,y=!0,s=0;s<u;s++)if(m=arguments[s],m!==r&&!m.has(h)){y=!1;break}y&&n.add(h)}return n},e.union=function(){if(arguments.length<2)throw Error("mnemonist/Set.union: needs at least two arguments.");var n=new Set,l,r=arguments.length,o,s;for(l=0;l<r;l++)for(o=arguments[l].values();s=o.next(),!s.done;)n.add(s.value);return n},e.difference=function(n,l){if(!n.size)return new Set;if(!l.size)return new Set(n);for(var r=new Set,o=n.values(),s;s=o.next(),!s.done;)l.has(s.value)||r.add(s.value);return r},e.symmetricDifference=function(n,l){for(var r=new Set,o=n.values(),s;s=o.next(),!s.done;)l.has(s.value)||r.add(s.value);for(o=l.values();s=o.next(),!s.done;)n.has(s.value)||r.add(s.value);return r},e.isSubset=function(n,l){var r=n.values(),o;if(n===l)return!0;if(n.size>l.size)return!1;for(;o=r.next(),!o.done;)if(!l.has(o.value))return!1;return!0},e.isSuperset=function(n,l){return e.isSubset(l,n)},e.add=function(n,l){for(var r=l.values(),o;o=r.next(),!o.done;)n.add(o.value)},e.subtract=function(n,l){for(var r=l.values(),o;o=r.next(),!o.done;)n.delete(o.value)},e.intersect=function(n,l){for(var r=n.values(),o;o=r.next(),!o.done;)l.has(o.value)||n.delete(o.value)},e.disjunct=function(n,l){for(var r=n.values(),o,s=[];o=r.next(),!o.done;)l.has(o.value)&&s.push(o.value);for(r=l.values();o=r.next(),!o.done;)n.has(o.value)||n.add(o.value);for(var u=0,f=s.length;u<f;u++)n.delete(s[u])},e.intersectionSize=function(n,l){var r;if(n.size>l.size&&(r=n,n=l,l=r),n.size===0)return 0;if(n===l)return n.size;for(var o=n.values(),s,u=0;s=o.next(),!s.done;)l.has(s.value)&&u++;return u},e.unionSize=function(n,l){var r=e.intersectionSize(n,l);return n.size+l.size-r},e.jaccard=function(n,l){var r=e.intersectionSize(n,l);return r===0?0:r/(n.size+l.size-r)},e.overlap=function(n,l){var r=e.intersectionSize(n,l);return r===0?0:r/Math.min(n.size,l.size)}})),v9=it(((e,n)=>{var l=Ir(),r=bl();function o(){this.clear()}o.prototype.clear=function(){this.items=[],this.size=0},o.prototype.push=function(s){return this.items.push(s),++this.size},o.prototype.pop=function(){if(this.size!==0)return this.size--,this.items.pop()},o.prototype.peek=function(){return this.items[this.size-1]},o.prototype.forEach=function(s,u){u=arguments.length>1?u:this;for(var f=0,d=this.items.length;f<d;f++)s.call(u,this.items[d-f-1],f,this)},o.prototype.toArray=function(){for(var s=Array(this.size),u=this.size-1,f=this.size;f--;)s[f]=this.items[u-f];return s},o.prototype.values=function(){var s=this.items,u=s.length,f=0;return new l(function(){if(f>=u)return{done:!0};var d=s[u-f-1];return f++,{value:d,done:!1}})},o.prototype.entries=function(){var s=this.items,u=s.length,f=0;return new l(function(){if(f>=u)return{done:!0};var d=s[u-f-1];return{value:[f++,d],done:!1}})},typeof Symbol<"u"&&(o.prototype[Symbol.iterator]=o.prototype.values),o.prototype.toString=function(){return this.toArray().join(",")},o.prototype.toJSON=function(){return this.toArray()},o.prototype.inspect=function(){var s=this.toArray();return Object.defineProperty(s,"constructor",{value:o,enumerable:!1}),s},typeof Symbol<"u"&&(o.prototype[Symbol.for("nodejs.util.inspect.custom")]=o.prototype.inspect),o.from=function(s){var u=new o;return r(s,function(f){u.push(f)}),u},o.of=function(){return o.from(arguments)},n.exports=o}));f9();var kt=Un(d9()),F1=Un(h9()),a3=Un(p9()),o3=Un(g9()),s3=Un(y9()),Bg=Un(r3());T9();var c3=b9(),k9=Un(v9()),x9=it(((e,n)=>{var l=function(r,o){var s,u,f=1,d=0,h=0,y=String.alphabet;function m(b,v,B){if(B){for(s=v;B=m(b,s),B<76&&B>65;)++s;return+b.slice(v-1,s)}return B=y&&y.indexOf(b.charAt(v)),B>-1?B+76:(B=b.charCodeAt(v)||0,B<45||B>127?B:B<46?65:B<48?B-1:B<58?B+18:B<65?B-11:B<91?B+11:B<97?B-37:B<123?B+5:B-63)}if((r+="")!=(o+="")){for(;f;)if(u=m(r,d++),f=m(o,h++),u<76&&f<76&&u>66&&f>66&&(u=m(r,d,d),f=m(o,h,d=s),h=s),u!=f)return u<f?-1:1}return 0};try{n.exports=l}catch{String.naturalCompare=l}}));function B9(e){return typeof e=="string"?`'${e}'`:new w9().serialize(e)}const w9=(function(){class e{#e=new Map;compare(l,r){let o=typeof l,s=typeof r;return o==="string"&&s==="string"?l.localeCompare(r):o==="number"&&s==="number"?l-r:String.prototype.localeCompare.call(this.serialize(l,!0),this.serialize(r,!0))}serialize(l,r){if(l===null)return"null";switch(typeof l){case"string":return r?l:`'${l}'`;case"bigint":return`${l}n`;case"object":return this.$object(l);case"function":return this.$function(l)}return String(l)}serializeObject(l){let r=Object.prototype.toString.call(l);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),l);let o=l.constructor,s=o===Object||o===void 0?"":o.name;if(s!==""&&globalThis[s]===o)return this.serializeBuiltInType(s,l);if(typeof l.toJSON=="function"){let u=l.toJSON();return s+(typeof u=="object"&&u?this.$object(u):`(${this.serialize(u)})`)}return this.serializeObjectEntries(s,Object.entries(l))}serializeBuiltInType(l,r){let o=this["$"+l];if(o)return o.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(l,r.entries());throw Error(`Cannot serialize ${l}`)}serializeObjectEntries(l,r){let o=Array.from(r).sort((u,f)=>this.compare(u[0],f[0])),s=`${l}{`;for(let u=0;u<o.length;u++){let[f,d]=o[u];s+=`${this.serialize(f,!0)}:${this.serialize(d)}`,u<o.length-1&&(s+=",")}return s+"}"}$object(l){let r=this.#e.get(l);return r===void 0&&(this.#e.set(l,`#${this.#e.size}`),r=this.serializeObject(l),this.#e.set(l,r)),r}$function(l){let r=Function.prototype.toString.call(l);return r.slice(-15)==="[native code] }"?`${l.name||""}()[native]`:`${l.name}(${l.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(l){let r="[";for(let o=0;o<l.length;o++)r+=this.serialize(l[o]),o<l.length-1&&(r+=",");return r+"]"}$Date(l){try{return`Date(${l.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(l){return`ArrayBuffer[${new Uint8Array(l).join(",")}]`}$Set(l){return`Set${this.$Array(Array.from(l).sort((r,o)=>this.compare(r,o)))}`}$Map(l){return this.serializeObjectEntries("Map",l.entries())}}for(let n of["Error","RegExp","URL"])e.prototype["$"+n]=function(l){return`${n}(${l})`};for(let n of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])e.prototype["$"+n]=function(l){return`${n}[${l.join(",")}]`};for(let n of["BigInt64Array","BigUint64Array"])e.prototype["$"+n]=function(l){return`${n}[${l.join("n,")}${l.length>0?"n":""}]`};return e})(),E9=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],C9=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],Ti=[];var A9=class{_data=new zs;_hash=new zs([...E9]);_nDataBytes=0;_minBufferSize=0;finalize(n){n&&this._append(n);let l=this._nDataBytes*8,r=this._data.sigBytes*8;return this._data.words[r>>>5]|=128<<24-r%32,this._data.words[(r+64>>>9<<4)+14]=Math.floor(l/4294967296),this._data.words[(r+64>>>9<<4)+15]=l,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}_doProcessBlock(n,l){let r=this._hash.words,o=r[0],s=r[1],u=r[2],f=r[3],d=r[4],h=r[5],y=r[6],m=r[7];for(let b=0;b<64;b++){if(b<16)Ti[b]=n[l+b]|0;else{let q=Ti[b-15],te=(q<<25|q>>>7)^(q<<14|q>>>18)^q>>>3,ne=Ti[b-2],M=(ne<<15|ne>>>17)^(ne<<13|ne>>>19)^ne>>>10;Ti[b]=te+Ti[b-7]+M+Ti[b-16]}let v=d&h^~d&y,B=o&s^o&u^s&u,R=(o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22),z=(d<<26|d>>>6)^(d<<21|d>>>11)^(d<<7|d>>>25),C=m+z+v+C9[b]+Ti[b],X=R+B;m=y,y=h,h=d,d=f+C|0,f=u,u=s,s=o,o=C+X|0}r[0]=r[0]+o|0,r[1]=r[1]+s|0,r[2]=r[2]+u|0,r[3]=r[3]+f|0,r[4]=r[4]+d|0,r[5]=r[5]+h|0,r[6]=r[6]+y|0,r[7]=r[7]+m|0}_append(n){typeof n=="string"&&(n=zs.fromUtf8(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_process(n){let l,r=this._data.sigBytes/64;r=n?Math.ceil(r):Math.max((r|0)-this._minBufferSize,0);let o=r*16,s=Math.min(o*4,this._data.sigBytes);if(o){for(let u=0;u<o;u+=16)this._doProcessBlock(this._data.words,u);l=this._data.words.splice(0,o),this._data.sigBytes-=s}return new zs(l,s)}},zs=class u3{words;sigBytes;constructor(n,l){n=this.words=n||[],this.sigBytes=l===void 0?n.length*4:l}static fromUtf8(n){let l=unescape(encodeURIComponent(n)),r=l.length,o=[];for(let s=0;s<r;s++)o[s>>>2]|=(l.charCodeAt(s)&255)<<24-s%4*8;return new u3(o,r)}toBase64(){let n=[];for(let l=0;l<this.sigBytes;l+=3){let r=this.words[l>>>2]>>>24-l%4*8&255,o=this.words[l+1>>>2]>>>24-(l+1)%4*8&255,s=this.words[l+2>>>2]>>>24-(l+2)%4*8&255,u=r<<16|o<<8|s;for(let f=0;f<4&&l*8+f*6<this.sigBytes*8;f++)n.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(u>>>6*(3-f)&63))}return n.join("")}concat(n){if(this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4),this.sigBytes%4)for(let l=0;l<n.sigBytes;l++){let r=n.words[l>>>2]>>>24-l%4*8&255;this.words[this.sigBytes+l>>>2]|=r<<24-(this.sigBytes+l)%4*8}else for(let l=0;l<n.sigBytes;l+=4)this.words[this.sigBytes+l>>>2]=n.words[l>>>2];this.sigBytes+=n.sigBytes}};function S9(e){return new A9().finalize(e).toBase64()}function D9(e){return S9(B9(e))}const wg=typeof self=="object"?self:globalThis,_9=(e,n)=>{let l=(o,s)=>(e.set(s,o),o),r=o=>{if(e.has(o))return e.get(o);let[s,u]=n[o];switch(s){case 0:case-1:return l(u,o);case 1:{let f=l([],o);for(let d of u)f.push(r(d));return f}case 2:{let f=l({},o);for(let[d,h]of u)f[r(d)]=r(h);return f}case 3:return l(new Date(u),o);case 4:{let{source:f,flags:d}=u;return l(new RegExp(f,d),o)}case 5:{let f=l(new Map,o);for(let[d,h]of u)f.set(r(d),r(h));return f}case 6:{let f=l(new Set,o);for(let d of u)f.add(r(d));return f}case 7:{let{name:f,message:d}=u;return l(new wg[f](d),o)}case 8:return l(BigInt(u),o);case"BigInt":return l(Object(BigInt(u)),o);case"ArrayBuffer":return l(new Uint8Array(u).buffer,u);case"DataView":{let{buffer:f}=new Uint8Array(u);return l(new DataView(f),u)}}return l(new wg[s](u),o)};return r},Eg=e=>_9(new Map,e)(0),{toString:O9}={},{keys:N9}=Object,Ma=e=>{let n=typeof e;if(n!=="object"||!e)return[0,n];let l=O9.call(e).slice(8,-1);switch(l){case"Array":return[1,""];case"Object":return[2,""];case"Date":return[3,""];case"RegExp":return[4,""];case"Map":return[5,""];case"Set":return[6,""];case"DataView":return[1,l]}return l.includes("Array")?[1,l]:l.includes("Error")?[7,l]:[2,l]},Ps=([e,n])=>e===0&&(n==="function"||n==="symbol"),L9=(e,n,l,r)=>{let o=(u,f)=>{let d=r.push(u)-1;return l.set(f,d),d},s=u=>{if(l.has(u))return l.get(u);let[f,d]=Ma(u);switch(f){case 0:{let y=u;switch(d){case"bigint":f=8,y=u.toString();break;case"function":case"symbol":if(e)throw TypeError("unable to serialize "+d);y=null;break;case"undefined":return o([-1],u)}return o([f,y],u)}case 1:{if(d){let b=u;return d==="DataView"?b=new Uint8Array(u.buffer):d==="ArrayBuffer"&&(b=new Uint8Array(u)),o([d,[...b]],u)}let y=[],m=o([f,y],u);for(let b of u)y.push(s(b));return m}case 2:{if(d)switch(d){case"BigInt":return o([d,u.toString()],u);case"Boolean":case"Number":case"String":return o([d,u.valueOf()],u)}if(n&&"toJSON"in u)return s(u.toJSON());let y=[],m=o([f,y],u);for(let b of N9(u))(e||!Ps(Ma(u[b])))&&y.push([s(b),s(u[b])]);return m}case 3:return o([f,u.toISOString()],u);case 4:{let{source:y,flags:m}=u;return o([f,{source:y,flags:m}],u)}case 5:{let y=[],m=o([f,y],u);for(let[b,v]of u)(e||!(Ps(Ma(b))||Ps(Ma(v))))&&y.push([s(b),s(v)]);return m}case 6:{let y=[],m=o([f,y],u);for(let b of u)(e||!Ps(Ma(b)))&&y.push(s(b));return m}}let{message:h}=u;return o([f,{name:d,message:h}],u)};return s},Cg=(e,{json:n,lossy:l}={})=>{let r=[];return L9(!(n||l),!!n,new Map,r)(e),r};var Wa=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Eg(Cg(e,n)):structuredClone(e):(e,n)=>Eg(Cg(e,n));const f3=h3("end"),d3=h3("start");function h3(e){return n;function n(l){let r=l&&l.position&&l.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function p3(e){let n=d3(e),l=f3(e);if(n&&l)return{start:n,end:l}}const bi=["ariaDescribedBy","ariaLabel","ariaLabelledBy"],e1={ancestors:{tbody:["table"],td:["table"],th:["table"],thead:["table"],tfoot:["table"],tr:["table"]},attributes:{a:[...bi,"dataFootnoteBackref","dataFootnoteRef",["className","data-footnote-backref"],"href"],blockquote:["cite"],code:[["className",/^language-./]],del:["cite"],div:["itemScope","itemType"],dl:[...bi],h2:[["className","sr-only"]],img:[...bi,"longDesc","src"],input:[["disabled",!0],["type","checkbox"]],ins:["cite"],li:[["className","task-list-item"]],ol:[...bi,["className","contains-task-list"]],q:["cite"],section:["dataFootnotes",["className","footnotes"]],source:["srcSet"],summary:[...bi],table:[...bi],ul:[...bi,["className","contains-task-list"]],"*":"abbr.accept.acceptCharset.accessKey.action.align.alt.axis.border.cellPadding.cellSpacing.char.charOff.charSet.checked.clear.colSpan.color.cols.compact.coords.dateTime.dir.encType.frame.hSpace.headers.height.hrefLang.htmlFor.id.isMap.itemProp.label.lang.maxLength.media.method.multiple.name.noHref.noShade.noWrap.open.prompt.readOnly.rev.rowSpan.rows.rules.scope.selected.shape.size.span.start.summary.tabIndex.title.useMap.vAlign.value.width".split(".")},clobber:["ariaDescribedBy","ariaLabelledBy","id","name"],clobberPrefix:"user-content-",protocols:{cite:["http","https"],href:["http","https","irc","ircs","mailto","xmpp"],longDesc:["http","https"],src:["http","https"]},required:{input:{disabled:!0,type:"checkbox"}},strip:["script"],tagNames:"a.b.blockquote.br.code.dd.del.details.div.dl.dt.em.h1.h2.h3.h4.h5.h6.hr.i.img.input.ins.kbd.li.ol.p.picture.pre.q.rp.rt.ruby.s.samp.section.source.span.strike.strong.sub.summary.sup.table.tbody.td.tfoot.th.thead.tr.tt.ul.var".split(".")},Yl={}.hasOwnProperty;function R9(e,n){let l={type:"root",children:[]},r=g3({schema:n?{...e1,...n}:e1,stack:[]},e);return r&&(Array.isArray(r)?r.length===1?l=r[0]:l.children=r:l=r),l}function g3(e,n){if(n&&typeof n=="object"){let l=n;switch(typeof l.type=="string"?l.type:""){case"comment":return z9(e,l);case"doctype":return P9(e,l);case"element":return F9(e,l);case"root":return I9(e,l);case"text":return M9(e,l)}}}function z9(e,n){if(e.schema.allowComments){let l=typeof n.value=="string"?n.value:"",r=l.indexOf("-->"),o={type:"comment",value:r<0?l:l.slice(0,r)};return uo(o,n),o}}function P9(e,n){if(e.schema.allowDoctypes){let l={type:"doctype"};return uo(l,n),l}}function F9(e,n){let l=typeof n.tagName=="string"?n.tagName:"";e.stack.push(l);let r=y3(e,n.children),o=G9(e,n.properties);e.stack.pop();let s=!1;if(l&&l!=="*"&&(!e.schema.tagNames||e.schema.tagNames.includes(l))&&(s=!0,e.schema.ancestors&&Yl.call(e.schema.ancestors,l))){let f=e.schema.ancestors[l],d=-1;for(s=!1;++d<f.length;)e.stack.includes(f[d])&&(s=!0)}if(!s)return e.schema.strip&&!e.schema.strip.includes(l)?r:void 0;let u={type:"element",tagName:l,properties:o,children:r};return uo(u,n),u}function I9(e,n){let l={type:"root",children:y3(e,n.children)};return uo(l,n),l}function M9(e,n){let l={type:"text",value:typeof n.value=="string"?n.value:""};return uo(l,n),l}function y3(e,n){let l=[];if(Array.isArray(n)){let r=n,o=-1;for(;++o<r.length;){let s=g3(e,r[o]);s&&(Array.isArray(s)?l.push(...s):l.push(s))}}return l}function G9(e,n){let l=e.stack[e.stack.length-1],r=e.schema.attributes,o=e.schema.required,s=r&&Yl.call(r,l)?r[l]:void 0,u=r&&Yl.call(r,"*")?r["*"]:void 0,f=n&&typeof n=="object"?n:{},d={},h;for(h in f)if(Yl.call(f,h)){let y=f[h],m=Ag(e,Sg(s,h),h,y);m??=Ag(e,Sg(u,h),h,y),m!=null&&(d[h]=m)}if(o&&Yl.call(o,l)){let y=o[l];for(h in y)Yl.call(y,h)&&!Yl.call(d,h)&&(d[h]=y[h])}return d}function Ag(e,n,l,r){return n?Array.isArray(r)?q9(e,n,l,r):m3(e,n,l,r):void 0}function q9(e,n,l,r){let o=-1,s=[];for(;++o<r.length;){let u=m3(e,n,l,r[o]);(typeof u=="number"||typeof u=="string")&&s.push(u)}return s}function m3(e,n,l,r){if(!(typeof r!="boolean"&&typeof r!="number"&&typeof r!="string")&&$9(e,l,r)){if(typeof n=="object"&&n.length>1){let o=!1,s=0;for(;++s<n.length;){let u=n[s];if(u&&typeof u=="object"&&"flags"in u){if(u.test(String(r))){o=!0;break}}else if(u===r){o=!0;break}}if(!o)return}return e.schema.clobber&&e.schema.clobberPrefix&&e.schema.clobber.includes(l)?e.schema.clobberPrefix+r:r}}function $9(e,n,l){let r=e.schema.protocols&&Yl.call(e.schema.protocols,n)?e.schema.protocols[n]:void 0;if(!r||r.length===0)return!0;let o=String(l),s=o.indexOf(":"),u=o.indexOf("?"),f=o.indexOf("#"),d=o.indexOf("/");if(s<0||d>-1&&s>d||u>-1&&s>u||f>-1&&s>f)return!0;let h=-1;for(;++h<r.length;){let y=r[h];if(s===y.length&&o.slice(0,y.length)===y)return!0}return!1}function uo(e,n){let l=p3(n);n.data&&(e.data=Wa(n.data)),l&&(e.position=l)}function Sg(e,n){let l,r=-1;if(e)for(;++r<e.length;){let o=e[r],s=typeof o=="string"?o:o[0];if(s===n)return o;s==="data*"&&(l=o)}if(n.length>4&&n.slice(0,4).toLowerCase()==="data")return l}function j9(e){return function(n){return R9(n,e)}}const U9="AElig.AMP.Aacute.Acirc.Agrave.Aring.Atilde.Auml.COPY.Ccedil.ETH.Eacute.Ecirc.Egrave.Euml.GT.Iacute.Icirc.Igrave.Iuml.LT.Ntilde.Oacute.Ocirc.Ograve.Oslash.Otilde.Ouml.QUOT.REG.THORN.Uacute.Ucirc.Ugrave.Uuml.Yacute.aacute.acirc.acute.aelig.agrave.amp.aring.atilde.auml.brvbar.ccedil.cedil.cent.copy.curren.deg.divide.eacute.ecirc.egrave.eth.euml.frac12.frac14.frac34.gt.iacute.icirc.iexcl.igrave.iquest.iuml.laquo.lt.macr.micro.middot.nbsp.not.ntilde.oacute.ocirc.ograve.ordf.ordm.oslash.otilde.ouml.para.plusmn.pound.quot.raquo.reg.sect.shy.sup1.sup2.sup3.szlig.thorn.times.uacute.ucirc.ugrave.uml.uuml.yacute.yen.yuml".split("."),Td={nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",fnof:"ƒ",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",bull:"•",hellip:"…",prime:"′",Prime:"″",oline:"‾",frasl:"⁄",weierp:"℘",image:"ℑ",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦",quot:'"',amp:"&",lt:"<",gt:">",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",circ:"ˆ",tilde:"˜",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",permil:"‰",lsaquo:"‹",rsaquo:"›",euro:"€"};function cc(e,n){let l=String(e);if(typeof n!="string")throw TypeError("Expected character");let r=0,o=l.indexOf(n);for(;o!==-1;)r++,o=l.indexOf(n,o+n.length);return r}function Z9(e,n){let l=n||{};return(e[e.length-1]===""?[...e,""]:e).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const H9=["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","keygen","link","meta","param","source","track","wbr"];var Ka=class{constructor(n,l,r){this.normal=l,this.property=n,r&&(this.space=r)}};Ka.prototype.normal={},Ka.prototype.property={},Ka.prototype.space=void 0;function T3(e,n){let l={},r={};for(let o of e)Object.assign(l,o.property),Object.assign(r,o.normal);return new Ka(l,r,n)}function t1(e){return e.toLowerCase()}var Kt=class{constructor(n,l){this.attribute=l,this.property=n}};Kt.prototype.attribute="",Kt.prototype.booleanish=!1,Kt.prototype.boolean=!1,Kt.prototype.commaOrSpaceSeparated=!1,Kt.prototype.commaSeparated=!1,Kt.prototype.defined=!1,Kt.prototype.mustUseProperty=!1,Kt.prototype.number=!1,Kt.prototype.overloadedBoolean=!1,Kt.prototype.property="",Kt.prototype.spaceSeparated=!1,Kt.prototype.space=void 0;var n1=co({boolean:()=>ve,booleanish:()=>ht,commaOrSpaceSeparated:()=>nn,commaSeparated:()=>Sr,number:()=>J,overloadedBoolean:()=>b3,spaceSeparated:()=>Ye});let K9=0;const ve=Oi(),ht=Oi(),b3=Oi(),J=Oi(),Ye=Oi(),Sr=Oi(),nn=Oi();function Oi(){return 2**++K9}const bd=Object.keys(n1);var I1=class extends Kt{constructor(n,l,r,o){let s=-1;if(super(n,l),Dg(this,"space",o),typeof r=="number")for(;++s<bd.length;){let u=bd[s];Dg(this,bd[s],(r&n1[u])===n1[u])}}};I1.prototype.defined=!0;function Dg(e,n,l){l&&(e[n]=l)}function Mr(e){let n={},l={};for(let[r,o]of Object.entries(e.properties)){let s=new I1(r,e.transform(e.attributes||{},r),o,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),n[r]=s,l[t1(r)]=r,l[t1(s.attribute)]=r}return new Ka(n,l,e.space)}const v3=Mr({properties:{ariaActiveDescendant:null,ariaAtomic:ht,ariaAutoComplete:null,ariaBusy:ht,ariaChecked:ht,ariaColCount:J,ariaColIndex:J,ariaColSpan:J,ariaControls:Ye,ariaCurrent:null,ariaDescribedBy:Ye,ariaDetails:null,ariaDisabled:ht,ariaDropEffect:Ye,ariaErrorMessage:null,ariaExpanded:ht,ariaFlowTo:Ye,ariaGrabbed:ht,ariaHasPopup:null,ariaHidden:ht,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ye,ariaLevel:J,ariaLive:null,ariaModal:ht,ariaMultiLine:ht,ariaMultiSelectable:ht,ariaOrientation:null,ariaOwns:Ye,ariaPlaceholder:null,ariaPosInSet:J,ariaPressed:ht,ariaReadOnly:ht,ariaRelevant:null,ariaRequired:ht,ariaRoleDescription:Ye,ariaRowCount:J,ariaRowIndex:J,ariaRowSpan:J,ariaSelected:ht,ariaSetSize:J,ariaSort:null,ariaValueMax:J,ariaValueMin:J,ariaValueNow:J,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function k3(e,n){return n in e?e[n]:n}function x3(e,n){return k3(e,n.toLowerCase())}const V9=Mr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Sr,acceptCharset:Ye,accessKey:Ye,action:null,allow:null,allowFullScreen:ve,allowPaymentRequest:ve,allowUserMedia:ve,alt:null,as:null,async:ve,autoCapitalize:null,autoComplete:Ye,autoFocus:ve,autoPlay:ve,blocking:Ye,capture:null,charSet:null,checked:ve,cite:null,className:Ye,cols:J,colSpan:null,content:null,contentEditable:ht,controls:ve,controlsList:Ye,coords:J|Sr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:ve,defer:ve,dir:null,dirName:null,disabled:ve,download:b3,draggable:ht,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:ve,formTarget:null,headers:Ye,height:J,hidden:ve,high:J,href:null,hrefLang:null,htmlFor:Ye,httpEquiv:Ye,id:null,imageSizes:null,imageSrcSet:null,inert:ve,inputMode:null,integrity:null,is:null,isMap:ve,itemId:null,itemProp:Ye,itemRef:Ye,itemScope:ve,itemType:Ye,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:ve,low:J,manifest:null,max:null,maxLength:J,media:null,method:null,min:null,minLength:J,multiple:ve,muted:ve,name:null,nonce:null,noModule:ve,noValidate:ve,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:ve,optimum:J,pattern:null,ping:Ye,placeholder:null,playsInline:ve,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:ve,referrerPolicy:null,rel:Ye,required:ve,reversed:ve,rows:J,rowSpan:J,sandbox:Ye,scope:null,scoped:ve,seamless:ve,selected:ve,shadowRootClonable:ve,shadowRootDelegatesFocus:ve,shadowRootMode:null,shape:null,size:J,sizes:null,slot:null,span:J,spellCheck:ht,src:null,srcDoc:null,srcLang:null,srcSet:null,start:J,step:null,style:null,tabIndex:J,target:null,title:null,translate:null,type:null,typeMustMatch:ve,useMap:null,value:ht,width:J,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ye,axis:null,background:null,bgColor:null,border:J,borderColor:null,bottomMargin:J,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:ve,declare:ve,event:null,face:null,frame:null,frameBorder:null,hSpace:J,leftMargin:J,link:null,longDesc:null,lowSrc:null,marginHeight:J,marginWidth:J,noResize:ve,noHref:ve,noShade:ve,noWrap:ve,object:null,profile:null,prompt:null,rev:null,rightMargin:J,rules:null,scheme:null,scrolling:ht,standby:null,summary:null,text:null,topMargin:J,valueType:null,version:null,vAlign:null,vLink:null,vSpace:J,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:ve,disableRemotePlayback:ve,prefix:null,property:null,results:J,security:null,unselectable:null},space:"html",transform:x3}),X9=Mr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:nn,accentHeight:J,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:J,amplitude:J,arabicForm:null,ascent:J,attributeName:null,attributeType:null,azimuth:J,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:J,by:null,calcMode:null,capHeight:J,className:Ye,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:J,diffuseConstant:J,direction:null,display:null,dur:null,divisor:J,dominantBaseline:null,download:ve,dx:null,dy:null,edgeMode:null,editable:null,elevation:J,enableBackground:null,end:null,event:null,exponent:J,externalResourcesRequired:null,fill:null,fillOpacity:J,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Sr,g2:Sr,glyphName:Sr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:J,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:J,horizOriginX:J,horizOriginY:J,id:null,ideographic:J,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:J,k:J,k1:J,k2:J,k3:J,k4:J,kernelMatrix:nn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:J,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:J,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:J,overlineThickness:J,paintOrder:null,panose1:null,path:null,pathLength:J,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ye,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:J,pointsAtY:J,pointsAtZ:J,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:nn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:nn,rev:nn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:nn,requiredFeatures:nn,requiredFonts:nn,requiredFormats:nn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:J,specularExponent:J,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:J,strikethroughThickness:J,string:null,stroke:null,strokeDashArray:nn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:J,strokeOpacity:J,strokeWidth:null,style:null,surfaceScale:J,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:nn,tabIndex:J,tableValues:null,target:null,targetX:J,targetY:J,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:nn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:J,underlineThickness:J,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:J,values:null,vAlphabetic:J,vMathematical:J,vectorEffect:null,vHanging:J,vIdeographic:J,version:null,vertAdvY:J,vertOriginX:J,vertOriginY:J,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:J,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:k3}),B3=Mr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),w3=Mr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:x3}),E3=Mr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Y9=/[A-Z]/g,_g=/-[a-z]/g,Q9=/^data[-\w.:]+$/i;function W9(e,n){let l=t1(n),r=n,o=Kt;if(l in e.normal)return e.property[e.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&Q9.test(n)){if(n.charAt(4)==="-"){let s=n.slice(5).replace(_g,e7);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{let s=n.slice(4);if(!_g.test(s)){let u=s.replace(Y9,J9);u.charAt(0)!=="-"&&(u="-"+u),n="data"+u}}o=I1}return new o(r,n)}function J9(e){return"-"+e.toLowerCase()}function e7(e){return e.charAt(1).toUpperCase()}const t7=T3([v3,V9,B3,w3,E3],"html"),C3=T3([v3,X9,B3,w3,E3],"svg"),Og={}.hasOwnProperty;function n7(e,n){let l=n||{};function r(o,...s){let u=r.invalid,f=r.handlers;if(o&&Og.call(o,e)){let d=String(o[e]);u=Og.call(f,d)?f[d]:r.unknown}if(u)return u.call(this,o,...s)}return r.handlers=l.handlers||{},r.invalid=l.invalid,r.unknown=l.unknown,r}const l7=/["&'<>`]/g,i7=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,r7=/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,a7=/[|\\{}()[\]^$+*?.]/g,Ng=new WeakMap;function o7(e,n){if(e=e.replace(n.subset?s7(n.subset):l7,r),n.subset||n.escapeOnly)return e;return e.replace(i7,l).replace(r7,r);function l(o,s,u){return n.format((o.charCodeAt(0)-55296)*1024+o.charCodeAt(1)-56320+65536,u.charCodeAt(s+2),n)}function r(o,s,u){return n.format(o.charCodeAt(0),u.charCodeAt(s+1),n)}}function s7(e){let n=Ng.get(e);return n||(n=c7(e),Ng.set(e,n)),n}function c7(e){let n=[],l=-1;for(;++l<e.length;)n.push(e[l].replace(a7,"\\$&"));return RegExp("(?:"+n.join("|")+")","g")}const u7=/[\dA-Fa-f]/;function f7(e,n,l){let r="&#x"+e.toString(16).toUpperCase();return l&&n&&!u7.test(String.fromCharCode(n))?r:r+";"}const d7=/\d/;function h7(e,n,l){let r="&#"+String(e);return l&&n&&!d7.test(String.fromCharCode(n))?r:r+";"}const p7=["cent","copy","divide","gt","lt","not","para","times"],A3={}.hasOwnProperty,l1={};let Fs;for(Fs in Td)A3.call(Td,Fs)&&(l1[Td[Fs]]=Fs);const g7=/[^\dA-Za-z]/;function y7(e,n,l,r){let o=String.fromCharCode(e);if(A3.call(l1,o)){let s=l1[o],u="&"+s;return l&&U9.includes(s)&&!p7.includes(s)&&(!r||n&&n!==61&&g7.test(String.fromCharCode(n)))?u:u+";"}return""}function m7(e,n,l){let r=f7(e,n,l.omitOptionalSemicolons),o;if((l.useNamedReferences||l.useShortestReferences)&&(o=y7(e,n,l.omitOptionalSemicolons,l.attribute)),(l.useShortestReferences||!o)&&l.useShortestReferences){let s=h7(e,n,l.omitOptionalSemicolons);s.length<r.length&&(r=s)}return o&&(!l.useShortestReferences||o.length<r.length)?o:r}function Dr(e,n){return o7(e,Object.assign({format:m7},n))}const T7=/^>|^->|<!--|-->|--!>|<!-$/g,b7=[">"],v7=["<",">"];function k7(e,n,l,r){return r.settings.bogusComments?"<?"+Dr(e.value,Object.assign({},r.settings.characterReferences,{subset:b7}))+">":"<!--"+e.value.replace(T7,o)+"-->";function o(s){return Dr(s,Object.assign({},r.settings.characterReferences,{subset:v7}))}}function x7(e,n,l,r){return"<!"+(r.settings.upperDoctype?"DOCTYPE":"doctype")+(r.settings.tightDoctype?"":" ")+"html>"}function B7(e){return e.join(" ").trim()}const w7=/[ \t\n\f\r]/g;function M1(e){return typeof e=="object"?e.type==="text"?Lg(e.value):!1:Lg(e)}function Lg(e){return e.replace(w7,"")===""}const Tt=D3(1),S3=D3(-1),E7=[];function D3(e){return n;function n(l,r,o){let s=l?l.children:E7,u=(r||0)+e,f=s[u];if(!o)for(;f&&M1(f);)u+=e,f=s[u];return f}}const C7={}.hasOwnProperty;function _3(e){return n;function n(l,r,o){return C7.call(e,l.tagName)&&e[l.tagName](l,r,o)}}const G1=_3({body:S7,caption:vd,colgroup:vd,dd:N7,dt:O7,head:vd,html:A7,li:_7,optgroup:L7,option:R7,p:D7,rp:Rg,rt:Rg,tbody:P7,td:zg,tfoot:F7,th:zg,thead:z7,tr:I7});function vd(e,n,l){let r=Tt(l,n,!0);return!r||r.type!=="comment"&&!(r.type==="text"&&M1(r.value.charAt(0)))}function A7(e,n,l){let r=Tt(l,n);return!r||r.type!=="comment"}function S7(e,n,l){let r=Tt(l,n);return!r||r.type!=="comment"}function D7(e,n,l){let r=Tt(l,n);return r?r.type==="element"&&(r.tagName==="address"||r.tagName==="article"||r.tagName==="aside"||r.tagName==="blockquote"||r.tagName==="details"||r.tagName==="div"||r.tagName==="dl"||r.tagName==="fieldset"||r.tagName==="figcaption"||r.tagName==="figure"||r.tagName==="footer"||r.tagName==="form"||r.tagName==="h1"||r.tagName==="h2"||r.tagName==="h3"||r.tagName==="h4"||r.tagName==="h5"||r.tagName==="h6"||r.tagName==="header"||r.tagName==="hgroup"||r.tagName==="hr"||r.tagName==="main"||r.tagName==="menu"||r.tagName==="nav"||r.tagName==="ol"||r.tagName==="p"||r.tagName==="pre"||r.tagName==="section"||r.tagName==="table"||r.tagName==="ul"):!l||!(l.type==="element"&&(l.tagName==="a"||l.tagName==="audio"||l.tagName==="del"||l.tagName==="ins"||l.tagName==="map"||l.tagName==="noscript"||l.tagName==="video"))}function _7(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&r.tagName==="li"}function O7(e,n,l){let r=Tt(l,n);return!!(r&&r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd"))}function N7(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&(r.tagName==="dt"||r.tagName==="dd")}function Rg(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&(r.tagName==="rp"||r.tagName==="rt")}function L7(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&r.tagName==="optgroup"}function R7(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&(r.tagName==="option"||r.tagName==="optgroup")}function z7(e,n,l){let r=Tt(l,n);return!!(r&&r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot"))}function P7(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&(r.tagName==="tbody"||r.tagName==="tfoot")}function F7(e,n,l){return!Tt(l,n)}function I7(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&r.tagName==="tr"}function zg(e,n,l){let r=Tt(l,n);return!r||r.type==="element"&&(r.tagName==="td"||r.tagName==="th")}const M7=_3({body:$7,colgroup:j7,head:q7,html:G7,tbody:U7});function G7(e){let n=Tt(e,-1);return!n||n.type!=="comment"}function q7(e){let n=new Set;for(let r of e.children)if(r.type==="element"&&(r.tagName==="base"||r.tagName==="title")){if(n.has(r.tagName))return!1;n.add(r.tagName)}let l=e.children[0];return!l||l.type==="element"}function $7(e){let n=Tt(e,-1,!0);return!n||n.type!=="comment"&&!(n.type==="text"&&M1(n.value.charAt(0)))&&!(n.type==="element"&&(n.tagName==="meta"||n.tagName==="link"||n.tagName==="script"||n.tagName==="style"||n.tagName==="template"))}function j7(e,n,l){let r=S3(l,n),o=Tt(e,-1,!0);return l&&r&&r.type==="element"&&r.tagName==="colgroup"&&G1(r,l.children.indexOf(r),l)?!1:!!(o&&o.type==="element"&&o.tagName==="col")}function U7(e,n,l){let r=S3(l,n),o=Tt(e,-1);return l&&r&&r.type==="element"&&(r.tagName==="thead"||r.tagName==="tbody")&&G1(r,l.children.indexOf(r),l)?!1:!!(o&&o.type==="element"&&o.tagName==="tr")}const Is={name:[[`	
\f\r &/=>`.split(""),`	
\f\r "&'/=>\``.split("")],[`\0	
\f\r "&'/<=>`.split(""),`\0	
\f\r "&'/<=>\``.split("")]],unquoted:[[`	
\f\r &>`.split(""),`\0	
\f\r "&'<=>\``.split("")],[`\0	
\f\r "&'<=>\``.split(""),`\0	
\f\r "&'<=>\``.split("")]],single:[["&'".split(""),"\"&'`".split("")],["\0&'".split(""),"\0\"&'`".split("")]],double:[['"&'.split(""),"\"&'`".split("")],['\0"&'.split(""),"\0\"&'`".split("")]]};function Z7(e,n,l,r){let o=r.schema,s=o.space==="svg"?!1:r.settings.omitOptionalTags,u=o.space==="svg"?r.settings.closeEmptyElements:r.settings.voids.includes(e.tagName.toLowerCase()),f=[],d;o.space==="html"&&e.tagName==="svg"&&(r.schema=C3);let h=H7(r,e.properties),y=r.all(o.space==="html"&&e.tagName==="template"?e.content:e);return r.schema=o,y&&(u=!1),(h||!s||!M7(e,n,l))&&(f.push("<",e.tagName,h?" "+h:""),u&&(o.space==="svg"||r.settings.closeSelfClosing)&&(d=h.charAt(h.length-1),(!r.settings.tightSelfClosing||d==="/"||d&&d!=='"'&&d!=="'")&&f.push(" "),f.push("/")),f.push(">")),f.push(y),!u&&(!s||!G1(e,n,l))&&f.push("</"+e.tagName+">"),f.join("")}function H7(e,n){let l=[],r=-1,o;if(n){for(o in n)if(n[o]!==null&&n[o]!==void 0){let s=K7(e,o,n[o]);s&&l.push(s)}}for(;++r<l.length;){let s=e.settings.tightAttributes?l[r].charAt(l[r].length-1):void 0;r!==l.length-1&&s!=='"'&&s!=="'"&&(l[r]+=" ")}return l.join("")}function K7(e,n,l){let r=W9(e.schema,n),o=e.settings.allowParseErrors&&e.schema.space==="html"?0:1,s=e.settings.allowDangerousCharacters?0:1,u=e.quote,f;if(r.overloadedBoolean&&(l===r.attribute||l==="")?l=!0:(r.boolean||r.overloadedBoolean)&&(typeof l!="string"||l===r.attribute||l==="")&&(l=!!l),l==null||l===!1||typeof l=="number"&&Number.isNaN(l))return"";let d=Dr(r.attribute,Object.assign({},e.settings.characterReferences,{subset:Is.name[o][s]}));return l===!0||(l=Array.isArray(l)?(r.commaSeparated?Z9:B7)(l,{padLeft:!e.settings.tightCommaSeparatedLists}):String(l),e.settings.collapseEmptyAttributes&&!l)?d:(e.settings.preferUnquoted&&(f=Dr(l,Object.assign({},e.settings.characterReferences,{attribute:!0,subset:Is.unquoted[o][s]}))),f!==l&&(e.settings.quoteSmart&&cc(l,u)>cc(l,e.alternative)&&(u=e.alternative),f=u+Dr(l,Object.assign({},e.settings.characterReferences,{subset:(u==="'"?Is.single:Is.double)[o][s],attribute:!0}))+u),d+(f&&"="+f))}const V7=["<","&"];function O3(e,n,l,r){return l&&l.type==="element"&&(l.tagName==="script"||l.tagName==="style")?e.value:Dr(e.value,Object.assign({},r.settings.characterReferences,{subset:V7}))}function X7(e,n,l,r){return r.settings.allowDangerousHtml?e.value:O3(e,n,l,r)}function Y7(e,n,l,r){return r.all(e)}const Q7=n7("type",{invalid:W7,unknown:J7,handlers:{comment:k7,doctype:x7,element:Z7,raw:X7,root:Y7,text:O3}});function W7(e){throw Error("Expected node, not `"+e+"`")}function J7(e){throw Error("Cannot compile unknown node `"+e.type+"`")}const eT={},tT={},nT=[];function lT(e,n){let l=n||eT,r=l.quote||'"',o=r==='"'?"'":'"';if(r!=='"'&&r!=="'")throw Error("Invalid quote `"+r+"`, expected `'` or `\"`");return{one:iT,all:rT,settings:{omitOptionalTags:l.omitOptionalTags||!1,allowParseErrors:l.allowParseErrors||!1,allowDangerousCharacters:l.allowDangerousCharacters||!1,quoteSmart:l.quoteSmart||!1,preferUnquoted:l.preferUnquoted||!1,tightAttributes:l.tightAttributes||!1,upperDoctype:l.upperDoctype||!1,tightDoctype:l.tightDoctype||!1,bogusComments:l.bogusComments||!1,tightCommaSeparatedLists:l.tightCommaSeparatedLists||!1,tightSelfClosing:l.tightSelfClosing||!1,collapseEmptyAttributes:l.collapseEmptyAttributes||!1,allowDangerousHtml:l.allowDangerousHtml||!1,voids:l.voids||H9,characterReferences:l.characterReferences||tT,closeSelfClosing:l.closeSelfClosing||!1,closeEmptyElements:l.closeEmptyElements||!1},schema:l.space==="svg"?C3:t7,quote:r,alternative:o}.one(Array.isArray(e)?{type:"root",children:e}:e,void 0,void 0)}function iT(e,n,l){return Q7(e,n,l,this)}function rT(e){let n=[],l=e&&e.children||nT,r=-1;for(;++r<l.length;)n[r]=this.one(l[r],r,e);return n.join("")}function aT(e){let n=this,l={...n.data("settings"),...e};n.compiler=r;function r(o){return lT(o,l)}}const Pg={AElig:"Æ",AMP:"&",Aacute:"Á",Abreve:"Ă",Acirc:"Â",Acy:"А",Afr:"𝔄",Agrave:"À",Alpha:"Α",Amacr:"Ā",And:"⩓",Aogon:"Ą",Aopf:"𝔸",ApplyFunction:"⁡",Aring:"Å",Ascr:"𝒜",Assign:"≔",Atilde:"Ã",Auml:"Ä",Backslash:"∖",Barv:"⫧",Barwed:"⌆",Bcy:"Б",Because:"∵",Bernoullis:"ℬ",Beta:"Β",Bfr:"𝔅",Bopf:"𝔹",Breve:"˘",Bscr:"ℬ",Bumpeq:"≎",CHcy:"Ч",COPY:"©",Cacute:"Ć",Cap:"⋒",CapitalDifferentialD:"ⅅ",Cayleys:"ℭ",Ccaron:"Č",Ccedil:"Ç",Ccirc:"Ĉ",Cconint:"∰",Cdot:"Ċ",Cedilla:"¸",CenterDot:"·",Cfr:"ℭ",Chi:"Χ",CircleDot:"⊙",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",Colon:"∷",Colone:"⩴",Congruent:"≡",Conint:"∯",ContourIntegral:"∮",Copf:"ℂ",Coproduct:"∐",CounterClockwiseContourIntegral:"∳",Cross:"⨯",Cscr:"𝒞",Cup:"⋓",CupCap:"≍",DD:"ⅅ",DDotrahd:"⤑",DJcy:"Ђ",DScy:"Ѕ",DZcy:"Џ",Dagger:"‡",Darr:"↡",Dashv:"⫤",Dcaron:"Ď",Dcy:"Д",Del:"∇",Delta:"Δ",Dfr:"𝔇",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",Diamond:"⋄",DifferentialD:"ⅆ",Dopf:"𝔻",Dot:"¨",DotDot:"⃜",DotEqual:"≐",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrow:"↓",DownArrowBar:"⤓",DownArrowUpArrow:"⇵",DownBreve:"̑",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVector:"↽",DownLeftVectorBar:"⥖",DownRightTeeVector:"⥟",DownRightVector:"⇁",DownRightVectorBar:"⥗",DownTee:"⊤",DownTeeArrow:"↧",Downarrow:"⇓",Dscr:"𝒟",Dstrok:"Đ",ENG:"Ŋ",ETH:"Ð",Eacute:"É",Ecaron:"Ě",Ecirc:"Ê",Ecy:"Э",Edot:"Ė",Efr:"𝔈",Egrave:"È",Element:"∈",Emacr:"Ē",EmptySmallSquare:"◻",EmptyVerySmallSquare:"▫",Eogon:"Ę",Eopf:"𝔼",Epsilon:"Ε",Equal:"⩵",EqualTilde:"≂",Equilibrium:"⇌",Escr:"ℰ",Esim:"⩳",Eta:"Η",Euml:"Ë",Exists:"∃",ExponentialE:"ⅇ",Fcy:"Ф",Ffr:"𝔉",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",Fopf:"𝔽",ForAll:"∀",Fouriertrf:"ℱ",Fscr:"ℱ",GJcy:"Ѓ",GT:">",Gamma:"Γ",Gammad:"Ϝ",Gbreve:"Ğ",Gcedil:"Ģ",Gcirc:"Ĝ",Gcy:"Г",Gdot:"Ġ",Gfr:"𝔊",Gg:"⋙",Gopf:"𝔾",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",Gt:"≫",HARDcy:"Ъ",Hacek:"ˇ",Hat:"^",Hcirc:"Ĥ",Hfr:"ℌ",HilbertSpace:"ℋ",Hopf:"ℍ",HorizontalLine:"─",Hscr:"ℋ",Hstrok:"Ħ",HumpDownHump:"≎",HumpEqual:"≏",IEcy:"Е",IJlig:"Ĳ",IOcy:"Ё",Iacute:"Í",Icirc:"Î",Icy:"И",Idot:"İ",Ifr:"ℑ",Igrave:"Ì",Im:"ℑ",Imacr:"Ī",ImaginaryI:"ⅈ",Implies:"⇒",Int:"∬",Integral:"∫",Intersection:"⋂",InvisibleComma:"⁣",InvisibleTimes:"⁢",Iogon:"Į",Iopf:"𝕀",Iota:"Ι",Iscr:"ℐ",Itilde:"Ĩ",Iukcy:"І",Iuml:"Ï",Jcirc:"Ĵ",Jcy:"Й",Jfr:"𝔍",Jopf:"𝕁",Jscr:"𝒥",Jsercy:"Ј",Jukcy:"Є",KHcy:"Х",KJcy:"Ќ",Kappa:"Κ",Kcedil:"Ķ",Kcy:"К",Kfr:"𝔎",Kopf:"𝕂",Kscr:"𝒦",LJcy:"Љ",LT:"<",Lacute:"Ĺ",Lambda:"Λ",Lang:"⟪",Laplacetrf:"ℒ",Larr:"↞",Lcaron:"Ľ",Lcedil:"Ļ",Lcy:"Л",LeftAngleBracket:"⟨",LeftArrow:"←",LeftArrowBar:"⇤",LeftArrowRightArrow:"⇆",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVector:"⇃",LeftDownVectorBar:"⥙",LeftFloor:"⌊",LeftRightArrow:"↔",LeftRightVector:"⥎",LeftTee:"⊣",LeftTeeArrow:"↤",LeftTeeVector:"⥚",LeftTriangle:"⊲",LeftTriangleBar:"⧏",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVector:"↿",LeftUpVectorBar:"⥘",LeftVector:"↼",LeftVectorBar:"⥒",Leftarrow:"⇐",Leftrightarrow:"⇔",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",LessLess:"⪡",LessSlantEqual:"⩽",LessTilde:"≲",Lfr:"𝔏",Ll:"⋘",Lleftarrow:"⇚",Lmidot:"Ŀ",LongLeftArrow:"⟵",LongLeftRightArrow:"⟷",LongRightArrow:"⟶",Longleftarrow:"⟸",Longleftrightarrow:"⟺",Longrightarrow:"⟹",Lopf:"𝕃",LowerLeftArrow:"↙",LowerRightArrow:"↘",Lscr:"ℒ",Lsh:"↰",Lstrok:"Ł",Lt:"≪",Map:"⤅",Mcy:"М",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",MinusPlus:"∓",Mopf:"𝕄",Mscr:"ℳ",Mu:"Μ",NJcy:"Њ",Nacute:"Ń",Ncaron:"Ň",Ncedil:"Ņ",Ncy:"Н",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,Nfr:"𝔑",NoBreak:"⁠",NonBreakingSpace:" ",Nopf:"ℕ",Not:"⫬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",NotLeftTriangle:"⋪",NotLeftTriangleBar:"⧏̸",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangle:"⋫",NotRightTriangleBar:"⧐̸",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",Nscr:"𝒩",Ntilde:"Ñ",Nu:"Ν",OElig:"Œ",Oacute:"Ó",Ocirc:"Ô",Ocy:"О",Odblac:"Ő",Ofr:"𝔒",Ograve:"Ò",Omacr:"Ō",Omega:"Ω",Omicron:"Ο",Oopf:"𝕆",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",Or:"⩔",Oscr:"𝒪",Oslash:"Ø",Otilde:"Õ",Otimes:"⨷",Ouml:"Ö",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",PartialD:"∂",Pcy:"П",Pfr:"𝔓",Phi:"Φ",Pi:"Π",PlusMinus:"±",Poincareplane:"ℌ",Popf:"ℙ",Pr:"⪻",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",Prime:"″",Product:"∏",Proportion:"∷",Proportional:"∝",Pscr:"𝒫",Psi:"Ψ",QUOT:'"',Qfr:"𝔔",Qopf:"ℚ",Qscr:"𝒬",RBarr:"⤐",REG:"®",Racute:"Ŕ",Rang:"⟫",Rarr:"↠",Rarrtl:"⤖",Rcaron:"Ř",Rcedil:"Ŗ",Rcy:"Р",Re:"ℜ",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",Rfr:"ℜ",Rho:"Ρ",RightAngleBracket:"⟩",RightArrow:"→",RightArrowBar:"⇥",RightArrowLeftArrow:"⇄",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVector:"⇂",RightDownVectorBar:"⥕",RightFloor:"⌋",RightTee:"⊢",RightTeeArrow:"↦",RightTeeVector:"⥛",RightTriangle:"⊳",RightTriangleBar:"⧐",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVector:"↾",RightUpVectorBar:"⥔",RightVector:"⇀",RightVectorBar:"⥓",Rightarrow:"⇒",Ropf:"ℝ",RoundImplies:"⥰",Rrightarrow:"⇛",Rscr:"ℛ",Rsh:"↱",RuleDelayed:"⧴",SHCHcy:"Щ",SHcy:"Ш",SOFTcy:"Ь",Sacute:"Ś",Sc:"⪼",Scaron:"Š",Scedil:"Ş",Scirc:"Ŝ",Scy:"С",Sfr:"𝔖",ShortDownArrow:"↓",ShortLeftArrow:"←",ShortRightArrow:"→",ShortUpArrow:"↑",Sigma:"Σ",SmallCircle:"∘",Sopf:"𝕊",Sqrt:"√",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",Sscr:"𝒮",Star:"⋆",Sub:"⋐",Subset:"⋐",SubsetEqual:"⊆",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",SuchThat:"∋",Sum:"∑",Sup:"⋑",Superset:"⊃",SupersetEqual:"⊇",Supset:"⋑",THORN:"Þ",TRADE:"™",TSHcy:"Ћ",TScy:"Ц",Tab:"	",Tau:"Τ",Tcaron:"Ť",Tcedil:"Ţ",Tcy:"Т",Tfr:"𝔗",Therefore:"∴",Theta:"Θ",ThickSpace:"  ",ThinSpace:" ",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",Topf:"𝕋",TripleDot:"⃛",Tscr:"𝒯",Tstrok:"Ŧ",Uacute:"Ú",Uarr:"↟",Uarrocir:"⥉",Ubrcy:"Ў",Ubreve:"Ŭ",Ucirc:"Û",Ucy:"У",Udblac:"Ű",Ufr:"𝔘",Ugrave:"Ù",Umacr:"Ū",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",Uopf:"𝕌",UpArrow:"↑",UpArrowBar:"⤒",UpArrowDownArrow:"⇅",UpDownArrow:"↕",UpEquilibrium:"⥮",UpTee:"⊥",UpTeeArrow:"↥",Uparrow:"⇑",Updownarrow:"⇕",UpperLeftArrow:"↖",UpperRightArrow:"↗",Upsi:"ϒ",Upsilon:"Υ",Uring:"Ů",Uscr:"𝒰",Utilde:"Ũ",Uuml:"Ü",VDash:"⊫",Vbar:"⫫",Vcy:"В",Vdash:"⊩",Vdashl:"⫦",Vee:"⋁",Verbar:"‖",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",Vopf:"𝕍",Vscr:"𝒱",Vvdash:"⊪",Wcirc:"Ŵ",Wedge:"⋀",Wfr:"𝔚",Wopf:"𝕎",Wscr:"𝒲",Xfr:"𝔛",Xi:"Ξ",Xopf:"𝕏",Xscr:"𝒳",YAcy:"Я",YIcy:"Ї",YUcy:"Ю",Yacute:"Ý",Ycirc:"Ŷ",Ycy:"Ы",Yfr:"𝔜",Yopf:"𝕐",Yscr:"𝒴",Yuml:"Ÿ",ZHcy:"Ж",Zacute:"Ź",Zcaron:"Ž",Zcy:"З",Zdot:"Ż",ZeroWidthSpace:"​",Zeta:"Ζ",Zfr:"ℨ",Zopf:"ℤ",Zscr:"𝒵",aacute:"á",abreve:"ă",ac:"∾",acE:"∾̳",acd:"∿",acirc:"â",acute:"´",acy:"а",aelig:"æ",af:"⁡",afr:"𝔞",agrave:"à",alefsym:"ℵ",aleph:"ℵ",alpha:"α",amacr:"ā",amalg:"⨿",amp:"&",and:"∧",andand:"⩕",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsd:"∡",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",aogon:"ą",aopf:"𝕒",ap:"≈",apE:"⩰",apacir:"⩯",ape:"≊",apid:"≋",apos:"'",approx:"≈",approxeq:"≊",aring:"å",ascr:"𝒶",ast:"*",asymp:"≈",asympeq:"≍",atilde:"ã",auml:"ä",awconint:"∳",awint:"⨑",bNot:"⫭",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",barvee:"⊽",barwed:"⌅",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",beta:"β",beth:"ℶ",between:"≬",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bnot:"⌐",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxDL:"╗",boxDR:"╔",boxDl:"╖",boxDr:"╓",boxH:"═",boxHD:"╦",boxHU:"╩",boxHd:"╤",boxHu:"╧",boxUL:"╝",boxUR:"╚",boxUl:"╜",boxUr:"╙",boxV:"║",boxVH:"╬",boxVL:"╣",boxVR:"╠",boxVh:"╫",boxVl:"╢",boxVr:"╟",boxbox:"⧉",boxdL:"╕",boxdR:"╒",boxdl:"┐",boxdr:"┌",boxh:"─",boxhD:"╥",boxhU:"╨",boxhd:"┬",boxhu:"┴",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxuL:"╛",boxuR:"╘",boxul:"┘",boxur:"└",boxv:"│",boxvH:"╪",boxvL:"╡",boxvR:"╞",boxvh:"┼",boxvl:"┤",boxvr:"├",bprime:"‵",breve:"˘",brvbar:"¦",bscr:"𝒷",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsol:"\\",bsolb:"⧅",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",bumpeq:"≏",cacute:"ć",cap:"∩",capand:"⩄",capbrcup:"⩉",capcap:"⩋",capcup:"⩇",capdot:"⩀",caps:"∩︀",caret:"⁁",caron:"ˇ",ccaps:"⩍",ccaron:"č",ccedil:"ç",ccirc:"ĉ",ccups:"⩌",ccupssm:"⩐",cdot:"ċ",cedil:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",cfr:"𝔠",chcy:"ч",check:"✓",checkmark:"✓",chi:"χ",cir:"○",cirE:"⧃",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledR:"®",circledS:"Ⓢ",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",clubs:"♣",clubsuit:"♣",colon:":",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",conint:"∮",copf:"𝕔",coprod:"∐",copy:"©",copysr:"℗",crarr:"↵",cross:"✗",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cup:"∪",cupbrcap:"⩈",cupcap:"⩆",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dArr:"⇓",dHar:"⥥",dagger:"†",daleth:"ℸ",darr:"↓",dash:"‐",dashv:"⊣",dbkarow:"⤏",dblac:"˝",dcaron:"ď",dcy:"д",dd:"ⅆ",ddagger:"‡",ddarr:"⇊",ddotseq:"⩷",deg:"°",delta:"δ",demptyv:"⦱",dfisht:"⥿",dfr:"𝔡",dharl:"⇃",dharr:"⇂",diam:"⋄",diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",dopf:"𝕕",dot:"˙",doteq:"≐",doteqdot:"≑",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",downarrow:"↓",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",dscr:"𝒹",dscy:"ѕ",dsol:"⧶",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",dzcy:"џ",dzigrarr:"⟿",eDDot:"⩷",eDot:"≑",eacute:"é",easter:"⩮",ecaron:"ě",ecir:"≖",ecirc:"ê",ecolon:"≕",ecy:"э",edot:"ė",ee:"ⅇ",efDot:"≒",efr:"𝔢",eg:"⪚",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",emacr:"ē",empty:"∅",emptyset:"∅",emptyv:"∅",emsp13:" ",emsp14:" ",emsp:" ",eng:"ŋ",ensp:" ",eogon:"ę",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",equals:"=",equest:"≟",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erDot:"≓",erarr:"⥱",escr:"ℯ",esdot:"≐",esim:"≂",eta:"η",eth:"ð",euml:"ë",euro:"€",excl:"!",exist:"∃",expectation:"ℰ",exponentiale:"ⅇ",fallingdotseq:"≒",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",ffr:"𝔣",filig:"ﬁ",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",fopf:"𝕗",forall:"∀",fork:"⋔",forkv:"⫙",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",gE:"≧",gEl:"⪌",gacute:"ǵ",gamma:"γ",gammad:"ϝ",gap:"⪆",gbreve:"ğ",gcirc:"ĝ",gcy:"г",gdot:"ġ",ge:"≥",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",ges:"⩾",gescc:"⪩",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",gfr:"𝔤",gg:"≫",ggg:"⋙",gimel:"ℷ",gjcy:"ѓ",gl:"≷",glE:"⪒",gla:"⪥",glj:"⪤",gnE:"≩",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gneq:"⪈",gneqq:"≩",gnsim:"⋧",gopf:"𝕘",grave:"`",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gt:">",gtcc:"⪧",gtcir:"⩺",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",hArr:"⇔",hairsp:" ",half:"½",hamilt:"ℋ",hardcy:"ъ",harr:"↔",harrcir:"⥈",harrw:"↭",hbar:"ℏ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",horbar:"―",hscr:"𝒽",hslash:"ℏ",hstrok:"ħ",hybull:"⁃",hyphen:"‐",iacute:"í",ic:"⁣",icirc:"î",icy:"и",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",ijlig:"ĳ",imacr:"ī",image:"ℑ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",imof:"⊷",imped:"Ƶ",in:"∈",incare:"℅",infin:"∞",infintie:"⧝",inodot:"ı",int:"∫",intcal:"⊺",integers:"ℤ",intercal:"⊺",intlarhk:"⨗",intprod:"⨼",iocy:"ё",iogon:"į",iopf:"𝕚",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",isin:"∈",isinE:"⋹",isindot:"⋵",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",itilde:"ĩ",iukcy:"і",iuml:"ï",jcirc:"ĵ",jcy:"й",jfr:"𝔧",jmath:"ȷ",jopf:"𝕛",jscr:"𝒿",jsercy:"ј",jukcy:"є",kappa:"κ",kappav:"ϰ",kcedil:"ķ",kcy:"к",kfr:"𝔨",kgreen:"ĸ",khcy:"х",kjcy:"ќ",kopf:"𝕜",kscr:"𝓀",lAarr:"⇚",lArr:"⇐",lAtail:"⤛",lBarr:"⤎",lE:"≦",lEg:"⪋",lHar:"⥢",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",lambda:"λ",lang:"⟨",langd:"⦑",langle:"⟨",lap:"⪅",laquo:"«",larr:"←",larrb:"⇤",larrbfs:"⤟",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",lat:"⪫",latail:"⤙",late:"⪭",lates:"⪭︀",lbarr:"⤌",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",lcaron:"ľ",lcedil:"ļ",lceil:"⌈",lcub:"{",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",leftarrow:"←",leftarrowtail:"↢",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",leftthreetimes:"⋋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",les:"⩽",lescc:"⪨",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",lessgtr:"≶",lesssim:"≲",lfisht:"⥼",lfloor:"⌊",lfr:"𝔩",lg:"≶",lgE:"⪑",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",ljcy:"љ",ll:"≪",llarr:"⇇",llcorner:"⌞",llhard:"⥫",lltri:"◺",lmidot:"ŀ",lmoust:"⎰",lmoustache:"⎰",lnE:"≨",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",longleftrightarrow:"⟷",longmapsto:"⟼",longrightarrow:"⟶",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",lstrok:"ł",lt:"<",ltcc:"⪦",ltcir:"⩹",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltrPar:"⦖",ltri:"◃",ltrie:"⊴",ltrif:"◂",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",mDDot:"∺",macr:"¯",male:"♂",malt:"✠",maltese:"✠",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",mcy:"м",mdash:"—",measuredangle:"∡",mfr:"𝔪",mho:"℧",micro:"µ",mid:"∣",midast:"*",midcir:"⫰",middot:"·",minus:"−",minusb:"⊟",minusd:"∸",minusdu:"⨪",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",mopf:"𝕞",mp:"∓",mscr:"𝓂",mstpos:"∾",mu:"μ",multimap:"⊸",mumap:"⊸",nGg:"⋙̸",nGt:"≫⃒",nGtv:"≫̸",nLeftarrow:"⇍",nLeftrightarrow:"⇎",nLl:"⋘̸",nLt:"≪⃒",nLtv:"≪̸",nRightarrow:"⇏",nVDash:"⊯",nVdash:"⊮",nabla:"∇",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natur:"♮",natural:"♮",naturals:"ℕ",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",ncaron:"ň",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",ncy:"н",ndash:"–",ne:"≠",neArr:"⇗",nearhk:"⤤",nearr:"↗",nearrow:"↗",nedot:"≐̸",nequiv:"≢",nesear:"⤨",nesim:"≂̸",nexist:"∄",nexists:"∄",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",ngsim:"≵",ngt:"≯",ngtr:"≯",nhArr:"⇎",nharr:"↮",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",njcy:"њ",nlArr:"⇍",nlE:"≦̸",nlarr:"↚",nldr:"‥",nle:"≰",nleftarrow:"↚",nleftrightarrow:"↮",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nlsim:"≴",nlt:"≮",nltri:"⋪",nltrie:"⋬",nmid:"∤",nopf:"𝕟",not:"¬",notin:"∉",notinE:"⋹̸",notindot:"⋵̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",npar:"∦",nparallel:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",npre:"⪯̸",nprec:"⊀",npreceq:"⪯̸",nrArr:"⇏",nrarr:"↛",nrarrc:"⤳̸",nrarrw:"↝̸",nrightarrow:"↛",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",nu:"ν",num:"#",numero:"№",numsp:" ",nvDash:"⊭",nvHarr:"⤄",nvap:"≍⃒",nvdash:"⊬",nvge:"≥⃒",nvgt:">⃒",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwArr:"⇖",nwarhk:"⤣",nwarr:"↖",nwarrow:"↖",nwnear:"⤧",oS:"Ⓢ",oacute:"ó",oast:"⊛",ocir:"⊚",ocirc:"ô",ocy:"о",odash:"⊝",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",oelig:"œ",ofcir:"⦿",ofr:"𝔬",ogon:"˛",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",omacr:"ō",omega:"ω",omicron:"ο",omid:"⦶",ominus:"⊖",oopf:"𝕠",opar:"⦷",operp:"⦹",oplus:"⊕",or:"∨",orarr:"↻",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oscr:"ℴ",oslash:"ø",osol:"⊘",otilde:"õ",otimes:"⊗",otimesas:"⨶",ouml:"ö",ovbar:"⌽",par:"∥",para:"¶",parallel:"∥",parsim:"⫳",parsl:"⫽",part:"∂",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",pfr:"𝔭",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plus:"+",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plusdo:"∔",plusdu:"⨥",pluse:"⩲",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",pointint:"⨕",popf:"𝕡",pound:"£",pr:"≺",prE:"⪳",prap:"⪷",prcue:"≼",pre:"⪯",prec:"≺",precapprox:"⪷",preccurlyeq:"≼",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",precsim:"≾",prime:"′",primes:"ℙ",prnE:"⪵",prnap:"⪹",prnsim:"⋨",prod:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",propto:"∝",prsim:"≾",prurel:"⊰",pscr:"𝓅",psi:"ψ",puncsp:" ",qfr:"𝔮",qint:"⨌",qopf:"𝕢",qprime:"⁗",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',rAarr:"⇛",rArr:"⇒",rAtail:"⤜",rBarr:"⤏",rHar:"⥤",race:"∽̱",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarr:"→",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",rarrtl:"↣",rarrw:"↝",ratail:"⤚",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",rcaron:"ř",rcedil:"ŗ",rceil:"⌉",rcub:"}",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",rect:"▭",reg:"®",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",rhard:"⇁",rharu:"⇀",rharul:"⥬",rho:"ρ",rhov:"ϱ",rightarrow:"→",rightarrowtail:"↣",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",rightthreetimes:"⋌",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoust:"⎱",rmoustache:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",roplus:"⨮",rotimes:"⨵",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",rsaquo:"›",rscr:"𝓇",rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",ruluhar:"⥨",rx:"℞",sacute:"ś",sbquo:"‚",sc:"≻",scE:"⪴",scap:"⪸",scaron:"š",sccue:"≽",sce:"⪰",scedil:"ş",scirc:"ŝ",scnE:"⪶",scnap:"⪺",scnsim:"⋩",scpolint:"⨓",scsim:"≿",scy:"с",sdot:"⋅",sdotb:"⊡",sdote:"⩦",seArr:"⇘",searhk:"⤥",searr:"↘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",sfr:"𝔰",sfrown:"⌢",sharp:"♯",shchcy:"щ",shcy:"ш",shortmid:"∣",shortparallel:"∥",shy:"­",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",softcy:"ь",sol:"/",solb:"⧄",solbar:"⌿",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",squ:"□",square:"□",squarf:"▪",squf:"▪",srarr:"→",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",subE:"⫅",subdot:"⪽",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",subseteq:"⊆",subseteqq:"⫅",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succ:"≻",succapprox:"⪸",succcurlyeq:"≽",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",supE:"⫆",supdot:"⪾",supdsub:"⫘",supe:"⊇",supedot:"⫄",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swArr:"⇙",swarhk:"⤦",swarr:"↙",swarrow:"↙",swnwar:"⤪",szlig:"ß",target:"⌖",tau:"τ",tbrk:"⎴",tcaron:"ť",tcedil:"ţ",tcy:"т",tdot:"⃛",telrec:"⌕",tfr:"𝔱",there4:"∴",therefore:"∴",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",thinsp:" ",thkap:"≈",thksim:"∼",thorn:"þ",tilde:"˜",times:"×",timesb:"⊠",timesbar:"⨱",timesd:"⨰",tint:"∭",toea:"⤨",top:"⊤",topbot:"⌶",topcir:"⫱",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",tscr:"𝓉",tscy:"ц",tshcy:"ћ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",uArr:"⇑",uHar:"⥣",uacute:"ú",uarr:"↑",ubrcy:"ў",ubreve:"ŭ",ucirc:"û",ucy:"у",udarr:"⇅",udblac:"ű",udhar:"⥮",ufisht:"⥾",ufr:"𝔲",ugrave:"ù",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",umacr:"ū",uml:"¨",uogon:"ų",uopf:"𝕦",uparrow:"↑",updownarrow:"↕",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",upsi:"υ",upsih:"ϒ",upsilon:"υ",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",uring:"ů",urtri:"◹",uscr:"𝓊",utdot:"⋰",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",uuml:"ü",uwangle:"⦧",vArr:"⇕",vBar:"⫨",vBarv:"⫩",vDash:"⊨",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vcy:"в",vdash:"⊢",vee:"∨",veebar:"⊻",veeeq:"≚",vellip:"⋮",verbar:"|",vert:"|",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",vopf:"𝕧",vprop:"∝",vrtri:"⊳",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",vzigzag:"⦚",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",wedgeq:"≙",weierp:"℘",wfr:"𝔴",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",xfr:"𝔵",xhArr:"⟺",xharr:"⟷",xi:"ξ",xlArr:"⟸",xlarr:"⟵",xmap:"⟼",xnis:"⋻",xodot:"⨀",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrArr:"⟹",xrarr:"⟶",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",yacute:"ý",yacy:"я",ycirc:"ŷ",ycy:"ы",yen:"¥",yfr:"𝔶",yicy:"ї",yopf:"𝕪",yscr:"𝓎",yucy:"ю",yuml:"ÿ",zacute:"ź",zcaron:"ž",zcy:"з",zdot:"ż",zeetrf:"ℨ",zeta:"ζ",zfr:"𝔷",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",zscr:"𝓏",zwj:"‍",zwnj:"‌"},oT={}.hasOwnProperty;function q1(e){return oT.call(Pg,e)?Pg[e]:!1}const zt=Wl(/[A-Za-z]/),Dt=Wl(/[\dA-Za-z]/),sT=Wl(/[#-'*+\--9=?A-Z^-~]/);function uc(e){return e!==null&&(e<32||e===127)}const i1=Wl(/\d/),cT=Wl(/[\dA-Fa-f]/),uT=Wl(/[!-/:-@[-`{-~]/);function fe(e){return e!==null&&e<-2}function Xe(e){return e!==null&&(e<0||e===32)}function Ae(e){return e===-2||e===-1||e===32}const Sc=Wl(new RegExp("\\p{P}|\\p{S}","u")),Ai=Wl(/\s/);function Wl(e){return n;function n(l){return l!==null&&l>-1&&e.test(String.fromCharCode(l))}}function Nn(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Nr(e){if(e===null||Xe(e)||Ai(e))return 1;if(Sc(e))return 2}const fT={};function Dc(e,n){let l=n||fT;return N3(e,typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,typeof l.includeHtml=="boolean"?l.includeHtml:!0)}function N3(e,n,l){if(dT(e)){if("value"in e)return e.type==="html"&&!l?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Fg(e.children,n,l)}return Array.isArray(e)?Fg(e,n,l):""}function Fg(e,n,l){let r=[],o=-1;for(;++o<e.length;)r[o]=N3(e[o],n,l);return r.join("")}function dT(e){return!!(e&&typeof e=="object")}function L3(e,n){let l=Number.parseInt(e,n);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)==65535||(l&65535)==65534||l>1114111?"�":String.fromCodePoint(l)}const hT=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function pT(e){return e.replace(hT,gT)}function gT(e,n,l){if(n)return n;if(l.charCodeAt(0)===35){let r=l.charCodeAt(1),o=r===120||r===88;return L3(l.slice(o?2:1),o?16:10)}return q1(l)||e}function an(e,n,l,r){let o=e.length,s=0,u;if(n=n<0?-n>o?0:o+n:n>o?o:n,l=l>0?l:0,r.length<1e4)u=Array.from(r),u.unshift(n,l),e.splice(...u);else for(l&&e.splice(n,l);s<r.length;)u=r.slice(s,s+1e4),u.unshift(n,0),e.splice(...u),s+=1e4,n+=1e4}function Tn(e,n){return e.length>0?(an(e,e.length,0,n),e):n}const Ig={}.hasOwnProperty;function R3(e){let n={},l=-1;for(;++l<e.length;)yT(n,e[l]);return n}function yT(e,n){let l;for(l in n){let r=(Ig.call(e,l)?e[l]:void 0)||(e[l]={}),o=n[l],s;if(o)for(s in o){Ig.call(r,s)||(r[s]=[]);let u=o[s];mT(r[s],Array.isArray(u)?u:u?[u]:[])}}}function mT(e,n){let l=-1,r=[];for(;++l<n.length;)(n[l].add==="after"?e:r).push(n[l]);an(e,0,0,r)}function Gr(e){let n=[],l=-1,r=0,o=0;for(;++l<e.length;){let s=e.charCodeAt(l),u="";if(s===37&&Dt(e.charCodeAt(l+1))&&Dt(e.charCodeAt(l+2)))o=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(u=String.fromCharCode(s));else if(s>55295&&s<57344){let f=e.charCodeAt(l+1);s<56320&&f>56319&&f<57344?(u=String.fromCharCode(s,f),o=1):u="�"}else u=String.fromCharCode(s);u&&=(n.push(e.slice(r,l),encodeURIComponent(u)),r=l+o+1,""),o&&=(l+=o,0)}return n.join("")+e.slice(r)}function _c(e,n,l){let r=[],o=-1;for(;++o<e.length;){let s=e[o].resolveAll;s&&!r.includes(s)&&(n=s(n,l),r.push(s))}return n}const r1={name:"attention",resolveAll:TT,tokenize:bT};function TT(e,n){let l=-1,r,o,s,u,f,d,h,y;for(;++l<e.length;)if(e[l][0]==="enter"&&e[l][1].type==="attentionSequence"&&e[l][1]._close){for(r=l;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[l][1]).charCodeAt(0)){if((e[r][1]._close||e[l][1]._open)&&(e[l][1].end.offset-e[l][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[l][1].end.offset-e[l][1].start.offset)%3))continue;d=e[r][1].end.offset-e[r][1].start.offset>1&&e[l][1].end.offset-e[l][1].start.offset>1?2:1;let m={...e[r][1].end},b={...e[l][1].start};Mg(m,-d),Mg(b,d),u={type:d>1?"strongSequence":"emphasisSequence",start:m,end:{...e[r][1].end}},f={type:d>1?"strongSequence":"emphasisSequence",start:{...e[l][1].start},end:b},s={type:d>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[l][1].start}},o={type:d>1?"strong":"emphasis",start:{...u.start},end:{...f.end}},e[r][1].end={...u.start},e[l][1].start={...f.end},h=[],e[r][1].end.offset-e[r][1].start.offset&&(h=Tn(h,[["enter",e[r][1],n],["exit",e[r][1],n]])),h=Tn(h,[["enter",o,n],["enter",u,n],["exit",u,n],["enter",s,n]]),h=Tn(h,_c(n.parser.constructs.insideSpan.null,e.slice(r+1,l),n)),h=Tn(h,[["exit",s,n],["enter",f,n],["exit",f,n],["exit",o,n]]),e[l][1].end.offset-e[l][1].start.offset?(y=2,h=Tn(h,[["enter",e[l][1],n],["exit",e[l][1],n]])):y=0,an(e,r-1,l-r+3,h),l=r+h.length-y-2;break}}for(l=-1;++l<e.length;)e[l][1].type==="attentionSequence"&&(e[l][1].type="data");return e}function bT(e,n){let l=this.parser.constructs.attentionMarkers.null,r=this.previous,o=Nr(r),s;return u;function u(d){return s=d,e.enter("attentionSequence"),f(d)}function f(d){if(d===s)return e.consume(d),f;let h=e.exit("attentionSequence"),y=Nr(d),m=!y||y===2&&o||l.includes(d),b=!o||o===2&&y||l.includes(r);return h._open=!!(s===42?m:m&&(o||!b)),h._close=!!(s===42?b:b&&(y||!m)),n(d)}}function Mg(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const vT={name:"autolink",tokenize:kT};function kT(e,n,l){let r=0;return o;function o(v){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),s}function s(v){return zt(v)?(e.consume(v),u):v===64?l(v):h(v)}function u(v){return v===43||v===45||v===46||Dt(v)?(r=1,f(v)):h(v)}function f(v){return v===58?(e.consume(v),r=0,d):(v===43||v===45||v===46||Dt(v))&&r++<32?(e.consume(v),f):(r=0,h(v))}function d(v){return v===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):v===null||v===32||v===60||uc(v)?l(v):(e.consume(v),d)}function h(v){return v===64?(e.consume(v),y):sT(v)?(e.consume(v),h):l(v)}function y(v){return Dt(v)?m(v):l(v)}function m(v){return v===46?(e.consume(v),r=0,y):v===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):b(v)}function b(v){if((v===45||Dt(v))&&r++<63){let B=v===45?b:m;return e.consume(v),B}return l(v)}}function Le(e,n,l,r){let o=r?r-1:1/0,s=0;return u;function u(d){return Ae(d)?(e.enter(l),f(d)):n(d)}function f(d){return Ae(d)&&s++<o?(e.consume(d),f):(e.exit(l),n(d))}}const fo={partial:!0,tokenize:xT};function xT(e,n,l){return r;function r(s){return Ae(s)?Le(e,o,"linePrefix")(s):o(s)}function o(s){return s===null||fe(s)?n(s):l(s)}}const z3={continuation:{tokenize:wT},exit:ET,name:"blockQuote",tokenize:BT};function BT(e,n,l){let r=this;return o;function o(u){if(u===62){let f=r.containerState;return f.open||=(e.enter("blockQuote",{_container:!0}),!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(u),e.exit("blockQuoteMarker"),s}return l(u)}function s(u){return Ae(u)?(e.enter("blockQuotePrefixWhitespace"),e.consume(u),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(u))}}function wT(e,n,l){let r=this;return o;function o(u){return Ae(u)?Le(e,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(u):s(u)}function s(u){return e.attempt(z3,n,l)(u)}}function ET(e){e.exit("blockQuote")}const P3={name:"characterEscape",tokenize:CT};function CT(e,n,l){return r;function r(s){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(s),e.exit("escapeMarker"),o}function o(s){return uT(s)?(e.enter("characterEscapeValue"),e.consume(s),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):l(s)}}const F3={name:"characterReference",tokenize:AT};function AT(e,n,l){let r=this,o=0,s,u;return f;function f(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),d}function d(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),h):(e.enter("characterReferenceValue"),s=31,u=Dt,y(m))}function h(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),s=6,u=cT,y):(e.enter("characterReferenceValue"),s=7,u=i1,y(m))}function y(m){if(m===59&&o){let b=e.exit("characterReferenceValue");return u===Dt&&!q1(r.sliceSerialize(b))?l(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return u(m)&&o++<s?(e.consume(m),y):l(m)}}const Gg={partial:!0,tokenize:DT},qg={concrete:!0,name:"codeFenced",tokenize:ST};function ST(e,n,l){let r=this,o={partial:!0,tokenize:ne},s=0,u=0,f;return d;function d(M){return h(M)}function h(M){let K=r.events[r.events.length-1];return s=K&&K[1].type==="linePrefix"?K[2].sliceSerialize(K[1],!0).length:0,f=M,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),y(M)}function y(M){return M===f?(u++,e.consume(M),y):u<3?l(M):(e.exit("codeFencedFenceSequence"),Ae(M)?Le(e,m,"whitespace")(M):m(M))}function m(M){return M===null||fe(M)?(e.exit("codeFencedFence"),r.interrupt?n(M):e.check(Gg,R,te)(M)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),b(M))}function b(M){return M===null||fe(M)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(M)):Ae(M)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Le(e,v,"whitespace")(M)):M===96&&M===f?l(M):(e.consume(M),b)}function v(M){return M===null||fe(M)?m(M):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),B(M))}function B(M){return M===null||fe(M)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(M)):M===96&&M===f?l(M):(e.consume(M),B)}function R(M){return e.attempt(o,te,z)(M)}function z(M){return e.enter("lineEnding"),e.consume(M),e.exit("lineEnding"),C}function C(M){return s>0&&Ae(M)?Le(e,X,"linePrefix",s+1)(M):X(M)}function X(M){return M===null||fe(M)?e.check(Gg,R,te)(M):(e.enter("codeFlowValue"),q(M))}function q(M){return M===null||fe(M)?(e.exit("codeFlowValue"),X(M)):(e.consume(M),q)}function te(M){return e.exit("codeFenced"),n(M)}function ne(M,K,I){let W=0;return _;function _(ue){return M.enter("lineEnding"),M.consume(ue),M.exit("lineEnding"),Z}function Z(ue){return M.enter("codeFencedFence"),Ae(ue)?Le(M,V,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ue):V(ue)}function V(ue){return ue===f?(M.enter("codeFencedFenceSequence"),le(ue)):I(ue)}function le(ue){return ue===f?(W++,M.consume(ue),le):W>=u?(M.exit("codeFencedFenceSequence"),Ae(ue)?Le(M,pe,"whitespace")(ue):pe(ue)):I(ue)}function pe(ue){return ue===null||fe(ue)?(M.exit("codeFencedFence"),K(ue)):I(ue)}}}function DT(e,n,l){let r=this;return o;function o(u){return u===null?l(u):(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),s)}function s(u){return r.parser.lazy[r.now().line]?l(u):n(u)}}const kd={name:"codeIndented",tokenize:OT},_T={partial:!0,tokenize:NT};function OT(e,n,l){let r=this;return o;function o(h){return e.enter("codeIndented"),Le(e,s,"linePrefix",5)(h)}function s(h){let y=r.events[r.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?u(h):l(h)}function u(h){return h===null?d(h):fe(h)?e.attempt(_T,u,d)(h):(e.enter("codeFlowValue"),f(h))}function f(h){return h===null||fe(h)?(e.exit("codeFlowValue"),u(h)):(e.consume(h),f)}function d(h){return e.exit("codeIndented"),n(h)}}function NT(e,n,l){let r=this;return o;function o(u){return r.parser.lazy[r.now().line]?l(u):fe(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),o):Le(e,s,"linePrefix",5)(u)}function s(u){let f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?n(u):fe(u)?o(u):l(u)}}const LT={name:"codeText",previous:zT,resolve:RT,tokenize:PT};function RT(e){let n=e.length-4,l=3,r,o;if((e[l][1].type==="lineEnding"||e[l][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=l;++r<n;)if(e[r][1].type==="codeTextData"){e[l][1].type="codeTextPadding",e[n][1].type="codeTextPadding",l+=2,n-=2;break}}for(r=l-1,n++;++r<=n;)o===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(o=r):(r===n||e[r][1].type==="lineEnding")&&(e[o][1].type="codeTextData",r!==o+2&&(e[o][1].end=e[r-1][1].end,e.splice(o+2,r-o-2),n-=r-o-2,r=o+2),o=void 0);return e}function zT(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function PT(e,n,l){let r=0,o,s;return u;function u(m){return e.enter("codeText"),e.enter("codeTextSequence"),f(m)}function f(m){return m===96?(e.consume(m),r++,f):(e.exit("codeTextSequence"),d(m))}function d(m){return m===null?l(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),d):m===96?(s=e.enter("codeTextSequence"),o=0,y(m)):fe(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),d):(e.enter("codeTextData"),h(m))}function h(m){return m===null||m===32||m===96||fe(m)?(e.exit("codeTextData"),d(m)):(e.consume(m),h)}function y(m){return m===96?(e.consume(m),o++,y):o===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(m)):(s.type="codeTextData",h(m))}}var FT=class{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,l){let r=l??1/0;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,l,r){let o=l||0;this.setCursor(Math.trunc(n));let s=this.right.splice(this.right.length-o,1/0);return r&&Ga(this.left,r),s.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(n){this.setCursor(1/0),this.left.push(n)}pushMany(n){this.setCursor(1/0),Ga(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Ga(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){let l=this.left.splice(n,1/0);Ga(this.right,l.reverse())}else{let l=this.right.splice(this.left.length+this.right.length-n,1/0);Ga(this.left,l.reverse())}}};function Ga(e,n){let l=0;if(n.length<1e4)e.push(...n);else for(;l<n.length;)e.push(...n.slice(l,l+1e4)),l+=1e4}function I3(e){let n={},l=-1,r,o,s,u,f,d,h,y=new FT(e);for(;++l<y.length;){for(;l in n;)l=n[l];if(r=y.get(l),l&&r[1].type==="chunkFlow"&&y.get(l-1)[1].type==="listItemPrefix"&&(d=r[1]._tokenizer.events,s=0,s<d.length&&d[s][1].type==="lineEndingBlank"&&(s+=2),s<d.length&&d[s][1].type==="content"))for(;++s<d.length&&d[s][1].type!=="content";)d[s][1].type==="chunkText"&&(d[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,IT(y,l)),l=n[l],h=!0);else if(r[1]._container){for(s=l,o=void 0;s--;)if(u=y.get(s),u[1].type==="lineEnding"||u[1].type==="lineEndingBlank")u[0]==="enter"&&(o&&(y.get(o)[1].type="lineEndingBlank"),u[1].type="lineEnding",o=s);else if(!(u[1].type==="linePrefix"||u[1].type==="listItemIndent"))break;o&&(r[1].end={...y.get(o)[1].start},f=y.slice(o,l),f.unshift(r),y.splice(o,l-o+1,f))}}return an(e,0,1/0,y.slice(0)),!h}function IT(e,n){let l=e.get(n)[1],r=e.get(n)[2],o=n-1,s=[],u=l._tokenizer;u||(u=r.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(u._contentTypeTextTrailing=!0));let f=u.events,d=[],h={},y,m,b=-1,v=l,B=0,R=0,z=[R];for(;v;){for(;e.get(++o)[1]!==v;);s.push(o),v._tokenizer||(y=r.sliceStream(v),v.next||y.push(null),m&&u.defineSkip(v.start),v._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),u.write(y),v._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),m=v,v=v.next}for(v=l;++b<f.length;)f[b][0]==="exit"&&f[b-1][0]==="enter"&&f[b][1].type===f[b-1][1].type&&f[b][1].start.line!==f[b][1].end.line&&(R=b+1,z.push(R),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(u.events=[],v?(v._tokenizer=void 0,v.previous=void 0):z.pop(),b=z.length;b--;){let C=f.slice(z[b],z[b+1]),X=s.pop();d.push([X,X+C.length-1]),e.splice(X,2,C)}for(d.reverse(),b=-1;++b<d.length;)h[B+d[b][0]]=B+d[b][1],B+=d[b][1]-d[b][0]-1;return h}const MT={resolve:qT,tokenize:$T},GT={partial:!0,tokenize:jT};function qT(e){return I3(e),e}function $T(e,n){let l;return r;function r(f){return e.enter("content"),l=e.enter("chunkContent",{contentType:"content"}),o(f)}function o(f){return f===null?s(f):fe(f)?e.check(GT,u,s)(f):(e.consume(f),o)}function s(f){return e.exit("chunkContent"),e.exit("content"),n(f)}function u(f){return e.consume(f),e.exit("chunkContent"),l.next=e.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,o}}function jT(e,n,l){let r=this;return o;function o(u){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),Le(e,s,"linePrefix")}function s(u){if(u===null||fe(u))return l(u);let f=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?n(u):e.interrupt(r.parser.constructs.flow,l,n)(u)}}function M3(e,n,l,r,o,s,u,f,d){let h=d||1/0,y=0;return m;function m(C){return C===60?(e.enter(r),e.enter(o),e.enter(s),e.consume(C),e.exit(s),b):C===null||C===32||C===41||uc(C)?l(C):(e.enter(r),e.enter(u),e.enter(f),e.enter("chunkString",{contentType:"string"}),R(C))}function b(C){return C===62?(e.enter(s),e.consume(C),e.exit(s),e.exit(o),e.exit(r),n):(e.enter(f),e.enter("chunkString",{contentType:"string"}),v(C))}function v(C){return C===62?(e.exit("chunkString"),e.exit(f),b(C)):C===null||C===60||fe(C)?l(C):(e.consume(C),C===92?B:v)}function B(C){return C===60||C===62||C===92?(e.consume(C),v):v(C)}function R(C){return!y&&(C===null||C===41||Xe(C))?(e.exit("chunkString"),e.exit(f),e.exit(u),e.exit(r),n(C)):y<h&&C===40?(e.consume(C),y++,R):C===41?(e.consume(C),y--,R):C===null||C===32||C===40||uc(C)?l(C):(e.consume(C),C===92?z:R)}function z(C){return C===40||C===41||C===92?(e.consume(C),R):R(C)}}function G3(e,n,l,r,o,s){let u=this,f=0,d;return h;function h(v){return e.enter(r),e.enter(o),e.consume(v),e.exit(o),e.enter(s),y}function y(v){return f>999||v===null||v===91||v===93&&!d||v===94&&!f&&"_hiddenFootnoteSupport"in u.parser.constructs?l(v):v===93?(e.exit(s),e.enter(o),e.consume(v),e.exit(o),e.exit(r),n):fe(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),y):(e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===null||v===91||v===93||fe(v)||f++>999?(e.exit("chunkString"),y(v)):(e.consume(v),d||=!Ae(v),v===92?b:m)}function b(v){return v===91||v===92||v===93?(e.consume(v),f++,m):m(v)}}function q3(e,n,l,r,o,s){let u;return f;function f(b){return b===34||b===39||b===40?(e.enter(r),e.enter(o),e.consume(b),e.exit(o),u=b===40?41:b,d):l(b)}function d(b){return b===u?(e.enter(o),e.consume(b),e.exit(o),e.exit(r),n):(e.enter(s),h(b))}function h(b){return b===u?(e.exit(s),d(u)):b===null?l(b):fe(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),Le(e,h,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===u||b===null||fe(b)?(e.exit("chunkString"),h(b)):(e.consume(b),b===92?m:y)}function m(b){return b===u||b===92?(e.consume(b),y):y(b)}}function Va(e,n){let l;return r;function r(o){return fe(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),l=!0,r):Ae(o)?Le(e,r,l?"linePrefix":"lineSuffix")(o):n(o)}}const UT={name:"definition",tokenize:HT},ZT={partial:!0,tokenize:KT};function HT(e,n,l){let r=this,o;return s;function s(v){return e.enter("definition"),u(v)}function u(v){return G3.call(r,e,f,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function f(v){return o=Nn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),d):l(v)}function d(v){return Xe(v)?Va(e,h)(v):h(v)}function h(v){return M3(e,y,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function y(v){return e.attempt(ZT,m,m)(v)}function m(v){return Ae(v)?Le(e,b,"whitespace")(v):b(v)}function b(v){return v===null||fe(v)?(e.exit("definition"),r.parser.defined.push(o),n(v)):l(v)}}function KT(e,n,l){return r;function r(f){return Xe(f)?Va(e,o)(f):l(f)}function o(f){return q3(e,s,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(f)}function s(f){return Ae(f)?Le(e,u,"whitespace")(f):u(f)}function u(f){return f===null||fe(f)?n(f):l(f)}}const VT={name:"hardBreakEscape",tokenize:XT};function XT(e,n,l){return r;function r(s){return e.enter("hardBreakEscape"),e.consume(s),o}function o(s){return fe(s)?(e.exit("hardBreakEscape"),n(s)):l(s)}}const YT={name:"headingAtx",resolve:QT,tokenize:WT};function QT(e,n){let l=e.length-2,r=3,o,s;return e[r][1].type==="whitespace"&&(r+=2),l-2>r&&e[l][1].type==="whitespace"&&(l-=2),e[l][1].type==="atxHeadingSequence"&&(r===l-1||l-4>r&&e[l-2][1].type==="whitespace")&&(l-=r+1===l?2:4),l>r&&(o={type:"atxHeadingText",start:e[r][1].start,end:e[l][1].end},s={type:"chunkText",start:e[r][1].start,end:e[l][1].end,contentType:"text"},an(e,r,l-r+1,[["enter",o,n],["enter",s,n],["exit",s,n],["exit",o,n]])),e}function WT(e,n,l){let r=0;return o;function o(y){return e.enter("atxHeading"),s(y)}function s(y){return e.enter("atxHeadingSequence"),u(y)}function u(y){return y===35&&r++<6?(e.consume(y),u):y===null||Xe(y)?(e.exit("atxHeadingSequence"),f(y)):l(y)}function f(y){return y===35?(e.enter("atxHeadingSequence"),d(y)):y===null||fe(y)?(e.exit("atxHeading"),n(y)):Ae(y)?Le(e,f,"whitespace")(y):(e.enter("atxHeadingText"),h(y))}function d(y){return y===35?(e.consume(y),d):(e.exit("atxHeadingSequence"),f(y))}function h(y){return y===null||y===35||Xe(y)?(e.exit("atxHeadingText"),f(y)):(e.consume(y),h)}}const JT="address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."),$g=["pre","script","style","textarea"],eb={concrete:!0,name:"htmlFlow",resolveTo:lb,tokenize:ib},tb={partial:!0,tokenize:ab},nb={partial:!0,tokenize:rb};function lb(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function ib(e,n,l){let r=this,o,s,u,f,d;return h;function h(x){return y(x)}function y(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),m}function m(x){return x===33?(e.consume(x),b):x===47?(e.consume(x),s=!0,R):x===63?(e.consume(x),o=3,r.interrupt?n:w):zt(x)?(e.consume(x),u=String.fromCharCode(x),z):l(x)}function b(x){return x===45?(e.consume(x),o=2,v):x===91?(e.consume(x),o=5,f=0,B):zt(x)?(e.consume(x),o=4,r.interrupt?n:w):l(x)}function v(x){return x===45?(e.consume(x),r.interrupt?n:w):l(x)}function B(x){return x==="CDATA[".charCodeAt(f++)?(e.consume(x),f===6?r.interrupt?n:V:B):l(x)}function R(x){return zt(x)?(e.consume(x),u=String.fromCharCode(x),z):l(x)}function z(x){if(x===null||x===47||x===62||Xe(x)){let ie=x===47,he=u.toLowerCase();return!ie&&!s&&$g.includes(he)?(o=1,r.interrupt?n(x):V(x)):JT.includes(u.toLowerCase())?(o=6,ie?(e.consume(x),C):r.interrupt?n(x):V(x)):(o=7,r.interrupt&&!r.parser.lazy[r.now().line]?l(x):s?X(x):q(x))}return x===45||Dt(x)?(e.consume(x),u+=String.fromCharCode(x),z):l(x)}function C(x){return x===62?(e.consume(x),r.interrupt?n:V):l(x)}function X(x){return Ae(x)?(e.consume(x),X):_(x)}function q(x){return x===47?(e.consume(x),_):x===58||x===95||zt(x)?(e.consume(x),te):Ae(x)?(e.consume(x),q):_(x)}function te(x){return x===45||x===46||x===58||x===95||Dt(x)?(e.consume(x),te):ne(x)}function ne(x){return x===61?(e.consume(x),M):Ae(x)?(e.consume(x),ne):q(x)}function M(x){return x===null||x===60||x===61||x===62||x===96?l(x):x===34||x===39?(e.consume(x),d=x,K):Ae(x)?(e.consume(x),M):I(x)}function K(x){return x===d?(e.consume(x),d=null,W):x===null||fe(x)?l(x):(e.consume(x),K)}function I(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||Xe(x)?ne(x):(e.consume(x),I)}function W(x){return x===47||x===62||Ae(x)?q(x):l(x)}function _(x){return x===62?(e.consume(x),Z):l(x)}function Z(x){return x===null||fe(x)?V(x):Ae(x)?(e.consume(x),Z):l(x)}function V(x){return x===45&&o===2?(e.consume(x),P):x===60&&o===1?(e.consume(x),Y):x===62&&o===4?(e.consume(x),A):x===63&&o===3?(e.consume(x),w):x===93&&o===5?(e.consume(x),Te):fe(x)&&(o===6||o===7)?(e.exit("htmlFlowData"),e.check(tb,$,le)(x)):x===null||fe(x)?(e.exit("htmlFlowData"),le(x)):(e.consume(x),V)}function le(x){return e.check(nb,pe,$)(x)}function pe(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),ue}function ue(x){return x===null||fe(x)?le(x):(e.enter("htmlFlowData"),V(x))}function P(x){return x===45?(e.consume(x),w):V(x)}function Y(x){return x===47?(e.consume(x),u="",ae):V(x)}function ae(x){if(x===62){let ie=u.toLowerCase();return $g.includes(ie)?(e.consume(x),A):V(x)}return zt(x)&&u.length<8?(e.consume(x),u+=String.fromCharCode(x),ae):V(x)}function Te(x){return x===93?(e.consume(x),w):V(x)}function w(x){return x===62?(e.consume(x),A):x===45&&o===2?(e.consume(x),w):V(x)}function A(x){return x===null||fe(x)?(e.exit("htmlFlowData"),$(x)):(e.consume(x),A)}function $(x){return e.exit("htmlFlow"),n(x)}}function rb(e,n,l){let r=this;return o;function o(u){return fe(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),s):l(u)}function s(u){return r.parser.lazy[r.now().line]?l(u):n(u)}}function ab(e,n,l){return r;function r(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),e.attempt(fo,n,l)}}const ob={name:"htmlText",tokenize:sb};function sb(e,n,l){let r=this,o,s,u;return f;function f(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),d}function d(w){return w===33?(e.consume(w),h):w===47?(e.consume(w),ne):w===63?(e.consume(w),q):zt(w)?(e.consume(w),I):l(w)}function h(w){return w===45?(e.consume(w),y):w===91?(e.consume(w),s=0,B):zt(w)?(e.consume(w),X):l(w)}function y(w){return w===45?(e.consume(w),v):l(w)}function m(w){return w===null?l(w):w===45?(e.consume(w),b):fe(w)?(u=m,Y(w)):(e.consume(w),m)}function b(w){return w===45?(e.consume(w),v):m(w)}function v(w){return w===62?P(w):w===45?b(w):m(w)}function B(w){return w==="CDATA[".charCodeAt(s++)?(e.consume(w),s===6?R:B):l(w)}function R(w){return w===null?l(w):w===93?(e.consume(w),z):fe(w)?(u=R,Y(w)):(e.consume(w),R)}function z(w){return w===93?(e.consume(w),C):R(w)}function C(w){return w===62?P(w):w===93?(e.consume(w),C):R(w)}function X(w){return w===null||w===62?P(w):fe(w)?(u=X,Y(w)):(e.consume(w),X)}function q(w){return w===null?l(w):w===63?(e.consume(w),te):fe(w)?(u=q,Y(w)):(e.consume(w),q)}function te(w){return w===62?P(w):q(w)}function ne(w){return zt(w)?(e.consume(w),M):l(w)}function M(w){return w===45||Dt(w)?(e.consume(w),M):K(w)}function K(w){return fe(w)?(u=K,Y(w)):Ae(w)?(e.consume(w),K):P(w)}function I(w){return w===45||Dt(w)?(e.consume(w),I):w===47||w===62||Xe(w)?W(w):l(w)}function W(w){return w===47?(e.consume(w),P):w===58||w===95||zt(w)?(e.consume(w),_):fe(w)?(u=W,Y(w)):Ae(w)?(e.consume(w),W):P(w)}function _(w){return w===45||w===46||w===58||w===95||Dt(w)?(e.consume(w),_):Z(w)}function Z(w){return w===61?(e.consume(w),V):fe(w)?(u=Z,Y(w)):Ae(w)?(e.consume(w),Z):W(w)}function V(w){return w===null||w===60||w===61||w===62||w===96?l(w):w===34||w===39?(e.consume(w),o=w,le):fe(w)?(u=V,Y(w)):Ae(w)?(e.consume(w),V):(e.consume(w),pe)}function le(w){return w===o?(e.consume(w),o=void 0,ue):w===null?l(w):fe(w)?(u=le,Y(w)):(e.consume(w),le)}function pe(w){return w===null||w===34||w===39||w===60||w===61||w===96?l(w):w===47||w===62||Xe(w)?W(w):(e.consume(w),pe)}function ue(w){return w===47||w===62||Xe(w)?W(w):l(w)}function P(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),n):l(w)}function Y(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),ae}function ae(w){return Ae(w)?Le(e,Te,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):Te(w)}function Te(w){return e.enter("htmlTextData"),u(w)}}const $1={name:"labelEnd",resolveAll:db,resolveTo:hb,tokenize:pb},cb={tokenize:gb},ub={tokenize:yb},fb={tokenize:mb};function db(e){let n=-1,l=[];for(;++n<e.length;){let r=e[n][1];if(l.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){let o=r.type==="labelImage"?4:2;r.type="data",n+=o}}return e.length!==l.length&&an(e,0,e.length,l),e}function hb(e,n){let l=e.length,r=0,o,s,u,f;for(;l--;)if(o=e[l][1],s){if(o.type==="link"||o.type==="labelLink"&&o._inactive)break;e[l][0]==="enter"&&o.type==="labelLink"&&(o._inactive=!0)}else if(u){if(e[l][0]==="enter"&&(o.type==="labelImage"||o.type==="labelLink")&&!o._balanced&&(s=l,o.type!=="labelLink")){r=2;break}}else o.type==="labelEnd"&&(u=l);let d={type:e[s][1].type==="labelLink"?"link":"image",start:{...e[s][1].start},end:{...e[e.length-1][1].end}},h={type:"label",start:{...e[s][1].start},end:{...e[u][1].end}},y={type:"labelText",start:{...e[s+r+2][1].end},end:{...e[u-2][1].start}};return f=[["enter",d,n],["enter",h,n]],f=Tn(f,e.slice(s+1,s+r+3)),f=Tn(f,[["enter",y,n]]),f=Tn(f,_c(n.parser.constructs.insideSpan.null,e.slice(s+r+4,u-3),n)),f=Tn(f,[["exit",y,n],e[u-2],e[u-1],["exit",h,n]]),f=Tn(f,e.slice(u+1)),f=Tn(f,[["exit",d,n]]),an(e,s,e.length,f),e}function pb(e,n,l){let r=this,o=r.events.length,s,u;for(;o--;)if((r.events[o][1].type==="labelImage"||r.events[o][1].type==="labelLink")&&!r.events[o][1]._balanced){s=r.events[o][1];break}return f;function f(b){return s?s._inactive?m(b):(u=r.parser.defined.includes(Nn(r.sliceSerialize({start:s.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(b),e.exit("labelMarker"),e.exit("labelEnd"),d):l(b)}function d(b){return b===40?e.attempt(cb,y,u?y:m)(b):b===91?e.attempt(ub,y,u?h:m)(b):u?y(b):m(b)}function h(b){return e.attempt(fb,y,m)(b)}function y(b){return n(b)}function m(b){return s._balanced=!0,l(b)}}function gb(e,n,l){return r;function r(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),o}function o(m){return Xe(m)?Va(e,s)(m):s(m)}function s(m){return m===41?y(m):M3(e,u,f,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function u(m){return Xe(m)?Va(e,d)(m):y(m)}function f(m){return l(m)}function d(m){return m===34||m===39||m===40?q3(e,h,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):y(m)}function h(m){return Xe(m)?Va(e,y)(m):y(m)}function y(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),n):l(m)}}function yb(e,n,l){let r=this;return o;function o(f){return G3.call(r,e,s,u,"reference","referenceMarker","referenceString")(f)}function s(f){return r.parser.defined.includes(Nn(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(f):l(f)}function u(f){return l(f)}}function mb(e,n,l){return r;function r(s){return e.enter("reference"),e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),o}function o(s){return s===93?(e.enter("referenceMarker"),e.consume(s),e.exit("referenceMarker"),e.exit("reference"),n):l(s)}}const Tb={name:"labelStartImage",resolveAll:$1.resolveAll,tokenize:bb};function bb(e,n,l){let r=this;return o;function o(f){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(f),e.exit("labelImageMarker"),s}function s(f){return f===91?(e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelImage"),u):l(f)}function u(f){return f===94&&"_hiddenFootnoteSupport"in r.parser.constructs?l(f):n(f)}}const vb={name:"labelStartLink",resolveAll:$1.resolveAll,tokenize:kb};function kb(e,n,l){let r=this;return o;function o(u){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(u),e.exit("labelMarker"),e.exit("labelLink"),s}function s(u){return u===94&&"_hiddenFootnoteSupport"in r.parser.constructs?l(u):n(u)}}const xd={name:"lineEnding",tokenize:xb};function xb(e,n){return l;function l(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Le(e,n,"linePrefix")}}const Xs={name:"thematicBreak",tokenize:Bb};function Bb(e,n,l){let r=0,o;return s;function s(h){return e.enter("thematicBreak"),u(h)}function u(h){return o=h,f(h)}function f(h){return h===o?(e.enter("thematicBreakSequence"),d(h)):r>=3&&(h===null||fe(h))?(e.exit("thematicBreak"),n(h)):l(h)}function d(h){return h===o?(e.consume(h),r++,d):(e.exit("thematicBreakSequence"),Ae(h)?Le(e,f,"whitespace")(h):f(h))}}const Zt={continuation:{tokenize:Ab},exit:Db,name:"list",tokenize:Cb},wb={partial:!0,tokenize:_b},Eb={partial:!0,tokenize:Sb};function Cb(e,n,l){let r=this,o=r.events[r.events.length-1],s=o&&o[1].type==="linePrefix"?o[2].sliceSerialize(o[1],!0).length:0,u=0;return f;function f(v){let B=r.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(B==="listUnordered"?!r.containerState.marker||v===r.containerState.marker:i1(v)){if(r.containerState.type||(r.containerState.type=B,e.enter(B,{_container:!0})),B==="listUnordered")return e.enter("listItemPrefix"),v===42||v===45?e.check(Xs,l,h)(v):h(v);if(!r.interrupt||v===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),d(v)}return l(v)}function d(v){return i1(v)&&++u<10?(e.consume(v),d):(!r.interrupt||u<2)&&(r.containerState.marker?v===r.containerState.marker:v===41||v===46)?(e.exit("listItemValue"),h(v)):l(v)}function h(v){return e.enter("listItemMarker"),e.consume(v),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||v,e.check(fo,r.interrupt?l:y,e.attempt(wb,b,m))}function y(v){return r.containerState.initialBlankLine=!0,s++,b(v)}function m(v){return Ae(v)?(e.enter("listItemPrefixWhitespace"),e.consume(v),e.exit("listItemPrefixWhitespace"),b):l(v)}function b(v){return r.containerState.size=s+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(v)}}function Ab(e,n,l){let r=this;return r.containerState._closeFlow=void 0,e.check(fo,o,s);function o(f){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Le(e,n,"listItemIndent",r.containerState.size+1)(f)}function s(f){return r.containerState.furtherBlankLines||!Ae(f)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,u(f)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Eb,n,u)(f))}function u(f){return r.containerState._closeFlow=!0,r.interrupt=void 0,Le(e,e.attempt(Zt,n,l),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f)}}function Sb(e,n,l){let r=this;return Le(e,o,"listItemIndent",r.containerState.size+1);function o(s){let u=r.events[r.events.length-1];return u&&u[1].type==="listItemIndent"&&u[2].sliceSerialize(u[1],!0).length===r.containerState.size?n(s):l(s)}}function Db(e){e.exit(this.containerState.type)}function _b(e,n,l){let r=this;return Le(e,o,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function o(s){let u=r.events[r.events.length-1];return!Ae(s)&&u&&u[1].type==="listItemPrefixWhitespace"?n(s):l(s)}}const jg={name:"setextUnderline",resolveTo:Ob,tokenize:Nb};function Ob(e,n){let l=e.length,r,o,s;for(;l--;)if(e[l][0]==="enter"){if(e[l][1].type==="content"){r=l;break}e[l][1].type==="paragraph"&&(o=l)}else e[l][1].type==="content"&&e.splice(l,1),!s&&e[l][1].type==="definition"&&(s=l);let u={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[o][1].type="setextHeadingText",s?(e.splice(o,0,["enter",u,n]),e.splice(s+1,0,["exit",e[r][1],n]),e[r][1].end={...e[s][1].end}):e[r][1]=u,e.push(["exit",u,n]),e}function Nb(e,n,l){let r=this,o;return s;function s(h){let y=r.events.length,m;for(;y--;)if(r.events[y][1].type!=="lineEnding"&&r.events[y][1].type!=="linePrefix"&&r.events[y][1].type!=="content"){m=r.events[y][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||m)?(e.enter("setextHeadingLine"),o=h,u(h)):l(h)}function u(h){return e.enter("setextHeadingLineSequence"),f(h)}function f(h){return h===o?(e.consume(h),f):(e.exit("setextHeadingLineSequence"),Ae(h)?Le(e,d,"lineSuffix")(h):d(h))}function d(h){return h===null||fe(h)?(e.exit("setextHeadingLine"),n(h)):l(h)}}const Lb={tokenize:Rb};function Rb(e){let n=e.attempt(this.parser.constructs.contentInitial,r,o),l;return n;function r(f){if(f===null){e.consume(f);return}return e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Le(e,n,"linePrefix")}function o(f){return e.enter("paragraph"),s(f)}function s(f){let d=e.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=d),l=d,u(f)}function u(f){if(f===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(f);return}return fe(f)?(e.consume(f),e.exit("chunkText"),s):(e.consume(f),u)}}const zb={tokenize:Pb},Ug={tokenize:Fb};function Pb(e){let n=this,l=[],r=0,o,s,u;return f;function f(q){if(r<l.length){let te=l[r];return n.containerState=te[1],e.attempt(te[0].continuation,d,h)(q)}return h(q)}function d(q){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,o&&X();let te=n.events.length,ne=te,M;for(;ne--;)if(n.events[ne][0]==="exit"&&n.events[ne][1].type==="chunkFlow"){M=n.events[ne][1].end;break}C(r);let K=te;for(;K<n.events.length;)n.events[K][1].end={...M},K++;return an(n.events,ne+1,0,n.events.slice(te)),n.events.length=K,h(q)}return f(q)}function h(q){if(r===l.length){if(!o)return b(q);if(o.currentConstruct&&o.currentConstruct.concrete)return B(q);n.interrupt=!!(o.currentConstruct&&!o._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Ug,y,m)(q)}function y(q){return o&&X(),C(r),b(q)}function m(q){return n.parser.lazy[n.now().line]=r!==l.length,u=n.now().offset,B(q)}function b(q){return n.containerState={},e.attempt(Ug,v,B)(q)}function v(q){return r++,l.push([n.currentConstruct,n.containerState]),b(q)}function B(q){if(q===null){o&&X(),C(0),e.consume(q);return}return o||=n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:o,contentType:"flow",previous:s}),R(q)}function R(q){if(q===null){z(e.exit("chunkFlow"),!0),C(0),e.consume(q);return}return fe(q)?(e.consume(q),z(e.exit("chunkFlow")),r=0,n.interrupt=void 0,f):(e.consume(q),R)}function z(q,te){let ne=n.sliceStream(q);if(te&&ne.push(null),q.previous=s,s&&(s.next=q),s=q,o.defineSkip(q.start),o.write(ne),n.parser.lazy[q.start.line]){let M=o.events.length;for(;M--;)if(o.events[M][1].start.offset<u&&(!o.events[M][1].end||o.events[M][1].end.offset>u))return;let K=n.events.length,I=K,W,_;for(;I--;)if(n.events[I][0]==="exit"&&n.events[I][1].type==="chunkFlow"){if(W){_=n.events[I][1].end;break}W=!0}for(C(r),M=K;M<n.events.length;)n.events[M][1].end={..._},M++;an(n.events,I+1,0,n.events.slice(K)),n.events.length=M}}function C(q){let te=l.length;for(;te-- >q;){let ne=l[te];n.containerState=ne[1],ne[0].exit.call(n,e)}l.length=q}function X(){o.write([null]),s=void 0,o=void 0,n.containerState._closeFlow=void 0}}function Fb(e,n,l){return Le(e,e.attempt(this.parser.constructs.document,n,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}const Ib={tokenize:Mb};function Mb(e){let n=this,l=e.attempt(fo,r,e.attempt(this.parser.constructs.flowInitial,o,Le(e,e.attempt(this.parser.constructs.flow,o,e.attempt(MT,o)),"linePrefix")));return l;function r(s){if(s===null){e.consume(s);return}return e.enter("lineEndingBlank"),e.consume(s),e.exit("lineEndingBlank"),n.currentConstruct=void 0,l}function o(s){if(s===null){e.consume(s);return}return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),n.currentConstruct=void 0,l}}const Gb={resolveAll:j3()},qb=$3("string"),$b=$3("text");function $3(e){return{resolveAll:j3(e==="text"?jb:void 0),tokenize:n};function n(l){let r=this,o=this.parser.constructs[e],s=l.attempt(o,u,f);return u;function u(y){return h(y)?s(y):f(y)}function f(y){if(y===null){l.consume(y);return}return l.enter("data"),l.consume(y),d}function d(y){return h(y)?(l.exit("data"),s(y)):(l.consume(y),d)}function h(y){if(y===null)return!0;let m=o[y],b=-1;if(m)for(;++b<m.length;){let v=m[b];if(!v.previous||v.previous.call(r,r.previous))return!0}return!1}}}function j3(e){return n;function n(l,r){let o=-1,s;for(;++o<=l.length;)s===void 0?l[o]&&l[o][1].type==="data"&&(s=o,o++):(!l[o]||l[o][1].type!=="data")&&(o!==s+2&&(l[s][1].end=l[o-1][1].end,l.splice(s+2,o-s-2),o=s+2),s=void 0);return e?e(l,r):l}}function jb(e,n){let l=0;for(;++l<=e.length;)if((l===e.length||e[l][1].type==="lineEnding")&&e[l-1][1].type==="data"){let r=e[l-1][1],o=n.sliceStream(r),s=o.length,u=-1,f=0,d;for(;s--;){let h=o[s];if(typeof h=="string"){for(u=h.length;h.charCodeAt(u-1)===32;)f++,u--;if(u)break;u=-1}else if(h===-2)d=!0,f++;else if(h!==-1){s++;break}}if(n._contentTypeTextTrailing&&l===e.length&&(f=0),f){let h={type:l===e.length||d||f<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?u:r.start._bufferIndex+u,_index:r.start._index+s,line:r.end.line,column:r.end.column-f,offset:r.end.offset-f},end:{...r.end}};r.end={...h.start},r.start.offset===r.end.offset?Object.assign(r,h):(e.splice(l,0,["enter",h,n],["exit",h,n]),l+=2)}l++}return e}var Ub=co({attentionMarkers:()=>Wb,contentInitial:()=>Hb,disable:()=>Jb,document:()=>Zb,flow:()=>Vb,flowInitial:()=>Kb,insideSpan:()=>Qb,string:()=>Xb,text:()=>Yb});const Zb={42:Zt,43:Zt,45:Zt,48:Zt,49:Zt,50:Zt,51:Zt,52:Zt,53:Zt,54:Zt,55:Zt,56:Zt,57:Zt,62:z3},Hb={91:UT},Kb={[-2]:kd,[-1]:kd,32:kd},Vb={35:YT,42:Xs,45:[jg,Xs],60:eb,61:jg,95:Xs,96:qg,126:qg},Xb={38:F3,92:P3},Yb={[-5]:xd,[-4]:xd,[-3]:xd,33:Tb,38:F3,42:r1,60:[vT,ob],91:vb,92:[VT,P3],93:$1,95:r1,96:LT},Qb={null:[r1,Gb]},Wb={null:[42,95]},Jb={null:[]};function ev(e,n,l){let r={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0},o={},s=[],u=[],f=[],d={attempt:K(ne),check:K(M),consume:X,enter:q,exit:te,interrupt:K(M,{interrupt:!0})},h={code:null,containerState:{},defineSkip:R,events:[],now:B,parser:e,previous:null,sliceSerialize:b,sliceStream:v,write:m},y=n.tokenize.call(h,d);return n.resolveAll&&s.push(n),h;function m(Z){return u=Tn(u,Z),z(),u[u.length-1]===null?(I(n,0),h.events=_c(s,h.events,h),h.events):[]}function b(Z,V){return nv(v(Z),V)}function v(Z){return tv(u,Z)}function B(){let{_bufferIndex:Z,_index:V,line:le,column:pe,offset:ue}=r;return{_bufferIndex:Z,_index:V,line:le,column:pe,offset:ue}}function R(Z){o[Z.line]=Z.column,_()}function z(){let Z;for(;r._index<u.length;){let V=u[r._index];if(typeof V=="string")for(Z=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===Z&&r._bufferIndex<V.length;)C(V.charCodeAt(r._bufferIndex));else C(V)}}function C(Z){y=y(Z)}function X(Z){fe(Z)?(r.line++,r.column=1,r.offset+=Z===-3?2:1,_()):Z!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===u[r._index].length&&(r._bufferIndex=-1,r._index++)),h.previous=Z}function q(Z,V){let le=V||{};return le.type=Z,le.start=B(),h.events.push(["enter",le,h]),f.push(le),le}function te(Z){let V=f.pop();return V.end=B(),h.events.push(["exit",V,h]),V}function ne(Z,V){I(Z,V.from)}function M(Z,V){V.restore()}function K(Z,V){return le;function le(pe,ue,P){let Y,ae,Te,w;return Array.isArray(pe)?$(pe):"tokenize"in pe?$([pe]):A(pe);function A(se){return Se;function Se(Je){let Ge=Je!==null&&se[Je],on=Je!==null&&se.null;return $([...Array.isArray(Ge)?Ge:Ge?[Ge]:[],...Array.isArray(on)?on:on?[on]:[]])(Je)}}function $(se){return Y=se,ae=0,se.length===0?P:x(se[ae])}function x(se){return Se;function Se(Je){return w=W(),Te=se,se.partial||(h.currentConstruct=se),se.name&&h.parser.constructs.disable.null.includes(se.name)?he():se.tokenize.call(V?Object.assign(Object.create(h),V):h,d,ie,he)(Je)}}function ie(se){return Z(Te,w),ue}function he(se){return w.restore(),++ae<Y.length?x(Y[ae]):P}}}function I(Z,V){Z.resolveAll&&!s.includes(Z)&&s.push(Z),Z.resolve&&an(h.events,V,h.events.length-V,Z.resolve(h.events.slice(V),h)),Z.resolveTo&&(h.events=Z.resolveTo(h.events,h))}function W(){let Z=B(),V=h.previous,le=h.currentConstruct,pe=h.events.length,ue=Array.from(f);return{from:pe,restore:P};function P(){r=Z,h.previous=V,h.currentConstruct=le,h.events.length=pe,f=ue,_()}}function _(){r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}function tv(e,n){let l=n.start._index,r=n.start._bufferIndex,o=n.end._index,s=n.end._bufferIndex,u;if(l===o)u=[e[l].slice(r,s)];else{if(u=e.slice(l,o),r>-1){let f=u[0];typeof f=="string"?u[0]=f.slice(r):u.shift()}s>0&&u.push(e[o].slice(0,s))}return u}function nv(e,n){let l=-1,r=[],o;for(;++l<e.length;){let s=e[l],u;if(typeof s=="string")u=s;else switch(s){case-5:u="\r";break;case-4:u=`
`;break;case-3:u=`\r
`;break;case-2:u=n?" ":"	";break;case-1:if(!n&&o)continue;u=" ";break;default:u=String.fromCharCode(s)}o=s===-2,r.push(u)}return r.join("")}function lv(e){let n={constructs:R3([Ub,...(e||{}).extensions||[]]),content:l(Lb),defined:[],document:l(zb),flow:l(Ib),lazy:{},string:l(qb),text:l($b)};return n;function l(r){return o;function o(s){return ev(n,r,s)}}}function iv(e){for(;!I3(e););return e}const Zg=/[\0\t\n\r]/g;function rv(){let e=1,n="",l=!0,r;return o;function o(s,u,f){let d=[],h,y,m,b,v;for(s=n+(typeof s=="string"?s.toString():new TextDecoder(u||void 0).decode(s)),m=0,n="",l&&=(s.charCodeAt(0)===65279&&m++,void 0);m<s.length;){if(Zg.lastIndex=m,h=Zg.exec(s),b=h&&h.index!==void 0?h.index:s.length,v=s.charCodeAt(b),!h){n=s.slice(m);break}if(v===10&&m===b&&r)d.push(-3),r=void 0;else switch(r&&=(d.push(-5),void 0),m<b&&(d.push(s.slice(m,b)),e+=b-m),v){case 0:d.push(65533),e++;break;case 9:for(y=Math.ceil(e/4)*4,d.push(-2);e++<y;)d.push(-1);break;case 10:d.push(-4),e=1;break;default:r=!0,e=1}m=b+1}return f&&(r&&d.push(-5),n&&d.push(n),d.push(null)),d}}function Xa(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Hg(e.position):"start"in e||"end"in e?Hg(e):"line"in e||"column"in e?a1(e):""}function a1(e){return Kg(e&&e.line)+":"+Kg(e&&e.column)}function Hg(e){return a1(e&&e.start)+"-"+a1(e&&e.end)}function Kg(e){return e&&typeof e=="number"?e:1}const U3={}.hasOwnProperty;function Z3(e,n,l){return n&&typeof n=="object"&&(l=n,n=void 0),av(l)(iv(lv(l).document().write(rv()(e,n,!0))))}function av(e){let n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(Ri),autolinkProtocol:W,autolinkEmail:W,atxHeading:s(Ni),blockQuote:s(on),characterEscape:W,characterReference:W,codeFenced:s(Jl),codeFencedFenceInfo:u,codeFencedFenceMeta:u,codeIndented:s(Jl,u),codeText:s(Ur,u),codeTextData:W,data:W,codeFlowValue:W,definition:s(yo),definitionDestinationString:u,definitionLabelString:u,definitionTitleString:u,emphasis:s(Zn),hardBreakEscape:s(Li),hardBreakTrailing:s(Li),htmlFlow:s(mo,u),htmlFlowData:W,htmlText:s(mo,u),htmlTextData:W,image:s(To),label:u,link:s(Ri),listItem:s(Zr),listItemValue:b,listOrdered:s(zi,m),listUnordered:s(zi),paragraph:s(Uc),reference:x,referenceString:u,resourceDestinationString:u,resourceTitleString:u,setextHeading:s(Ni),strong:s(Zc),thematicBreak:s(Hc)},exit:{atxHeading:d(),atxHeadingSequence:ne,autolink:d(),autolinkEmail:Ge,autolinkProtocol:Je,blockQuote:d(),characterEscapeValue:_,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:se,characterReference:Se,codeFenced:d(z),codeFencedFence:R,codeFencedFenceInfo:v,codeFencedFenceMeta:B,codeFlowValue:_,codeIndented:d(C),codeText:d(ue),codeTextData:_,data:_,definition:d(),definitionDestinationString:te,definitionLabelString:X,definitionTitleString:q,emphasis:d(),hardBreakEscape:d(V),hardBreakTrailing:d(V),htmlFlow:d(le),htmlFlowData:_,htmlText:d(pe),htmlTextData:_,image:d(Y),label:Te,labelText:ae,lineEnding:Z,link:d(P),listItem:d(),listOrdered:d(),listUnordered:d(),paragraph:d(),referenceString:ie,resourceDestinationString:w,resourceTitleString:A,resource:$,setextHeading:d(I),setextHeadingLineSequence:K,setextHeadingText:M,strong:d(),thematicBreak:d()}};H3(n,(e||{}).mdastExtensions||[]);let l={};return r;function r(j){let ee={type:"root",children:[]},ge={stack:[ee],tokenStack:[],config:n,enter:f,exit:h,buffer:u,resume:y,data:l},He=[],qe=-1;for(;++qe<j.length;)(j[qe][1].type==="listOrdered"||j[qe][1].type==="listUnordered")&&(j[qe][0]==="enter"?He.push(qe):qe=o(j,He.pop(),qe));for(qe=-1;++qe<j.length;){let zn=n[j[qe][0]];U3.call(zn,j[qe][1].type)&&zn[j[qe][1].type].call(Object.assign({sliceSerialize:j[qe][2].sliceSerialize},ge),j[qe][1])}if(ge.tokenStack.length>0){let zn=ge.tokenStack[ge.tokenStack.length-1];(zn[1]||Vg).call(ge,void 0,zn[0])}for(ee.position={start:Kl(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:Kl(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},qe=-1;++qe<n.transforms.length;)ee=n.transforms[qe](ee)||ee;return ee}function o(j,ee,ge){let He=ee-1,qe=-1,zn=!1,vl,Nt,gt,Ft;for(;++He<=ge;){let Ke=j[He];switch(Ke[1].type){case"listUnordered":case"listOrdered":case"blockQuote":Ke[0]==="enter"?qe++:qe--,Ft=void 0;break;case"lineEndingBlank":Ke[0]==="enter"&&(vl&&!Ft&&!qe&&!gt&&(gt=He),Ft=void 0);break;case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Ft=void 0}if(!qe&&Ke[0]==="enter"&&Ke[1].type==="listItemPrefix"||qe===-1&&Ke[0]==="exit"&&(Ke[1].type==="listUnordered"||Ke[1].type==="listOrdered")){if(vl){let kl=He;for(Nt=void 0;kl--;){let kn=j[kl];if(kn[1].type==="lineEnding"||kn[1].type==="lineEndingBlank"){if(kn[0]==="exit")continue;Nt&&(j[Nt][1].type="lineEndingBlank",zn=!0),kn[1].type="lineEnding",Nt=kl}else if(!(kn[1].type==="linePrefix"||kn[1].type==="blockQuotePrefix"||kn[1].type==="blockQuotePrefixWhitespace"||kn[1].type==="blockQuoteMarker"||kn[1].type==="listItemIndent"))break}gt&&(!Nt||gt<Nt)&&(vl._spread=!0),vl.end=Object.assign({},Nt?j[Nt][1].start:Ke[1].end),j.splice(Nt||He,0,["exit",vl,Ke[2]]),He++,ge++}if(Ke[1].type==="listItemPrefix"){let kl={type:"listItem",_spread:!1,start:Object.assign({},Ke[1].start),end:void 0};vl=kl,j.splice(He,0,["enter",kl,Ke[2]]),He++,ge++,gt=void 0,Ft=!0}}}return j[ee][1]._spread=zn,ge}function s(j,ee){return ge;function ge(He){f.call(this,j(He),He),ee&&ee.call(this,He)}}function u(){this.stack.push({type:"fragment",children:[]})}function f(j,ee,ge){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([ee,ge||void 0]),j.position={start:Kl(ee.start),end:void 0}}function d(j){return ee;function ee(ge){j&&j.call(this,ge),h.call(this,ge)}}function h(j,ee){let ge=this.stack.pop(),He=this.tokenStack.pop();if(He)He[0].type!==j.type&&(ee?ee.call(this,j,He[0]):(He[1]||Vg).call(this,j,He[0]));else throw Error("Cannot close `"+j.type+"` ("+Xa({start:j.start,end:j.end})+"): it’s not open");ge.position.end=Kl(j.end)}function y(){return Dc(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function b(j){if(this.data.expectingFirstListItemValue){let ee=this.stack[this.stack.length-2];ee.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function v(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.lang=j}function B(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.meta=j}function R(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function z(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function C(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.value=j.replace(/(\r?\n|\r)$/g,"")}function X(j){let ee=this.resume(),ge=this.stack[this.stack.length-1];ge.label=ee,ge.identifier=Nn(this.sliceSerialize(j)).toLowerCase()}function q(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.title=j}function te(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.url=j}function ne(j){let ee=this.stack[this.stack.length-1];ee.depth||=this.sliceSerialize(j).length}function M(){this.data.setextHeadingSlurpLineEnding=!0}function K(j){let ee=this.stack[this.stack.length-1];ee.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function W(j){let ee=this.stack[this.stack.length-1].children,ge=ee[ee.length-1];(!ge||ge.type!=="text")&&(ge=Ot(),ge.position={start:Kl(j.start),end:void 0},ee.push(ge)),this.stack.push(ge)}function _(j){let ee=this.stack.pop();ee.value+=this.sliceSerialize(j),ee.position.end=Kl(j.end)}function Z(j){let ee=this.stack[this.stack.length-1];if(this.data.atHardBreak){let ge=ee.children[ee.children.length-1];ge.position.end=Kl(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(ee.type)&&(W.call(this,j),_.call(this,j))}function V(){this.data.atHardBreak=!0}function le(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.value=j}function pe(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.value=j}function ue(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.value=j}function P(){let j=this.stack[this.stack.length-1];if(this.data.inReference){let ee=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=ee,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function Y(){let j=this.stack[this.stack.length-1];if(this.data.inReference){let ee=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=ee,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function ae(j){let ee=this.sliceSerialize(j),ge=this.stack[this.stack.length-2];ge.label=pT(ee),ge.identifier=Nn(ee).toLowerCase()}function Te(){let j=this.stack[this.stack.length-1],ee=this.resume(),ge=this.stack[this.stack.length-1];this.data.inReference=!0,ge.type==="link"?ge.children=j.children:ge.alt=ee}function w(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.url=j}function A(){let j=this.resume(),ee=this.stack[this.stack.length-1];ee.title=j}function $(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function ie(j){let ee=this.resume(),ge=this.stack[this.stack.length-1];ge.label=ee,ge.identifier=Nn(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function he(j){this.data.characterReferenceType=j.type}function se(j){let ee=this.sliceSerialize(j),ge=this.data.characterReferenceType,He;ge?(He=L3(ee,ge==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):He=q1(ee);let qe=this.stack[this.stack.length-1];qe.value+=He}function Se(j){let ee=this.stack.pop();ee.position.end=Kl(j.end)}function Je(j){_.call(this,j);let ee=this.stack[this.stack.length-1];ee.url=this.sliceSerialize(j)}function Ge(j){_.call(this,j);let ee=this.stack[this.stack.length-1];ee.url="mailto:"+this.sliceSerialize(j)}function on(){return{type:"blockquote",children:[]}}function Jl(){return{type:"code",lang:null,meta:null,value:""}}function Ur(){return{type:"inlineCode",value:""}}function yo(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Zn(){return{type:"emphasis",children:[]}}function Ni(){return{type:"heading",depth:0,children:[]}}function Li(){return{type:"break"}}function mo(){return{type:"html",value:""}}function To(){return{type:"image",title:null,url:"",alt:null}}function Ri(){return{type:"link",title:null,url:"",children:[]}}function zi(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function Zr(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function Uc(){return{type:"paragraph",children:[]}}function Zc(){return{type:"strong",children:[]}}function Ot(){return{type:"text",value:""}}function Hc(){return{type:"thematicBreak"}}}function Kl(e){return{line:e.line,column:e.column,offset:e.offset}}function H3(e,n){let l=-1;for(;++l<n.length;){let r=n[l];Array.isArray(r)?H3(e,r):ov(e,r)}}function ov(e,n){let l;for(l in n)if(U3.call(n,l))switch(l){case"canContainEols":{let r=n[l];r&&e[l].push(...r);break}case"transforms":{let r=n[l];r&&e[l].push(...r);break}case"enter":case"exit":{let r=n[l];r&&Object.assign(e[l],r);break}}}function Vg(e,n){throw Error(e?"Cannot close `"+e.type+"` ("+Xa({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Xa({start:n.start,end:n.end})+") is open":"Cannot close document, a token (`"+n.type+"`, "+Xa({start:n.start,end:n.end})+") is still open")}function sv(e){if(typeof e!="string")throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}const Oc=(function(e){if(e==null)return dv;if(typeof e=="function")return Nc(e);if(typeof e=="object")return Array.isArray(e)?cv(e):uv(e);if(typeof e=="string")return fv(e);throw Error("Expected function, string, or object as test")});function cv(e){let n=[],l=-1;for(;++l<e.length;)n[l]=Oc(e[l]);return Nc(r);function r(...o){let s=-1;for(;++s<n.length;)if(n[s].apply(this,o))return!0;return!1}}function uv(e){let n=e;return Nc(l);function l(r){let o=r,s;for(s in e)if(o[s]!==n[s])return!1;return!0}}function fv(e){return Nc(n);function n(l){return l&&l.type===e}}function Nc(e){return n;function n(l,r,o){return!!(hv(l)&&e.call(this,l,typeof r=="number"?r:void 0,o||void 0))}}function dv(){return!0}function hv(e){return typeof e=="object"&&!!e&&"type"in e}const K3=[],pv=!1;function V3(e,n,l,r){let o;typeof n=="function"&&typeof l!="function"?(r=l,l=n):o=n;let s=Oc(o),u=r?-1:1;f(e,void 0,[])();function f(d,h,y){let m=d&&typeof d=="object"?d:{};if(typeof m.type=="string"){let v=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(d.type+(v?"<"+v+">":""))+")"})}return b;function b(){let v=K3,B,R,z;if((!n||s(d,h,y[y.length-1]||void 0))&&(v=gv(l(d,y)),v[0]===!1))return v;if("children"in d&&d.children){let C=d;if(C.children&&v[0]!=="skip")for(R=(r?C.children.length:-1)+u,z=y.concat(C);R>-1&&R<C.children.length;){let X=C.children[R];if(B=f(X,R,z)(),B[0]===!1)return B;R=typeof B[1]=="number"?B[1]:R+u}}return v}}}function gv(e){return Array.isArray(e)?e:typeof e=="number"?[!0,e]:e==null?K3:[e]}function yv(e,n,l){let r=Oc((l||{}).ignore||[]),o=mv(n),s=-1;for(;++s<o.length;)V3(e,"text",u);function u(d,h){let y=-1,m;for(;++y<h.length;){let b=h[y],v=m?m.children:void 0;if(r(b,v?v.indexOf(b):void 0,m))return;m=b}if(m)return f(d,h)}function f(d,h){let y=h[h.length-1],m=o[s][0],b=o[s][1],v=0,B=y.children.indexOf(d),R=!1,z=[];m.lastIndex=0;let C=m.exec(d.value);for(;C;){let X=C.index,q={index:C.index,input:C.input,stack:[...h,d]},te=b(...C,q);if(typeof te=="string"&&(te=te.length>0?{type:"text",value:te}:void 0),te===!1?m.lastIndex=X+1:(v!==X&&z.push({type:"text",value:d.value.slice(v,X)}),Array.isArray(te)?z.push(...te):te&&z.push(te),v=X+C[0].length,R=!0),!m.global)break;C=m.exec(d.value)}return R?(v<d.value.length&&z.push({type:"text",value:d.value.slice(v)}),y.children.splice(B,1,...z)):z=[d],B+z.length}}function mv(e){let n=[];if(!Array.isArray(e))throw TypeError("Expected find and replace tuple or list of tuples");let l=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<l.length;){let o=l[r];n.push([Tv(o[0]),bv(o[1])])}return n}function Tv(e){return typeof e=="string"?new RegExp(sv(e),"g"):e}function bv(e){return typeof e=="function"?e:function(){return e}}function vv(e){return e.length}function kv(e,n){let l=n||{},r=(l.align||[]).concat(),o=l.stringLength||vv,s=[],u=[],f=[],d=[],h=0,y=-1;for(;++y<e.length;){let R=[],z=[],C=-1;for(e[y].length>h&&(h=e[y].length);++C<e[y].length;){let X=xv(e[y][C]);if(l.alignDelimiters!==!1){let q=o(X);z[C]=q,(d[C]===void 0||q>d[C])&&(d[C]=q)}R.push(X)}u[y]=R,f[y]=z}let m=-1;if(typeof r=="object"&&"length"in r)for(;++m<h;)s[m]=Xg(r[m]);else{let R=Xg(r);for(;++m<h;)s[m]=R}m=-1;let b=[],v=[];for(;++m<h;){let R=s[m],z="",C="";R===99?(z=":",C=":"):R===108?z=":":R===114&&(C=":");let X=l.alignDelimiters===!1?1:Math.max(1,d[m]-z.length-C.length),q=z+"-".repeat(X)+C;l.alignDelimiters!==!1&&(X=z.length+X+C.length,X>d[m]&&(d[m]=X),v[m]=X),b[m]=q}u.splice(1,0,b),f.splice(1,0,v),y=-1;let B=[];for(;++y<u.length;){let R=u[y],z=f[y];m=-1;let C=[];for(;++m<h;){let X=R[m]||"",q="",te="";if(l.alignDelimiters!==!1){let ne=d[m]-(z[m]||0),M=s[m];M===114?q=" ".repeat(ne):M===99?ne%2?(q=" ".repeat(ne/2+.5),te=" ".repeat(ne/2-.5)):(q=" ".repeat(ne/2),te=q):te=" ".repeat(ne)}l.delimiterStart!==!1&&!m&&C.push("|"),l.padding!==!1&&!(l.alignDelimiters===!1&&X==="")&&(l.delimiterStart!==!1||m)&&C.push(" "),l.alignDelimiters!==!1&&C.push(q),C.push(X),l.alignDelimiters!==!1&&C.push(te),l.padding!==!1&&C.push(" "),(l.delimiterEnd!==!1||m!==h-1)&&C.push("|")}B.push(l.delimiterEnd===!1?C.join("").replace(/ +$/,""):C.join(""))}return B.join(`
`)}function xv(e){return e==null?"":String(e)}function Xg(e){let n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function Bv(e,n){let l=String(e),r=l.indexOf(n),o=r,s=0,u=0;if(typeof n!="string")throw TypeError("Expected substring");for(;r!==-1;)r===o?++s>u&&(u=s):s=1,o=r+n.length,r=l.indexOf(n,o);return u}const Bd="phrasing",wd=["autolink","link","image","label"];function wv(){return{transforms:[Ov],enter:{literalAutolink:Cv,literalAutolinkEmail:Ed,literalAutolinkHttp:Ed,literalAutolinkWww:Ed},exit:{literalAutolink:_v,literalAutolinkEmail:Dv,literalAutolinkHttp:Av,literalAutolinkWww:Sv}}}function Ev(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Bd,notInConstruct:wd},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Bd,notInConstruct:wd},{character:":",before:"[ps]",after:"\\/",inConstruct:Bd,notInConstruct:wd}]}}function Cv(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Ed(e){this.config.enter.autolinkProtocol.call(this,e)}function Av(e){this.config.exit.autolinkProtocol.call(this,e)}function Sv(e){this.config.exit.data.call(this,e);let n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function Dv(e){this.config.exit.autolinkEmail.call(this,e)}function _v(e){this.exit(e)}function Ov(e){yv(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Nv],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Lv]],{ignore:["link","linkReference"]})}function Nv(e,n,l,r,o){let s="";if(!X3(o)||(/^w/i.test(n)&&(l=n+l,n="",s="http://"),!Rv(l)))return!1;let u=zv(l+r);if(!u[0])return!1;let f={type:"link",title:null,url:s+n+u[0],children:[{type:"text",value:n+u[0]}]};return u[1]?[f,{type:"text",value:u[1]}]:f}function Lv(e,n,l,r){return!X3(r,!0)||/[-\d_]$/.test(l)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+l,children:[{type:"text",value:n+"@"+l}]}}function Rv(e){let n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function zv(e){let n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let l=n[0],r=l.indexOf(")"),o=cc(e,"("),s=cc(e,")");for(;r!==-1&&o>s;)e+=l.slice(0,r+1),l=l.slice(r+1),r=l.indexOf(")"),s++;return[e,l]}function X3(e,n){let l=e.input.charCodeAt(e.index-1);return(e.index===0||Ai(l)||Sc(l))&&(!n||l!==47)}Y3.peek=Uv;function Pv(){this.buffer()}function Fv(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Iv(){this.buffer()}function Mv(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Gv(e){let n=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=Nn(this.sliceSerialize(e)).toLowerCase(),l.label=n}function qv(e){this.exit(e)}function $v(e){let n=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=Nn(this.sliceSerialize(e)).toLowerCase(),l.label=n}function jv(e){this.exit(e)}function Uv(){return"["}function Y3(e,n,l,r){let o=l.createTracker(r),s=o.move("[^"),u=l.enter("footnoteReference"),f=l.enter("reference");return s+=o.move(l.safe(l.associationId(e),{after:"]",before:s})),f(),u(),s+=o.move("]"),s}function Zv(){return{enter:{gfmFootnoteCallString:Pv,gfmFootnoteCall:Fv,gfmFootnoteDefinitionLabelString:Iv,gfmFootnoteDefinition:Mv},exit:{gfmFootnoteCallString:Gv,gfmFootnoteCall:qv,gfmFootnoteDefinitionLabelString:$v,gfmFootnoteDefinition:jv}}}function Hv(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:l,footnoteReference:Y3},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function l(r,o,s,u){let f=s.createTracker(u),d=f.move("[^"),h=s.enter("footnoteDefinition"),y=s.enter("label");return d+=f.move(s.safe(s.associationId(r),{before:d,after:"]"})),y(),d+=f.move("]:"),r.children&&r.children.length>0&&(f.shift(4),d+=f.move((n?`
`:" ")+s.indentLines(s.containerFlow(r,f.current()),n?Q3:Kv))),h(),d}}function Kv(e,n,l){return n===0?e:Q3(e,n,l)}function Q3(e,n,l){return(l?"":"    ")+e}const Vv=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];W3.peek=Jv;function Xv(){return{canContainEols:["delete"],enter:{strikethrough:Qv},exit:{strikethrough:Wv}}}function Yv(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:Vv}],handlers:{delete:W3}}}function Qv(e){this.enter({type:"delete",children:[]},e)}function Wv(e){this.exit(e)}function W3(e,n,l,r){let o=l.createTracker(r),s=l.enter("strikethrough"),u=o.move("~~");return u+=l.containerPhrasing(e,{...o.current(),before:u,after:"~"}),u+=o.move("~~"),s(),u}function Jv(){return"~"}function ek(e,n,l,r){let o=l.enter("blockquote"),s=l.createTracker(r);s.move("> "),s.shift(2);let u=l.indentLines(l.containerFlow(e,s.current()),tk);return o(),u}function tk(e,n,l){return">"+(l?"":" ")+e}function nk(e,n){return Yg(e,n.inConstruct,!0)&&!Yg(e,n.notInConstruct,!1)}function Yg(e,n,l){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return l;let r=-1;for(;++r<n.length;)if(e.includes(n[r]))return!0;return!1}function Qg(e,n,l,r){let o=-1;for(;++o<l.unsafe.length;)if(l.unsafe[o].character===`
`&&nk(l.stack,l.unsafe[o]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function lk(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function ik(e){let n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function rk(e,n,l,r){let o=ik(l),s=e.value||"",u=o==="`"?"GraveAccent":"Tilde";if(lk(e,l)){let m=l.enter("codeIndented"),b=l.indentLines(s,ak);return m(),b}let f=l.createTracker(r),d=o.repeat(Math.max(Bv(s,o)+1,3)),h=l.enter("codeFenced"),y=f.move(d);if(e.lang){let m=l.enter(`codeFencedLang${u}`);y+=f.move(l.safe(e.lang,{before:y,after:" ",encode:["`"],...f.current()})),m()}if(e.lang&&e.meta){let m=l.enter(`codeFencedMeta${u}`);y+=f.move(" "),y+=f.move(l.safe(e.meta,{before:y,after:`
`,encode:["`"],...f.current()})),m()}return y+=f.move(`
`),s&&(y+=f.move(s+`
`)),y+=f.move(d),h(),y}function ak(e,n,l){return(l?"":"    ")+e}function j1(e){let n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function ok(e,n,l,r){let o=j1(l),s=o==='"'?"Quote":"Apostrophe",u=l.enter("definition"),f=l.enter("label"),d=l.createTracker(r),h=d.move("[");return h+=d.move(l.safe(l.associationId(e),{before:h,after:"]",...d.current()})),h+=d.move("]: "),f(),!e.url||/[\0- \u007F]/.test(e.url)?(f=l.enter("destinationLiteral"),h+=d.move("<"),h+=d.move(l.safe(e.url,{before:h,after:">",...d.current()})),h+=d.move(">")):(f=l.enter("destinationRaw"),h+=d.move(l.safe(e.url,{before:h,after:e.title?" ":`
`,...d.current()}))),f(),e.title&&(f=l.enter(`title${s}`),h+=d.move(" "+o),h+=d.move(l.safe(e.title,{before:h,after:o,...d.current()})),h+=d.move(o),f()),u(),h}function sk(e){let n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function Ja(e){return"&#x"+e.toString(16).toUpperCase()+";"}function fc(e,n,l){let r=Nr(e),o=Nr(n);return r===void 0?o===void 0?l==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:o===void 0?{inside:!1,outside:!1}:o===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}J3.peek=ck;function J3(e,n,l,r){let o=sk(l),s=l.enter("emphasis"),u=l.createTracker(r),f=u.move(o),d=u.move(l.containerPhrasing(e,{after:o,before:f,...u.current()})),h=d.charCodeAt(0),y=fc(r.before.charCodeAt(r.before.length-1),h,o);y.inside&&(d=Ja(h)+d.slice(1));let m=d.charCodeAt(d.length-1),b=fc(r.after.charCodeAt(0),m,o);b.inside&&(d=d.slice(0,-1)+Ja(m));let v=u.move(o);return s(),l.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+d+v}function ck(e,n,l){return l.options.emphasis||"*"}function U1(e,n,l,r){let o,s,u;typeof n=="function"&&typeof l!="function"?(s=void 0,u=n,o=l):(s=n,u=l,o=r),V3(e,s,f,o);function f(d,h){let y=h[h.length-1],m=y?y.children.indexOf(d):void 0;return u(d,m,y)}}function uk(e,n){let l=!1;return U1(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return l=!0,pv}),!!((!e.depth||e.depth<3)&&Dc(e)&&(n.options.setext||l))}function fk(e,n,l,r){let o=Math.max(Math.min(6,e.depth||1),1),s=l.createTracker(r);if(uk(e,l)){let y=l.enter("headingSetext"),m=l.enter("phrasing"),b=l.containerPhrasing(e,{...s.current(),before:`
`,after:`
`});return m(),y(),b+`
`+(o===1?"=":"-").repeat(b.length-(Math.max(b.lastIndexOf("\r"),b.lastIndexOf(`
`))+1))}let u="#".repeat(o),f=l.enter("headingAtx"),d=l.enter("phrasing");s.move(u+" ");let h=l.containerPhrasing(e,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(h)&&(h=Ja(h.charCodeAt(0))+h.slice(1)),h=h?u+" "+h:u,l.options.closeAtx&&(h+=" "+u),d(),f(),h}e8.peek=dk;function e8(e){return e.value||""}function dk(){return"<"}t8.peek=hk;function t8(e,n,l,r){let o=j1(l),s=o==='"'?"Quote":"Apostrophe",u=l.enter("image"),f=l.enter("label"),d=l.createTracker(r),h=d.move("![");return h+=d.move(l.safe(e.alt,{before:h,after:"]",...d.current()})),h+=d.move("]("),f(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(f=l.enter("destinationLiteral"),h+=d.move("<"),h+=d.move(l.safe(e.url,{before:h,after:">",...d.current()})),h+=d.move(">")):(f=l.enter("destinationRaw"),h+=d.move(l.safe(e.url,{before:h,after:e.title?" ":")",...d.current()}))),f(),e.title&&(f=l.enter(`title${s}`),h+=d.move(" "+o),h+=d.move(l.safe(e.title,{before:h,after:o,...d.current()})),h+=d.move(o),f()),h+=d.move(")"),u(),h}function hk(){return"!"}n8.peek=pk;function n8(e,n,l,r){let o=e.referenceType,s=l.enter("imageReference"),u=l.enter("label"),f=l.createTracker(r),d=f.move("!["),h=l.safe(e.alt,{before:d,after:"]",...f.current()});d+=f.move(h+"]["),u();let y=l.stack;l.stack=[],u=l.enter("reference");let m=l.safe(l.associationId(e),{before:d,after:"]",...f.current()});return u(),l.stack=y,s(),o==="full"||!h||h!==m?d+=f.move(m+"]"):o==="shortcut"?d=d.slice(0,-1):d+=f.move("]"),d}function pk(){return"!"}l8.peek=gk;function l8(e,n,l){let r=e.value||"",o="`",s=-1;for(;RegExp("(^|[^`])"+o+"([^`]|$)").test(r);)o+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++s<l.unsafe.length;){let u=l.unsafe[s],f=l.compilePattern(u),d;if(u.atBreak)for(;d=f.exec(r);){let h=d.index;r.charCodeAt(h)===10&&r.charCodeAt(h-1)===13&&h--,r=r.slice(0,h)+" "+r.slice(d.index+1)}}return o+r+o}function gk(){return"`"}function i8(e,n){let l=Dc(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(l===e.url||"mailto:"+l===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}r8.peek=yk;function r8(e,n,l,r){let o=j1(l),s=o==='"'?"Quote":"Apostrophe",u=l.createTracker(r),f,d;if(i8(e,l)){let y=l.stack;l.stack=[],f=l.enter("autolink");let m=u.move("<");return m+=u.move(l.containerPhrasing(e,{before:m,after:">",...u.current()})),m+=u.move(">"),f(),l.stack=y,m}f=l.enter("link"),d=l.enter("label");let h=u.move("[");return h+=u.move(l.containerPhrasing(e,{before:h,after:"](",...u.current()})),h+=u.move("]("),d(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(d=l.enter("destinationLiteral"),h+=u.move("<"),h+=u.move(l.safe(e.url,{before:h,after:">",...u.current()})),h+=u.move(">")):(d=l.enter("destinationRaw"),h+=u.move(l.safe(e.url,{before:h,after:e.title?" ":")",...u.current()}))),d(),e.title&&(d=l.enter(`title${s}`),h+=u.move(" "+o),h+=u.move(l.safe(e.title,{before:h,after:o,...u.current()})),h+=u.move(o),d()),h+=u.move(")"),f(),h}function yk(e,n,l){return i8(e,l)?"<":"["}a8.peek=mk;function a8(e,n,l,r){let o=e.referenceType,s=l.enter("linkReference"),u=l.enter("label"),f=l.createTracker(r),d=f.move("["),h=l.containerPhrasing(e,{before:d,after:"]",...f.current()});d+=f.move(h+"]["),u();let y=l.stack;l.stack=[],u=l.enter("reference");let m=l.safe(l.associationId(e),{before:d,after:"]",...f.current()});return u(),l.stack=y,s(),o==="full"||!h||h!==m?d+=f.move(m+"]"):o==="shortcut"?d=d.slice(0,-1):d+=f.move("]"),d}function mk(){return"["}function Z1(e){let n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function Tk(e){let n=Z1(e),l=e.options.bulletOther;if(!l)return n==="*"?"-":"*";if(l!=="*"&&l!=="+"&&l!=="-")throw Error("Cannot serialize items with `"+l+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(l===n)throw Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+l+"`) to be different");return l}function bk(e){let n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function o8(e){let n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function vk(e,n,l,r){let o=l.enter("list"),s=l.bulletCurrent,u=e.ordered?bk(l):Z1(l),f=e.ordered?u==="."?")":".":Tk(l),d=n&&l.bulletLastUsed?u===l.bulletLastUsed:!1;if(!e.ordered){let y=e.children?e.children[0]:void 0;if((u==="*"||u==="-")&&y&&(!y.children||!y.children[0])&&l.stack[l.stack.length-1]==="list"&&l.stack[l.stack.length-2]==="listItem"&&l.stack[l.stack.length-3]==="list"&&l.stack[l.stack.length-4]==="listItem"&&l.indexStack[l.indexStack.length-1]===0&&l.indexStack[l.indexStack.length-2]===0&&l.indexStack[l.indexStack.length-3]===0&&(d=!0),o8(l)===u&&y){let m=-1;for(;++m<e.children.length;){let b=e.children[m];if(b&&b.type==="listItem"&&b.children&&b.children[0]&&b.children[0].type==="thematicBreak"){d=!0;break}}}}d&&(u=f),l.bulletCurrent=u;let h=l.containerFlow(e,r);return l.bulletLastUsed=u,l.bulletCurrent=s,o(),h}function kk(e){let n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function xk(e,n,l,r){let o=kk(l),s=l.bulletCurrent||Z1(l);n&&n.type==="list"&&n.ordered&&(s=(typeof n.start=="number"&&n.start>-1?n.start:1)+(l.options.incrementListMarker===!1?0:n.children.indexOf(e))+s);let u=s.length+1;(o==="tab"||o==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(u=Math.ceil(u/4)*4);let f=l.createTracker(r);f.move(s+" ".repeat(u-s.length)),f.shift(u);let d=l.enter("listItem"),h=l.indentLines(l.containerFlow(e,f.current()),y);return d(),h;function y(m,b,v){return b?(v?"":" ".repeat(u))+m:(v?s:s+" ".repeat(u-s.length))+m}}function Bk(e,n,l,r){let o=l.enter("paragraph"),s=l.enter("phrasing"),u=l.containerPhrasing(e,r);return s(),o(),u}const wk=Oc(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Ek(e,n,l,r){return(e.children.some(function(o){return wk(o)})?l.containerPhrasing:l.containerFlow).call(l,e,r)}function Ck(e){let n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}s8.peek=Ak;function s8(e,n,l,r){let o=Ck(l),s=l.enter("strong"),u=l.createTracker(r),f=u.move(o+o),d=u.move(l.containerPhrasing(e,{after:o,before:f,...u.current()})),h=d.charCodeAt(0),y=fc(r.before.charCodeAt(r.before.length-1),h,o);y.inside&&(d=Ja(h)+d.slice(1));let m=d.charCodeAt(d.length-1),b=fc(r.after.charCodeAt(0),m,o);b.inside&&(d=d.slice(0,-1)+Ja(m));let v=u.move(o+o);return s(),l.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},f+d+v}function Ak(e,n,l){return l.options.strong||"*"}function Sk(e,n,l,r){return l.safe(e.value,r)}function Dk(e){let n=e.options.ruleRepetition||3;if(n<3)throw Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function _k(e,n,l){let r=(o8(l)+(l.options.ruleSpaces?" ":"")).repeat(Dk(l));return l.options.ruleSpaces?r.slice(0,-1):r}const c8={blockquote:ek,break:Qg,code:rk,definition:ok,emphasis:J3,hardBreak:Qg,heading:fk,html:e8,image:t8,imageReference:n8,inlineCode:l8,link:r8,linkReference:a8,list:vk,listItem:xk,paragraph:Bk,root:Ek,strong:s8,text:Sk,thematicBreak:_k};function Ok(){return{enter:{table:Nk,tableData:Wg,tableHeader:Wg,tableRow:Rk},exit:{codeText:zk,table:Lk,tableData:Cd,tableHeader:Cd,tableRow:Cd}}}function Nk(e){let n=e._align;this.enter({type:"table",align:n.map(function(l){return l==="none"?null:l}),children:[]},e),this.data.inTable=!0}function Lk(e){this.exit(e),this.data.inTable=void 0}function Rk(e){this.enter({type:"tableRow",children:[]},e)}function Cd(e){this.exit(e)}function Wg(e){this.enter({type:"tableCell",children:[]},e)}function zk(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,Pk));let l=this.stack[this.stack.length-1];l.type,l.value=n,this.exit(e)}function Pk(e,n){return n==="|"?n:e}function Fk(e){let n=e||{},l=n.tableCellPadding,r=n.tablePipeAlign,o=n.stringLength,s=l?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:b,table:u,tableCell:d,tableRow:f}};function u(v,B,R,z){return h(y(v,R,z),v.align)}function f(v,B,R,z){let C=h([m(v,R,z)]);return C.slice(0,C.indexOf(`
`))}function d(v,B,R,z){let C=R.enter("tableCell"),X=R.enter("phrasing"),q=R.containerPhrasing(v,{...z,before:s,after:s});return X(),C(),q}function h(v,B){return kv(v,{align:B,alignDelimiters:r,padding:l,stringLength:o})}function y(v,B,R){let z=v.children,C=-1,X=[],q=B.enter("table");for(;++C<z.length;)X[C]=m(z[C],B,R);return q(),X}function m(v,B,R){let z=v.children,C=-1,X=[],q=B.enter("tableRow");for(;++C<z.length;)X[C]=d(z[C],v,B,R);return q(),X}function b(v,B,R){let z=c8.inlineCode(v,B,R);return R.stack.includes("tableCell")&&(z=z.replace(/\|/g,"\\$&")),z}}function Ik(){return{exit:{taskListCheckValueChecked:Jg,taskListCheckValueUnchecked:Jg,paragraph:Gk}}}function Mk(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:qk}}}function Jg(e){let n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function Gk(e){let n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){let l=this.stack[this.stack.length-1];l.type;let r=l.children[0];if(r&&r.type==="text"){let o=n.children,s=-1,u;for(;++s<o.length;){let f=o[s];if(f.type==="paragraph"){u=f;break}}u===l&&(r.value=r.value.slice(1),r.value.length===0?l.children.shift():l.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,l.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function qk(e,n,l,r){let o=e.children[0],s=typeof e.checked=="boolean"&&o&&o.type==="paragraph",u="["+(e.checked?"x":" ")+"] ",f=l.createTracker(r);s&&f.move(u);let d=c8.listItem(e,n,l,{...r,...f.current()});return s&&(d=d.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),d;function h(y){return y+u}}function $k(){return[wv(),Zv(),Xv(),Ok(),Ik()]}function jk(e){return{extensions:[Ev(),Hv(e),Yv(),Fk(e),Mk()]}}const Uk={tokenize:Yk,partial:!0},u8={tokenize:Qk,partial:!0},f8={tokenize:Wk,partial:!0},d8={tokenize:Jk,partial:!0},Zk={tokenize:ex,partial:!0},e4={name:"wwwAutolink",tokenize:Vk,previous:h8},t4={name:"protocolAutolink",tokenize:Xk,previous:p8},fl={name:"emailAutolink",tokenize:Kk,previous:g8},Gn={};function Hk(){return{text:Gn}}let vi=48;for(;vi<123;)Gn[vi]=fl,vi++,vi===58?vi=65:vi===91&&(vi=97);Gn[43]=fl,Gn[45]=fl,Gn[46]=fl,Gn[95]=fl,Gn[72]=[fl,t4],Gn[104]=[fl,t4],Gn[87]=[fl,e4],Gn[119]=[fl,e4];function Kk(e,n,l){let r=this,o,s;return u;function u(m){return!o1(m)||!g8.call(r,r.previous)||H1(r.events)?l(m):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),f(m))}function f(m){return o1(m)?(e.consume(m),f):m===64?(e.consume(m),d):l(m)}function d(m){return m===46?e.check(Zk,y,h)(m):m===45||m===95||Dt(m)?(s=!0,e.consume(m),d):y(m)}function h(m){return e.consume(m),o=!0,d}function y(m){return s&&o&&zt(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(m)):l(m)}}function Vk(e,n,l){let r=this;return o;function o(u){return u!==87&&u!==119||!h8.call(r,r.previous)||H1(r.events)?l(u):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(Uk,e.attempt(u8,e.attempt(f8,s),l),l)(u))}function s(u){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(u)}}function Xk(e,n,l){let r=this,o="",s=!1;return u;function u(m){return(m===72||m===104)&&p8.call(r,r.previous)&&!H1(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(m),e.consume(m),f):l(m)}function f(m){if(zt(m)&&o.length<5)return o+=String.fromCodePoint(m),e.consume(m),f;if(m===58){let b=o.toLowerCase();if(b==="http"||b==="https")return e.consume(m),d}return l(m)}function d(m){return m===47?(e.consume(m),s?h:(s=!0,d)):l(m)}function h(m){return m===null||uc(m)||Xe(m)||Ai(m)||Sc(m)?l(m):e.attempt(u8,e.attempt(f8,y),l)(m)}function y(m){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(m)}}function Yk(e,n,l){let r=0;return o;function o(u){return(u===87||u===119)&&r<3?(r++,e.consume(u),o):u===46&&r===3?(e.consume(u),s):l(u)}function s(u){return u===null?l(u):n(u)}}function Qk(e,n,l){let r,o,s;return u;function u(h){return h===46||h===95?e.check(d8,d,f)(h):h===null||Xe(h)||Ai(h)||h!==45&&Sc(h)?d(h):(s=!0,e.consume(h),u)}function f(h){return h===95?r=!0:(o=r,r=void 0),e.consume(h),u}function d(h){return o||r||!s?l(h):n(h)}}function Wk(e,n){let l=0,r=0;return o;function o(u){return u===40?(l++,e.consume(u),o):u===41&&r<l?s(u):u===33||u===34||u===38||u===39||u===41||u===42||u===44||u===46||u===58||u===59||u===60||u===63||u===93||u===95||u===126?e.check(d8,n,s)(u):u===null||Xe(u)||Ai(u)?n(u):(e.consume(u),o)}function s(u){return u===41&&r++,e.consume(u),o}}function Jk(e,n,l){return r;function r(f){return f===33||f===34||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===63||f===95||f===126?(e.consume(f),r):f===38?(e.consume(f),s):f===93?(e.consume(f),o):f===60||f===null||Xe(f)||Ai(f)?n(f):l(f)}function o(f){return f===null||f===40||f===91||Xe(f)||Ai(f)?n(f):r(f)}function s(f){return zt(f)?u(f):l(f)}function u(f){return f===59?(e.consume(f),r):zt(f)?(e.consume(f),u):l(f)}}function ex(e,n,l){return r;function r(s){return e.consume(s),o}function o(s){return Dt(s)?l(s):n(s)}}function h8(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Xe(e)}function p8(e){return!zt(e)}function g8(e){return!(e===47||o1(e))}function o1(e){return e===43||e===45||e===46||e===95||Dt(e)}function H1(e){let n=e.length,l=!1;for(;n--;){let r=e[n][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){l=!0;break}if(r._gfmAutolinkLiteralWalkedInto){l=!1;break}}return e.length>0&&!l&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}const tx={tokenize:cx,partial:!0};function nx(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:ax,continuation:{tokenize:ox},exit:sx}},text:{91:{name:"gfmFootnoteCall",tokenize:rx},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:lx,resolveTo:ix}}}}function lx(e,n,l){let r=this,o=r.events.length,s=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),u;for(;o--;){let d=r.events[o][1];if(d.type==="labelImage"){u=d;break}if(d.type==="gfmFootnoteCall"||d.type==="labelLink"||d.type==="label"||d.type==="image"||d.type==="link")break}return f;function f(d){if(!u||!u._balanced)return l(d);let h=Nn(r.sliceSerialize({start:u.end,end:r.now()}));return h.codePointAt(0)!==94||!s.includes(h.slice(1))?l(d):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),n(d))}}function ix(e,n){let l=e.length;for(;l--;)if(e[l][1].type==="labelImage"&&e[l][0]==="enter"){e[l][1];break}e[l+1][1].type="data",e[l+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},e[l+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[l+3][1].end),end:Object.assign({},e[l+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;let s={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},u={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},f=[e[l+1],e[l+2],["enter",r,n],e[l+3],e[l+4],["enter",o,n],["exit",o,n],["enter",s,n],["enter",u,n],["exit",u,n],["exit",s,n],e[e.length-2],e[e.length-1],["exit",r,n]];return e.splice(l,e.length-l+1,...f),e}function rx(e,n,l){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),s=0,u;return f;function f(m){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),d}function d(m){return m===94?(e.enter("gfmFootnoteCallMarker"),e.consume(m),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",h):l(m)}function h(m){if(s>999||m===93&&!u||m===null||m===91||Xe(m))return l(m);if(m===93){e.exit("chunkString");let b=e.exit("gfmFootnoteCallString");return o.includes(Nn(r.sliceSerialize(b)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):l(m)}return Xe(m)||(u=!0),s++,e.consume(m),m===92?y:h}function y(m){return m===91||m===92||m===93?(e.consume(m),s++,h):h(m)}}function ax(e,n,l){let r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),s,u=0,f;return d;function d(B){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(B),e.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(B){return B===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(B),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",y):l(B)}function y(B){if(u>999||B===93&&!f||B===null||B===91||Xe(B))return l(B);if(B===93){e.exit("chunkString");let R=e.exit("gfmFootnoteDefinitionLabelString");return s=Nn(r.sliceSerialize(R)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(B),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),b}return Xe(B)||(f=!0),u++,e.consume(B),B===92?m:y}function m(B){return B===91||B===92||B===93?(e.consume(B),u++,y):y(B)}function b(B){return B===58?(e.enter("definitionMarker"),e.consume(B),e.exit("definitionMarker"),o.includes(s)||o.push(s),Le(e,v,"gfmFootnoteDefinitionWhitespace")):l(B)}function v(B){return n(B)}}function ox(e,n,l){return e.check(fo,n,e.attempt(tx,n,l))}function sx(e){e.exit("gfmFootnoteDefinition")}function cx(e,n,l){let r=this;return Le(e,o,"gfmFootnoteDefinitionIndent",5);function o(s){let u=r.events[r.events.length-1];return u&&u[1].type==="gfmFootnoteDefinitionIndent"&&u[2].sliceSerialize(u[1],!0).length===4?n(s):l(s)}}function ux(e){let n=(e||{}).singleTilde,l={name:"strikethrough",tokenize:o,resolveAll:r};return n??=!0,{text:{126:l},insideSpan:{null:[l]},attentionMarkers:{null:[126]}};function r(s,u){let f=-1;for(;++f<s.length;)if(s[f][0]==="enter"&&s[f][1].type==="strikethroughSequenceTemporary"&&s[f][1]._close){let d=f;for(;d--;)if(s[d][0]==="exit"&&s[d][1].type==="strikethroughSequenceTemporary"&&s[d][1]._open&&s[f][1].end.offset-s[f][1].start.offset===s[d][1].end.offset-s[d][1].start.offset){s[f][1].type="strikethroughSequence",s[d][1].type="strikethroughSequence";let h={type:"strikethrough",start:Object.assign({},s[d][1].start),end:Object.assign({},s[f][1].end)},y={type:"strikethroughText",start:Object.assign({},s[d][1].end),end:Object.assign({},s[f][1].start)},m=[["enter",h,u],["enter",s[d][1],u],["exit",s[d][1],u],["enter",y,u]],b=u.parser.constructs.insideSpan.null;b&&an(m,m.length,0,_c(b,s.slice(d+1,f),u)),an(m,m.length,0,[["exit",y,u],["enter",s[f][1],u],["exit",s[f][1],u],["exit",h,u]]),an(s,d-1,f-d+3,m),f=d+m.length-2;break}}for(f=-1;++f<s.length;)s[f][1].type==="strikethroughSequenceTemporary"&&(s[f][1].type="data");return s}function o(s,u,f){let d=this.previous,h=this.events,y=0;return m;function m(v){return d===126&&h[h.length-1][1].type!=="characterEscape"?f(v):(s.enter("strikethroughSequenceTemporary"),b(v))}function b(v){let B=Nr(d);if(v===126)return y>1?f(v):(s.consume(v),y++,b);if(y<2&&!n)return f(v);let R=s.exit("strikethroughSequenceTemporary"),z=Nr(v);return R._open=!z||z===2&&!!B,R._close=!B||B===2&&!!z,u(v)}}}var fx=class{constructor(){this.map=[]}add(n,l,r){dx(this,n,l,r)}consume(n){if(this.map.sort(function(s,u){return s[0]-u[0]}),this.map.length===0)return;let l=this.map.length,r=[];for(;l>0;)--l,r.push(n.slice(this.map[l][0]+this.map[l][1]),this.map[l][2]),n.length=this.map[l][0];r.push(n.slice()),n.length=0;let o=r.pop();for(;o;){for(let s of o)n.push(s);o=r.pop()}this.map.length=0}};function dx(e,n,l,r){let o=0;if(!(l===0&&r.length===0)){for(;o<e.map.length;){if(e.map[o][0]===n){e.map[o][1]+=l,e.map[o][2].push(...r);return}o+=1}e.map.push([n,l,r])}}function hx(e,n){let l=!1,r=[];for(;n<e.length;){let o=e[n];if(l){if(o[0]==="enter")o[1].type==="tableContent"&&r.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(o[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){let s=r.length-1;r[s]=r[s]==="left"?"center":"right"}}else if(o[1].type==="tableDelimiterRow")break}else o[0]==="enter"&&o[1].type==="tableDelimiterRow"&&(l=!0);n+=1}return r}function px(){return{flow:{null:{name:"table",tokenize:gx,resolveAll:yx}}}}function gx(e,n,l){let r=this,o=0,s=0,u;return f;function f(_){let Z=r.events.length-1;for(;Z>-1;){let pe=r.events[Z][1].type;if(pe==="lineEnding"||pe==="linePrefix")Z--;else break}let V=Z>-1?r.events[Z][1].type:null,le=V==="tableHead"||V==="tableRow"?M:d;return le===M&&r.parser.lazy[r.now().line]?l(_):le(_)}function d(_){return e.enter("tableHead"),e.enter("tableRow"),h(_)}function h(_){return _===124||(u=!0,s+=1),y(_)}function y(_){return _===null?l(_):fe(_)?s>1?(s=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(_),e.exit("lineEnding"),v):l(_):Ae(_)?Le(e,y,"whitespace")(_):(s+=1,u&&(u=!1,o+=1),_===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),u=!0,y):(e.enter("data"),m(_)))}function m(_){return _===null||_===124||Xe(_)?(e.exit("data"),y(_)):(e.consume(_),_===92?b:m)}function b(_){return _===92||_===124?(e.consume(_),m):m(_)}function v(_){return r.interrupt=!1,r.parser.lazy[r.now().line]?l(_):(e.enter("tableDelimiterRow"),u=!1,Ae(_)?Le(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(_):B(_))}function B(_){return _===45||_===58?z(_):_===124?(u=!0,e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),R):ne(_)}function R(_){return Ae(_)?Le(e,z,"whitespace")(_):z(_)}function z(_){return _===58?(s+=1,u=!0,e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),C):_===45?(s+=1,C(_)):_===null||fe(_)?te(_):ne(_)}function C(_){return _===45?(e.enter("tableDelimiterFiller"),X(_)):ne(_)}function X(_){return _===45?(e.consume(_),X):_===58?(u=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(_),e.exit("tableDelimiterMarker"),q):(e.exit("tableDelimiterFiller"),q(_))}function q(_){return Ae(_)?Le(e,te,"whitespace")(_):te(_)}function te(_){return _===124?B(_):_===null||fe(_)?!u||o!==s?ne(_):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(_)):ne(_)}function ne(_){return l(_)}function M(_){return e.enter("tableRow"),K(_)}function K(_){return _===124?(e.enter("tableCellDivider"),e.consume(_),e.exit("tableCellDivider"),K):_===null||fe(_)?(e.exit("tableRow"),n(_)):Ae(_)?Le(e,K,"whitespace")(_):(e.enter("data"),I(_))}function I(_){return _===null||_===124||Xe(_)?(e.exit("data"),K(_)):(e.consume(_),_===92?W:I)}function W(_){return _===92||_===124?(e.consume(_),I):I(_)}}function yx(e,n){let l=-1,r=!0,o=0,s=[0,0,0,0],u=[0,0,0,0],f=!1,d=0,h,y,m,b=new fx;for(;++l<e.length;){let v=e[l],B=v[1];v[0]==="enter"?B.type==="tableHead"?(f=!1,d!==0&&(n4(b,n,d,h,y),y=void 0,d=0),h={type:"table",start:Object.assign({},B.start),end:Object.assign({},B.end)},b.add(l,0,[["enter",h,n]])):B.type==="tableRow"||B.type==="tableDelimiterRow"?(r=!0,m=void 0,s=[0,0,0,0],u=[0,l+1,0,0],f&&(f=!1,y={type:"tableBody",start:Object.assign({},B.start),end:Object.assign({},B.end)},b.add(l,0,[["enter",y,n]])),o=B.type==="tableDelimiterRow"?2:y?3:1):o&&(B.type==="data"||B.type==="tableDelimiterMarker"||B.type==="tableDelimiterFiller")?(r=!1,u[2]===0&&(s[1]!==0&&(u[0]=u[1],m=Ms(b,n,s,o,void 0,m),s=[0,0,0,0]),u[2]=l)):B.type==="tableCellDivider"&&(r?r=!1:(s[1]!==0&&(u[0]=u[1],m=Ms(b,n,s,o,void 0,m)),s=u,u=[s[1],l,0,0])):B.type==="tableHead"?(f=!0,d=l):B.type==="tableRow"||B.type==="tableDelimiterRow"?(d=l,s[1]===0?u[1]!==0&&(m=Ms(b,n,u,o,l,m)):(u[0]=u[1],m=Ms(b,n,s,o,l,m)),o=0):o&&(B.type==="data"||B.type==="tableDelimiterMarker"||B.type==="tableDelimiterFiller")&&(u[3]=l)}for(d!==0&&n4(b,n,d,h,y),b.consume(n.events),l=-1;++l<n.events.length;){let v=n.events[l];v[0]==="enter"&&v[1].type==="table"&&(v[1]._align=hx(n.events,l))}return e}function Ms(e,n,l,r,o,s){let u=r===1?"tableHeader":r===2?"tableDelimiter":"tableData";l[0]!==0&&(s.end=Object.assign({},Br(n.events,l[0])),e.add(l[0],0,[["exit",s,n]]));let f=Br(n.events,l[1]);if(s={type:u,start:Object.assign({},f),end:Object.assign({},f)},e.add(l[1],0,[["enter",s,n]]),l[2]!==0){let d=Br(n.events,l[2]),h=Br(n.events,l[3]),y={type:"tableContent",start:Object.assign({},d),end:Object.assign({},h)};if(e.add(l[2],0,[["enter",y,n]]),r!==2){let m=n.events[l[2]],b=n.events[l[3]];if(m[1].end=Object.assign({},b[1].end),m[1].type="chunkText",m[1].contentType="text",l[3]>l[2]+1){let v=l[2]+1,B=l[3]-l[2]-1;e.add(v,B,[])}}e.add(l[3]+1,0,[["exit",y,n]])}return o!==void 0&&(s.end=Object.assign({},Br(n.events,o)),e.add(o,0,[["exit",s,n]]),s=void 0),s}function n4(e,n,l,r,o){let s=[],u=Br(n.events,l);o&&(o.end=Object.assign({},u),s.push(["exit",o,n])),r.end=Object.assign({},u),s.push(["exit",r,n]),e.add(l+1,0,s)}function Br(e,n){let l=e[n],r=l[0]==="enter"?"start":"end";return l[1][r]}const mx={name:"tasklistCheck",tokenize:bx};function Tx(){return{text:{91:mx}}}function bx(e,n,l){let r=this;return o;function o(d){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?l(d):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),s)}function s(d){return Xe(d)?(e.enter("taskListCheckValueUnchecked"),e.consume(d),e.exit("taskListCheckValueUnchecked"),u):d===88||d===120?(e.enter("taskListCheckValueChecked"),e.consume(d),e.exit("taskListCheckValueChecked"),u):l(d)}function u(d){return d===93?(e.enter("taskListCheckMarker"),e.consume(d),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),f):l(d)}function f(d){return fe(d)?n(d):Ae(d)?e.check({tokenize:vx},n,l)(d):l(d)}}function vx(e,n,l){return Le(e,r,"whitespace");function r(o){return o===null?l(o):n(o)}}function kx(e){return R3([Hk(),nx(),ux(e),px(),Tx()])}const xx={};function Bx(e){let n=this,l=e||xx,r=n.data(),o=r.micromarkExtensions||=[],s=r.fromMarkdownExtensions||=[],u=r.toMarkdownExtensions||=[];o.push(kx(l)),s.push($k()),u.push(jk(l))}const wx=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i,Ex=/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)(\/.*)?\]/i,Cx=({legacyTitle:e=!1,tagName:n="div"}={})=>l=>{U1(l,"blockquote",(r,o,s)=>{let u="",f="",d=!0,h=r.children.map(y=>{if(d&&y.type==="paragraph"){let m=y.children[0],b=m.type==="text"?m.value:"",v=e?Ex:wx,B=b.match(v);if(B&&(d=!1,u=B[1].toLocaleLowerCase(),f=e&&B[2]||u.toLocaleUpperCase(),b.includes(`
`)&&(y.children[0]={type:"text",value:b.replace(v,"").replace(/^\n+/,"")}),!b.includes(`
`))){let R=[];y.children.forEach((z,C)=>{C!=0&&(C==1&&z.type==="break"||R.push(z))}),y.children=[...R]}}return y});u&&(r.data={hName:n,hProperties:{className:["markdown-alert",`markdown-alert-${u}`],dir:"auto"}},h.unshift({type:"paragraph",children:[Ax(u),{type:"text",value:f.replace(/^\//,"")}],data:{hProperties:{className:"markdown-alert-title",dir:"auto"}}})),r.children=[...h]})};function Ax(e){return{type:"emphasis",data:{hName:"svg",hProperties:{className:["octicon"],viewBox:"0 0 16 16",width:"16",height:"16",ariaHidden:"true"}},children:[{type:"emphasis",data:{hName:"path",hProperties:{d:Sx[e]??""}},children:[]}]}}const Sx={note:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",tip:"M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z",important:"M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",warning:"M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",caution:"M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"};function Dx(e){let n=this;n.parser=l;function l(r){return Z3(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function _x(e,n){let l={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,l),e.applyData(n,l)}function Ox(e,n){let l={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,l),[e.applyData(n,l),{type:"text",value:`
`}]}function Nx(e,n){let l=n.value?n.value+`
`:"",r={},o=n.lang?n.lang.split(/\s+/):[];o.length>0&&(r.className=["language-"+o[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:l}]};return n.meta&&(s.data={meta:n.meta}),e.patch(n,s),s=e.applyData(n,s),s={type:"element",tagName:"pre",properties:{},children:[s]},e.patch(n,s),s}function Lx(e,n){let l={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function Rx(e,n){let l={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function zx(e,n){let l=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),o=Gr(r.toLowerCase()),s=e.footnoteOrder.indexOf(r),u,f=e.footnoteCounts.get(r);f===void 0?(f=0,e.footnoteOrder.push(r),u=e.footnoteOrder.length):u=s+1,f+=1,e.footnoteCounts.set(r,f);let d={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+o,id:l+"fnref-"+o+(f>1?"-"+f:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(u)}]};e.patch(n,d);let h={type:"element",tagName:"sup",properties:{},children:[d]};return e.patch(n,h),e.applyData(n,h)}function Px(e,n){let l={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function Fx(e,n){if(e.options.allowDangerousHtml){let l={type:"raw",value:n.value};return e.patch(n,l),e.applyData(n,l)}}function y8(e,n){let l=n.referenceType,r="]";if(l==="collapsed"?r+="[]":l==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];let o=e.all(n),s=o[0];s&&s.type==="text"?s.value="["+s.value:o.unshift({type:"text",value:"["});let u=o[o.length-1];return u&&u.type==="text"?u.value+=r:o.push({type:"text",value:r}),o}function Ix(e,n){let l=String(n.identifier).toUpperCase(),r=e.definitionById.get(l);if(!r)return y8(e,n);let o={src:Gr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(o.title=r.title);let s={type:"element",tagName:"img",properties:o,children:[]};return e.patch(n,s),e.applyData(n,s)}function Mx(e,n){let l={src:Gr(n.url)};n.alt!==null&&n.alt!==void 0&&(l.alt=n.alt),n.title!==null&&n.title!==void 0&&(l.title=n.title);let r={type:"element",tagName:"img",properties:l,children:[]};return e.patch(n,r),e.applyData(n,r)}function Gx(e,n){let l={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,l);let r={type:"element",tagName:"code",properties:{},children:[l]};return e.patch(n,r),e.applyData(n,r)}function qx(e,n){let l=String(n.identifier).toUpperCase(),r=e.definitionById.get(l);if(!r)return y8(e,n);let o={href:Gr(r.url||"")};r.title!==null&&r.title!==void 0&&(o.title=r.title);let s={type:"element",tagName:"a",properties:o,children:e.all(n)};return e.patch(n,s),e.applyData(n,s)}function $x(e,n){let l={href:Gr(n.url)};n.title!==null&&n.title!==void 0&&(l.title=n.title);let r={type:"element",tagName:"a",properties:l,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function jx(e,n,l){let r=e.all(n),o=l?Ux(l):m8(n),s={},u=[];if(typeof n.checked=="boolean"){let y=r[0],m;y&&y.type==="element"&&y.tagName==="p"?m=y:(m={type:"element",tagName:"p",properties:{},children:[]},r.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let f=-1;for(;++f<r.length;){let y=r[f];(o||f!==0||y.type!=="element"||y.tagName!=="p")&&u.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!o?u.push(...y.children):u.push(y)}let d=r[r.length-1];d&&(o||d.type!=="element"||d.tagName!=="p")&&u.push({type:"text",value:`
`});let h={type:"element",tagName:"li",properties:s,children:u};return e.patch(n,h),e.applyData(n,h)}function Ux(e){let n=!1;if(e.type==="list"){n=e.spread||!1;let l=e.children,r=-1;for(;!n&&++r<l.length;)n=m8(l[r])}return n}function m8(e){return e.spread??e.children.length>1}function Zx(e,n){let l={},r=e.all(n),o=-1;for(typeof n.start=="number"&&n.start!==1&&(l.start=n.start);++o<r.length;){let u=r[o];if(u.type==="element"&&u.tagName==="li"&&u.properties&&Array.isArray(u.properties.className)&&u.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}let s={type:"element",tagName:n.ordered?"ol":"ul",properties:l,children:e.wrap(r,!0)};return e.patch(n,s),e.applyData(n,s)}function Hx(e,n){let l={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function Kx(e,n){let l={type:"root",children:e.wrap(e.all(n))};return e.patch(n,l),e.applyData(n,l)}function Vx(e,n){let l={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function Xx(e,n){let l=e.all(n),r=l.shift(),o=[];if(r){let u={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],u),o.push(u)}if(l.length>0){let u={type:"element",tagName:"tbody",properties:{},children:e.wrap(l,!0)},f=d3(n.children[1]),d=f3(n.children[n.children.length-1]);f&&d&&(u.position={start:f,end:d}),o.push(u)}let s={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(n,s),e.applyData(n,s)}function Yx(e,n,l){let r=l?l.children:void 0,o=(r?r.indexOf(n):1)===0?"th":"td",s=l&&l.type==="table"?l.align:void 0,u=s?s.length:n.children.length,f=-1,d=[];for(;++f<u;){let y=n.children[f],m={},b=s?s[f]:void 0;b&&(m.align=b);let v={type:"element",tagName:o,properties:m,children:[]};y&&(v.children=e.all(y),e.patch(y,v),v=e.applyData(y,v)),d.push(v)}let h={type:"element",tagName:"tr",properties:{},children:e.wrap(d,!0)};return e.patch(n,h),e.applyData(n,h)}function Qx(e,n){let l={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,l),e.applyData(n,l)}function Wx(e){let n=String(e),l=/\r?\n|\r/g,r=l.exec(n),o=0,s=[];for(;r;)s.push(l4(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=l.exec(n);return s.push(l4(n.slice(o),o>0,!1)),s.join("")}function l4(e,n,l){let r=0,o=e.length;if(n){let s=e.codePointAt(r);for(;s===9||s===32;)r++,s=e.codePointAt(r)}if(l){let s=e.codePointAt(o-1);for(;s===9||s===32;)o--,s=e.codePointAt(o-1)}return o>r?e.slice(r,o):""}function Jx(e,n){let l={type:"text",value:Wx(String(n.value))};return e.patch(n,l),e.applyData(n,l)}function eB(e,n){let l={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,l),e.applyData(n,l)}const tB={blockquote:_x,break:Ox,code:Nx,delete:Lx,emphasis:Rx,footnoteReference:zx,heading:Px,html:Fx,imageReference:Ix,image:Mx,inlineCode:Gx,linkReference:qx,link:$x,listItem:jx,list:Zx,paragraph:Hx,root:Kx,strong:Vx,table:Xx,tableCell:Qx,tableRow:Yx,text:Jx,thematicBreak:eB,toml:Gs,yaml:Gs,definition:Gs,footnoteDefinition:Gs};function Gs(){}function nB(e,n){let l=[{type:"text",value:"↩"}];return n>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),l}function lB(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function iB(e){let n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",l=e.options.footnoteBackContent||nB,r=e.options.footnoteBackLabel||lB,o=e.options.footnoteLabel||"Footnotes",s=e.options.footnoteLabelTagName||"h2",u=e.options.footnoteLabelProperties||{className:["sr-only"]},f=[],d=-1;for(;++d<e.footnoteOrder.length;){let h=e.footnoteById.get(e.footnoteOrder[d]);if(!h)continue;let y=e.all(h),m=String(h.identifier).toUpperCase(),b=Gr(m.toLowerCase()),v=0,B=[],R=e.footnoteCounts.get(m);for(;R!==void 0&&++v<=R;){B.length>0&&B.push({type:"text",value:" "});let X=typeof l=="string"?l:l(d,v);typeof X=="string"&&(X={type:"text",value:X}),B.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+b+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(d,v),className:["data-footnote-backref"]},children:Array.isArray(X)?X:[X]})}let z=y[y.length-1];if(z&&z.type==="element"&&z.tagName==="p"){let X=z.children[z.children.length-1];X&&X.type==="text"?X.value+=" ":z.children.push({type:"text",value:" "}),z.children.push(...B)}else y.push(...B);let C={type:"element",tagName:"li",properties:{id:n+"fn-"+b},children:e.wrap(y,!0)};e.patch(h,C),f.push(C)}if(f.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Wa(u),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(f,!0)},{type:"text",value:`
`}]}}const s1={}.hasOwnProperty,rB={};function aB(e,n){let l=n||rB,r=new Map,o=new Map,s={all:f,applyData:sB,definitionById:r,footnoteById:o,footnoteCounts:new Map,footnoteOrder:[],handlers:{...tB,...l.handlers},one:u,options:l,patch:oB,wrap:uB};return U1(e,function(d){if(d.type==="definition"||d.type==="footnoteDefinition"){let h=d.type==="definition"?r:o,y=String(d.identifier).toUpperCase();h.has(y)||h.set(y,d)}}),s;function u(d,h){let y=d.type,m=s.handlers[y];if(s1.call(s.handlers,y)&&m)return m(s,d,h);if(s.options.passThrough&&s.options.passThrough.includes(y)){if("children"in d){let{children:b,...v}=d,B=Wa(v);return B.children=s.all(d),B}return Wa(d)}return(s.options.unknownHandler||cB)(s,d,h)}function f(d){let h=[];if("children"in d){let y=d.children,m=-1;for(;++m<y.length;){let b=s.one(y[m],d);if(b){if(m&&y[m-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=i4(b.value)),!Array.isArray(b)&&b.type==="element")){let v=b.children[0];v&&v.type==="text"&&(v.value=i4(v.value))}Array.isArray(b)?h.push(...b):h.push(b)}}}return h}}function oB(e,n){e.position&&(n.position=p3(e))}function sB(e,n){let l=n;if(e&&e.data){let r=e.data.hName,o=e.data.hChildren,s=e.data.hProperties;typeof r=="string"&&(l.type==="element"?l.tagName=r:l={type:"element",tagName:r,properties:{},children:"children"in l?l.children:[l]}),l.type==="element"&&s&&Object.assign(l.properties,Wa(s)),"children"in l&&l.children&&o!=null&&(l.children=o)}return l}function cB(e,n){let l=n.data||{},r="value"in n&&!(s1.call(l,"hProperties")||s1.call(l,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function uB(e,n){let l=[],r=-1;for(n&&l.push({type:"text",value:`
`});++r<e.length;)r&&l.push({type:"text",value:`
`}),l.push(e[r]);return n&&e.length>0&&l.push({type:"text",value:`
`}),l}function i4(e){let n=0,l=e.charCodeAt(n);for(;l===9||l===32;)n++,l=e.charCodeAt(n);return e.slice(n)}function r4(e,n){let l=aB(e,n),r=l.one(e,void 0),o=iB(l),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return o&&s.children.push({type:"text",value:`
`},o),s}function fB(e,n){return e&&"run"in e?async function(l,r){let o=r4(l,{file:r,...n});await e.run(o,r)}:function(l,r){return r4(l,{file:r,...e||n})}}function a4(e){if(e)throw e}var dB=it(((e,n)=>{var l=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,u=function(m){return typeof Array.isArray=="function"?Array.isArray(m):r.call(m)==="[object Array]"},f=function(m){if(!m||r.call(m)!=="[object Object]")return!1;var b=l.call(m,"constructor"),v=m.constructor&&m.constructor.prototype&&l.call(m.constructor.prototype,"isPrototypeOf");if(m.constructor&&!b&&!v)return!1;for(var B in m);return B===void 0||l.call(m,B)},d=function(m,b){o&&b.name==="__proto__"?o(m,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):m[b.name]=b.newValue},h=function(m,b){if(b==="__proto__"){if(!l.call(m,b))return;if(s)return s(m,b).value}return m[b]};n.exports=function y(){var m,b,v,B,R,z,C=arguments[0],X=1,q=arguments.length,te=!1;for(typeof C=="boolean"&&(te=C,C=arguments[1]||{},X=2),(C==null||typeof C!="object"&&typeof C!="function")&&(C={});X<q;++X)if(m=arguments[X],m!=null)for(b in m)v=h(C,b),B=h(m,b),C!==B&&(te&&B&&(f(B)||(R=u(B)))?(R?(R=!1,z=v&&u(v)?v:[]):z=v&&f(v)?v:{},d(C,{name:b,newValue:y(te,z,B)})):B!==void 0&&d(C,{name:b,newValue:B}));return C}}));function c1(e){if(typeof e!="object"||!e)return!1;let n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function hB(){let e=[],n={run:l,use:r};return n;function l(...o){let s=-1,u=o.pop();if(typeof u!="function")throw TypeError("Expected function as last argument, not "+u);f(null,...o);function f(d,...h){let y=e[++s],m=-1;if(d){u(d);return}for(;++m<o.length;)(h[m]===null||h[m]===void 0)&&(h[m]=o[m]);o=h,y?pB(y,f)(...h):u(null,...h)}}function r(o){if(typeof o!="function")throw TypeError("Expected `middelware` to be a function, not "+o);return e.push(o),n}}function pB(e,n){let l;return r;function r(...u){let f=e.length>u.length,d;f&&u.push(o);try{d=e.apply(this,u)}catch(h){let y=h;if(f&&l)throw y;return o(y)}f||(d&&d.then&&typeof d.then=="function"?d.then(s,o):d instanceof Error?o(d):s(d))}function o(u,...f){l||(l=!0,n(u,...f))}function s(u){o(null,u)}}var Ht=class extends Error{constructor(n,l,r){super(),typeof l=="string"&&(r=l,l=void 0);let o="",s={},u=!1;if(l&&(s="line"in l&&"column"in l||"start"in l&&"end"in l?{place:l}:"type"in l?{ancestors:[l],place:l.position}:{...l}),typeof n=="string"?o=n:!s.cause&&n&&(u=!0,o=n.message,s.cause=n),!s.ruleId&&!s.source&&typeof r=="string"){let d=r.indexOf(":");d===-1?s.ruleId=r:(s.source=r.slice(0,d),s.ruleId=r.slice(d+1))}if(!s.place&&s.ancestors&&s.ancestors){let d=s.ancestors[s.ancestors.length-1];d&&(s.place=d.position)}let f=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=f?f.column:void 0,this.fatal=void 0,this.file,this.message=o,this.line=f?f.line:void 0,this.name=Xa(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=u&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual,this.expected,this.note,this.url}};Ht.prototype.file="",Ht.prototype.name="",Ht.prototype.reason="",Ht.prototype.message="",Ht.prototype.stack="",Ht.prototype.column=void 0,Ht.prototype.line=void 0,Ht.prototype.ancestors=void 0,Ht.prototype.cause=void 0,Ht.prototype.fatal=void 0,Ht.prototype.place=void 0,Ht.prototype.ruleId=void 0,Ht.prototype.source=void 0;const qn={basename:gB,dirname:yB,extname:mB,join:TB,sep:"/"};function gB(e,n){if(n!==void 0&&typeof n!="string")throw TypeError('"ext" argument must be a string');ho(e);let l=0,r=-1,o=e.length,s;if(n===void 0||n.length===0||n.length>e.length){for(;o--;)if(e.codePointAt(o)===47){if(s){l=o+1;break}}else r<0&&(s=!0,r=o+1);return r<0?"":e.slice(l,r)}if(n===e)return"";let u=-1,f=n.length-1;for(;o--;)if(e.codePointAt(o)===47){if(s){l=o+1;break}}else u<0&&(s=!0,u=o+1),f>-1&&(e.codePointAt(o)===n.codePointAt(f--)?f<0&&(r=o):(f=-1,r=u));return l===r?r=u:r<0&&(r=e.length),e.slice(l,r)}function yB(e){if(ho(e),e.length===0)return".";let n=-1,l=e.length,r;for(;--l;)if(e.codePointAt(l)===47){if(r){n=l;break}}else r||=!0;return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function mB(e){ho(e);let n=e.length,l=-1,r=0,o=-1,s=0,u;for(;n--;){let f=e.codePointAt(n);if(f===47){if(u){r=n+1;break}continue}l<0&&(u=!0,l=n+1),f===46?o<0?o=n:s!==1&&(s=1):o>-1&&(s=-1)}return o<0||l<0||s===0||s===1&&o===l-1&&o===r+1?"":e.slice(o,l)}function TB(...e){let n=-1,l;for(;++n<e.length;)ho(e[n]),e[n]&&(l=l===void 0?e[n]:l+"/"+e[n]);return l===void 0?".":bB(l)}function bB(e){ho(e);let n=e.codePointAt(0)===47,l=vB(e,!n);return l.length===0&&!n&&(l="."),l.length>0&&e.codePointAt(e.length-1)===47&&(l+="/"),n?"/"+l:l}function vB(e,n){let l="",r=0,o=-1,s=0,u=-1,f,d;for(;++u<=e.length;){if(u<e.length)f=e.codePointAt(u);else{if(f===47)break;f=47}if(f===47){if(!(o===u-1||s===1))if(o!==u-1&&s===2){if(l.length<2||r!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(d=l.lastIndexOf("/"),d!==l.length-1){d<0?(l="",r=0):(l=l.slice(0,d),r=l.length-1-l.lastIndexOf("/")),o=u,s=0;continue}}else if(l.length>0){l="",r=0,o=u,s=0;continue}}n&&(l=l.length>0?l+"/..":"..",r=2)}else l.length>0?l+="/"+e.slice(o+1,u):l=e.slice(o+1,u),r=u-o-1;o=u,s=0}else f===46&&s>-1?s++:s=-1}return l}function ho(e){if(typeof e!="string")throw TypeError("Path must be a string. Received "+JSON.stringify(e))}const kB={cwd:xB};function xB(){return"/"}function u1(e){return!!(typeof e=="object"&&e&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function BB(e){if(typeof e=="string")e=new URL(e);else if(!u1(e)){let n=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){let n=TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return wB(e)}function wB(e){if(e.hostname!==""){let r=TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let n=e.pathname,l=-1;for(;++l<n.length;)if(n.codePointAt(l)===37&&n.codePointAt(l+1)===50){let r=n.codePointAt(l+2);if(r===70||r===102){let o=TypeError("File URL path must not include encoded / characters");throw o.code="ERR_INVALID_FILE_URL_PATH",o}}return decodeURIComponent(n)}const Ad=["history","path","basename","stem","extname","dirname"];var EB=class{constructor(n){let l;l=n?u1(n)?{path:n}:typeof n=="string"||CB(n)?{value:n}:n:{},this.cwd="cwd"in l?"":kB.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Ad.length;){let s=Ad[r];s in l&&l[s]!==void 0&&l[s]!==null&&(this[s]=s==="history"?[...l[s]]:l[s])}let o;for(o in l)Ad.includes(o)||(this[o]=l[o])}get basename(){return typeof this.path=="string"?qn.basename(this.path):void 0}set basename(n){Dd(n,"basename"),Sd(n,"basename"),this.path=qn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?qn.dirname(this.path):void 0}set dirname(n){o4(this.basename,"dirname"),this.path=qn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?qn.extname(this.path):void 0}set extname(n){if(Sd(n,"extname"),o4(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(n.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=qn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){u1(n)&&(n=BB(n)),Dd(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?qn.basename(this.path,this.extname):void 0}set stem(n){Dd(n,"stem"),Sd(n,"stem"),this.path=qn.join(this.dirname||"",n+(this.extname||""))}fail(n,l,r){let o=this.message(n,l,r);throw o.fatal=!0,o}info(n,l,r){let o=this.message(n,l,r);return o.fatal=void 0,o}message(n,l,r){let o=new Ht(n,l,r);return this.path&&(o.name=this.path+":"+o.name,o.file=this.path),o.fatal=!1,this.messages.push(o),o}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}};function Sd(e,n){if(e&&e.includes(qn.sep))throw Error("`"+n+"` cannot be a path: did not expect `"+qn.sep+"`")}function Dd(e,n){if(!e)throw Error("`"+n+"` cannot be empty")}function o4(e,n){if(!e)throw Error("Setting `"+n+"` requires `path` to be set too")}function CB(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const AB=(function(e){let n=this.constructor.prototype,l=n[e],r=function(){return l.apply(r,arguments)};return Object.setPrototypeOf(r,n),r});var _d=Un(dB());const SB={}.hasOwnProperty,DB=new class T8 extends AB{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=hB()}copy(){let n=new T8,l=-1;for(;++l<this.attachers.length;){let r=this.attachers[l];n.use(...r)}return n.data((0,_d.default)(!0,{},this.namespace)),n}data(n,l){return typeof n=="string"?arguments.length===2?(Ld("data",this.frozen),this.namespace[n]=l,this):SB.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Ld("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;let n=this;for(;++this.freezeIndex<this.attachers.length;){let[l,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);let o=l.call(n,...r);typeof o=="function"&&this.transformers.use(o)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(n){this.freeze();let l=qs(n),r=this.parser||this.Parser;return Od("parse",r),r(String(l),l)}process(n,l){let r=this;return this.freeze(),Od("process",this.parser||this.Parser),Nd("process",this.compiler||this.Compiler),l?o(void 0,l):new Promise(o);function o(s,u){let f=qs(n),d=r.parse(f);r.run(d,f,function(y,m,b){if(y||!m||!b)return h(y);let v=m,B=r.stringify(v,b);OB(B)?b.value=B:b.result=B,h(y,b)});function h(y,m){y||!m?u(y):s?s(m):l(void 0,m)}}}processSync(n){let l=!1,r;return this.freeze(),Od("processSync",this.parser||this.Parser),Nd("processSync",this.compiler||this.Compiler),this.process(n,o),c4("processSync","process",l),r;function o(s,u){l=!0,a4(s),r=u}}run(n,l,r){s4(n),this.freeze();let o=this.transformers;return!r&&typeof l=="function"&&(r=l,l=void 0),r?s(void 0,r):new Promise(s);function s(u,f){let d=qs(l);o.run(n,d,h);function h(y,m,b){let v=m||n;y?f(y):u?u(v):r(void 0,v,b)}}}runSync(n,l){let r=!1,o;return this.run(n,l,s),c4("runSync","run",r),o;function s(u,f){a4(u),o=f,r=!0}}stringify(n,l){this.freeze();let r=qs(l),o=this.compiler||this.Compiler;return Nd("stringify",o),s4(n),o(n,r)}use(n,...l){let r=this.attachers,o=this.namespace;if(Ld("use",this.frozen),n!=null)if(typeof n=="function")d(n,l);else if(typeof n=="object")Array.isArray(n)?f(n):u(n);else throw TypeError("Expected usable value, not `"+n+"`");return this;function s(h){if(typeof h=="function")d(h,[]);else if(typeof h=="object")if(Array.isArray(h)){let[y,...m]=h;d(y,m)}else u(h);else throw TypeError("Expected usable value, not `"+h+"`")}function u(h){if(!("plugins"in h)&&!("settings"in h))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");f(h.plugins),h.settings&&(o.settings=(0,_d.default)(!0,o.settings,h.settings))}function f(h){let y=-1;if(h!=null)if(Array.isArray(h))for(;++y<h.length;){let m=h[y];s(m)}else throw TypeError("Expected a list of plugins, not `"+h+"`")}function d(h,y){let m=-1,b=-1;for(;++m<r.length;)if(r[m][0]===h){b=m;break}if(b===-1)r.push([h,...y]);else if(y.length>0){let[v,...B]=y,R=r[b][1];c1(R)&&c1(v)&&(v=(0,_d.default)(!0,R,v)),r[b]=[h,v,...B]}}}}().freeze();function Od(e,n){if(typeof n!="function")throw TypeError("Cannot `"+e+"` without `parser`")}function Nd(e,n){if(typeof n!="function")throw TypeError("Cannot `"+e+"` without `compiler`")}function Ld(e,n){if(n)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function s4(e){if(!c1(e)||typeof e.type!="string")throw TypeError("Expected node, got `"+e+"`")}function c4(e,n,l){if(!l)throw Error("`"+e+"` finished async. Use `"+n+"` instead")}function qs(e){return _B(e)?e:new EB(e)}function _B(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function OB(e){return typeof e=="string"||NB(e)}function NB(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}function Dn(e,n){if(e===void 0||e==null){let l=typeof n=="function"?n():n;throw Error(l??`Expected defined value, but received ${e}`)}return e}function ye(e,n){if(!e)throw Error(n??"Invariant failed")}function b8(e){throw Error(`NonExhaustive value: ${e}`)}var v8=Un(x9());function f1(e,n){return e===n?0:Sn(e)?Sn(n)?(0,v8.default)(e,n):1:Sn(n)?-1:0}function LB(e=".",n=!1){return(l,r)=>{if(l===r)return 0;if(!l)return-1;if(!r)return 1;let o=l.split(e),s=r.split(e),u=Math.min(o.length,s.length);for(let d=0;d<u;d++){let h=o[d],y=s[d],m=(0,v8.default)(h,y);if(m!==0)return m}let f=o.length-s.length;return n?-1*f:f}}function K1(e){return e!=null&&typeof e=="string"}function TS(e){return!!e&&Array.isArray(e)&&e.length>0}function k8(e,n){return ye(typeof n=="string","Path must be string"),typeof e=="object"&&!!e&&e[n]!=null}function RB(e){return n=>k8(n,e)}function bS(...e){if(e.length===1&&typeof e[0]=="string")return RB(e[0]);let[n,l]=e;return k8(n,l)}function Ys(e){let n=e.lastIndexOf(".");return n>0?e.slice(0,n):null}function x8(e){let n=e.lastIndexOf(".");return n>0?e.slice(n+1):e}const Ya=e=>K1(e)?e:e.id;function ln(e,n){let l=Ya(e);return n?Ya(n).startsWith(l+"."):r=>{let o=Ya(r);return l.startsWith(o+".")}}function V1(e,n){if(!n)return o=>V1(e,o);let l=Ya(e),r=Ya(n);return l===r||r.startsWith(l+".")||l.startsWith(r+".")}function B8(e,n){return l=>ln(e,l)}function dc(e){return(K1(e)?e:e.id).split(".").length}function po(e,n){let l=e.split(".");if(l.length<2)return null;let r=n.split(".");if(r.length<2)return null;let o=[];for(let s=0;s<Math.min(l.length,r.length)-1&&l[s]===r[s];s++)o.push(l[s]);return o.length===0?null:o.join(".")}function _r(e){let n=e.split(".");if(n.pop(),!jn(n,2))return n;for(let l=1;l<n.length;l++)n[l]=n[l-1]+"."+n[l];return n.reverse()}function zB(e,n){let l=n;for(let r of e)r!==l&&ln(r,l)&&(l=r);return l===n?null:l}function eo(e){let n=[],l=[...e],r;for(;r=l.shift();){let o;for(;o=zB(l,r);)n.push(...l.splice(l.indexOf(o),1));n.push(r)}return n}function w8(e,n){if(!e||K1(e)){let r=e??"asc";return o=>w8(o,r)}let l=n==="desc"?-1:1;return e.map(r=>({item:r,fqn:r.id.split(".")})).sort((r,o)=>{if(r.fqn.length!==o.fqn.length)return(r.fqn.length-o.fqn.length)*l;for(let s=0;s<r.fqn.length;s++){let u=f1(r.fqn[s],o.fqn[s]);if(u!==0)return u}return 0}).map(({item:r})=>r)}function PB(e,n,l){let r=e.get(n);return r||(r=l(n),e.set(n,r)),r}function Ei(e,n){let l=n??e;ye(wc(l));function*r(o){for(let s of o)l(s)&&(yield s)}return n?r(e):r}function FB(e,n){let l=n??e;ye(wc(l));function r(o){for(let s of o)if(l(s))return s}return n?r(e):r}function vS(e,n){let l=e;ye(l>=0,"Count must be a non-negative number");function*r(o){let s=0;for(let u of o){if(s>=l)break;yield u,s++}}return n===void 0?o=>r(o):r(e)}function to(e){return e?u4(e):u4}function u4(e){let{value:n}=e[Symbol.iterator]().next();return n}function IB(e,n){let l=e;ye(wc(l));function*r(o){for(let s of o)yield l(s)}return n?r(e):r}function MB(e,n){let l=n??e;ye(wc(l));function r(o){for(let s of o)if(l(s))return!0;return!1}return n?r(e):r}function f4(e){return e?Array.from(e):n=>Array.from(n)}function GB(e){return e?new Set(e):n=>new Set(n)}function Fe(e,n,l){let r=typeof n=="symbol"?n:Symbol.for(n);return e.hasOwnProperty(r)||Object.defineProperty(e,r,{enumerable:!1,writable:!1,value:l()}),e[r]}function kS(...e){let n=100;return e.length===2?n=H5(e[0],e[1]):e.length===1&&(n=e[0]),new Promise(l=>{setTimeout(()=>{l("LIKEC4_DELAY")},n??100)})}function d1(...e){let n=new Set;for(let l of e)for(let r of l)n.add(r);return n}function Lr(e,...n){let l=new Set;if(e.size===0)return l;let r=jn(n,2)?(0,c3.intersection)(...n):n[0];if(r.size===0)return l;for(let o of e)r.has(o)&&l.add(o);return l}function h1(e,n){if(e.size===0)return new Set;if(n.size===0)return new Set(e);let l=new Set;for(let r of e)n.has(r)||l.add(r);return l}function p1(e,n){return e.size===n.size&&[...e].every(l=>n.has(l))}function qB(e,n){return(0,c3.symmetricDifference)(e,n)}function $B(e){return ye(typeof e=="object"&&N5(e),"objectHash: value must be an object"),D9(e)}function E8(e){let n=5381,l=e.length;ye(l>0,"stringHash: empty string");for(let r=0;r<l;r++)n=n*33^e.charCodeAt(r);return(n>>>0).toString(36)}function jB(){return DB().use(Dx).use(Bx).use(Cx).use(fB,{allowDangerousHtml:!0}).use(j9,W4({attributes:{"*":["className"],svg:["width","height","viewBox","fill","ariaHidden"],path:["d","fill","stroke","strokeWidth","strokeLinecap","strokeLinejoin"]},tagNames:["svg","g","path","div"]},e1)).use(aT,{allowDangerousHtml:!0})}function UB(e){return(""+jB().processSync(e)).trim()}function ZB(e){return Dc(Z3(e),{includeHtml:!1,includeImageAlt:!1})}const HB={tomato9:"#e54d2e"},KB={red9:"#e5484d"},VB={ruby9:"#e54666"},XB={crimson9:"#e93d82"},YB={pink9:"#d6409f"},QB={purple9:"#8e4ec6"},WB={violet9:"#6e56cf"},JB={indigo9:"#3e63dd"},ew={blue9:"#0090ff"},tw={teal9:"#12a594"},nw={grass9:"#46a758"},lw={lime9:"#bdee63"},iw={yellow9:"#ffe629"},rw={amber9:"#ffc53d"},aw={orange9:"#f76b15"},{min:ow,max:sw}=Math;var Ci=(e,n=0,l=1)=>ow(sw(n,e),l),X1=e=>{e._clipped=!1,e._unclipped=e.slice(0);for(let n=0;n<=3;n++)n<3?((e[n]<0||e[n]>255)&&(e._clipped=!0),e[n]=Ci(e[n],0,255)):n===3&&(e[n]=Ci(e[n],0,1));return e};const C8={};for(let e of["Boolean","Number","String","Function","Array","Date","RegExp","Undefined","Null"])C8[`[object ${e}]`]=e.toLowerCase();function we(e){return C8[Object.prototype.toString.call(e)]||"object"}var xe=(e,n=null)=>e.length>=3?Array.prototype.slice.call(e):we(e[0])=="object"&&n?n.split("").filter(l=>e[0][l]!==void 0).map(l=>e[0][l]):e[0].slice(0),qr=e=>{if(e.length<2)return null;let n=e.length-1;return we(e[n])=="string"?e[n].toLowerCase():null};const{PI:Lc,min:A8,max:S8}=Math,vn=e=>Math.round(e*100)/100,g1=e=>Math.round(e*100)/100,hl=Lc*2,Rd=Lc/3,cw=Lc/180,uw=180/Lc;function D8(e){return[...e.slice(0,3).reverse(),...e.slice(3)]}var ke={format:{},autodetect:[]},Q=class{constructor(...n){let l=this;if(we(n[0])==="object"&&n[0].constructor&&n[0].constructor===this.constructor)return n[0];let r=qr(n),o=!1;if(!r){o=!0,ke.sorted||=(ke.autodetect=ke.autodetect.sort((s,u)=>u.p-s.p),!0);for(let s of ke.autodetect)if(r=s.test(...n),r)break}if(ke.format[r])l._rgb=X1(ke.format[r].apply(null,o?n:n.slice(0,-1)));else throw Error("unknown format: "+n);l._rgb.length===3&&l._rgb.push(1)}toString(){return we(this.hex)=="function"?this.hex():`[${this._rgb.join(",")}]`}};const Oe=(...e)=>new Q(...e);Oe.version="3.2.0";const wr={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",laserlemon:"#ffff54",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrod:"#fafad2",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",maroon2:"#7f0000",maroon3:"#b03060",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",purple2:"#7f007f",purple3:"#a020f0",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},fw=/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,dw=/^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,_8=e=>{if(e.match(fw)){(e.length===4||e.length===7)&&(e=e.substr(1)),e.length===3&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let n=parseInt(e,16);return[n>>16,n>>8&255,n&255,1]}if(e.match(dw)){(e.length===5||e.length===9)&&(e=e.substr(1)),e.length===4&&(e=e.split(""),e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let n=parseInt(e,16);return[n>>24&255,n>>16&255,n>>8&255,Math.round((n&255)/255*100)/100]}throw Error(`unknown hex color: ${e}`)},{round:$s}=Math,O8=(...e)=>{let[n,l,r,o]=xe(e,"rgba"),s=qr(e)||"auto";o===void 0&&(o=1),s==="auto"&&(s=o<1?"rgba":"rgb"),n=$s(n),l=$s(l),r=$s(r);let u="000000"+(n<<16|l<<8|r).toString(16);u=u.substr(u.length-6);let f="0"+$s(o*255).toString(16);switch(f=f.substr(f.length-2),s.toLowerCase()){case"rgba":return`#${u}${f}`;case"argb":return`#${f}${u}`;default:return`#${u}`}};Q.prototype.name=function(){let e=O8(this._rgb,"rgb");for(let n of Object.keys(wr))if(wr[n]===e)return n.toLowerCase();return e},ke.format.named=e=>{if(e=e.toLowerCase(),wr[e])return _8(wr[e]);throw Error("unknown color name: "+e)},ke.autodetect.push({p:5,test:(e,...n)=>{if(!n.length&&we(e)==="string"&&wr[e.toLowerCase()])return"named"}}),Q.prototype.alpha=function(e,n=!1){return e!==void 0&&we(e)==="number"?n?(this._rgb[3]=e,this):new Q([this._rgb[0],this._rgb[1],this._rgb[2],e],"rgb"):this._rgb[3]},Q.prototype.clipped=function(){return this._rgb._clipped||!1};const $n={Kn:18,labWhitePoint:"d65",Xn:.95047,Yn:1,Zn:1.08883,kE:216/24389,kKE:8,kK:24389/27,RefWhiteRGB:{X:.95047,Y:1,Z:1.08883},MtxRGB2XYZ:{m00:.4124564390896922,m01:.21267285140562253,m02:.0193338955823293,m10:.357576077643909,m11:.715152155287818,m12:.11919202588130297,m20:.18043748326639894,m21:.07217499330655958,m22:.9503040785363679},MtxXYZ2RGB:{m00:3.2404541621141045,m01:-.9692660305051868,m02:.055643430959114726,m10:-1.5371385127977166,m11:1.8760108454466942,m12:-.2040259135167538,m20:-.498531409556016,m21:.041556017530349834,m22:1.0572251882231791},As:.9414285350000001,Bs:1.040417467,Cs:1.089532651,MtxAdaptMa:{m00:.8951,m01:-.7502,m02:.0389,m10:.2664,m11:1.7135,m12:-.0685,m20:-.1614,m21:.0367,m22:1.0296},MtxAdaptMaI:{m00:.9869929054667123,m01:.43230526972339456,m02:-.008528664575177328,m10:-.14705425642099013,m11:.5183602715367776,m12:.04004282165408487,m20:.15996265166373125,m21:.0492912282128556,m22:.9684866957875502}},hw=new Map([["a",[1.0985,.35585]],["b",[1.0985,.35585]],["c",[.98074,1.18232]],["d50",[.96422,.82521]],["d55",[.95682,.92149]],["d65",[.95047,1.08883]],["e",[1,1,1]],["f2",[.99186,.67393]],["f7",[.95041,1.08747]],["f11",[1.00962,.6435]],["icc",[.96422,.82521]]]);function gl(e){let n=hw.get(String(e).toLowerCase());if(!n)throw Error("unknown Lab illuminant "+e);$n.labWhitePoint=e,$n.Xn=n[0],$n.Zn=n[1]}function no(){return $n.labWhitePoint}const Y1=(...e)=>{e=xe(e,"lab");let[n,l,r]=e,[o,s,u]=pw(n,l,r),[f,d,h]=N8(o,s,u);return[f,d,h,e.length>3?e[3]:1]},pw=(e,n,l)=>{let{kE:r,kK:o,kKE:s,Xn:u,Yn:f,Zn:d}=$n,h=(e+16)/116,y=.002*n+h,m=h-.005*l,b=y*y*y,v=m*m*m,B=b>r?b:(116*y-16)/o,R=e>s?((e+16)/116)**3:e/o,z=v>r?v:(116*m-16)/o;return[B*u,R*f,z*d]},zd=e=>{let n=Math.sign(e);return e=Math.abs(e),(e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055)*n},N8=(e,n,l)=>{let{MtxAdaptMa:r,MtxAdaptMaI:o,MtxXYZ2RGB:s,RefWhiteRGB:u,Xn:f,Yn:d,Zn:h}=$n,y=f*r.m00+d*r.m10+h*r.m20,m=f*r.m01+d*r.m11+h*r.m21,b=f*r.m02+d*r.m12+h*r.m22,v=u.X*r.m00+u.Y*r.m10+u.Z*r.m20,B=u.X*r.m01+u.Y*r.m11+u.Z*r.m21,R=u.X*r.m02+u.Y*r.m12+u.Z*r.m22,z=(e*r.m00+n*r.m10+l*r.m20)*(v/y),C=(e*r.m01+n*r.m11+l*r.m21)*(B/m),X=(e*r.m02+n*r.m12+l*r.m22)*(R/b),q=z*o.m00+C*o.m10+X*o.m20,te=z*o.m01+C*o.m11+X*o.m21,ne=z*o.m02+C*o.m12+X*o.m22,M=zd(q*s.m00+te*s.m10+ne*s.m20),K=zd(q*s.m01+te*s.m11+ne*s.m21),I=zd(q*s.m02+te*s.m12+ne*s.m22);return[M*255,K*255,I*255]},Q1=(...e)=>{let[n,l,r,...o]=xe(e,"rgb"),[s,u,f]=L8(n,l,r),[d,h,y]=gw(s,u,f);return[d,h,y,...o.length>0&&o[0]<1?[o[0]]:[]]};function gw(e,n,l){let{Xn:r,Yn:o,Zn:s,kE:u,kK:f}=$n,d=e/r,h=n/o,y=l/s,m=d>u?d**(1/3):(f*d+16)/116,b=h>u?h**(1/3):(f*h+16)/116,v=y>u?y**(1/3):(f*y+16)/116;return[116*b-16,500*(m-b),200*(b-v)]}function Pd(e){let n=Math.sign(e);return e=Math.abs(e),(e<=.04045?e/12.92:((e+.055)/1.055)**2.4)*n}const L8=(e,n,l)=>{e=Pd(e/255),n=Pd(n/255),l=Pd(l/255);let{MtxRGB2XYZ:r,MtxAdaptMa:o,MtxAdaptMaI:s,Xn:u,Yn:f,Zn:d,As:h,Bs:y,Cs:m}=$n,b=e*r.m00+n*r.m10+l*r.m20,v=e*r.m01+n*r.m11+l*r.m21,B=e*r.m02+n*r.m12+l*r.m22,R=u*o.m00+f*o.m10+d*o.m20,z=u*o.m01+f*o.m11+d*o.m21,C=u*o.m02+f*o.m12+d*o.m22,X=b*o.m00+v*o.m10+B*o.m20,q=b*o.m01+v*o.m11+B*o.m21,te=b*o.m02+v*o.m12+B*o.m22;return X*=R/h,q*=z/y,te*=C/m,b=X*s.m00+q*s.m10+te*s.m20,v=X*s.m01+q*s.m11+te*s.m21,B=X*s.m02+q*s.m12+te*s.m22,[b,v,B]};Q.prototype.lab=function(){return Q1(this._rgb)};const yw=(...e)=>new Q(...e,"lab");Object.assign(Oe,{lab:yw,getLabWhitePoint:no,setLabWhitePoint:gl}),ke.format.lab=Y1,ke.autodetect.push({p:2,test:(...e)=>{if(e=xe(e,"lab"),we(e)==="array"&&e.length===3)return"lab"}}),Q.prototype.darken=function(e=1){let n=this,l=n.lab();return l[0]-=$n.Kn*e,new Q(l,"lab").alpha(n.alpha(),!0)},Q.prototype.brighten=function(e=1){return this.darken(-e)},Q.prototype.darker=Q.prototype.darken,Q.prototype.brighter=Q.prototype.brighten,Q.prototype.get=function(e){let[n,l]=e.split("."),r=this[n]();if(l){let o=n.indexOf(l)-(n.substr(0,2)==="ok"?2:0);if(o>-1)return r[o];throw Error(`unknown channel ${l} in mode ${n}`)}else return r};const{pow:mw}=Math;Q.prototype.luminance=function(e,n="rgb"){if(e!==void 0&&we(e)==="number"){if(e===0)return new Q([0,0,0,this._rgb[3]],"rgb");if(e===1)return new Q([255,255,255,this._rgb[3]],"rgb");let l=this.luminance(),r=20,o=(s,u)=>{let f=s.interpolate(u,.5,n),d=f.luminance();return Math.abs(e-d)<1e-7||!r--?f:d>e?o(s,f):o(f,u)};return new Q([...(l>e?o(new Q([0,0,0]),this):o(this,new Q([255,255,255]))).rgb(),this._rgb[3]])}return Tw(...this._rgb.slice(0,3))};const Tw=(e,n,l)=>(e=Fd(e),n=Fd(n),l=Fd(l),.2126*e+.7152*n+.0722*l),Fd=e=>(e/=255,e<=.03928?e/12.92:mw((e+.055)/1.055,2.4));var _t={},Rr=(e,n,l=.5,...r)=>{let o=r[0]||"lrgb";if(!_t[o]&&!r.length&&(o=Object.keys(_t)[0]),!_t[o])throw Error(`interpolation mode ${o} is not defined`);return we(e)!=="object"&&(e=new Q(e)),we(n)!=="object"&&(n=new Q(n)),_t[o](e,n,l).alpha(e.alpha()+l*(n.alpha()-e.alpha()))};Q.prototype.mix=Q.prototype.interpolate=function(e,n=.5,...l){return Rr(this,e,n,...l)},Q.prototype.premultiply=function(e=!1){let n=this._rgb,l=n[3];return e?(this._rgb=[n[0]*l,n[1]*l,n[2]*l,l],this):new Q([n[0]*l,n[1]*l,n[2]*l,l],"rgb")};const{sin:bw,cos:vw}=Math,R8=(...e)=>{let[n,l,r]=xe(e,"lch");return isNaN(r)&&(r=0),r*=cw,[n,vw(r)*l,bw(r)*l]},W1=(...e)=>{e=xe(e,"lch");let[n,l,r]=e,[o,s,u]=R8(n,l,r),[f,d,h]=Y1(o,s,u);return[f,d,h,e.length>3?e[3]:1]},kw=(...e)=>W1(...D8(xe(e,"hcl"))),{sqrt:xw,atan2:Bw,round:ww}=Math,z8=(...e)=>{let[n,l,r]=xe(e,"lab"),o=xw(l*l+r*r),s=(Bw(r,l)*uw+360)%360;return ww(o*1e4)===0&&(s=NaN),[n,o,s]},y1=(...e)=>{let[n,l,r,...o]=xe(e,"rgb"),[s,u,f]=Q1(n,l,r),[d,h,y]=z8(s,u,f);return[d,h,y,...o.length>0&&o[0]<1?[o[0]]:[]]};Q.prototype.lch=function(){return y1(this._rgb)},Q.prototype.hcl=function(){return D8(y1(this._rgb))};const Ew=(...e)=>new Q(...e,"lch"),Cw=(...e)=>new Q(...e,"hcl");Object.assign(Oe,{lch:Ew,hcl:Cw}),ke.format.lch=W1,ke.format.hcl=kw,["lch","hcl"].forEach(e=>ke.autodetect.push({p:2,test:(...n)=>{if(n=xe(n,e),we(n)==="array"&&n.length===3)return e}})),Q.prototype.saturate=function(e=1){let n=this,l=n.lch();return l[1]+=$n.Kn*e,l[1]<0&&(l[1]=0),new Q(l,"lch").alpha(n.alpha(),!0)},Q.prototype.desaturate=function(e=1){return this.saturate(-e)},Q.prototype.set=function(e,n,l=!1){let[r,o]=e.split("."),s=this[r]();if(o){let u=r.indexOf(o)-(r.substr(0,2)==="ok"?2:0);if(u>-1){if(we(n)=="string")switch(n.charAt(0)){case"+":s[u]+=+n;break;case"-":s[u]+=+n;break;case"*":s[u]*=+n.substr(1);break;case"/":s[u]/=+n.substr(1);break;default:s[u]=+n}else if(we(n)==="number")s[u]=n;else throw Error("unsupported value for Color.set");let f=new Q(s,r);return l?(this._rgb=f._rgb,this):f}throw Error(`unknown channel ${o} in mode ${r}`)}else return s},Q.prototype.tint=function(e=.5,...n){return Rr(this,"white",e,...n)},Q.prototype.shade=function(e=.5,...n){return Rr(this,"black",e,...n)};const Aw=(e,n,l)=>{let r=e._rgb,o=n._rgb;return new Q(r[0]+l*(o[0]-r[0]),r[1]+l*(o[1]-r[1]),r[2]+l*(o[2]-r[2]),"rgb")};_t.rgb=Aw;const{sqrt:Id,pow:vr}=Math,Sw=(e,n,l)=>{let[r,o,s]=e._rgb,[u,f,d]=n._rgb;return new Q(Id(vr(r,2)*(1-l)+vr(u,2)*l),Id(vr(o,2)*(1-l)+vr(f,2)*l),Id(vr(s,2)*(1-l)+vr(d,2)*l),"rgb")};_t.lrgb=Sw;const Dw=(e,n,l)=>{let r=e.lab(),o=n.lab();return new Q(r[0]+l*(o[0]-r[0]),r[1]+l*(o[1]-r[1]),r[2]+l*(o[2]-r[2]),"lab")};_t.lab=Dw;var $r=(e,n,l,r)=>{let o,s;r==="hsl"?(o=e.hsl(),s=n.hsl()):r==="hsv"?(o=e.hsv(),s=n.hsv()):r==="hcg"?(o=e.hcg(),s=n.hcg()):r==="hsi"?(o=e.hsi(),s=n.hsi()):r==="lch"||r==="hcl"?(r="hcl",o=e.hcl(),s=n.hcl()):r==="oklch"&&(o=e.oklch().reverse(),s=n.oklch().reverse());let u,f,d,h,y,m;(r.substr(0,1)==="h"||r==="oklch")&&([u,d,y]=o,[f,h,m]=s);let b,v,B,R;return!isNaN(u)&&!isNaN(f)?(R=f>u&&f-u>180?f-(u+360):f<u&&u-f>180?f+360-u:f-u,v=u+l*R):isNaN(u)?isNaN(f)?v=NaN:(v=f,(y==1||y==0)&&r!="hsv"&&(b=h)):(v=u,(m==1||m==0)&&r!="hsv"&&(b=d)),b===void 0&&(b=d+l*(h-d)),B=y+l*(m-y),r==="oklch"?new Q([B,b,v],r):new Q([v,b,B],r)};const d4=(e,n,l)=>$r(e,n,l,"lch");_t.lch=d4,_t.hcl=d4;const _w=e=>{if(we(e)=="number"&&e>=0&&e<=16777215)return[e>>16,e>>8&255,e&255,1];throw Error("unknown num color: "+e)},Ow=(...e)=>{let[n,l,r]=xe(e,"rgb");return(n<<16)+(l<<8)+r};Q.prototype.num=function(){return Ow(this._rgb)};const Nw=(...e)=>new Q(...e,"num");Object.assign(Oe,{num:Nw}),ke.format.num=_w,ke.autodetect.push({p:5,test:(...e)=>{if(e.length===1&&we(e[0])==="number"&&e[0]>=0&&e[0]<=16777215)return"num"}});const Lw=(e,n,l)=>{let r=e.num();return new Q(r+l*(n.num()-r),"num")};_t.num=Lw;const{floor:Rw}=Math,zw=(...e)=>{e=xe(e,"hcg");let[n,l,r]=e,o,s,u;r*=255;let f=l*255;if(l===0)o=s=u=r;else{n===360&&(n=0),n>360&&(n-=360),n<0&&(n+=360),n/=60;let d=Rw(n),h=n-d,y=r*(1-l),m=y+f*(1-h),b=y+f*h,v=y+f;switch(d){case 0:[o,s,u]=[v,b,y];break;case 1:[o,s,u]=[m,v,y];break;case 2:[o,s,u]=[y,v,b];break;case 3:[o,s,u]=[y,m,v];break;case 4:[o,s,u]=[b,y,v];break;case 5:[o,s,u]=[v,y,m];break}}return[o,s,u,e.length>3?e[3]:1]},Pw=(...e)=>{let[n,l,r]=xe(e,"rgb"),o=A8(n,l,r),s=S8(n,l,r),u=s-o,f=u*100/255,d=o/(255-u)*100,h;return u===0?h=NaN:(n===s&&(h=(l-r)/u),l===s&&(h=2+(r-n)/u),r===s&&(h=4+(n-l)/u),h*=60,h<0&&(h+=360)),[h,f,d]};Q.prototype.hcg=function(){return Pw(this._rgb)};const Fw=(...e)=>new Q(...e,"hcg");Oe.hcg=Fw,ke.format.hcg=zw,ke.autodetect.push({p:1,test:(...e)=>{if(e=xe(e,"hcg"),we(e)==="array"&&e.length===3)return"hcg"}});const Iw=(e,n,l)=>$r(e,n,l,"hcg");_t.hcg=Iw;const{cos:kr}=Math,Mw=(...e)=>{e=xe(e,"hsi");let[n,l,r]=e,o,s,u;return isNaN(n)&&(n=0),isNaN(l)&&(l=0),n>360&&(n-=360),n<0&&(n+=360),n/=360,n<1/3?(u=(1-l)/3,o=(1+l*kr(hl*n)/kr(Rd-hl*n))/3,s=1-(u+o)):n<2/3?(n-=1/3,o=(1-l)/3,s=(1+l*kr(hl*n)/kr(Rd-hl*n))/3,u=1-(o+s)):(n-=2/3,s=(1-l)/3,u=(1+l*kr(hl*n)/kr(Rd-hl*n))/3,o=1-(s+u)),o=Ci(r*o*3),s=Ci(r*s*3),u=Ci(r*u*3),[o*255,s*255,u*255,e.length>3?e[3]:1]},{min:Gw,sqrt:qw,acos:$w}=Math,jw=(...e)=>{let[n,l,r]=xe(e,"rgb");n/=255,l/=255,r/=255;let o,s=Gw(n,l,r),u=(n+l+r)/3,f=u>0?1-s/u:0;return f===0?o=NaN:(o=(n-l+(n-r))/2,o/=qw((n-l)*(n-l)+(n-r)*(l-r)),o=$w(o),r>l&&(o=hl-o),o/=hl),[o*360,f,u]};Q.prototype.hsi=function(){return jw(this._rgb)};const Uw=(...e)=>new Q(...e,"hsi");Oe.hsi=Uw,ke.format.hsi=Mw,ke.autodetect.push({p:2,test:(...e)=>{if(e=xe(e,"hsi"),we(e)==="array"&&e.length===3)return"hsi"}});const Zw=(e,n,l)=>$r(e,n,l,"hsi");_t.hsi=Zw;const m1=(...e)=>{e=xe(e,"hsl");let[n,l,r]=e,o,s,u;if(l===0)o=s=u=r*255;else{let f=[0,0,0],d=[0,0,0],h=r<.5?r*(1+l):r+l-r*l,y=2*r-h,m=n/360;f[0]=m+1/3,f[1]=m,f[2]=m-1/3;for(let b=0;b<3;b++)f[b]<0&&(f[b]+=1),f[b]>1&&--f[b],6*f[b]<1?d[b]=y+(h-y)*6*f[b]:2*f[b]<1?d[b]=h:3*f[b]<2?d[b]=y+(h-y)*(2/3-f[b])*6:d[b]=y;[o,s,u]=[d[0]*255,d[1]*255,d[2]*255]}return e.length>3?[o,s,u,e[3]]:[o,s,u,1]},P8=(...e)=>{e=xe(e,"rgba");let[n,l,r]=e;n/=255,l/=255,r/=255;let o=A8(n,l,r),s=S8(n,l,r),u=(s+o)/2,f,d;return s===o?(f=0,d=NaN):f=u<.5?(s-o)/(s+o):(s-o)/(2-s-o),n==s?d=(l-r)/(s-o):l==s?d=2+(r-n)/(s-o):r==s&&(d=4+(n-l)/(s-o)),d*=60,d<0&&(d+=360),e.length>3&&e[3]!==void 0?[d,f,u,e[3]]:[d,f,u]};Q.prototype.hsl=function(){return P8(this._rgb)};const Hw=(...e)=>new Q(...e,"hsl");Oe.hsl=Hw,ke.format.hsl=m1,ke.autodetect.push({p:2,test:(...e)=>{if(e=xe(e,"hsl"),we(e)==="array"&&e.length===3)return"hsl"}});const Kw=(e,n,l)=>$r(e,n,l,"hsl");_t.hsl=Kw;const{floor:Vw}=Math,Xw=(...e)=>{e=xe(e,"hsv");let[n,l,r]=e,o,s,u;if(r*=255,l===0)o=s=u=r;else{n===360&&(n=0),n>360&&(n-=360),n<0&&(n+=360),n/=60;let f=Vw(n),d=n-f,h=r*(1-l),y=r*(1-l*d),m=r*(1-l*(1-d));switch(f){case 0:[o,s,u]=[r,m,h];break;case 1:[o,s,u]=[y,r,h];break;case 2:[o,s,u]=[h,r,m];break;case 3:[o,s,u]=[h,y,r];break;case 4:[o,s,u]=[m,h,r];break;case 5:[o,s,u]=[r,h,y];break}}return[o,s,u,e.length>3?e[3]:1]},{min:Yw,max:Qw}=Math,Ww=(...e)=>{e=xe(e,"rgb");let[n,l,r]=e,o=Yw(n,l,r),s=Qw(n,l,r),u=s-o,f,d,h;return h=s/255,s===0?(f=NaN,d=0):(d=u/s,n===s&&(f=(l-r)/u),l===s&&(f=2+(r-n)/u),r===s&&(f=4+(n-l)/u),f*=60,f<0&&(f+=360)),[f,d,h]};Q.prototype.hsv=function(){return Ww(this._rgb)};const Jw=(...e)=>new Q(...e,"hsv");Oe.hsv=Jw,ke.format.hsv=Xw,ke.autodetect.push({p:2,test:(...e)=>{if(e=xe(e,"hsv"),we(e)==="array"&&e.length===3)return"hsv"}});const eE=(e,n,l)=>$r(e,n,l,"hsv");_t.hsv=eE;function hc(e,n){let l=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(n[0])||(n=n.map(u=>[u]));let r=n[0].length,o=n[0].map((u,f)=>n.map(d=>d[f])),s=e.map(u=>o.map(f=>Array.isArray(u)?u.reduce((d,h,y)=>d+h*(f[y]||0),0):f.reduce((d,h)=>d+h*u,0)));return l===1&&(s=s[0]),r===1?s.map(u=>u[0]):s}const J1=(...e)=>{e=xe(e,"lab");let[n,l,r,...o]=e,[s,u,f]=tE([n,l,r]),[d,h,y]=N8(s,u,f);return[d,h,y,...o.length>0&&o[0]<1?[o[0]]:[]]};function tE(e){return hc([[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],hc([[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],e).map(n=>n**3))}const eh=(...e)=>{let[n,l,r,...o]=xe(e,"rgb");return[...nE(L8(n,l,r)),...o.length>0&&o[0]<1?[o[0]]:[]]};function nE(e){return hc([[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],hc([[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],e).map(n=>Math.cbrt(n)))}Q.prototype.oklab=function(){return eh(this._rgb)};const lE=(...e)=>new Q(...e,"oklab");Object.assign(Oe,{oklab:lE}),ke.format.oklab=J1,ke.autodetect.push({p:2,test:(...e)=>{if(e=xe(e,"oklab"),we(e)==="array"&&e.length===3)return"oklab"}});const iE=(e,n,l)=>{let r=e.oklab(),o=n.oklab();return new Q(r[0]+l*(o[0]-r[0]),r[1]+l*(o[1]-r[1]),r[2]+l*(o[2]-r[2]),"oklab")};_t.oklab=iE;const rE=(e,n,l)=>$r(e,n,l,"oklch");_t.oklch=rE;const{pow:Md,sqrt:Gd,PI:qd,cos:h4,sin:p4,atan2:aE}=Math;var oE=(e,n="lrgb",l=null)=>{let r=e.length;l||=Array.from(Array(r)).map(()=>1);let o=r/l.reduce(function(m,b){return m+b});if(l.forEach((m,b)=>{l[b]*=o}),e=e.map(m=>new Q(m)),n==="lrgb")return sE(e,l);let s=e.shift(),u=s.get(n),f=[],d=0,h=0;for(let m=0;m<u.length;m++)if(u[m]=(u[m]||0)*l[0],f.push(isNaN(u[m])?0:l[0]),n.charAt(m)==="h"&&!isNaN(u[m])){let b=u[m]/180*qd;d+=h4(b)*l[0],h+=p4(b)*l[0]}let y=s.alpha()*l[0];e.forEach((m,b)=>{let v=m.get(n);y+=m.alpha()*l[b+1];for(let B=0;B<u.length;B++)if(!isNaN(v[B]))if(f[B]+=l[b+1],n.charAt(B)==="h"){let R=v[B]/180*qd;d+=h4(R)*l[b+1],h+=p4(R)*l[b+1]}else u[B]+=v[B]*l[b+1]});for(let m=0;m<u.length;m++)if(n.charAt(m)==="h"){let b=aE(h/f[m],d/f[m])/qd*180;for(;b<0;)b+=360;for(;b>=360;)b-=360;u[m]=b}else u[m]=u[m]/f[m];return y/=r,new Q(u,n).alpha(y>.99999?1:y,!0)};const sE=(e,n)=>{let l=e.length,r=[0,0,0,0];for(let o=0;o<e.length;o++){let s=e[o],u=n[o]/l,f=s._rgb;r[0]+=Md(f[0],2)*u,r[1]+=Md(f[1],2)*u,r[2]+=Md(f[2],2)*u,r[3]+=f[3]*u}return r[0]=Gd(r[0]),r[1]=Gd(r[1]),r[2]=Gd(r[2]),r[3]>.9999999&&(r[3]=1),new Q(X1(r))},{pow:cE}=Math;function pc(e){let n="rgb",l=Oe("#ccc"),r=0,o=[0,1],s=[0,1],u=[],f=[0,0],d=!1,h=[],y=!1,m=0,b=1,v=!1,B={},R=!0,z=1,C=function(I){if(I||=["#fff","#000"],I&&we(I)==="string"&&Oe.brewer&&Oe.brewer[I.toLowerCase()]&&(I=Oe.brewer[I.toLowerCase()]),we(I)==="array"){I.length===1&&(I=[I[0],I[0]]),I=I.slice(0);for(let W=0;W<I.length;W++)I[W]=Oe(I[W]);u.length=0;for(let W=0;W<I.length;W++)u.push(W/(I.length-1))}return M(),h=I},X=function(I){if(d!=null){let W=d.length-1,_=0;for(;_<W&&I>=d[_];)_++;return _-1}return 0},q=I=>I,te=I=>I,ne=function(I,W){let _,Z;if(W??=!1,isNaN(I)||I===null)return l;Z=W?I:d&&d.length>2?X(I)/(d.length-2):b===m?1:(I-m)/(b-m),Z=te(Z),W||(Z=q(Z)),z!==1&&(Z=cE(Z,z)),Z=f[0]+Z*(1-f[0]-f[1]),Z=Ci(Z,0,1);let V=Math.floor(Z*1e4);if(R&&B[V])_=B[V];else{if(we(h)==="array")for(let le=0;le<u.length;le++){let pe=u[le];if(Z<=pe){_=h[le];break}if(Z>=pe&&le===u.length-1){_=h[le];break}if(Z>pe&&Z<u[le+1]){Z=(Z-pe)/(u[le+1]-pe),_=Oe.interpolate(h[le],h[le+1],Z,n);break}}else we(h)==="function"&&(_=h(Z));R&&(B[V]=_)}return _};var M=()=>B={};C(e);let K=function(I){let W=Oe(ne(I));return y&&W[y]?W[y]():W};return K.classes=function(I){if(I!=null){if(we(I)==="array")d=I,o=[I[0],I[I.length-1]];else{let W=Oe.analyze(o);d=I===0?[W.min,W.max]:Oe.limits(W,"e",I)}return K}return d},K.domain=function(I){if(!arguments.length)return s;s=I.slice(0),m=I[0],b=I[I.length-1],u=[];let W=h.length;if(I.length===W&&m!==b)for(let _ of Array.from(I))u.push((_-m)/(b-m));else{for(let _=0;_<W;_++)u.push(_/(W-1));if(I.length>2){let _=I.map((V,le)=>le/(I.length-1)),Z=I.map(V=>(V-m)/(b-m));Z.every((V,le)=>_[le]===V)||(te=V=>{if(V<=0||V>=1)return V;let le=0;for(;V>=Z[le+1];)le++;let pe=(V-Z[le])/(Z[le+1]-Z[le]);return _[le]+pe*(_[le+1]-_[le])})}}return o=[m,b],K},K.mode=function(I){return arguments.length?(n=I,M(),K):n},K.range=function(I,W){return C(I),K},K.out=function(I){return y=I,K},K.spread=function(I){return arguments.length?(r=I,K):r},K.correctLightness=function(I){return I??=!0,v=I,M(),q=v?function(W){let _=ne(0,!0).lab()[0],Z=ne(1,!0).lab()[0],V=_>Z,le=ne(W,!0).lab()[0],pe=_+(Z-_)*W,ue=le-pe,P=0,Y=1,ae=20;for(;Math.abs(ue)>.01&&ae-- >0;)(function(){return V&&(ue*=-1),ue<0?(P=W,W+=(Y-W)*.5):(Y=W,W+=(P-W)*.5),le=ne(W,!0).lab()[0],ue=le-pe})();return W}:W=>W,K},K.padding=function(I){return I==null?f:(we(I)==="number"&&(I=[I,I]),f=I,K)},K.colors=function(I,W){arguments.length<2&&(W="hex");let _=[];if(arguments.length===0)_=h.slice(0);else if(I===1)_=[K(.5)];else if(I>1){let Z=o[0],V=o[1]-Z;_=uE(0,I).map(le=>K(Z+le/(I-1)*V))}else{e=[];let Z=[];if(d&&d.length>2)for(let V=1,le=d.length,pe=1<=le;pe?V<le:V>le;pe?V++:V--)Z.push((d[V-1]+d[V])*.5);else Z=o;_=Z.map(V=>K(V))}return Oe[W]&&(_=_.map(Z=>Z[W]())),_},K.cache=function(I){return I==null?R:(R=I,K)},K.gamma=function(I){return I==null?z:(z=I,K)},K.nodata=function(I){return I==null?l:(l=Oe(I),K)},K}function uE(e,n,l){let r=[],o=e<n,s=n;for(let u=e;o?u<s:u>s;o?u++:u--)r.push(u);return r}const fE=function(e){let n=[1,1];for(let l=1;l<e;l++){let r=[1];for(let o=1;o<=n.length;o++)r[o]=(n[o]||0)+n[o-1];n=r}return n},dE=function(e){let n,l,r,o;if(e=e.map(s=>new Q(s)),e.length===2)[l,r]=e.map(s=>s.lab()),n=function(s){return new Q([0,1,2].map(u=>l[u]+s*(r[u]-l[u])),"lab")};else if(e.length===3)[l,r,o]=e.map(s=>s.lab()),n=function(s){return new Q([0,1,2].map(u=>(1-s)*(1-s)*l[u]+2*(1-s)*s*r[u]+s*s*o[u]),"lab")};else if(e.length===4){let s;[l,r,o,s]=e.map(u=>u.lab()),n=function(u){return new Q([0,1,2].map(f=>(1-u)*(1-u)*(1-u)*l[f]+3*(1-u)*(1-u)*u*r[f]+3*(1-u)*u*u*o[f]+u*u*u*s[f]),"lab")}}else if(e.length>=5){let s,u,f;s=e.map(d=>d.lab()),f=e.length-1,u=fE(f),n=function(d){let h=1-d;return new Q([0,1,2].map(y=>s.reduce((m,b,v)=>m+u[v]*h**(f-v)*d**v*b[y],0)),"lab")}}else throw RangeError("No point in running bezier with only one color.");return n};var hE=e=>{let n=dE(e);return n.scale=()=>pc(n),n};const{round:g4}=Math;Q.prototype.rgb=function(e=!0){return e===!1?this._rgb.slice(0,3):this._rgb.slice(0,3).map(g4)},Q.prototype.rgba=function(e=!0){return this._rgb.slice(0,4).map((n,l)=>l<3?e===!1?n:g4(n):n)};const pE=(...e)=>new Q(...e,"rgb");Object.assign(Oe,{rgb:pE}),ke.format.rgb=(...e)=>{let n=xe(e,"rgba");return n[3]===void 0&&(n[3]=1),n},ke.autodetect.push({p:3,test:(...e)=>{if(e=xe(e,"rgba"),we(e)==="array"&&(e.length===3||e.length===4&&we(e[3])=="number"&&e[3]>=0&&e[3]<=1))return"rgb"}});const An=(e,n,l)=>{if(!An[l])throw Error("unknown blend mode "+l);return An[l](e,n)},Vl=e=>(n,l)=>{let r=Oe(l).rgb(),o=Oe(n).rgb();return Oe.rgb(e(r,o))},Xl=e=>(n,l)=>{let r=[];return r[0]=e(n[0],l[0]),r[1]=e(n[1],l[1]),r[2]=e(n[2],l[2]),r},gE=e=>e,yE=(e,n)=>e*n/255,mE=(e,n)=>e>n?n:e,TE=(e,n)=>e>n?e:n,bE=(e,n)=>255*(1-(1-e/255)*(1-n/255)),vE=(e,n)=>n<128?2*e*n/255:255*(1-2*(1-e/255)*(1-n/255)),kE=(e,n)=>255*(1-(1-n/255)/(e/255)),xE=(e,n)=>e===255?255:(e=n/255*255/(1-e/255),e>255?255:e);An.normal=Vl(Xl(gE)),An.multiply=Vl(Xl(yE)),An.screen=Vl(Xl(bE)),An.overlay=Vl(Xl(vE)),An.darken=Vl(Xl(mE)),An.lighten=Vl(Xl(TE)),An.dodge=Vl(Xl(xE)),An.burn=Vl(Xl(kE));const{pow:BE,sin:wE,cos:EE}=Math;function CE(e=300,n=-1.5,l=1,r=1,o=[0,1]){let s=0,u;we(o)==="array"?u=o[1]-o[0]:(u=0,o=[o,o]);let f=function(d){let h=hl*((e+120)/360+n*d),y=BE(o[0]+u*d,r),m=(s===0?l:l[0]+d*s)*y*(1-y)/2,b=EE(h),v=wE(h),B=y+m*(-.14861*b+1.78277*v),R=y+m*(-.29227*b-.90649*v),z=y+1.97294*b*m;return Oe(X1([B*255,R*255,z*255,1]))};return f.start=function(d){return d==null?e:(e=d,f)},f.rotations=function(d){return d==null?n:(n=d,f)},f.gamma=function(d){return d==null?r:(r=d,f)},f.hue=function(d){return d==null?l:(l=d,we(l)==="array"?(s=l[1]-l[0],s===0&&(l=l[1])):s=0,f)},f.lightness=function(d){return d==null?o:(we(d)==="array"?(o=d,u=d[1]-d[0]):(o=[d,d],u=0),f)},f.scale=()=>Oe.scale(f),f.hue(l),f}const{floor:AE,random:SE}=Math;var DE=(e=SE)=>{let n="#";for(let l=0;l<6;l++)n+="0123456789abcdef".charAt(AE(e()*16));return new Q(n,"hex")};const{log:y4,pow:_E,floor:OE,abs:NE}=Math;function F8(e,n=null){let l={min:Number.MAX_VALUE,max:Number.MAX_VALUE*-1,sum:0,values:[],count:0};return we(e)==="object"&&(e=Object.values(e)),e.forEach(r=>{n&&we(r)==="object"&&(r=r[n]),r!=null&&!isNaN(r)&&(l.values.push(r),l.sum+=r,r<l.min&&(l.min=r),r>l.max&&(l.max=r),l.count+=1)}),l.domain=[l.min,l.max],l.limits=(r,o)=>I8(l,r,o),l}function I8(e,n="equal",l=7){we(e)=="array"&&(e=F8(e));let{min:r,max:o}=e,s=e.values.sort((f,d)=>f-d);if(l===1)return[r,o];let u=[];if(n.substr(0,1)==="c"&&(u.push(r),u.push(o)),n.substr(0,1)==="e"){u.push(r);for(let f=1;f<l;f++)u.push(r+f/l*(o-r));u.push(o)}else if(n.substr(0,1)==="l"){if(r<=0)throw Error("Logarithmic scales are only possible for values > 0");let f=Math.LOG10E*y4(r),d=Math.LOG10E*y4(o);u.push(r);for(let h=1;h<l;h++)u.push(_E(10,f+h/l*(d-f)));u.push(o)}else if(n.substr(0,1)==="q"){u.push(r);for(let f=1;f<l;f++){let d=(s.length-1)*f/l,h=OE(d);if(h===d)u.push(s[h]);else{let y=d-h;u.push(s[h]*(1-y)+s[h+1]*y)}}u.push(o)}else if(n.substr(0,1)==="k"){let f,d=s.length,h=Array(d),y=Array(l),m=!0,b=0,v=null;v=[],v.push(r);for(let z=1;z<l;z++)v.push(r+z/l*(o-r));for(v.push(o);m;){for(let C=0;C<l;C++)y[C]=0;for(let C=0;C<d;C++){let X=s[C],q=Number.MAX_VALUE,te;for(let ne=0;ne<l;ne++){let M=NE(v[ne]-X);M<q&&(q=M,te=ne),y[te]++,h[C]=te}}let z=Array(l);for(let C=0;C<l;C++)z[C]=null;for(let C=0;C<d;C++)f=h[C],z[f]===null?z[f]=s[C]:z[f]+=s[C];for(let C=0;C<l;C++)z[C]*=1/y[C];m=!1;for(let C=0;C<l;C++)if(z[C]!==v[C]){m=!0;break}v=z,b++,b>200&&(m=!1)}let B={};for(let z=0;z<l;z++)B[z]=[];for(let z=0;z<d;z++)f=h[z],B[f].push(s[z]);let R=[];for(let z=0;z<l;z++)R.push(B[z][0]),R.push(B[z][B[z].length-1]);R=R.sort((z,C)=>z-C),u.push(R[0]);for(let z=1;z<R.length;z+=2){let C=R[z];!isNaN(C)&&u.indexOf(C)===-1&&u.push(C)}}return u}var LE=(e,n)=>{e=new Q(e),n=new Q(n);let l=e.luminance(),r=n.luminance();return l>r?(l+.05)/(r+.05):(r+.05)/(l+.05)};const m4=.027,T4=1.14,js=.022;var RE=(e,n)=>{e=new Q(e),n=new Q(n),e.alpha()<1&&(e=Rr(n,e,e.alpha(),"rgb"));let l=b4(...e.rgb()),r=b4(...n.rgb()),o=l>=js?l:l+(js-l)**1.414,s=r>=js?r:r+(js-r)**1.414,u=s**.56-o**.57,f=s**.65-o**.62,d=Math.abs(s-o)<5e-4?0:o<s?u*T4:f*T4;return(Math.abs(d)<.1?0:d>0?d-m4:d+m4)*100};function b4(e,n,l){return .2126729*(e/255)**2.4+.7151522*(n/255)**2.4+.072175*(l/255)**2.4}const{sqrt:ul,pow:ft,min:zE,max:PE,atan2:v4,abs:k4,cos:Us,sin:x4,exp:FE,PI:B4}=Math;function IE(e,n,l=1,r=1,o=1){var s=function(Te){return 360*Te/(2*B4)},u=function(Te){return 2*B4*Te/360};e=new Q(e),n=new Q(n);let[f,d,h]=Array.from(e.lab()),[y,m,b]=Array.from(n.lab()),v=(f+y)/2,B=(ul(ft(d,2)+ft(h,2))+ul(ft(m,2)+ft(b,2)))/2,R=.5*(1-ul(ft(B,7)/(ft(B,7)+ft(25,7)))),z=d*(1+R),C=m*(1+R),X=ul(ft(z,2)+ft(h,2)),q=ul(ft(C,2)+ft(b,2)),te=(X+q)/2,ne=s(v4(h,z)),M=s(v4(b,C)),K=ne>=0?ne:ne+360,I=M>=0?M:M+360,W=k4(K-I)>180?(K+I+360)/2:(K+I)/2,_=1-.17*Us(u(W-30))+.24*Us(u(2*W))+.32*Us(u(3*W+6))-.2*Us(u(4*W-63)),Z=I-K;Z=k4(Z)<=180?Z:I<=K?Z+360:Z-360,Z=2*ul(X*q)*x4(u(Z)/2);let V=y-f,le=q-X,pe=1+.015*ft(v-50,2)/ul(20+ft(v-50,2)),ue=1+.045*te,P=1+.015*te*_,Y=30*FE(-ft((W-275)/25,2)),ae=-(2*ul(ft(te,7)/(ft(te,7)+ft(25,7))))*x4(2*u(Y));return PE(0,zE(100,ul(ft(V/(l*pe),2)+ft(le/(r*ue),2)+ft(Z/(o*P),2)+ae*(le/(r*ue))*(Z/(o*P)))))}function ME(e,n,l="lab"){e=new Q(e),n=new Q(n);let r=e.get(l),o=n.get(l),s=0;for(let u in r){let f=(r[u]||0)-(o[u]||0);s+=f*f}return Math.sqrt(s)}var GE=(...e)=>{try{return new Q(...e),!0}catch{return!1}},qE={cool(){return pc([Oe.hsl(180,1,.9),Oe.hsl(250,.7,.4)])},hot(){return pc(["#000","#f00","#ff0","#fff"]).mode("rgb")}};const T1={OrRd:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],PuBu:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],BuPu:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],Oranges:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],BuGn:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],YlOrBr:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],YlGn:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],Reds:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],RdPu:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],Greens:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],YlGnBu:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],Purples:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],GnBu:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],Greys:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],YlOrRd:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],PuRd:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],Blues:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],PuBuGn:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],Viridis:["#440154","#482777","#3f4a8a","#31678e","#26838f","#1f9d8a","#6cce5a","#b6de2b","#fee825"],Spectral:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],RdYlGn:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],RdBu:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],PiYG:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],PRGn:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],RdYlBu:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],BrBG:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],RdGy:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],PuOr:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],Set2:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"],Accent:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"],Set1:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"],Set3:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"],Dark2:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"],Paired:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"],Pastel2:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"],Pastel1:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},M8=Object.keys(T1),w4=new Map(M8.map(e=>[e.toLowerCase(),e])),$E=typeof Proxy=="function"?new Proxy(T1,{get(e,n){let l=n.toLowerCase();if(w4.has(l))return e[w4.get(l)]},getOwnPropertyNames(){return Object.getOwnPropertyNames(M8)}}):T1,jE=(...e)=>{e=xe(e,"cmyk");let[n,l,r,o]=e,s=e.length>4?e[4]:1;return o===1?[0,0,0,s]:[n>=1?0:255*(1-n)*(1-o),l>=1?0:255*(1-l)*(1-o),r>=1?0:255*(1-r)*(1-o),s]},{max:E4}=Math,UE=(...e)=>{let[n,l,r]=xe(e,"rgb");n/=255,l/=255,r/=255;let o=1-E4(n,E4(l,r)),s=o<1?1/(1-o):0;return[(1-n-o)*s,(1-l-o)*s,(1-r-o)*s,o]};Q.prototype.cmyk=function(){return UE(this._rgb)};const ZE=(...e)=>new Q(...e,"cmyk");Object.assign(Oe,{cmyk:ZE}),ke.format.cmyk=jE,ke.autodetect.push({p:2,test:(...e)=>{if(e=xe(e,"cmyk"),we(e)==="array"&&e.length===4)return"cmyk"}});const HE=(...e)=>{let n=xe(e,"hsla"),l=qr(e)||"lsa";return n[0]=vn(n[0]||0)+"deg",n[1]=vn(n[1]*100)+"%",n[2]=vn(n[2]*100)+"%",l==="hsla"||n.length>3&&n[3]<1?(n[3]="/ "+(n.length>3?n[3]:1),l="hsla"):n.length=3,`${l.substr(0,3)}(${n.join(" ")})`},KE=(...e)=>{let n=xe(e,"lab"),l=qr(e)||"lab";return n[0]=vn(n[0])+"%",n[1]=vn(n[1]),n[2]=vn(n[2]),l==="laba"||n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`lab(${n.join(" ")})`},VE=(...e)=>{let n=xe(e,"lch"),l=qr(e)||"lab";return n[0]=vn(n[0])+"%",n[1]=vn(n[1]),n[2]=isNaN(n[2])?"none":vn(n[2])+"deg",l==="lcha"||n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`lch(${n.join(" ")})`},XE=(...e)=>{let n=xe(e,"lab");return n[0]=vn(n[0]*100)+"%",n[1]=g1(n[1]),n[2]=g1(n[2]),n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`oklab(${n.join(" ")})`},G8=(...e)=>{let[n,l,r,...o]=xe(e,"rgb"),[s,u,f]=eh(n,l,r),[d,h,y]=z8(s,u,f);return[d,h,y,...o.length>0&&o[0]<1?[o[0]]:[]]},YE=(...e)=>{let n=xe(e,"lch");return n[0]=vn(n[0]*100)+"%",n[1]=g1(n[1]),n[2]=isNaN(n[2])?"none":vn(n[2])+"deg",n.length>3&&n[3]<1?n[3]="/ "+(n.length>3?n[3]:1):n.length=3,`oklch(${n.join(" ")})`},{round:$d}=Math,QE=(...e)=>{let n=xe(e,"rgba"),l=qr(e)||"rgb";if(l.substr(0,3)==="hsl")return HE(P8(n),l);if(l.substr(0,3)==="lab"){let r=no();gl("d50");let o=KE(Q1(n),l);return gl(r),o}if(l.substr(0,3)==="lch"){let r=no();gl("d50");let o=VE(y1(n),l);return gl(r),o}return l.substr(0,5)==="oklab"?XE(eh(n)):l.substr(0,5)==="oklch"?YE(G8(n)):(n[0]=$d(n[0]),n[1]=$d(n[1]),n[2]=$d(n[2]),(l==="rgba"||n.length>3&&n[3]<1)&&(n[3]="/ "+(n.length>3?n[3]:1),l="rgba"),`${l.substr(0,3)}(${n.slice(0,l==="rgb"?3:4).join(" ")})`)},q8=(...e)=>{e=xe(e,"lch");let[n,l,r,...o]=e,[s,u,f]=R8(n,l,r),[d,h,y]=J1(s,u,f);return[d,h,y,...o.length>0&&o[0]<1?[o[0]]:[]]},ml="((?:-?\\d+)|(?:-?\\d+(?:\\.\\d+)?)%|none)",Ln="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%?)|none)",gc="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%)|none)",th="\\s*,\\s*",Rc="((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:deg)?)|none)",jr="\\s*(?:\\/\\s*((?:[01]|[01]?\\.\\d+)|\\d+(?:\\.\\d+)?%))?",$8=RegExp("^rgba?\\(\\s*"+[ml,ml,ml].join("\\s+")+jr+"\\)$"),j8=RegExp("^rgb\\(\\s*"+[ml,ml,ml].join(th)+"\\s*\\)$"),U8=RegExp("^rgba\\(\\s*"+[ml,ml,ml,Ln].join(th)+"\\s*\\)$"),Z8=RegExp("^hsla?\\(\\s*"+[Rc,gc,gc].join("\\s+")+jr+"\\)$"),H8=RegExp("^hsl?\\(\\s*"+[Rc,gc,gc].join(th)+"\\s*\\)$"),K8=/^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,V8=RegExp("^lab\\(\\s*"+[Ln,Ln,Ln].join("\\s+")+jr+"\\)$"),X8=RegExp("^lch\\(\\s*"+[Ln,Ln,Rc].join("\\s+")+jr+"\\)$"),Y8=RegExp("^oklab\\(\\s*"+[Ln,Ln,Ln].join("\\s+")+jr+"\\)$"),Q8=RegExp("^oklch\\(\\s*"+[Ln,Ln,Rc].join("\\s+")+jr+"\\)$"),{round:W8}=Math,xr=e=>e.map((n,l)=>l<=2?Ci(W8(n),0,255):n),dt=(e,n=0,l=100,r=!1)=>(typeof e=="string"&&e.endsWith("%")&&(e=parseFloat(e.substring(0,e.length-1))/100,e=r?n+(e+1)*.5*(l-n):n+e*(l-n)),+e),Rt=(e,n)=>e==="none"?n:e,b1=e=>{if(e=e.toLowerCase().trim(),e==="transparent")return[0,0,0,0];let n;if(ke.format.named)try{return ke.format.named(e)}catch{}if((n=e.match($8))||(n=e.match(j8))){let l=n.slice(1,4);for(let o=0;o<3;o++)l[o]=+dt(Rt(l[o],0),0,255);l=xr(l);let r=n[4]===void 0?1:+dt(n[4],0,1);return l[3]=r,l}if(n=e.match(U8)){let l=n.slice(1,5);for(let r=0;r<4;r++)l[r]=+dt(l[r],0,255);return l}if((n=e.match(Z8))||(n=e.match(H8))){let l=n.slice(1,4);l[0]=+Rt(l[0].replace("deg",""),0),l[1]=dt(Rt(l[1],0),0,100)*.01,l[2]=dt(Rt(l[2],0),0,100)*.01;let r=xr(m1(l));return r[3]=n[4]===void 0?1:+dt(n[4],0,1),r}if(n=e.match(K8)){let l=n.slice(1,4);l[1]*=.01,l[2]*=.01;let r=m1(l);for(let o=0;o<3;o++)r[o]=W8(r[o]);return r[3]=+n[4],r}if(n=e.match(V8)){let l=n.slice(1,4);l[0]=dt(Rt(l[0],0),0,100),l[1]=dt(Rt(l[1],0),-125,125,!0),l[2]=dt(Rt(l[2],0),-125,125,!0);let r=no();gl("d50");let o=xr(Y1(l));return gl(r),o[3]=n[4]===void 0?1:+dt(n[4],0,1),o}if(n=e.match(X8)){let l=n.slice(1,4);l[0]=dt(l[0],0,100),l[1]=dt(Rt(l[1],0),0,150,!1),l[2]=+Rt(l[2].replace("deg",""),0);let r=no();gl("d50");let o=xr(W1(l));return gl(r),o[3]=n[4]===void 0?1:+dt(n[4],0,1),o}if(n=e.match(Y8)){let l=n.slice(1,4);l[0]=dt(Rt(l[0],0),0,1),l[1]=dt(Rt(l[1],0),-.4,.4,!0),l[2]=dt(Rt(l[2],0),-.4,.4,!0);let r=xr(J1(l));return r[3]=n[4]===void 0?1:+dt(n[4],0,1),r}if(n=e.match(Q8)){let l=n.slice(1,4);l[0]=dt(Rt(l[0],0),0,1),l[1]=dt(Rt(l[1],0),0,.4,!1),l[2]=+Rt(l[2].replace("deg",""),0);let r=xr(q8(l));return r[3]=n[4]===void 0?1:+dt(n[4],0,1),r}};b1.test=e=>$8.test(e)||Z8.test(e)||V8.test(e)||X8.test(e)||Y8.test(e)||Q8.test(e)||j8.test(e)||U8.test(e)||H8.test(e)||K8.test(e)||e==="transparent",Q.prototype.css=function(e){return QE(this._rgb,e)};const WE=(...e)=>new Q(...e,"css");Oe.css=WE,ke.format.css=b1,ke.autodetect.push({p:5,test:(e,...n)=>{if(!n.length&&we(e)==="string"&&b1.test(e))return"css"}}),ke.format.gl=(...e)=>{let n=xe(e,"rgba");return n[0]*=255,n[1]*=255,n[2]*=255,n};const JE=(...e)=>new Q(...e,"gl");Oe.gl=JE,Q.prototype.gl=function(){let e=this._rgb;return[e[0]/255,e[1]/255,e[2]/255,e[3]]},Q.prototype.hex=function(e){return O8(this._rgb,e)};const eC=(...e)=>new Q(...e,"hex");Oe.hex=eC,ke.format.hex=_8,ke.autodetect.push({p:4,test:(e,...n)=>{if(!n.length&&we(e)==="string"&&[3,4,5,6,7,8,9].indexOf(e.length)>=0)return"hex"}});const{log:Zs}=Math,J8=e=>{let n=e/100,l,r,o;return n<66?(l=255,r=n<6?0:-155.25485562709179-.44596950469579133*(r=n-2)+104.49216199393888*Zs(r),o=n<20?0:-254.76935184120902+.8274096064007395*(o=n-10)+115.67994401066147*Zs(o)):(l=351.97690566805693+.114206453784165*(l=n-55)-40.25366309332127*Zs(l),r=325.4494125711974+.07943456536662342*(r=n-50)-28.0852963507957*Zs(r),o=255),[l,r,o,1]},{round:tC}=Math,nC=(...e)=>{let n=xe(e,"rgb"),l=n[0],r=n[2],o=1e3,s=4e4,u;for(;s-o>.4;){u=(s+o)*.5;let f=J8(u);f[2]/f[0]>=r/l?s=u:o=u}return tC(u)};Q.prototype.temp=Q.prototype.kelvin=Q.prototype.temperature=function(){return nC(this._rgb)};const jd=(...e)=>new Q(...e,"temp");Object.assign(Oe,{temp:jd,kelvin:jd,temperature:jd}),ke.format.temp=ke.format.kelvin=ke.format.temperature=J8,Q.prototype.oklch=function(){return G8(this._rgb)};const lC=(...e)=>new Q(...e,"oklch");Object.assign(Oe,{oklch:lC}),ke.format.oklch=q8,ke.autodetect.push({p:2,test:(...e)=>{if(e=xe(e,"oklch"),we(e)==="array"&&e.length===3)return"oklch"}}),Object.assign(Oe,{analyze:F8,average:oE,bezier:hE,blend:An,brewer:$E,Color:Q,colors:wr,contrast:LE,contrastAPCA:RE,cubehelix:CE,deltaE:IE,distance:ME,input:ke,interpolate:Rr,limits:I8,mix:Rr,random:DE,scale:pc,scales:qE,valid:GE});var bn=Oe;const v1=[.96,.907,.805,.697,.605,.547,.518,.445,.395,.34],C4=[.32,.16,.08,.04,0,0,.04,.08,.16,.32];function iC(e){let n=e.get("hsl.l");return v1.reduce((l,r)=>Math.abs(r-n)<Math.abs(l-n)?r:l)}function rC(e){let n=bn(e),l=iC(n),r=v1.findIndex(s=>s===l),o=v1.map(s=>n.set("hsl.l",s)).map(s=>bn(s)).map((s,u)=>{let f=C4[u]-C4[r];return f>=0?s.saturate(f):s.desaturate(f*-1)});return o[r]=bn(e),{baseColorIndex:r,colors:o}}function aC(e){return rC(e).colors.map(n=>n.hex())}function nh(e){return $5(e,n=>n===void 0)}function zr(e){return e.summary??e.description}function Pr(e){return e.description??e.summary}function A4(e,n){return e[Bi]===n}const Bi="_stage",qa="_type",k1="_layout";co({DeploymentFqn:()=>dC,EdgeId:()=>yC,Fqn:()=>fC,GlobalFqn:()=>lh,GroupElementKind:()=>e6,MarkdownOrString:()=>sC,NodeId:()=>gC,NoneIcon:()=>uC,ProjectId:()=>oC,RelationId:()=>pC,StepEdgeKind:()=>TC,ViewId:()=>hC,extractStep:()=>i6,flattenMarkdownOrString:()=>cC,isGlobalFqn:()=>n6,isGroupElementKind:()=>t6,isStepEdgeId:()=>zc,splitGlobalFqn:()=>l6,stepEdgeId:()=>mC});function oC(e){return e}function sC(e){return typeof e=="string"?{txt:e}:e}function cC(e){if(Or(e))return null;let n=Sn(e)?e:e.txt??e.md;return On(n?.trim())?n:null}const uC="none";function fC(e,n){return n?n+"."+e:e}const e6="@group";function t6(e){return e.kind===e6}function dC(e,n){return n?n+"."+e:e}function hC(e){return e}function pC(e){return e}function lh(e,n){return ye(typeof e=="string"&&e!=""),"@"+e+"."+n}function n6(e){return e.startsWith("@")}function l6(e){if(!e.startsWith("@"))return[null,e];let n=e.indexOf(".");if(n<2)throw Error("Invalid global FQN");return[e.slice(1,n),e.slice(n+1)]}function gC(e){return e}function yC(e){return e}function mC(e,n){let l=`step-${String(e).padStart(2,"0")}`;return n?`${l}.${n}`:l}const TC="@step";function zc(e){return e.startsWith("step-")}function i6(e){if(!zc(e))throw Error(`Invalid step edge id: ${e}`);return parseFloat(e.slice(5))}let Si;(function(e){function n(d){return"model"in d&&!("project"in d)}e.isElementRef=n;function l(d){return"project"in d&&"model"in d}e.isImportRef=l;function r(d){if(Sn(d))throw Error(`Expected FqnRef, got: "${d}"`);if(l(d))return lh(d.project,d.model);if(n(d))return d.model;throw Error("Expected FqnRef.ModelRef or FqnRef.ImportRef")}e.flatten=r;function o(d){return n(d)||l(d)}e.isModelRef=o;function s(d){return"deployment"in d&&"element"in d}e.isInsideInstanceRef=s;function u(d){return"deployment"in d&&!("element"in d)}e.isDeploymentElementRef=u;function f(d){return u(d)||s(d)}e.isDeploymentRef=f})(Si||={});let $a;(function(e){function n(y){return"wildcard"in y&&y.wildcard===!0}e.isWildcard=n;function l(y){return"ref"in y&&Si.isModelRef(y.ref)}e.isModelRef=l;function r(y){return"ref"in y&&Si.isDeploymentRef(y.ref)}e.isDeploymentRef=r;function o(y){return"elementKind"in y&&"isEqual"in y}e.isElementKindExpr=o;function s(y){return"elementTag"in y&&"isEqual"in y}e.isElementTagExpr=s;function u(y){return"where"in y&&d(y.where.expr)}e.isWhere=u;function f(y){return"custom"in y&&(d(y.custom.expr)||u(y.custom.expr))}e.isCustom=f;function d(y){return n(y)||l(y)||r(y)||o(y)||s(y)}e.is=d;function h(y){return f(y)&&(y=y.custom.expr),u(y)&&(y=y.where.expr),y}e.unwrap=h})($a||={});let ja;(function(e){function n(h){return"source"in h&&"target"in h}e.isDirect=n;function l(h){return"incoming"in h}e.isIncoming=l;function r(h){return"outgoing"in h}e.isOutgoing=r;function o(h){return"inout"in h}e.isInOut=o;function s(h){return"where"in h&&(n(h.where.expr)||l(h.where.expr)||r(h.where.expr)||o(h.where.expr))}e.isWhere=s;function u(h){return"customRelation"in h}e.isCustom=u;function f(h){return n(h)||l(h)||r(h)||o(h)}e.is=f;function d(h){return u(h)&&(h=h.customRelation.expr),s(h)&&(h=h.where.expr),h}e.unwrap=d})(ja||={});let bC;(function(e){function n(u){return"where"in u}e.isWhere=n;function l(u){return ja.isWhere(u)}e.isRelationWhere=l;function r(u){return $a.isWhere(u)}e.isFqnExprWhere=r;function o(u){return $a.is(u)||$a.isWhere(u)||$a.isCustom(u)}e.isFqnExpr=o;function s(u){return ja.is(u)||ja.isWhere(u)||ja.isCustom(u)}e.isRelation=s})(bC||={});let Ua;(function(e){function n(h){return"wildcard"in h&&h.wildcard===!0}e.isWildcard=n;function l(h){return"ref"in h&&Si.isModelRef(h.ref)}e.isModelRef=l;function r(h){return"elementKind"in h&&"isEqual"in h}e.isElementKindExpr=r;function o(h){return"elementTag"in h&&"isEqual"in h}e.isElementTagExpr=o;function s(h){return"where"in h&&f(h.where.expr)}e.isWhere=s;function u(h){return"custom"in h&&(f(h.custom.expr)||s(h.custom.expr))}e.isCustom=u;function f(h){return n(h)||l(h)||r(h)||o(h)}e.is=f;function d(h){return u(h)&&(h=h.custom.expr),s(h)&&(h=h.where.expr),h}e.unwrap=d})(Ua||={});let Za;(function(e){function n(h){return"source"in h&&"target"in h}e.isDirect=n;function l(h){return"incoming"in h}e.isIncoming=l;function r(h){return"outgoing"in h}e.isOutgoing=r;function o(h){return"inout"in h}e.isInOut=o;function s(h){return"where"in h&&(n(h.where.expr)||l(h.where.expr)||r(h.where.expr)||o(h.where.expr))}e.isWhere=s;function u(h){return"customRelation"in h}e.isCustom=u;function f(h){return n(h)||l(h)||r(h)||o(h)}e.is=f;function d(h){return u(h)&&(h=h.customRelation.expr),s(h)&&(h=h.where.expr),h}e.unwrap=d})(Za||={});let vC;(function(e){function n(u){return"where"in u}e.isWhere=n;function l(u){return Za.isWhere(u)}e.isRelationWhere=l;function r(u){return Ua.isWhere(u)}e.isFqnExprWhere=r;function o(u){return Ua.is(u)||Ua.isWhere(u)||Ua.isCustom(u)}e.isFqnExpr=o;function s(u){return Za.is(u)||Za.isWhere(u)||Za.isCustom(u)}e.isRelationExpr=s})(vC||={});function kC(e){return On(e.kind)&&!On(e.element)}const S4={fill:"#3b82f6",stroke:"#2563eb",hiContrast:"#eff6ff",loContrast:"#bfdbfe"},D4={fill:"#0284c7",stroke:"#0369a1",hiContrast:"#f0f9ff",loContrast:"#B6ECF7"},_4={fill:"#64748b",stroke:"#475569",hiContrast:"#f8fafc",loContrast:"#cbd5e1"},xC={primary:S4,blue:S4,secondary:D4,sky:D4,muted:_4,slate:_4,gray:{fill:"#737373",stroke:"#525252",hiContrast:"#fafafa",loContrast:"#d4d4d4"},red:{fill:"#AC4D39",stroke:"#853A2D",hiContrast:"#FBD3CB",loContrast:"#f5b2a3"},green:{fill:"#428a4f",stroke:"#2d5d39",hiContrast:"#f8fafc",loContrast:"#c2f0c2"},amber:{fill:"#A35829",stroke:"#7E451D",hiContrast:"#FFE0C2",loContrast:"#f9b27c"},indigo:{fill:"#6366f1",stroke:"#4f46e5",hiContrast:"#eef2ff",loContrast:"#c7d2fe"}},BC={line:"#8D8D8D",labelBg:"#18191B",label:"#C9C9C9"},O4={line:"#64748b",labelBg:"#0f172a",label:"#cbd5e1"},N4={line:"#3b82f6",labelBg:"#172554",label:"#60a5fa"},L4={line:"#0ea5e9",labelBg:"#082f49",label:"#38bdf8"},wC={amber:{line:"#b45309",labelBg:"#78350f",label:"#FFE0C2"},blue:N4,gray:BC,green:{line:"#15803d",labelBg:"#052e16",label:"#22c55e"},indigo:{line:"#6366f1",labelBg:"#1e1b4b",label:"#818cf8"},muted:O4,primary:N4,red:{line:"#AC4D39",labelBg:"#b91c1c",label:"#f5b2a3"},secondary:L4,sky:L4,slate:O4},EC={sizes:{xs:{width:180,height:100},sm:{width:240,height:135},md:{width:320,height:180},lg:{width:420,height:234},xl:{width:520,height:290}},spacing:{xs:8,sm:10,md:16,lg:24,xl:32},textSizes:{xs:13.33,sm:16,md:19.2,lg:23.04,xl:27.65},iconSizes:{xs:24,sm:36,md:60,lg:82,xl:90}},BS=["rectangle","person","browser","mobile","cylinder","storage","queue","bucket","document","component"],CC=["amber","blue","gray","slate","green","indigo","muted","primary","red","secondary","sky"],wS=["tomato","grass","blue","ruby","orange","indigo","pink","teal","purple","amber","crimson","red","lime","yellow","violet"],r6={tomato:HB.tomato9,grass:nw.grass9,blue:ew.blue9,ruby:VB.ruby9,orange:aw.orange9,indigo:JB.indigo9,pink:YB.pink9,teal:tw.teal9,purple:QB.purple9,amber:rw.amber9,crimson:XB.crimson9,red:KB.red9,lime:lw.lime9,yellow:iw.yellow9,violet:WB.violet9};function AC(e){return e in r6}const SC={colors:CC.reduce((e,n)=>(e[n]={elements:xC[n],relationships:wC[n]},e),{}),...EC};function DC(e){ye(bn.valid(e),`Invalid color: ${e}`);let n=aC(e),l=n[6],r=_C(l);return{elements:{fill:l,stroke:n[7],...r},relationships:{line:n[4],label:n[3],labelBg:n[9]}}}function _C(e){let n=bn(e),l=n.brighten(2),r=n.darken(2),o,s,u,f;do o=l,s=r,l=l.brighten(1),r=r.darken(1),u=bn.contrastAPCA(n,l),f=bn.contrastAPCA(n,r);while(Math.abs(u)<60&&Math.abs(f)<60&&(!ac(l,o)||!ac(r,s)));return Math.abs(u)>Math.abs(f)?{hiContrast:l.brighten(.4).hex(),loContrast:l.hex()}:{hiContrast:r.darken(.4).hex(),loContrast:r.hex()}}function OC(e,n){let l=n??6,r=bn(e.fill),o=bn(e.stroke),s=r.luminance()>.8,u=Rn(W5(bn.scale(s?[r.darken(.02).desaturate(.05),r.darken(.1).desaturate(.1)]:[r.shade(.12,"lch").desaturate(.05),r.shade(.35,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(l,null),bn.scale(s?[o.darken(.04).desaturate(.05),o.darken(.12).desaturate(.1)]:[o.shade(.15,"lch").desaturate(.08),o.shade(.4,"lch").desaturate(.4)]).mode("oklch").correctLightness().colors(l,null)),Qa(([f,d])=>({...e,fill:f.hex(),stroke:d.hex()})));return ye(u.length===l,`Expected ${l} colors, got ${u.length}`),u}const NC={color:"primary",size:"md",opacity:15,shape:"rectangle",group:{opacity:15,border:"dashed"},relationship:{color:"gray",line:"dashed",arrow:"normal"}},LC=SC,Qs={theme:LC,defaults:NC};var RC=class x1{theme;defaults;static DEFAULT=new x1(Qs);static from(n,l){if(!n&&!l)return this.DEFAULT;let{customCss:r,theme:o,defaults:s}={...n},u=W4({theme:o},{defaults:{...s}},{theme:{colors:{...l}}},Qs);return Or(r?.content)&&ac(u,Qs)?this.DEFAULT:new x1(u,r)}constructor(n,l){this.config=n,this.customCss=l,this.theme=n.theme,this.defaults=n.defaults}get fingerprint(){return Fe(this,"fingerprint",()=>$B({config:this.config,customCss:this.customCss}))}get elementColors(){return this.theme.colors[this.defaults.color].elements}get relationshipColors(){return this.theme.colors[this.defaults.relationship.color].relationships}get groupColors(){let n=this.defaults.group?.color;if(!n)return this.elementColors;if(!this.isThemeColor(n))throw Error(`Default group color not found in theme: ${n}`);return Fe(this,"defaultGroup",()=>({...this.elementColors,...this.theme.colors[n].elements}))}isDefaultColor(n){return n===this.defaults.color}colors(n){return this.computeFrom(n??this.defaults.color)}compoundColorsCache=new F1.default(n=>new kt.default(l=>OC(n,l)));colorsForCompounds(n,l){return this.compoundColorsCache.get(n).get(l??6)}fontSize(n){return n??=this.defaults.text??this.defaults.size,this.theme.textSizes[n]}padding(n){return n??=this.defaults.padding??this.defaults.size,this.theme.spacing[n]}iconSize(n){return n??=this.defaults.size,this.theme.iconSizes[n]}isThemeColor(n){return n in this.theme.colors}nodeSizes(n){let l=zC(n,this.defaults.size);return{sizes:l,values:{sizes:this.theme.sizes[l.size],padding:this.padding(l.padding),textSize:this.fontSize(l.textSize),iconSize:this.iconSize(l.iconSize)}}}computeFrom(n){if(this.isThemeColor(n))return this.theme.colors[n];if(!bn.valid(n))throw Error(`Invalid color value: "${n}" (not a theme color and not a valid CSS color)`);return DC(n)}equals(n){return n===this?!0:this.constructor===n.constructor?this.fingerprint===n.fingerprint:!1}tagColor(n){return this.isThemeColor(n)?this.theme.colors[n].elements:AC(n)?this.computeFrom(r6[n]).elements:this.computeFrom(n).elements}};function zC({size:e,padding:n,textSize:l,iconSize:r,...o},s=Qs.defaults.size){return e??=s,l??=e,n??=e,r??=e,{...o,size:e,padding:n,textSize:l,iconSize:r}}function ES(e){let n=typeof e=="string"?e:e.color;return n.startsWith("#")||n.startsWith("rgb")}function PC(e){return"tag"in e}function FC(e){return"kind"in e}function IC(e){return"metadata"in e}function MC(e){return"participant"in e}function GC(e){return"not"in e}function qC(e){return"and"in e}function $C(e){return"or"in e}function Ar(e){switch(!0){case MC(e):{let n=e.participant;return jC(n,Ar(e.operator))}case PC(e):{if(Sn(e.tag)||"eq"in e.tag){let l=Sn(e.tag)?e.tag:e.tag.eq;return r=>Array.isArray(r.tags)&&r.tags.includes(l)}let n=e.tag.neq;return l=>!Array.isArray(l.tags)||!l.tags.includes(n)}case FC(e):{if(Sn(e.kind)||"eq"in e.kind){let l=Sn(e.kind)?e.kind:e.kind.eq;return r=>r.kind===l}let n=e.kind.neq;return l=>lt(l.kind)||l.kind!==n}case IC(e):{let{key:n,value:l}=e.metadata;if(l===void 0)return o=>o.metadata!=null&&n in o.metadata&&o.metadata[n]!=null;if(Sn(l)||"eq"in l){let o=Sn(l)?l:l.eq;return s=>{if(!s.metadata)return!1;let u=s.metadata[n];return Array.isArray(u)?u.includes(o):u===o}}let r=l.neq;return o=>{if(!o.metadata)return!0;let s=o.metadata[n];return s==null?!0:Array.isArray(s)?!s.includes(r):s!==r}}case GC(e):return n3(Ar(e.not));case qC(e):return u5(e.and.map(Ar));case $C(e):return d5(e.or.map(Ar));default:b8(e)}}function jC(e,n){return l=>{if(!l.source||!l.target)return!1;switch(e){case"source":return n(l.source);case"target":return n(l.target)}}}function UC(e){return e._type==="element"}function ZC(e){return e._type==="dynamic"}function CS(e){return zc(e)&&e.includes(".")?e.slice(0,e.indexOf(".")+1):null}const HC=Symbol.for("text"),KC=Symbol.for("html");var Vt=class St{static mdcache=new Bg.default(500);static txtcache=new Bg.default(500);static getOrCreateFromText(n){if(n=n.trimEnd(),n==="")return St.EMPTY;let l=St.txtcache.get(n);return l||(l=new St({txt:n}),St.txtcache.set(n,l),l)}static getOrCreateFromMarkdown(n){if(n=n.trimEnd(),n==="")return St.EMPTY;let l=St.mdcache.get(n);return l||(l=new St({md:n}),St.mdcache.set(n,l),l)}static memoize(n,l,r){return Fe(n,l,()=>St.from(r))}static from(n){return n==null||n===St.EMPTY?St.EMPTY:n instanceof St?n:typeof n=="string"?this.getOrCreateFromText(n):"isEmpty"in n&&n.isEmpty?St.EMPTY:"md"in n?this.getOrCreateFromMarkdown(n.md):this.getOrCreateFromText(n.txt)}static EMPTY=new class extends St{isEmpty=!0;nonEmpty=!1;isMarkdown=!1;$source=null;constructor(){super({txt:""})}get text(){return null}get md(){return null}get html(){return null}};$source;isEmpty;nonEmpty;isMarkdown;constructor(n){this.isMarkdown=!1,typeof n=="string"?(this.$source={txt:n},this.isEmpty=n.trim()===""):(this.$source=n,this.isEmpty=!0,"md"in n?(this.isEmpty=n.md==="",this.isMarkdown=!0):this.isEmpty=n.txt===""),this.nonEmpty=!this.isEmpty}get text(){if(this.isEmpty||this.$source===null)return"";let n=this.$source;return"txt"in n?n.txt:Fe(this,HC,()=>ZB(n.md))}get md(){if(this.isEmpty||this.$source===null)return"";let n=this.$source;if("md"in n)return n.md;if("txt"in n)return n.txt;b8(n)}get html(){if(this.isEmpty||this.$source===null)return"";let n=this.$source;return"txt"in n?n.txt:Fe(this,KC,()=>UB(n.md))}equals(n){return this===n?!0:n instanceof St?this.isEmpty&&n.isEmpty?!0:this.isEmpty!==n.isEmpty||this.isMarkdown!==n.isMarkdown?!1:this.isMarkdown?this.$source?.md===n.$source?.md:this.$source?.txt===n.$source?.txt:!1}};function VC(e){return Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"}function AS(e){return VC(e)?{x:e[0],y:e[1]}:[e.x,e.y]}const SS={center({x:e,y:n,width:l,height:r}){return{x:e+l/2,y:n+r/2}},toPoints({x:e,y:n,width:l,height:r}){return[{x:e,y:n},{x:e+l,y:n},{x:e+l,y:n+r},{x:e,y:n+r}]},fromPoints(e){let{x1:n,y1:l,x2:r,y2:o}=XC.fromPoints(e);return{x:n,y:l,width:r-n,height:o-l}},merge(...e){if(ye(jn(e,1),"No boxes provided"),e.length===1)return e[0];let n=e[0].x,l=e[0].y,r=e[0].x+e[0].width,o=e[0].y+e[0].height;for(let s=1;s<e.length;s++){let u=e[s];n=Math.min(n,u.x),l=Math.min(l,u.y),r=Math.max(r,u.x+u.width),o=Math.max(o,u.y+u.height)}return{x:Math.floor(n),y:Math.floor(l),width:Math.round(r-n),height:Math.round(o-l)}},fromRectBox(e){return{x:Math.min(e.x1,e.x2),y:Math.min(e.y1,e.y2),width:Math.abs(e.x2-e.x1),height:Math.abs(e.y2-e.y1)}},toRectBox(e){return{x1:e.x,y1:e.y,x2:e.x+e.width,y2:e.y+e.height}},expand(e,n){return n===0?e:{x:e.x-n,y:e.y-n,width:e.width+n*2,height:e.height+n*2}},shrink(e,n){return n===0?e:{x:e.x+n,y:e.y+n,width:e.width-n*2,height:e.height-n*2}},includes(e,n){return e===n?!0:e.x<=n.x&&e.y<=n.y&&e.x+e.width>=n.x+n.width&&e.y+e.height>=n.y+n.height}},XC={center({x1:e,y1:n,x2:l,y2:r}){return{x:(e+l)/2,y:(n+r)/2}},fromPoints(e){ye(e.length>0,"At least one point is required");let n=1/0,l=1/0,r=-1/0,o=-1/0;for(let[s,u]of e)n=Math.min(n,s),l=Math.min(l,u),r=Math.max(r,s),o=Math.max(o,u);return{x1:n,y1:l,x2:r,y2:o}},merge(...e){ye(e.length>0,"No boxes provided");let n=1/0,l=1/0,r=-1/0,o=-1/0;for(let s of e)n=Math.min(n,s.x1),l=Math.min(l,s.y1),r=Math.max(r,s.x2),o=Math.max(o,s.y2);return{x1:n,y1:l,x2:r,y2:o}},toBBox(e){return{x:e.x1,y:e.y1,width:e.x2-e.x1,height:e.y2-e.y1}},includes(e,n){return e===n?!0:e.x1<=n.x1&&e.y1<=n.y1&&e.x2>=n.x2&&e.y2>=n.y2}};var Ud=class Cn{constructor(n,l){this.x=n,this.y=l,ye(typeof n=="number"&&!isNaN(n)&&isFinite(n)&&typeof l=="number"&&!isNaN(l)&&isFinite(l),`Invalid arguments for Vector: (${n}, ${l})`)}static create(...n){return n.length===2?new Cn(n[0],n[1]):new Cn(n[0].x,n[0].y)}static add(n,l){return{x:n.x+l.x,y:n.y+l.y}}static subtract(n,l){return{x:n.x-l.x,y:n.y-l.y}}static multiply(n,l){return{x:n.x*l,y:n.y*l}}static divide(n,l){return{x:n.x/l,y:n.y/l}}static dot(n,l){return n.x*l.x+n.y*l.y}add(n){return new Cn(this.x+n.x,this.y+n.y)}subtract(n){return new Cn(this.x-n.x,this.y-n.y)}multiply(n){return new Cn(this.x*n,this.y*n)}divide(n){return new Cn(this.x/n,this.y/n)}dot(n){return this.x*n.x+this.y*n.y}cross(n){return this.x*n.y-this.y*n.x}length(){return this.x===0&&this.y===0?0:Math.sqrt(this.x**2+this.y**2)}normalize(){let n=this.length();return n===0?new Cn(0,0):new Cn(this.x/n,this.y/n)}round(){return new Cn(Math.round(this.x),Math.round(this.y))}trunc(){return new Cn(Math.trunc(this.x),Math.trunc(this.y))}toObject(){return{x:this.x,y:this.y}}};function DS(...e){return e.length===1&&e[0]instanceof Ud?e[0]:e.length===2?new Ud(e[0],e[1]):new Ud(e[0].x,e[0].y)}var a6=Symbol.for("immer-nothing"),R4=Symbol.for("immer-draftable"),Pt=Symbol.for("immer-state");function _n(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var rn=Object,Fr=rn.getPrototypeOf,yc="constructor",Pc="prototype",B1="configurable",mc="enumerable",Ws="writable",lo="value",Ql=e=>!!e&&!!e[Pt];function Tl(e){return e?o6(e)||Ic(e)||!!e[R4]||!!e[yc]?.[R4]||Mc(e)||Gc(e):!1}var YC=rn[Pc][yc].toString(),z4=new WeakMap;function o6(e){if(!e||!ih(e))return!1;const n=Fr(e);if(n===null||n===rn[Pc])return!0;const l=rn.hasOwnProperty.call(n,yc)&&n[yc];if(l===Object)return!0;if(!Er(l))return!1;let r=z4.get(l);return r===void 0&&(r=Function.toString.call(l),z4.set(l,r)),r===YC}function Fc(e,n,l=!0){go(e)===0?(l?Reflect.ownKeys(e):rn.keys(e)).forEach(o=>{n(o,e[o],e)}):e.forEach((r,o)=>n(o,r,e))}function go(e){const n=e[Pt];return n?n.type_:Ic(e)?1:Mc(e)?2:Gc(e)?3:0}var P4=(e,n,l=go(e))=>l===2?e.has(n):rn[Pc].hasOwnProperty.call(e,n),w1=(e,n,l=go(e))=>l===2?e.get(n):e[n],Tc=(e,n,l,r=go(e))=>{r===2?e.set(n,l):r===3?e.add(l):e[n]=l};function QC(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}var Ic=Array.isArray,Mc=e=>e instanceof Map,Gc=e=>e instanceof Set,ih=e=>typeof e=="object",Er=e=>typeof e=="function",Zd=e=>typeof e=="boolean";function WC(e){const n=+e;return Number.isInteger(n)&&String(n)===e}var pl=e=>e.copy_||e.base_,rh=e=>e.modified_?e.copy_:e.base_;function E1(e,n){if(Mc(e))return new Map(e);if(Gc(e))return new Set(e);if(Ic(e))return Array[Pc].slice.call(e);const l=o6(e);if(n===!0||n==="class_only"&&!l){const r=rn.getOwnPropertyDescriptors(e);delete r[Pt];let o=Reflect.ownKeys(r);for(let s=0;s<o.length;s++){const u=o[s],f=r[u];f[Ws]===!1&&(f[Ws]=!0,f[B1]=!0),(f.get||f.set)&&(r[u]={[B1]:!0,[Ws]:!0,[mc]:f[mc],[lo]:e[u]})}return rn.create(Fr(e),r)}else{const r=Fr(e);if(r!==null&&l)return{...e};const o=rn.create(r);return rn.assign(o,e)}}function ah(e,n=!1){return qc(e)||Ql(e)||!Tl(e)||(go(e)>1&&rn.defineProperties(e,{set:Hs,add:Hs,clear:Hs,delete:Hs}),rn.freeze(e),n&&Fc(e,(l,r)=>{ah(r,!0)},!1)),e}function JC(){_n(2)}var Hs={[lo]:JC};function qc(e){return e===null||!ih(e)?!0:rn.isFrozen(e)}var bc="MapSet",C1="Patches",F4="ArrayMethods",s6={};function Di(e){const n=s6[e];return n||_n(0,e),n}var I4=e=>!!s6[e],io,c6=()=>io,eA=(e,n)=>({drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:I4(bc)?Di(bc):void 0,arrayMethodsPlugin_:I4(F4)?Di(F4):void 0});function M4(e,n){n&&(e.patchPlugin_=Di(C1),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function A1(e){S1(e),e.drafts_.forEach(tA),e.drafts_=null}function S1(e){e===io&&(io=e.parent_)}var G4=e=>io=eA(io,e);function tA(e){const n=e[Pt];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function q4(e,n){n.unfinalizedDrafts_=n.drafts_.length;const l=n.drafts_[0];if(e!==void 0&&e!==l){l[Pt].modified_&&(A1(n),_n(4)),Tl(e)&&(e=$4(n,e));const{patchPlugin_:o}=n;o&&o.generateReplacementPatches_(l[Pt].base_,e,n)}else e=$4(n,l);return nA(n,e,!0),A1(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==a6?e:void 0}function $4(e,n){if(qc(n))return n;const l=n[Pt];if(!l)return vc(n,e.handledSet_,e);if(!$c(l,e))return n;if(!l.modified_)return l.base_;if(!l.finalized_){const{callbacks_:r}=l;if(r)for(;r.length>0;)r.pop()(e);d6(l,e)}return l.copy_}function nA(e,n,l=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ah(n,l)}function u6(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var $c=(e,n)=>e.scope_===n,lA=[];function f6(e,n,l,r){const o=pl(e),s=e.type_;if(r!==void 0&&w1(o,r,s)===n){Tc(o,r,l,s);return}if(!e.draftLocations_){const f=e.draftLocations_=new Map;Fc(o,(d,h)=>{if(Ql(h)){const y=f.get(h)||[];y.push(d),f.set(h,y)}})}const u=e.draftLocations_.get(n)??lA;for(const f of u)Tc(o,f,l,s)}function iA(e,n,l){e.callbacks_.push(function(o){const s=n;if(!s||!$c(s,o))return;o.mapSetPlugin_?.fixSetContents(s);const u=rh(s);f6(e,s.draft_??s,u,l),d6(s,o)})}function d6(e,n){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){const{patchPlugin_:r}=n;if(r){const o=r.getPath(e);o&&r.generatePatches_(e,o,n)}u6(e)}}function rA(e,n,l){const{scope_:r}=e;if(Ql(l)){const o=l[Pt];$c(o,r)&&o.callbacks_.push(function(){Js(e);const u=rh(o);f6(e,l,u,n)})}else Tl(l)&&e.callbacks_.push(function(){const s=pl(e);e.type_===3?s.has(l)&&vc(l,r.handledSet_,r):w1(s,n,e.type_)===l&&r.drafts_.length>1&&(e.assigned_.get(n)??!1)===!0&&e.copy_&&vc(w1(e.copy_,n,e.type_),r.handledSet_,r)})}function vc(e,n,l){return!l.immer_.autoFreeze_&&l.unfinalizedDrafts_<1||Ql(e)||n.has(e)||!Tl(e)||qc(e)||(n.add(e),Fc(e,(r,o)=>{if(Ql(o)){const s=o[Pt];if($c(s,l)){const u=rh(s);Tc(e,r,u,e.type_),u6(s)}}else Tl(o)&&vc(o,n,l)})),e}function aA(e,n){const l=Ic(e),r={type_:l?1:0,scope_:n?n.scope_:c6(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let o=r,s=kc;l&&(o=[r],s=ro);const{revoke:u,proxy:f}=Proxy.revocable(o,s);return r.draft_=f,r.revoke_=u,[f,r]}var kc={get(e,n){if(n===Pt)return e;let l=e.scope_.arrayMethodsPlugin_;const r=e.type_===1&&typeof n=="string";if(r&&l?.isArrayOperationMethod(n))return l.createMethodInterceptor(e,n);const o=pl(e);if(!P4(o,n,e.type_))return oA(e,o,n);const s=o[n];if(e.finalized_||!Tl(s)||r&&e.operationMethod&&l?.isMutatingArrayMethod(e.operationMethod)&&WC(n))return s;if(s===Hd(e.base_,n)){Js(e);const u=e.type_===1?+n:n,f=_1(e.scope_,s,e,u);return e.copy_[u]=f}return s},has(e,n){return n in pl(e)},ownKeys(e){return Reflect.ownKeys(pl(e))},set(e,n,l){const r=h6(pl(e),n);if(r?.set)return r.set.call(e.draft_,l),!0;if(!e.modified_){const o=Hd(pl(e),n),s=o?.[Pt];if(s&&s.base_===l)return e.copy_[n]=l,e.assigned_.set(n,!1),!0;if(QC(l,o)&&(l!==void 0||P4(e.base_,n,e.type_)))return!0;Js(e),D1(e)}return e.copy_[n]===l&&(l!==void 0||n in e.copy_)||Number.isNaN(l)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=l,e.assigned_.set(n,!0),rA(e,n,l)),!0},deleteProperty(e,n){return Js(e),Hd(e.base_,n)!==void 0||n in e.base_?(e.assigned_.set(n,!1),D1(e)):e.assigned_.delete(n),e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const l=pl(e),r=Reflect.getOwnPropertyDescriptor(l,n);return r&&{[Ws]:!0,[B1]:e.type_!==1||n!=="length",[mc]:r[mc],[lo]:l[n]}},defineProperty(){_n(11)},getPrototypeOf(e){return Fr(e.base_)},setPrototypeOf(){_n(12)}},ro={};for(let e in kc){let n=kc[e];ro[e]=function(){const l=arguments;return l[0]=l[0][0],n.apply(this,l)}}ro.deleteProperty=function(e,n){return ro.set.call(this,e,n,void 0)};ro.set=function(e,n,l){return kc.set.call(this,e[0],n,l,e[0])};function Hd(e,n){const l=e[Pt];return(l?pl(l):e)[n]}function oA(e,n,l){const r=h6(n,l);return r?lo in r?r[lo]:r.get?.call(e.draft_):void 0}function h6(e,n){if(!(n in e))return;let l=Fr(e);for(;l;){const r=Object.getOwnPropertyDescriptor(l,n);if(r)return r;l=Fr(l)}}function D1(e){e.modified_||(e.modified_=!0,e.parent_&&D1(e.parent_))}function Js(e){e.copy_||(e.assigned_=new Map,e.copy_=E1(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var sA=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(n,l,r)=>{if(Er(n)&&!Er(l)){const s=l;l=n;const u=this;return function(d=s,...h){return u.produce(d,y=>l.call(this,y,...h))}}Er(l)||_n(6),r!==void 0&&!Er(r)&&_n(7);let o;if(Tl(n)){const s=G4(this),u=_1(s,n,void 0);let f=!0;try{o=l(u),f=!1}finally{f?A1(s):S1(s)}return M4(s,r),q4(o,s)}else if(!n||!ih(n)){if(o=l(n),o===void 0&&(o=n),o===a6&&(o=void 0),this.autoFreeze_&&ah(o,!0),r){const s=[],u=[];Di(C1).generateReplacementPatches_(n,o,{patches_:s,inversePatches_:u}),r(s,u)}return o}else _n(1,n)},this.produceWithPatches=(n,l)=>{if(Er(n))return(u,...f)=>this.produceWithPatches(u,d=>n(d,...f));let r,o;return[this.produce(n,l,(u,f)=>{r=u,o=f}),r,o]},Zd(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Zd(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Zd(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Tl(e)||_n(8),Ql(e)&&(e=cA(e));const n=G4(this),l=_1(n,e,void 0);return l[Pt].isManual_=!0,S1(n),l}finishDraft(e,n){const l=e&&e[Pt];(!l||!l.isManual_)&&_n(9);const{scope_:r}=l;return M4(r,n),q4(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,n){let l;for(l=n.length-1;l>=0;l--){const o=n[l];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}l>-1&&(n=n.slice(l+1));const r=Di(C1).applyPatches_;return Ql(e)?r(e,n):this.produce(e,o=>r(o,n))}};function _1(e,n,l,r){const[o,s]=Mc(n)?Di(bc).proxyMap_(n,l):Gc(n)?Di(bc).proxySet_(n,l):aA(n,l);return(l?.scope_??c6()).drafts_.push(o),s.callbacks_=l?.callbacks_??[],s.key_=r,l&&r!==void 0?iA(l,s,r):s.callbacks_.push(function(d){d.mapSetPlugin_?.fixSetContents(s);const{patchPlugin_:h}=d;s.modified_&&h&&h.generatePatches_(s,[],d)}),o}function cA(e){return Ql(e)||_n(10,e),p6(e)}function p6(e){if(!Tl(e)||qc(e))return e;const n=e[Pt];let l,r=!0;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,l=E1(e,n.scope_.immer_.useStrictShallowCopy_),r=n.scope_.immer_.shouldUseStrictIteration()}else l=E1(e,!0);return Fc(l,(o,s)=>{Tc(l,o,p6(s))},r),n&&(n.finalized_=!1),l}var uA=new sA,wi=uA.produce,xc=e=>e;function fA(e){return Rn(e,t3(n=>!!n.notation),pd(ki("notation")),gd(yd(pd(ki("shape")),gd(yd(pd(ki("color")),gd(yd(Qa(ki("kind")),Ec())),Ha(),Qa(([n,l])=>({kinds:l,color:n})))),Ha(),bg(([n,l])=>l.map(({color:r,kinds:o})=>({shape:n,color:r,kinds:o}))))),Ha(),bg(([n,l])=>l.map(({shape:r,color:o,kinds:s})=>({title:n,shape:r,color:o,kinds:s}))),l3(ki("shape"),ki("title"),[n=>n.kinds.length,"desc"]))}const pt=(e,n)=>e===n||lt(e)&&lt(n)?!1:!ac(e,n);function dA(e,n){e.color=n.color,e.kind=n.kind,e.navigateTo=n.navigateTo??null,e.links=n.links?[...n.links]:null,e.tags=[...n.tags],lt(n.style.border)?delete e.style.border:e.style.border=n.style.border,L5(n.style.opacity)?e.style.opacity=n.style.opacity:delete e.style.opacity,lt(n.style.multiple)?delete e.style.multiple:e.style.multiple=n.style.multiple}function hA(e,n,l){if(pt(n.icon??"none",e.icon??"none")){let r=On(e.icon)&&e.icon!=="none";switch(!0){case(r&&On(n.icon)&&n.icon!=="none"):return e.icon=n.icon,!0;case(r&&(lt(n.icon)||n.icon==="none")):return e.icon="none",!0;case(!r&&On(n.icon)&&n.icon!=="none"):return l?(e.icon=n.icon,!0):!1}}return!0}function pA(e,n,l){let r=!0;return pt(e.style.iconColor,n.style.iconColor)&&(lt(n.style.iconColor)?delete e.style.iconColor:e.style.iconColor=n.style.iconColor),pt(e.style.iconSize,n.style.iconSize)&&(l?lt(n.style.iconSize)?delete e.style.iconSize:e.style.iconSize=n.style.iconSize:r=!1),pt(e.style.iconPosition,n.style.iconPosition)&&(l?lt(n.style.iconPosition)?delete e.style.iconPosition:e.style.iconPosition=n.style.iconPosition:r=!1),r}function jc(e,n){return e?"md"in n?(e.md=n.md,delete e.txt,e):("txt"in n&&(e.txt=n.txt,delete e.md),e):n}function gA(e,n,l){let r=!0;return pt(e.title,n.title)&&(l?e.title=n.title:r=!1),pt(e.description,n.description)&&(lt(n.description)?delete e.description:l?e.description=jc(e.description,n.description):r=!1),pt(e.technology,n.technology)&&(lt(n.technology)?delete e.technology:l?e.technology=n.technology:r=!1),r}function yA(e,n,l){return e.title=n.title,lt(n.description)?delete e.description:e.description=jc(e.description,n.description),lt(n.technology)?delete e.technology:e.technology=n.technology,!0}function g6(e,n){ye(e.id===n.id,"applyManualLayout: view ids do not match"),ye(e._stage==="layouted","applyManualLayout: expected layouted view"),ye(n._stage==="layouted","applyManualLayout: expected layouted snapshot"),ye(e._layout!=="manual","applyManualLayout: expected auto-layouted view");let l=new Set;e._type!==n._type&&l.add("type-changed");let r=mA(n.nodes,e.nodes,l),o=TA(n.edges,e.edges,l),s=fA(r);return wi(n,u=>{u.title=e.title??n.title,u.description=e.description??n.description,u.tags=e.tags?[...e.tags]:null,u.links=e.links?[...e.links]:null,u.sourcePath=e.sourcePath,u[k1]="manual",s&&s.length>0?u.notation={nodes:s}:delete u.notation,u.nodes=xc(r),u.edges=xc(o),ZC(e)&&u._type==="dynamic"&&(u.variant=e.variant),UC(e)&&u._type==="element"&&(e.viewOf?u.viewOf=e.viewOf:delete u.viewOf,e.extends?u.extends=e.extends:delete u.extends);let f=[...l];jn(f,1)?u.drifts=f:(u.hash=e.hash,delete u.drifts)})}function mA(e,n,l){let r=new Map(n.map(s=>[s.id,s])),o=e.map(s=>{let u=r.get(s.id);return u?(r.delete(u.id),wi(s,f=>{dA(f,u);let d=new Set,h=s.children.length>0,y=u.children.length>0;(pt(f.modelRef,u.modelRef)||pt(f.deploymentRef,u.deploymentRef))&&d.add("modelRef-changed"),y&&!h&&d.add("became-compound"),!y&&h&&d.add("became-leaf"),pt(f.parent,u.parent)&&d.add("parent-changed");let m=f.width+5>=u.width&&f.height+5>=u.height;pt(f.shape,u.shape)&&(m?f.shape=u.shape:d.add("shape-changed")),pA(f,u,m)||d.add("label-changed"),hA(f,u,m&&y===h)||d.add("label-changed"),(h?yA:gA)(f,u,m)||d.add("label-changed"),pt(f.notes,u.notes)&&(lt(u.notes)?delete f.notes:f.notes=jc(f.notes,u.notes)),pt(s.notation,u.notation)&&(f.notation=u.notation??null),h&&y&&qB(new Set(s.children),new Set(u.children)).size>0&&d.add("children-changed");let b=[...d];jn(b,1)?(l.add("nodes-drift"),f.drifts=b):delete f.drifts})):(l.add("nodes-removed"),{...s,drifts:["removed"]})});return r.size>0&&l.add("nodes-added"),o}function TA(e,n,l){let r=new Map(n.map(s=>[s.id,s])),o=e.map(s=>{let u=r.get(s.id)??Rn(r.values(),Ei(f=>f.source===s.source&&f.target===s.target),to());return u&&r.delete(u.id),wi(s,f=>{if(!u){f.drifts=["removed"],l.add("edges-removed");return}let d=new Set,h=s.id===u.id;switch(!0){case(h&&s.source==u.source&&s.target==u.target):pt(f.dir??"forward",u.dir??"forward")&&d.add("direction-changed");break;case(h&&s.source==u.target&&s.target==u.source):s.source!==s.target&&d.add("direction-changed");break;case h:s.source!=u.source&&d.add("source-changed"),s.target!=u.target&&d.add("target-changed");break;default:ye(s.id!=u.id,"Unexpected case in edge drift detection, ids should not match"),ye(s.source==u.source,"Unexpected case in edge drift detection, sources should match"),ye(s.target==u.target,"Unexpected case in edge drift detection, targets should match"),pt(f.dir??"forward",u.dir??"forward")&&d.add("direction-changed");break}if(f.color=u.color,f.line=u.line,f.navigateTo=u.navigateTo??null,f.tags=u.tags?[...u.tags]:null,pt(s.notes,u.notes)&&(lt(s.notes)!==lt(u.notes)&&d.add("notes-changed"),f.notes=u.notes??s.notes),u.astPath?f.astPath=u.astPath:delete f.astPath,pt(vg(s,["label","description","technology","labelBBox"]),vg(u,["label","description","technology","labelBBox"])))switch(!0){case(u.labelBBox&&!s.labelBBox):d.add("label-added");break;case(s.labelBBox&&!u.labelBBox):d.add("label-removed");break;case(!!s.labelBBox&&!!u.labelBBox):u.labelBBox.width*u.labelBBox.height>(s.labelBBox.width+5)*(s.labelBBox.height+5)&&(f.labelBBox.width=Math.round(u.labelBBox.width),f.labelBBox.height=Math.round(u.labelBBox.height)),pt(s.label,u.label)&&(lt(u.label)!==lt(s.label)&&d.add("label-changed"),f.label=u.label??s.label),pt(s.description,u.description)&&(lt(u.description)!==lt(s.description)&&d.add("label-changed"),u.description&&(f.description=jc(s.description,u.description))),pt(s.technology,u.technology)&&(lt(u.technology)!==lt(s.technology)&&d.add("label-changed"),f.technology=u.technology??s.technology??null);break;default:ye(!s.labelBBox,"Unexpected case in edge labelBBox drift detection"),ye(!u.labelBBox,"Unexpected case in next labelBBox drift detection");break}let y=[...d];jn(y,1)?(l.add("edges-drift"),f.drifts=y):delete f.drifts})});return r.size>0&&l.add("edges-added"),o}function bA(e,n){let{drifts:l,...r}=g6(e,n);if(!l||l.length===0)return wi(e,y=>{delete y.drifts,y[k1]="auto"});let o=new Set;l.includes("type-changed")&&o.add("type-changed");let s=new Map(r.nodes.map(y=>[y.id,y])),u=new Map(r.edges.map(y=>[y.id,y])),f=e.nodes.map(y=>{let m=s.get(y.id);return m&&s.delete(m.id),wi(y,b=>{if(!m){o.add("nodes-added"),b.drifts=["added"];return}m.drifts?(o.add("nodes-drift"),b.drifts=[...m.drifts]):delete b.drifts})});s.size>0&&o.add("nodes-removed");let d=e.edges.map(y=>{let m=u.get(y.id)??Rn(u.values(),Ei(b=>b.source===y.source&&b.target===y.target),to());return m&&u.delete(m.id),wi(y,b=>{if(!m){o.add("edges-added"),b.drifts=["added"];return}m.drifts?(o.add("edges-drift"),b.drifts=[...m.drifts]):delete b.drifts})});u.size>0&&o.add("edges-removed");let h=[...o];return wi(e,y=>{jn(h,1)?y.drifts=h:delete y.drifts,y.nodes=xc(f),y.edges=xc(d),y[k1]="auto"})}var Ks=class{Aux;id;_literalId;hierarchyLevel;imported;constructor(e,n){this.$model=e,this.$element=n,this.id=this.$element.id,this._literalId=this.$element.id;let[l,r]=l6(this.id);l?(this.imported={from:l,fqn:r},this.hierarchyLevel=dc(r)):(this.imported=null,this.hierarchyLevel=dc(this.id))}get name(){return x8(this.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$element.kind}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get tags(){return Fe(this,Symbol.for("tags"),()=>Ec([...this.$element.tags??[],...this.$model.specification.elements[this.$element.kind]?.tags??[]]))}get metadata(){return this.$element.metadata??{}}get title(){return this.$element.title}get hasSummary(){return!!this.$element.summary&&!!this.$element.description&&!P1(this.$element.summary,this.$element.description)}get summary(){return Vt.memoize(this,"summary",zr(this.$element))}get description(){return Vt.memoize(this,"description",Pr(this.$element))}get technology(){return this.$element.technology??null}get links(){return this.$element.links??[]}get defaultView(){return Fe(this,Symbol.for("defaultView"),()=>to(this.scopedViews())??null)}get isRoot(){return this.parent===null}get style(){return Fe(this,"style",()=>nh({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$element.style}))}get projectId(){return this.imported?.from??this.$model.projectId}isAncestorOf(e){return ln(this,e)}isDescendantOf(e){return ln(e,this)}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let n=po(this.id,e.id);return n?this.$model.element(n):null}children(){return this.$model.children(this)}descendants(e){return e?w8([...this.$model.descendants(this)],e)[Symbol.iterator]():this.$model.descendants(this)}siblings(){return this.$model.siblings(this)}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}*incomers(e="all"){let n=new Set;for(let l of this.incoming(e))n.has(l.source.id)||(n.add(l.source.id),yield l.source)}outgoing(e="all"){return this.$model.outgoing(this,e)}*outgoers(e="all"){let n=new Set;for(let l of this.outgoing(e))n.has(l.target.id)||(n.add(l.target.id),yield l.target)}get allOutgoing(){return Fe(this,Symbol.for("allOutgoing"),()=>new Set(this.outgoing()))}get allIncoming(){return Fe(this,Symbol.for("allIncoming"),()=>new Set(this.incoming()))}views(){return Fe(this,Symbol.for("views"),()=>{let e=new Set;for(let n of this.$model.views())n.includesElement(this.id)&&e.add(n);return e})}scopedViews(){return Fe(this,Symbol.for("scopedViews"),()=>{let e=new Set;for(let n of this.$model.views())n.isScopedElementView()&&n.viewOf.id===this.id&&e.add(n);return e})}isDeployed(){return On(to(this.deployments()))}deployments(){return this.$model.deployment.instancesOf(this)}hasMetadata(){return!!this.$element.metadata&&!so(this.$element.metadata)}getMetadata(e){return e?this.$element.metadata?.[e]:this.$element.metadata??{}}isTagged(e){return this.tags.includes(e)}},y6=class{Aux;get style(){return Fe(this,"style",()=>nh({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.$node.style}))}get name(){return x8(this.id)}get shape(){return this.style.shape}get color(){return this.style.color}get icon(){return this.style.icon??null}get summary(){return Vt.memoize(this,"summary",zr(this.$node))}get description(){return Vt.memoize(this,"description",Pr(this.$node))}get technology(){return this.$node.technology??null}get links(){return this.$node.links??[]}ancestors(){return this.$model.ancestors(this)}commonAncestor(e){let n=po(this.id,e.id);return n?this.$model.node(n):null}siblings(){return this.$model.siblings(this)}isSibling(e){return this.parent===e.parent}*ascendingSiblings(){yield*this.siblings();for(let e of this.ancestors())yield*e.siblings()}*descendingSiblings(){for(let e of[...this.ancestors()].reverse())yield*e.siblings();yield*this.siblings()}incoming(e="all"){return this.$model.incoming(this,e)}outgoing(e="all"){return this.$model.outgoing(this,e)}*incomers(e="all"){let n=new Set;for(let l of this.incoming(e))n.has(l.source.id)||(n.add(l.source.id),yield l.source)}*outgoers(e="all"){let n=new Set;for(let l of this.outgoing(e))n.has(l.target.id)||(n.add(l.target.id),yield l.target)}*views(){for(let e of this.$model.views())e._type==="deployment"&&e.includesDeployment(this.id)&&(yield e)}isDeploymentNode(){return!1}isInstance(){return!1}get allOutgoing(){return Fe(this,Symbol.for("allOutgoing"),()=>O1.from(new Set(this.outgoingModelRelationships()),new Set(this.outgoing())))}get allIncoming(){return Fe(this,Symbol.for("allIncoming"),()=>O1.from(new Set(this.incomingModelRelationships()),new Set(this.incoming())))}hasMetadata(){return!!this.$node.metadata&&!so(this.$node.metadata)}getMetadata(e){return e?this.$node.metadata?.[e]:this.$node.metadata??{}}isTagged(e){return this.tags.includes(e)}},j4=class extends y6{id;_literalId;title;hierarchyLevel;constructor(e,n){super(),this.$model=e,this.$node=n,this.id=n.id,this._literalId=n.id,this.title=n.title,this.hierarchyLevel=dc(n.id)}get parent(){return this.$model.parent(this)}get kind(){return this.$node.kind}get metadata(){return this.$node.metadata??{}}get tags(){return Fe(this,Symbol.for("tags"),()=>Ec([...this.$node.tags??[],...this.$model.$model.specification.deployments[this.kind]?.tags??[]]))}children(){return this.$model.children(this)}descendants(e="desc"){return this.$model.descendants(this,e)}isDeploymentNode(){return!0}*instances(){for(let e of this.descendants("desc"))e.isInstance()&&(yield e)}onlyOneInstance(){let e=this.children();if(e.size!==1)return null;let n=to(e);return n?n.isInstance()?n:n.onlyOneInstance():null}_relationshipsFromInstances=null;relationshipsFromInstances(){if(this._relationshipsFromInstances)return this._relationshipsFromInstances;let{outgoing:e,incoming:n}=this._relationshipsFromInstances={outgoing:new Set,incoming:new Set};for(let l of this.instances()){for(let r of l.element.outgoing())e.add(r);for(let r of l.element.incoming())n.add(r)}return this._relationshipsFromInstances}outgoingModelRelationships(){return this.relationshipsFromInstances().outgoing.values()}incomingModelRelationships(){return this.relationshipsFromInstances().incoming.values()}internalModelRelationships(){let{outgoing:e,incoming:n}=this.relationshipsFromInstances();return Lr(n,e)}},U4=class extends y6{id;_literalId;title;hierarchyLevel;constructor(e,n,l){super(),this.$model=e,this.$instance=n,this.element=l,this.id=n.id,this._literalId=n.id,this.title=n.title??l.title,this.hierarchyLevel=dc(n.id)}get $node(){return this.$instance}get parent(){return Dn(this.$model.parent(this),`Parent of ${this.id} not found`)}get style(){return Fe(this,"style",()=>nh({shape:this.$model.$styles.defaults.shape,color:this.$model.$styles.defaults.color,border:this.$model.$styles.defaults.border,opacity:this.$model.$styles.defaults.opacity,size:this.$model.$styles.defaults.size,padding:this.$model.$styles.defaults.padding,textSize:this.$model.$styles.defaults.text,iconPosition:this.$model.$styles.defaults.iconPosition,...this.element.$element.style,...this.$instance.style}))}get tags(){return Fe(this,Symbol.for("tags"),()=>Ec([...this.$instance.tags??[],...this.element.tags]))}get kind(){return this.element.kind}get metadata(){return this.$instance.metadata??this.element.metadata??{}}get summary(){return Vt.memoize(this,"summary",zr(this.$instance)??zr(this.element.$element))}get description(){return Vt.memoize(this,"description",Pr(this.$instance)??Pr(this.element.$element))}get technology(){return this.$instance.technology??this.element.technology??null}get links(){return this.$instance.links??this.element.links}isInstance(){return!0}outgoingModelRelationships(){return this.element.outgoing()}incomingModelRelationships(){return this.element.incoming()}*views(){for(let e of this.$model.views())if(e._type==="deployment"){if(e.includesDeployment(this.id)){yield e;continue}e.includesDeployment(this.parent.id)&&this.parent.onlyOneInstance()&&(yield e)}}},vA=class{constructor(e,n){this.instance=e,this.element=n}get id(){return this.instance.id}get _literalId(){return this.instance.id}get style(){return Fe(this,"style ",()=>({shape:this.element.shape,color:this.element.color,...this.element.$element.style}))}get shape(){return this.element.shape}get color(){return this.element.color}get title(){return this.element.title}get summary(){return this.element.summary}get description(){return this.element.description}get technology(){return this.element.technology}isDeploymentNode(){return!1}isInstance(){return!1}},kA=class{boundary;source;target;constructor(e,n){this.$model=e,this.$relationship=n,this.source=e.deploymentRef(n.source),this.target=e.deploymentRef(n.target);let l=po(this.source.id,this.target.id);this.boundary=l?this.$model.node(l):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return On(this.$relationship.title)?this.$relationship.title:null}get technology(){return Or(this.$relationship.technology)?(this.kind&&this.$model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!P1(this.$relationship.summary,this.$relationship.description)}get summary(){return Vt.memoize(this,"summary",zr(this.$relationship))}get description(){return Vt.memoize(this,"description",Pr(this.$relationship))}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get navigateTo(){return this.$relationship.navigateTo?this.$model.$model.view(this.$relationship.navigateTo):null}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.$model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.$model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.$model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.$model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!0}isModelRelation(){return!1}hasMetadata(){return!!this.$relationship.metadata&&!so(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},O1=class Cr{static empty(){return new Cr}static from(n,l){return new Cr(new Set(n),new Set(l))}constructor(n=new Set,l=new Set){this.model=n,this.deployment=l}get isEmpty(){return this.model.size===0&&this.deployment.size===0}get nonEmpty(){return this.model.size>0||this.deployment.size>0}get size(){return this.model.size+this.deployment.size}intersect(n){return Cr.from(Lr(this.model,n.model),Lr(this.deployment,n.deployment))}difference(n){return Cr.from(h1(this.model,n.model),h1(this.deployment,n.deployment))}union(n){return Cr.from(d1(this.model,n.model),d1(this.deployment,n.deployment))}};const Ze=e=>typeof e=="string"?e:e.id,_S="/",oh=e=>{if(ye(!e.includes(`
`),"View title cannot contain newlines"),e.includes("/")){let n=e.split("/").map(l=>l.trim()).filter(l=>l.length>0);return jn(n,1)?n:[""]}return[e.trim()]},m6=e=>oh(e).join("/"),xA=e=>{let n=oh(e);return jn(n,2)?n.slice(0,-1).join("/"):null},BA=e=>e.includes("/")?oh(e).pop()??e:e.trim();var wA=class{#e=new Map;#a=new Map;#t=new kt.default(()=>new Set);#n=new kt.default(()=>new Set);#o=new Set;#l=new Map;#s=new kt.default(()=>new Set);#r=new kt.default(()=>new Set);#i=new kt.default(()=>new Set);#c=new kt.default(()=>new Set);#u=new Map;$deployments;constructor(e){this.$model=e;let n=this.$deployments=e.$data.deployments,l=oc(n.elements);for(let r of eo(l)){let o=this.addElement(r);for(let s of o.tags)this.#c.get(s).add(o);o.isInstance()&&this.#n.get(o.element.id).add(o)}for(let r of oc(n.relations)){let o=this.addRelation(r);for(let s of o.tags)this.#c.get(s).add(o)}}get $styles(){return this.$model.$styles}get projectId(){return this.$model.projectId}get project(){return this.$model.project}get specification(){return this.$model.specification}element(e){if(e instanceof j4||e instanceof U4)return e;let n=Ze(e);return Dn(this.#e.get(n),`Element ${n} not found`)}findElement(e){return this.#e.get(e)??null}node(e){let n=this.element(e);return ye(n.isDeploymentNode(),`Element ${n.id} is not a deployment node`),n}findNode(e){let n=this.findElement(e);return n?(ye(n.isDeploymentNode(),`Element ${n?.id} is not a deployment node`),n):null}instance(e){let n=this.element(e);return ye(n.isInstance(),`Element ${n.id} is not a deployed instance`),n}findInstance(e){let n=this.findElement(e);return n?(ye(n.isInstance(),`Element ${n?.id} is not a deployed instance`),n):null}roots(){return this.#o.values()}elements(){return this.#e.values()}*nodes(){for(let e of this.#e.values())e.isDeploymentNode()&&(yield e)}*nodesOfKind(e){for(let n of this.#e.values())n.isDeploymentNode()&&n.kind===e&&(yield n)}*instances(){for(let e of this.#e.values())e.isInstance()&&(yield e)}*instancesOf(e){let n=Ze(e),l=this.#n.get(n);l&&(yield*l)}deploymentRef(e){if(Si.isInsideInstanceRef(e)){let{deployment:n,element:l}=e;return PB(this.#u,`${n}@${l}`,()=>new vA(this.instance(n),this.$model.element(l)))}return this.element(e.deployment)}relationships(){return this.#l.values()}relationship(e){let n=Ze(e);return Dn(this.#l.get(n),`DeploymentRelationModel ${n} not found`)}findRelationship(e){return this.#l.get(e)??null}*views(){for(let e of this.$model.views())e.isDeploymentView()&&(yield e)}parent(e){let n=Ze(e);return this.#a.get(n)||null}children(e){let n=Ze(e);return this.#t.get(n)}*siblings(e){let n=Ze(e),l=this.parent(e)?.children()??this.roots();for(let r of l)r.id!==n&&(yield r)}*ancestors(e){let n=Ze(e),l;for(;l=this.#a.get(n);)yield l,n=l.id}*descendants(e,n="desc"){for(let l of this.children(e))n==="asc"?(yield l,yield*this.descendants(l.id)):(yield*this.descendants(l.id),yield l)}*incoming(e,n="all"){let l=Ze(e);for(let r of this.#s.get(l))switch(!0){case n==="all":case(n==="direct"&&r.target.id===l):case(n==="to-descendants"&&r.target.id!==l):yield r;break}}*outgoing(e,n="all"){let l=Ze(e);for(let r of this.#r.get(l))switch(!0){case n==="all":case(n==="direct"&&r.source.id===l):case(n==="from-descendants"&&r.source.id!==l):yield r;break}}addElement(e){if(this.#e.has(e.id))throw Error(`Element ${e.id} already exists`);let n=kC(e)?new j4(this,Object.freeze(e)):new U4(this,Object.freeze(e),this.$model.element(e.element));this.#e.set(n.id,n);let l=Ys(n.id);return l?(ye(this.#e.has(l),`Parent ${l} of ${n.id} not found`),this.#a.set(n.id,this.node(l)),this.#t.get(l).add(n)):(ye(n.isDeploymentNode(),`Root element ${n.id} is not a deployment node`),this.#o.add(n)),n}addRelation(e){if(this.#l.has(e.id))throw Error(`Relation ${e.id} already exists`);let n=new kA(this,Object.freeze(e));this.#l.set(n.id,n),this.#s.get(n.target.id).add(n),this.#r.get(n.source.id).add(n);let l=n.boundary?.id??null;if(l)for(let r of[l,..._r(l)])this.#i.get(r).add(n);for(let r of _r(n.source.id)){if(r===l)break;this.#r.get(r).add(n)}for(let r of _r(n.target.id)){if(r===l)break;this.#s.get(r).add(n)}return n}},Z4=class{source;target;boundary;constructor(e,n){this.model=e,this.$relationship=n,this.source=e.element(Si.flatten(n.source)),this.target=e.element(Si.flatten(n.target));let l=po(this.source.id,this.target.id);this.boundary=l?this.model.element(l):null}get id(){return this.$relationship.id}get expression(){return`${this.source.id} -> ${this.target.id}`}get title(){return Or(this.$relationship.title)?null:this.$relationship.title}get technology(){return Or(this.$relationship.technology)?(this.kind&&this.model.specification.relationships[this.kind])?.technology??null:this.$relationship.technology}get hasSummary(){return!!this.$relationship.summary&&!!this.$relationship.description&&!P1(this.$relationship.summary,this.$relationship.description)}get summary(){return Vt.memoize(this,"summary",zr(this.$relationship))}get description(){return Vt.memoize(this,"description",Pr(this.$relationship))}get navigateTo(){return this.$relationship.navigateTo?this.model.view(this.$relationship.navigateTo):null}get tags(){return this.$relationship.tags??[]}get kind(){return this.$relationship.kind??null}get metadata(){return this.$relationship.metadata??{}}get links(){return this.$relationship.links??[]}get color(){return this.$relationship.color??this.model.$styles.defaults.relationship.color}get line(){return this.$relationship.line??this.model.$styles.defaults.relationship.line}get head(){return this.$relationship.head??this.model.$styles.defaults.relationship.arrow}get tail(){return this.$relationship.tail}*views(){for(let e of this.model.views())e.includesRelation(this.id)&&(yield e)}isDeploymentRelation(){return!1}isModelRelation(){return!0}hasMetadata(){return!!this.$relationship.metadata&&!so(this.$relationship.metadata)}getMetadata(e){return e?this.$relationship.metadata?.[e]:this.$relationship.metadata??{}}isTagged(e){return this.tags.includes(e)}},EA=class{Aux;$viewModel;$view;$edge;constructor(e,n,l,r){this.source=l,this.target=r,this.$viewModel=e,this.$view=e.$view,this.$edge=n}get id(){return this.$edge.id}get parent(){return this.$edge.parent?this.$viewModel.node(this.$edge.parent):null}get label(){return this.$edge.label??null}get description(){return Vt.memoize(this,"description",this.$edge.description)}get technology(){return this.$edge.technology??null}hasParent(){return this.$edge.parent!==null}get tags(){return this.$edge.tags??[]}get stepNumber(){return this.isStep()?i6(this.id):null}get navigateTo(){return this.$edge.navigateTo?this.$viewModel.$model.view(this.$edge.navigateTo):null}get color(){return this.$edge.color}get line(){return this.$edge.line??this.$viewModel.$styles.defaults.relationship.line}get head(){return this.$edge.head??this.$viewModel.$styles.defaults.relationship.arrow}get tail(){return this.$edge.tail}isStep(){return zc(this.id)}*relationships(e){for(let n of this.$edge.relations)if(e){let l=this.$viewModel.$model.findRelationship(n,e);l&&(yield l)}else yield this.$viewModel.$model.relationship(n)}includesRelation(e){let n=typeof e=="string"?e:e.id;return this.$edge.relations.includes(n)}isTagged(e){return this.tags.includes(e)}},CA=class{Aux;$viewModel;$view;$node;constructor(e,n){this.$viewModel=e,this.$view=e.$view,this.$node=n}get id(){return this.$node.id}get title(){return this.$node.title}get kind(){return this.$node.kind}get description(){return Vt.memoize(this,"description",this.$node.description)}get technology(){return this.$node.technology??null}get notes(){return Vt.memoize(this,"notes",this.$node.notes)}get parent(){return this.$node.parent?this.$viewModel.node(this.$node.parent):null}get element(){let e=this.$node.modelRef;return e?this.$viewModel.$model.element(e):null}get deployment(){let e=this.$node.deploymentRef;return e?this.$viewModel.$model.deployment.element(e):null}get shape(){return this.$node.shape}get color(){return this.$node.color}get icon(){return this.$node.icon??null}get tags(){return this.$node.tags}get links(){return this.$node.links??[]}get navigateTo(){return this.$node.navigateTo?this.$viewModel.$model.view(this.$node.navigateTo):null}get style(){return this.$node.style}get x(){return"x"in this.$node?this.$node.x:void 0}get y(){return"y"in this.$node?this.$node.y:void 0}get width(){return"width"in this.$node?this.$node.width:void 0}get height(){return"height"in this.$node?this.$node.height:void 0}children(){return Fe(this,"children",()=>new Set(this.$node.children.map(e=>this.$viewModel.node(e))))}*ancestors(){let e=this.parent;for(;e;)yield e,e=e.parent}*siblings(){let e=this.parent?.children()??this.$viewModel.roots();for(let n of e)n.id!==this.id&&(yield n)}*incoming(e="all"){for(let n of this.$node.inEdges){let l=this.$viewModel.edge(n);switch(!0){case e==="all":case(e==="direct"&&l.target.id===this.id):case(e==="to-descendants"&&l.target.id!==this.id):yield l;break}}}*incomers(e="all"){let n=new Set;for(let l of this.incoming(e))n.has(l.source.id)||(n.add(l.source.id),yield l.source)}*outgoing(e="all"){for(let n of this.$node.outEdges){let l=this.$viewModel.edge(n);switch(!0){case e==="all":case(e==="direct"&&l.source.id===this.id):case(e==="from-descendants"&&l.source.id!==this.id):yield l;break}}}*outgoers(e="all"){let n=new Set;for(let l of this.outgoing(e))n.has(l.target.id)||(n.add(l.target.id),yield l.target)}isLayouted(){return"width"in this.$node&&"height"in this.$node}hasChildren(){return this.$node.children.length>0}hasParent(){return this.$node.parent!==null}hasElement(){return On(this.$node.modelRef)}hasDeployment(){return On(this.$node.deploymentRef)}hasDeployedInstance(){return this.hasElement()&&this.hasDeployment()}isGroup(){return t6(this.$node)}isTagged(e){return this.tags.includes(e)}},N1=class{Aux;#e;#a=new Set;#t=new Map;#n=new Map;#o=new Set;#l=new Set;#s=new Set;#r=new kt.default(e=>new Set);#i;id;$model;title;folder;viewPath;constructor(e,n,l,r){this.$model=e,this.#e=l,this.id=l.id,this.folder=n,this.#i=r;for(let o of this.#e.nodes){let s=new CA(this,Object.freeze(o));this.#t.set(o.id,s),o.parent||this.#a.add(s),o.deploymentRef&&this.#l.add(o.deploymentRef),o.modelRef&&this.#o.add(o.modelRef);for(let u of s.tags)this.#r.get(u).add(s)}for(let o of this.#e.edges){let s=new EA(this,Object.freeze(o),this.node(o.source),this.node(o.target));for(let u of s.tags)this.#r.get(u).add(s);for(let u of o.relations)this.#s.add(u);this.#n.set(o.id,s)}this.title=l.title?BA(l.title):null,this.viewPath=l.title?m6(l.title):l.id}get $styles(){return this.$model.$styles}get _type(){return this.#e[qa]}get stage(){return this.#e[Bi]}get bounds(){if("bounds"in this.#e)return this.#e.bounds;if(this.#i)return this.#i.bounds;throw Error("View is not layouted")}get titleOrId(){return this.title??this.viewOf?.title??this.id}get titleOrUntitled(){return this.title??"Untitled"}get breadcrumbs(){return Fe(this,"breadcrumbs",()=>this.folder.isRoot?[this]:[...this.folder.breadcrumbs,this])}get description(){return Vt.memoize(this,"description",this.#e.description)}get tags(){return this.#e.tags??[]}get links(){return this.#e.links??[]}get viewOf(){if(this.isElementView()){let e=this.#e.viewOf;return e?this.$model.element(e):null}return null}get mode(){return this.isDynamicView()?this.#e.variant??"diagram":null}get includedTags(){return[...this.#r.keys()]}get $view(){if(!this.isLayouted()||"drifts"in this.#e)return this.#e;let e=this.#i;return e?Fe(this,"withDriftReasons",()=>bA(this.#e,e)):this.#e}get $layouted(){if(!this.isLayouted())throw Error("View is not layouted");return this.$manual??this.#e}get hasManualLayout(){return this.#i!==void 0}get hasLayoutDrifts(){if(!this.isLayouted())return!1;let e=this.$manual;return!!e?.drifts&&e.drifts.length>0}get $manual(){if(!this.isLayouted())return null;let e=this.#i;return e?Fe(this,"snapshotWithManualLayout",()=>g6(this.#e,e)):null}get projectId(){return this.$model.projectId}roots(){return this.#a.values()}*compounds(){for(let e of this.#t.values())e.hasChildren()&&(yield e)}node(e){let n=Ze(e);return Dn(this.#t.get(n),`Node ${n} not found in view ${this.#e.id}`)}findNode(e){return this.#t.get(Ze(e))??null}findNodeWithElement(e){let n=Ze(e);return this.#o.has(n)?FB(this.#t.values(),l=>l.hasElement()&&l.element.id===n)??null:null}nodes(){return this.#t.values()}edge(e){let n=Ze(e);return Dn(this.#n.get(n),`Edge ${n} not found in view ${this.#e.id}`)}findEdge(e){return this.#n.get(Ze(e))??null}edges(){return this.#n.values()}*edgesWithRelation(e){for(let n of this.#n.values())n.includesRelation(e)&&(yield n)}*elements(){for(let e of this.#t.values())e.hasElement()&&(yield e)}isTagged(e){return this.tags.includes(e)}includesElement(e){return this.#o.has(Ze(e))}includesDeployment(e){return this.#l.has(Ze(e))}includesRelation(e){return this.#s.has(Ze(e))}isComputed(){return this.#e[Bi]==="computed"}isLayouted(){return this.#e[Bi]==="layouted"}isDiagram(){return this.#e[Bi]==="layouted"}isElementView(){return this.#e[qa]==="element"}isScopedElementView(){return this.#e[qa]==="element"&&On(this.#e.viewOf)}isDeploymentView(){return this.#e[qa]==="deployment"}isDynamicView(){return this.#e[qa]==="dynamic"}},H4=class T6{$model;path;title;isRoot;parentPath;defaultViewId;constructor(n,l,r){this.$model=n,this.path=l.join("/"),this.isRoot=this.path==="",this.title=F5(l),this.isRoot?this.parentPath=void 0:this.parentPath=l.slice(0,-1).join("/"),this.defaultViewId=r}get defaultView(){return this.defaultViewId?this.$model.view(this.defaultViewId):null}get breadcrumbs(){return ye(!this.isRoot,"Root view folder has no breadcrumbs"),Fe(this,"breadcrumbs",()=>{let n=this.parent;return n?n.isRoot?[n,this]:[...n.breadcrumbs,this]:[this]})}get parent(){return ye(!this.isRoot,"Root view folder has no parent"),Or(this.parentPath)?null:this.$model.viewFolder(this.parentPath)}get children(){return this.$model.viewFolderItems(this.path)}get folders(){return Fe(this,"folders",()=>{let n=[];for(let l of this.children)l instanceof T6&&n.push(l);return n})}get views(){return Fe(this,"views",()=>{let n=[];for(let l of this.children)l instanceof N1&&n.push(l);return n})}},L1=class ec{Aux;_elements=new Map;_parents=new Map;_children=new kt.default(()=>new Set);_rootElements=new Set;_relations=new Map;_incoming=new kt.default(()=>new Set);_outgoing=new kt.default(()=>new Set);_internal=new kt.default(()=>new Set);_views=new Map;_rootViewFolder;_viewFolders=new Map;_viewFolderItems=new kt.default(()=>new Set);_allTags=new kt.default(()=>new Set);static fromParsed(n){return new ec(n)}static create(n){return new ec(n)}static fromDump(n){let{_stage:l="layouted",projectId:r="unknown",project:o,globals:s,imports:u,deployments:f,views:d,relations:h,elements:y,specification:m}=n;return new ec({[Bi]:l,projectId:r,project:o,globals:{predicates:s?.predicates??{},dynamicPredicates:s?.dynamicPredicates??{},styles:s?.styles??{}},imports:u??{},deployments:{elements:f?.elements??{},relations:f?.relations??{}},views:d??{},relations:h??{},elements:y??{},specification:m})}deployment;$data;constructor(n){this.$data=n;for(let[,l]of Ha(n.elements)){let r=this.addElement(l);for(let o of r.tags)this._allTags.get(o).add(r)}for(let[l,r]of Ha(n.imports??{}))for(let o of eo(r)){let s=this.addImportedElement(l,o);for(let u of s.tags)this._allTags.get(u).add(s)}for(let l of oc(n.relations)){let r=this.addRelation(l);for(let o of r.tags)this._allTags.get(o).add(r)}if(this.deployment=new wA(this),A4(n,"computed")||A4(n,"layouted")){let l=LB("/"),r=Rn(oc(n.views),Qa(s=>({view:s,path:m6(s.title??s.id),folderPath:s.title&&xA(s.title)||""})),md((s,u)=>l(s.folderPath,u.folderPath))),o=s=>{let u=this._viewFolders.get(s);if(!u){let f=xg(s,"/");ye(jn(f,1),`View group path "${s}" must have at least one element`);let d;d=s===""?r.find(h=>h.view.id==="index"):r.find(h=>h.path===s),u=new H4(this,f,d?.view.id),this._viewFolders.set(s,u)}return u};this._rootViewFolder=o("");for(let{folderPath:s}of r)this._viewFolders.has(s)||xg(s,"/").reduce((u,f)=>{let d=u.join("/"),h=o(so(d)?f:d+"/"+f);return this._viewFolderItems.get(d).add(h),u.push(f),u},[]);for(let{view:s,folderPath:u}of r){let f=new N1(this,o(u),s,n.manualLayouts?.[s.id]);this._viewFolderItems.get(u).add(f),this._views.set(s.id,f);for(let d of f.tags)this._allTags.get(d).add(f)}}else this._rootViewFolder=new H4(this,[""],void 0),this._viewFolders.set(this._rootViewFolder.path,this._rootViewFolder)}get asParsed(){return this}get asComputed(){return this}get asLayouted(){return this}get $styles(){return Fe(this,"styles",()=>RC.from(this.project.styles,this.specification.customColors))}isParsed(){return this.stage==="parsed"}isLayouted(){return this.stage==="layouted"}isComputed(){return this.stage==="computed"}get $model(){return this.$data}get stage(){return this.$data[Bi]}get projectId(){return this.$data.projectId??"default"}get project(){return this.$data.project??Fe(this,Symbol.for("project"),()=>({id:this.projectId,styles:{},manualLayouts:{}}))}get specification(){return this.$data.specification}get globals(){return Fe(this,Symbol.for("globals"),()=>({predicates:{...this.$data.globals?.predicates},dynamicPredicates:{...this.$data.globals?.dynamicPredicates},styles:{...this.$data.globals?.styles}}))}element(n){if(n instanceof Ks)return n;let l=Ze(n);return Dn(this._elements.get(l),`Element ${l} not found`)}findElement(n){return this._elements.get(Ze(n))??null}roots(){return this._rootElements.values()}elements(){return this._elements.values()}relationships(){return this._relations.values()}relationship(n,l){if(l==="deployment")return this.deployment.relationship(n);let r=Ze(n),o=this._relations.get(r)??null;return o||l==="model"?Dn(o,`Model relation ${r} not found`):Dn(this.deployment.findRelationship(r),`No model/deployment relation ${r} not found`)}findRelationship(n,l){if(l==="deployment")return this.deployment.findRelationship(n);let r=this._relations.get(Ze(n))??null;return r||l==="model"?r:this.deployment.findRelationship(n)}views(){return this._views.values()}view(n){let l=Ze(n);return Dn(this._views.get(l),`View ${l} not found`)}findView(n){return this._views.get(n)??null}findManualLayout(n){return"manualLayouts"in this.$data?this.$data.manualLayouts?.[n]??null:null}viewFolder(n){return Dn(this._viewFolders.get(n),`View folder ${n} not found`)}get rootViewFolder(){return this._rootViewFolder}get hasViewFolders(){return this._viewFolders.size>1}viewFolderItems(n){return ye(this._viewFolders.has(n),`View folder ${n} not found`),this._viewFolderItems.get(n)}parent(n){let l=Ze(n);return this._parents.get(l)||null}children(n){let l=Ze(n);return this._children.get(l)}*siblings(n){let l=Ze(n),r=this._parents.get(l),o=r?this._children.get(r.id).values():this.roots();for(let s of o)s.id!==l&&(yield s)}*ancestors(n){let l=Ze(n),r;for(;r=this._parents.get(l);)yield r,l=r.id}*descendants(n){for(let l of this.children(n))yield l,yield*this.descendants(l.id)}*incoming(n,l="all"){let r=Ze(n);for(let o of this._incoming.get(r))switch(!0){case l==="all":case(l==="direct"&&o.target.id===r):case(l==="to-descendants"&&o.target.id!==r):yield o;break}}*outgoing(n,l="all"){let r=Ze(n);for(let o of this._outgoing.get(r))switch(!0){case l==="all":case(l==="direct"&&o.source.id===r):case(l==="from-descendants"&&o.source.id!==r):yield o;break}}get tags(){return Fe(this,"tags",()=>md([...this._allTags.keys()],f1))}get tagsSortedByUsage(){return Fe(this,"tagsSortedByUsage",()=>Rn([...this._allTags.entries()],Qa(([n,l])=>({tag:n,count:l.size,tagged:l})),md((n,l)=>f1(n.tag,l.tag)),l3([ki("count"),"desc"])))}findByTag(n,l){return Ei(this._allTags.get(n),r=>l==="elements"?r instanceof Ks:l==="views"?r instanceof N1:l==="relationships"?r instanceof Z4:!0)}*elementsOfKind(n){for(let l of this._elements.values())l.kind===n&&(yield l)}*elementsWhere(n){let l=Ar(n);for(let r of this._elements.values())l(r)&&(yield r)}*relationshipsWhere(n){let l=Ar(n);for(let r of this._relations.values())l(r)&&(yield r)}addElement(n){if(this._elements.has(n.id))throw Error(`Element ${n.id} already exists`);let l=new Ks(this,Object.freeze(n));this._elements.set(l.id,l);let r=Ys(l.id);return r?(ye(this._elements.has(r),`Parent ${r} of ${l.id} not found`),this._parents.set(l.id,this.element(r)),this._children.get(r).add(l)):this._rootElements.add(l),l}addImportedElement(n,l){ye(!n6(l.id),"Imported element already has global FQN");let r=lh(n,l.id);if(this._elements.has(r))throw Error(`Element ${r} already exists`);let o=new Ks(this,Object.freeze({...l,id:r}));this._elements.set(o.id,o);let s=Ys(o.id);for(;s;){if(s.includes(".")&&this._elements.has(s))return this._parents.set(o.id,this.element(s)),this._children.get(s).add(o),o;s=Ys(s)}return this._rootElements.add(o),o}addRelation(n){if(this._relations.has(n.id))throw Error(`Relation ${n.id} already exists`);let l=new Z4(this,Object.freeze(n)),{source:r,target:o}=l;this._relations.set(l.id,l),this._incoming.get(o.id).add(l),this._outgoing.get(r.id).add(l);let s=po(r.id,o.id);if(s)for(let u of[s,..._r(s)])this._internal.get(u).add(l);for(let u of _r(r.id)){if(u===s)break;this._outgoing.get(u).add(l)}for(let u of _r(o.id)){if(u===s)break;this._incoming.get(u).add(l)}return l}};(function(e){e.EMPTY=L1.create({_stage:"computed",projectId:"default",project:{id:"default"},specification:{elements:{},relationships:{},deployments:{},tags:{}},globals:{predicates:{},dynamicPredicates:{},styles:{}},deployments:{elements:{},relations:{}},elements:{},relations:{},views:{},imports:{}})})(L1||={});let AA;(function(e){e.isInside=o=>s=>ln(o,s.source.id)&&ln(o,s.target.id);let n=e.isDirectedBetween=(o,s)=>u=>(u.source.id===o||ln(o,u.source.id))&&(u.target.id===s||ln(s,u.target.id));e.isAnyBetween=(o,s)=>{let u=n(o,s),f=n(s,o);return d=>u(d)||f(d)};let l=e.isIncoming=o=>s=>(s.target.id===o||ln(o,s.target.id))&&!ln(o,s.source.id),r=e.isOutgoing=o=>s=>(s.source.id===o||ln(o,s.source.id))&&!ln(o,s.target.id);e.isAnyInOut=o=>{let s=l(o),u=r(o);return f=>s(f)||u(f)}})(AA||={});const b6=Symbol.for("nodejs.util.inspect.custom");var SA=class xi{id;constructor(n,l,r){this.source=n,this.target=l,this.relations=r,this.id=E8(`deployment:${n.id}:${l.id}`)}get expression(){return`${this.source.id} -> ${this.target.id}`}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target),this._boundary}nonEmpty(){return this.relations.nonEmpty}[b6](n,l,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:xi,enumerable:!1}),o}toString(){let n=[...this.relations.model].map(r=>"    "+r.expression);n.length?n.unshift("  model:"):n.unshift("  model: []");let l=[...this.relations.deployment].map(r=>"    "+r.expression);return l.length?l.unshift("  deployment:"):l.unshift("  deployment: []"),[this.expression,...n,...l].join(`
`)}hasDirectDeploymentRelation(){for(let n of this.relations.deployment)if(n.source.id===this.source.id||n.target.id===this.target.id)return!0;return!1}*values(){yield*this.relations.model,yield*this.relations.deployment}mergeWith(n){return Array.isArray(n)?n.reduce((l,r)=>l.mergeWith(r),this):(ye(this.source.id===n.source.id,"Cannot merge connections with different sources"),ye(this.target.id===n.target.id,"Cannot merge connections with different targets"),new xi(this.source,this.target,this.relations.union(n.relations)))}difference(n){return new xi(this.source,this.target,this.relations.difference(n.relations))}intersect(n){return new xi(this.source,this.target,this.relations.intersect(n.relations))}equals(n){return ye(n instanceof xi,"Other should ne DeploymentConnectionModel"),this.id===n.id&&this.source.id===n.source.id&&this.target.id===n.target.id&&p1(this.relations.model,n.relations.model)&&p1(this.relations.deployment,n.relations.deployment)}update(n){return n&&={model:this.relations.model,deployment:this.relations.deployment,...n},new xi(this.source,this.target,n?new O1(n.model??new Set,n.deployment??new Set):this.relations)}};function K4(e,n){return n?e.source===n.source&&e.target===n.target:l=>e.source===l.source&&e.target===l.target}var V4=class dl{id;constructor(n,l,r=new Set){this.source=n,this.target=l,this.relations=r,this.id=E8(`model:${n.id}:${l.id}`)}_boundary;get boundary(){return this._boundary??=this.source.commonAncestor(this.target)}get expression(){return`${this.source.id} -> ${this.target.id}`}get isDirect(){return this.nonEmpty()&&!this.isImplicit}get isImplicit(){return this.nonEmpty()&&MB(this.relations,n3(K4(this)))}get directRelations(){return new Set(Ei(this.relations,K4(this)))}nonEmpty(){return this.relations.size>0}mergeWith(n){return ye(this.source.id===n.source.id,"Cannot merge connections with different sources"),ye(this.target.id===n.target.id,"Cannot merge connections with different targets"),new dl(this.source,this.target,d1(this.relations,n.relations))}difference(n){return new dl(this.source,this.target,h1(this.relations,n.relations))}intersect(n){return ye(n instanceof dl,"Cannot intersect connection with different type"),new dl(this.source,this.target,Lr(this.relations,n.relations))}equals(n){ye(n instanceof dl,"Cannot merge connection with different type");let l=n;return this.id===l.id&&this.source.id===l.source.id&&this.target.id===l.target.id&&p1(this.relations,l.relations)}update(n){return new dl(this.source,this.target,n)}[b6](n,l,r){let o=this.toString();return Object.defineProperty(o,"constructor",{value:dl,enumerable:!1}),o}toString(){return[this.expression,this.relations.size?"  relations:":"  relations: [ ]",...[...this.relations].map(n=>"    "+n.expression)].join(`
`)}reversed(){return new dl(this.target,this.source)}};co({findConnection:()=>sh,findConnectionsBetween:()=>v6,findConnectionsWithin:()=>DA});function sh(e,n,l="directed"){if(e===n||V1(e,n))return[];let r=e.allOutgoing.intersect(n.allIncoming),o=r.nonEmpty?[new SA(e,n,r)]:[];return l==="directed"?o:[...o,...sh(n,e,"directed")]}function v6(e,n,l="both"){if(e.allIncoming.isEmpty&&e.allOutgoing.isEmpty)return[];let r=[],o=[];for(let s of n)if(e!==s)for(let u of sh(e,s,l))u.source===e?r.push(u):o.push(u);return[...r,...o]}function DA(e){return[...e].reduce((n,l,r,o)=>(r===o.length-1||n.push(...v6(l,o.slice(r+1),"both")),n),[])}var OS=co({findConnection:()=>k6,findConnectionsBetween:()=>x6,findConnectionsWithin:()=>_A});function k6(e,n,l="directed"){if(e===n||V1(e,n))return[];let r=Lr(e.allOutgoing,n.allIncoming),o=r.size>0?new V4(e,n,r):null;if(l==="directed")return o?[o]:[];let s=Lr(e.allIncoming,n.allOutgoing),u=s.size>0?new V4(n,e,s):null;return o&&u?[o,u]:o?[o]:u?[u]:[]}function x6(e,n,l="both"){if(e.allIncoming.size===0&&e.allOutgoing.size===0)return[];let r=[],o=[];for(let s of n)if(e!==s)for(let u of k6(e,s,l))u.source===e?r.push(u):o.push(u);return[...r,...o]}function _A(e){return[...e].reduce((n,l,r,o)=>(r===o.length-1||n.push(...x6(l,o.slice(r+1),"both")),n),[])}const OA=e=>{let n=yg(e,f=>L1.create(f));function l(f){let d=e.get();if(mg(d,f))return;let h={...f,views:a5(f.views,y=>{let m=d.views[y.id];return mg(m,y)?m:y})};e.set(h)}let r=yg(e,f=>Object.values(f.views));function o(){return Qd(n)}function s(){return Qd(r)}function u(f){let[d,h]=yl.useState(e.value?.views[f]??null);return yl.useEffect(()=>e.subscribe(y=>{h(y.views[f]??null)}),[f]),d}return{updateModel:l,$likec4model:n,useLikeC4Model:o,useLikeC4Views:s,useLikeC4View:u}},NA=[{id:"default",title:"default"}],LA=z1([...NA]);function NS(){return Qd(LA)}let Kd={default:()=>_i(()=>Promise.resolve().then(()=>qA),void 0)};async function LS(e){let n=Kd[e];if(!n){const l=Object.keys(Kd);if(console.error("Unknown projectId: "+e+" (available: "+l+")"),l.length===0)throw new Error("No projects found, invalid state");e=l[0],console.warn("Falling back to project: "+e),n=Kd[e]}return await n()}var RS=kt.default;F1.default;a3.default;o3.default;var zS=s3.default,PS=kt.default;F1.default;a3.default;o3.default;s3.default;k9.default;c9();Un(u9());function RA(e){let n=eo([...e]),l=new Set(n),r=new Map,o=new kt.default(()=>null),s=n.reduce((u,f,d,h)=>(r.set(f.id,f),u.set(f.id,Rn(h,T5(d+1),t3(B8(f)),K5((y,m)=>(l.delete(m),y.some(ln(m))||(y.push(m),o.set(m.id,f)),y),[]))),u),new kt.default(()=>[]));return{sorted:n,byId:u=>Dn(r.get(u),`Element not found by id: ${u}`),root:l,parent:u=>o.get(typeof u=="string"?u:u.id),children:u=>s.get(typeof u=="string"?u:u.id),flatten:U5(()=>new Set([...l,...n.reduce((u,f)=>{let d=s.get(f.id);return d.length===0?(u.push(f),u):(d.length>1&&u.push(...d),u)},[])]))}}const Vd=(e,n)=>e.size>2&&n.size!==e.size?new Set(eo([...RA(e).flatten(),...n])):e.size>1?new Set(eo([...e])):e;function B6(e,n,l){let r=d=>n.has(d),o=new Set([e]),s={incomers:new Set,subjects:new Set([e]),outgoers:new Set},u=new Set(l.incoming.flatMap(d=>{if(s.subjects.add(d.target),s.incomers.add(d.source),o.add(d.target),d.target!==e){let m=d.target.parent;for(;m&&m!==e;)o.add(m),m=m.parent}let h=d.source,y=[];for(;y.push(h),!(r(h)||!h.parent);)h=h.parent;return y})),f=new Set(l.outgoing.flatMap(d=>{if(s.subjects.add(d.source),s.outgoers.add(d.target),o.add(d.source),d.source!==e){let m=d.source.parent;for(;m&&m!==e;)o.add(m),m=m.parent}let h=d.target,y=[];for(;y.push(h),!(r(h)||!h.parent);)h=h.parent;return y}));return{incomers:Vd(u,s.incomers),incoming:new Set(l.incoming),subjects:Vd(o,s.subjects),outgoing:new Set(l.outgoing),outgoers:Vd(f,s.outgoers)}}function FS(e,n,l,r="global"){let o=l?n.findView(l):null;if(r==="view")return ye(o,'Scope view id is required when scope is "view"'),zA(e,o,n);let s=n.element(e);return B6(s,GB(s.ascendingSiblings()),{incoming:[...s.incoming()],outgoing:[...s.outgoing()]})}function zA(e,n,l){let r=l.element(e),o={incoming:f4(Ei(r.incoming(),u=>n.includesRelation(u.id))),outgoing:f4(Ei(r.outgoing(),u=>n.includesRelation(u.id)))},s=B8(r);return B6(r,new Set([...r.ascendingSiblings(),...Rn(n.elements(),IB(u=>u.element),Ei(u=>u!==r&&s(u)))]),o)}let Xd={default:yl.lazy(()=>_i(()=>Promise.resolve().then(()=>UA),void 0).then(e=>({default:e.IconRenderer})))};function IS(e){let n=Xd[e];if(!n){const l=Object.keys(Xd);if(console.error("Unknown projectId: "+e+" (available: "+l+")"),l.length===0)throw new Error("No projects found, invalid state");e=l[0],console.warn("Falling back to project: "+e),n=Xd[e]}return l=>Yd.jsx(yl.Suspense,{children:Yd.jsx(n,l)})}const MS={updateView:()=>{throw new Error("likec4rpc.updateView is not available in production")},calcAdhocView:()=>{throw new Error("likec4rpc.calcAdhocView is not available in production")}},w6=z1({_stage:"layouted",projectId:"default",project:{id:"default",title:"default"},specification:{tags:{},elements:{actor:{style:{shape:"person",color:"indigo"}},system:{style:{}},component:{style:{}},service:{style:{}},webapp:{style:{shape:"browser"}},mobile:{style:{shape:"mobile"}},desktop:{style:{shape:"browser"}},storage:{style:{shape:"storage",color:"color_storage"}},infra:{notation:"Инфраструктура",style:{color:"sky"}},queue:{notation:"Шина данных",style:{color:"color_storage",shape:"queue",opacity:20}},database:{notation:"База данных",style:{color:"color_storage",shape:"storage"}},system_ext:{notation:"",style:{color:"color_ext",shape:"rectangle"}},container:{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"}}},relationships:{WSS:{technology:"WSS",style:{color:"indigo"}},http:{technology:"HTTP",style:{color:"indigo"}},https:{technology:"HTTPS",style:{color:"green"}},grpc:{technology:"GRPC",style:{color:"indigo",tail:"normal"}},event:{technology:"queue",style:{color:"indigo"}},kafka:{technology:"queue",style:{color:"indigo"}},tcp:{technology:"TCP",style:{color:"indigo",tail:"normal"}}},deployments:{},customColors:{color_system_ext:{elements:{fill:"#827a8e",stroke:"#6c6477",hiContrast:"#ffffff",loContrast:"#ffffff"},relationships:{line:"#9892a1",label:"#b0abb7",labelBg:"#574e64"}},color_ext:{elements:{fill:"#827a8e",stroke:"#6c6477",hiContrast:"#ffffff",loContrast:"#ffffff"},relationships:{line:"#9892a1",label:"#b0abb7",labelBg:"#574e64"}},color_infra:{elements:{fill:"#827a8e",stroke:"#6c6477",hiContrast:"#ffffff",loContrast:"#ffffff"},relationships:{line:"#9892a1",label:"#b0abb7",labelBg:"#574e64"}},color_queue:{elements:{fill:"#827a8e",stroke:"#6c6477",hiContrast:"#ffffff",loContrast:"#ffffff"},relationships:{line:"#9892a1",label:"#b0abb7",labelBg:"#574e64"}},color_storage:{elements:{fill:"#858484",stroke:"#747172",hiContrast:"#ffffff",loContrast:"#ffffff"},relationships:{line:"#939393",label:"#b3b1b2",labelBg:"#605457"}},color_database:{elements:{fill:"#827a8e",stroke:"#6c6477",hiContrast:"#ffffff",loContrast:"#ffffff"},relationships:{line:"#9892a1",label:"#b0abb7",labelBg:"#574e64"}},color_container:{elements:{fill:"#23a2d9",stroke:"#1892c5",hiContrast:"#ffffff",loContrast:"#ffffff"},relationships:{line:"#55b7e2",label:"#7ac8ea",labelBg:"#00719d"}}}},elements:{prod:{style:{},title:"Production (DC1)",kind:"system",id:"prod"},dr:{style:{},title:"Disaster Recovery (DC2)",kind:"system",id:"dr"},"prod.edge":{style:{},title:"Edge Layer",kind:"system",id:"prod.edge"},"prod.app":{style:{},title:"Kubernetes Cluster - TeamBridge",kind:"system",id:"prod.app"},"prod.data":{style:{},title:"Data Layer",kind:"system",id:"prod.data"},"prod.observability":{style:{},title:"Observability Layer",kind:"system",id:"prod.observability"},"dr.standby_app":{style:{},title:"Warm Standby Kubernetes",kind:"system",id:"dr.standby_app"},"dr.standby_data":{style:{},title:"Standby Data Layer",kind:"system",id:"dr.standby_data"},"prod.edge.lb":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"L4 Load Balancer",kind:"system_ext",id:"prod.edge.lb"},"prod.edge.ingress":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"Ingress Controller (Nginx)",kind:"container",id:"prod.edge.ingress"},"prod.app.api_deploy":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"API Gateway Deployment (3-6 pods)",kind:"container",id:"prod.app.api_deploy"},"prod.app.ws_deploy":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"WebSocket Gateway Deployment (4-8 pods)",kind:"container",id:"prod.app.ws_deploy"},"prod.app.chat_deploy":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"Chat Service Deployment (3-6 pods)",kind:"container",id:"prod.app.chat_deploy"},"prod.app.search_deploy":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"Search Service Deployment (2-4 pods)",kind:"container",id:"prod.app.search_deploy"},"prod.app.file_deploy":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"File Service Deployment (2-4 pods)",kind:"container",id:"prod.app.file_deploy"},"prod.app.notification_deploy":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"Notification Service Deployment (2-4 pods)",kind:"container",id:"prod.app.notification_deploy"},"prod.app.integration_deploy":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"Integration Service Deployment (2-4 pods)",kind:"container",id:"prod.app.integration_deploy"},"prod.data.kafka_cluster":{notation:"Шина данных",style:{color:"color_storage",shape:"queue",opacity:20},title:"Kafka Cluster (3 brokers)",kind:"queue",id:"prod.data.kafka_cluster"},"prod.data.keydb_cluster":{notation:"База данных",style:{color:"color_storage",shape:"storage"},title:"KeyDB Cluster (3 nodes)",kind:"database",id:"prod.data.keydb_cluster"},"prod.data.postgres_chat":{notation:"База данных",style:{color:"color_storage",shape:"storage"},title:"PostgreSQL Chat (primary + replica)",kind:"database",id:"prod.data.postgres_chat"},"prod.data.postgres_file":{notation:"База данных",style:{color:"color_storage",shape:"storage"},title:"PostgreSQL File Metadata (primary + replica)",kind:"database",id:"prod.data.postgres_file"},"prod.data.postgres_notif":{notation:"База данных",style:{color:"color_storage",shape:"storage"},title:"PostgreSQL Notification (primary + replica)",kind:"database",id:"prod.data.postgres_notif"},"prod.data.opensearch_cluster":{notation:"База данных",style:{color:"color_storage",shape:"storage"},title:"OpenSearch Cluster (3 nodes)",kind:"database",id:"prod.data.opensearch_cluster"},"prod.data.s3_cluster":{style:{shape:"storage",color:"color_storage"},title:"S3/MinIO Cluster",kind:"storage",id:"prod.data.s3_cluster"},"prod.observability.vm":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"VictoriaMetrics",kind:"system_ext",id:"prod.observability.vm"},"prod.observability.logs":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"Log Storage",kind:"system_ext",id:"prod.observability.logs"},"prod.observability.traces":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"Trace Storage",kind:"system_ext",id:"prod.observability.traces"},"prod.observability.alerting":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"Alertmanager",kind:"system_ext",id:"prod.observability.alerting"},"dr.standby_app.api_standby":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"API Gateway Standby (1-2 pods)",kind:"container",id:"dr.standby_app.api_standby"},"dr.standby_app.ws_standby":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"WebSocket Gateway Standby (1-2 pods)",kind:"container",id:"dr.standby_app.ws_standby"},"dr.standby_app.chat_standby":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},title:"Chat Service Standby (1-2 pods)",kind:"container",id:"dr.standby_app.chat_standby"},"dr.standby_data.kafka_dr":{notation:"Шина данных",style:{color:"color_storage",shape:"queue",opacity:20},title:"Kafka Standby",kind:"queue",id:"dr.standby_data.kafka_dr"},"dr.standby_data.postgres_dr":{notation:"База данных",style:{color:"color_storage",shape:"storage"},title:"PostgreSQL Standby",kind:"database",id:"dr.standby_data.postgres_dr"},"dr.standby_data.s3_dr":{style:{shape:"storage",color:"color_storage"},title:"S3 Replication Target",kind:"storage",id:"dr.standby_data.s3_dr"},employee:{style:{shape:"person",color:"indigo"},title:"Сотрудник",kind:"actor",id:"employee"},admin:{style:{shape:"person",color:"indigo"},title:"Администратор",kind:"actor",id:"admin"},TB:{style:{},description:{txt:`Корпоративная чат-платформа:
realtime сообщения, файлы, поиск, уведомления и интеграции`},title:"TeamBridge",kind:"system",id:"TB"},infra:{style:{},description:{txt:"Infrastructure services"},title:"Infrastructure",kind:"system",id:"infra"},clients:{style:{},title:"Clients",kind:"system",id:"clients"},push:{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"Push Providers (APNs/FCM/WebPush)",kind:"system_ext",id:"push"},"TB.api_gateway":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},description:{txt:"REST, auth, rate limit"},title:"API Gateway",kind:"container",id:"TB.api_gateway"},"TB.ws_gateway":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},description:{txt:"WSS соединения, realtime доставка, presence routing"},title:"WebSocket Gateway",kind:"container",id:"TB.ws_gateway"},"TB.search":{style:{},title:"Searching System",kind:"system",id:"TB.search"},"TB.fs":{style:{},title:"File Management",kind:"system",id:"TB.fs"},"TB.notification":{style:{},title:"Notification System",kind:"system",id:"TB.notification"},"TB.chat":{style:{},title:"Chat System",kind:"system",id:"TB.chat"},"TB.kafka":{notation:"Шина данных",style:{color:"color_storage",shape:"queue",opacity:20},technology:"[Kafka]",title:"Message Bus",kind:"queue",id:"TB.kafka"},"TB.keydb":{notation:"База данных",style:{color:"color_storage",shape:"storage"},technology:"[KeyDB/Redis]",description:{txt:"presence/sessions"},title:"KeyDB / Redis",kind:"database",id:"TB.keydb"},"TB.integration":{notation:"",style:{color:"color_ext",shape:"rectangle"},description:{txt:"Внешние коннекторы и webhooks"},title:"Plugin Service",kind:"system_ext",id:"TB.integration"},"infra.keycloak":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"Keycloak (OIDC/SSO)",kind:"system_ext",id:"infra.keycloak"},"infra.ldap":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"LDAP / Active Directory",kind:"system_ext",id:"infra.ldap"},"infra.config_service":{notation:"",style:{color:"color_ext",shape:"rectangle"},technology:"[Consul]",title:"Configuration Service",kind:"system_ext",id:"infra.config_service"},"infra.victoria_metrics":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"VictoriaMetrics",kind:"system_ext",id:"infra.victoria_metrics"},"infra.vault":{notation:"",style:{color:"color_ext",shape:"rectangle"},title:"Vault",kind:"system_ext",id:"infra.vault"},"clients.web":{style:{shape:"browser"},title:"Web Client",kind:"webapp",id:"clients.web"},"clients.desktop":{style:{shape:"browser"},title:"Desktop Client",kind:"desktop",id:"clients.desktop"},"clients.mobile":{style:{shape:"mobile"},title:"Mobile Client",kind:"mobile",id:"clients.mobile"},"TB.search.search_service":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},description:{txt:"Индексация и поиск"},title:"Search Service",kind:"container",id:"TB.search.search_service"},"TB.search.opensearch":{notation:"База данных",style:{color:"color_storage",shape:"storage"},technology:"[OpenSearch]",description:{txt:"Поиск"},title:"OpenSearch",kind:"database",id:"TB.search.opensearch"},"TB.fs.file_service":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},description:{txt:"Загрузка/чтение файлов"},title:"File Service",kind:"container",id:"TB.fs.file_service"},"TB.fs.s3":{notation:"База данных",style:{color:"color_storage",shape:"storage"},technology:"[Minio]",description:{txt:"Хранение файлов"},title:"S3",kind:"database",id:"TB.fs.s3"},"TB.fs.db_fs":{notation:"База данных",style:{color:"color_storage",shape:"storage"},technology:"[PostgreSql]",description:{txt:"Метаданные файлов"},title:"File Metadata DB",kind:"database",id:"TB.fs.db_fs"},"TB.notification.push_service":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},description:{txt:"Push Policy и доставка уведомлений"},title:"Notification Service",kind:"container",id:"TB.notification.push_service"},"TB.notification.postgres":{notation:"База данных",style:{color:"color_storage",shape:"storage"},technology:"[PostgreSql]",description:{txt:"Настройки push уведомлений"},title:"Notification Settings DB",kind:"database",id:"TB.notification.postgres"},"TB.chat.chat_service":{notation:"C4 element Container",style:{color:"color_container",shape:"rectangle"},description:{txt:"Обработка сообщений, чатов, участников, администрирование чатов"},title:"Chat Service",kind:"container",id:"TB.chat.chat_service"},"TB.chat.postgres":{notation:"База данных",style:{color:"color_storage",shape:"storage"},technology:"[PostgreSql]",description:{txt:"Чаты, сообщения, участники"},title:"Chat DB",kind:"database",id:"TB.chat.postgres"}},relations:{"1ca23k6":{technology:"HTTPS",color:"green",title:"HTTPS",source:{model:"clients.web"},target:{model:"prod.edge.lb"},kind:"https",id:"1ca23k6"},q8p6n9:{technology:"HTTPS",color:"green",title:"HTTPS",source:{model:"clients.desktop"},target:{model:"prod.edge.lb"},kind:"https",id:"q8p6n9"},"18jphkg":{technology:"HTTPS",color:"green",title:"HTTPS",source:{model:"clients.mobile"},target:{model:"prod.edge.lb"},kind:"https",id:"18jphkg"},"1phgyox":{technology:"WSS",color:"indigo",title:"WSS",source:{model:"clients.web"},target:{model:"prod.edge.lb"},kind:"WSS",id:"1phgyox"},"19mqgw0":{technology:"WSS",color:"indigo",title:"WSS",source:{model:"clients.desktop"},target:{model:"prod.edge.lb"},kind:"WSS",id:"19mqgw0"},"95i303":{technology:"WSS",color:"indigo",title:"WSS",source:{model:"clients.mobile"},target:{model:"prod.edge.lb"},kind:"WSS",id:"95i303"},"1fqm4kl":{technology:"HTTPS",color:"green",title:"L7 routing",source:{model:"prod.edge.lb"},target:{model:"prod.edge.ingress"},kind:"https",id:"1fqm4kl"},"1iyelpg":{technology:"HTTPS",color:"green",title:"REST traffic",source:{model:"prod.edge.ingress"},target:{model:"prod.app.api_deploy"},kind:"https",id:"1iyelpg"},"1mjpi8w":{technology:"WSS",color:"indigo",title:"Realtime traffic",source:{model:"prod.edge.ingress"},target:{model:"prod.app.ws_deploy"},kind:"WSS",id:"1mjpi8w"},cgiima:{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.api_deploy"},target:{model:"prod.app.chat_deploy"},kind:"grpc",id:"cgiima"},"542wlt":{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.api_deploy"},target:{model:"prod.app.search_deploy"},kind:"grpc",id:"542wlt"},"1f4b5p4":{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.api_deploy"},target:{model:"prod.app.file_deploy"},kind:"grpc",id:"1f4b5p4"},"1v986c4":{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.api_deploy"},target:{model:"prod.app.notification_deploy"},kind:"grpc",id:"1v986c4"},"1nea65i":{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.api_deploy"},target:{model:"prod.app.integration_deploy"},kind:"grpc",id:"1nea65i"},owkg61:{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.ws_deploy"},target:{model:"prod.app.chat_deploy"},kind:"grpc",id:"owkg61"},"10ysh9j":{technology:"TCP",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.ws_deploy"},target:{model:"prod.data.keydb_cluster"},kind:"tcp",id:"10ysh9j"},"1gzhabj":{technology:"queue",color:"indigo",title:"",source:{model:"prod.data.kafka_cluster"},target:{model:"prod.app.ws_deploy"},kind:"kafka",id:"1gzhabj"},"19tle31":{technology:"TCP",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.chat_deploy"},target:{model:"prod.data.postgres_chat"},kind:"tcp",id:"19tle31"},"1usa0y6":{technology:"queue",color:"indigo",title:"",source:{model:"prod.app.chat_deploy"},target:{model:"prod.data.kafka_cluster"},kind:"kafka",id:"1usa0y6"},ag5kkf:{technology:"queue",color:"indigo",title:"",source:{model:"prod.app.search_deploy"},target:{model:"prod.data.kafka_cluster"},kind:"kafka",id:"ag5kkf"},"193shz4":{technology:"HTTP",color:"indigo",title:"",source:{model:"prod.app.search_deploy"},target:{model:"prod.data.opensearch_cluster"},kind:"http",id:"193shz4"},"2tjk04":{technology:"TCP",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.file_deploy"},target:{model:"prod.data.postgres_file"},kind:"tcp",id:"2tjk04"},"196zbg4":{technology:"HTTP",color:"indigo",title:"",source:{model:"prod.app.file_deploy"},target:{model:"prod.data.s3_cluster"},kind:"http",id:"196zbg4"},"72d88l":{technology:"TCP",color:"indigo",tail:"normal",title:"",source:{model:"prod.app.notification_deploy"},target:{model:"prod.data.postgres_notif"},kind:"tcp",id:"72d88l"},"15222m3":{technology:"queue",color:"indigo",title:"",source:{model:"prod.app.notification_deploy"},target:{model:"prod.data.kafka_cluster"},kind:"kafka",id:"15222m3"},"56hgi6":{technology:"HTTPS",color:"green",title:"",source:{model:"prod.app.notification_deploy"},target:{model:"push"},kind:"https",id:"56hgi6"},w7tzvx:{title:"runs",source:{model:"prod.app.api_deploy"},target:{model:"TB.api_gateway"},id:"w7tzvx"},"1yrybrg":{title:"runs",source:{model:"prod.app.ws_deploy"},target:{model:"TB.ws_gateway"},id:"1yrybrg"},seuw7l:{title:"runs",source:{model:"prod.app.chat_deploy"},target:{model:"TB.chat.chat_service"},id:"seuw7l"},"1vgnycg":{title:"runs",source:{model:"prod.app.search_deploy"},target:{model:"TB.search.search_service"},id:"1vgnycg"},"1ldb1a0":{title:"runs",source:{model:"prod.app.file_deploy"},target:{model:"TB.fs.file_service"},id:"1ldb1a0"},"6f4uz6":{title:"runs",source:{model:"prod.app.notification_deploy"},target:{model:"TB.notification.push_service"},id:"6f4uz6"},pjs2o7:{title:"runs",source:{model:"prod.app.integration_deploy"},target:{model:"TB.integration"},id:"pjs2o7"},"1eeamja":{title:"hosts",source:{model:"prod.data.kafka_cluster"},target:{model:"TB.kafka"},id:"1eeamja"},ftkuvp:{title:"hosts",source:{model:"prod.data.keydb_cluster"},target:{model:"TB.keydb"},id:"ftkuvp"},"1ewdub4":{title:"hosts",source:{model:"prod.data.postgres_chat"},target:{model:"TB.chat.postgres"},id:"1ewdub4"},cxcn5n:{title:"hosts",source:{model:"prod.data.postgres_file"},target:{model:"TB.fs.db_fs"},id:"cxcn5n"},ibo8eh:{title:"hosts",source:{model:"prod.data.postgres_notif"},target:{model:"TB.notification.postgres"},id:"ibo8eh"},"177xj2s":{title:"hosts",source:{model:"prod.data.opensearch_cluster"},target:{model:"TB.search.opensearch"},id:"177xj2s"},"1s2y8we":{title:"hosts",source:{model:"prod.data.s3_cluster"},target:{model:"TB.fs.s3"},id:"1s2y8we"},"1vj83qf":{title:"OIDC",source:{model:"prod.app.api_deploy"},target:{model:"infra.keycloak"},id:"1vj83qf"},"1e4qvon":{title:"federation",source:{model:"infra.keycloak"},target:{model:"infra.ldap"},id:"1e4qvon"},f3r31p:{title:"metrics scrape",source:{model:"prod.observability.vm"},target:{model:"prod.app"},id:"f3r31p"},"95lv34":{title:"logs ingest",source:{model:"prod.observability.logs"},target:{model:"prod.app"},id:"95lv34"},vm5c1y:{title:"traces ingest",source:{model:"prod.observability.traces"},target:{model:"prod.app"},id:"vm5c1y"},"26c8lu":{title:"alerts",source:{model:"prod.observability.alerting"},target:{model:"prod.observability.vm"},id:"26c8lu"},eda4ev:{technology:"TCP",color:"indigo",tail:"normal",title:"async replication",source:{model:"prod.data.postgres_chat"},target:{model:"dr.standby_data.postgres_dr"},kind:"tcp",id:"eda4ev"},qhrfc2:{technology:"queue",color:"indigo",title:"mirror topics",source:{model:"prod.data.kafka_cluster"},target:{model:"dr.standby_data.kafka_dr"},kind:"kafka",id:"qhrfc2"},"178dkkq":{technology:"HTTP",color:"indigo",title:"bucket replication",source:{model:"prod.data.s3_cluster"},target:{model:"dr.standby_data.s3_dr"},kind:"http",id:"178dkkq"},uypab9:{technology:"TCP",color:"indigo",tail:"normal",title:"promote on failover",source:{model:"dr.standby_data.postgres_dr"},target:{model:"dr.standby_app.chat_standby"},kind:"tcp",id:"uypab9"},qul3d1:{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"dr.standby_app.api_standby"},target:{model:"dr.standby_app.chat_standby"},kind:"grpc",id:"qul3d1"},zhos60:{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"dr.standby_app.ws_standby"},target:{model:"dr.standby_app.chat_standby"},kind:"grpc",id:"zhos60"},ici2vu:{title:"использует",source:{model:"employee"},target:{model:"clients"},id:"ici2vu"},iz0y4o:{title:"администрирует",source:{model:"admin"},target:{model:"clients.web"},id:"iz0y4o"},"1eq2hch":{technology:"HTTPS",color:"green",title:"Синхронные операции: поиск, CRUD, администрирование, загрузка/чтение файлов",source:{model:"clients"},target:{model:"TB.api_gateway"},kind:"https",id:"1eq2hch"},"12eeguk":{technology:"WSS",color:"indigo",title:"Realtime соединение, получение новых сообщений, событий присутствия и обновлений чатов",source:{model:"clients"},target:{model:"TB.ws_gateway"},kind:"WSS",id:"12eeguk"},"1m57cjk":{technology:"GRPC",color:"indigo",tail:"normal",title:"",source:{model:"TB.api_gateway"},target:{model:"TB.chat.chat_service"},kind:"grpc",id:"1m57cjk"},"19lhnr5":{technology:"GRPC",color:"indigo",tail:"normal",title:"Поиск пользователей/сообщений",source:{model:"TB.api_gateway"},target:{model:"TB.search.search_service"},kind:"grpc",id:"19lhnr5"},"1sj28wa":{technology:"GRPC",color:"indigo",tail:"normal",title:"Работа с файлами",source:{model:"TB.api_gateway"},target:{model:"TB.fs.file_service"},kind:"grpc",id:"1sj28wa"},jqi357:{technology:"GRPC",color:"indigo",tail:"normal",title:"Настройка push уведомлений",source:{model:"TB.api_gateway"},target:{model:"TB.notification.push_service"},kind:"grpc",id:"jqi357"},"1ki74mh":{title:"REST",source:{model:"TB.api_gateway"},target:{model:"TB.integration"},id:"1ki74mh"},"1by69bn":{title:"JWT verify (JWKS)",source:{model:"TB.ws_gateway"},target:{model:"infra.keycloak"},id:"1by69bn"},"1uzu2zg":{technology:"TCP",color:"indigo",tail:"normal",title:"Хранение WS сессий и статуса присутствия пользователей с TTL",source:{model:"TB.ws_gateway"},target:{model:"TB.keydb"},kind:"tcp",id:"1uzu2zg"},n5d5ii:{technology:"queue",color:"indigo",title:"message events",source:{model:"TB.kafka"},target:{model:"TB.ws_gateway"},kind:"kafka",id:"n5d5ii"},"1wnu3p1":{title:"consume/produce events",source:{model:"TB.integration"},target:{model:"TB.kafka"},id:"1wnu3p1"},csodkp:{title:"OIDC / JWT",source:{model:"TB.api_gateway"},target:{model:"infra.keycloak"},id:"csodkp"},o241a0:{title:"user federation",source:{model:"infra.keycloak"},target:{model:"infra.ldap"},id:"o241a0"},qvyk0w:{technology:"HTTP",color:"indigo",title:"indexing/searching",source:{model:"TB.search.search_service"},target:{model:"TB.search.opensearch"},kind:"http",id:"qvyk0w"},"2jw9x9":{technology:"queue",color:"indigo",title:"Consume Message Events",source:{model:"TB.search.search_service"},target:{model:"TB.kafka"},kind:"kafka",id:"2jw9x9"},llax9u:{technology:"HTTP",color:"indigo",title:"Store/Read Files",source:{model:"TB.fs.file_service"},target:{model:"TB.fs.s3"},kind:"http",id:"llax9u"},"1rctr09":{technology:"TCP",color:"indigo",tail:"normal",title:"file metadata",source:{model:"TB.fs.file_service"},target:{model:"TB.fs.db_fs"},kind:"tcp",id:"1rctr09"},gv4o2f:{technology:"TCP",color:"indigo",tail:"normal",title:"notification settings",source:{model:"TB.notification.push_service"},target:{model:"TB.notification.postgres"},kind:"tcp",id:"gv4o2f"},"6w9q14":{technology:"queue",color:"indigo",title:"Consume Message Created Events",source:{model:"TB.notification.push_service"},target:{model:"TB.kafka"},kind:"kafka",id:"6w9q14"},h13rjj:{technology:"HTTPS",color:"green",title:"Push Message Events",source:{model:"TB.notification.push_service"},target:{model:"push"},kind:"https",id:"h13rjj"},"29rp15":{technology:"TCP",color:"indigo",tail:"normal",title:"read active sessions",source:{model:"TB.notification.push_service"},target:{model:"TB.keydb"},kind:"tcp",id:"29rp15"},"1fhghcm":{technology:"TCP",color:"indigo",tail:"normal",title:"messages/chats/users",source:{model:"TB.chat.chat_service"},target:{model:"TB.chat.postgres"},kind:"tcp",id:"1fhghcm"},"189h7zu":{technology:"queue",color:"indigo",title:"Publish/Consume Messages",source:{model:"TB.chat.chat_service"},target:{model:"TB.kafka"},kind:"kafka",id:"189h7zu"},"1r6z1ky":{title:"profile sync",source:{model:"TB.chat.chat_service"},target:{model:"infra.keycloak"},id:"1r6z1ky"}},globals:{predicates:{},dynamicPredicates:{},styles:{}},views:{deployment_prod:{_type:"element",tags:null,links:null,viewOf:"prod",_stage:"layouted",sourcePath:"src/deployment.c4",description:null,title:"TeamBridge - Deployment Production (DC1)",id:"deployment_prod",autoLayout:{direction:"TB"},hash:"WtpA0uE74HMELxAUhjFL99AfAxS3URvGhko-yMdhq3w",bounds:{x:0,y:0,width:1922,height:1930},nodes:[{id:"clients",parent:null,level:0,children:["clients.web","clients.desktop","clients.mobile"],inEdges:[],outEdges:["54qm6y","ik3hnc","yi81nu"],title:"Clients",modelRef:"clients",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:8,y:8,width:1260,height:281,labelBBox:{x:6,y:0,width:51,height:15}},{id:"clients.web",parent:"clients",level:1,children:[],inEdges:[],outEdges:["54qm6y"],title:"Web Client",modelRef:"clients.web",shape:"browser",color:"secondary",style:{opacity:15,size:"md"},tags:[],kind:"webapp",x:48,y:69,width:320,height:180,labelBBox:{x:109,y:76,width:102,height:24}},{id:"clients.desktop",parent:"clients",level:1,children:[],inEdges:[],outEdges:["ik3hnc"],title:"Desktop Client",modelRef:"clients.desktop",shape:"browser",color:"secondary",style:{opacity:15,size:"md"},tags:[],kind:"desktop",x:478,y:69,width:320,height:180,labelBBox:{x:93,y:76,width:134,height:24}},{id:"clients.mobile",parent:"clients",level:1,children:[],inEdges:[],outEdges:["yi81nu"],title:"Mobile Client",modelRef:"clients.mobile",shape:"mobile",color:"secondary",style:{opacity:15,size:"md"},tags:[],kind:"mobile",x:908,y:69,width:320,height:180,labelBBox:{x:100,y:76,width:120,height:24}},{id:"prod",parent:null,level:0,children:["prod.edge","prod.observability","prod.app","prod.data"],inEdges:["54qm6y","ik3hnc","yi81nu"],outEdges:["kh6rga","1v8q0uq","cct1vv","cct28b","vs8gel"],title:"Production (DC1)",modelRef:"prod",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:438,y:340,width:830,height:927,labelBBox:{x:6,y:0,width:110,height:15}},{id:"prod.edge",parent:"prod",level:1,children:[],inEdges:["54qm6y","ik3hnc","yi81nu"],outEdges:["hv7kzs"],title:"Edge Layer",modelRef:"prod.edge",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",x:478,y:401,width:320,height:180,labelBBox:{x:107,y:76,width:106,height:24}},{id:"prod.observability",parent:"prod",level:1,children:[],inEdges:[],outEdges:["pye3li"],title:"Observability Layer",modelRef:"prod.observability",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",x:908,y:401,width:320,height:180,labelBBox:{x:72,y:76,width:175,height:24}},{id:"prod.app",parent:"prod",level:1,children:[],inEdges:["hv7kzs","1c5ki4b","pye3li"],outEdges:["1uymuqj","kh6rga","1v8q0uq","vs8gel"],title:"Kubernetes Cluster - TeamBridge",modelRef:"prod.app",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",x:674,y:724,width:330,height:180,labelBBox:{x:14,y:76,width:302,height:24}},{id:"prod.data",parent:"prod",level:1,children:[],inEdges:["1uymuqj"],outEdges:["1c5ki4b","cct1vv","cct28b"],title:"Data Layer",modelRef:"prod.data",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],kind:"system",x:563,y:1047,width:320,height:180,labelBBox:{x:109,y:76,width:102,height:24}},{id:"dr",parent:null,level:0,children:[],inEdges:["cct1vv"],outEdges:[],title:"Disaster Recovery (DC2)",modelRef:"dr",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},tags:[],kind:"system",navigateTo:"deployment_dr",x:487,y:1370,width:320,height:180,labelBBox:{x:47,y:76,width:226,height:24}},{id:"TB",parent:null,level:0,children:[],inEdges:["kh6rga","cct28b"],outEdges:["2yvmpp","rpv8pu"],title:"TeamBridge",modelRef:"TB",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:`Корпоративная чат-платформа:
realtime сообщения, файлы, поиск, уведомления и интеграции`},tags:[],kind:"system",x:917,y:1370,width:372,height:180,labelBBox:{x:18,y:47,width:337,height:83}},{id:"infra",parent:null,level:0,children:["infra.keycloak","infra.ldap"],inEdges:["vs8gel","2yvmpp"],outEdges:[],title:"Infrastructure",modelRef:"infra",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},description:{txt:"Infrastructure services"},tags:[],kind:"system",depth:1,x:903,y:1640,width:857,height:282,labelBBox:{x:6,y:0,width:105,height:15}},{id:"push",parent:null,level:0,children:[],inEdges:["1v8q0uq","rpv8pu"],outEdges:[],title:"Push Providers (APNs/FCM/WebPush)",modelRef:"push",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:1544,y:1370,width:378,height:180,labelBBox:{x:14,y:76,width:351,height:24}},{id:"infra.keycloak",parent:"infra",level:1,children:[],inEdges:["vs8gel","2yvmpp"],outEdges:["15vxb5a"],title:"Keycloak (OIDC/SSO)",modelRef:"infra.keycloak",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:943,y:1702,width:320,height:180,labelBBox:{x:59,y:76,width:202,height:24}},{id:"infra.ldap",parent:"infra",level:1,children:[],inEdges:["15vxb5a"],outEdges:[],title:"LDAP / Active Directory",modelRef:"infra.ldap",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:1400,y:1702,width:320,height:180,labelBBox:{x:54,y:76,width:213,height:24}}],edges:[{id:"hv7kzs",parent:"prod",source:"prod.edge",target:"prod.app",label:"[...]",relations:["1iyelpg","1mjpi8w"],color:"gray",line:"dashed",head:"normal",points:[[694,581],[720,623],[751,673],[778,715]],labelBBox:{x:746,y:640,width:25,height:18}},{id:"1uymuqj",parent:"prod",source:"prod.app",target:"prod.data",label:null,relations:["10ysh9j","19tle31","1usa0y6","ag5kkf","193shz4","2tjk04","196zbg4","72d88l","15222m3"],color:"indigo",line:"dashed",head:"normal",tail:"normal",points:[[754,912],[743,929],[734,946],[728,964],[720,987],[717,1012],[716,1037]],labelBBox:null},{id:"1c5ki4b",parent:"prod",source:"prod.data",target:"prod.app",label:"[queue]",relations:["1gzhabj"],color:"indigo",line:"dashed",head:"normal",kind:"kafka",points:[[755,1047],[770,1006],[788,956],[803,914]],labelBBox:{x:785,y:965,width:51,height:18}},{id:"pye3li",parent:"prod",source:"prod.observability",target:"prod.app",label:"[...]",relations:["f3r31p","95lv34","vm5c1y"],color:"gray",line:"dashed",head:"normal",points:[[1005,581],[975,623],[939,673],[908,716]],labelBBox:{x:961,y:640,width:25,height:18}},{id:"kh6rga",parent:null,source:"prod.app",target:"TB",label:"runs",relations:["w7tzvx","1yrybrg","seuw7l","1vgnycg","1ldb1a0","6f4uz6","pjs2o7"],color:"gray",line:"dashed",head:"normal",points:[[878,904],[896,947],[918,999],[938,1047],[982,1153],[1031,1276],[1064,1360]],labelBBox:{x:1027,y:1126,width:31,height:18}},{id:"1v8q0uq",parent:null,source:"prod.app",target:"push",label:"[HTTPS]",relations:["56hgi6"],color:"green",line:"dashed",head:"normal",kind:"https",points:[[962,904],[1130,1025],[1429,1240],[1601,1364]],labelBBox:{x:1462,y:1126,width:58,height:18}},{id:"cct1vv",parent:null,source:"prod.data",target:"dr",label:"[...]",relations:["eda4ev","qhrfc2","178dkkq"],color:"indigo",line:"dashed",head:"normal",tail:"normal",points:[[700,1237],[690,1276],[680,1321],[670,1360]],labelBBox:{x:688,y:1285,width:25,height:18}},{id:"cct28b",parent:null,source:"prod.data",target:"TB",label:"hosts",relations:["1eeamja","ftkuvp","1ewdub4","cxcn5n","ibo8eh","177xj2s","1s2y8we"],color:"gray",line:"dashed",head:"normal",points:[[828,1227],[879,1269],[939,1320],[990,1363]],labelBBox:{x:925,y:1288,width:37,height:18}},{id:"54qm6y",parent:null,source:"clients.web",target:"prod.edge",label:"[...]",relations:["1ca23k6","1phgyox"],color:"gray",line:"dashed",head:"normal",points:[[324,249],[383,294],[454,349],[514,395]],labelBBox:{x:424,y:308,width:25,height:18}},{id:"ik3hnc",parent:null,source:"clients.desktop",target:"prod.edge",label:"[...]",relations:["q8p6n9","19mqgw0"],color:"gray",line:"dashed",head:"normal",points:[[638,249],[638,293],[638,346],[638,391]],labelBBox:{x:639,y:308,width:25,height:18}},{id:"yi81nu",parent:null,source:"clients.mobile",target:"prod.edge",label:"[...]",relations:["18jphkg","95i303"],color:"gray",line:"dashed",head:"normal",points:[[952,249],[893,294],[822,349],[762,395]],labelBBox:{x:867,y:308,width:25,height:18}},{id:"vs8gel",parent:null,source:"prod.app",target:"infra.keycloak",label:"OIDC",relations:["1vj83qf"],color:"gray",line:"dashed",head:"normal",points:[[674,897],[614,935],[550,985],[508,1047],[381,1234],[302,1365],[432,1550],[545,1710],[774,1764],[933,1782]],labelBBox:{x:378,y:1288,width:39,height:18}},{id:"2yvmpp",parent:null,source:"TB",target:"infra.keycloak",label:"[...]",relations:["1by69bn","csodkp","1r6z1ky"],color:"gray",line:"dashed",head:"normal",points:[[1103,1549],[1103,1593],[1103,1646],[1103,1691]],labelBBox:{x:1104,y:1608,width:25,height:18}},{id:"15vxb5a",parent:"infra",source:"infra.keycloak",target:"infra.ldap",label:"[...]",relations:["1e4qvon","o241a0"],color:"gray",line:"dashed",head:"normal",points:[[1263,1792],[1304,1792],[1348,1792],[1390,1792]],labelBBox:{x:1319,y:1764,width:25,height:18}},{id:"rpv8pu",parent:null,source:"TB",target:"push",label:"Push Message Events",relations:["h13rjj"],color:"green",line:"dashed",head:"normal",technology:"HTTPS",kind:"https",points:[[1289,1460],[1366,1460],[1455,1460],[1533,1460]],labelBBox:{x:1345,y:1414,width:143,height:39}}]},deployment_dr:{_type:"element",tags:null,links:null,viewOf:"dr",_stage:"layouted",sourcePath:"src/deployment.c4",description:null,title:"TeamBridge - Deployment DR (DC2)",id:"deployment_dr",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Шина данных",shape:"queue",color:"secondary",kinds:["queue"]},{title:"База данных",shape:"storage",color:"secondary",kinds:["database"]}]},hash:"DTz_Nraw45HNqBLUxXwxo6Ev_CcsYuuroNnxzoMdydU",bounds:{x:0,y:0,width:1312,height:993},nodes:[{id:"prod",parent:null,level:0,children:["prod.data.postgres_chat","prod.data.kafka_cluster","prod.data.s3_cluster"],inEdges:[],outEdges:["18u3jhl","4e2dkw","1e8upnq"],title:"Production (DC1)",modelRef:"prod",shape:"rectangle",color:"secondary",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,navigateTo:"deployment_prod",x:8,y:8,width:1296,height:281,labelBBox:{x:6,y:0,width:110,height:15}},{id:"prod.data.postgres_chat",parent:"prod",level:1,children:[],inEdges:[],outEdges:["18u3jhl"],title:"PostgreSQL Chat (primary + replica)",modelRef:"prod.data.postgres_chat",shape:"storage",color:"secondary",style:{opacity:15,size:"md"},tags:[],notation:"База данных",kind:"database",x:48,y:69,width:356,height:180,labelBBox:{x:14,y:76,width:328,height:24}},{id:"prod.data.kafka_cluster",parent:"prod",level:1,children:[],inEdges:[],outEdges:["4e2dkw"],title:"Kafka Cluster (3 brokers)",modelRef:"prod.data.kafka_cluster",shape:"queue",color:"secondary",style:{opacity:20,size:"md"},tags:[],notation:"Шина данных",kind:"queue",x:514,y:73,width:320,height:172,labelBBox:{x:47,y:72,width:226,height:24}},{id:"prod.data.s3_cluster",parent:"prod",level:1,children:[],inEdges:[],outEdges:["1e8upnq"],title:"S3/MinIO Cluster",modelRef:"prod.data.s3_cluster",shape:"storage",color:"secondary",style:{opacity:15,size:"md"},tags:[],kind:"storage",x:944,y:69,width:320,height:180,labelBBox:{x:82,y:76,width:156,height:24}},{id:"dr",parent:null,level:0,children:["dr.standby_data","dr.standby_app"],inEdges:["18u3jhl","4e2dkw","1e8upnq"],outEdges:[],title:"Disaster Recovery (DC2)",modelRef:"dr",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:474,y:360,width:400,height:625,labelBBox:{x:6,y:0,width:157,height:15}},{id:"dr.standby_data",parent:"dr",level:1,children:[],inEdges:["18u3jhl","4e2dkw","1e8upnq"],outEdges:["10xmm63"],title:"Standby Data Layer",modelRef:"dr.standby_data",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",x:514,y:422,width:320,height:180,labelBBox:{x:70,y:76,width:181,height:24}},{id:"dr.standby_app",parent:"dr",level:1,children:[],inEdges:["10xmm63"],outEdges:[],title:"Warm Standby Kubernetes",modelRef:"dr.standby_app",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",x:514,y:765,width:320,height:180,labelBBox:{x:38,y:76,width:244,height:24}}],edges:[{id:"10xmm63",parent:"dr",source:"dr.standby_data",target:"dr.standby_app",label:"promote on failover",relations:["uypab9"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[674,612],[674,657],[674,710],[674,755]],labelBBox:{x:675,y:663,width:124,height:38}},{id:"18u3jhl",parent:null,source:"prod.data.postgres_chat",target:"dr.standby_data",label:"async replication",relations:["eda4ev"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[347,255],[411,305],[489,366],[552,416]],labelBBox:{x:464,y:310,width:108,height:39}},{id:"4e2dkw",parent:null,source:"prod.data.kafka_cluster",target:"dr.standby_data",label:"mirror topics",relations:["qhrfc2"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[674,245],[674,295],[674,359],[674,411]],labelBBox:{x:675,y:310,width:81,height:39}},{id:"1e8upnq",parent:null,source:"prod.data.s3_cluster",target:"dr.standby_data",label:"bucket replication",relations:["178dkkq"],color:"indigo",line:"dashed",head:"normal",technology:"HTTP",kind:"http",points:[[996,248],[934,299],[855,363],[791,415]],labelBBox:{x:916,y:310,width:113,height:39}}]},deployment_mapping:{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"src/deployment.c4",description:null,title:"TeamBridge - Logical to Physical Mapping",id:"deployment_mapping",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Шина данных",shape:"queue",color:"muted",kinds:["queue"]},{title:"Шина данных",shape:"queue",color:"green",kinds:["queue"]},{title:"C4 element Container",shape:"rectangle",color:"muted",kinds:["container"]},{title:"C4 element Container",shape:"rectangle",color:"green",kinds:["container"]},{title:"База данных",shape:"storage",color:"muted",kinds:["database"]},{title:"База данных",shape:"storage",color:"green",kinds:["database"]}]},hash:"CG0RrAtlWJDIuJI6QIXrOg30yxizc6ksC3zVjZZOv1Y",bounds:{x:0,y:0,width:6616,height:2181},nodes:[{id:"prod",parent:null,level:0,children:["prod.app","prod.data"],inEdges:[],outEdges:["1l5i6uh","1558gyx","1wh96nw","en5fnw","1pw0lp3","1dl54fw","14vwg26","19l7e2m","1et3lsu","c897mi","h7at0e","aqwvjh","1mtokf2","p4sex1"],title:"Production (DC1)",modelRef:"prod",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:2,navigateTo:"deployment_prod",x:3281,y:8,width:3162,height:1130,labelBBox:{x:6,y:0,width:110,height:15}},{id:"prod.app",parent:"prod",level:1,children:["prod.app.api_deploy","prod.app.ws_deploy","prod.app.search_deploy","prod.app.file_deploy","prod.app.notification_deploy","prod.app.integration_deploy","prod.app.chat_deploy"],inEdges:["1tl3ak8"],outEdges:["1l5i6uh","1558gyx","1wh96nw","en5fnw","1pw0lp3","1dl54fw","14vwg26","xqky4v","d4dmyq","1ctpjmz","17hpfua","cqxg0e","ea2n57","rh41oc","13ib7ap","mlfw58"],title:"Kubernetes Cluster - TeamBridge",modelRef:"prod.app",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:3321,y:69,width:2342,height:656,labelBBox:{x:6,y:0,width:219,height:15}},{id:"prod.app.api_deploy",parent:"prod.app",level:2,children:[],inEdges:[],outEdges:["1l5i6uh","1jaj52k","11wgdy4","tjq8hg","6rp1lr","xg5w7g"],title:"API Gateway Deployment (3-6 pods)",modelRef:"prod.app.api_deploy",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"C4 element Container",kind:"container",x:4303,y:152,width:357,height:180,labelBBox:{x:14,y:76,width:330,height:24}},{id:"prod.app.ws_deploy",parent:"prod.app",level:2,children:[],inEdges:["1tl3ak8"],outEdges:["1558gyx","1ukhipc","xqky4v"],title:"WebSocket Gateway Deployment (4-8 pods)",modelRef:"prod.app.ws_deploy",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"C4 element Container",kind:"container",x:5195,y:152,width:427,height:180,labelBBox:{x:14,y:76,width:400,height:24}},{id:"prod.app.search_deploy",parent:"prod.app",level:2,children:[],inEdges:["11wgdy4"],outEdges:["en5fnw","17hpfua","cqxg0e"],title:"Search Service Deployment (2-4 pods)",modelRef:"prod.app.search_deploy",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"C4 element Container",kind:"container",x:3823,y:505,width:376,height:180,labelBBox:{x:14,y:76,width:349,height:24}},{id:"prod.app.file_deploy",parent:"prod.app",level:2,children:[],inEdges:["tjq8hg"],outEdges:["1pw0lp3","ea2n57","rh41oc"],title:"File Service Deployment (2-4 pods)",modelRef:"prod.app.file_deploy",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"C4 element Container",kind:"container",x:4309,y:505,width:345,height:180,labelBBox:{x:14,y:76,width:317,height:24}},{id:"prod.app.notification_deploy",parent:"prod.app",level:2,children:[],inEdges:["6rp1lr"],outEdges:["1dl54fw","13ib7ap","mlfw58"],title:"Notification Service Deployment (2-4 pods)",modelRef:"prod.app.notification_deploy",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"C4 element Container",kind:"container",x:4765,y:505,width:356,height:180,labelBBox:{x:14,y:64,width:329,height:48}},{id:"prod.app.integration_deploy",parent:"prod.app",level:2,children:[],inEdges:["xg5w7g"],outEdges:["14vwg26"],title:"Integration Service Deployment (2-4 pods)",modelRef:"prod.app.integration_deploy",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"C4 element Container",kind:"container",x:3361,y:505,width:352,height:180,labelBBox:{x:14,y:64,width:324,height:48}},{id:"prod.app.chat_deploy",parent:"prod.app",level:2,children:[],inEdges:["1jaj52k","1ukhipc"],outEdges:["1wh96nw","d4dmyq","1ctpjmz"],title:"Chat Service Deployment (3-6 pods)",modelRef:"prod.app.chat_deploy",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"C4 element Container",kind:"container",x:5231,y:505,width:355,height:180,labelBBox:{x:14,y:76,width:327,height:24}},{id:"prod.data",parent:"prod",level:1,children:["prod.data.keydb_cluster","prod.data.kafka_cluster","prod.data.postgres_chat","prod.data.opensearch_cluster","prod.data.postgres_file","prod.data.s3_cluster","prod.data.postgres_notif"],inEdges:["xqky4v","d4dmyq","1ctpjmz","17hpfua","cqxg0e","ea2n57","rh41oc","13ib7ap","mlfw58"],outEdges:["19l7e2m","1tl3ak8","1et3lsu","c897mi","h7at0e","aqwvjh","1mtokf2","p4sex1"],title:"Data Layer",modelRef:"prod.data",shape:"rectangle",color:"muted",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:3321,y:796,width:3082,height:302,labelBBox:{x:6,y:0,width:75,height:15}},{id:"prod.data.keydb_cluster",parent:"prod.data",level:2,children:[],inEdges:["xqky4v"],outEdges:["1et3lsu"],title:"KeyDB Cluster (3 nodes)",modelRef:"prod.data.keydb_cluster",shape:"storage",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"База данных",kind:"database",x:6043,y:878,width:320,height:180,labelBBox:{x:47,y:76,width:225,height:24}},{id:"prod.data.kafka_cluster",parent:"prod.data",level:2,children:[],inEdges:["d4dmyq","17hpfua","13ib7ap"],outEdges:["19l7e2m","1tl3ak8"],title:"Kafka Cluster (3 brokers)",modelRef:"prod.data.kafka_cluster",shape:"queue",color:"muted",style:{opacity:20,size:"md"},tags:[],notation:"Шина данных",kind:"queue",x:5147,y:882,width:320,height:172,labelBBox:{x:47,y:72,width:226,height:24}},{id:"prod.data.postgres_chat",parent:"prod.data",level:2,children:[],inEdges:["1ctpjmz"],outEdges:["c897mi"],title:"PostgreSQL Chat (primary + replica)",modelRef:"prod.data.postgres_chat",shape:"storage",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"База данных",kind:"database",x:5577,y:878,width:356,height:180,labelBBox:{x:14,y:76,width:328,height:24}},{id:"prod.data.opensearch_cluster",parent:"prod.data",level:2,children:[],inEdges:["cqxg0e"],outEdges:["1mtokf2"],title:"OpenSearch Cluster (3 nodes)",modelRef:"prod.data.opensearch_cluster",shape:"storage",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"База данных",kind:"database",x:3361,y:878,width:320,height:180,labelBBox:{x:22,y:76,width:275,height:24}},{id:"prod.data.postgres_file",parent:"prod.data",level:2,children:[],inEdges:["ea2n57"],outEdges:["h7at0e"],title:"PostgreSQL File Metadata (primary + replica)",modelRef:"prod.data.postgres_file",shape:"storage",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"База данных",kind:"database",x:3791,y:878,width:363,height:180,labelBBox:{x:14,y:64,width:336,height:48}},{id:"prod.data.s3_cluster",parent:"prod.data",level:2,children:[],inEdges:["rh41oc"],outEdges:["p4sex1"],title:"S3/MinIO Cluster",modelRef:"prod.data.s3_cluster",shape:"storage",color:"muted",style:{opacity:15,size:"md"},tags:[],kind:"storage",x:4265,y:878,width:320,height:180,labelBBox:{x:82,y:76,width:156,height:24}},{id:"prod.data.postgres_notif",parent:"prod.data",level:2,children:[],inEdges:["mlfw58"],outEdges:["aqwvjh"],title:"PostgreSQL Notification (primary + replica)",modelRef:"prod.data.postgres_notif",shape:"storage",color:"muted",style:{opacity:15,size:"md"},tags:[],notation:"База данных",kind:"database",x:4695,y:878,width:341,height:180,labelBBox:{x:14,y:64,width:314,height:48}},{id:"TB",parent:null,level:0,children:["TB.api_gateway","TB.chat","TB.search","TB.fs","TB.notification","TB.integration","TB.kafka","TB.ws_gateway","TB.keydb"],inEdges:["1l5i6uh","1558gyx","1wh96nw","en5fnw","1pw0lp3","1dl54fw","14vwg26","19l7e2m","1et3lsu","c897mi","h7at0e","aqwvjh","1mtokf2","p4sex1"],outEdges:[],title:"TeamBridge",modelRef:"TB",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:`Корпоративная чат-платформа:
realtime сообщения, файлы, поиск, уведомления и интеграции`},tags:[],kind:"system",depth:2,x:8,y:422,width:3223,height:1751,labelBBox:{x:6,y:0,width:78,height:15}},{id:"TB.api_gateway",parent:"TB",level:1,children:[],inEdges:["1l5i6uh"],outEdges:["172il21","j2ytqx","1t4519m","1xgs79m","12miubv"],title:"API Gateway",modelRef:"TB.api_gateway",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:"REST, auth, rate limit"},tags:[],notation:"C4 element Container",kind:"container",x:1531,y:505,width:320,height:180,labelBBox:{x:87,y:65,width:147,height:47}},{id:"TB.chat",parent:"TB",level:1,children:["TB.chat.chat_service","TB.chat.postgres"],inEdges:["172il21","1wh96nw","c897mi"],outEdges:["sddrnk"],title:"Chat System",modelRef:"TB.chat",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:48,y:796,width:420,height:674,labelBBox:{x:6,y:0,width:83,height:15}},{id:"TB.search",parent:"TB",level:1,children:["TB.search.search_service","TB.search.opensearch"],inEdges:["j2ytqx","en5fnw","1mtokf2"],outEdges:["y7da2o"],title:"Searching System",modelRef:"TB.search",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:508,y:796,width:953,height:302,labelBBox:{x:6,y:0,width:118,height:15}},{id:"TB.fs",parent:"TB",level:1,children:["TB.fs.file_service","TB.fs.db_fs","TB.fs.s3"],inEdges:["1t4519m","1pw0lp3","h7at0e","p4sex1"],outEdges:[],title:"File Management",modelRef:"TB.fs",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:2361,y:796,width:830,height:674,labelBBox:{x:6,y:0,width:111,height:15}},{id:"TB.notification",parent:"TB",level:1,children:["TB.notification.push_service","TB.notification.postgres"],inEdges:["1xgs79m","1dl54fw","aqwvjh"],outEdges:["1imrg8j","1imnvus"],title:"Notification System",modelRef:"TB.notification",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:1921,y:796,width:400,height:674,labelBBox:{x:6,y:0,width:131,height:15}},{id:"TB.integration",parent:"TB",level:1,children:[],inEdges:["12miubv","14vwg26"],outEdges:["cushxu"],title:"Plugin Service",modelRef:"TB.integration",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:"Внешние коннекторы и webhooks"},tags:[],notation:"",kind:"system_ext",x:1531,y:878,width:320,height:180,labelBBox:{x:43,y:65,width:234,height:47}},{id:"TB.chat.chat_service",parent:"TB.chat",level:2,children:[],inEdges:["172il21","1wh96nw"],outEdges:["sddrnk","on0fsd"],title:"Chat Service",modelRef:"TB.chat.chat_service",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:"Обработка сообщений, чатов, участников, администрирование чатов"},tags:[],notation:"C4 element Container",kind:"container",x:88,y:878,width:340,height:180,labelBBox:{x:18,y:56,width:304,height:65}},{id:"TB.search.search_service",parent:"TB.search",level:2,children:[],inEdges:["j2ytqx","en5fnw"],outEdges:["y7da2o","vepvbw"],title:"Search Service",modelRef:"TB.search.search_service",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:"Индексация и поиск"},tags:[],notation:"C4 element Container",kind:"container",x:548,y:878,width:320,height:180,labelBBox:{x:87,y:65,width:146,height:47}},{id:"TB.fs.file_service",parent:"TB.fs",level:2,children:[],inEdges:["1t4519m","1pw0lp3"],outEdges:["1xoujz6","1t64w0e"],title:"File Service",modelRef:"TB.fs.file_service",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:"Загрузка/чтение файлов"},tags:[],notation:"C4 element Container",kind:"container",x:2401,y:878,width:320,height:180,labelBBox:{x:70,y:65,width:179,height:47}},{id:"TB.notification.push_service",parent:"TB.notification",level:2,children:[],inEdges:["1xgs79m","1dl54fw"],outEdges:["1imrg8j","1imnvus","x1bpgt"],title:"Notification Service",modelRef:"TB.notification.push_service",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:"Push Policy и доставка уведомлений"},tags:[],notation:"C4 element Container",kind:"container",x:1961,y:878,width:320,height:180,labelBBox:{x:29,y:65,width:262,height:47}},{id:"TB.chat.postgres",parent:"TB.chat",level:2,children:[],inEdges:["on0fsd","c897mi"],outEdges:[],title:"Chat DB",modelRef:"TB.chat.postgres",shape:"storage",color:"green",style:{opacity:15,size:"md"},description:{txt:"Чаты, сообщения, участники"},tags:[],notation:"База данных",technology:"[PostgreSql]",kind:"database",x:98,y:1250,width:320,height:180,labelBBox:{x:58,y:55,width:204,height:66}},{id:"TB.search.opensearch",parent:"TB.search",level:2,children:[],inEdges:["vepvbw","1mtokf2"],outEdges:[],title:"OpenSearch",modelRef:"TB.search.opensearch",shape:"storage",color:"green",style:{opacity:15,size:"md"},description:{txt:"Поиск"},tags:[],notation:"База данных",technology:"[OpenSearch]",kind:"database",x:1101,y:878,width:320,height:180,labelBBox:{x:102,y:56,width:116,height:66}},{id:"TB.fs.db_fs",parent:"TB.fs",level:2,children:[],inEdges:["1xoujz6","h7at0e"],outEdges:[],title:"File Metadata DB",modelRef:"TB.fs.db_fs",shape:"storage",color:"green",style:{opacity:15,size:"md"},description:{txt:"Метаданные файлов"},tags:[],notation:"База данных",technology:"[PostgreSql]",kind:"database",x:2401,y:1250,width:320,height:180,labelBBox:{x:81,y:55,width:159,height:66}},{id:"TB.fs.s3",parent:"TB.fs",level:2,children:[],inEdges:["1t64w0e","p4sex1"],outEdges:[],title:"S3",modelRef:"TB.fs.s3",shape:"storage",color:"green",style:{opacity:15,size:"md"},description:{txt:"Хранение файлов"},tags:[],notation:"База данных",technology:"[Minio]",kind:"database",x:2831,y:1250,width:320,height:180,labelBBox:{x:98,y:55,width:125,height:66}},{id:"TB.kafka",parent:"TB",level:1,children:[],inEdges:["sddrnk","y7da2o","1imrg8j","cushxu","19l7e2m"],outEdges:["1bjoq0f"],title:"Message Bus",modelRef:"TB.kafka",shape:"queue",color:"green",style:{opacity:20,size:"md"},tags:[],notation:"Шина данных",technology:"[Kafka]",kind:"queue",x:1180,y:1254,width:320,height:172,labelBBox:{x:97,y:62,width:125,height:45}},{id:"TB.notification.postgres",parent:"TB.notification",level:2,children:[],inEdges:["x1bpgt","aqwvjh"],outEdges:[],title:"Notification Settings DB",modelRef:"TB.notification.postgres",shape:"storage",color:"green",style:{opacity:15,size:"md"},description:{txt:"Настройки push уведомлений"},tags:[],notation:"База данных",technology:"[PostgreSql]",kind:"database",x:1961,y:1250,width:320,height:180,labelBBox:{x:53,y:55,width:214,height:66}},{id:"TB.ws_gateway",parent:"TB",level:1,children:[],inEdges:["1bjoq0f","1558gyx"],outEdges:["6vzg8"],title:"WebSocket Gateway",modelRef:"TB.ws_gateway",shape:"rectangle",color:"green",style:{opacity:15,size:"md"},description:{txt:"WSS соединения, realtime доставка, presence routing"},tags:[],notation:"C4 element Container",kind:"container",x:1961,y:1593,width:364,height:180,labelBBox:{x:18,y:56,width:328,height:65}},{id:"TB.keydb",parent:"TB",level:1,children:[],inEdges:["6vzg8","1imnvus","1et3lsu"],outEdges:[],title:"KeyDB / Redis",modelRef:"TB.keydb",shape:"storage",color:"green",style:{opacity:15,size:"md"},description:{txt:"presence/sessions"},tags:[],notation:"База данных",technology:"[KeyDB/Redis]",kind:"database",x:1983,y:1953,width:320,height:180,labelBBox:{x:93,y:55,width:134,height:67}}],edges:[{id:"172il21",parent:"TB",source:"TB.api_gateway",target:"TB.chat.chat_service",label:"[GRPC]",relations:["1m57cjk"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[1521,598],[1280,607],[830,645],[481,796],[438,815],[396,843],[360,872]],labelBBox:{x:606,y:756,width:52,height:18}},{id:"j2ytqx",parent:"TB",source:"TB.api_gateway",target:"TB.search.search_service",label:"Поиск пользователей/сообщений",relations:["19lhnr5"],color:"indigo",line:"dashed",head:"normal",technology:"GRPC",kind:"grpc",tail:"normal",points:[[1521,640],[1390,676],[1204,732],[1046,796],[990,819],[930,847],[877,875]],labelBBox:{x:1168,y:746,width:222,height:39}},{id:"1t4519m",parent:"TB",source:"TB.api_gateway",target:"TB.fs.file_service",label:"Работа с файлами",relations:["1sj28wa"],color:"indigo",line:"dashed",head:"normal",technology:"GRPC",kind:"grpc",tail:"normal",points:[[1861,648],[1953,676],[2068,712],[2170,745],[2227,763],[2240,774],[2298,788],[2320,793],[2328,787],[2348,796],[2390,815],[2430,843],[2464,872]],labelBBox:{x:2299,y:746,width:121,height:39}},{id:"1xgs79m",parent:"TB",source:"TB.api_gateway",target:"TB.notification.push_service",label:"Настройка push уведомлений",relations:["jqi357"],color:"indigo",line:"dashed",head:"normal",technology:"GRPC",kind:"grpc",tail:"normal",points:[[1826,691],[1869,723],[1916,760],[1957,796],[1983,819],[2010,846],[2034,871]],labelBBox:{x:1945,y:746,width:198,height:39}},{id:"12miubv",parent:"TB",source:"TB.api_gateway",target:"TB.integration",label:"REST",relations:["1ki74mh"],color:"gray",line:"dashed",head:"normal",points:[[1691,684],[1691,740],[1691,811],[1691,868]],labelBBox:{x:1692,y:756,width:41,height:18}},{id:"sddrnk",parent:"TB",source:"TB.chat.chat_service",target:"TB.kafka",label:"Publish/Consume Messages",relations:["189h7zu"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[357,1058],[393,1087],[437,1118],[481,1138],[706,1244],[992,1296],[1170,1320]],labelBBox:{x:592,y:1147,width:181,height:39}},{id:"y7da2o",parent:"TB",source:"TB.search.search_service",target:"TB.kafka",label:"Consume Message Events",relations:["2jw9x9"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[860,1058],[959,1116],[1087,1191],[1186,1248]],labelBBox:{x:1082,y:1147,width:171,height:39}},{id:"1imrg8j",parent:"TB",source:"TB.notification.push_service",target:"TB.kafka",label:"Consume Message Created Events",relations:["6w9q14"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[2059,1058],[2031,1089],[1997,1121],[1957,1138],[1920,1154],[1633,1133],[1595,1146],[1535,1167],[1477,1208],[1432,1247]],labelBBox:{x:1596,y:1147,width:225,height:39}},{id:"cushxu",parent:"TB",source:"TB.integration",target:"TB.kafka",label:"consume/produce events",relations:["1wnu3p1"],color:"gray",line:"dashed",head:"normal",points:[[1609,1058],[1575,1089],[1533,1121],[1488,1138],[1470,1145],[1331,1133],[1318,1146],[1293,1172],[1293,1209],[1300,1244]],labelBBox:{x:1319,y:1158,width:160,height:18}},{id:"1bjoq0f",parent:"TB",source:"TB.kafka",target:"TB.ws_gateway",label:"message events",relations:["n5d5ii"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[1500,1380],[1610,1407],[1761,1442],[1894,1470],[1944,1480],[1963,1463],[2006,1490],[2042,1513],[2072,1549],[2094,1584]],labelBBox:{x:2055,y:1491,width:106,height:38}},{id:"6vzg8",parent:"TB",source:"TB.ws_gateway",target:"TB.keydb",label:`Хранение WS сессий и статуса присутствия 
пользователей с TTL`,relations:["1uzu2zg"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[2143,1783],[2143,1833],[2143,1892],[2143,1942]],labelBBox:{x:2144,y:1834,width:303,height:55}},{id:"1imnvus",parent:"TB",source:"TB.notification.push_service",target:"TB.keydb",label:"read active sessions",relations:["29rp15"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[2031,1066],[1987,1117],[1938,1183],[1906,1250],[1850,1365],[1830,1405],[1846,1533],[1860,1642],[1855,1675],[1906,1773],[1940,1837],[1991,1898],[2038,1946]],labelBBox:{x:1847,y:1491,width:131,height:38}},{id:"on0fsd",parent:"TB.chat",source:"TB.chat.chat_service",target:"TB.chat.postgres",label:"messages/chats/users",relations:["1fhghcm"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[166,1066],[148,1091],[132,1118],[123,1146],[111,1180],[124,1214],[145,1243]],labelBBox:{x:124,y:1147,width:143,height:39}},{id:"1xoujz6",parent:"TB.fs",source:"TB.fs.file_service",target:"TB.fs.db_fs",label:"file metadata",relations:["1rctr09"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[2561,1069],[2561,1121],[2561,1186],[2561,1238]],labelBBox:{x:2562,y:1147,width:84,height:39}},{id:"x1bpgt",parent:"TB.notification",source:"TB.notification.push_service",target:"TB.notification.postgres",label:"notification settings",relations:["gv4o2f"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[2121,1069],[2121,1121],[2121,1186],[2121,1238]],labelBBox:{x:2122,y:1147,width:123,height:39}},{id:"vepvbw",parent:"TB.search",source:"TB.search.search_service",target:"TB.search.opensearch",label:"indexing/searching",relations:["qvyk0w"],color:"indigo",line:"dashed",head:"normal",technology:"HTTP",kind:"http",points:[[868,968],[938,968],[1019,968],[1090,968]],labelBBox:{x:924,y:923,width:121,height:39}},{id:"1t64w0e",parent:"TB.fs",source:"TB.fs.file_service",target:"TB.fs.s3",label:"Store/Read Files",relations:["llax9u"],color:"indigo",line:"dashed",head:"normal",technology:"HTTP",kind:"http",points:[[2665,1058],[2730,1114],[2814,1187],[2880,1244]],labelBBox:{x:2816,y:1147,width:108,height:39}},{id:"1l5i6uh",parent:null,source:"prod.app.api_deploy",target:"TB.api_gateway",label:"runs",relations:["w7tzvx"],color:"gray",line:"dashed",head:"normal",points:[[4303,265],[3797,329],[2356,510],[1861,572]],labelBBox:{x:3255,y:393,width:31,height:18}},{id:"1558gyx",parent:null,source:"prod.app.ws_deploy",target:"TB.ws_gateway",label:"runs",relations:["1yrybrg"],color:"gray",line:"dashed",head:"normal",points:[[5623,262],[5961,300],[6583,396],[6583,594],[6583,594],[6583,594],[6583,1169],[6583,1603],[3187,1670],[2335,1680]],labelBBox:{x:6584,y:958,width:31,height:18}},{id:"1wh96nw",parent:null,source:"prod.app.chat_deploy",target:"TB.chat.chat_service",label:"runs",relations:["seuw7l"],color:"gray",line:"dashed",head:"normal",points:[[5275,685],[5244,701],[5210,716],[5176,725],[5059,756],[3117,718],[2999,745],[2955,755],[2952,778],[2908,788],[2875,795],[513,785],[481,796],[435,812],[390,842],[354,872]],labelBBox:{x:3e3,y:756,width:31,height:18}},{id:"en5fnw",parent:null,source:"prod.app.search_deploy",target:"TB.search.search_service",label:"runs",relations:["1vgnycg"],color:"gray",line:"dashed",head:"normal",points:[[3870,685],[3838,701],[3803,716],[3768,725],[3635,759],[2668,714],[2535,745],[2491,755],[2488,778],[2444,788],[2368,805],[1121,778],[1046,796],[980,812],[913,843],[856,874]],labelBBox:{x:2536,y:756,width:31,height:18}},{id:"1pw0lp3",parent:null,source:"prod.app.file_deploy",target:"TB.fs.file_service",label:"runs",relations:["1ldb1a0"],color:"gray",line:"dashed",head:"normal",points:[[4350,685],[4320,701],[4287,716],[4254,725],[4136,757],[3269,717],[3150,745],[3105,755],[3099,771],[3057,788],[2950,832],[2827,877],[2731,910]],labelBBox:{x:3151,y:756,width:31,height:18}},{id:"1dl54fw",parent:null,source:"prod.app.notification_deploy",target:"TB.notification.push_service",label:"runs",relations:["6f4uz6"],color:"gray",line:"dashed",head:"normal",points:[[4809,685],[4777,701],[4744,716],[4710,725],[4510,778],[3053,700],[2852,745],[2807,755],[2802,778],[2757,788],[2711,798],[2378,780],[2334,796],[2290,812],[2248,842],[2213,872]],labelBBox:{x:2853,y:756,width:31,height:18}},{id:"14vwg26",parent:null,source:"prod.app.integration_deploy",target:"TB.integration",label:"runs",relations:["pjs2o7"],color:"gray",line:"dashed",head:"normal",points:[[3373,685],[3336,701],[3296,716],[3258,725],[3017,782],[2942,689],[2701,745],[2654,755],[2649,778],[2603,788],[2565,796],[1931,782],[1894,796],[1851,812],[1810,842],[1777,872]],labelBBox:{x:2702,y:756,width:31,height:18}},{id:"1jaj52k",parent:"prod.app",source:"prod.app.api_deploy",target:"prod.app.chat_deploy",label:"[GRPC]",relations:["cgiima"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[4671,271],[4814,298],[5014,345],[5176,422],[5218,443],[5261,471],[5298,499]],labelBBox:{x:5160,y:393,width:52,height:18}},{id:"11wgdy4",parent:"prod.app",source:"prod.app.api_deploy",target:"prod.app.search_deploy",label:"[GRPC]",relations:["542wlt"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[4354,338],[4287,388],[4205,449],[4138,499]],labelBBox:{x:4276,y:393,width:52,height:18}},{id:"tjq8hg",parent:"prod.app",source:"prod.app.api_deploy",target:"prod.app.file_deploy",label:"[GRPC]",relations:["1f4b5p4"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[4482,342],[4482,389],[4482,447],[4482,495]],labelBBox:{x:4483,y:393,width:52,height:18}},{id:"6rp1lr",parent:"prod.app",source:"prod.app.api_deploy",target:"prod.app.notification_deploy",label:"[GRPC]",relations:["1v986c4"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[4607,338],[4672,388],[4753,449],[4818,499]],labelBBox:{x:4700,y:393,width:52,height:18}},{id:"xg5w7g",parent:"prod.app",source:"prod.app.api_deploy",target:"prod.app.integration_deploy",label:"[GRPC]",relations:["1nea65i"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[4293,269],[4145,295],[3937,342],[3768,422],[3726,442],[3683,471],[3647,499]],labelBBox:{x:3823,y:393,width:52,height:18}},{id:"1ukhipc",parent:"prod.app",source:"prod.app.ws_deploy",target:"prod.app.chat_deploy",label:"[GRPC]",relations:["owkg61"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[5409,342],[5409,389],[5409,447],[5409,495]],labelBBox:{x:5410,y:393,width:52,height:18}},{id:"xqky4v",parent:"prod",source:"prod.app.ws_deploy",target:"prod.data.keydb_cluster",label:"[TCP]",relations:["10ysh9j"],color:"indigo",line:"dashed",head:"normal",kind:"tcp",tail:"normal",points:[[5632,335],[5679,360],[5728,389],[5769,422],[5929,552],[6068,751],[6144,869]],labelBBox:{x:6044,y:584,width:40,height:18}},{id:"d4dmyq",parent:"prod",source:"prod.app.chat_deploy",target:"prod.data.kafka_cluster",label:"[queue]",relations:["1usa0y6"],color:"indigo",line:"dashed",head:"normal",kind:"kafka",points:[[5385,684],[5369,741],[5349,815],[5333,873]],labelBBox:{x:5368,y:756,width:51,height:18}},{id:"1ctpjmz",parent:"prod",source:"prod.app.chat_deploy",target:"prod.data.postgres_chat",label:"[TCP]",relations:["19tle31"],color:"indigo",line:"dashed",head:"normal",kind:"tcp",tail:"normal",points:[[5499,692],[5549,747],[5613,815],[5664,870]],labelBBox:{x:5583,y:756,width:40,height:18}},{id:"17hpfua",parent:"prod",source:"prod.app.search_deploy",target:"prod.data.kafka_cluster",label:"[queue]",relations:["ag5kkf"],color:"indigo",line:"dashed",head:"normal",kind:"kafka",points:[[4153,685],[4185,701],[4220,716],[4254,725],[4396,763],[4772,713],[4916,745],[4963,755],[4969,776],[5016,788],[5049,797],[5061,783],[5092,796],[5137,814],[5180,845],[5216,876]],labelBBox:{x:5017,y:756,width:51,height:18}},{id:"cqxg0e",parent:"prod",source:"prod.app.search_deploy",target:"prod.data.opensearch_cluster",label:"[HTTP]",relations:["193shz4"],color:"indigo",line:"dashed",head:"normal",kind:"http",points:[[3887,685],[3839,719],[3785,759],[3736,796],[3704,821],[3669,848],[3637,873]],labelBBox:{x:3804,y:756,width:48,height:18}},{id:"ea2n57",parent:"prod",source:"prod.app.file_deploy",target:"prod.data.postgres_file",label:"[TCP]",relations:["2tjk04"],color:"indigo",line:"dashed",head:"normal",kind:"tcp",tail:"normal",points:[[4352,691],[4276,747],[4179,817],[4102,873]],labelBBox:{x:4274,y:756,width:40,height:18}},{id:"rh41oc",parent:"prod",source:"prod.app.file_deploy",target:"prod.data.s3_cluster",label:"[HTTP]",relations:["196zbg4"],color:"indigo",line:"dashed",head:"normal",kind:"http",points:[[4468,684],[4460,739],[4449,810],[4440,867]],labelBBox:{x:4460,y:756,width:48,height:18}},{id:"13ib7ap",parent:"prod",source:"prod.app.notification_deploy",target:"prod.data.kafka_cluster",label:"[queue]",relations:["15222m3"],color:"indigo",line:"dashed",head:"normal",kind:"kafka",points:[[5035,685],[5056,704],[5077,725],[5096,745],[5138,787],[5183,835],[5221,875]],labelBBox:{x:5138,y:756,width:51,height:18}},{id:"mlfw58",parent:"prod",source:"prod.app.notification_deploy",target:"prod.data.postgres_notif",label:"[TCP]",relations:["72d88l"],color:"indigo",line:"dashed",head:"normal",kind:"tcp",tail:"normal",points:[[4872,694],[4864,710],[4856,727],[4851,745],[4840,784],[4841,829],[4845,867]],labelBBox:{x:4852,y:756,width:40,height:18}},{id:"19l7e2m",parent:null,source:"prod.data.kafka_cluster",target:"TB.kafka",label:"hosts",relations:["1eeamja"],color:"gray",line:"dashed",head:"normal",points:[[5226,1054],[5188,1087],[5142,1121],[5092,1138],[5061,1149],[3928,1141],[3896,1146],[3833,1156],[3822,1179],[3760,1190],[3351,1260],[2307,1210],[1894,1250],[1764,1262],[1619,1286],[1510,1306]],labelBBox:{x:3897,y:1158,width:37,height:18}},{id:"1tl3ak8",parent:"prod",source:"prod.data.kafka_cluster",target:"prod.app.ws_deploy",label:"[queue]",relations:["1gzhabj"],color:"indigo",line:"dashed",head:"normal",kind:"kafka",points:[[5408,883],[5443,854],[5484,823],[5522,796],[5573,761],[5611,779],[5642,725],[5709,608],[5701,543],[5642,422],[5626,390],[5601,362],[5574,338]],labelBBox:{x:5690,y:584,width:51,height:18}},{id:"1et3lsu",parent:null,source:"prod.data.keydb_cluster",target:"TB.keydb",label:"hosts",relations:["ftkuvp"],color:"gray",line:"dashed",head:"normal",points:[[6108,1059],[6073,1088],[6031,1118],[5988,1138],[4666,1774],[2869,1978],[2314,2028]],labelBBox:{x:5062,y:1501,width:37,height:18}},{id:"c897mi",parent:null,source:"prod.data.postgres_chat",target:"TB.chat.postgres",label:"hosts",relations:["1ewdub4"],color:"gray",line:"dashed",head:"normal",points:[[5659,1059],[5620,1091],[5572,1122],[5522,1138],[5484,1151],[4107,1139],[4068,1146],[4016,1156],[4009,1179],[3958,1190],[3573,1266],[802,1150],[422,1250],[420,1250],[417,1251],[415,1252]],labelBBox:{x:4069,y:1158,width:37,height:18}},{id:"h7at0e",parent:null,source:"prod.data.postgres_file",target:"TB.fs.db_fs",label:"hosts",relations:["cxcn5n"],color:"gray",line:"dashed",head:"normal",points:[[3875,1059],[3835,1090],[3786,1122],[3736,1138],[3706,1148],[3487,1144],[3456,1146],[3151,1174],[3070,1168],[2776,1250],[2761,1254],[2746,1258],[2732,1264]],labelBBox:{x:3457,y:1158,width:37,height:18}},{id:"aqwvjh",parent:null,source:"prod.data.postgres_notif",target:"TB.notification.postgres",label:"hosts",relations:["ibo8eh"],color:"gray",line:"dashed",head:"normal",points:[[4774,1059],[4736,1091],[4689,1122],[4640,1138],[4615,1147],[3724,1143],[3698,1146],[3616,1156],[3599,1178],[3518,1190],[2997,1265],[2848,1133],[2334,1250],[2320,1253],[2306,1257],[2292,1261]],labelBBox:{x:3699,y:1158,width:37,height:18}},{id:"1mtokf2",parent:null,source:"prod.data.opensearch_cluster",target:"TB.search.opensearch",label:"hosts",relations:["177xj2s"],color:"gray",line:"dashed",head:"normal",points:[[3417,879],[3370,844],[3310,807],[3250,789],[3233,784],[3228,789],[3210,789],[3012,789],[1607,717],[1425,796],[1388,812],[1356,840],[1330,870]],labelBBox:{x:3211,y:756,width:37,height:18}},{id:"p4sex1",parent:null,source:"prod.data.s3_cluster",target:"TB.fs.s3",label:"hosts",relations:["1s2y8we"],color:"gray",line:"dashed",head:"normal",points:[[4335,1059],[4281,1107],[4209,1161],[4134,1190],[3960,1255],[3436,1304],[3162,1326]],labelBBox:{x:4215,y:1158,width:37,height:18}}]},index:{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"src/views.c4",description:null,title:"TeamBridge - Landscape",id:"index",autoLayout:{direction:"TB"},hash:"qxGU6I_5_i7r1ixwwuJL4lGdhCOg1maGC3JhzvLBNTs",bounds:{x:0,y:0,width:1533,height:1492},nodes:[{id:"employee",parent:null,level:0,children:[],inEdges:[],outEdges:["zuu8pu"],title:"Сотрудник",modelRef:"employee",shape:"person",color:"indigo",style:{opacity:15,size:"md"},tags:[],kind:"actor",x:783,y:0,width:320,height:180,labelBBox:{x:108,y:76,width:104,height:24}},{id:"admin",parent:null,level:0,children:[],inEdges:[],outEdges:["1dazoun"],title:"Администратор",modelRef:"admin",shape:"person",color:"indigo",style:{opacity:15,size:"md"},tags:[],kind:"actor",x:1213,y:0,width:320,height:180,labelBBox:{x:86,y:76,width:148,height:24}},{id:"clients",parent:null,level:0,children:[],inEdges:["zuu8pu","1dazoun"],outEdges:["1uii4rt","1gkfx5i"],title:"Clients",modelRef:"clients",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",x:998,y:323,width:320,height:180,labelBBox:{x:127,y:76,width:65,height:24}},{id:"prod",parent:null,level:0,children:[],inEdges:["1uii4rt"],outEdges:["14clqt","14cn2t","526cup","d2lfwd"],title:"Production (DC1)",modelRef:"prod",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",navigateTo:"deployment_prod",x:736,y:646,width:320,height:180,labelBBox:{x:81,y:76,width:159,height:24}},{id:"dr",parent:null,level:0,children:[],inEdges:["14clqt"],outEdges:[],title:"Disaster Recovery (DC2)",modelRef:"dr",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",navigateTo:"deployment_dr",x:0,y:968,width:320,height:180,labelBBox:{x:47,y:76,width:226,height:24}},{id:"TB",parent:null,level:0,children:[],inEdges:["14cn2t","1gkfx5i"],outEdges:["1qmkelq","rpv8pu"],title:"TeamBridge",modelRef:"TB",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:`Корпоративная чат-платформа:
realtime сообщения, файлы, поиск, уведомления и интеграции`},tags:[],kind:"system",x:710,y:968,width:372,height:180,labelBBox:{x:18,y:47,width:337,height:83}},{id:"infra",parent:null,level:0,children:[],inEdges:["526cup","1qmkelq"],outEdges:[],title:"Infrastructure",modelRef:"infra",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Infrastructure services"},tags:[],kind:"system",x:1034,y:1312,width:320,height:180,labelBBox:{x:84,y:65,width:152,height:47}},{id:"push",parent:null,level:0,children:[],inEdges:["d2lfwd","rpv8pu"],outEdges:[],title:"Push Providers (APNs/FCM/WebPush)",modelRef:"push",shape:"rectangle",color:"color_ext",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:439,y:1312,width:378,height:180,labelBBox:{x:14,y:76,width:351,height:24}}],edges:[{id:"14clqt",parent:null,source:"prod",target:"dr",label:"[...]",relations:["eda4ev","qhrfc2","178dkkq"],color:"indigo",line:"dashed",head:"normal",tail:"normal",points:[[726,780],[636,805],[525,841],[430,886],[384,907],[336,936],[294,963]],labelBBox:{x:431,y:884,width:25,height:18}},{id:"14cn2t",parent:null,source:"prod",target:"TB",label:"[...]",relations:["w7tzvx","1yrybrg","seuw7l","1vgnycg","1ldb1a0","6f4uz6","pjs2o7","1eeamja","ftkuvp","1ewdub4","cxcn5n","ibo8eh","177xj2s","1s2y8we"],color:"gray",line:"dashed",head:"normal",points:[[896,826],[896,867],[896,916],[896,958]],labelBBox:{x:897,y:884,width:25,height:18}},{id:"526cup",parent:null,source:"prod",target:"infra",label:"OIDC",relations:["1vj83qf"],color:"gray",line:"dashed",head:"normal",points:[[1019,826],[1063,864],[1109,913],[1137,968],[1190,1073],[1200,1210],[1199,1302]],labelBBox:{x:1190,y:1048,width:39,height:18}},{id:"d2lfwd",parent:null,source:"prod",target:"push",label:"[HTTPS]",relations:["56hgi6"],color:"green",line:"dashed",head:"normal",kind:"https",points:[[736,819],[681,857],[626,907],[595,968],[544,1074],[567,1211],[593,1302]],labelBBox:{x:596,y:1048,width:58,height:18}},{id:"1uii4rt",parent:null,source:"clients",target:"prod",label:"[...]",relations:["1ca23k6","q8p6n9","18jphkg","1phgyox","19mqgw0","95i303"],color:"gray",line:"dashed",head:"normal",points:[[1085,503],[1051,545],[1010,595],[975,638]],labelBBox:{x:1036,y:561,width:25,height:18}},{id:"zuu8pu",parent:null,source:"employee",target:"clients",label:"использует",relations:["ici2vu"],color:"gray",line:"dashed",head:"normal",points:[[1003,180],[1031,222],[1064,271],[1093,314]],labelBBox:{x:1058,y:241,width:82,height:18}},{id:"1dazoun",parent:null,source:"admin",target:"clients",label:"администрирует",relations:["iz0y4o"],color:"gray",line:"dashed",head:"normal",points:[[1313,180],[1285,222],[1252,271],[1223,314]],labelBBox:{x:1273,y:241,width:113,height:18}},{id:"1qmkelq",parent:null,source:"TB",target:"infra",label:"[...]",relations:["1by69bn","csodkp","1r6z1ky"],color:"gray",line:"dashed",head:"normal",points:[[974,1148],[1015,1196],[1067,1255],[1110,1304]],labelBBox:{x:1064,y:1217,width:25,height:18}},{id:"rpv8pu",parent:null,source:"TB",target:"push",label:"Push Message Events",relations:["h13rjj"],color:"green",line:"dashed",head:"normal",technology:"HTTPS",kind:"https",points:[[826,1148],[789,1196],[743,1255],[704,1304]],labelBBox:{x:779,y:1209,width:143,height:39}},{id:"1gkfx5i",parent:null,source:"clients",target:"TB",label:"[...]",relations:["1eq2hch","12eeguk"],color:"gray",line:"dashed",head:"normal",points:[[1163,502],[1165,589],[1159,722],[1111,826],[1088,876],[1049,923],[1011,962]],labelBBox:{x:1158,y:723,width:25,height:18}}]},context:{_type:"element",tags:null,links:null,_stage:"layouted",sourcePath:"src/views.c4",description:null,title:"TeamBridge - Context",id:"context",autoLayout:{direction:"TB"},notation:{nodes:[{title:"Шина данных",shape:"queue",color:"color_storage",kinds:["queue"]},{title:"C4 element Container",shape:"rectangle",color:"color_container",kinds:["container"]},{title:"База данных",shape:"storage",color:"color_storage",kinds:["database"]}]},hash:"s9qIGcMABoxWTqa-Facj0vTYu9bvMOeEhuBtswYFTCs",bounds:{x:0,y:0,width:6897,height:3006},nodes:[{id:"admin",parent:null,level:0,children:[],inEdges:[],outEdges:["1tafyb5"],title:"Администратор",modelRef:"admin",shape:"person",color:"indigo",style:{opacity:15,size:"md"},tags:[],kind:"actor",x:4061,y:69,width:320,height:180,labelBBox:{x:86,y:76,width:148,height:24}},{id:"employee",parent:null,level:0,children:[],inEdges:[],outEdges:["zuu8pu"],title:"Сотрудник",modelRef:"employee",shape:"person",color:"indigo",style:{opacity:15,size:"md"},tags:[],kind:"actor",x:3631,y:69,width:320,height:180,labelBBox:{x:108,y:76,width:104,height:24}},{id:"clients",parent:null,level:0,children:["clients.web","clients.desktop","clients.mobile"],inEdges:["zuu8pu","1tafyb5"],outEdges:["173cjtj","bsvcyd","wl2dgn","18uu95z","58axdn"],title:"Clients",modelRef:"clients",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:3591,y:340,width:1260,height:281,labelBBox:{x:6,y:0,width:51,height:15}},{id:"clients.web",parent:"clients",level:1,children:[],inEdges:["1tafyb5"],outEdges:["173cjtj"],title:"Web Client",modelRef:"clients.web",shape:"browser",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"webapp",x:3631,y:401,width:320,height:180,labelBBox:{x:109,y:76,width:102,height:24}},{id:"clients.desktop",parent:"clients",level:1,children:[],inEdges:[],outEdges:["bsvcyd"],title:"Desktop Client",modelRef:"clients.desktop",shape:"browser",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"desktop",x:4061,y:401,width:320,height:180,labelBBox:{x:93,y:76,width:134,height:24}},{id:"clients.mobile",parent:"clients",level:1,children:[],inEdges:[],outEdges:["wl2dgn"],title:"Mobile Client",modelRef:"clients.mobile",shape:"mobile",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"mobile",x:4491,y:401,width:320,height:180,labelBBox:{x:100,y:76,width:120,height:24}},{id:"prod",parent:null,level:0,children:[],inEdges:["173cjtj","bsvcyd","wl2dgn"],outEdges:["14clqt","d2lfwd","1kbpx44","1xt9zok","ng7yyo","x5lay4","160prbs","1j0l5g7","1ws93ow","1rzi5ef","e81gg1","1nl6c1w","qgxg03","n8sxii","n8q90d","1m3bpeq"],title:"Production (DC1)",modelRef:"prod",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",navigateTo:"deployment_prod",x:4491,y:724,width:320,height:180,labelBBox:{x:81,y:76,width:159,height:24}},{id:"dr",parent:null,level:0,children:[],inEdges:["14clqt"],outEdges:[],title:"Disaster Recovery (DC2)",modelRef:"dr",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",navigateTo:"deployment_dr",x:5483,y:1056,width:320,height:180,labelBBox:{x:47,y:76,width:226,height:24}},{id:"TB",parent:null,level:0,children:["TB.api_gateway","TB.fs","TB.chat","TB.search","TB.notification","TB.kafka","TB.ws_gateway","TB.keydb"],inEdges:["1kbpx44","18uu95z","1xt9zok","ng7yyo","x5lay4","160prbs","58axdn","1j0l5g7","1ws93ow","1rzi5ef","e81gg1","1nl6c1w","qgxg03","n8sxii","n8q90d"],outEdges:["l76wwj","ni22i4","1ntg168","1rmr7i7"],title:"TeamBridge",modelRef:"TB",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:`Корпоративная чат-платформа:
realtime сообщения, файлы, поиск, уведомления и интеграции`},tags:[],kind:"system",depth:2,x:1745,y:995,width:2803,height:1680,labelBBox:{x:6,y:0,width:78,height:15}},{id:"TB.api_gateway",parent:"TB",level:1,children:[],inEdges:["1kbpx44","18uu95z"],outEdges:["1t4519m","172il21","j2ytqx","1xgs79m","ni22i4"],title:"API Gateway",modelRef:"TB.api_gateway",shape:"rectangle",color:"color_container",style:{opacity:15,size:"md"},description:{txt:"REST, auth, rate limit"},tags:[],notation:"C4 element Container",kind:"container",x:3287,y:1056,width:320,height:180,labelBBox:{x:87,y:65,width:147,height:47}},{id:"TB.fs",parent:"TB",level:1,children:["TB.fs.file_service","TB.fs.s3","TB.fs.db_fs"],inEdges:["1xt9zok","ng7yyo","x5lay4","1t4519m"],outEdges:[],title:"File Management",modelRef:"TB.fs",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:3678,y:1347,width:830,height:625,labelBBox:{x:6,y:0,width:111,height:15}},{id:"TB.chat",parent:"TB",level:1,children:["TB.chat.chat_service","TB.chat.postgres"],inEdges:["1j0l5g7","1ws93ow","172il21"],outEdges:["sddrnk","1rmr7i7"],title:"Chat System",modelRef:"TB.chat",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:1785,y:1347,width:420,height:625,labelBBox:{x:6,y:0,width:83,height:15}},{id:"TB.search",parent:"TB",level:1,children:["TB.search.search_service","TB.search.opensearch"],inEdges:["1rzi5ef","j2ytqx","e81gg1"],outEdges:["y7da2o"],title:"Searching System",modelRef:"TB.search",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:2245,y:1347,width:953,height:281,labelBBox:{x:6,y:0,width:118,height:15}},{id:"TB.notification",parent:"TB",level:1,children:["TB.notification.push_service","TB.notification.postgres"],inEdges:["1nl6c1w","1xgs79m","qgxg03"],outEdges:["l76wwj","1imnvus","1imrg8j"],title:"Notification System",modelRef:"TB.notification",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},tags:[],kind:"system",depth:1,x:3238,y:1347,width:400,height:625,labelBBox:{x:6,y:0,width:131,height:15}},{id:"TB.fs.file_service",parent:"TB.fs",level:2,children:[],inEdges:["1xt9zok","1t4519m"],outEdges:["1t64w0e","1xoujz6"],title:"File Service",modelRef:"TB.fs.file_service",shape:"rectangle",color:"color_container",style:{opacity:15,size:"md"},description:{txt:"Загрузка/чтение файлов"},tags:[],notation:"C4 element Container",kind:"container",x:3718,y:1408,width:320,height:180,labelBBox:{x:70,y:65,width:179,height:47}},{id:"TB.chat.chat_service",parent:"TB.chat",level:2,children:[],inEdges:["1j0l5g7","172il21"],outEdges:["on0fsd","sddrnk","1rmr7i7"],title:"Chat Service",modelRef:"TB.chat.chat_service",shape:"rectangle",color:"color_container",style:{opacity:15,size:"md"},description:{txt:"Обработка сообщений, чатов, участников, администрирование чатов"},tags:[],notation:"C4 element Container",kind:"container",x:1825,y:1408,width:340,height:180,labelBBox:{x:18,y:56,width:304,height:65}},{id:"TB.search.search_service",parent:"TB.search",level:2,children:[],inEdges:["1rzi5ef","j2ytqx"],outEdges:["vepvbw","y7da2o"],title:"Search Service",modelRef:"TB.search.search_service",shape:"rectangle",color:"color_container",style:{opacity:15,size:"md"},description:{txt:"Индексация и поиск"},tags:[],notation:"C4 element Container",kind:"container",x:2838,y:1408,width:320,height:180,labelBBox:{x:87,y:65,width:146,height:47}},{id:"TB.notification.push_service",parent:"TB.notification",level:2,children:[],inEdges:["1nl6c1w","1xgs79m"],outEdges:["l76wwj","x1bpgt","1imnvus","1imrg8j"],title:"Notification Service",modelRef:"TB.notification.push_service",shape:"rectangle",color:"color_container",style:{opacity:15,size:"md"},description:{txt:"Push Policy и доставка уведомлений"},tags:[],notation:"C4 element Container",kind:"container",x:3278,y:1408,width:320,height:180,labelBBox:{x:29,y:65,width:262,height:47}},{id:"TB.fs.s3",parent:"TB.fs",level:2,children:[],inEdges:["ng7yyo","1t64w0e"],outEdges:[],title:"S3",modelRef:"TB.fs.s3",shape:"storage",color:"color_storage",style:{opacity:15,size:"md"},description:{txt:"Хранение файлов"},tags:[],notation:"База данных",technology:"[Minio]",kind:"database",x:4148,y:1752,width:320,height:180,labelBBox:{x:98,y:55,width:125,height:66}},{id:"TB.fs.db_fs",parent:"TB.fs",level:2,children:[],inEdges:["x5lay4","1xoujz6"],outEdges:[],title:"File Metadata DB",modelRef:"TB.fs.db_fs",shape:"storage",color:"color_storage",style:{opacity:15,size:"md"},description:{txt:"Метаданные файлов"},tags:[],notation:"База данных",technology:"[PostgreSql]",kind:"database",x:3718,y:1752,width:320,height:180,labelBBox:{x:81,y:55,width:159,height:66}},{id:"TB.chat.postgres",parent:"TB.chat",level:2,children:[],inEdges:["1ws93ow","on0fsd"],outEdges:[],title:"Chat DB",modelRef:"TB.chat.postgres",shape:"storage",color:"color_storage",style:{opacity:15,size:"md"},description:{txt:"Чаты, сообщения, участники"},tags:[],notation:"База данных",technology:"[PostgreSql]",kind:"database",x:1835,y:1752,width:320,height:180,labelBBox:{x:58,y:55,width:204,height:66}},{id:"TB.search.opensearch",parent:"TB.search",level:2,children:[],inEdges:["e81gg1","vepvbw"],outEdges:[],title:"OpenSearch",modelRef:"TB.search.opensearch",shape:"storage",color:"color_storage",style:{opacity:15,size:"md"},description:{txt:"Поиск"},tags:[],notation:"База данных",technology:"[OpenSearch]",kind:"database",x:2285,y:1408,width:320,height:180,labelBBox:{x:102,y:56,width:116,height:66}},{id:"push",parent:null,level:0,children:[],inEdges:["d2lfwd","l76wwj"],outEdges:[],title:"Push Providers (APNs/FCM/WebPush)",modelRef:"push",shape:"rectangle",color:"color_ext",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:1327,y:1752,width:378,height:180,labelBBox:{x:14,y:76,width:351,height:24}},{id:"TB.notification.postgres",parent:"TB.notification",level:2,children:[],inEdges:["qgxg03","x1bpgt"],outEdges:[],title:"Notification Settings DB",modelRef:"TB.notification.postgres",shape:"storage",color:"color_storage",style:{opacity:15,size:"md"},description:{txt:"Настройки push уведомлений"},tags:[],notation:"База данных",technology:"[PostgreSql]",kind:"database",x:3278,y:1752,width:320,height:180,labelBBox:{x:53,y:55,width:214,height:66}},{id:"TB.kafka",parent:"TB",level:1,children:[],inEdges:["n8q90d","sddrnk","y7da2o","1imrg8j"],outEdges:["1bjoq0f"],title:"Message Bus",modelRef:"TB.kafka",shape:"queue",color:"color_storage",style:{opacity:20,size:"md"},tags:[],notation:"Шина данных",technology:"[Kafka]",kind:"queue",x:2736,y:1756,width:320,height:172,labelBBox:{x:97,y:62,width:125,height:45}},{id:"TB.ws_gateway",parent:"TB",level:1,children:[],inEdges:["160prbs","58axdn","1bjoq0f"],outEdges:["6vzg8","1ntg168"],title:"WebSocket Gateway",modelRef:"TB.ws_gateway",shape:"rectangle",color:"color_container",style:{opacity:15,size:"md"},description:{txt:"WSS соединения, realtime доставка, presence routing"},tags:[],notation:"C4 element Container",kind:"container",x:3278,y:2095,width:364,height:180,labelBBox:{x:18,y:56,width:328,height:65}},{id:"TB.keydb",parent:"TB",level:1,children:[],inEdges:["n8sxii","6vzg8","1imnvus"],outEdges:[],title:"KeyDB / Redis",modelRef:"TB.keydb",shape:"storage",color:"color_storage",style:{opacity:15,size:"md"},description:{txt:"presence/sessions"},tags:[],notation:"База данных",technology:"[KeyDB/Redis]",kind:"database",x:3300,y:2455,width:320,height:180,labelBBox:{x:93,y:55,width:134,height:67}},{id:"infra",parent:null,level:0,children:["infra.keycloak","infra.ldap","infra.config_service","infra.victoria_metrics","infra.vault"],inEdges:["1m3bpeq","ni22i4","1ntg168","1rmr7i7"],outEdges:[],title:"Infrastructure",modelRef:"infra",shape:"rectangle",color:"primary",style:{opacity:15,size:"md"},description:{txt:"Infrastructure services"},tags:[],kind:"system",depth:1,x:8,y:8,width:830,height:2990,labelBBox:{x:6,y:0,width:105,height:15}},{id:"infra.keycloak",parent:"infra",level:1,children:[],inEdges:["1m3bpeq","ni22i4","1ntg168","1rmr7i7"],outEdges:["15vxb5a"],title:"Keycloak (OIDC/SSO)",modelRef:"infra.keycloak",shape:"rectangle",color:"color_ext",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:478,y:2455,width:320,height:180,labelBBox:{x:59,y:76,width:202,height:24}},{id:"infra.ldap",parent:"infra",level:1,children:[],inEdges:["15vxb5a"],outEdges:[],title:"LDAP / Active Directory",modelRef:"infra.ldap",shape:"rectangle",color:"color_ext",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:478,y:2778,width:320,height:180,labelBBox:{x:54,y:76,width:213,height:24}},{id:"infra.config_service",parent:"infra",level:1,children:[],inEdges:[],outEdges:[],title:"Configuration Service",modelRef:"infra.config_service",shape:"rectangle",color:"color_ext",style:{opacity:15,size:"md"},tags:[],notation:"",technology:"[Consul]",kind:"system_ext",x:48,y:69,width:320,height:180,labelBBox:{x:62,y:66,width:195,height:45}},{id:"infra.victoria_metrics",parent:"infra",level:1,children:[],inEdges:[],outEdges:[],title:"VictoriaMetrics",modelRef:"infra.victoria_metrics",shape:"rectangle",color:"color_ext",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:478,y:69,width:320,height:180,labelBBox:{x:92,y:76,width:135,height:24}},{id:"infra.vault",parent:"infra",level:1,children:[],inEdges:[],outEdges:[],title:"Vault",modelRef:"infra.vault",shape:"rectangle",color:"color_ext",style:{opacity:15,size:"md"},tags:[],notation:"",kind:"system_ext",x:48,y:401,width:320,height:180,labelBBox:{x:135,y:76,width:50,height:24}}],edges:[{id:"14clqt",parent:null,source:"prod",target:"dr",label:"[...]",relations:["eda4ev","qhrfc2","178dkkq"],color:"indigo",line:"dashed",head:"normal",tail:"normal",points:[[4821,827],[5043,846],[5416,888],[5529,964],[5560,984],[5583,1016],[5601,1047]],labelBBox:{x:5557,y:963,width:25,height:18}},{id:"d2lfwd",parent:null,source:"prod",target:"push",label:"[HTTPS]",relations:["56hgi6"],color:"green",line:"dashed",head:"normal",kind:"https",points:[[4679,904],[4728,1083],[4807,1486],[4591,1692],[4475,1802],[1874,1717],[1718,1752],[1717,1752],[1716,1752],[1715,1752]],labelBBox:{x:4735,y:1307,width:58,height:18}},{id:"1tafyb5",parent:null,source:"admin",target:"clients.web",label:"администрирует",relations:["iz0y4o"],color:"gray",line:"dashed",head:"normal",points:[[4105,249],[4046,294],[3975,349],[3915,395]],labelBBox:{x:4020,y:310,width:113,height:18}},{id:"173cjtj",parent:null,source:"clients.web",target:"prod",label:"[...]",relations:["1ca23k6","1phgyox"],color:"gray",line:"dashed",head:"normal",points:[[3924,581],[3950,596],[3978,610],[4006,621],[4206,700],[4280,650],[4481,722]],labelBBox:{x:4153,y:640,width:25,height:18}},{id:"bsvcyd",parent:null,source:"clients.desktop",target:"prod",label:"[...]",relations:["q8p6n9","19mqgw0"],color:"gray",line:"dashed",head:"normal",points:[[4340,581],[4397,624],[4466,675],[4524,718]],labelBBox:{x:4450,y:640,width:25,height:18}},{id:"wl2dgn",parent:null,source:"clients.mobile",target:"prod",label:"[...]",relations:["18jphkg","95i303"],color:"gray",line:"dashed",head:"normal",points:[[4651,581],[4651,622],[4651,671],[4651,714]],labelBBox:{x:4652,y:640,width:25,height:18}},{id:"1kbpx44",parent:null,source:"prod",target:"TB.api_gateway",label:"runs",relations:["w7tzvx"],color:"gray",line:"dashed",head:"normal",points:[[4491,903],[4490,903],[4488,904],[4487,904],[4315,962],[4260,926],[4083,964],[3923,998],[3744,1051],[3617,1090]],labelBBox:{x:4084,y:965,width:31,height:18}},{id:"1xt9zok",parent:null,source:"prod",target:"TB.fs.file_service",label:"runs",relations:["1ldb1a0"],color:"gray",line:"dashed",head:"normal",points:[[4631,904],[4599,1020],[4528,1224],[4392,1339],[4296,1421],[4157,1461],[4048,1480]],labelBBox:{x:4602,y:1136,width:31,height:18}},{id:"ng7yyo",parent:null,source:"prod",target:"TB.fs.s3",label:"hosts",relations:["1s2y8we"],color:"gray",line:"dashed",head:"normal",points:[[4811,819],[5175,831],[6044,867],[6131,964],[6220,1063],[6141,1630],[6077,1692],[5964,1801],[4901,1831],[4479,1838]],labelBBox:{x:6167,y:1307,width:37,height:18}},{id:"x5lay4",parent:null,source:"prod",target:"TB.fs.db_fs",label:"hosts",relations:["cxcn5n"],color:"gray",line:"dashed",head:"normal",points:[[4811,832],[4971,853],[5202,895],[5257,964],[5459,1217],[5485,1451],[5269,1692],[5189,1781],[4403,1821],[4049,1835]],labelBBox:{x:5421,y:1307,width:37,height:18}},{id:"1t4519m",parent:"TB",source:"TB.api_gateway",target:"TB.fs.file_service",label:"Работа с файлами",relations:["1sj28wa"],color:"indigo",line:"dashed",head:"normal",technology:"GRPC",kind:"grpc",tail:"normal",points:[[3580,1242],[3623,1274],[3672,1311],[3714,1347],[3734,1364],[3756,1383],[3776,1402]],labelBBox:{x:3701,y:1297,width:121,height:39}},{id:"1t64w0e",parent:"TB.fs",source:"TB.fs.file_service",target:"TB.fs.s3",label:"Store/Read Files",relations:["llax9u"],color:"indigo",line:"dashed",head:"normal",technology:"HTTP",kind:"http",points:[[4e3,1588],[4027,1608],[4054,1629],[4079,1648],[4118,1679],[4160,1714],[4197,1746]],labelBBox:{x:4131,y:1649,width:108,height:39}},{id:"1xoujz6",parent:"TB.fs",source:"TB.fs.file_service",target:"TB.fs.db_fs",label:"file metadata",relations:["1rctr09"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[3878,1599],[3878,1643],[3878,1696],[3878,1741]],labelBBox:{x:3879,y:1649,width:84,height:39}},{id:"160prbs",parent:null,source:"prod",target:"TB.ws_gateway",label:"runs",relations:["1yrybrg"],color:"gray",line:"dashed",head:"normal",points:[[4811,819],[5211,831],[6234,870],[6353,964],[6419,1017],[6413,1060],[6413,1145],[6413,1145],[6413,1145],[6413,1843],[6413,1932],[6424,1980],[6353,2035],[6246,2118],[4281,2166],[3652,2180]],labelBBox:{x:6414,y:1488,width:31,height:18}},{id:"1j0l5g7",parent:null,source:"prod",target:"TB.chat.chat_service",label:"runs",relations:["seuw7l"],color:"gray",line:"dashed",head:"normal",points:[[4539,904],[4363,1042],[4028,1295],[3886,1339],[3842,1353],[2262,1334],[2218,1347],[2179,1359],[2141,1380],[2108,1403]],labelBBox:{x:4419,y:1136,width:31,height:18}},{id:"1ws93ow",parent:null,source:"prod",target:"TB.chat.postgres",label:"hosts",relations:["1ewdub4"],color:"gray",line:"dashed",head:"normal",points:[[4811,822],[5133,839],[5837,883],[5909,964],[6117,1199],[5934,1458],[5670,1628],[5460,1764],[5369,1639],[3211,1752],[2838,1771],[2401,1806],[2166,1826]],labelBBox:{x:5977,y:1307,width:37,height:18}},{id:"172il21",parent:"TB",source:"TB.api_gateway",target:"TB.chat.chat_service",label:"[GRPC]",relations:["1m57cjk"],color:"indigo",line:"dashed",head:"normal",kind:"grpc",tail:"normal",points:[[3277,1238],[3086,1310],[3029,1315],[2825,1339],[2792,1343],[2250,1337],[2218,1347],[2180,1359],[2142,1380],[2108,1403]],labelBBox:{x:3098,y:1307,width:52,height:18}},{id:"on0fsd",parent:"TB.chat",source:"TB.chat.chat_service",target:"TB.chat.postgres",label:"messages/chats/users",relations:["1fhghcm"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[1995,1599],[1995,1643],[1995,1696],[1995,1741]],labelBBox:{x:1996,y:1649,width:143,height:39}},{id:"1rzi5ef",parent:null,source:"prod",target:"TB.search.search_service",label:"runs",relations:["1vgnycg"],color:"gray",line:"dashed",head:"normal",points:[[4491,903],[4490,903],[4488,904],[4487,904],[4221,985],[4136,908],[3863,964],[3390,1061],[3113,906],[2828,1296],[2817,1312],[2820,1322],[2828,1339],[2830,1344],[2859,1371],[2892,1402]],labelBBox:{x:3643,y:1136,width:31,height:18}},{id:"j2ytqx",parent:"TB",source:"TB.api_gateway",target:"TB.search.search_service",label:"Поиск пользователей/сообщений",relations:["19lhnr5"],color:"indigo",line:"dashed",head:"normal",technology:"GRPC",kind:"grpc",tail:"normal",points:[[3325,1242],[3261,1292],[3184,1353],[3120,1402]],labelBBox:{x:3250,y:1297,width:222,height:39}},{id:"e81gg1",parent:null,source:"prod",target:"TB.search.opensearch",label:"hosts",relations:["177xj2s"],color:"gray",line:"dashed",head:"normal",points:[[4491,903],[4490,903],[4488,904],[4487,904],[4336,945],[1787,883],[1679,995],[1604,1072],[1610,1154],[1679,1236],[1853,1445],[2037,1226],[2281,1347],[2308,1361],[2334,1380],[2357,1400]],labelBBox:{x:1680,y:1136,width:37,height:18}},{id:"vepvbw",parent:"TB.search",source:"TB.search.search_service",target:"TB.search.opensearch",label:"indexing/searching",relations:["qvyk0w"],color:"indigo",line:"dashed",head:"normal",technology:"HTTP",kind:"http",points:[[2838,1498],[2769,1498],[2687,1498],[2616,1498]],labelBBox:{x:2661,y:1453,width:121,height:39}},{id:"1nl6c1w",parent:null,source:"prod",target:"TB.notification.push_service",label:"runs",relations:["6f4uz6"],color:"gray",line:"dashed",head:"normal",points:[[4590,904],[4504,1022],[4335,1230],[4139,1339],[3973,1432],[3756,1470],[3608,1486]],labelBBox:{x:4521,y:1136,width:31,height:18}},{id:"1xgs79m",parent:"TB",source:"TB.api_gateway",target:"TB.notification.push_service",label:"Настройка push уведомлений",relations:["jqi357"],color:"indigo",line:"dashed",head:"normal",technology:"GRPC",kind:"grpc",tail:"normal",points:[[3444,1246],[3443,1294],[3442,1351],[3441,1398]],labelBBox:{x:3444,y:1297,width:198,height:39}},{id:"l76wwj",parent:null,source:"TB.notification.push_service",target:"push",label:"Push Message Events",relations:["h13rjj"],color:"green",line:"dashed",head:"normal",technology:"HTTPS",kind:"https",points:[[3346,1588],[3324,1605],[3300,1619],[3274,1628],[3229,1644],[1610,1620],[1573,1648],[1544,1670],[1529,1707],[1522,1742]],labelBBox:{x:1574,y:1649,width:143,height:39}},{id:"qgxg03",parent:null,source:"prod",target:"TB.notification.postgres",label:"hosts",relations:["ibo8eh"],color:"gray",line:"dashed",head:"normal",points:[[4811,834],[4892,853],[4985,890],[5035,964],[5218,1231],[5259,1458],[5035,1692],[4929,1803],[3801,1718],[3651,1752],[3637,1755],[3623,1759],[3609,1763]],labelBBox:{x:5188,y:1307,width:37,height:18}},{id:"x1bpgt",parent:"TB.notification",source:"TB.notification.push_service",target:"TB.notification.postgres",label:"notification settings",relations:["gv4o2f"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[3438,1599],[3438,1643],[3438,1696],[3438,1741]],labelBBox:{x:3439,y:1649,width:123,height:39}},{id:"n8sxii",parent:null,source:"prod",target:"TB.keydb",label:"hosts",relations:["ftkuvp"],color:"gray",line:"dashed",head:"normal",points:[[4811,816],[5282,820],[6641,843],[6797,964],[6864,1016],[6857,1060],[6857,1145],[6857,1145],[6857,1145],[6857,2186],[6857,2282],[6873,2335],[6797,2395],[6672,2494],[4295,2533],[3631,2542]],labelBBox:{x:6858,y:1660,width:37,height:18}},{id:"6vzg8",parent:"TB",source:"TB.ws_gateway",target:"TB.keydb",label:`Хранение WS сессий и статуса присутствия 
пользователей с TTL`,relations:["1uzu2zg"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[3460,2285],[3460,2335],[3460,2394],[3460,2444]],labelBBox:{x:3461,y:2336,width:303,height:55}},{id:"1imnvus",parent:"TB",source:"TB.notification.push_service",target:"TB.keydb",label:"read active sessions",relations:["29rp15"],color:"indigo",line:"dashed",head:"normal",technology:"TCP",kind:"tcp",tail:"normal",points:[[3440,1598],[3444,1797],[3454,2244],[3458,2444]],labelBBox:{x:3450,y:1993,width:131,height:38}},{id:"n8q90d",parent:null,source:"prod",target:"TB.kafka",label:"hosts",relations:["1eeamja"],color:"gray",line:"dashed",head:"normal",points:[[4772,904],[4789,922],[4803,942],[4813,964],[4943,1260],[5037,1459],[4813,1692],[4751,1756],[3299,1738],[3211,1752],[3163,1759],[3112,1772],[3066,1785]],labelBBox:{x:4945,y:1307,width:37,height:18}},{id:"sddrnk",parent:"TB",source:"TB.chat.chat_service",target:"TB.kafka",label:"Publish/Consume Messages",relations:["189h7zu"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[2135,1588],[2162,1603],[2190,1617],[2218,1628],[2436,1716],[2513,1667],[2732,1752],[2732,1752],[2733,1752],[2733,1752]],labelBBox:{x:2476,y:1649,width:181,height:39}},{id:"y7da2o",parent:"TB",source:"TB.search.search_service",target:"TB.kafka",label:"Consume Message Events",relations:["2jw9x9"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[2971,1588],[2957,1637],[2939,1696],[2924,1746]],labelBBox:{x:2954,y:1649,width:171,height:39}},{id:"1imrg8j",parent:"TB",source:"TB.notification.push_service",target:"TB.kafka",label:"Consume Message Created Events",relations:["6w9q14"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[3339,1588],[3319,1603],[3297,1618],[3274,1628],[3237,1646],[3222,1632],[3184,1648],[3123,1674],[3061,1714],[3011,1750]],labelBBox:{x:3185,y:1649,width:225,height:39}},{id:"1bjoq0f",parent:"TB",source:"TB.kafka",target:"TB.ws_gateway",label:"message events",relations:["n5d5ii"],color:"indigo",line:"dashed",head:"normal",technology:"queue",kind:"kafka",points:[[3056,1916],[3105,1936],[3159,1957],[3211,1972],[3260,1986],[3281,1964],[3324,1992],[3360,2015],[3390,2051],[3412,2086]],labelBBox:{x:3373,y:1993,width:106,height:38}},{id:"1m3bpeq",parent:null,source:"prod",target:"infra.keycloak",label:"OIDC",relations:["1vj83qf"],color:"gray",line:"dashed",head:"normal",points:[[4491,903],[4490,903],[4488,904],[4487,904],[4312,954],[3030,984],[2848,995],[2602,1010],[638,899],[638,1145],[638,1145],[638,1145],[638,2186],[638,2273],[638,2373],[638,2445]],labelBBox:{x:639,y:1660,width:39,height:18}},{id:"ni22i4",parent:null,source:"TB.api_gateway",target:"infra.keycloak",label:"OIDC / JWT",relations:["csodkp"],color:"gray",line:"dashed",head:"normal",points:[[3287,1235],[3286,1235],[3284,1236],[3283,1236],[3056,1306],[2449,1291],[2218,1347],[1741,1464],[1556,1424],[1191,1752],[951,1967],[1068,2153],[854,2395],[837,2414],[817,2432],[796,2449]],labelBBox:{x:1192,y:1831,width:79,height:18}},{id:"1ntg168",parent:null,source:"TB.ws_gateway",target:"infra.keycloak",label:"JWT verify (JWKS)",relations:["1by69bn"],color:"gray",line:"dashed",head:"normal",points:[[3278,2274],[3277,2274],[3275,2274],[3274,2275],[3037,2341],[1353,2485],[808,2530]],labelBBox:{x:2835,y:2354,width:122,height:18}},{id:"1rmr7i7",parent:null,source:"TB.chat.chat_service",target:"infra.keycloak",label:"profile sync",relations:["1r6z1ky"],color:"gray",line:"dashed",head:"normal",points:[[1916,1588],[1735,1791],[1290,2279],[1101,2395],[1011,2450],[899,2486],[808,2510]],labelBBox:{x:1539,y:2003,width:75,height:18}},{id:"15vxb5a",parent:"infra",source:"infra.keycloak",target:"infra.ldap",label:"[...]",relations:["1e4qvon","o241a0"],color:"gray",line:"dashed",head:"normal",points:[[638,2635],[638,2676],[638,2725],[638,2767]],labelBBox:{x:639,y:2693,width:25,height:18}},{id:"zuu8pu",parent:null,source:"employee",target:"clients",label:"использует",relations:["ici2vu"],color:"gray",line:"dashed",head:"normal",points:[[3791,249],[3791,274],[3791,302],[3791,330]],labelBBox:{x:3708,y:273,width:82,height:18}},{id:"18uu95z",parent:null,source:"clients",target:"TB.api_gateway",label:`Синхронные операции: поиск, CRUD, 
администрирование, загрузка/чтение 
файлов`,relations:["1eq2hch"],color:"green",line:"dashed",head:"normal",technology:"HTTPS",kind:"https",points:[[4436,621],[4152,782],[3814,957],[3616,1059]],labelBBox:{x:3736,y:786,width:257,height:73}},{id:"58axdn",parent:null,source:"clients",target:"TB.ws_gateway",label:`Realtime соединение, получение новых 
сообщений, событий присутствия и 
обновлений чатов`,relations:["12eeguk"],color:"indigo",line:"dashed",head:"normal",technology:"WSS",kind:"WSS",points:[[4851,495],[5316,505],[6441,538],[6575,641],[6639,691],[6635,732],[6635,813],[6635,813],[6635,813],[6635,1843],[6635,1932],[6646,1980],[6575,2035],[6459,2124],[4313,2169],[3652,2181]],labelBBox:{x:4003,y:2092,width:262,height:73}}]}},deployments:{elements:{},relations:{}},imports:{},manualLayouts:{}}),{updateModel:PA,$likec4model:FA,useLikeC4Model:IA,useLikeC4Views:MA,useLikeC4View:GA}=OA(w6),qA=Object.freeze(Object.defineProperty({__proto__:null,$likec4data:w6,$likec4model:FA,updateModel:PA,useLikeC4Model:IA,useLikeC4View:GA,useLikeC4Views:MA},Symbol.toStringTag,{value:"Module"})),$A={};function jA({node:e,...n}){const l=$A[e.icon??""];return l?Yd.jsx(l,n):null}const UA=Object.freeze(Object.defineProperty({__proto__:null,IconRenderer:jA},Symbol.toStringTag,{value:"Module"}));let tc={default:()=>_i(()=>Promise.resolve().then(()=>QA),void 0)};async function ZA(e){let n=tc[e];if(!n){const l=Object.keys(tc);if(console.error("Unknown projectId: "+e+" (available: "+l+")"),l.length===0)throw new Error("No projects found, invalid state");e=l[0],console.warn("Falling back to project: "+e),n=tc[e]}return await n()}const GS=Object.freeze(Object.defineProperty({__proto__:null,loadDrawioSources:ZA,loadDrawioSourcesFn:tc},Symbol.toStringTag,{value:"Module"}));let nc={default:()=>_i(()=>Promise.resolve().then(()=>JA),void 0)};async function HA(e){let n=nc[e];if(!n){const l=Object.keys(nc);if(console.error("Unknown projectId: "+e+" (available: "+l+")"),l.length===0)throw new Error("No projects found, invalid state");e=l[0],console.warn("Falling back to project: "+e),n=nc[e]}return await n()}const qS=Object.freeze(Object.defineProperty({__proto__:null,loadPumlSources:HA,loadPumlSourcesFn:nc},Symbol.toStringTag,{value:"Module"}));let lc={default:()=>_i(()=>Promise.resolve().then(()=>tS),void 0)};async function KA(e){let n=lc[e];if(!n){const l=Object.keys(lc);if(console.error("Unknown projectId: "+e+" (available: "+l+")"),l.length===0)throw new Error("No projects found, invalid state");e=l[0],console.warn("Falling back to project: "+e),n=lc[e]}return await n()}const $S=Object.freeze(Object.defineProperty({__proto__:null,loadMmdSources:KA,loadMmdSourcesFn:lc},Symbol.toStringTag,{value:"Module"}));let ic={default:()=>_i(()=>Promise.resolve().then(()=>iS),void 0)};async function VA(e){let n=ic[e];if(!n){const l=Object.keys(ic);if(console.error("Unknown projectId: "+e+" (available: "+l+")"),l.length===0)throw new Error("No projects found, invalid state");e=l[0],console.warn("Falling back to project: "+e),n=ic[e]}return await n()}const jS=Object.freeze(Object.defineProperty({__proto__:null,loadDotSources:VA,loadDotSourcesFn:ic},Symbol.toStringTag,{value:"Module"}));let rc={default:()=>_i(()=>Promise.resolve().then(()=>aS),void 0)};async function XA(e){let n=rc[e];if(!n){const l=Object.keys(rc);if(console.error("Unknown projectId: "+e+" (available: "+l+")"),l.length===0)throw new Error("No projects found, invalid state");e=l[0],console.warn("Falling back to project: "+e),n=rc[e]}return await n()}const US=Object.freeze(Object.defineProperty({__proto__:null,loadD2Sources:XA,loadD2SourcesFn:rc},Symbol.toStringTag,{value:"Module"}));function ZS(){throw new Error("No projects overview available for this workspace: single project mode is enabled")}function YA(e){switch(e){case"deployment_prod":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVfHruw8jn6aA8wsbsM5LJ1DOceyNwPnnLOfvu1z%2F57VDOBymRIlUtTH9AMzPzB%2Fdu0PBOzZvFRD%2FwOzPxAE%2Fgt43s9o1idDWvXF32HX4f8Q7wTM%2F8DcD0D9wEx35lWbPazlsKx%2F2ZSqyRjk7wbdszyvsvTvDARA2B8A%2FgMDDoj8wBSCPS8A%2FReOw%2BFf%2FqjI%2Bv9jm%2F9HuzX6R7O%2F9HqN2V86zfYqyX5V%2FdUTAt4HZtIqKuaoe4g%2B6v7hdbKoo%2BcqLd5T%2FHl%2BbDa2w9W9ikCAMQ%2FplqyvcAj4L5YB%2F%2FuvrOqfI7WPlgnyJ%2F3fNf8zPiv%2BSsY9MEx%2BIPqD8DsCgoZJNIrcCsRRlzXraCmUekwKt1MaH2VUVDEXQpdV5juQXKH8bSI4NFtLrkQbwOAbSxlHGTpda4dnyx%2BIl8UKfL7oQZT1o5DgevF1VTcntDyYxInpicncD%2FsVbL8od0w5eUbwQY1CFV%2FqwlMUQsCzciyxTMvAdjmRFe45D%2B8Ny10tLT4zCSnZsFEgMbc%2F4wMnQNwHpF4W5T0TJt6lfYc4BV8N4%2FuN6ylA4erIkH0uZV4EVdUT8jEEP3ucfZK9H9Dt%2BCx0ikrK1hkKnu%2Bqp7BoZ7E10gOSXbMKiRQbcmPIoj%2F7gDDHwyPEIlEivsao8OchrxugUtNICh9yJPdw1KicVKSmjcOCOa6JD8B%2BuCQcKBmBlHCE3B7SNbTbruX0neNZm7oqyh8ZtmbwhxZlzROEh8uX1Qkh70kucD8HnLqCm2e6bvLmDpk4MuWParAR0OJMg014DzHfs%2Bkcmd4vY03wBBQPgzctSWSICdpIWbKi4fEOFKy9uk6otWWoVgmhAoV9xrwn46A7W%2FAcOgCgvtCgkhOS0wUWFWl7aUhyl5jvi%2Fo0Mz8qVKEqVk9%2FuzadRHHXilXwA6syrU9%2BIKzBTaOnZWqgzcKVhYKKCtRJpSHdS2v%2BQoQ53eXUB02VErPlBetG7jBgg9ldavoSJEHnAfcQTP7rik6khkB4D%2FwlO0wHht0WHt%2FHChSw%2B7nnUAugqUJ12rIPR2cDEFU3Y6AZEZUcdA0YxIvW8%2F7DL2neTmmUwG8e5YK9n%2BQFrMIh4uKU3Y0dL0F8VujFMK4MuEpeWDEvxqrsXNudqm%2BWPRkbC57AxEeSz%2FQsGD9Qol%2FMuNLzOtwlWmYcw2ID1rIs5lhHFNkEsee%2BTtHTZIX6WVrlrRCRoyZFdtwMjr4xTjrSbZiuCUCiPq0gJpuVrbI5X36rgIOkzSaMB9xTUPAsz1Y681g9PXFIKHmWBGYgjxCtKUznco0DPq%2F78bwDBDVJpBrVNb1XpdoEyLos7FYj%2BblIajYUT4NfKlSu8TpZRd0CO4z38T18wOZM8AyPS65RdXuy%2FOAIpyhCj2lhUXGzwBuzrOQJ5X5hUEjnFVahg2di5GOBcjJdMzv%2FxgEwBcAVH1LaLbEIWkE6joHcDScldddfz6W9L%2FACPUyL5DLrox0y%2B%2F4uFcClLN7N6DuH3WE%2BPDHEeoyLf3Loa%2B26roW3YLuMrSxFULwOAorhrDZdxiZAV8%2FTuX1McNiK4dREEwmIwVT1gnmdFCoFV82zAT07I4f1BR5iTWt3NcSX46waffmQsmUbQE4v3Kiy1DftAoouDef4dGFz7FwBMMzhMkxZa95IRdKnvIIgpN54F12PwjSBYsln3yzwutuDxqLi2ICstTp1Csaa4wfxfqMFhag0xEboEvAP1e4dG0%2B5pjaiwNtVy1JEWWfoJZoJcoDUAuMhw0EUva5yRWuFVtXQGzCOVO6byy4%2FALNUjM0XyRQSFuMSkLVPFn0ICSDkDI%2FkHOZMXSAEgxTYenEp8ocjmZiZZAlKDuv2iXBC7tXdGX4hiKANlT0YLM%2FisSTMefviETJ77U9VKAaxYNEmuqKwjYT3%2BcHPdTU0jFaimUMlc0g9OQGFX8ck%2B0xXYTVYGMh3jeSuvFzTABJEgRacvz22fv0Iwy0wZm7X73cYOzUAzhdqo4C29VZ0mp2mpwQFms%2FVPOsoecIzde7uBez0G35X3ENPJQacUxM4JDLHSho2kDeAyrO%2BwnXqohKRNt1mdHGxGHkduMohNIqOGCBTIfx6Kwq94Mk3sU0Z%2BbirWxN2eWv9ZHemLBF62B5HWf9Q5QCWZs8EbvZKbmJ1HM4sl8fE2LRt9NTO86xZXpVgEVlEXOqhICE7iRZdEQ3JLlGPmLn5Jk5ltafRGiPxhUBZM%2F5dcv1HxgnQ8qfHZhre5uVGuxSqyWhvCZCdW5czKxBOlW6i3pMI2GhC8eVxpPewyK1%2BMaFRlhPP0u61woy3zFx1BhYc6eI63cr62eYytrf0TTZHj93bNPreXbZG2wojeYujwIZpeNKLqza59VXyDOYFklVWv09PD90Sj4hPzB%2B9Sph8b7WIx71d91ONc3ytl7h6M5kqkDD7VDln9loIpdrls52yz0V06CMUPAZcEHAHan2y5cmNIOntVmf%2FCN8cdpiqLQCd0QnuN3poxwqy3FW6HtD8pX%2BzsgCSz%2Fjj5DxkXkUdqm%2F4pB1%2By73oklfqeyyvY1OkislxQFh0jtOi1ZughCKQdCilmSuEIVOd4YKYDHjY%2FNX8jRzTVV9EW3wcr2r3gen3lWkMbyNhnBaQsQa17Hy2Vcl9xFEWRp2h6PZWbff3ms5WkaYoxZ3dyMpMIAtcNmBPIPveNPYrMy4cxWFlb%2BsgUxV4Zm8WnYF7rIF8Y9aG0Yl15bA%2BJzJwzq%2F9c3cbaLQbtow6CRlHWtZv9BxAwu%2BrR4e75lYy8eZtJO0FJGTCInYM6mWplaz2t%2FJoIYXD3pKGFveQcUWtlAf5qX4cbcUTy4v2c7D96Lc4o%2B0neWpllGqlb7zXM1TQa3eEegpa%2FrvsG6h7wdmTJ9ST9yz4GHK7mwC3N525yXjGDunsC231ghNirjs9V8TTUCViBBE6p3WH75XpKn7phgNmT93w0LN2h%2B%2F%2F1ecZauSvmr0OfNs7BzEkh6ovOdn4ABgWbO4OHDoXwfcjf66sgbEgjrFiN5%2BK8GTJiK5dLS%2BKSDQc%2BJL0T3ofyRtzlWrYdNU%2FdNFSBRP%2BSp%2B9a96cDCdp4vkmL82zX43SRBIPQtCRrNL7e9cMiWYSjUNBzIz0baxfi0QFkGMo%2FS0CeSuoiHvIyknEYpcGiuEQ8Sg4NZB5oAA%2FyebhKQ8Sf29Le4QlWgSeToIzccjV5tZEUB6Bws6hhODuWRhsjh4%2B0JzXz%2BfiSnSy4vvrwh2vp0NPtODHOmCwnv0Yzm7xyCKIdOuPZ9bGW9W2qjpYvei%2FmV18g5ZlHGJw6DWTuqGBSVU5Aog8bQZs5NoJNy6ZwuxQIHaZAqS1ab6474R%2B6PsJ%2BWTTn2V4GKR1g0rDotZylQAhvw3BaSXLgEfacc6bAjob03bfLUUiXk%2FM74f4QuQ%2Bv3iBri%2FfpemwunnYp1awHeBUqCf8XST5WxxICcPibzkUp%2BDQwo3vz%2BknG3CaMNpgvqWnEqOzFHgNF7AkG8E0fK742VbM00Pw9gtULso%2Br7OBRkkZ4Kks7EaDJ9K6BJ3CONDI7NMKmA%2FC5oqMSQ7J2F5X5AbEtb7sG3pK%2BC3SFqIjez3Wa9%2FHYQ5bT38s5%2FjZVelLsAAOFBBh3jaUAR0upsm%2FWRmS0XGg6OGin7M25NiMkIQF0OOTECTpJUumRjmSzCLBLtUuczBKXs1vOZhypAdJMqJQLE6OObcTTwPT3mD7HsZ6ZcJ75PAZRQJiePV9DrZEHhItzEo7sKNhgvlo%2FuZN8%2B3f3uetPP%2FTF%2F6nq32G%2Fmlsf0f%2BDQ%3D%3D%22%7D";case"deployment_dr":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVbHruy6jv2aDXQPzoPL2UPnWA7l7EnDOYdytr%2F%2ByWff16NuwJIhiqIWqUVKPwj7gwhn3%2F3A0J7PSz0OPwj3A8Ovf0GgB9J8SMesHspfsesIf8hnAhF%2BEP4Hon8Qtj%2BLusuBajUu66%2BaVrc5i%2F4a6MHyos6z3xkYgvE%2FEPIHgZwX%2BoPQKA46CPsXQWDRr35c5sP%2FYeb%2FQbfG%2FyD7Ha%2FXlP%2BOs3yv0%2Fwv1L84Yej5EDar43KOezAY4v4fXSePe2aus%2FLx4g9oXD5149U%2FQMDgA7r%2F4lj4v3%2F3qP9xpQPoUvRP9r%2B6%2F5PNv%2FsR3hql1ALzJvoaWMu8dtqK8%2Bnzoc4WXextyiMUb%2BlWZfmatWI%2BYQEeYS8Xa5QahYwlPOaCZgmlTAmJLLlJmhEhFIWdm4HMiKzeeurfYTSX5yB3FUxg09GTFcyFPAslrNU7KyOYF3ttld5tDm%2BkLwvCppvvfOEIISeQ6PjWeFGDtx5yoXnP49HyNjYOmXrd7flyWvt2tR%2BYga2hAPEXlPDbEet8MqPbW3oX3leUjpOeem1hGm85F1U9A2oDJzadQXkxrrdvMj5JLYBHYGaWFv5xELTvFWOVr77guY5XhvzeCINzo74kLMKJGbTbVurcb5c1oFfFYK2NEbxdwR%2BDIZyeU8fptoTxJRmih1RVQ%2FfqeUP7yZCmradU43Aq0zICSy9rvyVm0RHlbIRJZaTkV8HVAkAhh%2FFedYqVxWbtJZGMXd%2BsWx8PbPKs%2B54z1o4rXsqFzpm%2FqZgUgDXCyx83bJI9ZfQxZ33VZt2o4jKoZPeY9MMhpYBrrMnF0Xj3BkvEm0hDAZ2nkG5bLhHkgooIigB5Qi3Vl8SK%2FKLBaujYUvVYIGS%2Fe4JDGKMy1NbnNW%2Fk4rAl5TWvdmVVNtQEeTybku0x6TBkwRXt8ZwOWRDen4%2Bm8JtrMsTMM3XEa9xBu2MQNsan2Y6jYMRWP9L2Y92U%2B6HRs%2BqMaNDKqLUDuTrPD9bTCIAgElENIwdl%2BDXtikuayHIX4uq7bshz5Pmg4%2B8ZqXxfJns%2FYnC1SbEyRi356url1Kx3O8IGYTTYxtsCkqAn9B5O0YNtxlCwD5SW%2BfiKA6upVi7xrQvuqM%2FYHc5IML3Ns7ESmYKHaUcbEgaco4JTrGjY%2BWQXnKsNAtN9664FKF%2Fh%2FLpOAmU89hVoJrFvLzBrnNE%2BgD%2F4blpXlKLPNYZcodsi4LhtFGqDZu0tIe%2BHgycpIlf%2F%2FUjlOHVfc44rK8MD0%2BbIY3RNxekUJvwYt1dR%2FHBlR%2FAOGUFQw%2FH2g4qFZd5ycGCmrftLmaFU5yCZCftW0YGwl9ic0u3uawCoLkd%2BYQELoGqvpAzJV1mKQY4wDJFQVDPV0ud%2Bz2EAKg5TvFiwGlai%2FSkDxJf56ymNxgby4SKKA6TFeYW%2F9wNMyya68cJx15R45EFLNF6xZblm3FFSblORwJgbwJ4qBOE638AQWOJJCTKWrECEyHgatkxWQMisiua%2FmRLvVo74GzzGqPSyPYW9Ou7Wap58po6%2Fyc%2BeEsUtyRVWYtgKt2dtQEwF8npDcGXoBJw%2B9Ncmuksaw3erqIEtNkS%2FTINDjBoJRx22RN5%2FCNyqruQdHtEltWGtWa1lgn1ZQD8L4lJVKb%2BZaGYppqwGpGCTaiBxCyoHM4yqza2TSzO1r79KtgVhH10ZAoc4Upxm8wpHgxQYS0e4l2kMY0Nt2HBb5bxchScEk10MQ4C7Mrl051j4qApniTMmW0xjzP1NHmdbcQ6vwDauJOjzt8KX7JVwDNTbIAhMK9t7xlPWxg23J9KOHLkPMfPFxl2kR%2Fuo5VgXRyd%2FkIdMPC5Qfn0qrGhEEH3nFV%2BiGBRtZqOh%2BULeDN0BLjLNDthva3UCO4H65b9yJXaSEat6n3UUI400pg8L72edb%2BkknrsprHXFusxLCn9I4StnxU3evhRBK6L6Oc7csCsVWDqSWN6xb4H1GJNhoLcmQHHvB9PExneGTmDj5%2FzFNqg0cL0xsXFhOu4vwi5R67LgSlIUY1Btpud4yS8x7sW4ubbJiUkkhzvDCsj5sOWQN2v2LYGKG2dl0geipV4oBRWxM3dQEFgE1fqAWgxXRiQRgOtdCJNk9hNc8AKcmF7FEJs2U%2BTQ3yRYMdK0PNjcXzz0GB28TH4Cv9ufSSEL2wGya50Tpj2M4YgMCdFzsFDgM8ydSbMoWvLy%2BPguvU3ZlfzgTg6%2BdGev2J7Q0IaXdVrTaWNZ94VCaa1kM9SiKJxGlhHrlxw3II6fnjquaMTgBGfBuzvP8%2FvfHGKIOg%2BxqG72N0gM5kQiAlRNQSoG5G6NorHCR%2B%2Fdhs418pxjDp4lf2TtzXlXzaZVa56mrblYw%2BveGON3j6oqVs%2FBc7c2XC4VH7Nfv%2FBcdB8E7URoVjuJSrZyJo%2FQN9%2FFLX93FxfWbxkXeBekmToTHYNJxSVoCSgd%2FkNxNIoM1bwaXUcp7eU6qMundYb6bGStpAZlwlII%2FFcb%2BAW5ks7GFKpS3vFX6q0uaMQwXzVwdEg6ODrdHYTcAgphVSAsZEJ0VyS9BW%2BPFi6IN6SU9yv5zAtIH3V%2BPUesZUwspJXvmpPeY77VJWMTK6S6mhAcPxmcc7OzchBv00vprKedRrUjE8cZCknaXA7aB6CCMxv5mYtKr71dtnENTrII9aINfbjDOFMYFhg9zdArNVNn9t20LqLtkKCn9FKIvPK7QUBP7UQmk1m3Bcithenv537LvkY6P1WLaHZzkcBDEAz%2B8xb8z0v2MfT7mP0r%2BTc%3D%22%7D";case"deployment_mapping":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dXnF0uxKj%2B3T7OHpMMPQWGbmSYeZmf30be%2Fzd9zJ7S%2B%2BclSmEySltLSU9Qdm%2FsD81Xd%2FIODIl7Uehz8w%2BweCwP8C3ufbmw%2FpmNVD%2BW%2B36%2FD%2FEN8LmP8Dc38A6g%2FM9FdRd%2Fk7tBrX7d9hSt3mDPLvAv07vajz7N83EABh%2FwDwPzDggMgfmEKw9wGg%2F4XjZPTv%2BLjMh%2F%2FPMv%2BHdFv8H8n%2BbW%2F3lP%2FbzvKjTvO%2Fov6VEwK%2Bf5jJ6rhc4v5tDHH%2Fn7FOHvf0Umflp8U%2F70cZyzqNP6Ns4%2Fswqnv9T1uNp%2Bmzxt%2Fd6v8o1b1ypsg%2FWT51492%2F4v93%2F%2F%2BGwRzugUlHzhB%2FIOAih0Zm9HqemzYwn%2B0TPeogR6S%2B7hQlpKq0JNJjOIEA9FCitnYl7trj20fWQmohpX8guij2GQ8R1G%2Fexh%2BIr%2FFnwzoVsQBBAPTEEAIjVc0rePXl6QI4aDvuqt%2FbaK4NGPffqyNPFh3r3yecvEsIasCUbhvS42sUnre2AfFjNhoHE2096x3AmPlWliwRo0mC9G117BFP1FvwjgbRdV3ycy89PCGaAu%2FqjIyzYpkGPPmx65NLHokQhS7Hj5JmSUZVr9lo5Z2J1qV8Qs6RDIn5dg09R21KsLwK0c%2F7gW31zochmr%2BhsLlBULgNLAoRq4SJ5wb2zdpc%2BZqmxgwTtAYehzW8%2FkMjtiAs%2BdYOvol7OGI6lFw%2BLHM8RUVXBNBI6lhwdnetn%2BUs1liciyCNopSOTGWJLWJZyiUUMdpiHsZISEdI4xcCOtBOxjshXTy8PnTI2UgY62%2F%2F3TA0wlzmFjOFWk7ELYkcXnX4yyZk8K6l4GCPCOPZALEK5zrlnxQFAiWm4F51N3%2F04OUJ1%2FVUuH%2BWvrq9M8PLIocDZcvfNZZOxpvBrO13neJQLAkQer5bosdlGwR4eEuZXLgjvl1RjgyBSoX%2Bo6YCG4%2BPfeywDjihGJAJghafRa8okxzIaZK5wsRV%2FcGQjtFUehBSmhx0X9IO2tvCnLJqWsYAypRjaWo3wdTDzNSfuRq6fdexlax1EBs%2FtXa7V4ijDeNCzOexuBcX%2BGJkSjy8wl%2BZ5NrbtjtSFQHmCXe74XqAq0K82rvQSPfMHlkux%2B48yY2p%2FuZS5Ls8G%2FPvE2d84rnVqzRa5TCOoPaes7vHbxQCFjdncjEsJ%2FhEaYKl%2BidkDCFmHkmu%2BqKDvDbijx1%2FnwB3mGY7Hqvu1pjk90R3IWAS5wcZ5rA0QQ9c%2B%2BPOPX747rmhmDXxFlmlnwRwxUBDTWRNrJGgT42%2FmGjNJ7NzvBii6YZjbs%2BGbU8TdD0xOKX1Y036MUbnPmISvpCcqU%2BBFDZgKfcuAhTP3r01tu6xGyY7BzMUF%2FPap3GRDGjwCxxQytrvgCQ0Qw5b4cdcLULiySU4jXO%2FmtyGcwcFJjifpBkc4vdQIwUTkMznhIynA8qME6RWXCmioNPMoQHIFjSbxdVQM00FSn6zLBwU0j%2FcC6WQO46uKYMv2tgfES19unnUdTw6hPpOwHKgrbnO%2FQUqA%2FGs7MkfNNw%2F%2BMODc8n5ZB3dK8S3GG5CdOcLBUJu4kkhuF7iCxlPaXAP9EHxeexgPj0fGI7A3TfzIrvtNEalADxDi1iY%2FWiT7%2FDppq7cKckHNDU%2BiHj4%2BN1xqWcC53ayYj61naQKghfI6ERgU%2B%2FxTM3Zu%2BMiKYMvXJjnaM9I7n43aLnAtgYGQzOboi9qd9sVeS%2BFWETRXe8xDu8ZfC4UExd39EKSctTaCxT3gUQD%2FfwQfUfGfTI7yQgbM7TRac%2Fc%2FDc0qYja1AypqZkvuGMSwlRerS7GmcE4uI7bmuSDxHoM7i6F9qmEmhNh3EdHG1udKqskBDtW1lqKLUyxTpJaKjtvpJZhsfCNdMAMO0Ylu8RyVoK3NX2zrvHknyCdUq8J1MgrPf9qb623yjdT0NnzW%2FvwRHIDlNOTvL3PjJu%2F5HaTIVdmRaOAA4HZLZSbZ2cno4C4ZObhjP09%2FB5B8ykA00lrZlriQ93uw3N3ZSLVZ95v%2ByinUzuB1s9NREnlJ%2FSiNNKBXmE0CxV439vJePPf5MzL1D1Qbkpb17eMVXgb4JJdDNtWZ181aYEI4KOcabCsV7mX1zqRl%2Fu0NNWzKJq8N8SRvsfx6FRtj2B4vKuzZbLLpZqV%2BGzsz79Fmz7jWZ%2F0WT7kBQOSrdvIhZxP1su8%2Bt3Ub2sv78jDx2asbcsPdzT1QxTvF0axTE2LZwXWu7OWbQgUY%2B7iL8%2F%2B41DG6oujqBIePnZQnA%2F6%2FDUoHP7NkH2p4r2YWALnZTCXIHIAn6WLnw6TLNBGAlCkBkvwbQOXYV7sBV2Wl0qP7Y4uIVjMBs0aaR3GTWXga%2FhlBbmzwVoh%2B%2FuqCebo798USy93oJtz41QT8MC2VWlc%2BBEJsqyq7IR39LOR%2B83J72lZp8qz43mqYKshMTqQNrzd834Jr%2F69edFFR32QR%2FaJ9PZ4%2FDWkR5oPx9un2qRuWqj4PAOrEAgCR5nZAOcwEDK%2BJsJhTe8Mszt%2FF6iDyyQIu0v6EebF8OdS0yc5hxeV2FbOcW6NAUzsTSGK3Ry3%2Fb6UnF%2BC7SHI8tU7fIXv0mEpiBljo5P7H73xN5qt6kBr50NL5xD42aKMByUdgpToKPM7%2FXTFbonm8dOnR39sNLDHUqlCIIsxFG2EZbUEAuUk5eo9VkQ3LCywVfbjQn%2BVv3JEXPHEoF4qRmvhCih3R3vvd1El%2FTbPAk0BjAghRt1lKm9L%2BZfuyLQ5blTH1VU%2B7urLOPgZ4dmIKzk9sXxhOl6qMVEv96N33Gg5u7S2lKFKl6FNRcsyJhcvZlzCFpt%2FLsZb8sicTpyUilaWNDUATGG%2Bp8ALgJx1HXAhG5Bg%2BBs%2F27S%2BS94IJ438r3Rj1gqfuxqrePbRyBOR76XcTNT0AzrgKBA0elGSaU7ZYEfbuWaGveJ73Y%2Be8zwMiCnLO7g3nrWLxrFKpIhv4%2Bl9jI1%2FvNmU92LGsz3ZRDioFr%2BwDun8Okphgz9fYS3kSSxD5wK2b94PzgSn6vE%2FdMKGfg6%2Fwx8Eeejh%2BXlN3vEfo8QviUg2NPP9It4I%2BxC86JnvxvAkE%2BTKrUwT3%2FZ4v74qCC06yVKIz4jd%2FHRRxg8r7E1cvFgfnA%2BLYkSHxw3%2B3F2oqK9Qm%2FhwbljtOmE2ZIl0YGoZfNEZ%2B5GPOd1nu5qhHkPxy8QXP3D11du3d%2FbBhuPPBx63P30zGovP5wvGTodgnOH%2BbD76A1q64KrjUAkxvZVGGdz0IX8eVHzh0iQTJLv08JM9GyGDGVrocMyDl%2B%2FwQa9oQ38rQSWUyo9es%2BMHiZmS8YEC4tQ57h7xRkKyaKJgLw8wX0yZnbpCITvcrm62hnUExrtz9TxqrdsXTDTWhIUiwfjndo98ZKbGU0AO1ZgYgXCATDlexd1oeT8GHGxXiBQbligOCGLD6mPDHoDB3ALzNPrdk9nOt3VaDZvor%2FfEKU4CnS1dcE75SQMHI0sKWAi3m3cdiUM2Zj0zJRiuSoJ%2F2R3nrh10rHo7chapvpR7kwdWmQ%2BKTXCLs1SM8Tkv4BJ1jDJOVsKhk1RHnYvlntOdhDBIH57gXY%2FkmIpwyHJchgtph1qr%2Bp0X8PIrTLGvzOwIsrFjjz3tICjc0%2BXxEsCbwy8VaGXvFOwsEjFfsR%2FLz1%2F%2BNw%2BwQcXhFWhj9zAAP0h7Kd%2BZIai3snpTbOT5Za1wmILhxs4Qp6FrIXXIHlpMupzXmMxqCD%2FKtBhZdmie39OrlBFC0B0z8vpZXAQ1iyTZNUx5XdtduS%2Br774EHvvGkqWFkoUcilEfmcQ3UPuM%2Bxfsomxyp04Gxp851%2Fj9WB6Io5Ct0B0wvpjbTocMXV335cJf9Ljjo%2FOaPqecbh7AnnGiTXw0F3tLqzcw%2BGm1jqusvqPQkqpx9E4cnD3%2FPFiisjAgLPvBMsLMBvTtUoLnI9VFVCTRlq5LnSwUkhU0ZuK2kT2TsFa14FmLFKYVPn3xTod1bjNpaFn3HlhxHO9I5BEfToOubH3l31kd2mOZ%2Beh2e%2BkjSR0YRukFDk96ljFl0mIP6ZL5RdVfwLR0OfZNniK7fNF9W7jorVYYL57iO4NwDkLE%2FcWECT82OgTXZnZwfrIKq3HXwri12cYuBrRvocyuSEmZZh7ipk6PRqlelwZCQpzEGoXxknG5jpafTpM9STG52XIhZy9lwPZGlNFbBGcc9EOFgam5HtuRz9r0j9ZQLZp8eOxGgFHuh%2BYxtBls5eIhQ8VQ7em2HZjiHBP6UBVUXMOtzgC0vfOOtPP04aLpNb0YtkMOuj1AfjtndvMdDlggsqmpmEE2QqwmUPKMfVXBbC0nL3b9r1xwMCIs9lMbSXLJ5ZsN%2BklkcIObChwbY9iEnhz3pXonMb50SLxNv0LupS68kRAn%2BjSB1nXPg0pLofAfo7FzAvuSGw5jIhfRjYSUr6wIVPoUe30n0NU1SDYfnGgu9hXuGQsn9qhvR5Gt%2BxuL9aK7xsEmb%2FHqdflCIHMNZha1adgcq0CN5FrlY%2BbU%2BjLrlhTsZIksktxgJZPztyyIXP8MUL3fbk1bFgGa7pdP4xRQ8V2XTGG1VpbQnLuWpKQTPMlRUSno%2F8hLukEzh4KXvtPyDiamgOkYWgS43MXry43PpVrsoknGg4ETeZOx7AsU%2FLopkiXfMKAPDZy3sflquNWUS6%2BCpfPEJyKHJ4f%2FOZ9ob165vG5zwRwLvMby4vWMRRXd31QkdckRR1kBWeSFSRuiPWL2I05PBfWZZ5hJvOBIuggF9edrd4fuO7pL3DwzM8%2B3lFN%2FaLIGcFSt5Jvsqe%2BuAheCRDIQIWvseZ6vu3dVscq4ZNo4fKbMTZtoImDAr1KyokPAbw1GxHbx7tsb55ifr1j0jWzx0lJAmTQ%2Ft9rjcFj1hYjpxN9EARNQxn36e3BCy7qUT4gLOoizIXqVRFCz6NAonUkvYv5CU4IG4TQ%2FnkTI7MvJtLjpgkid%2FZgVgCsCkmRq%2B6tVCfmbk75%2BQRsuqLt6mrlc3ajjKo1Io2W2nO2%2BP23FgYIpCNMMOZV1D%2FNTNbk9PkVmQXjOd1HEQrZa10m4zcSBkwWW2%2F53CTCjcQDsLyTRFtRb%2FrVWCtAQWj6nH7%2BZ%2BeBHJaNVbbcs5qy7cmNZ04hCeOd32nZln%2B79kHLruZKPBlMe2HciCkRfJfKkpBM6ZtkjMYmvafbg%2Fy1LXMfZP22U3GVDcIsXXulMN696K0cEkpPVmF3a6gh5JEC3mii36BBba%2Fip1vU6%2BPbOVGdlo39oHghUULNHTQNYz7IE1j8pOUlkFHRLU6yAf0XR7r3BxQc2%2FZIkWscVOK6a5g5uUzpQUVzGSFp%2F0EsdV0Ovp9fDnCRjrlQjVdcxikMMvnscAIYKTMtYY7%2F3pls%2BoP1rOCOUACFRLXAY8ww%2F%2BoR8S2q%2BKvHVXwJZXcXso21wNjDKW3qdsdO4sSXqf6%2BaHFCDCBcU0X0Ed8bPGJA0TT1jDkOGhef1AKqHhtw7rULtoPLwF6bVM5JbdWSu2K8q6rlGKCpQ%2FWXmoHABJH4Kytrc%2FrrxeL7S2qBtFu9WeKJyVRdnLnLf6qmQOYPXUQdbvMH6Db4dvlUPDaUqopxjecFgNrgxdEKqlzWxE2pslargOQXPB3I39Ji7uht%2BBZOk8fcC5xQ%2BokHkBFTB371Cv71GfKF0i3i5Z9LTuZxn%2BhJdakhcsGJu4TSrNWc99dmmruz0F5meG5T8UpL727cqVD%2FiU0O8bmNaMHzDEMBuroxAKUw7HjanSZ7QDVJBais%2BuJLpHVRYqBojr98zwhWJ3peUIYzL9NYOm8e6iN8p6o%2FMOXb3Kx5AvO%2FB4gb2ArfjTc60BFAnxZbIqjqJ%2BTsH%2BjdTBzWaFY4SQ7K5VFhcJ0jvGbG%2Fh4o6z4ssaQsxe4r3H74zL086McUJQH%2FYspE3n1IK0fuKv3rSotikzPDeWjDzNWeVHatlWachSDb2wUC3iGySYs807n8RCl%2B36AE6%2BKgd%2FbfYrq9%2BecFGLRTAIYnaY7GUataEfPi3zgLjGs9FLN8RPhnGn6U16B8TZQQgg77UEsHqthdGMvke1LOEhWB9OEB5bBh5oyGWAUO5f34XUXzSXzPpzD2h70qa7iDesSkrJblrV%2F1%2BncHJQ1SyzvDmxyeGpBl4t1pe%2BHkKoKV%2BGWzXBZTXN3rayGLKaLtBIU%2BV5tR3zcSnez1rYtCfYw8JHNLeWWFkghBKcuJleQvt%2FIeILHkUwoXoyBB7Ep1S3uWzbbpMwed7SFqxl1G2DbJ8VKed3j9e%2FNCAAuidmzrTm7CUhct7FdhYyH9fBcnLp%2FsTl%2BgUNcAbL78x%2B0lpcoSBPMSEuhzOA87hulJDSyUKKjbKPJROSphxKJiiNjDlNCTggZxhRH61OEoGDgsD5PTm6KkodEEUaZKF6o3pU0qFdrHh21Dd%2F10rJoNwCwW2K9MRxpiceWKwIGnRX6zvBl%2F%2FaqlzNEaRtRzgLV%2FhWBDxGruE4GRMriV3%2FTbDjQNcsqDZvFS7H25lPObHJhzSUnS0wJtv%2BNRTTfgNFpl2q72ON%2BEXTOaknPSqvEFEo7Yl18ykaFFqIvUy82RDZzZc%2FuSvYAIwujz9IridzgN8n9y9QDKalU5Lu6W7GKzt2u17WP%2BbCRTcwyKZ04htfPeNWttx5FZFSaaFm6XTrqbwQuMem2vh7Ti5T3iRYxXd3O04f3by5oJ6crNDmRrHPaMnnjPpLeET6814DhsGj95O5dOVOUnkMkM6Mh1MMQfMnTqd7NTk2lnINmLDny6WVeFpQw98mmxKPkpyJA%2F5MLlX7sYTR3eDnshlNyy4nlFB6GKIyr4DRNlno9FL9%2BrXs3S2K5ej1BFTRevTWxBqlSqigx7igl6d1GhHg0EzExTcIR7cWV4iPj3BRIJT0sdyTgduLzCaThaXsslMyMlc02JK9r%2Blem5KuUl5OUGfP5fD%2BeoQ4wF6ZtW41LWgDy8PEcK%2BKqQKNG45vuuFP%2FCHBv%2F7g9b%2F%2Fhz34fy%2Fv8j97fkf%22%7D";case"index":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVfHtqs6Ev2aM7xvkcFDosk5mRk5B5Ph61u8c3vWvWxkJJUqaWuX%2FIOyP6hw9t0PAu35vNTj8INyPwgC%2FwOBFozmQzpm9VD%2BDnuu8Id6JlDhB%2BV%2FIPoHZfuzqLsciFbjsv6KqXWbs9ivgh4sL%2Bo8%2B51BIIT4A6F%2FUMiFsR%2BUxgjQQPg%2FJAVFv%2FJxmQ%2F%2FQ83%2F8W6N%2F3r221%2BvKf%2FtZ%2Flep%2Fm%2Frv7rJwI9X5TN6ric4x50hrj%2FK%2Bvmcc%2FMdVY%2BUfwBjxoP2ZLGU%2F6rtf7rfAf8SbE%2F9ZDl569m0j%2BTjDAQYcfgcIPxlIml%2BgcR3s0R8iRBndpyffDdPeHLYRb9w1A0m50FiqAVTcsU50TG2Lva1AtnFnUJAr9%2BEKZ2oMbJgpYjqdYws1dlqA4nM%2FZuHUv0cSvu5kp2CUXuy7oe0Ti9g5T9Tsi4yG5rndtf12KnWJOdMCNSxYrsVnYg5E3hd0ZQft1tVZyhFZeP6syz2YtwKEiZ80tAmuAaqDZTjVWP9m3XJjn14c%2Fr636wscmUS53TXlrk5lpBiGTODqp4xWKUKSIkOZr8CovVJqa%2BhDNzvnoyxwJrNy5CV0sQFSyjCnJfKnvhi3uRQEMBAQMkykkpmH5VBP9G1EznoyWFHEsJFubeNDxipIQaUzRSjUXh0Um1wMqpd8CSc43ZFkIZ5Vlv0e834w5SL82zjZ%2BC%2FanQXfpCnWF1eV5rnkdc1FhzjCeBbPSRCNZwz7rQjKxkI30qxu1tDd6BgQq9Is8e6s4bDowpGAtlorcSYZtzYZO7HuuLL55MLBcYFoAOClfNA87xMnjxoBsnThJ8FvSqDdttTYH5OmfR6yfLHNZ0xzFMxBA0Lt52ZNxkR%2BcBfBFGbIzWhS2N2BqpQApr%2B2AavADqLrVdYlFJr9UbauS21KKDdduNgjecs%2Bx9weynckWR7qzcnpuO%2FYhtbtaipT27VAINAnBKcLe62ujmvaVCwZ0ahU1hq6M9LLmCcU%2BrxC2xJ1zvRX%2BlTkNDRp9Tg5Mc6R6Io%2BrZA6a4BPY46pSLcriNqt04k40vjssvnf2oLQzmXtfR0whk1vFYz3LuIBtLCrBthnYMxbzKbX2pXVoSwytn2pOwhY2%2F4HDdWVAr9xPnKLnB99il5y2I21GExGlddrMyTonlYSjkbLjmNXViyykOK9SSDwc%2BRrQndnJ4qUOhPR0sbWi4ntc%2Be6O0X985F04zGNE7kaHic4uZvkf7mZKCjWlM9530XZ8Gixc7MClAoYwRb0HJOcFhGreOVFH%2BLA9YaX%2FUczjkUiQnLMEIo2WjHNuu54vZKH%2FE%2BvS%2Bm87oywCy4Hn5uglE1H4mW1g9TeISoVGUrM2qFE5vDCBXTEp8DZ%2F7LgsSnRPjImhkXiIagGe4UfgGMGfemGW8sWoDrzQDIdnbEzZYVt46htg8lBmFuaWEPpjXOCAGEAp5Q0wK5krf7Cd8wnFAbqz2uqDug%2FVHMygeiOTIJWpmkAep%2FTnMLuRtkL5U5x1K28Ks38VG%2B5wMPdzlxPuQ1Wl%2BqceGJm0AbYMxq9mKQjIKFGEmYEEmGF7MDX4n6%2FOhSao6I%2FD4d6%2B%2BvmIpvG1qP24NSN%2BXT1ZKjPoR9wbivFPe0QlJUbBoVzVqKqWzClkxsEMZ7m7AzMeP79AKipHh861z0bJ5UEwkhByWzsEoQIfrHaL0jblOPHzvJoOMsu8ck7lc01GlhbRBzl%2B3vvtbT1yodpO8Etzm68vMr%2FbWx5ZtZkotof0aaLXvGfYFSo0QiUcl%2BVTCVf4FhcYO%2Be9tfnHbxismsCnYk7%2BV44P1HQ6c9poXrEEidNAaBA6FLJlwiNiHjQBv6KcpSfp07wbpeCNrJbHDaNHMJn1TSQKoqIIHdOD8a%2BQ8GEYrYTasAFNgcMbyZbw7xcPyBH9LYIS9oC8NmzM6OnqCu%2BfHsPgq%2BKZdmmLNcXrEqnV29NodBEMaWAc54iTkWNJRcdtShS88Tg7xvGdPtlNcQPKR%2F2psPxKvL5zOjRGjOk2uWQdLxDzG2PfQgU3ocw1ZhtslEvv1PgCXU7E1c73somkQdj%2Fdv0b28q9hUUp2Ghu%2BcDAM10xcztta1QiPMNizxnDRMhYY6WmVtcoltDFvyzoFeQDYL5C2utLOJv41fTjdT1hA9muiNDbxoTNgsRFXqffBC5zh9JfaQ44vOkH3cu9RMLa3kqS7%2FsbLE4JfBvlgqyQSDUmVNUDwu%2BgKFd0gjYFWNQzUI4GCUudgYdo50koJ4fNa5%2Beodesb9%2FMJkXQHSUTIzwyczl%2FkbTo55dNVX%2B3gOLwWIIrG8bWiKHRuaBO8wLWCKZamFmXCpAb4Q%2B7GjXgyMrsqzaIpJGsBZts9qjwkHI%2BDY%2BNs9cl3rUUx5N5w%2FE1NOHn1lH8%2FZYzGZdAyV2%2Be5A0%2FJJAFoEFEWQU1UDyyML03KvSfwlSlpKeM9IOWkKrjDh2uLSuk8UmBYrkQdMAPc2U22Djm2bvdWoP8NkeQHIIzK0TpH2IjXOLda8i7IogA2adbrG9xelvfu1BhLYIKfldrrL9nCU29MlCLmoxEFnW7ClOwj4gjfvjl2VUMzaOEqDw2%2B7ndCX26KMzBQO2mjH2ZFCwuTILX2ackdQDgQqtFlWAINQKxS3ly5ktTPwR0AkoEdHZUzC2mRUWmCZSIRgAfu%2FYc%2BK%2FmCDaJIK9iumyy0K1ukL785%2FarpXJKWFCZ2MOdkJFJ1IInTEwPfkXQ48CJ4gnVhi9BG1vcg4KUXrgiUqAcmw9w%2BRXQ5cJG6cnqudgwFQ1hmZ0PHaTqU0G%2FB8fHxw5gyBx5TInr%2BEY3%2B37E8S35guHllpvGpaxjzhu15%2Bkxq8hzvYWQ3C%2BK5dljXgcXDfH50dqTatrlKT%2B5N3yY3WEsEIZP5DpxlL64UZFaejHsVGRzgFzFkLOJ2cq9Ly4cQh1kiqH3Np3T9mRQ3KSUprfvsGWMRvkwZBLuIZwDsmQkTVLR4iOGRr0f3HBXiX%2B76DnUUV%2FAsW6Ybbo%2FzP0U21bRHLTHUPUhn%2B%2BKmSaPkr%2B3Gy3P35W%2BaNmDK2zcvtVL7%2FOSjo%2BnP5kWbVQ7zq%2F3Ga8yurD5V3BPQig6TLtslGTcNQqLera2%2FVDBBfxB5N87%2BH%2F%2FQTwZ%2Bf0T8e%2FIfwA%3D%22%7D";case"context":return"https://app.diagrams.net/#create=%7B%22type%22%3A%22xml%22%2C%22compressed%22%3Atrue%2C%22data%22%3A%22dVnHErQ6j32ab3mnyGFJzjmzIzU5Z55%2B4H7%2F1Gxmqrpp2thCliWdI%2FsPzPyB%2Bavv%2FkDAUSxrPQ5%2FYPYPBIH%2FBbzXt7UYsjGvh%2FJvs%2Bfy%2FxDfA5j%2FA3N%2FAOoPzPTXr%2B6Kt2s1rtvfbmrdFgzyV0D%2FDv%2FVRf73CQRA2D8A%2FA8MuCDyB6YQ7L0A6H%2FhBBj%2F7Z%2BUxfB%2FiPl%2FtNuS%2F2j29%2F92T8Xf%2F3lx1Fnxr6r%2F6gkB3wdm8jopl6R%2F%2FwxJ%2F5%2B%2BbpH09FLn5TeLf94vMw5bcW1%2FZdb%2FUb17tcmQf7L%2FfQZzuA%2BmOaZB%2FB%2BIB8Bwel9CF3RaRztrvzbleeCYBi3W%2FAl4UDBynlTXa6Rkcvn3jRgYy2LuCN9KTTCgGgtrebe2I3qlAE3vGNt0kr8TzdlU7SFKeIdE2PzICA7NdTNPST2%2BL6YzgpeVQHILlWuZIlO5t%2B18v339c%2B7FLVivEBmDaghIXz2OBMsjiveQq56zoRGlQ6B3dvxTB8%2FPoAZJ5sjf9Y7OLTG9ogPASOtxH1J%2Fm8qtO1x9FLIhBiPjcBuy7ZvpkaRBbgcc5EVMDK%2FsFcYRadVyFv5cugqOJIsJ5o3OwTsvfi6aZnxlvbcbDmgwgb13TUoSrOsS1rrVLhstfWaFJ4FBOz1hmX%2BuA5%2F9zEj2XVAJiGgxH4Ak4VdJXjArujbRgoY2AHAY5Zs2ZXeVTOKX8EqmK6L4qQscHcq72BBdr3RZKjM%2FeRYYYKiYRYtgIo02ta0RudXeHF4J8RkNHwqPMe5VrxF9v%2BNG9b38mDOEvKNZ6qTr6s3rPEIj%2B71ub35qnxsKjibmLqijgcvZYTMM71fJI%2FMS8TedTblSP3wWCb0z21eYRvEwRLV79tnVzvb3Z8sWRuGv8g0wmpt1DsFO%2F72FHOaIfLumSKeO1jw9H4Y8T5CAyY6DJ7t1GQ7ERvuCesf3Zh%2F2OSgN9pm4SI8wZi0xLdAgbHgUvRMbNBIn4O4VCn6mMoBHBqce0bTjm%2BTnOE%2B0XbDFNRQqnVkmka9PDe%2FkeXxfRBbSMQHOOiqPj6wN8SDpYsyJybg0d630JOlWxKJqgSBNSs7oSrrSuL5VQWMNS1EJk33wrcoZmdIjqcuqcEw8argmuNnu3DTigKaSNLvBFAekWRfL0VE9OVMFebDD53SKoN8bUm9wrb%2BjvXeG4z7b7U2%2FaiIHZXkbaa%2Beg04%2FnP7mEv4MCX0DEdjqC4yzbtLwejmcpWhZpvSbUbuYcFuKpssa2jj7ysOXCTeMTFX6foNOvTMqVTfTjAaTbHLx2OkKrYi%2B%2FoG7CCEMrwTKPsetUvwhKQwylr3NXR9rMYjFtUcJv0p3geIvDjGFzy0XEXYSNZrDId82GwjwLTyn%2ByA5dpFm%2FqCjAaUIT%2BgklM5jKJ%2BqnX6WQh3Y8TgA6oidCL%2FRE7qxM%2BULwPM9eEqH43McRIWSUVpu2NgZ%2BVtXdXcXoEBDps6V36MCHWP4JngkzJvkkGEIyLq8ML4nJqnTbQWobhBzOZfxYz%2BZ2th55EODDWhFnc4j7TjVEj%2BJrNmD%2FDQZFDIZ7i%2B3eUSuM83WYwRr67xVsxiWdohkyEnhQWDqcWbAHJCuzu%2FabXxYmpRej70%2BeWyOd4Ks9rnVo5BeWELJj89%2BcqhqynvVesjlQtwizjPhTCHlHy7TNgGr%2BvW4SUgvISRN6f4eisFTKjvB5crSzPIM0Dxy69SSrx6FRK0CdIGNKv5SpbJTv%2Bq%2BqWcflA61K2AV11i7JQv0gc2RdcH3QEEAsD6Zht6abl8Wi2lax6eeY6cC32g%2BJtscKwN3gptofRzyZ3jye98BW9QHjLa%2FjW1uvXYhTRLa3xX54EBM3oVYYMlMe0bKW5nnHLBa5RlT7YKjlqNJGaTNVgNazOvxHgJGAmzBYfxKxbyE%2BjN8c%2BOBs%2FucghPAISXEhVMgCE6jFvTVmLva74cYhGhzmUM42Nfws94czf%2BGXZAdR7TsHYOtTxE%2F96U5Gs%2F0vU8ZjbvjbEdr0FmPdmJVcq9niwA9wAKyH0d9cDJLNqbVBkJUloUBsAZRNqLKZCW1sVhLrc7%2FukCkzkxtXOlMqL4agRD7gYrjQRzaThdPGzYZiaSnv5mMr6ub6rcqJAySlXGUJYLdhm2JpOmre1GA5rPuIAaQaUH6Qt%2F%2BDsnaKkMPbtbEtjB3T79M7Laotdr88s4tUi7vKxlHUO8d3PzoSQiLuriZD8Oc98ZO1U20HfkDGZsLKjOsxc3kHI1wj4rDhKRD7w5OoqluLZsVT2fSDXCqHoDaOx7J9RNlwpHGg5mA6VuiwT3H2GtkqCTdSj6X0gd%2B%2BJW%2FqKkn0YYKTM4ry4yWlzgURImuOk0VKJ0FmK63xQvzF73E%2FP1kq6294db4MGs1AgmJXgZBoyopm1tO%2FVZ689WXbNAX9KZ8%2FuU8%2FGTCpVHOo5XxiIvmXIFpvgv3QPSo8Q41MK7RMxO%2BPelOI8nUvGPfgPWaxiHdZXj7Ahow407AHkCYbvK3GyGp5A8m31yyuwLWrsxYaJ8Nh3b8jDett4jxEkEh3omM3qo6RoiSFswad38zynVGwsmojEF3C%2BeGsr0cz%2FoOOyLPfVMOv1Im5Ip2HJh4d6eZU8TpkgEgprL5MNx1jycTsZ5OL3iBtDy2x0Mo5xuVSpp%2BgZU1GVZyJuzBkisPodR2ueWyrzSTF%2F0WUngIPuDjGrM%2FCH%2FkZQKZJZ96IBcdOp3izX9hC2mCPJMR98BQump%2B6ay9rtN%2BlMO0La%2FQid%2Fe%2FH7tx7vEz2oiRh8CCzPK8rQJyMuuCkyumvuAqqO%2FxssyOEb3frn7%2BKVe%2FoM73oEah6GLyRdU0NRopurL9aTqLcVU9pR89Oy1W8OwEOJ2CiH2oDhI%2Be6CsdSqFwy%2BrjMt6BdjPB%2FA6q3M%2B8N6ZYWzoCsXigrWjttsUXPZDY1dPD%2B0h9diOLCAjblMKrg0zk4I24wzSSo3L1jzcvE2w%2BV7t0DenC96IeycSHxgjmsnUFZNUpuYsOPB9mMrMnuErf6bnSL5b5p6wZKgeh%2BtEGiQoohPfO5izAUOyG82SwCxq%2BIjHx8s5nT7mAu%2FGuGAqlkaSaxhjTbftunb58JlqC11GeZzAVaWfmb11NYfau38kDPtSJjOVa0Yj5LmHZMTqj4wn9L2EtBHcl87TWY3gUolbbpxXhJTJ6RAkOjwcTo3czKOHhiybKLL4ckiTNWrzId2r2ETpE7s9qXRMRZLUws5%2FJLGIz21Z6xLsmVUIQKozeNambm0AmrdP20aYquMQgMiy8TQ1NxIZf1oc4ClCVLZFDtWlFy26ryomHX2XuXDJUfjQCTgA6N%2Fu5%2F94iuIB%2Fi1hFJC2R7THqO7vbABpxkEjC%2B%2BtvLnAZu9ScbJEvA8bZHWoJ1cprBFxrF%2FZ5Lwp9xIQr3oY3vZ0FK1y3DO%2BW%2FaJ8lcrQIpSqjtjqYdDxMEYC83V2GEcK5hQx4rUCbGrF9WXy1SbuhUfmzyVYdOAM6NiGdwDJkVTmcQyqCZ8jc%2FPYnfgcChhI%2FkZlNwZGoIPZw0Lui4hwpfJF8BcJLQhA%2BnxD2X2c2vC%2FEYBCx8739RbhHi8zqfhSa%2B58VRucR1mJWIoemcoZKVqhH3F1NhNAjQi%2FzNzkZevFlCH4UxWnX1FYOd6jaqH%2BRaMmONCfmQDJB0o8beo4vIWjR0716CuuPe8djyOExoO0gt7DHwwisiKyNrxc%2B49bstER%2F%2F5eQ1sXeOTcBNAs2a1TebGidbvoRV%2FwXEHL4Fnk%2BiVHpBisPkC60iw3EwTrwYDYed5ykpAMQdjZ%2BPD9M3r0CZXn8Cc351wsUos%2B%2FdteFpo3C0lo40WC2TPeXmofgYJz4ieUHE4JBgOAF0CawnPrq8Qaevie%2FEX2wur8tvnO%2Fc5fS8OGWYk%2FnR6MGpm3%2FLH1rGHQplU6%2FYp7FLftPhHByQkzBP66Yr6m0Kx2vg83NKz1jVBerc1aDrgRxYAqv0lU%2FLe4n1R845BE6aEvfmc8rh388KE9z279M5m0I7IwgmS5nQ9bmpOy6rBCv9igoN0JwVcyt9uvrzcyHZrTVVtOCK8hGnXAaAh3KzTEqhSI%2BEW%2FwC7UBk5D0l5I7ae5ciFdxFDepHSjauA3BH8CFegv0ibwvO2QWvpLtSzdRSgAgCrdQ1qIe9s6FO%2BSKH0ZBrXC33wMHJVX5zsaWry7yuVPjncNrndAlH6r%2BQv3cRA9UbPLzsk7fTqIfJwpF0b1M21P3I73EYBmHwWt1ONkj6Ag0FbytsL83B3BPtn3BZL%2Bu0o369UZsoHBsl7We5IGvEL0Kf%2BmJjUl3L295kpThH%2FESi4e5rSdcNQxfdC0w%2FWEKwAID0fWu0WbqDIsqI2pPnbF%2BJiScSyMMb69K3g0LO5OvcsHYnlrRdhzHdiCnnoFKbfGVfaaztqr77lxS8JRufXQ66GLud%2FYDax7UEkiRsQXpsTVQTUMCyJcTpS7lWLHB529t0t44wgKmzrzpbdgFr8HzZJv%2BKkTeV2oZLhiLNafBgfFDpDERaT8e6NFsJKLaABhBsuDVY5eqH%2FPxptG1GE1XeQlBqhmxFdBz6ctUdhNdBZ3J4LS1jwNclYIdOb7%2Bgo4SU4%2BKzcTJWico3J5MBuVu7baGpVgpCZLbghCkjeVvOm8ry%2Bhnu5E1RLX726UUKcCvtKYNquQ%2BNQ4dZYU%2BPl90PlE6BtbLaId5a4BooOPhDyvWF9zhsnp9t7WnM%2F0wNMiPUUi%2FWT2qbx0GZw28VK7mAjlmvtcn7DV2%2BV51cZ%2Fkk1VEYMKh3tT7eS1cf2OUy7mdzOC02dcy2hNvZ9G8dnNkf8dTY529kNiLTufVHHVAFi7qb43EoD111fXNWNS0TNB9QiEcyQkM4PTaCS5nWg6S583HQ5AHMfflgVrNZyzEd2BqYo9C7tmw7DkQu7q0tpzQuBTCFWu5G0hN1VxnFa%2Bh9yExxW3LdxxHUPD%2BdNjG3GdFwnugdW643cOunLZA3ut2toj0e9oSSCiXv0jjiTHg58%2F0T8n78%2BUSHpC%2FbUOHtEAsCD7prlR08xlXoCmV219X6ytl8lafjjXGE%2BJlwonHvGxHxXW1AYzal%2Fe1vmqHbYjpPtc5uTzsWUQ5ZikVx4iuwX%2Bb9EjMA%2F0g%2B3Vp8YCJEXZCs%2BTHv4UOlajR9LEOZvPAalV31EW1dlRWkruIbKtvzYA5fhi8AplS6DlwWMYdq30YLDZbu%2BxuhUOc7MsxAJbvTPRPzpxsDAHY4ThuDW8ROfv54hy0r1reLgscU4%2FyCCGxpUzseTThI%2BAcDqEH5YELOZO1uvW6EFIWOdKXky5po9zT3a0So0tVdbCtaHIe1yHFkYJgiLx3n82sQe6xSPP7l8b502rdjgu6Fari%2ByhWZVzPWYWr8Uj%2F62yBrABcCiC%2B%2Fhk2Bu6dy3AjlK%2F%2Fu8fi0lvwWQxGtHdOlGqny221LTW6abgvR4bY4xGGdtco%2FYTbV37RoAPJQ%2BaeyXjYwUgwqSh91m8JcvlUgzkq5S236pTSXtmv%2BS90hZAaYdKQIZjNS61qzzlHt3Mjn5NtkU%2BdD0mHBs68mZFxvGwFYlj%2Fa8OjnV3CAM9fjIbtkwua7b7lJ%2BXCQwZGlavRbHMNyrtP8D05Po%2BKliJuSos0dKrAlmzyWNc%2BPRIvfDMEzTbhhF%2BAvHb484RTLomQjw%2B7luZCOrI5Tk4tDXcZsnNpERhqZu17a2TOdS5jGTHoO8YSueuoqWzXPNQT%2FElaWAFUpjy9I9yt4Vr98YroHdPgAnRQn82BJ9ACPdKU5jiIWGlsvdH2l%2BA4F9NRKj1zpUejGK7BxM1%2FA3fUwadelZciurabbcyrqDlqH8K9%2Bfgxg6vaWstGLOOcglYIu%2F%2Fhy6M4RS%2BSpz6QiganrwF8pStg7j5l3WqGTukTOtIUvABt2LcUludnjh%2FeoeXslVhACFcqMtsQ778a5iNOYA%2FnzinNRpK%2FoWThD6OOF9xZmHtiGad9a6VuepCkHERywQcc2y6CxSDvejTpiwkIhduIXg7K1uU1tXKg94mnt4nIL%2FR4h56a6B2h1J562iXcF4RPRgxh0o%2FpeAB6jF00dfRbmyIl%2F9yJfb9FxBXtCeltlHKsxt2CKL65%2FAOb8sFGPHDLdf6S2xbxshq60uOhpupsYa4yBygdZdJbqYT2moLYtjlwbabCe8keANalCpsrP3r4IpVHROuuxP519uR6XSqHtMgbQ5bsMx6Ohp3OneqL0oUk1COG8B1rb9wqn%2B2Be8O6DtV3cD22ZBT0bL5yA%2FEkA2mE8EcweX3r0o3kzCTDgrqxZ4DlztJOS%2BbGk6itUsfTVHdJz6amRduzUlAZXGGcJvd3HVyRhmhvSO5AIDxDtvTUCWPvwsqhlMIB2x8BSHKGIluIYhMMeSrIf3z2brMdQyFqgaV09Beh5bY7DKrjR9LWXFL4mpE3FxnmySIIrKS%2B2fzUJoyzTiNNhnm8brZeol3YR%2BlmVcOWN1EFZUEpdgxoW8C1UPw4Z629lZlH7mOkWCBFdHSnjy6vFn3nknWqEmigs%2F8Wu3nk8M71T5n6%2BV0Hm9AtCjtnv9Ji4xen650tPn2J8Ie2k0jKFMvWtUyx32iSUjgNH9fwE%2FCOrz4EUR%2Bsjn9IKIfwSwflYxe%2B5fkuuC4qtroB1JGDG4MBMydfYJpWMlHXXZdswKISRyVUTAvGohm7Iz2cWTDW%2BE1n%2FS%2FPV3B320zcQlRF30D6H%2BojROpEa2Gv%2BnJKhKD2tcKZmO5UCbI8cpasEP8Vr55m0z6Hg28S%2BkwTzyYHS%2FsEskMDHdwbjjOjoaGuak2l1gjiiyET1xI8cKvr1kQQjutw2drLbuLPQ7jhDuqXfGjiCF3%2Fv7uJJ0FKXbFL1MAggYTHitZ9%2BbGwzfdajBZh2c3yYIPVSYztKtaguq%2BqkHLL%2F7YkvY5FeYNxI1TIawHulDaRFCgNVpGhyiFhdqojd2JCmBCSuwkR3T%2FgEZ5Nr9JcVYiCAPEDTxaL2cRP3RTt3UDAtWhFQlQniWw3IDGlNKPStwMcF%2BIry76xjBYeCZg3po4PyV97D38bO%2F5x4%2Fc953edzf4%2Fs%2Fm35bw%3D%3D%22%7D";default:throw new Error("Unknown viewId: "+e)}}const QA=Object.freeze(Object.defineProperty({__proto__:null,drawioEditUrl:YA},Symbol.toStringTag,{value:"Module"}));function WA(e){switch(e){case"deployment_prod":return`@startuml
title "TeamBridge - Deployment Production (DC1)"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ClientsWeb>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ClientsDesktop>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ClientsMobile>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<ProdEdge>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ProdObservability>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ProdApp>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<ProdData>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<Dr>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<TB>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<Push>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<InfraKeycloak>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<InfraLdap>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
rectangle "Clients" <<Clients>> as Clients {
  skinparam RectangleBorderColor<<Clients>> #0284c7
  skinparam RectangleFontColor<<Clients>> #0284c7
  skinparam RectangleBorderStyle<<Clients>> dashed

  rectangle "==Web Client" <<ClientsWeb>> as ClientsWeb
  rectangle "==Desktop Client" <<ClientsDesktop>> as ClientsDesktop
  rectangle "==Mobile Client" <<ClientsMobile>> as ClientsMobile
}
rectangle "Production (DC1)" <<Prod>> as Prod {
  skinparam RectangleBorderColor<<Prod>> #428a4f
  skinparam RectangleFontColor<<Prod>> #428a4f
  skinparam RectangleBorderStyle<<Prod>> dashed

  rectangle "==Edge Layer" <<ProdEdge>> as ProdEdge
  rectangle "==Observability Layer" <<ProdObservability>> as ProdObservability
  rectangle "==Kubernetes Cluster - TeamBridge" <<ProdApp>> as ProdApp
  rectangle "==Data Layer" <<ProdData>> as ProdData
}
rectangle "==Disaster Recovery (DC2)" <<Dr>> as Dr
rectangle "==TeamBridge\\n\\nКорпоративная чат-платформа:\\nrealtime сообщения, файлы, поиск, уведомления и интеграции" <<TB>> as TB
rectangle "Infrastructure" <<Infra>> as Infra {
  skinparam RectangleBorderColor<<Infra>> #0284c7
  skinparam RectangleFontColor<<Infra>> #0284c7
  skinparam RectangleBorderStyle<<Infra>> dashed

  rectangle "==Keycloak (OIDC/SSO)" <<InfraKeycloak>> as InfraKeycloak
  rectangle "==LDAP / Active Directory" <<InfraLdap>> as InfraLdap
}
rectangle "==Push Providers (APNs/FCM/WebPush)" <<Push>> as Push

ProdEdge .[#8D8D8D,thickness=2].> ProdApp : <color:#8D8D8D>[...]
ProdApp .[#6366f1,thickness=2].> ProdData
ProdData .[#6366f1,thickness=2].> ProdApp : <color:#6366f1>[queue]
ProdObservability .[#8D8D8D,thickness=2].> ProdApp : <color:#8D8D8D>[...]
ProdApp .[#8D8D8D,thickness=2].> TB : <color:#8D8D8D>runs
ProdApp .[#15803d,thickness=2].> Push : <color:#15803d>[HTTPS]
ProdData .[#6366f1,thickness=2].> Dr : <color:#6366f1>[...]
ProdData .[#8D8D8D,thickness=2].> TB : <color:#8D8D8D>hosts
ClientsWeb .[#8D8D8D,thickness=2].> ProdEdge : <color:#8D8D8D>[...]
ClientsDesktop .[#8D8D8D,thickness=2].> ProdEdge : <color:#8D8D8D>[...]
ClientsMobile .[#8D8D8D,thickness=2].> ProdEdge : <color:#8D8D8D>[...]
ProdApp .[#8D8D8D,thickness=2].> InfraKeycloak : <color:#8D8D8D>OIDC
TB .[#8D8D8D,thickness=2].> InfraKeycloak : <color:#8D8D8D>[...]
InfraKeycloak .[#8D8D8D,thickness=2].> InfraLdap : <color:#8D8D8D>[...]
TB .[#15803d,thickness=2].> Push : <color:#15803d>Push Message Events\\n<size:8>[<color:#15803d>HTTPS]</size>
@enduml
`;case"deployment_dr":return`@startuml
title "TeamBridge - Deployment DR (DC2)"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam database<<ProdDataPostgres_chat>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam queue<<ProdDataKafka_cluster>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam database<<ProdDataS3_cluster>>{
  BackgroundColor #0284c7
  FontColor #f0f9ff
  BorderColor #0369a1
}
skinparam rectangle<<DrStandby_data>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<DrStandby_app>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "Production (DC1)" <<Prod>> as Prod {
  skinparam RectangleBorderColor<<Prod>> #0284c7
  skinparam RectangleFontColor<<Prod>> #0284c7
  skinparam RectangleBorderStyle<<Prod>> dashed

  database "==PostgreSQL Chat (primary + replica)" <<ProdDataPostgres_chat>> as ProdDataPostgres_chat
  queue "==Kafka Cluster (3 brokers)" <<ProdDataKafka_cluster>> as ProdDataKafka_cluster
  database "==S3/MinIO Cluster" <<ProdDataS3_cluster>> as ProdDataS3_cluster
}
rectangle "Disaster Recovery (DC2)" <<Dr>> as Dr {
  skinparam RectangleBorderColor<<Dr>> #428a4f
  skinparam RectangleFontColor<<Dr>> #428a4f
  skinparam RectangleBorderStyle<<Dr>> dashed

  rectangle "==Standby Data Layer" <<DrStandby_data>> as DrStandby_data
  rectangle "==Warm Standby Kubernetes" <<DrStandby_app>> as DrStandby_app
}

DrStandby_data .[#6366f1,thickness=2].> DrStandby_app : <color:#6366f1>promote on failover\\n<size:8>[<color:#6366f1>TCP]</size>
ProdDataPostgres_chat .[#6366f1,thickness=2].> DrStandby_data : <color:#6366f1>async replication\\n<size:8>[<color:#6366f1>TCP]</size>
ProdDataKafka_cluster .[#6366f1,thickness=2].> DrStandby_data : <color:#6366f1>mirror topics\\n<size:8>[<color:#6366f1>queue]</size>
ProdDataS3_cluster .[#6366f1,thickness=2].> DrStandby_data : <color:#6366f1>bucket replication\\n<size:8>[<color:#6366f1>HTTP]</size>
@enduml
`;case"deployment_mapping":return`@startuml
title "TeamBridge - Logical to Physical Mapping"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam rectangle<<ProdAppApi_deploy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ProdAppWs_deploy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ProdAppSearch_deploy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ProdAppFile_deploy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ProdAppNotification_deploy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ProdAppIntegration_deploy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<ProdAppChat_deploy>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<ProdDataKeydb_cluster>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam queue<<ProdDataKafka_cluster>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<ProdDataPostgres_chat>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<ProdDataOpensearch_cluster>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<ProdDataPostgres_file>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<ProdDataS3_cluster>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam database<<ProdDataPostgres_notif>>{
  BackgroundColor #64748b
  FontColor #f8fafc
  BorderColor #475569
}
skinparam rectangle<<TBApi_gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<TBIntegration>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<TBChatChat_service>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<TBSearchSearch_service>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<TBFsFile_service>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<TBNotificationPush_service>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<TBChatPostgres>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<TBSearchOpensearch>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<TBFsDb_fs>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<TBFsS3>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam queue<<TBKafka>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<TBNotificationPostgres>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam rectangle<<TBWs_gateway>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
skinparam database<<TBKeydb>>{
  BackgroundColor #428a4f
  FontColor #f8fafc
  BorderColor #2d5d39
}
rectangle "Production (DC1)" <<Prod>> as Prod {
  skinparam RectangleBorderColor<<Prod>> #64748b
  skinparam RectangleFontColor<<Prod>> #64748b
  skinparam RectangleBorderStyle<<Prod>> dashed

  rectangle "Kubernetes Cluster - TeamBridge" <<ProdApp>> as ProdApp {
    skinparam RectangleBorderColor<<ProdApp>> #64748b
    skinparam RectangleFontColor<<ProdApp>> #64748b
    skinparam RectangleBorderStyle<<ProdApp>> dashed

    rectangle "==API Gateway Deployment (3-6 pods)" <<ProdAppApi_deploy>> as ProdAppApi_deploy
    rectangle "==WebSocket Gateway Deployment (4-8 pods)" <<ProdAppWs_deploy>> as ProdAppWs_deploy
    rectangle "==Search Service Deployment (2-4 pods)" <<ProdAppSearch_deploy>> as ProdAppSearch_deploy
    rectangle "==File Service Deployment (2-4 pods)" <<ProdAppFile_deploy>> as ProdAppFile_deploy
    rectangle "==Notification Service Deployment (2-4 pods)" <<ProdAppNotification_deploy>> as ProdAppNotification_deploy
    rectangle "==Integration Service Deployment (2-4 pods)" <<ProdAppIntegration_deploy>> as ProdAppIntegration_deploy
    rectangle "==Chat Service Deployment (3-6 pods)" <<ProdAppChat_deploy>> as ProdAppChat_deploy
  }
  rectangle "Data Layer" <<ProdData>> as ProdData {
    skinparam RectangleBorderColor<<ProdData>> #64748b
    skinparam RectangleFontColor<<ProdData>> #64748b
    skinparam RectangleBorderStyle<<ProdData>> dashed

    database "==KeyDB Cluster (3 nodes)" <<ProdDataKeydb_cluster>> as ProdDataKeydb_cluster
    queue "==Kafka Cluster (3 brokers)" <<ProdDataKafka_cluster>> as ProdDataKafka_cluster
    database "==PostgreSQL Chat (primary + replica)" <<ProdDataPostgres_chat>> as ProdDataPostgres_chat
    database "==OpenSearch Cluster (3 nodes)" <<ProdDataOpensearch_cluster>> as ProdDataOpensearch_cluster
    database "==PostgreSQL File Metadata (primary + replica)" <<ProdDataPostgres_file>> as ProdDataPostgres_file
    database "==S3/MinIO Cluster" <<ProdDataS3_cluster>> as ProdDataS3_cluster
    database "==PostgreSQL Notification (primary + replica)" <<ProdDataPostgres_notif>> as ProdDataPostgres_notif
  }
}
rectangle "TeamBridge" <<TB>> as TB {
  skinparam RectangleBorderColor<<TB>> #428a4f
  skinparam RectangleFontColor<<TB>> #428a4f
  skinparam RectangleBorderStyle<<TB>> dashed

  rectangle "==API Gateway\\n\\nREST, auth, rate limit" <<TBApi_gateway>> as TBApi_gateway
  rectangle "Chat System" <<TBChat>> as TBChat {
    skinparam RectangleBorderColor<<TBChat>> #428a4f
    skinparam RectangleFontColor<<TBChat>> #428a4f
    skinparam RectangleBorderStyle<<TBChat>> dashed

    rectangle "==Chat Service\\n\\nОбработка сообщений, чатов, участников, администрирование чатов" <<TBChatChat_service>> as TBChatChat_service
    database "==Chat DB\\n<size:10>[[PostgreSql]]</size>\\n\\nЧаты, сообщения, участники" <<TBChatPostgres>> as TBChatPostgres
  }
  rectangle "Searching System" <<TBSearch>> as TBSearch {
    skinparam RectangleBorderColor<<TBSearch>> #428a4f
    skinparam RectangleFontColor<<TBSearch>> #428a4f
    skinparam RectangleBorderStyle<<TBSearch>> dashed

    rectangle "==Search Service\\n\\nИндексация и поиск" <<TBSearchSearch_service>> as TBSearchSearch_service
    database "==OpenSearch\\n<size:10>[[OpenSearch]]</size>\\n\\nПоиск" <<TBSearchOpensearch>> as TBSearchOpensearch
  }
  rectangle "File Management" <<TBFs>> as TBFs {
    skinparam RectangleBorderColor<<TBFs>> #428a4f
    skinparam RectangleFontColor<<TBFs>> #428a4f
    skinparam RectangleBorderStyle<<TBFs>> dashed

    rectangle "==File Service\\n\\nЗагрузка/чтение файлов" <<TBFsFile_service>> as TBFsFile_service
    database "==File Metadata DB\\n<size:10>[[PostgreSql]]</size>\\n\\nМетаданные файлов" <<TBFsDb_fs>> as TBFsDb_fs
    database "==S3\\n<size:10>[[Minio]]</size>\\n\\nХранение файлов" <<TBFsS3>> as TBFsS3
  }
  rectangle "Notification System" <<TBNotification>> as TBNotification {
    skinparam RectangleBorderColor<<TBNotification>> #428a4f
    skinparam RectangleFontColor<<TBNotification>> #428a4f
    skinparam RectangleBorderStyle<<TBNotification>> dashed

    rectangle "==Notification Service\\n\\nPush Policy и доставка уведомлений" <<TBNotificationPush_service>> as TBNotificationPush_service
    database "==Notification Settings DB\\n<size:10>[[PostgreSql]]</size>\\n\\nНастройки push уведомлений" <<TBNotificationPostgres>> as TBNotificationPostgres
  }
  rectangle "==Plugin Service\\n\\nВнешние коннекторы и webhooks" <<TBIntegration>> as TBIntegration
  queue "==Message Bus\\n<size:10>[[Kafka]]</size>" <<TBKafka>> as TBKafka
  rectangle "==WebSocket Gateway\\n\\nWSS соединения, realtime доставка, presence routing" <<TBWs_gateway>> as TBWs_gateway
  database "==KeyDB / Redis\\n<size:10>[[KeyDB/Redis]]</size>\\n\\npresence/sessions" <<TBKeydb>> as TBKeydb
}

TBApi_gateway .[#6366f1,thickness=2].> TBChatChat_service : <color:#6366f1>[GRPC]
TBApi_gateway .[#6366f1,thickness=2].> TBSearchSearch_service : <color:#6366f1>Поиск пользователей/сообщений\\n<size:8>[<color:#6366f1>GRPC]</size>
TBApi_gateway .[#6366f1,thickness=2].> TBFsFile_service : <color:#6366f1>Работа с файлами\\n<size:8>[<color:#6366f1>GRPC]</size>
TBApi_gateway .[#6366f1,thickness=2].> TBNotificationPush_service : <color:#6366f1>Настройка push уведомлений\\n<size:8>[<color:#6366f1>GRPC]</size>
TBApi_gateway .[#8D8D8D,thickness=2].> TBIntegration : <color:#8D8D8D>REST
TBChatChat_service .[#6366f1,thickness=2].> TBKafka : <color:#6366f1>Publish/Consume Messages\\n<size:8>[<color:#6366f1>queue]</size>
TBSearchSearch_service .[#6366f1,thickness=2].> TBKafka : <color:#6366f1>Consume Message Events\\n<size:8>[<color:#6366f1>queue]</size>
TBNotificationPush_service .[#6366f1,thickness=2].> TBKafka : <color:#6366f1>Consume Message Created Events\\n<size:8>[<color:#6366f1>queue]</size>
TBIntegration .[#8D8D8D,thickness=2].> TBKafka : <color:#8D8D8D>consume/produce events
TBKafka .[#6366f1,thickness=2].> TBWs_gateway : <color:#6366f1>message events\\n<size:8>[<color:#6366f1>queue]</size>
TBWs_gateway .[#6366f1,thickness=2].> TBKeydb : <color:#6366f1>Хранение WS сессий и статуса присутствия пользователей с TTL\\n<size:8>[<color:#6366f1>TCP]</size>
TBNotificationPush_service .[#6366f1,thickness=2].> TBKeydb : <color:#6366f1>read active sessions\\n<size:8>[<color:#6366f1>TCP]</size>
TBChatChat_service .[#6366f1,thickness=2].> TBChatPostgres : <color:#6366f1>messages/chats/users\\n<size:8>[<color:#6366f1>TCP]</size>
TBFsFile_service .[#6366f1,thickness=2].> TBFsDb_fs : <color:#6366f1>file metadata\\n<size:8>[<color:#6366f1>TCP]</size>
TBNotificationPush_service .[#6366f1,thickness=2].> TBNotificationPostgres : <color:#6366f1>notification settings\\n<size:8>[<color:#6366f1>TCP]</size>
TBSearchSearch_service .[#6366f1,thickness=2].> TBSearchOpensearch : <color:#6366f1>indexing/searching\\n<size:8>[<color:#6366f1>HTTP]</size>
TBFsFile_service .[#6366f1,thickness=2].> TBFsS3 : <color:#6366f1>Store/Read Files\\n<size:8>[<color:#6366f1>HTTP]</size>
ProdAppApi_deploy .[#8D8D8D,thickness=2].> TBApi_gateway : <color:#8D8D8D>runs
ProdAppWs_deploy .[#8D8D8D,thickness=2].> TBWs_gateway : <color:#8D8D8D>runs
ProdAppChat_deploy .[#8D8D8D,thickness=2].> TBChatChat_service : <color:#8D8D8D>runs
ProdAppSearch_deploy .[#8D8D8D,thickness=2].> TBSearchSearch_service : <color:#8D8D8D>runs
ProdAppFile_deploy .[#8D8D8D,thickness=2].> TBFsFile_service : <color:#8D8D8D>runs
ProdAppNotification_deploy .[#8D8D8D,thickness=2].> TBNotificationPush_service : <color:#8D8D8D>runs
ProdAppIntegration_deploy .[#8D8D8D,thickness=2].> TBIntegration : <color:#8D8D8D>runs
ProdAppApi_deploy .[#6366f1,thickness=2].> ProdAppChat_deploy : <color:#6366f1>[GRPC]
ProdAppApi_deploy .[#6366f1,thickness=2].> ProdAppSearch_deploy : <color:#6366f1>[GRPC]
ProdAppApi_deploy .[#6366f1,thickness=2].> ProdAppFile_deploy : <color:#6366f1>[GRPC]
ProdAppApi_deploy .[#6366f1,thickness=2].> ProdAppNotification_deploy : <color:#6366f1>[GRPC]
ProdAppApi_deploy .[#6366f1,thickness=2].> ProdAppIntegration_deploy : <color:#6366f1>[GRPC]
ProdAppWs_deploy .[#6366f1,thickness=2].> ProdAppChat_deploy : <color:#6366f1>[GRPC]
ProdAppWs_deploy .[#6366f1,thickness=2].> ProdDataKeydb_cluster : <color:#6366f1>[TCP]
ProdAppChat_deploy .[#6366f1,thickness=2].> ProdDataKafka_cluster : <color:#6366f1>[queue]
ProdAppChat_deploy .[#6366f1,thickness=2].> ProdDataPostgres_chat : <color:#6366f1>[TCP]
ProdAppSearch_deploy .[#6366f1,thickness=2].> ProdDataKafka_cluster : <color:#6366f1>[queue]
ProdAppSearch_deploy .[#6366f1,thickness=2].> ProdDataOpensearch_cluster : <color:#6366f1>[HTTP]
ProdAppFile_deploy .[#6366f1,thickness=2].> ProdDataPostgres_file : <color:#6366f1>[TCP]
ProdAppFile_deploy .[#6366f1,thickness=2].> ProdDataS3_cluster : <color:#6366f1>[HTTP]
ProdAppNotification_deploy .[#6366f1,thickness=2].> ProdDataKafka_cluster : <color:#6366f1>[queue]
ProdAppNotification_deploy .[#6366f1,thickness=2].> ProdDataPostgres_notif : <color:#6366f1>[TCP]
ProdDataKafka_cluster .[#8D8D8D,thickness=2].> TBKafka : <color:#8D8D8D>hosts
ProdDataKafka_cluster .[#6366f1,thickness=2].> ProdAppWs_deploy : <color:#6366f1>[queue]
ProdDataKeydb_cluster .[#8D8D8D,thickness=2].> TBKeydb : <color:#8D8D8D>hosts
ProdDataPostgres_chat .[#8D8D8D,thickness=2].> TBChatPostgres : <color:#8D8D8D>hosts
ProdDataPostgres_file .[#8D8D8D,thickness=2].> TBFsDb_fs : <color:#8D8D8D>hosts
ProdDataPostgres_notif .[#8D8D8D,thickness=2].> TBNotificationPostgres : <color:#8D8D8D>hosts
ProdDataOpensearch_cluster .[#8D8D8D,thickness=2].> TBSearchOpensearch : <color:#8D8D8D>hosts
ProdDataS3_cluster .[#8D8D8D,thickness=2].> TBFsS3 : <color:#8D8D8D>hosts
@enduml
`;case"index":return`@startuml
title "TeamBridge - Landscape"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Employee>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam person<<Admin>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<Clients>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Prod>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Dr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<TB>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Infra>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Push>>{
  BackgroundColor #827a8e
  FontColor #ffffff
  BorderColor #6c6477
}
person "==Сотрудник" <<Employee>> as Employee
person "==Администратор" <<Admin>> as Admin
rectangle "==Clients" <<Clients>> as Clients
rectangle "==Production (DC1)" <<Prod>> as Prod
rectangle "==Disaster Recovery (DC2)" <<Dr>> as Dr
rectangle "==TeamBridge\\n\\nКорпоративная чат-платформа:\\nrealtime сообщения, файлы, поиск, уведомления и интеграции" <<TB>> as TB
rectangle "==Infrastructure\\n\\nInfrastructure services" <<Infra>> as Infra
rectangle "==Push Providers (APNs/FCM/WebPush)" <<Push>> as Push

Prod .[#6366f1,thickness=2].> Dr : <color:#6366f1>[...]
Prod .[#8D8D8D,thickness=2].> TB : <color:#8D8D8D>[...]
Prod .[#8D8D8D,thickness=2].> Infra : <color:#8D8D8D>OIDC
Prod .[#15803d,thickness=2].> Push : <color:#15803d>[HTTPS]
Clients .[#8D8D8D,thickness=2].> Prod : <color:#8D8D8D>[...]
Employee .[#8D8D8D,thickness=2].> Clients : <color:#8D8D8D>использует
Admin .[#8D8D8D,thickness=2].> Clients : <color:#8D8D8D>администрирует
TB .[#8D8D8D,thickness=2].> Infra : <color:#8D8D8D>[...]
TB .[#15803d,thickness=2].> Push : <color:#15803d>Push Message Events\\n<size:8>[<color:#15803d>HTTPS]</size>
Clients .[#8D8D8D,thickness=2].> TB : <color:#8D8D8D>[...]
@enduml
`;case"context":return`@startuml
title "TeamBridge - Context"
top to bottom direction

hide stereotype
skinparam ranksep 60
skinparam nodesep 30
skinparam {
  arrowFontSize 10
  defaultTextAlignment center
  wrapWidth 200
  maxMessageSize 100
  shadowing false
}

skinparam person<<Admin>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam person<<Employee>>{
  BackgroundColor #6366f1
  FontColor #eef2ff
  BorderColor #4f46e5
}
skinparam rectangle<<ClientsWeb>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ClientsDesktop>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<ClientsMobile>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Prod>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<Dr>>{
  BackgroundColor #3b82f6
  FontColor #eff6ff
  BorderColor #2563eb
}
skinparam rectangle<<TBApi_gateway>>{
  BackgroundColor #23a2d9
  FontColor #ffffff
  BorderColor #1892c5
}
skinparam rectangle<<TBFsFile_service>>{
  BackgroundColor #23a2d9
  FontColor #ffffff
  BorderColor #1892c5
}
skinparam rectangle<<TBChatChat_service>>{
  BackgroundColor #23a2d9
  FontColor #ffffff
  BorderColor #1892c5
}
skinparam rectangle<<TBSearchSearch_service>>{
  BackgroundColor #23a2d9
  FontColor #ffffff
  BorderColor #1892c5
}
skinparam rectangle<<TBNotificationPush_service>>{
  BackgroundColor #23a2d9
  FontColor #ffffff
  BorderColor #1892c5
}
skinparam database<<TBFsS3>>{
  BackgroundColor #858484
  FontColor #ffffff
  BorderColor #747172
}
skinparam database<<TBFsDb_fs>>{
  BackgroundColor #858484
  FontColor #ffffff
  BorderColor #747172
}
skinparam database<<TBChatPostgres>>{
  BackgroundColor #858484
  FontColor #ffffff
  BorderColor #747172
}
skinparam database<<TBSearchOpensearch>>{
  BackgroundColor #858484
  FontColor #ffffff
  BorderColor #747172
}
skinparam rectangle<<Push>>{
  BackgroundColor #827a8e
  FontColor #ffffff
  BorderColor #6c6477
}
skinparam database<<TBNotificationPostgres>>{
  BackgroundColor #858484
  FontColor #ffffff
  BorderColor #747172
}
skinparam queue<<TBKafka>>{
  BackgroundColor #858484
  FontColor #ffffff
  BorderColor #747172
}
skinparam rectangle<<TBWs_gateway>>{
  BackgroundColor #23a2d9
  FontColor #ffffff
  BorderColor #1892c5
}
skinparam database<<TBKeydb>>{
  BackgroundColor #858484
  FontColor #ffffff
  BorderColor #747172
}
skinparam rectangle<<InfraKeycloak>>{
  BackgroundColor #827a8e
  FontColor #ffffff
  BorderColor #6c6477
}
skinparam rectangle<<InfraLdap>>{
  BackgroundColor #827a8e
  FontColor #ffffff
  BorderColor #6c6477
}
skinparam rectangle<<InfraConfig_service>>{
  BackgroundColor #827a8e
  FontColor #ffffff
  BorderColor #6c6477
}
skinparam rectangle<<InfraVictoria_metrics>>{
  BackgroundColor #827a8e
  FontColor #ffffff
  BorderColor #6c6477
}
skinparam rectangle<<InfraVault>>{
  BackgroundColor #827a8e
  FontColor #ffffff
  BorderColor #6c6477
}
person "==Администратор" <<Admin>> as Admin
person "==Сотрудник" <<Employee>> as Employee
rectangle "Clients" <<Clients>> as Clients {
  skinparam RectangleBorderColor<<Clients>> #3b82f6
  skinparam RectangleFontColor<<Clients>> #3b82f6
  skinparam RectangleBorderStyle<<Clients>> dashed

  rectangle "==Web Client" <<ClientsWeb>> as ClientsWeb
  rectangle "==Desktop Client" <<ClientsDesktop>> as ClientsDesktop
  rectangle "==Mobile Client" <<ClientsMobile>> as ClientsMobile
}
rectangle "==Production (DC1)" <<Prod>> as Prod
rectangle "==Disaster Recovery (DC2)" <<Dr>> as Dr
rectangle "TeamBridge" <<TB>> as TB {
  skinparam RectangleBorderColor<<TB>> #3b82f6
  skinparam RectangleFontColor<<TB>> #3b82f6
  skinparam RectangleBorderStyle<<TB>> dashed

  rectangle "==API Gateway\\n\\nREST, auth, rate limit" <<TBApi_gateway>> as TBApi_gateway
  rectangle "File Management" <<TBFs>> as TBFs {
    skinparam RectangleBorderColor<<TBFs>> #3b82f6
    skinparam RectangleFontColor<<TBFs>> #3b82f6
    skinparam RectangleBorderStyle<<TBFs>> dashed

    rectangle "==File Service\\n\\nЗагрузка/чтение файлов" <<TBFsFile_service>> as TBFsFile_service
    database "==S3\\n<size:10>[[Minio]]</size>\\n\\nХранение файлов" <<TBFsS3>> as TBFsS3
    database "==File Metadata DB\\n<size:10>[[PostgreSql]]</size>\\n\\nМетаданные файлов" <<TBFsDb_fs>> as TBFsDb_fs
  }
  rectangle "Chat System" <<TBChat>> as TBChat {
    skinparam RectangleBorderColor<<TBChat>> #3b82f6
    skinparam RectangleFontColor<<TBChat>> #3b82f6
    skinparam RectangleBorderStyle<<TBChat>> dashed

    rectangle "==Chat Service\\n\\nОбработка сообщений, чатов, участников, администрирование чатов" <<TBChatChat_service>> as TBChatChat_service
    database "==Chat DB\\n<size:10>[[PostgreSql]]</size>\\n\\nЧаты, сообщения, участники" <<TBChatPostgres>> as TBChatPostgres
  }
  rectangle "Searching System" <<TBSearch>> as TBSearch {
    skinparam RectangleBorderColor<<TBSearch>> #3b82f6
    skinparam RectangleFontColor<<TBSearch>> #3b82f6
    skinparam RectangleBorderStyle<<TBSearch>> dashed

    rectangle "==Search Service\\n\\nИндексация и поиск" <<TBSearchSearch_service>> as TBSearchSearch_service
    database "==OpenSearch\\n<size:10>[[OpenSearch]]</size>\\n\\nПоиск" <<TBSearchOpensearch>> as TBSearchOpensearch
  }
  rectangle "Notification System" <<TBNotification>> as TBNotification {
    skinparam RectangleBorderColor<<TBNotification>> #3b82f6
    skinparam RectangleFontColor<<TBNotification>> #3b82f6
    skinparam RectangleBorderStyle<<TBNotification>> dashed

    rectangle "==Notification Service\\n\\nPush Policy и доставка уведомлений" <<TBNotificationPush_service>> as TBNotificationPush_service
    database "==Notification Settings DB\\n<size:10>[[PostgreSql]]</size>\\n\\nНастройки push уведомлений" <<TBNotificationPostgres>> as TBNotificationPostgres
  }
  queue "==Message Bus\\n<size:10>[[Kafka]]</size>" <<TBKafka>> as TBKafka
  rectangle "==WebSocket Gateway\\n\\nWSS соединения, realtime доставка, presence routing" <<TBWs_gateway>> as TBWs_gateway
  database "==KeyDB / Redis\\n<size:10>[[KeyDB/Redis]]</size>\\n\\npresence/sessions" <<TBKeydb>> as TBKeydb
}
rectangle "==Push Providers (APNs/FCM/WebPush)" <<Push>> as Push
rectangle "Infrastructure" <<Infra>> as Infra {
  skinparam RectangleBorderColor<<Infra>> #3b82f6
  skinparam RectangleFontColor<<Infra>> #3b82f6
  skinparam RectangleBorderStyle<<Infra>> dashed

  rectangle "==Keycloak (OIDC/SSO)" <<InfraKeycloak>> as InfraKeycloak
  rectangle "==LDAP / Active Directory" <<InfraLdap>> as InfraLdap
  rectangle "==Configuration Service\\n<size:10>[[Consul]]</size>" <<InfraConfig_service>> as InfraConfig_service
  rectangle "==VictoriaMetrics" <<InfraVictoria_metrics>> as InfraVictoria_metrics
  rectangle "==Vault" <<InfraVault>> as InfraVault
}

Prod .[#6366f1,thickness=2].> Dr : <color:#6366f1>[...]
Prod .[#15803d,thickness=2].> Push : <color:#15803d>[HTTPS]
Admin .[#8D8D8D,thickness=2].> ClientsWeb : <color:#8D8D8D>администрирует
ClientsWeb .[#8D8D8D,thickness=2].> Prod : <color:#8D8D8D>[...]
ClientsDesktop .[#8D8D8D,thickness=2].> Prod : <color:#8D8D8D>[...]
ClientsMobile .[#8D8D8D,thickness=2].> Prod : <color:#8D8D8D>[...]
Prod .[#8D8D8D,thickness=2].> TBApi_gateway : <color:#8D8D8D>runs
Prod .[#8D8D8D,thickness=2].> TBFsFile_service : <color:#8D8D8D>runs
Prod .[#8D8D8D,thickness=2].> TBFsS3 : <color:#8D8D8D>hosts
Prod .[#8D8D8D,thickness=2].> TBFsDb_fs : <color:#8D8D8D>hosts
TBApi_gateway .[#6366f1,thickness=2].> TBFsFile_service : <color:#6366f1>Работа с файлами\\n<size:8>[<color:#6366f1>GRPC]</size>
TBFsFile_service .[#6366f1,thickness=2].> TBFsS3 : <color:#6366f1>Store/Read Files\\n<size:8>[<color:#6366f1>HTTP]</size>
TBFsFile_service .[#6366f1,thickness=2].> TBFsDb_fs : <color:#6366f1>file metadata\\n<size:8>[<color:#6366f1>TCP]</size>
Prod .[#8D8D8D,thickness=2].> TBWs_gateway : <color:#8D8D8D>runs
Prod .[#8D8D8D,thickness=2].> TBChatChat_service : <color:#8D8D8D>runs
Prod .[#8D8D8D,thickness=2].> TBChatPostgres : <color:#8D8D8D>hosts
TBApi_gateway .[#6366f1,thickness=2].> TBChatChat_service : <color:#6366f1>[GRPC]
TBChatChat_service .[#6366f1,thickness=2].> TBChatPostgres : <color:#6366f1>messages/chats/users\\n<size:8>[<color:#6366f1>TCP]</size>
Prod .[#8D8D8D,thickness=2].> TBSearchSearch_service : <color:#8D8D8D>runs
TBApi_gateway .[#6366f1,thickness=2].> TBSearchSearch_service : <color:#6366f1>Поиск пользователей/сообщений\\n<size:8>[<color:#6366f1>GRPC]</size>
Prod .[#8D8D8D,thickness=2].> TBSearchOpensearch : <color:#8D8D8D>hosts
TBSearchSearch_service .[#6366f1,thickness=2].> TBSearchOpensearch : <color:#6366f1>indexing/searching\\n<size:8>[<color:#6366f1>HTTP]</size>
Prod .[#8D8D8D,thickness=2].> TBNotificationPush_service : <color:#8D8D8D>runs
TBApi_gateway .[#6366f1,thickness=2].> TBNotificationPush_service : <color:#6366f1>Настройка push уведомлений\\n<size:8>[<color:#6366f1>GRPC]</size>
TBNotificationPush_service .[#15803d,thickness=2].> Push : <color:#15803d>Push Message Events\\n<size:8>[<color:#15803d>HTTPS]</size>
Prod .[#8D8D8D,thickness=2].> TBNotificationPostgres : <color:#8D8D8D>hosts
TBNotificationPush_service .[#6366f1,thickness=2].> TBNotificationPostgres : <color:#6366f1>notification settings\\n<size:8>[<color:#6366f1>TCP]</size>
Prod .[#8D8D8D,thickness=2].> TBKeydb : <color:#8D8D8D>hosts
TBWs_gateway .[#6366f1,thickness=2].> TBKeydb : <color:#6366f1>Хранение WS сессий и статуса присутствия пользователей с TTL\\n<size:8>[<color:#6366f1>TCP]</size>
TBNotificationPush_service .[#6366f1,thickness=2].> TBKeydb : <color:#6366f1>read active sessions\\n<size:8>[<color:#6366f1>TCP]</size>
Prod .[#8D8D8D,thickness=2].> TBKafka : <color:#8D8D8D>hosts
TBChatChat_service .[#6366f1,thickness=2].> TBKafka : <color:#6366f1>Publish/Consume Messages\\n<size:8>[<color:#6366f1>queue]</size>
TBSearchSearch_service .[#6366f1,thickness=2].> TBKafka : <color:#6366f1>Consume Message Events\\n<size:8>[<color:#6366f1>queue]</size>
TBNotificationPush_service .[#6366f1,thickness=2].> TBKafka : <color:#6366f1>Consume Message Created Events\\n<size:8>[<color:#6366f1>queue]</size>
TBKafka .[#6366f1,thickness=2].> TBWs_gateway : <color:#6366f1>message events\\n<size:8>[<color:#6366f1>queue]</size>
Prod .[#8D8D8D,thickness=2].> InfraKeycloak : <color:#8D8D8D>OIDC
TBApi_gateway .[#8D8D8D,thickness=2].> InfraKeycloak : <color:#8D8D8D>OIDC / JWT
TBWs_gateway .[#8D8D8D,thickness=2].> InfraKeycloak : <color:#8D8D8D>JWT verify (JWKS)
TBChatChat_service .[#8D8D8D,thickness=2].> InfraKeycloak : <color:#8D8D8D>profile sync
InfraKeycloak .[#8D8D8D,thickness=2].> InfraLdap : <color:#8D8D8D>[...]
Employee .[#8D8D8D,thickness=2].> Clients : <color:#8D8D8D>использует
Clients .[#15803d,thickness=2].> TBApi_gateway : <color:#15803d>Синхронные операции: поиск, CRUD, администрирование, загрузка/чтение файлов\\n<size:8>[<color:#15803d>HTTPS]</size>
Clients .[#6366f1,thickness=2].> TBWs_gateway : <color:#6366f1>Realtime соединение, получение новых сообщений, событий присутствия и обновлений чатов\\n<size:8>[<color:#6366f1>WSS]</size>
@enduml
`;default:throw new Error("Unknown viewId: "+e)}}const JA=Object.freeze(Object.defineProperty({__proto__:null,pumlSource:WA},Symbol.toStringTag,{value:"Module"}));function eS(e){switch(e){case"deployment_prod":return`---
title: "TeamBridge - Deployment Production (DC1)"
---
graph TB
  subgraph Clients["\`Clients\`"]
    Clients.Web@{ shape: rounded, label: "Web Client" }
    Clients.Desktop@{ shape: rounded, label: "Desktop Client" }
    Clients.Mobile@{ shape: rounded, label: "Mobile Client" }
  end
  subgraph Prod["\`Production (DC1)\`"]
    Prod.Edge@{ shape: rectangle, label: "Edge Layer" }
    Prod.Observability@{ shape: rectangle, label: "Observability Layer" }
    Prod.App@{ shape: rectangle, label: "Kubernetes Cluster - TeamBridge" }
    Prod.Data@{ shape: rectangle, label: "Data Layer" }
  end
  Dr@{ shape: rectangle, label: "Disaster Recovery (DC2)" }
  TB@{ shape: rectangle, label: "TeamBridge" }
  subgraph Infra["\`Infrastructure\`"]
    Infra.Keycloak@{ shape: rectangle, label: "Keycloak (OIDC/SSO)" }
    Infra.Ldap@{ shape: rectangle, label: "LDAP / Active Directory" }
  end
  Push@{ shape: rectangle, label: "Push Providers (APNs/FCM/WebPush)" }
  Prod.Edge -. "\`[...]\`" .-> Prod.App
  Prod.App -.-> Prod.Data
  Prod.Data -. "\`[queue]\`" .-> Prod.App
  Prod.Observability -. "\`[...]\`" .-> Prod.App
  Prod.App -. "\`runs\`" .-> TB
  Prod.App -. "\`[HTTPS]\`" .-> Push
  Prod.Data -. "\`[...]\`" .-> Dr
  Prod.Data -. "\`hosts\`" .-> TB
  Clients.Web -. "\`[...]\`" .-> Prod.Edge
  Clients.Desktop -. "\`[...]\`" .-> Prod.Edge
  Clients.Mobile -. "\`[...]\`" .-> Prod.Edge
  Prod.App -. "\`OIDC\`" .-> Infra.Keycloak
  TB -. "\`[...]\`" .-> Infra.Keycloak
  Infra.Keycloak -. "\`[...]\`" .-> Infra.Ldap
  TB -. "\`Push Message Events\`" .-> Push
`;case"deployment_dr":return`---
title: "TeamBridge - Deployment DR (DC2)"
---
graph TB
  subgraph Prod["\`Production (DC1)\`"]
    Prod.DataPostgres_chat@{ shape: disk, label: "PostgreSQL Chat (primary + replica)" }
    Prod.DataKafka_cluster@{ shape: horizontal-cylinder, label: "Kafka Cluster (3 brokers)" }
    Prod.DataS3_cluster@{ shape: disk, label: "S3/MinIO Cluster" }
  end
  subgraph Dr["\`Disaster Recovery (DC2)\`"]
    Dr.Standby_data@{ shape: rectangle, label: "Standby Data Layer" }
    Dr.Standby_app@{ shape: rectangle, label: "Warm Standby Kubernetes" }
  end
  Dr.Standby_data -. "\`promote on failover\`" .-> Dr.Standby_app
  Prod.DataPostgres_chat -. "\`async replication\`" .-> Dr.Standby_data
  Prod.DataKafka_cluster -. "\`mirror topics\`" .-> Dr.Standby_data
  Prod.DataS3_cluster -. "\`bucket replication\`" .-> Dr.Standby_data
`;case"deployment_mapping":return'---\ntitle: "TeamBridge - Logical to Physical Mapping"\n---\ngraph TB\n  subgraph Prod["`Production (DC1)`"]\n    subgraph Prod.App["`Kubernetes Cluster - TeamBridge`"]\n      Prod.App.Api_deploy@{ shape: rectangle, label: "API Gateway Deployment (3-6 pods)" }\n      Prod.App.Ws_deploy@{ shape: rectangle, label: "WebSocket Gateway Deployment (4-8 pods)" }\n      Prod.App.Search_deploy@{ shape: rectangle, label: "Search Service Deployment (2-4 pods)" }\n      Prod.App.File_deploy@{ shape: rectangle, label: "File Service Deployment (2-4 pods)" }\n      Prod.App.Notification_deploy@{ shape: rectangle, label: "Notification Service Deployment (2-4 pods)" }\n      Prod.App.Integration_deploy@{ shape: rectangle, label: "Integration Service Deployment (2-4 pods)" }\n      Prod.App.Chat_deploy@{ shape: rectangle, label: "Chat Service Deployment (3-6 pods)" }\n    end\n    subgraph Prod.Data["`Data Layer`"]\n      Prod.Data.Keydb_cluster@{ shape: disk, label: "KeyDB Cluster (3 nodes)" }\n      Prod.Data.Kafka_cluster@{ shape: horizontal-cylinder, label: "Kafka Cluster (3 brokers)" }\n      Prod.Data.Postgres_chat@{ shape: disk, label: "PostgreSQL Chat (primary + replica)" }\n      Prod.Data.Opensearch_cluster@{ shape: disk, label: "OpenSearch Cluster (3 nodes)" }\n      Prod.Data.Postgres_file@{ shape: disk, label: "PostgreSQL File Metadata (primary + replica)" }\n      Prod.Data.S3_cluster@{ shape: disk, label: "S3/MinIO Cluster" }\n      Prod.Data.Postgres_notif@{ shape: disk, label: "PostgreSQL Notification (primary + replica)" }\n    end\n  end\n  subgraph TB["`TeamBridge`"]\n    TB.Api_gateway@{ shape: rectangle, label: "API Gateway" }\n    subgraph TB.Chat["`Chat System`"]\n      TB.Chat.Chat_service@{ shape: rectangle, label: "Chat Service" }\n      TB.Chat.Postgres@{ shape: disk, label: "Chat DB" }\n    end\n    subgraph TB.Search["`Searching System`"]\n      TB.Search.Search_service@{ shape: rectangle, label: "Search Service" }\n      TB.Search.Opensearch@{ shape: disk, label: "OpenSearch" }\n    end\n    subgraph TB.Fs["`File Management`"]\n      TB.Fs.File_service@{ shape: rectangle, label: "File Service" }\n      TB.Fs.Db_fs@{ shape: disk, label: "File Metadata DB" }\n      TB.Fs.S3@{ shape: disk, label: "S3" }\n    end\n    subgraph TB.Notification["`Notification System`"]\n      TB.Notification.Push_service@{ shape: rectangle, label: "Notification Service" }\n      TB.Notification.Postgres@{ shape: disk, label: "Notification Settings DB" }\n    end\n    TB.Integration@{ shape: rectangle, label: "Plugin Service" }\n    TB.Kafka@{ shape: horizontal-cylinder, label: "Message Bus" }\n    TB.Ws_gateway@{ shape: rectangle, label: "WebSocket Gateway" }\n    TB.Keydb@{ shape: disk, label: "KeyDB / Redis" }\n  end\n  TB.Api_gateway -. "`[GRPC]`" .-> TB.Chat.Chat_service\n  TB.Api_gateway -. "`Поиск пользователей/сообщений`" .-> TB.Search.Search_service\n  TB.Api_gateway -. "`Работа с файлами`" .-> TB.Fs.File_service\n  TB.Api_gateway -. "`Настройка push уведомлений`" .-> TB.Notification.Push_service\n  TB.Api_gateway -. "`REST`" .-> TB.Integration\n  TB.Chat.Chat_service -. "`Publish/Consume Messages`" .-> TB.Kafka\n  TB.Search.Search_service -. "`Consume Message Events`" .-> TB.Kafka\n  TB.Notification.Push_service -. "`Consume Message Created Events`" .-> TB.Kafka\n  TB.Integration -. "`consume/produce events`" .-> TB.Kafka\n  TB.Kafka -. "`message events`" .-> TB.Ws_gateway\n  TB.Ws_gateway -. "`Хранение WS сессий и статуса присутствия пользователей с TTL`" .-> TB.Keydb\n  TB.Notification.Push_service -. "`read active sessions`" .-> TB.Keydb\n  TB.Chat.Chat_service -. "`messages/chats/users`" .-> TB.Chat.Postgres\n  TB.Fs.File_service -. "`file metadata`" .-> TB.Fs.Db_fs\n  TB.Notification.Push_service -. "`notification settings`" .-> TB.Notification.Postgres\n  TB.Search.Search_service -. "`indexing/searching`" .-> TB.Search.Opensearch\n  TB.Fs.File_service -. "`Store/Read Files`" .-> TB.Fs.S3\n  Prod.App.Api_deploy -. "`runs`" .-> TB.Api_gateway\n  Prod.App.Ws_deploy -. "`runs`" .-> TB.Ws_gateway\n  Prod.App.Chat_deploy -. "`runs`" .-> TB.Chat.Chat_service\n  Prod.App.Search_deploy -. "`runs`" .-> TB.Search.Search_service\n  Prod.App.File_deploy -. "`runs`" .-> TB.Fs.File_service\n  Prod.App.Notification_deploy -. "`runs`" .-> TB.Notification.Push_service\n  Prod.App.Integration_deploy -. "`runs`" .-> TB.Integration\n  Prod.App.Api_deploy -. "`[GRPC]`" .-> Prod.App.Chat_deploy\n  Prod.App.Api_deploy -. "`[GRPC]`" .-> Prod.App.Search_deploy\n  Prod.App.Api_deploy -. "`[GRPC]`" .-> Prod.App.File_deploy\n  Prod.App.Api_deploy -. "`[GRPC]`" .-> Prod.App.Notification_deploy\n  Prod.App.Api_deploy -. "`[GRPC]`" .-> Prod.App.Integration_deploy\n  Prod.App.Ws_deploy -. "`[GRPC]`" .-> Prod.App.Chat_deploy\n  Prod.App.Ws_deploy -. "`[TCP]`" .-> Prod.Data.Keydb_cluster\n  Prod.App.Chat_deploy -. "`[queue]`" .-> Prod.Data.Kafka_cluster\n  Prod.App.Chat_deploy -. "`[TCP]`" .-> Prod.Data.Postgres_chat\n  Prod.App.Search_deploy -. "`[queue]`" .-> Prod.Data.Kafka_cluster\n  Prod.App.Search_deploy -. "`[HTTP]`" .-> Prod.Data.Opensearch_cluster\n  Prod.App.File_deploy -. "`[TCP]`" .-> Prod.Data.Postgres_file\n  Prod.App.File_deploy -. "`[HTTP]`" .-> Prod.Data.S3_cluster\n  Prod.App.Notification_deploy -. "`[queue]`" .-> Prod.Data.Kafka_cluster\n  Prod.App.Notification_deploy -. "`[TCP]`" .-> Prod.Data.Postgres_notif\n  Prod.Data.Kafka_cluster -. "`hosts`" .-> TB.Kafka\n  Prod.Data.Kafka_cluster -. "`[queue]`" .-> Prod.App.Ws_deploy\n  Prod.Data.Keydb_cluster -. "`hosts`" .-> TB.Keydb\n  Prod.Data.Postgres_chat -. "`hosts`" .-> TB.Chat.Postgres\n  Prod.Data.Postgres_file -. "`hosts`" .-> TB.Fs.Db_fs\n  Prod.Data.Postgres_notif -. "`hosts`" .-> TB.Notification.Postgres\n  Prod.Data.Opensearch_cluster -. "`hosts`" .-> TB.Search.Opensearch\n  Prod.Data.S3_cluster -. "`hosts`" .-> TB.Fs.S3\n';case"index":return`---
title: "TeamBridge - Landscape"
---
graph TB
  Employee@{ icon: "fa:user", shape: rounded, label: "Сотрудник" }
  Admin@{ icon: "fa:user", shape: rounded, label: "Администратор" }
  Clients@{ shape: rectangle, label: "Clients" }
  Prod@{ shape: rectangle, label: "Production (DC1)" }
  Dr@{ shape: rectangle, label: "Disaster Recovery (DC2)" }
  TB@{ shape: rectangle, label: "TeamBridge" }
  Infra@{ shape: rectangle, label: "Infrastructure" }
  Push@{ shape: rectangle, label: "Push Providers (APNs/FCM/WebPush)" }
  Prod -. "\`[...]\`" .-> Dr
  Prod -. "\`[...]\`" .-> TB
  Prod -. "\`OIDC\`" .-> Infra
  Prod -. "\`[HTTPS]\`" .-> Push
  Clients -. "\`[...]\`" .-> Prod
  Employee -. "\`использует\`" .-> Clients
  Admin -. "\`администрирует\`" .-> Clients
  TB -. "\`[...]\`" .-> Infra
  TB -. "\`Push Message Events\`" .-> Push
  Clients -. "\`[...]\`" .-> TB
`;case"context":return'---\ntitle: "TeamBridge - Context"\n---\ngraph TB\n  Admin@{ icon: "fa:user", shape: rounded, label: "Администратор" }\n  Employee@{ icon: "fa:user", shape: rounded, label: "Сотрудник" }\n  subgraph Clients["`Clients`"]\n    Clients.Web@{ shape: rounded, label: "Web Client" }\n    Clients.Desktop@{ shape: rounded, label: "Desktop Client" }\n    Clients.Mobile@{ shape: rounded, label: "Mobile Client" }\n  end\n  Prod@{ shape: rectangle, label: "Production (DC1)" }\n  Dr@{ shape: rectangle, label: "Disaster Recovery (DC2)" }\n  subgraph TB["`TeamBridge`"]\n    TB.Api_gateway@{ shape: rectangle, label: "API Gateway" }\n    subgraph TB.Fs["`File Management`"]\n      TB.Fs.File_service@{ shape: rectangle, label: "File Service" }\n      TB.Fs.S3@{ shape: disk, label: "S3" }\n      TB.Fs.Db_fs@{ shape: disk, label: "File Metadata DB" }\n    end\n    subgraph TB.Chat["`Chat System`"]\n      TB.Chat.Chat_service@{ shape: rectangle, label: "Chat Service" }\n      TB.Chat.Postgres@{ shape: disk, label: "Chat DB" }\n    end\n    subgraph TB.Search["`Searching System`"]\n      TB.Search.Search_service@{ shape: rectangle, label: "Search Service" }\n      TB.Search.Opensearch@{ shape: disk, label: "OpenSearch" }\n    end\n    subgraph TB.Notification["`Notification System`"]\n      TB.Notification.Push_service@{ shape: rectangle, label: "Notification Service" }\n      TB.Notification.Postgres@{ shape: disk, label: "Notification Settings DB" }\n    end\n    TB.Kafka@{ shape: horizontal-cylinder, label: "Message Bus" }\n    TB.Ws_gateway@{ shape: rectangle, label: "WebSocket Gateway" }\n    TB.Keydb@{ shape: disk, label: "KeyDB / Redis" }\n  end\n  Push@{ shape: rectangle, label: "Push Providers (APNs/FCM/WebPush)" }\n  subgraph Infra["`Infrastructure`"]\n    Infra.Keycloak@{ shape: rectangle, label: "Keycloak (OIDC/SSO)" }\n    Infra.Ldap@{ shape: rectangle, label: "LDAP / Active Directory" }\n    Infra.Config_service@{ shape: rectangle, label: "Configuration Service" }\n    Infra.Victoria_metrics@{ shape: rectangle, label: "VictoriaMetrics" }\n    Infra.Vault@{ shape: rectangle, label: "Vault" }\n  end\n  Prod -. "`[...]`" .-> Dr\n  Prod -. "`[HTTPS]`" .-> Push\n  Admin -. "`администрирует`" .-> Clients.Web\n  Clients.Web -. "`[...]`" .-> Prod\n  Clients.Desktop -. "`[...]`" .-> Prod\n  Clients.Mobile -. "`[...]`" .-> Prod\n  Prod -. "`runs`" .-> TB.Api_gateway\n  Prod -. "`runs`" .-> TB.Fs.File_service\n  Prod -. "`hosts`" .-> TB.Fs.S3\n  Prod -. "`hosts`" .-> TB.Fs.Db_fs\n  TB.Api_gateway -. "`Работа с файлами`" .-> TB.Fs.File_service\n  TB.Fs.File_service -. "`Store/Read Files`" .-> TB.Fs.S3\n  TB.Fs.File_service -. "`file metadata`" .-> TB.Fs.Db_fs\n  Prod -. "`runs`" .-> TB.Ws_gateway\n  Prod -. "`runs`" .-> TB.Chat.Chat_service\n  Prod -. "`hosts`" .-> TB.Chat.Postgres\n  TB.Api_gateway -. "`[GRPC]`" .-> TB.Chat.Chat_service\n  TB.Chat.Chat_service -. "`messages/chats/users`" .-> TB.Chat.Postgres\n  Prod -. "`runs`" .-> TB.Search.Search_service\n  TB.Api_gateway -. "`Поиск пользователей/сообщений`" .-> TB.Search.Search_service\n  Prod -. "`hosts`" .-> TB.Search.Opensearch\n  TB.Search.Search_service -. "`indexing/searching`" .-> TB.Search.Opensearch\n  Prod -. "`runs`" .-> TB.Notification.Push_service\n  TB.Api_gateway -. "`Настройка push уведомлений`" .-> TB.Notification.Push_service\n  TB.Notification.Push_service -. "`Push Message Events`" .-> Push\n  Prod -. "`hosts`" .-> TB.Notification.Postgres\n  TB.Notification.Push_service -. "`notification settings`" .-> TB.Notification.Postgres\n  Prod -. "`hosts`" .-> TB.Keydb\n  TB.Ws_gateway -. "`Хранение WS сессий и статуса присутствия пользователей с TTL`" .-> TB.Keydb\n  TB.Notification.Push_service -. "`read active sessions`" .-> TB.Keydb\n  Prod -. "`hosts`" .-> TB.Kafka\n  TB.Chat.Chat_service -. "`Publish/Consume Messages`" .-> TB.Kafka\n  TB.Search.Search_service -. "`Consume Message Events`" .-> TB.Kafka\n  TB.Notification.Push_service -. "`Consume Message Created Events`" .-> TB.Kafka\n  TB.Kafka -. "`message events`" .-> TB.Ws_gateway\n  Prod -. "`OIDC`" .-> Infra.Keycloak\n  TB.Api_gateway -. "`OIDC / JWT`" .-> Infra.Keycloak\n  TB.Ws_gateway -. "`JWT verify (JWKS)`" .-> Infra.Keycloak\n  TB.Chat.Chat_service -. "`profile sync`" .-> Infra.Keycloak\n  Infra.Keycloak -. "`[...]`" .-> Infra.Ldap\n  Employee -. "`использует`" .-> Clients\n  Clients -. "`Синхронные операции: поиск, CRUD, администрирование, загрузка/чтение файлов`" .-> TB.Api_gateway\n  Clients -. "`Realtime соединение, получение новых сообщений, событий присутствия и обновлений чатов`" .-> TB.Ws_gateway\n';default:throw new Error("Unknown viewId: "+e)}}const tS=Object.freeze(Object.defineProperty({__proto__:null,mmdSource:eS},Symbol.toStringTag,{value:"Module"}));function nS(e){switch(e){case"deployment_prod":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=deployment_prod,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_clients {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>CLIENTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=clients,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        web [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Web Client</FONT>>,
            likec4_id="clients.web",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        desktop [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Desktop Client</FONT>>,
            likec4_id="clients.desktop",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        mobile [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Mobile Client</FONT>>,
            likec4_id="clients.mobile",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    subgraph cluster_prod {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>PRODUCTION (DC1)</B></FONT>>,
            likec4_depth=1,
            likec4_id=prod,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        "edge" [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group=prod,
            height=2.5,
            label=<<FONT POINT-SIZE="20">Edge Layer</FONT>>,
            likec4_id="prod.edge",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        observability [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group=prod,
            height=2.5,
            label=<<FONT POINT-SIZE="20">Observability Layer</FONT>>,
            likec4_id="prod.observability",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        app [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group=prod,
            height=2.5,
            label=<<FONT POINT-SIZE="20">Kubernetes Cluster - TeamBridge</FONT>>,
            likec4_id="prod.app",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        data [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            group=prod,
            height=2.5,
            label=<<FONT POINT-SIZE="20">Data Layer</FONT>>,
            likec4_id="prod.data",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_infra {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>INFRASTRUCTURE</B></FONT>>,
            likec4_depth=1,
            likec4_id=infra,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        keycloak [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Keycloak (OIDC/SSO)</FONT>>,
            likec4_id="infra.keycloak",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ldap [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">LDAP / Active Directory</FONT>>,
            likec4_id="infra.ldap",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    web -> "edge" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="54qm6y",
        minlen=1,
        style=dashed];
    desktop -> "edge" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=ik3hnc,
        minlen=1,
        style=dashed];
    mobile -> "edge" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=yi81nu,
        minlen=1,
        style=dashed];
    "edge" -> app [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=hv7kzs,
        style=dashed,
        weight=3];
    observability -> app [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=pye3li,
        minlen=1,
        style=dashed,
        weight=3];
    app -> data [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        likec4_id="1uymuqj",
        style=dashed];
    tb [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">TeamBridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Корпоративная чат-платформа:<BR/>realtime сообщения, файлы, поиск, уведомления<BR/>и интеграции</FONT></TD></TR></TABLE>>,
        likec4_id=TB,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    app -> tb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=kh6rga,
        style=dashed,
        weight=2];
    push [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Push Providers (APNs/FCM/WebPush)</FONT>>,
        likec4_id=push,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    app -> push [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id="1v8q0uq",
        style=dashed,
        weight=2];
    app -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OIDC</FONT></TD></TR></TABLE>>,
        likec4_id=vs8gel,
        style=dashed];
    data -> app [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[queue]</FONT></TD></TR></TABLE>>,
        likec4_id="1c5ki4b",
        style=dashed];
    dr [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Disaster Recovery (DC2)</FONT>>,
        likec4_id=dr,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    data -> dr [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=cct1vv,
        minlen=1,
        style=dashed];
    data -> tb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=cct28b,
        style=dashed];
    tb -> push [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Push Message Events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=rpv8pu,
        minlen=0,
        style=dashed,
        weight=2];
    tb -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="2yvmpp",
        style=dashed,
        weight=2];
    keycloak -> ldap [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="15vxb5a",
        minlen=0,
        style=dashed,
        weight=3];
}
`;case"deployment_dr":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=deployment_dr,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_prod {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>PRODUCTION (DC1)</B></FONT>>,
            likec4_depth=1,
            likec4_id=prod,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        postgres_chat [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">PostgreSQL Chat (primary + replica)</FONT>>,
            likec4_id="prod.data.postgres_chat",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        kafka_cluster [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.389,
            label=<<FONT POINT-SIZE="20">Kafka Cluster (3 brokers)</FONT>>,
            likec4_id="prod.data.kafka_cluster",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        s3_cluster [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">S3/MinIO Cluster</FONT>>,
            likec4_id="prod.data.s3_cluster",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_dr {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>DISASTER RECOVERY (DC2)</B></FONT>>,
            likec4_depth=1,
            likec4_id=dr,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        standby_data [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Standby Data Layer</FONT>>,
            likec4_id="dr.standby_data",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        standby_app [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Warm Standby Kubernetes</FONT>>,
            likec4_id="dr.standby_app",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    postgres_chat -> standby_data [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">async replication</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="18u3jhl",
        minlen=1,
        style=dashed];
    kafka_cluster -> standby_data [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">mirror topics</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id="4e2dkw",
        minlen=1,
        style=dashed];
    s3_cluster -> standby_data [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">bucket replication</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTP ]</FONT></TD></TR></TABLE>>,
        likec4_id="1e8upnq",
        minlen=1,
        style=dashed];
    standby_data -> standby_app [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">promote on failover</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="10xmm63",
        minlen=1,
        style=dashed,
        weight=4];
}
`;case"deployment_mapping":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=deployment_mapping,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_prod {
        graph [color="#292f37",
            fillcolor="#3a404a",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>PRODUCTION (DC1)</B></FONT>>,
            likec4_depth=2,
            likec4_id=prod,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_app {
            graph [color="#2d333d",
                fillcolor="#3e4651",
                label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>KUBERNETES CLUSTER - TEAMBRIDGE</B></FONT>>,
                likec4_depth=1,
                likec4_id="prod.app",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            api_deploy [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                group="prod.app",
                height=2.5,
                label=<<FONT POINT-SIZE="20">API Gateway Deployment (3-6 pods)</FONT>>,
                likec4_id="prod.app.api_deploy",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            ws_deploy [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                group="prod.app",
                height=2.5,
                label=<<FONT POINT-SIZE="20">WebSocket Gateway Deployment (4-8 pods)</FONT>>,
                likec4_id="prod.app.ws_deploy",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            search_deploy [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                group="prod.app",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Search Service Deployment (2-4 pods)</FONT>>,
                likec4_id="prod.app.search_deploy",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            file_deploy [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                group="prod.app",
                height=2.5,
                label=<<FONT POINT-SIZE="20">File Service Deployment (2-4 pods)</FONT>>,
                likec4_id="prod.app.file_deploy",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            notification_deploy [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                group="prod.app",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Notification Service Deployment (2-4<BR/>pods)</FONT>>,
                likec4_id="prod.app.notification_deploy",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            integration_deploy [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                group="prod.app",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Integration Service Deployment (2-4<BR/>pods)</FONT>>,
                likec4_id="prod.app.integration_deploy",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            chat_deploy [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                group="prod.app",
                height=2.5,
                label=<<FONT POINT-SIZE="20">Chat Service Deployment (3-6 pods)</FONT>>,
                likec4_id="prod.app.chat_deploy",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        subgraph cluster_data {
            graph [color="#2d333d",
                fillcolor="#3e4651",
                label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>DATA LAYER</B></FONT>>,
                likec4_depth=1,
                likec4_id="prod.data",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            keydb_cluster [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<FONT POINT-SIZE="20">KeyDB Cluster (3 nodes)</FONT>>,
                likec4_id="prod.data.keydb_cluster",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            kafka_cluster [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=2.389,
                label=<<FONT POINT-SIZE="20">Kafka Cluster (3 brokers)</FONT>>,
                likec4_id="prod.data.kafka_cluster",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
            postgres_chat [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<FONT POINT-SIZE="20">PostgreSQL Chat (primary + replica)</FONT>>,
                likec4_id="prod.data.postgres_chat",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            opensearch_cluster [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<FONT POINT-SIZE="20">OpenSearch Cluster (3 nodes)</FONT>>,
                likec4_id="prod.data.opensearch_cluster",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            postgres_file [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<FONT POINT-SIZE="20">PostgreSQL File Metadata (primary +<BR/>replica)</FONT>>,
                likec4_id="prod.data.postgres_file",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            s3_cluster [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<FONT POINT-SIZE="20">S3/MinIO Cluster</FONT>>,
                likec4_id="prod.data.s3_cluster",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            postgres_notif [color="#475569",
                fillcolor="#64748b",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<FONT POINT-SIZE="20">PostgreSQL Notification (primary +<BR/>replica)</FONT>>,
                likec4_id="prod.data.postgres_notif",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    subgraph cluster_tb {
        graph [color="#1c3021",
            fillcolor="#29472f",
            label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>TEAMBRIDGE</B></FONT>>,
            likec4_depth=2,
            likec4_id=TB,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_chat {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>CHAT SYSTEM</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.chat",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            chat_service [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Обработка сообщений, чатов, участников,<BR/>администрирование чатов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.chat.chat_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            postgres [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">[PostgreSql]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Чаты, сообщения, участники</FONT></TD></TR></TABLE>>,
                likec4_id="TB.chat.postgres",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        subgraph cluster_search {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>SEARCHING SYSTEM</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.search",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            search_service [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Search Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Индексация и поиск</FONT></TD></TR></TABLE>>,
                likec4_id="TB.search.search_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            opensearch [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OpenSearch</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">[OpenSearch]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Поиск</FONT></TD></TR></TABLE>>,
                likec4_id="TB.search.opensearch",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        subgraph cluster_fs {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>FILE MANAGEMENT</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.fs",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            file_service [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="TB.fs",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Загрузка/чтение файлов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.fs.file_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            db_fs [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="TB.fs",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File Metadata DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">[PostgreSql]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Метаданные файлов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.fs.db_fs",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            s3 [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="TB.fs",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">S3</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">[Minio]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Хранение файлов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.fs.s3",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        subgraph cluster_notification {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>NOTIFICATION SYSTEM</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.notification",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            push_service [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notification Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Push Policy и доставка уведомлений</FONT></TD></TR></TABLE>>,
                likec4_id="TB.notification.push_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            postgres_1 [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notification Settings DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">[PostgreSql]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Настройки push уведомлений</FONT></TD></TR></TABLE>>,
                likec4_id="TB.notification.postgres",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        api_gateway [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">REST, auth, rate limit</FONT></TD></TR></TABLE>>,
            likec4_id="TB.api_gateway",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        integration [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Plugin Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Внешние коннекторы и webhooks</FONT></TD></TR></TABLE>>,
            likec4_id="TB.integration",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        kafka [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Message Bus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">[Kafka]</FONT></TD></TR></TABLE>>,
            likec4_id="TB.kafka",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        ws_gateway [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WebSocket Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">WSS соединения, realtime доставка, presence<BR/>routing</FONT></TD></TR></TABLE>>,
            likec4_id="TB.ws_gateway",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        keydb [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">KeyDB / Redis</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">[KeyDB/Redis]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">presence/sessions</FONT></TD></TR></TABLE>>,
            likec4_id="TB.keydb",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    api_deploy -> search_deploy [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id="11wgdy4",
        style=dashed,
        weight=5];
    api_deploy -> file_deploy [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id=tjq8hg,
        style=dashed,
        weight=5];
    api_deploy -> notification_deploy [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id="6rp1lr",
        style=dashed,
        weight=5];
    api_deploy -> integration_deploy [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id=xg5w7g,
        style=dashed,
        weight=4];
    api_deploy -> chat_deploy [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id="1jaj52k",
        style=dashed,
        weight=5];
    api_deploy -> api_gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1l5i6uh",
        style=dashed];
    ws_deploy -> chat_deploy [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id="1ukhipc",
        style=dashed,
        weight=5];
    ws_deploy -> keydb_cluster [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[TCP]</FONT></TD></TR></TABLE>>,
        likec4_id=xqky4v,
        style=dashed,
        weight=2];
    ws_deploy -> ws_gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1558gyx",
        style=dashed];
    search_deploy -> kafka_cluster [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[queue]</FONT></TD></TR></TABLE>>,
        likec4_id="17hpfua",
        style=dashed,
        weight=3];
    search_deploy -> opensearch_cluster [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[HTTP]</FONT></TD></TR></TABLE>>,
        likec4_id=cqxg0e,
        style=dashed,
        weight=3];
    search_deploy -> search_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id=en5fnw,
        style=dashed];
    file_deploy -> postgres_file [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[TCP]</FONT></TD></TR></TABLE>>,
        likec4_id=ea2n57,
        style=dashed,
        weight=3];
    file_deploy -> s3_cluster [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[HTTP]</FONT></TD></TR></TABLE>>,
        likec4_id=rh41oc,
        style=dashed,
        weight=3];
    file_deploy -> file_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1pw0lp3",
        style=dashed];
    notification_deploy -> kafka_cluster [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[queue]</FONT></TD></TR></TABLE>>,
        likec4_id="13ib7ap",
        style=dashed,
        weight=3];
    notification_deploy -> postgres_notif [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[TCP]</FONT></TD></TR></TABLE>>,
        likec4_id=mlfw58,
        style=dashed,
        weight=3];
    notification_deploy -> push_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1dl54fw",
        style=dashed];
    integration_deploy -> integration [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="14vwg26",
        style=dashed];
    chat_deploy -> kafka_cluster [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[queue]</FONT></TD></TR></TABLE>>,
        likec4_id=d4dmyq,
        style=dashed,
        weight=3];
    chat_deploy -> postgres_chat [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[TCP]</FONT></TD></TR></TABLE>>,
        likec4_id="1ctpjmz",
        style=dashed,
        weight=3];
    chat_deploy -> chat_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1wh96nw",
        style=dashed];
    keydb_cluster -> keydb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id="1et3lsu",
        style=dashed];
    kafka_cluster -> ws_deploy [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[queue]</FONT></TD></TR></TABLE>>,
        likec4_id="1tl3ak8",
        style=dashed,
        weight=2];
    kafka_cluster -> kafka [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id="19l7e2m",
        style=dashed];
    postgres_chat -> postgres [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=c897mi,
        style=dashed];
    opensearch_cluster -> opensearch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id="1mtokf2",
        style=dashed];
    postgres_file -> db_fs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=h7at0e,
        style=dashed];
    s3_cluster -> s3 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=p4sex1,
        style=dashed];
    postgres_notif -> postgres_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=aqwvjh,
        style=dashed];
    api_gateway -> integration [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">REST</FONT></TD></TR></TABLE>>,
        likec4_id="12miubv",
        style=dashed,
        weight=4];
    api_gateway -> chat_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id="172il21",
        style=dashed,
        weight=4];
    api_gateway -> search_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Поиск пользователей/сообщений</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ GRPC ]</FONT></TD></TR></TABLE>>,
        likec4_id=j2ytqx,
        style=dashed,
        weight=4];
    api_gateway -> file_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работа с файлами</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ GRPC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1t4519m",
        style=dashed,
        weight=4];
    api_gateway -> push_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настройка push уведомлений</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ GRPC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xgs79m",
        style=dashed,
        weight=4];
    integration -> kafka [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">consume/produce events</FONT></TD></TR></TABLE>>,
        likec4_id=cushxu,
        style=dashed,
        weight=4];
    chat_service -> postgres [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">messages/chats/users</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id=on0fsd,
        style=dashed,
        weight=5];
    chat_service -> kafka [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Publish/Consume Messages</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id=sddrnk,
        style=dashed,
        weight=4];
    search_service -> opensearch [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">indexing/searching</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTP ]</FONT></TD></TR></TABLE>>,
        likec4_id=vepvbw,
        minlen=0,
        style=dashed,
        weight=5];
    search_service -> kafka [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Consume Message Events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id=y7da2o,
        style=dashed,
        weight=4];
    file_service -> db_fs [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">file metadata</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xoujz6",
        style=dashed,
        weight=5];
    file_service -> s3 [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Store/Read Files</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTP ]</FONT></TD></TR></TABLE>>,
        likec4_id="1t64w0e",
        style=dashed,
        weight=5];
    push_service -> kafka [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Consume Message Created Events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id="1imrg8j",
        style=dashed,
        weight=4];
    push_service -> postgres_1 [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notification settings</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id=x1bpgt,
        style=dashed,
        weight=5];
    push_service -> keydb [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">read active sessions</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="1imnvus",
        style=dashed,
        weight=4];
    kafka -> ws_gateway [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">message events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id="1bjoq0f",
        style=dashed,
        weight=4];
    ws_gateway -> keydb [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Хранение WS сессий и статуса присутствия<BR/>пользователей с TTL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="6vzg8",
        style=dashed,
        weight=4];
}
`;case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    employee [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Сотрудник</FONT>>,
        likec4_id=employee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    clients [height=2.5,
        label=<<FONT POINT-SIZE="20">Clients</FONT>>,
        likec4_id=clients,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    employee -> clients [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">использует</FONT></TD></TR></TABLE>>,
        likec4_id=zuu8pu,
        minlen=1,
        style=dashed];
    admin [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Администратор</FONT>>,
        likec4_id=admin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    admin -> clients [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">администрирует</FONT></TD></TR></TABLE>>,
        likec4_id="1dazoun",
        minlen=1,
        style=dashed];
    prod [height=2.5,
        label=<<FONT POINT-SIZE="20">Production (DC1)</FONT>>,
        likec4_id=prod,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    clients -> prod [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1uii4rt",
        style=dashed];
    tb [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">TeamBridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Корпоративная чат-платформа:<BR/>realtime сообщения, файлы, поиск, уведомления<BR/>и интеграции</FONT></TD></TR></TABLE>>,
        likec4_id=TB,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    clients -> tb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1gkfx5i",
        style=dashed];
    dr [height=2.5,
        label=<<FONT POINT-SIZE="20">Disaster Recovery (DC2)</FONT>>,
        likec4_id=dr,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prod -> dr [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="14clqt",
        minlen=1,
        style=dashed];
    prod -> tb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="14cn2t",
        style=dashed];
    infra [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Infrastructure</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Infrastructure services</FONT></TD></TR></TABLE>>,
        likec4_id=infra,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prod -> infra [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OIDC</FONT></TD></TR></TABLE>>,
        likec4_id="526cup",
        style=dashed];
    push [color="#6c6477",
        fillcolor="#827a8e",
        fontcolor="#ffffff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Push Providers (APNs/FCM/WebPush)</FONT>>,
        likec4_id=push,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prod -> push [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=d2lfwd,
        style=dashed];
    tb -> infra [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1qmkelq",
        style=dashed];
    tb -> push [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Push Message Events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=rpv8pu,
        style=dashed];
}
`;case"context":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=context,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#8D8D8D",
        fontcolor="#C9C9C9",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_clients {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLIENTS</B></FONT>>,
            likec4_depth=1,
            likec4_id=clients,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        web [height=2.5,
            label=<<FONT POINT-SIZE="20">Web Client</FONT>>,
            likec4_id="clients.web",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        desktop [height=2.5,
            label=<<FONT POINT-SIZE="20">Desktop Client</FONT>>,
            likec4_id="clients.desktop",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        mobile [height=2.5,
            label=<<FONT POINT-SIZE="20">Mobile Client</FONT>>,
            likec4_id="clients.mobile",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    subgraph cluster_tb {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TEAMBRIDGE</B></FONT>>,
            likec4_depth=2,
            likec4_id=TB,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_fs {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FILE MANAGEMENT</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.fs",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            file_service [color="#1892c5",
                fillcolor="#23a2d9",
                fontcolor="#ffffff",
                group="TB.fs",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Загрузка/чтение файлов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.fs.file_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            s3 [color="#747172",
                fillcolor="#858484",
                fontcolor="#ffffff",
                group="TB.fs",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">S3</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[Minio]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Хранение файлов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.fs.s3",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            db_fs [color="#747172",
                fillcolor="#858484",
                fontcolor="#ffffff",
                group="TB.fs",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">File Metadata DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[PostgreSql]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Метаданные файлов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.fs.db_fs",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        subgraph cluster_chat {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CHAT SYSTEM</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.chat",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            chat_service [color="#1892c5",
                fillcolor="#23a2d9",
                fontcolor="#ffffff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Обработка сообщений, чатов, участников,<BR/>администрирование чатов</FONT></TD></TR></TABLE>>,
                likec4_id="TB.chat.chat_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            postgres [color="#747172",
                fillcolor="#858484",
                fontcolor="#ffffff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Chat DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[PostgreSql]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Чаты, сообщения, участники</FONT></TD></TR></TABLE>>,
                likec4_id="TB.chat.postgres",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        subgraph cluster_search {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SEARCHING SYSTEM</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.search",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            search_service [color="#1892c5",
                fillcolor="#23a2d9",
                fontcolor="#ffffff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Search Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Индексация и поиск</FONT></TD></TR></TABLE>>,
                likec4_id="TB.search.search_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            opensearch [color="#747172",
                fillcolor="#858484",
                fontcolor="#ffffff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">OpenSearch</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[OpenSearch]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Поиск</FONT></TD></TR></TABLE>>,
                likec4_id="TB.search.opensearch",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        subgraph cluster_notification {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NOTIFICATION SYSTEM</B></FONT>>,
                likec4_depth=1,
                likec4_id="TB.notification",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            push_service [color="#1892c5",
                fillcolor="#23a2d9",
                fontcolor="#ffffff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notification Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Push Policy и доставка уведомлений</FONT></TD></TR></TABLE>>,
                likec4_id="TB.notification.push_service",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            postgres_1 [color="#747172",
                fillcolor="#858484",
                fontcolor="#ffffff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notification Settings DB</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[PostgreSql]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">Настройки push уведомлений</FONT></TD></TR></TABLE>>,
                likec4_id="TB.notification.postgres",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        api_gateway [color="#1892c5",
            fillcolor="#23a2d9",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">REST, auth, rate limit</FONT></TD></TR></TABLE>>,
            likec4_id="TB.api_gateway",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        kafka [color="#747172",
            fillcolor="#858484",
            fontcolor="#ffffff",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Message Bus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[Kafka]</FONT></TD></TR></TABLE>>,
            likec4_id="TB.kafka",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        ws_gateway [color="#1892c5",
            fillcolor="#23a2d9",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">WebSocket Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">WSS соединения, realtime доставка, presence<BR/>routing</FONT></TD></TR></TABLE>>,
            likec4_id="TB.ws_gateway",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        keydb [color="#747172",
            fillcolor="#858484",
            fontcolor="#ffffff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">KeyDB / Redis</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[KeyDB/Redis]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#ffffff">presence/sessions</FONT></TD></TR></TABLE>>,
            likec4_id="TB.keydb",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    subgraph cluster_infra {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>INFRASTRUCTURE</B></FONT>>,
            likec4_depth=1,
            likec4_id=infra,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            config_service [color="#6c6477",
                fillcolor="#827a8e",
                fontcolor="#ffffff",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Configuration Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#ffffff">[Consul]</FONT></TD></TR></TABLE>>,
                likec4_id="infra.config_service",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            victoria_metrics [color="#6c6477",
                fillcolor="#827a8e",
                fontcolor="#ffffff",
                height=2.5,
                label=<<FONT POINT-SIZE="20">VictoriaMetrics</FONT>>,
                likec4_id="infra.victoria_metrics",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        keycloak [color="#6c6477",
            fillcolor="#827a8e",
            fontcolor="#ffffff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Keycloak (OIDC/SSO)</FONT>>,
            likec4_id="infra.keycloak",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        ldap [color="#6c6477",
            fillcolor="#827a8e",
            fontcolor="#ffffff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">LDAP / Active Directory</FONT>>,
            likec4_id="infra.ldap",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        vault [color="#6c6477",
            fillcolor="#827a8e",
            fontcolor="#ffffff",
            height=2.5,
            label=<<FONT POINT-SIZE="20">Vault</FONT>>,
            likec4_id="infra.vault",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        config_service -> vault [style=invis];
    }
    admin [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Администратор</FONT>>,
        likec4_id=admin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    admin -> web [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">администрирует</FONT></TD></TR></TABLE>>,
        likec4_id="1tafyb5",
        minlen=1,
        style=dashed];
    employee [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Сотрудник</FONT>>,
        likec4_id=employee,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    employee -> web [arrowhead=normal,
        lhead=cluster_clients,
        likec4_id=zuu8pu,
        minlen=1,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">использует</FONT></TD></TR></TABLE>>];
    prod [height=2.5,
        label=<<FONT POINT-SIZE="20">Production (DC1)</FONT>>,
        likec4_id=prod,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    web -> prod [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="173cjtj",
        style=dashed,
        weight=2];
    desktop -> prod [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=bsvcyd,
        minlen=1,
        style=dashed,
        weight=2];
    mobile -> prod [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=wl2dgn,
        style=dashed,
        weight=2];
    mobile -> api_gateway [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        likec4_id="18uu95z",
        ltail=cluster_clients,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Синхронные операции: поиск, CRUD,<BR/>администрирование, загрузка/чтение<BR/>файлов</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>];
    mobile -> ws_gateway [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        likec4_id="58axdn",
        ltail=cluster_clients,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Realtime соединение, получение новых<BR/>сообщений, событий присутствия и<BR/>обновлений чатов</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ WSS ]</FONT></TD></TR></TABLE>>];
    dr [height=2.5,
        label=<<FONT POINT-SIZE="20">Disaster Recovery (DC2)</FONT>>,
        likec4_id=dr,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prod -> dr [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="14clqt",
        minlen=1,
        style=dashed,
        weight=3];
    prod -> api_gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1kbpx44",
        style=dashed,
        weight=2];
    prod -> file_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1xt9zok",
        style=dashed];
    prod -> chat_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1j0l5g7",
        style=dashed,
        weight=2];
    prod -> search_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1rzi5ef",
        style=dashed];
    prod -> push_service [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="1nl6c1w",
        style=dashed];
    prod -> s3 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=ng7yyo,
        style=dashed];
    prod -> db_fs [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=x5lay4,
        style=dashed];
    prod -> postgres [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id="1ws93ow",
        style=dashed];
    prod -> opensearch [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=e81gg1,
        style=dashed];
    push [color="#6c6477",
        fillcolor="#827a8e",
        fontcolor="#ffffff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Push Providers (APNs/FCM/WebPush)</FONT>>,
        likec4_id=push,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    prod -> push [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[HTTPS]</FONT></TD></TR></TABLE>>,
        likec4_id=d2lfwd,
        style=dashed,
        weight=3];
    prod -> postgres_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=qgxg03,
        style=dashed];
    prod -> kafka [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=n8q90d,
        style=dashed,
        weight=2];
    prod -> ws_gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">runs</FONT></TD></TR></TABLE>>,
        likec4_id="160prbs",
        style=dashed,
        weight=2];
    prod -> keydb [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">hosts</FONT></TD></TR></TABLE>>,
        likec4_id=n8sxii,
        style=dashed,
        weight=2];
    prod -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OIDC</FONT></TD></TR></TABLE>>,
        likec4_id="1m3bpeq",
        style=dashed,
        weight=3];
    api_gateway -> file_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Работа с файлами</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ GRPC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1t4519m",
        style=dashed,
        weight=2];
    api_gateway -> chat_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">[GRPC]</FONT></TD></TR></TABLE>>,
        likec4_id="172il21",
        style=dashed,
        weight=3];
    api_gateway -> search_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Поиск пользователей/сообщений</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ GRPC ]</FONT></TD></TR></TABLE>>,
        likec4_id=j2ytqx,
        style=dashed,
        weight=2];
    api_gateway -> push_service [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Настройка push уведомлений</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ GRPC ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xgs79m",
        style=dashed,
        weight=2];
    api_gateway -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">OIDC / JWT</FONT></TD></TR></TABLE>>,
        likec4_id=ni22i4,
        style=dashed,
        weight=2];
    file_service -> s3 [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Store/Read Files</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTP ]</FONT></TD></TR></TABLE>>,
        likec4_id="1t64w0e",
        style=dashed,
        weight=3];
    file_service -> db_fs [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">file metadata</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="1xoujz6",
        style=dashed,
        weight=3];
    chat_service -> postgres [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">messages/chats/users</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id=on0fsd,
        style=dashed,
        weight=4];
    chat_service -> kafka [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Publish/Consume Messages</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id=sddrnk,
        style=dashed,
        weight=3];
    chat_service -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">profile sync</FONT></TD></TR></TABLE>>,
        likec4_id="1rmr7i7",
        style=dashed];
    search_service -> opensearch [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">indexing/searching</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTP ]</FONT></TD></TR></TABLE>>,
        likec4_id=vepvbw,
        minlen=0,
        style=dashed,
        weight=3];
    search_service -> kafka [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Consume Message Events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id=y7da2o,
        style=dashed,
        weight=2];
    push_service -> push [arrowhead=normal,
        color="#15803d",
        fontcolor="#22c55e",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Push Message Events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ HTTPS ]</FONT></TD></TR></TABLE>>,
        likec4_id=l76wwj,
        style=dashed];
    push_service -> postgres_1 [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notification settings</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id=x1bpgt,
        style=dashed,
        weight=3];
    push_service -> kafka [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Consume Message Created Events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id="1imrg8j",
        style=dashed,
        weight=2];
    push_service -> keydb [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">read active sessions</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="1imnvus",
        style=dashed,
        weight=2];
    kafka -> ws_gateway [arrowhead=normal,
        color="#6366f1",
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">message events</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ queue ]</FONT></TD></TR></TABLE>>,
        likec4_id="1bjoq0f",
        style=dashed,
        weight=3];
    ws_gateway -> keydb [arrowhead=normal,
        arrowtail=normal,
        color="#6366f1",
        dir=both,
        fontcolor="#818cf8",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Хранение WS сессий и статуса присутствия<BR/>пользователей с TTL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="12">[ TCP ]</FONT></TD></TR></TABLE>>,
        likec4_id="6vzg8",
        style=dashed,
        weight=3];
    ws_gateway -> keycloak [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">JWT verify (JWKS)</FONT></TD></TR></TABLE>>,
        likec4_id="1ntg168",
        style=dashed,
        weight=2];
    keycloak -> ldap [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191BA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="15vxb5a",
        minlen=1,
        style=dashed,
        weight=4];
}
`;default:throw new Error("Unknown viewId: "+e)}}function lS(e){switch(e){case"deployment_prod":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="1953pt" height="1960pt"
 viewBox="0.00 0.00 1953.00 1960.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1944.65)">
<g id="clust1" class="cluster">
<title>cluster_clients</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-1640.4 8,-1921.6 1268,-1921.6 1268,-1640.4 8,-1640.4"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1908.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">CLIENTS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_prod</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="438,-662.8 438,-1589.6 1268,-1589.6 1268,-662.8 438,-662.8"/>
<text xml:space="preserve" text-anchor="start" x="446" y="-1576.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">PRODUCTION (DC1)</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_infra</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="903,-8 903,-289.2 1760,-289.2 1760,-8 903,-8"/>
<text xml:space="preserve" text-anchor="start" x="911" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">INFRASTRUCTURE</text>
</g>
<!-- web -->
<g id="node1" class="node">
<title>web</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-1860.4 47.98,-1860.4 47.98,-1680.4 368.02,-1680.4 368.02,-1860.4"/>
<text xml:space="preserve" text-anchor="start" x="159.09" y="-1762.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Web Client</text>
</g>
<!-- desktop -->
<g id="node2" class="node">
<title>desktop</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="798.02,-1860.4 477.98,-1860.4 477.98,-1680.4 798.02,-1680.4 798.02,-1860.4"/>
<text xml:space="preserve" text-anchor="start" x="572.97" y="-1762.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Desktop Client</text>
</g>
<!-- mobile -->
<g id="node3" class="node">
<title>mobile</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1228.02,-1860.4 907.98,-1860.4 907.98,-1680.4 1228.02,-1680.4 1228.02,-1860.4"/>
<text xml:space="preserve" text-anchor="start" x="1010.2" y="-1762.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Mobile Client</text>
</g>
<!-- edge -->
<g id="node4" class="node">
<title>edge</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="798.02,-1528.4 477.98,-1528.4 477.98,-1348.4 798.02,-1348.4 798.02,-1528.4"/>
<text xml:space="preserve" text-anchor="start" x="586.85" y="-1430.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Edge Layer</text>
</g>
<!-- observability -->
<g id="node5" class="node">
<title>observability</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1228.02,-1528.4 907.98,-1528.4 907.98,-1348.4 1228.02,-1348.4 1228.02,-1528.4"/>
<text xml:space="preserve" text-anchor="start" x="982.41" y="-1430.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Observability Layer</text>
</g>
<!-- app -->
<g id="node6" class="node">
<title>app</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1004.01,-1205.6 673.99,-1205.6 673.99,-1025.6 1004.01,-1025.6 1004.01,-1205.6"/>
<text xml:space="preserve" text-anchor="start" x="690.04" y="-1107.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Kubernetes Cluster &#45; TeamBridge</text>
</g>
<!-- data -->
<g id="node7" class="node">
<title>data</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="883.02,-882.8 562.98,-882.8 562.98,-702.8 883.02,-702.8 883.02,-882.8"/>
<text xml:space="preserve" text-anchor="start" x="674.08" y="-784.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Data Layer</text>
</g>
<!-- keycloak -->
<g id="node8" class="node">
<title>keycloak</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1263.02,-228 942.98,-228 942.98,-48 1263.02,-48 1263.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1004.09" y="-130" font-family="Arial" font-size="20.00" fill="#f0f9ff">Keycloak (OIDC/SSO)</text>
</g>
<!-- ldap -->
<g id="node9" class="node">
<title>ldap</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1720.02,-228 1399.98,-228 1399.98,-48 1720.02,-48 1720.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="1455.53" y="-130" font-family="Arial" font-size="20.00" fill="#f0f9ff">LDAP / Active Directory</text>
</g>
<!-- tb -->
<g id="node10" class="node">
<title>tb</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1289.34,-560 916.66,-560 916.66,-380 1289.34,-380 1289.34,-560"/>
<text xml:space="preserve" text-anchor="start" x="1048.53" y="-491" font-family="Arial" font-size="20.00" fill="#f0f9ff">TeamBridge</text>
<text xml:space="preserve" text-anchor="start" x="992.15" y="-468" font-family="Arial" font-size="15.00" fill="#b6ecf7">Корпоративная чат&#45;платформа:</text>
<text xml:space="preserve" text-anchor="start" x="936.71" y="-450" font-family="Arial" font-size="15.00" fill="#b6ecf7">realtime сообщения, файлы, поиск, уведомления</text>
<text xml:space="preserve" text-anchor="start" x="1055.07" y="-432" font-family="Arial" font-size="15.00" fill="#b6ecf7">и интеграции</text>
</g>
<!-- push -->
<g id="node11" class="node">
<title>push</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1922.43,-560 1543.57,-560 1543.57,-380 1922.43,-380 1922.43,-560"/>
<text xml:space="preserve" text-anchor="start" x="1559.62" y="-462" font-family="Arial" font-size="20.00" fill="#f0f9ff">Push Providers (APNs/FCM/WebPush)</text>
</g>
<!-- dr -->
<g id="node12" class="node">
<title>dr</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="807.02,-560 486.98,-560 486.98,-380 807.02,-380 807.02,-560"/>
<text xml:space="preserve" text-anchor="start" x="535.87" y="-462" font-family="Arial" font-size="20.00" fill="#f0f9ff">Disaster Recovery (DC2)</text>
</g>
<!-- web&#45;&gt;edge -->
<g id="edge1" class="edge">
<title>web&#45;&gt;edge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M323.8,-1680.53C382.72,-1635.31 454.37,-1580.33 514.36,-1534.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="515.62,-1536.63 519.97,-1529.98 512.42,-1532.47 515.62,-1536.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423,-1597.6 423,-1620.4 449.99,-1620.4 449.99,-1597.6 423,-1597.6"/>
<text xml:space="preserve" text-anchor="start" x="426" y="-1605.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- desktop&#45;&gt;edge -->
<g id="edge2" class="edge">
<title>desktop&#45;&gt;edge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M638,-1680.53C638,-1636.7 638,-1583.68 638,-1538.54"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-1538.67 638,-1531.17 635.38,-1538.67 640.63,-1538.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-1597.6 638,-1620.4 664.99,-1620.4 664.99,-1597.6 638,-1597.6"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-1605.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- mobile&#45;&gt;edge -->
<g id="edge3" class="edge">
<title>mobile&#45;&gt;edge</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M952.2,-1680.53C893.28,-1635.31 821.63,-1580.33 761.64,-1534.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="763.58,-1532.47 756.03,-1529.98 760.38,-1536.63 763.58,-1532.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="865.89,-1597.6 865.89,-1620.4 892.89,-1620.4 892.89,-1597.6 865.89,-1597.6"/>
<text xml:space="preserve" text-anchor="start" x="868.89" y="-1605.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- edge&#45;&gt;app -->
<g id="edge4" class="edge">
<title>edge&#45;&gt;app</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M693.72,-1348.47C719.86,-1306.74 751.08,-1256.91 777.87,-1214.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="779.98,-1215.74 781.74,-1207.99 775.53,-1212.96 779.98,-1215.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="744.53,-1265.6 744.53,-1288.4 771.52,-1288.4 771.52,-1265.6 744.53,-1265.6"/>
<text xml:space="preserve" text-anchor="start" x="747.53" y="-1273.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- observability&#45;&gt;app -->
<g id="edge5" class="edge">
<title>observability&#45;&gt;app</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1004.51,-1348.47C974.67,-1306.66 939.01,-1256.71 908.45,-1213.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="910.66,-1212.47 904.17,-1207.89 906.39,-1215.52 910.66,-1212.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="960.37,-1265.6 960.37,-1288.4 987.36,-1288.4 987.36,-1265.6 960.37,-1265.6"/>
<text xml:space="preserve" text-anchor="start" x="963.37" y="-1273.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- app&#45;&gt;data -->
<g id="edge6" class="edge">
<title>app&#45;&gt;data</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M753.95,-1017.43C743.44,-1001.04 734.23,-983.5 728,-965.6 720.07,-942.79 716.65,-917.23 715.69,-892.94"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="751.55,-1018.56 757.88,-1023.37 755.93,-1015.66 751.55,-1018.56"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="718.32,-893.07 715.5,-885.64 713.07,-893.21 718.32,-893.07"/>
</g>
<!-- app&#45;&gt;keycloak -->
<g id="edge9" class="edge">
<title>app&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M674.22,-1032.52C613.63,-994.68 549.72,-944.36 508,-882.8 381.22,-695.7 301.98,-564.86 432,-380 544.54,-220.01 773.83,-165.71 932.85,-147.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="933.04,-150.2 940.21,-146.77 932.47,-144.98 933.04,-150.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="376.59,-620 376.59,-642.8 417.59,-642.8 417.59,-620 376.59,-620"/>
<text xml:space="preserve" text-anchor="start" x="379.59" y="-625.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">OIDC</text>
</g>
<!-- app&#45;&gt;tb -->
<g id="edge7" class="edge">
<title>app&#45;&gt;tb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M877.55,-1025.64C896.06,-982.59 918.42,-930.11 938,-882.8 982.12,-776.18 1031.11,-653.32 1064.16,-569.74"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1066.58,-570.75 1066.9,-562.81 1061.7,-568.82 1066.58,-570.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1026.3,-781.4 1026.3,-804.2 1059.54,-804.2 1059.54,-781.4 1026.3,-781.4"/>
<text xml:space="preserve" text-anchor="start" x="1029.3" y="-787.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- app&#45;&gt;push -->
<g id="edge8" class="edge">
<title>app&#45;&gt;push</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M962.37,-1025.79C1130.14,-905 1429.03,-689.83 1601.11,-565.95"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1602.45,-568.22 1607.01,-561.7 1599.39,-563.96 1602.45,-568.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1460.56,-781.4 1460.56,-804.2 1520.23,-804.2 1520.23,-781.4 1460.56,-781.4"/>
<text xml:space="preserve" text-anchor="start" x="1463.56" y="-787.2" font-family="Arial" font-size="14.00" fill="#22c55e">[HTTPS]</text>
</g>
<!-- data&#45;&gt;app -->
<g id="edge10" class="edge">
<title>data&#45;&gt;app</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M755.12,-882.63C770.08,-923.99 787.92,-973.33 803.3,-1015.86"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="800.79,-1016.66 805.81,-1022.82 805.73,-1014.87 800.79,-1016.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="784.48,-942.8 784.48,-965.6 837.19,-965.6 837.19,-942.8 784.48,-942.8"/>
<text xml:space="preserve" text-anchor="start" x="787.48" y="-948.6" font-family="Arial" font-size="14.00" fill="#818cf8">[queue]</text>
</g>
<!-- data&#45;&gt;tb -->
<g id="edge12" class="edge">
<title>data&#45;&gt;tb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M828.35,-702.87C878.59,-660.45 938.77,-609.65 989.97,-566.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="991.43,-568.63 995.46,-561.78 988.04,-564.61 991.43,-568.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="924.39,-620 924.39,-642.8 963.86,-642.8 963.86,-620 924.39,-620"/>
<text xml:space="preserve" text-anchor="start" x="927.39" y="-625.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- data&#45;&gt;dr -->
<g id="edge11" class="edge">
<title>data&#45;&gt;dr</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M699.54,-692.79C690.27,-653.64 679.63,-608.75 670.37,-569.64"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="696.95,-693.23 701.23,-699.92 702.06,-692.02 696.95,-693.23"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="673.03,-569.47 668.74,-562.78 667.92,-570.68 673.03,-569.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="687.28,-620 687.28,-642.8 714.27,-642.8 714.27,-620 687.28,-620"/>
<text xml:space="preserve" text-anchor="start" x="690.28" y="-628.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#818cf8">[...]</text>
</g>
<!-- keycloak&#45;&gt;ldap -->
<g id="edge15" class="edge">
<title>keycloak&#45;&gt;ldap</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1262.84,-138C1303.89,-138 1348.2,-138 1389.75,-138"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1389.73,-140.63 1397.23,-138 1389.73,-135.38 1389.73,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1318,-141 1318,-163.8 1345,-163.8 1345,-141 1318,-141"/>
<text xml:space="preserve" text-anchor="start" x="1321" y="-149.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- tb&#45;&gt;keycloak -->
<g id="edge14" class="edge">
<title>tb&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1103,-380.13C1103,-336.3 1103,-283.28 1103,-238.14"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1105.63,-238.27 1103,-230.77 1100.38,-238.27 1105.63,-238.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1103,-297.2 1103,-320 1129.99,-320 1129.99,-297.2 1103,-297.2"/>
<text xml:space="preserve" text-anchor="start" x="1106" y="-305.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- tb&#45;&gt;push -->
<g id="edge13" class="edge">
<title>tb&#45;&gt;push</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M1289.04,-470C1365.88,-470 1455.1,-470 1533.31,-470"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1533.25,-472.63 1540.75,-470 1533.25,-467.38 1533.25,-472.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1343.81,-473 1343.81,-516.2 1489.1,-516.2 1489.1,-473 1343.81,-473"/>
<text xml:space="preserve" text-anchor="start" x="1346.81" y="-499.2" font-family="Arial" font-size="14.00" fill="#22c55e">Push Message Events</text>
<text xml:space="preserve" text-anchor="start" x="1346.81" y="-478.4" font-family="Arial" font-size="12.00" fill="#22c55e">[ HTTPS ]</text>
</g>
</g>
</svg>
`;case"deployment_dr":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="1342pt" height="1023pt"
 viewBox="0.00 0.00 1342.00 1023.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1007.85)">
<g id="clust1" class="cluster">
<title>cluster_prod</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-703.6 8,-984.8 1304,-984.8 1304,-703.6 8,-703.6"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-971.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">PRODUCTION (DC1)</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_dr</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="474,-8 474,-632.4 874,-632.4 874,-8 474,-8"/>
<text xml:space="preserve" text-anchor="start" x="482" y="-619.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">DISASTER RECOVERY (DC2)</text>
</g>
<!-- postgres_chat -->
<g id="node1" class="node">
<title>postgres_chat</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M404.06,-907.24C404.06,-916.27 324.25,-923.6 226,-923.6 127.75,-923.6 47.94,-916.27 47.94,-907.24 47.94,-907.24 47.94,-759.96 47.94,-759.96 47.94,-750.93 127.75,-743.6 226,-743.6 324.25,-743.6 404.06,-750.93 404.06,-759.96 404.06,-759.96 404.06,-907.24 404.06,-907.24"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M404.06,-907.24C404.06,-898.21 324.25,-890.87 226,-890.87 127.75,-890.87 47.94,-898.21 47.94,-907.24"/>
<text xml:space="preserve" text-anchor="start" x="64" y="-825.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">PostgreSQL Chat (primary + replica)</text>
</g>
<!-- kafka_cluster -->
<g id="node2" class="node">
<title>kafka_cluster</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="834.02,-919.6 513.98,-919.6 513.98,-747.6 834.02,-747.6 834.02,-919.6"/>
<text xml:space="preserve" text-anchor="start" x="562.85" y="-825.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Kafka Cluster (3 brokers)</text>
</g>
<!-- s3_cluster -->
<g id="node3" class="node">
<title>s3_cluster</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M1264.02,-907.24C1264.02,-916.27 1192.3,-923.6 1104,-923.6 1015.7,-923.6 943.98,-916.27 943.98,-907.24 943.98,-907.24 943.98,-759.96 943.98,-759.96 943.98,-750.93 1015.7,-743.6 1104,-743.6 1192.3,-743.6 1264.02,-750.93 1264.02,-759.96 1264.02,-759.96 1264.02,-907.24 1264.02,-907.24"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M1264.02,-907.24C1264.02,-898.21 1192.3,-890.87 1104,-890.87 1015.7,-890.87 943.98,-898.21 943.98,-907.24"/>
<text xml:space="preserve" text-anchor="start" x="1027.87" y="-825.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">S3/MinIO Cluster</text>
</g>
<!-- standby_data -->
<g id="node4" class="node">
<title>standby_data</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="834.02,-571.2 513.98,-571.2 513.98,-391.2 834.02,-391.2 834.02,-571.2"/>
<text xml:space="preserve" text-anchor="start" x="585.61" y="-473.2" font-family="Arial" font-size="20.00" fill="#f8fafc">Standby Data Layer</text>
</g>
<!-- standby_app -->
<g id="node5" class="node">
<title>standby_app</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="834.02,-228 513.98,-228 513.98,-48 834.02,-48 834.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="553.94" y="-130" font-family="Arial" font-size="20.00" fill="#f8fafc">Warm Standby Kubernetes</text>
</g>
<!-- postgres_chat&#45;&gt;standby_data -->
<g id="edge1" class="edge">
<title>postgres_chat&#45;&gt;standby_data</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M347.07,-737.9C410.79,-688.07 488.71,-627.12 552.49,-577.24"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="345.72,-735.63 341.43,-742.31 348.96,-739.76 345.72,-735.63"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="553.92,-579.45 558.21,-572.76 550.69,-575.31 553.92,-579.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="463.43,-640.4 463.43,-683.6 573.71,-683.6 573.71,-640.4 463.43,-640.4"/>
<text xml:space="preserve" text-anchor="start" x="466.43" y="-666.6" font-family="Arial" font-size="14.00" fill="#818cf8">async replication</text>
<text xml:space="preserve" text-anchor="start" x="466.43" y="-645.8" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- kafka_cluster&#45;&gt;standby_data -->
<g id="edge2" class="edge">
<title>kafka_cluster&#45;&gt;standby_data</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M674,-747.78C674,-697.65 674,-633.93 674,-581.46"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="676.63,-581.66 674,-574.16 671.38,-581.66 676.63,-581.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="674,-640.4 674,-683.6 757.01,-683.6 757.01,-640.4 674,-640.4"/>
<text xml:space="preserve" text-anchor="start" x="677" y="-666.6" font-family="Arial" font-size="14.00" fill="#818cf8">mirror topics</text>
<text xml:space="preserve" text-anchor="start" x="677" y="-645.8" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- s3_cluster&#45;&gt;standby_data -->
<g id="edge3" class="edge">
<title>s3_cluster&#45;&gt;standby_data</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M996.05,-744.63C933.66,-693.79 855.13,-629.8 791.23,-577.73"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="792.94,-575.73 785.46,-573.03 789.62,-579.8 792.94,-575.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="914.74,-640.4 914.74,-683.6 1029.7,-683.6 1029.7,-640.4 914.74,-640.4"/>
<text xml:space="preserve" text-anchor="start" x="917.74" y="-666.6" font-family="Arial" font-size="14.00" fill="#818cf8">bucket replication</text>
<text xml:space="preserve" text-anchor="start" x="917.74" y="-645.8" font-family="Arial" font-size="12.00" fill="#818cf8">[ HTTP ]</text>
</g>
<!-- standby_data&#45;&gt;standby_app -->
<g id="edge4" class="edge">
<title>standby_data&#45;&gt;standby_app</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M674,-380.95C674,-336.06 674,-283.13 674,-238.24"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="671.38,-380.92 674,-388.42 676.63,-380.92 671.38,-380.92"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="676.63,-238.43 674,-230.93 671.38,-238.43 676.63,-238.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="674,-288 674,-331.2 799.84,-331.2 799.84,-288 674,-288"/>
<text xml:space="preserve" text-anchor="start" x="677" y="-314.2" font-family="Arial" font-size="14.00" fill="#818cf8">promote on failover</text>
<text xml:space="preserve" text-anchor="start" x="677" y="-293.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
</g>
</svg>
`;case"deployment_mapping":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="6604pt" height="2211pt"
 viewBox="0.00 0.00 6604.00 2211.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2195.85)">
<g id="clust1" class="cluster">
<title>cluster_prod</title>
<polygon fill="#3a404a" stroke="#292f37" points="3239,-1042.4 3239,-2172.8 6401,-2172.8 6401,-1042.4 3239,-1042.4"/>
<text xml:space="preserve" text-anchor="start" x="3247" y="-2159.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">PRODUCTION (DC1)</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_app</title>
<polygon fill="#3e4651" stroke="#2d333d" points="3279,-1456 3279,-2111.6 5621,-2111.6 5621,-1456 3279,-1456"/>
<text xml:space="preserve" text-anchor="start" x="3287" y="-2098.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">KUBERNETES CLUSTER &#45; TEAMBRIDGE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_data</title>
<polygon fill="#3e4651" stroke="#2d333d" points="3279,-1082.4 3279,-1384.8 6361,-1384.8 6361,-1082.4 3279,-1082.4"/>
<text xml:space="preserve" text-anchor="start" x="3287" y="-1371.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">DATA LAYER</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_tb</title>
<polygon fill="#29472f" stroke="#1c3021" points="8,-8 8,-1758.4 3231,-1758.4 3231,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1745.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">TEAMBRIDGE</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_chat</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="48,-711.2 48,-1384.8 468,-1384.8 468,-711.2 48,-711.2"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-1371.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">CHAT SYSTEM</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_search</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="508,-1082.4 508,-1384.8 1461,-1384.8 1461,-1082.4 508,-1082.4"/>
<text xml:space="preserve" text-anchor="start" x="516" y="-1371.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">SEARCHING SYSTEM</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_fs</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="2361,-711.2 2361,-1384.8 3191,-1384.8 3191,-711.2 2361,-711.2"/>
<text xml:space="preserve" text-anchor="start" x="2369" y="-1371.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">FILE MANAGEMENT</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_notification</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="1921,-711.2 1921,-1384.8 2321,-1384.8 2321,-711.2 1921,-711.2"/>
<text xml:space="preserve" text-anchor="start" x="1929" y="-1371.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">NOTIFICATION SYSTEM</text>
</g>
<!-- api_deploy -->
<g id="node1" class="node">
<title>api_deploy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4618.91,-2029.2 4261.09,-2029.2 4261.09,-1849.2 4618.91,-1849.2 4618.91,-2029.2"/>
<text xml:space="preserve" text-anchor="start" x="4277.15" y="-1931.2" font-family="Arial" font-size="20.00" fill="#f8fafc">API Gateway Deployment (3&#45;6 pods)</text>
</g>
<!-- ws_deploy -->
<g id="node2" class="node">
<title>ws_deploy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="5580.92,-2029.2 5153.08,-2029.2 5153.08,-1849.2 5580.92,-1849.2 5580.92,-2029.2"/>
<text xml:space="preserve" text-anchor="start" x="5169.13" y="-1931.2" font-family="Arial" font-size="20.00" fill="#f8fafc">WebSocket Gateway Deployment (4&#45;8 pods)</text>
</g>
<!-- search_deploy -->
<g id="node3" class="node">
<title>search_deploy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4157.36,-1676 3780.64,-1676 3780.64,-1496 4157.36,-1496 4157.36,-1676"/>
<text xml:space="preserve" text-anchor="start" x="3796.7" y="-1578" font-family="Arial" font-size="20.00" fill="#f8fafc">Search Service Deployment (2&#45;4 pods)</text>
</g>
<!-- file_deploy -->
<g id="node4" class="node">
<title>file_deploy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="4612.78,-1676 4267.22,-1676 4267.22,-1496 4612.78,-1496 4612.78,-1676"/>
<text xml:space="preserve" text-anchor="start" x="4283.27" y="-1578" font-family="Arial" font-size="20.00" fill="#f8fafc">File Service Deployment (2&#45;4 pods)</text>
</g>
<!-- notification_deploy -->
<g id="node5" class="node">
<title>notification_deploy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="5079.35,-1676 4722.65,-1676 4722.65,-1496 5079.35,-1496 5079.35,-1676"/>
<text xml:space="preserve" text-anchor="start" x="4738.71" y="-1590" font-family="Arial" font-size="20.00" fill="#f8fafc">Notification Service Deployment (2&#45;4</text>
<text xml:space="preserve" text-anchor="start" x="4875.99" y="-1566" font-family="Arial" font-size="20.00" fill="#f8fafc">pods)</text>
</g>
<!-- integration_deploy -->
<g id="node6" class="node">
<title>integration_deploy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3671.13,-1676 3318.87,-1676 3318.87,-1496 3671.13,-1496 3671.13,-1676"/>
<text xml:space="preserve" text-anchor="start" x="3334.92" y="-1590" font-family="Arial" font-size="20.00" fill="#f8fafc">Integration Service Deployment (2&#45;4</text>
<text xml:space="preserve" text-anchor="start" x="3469.99" y="-1566" font-family="Arial" font-size="20.00" fill="#f8fafc">pods)</text>
</g>
<!-- chat_deploy -->
<g id="node7" class="node">
<title>chat_deploy</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="5544.79,-1676 5189.21,-1676 5189.21,-1496 5544.79,-1496 5544.79,-1676"/>
<text xml:space="preserve" text-anchor="start" x="5205.26" y="-1578" font-family="Arial" font-size="20.00" fill="#f8fafc">Chat Service Deployment (3&#45;6 pods)</text>
</g>
<!-- keydb_cluster -->
<g id="node8" class="node">
<title>keydb_cluster</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M6321.02,-1286.04C6321.02,-1295.07 6249.3,-1302.4 6161,-1302.4 6072.7,-1302.4 6000.98,-1295.07 6000.98,-1286.04 6000.98,-1286.04 6000.98,-1138.76 6000.98,-1138.76 6000.98,-1129.73 6072.7,-1122.4 6161,-1122.4 6249.3,-1122.4 6321.02,-1129.73 6321.02,-1138.76 6321.02,-1138.76 6321.02,-1286.04 6321.02,-1286.04"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M6321.02,-1286.04C6321.02,-1277.01 6249.3,-1269.67 6161,-1269.67 6072.7,-1269.67 6000.98,-1277.01 6000.98,-1286.04"/>
<text xml:space="preserve" text-anchor="start" x="6050.4" y="-1204.4" font-family="Arial" font-size="20.00" fill="#f8fafc">KeyDB Cluster (3 nodes)</text>
</g>
<!-- kafka_cluster -->
<g id="node9" class="node">
<title>kafka_cluster</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="5425.02,-1298.4 5104.98,-1298.4 5104.98,-1126.4 5425.02,-1126.4 5425.02,-1298.4"/>
<text xml:space="preserve" text-anchor="start" x="5153.85" y="-1204.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Kafka Cluster (3 brokers)</text>
</g>
<!-- postgres_chat -->
<g id="node10" class="node">
<title>postgres_chat</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M5891.06,-1286.04C5891.06,-1295.07 5811.25,-1302.4 5713,-1302.4 5614.75,-1302.4 5534.94,-1295.07 5534.94,-1286.04 5534.94,-1286.04 5534.94,-1138.76 5534.94,-1138.76 5534.94,-1129.73 5614.75,-1122.4 5713,-1122.4 5811.25,-1122.4 5891.06,-1129.73 5891.06,-1138.76 5891.06,-1138.76 5891.06,-1286.04 5891.06,-1286.04"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M5891.06,-1286.04C5891.06,-1277.01 5811.25,-1269.67 5713,-1269.67 5614.75,-1269.67 5534.94,-1277.01 5534.94,-1286.04"/>
<text xml:space="preserve" text-anchor="start" x="5551" y="-1204.4" font-family="Arial" font-size="20.00" fill="#f8fafc">PostgreSQL Chat (primary + replica)</text>
</g>
<!-- opensearch_cluster -->
<g id="node11" class="node">
<title>opensearch_cluster</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M3639.02,-1286.04C3639.02,-1295.07 3567.3,-1302.4 3479,-1302.4 3390.7,-1302.4 3318.98,-1295.07 3318.98,-1286.04 3318.98,-1286.04 3318.98,-1138.76 3318.98,-1138.76 3318.98,-1129.73 3390.7,-1122.4 3479,-1122.4 3567.3,-1122.4 3639.02,-1129.73 3639.02,-1138.76 3639.02,-1138.76 3639.02,-1286.04 3639.02,-1286.04"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M3639.02,-1286.04C3639.02,-1277.01 3567.3,-1269.67 3479,-1269.67 3390.7,-1269.67 3318.98,-1277.01 3318.98,-1286.04"/>
<text xml:space="preserve" text-anchor="start" x="3343.38" y="-1204.4" font-family="Arial" font-size="20.00" fill="#f8fafc">OpenSearch Cluster (3 nodes)</text>
</g>
<!-- postgres_file -->
<g id="node12" class="node">
<title>postgres_file</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M4112.95,-1286.04C4112.95,-1295.07 4031.4,-1302.4 3931,-1302.4 3830.6,-1302.4 3749.05,-1295.07 3749.05,-1286.04 3749.05,-1286.04 3749.05,-1138.76 3749.05,-1138.76 3749.05,-1129.73 3830.6,-1122.4 3931,-1122.4 4031.4,-1122.4 4112.95,-1129.73 4112.95,-1138.76 4112.95,-1138.76 4112.95,-1286.04 4112.95,-1286.04"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M4112.95,-1286.04C4112.95,-1277.01 4031.4,-1269.67 3931,-1269.67 3830.6,-1269.67 3749.05,-1277.01 3749.05,-1286.04"/>
<text xml:space="preserve" text-anchor="start" x="3765.1" y="-1216.4" font-family="Arial" font-size="20.00" fill="#f8fafc">PostgreSQL File Metadata (primary +</text>
<text xml:space="preserve" text-anchor="start" x="3898.21" y="-1192.4" font-family="Arial" font-size="20.00" fill="#f8fafc">replica)</text>
</g>
<!-- s3_cluster -->
<g id="node13" class="node">
<title>s3_cluster</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M4543.02,-1286.04C4543.02,-1295.07 4471.3,-1302.4 4383,-1302.4 4294.7,-1302.4 4222.98,-1295.07 4222.98,-1286.04 4222.98,-1286.04 4222.98,-1138.76 4222.98,-1138.76 4222.98,-1129.73 4294.7,-1122.4 4383,-1122.4 4471.3,-1122.4 4543.02,-1129.73 4543.02,-1138.76 4543.02,-1138.76 4543.02,-1286.04 4543.02,-1286.04"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M4543.02,-1286.04C4543.02,-1277.01 4471.3,-1269.67 4383,-1269.67 4294.7,-1269.67 4222.98,-1277.01 4222.98,-1286.04"/>
<text xml:space="preserve" text-anchor="start" x="4306.87" y="-1204.4" font-family="Arial" font-size="20.00" fill="#f8fafc">S3/MinIO Cluster</text>
</g>
<!-- postgres_notif -->
<g id="node14" class="node">
<title>postgres_notif</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M4994.84,-1286.04C4994.84,-1295.07 4918.26,-1302.4 4824,-1302.4 4729.74,-1302.4 4653.16,-1295.07 4653.16,-1286.04 4653.16,-1286.04 4653.16,-1138.76 4653.16,-1138.76 4653.16,-1129.73 4729.74,-1122.4 4824,-1122.4 4918.26,-1122.4 4994.84,-1129.73 4994.84,-1138.76 4994.84,-1138.76 4994.84,-1286.04 4994.84,-1286.04"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M4994.84,-1286.04C4994.84,-1277.01 4918.26,-1269.67 4824,-1269.67 4729.74,-1269.67 4653.16,-1277.01 4653.16,-1286.04"/>
<text xml:space="preserve" text-anchor="start" x="4669.22" y="-1216.4" font-family="Arial" font-size="20.00" fill="#f8fafc">PostgreSQL Notification (primary +</text>
<text xml:space="preserve" text-anchor="start" x="4791.21" y="-1192.4" font-family="Arial" font-size="20.00" fill="#f8fafc">replica)</text>
</g>
<!-- chat_service -->
<g id="node15" class="node">
<title>chat_service</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="428.09,-1302.4 87.91,-1302.4 87.91,-1122.4 428.09,-1122.4 428.09,-1302.4"/>
<text xml:space="preserve" text-anchor="start" x="200.75" y="-1224.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Chat Service</text>
<text xml:space="preserve" text-anchor="start" x="107.97" y="-1201.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Обработка сообщений, чатов, участников,</text>
<text xml:space="preserve" text-anchor="start" x="164.23" y="-1183.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">администрирование чатов</text>
</g>
<!-- postgres -->
<g id="node16" class="node">
<title>postgres</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M418.02,-914.84C418.02,-923.87 346.3,-931.2 258,-931.2 169.7,-931.2 97.98,-923.87 97.98,-914.84 97.98,-914.84 97.98,-767.56 97.98,-767.56 97.98,-758.53 169.7,-751.2 258,-751.2 346.3,-751.2 418.02,-758.53 418.02,-767.56 418.02,-767.56 418.02,-914.84 418.02,-914.84"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M418.02,-914.84C418.02,-905.81 346.3,-898.47 258,-898.47 169.7,-898.47 97.98,-905.81 97.98,-914.84"/>
<text xml:space="preserve" text-anchor="start" x="220.21" y="-854" font-family="Arial" font-size="20.00" fill="#f8fafc">Chat DB</text>
<text xml:space="preserve" text-anchor="start" x="222.59" y="-833" font-family="Arial" font-size="13.00" fill="#c2f0c2">[PostgreSql]</text>
<text xml:space="preserve" text-anchor="start" x="157.98" y="-811.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Чаты, сообщения, участники</text>
</g>
<!-- search_service -->
<g id="node17" class="node">
<title>search_service</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="868.02,-1302.4 547.98,-1302.4 547.98,-1122.4 868.02,-1122.4 868.02,-1302.4"/>
<text xml:space="preserve" text-anchor="start" x="640.19" y="-1215.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Search Service</text>
<text xml:space="preserve" text-anchor="start" x="637.15" y="-1192.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Индексация и поиск</text>
</g>
<!-- opensearch -->
<g id="node18" class="node">
<title>opensearch</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M1421.02,-1286.04C1421.02,-1295.07 1349.3,-1302.4 1261,-1302.4 1172.7,-1302.4 1100.98,-1295.07 1100.98,-1286.04 1100.98,-1286.04 1100.98,-1138.76 1100.98,-1138.76 1100.98,-1129.73 1172.7,-1122.4 1261,-1122.4 1349.3,-1122.4 1421.02,-1129.73 1421.02,-1138.76 1421.02,-1138.76 1421.02,-1286.04 1421.02,-1286.04"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M1421.02,-1286.04C1421.02,-1277.01 1349.3,-1269.67 1261,-1269.67 1172.7,-1269.67 1100.98,-1277.01 1100.98,-1286.04"/>
<text xml:space="preserve" text-anchor="start" x="1204.85" y="-1225.2" font-family="Arial" font-size="20.00" fill="#f8fafc">OpenSearch</text>
<text xml:space="preserve" text-anchor="start" x="1220.89" y="-1204.2" font-family="Arial" font-size="13.00" fill="#c2f0c2">[OpenSearch]</text>
<text xml:space="preserve" text-anchor="start" x="1240.16" y="-1182.6" font-family="Arial" font-size="15.00" fill="#c2f0c2">Поиск</text>
</g>
<!-- file_service -->
<g id="node19" class="node">
<title>file_service</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2721.02,-1302.4 2400.98,-1302.4 2400.98,-1122.4 2721.02,-1122.4 2721.02,-1302.4"/>
<text xml:space="preserve" text-anchor="start" x="2508.76" y="-1215.4" font-family="Arial" font-size="20.00" fill="#f8fafc">File Service</text>
<text xml:space="preserve" text-anchor="start" x="2473.48" y="-1192.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Загрузка/чтение файлов</text>
</g>
<!-- db_fs -->
<g id="node20" class="node">
<title>db_fs</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M2721.02,-914.84C2721.02,-923.87 2649.3,-931.2 2561,-931.2 2472.7,-931.2 2400.98,-923.87 2400.98,-914.84 2400.98,-914.84 2400.98,-767.56 2400.98,-767.56 2400.98,-758.53 2472.7,-751.2 2561,-751.2 2649.3,-751.2 2721.02,-758.53 2721.02,-767.56 2721.02,-767.56 2721.02,-914.84 2721.02,-914.84"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M2721.02,-914.84C2721.02,-905.81 2649.3,-898.47 2561,-898.47 2472.7,-898.47 2400.98,-905.81 2400.98,-914.84"/>
<text xml:space="preserve" text-anchor="start" x="2483.74" y="-854" font-family="Arial" font-size="20.00" fill="#f8fafc">File Metadata DB</text>
<text xml:space="preserve" text-anchor="start" x="2525.59" y="-833" font-family="Arial" font-size="13.00" fill="#c2f0c2">[PostgreSql]</text>
<text xml:space="preserve" text-anchor="start" x="2492.24" y="-811.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Метаданные файлов</text>
</g>
<!-- s3 -->
<g id="node21" class="node">
<title>s3</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M3151.02,-914.84C3151.02,-923.87 3079.3,-931.2 2991,-931.2 2902.7,-931.2 2830.98,-923.87 2830.98,-914.84 2830.98,-914.84 2830.98,-767.56 2830.98,-767.56 2830.98,-758.53 2902.7,-751.2 2991,-751.2 3079.3,-751.2 3151.02,-758.53 3151.02,-767.56 3151.02,-767.56 3151.02,-914.84 3151.02,-914.84"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M3151.02,-914.84C3151.02,-905.81 3079.3,-898.47 2991,-898.47 2902.7,-898.47 2830.98,-905.81 2830.98,-914.84"/>
<text xml:space="preserve" text-anchor="start" x="2978.77" y="-854" font-family="Arial" font-size="20.00" fill="#f8fafc">S3</text>
<text xml:space="preserve" text-anchor="start" x="2971.86" y="-833" font-family="Arial" font-size="13.00" fill="#c2f0c2">[Minio]</text>
<text xml:space="preserve" text-anchor="start" x="2930.57" y="-811.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Хранение файлов</text>
</g>
<!-- push_service -->
<g id="node22" class="node">
<title>push_service</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2281.02,-1302.4 1960.98,-1302.4 1960.98,-1122.4 2281.02,-1122.4 2281.02,-1302.4"/>
<text xml:space="preserve" text-anchor="start" x="2035.41" y="-1215.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Notification Service</text>
<text xml:space="preserve" text-anchor="start" x="1992.21" y="-1192.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Push Policy и доставка уведомлений</text>
</g>
<!-- postgres_1 -->
<g id="node23" class="node">
<title>postgres_1</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M2281.02,-914.84C2281.02,-923.87 2209.3,-931.2 2121,-931.2 2032.7,-931.2 1960.98,-923.87 1960.98,-914.84 1960.98,-914.84 1960.98,-767.56 1960.98,-767.56 1960.98,-758.53 2032.7,-751.2 2121,-751.2 2209.3,-751.2 2281.02,-758.53 2281.02,-767.56 2281.02,-767.56 2281.02,-914.84 2281.02,-914.84"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M2281.02,-914.84C2281.02,-905.81 2209.3,-898.47 2121,-898.47 2032.7,-898.47 1960.98,-905.81 1960.98,-914.84"/>
<text xml:space="preserve" text-anchor="start" x="2015.95" y="-854" font-family="Arial" font-size="20.00" fill="#f8fafc">Notification Settings DB</text>
<text xml:space="preserve" text-anchor="start" x="2085.59" y="-833" font-family="Arial" font-size="13.00" fill="#c2f0c2">[PostgreSql]</text>
<text xml:space="preserve" text-anchor="start" x="2017.22" y="-811.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Настройки push уведомлений</text>
</g>
<!-- api_gateway -->
<g id="node24" class="node">
<title>api_gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1851.02,-1676 1530.98,-1676 1530.98,-1496 1851.02,-1496 1851.02,-1676"/>
<text xml:space="preserve" text-anchor="start" x="1632.64" y="-1589" font-family="Arial" font-size="20.00" fill="#f8fafc">API Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1619.73" y="-1566" font-family="Arial" font-size="15.00" fill="#c2f0c2">REST, auth, rate limit</text>
</g>
<!-- integration -->
<g id="node25" class="node">
<title>integration</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1851.02,-1302.4 1530.98,-1302.4 1530.98,-1122.4 1851.02,-1122.4 1851.02,-1302.4"/>
<text xml:space="preserve" text-anchor="start" x="1627.08" y="-1215.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Plugin Service</text>
<text xml:space="preserve" text-anchor="start" x="1575.96" y="-1192.4" font-family="Arial" font-size="15.00" fill="#c2f0c2">Внешние коннекторы и webhooks</text>
</g>
<!-- kafka -->
<g id="node26" class="node">
<title>kafka</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1500.02,-927.2 1179.98,-927.2 1179.98,-755.2 1500.02,-755.2 1500.02,-927.2"/>
<text xml:space="preserve" text-anchor="start" x="1279.41" y="-843" font-family="Arial" font-size="20.00" fill="#f8fafc">Message Bus</text>
<text xml:space="preserve" text-anchor="start" x="1319.77" y="-822" font-family="Arial" font-size="13.00" fill="#c2f0c2">[Kafka]</text>
</g>
<!-- ws_gateway -->
<g id="node27" class="node">
<title>ws_gateway</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2325.18,-588 1960.82,-588 1960.82,-408 2325.18,-408 2325.18,-588"/>
<text xml:space="preserve" text-anchor="start" x="2049.63" y="-510" font-family="Arial" font-size="20.00" fill="#f8fafc">WebSocket Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1980.87" y="-487" font-family="Arial" font-size="15.00" fill="#c2f0c2">WSS соединения, realtime доставка, presence</text>
<text xml:space="preserve" text-anchor="start" x="2120.07" y="-469" font-family="Arial" font-size="15.00" fill="#c2f0c2">routing</text>
</g>
<!-- keydb -->
<g id="node28" class="node">
<title>keydb</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M2303.02,-211.64C2303.02,-220.67 2231.3,-228 2143,-228 2054.7,-228 1982.98,-220.67 1982.98,-211.64 1982.98,-211.64 1982.98,-64.36 1982.98,-64.36 1982.98,-55.33 2054.7,-48 2143,-48 2231.3,-48 2303.02,-55.33 2303.02,-64.36 2303.02,-64.36 2303.02,-211.64 2303.02,-211.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M2303.02,-211.64C2303.02,-202.61 2231.3,-195.27 2143,-195.27 2054.7,-195.27 1982.98,-202.61 1982.98,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="2077.98" y="-150.8" font-family="Arial" font-size="20.00" fill="#f8fafc">KeyDB / Redis</text>
<text xml:space="preserve" text-anchor="start" x="2100.73" y="-129.8" font-family="Arial" font-size="13.00" fill="#c2f0c2">[KeyDB/Redis]</text>
<text xml:space="preserve" text-anchor="start" x="2080.88" y="-108.2" font-family="Arial" font-size="15.00" fill="#c2f0c2">presence/sessions</text>
</g>
<!-- api_deploy&#45;&gt;search_deploy -->
<g id="edge1" class="edge">
<title>api_deploy&#45;&gt;search_deploy</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4312.41,-1843.06C4245.28,-1793.01 4163.24,-1731.83 4096.18,-1681.83"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4310.83,-1845.16 4318.42,-1847.54 4313.97,-1840.95 4310.83,-1845.16"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4098.08,-1679.98 4090.5,-1677.6 4094.95,-1684.19 4098.08,-1679.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4232.7,-1766.4 4232.7,-1789.2 4286.93,-1789.2 4286.93,-1766.4 4232.7,-1766.4"/>
<text xml:space="preserve" text-anchor="start" x="4235.7" y="-1772.2" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- api_deploy&#45;&gt;file_deploy -->
<g id="edge2" class="edge">
<title>api_deploy&#45;&gt;file_deploy</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4440,-1839.13C4440,-1791.32 4440,-1734.11 4440,-1686.27"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4437.38,-1839.05 4440,-1846.55 4442.63,-1839.05 4437.38,-1839.05"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4442.63,-1686.43 4440,-1678.93 4437.38,-1686.43 4442.63,-1686.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4440,-1766.4 4440,-1789.2 4494.23,-1789.2 4494.23,-1766.4 4440,-1766.4"/>
<text xml:space="preserve" text-anchor="start" x="4443" y="-1772.2" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- api_deploy&#45;&gt;notification_deploy -->
<g id="edge3" class="edge">
<title>api_deploy&#45;&gt;notification_deploy</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4564.88,-1843.06C4630.45,-1793.11 4710.56,-1732.08 4776.12,-1682.13"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4563.41,-1840.88 4559.04,-1847.52 4566.59,-1845.06 4563.41,-1840.88"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4777.67,-1684.26 4782.05,-1677.62 4774.49,-1680.08 4777.67,-1684.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4656.68,-1766.4 4656.68,-1789.2 4710.9,-1789.2 4710.9,-1766.4 4656.68,-1766.4"/>
<text xml:space="preserve" text-anchor="start" x="4659.68" y="-1772.2" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- api_deploy&#45;&gt;integration_deploy -->
<g id="edge4" class="edge">
<title>api_deploy&#45;&gt;integration_deploy</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4251.28,-1911.42C4103.23,-1885.57 3894.67,-1838.33 3726,-1758.4 3683.73,-1738.37 3641.47,-1710.05 3604.87,-1682.19"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4250.57,-1913.96 4258.41,-1912.65 4251.47,-1908.78 4250.57,-1913.96"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3606.61,-1680.22 3599.06,-1677.73 3603.41,-1684.38 3606.61,-1680.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3780.44,-1766.4 3780.44,-1789.2 3834.66,-1789.2 3834.66,-1766.4 3780.44,-1766.4"/>
<text xml:space="preserve" text-anchor="start" x="3783.44" y="-1772.2" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- api_deploy&#45;&gt;chat_deploy -->
<g id="edge5" class="edge">
<title>api_deploy&#45;&gt;chat_deploy</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4628.84,-1909.36C4772.33,-1882.74 4971.95,-1835.46 5134,-1758.4 5176.37,-1738.25 5218.85,-1709.98 5255.72,-1682.2"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4628.49,-1906.75 4621.58,-1910.69 4629.44,-1911.92 4628.49,-1906.75"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5257.2,-1684.37 5261.57,-1677.74 5254.02,-1680.19 5257.2,-1684.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5116.6,-1766.4 5116.6,-1789.2 5170.82,-1789.2 5170.82,-1766.4 5116.6,-1766.4"/>
<text xml:space="preserve" text-anchor="start" x="5119.6" y="-1772.2" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- api_deploy&#45;&gt;api_gateway -->
<g id="edge6" class="edge">
<title>api_deploy&#45;&gt;api_gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4261.22,-1915.36C3760.86,-1851.44 2351.06,-1671.33 1861.23,-1608.75"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1861.67,-1606.16 1853.9,-1607.81 1861,-1611.37 1861.67,-1606.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3230.09,-1766.4 3230.09,-1789.2 3263.32,-1789.2 3263.32,-1766.4 3230.09,-1766.4"/>
<text xml:space="preserve" text-anchor="start" x="3233.09" y="-1772.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- ws_deploy&#45;&gt;chat_deploy -->
<g id="edge7" class="edge">
<title>ws_deploy&#45;&gt;chat_deploy</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M5367,-1839.13C5367,-1791.32 5367,-1734.11 5367,-1686.27"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5364.38,-1839.05 5367,-1846.55 5369.63,-1839.05 5364.38,-1839.05"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5369.63,-1686.43 5367,-1678.93 5364.38,-1686.43 5369.63,-1686.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5367,-1766.4 5367,-1789.2 5421.23,-1789.2 5421.23,-1766.4 5367,-1766.4"/>
<text xml:space="preserve" text-anchor="start" x="5370" y="-1772.2" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- ws_deploy&#45;&gt;keydb_cluster -->
<g id="edge8" class="edge">
<title>ws_deploy&#45;&gt;keydb_cluster</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M5589.72,-1845.96C5637.43,-1821.13 5685.82,-1791.76 5727,-1758.4 5887.13,-1628.71 6026.33,-1430.27 6101.55,-1312.02"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5588.67,-1843.55 5583.2,-1849.31 5591.07,-1848.21 5588.67,-1843.55"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="6103.66,-1313.6 6105.46,-1305.86 6099.23,-1310.79 6103.66,-1313.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6001.3,-1574.6 6001.3,-1597.4 6043.08,-1597.4 6043.08,-1574.6 6001.3,-1574.6"/>
<text xml:space="preserve" text-anchor="start" x="6004.3" y="-1580.4" font-family="Arial" font-size="14.00" fill="#818cf8">[TCP]</text>
</g>
<!-- ws_deploy&#45;&gt;ws_gateway -->
<g id="edge9" class="edge">
<title>ws_deploy&#45;&gt;ws_gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5580.62,-1918.35C5919.17,-1880.92 6541,-1785.18 6541,-1587 6541,-1587 6541,-1587 6541,-1011.8 6541,-581.91 3183.01,-511.76 2335.46,-500.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2335.55,-498.28 2328.02,-500.81 2335.48,-503.53 2335.55,-498.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6541,-1201 6541,-1223.8 6574.23,-1223.8 6574.23,-1201 6541,-1201"/>
<text xml:space="preserve" text-anchor="start" x="6544" y="-1206.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- search_deploy&#45;&gt;kafka_cluster -->
<g id="edge10" class="edge">
<title>search_deploy&#45;&gt;kafka_cluster</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4110.7,-1496C4142.88,-1479.75 4177.72,-1465.09 4212,-1456 4354.26,-1418.29 4730.32,-1467.9 4874,-1436 4921.38,-1425.48 4927.34,-1405.09 4974.29,-1392.8 5007.02,-1384.23 5018.69,-1397.64 5050,-1384.8 5095.05,-1366.33 5138.33,-1335.37 5174.1,-1304.8"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5175.38,-1307.17 5179.33,-1300.27 5171.94,-1303.2 5175.38,-1307.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4974.29,-1403 4974.29,-1425.8 5027,-1425.8 5027,-1403 4974.29,-1403"/>
<text xml:space="preserve" text-anchor="start" x="4977.29" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[queue]</text>
</g>
<!-- search_deploy&#45;&gt;opensearch_cluster -->
<g id="edge11" class="edge">
<title>search_deploy&#45;&gt;opensearch_cluster</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3844.6,-1496.2C3797.13,-1461.85 3742.73,-1421.94 3694,-1384.8 3661.71,-1360.19 3627.15,-1333.02 3595.38,-1307.7"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3597.24,-1305.82 3589.74,-1303.2 3593.96,-1309.93 3597.24,-1305.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3761.18,-1403 3761.18,-1425.8 3811.51,-1425.8 3811.51,-1403 3761.18,-1403"/>
<text xml:space="preserve" text-anchor="start" x="3764.18" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[HTTP]</text>
</g>
<!-- search_deploy&#45;&gt;search_service -->
<g id="edge12" class="edge">
<title>search_deploy&#45;&gt;search_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3828.37,-1496.13C3795.91,-1479.71 3760.69,-1464.94 3726,-1456 3593.83,-1421.95 2630.65,-1467.15 2497.77,-1436 2454.27,-1425.8 2450.55,-1402.77 2407,-1392.8 2333.29,-1375.93 1119.49,-1402.6 1046,-1384.8 980.45,-1368.92 913.19,-1338.28 856.11,-1307.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="857.53,-1305.02 849.69,-1303.71 855,-1309.62 857.53,-1305.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2497.77,-1403 2497.77,-1425.8 2531,-1425.8 2531,-1403 2497.77,-1403"/>
<text xml:space="preserve" text-anchor="start" x="2500.77" y="-1408.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- file_deploy&#45;&gt;postgres_file -->
<g id="edge13" class="edge">
<title>file_deploy&#45;&gt;postgres_file</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4310.28,-1490.3C4233.5,-1434.24 4136.58,-1363.48 4059.93,-1307.53"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4308.36,-1492.14 4315.96,-1494.44 4311.45,-1487.9 4308.36,-1492.14"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4061.68,-1305.56 4054.08,-1303.25 4058.59,-1309.8 4061.68,-1305.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4231.09,-1403 4231.09,-1425.8 4272.87,-1425.8 4272.87,-1403 4231.09,-1403"/>
<text xml:space="preserve" text-anchor="start" x="4234.09" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[TCP]</text>
</g>
<!-- file_deploy&#45;&gt;s3_cluster -->
<g id="edge14" class="edge">
<title>file_deploy&#45;&gt;s3_cluster</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4426.42,-1496.46C4417.97,-1441.38 4407.08,-1370.41 4398.33,-1313.32"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4400.96,-1313.2 4397.23,-1306.18 4395.77,-1313.99 4400.96,-1313.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4416.61,-1403 4416.61,-1425.8 4466.94,-1425.8 4466.94,-1403 4416.61,-1403"/>
<text xml:space="preserve" text-anchor="start" x="4419.61" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[HTTP]</text>
</g>
<!-- file_deploy&#45;&gt;file_service -->
<g id="edge15" class="edge">
<title>file_deploy&#45;&gt;file_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4308.28,-1496.04C4277.88,-1479.68 4244.8,-1464.95 4212,-1456 4093.62,-1423.68 3227.33,-1463.61 3107.77,-1436 3063.45,-1425.77 3056.78,-1410.77 3015,-1392.8 2921.66,-1352.67 2816.18,-1310.78 2730.4,-1277.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2731.61,-1275.24 2723.67,-1274.98 2729.71,-1280.13 2731.61,-1275.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3107.77,-1403 3107.77,-1425.8 3141,-1425.8 3141,-1403 3107.77,-1403"/>
<text xml:space="preserve" text-anchor="start" x="3110.77" y="-1408.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- notification_deploy&#45;&gt;kafka_cluster -->
<g id="edge16" class="edge">
<title>notification_deploy&#45;&gt;kafka_cluster</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4993.41,-1496.16C5013.53,-1476.5 5034.6,-1455.66 5054,-1436 5095.72,-1393.71 5141.15,-1346.01 5179.13,-1305.64"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5180.83,-1307.66 5184.06,-1300.4 5177.01,-1304.07 5180.83,-1307.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5094.99,-1403 5094.99,-1425.8 5147.7,-1425.8 5147.7,-1403 5094.99,-1403"/>
<text xml:space="preserve" text-anchor="start" x="5097.99" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[queue]</text>
</g>
<!-- notification_deploy&#45;&gt;postgres_notif -->
<g id="edge17" class="edge">
<title>notification_deploy&#45;&gt;postgres_notif</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4830.49,-1487.13C4821.74,-1470.74 4814.15,-1453.39 4809.22,-1436 4798.13,-1396.83 4798.63,-1352.3 4803.09,-1313.42"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4828.08,-1488.19 4834,-1493.49 4832.67,-1485.65 4828.08,-1488.19"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4805.67,-1313.91 4803.99,-1306.14 4800.46,-1313.26 4805.67,-1313.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4809.22,-1403 4809.22,-1425.8 4851,-1425.8 4851,-1403 4809.22,-1403"/>
<text xml:space="preserve" text-anchor="start" x="4812.22" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[TCP]</text>
</g>
<!-- notification_deploy&#45;&gt;push_service -->
<g id="edge18" class="edge">
<title>notification_deploy&#45;&gt;push_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4766.56,-1496.01C4735.41,-1479.59 4701.53,-1464.85 4668,-1456 4468.36,-1403.28 3011.21,-1481.31 2809.77,-1436 2765,-1425.93 2760.71,-1403.1 2716,-1392.8 2674.63,-1383.27 2373.89,-1399.33 2334,-1384.8 2289.63,-1368.64 2247.59,-1339.16 2212.75,-1309.15"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2214.62,-1307.3 2207.25,-1304.33 2211.16,-1311.25 2214.62,-1307.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2809.77,-1403 2809.77,-1425.8 2843,-1425.8 2843,-1403 2809.77,-1403"/>
<text xml:space="preserve" text-anchor="start" x="2812.77" y="-1408.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- integration_deploy&#45;&gt;integration -->
<g id="edge19" class="edge">
<title>integration_deploy&#45;&gt;integration</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3356.99,-1496.08C3325.59,-1479.83 3291.56,-1465.14 3258,-1456 3129.66,-1421.04 2789.32,-1466.14 2659.77,-1436 2614.29,-1425.42 2609.59,-1402.89 2564,-1392.8 2527.65,-1384.75 1928.88,-1397.79 1894,-1384.8 1850.8,-1368.71 1810.39,-1339.06 1777.18,-1308.89"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1779.28,-1307.26 1771.99,-1304.09 1775.72,-1311.11 1779.28,-1307.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2659.77,-1403 2659.77,-1425.8 2693,-1425.8 2693,-1403 2659.77,-1403"/>
<text xml:space="preserve" text-anchor="start" x="2662.77" y="-1408.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- chat_deploy&#45;&gt;kafka_cluster -->
<g id="edge20" class="edge">
<title>chat_deploy&#45;&gt;kafka_cluster</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M5342.7,-1496.46C5327.13,-1439.75 5306.94,-1366.18 5291.04,-1308.27"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5293.64,-1307.84 5289.13,-1301.3 5288.58,-1309.23 5293.64,-1307.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5325.14,-1403 5325.14,-1425.8 5377.85,-1425.8 5377.85,-1403 5325.14,-1403"/>
<text xml:space="preserve" text-anchor="start" x="5328.14" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[queue]</text>
</g>
<!-- chat_deploy&#45;&gt;postgres_chat -->
<g id="edge21" class="edge">
<title>chat_deploy&#45;&gt;postgres_chat</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M5456.53,-1488.84C5507.48,-1434.13 5571.12,-1365.78 5622.26,-1310.85"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5454.69,-1486.97 5451.5,-1494.25 5458.53,-1490.55 5454.69,-1486.97"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5624.14,-1312.68 5627.33,-1305.41 5620.3,-1309.11 5624.14,-1312.68"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5540,-1403 5540,-1425.8 5581.78,-1425.8 5581.78,-1403 5540,-1403"/>
<text xml:space="preserve" text-anchor="start" x="5543" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[TCP]</text>
</g>
<!-- chat_deploy&#45;&gt;chat_service -->
<g id="edge22" class="edge">
<title>chat_deploy&#45;&gt;chat_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5232.88,-1496.13C5201.65,-1479.65 5167.65,-1464.86 5134,-1456 5017.02,-1425.21 3074.63,-1463.19 2956.77,-1436 2913.23,-1425.96 2909.56,-1402.71 2866,-1392.8 2833.7,-1385.45 512.35,-1395.51 481,-1384.8 434.63,-1368.95 390.34,-1339.19 353.63,-1308.85"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="355.67,-1307.13 348.23,-1304.32 352.29,-1311.15 355.67,-1307.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2956.77,-1403 2956.77,-1425.8 2990,-1425.8 2990,-1403 2956.77,-1403"/>
<text xml:space="preserve" text-anchor="start" x="2959.77" y="-1408.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- keydb_cluster&#45;&gt;keydb -->
<g id="edge23" class="edge">
<title>keydb_cluster&#45;&gt;keydb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M6065.89,-1122.17C6030.5,-1093.04 5988.54,-1062.94 5946,-1042.4 4640.76,-412.38 2866.45,-204.8 2314.19,-153.3"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2314.48,-150.69 2306.77,-152.61 2314,-155.92 2314.48,-150.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5028.91,-658.2 5028.91,-681 5068.37,-681 5068.37,-658.2 5028.91,-658.2"/>
<text xml:space="preserve" text-anchor="start" x="5031.91" y="-664" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- kafka_cluster&#45;&gt;ws_deploy -->
<g id="edge24" class="edge">
<title>kafka_cluster&#45;&gt;ws_deploy</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M5365.61,-1298.3C5400.97,-1326.87 5441.5,-1358.22 5480,-1384.8 5531.03,-1420.03 5569.31,-1402.11 5600,-1456 5666.51,-1572.79 5659.28,-1637.78 5600,-1758.4 5584.14,-1790.68 5559.39,-1818.79 5531.83,-1842.6"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5530.35,-1840.42 5526.31,-1847.25 5533.73,-1844.43 5530.35,-1840.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5647.21,-1574.6 5647.21,-1597.4 5699.92,-1597.4 5699.92,-1574.6 5647.21,-1574.6"/>
<text xml:space="preserve" text-anchor="start" x="5650.21" y="-1580.4" font-family="Arial" font-size="14.00" fill="#818cf8">[queue]</text>
</g>
<!-- kafka_cluster&#45;&gt;kafka -->
<g id="edge25" class="edge">
<title>kafka_cluster&#45;&gt;kafka</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5183.58,-1126.46C5146.35,-1093.58 5099.52,-1059.72 5050,-1042.4 5018.94,-1031.54 3898.02,-1039.64 3865.54,-1034.4 3803.95,-1024.47 3793.45,-1001.92 3732,-991.2 3329.42,-920.95 2300.78,-970.36 1894,-931.2 1764.47,-918.73 1619.28,-895.04 1510.04,-875.24"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1510.74,-872.7 1502.89,-873.94 1509.8,-877.86 1510.74,-872.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3865.54,-1001.4 3865.54,-1024.2 3905,-1024.2 3905,-1001.4 3865.54,-1001.4"/>
<text xml:space="preserve" text-anchor="start" x="3868.54" y="-1007.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- postgres_chat&#45;&gt;postgres -->
<g id="edge26" class="edge">
<title>postgres_chat&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M5617.48,-1121.42C5578.02,-1090.1 5529.86,-1058.73 5480,-1042.4 5441.9,-1029.92 4075.9,-1042.06 4036.54,-1034.4 3985.57,-1024.48 3978.91,-1001.41 3928,-991.2 3546,-914.58 798.8,-1030.29 422,-931.2 419.62,-930.57 417.24,-929.91 414.86,-929.2"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="415.89,-926.78 407.94,-927.01 414.3,-931.78 415.89,-926.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4036.54,-1001.4 4036.54,-1024.2 4076,-1024.2 4076,-1001.4 4036.54,-1001.4"/>
<text xml:space="preserve" text-anchor="start" x="4039.54" y="-1007.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- opensearch_cluster&#45;&gt;opensearch -->
<g id="edge27" class="edge">
<title>opensearch_cluster&#45;&gt;opensearch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3375.22,-1301.75C3327.51,-1337.09 3268.15,-1373.57 3207.73,-1391.73 3190.94,-1396.78 3185.81,-1391.77 3168.27,-1391.73 2974.57,-1391.35 1602.86,-1461.51 1425,-1384.8 1388.26,-1368.96 1355.85,-1340.43 1329.75,-1311.08"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1331.79,-1309.43 1324.89,-1305.48 1327.83,-1312.87 1331.79,-1309.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3168.27,-1403 3168.27,-1425.8 3207.73,-1425.8 3207.73,-1403 3168.27,-1403"/>
<text xml:space="preserve" text-anchor="start" x="3171.27" y="-1408.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- postgres_file&#45;&gt;db_fs -->
<g id="edge28" class="edge">
<title>postgres_file&#45;&gt;db_fs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3832.81,-1121.61C3792.72,-1090.52 3744.04,-1059.26 3694,-1042.4 3666.46,-1033.12 3461.48,-1037.11 3432.54,-1034.4 3138.44,-1006.9 3060.34,-1011.18 2776,-931.2 2761.41,-927.09 2746.47,-922.28 2731.61,-917.05"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2732.65,-914.64 2724.7,-914.58 2730.88,-919.58 2732.65,-914.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3432.54,-1001.4 3432.54,-1024.2 3472,-1024.2 3472,-1001.4 3432.54,-1001.4"/>
<text xml:space="preserve" text-anchor="start" x="3435.54" y="-1007.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- s3_cluster&#45;&gt;s3 -->
<g id="edge29" class="edge">
<title>s3_cluster&#45;&gt;s3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4294.63,-1121.63C4243.18,-1074.92 4174.49,-1021.41 4103,-991.2 3937.1,-921.09 3430.58,-874.52 3162.15,-854.06"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3162.61,-851.47 3154.93,-853.52 3162.21,-856.7 3162.61,-851.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4179.9,-1001.4 4179.9,-1024.2 4219.36,-1024.2 4219.36,-1001.4 4179.9,-1001.4"/>
<text xml:space="preserve" text-anchor="start" x="4182.9" y="-1007.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- postgres_notif&#45;&gt;postgres_1 -->
<g id="edge30" class="edge">
<title>postgres_notif&#45;&gt;postgres_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4731.75,-1121.53C4693.52,-1090.23 4646.74,-1058.84 4598,-1042.4 4573.56,-1034.16 3695.13,-1037.63 3669.54,-1034.4 3590.25,-1024.39 3574.05,-1002.92 3495,-991.2 2983.89,-915.45 2837.81,-1045.83 2334,-931.2 2320.03,-928.02 2305.81,-923.99 2291.68,-919.42"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2292.73,-917 2284.78,-917.12 2291.07,-921.98 2292.73,-917"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3669.54,-1001.4 3669.54,-1024.2 3709,-1024.2 3709,-1001.4 3669.54,-1001.4"/>
<text xml:space="preserve" text-anchor="start" x="3672.54" y="-1007.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- chat_service&#45;&gt;postgres -->
<g id="edge37" class="edge">
<title>chat_service&#45;&gt;postgres</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M166.26,-1114.43C148.42,-1090.05 132.3,-1062.71 122.72,-1034.4 111.24,-1000.48 123.53,-967.24 144.63,-938.18"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="163.95,-1115.74 170.55,-1120.16 168.15,-1112.59 163.95,-1115.74"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="146.5,-940.06 148.97,-932.51 142.33,-936.87 146.5,-940.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="122.72,-991.2 122.72,-1034.4 268,-1034.4 268,-991.2 122.72,-991.2"/>
<text xml:space="preserve" text-anchor="start" x="125.72" y="-1017.4" font-family="Arial" font-size="14.00" fill="#818cf8">messages/chats/users</text>
<text xml:space="preserve" text-anchor="start" x="125.72" y="-996.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- chat_service&#45;&gt;kafka -->
<g id="edge38" class="edge">
<title>chat_service&#45;&gt;kafka</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M356.51,-1122.6C393.38,-1093.34 437.02,-1063.04 481,-1042.4 706.23,-936.71 991.56,-884.54 1169.99,-860.52"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1170.17,-863.15 1177.26,-859.55 1169.48,-857.94 1170.17,-863.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="591.29,-991.2 591.29,-1034.4 774.71,-1034.4 774.71,-991.2 591.29,-991.2"/>
<text xml:space="preserve" text-anchor="start" x="594.29" y="-1017.4" font-family="Arial" font-size="14.00" fill="#818cf8">Publish/Consume Messages</text>
<text xml:space="preserve" text-anchor="start" x="594.29" y="-996.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- search_service&#45;&gt;opensearch -->
<g id="edge39" class="edge">
<title>search_service&#45;&gt;opensearch</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M867.95,-1212.4C937.57,-1212.4 1019.27,-1212.4 1090.08,-1212.4"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1089.92,-1215.03 1097.42,-1212.4 1089.92,-1209.78 1089.92,-1215.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="923.13,-1215.4 923.13,-1258.6 1045.87,-1258.6 1045.87,-1215.4 923.13,-1215.4"/>
<text xml:space="preserve" text-anchor="start" x="926.13" y="-1241.6" font-family="Arial" font-size="14.00" fill="#818cf8">indexing/searching</text>
<text xml:space="preserve" text-anchor="start" x="926.13" y="-1220.8" font-family="Arial" font-size="12.00" fill="#818cf8">[ HTTP ]</text>
</g>
<!-- search_service&#45;&gt;kafka -->
<g id="edge40" class="edge">
<title>search_service&#45;&gt;kafka</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M860.18,-1122.5C958.75,-1064.92 1086.7,-990.17 1185.69,-932.35"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1186.8,-934.73 1191.96,-928.68 1184.16,-930.2 1186.8,-934.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1080.61,-991.2 1080.61,-1034.4 1253.91,-1034.4 1253.91,-991.2 1080.61,-991.2"/>
<text xml:space="preserve" text-anchor="start" x="1083.61" y="-1017.4" font-family="Arial" font-size="14.00" fill="#818cf8">Consume Message Events</text>
<text xml:space="preserve" text-anchor="start" x="1083.61" y="-996.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- file_service&#45;&gt;db_fs -->
<g id="edge41" class="edge">
<title>file_service&#45;&gt;db_fs</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2561,-1112.18C2561,-1059.56 2561,-995.07 2561,-942.32"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2558.38,-1111.97 2561,-1119.47 2563.63,-1111.97 2558.38,-1111.97"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2563.63,-942.46 2561,-934.96 2558.38,-942.46 2563.63,-942.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2561,-991.2 2561,-1034.4 2647.16,-1034.4 2647.16,-991.2 2561,-991.2"/>
<text xml:space="preserve" text-anchor="start" x="2564" y="-1017.4" font-family="Arial" font-size="14.00" fill="#818cf8">file metadata</text>
<text xml:space="preserve" text-anchor="start" x="2564" y="-996.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- file_service&#45;&gt;s3 -->
<g id="edge42" class="edge">
<title>file_service&#45;&gt;s3</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2664.54,-1122.5C2729.75,-1066.51 2813.86,-994.29 2880.37,-937.18"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2881.71,-939.5 2885.69,-932.62 2878.29,-935.52 2881.71,-939.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2814.51,-991.2 2814.51,-1034.4 2924.78,-1034.4 2924.78,-991.2 2814.51,-991.2"/>
<text xml:space="preserve" text-anchor="start" x="2817.51" y="-1017.4" font-family="Arial" font-size="14.00" fill="#818cf8">Store/Read Files</text>
<text xml:space="preserve" text-anchor="start" x="2817.51" y="-996.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ HTTP ]</text>
</g>
<!-- push_service&#45;&gt;postgres_1 -->
<g id="edge44" class="edge">
<title>push_service&#45;&gt;postgres_1</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2121,-1112.18C2121,-1059.56 2121,-995.07 2121,-942.32"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2118.38,-1111.97 2121,-1119.47 2123.63,-1111.97 2118.38,-1111.97"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2123.63,-942.46 2121,-934.96 2118.38,-942.46 2123.63,-942.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2121,-991.2 2121,-1034.4 2246.07,-1034.4 2246.07,-991.2 2121,-991.2"/>
<text xml:space="preserve" text-anchor="start" x="2124" y="-1017.4" font-family="Arial" font-size="14.00" fill="#818cf8">notification settings</text>
<text xml:space="preserve" text-anchor="start" x="2124" y="-996.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- push_service&#45;&gt;kafka -->
<g id="edge43" class="edge">
<title>push_service&#45;&gt;kafka</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2058.59,-1122.73C2031.34,-1091.38 1996.54,-1059.64 1957,-1042.4 1920.12,-1026.32 1633.01,-1047.59 1595,-1034.4 1534.72,-1013.48 1477.1,-972.53 1431.93,-933.78"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1433.89,-932 1426.51,-929.06 1430.45,-935.96 1433.89,-932"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1595,-991.2 1595,-1034.4 1822,-1034.4 1822,-991.2 1595,-991.2"/>
<text xml:space="preserve" text-anchor="start" x="1598" y="-1017.4" font-family="Arial" font-size="14.00" fill="#818cf8">Consume Message Created Events</text>
<text xml:space="preserve" text-anchor="start" x="1598" y="-996.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- push_service&#45;&gt;keydb -->
<g id="edge45" class="edge">
<title>push_service&#45;&gt;keydb</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2030.85,-1114.71C1987.47,-1063.54 1938.05,-997.65 1906,-931.2 1850.11,-815.33 1830.48,-775.69 1846.16,-648 1859.56,-538.89 1854.91,-505.34 1906,-408 1939.5,-344.18 1991.18,-283.05 2037.75,-235.24"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2028.65,-1116.17 2035.51,-1120.17 2032.64,-1112.76 2028.65,-1116.17"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2039.38,-237.33 2042.76,-230.14 2035.63,-233.65 2039.38,-237.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1846.16,-648 1846.16,-691.2 1979,-691.2 1979,-648 1846.16,-648"/>
<text xml:space="preserve" text-anchor="start" x="1849.16" y="-674.2" font-family="Arial" font-size="14.00" fill="#818cf8">read active sessions</text>
<text xml:space="preserve" text-anchor="start" x="1849.16" y="-653.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- api_gateway&#45;&gt;chat_service -->
<g id="edge32" class="edge">
<title>api_gateway&#45;&gt;chat_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M1521.06,-1582.68C1280.04,-1573.76 829.5,-1536.12 481,-1384.8 438.01,-1366.13 395.9,-1337.37 360.06,-1308.7"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1520.7,-1585.29 1528.29,-1582.93 1520.89,-1580.04 1520.7,-1585.29"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="361.87,-1306.79 354.39,-1304.11 358.57,-1310.87 361.87,-1306.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="604.56,-1403 604.56,-1425.8 658.79,-1425.8 658.79,-1403 604.56,-1403"/>
<text xml:space="preserve" text-anchor="start" x="607.56" y="-1408.8" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- api_gateway&#45;&gt;search_service -->
<g id="edge33" class="edge">
<title>api_gateway&#45;&gt;search_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M1521.22,-1540.75C1389.55,-1504.41 1203.55,-1448.67 1046,-1384.8 989.8,-1362.02 930.26,-1333.42 877.06,-1306.15"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1520.16,-1543.18 1528.09,-1542.63 1521.55,-1538.11 1520.16,-1543.18"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="878.45,-1303.92 870.58,-1302.82 876.05,-1308.59 878.45,-1303.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1166.79,-1392.8 1166.79,-1436 1390.62,-1436 1390.62,-1392.8 1166.79,-1392.8"/>
<text xml:space="preserve" text-anchor="start" x="1169.79" y="-1419" font-family="Arial" font-size="14.00" fill="#818cf8">Поиск пользователей/сообщений</text>
<text xml:space="preserve" text-anchor="start" x="1169.79" y="-1398.2" font-family="Arial" font-size="12.00" fill="#818cf8">[ GRPC ]</text>
</g>
<!-- api_gateway&#45;&gt;file_service -->
<g id="edge34" class="edge">
<title>api_gateway&#45;&gt;file_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M1860.81,-1532.96C1948.26,-1505.45 2056.33,-1470.33 2152,-1436 2201.17,-1418.36 2210.5,-1404.92 2261.31,-1392.8 2298.95,-1383.82 2312.14,-1399.32 2348,-1384.8 2391.05,-1367.37 2432.31,-1338.22 2466.85,-1308.86"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1860.05,-1530.45 1853.68,-1535.2 1861.62,-1535.46 1860.05,-1530.45"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2468.32,-1311.06 2472.28,-1304.18 2464.89,-1307.09 2468.32,-1311.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2261.31,-1392.8 2261.31,-1436 2384,-1436 2384,-1392.8 2261.31,-1392.8"/>
<text xml:space="preserve" text-anchor="start" x="2264.31" y="-1419" font-family="Arial" font-size="14.00" fill="#818cf8">Работа с файлами</text>
<text xml:space="preserve" text-anchor="start" x="2264.31" y="-1398.2" font-family="Arial" font-size="12.00" fill="#818cf8">[ GRPC ]</text>
</g>
<!-- api_gateway&#45;&gt;push_service -->
<g id="edge35" class="edge">
<title>api_gateway&#45;&gt;push_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M1791.32,-1489.24C1831.67,-1454.87 1880.22,-1418.33 1929.28,-1392.8 1940.65,-1386.88 1946.03,-1391.44 1957,-1384.8 1989.53,-1365.12 2019.92,-1337.34 2045.5,-1309.86"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1789.64,-1487.23 1785.66,-1494.11 1793.06,-1491.21 1789.64,-1487.23"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2047.4,-1311.67 2050.53,-1304.36 2043.53,-1308.12 2047.4,-1311.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1929.28,-1392.8 1929.28,-1436 2129,-1436 2129,-1392.8 1929.28,-1392.8"/>
<text xml:space="preserve" text-anchor="start" x="1932.28" y="-1419" font-family="Arial" font-size="14.00" fill="#818cf8">Настройка push уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="1932.28" y="-1398.2" font-family="Arial" font-size="12.00" fill="#818cf8">[ GRPC ]</text>
</g>
<!-- api_gateway&#45;&gt;integration -->
<g id="edge31" class="edge">
<title>api_gateway&#45;&gt;integration</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1691,-1496.46C1691,-1441.19 1691,-1369.93 1691,-1312.73"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1693.63,-1312.75 1691,-1305.25 1688.38,-1312.75 1693.63,-1312.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1691,-1403 1691,-1425.8 1734.34,-1425.8 1734.34,-1403 1691,-1403"/>
<text xml:space="preserve" text-anchor="start" x="1694" y="-1408.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">REST</text>
</g>
<!-- integration&#45;&gt;kafka -->
<g id="edge36" class="edge">
<title>integration&#45;&gt;kafka</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1609.28,-1122.57C1575.1,-1091.4 1532.88,-1059.84 1488,-1042.4 1470.33,-1035.53 1330.66,-1048.12 1317.57,-1034.4 1293.19,-1008.85 1292.62,-971.87 1300.41,-937.16"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1302.95,-937.81 1302.21,-929.9 1297.86,-936.55 1302.95,-937.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1317.57,-1001.4 1317.57,-1024.2 1480,-1024.2 1480,-1001.4 1317.57,-1001.4"/>
<text xml:space="preserve" text-anchor="start" x="1320.57" y="-1007.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">consume/produce events</text>
</g>
<!-- kafka&#45;&gt;ws_gateway -->
<g id="edge46" class="edge">
<title>kafka&#45;&gt;ws_gateway</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M1499.82,-800.66C1610.23,-773.92 1760.63,-738.62 1894,-711.2 1943.53,-701.02 1963.27,-718.24 2006,-691.2 2042.39,-668.17 2071.99,-631.66 2094.25,-596.62"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2096.43,-598.08 2098.15,-590.32 2091.97,-595.31 2096.43,-598.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2054.29,-648 2054.29,-691.2 2162.23,-691.2 2162.23,-648 2054.29,-648"/>
<text xml:space="preserve" text-anchor="start" x="2057.29" y="-674.2" font-family="Arial" font-size="14.00" fill="#818cf8">message events</text>
<text xml:space="preserve" text-anchor="start" x="2057.29" y="-653.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- ws_gateway&#45;&gt;keydb -->
<g id="edge47" class="edge">
<title>ws_gateway&#45;&gt;keydb</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2143,-397.62C2143,-348.22 2143,-288.65 2143,-239.14"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2140.38,-397.52 2143,-405.02 2145.63,-397.52 2140.38,-397.52"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2145.63,-239.27 2143,-231.77 2140.38,-239.27 2145.63,-239.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2143,-288 2143,-348 2447.72,-348 2447.72,-288 2143,-288"/>
<text xml:space="preserve" text-anchor="start" x="2146" y="-331" font-family="Arial" font-size="14.00" fill="#818cf8">Хранение WS сессий и статуса присутствия</text>
<text xml:space="preserve" text-anchor="start" x="2146" y="-314.2" font-family="Arial" font-size="14.00" fill="#818cf8">пользователей с TTL</text>
<text xml:space="preserve" text-anchor="start" x="2146" y="-293.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="1563pt" height="1522pt"
 viewBox="0.00 0.00 1563.00 1522.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1506.65)">
<!-- employee -->
<g id="node1" class="node">
<title>employee</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1103.04,-1491.6 783,-1491.6 783,-1311.6 1103.04,-1311.6 1103.04,-1491.6"/>
<text xml:space="preserve" text-anchor="start" x="893.01" y="-1393.6" font-family="Arial" font-size="20.00" fill="#eef2ff">Сотрудник</text>
</g>
<!-- clients -->
<g id="node2" class="node">
<title>clients</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1318.04,-1168.8 998,-1168.8 998,-988.8 1318.04,-988.8 1318.04,-1168.8"/>
<text xml:space="preserve" text-anchor="start" x="1127.45" y="-1070.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Clients</text>
</g>
<!-- admin -->
<g id="node3" class="node">
<title>admin</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1533.04,-1491.6 1213,-1491.6 1213,-1311.6 1533.04,-1311.6 1533.04,-1491.6"/>
<text xml:space="preserve" text-anchor="start" x="1300.78" y="-1393.6" font-family="Arial" font-size="20.00" fill="#eef2ff">Администратор</text>
</g>
<!-- prod -->
<g id="node4" class="node">
<title>prod</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1056.04,-846 736,-846 736,-666 1056.04,-666 1056.04,-846"/>
<text xml:space="preserve" text-anchor="start" x="818.77" y="-748" font-family="Arial" font-size="20.00" fill="#eff6ff">Production (DC1)</text>
</g>
<!-- tb -->
<g id="node5" class="node">
<title>tb</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1082.36,-523.2 709.68,-523.2 709.68,-343.2 1082.36,-343.2 1082.36,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="841.55" y="-454.2" font-family="Arial" font-size="20.00" fill="#eff6ff">TeamBridge</text>
<text xml:space="preserve" text-anchor="start" x="785.17" y="-431.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">Корпоративная чат&#45;платформа:</text>
<text xml:space="preserve" text-anchor="start" x="729.73" y="-413.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">realtime сообщения, файлы, поиск, уведомления</text>
<text xml:space="preserve" text-anchor="start" x="848.09" y="-395.2" font-family="Arial" font-size="15.00" fill="#bfdbfe">и интеграции</text>
</g>
<!-- dr -->
<g id="node6" class="node">
<title>dr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-523.2 0,-523.2 0,-343.2 320.04,-343.2 320.04,-523.2"/>
<text xml:space="preserve" text-anchor="start" x="48.89" y="-425.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Disaster Recovery (DC2)</text>
</g>
<!-- infra -->
<g id="node7" class="node">
<title>infra</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1354.04,-180 1034,-180 1034,0 1354.04,0 1354.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="1135.11" y="-93" font-family="Arial" font-size="20.00" fill="#eff6ff">Infrastructure</text>
<text xml:space="preserve" text-anchor="start" x="1120.25" y="-70" font-family="Arial" font-size="15.00" fill="#bfdbfe">Infrastructure services</text>
</g>
<!-- push -->
<g id="node8" class="node">
<title>push</title>
<polygon fill="#827a8e" stroke="#6c6477" stroke-width="0" points="817.45,-180 438.59,-180 438.59,0 817.45,0 817.45,-180"/>
<text xml:space="preserve" text-anchor="start" x="454.64" y="-82" font-family="Arial" font-size="20.00" fill="#ffffff">Push Providers (APNs/FCM/WebPush)</text>
</g>
<!-- employee&#45;&gt;clients -->
<g id="edge1" class="edge">
<title>employee&#45;&gt;clients</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1002.62,-1311.67C1030.59,-1269.94 1063.98,-1220.11 1092.64,-1177.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1094.81,-1178.84 1096.8,-1171.14 1090.45,-1175.91 1094.81,-1178.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1056.97,-1228.8 1056.97,-1251.6 1140.76,-1251.6 1140.76,-1228.8 1056.97,-1228.8"/>
<text xml:space="preserve" text-anchor="start" x="1059.97" y="-1234.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">использует</text>
</g>
<!-- clients&#45;&gt;prod -->
<g id="edge3" class="edge">
<title>clients&#45;&gt;prod</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1085.39,-988.87C1051.1,-946.88 1010.11,-896.69 975.04,-853.76"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="977.26,-852.32 970.48,-848.17 973.19,-855.64 977.26,-852.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1034.88,-906 1034.88,-928.8 1061.87,-928.8 1061.87,-906 1034.88,-906"/>
<text xml:space="preserve" text-anchor="start" x="1037.88" y="-914.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- clients&#45;&gt;tb -->
<g id="edge4" class="edge">
<title>clients&#45;&gt;tb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1163.48,-989.2C1165.31,-902.8 1158.64,-769.63 1111.02,-666 1087.72,-615.29 1049.01,-568.3 1010.82,-530.07"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1013.03,-528.56 1005.85,-525.16 1009.34,-532.3 1013.03,-528.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1156.67,-744.6 1156.67,-767.4 1183.66,-767.4 1183.66,-744.6 1156.67,-744.6"/>
<text xml:space="preserve" text-anchor="start" x="1159.67" y="-752.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- admin&#45;&gt;clients -->
<g id="edge2" class="edge">
<title>admin&#45;&gt;clients</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1313.42,-1311.67C1285.45,-1269.94 1252.06,-1220.11 1223.4,-1177.36"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1225.59,-1175.91 1219.24,-1171.14 1221.23,-1178.84 1225.59,-1175.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1271.97,-1228.8 1271.97,-1251.6 1386.88,-1251.6 1386.88,-1228.8 1271.97,-1228.8"/>
<text xml:space="preserve" text-anchor="start" x="1274.97" y="-1234.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">администрирует</text>
</g>
<!-- prod&#45;&gt;tb -->
<g id="edge6" class="edge">
<title>prod&#45;&gt;tb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M896.02,-666.07C896.02,-624.87 896.02,-575.76 896.02,-533.37"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="898.65,-533.56 896.02,-526.06 893.4,-533.56 898.65,-533.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="896.02,-583.2 896.02,-606 923.01,-606 923.01,-583.2 896.02,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="899.02" y="-591.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- prod&#45;&gt;dr -->
<g id="edge5" class="edge">
<title>prod&#45;&gt;dr</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M726.01,-712.03C635.93,-686.45 524.64,-650.32 430.03,-606 383.78,-584.34 335.93,-556.08 293.6,-528.76"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="725.21,-714.53 733.14,-714.04 726.64,-709.48 725.21,-714.53"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="295.19,-526.66 287.47,-524.78 292.33,-531.07 295.19,-526.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="430.03,-583.2 430.03,-606 457.02,-606 457.02,-583.2 430.03,-583.2"/>
<text xml:space="preserve" text-anchor="start" x="433.03" y="-591.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#818cf8">[...]</text>
</g>
<!-- prod&#45;&gt;infra -->
<g id="edge7" class="edge">
<title>prod&#45;&gt;infra</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1018.69,-666.08C1063.17,-627.3 1109.26,-578.12 1137.02,-523.2 1190.11,-418.16 1199.73,-281.25 1199.11,-189.95"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1201.74,-190.1 1199.03,-182.63 1196.49,-190.16 1201.74,-190.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1188.85,-421.8 1188.85,-444.6 1229.85,-444.6 1229.85,-421.8 1188.85,-421.8"/>
<text xml:space="preserve" text-anchor="start" x="1191.85" y="-427.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">OIDC</text>
</g>
<!-- prod&#45;&gt;push -->
<g id="edge8" class="edge">
<title>prod&#45;&gt;push</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M736.29,-672.21C681.16,-634.74 625.67,-584.86 595.35,-523.2 543.66,-418.09 566.91,-281 593.08,-189.69"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="595.59,-190.46 595.18,-182.52 590.55,-188.98 595.59,-190.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="595.35,-421.8 595.35,-444.6 655.02,-444.6 655.02,-421.8 595.35,-421.8"/>
<text xml:space="preserve" text-anchor="start" x="598.35" y="-427.6" font-family="Arial" font-size="14.00" fill="#22c55e">[HTTPS]</text>
</g>
<!-- tb&#45;&gt;infra -->
<g id="edge9" class="edge">
<title>tb&#45;&gt;infra</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M973.54,-343.44C1015.28,-295.65 1066.83,-236.63 1109.59,-187.67"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="1111.43,-189.56 1114.38,-182.18 1107.47,-186.11 1111.43,-189.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1062.86,-250.2 1062.86,-273 1089.86,-273 1089.86,-250.2 1062.86,-250.2"/>
<text xml:space="preserve" text-anchor="start" x="1065.86" y="-258.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- tb&#45;&gt;push -->
<g id="edge10" class="edge">
<title>tb&#45;&gt;push</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M826.31,-343.44C788.84,-295.75 742.59,-236.87 704.19,-187.97"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="706.42,-186.56 699.72,-182.28 702.29,-189.8 706.42,-186.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="778.07,-240 778.07,-283.2 923.36,-283.2 923.36,-240 778.07,-240"/>
<text xml:space="preserve" text-anchor="start" x="781.07" y="-266.2" font-family="Arial" font-size="14.00" fill="#22c55e">Push Message Events</text>
<text xml:space="preserve" text-anchor="start" x="781.07" y="-245.4" font-family="Arial" font-size="12.00" fill="#22c55e">[ HTTPS ]</text>
</g>
</g>
</svg>
`;case"context":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.1.3 (0)
 -->
<!-- Pages: 1 -->
<svg width="6927pt" height="3036pt"
 viewBox="0.00 0.00 6927.00 3036.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 3020.65)">
<g id="clust1" class="cluster">
<title>cluster_clients</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3591,-2384.4 3591,-2665.6 4851,-2665.6 4851,-2384.4 3591,-2384.4"/>
<text xml:space="preserve" text-anchor="start" x="3599" y="-2652.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLIENTS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_tb</title>
<polygon fill="#1a468d" stroke="#1c3979" points="1745,-330.8 1745,-2010.8 4548,-2010.8 4548,-330.8 1745,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="1753" y="-1997.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TEAMBRIDGE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_fs</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3678,-1034 3678,-1658.4 4508,-1658.4 4508,-1034 3678,-1034"/>
<text xml:space="preserve" text-anchor="start" x="3686" y="-1645.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FILE MANAGEMENT</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_chat</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1785,-1034 1785,-1658.4 2205,-1658.4 2205,-1034 1785,-1034"/>
<text xml:space="preserve" text-anchor="start" x="1793" y="-1645.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CHAT SYSTEM</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_search</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2245,-1377.2 2245,-1658.4 3198,-1658.4 3198,-1377.2 2245,-1377.2"/>
<text xml:space="preserve" text-anchor="start" x="2253" y="-1645.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SEARCHING SYSTEM</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_notification</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="3238,-1034 3238,-1658.4 3638,-1658.4 3638,-1034 3238,-1034"/>
<text xml:space="preserve" text-anchor="start" x="3246" y="-1645.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NOTIFICATION SYSTEM</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_infra</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-2997.6 838,-2997.6 838,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-2984.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">INFRASTRUCTURE</text>
</g>
<!-- web -->
<g id="node1" class="node">
<title>web</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3951.02,-2604.4 3630.98,-2604.4 3630.98,-2424.4 3951.02,-2424.4 3951.02,-2604.4"/>
<text xml:space="preserve" text-anchor="start" x="3742.09" y="-2506.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Web Client</text>
</g>
<!-- desktop -->
<g id="node2" class="node">
<title>desktop</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4381.02,-2604.4 4060.98,-2604.4 4060.98,-2424.4 4381.02,-2424.4 4381.02,-2604.4"/>
<text xml:space="preserve" text-anchor="start" x="4155.97" y="-2506.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Desktop Client</text>
</g>
<!-- mobile -->
<g id="node3" class="node">
<title>mobile</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4811.02,-2604.4 4490.98,-2604.4 4490.98,-2424.4 4811.02,-2424.4 4811.02,-2604.4"/>
<text xml:space="preserve" text-anchor="start" x="4593.2" y="-2506.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Mobile Client</text>
</g>
<!-- file_service -->
<g id="node4" class="node">
<title>file_service</title>
<polygon fill="#23a2d9" stroke="#1892c5" stroke-width="0" points="4038.02,-1597.2 3717.98,-1597.2 3717.98,-1417.2 4038.02,-1417.2 4038.02,-1597.2"/>
<text xml:space="preserve" text-anchor="start" x="3825.76" y="-1510.2" font-family="Arial" font-size="20.00" fill="#ffffff">File Service</text>
<text xml:space="preserve" text-anchor="start" x="3790.48" y="-1487.2" font-family="Arial" font-size="15.00" fill="#ffffff">Загрузка/чтение файлов</text>
</g>
<!-- s3 -->
<g id="node5" class="node">
<title>s3</title>
<path fill="#858484" stroke="#747172" stroke-width="2" d="M4468.02,-1237.64C4468.02,-1246.67 4396.3,-1254 4308,-1254 4219.7,-1254 4147.98,-1246.67 4147.98,-1237.64 4147.98,-1237.64 4147.98,-1090.36 4147.98,-1090.36 4147.98,-1081.33 4219.7,-1074 4308,-1074 4396.3,-1074 4468.02,-1081.33 4468.02,-1090.36 4468.02,-1090.36 4468.02,-1237.64 4468.02,-1237.64"/>
<path fill="none" stroke="#747172" stroke-width="2" d="M4468.02,-1237.64C4468.02,-1228.61 4396.3,-1221.27 4308,-1221.27 4219.7,-1221.27 4147.98,-1228.61 4147.98,-1237.64"/>
<text xml:space="preserve" text-anchor="start" x="4295.77" y="-1176.8" font-family="Arial" font-size="20.00" fill="#ffffff">S3</text>
<text xml:space="preserve" text-anchor="start" x="4288.86" y="-1155.8" font-family="Arial" font-size="13.00" fill="#ffffff">[Minio]</text>
<text xml:space="preserve" text-anchor="start" x="4247.57" y="-1134.2" font-family="Arial" font-size="15.00" fill="#ffffff">Хранение файлов</text>
</g>
<!-- db_fs -->
<g id="node6" class="node">
<title>db_fs</title>
<path fill="#858484" stroke="#747172" stroke-width="2" d="M4038.02,-1237.64C4038.02,-1246.67 3966.3,-1254 3878,-1254 3789.7,-1254 3717.98,-1246.67 3717.98,-1237.64 3717.98,-1237.64 3717.98,-1090.36 3717.98,-1090.36 3717.98,-1081.33 3789.7,-1074 3878,-1074 3966.3,-1074 4038.02,-1081.33 4038.02,-1090.36 4038.02,-1090.36 4038.02,-1237.64 4038.02,-1237.64"/>
<path fill="none" stroke="#747172" stroke-width="2" d="M4038.02,-1237.64C4038.02,-1228.61 3966.3,-1221.27 3878,-1221.27 3789.7,-1221.27 3717.98,-1228.61 3717.98,-1237.64"/>
<text xml:space="preserve" text-anchor="start" x="3800.74" y="-1176.8" font-family="Arial" font-size="20.00" fill="#ffffff">File Metadata DB</text>
<text xml:space="preserve" text-anchor="start" x="3842.59" y="-1155.8" font-family="Arial" font-size="13.00" fill="#ffffff">[PostgreSql]</text>
<text xml:space="preserve" text-anchor="start" x="3809.24" y="-1134.2" font-family="Arial" font-size="15.00" fill="#ffffff">Метаданные файлов</text>
</g>
<!-- chat_service -->
<g id="node7" class="node">
<title>chat_service</title>
<polygon fill="#23a2d9" stroke="#1892c5" stroke-width="0" points="2165.09,-1597.2 1824.91,-1597.2 1824.91,-1417.2 2165.09,-1417.2 2165.09,-1597.2"/>
<text xml:space="preserve" text-anchor="start" x="1937.75" y="-1519.2" font-family="Arial" font-size="20.00" fill="#ffffff">Chat Service</text>
<text xml:space="preserve" text-anchor="start" x="1844.97" y="-1496.2" font-family="Arial" font-size="15.00" fill="#ffffff">Обработка сообщений, чатов, участников,</text>
<text xml:space="preserve" text-anchor="start" x="1901.23" y="-1478.2" font-family="Arial" font-size="15.00" fill="#ffffff">администрирование чатов</text>
</g>
<!-- postgres -->
<g id="node8" class="node">
<title>postgres</title>
<path fill="#858484" stroke="#747172" stroke-width="2" d="M2155.02,-1237.64C2155.02,-1246.67 2083.3,-1254 1995,-1254 1906.7,-1254 1834.98,-1246.67 1834.98,-1237.64 1834.98,-1237.64 1834.98,-1090.36 1834.98,-1090.36 1834.98,-1081.33 1906.7,-1074 1995,-1074 2083.3,-1074 2155.02,-1081.33 2155.02,-1090.36 2155.02,-1090.36 2155.02,-1237.64 2155.02,-1237.64"/>
<path fill="none" stroke="#747172" stroke-width="2" d="M2155.02,-1237.64C2155.02,-1228.61 2083.3,-1221.27 1995,-1221.27 1906.7,-1221.27 1834.98,-1228.61 1834.98,-1237.64"/>
<text xml:space="preserve" text-anchor="start" x="1957.21" y="-1176.8" font-family="Arial" font-size="20.00" fill="#ffffff">Chat DB</text>
<text xml:space="preserve" text-anchor="start" x="1959.59" y="-1155.8" font-family="Arial" font-size="13.00" fill="#ffffff">[PostgreSql]</text>
<text xml:space="preserve" text-anchor="start" x="1894.98" y="-1134.2" font-family="Arial" font-size="15.00" fill="#ffffff">Чаты, сообщения, участники</text>
</g>
<!-- search_service -->
<g id="node9" class="node">
<title>search_service</title>
<polygon fill="#23a2d9" stroke="#1892c5" stroke-width="0" points="3158.02,-1597.2 2837.98,-1597.2 2837.98,-1417.2 3158.02,-1417.2 3158.02,-1597.2"/>
<text xml:space="preserve" text-anchor="start" x="2930.19" y="-1510.2" font-family="Arial" font-size="20.00" fill="#ffffff">Search Service</text>
<text xml:space="preserve" text-anchor="start" x="2927.15" y="-1487.2" font-family="Arial" font-size="15.00" fill="#ffffff">Индексация и поиск</text>
</g>
<!-- opensearch -->
<g id="node10" class="node">
<title>opensearch</title>
<path fill="#858484" stroke="#747172" stroke-width="2" d="M2605.02,-1580.84C2605.02,-1589.87 2533.3,-1597.2 2445,-1597.2 2356.7,-1597.2 2284.98,-1589.87 2284.98,-1580.84 2284.98,-1580.84 2284.98,-1433.56 2284.98,-1433.56 2284.98,-1424.53 2356.7,-1417.2 2445,-1417.2 2533.3,-1417.2 2605.02,-1424.53 2605.02,-1433.56 2605.02,-1433.56 2605.02,-1580.84 2605.02,-1580.84"/>
<path fill="none" stroke="#747172" stroke-width="2" d="M2605.02,-1580.84C2605.02,-1571.81 2533.3,-1564.47 2445,-1564.47 2356.7,-1564.47 2284.98,-1571.81 2284.98,-1580.84"/>
<text xml:space="preserve" text-anchor="start" x="2388.85" y="-1520" font-family="Arial" font-size="20.00" fill="#ffffff">OpenSearch</text>
<text xml:space="preserve" text-anchor="start" x="2404.89" y="-1499" font-family="Arial" font-size="13.00" fill="#ffffff">[OpenSearch]</text>
<text xml:space="preserve" text-anchor="start" x="2424.16" y="-1477.4" font-family="Arial" font-size="15.00" fill="#ffffff">Поиск</text>
</g>
<!-- push_service -->
<g id="node11" class="node">
<title>push_service</title>
<polygon fill="#23a2d9" stroke="#1892c5" stroke-width="0" points="3598.02,-1597.2 3277.98,-1597.2 3277.98,-1417.2 3598.02,-1417.2 3598.02,-1597.2"/>
<text xml:space="preserve" text-anchor="start" x="3352.41" y="-1510.2" font-family="Arial" font-size="20.00" fill="#ffffff">Notification Service</text>
<text xml:space="preserve" text-anchor="start" x="3309.21" y="-1487.2" font-family="Arial" font-size="15.00" fill="#ffffff">Push Policy и доставка уведомлений</text>
</g>
<!-- postgres_1 -->
<g id="node12" class="node">
<title>postgres_1</title>
<path fill="#858484" stroke="#747172" stroke-width="2" d="M3598.02,-1237.64C3598.02,-1246.67 3526.3,-1254 3438,-1254 3349.7,-1254 3277.98,-1246.67 3277.98,-1237.64 3277.98,-1237.64 3277.98,-1090.36 3277.98,-1090.36 3277.98,-1081.33 3349.7,-1074 3438,-1074 3526.3,-1074 3598.02,-1081.33 3598.02,-1090.36 3598.02,-1090.36 3598.02,-1237.64 3598.02,-1237.64"/>
<path fill="none" stroke="#747172" stroke-width="2" d="M3598.02,-1237.64C3598.02,-1228.61 3526.3,-1221.27 3438,-1221.27 3349.7,-1221.27 3277.98,-1228.61 3277.98,-1237.64"/>
<text xml:space="preserve" text-anchor="start" x="3332.95" y="-1176.8" font-family="Arial" font-size="20.00" fill="#ffffff">Notification Settings DB</text>
<text xml:space="preserve" text-anchor="start" x="3402.59" y="-1155.8" font-family="Arial" font-size="13.00" fill="#ffffff">[PostgreSql]</text>
<text xml:space="preserve" text-anchor="start" x="3334.22" y="-1134.2" font-family="Arial" font-size="15.00" fill="#ffffff">Настройки push уведомлений</text>
</g>
<!-- api_gateway -->
<g id="node13" class="node">
<title>api_gateway</title>
<polygon fill="#23a2d9" stroke="#1892c5" stroke-width="0" points="3607.02,-1949.6 3286.98,-1949.6 3286.98,-1769.6 3607.02,-1769.6 3607.02,-1949.6"/>
<text xml:space="preserve" text-anchor="start" x="3388.64" y="-1862.6" font-family="Arial" font-size="20.00" fill="#ffffff">API Gateway</text>
<text xml:space="preserve" text-anchor="start" x="3375.73" y="-1839.6" font-family="Arial" font-size="15.00" fill="#ffffff">REST, auth, rate limit</text>
</g>
<!-- kafka -->
<g id="node14" class="node">
<title>kafka</title>
<polygon fill="#858484" stroke="#747172" stroke-width="0" points="3056.02,-1250 2735.98,-1250 2735.98,-1078 3056.02,-1078 3056.02,-1250"/>
<text xml:space="preserve" text-anchor="start" x="2835.41" y="-1165.8" font-family="Arial" font-size="20.00" fill="#ffffff">Message Bus</text>
<text xml:space="preserve" text-anchor="start" x="2875.77" y="-1144.8" font-family="Arial" font-size="13.00" fill="#ffffff">[Kafka]</text>
</g>
<!-- ws_gateway -->
<g id="node15" class="node">
<title>ws_gateway</title>
<polygon fill="#23a2d9" stroke="#1892c5" stroke-width="0" points="3642.18,-910.8 3277.82,-910.8 3277.82,-730.8 3642.18,-730.8 3642.18,-910.8"/>
<text xml:space="preserve" text-anchor="start" x="3366.63" y="-832.8" font-family="Arial" font-size="20.00" fill="#ffffff">WebSocket Gateway</text>
<text xml:space="preserve" text-anchor="start" x="3297.87" y="-809.8" font-family="Arial" font-size="15.00" fill="#ffffff">WSS соединения, realtime доставка, presence</text>
<text xml:space="preserve" text-anchor="start" x="3437.07" y="-791.8" font-family="Arial" font-size="15.00" fill="#ffffff">routing</text>
</g>
<!-- keydb -->
<g id="node16" class="node">
<title>keydb</title>
<path fill="#858484" stroke="#747172" stroke-width="2" d="M3620.02,-534.44C3620.02,-543.47 3548.3,-550.8 3460,-550.8 3371.7,-550.8 3299.98,-543.47 3299.98,-534.44 3299.98,-534.44 3299.98,-387.16 3299.98,-387.16 3299.98,-378.13 3371.7,-370.8 3460,-370.8 3548.3,-370.8 3620.02,-378.13 3620.02,-387.16 3620.02,-387.16 3620.02,-534.44 3620.02,-534.44"/>
<path fill="none" stroke="#747172" stroke-width="2" d="M3620.02,-534.44C3620.02,-525.41 3548.3,-518.07 3460,-518.07 3371.7,-518.07 3299.98,-525.41 3299.98,-534.44"/>
<text xml:space="preserve" text-anchor="start" x="3394.98" y="-473.6" font-family="Arial" font-size="20.00" fill="#ffffff">KeyDB / Redis</text>
<text xml:space="preserve" text-anchor="start" x="3417.73" y="-452.6" font-family="Arial" font-size="13.00" fill="#ffffff">[KeyDB/Redis]</text>
<text xml:space="preserve" text-anchor="start" x="3397.88" y="-431" font-family="Arial" font-size="15.00" fill="#ffffff">presence/sessions</text>
</g>
<!-- config_service -->
<g id="node17" class="node">
<title>config_service</title>
<polygon fill="#827a8e" stroke="#6c6477" stroke-width="0" points="368.02,-2936.4 47.98,-2936.4 47.98,-2756.4 368.02,-2756.4 368.02,-2936.4"/>
<text xml:space="preserve" text-anchor="start" x="112.39" y="-2848.2" font-family="Arial" font-size="20.00" fill="#ffffff">Configuration Service</text>
<text xml:space="preserve" text-anchor="start" x="184.16" y="-2827.2" font-family="Arial" font-size="13.00" fill="#ffffff">[Consul]</text>
</g>
<!-- victoria_metrics -->
<g id="node18" class="node">
<title>victoria_metrics</title>
<polygon fill="#827a8e" stroke="#6c6477" stroke-width="0" points="798.02,-2936.4 477.98,-2936.4 477.98,-2756.4 798.02,-2756.4 798.02,-2936.4"/>
<text xml:space="preserve" text-anchor="start" x="572.43" y="-2838.4" font-family="Arial" font-size="20.00" fill="#ffffff">VictoriaMetrics</text>
</g>
<!-- keycloak -->
<g id="node19" class="node">
<title>keycloak</title>
<polygon fill="#827a8e" stroke="#6c6477" stroke-width="0" points="798.02,-550.8 477.98,-550.8 477.98,-370.8 798.02,-370.8 798.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="539.09" y="-452.8" font-family="Arial" font-size="20.00" fill="#ffffff">Keycloak (OIDC/SSO)</text>
</g>
<!-- ldap -->
<g id="node20" class="node">
<title>ldap</title>
<polygon fill="#827a8e" stroke="#6c6477" stroke-width="0" points="798.02,-228 477.98,-228 477.98,-48 798.02,-48 798.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="533.53" y="-130" font-family="Arial" font-size="20.00" fill="#ffffff">LDAP / Active Directory</text>
</g>
<!-- vault -->
<g id="node21" class="node">
<title>vault</title>
<polygon fill="#827a8e" stroke="#6c6477" stroke-width="0" points="368.02,-2604.4 47.98,-2604.4 47.98,-2424.4 368.02,-2424.4 368.02,-2604.4"/>
<text xml:space="preserve" text-anchor="start" x="185.21" y="-2506.4" font-family="Arial" font-size="20.00" fill="#ffffff">Vault</text>
</g>
<!-- admin -->
<g id="node22" class="node">
<title>admin</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="4381.02,-2936.4 4060.98,-2936.4 4060.98,-2756.4 4381.02,-2756.4 4381.02,-2936.4"/>
<text xml:space="preserve" text-anchor="start" x="4148.76" y="-2838.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Администратор</text>
</g>
<!-- employee -->
<g id="node23" class="node">
<title>employee</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="3951.02,-2936.4 3630.98,-2936.4 3630.98,-2756.4 3951.02,-2756.4 3951.02,-2936.4"/>
<text xml:space="preserve" text-anchor="start" x="3740.99" y="-2838.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Сотрудник</text>
</g>
<!-- prod -->
<g id="node24" class="node">
<title>prod</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4811.02,-2281.6 4490.98,-2281.6 4490.98,-2101.6 4811.02,-2101.6 4811.02,-2281.6"/>
<text xml:space="preserve" text-anchor="start" x="4573.75" y="-2183.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Production (DC1)</text>
</g>
<!-- dr -->
<g id="node25" class="node">
<title>dr</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5803.02,-1949.6 5482.98,-1949.6 5482.98,-1769.6 5803.02,-1769.6 5803.02,-1949.6"/>
<text xml:space="preserve" text-anchor="start" x="5531.87" y="-1851.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Disaster Recovery (DC2)</text>
</g>
<!-- push -->
<g id="node26" class="node">
<title>push</title>
<polygon fill="#827a8e" stroke="#6c6477" stroke-width="0" points="1705.43,-1254 1326.57,-1254 1326.57,-1074 1705.43,-1074 1705.43,-1254"/>
<text xml:space="preserve" text-anchor="start" x="1342.62" y="-1156" font-family="Arial" font-size="20.00" fill="#ffffff">Push Providers (APNs/FCM/WebPush)</text>
</g>
<!-- web&#45;&gt;prod -->
<g id="edge4" class="edge">
<title>web&#45;&gt;prod</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3924,-2424.43C3950.38,-2409.45 3978.46,-2395.26 4006,-2384.4 4206.2,-2305.48 4279.64,-2355.73 4481.4,-2283.58"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4482.11,-2286.12 4488.26,-2281.09 4480.32,-2281.19 4482.11,-2286.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4151.85,-2341.6 4151.85,-2364.4 4178.84,-2364.4 4178.84,-2341.6 4151.85,-2341.6"/>
<text xml:space="preserve" text-anchor="start" x="4154.85" y="-2349.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- desktop&#45;&gt;prod -->
<g id="edge5" class="edge">
<title>desktop&#45;&gt;prod</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4340.21,-2424.47C4397.3,-2381.87 4465.72,-2330.83 4523.81,-2287.49"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4525.07,-2289.83 4529.51,-2283.24 4521.93,-2285.62 4525.07,-2289.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4448.89,-2341.6 4448.89,-2364.4 4475.89,-2364.4 4475.89,-2341.6 4448.89,-2341.6"/>
<text xml:space="preserve" text-anchor="start" x="4451.89" y="-2349.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- mobile&#45;&gt;api_gateway -->
<g id="edge7" class="edge">
<title>mobile&#45;&gt;api_gateway</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M4436,-2384.4C4151.58,-2223.91 3814.3,-2048.36 3616.18,-1946.72"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="3617.42,-1944.4 3609.55,-1943.31 3615.02,-1949.07 3617.42,-1944.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3734.9,-2143.49 3734.9,-2220.29 3993.73,-2220.29 3993.73,-2143.49 3734.9,-2143.49"/>
<text xml:space="preserve" text-anchor="start" x="3737.9" y="-2203.29" font-family="Arial" font-size="14.00" fill="#22c55e">Синхронные операции: поиск, CRUD,</text>
<text xml:space="preserve" text-anchor="start" x="3737.9" y="-2186.49" font-family="Arial" font-size="14.00" fill="#22c55e">администрирование, загрузка/чтение</text>
<text xml:space="preserve" text-anchor="start" x="3737.9" y="-2169.69" font-family="Arial" font-size="14.00" fill="#22c55e">файлов</text>
<text xml:space="preserve" text-anchor="start" x="3737.9" y="-2148.89" font-family="Arial" font-size="12.00" fill="#22c55e">[ HTTPS ]</text>
</g>
<!-- mobile&#45;&gt;ws_gateway -->
<g id="edge8" class="edge">
<title>mobile&#45;&gt;ws_gateway</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4851,-2510.14C5316,-2500.84 6440.66,-2467.81 6575,-2364.4 6639.09,-2315.07 6635,-2273.48 6635,-2192.6 6635,-2192.6 6635,-2192.6 6635,-1163 6635,-1073.51 6645.8,-1025.53 6575,-970.8 6459.12,-881.23 4313,-836.62 3652.09,-824.96"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3652.56,-822.34 3645.01,-824.84 3652.47,-827.59 3652.56,-822.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4002.49,-837.56 4002.49,-914.36 4265.99,-914.36 4265.99,-837.56 4002.49,-837.56"/>
<text xml:space="preserve" text-anchor="start" x="4005.49" y="-897.36" font-family="Arial" font-size="14.00" fill="#818cf8">Realtime соединение, получение новых</text>
<text xml:space="preserve" text-anchor="start" x="4005.49" y="-880.56" font-family="Arial" font-size="14.00" fill="#818cf8">сообщений, событий присутствия и</text>
<text xml:space="preserve" text-anchor="start" x="4005.49" y="-863.76" font-family="Arial" font-size="14.00" fill="#818cf8">обновлений чатов</text>
<text xml:space="preserve" text-anchor="start" x="4005.49" y="-842.96" font-family="Arial" font-size="12.00" fill="#818cf8">[ WSS ]</text>
</g>
<!-- mobile&#45;&gt;prod -->
<g id="edge6" class="edge">
<title>mobile&#45;&gt;prod</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4651,-2424.47C4651,-2383.27 4651,-2334.16 4651,-2291.77"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4653.63,-2291.96 4651,-2284.46 4648.38,-2291.96 4653.63,-2291.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4651,-2341.6 4651,-2364.4 4677.99,-2364.4 4677.99,-2341.6 4651,-2341.6"/>
<text xml:space="preserve" text-anchor="start" x="4654" y="-2349.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- file_service&#45;&gt;s3 -->
<g id="edge30" class="edge">
<title>file_service&#45;&gt;s3</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4000.33,-1417.35C4026.51,-1397.82 4053.85,-1377.05 4079,-1357.2 4118.18,-1326.28 4160.24,-1291.47 4197.48,-1260.06"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4199.01,-1262.21 4203.04,-1255.36 4195.62,-1258.2 4199.01,-1262.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4130.04,-1314 4130.04,-1357.2 4240.31,-1357.2 4240.31,-1314 4130.04,-1314"/>
<text xml:space="preserve" text-anchor="start" x="4133.04" y="-1340.2" font-family="Arial" font-size="14.00" fill="#818cf8">Store/Read Files</text>
<text xml:space="preserve" text-anchor="start" x="4133.04" y="-1319.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ HTTP ]</text>
</g>
<!-- file_service&#45;&gt;db_fs -->
<g id="edge31" class="edge">
<title>file_service&#45;&gt;db_fs</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3878,-1407.01C3878,-1362.39 3878,-1309.82 3878,-1265.1"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3875.38,-1406.92 3878,-1414.42 3880.63,-1406.92 3875.38,-1406.92"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3880.63,-1265.32 3878,-1257.82 3875.38,-1265.32 3880.63,-1265.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3878,-1314 3878,-1357.2 3964.16,-1357.2 3964.16,-1314 3878,-1314"/>
<text xml:space="preserve" text-anchor="start" x="3881" y="-1340.2" font-family="Arial" font-size="14.00" fill="#818cf8">file metadata</text>
<text xml:space="preserve" text-anchor="start" x="3881" y="-1319.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- chat_service&#45;&gt;postgres -->
<g id="edge32" class="edge">
<title>chat_service&#45;&gt;postgres</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M1995,-1407.01C1995,-1362.39 1995,-1309.82 1995,-1265.1"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1992.38,-1406.92 1995,-1414.42 1997.63,-1406.92 1992.38,-1406.92"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="1997.63,-1265.32 1995,-1257.82 1992.38,-1265.32 1997.63,-1265.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1995,-1314 1995,-1357.2 2140.28,-1357.2 2140.28,-1314 1995,-1314"/>
<text xml:space="preserve" text-anchor="start" x="1998" y="-1340.2" font-family="Arial" font-size="14.00" fill="#818cf8">messages/chats/users</text>
<text xml:space="preserve" text-anchor="start" x="1998" y="-1319.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- chat_service&#45;&gt;kafka -->
<g id="edge33" class="edge">
<title>chat_service&#45;&gt;kafka</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2134.66,-1417.25C2161.63,-1402.44 2190.17,-1388.31 2218,-1377.2 2436.17,-1290.1 2512.66,-1338.12 2732,-1254 2732.33,-1253.87 2732.65,-1253.75 2732.98,-1253.62"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2733.68,-1256.17 2739.67,-1250.95 2731.73,-1251.29 2733.68,-1256.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2474.56,-1314 2474.56,-1357.2 2657.98,-1357.2 2657.98,-1314 2474.56,-1314"/>
<text xml:space="preserve" text-anchor="start" x="2477.56" y="-1340.2" font-family="Arial" font-size="14.00" fill="#818cf8">Publish/Consume Messages</text>
<text xml:space="preserve" text-anchor="start" x="2477.56" y="-1319.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- chat_service&#45;&gt;keycloak -->
<g id="edge34" class="edge">
<title>chat_service&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M1916.37,-1417.43C1735.27,-1214.69 1289.82,-726.25 1101,-610.8 1011.34,-555.98 899.42,-519.24 808.08,-495.97"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="808.75,-493.43 800.84,-494.15 807.47,-498.52 808.75,-493.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1537.78,-981 1537.78,-1003.8 1614.59,-1003.8 1614.59,-981 1537.78,-981"/>
<text xml:space="preserve" text-anchor="start" x="1540.78" y="-986.8" font-family="Arial" font-size="14.00" fill="#c9c9c9">profile sync</text>
</g>
<!-- search_service&#45;&gt;opensearch -->
<g id="edge35" class="edge">
<title>search_service&#45;&gt;opensearch</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2838.34,-1507.2C2768.7,-1507.2 2686.95,-1507.2 2616.07,-1507.2"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2616.22,-1504.58 2608.72,-1507.2 2616.22,-1509.83 2616.22,-1504.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2660.13,-1510.2 2660.13,-1553.4 2782.87,-1553.4 2782.87,-1510.2 2660.13,-1510.2"/>
<text xml:space="preserve" text-anchor="start" x="2663.13" y="-1536.4" font-family="Arial" font-size="14.00" fill="#818cf8">indexing/searching</text>
<text xml:space="preserve" text-anchor="start" x="2663.13" y="-1515.6" font-family="Arial" font-size="12.00" fill="#818cf8">[ HTTP ]</text>
</g>
<!-- search_service&#45;&gt;kafka -->
<g id="edge36" class="edge">
<title>search_service&#45;&gt;kafka</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M2971.47,-1417.44C2957,-1369.05 2939.09,-1309.13 2924.35,-1259.82"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2926.88,-1259.12 2922.21,-1252.68 2921.85,-1260.62 2926.88,-1259.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2953.11,-1314 2953.11,-1357.2 3126.41,-1357.2 3126.41,-1314 2953.11,-1314"/>
<text xml:space="preserve" text-anchor="start" x="2956.11" y="-1340.2" font-family="Arial" font-size="14.00" fill="#818cf8">Consume Message Events</text>
<text xml:space="preserve" text-anchor="start" x="2956.11" y="-1319.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- push_service&#45;&gt;postgres_1 -->
<g id="edge38" class="edge">
<title>push_service&#45;&gt;postgres_1</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3438,-1407.01C3438,-1362.39 3438,-1309.82 3438,-1265.1"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3435.38,-1406.92 3438,-1414.42 3440.63,-1406.92 3435.38,-1406.92"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3440.63,-1265.32 3438,-1257.82 3435.38,-1265.32 3440.63,-1265.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3438,-1314 3438,-1357.2 3563.07,-1357.2 3563.07,-1314 3438,-1314"/>
<text xml:space="preserve" text-anchor="start" x="3441" y="-1340.2" font-family="Arial" font-size="14.00" fill="#818cf8">notification settings</text>
<text xml:space="preserve" text-anchor="start" x="3441" y="-1319.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- push_service&#45;&gt;kafka -->
<g id="edge39" class="edge">
<title>push_service&#45;&gt;kafka</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3339.48,-1417.4C3318.91,-1402.21 3296.59,-1387.9 3274,-1377.2 3236.97,-1359.65 3221.68,-1373.29 3184,-1357.2 3123.12,-1331.2 3061.33,-1292.01 3010.67,-1255.78"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3012.39,-1253.79 3004.77,-1251.53 3009.32,-1258.05 3012.39,-1253.79"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3184,-1314 3184,-1357.2 3411,-1357.2 3411,-1314 3184,-1314"/>
<text xml:space="preserve" text-anchor="start" x="3187" y="-1340.2" font-family="Arial" font-size="14.00" fill="#818cf8">Consume Message Created Events</text>
<text xml:space="preserve" text-anchor="start" x="3187" y="-1319.4" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- push_service&#45;&gt;keydb -->
<g id="edge40" class="edge">
<title>push_service&#45;&gt;keydb</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3440.08,-1407.28C3444.27,-1208.36 3453.68,-761.89 3457.89,-561.95"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3437.46,-1407.03 3439.93,-1414.58 3442.71,-1407.14 3437.46,-1407.03"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3460.51,-562.04 3458.05,-554.49 3455.27,-561.93 3460.51,-562.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3449.25,-970.8 3449.25,-1014 3582.09,-1014 3582.09,-970.8 3449.25,-970.8"/>
<text xml:space="preserve" text-anchor="start" x="3452.25" y="-997" font-family="Arial" font-size="14.00" fill="#818cf8">read active sessions</text>
<text xml:space="preserve" text-anchor="start" x="3452.25" y="-976.2" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- push_service&#45;&gt;push -->
<g id="edge37" class="edge">
<title>push_service&#45;&gt;push</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M3346.4,-1417.48C3324.31,-1401.05 3299.62,-1386.24 3274,-1377.2 3229.43,-1361.48 1610.39,-1385.72 1572.7,-1357.2 1543.67,-1335.23 1528.9,-1299.09 1521.58,-1264.05"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1524.16,-1263.57 1520.19,-1256.69 1519,-1264.55 1524.16,-1263.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1572.7,-1314 1572.7,-1357.2 1718,-1357.2 1718,-1314 1572.7,-1314"/>
<text xml:space="preserve" text-anchor="start" x="1575.7" y="-1340.2" font-family="Arial" font-size="14.00" fill="#22c55e">Push Message Events</text>
<text xml:space="preserve" text-anchor="start" x="1575.7" y="-1319.4" font-family="Arial" font-size="12.00" fill="#22c55e">[ HTTPS ]</text>
</g>
<!-- api_gateway&#45;&gt;file_service -->
<g id="edge25" class="edge">
<title>api_gateway&#45;&gt;file_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3579.93,-1763.59C3623.48,-1731.24 3671.56,-1694.19 3714,-1658.4 3734.41,-1641.18 3755.77,-1622.31 3776.06,-1603.92"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3578.47,-1761.41 3574.01,-1767.98 3581.59,-1765.63 3578.47,-1761.41"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3777.76,-1605.93 3781.55,-1598.94 3774.23,-1602.04 3777.76,-1605.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3700.21,-1666.4 3700.21,-1709.6 3822.9,-1709.6 3822.9,-1666.4 3700.21,-1666.4"/>
<text xml:space="preserve" text-anchor="start" x="3703.21" y="-1692.6" font-family="Arial" font-size="14.00" fill="#818cf8">Работа с файлами</text>
<text xml:space="preserve" text-anchor="start" x="3703.21" y="-1671.8" font-family="Arial" font-size="12.00" fill="#818cf8">[ GRPC ]</text>
</g>
<!-- api_gateway&#45;&gt;chat_service -->
<g id="edge26" class="edge">
<title>api_gateway&#45;&gt;chat_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3277.29,-1767.49C3085.79,-1696.03 3028.78,-1690.44 2825,-1666.4 2791.51,-1662.45 2250.19,-1668.46 2218,-1658.4 2179.6,-1646.4 2141.78,-1625.45 2108.49,-1602.94"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3276.32,-1769.93 3284.27,-1770.1 3278.16,-1765.02 3276.32,-1769.93"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="2110.29,-1600.99 2102.63,-1598.9 2107.32,-1605.32 2110.29,-1600.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3097.08,-1676.6 3097.08,-1699.4 3151.31,-1699.4 3151.31,-1676.6 3097.08,-1676.6"/>
<text xml:space="preserve" text-anchor="start" x="3100.08" y="-1682.4" font-family="Arial" font-size="14.00" fill="#818cf8">[GRPC]</text>
</g>
<!-- api_gateway&#45;&gt;search_service -->
<g id="edge27" class="edge">
<title>api_gateway&#45;&gt;search_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3325.09,-1763.46C3261.36,-1713.73 3183.58,-1653.03 3119.86,-1603.3"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3323.2,-1765.32 3330.73,-1767.86 3326.43,-1761.18 3323.2,-1765.32"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3121.67,-1601.39 3114.15,-1598.84 3118.44,-1605.52 3121.67,-1601.39"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3249.38,-1666.4 3249.38,-1709.6 3473.2,-1709.6 3473.2,-1666.4 3249.38,-1666.4"/>
<text xml:space="preserve" text-anchor="start" x="3252.38" y="-1692.6" font-family="Arial" font-size="14.00" fill="#818cf8">Поиск пользователей/сообщений</text>
<text xml:space="preserve" text-anchor="start" x="3252.38" y="-1671.8" font-family="Arial" font-size="12.00" fill="#818cf8">[ GRPC ]</text>
</g>
<!-- api_gateway&#45;&gt;push_service -->
<g id="edge28" class="edge">
<title>api_gateway&#45;&gt;push_service</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3444.45,-1759.33C3443.23,-1711.73 3441.77,-1654.87 3440.55,-1607.29"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3441.82,-1759.27 3444.64,-1766.7 3447.07,-1759.14 3441.82,-1759.27"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3443.17,-1607.44 3440.36,-1600.01 3437.93,-1607.57 3443.17,-1607.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3443.04,-1666.4 3443.04,-1709.6 3642.76,-1709.6 3642.76,-1666.4 3443.04,-1666.4"/>
<text xml:space="preserve" text-anchor="start" x="3446.04" y="-1692.6" font-family="Arial" font-size="14.00" fill="#818cf8">Настройка push уведомлений</text>
<text xml:space="preserve" text-anchor="start" x="3446.04" y="-1671.8" font-family="Arial" font-size="12.00" fill="#818cf8">[ GRPC ]</text>
</g>
<!-- api_gateway&#45;&gt;keycloak -->
<g id="edge29" class="edge">
<title>api_gateway&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3287.18,-1770.93C3285.79,-1770.48 3284.39,-1770.03 3283,-1769.6 3055.72,-1699.14 2449.16,-1714.85 2218,-1658.4 1741.27,-1541.99 1555.65,-1581.93 1190.57,-1254 950.54,-1038.4 1067.84,-852.4 854,-610.8 836.87,-591.44 816.71,-573.34 795.72,-556.9"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="797.58,-555.02 790.04,-552.52 794.38,-559.18 797.58,-555.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1190.57,-1152.6 1190.57,-1175.4 1272,-1175.4 1272,-1152.6 1190.57,-1152.6"/>
<text xml:space="preserve" text-anchor="start" x="1193.57" y="-1158.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">OIDC / JWT</text>
</g>
<!-- kafka&#45;&gt;ws_gateway -->
<g id="edge41" class="edge">
<title>kafka&#45;&gt;ws_gateway</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3055.92,-1089.79C3104.91,-1069.47 3159.49,-1048.92 3211,-1034 3259.99,-1019.81 3280.93,-1041.31 3324,-1014 3360.28,-991 3389.69,-954.49 3411.76,-919.44"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3413.94,-920.91 3415.63,-913.15 3409.47,-918.16 3413.94,-920.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3372.08,-970.8 3372.08,-1014 3480.03,-1014 3480.03,-970.8 3372.08,-970.8"/>
<text xml:space="preserve" text-anchor="start" x="3375.08" y="-997" font-family="Arial" font-size="14.00" fill="#818cf8">message events</text>
<text xml:space="preserve" text-anchor="start" x="3375.08" y="-976.2" font-family="Arial" font-size="12.00" fill="#818cf8">[ queue ]</text>
</g>
<!-- ws_gateway&#45;&gt;keydb -->
<g id="edge42" class="edge">
<title>ws_gateway&#45;&gt;keydb</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M3460,-720.42C3460,-671.02 3460,-611.45 3460,-561.94"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3457.38,-720.32 3460,-727.82 3462.63,-720.32 3457.38,-720.32"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="3462.63,-562.07 3460,-554.57 3457.38,-562.07 3462.63,-562.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3460,-610.8 3460,-670.8 3764.72,-670.8 3764.72,-610.8 3460,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="3463" y="-653.8" font-family="Arial" font-size="14.00" fill="#818cf8">Хранение WS сессий и статуса присутствия</text>
<text xml:space="preserve" text-anchor="start" x="3463" y="-637" font-family="Arial" font-size="14.00" fill="#818cf8">пользователей с TTL</text>
<text xml:space="preserve" text-anchor="start" x="3463" y="-616.2" font-family="Arial" font-size="12.00" fill="#818cf8">[ TCP ]</text>
</g>
<!-- ws_gateway&#45;&gt;keycloak -->
<g id="edge43" class="edge">
<title>ws_gateway&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3277.88,-731.91C3276.59,-731.53 3275.29,-731.16 3274,-730.8 3036.99,-664.19 1353.14,-520.88 807.91,-475.72"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="808.31,-473.12 800.62,-475.12 807.87,-478.36 808.31,-473.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2833.58,-629.4 2833.58,-652.2 2957.79,-652.2 2957.79,-629.4 2833.58,-629.4"/>
<text xml:space="preserve" text-anchor="start" x="2836.58" y="-635.2" font-family="Arial" font-size="14.00" fill="#c9c9c9">JWT verify (JWKS)</text>
</g>
<!-- config_service&#45;&gt;vault -->
<!-- keycloak&#45;&gt;ldap -->
<g id="edge44" class="edge">
<title>keycloak&#45;&gt;ldap</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M638,-370.87C638,-329.67 638,-280.56 638,-238.17"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-238.36 638,-230.86 635.38,-238.36 640.63,-238.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-288 638,-310.8 664.99,-310.8 664.99,-288 638,-288"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-296.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c9c9c9">[...]</text>
</g>
<!-- admin&#45;&gt;web -->
<g id="edge2" class="edge">
<title>admin&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4105.2,-2756.53C4046.28,-2711.31 3974.63,-2656.33 3914.64,-2610.29"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3916.58,-2608.47 3909.03,-2605.98 3913.38,-2612.63 3916.58,-2608.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4018.89,-2673.6 4018.89,-2696.4 4133.8,-2696.4 4133.8,-2673.6 4018.89,-2673.6"/>
<text xml:space="preserve" text-anchor="start" x="4021.89" y="-2679.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">администрирует</text>
</g>
<!-- employee&#45;&gt;web -->
<g id="edge3" class="edge">
<title>employee&#45;&gt;web</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M3791,-2756.53C3791,-2731.56 3791,-2703.6 3791,-2675.82"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3793.63,-2676.12 3791,-2668.62 3788.38,-2676.12 3793.63,-2676.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3707.21,-2711.16 3707.21,-2733.96 3791,-2733.96 3791,-2711.16 3707.21,-2711.16"/>
<text xml:space="preserve" text-anchor="start" x="3710.21" y="-2716.96" font-family="Arial" font-size="14.00" fill="#c9c9c9">использует</text>
</g>
<!-- prod&#45;&gt;file_service -->
<g id="edge11" class="edge">
<title>prod&#45;&gt;file_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4630.52,-2101.95C4599.04,-1985.39 4527.65,-1781.88 4392,-1666.4 4295.57,-1584.31 4157.02,-1544.8 4048.07,-1525.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4048.77,-1523.24 4040.94,-1524.57 4047.89,-1528.42 4048.77,-1523.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4600.89,-1848.2 4600.89,-1871 4634.13,-1871 4634.13,-1848.2 4600.89,-1848.2"/>
<text xml:space="preserve" text-anchor="start" x="4603.89" y="-1854" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- prod&#45;&gt;s3 -->
<g id="edge15" class="edge">
<title>prod&#45;&gt;s3</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4810.79,-2186.37C5175.31,-2175.06 6043.66,-2138.17 6131,-2041.6 6220.11,-1943.07 6141.08,-1375.94 6077,-1314 5963.62,-1204.4 4900.89,-1174.81 4479.21,-1167.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4479.33,-1164.73 4471.79,-1167.22 4479.24,-1169.98 4479.33,-1164.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6165.54,-1676.6 6165.54,-1699.4 6205.01,-1699.4 6205.01,-1676.6 6165.54,-1676.6"/>
<text xml:space="preserve" text-anchor="start" x="6168.54" y="-1682.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- prod&#45;&gt;db_fs -->
<g id="edge16" class="edge">
<title>prod&#45;&gt;db_fs</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4811.01,-2173.22C4971.3,-2152.15 5201.92,-2110.61 5257,-2041.6 5458.76,-1788.82 5485.17,-1554.56 5269,-1314 5188.78,-1224.72 4403.07,-1184.48 4049.21,-1170.78"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="4049.49,-1168.16 4041.9,-1170.49 4049.29,-1173.41 4049.49,-1168.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5419.91,-1676.6 5419.91,-1699.4 5459.37,-1699.4 5459.37,-1676.6 5419.91,-1676.6"/>
<text xml:space="preserve" text-anchor="start" x="5422.91" y="-1682.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- prod&#45;&gt;chat_service -->
<g id="edge12" class="edge">
<title>prod&#45;&gt;chat_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4539.2,-2101.69C4363.45,-1964.1 4027.96,-1710.74 3886,-1666.4 3841.77,-1652.58 2262.28,-1672.04 2218,-1658.4 2179.34,-1646.49 2141.3,-1625.44 2107.9,-1602.79"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2109.66,-1600.82 2102,-1598.72 2106.68,-1605.14 2109.66,-1600.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4417.81,-1848.2 4417.81,-1871 4451.05,-1871 4451.05,-1848.2 4417.81,-1848.2"/>
<text xml:space="preserve" text-anchor="start" x="4420.81" y="-1854" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- prod&#45;&gt;postgres -->
<g id="edge17" class="edge">
<title>prod&#45;&gt;postgres</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4810.73,-2183.33C5133.12,-2167.01 5837.17,-2122.44 5909,-2041.6 6117.44,-1807.01 5933.76,-1547.22 5670,-1377.2 5460.26,-1242 5368.98,-1366.28 3211,-1254 2837.89,-1234.59 2401.24,-1199.64 2166.03,-1179.8"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2166.38,-1177.2 2158.69,-1179.18 2165.94,-1182.43 2166.38,-1177.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5975.65,-1676.6 5975.65,-1699.4 6015.11,-1699.4 6015.11,-1676.6 5975.65,-1676.6"/>
<text xml:space="preserve" text-anchor="start" x="5978.65" y="-1682.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- prod&#45;&gt;search_service -->
<g id="edge13" class="edge">
<title>prod&#45;&gt;search_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4491.19,-2102.91C4489.79,-2102.46 4488.39,-2102.03 4487,-2101.6 4220.55,-2020.19 4135.88,-2097.81 3863,-2041.6 3389.85,-1944.14 3112.68,-2099.89 2828,-1709.6 2816.69,-1694.09 2820.33,-1684 2828,-1666.4 2830.09,-1661.59 2858.61,-1634.52 2891.71,-1604.09"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2893.3,-1606.19 2897.05,-1599.19 2889.75,-1602.32 2893.3,-1606.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3641.81,-1848.2 3641.81,-1871 3675.05,-1871 3675.05,-1848.2 3641.81,-1848.2"/>
<text xml:space="preserve" text-anchor="start" x="3644.81" y="-1854" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- prod&#45;&gt;opensearch -->
<g id="edge18" class="edge">
<title>prod&#45;&gt;opensearch</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4491.22,-2102.79C4489.82,-2102.38 4488.41,-2101.98 4487,-2101.6 4336.33,-2060.75 1787.12,-2122.95 1678.54,-2010.8 1603.97,-1933.78 1609.96,-1851.99 1678.54,-1769.6 1852.72,-1560.32 2037.26,-1779.77 2281,-1658.4 2308.17,-1644.87 2334.12,-1625.49 2357.03,-1605.12"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="2358.65,-1607.2 2362.44,-1600.22 2355.12,-1603.31 2358.65,-1607.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1678.54,-1848.2 1678.54,-1871 1718,-1871 1718,-1848.2 1678.54,-1848.2"/>
<text xml:space="preserve" text-anchor="start" x="1681.54" y="-1854" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- prod&#45;&gt;push_service -->
<g id="edge14" class="edge">
<title>prod&#45;&gt;push_service</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4590.06,-2101.77C4503.88,-1983.31 4334.87,-1775.85 4139,-1666.4 3973.05,-1573.67 3756.3,-1535.28 3608.02,-1519.4"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3608.65,-1516.82 3600.92,-1518.65 3608.1,-1522.04 3608.65,-1516.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4519.62,-1848.2 4519.62,-1871 4552.86,-1871 4552.86,-1848.2 4519.62,-1848.2"/>
<text xml:space="preserve" text-anchor="start" x="4522.62" y="-1854" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- prod&#45;&gt;postgres_1 -->
<g id="edge20" class="edge">
<title>prod&#45;&gt;postgres_1</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4810.57,-2171.31C4892.14,-2152.46 4984.61,-2115.21 5035,-2041.6 5217.68,-1774.77 5258.66,-1547.56 5035,-1314 4928.54,-1202.83 3801.23,-1287.52 3651,-1254 3637.02,-1250.88 3622.78,-1246.89 3608.65,-1242.35"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3609.7,-1239.93 3601.75,-1240.07 3608.05,-1244.91 3609.7,-1239.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5187.1,-1676.6 5187.1,-1699.4 5226.57,-1699.4 5226.57,-1676.6 5187.1,-1676.6"/>
<text xml:space="preserve" text-anchor="start" x="5190.1" y="-1682.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- prod&#45;&gt;api_gateway -->
<g id="edge10" class="edge">
<title>prod&#45;&gt;api_gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4491.15,-2103.02C4489.77,-2102.53 4488.38,-2102.06 4487,-2101.6 4314.72,-2044.07 4260.31,-2079.88 4082.77,-2041.6 3922.86,-2007.12 3743.93,-1954.93 3616.73,-1915.43"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3617.73,-1912.99 3609.78,-1913.27 3616.17,-1918.01 3617.73,-1912.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4082.77,-2018.8 4082.77,-2041.6 4116,-2041.6 4116,-2018.8 4082.77,-2018.8"/>
<text xml:space="preserve" text-anchor="start" x="4085.77" y="-2024.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- prod&#45;&gt;kafka -->
<g id="edge21" class="edge">
<title>prod&#45;&gt;kafka</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4771.9,-2101.82C4788.6,-2083.86 4803.32,-2063.64 4813,-2041.6 4942.96,-1745.49 5037.34,-1546.9 4813,-1314 4751.21,-1249.86 3298.98,-1267.87 3211,-1254 3163.18,-1246.46 3112.3,-1234.08 3065.7,-1220.92"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3066.67,-1218.47 3058.73,-1218.93 3065.22,-1223.52 3066.67,-1218.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4943.95,-1676.6 4943.95,-1699.4 4983.41,-1699.4 4983.41,-1676.6 4943.95,-1676.6"/>
<text xml:space="preserve" text-anchor="start" x="4946.95" y="-1682.4" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- prod&#45;&gt;ws_gateway -->
<g id="edge22" class="edge">
<title>prod&#45;&gt;ws_gateway</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4810.7,-2186.49C5210.97,-2174.83 6233.57,-2136.03 6353,-2041.6 6419.48,-1989.04 6413,-1945.35 6413,-1860.6 6413,-1860.6 6413,-1860.6 6413,-1163 6413,-1073.51 6423.7,-1025.65 6353,-970.8 6246.29,-888.01 4281.18,-839.24 3652.03,-825.7"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3652.54,-823.08 3644.99,-825.54 3652.43,-828.33 3652.54,-823.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6413,-1495.8 6413,-1518.6 6446.23,-1518.6 6446.23,-1495.8 6413,-1495.8"/>
<text xml:space="preserve" text-anchor="start" x="6416" y="-1501.6" font-family="Arial" font-size="14.00" fill="#c9c9c9">runs</text>
</g>
<!-- prod&#45;&gt;keydb -->
<g id="edge23" class="edge">
<title>prod&#45;&gt;keydb</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4810.93,-2189.61C5282.02,-2185.33 6641.23,-2162.5 6797,-2041.6 6863.95,-1989.64 6857,-1945.35 6857,-1860.6 6857,-1860.6 6857,-1860.6 6857,-819.8 6857,-723.16 6872.87,-670.66 6797,-610.8 6671.73,-511.97 4294.83,-472.94 3630.94,-463.94"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="3631.37,-461.32 3623.84,-463.84 3631.3,-466.57 3631.37,-461.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6857,-1324.2 6857,-1347 6896.46,-1347 6896.46,-1324.2 6857,-1324.2"/>
<text xml:space="preserve" text-anchor="start" x="6860" y="-1330" font-family="Arial" font-size="14.00" fill="#c9c9c9">hosts</text>
</g>
<!-- prod&#45;&gt;keycloak -->
<g id="edge24" class="edge">
<title>prod&#45;&gt;keycloak</title>
<path fill="none" stroke="#8d8d8d" stroke-width="2" stroke-dasharray="5,2" d="M4491.21,-2102.83C4489.81,-2102.41 4488.4,-2102 4487,-2101.6 4311.53,-2051.85 3030.04,-2022.03 2848,-2010.8 2602.34,-1995.65 638,-2106.72 638,-1860.6 638,-1860.6 638,-1860.6 638,-819.8 638,-732.27 638,-632.71 638,-560.84"/>
<polygon fill="#8d8d8d" stroke="#8d8d8d" stroke-width="2" points="640.63,-560.97 638,-553.47 635.38,-560.97 640.63,-560.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-1324.2 638,-1347 679,-1347 679,-1324.2 638,-1324.2"/>
<text xml:space="preserve" text-anchor="start" x="641" y="-1330" font-family="Arial" font-size="14.00" fill="#c9c9c9">OIDC</text>
</g>
<!-- prod&#45;&gt;dr -->
<g id="edge9" class="edge">
<title>prod&#45;&gt;dr</title>
<path fill="none" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,2" d="M4821.18,-2178.19C5042.93,-2159.26 5415.77,-2117.15 5529,-2041.6 5559.51,-2021.24 5583.44,-1989.66 5601.33,-1958.54"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="4821,-2175.57 4813.75,-2178.82 4821.45,-2180.8 4821,-2175.57"/>
<polygon fill="#6366f1" stroke="#6366f1" stroke-width="2" points="5603.62,-1959.82 5604.98,-1951.99 5599.04,-1957.26 5603.62,-1959.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5555.58,-2018.8 5555.58,-2041.6 5582.57,-2041.6 5582.57,-2018.8 5555.58,-2018.8"/>
<text xml:space="preserve" text-anchor="start" x="5558.58" y="-2027" font-family="Arial" font-weight="bold" font-size="14.00" fill="#818cf8">[...]</text>
</g>
<!-- prod&#45;&gt;push -->
<g id="edge19" class="edge">
<title>prod&#45;&gt;push</title>
<path fill="none" stroke="#15803d" stroke-width="2" stroke-dasharray="5,2" d="M4678.6,-2101.69C4727.9,-1923.02 4806.96,-1519.94 4591,-1314 4475.47,-1203.82 1873.87,-1288.52 1718,-1254 1717.08,-1253.8 1716.16,-1253.59 1715.23,-1253.38"/>
<polygon fill="#15803d" stroke="#15803d" stroke-width="2" points="1716.17,-1250.9 1708.26,-1251.66 1714.92,-1256 1716.17,-1250.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4734.14,-1676.6 4734.14,-1699.4 4793.81,-1699.4 4793.81,-1676.6 4734.14,-1676.6"/>
<text xml:space="preserve" text-anchor="start" x="4737.14" y="-1682.4" font-family="Arial" font-size="14.00" fill="#22c55e">[HTTPS]</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}const iS=Object.freeze(Object.defineProperty({__proto__:null,dotSource:nS,svgSource:lS},Symbol.toStringTag,{value:"Module"}));function rS(e){switch(e){case"deployment_prod":return`direction: down

Clients: {
  label: "Clients"

  Web: {
    label: "Web Client"
  }
  Desktop: {
    label: "Desktop Client"
  }
  Mobile: {
    label: "Mobile Client"
  }
}
Prod: {
  label: "Production (DC1)"

  Edge: {
    label: "Edge Layer"
  }
  Observability: {
    label: "Observability Layer"
  }
  App: {
    label: "Kubernetes Cluster - TeamBridge"
  }
  Data: {
    label: "Data Layer"
  }
}
Dr: {
  label: "Disaster Recovery (DC2)"
}
TB: {
  label: "TeamBridge"
}
Infra: {
  label: "Infrastructure"

  Keycloak: {
    label: "Keycloak (OIDC/SSO)"
  }
  Ldap: {
    label: "LDAP / Active Directory"
  }
}
Push: {
  label: "Push Providers (APNs/FCM/WebPush)"
}

Prod.Edge -> Prod.App: "[...]"
Prod.App -> Prod.Data
Prod.Data -> Prod.App: "[queue]"
Prod.Observability -> Prod.App: "[...]"
Prod.App -> TB: "runs"
Prod.App -> Push: "[HTTPS]"
Prod.Data -> Dr: "[...]"
Prod.Data -> TB: "hosts"
Clients.Web -> Prod.Edge: "[...]"
Clients.Desktop -> Prod.Edge: "[...]"
Clients.Mobile -> Prod.Edge: "[...]"
Prod.App -> Infra.Keycloak: "OIDC"
TB -> Infra.Keycloak: "[...]"
Infra.Keycloak -> Infra.Ldap: "[...]"
TB -> Push: "Push Message Events"
`;case"deployment_dr":return`direction: down

Prod: {
  label: "Production (DC1)"

  DataPostgres_chat: {
    label: "PostgreSQL Chat (primary + replica)"
    shape: stored_data
  }
  DataKafka_cluster: {
    label: "Kafka Cluster (3 brokers)"
    shape: queue
  }
  DataS3_cluster: {
    label: "S3/MinIO Cluster"
    shape: stored_data
  }
}
Dr: {
  label: "Disaster Recovery (DC2)"

  Standby_data: {
    label: "Standby Data Layer"
  }
  Standby_app: {
    label: "Warm Standby Kubernetes"
  }
}

Dr.Standby_data -> Dr.Standby_app: "promote on failover"
Prod.DataPostgres_chat -> Dr.Standby_data: "async replication"
Prod.DataKafka_cluster -> Dr.Standby_data: "mirror topics"
Prod.DataS3_cluster -> Dr.Standby_data: "bucket replication"
`;case"deployment_mapping":return`direction: down

Prod: {
  label: "Production (DC1)"

  App: {
    label: "Kubernetes Cluster - TeamBridge"

    Api_deploy: {
      label: "API Gateway Deployment (3-6 pods)"
    }
    Ws_deploy: {
      label: "WebSocket Gateway Deployment (4-8 pods)"
    }
    Search_deploy: {
      label: "Search Service Deployment (2-4 pods)"
    }
    File_deploy: {
      label: "File Service Deployment (2-4 pods)"
    }
    Notification_deploy: {
      label: "Notification Service Deployment (2-4 pods)"
    }
    Integration_deploy: {
      label: "Integration Service Deployment (2-4 pods)"
    }
    Chat_deploy: {
      label: "Chat Service Deployment (3-6 pods)"
    }
  }
  Data: {
    label: "Data Layer"

    Keydb_cluster: {
      label: "KeyDB Cluster (3 nodes)"
      shape: stored_data
    }
    Kafka_cluster: {
      label: "Kafka Cluster (3 brokers)"
      shape: queue
    }
    Postgres_chat: {
      label: "PostgreSQL Chat (primary + replica)"
      shape: stored_data
    }
    Opensearch_cluster: {
      label: "OpenSearch Cluster (3 nodes)"
      shape: stored_data
    }
    Postgres_file: {
      label: "PostgreSQL File Metadata (primary + replica)"
      shape: stored_data
    }
    S3_cluster: {
      label: "S3/MinIO Cluster"
      shape: stored_data
    }
    Postgres_notif: {
      label: "PostgreSQL Notification (primary + replica)"
      shape: stored_data
    }
  }
}
TB: {
  label: "TeamBridge"

  Api_gateway: {
    label: "API Gateway"
  }
  Chat: {
    label: "Chat System"

    Chat_service: {
      label: "Chat Service"
    }
    Postgres: {
      label: "Chat DB"
      shape: stored_data
    }
  }
  Search: {
    label: "Searching System"

    Search_service: {
      label: "Search Service"
    }
    Opensearch: {
      label: "OpenSearch"
      shape: stored_data
    }
  }
  Fs: {
    label: "File Management"

    File_service: {
      label: "File Service"
    }
    Db_fs: {
      label: "File Metadata DB"
      shape: stored_data
    }
    S3: {
      label: "S3"
      shape: stored_data
    }
  }
  Notification: {
    label: "Notification System"

    Push_service: {
      label: "Notification Service"
    }
    Postgres: {
      label: "Notification Settings DB"
      shape: stored_data
    }
  }
  Integration: {
    label: "Plugin Service"
  }
  Kafka: {
    label: "Message Bus"
    shape: queue
  }
  Ws_gateway: {
    label: "WebSocket Gateway"
  }
  Keydb: {
    label: "KeyDB / Redis"
    shape: stored_data
  }
}

TB.Api_gateway -> TB.Chat.Chat_service: "[GRPC]"
TB.Api_gateway -> TB.Search.Search_service: "Поиск пользователей/сообщений"
TB.Api_gateway -> TB.Fs.File_service: "Работа с файлами"
TB.Api_gateway -> TB.Notification.Push_service: "Настройка push уведомлений"
TB.Api_gateway -> TB.Integration: "REST"
TB.Chat.Chat_service -> TB.Kafka: "Publish/Consume Messages"
TB.Search.Search_service -> TB.Kafka: "Consume Message Events"
TB.Notification.Push_service -> TB.Kafka: "Consume Message Created Events"
TB.Integration -> TB.Kafka: "consume/produce events"
TB.Kafka -> TB.Ws_gateway: "message events"
TB.Ws_gateway -> TB.Keydb: "Хранение WS сессий и статуса присутствия пользователей с TTL"
TB.Notification.Push_service -> TB.Keydb: "read active sessions"
TB.Chat.Chat_service -> TB.Chat.Postgres: "messages/chats/users"
TB.Fs.File_service -> TB.Fs.Db_fs: "file metadata"
TB.Notification.Push_service -> TB.Notification.Postgres: "notification settings"
TB.Search.Search_service -> TB.Search.Opensearch: "indexing/searching"
TB.Fs.File_service -> TB.Fs.S3: "Store/Read Files"
Prod.App.Api_deploy -> TB.Api_gateway: "runs"
Prod.App.Ws_deploy -> TB.Ws_gateway: "runs"
Prod.App.Chat_deploy -> TB.Chat.Chat_service: "runs"
Prod.App.Search_deploy -> TB.Search.Search_service: "runs"
Prod.App.File_deploy -> TB.Fs.File_service: "runs"
Prod.App.Notification_deploy -> TB.Notification.Push_service: "runs"
Prod.App.Integration_deploy -> TB.Integration: "runs"
Prod.App.Api_deploy -> Prod.App.Chat_deploy: "[GRPC]"
Prod.App.Api_deploy -> Prod.App.Search_deploy: "[GRPC]"
Prod.App.Api_deploy -> Prod.App.File_deploy: "[GRPC]"
Prod.App.Api_deploy -> Prod.App.Notification_deploy: "[GRPC]"
Prod.App.Api_deploy -> Prod.App.Integration_deploy: "[GRPC]"
Prod.App.Ws_deploy -> Prod.App.Chat_deploy: "[GRPC]"
Prod.App.Ws_deploy -> Prod.Data.Keydb_cluster: "[TCP]"
Prod.App.Chat_deploy -> Prod.Data.Kafka_cluster: "[queue]"
Prod.App.Chat_deploy -> Prod.Data.Postgres_chat: "[TCP]"
Prod.App.Search_deploy -> Prod.Data.Kafka_cluster: "[queue]"
Prod.App.Search_deploy -> Prod.Data.Opensearch_cluster: "[HTTP]"
Prod.App.File_deploy -> Prod.Data.Postgres_file: "[TCP]"
Prod.App.File_deploy -> Prod.Data.S3_cluster: "[HTTP]"
Prod.App.Notification_deploy -> Prod.Data.Kafka_cluster: "[queue]"
Prod.App.Notification_deploy -> Prod.Data.Postgres_notif: "[TCP]"
Prod.Data.Kafka_cluster -> TB.Kafka: "hosts"
Prod.Data.Kafka_cluster -> Prod.App.Ws_deploy: "[queue]"
Prod.Data.Keydb_cluster -> TB.Keydb: "hosts"
Prod.Data.Postgres_chat -> TB.Chat.Postgres: "hosts"
Prod.Data.Postgres_file -> TB.Fs.Db_fs: "hosts"
Prod.Data.Postgres_notif -> TB.Notification.Postgres: "hosts"
Prod.Data.Opensearch_cluster -> TB.Search.Opensearch: "hosts"
Prod.Data.S3_cluster -> TB.Fs.S3: "hosts"
`;case"index":return`direction: down

Employee: {
  label: "Сотрудник"
  shape: c4-person
}
Admin: {
  label: "Администратор"
  shape: c4-person
}
Clients: {
  label: "Clients"
}
Prod: {
  label: "Production (DC1)"
}
Dr: {
  label: "Disaster Recovery (DC2)"
}
TB: {
  label: "TeamBridge"
}
Infra: {
  label: "Infrastructure"
}
Push: {
  label: "Push Providers (APNs/FCM/WebPush)"
}

Prod -> Dr: "[...]"
Prod -> TB: "[...]"
Prod -> Infra: "OIDC"
Prod -> Push: "[HTTPS]"
Clients -> Prod: "[...]"
Employee -> Clients: "использует"
Admin -> Clients: "администрирует"
TB -> Infra: "[...]"
TB -> Push: "Push Message Events"
Clients -> TB: "[...]"
`;case"context":return`direction: down

Admin: {
  label: "Администратор"
  shape: c4-person
}
Employee: {
  label: "Сотрудник"
  shape: c4-person
}
Clients: {
  label: "Clients"

  Web: {
    label: "Web Client"
  }
  Desktop: {
    label: "Desktop Client"
  }
  Mobile: {
    label: "Mobile Client"
  }
}
Prod: {
  label: "Production (DC1)"
}
Dr: {
  label: "Disaster Recovery (DC2)"
}
TB: {
  label: "TeamBridge"

  Api_gateway: {
    label: "API Gateway"
  }
  Fs: {
    label: "File Management"

    File_service: {
      label: "File Service"
    }
    S3: {
      label: "S3"
      shape: stored_data
    }
    Db_fs: {
      label: "File Metadata DB"
      shape: stored_data
    }
  }
  Chat: {
    label: "Chat System"

    Chat_service: {
      label: "Chat Service"
    }
    Postgres: {
      label: "Chat DB"
      shape: stored_data
    }
  }
  Search: {
    label: "Searching System"

    Search_service: {
      label: "Search Service"
    }
    Opensearch: {
      label: "OpenSearch"
      shape: stored_data
    }
  }
  Notification: {
    label: "Notification System"

    Push_service: {
      label: "Notification Service"
    }
    Postgres: {
      label: "Notification Settings DB"
      shape: stored_data
    }
  }
  Kafka: {
    label: "Message Bus"
    shape: queue
  }
  Ws_gateway: {
    label: "WebSocket Gateway"
  }
  Keydb: {
    label: "KeyDB / Redis"
    shape: stored_data
  }
}
Push: {
  label: "Push Providers (APNs/FCM/WebPush)"
}
Infra: {
  label: "Infrastructure"

  Keycloak: {
    label: "Keycloak (OIDC/SSO)"
  }
  Ldap: {
    label: "LDAP / Active Directory"
  }
  Config_service: {
    label: "Configuration Service"
  }
  Victoria_metrics: {
    label: "VictoriaMetrics"
  }
  Vault: {
    label: "Vault"
  }
}

Prod -> Dr: "[...]"
Prod -> Push: "[HTTPS]"
Admin -> Clients.Web: "администрирует"
Clients.Web -> Prod: "[...]"
Clients.Desktop -> Prod: "[...]"
Clients.Mobile -> Prod: "[...]"
Prod -> TB.Api_gateway: "runs"
Prod -> TB.Fs.File_service: "runs"
Prod -> TB.Fs.S3: "hosts"
Prod -> TB.Fs.Db_fs: "hosts"
TB.Api_gateway -> TB.Fs.File_service: "Работа с файлами"
TB.Fs.File_service -> TB.Fs.S3: "Store/Read Files"
TB.Fs.File_service -> TB.Fs.Db_fs: "file metadata"
Prod -> TB.Ws_gateway: "runs"
Prod -> TB.Chat.Chat_service: "runs"
Prod -> TB.Chat.Postgres: "hosts"
TB.Api_gateway -> TB.Chat.Chat_service: "[GRPC]"
TB.Chat.Chat_service -> TB.Chat.Postgres: "messages/chats/users"
Prod -> TB.Search.Search_service: "runs"
TB.Api_gateway -> TB.Search.Search_service: "Поиск пользователей/сообщений"
Prod -> TB.Search.Opensearch: "hosts"
TB.Search.Search_service -> TB.Search.Opensearch: "indexing/searching"
Prod -> TB.Notification.Push_service: "runs"
TB.Api_gateway -> TB.Notification.Push_service: "Настройка push уведомлений"
TB.Notification.Push_service -> Push: "Push Message Events"
Prod -> TB.Notification.Postgres: "hosts"
TB.Notification.Push_service -> TB.Notification.Postgres: "notification settings"
Prod -> TB.Keydb: "hosts"
TB.Ws_gateway -> TB.Keydb: "Хранение WS сессий и статуса присутствия пользователей с TTL"
TB.Notification.Push_service -> TB.Keydb: "read active sessions"
Prod -> TB.Kafka: "hosts"
TB.Chat.Chat_service -> TB.Kafka: "Publish/Consume Messages"
TB.Search.Search_service -> TB.Kafka: "Consume Message Events"
TB.Notification.Push_service -> TB.Kafka: "Consume Message Created Events"
TB.Kafka -> TB.Ws_gateway: "message events"
Prod -> Infra.Keycloak: "OIDC"
TB.Api_gateway -> Infra.Keycloak: "OIDC / JWT"
TB.Ws_gateway -> Infra.Keycloak: "JWT verify (JWKS)"
TB.Chat.Chat_service -> Infra.Keycloak: "profile sync"
Infra.Keycloak -> Infra.Ldap: "[...]"
Employee -> Clients: "использует"
Clients -> TB.Api_gateway: "Синхронные операции: поиск, CRUD, администрирование, загрузка/чтение файлов"
Clients -> TB.Ws_gateway: "Realtime соединение, получение новых сообщений, событий присутствия и обновлений чатов"
`;default:throw new Error("Unknown viewId: "+e)}}const aS=Object.freeze(Object.defineProperty({__proto__:null,d2Source:rS},Symbol.toStringTag,{value:"Module"}));export{ES as $,_S as A,RS as B,Ua as C,Vt as D,zr as E,$B as F,Ar as G,m6 as H,x8 as I,AS as J,bS as K,BS as L,BA as M,zc as N,LB as O,i6 as P,zC as Q,jm as R,b8 as S,nh as T,wS as U,GB as V,_r as W,RA as X,kS as Y,RC as Z,MB as _,Qm as a,LS as a0,_i as a1,IS as a2,Qd as a3,NS as a4,MS as a5,NA as a6,sS as a7,ZS as a8,GS as a9,qS as aa,$S as ab,jS as ac,US as ad,oS as b,cS as c,Dn as d,vS as e,FS as f,OS as g,ln as h,IB as i,Yd as j,SS as k,Ei as l,TS as m,h1 as n,zS as o,e6 as p,f1 as q,yl as r,eo as s,PS as t,FB as u,f4 as v,E8 as w,ye as x,CS as y,DS as z};
