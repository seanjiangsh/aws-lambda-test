import{r as s,u as i,b as c,c as g,j as t,d as m,a as f,L as u,R as v,s as w,O as j}from"./index-t7CWv40U.js";import{s as C,a as b,b as y,c as O}from"./selectors-PwrSgsQG.js";import{B as E,G as I,I as S,a as k}from"./Button-cUvjTgWC.js";var x;function d(){return d=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n},d.apply(this,arguments)}var B=function(e){return s.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:50,height:39},e),x||(x=s.createElement("g",{fill:"none",fillRule:"evenodd"},s.createElement("path",{fill:"#808282",d:"m3 14 22 12.5L47 14l-6.145 25H9.085z"}),s.createElement("path",{fill:"#101A1A",fillOpacity:.263,d:"m25 8 15 31H10z"}),s.createElement("circle",{cx:2,cy:9,r:2,fill:"#5E6363"}),s.createElement("circle",{cx:25,cy:2,r:2,fill:"#5E6363"}),s.createElement("circle",{cx:48,cy:9,r:2,fill:"#5E6363"}))))};function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n},p.apply(this,arguments)}var z=function(e){return s.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 407.453 407.453"},e),s.createElement("path",{d:"M255.099 116.515a8.126 8.126 0 0 0 8.129-8.129 8.127 8.127 0 0 0-8.129-8.129H143.486a8.126 8.126 0 0 0-8.129 8.129 8.127 8.127 0 0 0 8.129 8.129z",style:{fill:"#010002"}}),s.createElement("path",{d:"M367.062 100.258H311.69a8.126 8.126 0 0 0-8.129 8.129 8.127 8.127 0 0 0 8.129 8.129h47.243v274.681H48.519V116.515h44.536a8.126 8.126 0 0 0 8.129-8.129 8.127 8.127 0 0 0-8.129-8.129H40.391a8.126 8.126 0 0 0-8.129 8.129v290.938a8.127 8.127 0 0 0 8.129 8.129h326.671a8.126 8.126 0 0 0 8.129-8.129V108.386a8.12 8.12 0 0 0-8.129-8.128",style:{fill:"#010002"}}),s.createElement("path",{d:"M282.59 134.796a8.126 8.126 0 0 0 8.129-8.129V67.394C290.718 30.238 250.604 0 201.101 0c-49.308 0-89.414 30.238-89.414 67.394v59.274c0 4.495 3.642 8.129 8.129 8.129s8.129-3.633 8.129-8.129V67.394c0-28.198 32.823-51.137 73.36-51.137 40.334 0 73.157 22.939 73.157 51.137v59.274a8.12 8.12 0 0 0 8.128 8.128M98.892 147.566c0 11.526 9.389 20.907 20.923 20.907s20.923-9.38 20.923-20.907c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65-2.569 0-4.666-2.089-4.666-4.65 0-4.495-3.642-8.129-8.129-8.129s-8.127 3.634-8.127 8.129M282.59 168.473c11.534 0 20.923-9.38 20.923-20.907a8.127 8.127 0 0 0-8.129-8.129 8.126 8.126 0 0 0-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65s-4.666-2.089-4.666-4.65a8.127 8.127 0 0 0-8.129-8.129 8.126 8.126 0 0 0-8.129 8.129c.002 11.526 9.39 20.907 20.925 20.907",style:{fill:"#010002"}}))};const H=i.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,N=i(z)`
  width: 24px;
  height: 24px;
`,$=i.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;function L(){const n=c(C),e=g(),a=()=>e(m.setCartOpened());return t.jsxs(H,{"data-testid":"cart-icon",onClick:a,children:[t.jsx(N,{}),t.jsx($,{"data-testid":"cart-item-count",children:n})]})}const M=i.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  img {
    width: 30%;
  }
`,D=i.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`,h=i.span`
  font-size: 16px;
`,G=s.memo(n=>{const{name:e,imageUrl:a,price:o,quantity:r}=n;return t.jsxs(M,{children:[t.jsx("img",{src:a,alt:e}),t.jsxs(D,{children:[t.jsx(h,{children:e}),t.jsx(h,{children:`${r} x ${o}`})]})]})}),T=G,U=i.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${E},
  ${I},
  ${S} {
    margin-top: auto;
  }
`,R=i.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`,V=i.span`
  font-size: 18px;
  margin: 50px auto;
`;function A(){const n=c(b),e=g(),a=f(),o=s.useCallback(()=>{a("/checkout"),e(m.setCartOpened())},[a,e]);return t.jsxs(U,{"data-testid":"cart-drop-down",children:[t.jsx(R,{children:n.length?n.map(r=>t.jsx(T,{...r},r.id)):t.jsx(V,{children:"Your cart is empty"})}),t.jsx(k,{"data-testid":"drop-down-goto-checkout",onClick:o,children:"GO TO CHECKOUT"})]})}const P=i.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: white;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.1);
`,_=i(u)`
  width: 50px;
  padding: 10px;
  text-align: center;
`,q=i.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`,l=i(u)`
  padding: 10px 15px;
  cursor: pointer;
`,F=i.div`
  margin-top: 60px;
  height: calc(100dvh - 60px);
  overflow: auto;
  width: 100%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;function Q(){const n=c(y),e=c(O);return t.jsxs(v.Fragment,{children:[t.jsxs(P,{"data-testid":"navigation",children:[t.jsx(_,{to:"/",children:t.jsx(B,{"data-testid":"nav-crwn-logo"})}),t.jsxs(q,{children:[t.jsx(l,{to:"/shop",children:"SHOP"}),n?t.jsx(l,{"data-testid":"nav-sign-out",as:"span",onClick:w,children:"SIGN OUT"}):t.jsx(l,{"data-testid":"nav-sign-in",to:"/auth",children:"SIGN IN"}),t.jsx(L,{})]}),e&&t.jsx(A,{})]}),t.jsx(F,{children:t.jsx(j,{})})]})}export{Q as default};
