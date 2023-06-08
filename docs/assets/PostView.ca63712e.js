import{o as b,c as S,a as f,b as wt,z as qt,d as U,u as Xt,n as Zt,t as te,f as N,g as _t,A as Kt,B as Jt,F as ht,r as vt,C as Tt,_ as Qt,i as en,E as tn,j as Pe,k as nn,w as rn,G as an,H as on,e as ln}from"./index.7ab18b30.js";import{t as sn}from"./tracker.d5d900f2.js";/*! @license DOMPurify 2.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.1/LICENSE */function H(t){return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},H(t)}function Ge(t,n){return Ge=Object.setPrototypeOf||function(l,c){return l.__proto__=c,l},Ge(t,n)}function cn(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function de(t,n,o){return cn()?de=Reflect.construct:de=function(c,p,m){var y=[null];y.push.apply(y,p);var O=Function.bind.apply(c,y),D=new O;return m&&Ge(D,m.prototype),D},de.apply(null,arguments)}function k(t){return un(t)||fn(t)||mn(t)||pn()}function un(t){if(Array.isArray(t))return We(t)}function fn(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mn(t,n){if(!!t){if(typeof t=="string")return We(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return We(t,n)}}function We(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,l=new Array(n);o<n;o++)l[o]=t[o];return l}function pn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dn=Object.hasOwnProperty,gt=Object.setPrototypeOf,_n=Object.isFrozen,hn=Object.getPrototypeOf,vn=Object.getOwnPropertyDescriptor,w=Object.freeze,x=Object.seal,Tn=Object.create,Rt=typeof Reflect!="undefined"&&Reflect,he=Rt.apply,Ve=Rt.construct;he||(he=function(n,o,l){return n.apply(o,l)});w||(w=function(n){return n});x||(x=function(n){return n});Ve||(Ve=function(n,o){return de(n,k(o))});var gn=L(Array.prototype.forEach),At=L(Array.prototype.pop),ee=L(Array.prototype.push),_e=L(String.prototype.toLowerCase),Fe=L(String.prototype.toString),An=L(String.prototype.match),C=L(String.prototype.replace),yn=L(String.prototype.indexOf),En=L(String.prototype.trim),E=L(RegExp.prototype.test),$e=bn(TypeError);function L(t){return function(n){for(var o=arguments.length,l=new Array(o>1?o-1:0),c=1;c<o;c++)l[c-1]=arguments[c];return he(t,n,l)}}function bn(t){return function(){for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return Ve(t,o)}}function s(t,n,o){o=o||_e,gt&&gt(t,null);for(var l=n.length;l--;){var c=n[l];if(typeof c=="string"){var p=o(c);p!==c&&(_n(n)||(n[l]=p),c=p)}t[c]=!0}return t}function G(t){var n=Tn(null),o;for(o in t)he(dn,t,[o])&&(n[o]=t[o]);return n}function me(t,n){for(;t!==null;){var o=vn(t,n);if(o){if(o.get)return L(o.get);if(typeof o.value=="function")return L(o.value)}t=hn(t)}function l(c){return console.warn("fallback value for",c),null}return l}var yt=w(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ue=w(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),He=w(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Sn=w(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ze=w(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),wn=w(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Et=w(["#text"]),bt=w(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Be=w(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),St=w(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),pe=w(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Rn=x(/\{\{[\w\W]*|[\w\W]*\}\}/gm),On=x(/<%[\w\W]*|[\w\W]*%>/gm),Nn=x(/\${[\w\W]*}/gm),Ln=x(/^data-[\-\w.\u00B7-\uFFFF]/),Dn=x(/^aria-[\-\w]+$/),Mn=x(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Cn=x(/^(?:\w+script|data):/i),kn=x(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),xn=x(/^html$/i),In=function(){return typeof window=="undefined"?null:window},Pn=function(n,o){if(H(n)!=="object"||typeof n.createPolicy!="function")return null;var l=null,c="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(c)&&(l=o.currentScript.getAttribute(c));var p="dompurify"+(l?"#"+l:"");try{return n.createPolicy(p,{createHTML:function(y){return y},createScriptURL:function(y){return y}})}catch{return console.warn("TrustedTypes policy "+p+" could not be created."),null}};function Ot(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:In(),n=function(e){return Ot(e)};if(n.version="2.4.1",n.removed=[],!t||!t.document||t.document.nodeType!==9)return n.isSupported=!1,n;var o=t.document,l=t.document,c=t.DocumentFragment,p=t.HTMLTemplateElement,m=t.Node,y=t.Element,O=t.NodeFilter,D=t.NamedNodeMap,Z=D===void 0?t.NamedNodeMap||t.MozNamedAttrMap:D,ne=t.HTMLFormElement,Nt=t.DOMParser,re=t.trustedTypes,ae=y.prototype,Lt=me(ae,"cloneNode"),Dt=me(ae,"nextSibling"),Mt=me(ae,"childNodes"),ve=me(ae,"parentNode");if(typeof p=="function"){var Te=l.createElement("template");Te.content&&Te.content.ownerDocument&&(l=Te.content.ownerDocument)}var M=Pn(re,o),je=M?M.createHTML(""):"",oe=l,ge=oe.implementation,Ct=oe.createNodeIterator,kt=oe.createDocumentFragment,xt=oe.getElementsByTagName,It=o.importNode,Ye={};try{Ye=G(l).documentMode?l.documentMode:{}}catch{}var I={};n.isSupported=typeof ve=="function"&&ge&&typeof ge.createHTMLDocument!="undefined"&&Ye!==9;var Ae=Rn,ye=On,Ee=Nn,Pt=Ln,Ft=Dn,$t=Cn,qe=kn,be=Mn,_=null,Xe=s({},[].concat(k(yt),k(Ue),k(He),k(ze),k(Et))),T=null,Ze=s({},[].concat(k(bt),k(Be),k(St),k(pe))),d=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),K=null,Se=null,Ke=!0,we=!0,Je=!1,W=!1,z=!1,Re=!1,Oe=!1,V=!1,ie=!1,le=!1,Qe=!0,et=!1,Ut="user-content-",Ne=!0,J=!1,j={},Y=null,tt=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),nt=null,rt=s({},["audio","video","img","source","image","track"]),Le=null,at=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),se="http://www.w3.org/1998/Math/MathML",ce="http://www.w3.org/2000/svg",P="http://www.w3.org/1999/xhtml",q=P,De=!1,Me=null,Ht=s({},[se,ce,P],Fe),B,zt=["application/xhtml+xml","text/html"],Bt="text/html",h,X=null,Gt=l.createElement("form"),ot=function(e){return e instanceof RegExp||e instanceof Function},Ce=function(e){X&&X===e||((!e||H(e)!=="object")&&(e={}),e=G(e),B=zt.indexOf(e.PARSER_MEDIA_TYPE)===-1?B=Bt:B=e.PARSER_MEDIA_TYPE,h=B==="application/xhtml+xml"?Fe:_e,_="ALLOWED_TAGS"in e?s({},e.ALLOWED_TAGS,h):Xe,T="ALLOWED_ATTR"in e?s({},e.ALLOWED_ATTR,h):Ze,Me="ALLOWED_NAMESPACES"in e?s({},e.ALLOWED_NAMESPACES,Fe):Ht,Le="ADD_URI_SAFE_ATTR"in e?s(G(at),e.ADD_URI_SAFE_ATTR,h):at,nt="ADD_DATA_URI_TAGS"in e?s(G(rt),e.ADD_DATA_URI_TAGS,h):rt,Y="FORBID_CONTENTS"in e?s({},e.FORBID_CONTENTS,h):tt,K="FORBID_TAGS"in e?s({},e.FORBID_TAGS,h):{},Se="FORBID_ATTR"in e?s({},e.FORBID_ATTR,h):{},j="USE_PROFILES"in e?e.USE_PROFILES:!1,Ke=e.ALLOW_ARIA_ATTR!==!1,we=e.ALLOW_DATA_ATTR!==!1,Je=e.ALLOW_UNKNOWN_PROTOCOLS||!1,W=e.SAFE_FOR_TEMPLATES||!1,z=e.WHOLE_DOCUMENT||!1,V=e.RETURN_DOM||!1,ie=e.RETURN_DOM_FRAGMENT||!1,le=e.RETURN_TRUSTED_TYPE||!1,Oe=e.FORCE_BODY||!1,Qe=e.SANITIZE_DOM!==!1,et=e.SANITIZE_NAMED_PROPS||!1,Ne=e.KEEP_CONTENT!==!1,J=e.IN_PLACE||!1,be=e.ALLOWED_URI_REGEXP||be,q=e.NAMESPACE||P,e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(d.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ot(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(d.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(d.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),W&&(we=!1),ie&&(V=!0),j&&(_=s({},k(Et)),T=[],j.html===!0&&(s(_,yt),s(T,bt)),j.svg===!0&&(s(_,Ue),s(T,Be),s(T,pe)),j.svgFilters===!0&&(s(_,He),s(T,Be),s(T,pe)),j.mathMl===!0&&(s(_,ze),s(T,St),s(T,pe))),e.ADD_TAGS&&(_===Xe&&(_=G(_)),s(_,e.ADD_TAGS,h)),e.ADD_ATTR&&(T===Ze&&(T=G(T)),s(T,e.ADD_ATTR,h)),e.ADD_URI_SAFE_ATTR&&s(Le,e.ADD_URI_SAFE_ATTR,h),e.FORBID_CONTENTS&&(Y===tt&&(Y=G(Y)),s(Y,e.FORBID_CONTENTS,h)),Ne&&(_["#text"]=!0),z&&s(_,["html","head","body"]),_.table&&(s(_,["tbody"]),delete K.tbody),w&&w(e),X=e)},it=s({},["mi","mo","mn","ms","mtext"]),lt=s({},["foreignobject","desc","title","annotation-xml"]),Wt=s({},["title","style","font","a","script"]),ue=s({},Ue);s(ue,He),s(ue,Sn);var ke=s({},ze);s(ke,wn);var Vt=function(e){var r=ve(e);(!r||!r.tagName)&&(r={namespaceURI:q,tagName:"template"});var a=_e(e.tagName),u=_e(r.tagName);return Me[e.namespaceURI]?e.namespaceURI===ce?r.namespaceURI===P?a==="svg":r.namespaceURI===se?a==="svg"&&(u==="annotation-xml"||it[u]):Boolean(ue[a]):e.namespaceURI===se?r.namespaceURI===P?a==="math":r.namespaceURI===ce?a==="math"&&lt[u]:Boolean(ke[a]):e.namespaceURI===P?r.namespaceURI===ce&&!lt[u]||r.namespaceURI===se&&!it[u]?!1:!ke[a]&&(Wt[a]||!ue[a]):!!(B==="application/xhtml+xml"&&Me[e.namespaceURI]):!1},F=function(e){ee(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=je}catch{e.remove()}}},xe=function(e,r){try{ee(n.removed,{attribute:r.getAttributeNode(e),from:r})}catch{ee(n.removed,{attribute:null,from:r})}if(r.removeAttribute(e),e==="is"&&!T[e])if(V||ie)try{F(r)}catch{}else try{r.setAttribute(e,"")}catch{}},st=function(e){var r,a;if(Oe)e="<remove></remove>"+e;else{var u=An(e,/^[\r\n\t ]+/);a=u&&u[0]}B==="application/xhtml+xml"&&q===P&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var R=M?M.createHTML(e):e;if(q===P)try{r=new Nt().parseFromString(R,B)}catch{}if(!r||!r.documentElement){r=ge.createDocument(q,"template",null);try{r.documentElement.innerHTML=De?"":R}catch{}}var A=r.body||r.documentElement;return e&&a&&A.insertBefore(l.createTextNode(a),A.childNodes[0]||null),q===P?xt.call(r,z?"html":"body")[0]:z?r.documentElement:A},ct=function(e){return Ct.call(e.ownerDocument||e,e,O.SHOW_ELEMENT|O.SHOW_COMMENT|O.SHOW_TEXT,null,!1)},jt=function(e){return e instanceof ne&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Z)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},Q=function(e){return H(m)==="object"?e instanceof m:e&&H(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},$=function(e,r,a){!I[e]||gn(I[e],function(u){u.call(n,r,a,X)})},ut=function(e){var r;if($("beforeSanitizeElements",e,null),jt(e)||E(/[\u0080-\uFFFF]/,e.nodeName))return F(e),!0;var a=h(e.nodeName);if($("uponSanitizeElement",e,{tagName:a,allowedTags:_}),e.hasChildNodes()&&!Q(e.firstElementChild)&&(!Q(e.content)||!Q(e.content.firstElementChild))&&E(/<[/\w]/g,e.innerHTML)&&E(/<[/\w]/g,e.textContent)||a==="select"&&E(/<template/i,e.innerHTML))return F(e),!0;if(!_[a]||K[a]){if(!K[a]&&mt(a)&&(d.tagNameCheck instanceof RegExp&&E(d.tagNameCheck,a)||d.tagNameCheck instanceof Function&&d.tagNameCheck(a)))return!1;if(Ne&&!Y[a]){var u=ve(e)||e.parentNode,R=Mt(e)||e.childNodes;if(R&&u)for(var A=R.length,g=A-1;g>=0;--g)u.insertBefore(Lt(R[g],!0),Dt(e))}return F(e),!0}return e instanceof y&&!Vt(e)||(a==="noscript"||a==="noembed")&&E(/<\/no(script|embed)/i,e.innerHTML)?(F(e),!0):(W&&e.nodeType===3&&(r=e.textContent,r=C(r,Ae," "),r=C(r,ye," "),r=C(r,Ee," "),e.textContent!==r&&(ee(n.removed,{element:e.cloneNode()}),e.textContent=r)),$("afterSanitizeElements",e,null),!1)},ft=function(e,r,a){if(Qe&&(r==="id"||r==="name")&&(a in l||a in Gt))return!1;if(!(we&&!Se[r]&&E(Pt,r))){if(!(Ke&&E(Ft,r))){if(!T[r]||Se[r]){if(!(mt(e)&&(d.tagNameCheck instanceof RegExp&&E(d.tagNameCheck,e)||d.tagNameCheck instanceof Function&&d.tagNameCheck(e))&&(d.attributeNameCheck instanceof RegExp&&E(d.attributeNameCheck,r)||d.attributeNameCheck instanceof Function&&d.attributeNameCheck(r))||r==="is"&&d.allowCustomizedBuiltInElements&&(d.tagNameCheck instanceof RegExp&&E(d.tagNameCheck,a)||d.tagNameCheck instanceof Function&&d.tagNameCheck(a))))return!1}else if(!Le[r]){if(!E(be,C(a,qe,""))){if(!((r==="src"||r==="xlink:href"||r==="href")&&e!=="script"&&yn(a,"data:")===0&&nt[e])){if(!(Je&&!E($t,C(a,qe,"")))){if(a)return!1}}}}}}return!0},mt=function(e){return e.indexOf("-")>0},pt=function(e){var r,a,u,R;$("beforeSanitizeAttributes",e,null);var A=e.attributes;if(!!A){var g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};for(R=A.length;R--;){r=A[R];var fe=r,v=fe.name,Ie=fe.namespaceURI;if(a=v==="value"?r.value:En(r.value),u=h(v),g.attrName=u,g.attrValue=a,g.keepAttr=!0,g.forceKeepAttr=void 0,$("uponSanitizeAttribute",e,g),a=g.attrValue,!g.forceKeepAttr&&(xe(v,e),!!g.keepAttr)){if(E(/\/>/i,a)){xe(v,e);continue}W&&(a=C(a,Ae," "),a=C(a,ye," "),a=C(a,Ee," "));var dt=h(e.nodeName);if(!!ft(dt,u,a)){if(et&&(u==="id"||u==="name")&&(xe(v,e),a=Ut+a),M&&H(re)==="object"&&typeof re.getAttributeType=="function"&&!Ie)switch(re.getAttributeType(dt,u)){case"TrustedHTML":a=M.createHTML(a);break;case"TrustedScriptURL":a=M.createScriptURL(a);break}try{Ie?e.setAttributeNS(Ie,v,a):e.setAttribute(v,a),At(n.removed)}catch{}}}}$("afterSanitizeAttributes",e,null)}},Yt=function i(e){var r,a=ct(e);for($("beforeSanitizeShadowDOM",e,null);r=a.nextNode();)$("uponSanitizeShadowNode",r,null),!ut(r)&&(r.content instanceof c&&i(r.content),pt(r));$("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,a,u,R,A;if(De=!i,De&&(i="<!-->"),typeof i!="string"&&!Q(i)){if(typeof i.toString!="function")throw $e("toString is not a function");if(i=i.toString(),typeof i!="string")throw $e("dirty is not a string, aborting")}if(!n.isSupported){if(H(t.toStaticHTML)==="object"||typeof t.toStaticHTML=="function"){if(typeof i=="string")return t.toStaticHTML(i);if(Q(i))return t.toStaticHTML(i.outerHTML)}return i}if(Re||Ce(e),n.removed=[],typeof i=="string"&&(J=!1),J){if(i.nodeName){var g=h(i.nodeName);if(!_[g]||K[g])throw $e("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof m)r=st("<!---->"),a=r.ownerDocument.importNode(i,!0),a.nodeType===1&&a.nodeName==="BODY"||a.nodeName==="HTML"?r=a:r.appendChild(a);else{if(!V&&!W&&!z&&i.indexOf("<")===-1)return M&&le?M.createHTML(i):i;if(r=st(i),!r)return V?null:le?je:""}r&&Oe&&F(r.firstChild);for(var fe=ct(J?i:r);u=fe.nextNode();)u.nodeType===3&&u===R||ut(u)||(u.content instanceof c&&Yt(u.content),pt(u),R=u);if(R=null,J)return i;if(V){if(ie)for(A=kt.call(r.ownerDocument);r.firstChild;)A.appendChild(r.firstChild);else A=r;return T.shadowroot&&(A=It.call(o,A,!0)),A}var v=z?r.outerHTML:r.innerHTML;return z&&_["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&E(xn,r.ownerDocument.doctype.name)&&(v="<!DOCTYPE "+r.ownerDocument.doctype.name+`>
`+v),W&&(v=C(v,Ae," "),v=C(v,ye," "),v=C(v,Ee," ")),M&&le?M.createHTML(v):v},n.setConfig=function(i){Ce(i),Re=!0},n.clearConfig=function(){X=null,Re=!1},n.isValidAttribute=function(i,e,r){X||Ce({});var a=h(i),u=h(e);return ft(a,u,r)},n.addHook=function(i,e){typeof e=="function"&&(I[i]=I[i]||[],ee(I[i],e))},n.removeHook=function(i){if(I[i])return At(I[i])},n.removeHooks=function(i){I[i]&&(I[i]=[])},n.removeAllHooks=function(){I={}},n}var Fn=Ot();const $n={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Un=f("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3Z"},null,-1),Hn=[Un];function zn(t,n){return b(),S("svg",$n,Hn)}var Bn={name:"mdi-clock",render:zn};const Gn=["src","alt","width","height"],Wn={__name:"TheAvatar",props:{src:{type:String,required:!0},alt:{type:String,default:""},size:{type:Number,default:24},bordered:{type:Number,default:0},borderStyle:{type:String,default:"solid"},borderColor:{type:String,default:"#000"}},setup(t){const n=t,o=wt(()=>n.bordered>0&&n.bordered?`border: ${n.bordered}px ${n.borderStyle} ${n.borderColor}`:"");return(l,c)=>(b(),S("img",{class:"circle",src:t.src,alt:t.alt,width:t.size,height:t.size,style:qt(U(o))},null,12,Gn))}};const Vn={class:"blog--head"},jn=["src"],Yn={class:"blog--head--content"},qn={class:"title"},Xn={class:"author-info"},Zn=["href","title"],Kn={class:"created-at"},Jn={__name:"HeadSection",props:{peek:{type:Object,required:!0}},setup(t){const{dark:n}=Xt(),o=wt(()=>n.value?_t("fallback_banner_dark"):_t("fallback_banner"));return(l,c)=>{const p=Bn;return b(),S("div",Vn,[f("img",{src:t.peek.banner||U(o),alt:"Blog Banner",class:Zt(["banner sharp-border",{contain:!t.peek.banner}])},null,10,jn),f("div",Yn,[f("div",qn,te(t.peek.title),1),f("div",Xn,[N(U(Wn),{src:t.peek.authorAvatar,alt:"Author Avatar",class:"author-avatar",size:140},null,8,["src"]),f("a",{class:"author-name",href:t.peek.authorLink,title:t.peek.authorName,target:"_blank"},te(t.peek.authorName),9,Zn),f("div",Kn,[N(p),f("span",null,te(l.$moment(t.peek.createdAt).format("LLLL")),1)])])])])}}},Qn={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},er=f("path",{fill:"currentColor",d:"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"},null,-1),tr=[er];function nr(t,n){return b(),S("svg",Qn,tr)}var rr={name:"mdi-twitter",render:nr};const ar={class:"blog-content-info"},or=f("hr",null,null,-1),ir=f("br",null,null,-1),lr=f("div",{class:"title"},"The Blog Project",-1),sr=f("br",null,null,-1),cr=f("p",{class:"subtitle"}," Amplifies the voices of the open source community: the maintainers, developers, and teams whose contributions move the world forward everyday. ",-1),ur=f("br",null,null,-1),fr=f("br",null,null,-1),mr={class:"wrapper"},pr=f("div",{class:"title"},"Share",-1),dr={class:"share-items"},_r={__name:"ContentInfo",setup(t){const n=()=>{FB.ui({display:"popup",method:"share",href:window.location.href,redirect_uri:window.location.href},function(o){})};return(o,l)=>{const c=rr,p=Kt,m=Jt;return b(),S("div",ar,[or,ir,lr,sr,cr,ur,fr,f("div",mr,[pr,f("div",dr,[N(c,{class:"share-icon twitter"}),N(p,{class:"share-icon facebook",onClick:n}),N(m,{class:"share-icon linkedin"})])])])}}};const hr=["innerHTML"],vr={__name:"ContentData",props:{data:{type:String,required:!0}},setup(t){return(n,o)=>(b(),S("div",{class:"blog-content-data",innerHTML:t.data},null,8,hr))}},Tr={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},gr=f("path",{fill:"currentColor",d:"m5.41 21l.71-4h-4l.35-2h4l1.06-6h-4l.35-2h4l.71-4h2l-.71 4h6l.71-4h2l-.71 4h4l-.35 2h-4l-1.06 6h4l-.35 2h-4l-.71 4h-2l.71-4h-6l-.71 4h-2M9.53 9l-1.06 6h6l1.06-6h-6Z"},null,-1),Ar=[gr];function yr(t,n){return b(),S("svg",Tr,Ar)}var Er={name:"mdi-hashtag",render:yr};const br={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Sr=f("path",{fill:"currentColor",d:"m10 17l5-5l-5-5v10Z"},null,-1),wr=[Sr];function Rr(t,n){return b(),S("svg",br,wr)}var Or={name:"mdi-menu-right",render:Rr};const Nr={class:"blog-content-sidebar"},Lr={class:"toc"},Dr=f("div",{class:"title sharp-border"},"Table of content",-1),Mr=["onClick"],Cr=f("br",null,null,-1),kr=f("div",{class:"title sharp-border"},"Tags",-1),xr={class:"tags"},Ir=["title"],Pr={__name:"ContentSidebar",props:{toc:{type:Array,required:!0},tags:{type:Array,default:()=>[]}},setup(t){const n=(o,l)=>{const c=`//h${l}[contains(text(), '${o.trim()}')]`,p=document.evaluate(c,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;if(p){const m=p.getBoundingClientRect();window.scrollTo({left:m.left,top:m.top+window.scrollY-100,behavior:"smooth"})}};return(o,l)=>{const c=Or,p=Er;return b(),S("div",Nr,[f("div",Lr,[Dr,(b(!0),S(ht,null,vt(t.toc,(m,y)=>(b(),S("div",{key:y,class:"toc--item",onClick:O=>n(m.text,m.depth)},[N(c,{class:"mdi-circle"}),Tt(" "+te(m.text),1)],8,Mr))),128))]),Cr,kr,f("div",xr,[(b(!0),S(ht,null,vt(t.tags,m=>(b(),S("a",{href:"tag",key:m,title:m,target:"_blank",class:"tag"},[N(p),Tt(" "+te(m),1)],8,Ir))),128))])])}}};const Fr={},$r={class:"blog--footer"},Ur=f("hr",null,null,-1),Hr=f("div",{class:"title"}," \u{1F389} Thank you for reading the blog! ",-1),zr=f("div",{class:"subtitle"}," Please, come back to us for more quality content. \u{1F44B} ",-1),Br=[Ur,Hr,zr];function Gr(t,n){return b(),S("div",$r,Br)}var Wr=Qt(Fr,[["render",Gr]]);const Vr={key:0,class:"blog"},jr={class:"blog--content"},Zr={__name:"PostView",setup(t){const{currentRoute:n,push:o}=en(),{modules:l}=tn(),c=Pe(null),p=Pe(null),m=Pe(null);nn(()=>{y(),sn.trackPageView()}),rn(n,()=>{var O,D;((D=(O=n==null?void 0:n.value)==null?void 0:O.params)==null?void 0:D.name)===void 0?(window.location.href="/#/",o({name:"Home"})):y()});const y=()=>{let O;n.value.params.series&&(O=decodeURIComponent(n.value.params.series.toString()));const D=decodeURIComponent(n.value.params.name.toString()),Z=l.value.find(ne=>ne.meta.title===D&&ne.meta.seriesTitle===O);m.value=Z.meta,c.value=Fn.sanitize(an(Z.raw)),p.value=on(Z.raw),document.title=`Blog | ${m.value.title}`};return(O,D)=>m.value?(b(),S("div",Vr,[N(U(Jn),{peek:m.value},null,8,["peek"]),f("div",jr,[N(U(_r)),N(U(vr),{data:c.value},null,8,["data"]),N(U(Pr),{toc:p.value,tags:m.value.tags},null,8,["toc","tags"])]),N(U(Wr))])):ln("",!0)}};export{Zr as default};