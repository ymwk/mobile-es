import{j as s,r as w}from"./index-4NJodCap.js";import{H as F}from"./HeaderComponent-CjQnNOUG.js";import{M as p,a as N,b as n,u as j,A as g}from"./img_pass_pin-DLsEmVwv.js";import{T as v,B as L,L as I}from"./ModalopenComponent-C0Qre8xT.js";import{B as b,I as E}from"./IconButtonComponent-DzvBoamf.js";import{S as R}from"./SwitchComponent-DkA7_0Hp.js";import"./dayjs.min-Bho05rkq.js";import{T as t}from"./TextfieldComponent-BgfPIYSC.js";import{L as A,A as y,D as C}from"./AdapterDayjs-DVhiQnMF.js";import{l as T}from"./logo_koreanair-gZjJoozi.js";import{T as H}from"./TooltipHelpComponent-qeCaZg81.js";import{l as P}from"./logo_incheon-DkTnvjH-.js";import"./swiper-BZvzO1_8.js";import"./Grow-DdULPvIg.js";const G=l=>{const{isOpen:i,onClose:e}=l;return s.jsx(p,{id:"modal",isOpen:i,onClose:e,title:"제방빙 사전요청",children:s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"modal-req",children:[s.jsx("p",{children:"(편명) 제방빙작업을 요청하시겠습니까?"}),s.jsx("p",{className:"noti",children:"잘못된 요청 시 출발순서가 변경될 수 있습니다."}),s.jsxs("div",{className:"req-switch",children:[s.jsx("p",{children:"엔진 상태를 선택하세요"}),s.jsxs("div",{className:"req-btns",children:[s.jsxs(b,{styleType:"confirm",className:"button-switch",children:[s.jsx("i",{className:"ico-root power"}),"ON"]}),s.jsxs(b,{className:"button-switch",children:[s.jsx("i",{className:"ico-root power"}),"OFF"]})]})]})]}),s.jsxs(N,{children:[s.jsx(n,{label:"취소",onClick:e}),s.jsx(n,{type:"submit",styleType:"confirm",label:"확인",onClick:e})]})]})})},Z=l=>{const{isOpen:i,onClose:e}=l,m=()=>{const{isOpen:o,openModal:x,closeModal:c}=j();return s.jsxs(s.Fragment,{children:[s.jsx(n,{type:"submit",styleType:"delete",label:"삭제",onClick:x}),s.jsx(g,{isOpen:o,onClose:c,onConfirm:()=>{c(),e()},children:s.jsx("p",{children:"삭제하시겠습니까?"})})]})},h=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"modal-header-inner",children:[s.jsx("img",{src:T,className:"logo",alt:"대한항공"}),s.jsxs("div",{className:"modal-header-cont",children:[s.jsx("h2",{className:"modal-title",children:"KE011"}),s.jsxs("ul",{className:"card-schedule",children:[s.jsxs("li",{children:[s.jsx("span",{children:"GATE"}),s.jsx("em",{className:"time",children:"231"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"TYP"}),s.jsx("em",{className:"time",children:"330"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"DES"}),s.jsx("em",{className:"time",children:"HKG"})]}),s.jsxs("li",{className:"wide",children:[s.jsx("span",{children:"EOBT"}),s.jsx("em",{className:"time",children:"2022-01-25 19:45"})]})]})]})]})});return s.jsx(p,{id:"modal",isOpen:i,onClose:e,header:s.jsx(h,{}),children:s.jsxs("div",{className:"modal-column",children:[s.jsxs("div",{className:"forms-column tobt-group",children:[s.jsx("h3",{className:"modal-title-sub",children:"TOBT 설정"}),s.jsxs("div",{className:"forms-row",children:[s.jsx(A,{dateAdapter:y,adapterLocale:"ko",children:s.jsx(C,{})}),s.jsxs("div",{className:"timepk-wrap",children:[s.jsx(t,{value:"10시",width:80,readOnly:!0}),s.jsx(t,{value:"15분",width:80,readOnly:!0}),s.jsx(v,{})]})]}),s.jsx(t,{placeholder:"사유를 입력하세요",title:"수정 사유"}),s.jsx("p",{className:"msg c-err",children:"TOBT설정 시 기준일시는 KST입니다."})]}),s.jsxs("div",{className:"box-msg error",children:["TOBT를 00:50로 수정하시겠습니까?",s.jsx("br",{}),s.jsx("em",{children:"잘못된 TOBT 입력 시 출발 순서가 변경 될 수 있습니다."})]}),s.jsxs(N,{children:[s.jsx(n,{styleType:"confirm",label:"확인",onClick:e}),s.jsx(n,{type:"submit",label:"수정",onClick:e}),s.jsx(m,{})]})]})})},K=l=>{const{isOpen:i,onClose:e}=l,m=()=>{const{isOpen:o,openModal:x,closeModal:c}=j();return s.jsxs(s.Fragment,{children:[s.jsx(n,{type:"submit",styleType:"delete",label:"삭제",onClick:x}),s.jsx(g,{isOpen:o,onClose:c,onConfirm:()=>{c(),e()},children:s.jsx("p",{children:"삭제하시겠습니까?"})})]})},h=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"modal-header-inner",children:[s.jsx("img",{src:T,className:"logo",alt:"대한항공"}),s.jsxs("div",{className:"modal-header-cont",children:[s.jsx("h2",{className:"modal-title",children:"KE011"}),s.jsxs("ul",{className:"card-schedule",children:[s.jsxs("li",{children:[s.jsx("span",{children:"GATE"}),s.jsx("em",{className:"time",children:"231"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"TYP"}),s.jsx("em",{className:"time",children:"330"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"DES"}),s.jsx("em",{className:"time",children:"HKG"})]}),s.jsxs("li",{className:"wide",children:[s.jsx("span",{children:"EOBT"}),s.jsx("em",{className:"time",children:"2022-01-25 19:45"})]})]})]})]})});return s.jsx(p,{id:"modal",isOpen:i,onClose:e,header:s.jsx(h,{}),children:s.jsxs("div",{className:"modal-column",children:[s.jsxs("div",{className:"forms-column tobt-group",children:[s.jsx("h3",{className:"modal-title-sub",children:"EEZT 설정"}),s.jsxs("div",{className:"forms-row",children:[s.jsx(A,{dateAdapter:y,adapterLocale:"ko",children:s.jsx(C,{})}),s.jsxs("div",{className:"timepk-wrap",children:[s.jsx(t,{value:"10시",width:80,readOnly:!0}),s.jsx(t,{value:"15분",width:80,readOnly:!0}),s.jsx(v,{})]})]}),s.jsx(t,{placeholder:"사유를 입력하세요",title:"수정 사유"}),s.jsx("p",{className:"msg c-err",children:"EEZT설정 시 기준일시는 KST입니다."})]}),s.jsxs("div",{className:"box-msg error",children:["EEZT를 00:50로 수정하시겠습니까?",s.jsx("br",{}),s.jsx("em",{children:"잘못된 EEZT 입력 시 출발 순서가 변경 될 수 있습니다."})]}),s.jsxs(N,{children:[s.jsx(n,{styleType:"confirm",label:"확인",onClick:e}),s.jsx(n,{type:"submit",label:"수정",onClick:e}),s.jsx(m,{})]})]})})},$=l=>{const{isOpen:i,onClose:e}=l;return s.jsx(p,{id:"modal",isOpen:i,onClose:e,title:"출발 마일스톤 변경이력 조회",children:s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"modal-column",children:[s.jsx("table",{className:"table-data",children:s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("th",{children:"FLIGHT"}),s.jsx("td",{children:"ABD614"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"SDT"}),s.jsx("td",{children:"2022-02-21"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"FLC"}),s.jsx("td",{children:"ABD"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"DES"}),s.jsx("td",{children:"ORD"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"LKT"}),s.jsx("td",{children:"ABD614"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"SEARCH"}),s.jsx("td",{children:s.jsx(t,{className:"textfield-table-search"})})]})]})}),s.jsxs("table",{className:"table-list",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"마일스톤"}),s.jsx("th",{children:"시간"}),s.jsx("th",{children:"변경ID"}),s.jsx("th",{children:"상태"}),s.jsx("th",{children:"최종수정"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"ELDT"}),s.jsx("td",{children:"2022-02-21 10:23"}),s.jsx("td",{children:"abcd"}),s.jsx("td",{children:"APP"}),s.jsx("td",{children:"2022-02-21 10:23"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ELDT"}),s.jsx("td",{children:"2022-02-21 10:23"}),s.jsx("td",{children:"abcd"}),s.jsx("td",{children:"APP"}),s.jsx("td",{children:"2022-02-21 10:23"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"ELDT"}),s.jsx("td",{children:"2022-02-21 10:23"}),s.jsx("td",{children:"abcd"}),s.jsx("td",{children:"APP"}),s.jsx("td",{children:"2022-02-21 10:23"})]})]})]})]}),s.jsx(N,{children:s.jsx(n,{type:"button",styleType:"confirm",label:"확인",onClick:e})})]})})},q=l=>{const{company:i,logo:e,isBookmark:m,isSnow:h,isArt:o,isTobt:x,type:c,...f}=l,[u,M]=w.useState(!1),k=()=>{M(!u)},D=()=>{const{isOpen:a,openModal:r,closeModal:d}=j();return s.jsxs(s.Fragment,{children:[s.jsx(R,{label:"[REQ.]",onChange:r}),s.jsx(G,{isOpen:a,onClose:d})]})},B=()=>{const{isOpen:a,openModal:r,closeModal:d}=j();return s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:`btn ${x?"mile-btn-01":""}`,onClick:r}),s.jsx(Z,{isOpen:a,onClose:d})]})},S=()=>{const{isOpen:a,openModal:r,closeModal:d}=j();return s.jsxs(s.Fragment,{children:[s.jsx("button",{type:"button",className:"btn",onClick:r}),s.jsx(K,{isOpen:a,onClose:d})]})},O=()=>{const{isOpen:a,openModal:r,closeModal:d}=j();return s.jsxs(s.Fragment,{children:[s.jsx(E,{icon:"history",label:"마일스톤 변경이력 조회",onClick:r}),s.jsx($,{isOpen:a,onClose:d})]})};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:`arrivalscard-root ${c?"card-t-"+c:""}`,...f,children:[s.jsxs("div",{className:"card-detail",children:[s.jsx("div",{className:"card-logo",children:s.jsx("img",{src:e||P,alt:i})}),s.jsxs("div",{className:"card-info",children:[s.jsx("em",{className:"flt",children:"KE011"}),s.jsx("span",{className:"info",children:"SOBT 19:45"}),s.jsx("span",{children:"LAX(*HKG) / A388, #268,BOR"}),s.jsxs("span",{children:[s.jsx("em",{children:"2022-12-25"})," BOARDING"]})]}),s.jsxs("div",{className:"card-option",children:[s.jsxs("div",{className:"icons",children:[h&&s.jsx("i",{className:"ico-root snow"}),s.jsx(L,{isBookmark:!0})]}),s.jsxs("span",{className:"msg",children:["64분 지연",s.jsx("br",{}),"(CODE)"]})]})]}),s.jsxs("div",{className:"card-section-toggle card-badge",children:[s.jsxs("div",{className:"title-bar",children:[s.jsx("span",{className:"title",children:"TIMES"}),s.jsx("div",{className:"title-option",children:s.jsx(O,{})})]}),s.jsxs("ul",{className:"card-schedule",children:[s.jsxs("li",{children:[s.jsx("span",{children:"EOBT"}),s.jsx("em",{className:"time",children:"11:50"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"TOBT"}),s.jsx("em",{className:`time ${x?"mile-t-01":""}`,children:"12:00"}),s.jsx(B,{})]}),s.jsxs("li",{children:[s.jsx("span",{children:"TSAT"}),s.jsx("em",{className:`time ${o?"mile-t-03":""}`,children:"12:10"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"TTOT"}),s.jsx("em",{className:`time ${o?"mile-t-03":""}`,children:"12:10"})]}),u&&s.jsxs(s.Fragment,{children:[s.jsxs("li",{children:[s.jsx("span",{children:"ARDT"}),s.jsx("em",{className:"time",children:"11:50"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"ASAT"}),s.jsx("em",{className:"time",children:"11:50"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"AOBT"}),s.jsx("em",{className:"time",children:"11:50"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"ATOT"}),s.jsx("em",{className:"time",children:"11:50"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"CTOT"}),s.jsx("em",{className:"time",children:"11:50"})]})]})]}),s.jsx(E,{icon:u?"ut":"dt",label:"더보기",className:"btn-toggle",onClick:k})]}),s.jsxs("div",{className:"card-section2",children:[s.jsx("div",{className:"title-bar",children:s.jsx("span",{className:"title",children:"RESOURCES"})}),s.jsxs("ul",{className:"card-schedule",children:[s.jsxs("li",{children:[s.jsx("span",{children:"GATE"}),s.jsx("em",{className:"time",children:"230"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"STAND"}),s.jsx("em",{className:"time",children:"541"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"RWY"}),s.jsx("em",{className:"time",children:"33L"})]})]})]}),s.jsxs("div",{className:"card-section3",children:[s.jsxs("div",{className:"title-bar",children:[s.jsx("span",{className:"title",children:"DE-ICING"}),s.jsxs(H,{children:[s.jsx("div",{className:"tooltip-title",children:"Alfa South Zone(AS)"}),s.jsx("p",{children:"Zone No : 821, 822, 823, 825"})]}),s.jsxs("div",{className:"title-option",children:[s.jsx(D,{}),s.jsx(O,{})]})]}),s.jsxs("ul",{className:"card-schedule",children:[s.jsxs("li",{children:[s.jsx("span",{children:"ELDT"}),s.jsx("em",{className:"time",children:"11:55"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"EEZT"}),s.jsx("em",{className:"time",children:"15:45"}),s.jsx(S,{})]}),s.jsxs("li",{className:"column-2",children:[s.jsx("span",{children:"DEICING POSITION"}),s.jsxs("em",{className:"time",children:["AS",s.jsx("small",{children:"ZONE"}),"831"]})]})]})]})]}),s.jsx(I,{})]})},cs=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(F,{title:"DEPARTURES"}),s.jsx("main",{className:"portal-main search-main",children:s.jsx("div",{className:"portal-cont",children:s.jsx(q,{company:"대한항공",logo:T,isBookmark:!0,isSnow:!0,isArt:!0,isTobt:!0,type:"normal"})})})]})});export{cs as default};
