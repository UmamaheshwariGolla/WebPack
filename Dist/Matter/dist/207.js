(self.webpackChunkmatter=self.webpackChunkmatter||[]).push([[207],{1207:(o,t,r)=>{"use strict";r.r(t),r.d(t,{ActionButton:()=>u.K,BaseButton:()=>l.Y,Button:()=>f,ButtonType:()=>n,CommandBarButton:()=>x.Q,CommandButton:()=>v.M,CompoundButton:()=>C,DefaultButton:()=>s.a,ElementType:()=>e,IconButton:()=>B.h,MessageBarButton:()=>w,PrimaryButton:()=>k.K,getSplitButtonClassNames:()=>P.W});var e,n,l=r(4669);!function(o){o[o.button=0]="button",o[o.anchor=1]="anchor"}(e||(e={})),function(o){o[o.normal=0]="normal",o[o.primary=1]="primary",o[o.hero=2]="hero",o[o.compound=3]="compound",o[o.command=4]="command",o[o.icon=5]="icon",o[o.default=6]="default"}(n||(n={}));var a=r(655),i=r(6104),c=r(9818),s=r(803),u=r(1),d=r(8525),p=r(5234),m=r(6233),h=r(7975),g=r(2311),y=r(530),b=(0,m.NF)((function(o,t,r){var e,n,l,i,c,s=o.fonts,u=o.palette,d=(0,h.W)(o),m=(0,g.W)(o),b={root:{maxWidth:"280px",minHeight:"72px",height:"auto",padding:"16px 12px"},flexContainer:{flexDirection:"row",alignItems:"flex-start",minWidth:"100%",margin:""},textContainer:{textAlign:"left"},icon:{fontSize:"2em",lineHeight:"1em",height:"1em",margin:"0px 8px 0px 0px",flexBasis:"1em",flexShrink:"0"},label:{margin:"0 0 5px",lineHeight:"100%",fontWeight:p.lq.semibold},description:[s.small,{lineHeight:"100%"}]},C={description:{color:u.neutralSecondary},descriptionHovered:{color:u.neutralDark},descriptionPressed:{color:"inherit"},descriptionChecked:{color:"inherit"},descriptionDisabled:{color:"inherit"}},B={description:{color:u.white,selectors:(e={},e[p.qJ]=(0,a.pi)({backgroundColor:"WindowText",color:"Window"},(0,p.xM)()),e)},descriptionHovered:{color:u.white,selectors:(n={},n[p.qJ]={backgroundColor:"Highlight",color:"Window"},n)},descriptionPressed:{color:"inherit",selectors:(l={},l[p.qJ]=(0,a.pi)({color:"Window",backgroundColor:"WindowText"},(0,p.xM)()),l)},descriptionChecked:{color:"inherit",selectors:(i={},i[p.qJ]=(0,a.pi)({color:"Window",backgroundColor:"WindowText"},(0,p.xM)()),i)},descriptionDisabled:{color:"inherit",selectors:(c={},c[p.qJ]={color:"inherit"},c)}};return(0,p.E$)(d,b,r?(0,y.f)(o):(0,y.D)(o),r?B:C,m,t)})),C=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return(0,a.ZT)(t,o),t.prototype.render=function(){var o=this.props,t=o.primary,r=void 0!==t&&t,e=o.styles,n=o.theme;return i.createElement(l.Y,(0,a.pi)({},this.props,{variantClassName:r?"ms-Button--compoundPrimary":"ms-Button--compound",styles:b(n,e,r)}))},(0,a.gn)([(0,d.a)("CompoundButton",["theme","styles"],!0)],t)}(i.Component),B=r(3950),k=r(7283),f=function(o){function t(t){var r=o.call(this,t)||this;return(0,c.Z)("The Button component has been deprecated. Use specific variants instead. (PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)"),r}return(0,a.ZT)(t,o),t.prototype.render=function(){var o=this.props;switch(o.buttonType){case n.command:return i.createElement(u.K,(0,a.pi)({},o));case n.compound:return i.createElement(C,(0,a.pi)({},o));case n.icon:return i.createElement(B.h,(0,a.pi)({},o));case n.primary:return i.createElement(k.K,(0,a.pi)({},o));default:return i.createElement(s.a,(0,a.pi)({},o))}},t}(i.Component),x=r(2665),v=r(7171),D=r(2709),W=(0,m.NF)((function(o,t){return(0,p.E$)({root:[(0,p.GL)(o,{inset:1,highContrastStyle:{outlineOffset:"-4px",outline:"1px solid Window"},borderColor:"transparent"}),{height:24}]},t)})),w=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return(0,a.ZT)(t,o),t.prototype.render=function(){var o=this.props,t=o.styles,r=o.theme;return i.createElement(s.a,(0,a.pi)({},this.props,{styles:W(r,t),onRenderDescription:D.S}))},(0,a.gn)([(0,d.a)("MessageBarButton",["theme","styles"],!0)],t)}(i.Component),P=r(5407)},1:(o,t,r)=>{"use strict";r.d(t,{K:()=>s});var e=r(655),n=r(6104),l=r(4669),a=r(2709),i=r(8525),c=r(3562),s=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return(0,e.ZT)(t,o),t.prototype.render=function(){var o=this.props,t=o.styles,r=o.theme;return n.createElement(l.Y,(0,e.pi)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:(0,c.W)(r,t),onRenderDescription:a.S}))},(0,e.gn)([(0,i.a)("ActionButton",["theme","styles"],!0)],t)}(n.Component)},3562:(o,t,r)=>{"use strict";r.d(t,{W:()=>a});var e=r(5234),n=r(6233),l=r(7975),a=(0,n.NF)((function(o,t){var r,n,a,i=(0,l.W)(o),c={root:{padding:"0 4px",height:"40px",color:o.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent",selectors:(r={},r[e.qJ]={borderColor:"Window"},r)},rootHovered:{color:o.palette.themePrimary,selectors:(n={},n[e.qJ]={color:"Highlight"},n)},iconHovered:{color:o.palette.themePrimary},rootPressed:{color:o.palette.black},rootExpanded:{color:o.palette.themePrimary},iconPressed:{color:o.palette.themeDarker},rootDisabled:{color:o.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent",selectors:(a={},a[e.qJ]={color:"GrayText"},a)},rootChecked:{color:o.palette.black},iconChecked:{color:o.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:o.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:o.palette.neutralSecondary},textContainer:{flexGrow:0}};return(0,e.E$)(i,c,t)}))},2665:(o,t,r)=>{"use strict";r.d(t,{Q:()=>h});var e=r(655),n=r(6104),l=r(4669),a=r(2709),i=r(8525),c=r(5234),s=r(6233),u=r(7975),d=r(2311),p=r(3204),m=(0,s.NF)((function(o,t,r,n){var l,a,i,s,m,h,g,y,b,C,B,k,f,x,v=(0,u.W)(o),D=(0,d.W)(o),W=o.palette,w=o.semanticColors,P={root:[(0,c.GL)(o,{inset:2,highContrastStyle:{left:4,top:4,bottom:4,right:4,border:"none"},borderColor:"transparent"}),o.fonts.medium,{minWidth:"40px",backgroundColor:W.white,color:W.neutralPrimary,padding:"0 4px",border:"none",borderRadius:0,selectors:(l={},l[c.qJ]={border:"none"},l)}],rootHovered:{backgroundColor:W.neutralLighter,color:W.neutralDark,selectors:(a={},a[c.qJ]={color:"Highlight"},a["."+p.n.msButtonIcon]={color:W.themeDarkAlt},a["."+p.n.msButtonMenuIcon]={color:W.neutralPrimary},a)},rootPressed:{backgroundColor:W.neutralLight,color:W.neutralDark,selectors:(i={},i["."+p.n.msButtonIcon]={color:W.themeDark},i["."+p.n.msButtonMenuIcon]={color:W.neutralPrimary},i)},rootChecked:{backgroundColor:W.neutralLight,color:W.neutralDark,selectors:(s={},s["."+p.n.msButtonIcon]={color:W.themeDark},s["."+p.n.msButtonMenuIcon]={color:W.neutralPrimary},s)},rootCheckedHovered:{backgroundColor:W.neutralQuaternaryAlt,selectors:(m={},m["."+p.n.msButtonIcon]={color:W.themeDark},m["."+p.n.msButtonMenuIcon]={color:W.neutralPrimary},m)},rootExpanded:{backgroundColor:W.neutralLight,color:W.neutralDark,selectors:(h={},h["."+p.n.msButtonIcon]={color:W.themeDark},h["."+p.n.msButtonMenuIcon]={color:W.neutralPrimary},h)},rootExpandedHovered:{backgroundColor:W.neutralQuaternaryAlt},rootDisabled:{backgroundColor:W.white,selectors:(g={},g["."+p.n.msButtonIcon]={color:w.disabledBodySubtext,selectors:(y={},y[c.qJ]=(0,e.pi)({color:"GrayText"},(0,c.xM)()),y)},g[c.qJ]=(0,e.pi)({color:"GrayText",backgroundColor:"Window"},(0,c.xM)()),g)},splitButtonContainer:{height:"100%",selectors:(b={},b[c.qJ]={border:"none"},b)},splitButtonDividerDisabled:{selectors:(C={},C[c.qJ]={backgroundColor:"Window"},C)},splitButtonDivider:{backgroundColor:W.neutralTertiaryAlt},splitButtonMenuButton:{backgroundColor:W.white,border:"none",borderTopRightRadius:"0",borderBottomRightRadius:"0",color:W.neutralSecondary,selectors:{":hover":{backgroundColor:W.neutralLighter,color:W.neutralDark,selectors:(B={},B[c.qJ]={color:"Highlight"},B["."+p.n.msButtonIcon]={color:W.neutralPrimary},B)},":active":{backgroundColor:W.neutralLight,selectors:(k={},k["."+p.n.msButtonIcon]={color:W.neutralPrimary},k)}}},splitButtonMenuButtonDisabled:{backgroundColor:W.white,selectors:(f={},f[c.qJ]=(0,e.pi)({color:"GrayText",border:"none",backgroundColor:"Window"},(0,c.xM)()),f)},splitButtonMenuButtonChecked:{backgroundColor:W.neutralLight,color:W.neutralDark,selectors:{":hover":{backgroundColor:W.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:W.neutralLight,color:W.black,selectors:{":hover":{backgroundColor:W.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:W.neutralPrimary},splitButtonMenuIconDisabled:{color:W.neutralTertiary},label:{fontWeight:"normal"},icon:{color:W.themePrimary},menuIcon:(x={color:W.neutralSecondary},x[c.qJ]={color:"GrayText"},x)};return(0,c.E$)(v,D,P,t)})),h=function(o){function t(){return null!==o&&o.apply(this,arguments)||this}return(0,e.ZT)(t,o),t.prototype.render=function(){var o=this.props,t=o.styles,r=o.theme;return n.createElement(l.Y,(0,e.pi)({},this.props,{variantClassName:"ms-Button--commandBar",styles:m(r,t),onRenderDescription:a.S}))},(0,e.gn)([(0,i.a)("CommandBarButton",["theme","styles"],!0)],t)}(n.Component)},7171:(o,t,r)=>{"use strict";r.d(t,{M:()=>e});var e=r(1).K}}]);
//# sourceMappingURL=207.js.map