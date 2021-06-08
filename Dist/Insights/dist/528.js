/*! For license information please see 528.js.LICENSE.txt */
(self.webpackChunkmatter=self.webpackChunkmatter||[]).push([[528,980],{6528:(e,a,i)=>{"use strict";i.r(a),i.d(a,{AvatarExamples:()=>l,TestImages:()=>s,createGroups:()=>A,createListItems:()=>v,facepilePersonas:()=>m,groupOne:()=>U,groupTwo:()=>M,isGroupable:()=>f,lorem:()=>d,mru:()=>k,people:()=>h,range:()=>V,setControlledMode:()=>u});var n,t="http://fabricweb.azureedge.net/fabric-website/assets/images/avatar",r=[{name:"Katri Athokas",image:t+"/KatriAthokas.jpg"},{name:"Elvia Atkins",image:t+"/ElviaAtkins.jpg"},{name:"Mauricio August",image:t+"/MauricioAugust.jpg"},{name:"Colin Ballinger",image:t+"/ColinBallinger.jpg"},{name:"Lydia Bauer",image:t+"/LydiaBauer.jpg"},{name:"Amanda Brady",image:t+"/AmandaBrady.jpg"},{name:"Henry Brill",image:t+"/HenryBrill.jpg"},{name:"Celeste Burton",image:t+"/CelesteBurton.jpg"},{name:"Robin Counts",image:t+"/RobinCounts.jpg"},{name:"Tim Deboer",image:t+"/TimDeboer.jpg"},{name:"Cameron Evans",image:t+"/CameronEvans.jpg"},{name:"Isaac Fielder",image:t+"/IsaacFielder.jpg"},{name:"Cecil Folk",image:t+"/CecilFolk.jpg"},{name:"Miguel Garcia",image:t+"/MiguelGarcia.jpg"},{name:"Wanda Howard",image:t+"/WandaHoward.jpg"},{name:"Mona Kane",image:t+"/MonaKane.jpg"},{name:"Kat Larsson",image:t+"/KatLarsson.jpg"},{name:"Ashley McCarthy",image:t+"/AshleyMcCarthy.jpg"},{name:"Johnie McConnell",image:t+"/JohnieMcConnell.jpg"},{name:"Allan Munger",image:t+"/AllanMunger.jpg"},{name:"Erik Nason",image:t+"/ErikNason.jpg"},{name:"Kristin Patterson",image:t+"/KristinPatterson.jpg"},{name:"Daisy Phillips",image:t+"/DaisyPhillips.jpg"},{name:"Carole Poland",image:t+"/CarolePoland.jpg"},{name:"Carlos Slattery",image:t+"/CarlosSlattery.jpg"},{name:"Robert Tolbert",image:t+"/RobertTolbert.jpg"},{name:"Kevin Sturgis",image:t+"/KevinSturgis.jpg"},{name:"Charlotte Waltson",image:t+"/CharlotteWaltson.jpg"},{name:"Elliot Woodward",image:t+"/ElliotWoodward.jpg"}],l={size:[20,24,28,32,36,40,48,56,64,72,96,120,128],nameAndImage:r,name:r.map((function(e){return e.name})),image:r.map((function(e){return e.image})),activeDisplay:["ring","ring-shadow","ring-glow","shadow","glow"],color:["neutral","brand","colorful"],namedColors:["darkRed","cranberry","red","pumpkin","peach","marigold","gold","brass","brown","forest","seafoam","darkGreen","lightTeal","teal","steel","blue","royalBlue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"],hexagon:'data:image/svg+xml;utf8,<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgb(232,232,232)" d="M0.407926 17.528C-0.135976 16.5859 -0.135975 15.4141 0.407926 14.472L7.91541 1.46793C8.44076 0.557947 9.39444 0 10.4245 0H25.5755C26.6056 0 27.5592 0.557951 28.0846 1.46793L35.5921 14.472C36.136 15.4141 36.136 16.5859 35.5921 17.528L28.0846 30.5321C27.5592 31.4421 26.6056 32 25.5755 32H10.4245C9.39443 32 8.44076 31.4421 7.91541 30.5321L0.407926 17.528Z"/></svg>'},o="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/",s={choiceGroupBarUnselected:o+"choicegroup-bar-unselected.png",choiceGroupBarSelected:o+"choicegroup-bar-selected.png",choiceGroupPieUnselected:o+"choicegroup-pie-unselected.png",choiceGroupPieSelected:o+"choicegroup-pie-selected.png",documentPreview:o+"document-preview.png",documentPreviewTwo:o+"document-preview2.png",documentPreviewThree:o+"document-preview3.png",iconOne:o+"icon-one.png",iconPpt:"https://static2.sharepointonline.com/files/fabric/assets/item-types/32/pptx.png",personaFemale:o+"persona-female.png",personaMale:o+"persona-male.png"};!function(e){e[e.lightBlue=0]="lightBlue",e[e.blue=1]="blue",e[e.darkBlue=2]="darkBlue",e[e.teal=3]="teal",e[e.lightGreen=4]="lightGreen",e[e.green=5]="green",e[e.darkGreen=6]="darkGreen",e[e.lightPink=7]="lightPink",e[e.pink=8]="pink",e[e.magenta=9]="magenta",e[e.purple=10]="purple",e[e.black=11]="black",e[e.orange=12]="orange",e[e.red=13]="red",e[e.darkRed=14]="darkRed",e[e.transparent=15]="transparent",e[e.violet=16]="violet",e[e.lightRed=17]="lightRed",e[e.gold=18]="gold",e[e.burgundy=19]="burgundy",e[e.warmGray=20]="warmGray",e[e.coolGray=21]="coolGray",e[e.gray=22]="gray",e[e.cyan=23]="cyan",e[e.rust=24]="rust"}(n||(n={}));var m=[{imageUrl:s.personaFemale,personaName:"Annie Lindqvist",data:"50%",onClick:function(e,a){return alert("You clicked on "+a.personaName+". Extra data: "+a.data)}},{imageUrl:s.personaFemale,personaName:"Aaron Reid",data:"$1,000"},{personaName:"Alex Lundberg",data:"75%",onClick:function(e,a){return alert("You clicked on "+a.personaName+". Extra data: "+a.data)}},{personaName:"Roko Kolar",data:"4 hrs"},{imageInitials:"CB",personaName:"Christian Bergqvist",initialsColor:n.green,data:"25%"},{imageUrl:s.personaFemale,imageInitials:"VL",personaName:"Valentina Lovric",initialsColor:n.lightBlue,data:"Emp1234",onClick:function(e,a){return alert("You clicked on "+a.personaName+". Extra data: "+a.data)}},{imageUrl:s.personaMale,imageInitials:"MS",personaName:"Maor Sharett",initialsColor:n.lightGreen},{imageUrl:s.personaFemale,imageInitials:"PV",personaName:"Annie Lindqvist2",initialsColor:n.lightPink},{imageUrl:s.personaMale,imageInitials:"AR",personaName:"Aaron Reid2",initialsColor:n.magenta,data:"Emp1234",onClick:function(e,a){return alert("You clicked on "+a.personaName+". Extra data: "+a.data)}},{imageUrl:s.personaMale,imageInitials:"AL",personaName:"Alex Lundberg2",initialsColor:n.orange},{imageUrl:s.personaMale,imageInitials:"RK",personaName:"Roko Kolar2",initialsColor:n.pink},{imageUrl:s.personaMale,imageInitials:"CB",personaName:"Christian Bergqvist2",initialsColor:n.purple},{imageUrl:s.personaFemale,imageInitials:"VL",personaName:"Valentina Lovric2",initialsColor:n.red},{imageUrl:s.personaMale,imageInitials:"MS",personaName:"Maor Sharett2",initialsColor:n.teal},{imageUrl:s.personaFemale,imageInitials:"VL",personaName:"Another A Name",initialsColor:n.blue},{imageUrl:s.personaMale,imageInitials:"MS",personaName:"Another A Name (So Many A names!)",initialsColor:n.darkBlue},{imageUrl:s.personaFemale,imageInitials:"VL",personaName:"Another Anecdotal A Name",initialsColor:n.darkGreen},{imageUrl:s.personaMale,imageInitials:"MS",personaName:"Anerobic A Name",initialsColor:n.darkRed},{imageUrl:s.personaFemale,imageInitials:"VL",personaName:"Aerobic A Name",initialsColor:n.green},{imageUrl:s.personaMale,imageInitials:"MS",personaName:"Maor Sharett2",initialsColor:n.lightBlue},{imageUrl:s.personaFemale,imageInitials:"VL",personaName:"Valentina Lovric2",initialsColor:n.lightGreen},{imageUrl:s.personaMale,imageInitials:"MS",personaName:"Maor Sharett2",initialsColor:n.lightPink},{imageUrl:s.personaFemale,imageInitials:"VL",personaName:"Valentina Lovric2",initialsColor:n.magenta},{imageUrl:s.personaMale,imageInitials:"MS",personaName:"Maor Sharett2",initialsColor:n.orange}],g=i(655),p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum".split(" "),c=!1;function d(e){return c?"Lorem ipsum dolor sit amet":(0,g.pr)(Array(e)).map((function(e,a){return p[a%p.length]})).join(" ")}var y,u=function(e){c=e},x=["red","blue","green","yellow"],T=["circle","square","triangle"],b=["Seattle","New York","Chicago","Los Angeles","Portland"];function v(e,a){return void 0===a&&(a=0),(0,g.pr)(Array(e)).map((function(e,i){var n=150+Math.round(100*Math.random());return{thumbnail:"//via.placeholder.com/"+n+"x"+n,key:"item-"+(i+a)+" "+d(4),name:d(5),description:d(10+Math.round(50*Math.random())),color:I(x),shape:I(T),location:I(b),width:n,height:n}}))}function A(e,a,i,n,t,r,l){void 0===t&&(t=0),void 0===r&&(r=""),""!==r&&(r+="-");var o=Math.pow(n,a);return(0,g.pr)(Array(e)).map((function(s,m){return{count:o,key:"group"+r+m,name:"group "+r+m,startIndex:m*o+i,level:t,isCollapsed:l,children:a>1?A(e,a-1,m*o+i,n,t+1,r+m):[]}}))}function f(e){return"color"===e||"shape"===e||"location"===e}function I(e){return e[Math.floor(Math.random()*e.length)]}!function(e){e[e.none=0]="none",e[e.offline=1]="offline",e[e.online=2]="online",e[e.away=3]="away",e[e.dnd=4]="dnd",e[e.blocked=5]="blocked",e[e.busy=6]="busy"}(y||(y={}));var h=[{key:1,imageUrl:s.personaFemale,imageInitials:"PV",text:"Annie Lindqvist",secondaryText:"Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:2,imageUrl:s.personaMale,imageInitials:"AR",text:"Aaron Reid",secondaryText:"Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:3,imageUrl:s.personaMale,imageInitials:"AL",text:"Alex Lundberg",secondaryText:"Software Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.dnd},{key:4,imageUrl:s.personaMale,imageInitials:"RK",text:"Roko Kolar",secondaryText:"Financial Analyst",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.offline},{key:5,imageUrl:s.personaMale,imageInitials:"CB",text:"Christian Bergqvist",secondaryText:"Sr. Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:6,imageUrl:s.personaFemale,imageInitials:"VL",text:"Valentina Lovric",secondaryText:"Design Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:7,imageUrl:s.personaMale,imageInitials:"MS",text:"Maor Sharett",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.away},{key:8,imageUrl:s.personaFemale,imageInitials:"PV",text:"Anny Lindqvist",secondaryText:"Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:9,imageUrl:s.personaMale,imageInitials:"AR",text:"Aron Reid",secondaryText:"Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.dnd},{key:10,imageUrl:s.personaMale,imageInitials:"AL",text:"Alix Lundberg",secondaryText:"Software Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.offline},{key:11,imageUrl:s.personaMale,imageInitials:"RK",text:"Roko Kular",secondaryText:"Financial Analyst",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.none},{key:12,imageUrl:s.personaMale,imageInitials:"CB",text:"Christian Bergqvest",secondaryText:"Sr. Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:13,imageUrl:s.personaFemale,imageInitials:"VL",text:"Valintina Lovric",secondaryText:"Design Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:14,imageUrl:s.personaMale,imageInitials:"MS",text:"Maor Sharet",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.blocked},{key:15,imageUrl:s.personaFemale,imageInitials:"VL",text:"Anny Lindqvest",secondaryText:"SDE",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.blocked},{key:16,imageUrl:s.personaMale,imageInitials:"MS",text:"Alix Lunberg",secondaryText:"SE",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.away},{key:17,imageUrl:s.personaFemale,imageInitials:"VL",text:"Annie Lindqvest",secondaryText:"SDET",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:18,imageUrl:s.personaMale,imageInitials:"MS",text:"Alixander Lundberg",secondaryText:"Senior Manager of SDET",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.offline},{key:19,imageUrl:s.personaFemale,imageInitials:"VL",text:"Anny Lundqvist",secondaryText:"Junior Manager of Software",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.away},{key:20,imageUrl:s.personaMale,imageInitials:"MS",text:"Maor Shorett",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.blocked},{key:21,imageUrl:s.personaFemale,imageInitials:"VL",text:"Valentina Lovrics",secondaryText:"Design Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:22,imageUrl:s.personaMale,imageInitials:"MS",text:"Maor Sharet",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:23,imageUrl:s.personaFemale,imageInitials:"VL",text:"Valentina Lovrecs",secondaryText:"Design Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.blocked},{key:24,imageUrl:s.personaMale,imageInitials:"MS",text:"Maor Sharitt",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.offline},{key:25,imageUrl:"./images/persona-male.png",imageInitials:"MS",text:"Maor Shariett",secondaryText:"Design Developer",tertiaryText:"In a meeting",optionalText:"Available at 3:00pm",isValid:!0,presence:y.online},{key:26,imageUrl:"./images/persona-female.png",imageInitials:"AL",text:"Alix Lundburg",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 3:00pm",isValid:!0,presence:y.away},{key:27,imageUrl:"./images/persona-female.png",imageInitials:"VL",text:"Valantena Lovric",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:28,imageUrl:"./images/persona-female.png",imageInitials:"VL",text:"Velatine Lourvric",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:29,imageUrl:"./images/persona-female.png",imageInitials:"VL",text:"Valentyna Lovrique",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:30,imageUrl:"./images/persona-female.png",imageInitials:"AL",text:"Annie Lindquest",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.dnd},{key:31,imageUrl:"./images/persona-female.png",imageInitials:"AL",text:"Anne Lindquist",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.blocked},{key:32,imageUrl:"./images/persona-female.png",imageInitials:"AL",text:"Ann Lindqiest",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:33,imageUrl:"./images/persona-male.png",imageInitials:"AR",text:"Aron Reid",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.away},{key:34,imageUrl:"./images/persona-male.png",imageInitials:"AR",text:"Aaron Reed",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.offline},{key:35,imageUrl:"./images/persona-female.png",imageInitials:"AL",text:"Alix Lindberg",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:36,imageUrl:"./images/persona-male.png",imageInitials:"AL",text:"Alan Lindberg",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.busy},{key:37,imageUrl:"./images/persona-male.png",imageInitials:"MS",text:"Maor Sharit",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.offline},{key:38,imageUrl:"./images/persona-male.png",imageInitials:"MS",text:"Maorr Sherit",secondaryText:"UX Designer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:39,imageUrl:"./images/persona-male.png",imageInitials:"AL",text:"Alex Lindbirg",secondaryText:"Software Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.dnd},{key:40,imageUrl:"./images/persona-male.png",imageInitials:"AL",text:"Alex Lindbarg",secondaryText:"Software Developer",tertiaryText:"In a meeting",optionalText:"Available at 4:00pm",isValid:!0,presence:y.online},{key:41,imageInitials:"GO",text:"Group One",canExpand:!0,isValid:!0},{key:42,imageInitials:"GT",text:"Group Two",canExpand:!0,isValid:!0}],k=h.slice(0,5),U=h.slice(6,10),M=h.slice(11,16),V=function(e,a){for(var i=[],n=e;n<=a;n++)i.push(n);return i}},655:(e,a,i)=>{"use strict";i.d(a,{ZT:()=>t,pi:()=>r,_T:()=>l,gn:()=>o,pr:()=>s});var n=function(e,a){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])})(e,a)};function t(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function i(){this.constructor=e}n(e,a),e.prototype=null===a?Object.create(a):(i.prototype=a.prototype,new i)}var r=function(){return(r=Object.assign||function(e){for(var a,i=1,n=arguments.length;i<n;i++)for(var t in a=arguments[i])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}).apply(this,arguments)};function l(e,a){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(i[n[t]]=e[n[t]])}return i}function o(e,a,i,n){var t,r=arguments.length,l=r<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,a,i,n);else for(var o=e.length-1;o>=0;o--)(t=e[o])&&(l=(r<3?t(l):r>3?t(a,i,l):t(a,i))||l);return r>3&&l&&Object.defineProperty(a,i,l),l}function s(){for(var e=0,a=0,i=arguments.length;a<i;a++)e+=arguments[a].length;var n=Array(e),t=0;for(a=0;a<i;a++)for(var r=arguments[a],l=0,o=r.length;l<o;l++,t++)n[t]=r[l];return n}Object.create,Object.create}}]);