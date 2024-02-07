"use strict";(self.webpackChunktres_cruces_backend=self.webpackChunktres_cruces_backend||[]).push([[308],{80308:(Y,L,s)=>{s.d(L,{ProtectedEditPage:()=>$});var t=s(19968),c=s(62552),i=s(5e3),M=s(48936),m=s(63358),h=s(35676),B=s(28724),C=s(70996),A=s(62492),R=s(25352),I=s(48112),U=s(28464),T=s(42816),W=s(5540),n=s(16048),K=s(15396),f=s(31812),p=s(14632),j=s(49008),z=s(39380),x=s(52540),e=s(85816),Z=s(59784),Q=s(32944),os=s(54320),Es=s(5240),is=s(91892),rs=s(36196),ds=s(20880),es=s(21424),ls=s(70516),Ms=s(18424),Ps=s(21968),Os=s(12132),Ds=s(48632),ms=s(85676),hs=s(35184),Cs=s(99568),As=s(96556),Rs=s(13192),gs=s(30840),vs=s(77784),Ls=s(79371),cs=s(67888),Bs=s(52600),Is=s(95752),Us=s(37388),Ts=s(61840),Ws=s(49108),Ks=s(44632),fs=s(50840),js=s(20252),xs=s(86432),us=s(22612),ys=s(24808),ps=s(24024),Ss=s(40960),Fs=s(33656),Ns=s(43280),Js=s(79804),Vs=s(19632),Ys=s(29576),zs=s(61152),Zs=s(9589),Qs=s(45488),Gs=s(75516),Hs=s(56781),Xs=s(30680);const G=({disabled:o,role:a,values:O,errors:_,onChange:r,onBlur:g})=>{const{formatMessage:E}=(0,p.c)();return(0,t.jsx)(i.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.C,{justifyContent:"space-between",children:[(0,t.jsxs)(i.k,{children:[(0,t.jsx)(i.k,{children:(0,t.jsx)(m.O,{fontWeight:"bold",children:a?a.name:E({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(i.k,{children:(0,t.jsx)(m.O,{textColor:"neutral500",variant:"pi",children:a?a.description:E({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.Z,{disabled:!0,variant:"secondary",children:E({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(B.y,{gap:4,children:[(0,t.jsx)(C.C,{col:6,children:(0,t.jsx)(A.g,{disabled:o,name:"name",error:_.name&&E({id:_.name}),label:E({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:g,required:!0,value:O.name||""})}),(0,t.jsx)(C.C,{col:6,children:(0,t.jsx)(R.A,{disabled:o,label:E({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&E({id:_.name}),onChange:r,onBlur:g,children:O.description||""})})]})]})})},H=x.kt().shape({name:x.Qb().required(n.aO.required),description:x.Qb().optional()}),X=()=>{const o=(0,n.eo)(),{formatMessage:a}=(0,p.c)(),_=(0,j.SU)("/settings/roles/:id")?.params.id,r=c.useRef(null),{lockApp:g,unlockApp:E}=(0,n.H6)(),{trackUsage:b}=(0,n.m4)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:F}=(0,n.An)(),{isLoading:k,data:N}=(0,e.A)({role:_??""}),{roles:w,isLoading:J,refetch:q}=(0,Z.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(j.YJ,{to:"/settings/roles"});const ns=async(u,v)=>{try{g();const{permissionsToSend:D,didUpdateConditions:y}=r.current?.getPermissions()??{},d=await _s({id:_,...u});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?v.setErrors(F(d.error)):o({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&D){const l=await as({id:d.data.id,permissions:D});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?v.setErrors(F(l.error)):o({type:"warning",message:S(l.error)});return}y&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),o({type:"success",message:{id:"notification.success.saved"}})}catch{o({type:"warning",message:{id:"notification.error"}})}finally{E()}},V=!J&&P.code==="strapi-super-admin";return(0,t.jsxs)(I.G,{children:[(0,t.jsx)(n.K8,{name:"Roles"}),(0,t.jsx)(f.QJ,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:ns,validationSchema:H,validateOnChange:!1,children:({handleSubmit:u,values:v,errors:D,handleChange:y,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(U.a,{primaryAction:(0,t.jsx)(M.C,{gap:2,children:(0,t.jsx)(h.Z,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.c,{as:z.Af,startIcon:(0,t.jsx)(K.c,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.S,{children:(0,t.jsxs)(M.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(G,{disabled:V,errors:D,values:v,onChange:y,onBlur:d,role:P}),!k&&!J&&!ts&&N?(0,t.jsx)(i.k,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(Q.P,{isFormDisabled:V,permissions:ss,ref:r,layout:N})}):(0,t.jsx)(i.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(n.Wm,{})})]})})]})})]})},$=()=>{const o=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:O,canUpdate:_}}=(0,n.aU)(o);return a?(0,t.jsx)(n.Wm,{}):!O&&!_?(0,t.jsx)(j.YJ,{to:"/"}):(0,t.jsx)(X,{})}},59784:(Y,L,s)=>{s.d(L,{u:()=>m});var t=s(62552),c=s(16048),i=s(14632),M=s(85816);const m=(h={},B)=>{const{locale:C}=(0,i.c)(),A=(0,c.In)(C,{sensitivity:"base"}),{data:R,error:I,isError:U,isLoading:T,refetch:W}=(0,M.z)(h,B);return{roles:t.useMemo(()=>[...R??[]].sort((K,f)=>A.compare(K.name,f.name)),[R,A]),error:I,isError:U,isLoading:T,refetch:W}}}}]);
