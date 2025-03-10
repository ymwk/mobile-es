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
    air: 'KE',
    val1: 0,
    val2: 0,
    val3: 0,
  },
  {
    logo: logo_asiana,
    air: 'OZ',
    val1: 0,
    val2: 2,
    val3: 0,
  },
  {
    logo: logo_jin,
    air: 'LJ',
    val1: 1,
    val2: 2,
    val3: 0,
  },
  {
    logo: logo_vj,
    air: 'VJ',
    val1: 0,
    val2: 2,
    val3: 2,
  },
  {
    logo: logo_mu,
    air: 'MU',
    val1: 0,
    val2: 2,
    val3: 4,
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
              <div className="table-gap">
                <div className="tooltip-wrapper">
                  <span>Bottom 5 Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Bottom 5 Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 하위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th></th>
                      <th>-90m ~ -40m</th>
                      <th>-40m ~ -10m</th>
                      <th>-10m ~ AOBT</th>
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
                          <em>{item.val1}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val2}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val3}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="tooltip-wrapper">
                  <span>Top 5 Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Top 5 Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 상위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th></th>
                      <th>-90m ~ -40m</th>
                      <th>-40m ~ -10m</th>
                      <th>-10m ~ AOBT</th>
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
                          <em>{item.val1}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val2}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val3}</em>
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
              <div className="table-gap">
                <div className="tooltip-wrapper">
                  <span>Avg. Daily5 / Bottom Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Avg. Daily5 / Bottom Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 하위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th></th>
                      <th>-90m ~ -40m</th>
                      <th>-40m ~ -10m</th>
                      <th>-10m ~ AOBT</th>
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
                          <em>{item.val1}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val2}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val3}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="tooltip-wrapper">
                  <span>Avg. Daily5 / Top Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Avg. Daily5 / Top Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 상위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th></th>
                      <th>-90m ~ -40m</th>
                      <th>-40m ~ -10m</th>
                      <th>-10m ~ AOBT</th>
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
                          <em>{item.val1}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val2}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val3}</em>
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
              <div className="table-gap">
                <div className="tooltip-wrapper">
                  <span>Avg. Daily5 / Bottom Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Avg. Daily5 / Bottom Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 하위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th></th>
                      <th>-90m ~ -40m</th>
                      <th>-40m ~ -10m</th>
                      <th>-10m ~ AOBT</th>
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
                          <em>{item.val1}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val2}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val3}</em>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="tooltip-wrapper">
                  <span>Avg. Daily5 / Top Airlines</span>
                  <TooltipHelp>
                    <div className="tooltip-title">Avg. Daily5 / Top Airlines 기준</div>
                    <p>일 운항횟수의 상위 30위권 내에서 TOBT 40분 전 준수율 상위 5위 산정</p>
                  </TooltipHelp>
                </div>
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th></th>
                      <th>-90m ~ -40m</th>
                      <th>-40m ~ -10m</th>
                      <th>-10m ~ AOBT</th>
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
                          <em>{item.val1}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val2}</em>
                        </td>
                        <td className="text-right">
                          <em>{item.val3}</em>
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