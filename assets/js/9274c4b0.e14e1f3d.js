"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[9736],{61788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(2488),a=n(62780);n(55320),n(15360),n(28452);const l={title:"Kali WSL",sidebar_label:"Kali WSL",slug:"/kali-wsl"},s=void 0,i={id:"guides/wsl-kali",title:"Kali WSL",description:"Quick Method",source:"@site/docs/guides/wsl-kali.mdx",sourceDirName:"guides",slug:"/kali-wsl",permalink:"/docs/kali-wsl",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1707461900,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{title:"Kali WSL",sidebar_label:"Kali WSL",slug:"/kali-wsl"},sidebar:"guidesSidebar",previous:{title:"Installing Python",permalink:"/docs/guides/installing-python"},next:{title:"Openai API",permalink:"/docs/guides/openai-api"}},o={},u=[{value:"Quick Method",id:"quick-method",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"quick-method",children:"Quick Method"}),"\n",(0,r.jsx)(t.p,{children:"Our recommended method to get Kali running on WSL 2:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open a administrator command prompt and run:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"Restart when prompt"}),"\n",(0,r.jsxs)(t.li,{children:["Download and install the WSL 2 Linux Kernel from ",(0,r.jsx)(t.a,{href:"https://aka.ms/wsl2kernel",children:"here"}),":"]}),"\n",(0,r.jsx)(t.li,{children:"Restart"}),"\n",(0,r.jsx)(t.li,{children:"Open a command prompt and run:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"wsl --set-default-version 2\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},15360:(e,t,n)=>{n.d(t,{c:()=>s});n(96651);var r=n(66548);const a={tabItem:"tabItem_VAqR"};var l=n(2488);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,s),hidden:n,children:t})}},55320:(e,t,n)=>{n.d(t,{c:()=>j});var r=n(96651),a=n(66548),l=n(2440),s=n(74760),i=n(51440),o=n(23540),u=n(36904),c=n(66008);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.Uz)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._M)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.IN)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,i.c)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(65168);const v={tabList:"tabList_zsOt",tabItem:"tabItem_wrWy"};var g=n(2488);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.MV)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.c)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.c)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function j(e){const t=(0,b.c)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},28452:(e,t,n)=>{var r=n(5472);!!r.c.canUseDOM&&navigator.platform.startsWith("Mac"),!!r.c.canUseDOM&&navigator.platform.startsWith("Win")},62780:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>s});var r=n(96651);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);