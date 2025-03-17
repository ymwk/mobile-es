import React from 'react';
import { Header } from '@components/layout';
import { Textfield } from '@components/input';
import { FltModalOpen } from '@components/content/ModalopenComponent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import { ActionButton } from '@components/button';

const RsSfEditPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="Special Flight 신청관리" />

        <main className="portal-main search-main">
          <form method="post">
            <ul className="form-input-list">
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">항공사명</span>
                    <Textfield name="" value="0000조업사" readOnly />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">FLT</span>
                    <FltModalOpen />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">From</span>
                    <div className="forms-row form-datepk-wrap">
                      <div className="datepk-wrap">
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                          <Datepk />
                        </LocalizationProvider>
                      </div>
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
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">To</span>
                    <div className="forms-row form-datepk-wrap">
                      <div className="datepk-wrap">
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                          <Datepk />
                        </LocalizationProvider>
                      </div>
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
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">Reason</span>
                    <textarea className="form-textarea" rows={8}></textarea>
                  </label>
                </div>
              </li>
            </ul>
          </form>
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

export default RsSfEditPage;