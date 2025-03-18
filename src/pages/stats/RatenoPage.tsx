import React from 'react';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';
import { TooltipHelp } from '@components/popover';

import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';
import logo_jin from '@assets/images/logo/logo_jinair.png';
import logo_vj from '@assets/images/logo/logo_vj.png';
import logo_mu from '@assets/images/logo/logo_mu.png';

const Airlines = [
  {
    logo: logo_koreanair,
    air: 'KE 대한항공',
  },
  {
    logo: logo_asiana,
    air: 'OZ 아시아나항공',
  },
  {
    logo: logo_jin,
    air: 'LJ 진 에어',
  },
  {
    logo: logo_vj,
    air: 'VJ 비엣젯항공',
  },
  {
    logo: logo_mu,
    air: 'MU 중국동방항공',
  },
];

const RatenoPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="정시율 순위" />

        <div className="tabs-child">11 December</div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="search-result-top">
              <div className="tooltip-wrapper">
                정시율 순위
                <TooltipHelp title="정시율 순위">총 편수의 상위 30위권 내에서 정시율 상위 5위산정</TooltipHelp>
              </div>
            </div>
            <Tabs type="cdm-sm">
              <TabContent label="Top 5 Airlines">
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th className="text-left">Departure</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>

                <table className="table-airline">
                  <thead>
                    <tr>
                      <th className="text-left">Arrive</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabContent>
              <TabContent label="Bottom 5 Airlines">
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th className="text-left">Departure</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>

                <table className="table-airline">
                  <thead>
                    <tr>
                      <th className="text-left">Arrive</th>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TabContent>
            </Tabs>
          </div>
        </main>
      </div>
    </>
  );
};

export default RatenoPage;
