import React from 'react';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';
import { ActionButton, IconButton, Button } from '@components/button';
import { useModal } from '@hooks/useModal';
import { FinishedModal } from '@pages/modal/FinishedModal';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';

const AcDeicingPage: React.FC = () => {
  const FinishedModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <Button styleType="small" label="FINISHED" onClick={openModal} />
        <FinishedModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  return (
    <>
      <div className="wrapper">
        <Header title="Deicing Information" />

        <Tabs>
          <TabContent label="PAD">
            <div className="search-root">
              <div className="search-row">
                <span className="label"> 조업사</span>
                <div className="select-root" style={{ width: 140 }}>
                  <select>
                    <option>전체</option>
                  </select>
                </div>
                <div className="search-option">
                  <IconButton icon="refresh" label="새로고침" />
                </div>
              </div>
              <div className="search-value">
                <div className="flex-grow">
                  <span className="label"> RWY :</span>
                  <span className="value">33/34</span>
                </div>
                <div>
                  <span className="label"> Deicing Phase :</span>
                  <span className="value">---------</span>
                </div>
              </div>
            </div>

            <main className="portal-main search-main">
              <div className="portal-cont">
                <Tabs type="cdm-sm" className="c-t03">
                  <TabContent label="A SOUTH">
                    <table className="table-list c-t03">
                      <thead>
                        <tr>
                          <th>821</th>
                          <th>822</th>
                          <th>823</th>
                          <th>825</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="M SOUTH">
                    <table className="table-list c-t03">
                      <thead>
                        <tr>
                          <th>831</th>
                          <th>831L</th>
                          <th>831R</th>
                          <th>832</th>
                          <th>833</th>
                          <th>834</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="T CENTER">
                    <table className="table-list c-t03">
                      <thead>
                        <tr>
                          <th>821</th>
                          <th>822</th>
                          <th>823</th>
                          <th>825</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="CENTRAL">
                    <table className="table-list c-t03">
                      <thead>
                        <tr>
                          <th>307</th>
                          <th>308</th>
                          <th>309</th>
                          <th>310</th>
                          <th>311</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                </Tabs>
              </div>
            </main>
            <div className="portal-action">
              <div className="action-inner">
                <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
              </div>
            </div>
          </TabContent>
          <TabContent label="조업사">
            <div className="search-root">
              <div className="search-row">
                <span className="label"> 조업사</span>
                <div className="select-root" style={{ width: 140 }}>
                  <select>
                    <option>전체</option>
                  </select>
                </div>
                <div className="search-option">
                  <IconButton icon="refresh" label="새로고침" />
                </div>
              </div>
              <div className="search-value">
                <div className="flex-grow">
                  <span className="label"> RWY :</span>
                  <span className="value">33/34</span>
                </div>
                <div>
                  <span className="label"> Deicing Phase :</span>
                  <span className="value">---------</span>
                </div>
              </div>
            </div>

            <main className="portal-main search-main">
              <div className="portal-cont">
                <table className="table-list c-t03">
                  <thead>
                    <tr>
                      <th>FLT</th>
                      <th>REQ</th>
                      <th>ZONE</th>
                      <th>PAD</th>
                      <th>IN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>

            <div className="portal-action">
              <div className="action-inner">
                <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
              </div>
            </div>
          </TabContent>

          <TabContent label="NOTICE">
            <main className="portal-main search-main">
              <div className="portal-cont">
                <Tabs type="cdm-sm" className="c-t03">
                  <TabContent label="NOTICE">
                    <div className="search-children">
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                        <Datepk />
                        ~
                        <Datepk />
                      </LocalizationProvider>
                    </div>

                    <table className="table-data table-auto">
                      <tbody>
                        <tr>
                          <th>제빙완료</th>
                          <td className="text-right">40분</td>
                        </tr>
                        <tr>
                          <th>제빙진행</th>
                          <td className="text-right">
                            <FinishedModalOpen />
                          </td>
                        </tr>
                        <tr>
                          <th>제빙대기</th>
                          <td className="text-right">21</td>
                        </tr>
                        <tr>
                          <th>제빙요청 ~ 후방견인전</th>
                          <td className="text-right">1시간</td>
                        </tr>
                        <tr>
                          <th>후방견인 후 ~ 제빙장 진입 전</th>
                          <td className="text-right">40분</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="운항관리정보">
                    <table className="table-data table-auto">
                      <tbody>
                        <tr>
                          <th>제빙요청 ~ 후방견인전 소요시간</th>
                          <td className="text-right">1시간</td>
                        </tr>
                        <tr>
                          <th>후방견인요청 ~ 제방빙진입 소요시간</th>
                          <td className="text-right">40분</td>
                        </tr>
                        <tr>
                          <th>제방빙진입 ~ 이탈시간</th>
                          <td className="text-right">2시간</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="운항현황">
                    <div className="search-children">
                      <div className="select-root" style={{ width: 100 }}>
                        <select>
                          <option>1시간</option>
                        </select>
                      </div>
                      <span>이내 전체 운항현황</span>
                    </div>

                    <table className="table-data table-auto">
                      <tbody>
                        <tr>
                          <th>ETD ~ ATD 소요시간</th>
                          <td className="text-right">1시간</td>
                        </tr>
                        <tr>
                          <th>제빙요청 ~ ATD 소요시간</th>
                          <td className="text-right">40분</td>
                        </tr>
                        <tr>
                          <th>후방견인요청 ~ ATD 소요시간</th>
                          <td className="text-right">2시간</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                </Tabs>
              </div>
            </main>

            <div className="portal-action">
              <div className="action-inner">
                <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
              </div>
            </div>
          </TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default AcDeicingPage;
