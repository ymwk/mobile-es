import{u as r,j as s}from"./index-CHk2qwRH.js";import{H as c}from"./HeaderComponent-3GNjfB99.js";import{B as t}from"./IconButtonComponent-CzbdKiHq.js";import{A as n}from"./ActionButtonComponent--PTqQgs9.js";import{S as d}from"./StepperComponent-BxMviwuu.js";import{C as i}from"./CheckboxComponent-CQnML74E.js";import{S as e}from"./SwitchComponent-BLZpXKFQ.js";import{T as l}from"./TextfieldComponent-BC4Aanws.js";import"./dayjs.min-Dqa7b3wI.js";import"./img_pass_pin-CqYXTHiV.js";const C=()=>{const a=r();return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(c,{title:"계정신청"}),s.jsx(d,{items:["개인정보수집","정보보호 서약서","신청서 작성"],active:3}),s.jsx("main",{className:"portal-main",children:s.jsx("div",{className:"terms-root",children:s.jsxs("div",{className:"terms-section",children:[s.jsx("span",{className:"terms-list-title",children:"작성 유의사항"}),s.jsxs("ol",{className:"terms-list",children:[s.jsx("li",{children:"1. 6개월 이상 미사용인 계정은 임의로 삭제됨"}),s.jsx("li",{children:"2. 신청아이디는 6자리이상~10자리 이하로 지정"}),s.jsx("li",{children:"3. 신청아이디는 영어 소문자, 숫자 혼합 6~10자리"}),s.jsx("li",{children:"4. 동 양식은 정보보안지침 “사용자 계정 신청서”의 내용에 준합니다."}),s.jsx("li",{children:"*중간관리자가 계정 승인시 권한을 변경할 수 있습니다"})]}),s.jsx("form",{method:"post",children:s.jsxs("ul",{className:"form-input-list",children:[s.jsx("li",{children:s.jsx("div",{className:"textfield-root",children:s.jsxs("label",{children:[s.jsx("span",{className:"label",children:"성명"}),s.jsx(l,{name:"",placeholder:"이름을 입력하세요."})]})})}),s.jsx("li",{children:s.jsx("div",{className:"textfield-root",children:s.jsxs("label",{children:[s.jsx("span",{className:"label",children:"핸드폰 번호"}),s.jsxs("div",{className:"forms-row",children:[s.jsx("div",{className:"select-root",style:{width:100},children:s.jsx("select",{children:s.jsx("option",{children:"010"})})}),s.jsx(l,{name:"",placeholder:"- 없이 숫자만 입력하세요."})]})]})})}),s.jsx("li",{children:s.jsxs("div",{className:"textfield-root",children:[s.jsxs("label",{children:[s.jsx("span",{className:"label",children:"신청아이디"}),s.jsx(l,{name:"",placeholder:"아이디를 입력하세요."})]}),s.jsx(t,{label:"중복체크"})]})}),s.jsxs("li",{children:[s.jsx("div",{className:"textfield-root",children:s.jsx("span",{className:"label",children:"소속사"})}),s.jsxs("div",{className:"forms-column",children:[s.jsxs("div",{className:"forms-row",children:[s.jsx("div",{className:"select-root",children:s.jsxs("select",{children:[s.jsx("option",{children:"항공사"}),s.jsx("option",{children:"조업사"}),s.jsx("option",{children:"경항공기"}),s.jsx("option",{children:"공항공사"})]})}),s.jsx(i,{name:"",label:"중간관리자",onChange:()=>{}})]}),s.jsxs("div",{className:"textfield-root",children:[s.jsx(l,{name:"",value:"IATA",readOnly:!0,width:80}),s.jsx(l,{name:"",width:80}),s.jsx("div",{className:"select-root",children:s.jsxs("select",{children:[s.jsx("option",{children:"선택"}),s.jsx("option",{children:"ACT항공"}),s.jsx("option",{children:"ACVILAAIR"}),s.jsx("option",{children:"AEROCANCUN"})]})})]})]})]}),s.jsxs("li",{children:[s.jsx("div",{className:"textfield-root",children:s.jsx("span",{className:"label",children:"권한"})}),s.jsxs("ul",{className:"switch-list",children:[s.jsxs("li",{children:[s.jsx(e,{label:"A항공사코드 / A항공사명",onChange:()=>{}}),s.jsxs("div",{className:"chk-list-btn",children:[s.jsx(i,{name:"",type:"type3",label:"TOBT 조회",onChange:()=>{}}),s.jsx(i,{name:"",type:"type3",label:"TOBT 입력",onChange:()=>{}}),s.jsx(i,{name:"",type:"type3",label:"제방빙신청 EEZT입력",onChange:()=>{}})]})]}),s.jsx("li",{children:s.jsx(e,{label:"B항공사코드 / B항공사명",onChange:()=>{}})}),s.jsx("li",{children:s.jsx(e,{label:"C항공사코드 / C항공사명",onChange:()=>{}})}),s.jsx("li",{children:s.jsx(e,{label:"D항공사코드 / D항공사명",onChange:()=>{}})}),s.jsx("li",{children:s.jsx(e,{label:"E항공사코드 / E항공사명",onChange:()=>{}})})]})]})]})}),s.jsxs("p",{className:"terms-msg notice",children:["*소속사를 잘못 선택할 경우 타 회사의 중간관리자에게 ",s.jsx("br",{}),"개인정보가 노출될 수 있습니다."]})]})})}),s.jsx("div",{className:"portal-action",children:s.jsxs("div",{className:"action-inner",children:[s.jsx(n,{label:"이전",onClick:()=>{a("/signup2")}}),s.jsx(n,{type:"submit",styleType:"confirm",label:"신청",onClick:()=>{a("/signup4")}})]})})]})})};export{C as default};
