"use strict";(()=>{var u=(i,o)=>({...o.customSettings[i]});self.createWindicssCompiler=()=>async(i,{config:o,options:y})=>{let l=`<template>${y.html}
<script>${o.script.content}<\/script></template>`,n=u("windicss",o),{Processor:f,HTMLParser:h,CSSParser:b}=self.windicss,r=new f;r.loadConfig(n);let p=new h(l),a;if(n.attributify){let s=e=>Array.isArray(e)?e:[e],c=p.parseAttrs().reduceRight((e,m)=>{let t=m.key;if(t==="class"||t==="className")return e;let g=s(m.value);if(t in e){let C=s(e[t]);e[t]=[...C,...g]}else e[t]=g;return e},{});a=r.attributify(c).styleSheet}else{let s=p.parseClasses().map(c=>c.result).join(" ");a=r.interpret(s).styleSheet}let w=n.preflight!==!1,x=n.preflight!==!1,v=n.preflight!==!1,k=r.preflight(l,w,x,v),T=new b(i,r).parse(),d=!0;return T.extend(k,!d).extend(a,d).build(!1)};})();