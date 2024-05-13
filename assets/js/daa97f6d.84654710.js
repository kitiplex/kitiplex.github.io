"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[6365],{10:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(4848),r=n(8453);n(1470),n(9365),n(6540),n(6393),n(3951);const o={title:"Kitoy Edition",authors:"mkeithX",tags:["release"],slug:"kitoy-edition-beta"},i=void 0,s={permalink:"/blog/kitoy-edition-beta",source:"@site/blog/2024-02-18-kitoy-edition-beta.mdx",title:"Kitoy Edition",description:"Hey everyone. I'm thrilled to share some exciting news with you all! The documentation landscape is about to undergo a transformation with the introduction of `Kitoy Edition Beta` \u2014 a release that places a strong focus on how this website behaves in preparation for the Next Big Thing. {/truncate/}",date:"2024-02-18T00:00:00.000Z",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Keith",title:"Maintainer @ Kitiplex",url:"https://github.com/mkeithX",imageURL:"https://github.com/mkeithX.png",key:"mkeithX"}],frontMatter:{title:"Kitoy Edition",authors:"mkeithX",tags:["release"],slug:"kitoy-edition-beta"},unlisted:!1,prevItem:{title:"IUIU",permalink:"/blog/iuiu-project"},nextItem:{title:"On GitHub Pages",permalink:"/blog/on-gh-pages"}},l={authorsImageUrls:[void 0]},u=[{value:"What&#39;s this?",id:"whats-this",level:3},{value:"Algolia Search",id:"algolia-search",level:3},{value:"Custom Configuration",id:"custom-configuration",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Hey everyone. I'm thrilled to share some exciting news with you all! The documentation landscape is about to undergo a transformation with the introduction of ",(0,a.jsx)(t.code,{children:"Kitoy Edition Beta"})," \u2014 a release that places a strong focus on how this website behaves in preparation for the Next Big Thing. "]}),"\n",(0,a.jsx)(t.h3,{id:"whats-this",children:"What's this?"}),"\n",(0,a.jsx)(t.p,{children:"In the ever-evolving tech landscape, being ahead of the curve is crucial. We are gearing up to set a new standard with a heightened emphasis on how the website behaves in anticipation of the Next Big Thing. This release is a testament to our commitment to staying at the forefront of innovation."}),"\n",(0,a.jsx)(t.h3,{id:"algolia-search",children:"Algolia Search"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Big thanks to Algolia!"})," One of the standout features in this release is the integration of ",(0,a.jsx)(t.a,{href:"https://docsearch.algolia.com/",children:(0,a.jsx)(t.strong,{children:"Algolia search"})}),". We know how crucial it is for users to quickly find the information they need, and Algolia's powerful search and discovery API makes that happen. It's a game-changer for enhancing the user experience, aligning seamlessly with our focus on preparing for the future. In this release, we utilize the ",(0,a.jsx)(t.a,{href:"https://docsearch.algolia.com/docs/templates#docusaurus-v3-template",children:"default configuration"})," with a little bit of tweak."]}),"\n",(0,a.jsx)(t.h3,{id:"custom-configuration",children:"Custom Configuration"}),"\n",(0,a.jsx)(t.p,{children:"Flexibility has always been a priority for us. We're introducing the concept of running optional with custom configuration. It's about giving you the control to make your workflow as efficient as possible, aligning perfectly with our goal of preparing for what comes next."}),"\n",(0,a.jsx)(t.p,{children:"Thank you for your time."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"-K"})}),"\n",(0,a.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var o=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(6540),r=n(4164),o=n(3104),i=n(6347),s=n(205),l=n(7485),u=n(1682),c=n(9466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,h]=p({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=u??m;return f({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,o]),tabValues:o}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(u(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:h,onClick:c,...o,className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function k(e){const t=(0,g.A)();return(0,v.jsx)(x,{...e,children:h(e.children)},String(t))}},3951:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4848);function r(e){let{children:t,color:n}=e;return(0,a.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})}},6393:()=>{},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);