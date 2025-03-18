import React from 'react';
import { Header } from '@components/layout';
import { Textfield } from '@components/input';
import { ActionButton } from '@components/button';

const RsCommRequestPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="공용시설 신청관리" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <table className="table-data table-fixed">
              <colgroup>
                <col style={{ width: 160 }} />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    <span className="require">시설구분코드</span>
                  </th>
                  <td>
                    <Textfield />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">시설구분명</span>
                  </th>
                  <td>
                    <Textfield />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">공용시설타입</span>
                  </th>
                  <td>
                    <div className="select-root">
                      <select>
                        <option>공용시설</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">연간제공수량 관리여부</span>
                  </th>
                  <td>
                    <div className="select-root">
                      <select>
                        <option>Yes</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>제공수량</th>
                  <td>
                    <span className="text-right">2</span>
                  </td>
                </tr>
                <tr>
                  <th>교체제공수량</th>
                  <td>
                    <span className="text-right">0</span>
                  </td>
                </tr>
                <tr>
                  <th>매입수량</th>
                  <td>
                    <span className="text-right">2</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">Use Y/N</span>
                  </th>
                  <td>
                    <div className="select-root">
                      <select>
                        <option>Yes</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>
                    <textarea className="form-textarea" rows={10}></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              type="submit"
              styleType="confirm"
              label="확인"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsCommRequestPage;