import{j as s}from"./index-fZ5oUBU-.js";import{H as o}from"./HeaderComponent-CHYIhcIW.js";import{A as x}from"./ActionButtonComponent-DVsWFeOB.js";import{T as j}from"./TextfieldComponent-BxehzsLf.js";import{L as m,A as p,D as c}from"./AdapterDayjs-CP7XQ_Hy.js";import{B as _}from"./img_pass_pin-BXkcR0gu.js";import{r as M}from"./dayjs.min-IX9hZqJs.js";var r={exports:{}},u=r.exports,n;function Y(){return n||(n=1,function(l,t){(function(d,i){l.exports=i(M())})(u,function(d){function i(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var h=i(d),a={name:"ko",weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),ordinal:function(e){return e+"일"},formats:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},meridiem:function(e){return e<12?"오전":"오후"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};return h.default.locale(a,null,!0),a})}(r)),r.exports}Y();const f=l=>{const{className:t}=l;return s.jsx(s.Fragment,{children:s.jsxs("form",{method:"post",children:[s.jsxs("div",{className:`search-root ${t||""}`,children:[s.jsxs("div",{className:"search-row-wrapper",children:[s.jsxs("label",{className:"search-row",htmlFor:"search-id",children:[s.jsx("span",{className:"label",children:"구분"}),s.jsx("div",{className:"select-root",style:{width:100},children:s.jsxs("select",{id:"search-id",children:[s.jsx("option",{children:"전체"}),s.jsx("option",{children:"신규"}),s.jsx("option",{children:"변경"}),s.jsx("option",{children:"해지"})]})})]}),s.jsxs("label",{className:"search-row search-grow",children:[s.jsx("span",{className:"label",children:"성명"}),s.jsx(j,{})]})]}),s.jsxs("div",{className:"search-row-wrapper",children:[s.jsxs("div",{className:"search-row",children:[s.jsx("label",{htmlFor:"",className:"label",children:"상태"}),s.jsx("div",{className:"select-root",style:{width:100},children:s.jsxs("select",{children:[s.jsx("option",{children:"전체"}),s.jsx("option",{children:"신청대기"}),s.jsx("option",{children:"반려"}),s.jsx("option",{children:"1차승인"}),s.jsx("option",{children:"승인완료"})]})})]}),s.jsx("div",{className:"search-row search-grow search-calendar",children:s.jsxs(m,{dateAdapter:p,adapterLocale:"ko",children:[s.jsx(c,{format:"MM-DD"}),"~",s.jsx(c,{format:"MM-DD"})]})})]})]}),s.jsx("div",{className:"search-btns",children:s.jsx(_,{label:"초기화",styleType:"small"})})]})})},A=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(o,{title:"사용자관리"}),s.jsx(f,{}),s.jsx("main",{className:"portal-main",children:s.jsxs("div",{className:"search-result",children:[s.jsxs("div",{className:"search-result-top",children:[s.jsx("span",{className:"date",children:"2024.12.17 ~ 2024.12.31"}),s.jsxs("span",{className:"count",children:["총",s.jsx("em",{children:"26"}),"건"]})]}),s.jsxs("table",{className:"table-list",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"구분"}),s.jsx("th",{children:"아이디"}),s.jsx("th",{children:"성명"}),s.jsx("th",{children:"신청일"}),s.jsx("th",{children:"상태"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:"신규"}),s.jsx("td",{children:"hhh123"}),s.jsx("td",{children:"홍길동"}),s.jsx("td",{children:"25-06-15"}),s.jsx("td",{children:"신청대기"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"신규"}),s.jsx("td",{children:"hhh123"}),s.jsx("td",{children:"홍길동"}),s.jsx("td",{children:"25-06-15"}),s.jsx("td",{children:"1차승인"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:"변경"}),s.jsx("td",{children:"hhh123"}),s.jsx("td",{children:"홍길동"}),s.jsx("td",{children:"25-06-15"}),s.jsx("td",{children:"반려"})]})]})]})]})}),s.jsx("div",{className:"portal-action",children:s.jsx("div",{className:"action-inner",children:s.jsx(x,{type:"submit",styleType:"confirm",label:"조회",onClick:()=>{}})})})]})});export{A as default};
