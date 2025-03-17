import React from 'react';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';
import { TooltipHelp } from '@components/popover';

import ArrIcon from '@assets/images/pic/pic_landing.png';
import DepIcon from '@assets/images/pic/pic_takeoff.png';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';
import logo_jin from '@assets/images/logo/logo_jinair.png';
import logo_vj from '@assets/images/logo/logo_vj.png';
import logo_mu from '@assets/images/logo/logo_mu.png';

const Airlines = [
  {
    logo: logo_koreanair,
    air: 'KE',
    tobt: '92.8%',
    tsat: '92.8%',
  },
  {
    logo: logo_asiana,
    air: 'OZ',
    tobt: '91.0%',
    tsat: '90.8%',
  },
  {
    logo: logo_jin,
    air: 'LJ',
    tobt: '89.8%',
    tsat: '89.8%',
  },
  {
    logo: logo_vj,
    air: 'VJ',
    tobt: '88.8%',
    tsat: '88.8%',
  },
  {
    logo: logo_mu,
    air: 'MU',
    tobt: '85.4%',
    tsat: '85.4%',
  },
];

const OperstatPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="A-CDM 운영 현황" />

        <Tabs>
          <TabContent label="Taxi Time">
            <div className="tabs-child">11 December</div>
            <main className="portal-main search-main">
              <div className="stats-box-wrap s-sm">
                <div className="stats-box ">
                  <img src={ArrIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>2 min</em>
                  </div>
                  <span>Arrive</span>
                </div>

                <div className="stats-box">
                  <img src={DepIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>3 min</em>
                  </div>
                  <span>Departure</span>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="TOBT">
            <div className="tabs-child">11 December</div>
            <main className="portal-main search-main">
              <div className="stats-box-wrap s-sm">
                <div className="stats-box ">
                  <img src={ArrIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>98.0%</em>
                  </div>
                  <span>40분전</span>
                </div>

                <div className="stats-box">
                  <img src={DepIcon} alt="" className="ico-rate" />
                  <div className="value">
                    <em>93.2%</em>
                  </div>
                  <span>30분전</span>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="TOBT / TSAT">
            <div className="tabs-child">11 December</div>
            <main className="portal-main search-main">
              <div className="table-wrap">
                <div className="tooltip-wrapper">
                  <span>Top 5 Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Top 5 Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 상위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline table-fixed">
                  <thead>
                    <tr>
                      <th></th>
                      <th>TOBT</th>
                      <th>TSAT</th>
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
                        <td>
                          <em>{item.tobt}</em>
                        </td>
                        <td>
                          <em>{item.tsat}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="table-wrap">
                <div className="tooltip-wrapper">
                  <span>Bottom 5 Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Bottom 5 Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 하위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline table-fixed">
                  <thead>
                    <tr>
                      <th></th>
                      <th>TOBT</th>
                      <th>TSAT</th>
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
                        <td>
                          <em>{item.tobt}</em>
                        </td>
                        <td>
                          <em>{item.tsat}</em>
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

export default OperstatPage;
