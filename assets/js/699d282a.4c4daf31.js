"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[4806],{2508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(3274),r=t(6906);const s={title:"How far are we?",sidebar_label:"Celestial distance",slug:"/celestial-dist"},a=void 0,l={id:"snippets/celestial-distance",title:"How far are we?",description:"In this example, we'll demonstrate the approximate distances of celestial bodies in light minutes.",source:"@site/docs/snippets/celestial-distance.mdx",sourceDirName:"snippets",slug:"/celestial-dist",permalink:"/io/docs/celestial-dist",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",lastUpdatedAt:1708809826,formattedLastUpdatedAt:"Feb 24, 2024",frontMatter:{title:"How far are we?",sidebar_label:"Celestial distance",slug:"/celestial-dist"},sidebar:"projectSidebar",previous:{title:"Live editor",permalink:"/io/docs/live-editor"},next:{title:"Common Commands",permalink:"/io/docs/cli-eggs"}},o={},d=[{value:"From Earth.",id:"from-earth",level:3},{value:"From the Sun.",id:"from-the-sun",level:3}];function c(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In this example, we'll demonstrate the ",(0,i.jsx)(n.strong,{children:"approximate distances"})," of celestial bodies in light minutes."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,i.jsx)(n.p,{children:"While the entire code is written in Python, the same principles can be applied to other programming languages as well."})}),"\n",(0,i.jsx)(n.h3,{id:"from-earth",children:"From Earth."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"LIGHT_SPEED = 299792  # km/s\r\ndistances_from_earth = [\r\n    {'name': 'Sun', 'distance': 150000000},\r\n    {'name': 'Mercury', 'distance': 91691000},\r\n    {'name': 'Venus', 'distance': 41400000},\r\n    {'name': 'Moon', 'distance': 384402},\r\n    {'name': 'Mars', 'distance': 78340000},\r\n    {'name': 'Asteroid Belt', 'distance': 478700000},\r\n    {'name': 'Jupiter', 'distance': 628730000},\r\n    {'name': 'Saturn', 'distance': 1275000000},\r\n    {'name': 'Uranus', 'distance': 2723950000},\r\n    {'name': 'Neptune', 'distance': 4351400000},\r\n    {'name': 'Kuiper Belt', 'distance': 7330000000},\r\n    {'name': 'Oort Cloud', 'distance': 7479890000000},\r\n]\r\n\r\ndef to_light_minutes(distance):\r\n    light_minutes = distance / (LIGHT_SPEED * 60)\r\n    return round(light_minutes, 2)\r\n\r\ndef main():\r\n    print(\"Approximate distance from Earth (in Light Minutes):\")\r\n    print()\r\n\r\n    for planet in distances_from_earth:\r\n        name = planet['name']\r\n        distance = planet['distance']\r\n        light_minutes = to_light_minutes(distance)\r\n        print(f\"{name}: {light_minutes} light minutes\")\r\n\r\nif __name__ == \"__main__\":\r\n    main()\n"})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Show output"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"Approximate distance from Earth (in Light Minutes):\r\n\r\nSun: 8.34 light minutes\r\nMercury: 5.1 light minutes\r\nVenus: 2.3 light minutes\r\nMoon: 0.02 light minutes\r\nMars: 4.36 light minutes\r\nAsteroid Belt: 26.61 light minutes\r\nJupiter: 34.95 light minutes\r\nSaturn: 70.88 light minutes\r\nUranus: 151.44 light minutes\r\nNeptune: 241.91 light minutes\r\nKuiper Belt: 407.5 light minutes\r\nOort Cloud: 415837.76 light minutes\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"from-the-sun",children:"From the Sun."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"LIGHT_SPEED = 299792\r\ndistances_from_sun = [\r\n    {'name': 'Mercury', 'distance': 57910000},\r\n    {'name': 'Venus', 'distance': 108200000},\r\n    {'name': 'Earth', 'distance': 149600000},\r\n    {'name': 'Mars', 'distance': 227900000},\r\n    {'name': 'Jupiter', 'distance': 778500000},\r\n    {'name': 'Saturn', 'distance': 1427000000},\r\n    {'name': 'Uranus', 'distance': 2871000000},\r\n    {'name': 'Neptune', 'distance': 4497000000},\r\n]\r\n\r\ndef to_minutes(distance):\r\n    return float(distance) / (LIGHT_SPEED * 60)\r\n\r\ndef main():\r\n    print(\"Approximate distance the Sun (in Light Minutes):\")\r\n    print()\r\n    for planet in distances_from_sun:\r\n        print(f\"{planet['name']}: {round(to_minutes(planet['distance']), 2)} light minutes\")\r\n\r\nif __name__ == \"__main__\":\r\n    main()\n"})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Show output"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"Approximate distance the Sun (in Light Minutes):\r\n\r\nMercury: 3.22 light minutes\r\nVenus: 6.02 light minutes\r\nEarth: 8.32 light minutes\r\nMars: 12.67 light minutes\r\nJupiter: 43.28 light minutes\r\nSaturn: 79.33 light minutes\r\nUranus: 159.61 light minutes\r\nNeptune: 250.01 light minutes\n"})})]}),"\n",(0,i.jsx)(n.admonition,{title:"Fun fact",type:"tip",children:(0,i.jsx)(n.p,{children:"Great! Now that we've learned how to code basic calculations, we've also discovered that we are actually looking back in time."})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6906:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(9474);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);