import{j as s,L as g}from"./index-CGvb5FS0.js";import{H as U}from"./HeaderComponent-CkSIyrY3.js";import{F as Y}from"./FooterComponent-Bu-MCWxQ.js";import{N as F}from"./NoticeComponent-CGQSGGNS.js";import{T as Z,a as q}from"./TabContent-Dfwxsge7.js";import{g as _,a as V,e as Q,c as W,S as G,b as S}from"./swiper-xSoLTy6M.js";import{l as J}from"./logo_incheon-DkTnvjH-.js";import"./img_pass_pin-B6SR2n5t.js";function K(N){let{swiper:e,extendParams:t,on:l,emit:p,params:m}=N;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let c,o,d=m&&m.autoplay?m.autoplay.delay:3e3,i=m&&m.autoplay?m.autoplay.delay:3e3,r,u=new Date().getTime(),b,v,f,C,n,j,h;function A(a){!e||e.destroyed||!e.wrapperEl||a.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",A),!(h||a.detail&&a.detail.bySwiperTouchMove)&&T())}const L=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?b=!0:b&&(i=r,b=!1);const a=e.autoplay.paused?r:u+i-new Date().getTime();e.autoplay.timeLeft=a,p("autoplayTimeLeft",a,a/d),o=requestAnimationFrame(()=>{L()})},P=()=>{let a;return e.virtual&&e.params.virtual.enabled?a=e.slides.find(y=>y.classList.contains("swiper-slide-active")):a=e.slides[e.activeIndex],a?parseInt(a.getAttribute("data-swiper-autoplay"),10):void 0},M=a=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),L();let E=typeof a>"u"?e.params.autoplay.delay:a;d=e.params.autoplay.delay,i=e.params.autoplay.delay;const y=P();!Number.isNaN(y)&&y>0&&typeof a>"u"&&(E=y,d=y,i=y),r=E;const D=e.params.speed,B=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(D,!0,!0),p("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,D,!0,!0),p("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(D,!0,!0),p("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,D,!0,!0),p("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{M()})))};return E>0?(clearTimeout(c),c=setTimeout(()=>{B()},E)):requestAnimationFrame(()=>{B()}),E},$=()=>{u=new Date().getTime(),e.autoplay.running=!0,M(),p("autoplayStart")},w=()=>{e.autoplay.running=!1,clearTimeout(c),cancelAnimationFrame(o),p("autoplayStop")},k=(a,E)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(c),a||(j=!0);const y=()=>{p("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",A):T()};if(e.autoplay.paused=!0,E){n&&(r=e.params.autoplay.delay),n=!1,y();return}r=(r||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&r<0&&!e.params.loop)&&(r<0&&(r=0),y())},T=()=>{e.isEnd&&r<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),j?(j=!1,M(r)):M(),e.autoplay.paused=!1,p("autoplayResume"))},O=()=>{if(e.destroyed||!e.autoplay.running)return;const a=_();a.visibilityState==="hidden"&&(j=!0,k(!0)),a.visibilityState==="visible"&&T()},R=a=>{a.pointerType==="mouse"&&(j=!0,h=!0,!(e.animating||e.autoplay.paused)&&k(!0))},I=a=>{a.pointerType==="mouse"&&(h=!1,e.autoplay.paused&&T())},x=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",R),e.el.addEventListener("pointerleave",I))},X=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",R),e.el.removeEventListener("pointerleave",I))},H=()=>{_().addEventListener("visibilitychange",O)},z=()=>{_().removeEventListener("visibilitychange",O)};l("init",()=>{e.params.autoplay.enabled&&(x(),H(),$())}),l("destroy",()=>{X(),z(),e.autoplay.running&&w()}),l("_freeModeStaticRelease",()=>{(f||j)&&T()}),l("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?w():k(!0,!0)}),l("beforeTransitionStart",(a,E,y)=>{e.destroyed||!e.autoplay.running||(y||!e.params.autoplay.disableOnInteraction?k(!0,!0):w())}),l("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){w();return}v=!0,f=!1,j=!1,C=setTimeout(()=>{j=!0,f=!0,k(!0)},200)}}),l("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!v)){if(clearTimeout(C),clearTimeout(c),e.params.autoplay.disableOnInteraction){f=!1,v=!1;return}f&&e.params.cssMode&&T(),f=!1,v=!1}}),l("slideChange",()=>{e.destroyed||!e.autoplay.running||(n=!0)}),Object.assign(e.autoplay,{start:$,stop:w,pause:k,resume:T})}function ee(N){const{effect:e,swiper:t,on:l,setTranslate:p,setTransition:m,overwriteParams:c,perspective:o,recreateShadows:d,getEffectParams:i}=N;l("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),o&&o()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const u=c?c():{};Object.assign(t.params,u),Object.assign(t.originalParams,u)}),l("setTranslate",()=>{t.params.effect===e&&p()}),l("setTransition",(u,b)=>{t.params.effect===e&&m(b)}),l("transitionEnd",()=>{if(t.params.effect===e&&d){if(!i||!i().slideShadows)return;t.slides.forEach(u=>{u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(b=>b.remove())}),d()}});let r;l("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(r=!0),requestAnimationFrame(()=>{r&&t.slides&&t.slides.length&&(p(),r=!1)}))})}function se(N,e){const t=V(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function ae(N){let{swiper:e,duration:t,transformElements:l,allSlides:p}=N;const{activeIndex:m}=e,c=o=>o.parentElement?o.parentElement:e.slides.find(i=>i.shadowRoot&&i.shadowRoot===o.parentNode);if(e.params.virtualTranslate&&t!==0){let o=!1,d;p?d=l:d=l.filter(i=>{const r=i.classList.contains("swiper-slide-transform")?c(i):i;return e.getSlideIndex(r)===m}),d.forEach(i=>{Q(i,()=>{if(o||!e||e.destroyed)return;o=!0,e.animating=!1;const r=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(r)})})}}function te(N,e,t){const l=`swiper-slide-shadow${` swiper-slide-shadow-${N}`}`,p=V(e);let m=p.querySelector(`.${l.split(" ").join(".")}`);return m||(m=W("div",l.split(" ")),p.append(m)),m}function ie(N){let{swiper:e,extendParams:t,on:l}=N;t({cardsEffect:{slideShadows:!0,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),ee({effect:"cards",swiper:e,on:l,setTranslate:()=>{const{slides:c,activeIndex:o,rtlTranslate:d}=e,i=e.params.cardsEffect,{startTranslate:r,isTouched:u}=e.touchEventsData,b=d?-e.translate:e.translate;for(let v=0;v<c.length;v+=1){const f=c[v],C=f.progress,n=Math.min(Math.max(C,-4),4);let j=f.swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&(e.wrapperEl.style.transform=`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(j-=c[0].swiperSlideOffset);let h=e.params.cssMode?-j-e.translate:-j,A=0;const L=-100*Math.abs(n);let P=1,M=-i.perSlideRotate*n,$=i.perSlideOffset-Math.abs(n)*.75;const w=e.virtual&&e.params.virtual.enabled?e.virtual.from+v:v,k=(w===o||w===o-1)&&n>0&&n<1&&(u||e.params.cssMode)&&b<r,T=(w===o||w===o+1)&&n<0&&n>-1&&(u||e.params.cssMode)&&b>r;if(k||T){const x=(1-Math.abs((Math.abs(n)-.5)/.5))**.5;M+=-28*n*x,P+=-.5*x,$+=96*x,A=`${-25*x*Math.abs(n)}%`}if(n<0?h=`calc(${h}px ${d?"-":"+"} (${$*Math.abs(n)}%))`:n>0?h=`calc(${h}px ${d?"-":"+"} (-${$*Math.abs(n)}%))`:h=`${h}px`,!e.isHorizontal()){const x=A;A=h,h=x}const O=n<0?`${1+(1-P)*n}`:`${1-(1-P)*n}`,R=`
        translate3d(${h}, ${A}, ${L}px)
        rotateZ(${i.rotate?d?-M:M:0}deg)
        scale(${O})
      `;if(i.slideShadows){let x=f.querySelector(".swiper-slide-shadow");x||(x=te("cards",f)),x&&(x.style.opacity=Math.min(Math.max((Math.abs(n)-.5)/.5,0),1))}f.style.zIndex=-Math.abs(Math.round(C))+c.length;const I=se(i,f);I.style.transform=R}},setTransition:c=>{const o=e.slides.map(d=>V(d));o.forEach(d=>{d.style.transitionDuration=`${c}ms`,d.querySelectorAll(".swiper-slide-shadow").forEach(i=>{i.style.transitionDuration=`${c}ms`})}),ae({swiper:e,duration:c,transformElements:o})},perspective:()=>!0,overwriteParams:()=>({_loopSwapReset:!1,watchSlidesProgress:!0,loopAdditionalSlides:3,centeredSlides:!0,virtualTranslate:!e.params.cssMode})})}const le="/mobile-es/assets/ico_w_clouded-OaRQXVpB.svg",fe=()=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"wrapper",children:[s.jsx(U,{main:!0,backspace:!1,children:s.jsxs("h1",{className:"header-portal-logo",children:[s.jsx("img",{src:J,alt:"인천공항 로고"}),s.jsx("span",{children:"모바일 ES"})]})}),s.jsxs("main",{className:"portal-main",children:[s.jsxs("div",{className:"portal-panel",children:[s.jsxs("div",{className:"portal-panel-title",children:[s.jsx("span",{className:"title",children:"Welcome"}),s.jsx("p",{children:"to the Mobile ES System"})]}),s.jsxs("div",{className:"portal-panel-weather",children:[s.jsxs("div",{className:"text",children:[s.jsx("span",{children:"구름많음"}),s.jsxs("span",{className:"tem",children:["12.8",s.jsx("small",{children:"°C"})]})]}),s.jsx("div",{className:"img",children:s.jsx("img",{src:le,alt:"구름 아이콘"})})]})]}),s.jsx("div",{className:"portal-swiper-wrapper",children:s.jsxs(G,{className:"portal-swiper",modules:[K,ie],loop:!0,speed:400,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:1.4,effect:"cards",cardsEffect:{perSlideOffset:20,perSlideRotate:0,rotate:!1},children:[s.jsxs(S,{className:"portal-slide-acdm",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["A-CDM",s.jsx("i",{className:"ico-root bookmark active"})]}),s.jsx("p",{children:"협동운항관리시스템"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"AM"})]}),s.jsxs(S,{className:"portal-slide-fp",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Flight ",s.jsx("br",{}),"Plan",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"운항계획"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"FP"})]}),s.jsxs(S,{className:"portal-slide-ac",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Airside ",s.jsx("br",{}),"Control",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"에어사이드 운영관리"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"AC"})]}),s.jsxs(S,{className:"portal-slide-ca",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Common ",s.jsx("br",{}),"Admin",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"공동업무관리"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"CA"})]}),s.jsxs(S,{className:"portal-slide-rs",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Resource ",s.jsx("br",{}),"Schedule",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"자원배정"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"RS"})]}),s.jsxs(S,{className:"portal-slide-acdm",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["A-CDM",s.jsx("i",{className:"ico-root bookmark active"})]}),s.jsx("p",{children:"협동운항관리시스템"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"AM"})]}),s.jsxs(S,{className:"portal-slide-fp",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Flight ",s.jsx("br",{}),"Plan",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"운항계획"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"FP"})]}),s.jsxs(S,{className:"portal-slide-ac",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Airside ",s.jsx("br",{}),"Control",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"에어사이드 운영관리"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"AC"})]}),s.jsxs(S,{className:"portal-slide-ca",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Common ",s.jsx("br",{}),"Admin",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"공동업무관리"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"CA"})]}),s.jsxs(S,{className:"portal-slide-rs",children:[s.jsxs("div",{className:"slide-cont",children:[s.jsxs("span",{className:"slide-title",children:["Resource ",s.jsx("br",{}),"Schedule",s.jsx("i",{className:"ico-root bookmark"})]}),s.jsx("p",{children:"자원배정"}),s.jsx(g,{to:"/",className:"slide-link",children:s.jsx("span",{className:"blind",children:"바로가기"})})]}),s.jsx("div",{className:"slide-thumb slide-title",children:"RS"})]})]})}),s.jsx("section",{className:"index-section",children:s.jsxs(Z,{type:"main",children:[s.jsx(q,{label:"전체",children:s.jsx(F,{})}),s.jsx(q,{label:"A-CDM",children:s.jsx(F,{})}),s.jsx(q,{label:"AC",children:s.jsx(F,{})}),s.jsx(q,{label:"RS",children:s.jsx(F,{})})]})}),s.jsx(Y,{})]})]})});export{fe as default};
