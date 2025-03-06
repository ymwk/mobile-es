import React from 'react';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';

import ArrIcon from '@assets/images/pic/pic_landing.png';
import DepIcon from '@assets/images/pic/pic_takeoff.png';

const RatePage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="정시율" />

        <Tabs>
          <TabContent label="Day">
            <div className="tabs-child">11 December</div>
            <main className="portal-main search-main">
              <div className="stats-box-wrap s-sm">
                <div className="stats-box">
                  <img src={ArrIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>10.3%</em>
                    <span>도착 정시율</span>
                  </div>

                  <div className="value-box">
                    <span className="up">2%</span>
                    <span>vs 2024</span>
                  </div>
                </div>

                <div className="stats-box">
                  <img src={DepIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>5.0%</em>
                    <span>출발 정시율</span>
                  </div>

                  <div className="value-box">
                    <span className="down">2%</span>
                    <span>vs 2024</span>
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="Week">
            <div className="tabs-child">5 December ~ 11 December</div>
            <main className="portal-main search-main">
              <div className="stats-box-wrap s-sm">
                <div className="stats-box">
                  <img src={ArrIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>10.3%</em>
                    <span>도착 정시율</span>
                  </div>

                  <div className="value-box">
                    <span className="up">2%</span>
                    <span>vs 2024</span>
                  </div>
                </div>

                <div className="stats-box">
                  <img src={DepIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>5.0%</em>
                    <span>출발 정시율</span>
                  </div>

                  <div className="value-box">
                    <span className="down">2%</span>
                    <span>vs 2024</span>
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="Year to date">
            <div className="tabs-child">1 January ~ 11 December</div>
            <main className="portal-main search-main">
              <div className="stats-box-wrap s-sm">
                <div className="stats-box">
                  <img src={ArrIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>10.3%</em>
                    <span>도착 정시율</span>
                  </div>

                  <div className="value-box">
                    <span className="up">2%</span>
                    <span>vs 2024</span>
                  </div>
                </div>

                <div className="stats-box">
                  <img src={DepIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>5.0%</em>
                    <span>출발 정시율</span>
                  </div>

                  <div className="value-box">
                    <span className="down">2%</span>
                    <span>vs 2024</span>
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default RatePage;