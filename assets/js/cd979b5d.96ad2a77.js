"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[7088],{2328:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=a(4848),r=a(8453);a(1470),a(9365),a(6540),a(6393),a(3951);const s={title:"Conda",sidebar_label:"Conda",slug:"/conda",keywords:["Conda","Conda cheatsheet"]},l=void 0,o={id:"snippets/conda-cheat",title:"Conda",description:"Quickstart",source:"@site/docs/snippets/conda-cheat.mdx",sourceDirName:"snippets",slug:"/conda",permalink:"/docs/conda",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1708512913,formattedLastUpdatedAt:"Feb 21, 2024",frontMatter:{title:"Conda",sidebar_label:"Conda",slug:"/conda",keywords:["Conda","Conda cheatsheet"]},sidebar:"projectSidebar",previous:{title:"Git",permalink:"/docs/git"}},i={},c=[{value:"Quickstart",id:"quickstart",level:2},{value:"Verify and check conda version",id:"verify-and-check-conda-version",level:3},{value:"Update conda in base environment",id:"update-conda-in-base-environment",level:3},{value:"Create a new environment",id:"create-a-new-environment",level:3},{value:"Packages",id:"packages",level:2},{value:"List installed packages.",id:"list-installed-packages",level:3},{value:"Update all packages",id:"update-all-packages",level:3}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"It is recommended to create a new environment for any new project or workflow."})]}),"\n",(0,t.jsx)(n.h3,{id:"verify-and-check-conda-version",children:"Verify and check conda version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda info\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-conda-in-base-environment",children:"Update conda in base environment"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda update --all -n base\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda update -n base conda\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-environment",children:"Create a new environment"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Name environment descriptively. ie., ",(0,t.jsx)(n.code,{children:"myenv"})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda create --name myenv\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda activate myenv\n"})}),"\n",(0,t.jsx)(n.h2,{id:"packages",children:"Packages"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"Package dependencies and platform specifics are automatically resolved when using conda."})]}),"\n",(0,t.jsx)(n.h3,{id:"list-installed-packages",children:"List installed packages."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda list\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-all-packages",children:"Update all packages"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda update --all\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda update --all -n base\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"conda update --all -n myenv\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var t=a(4164);const r={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(6540),r=a(4164),s=a(3104),l=a(6347),o=a(205),i=a(7485),c=a(1682),d=a(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function v(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=p(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:a,groupId:r}),[v,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=c??v;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=a(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,a=i.indexOf(n),r=o[a].value;r!==t&&(c(n),l(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=v(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function y(e){const n=(0,f.A)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(n))}},3951:(e,n,a)=>{a.d(n,{A:()=>r});a(6540);var t=a(4848);function r(e){let{children:n,color:a}=e;return(0,t.jsx)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})}},6393:()=>{},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>o});var t=a(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);