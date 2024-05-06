import{u as o,P as d,r as u,j as n}from"./index-t7CWv40U.js";const r=o.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: 12px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    &:hover {
      border: 1px solid #999999;
      background-color: #cccccc;
    }
  }
`,b=o(r)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`,p=o(r)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`,h=o(d)`
  width: 30px;
  height: 30px;
`,g=t=>{switch(t){case"google-sign-in":return b;case"inverted":return p;default:return r}},x=u.memo(t=>{const{buttonType:e,isLoading:c,children:s,...a}=t,i=g(e),l={"button-type":e||""};return n.jsx(i,{...a,...l,children:c?n.jsx(h,{"data-testid":"button-spinner"}):s})}),f=x;export{r as B,b as G,p as I,f as a};
