"use strict";(self.webpackChunktres_cruces_backend=self.webpackChunktres_cruces_backend||[]).push([[4680],{132:(T,M,_)=>{_.d(M,{S:()=>B});var s=_(19968),P=_(28724),n=_(70996),a=_(70544),d=_(48936),h=_(63358),C=_(14632),v=_(39380),D=_(69372);const B=({providers:E,displayAllProviders:r})=>{const{formatMessage:A}=(0,C.c)();return r?(0,s.jsx)(P.y,{gap:4,children:E.map(t=>(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(o,{provider:t})},t.uid))}):E.length>2&&!r?(0,s.jsxs)(P.y,{gap:4,children:[E.slice(0,2).map(t=>(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(o,{provider:t})},t.uid)),(0,s.jsx)(n.C,{col:4,children:(0,s.jsx)(a.o,{label:A({id:"global.see-more"}),children:(0,s.jsx)(i,{as:v.cH,to:"/auth/providers",children:(0,s.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,s.jsx)(l,{justifyContent:"center",children:E.map(t=>(0,s.jsx)(o,{provider:t},t.uid))})},l=(0,D.cp)(d.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:E})=>E.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:E})=>E.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }
`,o=({provider:E})=>(0,s.jsx)(a.o,{label:E.displayName,children:(0,s.jsx)(i,{href:`${window.strapi.backendURL}/admin/connect/${E.uid}`,children:E.icon?(0,s.jsx)("img",{src:E.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,s.jsx)(h.O,{children:E.displayName})})}),i=D.cp.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:E})=>E.colors.neutral150};
  border-radius: ${({theme:E})=>E.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:E})=>E.colors.neutral600};
`},34680:(T,M,_)=>{_.r(M),_.d(M,{FORMS:()=>m});var s=_(19968),P=_(48112),n=_(5e3),a=_(63358),d=_(48936),h=_(89296),C=_(35676),v=_(6912),D=_(5540),B=_(14632),l=_(49008),o=_(39380),i=_(69372),E=_(85816),r=_(132),A=_(16048),t=_(54320),g=_(5240),c=_(91892),j=_(36196),x=_(20880),f=_(21424),y=_(62552),S=_(70516),$=_(31812),e=_(18424),u=_(52540),F=_(21968),N=_(12132),z=_(48632),Z=_(85676),G=_(35184),J=_(99568),Y=_(96556),H=_(13192),Q=_(30840),V=_(77784),X=_(79371),p=_(67888),k=_(52600),w=_(95752),b=_(37388),q=_(61840),__=_(49108),s_=_(44632),E_=_(50840),t_=_(20252),n_=_(86432),a_=_(22612),d_=_(24808),O_=_(24024),o_=_(40960),M_=_(33656),P_=_(43280),D_=_(79804),l_=_(19632),i_=_(29576),r_=_(61152),h_=_(9589),C_=_(45488),v_=_(75516);const W=()=>{const{push:I}=(0,l.Uz)(),{formatMessage:O}=(0,B.c)(),{isLoading:R,data:U=[]}=(0,E.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),K=()=>{I("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!R&&U.length===0?(0,s.jsx)(l.YJ,{to:"/auth/login"}):(0,s.jsx)(E.U,{children:(0,s.jsxs)(P.G,{children:[(0,s.jsxs)(E.h,{children:[(0,s.jsxs)(E.C,{children:[(0,s.jsx)(E.i,{}),(0,s.jsx)(n.k,{paddingTop:6,paddingBottom:1,children:(0,s.jsx)(a.O,{as:"h1",variant:"alpha",children:O({id:"Auth.form.welcome.title"})})}),(0,s.jsx)(n.k,{paddingBottom:7,children:(0,s.jsx)(a.O,{variant:"epsilon",textColor:"neutral600",children:O({id:"Auth.login.sso.subtitle"})})})]}),(0,s.jsxs)(d.C,{direction:"column",alignItems:"stretch",gap:7,children:[R?(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(h.c,{children:O({id:"Auth.login.sso.loading"})})}):(0,s.jsx)(r.S,{providers:U}),(0,s.jsxs)(d.C,{children:[(0,s.jsx)(L,{}),(0,s.jsx)(n.k,{paddingLeft:3,paddingRight:3,children:(0,s.jsx)(a.O,{variant:"sigma",textColor:"neutral600",children:O({id:"or"})})}),(0,s.jsx)(L,{})]}),(0,s.jsx)(C.Z,{fullWidth:!0,size:"L",onClick:K,children:O({id:"Auth.form.button.login.strapi"})})]})]}),(0,s.jsx)(d.C,{justifyContent:"center",children:(0,s.jsx)(n.k,{paddingTop:4,children:(0,s.jsx)(D.c,{as:o.Af,to:"/auth/forgot-password",children:(0,s.jsx)(a.O,{variant:"pi",children:O({id:"Auth.link.forgot-password"})})})})})]})})},L=(0,i.cp)(v.c)`
  flex: 1;
`,m={providers:W}}}]);
