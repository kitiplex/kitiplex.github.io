"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[4532],{7536:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var i=s(2488),r=s(2780),a=s(5320),l=s(5360);s(6116),s(0);const d={title:"Configuration",sidebar_label:"Configuration",slug:"/configs"},t=void 0,o={id:"configuration",title:"Configuration",description:"Virtual environments \u26a1\ufe0f",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configs",permalink:"/docs/configs",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1707129940,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/configs"},sidebar:"projectSidebar",previous:{title:"This Doc",permalink:"/docs/this-doc"},next:{title:"Frameworks",permalink:"/docs/frameworks"}},c={},h=[{value:"Virtual environments \u26a1\ufe0f",id:"virtual-environments-\ufe0f",level:2},{value:"Create",id:"create",level:3},{value:"Activate",id:"activate",level:3},{value:"Update / Upgrade",id:"update--upgrade",level:3}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"virtual-environments-\ufe0f",children:"Virtual environments \u26a1\ufe0f"}),"\n",(0,i.jsx)(n.admonition,{title:"What's this",type:"tip",children:(0,i.jsx)(n.p,{children:"Here are some configuration that comes in handy"})}),"\n",(0,i.jsx)(n.admonition,{title:".venv",type:"info",children:(0,i.jsx)(n.p,{children:"A virtual environment in Python is crucial as it helps keep projects organized by creating separate spaces for development. This ensures a smooth workflow, avoids conflicts with different parts of the project, and makes version control easier, making Python programming projects more organized and manageable."})}),"\n",(0,i.jsx)(n.p,{children:"To display a list of all installed packages and their versions within the current virtual environment, run the following:"}),"\n",(0,i.jsxs)(a.c,{groupId:"Windows",children:[(0,i.jsx)(l.c,{value:"Windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pwsh",children:"pip freeze\n"})})}),(0,i.jsx)(l.c,{value:"Linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pip freeze\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"This information is often utilized for documenting dependencies, enabling others to recreate the same development environment with identical package versions."}),"\n",(0,i.jsxs)(n.p,{children:["To export the list in ",(0,i.jsx)(n.code,{children:".txt"})," in your project directory:"]}),"\n",(0,i.jsxs)(a.c,{groupId:"Windows",children:[(0,i.jsx)(l.c,{value:"Windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pwsh",children:"pip freeze > requirements.txt\n"})})}),(0,i.jsx)(l.c,{value:"Linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ pip freeze > requirements.txt\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"create",children:"Create"}),"\n",(0,i.jsxs)(a.c,{groupId:"Windows",children:[(0,i.jsx)(l.c,{value:"Windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"py -m venv .venv\n"})})}),(0,i.jsx)(l.c,{value:"Linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ python3 -m venv .venv\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"activate",children:"Activate"}),"\n",(0,i.jsxs)(a.c,{groupId:"Windows",children:[(0,i.jsx)(l.c,{value:"Windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:".\\venv\\scripts\\activate\n"})})}),(0,i.jsx)(l.c,{value:"Linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ source .venv/bin/activate\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"update--upgrade",children:"Update / Upgrade"}),"\n",(0,i.jsxs)(n.p,{children:["Updating your enviroment libraries to ensure smooth development is considered best practices. Once a ",(0,i.jsx)(n.code,{children:"requirements.txt"})," is present in your project dir, run the following:"]}),"\n",(0,i.jsxs)(a.c,{groupId:"Windows",children:[(0,i.jsx)(l.c,{value:"Windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"py -m pip install --upgrade -r requirements.txt\n"})})}),(0,i.jsx)(l.c,{value:"Linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ python3 -m pip install --upgrade -r requirements.txt\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["To update ",(0,i.jsx)(n.code,{children:"pip"})," it itself, run the following:"]}),"\n",(0,i.jsxs)(a.c,{groupId:"Windows",children:[(0,i.jsx)(l.c,{value:"Windows",label:"Windows",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"py -m pip install --upgrade pip\n"})})}),(0,i.jsx)(l.c,{value:"Linux",label:"Linux",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ python3 -m pip install --upgrade pip\n"})})})]})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},6116:(e,n,s)=>{s.d(n,{c:()=>l});s(6651);var i=s(6548);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var a=s(2488);function l(e){let{children:n,minHeight:s,url:l="http://localhost:3000",style:d,bodyStyle:t}=e;return(0,a.jsxs)("div",{className:r.browserWindow,style:{...d,minHeight:s},children:[(0,a.jsxs)("div",{className:r.browserWindowHeader,children:[(0,a.jsxs)("div",{className:r.buttons,children:[(0,a.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,i.c)(r.browserWindowAddressBar,"text--truncate"),children:l}),(0,a.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar})]})})]}),(0,a.jsx)("div",{className:r.browserWindowBody,style:t,children:n})]})}}}]);