import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import w_lightning from '@assets/images/weather/ico_w_lightning.png'

const WeatherPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="기상정보" />

        <main className="portal-main">
          <div className="portal-cont">
            <div className="table-header">
              <div className="table-option">
                <span>2024-11-08 11시 기준</span>
                <span className="ico-weather">
                  <img src={w_lightning} alt="낙뢰" className="ico-lightning" />
                </span>
              </div>
            </div>

            <table className="table-list c--t01">
              <thead>
                <tr>
                  <th></th>
                  <th>Temp</th>
                  <th>WD</th>
                  <th>WS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <em>33R</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
                <tr>
                  <td>
                    <em>15L</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
                <tr>
                  <td>
                    <em>33L</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
                <tr>
                  <td>
                    <em>15R</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
                <tr>
                  <td>
                    <em>34R</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
                <tr>
                  <td>
                    <em>16L</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
                <tr>
                  <td>
                    <em>34L</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
                <tr>
                  <td>
                    <em>16R</em>
                  </td>
                  <td>12℃</td>
                  <td>340</td>
                  <td>11.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              styleType="confirm"
              label="새로고침"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherPage;
