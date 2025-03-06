import React from 'react';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';
import PlaneIcon from '@assets/images/icon/ico_plane.svg'

const TraffstatPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="항공 교통량 현황" />

        <Tabs>
          <TabContent label="Day">
            <div className="tabs-child">11 December</div>
            <main className="portal-main search-main">
              <div className="portal-cont">
                <table className="table-airline">
                  <thead>
                    <tr>
                      <th></th>
                      <th>SOBT</th>
                      <th>AOBT</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>합계</th>
                      <td>
                        <em>1,043</em> flights
                      </td>
                      <td>
                        <em>1,045</em> flights
                      </td>
                    </tr>
                  </tfoot>
                  <tbody>
                    {Array(15)
                      .fill(0)
                      .map((v, i) => (
                        <tr key={v + i}>
                          <td>00시</td>
                          <td>
                            <em>16</em> flights
                          </td>
                          <td>
                            <em>17</em> flights
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
              <div className="stats-box-wrap">
                <div className="stats-box t-traff">
                  <div className="value">
                    <em>27,370</em>
                    <span>Avg. Daily FLIGHTS</span>
                  </div>
                  <img src={PlaneIcon} alt="" className="ico-lg" />
                  <div className="value-box">
                    <span className="up">4%</span>
                    <span>vs 2024</span>
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="Year to date">
            <div className="tabs-child">1 January ~ 11 December</div>
            <main className="portal-main search-main">
              <div className="stats-box-wrap">
                <div className="stats-box t-traff">
                  <div className="value">
                    <em>27,370</em>
                    <span>Avg. Daily FLIGHTS</span>
                  </div>
                  <div className="value">
                    <em>10,186, 066</em>
                    <span>Total FLIGHTS</span>
                  </div>
                  <img src={PlaneIcon} alt="" className="ico-sm" />
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

export default TraffstatPage;