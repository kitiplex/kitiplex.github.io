"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[3224],{6076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(2488),a=n(2780);n(5320),n(5360),n(6651),n(8400),n(1520);const s={title:"Git",sidebar_label:"Git",slug:"/git"},l=void 0,o={id:"snippets/git-cheat",title:"Git",description:"Git Push",source:"@site/docs/snippets/git-cheat.mdx",sourceDirName:"snippets",slug:"/git",permalink:"/docs/git",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1707531798,formattedLastUpdatedAt:"Feb 10, 2024",frontMatter:{title:"Git",sidebar_label:"Git",slug:"/git"},sidebar:"snippetsSidebar",previous:{title:"Foobar two",permalink:"/docs/snippets/foobar-two"},next:{title:"Conda",permalink:"/docs/conda"}},u={},i=[{value:"Git Push",id:"git-push",level:3},{value:"Deploy",id:"deploy",level:3}];function c(e){const t={code:"code",h3:"h3",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"git-push",children:"Git Push"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ git add --all\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'$ git commit -m "Initial commit"\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ git push -u origin main\n"})}),"\n",(0,r.jsx)(t.h3,{id:"deploy",children:"Deploy"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"cmd /C 'set \"GIT_USER=<username>\" && pnpm run deploy'\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5360:(e,t,n)=>{n.d(t,{c:()=>l});n(6651);var r=n(6548);const a={tabItem:"tabItem_VAqR"};var s=n(2488);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.c)(a.tabItem,l),hidden:n,children:t})}},5320:(e,t,n)=>{n.d(t,{c:()=>j});var r=n(6651),a=n(6548),s=n(2440),l=n(4760),o=n(1440),u=n(3540),i=n(6904),c=n(6008);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.Uz)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._M)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,d]=b({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.IN)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??f;return h({value:e,tabValues:s})?e:null})();(0,o.c)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(5168);const g={tabList:"tabList_zsOt",tabItem:"tabItem_wrWy"};var v=n(2488);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.MV)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(i(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.c)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,m.c)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},1520:(e,t,n)=>{n.d(t,{c:()=>a});n(6651);var r=n(2488);function a(e){let{children:t,color:n}=e;return(0,r.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})}},8400:()=>{},2780:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>l});var r=n(6651);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);