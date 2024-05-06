import{u as o,a as l,j as e}from"./index-t7CWv40U.js";import{u as p,g}from"./categories-KZlYsS52.js";const a=o.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageurl:t})=>`url(${t})`};
`,s=o.div`
  width: 130px;
  height: 100px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
`,x=o.div`
  min-width: 30%;
  height: calc((100dvh - 120px) / 2);
  position: relative;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 10px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    ${a} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${s} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;function h(t){const{title:i,imageUrl:r,route:n}=t,c=l(),d=()=>c(n);return e.jsxs(x,{"data-testid":`directory-item-${i}`,onClick:d,children:[e.jsx(a,{"data-testid":"directory-item-image",imageurl:r}),e.jsxs(s,{children:[e.jsx("h2",{children:i}),e.jsx("p",{children:"Shop Now"})]})]})}const u=o.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;function m(){const{data:t}=p(g);return e.jsx(u,{"data-testid":"directory",children:t==null?void 0:t.categories.map(({id:i,title:r,items:n})=>e.jsx(h,{title:r,imageUrl:n[0].imageUrl,route:`shop/${r.toLowerCase()}`},i))})}function w(){return e.jsx(m,{})}export{w as default};
