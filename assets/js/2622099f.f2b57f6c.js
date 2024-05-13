"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[5603],{5604:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=n(4848),i=n(8453),l=n(1470),d=n(9365);n(6889),n(7293),n(871);const c={title:"CLI",sidebar_label:"Common Commands",slug:"/cli-eggs"},a=void 0,o={id:"snippets/pwsh-cli",title:"CLI",description:"Common Commands",source:"@site/docs/snippets/pwsh-cli.mdx",sourceDirName:"snippets",slug:"/cli-eggs",permalink:"/docs/cli-eggs",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:17074619e5,frontMatter:{title:"CLI",sidebar_label:"Common Commands",slug:"/cli-eggs"},sidebar:"projectSidebar",previous:{title:"Celestial distance",permalink:"/docs/celestial-dist"},next:{title:"Python starters",permalink:"/docs/python-eggs"}},t={},h=[{value:"Common Commands",id:"common-commands",level:3},{value:"Create user profile",id:"create-user-profile",level:3},{value:"Enable / Disable - Superadmin",id:"enable--disable---superadmin",level:3},{value:"Network",id:"network",level:3},{value:"Local Machine",id:"local-machine",level:3},{value:"Upgrades",id:"upgrades",level:3},{value:"Pro to Enterprise (Windows 10)",id:"pro-to-enterprise-windows-10",level:3},{value:"Office 2021 LTSC",id:"office-2021-ltsc",level:3}];function x(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:c}=s;return c||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"common-commands",children:"Common Commands"}),"\n",(0,r.jsx)(s.admonition,{title:"About",type:"tip",children:(0,r.jsx)(s.p,{children:"Some frequently used command that comes in handy."})}),"\n",(0,r.jsx)(s.p,{children:"To know more, you can run:"}),"\n",(0,r.jsxs)(l.A,{groupId:"command-line-interface",children:[(0,r.jsx)(d.A,{value:"cmd",label:"cmd",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"help\n"})})}),(0,r.jsx)(d.A,{value:"pwsh",label:"powershell",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"Get-Command\n"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"create-user-profile",children:"Create user profile"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Run the ff: command to determine your profile path:"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"$profile\n"})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Create a file name ",(0,r.jsx)(s.code,{children:"Microsoft.PowerShell_profile.ps1"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Alternatively, you can download ",(0,r.jsx)(s.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(3610).A+"",children:"this example"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enable--disable---superadmin",children:"Enable / Disable - Superadmin"}),"\n",(0,r.jsxs)(c,{children:[(0,r.jsx)("summary",{children:"More"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"Net user administrator /active:yes\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"Net user administrator /active:no\n"})})]}),"\n",(0,r.jsx)(s.h3,{id:"network",children:"Network"}),"\n",(0,r.jsx)(s.admonition,{title:"Note",type:"warning",children:(0,r.jsx)(s.p,{children:"This requires elevated / admin access and must be execute in the exact order."})}),"\n",(0,r.jsx)(s.p,{children:"Here's an extended command that might be helpful in fix issues with network."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"ipconfig /release\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"ipconfig /flushdns\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"ipconfig /renew\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"netsh int ip reset\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"netsh winsock reset\n"})}),"\n",(0,r.jsx)(s.p,{children:"Restart comupter."}),"\n",(0,r.jsxs)(c,{children:[(0,r.jsx)("summary",{children:"Status and Reports"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"netsh interface show interface\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"netsh wlan show wlanreport\n"})}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"netsh interface ip show dnsservers\n"})})]}),"\n",(0,r.jsx)(s.h3,{id:"local-machine",children:"Local Machine"}),"\n",(0,r.jsx)(s.p,{children:"Check for disk errors"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"DISM /Online /Cleanup-Image /ScanHealth\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"DISM /Online /Cleanup /RestoreHealth\n"})}),"\n",(0,r.jsx)(s.h3,{id:"upgrades",children:"Upgrades"}),"\n",(0,r.jsx)(s.admonition,{title:"Note",type:"warning",children:(0,r.jsx)(s.p,{children:"This only applies for Windows 10 only."})}),"\n",(0,r.jsx)(s.h3,{id:"pro-to-enterprise-windows-10",children:"Pro to Enterprise (Windows 10)"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"STEP 1 -  Run cmd as administrator"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"slmgr /ipk {choose_license_key_below}\n"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Edition"}),(0,r.jsx)(s.th,{children:"Product Key"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Professional"}),(0,r.jsx)(s.td,{children:"W269N-WFGWX-YVC9B-4J6C9-T83GX"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Professional N"}),(0,r.jsx)(s.td,{children:"MH37W-N47XK-V7XM9-C7227-GCQG9"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Education"}),(0,r.jsx)(s.td,{children:"NW6C2-QMPVW-D7KKK-3GKT6-VCFB2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Education N"}),(0,r.jsx)(s.td,{children:"2WH4N-8QGBV-H22JP-CT43Q-MDWWJ"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Enterprise"}),(0,r.jsx)(s.td,{children:"NPPR9-FWDCX-D2C8J-H872K-2YT43"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Enterprise N"}),(0,r.jsx)(s.td,{children:"DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"STEP 2 - Connect to KMS server"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"slmgr /skms kms8.msguides.com\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"STEP 3 - Activation"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"slmgr /ato\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["STEP 4 - Confirm activation via ",(0,r.jsx)(s.code,{children:"winver"})," using run."]})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h3,{id:"office-2021-ltsc",children:"Office 2021 LTSC"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"STEP 1 - Run cmd as administrator"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"cd C:\\Program Files\\Microsoft Office\\Office16\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"cd /d %ProgramFiles(x86)%\\Microsoft Office\\Office16\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"OPTIONAL:"})," This optional step only applies if you don't have a ",(0,r.jsx)(s.strong,{children:"Volume license"})," installed in your machine."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"for /f %x in ('dir /b ..\\root\\Licenses16\\ProPlus2021VL_KMS*.xrm-ms') do cscript ospp.vbs /inslic:\"..\\root\\Licenses16\\%x\"\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"STEP 2 - Activate"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"cscript ospp.vbs /setprt:1688\ncscript ospp.vbs /unpkey:6F7TH >nul\ncscript ospp.vbs /inpkey:FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH\ncscript ospp.vbs /sethst:e8.us.to\ncscript ospp.vbs /act\n"})}),"\n",(0,r.jsxs)(c,{children:[(0,r.jsx)("summary",{children:"Check License"}),(0,r.jsx)(s.p,{children:"For OEM."}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"wmic path softwarelicensingservice get OA3xOriginalProductKey\n"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"For Volumes. Check Host."}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"slmgr.vbs /dli\n"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Disable KMS host caching:"}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"slmgr.vbs /ckhc\n"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Enable KMS host cahing:"}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"slmgr.vbs /skhc\n"})})]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},871:(e,s,n)=>{n(6540),n(6889),n(4848)},6889:(e,s,n)=>{n.d(s,{A:()=>d});n(6540);var r=n(4164);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var l=n(4848);function d(e){let{children:s,minHeight:n,url:d="http://localhost:3000",style:c,bodyStyle:a}=e;return(0,l.jsxs)("div",{className:i.browserWindow,style:{...c,minHeight:n},children:[(0,l.jsxs)("div",{className:i.browserWindowHeader,children:[(0,l.jsxs)("div",{className:i.buttons,children:[(0,l.jsx)("span",{className:i.dot,style:{background:"#f25f58"}}),(0,l.jsx)("span",{className:i.dot,style:{background:"#fbbe3c"}}),(0,l.jsx)("span",{className:i.dot,style:{background:"#58cb42"}})]}),(0,l.jsx)("div",{className:(0,r.A)(i.browserWindowAddressBar,"text--truncate"),children:d}),(0,l.jsx)("div",{className:i.browserWindowMenuIcon,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:i.bar}),(0,l.jsx)("span",{className:i.bar}),(0,l.jsx)("span",{className:i.bar})]})})]}),(0,l.jsx)("div",{className:i.browserWindowBody,style:a,children:s})]})}},3610:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/files/example_profile_01-a047024156090ea2b045de9d48750b69.ps1"}}]);