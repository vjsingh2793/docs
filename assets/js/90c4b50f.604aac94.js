"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[25802],{3905:function(e,t,i){i.d(t,{Zo:function(){return s},kt:function(){return m}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)i=p[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)i=p[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=c(i),m=r,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||p;return i?n.createElement(d,a(a({ref:t},s),{},{components:i})):n.createElement(d,a({ref:t},s))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=i.length,a=new Array(p);a[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var c=2;c<p;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},97844:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=i(87462),r=i(63366),p=(i(67294),i(3905)),a=["components"],o={title:"",sidebar_label:"epinio app"},l=void 0,c={unversionedId:"references/cli/epinio_app",id:"version-1.0.0/references/cli/epinio_app",title:"",description:"epinio app",source:"@site/versioned_docs/version-1.0.0/references/cli/epinio_app.md",sourceDirName:"references/cli",slug:"/references/cli/epinio_app",permalink:"/1.0.0/references/cli/epinio_app",editUrl:"https://github.com/epinio/docs/versioned_docs/version-1.0.0/references/cli/epinio_app.md",tags:[],version:"1.0.0",frontMatter:{title:"",sidebar_label:"epinio app"},sidebar:"docs",previous:{title:"epinio",permalink:"/1.0.0/references/cli/epinio"},next:{title:"epinio app chart",permalink:"/1.0.0/references/cli/epinio_app_chart"}},s={},u=[{value:"epinio app",id:"epinio-app",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"epinio-app"},"epinio app"),(0,p.kt)("p",null,"Epinio application features"),(0,p.kt)("h3",{id:"synopsis"},"Synopsis"),(0,p.kt)("p",null,"Manage epinio application"),(0,p.kt)("h3",{id:"options"},"Options"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"  -h, --help   help for app\n")),(0,p.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,p.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio"},"epinio"),"\t - Epinio cli"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_chart"},"epinio app chart"),"\t - Epinio application chart management"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_create"},"epinio app create"),"\t - Create just the app, without creating a workload"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_delete"},"epinio app delete"),"\t - Deletes an application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_env"},"epinio app env"),"\t - Epinio application configuration"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_exec"},"epinio app exec"),"\t - creates a shell to the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_export"},"epinio app export"),"\t - Export the named application into the directory"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_list"},"epinio app list"),"\t - Lists applications"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_logs"},"epinio app logs"),"\t - Streams the logs of the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_manifest"},"epinio app manifest"),"\t - Save state of the named application as a manifest"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_port-forward"},"epinio app port-forward"),"\t - forward one or more local ports to a pod"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_push"},"epinio app push"),"\t - Push an application declared in the specified manifest"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_restage"},"epinio app restage"),"\t - Restage the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_restart"},"epinio app restart"),"\t - Restart the application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_show"},"epinio app show"),"\t - Describe the named application"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/1.0.0/references/cli/epinio_app_update"},"epinio app update"),"\t - Update the named application")))}m.isMDXComponent=!0}}]);