import{j as s,L as n}from"./index-fZ5oUBU-.js";import{H as d}from"./HeaderComponent-CHYIhcIW.js";import{M as x,a as j,b as r,u as t,A as m,B as p}from"./img_pass_pin-BXkcR0gu.js";import{A as c}from"./ActionButtonComponent-DVsWFeOB.js";import{R as o}from"./RadiogroupComponent-kpO64Ryu.js";import"./dayjs.min-IX9hZqJs.js";import{T as i}from"./TextfieldComponent-BxehzsLf.js";import{A as h}from"./AuthModal-B-l9cmFI.js";const u=()=>{const{isOpen:l,openModal:a,closeModal:e}=t();return s.jsxs(s.Fragment,{children:[s.jsx(r,{type:"button",styleType:"confirm",label:"확인",onClick:a}),s.jsx(m,{isOpen:l,onClose:e,onConfirm:e,type:"confirm",children:s.jsx("p",{children:"정상적으로 변경되었습니다."})})]})},N=l=>{const{isOpen:a,onClose:e}=l;return s.jsx(x,{id:"modal",isOpen:a,onClose:e,title:"비밀번호 변경",children:s.jsx(s.Fragment,{children:s.jsxs("form",{method:"post",children:[s.jsxs("ul",{className:"form-input-list",children:[s.jsx("li",{children:s.jsx("div",{className:"textfield-root",children:s.jsxs("label",{children:[s.jsx("span",{className:"label",children:"기존 비밀번호"}),s.jsx(i,{type:"password",name:"",placeholder:"영문,숫자,특수문자 포함 8~15자리"})]})})}),s.jsx("li",{children:s.jsx("div",{className:"textfield-root",children:s.jsxs("label",{children:[s.jsx("span",{className:"label",children:"변경할 비밀번호"}),s.jsx(i,{type:"password",name:"",placeholder:"영문,숫자,특수문자 포함 8~15자리"})]})})}),s.jsx("li",{children:s.jsx("div",{className:"textfield-root",children:s.jsxs("label",{children:[s.jsx("span",{className:"label",children:"비밀번호 확인"}),s.jsx(i,{type:"password",name:"",placeholder:"영문,숫자,특수문자 포함 8~15자리"})]})})})]}),s.jsxs(j,{children:[s.jsx(r,{label:"취소",onClick:e}),s.jsx(u,{})]})]})})})},b=()=>{const{isOpen:l,openModal:a,closeModal:e}=t();return s.jsxs(s.Fragment,{children:[s.jsx(c,{label:"비밀번호 변경",onClick:a}),s.jsx(N,{isOpen:l,onClose:e})]})},f=()=>{const{isOpen:l,openModal:a,closeModal:e}=t();return s.jsxs(s.Fragment,{children:[s.jsx(c,{type:"button",styleType:"confirm",label:"비밀번호 초기화",onClick:a}),s.jsx(h,{isOpen:l,onClose:e})]})},k=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(d,{title:"설정"}),s.jsxs("main",{className:"portal-main",children:[s.jsxs("ul",{className:"setting-list",children:[s.jsx("li",{children:s.jsxs(n,{to:"/set-push",className:"setting-link",children:["푸시 알림 수신 설정",s.jsx("i",{className:"ico-root gt"})]})}),s.jsx("li",{children:s.jsxs(n,{to:"/set-login",className:"setting-link",children:["로그인 방식 설정",s.jsx("i",{className:"ico-root gt"})]})}),s.jsxs("li",{children:["적용시간 설정",s.jsx(o,{name:"setlist",type:"type2",items:[{label:"KST",value:"KST"},{label:"UTC",value:"UTC"}]})]}),s.jsxs("li",{children:[s.jsx("span",{children:"공사 코드 설정"}),s.jsx(o,{name:"setlist2",type:"type2",items:[{label:"IATA",value:"IATA"},{label:"ICAO",value:"ICAO"}]})]}),s.jsxs("li",{children:[s.jsx("span",{children:"버전정보"}),s.jsx("span",{className:"value",children:"최신버전"})]}),s.jsx("li",{children:s.jsxs(n,{to:"",className:"setting-link",children:["권한 설정",s.jsx("i",{className:"ico-root gt"})]})})]}),s.jsx("div",{className:"setting-btns",children:s.jsx(p,{label:"사용자정보변경"})})]}),s.jsx("div",{className:"portal-action",children:s.jsxs("div",{className:"action-inner",children:[s.jsx(b,{}),s.jsx(f,{})]})})]})});export{k as default};
