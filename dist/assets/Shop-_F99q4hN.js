import{u as a,r as p,c as l,j as t,d as g,L as u,S as c,e as h,R as y,N as w,f as j,g as d}from"./index-t7CWv40U.js";import{u as m,g as f,a as v}from"./categories-KZlYsS52.js";import{a as C}from"./Button-cUvjTgWC.js";const b=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 45vw;
    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
  @media screen and (max-width: 400px) {
    width: 80vw;
    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }
    &:hover {
      img {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`,P=a.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`,T=a.span`
  width: 90%;
  margin-bottom: 15px;
`,R=a.span`
  width: 10%;
`,k=p.memo(n=>{const{name:e,imageUrl:r,price:o}=n,i=l(),s=()=>i(g.addCartItem(n));return t.jsxs(b,{"data-testid":"product-card",children:[t.jsx("img",{src:r,alt:e}),t.jsxs(P,{children:[t.jsxs(T,{children:[e," "]}),t.jsx(R,{children:o})]}),t.jsx(C,{buttonType:"inverted",onClick:s,children:"Add to cart"})]})}),x=k,B=a.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`,z=a.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  padding: 20px;
  @media screen and (max-width: 800px) {
    padding: 0;
  }
`,A=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding: 20px;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 25px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 25px;
  }
`;function L(n){const{title:e,products:r}=n,o=p.useMemo(()=>r.filter((i,s)=>s<4),[r]);return t.jsxs(B,{children:[t.jsx(z,{children:t.jsx(u,{to:e.toLowerCase(),children:e.toUpperCase()})}),t.jsx(A,{children:o.map(i=>t.jsx(x,{...i},i.id))})]})}function N(){const{data:n}=m(f);return t.jsx("div",{"data-testid":"shop-preview",children:n?n.categories.map(({title:e,items:r})=>t.jsx(L,{title:e,products:r},e)):t.jsx(c,{})})}const S=a.div`
  font-size: 38px;
  margin: 25px;
  text-align: center;
`,U=a.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  justify-items: center;
  padding: 20px;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 15px;
    row-gap: 25px;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 25px;
  }
`;function E(){const e=h().category||"",r={variables:{title:e}},{loading:o,data:i}=m(v,r);return o?t.jsx(c,{}):i!=null&&i.getCategoryByTitle?t.jsxs(y.Fragment,{children:[t.jsx(S,{children:e.toUpperCase()}),t.jsx(U,{children:i.getCategoryByTitle.items.map(s=>t.jsx(x,{...s},s.id))})]}):t.jsx(w,{to:"/shop"})}function D(){return t.jsxs(j,{children:[t.jsx(d,{index:!0,element:t.jsx(N,{})}),t.jsx(d,{path:":category",element:t.jsx(E,{})})]})}export{D as default};
