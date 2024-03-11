"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[2968],{1977:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var r=s(4848),a=s(8453),l=s(1470),i=s(9365);s(6889),s(7293);const t={title:"Python starters",sidebar_label:"Python starters",slug:"/python-eggs"},d=void 0,o={id:"snippets/py-starters",title:"Python starters",description:"Python eggs for starters.",source:"@site/docs/snippets/py-starters.mdx",sourceDirName:"snippets",slug:"/python-eggs",permalink:"/docs/python-eggs",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1707461900,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{title:"Python starters",sidebar_label:"Python starters",slug:"/python-eggs"},sidebar:"projectSidebar",previous:{title:"Common Commands",permalink:"/docs/cli-eggs"},next:{title:"Calculus fundamentals",permalink:"/docs/nerds/calculus-fundamentals"}},c={},h=[{value:"Let&#39;s begin",id:"lets-begin",level:3},{value:"For statements",id:"for-statements",level:3},{value:"Array",id:"array",level:3}];function u(e){const n={admonition:"admonition",code:"code",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.mdxAdmonitionTitle,{}),(0,r.jsx)(n.p,{children:"Python eggs for starters."})]}),"\n",(0,r.jsx)(n.p,{children:"First off, let's take a quick look how are these three languages different from each other."}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(i.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function helloWorld() {\n  console.log('Hello, world!');\n}\n"})})}),(0,r.jsx)(i.A,{value:"py",label:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'msg = ("Hello, world!")\nprint(msg)\n'})})}),(0,r.jsx)(i.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'class HelloWorld {\n  public static void main(String args[]) {\n    System.out.println("Hello, World");\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"Yes! they may be different however, the same principles can be applied."}),"\n",(0,r.jsx)(n.h3,{id:"lets-begin",children:"Let's begin"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Here are two different examples that prints the same output."}),"\n"]}),"\n",(0,r.jsxs)(l.A,{groupId:"web-browsers",children:[(0,r.jsx)(i.A,{value:"var1",label:"var1",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'print("Hello, world!")\n'})})}),(0,r.jsx)(i.A,{value:"var2",label:"var2",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'msg = ("Hello, world!")\nprint(msg)\n'})})})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Show output \ud83d\udc49"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"Hello, world!\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"for-statements",children:"For statements"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'words = ["cat", "dog", "monkey"]\n\nfor w in words:\n    print(w, len(w))\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Show output \ud83d\udc49"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"cat 3\ndog 3\nmonkey 6\n"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"a = ['Mary', 'had', 'a', 'little', 'lamb']\n\nfor i in range(len(a)):\n\n    print(i, a[i])\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Show output \ud83d\udc49"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-0",metastring:"Mary",children:"1 had\n2 a\n3 little\n4 lamb\n"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"for n in range(2, 10):\n    for x in range(2, n):\n        if n % x == 0:\n            print(n, 'equals', x, '*', n//x)\n            break\n    else:\n        # loop fell through without finding a factor\n        print(n, 'is a prime number')\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Show output \ud83d\udc49"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-2",metastring:"is a prime number",children:"3 is a prime number\n4 equals 2 * 2\n5 is a prime number\n6 equals 2 * 3\n7 is a prime number\n8 equals 2 * 4\n9 equals 3 * 3\n"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'for num in range(2, 10):\n\n    if num % 2 == 0:\n        print("Found an even number", num)\n        continue\n\n    print("Found an odd number", num)\n'})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Show output \ud83d\udc49"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Found an even number 2\nFound an odd number 3\nFound an even number 4\nFound an odd number 5\nFound an even number 6\nFound an odd number 7\nFound an even number 8\nFound an odd number 9\n"})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"a = []\n\nfor x in range(1,11):\n    b = x**2\n    a.append(b)\n\n    print(a)\n\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Show output \ud83d\udc49"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[1]\n[1, 4]\n[1, 4, 9]\n[1, 4, 9, 16]\n[1, 4, 9, 16, 25]\n[1, 4, 9, 16, 25, 36]\n[1, 4, 9, 16, 25, 36, 49]\n[1, 4, 9, 16, 25, 36, 49, 64]\n[1, 4, 9, 16, 25, 36, 49, 64, 81]\n[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"array",children:"Array"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"def print_triangle(height):\n    for i in range(1, height + 1):\n        print(' ' * (height - i) + '*' * (2 * i - 1))\n\n# Example usage\nprint_triangle(5 * 2)\n"})}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Show output \ud83d\udc49"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"         *\n        ***\n       *****\n      *******\n     *********\n    ***********\n   *************\n  ***************\n *****************\n*******************\n"})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},6889:(e,n,s)=>{s.d(n,{A:()=>i});s(6540);var r=s(4164);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var l=s(4848);function i(e){let{children:n,minHeight:s,url:i="http://localhost:3000",style:t,bodyStyle:d}=e;return(0,l.jsxs)("div",{className:a.browserWindow,style:{...t,minHeight:s},children:[(0,l.jsxs)("div",{className:a.browserWindowHeader,children:[(0,l.jsxs)("div",{className:a.buttons,children:[(0,l.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,l.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,l.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,l.jsx)("div",{className:(0,r.A)(a.browserWindowAddressBar,"text--truncate"),children:i}),(0,l.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:a.bar}),(0,l.jsx)("span",{className:a.bar}),(0,l.jsx)("span",{className:a.bar})]})})]}),(0,l.jsx)("div",{className:a.browserWindowBody,style:d,children:n})]})}}}]);