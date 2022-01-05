!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],e):"object"==typeof exports?exports["react-timeline"]=e(require("react"),require("styled-components")):n["react-timeline"]=e(n.react,n["styled-components"])}(this,(function(n,e){return(()=>{"use strict";var t={156:e=>{e.exports=n},608:n=>{n.exports=e}},r={};function o(n){var e=r[n];if(void 0!==e)return e.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})();var i={};return(()=>{o.r(i),o.d(i,{TimelineTheme:()=>On,default:()=>kn});var n=o(156),e=o.n(n),t=o(608),r=o.n(t);const a=o.p+"87bf9acd23e9e51279c71a6960d3d690.ttf",l=o.p+"763270213a5cf45633fcb467efe070be.ttf",c=o.p+"6539bf20d81687a80c0ffae876cf012f.ttf",f=o.p+"909113d8bff51649324f44f2bc2dc030.ttf",d=o.p+"1525928acec5ca94ffa0506e007b1139.ttf",u=o.p+"7f9491c8a3642e25c85009a0445aaa4f.ttf",s=o.p+"b67cb92683f4227ef9c52d21dba176e8.ttf";const p=(0,t.createGlobalStyle)(x||(m=["\n    \n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: bold;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: italic;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: bold;\n        font-style: italic;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Sans';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Sans';\n        src: url(",") format('truetype');\n        font-weight: bold;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Sans';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: italic;\n    }\n\n    body { \n        font-family: 'IBM Plex Sans';\n        font-weight: normal; \n    }\n"],h=["\n    \n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: bold;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: italic;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Mono';\n        src: url(",") format('truetype');\n        font-weight: bold;\n        font-style: italic;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Sans';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Sans';\n        src: url(",") format('truetype');\n        font-weight: bold;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'IBM Plex Sans';\n        src: url(",") format('truetype');\n        font-weight: normal;\n        font-style: italic;\n    }\n\n    body { \n        font-family: 'IBM Plex Sans';\n        font-weight: normal; \n    }\n"],Object.defineProperty?Object.defineProperty(m,"raw",{value:h}):m.raw=h,x=m),a,l,f,c,d,u,s);var m,h,x,g={id:"__default",background:"#FFFFFF",fonts:{main:"IBM Plex Mono",secondary:"IBM Plex Sans"},border:{color:"#E6E6E6",radius:"4px"},timeline:{color:"#A3ACB9",spacing:{top:"10px",bottom:"10px"},point:{spacing:{top:"0px",bottom:"2px"}}},header:{color:"#313C4C"},card:{colors:{text:"#5F646A",background:"#FFFFFF",active:{border:"#69B56A",background:"#FFFFFF",text:"#5F646A"}},shadow:"2px 2px 4px 0px rgba(0,0,0, 0.2)",spacing:{top:"10px",bottom:"15px"}},panel:{colors:{title:"#5F646A",subtitle:"#5F646A",content:"#5F646A"},padding:{left:"40px",right:"20px"}},breakpoints:{lg:"1200px",md:"1040px",sm:"720px",xs:"400px"}},b=function(n){if(n instanceof Date)return"".concat(n.toLocaleDateString()," ").concat(n.toLocaleTimeString());var e,t=n.start.toLocaleDateString();return e="present"===n.end?"Present":n.end.toLocaleDateString(),"".concat(t," - ").concat(e)};function y(){return y=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)}const w=({styles:n={},...t})=>e().createElement("svg",y({width:"14",height:"14",xmlns:"http://www.w3.org/2000/svg"},t),e().createElement("circle",{cx:"7",cy:"7",r:"7",fillRule:"evenodd"}));var v=function(n){return"skeleton"in n},E=r().button(j||(j=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  padding: 10px; \n  margin-top: ",";\n  margin-bottom: ",";\n  width: 430px; \n  min-height: 120px; \n  display: flex; \n  cursor: pointer; \n  flex-direction: column; \n  justify-content: space-between;\n  background-color: ","; \n  border: solid 1px; \n  border-color: ",";\n  border-radius: ",";\n  /* offset-x | offset-y | blur-radius | spread-radius | color */\n  box-shadow: ",";\n  @media screen and (max-width: ",") {\n    width: 300px; \n  }\n  @media screen and (max-width: ",") {\n    width: auto;   \n  } \n"],["\n  padding: 10px; \n  margin-top: ",";\n  margin-bottom: ",";\n  width: 430px; \n  min-height: 120px; \n  display: flex; \n  cursor: pointer; \n  flex-direction: column; \n  justify-content: space-between;\n  background-color: ","; \n  border: solid 1px; \n  border-color: ",";\n  border-radius: ",";\n  /* offset-x | offset-y | blur-radius | spread-radius | color */\n  box-shadow: ",";\n  @media screen and (max-width: ",") {\n    width: 300px; \n  }\n  @media screen and (max-width: ",") {\n    width: auto;   \n  } \n"])),(function(n){return n.theme.card.spacing.top}),(function(n){return n.theme.card.spacing.bottom}),(function(n){var e=n.theme,t=n.active,r=n.backgroundColor;return t?r||e.card.colors.active.background:e.card.colors.background}),(function(n){var e=n.theme,t=n.active,r=n.color;return t?r||e.card.colors.active.border:e.border.color}),(function(n){return n.theme.border.radius}),(function(n){var e=n.theme;return n.active?e.card.shadow:"none"}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.theme.breakpoints.sm}));const P=E;var j,O,k,F,M,B,S,I,C,A,X,z=r().div(O||(O=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  > h3 {\n    font-family: ",";\n    color: ",";\n    text-align: left; \n    font-size: 16px; \n    font-weight: bold; \n    margin: 0px; \n  }\n"],["\n  > h3 {\n    font-family: ",";\n    color: ",";\n    text-align: left; \n    font-size: 16px; \n    font-weight: bold; \n    margin: 0px; \n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){var e=n.active,t=n.theme;return e?t.card.colors.active.text:t.card.colors.text})),D=r().div(k||(k=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  > p {\n    font-family: ",";\n    color: ",";\n    text-align: left; \n    font-size: 12px; \n    font-weight: normal; \n  }\n"],["\n  > p {\n    font-family: ",";\n    color: ",";\n    text-align: left; \n    font-size: 12px; \n    font-weight: normal; \n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){var e=n.active,t=n.theme;return e?t.card.colors.active.text:t.card.colors.text})),T=r().div(F||(F=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  > span {\n    font-family: ",";\n    color: ",";\n    font-size: 12px; \n    font-weight: normal; \n  }\n"],["\n  > span {\n    font-family: ",";\n    color: ",";\n    font-size: 12px; \n    font-weight: normal; \n  }\n"])),(function(n){return n.theme.fonts.main}),(function(n){var e=n.active,t=n.theme;return e?t.card.colors.active.text:t.card.colors.text})),_=(r().div(M||(M=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  display: none;\n  @media screen and (max-width: ",") {\n    display: block;   \n  } \n"],["\n  display: none;\n  @media screen and (max-width: ",") {\n    display: block;   \n  } \n"])),(function(n){return n.theme.breakpoints.sm})),function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}),L=r().li(B||(B=_([" \n  display: flex; \n  flex-direction: row; \n  justify-content: flex-start;\n  position: relative;\n  margin-top: ",";\n  margin-bottom: ",";\n"],[" \n  display: flex; \n  flex-direction: row; \n  justify-content: flex-start;\n  position: relative;\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(function(n){var e=n.theme;return"condensed"===n.display?"0px":e.timeline.spacing.top}),(function(n){var e=n.theme;return"condensed"===n.display?"0px":e.timeline.spacing.bottom})),R=r().div(S||(S=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  display: flex;\n  padding-top: ",";\n  padding-bottom: ",";\n  > svg {\n    fill: ","\n  }\n"],["\n  display: flex;\n  padding-top: ",";\n  padding-bottom: ",";\n  > svg {\n    fill: ","\n  }\n"])),(function(n){return n.theme.timeline.point.spacing.top}),(function(n){return n.theme.timeline.point.spacing.bottom}),(function(n){return n.theme.timeline.color})),q=r().div(I||(I=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}([" \n  flex-grow: 1; \n  width: 2px;\n  border-left: solid 1px; \n  border-color: ",";\n"],[" \n  flex-grow: 1; \n  width: 2px;\n  border-left: solid 1px; \n  border-color: ",";\n"])),(function(n){return n.theme.timeline.color})),$=r().div(C||(C=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}([" \n  display: flex;  \n  flex-direction: column; \n  align-items: center;\n  justify-content: center; \n  margin-right: 10px; \n"],[" \n  display: flex;  \n  flex-direction: column; \n  align-items: center;\n  justify-content: center; \n  margin-right: 10px; \n"]))),G=r().li(A||(A=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}([" \n  display: flex; \n  flex-direction: column; \n  justify-content: flex-start;\n  position: relative;\n  margin-top: ",";\n  margin-bottom: ",";\n\n  > h3 {\n    font-family: ",";\n    color: ",";\n    text-align: left; \n    font-size: 16px; \n    font-weight: bold; \n    margin: 0px; \n  }\n\n  > span {\n    font-family: ",";\n    color: ",";\n    font-size: 12px; \n    font-weight: normal; \n  }\n\n"],[" \n  display: flex; \n  flex-direction: column; \n  justify-content: flex-start;\n  position: relative;\n  margin-top: ",";\n  margin-bottom: ",";\n\n  > h3 {\n    font-family: ",";\n    color: ",";\n    text-align: left; \n    font-size: 16px; \n    font-weight: bold; \n    margin: 0px; \n  }\n\n  > span {\n    font-family: ",";\n    color: ",";\n    font-size: 12px; \n    font-weight: normal; \n  }\n\n"])),(function(n){return n.theme.timeline.spacing.top}),(function(n){return n.theme.timeline.spacing.bottom}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.card.colors.text}),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.card.colors.text})),H=(0,t.keyframes)(X||(X=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n    0% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  20% {\n    opacity: 1;\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  28% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  51% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  58% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  82% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  83% {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  96% {\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  100% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n"],["\n    0% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  20% {\n    opacity: 1;\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  28% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  51% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  58% {\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n  82% {\n    transform: scaleX(1);\n    transform-origin: right;\n  }\n  83% {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n  96% {\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n  100% {\n    opacity: 0.3;\n    transform: scaleX(0);\n    transform-origin: left;\n  }\n"])));const N=r().div(J||(J=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n\n  width: ",";  \n  height: ",";  \n  margin-top: ","px;  \n  margin-bottom: ","px;  \n\n  position: relative;\n  padding: 0;\n  border: none;\n  background-color: #EBEBEB; \n  box-shadow: none;\n  pointer-events: none;\n\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    animation: 3000ms ease-in-out "," infinite;\n    background: #adadad; \n    content: '';\n    will-change: transform-origin, transform, opacity;\n  }\n\n"],["\n\n  width: ",";  \n  height: ",";  \n  margin-top: ","px;  \n  margin-bottom: ","px;  \n\n  position: relative;\n  padding: 0;\n  border: none;\n  background-color: #EBEBEB; \n  box-shadow: none;\n  pointer-events: none;\n\n  &:hover,\n  &:focus,\n  &:active {\n    border: none;\n    cursor: default;\n    outline: none;\n  }\n\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    animation: 3000ms ease-in-out "," infinite;\n    background: #adadad; \n    content: '';\n    will-change: transform-origin, transform, opacity;\n  }\n\n"])),(function(n){return n.width}),(function(n){return n.height}),(function(n){var e=n.spacing;return(void 0===e?[10,10]:e)[0]}),(function(n){var e=n.spacing;return(void 0===e?[10,10]:e)[1]}),H);var J;const K=r().div(Q||(Q=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\nwidth: ",";\n@media screen and (max-width: ",") {\n    width: ",";\n  } \n  @media screen and (max-width: ",") {\n    width: ",";\n  } \n  @media screen and (max-width: ",") {\n    width: ",";\n  } \n"],["\nwidth: ",";\n@media screen and (max-width: ",") {\n    width: ",";\n  } \n  @media screen and (max-width: ",") {\n    width: ",";\n  } \n  @media screen and (max-width: ",") {\n    width: ",";\n  } \n"])),(function(n){return n.lg}),(function(n){return n.theme.breakpoints.md}),(function(n){return n.md}),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.sm}),(function(n){return n.theme.breakpoints.xs}),(function(n){return n.xs}));var Q,U=function(){return e().createElement(L,{display:"normal"},e().createElement($,{"data-name":"separator"},e().createElement(R,null,e().createElement(w,null)),e().createElement(q,null)),e().createElement(K,{lg:"430px",md:"300px",sm:"280",xs:"260px"},e().createElement(N,{width:"100%",height:"120px"})))};const V=function(n){if(v(n))return e().createElement(U,null);var t=n.id,r=n.title,o=n.date,i=n.description,a=void 0===i?"":i,l=n.active,c=void 0!==l&&l,f=n.color,d=n.icon,u=n.backgroundColor,s=n.display,p=n.customDateRenderer,m=n.onClick,h=n.onMouseEnter,x=n.onMouseLeave;return e().createElement(L,{display:s},e().createElement($,{"data-name":"separator"},e().createElement(R,null,d||e().createElement(w,null)),e().createElement(q,null)),"normal"===s&&e().createElement(P,{color:f,backgroundColor:u,active:c,onClick:function(){return m(t)},onMouseEnter:function(){return h(t)},onMouseLeave:function(){return x(t)}},e().createElement(z,{active:c},e().createElement("h3",null,r)),e().createElement(D,{active:c},e().createElement("p",null,a)),e().createElement(T,{active:c},e().createElement("span",null,p?p(o):b(o)))),"condensed"===s&&e().createElement(G,null,e().createElement("h3",null,r),e().createElement("span",null,p?p(o):b(o))))};var W,Y,Z=r().div(W||(W=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  width: 100%; \n  margin: 30px 0px 20px 0px; \n"],["\n  width: 100%; \n  margin: 30px 0px 20px 0px; \n"]))),nn=r().h2(Y||(Y=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  padding-bottom: 10px; \n  font-family: ","; \n  color: ","; \n  border-bottom: solid 1px; \n  border-color: ","; \n  margin: 0px; \n"],["\n  padding-bottom: 10px; \n  font-family: ","; \n  color: ","; \n  border-bottom: solid 1px; \n  border-color: ","; \n  margin: 0px; \n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.header.color}),(function(n){return n.theme.border.color}));const en=function(n){var t=n.title,r=void 0===t?"React Timeline":t;return e().createElement(Z,null,e().createElement(nn,null,r))};var tn,rn,on,an,ln=r().div(tn||(tn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  border-left: solid 1px; \n  padding-top: 0px; \n  padding-bottom: 0px; \n  padding-right: ","; \n  padding-left: ","; \n  height: 95%; \n  border-color: ","; \n"],["\n  border-left: solid 1px; \n  padding-top: 0px; \n  padding-bottom: 0px; \n  padding-right: ","; \n  padding-left: ","; \n  height: 95%; \n  border-color: ","; \n"])),(function(n){return n.theme.panel.padding.right}),(function(n){return n.theme.panel.padding.left}),(function(n){return n.theme.border.color})),cn=r().h3(rn||(rn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  padding-bottom: 10px; \n  font-size: 28px; \n  font-weight: bold;\n  font-family: ","; \n  color: ","; \n  margin: 20px 0px 0px 0px; \n"],["\n  padding-bottom: 10px; \n  font-size: 28px; \n  font-weight: bold;\n  font-family: ","; \n  color: ","; \n  margin: 20px 0px 0px 0px; \n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.panel.colors.title})),fn=r().h5(on||(on=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  font-family: ","; \n  font-size: 17px; \n  font-weight: normal;\n  color: ","; \n  margin: 0px 0px 20px 0px; \n"],["\n  font-family: ","; \n  font-size: 17px; \n  font-weight: normal;\n  color: ","; \n  margin: 0px 0px 20px 0px; \n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.panel.colors.subtitle})),dn=r().div(an||(an=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  max-width: 100%; \n  font-family: ","; \n  font-size: 14px; \n  font-weight: normal;\n  line-height: 20px; \n  color: ","; \n"],["\n  max-width: 100%; \n  font-family: ","; \n  font-size: 14px; \n  font-weight: normal;\n  line-height: 20px; \n  color: ","; \n"])),(function(n){return n.theme.fonts.main}),(function(n){return n.theme.panel.colors.content})),un=function(){return e().createElement(ln,null,e().createElement(K,{lg:"500px",md:"280px",sm:"0px",xs:"0px"},e().createElement(N,{width:"80%",height:"40px"}),e().createElement(N,{width:"40%",height:"20px",spacing:[10,20]}),e().createElement(N,{width:"100%",height:"20px"}),e().createElement(N,{width:"95%",height:"20px"}),e().createElement(N,{width:"80%",height:"20px"}),e().createElement(N,{width:"90%",height:"20px"})))},sn=function(){return sn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},sn.apply(this,arguments)};const pn=function(n){if(v(n))return e().createElement(un,null);var t=n.event,r=n.customDateRenderer,o=e().useState(null),i=o[0],a=o[1],l=function(){var n=e().useState({}),t=n[0],r=n[1];return{setContentCache:function(n,e){var o=sn({},t);o[n]=e,r(o)},getContentCache:function(n){return t[n]}}}(),c=l.setContentCache,f=l.getContentCache;return e().useEffect((function(){!function(n){var e,t,r,o;e=void 0,t=void 0,o=function(){var e,t;return function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,(function(r){switch(r.label){case 0:return a(null),(e=f(n.id))?(a(e),[3,3]):[3,1];case 1:return[4,n.content()];case 2:t=r.sent(),a(t),c(n.id,t),r.label=3;case 3:return[2]}}))},new((r=void 0)||(r=Promise))((function(n,i){function a(n){try{c(o.next(n))}catch(n){i(n)}}function l(n){try{c(o.throw(n))}catch(n){i(n)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(a,l)}c((o=o.apply(e,t||[])).next())}))}(t)}),[t]),i?e().createElement(ln,null,e().createElement(cn,null,t.title),e().createElement(fn,null,r?r(t.date):b(t.date)),e().createElement(dn,null,i)):e().createElement(un,null)};var mn,hn,xn,gn,bn=r().div(mn||(mn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  background-color: ","; \n"],["\n  background-color: ","; \n"])),(function(n){return n.theme.background})),yn=r().ul(hn||(hn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  height: 100%; \n  overflow: scroll; \n  padding-left: 10px; \n  padding-right: 40px; \n  margin: 0px; \n  flex-shrink: 0; \n  @media screen and (max-width: ",") {\n    width: 95%;\n  } \n  @media screen and (max-width: ",") {\n    width: 85%;\n  } \n"],["\n  height: 100%; \n  overflow: scroll; \n  padding-left: 10px; \n  padding-right: 40px; \n  margin: 0px; \n  flex-shrink: 0; \n  @media screen and (max-width: ",") {\n    width: 95%;\n  } \n  @media screen and (max-width: ",") {\n    width: 85%;\n  } \n"])),(function(n){return n.theme.breakpoints.sm}),(function(n){return n.theme.breakpoints.xs})),wn=r().div(xn||(xn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  @media screen and (max-width: ",") {\n    display: none;   \n  } \n"],["\n  @media screen and (max-width: ",") {\n    display: none;   \n  } \n"])),(function(n){return n.theme.breakpoints.sm})),vn=r().div(gn||(gn=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}(["\n  display: flex; \n  flex-wrap: no-wrap;\n  height: ",";\n  width: ",";\n  @media screen and (max-width: ",") {\n    width: 100%;   \n    height: auto; \n  } \n  \n"],["\n  display: flex; \n  flex-wrap: no-wrap;\n  height: ",";\n  width: ",";\n  @media screen and (max-width: ",") {\n    width: 100%;   \n    height: auto; \n  } \n  \n"])),(function(n){var e=n.height;return"".concat(e,"px")}),(function(n){var e=n.width;return e?"".concat(e,"px"):"100%"}),(function(n){return n.theme.breakpoints.sm})),En=function(n){var t=n.showDetailPanel,r=n.height,o=n.width;return e().createElement(bn,null,e().createElement(vn,{height:r,width:o},e().createElement(yn,null,e().createElement(V,{skeleton:!0}),e().createElement(V,{skeleton:!0}),e().createElement(V,{skeleton:!0}),e().createElement(V,{skeleton:!0})),e().createElement(wn,null,t&&e().createElement(wn,null,e().createElement(pn,{skeleton:!0})))))};const Pn=function(n){if(v(n))return e().createElement(En,{showDetailPanel:n.showDetailPanel,height:n.hieght,width:n.width});var t,r=n.events,o=n.activeEventId,i=n.title,a=void 0===i?"React Timeline":i,l=n.height,c=void 0===l?800:l,f=n.width,d=n.icon,u=n.showHeader,s=void 0===u||u,p=n.showDetailPanel,m=void 0===p||p,h=n.display,x=void 0===h?"normal":h,g=n.customDateRenderer,b=n.onClick,y=n.onMouseEnter,w=n.onMouseLeave,E=r&&(o||r[0].id)||"",P=e().useState(E),j=P[0],O=P[1],k=function(n){b&&b(n),o||O(n)},F=function(n){y&&y(n)},M=function(n){w&&w(n)},B=function(n){return n.icon?n.icon:d||null};return r?e().createElement(bn,null,s&&e().createElement(en,{title:a}),e().createElement(vn,{height:c,width:f},e().createElement(yn,null,r.map((function(n,t){return e().createElement(V,{key:n.id,id:n.id,title:n.title,description:n.description,date:n.date,icon:B(n),active:j===n.id,display:x,customDateRenderer:g,onClick:k,onMouseEnter:F,onMouseLeave:M})}))),m&&e().createElement(wn,null,e().createElement(pn,{event:(t=j,r.find((function(n){return n.id===t}))),customDateRenderer:g})))):e().createElement(En,null)};var jn=function(){return jn=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},jn.apply(this,arguments)};const On={default:g,condensed:{id:"__default",background:"#FFFFFF",fonts:{main:"IBM Plex Mono",secondary:"IBM Plex Sans"},border:{color:"#E6E6E6",radius:"4px"},timeline:{color:"#A3ACB9",spacing:{top:"0px",bottom:"80px"},point:{spacing:{top:"4px",bottom:"4px"}}},header:{color:"#313C4C"},card:{colors:{text:"#5F646A",background:"#FFFFFF",active:{border:"#69B56A",background:"#FFFFFF",text:"#5F646A"}},shadow:"2px 2px 4px 0px rgba(0,0,0, 0.2)",spacing:{top:"10px",bottom:"15px"}},panel:{colors:{title:"#5F646A",subtitle:"#5F646A",content:"#5F646A"},padding:{left:"40px",right:"20px"}},breakpoints:{lg:"1200px",md:"1040px",sm:"720px",xs:"400px"}},dark:{id:"__default",fonts:{main:"IBM Plex Sans",secondary:"IBM Plex Mono"},border:{color:"#1E526B",radius:"0px"},timeline:{color:"#2D7CA1",spacing:{top:"10px",bottom:"15px"},point:{spacing:{top:"0px",bottom:"2px"}}},header:{color:"#E6E6E6"},card:{colors:{text:"#5F646A",background:"#E3ECFA",active:{border:"#42B7ED",background:"#42B7ED",text:"#FFFFFF"}},shadow:"2px 2px 4px 0px rgba(0,0,0, 0.2)",spacing:{top:"0px",bottom:"0px"}},panel:{colors:{title:"#E6E6E6",subtitle:"#E6E6E6",content:"#E6E6E6"},padding:{left:"40px",right:"20px"}},background:"#09181F",breakpoints:{lg:"1200px",md:"1040px",sm:"720px",xs:"400px"}}},kn=function(n){var r=n.theme,o=void 0===r?g:r,i=n.isLoading,a=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(n,["theme","isLoading"]);return e().useEffect((function(){console.log("[react-timeline]: Render Build v0.0.1. See https://github.com/ddluc/react-timeline for for more information")}),[]),e().createElement(t.ThemeProvider,{theme:o},"__default"===o.id&&e().createElement(p,null),i?e().createElement(Pn,jn({},a,{skeleton:!0})):e().createElement(Pn,jn({},a)))}})(),i})()}));