import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Textfield, Checkbox } from '@components/input';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import 'dayjs/locale/ko';

const RsRpmRequestPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="Runup Pad Request" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <table className="table-data table-fixed">
              <colgroup>
                <col style={{ width: '40%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th>Req Date</th>
                  <td>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                      <Datepk />
                    </LocalizationProvider>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">Airlines</span>
                  </th>
                  <td>
                    <span className="text-right">OZ</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">Registration No</span>
                  </th>
                  <td>
                    <Textfield />
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">Current Stand</span>
                  </th>
                  <td>
                    <Textfield />
                  </td>
                </tr>
                <tr>
                  <th>Fleet Type</th>
                  <td>
                    <span className="text-right">74F</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span className="require">Request Stand</span>
                  </th>
                  <td>
                    <Textfield />
                  </td>
                </tr>
                <tr>
                  <th>Sub Type</th>
                  <td>
                    <span className="text-right">74F</span>
                  </td>
                </tr>
                <tr>
                  <th>Approved Stand</th>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <span className="require">Usage Time</span>
                  </th>
                  <td>
                    <div className="search-calendar">
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                        <Datepk format={'MM-DD'} />
                        ~
                        <Datepk format={'MM-DD'} />
                      </LocalizationProvider>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Work Time</th>
                  <td>
                    <div className="textfield-wrap">
                      <Textfield width={100} />
                      <span>HR</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Engine QTY</th>
                  <td>
                    <div className="select-root" style={{ width: 100 }}>
                      <select>
                        <option></option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Power</th>
                  <td>
                    <div className="textfield-wrap">
                      <Textfield width={100} />
                      <span>%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>ATC Approve</th>
                  <td>
                    <Checkbox label="N" />
                  </td>
                </tr>
                <tr>
                  <th>Reason</th>
                  <td>
                    <Textfield />
                  </td>
                </tr>
                <tr>
                  <th>Description(Handler)</th>
                  <td>
                    <textarea className="form-textarea"></textarea>
                  </td>
                </tr>
                <tr>
                  <th>Description(AMU)</th>
                  <td>
                    <span className="text-right">-</span>
                  </td>
                </tr>
                <tr>
                  <th>Accept Date</th>
                  <td>
                    <span className="text-right">2024-11-22</span>
                  </td>
                </tr>
                <tr>
                  <th>Approved Status</th>
                  <td>
                    <span className="text-right">Request</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div className="portal-action">
          <div className="action-inner">
            <ActionButton type="submit" styleType="confirm" label="확인" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsRpmRequestPage;