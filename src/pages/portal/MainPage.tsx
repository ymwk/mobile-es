import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '@components/layout';
import Notice from '@components/content/NoticeComponent';
import { Tabs, TabContent } from '@components/tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-cards';
import logo from '@assets/images/logo/logo_incheon.svg';
import w_clouded from '@assets/images/weather/ico_w_clouded.svg';

const MainPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header main backspace={false}>
          <h1 className="header-portal-logo">
            <img src={logo} alt="인천공항 로고" />
            <span>모바일 ES</span>
          </h1>
        </Header>
        <main className="portal-main">
          <div className="portal-panel">
            <div className="portal-panel-title">
              <span className="title">Welcome</span>
              <p>to the Mobile ES System</p>
            </div>
            <div className="portal-panel-weather">
              <div className="text">
                <span>구름많음</span>
                <span className="tem">
                  12.8<small>°C</small>
                </span>
              </div>
              <div className="img">
                <img src={w_clouded} alt="구름 아이콘" />
              </div>
            </div>
          </div>

          <div className="portal-swiper-wrapper">
            <Swiper
              className="portal-swiper"
              modules={[Autoplay, EffectCards]}
              loop={true}
              speed={400}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={1.4}
              effect="cards"
              cardsEffect={{
                perSlideOffset: 20,
                perSlideRotate: 0,
                rotate: false,
              }}
              // centeredSlides={true}
            >
              {/* 슬라이드 갯수가 6개 이상이어야 loop가 동작하므로 2번 돌림 */}
              {Array(2)
                .fill(0)
                .map((v, i) => (
                  <Fragment key={v + i}>
                    <SwiperSlide className="portal-slide-acdm">
                      <div className="slide-cont">
                        <span className="slide-title">
                          A-CDM
                          <i className="ico-root bookmark active" />
                        </span>
                        <p>협동운항관리시스템</p>
                        <Link to="/arrivals" className="slide-link">
                          <span className="blind">바로가기</span>
                        </Link>
                      </div>
                      <div className="slide-thumb slide-title">AM</div>
                    </SwiperSlide>

                    <SwiperSlide className="portal-slide-fp">
                      <div className="slide-cont">
                        <span className="slide-title">
                          Flight <br />
                          Plan
                          <i className="ico-root bookmark" />
                        </span>
                        <p>운항계획</p>
                        <Link to="/fp" className="slide-link">
                          <span className="blind">바로가기</span>
                        </Link>
                      </div>
                      <div className="slide-thumb slide-title">FP</div>
                    </SwiperSlide>

                    <SwiperSlide className="portal-slide-ac">
                      <div className="slide-cont">
                        <span className="slide-title">
                          Airside <br />
                          Control
                          <i className="ico-root bookmark" />
                        </span>
                        <p>에어사이드 운영관리</p>
                        <Link to="/ac-total" className="slide-link">
                          <span className="blind">바로가기</span>
                        </Link>
                      </div>
                      <div className="slide-thumb slide-title">AC</div>
                    </SwiperSlide>

                    <SwiperSlide className="portal-slide-ca">
                      <div className="slide-cont">
                        <span className="slide-title">
                          Common <br />
                          Admin
                          <i className="ico-root bookmark" />
                        </span>
                        <p>공동업무관리</p>
                        <Link to="/notice" className="slide-link">
                          <span className="blind">바로가기</span>
                        </Link>
                      </div>
                      <div className="slide-thumb slide-title">CA</div>
                    </SwiperSlide>

                    <SwiperSlide className="portal-slide-rs">
                      <div className="slide-cont">
                        <span className="slide-title">
                          Resource <br />
                          Schedule
                          <i className="ico-root bookmark" />
                        </span>
                        <p>자원배정</p>
                        <Link to="/rs-sca" className="slide-link">
                          <span className="blind">바로가기</span>
                        </Link>
                      </div>
                      <div className="slide-thumb slide-title">RS</div>
                    </SwiperSlide>
                  </Fragment>
                ))}
            </Swiper>
          </div>

          <section className="index-section">
            <Tabs type={'main'}>
              <TabContent label="전체">
                <Notice />
              </TabContent>
              <TabContent label="A-CDM">
                <Notice />
              </TabContent>
              <TabContent label="AC">
                <Notice />
              </TabContent>
              <TabContent label="RS">
                <Notice />
              </TabContent>
            </Tabs>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MainPage;
