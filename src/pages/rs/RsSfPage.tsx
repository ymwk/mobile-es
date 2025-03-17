import React from 'react';
import { Header } from '@components/layout';
import { SpecialFlightSearch } from '@components/content/SpecialFlightSearchComponent';
import { useNavigate } from 'react-router-dom';

const RsSfPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <Header title="Special Flight 신청관리" />

        <SpecialFlightSearch />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <table className="table-list c-t04">
              <thead>
                <tr>
                  <th>항공사명</th>
                  <th>FLT</th>
                  <th>From</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  onClick={() => {
                    navigate('/rs-sf-detail');
                  }}
                >
                  <td>조업사</td>
                  <td>TW021</td>
                  <td>2024-12-08 12:00</td>
                  <td></td>
                  <td>승인</td>
                </tr>
                <tr
                  onClick={() => {
                    navigate('/rs-sf-detail');
                  }}
                >
                  <td>조업사</td>
                  <td>TW021</td>
                  <td>2024-12-08 12:00</td>
                  <td></td>
                  <td>미승인</td>
                </tr>
                <tr
                  onClick={() => {
                    navigate('/rs-sf-detail');
                  }}
                >
                  <td>조업사</td>
                  <td>TW021</td>
                  <td>2024-12-08 12:00</td>
                  <td></td>
                  <td>승인</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default RsSfPage;