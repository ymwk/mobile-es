import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';

const Flightplandetail2Page: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="현행 운항 스케쥴 상세" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <table className="table-data table-flt c-t01">
              <tbody>
                <tr>
                  <th>Slave / Master</th>
                  <td>
                    <i className="badge-root c-b03">S</i>
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
                  <th>
                    <em>DES</em>
                  </th>
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
                  <th>
                    <em>CIC</em>
                  </th>
                  <td>07:00</td>
                </tr>
                <tr>
                  <th>
                    <em>GTC</em>
                  </th>
                  <td>08:30</td>
                </tr>
                <tr>
                  <th>
                    <em>STD</em>
                  </th>
                  <td>08:45</td>
                </tr>
                <tr>
                  <th>
                    <em>ETD</em>
                  </th>
                  <td>08:45</td>
                </tr>
                <tr>
                  <th>
                    <em>ATD</em>
                  </th>
                  <td>08:50</td>
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
          <div className="action">
            <ActionButton label="목록" onClick={() => {}} styleType="confirm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Flightplandetail2Page;
