import{r as p,u,j as r,L as e}from"./index-CGvb5FS0.js";import{H as i}from"./HeaderComponent-CkSIyrY3.js";import{A as o}from"./ActionButtonComponent-lVtrTAha.js";import{R as t}from"./RunupcardComponent-B-K0uu1Y.js";import{R as m}from"./RadiogroupComponent-C9E4Wc6g.js";import{L as q,A as j,D as v}from"./AdapterDayjs-LfwzIAps.js";import"./img_pass_pin-B6SR2n5t.js";import"./dayjs.min-BrO6EqGi.js";import"./Grow-DXaFDJXb.js";const d=[{type:"request",status:"Request",reqdate:"11-22",reqno:"HL7414",currstand:"21",reqstand:"802",fromDate:"2025.03.08",fromTime:"12-08",to:"12-09",url:"/rs-hpm-detail"},{type:"approved",status:"Request",reqdate:"11-22",reqno:"HL7413",currstand:"21",reqstand:"802",fromDate:"2025.03.08",fromTime:"12-08",to:"12-09",url:"/rs-hpm-detail"},{type:"rejected",status:"Request",reqdate:"11-20",reqno:"HL7412",currstand:"21",reqstand:"802",fromDate:"2025.03.08",fromTime:"12-08",to:"12-09",url:"/rs-hpm-detail"}],x=d.filter(s=>s.type==="request"),f=d.filter(s=>s.type==="approved"),h=d.filter(s=>s.type==="rejected"),b=()=>{const[s,l]=p.useState("all"),n=u();return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"wrapper",children:[r.jsx(i,{title:"Hangar Pad Management"}),r.jsxs("div",{className:"radiogroup-root",children:[r.jsx("div",{className:"runup-datepk-wrap",children:r.jsx(q,{dateAdapter:j,adapterLocale:"ko",children:r.jsx(v,{})})}),r.jsx(m,{name:"runup-radio",type:"type4",select:s,onChange:a=>{const c=a.target.value;l(c)},items:[{label:"ALL",value:"all"},{label:"Request",value:"request"},{label:"Approved",value:"approved"},{label:"Rejected",value:"rejected"}]})]}),r.jsx("main",{className:"portal-main search-main",children:r.jsxs("div",{className:"portal-cont",children:[s==="all"&&r.jsx(r.Fragment,{children:r.jsx("div",{className:"arrivalscard-list",children:d.map(a=>r.jsxs("div",{className:"arrivalscard-wrap",children:[r.jsx(t,{type:a.type,status:a.status,reqdate:a.reqdate,reqno:a.reqno,currstand:a.currstand,reqstand:a.reqstand,fromDate:a.fromDate,fromTime:a.fromTime,to:a.to}),r.jsx(e,{to:a.url,className:"arrivalscard-link"})]},a.status))})}),s==="request"&&r.jsx(r.Fragment,{children:r.jsx("div",{className:"arrivalscard-list",children:x.map(a=>r.jsxs("div",{className:"arrivalscard-wrap",children:[r.jsx(t,{type:a.type,status:a.status,reqdate:a.reqdate,reqno:a.reqno,currstand:a.currstand,reqstand:a.reqstand,fromDate:a.fromDate,fromTime:a.fromTime,to:a.to}),r.jsx(e,{to:a.url,className:"arrivalscard-link"})]},a.status))})}),s==="approved"&&r.jsx(r.Fragment,{children:f.map(a=>r.jsxs("div",{className:"arrivalscard-wrap",children:[r.jsx(t,{type:a.type,status:a.status,reqdate:a.reqdate,reqno:a.reqno,currstand:a.currstand,reqstand:a.reqstand,fromDate:a.fromDate,fromTime:a.fromTime,to:a.to}),r.jsx(e,{to:a.url,className:"arrivalscard-link"})]},a.status))}),s==="rejected"&&r.jsx(r.Fragment,{children:h.map(a=>r.jsxs("div",{className:"arrivalscard-wrap",children:[r.jsx(t,{type:a.type,status:a.status,reqdate:a.reqdate,reqno:a.reqno,currstand:a.currstand,reqstand:a.reqstand,fromDate:a.fromDate,fromTime:a.fromTime,to:a.to}),r.jsx(e,{to:a.url,className:"arrivalscard-link"})]},a.status))})]})}),r.jsx("div",{className:"portal-action",children:r.jsxs("div",{className:"action-inner",children:[r.jsx(o,{label:"신청",onClick:()=>{n("/rs-hpm-request")}}),r.jsx(o,{type:"submit",styleType:"confirm",label:"조회",onClick:()=>{}})]})})]})})};export{b as default};
