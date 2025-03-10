import{j as s}from"./index-D27raXw-.js";import{H as o}from"./HeaderComponent-DK6e92SV.js";import{M as m,a as b,b as h,u as x}from"./img_pass_pin-u1xr3e4J.js";import{I as T}from"./IconButtonComponent-CrIr9hIY.js";import{A as n}from"./ActionButtonComponent-Np9evmQ8.js";import{T as d,a as e}from"./TabContent-BYoiLPlZ.js";import{F as p}from"./FltModal-CVS9barx.js";import{T as j}from"./TextfieldComponent-CG2XohWs.js";import"./dayjs.min-BFvcWA0N.js";import{R as a}from"./RadiogroupComponent-Baki9Av3.js";const N=r=>{const{isOpen:i,onClose:l}=r;return s.jsx(m,{id:"modal",isOpen:i,onClose:l,title:"Time Scope",children:s.jsxs("div",{className:"modal-column",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"modal-title-sub",children:"TIME"}),s.jsx(a,{name:"timelist",type:"type3",className:"timescope-radio",items:[{label:"1H",value:"1"},{label:"2H",value:"2"},{label:"3H",value:"3"},{label:"4H",value:"4"},{label:"5H",value:"5"},{label:"6H",value:"6"},{label:"7H",value:"7"},{label:"8H",value:"8"},{label:"9H",value:"9"},{label:"10H",value:"10"},{label:"11H",value:"11"},{label:"12H",value:"12"}]})]}),s.jsxs("div",{children:[s.jsx("h3",{className:"modal-title-sub",children:"DAY"}),s.jsx(a,{name:"timelist",type:"type3",className:"timescope-radio",items:[{label:"1DAY",value:"24"},{label:"2DAY",value:"48"}]})]}),s.jsxs(b,{children:[s.jsx(h,{label:"취소",onClick:l}),s.jsx(h,{type:"submit",styleType:"confirm",label:"확인",onClick:l})]})]})})},f=()=>{const r=()=>{const{isOpen:l,openModal:c,closeModal:t}=x();return s.jsxs(s.Fragment,{children:[s.jsx(T,{icon:"search",onClick:c,label:"편명조회"}),s.jsx(p,{isOpen:l,onClose:t})]})},i=()=>{const{isOpen:l,openModal:c,closeModal:t}=x();return s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:c}),s.jsx(N,{isOpen:l,onClose:t})]})};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(o,{title:"Total Panel"}),s.jsx("div",{className:"search-root",children:s.jsxs("div",{className:"search-row",children:[s.jsx("span",{className:"label",children:"FLT"}),s.jsxs("div",{className:"flt-search",children:[s.jsx(j,{value:"OZ",readOnly:!0}),s.jsx(r,{})]}),s.jsxs("div",{className:"search-row search-time",children:[s.jsx("span",{className:"label",children:"Time Scope"}),s.jsx(j,{value:"1H",readOnly:!0}),s.jsx(i,{})]})]})}),s.jsxs(d,{children:[s.jsxs(e,{label:"Departure",children:[s.jsx("main",{className:"portal-main search-main",children:s.jsx("div",{className:"portal-cont",children:s.jsxs(d,{type:"cdm-sm",children:[s.jsx(e,{label:"Departure",children:s.jsxs("table",{className:"table-list c-t01",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"ETD"}),s.jsx("th",{children:"TYP"}),s.jsx("th",{children:"GATE"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"74Y"}),s.jsx("td",{children:"0"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"OZ36"}),s.jsx("td",{children:"09:05"}),s.jsx("td",{children:"772"}),s.jsx("td",{children:"22"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"NQ8476"}),s.jsx("td",{children:"09:30"}),s.jsx("td",{children:"76Y"}),s.jsx("td",{children:"624"})]})]})]})}),s.jsx(e,{label:"Apron",children:s.jsxs("table",{className:"table-list c-t01",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"TYP"}),s.jsx("th",{children:"GATE"}),s.jsx("th",{children:"RQ"}),s.jsx("th",{children:"O/B"}),s.jsx("th",{children:"R/O"}),s.jsx("th",{children:"RWY"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"74Y"}),s.jsx("td",{children:"119"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"15L"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"74Y"}),s.jsx("td",{children:"119"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:s.jsx("i",{className:"ico-root snow-b",children:s.jsx("span",{className:"blind",children:"Icing"})})}),s.jsx("td",{children:"15L"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"NQ8476"}),s.jsx("td",{children:"74Y"}),s.jsx("td",{children:"119"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"15L"})]})]})]})}),s.jsx(e,{label:"Towing",children:s.jsxs("table",{className:"table-list c-t01",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"G-H"}),s.jsx("th",{children:"OFF"}),s.jsx("th",{children:"ON"}),s.jsx("th",{children:"O/B"}),s.jsx("th",{children:"I/B"}),s.jsx("th",{children:"TYP"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"362"}),s.jsx("td",{children:"12"}),s.jsx("td",{children:"27"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"74Y"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"362"}),s.jsx("td",{children:"12"}),s.jsx("td",{children:"27"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"74Y"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"362"}),s.jsx("td",{children:"12"}),s.jsx("td",{children:"27"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"74Y"})]})]})]})}),s.jsx(e,{label:"De-Icing",children:s.jsxs("table",{className:"table-list c-t01",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"PAD"}),s.jsx("th",{children:"START"}),s.jsx("th",{children:"END"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"823"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"-"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"823"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"-"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"823"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"-"})]})]})]})}),s.jsx(e,{label:"De-Icing PAD",children:s.jsxs("table",{className:"table-list c-t01",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"NO"}),s.jsx("th",{children:"PAD NO"}),s.jsx("th",{children:"PAD STAT"}),s.jsx("th",{children:"STAT COLOR"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"1"}),s.jsx("td",{children:"2"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"blue"})]})})]})}),s.jsx(e,{label:"Departed",children:s.jsxs("table",{className:"table-list c-t01",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"ATD"}),s.jsx("th",{children:"RWY"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"TW291"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"15L"})]})})]})})]})})}),s.jsx("div",{className:"portal-action",children:s.jsx("div",{className:"action-inner",children:s.jsx(n,{type:"submit",styleType:"confirm",label:"조회",onClick:()=>{}})})})]}),s.jsxs(e,{label:"Arrival",children:[s.jsx("main",{className:"portal-main search-main",children:s.jsx("div",{className:"portal-cont",children:s.jsxs(d,{type:"cdm-sm",className:"c-t02",children:[s.jsx(e,{label:"Arrival",children:s.jsxs("table",{className:"table-list c-t02",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"ETD"}),s.jsx("th",{children:"TYP"}),s.jsx("th",{children:"GATE"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"74Y"}),s.jsx("td",{children:"0"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"OZ36"}),s.jsx("td",{children:"09:05"}),s.jsx("td",{children:"772"}),s.jsx("td",{children:"22"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"NQ8476"}),s.jsx("td",{children:"09:30"}),s.jsx("td",{children:"76Y"}),s.jsx("td",{children:"624"})]})]})]})}),s.jsx(e,{label:"Landed",children:s.jsxs("table",{className:"table-list c-t02",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"ATA"}),s.jsx("th",{children:"RWY"}),s.jsx("th",{children:"TYP"}),s.jsx("th",{children:"GATE"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"321"}),s.jsx("td",{children:"45"})]})})]})}),s.jsx(e,{label:"Apron",children:s.jsxs("table",{className:"table-list c-t02",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"TYP"}),s.jsx("th",{children:"GATE"}),s.jsx("th",{children:"R/I"}),s.jsx("th",{children:"I/B"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"321"}),s.jsx("td",{children:"45"}),s.jsx("td",{children:"09:00"}),s.jsx("td",{children:"-"})]})})]})})]})})}),s.jsx("div",{className:"portal-action",children:s.jsx("div",{className:"action-inner",children:s.jsx(n,{type:"submit",styleType:"confirm",label:"조회",onClick:()=>{}})})})]}),s.jsxs(e,{label:"Event",children:[s.jsx("main",{className:"portal-main search-main",children:s.jsx("div",{className:"portal-cont",children:s.jsxs(d,{type:"cdm-sm",className:"c-t03",children:[s.jsx(e,{label:"Event",children:s.jsxs("table",{className:"table-list c-t03",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"TYP"}),s.jsx("th",{children:"EVENT"}),s.jsx("th",{children:"GATE"}),s.jsx("th",{children:"REMARK"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"321"}),s.jsx("td",{children:"GATE RETURN"}),s.jsx("td",{children:"45"}),s.jsx("td",{children:"01AB- ABRG"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"321"}),s.jsx("td",{children:"GATE RETURN"}),s.jsx("td",{children:"45"}),s.jsx("td",{children:"01AB- ABRG"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"321"}),s.jsx("td",{children:"GATE RETURN"}),s.jsx("td",{children:"45"}),s.jsx("td",{children:"01AB- ABRG"})]})]})]})}),s.jsx(e,{label:"Divert",children:s.jsxs("table",{className:"table-list c-t03",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"FLT"}),s.jsx("th",{children:"DIVERT"}),s.jsx("th",{children:"DATE"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"OZ721"}),s.jsx("td",{children:"ICN"}),s.jsx("td",{children:"09:30"})]})})]})})]})})}),s.jsx("div",{className:"portal-action",children:s.jsx("div",{className:"action-inner",children:s.jsx(n,{type:"submit",styleType:"confirm",label:"조회",onClick:()=>{}})})})]})]})]})})};export{f as default};
