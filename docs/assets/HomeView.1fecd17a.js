import{o as n,c as s,a,g as x,u as Q,b as I,d as u,n as m,e as $,t as h,h as R,F as L,r as B,f,_ as W,i as X,j as v,k as ee,l as y,S as T,w as te,m as ae,v as ne,p as oe,q as C,s as H,x as se,D as P,y as re}from"./index.486ea675.js";import{t as le}from"./tracker.d5d900f2.js";const ce={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ie=a("path",{fill:"currentColor",d:"M3 5h18v4H3V5m0 5h18v4H3v-4m0 5h18v4H3v-4Z"},null,-1),ue=[ie];function de(o,l){return n(),s("svg",ce,ue)}var he={name:"mdi-view-sequential",render:de};const _e={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ve=a("path",{fill:"currentColor",d:"M3 19h6v-7H3v7m7 0h12v-7H10v7M3 5v6h19V5H3Z"},null,-1),me=[ve];function ge(o,l){return n(),s("svg",_e,me)}var fe={name:"mdi-view-compact",render:ge};const pe={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ke=a("path",{fill:"currentColor",d:"m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2Z"},null,-1),we=[ke];function be(o,l){return n(),s("svg",pe,we)}var $e={name:"mdi-sort",render:be};const ye={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Ce=a("path",{fill:"currentColor",d:"M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.989.989 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12H14Z"},null,-1),Le=[Ce];function Be(o,l){return n(),s("svg",ye,Le)}var Se={name:"mdi-filter",render:Be};const Ve={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Me=a("path",{fill:"currentColor",d:"M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"},null,-1),He=[Me];function xe(o,l){return n(),s("svg",Ve,He)}var Ae={name:"mdi-search",render:xe};const Ne={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},De=a("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"},null,-1),Re=[De];function Te(o,l){return n(),s("svg",Ne,Re)}var Pe={name:"mdi-close",render:Te};const Ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},qe=a("path",{fill:"currentColor",d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7c0-.24-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.15c-.05.21-.08.43-.08.66c0 1.61 1.31 2.91 2.92 2.91c1.61 0 2.92-1.3 2.92-2.91A2.92 2.92 0 0 0 18 16.08Z"},null,-1),Fe=[qe];function Ze(o,l){return n(),s("svg",Ie,Fe)}var Oe={name:"mdi-share-variant",render:Ze};const je={class:"blog-peek"},Ee=["src"],Ke=a("div",{class:"blog-peek--divider"},null,-1),Ue={class:"blog-peek--author"},Ye=["src"],ze={class:"author-info"},Ge=["href","title"],Je={key:1,class:"author-name"},Qe={class:"created-at",title:"Created Timestamp"},We={class:"blog-peek--content"},Xe={class:"blog-title"},et={class:"tags"},tt={key:0,class:"blog-peek--footer"},at={"aria-label":"Share",title:"Share Post",class:"icon-button"},nt={class:"read-time"},ot={computed:{minutesToRead(){return Math.round(this.contentLength/(100*6))}}},st=Object.assign(ot,{__name:"BlogPeek",props:{title:{type:String,required:!0},tags:{type:Array,required:!0},authorName:{type:String,required:!0},authorAvatar:{type:String,required:!0},authorLink:{type:String,default:null},createdAt:{type:[Date,String],required:!0},contentLength:{type:Number,default:0},detailView:{type:Boolean,default:!1},banner:{type:String,default:null}},setup(o){const l=x("fallback_banner_dark"),w=x("fallback_banner"),{dark:_}=Q(),i=I(()=>_.value?l:w);return(c,p)=>{const g=Oe;return n(),s("div",je,[a("div",{class:m(["blog-peek--banner",{"blog-peek--banner--fallback":!o.banner}])},[o.banner||u(i)?(n(),s("img",{key:0,src:o.banner||u(i),alt:"Blog Banner",class:m({"fallback-banner":!o.banner,"regular-banner":o.banner})},null,10,Ee)):$("",!0)],2),Ke,a("div",Ue,[a("img",{src:o.authorAvatar,class:"author-avatar circle",alt:"Author Avatar"},null,8,Ye),a("div",ze,[o.authorLink?(n(),s("a",{key:0,href:o.authorLink,target:"_blank",title:o.authorName,class:"author-link"},h(o.authorName),9,Ge)):(n(),s("div",Je,h(o.authorName),1)),a("div",Qe,h(u(R)(o.createdAt).format("MMM DD, YYYY"))+" ("+h(u(R)(o.createdAt).fromNow())+") ",1)])]),a("div",We,[a("div",Xe,h(o.title),1),a("div",et,[(n(!0),s(L,null,B(o.tags,(k,d)=>(n(),s("div",{key:d,class:"tag-item"}," #\xA0"+h(k),1))),128))])]),o.detailView?$("",!0):(n(),s("div",tt,[a("button",at,[f(g,{class:"one-rem"})]),a("div",nt,h(c.minutesToRead)+" minutes of read ",1)]))])}}});const rt={class:"home-view"},lt=["src"],ct={class:"home-view--search"},it=["placeholder","onKeyup"],ut={class:"home-view--search--actions"},dt=["onClick"],ht=["onClick"],_t=["title"],vt={key:0,class:"home-view--no-results"},mt={class:"message"},gt={__name:"HomeView",setup(o){const{currentRoute:l,push:w}=X(),_=v([]),i=v(""),c=v([]),p=v(!1),g=v(null),k=v(null),d=v(null),A=v("");ee(async()=>{F(),le.trackPageView()});const q=I(()=>l.value.params.filterBy?"search by "+A.value:"search"),F=()=>{var e;p.value=!0,g.value=l.value.params.filterBy,k.value=(e=l.value.params)==null?void 0:e.sortBy,_.value=y(),c.value=y(),V(k.value),p.value=!1,d.value=T.getHomeViewMode()},Z=x("loading");te(i,()=>{i.value||(_.value=y(),c.value=_.value)});const O=()=>{d.value=d.value==="list"?"grid":"list",T.saveHomeViewMode(d.value)},j=e=>{const t=e.seriesTitle;t?window.location.href=`/#/blog/${encodeURIComponent(t)}/${encodeURIComponent(e.title)}`:window.location.href=`/#/blog/${encodeURIComponent(e.title)}`},N=()=>{p.value=!0;const e=i.value.toLowerCase();c.value=[],g.value?_.value.forEach(t=>{switch(g.value){case"tag":t.tags&&t.tags.join(" ").toLowerCase().includes(e)&&c.value.push(t);break;case"author":t.tags&&t.tags.join(" ").toLowerCase().includes(e)&&c.value.push(t);break;case"title":t.title.toLowerCase().includes(e)&&c.value.push(t);break}}):k.value?_.value.forEach(t=>{t.title.toLowerCase().includes(e)&&c.value.push(t)}):_.value.forEach(t=>{(t.tags&&t.tags.join(" ").toLowerCase().includes(e)||t.authorName.toLowerCase().includes(e)||t.title.toLowerCase().includes(e))&&c.value.push(t)}),p.value=!1},S=()=>{i.value=""},D=()=>{w({name:"Home"}).then(()=>{_.value=y(),V(k.value),S()})},E=e=>{l.value.params.sortBy===e?D():w({name:"Sort",params:{sortBy:e}}).then(()=>{g.value=e,V(e)})},K=e=>{l.value.params.filterBy===e?D():(A.value=e,w({name:"Filter",params:{filterBy:e}}).then(()=>{g.value=e}))},V=e=>{e==="alpha"?c.value.sort((t,b)=>t.title.localeCompare(b.title)):c.value.sort((t,b)=>b.createdAt-t.createdAt)};return(e,t)=>{const b=Pe,U=Ae,Y=Se,z=$e,G=fe,J=he;return n(),s("div",rt,[p.value?(n(),s("img",{key:0,src:u(Z),height:"30",width:"30",alt:"Loading Spinner",class:"spinner"},null,8,lt)):$("",!0),a("div",ct,[ae(a("input",{id:"search",class:"home-view--search--input","onUpdate:modelValue":t[0]||(t[0]=r=>i.value=r),placeholder:u(q),onKeyup:oe(N,["enter"])},null,40,it),[[ne,i.value]]),a("div",ut,[i.value.length>0?(n(),s("button",{key:0,class:"clear-button",onClick:S},[f(b)])):$("",!0),a("button",{class:"icon-button",title:"Search",onClick:N},[f(U,{class:"one-rem"})]),f(u(P),null,{trigger:C(()=>[a("button",{class:m(["icon-button",{filtering:e.$route.name==="Filter"}]),title:"Filter"},[f(Y,{class:"one-rem"})],2)]),drop:C(()=>[(n(!0),s(L,null,B(u(se),r=>(n(),s("div",{key:r.key,class:m(["menu-drop-item",{"item-active":e.$route.params.filterBy===r.key}]),onClick:M=>K(r.key)},h(r.label),11,dt))),128))]),_:1}),f(u(P),{class:"menu"},{trigger:C(()=>[a("button",{class:m(["icon-button",{sorting:e.$route.name==="Sort"}]),title:"Sort"},[f(z,{class:"one-rem"})],2)]),drop:C(()=>[(n(!0),s(L,null,B(u(re),r=>(n(),s("div",{key:r.key,class:m(["menu-drop-item",{"item-active":e.$route.params.sortBy===r.key}]),onClick:M=>E(r.key)},h(r.label),11,ht))),128))]),_:1}),a("button",{class:m(["icon-button",{sorting:e.$route.name==="Sort"}]),title:d.value==="list"?"Grid View":"List View",onClick:t[1]||(t[1]=r=>O())},[d.value==="list"?(n(),H(G,{key:0,class:"one-rem"})):(n(),H(J,{key:1,class:"one-rem"}))],10,_t)])]),a("div",{class:m({"home-view--list":d.value==="list","home-view--grid":d.value!=="list"})},[(n(!0),s(L,null,B(c.value,(r,M)=>(n(),H(u(st),{key:M,title:r.title,"created-at":r.createdAt,"author-name":r.authorName,"author-link":r.authorLink,"author-avatar":r.authorAvatar,"content-length":r.contentLength,tags:r.tags,banner:r.banner,onClick:ft=>j(r)},null,8,["title","created-at","author-name","author-link","author-avatar","content-length","tags","banner","onClick"]))),128)),c.value.length===0?(n(),s("div",vt,[a("div",mt,'Sorry, no results found for "'+h(i.value)+'"',1),a("button",{onClick:S},"Reset Search")])):$("",!0)],2)])}}};var wt=W(gt,[["__scopeId","data-v-b0298b1e"]]);export{wt as default};
