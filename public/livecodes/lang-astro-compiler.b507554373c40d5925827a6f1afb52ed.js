"use strict";(()=>{var p=t=>typeof t=="string"?{code:t,info:{}}:t;var d=async(t,s,e,r={},o=self)=>new Promise(n=>{if(!t||!s||!e)return n(p(""));let a=async function(l){let c=l.data.payload;l.data.trigger==="compileInCompiler"&&c?.content===t&&c?.language===s&&(o.removeEventListener("message",a),n(p(c.compiled)))};o.addEventListener("message",a),o.postMessage({type:"compileInCompiler",payload:{content:t,language:s,config:e,options:r}})});var h=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],f=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],x=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],i={getModuleUrl:(t,{isModule:s=!0,defaultCDN:e="esm.sh"}={})=>{t=t.replace(/#nobundle/g,"");let r=g(t,s,e);return r||(s?"https://esm.sh/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,s)=>t.startsWith("http")||t.startsWith("data:")?t:g(t,!1,s||$())||t,cdnLists:{npm:f,module:h,gh:x},checkCDNs:async(t,s)=>{let e=[s,...i.cdnLists.npm].filter(Boolean);for(let r of e)try{if((await fetch(i.getUrl(t,r),{method:"HEAD"})).ok)return r}catch{}return i.cdnLists.npm[0]}},$=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||i.cdnLists.npm[0]}catch{return i.cdnLists.npm[0]}},g=(t,s,e)=>{let r=s&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",x[0]):t.includes(":")||(t=(e||(s?h[0]:f[0]))+":"+t);for(let o of E){let[n,a]=o;if(n.test(t))return t.replace(n,a)+r}return null},E=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var m=t=>t.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,"$1");var b=(t,s)=>({...s.customSettings[t]});var u=/(import\s+?(?:(?:(?:[\w*\s{},\$]*)\s+from\s+?)|))((?:".*?")|(?:'.*?'))([\s]*?(?:;|$|))/g,q=/(import\s*?\(\s*?((?:".*?")|(?:'.*?'))\s*?\))/g,L=(t,s=!1)=>[...m(t).matchAll(new RegExp(u)),...m(t).matchAll(new RegExp(q))].map(e=>e[2].replace(/"/g,"").replace(/'/g,"")).map(e=>!s||!y(e)||!e.includes(":")?e:e.split(":")[1]),T=t=>!t.startsWith("https://deno.bundlejs.com/")&&!t.startsWith("https://edge.bundlejs.com/")&&!t.startsWith("https://esm.sh/")&&!t.endsWith("#nobundle")&&(t.startsWith("https://deno.land/")||t.startsWith("https://github.com/")||t.startsWith("https://raw.githubusercontent.com/")||t.startsWith("https://gitlab.com/")||t.startsWith("https://bitbucket.org")||t.endsWith(".ts")||t.endsWith(".jsx")||t.endsWith(".tsx")),y=t=>!t.startsWith("https://")&&!t.startsWith("http://")&&!t.startsWith(".")&&!t.startsWith("/")&&!t.startsWith("data:")&&!t.startsWith("blob:"),R=t=>(t.endsWith(".css")||t.endsWith(".scss")||t.endsWith(".sass")||t.endsWith(".less")||t.endsWith(".styl"))&&!t.startsWith("./style"),j=(t,s)=>Object.keys(s).find(e=>e===t||t.startsWith(e+"/")),S=(t,s,e=!0)=>L(t).map(r=>{if(!T(r)&&!y(r)||R(r))return{};{let o={...s.imports,...s.customSettings?.imports},n=j(r,o);return n?{[n]:o[n]}:e?{[r]:i.getModuleUrl(r,{defaultCDN:s?.customSettings?.defaultCDN})}:{}}}).reduce((r,o)=>({...r,...o}),{});var U=(t,s,e)=>(e=e||S(t,s),t.replace(new RegExp(u),r=>{if(!e)return r;let o=r.replace(new RegExp(u),"$2").replace(/"/g,"").replace(/'/g,""),n=j(o,e);return n?r.replace(n,e[n]):r}));var{getUrl:w,getModuleUrl:Q}=i;var v=w("@hatemhosny/astro-internal@0.0.4/"),C=w("@astrojs/compiler@0.9.2/astro.wasm");var B=v+"index.min.js",W=async(t,s)=>{t=U(t,s);let e=/^---((?:.|\n|\r)*)---((?:.|\n|\r)*)/,r=t.trim().match(new RegExp(e))?.[1];if(!r)return t;let o=(await d(r,"typescript",s)).code;return t.trim().replace(new RegExp(e),`---
${o}
---
$2`)};self.createAstroCompiler=()=>{let{transform:t,initialize:s,renderAstroToHTML:e}=self.astroCompiler,r=s({wasmURL:C});return async(o,{config:n})=>{await r;let a=await W(o,n),l=await t(a,{sourcefile:"file.astro",sourcemap:!1,internalURL:B,...b("astro",n)}),c=await e(l.code);if(c.errors){for(let k of c.errors)console.warn(k);return""}return c}};})();