import{u as e,c as C,j as t,d as h,C as P,D as w,b as d,r as k,E as g,F as v}from"./index-t7CWv40U.js";import{b,d as f,a as E}from"./selectors-PwrSgsQG.js";import{a as B}from"./Button-cUvjTgWC.js";const I=e.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`,S=e.img`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`,m=e.span`
  width: 23%;
`,T=e(m)`
  display: flex;
`,j=e.div`
  cursor: pointer;
`,z=e.span`
  margin: 0 10px;
`,D=e.h3`
  padding-left: 12px;
  cursor: pointer;
`;function F(s){const{id:i,name:n,imageUrl:l,price:x,quantity:o}=s,a=C(),p=()=>a(h.addCartItem(s)),c=()=>a(h.removeCartItem(s)),u=()=>a(h.clearCartItem(s));return t.jsxs(I,{"data-testid":`checkout-item-container-${i}`,children:[t.jsx(S,{src:l,alt:n}),t.jsx(m,{children:n}),t.jsxs(T,{children:[t.jsx(j,{"data-testid":"remove",onClick:c,children:"❮"}),t.jsx(z,{"data-testid":"quantity",children:o}),t.jsx(j,{"data-testid":"add",onClick:p,children:"❯"})]}),t.jsx(m,{"data-testid":"price",children:`${x}`}),t.jsx(D,{"data-testid":"clear",onClick:u,children:"✕"})]})}const $=e.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,q=e.form`
  height: 100px;
  // min-width: 500px;
`,A=e(B)`
  margin-left: auto;
  margin-top: 30px;
`,H=e.div`
  padding-bottom: 20px;
`;function Q(){const s=P(),i=w(),n=d(b),l=d(f),[x,o]=k.useState(!1),a=async p=>{if(p.preventDefault(),!s||!i)return;const c=i.getElement(g);if(!c)return;o(!0);const y=await v({totalPrice:l,user:n,stripe:s,card:c})?"Payment successful":"Payment failed";alert(y),o(!1)};return t.jsx($,{children:t.jsxs(q,{onSubmit:a,children:[t.jsx("h2",{children:"Credit Card Payment:"}),t.jsx(g,{}),t.jsx(A,{buttonType:"inverted",isLoading:x,children:"Pay now"}),t.jsxs(H,{children:[t.jsx("p",{children:"*Please use the following test credit card for payments*"}),t.jsx("p",{children:"4242 4242 4242 4242 - (future date) - 242 - 42424"})]})]})})}const R=e.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 15px auto 0;
  }
`,U=e.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  // position: sticky;
  // top: 0px;
  // z-index: 1;
`,r=e.div`
  text-transform: capitalize;
  width: 20%;
  &:last-child {
    width: 8%;
  }
`,L=e.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;function M(){const s=d(E),i=d(f);return t.jsxs(R,{"data-testid":"checkout",children:[t.jsxs(U,{"data-testid":"checkout-header",children:[t.jsx(r,{}),t.jsx(r,{children:t.jsx("span",{children:"Product"})}),t.jsx(r,{children:t.jsx("span",{children:"Quantity"})}),t.jsx(r,{children:t.jsx("span",{children:"Price"})}),t.jsx(r,{})]}),s.map(n=>t.jsx(F,{...n},n.id)),t.jsx(L,{"data-testid":"checkout-total",children:`Total: ${i}`}),t.jsx(Q,{})]})}export{M as default};
