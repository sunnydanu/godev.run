"use strict";(()=>{var et=Object.create;var Y=Object.defineProperty;var tt=Object.getOwnPropertyDescriptor;var rt=Object.getOwnPropertyNames;var st=Object.getPrototypeOf,ot=Object.prototype.hasOwnProperty;var nt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var it=(e,t,n,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let d of rt(t))!ot.call(e,d)&&d!==n&&Y(e,d,{get:()=>t[d],enumerable:!(u=tt(t,d))||u.enumerable});return e};var at=(e,t,n)=>(n=e!=null?et(st(e)):{},it(t||!e||!e.__esModule?Y(n,"default",{value:e,enumerable:!0}):n,e));var Ke=nt((jg,D)=>{var vr=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",u={};function d(s,o){if(!u[s]){u[s]={};for(var l=0;l<s.length;l++)u[s][s.charAt(l)]=l}return u[s][o]}var h={compressToBase64:function(s){if(s==null)return"";var o=h._compress(s,6,function(l){return t.charAt(l)});switch(o.length%4){default:case 0:return o;case 1:return o+"===";case 2:return o+"==";case 3:return o+"="}},decompressFromBase64:function(s){return s==null?"":s==""?null:h._decompress(s.length,32,function(o){return d(t,s.charAt(o))})},compressToUTF16:function(s){return s==null?"":h._compress(s,15,function(o){return e(o+32)})+" "},decompressFromUTF16:function(s){return s==null?"":s==""?null:h._decompress(s.length,16384,function(o){return s.charCodeAt(o)-32})},compressToUint8Array:function(s){for(var o=h.compress(s),l=new Uint8Array(o.length*2),i=0,m=o.length;i<m;i++){var w=o.charCodeAt(i);l[i*2]=w>>>8,l[i*2+1]=w%256}return l},decompressFromUint8Array:function(s){if(s==null)return h.decompress(s);for(var o=new Array(s.length/2),l=0,i=o.length;l<i;l++)o[l]=s[l*2]*256+s[l*2+1];var m=[];return o.forEach(function(w){m.push(e(w))}),h.decompress(m.join(""))},compressToEncodedURIComponent:function(s){return s==null?"":h._compress(s,6,function(o){return n.charAt(o)})},decompressFromEncodedURIComponent:function(s){return s==null?"":s==""?null:(s=s.replace(/ /g,"+"),h._decompress(s.length,32,function(o){return d(n,s.charAt(o))}))},compress:function(s){return h._compress(s,16,function(o){return e(o)})},_compress:function(s,o,l){if(s==null)return"";var i,m,w={},L={},C="",U="",S="",v=2,T=3,x=2,b=[],c=0,p=0,j;for(j=0;j<s.length;j+=1)if(C=s.charAt(j),Object.prototype.hasOwnProperty.call(w,C)||(w[C]=T++,L[C]=!0),U=S+C,Object.prototype.hasOwnProperty.call(w,U))S=U;else{if(Object.prototype.hasOwnProperty.call(L,S)){if(S.charCodeAt(0)<256){for(i=0;i<x;i++)c=c<<1,p==o-1?(p=0,b.push(l(c)),c=0):p++;for(m=S.charCodeAt(0),i=0;i<8;i++)c=c<<1|m&1,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=m>>1}else{for(m=1,i=0;i<x;i++)c=c<<1|m,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=0;for(m=S.charCodeAt(0),i=0;i<16;i++)c=c<<1|m&1,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=m>>1}v--,v==0&&(v=Math.pow(2,x),x++),delete L[S]}else for(m=w[S],i=0;i<x;i++)c=c<<1|m&1,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=m>>1;v--,v==0&&(v=Math.pow(2,x),x++),w[U]=T++,S=String(C)}if(S!==""){if(Object.prototype.hasOwnProperty.call(L,S)){if(S.charCodeAt(0)<256){for(i=0;i<x;i++)c=c<<1,p==o-1?(p=0,b.push(l(c)),c=0):p++;for(m=S.charCodeAt(0),i=0;i<8;i++)c=c<<1|m&1,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=m>>1}else{for(m=1,i=0;i<x;i++)c=c<<1|m,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=0;for(m=S.charCodeAt(0),i=0;i<16;i++)c=c<<1|m&1,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=m>>1}v--,v==0&&(v=Math.pow(2,x),x++),delete L[S]}else for(m=w[S],i=0;i<x;i++)c=c<<1|m&1,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=m>>1;v--,v==0&&(v=Math.pow(2,x),x++)}for(m=2,i=0;i<x;i++)c=c<<1|m&1,p==o-1?(p=0,b.push(l(c)),c=0):p++,m=m>>1;for(;;)if(c=c<<1,p==o-1){b.push(l(c));break}else p++;return b.join("")},decompress:function(s){return s==null?"":s==""?null:h._decompress(s.length,32768,function(o){return s.charCodeAt(o)})},_decompress:function(s,o,l){var i=[],m,w=4,L=4,C=3,U="",S=[],v,T,x,b,c,p,j,g={val:l(0),position:o,index:1};for(v=0;v<3;v+=1)i[v]=v;for(x=0,c=Math.pow(2,2),p=1;p!=c;)b=g.val&g.position,g.position>>=1,g.position==0&&(g.position=o,g.val=l(g.index++)),x|=(b>0?1:0)*p,p<<=1;switch(m=x){case 0:for(x=0,c=Math.pow(2,8),p=1;p!=c;)b=g.val&g.position,g.position>>=1,g.position==0&&(g.position=o,g.val=l(g.index++)),x|=(b>0?1:0)*p,p<<=1;j=e(x);break;case 1:for(x=0,c=Math.pow(2,16),p=1;p!=c;)b=g.val&g.position,g.position>>=1,g.position==0&&(g.position=o,g.val=l(g.index++)),x|=(b>0?1:0)*p,p<<=1;j=e(x);break;case 2:return""}for(i[3]=j,T=j,S.push(j);;){if(g.index>s)return"";for(x=0,c=Math.pow(2,C),p=1;p!=c;)b=g.val&g.position,g.position>>=1,g.position==0&&(g.position=o,g.val=l(g.index++)),x|=(b>0?1:0)*p,p<<=1;switch(j=x){case 0:for(x=0,c=Math.pow(2,8),p=1;p!=c;)b=g.val&g.position,g.position>>=1,g.position==0&&(g.position=o,g.val=l(g.index++)),x|=(b>0?1:0)*p,p<<=1;i[L++]=e(x),j=L-1,w--;break;case 1:for(x=0,c=Math.pow(2,16),p=1;p!=c;)b=g.val&g.position,g.position>>=1,g.position==0&&(g.position=o,g.val=l(g.index++)),x|=(b>0?1:0)*p,p<<=1;i[L++]=e(x),j=L-1,w--;break;case 2:return S.join("")}if(w==0&&(w=Math.pow(2,C),C++),i[j])U=i[j];else if(j===L)U=T+T.charAt(0);else return null;S.push(U),i[L++]=T+U.charAt(0),w--,T=U,w==0&&(w=Math.pow(2,C),C++)}}};return h}();typeof D<"u"&&D!=null&&(D.exports=vr)});var te=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],re=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],se=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],P={getModuleUrl:(e,{isModule:t=!0,defaultCDN:n="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let u=ee(e,t,n);return u||(t?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:ee(e,!1,t||oe())||e,cdnLists:{npm:re,module:te,gh:se},checkCDNs:async(e,t)=>{let n=[t,...P.cdnLists.npm].filter(Boolean);for(let u of n)try{if((await fetch(P.getUrl(e,u),{method:"HEAD"})).ok)return u}catch{}return P.cdnLists.npm[0]}},oe=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||P.cdnLists.npm[0]}catch{return P.cdnLists.npm[0]}},ee=(e,t,n)=>{let u=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",se[0]):e.includes(":")||(e=(n||(t?te[0]:re[0]))+":"+e);for(let d of ct){let[h,s]=d;if(h.test(e))return e.replace(h,s)+u}return null},ct=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:y,getModuleUrl:Tr}=P,a=y("@live-codes/browser-compilers@0.15.1/dist/");var ne=y("art-template@4.13.2/lib/template-web.js");var ie=y("@assemblyscript/loader@0.27.29/umd/index.js");var ae=y("@hatemhosny/astro-internal@0.0.4/");var ce=y("@babel/standalone@7.24.8/babel.js");var N=y("brython@3.12.4/");var $=y("cherry-cljs@0.2.19/");var H=y("@live-codes/clio-browser-compiler@0.0.3/public/build/");var pe=y("dot@1.1.3/doT.js"),le=y("ejs@3.1.10/ejs.js");var me=y("eta@3.4.0/dist/eta.umd.js");var E=y("@live-codes/go2js@0.5.0/build/");var z=y("handlebars@4.7.8/dist/");var J=y("imba@2.0.0-alpha.229/dist/");var ue=y("liquidjs@10.14.0/dist/liquid.browser.min.js");var ge=y("malinajs@0.7.19/"),de=y("marked@13.0.2/marked.min.js");var fe=y("mjml-browser@4.15.3/lib/index.js");var ye=y("mustache@4.2.0/mustache.js");var K=y("nunjucks@3.2.4/browser/"),B=y("https://cdn.opalrb.com/opal/1.8.2/"),he=y("parinfer@3.13.1/parinfer.js");var xe=y("@live-codes/postcss-import-url@0.1.2/dist/postcss-import-url.js"),_=y("prettier@3.3.2/"),be=y("@prettier/plugin-php@0.22.2/standalone.js");var G=y("riot@9.2.2/");var V=y("sql-formatter@12.2.1/dist/sql-formatter.min.js"),we=y("sql.js@1.10.3/dist/"),A=y("squint-cljs@0.4.81/"),Se=y("@stencil/core@3.2.2/compiler/stencil.js");var W=y("https://unpkg.com/svelte@4.0.0/src/runtime/internal/");var ve=y("@mhsdesign/jit-browser-tailwindcss@0.4.1/dist/cdn.min.js");var je=y("twig@1.17.1/twig.min.js"),Le=y("typescript@5.5.3/lib/typescript.js");var Ce=y("uniter@2.18.0/dist/uniter.js");var Z=y("vue@2"),Ue=y("vue@3.4.31/dist/vue.runtime.esm-browser.prod.js"),Pe=y("livecodes@0.6.0/vue.js"),ke=y("vue3-sfc-loader@0.9.5/dist/");var I=(e,t=!0)=>e.replace(/\\/g,t?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var Te=e=>!e?.startsWith("http")&&!e?.startsWith("data:"),_e=(e,t=document.baseURI)=>Te(e)?new URL(e,t).href:e;var f=(e,t)=>({...t.customSettings[e]});var Ee={name:"lightningcss",title:"Lightning CSS",isPostcssPlugin:!1,compiler:{url:a+"lightningcss/lightningcss.js",factory:(e,t)=>(self.importScripts(t+"processor-lightningcss-compiler.e35e5c922220c318e676d589685c7e96.js"),self.createLightningcssCompiler())},editor:"style"};var Ae={name:"postcss",title:"Processors:",isPostcssPlugin:!1,compiler:{url:a+"postcss/postcss.js",factory:(e,t)=>(self.importScripts(t+"waiting"),self.createPostcssCompiler())},editor:"style",hidden:!0};var Me={name:"autoprefixer",title:"Autoprefixer",isPostcssPlugin:!0,compiler:{url:a+"autoprefixer/autoprefixer.js",factory:e=>self.autoprefixer.autoprefixer({...f("autoprefixer",e)})},editor:"style"},Be={name:"cssnano",title:"cssnano",isPostcssPlugin:!0,compiler:{url:a+"cssnano/cssnano.js",factory:()=>{let e=self.cssnano.cssnanoPresetDefault().plugins,t=[];for(let n of e){let[u,d]=n;(typeof d>"u"||typeof d=="object"&&!d.exclude||typeof d=="boolean"&&d===!0)&&t.push(u(d))}return t}},editor:"style"},Ie={name:"postcssImportUrl",title:"Import Url",isPostcssPlugin:!0,compiler:{url:xe,factory:e=>self.postcssImportUrl({...f("postcssImportUrl",e)})},editor:"style"},Re={name:"postcssPresetEnv",title:"Preset Env",isPostcssPlugin:!0,compiler:{url:a+"postcss-preset-env/postcss-preset-env.js",factory:e=>self.postcssPresetEnv.postcssPresetEnv({autoprefixer:!1,...f("postcssPresetEnv",e)})},editor:"style"},qe={name:"purgecss",title:"PurgeCSS",isPostcssPlugin:!0,needsHTML:!0,compiler:{url:a+"purgecss/purgecss.js",factory:(e,t,n)=>self.purgecss.purgecss({...f("purgecss",e),content:[{raw:`<template>${n.html}
<script>${e.script.content}<\/script></template>`,extension:"html"}]})},editor:"style"},$e={name:"tokencss",title:"Token CSS",isPostcssPlugin:!0,compiler:{url:a+"tokencss/tokencss.js",factory:e=>{let t=f("tokencss",e);Object.keys(t).length===0&&(t.$schema="https://tokencss.com/schema@0.0.1",t.extends="@tokencss/core/preset");let n=(d,h)=>{let s=JSON.parse(JSON.stringify(d));return Object.keys(h).forEach(o=>{s[o]=typeof h[o]!="object"||Array.isArray(h[o])?h[o]:{...s[o],...h[o]}}),s},u=t.extends?.includes("@tokencss/core/preset")?n(self.tokencss.preset,t):t;return self.tokencss.tokencss({config:u})}},editor:"style"},We={name:"cssmodules",title:"CSS Modules",isPostcssPlugin:!0,needsHTML:!0,compiler:{url:a+"postcss-modules/postcss-modules.js",factory:(e,t,n)=>{let u=f("cssmodules",e);return self.postcssModules.postcssModules({localsConvention:"camelCase",...u,getJSON(d,h,s){let o=u.addClassesToHTML!==!1,l=u.removeOriginalClasses===!0;o&&(n.html=self.postcssModules.addClassesToHtml(n.html,h,l)),n.compileInfo={...n.compileInfo,cssModules:h,...o?{modifiedHTML:n.html}:{}}}})}},editor:"style"};var Oe={name:"tailwindcss",title:"Tailwind CSS",isPostcssPlugin:!1,needsHTML:!0,compiler:{url:ve,factory:(e,t)=>(self.importScripts(t+"processor-tailwindcss-compiler.1eed41eeefd084170870830cf8572ac4.js"),self.createTailwindcssCompiler())},editor:"style"};var Fe={name:"unocss",title:"UnoCSS",isPostcssPlugin:!1,needsHTML:!0,compiler:{url:a+"unocss/unocss.js",factory:(e,t)=>(self.importScripts(t+"processor-unocss-compiler.a319a53d995a97d28a33023d29b77d23.js"),self.createUnocssCompiler())},editor:"style"};var De={name:"windicss",title:"Windi CSS",isPostcssPlugin:!1,needsHTML:!0,compiler:{url:a+"windicss/windicss.js",factory:(e,t)=>(self.importScripts(t+"processor-windicss-compiler.82d6801293862e0a725e7e2c0d7bf42c.js"),self.createWindicssCompiler())},editor:"style"};var k=[Oe,De,Fe,$e,qe,Ie,Me,Re,Ee,Be,We,Ae];var O=(e,t)=>k.map(n=>n.name).includes(e)?t.languages?t.languages.includes(e):!0:!1;var Cs=_+"standalone.js",r={babel:_+"plugins/babel.js",estree:_+"plugins/estree.js",glimmer:_+"plugins/glimmer.js",html:_+"plugins/html.js",markdown:_+"plugins/markdown.js",postcss:_+"plugins/postcss.js",php:be,pug:a+"prettier/parser-pug.js"};var pt={name:"babel",title:"Babel",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{url:ce,factory:()=>async(e,{config:t})=>window.Babel.transform(e,{filename:"script.tsx",presets:[["env",{modules:!1}],"typescript","react"],...f("babel",t)}).code},extensions:["es","babel"],editor:"script",editorLanguage:"typescript"};var lt={name:"css",title:"CSS",info:!1,parser:{name:"css",pluginUrls:[r.postcss]},compiler:{factory:()=>async e=>e},extensions:["css"],editor:"style"};var mt={name:"haml",title:"Haml",compiler:{url:a+"clientside-haml-js/haml.js",factory:(e,t)=>(self.importScripts(t+"lang-haml-compiler.5bc2e8be54f83d47a313c42383c28985.js"),self.createHamlCompiler())},extensions:["haml"],editor:"markup"};var ut={name:"html",title:"HTML",info:!1,parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:()=>async e=>e},extensions:["html","htm"],editor:"markup"};var gt={name:"javascript",title:"JS",longTitle:"JavaScript",info:!1,parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{factory:()=>async e=>e},extensions:["js"],editor:"script"};var dt={name:"jsx",title:"JSX",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:"typescript",extensions:["jsx"],editor:"script",editorLanguage:"javascript"};var ft={name:"tsx",title:"TSX",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:"typescript",extensions:["tsx"],editor:"script",editorLanguage:"typescript"};var yt={name:"less",title:"Less",parser:{name:"less",pluginUrls:[r.postcss]},compiler:{url:a+"less/less.js",factory:()=>async(e,{config:t})=>(await window.less.render(e,{...f("less",t)})).css},extensions:["less"],editor:"style"};var ht={name:"markdown",title:"Markdown",parser:{name:"markdown",pluginUrls:[r.markdown,r.html]},compiler:{url:de,factory:()=>async(e,{config:t})=>window.marked.parse(e,{...f("markdown",t)})},extensions:["md","markdown","mdown","mkdn"],editor:"markup"};var R=e=>typeof e=="string"?{code:e,info:{}}:e;var M=async(e,t,n,u={},d=self)=>new Promise(h=>{if(!e||!t||!n)return h(R(""));let s=async function(o){let l=o.data.payload;o.data.trigger==="compileInCompiler"&&l?.content===e&&l?.language===t&&(d.removeEventListener("message",s),h(R(l.compiled)))};d.addEventListener("message",s),d.postMessage({type:"compileInCompiler",payload:{content:e,language:t,config:n,options:u}})});var xt=async(e,{config:t,worker:n})=>new Promise(async u=>{if(!e)return u("");let[d,{default:h}]=await Promise.all([import(a+"mdx/mdx.js"),import(a+"remark-gfm/remark-gfm.js")]),s=(await d.compile(e,{remarkPlugins:[h],...f("mdx",t)})).value,l=(w=>w.replace(/, {[^}]*} = _components/g,"").replace(/const {[^:]*} = props.components[^;]*;/g,""))(s),i=`import React from "react";
import { createRoot } from "react-dom/client";
${I(l,!1)}
createRoot(document.querySelector('#__livecodes_mdx_root__')).render(<MDXContent />,);
`,m=(await M(i,"jsx",t,{},n)).code;u(`<div id="__livecodes_mdx_root__"></div><script type="module">${m}<\/script>`)}),bt={name:"mdx",title:"MDX",parser:{name:"markdown",pluginUrls:[r.markdown,r.html]},compiler:{factory:()=>async e=>e,runOutsideWorker:xt,compiledCodeLanguage:"javascript"},extensions:["mdx"],editor:"markup",editorLanguage:"markdown"};var wt={name:"pug",title:"Pug",compiler:{url:a+"pug/pug.min.js",factory:(e,t)=>(self.importScripts(t+"lang-pug-compiler.61645362532461bc77195784b673d3fd.js"),self.createPugCompiler())},extensions:["pug","jade"],editor:"markup"};var St={name:"scss",title:"SCSS",parser:{name:"scss",pluginUrls:[r.postcss]},compiler:{url:a+"sass/sass.js",factory:(e,t)=>(self.importScripts(t+"lang-scss-compiler.ac13da17a1e57a821af4f4f0ccfb577a.js"),self.createScssCompiler())},extensions:["scss"],editor:"style"};var vt={name:"svelte",title:"Svelte",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:a+"svelte/svelte-compiler.min.js",factory:(e,t)=>(self.importScripts(t+"lang-svelte-compiler.7f30598ddb732cd2a92d2505743ce689.js"),self.createSvelteCompiler()),imports:{svelte:W+"index.js","svelte/internal":W+"index.js","svelte/internal/disclose-version":W+"disclose-version/index.js"}},extensions:["svelte"],editor:"script",editorLanguage:"html"};var jt={name:"stylus",title:"Stylus",compiler:{url:a+"stylus/stylus.min.js",factory:()=>async e=>window.stylus.render(e)},extensions:["styl"],editor:"style"};var Lt=(e,t)=>{let n={...f("typescript",t),...f(t.script.language,t)};return!!(n.jsx||n.jsxFactory||new RegExp(/\/\*\*[\s\*]*@jsx\s/g).test(e))},Q={target:"es2020",jsx:"react",allowUmdGlobalAccess:!0,esModuleInterop:!0},Ct={name:"typescript",title:"TS",longTitle:"TypeScript",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:{url:Le,factory:()=>async(e,{config:t})=>window.ts.transpile(e,{...Q,...["jsx","tsx"].includes(t.script.language)&&!Lt(e,t)?{jsx:"react-jsx"}:{},...f("typescript",t),...f(t.script.language,t)})},extensions:["ts","typescript"],editor:"script"};var Ut=a+"vue-compiler-sfc/vue-compiler-sfc.js",Pt={name:"vue",title:"Vue 3",longTitle:"Vue 3 SFC",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:Ut,factory:(e,t)=>(self.importScripts(t+"lang-vue-compiler.ad1020a10efc1ce9b2273283b9394c39.js"),self.createVueCompiler()),imports:{vue:Ue,"livecodes/vue":Pe}},extensions:["vue","vue3"],editor:"script",editorLanguage:"html"};var kt=ke+"vue2-sfc-loader.js",Tt={name:"vue2",title:"Vue 2",longTitle:"Vue 2 SFC",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-vue2-compiler.c67393b263395a2e99211b1cd558d101.js"),self.createVue2Compiler()),scripts:[Z,kt],imports:{vue:Z+"/dist/vue.runtime.esm-browser.prod.js"}},extensions:["vue2"],editor:"script",editorLanguage:"html"};var _t={name:"stencil",title:"Stencil",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:{url:Se,factory:()=>async(e,{config:t})=>(await window.stencil.transpile(e,{sourceMap:!1,target:"es2019",...f("stencil",t)})).code,types:{"@stencil/core":{url:a+"types/stencil-core.d.ts",declareAsModule:!1}}},extensions:["stencil.tsx"],editor:"script",editorLanguage:"typescript"};var Et={name:"livescript",title:"LiveScript",compiler:{url:a+"livescript/livescript-min.js",factory:()=>async(e,{config:t})=>window.require("livescript").compile(e,{bare:!0,...f("livescript",t)}),scripts:[a+"livescript/prelude-browser-min.js"]},extensions:["ls"],editor:"script"};var At=a+"assemblyscript/assemblyscript.js",Mt={name:"assemblyscript",title:"AS",longTitle:"AssemblyScript",parser:{name:"babel-ts",pluginUrls:[r.babel]},compiler:{url:At,factory:(e,t)=>(self.importScripts(t+"lang-assemblyscript-compiler.1039a925cf9fb9fe2607c8ba70b58745.js"),self.createAssemblyscriptCompiler()),scripts:({baseUrl:e})=>[ie,e+"lang-assemblyscript-script.c67aa66c1862e6d0289ba8fdb284d511.js"],scriptType:"application/wasm-uint8",compiledCodeLanguage:"wat",types:{assemblyscript:{url:a+"types/assemblyscript.d.ts",declareAsModule:!1,autoload:!0}}},extensions:["as","ts"],editor:"script",editorLanguage:"typescript"};var An=N+"brython.min.js",Mn=N+"brython_stdlib.js";var Bt=(e,t={})=>Array.from(new Set([...e.matchAll(new RegExp(/^\s*self\.\$require\("(\S+)"\);/gm))].map(n=>n[1]).map(n=>n.split("/")[0]).filter(n=>t.hasOwnProperty(n)||n!=="opal").map(n=>t[n]||`${B+n}.min.js`))),It={name:"ruby",title:"Ruby",compiler:{url:B+"opal.min.js",factory:()=>(importScripts(B+"opal-parser.min.js"),self.Opal.config.unsupported_features_severity="ignore",self.Opal.load("opal-parser"),async(e,{config:t})=>{let{autoloadStdlib:n,requireMap:u,...d}=f("ruby",t),h=e.includes("$0")?`$0 = __FILE__
`:"";return self.Opal.compile(h+e,d)}),scripts:({compiled:e,config:t})=>{let{autoloadStdlib:n,requireMap:u}=f("ruby",t),d=Bt(e,u),h=n!==!1?d:[];return[B+"opal.min.js",...h]}},extensions:["rb"],editor:"script"};var Rt={name:"php",title:"PHP",parser:{name:"php",pluginUrls:[r.php]},compiler:{factory:()=>async e=>(e=e.trim(),e.startsWith("<?php")&&(e=e.replace("<?php","/* <?php */"),e.endsWith("?>")&&(e=e.replace("?>","/* ?> */"))),e),scripts:[Ce],deferScripts:!0,scriptType:"text/x-uniter-php",compiledCodeLanguage:"php"},extensions:["php"],editor:"script"};var Xn=a+"lua-fmt/lua-fmt.js";var F=()=>{let e=he;return self.importScripts(e),async t=>({formatted:window.parinfer.parenMode(t).text,cursorOffset:0})};var qt={name:"solid",title:"Solid",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["babel"],url:a+"babel-preset-solid/babel-preset-solid.js",factory:(e,t)=>(self.importScripts(t+"lang-solid-compiler.b01f053a6f6dc7d8f332b1eb9fff6712.js"),self.createSolidCompiler())},extensions:["solid.jsx"],editor:"script",editorLanguage:"javascript"};var $t={name:"solid.tsx",title:"Solid (TS)",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:"solid",extensions:["solid.tsx"],editor:"script",editorLanguage:"typescript"};var Wt={name:"liquid",title:"Liquid",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:ue,factory:(e,t)=>(self.importScripts(t+"lang-liquid-compiler.e088f3b663fb6a0f13d791b9324ea7ae.js"),self.createLiquidCompiler())},extensions:["liquid","liquidjs"],editor:"markup",editorLanguage:"html"};var Ot={name:"ejs",title:"EJS",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:le,factory:(e,t)=>(self.importScripts(t+"lang-ejs-compiler.3e039adc1abcfbfe1702efcd1f0d8e51.js"),self.createEjsCompiler())},extensions:["ejs"],editor:"markup",editorLanguage:"html"};var Ft=z+"handlebars.min.js",Ri=z+"handlebars.runtime.min.js",Dt={name:"handlebars",title:"Handlebars",parser:{name:"glimmer",pluginUrls:[r.glimmer]},compiler:{url:Ft,factory:(e,t)=>(self.importScripts(t+"lang-handlebars-compiler.a701b9cc14705fbccc35cca982c0da4c.js"),self.createHandlebarsCompiler())},extensions:["hbs","handlebars"],editor:"markup",editorLanguage:"html"};var Nt={name:"dot",title:"doT",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:pe,factory:(e,t)=>(self.importScripts(t+"lang-dot-compiler.a921d35382a0511228d1ea6dcd906f70.js"),self.createDotCompiler())},extensions:["dot"],editor:"markup",editorLanguage:"html"};var Ht=K+"nunjucks.min.js",Ki=K+"nunjucks-slim.min.js",zt={name:"nunjucks",title:"Nunjucks",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:Ht,factory:(e,t)=>(self.importScripts(t+"lang-nunjucks-compiler.6f83eaee89d96c2566e8cd5fd05a9c4b.js"),self.createNunjucksCompiler())},extensions:["njk","nunjucks"],editor:"markup",editorLanguage:"html"};var Jt={name:"go",title:"Go",formatter:{factory:()=>(importScripts(E+"go2js-format.js"),async e=>{if(!e)return{formatted:"",cursorOffset:0};let[t,n]=globalThis.go2jsFormat(e);return n?(console.error(n),{formatted:e,cursorOffset:0}):{formatted:t,cursorOffset:0}})},compiler:{url:E+"go2js-compile.js",factory:()=>e=>new Promise(t=>{if(!e){t("");return}let n=E.endsWith("/")?E.slice(0,-1):E;globalThis.go2jsCompile(e,n,(u,d)=>{u?(console.error(u),t("")):t(d)})})},extensions:["go","golang"],editor:"script"};var da=a+"wast-refmt/wast-refmt.js";var Kt=G+"riot+compiler.min.js",Gt=G+"riot.min.js",Vt={name:"riot",title:"Riot.js",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:Kt,factory:(e,t)=>(self.importScripts(t+"lang-riot-compiler.b56d8e15d8a4aed600325f0a6a8d87a0.js"),self.createRiotCompiler()),scripts:[Gt],scriptType:"module"},extensions:["riot","riotjs"],editor:"script",editorLanguage:"html"};var Zt="application/json",Qt={name:"sql",title:"SQL",formatter:{factory:()=>(importScripts(V),async e=>({formatted:await self.sqlFormatter.format(e,{linesBetweenQueries:2}),cursorOffset:0}))},compiler:{url:we+"sql-wasm.js",factory:(e,t)=>(self.importScripts(t+"lang-sql-compiler.36210d258d8ebe1f384b0763607a631e.js"),self.createSqlCompiler()),scripts:({baseUrl:e})=>[e+"lang-sql-script.1715eef63a04ecb337bf32b87c5171e8.js"],scriptType:Zt,compiledCodeLanguage:"json"},extensions:["sql","sqlite","sqlite3"],editor:"script"};var ze=a+"react-native-web/react-native-web.js",Xt={name:"react-native",title:"RN",longTitle:"React Native",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{dependencies:["typescript"],factory:()=>async(e,{config:t,language:n})=>window.ts.transpile(e,{...Q,jsx:"react-jsx",...f("typescript",t),...f(n,t)}),imports:{react:ze,"react-native":ze}},extensions:["react-native.jsx"],editor:"script",editorLanguage:"javascript"};var Yt={name:"react-native-tsx",title:"RN (TSX)",longTitle:"React Native (TSX)",parser:{name:"babel-ts",pluginUrls:[r.babel,r.html]},compiler:"react-native",extensions:["react-native.tsx"],editor:"script",editorLanguage:"typescript"};var er={name:"twig",title:"Twig",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:je,factory:(e,t)=>(self.importScripts(t+"lang-twig-compiler.57a1501862cc22e0a5a2817ca825145a.js"),self.createTwigCompiler())},extensions:["twig"],editor:"markup",editorLanguage:"html"};var tr=ae+"compiler.min.js",rr={name:"astro",title:"Astro",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{url:tr,factory:(e,t)=>(self.importScripts(t+"lang-astro-compiler.b507554373c40d5925827a6f1afb52ed.js"),self.createAstroCompiler())},extensions:["astro"],editor:"markup"};var sr={name:"malina",title:"Malina.js",parser:{name:"html",pluginUrls:[r.html,r.babel]},compiler:{factory:(e,t)=>(self.importScripts(t+"lang-malina-compiler.45e3c5e150bcce20ed699413d2f3a54a.js"),self.createMalinaCompiler()),imports:{"malinajs/runtime.js":`${ge}runtime.js`}},extensions:["xht"],editor:"script",editorLanguage:"html"};var rc=a+"jscpp/JSCPP.es5.min.js";var or={name:"clio",title:"Clio",compiler:{url:H+"compile.js",factory:(e,t)=>(self.importScripts(t+"lang-clio-compiler.d117a5504ca87fc297b5c61693192c18.js"),self.createClioCompiler()),scripts:[H+"exec.js"]},extensions:["clio"],editor:"script",editorLanguage:"coffeescript"};var nr=async(e,{baseUrl:t,config:n})=>{let{diagramsCompiler:u}=await import(t+"lang-diagrams-compiler-esm.08e65caaca07de1f5eb5daf0afbb5fcf.js");return u(e,{config:n})},ir={name:"diagrams",title:"Diagrams",parser:{name:"html",pluginUrls:[r.html]},compiler:{factory:()=>async e=>e||"",runOutsideWorker:nr},extensions:["diagrams","diagram","graph","plt"],editor:"markup",editorLanguage:"html"};var ar={name:"imba",title:"Imba",compiler:{url:J+"compiler.js",factory:(e,t)=>(self.importScripts(t+"lang-imba-compiler.c5c7b69434893c97f82c4b3e8be7af1e.js"),self.createImbaCompiler()),imports:{imba:J+"imba.mjs"}},extensions:["imba"],editor:"script"};var cr={name:"mustache",title:"Mustache",parser:{name:"glimmer",pluginUrls:[r.glimmer]},compiler:{url:ye,factory:(e,t)=>(self.importScripts(t+"lang-mustache-compiler.78144520514b7bdfb1fad331e5297b89.js"),self.createMustacheCompiler())},extensions:["mustache"],editor:"markup",editorLanguage:"html"};var pr={name:"art-template",title:"art",longTitle:"art-template",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:ne,factory:(e,t)=>(self.importScripts(t+"lang-art-template-compiler.d56491beec7ff72cb0f40a47ee57b8cb.js"),self.createArtTemplateCompiler())},extensions:["art","art-template"],editor:"markup",editorLanguage:"html"};var Qc=a+"civet/civet.js";var mr={name:"flow",title:"Flow",parser:{name:"babel-flow",pluginUrls:[r.babel,r.html]},compiler:{url:a+"flow-remove-types/flow-remove-types.js",factory:()=>async(e,{config:t})=>window.flowRemoveTypes.transpile(e,{all:!0,...f("flow",t)}).toString()},extensions:["flow"],editor:"script",editorLanguage:"typescript"};var ur={name:"mjml",title:"MJML",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:fe,factory:()=>async(e,{config:t})=>{if(!e.trim())return"";let{html:n,errors:u}=self.mjml(e,f("mjml",t));return u?.forEach(d=>{console.warn(d.formattedMessage)}),n}},extensions:["mjml"],editor:"markup",editorLanguage:"xml"};var gr={name:"sucrase",title:"Sucrase",parser:{name:"babel",pluginUrls:[r.babel,r.html]},compiler:{url:a+"sucrase/sucrase.js",factory:()=>async(e,{config:t})=>window.sucrase.transform(e,{transforms:["jsx","typescript"],...f("sucrase",t)}).code},extensions:["sucrase"],editor:"script",editorLanguage:"typescript"};var dr={name:"eta",title:"Eta",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:me,factory:(e,t)=>(self.importScripts(t+"lang-eta-compiler.c693400cca6aaf24858825959f5aef03.js"),self.createEtaCompiler())},extensions:["eta"],editor:"markup",editorLanguage:"html"};var fr={name:"clojurescript",title:"CLJS (cherry)",longTitle:"ClojureScript (cherry)",formatter:{factory:F},compiler:{url:$+"lib/cherry.umd.js",factory:()=>async(e,{config:t,options:n})=>{let u=self.CherryCljs.compileString(e);return e.includes("#jsx")?(await M(u,"jsx",t,n)).code:u},imports:{"cherry-cljs":$+"index.js","cherry-cljs/cljs.core.js":$+"cljs.core.js","cherry-cljs/lib/clojure.string.js":"lib/clojure.string.js","cherry-cljs/lib/clojure.set.js":"lib/clojure.set.js","cherry-cljs/lib/clojure.walk.js":"lib/clojure.walk.js","squint-cljs":A+"index.js","squint-cljs/core.js":A+"core.js","squint-cljs/string.js":A+"string.js","squint-cljs/src/squint/string.js":A+"src/squint/string.js","squint-cljs/src/squint/set.js":A+"src/squint/set.js"}},extensions:["cljs","clj","cljc","edn","clojure"],editor:"script",editorLanguage:"clojure"};var yr={name:"php-wasm",title:"PHP (Wasm)",parser:{name:"php",pluginUrls:[r.php]},compiler:{factory:()=>async e=>e,scripts:({baseUrl:e})=>[a+"php-wasm/php-wasm.js",e+"lang-php-wasm-script.94b7508d299d33857fb195f7a1adb898.js"],scriptType:"text/php-wasm",compiledCodeLanguage:"php"},extensions:["wasm.php","phpwasm"],editor:"script",editorLanguage:"php"};var hr={name:"bbcode",title:"BBCode",compiler:{url:a+"bbob/bbob.js",factory:()=>async e=>self.BBob.bbobHTML(e,self.BBob.presetHTML5())},extensions:["bbcode","bb"],editor:"markup"};var xr={name:"vento",title:"Vento",parser:{name:"html",pluginUrls:[r.html]},compiler:{url:a+"vento/vento.js",factory:(e,t)=>(self.importScripts(t+"lang-vento-compiler.24905a9e33979a81ffa6eadf79581ff6.js"),self.createVentoCompiler())},extensions:["vto","vento"],editor:"markup",editorLanguage:"html"};var q=(e=location.origin)=>!!(e&&(e.endsWith("livecodes.io")||e.endsWith("livecodes.pages.dev")||e.endsWith("localpen.pages.dev")||e.startsWith("http://127.0.0.1")||e.startsWith("http://localhost")));var X=at(Ke());var Ge="https://dpaste.com/",jr="https://dpaste.com/api/v2/",Ve="https://api2.livecodes.io/share",Ze={getProject:async e=>{try{let t=await fetch(Ge+e+".txt");return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{try{let t=await fetch(jr,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(e))}&title=${encodeURIComponent(e.title||"")}&syntax=json&expiry_days=365`});return t.ok?(await t.text()).replace(Ge,""):""}catch{return""}}},Lr={getProject:async e=>{if(e.length<11)return Ze.getProject(e);if(!q())return{};try{let t=await fetch(Ve+"?id="+e);return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{if(!q())return"";try{let t=await fetch(Ve,{method:"POST",mode:"cors",body:JSON.stringify(e)});return t.ok?t.text():""}catch{return""}}},Xg=q()?Lr:Ze;var Qe=e=>!e.startsWith("https://")&&!e.startsWith("http://")&&!e.startsWith(".")&&!e.startsWith("/")&&!e.startsWith("data:")&&!e.startsWith("blob:");var Cr=/(?:@import\s+?)((?:".*?")|(?:'.*?')|(?:url\('.*?'\))|(?:url\(".*?"\)))(.*)?;/g;var Xe=e=>e.replace(new RegExp(Cr),(t,n,u)=>{let d=n.replace(/"/g,"").replace(/'/g,"").replace(/url\(/g,"").replace(/\)/g,""),h='@import "'+P.getUrl(d)+'";',s=u?.trim();return Qe(d)?s?`@media ${s} {
${h}
}`:h:t});var Ye=e=>k.find(t=>t.name===e);self.createPostcssCompiler=()=>{let e={from:void 0},t={},n=(s,o)=>{let l=Ye(s);if(!(!l||t[s]!=null))try{l.compiler.url&&self.importScripts(_e(l.compiler.url,o)),t[s]=l.compiler.factory}catch{throw new Error("Failed to load PostCSS plugin: "+s)}},u=s=>{let o=s.processors.filter(i=>Ye(i)?.isPostcssPlugin),l=i=>O(i,s)&&o.includes(i);return k.map(i=>i.name).filter(l)},d=(s,o,l)=>{let i=u(s);return i.forEach(m=>n(m,o)),k.filter(m=>i.includes(m.name)).map(m=>t[m.name]?.(s,o,l)).flat()},h=s=>I(Xe(s));return async function(o,{config:l,baseUrl:i,options:m}){if(!l||!i)return{code:o,info:{}};let w=d(l,i,m);return u(l).includes("tokencss")&&(o=`@inject "tokencss:base";
`+o),{code:(await self.postcss.postcss(w).process(h(o),e)).css,info:m.compileInfo||{}}}};})();