"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[8412],{10449:(e,t,s)=>{s.d(t,{c:()=>v});var a=s(96651),i=s(66548),r=s(31044),l=s(51064),n=s(46932),c=s(12892),o=s(74760),m=s(78876);function d(e){const{pathname:t}=(0,o.IT)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Sc)(e.permalink,t))}(e,t)))),[e,t])}const g={sidebar:"sidebar_wYbK",sidebarItemTitle:"sidebarItemTitle_fTB8",sidebarItemList:"sidebarItemList_Dipg",sidebarItem:"sidebarItem_B6VI",sidebarItemLink:"sidebarItemLink_NvrR",sidebarItemLinkActive:"sidebarItemLinkActive_ORC8"};var u=s(2488);function b(e){let{sidebar:t}=e;const s=d(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,i.c)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,i.c)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,u.jsx)("ul",{className:(0,i.c)(g.sidebarItemList,"clean-list"),children:s.map((e=>(0,u.jsx)("li",{className:g.sidebarItem,children:(0,u.jsx)(n.c,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(17056);function p(e){let{sidebar:t}=e;const s=d(t.items);return(0,u.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,u.jsx)("li",{className:"menu__list-item",children:(0,u.jsx)(n.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function x(e){return(0,u.jsx)(h.Mx,{component:p,props:e})}function j(e){let{sidebar:t}=e;const s=(0,l.U)();return t?.items.length?"mobile"===s?(0,u.jsx)(x,{sidebar:t}):(0,u.jsx)(b,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,u.jsx)(r.c,{...l,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(j,{sidebar:t}),(0,u.jsx)("main",{className:(0,i.c)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,u.jsx)("div",{className:"col col--2",children:s})]})})})}},81610:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(96651);var a=s(66548),i=s(12892);const r=()=>(0,i.G)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(93160),n=s(14864),c=s(10449),o=s(48410),m=s(70368);const d={tag:"tag_DA0H"};var g=s(2488);function u(e){let{letterEntry:t}=e;return(0,g.jsxs)("article",{children:[(0,g.jsx)(m.c,{as:"h2",id:t.letter,children:t.letter}),(0,g.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,g.jsx)("li",{className:d.tag,children:(0,g.jsx)(o.c,{...e})},e.permalink)))}),(0,g.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,g.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,g.jsx)(u,{letterEntry:e},e.letter)))})}var h=s(66384);function p(e){let{tags:t,sidebar:s}=e;const i=r();return(0,g.jsxs)(l.cr,{className:(0,a.c)(n.W.wrapper.blogPages,n.W.page.blogTagsListPage),children:[(0,g.jsx)(l.U7,{title:i}),(0,g.jsx)(h.c,{tag:"blog_tags_list"}),(0,g.jsxs)(c.c,{sidebar:s,children:[(0,g.jsx)(m.c,{as:"h1",children:i}),(0,g.jsx)(b,{tags:t})]})]})}},48410:(e,t,s)=>{s.d(t,{c:()=>n});s(96651);var a=s(66548),i=s(46932);const r={tag:"tag_TyYM",tagRegular:"tagRegular_OQYI",tagWithCount:"tagWithCount_PDNs"};var l=s(2488);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.c,{href:t,className:(0,a.c)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);