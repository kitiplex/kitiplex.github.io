"use strict";(self.webpackChunkkitiplex_dev_website=self.webpackChunkkitiplex_dev_website||[]).push([[44],{7393:(e,t,n)=>{n.d(t,{A:()=>r});n(9474);var o=n(8923);const i={tabItem:"tabItem_BZmb"};var a=n(3274);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,r),hidden:n,children:t})}},8329:(e,t,n)=>{n.d(t,{A:()=>L});var o=n(9474),i=n(8923),a=n(4771),r=n(241),s=n(9774),l=n(6932),h=n(8413),d=n(119);function c(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}(n);return function(e){const t=(0,h.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=u(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[h,c]=g({queryString:n,groupId:i}),[f,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,d.Dv)(n);return[i,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),p=(()=>{const e=h??f;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{p&&l(p)}),[p]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),v(e)}),[c,v,a]),tabValues:a}}var v=n(2006);const p={tabList:"tabList_V4nf",tabItem:"tabItem_OoUC"};var b=n(3274);function w(e){let{className:t,block:n,selectedValue:o,selectValue:r,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==o&&(h(t),r(i))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...a,className:(0,i.A)("tabs__item",p.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function E(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function S(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",p.tabList),children:[(0,b.jsx)(w,{...e,...t}),(0,b.jsx)(E,{...e,...t})]})}function L(e){const t=(0,v.A)();return(0,b.jsx)(S,{...e,children:c(e.children)},String(t))}},1213:()=>{},6906:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(9474);const i={},a=o.createContext(i);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:t},e.children)}},9607:(e,t,n)=>{n.d(t,{A:()=>S});var o=n(9474),i=n(1615);const a=(e,t)=>e===t?.tagName?.toUpperCase?.(),r=e=>a("DIV",e)||a("SPAN",e),s=e=>a("IMG",e),l=e=>e.complete&&0!==e.naturalHeight,h=e=>a("SVG",e),d=({height:e,offset:t,width:n})=>Math.min((window.innerWidth-2*t)/n,(window.innerHeight-2*t)/e),c=({containerHeight:e,containerWidth:t,hasScalableSrc:n,offset:o,targetHeight:i,targetWidth:a})=>e&&t?!n&&i&&a?(({containerHeight:e,containerWidth:t,offset:n,targetHeight:o,targetWidth:i})=>{const a=d({height:o,offset:n,width:i}),r=i>o?i/t:o/e;return a>1?r:a*r})({containerHeight:e,containerWidth:t,offset:o,targetHeight:i,targetWidth:a}):d({height:e,offset:o,width:t}):1,u=/url(?:\(['"]?)(.*?)(?:['"]?\))/,m=e=>{if(e){if(s(e))return e.currentSrc;if(r(e)){const t=window.getComputedStyle(e).backgroundImage;if(t)return u.exec(t)?.[1]}}},g=({position:e,relativeNum:t})=>{const n=parseFloat(e);return e.endsWith("%")?t*n/100:n},f=/\.svg$/i,v=({hasZoomImg:e,imgSrc:t,isSvg:n,isZoomed:o,loadedImgEl:i,offset:a,shouldRefresh:s,targetEl:l})=>{const h=n||"data:image/svg+xml"===t?.slice?.(0,18)||e||!(!t||!f.test(t)),d=l.getBoundingClientRect(),u=window.getComputedStyle(l),m=null!=i&&r(l),v=null!=i&&!m,p=(({containerHeight:e,containerLeft:t,containerTop:n,containerWidth:o,hasScalableSrc:i,offset:a,targetHeight:r,targetWidth:s})=>{const l=c({containerHeight:e,containerWidth:o,hasScalableSrc:i,offset:a,targetHeight:r,targetWidth:s});return{top:n,left:t,width:o*l,height:e*l,transform:`translate(0,0) scale(${1/l})`}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:h,offset:a,targetHeight:i?.naturalHeight??d.height,targetWidth:i?.naturalWidth??d.width}),b=v?(({containerHeight:e,containerLeft:t,containerTop:n,containerWidth:o,hasScalableSrc:i,objectFit:a,objectPosition:r,offset:s,targetHeight:l,targetWidth:h})=>{if("scale-down"===a&&(a=h<=o&&l<=e?"none":"contain"),"cover"===a||"contain"===a){const d=o/h,u=e/l,m="cover"===a?Math.max(d,u):Math.min(d,u),[f="50%",v="50%"]=r.split(" "),p=g({position:f,relativeNum:o-h*m}),b=g({position:v,relativeNum:e-l*m}),w=c({containerHeight:l*m,containerWidth:h*m,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:h});return{top:n+b,left:t+p,width:h*m*w,height:l*m*w,transform:`translate(0,0) scale(${1/w})`}}if("none"===a){const[a="50%",d="50%"]=r.split(" "),u=g({position:a,relativeNum:o-h}),m=g({position:d,relativeNum:e-l}),f=c({containerHeight:l,containerWidth:h,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:h});return{top:n+m,left:t+u,width:h*f,height:l*f,transform:`translate(0,0) scale(${1/f})`}}if("fill"===a){const t=o/h,n=e/l,a=Math.max(t,n),r=c({containerHeight:l*a,containerWidth:h*a,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:h});return{width:o*r,height:e*r,transform:`translate(0,0) scale(${1/r})`}}return{}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:h,objectFit:u.objectFit,objectPosition:u.objectPosition,offset:a,targetHeight:i.naturalHeight,targetWidth:i.naturalWidth}):void 0,w=m?(({backgroundPosition:e,backgroundSize:t,containerHeight:n,containerLeft:o,containerTop:i,containerWidth:a,hasScalableSrc:r,offset:s,targetHeight:l,targetWidth:h})=>{if("cover"===t||"contain"===t){const d=a/h,u=n/l,m="cover"===t?Math.max(d,u):Math.min(d,u),[f="50%",v="50%"]=e.split(" "),p=g({position:f,relativeNum:a-h*m}),b=g({position:v,relativeNum:n-l*m}),w=c({containerHeight:l*m,containerWidth:h*m,hasScalableSrc:r,offset:s,targetHeight:l,targetWidth:h});return{top:i+b,left:o+p,width:h*m*w,height:l*m*w,transform:`translate(0,0) scale(${1/w})`}}if("auto"===t){const[t="50%",d="50%"]=e.split(" "),u=g({position:t,relativeNum:a-h}),m=g({position:d,relativeNum:n-l}),f=c({containerHeight:l,containerWidth:h,hasScalableSrc:r,offset:s,targetHeight:l,targetWidth:h});return{top:i+m,left:o+u,width:h*f,height:l*f,transform:`translate(0,0) scale(${1/f})`}}{const[d="50%",u="50%"]=t.split(" "),m=g({position:d,relativeNum:a})/h,f=g({position:u,relativeNum:n})/l,v=Math.min(m,f),[p="50%",b="50%"]=e.split(" "),w=g({position:p,relativeNum:a-h*v}),E=g({position:b,relativeNum:n-l*v}),S=c({containerHeight:l*v,containerWidth:h*v,hasScalableSrc:r,offset:s,targetHeight:l,targetWidth:h});return{top:i+E,left:o+w,width:h*v*S,height:l*v*S,transform:`translate(0,0) scale(${1/S})`}}})({backgroundPosition:u.backgroundPosition,backgroundSize:u.backgroundSize,containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:h,offset:a,targetHeight:i.naturalHeight,targetWidth:i.naturalWidth}):void 0,E=Object.assign({},p,b,w);if(o){const e=window.innerWidth/2,t=window.innerHeight/2,n=e-(parseFloat(String(E.left||0))+parseFloat(String(E.width||0))/2),o=t-(parseFloat(String(E.top||0))+parseFloat(String(E.height||0))/2);s&&(E.transitionDuration="0.01ms"),E.transform=`translate(${n}px,${o}px) scale(1)`}return E},p=["img","svg",'[role="img"]',"[data-zoom]"].map((e=>`${e}:not([aria-hidden="true"])`)).join(","),b={overflow:"",width:""};function w(e){return o.createElement(E,{...e})}class E extends o.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1},this.refContent=(0,o.createRef)(),this.refDialog=(0,o.createRef)(),this.refModalContent=(0,o.createRef)(),this.refModalImg=(0,o.createRef)(),this.refWrap=(0,o.createRef)(),this.imgEl=null,this.prevBodyAttrs=b,this.styleModalImg={},this.getDialogContainer=()=>{let e=document.querySelector("[data-rmiz-portal]");return null==e&&(e=document.createElement("div"),e.setAttribute("data-rmiz-portal",""),document.body.appendChild(e)),e},this.setId=()=>{const e=()=>Math.random().toString(16).slice(-4);this.setState({id:e()+e()+e()})},this.setAndTrackImg=()=>{const e=this.refContent.current;e&&(this.imgEl=e.querySelector(p),this.imgEl?(this.changeObserver?.disconnect?.(),this.imgEl?.addEventListener?.("load",this.handleImgLoad),this.imgEl?.addEventListener?.("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElObserver=new ResizeObserver((e=>{const t=e[0];t?.target&&(this.imgEl=t.target,this.setState({}))})),this.imgElObserver.observe(this.imgEl)):this.changeObserver||(this.changeObserver=new MutationObserver(this.setAndTrackImg),this.changeObserver.observe(e,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=e=>{const{isZoomed:t}=this.props;!e&&t?this.zoom():e&&!t&&this.unzoom()},this.handleImgLoad=()=>{const{imgEl:e}=this,t=m(e);if(!t)return;const n=new Image;s(e)&&(n.sizes=e.sizes,n.srcset=e.srcset),n.src=t;const o=()=>{this.setState({loadedImgEl:n})};n.decode().then(o).catch((()=>{l(n)?o():n.onload=o}))},this.handleZoom=()=>{this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogCancel=e=>{e.preventDefault()},this.handleDialogClick=e=>{e.target!==this.refModalContent.current&&e.target!==this.refModalImg.current||this.handleUnzoom()},this.handleKeyDown=e=>{"Escape"!==e.key&&27!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.handleUnzoom())},this.handleWheel=e=>{e.ctrlKey||(e.stopPropagation(),queueMicrotask((()=>{this.handleUnzoom()})))},this.handleTouchStart=e=>{1===e.changedTouches.length&&e.changedTouches[0]&&(this.touchYStart=e.changedTouches[0].screenY)},this.handleTouchMove=e=>{if(null!=this.touchYStart&&e.changedTouches[0]){this.touchYEnd=e.changedTouches[0].screenY;const t=Math.max(this.touchYStart,this.touchYEnd),n=Math.min(this.touchYStart,this.touchYEnd);Math.abs(t-n)>10&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchCancel=()=>{this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.zoom=()=>{this.bodyScrollDisable(),this.refDialog.current?.showModal?.(),this.setState({modalState:"LOADING"}),this.loadZoomImg(),window.addEventListener("wheel",this.handleWheel,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleZoomEnd,{once:!0})},this.handleZoomEnd=()=>{setTimeout((()=>{this.setState({modalState:"LOADED"}),window.addEventListener("resize",this.handleResize,{passive:!0})}),0)},this.unzoom=()=>{this.setState({modalState:"UNLOADING"}),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleUnzoomEnd,{once:!0})},this.handleUnzoomEnd=()=>{setTimeout((()=>{window.removeEventListener("resize",this.handleResize),this.setState({shouldRefresh:!1,modalState:"UNLOADED"}),this.refDialog.current?.close?.(),this.bodyScrollEnable()}),0)},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const e=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${e}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=b},this.loadZoomImg=()=>{const{props:{zoomImg:e}}=this,t=e?.src;if(t){const n=new Image;n.sizes=e?.sizes??"",n.srcset=e?.srcSet??"",n.src=t;const o=()=>{this.setState({isZoomImgLoaded:!0})};n.decode().then(o).catch((()=>{l(n)?o():n.onload=o}))}},this.UNSAFE_handleSvg=()=>{const{imgEl:e,refModalImg:t,styleModalImg:n}=this;if(h(e)){const o=document.createElement("div");o.innerHTML=e.outerHTML,o.querySelectorAll("mask[id]").forEach((e=>{const t=e.id+"-zoom";o.querySelectorAll(`[mask="url(#${e.id})"]`).forEach((e=>{e.setAttribute("mask",`url(#${t})`)})),e.id=t}));const i=o.firstChild;i.style.width=`${n.width||0}px`,i.style.height=`${n.height||0}px`,i.addEventListener("click",this.handleUnzoom),t.current?.firstChild?.remove?.(),t.current?.appendChild?.(i)}}}render(){const{handleDialogCancel:e,handleDialogClick:t,handleUnzoom:n,handleZoom:a,imgEl:l,props:{a11yNameButtonUnzoom:d,a11yNameButtonZoom:c,children:u,classDialog:g,IconUnzoom:f,IconZoom:p,isZoomed:b,wrapElement:w,ZoomContent:E,zoomImg:S,zoomMargin:L},refContent:y,refDialog:I,refModalContent:z,refModalImg:C,refWrap:D,state:{id:M,isZoomImgLoaded:W,loadedImgEl:k,modalState:T,shouldRefresh:A}}=this,N=`rmiz-modal-${M}`,H=`rmiz-modal-img-${M}`,x=r(l),Z=s(l),U=h(l),O=(e=>{if(e)return s(e)?e.alt??void 0:e.getAttribute("aria-label")??void 0})(l),$=m(l),R=Z?l.sizes:void 0,V=Z?l.srcset:void 0,j=!!S?.src,B=l&&(k||U)&&"none"!==window.getComputedStyle(l).display,q=O?`${c}: ${O}`:c,P="LOADING"===T||"LOADED"===T,_=B?"found":"not-found",Y="UNLOADED"===T||"UNLOADING"===T?"hidden":"visible",F={visibility:"UNLOADED"===T?"visible":"hidden"},G=(e=>{if(!e)return{};if(h(e)){const t=e.parentElement,n=e.getBoundingClientRect();if(t){const e=t.getBoundingClientRect();return{height:n.height,left:e.left-n.left,top:e.top-n.top,width:n.width}}return{height:n.height,left:n.left,width:n.width,top:n.top}}return{height:e.offsetHeight,left:e.offsetLeft,width:e.offsetWidth,top:e.offsetTop}})(l);this.styleModalImg=B?v({hasZoomImg:j,imgSrc:$,isSvg:U,isZoomed:b&&P,loadedImgEl:k,offset:L,shouldRefresh:A,targetEl:l}):{};let K=null;if(B){const e=Z||x?o.createElement("img",{alt:O,sizes:R,src:$,srcSet:V,...W&&"LOADED"===T?S:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:H,ref:C,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):U?o.createElement("div",{"data-rmiz-modal-img":!0,ref:C,style:this.styleModalImg}):null,t=o.createElement("button",{"aria-label":d,"data-rmiz-btn-unzoom":"",onClick:n,type:"button"},o.createElement(f,null));K=E?o.createElement(E,{buttonUnzoom:t,modalState:T,img:e,onUnzoom:n}):o.createElement(o.Fragment,null,e,t)}return o.createElement(w,{"aria-owns":N,"data-rmiz":"",ref:D},o.createElement(w,{"data-rmiz-content":_,ref:y,style:F},u),B&&o.createElement(w,{"data-rmiz-ghost":"",style:G},o.createElement("button",{"aria-label":q,"data-rmiz-btn-zoom":"",onClick:a,type:"button"},o.createElement(p,null))),B&&(0,i.createPortal)(o.createElement("dialog",{"aria-labelledby":H,"aria-modal":"true",className:g,"data-rmiz-modal":"",id:N,onClick:t,onClose:n,onCancel:e,ref:I,role:"dialog"},o.createElement("div",{"data-rmiz-modal-overlay":Y}),o.createElement("div",{"data-rmiz-modal-content":"",ref:z},K)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),this.changeObserver?.disconnect?.(),this.imgElObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleZoomEnd),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleUnzoomEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(e){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(e.isZoomed)}}function S(e){const[t,n]=(0,o.useState)(!1);return o.createElement(w,{...e,isZoomed:t,onZoomChange:n})}E.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",IconUnzoom:function(){return o.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return o.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},wrapElement:"div",zoomMargin:0}}}]);