import{u as o,j as s}from"./index-BOaglB9m.js";import{H as d}from"./HeaderComponent-BG7ZmFHv.js";import{A as l}from"./ActionButtonComponent-CGMyLWFH.js";import{T as m,a as r}from"./TabContent-DyNzA6eT.js";import{T as i}from"./TextfieldComponent-D4TyR4Uu.js";import"./dayjs.min-DlDRxA1R.js";import"./img_pass_pin-fXel01ns.js";import"./IconButtonComponent-DD6HgbHe.js";const b=()=>{const e=o(),c=[{sort:"appoint",title:"NOTAM번호 : A1511/24",start:"2410310000(UTC)",end:"2410310800(UTC)",date:"2025-01-10 09:10"},{sort:"edit",title:"NOTAM번호 : A1511/24",start:"2410310000(UTC)",end:"2410310800(UTC)",date:"2025-01-10 09:10"},{sort:"appoint",title:"NOTAM번호 : A1511/24",start:"2410310000(UTC)",end:"2410310800(UTC)",date:"2025-01-10 09:10"}],n=[{sort:"appoint",title:"ATFM 흐름관리실행",start:"202410310000",end:"20241031 02:34:50",date:"2025-01-10 09:10"},{sort:"edit",title:"ATFM 흐름관리실행",start:"202410310000",end:"20241031 02:34:50",date:"2025-01-10 09:10"},{sort:"appoint",title:"ATFM 흐름관리실행",start:"202410310000",end:"20241031 02:34:50",date:"2025-01-10 09:10"}];return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(d,{title:"NOTAM/ATFM"}),s.jsxs(m,{children:[s.jsxs(r,{label:"NOTAM",children:[s.jsx("div",{className:"search-root",children:s.jsx(i,{placeholder:"제목 또는 내용을 입력해주세요",className:"form-search"})}),s.jsx("main",{className:"portal-main search-main",children:s.jsxs("div",{className:"portal-cont",children:[s.jsx("div",{className:"search-result-top",children:s.jsxs("span",{className:"count",children:["전체",s.jsx("em",{children:"26"}),"건"]})}),s.jsx("div",{className:"notice-list",children:c.map((a,t)=>s.jsxs("div",{className:"notice-item",onClick:()=>{e("/notam-detail")},children:[s.jsxs("span",{className:`sort ${a.sort}`,children:[a.sort=="appoint"&&"발령",a.sort=="edit"&&"수정"]}),a.sort=="appoint"&&s.jsx("span",{className:"ico-label",children:"발령"}),a.sort=="edit"&&s.jsx("span",{className:"ico-label c-err",children:"수정"}),s.jsxs("p",{className:"title",children:[s.jsx("em",{children:a.title}),s.jsxs("em",{children:["발효일시 : ",a.start]}),s.jsxs("em",{children:["종료일시 : ",a.end]})]}),s.jsx("span",{className:"date",children:a.date})]},t))})]})}),s.jsx("div",{className:"portal-action",children:s.jsx("div",{className:"action-inner",children:s.jsx(l,{type:"submit",styleType:"confirm",label:"조회",onClick:()=>{e("/notice-search")}})})})]}),s.jsxs(r,{label:"ATFM",children:[s.jsx("div",{className:"search-root",children:s.jsx(i,{placeholder:"제목 또는 내용을 입력해주세요",className:"form-search"})}),s.jsx("main",{className:"portal-main search-main",children:s.jsxs("div",{className:"portal-cont",children:[s.jsx("div",{className:"search-result-top",children:s.jsxs("span",{className:"count",children:["전체",s.jsx("em",{children:"26"}),"건"]})}),s.jsx("div",{className:"notice-list",children:n.map((a,t)=>s.jsxs("div",{className:"notice-item",onClick:()=>{e("/notam-detail")},children:[s.jsxs("span",{className:`sort ${a.sort}`,children:[a.sort=="appoint"&&"발령",a.sort=="edit"&&"수정"]}),a.sort=="appoint"&&s.jsx("span",{className:"ico-label",children:"발령"}),a.sort=="edit"&&s.jsx("span",{className:"ico-label c-err",children:"수정"}),s.jsxs("p",{className:"title",children:[s.jsx("em",{children:a.title}),s.jsxs("em",{children:["발령번호 : ",a.start]}),s.jsxs("em",{children:["발령일시 : ",a.end]})]}),s.jsx("span",{className:"date",children:a.date})]},t))})]})}),s.jsx("div",{className:"portal-action",children:s.jsx("div",{className:"action-inner",children:s.jsx(l,{type:"submit",styleType:"confirm",label:"조회",onClick:()=>{e("/notice-search")}})})})]})]})]})})};export{b as default};
