import React from 'react';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';

import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';
import logo_jin from '@assets/images/logo/logo_jinair.png';
import logo_vj from '@assets/images/logo/logo_vj.png';
import logo_mu from '@assets/images/logo/logo_mu.png';

const Airlines = [
  {
    logo: logo_koreanair,
    air: 'KE 대한항공',
    count: 3,
  },
  {
    logo: logo_asiana,
    air: 'OZ 아시아나항공',
    count: 4,
  },
  {
    logo: logo_jin,
    air: 'LJ 진 에어',
    count: 5,
  },
  {
    logo: logo_vj,
    air: 'VJ 비엣젯항공',
    count: 6,
  },
  {
    logo: logo_mu,
    air: 'MU 중국동방항공',
    count: 8,
  },
  {
    logo: logo_koreanair,
    air: 'KE 대한항공',
    count: 3,
  },
  {
    logo: logo_asiana,
    air: 'OZ 아시아나항공',
    count: 4,
  },
  {
    logo: logo_jin,
    air: 'LJ 진 에어',
    count: 5,
  },
  {
    logo: logo_vj,
    air: 'VJ 비엣젯항공',
    count: 6,
  },
  {
    logo: logo_mu,
    air: 'MU 중국동방항공',
    count: 8,
  },
];

const TobtcPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="TOBT 변경 횟수" />

        <Tabs type="cdm">
          <TabContent label="Day">
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
                    {Airlines.map((item, idx) => (
                      <tr key={idx}>
                        <td className="text-left">
                          <div className="flt-wrap">
                            <img src={item.logo} alt={item.air} />
                            <span className="air">{item.air}</span>
                          </div>
                        </td>
                        <td className="text-right">
                          <em>{item.count}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </TabContent>
          <TabContent label="Week">
            <div className="tabs-child">5 December ~ 11 December</div>
            <main className="portal-main search-main">
              <div className="portal-cont">
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        <span className="txt-between">
                          <span>Avg. Daily 5</span>
                          <span>Top 5 Airlines</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Airlines.map((item, idx) => (
                      <tr key={idx}>
                        <td className="text-left">
                          <div className="flt-wrap">
                            <img src={item.logo} alt={item.air} />
                            <span className="air">{item.air}</span>
                          </div>
                        </td>
                        <td className="text-right">
                          <em>{item.count}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </TabContent>
          <TabContent label="Year to date">
            <div className="tabs-child">1 January ~ 11 December</div>
            <main className="portal-main search-main">
              <div className="portal-cont">
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th colSpan={2}>
                        <span className="txt-between">
                          <span>Avg. Daily 5</span>
                          <span>Top 5 Airlines</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Airlines.map((item, idx) => (
                      <tr key={idx}>
                        <td className="text-left">
                          <div className="flt-wrap">
                            <img src={item.logo} alt={item.air} />
                            <span className="air">{item.air}</span>
                          </div>
                        </td>
                        <td className="text-right">
                          <em>{item.count}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default TobtcPage;