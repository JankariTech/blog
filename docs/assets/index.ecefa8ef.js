const Oi=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};Oi();function Es(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Ni="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wi=Es(Ni);function hr(e){return!!e||e===""}function Ds(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ye(s)?zi(s):Ds(s);if(o)for(const r in o)t[r]=o[r]}return t}else{if(ye(e))return e;if(ve(e))return e}}const Li=/;(?![^(]*\))/g,qi=/:(.+)/;function zi(e){const t={};return e.split(Li).forEach(n=>{if(n){const s=n.split(qi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ut(e){let t="";if(ye(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const s=Ut(e[n]);s&&(t+=s+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const kn=e=>ye(e)?e:e==null?"":q(e)||ve(e)&&(e.toString===mr||!M(e.toString))?JSON.stringify(e,dr,2):String(e),dr=(e,t)=>t&&t.__v_isRef?dr(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:pr(t)?{[`Set(${t.size})`]:[...t.values()]}:ve(t)&&!q(t)&&!gr(t)?String(t):t,ie={},Ot=[],Ue=()=>{},Gi=()=>!1,Ui=/^on[^a-z]/,Fn=e=>Ui.test(e),js=e=>e.startsWith("onUpdate:"),_e=Object.assign,Rs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Hi=Object.prototype.hasOwnProperty,K=(e,t)=>Hi.call(e,t),q=Array.isArray,Nt=e=>On(e)==="[object Map]",pr=e=>On(e)==="[object Set]",M=e=>typeof e=="function",ye=e=>typeof e=="string",Bs=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",fr=e=>ve(e)&&M(e.then)&&M(e.catch),mr=Object.prototype.toString,On=e=>mr.call(e),Mi=e=>On(e).slice(8,-1),gr=e=>On(e)==="[object Object]",Fs=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tn=Es(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$i=/-(\w)/g,Qe=Nn(e=>e.replace($i,(t,n)=>n?n.toUpperCase():"")),Vi=/\B([A-Z])/g,It=Nn(e=>e.replace(Vi,"-$1").toLowerCase()),Wn=Nn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=Nn(e=>e?`on${Wn(e)}`:""),an=(e,t)=>!Object.is(e,t),Sn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Cn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},is=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ho;const Yi=()=>ho||(ho=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Je;class wr{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Je&&(this.parent=Je,this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function br(e){return new wr(e)}function Ji(e,t=Je){t&&t.active&&t.effects.push(e)}const Os=e=>{const t=new Set(e);return t.w=0,t.n=0,t},yr=e=>(e.w&mt)>0,vr=e=>(e.n&mt)>0,Ki=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},Zi=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];yr(o)&&!vr(o)?o.delete(e):t[n++]=o,o.w&=~mt,o.n&=~mt}t.length=n}},as=new WeakMap;let Qt=0,mt=1;const ls=30;let qe;const St=Symbol(""),cs=Symbol("");class Ns{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ji(this,s)}run(){if(!this.active)return this.fn();let t=qe,n=pt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=qe,qe=this,pt=!0,mt=1<<++Qt,Qt<=ls?Ki(this):po(this),this.fn()}finally{Qt<=ls&&Zi(this),mt=1<<--Qt,qe=this.parent,pt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(po(this),this.onStop&&this.onStop(),this.active=!1)}}function po(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let pt=!0;const kr=[];function Ht(){kr.push(pt),pt=!1}function Mt(){const e=kr.pop();pt=e===void 0?!0:e}function Be(e,t,n){if(pt&&qe){let s=as.get(e);s||as.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=Os()),Tr(o)}}function Tr(e,t){let n=!1;Qt<=ls?vr(e)||(e.n|=mt,n=!yr(e)):n=!e.has(qe),n&&(e.add(qe),qe.deps.push(e))}function st(e,t,n,s,o,r){const i=as.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&q(e))i.forEach((l,c)=>{(c==="length"||c>=s)&&a.push(l)});else switch(n!==void 0&&a.push(i.get(n)),t){case"add":q(e)?Fs(n)&&a.push(i.get("length")):(a.push(i.get(St)),Nt(e)&&a.push(i.get(cs)));break;case"delete":q(e)||(a.push(i.get(St)),Nt(e)&&a.push(i.get(cs)));break;case"set":Nt(e)&&a.push(i.get(St));break}if(a.length===1)a[0]&&us(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);us(Os(l))}}function us(e,t){const n=q(e)?e:[...e];for(const s of n)s.computed&&fo(s);for(const s of n)s.computed||fo(s)}function fo(e,t){(e!==qe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Qi=Es("__proto__,__v_isRef,__isVue"),Sr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Bs)),Xi=Ws(),ea=Ws(!1,!0),ta=Ws(!0),mo=na();function na(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=Q(this);for(let r=0,i=this.length;r<i;r++)Be(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(Q)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ht();const s=Q(this)[t].apply(this,n);return Mt(),s}}),e}function Ws(e=!1,t=!1){return function(s,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?ba:Cr:t?Ar:Ir).get(s))return s;const i=q(s);if(!e&&i&&K(mo,o))return Reflect.get(mo,o,r);const a=Reflect.get(s,o,r);return(Bs(o)?Sr.has(o):Qi(o))||(e||Be(s,"get",o),t)?a:pe(a)?i&&Fs(o)?a:a.value:ve(a)?e?Pr(a):$t(a):a}}const sa=xr(),oa=xr(!0);function xr(e=!1){return function(n,s,o,r){let i=n[s];if(ln(i)&&pe(i)&&!pe(o))return!1;if(!e&&!ln(o)&&(hs(o)||(o=Q(o),i=Q(i)),!q(n)&&pe(i)&&!pe(o)))return i.value=o,!0;const a=q(n)&&Fs(s)?Number(s)<n.length:K(n,s),l=Reflect.set(n,s,o,r);return n===Q(r)&&(a?an(o,i)&&st(n,"set",s,o):st(n,"add",s,o)),l}}function ra(e,t){const n=K(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&st(e,"delete",t,void 0),s}function ia(e,t){const n=Reflect.has(e,t);return(!Bs(t)||!Sr.has(t))&&Be(e,"has",t),n}function aa(e){return Be(e,"iterate",q(e)?"length":St),Reflect.ownKeys(e)}const _r={get:Xi,set:sa,deleteProperty:ra,has:ia,ownKeys:aa},la={get:ta,set(e,t){return!0},deleteProperty(e,t){return!0}},ca=_e({},_r,{get:ea,set:oa}),Ls=e=>e,Ln=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,s=!1){e=e.__v_raw;const o=Q(e),r=Q(t);n||(t!==r&&Be(o,"get",t),Be(o,"get",r));const{has:i}=Ln(o),a=s?Ls:n?Gs:cn;if(i.call(o,t))return a(e.get(t));if(i.call(o,r))return a(e.get(r));e!==o&&e.get(t)}function gn(e,t=!1){const n=this.__v_raw,s=Q(n),o=Q(e);return t||(e!==o&&Be(s,"has",e),Be(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function wn(e,t=!1){return e=e.__v_raw,!t&&Be(Q(e),"iterate",St),Reflect.get(e,"size",e)}function go(e){e=Q(e);const t=Q(this);return Ln(t).has.call(t,e)||(t.add(e),st(t,"add",e,e)),this}function wo(e,t){t=Q(t);const n=Q(this),{has:s,get:o}=Ln(n);let r=s.call(n,e);r||(e=Q(e),r=s.call(n,e));const i=o.call(n,e);return n.set(e,t),r?an(t,i)&&st(n,"set",e,t):st(n,"add",e,t),this}function bo(e){const t=Q(this),{has:n,get:s}=Ln(t);let o=n.call(t,e);o||(e=Q(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&st(t,"delete",e,void 0),r}function yo(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&st(e,"clear",void 0,void 0),n}function bn(e,t){return function(s,o){const r=this,i=r.__v_raw,a=Q(i),l=t?Ls:e?Gs:cn;return!e&&Be(a,"iterate",St),i.forEach((c,u)=>s.call(o,l(c),l(u),r))}}function yn(e,t,n){return function(...s){const o=this.__v_raw,r=Q(o),i=Nt(r),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,c=o[e](...s),u=n?Ls:t?Gs:cn;return!t&&Be(r,"iterate",l?cs:St),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function ua(){const e={get(r){return mn(this,r)},get size(){return wn(this)},has:gn,add:go,set:wo,delete:bo,clear:yo,forEach:bn(!1,!1)},t={get(r){return mn(this,r,!1,!0)},get size(){return wn(this)},has:gn,add:go,set:wo,delete:bo,clear:yo,forEach:bn(!1,!0)},n={get(r){return mn(this,r,!0)},get size(){return wn(this,!0)},has(r){return gn.call(this,r,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:bn(!0,!1)},s={get(r){return mn(this,r,!0,!0)},get size(){return wn(this,!0)},has(r){return gn.call(this,r,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=yn(r,!1,!1),n[r]=yn(r,!0,!1),t[r]=yn(r,!1,!0),s[r]=yn(r,!0,!0)}),[e,n,t,s]}const[ha,da,pa,fa]=ua();function qs(e,t){const n=t?e?fa:pa:e?da:ha;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(K(n,o)&&o in s?n:s,o,r)}const ma={get:qs(!1,!1)},ga={get:qs(!1,!0)},wa={get:qs(!0,!1)},Ir=new WeakMap,Ar=new WeakMap,Cr=new WeakMap,ba=new WeakMap;function ya(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function va(e){return e.__v_skip||!Object.isExtensible(e)?0:ya(Mi(e))}function $t(e){return ln(e)?e:zs(e,!1,_r,ma,Ir)}function ka(e){return zs(e,!1,ca,ga,Ar)}function Pr(e){return zs(e,!0,la,wa,Cr)}function zs(e,t,n,s,o){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=va(e);if(i===0)return e;const a=new Proxy(e,i===2?s:n);return o.set(e,a),a}function nt(e){return ln(e)?nt(e.__v_raw):!!(e&&e.__v_isReactive)}function ln(e){return!!(e&&e.__v_isReadonly)}function hs(e){return!!(e&&e.__v_isShallow)}function Er(e){return nt(e)||ln(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Wt(e){return Cn(e,"__v_skip",!0),e}const cn=e=>ve(e)?$t(e):e,Gs=e=>ve(e)?Pr(e):e;function Dr(e){pt&&qe&&(e=Q(e),Tr(e.dep||(e.dep=Os())))}function jr(e,t){e=Q(e),e.dep&&us(e.dep)}function pe(e){return!!(e&&e.__v_isRef===!0)}function fn(e){return Rr(e,!1)}function Ta(e){return Rr(e,!0)}function Rr(e,t){return pe(e)?e:new Sa(e,t)}class Sa{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:cn(t)}get value(){return Dr(this),this._value}set value(t){t=this.__v_isShallow?t:Q(t),an(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:cn(t),jr(this))}}function ue(e){return pe(e)?e.value:e}const xa={get:(e,t,n)=>ue(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return pe(o)&&!pe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Br(e){return nt(e)?e:new Proxy(e,xa)}function _a(e){const t=q(e)?new Array(e.length):{};for(const n in e)t[n]=Fr(e,n);return t}class Ia{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Fr(e,t,n){const s=e[t];return pe(s)?s:new Ia(e,t,n)}class Aa{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ns(t,()=>{this._dirty||(this._dirty=!0,jr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=Q(this);return Dr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ca(e,t,n=!1){let s,o;const r=M(e);return r?(s=e,o=Ue):(s=e.get,o=e.set),new Aa(s,o,r||!o,n)}function ft(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){qn(r,t,n)}return o}function We(e,t,n,s){if(M(e)){const r=ft(e,t,n,s);return r&&fr(r)&&r.catch(i=>{qn(i,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(We(e[r],t,n,s));return o}function qn(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,i,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,i,a]);return}}Pa(e,n,o,s)}function Pa(e,t,n,s=!0){console.error(e)}let Pn=!1,ds=!1;const Re=[];let tt=0;const en=[];let Xt=null,jt=0;const tn=[];let ut=null,Rt=0;const Or=Promise.resolve();let Us=null,ps=null;function Hs(e){const t=Us||Or;return e?t.then(this?e.bind(this):e):t}function Ea(e){let t=tt+1,n=Re.length;for(;t<n;){const s=t+n>>>1;un(Re[s])<e?t=s+1:n=s}return t}function Nr(e){(!Re.length||!Re.includes(e,Pn&&e.allowRecurse?tt+1:tt))&&e!==ps&&(e.id==null?Re.push(e):Re.splice(Ea(e.id),0,e),Wr())}function Wr(){!Pn&&!ds&&(ds=!0,Us=Or.then(zr))}function Da(e){const t=Re.indexOf(e);t>tt&&Re.splice(t,1)}function Lr(e,t,n,s){q(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),Wr()}function ja(e){Lr(e,Xt,en,jt)}function Ra(e){Lr(e,ut,tn,Rt)}function zn(e,t=null){if(en.length){for(ps=t,Xt=[...new Set(en)],en.length=0,jt=0;jt<Xt.length;jt++)Xt[jt]();Xt=null,jt=0,ps=null,zn(e,t)}}function qr(e){if(zn(),tn.length){const t=[...new Set(tn)];if(tn.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,s)=>un(n)-un(s)),Rt=0;Rt<ut.length;Rt++)ut[Rt]();ut=null,Rt=0}}const un=e=>e.id==null?1/0:e.id;function zr(e){ds=!1,Pn=!0,zn(e),Re.sort((n,s)=>un(n)-un(s));const t=Ue;try{for(tt=0;tt<Re.length;tt++){const n=Re[tt];n&&n.active!==!1&&ft(n,null,14)}}finally{tt=0,Re.length=0,qr(),Pn=!1,Us=null,(Re.length||en.length||tn.length)&&zr(e)}}function Ba(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||ie;let o=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in s){const u=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:d}=s[u]||ie;d&&(o=n.map(m=>m.trim())),f&&(o=n.map(is))}let a,l=s[a=Qn(t)]||s[a=Qn(Qe(t))];!l&&r&&(l=s[a=Qn(It(t))]),l&&We(l,e,6,o);const c=s[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,We(c,e,6,o)}}function Gr(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!M(e)){const l=c=>{const u=Gr(c,t,!0);u&&(a=!0,_e(i,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(s.set(e,null),null):(q(r)?r.forEach(l=>i[l]=null):_e(i,r),s.set(e,i),i)}function Gn(e,t){return!e||!Fn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,It(t))||K(e,t))}let Ne=null,Un=null;function En(e){const t=Ne;return Ne=e,Un=e&&e.type.__scopeId||null,t}function Fa(e){Un=e}function Oa(){Un=null}function Na(e,t=Ne,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Eo(-1);const r=En(t),i=e(...o);return En(r),s._d&&Eo(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function Xn(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[i],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:k,inheritAttrs:C}=e;let A,T;const j=En(e);try{if(n.shapeFlag&4){const H=o||s;A=Ke(u.call(H,H,f,r,m,d,k)),T=l}else{const H=t;A=Ke(H.length>1?H(r,{attrs:l,slots:a,emit:c}):H(r,null)),T=t.props?l:Wa(l)}}catch(H){nn.length=0,qn(H,e,1),A=Se(He)}let U=A;if(T&&C!==!1){const H=Object.keys(T),{shapeFlag:G}=U;H.length&&G&7&&(i&&H.some(js)&&(T=La(T,i)),U=gt(U,T))}return n.dirs&&(U=gt(U),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),A=U,En(j),A}const Wa=e=>{let t;for(const n in e)(n==="class"||n==="style"||Fn(n))&&((t||(t={}))[n]=e[n]);return t},La=(e,t)=>{const n={};for(const s in e)(!js(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function qa(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?vo(s,i,c):!!i;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(i[d]!==s[d]&&!Gn(c,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?vo(s,i,c):!0:!!i;return!1}function vo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!Gn(n,r))return!0}return!1}function za({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ga=e=>e.__isSuspense;function Ua(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):Ra(e)}function xn(e,t){if(Te){let n=Te.provides;const s=Te.parent&&Te.parent.provides;s===n&&(n=Te.provides=Object.create(s)),n[e]=t}}function Ze(e,t,n=!1){const s=Te||Ne;if(s){const o=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&M(t)?t.call(s.proxy):t}}const ko={};function xt(e,t,n){return Ur(e,t,n)}function Ur(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:i}=ie){const a=Te;let l,c=!1,u=!1;if(pe(e)?(l=()=>e.value,c=hs(e)):nt(e)?(l=()=>e,s=!0):q(e)?(u=!0,c=e.some(T=>nt(T)||hs(T)),l=()=>e.map(T=>{if(pe(T))return T.value;if(nt(T))return Tt(T);if(M(T))return ft(T,a,2)})):M(e)?t?l=()=>ft(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),We(e,a,3,[d])}:l=Ue,t&&s){const T=l;l=()=>Tt(T())}let f,d=T=>{f=A.onStop=()=>{ft(T,a,4)}};if(dn)return d=Ue,t?n&&We(t,a,3,[l(),u?[]:void 0,d]):l(),Ue;let m=u?[]:ko;const k=()=>{if(!!A.active)if(t){const T=A.run();(s||c||(u?T.some((j,U)=>an(j,m[U])):an(T,m)))&&(f&&f(),We(t,a,3,[T,m===ko?void 0:m,d]),m=T)}else A.run()};k.allowRecurse=!!t;let C;o==="sync"?C=k:o==="post"?C=()=>Ce(k,a&&a.suspense):C=()=>ja(k);const A=new Ns(l,C);return t?n?k():m=A.run():o==="post"?Ce(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Rs(a.scope.effects,A)}}function Ha(e,t,n){const s=this.proxy,o=ye(e)?e.includes(".")?Hr(s,e):()=>s[e]:e.bind(s,s);let r;M(t)?r=t:(r=t.handler,n=t);const i=Te;qt(this);const a=Ur(o,r.bind(s),n);return i?qt(i):_t(),a}function Hr(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function Tt(e,t){if(!ve(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))Tt(e.value,t);else if(q(e))for(let n=0;n<e.length;n++)Tt(e[n],t);else if(pr(e)||Nt(e))e.forEach(n=>{Tt(n,t)});else if(gr(e))for(const n in e)Tt(e[n],t);return e}function Ma(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ms(()=>{e.isMounted=!0}),Kr(()=>{e.isUnmounting=!0}),e}const Oe=[Function,Array],$a={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},setup(e,{slots:t}){const n=Qs(),s=Ma();let o;return()=>{const r=t.default&&$r(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const C of r)if(C.type!==He){i=C;break}}const a=Q(e),{mode:l}=a;if(s.isLeaving)return es(i);const c=To(i);if(!c)return es(i);const u=fs(c,a,s,n);ms(c,u);const f=n.subTree,d=f&&To(f);let m=!1;const{getTransitionKey:k}=c.type;if(k){const C=k();o===void 0?o=C:C!==o&&(o=C,m=!0)}if(d&&d.type!==He&&(!vt(c,d)||m)){const C=fs(d,a,s,n);if(ms(d,C),l==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update()},es(i);l==="in-out"&&c.type!==He&&(C.delayLeave=(A,T,j)=>{const U=Mr(s,d);U[String(d.key)]=d,A._leaveCb=()=>{T(),A._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=j})}return i}}},Va=$a;function Mr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function fs(e,t,n,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:k,onBeforeAppear:C,onAppear:A,onAfterAppear:T,onAppearCancelled:j}=t,U=String(e.key),H=Mr(n,e),G=(D,J)=>{D&&We(D,s,9,J)},X=(D,J)=>{const ee=J[1];G(D,J),q(D)?D.every(de=>de.length<=1)&&ee():D.length<=1&&ee()},$={mode:r,persisted:i,beforeEnter(D){let J=a;if(!n.isMounted)if(o)J=C||a;else return;D._leaveCb&&D._leaveCb(!0);const ee=H[U];ee&&vt(e,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),G(J,[D])},enter(D){let J=l,ee=c,de=u;if(!n.isMounted)if(o)J=A||l,ee=T||c,de=j||u;else return;let me=!1;const Pe=D._enterCb=Ae=>{me||(me=!0,Ae?G(de,[D]):G(ee,[D]),$.delayedLeave&&$.delayedLeave(),D._enterCb=void 0)};J?X(J,[D,Pe]):Pe()},leave(D,J){const ee=String(e.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return J();G(f,[D]);let de=!1;const me=D._leaveCb=Pe=>{de||(de=!0,J(),Pe?G(k,[D]):G(m,[D]),D._leaveCb=void 0,H[ee]===e&&delete H[ee])};H[ee]=e,d?X(d,[D,me]):me()},clone(D){return fs(D,t,n,s)}};return $}function es(e){if(Hn(e))return e=gt(e),e.children=null,e}function To(e){return Hn(e)?e.children?e.children[0]:void 0:e}function ms(e,t){e.shapeFlag&6&&e.component?ms(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $r(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===je?(i.patchFlag&128&&o++,s=s.concat($r(i.children,t,a))):(t||i.type!==He)&&s.push(a!=null?gt(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Vr(e){return M(e)?{setup:e,name:e.name}:e}const _n=e=>!!e.type.__asyncLoader,Hn=e=>e.type.__isKeepAlive;function Ya(e,t){Yr(e,"a",t)}function Ja(e,t){Yr(e,"da",t)}function Yr(e,t,n=Te){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Mn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Hn(o.parent.vnode)&&Ka(s,t,n,o),o=o.parent}}function Ka(e,t,n,s){const o=Mn(t,e,s,!0);$s(()=>{Rs(s[t],o)},n)}function Mn(e,t,n=Te,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Ht(),qt(n);const a=We(t,n,e,i);return _t(),Mt(),a});return s?o.unshift(r):o.push(r),r}}const it=e=>(t,n=Te)=>(!dn||e==="sp")&&Mn(e,t,n),Jr=it("bm"),Ms=it("m"),Za=it("bu"),Qa=it("u"),Kr=it("bum"),$s=it("um"),Xa=it("sp"),el=it("rtg"),tl=it("rtc");function nl(e,t=Te){Mn("ec",e,t)}function Rh(e,t){const n=Ne;if(n===null)return e;const s=Vn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,a,l,c=ie]=t[r];M(i)&&(i={mounted:i,updated:i}),i.deep&&Tt(a),o.push({dir:i,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c})}return e}function wt(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let l=a.dir[s];l&&(Ht(),We(l,n,8,[e.el,a,e,t]),Mt())}}const Vs="components";function sl(e,t){return Qr(Vs,e,!0,t)||e}const Zr=Symbol();function Bh(e){return ye(e)?Qr(Vs,e,!1)||e:e||Zr}function Qr(e,t,n=!0,s=!1){const o=Ne||Te;if(o){const r=o.type;if(e===Vs){const a=Rl(r,!1);if(a&&(a===t||a===Qe(t)||a===Wn(Qe(t))))return r}const i=So(o[e]||r[e],t)||So(o.appContext[e],t);return!i&&s?r:i}}function So(e,t){return e&&(e[t]||e[Qe(t)]||e[Wn(Qe(t))])}function gs(e,t,n,s){let o;const r=n&&n[s];if(q(e)||ye(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,r&&r[i])}else if(ve(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,r&&r[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const c=i[a];o[a]=t(e[c],c,a,r&&r[a])}}else o=[];return n&&(n[s]=o),o}const ws=e=>e?ui(e)?Vn(e)||e.proxy:ws(e.parent):null,Dn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ws(e.parent),$root:e=>ws(e.root),$emit:e=>e.emit,$options:e=>ei(e),$forceUpdate:e=>e.f||(e.f=()=>Nr(e.update)),$nextTick:e=>e.n||(e.n=Hs.bind(e.proxy)),$watch:e=>Ha.bind(e)}),ol={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(s!==ie&&K(s,t))return i[t]=1,s[t];if(o!==ie&&K(o,t))return i[t]=2,o[t];if((c=e.propsOptions[0])&&K(c,t))return i[t]=3,r[t];if(n!==ie&&K(n,t))return i[t]=4,n[t];bs&&(i[t]=0)}}const u=Dn[t];let f,d;if(u)return t==="$attrs"&&Be(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ie&&K(n,t))return i[t]=4,n[t];if(d=l.config.globalProperties,K(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return o!==ie&&K(o,t)?(o[t]=n,!0):s!==ie&&K(s,t)?(s[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let a;return!!n[i]||e!==ie&&K(e,i)||t!==ie&&K(t,i)||(a=r[0])&&K(a,i)||K(s,i)||K(Dn,i)||K(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let bs=!0;function rl(e){const t=ei(e),n=e.proxy,s=e.ctx;bs=!1,t.beforeCreate&&xo(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:k,activated:C,deactivated:A,beforeDestroy:T,beforeUnmount:j,destroyed:U,unmounted:H,render:G,renderTracked:X,renderTriggered:$,errorCaptured:D,serverPrefetch:J,expose:ee,inheritAttrs:de,components:me,directives:Pe,filters:Ae}=t;if(c&&il(c,s,null,e.appContext.config.unwrapInjectedRef),i)for(const le in i){const te=i[le];M(te)&&(s[le]=te.bind(n))}if(o){const le=o.call(n,n);ve(le)&&(e.data=$t(le))}if(bs=!0,r)for(const le in r){const te=r[le],Ee=M(te)?te.bind(n,n):M(te.get)?te.get.bind(n,n):Ue,At=!M(te)&&M(te.set)?te.set.bind(n):Ue,Xe=ze({get:Ee,set:At});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:$e=>Xe.value=$e})}if(a)for(const le in a)Xr(a[le],s,n,le);if(l){const le=M(l)?l.call(n):l;Reflect.ownKeys(le).forEach(te=>{xn(te,le[te])})}u&&xo(u,e,"c");function we(le,te){q(te)?te.forEach(Ee=>le(Ee.bind(n))):te&&le(te.bind(n))}if(we(Jr,f),we(Ms,d),we(Za,m),we(Qa,k),we(Ya,C),we(Ja,A),we(nl,D),we(tl,X),we(el,$),we(Kr,j),we($s,H),we(Xa,J),q(ee))if(ee.length){const le=e.exposed||(e.exposed={});ee.forEach(te=>{Object.defineProperty(le,te,{get:()=>n[te],set:Ee=>n[te]=Ee})})}else e.exposed||(e.exposed={});G&&e.render===Ue&&(e.render=G),de!=null&&(e.inheritAttrs=de),me&&(e.components=me),Pe&&(e.directives=Pe)}function il(e,t,n=Ue,s=!1){q(e)&&(e=ys(e));for(const o in e){const r=e[o];let i;ve(r)?"default"in r?i=Ze(r.from||o,r.default,!0):i=Ze(r.from||o):i=Ze(r),pe(i)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function xo(e,t,n){We(q(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xr(e,t,n,s){const o=s.includes(".")?Hr(n,s):()=>n[s];if(ye(e)){const r=t[e];M(r)&&xt(o,r)}else if(M(e))xt(o,e.bind(n));else if(ve(e))if(q(e))e.forEach(r=>Xr(r,t,n,s));else{const r=M(e.handler)?e.handler.bind(n):t[e.handler];M(r)&&xt(o,r,e)}}function ei(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let l;return a?l=a:!o.length&&!n&&!s?l=t:(l={},o.length&&o.forEach(c=>jn(l,c,i,!0)),jn(l,t,i)),r.set(t,l),l}function jn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&jn(e,r,n,!0),o&&o.forEach(i=>jn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=al[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const al={data:_o,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:yt,directives:yt,watch:cl,provide:_o,inject:ll};function _o(e,t){return t?e?function(){return _e(M(e)?e.call(this,this):e,M(t)?t.call(this,this):t)}:t:e}function ll(e,t){return yt(ys(e),ys(t))}function ys(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?_e(_e(Object.create(null),e),t):t}function cl(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const s in t)n[s]=Ie(e[s],t[s]);return n}function ul(e,t,n,s=!1){const o={},r={};Cn(r,$n,1),e.propsDefaults=Object.create(null),ti(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:ka(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function hl(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=Q(o),[l]=e.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Gn(e.emitsOptions,d))continue;const m=t[d];if(l)if(K(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const k=Qe(d);o[k]=vs(l,a,k,m,e,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{ti(e,t,o,r)&&(c=!0);let u;for(const f in a)(!t||!K(t,f)&&((u=It(f))===f||!K(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(o[f]=vs(l,a,f,void 0,e,!0)):delete o[f]);if(r!==a)for(const f in r)(!t||!K(t,f)&&!0)&&(delete r[f],c=!0)}c&&st(e,"set","$attrs")}function ti(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Tn(l))continue;const c=t[l];let u;o&&K(o,u=Qe(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gn(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,i=!0)}if(r){const l=Q(n),c=a||ie;for(let u=0;u<r.length;u++){const f=r[u];n[f]=vs(o,l,f,c[f],e,!K(c,f))}}return i}function vs(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=K(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&M(l)){const{propsDefaults:c}=o;n in c?s=c[n]:(qt(o),s=c[n]=l.call(null,t),_t())}else s=l}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===It(n))&&(s=!0))}return s}function ni(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let l=!1;if(!M(e)){const u=f=>{l=!0;const[d,m]=ni(f,t,!0);_e(i,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return s.set(e,Ot),Ot;if(q(r))for(let u=0;u<r.length;u++){const f=Qe(r[u]);Io(f)&&(i[f]=ie)}else if(r)for(const u in r){const f=Qe(u);if(Io(f)){const d=r[u],m=i[f]=q(d)||M(d)?{type:d}:d;if(m){const k=Po(Boolean,m.type),C=Po(String,m.type);m[0]=k>-1,m[1]=C<0||k<C,(k>-1||K(m,"default"))&&a.push(f)}}}const c=[i,a];return s.set(e,c),c}function Io(e){return e[0]!=="$"}function Ao(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Co(e,t){return Ao(e)===Ao(t)}function Po(e,t){return q(t)?t.findIndex(n=>Co(n,e)):M(t)&&Co(t,e)?0:-1}const si=e=>e[0]==="_"||e==="$stable",Ys=e=>q(e)?e.map(Ke):[Ke(e)],dl=(e,t,n)=>{if(t._n)return t;const s=Na((...o)=>Ys(t(...o)),n);return s._c=!1,s},oi=(e,t,n)=>{const s=e._ctx;for(const o in e){if(si(o))continue;const r=e[o];if(M(r))t[o]=dl(o,r,s);else if(r!=null){const i=Ys(r);t[o]=()=>i}}},ri=(e,t)=>{const n=Ys(t);e.slots.default=()=>n},pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),Cn(t,"_",n)):oi(t,e.slots={})}else e.slots={},t&&ri(e,t);Cn(e.slots,$n,1)},fl=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=ie;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(_e(o,t),!n&&a===1&&delete o._):(r=!t.$stable,oi(t,o)),i=t}else t&&(ri(e,t),i={default:1});if(r)for(const a in o)!si(a)&&!(a in i)&&delete o[a]};function ii(){return{app:null,config:{isNativeTag:Gi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ml=0;function gl(e,t){return function(s,o=null){M(s)||(s=Object.assign({},s)),o!=null&&!ve(o)&&(o=null);const r=ii(),i=new Set;let a=!1;const l=r.app={_uid:ml++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Fl,get config(){return r.config},set config(c){},use(c,...u){return i.has(c)||(c&&M(c.install)?(i.add(c),c.install(l,...u)):M(c)&&(i.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,f){if(!a){const d=Se(s,o);return d.appContext=r,u&&t?t(d,c):e(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Vn(d.component)||d.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ks(e,t,n,s,o=!1){if(q(e)){e.forEach((d,m)=>ks(d,t&&(q(t)?t[m]:t),n,s,o));return}if(_n(s)&&!o)return;const r=s.shapeFlag&4?Vn(s.component)||s.component.proxy:s.el,i=o?null:r,{i:a,r:l}=e,c=t&&t.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ye(c)?(u[c]=null,K(f,c)&&(f[c]=null)):pe(c)&&(c.value=null)),M(l))ft(l,a,12,[i,u]);else{const d=ye(l),m=pe(l);if(d||m){const k=()=>{if(e.f){const C=d?u[l]:l.value;o?q(C)&&Rs(C,r):q(C)?C.includes(r)||C.push(r):d?(u[l]=[r],K(f,l)&&(f[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else d?(u[l]=i,K(f,l)&&(f[l]=i)):m&&(l.value=i,e.k&&(u[e.k]=i))};i?(k.id=-1,Ce(k,n)):k()}}}const Ce=Ua;function wl(e){return bl(e)}function bl(e,t){const n=Yi();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Ue,cloneNode:k,insertStaticContent:C}=e,A=(h,p,g,y=null,b=null,x=null,P=!1,S=null,_=!!p.dynamicChildren)=>{if(h===p)return;h&&!vt(h,p)&&(y=F(h),Fe(h,b,x,!0),h=null),p.patchFlag===-2&&(_=!1,p.dynamicChildren=null);const{type:v,ref:O,shapeFlag:R}=p;switch(v){case Js:T(h,p,g,y);break;case He:j(h,p,g,y);break;case ts:h==null&&U(p,g,y,P);break;case je:Pe(h,p,g,y,b,x,P,S,_);break;default:R&1?X(h,p,g,y,b,x,P,S,_):R&6?Ae(h,p,g,y,b,x,P,S,_):(R&64||R&128)&&v.process(h,p,g,y,b,x,P,S,_,ce)}O!=null&&b&&ks(O,h&&h.ref,x,p||h,!p)},T=(h,p,g,y)=>{if(h==null)s(p.el=a(p.children),g,y);else{const b=p.el=h.el;p.children!==h.children&&c(b,p.children)}},j=(h,p,g,y)=>{h==null?s(p.el=l(p.children||""),g,y):p.el=h.el},U=(h,p,g,y)=>{[h.el,h.anchor]=C(h.children,p,g,y,h.el,h.anchor)},H=({el:h,anchor:p},g,y)=>{let b;for(;h&&h!==p;)b=d(h),s(h,g,y),h=b;s(p,g,y)},G=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),o(h),h=g;o(p)},X=(h,p,g,y,b,x,P,S,_)=>{P=P||p.type==="svg",h==null?$(p,g,y,b,x,P,S,_):ee(h,p,b,x,P,S,_)},$=(h,p,g,y,b,x,P,S)=>{let _,v;const{type:O,props:R,shapeFlag:N,transition:z,patchFlag:Z,dirs:se}=h;if(h.el&&k!==void 0&&Z===-1)_=h.el=k(h.el);else{if(_=h.el=i(h.type,x,R&&R.is,R),N&8?u(_,h.children):N&16&&J(h.children,_,null,y,b,x&&O!=="foreignObject",P,S),se&&wt(h,null,y,"created"),R){for(const he in R)he!=="value"&&!Tn(he)&&r(_,he,null,R[he],x,h.children,y,b,I);"value"in R&&r(_,"value",null,R.value),(v=R.onVnodeBeforeMount)&&Ye(v,y,h)}D(_,h,h.scopeId,P,y)}se&&wt(h,null,y,"beforeMount");const oe=(!b||b&&!b.pendingBranch)&&z&&!z.persisted;oe&&z.beforeEnter(_),s(_,p,g),((v=R&&R.onVnodeMounted)||oe||se)&&Ce(()=>{v&&Ye(v,y,h),oe&&z.enter(_),se&&wt(h,null,y,"mounted")},b)},D=(h,p,g,y,b)=>{if(g&&m(h,g),y)for(let x=0;x<y.length;x++)m(h,y[x]);if(b){let x=b.subTree;if(p===x){const P=b.vnode;D(h,P,P.scopeId,P.slotScopeIds,b.parent)}}},J=(h,p,g,y,b,x,P,S,_=0)=>{for(let v=_;v<h.length;v++){const O=h[v]=S?ht(h[v]):Ke(h[v]);A(null,O,p,g,y,b,x,P,S)}},ee=(h,p,g,y,b,x,P)=>{const S=p.el=h.el;let{patchFlag:_,dynamicChildren:v,dirs:O}=p;_|=h.patchFlag&16;const R=h.props||ie,N=p.props||ie;let z;g&&bt(g,!1),(z=N.onVnodeBeforeUpdate)&&Ye(z,g,p,h),O&&wt(p,h,g,"beforeUpdate"),g&&bt(g,!0);const Z=b&&p.type!=="foreignObject";if(v?de(h.dynamicChildren,v,S,g,y,Z,x):P||Ee(h,p,S,null,g,y,Z,x,!1),_>0){if(_&16)me(S,p,R,N,g,y,b);else if(_&2&&R.class!==N.class&&r(S,"class",null,N.class,b),_&4&&r(S,"style",R.style,N.style,b),_&8){const se=p.dynamicProps;for(let oe=0;oe<se.length;oe++){const he=se[oe],Le=R[he],Ct=N[he];(Ct!==Le||he==="value")&&r(S,he,Le,Ct,b,h.children,g,y,I)}}_&1&&h.children!==p.children&&u(S,p.children)}else!P&&v==null&&me(S,p,R,N,g,y,b);((z=N.onVnodeUpdated)||O)&&Ce(()=>{z&&Ye(z,g,p,h),O&&wt(p,h,g,"updated")},y)},de=(h,p,g,y,b,x,P)=>{for(let S=0;S<p.length;S++){const _=h[S],v=p[S],O=_.el&&(_.type===je||!vt(_,v)||_.shapeFlag&70)?f(_.el):g;A(_,v,O,null,y,b,x,P,!0)}},me=(h,p,g,y,b,x,P)=>{if(g!==y){for(const S in y){if(Tn(S))continue;const _=y[S],v=g[S];_!==v&&S!=="value"&&r(h,S,v,_,P,p.children,b,x,I)}if(g!==ie)for(const S in g)!Tn(S)&&!(S in y)&&r(h,S,g[S],null,P,p.children,b,x,I);"value"in y&&r(h,"value",g.value,y.value)}},Pe=(h,p,g,y,b,x,P,S,_)=>{const v=p.el=h?h.el:a(""),O=p.anchor=h?h.anchor:a("");let{patchFlag:R,dynamicChildren:N,slotScopeIds:z}=p;z&&(S=S?S.concat(z):z),h==null?(s(v,g,y),s(O,g,y),J(p.children,g,O,b,x,P,S,_)):R>0&&R&64&&N&&h.dynamicChildren?(de(h.dynamicChildren,N,g,b,x,P,S),(p.key!=null||b&&p===b.subTree)&&ai(h,p,!0)):Ee(h,p,g,O,b,x,P,S,_)},Ae=(h,p,g,y,b,x,P,S,_)=>{p.slotScopeIds=S,h==null?p.shapeFlag&512?b.ctx.activate(p,g,y,P,_):ge(p,g,y,b,x,P,_):we(h,p,_)},ge=(h,p,g,y,b,x,P)=>{const S=h.component=Cl(h,y,b);if(Hn(h)&&(S.ctx.renderer=ce),Pl(S),S.asyncDep){if(b&&b.registerDep(S,le),!h.el){const _=S.subTree=Se(He);j(null,_,p,g)}return}le(S,h,p,g,b,x,P)},we=(h,p,g)=>{const y=p.component=h.component;if(qa(h,p,g))if(y.asyncDep&&!y.asyncResolved){te(y,p,g);return}else y.next=p,Da(y.update),y.update();else p.el=h.el,y.vnode=p},le=(h,p,g,y,b,x,P)=>{const S=()=>{if(h.isMounted){let{next:O,bu:R,u:N,parent:z,vnode:Z}=h,se=O,oe;bt(h,!1),O?(O.el=Z.el,te(h,O,P)):O=Z,R&&Sn(R),(oe=O.props&&O.props.onVnodeBeforeUpdate)&&Ye(oe,z,O,Z),bt(h,!0);const he=Xn(h),Le=h.subTree;h.subTree=he,A(Le,he,f(Le.el),F(Le),h,b,x),O.el=he.el,se===null&&za(h,he.el),N&&Ce(N,b),(oe=O.props&&O.props.onVnodeUpdated)&&Ce(()=>Ye(oe,z,O,Z),b)}else{let O;const{el:R,props:N}=p,{bm:z,m:Z,parent:se}=h,oe=_n(p);if(bt(h,!1),z&&Sn(z),!oe&&(O=N&&N.onVnodeBeforeMount)&&Ye(O,se,p),bt(h,!0),R&&V){const he=()=>{h.subTree=Xn(h),V(R,h.subTree,h,b,null)};oe?p.type.__asyncLoader().then(()=>!h.isUnmounted&&he()):he()}else{const he=h.subTree=Xn(h);A(null,he,g,y,h,b,x),p.el=he.el}if(Z&&Ce(Z,b),!oe&&(O=N&&N.onVnodeMounted)){const he=p;Ce(()=>Ye(O,se,he),b)}(p.shapeFlag&256||se&&_n(se.vnode)&&se.vnode.shapeFlag&256)&&h.a&&Ce(h.a,b),h.isMounted=!0,p=g=y=null}},_=h.effect=new Ns(S,()=>Nr(v),h.scope),v=h.update=()=>_.run();v.id=h.uid,bt(h,!0),v()},te=(h,p,g)=>{p.component=h;const y=h.vnode.props;h.vnode=p,h.next=null,hl(h,p.props,y,g),fl(h,p.children,g),Ht(),zn(void 0,h.update),Mt()},Ee=(h,p,g,y,b,x,P,S,_=!1)=>{const v=h&&h.children,O=h?h.shapeFlag:0,R=p.children,{patchFlag:N,shapeFlag:z}=p;if(N>0){if(N&128){Xe(v,R,g,y,b,x,P,S,_);return}else if(N&256){At(v,R,g,y,b,x,P,S,_);return}}z&8?(O&16&&I(v,b,x),R!==v&&u(g,R)):O&16?z&16?Xe(v,R,g,y,b,x,P,S,_):I(v,b,x,!0):(O&8&&u(g,""),z&16&&J(R,g,y,b,x,P,S,_))},At=(h,p,g,y,b,x,P,S,_)=>{h=h||Ot,p=p||Ot;const v=h.length,O=p.length,R=Math.min(v,O);let N;for(N=0;N<R;N++){const z=p[N]=_?ht(p[N]):Ke(p[N]);A(h[N],z,g,null,b,x,P,S,_)}v>O?I(h,b,x,!0,!1,R):J(p,g,y,b,x,P,S,_,R)},Xe=(h,p,g,y,b,x,P,S,_)=>{let v=0;const O=p.length;let R=h.length-1,N=O-1;for(;v<=R&&v<=N;){const z=h[v],Z=p[v]=_?ht(p[v]):Ke(p[v]);if(vt(z,Z))A(z,Z,g,null,b,x,P,S,_);else break;v++}for(;v<=R&&v<=N;){const z=h[R],Z=p[N]=_?ht(p[N]):Ke(p[N]);if(vt(z,Z))A(z,Z,g,null,b,x,P,S,_);else break;R--,N--}if(v>R){if(v<=N){const z=N+1,Z=z<O?p[z].el:y;for(;v<=N;)A(null,p[v]=_?ht(p[v]):Ke(p[v]),g,Z,b,x,P,S,_),v++}}else if(v>N)for(;v<=R;)Fe(h[v],b,x,!0),v++;else{const z=v,Z=v,se=new Map;for(v=Z;v<=N;v++){const De=p[v]=_?ht(p[v]):Ke(p[v]);De.key!=null&&se.set(De.key,v)}let oe,he=0;const Le=N-Z+1;let Ct=!1,lo=0;const Kt=new Array(Le);for(v=0;v<Le;v++)Kt[v]=0;for(v=z;v<=R;v++){const De=h[v];if(he>=Le){Fe(De,b,x,!0);continue}let Ve;if(De.key!=null)Ve=se.get(De.key);else for(oe=Z;oe<=N;oe++)if(Kt[oe-Z]===0&&vt(De,p[oe])){Ve=oe;break}Ve===void 0?Fe(De,b,x,!0):(Kt[Ve-Z]=v+1,Ve>=lo?lo=Ve:Ct=!0,A(De,p[Ve],g,null,b,x,P,S,_),he++)}const co=Ct?yl(Kt):Ot;for(oe=co.length-1,v=Le-1;v>=0;v--){const De=Z+v,Ve=p[De],uo=De+1<O?p[De+1].el:y;Kt[v]===0?A(null,Ve,g,uo,b,x,P,S,_):Ct&&(oe<0||v!==co[oe]?$e(Ve,g,uo,2):oe--)}}},$e=(h,p,g,y,b=null)=>{const{el:x,type:P,transition:S,children:_,shapeFlag:v}=h;if(v&6){$e(h.component.subTree,p,g,y);return}if(v&128){h.suspense.move(p,g,y);return}if(v&64){P.move(h,p,g,ce);return}if(P===je){s(x,p,g);for(let R=0;R<_.length;R++)$e(_[R],p,g,y);s(h.anchor,p,g);return}if(P===ts){H(h,p,g);return}if(y!==2&&v&1&&S)if(y===0)S.beforeEnter(x),s(x,p,g),Ce(()=>S.enter(x),b);else{const{leave:R,delayLeave:N,afterLeave:z}=S,Z=()=>s(x,p,g),se=()=>{R(x,()=>{Z(),z&&z()})};N?N(x,Z,se):se()}else s(x,p,g)},Fe=(h,p,g,y=!1,b=!1)=>{const{type:x,props:P,ref:S,children:_,dynamicChildren:v,shapeFlag:O,patchFlag:R,dirs:N}=h;if(S!=null&&ks(S,null,g,h,!0),O&256){p.ctx.deactivate(h);return}const z=O&1&&N,Z=!_n(h);let se;if(Z&&(se=P&&P.onVnodeBeforeUnmount)&&Ye(se,p,h),O&6)B(h.component,g,y);else{if(O&128){h.suspense.unmount(g,y);return}z&&wt(h,null,p,"beforeUnmount"),O&64?h.type.remove(h,p,g,b,ce,y):v&&(x!==je||R>0&&R&64)?I(v,p,g,!1,!0):(x===je&&R&384||!b&&O&16)&&I(_,p,g),y&&Zn(h)}(Z&&(se=P&&P.onVnodeUnmounted)||z)&&Ce(()=>{se&&Ye(se,p,h),z&&wt(h,null,p,"unmounted")},g)},Zn=h=>{const{type:p,el:g,anchor:y,transition:b}=h;if(p===je){w(g,y);return}if(p===ts){G(h);return}const x=()=>{o(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:S}=b,_=()=>P(g,x);S?S(h.el,x,_):_()}else x()},w=(h,p)=>{let g;for(;h!==p;)g=d(h),o(h),h=g;o(p)},B=(h,p,g)=>{const{bum:y,scope:b,update:x,subTree:P,um:S}=h;y&&Sn(y),b.stop(),x&&(x.active=!1,Fe(P,h,p,g)),S&&Ce(S,p),Ce(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},I=(h,p,g,y=!1,b=!1,x=0)=>{for(let P=x;P<h.length;P++)Fe(h[P],p,g,y,b)},F=h=>h.shapeFlag&6?F(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),ne=(h,p,g)=>{h==null?p._vnode&&Fe(p._vnode,null,null,!0):A(p._vnode||null,h,p,null,null,null,g),qr(),p._vnode=h},ce={p:A,um:Fe,m:$e,r:Zn,mt:ge,mc:J,pc:Ee,pbc:de,n:F,o:e};let Y,V;return t&&([Y,V]=t(ce)),{render:ne,hydrate:Y,createApp:gl(ne,Y)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ai(e,t,n=!1){const s=e.children,o=t.children;if(q(s)&&q(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=ht(o[r]),a.el=i.el),n||ai(i,a))}}function yl(e){const t=e.slice(),n=[0];let s,o,r,i,a;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(o=n[n.length-1],e[o]<c){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<c?r=a+1:i=a;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const vl=e=>e.__isTeleport,je=Symbol(void 0),Js=Symbol(void 0),He=Symbol(void 0),ts=Symbol(void 0),nn=[];let Ge=null;function fe(e=!1){nn.push(Ge=e?null:[])}function kl(){nn.pop(),Ge=nn[nn.length-1]||null}let hn=1;function Eo(e){hn+=e}function li(e){return e.dynamicChildren=hn>0?Ge||Ot:null,kl(),hn>0&&Ge&&Ge.push(e),e}function xe(e,t,n,s,o,r){return li(be(e,t,n,s,o,r,!0))}function Ks(e,t,n,s,o){return li(Se(e,t,n,s,o,!0))}function Ts(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const $n="__vInternal",ci=({key:e})=>e!=null?e:null,In=({ref:e,ref_key:t,ref_for:n})=>e!=null?ye(e)||pe(e)||M(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function be(e,t=null,n=null,s=0,o=null,r=e===je?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ci(t),ref:t&&In(t),scopeId:Un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Zs(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),hn>0&&!i&&Ge&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ge.push(l),l}const Se=Tl;function Tl(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===Zr)&&(e=He),Ts(e)){const a=gt(e,t,!0);return n&&Zs(a,n),hn>0&&!r&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(e)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(Bl(e)&&(e=e.__vccOpts),t){t=Sl(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=Ut(a)),ve(l)&&(Er(l)&&!q(l)&&(l=_e({},l)),t.style=Ds(l))}const i=ye(e)?1:Ga(e)?128:vl(e)?64:ve(e)?4:M(e)?2:0;return be(e,t,n,s,o,i,r,!0)}function Sl(e){return e?Er(e)||$n in e?_e({},e):e:null}function gt(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:i}=e,a=t?_l(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ci(a),ref:t&&t.ref?n&&o?q(o)?o.concat(In(t)):[o,In(t)]:In(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==je?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),el:e.el,anchor:e.anchor}}function xl(e=" ",t=0){return Se(Js,null,e,t)}function Lt(e="",t=!1){return t?(fe(),Ks(He,null,e)):Se(He,null,e)}function Ke(e){return e==null||typeof e=="boolean"?Se(He):q(e)?Se(je,null,e.slice()):typeof e=="object"?ht(e):Se(Js,null,String(e))}function ht(e){return e.el===null||e.memo?e:gt(e)}function Zs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Zs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!($n in t)?t._ctx=Ne:o===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else M(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),s&64?(n=16,t=[xl(t)]):n=8);e.children=t,e.shapeFlag|=n}function _l(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=Ut([t.class,s.class]));else if(o==="style")t.style=Ds([t.style,s.style]);else if(Fn(o)){const r=t[o],i=s[o];i&&r!==i&&!(q(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function Ye(e,t,n,s=null){We(e,t,7,[n,s])}const Il=ii();let Al=0;function Cl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Il,r={uid:Al++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new wr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ni(s,o),emitsOptions:Gr(s,o),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ba.bind(null,r),e.ce&&e.ce(r),r}let Te=null;const Qs=()=>Te||Ne,qt=e=>{Te=e,e.scope.on()},_t=()=>{Te&&Te.scope.off(),Te=null};function ui(e){return e.vnode.shapeFlag&4}let dn=!1;function Pl(e,t=!1){dn=t;const{props:n,children:s}=e.vnode,o=ui(e);ul(e,n,o,t),pl(e,s);const r=o?El(e,t):void 0;return dn=!1,r}function El(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wt(new Proxy(e.ctx,ol));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?jl(e):null;qt(e),Ht();const r=ft(s,e,0,[e.props,o]);if(Mt(),_t(),fr(r)){if(r.then(_t,_t),t)return r.then(i=>{Do(e,i,t)}).catch(i=>{qn(i,e,0)});e.asyncDep=r}else Do(e,r,t)}else hi(e,t)}function Do(e,t,n){M(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=Br(t)),hi(e,n)}let jo;function hi(e,t,n){const s=e.type;if(!e.render){if(!t&&jo&&!s.render){const o=s.template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,c=_e(_e({isCustomElement:r,delimiters:a},i),l);s.render=jo(o,c)}}e.render=s.render||Ue}qt(e),Ht(),rl(e),Mt(),_t()}function Dl(e){return new Proxy(e.attrs,{get(t,n){return Be(e,"get","$attrs"),t[n]}})}function jl(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Dl(e))},slots:e.slots,emit:e.emit,expose:t}}function Vn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Br(Wt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)}}))}function Rl(e,t=!0){return M(e)?e.displayName||e.name:e.name||t&&e.__name}function Bl(e){return M(e)&&"__vccOpts"in e}const ze=(e,t)=>Ca(e,t,dn);function di(e,t,n){const s=arguments.length;return s===2?ve(t)&&!q(t)?Ts(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ts(n)&&(n=[n]),Se(e,t,n))}const Fl="3.2.37",Ol="http://www.w3.org/2000/svg",kt=typeof document!="undefined"?document:null,Ro=kt&&kt.createElement("template"),Nl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?kt.createElementNS(Ol,e):kt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Ro.innerHTML=s?`<svg>${e}</svg>`:e;const a=Ro.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Wl(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ll(e,t,n){const s=e.style,o=ye(n);if(n&&!o){for(const r in n)Ss(s,r,n[r]);if(t&&!ye(t))for(const r in t)n[r]==null&&Ss(s,r,"")}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Bo=/\s*!important$/;function Ss(e,t,n){if(q(n))n.forEach(s=>Ss(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=ql(e,t);Bo.test(n)?e.setProperty(It(s),n.replace(Bo,""),"important"):e[s]=n}}const Fo=["Webkit","Moz","ms"],ns={};function ql(e,t){const n=ns[t];if(n)return n;let s=Qe(t);if(s!=="filter"&&s in e)return ns[t]=s;s=Wn(s);for(let o=0;o<Fo.length;o++){const r=Fo[o]+s;if(r in e)return ns[t]=r}return t}const Oo="http://www.w3.org/1999/xlink";function zl(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oo,t.slice(6,t.length)):e.setAttributeNS(Oo,t,n);else{const r=Wi(t);n==null||r&&!hr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Gl(e,t,n,s,o,r,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=hr(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[pi,Ul]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let xs=0;const Hl=Promise.resolve(),Ml=()=>{xs=0},$l=()=>xs||(Hl.then(Ml),xs=pi());function Bt(e,t,n,s){e.addEventListener(t,n,s)}function Vl(e,t,n,s){e.removeEventListener(t,n,s)}function Yl(e,t,n,s,o=null){const r=e._vei||(e._vei={}),i=r[t];if(s&&i)i.value=s;else{const[a,l]=Jl(t);if(s){const c=r[t]=Kl(s,o);Bt(e,a,c,l)}else i&&(Vl(e,a,i,l),r[t]=void 0)}}const No=/(?:Once|Passive|Capture)$/;function Jl(e){let t;if(No.test(e)){t={};let n;for(;n=e.match(No);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[It(e.slice(2)),t]}function Kl(e,t){const n=s=>{const o=s.timeStamp||pi();(Ul||o>=n.attached-1)&&We(Zl(s,n.value),t,5,[s])};return n.value=e,n.attached=$l(),n}function Zl(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Wo=/^on[a-z]/,Ql=(e,t,n,s,o=!1,r,i,a,l)=>{t==="class"?Wl(e,s,o):t==="style"?Ll(e,n,s):Fn(t)?js(t)||Yl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Xl(e,t,s,o))?Gl(e,t,s,r,i,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),zl(e,t,s,o))};function Xl(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Wo.test(t)&&M(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Wo.test(t)&&ye(n)?!1:t in e}const ec={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Va.props;const Lo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>Sn(t,n):t};function tc(e){e.target.composing=!0}function qo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Fh={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e._assign=Lo(o);const r=s||o.props&&o.props.type==="number";Bt(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=is(a)),e._assign(a)}),n&&Bt(e,"change",()=>{e.value=e.value.trim()}),t||(Bt(e,"compositionstart",tc),Bt(e,"compositionend",qo),Bt(e,"change",qo))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e._assign=Lo(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(o||e.type==="number")&&is(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},nc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oh=(e,t)=>n=>{if(!("key"in n))return;const s=It(n.key);if(t.some(o=>o===s||nc[o]===s))return e(n)},sc=_e({patchProp:Ql},Nl);let zo;function oc(){return zo||(zo=wl(sc))}const rc=(...e)=>{const t=oc().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=ic(s);if(!o)return;const r=t._component;!M(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function ic(e){return ye(e)?document.querySelector(e):e}var ac=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let fi;const Yn=e=>fi=e,mi=Symbol();function _s(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var sn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(sn||(sn={}));function lc(){const e=br(!0),t=e.run(()=>fn({}));let n=[],s=[];const o=Wt({install(r){Yn(o),o._a=r,r.provide(mi,o),r.config.globalProperties.$pinia=o,s.forEach(i=>n.push(i)),s=[]},use(r){return!this._a&&!ac?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const gi=()=>{};function Go(e,t,n,s=gi){e.push(t);const o=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),s())};return!n&&Qs()&&$s(o),o}function Pt(e,...t){e.slice().forEach(n=>{n(...t)})}function Is(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],o=e[n];_s(o)&&_s(s)&&e.hasOwnProperty(n)&&!pe(s)&&!nt(s)?e[n]=Is(o,s):e[n]=s}return e}const cc=Symbol();function uc(e){return!_s(e)||!e.hasOwnProperty(cc)}const{assign:et}=Object;function hc(e){return!!(pe(e)&&e.effect)}function dc(e,t,n,s){const{state:o,actions:r,getters:i}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=o?o():{});const u=_a(n.state.value[e]);return et(u,r,Object.keys(i||{}).reduce((f,d)=>(f[d]=Wt(ze(()=>{Yn(n);const m=n._s.get(e);return i[d].call(m,m)})),f),{}))}return l=wi(e,c,t,n,s,!0),l.$reset=function(){const f=o?o():{};this.$patch(d=>{et(d,f)})},l}function wi(e,t,n={},s,o,r){let i;const a=et({actions:{}},n),l={deep:!0};let c,u,f=Wt([]),d=Wt([]),m;const k=s.state.value[e];!r&&!k&&(s.state.value[e]={}),fn({});let C;function A($){let D;c=u=!1,typeof $=="function"?($(s.state.value[e]),D={type:sn.patchFunction,storeId:e,events:m}):(Is(s.state.value[e],$),D={type:sn.patchObject,payload:$,storeId:e,events:m});const J=C=Symbol();Hs().then(()=>{C===J&&(c=!0)}),u=!0,Pt(f,D,s.state.value[e])}const T=gi;function j(){i.stop(),f=[],d=[],s._s.delete(e)}function U($,D){return function(){Yn(s);const J=Array.from(arguments),ee=[],de=[];function me(ge){ee.push(ge)}function Pe(ge){de.push(ge)}Pt(d,{args:J,name:$,store:G,after:me,onError:Pe});let Ae;try{Ae=D.apply(this&&this.$id===e?this:G,J)}catch(ge){throw Pt(de,ge),ge}return Ae instanceof Promise?Ae.then(ge=>(Pt(ee,ge),ge)).catch(ge=>(Pt(de,ge),Promise.reject(ge))):(Pt(ee,Ae),Ae)}}const H={_p:s,$id:e,$onAction:Go.bind(null,d),$patch:A,$reset:T,$subscribe($,D={}){const J=Go(f,$,D.detached,()=>ee()),ee=i.run(()=>xt(()=>s.state.value[e],de=>{(D.flush==="sync"?u:c)&&$({storeId:e,type:sn.direct,events:m},de)},et({},l,D)));return J},$dispose:j},G=$t(et({},H));s._s.set(e,G);const X=s._e.run(()=>(i=br(),i.run(()=>t())));for(const $ in X){const D=X[$];if(pe(D)&&!hc(D)||nt(D))r||(k&&uc(D)&&(pe(D)?D.value=k[$]:Is(D,k[$])),s.state.value[e][$]=D);else if(typeof D=="function"){const J=U($,D);X[$]=J,a.actions[$]=D}}return et(G,X),et(Q(G),X),Object.defineProperty(G,"$state",{get:()=>s.state.value[e],set:$=>{A(D=>{et(D,$)})}}),s._p.forEach($=>{et(G,i.run(()=>$({store:G,app:s._a,pinia:s,options:a})))}),k&&r&&n.hydrate&&n.hydrate(G.$state,k),c=!0,u=!0,G}function Xs(e,t,n){let s,o;const r=typeof t=="function";typeof e=="string"?(s=e,o=r?n:t):(o=e,s=e.id);function i(a,l){const c=Qs();return a=a||c&&Ze(mi),a&&Yn(a),a=fi,a._s.has(s)||(r?wi(s,t,o,a):dc(s,o,a)),a._s.get(s)}return i.$id=s,i}function eo(e){{e=Q(e);const t={};for(const n in e){const s=e[n];(pe(s)||nt(s))&&(t[n]=Fr(e,n))}return t}}const pc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},fc=be("path",{fill:"currentColor",d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"},null,-1),mc=[fc];function gc(e,t){return fe(),xe("svg",pc,mc)}var wc={name:"mdi-chevron-up",render:gc};const bc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},yc=be("path",{fill:"currentColor",d:"M17 8h3v12h1v1h-4v-1h1v-3h-4l-1.5 3H14v1h-4v-1h1l6-12m1 1l-3.5 7H18V9M5 3h5c1.11 0 2 .89 2 2v11H9v-5H6v5H3V5c0-1.11.89-2 2-2m1 2v4h3V5H6Z"},null,-1),vc=[yc];function kc(e,t){return fe(),xe("svg",bc,vc)}var Tc={name:"mdi-format-font",render:kc};const Sc={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},xc=be("path",{fill:"currentColor",d:"M12 18V6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-2.69L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69Z"},null,-1),_c=[xc];function Ic(e,t){return fe(),xe("svg",Sc,_c)}var Ac={name:"mdi-brightness6",render:Ic};const Cc=Xs("theme",{state:()=>({dark:!1,font:"font-roboto"}),actions:{toggle(){this.dark=!this.dark},setFont(e){this.font=e}}});function bi(){const e=Cc(),{dark:t,font:n}=eo(e),{toggle:s,setFont:o}=e;return{dark:t,font:n,toggle:s,setFont:o}}const Pc=Xs("sidebar",{state:()=>({open:!0}),actions:{toggle(){this.open=!this.open}}});function to(){const e=Pc(),{open:t}=eo(e),{toggle:n}=e;return{open:t,toggle:n}}var no=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};const so=e=>(Fa("data-v-33a4005c"),e=e(),Oa(),e),Ec=so(()=>be("div",{class:"line top-line"},null,-1)),Dc=so(()=>be("div",{class:"line middle-line"},null,-1)),jc=so(()=>be("div",{class:"line base-line"},null,-1)),Rc=[Ec,Dc,jc],Bc={__name:"ToggleSidebar",setup(e){const{open:t,toggle:n}=to();return(s,o)=>(fe(),xe("div",{class:Ut(["toggle-sidebar",{opened:ue(t),closed:!ue(t)}]),onClick:o[0]||(o[0]=(...r)=>ue(n)&&ue(n)(...r))},Rc,2))}};var Fc=no(Bc,[["__scopeId","data-v-33a4005c"]]);const Oc={class:"appbar"},Nc={href:"/"},Wc=["src"],Lc={class:"appbar--actions"},qc={class:"font-drop"},zc={key:0,class:"font-drop--menu"},Gc=["onClick"],Uc={__name:"TheAppBar",setup(e){const{dark:t,toggle:n,font:s,setFont:o}=bi(),r=new URL("/assets/jt_logo_with_name.3a17a7eb.png",self.location).href,i=new URL("/assets/jt_logo_with_name_dark.36caaf3a.png",self.location).href,a=[{name:"Roboto",class:"font-roboto"},{name:"Poppins",class:"font-poppins"},{name:"Open Sans",class:"font-open-sans"},{name:"Lato",class:"font-lato"}],l=fn(!1),c=()=>{l.value=!l.value};return xt(s,()=>{document.body.classList.remove(...a.map(u=>u.class)),document.body.classList.add(s.value)}),Jr(()=>{document.body.classList.add(s.value)}),(u,f)=>{const d=Ac,m=Tc;return fe(),xe("nav",Oc,[u.$route.name!=="404"?(fe(),Ks(ue(Fc),{key:0})):Lt("",!0),be("a",Nc,[be("img",{class:"appbar--logo",src:ue(t)?ue(i):ue(r),alt:"",width:"200"},null,8,Wc)]),be("div",Lc,[be("button",{class:"appbar--icon icon-button toggle-theme",onClick:f[0]||(f[0]=(...k)=>ue(n)&&ue(n)(...k))},[Se(d,{class:"one-rem"})]),be("div",qc,[be("button",{class:"appbar--icon icon-button toggle-font",onClick:c},[Se(m,{class:"one-rem"})]),l.value?(fe(),xe("div",zc,[(fe(),xe(je,null,gs(a,(k,C)=>be("button",{class:Ut(["font-drop--menu--item",{"font-drop--menu--item--active":ue(s)===k.class}]),key:C,onClick:A=>ue(o)(k.class)},kn(k.name),11,Gc)),64))])):Lt("",!0)])])])}}};var Hc=no(Uc,[["__scopeId","data-v-acfd91b0"]]);const Mc=Xs("markdown",{state:()=>({list:[],modules:{},sidebarList:{}}),actions:{setSidebarList(e){this.sidebarList=e},setList(e=[]){this.list=e},setModules(e={}){this.modules=e}}});function Vt(){const e=Mc(),{list:t,sidebarList:n,modules:s}=eo(e),{setList:o,setModules:r,setSidebarList:i}=e;return{list:t,modules:s,sidebarList:n,setList:o,setModules:r,setSidebarList:i}}const $c={key:0,class:"sidebar"},Vc={key:0,class:"sidebar--content"},Yc={key:0,class:"sidebar--series"},Jc={class:"sidebar--series--title"},Kc=["title","href"],Zc={key:1,class:"sidebar--item"},Qc=["title","href"],Xc={__name:"TheSideBar",setup(e){const{open:t}=to(),{sidebarList:n}=Vt();return(s,o)=>ue(t)?(fe(),xe("div",$c,[ue(n)?(fe(),xe("div",Vc,[(fe(!0),xe(je,null,gs(Object.keys(ue(n)),(r,i)=>(fe(),xe("div",{key:i},[typeof ue(n)[r]=="object"?(fe(),xe("div",Yc,[be("div",Jc,kn(r),1),(fe(!0),xe(je,null,gs(Object.keys(ue(n)[r]),(a,l)=>(fe(),xe("div",{class:"sidebar--item",key:l},[be("a",{title:a.title,href:`/#/blog/${encodeURIComponent(r)}/${encodeURIComponent(a)}`},kn(a),9,Kc)]))),128))])):(fe(),xe("div",Zc,[be("a",{title:r,href:`/#/blog/${encodeURIComponent(r)}`},kn(r),9,Qc)]))]))),128))])):Lt("",!0)])):Lt("",!0)}};var eu=no(Xc,[["__scopeId","data-v-fb7c7ac6"]]);const tu="modulepreload",Uo={},nu="/",Et=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${nu}${s}`,s in Uo)return;Uo[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":tu,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((a,l)=>{i.addEventListener("load",a),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function yi(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Yt=yi();function su(e){Yt=e}const ou=/[&<>"']/,ru=/[&<>"']/g,iu=/[<>"']|&(?!#?\w+;)/,au=/[<>"']|&(?!#?\w+;)/g,lu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ho=e=>lu[e];function ke(e,t){if(t){if(ou.test(e))return e.replace(ru,Ho)}else if(iu.test(e))return e.replace(au,Ho);return e}const cu=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function vi(e){return e.replace(cu,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const uu=/(^|[^\[])\^/g;function ae(e,t){e=typeof e=="string"?e:e.source,t=t||"";const n={replace:(s,o)=>(o=o.source||o,o=o.replace(uu,"$1"),e=e.replace(s,o),n),getRegex:()=>new RegExp(e,t)};return n}const hu=/[^\w:]/g,du=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Mo(e,t,n){if(e){let s;try{s=decodeURIComponent(vi(n)).replace(hu,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}t&&!du.test(n)&&(n=gu(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const vn={},pu=/^[^:]+:\/*[^/]*$/,fu=/^([^:]+:)[\s\S]*$/,mu=/^([^:]+:\/*[^/]*)[\s\S]*$/;function gu(e,t){vn[" "+e]||(pu.test(e)?vn[" "+e]=e+"/":vn[" "+e]=An(e,"/",!0)),e=vn[" "+e];const n=e.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:e.replace(fu,"$1")+t:t.charAt(0)==="/"?n?t:e.replace(mu,"$1")+t:e+t}const Rn={exec:function(){}};function Me(e){let t=1,n,s;for(;t<arguments.length;t++){n=arguments[t];for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}function $o(e,t){const n=e.replace(/\|/g,(r,i,a)=>{let l=!1,c=i;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),s=n.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function An(e,t,n){const s=e.length;if(s===0)return"";let o=0;for(;o<s;){const r=e.charAt(s-o-1);if(r===t&&!n)o++;else if(r!==t&&n)o++;else break}return e.slice(0,s-o)}function wu(e,t){if(e.indexOf(t[1])===-1)return-1;const n=e.length;let s=0,o=0;for(;o<n;o++)if(e[o]==="\\")o++;else if(e[o]===t[0])s++;else if(e[o]===t[1]&&(s--,s<0))return o;return-1}function ki(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function Vo(e,t){if(t<1)return"";let n="";for(;t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function Yo(e,t,n,s){const o=t.href,r=t.title?ke(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){s.state.inLink=!0;const a={type:"link",raw:n,href:o,title:r,text:i,tokens:s.inlineTokens(i,[])};return s.state.inLink=!1,a}return{type:"image",raw:n,href:o,title:r,text:ke(i)}}function bu(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const s=n[1];return t.split(`
`).map(o=>{const r=o.match(/^\s+/);if(r===null)return o;const[i]=r;return i.length>=s.length?o.slice(s.length):o}).join(`
`)}class oo{constructor(t){this.options=t||Yt}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const s=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?s:An(s,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const s=n[0],o=bu(s,n[3]||"");return{type:"code",raw:s,lang:n[2]?n[2].trim():n[2],text:o}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let s=n[2].trim();if(/#$/.test(s)){const r=An(s,"#");(this.options.pedantic||!r||/ $/.test(r))&&(s=r.trim())}const o={type:"heading",raw:n[0],depth:n[1].length,text:s,tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const s=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(s,[]),text:s}}}list(t){let n=this.rules.block.list.exec(t);if(n){let s,o,r,i,a,l,c,u,f,d,m,k,C=n[1].trim();const A=C.length>1,T={type:"list",raw:"",ordered:A,start:A?+C.slice(0,-1):"",loose:!1,items:[]};C=A?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=A?C:"[*+-]");const j=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(k=!1,!(!(n=j.exec(t))||this.rules.block.hr.test(t)));){if(s=n[0],t=t.substring(s.length),u=n[2].split(`
`,1)[0],f=t.split(`
`,1)[0],this.options.pedantic?(i=2,m=u.trimLeft()):(i=n[2].search(/[^ ]/),i=i>4?1:i,m=u.slice(i),i+=n[1].length),l=!1,!u&&/^ *$/.test(f)&&(s+=f+`
`,t=t.substring(f.length+1),k=!0),!k){const H=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),G=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),X=new RegExp(`^( {0,${Math.min(3,i-1)}})(\`\`\`|~~~)`);for(;t&&(d=t.split(`
`,1)[0],u=d,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(X.test(u)||this.rules.block.heading.test(u)||H.test(u)||G.test(t)));){if(u.search(/[^ ]/)>=i||!u.trim())m+=`
`+u.slice(i);else if(!l)m+=`
`+u;else break;!l&&!u.trim()&&(l=!0),s+=d+`
`,t=t.substring(d.length+1)}}T.loose||(c?T.loose=!0:/\n *\n *$/.test(s)&&(c=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(m),o&&(r=o[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),T.items.push({type:"list_item",raw:s,task:!!o,checked:r,loose:!1,text:m}),T.raw+=s}T.items[T.items.length-1].raw=s.trimRight(),T.items[T.items.length-1].text=m.trimRight(),T.raw=T.raw.trimRight();const U=T.items.length;for(a=0;a<U;a++){this.lexer.state.top=!1,T.items[a].tokens=this.lexer.blockTokens(T.items[a].text,[]);const H=T.items[a].tokens.filter(X=>X.type==="space"),G=H.every(X=>{const $=X.raw.split("");let D=0;for(const J of $)if(J===`
`&&(D+=1),D>1)return!0;return!1});!T.loose&&H.length&&G&&(T.loose=!0,T.items[a].loose=!0)}return T}}html(t){const n=this.rules.block.html.exec(t);if(n){const s={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(s.type="paragraph",s.text=this.options.sanitizer?this.options.sanitizer(n[0]):ke(n[0]),s.tokens=[],this.lexer.inline(s.text,s.tokens)),s}}def(t){const n=this.rules.block.def.exec(t);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const s=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:s,raw:n[0],href:n[2],title:n[3]}}}table(t){const n=this.rules.block.table.exec(t);if(n){const s={type:"table",header:$o(n[1]).map(o=>({text:o})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=n[0];let o=s.align.length,r,i,a,l;for(r=0;r<o;r++)/^ *-+: *$/.test(s.align[r])?s.align[r]="right":/^ *:-+: *$/.test(s.align[r])?s.align[r]="center":/^ *:-+ *$/.test(s.align[r])?s.align[r]="left":s.align[r]=null;for(o=s.rows.length,r=0;r<o;r++)s.rows[r]=$o(s.rows[r],s.header.length).map(c=>({text:c}));for(o=s.header.length,i=0;i<o;i++)s.header[i].tokens=[],this.lexer.inline(s.header[i].text,s.header[i].tokens);for(o=s.rows.length,i=0;i<o;i++)for(l=s.rows[i],a=0;a<l.length;a++)l[a].tokens=[],this.lexer.inline(l[a].text,l[a].tokens);return s}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n){const s={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const s={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}text(t){const n=this.rules.block.text.exec(t);if(n){const s={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:ke(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):ke(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const s=n[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const i=An(s.slice(0,-1),"\\");if((s.length-i.length)%2===0)return}else{const i=wu(n[2],"()");if(i>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+i;n[2]=n[2].substring(0,i),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let o=n[2],r="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);i&&(o=i[1],r=i[3])}else r=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Yo(n,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let s;if((s=this.rules.inline.reflink.exec(t))||(s=this.rules.inline.nolink.exec(t))){let o=(s[2]||s[1]).replace(/\s+/g," ");if(o=n[o.toLowerCase()],!o||!o.href){const r=s[0].charAt(0);return{type:"text",raw:r,text:r}}return Yo(s,o,s[0],this.lexer)}}emStrong(t,n,s=""){let o=this.rules.inline.emStrong.lDelim.exec(t);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;const r=o[1]||o[2]||"";if(!r||r&&(s===""||this.rules.inline.punctuation.exec(s))){const i=o[0].length-1;let a,l,c=i,u=0;const f=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,n=n.slice(-1*t.length+i);(o=f.exec(n))!=null;){if(a=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!a)continue;if(l=a.length,o[3]||o[4]){c+=l;continue}else if((o[5]||o[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+u),Math.min(i,l)%2){const m=t.slice(1,i+o.index+l);return{type:"em",raw:t.slice(0,i+o.index+l+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}const d=t.slice(2,i+o.index+l-1);return{type:"strong",raw:t.slice(0,i+o.index+l+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let s=n[2].replace(/\n/g," ");const o=/[^ ]/.test(s),r=/^ /.test(s)&&/ $/.test(s);return o&&r&&(s=s.substring(1,s.length-1)),s=ke(s,!0),{type:"codespan",raw:n[0],text:s}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(t,n){const s=this.rules.inline.autolink.exec(t);if(s){let o,r;return s[2]==="@"?(o=ke(this.options.mangle?n(s[1]):s[1]),r="mailto:"+o):(o=ke(s[1]),r=o),{type:"link",raw:s[0],text:o,href:r,tokens:[{type:"text",raw:o,text:o}]}}}url(t,n){let s;if(s=this.rules.inline.url.exec(t)){let o,r;if(s[2]==="@")o=ke(this.options.mangle?n(s[0]):s[0]),r="mailto:"+o;else{let i;do i=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(i!==s[0]);o=ke(s[0]),s[1]==="www."?r="http://"+o:r=o}return{type:"link",raw:s[0],text:o,href:r,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(t,n){const s=this.rules.inline.text.exec(t);if(s){let o;return this.lexer.state.inRawBlock?o=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):ke(s[0]):s[0]:o=ke(this.options.smartypants?n(s[0]):s[0]),{type:"text",raw:s[0],text:o}}}}const W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Rn,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};W._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;W._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;W.def=ae(W.def).replace("label",W._label).replace("title",W._title).getRegex();W.bullet=/(?:[*+-]|\d{1,9}[.)])/;W.listItemStart=ae(/^( *)(bull) */).replace("bull",W.bullet).getRegex();W.list=ae(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex();W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;W.html=ae(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();W.paragraph=ae(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.blockquote=ae(W.blockquote).replace("paragraph",W.paragraph).getRegex();W.normal=Me({},W);W.gfm=Me({},W.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});W.gfm.table=ae(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.gfm.paragraph=ae(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",W.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.pedantic=Me({},W.normal,{html:ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Rn,paragraph:ae(W.normal._paragraph).replace("hr",W.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const E={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Rn,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Rn,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};E._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";E.punctuation=ae(E.punctuation).replace(/punctuation/g,E._punctuation).getRegex();E.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;E.escapedEmSt=/\\\*|\\_/g;E._comment=ae(W._comment).replace("(?:-->|$)","-->").getRegex();E.emStrong.lDelim=ae(E.emStrong.lDelim).replace(/punct/g,E._punctuation).getRegex();E.emStrong.rDelimAst=ae(E.emStrong.rDelimAst,"g").replace(/punct/g,E._punctuation).getRegex();E.emStrong.rDelimUnd=ae(E.emStrong.rDelimUnd,"g").replace(/punct/g,E._punctuation).getRegex();E._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;E._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;E._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;E.autolink=ae(E.autolink).replace("scheme",E._scheme).replace("email",E._email).getRegex();E._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;E.tag=ae(E.tag).replace("comment",E._comment).replace("attribute",E._attribute).getRegex();E._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;E._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;E._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;E.link=ae(E.link).replace("label",E._label).replace("href",E._href).replace("title",E._title).getRegex();E.reflink=ae(E.reflink).replace("label",E._label).replace("ref",W._label).getRegex();E.nolink=ae(E.nolink).replace("ref",W._label).getRegex();E.reflinkSearch=ae(E.reflinkSearch,"g").replace("reflink",E.reflink).replace("nolink",E.nolink).getRegex();E.normal=Me({},E);E.pedantic=Me({},E.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ae(/^!?\[(label)\]\((.*?)\)/).replace("label",E._label).getRegex(),reflink:ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",E._label).getRegex()});E.gfm=Me({},E.normal,{escape:ae(E.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});E.gfm.url=ae(E.gfm.url,"i").replace("email",E.gfm._extended_email).getRegex();E.breaks=Me({},E.gfm,{br:ae(E.br).replace("{2,}","*").getRegex(),text:ae(E.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function yu(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Jo(e){let t="",n,s;const o=e.length;for(n=0;n<o;n++)s=e.charCodeAt(n),Math.random()>.5&&(s="x"+s.toString(16)),t+="&#"+s+";";return t}class ot{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Yt,this.options.tokenizer=this.options.tokenizer||new oo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:W.normal,inline:E.normal};this.options.pedantic?(n.block=W.pedantic,n.inline=E.pedantic):this.options.gfm&&(n.block=W.gfm,this.options.breaks?n.inline=E.breaks:n.inline=E.gfm),this.tokenizer.rules=n}static get rules(){return{block:W,inline:E}}static lex(t,n){return new ot(n).lex(t)}static lexInline(t,n){return new ot(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let s,o,r,i;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(s=a.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))){if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length),s.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),n.push(s);continue}if(r=t,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=t.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(r=t.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){o=n[n.length-1],i&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(s),i=r.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(s);continue}if(t){const a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(t,n){this.inlineQueue.push({src:t,tokens:n})}inlineTokens(t,n=[]){let s,o,r,i=t,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,a.index)+"["+Vo("a",a[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,a.index)+"["+Vo("a",a[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,a.index)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(s=u.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))){if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):n.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length),o=n[n.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(t,i,c)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(t,Jo)){t=t.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t,Jo))){t=t.substring(s.raw.length),n.push(s);continue}if(r=t,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=t.slice(1);let d;this.options.extensions.startInline.forEach(function(m){d=m.call({lexer:this},f),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(r=t.substring(0,u+1))}if(s=this.tokenizer.inlineText(r,yu)){t=t.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(c=s.raw.slice(-1)),l=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):n.push(s);continue}if(t){const u="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class ro{constructor(t){this.options=t||Yt}code(t,n,s){const o=(n||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(t,o);r!=null&&r!==t&&(s=!0,t=r)}return t=t.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+ke(o,!0)+'">'+(s?t:ke(t,!0))+`</code></pre>
`:"<pre><code>"+(s?t:ke(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,n,s,o){if(this.options.headerIds){const r=this.options.headerPrefix+o.slug(s);return`<h${n} id="${r}">${t}</h${n}>
`}return`<h${n}>${t}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,n,s){const o=n?"ol":"ul",r=n&&s!==1?' start="'+s+'"':"";return"<"+o+r+`>
`+t+"</"+o+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+n+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,n){const s=n.header?"th":"td";return(n.align?`<${s} align="${n.align}">`:`<${s}>`)+t+`</${s}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,s){if(t=Mo(this.options.sanitize,this.options.baseUrl,t),t===null)return s;let o='<a href="'+ke(t)+'"';return n&&(o+=' title="'+n+'"'),o+=">"+s+"</a>",o}image(t,n,s){if(t=Mo(this.options.sanitize,this.options.baseUrl,t),t===null)return s;let o=`<img src="${t}" alt="${s}"`;return n&&(o+=` title="${n}"`),o+=this.options.xhtml?"/>":">",o}text(t){return t}}class Ti{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,s){return""+s}image(t,n,s){return""+s}br(){return""}}class Si{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let s=t,o=0;if(this.seen.hasOwnProperty(s)){o=this.seen[t];do o++,s=t+"-"+o;while(this.seen.hasOwnProperty(s))}return n||(this.seen[t]=o,this.seen[s]=0),s}slug(t,n={}){const s=this.serialize(t);return this.getNextSafeSlug(s,n.dryrun)}}class rt{constructor(t){this.options=t||Yt,this.options.renderer=this.options.renderer||new ro,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ti,this.slugger=new Si}static parse(t,n){return new rt(n).parse(t)}static parseInline(t,n){return new rt(n).parseInline(t)}parse(t,n=!0){let s="",o,r,i,a,l,c,u,f,d,m,k,C,A,T,j,U,H,G,X;const $=t.length;for(o=0;o<$;o++){if(m=t[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(X=this.options.extensions.renderers[m.type].call({parser:this},m),X!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type))){s+=X||"";continue}switch(m.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(m.tokens),m.depth,vi(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{for(f="",u="",a=m.header.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(m.header[r].tokens),{header:!0,align:m.align[r]});for(f+=this.renderer.tablerow(u),d="",a=m.rows.length,r=0;r<a;r++){for(c=m.rows[r],u="",l=c.length,i=0;i<l;i++)u+=this.renderer.tablecell(this.parseInline(c[i].tokens),{header:!1,align:m.align[i]});d+=this.renderer.tablerow(u)}s+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(m.tokens),s+=this.renderer.blockquote(d);continue}case"list":{for(k=m.ordered,C=m.start,A=m.loose,a=m.items.length,d="",r=0;r<a;r++)j=m.items[r],U=j.checked,H=j.task,T="",j.task&&(G=this.renderer.checkbox(U),A?j.tokens.length>0&&j.tokens[0].type==="paragraph"?(j.tokens[0].text=G+" "+j.tokens[0].text,j.tokens[0].tokens&&j.tokens[0].tokens.length>0&&j.tokens[0].tokens[0].type==="text"&&(j.tokens[0].tokens[0].text=G+" "+j.tokens[0].tokens[0].text)):j.tokens.unshift({type:"text",text:G}):T+=G),T+=this.parse(j.tokens,A),d+=this.renderer.listitem(T,H,U);s+=this.renderer.list(d,k,C);continue}case"html":{s+=this.renderer.html(m.text);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{for(d=m.tokens?this.parseInline(m.tokens):m.text;o+1<$&&t[o+1].type==="text";)m=t[++o],d+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);s+=n?this.renderer.paragraph(d):d;continue}default:{const D='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(D);return}else throw new Error(D)}}}return s}parseInline(t,n){n=n||this.renderer;let s="",o,r,i;const a=t.length;for(o=0;o<a;o++){if(r=t[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(i=this.options.extensions.renderers[r.type].call({parser:this},r),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){s+=i||"";continue}switch(r.type){case"escape":{s+=n.text(r.text);break}case"html":{s+=n.html(r.text);break}case"link":{s+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{s+=n.image(r.href,r.title,r.text);break}case"strong":{s+=n.strong(this.parseInline(r.tokens,n));break}case"em":{s+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{s+=n.codespan(r.text);break}case"br":{s+=n.br();break}case"del":{s+=n.del(this.parseInline(r.tokens,n));break}case"text":{s+=n.text(r.text);break}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return s}}function L(e,t,n){if(typeof e=="undefined"||e===null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(n=t,t=null),t=Me({},L.defaults,t||{}),ki(t),n){const s=t.highlight;let o;try{o=ot.lex(e,t)}catch(a){return n(a)}const r=function(a){let l;if(!a)try{t.walkTokens&&L.walkTokens(o,t.walkTokens),l=rt.parse(o,t)}catch(c){a=c}return t.highlight=s,a?n(a):n(null,l)};if(!s||s.length<3||(delete t.highlight,!o.length))return r();let i=0;L.walkTokens(o,function(a){a.type==="code"&&(i++,setTimeout(()=>{s(a.text,a.lang,function(l,c){if(l)return r(l);c!=null&&c!==a.text&&(a.text=c,a.escaped=!0),i--,i===0&&r()})},0))}),i===0&&r();return}try{const s=ot.lex(e,t);return t.walkTokens&&L.walkTokens(s,t.walkTokens),rt.parse(s,t)}catch(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+ke(s.message+"",!0)+"</pre>";throw s}}L.options=L.setOptions=function(e){return Me(L.defaults,e),su(L.defaults),L};L.getDefaults=yi;L.defaults=Yt;L.use=function(...e){const t=Me({},...e),n=L.defaults.extensions||{renderers:{},childTokens:{}};let s;e.forEach(o=>{if(o.extensions&&(s=!0,o.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const i=n.renderers?n.renderers[r.name]:null;i?n.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:n.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[r.level]?n[r.level].unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}r.childTokens&&(n.childTokens[r.name]=r.childTokens)})),o.renderer){const r=L.defaults.renderer||new ro;for(const i in o.renderer){const a=r[i];r[i]=(...l)=>{let c=o.renderer[i].apply(r,l);return c===!1&&(c=a.apply(r,l)),c}}t.renderer=r}if(o.tokenizer){const r=L.defaults.tokenizer||new oo;for(const i in o.tokenizer){const a=r[i];r[i]=(...l)=>{let c=o.tokenizer[i].apply(r,l);return c===!1&&(c=a.apply(r,l)),c}}t.tokenizer=r}if(o.walkTokens){const r=L.defaults.walkTokens;t.walkTokens=function(i){o.walkTokens.call(this,i),r&&r.call(this,i)}}s&&(t.extensions=n),L.setOptions(t)})};L.walkTokens=function(e,t){for(const n of e)switch(t.call(L,n),n.type){case"table":{for(const s of n.header)L.walkTokens(s.tokens,t);for(const s of n.rows)for(const o of s)L.walkTokens(o.tokens,t);break}case"list":{L.walkTokens(n.items,t);break}default:L.defaults.extensions&&L.defaults.extensions.childTokens&&L.defaults.extensions.childTokens[n.type]?L.defaults.extensions.childTokens[n.type].forEach(function(s){L.walkTokens(n[s],t)}):n.tokens&&L.walkTokens(n.tokens,t)}};L.parseInline=function(e,t){if(typeof e=="undefined"||e===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=Me({},L.defaults,t||{}),ki(t);try{const n=ot.lexInline(e,t);return t.walkTokens&&L.walkTokens(n,t.walkTokens),rt.parseInline(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+ke(n.message+"",!0)+"</pre>";throw n}};L.Parser=rt;L.parser=rt.parse;L.Renderer=ro;L.TextRenderer=Ti;L.Lexer=ot;L.lexer=ot.lex;L.Tokenizer=oo;L.Slugger=Si;L.parse=L;L.options;L.setOptions;L.use;L.walkTokens;L.parseInline;rt.parse;ot.lex;const vu=()=>{const e=[],t={"/src/assets/BDDInGo.md":`---
title: Demonstrating BDD (Behavior-driven development) in Go
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Feb 5, 2020
tags: testing, bdd, go, qa
banner:
seriesTitle: Behaviour Driven Development
episode: 1
---

In [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) I've written about TDD and this time I want to demonstrate BDD (Behavior-driven development) with Go.

I will not explain all principles of BDD upfront, but explain some of them as I use them in the example. You can read more about them here:
- ["Introducing BDD", by Dan North (2006)](http://blog.dannorth.net/introducing-bdd)
- [Wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development)
- ["The beginner's guide to BDD (behaviour-driven development)", By Konstantin Kudryashov, Alistair Stead, Dan North](https://inviqa.com/blog/bdd-guide)
- [Behaviour-Driven Development](https://cucumber.io/docs/bdd/)

If you have more good resources, please post them in the comment section.

## The basic idea
I'm a fan of explaining things with real examples, that's why in [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) I've created that small library to convert from Bikram Sambat (BS) (also called Vikram Samvat) dates to Gregorian dates and vice-versa. Now I want to use that library to create an API-driven service to do the conversion. (The project can be found on [github](https://github.com/JankariTech/bsDateServer))

One could now give that "requirement" to a developer and see what happens. With that kind of small project, chances are, something good will come out, but bad things might also happen:
- the API will be super-complex and over-engineered
- the API does the conversion, but does not handle errors correctly
- etc.

So there is a lot of potential for wasted resources, conflicts, misunderstandings etc. So it would be better to write down the requirements in more detail, because:

1. As customer you want your application to behave correctly (sometimes without knowing exactly what that means).
2. As developer your want to develop exactly what is requested and needed (to save time) and get paid afterwards.
3. As as QA-person, you want to know what you have to test, and you want to know what is a bug and what is a feature.

So basically the goal is to get all the stakeholders (there might be more than the listed 3) to communicate and agree on what should be the acceptable behavior of the application. And that is in a nutshell the idea of BDD: improve the communication between stakeholders so that everybody knows what is talked about.

But how to do that? The customer might think that the one-line explanation: "API to convert dates from BS to AD and vice-versa" is enough, the manager wants to write a contract and the developer says: "code is documentation enough".
A good way to bring everybody on the same page is to describe the features of an application using the Gherkin language. Its a semi-structured language, that is so simple a cucumber could understand.

## Who wants to achieve what and why?
In the project folder we create a new file called \`bs-to-ad-conversion.feature\`. Here we want to describe the feature to convert the dates in one direction. The description of every feature of the app is supposed to go into a separate file.

_Side note: there is always the discussion what is a "feature"? In our example: is the conversion in both directions one or two features? Is the error-handling a separate feature or a part of the conversion feature? If you are not sure, be practical and simply make sure the file does not get too long._

We start the feature file with a very general description of the feature:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps
\`\`\`

These lines are very important. They answer the question WHO wants to achieve WHAT with that feature and WHY. If you don't know who will use that feature, why do you implement it? If there is nothing to achieve with that feature, you actually don't have a feature. And if there is no reason to use that feature, it doesn't have a business value. So if the stakeholders (developer, customer, manager, QA, etc.) cannot answer these 3 questions, nobody really should spend time and money to implement it.

## Scenarios
Every feature has different scenarios. A "add item to shopping basket"-feature in an online-shop could have scenarios like:
- adding item to the basket while user is logged in
- adding item to the basket while user is not logged in
- adding item to the basket when the card is empty
- adding item to the basket when there is already the same item in the basket
- adding multiple items to the basket at once
- etc.

In every scenario your app might behave differently. If that specific behavior in that scenario matters for one or more stakeholders, better describe it.

In Gherkin we have to start the scenario description with the \`Scenario:\` keyword and a short free-text sentence:

\`\`\`
  Scenario: converting a valid BS date

  Scenario: converting an invalid BS date
\`\`\`

## Given, When, Then
Now we want to describe the specific behavior of the app in that scenario. For that Gherkin provides 3 different keywords:
- **Given** - prerequisites for the scenario
- **When** - the action to be tested
- **Then** - the desired observable outcome

Additionally there is **And**, if you have multiple of one of the above, you don't need to write
\`\`\`
When doing A
When doing B
\`\`\`

but you can use \`And\` (it just sounds and reads nicer)
 \`\`\`
 When doing A
 And doing B
 \`\`\`

For a complex application there will be most-likely some steps to bring the application into the state that you want to test (e.g. create users, navigate to a specific page, etc), for those prerequisites you should use the \`Given\` keyword.
For our app, I cannot really think of anything. So I skip over to the \`When\` keyword.

The \`When\` keyword is for the action (or multiple) you really want to test.
\`\`\`
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-13-01"
\`\`\`

Now, what should happen in those specific scenarios? What is the observable outcome? Use the \`Then\` keyword to describe that (if there are different outcomes connect multiple \`Then\`s with \`And\`s)

\`\`\`
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"
\`\`\`

So as pieces of our description we have:
1. features - one feature per file
2. scenarios - different ways that the feature should behave
3. steps - detailed description of every scenario. Every step starts with \`Given\`, \`When\` or \`Then\`

All these pieces have to be written in a natural language, that all stakeholders can understand. What that means in detail would be a whole own post. In our case the "customer", requested an API, so IMO using technical terms like "HTTP-response code" should be OK. If you describe a GUI, the descriptions should be probably even less technical. The bottom line is: use words that all understand. Remember: BDD is all about improving communication!


For more information about how to phrase the steps definitions see: https://cucumber.io/docs/gherkin/reference/

After specifying one feature (or even one scenario) the developer could start developing. In SCRUM-terms: one feature is one user-story, so you do all your agile development cycle with it. Create one or multiple, put them in sprints, work on them, test them, etc. The description is not only the ToDo list for the developer, but also the test-procedure for QA and the documentation.

## Test it automatically
We could stop there, but there is a great bonus-point: let's use these descriptions to run automatic tests.

For that we need software that interprets the Gherkin language and runs code that executes the tests. For Go there is the [godog package](https://github.com/DATA-DOG/godog).

To install godog we fist have to create a simple \`go.mod\` file with the content
\`\`\`
module github.com/JankariTech/bsDateServer

go 1.13
\`\`\`

and then run \`go get github.com/cucumber/godog/cmd/godog@v0.11.0\`

If you are running within $GOPATH, you will need to set \`GO111MODULE=on\`, as:
  \`GO111MODULE=on go get github.com/cucumber/godog/cmd/godog@v0.11.0\`

(The version number \`@v0.11.0\` is optional, if it's not given the latest version will be installed. I set the version here to make sure this blog-post stays valid also when s.th. changes in godog)

Now you should be able to run godog with \`$GOPATH/godog *.feature\` and the output would be something like:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"

2 scenarios (2 undefined)
6 steps (6 undefined)
281.282\xB5s

You can implement step definitions for undefined steps with these snippets:

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(\`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$\`, aRequestIsSentToTheEndpoint)
	ctx.Step(\`^the HTTP-response code should be "([^"]*)"$\`, theHTTPresponseCodeShouldBe)
	ctx.Step(\`^the response content should be "([^"]*)"$\`, theResponseContentShouldBe)
}
\`\`\`

Godog lists all the scenarios we want to run and tells us that it has no idea what to do with them, because we haven't implemented any of the steps. Now we actually need to write code to tell godog how to execute our scenarios.

For that create a file with the name \`bsdateServer_test.go\` and the content:

\`\`\`
package main

import (
    "github.com/cucumber/godog"
)

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(\`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$\`, aRequestIsSentToTheEndpoint)
	ctx.Step(\`^the HTTP-response code should be "([^"]*)"$\`, theHTTPresponseCodeShouldBe)
	ctx.Step(\`^the response content should be "([^"]*)"$\`, theResponseContentShouldBe)
}
\`\`\`

In the \`InitializeScenario\` function we have the link between the human-readable Gherkin, and the function that the computer has to execute for that step. The output of \`$GOPATH/godog\` now looks a bit different:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:16 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:16 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 pending, 4 skipped)
576.1\xB5s
\`\`\`

Godog found the functions that correspond to every step, but those don't do anything yet, just returning an error.

Let's implement the first function to send the request:
\`\`\`diff
index c8b0144..f7ee56d 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -1,11 +1,26 @@
 package main

 import (
+    "fmt"
     "github.com/cucumber/godog"
+    "net/http"
+    "strings"
 )

-func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
-    return godog.ErrPending
+var host = "http://localhost:10000"
+var res *http.Response
+
+func aRequestIsSentToTheEndpoint(method, endpoint string) error {
+    var reader = strings.NewReader("")
+    var request, err = http.NewRequest(method, host+endpoint, reader)
+    if err != nil {
+        return fmt.Errorf("could not create request %s", err.Error())
+    }
+    res, err = http.DefaultClient.Do(request)
+    if err != nil {
+        return fmt.Errorf("could not send request %s", err.Error())
+    }
+    return nil
 }

 func theHTTPresponseCodeShouldBe(arg1 string) error {
\`\`\`

Here we create a request and send it using the \`net/http\` package. The trick in godog is to return \`nil\` if everything goes well, that will make the step pass. If a step function returns something that implements the \`error\` interface the step will fail.

BTW: the \`res\` variable is defined outside the function because we need to access it from other steps also.

Running godog now gives us this result
\`\`\`
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/2060-04-01": dial tcp 127.0.0.1:10000: connect: connection refused
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

...
\`\`\`

It cannot connect to the server, because nothing is listening on that port. Let's change that. For a minimal implementation of a server waiting on the port put this code into \`main.go\` and run it with \`go run main.go\`
\`\`\`
package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Bikram Sambat Server")
}

func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", homePage)
	log.Fatal(http.ListenAndServe(":10000", myRouter))
}

func main() {
	handleRequests()
}
\`\`\`

Now we are a step further:
\`\`\`
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "not a valid date"               # bsdateServer_test.go:31 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 passed, 2 pending, 2 skipped)
1.849695ms
\`\`\`

The \`When\` step passed, it sent the request, but the first \`Then\` step failed as expected, because it's not implemented yet.

Let's do that:
\`\`\`diff
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -3,6 +3,7 @@ package main
 import (
     "fmt"
     "github.com/cucumber/godog"
+    "io/ioutil"
     "net/http"
     "strings"
 )
@@ -23,16 +24,23 @@ func aRequestIsSentToTheEndpoint(method, endpoint string) error {
     return nil
 }

-func theHTTPresponseCodeShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theHTTPresponseCodeShouldBe(expectedCode int) error {
+    if expectedCode != res.StatusCode {
+        return fmt.Errorf("status code not as expected! Expected '%d', got '%d'", expectedCode, res.StatusCode)
+    }
+    return nil
 }

-func theResponseContentShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theResponseContentShouldBe(expectedContent string) error {
+    body, _ := ioutil.ReadAll(res.Body)
+    if expectedContent != string(body) {
+        return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
+    }
+    return nil
 }

 func InitializeScenario(ctx *godog.ScenarioContext) {
     ctx.Step(\`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$\`, aRequestIsSentToTheEndpoint)
-    ctx.Step(\`^the HTTP-response code should be "([^"]*)"$\`, theHTTPresponseCodeShouldBe)
+    ctx.Step(\`^the HTTP-response code should be "(\\d+)"$\`, theHTTPresponseCodeShouldBe)
     ctx.Step(\`^the response content should be "([^"]*)"$\`, theResponseContentShouldBe)
 }
\`\`\`

Here we simply get the status code and the result body and compare it with the expectation. If it does not match, return an error. Make sure you show good error messages, the goal is to direct the developer as much as possible to the problem. The clearer the message is the quicker the developer will be able to fix the issue. Remember: these tests will not only be used during the initial development but also in the future to prevent regressions.

The regular-expression change in the \`FeatureContext\` just makes sure that we only accept decimal numbers in that step.

Now the tests fail with:
\`\`\`
...
  Scenario: converting a valid BS date # bs-to-ad-conversion.feature:6
    Then the HTTP-response code should be "200" # bs-to-ad-conversion.feature:8
      Error: status code not as expected! Expected '200', got '404'

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    Then the HTTP-response code should be "400" # bs-to-ad-conversion.feature:13
      Error: status code not as expected! Expected '400', got '404'

2 scenarios (2 failed)
6 steps (2 passed, 2 failed, 2 skipped)
1.766438ms
\`\`\`

Why? Because the endpoint does not exist! The server returns 404. It's time to write the software itself!

Here are the changes in \`main.go\` to do a simple conversion:

\`\`\`diff
index ae01ed0..06299b0 100644
--- a/main.go
+++ b/main.go
@@ -2,18 +2,34 @@ package main

 import (
        "fmt"
+       "github.com/JankariTech/GoBikramSambat"
        "github.com/gorilla/mux"
        "log"
        "net/http"
+       "strconv"
+       "strings"
 )

+func getAdFromBs(w http.ResponseWriter, r *http.Request) {
+       vars := mux.Vars(r)
+       dateString := vars["date"]
+       var splitedDate = strings.Split(dateString, "-")
+       day, _ := strconv.Atoi(splitedDate[2])
+       month, _ := strconv.Atoi(splitedDate[1])
+       year, _ := strconv.Atoi(splitedDate[0])
+       date, _ := bsdate.New(day, month, year)
+       gregorianDate, _ := date.GetGregorianDate()
+       fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
+}
+
 func handleRequests() {
        myRouter := mux.NewRouter().StrictSlash(true)
        myRouter.HandleFunc("/", homePage)
+       myRouter.HandleFunc("/ad-from-bs/{date}", getAdFromBs)
        log.Fatal(http.ListenAndServe(":10000", myRouter))
 }
\`\`\`

Basically: split the incoming string, send it to the \`GoBikramSambat\` lib and return the formatted result.

And with that the first scenario passes:
\`\`\`
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

--- Failed steps:

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bs-to-ad-conversion.feature:12
      Error: could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF


2 scenarios (1 passed, 1 failed)
6 steps (3 passed, 1 failed, 2 skipped)
2.035601ms
\`\`\`

With a bit of error-handling we should be able to make the other one pass also.

\`\`\`diff
index 06299b0..a62eaf6 100644
--- a/main.go
+++ b/main.go
@@ -21,7 +21,11 @@ func getAdFromBs(w http.ResponseWriter, r *http.Request) {
        day, _ := strconv.Atoi(splitedDate[2])
        month, _ := strconv.Atoi(splitedDate[1])
        year, _ := strconv.Atoi(splitedDate[0])
-       date, _ := bsdate.New(day, month, year)
+       date, err := bsdate.New(day, month, year)
+       if err != nil {
+               http.Error(w, err.Error(), http.StatusBadRequest)
+               return
+       }
        gregorianDate, _ := date.GetGregorianDate()
        fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
 }


index 3156498..16c48ab 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -35,7 +35,7 @@ func theHTTPresponseCodeShouldBe(expectedCode int) error {

 func theResponseContentShouldBe(expectedContent string) error {
     body, _ := ioutil.ReadAll(res.Body)
-    if expectedContent != string(body) {
+    if expectedContent != strings.TrimSpace(string(body)) {
         return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
     }
     return nil
\`\`\`

In \`main.go\` we now spit out an Error if the conversion does not work and in the tests we trim the body, because \`http.Error\` likes to send an \`\\n\` at the end of the body.

Finally, the scenarios pass:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

2 scenarios (2 passed)
6 steps (6 passed)
1.343415ms
\`\`\`

## Examples
The scenarios we have written down are pretty limited, probably there are more requirements of the software. Specially there will be those that have not been spoken about. To reduce the size of the feature-file Gherkin has the \`Examples:\` keyword.

\`\`\`diff
index 5a00814..18db1ed 100644
--- a/features/bs-to-ad-convertion.feature
+++ b/features/bs-to-ad-convertion.feature
@@ -3,12 +3,25 @@ Feature: convert dates from BS to AD using an API
   I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
   So that I have a simple way to convert BS to AD dates, that can be used in other apps

-  Scenario: converting a valid BS date
-  When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
+  Scenario Outline: converting a valid BS date
+    When a "GET" request is sent to the endpoint "/ad-from-bs/<bs-date>"
     Then the HTTP-response code should be "200"
-    And the response content should be "2003-07-17"
+    And the response content should be "<ad-date>"
+    Examples:
+      | bs-date    | ad-date    |
+      | 2060-04-01 | 2003-07-17 |
+      | 2040-01-01 | 1983-04-14 |
+      | 2040-12-30 | 1984-04-12 |
\`\`\`

Instead of \`Scenario\` we have to use \`Scenario Outline\` and at the bottom of the Outline we add a table. The headings of the table are used as "variables" and the table rows are substituted into the steps e.g. \`<bs-date>\` becomes \`2060-04-01\`.
Godog will run a single scenario for every line in the examples table. That way you can very easily multiply out the test cases.

## Conclusion
1. Writing down the expected behaviors using the Gherkin language can improve the communication between the different stakeholders and with that increase customer satisfaction, productivity and the chances to make the project a success.
2. The feature descriptions become the requirement documentation.
3. Additionally, the same feature descriptions can be used to run automatic tests.

If you need help with setting up BDD or you want to outsource your test-development, please contact us:
- https://www.jankaritech.com/
- https://www.linkedin.com/company/jankaritech/
`,"/src/assets/BDDInGo_1_DE.md":`---
title: Einstieg in BDD (Behavior-driven development)
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: March 31, 2021
tags: testing, bdd, test
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--9V07u59B--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kwqa0mzc2gp33o3rhbg5.png
---

In [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) habe ich \xFCber TDD geschrieben und jetzt m\xF6chte ich zeigen wie BDD (Behavior-driven development) mit Go funktionieren kann.
In diesem Artikel gehe ich auf die Grundlagen von BDD ein und darauf, wie die Funktionen einer Applikation beschrieben werden. Der n\xE4chste Artikel wird dann technischer sein und sich darum drehen, wie man BDD Tests automatisch in einer Golang Umgebung laufen l\xE4sst.

Beide Artikel wurden bereits auf Englisch ver\xF6ffentlicht [Demonstrating BDD (Behavior-driven development) in Go](https://dev.to/jankaritech/demonstrating-bdd-behavior-driven-development-in-go-1eci)

Anstatt BDD in Theorie zu beschreiben, werde ich praktische Beispiele benutzen, um die Prinzipien von BDD zu erkl\xE4ren.
Hier ein paar weiterf\xFChrende Links zu BDD:
- ["Introducing BDD", by Dan North (2006)](http://blog.dannorth.net/introducing-bdd)
- [Wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development)
- ["The beginner's guide to BDD (behaviour-driven development)", By Konstantin Kudryashov, Alistair Stead, Dan North](https://inviqa.com/blog/bdd-guide)
- [Behaviour-Driven Development](https://cucumber.io/docs/bdd/)

Wenn du weitere gute Ressourcen kennst, poste sie bitte in den Kommentaren.

## Die Idee
Ich bin ein gro\xDFer Fan davon, Dinge an anschaulichen Beispielen zu erkl\xE4ren. Daher habe ich in [Demonstrating TDD (Test-driven development) in Go](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0) eine kleine Bibliothek gebaut, um Daten aus dem in Nepal benutzten Kalender (Bikram Sambat (BS), auch als Vikram Samvat bekannt) in gregorianische Daten umzuwandeln.
Diese Bibliothek verwende ich jetzt und baue eine API drumherum. (Das Projekt ist bei [github](https://github.com/JankariTech/bsDateServer) zu finden)

Man k\xF6nnte diese "Anforderung" auch an einen Entwickler geben und sehen, was passiert. Bei einem solch kleinen Projekt kann das gut gehen, aber es kann auch viel schief laufen:
- die API wird sehr komplex
- die API kann Daten umwandeln, aber behandelt Fehler nicht richtig
- usw.

Wenn es schief l\xE4uft, werden viele Ressourcen verschwendet, Konflikte und Missverst\xE4ndnisse entstehen, usw. Es w\xE4re also viel besser, die Anforderungen detaillierter aufzuschreiben, um das zu vermeiden. Dabei profitieren alle Beteiligten:

1. Als Kunde will man, dass die Applikation korrekt arbeitet (manchmal ohne zu wissen, was das genau bedeutet).
2. Als Entwickler will man genau das entwickeln, was gefordert ist (um Zeit zu sparen), und am Ende will man bezahlt werden.
3. Als Tester m\xF6chte man genau wissen, was zu testen ist und ob ein Verhalten ein Bug oder ein Feature ist.

Im Grunde genommen will man alle beteiligten Parteien (und es k\xF6nnen mehr als die drei genannten sein) dazu bringen, ihre Erwartungen zu kommunizieren und sich auf das akzeptable Verhalten der Anwendung zu einigen. Und das ist die grundlegende Idee hinter BDD: die Kommunikation zwischen allen Beteiligten zu verbessern, um sicherzustellen, dass jeder wei\xDF, wor\xFCber geredet wird.

Aber wie erreicht man das? Der Kunde k\xF6nnte denken, dass eine Zeile zur Erkl\xE4rung reicht: "API um Daten von BS zu AD und AD zu BS zu konvertieren". Der Manager m\xF6chte einen wasserdichten Vertrag und der Entwickler sagt: "Der Quellcode gen\xFCgt als Dokumentation."
Eine gute M\xF6glichkeit, das gemeinsame Verst\xE4ndnis zu verbessern, ist das Aufschreiben der Anforderungen in der Gherkin-Sprache. Gherkin ist eine teilstrukturierte Sprache, die so einfach ist, dass sogar eine Gurke sie verstehen kann.

## Wer will was und wozu erreichen
Im Hauptverzeichnis unseres Projekts erstellen wir als Erstes eine Datei mit dem Namen \`bs-to-ad-conversion.feature\`. In dieser Datei werden wir beschreiben, wie die Konvertierung in die eine Richtung funktionieren soll.
Jede Funktion sollte in einer eigenen Datei beschrieben werden.

_Randnotiz: es wird immer wieder dar\xFCber diskutiert, was eine Funktion / ein Feature ist. Konkret in unsrem Beispiel: Ist die Konvertierung in beide Richtungen ein oder zwei Features? Ist die Behandlung von Fehlern ein separates Feature oder ein Teil der Konvertierung? Wenn ich mir nicht sicher bin, ist die L\xF6sung f\xFCr mich oft einfach pragmatisch: Die Datei sollte nicht zu lang sein._

Wir fangen mit einer allgemeinen Beschreibung der Funktion an:
(Ich werde den Quellcode und die Feature-Dateien nicht \xFCbersetzen, sondern so zeigen, wie sie in GitHub abgespeichert sind. Aber Gherkin kann in jeder beliebigen Sprache verwendet werden. Je nachdem, was die gemeinsame Sprache der Beteiligten ist.)
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps
\`\`\`

Diese Zeilen sind sehr wichtig, weil sie die Fragen beantworten WER WAS und WOF\xDCR erreichen m\xF6chte. Wenn es niemanden gibt, der die Funktion benutzen m\xF6chte, warum sollte man die Funktion dann implementieren? Wenn man nicht wei\xDF, was gemacht werden soll, gibt es eigentlich nichts zu programmieren. Und wenn es keinen \xFCbergeordneten Zweck f\xFCr die Funktion gibt, hat sie keinen Wert.
Falls die Beteiligten (Entwickler, Kunden, Manager, QA, usw.) diese drei Fragen nicht beantworten k\xF6nnen, sollte niemand Zeit und Geld investieren, um die Funktion zu implementieren.

## Szenarien
Jede Funktion hat verschiedene Szenarien. Die Funktion "einen Artikel in den Warenkorb legen" in einem online shop kann diese Szenarien haben:
- einen Artikel in den Warenkorb legen, wenn der Benutzer angemeldet ist
- einen Artikel in den Warenkorb legen, wenn der Benutzer nicht angemeldet ist
- einen Artikel in den Warenkorb legen, wenn der Warenkorb leer ist
- einen Artikel in den Warenkorb legen, wenn sich schon Waren im Warenkorb befinden
- mehrere Artikel auf einmal in den Warenkorb legen
- usw.

Gut m\xF6glich, dass sich die Anwendung in jedem Szenario anders zu verhalten hat. Ist das spezifische Verhalten f\xFCr einen der Beteiligten wichtig, dann sollte es auch beschrieben werden.

In Gherkin f\xE4ngt jedes Szenario mit Schl\xFCsselwort \`Scenario\` an und es folgt ein kurzer, frei w\xE4hlbarer Text, der das Szenario beschreibt:

\`\`\`
  Scenario: converting a valid BS date

  Scenario: converting an invalid BS date
\`\`\`

## Given, When, Then
Als N\xE4chstes m\xFCssen wir das gew\xFCnschte Verhalten der Anwendung in diesem Szenario beschreiben. Daf\xFCr kennt Gherkin drei Schl\xFCsselw\xF6rter:
- **Given** - die Voraussetzungen f\xFCr das Szenario
- **When** - die Aktion, die getestet werden soll
- **Then** - das gew\xFCnschte Ergebnis

Zus\xE4tzlich kennt Gherkin auch das **And** Schl\xFCsselwort. Um die anderen Schl\xFCsselw\xF6rter nicht zu wiederholen, kann man statt:
\`\`\`
When doing A
When doing B
\`\`\`

das \`And\` Schl\xFCsselwort benutzen
 \`\`\`
 When doing A
 And doing B
 \`\`\`

In den meisten F\xE4llen m\xFCssen irgendwelche Schritte ausgef\xFChrt werden, um die Anwendung in einen Zustand zu bringen, in dem die entsprechende Funktion getestet werden kann. Das kann z.B. das Anlegen von Benutzern oder das Navigieren zu einer bestimmten Stelle sein. Um die Anwendung in den testbaren Zustand zu bringen, wird das \`Given\` Schl\xFCsselwort benutzt.
F\xFCr die Beispielanwendung in diesem Blog kommt mir da aber nichts in den Sinn, und so gehen wir jetzt weiter zum \`When\` Schl\xFCsselwort.

Das \`When\` Schl\xFCsselwort ist die Aktion die getestet werden soll.
\`\`\`
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-13-01"
\`\`\`

Was soll nun in den spezifischen Szenarien passieren? Was ist das Resultat, das der Benutzer beobachten kann? Wir benutzen das \`Then\` Schl\xFCsselwort, um die Resultate zu beschreiben.

\`\`\`
  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"
\`\`\`

Damit haben wir alle Zutaten zusammen, um die Applikation zu beschreiben:
1. Funktionen - eine Funktion pro Datei.
2. Szenarien - verschiedene Weisen, wie die Funktion sich verhalten soll.
3. Schritte - detaillierte Beschreibung jedes Szenarios. Jeder Schritt startet mit \`Given\`, \`When\` oder \`Then\` als Schl\xFCsselwort.

Die komplette Beschreibung muss in nat\xFCrlicher Sprache verfasst sein. Alle Beteiligten m\xFCssen die Beschreibung verstehen k\xF6nnen. Was das genau bedeutet, ist ein Thema f\xFCr einen separaten Blogpost. In unserem Fall hat der "Kunde" eine API bestellt, also sind technische Ausdr\xFCcke wie "HTTP-response code" meiner Meinung nach in Ordnung. Die Beschreibung einer grafischen Benutzeroberfl\xE4che w\xFCrde wahrscheinlich weniger technische Begriffe enthalten. Grunds\xE4tzlich gilt: Benutze Worte die alle Beteiligten verstehen. BDD ist schlie\xDFlich haupts\xE4chlich dazu da, die Kommunikation zu verbessern.

F\xFCr weitere Informationen, wie die Schritte formuliert werden sollen, siehe: https://cucumber.io/docs/gherkin/reference/

Nachdem eine Funktion oder auch nur ein Szenario beschrieben wurde, kann die Entwicklung starten. In SCRUM-Sprache: jedes Feature ist eine user-story. Der ganze agile Zyklus funktioniert damit. Diese Beschreibung ist nicht nur die To-Do-Liste f\xFCr die Entwicklung, sondern auch das Testprozedere f\xFCr die Qualit\xE4tssicherung und sie dient auch als Dokumentation.

Im zweiten Teil des Blogs tauchen wir dann in die technischen Details ein und benutzen die Feature-Dateien, um die Anwendung automatisch zu testen.
`,"/src/assets/BDDInGo_2_DE.md":`---
title: BDD (Behavior-driven development) mit Go
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: May 18, 2021
tags: testing, go, bdd, test
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--JeC9Hmh4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/brg6zf6ifa9fpru9e7yh.png
---

In [Einstieg in BDD (Behavior-driven development)](https://dev.to/jankaritech/einstieg-in-bdd-behavior-driven-development-1m8h) habe ich die Grundz\xFCge von BDD erkl\xE4rt und ihren Einsatz, um die Funktionen einer Anwendung zu beschreiben. Im Grunde genommen ist BDD dazu gedacht, alle Beteiligten zusammenzubringen und klar zu beschreiben, wie sich die "Features" einer Anwendung in verschiedenen Situationen zu verhalten haben.

## Automatische Tests
Die Kommunikation und damit die Erfolgschancen der Entwicklung einer Anwendung zu verbessern, ist das Wichtigste bei BDD. Aber wir k\xF6nnen noch einen Schritt weiter gehen und die entstandenen Feature-Beschreibungen nutzen, um die Anwendung automatisch zu testen.

(Wie schon im ersten Artikel werde ich den Quellcode und die Feature-Dateien nicht \xFCbersetzen, sondern so zeigen, wie sie in [GitHub](https://github.com/JankariTech/bsDateServer) abgespeichert sind.)

Nach ["Einstieg in BDD (Behavior-driven development)"](https://dev.to/jankaritech/einstieg-in-bdd-behavior-driven-development-1m8h) haben wir ein Feature-File, das so aussieht:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"
\`\`\`

Um aus den Feature-Files automatische Tests zu machen, brauchen wir zun\xE4chst einen Interpreter, der die Gherkin Sprache versteht und die entsprechenden Tests ausf\xFChrt.

Solche Interpreter gibt es f\xFCr die verschiedensten Programmiersprachen. In diesem Artikel demonstriere ich, wie es mit [godog package](https://github.com/cucumber/godog) f\xFCr Go funktioniert.

Um godog zu [installieren](https://github.com/cucumber/godog#install), m\xFCssen wir zun\xE4chst eine einfache \`go.mod\` Datei anlegen
\`\`\`
module github.com/JankariTech/bsDateServer

go 1.13
\`\`\`
und dann \`go get github.com/cucumber/godog/cmd/godog@v0.11.0\` ausf\xFChren.

Um mit \`$GOPATH\` arbeiten zu k\xF6nnen, muss zus\xE4tzlich noch die Umgebungsvariable \`GO111MODULE=on\` gesetzt sein, also:
  \`GO111MODULE=on go get github.com/cucumber/godog/cmd/godog@v0.11.0\`

(Die Versionsnummer \`@v0.11.0\` ist optional; ohne sie wird die neueste vorhandene Version installiert. Damit dieser Artikel aber l\xE4nger verwendbar bleibt und ich ihn nicht st\xE4ndig anpassen muss, gebe ich hier eine Versionsnummer an.)

Jetzt k\xF6nnen wir godog mit \`$GOPATH/godog *.feature\` ausf\xFChren. Die Ausgabe sollte in etwa so aussehen:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
    Then the HTTP-response code should be "200"
    And the response content should be "2003-07-17"

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01"
    Then the HTTP-response code should be "400"
    And the response content should be "not a valid date"

2 scenarios (2 undefined)
6 steps (6 undefined)
441.226\xB5s

You can implement step definitions for undefined steps with these snippets:

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(\`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$\`, aRequestIsSentToTheEndpoint)
	ctx.Step(\`^the HTTP-response code should be "([^"]*)"$\`, theHTTPresponseCodeShouldBe)
	ctx.Step(\`^the response content should be "([^"]*)"$\`, theResponseContentShouldBe)
}
\`\`\`

Godog listet alle Szenarien, die wir ausf\xFChren wollen, und sagt uns, dass es keine Ahnung hat, was es machen soll. Das ist keine \xDCberraschung - schlie\xDFlich haben wir noch keine Test-Schritte implementiert. Um das zu tun, erstellen wir eine Datei mit dem Namen \`bsdateServer_test.go\` und dem Inhalt:

\`\`\`
package main

import (
    "github.com/cucumber/godog"
)

func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
	return godog.ErrPending
}

func theHTTPresponseCodeShouldBe(arg1 string) error {
	return godog.ErrPending
}

func theResponseContentShouldBe(arg1 string) error {
	return godog.ErrPending
}

func InitializeScenario(ctx *godog.ScenarioContext) {
	ctx.Step(\`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$\`, aRequestIsSentToTheEndpoint)
	ctx.Step(\`^the HTTP-response code should be "([^"]*)"$\`, theHTTPresponseCodeShouldBe)
	ctx.Step(\`^the response content should be "([^"]*)"$\`, theResponseContentShouldBe)
}
\`\`\`

Die \`InitializeScenario\` Funktion ist die Verbindung zwischen der menschenlesbaren Gherkin Sprache und dem Code, den der Computer ausf\xFChren soll. Mithilfe von RegularExpressions werden Teile der S\xE4tze aus der Gherkin Zeile extrahiert und als Argumente an die jeweilige Funktion gesendet.
Aus \`When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"\` wird der Funktionsaufruf: \`aRequestIsSentToTheEndpoint("GET", "/ad-from-bs/2060-04-01")\`

Wenn wir wieder \`$GOPATH/godog *.feature\` ausf\xFChren, sieht die Ausgabe schon anders aus:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:16 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:8 -> aRequestIsSentToTheEndpoint
      TODO: write pending definition
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:12 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:16 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 pending, 4 skipped)
576.1\xB5s
\`\`\`

Godog hat jetzt die Funktionen gefunden, die mit den jeweiligen Schritten korrespondieren, aber diese Funktionen tun, au\xDFer Fehler anzuzeigen, noch nichts.

Also implementieren wir die erste Funktion, die die HTTP Anfrage and unsere (noch nicht vorhandene) API sendet:
\`\`\`diff
index c8b0144..f7ee56d 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -1,11 +1,26 @@
 package main

 import (
+    "fmt"
     "github.com/cucumber/godog"
+    "net/http"
+    "strings"
 )

-func aRequestIsSentToTheEndpoint(arg1, arg2 string) error {
-    return godog.ErrPending
+var host = "http://localhost:10000"
+var res *http.Response
+
+func aRequestIsSentToTheEndpoint(method, endpoint string) error {
+    var reader = strings.NewReader("")
+    var request, err = http.NewRequest(method, host+endpoint, reader)
+    if err != nil {
+        return fmt.Errorf("could not create request %s", err.Error())
+    }
+    res, err = http.DefaultClient.Do(request)
+    if err != nil {
+        return fmt.Errorf("could not send request %s", err.Error())
+    }
+    return nil
 }

 func theHTTPresponseCodeShouldBe(arg1 string) error {
\`\`\`

Wir benutzen das \`net/http\` Go packet, um eine einfache HTTP Anfrage zu versenden. Der Trick bei godog ist, \`nil\` zur\xFCckzugeben, wenn kein Fehler aufgetreten ist. Das f\xFChrt dazu, dass godog den Schritt als erfolgreich bewertet. Auf der anderen Seite wird ein Schritt als gescheitert markiert, wenn die Funktion irgendein Objekt zur\xFCckgibt, das die \`error\` Schnittstelle (Interface) implementiert.

Randbemerkung: die \`res\` Variable ist au\xDFerhalb der Funktion definiert, weil wir auf sie noch von anderen Funktionen zugreifen m\xFCssen.

Die Ausgabe von \`$GOPATH/godog *.feature\` ist jetzt:
\`\`\`
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/2060-04-01": dial tcp 127.0.0.1:10000: connect: connection refused
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

...
\`\`\`

Die HTTP Anfrage, die der Test sendet, schl\xE4gt fehl, weil nichts auf dem entsprechenden Port lauscht. Ganz \xC4hnlich wie bei TDD (Test Driven Development) haben wir erst den Test gebaut (oder einen Teil davon), bevor die Software implementiert wurde.

Deswegen implementieren wir jetzt einen minimal-Server, der praktisch nur den Port \`10000\` \xF6ffnet. Daf\xFCr kommt der folgende code in die Datei \`main.go\` und dann wird der Server mit \`go run main.go\` gestartet
\`\`\`
package main

import (
    "fmt"
    "github.com/gorilla/mux"
    "log"
    "net/http"
)

func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Bikram Sambat Server")
}

func handleRequests() {
    myRouter := mux.NewRouter().StrictSlash(true)
    myRouter.HandleFunc("/", homePage)
    log.Fatal(http.ListenAndServe(":10000", myRouter))
}

func main() {
    handleRequests()
}
\`\`\`

Wenn wir jetzt die Tests laufen lassen, w\xE4hrend der Server l\xE4uft, sieht man, dass wir einen Schritt weiter gekommen sind:
\`\`\`
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:31 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:13 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
      TODO: write pending definition
    And the response content should be "not a valid date"               # bsdateServer_test.go:31 -> theResponseContentShouldBe

2 scenarios (2 pending)
6 steps (2 passed, 2 pending, 2 skipped)
1.849695ms
\`\`\`

Die \`When\` Schritte funktionieren jetzt wie gew\xFCnscht. Als N\xE4chstes m\xFCssen die \`Then\` Schritte implementiert werden:

\`\`\`diff
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -3,6 +3,7 @@ package main
 import (
     "fmt"
     "github.com/cucumber/godog"
+    "io/ioutil"
     "net/http"
     "strings"
 )
@@ -23,16 +24,23 @@ func aRequestIsSentToTheEndpoint(method, endpoint string) error {
     return nil
 }

-func theHTTPresponseCodeShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theHTTPresponseCodeShouldBe(expectedCode int) error {
+    if expectedCode != res.StatusCode {
+        return fmt.Errorf("status code not as expected! Expected '%d', got '%d'", expectedCode, res.StatusCode)
+    }
+    return nil
 }

-func theResponseContentShouldBe(arg1 string) error {
-    return godog.ErrPending
+func theResponseContentShouldBe(expectedContent string) error {
+    body, _ := ioutil.ReadAll(res.Body)
+    if expectedContent != string(body) {
+        return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
+    }
+    return nil
 }

 func InitializeScenario(ctx *godog.ScenarioContext) {
     ctx.Step(\`^a "([^"]*)" request is sent to the endpoint "([^"]*)"$\`, aRequestIsSentToTheEndpoint)
-    ctx.Step(\`^the HTTP-response code should be "([^"]*)"$\`, theHTTPresponseCodeShouldBe)
+    ctx.Step(\`^the HTTP-response code should be "(\\d+)"$\`, theHTTPresponseCodeShouldBe)
     ctx.Step(\`^the response content should be "([^"]*)"$\`, theResponseContentShouldBe)
 }
\`\`\`

Hier lesen wir den HTTP Status Code und den Inhalt aus der HTTP Antwort und vergleichen die Werte mit den Erwartungen. Sollten die Resultate nicht mit den Erwartungen \xFCbereinstimmen, wird ein Fehler zur\xFCckgegeben.

_Randnotiz: Es ist wichtig, gute Fehlermeldungen auszugeben. Das Ziel einer Fehlermeldung ist es, dem Entwickler die Fehlersuche zu erleichtern. Die Ausgabe des Tests muss den Entwickler zum Fehler f\xFChren. Diese Tests sollen schlie\xDFlich nicht nur in der Entstehungsphase des Projekts benutzt werden, sondern auch sp\xE4ter, um Regressionen zu vermeiden._

Die kleine \xC4nderung in der Regular-Expression in \`InitializeScenario\` stellt sicher, dass nur Zahlen als HTTP Status Code akzeptiert werden.

Die Ausgabe der Tests ist jetzt:
\`\`\`
...
  Scenario: converting a valid BS date # bs-to-ad-conversion.feature:6
    Then the HTTP-response code should be "200" # bs-to-ad-conversion.feature:8
      Error: status code not as expected! Expected '200', got '404'

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    Then the HTTP-response code should be "400" # bs-to-ad-conversion.feature:13
      Error: status code not as expected! Expected '400', got '404'


2 scenarios (2 failed)
6 steps (2 passed, 2 failed, 2 skipped)
1.766438ms
\`\`\`

Das war zu erwarten; \`/ad-from-bs/\` existiert noch nicht. Es ist an der Zeit, die API an sich zu implementieren.

Hier die \xC4nderungen in \`main.go\` f\xFCr eine einfache Konvertierung eines Bikram Sambat Datums in ein gregorianisches Datum:

\`\`\`diff
index ae01ed0..06299b0 100644
--- a/main.go
+++ b/main.go
@@ -2,18 +2,34 @@ package main

 import (
        "fmt"
+       "github.com/JankariTech/GoBikramSambat"
        "github.com/gorilla/mux"
        "log"
        "net/http"
+       "strconv"
+       "strings"
 )

+func getAdFromBs(w http.ResponseWriter, r *http.Request) {
+       vars := mux.Vars(r)
+       dateString := vars["date"]
+       var splitedDate = strings.Split(dateString, "-")
+       day, _ := strconv.Atoi(splitedDate[2])
+       month, _ := strconv.Atoi(splitedDate[1])
+       year, _ := strconv.Atoi(splitedDate[0])
+       date, _ := bsdate.New(day, month, year)
+       gregorianDate, _ := date.GetGregorianDate()
+       fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
+}
+
 func handleRequests() {
        myRouter := mux.NewRouter().StrictSlash(true)
        myRouter.HandleFunc("/", homePage)
+       myRouter.HandleFunc("/ad-from-bs/{date}", getAdFromBs)
        log.Fatal(http.ListenAndServe(":10000", myRouter))
 }
\`\`\`

Die \xC4nderung ist eigentlich recht simpel: das BS Datum in Tag, Monat und Jahr aufspalten und es an die fertige \`GoBikramSambat\` Bibliothek \xFCbergeben. (Die Bibliothek wird mit \`go get github.com/JankariTech/GoBikramSambat\` installiert)

Und damit funktioniert schon das erste Szenario:
\`\`\`
...
  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

--- Failed steps:

  Scenario: converting an invalid BS date # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bs-to-ad-conversion.feature:12
      Error: could not send request Get "http://localhost:10000/ad-from-bs/60-13-01": EOF


2 scenarios (1 passed, 1 failed)
6 steps (3 passed, 1 failed, 2 skipped)
2.035601ms
\`\`\`

Mit ein paar kleinen \xC4nderungen zur Behandlung von Fehlern sollte das zweite Scenario auch funktionieren:

\`\`\`diff
index 8243aef..2850678 100644
--- a/main.go
+++ b/main.go
@@ -21,7 +21,11 @@ func getAdFromBs(w http.ResponseWriter, r *http.Request) {
     day, _ := strconv.Atoi(splitedDate[2])
     month, _ := strconv.Atoi(splitedDate[1])
     year, _ := strconv.Atoi(splitedDate[0])
-    date, _ := bsdate.New(day, month, year)
+    date, err := bsdate.New(day, month, year)
+    if err != nil {
+        http.Error(w, err.Error(), http.StatusBadRequest)
+        return
+    }
     gregorianDate, _ := date.GetGregorianDate()
     fmt.Fprintf(w, gregorianDate.Format("2006-01-02"))
 }


index b731d6d..9871219 100644
--- a/bsdateServer_test.go
+++ b/bsdateServer_test.go
@@ -33,7 +33,7 @@ func theHTTPresponseCodeShouldBe(expectedCode int) error {

 func theResponseContentShouldBe(expectedContent string) error {
     body, _ := ioutil.ReadAll(res.Body)
-    if expectedContent != string(body) {
+    if expectedContent != strings.TrimSpace(string(body)) {
         return fmt.Errorf("status code not as expected! Expected '%s', got '%s'", expectedContent, string(body))
     }
     return nil
\`\`\`

Sollte die Konvertierung nicht funktionieren, wird jetzt in \`main.go\` ein Fehler ausgegeben. In den Tests benutzen wir \`TrimSpace\`, weil \`http.Error\` ein \`\\n\` an den Fehlertext h\xE4ngt.

Nun sollten beide Szenarien gr\xFCn sein:
\`\`\`
Feature: convert dates from BS to AD using an API
  As an app-developer in Nepal
  I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
  So that I have a simple way to convert BS to AD dates, that can be used in different apps

  Scenario: converting a valid BS date                                    # bs-to-ad-conversion.feature:6
    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "200"                           # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "2003-07-17"                       # bsdateServer_test.go:34 -> theResponseContentShouldBe

  Scenario: converting an invalid BS date                               # bs-to-ad-conversion.feature:11
    When a "GET" request is sent to the endpoint "/ad-from-bs/60-13-01" # bsdateServer_test.go:14 -> aRequestIsSentToTheEndpoint
    Then the HTTP-response code should be "400"                         # bsdateServer_test.go:27 -> theHTTPresponseCodeShouldBe
    And the response content should be "not a valid date"               # bsdateServer_test.go:34 -> theResponseContentShouldBe

2 scenarios (2 passed)
6 steps (6 passed)
1.343415ms
\`\`\`

## Beispiel-Tabellen (Examples)
Um sicherzustellen, dass die Konvertierung richtig funktioniert, sollten wir noch mehr verschiedene Daten testen. Grunds\xE4tzlich sind beim Testen oft diese Dinge interessant:
- h\xF6chste und niedrigste m\xF6glichen Werte - da die [Umrechnung zwischen BS und AD auf Tabellen beruht](https://dev.to/jankaritech/demonstrating-tdd-test-driven-development-in-go-27b0), haben wir ein erstes Datum, das wir konvertieren k\xF6nnen, und ein letztes; dar\xFCber hinaus ist keine Umrechnung m\xF6glich
- \xDCberg\xE4nge - zwischen Monaten und Jahren
- andere besondere F\xE4lle - Schaltjahre
- falsche Eingaben - dreizehnter Monat, 32ter Tag, usw.
- falsches Format - in unserem Fall z.b. \`2012.12.03\`

Wir k\xF6nnten f\xFCr jeden Fall ein eigenes Szenario schreiben, aber das w\xFCrde zu vielen Wiederholungen f\xFChren und die Datei schnell un\xFCbersichtlich machen. Besser ist es, mit dem \`Examples\` Schl\xFCsselwort Beispiel-Tabellen anzulegen:

\`\`\`diff
index 33f5d6c..9003cff 100644
--- a/bs-to-ad-conversion.feature
+++ b/bs-to-ad-conversion.feature
@@ -3,10 +3,15 @@ Feature: convert dates from BS to AD using an API
   I want to be able to send BS dates to an API endpoint and receive the corresponding AD dates
   So that I have a simple way to convert BS to AD dates, that can be used in different apps

-  Scenario: converting a valid BS date
-    When a "GET" request is sent to the endpoint "/ad-from-bs/2060-04-01"
+  Scenario Outline: converting a valid BS date
+    When a "GET" request is sent to the endpoint "/ad-from-bs/<bs-date>"
     Then the HTTP-response code should be "200"
-    And the response content should be "2003-07-17"
+    And the response content should be "<ad-date>"
+    Examples:
+      | bs-date    | ad-date    |
+      | 2060-04-01 | 2003-07-17 |
+      | 2040-01-01 | 1983-04-14 |
+      | 2040-12-30 | 1984-04-12 |
\`\`\`

Anstatt \`Scenario\` benutzen wir hier \`Scenario Outline\` als Schl\xFCsselwort und am Ende des Szenarios ist eine Tabelle angef\xFCgt. Die \xDCberschriften der Spalten werden als Variablennamen benutzt und in den Test-Schritten, in denen die Namen vorkommen, werden diese durch die Werte aus der Tabelle ersetzt.
Godog erstellt damit aus jeder Tabellenzeile ein separates Szenario.

## Zusammenfassung
1. Die gew\xFCnschten Erwartungen an die Software in Gherkin Syntax niederzuschreiben, kann die Kommunikation zwischen allen Beteiligten verbessern und damit die Chancen auf den Erfolg des Projekts drastisch verbessern.
2. Die Beschreibungen der Funktionen werden zur Dokumentation.
3. Zus\xE4tzlich k\xF6nnen die gleichen Beschreibungen benutzt werden, um die Software automatisch zu testen.

Wir helfen gerne bei der Umstellung auf BDD und der Erstellung von automatischen Tests:
- https://www.jankaritech.com/
- https://www.linkedin.com/company/jankaritech/
`,"/src/assets/BDDOnRewrite.md":`---
title: BDD on Software Rewrite
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Feb 15, 2021
tags: bdd, testing
banner: https://dev-to-uploads.s3.amazonaws.com/i/23qvc2yp1fx00fnkpjb3.jpg
seriesTitle: Behaviour Driven Development
episode: 3
---

Imagine you have an application, it works great, but you need to rewrite it, maybe because the architecture is hitting some ceiling. There will be new features, but first, you need to make sure all the existing clients work with the new system. How do you make sure they do? It's simple: You need tests, tests that check the external behavior of the application. So if you have invested in a good UI and API test infrastructure in the first place it's a relatively easy task, and you can even do Behaviour Driven Development while writing the new system without having to write new tests.

Let me show how it works at ownCloud. They are exactly in that situation, they have a stable and great product (ownCloud X written in PHP) but want to rewrite it in Go - OCIS (you can read about the reasons and background [here](https://owncloud.com/infinite-scale/)).
We as JankariTech have been working since 2017 for ownCloud to improve the test infrastructure, increase the coverage and reduce manual testing effort. As a result of this partnership, ownCloud has a huge API and UI test-suite that covers nearly all functionality of ownCloud X. How do you transfer that over to OCIS?

## Setup of the System under Test

We haven't started to use the API & UI tests from the first day of development, but only after there has been a bare minimum of functionalities implemented in OCIS. To run the tests the first challenge was how to provision the system. The goal is to have feature parity, but of course OCIS did lack a lot of functionality at that stage of development, including APIs to create and delete users, set system relevant settings, etc. Additionally, to run tests in ownCloud X, we heavily rely on the command-line tool to bring the system into a testable state. There is no equivalent (yet) in OCIS. The solution to those challenges was to extend the test-code to do slightly different things on both systems. E.g. OCIS would get users from an LDAP server, in ownCloud X we would provision users and groups through the [provisioning api](https://doc.owncloud.com/server/developer_manual/core/apis/provisioning-api.html#instruction-set-for-users). Luckily we had the LDAP code already in the test-suite from testing the [ownCloud LDAP app](https://github.com/owncloud/user_ldap).

Those different code paths should be reduced to the setup of the SUT (System Under Test) - in Gherkin speak: Given - steps.
All external behaviour that needs to be tested and examined should be the same on both systems, the goal is to reach feature parity at some point.

By now a lot of the provisioning API is also implemented in OCIS, so we could switch off the provisioning by LDAP.

## Failing tests

Of course at the beginning most of the tests would fail on OCIS, the application is not ready and does not claim to be ready. We started with skipping the failing tests and running only the tests that we knew would pass on OCIS. That way we got green CI and still prevented regressions. It was never an option to have CI failing because "we know those tests are allowed to fail". In that case the developers would have to check manually which tests are allowed to fail and which not. People would forget to do that or make wrong decisions about what is an expected failure and what not. Most important: red CI looks ugly on a pull request or worse a merge and is an embarrassment \u{1F648}

Simply skipping failing tests also had big disadvantages. To make sure the test coverage is increased with every new feature added, the developer needs to know all the tests related to that feature and run them during or after the development. Or someone needs to run the skipped tests on a regular basis to see which of them started to pass and enable them. Both approaches are not practical because of 1. the laziness of human beings and 2. the amount of tests.

A lot of test frameworks have a feature that allows some specific tests to fail without failing the entire test-run. We took that idea further and implemented an "expected to fail" feature in CI. Tests listed in the expected-to-fail list **have** to fail, if they start to pass the CI run will fail.

The advantage of that above just a simple "these tests are allowed to fail" is that, after adding a feature or fixing a bug, the developer is forced to look into the tests. If tests start to pass, the only job the developer has to do, is to remove them from the expected-to-fail list, [and what a joy is that](https://github.com/cs3org/reva/pull/1368#issuecomment-754179433) \u{1F389}.
From that point on the test has to pass in all future runs, and we are sure not to introduce any regressions. If we would only have an allowed-to-fail list, there would be no pressure to remove tests from that list, humans are humans, so they would forget or miss some. Potentially a bug could get fixed, then see some regression again and none of that would be noticed by the test-suite. So let the computers do what they are good at - automate!

## human-readable code

To improve the readability of the expected-to-fail list, it got converted from a TXT file to an MD file. If you browse now the [list](https://github.com/owncloud/ocis/blob/master/tests/acceptance/expected-failures-API-on-OCIS-storage.md) you can jump directly to the issue report, to see WHY this particular tests fails, and you can jump to the test itself, to see WHAT exactly it does.

## BDD for rewrite

With all that in place the developers
1. can use the existing test-suites for Behaviour Driven Development while rewriting the whole system.
1. know what features are missing and how far they are on the way to feature parity
1. don't need to rewrite all the tests for the new system
1. are safe from regressions for already implemented features

The only job left is to reduce the amount of expected-to-fail tests to 0, how hard can that be? \u{1F61C}
`,"/src/assets/TDDInGo.md":`---
    title: TDD in Go
    authorName: Kiran Parajuli
    authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
    authorLink: https://github.com/kiranparajuli589/
    createdAt: 02/10/2022
    tags: vue, jest, unit, testing
    banner: https://res.cloudinary.com/practicaldev/image/fetch/s--t1Oxkc_O--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkifasq4al1c75uculu.png
---

## Demonstrating TDD (Test-driven development) in Go

TDD is the practice to write tests before code and it should reduce failure rates and defects in your software.
In this blog-post I want to demonstrate how it can work.

### starting point
I'm writing an application in Go that should convert Bikram Sambat (BS) (also called Vikram Samvat) dates to Gregorian dates and vice-versa. [Vikram Samvat](https://en.wikipedia.org/wiki/Vikram_Samvat) is a calendar used mostly in Nepal and India. But even if you don't use it, this demonstration might be useful for you to understand TDD.

So far I have done a bit of work that makes it possible to create a BS (Bikram Sambat) date instance, to get its details and to convert it to a Gregorian date. See: https://github.com/JankariTech/GoBikramSambat/blob/b99c510b22faf8395becda9a6dec1d0239504bb1/bsdate.go

These functions are also tested: https://github.com/JankariTech/GoBikramSambat/blob/b99c510b22faf8395becda9a6dec1d0239504bb1/bsdate_test.go

Now I want to add the possibility to convert a Gregorian date to a Bikram Sambat date. To do so, I want to be able to create a BS-date-instance by using a Gregorian date, then I could just get the BS-date details and the conversion is done.

Something like \`nepaliDate, err := NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear)\` would be great and then simply use the existing \`nepaliDate.GetDay()\` \`nepaliDate.GetMonth()\` and \`nepaliDate.GetYear()\`

### 1. create the test
According to TDD I first have to create a test.
So in the file \`bsdate_test.go\` I create a new function called \`TestCreateFromGregorian()\`.
As I already have a table of test-dates that are used for the conversion from Nepali to Gregorian I will use that data also to test the reverse conversion.

Here is the test data and the test function:

\`\`\`
type TestDateConversionStruc struct {
	bsDate        string
	gregorianDate string
}

var convertedDates = []TestDateConversionStruc{
	{"2068-04-01", "2011-07-17"}, //a random date
	{"2068-01-01", "2011-04-14"}, //1st Baisakh
	{"2037-11-28", "1981-03-11"},
	{"2038-09-17", "1982-01-01"}, //1st Jan
	{"2040-09-17", "1984-01-01"}, //1st Jan in a leap year
...
}

func TestCreateFromGregorian(t *testing.T) {
	for _, testCase := range convertedDates {
		t.Run(testCase.bsDate, func(t *testing.T) {
			var splitedBSDate = strings.Split(testCase.bsDate, "-")
			var expectedBsDay, _ = strconv.Atoi(splitedBSDate[2])
			var expectedBsMonth, _ = strconv.Atoi(splitedBSDate[1])
			var expectedBsYear, _ = strconv.Atoi(splitedBSDate[0])

			var splitedGregorianDate = strings.Split(testCase.gregorianDate, "-")
			var gregorianDay, _ = strconv.Atoi(splitedGregorianDate[2])
			var gregorianMonth, _ = strconv.Atoi(splitedGregorianDate[1])
			var gregorianYear, _ = strconv.Atoi(splitedGregorianDate[0])

			nepaliDate, err := NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear)
			assert.Equal(t, err, nil)
			assert.Equal(t, nepaliDate.GetDay(), expectedBsDay)
			assert.Equal(t, nepaliDate.GetMonth(), expectedBsMonth)
			assert.Equal(t, nepaliDate.GetYear(), expectedBsYear)
		})
	}
}
\`\`\`

The function takes entries from the \`convertedDates\` list, splits them, tries to create a BS date out of the particular gregorian test-case and then asserts that the BS date (day, month, year) is as expected.

### 2. run the tests
The test is done, according to TDD I have to run it.

\`go test -v\`

results in:

\`\`\`console
# NepaliCalendar/bsdate [NepaliCalendar/bsdate.test]
./bsdate_test.go:171:23: undefined: NewFromGregorian
FAIL	NepaliCalendar/bsdate [build failed]
\`\`\`

That was expected, the function does not exist, no wonder my tests fail. What to do next? Guess what: implement the function.
That makes TDD so easy, you just do what the tests tell you to fix.

### 3. fix it
That's easy, add to \`bsdate.go\` a new function:
\`\`\`
func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {

}
\`\`\`

### 4. repeat
running the tests again I get:

\`./bsdate.go:195:1: missing return at end of function\`

That is true, let's return something, but what? Hey let's just create a BS date with the Gregorian numbers
\`\`\`diff
 func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {
-
+       return New(gregorianDay, gregorianMonth, gregorianYear)
 }
\`\`\`

You are saying that will not work? I don't care, I do TDD, the test tells me to return something, and I do return, I even return the correct type of value.

lets run the tests again:
\`\`\`console
=== RUN   TestCreateFromGregorian/2068-04-01
	assert.go:24: got '17' want '1'

	assert.go:24: got '7' want '4'

	assert.go:24: got '2011' want '2068'

=== RUN   TestCreateFromGregorian/2068-01-01
	assert.go:24: got '14' want '1'

	assert.go:24: got '4' want '1'

	assert.go:24: got '2011' want '2068'

....
\`\`\`

a lot of failures, you have guessed it, the conversion does not work. So lets implement some bits.

We know that BS is 56 point something years ahead of Gregorian. So adding 56 to the gregorian year should help:
\`\`\`diff
 func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {
-       return New(gregorianDay, gregorianMonth, gregorianYear)
+       var bsYear = gregorianYear + 56
+       return New(gregorianDay, gregorianMonth, bsYear)
 }
\`\`\`

test results look better, instead of

\`\`\`
....
=== RUN   TestCreateFromGregorian/2037-11-28
	assert.go:24: got '11' want '28'

	assert.go:24: got '3' want '11'

	assert.go:24: got '1981' want '2037'

=== RUN   TestCreateFromGregorian/2038-09-17
	assert.go:24: got '1' want '17'

	assert.go:24: got '1' want '9'

	assert.go:24: got '1982' want '2038'
....
\`\`\`
I get:

\`\`\`
....
=== RUN   TestCreateFromGregorian/2037-11-28
	assert.go:24: got '11' want '28'

	assert.go:24: got '3' want '11'

=== RUN   TestCreateFromGregorian/2038-09-17
	assert.go:24: got '1' want '17'

	assert.go:24: got '1' want '9'
....
\`\`\`

So some years are calculated correctly, at least. Lets fix more tests by calculating the years more accurate and also calculate the BS month.

Because of the way the BS-calendar works, there is no algorithm to convert the date directly from the Gregorian calendar, we need a table. We know that Jan 1st falls always in the 9th BS month (Paush). So we have a table of BS years where the first value is the day in Paush that is the 1st Jan in that year, then a list of days of every BS month.
We can easily get the day-of-year from the gregorian date. Starting from Paush, we count the days of each BS month, whenever we get over the gregorian day-of-year, we found the correct BS month.
\`\`\`
2074: [13]int{17, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30},
2075: [13]int{17, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30},
2076: [13]int{16, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30},
2077: [13]int{17, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31},
2078: [13]int{17, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30},
\`\`\`

These details have nothing to do with TDD, but help you to understand the coming algorithm.

lets put it into code:
\`\`\`diff
 func NewFromGregorian(gregorianDay, gregorianMonth, gregorianYear int) (Date, error) {
        var bsYear = gregorianYear + 56
-       return New(gregorianDay, gregorianMonth, bsYear)
+       var bsMonth = 9                         //Jan 1 always fall in BS month Paush which is the 9th month
+       var daysSinceJanFirstToEndOfBsMonth int //days calculated from 1st Jan till the end of the actual BS month,
+                                               // we use this value to check if the gregorian Date is in the actual BS month
+
+       year := time.Date(gregorianYear, time.Month(gregorianMonth), gregorianDay, 0, 0, 0, 0, time.UTC)
+       var gregorianDayOfYear = year.YearDay()
+
+       //get the BS day in Paush (month 9) of 1st January
+       var dayOfFirstJanInPaush = calendardata[bsYear][0]
+
+       //check how many days are left of Paush
+       daysSinceJanFirstToEndOfBsMonth = calendardata[bsYear][bsMonth] - dayOfFirstJanInPaush + 1
+
+       //If the gregorian day-of-year is smaller or equal to the sum of days between the 1st January and
+       //the end of the actual BS month we found the correct nepali month.
+       //Example:
+       //The 4th February 2011 is the gregorianDayOfYear 35 (31 days of January + 4)
+       //1st January 2011 is in the BS year 2067 and its the 17th day of Paush (9th month)
+       //In 2067 Paush had 30days, This means (30-17+1=14) there are 14days between 1st January and end of Paush
+       //(including 17th January)
+       //The gregorianDayOfYear (35) is bigger than 14, so we check the next month
+       //The next BS month (Mangh) has 29 days
+       //29+14=43, this is bigger than gregorianDayOfYear(35) so, we found the correct nepali month
+       for ; gregorianDayOfYear > daysSinceJanFirstToEndOfBsMonth; {
+               bsMonth++
+               if bsMonth > 12 {
+                       bsMonth = 1
+                       bsYear++
+               }
+               daysSinceJanFirstToEndOfBsMonth += calendardata[bsYear][bsMonth]
+       }
+
+       return New(gregorianDay, bsMonth, bsYear)
 }
\`\`\`

and now? You guessed it! Run the tests:
\`\`\`console
=== RUN   TestCreateFromGregorian
=== RUN   TestCreateFromGregorian/2068-04-01
	assert.go:24: got '17' want '1'

=== RUN   TestCreateFromGregorian/2068-01-01
	assert.go:24: got '14' want '1'

=== RUN   TestCreateFromGregorian/2037-11-28
	assert.go:24: got '11' want '28'

....
\`\`\`

Actually, while implementing the algorithm I've run the tests multiple times and found mistakes in mixed-up variable names and other rubbish. That's cool, the tests helped me to find the issues right away.

But the tests still fail, I better get the day calculation correct.
We know the correct BS month, and we know the days since 1st Jan till the end of this month. Subtracting the day-of-the-year of the gregorian calendar from the days since 1st Jan till the end of the correct BS month will give us the amount of days between the searched day and the end of the BS month. Subtracting that number from the amount of days in the BS month should bring us to the correct date.

So many words to describe it, so little effort to write it in code:
\`\`\`diff
-       return New(gregorianDay, bsMonth, bsYear)
+       var bsDay = calendardata[bsYear][bsMonth] - (daysSinceJanFirstToEndOfBsMonth - gregorianDayOfYear)
+
+       return New(bsDay, bsMonth, bsYear)
\`\`\`

I hear you shouting: "Run the tests, run the tests!" Don't worry, I will:
\`\`\`console
=== RUN   TestCreateFromGregorian
=== RUN   TestCreateFromGregorian/2068-04-01
=== RUN   TestCreateFromGregorian/2068-01-01
=== RUN   TestCreateFromGregorian/2037-11-28
=== RUN   TestCreateFromGregorian/2038-09-17
=== RUN   TestCreateFromGregorian/2040-09-17
=== RUN   TestCreateFromGregorian/2040-09-18
=== RUN   TestCreateFromGregorian/2041-09-17
=== RUN   TestCreateFromGregorian/2041-09-18
=== RUN   TestCreateFromGregorian/2068-09-01
=== RUN   TestCreateFromGregorian/2068-08-29
=== RUN   TestCreateFromGregorian/2068-09-20
=== RUN   TestCreateFromGregorian/2077-08-30
=== RUN   TestCreateFromGregorian/2077-09-16
=== RUN   TestCreateFromGregorian/2074-09-16
=== RUN   TestCreateFromGregorian/2077-09-17
=== RUN   TestCreateFromGregorian/2077-09-01
=== RUN   TestCreateFromGregorian/2076-11-17
=== RUN   TestCreateFromGregorian/2076-11-18
=== RUN   TestCreateFromGregorian/2075-11-16
=== RUN   TestCreateFromGregorian/2076-02-01
=== RUN   TestCreateFromGregorian/2076-02-32
=== RUN   TestCreateFromGregorian/2076-03-01
--- PASS: TestCreateFromGregorian (0.00s)
    --- PASS: TestCreateFromGregorian/2068-04-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-01-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2037-11-28 (0.00s)
    --- PASS: TestCreateFromGregorian/2038-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2040-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2040-09-18 (0.00s)
    --- PASS: TestCreateFromGregorian/2041-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2041-09-18 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-09-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-08-29 (0.00s)
    --- PASS: TestCreateFromGregorian/2068-09-20 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-08-30 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-09-16 (0.00s)
    --- PASS: TestCreateFromGregorian/2074-09-16 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-09-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2077-09-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-11-17 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-11-18 (0.00s)
    --- PASS: TestCreateFromGregorian/2075-11-16 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-02-01 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-02-32 (0.00s)
    --- PASS: TestCreateFromGregorian/2076-03-01 (0.00s)
PASS
ok  	NepaliCalendar/bsdate	0.002s
\`\`\`

The tests pass, job done! Commit it, push it and get yourself some [Chiya](https://www.youtube.com/watch?v=LO0k9rmKneI)!

You can find all the changes of this post here: https://github.com/JankariTech/GoBikramSambat/pull/4/

## conclusion
TDD is easy: think about what you want to achieve, write tests for it and wildly hack code till your tests pass.

An other big advantage is: I can refactor my code all I like and still be confident it works fine. Maybe I want to optimize the speed of the algorithm, maybe I don't like it altogether and come up with a better one, or I simply want to change variable names. I can do that all without fear of messing up the functionality, as long as my tests are passing I'm pretty sure the code reacts the same.
`,"/src/assets/are_you_safe_enough_to_take_risks.md":`---
title: Are you safe enough to take risk?
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Oct 23, 2019
tags: startup, git, documents, organizing
banner:
---

Company values are great, but if they are only saved away in a document they are useless. The values need to be saved in peoples heads and hearts. To achieve that, we discuss them on a regular basis.
Today we had a special guest to lead the discussion: Paurakh Sharma Humagain. He is the first programmer JankariTech ever employed, and even though he left the company a while ago, we stay in a good contact.

For the discussion today he picked the value of \u201CTEAMWORK\u201D and explained how important it is to feel psychologically safe to perform well in a team.

Only a member who feels safe in the team will leave the comfort zone to take on risks. E.g. Tackle a task with the possibility of failure. Taking those risks, helping each other through issues and failures without embarrassing others will take the team to new shores.

A big "THANK YOU" to Paurakh for this new view on teamwork!

## JankariTech Values
### 1. Honesty
To maintain long term relationships and reach our long term goals, we speak the truth while respecting other people's feelings. We act in accordance with our words.
### 2. Trust
Trust is the basis of good relationships, but trust is hard to build and easily destroyed. That\u2019s why we work hard to earn and maintain the trust of our colleagues, customers and suppliers. We trust that every team-member works towards the benefit of the whole team and the company.
### 3. Forgiveness
We recognize that nobody is perfect, we ask for forgiveness for our own mistakes and forgive others their mistakes.
### 4. Equity
All staff are given the opportunity to reach their full potential.
### 5. Teamwork
We need each other to be successful, so we work together using and respecting everybody's uniqueness.
### 6. Quality
We are committed to deliver only high quality work to our customers.
### 7. Transparency
Relevant information is shared between staff and management in a timely manner.
### 8. Joy
We should do what we enjoy and enjoy what we do.
`,"/src/assets/codeceptJs.md":`---
title: CodeceptJs Setup & BDD
authorName: Hari Bhandari
authorAvatar: https://avatars.githubusercontent.com/u/34328907?v=4
authorLink: https://github.com/HariBhandari07
createdAt: June 2, 2020
tags: k6, load, performance, testing
banner:
---

CodeceptJS is a modern end to end testing framework. In this tutorial we will setup BDD end-to-end testing using CodeceptJS along with Puppeteer.

## Requirements:
1. \`npm\`
2. An app to write tests to: If you already have an app you can use that OR
 you can just clone this basic todo app https://github.com/taniarascia/react-hooks and follow along

    If you cloned the above app please browse inside the cloned directory and run the following commands to set it up:

a. \`npm install\`

b. \`npm run start\`

## CodeceptJS Setup
Browse inside your project directory
1. Install CodeceptJS with Puppeteer

    \`npm install codeceptjs puppeteer --save-dev\`

2. Initialize CodeceptJS in the current directory by running:

    \`npx codeceptjs init\`

You will be asked some questions as shown below:
![2](https://user-images.githubusercontent.com/34328907/80667879-04605f00-8ac0-11ea-9c2c-40f5ddf3180c.png)

When asked to select helpers choose \`Puppeteer\` but in other cases take the default (i.e. hit \`Enter\`).
![1](https://user-images.githubusercontent.com/34328907/82856381-8dd34780-9f2d-11ea-9c47-7c9fe7a0fd55.png)

3. The above initialization of codeceptjs will create some files:
- \`codecept.conf.js\` : main configuration file
- \`_test.js\`
- \`jsconfig.json\`
- \`steps.d.ts\`
- \`steps_file.js\`
- \`output\`: a directory that will contain screenshot of failed tests

  We only need \`condecept.conf.js\` as it is the main configuration file. The rest of the files are not needed so you can delete them.

4. We can enable Gherkin for the current project by running:

    \`npx codeceptjs gherkin:init\`

    It will add a gherkin section to the  \`codecept.conf.js\` file and create directories for features and step definitions.

5. Now edit \`codecept.conf.js\` file according to your testing infrastructure so it looks similar to:

    \`\`\`js
    exports.config = {
      output: './output', // screenshot directory and contains screenshot of failed tests
      helpers: {
        Puppeteer: {
          url: 'http://localhost:3000', // host url
          show: true,
          windowSize: '1200x900'
        }
      },
      gherkin: {
        features: './features/*.feature',   // feature files location
        steps: ['./step_definitions/steps.js']  // step definitions location
      },
      plugins: {
        screenshotOnFail: { // if true take screenshot of failed scenarios
          enabled: true
        },
        retryFailedStep: { // if true rerun failed tests
          enabled: true
        }
      },
      name: 'react-hooks' // name of the application folder
    }
    \`\`\`
    <strong>Note</strong>: React applications by default run on port \`3000\`. So, if you cloned the application from \`Requirements\` section don't forget to include the port in \`url\` section of \`Puppeteer\` object.

6. After you create a feature file and write some scenarios, to generate gherkin snippets run:

    \`npx codeceptjs gherkin:snippets\`


## Writing Tests with CodeceptJS
1. Let's create a basic test scenario to add a user

    File: \`features/basic.feature\`

    \`\`\`gherkin
    Feature: add user
      As a user
      I want to be able to create other users
      So that different people can have individual data

      Scenario: signup a user
        Given the user has browsed to the homepage
        When the user adds user with name "Hari Bhandari" and username "hari" using the webUI
        Then user with name "Hari Bhandari" and username "hari" should be listed on users table
    \`\`\`

2. After you wrote some scenarios, to generate gherkin snippets run:

    \`npx codeceptjs gherkin:snippets\`

    Now edit the generated step definitions so that it looks like:

    File: \`step_definitions/steps.js\`

    \`\`\`js
    const { I } = inject();

    Given('the user has browsed to the homepage', () => I.amOnPage('/'));

    When('the user adds user with name {string} and username {string} using the webUI', (name, username) => {
        I.waitForVisible("//input[@name='name']");
        I.fillField("name", name)
        I.fillField("username", username)
        I.click("//button[contains(text(),'Add new user')]")
    });

    Then('user with name {string} and username {string} should be listed on users table', (name, username) => {
        I.see(name);
        I.see(username);
    });
    \`\`\`
    In CodeceptJS tests are written as a sequence of actions performed by an actor. So, the \`I\` object is an actor, an abstraction for a testing user. The \`I\` is also a proxy object for the currently enabled Helper(Puppeteer).

    So basically in the above step definitions, \`I\` browse to the homepage(http://localhost:3000), wait until the \`name\` input field is visible, fill the fields, click on the \`Add new user\` button and check if the user I added is listed on the \`View users\` table.

3. To run the test and see step-by step output use --steps option:

    \`npx codeceptjs run --steps\`

    To see not only the business steps but the actual performed steps use the --debug flag:

    \`npx codeceptjs run --debug\`

    By using the \`debug\` flag you can see the execution of step definitions and it is very useful for debugging purposes.

## Page object
A page object is basically a wrapper around an HTML page, or a fragment of the page that provides an access to the state of the underlying page/fragment. A page object provides a separation between the test code and the locators and makes our code more DRY.

If an application has different pages (login, admin, etc.) you should use a page object. Even though our example app doesn't have different pages we are going to create a page object.

To get more ideas about page objects and page objects in CodeceptJS check the following links:

- https://github.com/SeleniumHQ/selenium/wiki/PageObjects
- https://codecept.io/pageobjects/


CodeceptJS can generate a sample template for a page object with the command:

\`npx codeceptjs gpo\`

![3](https://user-images.githubusercontent.com/34328907/82879880-511f4480-9f5d-11ea-9ddf-0b29067d7b3e.png)

In the above screenshot, I am creating a page object with the name \`dashboardPage.js\`

Now, include the page object section in your config file. \`codecept.conf.js\` should now look similar to:
\`\`\`
exports.config = {
  .....
  include: {
    Page: './pages/dashboardPage.js'  // page object location
  },
  .....
}
\`\`\`

Edit \`pages/dashboardPage.js\` so that it looks like:

\`\`\`js
const { I } = inject();

module.exports = {
  elements: {
    addNewUserButton: '//button[contains(text(),"Add new user")]',
    name: String('name'),
    username: String('username')
  },
  addUser(name, username) {
    I.waitForVisible(this.elements.addNewUserButton);
    I.fillField(this.elements.name, name)
    I.fillField(this.elements.username, username)
    I.click(this.elements.addNewUserButton)
  }
}
\`\`\`

CodeceptJS provides flexible strategies for locating elements. Here, I have used \`xpath\` for \`Add new user\` button and semantic locator(name) for \`name\` and \`username\`.

Edit the \`When\` step in \`step_definitions/steps.js\` to include the pageObject's function

File:  \`step_definitions/steps.js\`

\`\`\`js
....
const dashboard = require('../pages/dashboardPage');
....

When('the user adds user with name {string} and username {string} using the webUI', (name, username) => {
    dashboard.addUser(name, username)
});
...
\`\`\`

Now, run your test again with \`npx codeceptjs run --steps\`

In this way we have set up BDD end-to-end testing using CodeceptJS. Happy Testing.
`,"/src/assets/dockerSelenium.md":`---
title: How to use selenium in docker?
authorName: Hari Bhandari
authorAvatar: https://avatars.githubusercontent.com/u/34328907?v=4
authorLink: https://github.com/HariBhandari07
createdAt: April 23, 2020
tags: docker, selenium, automation
banner:
---

## What is docker?
![not_working](https://user-images.githubusercontent.com/34328907/78120341-7b56f900-7429-11ea-9b3f-1a5e17b813da.png)

Can you recall how many times you face an issue where code runs in another developer's machine but doesn't work on yours? Docker
at a very basic level resolves this issue of an application working on one platform and not working on some other platform.

Docker is a tool which is used to automate the deployment of applications in lightweight containers so that applications can
work efficiently in different environments. It does this by virtualizing the operating system of the computer on which it is
installed and running. A docker container is basically a software package that consists of all the dependencies required to run an
application.


## Why docker?
Let\u2019s say you have three different nodejs applications that you plan to host on a single server.

Each of these applications makes use of a different version of nodejs and mongodb, as well as the associated libraries and dependencies, which differ from one application to another.

Now, we cannot host all three applications on the same machine as different versions of nodejs and other dependencies are required.

We can solve this problem either by having three different machines, or a single machine, which is powerful enough to host and run three virtual machines on it.

But both solutions are quite cumbersome. In this case, docker is an efficient and cost-effective solution to this problem. With docker, we are able to run all the three apps in a separate container with its own dependencies and libraries, all within a single machine. Containers are completely isolated environments that can have their own processes, services, and network interfaces just like virtual machines except they all share the same OS kernel.

![Screenshot from 2020-04-01 15-48-54](https://user-images.githubusercontent.com/34328907/78125190-6336a800-7430-11ea-91f6-644ca63d9e54.png)

## Docker Installation
Follow the installation instructions given in https://docs.docker.com/install/ to install docker according to your operating system. But, I suggest you use Linux, preferably Ubuntu for this blog/tutorial as later we will use a docker network command that works only on Linux.

And follow docker post-install instructions given usually at the end of the "installation instructions" page to create a docker group.

## Selenium

Usually, for running tests using selenium we download \`selenium standalone server JAR\` file and \`chrome driver\` and start selenium server with a command which usually looks like:

\`java -jar selenium-server-standalone-<selenium version>.jar -port <port-no>\`

Now, let's suppose we want to run tests with different browsers or various browser versions. Here, we have to install all the browsers and the versions we want to test on our development environment. We also need to find the corresponding selenium and the webdriver version for it. Ever tried to install multiple versions of the same browser on your machine?

In this case too, docker comes to the rescue.

Selenium provides Docker images out of the box to test with one or several browsers. The images spawn a Selenium server and a browser underneath. It can work with different browsers.

Now to run selenium using docker we just need to run [selenium/standalone-chrome](https://hub.docker.com/r/selenium/standalone-chrome) or [selenium/standalone-firefox](https://hub.docker.com/r/selenium/standalone-firefox) as:

\`docker run -d -v /dev/shm:/dev/shm selenium/standalone-chrome-debug\`

Here
- \`-d\` runs the container in the background (detached)
- \`-v /dev/shm:/dev/shm\` adds a volume mount to use the host\u2019s shared memory. There is no requirement for a volume mount but it is recommended.

Once you run the command, Docker will download the selenium image and run the container straight away (port: \`4444\`).

## Networking using the host network
When the docker container is running it has its own \`localhost\` which is relative to its container and it has no awareness of \`localhost\` running on the host OS. Because of this, we cannot access the selenium container at \`localhost:4444\`. Also, the selenium container won't be able to access the apps running on \`localhost\` of the host OS.

How do we solve this problem?

The answer is simple - we use docker option \`--network="host"\` in \`docker run\` command. If we use the \`host\` network mode for a container, that container\u2019s network stack is not isolated from the docker host, and the container does not get its own IP-address allocated. Now, the selenium container will be available on port 4444 on the \`localhost\`.

Now, the \`docker run\` command should basically look like:

\`docker run -d --network="host" -v /dev/shm:/dev/shm selenium/standalone-chrome-debug\`

                        OR

\`docker run -d --network host -v /dev/shm:/dev/shm selenium/standalone-chrome-debug\`

The host networking driver only works on Linux hosts, and is not supported on Docker Desktop for Mac, Docker Desktop for Windows, or Docker EE for Windows Server.

## Run test from the docker host, using selenium within a docker container
Requirements:
1. chrome
2. nodejs and yarn
3. linux (to use \`--network="host"\` in \`docker run\` command)

Clone this basic todo app: https://github.com/HariBhandari07/todo-with-tests
This is a single page todo app with basic acceptance tests

1. Install the necessary dependencies using the following command inside the project directory:

\`yarn install\`

2. Start the development server at \`localhost:3000\` using command:

\`yarn start\`

3. Run selenium in docker with

\`docker run -d --network="host" --name selenium -v /dev/shm:/dev/shm selenium/standalone-chrome-debug\`

4. Run the acceptance tests using command:

\`yarn acceptance-tests tests/acceptance/features/login.feature\`

The full script to run the acceptance tests is specified in \`scripts\` object of \`package.json\` file inside the project's root directory.

The above commands run our test at \`localhost:3000\`.

After you run the above command, you can see the tests running on the selenium docker container by using VNC.

If you are on Ubuntu:

- open \`Remmina\` (Remmina is a Remote Desktop Client and comes installed with Ubuntu)

- choose \`VNC\` and enter \`localhost\` on the address bar

- enter \`secret\` as the password

![reminna](https://user-images.githubusercontent.com/34328907/79425650-ba687b00-7fe1-11ea-8b76-9d1100cc05c7.png)

Now, you should see the test running on VNC

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/34328907/79431517-47afcd80-7fea-11ea-8b83-0b7d729eb1e6.gif)
`,"/src/assets/jest-puppeteer.md":`---
title: Testing with Jest and Puppeteer
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Jul 22, 2020
tags: testing, javascript, jest, puppeteer
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--sXh42dKN--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/raxyo382jgx8tvfpnxc4.png
---

"In Jest, there is truth" -William Shakespeare.

By using Jest, you will know the truth about your application. The \`Jest\` is a javascript testing tool that is installed via NPM or Yarn and run via the command line. It is a great testing library and many react team members are involved building it, so it happens to work very well for testing react applications. Jest is built on top of Jasmine and Mocha but some additional features like snapshot testing and parallel test execution are provided by Jest. It also comes with built-in mocking and assertion abilities.

Puppeteer is a Node library that is used for browser automation. Puppeteer provides a high-level API to control the browser. It can work with Chrome, Chromium or Firefox. By default this library runs the browser in headless mode, but it can be also configured to run Chrome or Chromium fully (non-headless).

## Installation And Requirements
This guide is based on Ubuntu 18.04. Some commands will be different if you have another OS installed on your computer. Before getting started with Jest, You need to have \`npm\` and an app for which you will be writing tests.

If your app is not yet ready for testing then you can just clone this basic [todo app](https://github.com/Talank/todo-react) and follow along.

### Jest Versions
Jest is the test runner library for creating, executing, and structuring tests. Jest CLI is a tool that you use from the command line to run and provide configuration options to jest. It configures jest based on whatever argument you give while running jest. The version is important because jest is a dynamic library and different versions of jest might work differently. While writing this blog, I am using jest version \`24.9.0\`. So, some features might be different if you are using some other version.

### Jest installation and Running Tests
You can install the latest version of jest from NPM using
\`\`\`
npm i jest --save-dev
\`\`\`

Now, its time to configure the NPM script for running a test from the command line. For this, open your \`package.json\` and add the \`test\` script as follows:
\`\`\`
"scripts": {
    "test": "jest"
  },
\`\`\`

Tests are run by using the Jest CLI (typing \`jest\` followed by arguments in the command line).

For example, in the [todo app](https://github.com/Talank/todo-react) in my github, you can run the test with the command \`npm run test\` since I have added \`"test": "jest"\` in the script of my \`package.json\`

With the above-mentioned way, jest can be configured within your \`package.json\`. That is the easy way for jest configuration. Alternatively, you can also use the jest configuration file for which you should create a \`jest.config.js\` file and include that file in the command to run the test. For example, your package.json scripts section should include
\`\`\`
"scripts": {
    "test": "jest --config ./jest.config.js"
  },
\`\`\`
And, in the root path alongside the package.json, your \`jest.config.js\` should contain following configurations
\`\`\`
module.exports = {
  verbose: true,
  roots: [
    "./__tests__"
  ]
}
\`\`\`
By using the jest configuration file, you have many other options as well. You can find the details about that in the [jest documentation](https://jestjs.io/docs/en/configuration). However, in this blog, I will focus on configuring jest using the \`package.json\`

### Install Puppeteer
Use the following command to install puppeteer in your project.
\`\`\`
npm i puppeteer --save-dev
\`\`\`
Puppeteer will download the latest version of chrome. If you need to work with firefox then you need to install the \`puppeteer-firefox\` library. Refer to [Puppeteer for Firefox](https://www.npmjs.com/package/puppeteer-firefox) in the npmjs website for further details.

By the end of the installation of jest and puppeteer, you should have the following dependencies in the \`devDependencies\` section of your \`package.json\`.
\`\`\`
"devDependencies": {
  "jest": "^24.9.0",
  "puppeteer": "^4.0.1"
}
\`\`\`

### Creating Test Files
The jest command runs the test files inside \`__tests__\` folder or it will runs any files with \`.spec.js\` or \`.test.js\` in their filename. So, you have to write your test in a file that ends with \`.spec.js\` or \`test.js\`. Or you can simply put all your tests inside the \`__tests__\` folder.

### Jest Globals
There are a variety of jest Globals but we will mainly need 2 important globals called \`describe\` and \`it\`. The table below tells about these two globals in more detail.

| | it | describe |
|---|---|---|
| AKA | Tests | Test Suite |
| Syntax | it(name, fn) | describe(name, fn) |
| Description | \`it()\` global is a method in which you pass a function as an argument, that function is executed as a block of tests by the test runner. You describe your test logic inside \`it()\` block. | \`describe\` is an optional method for grouping any number of \`it()\` or test statements. \`describe()\` block contains related it blocks. |

In addition to \`it()\` and \`describe()\` methods, you might need the following methods to start testing with jest.
- afterAll(fn, timeout)
- afterEach(fn, timeout)
- beforeAll(fn, timeout)
- beforeEach(fn, timeout)

These functions are executed before and after the test scenarios. You can define these functions inside the \`describe()\` method to make it applicable for all tests in the scope of that particular \`describe()\` method.

## Demo:
Here I have added a test for adding a task in my react ToDo app.
\`\`\`
const puppeteer = require('puppeteer');

describe('Todo React', () => {
  let browser
  let page

  beforeAll(async () => {
      browser = await puppeteer.launch()
  })

  afterEach(async () => {
      await page.close()
    })

  afterAll(async () => {
    await browser.close()
  })

  describe('add task to the list', () => {
    beforeEach(async () => {
      page = await browser.newPage()
      await page.goto('http://localhost:3000')
    })

    it('should be possible to add task to the list', async () => {
      const taskInputField = await page.$x('//input[@placeholder="Enter task"]')
      const taskToAdd = "New Task"
      await taskInputField[0].click()
      await taskInputField[0].type(taskToAdd)

      await page.keyboard.press('Enter')

      const lists = await page.$x("//div[@class='list']/p/input");

      let toDo;

      for( let list of lists ) {
        toDo = await page.evaluate(el => el.getAttribute("value"), list);
      }

      expect(toDo).toBe(taskToAdd)
    })
  })
})
\`\`\`

### Explanation of Demo
In the above demo, I first imported the puppeteer library. And in before scenario, I launched the browser in headless mode. Before all the scenarios inside the first describe block, the browser is launched only once. And before each scenario, a new tab is opened in incognito mode. Similarly, after each scenario, the tab is closed and when all the scenarios are executed, the browser is closed.

The browser is launched in headless mode by default. However, if you want to launch the browser in non-headless mode then you can provide the browser launch option in \`puppeteer.launch()\`. For example:
\`\`\`
browser = await puppeteer.launch({headless:false})
\`\`\`

In Jest, there are plenty of functions to simulate UI activities. For example, in the above demo, you can see \`click()\` for clicking in an element, \`type()\` for typing, etc.

Similarly, for assert operation, you can use \`expect()\`. Many other matcher functions can be used with expect() such as \`.toContain(item)\` , \`toBeTruthy()\` etc. You can find more of these \`jest matchers\` in the [jest documentation](https://jestjs.io/docs/en/expect).

### Gherkin with Jest
In Jest, you do not have to write a feature file for your test cases. If you need to write features in a separate file then you can use [jest-cucumber](https://github.com/bencompton/jest-cucumber) library. By using this library, you can replace \`describe\` and \`it\` blocks by \`Given\`, \`When\`, and \`Then\` step definitions. The step definitions are linked with the respective steps in the feature files.

However, I would prefer \`Codecept.js\` or \`nightwatch.js\` instead of \`jest\` if I need to use features of \`Cucumber.js\` while testing my application. Because, with jest-cucumber, you need to specify which feature file is linked with a particular step definition file. While Codecept.js or nightwatch.js, you can write the step definition of a \`given\` step in one file and the \`when\` step of the same scenario in some other file. You might lose this kind of freedom if you are using jest-cucumber.

That's it for now. If you want to learn more about jest and it's commands, you can refer to [jestjs.io](https://jestjs.io/docs/en/api)

Hope you enjoy jesting.
ThankYou!
`,"/src/assets/nightwatchSetup.md":`---
title: Setup Nightwatch and run your first test
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Feb 18, 2020
tags: testing, javascript, nihtwatch, selenium
banner:
---

\`Nightwatch.js\` is an open-source automated testing framework that aims at providing complete E2E (end to end) solutions to automate testing with \`Selenium Javascript\` for web-based applications, browser applications, and websites. It is written in \`Node.js\` and uses the \`W3C WebDriver API\` (formerly Selenium WebDriver) for interacting with various browsers.

## Installation And Requirements
This guide is based on Ubuntu 18.04. Some commands will be different if you have another OS installed on your computer. Also, we will be following the BDD approach in this blog. So, if you want to learn more about BDD first then please read our blog on [Demonstrating BDD (Behavior-driven development) in Go](https://dev.to/jankaritech/demonstrating-bdd-behavior-driven-development-in-go-1eci). Before getting started with Nightwatch we need to have the following installed on our computer.

### 1. Node.js:
- To install Node.js:
\`\`\`
sudo apt install nodejs
\`\`\`
- To verify the successful installation of nodejs and to check its version use the following command
\`\`\`
nodejs -v
\`\`\`

### 2. Node Package Manager(npm):
The nodejs package contains both the node and npm binaries. So, npm is also installed when you run the command to install nodejs. However, to verify that npm was also successfully installed, you can check the version of npm by running the command
\`\`\`
npm -v
\`\`\`

### 3. Java:
We need java to run the Selenium server which automates our browser. If your machine does not have java installed then install it using the following command
\`\`\`
sudo apt install default-jdk
\`\`\`
If you want to learn more about how to install Java, then you can follow this [link](https://linuxize.com/post/install-java-on-ubuntu-18-04/).

### 4.Selenium Server:
[Download](https://selenium.dev/downloads/) the latest stable version of the Selenium standalone server JAR file.

### 5.Chrome Driver:
Lastly, [download](https://chromedriver.chromium.org/) the \`latest stable version\` of \`Chrome Driver\`.

Once you have downloaded \`Chrome Driver\`, you need to unzip it by running the following command:
\`\`\`
unzip chromedriver_linux64.zip
\`\`\`
Once you have unzipped it, you need to move the chromedriver(shared library) and place it inside the <u>same folder</u> where you have placed the Selenium standalone server file.

## Setting up Nightwatch.js
Make a configuration file and name it \`nightwatch.conf.js\` inside the root directory of your project and inside the configuration file add the following content.
\`\`\`js
module.exports = {
    src_folders: ['test'],
    test_settings: {
        default: {
            selenium_host: '127.0.0.1',
            launch_url: 'http://localhost:3000',
            globals: {},
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                chromeOptions: {
                    args: ['disable-gpu'],
                    w3c: false
                }
            }
        }
    }
}
\`\`\`
You can also make a \`nightwatch.json\` configuration file as an alternative to the nightwatch.conf.js file. Please refer to the [nightwatch website](https://nightwatchjs.org/gettingstarted/configuration/#nightwatch-json) to learn how to write the nightwatch.json configuration file.

You need to define \`src_folders\` and \`launch_url\` inside the nightwatch.conf.js where \`src_folders\` is used to define the folder in which you have written your tests and \`launch_url\` is used to define the index URL of your project which is used as the main URL to load and run your tests.

\`src_folders\` and \`launch_url\` will be different for different projects.
\`\`\`
src_folders: YOUR_SOURCE_FOLDER_FOR_TEST_FILES
launch_url: URL_OF_YOUR_WEBSITE
\`\`\`
Run this command to install nightwatch and cucumber into your project dependencies which allow us to run automated tests using the gherkin language.
\`\`\`
yarn add --dev nightwatch-api nightwatch cucumber
\`\`\`
Or,
\`\`\`
npm add --dev nightwatch-api nightwatch cucumber
\`\`\`
Now the following information should be added inside package.json in devDependencies. But do remember that these versions may also vary depending upon the releases of these dependencies.
\`\`\`
 "devDependencies": {
    "cucumber": "^6.0.5",
    "nightwatch": "^1.3.3",
    "nightwatch-api": "^3.0.1"
 }
 \`\`\`
You can use npm or yarn, whichever you prefer. However, if you want to use yarn but do not have it already installed then, you can install it by downloading the \`.deb\` file from the [yarn releases](https://github.com/yarnpkg/yarn/releases) and run the following command:
 \`\`\`
 sudo dpkg -i yarn[VERSION].deb
 \`\`\`
The .deb file might not be compatible with your machine. It only works for debian based linux distros.

For the rest of the setup process, I am using \`npm\`.

Now, create \`index.js\` inside \`[root_dir]/test/acceptance\` and add
\`\`\`
const { setDefaultTimeout, After, Before } = require('cucumber')
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api')

setDefaultTimeout(60000)

Before(async () => {
    await startWebDriver();
    await createSession();
})

After(async () => {
    await closeSession();
    await stopWebDriver();
})
\`\`\`
Here, we are using before() and after() hooks which will allow us to execute the code inside them before and after each test scenario.

Before starting the Selenium server you need to change your directory to where the selenium and chromedriver files are. After doing that you can now start the Selenium server with the command:
\`\`\`
java -jar selenium-server-standalone-3.141.59.jar -port 4444
\`\`\`

## Testing your Project
Create feature files inside \`[root_dir]/test/acceptance/features\` with an extension \`.feature\` for each feature of your project. Follow the [Gherkin reference](https://cucumber.io/docs/gherkin/reference/) to write your feature file.

We do not need to use gherkin language but I am using it because this is the same language that user and domain experts use while they talk about the domain. Also, it is easy to understand for both technical and non-technical personnel involved in the project.

A feature file written using gherkin language looks like this.

\`\`\`
Feature: search using transliterated Latin characters
  As a user
  I want to find the literature by specifying Latin (English-style) script equivalent to the Nepali
  So I can find the literature without needing to use a Nepali keyboard

  Background:
    Given the user has browsed to the homepage

  Scenario: user should be able to search in English characters using transliterated text
    When the user enters the English characters "munaa madan"
    And the user selects the transliterated text
    And the user searches for the literature
    Then the search result should be displayed
\`\`\`

Next, create a javascript file for the step-definitions inside \`[root_dir]/test/acceptance/stepDefinitions\` for each feature. For each step in the scenario of your feature file, a matching step definition is executed while running the test. Step definitions for the above search feature will look something like this.

\`\`\`
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');
const searchField = "//input[contains(@class, 'SearchBox')]";
const searchButton = "//button[contains(@class,'SearchBox__Button')]";
const searchResultFoundContainer = '.sk-hits';
const searchResultNotFoundContainer = '.sk-no-hits';

const userEntersTheEnglishOrNepaliCharacters = (searchTerm) => client.useXpath()
	.waitForElementVisible(searchField)
	.setValue(searchField, searchTerm)
	.useCss();

const userSearchesForTheLiterature = () => client.useXpath()
	.click(searchButton)
	.useCss();

Given('the user has entered the English/Nepali characters {string}', userEntersTheEnglishOrNepaliCharacters);
When('the user enters the English/Nepali characters {string}', userEntersTheEnglishOrNepaliCharacters);

Given('the user has searched for the literature', userSearchesForTheLiterature);
When('the user searches for the literature', userSearchesForTheLiterature);

Then('the search result should be displayed', () => client.waitForElementVisible(searchResultFoundContainer)
	.waitForElementNotPresent(searchResultNotFoundContainer));

Then('the search result should not be displayed', () => client.waitForElementVisible(searchResultNotFoundContainer)
	.waitForElementNotPresent(searchResultFoundContainer));
\`\`\`

Finally, run the test from the root directory using the command:
\`\`\`
cucumber-js --require test/acceptance/index.js --require test/acceptance/stepDefinitions test/acceptance/features/[YOUR_FEATURE_FILE].feature
\`\`\`

Does the above command look long? I am sorry, but you have to use that command every time you run the test. But only the name of \`your feature file\` is different, while running different tests, the rest is all the same. So, let's assign an easy short name for the rest and put it inside the scripts section of \`package.json\`. I called it \`test-e2e\` and inside the scripts of \`package.json\`, I added
\`\`\`
"test-e2e" : "cucumber-js --require test/acceptance/index.js --require test/acceptance/stepDefinitions"
\`\`\`
Now, the above long command is shortened to
\`\`\`
npm run test-e2e test/acceptance/features/[YOUR_FEATURE_FILE].feature
\`\`\`
That's it. Now, you are ready to run test suites for your project. You can refer to [Nightwatch](https://nightwatchjs.org/) to read more about Nightwatch and its commands.

Hope you enjoy testing.
Thank You!
`,"/src/assets/organizeYourCompanyTheGeekWay.md":`---
title: Organize your company the geek-way
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Oct 23, 2019
tags: startup, git, documents, organizing
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--Kf8L6kUm--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/l8hil2nyr3jz5ujpljyp.jpg
---

## Organize your company the geek-way

How do you organize your documents in your department / company / startup ? Your policies, your minutes of meetings, your contracts, etc.?

Do you have a trillion Word documents that you share with your colleagues using your /.\\*[cloud|share|box|sync|].\\*/ tool? That is good, but how do you know what is the latest version of a document? What is the version you are currently working with a colleague on? How do you track changes? You send a document to a group to review, several people edit some lines, others just type comments into the document, some send it back to you by email, others put it in a file share. And how do you know who agreed on the changes? Pure chaos!

In our company we are using GIT as the solution for all that!

Advantages:
- easy to track every change of a document
- discussions are archived and can be retraced at any time
- no accidental changes can be made because the master branch is protected
- changes need to be approved before they become "official"
- the approvals can be traced back

OK, OK, there are also disadvantages:
- more difficult workflow, specially for non-techies => get them a GIT UI
- binary files (.odt, .docx, etc.) are hard to diff => use Markdown wherever possible
- limited formatting, no easy spreadsheet calculations

But overall it works pretty good for us. And here are the rules we are working with:

### Commandments

#### 1. use GIT
For official work (proposals, policy, procedures, etc.) use GIT  where-ever possible.
We like to use git as it makes it easy to know where the latest documents are and to track all changes.

#### 2. use text only
Where-ever possible use "text only" formats.
So use [Markup](https://guides.github.com/features/mastering-markdown/)
instead of DOC.

This makes it easier to compare files and track changes.

#### 3. master is law
  - Documents in the "master" branch are considered "official"
  - All changes to master need to be reviewed. The master branch is
  protected against direct edits, a change can only be merged after a review.
  Ask for reviews if you want to get changes into master.
  **An approved review is considered the same as a signature**
  - Do not have "Work in Process" in master

#### 4. use branches, create Pull Requests
Work in branches and make Pull Requests to the master branch. **You can work together with others in a branch if you need.**

#### 5. write good commit messages
The commit message has to explain what you have changed, in just a few words

#### 6. discuss Pull Requests
If you are asked for your opinion on a change or a review is requested use the GitHub comment function to express yourself.

#### 7. use GitHub Issues function for ToDos
The Issue function is great to write ToDos, assign work and discuss & track
progress.

#### 8. use Labels
The labels in GitHub should be used to tag different work staged.

**For Pull Requests**
- *Work in Process*
- *Help Needed*
- *To Review*

**For Issues**
- *priority:critical*
- *priority:high*
- *priority:normal*
- *priority:low*

#### 9. review and approve
If asked for a review, check the changes carefully and if you are happy
with them approve the Pull Request, other-wise request a change and/or
write a comment.

**An approved review is considered the same as a signature.**

As collaborators cannot review their own work, making a commit, starting a new Pull Request and asking for a review is considered as their own signature for that particular document.

This does not matter a great deal for a lot of work but occasionally might be very important. E.g. If you review&approve the Minutes of a meeting on GitHub it is the same as if you would approve and sign them during the next meeting.

#### 10. use squash & rebase
When merging a branch into master choose between "Squash & merge" and "Rebase & merge"
- If there are a lot of small changes choose "Squash" to put all changes into one big commit
- If there are changes where you care about the author use "Rebase"
- do not use "Merge & commit" as this creates unnecessary commit messages

### Workflow

#### If you want to make a change
1. pull the current master branch
2. create a new branch
3. work in your branch
4. when finished or when you need input/help from someone else
  - create a Pull Request
  - tag your Pull Request
  - ask for comments
5. when your work is ready to be reviewed ask for reviews and mark the
Pull Request as "To Review"
6. after everybody who needs to give their approval has done so, merge your work into the master branch
7. delete your work-branch

#### If you are asked for a review
1. check the changes carefully
2. comment, ask for changes and/or approve
`,"/src/assets/robotBdd.md":`---
title: Setup and run tests with robot framework
authorName: Jasmine Baral
authorAvatar: https://avatars.githubusercontent.com/u/40829116?v=4
authorLink: https://github.com/jasson99/
createdAt: April 6, 2020
tags: testing, bdd, robotframework, python
banner:
---
## Robot Framework

Robot framework is a generic open source test automation framework for acceptance testing. It is a keyword-driven testing framework that uses tabular test data syntax. It has easy syntax, using human-readable keywords. This framework is independent of operating system and application. The core framework is implemented using Python and also runs on Jython(JVM) and IronPython(.NET). This framework provides support for external libraries, tools which are open source and can be used for test automation.

The test data is in simple tabular format. When started, the robot framework processes the data, executes the test cases, and generates logs and reports.

 ### Installation and setup of robot framework
1. Preconditions:
   * Python installation
   * Pip
   * make virtual environment

2. Installing robot framework with pip
    * \`python -m pip install robotframework\`
    * \`python3 -m pip install  robotframework\`

   After the successful installation, you should be able to execute the created runner scripts (robot and rebot) with --version option and get both Robot Framework and interpreter versions as a result:

        $ robot --version
        Robot Framework 3.0 (Python 2.7.10 on linux2)

        $ rebot --version
        Rebot 3.0 (Python 2.7.10 on linux2)

3. Upgrade[optional]
   * \`pip install --upgrade robotframework\`

4. Using robot and rebot scripts

   Starting from Robot Framework 3.0, tests are executed using the robot script and results post-processed with the rebot script:

        robot tests.robot
        rebot output.xml
5. Installing required libraries
    * \`pip install requests robotframework-selenium2library robotframework-pageobjectlibrary\`

6. Installation of IDE
    * Install pycharm or any preferred IDE

7. Import required libraries in the IDE. In pycharm,
    * To add the project interpreter, Go to \`Files\` => \`Settings\` => \`Project: <your_Project>\` => \`Project Interpreter\` and then add the python version available through your virtual environment.
    * Also add the required libraries such as : \`Selenium\`, \`robotframework-seleniumLibrary\`, \`robotframework-pageObjectLibrary\`.

8. Make a robot file inside a test folder eg: \`robotBDDExample/test/login.robot\`

### Test Data Sections
The data used is defined in different sections in robot framework. These sections are often called tables.

 1. Settings: This section is used for importing test libraries, resource files and variable files.
 2. Variables: The variables that can be used in other parts of the test data are defined in this section.
 3. Test Cases: In this section, test cases are created from available keywords.
 4. Tasks: In this section, tasks are created using available keywords.
 5. Keywords: User keywords are created using existing lower-level keywords.
 6. Comments: This section contains additional comments or data which are ignored by robot framework.

 These sections are recognized by their header row. The recommended header format is \`*** Settings ***\`. However, the header is case-insensitive, the surrounding spaces are optional, and the number of asterisk characters can vary as long as there is one asterisk at the beginning.

Robot framework test cases can be written in space separated plain text format. In a space separated format, two or more spaces are used as a separator between different data items.

\`\`\`
*** Settings ***
Documentation    Example using the space separated plain text format.
Library          OperatingSystem

*** Variables ***
\${MESSAGE}       Hello, i am robo!

*** Test Cases ***
My Test
    [Documentation]    Example robot test
    Log    \${MESSAGE}
    My keyword    /lorem.txt

Another Test
    Should Be Equal    \${MESSAGE}    Hello, i am robo!

*** Keywords ***
My Keyword
    [Arguments]    \${path}
    File Should Exist    \${path}
\`\`\`

In order to make the separations more clear, pipe separated format can be used.

\`\`\`
| *** Settings ***   |
| Documentation      | Example using the pipe separated plain text format.
| Library            | OperatingSystem

| *** Variables ***  |
| \${MESSAGE}         | Hello, i am robo!

| *** Test Cases *** |                 |                   |
| My Test            | [Documentation] | Example robo test |
|                    | Log             | \${MESSAGE}        |
|                    | My Keyword      | /lorem.txt        |
| Another Test       | Should Be Equal | \${MESSAGE}        | Hello, i am robo!

| *** Keywords ***   |                    |         |
| My Keyword         | [Arguments]        | \${path} |
|                    | File Should Exist  | \${path} |
\`\`\`

From the above examples, it is clear that the test cases are created in the test case tables from the available keywords. Keywords can be imported from the test libraries or resource files, or created in the keyword table of the test case itself.

Let us now see a practical example where a user logs in.

\`\`\`
*** Settings ***
Documentation       Test for user login
Library             SeleniumLibrary
Library             PageObjectLibrary


Test Setup           Open test browser
Test Teardown        Close all test browsers

*** Variables ***
\${SERVER}           localhost:8080
\${ROOT}             http://\${SERVER}/myApp
\${BROWSER}          chrome
\${SELENIUM_URL}     http://localhost:4444
\${PLATFORM}         linux
\${VERSION}          latest
\${USERNAME}         admin
\${PASSWORD}         password
\${username_field}   id=usernametext
\${password_field}   id=passwordtext
\${signIn_Button}    id=submit
\${LOGIN_URL}        http://\${SERVER}/myApp/login
\${WELCOME_URL}      http://\${SERVER}/myApp/welcome.html

*** Test Cases ***
Valid Login
  [Documentation]       Test valid login
  Open Login Page
  Input Username        \${USERNAME}
  Input Password        \${PASSWORD}
  Submit Credentials
  Welcome page is open

*** Keywords ***
Open test browser
   Open browser  \${ROOT}  \${BROWSER}
    ...  remote_url=\${SELENIUM_URL}/wd/hub
    ...  desired_capabilities=browserName:\${BROWSER},version:\${VERSION},platform:\${PLATFORM}

Open Login Page
   Go To        \${LOGIN_URL}
   Login Page Should Be Open

Login Page Should Be Open
   Title Should Be    Login Page

Input Username
   [Arguments]    \${USERNAME}
   Input Text    \${username_field}    \${USERNAME}

Input Password
   [Arguments]    \${PASSWORD}
   Input Text    \${password_field}    \${PASSWORD}

Submit Credentials
   Click Button    \${signIn_Button}

Welcome Page Is Open
   Location Should Be    \${WELCOME_URL}
   Title Should Be    Welcome Page

Close all test browsers
    Close all browsers
\`\`\`
Now, let us understand the above example. The test case has a scenario for valid user login. This test case uses a number of keywords, which can be either the predefined keywords imported from the libraries, or can be self created using available low-level keywords. In the keyword section, all the self created keywords are defined using available keywords. For example: 'Input Username' is a user created keyword which uses an existing keyword 'Input Text'. Similarly, 'Welcome Page Is Open' is a user created keyword which is created using pre-existing keywords 'Location Should Be' and 'Title Should Be'.

The keyword 'Title Should Be' uses the page title such as 'Welcome Page' and 'Login Page' as in example above. These page titles are defined in the page object classes, which will be discussed below.

### Using page objects in robot framework
Page objects provide an additional layer of abstraction for test case creation. Using page objects results in easier maintenance of the tests.

PageObjectLibrary is a Robot Framework keyword library that makes it possible to use the Page Object pattern when testing web pages with the keyword based approach of robot framework. Page Object classes are implemented as standard robot keyword libraries. When you use PageObjectLibrary keywords to go to a page or assert you are on a specific page, the keyword will automatically load the library for that page and put it at the front of the library search order, guaranteeing that the Page Object keywords are available to your test case.

#### Writing a page object class
Page Objects are simple python classes that inherit from \`PageObjectLibrary.PageObject\`. There are only a couple of requirements for the class:

 1. The class should define a variable named \`PAGE_TITLE\`
 2. The class should define a variable named \`PAGE_URL\` which is a URI relative to the site root.

By inheriting from \`PageObjectLibrary.PageObject\`, methods have access to the following special object attributes:


1. \`self.selib\` : a reference to an instance of \`SeleniumLibrary\`. With this you can call any of the SeleniumLibrary keywords via their python method names (eg: \`self.selib.input_text\`)

2. \`self.browser\` : a reference to the webdriver object created when a browser was opened by \`SeleniumLibrary\`. With this you can bypass SeleniumLibrary and directly call all of the functions provided by the core selenium library.

3. \`self.locator\` : a wrapper around the \`_locators dictionary\` of the page. This dictionary can contain all of the locators used by the Page Object keywords. self.locators adds the ability to access the locators with dot notation rather than the slightly more verbose dictionary syntax (eg: \`self.locator.username\` vs \`self._locators["username"]\`.

The above tests can be easy to understand when written in gherkin format. Let's get familiar with gherkin syntax and how the test can be written in this format.

### Gherkin Syntax
Gherkin format focuses on describing a feature to be implemented using the "Given", "When", "Then", "And", and "But" keywords. Writing requirements in this manner makes tests easier to understand, specially for non-technical people, as natural language is used to describe the test cases. Moreover, this format focuses on a clear separation between test-setup, test-actions, and test-results.

Given < some initial state or preconditions >
When < the action taken which triggers the scenario >
Then < the expected outcome >

for e.g.
\`\`\`
*** Settings ***
Documentation       Test for user login
Library             SeleniumLibrary
Library             PageObjectLibrary

Test Setup           Open test browser
Test Teardown        Close all test browsers

*** Variables ***
\${SERVER}           localhost:8080
\${ROOT}             http://\${SERVER}/myApp
\${BROWSER}          chrome
\${SELENIUM_URL}     http://localhost:4444
\${PLATFORM}         linux
\${VERSION}          latest
\${USERNAME}         admin
\${PASSWORD}         password
\${LOGIN_URL}        http://\${SERVER}/myApp/login
\${WELCOME_URL}      http://\${SERVER}/myApp/welcome.html

*** Test Cases ***
Valid Login
  [Documentation]                                     Test valid login
  Given the user has browsed to the login page
  When the user enters the username                   \${USERNAME}
  And the user enters the password                    \${PASSWORD}
  And the user submits the credentials
  Then the current page should be  FilesPage
\`\`\`
 For clear separations and abstraction layers, we make context files for the test steps. Let us now create a \`contexts\` directory where all the context files are located. For the login step, let us create a login context file \`contexts/LoginContext.py\`.

 Note that: Prefixes \`Given\`, \`When\`, \`Then\`, \`And\` and \`But\` are dropped when matching keywords are searched, if no match with the full name is found. This works for both user keywords and library keywords

\`\`\`py
from robot.api.deco import keyword

from LoginPage import LoginPage


class LoginContext:
    loginPage = LoginPage()

    @keyword(name="the user enters the username '\${USERNAME}'")
    def enter_username(self, username):
        self.loginPage.enter_username(username)

    @keyword(name="the user enters the password '\${PASSWORD}'")
    def enter_password(self, password):
        self.loginPage.enter_password(password)

    @keyword(name="the user has browsed to the login page")
    def browse_to_login_page(self):
        self.loginPage.browse_to_page()

    @keyword(name="the user submits the credentials")
    def submit_credentials(self):
        self.loginPage.submit_credentials()
\`\`\`
The login context file uses the methods of the login page. So, we must write every needed functions in the login page. Let us create a page objects directory 'page_objects' and then a login page 'page_objects/LoginPage'.

\`\`\`py
from PageObjectLibrary import PageObject, PageObjectLibraryKeywords


class LoginPage(PageObject):
    PAGE_URL = "/myApp/login"
    PAGE_TITLE = "myApp"

    _locators = {
        "username": "id=user",
        "password": "id=password",
        "form_id": "login",
        "login_form_xpath": "//form[@name='%s']"
    }

    keywords = PageObjectLibraryKeywords()

    def browse_to_page(self):
        self.keywords.go_to_page('LoginPage')

    def enter_username(self, username):
        """Type the given text into the username field """
        self.selib.input_text(self.locator.username, username)

    def enter_password(self, password):
        """Type the given text into the password field"""
        self.selib.input_text(self.locator.password, password)

    def submit_credentials(self):
        """Clicks the submit button on the form
        For illustrative purposes, this uses the low level selenium
        functions for submitting the form
        """
        form = self.driver.find_element_by_xpath( self.locator.login_form_xpath % self.locator.form_id)
        form.submit()
\`\`\`
We create all other context files and page objects as per requirements. All the methods and elements related to a certain page are included in a specific page object and its own context file. This makes tests easier to understand and maintain.

FilesPage can be created in a similar manner as follows:

\`\`\`PY
from PageObjectLibrary import PageObject


class FilesPage(PageObject):
    PAGE_URL = "/index.php/apps/files/"
    PAGE_TITLE = "Files - myApp"
\`\`\`

### Go to : https://github.com/JankariTech/robotBDDExample for example test cases.
`,"/src/assets/scenarioOutline.md":`---
title: Scenario Outline in a Gherkin Feature File
authorName: Jasmine Baral
authorAvatar: https://avatars.githubusercontent.com/u/40829116?v=4
authorLink: https://github.com/jasson99/
createdAt: Feb 20, 2020
tags: testing, cucumber, gherkin, bdd
banner:
---

As we are familiar with the basic gherkin syntax such as \`feature\`, \`scenario\`, \`background\`, \`given\`, \`when\` and \`then\` steps already, let us discuss about the \`Scenario Outline\` used in a gherkin feature file.

### *Scenario Outline*

Let us start with a very simple feature where the remaining candies should be calculated based on the total candies and the candies consumed. However, there can be different scenarios for the different combinations of total candies, consumed candies, and the remaining candies.

\`\`\`gherkin
 Scenario: calculate remaining candies when all candies are consumed
   Given I have 10 candies
   When I eat 10 candies
   Then I should have 0 candies remaining


 Scenario: calculate remaining candies when some candies are consumed
   Given I have 60 candies
   When I eat 23 candies
   Then I should have 37 candies remaining


 Scenario: calculate remaining candies when no candies are consumed
   Given I have 93 candies
   When I eat 0 candies
   Then I should have 93 candies remaining
\`\`\`

It can be very time consuming to write repetitive scenarios with different permutations of data values. It can also be difficult for the reader to understand many seperate but similar scenarios. This can be improved by using the \`scenario outline\` and its example table, thus combining similar scenarios with different combinations of similar data values into one Scenario Outline. A Scenario Outline is always followed by an example table: \`Examples\`. The example table in scenario outline is used to combine multiple similar scenarios into a single scenario in the feature file. It provides one set of data per scenario. Each new row of the example table is run as a different scenario. The data values in single row of data are passed to the step definition at the run time of a scenario.

A scenario outline replaces variables with the value from the examples table. Each row in the examples table is considered to be a scenario.

In the scenario outline, the data values do not need to be hard coded in the step definition. Rather the values are replaced with the name of the parameter <parameter_name> itself.

In the above example of candies, if we observe closely, all three scenarios have the same statements, only the parameter value (total/consumed/remaining number of candies) is changing. This is where the significance of the scenario outline comes into the picture.

When we define a scenario using a scenario outline, we can specify a single test scenario for all the similar scenarios and then provide an example table at the end of the test scenario. The test scenario is always specified by \`Scenario Outline\` and is always followed by a table : \`Examples\`. This scenario will thus be executed as many times as the number of data inputs (data rows) provided in the examples table

\`\`\`gherkin
 Scenario Outline: calculate remaining candies
   Given I have <total> candies
   When I eat <eaten> candies
   Then I should have <remaining> candies
   Examples:
     | total | eaten | remaining  |
     | 10    | 10    | 0          |
     | 60    | 23    | 37         |
     | 93    | 0     | 93         |
\`\`\`

Now, let us continue with more realistic scenarios. The scenarios of user login with valid credentials (login for different valid users) can be implemented using Scenario Outline as follows:

\`\`\`gherkin
 Scenario Outline: login with valid credentials
   Given a user has been created with email "<email>" and password "<password>"
   And the user has browsed to the login page
   When the user enters email "<email>" and password "<password>" in the login form
   And the user logs in
   Then the user should be redirected to the homepage
   Examples:
     | email            | password     |
     | user1@email.com  | firstpass    |
     | second@email.com | password12   |
     | test@gmail.com   | testpassword |
\`\`\`

Here, each row of the example table provides the email and password used in the given and when steps. Even if this scenario looks like a single scenario, it runs 3 times in this example with different email and password set in the step definition, one at a time. The first scenario takes the first row of email and password and completes the test (hopefully passed). Then the 2nd scenario takes the data in the second row independent of other data present in other rows. After this is completed, it's turn for the 3rd row of data sets.

Let us be more clear. The above scenario outline consists of 3 similar scenarios which run uniquely with their own set of data. Let us see how it happens.

The first row of data acts as first scenario and runs as :


\`\`\`gherkin
Given a user has been created with email "user1@email.com" and password "firstpass"
And the user has browsed to the login page
When the user enters email "user1@email.com" and password "firstpass" in the login form
And the user logs in
Then the user should be redirected to the homepage
\`\`\`


Similarly, the next two scenarios run as below respectively.

\`\`\`gherkin
Given a user has been created with email "second@email.com" and password "password12"
And the user has browsed to the login page
When the user enters email "second@email.com" and password "password12" in the login form
And the user logs in
Then the user should be redirected to the homepage
\`\`\`

\`\`\`gherkin
Given a user has been created with email "test@gmail.com" and password "testpassword"
And the user has browsed to the login page
When the user enters email "test@gmail.com" and password "testpassword" in the login form
And the user logs in
Then the user should be redirected to the homepage
\`\`\`

To sum up, when there are cases where the scenarios are similar with same statements but with varying data values as parameters, it is advisable to use Scenario Outline with different sets of values provided through the examples table.
`,"/src/assets/tablenodes.md":`---
title: Datatables used in a Gherkin Feature File
authorName: Jasmine Baral
authorAvatar: https://avatars.githubusercontent.com/u/40829116?v=4
authorLink: https://github.com/jasson99/
createdAt: Feb 20, 2020
tags: testing, cucumber, gherkin, bdd
banner:
---

As we are familiar with the basic gherkin syntax such as \`feature\`, \`scenario\`, \`Scenario Outline\`, \`background\`, \`given\`, \`when\` and \`then\` steps already, let us discuss about the \`table\` or \`tablenodes\` used in the steps of a gherkin feature file.

## Tables

\`Tables\` or \`tablenodes\` or \`Datatables\` are used for specifying a larger data set as an argument in the steps of a scenario in a feature file. These tables are handy for passing a list of values to a step definition. The data tables are passed to the step definition of a specific step as its last argument. Let us understand with the help of an example below.

#### A scenario for logging in without using a data table

\`\`\`gherkin
 Scenario: login with valid credentials
   Given a user has been created with email "user@email.com" and username "user" and password "password"
   And the user has browsed to the login page
   When the user enters email "user@email.com" and username "user" and password "password" in the login form
   And the user logs in
   Then the user should be redirected to the homepage
\`\`\`

There are cases where a large amount of data needs to be set in the steps. It can be done using a number of "ands" in the step text as shown in the example above. However, good practice would be to use data tables to provide the data.

#### A scenario for logging in using a data table

 \`\`\`gherkin
  Scenario: login with valid credentials
    Given a user has been created with the following details:
       | email          | username  | password |
       | user@email.com | user      | password |
    And the user has browsed to the login page
    When the user enters the following details in the login form:
       | email          | username  | password |
       | user@email.com | user      | password |
    And the user logs in
    Then the user should be redirected to the homepage
\`\`\`

Please do not confuse data tables with the example table used in a scenario outline. Even if they look alike, they have completely different purposes. Please refer to this blog to learn more about the \`Scenario Outline\`: \`https://dev.to/jankaritech/scenario-outline-in-gherkin-feature-file-16jh\`

### *Data tables*

Unlike the examples table, a table node provides all of the data in the data table at once, in the specific step where the table is provided.

Let us look at another example of a data table. To be more clear about its significance, let us first write a scenario without using a data table as below.

\`\`\`gherkin
Scenario: view and delete files
  Given user "testuser" has been created
  And user "testuser" has logged in
  When the user browses to the files page
  Then file "myCollegeProject" should be listed
  And file "interviewQuestions" should be listed
  And file "picnicCollections" should be listed
  And file "presentation" should be listed
  When the user deletes file "myCollegeProject"
  And the user deletes file "interviewQuestions"
  Then file "myCollegeProject" should not be listed
  And file "interviewQuestions" should not be listed
  But file "picnicCollection" should be listed
  And file "presentation" should be listed
\`\`\`

When observed closely, we can see that the listing of several files, continuous deletion of several files, non-listing of deleted files and listing of non-deleted files has been written using several repetitive steps. The steps seem to be difficult to maintain this way. Moreover, more effort is required to understand the scenario when reading it. To improve this, we can use the data tables. The example below illustrates the use of data tables in the steps where multiple data are to be passed at once. For example, multiple files are to be listed, multiple files are to be deleted, and again multiple files are expected not to be listed and to be listed respectively.
\`\`\`gherkin
 Scenario: view and delete files
   Given user "testuser" has been created
   And user "testuser" has logged in
   When the user browses to the files page
   Then the following files should be listed:
      | files              |
      | myCollegeProject   |
      | interviewQuestions |
      | picnicCollections  |
      | presentation       |
   When the user deletes the following files
      | files              |
      | myCollegeProject   |
      | interviewQuestions |
   Then the following files should not be listed:
      | files              |
      | myCollegeProject   |
      | interviewQuestions |
   But the following files should be listed:
      | files              |
      | picnicCollections  |
      | presentation       |
\`\`\`

The data set provided using the data table should be hashed in the step definition of the particular steps in order to transform the cucumber data table into either an array of data or object.

 for example:
 In nightwatch, to transform a cucumber data table to an array, we use \`hashes\`
\`\`\`js
 When('the user deletes the following files', (dataTable) => {
  const filesToDelete = dataTable.hashes()
  console.log(filesToDelete);
  /* It returns :
  [ {files: 'myCollegeProject'},
    {files: 'interviewQuestions'} ]
  */

  for (const file in filesToDelete) {
    this.delete(file)
  }
})
\`\`\`
Now, to transform a cucumber data table to an object, we use \`rowsHash\`. However, rowsHash can only be called on a data table where all rows have \`exactly two columns\`.

for example:
\`\`\`gherkin
When the user sets the price for the following items
   | book      | 500 |
   | sharpener | 30  |
   | pencil    | 15  |
\`\`\`

The step definition for this step can parse the data table using \`rowsHash\` as follows:

\`\`\`js
When('the user sets the price for the following items', (dataTable) => {
  const priceOfItems = dataTable.rowsHash()
  console.log(priceOfItems)
    /* It returns :
    { book : '500',
      sharpener : '30',
      pencil : '15' }
    */
})
\`\`\`
Let us see what happens if we use \`hashes\` for this example.
\`\`\`js
When('the user sets the price for the following items', (dataTable) => {
  const priceOfItems = dataTable.hashes()
  console.log(priceOfItems)
   /* It returns :
   [ { book : 'sharpener', '500' : '30' },
     { book : 'pencil', '500' : '15'} ]
   */
})
\`\`\`

However, if we provide data in the steps as follows, then \`hashes\` can be used. for example:
\`\`\`gherkin
When the user sets the price for the following items
   | item      | price |
   | book      | 500   |
   | sharpener | 30    |
   | pencil    | 15    |
\`\`\`
\`\`\`js
When('the user sets the price for the following items', (dataTable) => {
  const priceOfItems = dataTable.hashes()
  console.log(priceOfItems)
   /* It returns :
   [ { item : 'book', price : '500' },
     { item : 'sharpener', price : '30' },
     { item : 'pencil', price : '15'} ]
   */
})
\`\`\`


 ### Combination
It is also possible to combine data tables with a scenario outline as well when needed. Let us see an example below:
\`\`\`gherkin
Scenario Outline: User tries to signup with improper combination of password
   Given the user has browsed to the signup page
   When the user tries to signup entering the following details
      | email           |  william@xyz.com   |
      | password        | <Password>         |
      | confirmPassword | <ConfirmPassword>  |
   Then an error message "<validation>" should be shown above the "password" field
   Examples:
      | Password    | ConfirmPassword  | validation                         |
      | 234567569   | 234567569        | This password is entirely numeric  |
      | 123456789   | 123456789        | This password is too common.       |
      | abcde       | abcde            | This password is too short.        |
\`\`\`

The values in the examples table get substituted into the steps which require the parameter values. The substitution takes place one row at a time. The values from the data table are passed to its step definition at once. For the above example, since there are 3 data rows in the \`examples table\`, this scenario runs thrice with a specific combination of data values as provided in the example table. Let us be clear about how the above example executes.

In the first scenario, a set of data is used from the first row of the examples table, as below.

\`\`\`gherkin
Given the user has browsed to the signup page
When the user tries to signup entering the following details
    | email           | william@xyz.com    |
    | password        | 234567569          |
    | confirmPassword | 234567569          |
Then an error message "This password is entirely numeric" should be shown above the "password" field
\`\`\`

For the step definition of when step, the data table is parsed as follows:

\`\`\`js
When('the user tries to signup entering the following details', (dataTable) => {
const userDetails = dataTable.rowsHash()
  /* It returns: {
    email : 'william@xyz.com',
    password : '234567569',
    confirmPassword : '234567569'
  } */

  return client.setValue(emailField, userDetails['email'])
    .setValue(passwordField, userDetails['password'])
    .setValue(confirmPasswordField, userDetail['confirmPassword'])
    .click(signupButton)
})
\`\`\`

In the next run of the scenario, the next single row of data is used as follows.

\`\`\`gherkin
Given the user has browsed to the signup page
When the user tries to signup entering the following details
   | email           | william@xyz.com    |
   | password        | 123456789          |
   | confirmPassword | 123456789          |
Then an error message "This password is too common" should be shown above the "password" field
\`\`\`

Similarly, the third run of the scenario uses the third row of the examples table as follows.

\`\`\`gherkin
Given the user has browsed to the signup page
When the user tries to signup entering the following details
   | email           | william@xyz.com    |
   | password        | abcde              |
   | confirmPassword | abcde              |
Then an error message "This password is too short" should be shown above the "password" field
\`\`\`
`,"/src/assets/tusProtocol.md":`---
title: Resumable file upload with TUS protocol
authorName: Swoichha Adhikari
authorAvatar: https://scontent-xsp1-2.xx.fbcdn.net/v/t31.18172-8/18216685_1214675605324860_6379567891116845889_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=FedXXX5gB6wAX_xEIRR&_nc_ht=scontent-xsp1-2.xx&oh=00_AT9-hBJ2X2pOm30O8EeTMz9cqDy0nBtuuAoKExX90t6lWA&oe=62E22721
authorLink: https://github.com/swoichha
createdAt: 02/10/2022
tags: tus, upload, resumable
banner: https://tus.io/assets/img/tus1--no-io.png
---

\`\`\`
"Work half done is still some work done"
\`\`\`

We all have faced problems while uploading a file. Whether it is an error with a file exceeding the maximum upload size or failing to write a file to disk.

Here, in this blog, we are going to talk about partial upload failing. We all have been to that place where we have uploaded a huge file and have been waiting for minutes if not hours to finish the uploading process. Finally, the moment comes when our upload is about to be completed but then some error occurs, and our upload fails.

Now, you have to go through all the trouble to re-upload it, which is irritating as well as time-consuming.

There might be various factors for such failure. Such as a weak internet connection, your browser might crash, etc.
So, what can we do? Should we re-upload the whole file? But then again the re-uploading process will take the same amount of time and effort that it required earlier. If only there was a way that we could continue from where the last failure occurred.

Well, we are in luck because the answer is simple, "TUS upload".

## What is TUS?

TUS stands for Transloadit Upload Server.

"TUS is a protocol for resumable uploads built on HTTP. It offers simple, cheap, and reusable stacks for clients and servers. It supports any programming-language, any platform, and any network."

## Why TUS?

So, the question may arise, Why do we need TUS? The thing about TUS is that it allows us to continue uploading our file from where we left off even after it has failed previously.

For example, We are trying to upload a file of 100 GB and due to some interruption, we were able to upload only 60 GB of the data. Normally, we would re-upload the file which means we will be uploading the 60 GB of the same data that was already uploaded in a prior upload. But, using TUS we won't need to upload that 60 GB we will be uploading the remaining 40 GB of data.

## Pros

- It is built upon HTTP and supports any programming-language, any platform, and any network.
- The main advantage of using TUS is that you can start uploading files from the point where you left off last time.
- It is open source. So, anyone can use and contribute to it.
- It allows the user the ability to pause and resume the upload anytime they want(even after multiple days).
- It can handle increasing numbers of connections and uploads.

To see a demo of how it works you can visit the [Resumable File Upload Demo](https://tus.io/demo.html) and for real-life implementation of TUS resumable upload protocol have a look at [this](https://tus.io/implementations.html).

This brings us to the end of this blog. In the next blog, we will look into specifications for the TUS protocol and its HTTP methods.
`,"/src/assets/BDDWithFlutter/BDDWithFlutter.md":`---
title: BDD (Behavior Driven Development) with Flutter
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: June 3, 2020
tags: bdd, testing, flutter, dart
banner:
seriesTitle: Behaviour Driven Development
episode: 2
---

This tutorial will first show how to test a flutter app using the Gherkin language and in the second part walk through an example of BDD (Behavior Driven Development) in the same App.

Flutter uses different types of tests [(unit, widget, integration)](https://flutter.dev/docs/testing). You should have all types of tests in your app, most of your tests should be unit tests, less widget and a few integration tests. The [test pyramid](https://martinfowler.com/bliki/TestPyramid.html) explains the principle well (using different words for the test-types).

In this tutorial I want to help you to start with integration tests but go a step further than the description in the [flutter documentation](https://flutter.dev/docs/testing#integration-tests) and use the Gherkin language to describe the expected behavior.
The basic idea behind Gherkin/Cucumber is to have a semi-structured language to be able to define the expected behaviour and requirements in a way that all stakeholders of the project (customer, management, developer, QA, etc.) understand them. Using Gherkin helps to reduce misunderstandings, wasted resources and conflicts by improving the communication. Additionally, you get a documentation of your project and finally you can use the Gherkin files to run automated tests.

If you write the Gherkin files, before you write the code, you have reached the final level, as this is called BDD (Behaviour Driven Development)!

Here are some readings about BDD and Gherkin:
- ["Introducing BDD", by Dan North (2006)](http://blog.dannorth.net/introducing-bdd)
- [Wikipedia](https://en.wikipedia.org/wiki/Behavior-driven_development)
- ["The beginner's guide to BDD (behaviour-driven development)", By Konstantin Kudryashov, Alistair Stead, Dan North](https://inviqa.com/blog/bdd-guide)
- [Behaviour-Driven Development](https://cucumber.io/docs/bdd/)

But enough theory, lets get our hands dirty. (You can find all the code of this tutorial here: https://github.com/JankariTech/flutterBDDexample)

## The feature files

For the start you should have installed the flutter-tools stack and create a flutter test-drive app as explained in the [get-started document](https://flutter.dev/docs/get-started/test-drive?tab=androidstudio)

Inside the app folder create a folder called \`test_driver\` and inside another one called \`features\`. In \`features\` we will place all the Gherkin descriptions of the expected app behavior. So create here a file called: \`increment_counter.feature\`

We start the feature file with a very general description of the feature:
\`\`\`
Feature: Increment Counter

  As the good shepherd
  I want to be able to count my sheep
  So that I notice if one is missing
\`\`\`

The first line is just a title of the feature, the other three lines should answer the questions [Who, wants to achieve what and why with this particular feature](https://www.bibleserver.com/ESV/Luke15%3A4). If you cannot answer those questions for a particular feature of your app then you actually should not implement that feature, there is no use-case for it.

Next we have to describe the specific behavior of the app. For that Gherkin provides 3 different keywords:
- **Given** - prerequisites for the scenario
- **When** - the action to be tested
- **Then** - the desired observable outcome

Add a scenario to the feature file.
\`\`\`
  Scenario: Counter increases when the button is pressed
    Given the counter is set to "0"
    When I tap the "increment" button 10 times
    Then I expect the "counter" to be "10"
\`\`\`

Later we will add more scenarios to the app, the feature might be the same, but in different scenarios it might have to react differently.

Now we can start the app and use our behaviour description to check if it works as it should.

## Test-automation

Running manual tests from a description is nice, but not enough for us, we want to save time and reduce possible mistakes by running the tests automatically.

To interpret the Gherkin file and interact with the app we are using the \`flutter_gherkin\` package. Install it by placing \`flutter_gherkin:\` in the \`pubspec.yaml\` inside the \`dev_depencencies\` section.
\`\`\`
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_gherkin:
\`\`\`

and run \`flutter pub get\`.

Now we also need some glue-code and configuration.

Inside \`test_driver\` create a file called \`app.dart\` with the content
\`\`\`
import '../lib/main.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_driver/driver_extension.dart';

void main() {
  enableFlutterDriverExtension();
  runApp(MyApp());
}
\`\`\`

and a file called \`app_test.dart\` with the content:
\`\`\`
import 'dart:async';
import 'package:flutter_gherkin/flutter_gherkin.dart';
import 'package:gherkin/gherkin.dart';
import 'package:glob/glob.dart';

Future<void> main() {
  final config = FlutterTestConfiguration()
    ..features = [Glob(r"test_driver/features/**.feature")]
    ..reporters = [
      ProgressReporter(),
      TestRunSummaryReporter(),
      JsonReporter(path: './report.json')
    ]
    ..stepDefinitions = []
    ..customStepParameterDefinitions = []
    ..restartAppBetweenScenarios = true
    ..targetAppPath = "test_driver/app.dart"
    ..exitAfterTestRun = true; // set to false if debugging to exit cleanly
  return GherkinRunner().execute(config);
}
\`\`\`

That was all we need to do for the installation, now we have to tell the test-software what actually to do with our Given, When and Then steps.
The library gives us some built-in steps, that should work "out-of-the-box" but others we need to implement ourself.
In our example the Then step is a built-in step but the Given and the When step have to be implemented. So let's do that. Inside \`test_driver\` create a folder called \`steps\` and in there create a file called \`tap_button_n_times_step.dart\` with the content:
\`\`\`
import 'package:flutter_driver/flutter_driver.dart';
import 'package:flutter_gherkin/flutter_gherkin.dart';
import 'package:gherkin/gherkin.dart';

class GivenCounterIsSetTo extends Given1WithWorld<String, FlutterWorld> {
  @override
  RegExp get pattern => RegExp(r"the counter is set to {string}");

  @override
  Future<void> executeStep(String expectedCounter) async {
    final locator = find.byValueKey("counter");
    final actualCount = await FlutterDriverUtils.getText(world.driver, locator);
    expectMatch(actualCount, expectedCounter);
  }
}

class TapButtonNTimesStep extends When2WithWorld<String, int, FlutterWorld> {
  @override
  RegExp get pattern => RegExp(r"I tap the {string} button {int} times");

  @override
  Future<void> executeStep(String buttonKey, int amount) async {
    final locator = find.byValueKey(buttonKey);
    for (var i = 0; i < amount; i += 1) {
      await FlutterDriverUtils.tap(world.driver, locator, timeout: timeout);
    }
  }
}
\`\`\`

In this file we have two classes, one for every step we want to implement. Every class extends an abstract class. The Given step extends a class which name starts with \`Given\` and analogously the When step extends a class which name starts with \`When\`. Then there is a number in the class name. That number tells how many parameters we can pass from the step to the implementation. In \`Given the counter is set to "0"\` there is one parameter (the \`0\`) and in \`When I tap the "increment" button 10 times\` two (the button name, and the amount of taps).

The last part of the class to extend is \`WithWorld\` that gives us access to the Flutter context.

Next there is a variable called \`pattern\` with a regular expression, that is used to associate the step in the feature file with the class.

Last there is a function \`executeStep\`. This function receives the parameters from the feature file and finally does all the hard work.
In both cases it finds the element on the screen we want to interact with by using the \`find.byValueKey()\` method and then in the case of the Given step, gets the text of the element and checks if its as expected or, in the case of the When step, taps the button.

Similarly our Then step (remember it's a built-in step) will use the same \`find.byValueKey()\` method to get the value and assert the content. If you are interested in the implementation, the step is defined in \`flutter_gherkin-<version>/lib/src/flutter/steps/then_expect_element_to_have_value_step.dart\`.

The issue now is that the example code does not have any keys defined in the widgets. The test-code would not be able to locate the elements.
So edit the \`main.dart\` file and add \`key: Key('counter'),\` to the counter widget and \`key: Key('increment'),\` to the button widget.

You could also use \`find.byTooltip\`, \`find.Type\` or \`find.bySemanticsLabel\`.

Next the new .dart file with the step definitions need to be imported in \`app_test.dart\`:
\`import 'steps/tap_button_n_times_step.dart';\`

Additionally every class we add in the steps definitions we also have to register in the \`stepDefinitions\` array in \`app_test.dart\`, the line has to be:
\`..stepDefinitions = [TapButtonNTimesStep(), GivenCounterIsSetTo()]\`

Remember: The step \`Then I expect the "counter" to be "10"\` is a built-in-step. So we don't need to write any code for it, it will look for a text-widget with the key \`counter\` and assert its value.

## run the tests
1. connect your phone or start the emulator
2. run \`dart test_driver/app_test.dart\`

after a while you should see an output like:
\`\`\`
Running scenario: Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
   \u221A Given the counter is set to "0" # ./test_driver/features/increment_counter.feature:6 took 146ms
   \u221A When I tap the "increment" button 10 times # ./test_driver/features/increment_counter.feature:7 took 6420ms
   \u221A Then I expect the "counter" to be "10" # ./test_driver/features/increment_counter.feature:8 took 72ms
PASSED: Scenario Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
Restarting Flutter app under test
1 scenario (1 passed)
3 steps (3 passed)
0:00:16.767000
\`\`\`

and the app working on the phone screen.

![first test run](/src/assets/BDDWithFlutter/images/flutter-run1.gif)

## BDD (this time for real)

We know now how to write feature files and how to run automated tests from them, but that hasn't been BDD yet. We have only written a test for an existing feature in the app. To do BDD we have first to write the expected behaviour and then start coding.

### 1. write down the expected behaviour

Let's say we not only want to have a button to increment the counter, but also be able to decrement it. So in \`features\` create a file called \`decrement_counter.feature\` with this content:

\`\`\`
Feature: Decrement Counter
  As the good shepherd
  I want to be able to decrement the count of my sheep when one is lost
  So that I can have extra joy incrementing the counter when I find the lost sheep

  Scenario: Counter decreases when the (-) button is pressed
    Given the counter is set to "10"
    When I tap the "decrement" button 1 time
    Then I expect the "counter" to be "9"
\`\`\`

Trying to run this test we will have multiple issues:
1. the \`Given\` step only asserts the counter, but does not set it to a specific value
2. the regex will not match the \`When\` step because it says \`time\` and not \`times\`
3. there is no functionality and no button to decrement the counter

### 2. make the tests pass

For the first issue we would need to pre-set the counter with a value, but as we are doing end-to-end tests and acting as a user, the only way for the user to get the counter up to a specific value is to press the (+) button. Our test-code will do the same. (Side note: that will take time during test-execution, the faster option would be to have a back-channel to pre-set the value e.g. \`Data Handlers\`, but I could not make it work).

So lets refactor our step definition, so that the Given step pre-sets the counter to the expected value:
\`\`\`diff
index e4eea51..e2e1a38 100644
--- a/myapp/test_driver/steps/tap_button_n_times_step.dart
+++ b/myapp/test_driver/steps/tap_button_n_times_step.dart
@@ -8,6 +8,7 @@ class GivenCounterIsSetTo extends Given1WithWorld<String, FlutterWorld> {

   @override
   Future<void> executeStep(String expectedCounter) async {
+    await tapButton(world, timeout, "increment", int.parse(expectedCounter));
     final locator = find.byValueKey("counter");
     final actualCount = await FlutterDriverUtils.getText(world.driver, locator);
     expectMatch(actualCount, expectedCounter);
@@ -20,9 +21,13 @@ class TapButtonNTimesStep extends When2WithWorld<String, int, FlutterWorld> {

   @override
   Future<void> executeStep(String buttonKey, int amount) async {
-    final locator = find.byValueKey(buttonKey);
-    for (var i = 0; i < amount; i += 1) {
-      await FlutterDriverUtils.tap(world.driver, locator, timeout: timeout);
-    }
+    await tapButton(world, timeout, buttonKey, amount);
+  }
+}
+
+Future<void> tapButton(FlutterWorld world, Duration timeout, String buttonKey, int amount) async {
 +  final locator = find.byValueKey(buttonKey);
 +  for (var i = 0; i < amount; i += 1) {
 +    await FlutterDriverUtils.tap(world.driver, locator, timeout: timeout);
    }
\`\`\`

The second issue should be fixed easily with some regex-magic. Just place the \`s\` of \`times\` in a non-capturing regex group:
\`RegExp get pattern => RegExp(r"I tap the {string} button {int} time(?:s|)");\`
Non-capturing because a normal group would be passed as argument to \`TapButtonNTimesStep\`.

To fix the last issue, we actually need to implement a new functionality in the app. We need a decrement button in \`main.dart\`.

\`\`\`diff
index 8795daa..068f558 100644
--- a/myapp/lib/main.dart
+++ b/myapp/lib/main.dart
@@ -63,6 +63,12 @@ class _MyHomePageState extends State<MyHomePage> {
     });
   }

+  void _decrementCounter() {
+    setState(() {
+      _counter--;
+    });
+  }
+
   @override
   Widget build(BuildContext context) {
     // This method is rerun every time setState is called, for instance as done
@@ -95,7 +101,7 @@ class _MyHomePageState extends State<MyHomePage> {
           // center the children vertically; the main axis here is the vertical
           // axis because Columns are vertical (the cross axis would be
           // horizontal).
-          mainAxisAlignment: MainAxisAlignment.center,
+          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
           children: <Widget>[
             Text(
               'You have pushed the button this many times:',
@@ -105,15 +111,28 @@ class _MyHomePageState extends State<MyHomePage> {
               key: Key('counter'),
               style: Theme.of(context).textTheme.headline4,
             ),
+            Row(
+              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
+                children: <Widget>[
+                  FloatingActionButton(
+                    onPressed: _decrementCounter,
+                    key: Key('decrement'),
+                    tooltip: 'decrement',
+                    child: Icon(Icons.remove),
+                  ),
+                  FloatingActionButton(
+                    // Provide a Key to this button. This allows finding this
+                    // specific button inside the test suite, and tapping it.
+                    key: Key('increment'),
+                    onPressed: _incrementCounter,
+                    tooltip: 'Increment',
+                    child: Icon(Icons.add),
+                  ),
+                ]
+            )
           ],
         ),
       ),
-      floatingActionButton: FloatingActionButton(
-        onPressed: _incrementCounter,
-        key: Key('increment'),
-        tooltip: 'Increment',
\`\`\`

Now the tests should pass:
\`\`\`
Running scenario: Counter decreases when the (-) button is pressed # ./test_driver/features/decrement_counter.feature:5
   \u221A Given the counter is set to "10" # ./test_driver/features/decrement_counter.feature:6 took 2877ms
   \u221A When I tap the "decrement" button 1 time # ./test_driver/features/decrement_counter.feature:7 took 255ms
   \u221A Then I expect the "counter" to be "9" # ./test_driver/features/decrement_counter.feature:8 took 43ms
PASSED: Scenario Counter decreases when the (-) button is pressed # ./test_driver/features/decrement_counter.feature:5
Restarting Flutter app under test
...
Running scenario: Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
   \u221A Given the counter is set to "0" # ./test_driver/features/increment_counter.feature:6 took 46ms
   \u221A When I tap the "increment" button 10 times # ./test_driver/features/increment_counter.feature:7 took 2835ms
   \u221A Then I expect the "counter" to be "10" # ./test_driver/features/increment_counter.feature:8 took 84ms
PASSED: Scenario Counter increases when the button is pressed # ./test_driver/features/increment_counter.feature:5
Restarting Flutter app under test
2 scenarios (2 passed)
6 steps (6 passed)
0:00:22.451000
\`\`\`

### 3. multiply the scenarios by using an example table
Now we might want to test more cases than only tapping the (-) button once. For that we can just copy and paste the existing scenario, or more elegantly we add an example table:
\`\`\`
  Scenario Outline: Counter decreases when the (-) button is pressed
    Given the counter is set to "<initial-counter>"
    When I tap the "decrement" button <decrement> time
    Then I expect the "counter" to be "<final-counter>"
    Examples:
      | initial-counter | decrement | final-counter |
      | 10              | 1         | 9             |
      | 10              | 9         | 1             |
      | 3               | 3         | 0             |
\`\`\`

This will run the same scenario three different times with the values in the table substituted into the steps.

\`\`\`
Running scenario: Counter decreases when the (-) button is pressed (Example 1) # ./test_driver/features/decrement_counter.feature:5
   \u221A Given the counter is set to "10" # ./test_driver/features/decrement_counter.feature:6 took 2658ms
   \u221A When I tap the "decrement" button 1 time # ./test_driver/features/decrement_counter.feature:7 took 243ms
   \u221A Then I expect the "counter" to be "9" # ./test_driver/features/decrement_counter.feature:8 took 60ms
PASSED: Scenario Counter decreases when the (-) button is pressed (Example 1) # ./test_driver/features/decrement_counter.feature:5

...

Running scenario: Counter decreases when the (-) button is pressed (Example 2) # ./test_driver/features/decrement_counter.feature:5
   \u221A Given the counter is set to "10" # ./test_driver/features/decrement_counter.feature:6 took 3325ms
   \u221A When I tap the "decrement" button 9 time # ./test_driver/features/decrement_counter.feature:7 took 2457ms
   \u221A Then I expect the "counter" to be "1" # ./test_driver/features/decrement_counter.feature:8 took 25ms
PASSED: Scenario Counter decreases when the (-) button is pressed (Example 2) # ./test_driver/features/decrement_counter.feature:5

...

Running scenario: Counter decreases when the (-) button is pressed (Example 3) # ./test_driver/features/decrement_counter.feature:5
   \u221A Given the counter is set to "3" # ./test_driver/features/decrement_counter.feature:6 took 878ms
   \u221A When I tap the "decrement" button 3 time # ./test_driver/features/decrement_counter.feature:7 took 877ms
   \u221A Then I expect the "counter" to be "0" # ./test_driver/features/decrement_counter.feature:8 took 63ms
PASSED: Scenario Counter decreases when the (-) button is pressed (Example 3) # ./test_driver/features/decrement_counter.feature:5
\`\`\`

### 4. repeat

What about negative values? If a shepherd is using this app to count the sheep, there is no point to have a negative counter. To say it in Gherkin:
\`\`\`
  Scenario: Counter should not be negative
    Given the counter is set to "0"
    When I tap the "decrement" button 1 time
    Then I expect the "counter" to be "0"
\`\`\`

You also could add that to the previous table, but I would argue that it is another requirement and its easier to understand the feature file if its written out in a separate Scenario.

Running this test fails with:
\`\`\`
   \xD7 Then I expect the "counter" to be "0" # ./test_driver/features/decrement_counter.feature:18 took 97ms
      Expected: '0'
  Actual: '-1'
   Which: is different.
          Expected: 0
            Actual: -1
                    ^
           Differ at offset 0
\`\`\`

The counter becomes negative. Let's fix it:
\`\`\`diff
index 068f558..5e0d8d0 100644
--- a/myapp/lib/main.dart
+++ b/myapp/lib/main.dart
@@ -65,7 +65,9 @@ class _MyHomePageState extends State<MyHomePage> {

   void _decrementCounter() {
     setState(() {
-      _counter--;
+      if (_counter > 0) {
+        _counter--;
+      }
     });
   }
\`\`\`

## conclusion

You have seen how to write Gherkin files and how to run them as automated tests for a flutter application.
I personally find flutter_gherkin a bit more complicated than other BDD frameworks, but it's possible, and I believe using BDD will improve the quality of your project greatly.

If you need any help with the test-coverage of your app, BDD or other test-related topics, please contact us [@JankariTech](https://www.jankaritech.com)
`,"/src/assets/ContractTestingWithPact/contract-testing-with-pact-(javascript).md":`---
title: Contract testing with Pact (JavaScript)
authorName: Sajan Gurung
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110923-crop-col-800.jpg
authorLink: https://github.com/saw-jan
createdAt: Aug 24, 2021
tags: pactjs, testing, javascript
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--rgD9-Oz9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tj9nr0r3wfgchgbpa7d5.png
---
Contract testing is a software testing technique which is used to test the integration points and interfaces between different software applications. The main goal of contract testing is to test each application in isolation and ensure that they are compatible with a shared contract.

Consumer driven contract testing is simply a contract testing approach in which a consumer sets the list of expectations as a contract and expects a provider to be compatible with that contract.

#### Pact

> Pact is a code-first tool for testing HTTP and message integrations using contract tests.

For more information see [docs.pact.io](https://docs.pact.io/)

In this blog post, I will focus on how to test HTTP integrations using Pact. The following diagram shows the overview of how Pact works:

![Pact Workflow](/src/assets/ContractTestingWithPact/images/pactworkflow.png)

_Overview of How Pact Works_

For a step-by-step explanation, please refer to [How Pact works](https://pactflow.io/how-pact-works/?utm_source=ossdocs&utm_campaign=getting_started#slide-1).

Pact is available in more than 10 programming languages. See [here](https://docs.pact.io/implementation_guides) for supported programming languages. In this blog post, I will focus on the **JavaScript** implementation of Pact.

### Writing Tests with PactJs (Consumer Side)

Let's assume that you have a web application that gets earth's total population from an API server and you want to test that application without having to actually communicate with the real server. This is where _Pact_ comes in.

Before writing any tests, you need to have a working web application. Let's create one.

Install _axios_: required to make HTTP requests

\`\`\`bash
npm i axios@0.21.1
\`\`\`

Create a _client.js_ file inside a _src_ folder and write the following code:

\`\`\`js
// src/client.js

const axios = require('axios');

function Earth(api_server_url) {
  this.AXIOS = axios.create({ baseURL: api_server_url });

  this.getTotalPopulation = function () {
    return this.AXIOS.get('/population').then((res) => res.data);
  };
}

module.exports = Earth;
\`\`\`

Now, we are ready to write some tests.

#### Installation

We will be using \`PactV3\` with \`Jest\` in this example.
Install _PactV3_ and _Jest_ using the following command:

\`\`\`bash
npm i -D @pact-foundation/pact@10.0.0-beta.44 jest@27.0.6
\`\`\`

#### Writing Tests

Create _client.spec.js_ file inside a _tests_ folder. This _spec_ file is our test file.

The test looks like this:

> Note: The following example may or may not work with the latest version of above packages

\`\`\`js
// tests/client.spec.js

const path = require('path');
const Earth = require('../src/client');
const { PactV3, MatchersV3 } = require('@pact-foundation/pact');

describe('Test', () => {
  // pact mock server url
  const mock_port = 1234;
  const mock_server_url = 'http://127.0.0.1:' + mock_port;

  // pact instance
  const provider = new PactV3({
    consumer: 'web_server',
    provider: 'api_server',
    port: mock_port,
    dir: path.resolve(process.cwd(), 'tests', 'pacts'),
  });

  it('test: getTotalPopulation', () => {
    // interaction
    provider
      .uponReceiving("a GET request to get total earth's population")
      .withRequest({
        method: 'GET',
        path: '/population',
      })
      .willRespondWith({
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          population: MatchersV3.number(7794798739),
        },
      });

    return provider.executeTest(() => {
      const earth = new Earth(mock_server_url);
      return earth
        .getTotalPopulation()
        .then((res) => {
          expect(res.population).toBe(7794798739);
        })
        .catch((err) => {
          expect(err).toBeNull();
        });
    });
  });
});
\`\`\`

In the above test, firstly, we created the pact instance with mandatory options except port (if the port is not provided, the mock server will run on a random port). Then, we added the interaction that we want to test.

During the test run, the test function \`getTotalPopulation\` will send the expected request to the mock server.

\`\`\`js
.withRequest({
    method: 'GET',
    path: '/population',
})
\`\`\`

And the mock server will respond with the expected response.

\`\`\`js
.willRespondWith({
    status: 200,
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        population: MatchersV3.number(7794798739),
    },
})
\`\`\`

\`MatchersV3\` provides a set of matchers that can be used to check the response. For detailed information please read [Using the V3 matching rules](https://github.com/pact-foundation/pact-js/tree/feat/v3.0.0#using-the-v3-matching-rules)

It is important to note that the test function call and assertions should be done within the callback block of \`executeTest\`. Function \`executeTest\` is responsible for starting and, stopping the mock server and also for writing the pact file.

Now, as you have your first test, you can run the test using the following command:

\`\`\`bash
npx jest tests/client.spec.js
\`\`\`

Result:
![Consumer test result](/src/assets/ContractTestingWithPact/images/consumer_test.png)

When a test run exits with success, it will generate a json file (i.e. pact or contract file) inside the _pacts_ folder which is later used to verify the provider.

### Verifying the Provider (Provider Side)

You have written tests for your web application. But now, you also need to verify that your API server returns the expected response as per the contract. As I have mentioned above, you need a pact file (contract) in order to verify the provider (API server).

Let's create a simple API server using _express_ which will only respond to the \`/population\` endpoint.

Install _express_ with the following command:

\`\`\`bash
npm i express@4.17.1
\`\`\`

Create a \`server.js\` file inside a _src_ folder and write the following code:

\`\`\`js
// src/server.js

const express = require('express');
const app = express();
const port = 5000;

app.get('/population', (req, res) => {
  res.append('Content-Type', 'application/json').status(200).send({
    populatioin: 123456789,
  });
});
app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
\`\`\`

To run the server, run the following command:

\`\`\`bash
node src/server
\`\`\`

Now the API server is up and running, let's write a test file to verify the contract against the provider.

\`\`\`js
// tests/server.spec.js

const { VerifierV3 } = require('@pact-foundation/pact');
const path = require('path');
const assert = require('assert');

describe('Pact Verification', () => {
  it('verifies the provider', () => {
    const options = {
      provider: 'api_server',
      providerBaseUrl: 'http://localhost:5000',
      disableSSLVerification: true,
      pactUrls: [
        path.resolve(
          process.cwd(),
          'tests',
          'pacts',
          'web_server-api_server.json'
        ),
      ],
    };

    return new VerifierV3(options)
      .verifyProvider()
      .then((output) => {
        console.log('Pact Verification Complete!');
        console.log('Result:', output);
      })
      .catch(function (error) {
        console.log(error);
        assert.fail();
      });
  });
});
\`\`\`

The important things to note in the above test are:

- \`providerBaseUrl\`: This is the URL of the API server.

- \`pactUrls\`: This is the path to the pact file. The pact file is generated by the consumer side tests.

Run the provider verification test using the following command:

\`\`\`bash
npx jest tests/server.spec.js
\`\`\`

Result:
![Provider test result](/src/assets/ContractTestingWithPact/images/provider_test.png)

Congratulations! You have successfully written your first consumer driven contract test and provider verification test using _Pact_.
`,"/src/assets/LoadTestingWithK6/k6-01.md":`---
title: Performance Testing with k6 - 01 - Getting Started
authorName: Hari Bhandari
authorAvatar: https://avatars.githubusercontent.com/u/34328907?v=4
authorLink: https://github.com/HariBhandari07
createdAt: May 5, 2021
tags: k6, load, performance, testing
banner: https://buddy.works/_next/image?url=%2Fguides%2Fcovers%2Fk6-loadtesting%2Fk6-loadtesting-cover.png&w=1920&q=75
seriesTitle: Performance Testing with k6
episode: 1
---
Let's suppose your website/web-app/blog gets popular overnight ( Imagine Elon Musk tweeting about your web app ) and there's a massive spike in the number of visitors/users
 accessing your web app. This swelling traffic can overwhelm the web server causing an unintentional distributed denial of service (DDOS) attack. This is a nightmare scenario as people cannot access your web-app.

Now, how do we determine how many users your backend infrastructure can handle?

To answer that, and other performance questions, we have a couple of great performance-testing tools available out there. One of them is [k6](https://k6.io/)

### what is k6?
k6 is a free and open-source load testing tool written in Go programming language. But you don't need to know \`Go\` to write tests using k6.
If you are familiar with the basics of ES2015/ES6, you won't have any headache writing k6 tests.

### Installation
To install k6 in your local machine follow the instructions provided here https://k6.io/docs/getting-started/installation/

I am using ubuntu \`18.04\` but even if you are using another operating system you can follow along.

### Your first test:

k6 is based on the concept of \`virtual users\` (VUs) that is supposed to simulate the real-time traffic and then execute the script in parallel.

As a rule of thumb, each k6 script must contain at least an exported \`default\` function, unless you are using [Scenarios](https://k6.io/docs/using-k6/scenarios/).
This \`default\` function is the entry point for the VUs, similar to the \`main()\` function in Java and other programming languages.

Let's write a simple k6 script that makes a \`GET\` request to a test website:

\`Disclaimer: Make sure load testing is allowed by your web host so that you don't violate their terms of service. In our example, we will be testing a test website  https://test.loadimpact.com/\`

Create a file \`test.js\` and add the following content:
\`\`\`
import { check } from "k6";
import http from "k6/http";

export default function() {
  let response = http.get("https://test.loadimpact.com/");
  check(response, {
    "is status 200": (r) => r.status === 200
  });
};
\`\`\`

Unlike many other JavaScript runtimes, most of the operations in k6 are synchronous i.e. no need to use callbacks and promises.
For example;
\`\`\`
http.get(...).then(res =>....)
\`\`\`
OR
\`\`\`
let response = await http.get(....)
\`\`\`
is not needed and we can use synchronous code mentioned in \`test.js\` of our example.

### Running tests
Then run the k6 script using this command:
\`\`\`
k6 run test.js
\`\`\`

By default, if nothing is specified (as in the above command), k6 runs a script with only 1 VU and for 1 iteration only. It is useful for debugging, but it's not load testing.

Here a virtual user sends a \`get\` request to \`https://test.loadimpact.com/\` and the response status code is checked.

Now we'll run a k6 test with more than 10 virtual users and for a duration of 5 seconds:

\`\`\`
 k6 run --vus 10 --duration 5s test.js
 \`\`\`

![Screenshot from 2021-04-27 15-34-44](https://user-images.githubusercontent.com/34328907/116222217-1bd33600-a76e-11eb-8ea5-86874d07cb00.png)

From the above screenshot:
- \`checks = 100%\`: all of the test run passed
- \`vus = 10\`: 10 virtual users (as provided in the run command)
- \`iterations = 126\`: total number of iterations the test ran. This may vary with each run as we didn't specify the iterations ourself


Now, instead of doing \`--vus ... --durations .... --iterations....\` we can also \`export\` an \`options\` object to set any options that we want. For example:
\`\`\`
export let options = {
    vus: 10,
    duration: 5s
};
export default function() { .... }
\`\`\`


### what's next?
That all was nice and easy, but not very realistic. It does not matter if you want to test a web frontend or an API, just sending a GET requests does not simulate the user's behavior. In the next parts of this series, we will learn more about k6 in a more realistic way.
`,"/src/assets/LoadTestingWithK6/k6-02.md":`---
title: Performance Testing with k6 - 02 - Multiple Tasks
authorName: Hari Bhandari
authorAvatar: https://avatars.githubusercontent.com/u/34328907?v=4
authorLink: https://github.com/HariBhandari07
createdAt: May 5, 2021
tags: k6, load, performance, testing
banner: https://buddy.works/_next/image?url=%2Fguides%2Fcovers%2Fk6-loadtesting%2Fk6-loadtesting-cover.png&w=1920&q=75
seriesTitle: Performance Testing with k6
episode: 2
---
In the first part of this series we learnt about creating a very basic k6 test. In this tutorial we will create some more realistic and interesting tests.
 For that we better have a real App to test. For simplicity and because I'm familiar with it I've chosen [ownCloud](https://owncloud.com/), a file hosting and sharing
 solution similar to Dropbox.

The easiest way to get a test ownCloud instance up and running is to use docker.

Just run: \`docker run -p 8080:8080 --name owncloud owncloud/server\`.

This magic \`docker run\` command should give you a fresh ownCloud installation that can be reached at http://localhost:8080.

There is one user pre-setup called \`admin\` with the super-secure password \`admin\`. You can login into the UI and upload files, create new users, share files and folders, etc.
After having played a bit with ownCloud itself, let's get back to k6.

### Test Creating file
Create a file (\`script.js\`) and add the following contents
\`\`\`
import http from 'k6/http'
import encoding from 'k6/encoding'
import { check } from 'k6'
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'

export let options = {
  iterations: 100,
  vus: 10
}

export default function() {
  const fileName = \`\${uuidv4()}.txt\`
  const url = \`http://localhost:8080/remote.php/webdav/\${fileName}\`
  const body = 'some content'
  const headers = {
    'Authorization': 'Basic ' + encoding.b64encode('admin:admin'),
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  const response = http.request('PUT', url, body, { headers: headers })
  check(response, {
    'status is 201': (r) => r.status === 201 || 204
  })
}
\`\`\`

1. Here, in the \`options\` object we are providing \`iterations: 100\` and \`vus: 10\` i.e. 100 test runs will be divided among 10 vus. To specify how \`iterations\` is divided among \`vus\` we can provide \`executor\` options. For more details about executors check https://k6.io/docs/using-k6/scenarios/executors/

2. We are sending a \`PUT\` request to the owncloud endpoint to create a file. For authorization header we are using user \`admin\` with password \`admin\` that we created. So, basically the \`10 vus\` in options will be using \`admin\` user authorization

3. Since it's not possible to create multiple files with the same name in owncloud, we are using [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier) in \`fileName\`

### Test deleting file
\`\`\`
import http from 'k6/http'
import encoding from 'k6/encoding'
import { check } from 'k6'
import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.0.0/index.js'

export let options = {
  iterations: 100,
  vus: 10
}

const createFile = url => {
  const body = 'some content'
  const headers = {
    'Authorization': 'Basic ' + encoding.b64encode('admin:admin'),
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  const response = http.request('PUT', url, body, { headers: headers })
  check(response, {
    'status is 201': (r) => r.status === 201 || 204
  })
}

const deleteFile = (url) => {
  const headers = {
    'Authorization': 'Basic ' + encoding.b64encode('admin:admin')
  }
  const response = http.request('DELETE', url, undefined, { headers: headers })
  check(response, {
    'status is 204': (r) => r.status === 204
  })
}

export default function() {
  const fileName = \`\${uuidv4()}.txt\`
  const url = \`http://localhost:8080/remote.php/webdav/\${fileName}\`
  createFile(url)
  deleteFile(url)
}
\`\`\`

Here, we are adding code to delete a file. Also, I have separated the logic for file creation and deletion into two separate functions \`createFile\` and \`deleteFile\`.

### Settings Stages
We can ramp up/down the VU level during the test using \`stages\`  The \`options.stages\` property allows you to configure ramping behaviour.

\`\`\`
...
export let options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 }
  ]
}
...
\`\`\`
- First Stage(30s duration): Initially at the start will have 1 VU and then k6 will linearly ramp up from 1VU to 20VUs during the span of 30 seconds.
- Second Stage(1m30s duration): At the start of this stage we will have 20Vus from the first stage, but it will linearly ramp down to 10Vus at the end of the duration of this stage.
- Third Stage(20s duration): During this stage 10Vus from the second stage will linearly ramp down to zero at the end of 20 seconds.

Now if we run the test using \`k6 run script.js\`:

![Screenshot from 2021-04-28 09-08-56](https://user-images.githubusercontent.com/34328907/116341872-6baf0d00-a801-11eb-97a4-340fbeb165ee.png)

As shown in above screenshot our test runs for a total duration of \`2m20s\`(30s + 1m30s + 20s), while \`vus\` \`max\` is \`20\` (end of the first stage) and it's \`min\` is \`1\` which happens at the beginning of the first stage.

`,"/src/assets/Locust/locust-01.md":`---
title: Get Started
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Oct 30, 2019
tags: testing, performance, python, infrastructure
banner:
seriesTitle: Performance Testing with Locust
episode: 1
---

You have created your shiny-new webapp and deployed it, great! But how many customers can you serve with your infrastructure? How many users can your backend handle?
To answer those questions there are a couple of great performance-testing tools out there. One of them is [Locust](https://locust.io/)
The cool thing about locust is that you write your tests in plain python, so you can:
 - track your changes in git
 - test whatever you can code
 - don't have to use your mouse so much

Read [here](https://docs.locust.io/en/stable/what-is-locust.html#background) why locust was created in the first place

## Installation
 as simple as \`pip install locustio\` or \`pip3 install locustio\`

 (The rest of the blog I will assume you are using Python3)

## create your first test

create a file called \`locustfile.py\` with the content

\`\`\`
from locust import HttpLocust, TaskSet, task, between

class UserBehaviour(TaskSet):
    @task
    def getFrontPage(self):
        self.client.get("/")

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = between(1, 10)
\`\`\`

The class \`User\` represents users of your app. The class \`UserBehaviour\` is a collection of the actions these users do.
Every user will rerun the tasks every 1s till 10s \`wait_time = between(1, 10)\` The exact time between the requests will be chosen randomly.
Inside of the \`UserBehaviour\` class you define tasks, currently we have only one task, to send a \`GET\` request.

## run the tests

so lets start the beast:
\`/home/<your user>/.local/bin/locust --host=http://<host-to-test>\`
or
\`locust --host=http://<host-to-test>\`
if you have installed locust system-wide

Just make sure there is some HTTP server running under the given host

Now open http://localhost:8089/ in your browser
You will see two input fields, one to set the amount of users you want to simulate and one to tell locust how fast you want to ramp up the users

![Start new Locust swarm](/src/assets/Locust/images/locust-01-images/StartNewLocustSwarm.png)

Choose e.g. 20 users to simulate and 2 users/s as hatch rate and click "Start Swarming"

In the main screen you will now see some statistics about the amount of requests, and how long they took. In the "Charts" tab you will find the same data over time in a nice graph. "Failures" and "Exceptions" should be empty, because all of the requests should have succeeded. And last under "Download Data", you get the data as nice CSV files.

## what's next?

That all was nice and easy, but not very realistic. Does not matter if you want to test a web frontend or an API, just sending \`GET\` requests to \`/\` does not simulate what your users or clients will do. But we want to test what we fly and fly what we test. So in the next parts of this series we will extend the script to test an API in a more realistic way.
`,"/src/assets/Locust/locust-02.md":`---
title: Multiple Tasks
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Oct 30, 2019
tags: testing, performance, python, infrastructure
banner:
seriesTitle: Performance Testing with Locust
episode: 2
---

## Preparations

In [the first part of this series](https://dev.to/jankaritech/performance-testing-with-locust-01-get-started-pkk) we talked about creating a very basic locust performance test. Now we want to create some more realistic and interesting tests. For that we better have a real App to test. We could test any App that has an HTTP API. For simplicity and because I'm familiar with it I've chosen [ownCloud](https://owncloud.org/), a file hosting and sharing solution similar to Dropbox.

The easiest way to get a test ownCloud instance up and running is to use docker. Just run: \`docker run -p 8080:8080 --name owncloud owncloud/server\`. That magic command should give you a fresh ownCloud installation reachable under http://localhost:8080. There is one user pre-setup called \`admin\` with the super-secure password \`admin\`. You can login into the UI and upload files, create new users, share files and folders, etc.
OK, after having played a bit with ownCloud itself, let's get back to the performance tests, we actually want to learn about locust.

You should now be able to run the locust test from the first part via \`locust --host=http://localhost:8080\`, but as we said there, that is not a very realistic test. What would a user do with ownCloud? A main action would be download and upload files. Let's tests the performance of that.

## Test downloading a file

For file-operations ownCloud uses the [WebDAV](https://en.wikipedia.org/wiki/WebDAV) API. Starting from the locustfile we already have, we create a test for a file download.

\`\`\`
from locust import HttpLocust, TaskSet, task, constant

class UserBehaviour(TaskSet):
    userName = "admin"

    @task
    def downloadFile(self):
        self.client.get(
            "/remote.php/dav/files/" + self.userName + "/ownCloud%20Manual.pdf",
            auth=(self.userName, self.userName)
        )

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = constant(1)
  \`\`\`

Here we are simply running a \`GET\` on an existing file \`ownCloud Manual.pdf\` with the \`admin\` ownCloud-user.
Nice, and not much different from the first attempt.

Remember: when you change the locustfile, you have to stop and start locust to make sure the file is read again.

## Test uploading a file

Every TestSet can have multiple tasks, so adding an upload task should be easy:

\`\`\`
from locust import HttpLocust, TaskSet, task, constant

class UserBehaviour(TaskSet):
    userName = "admin"
    davEndpoint = "/remote.php/dav/files/" + userName

    @task
    def downloadFile(self):
        self.client.get(
            self.davEndpoint + "/ownCloud%20Manual.pdf",
            auth=(self.userName, self.userName)
        )

    @task
    def uploadFile(self):
        self.client.put(
            self.davEndpoint + "/locust-perfomance-test-file.txt",
            "my data",
            auth=(self.userName, self.userName)
        )

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = constant(1)
\`\`\`

Here we have a second task \`uploadFile\`, it's simply does a \`PUT\` request with a specific file-name and some data.
(To be more [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself), I've placed \`davEndpoint\` in a variable)

Locust will now run every task the same amount of times. But if you run that with enough locust-users (e.g. try 100) you will see the numbers in the \`# Fails\` column increase

![increased upload failures](/src/assets/Locust/images/locust-02-images/failureCountIncrease.png)

To see what happens, lets look into the "Failures Tab"
There we see the Failure "Type" \`HTTPError('423 Client Error: Locked for url: http://localhost:8080/remote.php/dav/files/admin/locust-perfomance-test-file.txt',)\`

We have been using one single ownCloud-user \`admin\` and 100 locust-users. During the write operation ownCloud locks a file, but every second \`wait_time = constant(1)\` a locust-user tries to over-write that single file. So there will be collisions and that is what the error says.

What about not overwriting the same file again and again, but uploading a new one every time?

\`\`\`
from locust import HttpLocust, TaskSet, task, constant
import uuid

class UserBehaviour(TaskSet):
    userName = "admin"
    davEndpoint = "/remote.php/dav/files/" + userName
    fileName = ''

    @task
    def downloadFile(self):
        self.client.get(
            self.davEndpoint + "/ownCloud%20Manual.pdf",
            auth=(self.userName, self.userName)
        )

    @task
    def uploadFile(self):
        if self.fileName == '':
            self.fileName = "/locust-perfomance-test-file" + str(uuid.uuid4()) + ".txt"
        self.client.put(
            self.davEndpoint + self.fileName,
            "my data",
            auth=(self.userName, self.userName)
        )

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = constant(1)
\`\`\`

Here we just set the fileName to a random string, but only if it has not been set before.

In the locust UI you should now see one \`PUT\` request per locust-user and hopefully no failures.
![single request per locust user](/src/assets/Locust/images/locust-02-images/requestPerUser.png)

## Weight of a task

Now we run every task equally often. But do users upload files as often as they download them?
Maybe, but maybe not - it depends on your situation and on what you want to test. Luckily locust gives your the freedom to choose.
e.g. if you want to simulate the situation that the downloads/read operation occurs 3 times more often that a upload/write operation just add a weight argument to the task

\`\`\`
...

@task(3)
def downloadFile(self):
    self.client.get(
        self.davEndpoint + "/ownCloud%20Manual.pdf",
        auth=(self.userName, self.userName)
    )

@task(1)
def uploadFile(self):
    if self.fileName == '':
        self.fileName = "/locust-perfomance-test-file" + str(uuid.uuid4()) + ".txt"
    self.client.put(
        self.davEndpoint + self.fileName,
        "my data",
        auth=(self.userName, self.userName)
    )
...
\`\`\`

Now most of your requests should be \`GET\`s.

Remember: when testing we try to be as close to reality as possible. [If your test is significantly different to reality, bad things might happen.](https://people.cs.clemson.edu/~steve/Spiro/arianesiam.htm)

## whats next?

We are still only using a single ownCloud user. The application might perform differently when using multiple users. We should create specific test-users before we run the test and ideally delete them at the end of the test run.
`,"/src/assets/Locust/locust-03.md":`---
title: Setup Your System
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Nov 27, 2019
tags: qa, performance, python, automation
banner:
seriesTitle: Performance Testing with Locust
episode: 3
---

In the [last part of this series](https://dev.to/jankaritech/performance-testing-with-locust-02-multiple-tasks-4ckn) we created multiple tasks to be able to simulate more realistically uploading and downloading files.

Now we want to go the next step and use multiple ownCloud users.

I will use the term "ownCloud user" for users that are set-up in the ownCloud system, have a username and password and can be used to login into the system. When I'm using the term "locust user" I'm talking about simulated users that hammer the server with requests. So far we used only one ownCloud user "admin" and multiple locust users. All locust users used that one ownCloud user to access the ownCloud server.

In this part of the series we want to have one ownCloud user for every locust user, so every \`TaskSet\` will be connecting with an own ownCloud user to the ownCloud server.

## setup and teardown
This situation is pretty common in any kind of automated testing, before starting the tests often you have to set your system up and bring it into a "testable" state, or simply into the state you want to test.
Basically all test frameworks will have some kind of \`setup\` and \`teardown\` methods or hooks. [Same applies to locust, you even can have a separate \`setup\` and \`teardown\` method in your Locust class and your TaskSet class.](https://docs.locust.io/en/stable/writing-a-locustfile.html#setups-and-teardowns)

consider this simple locust script

 \`\`\`\`
from locust import HttpLocust, TaskSet, task, constant

class UserBehaviour(TaskSet):
    def setup(self):
        print ("setup of TaskSet")

    def teardown(self):
        print ("teardown of TaskSet")

    @task(2)
    def one_task(self):
        print ("running one task")

    @task(1)
    def an_other_task(self):
        print ("running another task")

class User(HttpLocust):
    def setup(self):
        print ("setup of Locust class")

    def teardown(self):
        print ("teardown of Locust class")

    task_set = UserBehaviour
    wait_time = constant(1)
 \`\`\`\`

We have two tasks and a \`setup\` and a \`teardown\`, one in the \`User\` class and one in the \`UserBehavior\` class

Now lets see what happens.

1. Starting locust from the CLI:

   \`\`\`
    [2019-11-29 08:55:19,213] artur-OptiPlex-3050/INFO/locust.main: Starting web monitor at *:8089
    [2019-11-29 08:55:19,213] artur-OptiPlex-3050/INFO/locust.main: Starting Locust 0.13.2
   \`\`\`

2. Starting the test from the webUI with 2 users

   \`\`\`
    [2019-11-29 08:55:22,932] artur-OptiPlex-3050/INFO/locust.runners: Hatching and swarming 2 clients at the rate 1 clients/s...
    [2019-11-29 08:55:22,932] artur-OptiPlex-3050/INFO/stdout: setup of Locust class
    [2019-11-29 08:55:22,932] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout: setup of TaskSet
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:22,933] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:23,933] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:23,933] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:23,934] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:23,934] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/locust.runners: All locusts hatched: User: 2
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:24,934] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:24,935] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:25,935] artur-OptiPlex-3050/INFO/stdout:

    ...

    [2019-11-29 08:55:31,939] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:32,939] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout: running one task
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout: running another task
    [2019-11-29 08:55:33,940] artur-OptiPlex-3050/INFO/stdout:
   \`\`\`

3. Stopping the tests on the webUI

4. pressing \`Ctrl+C\` on the CLI

    \`\`\`
    ^C[2019-11-29 08:55:57,191] artur-OptiPlex-3050/ERROR/stderr: KeyboardInterrupt
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/ERROR/stderr: 2019-11-29T03:10:57Z
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/ERROR/stderr:
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/locust.main: Shutting down (exit code 0), bye.
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/locust.main: Cleaning up runner...
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/locust.main: Running teardowns...
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout: teardown of TaskSet
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout:
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout: teardown of Locust class
    [2019-11-29 08:55:57,191] artur-OptiPlex-3050/INFO/stdout:
    \`\`\`

Did you expect that? \`teardown\` only runs after locust is completely stopped, not when the test is stopped.
Makes sense, but does not help us with our issue, we want to create users before running the actual test and delete them afterwards. We might start and stop the test, without stopping locust and we can increase the locust users during the test and in that case we want to create more ownCloud users on the fly.

Luckily we have also \`on_start\` and \`on_stop\` methods

## create users with on_start

\`on_start\` is called when the locust user starts to run the TaskSet

Starting from the last script let's add an \`on_start\` method to create users
\`\`\`
from locust import HttpLocust, TaskSet, task, constant
import uuid

userNo = 0

class UserBehaviour(TaskSet):
    adminUserName = 'admin'
    davEndpoint = "/remote.php/dav/files/"
    fileName = ''
    userName = ''

    def on_start(self):
        #create user
        global userNo
        self.userName = "locust" + str(userNo)
        userNo = userNo + 1
        self.client.post(
            "/ocs/v2.php/cloud/users",
            {"userid": self.userName, "password": self.userName},
            auth=(self.adminUserName, self.adminUserName)
        )

    @task(3)
    def downloadFile(self):
        self.client.get(
            self.davEndpoint  + self.userName + "/ownCloud%20Manual.pdf",
            auth=(self.userName, self.userName)
        )

    @task(1)
    def uploadFile(self):
        if self.fileName == '':
            self.fileName = "/locust-perfomance-test-file" + str(uuid.uuid4()) + ".txt"
        self.client.put(
            self.davEndpoint + self.userName + self.fileName,
            "my data",
            auth=(self.userName, self.userName)
        )

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = constant(1)
\`\`\`

So what is new here?

The \`on_start\` method first constructs a ownCloud username out of "locust" & a number. The \`userNo\` variable has to be defined globally, so that it survives when locust initialize the next instance of the \`User\` class. Remember: the \`Locust\` class (\`HttpLocust\` inherits from \`Locust\`) represents one simulated user that accesses your application.

Next a \`POST\` request is send with the username as userid and password. That requests needs to be authenticated as the admin-user. ([Check the ownCloud docu if you are interested to learn more about those requests.](https://doc.owncloud.com/server/10.0/admin_manual/configuration/user/user_provisioning_api.html))

At last there is the \`davEndpoint\`, now it needs the specific username, so that information has been moved into the specific \`GET\` and \`PUT\` method.

If you run that script now with locust and start a test with, lets say 3 users, you should see something like that:
![users created in locust](/src/assets/Locust/images/locust-03-images/createUsersLocust.png)

The first line tells us that 3 \`POST\` requests have been sent to \`/ocs/v2.php/cloud/users\`, that looks promising.
And in the \`PUT\` ans \`GET\` requests, the usernames "locust0" till "locust2" are mentioned, very good!

Now lets look into the users list of ownCloud. For that login with "admin" / "admin" to http://localhost:8080/ and in the top right corner click on "admin" and then on "Users".

![owncloud users list](/src/assets/Locust/images/locust-03-images/owncloudListUsers.png)

Those three users were created and used. If you want to double check use them to login to ownCloud, you should see the uploaded file.

## delete users with on_stop
The only thing left is to clean up after us. Obviously we can simply kill the docker container, delete it and start it fresh with no users, but wouldn't it be nice to delete the users after stopping the test?

Let's use \`on_stop\` to clean up! It is run when the TaskSet is stopped.

Just add a simple small method to the \`UserBehaviour\` class:

\`\`\`
def on_stop(self):
    self.client.delete(
        "/ocs/v2.php/cloud/users/" + self.userName,
        auth=(self.adminUserName, self.adminUserName)
    )
\`\`\`

Remember to delete the users from ownCloud before rerunning the script (or just do \`docker kill owncloud; docker rm owncloud\` and start it again)

Now when you start the test and stop it again, you will see \`DELETE\` requests in the list, one per hatched locust user.
But what's that? The \`DELETE\` requests fail with \`HTTPError('401 Client Error: Unauthorized for url: http://localhost:8080/ocs/v2.php/cloud/users/locust0',)\`

Digging deeper (e.g. with WireShark) shows that the requests not only had the correct Authorization header sent, but also some cookies.
\`\`\`
DELETE /ocs/v2.php/cloud/users/locust0 HTTP/1.1
Host: localhost:8080
User-Agent: python-requests/2.22.0
Accept-Encoding: gzip, deflate
Accept: */*
Connection: keep-alive
Cookie: cookie_test=test; oc1j5vb7hdm0=q2mv4lb5f2b37ti3etn8s1e0f1; oc_sessionPassphrase=y2u2sfTFfk8xx4cyIQZbycNvit4q0ZcKr4nHiiA7vSrGN%2BOZI30Ruvf3B5NyZrAxwtDNGz1wI7F6Yb2gjGsn%2FCnZ8Xpw3U8qRur1NrNcpJv%2Bm9egvmUiflwp3j7Rd3IG
Content-Length: 0
Authorization: Basic YWRtaW46YWRtaW4=
\`\`\`

locust got those cookies from the first \`GET\` request we have sent as the specific ownCloud user, and it has kept them for all future requests. Generally that is a good thing, but ownCloud now ignores the Authorization header and uses the cookies to authenticate. So we effectively authenticate as the specific ownCloud user e.g. \`locust0\` and that user has no privilege to delete itself.

I could not find a way to clear the session, so we need a new one.
For that change the \`on_stop\` function to:

\`\`\`
def on_stop(self):
    from locust.clients import HttpSession
    self.admin_client = HttpSession(base_url=self.client.base_url)
    self.admin_client.delete(
        "/ocs/v2.php/cloud/users/" + self.userName,
        auth=(self.adminUserName, self.adminUserName)
    )
\`\`\`

Here we import the locust \`HttpSession\` class and use it to create a new session, with no cookies in our way.

And here we go, when starting and stopping the tests we have successful \`DELETE\` requests. One per hatched locust user.

![successfull user deletion](/src/assets/Locust/images/locust-03-images/deleteSuccess.png)

## what's next?
We have now some basic tests, now it's time to look closer into the metrics and try to understand the meaning of all the numbers locust throws at us.
`,"/src/assets/Locust/locust-04.md":`---
title: Interpret the Result
authorName: Artur Neumann
authorAvatar: https://www.jankaritech.com/images/2019/06/11/p1070364-c-light-800.jpg
authorLink: https://github.com/individual-it
createdAt: Jan 14, 2020
tags: qa, performance, python, testing
banner:
seriesTitle: Performance Testing with Locust
episode: 4
---

In the last posts of this series we setup locust and made some basic performance tests to test the ownCloud WebDAV-API. This time we will try to make some sense of the locust output.

Here is the locust file we are using:
\`\`\`
 from locust import HttpLocust, TaskSet, task, constant
import uuid

userNo = 0

class UserBehaviour(TaskSet):
    adminUserName = 'admin'
    davEndpoint = "/remote.php/dav/files/"
    fileName = ''
    userName = ''

    def on_start(self):
        #create user
        global userNo
        self.userName = "locust" + str(userNo)
        userNo = userNo + 1
        self.client.post(
            "/ocs/v2.php/cloud/users",
            {"userid": self.userName, "password": self.userName},
            auth=(self.adminUserName, self.adminUserName)
        )

    def on_stop(self):
        from locust.clients import HttpSession
        self.admin_client = HttpSession(base_url=self.client.base_url)
        self.admin_client.delete(
            "/ocs/v2.php/cloud/users/" + self.userName,
            auth=(self.adminUserName, self.adminUserName)
        )

    @task(3)
    def downloadFile(self):
        self.client.get(
            self.davEndpoint  + self.userName + "/ownCloud%20Manual.pdf",
            auth=(self.userName, self.userName)
        )

    @task(1)
    def uploadFile(self):
        if self.fileName == '':
            self.fileName = "/locust-perfomance-test-file" + str(uuid.uuid4()) + ".txt"
        self.client.put(
            self.davEndpoint + self.userName + self.fileName,
            "my data",
            auth=(self.userName, self.userName)
        )

class User(HttpLocust):
    task_set = UserBehaviour
    wait_time = constant(1)
\`\`\`

To start ownCloud we have used docker: \`docker run -p 8080:8080 --name owncloud owncloud/server\`

and then started locust with: \`locust --host=http://localhost:8080\`

## test the right thing

When I now run both ownCloud and locust on my workstation (i5-7500 CPU @ 3.40GHz; 8GB RAM) and hatch 100 locust-users I get this graph:

![locust output when running app and locust on same computer](/src/assets/Locust/images/locust-04-images/locust-running-on-same-computer.png)

But now have a look at the CPU usage (on Linux the easiest way to see it is to use the \`top\` command)
![CPU usage when running app and locust on same computer](/src/assets/Locust/images/locust-04-images/top-locust-uses-resources.png)

WOW, 61.7% CPU is used by locust itself. I'm not really testing the performance of ownCloud (or not alone). Beside locust gnome, X and Firefox are eating up a significant amount of resources, so the results will never be accurate. Better get some dedicated hardware to run ownCloud on.

I have here an old Lenovo X201 Laptop (i5 M 540 CPU @ 2.53GHz; 4GB RAM). Not really fast, but should be OK for this example. I will run ownCloud on that Laptop and locust on my workstation. That way hatching 100 users still eats up the same amount of resources on the workstation, but because its fast enough that should not be the limiting factor. We really don't want the test-runner computer to limit our performance tests. If you don't have a computer that is fast enough to fully load your SUT (System Under Test), you can run [locus distributed](https://docs.locust.io/en/stable/running-locust-distributed.html) and that way utilize multiple computers to fully load your SUT.

## interpret the results

Lets start the tests and increase the amount of users.
I started the test with 20 users and 1 user/s hatch rate, then increased the users to 50 with 2 users/s hatch rate and finally to 100 users with 4 users/s hatch rate.

In the response-time graph the green line shows the median response time and the yellow one the 95th percentile (95% of the requests finish before that time).

To calculate the *current* response time a sliding window of (approximately) the last 10 seconds is used see: [get_current_response_time_percentile function](https://github.com/locustio/locust/blob/6ba31c83acae6d26297a23de0eaaef34b3838330/locust/stats.py#L504).

As you can see, the median response time goes up as we add more users. And there is a "bump" in the 95th percentile line every time new users are created. So it looks like user creation is "expensive". (The "bump" is also visible in the median-line, but not that obvious).
![response time vs users](/src/assets/Locust/images/locust-04-images/increasing-users-increased-response-time.png)

Rerunning the tests shows a similar result.

BTW: Because there is always other stuff happening on the server its always good to run performance tests multiple times and see if you get similar results.

So from that information, how many users can our system handle? Maybe the better question is how long do you want your user to wait? In our test-scenario the user sends one request every second, either a download or an upload request. The download request appears 3 times more often than the upload (see "Weight of a task" in the [multiple tasks](https://dev.to/jankaritech/performance-testing-with-locust-02-multiple-tasks-4ckn) part).
If our server tries to serve 20 such users, 95% of the time it will be able to respond within 400-450ms or less (not taking the user-creation into account, in normal life we would not create new users all the time). When trying to serve 50 concurrent users, 95% of the time it will be able to respond within 1600-1800ms or less. And half of the time (median response time) users will have to wait for around 1000ms or more for a response. For 100 users that obviously looks even worse, 95th percentile is around 6000ms and median response time around 3200ms.

Would it be acceptable for your application to let the user wait for 3sec or more for half of the requests? If not, you need to optimize the software or buy more hardware.

To see more details and maybe make more analysis download the CSV data and open in a spreadsheets app.
These files have one line per request type & URL, because we have the username in the URL, there will be a lot of lines.

In the request statistics CSV file we have the median/average/min/max response time for all uploads user0 has done, and all uploads user1 has done and so on. We can e.g. calculate the average response time of all uploads with the formula \`=AVERAGEIF(A2:A301;"PUT";F2:F301)\` (tested with [LibreOffice](https://www.libreoffice.org)). Column A holds the method name, column F is the average response time and in my table there are 301 lines.

Be aware that this list will now hold ALL the results, from the time when we had 20 users, 50 users and 100 users, so if we want to know the average response time of uploads with a particular amount of users, we would have to rerun the test with a fixed amount of users and not change it in between.

## optimization

When we have started the ownCloud docker container, it created an database and for that it used SQlite database, that is good for quick testing and evaluation, but its soooo slow. Have a look at the [documentation](https://doc.owncloud.com/server/10.3/admin_manual/installation/system_requirements.html#server), ownCloud says SQLite is not for production and recommends to use MySQL or MariaDB.
The simplest way to start ownCloud with MariaDB is to use [docker-compose](https://docs.docker.com/compose/) as described [here](https://doc.owncloud.com/server/admin_manual/installation/docker/). In addition you also receive a Redis server, to do some caching.

Running that proposed setup on my system shows that it improves the response time a lot when running with 20 users, the 95th percentile goes down to 220-250ms (vs 400-450 before), there is also some improvement when running with 50 users, but when running with 100 users, it actually gets worse (median 5200-6000ms and 95th percentile is often over 7000ms).

More tests showed that with 15 concurrent users there is still 20-30% CPU time left most of the time, but with 20+ users the CPU is basically flat out.
Another interesting finding is, that in the area around 15 users the CPU is still not fully utilized, but the hard-drive works already pretty hard (see \`iotop\`). My guess is that when running with <= 15 users a faster hard-drive, e.g. a SSD would improve the performance, but with more than 20 users an SSD would be a waste of money, because even if the data would arrive faster at the CPU, it struggles to do its calculation.

## cross-check

Let's see if we can prove our assumption that ~15 users should be the max for our system. I'm simmulating 30 users, but with a hatch-rate of 0.025 users/sec (I want to give the system enough time to create the user and to refresh the sliding window for the chart after user-creation).

Looking at the graph I see that up to ~10 users the median time does not change much (160-180ms), looking at the output of \`top\` at the same time I see that there is still a lot of CPU time unused and even with 14-15 users, the median time goes down to 190ms. After that pretty flat area in the graph, it goes up pretty steep, the CPU is totally flat out.

Also have a look at the "Total Requests per Second" graph. Up to 15 users it steadily climbs up, but then there are valleys and hills, but the system struggles to serve more requests/s.

![slowly increasing the number of users](/src/assets/Locust/images/locust-04-images/slowly-increasing-num-of-users.png)

## conclusion

1. The system scales well up to 15 users, meaning the single user would not experience any performance issues up to 15 concurrent users. Also the user would not experience any faster system if she is the only user on the system.
2. Up to 15 users the system can be optimized by using a better DB, caching, faster HDD and memory
3. Above 15 users, the CPU is the bottleneck and working on the suggestions in point 2, would not help.
`,"/src/assets/Playwright/Playwright-intro.md":`---
title: Behavior Driven Development (BDD) using Playwright
authorName: Swikriti Tripathi
authorAvatar: https://avatars.githubusercontent.com/u/41103328?v=4
authorLink: https://github.com/SwikritiT
createdAt: Feb 7, 2022
tags: playwright, testing, e2e, javascript
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--M3gPfKHX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swetkwdnkxp39lkevjea.png
---
Playwright is an open-source NodeJS framework for browser automation. It is developed by Microsoft and the development team has members that were involved in developing [Puppeteer](https://github.com/puppeteer/puppeteer) for Google.

One of the main features of Playwright is that it can automate Chromium, Webkit, and Firefox browsers with a single API. Along with being cross-browser, it is cross-platform and cross-language, supporting the major OS like Windows, Linux, Mac and languages like TypeScript, JavaScript, Python, .NET, Java. Playwright also comes with tools like codgen - which lets you generate automatic code by recording your actions, you can find out more about Playwright on their [official website](https://playwright.dev/).

For this blog, we will be implementing BDD in Playwright. I have a small to-do web app and I'm going to be setting up Playwright in the same. If you want to follow through you can fork and clone the project from [here](https://github.com/SwikritiT/todo). If you have your web application you can set up Playwright there as well. Let's get started!

*Note: the whole setup is done in Ubuntu 20.04.3 LTS, so some setup steps might differ depending on your platform*

## Prerequisites

- Node.js version 12 or above. If you don't already have node installed in your system you can use this [blog as a guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

*Note Only Ubuntu 18.04 and Ubuntu 20.04 are officially supported.*


## Installation

*Run from your project's root directory*
\`\`\`bash
   npm i -D @playwright/test
   npm i -D playwright
   npx playwright install
 \`\`\`
Playwright doesn't come with the built-in support for BDD so we are going to use the help of another tool [Cucumber](https://cucumber.io/)
 \`\`\`bash
   npm i -D @cucumber/cucumber@7.3.1 @cucumber/pretty-formatter
\`\`\`
After this, \`devDependencies\` in your \`package.json\` should look something like this
\`\`\`json
// package.json file

"devDependencies": {
    "@cucumber/cucumber": "^7.3.1",
    "@cucumber/pretty-formatter": "^1.0.0-alpha.1",
    "@playwright/test": "^1.18.0",
    "playwright": "^1.18.1"
  }
\`\`\`

## Configuration
We are going to use \`Cucumber\` to run our tests so we need to have a configuration file for it. At the root level of your project create a file \`cucumber.conf.js\`

First of all, we are going to require the following:
\`\`\`js
// cucumber.conf.js file

const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
// you can choose other browsers like webkit or firefox according to your requirement
const { chromium } = require("playwright");
\`\`\`

Set default timeout to some reasonable amount of time
\`\`\`js
// cucumber.conf.js file

// in milliseconds
setDefaultTimeout(60000)
\`\`\`
Add the following code snippet to your file
\`\`\`js
// cucumber.conf.js file

// launch the browser
BeforeAll(async function () {
   global.browser = await chromium.launch({
       headless: false,
       slowMo: 1000,
   });

});

// close the browser
AfterAll(async function () {

   await global.browser.close();
});
\`\`\`
In the above snippet of code, we launch a \`chrome\` browser where our tests will be automated. You can launch a different one as per your requirement, just make sure you import the correct browser. We run the browser in the headed mode which can be done by setting \`headless:false\`, this means that when the test is running we can see it being automated in the browser. You can set it to \`true\` if you don't want to see the test running but where is the fun in that? Another option is \`slowMo\` which slows down Playwright operations by the specified amount of milliseconds and can be helpful to watch the test run. There are various options that can be set while launching the browser, you can go through all of them [here](https://playwright.dev/docs/api/class-browsertype#browser-type-launch). After we've finished our operations we will close the browser. This configuration is for before/after all of the tests are run. Now we need to configure what happens when each test scenario is run. For this look at the snippet below:

\`\`\`js
// cucumber.conf.js file

// Create a new browser context and page per scenario
Before(async function () {
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
   await global.page.close();
   await global.context.close();
});

\`\`\`
After we've launched our browser we need to create a new browser context. Playwright allows creating \`incognito\` browser contexts with \`browser.newContext([options])\` method. Each browser context has its page that provides methods to interact with a single tab in a browser. We can create a page with \`context.newPage()\` method. Similar to launching a browser we can set a lot of options while creating a \`browser context\` as well like screenshots, record video,  geolocation, and more, you can go through all of them [here](https://playwright.dev/docs/api/class-browser#browser-new-context). After we've finished with our operations we close the \`page\` and \`context\`.

*Voila*, we're done with the configuration part. The whole \`cucumber.conf.js\` file looks like this :
\`\`\`js
// cucumber.conf.js file

const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
   global.browser = await chromium.launch({
       headless: false,
       slowMo: 1000,
   });

});

// close the browser
AfterAll(async function () {

   await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
   global.context = await global.browser.newContext();
   global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
   await global.page.close();
   await global.context.close();
});

\`\`\`
## Writing Tests

**Now some fun stuff, we start writing tests!**

Our file structure will look like this

\`\`\`
\u{1F4E6}tests
\u2517 \u{1F4C2}acceptance
\u2503 \u2523 \u{1F4C2}features
\u2503 \u2503 \u2517 \u{1F4DC}todo.feature
\u2503 \u2517 \u{1F4C2}stepDefinitions
\u2503 \u2503 \u2517 \u{1F4DC}todoContext.js

\`\`\`

Following the above tree create file \`tests/acceptance/features/todo.feature\`. As we are using BDD, we are going to start by writing a feature file and we are going to be using \`Gherkin\` language to do so. If you don't know how to write a feature file or what \`Gherkin\` is you can take the help of the following blogs as it's out of the scope of this blog and won't be explained in detail.

- [cucumber BDD](https://cucumber.io/docs/gherkin/reference/)
- [BDD \u2013 An introduction to feature files](https://www.modernanalyst.com/Resources/Articles/tabid/115/ID/3871/BDD-An-introduction-to-feature-files.aspx)

Here's a basic syntax of what a feature file looks like
\`\`\`feature
Feature: a short description of a software feature
As a user
I want to do this
So I can achieve that

Scenario: name of the scenario
Given [Preconditions or initial context of the system ]
When [Event or action]
Then [Expected output]
\`\`\`

Now assuming you've got some knowledge of feature files and how to write them we proceed further.

The application that I'm going to be testing is a todo app and the UI looks like this.

![Homepage of the app](/src/assets/Playwright/images/todo1.png "Todo application")

I want to test if the item I've added is displayed on the UI or not. And the feature file looks like this.

\`\`\`feature
// todo.feature

Feature: todo
 As a user
 I want to add an item to the todo list
 So that I can organize tasks

 Scenario: Add item to the todo list
   Given a user has navigated to the homepage
   # the text inside the quote works as a variable that can be passed to a function
   When the user adds "test" to the todo list using the webUI
   Then card "test" should be displayed on the webUI
\`\`\`
Now we implement each step of the scenario using Playwright! Create a context file \`tests/acceptance/stepDefinitions/todoContext.js\`. We can get a boilerplate for each step in the scenario where we can provide our implementation. For that add the following script in your \`package.json\` file.

\`\`\`json
"test:e2e": "cucumber-js --require cucumber.conf.js --require tests/acceptance/stepDefinitions/**/*.js --format @cucumber/pretty-formatter"

\`\`\`
We will be using the \`test:e2e\` script for running the test. Now go to your terminal and run the script

\`\`\`bash
npm run test:e2e tests/acceptance/features/todo.feature
\`\`\`

This will run your feature file. As the steps aren't implemented yet you will get something like this on your screen.

\`\`\`console
? Given a user has navigated to the homepage
      Undefined. Implement with the following snippet:

        Given('a user has navigated to the homepage', function () {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

  ? When the user adds "test" to the todo list using the webUI
      Undefined. Implement with the following snippet:

        When('the user adds {string} to the todo list using the webUI', function (string) {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

  ? Then card "test" should be displayed on the webUI
      Undefined. Implement with the following snippet:

        Then('card {string} should be displayed on the webUI', function (string) {
          // Write code here that turns the phrase above into concrete actions
          return 'pending';
        });

\`\`\`
You can now add the generated snippets into your context file and start implementing them.

Import following
\`\`\`js
// todoContext.js file

const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");
\`\`\`
Define your launch url and selectors for different UI elements as per need, these are project specific. Playwright supports CSS and Xpath selectors. You can find the detailed information about them [here](https://playwright.dev/docs/selectors)

\`\`\`js
// todoContext.js file

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.borderTodo'
const todoInput = '.todo-input';
const todoButton = '.todo-button';
const todoItem = '.todo .todo-item ';
\`\`\`

Now we can implement the individual test steps, like so

\`\`\`js
// todoContext.js file

Given('a user has navigated to the homepage', async function () {
   // navigate to the app
   await page.goto(url)
   // locate the element in the webUI
   const locator = page.locator(homepageElement)
   // assert that it's visible
   expect(locator).toBeVisible()
})

When('the user adds {string} to the todo list using the webUI',async function (item) {
   // fill the item that was input from the feature file , to the inputText field in the UI
   await page.fill(todoInput , item)
   // click the button
   await page.click(todoButton)
})

Then('card {string} should be displayed on the webUI',async function (item) {
   // get text of the item that is visible in the UI
   const text = await page.innerText(todoItem)
   // assert that its name is similar to what we provided
   expect(text).toBe(item)
})

\`\`\`
You can find different methods available to interact with UI elements like click, fill and so on in [Playwright's official documentation](https://playwright.dev/docs/api/class-playwright), it's very nicely explained how the function works along with the example code.

We use the \`page\` that we created in the \`before\` hook to interact with various web elements. Playwright performs [autowait](https://playwright.dev/docs/actionability) and performs a range of actionability checks on elements and ensures that elements are ready to perform the expected operation. This is one of its plus points.

This is the whole context file
\`\`\`js
// todoContext.js file

const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

//launch url
const url = 'http://localhost:3000'

//define selectors
const homepageElement = '.borderTodo'
const todoInput = '.todo-input'
const todoButton = '.todo-button'
const todoItem = '.todo .todo-item '


Given('a user has navigated to the homepage', async function () {
   // navigate to the app
   await page.goto(url)
   // locate the element in the webUI
   const locator = page.locator(homepageElement)
   // assert that it's visible
   expect(locator).toBeVisible()
})

When('the user adds {string} to the todo list using the webUI',async function (item) {
   // fill the item that was input from the feature file , to the inputText field in the UI
   await page.fill(todoInput , item)
   // click the button
   await page.click(todoButton)
})

Then('card {string} should be displayed on the webUI',async function (item) {
   // get text of the item that is visible in the UI
   const text = await page.innerText(todoItem)
   // assert that its name is similar to what we provided
   expect(text).toBe(item)
})

\`\`\`

## Run the test
First of all, you need to run your application, in my case

\`\`\`bash
npm run start
\`\`\`
Now run the test and watch it in the browser

\`\`\`bash
npm run test:e2e tests/acceptance/features/todo.feature
\`\`\`
You should get a log similar to this one.

\`\`\`console
Feature: todo # tests/acceptance/features/todo.feature:1

 As a user
 I want to add an item to the todo list
 So that I can organize tasks

 Scenario: Add item to the todo list # tests/acceptance/features/todo.feature:6
   Given a user has navigated to the homepage
   When the user adds "test" to the todo list using the webUI
   Then card "test" should be displayed on the webUI

1 scenario (1 passed)
3 steps (3 passed)
0m04.266s (executing steps: 0m04.010s)
\`\`\`

Hopefully, your test also passed like mine and you got to learn about a new library.
You can extend the feature file to add more scenarios or add multiple feature files, implement the Page Object Model as per your requirement and it should all work the same.

You can find the source code of this implementation [here](https://github.com/SwikritiT/todo/tree/playwright-blog)

`,"/src/assets/TestingWithCypress/cypress_blog_1.md":`---
title: Introduction
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: vue, jest, unit, testing
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--hbLLUL0d--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9amku7k0nxfs6vx9p8tk.jpg
seriesTitle: E2E Testing with Cypress
episode: 1
---

## Testing with Cypress

The web has evolved. Finally, testing has too. \`Cypress\` provides fast, easy and reliable testing for anything that runs in a browser.

### Introduction

Cypress provides a complete end-to-end testing experience. Until now, end-to-end testing was not easy. It was the part developers always hated but \`not anymore\`. Cypress makes setting up, writing, running and debugging tests easy.

#### Who uses Cypress?

\`Cypress\` users are typically developers or QA engineers building web applications using modern JavaScript frameworks.

Cypress enables you to write all type of tests:

- End-to-end tests
- Integration tests
- Unit tests

Cypress can test anything that runs in a browser.

####  How Cypress is different ?

![Cypress Architecture][architecture]

- ###### Cypress does not use Selenium

  The architecture is completely different. Most end-to-end testing tools operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as your application. Behind Cypress is a \`Node.js\` server process. Cypress and the Node.js process constantly communicate, synchronize and perform tasks on behalf of each other. Having access to both parts (front and back) gives us the ability to respond to your application\u2019s events in real time, while at the same time, work outside of the browser for tasks that require a higher privilege.

- ###### Cypress tests are only written in JavaScript

  Cypress tests anything that runs in a web browser. All the architecture surrounding Cypress is built to handle modern JavaScript frameworks especially well. We have hundreds of projects using the latest \`React\`, \`Angular\`, \`Vue\`, \`Elm\`, etc. frameworks. Cypress also works equally well on older server rendered pages or applications.

- ###### Cypress is all in one

  Writing end-to-end tests takes a lot of different tools to work together. With Cypress, you get multiple tools in one. There is no need to install 10 separate tools and libraries to get your test suite set up. We have taken some best-in-class tools you are likely already familiar with and made them all work together seamlessly.

- ###### Cypress is for developers and QA Engineers

  One of our goals was to make test-driven development a reality for end-to-end testing. Cypress is at its best when you use it as you build your application. We give you the power to code as fast as possible.

- ###### Cypress runs much, much faster

  These architectural improvements unlock the ability to do TDD with full end-to-end tests for the very first time. Cypress has been built so that testing and development can happen simultaneously. You can develop faster while driving the entire dev process with tests because: you can see your application; you still have access to the developer tools; and changes are reflected in real time. The end result is that you will have developed more, your code will be better, and it will be completely tested. If you opt for our Dashboard Service, parallelization and automated load balancing will further supercharge your test speeds.

#### Features

- **Time Travel:**

  Yes, you heard it right. Time travel is finally possible. Cypress takes \`snapshots\` as your tests run. Hover over the commands in the \`Command Log\` to see exactly what happened at each step.

- **Real Time Reloads:**

  Cypress automatically reloads whenever you make changes to your tests. See commands execute in real time in your application.

- **Automatic Waiting:**

  Never add \`waits\` or \`sleeps\` to your tests. Cypress automatically waits for commands and assertions before moving on. No more \`async\` hell.

- **Spies, Stubs & Clocks:**

  Verify and control the behavior of \`functions\`, \`server responses\` or \`timers\`. The same functionality you love from unit testing is right at your fingertips.

- **Network Traffic Control:**

  Easily \`control\`, \`stub\`, and \`test\` edge cases without involving your server. You can stub network traffic however you like.

- **Screenshot and Videos:**

  View \`screenshots\` taken automatically on failure, or \`videos\` of your entire test suite when run from the \`CLI\`.

- **Cross Browser Testing:**

  ![Cross Browser Testing Platforms for Cypress][cypressCrossBrowserPlatforms]

  Run tests within \`Firefox\` and \`Chrome-family\` browsers (including \`Edge\` and \`Electron\`) locally and optimally in a continuous integration pipeline.

  ![Cross Browser Testing with Cypress][cypressCrossBrowserTesting]

### Installation And Requirements

- #### System Requirement

    - ##### OS

        Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:

        - **macOS**: 10.9 and above (64-bit only)
        - **Linux**: \`Ubuntu\` 12.04 and above, Fedora 21 and \`Debian\` 8 (64-bit only)

            - For \`Ubuntu\`/\`Debian\`
                \`\`\`bash
                sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
                \`\`\`

            - For \`CentOS\`

                \`\`\`bash
                yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
                \`\`\`

        - **Windows**: 7 and above

- ##### Node.js

    If you're using \`npm\` to install Cypress, then
        \`\`\`
        Node.js 10 or 12 and above
        \`\`\`

- #### Installing

    The recommended approach is to install Cypress with \`npm\` because :

    - Cypress is versioned like any other dependency.

    - It simplifies running Cypress in Continuous Integration.

    \`\`\`sh
    cd /your/project/path
    npm install cypress --save-dev
    \`\`\`
    Or, you could always install with \`yarn\`
    \`\`\`sh
    cd /your/project/path
    yarn add cypress --dev
    \`\`\`

- #### Opening Cypress

     If you used \`npm\` to install, \`Cypress\` has now been installed to your \`./node_modules\` directory, with its binary executable accessible from \`./node_modules/.bin\`.

    Now you can open \`Cypress\` from your project root one of the following ways:

    - Use the shortcut using \`npm bin\`
        \`\`\`sh
        $(npm bin)/cypress open
        \`\`\`

    - Adding npm scripts

        Inside your \`package.json\` file:

        \`\`\`json
        {
            "scripts": {
            	"cypress:open": "cypress open"
            }
        }
        \`\`\`

        Now you can invoke the command from your project root like so:

        \`\`\`shell
        npm run cypress:open
        \`\`\`

    - You can always use other options like \`yarn\` or \`npx\` to open Cypress.

        \`\`\`bash
        # using yarn
        yarn run cypress open
        # using yarn
        npx cypress open
        \`\`\`

\u{1F389} Great job! You can now write and run your test using Cypress Desktop Test Runner.  \u{1F973} \u{1F64C}

<!-- assets -->
[architecture]: /src/assets/TestingWithCypress/images/cypres_architecture.png "How cypress is different from existing selenium based tools?"
[cypressCrossBrowserPlatforms]: /src/assets/TestingWithCypress/images/cypress_cross_browser_platforms.png "Cross Browser Testing platforms supported by Cypress."
[cypressCrossBrowserTesting]: /src/assets/TestingWithCypress/images/cypress_cross_browser_testing.png "Cypress test runner provides dropdown to switch between browsers for test."
`,"/src/assets/TestingWithCypress/cypress_blog_2.md":`---
title: Writing Tests
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: testing, javascript, automation, cypress
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--wD1Dk_BA--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/472k6ih1n456rtvn4xb3.png
seriesTitle: E2E Testing with Cypress
episode: 2
---

## Setting up test

There are no servers, drivers, or any other dependencies to install or configure. You can write your first passing test in seconds.

## Add a test file

Assuming you've successfully installed the Test Runner and opened the Cypress application, now it's time to write our first test. We are going to:

1. Create a \`sample_spec.js\` file.
2. Watch Cypress update the list of specs
3. Launch the Cypress Test Runner

Let\u2019s create a new file in the cypress/integration folder that was created for us:

\`\`\`sh
touch {your_project}/cypress/integration/sample_spec.js
\`\`\`

Once we\u2019ve created that file, we should see the Cypress Test Runner immediately display it in the list of Integration Tests. Cypress monitors your spec files for any changes and automatically displays any changes.

Even though we haven\u2019t written any tests yet - that\u2019s okay - let\u2019s click on \`sample_spec.js\` and watch Cypress launch your browser.

We are now officially in the Cypress Test Runner. This is where we will spend the majority of our time testing.

>**Notice:** Cypress displays the message that it couldn't find any tests. This is normal - we haven\u2019t written any tests! Sometimes you\u2019ll also see this message if there was an error parsing your test file. You can always open your \`Dev Tools\` to inspect the Console for any syntax or parsing errors that prevented Cypress from reading your tests.

![No tests Found!][noTestsFound]

## Add your test

### Let's add our first passing test

Open up your favorite \`IDE\` and add the code below to our \`sample_spec.js\` test file.

\`\`\`js
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})
\`\`\`

Once you save this file you should see the browser reload.

Although it does not do anything useful, this is our first passing test! \u2705

Over in the Command Log you\u2019ll see Cypress display the suite, the test and your first assertion (which should be passing in green).

### Now let\u2019s write our first failing test.

\`\`\`js
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})
\`\`\`

Once you save again, you\u2019ll see Cypress display the failing test in red since \`true\` does not equal \`false\`.

Cypress also displays the \`stack trace\` and the \`code frame\` where the assertion failed (when available). You can click on the blue \`file\` link to open the file where the error occurred in your preferred file opener.

Cypress provides a nice \`Test Runner\` that gives you a visual structure of \`suites\`, \`tests\`, and \`assertions\`.

## Dig Deeper Into Cypress World

### Writing and Organizing Tests

#### Folder Structure

After adding a new project, Cypress will automatically scaffold out a suggested folder structure. All test artifacts are wrapped inside a folder named \`cypress\`. See in detail [here][cypressFolderStructure] but these are always configurable. You can modify the folder configuration in your configuration file.

##### Types

Generally two types of files are used inside cypress.

- \`Fixtures\`:

  These \`JSON\` fixture files are used as external pieces of static data that can be used by your test. It is placed in \`cypress/fixtures\` by default, but can be configured to another directory.

- \`TestFiles\`:

  The actual test files are located in \`cypress/integration\` by default, but as always, it is configurable. Test files may be written as: \`.js\`, \`.jsx\`, \`.coffee\`, \`.cjsx\`.

#### Basic Test Syntax

\`\`\`js
describe(name, config, fn)
context(name, config, fn)
it(name, config, fn)
specify(name, config, fn)
\`\`\`

#### Other Artifacts

- You can always tweak your test with \`before\` and \`after\` [hooks][testHooksInCypress].

  \`\`\`
  beforeEach(() => {
  	// root-level hook
  	// runs before every test
  })
  describe("Hooks", () => {
  	before(() => {}) // runs once before all tests in the block
  	beforeEach(() => {}) // runs before each test in the block
  	afterEach(() => {}) // runs after each test in the block
  	after(() => {}) // runs once after all tests in the block
  })
  \`\`\`



- You can run a specified \`suite\` or \`test\`. [Excluding and including tests][excludeIncludeTest] is made easier. To skip a specified suite or test, append \`.skip()\` to the function. All nested suites will also be skipped.

  \`\`\`js
  it.skip('returns "fizz" when number is multiple of 3', () => {
    numsExpectedToEq([9, 12, 18], 'fizz')
  })
  \`\`\`



### Cypress Commands

#### Querying Elements

If you\u2019ve used jQuery before, you may be used to querying for elements like this:

\`\`\`js
$('.my-selector')
\`\`\`

In Cypress, querying elements is the same:

\`\`\`js
cy.get('.my-selector')
\`\`\`

In fact, Cypress bundles jQuery and exposes many of its DOM traversal methods to you so you can work with complex HTML structures with ease using APIs you\u2019re already familiar with.

\`\`\`js
// Each method is equivalent to its jQuery counterpart. Use what you know!
cy.get('#main-content')
  .find('.article')
  .children('img[src^="/static"]')
  .first()
\`\`\`

> Interested in the best practices for selecting elements? [Read here][selectingElementsInCypress]

Cypress wraps all DOM queries with robust retry-and-timeout logic that better suits how real web apps work. We trade a minor change in how we find DOM elements for a major stability upgrade to all of our tests. Banishing flake for good!

In Cypress, when you want to interact with a DOM element directly, call \`.then()\` with a callback function that receives the element as its first argument. When you want to skip the retry-and-timeout functionality entirely and perform traditional synchronous work, use \`Cypress.$\`!

\`\`\`js
cy
  // cy.get() looks for '#element-does-not-exist', repeating the query until...
  // ...it times out without finding the element.
  // Cypress halts and fails the test.
  .get('#element-does-not-exist')

  // ...this code is never run...
  .then(($myElement) => {
    doSomething($myElement)
  })
\`\`\`

##### When Elements Are Missing

Cypress anticipates the asynchronous nature of web applications and doesn't fail immediately the first time an element is not found. Instead, Cypress gives your application \`a window of time\` to finish whatever it may be doing!

This is a known \`timeout\`, and most commands can be customized with specific timeout periods. These commands will list a timeout option in their API documentation, detailing how to set the number of milliseconds you want to continue to try finding the element.

\`\`\`js
// Give this element 10 seconds to appear
cy.get('.my-slow-selector', { timeout: 10000 })
\`\`\`

You can also set the \`timeout\` globally via the configuration setting: \`defaultCommandTimeout\`.

#### Querying by Text Content

Another way to locate things - a more human way - is to look them up by their content, by what the user would see on the page. For this, there\u2019s the handy \`cy.contains()\` command, for example:

\`\`\`js
// Find an element in the document containing the text 'New Post'
cy.contains('New Post')

// Find an element within '.main' containing the text 'New Post'
cy.get('.main').contains('New Post')
\`\`\`

#### Interacting With Elements

Cypress allows you to click on and type into elements on the page by using \`.click()\` and \`.type()\` commands with a \`cy.get()\` or \`cy.contains()\` command. This is a great example of chaining in action. Let\u2019s see it again:

\`\`\`js
cy.get('textarea.post-body')
  .clear()
  .type('This is an excellent post.')
  .should('have.text', 'This is an excellent post.')
\`\`\`

Some more commands in Cypress for interacting with the DOM are:

\`.blur()\`, \`.focus()\`, \`.check()\`, \`.uncheck()\`, \`.select()\`, \`.click()\`, \`.dblclick()\`, \`.rightclick()\`

#### Asserting About Elements

Assertions let you do things like ensuring an element is visible or has a particular attribute, CSS class or state. Assertions are commands that enable you to describe the desired state of your application.

There are two ways to write assertions in Cypress:

1. Implicit Subjects:

    Using \`.should()\` or \`.and()\` commands is the preferred way of making assertions. These are typical Cypress commands, which means they apply to the currently yielded subject in the command chain.

   \`\`\`js
   // the implicit subject here is the first <tr>
   // this asserts that the <tr> has an .active class
   cy.get('tbody tr:first').should('have.class', 'active')
   // you can chain multiple assertions as
   cy.get('#header a')
     .should('have.class', 'active')
     .and('have.attr', 'href', '/users')
     .and('not.have.descendants')
   \`\`\`

2. Explicit Subjects:

   Using \`expect\` allows you to pass in a specific subject and make an assertion about it. This is probably how you\u2019re used to seeing assertions written in unit tests:

   \`\`\`js
   expect(true).to.be.true
   \`\`\`

   Explicit assertions are great when you want to:

   - Perform custom logic prior to making the assertion.
   - Make multiple assertions against the same subject.

In each of these examples, it\u2019s important to note that Cypress will automatically wait until these assertions passes or fail the test if the assertions don\u2019t pass. See more about Cypress assertions [here][introductionToCypressAssertions].

### Cypress Commands are Asynchronous

It is very important to understand that Cypress commands don\u2019t do anything at the moment they are invoked, but rather enqueue themselves to be run later.

Let's understand with an example:

#### \u274C Incorrect Usage

In the example below, the check on the \`username\` value gets evaluated immediately, before \`cy.visit()\` has executed, so will always evaluate to \`undefined\`.

\`\`\`js
it('test', () => {
  let username = undefined     // evaluates immediately as undefined
  cy.visit('https://app.com') // Nothing happens yet
  cy.get('.user-name')        // Still, nothing happens yet
    .then(($el) => {          // Nothing happens yet
      // this line evaluates after the .then executes
      username = $el.text()
    })
  // this evaluates before the .then() above
  // so the username is still undefined
  if (username) {             // evaluates immediately as undefined
    cy.contains(username).click()
  } else {
    // this will always run
    // because username will always
    // evaluate to undefined
    cy.contains('My Profile').click()
  }
})
\`\`\`

####  \u2705 Correct Usage:

Below is one way the code above could be rewritten in order to ensure the commands run as expected.

\`\`\`js
it('test', () => {
  let username = undefined     // evaluates immediately as undefined
  cy.visit('https://app.com') // Nothing happens yet
  cy.get('.user-name')        // Still, nothing happens yet
    .then(($el) => {          // Nothing happens yet
      // this line evaluates after the .then() executes
      username = $el.text()
      // evaluates after the .then() executes
      // it's the correct value gotten from the $el.text()
      if (username) {
        cy.contains(username).click()
      } else {
        cy.get('My Profile').click()
      }
    })
})
// Ok, the test function has finished executing...
// We've queued all of these commands and now
// Cypress will begin running them in order!
\`\`\`

#### Commands are Promises

This is one of the big secrets of Cypress. We\u2019ve said above, cypress enqueues actions to be taken later, we could restate that as \u201Cadding Promises to a chain of Promises\u201D.

##### Noisy Promise demonstration. Not valid code

\`\`\`
it('changes the URL when "awesome" is clicked', () => {
  // THIS IS NOT VALID CODE.
  // THIS IS JUST FOR DEMONSTRATION.
  return cy.visit('/my/resource/path')
  .then(() => {
    return cy.get('.awesome-selector')
  })
  .then(($element) => {
    // not analogous
    return cy.click($element)
  })
  .then(() => {
    return cy.url()
  })
  .then((url) => {
    expect(url).to.eq('/my/resource/path#awesomeness')
  })
})
\`\`\`

##### How Cypress really looks, Promises wrapped up and hidden from us

\`\`\`js
it('changes the URL when "awesome" is clicked', () => {
  cy.visit('/my/resource/path')
  cy.get('.awesome-selector')
    .click()
  cy.url()
    .should('include', '/my/resource/path#awesomeness')
})
\`\`\`

Big difference! In addition to reading much cleaner, Cypress does more than this, because Promises themselves have no concepts of retry-ability.

Without retry-ability, assertions would randomly fail. This would lead to flaky, inconsistent results. This is also why we cannot use new JS features like \`async / await\`.

#### Commands Are Not Promises

The Cypress API is not an exact \`1:1\` implementation of Promises. They have Promise like qualities and yet there are important differences you should be aware of.

1. You cannot race or run multiple commands at the same time (in parallel).
2. You cannot \u2018accidentally\u2019 forget to return or chain a command.
3. You cannot add a \`.catch\` error handler to a failed command.

### Variables and Aliases

#### Variables

Typically, in Cypress you hardly need to ever use \`const\`, \`let\`, or \`var\`. When using closures you\u2019ll always have access to the objects that were yielded to you without assigning them.

The one exception to this rule is when you are dealing with mutable objects (that change state). When things change state you often want to compare an object\u2019s previous value to the next value.

###### Demonstration

\`\`\`html
<!-- app code -->
<html lang="en">
    ...
    <button id='increase'>increment</button>
    you clicked button <span id='num'>0</span> times!

    <script>
        let count = 0
        $('#increase').on('click', () => {
            $('#num').text(count += 1)
        })
    <\/script>
</html>
\`\`\`

\`\`\`js
// cypress test code
cy.get('#num').then(($span) => {
  // capture what num is right now
  const num1 = parseFloat($span.text())
  cy.get('button').click().then(() => {
    // now capture it again
    const num2 = parseFloat($span.text())
    // make sure it's what we expected
    expect(num2).to.eq(num1 + 1)
  })
})
\`\`\`

#### Aliases

Using \`.then()\` callback functions to access the previous command values is great\u2014but what happens when you\u2019re running code in hooks like \`before\` or \`beforeEach\`?

We could make our code do some ugly back-flips using global variables but with cypress \`NOT ANYMORE\`.

Let's look at a cool example with aliases:

\`\`\`js
beforeEach(() => {
  // alias the $btn.text() as 'text'
  cy.get('button').invoke('text').as('text')
  cy.fixture('users.json').as('users')
  // alias all of the tr's found in the table as 'rows'
  cy.get('table').find('tr').as('rows')
})

it('has access to text', function () {
  // is now available
  this.text
  // access the users property
  const user = this.users[0]
  // Cypress returns the reference to the <tr>'s which allows
  // us to continue to chain commands finding the 1st row.
  cy.get('@rows').first().click()
})
\`\`\`

You can also easily alias network requests and access the properties later.

\`\`\`js
cy.request('https://jsonplaceholder.cypress.io/comments').as('comments')
// other test code here
cy.get('@comments').should((response) => {
  if (response.status === 200) {
      expect(response).to.have.property('duration')
    } else {
      // whatever you want to check here
    }
})
\`\`\`

### References

- [Assertions][assertionLink]
  - [Chai][chaiLink]
  - [Adding New Assertions][addAssertionLink]
- [Configuration][configurationLink]
- [Best Practices][bestPracticesLink]
- [Error Messages][errorMessagesLink]
- [Cypress Documentation][documentationLink]

<!-- assets -->
[noTestsFound]: /src/assets/TestingWithCypress/images/cypress_no_test_found.png "This is a test runner preview while there is no any tests file to run."
<!-- links -->
[assertionLink]: https://docs.cypress.io/guides/references/assertions.html 'Assertions in Cypress'
[chaiLink]: https://github.com/chaijs/chai 'GitHub Homepage Chai'
[addAssertionLink]: https://docs.cypress.io/guides/references/assertions.html#Adding-New-Assertions 'Adding New Assertions in Cypress'
[configurationLink]: https://docs.cypress.io/guides/references/configuration.html#Options  'Cypress Configuration'
[bestPracticesLink]: https://docs.cypress.io/guides/references/best-practices.html 'Best Practices in Cypress'
[errorMessagesLink]: https://docs.cypress.io/guides/references/error-messages.html 'Error Messages in Cypress'
[documentationLink]: https://docs.cypress.io/ 'Cypress Documentation'
[introductionToCypressAssertions]: https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Assertions 'Introduction to Cypress Assertions'
[selectingElementsInCypress]: https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements 'Selecting Elements in Cypress'
[excludeIncludeTest]: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Excluding-and-Including-Tests 'Excluding and Including tests in Cypress'
[testHooksInCypress]: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks 'Hooks available in Cypress'
[cypressFolderStructure]: https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure 'Folder Structure in Cypress'
`,"/src/assets/TestingWithCypress/cypress_blog_3.md":`---
title: Configure Cypress
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: testing, javaScript, cypress, automation
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--Tj6xmJa8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/u5fey1ilksgx8uz6qdrk.jpg
seriesTitle: E2E Testing with Cypress
episode: 3
---

When a project is added to Cypress, a \`cypress.json\` file is created in the project. This file is used to store the \`projectId\` (after configuring your tests to record) and any configuration values you supply.

> Change Configuration File
>
> You can change the configuration file or turn off the use of a configuration file by using the \`--config-file\` flag.

## Options

The default behavior of Cypress can be modified by supplying any of the following configuration options.

- Global

  | OPTION                  | DEFAULT                        | DESCRIPTION                                                  |
  | ----------------------- | ------------------------------ | ------------------------------------------------------------ |
  | \`baseUrl\`               | \`null\`                         | URL used as prefix for \`cy.visit()\` or \`cy.request()\` command. |
  | \`env\`                   | \`{}\`                           | Any values to be set as [environment variables][envVarsInCypress] |
  | \`retries\`               | \`{\u201CrunMode\u201D: 0, \u201CopenMode: 0}\` | The number of times to retry a failing test.  See [Test Retries][testRetriesInCypress] for more information. |
  | \`defaultCommandTimeout\` | \`4000\`                         | Time, in milliseconds, to wait until most DOM based commands are considered timed out. |

- Timeouts

  | OPTION                  | DEFAULT | DESCRIPTION                                                  |
  | ----------------------- | ------- | ------------------------------------------------------------ |
  | \`defaultCommandTimeout\` | \`4000\`  | Time, in milliseconds, to wait until most DOM based commands are considered timed out. |
  | \`pageLoadTimeout\`       | \`6000\`  | Time, in milliseconds, to wait for page transition events or \`cy.visit()\`, \`cy.go()\`, \`cy.reload()\` commands to fire their page load events. |
  | \`requestTimeout\`        | \`5000\`  | Time, in milliseconds to wait for an XHR request to go out in a \`cy.wait()\` command |



- Folders / Files

  | OPTION              | DEFAULT              | DESCRIPTION                                                  |
  | ------------------- | -------------------- | ------------------------------------------------------------ |
  | \`testFiles\`         | \`**/*.*\`             | A String or Array of glob patterns of the test files to load |
  | \`ignoreTestFiles\`   | \`*.hot-update.js\`    | A String or Array of glob patterns used to ignore test files that would otherwise be shown in your list of tests. |
  | \`screenshotsFolder\` | \`cypress/screenshot\` | Path to folder where screenshots will be saved from \`cy.screenshot()\` command or after a test fails during \`cypress run\` |

- Browser

  | OPTION                       | DEFAULT | DESCRIPTION                                                  |
  | ---------------------------- | ------- | ------------------------------------------------------------ |
  | \`chromeWebSecurity\`          | \`true\`  | Whether to enable Chromium-based browser\u2019s Web Security for same-origin policy and insecure mixed content. |
  | \`blockHosts\`                 | \`null\`  | A String or Array of hosts that you wish to block traffic for. |
  | \`viewportHeight\`             | \`660\`   | Default height in pixels for the application under tests\u2019 viewport (Override with \`cy.viewport()\` command) |
  | \`viewportWidth\`              | \`1000\`  | Default width in pixels for the application under tests\u2019 viewport. (Override with \`cy.viewport()\` command) |
  | \`animationDistanceThreshold\` | \`5\`     | The distance in pixels an element must exceed over time to be considered animating |
  | \`waitForAnimations\`          | \`true\`  | Whether to wait for elements to finish animating before executing commands |

## Overriding Options

Cypress gives you the option to dynamically alter configuration values. This is helpful when running Cypress in multiple environments and on multiple developer machines. This gives you the option to do things like override the \`baseUrl\` or environment variables.

### Command Line

When running Cypress from the Command Line you can pass a \`--config\` flag.

Examples:

\`\`\`bash
cypress open --config pageLoadTimeout=30000,baseUrl=https://myapp.com
\`\`\`

\`\`\`bash
cypress run --config integrationFolder=tests,videoUploadOnPasses=false
\`\`\`

\`\`\`bash
cypress run --browser firefox --config viewportWidth=1280,viewportHeight=720
\`\`\`

### Environment Variables

You can also use environment variables to override configuration values. This is especially useful in Continuous Integration or when working locally. This gives you the ability to change configuration options without modifying any code or build scripts.

By default, any environment variable that matches a corresponding configuration key will override the configuration file (\`cypress.json\` ) by default value.

\`\`\`bash
export CYPRESS_VIEWPORT_WIDTH=800
export CYPRESS_VIEWPORT_HEIGHT=600

# Both options below are valid
export CYPRESS_pageLoadTimeout=100000
export CYPRESS_PAGE_LOAD_TIMEOUT=100000
\`\`\`

Now, Cypress will strip off the \`CYPRESS_\`, camel-case any keys and automatically convert values into \`Number\` or \`Boolean\`. Make sure to prefix your environment variables with \`CYPRESS_\` else they will be ignored.

## \`Cypress.config()\`

You can also override configuration values within your test using \`Cypress.config()\`.

> Configuration set using \`Cypress.config\` is only in scope for the current spec file.

\`\`\`js
Cypress.config('pageLoadTimeout', 10000) // set value
Cypress.config('pageLoadTimeout') // => 100000 (get value)
\`\`\`

## Run in CI

You can easily integrate Cypress with your current CI provider. According to the official documentation, Cypress works with any CI Provider.

## Features

- Optimize tests

  - See detailed insights into the performance of individual tests and specs to identify potential bottlenecks
  - Automatic load balancing and parallelization ensure tests run as fast as possible

- Maximize efficiency with parallelization

  Split your tests across multiple CI machines and drastically reduce your run times

  ![Parallelization in Cypress][parallelization]



## Slack Integration

The Cypress Slack application provides real-time results for your Cypress tests, all in one place\u2014improving remote collaboration and giving wider visibility into test behavior.

- Improve cross-team collaboration by instantly surfacing Cypress results to the teams that need visibility
- Confirm that key tests pass prior to launching new products or features
- Reduce the time it takes to catch failed tests

![Cypress Slack Integration!][slackIntegration]

## Github Integration

Cypress Dashboard tightly integrates your Cypress test runs with your \`GitHub\` work flow via commit status checks and pull-request comments.

> Merge Confidently with Status Checks

Cypress Dashboard will report status of test runs as \`GitHub\` commit status checks for every run group or every spec file in your test-suite so that you can prevent PR merges until all your tests pass.

> Test Results in Your Work flow via Pull-Request Comments

Detailed test run information conveniently posted as PR comments that include tests run statistics, specific test failures, related screenshots and deep links to the Cypress Dashboard to help you quickly resolve problems.

![GitHub Integration][gitHubIntegration]


<!-- assets -->
[parallelization]: /src/assets/TestingWithCypress/images/cypress_parallelization.png "Parallelization in Cypress!"
[gitHubIntegration]: /src/assets/TestingWithCypress/images/cypress_github_comment.png "Cypress bot comment in a GitHub PR."
[slackIntegration]: /src/assets/TestingWithCypress/images/cypress_slack_integration.png "Cypress channel inside Slack Application."
<!-- links -->
[envVarsInCypress]: https://docs.cypress.io/guides/guides/environment-variables.html#Setting "Environment Variables in Cypress"
[testRetriesInCypress]: https://docs.cypress.io/guides/guides/test-retries.html "Retrying test with Cypress"
`,"/src/assets/TestingWithCypress/cypress_blog_4.md":`---
title: Cucumber - Gherkin Integration
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: vue, jest, unit, testing
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--t1Oxkc_O--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkifasq4al1c75uculu.png
seriesTitle: E2E Testing with Cypress
episode: 4
---

There is no official \`gherkin\` support available for Cypress, but there are nice libraries that add support for using feature files when testing with Cypress. Among them, we\u2019re using \`cypress-cucumber-preprocessor\` in our project for automation testing.

To get started in Cypress with cucumber preprocessor, follow these simple steps:

## Installation

\`\`\`bash
npm install --save-dev cypress-cucumber-preprocessor
\`\`\`

## Cypress Configuration

Add it to your plugins \`cypress/plugins/index.js\`:

\`\`\`js
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
\`\`\`

Add support for feature files to your Cypress configuration \`cypress.json\`

\`\`\`json
{
  "testFiles": "**/*.feature"
}
\`\`\`

## Pre-processor Configuration

It lets you define the path to a folder containing step definitions required for your tests.

### Where to define? :thinking:

You can use [cosmiconfig][cosmiconfigGitHub] which helps to search for and loading configuration for your program. Or you can configure simply by adding this to your \`package.json\`.

\`\`\`json
{
    "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": true
  }
}
\`\`\`

#### Available Configurations

| OPTION                     | DEFAULT                                                      | DESCRIPTION                                                  |
| -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| \`commonPath\`               | \`cypress/integration/common\` when \`nonGlobalStepDefinitions\` is *true*<br/>\`cypress/support/step_definitions\` when \`nonGlobalStepDefinitions\` is *false*<br/>\`\${nonGlobalStepBaseDir}/common\` when \`nonGlobalStepBaseDir\` is defined | define the path to a folder containing all common step definitions of your tests. |
| \`nonGlobalStepDefinitions\` | \`false\`                                                      | If true use the Cypress Cucumber Preprocessor Style pattern for placing step definitions files. |
| \`nonGlobalStepBaseDir\`     | \`undefined\`                                                  | If defined and \`nonGlobalStepDefinitions\` is also true then step definition searches for folders with the features name will start from the directory provided here. |
| \`stepDefinitions\`          | \`cypress/integration\` when \`nonGlobalStepDefinitions\` is true<br/>\`cypress/support/step_definitions\` when \`nonGlobalStepDefinitions\` is false | Path to the folder containing our step definitions.          |



## Organize Tests

### Single feature files

After adding \`.feature\` support in cypress configuration, you can add feature files in \`cypress/integration/\`

You can easily integrate \`Background\`, \`Scenario Outlines\`, \`DataTables\` within a feature file.

### Bundled feature files

When running Cypress tests in the headless mode, the execution time can get pretty bloated, this happens because by default Cypress will relaunch the browser between every feature file. The cypress-cucumber-preprocessor gives you the option to bundle all feature files before running the tests, therefore reducing the execution time.

You can take advantage of this by creating \`.features\` files. You choose to have only one in the root of the directory \`cypress/integrations\` or per directory.

Adding support for \`.features\` files to your Cypress configuration

\`cypress.json\`

\`\`\`json
{
  "testFiles": "**/*.{feature,features}"
}
\`\`\`

### Step Definitions

The steps in \`.feature\` file look for their implementation inside a directory configured from preprocessor configuration. Step definitions files are by default in: \`cypress/support/step_definitions\`. If you want to put them somewhere else please use \`cosmiconfig\` format. For example, add to your \`package.json\`.

\`\`\`json
{
  "cypress-cucumber-preprocessor": {
    "step_definitions": "cypress/support/step_definitions/"
  }
}
\`\`\`

An example of some step definitions done in the cypress way is as follows:

\`\`\`js
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})
Then(\`I see {string} in the title\`, (title) => {
  cy.title().should('include', title)
})
\`\`\`

### Before and After hooks

The cypress-cucumber-preprocessor supports both Mocha\u2019s \`before/beforeEach/after/afterEach\` hooks and Cucumber\u2019s \`Before\` and \`After\` hooks.

The cucumber hooks implementation fully supports tagging as described in the \`cucumberJs\` documentation. So they can be conditionally selected based on the tags applied to the Scenario. This is not possible with Mocha hooks.

Example:

\`\`\`js
const { Before, After, Given, Then }
  = require("cypress-cucumber-preprocessor/steps");

// this will get called before each scenario
Before(() => {
  beforeCounter += 1;
  beforeWithTagCounter = 0;
});

// this will only get called before scenarios tagged with @foo
Before({ tags: "@foo" }, () => {
  beforeWithTagCounter += 1;
});

Given("My Step Definition", () => {
  // ...test code here
})
\`\`\`

> **Note:** to avoid confusion with the similarly named *Mocha* \`before\` and \`after\` hooks, the *Cucumber* hooks are not exported onto global scope. So they need explicit importing as shown above.

### Smart Tagging

Start your tests without setting any tags and then put a @focus on the scenario (or scenarios) you want to focus on while development or bug fixing.

\`\`\`gherkin
Feature: Smart Tagging

  As a cucumber cypress plugin which handles Tags
  I want to allow people to select tests to run if focused
  So they can work more efficiently and have a shorter feedback loop

  Scenario: This scenario should not run if @focus is on another scenario
    Then this unfocused scenario should not run

  @focus
  Scenario: This scenario is focused and should run
    Then this focused scenario should run

  @this-tag-affects-nothing
  Scenario: This scenario should also not run
    Then this unfocused scenario should not run

  @focus
  Scenario: This scenario is also focused and also should run
    Then this focused scenario should run
\`\`\`

### Run tests

Run your Cypress Launcher the way you would usually do.

\`\`\`bash
yarn run cypress open
\`\`\`

Then click on a \`.feature\` file on the list of specs, and see the magic happening!

- Running tagged tests

  \`\`\`bash
  ./node_modules/.bin/cypress-tags run -e TAGS='not @foo and (@bar or @zap)'
  \`\`\`

- Limiting to a subset of feature files

  \`\`\`sh
    ./node_modules/.bin/cypress-tags run -e GLOB='cypress/integration/**/*.feature'
  \`\`\`

  You can also configure these from cypress configuration \`env\` property with \`TAGS\` sub-property.

  \`\`\`json
  {
      "env": {
          "TAGS": "not @ignore"
      },
      "baseUrl": "yourBaseUrl",
      "ignoreTestFiles": "*.js"
  }
  \`\`\`

Cool! \u{1F60E}  I\u2019m sure this will get you started with cypress running your test in Gherkin theme.

<!-- links -->

[cosmiconfigGitHub]: https://github.com/davidtheclark/cosmiconfig "Cosmiconfig GitHub Homepage"
`,"/src/assets/TestingWithCypress/cypress_blog_5.md":`---
title: Trade-offs In Cypress
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: cypress, selenium, comparision, testing
banner: /src/assets/TestingWithCypress/images/cypress_selenium_v_cypress.png
seriesTitle: E2E Testing with Cypress
episode: 5
---

### Key differences with other testing frameworks

- Cypress does not use Selenium

- Cypress tests are only written in JavaScript

- Cypress is all in one


These architectural improvements unlock the ability to do TDD with full e2e tests. You can develop faster while driving the entire dev process with tests because: you can see your application; you still have access to the developer tools, and changes are reflected in real-time. The end result is that you will have developed more, your code will be better, and it will be completely tested. If you opt for parallelization and automated load balancing will further supercharge your test speeds.

But, there are some serious downsides to these architectural changes.

> The following permanent and temporary trade-offs are well discussed in Cypress documentation. Please follow the official documentation for more information. I've just listed out the main point just for an overview.

### Permanent trade-offs

- Automation Restrictions:
    - Indexing the web
    - Spidering links
    - Performance testing
    - Scripting 3rd party sites

    There are other excellent tools that are optimized for doing each item listed above.

- Inside the browser:
    In case you missed it before - Cypress tests run inside of the browser! It makes it a little harder to communicate with the back end - like your server or database. You will not be able to connect or import those server-side libraries or modules directly.

- It will never have multi-tabs support.

- You cannot use Cypress to drive two browsers at the same time.

- Same Origin:
    Each test is limited to only visiting domains that are determined to be of the same-origin.
    What is same-origin? Two URLs have the same origin if the protocol, port (if specified), and host are the same for both. Cypress automatically handles hosts of the same super-domain by injecting \`document.domain\` into \`text/html\` pages, so a host of the same super domain is considered fine.

### Temporary trade-offs
IMO, Cypress has a pretty responsive issues section on GitHub. Many issues that are being worked on are listed below:
- Lack of a \`cy.hover()\` command.
- There is no \`cy.tab()\` command.
- There is no native or mobile event support.
- Testing file uploads is application-specific.
- Testing file downloads is application-specific.
- Iframe support is somewhat limited but does work.


### Problems I faced with my project's tests
- Cypress says, the browser XHRs are properly tracked, and we can wait for them too. But it is not true for me. The test-runner does not log about the XHR requests triggered by the browser interaction, and I cannot wait dynamically for some time-consuming requests.

    ![NoXHRRecorded][noXHRRecordedImage]

    At this point i.e clicking the \`Sign In\` button should start a XHR request. But alas, no luck here.

- Testing inside iframes? Well, it's gonna bother you. I am working on a project which uses iframes with large contents and takes some time to load properly. Following the documentation and [cypress blogs][workingWithIframes] were also not quite helpful. For now, I'm using static wait before diving inside any iframes. If somebody has a better idea, well, please share!

- I feel like why we choose Cypress while testing dropdown fields \u{1F602}. I find most of the official tips for dropdown testing is with \`<select>...</select>\`. But the recent web is mostly based on frameworks like \`VueJs\`, \`ReactJs\`, etc. which uses a different mechanism to render dropdowns (using classes rather than using \`select\` tag). Options are extracted from some API requests and may also have abilities like autocompletion. With these features included the browser elements keeps on changing (some get in, and some are removed out completely). Running tests with such form fields interactions, you'll surely encounter the \`Element is detached from the DOM\` error [ref][DetachedFromDOMErr]. I suggest [do-not-get-too-detached][doNotGetTooDetached] blog to handle this type of errors.

- Test just terminates when it likes: Only half of the test runs and that particular test is marked as passed (sometimes, but can litter test result accuracy).

    ![HalfRunPassedScenario][halfRunPassedScenario]


<!-- assets -->
[halfRunPassedScenario]: /src/assets/TestingWithCypress/images/cypress_incomplete_run_passed_scenario.png "Incomplete but passed scenario"
[noXHRRecordedImage]: /src/assets/TestingWithCypress/images/cypress_no_xhr_recorded.png "No XHR request is recorded."

<!-- links -->
[CypressTradeOffs]: https://docs.cypress.io/guides/references/trade-offs.html#Permanent-trade-offs-1 "Cypress Permanent Trade-offs"
[workingWithIframes]: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/ "Working with iframes in Cypress"
[doNotGetTooDetached]: https://www.cypress.io/blog/2020/07/22/do-not-get-too-detached/ "Do Not Get Too Detached"
[DetachedFromDOMErr]: https://docs.cypress.io/guides/references/error-messages.html#cy-failed-because-the-element-you-are-chaining-off-of-has-become-detached-or-removed-from-the-dom "Explained error message for elements that has been detached or removed from the dom."
`,"/src/assets/TestingWithCypress/cypress_blog_6.md":`---
title: Cypress - Gherkin / Parallelization
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: cypress, gherkin, parallelization, testing
banner: /src/assets/TestingWithCypress/images/ci_cd_gitlab_parallel.jpg
seriesTitle: E2E Testing with Cypress
episode: 6
---

In the previous part of the series we have disused how Cypress is so flexible with multiple CI providers, how it manages balanced strategies on parallel runs, and an example of a CircleCi configuration file. As long as tests are written in Cypress file/folder structure, the configuration of parallel tests run is simple as documented. But if you use feature files in your e2e tests, then your a bit unlucky using Cypress.

As I've mentioned in the earlier part of the series, Cypress does not have a cucumber preprocessor by default, and we have to add some tweaks to get tests containing features files running. It's perfectly fine while running our tests on our own machine. We can properly tag, run, and debug our scenarios with different required hooks if necessary. But in CI/CD we do not want to run our tests as we run in our local machine.

According to some cypress users, using Cypress Dashboard along with cucumber preprocessors, they can run over 200 scenarios in 13 minutes. Parallelization is so effective with dashboard service but, it is a \`PAID\` service. But do not worry we can achieve it for free.

## Parallelization with cucumber-preprocessor and Cypress
\`\`\`
Folder Structure
cypress/integration/features/
  |- Login/login.feature
  |- Register/register.feature
\`\`\`
Let us assume, we have two features as shown above. Our goal is to run these two features in parallel in our CI/CD. With Cypress Dashboard service our test files are automatically separated into different suites according to their previous run lengths to maintain minimum test run time. Since we're not using any dashboard, so we've to do this by ourselves. Simple!

So the first thing needed is we've to create suites. Where to create? Inside your \`features\` directory. Each folder you create can be used as a separate suite for your CI/CD.

Next, we've to configure our CI configuration to give the above suite's life.

I am currently using the \`GitLab CI/CD\` service, so here is an example of a config file running the above tests in parallel.

##### Example \`.gitlab-ci.yml\`
\`\`\`yaml
image: cypress/base:12
stages:
  - automation

# this is the actual suite name that will appear in you CI/CD
Register:
    stage: automation
    script:
      - npm ci
      - $(npm bin)/cypress run "cypress/integration/features/Register/*.feature"

Login:
    stage: automation
    script:
      - npm ci
      - $(npm bin)/cypress run "cypress/integration/features/Login/*.feature"
\`\`\`

That's it. You just have to run the features you want in the suite you want.

Now add and push the changes to your repository. You should see two jobs have been started under a pipeline on the \`CI/CD\` section of the repository. Check the run from the GitLab jobs section and find out the test result.

### Test Results and Debugging
With the \`Cypress Dashboard\` service enabled you can get a detailed test run summary (for the whole test run and specific tests) with so much ease. Since we're not using it, Do we get in trouble while troubleshooting? Absolutely False. Your CI/CD runner log is just enough to debug through your tests if it fails.

Here are screenshots of the GitLab CI test runner with Cypress-Gherkin-Parallelization:
- Success log sample
![SuccessLog][successLog]
- Error log sample
![ErrorLog][errorLog]

<!-- asset -->
[successLog]: /src/assets/TestingWithCypress/images/cypress_success_log_gitlab_ci.jpg 'Success Log'
[errorLog]: /src/assets/TestingWithCypress/images/cypress_error_log_gitlab_ci.jpg 'Error Log'
`,"/src/assets/UnderstandingHttpAndSocket/understandingHttpAndSocket.md":`---
title: Serving your cat video using the Internet - A basic understanding of HTTP and socket programming (in Java)
authorName: Saksham Gurung
authorAvatar: https://avatars.githubusercontent.com/u/41365307?v=4
authorLink: https://github.com/sakshamgurung
createdAt: Dec 6, 2021
tags: socket, java, http, video
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--t1Oxkc_O--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkifasq4al1c75uculu.png
---

This blog explains the basic understanding of HTTP, client-server model, network layers, and some socket programming in Java.

## Roles on the Internet
Developers and designers can select different arrangements and architecture for their computers to develop an internet service. In this article, we are talking about the most commonly used \`client-server\` model. There are mainly two roles in this model:
- client: A client computer initiates a request for the resources and the information from the server computer.
- server: A server computer processes the client request and responds with appropriate information.

<figure align="center">
    <img alt="client server model" width="383.7" height="357.7" src="/src/assets/UnderstandingHttpAndSocket/images/clientServerModel.png" />
    <figcaption>Fig.1: Client-Server model</figcaption>
</figure>

## A common language
To conduct communication between a client and a server a common language is necessary. We can develop and use any language we desire to make these computers communicate with each other. But to make it usable, compatible, and widely accessible we need a standardized language (aka protocol). This is where the HTTP protocol comes in.

- HTTP protocol defines the structure for request and response messages. It is like sending a parcel to your friend with an address structured as street name, city name, state name, zip code, and country code.
- HTTP defines operations that can be performed on a given resource. These are called HTTP request methods. They are also referred to as HTTP verbs. Some examples are:
    - The GET method requests a representation/state of the specified resource/data. It should only retrieve data.
    - The POST method submits an entity to the specified resource, often causing a change in the server.
- HTTP protocol also defines different sets of status codes to indicate different states that may occur during communication like successful responses (200-299), client error responses (400-499), server error responses (500-599), etc.
- HTTP requests and responses share a similar structure and are composed of:
    - A single start-line describing the requests/response to be implemented, or it's status of whether successful or a failure.
    - An optional set of HTTP headers specifying the request/response or describing the body included in the message.
    - A blank line indicating all meta-information for the request has been sent.
    - An optional body containing data associated with the request (like the content of an HTML form) or the document associated with a response. The presence of the body and its size is specified by the start-line and HTTP headers.

<figure align="center">
    <img alt="HTTP message structure" width="1035" height="369.75" src="/src/assets/UnderstandingHttpAndSocket/images/httpMsgStructure.png" />
    <figcaption>Fig.2: Structure of HTTP message</figcaption>
</figure>

## Soft layers
The software model of the Internet can be defined by two types of layered models: **OSI model** (for reference only) and **Internet Protocol Suite** (practically implemented and used by the Internet). Without going into much depth the main points are:
- Every computer (client or server), and network device that supports the Internet implements the IP suite model.
- These models are structured as layers so we say the model has a layered structure
- Each layer has its responsibility and hides its implementation (inner working) from other layers
- Each layer provides an interface to layers immediately above or below itself

> Note:
In the IP suite model, the *Application* layer combines all three layers from the OSI model i.e *Application* + *Presentation* + *Session*
In the IP suite model, the *Link* layer combines the lower two layers from the OSI model i.e *Physical* + *Datalink*
The lowermost layer from each model connects with physical network devices like routers, switches, etc.

<figure align="center">
    <img alt="network layered model" width="744" height="393" src="/src/assets/UnderstandingHttpAndSocket/images/networkLayeredModel.png" />
    <figcaption>Fig.3: Layered Model of a network</figcaption>
</figure>


HTTP comes under the *Application* layer which is accessible to the user process. HTTP protocol uses the services provided by the *Transport* layer (TCP or UDP) to establish and conduct communication with other computers on the Internet. But to glue these two layers together, the operating system provides an interface called the socket API. Programming that utilizes the socket API is called socket programming.

A socket is like the two ends of a water pipe that handles the flow of water. But the only difference is that the information flows in both directions in a socket. A socket can be identified by a socket address which combines protocol type, IP address, and port number. The Socket API makes it easy to use different protocols and develop communication in a network. The following figure shows a general flow of communication using the socket API. We will understand more about these socket functions later in our coding part.

> Note:
This figure shows the socket functions implemented in the C language. In this article, we will be using socket functions from Java.

<figure align="center">
    <img alt="TCP socket workflow" width="623.25" height="697.5" src="/src/assets/UnderstandingHttpAndSocket/images/tcpSocket.png" />
    <figcaption>Fig.4: Flow of communication between client-server socket using TCP (in C)</figcaption>
</figure>

## Coding
### Basic files and project structure
> Note:
> Please first install \`java JDK\` for this project, setup your environment variables, and check everything is working well.

1. Main project folder will contain a \`public\` and a \`resources\` folder. In the \`public\` folder, we will store all our \`.html\` pages, and in the \`resources\` folder, we will store our resources like images, videos, etc.
2. Our main server program \`WebServer.java\` will be in the project's root directory.

\`\`\`html
    <!-- ./public/index.html -->
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Cat Paws</title>
    </head>
    <body>
        <div>
            <h1  style="text-align: center;">Cat Paws</h1>
            <a  style="display: flex; justify-content: center;" href="cats">Serve me some cat videos</a>
        </div>
    </body>
    </html>
\`\`\`
\`\`\`html
    <!-- ./public/cats.html -->
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Cat Paws</title>
    </head>
    <body>
        <h1 style="text-align: center;">Cat-videos</h1>
        <div style="display: flex; justify-content: center;">
            <video width="640" height="480" controls>
                <!-- 'watch' will be replaced later by the server -->
                <source src="watch/cat-test-video" type="video/mp4">
            </video>
        </div>
    </body>
    </html>
\`\`\`
- If you are coding along with this article please store any video inside the \`./resources\` folder and name it \`cat-test-video.mp4\`
- The project structure should look something like this.

<figure align="center">
    <img alt="Project structure" src="/src/assets/UnderstandingHttpAndSocket/images/projectStructure.png" />
    <figcaption>Fig.5: Project Structure</figcaption>
</figure>

### Creating a socket and listening for new connections
\`\`\`java
// Inside WebServer.java file
// Some necessary imports
import java.net.*;
import java.io.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
\`\`\`

\`\`\`java
// Inside WebServer.java file
public class WebServer {
    public static void main (String args[]) throws IOException NoSuchAlgorithmException {
        int serverPort = 9090;
        // allocating resources for server's socket and assigning a port number
        ServerSocket listenSocket = new ServerSocket(serverPort);
        try{
            System.out.println("Server program started...");
            while(true) {
                // listening to the assigned port number and accepting
                // new client connection
                System.out.println("\\nListening for new connection...");
                Socket clientSocket = listenSocket.accept();
                System.out.println("\\nA client is connected.....");

                // Initializing 'Connection' class with
                // client's socket address
                Connection c = new Connection(clientSocket);
            }
        } catch(IOException e) {
            System.out.println("Listen error:" + e.getMessage());
        } finally{
            listenSocket.close();
        }
    }
}
\`\`\`
The above code does the following things:
1. Creates a socket and assigns a port number to listen (aka server's socket address).
2. The server's system listens to the assigned port for any new connection request from the client-side
3. If the connection is successful and accepted by the server, it returns the client's socket address
4. Initializes the \`Connection\` class with the client's socket info to process the client's HTTP request and send back an HTTP response


### Creating a \`Connection\` class
\`\`\`java
// Inside WebServer.java file
// Thread class is extended to use multi-threading facility
class Connection extends Thread {
    DataInputStream in;
    DataOutputStream out;
    Socket clientSocket;

    public Connection (Socket clientSocket) {
        try {
            this.clientSocket = clientSocket;
            // accessing input stream from the given socket
            this.in = new DataInputStream( this.clientSocket.getInputStream());
            // accessing output stream from the given socket
            this.out = new DataOutputStream( this.clientSocket.getOutputStream());
            // starts a new thread
            this.start();
        } catch(IOException e) {
            System.out.println("Connection: "+e.getMessage());
        }
    }

    // continue...
\`\`\`
The above code does the following things:
1. Accesses the input stream from the link that bridges the server and the client socket. This stream is used to read the client's HTTP request.
2. Accesses the output stream from the link that bridges the server and the client socket. This stream is used to send an HTTP response from the server computer.


### Processing client's HTTP request and sending HTTP response from server
\`\`\`java
    // continue Connection class...

    // overiding run method from Thread class
    public void run(){
        // Initializing a Scanner class to read stream input from the
        // socket connection between server and client
        Scanner scan = new Scanner(this.in, "UTF-8");
        try{
            // separating the HTTP request header from rest of the HTTP message
            // "\\\\r\\\\n\\\\r\\\\n" below refers to the 'empty line' from fig.1
            String requestHeader = scan.useDelimiter("\\\\r\\\\n\\\\r\\\\n").next();

            System.out.println("*********Header Data***********");
            System.out.println("*******************************");
            System.out.println(requestHeader);
            System.out.println("*******************************\\n\\n");

            // decomposing request header to understand client request message
            String[] headerLines = requestHeader.split("\\r\\n");
            String[] startLine = headerLines[0].split(" ");

            String method = startLine[0];  // GET method
            String path = startLine[1];    // index.html
            String version = startLine[2]; // HTTP version

            // handling GET request from the client
            if (method.equals("GET")) {
                // calling helper method to search and get the path that
                // leads to the resource client is looking for
                Path filePath = getFilePath(path);

                System.out.println("file path: " + filePath);
                // checking if resource path exists
                if (Files.exists(filePath)) {
                    // file exist
                    // calling helper method to guess the file extension
                    // type like .html, .mp4, etc
                    String contentType = guessContentType(filePath);

                    System.out.println("file exist");
                    System.out.println("content type:" + contentType);

                    // calling helper method and setting standard HTTP
                    // status code, response type, and response content
                    sendResponse("200 OK", contentType, "", Files.readAllBytes(filePath));

                } else {
                    // file not found
                    System.out.println("File not found");

                    byte[] notFoundContent = "<h1> File not found :( </h1>".getBytes("UTF-8");

                    sendResponse("404 Not Found", "text/html", "", notFoundContent);
                }
                out.flush();
                break;
            }
        } catch(Exception e) {
            System.out.println("EOF:"+e);
        } finally {
            scan.close();
            try {
                clientSocket.close();
            }catch (IOException e){
                /*close failed*/
            }
        }
    }
    // continue...
\`\`\`


### Some helper methods
\`\`\`java
    // continue Connection class...

    // helper method: getting the path to access the requested resource/information hosted by the server (aka routing)
    private static Path getFilePath(String path) {
        Matcher match = Pattern.compile("/watch/").matcher(path);
        if(match.find()){
            // replacing "watch" with "resources" because we have our videos inside that directory
            path = path.replaceAll("/watch/", "./");
            path = path + ".mp4";
            return Paths.get(path);
        }

        if ("/".equals(path)) {
            path = "index.html";
        }else if("/cats".equals(path)){
            path = "cats.html";
        }

        return Paths.get("./public/", path);
    }

    // helper method: guessing the resource extension eg: .html, .mp4 etc
    private static String guessContentType(Path filePath) throws IOException {
        return Files.probeContentType(filePath);
    }

    // helper method: creating response message for the client's request
    private void sendResponse(String status, String contentType, String additional_header, byte[] content) throws IOException {
        byte[] response = (
            "HTTP/1.1 " + status + "\\r\\n"
            + "Content-Type: " + contentType + "\\r\\n"
            + additional_header
            + "\\r\\n").getBytes("UTF-8");
        out.write(response, 0, response.length);
        out.write(content, 0, content.length);
        out.write("\\r\\n\\r\\n".getBytes("UTF-8"));
    }
}
\`\`\`

### Compiling the \`WebServer.java\` file
- Open a command line in the project directory and compile the java file with the command \`javac WebServer.java\`. Two class files \`WebServer.class\` and \`Connection.class\` will be created.
- Then run the server with the command \`java WebServer\`
- Open the browser, which will be our client, and you can open the \`inspect\` windows and then the \`network\` tab in the browser to see the network activity
- Type \`localhost:9090\` in the address bar to send a request to our server. Then our \`index.html\` page will be loaded
- Now click the blue link \`Serve me some cat videos\` to request the server for a video
- In the \`network\` tab, we can notice that, after clicking the link, our client sends two requests to the server: one for the \`cats.html\` page and one for the video file.

### Conclusion
What we have learned in this article is just a speck of technology used on the Internet. We should be thankful for all those brilliant minds and engineering that make the Internet possible. Most importantly stay curious, and learn.
`,"/src/assets/UnitTestingVueComponents/UnitTestingVueComponents.md":`---
title: Unit Testing with VueJS
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: May 6, 2022
tags: vue, jest, unit, testing
banner: https://res.cloudinary.com/practicaldev/image/fetch/s--t1Oxkc_O--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ffkifasq4al1c75uculu.png
---
## Unit Testing Vue Components

> This post only covers unit testing information for Vue.js v2 and earlier. If you're trying with VueJS v3, this post would not be helpful.

### Why Unit Testing?
When it comes to building reliable applications, tests can play a critical role in an individual or team's ability to build new features, refactor code, fix bugs, and much more.

Unit testing is a software testing technique in which a collection of software components or modules are individually tested.

Benefits:
- test individual units of code in complete isolation
- maps a system structure and creates documentation. It really helps us understand the unit's interface.
- early bug detection and easier to spot issues
- saves time with automation and avoids manual testing

### Vue Test Utils (VTU)
The [VTU](https://github.com/vuejs/vue-test-utils/ "VTU") is a set of utilities that simplifies testing VueJS components. The package exposes APIs for mounting and interacting with the Vue components independently.

#### Installation
There are various options for the installation of VTU. Please refer to the [official VTU docs](https://vue-test-utils.vuejs.org/installation/#installation "official VTU docs") for detailed information on how to install and configure VTU.

VueJS projects will already have a bundler set up for the development. So one thing I would suggest for the installation is please do not set up a different compiler or transformer system for the tests and the source code. This will only increase the project complexity and packages dependency. For example: if you're using \`babel\` for the source code, use the same for the tests too.

#### Writing Tests
With VTU, we can write our tests using \`describe\`, \`it\`, \`test\`. Similarly, hooks can be implemented under \`before\`, \`beforeEach\`, \`after\` and \`afterEach\`. And, for assertions, \`expect\` is also already bundled. Great!

\`\`\`js
import {mount} from "@vue/test-utils"

// Normally a component to be tested is imported from elsewhere
const FabButton = {
  template: "<button type='button' :disabled='disabled'>{{text}}</button>",
  props: ["disabled", "text"]
}

describe("Fab button component", () => {
  describe("when prop 'disabled' is set to 'disabled'", () => {
    it("should be disabled", () => {
      const wrapper = mount(FabButton, {
        propsData: {
          disabled: "disabled",
          text: "My Button"
        }
      })

      // assertions after loading the component
      expect(wrapper.attributes('type').toBe('button'))
      expect(wrapper.attributes('disabled').toBe('disabled'))
      expect(wrapper.text()).toBe("My Button")
    })
  })
})
\`\`\`

##### Knowing what to test
There can be multiple logic involved in our test files. However, not everything needs to be tested during unit testing.

Don't forget we're only writing tests for a specific component. So we should only test the features provided by that specific unit.

So, is it necessary to test every feature in the component?

For the above component, we have two attributes inside the button element, i.e. \`type\` and \`disabled\`. We can see that the \`type\` attribute is set to the static value \`button\` and the \`disabled\` attribute is linked with the component prop \`disabled\`. So, we can avoid the test for static attributes and only test the computed properties.

\`\`\`js
it("should be disabled", () => {
  const wrapper = mount(FabButton, {
    propsData: {
      disabled: "disabled",
      text: "My Button"
    }
  })

  // assertions after loading the component
  expect(wrapper.attributes('disabled').toBe('disabled'))
  expect(wrapper.text()).toBe("My Button")
})
\`\`\`

Some points to remember:
- do not test other components' functionalities otherwise your tests would not be a **unit** test
- do not test functionalities from dependencies of your project
- do not test static values as they remain static in any situation
- do not focus on complete line-based coverage, as it tends to focus on the internal implementation details of the components, which could lead to brittle tests

##### \`mount\` and \`shallowMount\`
I mostly use \`shallowMount\` for unit testing because it does not bother about the other imported or external components used within the component being tested. Additional to that, it does allow us to assert the props provided to those external components. But, if we want to test the component's functionality, we can use \`mount\` instead. For example, if we have to click some element inside the component, we can choose \`mount\` instead of \`shallowMount\`.

##### Stubs
I try to stub the component when I'm testing as much as possible. For example, if I'm writing a unit test for a component that uses some other component, I can stub that dependency and then test the component.

While working with \`shallowMount\`, sometimes I get props or attributes set as \`[Object][Object]\`. I cannot parse this to object and further assertions cannot be made. In order to solve this, I use stubs more precisely. Provide the actual component for the stubs rather than just a boolean value.
\`\`\`js
// Incorrect: this may not always work
shallowMount(Component, {
  stubs: {
    // default stub
    FabButton: true
  }
})
\`\`\`
\`\`\`js
// Correct: stub with the actual component
import { createLocalVue, shallowMount } from '@vue/test-utils'
import FabButton from "@/somelib/component/FabButton"

// if it should be used by vue
localVue.use(FabButton)

shallowMount(Component, {
  localVue,
  stubs: {
    // specific implementation
    'FabButton': FabButton
  }
})
\`\`\`

##### Mocks
Mocks are very useful while unit testing. Our components usually use various methods from other components, mixins, libraries, etc. These are not our responsibility. So, we need to mock them.

Mocking is very easy. We have to remember a few things:
- mock before \`mounting\` the component
- reset or restore mocks after the test
- prefer mocking the return values for methods rather than the actual methods themselves

With jest, mocking is done in the following way:
\`\`\`js
// mocks a module with an auto-mocked version
// 'factory' and 'options' parameters are optional
jest.mock(moduleName, factory, options)
// mock internal private functions
const myMockFn = jest.fn()
  .mockReturnValue(true) // default return value
  .mockReturnValueOnce(1) // return value for first call
  .mockReturnValueOnce(2) // return value for second call

// 'first call', 'second call', 'default', 'default'
console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());

// mock external library
jest.mock('@nextcloud/axios')
// mock external library methods
jest.mock('lodash', () => ({
  ...jest.requireActual('lodash'),
  debounce: fn => { fn.cancel = jest.fn(); return fn }
}))
\`\`\`

##### Spying
It creates a mock function similar to \`jest.fn\` but also records calls to the mock function.

By default, \`jest.spyOn\` also calls the spied method. But if we want to overwrite the original function, we can use:
\`\`\`js
jest.spyOn(object, methodName).mockImplementations(() => customImplementation)
\`\`\`

##### User Interactions
These are well described in the documentation for the [vue-test-utils](https://v1.test-utils.vuejs.org).

Some points I want to mention:
- always use \`await\` while performing user interactions
  \`\`\`js
  await wrapper.find('button').trigger('click')
  \`\`\`
- always use \`wrapper.vm\` to access the component's instance
  \`\`\`js
  expect(wrapper.vm.searchResults).toEqual([])
  \`\`\`
- make sure to use \`wrapper.vm.$nextTick\` to wait for async operations to complete if needed
  \`\`\`js
  await wrapper.find('button').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.find('.content').exists()).toBeTruthy()
  \`\`\`
- make sure to re-query elements whose states are changed after some interactions:

  Assume a component with a button which toggles the existence of content in the DOM.
  \`\`\`js
  // Incorrect way:
  const content = wrapper.find('.content')
  await wrapper.find('button').trigger('click')
  expect(fab.exists()).toBeTruthy()
  \`\`\`
  Here the \`content\` element is queried before clicking the button. So at this stage, the content is not there. Now even if we click the toggler, the \`content\` element will remain unchanged for us. That's why we have to re-query for this element.
  \`\`\`js
  // Correct way:
  const content = wrapper.find('.content')
  expect(content.exists()).toBeFalsy()
  await wrapper.find('button').trigger('click')
  expect(content.exists()).toBeTruthy()
  \`\`\`

##### Snapshots
Snapshots are very useful while writing tests. We can use them to check the DOM structure of the component or any other data like objects, arrays, etc.

For example, let's say we have a component like this:
\`\`\`vue
<template>
  <div class="card">
    <div class="title">{{card.title}}</div>
    <div class="subtitle">{{card.subtitle}}</div>
    <div class="author">{{card.author.username}}</div>
    <div class="actions">
      <button class="delete" :disabled="!card.canDelete()">Delete</button>
      <button class="edit" :disabled="!card.canEdit()">Edit</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
<\/script>
\`\`\`

It would be a bit more tedious to find and expect each detail from the component.
\`\`\`js
it('should render the card correctly', () => {
  // mount the component with the card data
  const title = wrapper.find('.title').text()
  const subtitle = wrapper.find('.subtitle').text()
  const author = wrapper.find('.author').text()
  const deleteButton = wrapper.find('button.delete')
  const editButton = wrapper.find('button.edit')
  expect(title).toEqual('Hello World')
  expect(subtitle).toEqual('This is a subtitle')
  expect(author).toEqual('John Doe')
  expect(deleteButton.attributes().disabled).toBeTruthy()
  expect(editButton.attributes().disabled).toBeFalsy()
})
\`\`\`
This is tedious and difficult to maintain. So we can use snapshots to check the whole DOM structure of the component.
\`\`\`js
it('should render the card correctly', () => {
  // mount the component with the card data
  const card = wrapper.find('.card')
  expect(card).toMatchSnapshot()
})
\`\`\`
That's it. All the card data is now checked, and it is much easier to maintain. If something changes in the component, we just need to update the snapshot.

> ##### Curious how snapshots are saved and maintained?
>
> When we introduce any test cases that make use of snapshots, at the first time of the test run, the test runner will generate and save the screenshot(s) in a folder \`__snapshots__\` just where the test file is located.
>
> Now, when we run the test again, the test runner compares the saved snapshot with the current DOM structure and fails if the two are different.
>
> To update the current snapshot, we can use the \`--updateSnapshot\` flag or just use the jest interactive mode.
> \`\`\`shell
> jest --updateSnapshot
> \`\`\`

This is also helpful to \`assert\` for large datasets like:
\`\`\`js
expect(response).toMatchObject([
  {id: 1, name: 'Rose', color: {r: 255, g: 0, b: 0}},
  {id: 2, name: 'Lily', color: {r: 0, g: 255, b: 0}},
  {id: 3, name: 'Sunflower', color: {r: 0, g: 0, b: 255}}
])
\`\`\`
can be written as:
\`\`\`js
expect(response).toMatchSnapshot()
\`\`\`
This will save the response object as a snapshot, and our test will look neater. Also, if something changes in the response, we just need to update the snapshot.

#### Final Thoughts
In a nutshell, unit testing with Vue components with Jest and vue-test-utils is fun. Do not try to get 100% coverage, rather try to test the actual features of the component. The Vue community has good documentation and guides on how to test Vue components. Thus, you're likely to have fewer problems testing your components and securing your path forward.
`,"/src/assets/VisualRegressionTesting/nightwatch-vrt.md":`---
title: Visual Regression Test with Nigthwatch VRT
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Nov 3, 2021
tags: visual-testing, testing, javascript
banner:
seriesTitle: Visual Regression Testing (VRT)
episode: 2
---

Firstly, if you don't have any idea about what Visual Regression Test (VRT) is then I would recommend that you read my previous blog [Insight to Visual Regression Testing](https://dev.to/jankaritech/insight-to-visual-regression-testing-25mh). If you have already read that one or you already have some idea about "What is VRT?", then you are now ready to read this blog. The figure below (By Galaxy Weblinks) also gives a basic idea about VRT and the various tools that can be used for automated VRT.

![image](/src/assets/VisualRegressionTesting/images/VRT_Galaxy_Weblinks.png)

The definition of \`nightwatch-vrt\` is quite clear from its name. It is a VRT tool that works as an extension to [nightwatch.js](https://nightwatchjs.org/). Using \`nightwatch-vrt\` is pretty straightforward. You only need to invoke the \`screenshotIdenticalToBaseline\` function to make a comparison of the current screenshot with the respective baseline image. And if you look at the internal [logic](https://github.com/Talank/nightwatch-vrt/blob/master/assertions/screenshotIdenticalToBaseline.js) of this function then you will find that all it does is wait for an element to be present, then capture the screenshot of that element, compare it with the baseline, and finally return the comparison result. And if you look further into the image comparison logic then you will notice that \`nightwatch-vrt\` actually uses [JIMP](https://www.npmjs.com/package/jimp) (JavaScript Image Manipulation Program) which is built with Javascript with no native dependencies.

## Configuration
As I already said that \`nightwatch-vrt\` is an extension to the \`nightwatch.js\`, you first need to setup nightwatch.js. And if you don't know how to setup \`nightwatch.js\` then you can refer to one of my previous blogs [Setup Nightwatch and run your first test
](https://dev.to/jankaritech/setup-nightwatch-and-run-your-first-test-o7o). Next, add nightwatch-vrt in the devDependencies of your project. You can do it using the following command using yarn.
\`\`\`
yarn add --dev nightwatch-vrt
\`\`\`
Now, you need to add/edit the \`custom_commands_path\` and \`custom_assertions_path\` in your nightwatch configuration file as follows.
\`\`\`js
custom_commands_path: [
    'node_modules/nightwatch-vrt/commands'
],
custom_assertions_path: [
    'node_modules/nightwatch-vrt/assertions'
]
\`\`\`
In addition to the above-mentioned setup, you also need to add \`visual_regression_settings\` to the nightwatch configuration file's \`globals\` section as follows.
\`\`\`js
globals: {
    visual_regression_settings: {
        generate_screenshot_path: generateScreenshotFilePath,
        latest_screenshots_path: 'tests/vrt/latest',
        baseline_screenshots_path: 'tests/vrt/baseline',
        diff_screenshots_path: 'tests/vrt/diff',
        threshold: 0.02,
        prompt: false,
        always_save_diff_screenshot: false
    }
},
\`\`\`

And you also need to define the function that you specified in \`generate_screenshot_path\`. For example, in the above configuration, I have used the function \`generateScreenshotFilePath\` which I defined as follows.
\`\`\`js
function generateScreenshotFilePath(nightwatchClient, basePath, imagePath) {
    return path.join(process.cwd(), basePath, imagePath)
}
\`\`\`
We pass a function to \`generate_screenshot_path\` because the VRT screenshot path generator option accepts a function that returns a string containing the full path based on the test properties. We can not provide a constant string instead of the path generator function because not all tests use the same screenshot.

So the above configuration stores the baseline, latest, and diff images in the subfolders \`tests/vrt/baseline\`, \`tests/vrt/latest\`, and \`tests/vrt/diff\` respectively. If we provide a common path for baseline, diff and latest images then we should provide some optional configurations such as suffix to distinguish the images. These optional configurations are \`baseline_suffix\`, \`diff_suffix\`, and \`latest_suffix\`.

The \`threshold\` option in the \`visual_regression_settings\` specifies how sensitive the image comparison will be. To understand what all other options mean, you can check out the README file of [nightwatch-vrt github repository](https://github.com/Crunch-io/nightwatch-vrt)

## Write Tests

As usual, we start writing our test by making the feature file at first, and the visual check can be done in the step definitions. For the demonstration, I am referencing [this project](https://github.com/Talank/vrt-demo) which is a simple to-do app in react.

One of the test scenarios in this app could be as follows:

\`\`\`gherkin
Scenario: toDo task add test
    Given the user has opened the home page
    When the user adds a new task "New Task"
    Then the task "New Task" should appear in the toDo list
    And the toDo form should match the default baseline
\`\`\`

Here, the step \`And the toDo form should match the default baseline\`, will perform the visual regression test, and so in the demonstration section, I will be done. And I will focus only on that step.

The implementation of this step can look like the following:

\`\`\`js
const { Then } = require('cucumber');
const { client } = require('nightwatch-api');

const toDoFormSelector = "#to-do-form"

const assertScreenShot = async function(imgName) {
    await client.waitForElementVisible(toDoFormSelector)
    await client.assert.screenshotIdenticalToBaseline(
        toDoFormSelector,
        imgName,
        \`Matched the \${imgName} of toDo page\`
    )
}

Then(/^the toDo form should match the default baseline$/, function () {
    return assertScreenShot("todo-form")
});
\`\`\`

The \`assertScreenShot\` function uses the command \`screenshotIdenticalToBaseline()\` that is defined in the \`nightwatch-vrt\` library. \`screenshotIdenticalToBaseline\` could take up to 4 parameters where only the first parameter is mandatory:
- The first one is a String which is the selector of the element that should be tested visually.
- The second one is also a String which is the name of the image that is used for the name of the baseline, diff, or latest image. The default name is the name of the selector provided as the first parameter.
- The third one is NightwatchVRToptions settings that override the defaults and \`visual_regression_settings\` of the nightwatch configuration file.
- And the fourth parameter is a String which is the message that is displayed in the console upon the successful completion of the test.

When the VRT is executed for the first time, the baseline images do not exist and so they are created. When the test finds the baseline image with the appropriate name, it will compare the screenshot of the element with the respective image in the baseline. So, if you are running the test for the first time, it will execute twice, once to create the baseline images and again to compare the current state with the baseline. Next time when you run the test, it will be executed only once as the baseline is created only once. However, if there are some changes in the UI and the test fails, then you need to change the baseline image as well.

There are mainly 2 ways to update your baseline image. The easiest way to do this is to set the configuration \`always_save_diff_screenshot:\` to \`true\` in the nightwatch configuration file's \`globals\` section. This will update all the failing screenshots at once. If you need to update only one screenshot then the appropriate method to update it is to delete the baseline screenshot and run the tests again which will take the updated screenshot and save it as the new baseline.

## Execute the test

You do not need any special commands to execute the VRT. You can execute the scenario containing the feature file like a normal nightwatch test and that's it. If you need help with setting up nightwatch and running the tests, you can read [this blog](https://dev.to/jankaritech/setup-nightwatch-and-run-your-first-test-o7o) of mine.
`,"/src/assets/VisualRegressionTesting/vrt-introduction.md":`---
title: Insight to Visual Regression Testing
authorName: Talank Baral
authorAvatar: https://www.jankaritech.com/images/2021/12/29/p1110976-crop-col-800.jpg
authorLink: https://github.com/Talank
createdAt: Nov 3, 2021
tags: vrt, testing, image-processing
banner:
seriesTitle: Visual Regression Testing (VRT)
episode: 1
---

"What you see is what you get" -Flip Wilson

Web UI is advancing every day, and so is test automation. But, there might be several bugs in your application's UI that automated functional testing often misses. Some of these are called visual errors. Visual errors do not mean logical faults in the software. These are the aesthetic flaws that cause interfaces to be displayed incorrectly and make the UX worse. Visual regression tests ensure that there isn't any unintended change in UI. For this, an initial screenshot (called baseline) of the application is captured then, in each successive test, the screenshot of the same component in the current state is compared with the baseline image. If any distinguished changes are encountered, then the test is marked as failed.

It is crucial to know that VRT intends to specify the deviations in appearance only, and failed VRT does not imply that the application is functionally incorrect. For instance, while testing for the responsiveness of a web page, even if automation tools like nightwatch.js can find all the components, it can not be ensured that all those components are aligned properly. So, in the aforementioned scenario, VRT fails even though the functional regression test passes.

## How does it work?
The primal concept behind VRT is a comparison between two images. Some visual testing tools do pixel to pixel comparison only, whereas some others are more innovative and make use of computer vision to automatically manage the baseline. However, the UI does not appear exactly the same in all displays and pixel-to-pixel comparison becomes flakier. So to avoid zero-tolerance, QA Engineers normally set the threshold to more than 0 differences. In most of the VRT tools such as \`nightwatch-vrt\`, the value of the threshold ranges from \`0\` to \`1\` where a smaller value means more sensitive comparison.

After comparing the latest state of the UI elements with the baseline image, if some difference is found by the VRT tool, a difference image is produced so that testers can easily see the difference after the test failure. For example, as shown in the image below, the change in color of the \`Add\` button is detected by \`nightwatch-vrt\`.

![image](/src/assets/VisualRegressionTesting/images/howVRTWorks.png)

## Cons of VRT
- By automating the VRT, there will be a rise in maintenance cost as we need to keep screenshots of the web interface updated with respect to different browsers, devices, operating systems, etc.
- Image comparison takes more time than normal assertions used in functional testing.
- Image comparison can lead to false-positive and unreliable results.

## Limitation of Automated VRT
CSS animations are very important artifacts for the enhancement of UX. No matter how minor it is, functional animations such as ripple effect in buttons, text animations, animation in loading sign, etc promote user engagements and make an application interactive. But VRT tools that are currently available ignore these animations by either freezing frames, disabling animations, or simply ignoring the CSS transitions.

## Tools
There are several free and commercially available tools for VRT. [Here](https://visualregressiontesting.com/tools.html), you can find a bigger list of these tools. In this blog, I am going to discuss only 3 tools (nightwatch-vrt, percy, and applitools)

### Nightwatch-vrt
Nightwatch-vrt is an open-source library to perform VRT. It is an extension to \`nightwatch.js\` with some additional custom commands that compare the screenshot of a DOM element identified by a selector with the baseline image. If there is no baseline image for a particular DOM element, it creates one and uses that for future assertions.

The working mechanism of nightwatch-vrt is quite straightforward. It uses JavaScript Image Manipulation Program [Jimp](https://www.npmjs.com/package/jimp), which is an image processing tool written in Javascript, to compare the current screenshot of a DOM element with the baseline image. The percentage difference in the two images is then compared with the threshold value to get the result of VRT.

To know more about nightwatch-vrt, you can refer to [their github repo](https://github.com/Crunch-io/nightwatch-vrt), or you can stay tuned for my next blog.

### Percy
Percy is a commercial tool that can be used for VRT and its working mechanism is pretty advanced compared to nightwatch-vrt. It has a screenshot stabilization technique by freezing animated GIFs on the first frame and disables CSS animation and transition styles. For automated visual testing, web animations are responsible for false-positive results in many cases. There are 3 other methods (Handling dynamic data, Third-party fonts, and ignoring 1px diffs) that Percy uses for stabilization of screenshots and you can read details about it in [this documentation](https://docs.percy.io/docs/freezing-dynamic-data). Another advantage of this tool is that it provides SDKs that can be integrated with UI tests in several languages and testing tools like cypress, puppeteer, etc.

### Applitools
Like Percy, Applitools is also a commercial platform that provides several functionalities for automated visual testing. Its visual testing library is called Applitools Eyes which can be implemented with different languages like Javascript, Java, PHP, etc. With its visual AI algorithm, \`Applitools Eyes\` tries to distinguish visual bugs that are only visible to human eyes. By using the \`layout algorithm\`, if testers specify certain regions on the page that contain \`dynamic contents\` like date and time, Applitools can check only for layout but not the actual contents. Similarly, if you have some elements in your UI that contain animated GIFs or CSS animations, you can specify those regions as layouts and Applitools will only check for the element to be visible, but ignores the animation.

To learn more about its visual AI algorithms, you can refer to [this documentation](https://applitools.com/applitools-ai-and-deep-learning/).

I hope you get some basic ideas about VRT, its pros, cons, and shortcomings. In my next blog, I will show you how to start implementing VRT using \`nightwatch-vrt\`. Until then, happy coding.
`};for(const n in t)e.push(n);return{filePaths:e,fileModules:t}},ku=e=>{var m,k;const{modules:t}=Vt(),s=(k=(m=L.lexer(t.value[e]).slice(1,2)[0].text)==null?void 0:m.split(`
`))==null?void 0:k.map(C=>C.split(": ")),o=s[0][1],r=s[1][1],i=s[2][1],a=s[3][1];let l=s[4][1];l=l?new Date(l):"-";const c=s[5][1].split(", "),u=s[6][1],f=t.value[e].length,d={title:o,contentLength:f,authorName:r,authorAvatar:i,authorLink:a,createdAt:l,tags:c,banner:u,sourcePath:e};if(s.length===9){const C=s[7][1],A=s[8][1];return{...d,seriesTitle:C,episode:A}}return d},Tu=()=>{const e=[],{list:t}=Vt();return t.value.forEach(n=>{e.push(ku(n))}),e},Su=()=>{const e={},t=Tu();for(let n=0;n<t.length;n++){const s=t[n];s.seriesTitle?(Object.hasOwn(e,s.seriesTitle)||(e[s.seriesTitle]={}),e[s.seriesTitle][s.title]=s.sourcePath):e[s.title]=s.sourcePath}return e},Nh=e=>{const{modules:t}=Vt(),n=L.lexer(t.value[e]);return L.parser(n.slice(3))},Wh=e=>{const{modules:t}=Vt();return L.lexer(t.value[e]).filter(s=>s.type==="heading")};const xu={__name:"App",setup(e){const{dark:t}=bi(),{open:n}=to(),{setList:s,setModules:o,setSidebarList:r}=Vt();xt(t,()=>{document.body.toggleAttribute("theme-dark")});const{filePaths:i,fileModules:a}=vu();s(i),o(a),r(Su());const l=fn(!1);Ms(()=>{window.addEventListener("scroll",c)});const c=f=>{if(typeof window=="undefined")return;const d=window.pageYOffset||f.target.scrollTop;l.value=d>150},u=()=>{window.scroll({top:0,behavior:"smooth"})};return(f,d)=>{const m=sl("router-view"),k=wc;return fe(),xe("div",null,[Se(ue(Hc)),f.$route.name!=="404"?(fe(),Ks(ue(eu),{key:0})):Lt("",!0),be("div",{class:Ut(["content",{"with-sidebar":ue(n)&f.$route.name!=="404","without-sidebar":!ue(n)&f.$route.name!=="404"}])},[Se(m),l.value?(fe(),xe("button",{key:0,class:"scroll-to-top small-shadow",onClick:u},[Se(k)])):Lt("",!0)],2)])}}};/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const xi=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Jt=e=>xi?Symbol(e):"_vr_"+e,_u=Jt("rvlm"),Ko=Jt("rvd"),Jn=Jt("r"),_i=Jt("rl"),As=Jt("rvl"),Ft=typeof window!="undefined";function Iu(e){return e.__esModule||xi&&e[Symbol.toStringTag]==="Module"}const re=Object.assign;function ss(e,t){const n={};for(const s in t){const o=t[s];n[s]=Array.isArray(o)?o.map(e):e(o)}return n}const on=()=>{},Au=/\/$/,Cu=e=>e.replace(Au,"");function os(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(s=t.slice(0,a),r=t.slice(a+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=ju(s!=null?s:t,n),{fullPath:s+(r&&"?")+r+i,path:s,query:o,hash:i}}function Pu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Zo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Eu(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&zt(t.matched[s],n.matched[o])&&Ii(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function zt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ii(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Du(e[n],t[n]))return!1;return!0}function Du(e,t){return Array.isArray(e)?Qo(e,t):Array.isArray(t)?Qo(t,e):e===t}function Qo(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function ju(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let o=n.length-1,r,i;for(r=0;r<s.length;r++)if(i=s[r],!(o===1||i==="."))if(i==="..")o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var pn;(function(e){e.pop="pop",e.push="push"})(pn||(pn={}));var rn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(rn||(rn={}));function Ru(e){if(!e)if(Ft){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Cu(e)}const Bu=/^[^#]+#/;function Fu(e,t){return e.replace(Bu,"#")+t}function Ou(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Kn=()=>({left:window.pageXOffset,top:window.pageYOffset});function Nu(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Ou(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Xo(e,t){return(history.state?history.state.position-t:-1)+e}const Cs=new Map;function Wu(e,t){Cs.set(e,t)}function Lu(e){const t=Cs.get(e);return Cs.delete(e),t}let qu=()=>location.protocol+"//"+location.host;function Ai(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let a=o.includes(e.slice(r))?e.slice(r).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),Zo(l,"")}return Zo(n,e)+s+o}function zu(e,t,n,s){let o=[],r=[],i=null;const a=({state:d})=>{const m=Ai(e,location),k=n.value,C=t.value;let A=0;if(d){if(n.value=m,t.value=d,i&&i===k){i=null;return}A=C?d.position-C.position:0}else s(m);o.forEach(T=>{T(n.value,k,{delta:A,type:pn.pop,direction:A?A>0?rn.forward:rn.back:rn.unknown})})};function l(){i=n.value}function c(d){o.push(d);const m=()=>{const k=o.indexOf(d);k>-1&&o.splice(k,1)};return r.push(m),m}function u(){const{history:d}=window;!d.state||d.replaceState(re({},d.state,{scroll:Kn()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function er(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?Kn():null}}function Gu(e){const{history:t,location:n}=window,s={value:Ai(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:qu()+e+l;try{t[u?"replaceState":"pushState"](c,"",d),o.value=c}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function i(l,c){const u=re({},t.state,er(o.value.back,l,o.value.forward,!0),c,{position:o.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=re({},o.value,t.state,{forward:l,scroll:Kn()});r(u.current,u,!0);const f=re({},er(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:o,push:a,replace:i}}function Uu(e){e=Ru(e);const t=Gu(e),n=zu(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=re({location:"",base:e,go:s,createHref:Fu.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Hu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Uu(e)}function Mu(e){return typeof e=="string"||e&&typeof e=="object"}function Ci(e){return typeof e=="string"||typeof e=="symbol"}const lt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pi=Jt("nf");var tr;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(tr||(tr={}));function Gt(e,t){return re(new Error,{type:e,[Pi]:!0},t)}function ct(e,t){return e instanceof Error&&Pi in e&&(t==null||!!(e.type&t))}const nr="[^/]+?",$u={sensitive:!1,strict:!1,start:!0,end:!0},Vu=/[.+*?^${}()[\]/\\]/g;function Yu(e,t){const n=re({},$u,t),s=[];let o=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(o+="/"),o+=d.value.replace(Vu,"\\$&"),m+=40;else if(d.type===1){const{value:k,repeatable:C,optional:A,regexp:T}=d;r.push({name:k,repeatable:C,optional:A});const j=T||nr;if(j!==nr){m+=10;try{new RegExp(`(${j})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${j}): `+H.message)}}let U=C?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;f||(U=A&&c.length<2?`(?:/${U})`:"/"+U),A&&(U+="?"),o+=U,m+=20,A&&(m+=-8),C&&(m+=-20),j===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(c){const u=c.match(i),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",k=r[d-1];f[k.name]=m&&k.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:k,repeatable:C,optional:A}=m,T=k in c?c[k]:"";if(Array.isArray(T)&&!C)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const j=Array.isArray(T)?T.join("/"):T;if(!j)if(A)d.length<2&&e.length>1&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${k}"`);u+=j}}return u}return{re:i,score:s,keys:r,parse:a,stringify:l}}function Ju(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ku(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=Ju(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(sr(s))return 1;if(sr(o))return-1}return o.length-s.length}function sr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Zu={type:0,value:""},Qu=/[a-zA-Z0-9_]/;function Xu(e){if(!e)return[[]];if(e==="/")return[[Zu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,l,c="",u="";function f(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),i()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Qu.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),i(),o}function eh(e,t,n){const s=Yu(Xu(e.path),n),o=re(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function th(e,t){const n=[],s=new Map;t=rr({strict:!1,end:!0,sensitive:!1},t);function o(u){return s.get(u)}function r(u,f,d){const m=!d,k=sh(u);k.aliasOf=d&&d.record;const C=rr(t,u),A=[k];if("alias"in u){const U=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of U)A.push(re({},k,{components:d?d.record.components:k.components,path:H,aliasOf:d?d.record:k}))}let T,j;for(const U of A){const{path:H}=U;if(f&&H[0]!=="/"){const G=f.record.path,X=G[G.length-1]==="/"?"":"/";U.path=f.record.path+(H&&X+H)}if(T=eh(U,f,C),d?d.alias.push(T):(j=j||T,j!==T&&j.alias.push(T),m&&u.name&&!or(T)&&i(u.name)),"children"in k){const G=k.children;for(let X=0;X<G.length;X++)r(G[X],T,d&&d.children[X])}d=d||T,l(T)}return j?()=>{i(j)}:on}function i(u){if(Ci(u)){const f=s.get(u);f&&(s.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&s.delete(u.record.name),u.children.forEach(i),u.alias.forEach(i))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&Ku(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Ei(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!or(u)&&s.set(u.record.name,u)}function c(u,f){let d,m={},k,C;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Gt(1,{location:u});C=d.record.name,m=re(nh(f.params,d.keys.filter(j=>!j.optional).map(j=>j.name)),u.params),k=d.stringify(m)}else if("path"in u)k=u.path,d=n.find(j=>j.re.test(k)),d&&(m=d.parse(k),C=d.record.name);else{if(d=f.name?s.get(f.name):n.find(j=>j.re.test(f.path)),!d)throw Gt(1,{location:u,currentLocation:f});C=d.record.name,m=re({},f.params,u.params),k=d.stringify(m)}const A=[];let T=d;for(;T;)A.unshift(T.record),T=T.parent;return{name:C,path:k,params:m,matched:A,meta:rh(A)}}return e.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function nh(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function sh(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:oh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function oh(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function or(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rh(e){return e.reduce((t,n)=>re(t,n.meta),{})}function rr(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Ei(e,t){return t.children.some(n=>n===e||Ei(e,n))}const Di=/#/g,ih=/&/g,ah=/\//g,lh=/=/g,ch=/\?/g,ji=/\+/g,uh=/%5B/g,hh=/%5D/g,Ri=/%5E/g,dh=/%60/g,Bi=/%7B/g,ph=/%7C/g,Fi=/%7D/g,fh=/%20/g;function io(e){return encodeURI(""+e).replace(ph,"|").replace(uh,"[").replace(hh,"]")}function mh(e){return io(e).replace(Bi,"{").replace(Fi,"}").replace(Ri,"^")}function Ps(e){return io(e).replace(ji,"%2B").replace(fh,"+").replace(Di,"%23").replace(ih,"%26").replace(dh,"`").replace(Bi,"{").replace(Fi,"}").replace(Ri,"^")}function gh(e){return Ps(e).replace(lh,"%3D")}function wh(e){return io(e).replace(Di,"%23").replace(ch,"%3F")}function bh(e){return e==null?"":wh(e).replace(ah,"%2F")}function Bn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function yh(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(ji," "),i=r.indexOf("="),a=Bn(i<0?r:r.slice(0,i)),l=i<0?null:Bn(r.slice(i+1));if(a in t){let c=t[a];Array.isArray(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function ir(e){let t="";for(let n in e){const s=e[n];if(n=gh(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&Ps(r)):[s&&Ps(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function vh(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Array.isArray(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}function Zt(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function dt(e,t,n,s,o){const r=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const l=f=>{f===!1?a(Gt(4,{from:n,to:t})):f instanceof Error?a(f):Mu(f)?a(Gt(2,{from:t,to:f})):(r&&s.enterCallbacks[o]===r&&typeof f=="function"&&r.push(f),i())},c=e.call(s&&s.instances[o],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function rs(e,t,n,s){const o=[];for(const r of e)for(const i in r.components){let a=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(kh(a)){const c=(a.__vccOpts||a)[t];c&&o.push(dt(c,n,s,r,i))}else{let l=a();o.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const u=Iu(c)?c.default:c;r.components[i]=u;const d=(u.__vccOpts||u)[t];return d&&dt(d,n,s,r,i)()}))}}return o}function kh(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ar(e){const t=Ze(Jn),n=Ze(_i),s=ze(()=>t.resolve(ue(e.to))),o=ze(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(zt.bind(null,u));if(d>-1)return d;const m=lr(l[c-2]);return c>1&&lr(u)===m&&f[f.length-1].path!==m?f.findIndex(zt.bind(null,l[c-2])):d}),r=ze(()=>o.value>-1&&_h(n.params,s.value.params)),i=ze(()=>o.value>-1&&o.value===n.matched.length-1&&Ii(n.params,s.value.params));function a(l={}){return xh(l)?t[ue(e.replace)?"replace":"push"](ue(e.to)).catch(on):Promise.resolve()}return{route:s,href:ze(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}const Th=Vr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ar,setup(e,{slots:t}){const n=$t(ar(e)),{options:s}=Ze(Jn),o=ze(()=>({[cr(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[cr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:di("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),Sh=Th;function xh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _h(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Array.isArray(o)||o.length!==s.length||s.some((r,i)=>r!==o[i]))return!1}return!0}function lr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const cr=(e,t,n)=>e!=null?e:t!=null?t:n,Ih=Vr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ze(As),o=ze(()=>e.route||s.value),r=Ze(Ko,0),i=ze(()=>o.value.matched[r]);xn(Ko,r+1),xn(_u,i),xn(As,o);const a=fn();return xt(()=>[a.value,i.value,e.name],([l,c,u],[f,d,m])=>{c&&(c.instances[u]=l,d&&d!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),l&&c&&(!d||!zt(c,d)||!f)&&(c.enterCallbacks[u]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=o.value,c=i.value,u=c&&c.components[e.name],f=e.name;if(!u)return ur(n.default,{Component:u,route:l});const d=c.props[e.name],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,C=di(u,re({},m,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(c.instances[f]=null)},ref:a}));return ur(n.default,{Component:C,route:l})||C}}});function ur(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ah=Ih;function Ch(e){const t=th(e.routes,e),n=e.parseQuery||yh,s=e.stringifyQuery||ir,o=e.history,r=Zt(),i=Zt(),a=Zt(),l=Ta(lt);let c=lt;Ft&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ss.bind(null,w=>""+w),f=ss.bind(null,bh),d=ss.bind(null,Bn);function m(w,B){let I,F;return Ci(w)?(I=t.getRecordMatcher(w),F=B):F=w,t.addRoute(F,I)}function k(w){const B=t.getRecordMatcher(w);B&&t.removeRoute(B)}function C(){return t.getRoutes().map(w=>w.record)}function A(w){return!!t.getRecordMatcher(w)}function T(w,B){if(B=re({},B||l.value),typeof w=="string"){const V=os(n,w,B.path),h=t.resolve({path:V.path},B),p=o.createHref(V.fullPath);return re(V,h,{params:d(h.params),hash:Bn(V.hash),redirectedFrom:void 0,href:p})}let I;if("path"in w)I=re({},w,{path:os(n,w.path,B.path).path});else{const V=re({},w.params);for(const h in V)V[h]==null&&delete V[h];I=re({},w,{params:f(w.params)}),B.params=f(B.params)}const F=t.resolve(I,B),ne=w.hash||"";F.params=u(d(F.params));const ce=Pu(s,re({},w,{hash:mh(ne),path:F.path})),Y=o.createHref(ce);return re({fullPath:ce,hash:ne,query:s===ir?vh(w.query):w.query||{}},F,{redirectedFrom:void 0,href:Y})}function j(w){return typeof w=="string"?os(n,w,l.value.path):re({},w)}function U(w,B){if(c!==w)return Gt(8,{from:B,to:w})}function H(w){return $(w)}function G(w){return H(re(j(w),{replace:!0}))}function X(w){const B=w.matched[w.matched.length-1];if(B&&B.redirect){const{redirect:I}=B;let F=typeof I=="function"?I(w):I;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=j(F):{path:F},F.params={}),re({query:w.query,hash:w.hash,params:w.params},F)}}function $(w,B){const I=c=T(w),F=l.value,ne=w.state,ce=w.force,Y=w.replace===!0,V=X(I);if(V)return $(re(j(V),{state:ne,force:ce,replace:Y}),B||I);const h=I;h.redirectedFrom=B;let p;return!ce&&Eu(s,F,I)&&(p=Gt(16,{to:h,from:F}),At(F,F,!0,!1)),(p?Promise.resolve(p):J(h,F)).catch(g=>ct(g)?ct(g,2)?g:Ee(g):le(g,h,F)).then(g=>{if(g){if(ct(g,2))return $(re(j(g.to),{state:ne,force:ce,replace:Y}),B||h)}else g=de(h,F,!0,Y,ne);return ee(h,F,g),g})}function D(w,B){const I=U(w,B);return I?Promise.reject(I):Promise.resolve()}function J(w,B){let I;const[F,ne,ce]=Ph(w,B);I=rs(F.reverse(),"beforeRouteLeave",w,B);for(const V of F)V.leaveGuards.forEach(h=>{I.push(dt(h,w,B))});const Y=D.bind(null,w,B);return I.push(Y),Dt(I).then(()=>{I=[];for(const V of r.list())I.push(dt(V,w,B));return I.push(Y),Dt(I)}).then(()=>{I=rs(ne,"beforeRouteUpdate",w,B);for(const V of ne)V.updateGuards.forEach(h=>{I.push(dt(h,w,B))});return I.push(Y),Dt(I)}).then(()=>{I=[];for(const V of w.matched)if(V.beforeEnter&&!B.matched.includes(V))if(Array.isArray(V.beforeEnter))for(const h of V.beforeEnter)I.push(dt(h,w,B));else I.push(dt(V.beforeEnter,w,B));return I.push(Y),Dt(I)}).then(()=>(w.matched.forEach(V=>V.enterCallbacks={}),I=rs(ce,"beforeRouteEnter",w,B),I.push(Y),Dt(I))).then(()=>{I=[];for(const V of i.list())I.push(dt(V,w,B));return I.push(Y),Dt(I)}).catch(V=>ct(V,8)?V:Promise.reject(V))}function ee(w,B,I){for(const F of a.list())F(w,B,I)}function de(w,B,I,F,ne){const ce=U(w,B);if(ce)return ce;const Y=B===lt,V=Ft?history.state:{};I&&(F||Y?o.replace(w.fullPath,re({scroll:Y&&V&&V.scroll},ne)):o.push(w.fullPath,ne)),l.value=w,At(w,B,I,Y),Ee()}let me;function Pe(){me||(me=o.listen((w,B,I)=>{const F=T(w),ne=X(F);if(ne){$(re(ne,{replace:!0}),F).catch(on);return}c=F;const ce=l.value;Ft&&Wu(Xo(ce.fullPath,I.delta),Kn()),J(F,ce).catch(Y=>ct(Y,12)?Y:ct(Y,2)?($(Y.to,F).then(V=>{ct(V,20)&&!I.delta&&I.type===pn.pop&&o.go(-1,!1)}).catch(on),Promise.reject()):(I.delta&&o.go(-I.delta,!1),le(Y,F,ce))).then(Y=>{Y=Y||de(F,ce,!1),Y&&(I.delta?o.go(-I.delta,!1):I.type===pn.pop&&ct(Y,20)&&o.go(-1,!1)),ee(F,ce,Y)}).catch(on)}))}let Ae=Zt(),ge=Zt(),we;function le(w,B,I){Ee(w);const F=ge.list();return F.length?F.forEach(ne=>ne(w,B,I)):console.error(w),Promise.reject(w)}function te(){return we&&l.value!==lt?Promise.resolve():new Promise((w,B)=>{Ae.add([w,B])})}function Ee(w){return we||(we=!w,Pe(),Ae.list().forEach(([B,I])=>w?I(w):B()),Ae.reset()),w}function At(w,B,I,F){const{scrollBehavior:ne}=e;if(!Ft||!ne)return Promise.resolve();const ce=!I&&Lu(Xo(w.fullPath,0))||(F||!I)&&history.state&&history.state.scroll||null;return Hs().then(()=>ne(w,B,ce)).then(Y=>Y&&Nu(Y)).catch(Y=>le(Y,w,B))}const Xe=w=>o.go(w);let $e;const Fe=new Set;return{currentRoute:l,addRoute:m,removeRoute:k,hasRoute:A,getRoutes:C,resolve:T,options:e,push:H,replace:G,go:Xe,back:()=>Xe(-1),forward:()=>Xe(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:te,install(w){const B=this;w.component("RouterLink",Sh),w.component("RouterView",Ah),w.config.globalProperties.$router=B,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(l)}),Ft&&!$e&&l.value===lt&&($e=!0,H(o.location).catch(ne=>{}));const I={};for(const ne in lt)I[ne]=ze(()=>l.value[ne]);w.provide(Jn,B),w.provide(_i,$t(I)),w.provide(As,l);const F=w.unmount;Fe.add(w),w.unmount=function(){Fe.delete(w),Fe.size<1&&(c=lt,me&&me(),me=null,l.value=lt,$e=!1,we=!1),F()}}}}function Dt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Ph(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(c=>zt(c,a))?s.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(c=>zt(c,l))||o.push(l))}return[n,s,o]}function Lh(){return Ze(Jn)}const Eh=[{name:"Home",path:"/",component:()=>Et(()=>import("./HomeView.ffb982d7.js"),["assets/HomeView.ffb982d7.js","assets/HomeView.276c9fda.css","assets/BlogPeek.41acb3ee.js","assets/BlogPeek.9d1f3191.css"])},{name:"Filter",path:"/filter/:filterBy/:filterValue?",component:()=>Et(()=>import("./HomeView.ffb982d7.js"),["assets/HomeView.ffb982d7.js","assets/HomeView.276c9fda.css","assets/BlogPeek.41acb3ee.js","assets/BlogPeek.9d1f3191.css"])},{name:"Sort",path:"/sort/:sortBy",component:()=>Et(()=>import("./HomeView.ffb982d7.js"),["assets/HomeView.ffb982d7.js","assets/HomeView.276c9fda.css","assets/BlogPeek.41acb3ee.js","assets/BlogPeek.9d1f3191.css"])},{name:"Blog",path:"/blog/:name",component:()=>Et(()=>import("./PostView.caee820b.js"),["assets/PostView.caee820b.js","assets/PostView.ea0989b5.css","assets/BlogPeek.41acb3ee.js","assets/BlogPeek.9d1f3191.css"])},{name:"Series",path:"/blog/:series/:name",component:()=>Et(()=>import("./PostView.caee820b.js"),["assets/PostView.caee820b.js","assets/PostView.ea0989b5.css","assets/BlogPeek.41acb3ee.js","assets/BlogPeek.9d1f3191.css"])},{name:"404",path:"/:pathMatch(.*)*",component:()=>Et(()=>import("./404View.746dd55b.js"),["assets/404View.746dd55b.js","assets/404View.ba4a09da.css"])}],Dh=Ch({history:Hu(),routes:Eh}),jh=lc(),ao=rc(xu);ao.use(jh);ao.use(Dh);ao.mount("#app");export{Fa as A,Oa as B,je as F,no as _,be as a,Ms as b,xe as c,ue as d,Lt as e,Rh as f,Tu as g,Oh as h,Se as i,gs as j,Ks as k,bi as l,Na as m,Ut as n,fe as o,Bh as p,xl as q,fn as r,Vt as s,kn as t,Lh as u,Fh as v,xt as w,ku as x,Nh as y,Wh as z};
