import{H as C,u as g,j as e,r,I as F,J as S,K as k,M as I}from"./index-t7CWv40U.js";import{a as f}from"./Button-cUvjTgWC.js";const y=C`
  top: -14px;
  font-size: 12px;
  color: black;
`,P=g.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`,j=g.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({shrink:n})=>n&&y}
`,N=g.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${j} {
    ${y}
  }
`;function h(n){const{id:t,label:a,...s}=n,c=String(s.value).length?"true":void 0;return e.jsxs(P,{children:[e.jsx(N,{id:t,"data-testid":t,...s}),e.jsx(j,{htmlFor:t,shrink:c,children:a})]})}const E=g.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
  margin-bottom: 30px;
`,A=g.div`
  display: flex;
  justify-content: space-between;
`,q={email:"",password:""};function G(){const[n,t]=r.useState(q),{email:a,password:s}=n,d=!a||!s,c=async()=>{await S()},x=r.useCallback(async u=>{u.preventDefault();try{await F(a,s)}catch(p){const m=p;alert("Login failed, please try again"),console.warn(m)}},[a,s]),w=r.useCallback(u=>{const{value:p}=u.target,m={...n,email:p};t(m)},[n]),b=r.useCallback(u=>{const{value:p}=u.target,m={...n,password:p};t(m)},[n]);return e.jsxs(E,{children:[e.jsx("h2",{children:"I already have an account"}),e.jsx("span",{children:"Sign in with your email and passrowd"}),e.jsxs("form",{onSubmit:x,children:[e.jsx(h,{id:"sign-in-input-email",label:"Email",type:"email",required:!0,value:a,onChange:w}),e.jsx(h,{id:"sign-in-input-password",label:"Password",type:"password",required:!0,value:s,onChange:b}),e.jsxs(A,{children:[e.jsx(f,{type:"submit",disabled:d,children:"SIGN IN"}),e.jsx(f,{type:"button",buttonType:"google-sign-in",onClick:c,children:"GOOGLE SIGN IN"})]})]})]})}const D=g.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  h2 {
    margin: 10px 0;
  }
`,U={displayName:"",email:"",password:"",confirmPassword:""};function $(){const[n,t]=r.useState(U),{displayName:a,email:s,password:d,confirmPassword:c}=n,x=!a||!s||!d||!c||d!==c,w=r.useCallback(l=>{const{value:o}=l.target,i={...n,displayName:o};t(i)},[n]),b=r.useCallback(l=>{const{value:o}=l.target,i={...n,email:o};t(i)},[n]),u=r.useCallback(l=>{const{value:o}=l.target,i={...n,password:o};t(i)},[n]),p=r.useCallback(l=>{const{value:o}=l.target,i={...n,confirmPassword:o};t(i)},[n]),m=r.useCallback(async l=>{l.preventDefault();try{const o=[s,d],{user:i}=await k(...o);await I(i,{displayName:a})}catch(o){const v=`Failed to create new user: ${o.code}`;alert(v)}},[a,s,d]);return e.jsxs(D,{"data-testid":"sign-up",children:[e.jsx("h2",{children:"I do not have an account"}),e.jsx("span",{children:"Sign up with your email and passrowd"}),e.jsxs("form",{onSubmit:m,children:[e.jsx(h,{id:"sign-up-input-displayName",label:"Display Name",type:"text",required:!0,value:a,onChange:w}),e.jsx(h,{id:"sign-up-input-email",label:"Email",type:"email",required:!0,value:s,onChange:b}),e.jsx(h,{id:"sign-up-input-password",label:"Password",type:"password",required:!0,value:d,onChange:u}),e.jsx(h,{id:"sign-up-input-confirmPassword",label:"Confirm Password",type:"password",required:!0,value:c,onChange:p}),e.jsx(f,{type:"submit",disabled:x,children:"Submit"})]})]})}const L=g.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 20px;
`;function B(){return e.jsxs(L,{"data-testid":"authentication",children:[e.jsx(G,{}),e.jsx($,{})]})}export{B as default};
