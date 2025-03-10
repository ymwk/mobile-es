import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import 'dayjs/locale/ko';

const FlystatPage: React.FC = () => {
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
                <table className="table-list table-fixed">
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
                      <td>조정계획</td>
                      <td>344대</td>
                      <td>169대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>운항실적</td>
                      <td>93대</td>
                      <td>33대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>잔여계획</td>
                      <td>251대</td>
                      <td>130대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>지연</td>
                      <td>46대</td>
                      <td>19대</td>
                      <td>175대</td>
                    </tr>
                    <tr>
                      <td>희망</td>
                      <td>0대</td>
                      <td>-</td>
                      <td>0대</td>
                    </tr>
                    <tr>
                      <td>계획조정</td>
                      <td>-1대</td>
                      <td colSpan={2}>
                        <span className="stats-colspan">
                          <span>(결항 : 0</span>
                          <span>,</span>
                          <span>기타 : -1)</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </TabContent>
              <TabContent label="운항지연">
                <table className="table-list table-fixed">
                  <caption>
                    <em>평균운항지연시간&nbsp;&nbsp;</em>
                    <span>(2020년 11월 30일, 09시 07분 기준)</span>
                  </caption>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>시간</th>
                      <th>출발</th>
                      <th>도착</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>최근1시간</td>
                      <td>325분</td>
                      <td>580분</td>
                      <td>69분</td>
                    </tr>
                    <tr>
                      <td>최근2시간</td>
                      <td>325분</td>
                      <td>580분</td>
                      <td>69분</td>
                    </tr>
                    <tr>
                      <td>최근3시간</td>
                      <td>325분</td>
                      <td>580분</td>
                      <td>69분</td>
                    </tr>
                  </tbody>
                </table>
                <p className="portal-noti">
                  * 지연 - 당일일자와 조회가 아닌 경우에도 해당일자와 현재 조회시간을 기준으로 최근 1~3시간의 누계
                  평균을 계산함
                </p>
              </TabContent>
              <TabContent label="탑승대기시간">
                <table className="table-data table-center table-fixed">
                  <colgroup>
                    <col style={{ width: '7rem' }} />
                    <col />
                    <col style={{ width: '10rem' }} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>평균</th>
                      <td colSpan={3}>48분</td>
                    </tr>
                    <tr>
                      <th>도착</th>
                      <td>0분</td>
                      <th>도착 유도로</th>
                      <td>0편(0분)</td>
                    </tr>
                    <tr>
                      <th rowSpan={2}>출발</th>
                      <td rowSpan={2}>48분</td>
                      <th>출발 주기장</th>
                      <td>1편(2분)</td>
                    </tr>
                    <tr>
                      <th>출발 유도로</th>
                      <td>0편(0분)</td>
                    </tr>
                  </tbody>
                </table>
                <p className="portal-noti">
                  * 평균, 도착, 출발의 시간은 대기시간이 30분 이상인 경우의 평균이며, 유도로와 주기장은 전체 평균임
                </p>
              </TabContent>
              <TabContent label="기타">
                <table className="table-data table-center table-fixed">
                  <colgroup>
                    <col style={{ width: '7rem' }} />
                    <col />
                    <col style={{ width: '10rem' }} />
                    <col />
                  </colgroup>
                  <caption>가용 주기장 (가용 / 전체)</caption>
                  <tbody>
                    <tr>
                      <th>집현</th>
                      <td>37 / 107</td>
                      <th>도착 유도로</th>
                      <td>9 / 44</td>
                    </tr>
                    <tr>
                      <th>CA</th>
                      <td>5 / 30</td>
                      <th>출발 주기장</th>
                      <td>23 / 33</td>
                    </tr>
                    <tr>
                      <th>원격</th>
                      <td>7 / 77</td>
                      <th>출발 유도로</th>
                      <td>12 / 47</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-data table-center table-fixed">
                  <colgroup>
                    <col style={{ width: '7rem' }} />
                    <col />
                    <col style={{ width: '10rem' }} />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th rowSpan={4}>
                        심야
                        <br />
                        도착
                        <br />
                        예상
                      </th>
                      <td rowSpan={4}>14대</td>
                      <th>23시 ~ 00시</th>
                      <td>5대</td>
                    </tr>
                    <tr>
                      <th>00시 ~ 01시</th>
                      <td>3대</td>
                    </tr>
                    <tr>
                      <th>01시 ~ 02시</th>
                      <td>4대</td>
                    </tr>
                    <tr>
                      <th>02시 ~ 03시</th>
                      <td>2대</td>
                    </tr>
                  </tbody>
                </table>

                <p className="portal-noti">* 조회일자 당일 23시 부터 익일 03시 까지의 운항계획임</p>
              </TabContent>
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

export default FlystatPage;