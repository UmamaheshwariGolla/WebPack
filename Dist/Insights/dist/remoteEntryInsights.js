var Insights;(()=>{"use strict";var e,t,r,n,a,i,o,l,u,s,f,d={361:(e,t,r)=>{var n={"./Insights":()=>Promise.all([r.e(587),r.e(104),r.e(871),r.e(8),r.e(847)]).then((()=>()=>r(847)))},a=(e,t)=>(r.R=t,t=r.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,t),i=(e,t)=>{if(r.S){var n=r.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[a]=e,r.I(a,t)}};r.d(t,{get:()=>a,init:()=>i})}},h={};function c(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={id:e,exports:{}};return d[e](r,r.exports,c),r.exports}c.m=d,c.c=h,c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="matter:",c.l=(r,n,a,i)=>{if(e[r])e[r].push(n);else{var o,l;if(void 0!==a)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){o=f;break}}o||(l=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",t+a),o.src=r),e[r]=[n];var d=(t,n)=>{o.onerror=o.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),l&&document.head.appendChild(o)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{c.S={};var e={},t={};c.I=(r,n)=>{n||(n=[]);var a=t[r];if(a||(a=t[r]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[r])return e[r];c.o(c.S,r)||(c.S[r]={});var i=c.S[r],o="matter",l=(e,t,r,n)=>{var a=i[e]=i[e]||{},l=a[t];(!l||!l.loaded&&(!n!=!l.eager?n:o>l.from))&&(a[t]={get:r,from:o,eager:!!n})},u=[];switch(r){case"default":l("@fluentui/example-data","8.2.2",(()=>c.e(528).then((()=>()=>c(6528))))),l("@fluentui/react","8.14.12",(()=>Promise.all([c.e(587),c.e(827),c.e(104),c.e(871)]).then((()=>()=>c(7587))))),l("@uifabric/react-cards","0.115.51",(()=>Promise.all([c.e(400),c.e(104),c.e(290)]).then((()=>()=>c(3668))))),l("office-ui-fabric-react","7.170.1",(()=>Promise.all([c.e(400),c.e(702),c.e(104),c.e(871),c.e(660)]).then((()=>()=>c(702))))),l("react-dom","16.14.0",(()=>Promise.all([c.e(935),c.e(104)]).then((()=>()=>c(3935))))),l("react","16.14.0",(()=>c.e(294).then((()=>()=>c(7294))))),l("styled-components","5.3.0",(()=>Promise.all([c.e(163),c.e(104)]).then((()=>()=>c(9163)))))}return e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),c.p="https://luigi-teams-p-insights.azurewebsites.net/",r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},n=(e,t)=>{e=r(e),t=r(t);for(var n=0;;){if(n>=e.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=e[n],i=(typeof a)[0];if(n>=t.length)return"u"==i;var o=t[n],l=(typeof o)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&a!=o)return a<o;n++}},a=(e,t)=>{if(0 in e){t=r(t);var n=e[0],i=n<0;i&&(n=-n-1);for(var o=0,l=1,u=!0;;l++,o++){var s,f,d=l<e.length?(typeof e[l])[0]:"";if(o>=t.length||"o"==(f=(typeof(s=t[o]))[0]))return!u||("u"==d?l>n&&!i:""==d!=i);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=n){if(s!=e[l])return!1}else{if(i?s>e[l]:s<e[l])return!1;s!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(i||l<=n)return!1;u=!1,l--}else{if(l<=n||f<d!=i)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var h=[],c=h.pop.bind(h);for(o=1;o<e.length;o++){var p=e[o];h.push(1==p?c()|c():2==p?c()&c():p?a(p,t):!c())}return!!c()},i=(e,t,r)=>{var i=e[t];return(t=Object.keys(i).reduce(((e,t)=>!a(r,t)||e&&!n(e,t)?e:t),0))&&i[t]},o=e=>(e.loaded=1,e.get()),l=(e=>function(t,r,n,a){var i=c.I(t);return i&&i.then?i.then(e.bind(e,t,c.S[t],r,n,a)):e(0,c.S[t],r,n,a)})(((e,t,r,n,a)=>{var l=t&&c.o(t,r)&&i(t,r,n);return l?o(l):a()})),u={},s={6104:()=>l("default","react",[1,16,13,0],(()=>c.e(294).then((()=>()=>c(7294))))),5871:()=>l("default","react-dom",[1,16,13,0],(()=>c.e(935).then((()=>()=>c(3935))))),654:()=>l("default","styled-components",[1,5,3,0],(()=>c.e(163).then((()=>()=>c(9163))))),909:()=>l("default","@fluentui/react",[1,8,14,12],(()=>c.e(827).then((()=>()=>c(7587))))),3588:()=>l("default","@fluentui/example-data",[1,8,2,2],(()=>c.e(980).then((()=>()=>c(6528))))),4416:()=>l("default","@uifabric/react-cards",[2,0,115,51],(()=>Promise.all([c.e(400),c.e(668)]).then((()=>()=>c(3668))))),6746:()=>l("default","office-ui-fabric-react",[1,7,170,1],(()=>Promise.all([c.e(400),c.e(702)]).then((()=>()=>c(702)))))},f={8:[654,909,3588,4416,6746],104:[6104],871:[5871]},c.f.consumes=(e,t)=>{c.o(f,e)&&f[e].forEach((e=>{if(c.o(u,e))return t.push(u[e]);var r=t=>{u[e]=0,c.m[e]=r=>{delete c.c[e],r.exports=t()}},n=t=>{delete u[e],c.m[e]=r=>{throw delete c.c[e],t}};try{var a=s[e]();a.then?t.push(u[e]=a.then(r).catch(n)):r(a)}catch(e){n(e)}}))},(()=>{var e={198:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(104|871)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var i=c.p+c.u(t),o=new Error;c.l(i,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,n[1](o)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,a,[i,o,l]=r,u=0;for(n in o)c.o(o,n)&&(c.m[n]=o[n]);for(l&&l(c),t&&t(r);u<i.length;u++)a=i[u],c.o(e,a)&&e[a]&&e[a][0](),e[i[u]]=0},r=self.webpackChunkmatter=self.webpackChunkmatter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var p=c(361);Insights=p})();