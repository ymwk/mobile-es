import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Textfield, Radiogroup } from '@components/input';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import 'dayjs/locale/ko';

const RsModifyRequestPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="현행배정 변경/삭제 신청" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="table-gap">
              <table className="table-data table-fixed">
                <colgroup>
                  <col style={{ width: '40%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2}>*Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Ter</th>
                    <td>
                      <Textfield />
                    </td>
                  </tr>
                  <tr>
                    <th>From</th>
                    <td>
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                        <Datepk />
                      </LocalizationProvider>
                    </td>
                  </tr>
                  <tr>
                    <th>To</th>
                    <td>
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                        <Datepk />
                      </LocalizationProvider>
                    </td>
                  </tr>
                  <tr>
                    <th>Qty</th>
                    <td>
                      <Textfield />
                    </td>
                  </tr>
                  <tr>
                    <th>Open</th>
                    <td>
                      <div className="select-wrap">
                        <div className="select-root">
                          <select>
                            <option>시</option>
                          </select>
                        </div>
                        <div className="select-root">
                          <select>
                            <option>분</option>
                          </select>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Close</th>
                    <td>
                      <div className="select-wrap">
                        <div className="select-root">
                          <select>
                            <option>시</option>
                          </select>
                        </div>
                        <div className="select-root">
                          <select>
                            <option>분</option>
                          </select>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>+1</th>
                    <td>
                      <Radiogroup
                        name={'add1-graup'}
                        type="type4"
                        items={[
                          {
                            label: 'Y',
                            value: 'true',
                          },
                          {
                            label: 'N',
                            value: 'false',
                          },
                        ]}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-data table-fixed">
                <colgroup>
                  <col style={{ width: '40%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2}>*Effect Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>From</th>
                    <td>
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                        <Datepk />
                      </LocalizationProvider>
                    </td>
                  </tr>
                  <tr>
                    <th>To</th>
                    <td>
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                        <Datepk />
                      </LocalizationProvider>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-data table-fixed">
                <colgroup>
                  <col style={{ width: '40%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>*Remark</th>
                    <td>
                      <Textfield />
                    </td>
                  </tr>
                  <tr>
                    <th>*Type</th>
                    <td>
                      <div className="select-root">
                        <select>
                          <option></option>
                        </select>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Chg All</th>
                    <td>
                      <Radiogroup
                        name={'chg-graup'}
                        type="type4"
                        items={[
                          {
                            label: 'Y',
                            value: 'true',
                          },
                          {
                            label: 'N',
                            value: 'false',
                          },
                        ]}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Aft Asn</th>
                    <td>
                      <Radiogroup
                        name={'aft-graup'}
                        type="type4"
                        items={[
                          {
                            label: 'Y',
                            value: 'true',
                          },
                          {
                            label: 'N',
                            value: 'false',
                          },
                        ]}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default RsModifyRequestPage;