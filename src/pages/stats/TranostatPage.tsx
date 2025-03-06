import React from 'react';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';
import logo_jin from '@assets/images/logo/logo_jinair.png';
import logo_vj from '@assets/images/logo/logo_vj.png';
import logo_mu from '@assets/images/logo/logo_mu.png';

const Citys = [
  {
    city: 'Incheon',
    count: 4702,
  },
  {
    city: 'Tokyo',
    count: 4302,
  },
  {
    city: 'New York',
    count: 3791,
  },
  {
    city: 'LA',
    count: 2435,
  },
  {
    city: 'London',
    count: 2167,
  },
];

const Airlines = [
  {
    logo: logo_koreanair,
    air: 'KE 대한항공',
    count: 4702,
  },
  {
    logo: logo_asiana,
    air: 'OZ 아시아나항공',
    count: 4302,
  },
  {
    logo: logo_jin,
    air: 'LJ 진 에어',
    count: 3791,
  },
  {
    logo: logo_vj,
    air: 'VJ 비엣젯항공',
    count: 2435,
  },
  {
    logo: logo_mu,
    air: 'MU 중국동방항공',
    count: 2167,
  },
];

const Airports = [
  {
    air: 'Incheon',
    count: 4702,
  },
  {
    air: 'Tokyo',
    count: 4302,
  },
  {
    air: 'Amsterdam',
    count: 3791,
  },
  {
    air: 'Paris Charles de Gaulle',
    count: 2435,
  },
  {
    air: 'London Heathrow',
    count: 2167,
  },
];

const TranostatPage: React.FC = () => {
  const commaFormatter = (xnum: number): string => {
    return xnum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <>
      <div className="wrapper">
        <Header title="항공 교통량 순위" />

        <Tabs>
          <TabContent label="City">
            <Swiper
              className="stats-swiper"
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="tabs-child">11 December</div>
                <main className="portal-main search-main">
                  <div className="portal-cont">
                    <table className="table-airline">
                      <thead>
                        <tr>
                          <th colSpan={2}>Top 5 Airlines</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Citys.map((item, idx) => {
                          const toCount = commaFormatter(item.count);
                          return (
                            <tr key={idx}>
                              <td className="text-left">{item.city}</td>
                              <td className="text-right">
                                <em>{toCount}</em> flights
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </main>
              </SwiperSlide>
              <SwiperSlide>
                <main className="portal-main search-main">
                  <div className="portal-cont">
                    <div className="stats-graph">
                      <span className="graph-help">항공 교통량 증가 순위</span>
                      <div className="graph-area">
                        <ul className="key-x">
                          <li>Incheon</li>
                          <li>Tokyo</li>
                          <li>New York</li>
                          <li>LA</li>
                          <li>London</li>
                        </ul>
                        <ul className="key-y">
                          {Array(7)
                            .fill(0)
                            .map((v, i) => (
                              <li key={v + i}>{i * 50}</li>
                            ))}
                        </ul>

                        <ul className="graph-list">
                          <li>
                            <div className="bar value-1" style={{ height: '30%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '40%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '60%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '65%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '25%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '30%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '90%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '100%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '50%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '40%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </main>
              </SwiperSlide>
            </Swiper>
          </TabContent>
          <TabContent label="Airline">
            <Swiper
              className="stats-swiper"
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="tabs-child">11 December</div>
                <main className="portal-main search-main">
                  <div className="portal-cont">
                    <table className="table-airline">
                      <thead>
                        <tr>
                          <th colSpan={2}>Top 5 Airlines</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Airlines.map((item, idx) => {
                          const toCount = commaFormatter(item.count);
                          return (
                            <tr key={idx}>
                              <td className="text-left">
                                <div className="flt-wrap">
                                  <img src={item.logo} alt={item.air} />
                                  <span className="air">{item.air}</span>
                                </div>
                              </td>
                              <td className="text-right">
                                <em>{toCount}</em> flights
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </main>
              </SwiperSlide>
              <SwiperSlide>
                <main className="portal-main search-main">
                  <div className="portal-cont">
                    <div className="stats-graph">
                      <span className="graph-help">항공 교통량 증가 순위</span>
                      <div className="graph-area">
                        <ul className="key-x">
                          <li>Incheon</li>
                          <li>Tokyo</li>
                          <li>New York</li>
                          <li>LA</li>
                          <li>London</li>
                        </ul>
                        <ul className="key-y">
                          {Array(7)
                            .fill(0)
                            .map((v, i) => (
                              <li key={v + i}>{i * 50}</li>
                            ))}
                        </ul>

                        <ul className="graph-list">
                          <li>
                            <div className="bar value-1" style={{ height: '30%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '40%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '60%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '65%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '25%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '30%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '90%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '100%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '50%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '40%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </main>
              </SwiperSlide>
            </Swiper>
          </TabContent>
          <TabContent label="Airport">
            <Swiper
              className="stats-swiper"
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="tabs-child">11 December</div>
                <main className="portal-main search-main">
                  <div className="portal-cont">
                    <table className="table-airline">
                      <thead>
                        <tr>
                          <th colSpan={2}>Top 5 Airlines</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Airports.map((item, idx) => {
                          const toCount = commaFormatter(item.count);
                          return (
                            <tr key={idx}>
                              <td className="text-left">{item.air}</td>
                              <td className="text-right">
                                <em>{toCount}</em> flights
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </main>
              </SwiperSlide>
              <SwiperSlide>
                <main className="portal-main search-main">
                  <div className="portal-cont">
                    <div className="stats-graph">
                      <span className="graph-help">항공 교통량 증가 순위</span>
                      <div className="graph-area">
                        <ul className="key-x">
                          <li>Incheon</li>
                          <li>Tokyo</li>
                          <li>New York</li>
                          <li>LA</li>
                          <li>London</li>
                        </ul>
                        <ul className="key-y">
                          {Array(7)
                            .fill(0)
                            .map((v, i) => (
                              <li key={v + i}>{i * 50}</li>
                            ))}
                        </ul>

                        <ul className="graph-list">
                          <li>
                            <div className="bar value-1" style={{ height: '30%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '40%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '60%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '65%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '25%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '30%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '90%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '100%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                          <li>
                            <div className="bar value-1" style={{ height: '50%' }}>
                              <div className="motion" />
                            </div>
                            <div className="bar value-2" style={{ height: '40%' }}>
                              <div className="motion" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </main>
              </SwiperSlide>
            </Swiper>
          </TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default TranostatPage;