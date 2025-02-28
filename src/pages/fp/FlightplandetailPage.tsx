import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';

const FlightplandetailPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="현행 운항 스케쥴 상세" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <table className="table-data table-flt c-t02">
              <tbody>
                <tr>
                  <th>Slave / Master</th>
                  <td>
                    <i className="badge-root c-b01">L</i>
                  </td>
                </tr>
                <tr>
                  <th>AOD</th>
                  <td>A</td>
                </tr>
                <tr>
                  <th>FLT</th>
                  <td>LH345</td>
                </tr>
                <tr>
                  <th>ETT</th>
                  <td>05:30</td>
                </tr>
                <tr>
                  <th>ORG</th>
                  <td>SEA</td>
                </tr>
                <tr>
                  <th>OD</th>
                  <td>FRA</td>
                </tr>
                <tr>
                  <th>GAT</th>
                  <td>10</td>
                </tr>
                <tr>
                  <th>PAK</th>
                  <td>631</td>
                </tr>
                <tr>
                  <th>STA</th>
                  <td>16:15</td>
                </tr>
                <tr>
                  <th>ETA</th>
                  <td>16:15</td>
                </tr>
                <tr>
                  <th>ATA</th>
                  <td>16:15</td>
                </tr>
                <tr>
                  <th>EXIT</th>
                  <td>8</td>
                </tr>
                <tr>
                  <th>RMK</th>
                  <td>LND</td>
                </tr>
                <tr>
                  <th>FST</th>
                  <td>J</td>
                </tr>
                <tr>
                  <th>TER</th>
                  <td>T1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton label=" 조회" onClick={() => {}} styleType="confirm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightplandetailPage;
