"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[9547],{1211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453),r=n(3514);const c={title:"Snippets",sidebar_label:"Snippets",slug:"/snippets"},o=void 0,a={id:"snippets/index",title:"Snippets",description:"Currated snippets",source:"@site/docs/snippets/index.mdx",sourceDirName:"snippets",slug:"/snippets",permalink:"/io/docs/snippets",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1710157629,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{title:"Snippets",sidebar_label:"Snippets",slug:"/snippets"},sidebar:"projectSidebar",previous:{title:"Openai API",permalink:"/io/docs/guides/openai-api"},next:{title:"Browser eggs",permalink:"/io/docs/browser-eggs"}},d={},l=[];function p(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Currated snippets"}),"\n",(0,i.jsx)(r.A,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var i=n(4164),s=n(4142),r=n(8774),c=n(6654),o=n(1312),a=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(4848);function p(e){let{href:t,children:n}=e;return(0,l.jsx)(r.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:s,description:r}=e;return(0,l.jsxs)(p,{href:t,children:[(0,l.jsxs)(a.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),r&&(0,l.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function m(e){let{item:t}=e;const n=(0,s.Nr)(t);return n?(0,l.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,l.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const r=(0,s.d1)(t);return(0,l.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);