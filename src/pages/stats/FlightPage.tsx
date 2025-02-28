import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import 'dayjs/locale/ko';

const FlightPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="항공기 운항현황" />

        <div className="search-root">
          <div className="search-row">
            <span className="label">기준일자</span>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
              <Datepk />
            </LocalizationProvider>
          </div>
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <Tabs type="cdm-sm">
              <TabContent label="운항현황">
                <table className="table-list">
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>편수</th>
                      <th>출발</th>
                      <th>도착</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>최초계획</td>
                      <td>345대</td>
                      <td>170대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>최초계획</td>
                      <td>345대</td>
                      <td>170대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>최초계획</td>
                      <td>345대</td>
                      <td>170대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>최초계획</td>
                      <td>345대</td>
                      <td>170대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>최초계획</td>
                      <td>345대</td>
                      <td>170대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>희망</td>
                      <td>0대</td>
                      <td>-</td>
                      <td>0대</td>
                    </tr>
                    <tr>
                      <td>최초계획</td>
                      <td>345대</td>
                      <td>170대</td>
                      <td>175대</td>
                    </tr>
                  </tbody>
                </table>
              </TabContent>
              <TabContent label="운항지연"></TabContent>
              <TabContent label="탑승대기시간"></TabContent>
              <TabContent label="기타"></TabContent>
            </Tabs>
          </div>
        </main>
        <div className="portal-action">
          <div className="action-inner">
            <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightPage;