const Yu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};Yu();//! moment.js
//! version : 2.29.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Sa;function D(){return Sa.apply(null,arguments)}function $u(e){Sa=e}function gt(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function mn(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Sr(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(le(e,t))return!1;return!0}function $e(e){return e===void 0}function Lt(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function ks(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function xa(e,t){var n=[],s,o=e.length;for(s=0;s<o;++s)n.push(t(e[s],s));return n}function Xt(e,t){for(var n in t)le(t,n)&&(e[n]=t[n]);return le(t,"toString")&&(e.toString=t.toString),le(t,"valueOf")&&(e.valueOf=t.valueOf),e}function Dt(e,t,n,s){return Ja(e,t,n,s,!0).utc()}function Vu(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function K(e){return e._pf==null&&(e._pf=Vu()),e._pf}var $o;Array.prototype.some?$o=Array.prototype.some:$o=function(e){var t=Object(this),n=t.length>>>0,s;for(s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};function xr(e){if(e._isValid==null){var t=K(e),n=$o.call(t.parsedDateParts,function(o){return o!=null}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=s;else return s}return e._isValid}function no(e){var t=Dt(NaN);return e!=null?Xt(K(t),e):K(t).userInvalidated=!0,t}var yi=D.momentProperties=[],Fo=!1;function Ir(e,t){var n,s,o,r=yi.length;if($e(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),$e(t._i)||(e._i=t._i),$e(t._f)||(e._f=t._f),$e(t._l)||(e._l=t._l),$e(t._strict)||(e._strict=t._strict),$e(t._tzm)||(e._tzm=t._tzm),$e(t._isUTC)||(e._isUTC=t._isUTC),$e(t._offset)||(e._offset=t._offset),$e(t._pf)||(e._pf=K(t)),$e(t._locale)||(e._locale=t._locale),r>0)for(n=0;n<r;n++)s=yi[n],o=t[s],$e(o)||(e[s]=o);return e}function _s(e){Ir(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Fo===!1&&(Fo=!0,D.updateOffset(this),Fo=!1)}function wt(e){return e instanceof _s||e!=null&&e._isAMomentObject!=null}function Ia(e){D.suppressDeprecationWarnings===!1&&typeof console!="undefined"&&console.warn&&console.warn("Deprecation warning: "+e)}function ut(e,t){var n=!0;return Xt(function(){if(D.deprecationHandler!=null&&D.deprecationHandler(null,e),n){var s=[],o,r,i,a=arguments.length;for(r=0;r<a;r++){if(o="",typeof arguments[r]=="object"){o+=`
[`+r+"] ";for(i in arguments[0])le(arguments[0],i)&&(o+=i+": "+arguments[0][i]+", ");o=o.slice(0,-2)}else o=arguments[r];s.push(o)}Ia(e+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var vi={};function Ca(e,t){D.deprecationHandler!=null&&D.deprecationHandler(e,t),vi[e]||(Ia(t),vi[e]=!0)}D.suppressDeprecationWarnings=!1;D.deprecationHandler=null;function Pt(e){return typeof Function!="undefined"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Ju(e){var t,n;for(n in e)le(e,n)&&(t=e[n],Pt(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Vo(e,t){var n=Xt({},e),s;for(s in t)le(t,s)&&(mn(e[s])&&mn(t[s])?(n[s]={},Xt(n[s],e[s]),Xt(n[s],t[s])):t[s]!=null?n[s]=t[s]:delete n[s]);for(s in e)le(e,s)&&!le(t,s)&&mn(e[s])&&(n[s]=Xt({},n[s]));return n}function Cr(e){e!=null&&this.set(e)}var Jo;Object.keys?Jo=Object.keys:Jo=function(e){var t,n=[];for(t in e)le(e,t)&&n.push(t);return n};var Ku={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Zu(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return Pt(s)?s.call(t,n):s}function Ct(e,t,n){var s=""+Math.abs(e),o=t-s.length,r=e>=0;return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,o)).toString().substr(1)+s}var Ar=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Is=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Bo={},jn={};function W(e,t,n,s){var o=s;typeof s=="string"&&(o=function(){return this[s]()}),e&&(jn[e]=o),t&&(jn[t[0]]=function(){return Ct(o.apply(this,arguments),t[1],t[2])}),n&&(jn[n]=function(){return this.localeData().ordinal(o.apply(this,arguments),e)})}function Qu(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Xu(e){var t=e.match(Ar),n,s;for(n=0,s=t.length;n<s;n++)jn[t[n]]?t[n]=jn[t[n]]:t[n]=Qu(t[n]);return function(o){var r="",i;for(i=0;i<s;i++)r+=Pt(t[i])?t[i].call(o,e):t[i];return r}}function js(e,t){return e.isValid()?(t=Aa(t,e.localeData()),Bo[t]=Bo[t]||Xu(t),Bo[t](e)):e.localeData().invalidDate()}function Aa(e,t){var n=5;function s(o){return t.longDateFormat(o)||o}for(Is.lastIndex=0;n>=0&&Is.test(e);)e=e.replace(Is,s),Is.lastIndex=0,n-=1;return e}var ec={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function tc(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Ar).map(function(s){return s==="MMMM"||s==="MM"||s==="DD"||s==="dddd"?s.slice(1):s}).join(""),this._longDateFormat[e])}var nc="Invalid date";function sc(){return this._invalidDate}var oc="%d",rc=/\d{1,2}/;function ic(e){return this._ordinal.replace("%d",e)}var ac={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function lc(e,t,n,s){var o=this._relativeTime[n];return Pt(o)?o(e,t,n,s):o.replace(/%d/i,e)}function uc(e,t){var n=this._relativeTime[e>0?"future":"past"];return Pt(n)?n(t):n.replace(/%s/i,t)}var ns={};function He(e,t){var n=e.toLowerCase();ns[n]=ns[n+"s"]=ns[t]=e}function ct(e){return typeof e=="string"?ns[e]||ns[e.toLowerCase()]:void 0}function Dr(e){var t={},n,s;for(s in e)le(e,s)&&(n=ct(s),n&&(t[n]=e[s]));return t}var Da={};function Ge(e,t){Da[e]=t}function cc(e){var t=[],n;for(n in e)le(e,n)&&t.push({unit:n,priority:Da[n]});return t.sort(function(s,o){return s.priority-o.priority}),t}function so(e){return e%4===0&&e%100!==0||e%400===0}function rt(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function ee(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=rt(t)),n}function Gn(e,t){return function(n){return n!=null?(Pa(this,e,n),D.updateOffset(this,t),this):Hs(this,e)}}function Hs(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Pa(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&so(e.year())&&e.month()===1&&e.date()===29?(n=ee(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),uo(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function hc(e){return e=ct(e),Pt(this[e])?this[e]():this}function dc(e,t){if(typeof e=="object"){e=Dr(e);var n=cc(e),s,o=n.length;for(s=0;s<o;s++)this[n[s].unit](e[n[s].unit])}else if(e=ct(e),Pt(this[e]))return this[e](t);return this}var Ea=/\d/,nt=/\d\d/,Ra=/\d{3}/,Pr=/\d{4}/,oo=/[+-]?\d{6}/,Se=/\d\d?/,Oa=/\d\d\d\d?/,ja=/\d\d\d\d\d\d?/,ro=/\d{1,3}/,Er=/\d{1,4}/,io=/[+-]?\d{1,6}/,zn=/\d+/,ao=/[+-]?\d+/,fc=/Z|[+-]\d\d:?\d\d/gi,lo=/Z|[+-]\d\d(?::?\d\d)?/gi,pc=/[+-]?\d+(\.\d{1,3})?/,Ts=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Gs;Gs={};function R(e,t,n){Gs[e]=Pt(t)?t:function(s,o){return s&&n?n:t}}function mc(e,t){return le(Gs,e)?Gs[e](t._strict,t._locale):new RegExp(gc(e))}function gc(e){return Qe(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,s,o,r){return n||s||o||r}))}function Qe(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Ko={};function de(e,t){var n,s=t,o;for(typeof e=="string"&&(e=[e]),Lt(t)&&(s=function(r,i){i[t]=ee(r)}),o=e.length,n=0;n<o;n++)Ko[e[n]]=s}function Ss(e,t){de(e,function(n,s,o,r){o._w=o._w||{},t(n,o._w,o,r)})}function wc(e,t,n){t!=null&&le(Ko,e)&&Ko[e](t,n._a,n,e)}var Le=0,Bt=1,xt=2,je=3,ft=4,Nt=5,fn=6,bc=7,yc=8;function vc(e,t){return(e%t+t)%t}var De;Array.prototype.indexOf?De=Array.prototype.indexOf:De=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function uo(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=vc(t,12);return e+=(t-n)/12,n===1?so(e)?29:28:31-n%7%2}W("M",["MM",2],"Mo",function(){return this.month()+1});W("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});W("MMMM",0,0,function(e){return this.localeData().months(this,e)});He("month","M");Ge("month",8);R("M",Se);R("MM",Se,nt);R("MMM",function(e,t){return t.monthsShortRegex(e)});R("MMMM",function(e,t){return t.monthsRegex(e)});de(["M","MM"],function(e,t){t[Bt]=ee(e)-1});de(["MMM","MMMM"],function(e,t,n,s){var o=n._locale.monthsParse(e,s,n._strict);o!=null?t[Bt]=o:K(n).invalidMonth=e});var kc="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Fa="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ba=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,_c=Ts,Tc=Ts;function Sc(e,t){return e?gt(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ba).test(t)?"format":"standalone"][e.month()]:gt(this._months)?this._months:this._months.standalone}function xc(e,t){return e?gt(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ba.test(t)?"format":"standalone"][e.month()]:gt(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Ic(e,t,n){var s,o,r,i=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=Dt([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?t==="MMM"?(o=De.call(this._shortMonthsParse,i),o!==-1?o:null):(o=De.call(this._longMonthsParse,i),o!==-1?o:null):t==="MMM"?(o=De.call(this._shortMonthsParse,i),o!==-1?o:(o=De.call(this._longMonthsParse,i),o!==-1?o:null)):(o=De.call(this._longMonthsParse,i),o!==-1?o:(o=De.call(this._shortMonthsParse,i),o!==-1?o:null))}function Cc(e,t,n){var s,o,r;if(this._monthsParseExact)return Ic.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(o=Dt([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(o,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(o,"").replace(".","")+"$","i")),!n&&!this._monthsParse[s]&&(r="^"+this.months(o,"")+"|^"+this.monthsShort(o,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[s].test(e))return s;if(n&&t==="MMM"&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}}function Na(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=ee(t);else if(t=e.localeData().monthsParse(t),!Lt(t))return e}return n=Math.min(e.date(),uo(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ma(e){return e!=null?(Na(this,e),D.updateOffset(this,!0),this):Hs(this,"Month")}function Ac(){return uo(this.year(),this.month())}function Dc(e){return this._monthsParseExact?(le(this,"_monthsRegex")||Wa.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(le(this,"_monthsShortRegex")||(this._monthsShortRegex=_c),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Pc(e){return this._monthsParseExact?(le(this,"_monthsRegex")||Wa.call(this),e?this._monthsStrictRegex:this._monthsRegex):(le(this,"_monthsRegex")||(this._monthsRegex=Tc),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Wa(){function e(i,a){return a.length-i.length}var t=[],n=[],s=[],o,r;for(o=0;o<12;o++)r=Dt([2e3,o]),t.push(this.monthsShort(r,"")),n.push(this.months(r,"")),s.push(this.months(r,"")),s.push(this.monthsShort(r,""));for(t.sort(e),n.sort(e),s.sort(e),o=0;o<12;o++)t[o]=Qe(t[o]),n[o]=Qe(n[o]);for(o=0;o<24;o++)s[o]=Qe(s[o]);this._monthsRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}W("Y",0,0,function(){var e=this.year();return e<=9999?Ct(e,4):"+"+e});W(0,["YY",2],0,function(){return this.year()%100});W(0,["YYYY",4],0,"year");W(0,["YYYYY",5],0,"year");W(0,["YYYYYY",6,!0],0,"year");He("year","y");Ge("year",1);R("Y",ao);R("YY",Se,nt);R("YYYY",Er,Pr);R("YYYYY",io,oo);R("YYYYYY",io,oo);de(["YYYYY","YYYYYY"],Le);de("YYYY",function(e,t){t[Le]=e.length===2?D.parseTwoDigitYear(e):ee(e)});de("YY",function(e,t){t[Le]=D.parseTwoDigitYear(e)});de("Y",function(e,t){t[Le]=parseInt(e,10)});function ss(e){return so(e)?366:365}D.parseTwoDigitYear=function(e){return ee(e)+(ee(e)>68?1900:2e3)};var La=Gn("FullYear",!0);function Ec(){return so(this.year())}function Rc(e,t,n,s,o,r,i){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,s,o,r,i),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,s,o,r,i),a}function hs(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function zs(e,t,n){var s=7+t-n,o=(7+hs(e,0,s).getUTCDay()-t)%7;return-o+s-1}function Ua(e,t,n,s,o){var r=(7+n-s)%7,i=zs(e,s,o),a=1+7*(t-1)+r+i,l,u;return a<=0?(l=e-1,u=ss(l)+a):a>ss(e)?(l=e+1,u=a-ss(e)):(l=e,u=a),{year:l,dayOfYear:u}}function ds(e,t,n){var s=zs(e.year(),t,n),o=Math.floor((e.dayOfYear()-s-1)/7)+1,r,i;return o<1?(i=e.year()-1,r=o+Mt(i,t,n)):o>Mt(e.year(),t,n)?(r=o-Mt(e.year(),t,n),i=e.year()+1):(i=e.year(),r=o),{week:r,year:i}}function Mt(e,t,n){var s=zs(e,t,n),o=zs(e+1,t,n);return(ss(e)-s+o)/7}W("w",["ww",2],"wo","week");W("W",["WW",2],"Wo","isoWeek");He("week","w");He("isoWeek","W");Ge("week",5);Ge("isoWeek",5);R("w",Se);R("ww",Se,nt);R("W",Se);R("WW",Se,nt);Ss(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=ee(e)});function Oc(e){return ds(e,this._week.dow,this._week.doy).week}var jc={dow:0,doy:6};function Fc(){return this._week.dow}function Bc(){return this._week.doy}function Nc(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function Mc(e){var t=ds(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}W("d",0,"do","day");W("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});W("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});W("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});W("e",0,0,"weekday");W("E",0,0,"isoWeekday");He("day","d");He("weekday","e");He("isoWeekday","E");Ge("day",11);Ge("weekday",11);Ge("isoWeekday",11);R("d",Se);R("e",Se);R("E",Se);R("dd",function(e,t){return t.weekdaysMinRegex(e)});R("ddd",function(e,t){return t.weekdaysShortRegex(e)});R("dddd",function(e,t){return t.weekdaysRegex(e)});Ss(["dd","ddd","dddd"],function(e,t,n,s){var o=n._locale.weekdaysParse(e,s,n._strict);o!=null?t.d=o:K(n).invalidWeekday=e});Ss(["d","e","E"],function(e,t,n,s){t[s]=ee(e)});function Wc(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function Lc(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Rr(e,t){return e.slice(t,7).concat(e.slice(0,t))}var Uc="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ha="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Hc="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Gc=Ts,zc=Ts,qc=Ts;function Yc(e,t){var n=gt(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Rr(n,this._week.dow):e?n[e.day()]:n}function $c(e){return e===!0?Rr(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Vc(e){return e===!0?Rr(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Jc(e,t,n){var s,o,r,i=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=Dt([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?t==="dddd"?(o=De.call(this._weekdaysParse,i),o!==-1?o:null):t==="ddd"?(o=De.call(this._shortWeekdaysParse,i),o!==-1?o:null):(o=De.call(this._minWeekdaysParse,i),o!==-1?o:null):t==="dddd"?(o=De.call(this._weekdaysParse,i),o!==-1||(o=De.call(this._shortWeekdaysParse,i),o!==-1)?o:(o=De.call(this._minWeekdaysParse,i),o!==-1?o:null)):t==="ddd"?(o=De.call(this._shortWeekdaysParse,i),o!==-1||(o=De.call(this._weekdaysParse,i),o!==-1)?o:(o=De.call(this._minWeekdaysParse,i),o!==-1?o:null)):(o=De.call(this._minWeekdaysParse,i),o!==-1||(o=De.call(this._weekdaysParse,i),o!==-1)?o:(o=De.call(this._shortWeekdaysParse,i),o!==-1?o:null))}function Kc(e,t,n){var s,o,r;if(this._weekdaysParseExact)return Jc.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(o=Dt([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(o,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(o,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(o,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(o,"")+"|^"+this.weekdaysShort(o,"")+"|^"+this.weekdaysMin(o,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[s].test(e))return s;if(n&&t==="ddd"&&this._shortWeekdaysParse[s].test(e))return s;if(n&&t==="dd"&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}}function Zc(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=Wc(e,this.localeData()),this.add(e-t,"d")):t}function Qc(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Xc(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=Lc(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function eh(e){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||Or.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(le(this,"_weekdaysRegex")||(this._weekdaysRegex=Gc),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function th(e){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||Or.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(le(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=zc),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function nh(e){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||Or.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(le(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=qc),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Or(){function e(c,f){return f.length-c.length}var t=[],n=[],s=[],o=[],r,i,a,l,u;for(r=0;r<7;r++)i=Dt([2e3,1]).day(r),a=Qe(this.weekdaysMin(i,"")),l=Qe(this.weekdaysShort(i,"")),u=Qe(this.weekdays(i,"")),t.push(a),n.push(l),s.push(u),o.push(a),o.push(l),o.push(u);t.sort(e),n.sort(e),s.sort(e),o.sort(e),this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function jr(){return this.hours()%12||12}function sh(){return this.hours()||24}W("H",["HH",2],0,"hour");W("h",["hh",2],0,jr);W("k",["kk",2],0,sh);W("hmm",0,0,function(){return""+jr.apply(this)+Ct(this.minutes(),2)});W("hmmss",0,0,function(){return""+jr.apply(this)+Ct(this.minutes(),2)+Ct(this.seconds(),2)});W("Hmm",0,0,function(){return""+this.hours()+Ct(this.minutes(),2)});W("Hmmss",0,0,function(){return""+this.hours()+Ct(this.minutes(),2)+Ct(this.seconds(),2)});function Ga(e,t){W(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}Ga("a",!0);Ga("A",!1);He("hour","h");Ge("hour",13);function za(e,t){return t._meridiemParse}R("a",za);R("A",za);R("H",Se);R("h",Se);R("k",Se);R("HH",Se,nt);R("hh",Se,nt);R("kk",Se,nt);R("hmm",Oa);R("hmmss",ja);R("Hmm",Oa);R("Hmmss",ja);de(["H","HH"],je);de(["k","kk"],function(e,t,n){var s=ee(e);t[je]=s===24?0:s});de(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});de(["h","hh"],function(e,t,n){t[je]=ee(e),K(n).bigHour=!0});de("hmm",function(e,t,n){var s=e.length-2;t[je]=ee(e.substr(0,s)),t[ft]=ee(e.substr(s)),K(n).bigHour=!0});de("hmmss",function(e,t,n){var s=e.length-4,o=e.length-2;t[je]=ee(e.substr(0,s)),t[ft]=ee(e.substr(s,2)),t[Nt]=ee(e.substr(o)),K(n).bigHour=!0});de("Hmm",function(e,t,n){var s=e.length-2;t[je]=ee(e.substr(0,s)),t[ft]=ee(e.substr(s))});de("Hmmss",function(e,t,n){var s=e.length-4,o=e.length-2;t[je]=ee(e.substr(0,s)),t[ft]=ee(e.substr(s,2)),t[Nt]=ee(e.substr(o))});function oh(e){return(e+"").toLowerCase().charAt(0)==="p"}var rh=/[ap]\.?m?\.?/i,ih=Gn("Hours",!0);function ah(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var qa={calendar:Ku,longDateFormat:ec,invalidDate:nc,ordinal:oc,dayOfMonthOrdinalParse:rc,relativeTime:ac,months:kc,monthsShort:Fa,week:jc,weekdays:Uc,weekdaysMin:Hc,weekdaysShort:Ha,meridiemParse:rh},xe={},Zn={},fs;function lh(e,t){var n,s=Math.min(e.length,t.length);for(n=0;n<s;n+=1)if(e[n]!==t[n])return n;return s}function ki(e){return e&&e.toLowerCase().replace("_","-")}function uh(e){for(var t=0,n,s,o,r;t<e.length;){for(r=ki(e[t]).split("-"),n=r.length,s=ki(e[t+1]),s=s?s.split("-"):null;n>0;){if(o=co(r.slice(0,n).join("-")),o)return o;if(s&&s.length>=n&&lh(r,s)>=n-1)break;n--}t++}return fs}function ch(e){return e.match("^[^/\\\\]*$")!=null}function co(e){var t=null,n;if(xe[e]===void 0&&typeof module!="undefined"&&module&&module.exports&&ch(e))try{t=fs._abbr,n=require,n("./locale/"+e),tn(t)}catch{xe[e]=null}return xe[e]}function tn(e,t){var n;return e&&($e(t)?n=zt(e):n=Fr(e,t),n?fs=n:typeof console!="undefined"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),fs._abbr}function Fr(e,t){if(t!==null){var n,s=qa;if(t.abbr=e,xe[e]!=null)Ca("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=xe[e]._config;else if(t.parentLocale!=null)if(xe[t.parentLocale]!=null)s=xe[t.parentLocale]._config;else if(n=co(t.parentLocale),n!=null)s=n._config;else return Zn[t.parentLocale]||(Zn[t.parentLocale]=[]),Zn[t.parentLocale].push({name:e,config:t}),null;return xe[e]=new Cr(Vo(s,t)),Zn[e]&&Zn[e].forEach(function(o){Fr(o.name,o.config)}),tn(e),xe[e]}else return delete xe[e],null}function hh(e,t){if(t!=null){var n,s,o=qa;xe[e]!=null&&xe[e].parentLocale!=null?xe[e].set(Vo(xe[e]._config,t)):(s=co(e),s!=null&&(o=s._config),t=Vo(o,t),s==null&&(t.abbr=e),n=new Cr(t),n.parentLocale=xe[e],xe[e]=n),tn(e)}else xe[e]!=null&&(xe[e].parentLocale!=null?(xe[e]=xe[e].parentLocale,e===tn()&&tn(e)):xe[e]!=null&&delete xe[e]);return xe[e]}function zt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return fs;if(!gt(e)){if(t=co(e),t)return t;e=[e]}return uh(e)}function dh(){return Jo(xe)}function Br(e){var t,n=e._a;return n&&K(e).overflow===-2&&(t=n[Bt]<0||n[Bt]>11?Bt:n[xt]<1||n[xt]>uo(n[Le],n[Bt])?xt:n[je]<0||n[je]>24||n[je]===24&&(n[ft]!==0||n[Nt]!==0||n[fn]!==0)?je:n[ft]<0||n[ft]>59?ft:n[Nt]<0||n[Nt]>59?Nt:n[fn]<0||n[fn]>999?fn:-1,K(e)._overflowDayOfYear&&(t<Le||t>xt)&&(t=xt),K(e)._overflowWeeks&&t===-1&&(t=bc),K(e)._overflowWeekday&&t===-1&&(t=yc),K(e).overflow=t),e}var fh=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ph=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mh=/Z|[+-]\d\d(?::?\d\d)?/,Cs=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],No=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],gh=/^\/?Date\((-?\d+)/i,wh=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,bh={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ya(e){var t,n,s=e._i,o=fh.exec(s)||ph.exec(s),r,i,a,l,u=Cs.length,c=No.length;if(o){for(K(e).iso=!0,t=0,n=u;t<n;t++)if(Cs[t][1].exec(o[1])){i=Cs[t][0],r=Cs[t][2]!==!1;break}if(i==null){e._isValid=!1;return}if(o[3]){for(t=0,n=c;t<n;t++)if(No[t][1].exec(o[3])){a=(o[2]||" ")+No[t][0];break}if(a==null){e._isValid=!1;return}}if(!r&&a!=null){e._isValid=!1;return}if(o[4])if(mh.exec(o[4]))l="Z";else{e._isValid=!1;return}e._f=i+(a||"")+(l||""),Mr(e)}else e._isValid=!1}function yh(e,t,n,s,o,r){var i=[vh(e),Fa.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(o,10)];return r&&i.push(parseInt(r,10)),i}function vh(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function kh(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function _h(e,t,n){if(e){var s=Ha.indexOf(e),o=new Date(t[0],t[1],t[2]).getDay();if(s!==o)return K(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Th(e,t,n){if(e)return bh[e];if(t)return 0;var s=parseInt(n,10),o=s%100,r=(s-o)/100;return r*60+o}function $a(e){var t=wh.exec(kh(e._i)),n;if(t){if(n=yh(t[4],t[3],t[2],t[5],t[6],t[7]),!_h(t[1],n,e))return;e._a=n,e._tzm=Th(t[8],t[9],t[10]),e._d=hs.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),K(e).rfc2822=!0}else e._isValid=!1}function Sh(e){var t=gh.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Ya(e),e._isValid===!1)delete e._isValid;else return;if($a(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:D.createFromInputFallback(e)}D.createFromInputFallback=ut("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function An(e,t,n){return e!=null?e:t!=null?t:n}function xh(e){var t=new Date(D.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Nr(e){var t,n,s=[],o,r,i;if(!e._d){for(o=xh(e),e._w&&e._a[xt]==null&&e._a[Bt]==null&&Ih(e),e._dayOfYear!=null&&(i=An(e._a[Le],o[Le]),(e._dayOfYear>ss(i)||e._dayOfYear===0)&&(K(e)._overflowDayOfYear=!0),n=hs(i,0,e._dayOfYear),e._a[Bt]=n.getUTCMonth(),e._a[xt]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=s[t]=o[t];for(;t<7;t++)e._a[t]=s[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[je]===24&&e._a[ft]===0&&e._a[Nt]===0&&e._a[fn]===0&&(e._nextDay=!0,e._a[je]=0),e._d=(e._useUTC?hs:Rc).apply(null,s),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[je]=24),e._w&&typeof e._w.d!="undefined"&&e._w.d!==r&&(K(e).weekdayMismatch=!0)}}function Ih(e){var t,n,s,o,r,i,a,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(r=1,i=4,n=An(t.GG,e._a[Le],ds(Te(),1,4).year),s=An(t.W,1),o=An(t.E,1),(o<1||o>7)&&(l=!0)):(r=e._locale._week.dow,i=e._locale._week.doy,u=ds(Te(),r,i),n=An(t.gg,e._a[Le],u.year),s=An(t.w,u.week),t.d!=null?(o=t.d,(o<0||o>6)&&(l=!0)):t.e!=null?(o=t.e+r,(t.e<0||t.e>6)&&(l=!0)):o=r),s<1||s>Mt(n,r,i)?K(e)._overflowWeeks=!0:l!=null?K(e)._overflowWeekday=!0:(a=Ua(n,s,o,r,i),e._a[Le]=a.year,e._dayOfYear=a.dayOfYear)}D.ISO_8601=function(){};D.RFC_2822=function(){};function Mr(e){if(e._f===D.ISO_8601){Ya(e);return}if(e._f===D.RFC_2822){$a(e);return}e._a=[],K(e).empty=!0;var t=""+e._i,n,s,o,r,i,a=t.length,l=0,u,c;for(o=Aa(e._f,e._locale).match(Ar)||[],c=o.length,n=0;n<c;n++)r=o[n],s=(t.match(mc(r,e))||[])[0],s&&(i=t.substr(0,t.indexOf(s)),i.length>0&&K(e).unusedInput.push(i),t=t.slice(t.indexOf(s)+s.length),l+=s.length),jn[r]?(s?K(e).empty=!1:K(e).unusedTokens.push(r),wc(r,s,e)):e._strict&&!s&&K(e).unusedTokens.push(r);K(e).charsLeftOver=a-l,t.length>0&&K(e).unusedInput.push(t),e._a[je]<=12&&K(e).bigHour===!0&&e._a[je]>0&&(K(e).bigHour=void 0),K(e).parsedDateParts=e._a.slice(0),K(e).meridiem=e._meridiem,e._a[je]=Ch(e._locale,e._a[je],e._meridiem),u=K(e).era,u!==null&&(e._a[Le]=e._locale.erasConvertYear(u,e._a[Le])),Nr(e),Br(e)}function Ch(e,t,n){var s;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(s=e.isPM(n),s&&t<12&&(t+=12),!s&&t===12&&(t=0)),t)}function Ah(e){var t,n,s,o,r,i,a=!1,l=e._f.length;if(l===0){K(e).invalidFormat=!0,e._d=new Date(NaN);return}for(o=0;o<l;o++)r=0,i=!1,t=Ir({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[o],Mr(t),xr(t)&&(i=!0),r+=K(t).charsLeftOver,r+=K(t).unusedTokens.length*10,K(t).score=r,a?r<s&&(s=r,n=t):(s==null||r<s||i)&&(s=r,n=t,i&&(a=!0));Xt(e,n||t)}function Dh(e){if(!e._d){var t=Dr(e._i),n=t.day===void 0?t.date:t.day;e._a=xa([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(s){return s&&parseInt(s,10)}),Nr(e)}}function Ph(e){var t=new _s(Br(Va(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Va(e){var t=e._i,n=e._f;return e._locale=e._locale||zt(e._l),t===null||n===void 0&&t===""?no({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),wt(t)?new _s(Br(t)):(ks(t)?e._d=t:gt(n)?Ah(e):n?Mr(e):Eh(e),xr(e)||(e._d=null),e))}function Eh(e){var t=e._i;$e(t)?e._d=new Date(D.now()):ks(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Sh(e):gt(t)?(e._a=xa(t.slice(0),function(n){return parseInt(n,10)}),Nr(e)):mn(t)?Dh(e):Lt(t)?e._d=new Date(t):D.createFromInputFallback(e)}function Ja(e,t,n,s,o){var r={};return(t===!0||t===!1)&&(s=t,t=void 0),(n===!0||n===!1)&&(s=n,n=void 0),(mn(e)&&Sr(e)||gt(e)&&e.length===0)&&(e=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=o,r._l=n,r._i=e,r._f=t,r._strict=s,Ph(r)}function Te(e,t,n,s){return Ja(e,t,n,s,!1)}var Rh=ut("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Te.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:no()}),Oh=ut("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Te.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:no()});function Ka(e,t){var n,s;if(t.length===1&&gt(t[0])&&(t=t[0]),!t.length)return Te();for(n=t[0],s=1;s<t.length;++s)(!t[s].isValid()||t[s][e](n))&&(n=t[s]);return n}function jh(){var e=[].slice.call(arguments,0);return Ka("isBefore",e)}function Fh(){var e=[].slice.call(arguments,0);return Ka("isAfter",e)}var Bh=function(){return Date.now?Date.now():+new Date},Qn=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Nh(e){var t,n=!1,s,o=Qn.length;for(t in e)if(le(e,t)&&!(De.call(Qn,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(s=0;s<o;++s)if(e[Qn[s]]){if(n)return!1;parseFloat(e[Qn[s]])!==ee(e[Qn[s]])&&(n=!0)}return!0}function Mh(){return this._isValid}function Wh(){return bt(NaN)}function ho(e){var t=Dr(e),n=t.year||0,s=t.quarter||0,o=t.month||0,r=t.week||t.isoWeek||0,i=t.day||0,a=t.hour||0,l=t.minute||0,u=t.second||0,c=t.millisecond||0;this._isValid=Nh(t),this._milliseconds=+c+u*1e3+l*6e4+a*1e3*60*60,this._days=+i+r*7,this._months=+o+s*3+n*12,this._data={},this._locale=zt(),this._bubble()}function Fs(e){return e instanceof ho}function Zo(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Lh(e,t,n){var s=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),r=0,i;for(i=0;i<s;i++)(n&&e[i]!==t[i]||!n&&ee(e[i])!==ee(t[i]))&&r++;return r+o}function Za(e,t){W(e,0,0,function(){var n=this.utcOffset(),s="+";return n<0&&(n=-n,s="-"),s+Ct(~~(n/60),2)+t+Ct(~~n%60,2)})}Za("Z",":");Za("ZZ","");R("Z",lo);R("ZZ",lo);de(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Wr(lo,e)});var Uh=/([\+\-]|\d\d)/gi;function Wr(e,t){var n=(t||"").match(e),s,o,r;return n===null?null:(s=n[n.length-1]||[],o=(s+"").match(Uh)||["-",0,0],r=+(o[1]*60)+ee(o[2]),r===0?0:o[0]==="+"?r:-r)}function Lr(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(wt(e)||ks(e)?e.valueOf():Te(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),D.updateOffset(n,!1),n):Te(e).local()}function Qo(e){return-Math.round(e._d.getTimezoneOffset())}D.updateOffset=function(){};function Hh(e,t,n){var s=this._offset||0,o;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Wr(lo,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(o=Qo(this)),this._offset=e,this._isUTC=!0,o!=null&&this.add(o,"m"),s!==e&&(!t||this._changeInProgress?el(this,bt(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,D.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?s:Qo(this)}function Gh(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function zh(e){return this.utcOffset(0,e)}function qh(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Qo(this),"m")),this}function Yh(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Wr(fc,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function $h(e){return this.isValid()?(e=e?Te(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Vh(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Jh(){if(!$e(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Ir(e,this),e=Va(e),e._a?(t=e._isUTC?Dt(e._a):Te(e._a),this._isDSTShifted=this.isValid()&&Lh(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Kh(){return this.isValid()?!this._isUTC:!1}function Zh(){return this.isValid()?this._isUTC:!1}function Qa(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Qh=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Xh=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function bt(e,t){var n=e,s=null,o,r,i;return Fs(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Lt(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(s=Qh.exec(e))?(o=s[1]==="-"?-1:1,n={y:0,d:ee(s[xt])*o,h:ee(s[je])*o,m:ee(s[ft])*o,s:ee(s[Nt])*o,ms:ee(Zo(s[fn]*1e3))*o}):(s=Xh.exec(e))?(o=s[1]==="-"?-1:1,n={y:an(s[2],o),M:an(s[3],o),w:an(s[4],o),d:an(s[5],o),h:an(s[6],o),m:an(s[7],o),s:an(s[8],o)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(i=ed(Te(n.from),Te(n.to)),n={},n.ms=i.milliseconds,n.M=i.months),r=new ho(n),Fs(e)&&le(e,"_locale")&&(r._locale=e._locale),Fs(e)&&le(e,"_isValid")&&(r._isValid=e._isValid),r}bt.fn=ho.prototype;bt.invalid=Wh;function an(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function _i(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function ed(e,t){var n;return e.isValid()&&t.isValid()?(t=Lr(t,e),e.isBefore(t)?n=_i(e,t):(n=_i(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Xa(e,t){return function(n,s){var o,r;return s!==null&&!isNaN(+s)&&(Ca(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=s,s=r),o=bt(n,s),el(this,o,e),this}}function el(e,t,n,s){var o=t._milliseconds,r=Zo(t._days),i=Zo(t._months);!e.isValid()||(s=s==null?!0:s,i&&Na(e,Hs(e,"Month")+i*n),r&&Pa(e,"Date",Hs(e,"Date")+r*n),o&&e._d.setTime(e._d.valueOf()+o*n),s&&D.updateOffset(e,r||i))}var td=Xa(1,"add"),nd=Xa(-1,"subtract");function tl(e){return typeof e=="string"||e instanceof String}function sd(e){return wt(e)||ks(e)||tl(e)||Lt(e)||rd(e)||od(e)||e===null||e===void 0}function od(e){var t=mn(e)&&!Sr(e),n=!1,s=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],o,r,i=s.length;for(o=0;o<i;o+=1)r=s[o],n=n||le(e,r);return t&&n}function rd(e){var t=gt(e),n=!1;return t&&(n=e.filter(function(s){return!Lt(s)&&tl(e)}).length===0),t&&n}function id(e){var t=mn(e)&&!Sr(e),n=!1,s=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],o,r;for(o=0;o<s.length;o+=1)r=s[o],n=n||le(e,r);return t&&n}function ad(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function ld(e,t){arguments.length===1&&(arguments[0]?sd(arguments[0])?(e=arguments[0],t=void 0):id(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Te(),s=Lr(n,this).startOf("day"),o=D.calendarFormat(this,s)||"sameElse",r=t&&(Pt(t[o])?t[o].call(this,n):t[o]);return this.format(r||this.localeData().calendar(o,this,Te(n)))}function ud(){return new _s(this)}function cd(e,t){var n=wt(e)?e:Te(e);return this.isValid()&&n.isValid()?(t=ct(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function hd(e,t){var n=wt(e)?e:Te(e);return this.isValid()&&n.isValid()?(t=ct(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function dd(e,t,n,s){var o=wt(e)?e:Te(e),r=wt(t)?t:Te(t);return this.isValid()&&o.isValid()&&r.isValid()?(s=s||"()",(s[0]==="("?this.isAfter(o,n):!this.isBefore(o,n))&&(s[1]===")"?this.isBefore(r,n):!this.isAfter(r,n))):!1}function fd(e,t){var n=wt(e)?e:Te(e),s;return this.isValid()&&n.isValid()?(t=ct(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(s=n.valueOf(),this.clone().startOf(t).valueOf()<=s&&s<=this.clone().endOf(t).valueOf())):!1}function pd(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function md(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function gd(e,t,n){var s,o,r;if(!this.isValid())return NaN;if(s=Lr(e,this),!s.isValid())return NaN;switch(o=(s.utcOffset()-this.utcOffset())*6e4,t=ct(t),t){case"year":r=Bs(this,s)/12;break;case"month":r=Bs(this,s);break;case"quarter":r=Bs(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-o)/864e5;break;case"week":r=(this-s-o)/6048e5;break;default:r=this-s}return n?r:rt(r)}function Bs(e,t){if(e.date()<t.date())return-Bs(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),s=e.clone().add(n,"months"),o,r;return t-s<0?(o=e.clone().add(n-1,"months"),r=(t-s)/(s-o)):(o=e.clone().add(n+1,"months"),r=(t-s)/(o-s)),-(n+r)||0}D.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";D.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function wd(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function bd(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?js(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Pt(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",js(n,"Z")):js(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function yd(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,s,o,r;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",o="-MM-DD[T]HH:mm:ss.SSS",r=t+'[")]',this.format(n+s+o+r)}function vd(e){e||(e=this.isUtc()?D.defaultFormatUtc:D.defaultFormat);var t=js(this,e);return this.localeData().postformat(t)}function kd(e,t){return this.isValid()&&(wt(e)&&e.isValid()||Te(e).isValid())?bt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function _d(e){return this.from(Te(),e)}function Td(e,t){return this.isValid()&&(wt(e)&&e.isValid()||Te(e).isValid())?bt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function Sd(e){return this.to(Te(),e)}function nl(e){var t;return e===void 0?this._locale._abbr:(t=zt(e),t!=null&&(this._locale=t),this)}var sl=ut("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ol(){return this._locale}var qs=1e3,Fn=60*qs,Ys=60*Fn,rl=(365*400+97)*24*Ys;function Bn(e,t){return(e%t+t)%t}function il(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-rl:new Date(e,t,n).valueOf()}function al(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-rl:Date.UTC(e,t,n)}function xd(e){var t,n;if(e=ct(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?al:il,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Bn(t+(this._isUTC?0:this.utcOffset()*Fn),Ys);break;case"minute":t=this._d.valueOf(),t-=Bn(t,Fn);break;case"second":t=this._d.valueOf(),t-=Bn(t,qs);break}return this._d.setTime(t),D.updateOffset(this,!0),this}function Id(e){var t,n;if(e=ct(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?al:il,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ys-Bn(t+(this._isUTC?0:this.utcOffset()*Fn),Ys)-1;break;case"minute":t=this._d.valueOf(),t+=Fn-Bn(t,Fn)-1;break;case"second":t=this._d.valueOf(),t+=qs-Bn(t,qs)-1;break}return this._d.setTime(t),D.updateOffset(this,!0),this}function Cd(){return this._d.valueOf()-(this._offset||0)*6e4}function Ad(){return Math.floor(this.valueOf()/1e3)}function Dd(){return new Date(this.valueOf())}function Pd(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Ed(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Rd(){return this.isValid()?this.toISOString():null}function Od(){return xr(this)}function jd(){return Xt({},K(this))}function Fd(){return K(this).overflow}function Bd(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}W("N",0,0,"eraAbbr");W("NN",0,0,"eraAbbr");W("NNN",0,0,"eraAbbr");W("NNNN",0,0,"eraName");W("NNNNN",0,0,"eraNarrow");W("y",["y",1],"yo","eraYear");W("y",["yy",2],0,"eraYear");W("y",["yyy",3],0,"eraYear");W("y",["yyyy",4],0,"eraYear");R("N",Ur);R("NN",Ur);R("NNN",Ur);R("NNNN",$d);R("NNNNN",Vd);de(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){var o=n._locale.erasParse(e,s,n._strict);o?K(n).era=o:K(n).invalidEra=e});R("y",zn);R("yy",zn);R("yyy",zn);R("yyyy",zn);R("yo",Jd);de(["y","yy","yyy","yyyy"],Le);de(["yo"],function(e,t,n,s){var o;n._locale._eraYearOrdinalRegex&&(o=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Le]=n._locale.eraYearOrdinalParse(e,o):t[Le]=parseInt(e,10)});function Nd(e,t){var n,s,o,r=this._eras||zt("en")._eras;for(n=0,s=r.length;n<s;++n){switch(typeof r[n].since){case"string":o=D(r[n].since).startOf("day"),r[n].since=o.valueOf();break}switch(typeof r[n].until){case"undefined":r[n].until=1/0;break;case"string":o=D(r[n].until).startOf("day").valueOf(),r[n].until=o.valueOf();break}}return r}function Md(e,t,n){var s,o,r=this.eras(),i,a,l;for(e=e.toUpperCase(),s=0,o=r.length;s<o;++s)if(i=r[s].name.toUpperCase(),a=r[s].abbr.toUpperCase(),l=r[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return r[s];break;case"NNNN":if(i===e)return r[s];break;case"NNNNN":if(l===e)return r[s];break}else if([i,a,l].indexOf(e)>=0)return r[s]}function Wd(e,t){var n=e.since<=e.until?1:-1;return t===void 0?D(e.since).year():D(e.since).year()+(t-e.offset)*n}function Ld(){var e,t,n,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),s[e].since<=n&&n<=s[e].until||s[e].until<=n&&n<=s[e].since)return s[e].name;return""}function Ud(){var e,t,n,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),s[e].since<=n&&n<=s[e].until||s[e].until<=n&&n<=s[e].since)return s[e].narrow;return""}function Hd(){var e,t,n,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),s[e].since<=n&&n<=s[e].until||s[e].until<=n&&n<=s[e].since)return s[e].abbr;return""}function Gd(){var e,t,n,s,o=this.localeData().eras();for(e=0,t=o.length;e<t;++e)if(n=o[e].since<=o[e].until?1:-1,s=this.clone().startOf("day").valueOf(),o[e].since<=s&&s<=o[e].until||o[e].until<=s&&s<=o[e].since)return(this.year()-D(o[e].since).year())*n+o[e].offset;return this.year()}function zd(e){return le(this,"_erasNameRegex")||Hr.call(this),e?this._erasNameRegex:this._erasRegex}function qd(e){return le(this,"_erasAbbrRegex")||Hr.call(this),e?this._erasAbbrRegex:this._erasRegex}function Yd(e){return le(this,"_erasNarrowRegex")||Hr.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ur(e,t){return t.erasAbbrRegex(e)}function $d(e,t){return t.erasNameRegex(e)}function Vd(e,t){return t.erasNarrowRegex(e)}function Jd(e,t){return t._eraYearOrdinalRegex||zn}function Hr(){var e=[],t=[],n=[],s=[],o,r,i=this.eras();for(o=0,r=i.length;o<r;++o)t.push(Qe(i[o].name)),e.push(Qe(i[o].abbr)),n.push(Qe(i[o].narrow)),s.push(Qe(i[o].name)),s.push(Qe(i[o].abbr)),s.push(Qe(i[o].narrow));this._erasRegex=new RegExp("^("+s.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}W(0,["gg",2],0,function(){return this.weekYear()%100});W(0,["GG",2],0,function(){return this.isoWeekYear()%100});function fo(e,t){W(0,[e,e.length],0,t)}fo("gggg","weekYear");fo("ggggg","weekYear");fo("GGGG","isoWeekYear");fo("GGGGG","isoWeekYear");He("weekYear","gg");He("isoWeekYear","GG");Ge("weekYear",1);Ge("isoWeekYear",1);R("G",ao);R("g",ao);R("GG",Se,nt);R("gg",Se,nt);R("GGGG",Er,Pr);R("gggg",Er,Pr);R("GGGGG",io,oo);R("ggggg",io,oo);Ss(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=ee(e)});Ss(["gg","GG"],function(e,t,n,s){t[s]=D.parseTwoDigitYear(e)});function Kd(e){return ll.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Zd(e){return ll.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Qd(){return Mt(this.year(),1,4)}function Xd(){return Mt(this.isoWeekYear(),1,4)}function ef(){var e=this.localeData()._week;return Mt(this.year(),e.dow,e.doy)}function tf(){var e=this.localeData()._week;return Mt(this.weekYear(),e.dow,e.doy)}function ll(e,t,n,s,o){var r;return e==null?ds(this,s,o).year:(r=Mt(e,s,o),t>r&&(t=r),nf.call(this,e,t,n,s,o))}function nf(e,t,n,s,o){var r=Ua(e,t,n,s,o),i=hs(r.year,0,r.dayOfYear);return this.year(i.getUTCFullYear()),this.month(i.getUTCMonth()),this.date(i.getUTCDate()),this}W("Q",0,"Qo","quarter");He("quarter","Q");Ge("quarter",7);R("Q",Ea);de("Q",function(e,t){t[Bt]=(ee(e)-1)*3});function sf(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}W("D",["DD",2],"Do","date");He("date","D");Ge("date",9);R("D",Se);R("DD",Se,nt);R("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});de(["D","DD"],xt);de("Do",function(e,t){t[xt]=ee(e.match(Se)[0])});var ul=Gn("Date",!0);W("DDD",["DDDD",3],"DDDo","dayOfYear");He("dayOfYear","DDD");Ge("dayOfYear",4);R("DDD",ro);R("DDDD",Ra);de(["DDD","DDDD"],function(e,t,n){n._dayOfYear=ee(e)});function of(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}W("m",["mm",2],0,"minute");He("minute","m");Ge("minute",14);R("m",Se);R("mm",Se,nt);de(["m","mm"],ft);var rf=Gn("Minutes",!1);W("s",["ss",2],0,"second");He("second","s");Ge("second",15);R("s",Se);R("ss",Se,nt);de(["s","ss"],Nt);var af=Gn("Seconds",!1);W("S",0,0,function(){return~~(this.millisecond()/100)});W(0,["SS",2],0,function(){return~~(this.millisecond()/10)});W(0,["SSS",3],0,"millisecond");W(0,["SSSS",4],0,function(){return this.millisecond()*10});W(0,["SSSSS",5],0,function(){return this.millisecond()*100});W(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});W(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});W(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});W(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});He("millisecond","ms");Ge("millisecond",16);R("S",ro,Ea);R("SS",ro,nt);R("SSS",ro,Ra);var en,cl;for(en="SSSS";en.length<=9;en+="S")R(en,zn);function lf(e,t){t[fn]=ee(("0."+e)*1e3)}for(en="S";en.length<=9;en+="S")de(en,lf);cl=Gn("Milliseconds",!1);W("z",0,0,"zoneAbbr");W("zz",0,0,"zoneName");function uf(){return this._isUTC?"UTC":""}function cf(){return this._isUTC?"Coordinated Universal Time":""}var k=_s.prototype;k.add=td;k.calendar=ld;k.clone=ud;k.diff=gd;k.endOf=Id;k.format=vd;k.from=kd;k.fromNow=_d;k.to=Td;k.toNow=Sd;k.get=hc;k.invalidAt=Fd;k.isAfter=cd;k.isBefore=hd;k.isBetween=dd;k.isSame=fd;k.isSameOrAfter=pd;k.isSameOrBefore=md;k.isValid=Od;k.lang=sl;k.locale=nl;k.localeData=ol;k.max=Oh;k.min=Rh;k.parsingFlags=jd;k.set=dc;k.startOf=xd;k.subtract=nd;k.toArray=Pd;k.toObject=Ed;k.toDate=Dd;k.toISOString=bd;k.inspect=yd;typeof Symbol!="undefined"&&Symbol.for!=null&&(k[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});k.toJSON=Rd;k.toString=wd;k.unix=Ad;k.valueOf=Cd;k.creationData=Bd;k.eraName=Ld;k.eraNarrow=Ud;k.eraAbbr=Hd;k.eraYear=Gd;k.year=La;k.isLeapYear=Ec;k.weekYear=Kd;k.isoWeekYear=Zd;k.quarter=k.quarters=sf;k.month=Ma;k.daysInMonth=Ac;k.week=k.weeks=Nc;k.isoWeek=k.isoWeeks=Mc;k.weeksInYear=ef;k.weeksInWeekYear=tf;k.isoWeeksInYear=Qd;k.isoWeeksInISOWeekYear=Xd;k.date=ul;k.day=k.days=Zc;k.weekday=Qc;k.isoWeekday=Xc;k.dayOfYear=of;k.hour=k.hours=ih;k.minute=k.minutes=rf;k.second=k.seconds=af;k.millisecond=k.milliseconds=cl;k.utcOffset=Hh;k.utc=zh;k.local=qh;k.parseZone=Yh;k.hasAlignedHourOffset=$h;k.isDST=Vh;k.isLocal=Kh;k.isUtcOffset=Zh;k.isUtc=Qa;k.isUTC=Qa;k.zoneAbbr=uf;k.zoneName=cf;k.dates=ut("dates accessor is deprecated. Use date instead.",ul);k.months=ut("months accessor is deprecated. Use month instead",Ma);k.years=ut("years accessor is deprecated. Use year instead",La);k.zone=ut("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Gh);k.isDSTShifted=ut("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Jh);function hf(e){return Te(e*1e3)}function df(){return Te.apply(null,arguments).parseZone()}function hl(e){return e}var ue=Cr.prototype;ue.calendar=Zu;ue.longDateFormat=tc;ue.invalidDate=sc;ue.ordinal=ic;ue.preparse=hl;ue.postformat=hl;ue.relativeTime=lc;ue.pastFuture=uc;ue.set=Ju;ue.eras=Nd;ue.erasParse=Md;ue.erasConvertYear=Wd;ue.erasAbbrRegex=qd;ue.erasNameRegex=zd;ue.erasNarrowRegex=Yd;ue.months=Sc;ue.monthsShort=xc;ue.monthsParse=Cc;ue.monthsRegex=Pc;ue.monthsShortRegex=Dc;ue.week=Oc;ue.firstDayOfYear=Bc;ue.firstDayOfWeek=Fc;ue.weekdays=Yc;ue.weekdaysMin=Vc;ue.weekdaysShort=$c;ue.weekdaysParse=Kc;ue.weekdaysRegex=eh;ue.weekdaysShortRegex=th;ue.weekdaysMinRegex=nh;ue.isPM=oh;ue.meridiem=ah;function $s(e,t,n,s){var o=zt(),r=Dt().set(s,t);return o[n](r,e)}function dl(e,t,n){if(Lt(e)&&(t=e,e=void 0),e=e||"",t!=null)return $s(e,t,n,"month");var s,o=[];for(s=0;s<12;s++)o[s]=$s(e,s,n,"month");return o}function Gr(e,t,n,s){typeof e=="boolean"?(Lt(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Lt(t)&&(n=t,t=void 0),t=t||"");var o=zt(),r=e?o._week.dow:0,i,a=[];if(n!=null)return $s(t,(n+r)%7,s,"day");for(i=0;i<7;i++)a[i]=$s(t,(i+r)%7,s,"day");return a}function ff(e,t){return dl(e,t,"months")}function pf(e,t){return dl(e,t,"monthsShort")}function mf(e,t,n){return Gr(e,t,n,"weekdays")}function gf(e,t,n){return Gr(e,t,n,"weekdaysShort")}function wf(e,t,n){return Gr(e,t,n,"weekdaysMin")}tn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=ee(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});D.lang=ut("moment.lang is deprecated. Use moment.locale instead.",tn);D.langData=ut("moment.langData is deprecated. Use moment.localeData instead.",zt);var Rt=Math.abs;function bf(){var e=this._data;return this._milliseconds=Rt(this._milliseconds),this._days=Rt(this._days),this._months=Rt(this._months),e.milliseconds=Rt(e.milliseconds),e.seconds=Rt(e.seconds),e.minutes=Rt(e.minutes),e.hours=Rt(e.hours),e.months=Rt(e.months),e.years=Rt(e.years),this}function fl(e,t,n,s){var o=bt(t,n);return e._milliseconds+=s*o._milliseconds,e._days+=s*o._days,e._months+=s*o._months,e._bubble()}function yf(e,t){return fl(this,e,t,1)}function vf(e,t){return fl(this,e,t,-1)}function Ti(e){return e<0?Math.floor(e):Math.ceil(e)}function kf(){var e=this._milliseconds,t=this._days,n=this._months,s=this._data,o,r,i,a,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Ti(Xo(n)+t)*864e5,t=0,n=0),s.milliseconds=e%1e3,o=rt(e/1e3),s.seconds=o%60,r=rt(o/60),s.minutes=r%60,i=rt(r/60),s.hours=i%24,t+=rt(i/24),l=rt(pl(t)),n+=l,t-=Ti(Xo(l)),a=rt(n/12),n%=12,s.days=t,s.months=n,s.years=a,this}function pl(e){return e*4800/146097}function Xo(e){return e*146097/4800}function _f(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if(e=ct(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+s/864e5,n=this._months+pl(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Xo(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return t*24+s/36e5;case"minute":return t*1440+s/6e4;case"second":return t*86400+s/1e3;case"millisecond":return Math.floor(t*864e5)+s;default:throw new Error("Unknown unit "+e)}}function Tf(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+ee(this._months/12)*31536e6:NaN}function qt(e){return function(){return this.as(e)}}var Sf=qt("ms"),xf=qt("s"),If=qt("m"),Cf=qt("h"),Af=qt("d"),Df=qt("w"),Pf=qt("M"),Ef=qt("Q"),Rf=qt("y");function Of(){return bt(this)}function jf(e){return e=ct(e),this.isValid()?this[e+"s"]():NaN}function vn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Ff=vn("milliseconds"),Bf=vn("seconds"),Nf=vn("minutes"),Mf=vn("hours"),Wf=vn("days"),Lf=vn("months"),Uf=vn("years");function Hf(){return rt(this.days()/7)}var Ot=Math.round,On={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Gf(e,t,n,s,o){return o.relativeTime(t||1,!!n,e,s)}function zf(e,t,n,s){var o=bt(e).abs(),r=Ot(o.as("s")),i=Ot(o.as("m")),a=Ot(o.as("h")),l=Ot(o.as("d")),u=Ot(o.as("M")),c=Ot(o.as("w")),f=Ot(o.as("y")),d=r<=n.ss&&["s",r]||r<n.s&&["ss",r]||i<=1&&["m"]||i<n.m&&["mm",i]||a<=1&&["h"]||a<n.h&&["hh",a]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(d=d||c<=1&&["w"]||c<n.w&&["ww",c]),d=d||u<=1&&["M"]||u<n.M&&["MM",u]||f<=1&&["y"]||["yy",f],d[2]=t,d[3]=+e>0,d[4]=s,Gf.apply(null,d)}function qf(e){return e===void 0?Ot:typeof e=="function"?(Ot=e,!0):!1}function Yf(e,t){return On[e]===void 0?!1:t===void 0?On[e]:(On[e]=t,e==="s"&&(On.ss=t-1),!0)}function $f(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,s=On,o,r;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(s=Object.assign({},On,t),t.s!=null&&t.ss==null&&(s.ss=t.s-1)),o=this.localeData(),r=zf(this,!n,s,o),n&&(r=o.pastFuture(+this,r)),o.postformat(r)}var Mo=Math.abs;function Sn(e){return(e>0)-(e<0)||+e}function po(){if(!this.isValid())return this.localeData().invalidDate();var e=Mo(this._milliseconds)/1e3,t=Mo(this._days),n=Mo(this._months),s,o,r,i,a=this.asSeconds(),l,u,c,f;return a?(s=rt(e/60),o=rt(s/60),e%=60,s%=60,r=rt(n/12),n%=12,i=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",u=Sn(this._months)!==Sn(a)?"-":"",c=Sn(this._days)!==Sn(a)?"-":"",f=Sn(this._milliseconds)!==Sn(a)?"-":"",l+"P"+(r?u+r+"Y":"")+(n?u+n+"M":"")+(t?c+t+"D":"")+(o||s||e?"T":"")+(o?f+o+"H":"")+(s?f+s+"M":"")+(e?f+i+"S":"")):"P0D"}var oe=ho.prototype;oe.isValid=Mh;oe.abs=bf;oe.add=yf;oe.subtract=vf;oe.as=_f;oe.asMilliseconds=Sf;oe.asSeconds=xf;oe.asMinutes=If;oe.asHours=Cf;oe.asDays=Af;oe.asWeeks=Df;oe.asMonths=Pf;oe.asQuarters=Ef;oe.asYears=Rf;oe.valueOf=Tf;oe._bubble=kf;oe.clone=Of;oe.get=jf;oe.milliseconds=Ff;oe.seconds=Bf;oe.minutes=Nf;oe.hours=Mf;oe.days=Wf;oe.weeks=Hf;oe.months=Lf;oe.years=Uf;oe.humanize=$f;oe.toISOString=po;oe.toString=po;oe.toJSON=po;oe.locale=nl;oe.localeData=ol;oe.toIsoString=ut("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",po);oe.lang=sl;W("X",0,0,"unix");W("x",0,0,"valueOf");R("x",ao);R("X",pc);de("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});de("x",function(e,t,n){n._d=new Date(ee(e))});//! moment.js
D.version="2.29.3";$u(Te);D.fn=k;D.min=jh;D.max=Fh;D.now=Bh;D.utc=Dt;D.unix=hf;D.months=ff;D.isDate=ks;D.locale=tn;D.invalid=no;D.duration=bt;D.isMoment=wt;D.weekdays=mf;D.parseZone=df;D.localeData=zt;D.isDuration=Fs;D.monthsShort=pf;D.weekdaysMin=wf;D.defineLocale=Fr;D.updateLocale=hh;D.locales=dh;D.weekdaysShort=gf;D.normalizeUnits=ct;D.relativeTimeRounding=qf;D.relativeTimeThreshold=Yf;D.calendarFormat=ad;D.prototype=k;D.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function zr(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Vf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=zr(Vf);function ml(e){return!!e||e===""}function qr(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Fe(s)?Qf(s):qr(s);if(o)for(const r in o)t[r]=o[r]}return t}else{if(Fe(e))return e;if(Be(e))return e}}const Kf=/;(?![^(]*\))/g,Zf=/:(.+)/;function Qf(e){const t={};return e.split(Kf).forEach(n=>{if(n){const s=n.split(Zf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function gn(e){let t="";if(Fe(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const s=gn(e[n]);s&&(t+=s+" ")}else if(Be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gl=e=>Fe(e)?e:e==null?"":q(e)||Be(e)&&(e.toString===vl||!Z(e.toString))?JSON.stringify(e,wl,2):String(e),wl=(e,t)=>t&&t.__v_isRef?wl(e,t.value):Mn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:bl(t)?{[`Set(${t.size})`]:[...t.values()]}:Be(t)&&!q(t)&&!kl(t)?String(t):t,be={},Nn=[],mt=()=>{},Xf=()=>!1,ep=/^on[^a-z]/,mo=e=>ep.test(e),Yr=e=>e.startsWith("onUpdate:"),Ue=Object.assign,$r=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},tp=Object.prototype.hasOwnProperty,se=(e,t)=>tp.call(e,t),q=Array.isArray,Mn=e=>go(e)==="[object Map]",bl=e=>go(e)==="[object Set]",Z=e=>typeof e=="function",Fe=e=>typeof e=="string",Vr=e=>typeof e=="symbol",Be=e=>e!==null&&typeof e=="object",yl=e=>Be(e)&&Z(e.then)&&Z(e.catch),vl=Object.prototype.toString,go=e=>vl.call(e),np=e=>go(e).slice(8,-1),kl=e=>go(e)==="[object Object]",Jr=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ns=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},sp=/-(\w)/g,At=wo(e=>e.replace(sp,(t,n)=>n?n.toUpperCase():"")),op=/\B([A-Z])/g,kn=wo(e=>e.replace(op,"-$1").toLowerCase()),bo=wo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wo=wo(e=>e?`on${bo(e)}`:""),ps=(e,t)=>!Object.is(e,t),Ms=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Vs=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},er=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Si;const rp=()=>Si||(Si=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Tt;class _l{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Tt&&(this.parent=Tt,this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Tt;try{return Tt=this,t()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function Tl(e){return new _l(e)}function ip(e,t=Tt){t&&t.active&&t.effects.push(e)}const Kr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Sl=e=>(e.w&on)>0,xl=e=>(e.n&on)>0,ap=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=on},lp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];Sl(o)&&!xl(o)?o.delete(e):t[n++]=o,o.w&=~on,o.n&=~on}t.length=n}},tr=new WeakMap;let es=0,on=1;const nr=30;let dt;const wn=Symbol(""),sr=Symbol("");class Zr{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ip(this,s)}run(){if(!this.active)return this.fn();let t=dt,n=nn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=dt,dt=this,nn=!0,on=1<<++es,es<=nr?ap(this):xi(this),this.fn()}finally{es<=nr&&lp(this),on=1<<--es,dt=this.parent,nn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dt===this?this.deferStop=!0:this.active&&(xi(this),this.onStop&&this.onStop(),this.active=!1)}}function xi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let nn=!0;const Il=[];function qn(){Il.push(nn),nn=!1}function Yn(){const e=Il.pop();nn=e===void 0?!0:e}function tt(e,t,n){if(nn&&dt){let s=tr.get(e);s||tr.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=Kr()),Cl(o)}}function Cl(e,t){let n=!1;es<=nr?xl(e)||(e.n|=on,n=!Sl(e)):n=!e.has(dt),n&&(e.add(dt),dt.deps.push(e))}function Ut(e,t,n,s,o,r){const i=tr.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&q(e))i.forEach((l,u)=>{(u==="length"||u>=s)&&a.push(l)});else switch(n!==void 0&&a.push(i.get(n)),t){case"add":q(e)?Jr(n)&&a.push(i.get("length")):(a.push(i.get(wn)),Mn(e)&&a.push(i.get(sr)));break;case"delete":q(e)||(a.push(i.get(wn)),Mn(e)&&a.push(i.get(sr)));break;case"set":Mn(e)&&a.push(i.get(wn));break}if(a.length===1)a[0]&&or(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);or(Kr(l))}}function or(e,t){const n=q(e)?e:[...e];for(const s of n)s.computed&&Ii(s);for(const s of n)s.computed||Ii(s)}function Ii(e,t){(e!==dt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const up=zr("__proto__,__v_isRef,__isVue"),Al=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vr)),cp=Qr(),hp=Qr(!1,!0),dp=Qr(!0),Ci=fp();function fp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ie(this);for(let r=0,i=this.length;r<i;r++)tt(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(ie)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){qn();const s=ie(this)[t].apply(this,n);return Yn(),s}}),e}function Qr(e=!1,t=!1){return function(s,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?Dp:Ol:t?Rl:El).get(s))return s;const i=q(s);if(!e&&i&&se(Ci,o))return Reflect.get(Ci,o,r);const a=Reflect.get(s,o,r);return(Vr(o)?Al.has(o):up(o))||(e||tt(s,"get",o),t)?a:Ae(a)?i&&Jr(o)?a:a.value:Be(a)?e?jl(a):$n(a):a}}const pp=Dl(),mp=Dl(!0);function Dl(e=!1){return function(n,s,o,r){let i=n[s];if(ms(i)&&Ae(i)&&!Ae(o))return!1;if(!e&&!ms(o)&&(rr(o)||(o=ie(o),i=ie(i)),!q(n)&&Ae(i)&&!Ae(o)))return i.value=o,!0;const a=q(n)&&Jr(s)?Number(s)<n.length:se(n,s),l=Reflect.set(n,s,o,r);return n===ie(r)&&(a?ps(o,i)&&Ut(n,"set",s,o):Ut(n,"add",s,o)),l}}function gp(e,t){const n=se(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Ut(e,"delete",t,void 0),s}function wp(e,t){const n=Reflect.has(e,t);return(!Vr(t)||!Al.has(t))&&tt(e,"has",t),n}function bp(e){return tt(e,"iterate",q(e)?"length":wn),Reflect.ownKeys(e)}const Pl={get:cp,set:pp,deleteProperty:gp,has:wp,ownKeys:bp},yp={get:dp,set(e,t){return!0},deleteProperty(e,t){return!0}},vp=Ue({},Pl,{get:hp,set:mp}),Xr=e=>e,yo=e=>Reflect.getPrototypeOf(e);function As(e,t,n=!1,s=!1){e=e.__v_raw;const o=ie(e),r=ie(t);n||(t!==r&&tt(o,"get",t),tt(o,"get",r));const{has:i}=yo(o),a=s?Xr:n?ni:gs;if(i.call(o,t))return a(e.get(t));if(i.call(o,r))return a(e.get(r));e!==o&&e.get(t)}function Ds(e,t=!1){const n=this.__v_raw,s=ie(n),o=ie(e);return t||(e!==o&&tt(s,"has",e),tt(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Ps(e,t=!1){return e=e.__v_raw,!t&&tt(ie(e),"iterate",wn),Reflect.get(e,"size",e)}function Ai(e){e=ie(e);const t=ie(this);return yo(t).has.call(t,e)||(t.add(e),Ut(t,"add",e,e)),this}function Di(e,t){t=ie(t);const n=ie(this),{has:s,get:o}=yo(n);let r=s.call(n,e);r||(e=ie(e),r=s.call(n,e));const i=o.call(n,e);return n.set(e,t),r?ps(t,i)&&Ut(n,"set",e,t):Ut(n,"add",e,t),this}function Pi(e){const t=ie(this),{has:n,get:s}=yo(t);let o=n.call(t,e);o||(e=ie(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&Ut(t,"delete",e,void 0),r}function Ei(){const e=ie(this),t=e.size!==0,n=e.clear();return t&&Ut(e,"clear",void 0,void 0),n}function Es(e,t){return function(s,o){const r=this,i=r.__v_raw,a=ie(i),l=t?Xr:e?ni:gs;return!e&&tt(a,"iterate",wn),i.forEach((u,c)=>s.call(o,l(u),l(c),r))}}function Rs(e,t,n){return function(...s){const o=this.__v_raw,r=ie(o),i=Mn(r),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=o[e](...s),c=n?Xr:t?ni:gs;return!t&&tt(r,"iterate",l?sr:wn),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function $t(e){return function(...t){return e==="delete"?!1:this}}function kp(){const e={get(r){return As(this,r)},get size(){return Ps(this)},has:Ds,add:Ai,set:Di,delete:Pi,clear:Ei,forEach:Es(!1,!1)},t={get(r){return As(this,r,!1,!0)},get size(){return Ps(this)},has:Ds,add:Ai,set:Di,delete:Pi,clear:Ei,forEach:Es(!1,!0)},n={get(r){return As(this,r,!0)},get size(){return Ps(this,!0)},has(r){return Ds.call(this,r,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Es(!0,!1)},s={get(r){return As(this,r,!0,!0)},get size(){return Ps(this,!0)},has(r){return Ds.call(this,r,!0)},add:$t("add"),set:$t("set"),delete:$t("delete"),clear:$t("clear"),forEach:Es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Rs(r,!1,!1),n[r]=Rs(r,!0,!1),t[r]=Rs(r,!1,!0),s[r]=Rs(r,!0,!0)}),[e,n,t,s]}const[_p,Tp,Sp,xp]=kp();function ei(e,t){const n=t?e?xp:Sp:e?Tp:_p;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(se(n,o)&&o in s?n:s,o,r)}const Ip={get:ei(!1,!1)},Cp={get:ei(!1,!0)},Ap={get:ei(!0,!1)},El=new WeakMap,Rl=new WeakMap,Ol=new WeakMap,Dp=new WeakMap;function Pp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ep(e){return e.__v_skip||!Object.isExtensible(e)?0:Pp(np(e))}function $n(e){return ms(e)?e:ti(e,!1,Pl,Ip,El)}function Rp(e){return ti(e,!1,vp,Cp,Rl)}function jl(e){return ti(e,!0,yp,Ap,Ol)}function ti(e,t,n,s,o){if(!Be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=Ep(e);if(i===0)return e;const a=new Proxy(e,i===2?s:n);return o.set(e,a),a}function Wt(e){return ms(e)?Wt(e.__v_raw):!!(e&&e.__v_isReactive)}function ms(e){return!!(e&&e.__v_isReadonly)}function rr(e){return!!(e&&e.__v_isShallow)}function Fl(e){return Wt(e)||ms(e)}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function Wn(e){return Vs(e,"__v_skip",!0),e}const gs=e=>Be(e)?$n(e):e,ni=e=>Be(e)?jl(e):e;function Bl(e){nn&&dt&&(e=ie(e),Cl(e.dep||(e.dep=Kr())))}function Nl(e,t){e=ie(e),e.dep&&or(e.dep)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function vo(e){return Ml(e,!1)}function Op(e){return Ml(e,!0)}function Ml(e,t){return Ae(e)?e:new jp(e,t)}class jp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ie(t),this._value=n?t:gs(t)}get value(){return Bl(this),this._value}set value(t){t=this.__v_isShallow?t:ie(t),ps(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:gs(t),Nl(this))}}function qe(e){return Ae(e)?e.value:e}const Fp={get:(e,t,n)=>qe(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Ae(o)&&!Ae(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Wl(e){return Wt(e)?e:new Proxy(e,Fp)}function Bp(e){const t=q(e)?new Array(e.length):{};for(const n in e)t[n]=Ll(e,n);return t}class Np{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ll(e,t,n){const s=e[t];return Ae(s)?s:new Np(e,t,n)}class Mp{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Zr(t,()=>{this._dirty||(this._dirty=!0,Nl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ie(this);return Bl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Wp(e,t,n=!1){let s,o;const r=Z(e);return r?(s=e,o=mt):(s=e.get,o=e.set),new Mp(s,o,r||!o,n)}function sn(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){ko(r,t,n)}return o}function at(e,t,n,s){if(Z(e)){const r=sn(e,t,n,s);return r&&yl(r)&&r.catch(i=>{ko(i,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(at(e[r],t,n,s));return o}function ko(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,a=n;for(;r;){const u=r.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,i,a)===!1)return}r=r.parent}const l=t.appContext.config.errorHandler;if(l){sn(l,null,10,[e,i,a]);return}}Lp(e,n,o,s)}function Lp(e,t,n,s=!0){console.error(e)}let Js=!1,ir=!1;const et=[];let Ft=0;const os=[];let ts=null,Dn=0;const rs=[];let Kt=null,Pn=0;const Ul=Promise.resolve();let si=null,ar=null;function oi(e){const t=si||Ul;return e?t.then(this?e.bind(this):e):t}function Up(e){let t=Ft+1,n=et.length;for(;t<n;){const s=t+n>>>1;ws(et[s])<e?t=s+1:n=s}return t}function Hl(e){(!et.length||!et.includes(e,Js&&e.allowRecurse?Ft+1:Ft))&&e!==ar&&(e.id==null?et.push(e):et.splice(Up(e.id),0,e),Gl())}function Gl(){!Js&&!ir&&(ir=!0,si=Ul.then(Yl))}function Hp(e){const t=et.indexOf(e);t>Ft&&et.splice(t,1)}function zl(e,t,n,s){q(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),Gl()}function Gp(e){zl(e,ts,os,Dn)}function zp(e){zl(e,Kt,rs,Pn)}function _o(e,t=null){if(os.length){for(ar=t,ts=[...new Set(os)],os.length=0,Dn=0;Dn<ts.length;Dn++)ts[Dn]();ts=null,Dn=0,ar=null,_o(e,t)}}function ql(e){if(_o(),rs.length){const t=[...new Set(rs)];if(rs.length=0,Kt){Kt.push(...t);return}for(Kt=t,Kt.sort((n,s)=>ws(n)-ws(s)),Pn=0;Pn<Kt.length;Pn++)Kt[Pn]();Kt=null,Pn=0}}const ws=e=>e.id==null?1/0:e.id;function Yl(e){ir=!1,Js=!0,_o(e),et.sort((n,s)=>ws(n)-ws(s));const t=mt;try{for(Ft=0;Ft<et.length;Ft++){const n=et[Ft];n&&n.active!==!1&&sn(n,null,14)}}finally{Ft=0,et.length=0,ql(),Js=!1,si=null,(et.length||os.length||rs.length)&&Yl(e)}}function qp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||be;let o=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in s){const c=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:d}=s[c]||be;d&&(o=n.map(m=>m.trim())),f&&(o=n.map(er))}let a,l=s[a=Wo(t)]||s[a=Wo(At(t))];!l&&r&&(l=s[a=Wo(kn(t))]),l&&at(l,e,6,o);const u=s[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,at(u,e,6,o)}}function $l(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},a=!1;if(!Z(e)){const l=u=>{const c=$l(u,t,!0);c&&(a=!0,Ue(i,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(s.set(e,null),null):(q(r)?r.forEach(l=>i[l]=null):Ue(i,r),s.set(e,i),i)}function To(e,t){return!e||!mo(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,kn(t))||se(e,t))}let We=null,So=null;function Ks(e){const t=We;return We=e,So=e&&e.type.__scopeId||null,t}function Yp(e){So=e}function $p(){So=null}function lr(e,t=We,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Gi(-1);const r=Ks(t),i=e(...o);return Ks(r),s._d&&Gi(1),i};return s._n=!0,s._c=!0,s._d=!0,s}function Lo(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[i],slots:a,attrs:l,emit:u,render:c,renderCache:f,data:d,setupState:m,ctx:T,inheritAttrs:P}=e;let A,_;const F=Ks(e);try{if(n.shapeFlag&4){const J=o||s;A=St(c.call(J,J,f,r,m,d,T)),_=l}else{const J=t;A=St(J.length>1?J(r,{attrs:l,slots:a,emit:u}):J(r,null)),_=t.props?l:Vp(l)}}catch(J){as.length=0,ko(J,e,1),A=ce(lt)}let V=A;if(_&&P!==!1){const J=Object.keys(_),{shapeFlag:$}=V;J.length&&$&7&&(i&&J.some(Yr)&&(_=Jp(_,i)),V=rn(V,_))}return n.dirs&&(V=rn(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),A=V,Ks(F),A}const Vp=e=>{let t;for(const n in e)(n==="class"||n==="style"||mo(n))&&((t||(t={}))[n]=e[n]);return t},Jp=(e,t)=>{const n={};for(const s in e)(!Yr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Kp(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Ri(s,i,u):!!i;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(i[d]!==s[d]&&!To(u,d))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Ri(s,i,u):!0:!!i;return!1}function Ri(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!To(n,r))return!0}return!1}function Zp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Qp=e=>e.__isSuspense;function Xp(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):zp(e)}function Ws(e,t){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[e]=t}}function It(e,t,n=!1){const s=Me||We;if(s){const o=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Z(t)?t.call(s.proxy):t}}const Oi={};function bn(e,t,n){return Vl(e,t,n)}function Vl(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:i}=be){const a=Me;let l,u=!1,c=!1;if(Ae(e)?(l=()=>e.value,u=rr(e)):Wt(e)?(l=()=>e,s=!0):q(e)?(c=!0,u=e.some(_=>Wt(_)||rr(_)),l=()=>e.map(_=>{if(Ae(_))return _.value;if(Wt(_))return pn(_);if(Z(_))return sn(_,a,2)})):Z(e)?t?l=()=>sn(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),at(e,a,3,[d])}:l=mt,t&&s){const _=l;l=()=>pn(_())}let f,d=_=>{f=A.onStop=()=>{sn(_,a,4)}};if(ys)return d=mt,t?n&&at(t,a,3,[l(),c?[]:void 0,d]):l(),mt;let m=c?[]:Oi;const T=()=>{if(!!A.active)if(t){const _=A.run();(s||u||(c?_.some((F,V)=>ps(F,m[V])):ps(_,m)))&&(f&&f(),at(t,a,3,[_,m===Oi?void 0:m,d]),m=_)}else A.run()};T.allowRecurse=!!t;let P;o==="sync"?P=T:o==="post"?P=()=>Ve(T,a&&a.suspense):P=()=>Gp(T);const A=new Zr(l,P);return t?n?T():m=A.run():o==="post"?Ve(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&$r(a.scope.effects,A)}}function em(e,t,n){const s=this.proxy,o=Fe(e)?e.includes(".")?Jl(s,e):()=>s[e]:e.bind(s,s);let r;Z(t)?r=t:(r=t.handler,n=t);const i=Me;Ln(this);const a=Vl(o,r.bind(s),n);return i?Ln(i):yn(),a}function Jl(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function pn(e,t){if(!Be(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))pn(e.value,t);else if(q(e))for(let n=0;n<e.length;n++)pn(e[n],t);else if(bl(e)||Mn(e))e.forEach(n=>{pn(n,t)});else if(kl(e))for(const n in e)pn(e[n],t);return e}function tm(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ri(()=>{e.isMounted=!0}),tu(()=>{e.isUnmounting=!0}),e}const ot=[Function,Array],nm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(e,{slots:t}){const n=hi(),s=tm();let o;return()=>{const r=t.default&&Zl(t.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const P of r)if(P.type!==lt){i=P;break}}const a=ie(e),{mode:l}=a;if(s.isLeaving)return Uo(i);const u=ji(i);if(!u)return Uo(i);const c=ur(u,a,s,n);cr(u,c);const f=n.subTree,d=f&&ji(f);let m=!1;const{getTransitionKey:T}=u.type;if(T){const P=T();o===void 0?o=P:P!==o&&(o=P,m=!0)}if(d&&d.type!==lt&&(!hn(u,d)||m)){const P=ur(d,a,s,n);if(cr(d,P),l==="out-in")return s.isLeaving=!0,P.afterLeave=()=>{s.isLeaving=!1,n.update()},Uo(i);l==="in-out"&&u.type!==lt&&(P.delayLeave=(A,_,F)=>{const V=Kl(s,d);V[String(d.key)]=d,A._leaveCb=()=>{_(),A._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=F})}return i}}},sm=nm;function Kl(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function ur(e,t,n,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:T,onBeforeAppear:P,onAppear:A,onAfterAppear:_,onAppearCancelled:F}=t,V=String(e.key),J=Kl(n,e),$=(j,ne)=>{j&&at(j,s,9,ne)},ae=(j,ne)=>{const he=ne[1];$(j,ne),q(j)?j.every(Ie=>Ie.length<=1)&&he():j.length<=1&&he()},Q={mode:r,persisted:i,beforeEnter(j){let ne=a;if(!n.isMounted)if(o)ne=P||a;else return;j._leaveCb&&j._leaveCb(!0);const he=J[V];he&&hn(e,he)&&he.el._leaveCb&&he.el._leaveCb(),$(ne,[j])},enter(j){let ne=l,he=u,Ie=c;if(!n.isMounted)if(o)ne=A||l,he=_||u,Ie=F||c;else return;let Ee=!1;const Je=j._enterCb=Ye=>{Ee||(Ee=!0,Ye?$(Ie,[j]):$(he,[j]),Q.delayedLeave&&Q.delayedLeave(),j._enterCb=void 0)};ne?ae(ne,[j,Je]):Je()},leave(j,ne){const he=String(e.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return ne();$(f,[j]);let Ie=!1;const Ee=j._leaveCb=Je=>{Ie||(Ie=!0,ne(),Je?$(T,[j]):$(m,[j]),j._leaveCb=void 0,J[he]===e&&delete J[he])};J[he]=e,d?ae(d,[j,Ee]):Ee()},clone(j){return ur(j,t,n,s)}};return Q}function Uo(e){if(xo(e))return e=rn(e),e.children=null,e}function ji(e){return xo(e)?e.children?e.children[0]:void 0:e}function cr(e,t){e.shapeFlag&6&&e.component?cr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zl(e,t=!1,n){let s=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:r);i.type===Xe?(i.patchFlag&128&&o++,s=s.concat(Zl(i.children,t,a))):(t||i.type!==lt)&&s.push(a!=null?rn(i,{key:a}):i)}if(o>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ql(e){return Z(e)?{setup:e,name:e.name}:e}const is=e=>!!e.type.__asyncLoader,xo=e=>e.type.__isKeepAlive;function om(e,t){Xl(e,"a",t)}function rm(e,t){Xl(e,"da",t)}function Xl(e,t,n=Me){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Io(t,s,n),n){let o=n.parent;for(;o&&o.parent;)xo(o.parent.vnode)&&im(s,t,n,o),o=o.parent}}function im(e,t,n,s){const o=Io(t,e,s,!0);ii(()=>{$r(s[t],o)},n)}function Io(e,t,n=Me,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;qn(),Ln(n);const a=at(t,n,e,i);return yn(),Yn(),a});return s?o.unshift(r):o.push(r),r}}const Yt=e=>(t,n=Me)=>(!ys||e==="sp")&&Io(e,t,n),eu=Yt("bm"),ri=Yt("m"),am=Yt("bu"),lm=Yt("u"),tu=Yt("bum"),ii=Yt("um"),um=Yt("sp"),cm=Yt("rtg"),hm=Yt("rtc");function dm(e,t=Me){Io("ec",e,t)}function Ky(e,t){const n=We;if(n===null)return e;const s=Do(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,a,l,u=be]=t[r];Z(i)&&(i={mounted:i,updated:i}),i.deep&&pn(a),o.push({dir:i,instance:s,value:a,oldValue:void 0,arg:l,modifiers:u})}return e}function ln(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const a=o[i];r&&(a.oldValue=r[i].value);let l=a.dir[s];l&&(qn(),at(l,n,8,[e.el,a,e,t]),Yn())}}const ai="components";function fm(e,t){return su(ai,e,!0,t)||e}const nu=Symbol();function Zy(e){return Fe(e)?su(ai,e,!1)||e:e||nu}function su(e,t,n=!0,s=!1){const o=We||Me;if(o){const r=o.type;if(e===ai){const a=Gm(r,!1);if(a&&(a===t||a===At(t)||a===bo(At(t))))return r}const i=Fi(o[e]||r[e],t)||Fi(o.appContext[e],t);return!i&&s?r:i}}function Fi(e,t){return e&&(e[t]||e[At(t)]||e[bo(At(t))])}function pm(e,t,n,s){let o;const r=n&&n[s];if(q(e)||Fe(e)){o=new Array(e.length);for(let i=0,a=e.length;i<a;i++)o[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,r&&r[i])}else if(Be(e))if(e[Symbol.iterator])o=Array.from(e,(i,a)=>t(i,a,void 0,r&&r[a]));else{const i=Object.keys(e);o=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const u=i[a];o[a]=t(e[u],u,a,r&&r[a])}}else o=[];return n&&(n[s]=o),o}function Bi(e,t,n={},s,o){if(We.isCE||We.parent&&is(We.parent)&&We.parent.isCE)return ce("slot",t==="default"?null:{name:t},s&&s());let r=e[t];r&&r._c&&(r._d=!1),Ce();const i=r&&ou(r(n)),a=mu(Xe,{key:n.key||`_${t}`},i||(s?s():[]),i&&e._===1?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function ou(e){return e.some(t=>Xs(t)?!(t.type===lt||t.type===Xe&&!ou(t.children)):!0)?e:null}const hr=e=>e?wu(e)?Do(e)||e.proxy:hr(e.parent):null,Zs=Ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hr(e.parent),$root:e=>hr(e.root),$emit:e=>e.emit,$options:e=>iu(e),$forceUpdate:e=>e.f||(e.f=()=>Hl(e.update)),$nextTick:e=>e.n||(e.n=oi.bind(e.proxy)),$watch:e=>em.bind(e)}),mm={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(s!==be&&se(s,t))return i[t]=1,s[t];if(o!==be&&se(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&se(u,t))return i[t]=3,r[t];if(n!==be&&se(n,t))return i[t]=4,n[t];dr&&(i[t]=0)}}const c=Zs[t];let f,d;if(c)return t==="$attrs"&&tt(e,"get",t),c(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==be&&se(n,t))return i[t]=4,n[t];if(d=l.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return o!==be&&se(o,t)?(o[t]=n,!0):s!==be&&se(s,t)?(s[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let a;return!!n[i]||e!==be&&se(e,i)||t!==be&&se(t,i)||(a=r[0])&&se(a,i)||se(s,i)||se(Zs,i)||se(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let dr=!0;function gm(e){const t=iu(e),n=e.proxy,s=e.ctx;dr=!1,t.beforeCreate&&Ni(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:m,updated:T,activated:P,deactivated:A,beforeDestroy:_,beforeUnmount:F,destroyed:V,unmounted:J,render:$,renderTracked:ae,renderTriggered:Q,errorCaptured:j,serverPrefetch:ne,expose:he,inheritAttrs:Ie,components:Ee,directives:Je,filters:Ye}=t;if(u&&wm(u,s,null,e.appContext.config.unwrapInjectedRef),i)for(const ve in i){const fe=i[ve];Z(fe)&&(s[ve]=fe.bind(n))}if(o){const ve=o.call(n,n);Be(ve)&&(e.data=$n(ve))}if(dr=!0,r)for(const ve in r){const fe=r[ve],Ke=Z(fe)?fe.bind(n,n):Z(fe.get)?fe.get.bind(n,n):mt,_n=!Z(fe)&&Z(fe.set)?fe.set.bind(n):mt,Et=it({get:Ke,set:_n});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>Et.value,set:vt=>Et.value=vt})}if(a)for(const ve in a)ru(a[ve],s,n,ve);if(l){const ve=Z(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(fe=>{Ws(fe,ve[fe])})}c&&Ni(c,e,"c");function Oe(ve,fe){q(fe)?fe.forEach(Ke=>ve(Ke.bind(n))):fe&&ve(fe.bind(n))}if(Oe(eu,f),Oe(ri,d),Oe(am,m),Oe(lm,T),Oe(om,P),Oe(rm,A),Oe(dm,j),Oe(hm,ae),Oe(cm,Q),Oe(tu,F),Oe(ii,J),Oe(um,ne),q(he))if(he.length){const ve=e.exposed||(e.exposed={});he.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:Ke=>n[fe]=Ke})})}else e.exposed||(e.exposed={});$&&e.render===mt&&(e.render=$),Ie!=null&&(e.inheritAttrs=Ie),Ee&&(e.components=Ee),Je&&(e.directives=Je)}function wm(e,t,n=mt,s=!1){q(e)&&(e=fr(e));for(const o in e){const r=e[o];let i;Be(r)?"default"in r?i=It(r.from||o,r.default,!0):i=It(r.from||o):i=It(r),Ae(i)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function Ni(e,t,n){at(q(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ru(e,t,n,s){const o=s.includes(".")?Jl(n,s):()=>n[s];if(Fe(e)){const r=t[e];Z(r)&&bn(o,r)}else if(Z(e))bn(o,e.bind(n));else if(Be(e))if(q(e))e.forEach(r=>ru(r,t,n,s));else{const r=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(r)&&bn(o,r,e)}}function iu(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,a=r.get(t);let l;return a?l=a:!o.length&&!n&&!s?l=t:(l={},o.length&&o.forEach(u=>Qs(l,u,i,!0)),Qs(l,t,i)),r.set(t,l),l}function Qs(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&Qs(e,r,n,!0),o&&o.forEach(i=>Qs(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const a=bm[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const bm={data:Mi,props:cn,emits:cn,methods:cn,computed:cn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:cn,directives:cn,watch:vm,provide:Mi,inject:ym};function Mi(e,t){return t?e?function(){return Ue(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function ym(e,t){return cn(fr(e),fr(t))}function fr(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?Ue(Ue(Object.create(null),e),t):t}function vm(e,t){if(!e)return t;if(!t)return e;const n=Ue(Object.create(null),e);for(const s in t)n[s]=ze(e[s],t[s]);return n}function km(e,t,n,s=!1){const o={},r={};Vs(r,Co,1),e.propsDefaults=Object.create(null),au(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Rp(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function _m(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,a=ie(o),[l]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(To(e.emitsOptions,d))continue;const m=t[d];if(l)if(se(r,d))m!==r[d]&&(r[d]=m,u=!0);else{const T=At(d);o[T]=pr(l,a,T,m,e,!1)}else m!==r[d]&&(r[d]=m,u=!0)}}}else{au(e,t,o,r)&&(u=!0);let c;for(const f in a)(!t||!se(t,f)&&((c=kn(f))===f||!se(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(o[f]=pr(l,a,f,void 0,e,!0)):delete o[f]);if(r!==a)for(const f in r)(!t||!se(t,f)&&!0)&&(delete r[f],u=!0)}u&&Ut(e,"set","$attrs")}function au(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if(Ns(l))continue;const u=t[l];let c;o&&se(o,c=At(l))?!r||!r.includes(c)?n[c]=u:(a||(a={}))[c]=u:To(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,i=!0)}if(r){const l=ie(n),u=a||be;for(let c=0;c<r.length;c++){const f=r[c];n[f]=pr(o,l,f,u[f],e,!se(u,f))}}return i}function pr(e,t,n,s,o,r){const i=e[n];if(i!=null){const a=se(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&Z(l)){const{propsDefaults:u}=o;n in u?s=u[n]:(Ln(o),s=u[n]=l.call(null,t),yn())}else s=l}i[0]&&(r&&!a?s=!1:i[1]&&(s===""||s===kn(n))&&(s=!0))}return s}function lu(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},a=[];let l=!1;if(!Z(e)){const c=f=>{l=!0;const[d,m]=lu(f,t,!0);Ue(i,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return s.set(e,Nn),Nn;if(q(r))for(let c=0;c<r.length;c++){const f=At(r[c]);Wi(f)&&(i[f]=be)}else if(r)for(const c in r){const f=At(c);if(Wi(f)){const d=r[c],m=i[f]=q(d)||Z(d)?{type:d}:d;if(m){const T=Hi(Boolean,m.type),P=Hi(String,m.type);m[0]=T>-1,m[1]=P<0||T<P,(T>-1||se(m,"default"))&&a.push(f)}}}const u=[i,a];return s.set(e,u),u}function Wi(e){return e[0]!=="$"}function Li(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ui(e,t){return Li(e)===Li(t)}function Hi(e,t){return q(t)?t.findIndex(n=>Ui(n,e)):Z(t)&&Ui(t,e)?0:-1}const uu=e=>e[0]==="_"||e==="$stable",li=e=>q(e)?e.map(St):[St(e)],Tm=(e,t,n)=>{if(t._n)return t;const s=lr((...o)=>li(t(...o)),n);return s._c=!1,s},cu=(e,t,n)=>{const s=e._ctx;for(const o in e){if(uu(o))continue;const r=e[o];if(Z(r))t[o]=Tm(o,r,s);else if(r!=null){const i=li(r);t[o]=()=>i}}},hu=(e,t)=>{const n=li(t);e.slots.default=()=>n},Sm=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ie(t),Vs(t,"_",n)):cu(t,e.slots={})}else e.slots={},t&&hu(e,t);Vs(e.slots,Co,1)},xm=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=be;if(s.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:(Ue(o,t),!n&&a===1&&delete o._):(r=!t.$stable,cu(t,o)),i=t}else t&&(hu(e,t),i={default:1});if(r)for(const a in o)!uu(a)&&!(a in i)&&delete o[a]};function du(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Im=0;function Cm(e,t){return function(s,o=null){Z(s)||(s=Object.assign({},s)),o!=null&&!Be(o)&&(o=null);const r=du(),i=new Set;let a=!1;const l=r.app={_uid:Im++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:qm,get config(){return r.config},set config(u){},use(u,...c){return i.has(u)||(u&&Z(u.install)?(i.add(u),u.install(l,...c)):Z(u)&&(i.add(u),u(l,...c))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,c){return c?(r.components[u]=c,l):r.components[u]},directive(u,c){return c?(r.directives[u]=c,l):r.directives[u]},mount(u,c,f){if(!a){const d=ce(s,o);return d.appContext=r,c&&t?t(d,u):e(d,u,f),a=!0,l._container=u,u.__vue_app__=l,Do(d.component)||d.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return r.provides[u]=c,l}};return l}}function mr(e,t,n,s,o=!1){if(q(e)){e.forEach((d,m)=>mr(d,t&&(q(t)?t[m]:t),n,s,o));return}if(is(s)&&!o)return;const r=s.shapeFlag&4?Do(s.component)||s.component.proxy:s.el,i=o?null:r,{i:a,r:l}=e,u=t&&t.r,c=a.refs===be?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Fe(u)?(c[u]=null,se(f,u)&&(f[u]=null)):Ae(u)&&(u.value=null)),Z(l))sn(l,a,12,[i,c]);else{const d=Fe(l),m=Ae(l);if(d||m){const T=()=>{if(e.f){const P=d?c[l]:l.value;o?q(P)&&$r(P,r):q(P)?P.includes(r)||P.push(r):d?(c[l]=[r],se(f,l)&&(f[l]=c[l])):(l.value=[r],e.k&&(c[e.k]=l.value))}else d?(c[l]=i,se(f,l)&&(f[l]=i)):m&&(l.value=i,e.k&&(c[e.k]=i))};i?(T.id=-1,Ve(T,n)):T()}}}const Ve=Xp;function Am(e){return Dm(e)}function Dm(e,t){const n=rp();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:m=mt,cloneNode:T,insertStaticContent:P}=e,A=(h,p,g,y=null,b=null,x=null,E=!1,S=null,I=!!p.dynamicChildren)=>{if(h===p)return;h&&!hn(h,p)&&(y=M(h),st(h,b,x,!0),h=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:v,ref:L,shapeFlag:B}=p;switch(v){case ui:_(h,p,g,y);break;case lt:F(h,p,g,y);break;case Ho:h==null&&V(p,g,y,E);break;case Xe:Je(h,p,g,y,b,x,E,S,I);break;default:B&1?ae(h,p,g,y,b,x,E,S,I):B&6?Ye(h,p,g,y,b,x,E,S,I):(B&64||B&128)&&v.process(h,p,g,y,b,x,E,S,I,ke)}L!=null&&b&&mr(L,h&&h.ref,x,p||h,!p)},_=(h,p,g,y)=>{if(h==null)s(p.el=a(p.children),g,y);else{const b=p.el=h.el;p.children!==h.children&&u(b,p.children)}},F=(h,p,g,y)=>{h==null?s(p.el=l(p.children||""),g,y):p.el=h.el},V=(h,p,g,y)=>{[h.el,h.anchor]=P(h.children,p,g,y,h.el,h.anchor)},J=({el:h,anchor:p},g,y)=>{let b;for(;h&&h!==p;)b=d(h),s(h,g,y),h=b;s(p,g,y)},$=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),o(h),h=g;o(p)},ae=(h,p,g,y,b,x,E,S,I)=>{E=E||p.type==="svg",h==null?Q(p,g,y,b,x,E,S,I):he(h,p,b,x,E,S,I)},Q=(h,p,g,y,b,x,E,S)=>{let I,v;const{type:L,props:B,shapeFlag:U,transition:Y,patchFlag:re,dirs:me}=h;if(h.el&&T!==void 0&&re===-1)I=h.el=T(h.el);else{if(I=h.el=i(h.type,x,B&&B.is,B),U&8?c(I,h.children):U&16&&ne(h.children,I,null,y,b,x&&L!=="foreignObject",E,S),me&&ln(h,null,y,"created"),B){for(const _e in B)_e!=="value"&&!Ns(_e)&&r(I,_e,null,B[_e],x,h.children,y,b,C);"value"in B&&r(I,"value",null,B.value),(v=B.onVnodeBeforeMount)&&_t(v,y,h)}j(I,h,h.scopeId,E,y)}me&&ln(h,null,y,"beforeMount");const ge=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;ge&&Y.beforeEnter(I),s(I,p,g),((v=B&&B.onVnodeMounted)||ge||me)&&Ve(()=>{v&&_t(v,y,h),ge&&Y.enter(I),me&&ln(h,null,y,"mounted")},b)},j=(h,p,g,y,b)=>{if(g&&m(h,g),y)for(let x=0;x<y.length;x++)m(h,y[x]);if(b){let x=b.subTree;if(p===x){const E=b.vnode;j(h,E,E.scopeId,E.slotScopeIds,b.parent)}}},ne=(h,p,g,y,b,x,E,S,I=0)=>{for(let v=I;v<h.length;v++){const L=h[v]=S?Zt(h[v]):St(h[v]);A(null,L,p,g,y,b,x,E,S)}},he=(h,p,g,y,b,x,E)=>{const S=p.el=h.el;let{patchFlag:I,dynamicChildren:v,dirs:L}=p;I|=h.patchFlag&16;const B=h.props||be,U=p.props||be;let Y;g&&un(g,!1),(Y=U.onVnodeBeforeUpdate)&&_t(Y,g,p,h),L&&ln(p,h,g,"beforeUpdate"),g&&un(g,!0);const re=b&&p.type!=="foreignObject";if(v?Ie(h.dynamicChildren,v,S,g,y,re,x):E||Ke(h,p,S,null,g,y,re,x,!1),I>0){if(I&16)Ee(S,p,B,U,g,y,b);else if(I&2&&B.class!==U.class&&r(S,"class",null,U.class,b),I&4&&r(S,"style",B.style,U.style,b),I&8){const me=p.dynamicProps;for(let ge=0;ge<me.length;ge++){const _e=me[ge],ht=B[_e],Tn=U[_e];(Tn!==ht||_e==="value")&&r(S,_e,ht,Tn,b,h.children,g,y,C)}}I&1&&h.children!==p.children&&c(S,p.children)}else!E&&v==null&&Ee(S,p,B,U,g,y,b);((Y=U.onVnodeUpdated)||L)&&Ve(()=>{Y&&_t(Y,g,p,h),L&&ln(p,h,g,"updated")},y)},Ie=(h,p,g,y,b,x,E)=>{for(let S=0;S<p.length;S++){const I=h[S],v=p[S],L=I.el&&(I.type===Xe||!hn(I,v)||I.shapeFlag&70)?f(I.el):g;A(I,v,L,null,y,b,x,E,!0)}},Ee=(h,p,g,y,b,x,E)=>{if(g!==y){for(const S in y){if(Ns(S))continue;const I=y[S],v=g[S];I!==v&&S!=="value"&&r(h,S,v,I,E,p.children,b,x,C)}if(g!==be)for(const S in g)!Ns(S)&&!(S in y)&&r(h,S,g[S],null,E,p.children,b,x,C);"value"in y&&r(h,"value",g.value,y.value)}},Je=(h,p,g,y,b,x,E,S,I)=>{const v=p.el=h?h.el:a(""),L=p.anchor=h?h.anchor:a("");let{patchFlag:B,dynamicChildren:U,slotScopeIds:Y}=p;Y&&(S=S?S.concat(Y):Y),h==null?(s(v,g,y),s(L,g,y),ne(p.children,g,L,b,x,E,S,I)):B>0&&B&64&&U&&h.dynamicChildren?(Ie(h.dynamicChildren,U,g,b,x,E,S),(p.key!=null||b&&p===b.subTree)&&fu(h,p,!0)):Ke(h,p,g,L,b,x,E,S,I)},Ye=(h,p,g,y,b,x,E,S,I)=>{p.slotScopeIds=S,h==null?p.shapeFlag&512?b.ctx.activate(p,g,y,E,I):Re(p,g,y,b,x,E,I):Oe(h,p,I)},Re=(h,p,g,y,b,x,E)=>{const S=h.component=Mm(h,y,b);if(xo(h)&&(S.ctx.renderer=ke),Wm(S),S.asyncDep){if(b&&b.registerDep(S,ve),!h.el){const I=S.subTree=ce(lt);F(null,I,p,g)}return}ve(S,h,p,g,b,x,E)},Oe=(h,p,g)=>{const y=p.component=h.component;if(Kp(h,p,g))if(y.asyncDep&&!y.asyncResolved){fe(y,p,g);return}else y.next=p,Hp(y.update),y.update();else p.el=h.el,y.vnode=p},ve=(h,p,g,y,b,x,E)=>{const S=()=>{if(h.isMounted){let{next:L,bu:B,u:U,parent:Y,vnode:re}=h,me=L,ge;un(h,!1),L?(L.el=re.el,fe(h,L,E)):L=re,B&&Ms(B),(ge=L.props&&L.props.onVnodeBeforeUpdate)&&_t(ge,Y,L,re),un(h,!0);const _e=Lo(h),ht=h.subTree;h.subTree=_e,A(ht,_e,f(ht.el),M(ht),h,b,x),L.el=_e.el,me===null&&Zp(h,_e.el),U&&Ve(U,b),(ge=L.props&&L.props.onVnodeUpdated)&&Ve(()=>_t(ge,Y,L,re),b)}else{let L;const{el:B,props:U}=p,{bm:Y,m:re,parent:me}=h,ge=is(p);if(un(h,!1),Y&&Ms(Y),!ge&&(L=U&&U.onVnodeBeforeMount)&&_t(L,me,p),un(h,!0),B&&X){const _e=()=>{h.subTree=Lo(h),X(B,h.subTree,h,b,null)};ge?p.type.__asyncLoader().then(()=>!h.isUnmounted&&_e()):_e()}else{const _e=h.subTree=Lo(h);A(null,_e,g,y,h,b,x),p.el=_e.el}if(re&&Ve(re,b),!ge&&(L=U&&U.onVnodeMounted)){const _e=p;Ve(()=>_t(L,me,_e),b)}(p.shapeFlag&256||me&&is(me.vnode)&&me.vnode.shapeFlag&256)&&h.a&&Ve(h.a,b),h.isMounted=!0,p=g=y=null}},I=h.effect=new Zr(S,()=>Hl(v),h.scope),v=h.update=()=>I.run();v.id=h.uid,un(h,!0),v()},fe=(h,p,g)=>{p.component=h;const y=h.vnode.props;h.vnode=p,h.next=null,_m(h,p.props,y,g),xm(h,p.children,g),qn(),_o(void 0,h.update),Yn()},Ke=(h,p,g,y,b,x,E,S,I=!1)=>{const v=h&&h.children,L=h?h.shapeFlag:0,B=p.children,{patchFlag:U,shapeFlag:Y}=p;if(U>0){if(U&128){Et(v,B,g,y,b,x,E,S,I);return}else if(U&256){_n(v,B,g,y,b,x,E,S,I);return}}Y&8?(L&16&&C(v,b,x),B!==v&&c(g,B)):L&16?Y&16?Et(v,B,g,y,b,x,E,S,I):C(v,b,x,!0):(L&8&&c(g,""),Y&16&&ne(B,g,y,b,x,E,S,I))},_n=(h,p,g,y,b,x,E,S,I)=>{h=h||Nn,p=p||Nn;const v=h.length,L=p.length,B=Math.min(v,L);let U;for(U=0;U<B;U++){const Y=p[U]=I?Zt(p[U]):St(p[U]);A(h[U],Y,g,null,b,x,E,S,I)}v>L?C(h,b,x,!0,!1,B):ne(p,g,y,b,x,E,S,I,B)},Et=(h,p,g,y,b,x,E,S,I)=>{let v=0;const L=p.length;let B=h.length-1,U=L-1;for(;v<=B&&v<=U;){const Y=h[v],re=p[v]=I?Zt(p[v]):St(p[v]);if(hn(Y,re))A(Y,re,g,null,b,x,E,S,I);else break;v++}for(;v<=B&&v<=U;){const Y=h[B],re=p[U]=I?Zt(p[U]):St(p[U]);if(hn(Y,re))A(Y,re,g,null,b,x,E,S,I);else break;B--,U--}if(v>B){if(v<=U){const Y=U+1,re=Y<L?p[Y].el:y;for(;v<=U;)A(null,p[v]=I?Zt(p[v]):St(p[v]),g,re,b,x,E,S,I),v++}}else if(v>U)for(;v<=B;)st(h[v],b,x,!0),v++;else{const Y=v,re=v,me=new Map;for(v=re;v<=U;v++){const Ze=p[v]=I?Zt(p[v]):St(p[v]);Ze.key!=null&&me.set(Ze.key,v)}let ge,_e=0;const ht=U-re+1;let Tn=!1,gi=0;const Kn=new Array(ht);for(v=0;v<ht;v++)Kn[v]=0;for(v=Y;v<=B;v++){const Ze=h[v];if(_e>=ht){st(Ze,b,x,!0);continue}let kt;if(Ze.key!=null)kt=me.get(Ze.key);else for(ge=re;ge<=U;ge++)if(Kn[ge-re]===0&&hn(Ze,p[ge])){kt=ge;break}kt===void 0?st(Ze,b,x,!0):(Kn[kt-re]=v+1,kt>=gi?gi=kt:Tn=!0,A(Ze,p[kt],g,null,b,x,E,S,I),_e++)}const wi=Tn?Pm(Kn):Nn;for(ge=wi.length-1,v=ht-1;v>=0;v--){const Ze=re+v,kt=p[Ze],bi=Ze+1<L?p[Ze+1].el:y;Kn[v]===0?A(null,kt,g,bi,b,x,E,S,I):Tn&&(ge<0||v!==wi[ge]?vt(kt,g,bi,2):ge--)}}},vt=(h,p,g,y,b=null)=>{const{el:x,type:E,transition:S,children:I,shapeFlag:v}=h;if(v&6){vt(h.component.subTree,p,g,y);return}if(v&128){h.suspense.move(p,g,y);return}if(v&64){E.move(h,p,g,ke);return}if(E===Xe){s(x,p,g);for(let B=0;B<I.length;B++)vt(I[B],p,g,y);s(h.anchor,p,g);return}if(E===Ho){J(h,p,g);return}if(y!==2&&v&1&&S)if(y===0)S.beforeEnter(x),s(x,p,g),Ve(()=>S.enter(x),b);else{const{leave:B,delayLeave:U,afterLeave:Y}=S,re=()=>s(x,p,g),me=()=>{B(x,()=>{re(),Y&&Y()})};U?U(x,re,me):me()}else s(x,p,g)},st=(h,p,g,y=!1,b=!1)=>{const{type:x,props:E,ref:S,children:I,dynamicChildren:v,shapeFlag:L,patchFlag:B,dirs:U}=h;if(S!=null&&mr(S,null,g,h,!0),L&256){p.ctx.deactivate(h);return}const Y=L&1&&U,re=!is(h);let me;if(re&&(me=E&&E.onVnodeBeforeUnmount)&&_t(me,p,h),L&6)N(h.component,g,y);else{if(L&128){h.suspense.unmount(g,y);return}Y&&ln(h,null,p,"beforeUnmount"),L&64?h.type.remove(h,p,g,b,ke,y):v&&(x!==Xe||B>0&&B&64)?C(v,p,g,!1,!0):(x===Xe&&B&384||!b&&L&16)&&C(I,p,g),y&&jo(h)}(re&&(me=E&&E.onVnodeUnmounted)||Y)&&Ve(()=>{me&&_t(me,p,h),Y&&ln(h,null,p,"unmounted")},g)},jo=h=>{const{type:p,el:g,anchor:y,transition:b}=h;if(p===Xe){w(g,y);return}if(p===Ho){$(h);return}const x=()=>{o(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:E,delayLeave:S}=b,I=()=>E(g,x);S?S(h.el,x,I):I()}else x()},w=(h,p)=>{let g;for(;h!==p;)g=d(h),o(h),h=g;o(p)},N=(h,p,g)=>{const{bum:y,scope:b,update:x,subTree:E,um:S}=h;y&&Ms(y),b.stop(),x&&(x.active=!1,st(E,h,p,g)),S&&Ve(S,p),Ve(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},C=(h,p,g,y=!1,b=!1,x=0)=>{for(let E=x;E<h.length;E++)st(h[E],p,g,y,b)},M=h=>h.shapeFlag&6?M(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),pe=(h,p,g)=>{h==null?p._vnode&&st(p._vnode,null,null,!0):A(p._vnode||null,h,p,null,null,null,g),ql(),p._vnode=h},ke={p:A,um:st,m:vt,r:jo,mt:Re,mc:ne,pc:Ke,pbc:Ie,n:M,o:e};let te,X;return t&&([te,X]=t(ke)),{render:pe,hydrate:te,createApp:Cm(pe,te)}}function un({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fu(e,t,n=!1){const s=e.children,o=t.children;if(q(s)&&q(o))for(let r=0;r<s.length;r++){const i=s[r];let a=o[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[r]=Zt(o[r]),a.el=i.el),n||fu(i,a))}}function Pm(e){const t=e.slice(),n=[0];let s,o,r,i,a;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)a=r+i>>1,e[n[a]]<u?r=a+1:i=a;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const Em=e=>e.__isTeleport,Xe=Symbol(void 0),ui=Symbol(void 0),lt=Symbol(void 0),Ho=Symbol(void 0),as=[];let pt=null;function Ce(e=!1){as.push(pt=e?null:[])}function Rm(){as.pop(),pt=as[as.length-1]||null}let bs=1;function Gi(e){bs+=e}function pu(e){return e.dynamicChildren=bs>0?pt||Nn:null,Rm(),bs>0&&pt&&pt.push(e),e}function Pe(e,t,n,s,o,r){return pu(z(e,t,n,s,o,r,!0))}function mu(e,t,n,s,o){return pu(ce(e,t,n,s,o,!0))}function Xs(e){return e?e.__v_isVNode===!0:!1}function hn(e,t){return e.type===t.type&&e.key===t.key}const Co="__vInternal",gu=({key:e})=>e!=null?e:null,Ls=({ref:e,ref_key:t,ref_for:n})=>e!=null?Fe(e)||Ae(e)||Z(e)?{i:We,r:e,k:t,f:!!n}:e:null;function z(e,t=null,n=null,s=0,o=null,r=e===Xe?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gu(t),ref:t&&Ls(t),scopeId:So,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(ci(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=Fe(n)?8:16),bs>0&&!i&&pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pt.push(l),l}const ce=Om;function Om(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===nu)&&(e=lt),Xs(e)){const a=rn(e,t,!0);return n&&ci(a,n),bs>0&&!r&&pt&&(a.shapeFlag&6?pt[pt.indexOf(e)]=a:pt.push(a)),a.patchFlag|=-2,a}if(zm(e)&&(e=e.__vccOpts),t){t=jm(t);let{class:a,style:l}=t;a&&!Fe(a)&&(t.class=gn(a)),Be(l)&&(Fl(l)&&!q(l)&&(l=Ue({},l)),t.style=qr(l))}const i=Fe(e)?1:Qp(e)?128:Em(e)?64:Be(e)?4:Z(e)?2:0;return z(e,t,n,s,o,i,r,!0)}function jm(e){return e?Fl(e)||Co in e?Ue({},e):e:null}function rn(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:i}=e,a=t?Fm(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&gu(a),ref:t&&t.ref?n&&o?q(o)?o.concat(Ls(t)):[o,Ls(t)]:Ls(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor}}function Ao(e=" ",t=0){return ce(ui,null,e,t)}function gr(e="",t=!1){return t?(Ce(),mu(lt,null,e)):ce(lt,null,e)}function St(e){return e==null||typeof e=="boolean"?ce(lt):q(e)?ce(Xe,null,e.slice()):typeof e=="object"?Zt(e):ce(ui,null,String(e))}function Zt(e){return e.el===null||e.memo?e:rn(e)}function ci(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),ci(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Co in t)?t._ctx=We:o===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Z(t)?(t={default:t,_ctx:We},n=32):(t=String(t),s&64?(n=16,t=[Ao(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fm(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=gn([t.class,s.class]));else if(o==="style")t.style=qr([t.style,s.style]);else if(mo(o)){const r=t[o],i=s[o];i&&r!==i&&!(q(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function _t(e,t,n,s=null){at(e,t,7,[n,s])}const Bm=du();let Nm=0;function Mm(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Bm,r={uid:Nm++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new _l(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lu(s,o),emitsOptions:$l(s,o),emit:null,emitted:null,propsDefaults:be,inheritAttrs:s.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=qp.bind(null,r),e.ce&&e.ce(r),r}let Me=null;const hi=()=>Me||We,Ln=e=>{Me=e,e.scope.on()},yn=()=>{Me&&Me.scope.off(),Me=null};function wu(e){return e.vnode.shapeFlag&4}let ys=!1;function Wm(e,t=!1){ys=t;const{props:n,children:s}=e.vnode,o=wu(e);km(e,n,o,t),Sm(e,s);const r=o?Lm(e,t):void 0;return ys=!1,r}function Lm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wn(new Proxy(e.ctx,mm));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?Hm(e):null;Ln(e),qn();const r=sn(s,e,0,[e.props,o]);if(Yn(),yn(),yl(r)){if(r.then(yn,yn),t)return r.then(i=>{zi(e,i,t)}).catch(i=>{ko(i,e,0)});e.asyncDep=r}else zi(e,r,t)}else bu(e,t)}function zi(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Be(t)&&(e.setupState=Wl(t)),bu(e,n)}let qi;function bu(e,t,n){const s=e.type;if(!e.render){if(!t&&qi&&!s.render){const o=s.template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,u=Ue(Ue({isCustomElement:r,delimiters:a},i),l);s.render=qi(o,u)}}e.render=s.render||mt}Ln(e),qn(),gm(e),Yn(),yn()}function Um(e){return new Proxy(e.attrs,{get(t,n){return tt(e,"get","$attrs"),t[n]}})}function Hm(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Um(e))},slots:e.slots,emit:e.emit,expose:t}}function Do(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wl(Wn(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Zs)return Zs[n](e)}}))}function Gm(e,t=!0){return Z(e)?e.displayName||e.name:e.name||t&&e.__name}function zm(e){return Z(e)&&"__vccOpts"in e}const it=(e,t)=>Wp(e,t,ys);function yu(e,t,n){const s=arguments.length;return s===2?Be(t)&&!q(t)?Xs(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xs(n)&&(n=[n]),ce(e,t,n))}const qm="3.2.37",Ym="http://www.w3.org/2000/svg",dn=typeof document!="undefined"?document:null,Yi=dn&&dn.createElement("template"),$m={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?dn.createElementNS(Ym,e):dn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>dn.createTextNode(e),createComment:e=>dn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Yi.innerHTML=s?`<svg>${e}</svg>`:e;const a=Yi.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Vm(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Jm(e,t,n){const s=e.style,o=Fe(n);if(n&&!o){for(const r in n)wr(s,r,n[r]);if(t&&!Fe(t))for(const r in t)n[r]==null&&wr(s,r,"")}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const $i=/\s*!important$/;function wr(e,t,n){if(q(n))n.forEach(s=>wr(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Km(e,t);$i.test(n)?e.setProperty(kn(s),n.replace($i,""),"important"):e[s]=n}}const Vi=["Webkit","Moz","ms"],Go={};function Km(e,t){const n=Go[t];if(n)return n;let s=At(t);if(s!=="filter"&&s in e)return Go[t]=s;s=bo(s);for(let o=0;o<Vi.length;o++){const r=Vi[o]+s;if(r in e)return Go[t]=r}return t}const Ji="http://www.w3.org/1999/xlink";function Zm(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ji,t.slice(6,t.length)):e.setAttributeNS(Ji,t,n);else{const r=Jf(t);n==null||r&&!ml(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Qm(e,t,n,s,o,r,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,r),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ml(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}const[vu,Xm]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let br=0;const eg=Promise.resolve(),tg=()=>{br=0},ng=()=>br||(eg.then(tg),br=vu());function En(e,t,n,s){e.addEventListener(t,n,s)}function sg(e,t,n,s){e.removeEventListener(t,n,s)}function og(e,t,n,s,o=null){const r=e._vei||(e._vei={}),i=r[t];if(s&&i)i.value=s;else{const[a,l]=rg(t);if(s){const u=r[t]=ig(s,o);En(e,a,u,l)}else i&&(sg(e,a,i,l),r[t]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function rg(e){let t;if(Ki.test(e)){t={};let n;for(;n=e.match(Ki);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[kn(e.slice(2)),t]}function ig(e,t){const n=s=>{const o=s.timeStamp||vu();(Xm||o>=n.attached-1)&&at(ag(s,n.value),t,5,[s])};return n.value=e,n.attached=ng(),n}function ag(e,t){if(q(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Zi=/^on[a-z]/,lg=(e,t,n,s,o=!1,r,i,a,l)=>{t==="class"?Vm(e,s,o):t==="style"?Jm(e,n,s):mo(t)?Yr(t)||og(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ug(e,t,s,o))?Qm(e,t,s,r,i,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Zm(e,t,s,o))};function ug(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&Zi.test(t)&&Z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Zi.test(t)&&Fe(n)?!1:t in e}const cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};sm.props;const Qi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>Ms(t,n):t};function hg(e){e.target.composing=!0}function Xi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qy={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e._assign=Qi(o);const r=s||o.props&&o.props.type==="number";En(e,t?"change":"input",i=>{if(i.target.composing)return;let a=e.value;n&&(a=a.trim()),r&&(a=er(a)),e._assign(a)}),n&&En(e,"change",()=>{e.value=e.value.trim()}),t||(En(e,"compositionstart",hg),En(e,"compositionend",Xi),En(e,"change",Xi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e._assign=Qi(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(o||e.type==="number")&&er(e.value)===t))return;const i=t==null?"":t;e.value!==i&&(e.value=i)}},dg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xy=(e,t)=>n=>{if(!("key"in n))return;const s=kn(n.key);if(t.some(o=>o===s||dg[o]===s))return e(n)},fg=Ue({patchProp:lg},$m);let ea;function pg(){return ea||(ea=Am(fg))}const mg=(...e)=>{const t=pg().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=gg(s);if(!o)return;const r=t._component;!Z(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function gg(e){return Fe(e)?document.querySelector(e):e}var wg=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ku;const Po=e=>ku=e,_u=Symbol();function yr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ls;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ls||(ls={}));function bg(){const e=Tl(!0),t=e.run(()=>vo({}));let n=[],s=[];const o=Wn({install(r){Po(o),o._a=r,r.provide(_u,o),r.config.globalProperties.$pinia=o,s.forEach(i=>n.push(i)),s=[]},use(r){return!this._a&&!wg?s.push(r):n.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const Tu=()=>{};function ta(e,t,n,s=Tu){e.push(t);const o=()=>{const r=e.indexOf(t);r>-1&&(e.splice(r,1),s())};return!n&&hi()&&ii(o),o}function xn(e,...t){e.slice().forEach(n=>{n(...t)})}function vr(e,t){for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],o=e[n];yr(o)&&yr(s)&&e.hasOwnProperty(n)&&!Ae(s)&&!Wt(s)?e[n]=vr(o,s):e[n]=s}return e}const yg=Symbol();function vg(e){return!yr(e)||!e.hasOwnProperty(yg)}const{assign:jt}=Object;function kg(e){return!!(Ae(e)&&e.effect)}function _g(e,t,n,s){const{state:o,actions:r,getters:i}=t,a=n.state.value[e];let l;function u(){a||(n.state.value[e]=o?o():{});const c=Bp(n.state.value[e]);return jt(c,r,Object.keys(i||{}).reduce((f,d)=>(f[d]=Wn(it(()=>{Po(n);const m=n._s.get(e);return i[d].call(m,m)})),f),{}))}return l=Su(e,u,t,n,s,!0),l.$reset=function(){const f=o?o():{};this.$patch(d=>{jt(d,f)})},l}function Su(e,t,n={},s,o,r){let i;const a=jt({actions:{}},n),l={deep:!0};let u,c,f=Wn([]),d=Wn([]),m;const T=s.state.value[e];!r&&!T&&(s.state.value[e]={}),vo({});let P;function A(Q){let j;u=c=!1,typeof Q=="function"?(Q(s.state.value[e]),j={type:ls.patchFunction,storeId:e,events:m}):(vr(s.state.value[e],Q),j={type:ls.patchObject,payload:Q,storeId:e,events:m});const ne=P=Symbol();oi().then(()=>{P===ne&&(u=!0)}),c=!0,xn(f,j,s.state.value[e])}const _=Tu;function F(){i.stop(),f=[],d=[],s._s.delete(e)}function V(Q,j){return function(){Po(s);const ne=Array.from(arguments),he=[],Ie=[];function Ee(Re){he.push(Re)}function Je(Re){Ie.push(Re)}xn(d,{args:ne,name:Q,store:$,after:Ee,onError:Je});let Ye;try{Ye=j.apply(this&&this.$id===e?this:$,ne)}catch(Re){throw xn(Ie,Re),Re}return Ye instanceof Promise?Ye.then(Re=>(xn(he,Re),Re)).catch(Re=>(xn(Ie,Re),Promise.reject(Re))):(xn(he,Ye),Ye)}}const J={_p:s,$id:e,$onAction:ta.bind(null,d),$patch:A,$reset:_,$subscribe(Q,j={}){const ne=ta(f,Q,j.detached,()=>he()),he=i.run(()=>bn(()=>s.state.value[e],Ie=>{(j.flush==="sync"?c:u)&&Q({storeId:e,type:ls.direct,events:m},Ie)},jt({},l,j)));return ne},$dispose:F},$=$n(jt({},J));s._s.set(e,$);const ae=s._e.run(()=>(i=Tl(),i.run(()=>t())));for(const Q in ae){const j=ae[Q];if(Ae(j)&&!kg(j)||Wt(j))r||(T&&vg(j)&&(Ae(j)?j.value=T[Q]:vr(j,T[Q])),s.state.value[e][Q]=j);else if(typeof j=="function"){const ne=V(Q,j);ae[Q]=ne,a.actions[Q]=j}}return jt($,ae),jt(ie($),ae),Object.defineProperty($,"$state",{get:()=>s.state.value[e],set:Q=>{A(j=>{jt(j,Q)})}}),s._p.forEach(Q=>{jt($,i.run(()=>Q({store:$,app:s._a,pinia:s,options:a})))}),T&&r&&n.hydrate&&n.hydrate($.$state,T),u=!0,c=!0,$}function xu(e,t,n){let s,o;const r=typeof t=="function";typeof e=="string"?(s=e,o=r?n:t):(o=e,s=e.id);function i(a,l){const u=hi();return a=a||u&&It(_u),a&&Po(a),a=ku,a._s.has(s)||(r?Su(s,t,o,a):_g(s,o,a)),a._s.get(s)}return i.$id=s,i}function Iu(e){{e=ie(e);const t={};for(const n in e){const s=e[n];(Ae(s)||Wt(s))&&(t[n]=Ll(e,n))}return t}}const Tg={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Sg=z("path",{fill:"currentColor",d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"},null,-1),xg=[Sg];function Ig(e,t){return Ce(),Pe("svg",Tg,xg)}var Cg={name:"mdi-chevron-up",render:Ig};const Ag={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Dg=z("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),Pg=[Dg];function Eg(e,t){return Ce(),Pe("svg",Ag,Pg)}var Rg={name:"mdi-github",render:Eg};const Og={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},jg=z("path",{fill:"currentColor",d:"M17 8h3v12h1v1h-4v-1h1v-3h-4l-1.5 3H14v1h-4v-1h1l6-12m1 1l-3.5 7H18V9M5 3h5c1.11 0 2 .89 2 2v11H9v-5H6v5H3V5c0-1.11.89-2 2-2m1 2v4h3V5H6Z"},null,-1),Fg=[jg];function Bg(e,t){return Ce(),Pe("svg",Og,Fg)}var Ng={name:"mdi-format-font",render:Bg};const Mg={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Wg=z("path",{fill:"currentColor",d:"M12 18V6a6 6 0 0 1 6 6a6 6 0 0 1-6 6m8-2.69L23.31 12L20 8.69V4h-4.69L12 .69L8.69 4H4v4.69L.69 12L4 15.31V20h4.69L12 23.31L15.31 20H20v-4.69Z"},null,-1),Lg=[Wg];function Ug(e,t){return Ce(),Pe("svg",Mg,Lg)}var Hg={name:"mdi-brightness6",render:Ug};var di=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n};const Gg={emits:["toggle","click"],data:()=>({randomKey:null,toggle:!1}),created(){this.randomKey=Math.random().toString(36).substring(7),window.addEventListener("mouseup",this.onMouseUp)},methods:{onMouseUp(e){const t=e.target.closest(".menu-drop-item");if(t){t.click(),this.toggle=!1,e.preventDefault();return}const n=e.target.closest(`.menu-drop-${this.randomKey}`);if(e.target.closest(`.menu--trigger-${this.randomKey}`)){this.toggle=!this.toggle;return}n||this.toggle&&(this.$emit("toggle",!1),this.toggle=!1)}}};function zg(e,t,n,s,o,r){return Ce(),Pe("div",{class:gn(["menu",`menu-${e.randomKey}`])},[z("div",{class:gn(["menu--trigger",`menu--trigger-${e.randomKey}`])},[Bi(e.$slots,"trigger")],2),e.toggle?(Ce(),Pe("div",{key:0,class:gn(["menu-drop",`menu-drop-${e.randomKey}`])},[Bi(e.$slots,"drop")],2)):gr("",!0)],2)}var qg=di(Gg,[["render",zg]]);const Yg=xu("theme",{state:()=>({dark:!1,font:"font-roboto"}),actions:{toggle(){this.dark=!this.dark},setFont(e){this.font=e}}});function Cu(){const e=Yg(),{dark:t,font:n}=Iu(e),{toggle:s,setFont:o}=e;return{dark:t,font:n,toggle:s,setFont:o}}const $g={class:"appbar sharp-border"},Vg={href:"/"},Jg=["src"],Kg={class:"appbar--actions"},Zg={class:"appbar--icon icon-button"},Qg=["onClick"],Xg={__name:"TheAppBar",setup(e){const{dark:t,toggle:n,font:s,setFont:o}=Cu(),r=new URL("/assets/jt_logo_with_name.3a17a7eb.png",self.location).href,i=new URL("/assets/jt_logo_with_name_dark.36caaf3a.png",self.location).href,a=[{name:"Lato",class:"font-lato"},{name:"Roboto",class:"font-roboto"},{name:"Poppins",class:"font-poppins"},{name:"Open Sans",class:"font-open-sans"}];bn(s,()=>{document.body.classList.remove(...a.map(u=>u.class)),document.body.classList.add(s.value)}),eu(()=>{document.body.classList.add(s.value)});const l=()=>{window.open("https://github.com/JankariTech/blog","_blank")};return(u,c)=>{const f=Hg,d=Ng,m=Rg;return Ce(),Pe("nav",$g,[z("a",Vg,[z("img",{class:"appbar--logo",src:qe(t)?qe(i):qe(r),alt:"",width:"200"},null,8,Jg)]),z("div",Kg,[z("button",{class:"appbar--icon icon-button toggle-theme",onClick:c[0]||(c[0]=(...T)=>qe(n)&&qe(n)(...T))},[ce(f,{class:"one-rem"})]),ce(qg,null,{trigger:lr(()=>[z("button",Zg,[ce(d,{class:"one-rem"})])]),drop:lr(()=>[(Ce(),Pe(Xe,null,pm(a,(T,P)=>z("div",{class:gn(["menu-drop-item",{"item-active":qe(s)===T.class}]),key:P,onClick:A=>qe(o)(T.class)},gl(T.name),11,Qg)),64))]),_:1}),z("button",{class:"appbar--icon icon-button to-github",onClick:l},[ce(m,{class:"one-rem"})])])])}}};var ew=di(Xg,[["__scopeId","data-v-678af0c5"]]);const tw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},nw=z("path",{fill:"currentColor",d:"m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"},null,-1),sw=[nw];function ow(e,t){return Ce(),Pe("svg",tw,sw)}var rw={name:"mdi-heart",render:ow};const iw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},aw=z("path",{fill:"currentColor",d:"M10.08 10.86c.05-.33.16-.62.3-.86c.3-.56.81-.85 1.5-.86c.45 0 .86.2 1.15.49c.28.31.47.74.47 1.17h1.8c-.02-.47-.11-.9-.3-1.3c-.15-.38-.38-.72-.68-1c-1.45-1.34-4.14-1.15-5.37.37c-1.29 1.67-1.32 4.59-.01 6.26c1.21 1.49 3.86 1.7 5.3.37c.31-.25.56-.56.76-.92c.16-.36.27-.74.28-1.15H13.5c0 .21-.07.4-.16.57c-.09.19-.21.34-.34.47c-.33.26-.72.4-1.14.4c-.36-.01-.66-.08-.89-.23a1.41 1.41 0 0 1-.59-.64c-.5-.9-.42-2.15-.3-3.14M12 2C6.5 2 2 6.5 2 12c.53 13.27 19.5 13.26 20 0c0-5.5-4.5-10-10-10m0 18c-4.41 0-8-3.59-8-8c.44-10.61 15.56-10.61 16 0c0 4.41-3.59 8-8 8Z"},null,-1),lw=[aw];function uw(e,t){return Ce(),Pe("svg",iw,lw)}var cw={name:"mdi-copyright",render:uw};const hw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},dw=z("path",{fill:"currentColor",d:"M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4Z"},null,-1),fw=[dw];function pw(e,t){return Ce(),Pe("svg",hw,fw)}var mw={name:"mdi-format-quote-close",render:pw};const gw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ww=z("path",{fill:"currentColor",d:"m10 7l-2 4h3v6H5v-6l2-4h3m8 0l-2 4h3v6h-6v-6l2-4h3Z"},null,-1),bw=[ww];function yw(e,t){return Ce(),Pe("svg",gw,bw)}var vw={name:"mdi-format-quote-open",render:yw};const kw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_w=z("path",{fill:"currentColor",d:"M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z"},null,-1),Tw=[_w];function Sw(e,t){return Ce(),Pe("svg",kw,Tw)}var xw={name:"mdi-phone",render:Sw};const Iw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Cw=z("path",{fill:"currentColor",d:"m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"},null,-1),Aw=[Cw];function Dw(e,t){return Ce(),Pe("svg",Iw,Aw)}var Pw={name:"mdi-email",render:Dw};const Ew={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Rw=z("path",{fill:"currentColor",d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"},null,-1),Ow=[Rw];function jw(e,t){return Ce(),Pe("svg",Ew,Ow)}var Fw={name:"mdi-linkedin",render:jw};const Bw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Nw=z("path",{fill:"currentColor",d:"M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"},null,-1),Mw=[Nw];function Ww(e,t){return Ce(),Pe("svg",Bw,Mw)}var Lw={name:"mdi-facebook",render:Ww};const Uw={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Hw=z("path",{fill:"currentColor",d:"M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),Gw=[Hw];function zw(e,t){return Ce(),Pe("svg",Uw,Gw)}var qw={name:"mdi-web",render:zw};const Yw={},Eo=e=>(Yp("data-v-f6c35246"),e=e(),$p(),e),$w={class:"sharp-border"},Vw={class:"f-content"},Jw={class:"connects"},Kw={href:"https://www.jankaritech.com",target:"_blank",title:"JankariTech Website",class:"jankaritech-hover"},Zw={href:"https://www.facebook.com/jankaritech",target:"_blank",title:"Facebook Page",class:"facebook-hover"},Qw={href:"https://www.linkedin.com/company/jankaritech",target:"_blank",title:"LinkedIn Page",class:"linkedin-hover"},Xw={href:"mailto:info@jankaritech.com",target:"_blank",title:"Mail to info@jankaritech.com",class:"orange-hover"},eb={href:"tel:+9779806659226",title:"Call to +9779806659226",class:"blue-hover"},tb={class:"f-line"},nb=Ao(" We develop "),sb=Eo(()=>z("span",null,"SOFTWARE",-1)),ob=Ao(" that matters. We develop "),rb=Eo(()=>z("span",null,"STAFF",-1)),ib=Ao(" to reach their peek potential. "),ab={class:"foot-note"},lb={class:"copyright"},ub=Eo(()=>z("span",null,"JankariTech",-1)),cb={class:"rights"},hb=Eo(()=>z("span",null,"Made with",-1));function db(e,t){const n=qw,s=Lw,o=Fw,r=Pw,i=xw,a=vw,l=mw,u=cw,c=rw;return Ce(),Pe("footer",$w,[z("div",Vw,[z("div",Jw,[z("a",Kw,[ce(n)]),z("a",Zw,[ce(s)]),z("a",Qw,[ce(o)]),z("a",Xw,[ce(r)]),z("a",eb,[ce(i)])]),z("div",tb,[z("i",null,[z("span",null,[ce(a,{class:"quote-icon"})]),nb,sb,ob,rb,ib,z("span",null,[ce(l,{class:"quote-icon"})])])]),z("div",ab,[z("div",lb,[z("span",null,[ce(u)]),ub,z("span",null,gl(new Date().getFullYear()),1)]),z("div",cb,[hb,z("span",null,[ce(c,{class:"mdi-heart"})])])])])])}var fb=di(Yw,[["render",db],["__scopeId","data-v-f6c35246"]]);const pb=xu("markdown",{state:()=>({modules:{}}),actions:{setModules(e={}){this.modules=e}}});function Au(){const e=pb(),{list:t,modules:n}=Iu(e),{setList:s,setModules:o}=e;return{list:t,modules:n,setList:s,setModules:o}}const mb="modulepreload",na={},gb="/",In=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${gb}${s}`,s in na)return;na[s]=!0;const o=s.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":mb,o||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),o)return new Promise((a,l)=>{i.addEventListener("load",a),i.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function Du(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Vn=Du();function wb(e){Vn=e}const bb=/[&<>"']/,yb=/[&<>"']/g,vb=/[<>"']|&(?!#?\w+;)/,kb=/[<>"']|&(?!#?\w+;)/g,_b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sa=e=>_b[e];function Ne(e,t){if(t){if(bb.test(e))return e.replace(yb,sa)}else if(vb.test(e))return e.replace(kb,sa);return e}const Tb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Pu(e){return e.replace(Tb,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Sb=/(^|[^\[])\^/g;function ye(e,t){e=typeof e=="string"?e:e.source,t=t||"";const n={replace:(s,o)=>(o=o.source||o,o=o.replace(Sb,"$1"),e=e.replace(s,o),n),getRegex:()=>new RegExp(e,t)};return n}const xb=/[^\w:]/g,Ib=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function oa(e,t,n){if(e){let s;try{s=decodeURIComponent(Pu(n)).replace(xb,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}t&&!Ib.test(n)&&(n=Pb(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Os={},Cb=/^[^:]+:\/*[^/]*$/,Ab=/^([^:]+:)[\s\S]*$/,Db=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Pb(e,t){Os[" "+e]||(Cb.test(e)?Os[" "+e]=e+"/":Os[" "+e]=Us(e,"/",!0)),e=Os[" "+e];const n=e.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:e.replace(Ab,"$1")+t:t.charAt(0)==="/"?n?t:e.replace(Db,"$1")+t:e+t}const eo={exec:function(){}};function yt(e){let t=1,n,s;for(;t<arguments.length;t++){n=arguments[t];for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}function ra(e,t){const n=e.replace(/\|/g,(r,i,a)=>{let l=!1,u=i;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),s=n.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>t)s.splice(t);else for(;s.length<t;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function Us(e,t,n){const s=e.length;if(s===0)return"";let o=0;for(;o<s;){const r=e.charAt(s-o-1);if(r===t&&!n)o++;else if(r!==t&&n)o++;else break}return e.slice(0,s-o)}function Eb(e,t){if(e.indexOf(t[1])===-1)return-1;const n=e.length;let s=0,o=0;for(;o<n;o++)if(e[o]==="\\")o++;else if(e[o]===t[0])s++;else if(e[o]===t[1]&&(s--,s<0))return o;return-1}function Eu(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ia(e,t){if(t<1)return"";let n="";for(;t>1;)t&1&&(n+=e),t>>=1,e+=e;return n+e}function aa(e,t,n,s){const o=t.href,r=t.title?Ne(t.title):null,i=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){s.state.inLink=!0;const a={type:"link",raw:n,href:o,title:r,text:i,tokens:s.inlineTokens(i,[])};return s.state.inLink=!1,a}return{type:"image",raw:n,href:o,title:r,text:Ne(i)}}function Rb(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const s=n[1];return t.split(`
`).map(o=>{const r=o.match(/^\s+/);if(r===null)return o;const[i]=r;return i.length>=s.length?o.slice(s.length):o}).join(`
`)}class fi{constructor(t){this.options=t||Vn}space(t){const n=this.rules.block.newline.exec(t);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(t){const n=this.rules.block.code.exec(t);if(n){const s=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?s:Us(s,`
`)}}}fences(t){const n=this.rules.block.fences.exec(t);if(n){const s=n[0],o=Rb(s,n[3]||"");return{type:"code",raw:s,lang:n[2]?n[2].trim():n[2],text:o}}}heading(t){const n=this.rules.block.heading.exec(t);if(n){let s=n[2].trim();if(/#$/.test(s)){const r=Us(s,"#");(this.options.pedantic||!r||/ $/.test(r))&&(s=r.trim())}const o={type:"heading",raw:n[0],depth:n[1].length,text:s,tokens:[]};return this.lexer.inline(o.text,o.tokens),o}}hr(t){const n=this.rules.block.hr.exec(t);if(n)return{type:"hr",raw:n[0]}}blockquote(t){const n=this.rules.block.blockquote.exec(t);if(n){const s=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(s,[]),text:s}}}list(t){let n=this.rules.block.list.exec(t);if(n){let s,o,r,i,a,l,u,c,f,d,m,T,P=n[1].trim();const A=P.length>1,_={type:"list",raw:"",ordered:A,start:A?+P.slice(0,-1):"",loose:!1,items:[]};P=A?`\\d{1,9}\\${P.slice(-1)}`:`\\${P}`,this.options.pedantic&&(P=A?P:"[*+-]");const F=new RegExp(`^( {0,3}${P})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(T=!1,!(!(n=F.exec(t))||this.rules.block.hr.test(t)));){if(s=n[0],t=t.substring(s.length),c=n[2].split(`
`,1)[0],f=t.split(`
`,1)[0],this.options.pedantic?(i=2,m=c.trimLeft()):(i=n[2].search(/[^ ]/),i=i>4?1:i,m=c.slice(i),i+=n[1].length),l=!1,!c&&/^ *$/.test(f)&&(s+=f+`
`,t=t.substring(f.length+1),T=!0),!T){const J=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),$=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ae=new RegExp(`^( {0,${Math.min(3,i-1)}})(\`\`\`|~~~)`);for(;t&&(d=t.split(`
`,1)[0],c=d,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(ae.test(c)||this.rules.block.heading.test(c)||J.test(c)||$.test(t)));){if(c.search(/[^ ]/)>=i||!c.trim())m+=`
`+c.slice(i);else if(!l)m+=`
`+c;else break;!l&&!c.trim()&&(l=!0),s+=d+`
`,t=t.substring(d.length+1)}}_.loose||(u?_.loose=!0:/\n *\n *$/.test(s)&&(u=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(m),o&&(r=o[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),_.items.push({type:"list_item",raw:s,task:!!o,checked:r,loose:!1,text:m}),_.raw+=s}_.items[_.items.length-1].raw=s.trimRight(),_.items[_.items.length-1].text=m.trimRight(),_.raw=_.raw.trimRight();const V=_.items.length;for(a=0;a<V;a++){this.lexer.state.top=!1,_.items[a].tokens=this.lexer.blockTokens(_.items[a].text,[]);const J=_.items[a].tokens.filter(ae=>ae.type==="space"),$=J.every(ae=>{const Q=ae.raw.split("");let j=0;for(const ne of Q)if(ne===`
`&&(j+=1),j>1)return!0;return!1});!_.loose&&J.length&&$&&(_.loose=!0,_.items[a].loose=!0)}return _}}html(t){const n=this.rules.block.html.exec(t);if(n){const s={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(s.type="paragraph",s.text=this.options.sanitizer?this.options.sanitizer(n[0]):Ne(n[0]),s.tokens=[],this.lexer.inline(s.text,s.tokens)),s}}def(t){const n=this.rules.block.def.exec(t);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const s=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:s,raw:n[0],href:n[2],title:n[3]}}}table(t){const n=this.rules.block.table.exec(t);if(n){const s={type:"table",header:ra(n[1]).map(o=>({text:o})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=n[0];let o=s.align.length,r,i,a,l;for(r=0;r<o;r++)/^ *-+: *$/.test(s.align[r])?s.align[r]="right":/^ *:-+: *$/.test(s.align[r])?s.align[r]="center":/^ *:-+ *$/.test(s.align[r])?s.align[r]="left":s.align[r]=null;for(o=s.rows.length,r=0;r<o;r++)s.rows[r]=ra(s.rows[r],s.header.length).map(u=>({text:u}));for(o=s.header.length,i=0;i<o;i++)s.header[i].tokens=[],this.lexer.inline(s.header[i].text,s.header[i].tokens);for(o=s.rows.length,i=0;i<o;i++)for(l=s.rows[i],a=0;a<l.length;a++)l[a].tokens=[],this.lexer.inline(l[a].text,l[a].tokens);return s}}}lheading(t){const n=this.rules.block.lheading.exec(t);if(n){const s={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}paragraph(t){const n=this.rules.block.paragraph.exec(t);if(n){const s={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}text(t){const n=this.rules.block.text.exec(t);if(n){const s={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}escape(t){const n=this.rules.inline.escape.exec(t);if(n)return{type:"escape",raw:n[0],text:Ne(n[1])}}tag(t){const n=this.rules.inline.tag.exec(t);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Ne(n[0]):n[0]}}link(t){const n=this.rules.inline.link.exec(t);if(n){const s=n[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const i=Us(s.slice(0,-1),"\\");if((s.length-i.length)%2===0)return}else{const i=Eb(n[2],"()");if(i>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+i;n[2]=n[2].substring(0,i),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let o=n[2],r="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);i&&(o=i[1],r=i[3])}else r=n[3]?n[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),aa(n,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(t,n){let s;if((s=this.rules.inline.reflink.exec(t))||(s=this.rules.inline.nolink.exec(t))){let o=(s[2]||s[1]).replace(/\s+/g," ");if(o=n[o.toLowerCase()],!o||!o.href){const r=s[0].charAt(0);return{type:"text",raw:r,text:r}}return aa(s,o,s[0],this.lexer)}}emStrong(t,n,s=""){let o=this.rules.inline.emStrong.lDelim.exec(t);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;const r=o[1]||o[2]||"";if(!r||r&&(s===""||this.rules.inline.punctuation.exec(s))){const i=o[0].length-1;let a,l,u=i,c=0;const f=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,n=n.slice(-1*t.length+i);(o=f.exec(n))!=null;){if(a=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!a)continue;if(l=a.length,o[3]||o[4]){u+=l;continue}else if((o[5]||o[6])&&i%3&&!((i+l)%3)){c+=l;continue}if(u-=l,u>0)continue;if(l=Math.min(l,l+u+c),Math.min(i,l)%2){const m=t.slice(1,i+o.index+l);return{type:"em",raw:t.slice(0,i+o.index+l+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}const d=t.slice(2,i+o.index+l-1);return{type:"strong",raw:t.slice(0,i+o.index+l+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}}}codespan(t){const n=this.rules.inline.code.exec(t);if(n){let s=n[2].replace(/\n/g," ");const o=/[^ ]/.test(s),r=/^ /.test(s)&&/ $/.test(s);return o&&r&&(s=s.substring(1,s.length-1)),s=Ne(s,!0),{type:"codespan",raw:n[0],text:s}}}br(t){const n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t){const n=this.rules.inline.del.exec(t);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(t,n){const s=this.rules.inline.autolink.exec(t);if(s){let o,r;return s[2]==="@"?(o=Ne(this.options.mangle?n(s[1]):s[1]),r="mailto:"+o):(o=Ne(s[1]),r=o),{type:"link",raw:s[0],text:o,href:r,tokens:[{type:"text",raw:o,text:o}]}}}url(t,n){let s;if(s=this.rules.inline.url.exec(t)){let o,r;if(s[2]==="@")o=Ne(this.options.mangle?n(s[0]):s[0]),r="mailto:"+o;else{let i;do i=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(i!==s[0]);o=Ne(s[0]),s[1]==="www."?r="http://"+o:r=o}return{type:"link",raw:s[0],text:o,href:r,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(t,n){const s=this.rules.inline.text.exec(t);if(s){let o;return this.lexer.state.inRawBlock?o=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):Ne(s[0]):s[0]:o=Ne(this.options.smartypants?n(s[0]):s[0]),{type:"text",raw:s[0],text:o}}}}const H={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:eo,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};H._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;H._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;H.def=ye(H.def).replace("label",H._label).replace("title",H._title).getRegex();H.bullet=/(?:[*+-]|\d{1,9}[.)])/;H.listItemStart=ye(/^( *)(bull) */).replace("bull",H.bullet).getRegex();H.list=ye(H.list).replace(/bull/g,H.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+H.def.source+")").getRegex();H._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";H._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;H.html=ye(H.html,"i").replace("comment",H._comment).replace("tag",H._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();H.paragraph=ye(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.blockquote=ye(H.blockquote).replace("paragraph",H.paragraph).getRegex();H.normal=yt({},H);H.gfm=yt({},H.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});H.gfm.table=ye(H.gfm.table).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.gfm.paragraph=ye(H._paragraph).replace("hr",H.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",H.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",H._tag).getRegex();H.pedantic=yt({},H.normal,{html:ye(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",H._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:eo,paragraph:ye(H.normal._paragraph).replace("hr",H.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",H.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const O={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:eo,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:eo,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};O._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";O.punctuation=ye(O.punctuation).replace(/punctuation/g,O._punctuation).getRegex();O.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;O.escapedEmSt=/\\\*|\\_/g;O._comment=ye(H._comment).replace("(?:-->|$)","-->").getRegex();O.emStrong.lDelim=ye(O.emStrong.lDelim).replace(/punct/g,O._punctuation).getRegex();O.emStrong.rDelimAst=ye(O.emStrong.rDelimAst,"g").replace(/punct/g,O._punctuation).getRegex();O.emStrong.rDelimUnd=ye(O.emStrong.rDelimUnd,"g").replace(/punct/g,O._punctuation).getRegex();O._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;O._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;O._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;O.autolink=ye(O.autolink).replace("scheme",O._scheme).replace("email",O._email).getRegex();O._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;O.tag=ye(O.tag).replace("comment",O._comment).replace("attribute",O._attribute).getRegex();O._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;O._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;O._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;O.link=ye(O.link).replace("label",O._label).replace("href",O._href).replace("title",O._title).getRegex();O.reflink=ye(O.reflink).replace("label",O._label).replace("ref",H._label).getRegex();O.nolink=ye(O.nolink).replace("ref",H._label).getRegex();O.reflinkSearch=ye(O.reflinkSearch,"g").replace("reflink",O.reflink).replace("nolink",O.nolink).getRegex();O.normal=yt({},O);O.pedantic=yt({},O.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:ye(/^!?\[(label)\]\((.*?)\)/).replace("label",O._label).getRegex(),reflink:ye(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O._label).getRegex()});O.gfm=yt({},O.normal,{escape:ye(O.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});O.gfm.url=ye(O.gfm.url,"i").replace("email",O.gfm._extended_email).getRegex();O.breaks=yt({},O.gfm,{br:ye(O.br).replace("{2,}","*").getRegex(),text:ye(O.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Ob(e){return e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function la(e){let t="",n,s;const o=e.length;for(n=0;n<o;n++)s=e.charCodeAt(n),Math.random()>.5&&(s="x"+s.toString(16)),t+="&#"+s+";";return t}class Ht{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Vn,this.options.tokenizer=this.options.tokenizer||new fi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:H.normal,inline:O.normal};this.options.pedantic?(n.block=H.pedantic,n.inline=O.pedantic):this.options.gfm&&(n.block=H.gfm,this.options.breaks?n.inline=O.breaks:n.inline=O.gfm),this.tokenizer.rules=n}static get rules(){return{block:H,inline:O}}static lex(t,n){return new Ht(n).lex(t)}static lexInline(t,n){return new Ht(n).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(t,n=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(a,l,u)=>l+"    ".repeat(u.length));let s,o,r,i;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(s=a.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))){if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length),s.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),n.push(s);continue}if(r=t,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=t.slice(1);let u;this.options.extensions.startBlock.forEach(function(c){u=c.call({lexer:this},l),typeof u=="number"&&u>=0&&(a=Math.min(a,u))}),a<1/0&&a>=0&&(r=t.substring(0,a+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){o=n[n.length-1],i&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(s),i=r.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):n.push(s);continue}if(t){const a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(t,n){this.inlineQueue.push({src:t,tokens:n})}inlineTokens(t,n=[]){let s,o,r,i=t,a,l,u;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,a.index)+"["+ia("a",a[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,a.index)+"["+ia("a",a[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(i))!=null;)i=i.slice(0,a.index)+"++"+i.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(s=c.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))){if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),o=n[n.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):n.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length),o=n[n.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(t,i,u)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(t,la)){t=t.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t,la))){t=t.substring(s.raw.length),n.push(s);continue}if(r=t,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const f=t.slice(1);let d;this.options.extensions.startInline.forEach(function(m){d=m.call({lexer:this},f),typeof d=="number"&&d>=0&&(c=Math.min(c,d))}),c<1/0&&c>=0&&(r=t.substring(0,c+1))}if(s=this.tokenizer.inlineText(r,Ob)){t=t.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(u=s.raw.slice(-1)),l=!0,o=n[n.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):n.push(s);continue}if(t){const c="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}}class pi{constructor(t){this.options=t||Vn}code(t,n,s){const o=(n||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(t,o);r!=null&&r!==t&&(s=!0,t=r)}return t=t.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+Ne(o,!0)+'">'+(s?t:Ne(t,!0))+`</code></pre>
`:"<pre><code>"+(s?t:Ne(t,!0))+`</code></pre>
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
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,n,s){if(t=oa(this.options.sanitize,this.options.baseUrl,t),t===null)return s;let o='<a href="'+Ne(t)+'"';return n&&(o+=' title="'+n+'"'),o+=">"+s+"</a>",o}image(t,n,s){if(t=oa(this.options.sanitize,this.options.baseUrl,t),t===null)return s;let o=`<img src="${t}" alt="${s}"`;return n&&(o+=` title="${n}"`),o+=this.options.xhtml?"/>":">",o}text(t){return t}}class Ru{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,n,s){return""+s}image(t,n,s){return""+s}br(){return""}}class Ou{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,n){let s=t,o=0;if(this.seen.hasOwnProperty(s)){o=this.seen[t];do o++,s=t+"-"+o;while(this.seen.hasOwnProperty(s))}return n||(this.seen[t]=o,this.seen[s]=0),s}slug(t,n={}){const s=this.serialize(t);return this.getNextSafeSlug(s,n.dryrun)}}class Gt{constructor(t){this.options=t||Vn,this.options.renderer=this.options.renderer||new pi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ru,this.slugger=new Ou}static parse(t,n){return new Gt(n).parse(t)}static parseInline(t,n){return new Gt(n).parseInline(t)}parse(t,n=!0){let s="",o,r,i,a,l,u,c,f,d,m,T,P,A,_,F,V,J,$,ae;const Q=t.length;for(o=0;o<Q;o++){if(m=t[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(ae=this.options.extensions.renderers[m.type].call({parser:this},m),ae!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type))){s+=ae||"";continue}switch(m.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{s+=this.renderer.heading(this.parseInline(m.tokens),m.depth,Pu(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{s+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{for(f="",c="",a=m.header.length,r=0;r<a;r++)c+=this.renderer.tablecell(this.parseInline(m.header[r].tokens),{header:!0,align:m.align[r]});for(f+=this.renderer.tablerow(c),d="",a=m.rows.length,r=0;r<a;r++){for(u=m.rows[r],c="",l=u.length,i=0;i<l;i++)c+=this.renderer.tablecell(this.parseInline(u[i].tokens),{header:!1,align:m.align[i]});d+=this.renderer.tablerow(c)}s+=this.renderer.table(f,d);continue}case"blockquote":{d=this.parse(m.tokens),s+=this.renderer.blockquote(d);continue}case"list":{for(T=m.ordered,P=m.start,A=m.loose,a=m.items.length,d="",r=0;r<a;r++)F=m.items[r],V=F.checked,J=F.task,_="",F.task&&($=this.renderer.checkbox(V),A?F.tokens.length>0&&F.tokens[0].type==="paragraph"?(F.tokens[0].text=$+" "+F.tokens[0].text,F.tokens[0].tokens&&F.tokens[0].tokens.length>0&&F.tokens[0].tokens[0].type==="text"&&(F.tokens[0].tokens[0].text=$+" "+F.tokens[0].tokens[0].text)):F.tokens.unshift({type:"text",text:$}):_+=$),_+=this.parse(F.tokens,A),d+=this.renderer.listitem(_,J,V);s+=this.renderer.list(d,T,P);continue}case"html":{s+=this.renderer.html(m.text);continue}case"paragraph":{s+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{for(d=m.tokens?this.parseInline(m.tokens):m.text;o+1<Q&&t[o+1].type==="text";)m=t[++o],d+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);s+=n?this.renderer.paragraph(d):d;continue}default:{const j='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(j);return}else throw new Error(j)}}}return s}parseInline(t,n){n=n||this.renderer;let s="",o,r,i;const a=t.length;for(o=0;o<a;o++){if(r=t[o],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(i=this.options.extensions.renderers[r.type].call({parser:this},r),i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){s+=i||"";continue}switch(r.type){case"escape":{s+=n.text(r.text);break}case"html":{s+=n.html(r.text);break}case"link":{s+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{s+=n.image(r.href,r.title,r.text);break}case"strong":{s+=n.strong(this.parseInline(r.tokens,n));break}case"em":{s+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{s+=n.codespan(r.text);break}case"br":{s+=n.br();break}case"del":{s+=n.del(this.parseInline(r.tokens,n));break}case"text":{s+=n.text(r.text);break}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return s}}function G(e,t,n){if(typeof e=="undefined"||e===null)throw new Error("marked(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(typeof t=="function"&&(n=t,t=null),t=yt({},G.defaults,t||{}),Eu(t),n){const s=t.highlight;let o;try{o=Ht.lex(e,t)}catch(a){return n(a)}const r=function(a){let l;if(!a)try{t.walkTokens&&G.walkTokens(o,t.walkTokens),l=Gt.parse(o,t)}catch(u){a=u}return t.highlight=s,a?n(a):n(null,l)};if(!s||s.length<3||(delete t.highlight,!o.length))return r();let i=0;G.walkTokens(o,function(a){a.type==="code"&&(i++,setTimeout(()=>{s(a.text,a.lang,function(l,u){if(l)return r(l);u!=null&&u!==a.text&&(a.text=u,a.escaped=!0),i--,i===0&&r()})},0))}),i===0&&r();return}try{const s=Ht.lex(e,t);return t.walkTokens&&G.walkTokens(s,t.walkTokens),Gt.parse(s,t)}catch(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+Ne(s.message+"",!0)+"</pre>";throw s}}G.options=G.setOptions=function(e){return yt(G.defaults,e),wb(G.defaults),G};G.getDefaults=Du;G.defaults=Vn;G.use=function(...e){const t=yt({},...e),n=G.defaults.extensions||{renderers:{},childTokens:{}};let s;e.forEach(o=>{if(o.extensions&&(s=!0,o.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const i=n.renderers?n.renderers[r.name]:null;i?n.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:n.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[r.level]?n[r.level].unshift(r.tokenizer):n[r.level]=[r.tokenizer],r.start&&(r.level==="block"?n.startBlock?n.startBlock.push(r.start):n.startBlock=[r.start]:r.level==="inline"&&(n.startInline?n.startInline.push(r.start):n.startInline=[r.start]))}r.childTokens&&(n.childTokens[r.name]=r.childTokens)})),o.renderer){const r=G.defaults.renderer||new pi;for(const i in o.renderer){const a=r[i];r[i]=(...l)=>{let u=o.renderer[i].apply(r,l);return u===!1&&(u=a.apply(r,l)),u}}t.renderer=r}if(o.tokenizer){const r=G.defaults.tokenizer||new fi;for(const i in o.tokenizer){const a=r[i];r[i]=(...l)=>{let u=o.tokenizer[i].apply(r,l);return u===!1&&(u=a.apply(r,l)),u}}t.tokenizer=r}if(o.walkTokens){const r=G.defaults.walkTokens;t.walkTokens=function(i){o.walkTokens.call(this,i),r&&r.call(this,i)}}s&&(t.extensions=n),G.setOptions(t)})};G.walkTokens=function(e,t){for(const n of e)switch(t.call(G,n),n.type){case"table":{for(const s of n.header)G.walkTokens(s.tokens,t);for(const s of n.rows)for(const o of s)G.walkTokens(o.tokens,t);break}case"list":{G.walkTokens(n.items,t);break}default:G.defaults.extensions&&G.defaults.extensions.childTokens&&G.defaults.extensions.childTokens[n.type]?G.defaults.extensions.childTokens[n.type].forEach(function(s){G.walkTokens(n[s],t)}):n.tokens&&G.walkTokens(n.tokens,t)}};G.parseInline=function(e,t){if(typeof e=="undefined"||e===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof e!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=yt({},G.defaults,t||{}),Eu(t);try{const n=Ht.lexInline(e,t);return t.walkTokens&&G.walkTokens(n,t.walkTokens),Gt.parseInline(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+Ne(n.message+"",!0)+"</pre>";throw n}};G.Parser=Gt;G.parser=Gt.parse;G.Renderer=pi;G.TextRenderer=Ru;G.Lexer=Ht;G.lexer=Ht.lex;G.Tokenizer=fi;G.Slugger=Ou;G.parse=G;G.options;G.setOptions;G.use;G.walkTokens;G.parseInline;Gt.parse;Ht.lex;G.setOptions({sanitize:!0,headerIds:!0});const jb=()=>({fileModules:{"/src/assets/BDDInGo.md":`---
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
authorAvatar: https://harunmudak.com/wp-content/uploads/2020/12/girl-cartoon-characters-3-724x1024.jpg
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
\`\`\`py
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

## Test the right thing

When I now run both ownCloud and locust on my workstation (i5-7500 CPU @ 3.40GHz; 8GB RAM) and hatch 100 locust-users I get this graph:

![locust output when running app and locust on same computer](/src/assets/Locust/images/locust-04-images/locust-running-on-same-computer.png)

But now have a look at the CPU usage (on Linux the easiest way to see it is to use the \`top\` command)
![CPU usage when running app and locust on same computer](/src/assets/Locust/images/locust-04-images/top-locust-uses-resources.png)

WOW, 61.7% CPU is used by locust itself. I'm not really testing the performance of ownCloud (or not alone). Beside locust gnome, X and Firefox are eating up a significant amount of resources, so the results will never be accurate. Better get some dedicated hardware to run ownCloud on.

I have here an old Lenovo X201 Laptop (i5 M 540 CPU @ 2.53GHz; 4GB RAM). Not really fast, but should be OK for this example. I will run ownCloud on that Laptop and locust on my workstation. That way hatching 100 users still eats up the same amount of resources on the workstation, but because its fast enough that should not be the limiting factor. We really don't want the test-runner computer to limit our performance tests. If you don't have a computer that is fast enough to fully load your SUT (System Under Test), you can run [locus distributed](https://docs.locust.io/en/stable/running-locust-distributed.html) and that way utilize multiple computers to fully load your SUT.

## Interpret the results

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

## Optimization

When we have started the ownCloud docker container, it created an database and for that it used SQlite database, that is good for quick testing and evaluation, but its soooo slow. Have a look at the [documentation](https://doc.owncloud.com/server/10.3/admin_manual/installation/system_requirements.html#server), ownCloud says SQLite is not for production and recommends to use MySQL or MariaDB.
The simplest way to start ownCloud with MariaDB is to use [docker-compose](https://docs.docker.com/compose/) as described [here](https://doc.owncloud.com/server/admin_manual/installation/docker/). In addition you also receive a Redis server, to do some caching.

Running that proposed setup on my system shows that it improves the response time a lot when running with 20 users, the 95th percentile goes down to 220-250ms (vs 400-450 before), there is also some improvement when running with 50 users, but when running with 100 users, it actually gets worse (median 5200-6000ms and 95th percentile is often over 7000ms).

More tests showed that with 15 concurrent users there is still 20-30% CPU time left most of the time, but with 20+ users the CPU is basically flat out.
Another interesting finding is, that in the area around 15 users the CPU is still not fully utilized, but the hard-drive works already pretty hard (see \`iotop\`). My guess is that when running with <= 15 users a faster hard-drive, e.g. a SSD would improve the performance, but with more than 20 users an SSD would be a waste of money, because even if the data would arrive faster at the CPU, it struggles to do its calculation.

## Cross-check

Let's see if we can prove our assumption that ~15 users should be the max for our system. I'm simmulating 30 users, but with a hatch-rate of 0.025 users/sec (I want to give the system enough time to create the user and to refresh the sliding window for the chart after user-creation).

Looking at the graph I see that up to ~10 users the median time does not change much (160-180ms), looking at the output of \`top\` at the same time I see that there is still a lot of CPU time unused and even with 14-15 users, the median time goes down to 190ms. After that pretty flat area in the graph, it goes up pretty steep, the CPU is totally flat out.

Also have a look at the "Total Requests per Second" graph. Up to 15 users it steadily climbs up, but then there are valleys and hills, but the system struggles to serve more requests/s.

![slowly increasing the number of users](/src/assets/Locust/images/locust-04-images/slowly-increasing-num-of-users.png)

## Conclusion

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

![Cypress Architecture]

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

[Cypress Architecture]: /src/assets/TestingWithCypress/images/cypres_architecture.png "How cypress is different from existing selenium based tools?"
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

[noTestsFound]: /src/assets/TestingWithCypress/images/cypress_no_test_found.png "This is a test runner preview while there is no any tests file to run."
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
  | \`env\`                   | \`{}\`                           | Any values to be set as [environment variables] |
  | \`retries\`               | \`{\u201CrunMode\u201D: 0, \u201CopenMode: 0}\` | The number of times to retry a failing test.  See [Test Retries] for more information. |
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

  ![Parallelization in Cypress]



## Slack Integration

The Cypress Slack application provides real-time results for your Cypress tests, all in one place\u2014improving remote collaboration and giving wider visibility into test behavior.

- Improve cross-team collaboration by instantly surfacing Cypress results to the teams that need visibility
- Confirm that key tests pass prior to launching new products or features
- Reduce the time it takes to catch failed tests

![Cypress Slack Integration]

## Github Integration

Cypress Dashboard tightly integrates your Cypress test runs with your \`GitHub\` work flow via commit status checks and pull-request comments.

> Merge Confidently with Status Checks

Cypress Dashboard will report status of test runs as \`GitHub\` commit status checks for every run group or every spec file in your test-suite so that you can prevent PR merges until all your tests pass.

> Test Results in Your Work flow via Pull-Request Comments

Detailed test run information conveniently posted as PR comments that include tests run statistics, specific test failures, related screenshots and deep links to the Cypress Dashboard to help you quickly resolve problems.

![GitHub Integration]



[Parallelization in Cypress]: /src/assets/TestingWithCypress/images/cypress_parallelization.png "Parallelization in Cypress!"
[GitHub Integration]: /src/assets/TestingWithCypress/images/cypress_github_comment.png "Cypress bot comment in a GitHub PR."
[Cypress Slack Integration]: /src/assets/TestingWithCypress/images/cypress_slack_integration.png "Cypress channel inside Slack Application."
[environment variables]: https://docs.cypress.io/guides/guides/environment-variables.html#Setting "Environment Variables in Cypress"
[Test Retries]: https://docs.cypress.io/guides/guides/test-retries.html "Retrying test with Cypress"
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

You can use [cosmiconfig] which helps to search for and loading configuration for your program. Or you can configure simply by adding this to your \`package.json\`.

\`\`\`json
{
    "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": true
  }
}
\`\`\`

#### Available Configurations

| OPTION                     | DEFAULT                                                                                                                                                                                                                              | DESCRIPTION                                                                                                                                                          |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| \`commonPath\`               | \`cypress/integration/common\` when \`nonGlobalStepDefinitions\` is *true*<br/>\`cypress/support/step_definitions\` when \`nonGlobalStepDefinitions\` is *false*<br/>\`\${nonGlobalStepBaseDir}/common\` when \`nonGlobalStepBaseDir\` is defined | define the path to a folder containing all common step definitions of your tests.                                                                                    |
| \`nonGlobalStepDefinitions\` | \`false\`                                                                                                                                                                                                                              | If true use the Cypress Cucumber Preprocessor Style pattern for placing step definitions files.                                                                      |
| \`nonGlobalStepBaseDir\`     | \`undefined\`                                                                                                                                                                                                                          | If defined and \`nonGlobalStepDefinitions\` is also true then step definition searches for folders with the features name will start from the directory provided here. |
| \`stepDefinitions\`          | \`cypress/integration\` when \`nonGlobalStepDefinitions\` is true<br/>\`cypress/support/step_definitions\` when \`nonGlobalStepDefinitions\` is false                                                                                        | Path to the folder containing our step definitions.                                                                                                                  |



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

[cosmiconfig]: https://github.com/davidtheclark/cosmiconfig "Cosmiconfig GitHub Homepage"
`,"/src/assets/TestingWithCypress/cypress_blog_5.md":`---
title: Trade-offs In Cypress
authorName: Kiran Parajuli
authorAvatar: https://avatars.githubusercontent.com/u/39373750?v=4
authorLink: https://github.com/kiranparajuli589/
createdAt: Feb 2, 2021
tags: cypress, selenium, comparison, testing
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
    In case you missed it before - Cypress tests run inside the browser! It makes it a little harder to communicate with the back end - like your server or database. You will not be able to connect or import those server-side libraries or modules directly.

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

    ![NoXHRRecorded]

    At this point i.e clicking the \`Sign In\` button should start a XHR request. But alas, no luck here.

- Testing inside iframes? Well, it's gonna bother you. I am working on a project which uses iframes with large contents and takes some time to load properly. Following the documentation and [cypress blogs] were also not quite helpful. For now, I'm using static wait before diving inside any iframes. If somebody has a better idea, well, please share!

- I feel like why we choose Cypress while testing dropdown fields \u{1F602}. I find most of the official tips for dropdown testing is with \`<select>...</select>\`. But the recent web is mostly based on frameworks like \`VueJs\`, \`ReactJs\`, etc. which uses a different mechanism to render dropdowns (using classes rather than using \`select\` tag). Options are extracted from some API requests and may also have abilities like autocompletion. With these features included the browser elements keeps on changing (some get in, and some are removed out completely). Running tests with such form fields interactions, you'll surely encounter the \`Element is detached from the DOM\` error [ref] blog to handle this type of errors.

- Test just terminates when it likes: Only half of the test runs and that particular test is marked as passed (sometimes, but can litter test result accuracy).

    ![HalfRunPassedScenario]


[HalfRunPassedScenario]: /src/assets/TestingWithCypress/images/cypress_incomplete_run_passed_scenario.png "Incomplete but passed scenario"
[NoXHRRecorded]: /src/assets/TestingWithCypress/images/cypress_no_xhr_recorded.png "No XHR request is recorded."

[cypress blogs]: https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/ "Working with iframes in Cypress"
[ref]: https://docs.cypress.io/guides/references/error-messages.html#cy-failed-because-the-element-you-are-chaining-off-of-has-become-detached-or-removed-from-the-dom "Explained error message for elements that has been detached or removed from the dom."
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
`}}),Fb=e=>{const t=[];return Object.keys(e).forEach(n=>{const s=e[n];t.push({raw:s,sourcePath:n,meta:Nb(n,e)})}),t},Bb=e=>{var o,r;const t={},n=(r=(o=e.slice(1,2)[0].text)==null?void 0:o.split(`
`))==null?void 0:r.map(i=>i.split(": "));t.title=n[0][1],t.authorName=n[1][1],t.authorAvatar=n[2][1],t.authorLink=n[3][1];const s=n[4][1];return t.createdAt=s?new Date(s):"-",t.tags=n[5][1].split(", "),t.banner=n[6][1],n.length===9&&(t.seriesTitle=n[7][1],t.episode=n[8][1]),t},Nb=(e,t)=>{const n=G.lexer(t[e],{sanitize:!0}),s=Bb(n),o=t[e].length;return{...s,contentLength:o,sourcePath:e}},ev=()=>{const e=[],{modules:t}=Au();return t.value.forEach(n=>{e.push(n.meta)}),e},tv=e=>{const t=G.lexer(e);return G.parser(t.slice(3))},nv=e=>G.lexer(e).filter(n=>n.type==="heading");/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ju=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Jn=e=>ju?Symbol(e):"_vr_"+e,Mb=Jn("rvlm"),ua=Jn("rvd"),Ro=Jn("r"),Fu=Jn("rl"),kr=Jn("rvl"),Rn=typeof window!="undefined";function Wb(e){return e.__esModule||ju&&e[Symbol.toStringTag]==="Module"}const we=Object.assign;function zo(e,t){const n={};for(const s in t){const o=t[s];n[s]=Array.isArray(o)?o.map(e):e(o)}return n}const us=()=>{},Lb=/\/$/,Ub=e=>e.replace(Lb,"");function qo(e,t,n="/"){let s,o={},r="",i="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(s=t.slice(0,a),r=t.slice(a+1,l>-1?l:t.length),o=e(r)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=qb(s!=null?s:t,n),{fullPath:s+(r&&"?")+r+i,path:s,query:o,hash:i}}function Hb(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ca(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gb(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&Un(t.matched[s],n.matched[o])&&Bu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Un(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Bu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!zb(e[n],t[n]))return!1;return!0}function zb(e,t){return Array.isArray(e)?ha(e,t):Array.isArray(t)?ha(t,e):e===t}function ha(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function qb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let o=n.length-1,r,i;for(r=0;r<s.length;r++)if(i=s[r],!(o===1||i==="."))if(i==="..")o--;else break;return n.slice(0,o).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var vs;(function(e){e.pop="pop",e.push="push"})(vs||(vs={}));var cs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(cs||(cs={}));function Yb(e){if(!e)if(Rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ub(e)}const $b=/^[^#]+#/;function Vb(e,t){return e.replace($b,"#")+t}function Jb(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Oo=()=>({left:window.pageXOffset,top:window.pageYOffset});function Kb(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Jb(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function da(e,t){return(history.state?history.state.position-t:-1)+e}const _r=new Map;function Zb(e,t){_r.set(e,t)}function Qb(e){const t=_r.get(e);return _r.delete(e),t}let Xb=()=>location.protocol+"//"+location.host;function Nu(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let a=o.includes(e.slice(r))?e.slice(r).length:1,l=o.slice(a);return l[0]!=="/"&&(l="/"+l),ca(l,"")}return ca(n,e)+s+o}function ey(e,t,n,s){let o=[],r=[],i=null;const a=({state:d})=>{const m=Nu(e,location),T=n.value,P=t.value;let A=0;if(d){if(n.value=m,t.value=d,i&&i===T){i=null;return}A=P?d.position-P.position:0}else s(m);o.forEach(_=>{_(n.value,T,{delta:A,type:vs.pop,direction:A?A>0?cs.forward:cs.back:cs.unknown})})};function l(){i=n.value}function u(d){o.push(d);const m=()=>{const T=o.indexOf(d);T>-1&&o.splice(T,1)};return r.push(m),m}function c(){const{history:d}=window;!d.state||d.replaceState(we({},d.state,{scroll:Oo()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:u,destroy:f}}function fa(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?Oo():null}}function ty(e){const{history:t,location:n}=window,s={value:Nu(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Xb()+e+l;try{t[c?"replaceState":"pushState"](u,"",d),o.value=u}catch(m){console.error(m),n[c?"replace":"assign"](d)}}function i(l,u){const c=we({},t.state,fa(o.value.back,l,o.value.forward,!0),u,{position:o.value.position});r(l,c,!0),s.value=l}function a(l,u){const c=we({},o.value,t.state,{forward:l,scroll:Oo()});r(c.current,c,!0);const f=we({},fa(s.value,l,null),{position:c.position+1},u);r(l,f,!1),s.value=l}return{location:s,state:o,push:a,replace:i}}function ny(e){e=Yb(e);const t=ty(e),n=ey(e,t.state,t.location,t.replace);function s(r,i=!0){i||n.pauseListeners(),history.go(r)}const o=we({location:"",base:e,go:s,createHref:Vb.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function sy(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ny(e)}function oy(e){return typeof e=="string"||e&&typeof e=="object"}function Mu(e){return typeof e=="string"||typeof e=="symbol"}const Vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wu=Jn("nf");var pa;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pa||(pa={}));function Hn(e,t){return we(new Error,{type:e,[Wu]:!0},t)}function Jt(e,t){return e instanceof Error&&Wu in e&&(t==null||!!(e.type&t))}const ma="[^/]+?",ry={sensitive:!1,strict:!1,start:!0,end:!0},iy=/[.+*?^${}()[\]/\\]/g;function ay(e,t){const n=we({},ry,t),s=[];let o=n.start?"^":"";const r=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const d=u[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(o+="/"),o+=d.value.replace(iy,"\\$&"),m+=40;else if(d.type===1){const{value:T,repeatable:P,optional:A,regexp:_}=d;r.push({name:T,repeatable:P,optional:A});const F=_||ma;if(F!==ma){m+=10;try{new RegExp(`(${F})`)}catch(J){throw new Error(`Invalid custom RegExp for param "${T}" (${F}): `+J.message)}}let V=P?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;f||(V=A&&u.length<2?`(?:/${V})`:"/"+V),A&&(V+="?"),o+=V,m+=20,A&&(m+=-8),P&&(m+=-20),F===".*"&&(m+=-50)}c.push(m)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function a(u){const c=u.match(i),f={};if(!c)return null;for(let d=1;d<c.length;d++){const m=c[d]||"",T=r[d-1];f[T.name]=m&&T.repeatable?m.split("/"):m}return f}function l(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const m of d)if(m.type===0)c+=m.value;else if(m.type===1){const{value:T,repeatable:P,optional:A}=m,_=T in u?u[T]:"";if(Array.isArray(_)&&!P)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const F=Array.isArray(_)?_.join("/"):_;if(!F)if(A)d.length<2&&e.length>1&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${T}"`);c+=F}}return c}return{re:i,score:s,keys:r,parse:a,stringify:l}}function ly(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function uy(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=ly(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(ga(s))return 1;if(ga(o))return-1}return o.length-s.length}function ga(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cy={type:0,value:""},hy=/[a-zA-Z0-9_]/;function dy(e){if(!e)return[[]];if(e==="/")return[[cy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const o=[];let r;function i(){r&&o.push(r),r=[]}let a=0,l,u="",c="";function f(){!u||(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),i()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:hy.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}function fy(e,t,n){const s=ay(dy(e.path),n),o=we(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function py(e,t){const n=[],s=new Map;t=ba({strict:!1,end:!0,sensitive:!1},t);function o(c){return s.get(c)}function r(c,f,d){const m=!d,T=gy(c);T.aliasOf=d&&d.record;const P=ba(t,c),A=[T];if("alias"in c){const V=typeof c.alias=="string"?[c.alias]:c.alias;for(const J of V)A.push(we({},T,{components:d?d.record.components:T.components,path:J,aliasOf:d?d.record:T}))}let _,F;for(const V of A){const{path:J}=V;if(f&&J[0]!=="/"){const $=f.record.path,ae=$[$.length-1]==="/"?"":"/";V.path=f.record.path+(J&&ae+J)}if(_=fy(V,f,P),d?d.alias.push(_):(F=F||_,F!==_&&F.alias.push(_),m&&c.name&&!wa(_)&&i(c.name)),"children"in T){const $=T.children;for(let ae=0;ae<$.length;ae++)r($[ae],_,d&&d.children[ae])}d=d||_,l(_)}return F?()=>{i(F)}:us}function i(c){if(Mu(c)){const f=s.get(c);f&&(s.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&s.delete(c.record.name),c.children.forEach(i),c.alias.forEach(i))}}function a(){return n}function l(c){let f=0;for(;f<n.length&&uy(c,n[f])>=0&&(c.record.path!==n[f].record.path||!Lu(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!wa(c)&&s.set(c.record.name,c)}function u(c,f){let d,m={},T,P;if("name"in c&&c.name){if(d=s.get(c.name),!d)throw Hn(1,{location:c});P=d.record.name,m=we(my(f.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),c.params),T=d.stringify(m)}else if("path"in c)T=c.path,d=n.find(F=>F.re.test(T)),d&&(m=d.parse(T),P=d.record.name);else{if(d=f.name?s.get(f.name):n.find(F=>F.re.test(f.path)),!d)throw Hn(1,{location:c,currentLocation:f});P=d.record.name,m=we({},f.params,c.params),T=d.stringify(m)}const A=[];let _=d;for(;_;)A.unshift(_.record),_=_.parent;return{name:P,path:T,params:m,matched:A,meta:by(A)}}return e.forEach(c=>r(c)),{addRoute:r,resolve:u,removeRoute:i,getRoutes:a,getRecordMatcher:o}}function my(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function gy(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function wy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function wa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function by(e){return e.reduce((t,n)=>we(t,n.meta),{})}function ba(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Lu(e,t){return t.children.some(n=>n===e||Lu(e,n))}const Uu=/#/g,yy=/&/g,vy=/\//g,ky=/=/g,_y=/\?/g,Hu=/\+/g,Ty=/%5B/g,Sy=/%5D/g,Gu=/%5E/g,xy=/%60/g,zu=/%7B/g,Iy=/%7C/g,qu=/%7D/g,Cy=/%20/g;function mi(e){return encodeURI(""+e).replace(Iy,"|").replace(Ty,"[").replace(Sy,"]")}function Ay(e){return mi(e).replace(zu,"{").replace(qu,"}").replace(Gu,"^")}function Tr(e){return mi(e).replace(Hu,"%2B").replace(Cy,"+").replace(Uu,"%23").replace(yy,"%26").replace(xy,"`").replace(zu,"{").replace(qu,"}").replace(Gu,"^")}function Dy(e){return Tr(e).replace(ky,"%3D")}function Py(e){return mi(e).replace(Uu,"%23").replace(_y,"%3F")}function Ey(e){return e==null?"":Py(e).replace(vy,"%2F")}function to(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ry(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(Hu," "),i=r.indexOf("="),a=to(i<0?r:r.slice(0,i)),l=i<0?null:to(r.slice(i+1));if(a in t){let u=t[a];Array.isArray(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function ya(e){let t="";for(let n in e){const s=e[n];if(n=Dy(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(s)?s.map(r=>r&&Tr(r)):[s&&Tr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function Oy(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Array.isArray(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}function Xn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Qt(e,t,n,s,o){const r=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((i,a)=>{const l=f=>{f===!1?a(Hn(4,{from:n,to:t})):f instanceof Error?a(f):oy(f)?a(Hn(2,{from:t,to:f})):(r&&s.enterCallbacks[o]===r&&typeof f=="function"&&r.push(f),i())},u=e.call(s&&s.instances[o],t,n,l);let c=Promise.resolve(u);e.length<3&&(c=c.then(l)),c.catch(f=>a(f))})}function Yo(e,t,n,s){const o=[];for(const r of e)for(const i in r.components){let a=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(jy(a)){const u=(a.__vccOpts||a)[t];u&&o.push(Qt(u,n,s,r,i))}else{let l=a();o.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const c=Wb(u)?u.default:u;r.components[i]=c;const d=(c.__vccOpts||c)[t];return d&&Qt(d,n,s,r,i)()}))}}return o}function jy(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function va(e){const t=It(Ro),n=It(Fu),s=it(()=>t.resolve(qe(e.to))),o=it(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(Un.bind(null,c));if(d>-1)return d;const m=ka(l[u-2]);return u>1&&ka(c)===m&&f[f.length-1].path!==m?f.findIndex(Un.bind(null,l[u-2])):d}),r=it(()=>o.value>-1&&My(n.params,s.value.params)),i=it(()=>o.value>-1&&o.value===n.matched.length-1&&Bu(n.params,s.value.params));function a(l={}){return Ny(l)?t[qe(e.replace)?"replace":"push"](qe(e.to)).catch(us):Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:r,isExactActive:i,navigate:a}}const Fy=Ql({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:va,setup(e,{slots:t}){const n=$n(va(e)),{options:s}=It(Ro),o=it(()=>({[_a(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[_a(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:yu("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),By=Fy;function Ny(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function My(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Array.isArray(o)||o.length!==s.length||s.some((r,i)=>r!==o[i]))return!1}return!0}function ka(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _a=(e,t,n)=>e!=null?e:t!=null?t:n,Wy=Ql({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=It(kr),o=it(()=>e.route||s.value),r=It(ua,0),i=it(()=>o.value.matched[r]);Ws(ua,r+1),Ws(Mb,i),Ws(kr,o);const a=vo();return bn(()=>[a.value,i.value,e.name],([l,u,c],[f,d,m])=>{u&&(u.instances[c]=l,d&&d!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Un(u,d)||!f)&&(u.enterCallbacks[c]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=o.value,u=i.value,c=u&&u.components[e.name],f=e.name;if(!c)return Ta(n.default,{Component:c,route:l});const d=u.props[e.name],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,P=yu(c,we({},m,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[f]=null)},ref:a}));return Ta(n.default,{Component:P,route:l})||P}}});function Ta(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ly=Wy;function Uy(e){const t=py(e.routes,e),n=e.parseQuery||Ry,s=e.stringifyQuery||ya,o=e.history,r=Xn(),i=Xn(),a=Xn(),l=Op(Vt);let u=Vt;Rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zo.bind(null,w=>""+w),f=zo.bind(null,Ey),d=zo.bind(null,to);function m(w,N){let C,M;return Mu(w)?(C=t.getRecordMatcher(w),M=N):M=w,t.addRoute(M,C)}function T(w){const N=t.getRecordMatcher(w);N&&t.removeRoute(N)}function P(){return t.getRoutes().map(w=>w.record)}function A(w){return!!t.getRecordMatcher(w)}function _(w,N){if(N=we({},N||l.value),typeof w=="string"){const X=qo(n,w,N.path),h=t.resolve({path:X.path},N),p=o.createHref(X.fullPath);return we(X,h,{params:d(h.params),hash:to(X.hash),redirectedFrom:void 0,href:p})}let C;if("path"in w)C=we({},w,{path:qo(n,w.path,N.path).path});else{const X=we({},w.params);for(const h in X)X[h]==null&&delete X[h];C=we({},w,{params:f(w.params)}),N.params=f(N.params)}const M=t.resolve(C,N),pe=w.hash||"";M.params=c(d(M.params));const ke=Hb(s,we({},w,{hash:Ay(pe),path:M.path})),te=o.createHref(ke);return we({fullPath:ke,hash:pe,query:s===ya?Oy(w.query):w.query||{}},M,{redirectedFrom:void 0,href:te})}function F(w){return typeof w=="string"?qo(n,w,l.value.path):we({},w)}function V(w,N){if(u!==w)return Hn(8,{from:N,to:w})}function J(w){return Q(w)}function $(w){return J(we(F(w),{replace:!0}))}function ae(w){const N=w.matched[w.matched.length-1];if(N&&N.redirect){const{redirect:C}=N;let M=typeof C=="function"?C(w):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=F(M):{path:M},M.params={}),we({query:w.query,hash:w.hash,params:w.params},M)}}function Q(w,N){const C=u=_(w),M=l.value,pe=w.state,ke=w.force,te=w.replace===!0,X=ae(C);if(X)return Q(we(F(X),{state:pe,force:ke,replace:te}),N||C);const h=C;h.redirectedFrom=N;let p;return!ke&&Gb(s,M,C)&&(p=Hn(16,{to:h,from:M}),_n(M,M,!0,!1)),(p?Promise.resolve(p):ne(h,M)).catch(g=>Jt(g)?Jt(g,2)?g:Ke(g):ve(g,h,M)).then(g=>{if(g){if(Jt(g,2))return Q(we(F(g.to),{state:pe,force:ke,replace:te}),N||h)}else g=Ie(h,M,!0,te,pe);return he(h,M,g),g})}function j(w,N){const C=V(w,N);return C?Promise.reject(C):Promise.resolve()}function ne(w,N){let C;const[M,pe,ke]=Hy(w,N);C=Yo(M.reverse(),"beforeRouteLeave",w,N);for(const X of M)X.leaveGuards.forEach(h=>{C.push(Qt(h,w,N))});const te=j.bind(null,w,N);return C.push(te),Cn(C).then(()=>{C=[];for(const X of r.list())C.push(Qt(X,w,N));return C.push(te),Cn(C)}).then(()=>{C=Yo(pe,"beforeRouteUpdate",w,N);for(const X of pe)X.updateGuards.forEach(h=>{C.push(Qt(h,w,N))});return C.push(te),Cn(C)}).then(()=>{C=[];for(const X of w.matched)if(X.beforeEnter&&!N.matched.includes(X))if(Array.isArray(X.beforeEnter))for(const h of X.beforeEnter)C.push(Qt(h,w,N));else C.push(Qt(X.beforeEnter,w,N));return C.push(te),Cn(C)}).then(()=>(w.matched.forEach(X=>X.enterCallbacks={}),C=Yo(ke,"beforeRouteEnter",w,N),C.push(te),Cn(C))).then(()=>{C=[];for(const X of i.list())C.push(Qt(X,w,N));return C.push(te),Cn(C)}).catch(X=>Jt(X,8)?X:Promise.reject(X))}function he(w,N,C){for(const M of a.list())M(w,N,C)}function Ie(w,N,C,M,pe){const ke=V(w,N);if(ke)return ke;const te=N===Vt,X=Rn?history.state:{};C&&(M||te?o.replace(w.fullPath,we({scroll:te&&X&&X.scroll},pe)):o.push(w.fullPath,pe)),l.value=w,_n(w,N,C,te),Ke()}let Ee;function Je(){Ee||(Ee=o.listen((w,N,C)=>{const M=_(w),pe=ae(M);if(pe){Q(we(pe,{replace:!0}),M).catch(us);return}u=M;const ke=l.value;Rn&&Zb(da(ke.fullPath,C.delta),Oo()),ne(M,ke).catch(te=>Jt(te,12)?te:Jt(te,2)?(Q(te.to,M).then(X=>{Jt(X,20)&&!C.delta&&C.type===vs.pop&&o.go(-1,!1)}).catch(us),Promise.reject()):(C.delta&&o.go(-C.delta,!1),ve(te,M,ke))).then(te=>{te=te||Ie(M,ke,!1),te&&(C.delta?o.go(-C.delta,!1):C.type===vs.pop&&Jt(te,20)&&o.go(-1,!1)),he(M,ke,te)}).catch(us)}))}let Ye=Xn(),Re=Xn(),Oe;function ve(w,N,C){Ke(w);const M=Re.list();return M.length?M.forEach(pe=>pe(w,N,C)):console.error(w),Promise.reject(w)}function fe(){return Oe&&l.value!==Vt?Promise.resolve():new Promise((w,N)=>{Ye.add([w,N])})}function Ke(w){return Oe||(Oe=!w,Je(),Ye.list().forEach(([N,C])=>w?C(w):N()),Ye.reset()),w}function _n(w,N,C,M){const{scrollBehavior:pe}=e;if(!Rn||!pe)return Promise.resolve();const ke=!C&&Qb(da(w.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return oi().then(()=>pe(w,N,ke)).then(te=>te&&Kb(te)).catch(te=>ve(te,w,N))}const Et=w=>o.go(w);let vt;const st=new Set;return{currentRoute:l,addRoute:m,removeRoute:T,hasRoute:A,getRoutes:P,resolve:_,options:e,push:J,replace:$,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:r.add,beforeResolve:i.add,afterEach:a.add,onError:Re.add,isReady:fe,install(w){const N=this;w.component("RouterLink",By),w.component("RouterView",Ly),w.config.globalProperties.$router=N,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>qe(l)}),Rn&&!vt&&l.value===Vt&&(vt=!0,J(o.location).catch(pe=>{}));const C={};for(const pe in Vt)C[pe]=it(()=>l.value[pe]);w.provide(Ro,N),w.provide(Fu,$n(C)),w.provide(kr,l);const M=w.unmount;st.add(w),w.unmount=function(){st.delete(w),st.size<1&&(u=Vt,Ee&&Ee(),Ee=null,l.value=Vt,vt=!1,Oe=!1),M()}}}}function Cn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Hy(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let i=0;i<r;i++){const a=t.matched[i];a&&(e.matched.find(u=>Un(u,a))?s.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(u=>Un(u,l))||o.push(l))}return[n,s,o]}function Gy(){return It(Ro)}const zy={class:"content sharp-border"},qy={key:0,class:"app-bar-space"},Yy={__name:"App",setup(e){const{dark:t}=Cu(),{setModules:n}=Au(),{currentRoute:s}=Gy();bn(t,()=>{document.body.toggleAttribute("theme-dark")});const{fileModules:o}=jb();n(Fb(o));const r=vo(!1);ri(()=>{window.addEventListener("scroll",i)});const i=u=>{if(typeof window=="undefined")return;const c=window.pageYOffset||u.target.scrollTop;r.value=c>150},a=()=>{window.scroll({top:0,behavior:"smooth"})},l=it(()=>["Home","Filter","Sort"].includes(s==null?void 0:s.value.name));return(u,c)=>{const f=fm("router-view"),d=Cg;return Ce(),Pe("div",null,[ce(qe(ew)),z("div",zy,[qe(l)?(Ce(),Pe("div",qy)):gr("",!0),ce(f),r.value?(Ce(),Pe("button",{key:1,class:"scroll-to-top circle small-shadow",onClick:a},[ce(d)])):gr("",!0)]),ce(qe(fb))])}}},$y=[{name:"Home",path:"/",component:()=>In(()=>import("./HomeView.e9bd657a.js"),["assets/HomeView.e9bd657a.js","assets/HomeView.2a7ba447.css"])},{name:"Filter",path:"/filter/:filterBy/:filterValue?",component:()=>In(()=>import("./HomeView.e9bd657a.js"),["assets/HomeView.e9bd657a.js","assets/HomeView.2a7ba447.css"])},{name:"Sort",path:"/sort/:sortBy",component:()=>In(()=>import("./HomeView.e9bd657a.js"),["assets/HomeView.e9bd657a.js","assets/HomeView.2a7ba447.css"])},{name:"Blog",path:"/blog/:name",component:()=>In(()=>import("./PostView.88cf8923.js"),["assets/PostView.88cf8923.js","assets/PostView.d82e7765.css"])},{name:"Series",path:"/blog/:series/:name",component:()=>In(()=>import("./PostView.88cf8923.js"),["assets/PostView.88cf8923.js","assets/PostView.d82e7765.css"])},{name:"404",path:"/:pathMatch(.*)*",component:()=>In(()=>import("./404View.427ae516.js"),["assets/404View.427ae516.js","assets/404View.7c5e5cbc.css"])}],Vy=Uy({history:sy(),routes:$y,scrollBehavior(e,t,n){return{top:(n==null?void 0:n.top)||0}}}),Jy=bg(),xs=mg(Yy);xs.config.globalProperties.window=window;xs.config.globalProperties.$moment=D;xs.use(Jy);xs.use(Vy);xs.mount("#app");export{qr as A,Lw as B,Fw as C,qg as D,Au as E,Xe as F,tv as G,nv as H,di as _,z as a,it as b,Pe as c,qe as d,gr as e,mu as f,Ao as g,D as h,pm as i,ce as j,$p as k,Gy as l,vo as m,gn as n,Ce as o,Yp as p,ri as q,Zy as r,ev as s,gl as t,Cu as u,bn as v,lr as w,Ky as x,Qy as y,Xy as z};
