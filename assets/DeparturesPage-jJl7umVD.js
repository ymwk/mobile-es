import{j as s,u as f,r as p}from"./index-D27raXw-.js";import{H as N}from"./HeaderComponent-DK6e92SV.js";import{M as m,a as x,b as o,u as h}from"./img_pass_pin-u1xr3e4J.js";import{I as j}from"./IconButtonComponent-CrIr9hIY.js";import{A as b}from"./ArrovalsSearchComponent-BpV_04Fe.js";import{D as v}from"./DeparturescardComponent-BW7PH3sW.js";import{l as y}from"./logo_koreanair-gZjJoozi.js";import{l as M}from"./logo_asiana-CCVRm9V7.js";import"./CheckboxComponent-DMDqD_So.js";import"./TextfieldComponent-CG2XohWs.js";import"./dayjs.min-BFvcWA0N.js";import"./RadiogroupComponent-Baki9Av3.js";import"./ModalopenComponent-BLodm-3-.js";import"./swiper-BSsr8-KH.js";import"./logo_incheon-DkTnvjH-.js";const k=a=>{const{isOpen:l,onClose:e}=a;return s.jsx(m,{id:"modal",isOpen:l,onClose:e,title:"푸시알림 수동송신",children:s.jsx(s.Fragment,{children:s.jsxs("form",{method:"post",children:[s.jsxs("div",{className:"flex-column-gap",children:[s.jsx("div",{className:"textfield-root",children:s.jsxs("label",{children:[s.jsx("span",{className:"label",children:"구분"}),s.jsx("div",{className:"select-root",children:s.jsx("select",{children:s.jsx("option",{children:"지연공지"})})})]})}),s.jsx("textarea",{className:"form-textarea",children:"(편명) The plane has benn delayed because of the bad weather."}),s.jsx("textarea",{className:"form-textarea",children:"(편명) 기상악화로 인하여 지연되고 있습니다."})]}),s.jsxs(x,{children:[s.jsx(o,{label:"취소",onClick:e}),s.jsx(o,{type:"button",styleType:"confirm",label:"확인",onClick:e})]})]})})})},O=[{logo:y,company:"대한항공",url:"/departures-detail",type:"auto",bookmark:!0,snow:!0,art:!0,tobt:!1},{logo:M,company:"아시아나",url:"/departures-detail",type:"normal",bookmark:!1,snow:!0,art:!0,tobt:!0},{logo:"",company:"항공사",url:"/departures-detail",type:"edit",bookmark:!1,snow:!1,art:!1,tobt:!1}],C=()=>{const a=f(),l=()=>{const{isOpen:e,openModal:r,closeModal:n}=h();return s.jsxs(s.Fragment,{children:[s.jsx(j,{icon:"push",label:"알림설정",className:"button-card",onClick:r}),s.jsx(k,{isOpen:e,onClose:n})]})};return s.jsx(s.Fragment,{children:s.jsx("div",{className:"arrivalscard-list",children:O.map((e,r)=>{const[n,t]=p.useState(!1),[c,u]=p.useState(null),T=g=>{const i=g.touches[0];if(u(i),!c)return;const d=i.pageX-c.pageX;d>0?t(!0):d<0&&t(!1)};return s.jsxs("div",{className:`arrivalscard-wrap ${n?"open":""}`,onTouchMove:T,children:[s.jsx(l,{}),s.jsx(v,{company:e.company,logo:e.logo,isBookmark:e.bookmark,isSnow:e.snow,isArt:e.art,isTobt:e.tobt,type:e.type,onClick:()=>{a(`${e.url}`)}})]},r)})})})},A=a=>{const{isOpen:l,onClose:e}=a;return s.jsx(m,{id:"modal",isOpen:l,onClose:e,title:"마일스톤 색상정보",children:s.jsxs(s.Fragment,{children:[s.jsxs("ul",{className:"milestone-legend",children:[s.jsxs("li",{children:[s.jsx("span",{children:"A-CDM 자동생성시간"}),s.jsx("span",{className:"legend",children:"검은색"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"항공사/조업사에서 입력"}),s.jsx("span",{className:"legend mile-b-01",children:"TOBT"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"관제탑에서 제공한 TSAT보다 늦은"}),s.jsx("span",{className:"legend mile-b-02",children:"TOBT"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"관제탑에서 제공한"}),s.jsx("span",{className:"legend mile-b-03",children:"TSAT/TTOT"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"항공교통통제센터 CTOT를 반영한"}),s.jsx("span",{className:"legend mile-b-04",children:"TSAT/TTOT"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"CTOT를 반영한 TSAT이 TOBT보다 빠른"}),s.jsx("span",{className:"legend mile-b-05",children:"TSAT/TTOT"})]})]}),s.jsx(x,{children:s.jsx(o,{type:"button",styleType:"confirm",label:"확인",onClick:e})})]})})},S=()=>{const{isOpen:a,openModal:l,closeModal:e}=h();return s.jsxs(s.Fragment,{children:[s.jsx(j,{label:"도움말",icon:"help",onClick:l}),s.jsx(A,{isOpen:a,onClose:e})]})},z=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(N,{title:"DEPARTURES"}),s.jsx(b,{}),s.jsx("main",{className:"portal-main search-main",children:s.jsxs("div",{className:"portal-cont",children:[s.jsxs("div",{className:"departures-legend",children:[s.jsxs("ul",{className:"departures-legend-list",children:[s.jsxs("li",{children:[s.jsx("span",{className:"legend card-t-auto"}),s.jsx("span",{children:"TOBT 자동생성"})]}),s.jsxs("li",{children:[s.jsx("span",{className:"legend card-t-normal"}),s.jsx("span",{children:"TOBT 정상입력"})]}),s.jsxs("li",{children:[s.jsx("span",{className:"legend card-t-edit"}),s.jsx("span",{children:"TOBT 입력/수정필요"})]})]}),s.jsx("div",{className:"departures-legend-btn",children:s.jsx(S,{})})]}),s.jsxs("div",{className:"search-result-top",children:[s.jsx("span",{className:"date",children:"2024.12.17"}),s.jsx("span",{className:"time",children:"10~14"}),s.jsxs("span",{className:"count",children:["총",s.jsx("em",{children:"26"}),"건"]})]}),s.jsx(C,{})]})})]})});export{z as default};
