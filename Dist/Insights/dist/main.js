(()=>{var e,t,r,a,n,o,i,l,u,f,s,d={5579:(e,t,r)=>{Promise.all([r.e(664),r.e(104),r.e(871),r.e(212),r.e(235)]).then(r.bind(r,4235))}},c={};function h(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={id:e,exports:{}};return d[e](r,r.exports,h),r.exports}h.m=d,h.c=c,h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((t,r)=>(h.f[r](e,t),t)),[])),h.u=e=>e+".js",h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="matter:",h.l=(r,a,n,o)=>{if(e[r])e[r].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var s=u[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+n){i=s;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,h.nc&&i.setAttribute("nonce",h.nc),i.setAttribute("data-webpack",t+n),i.src=r),e[r]=[a];var d=(t,a)=>{i.onerror=i.onload=null,clearTimeout(c);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),t)return t(a)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{h.S={};var e={},t={};h.I=(r,a)=>{a||(a=[]);var n=t[r];if(n||(n=t[r]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[r])return e[r];h.o(h.S,r)||(h.S[r]={});var o=h.S[r],i="matter",l=(e,t,r,a)=>{var n=o[e]=o[e]||{},l=n[t];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[t]={get:r,from:i,eager:!!a})},u=[];switch(r){case"default":l("@fluentui/example-data","8.2.2",(()=>h.e(528).then((()=>()=>h(6528))))),l("@fluentui/react","8.14.12",(()=>Promise.all([h.e(664),h.e(77),h.e(104),h.e(871)]).then((()=>()=>h(5077))))),l("@uifabric/react-cards","0.115.51",(()=>Promise.all([h.e(400),h.e(104),h.e(290)]).then((()=>()=>h(3668))))),l("office-ui-fabric-react","7.170.1",(()=>Promise.all([h.e(400),h.e(702),h.e(104),h.e(871),h.e(660)]).then((()=>()=>h(702))))),l("ramda","0.27.1",(()=>h.e(614).then((()=>()=>h(9614))))),l("react-dom","16.14.0",(()=>Promise.all([h.e(935),h.e(104)]).then((()=>()=>h(3935))))),l("react","16.14.0",(()=>h.e(294).then((()=>()=>h(7294))))),l("styled-components","5.3.0",(()=>Promise.all([h.e(163),h.e(104)]).then((()=>()=>h(9163)))))}return e[r]=u.length?Promise.all(u).then((()=>e[r]=1)):1}}})(),h.p="https://luigi-teams-p-insights.azurewebsites.net/",r=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=r[1]?t(r[1]):[];return r[2]&&(a.length++,a.push.apply(a,t(r[2]))),r[3]&&(a.push([]),a.push.apply(a,t(r[3]))),a},a=(e,t)=>{e=r(e),t=r(t);for(var a=0;;){if(a>=e.length)return a<t.length&&"u"!=(typeof t[a])[0];var n=e[a],o=(typeof n)[0];if(a>=t.length)return"u"==o;var i=t[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=(e,t)=>{if(0 in e){t=r(t);var a=e[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var f,s,d=l<e.length?(typeof e[l])[0]:"";if(i>=t.length||"o"==(s=(typeof(f=t[i]))[0]))return!u||("u"==d?l>a&&!o:""==d!=o);if("u"==s){if(!u||"u"!=d)return!1}else if(u)if(d==s)if(l<=a){if(f!=e[l])return!1}else{if(o?f>e[l]:f<e[l])return!1;f!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||l<=a)return!1;u=!1,l--}else{if(l<=a||s<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?n(p,t):!h())}return!!h()},o=(e,t,r)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>!n(r,t)||e&&!a(e,t)?e:t),0))&&o[t]},i=e=>(e.loaded=1,e.get()),l=(e=>function(t,r,a,n){var o=h.I(t);return o&&o.then?o.then(e.bind(e,t,h.S[t],r,a,n)):e(0,h.S[t],r,a,n)})(((e,t,r,a,n)=>{var l=t&&h.o(t,r)&&o(t,r,a);return l?i(l):n()})),u={},f={6104:()=>l("default","react",[1,16,13,0],(()=>h.e(294).then((()=>()=>h(7294))))),5871:()=>l("default","react-dom",[1,16,13,0],(()=>h.e(935).then((()=>()=>h(3935))))),654:()=>l("default","styled-components",[1,5,3,0],(()=>h.e(163).then((()=>()=>h(9163))))),909:()=>l("default","@fluentui/react",[1,8,14,12],(()=>Promise.all([h.e(77),h.e(871)]).then((()=>()=>h(5077))))),2412:()=>l("default","ramda",[2,0,27,1],(()=>h.e(614).then((()=>()=>h(9614))))),3588:()=>l("default","@fluentui/example-data",[1,8,2,2],(()=>h.e(980).then((()=>()=>h(6528))))),4416:()=>l("default","@uifabric/react-cards",[2,0,115,51],(()=>Promise.all([h.e(400),h.e(668)]).then((()=>()=>h(3668))))),6746:()=>l("default","office-ui-fabric-react",[1,7,170,1],(()=>Promise.all([h.e(400),h.e(702),h.e(871)]).then((()=>()=>h(702)))))},s={104:[6104],212:[654,909,2412,3588,4416,6746],871:[5871]},h.f.consumes=(e,t)=>{h.o(s,e)&&s[e].forEach((e=>{if(h.o(u,e))return t.push(u[e]);var r=t=>{u[e]=0,h.m[e]=r=>{delete h.c[e],r.exports=t()}},a=t=>{delete u[e],h.m[e]=r=>{throw delete h.c[e],t}};try{var n=f[e]();n.then?t.push(u[e]=n.then(r).catch(a)):r(n)}catch(e){a(e)}}))},(()=>{var e={179:0};h.f.j=(t,r)=>{var a=h.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(104|871)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var o=h.p+h.u(t),i=new Error;h.l(o,(r=>{if(h.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,n,[o,i,l]=r,u=0;for(a in i)h.o(i,a)&&(h.m[a]=i[a]);for(l&&l(h),t&&t(r);u<o.length;u++)n=o[u],h.o(e,n)&&e[n]&&e[n][0](),e[o[u]]=0},r=self.webpackChunkmatter=self.webpackChunkmatter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),h(5579)})();