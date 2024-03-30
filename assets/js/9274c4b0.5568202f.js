"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[1452],{11130:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(74848),l=t(28453);const s={title:"Kali WSL",sidebar_label:"Kali WSL",slug:"/kali-wsl"},a=void 0,r={id:"guides/wsl-kali",title:"Kali WSL",description:"Quick Method",source:"@site/docs/guides/wsl-kali.mdx",sourceDirName:"guides",slug:"/kali-wsl",permalink:"/docs/kali-wsl",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1708809826e3,frontMatter:{title:"Kali WSL",sidebar_label:"Kali WSL",slug:"/kali-wsl"},sidebar:"projectSidebar",previous:{title:"Installing Python",permalink:"/docs/guides/installing-python"},next:{title:"Openai API",permalink:"/docs/guides/openai-api"}},o={},d=[{value:"Quick Method",id:"quick-method",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"quick-method",children:"Quick Method"}),"\n",(0,i.jsx)(n.p,{children:"Our recommended method to get Kali running on WSL 2:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open a administrator command prompt and run:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Restart when prompt"}),"\n",(0,i.jsxs)(n.li,{children:["Download and install the WSL 2 Linux Kernel from ",(0,i.jsx)(n.a,{href:"https://aka.ms/wsl2kernel",children:"here"}),":"]}),"\n",(0,i.jsx)(n.li,{children:"Restart"}),"\n",(0,i.jsx)(n.li,{children:"Open a command prompt and run:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"wsl --set-default-version 2\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const l={},s=i.createContext(l);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);