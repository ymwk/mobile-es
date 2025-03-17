import React from 'react';
import { Header } from '@components/layout';
import { Textfield } from '@components/input';
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
                    <Textfield name="" value="OZ" readOnly />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">From</span>
                    <div className="forms-row form-datepk-wrap">
                      <div className="datepk-wrap">
                        <Textfield name="" value="2025-01-05" readOnly />
                      </div>
                      <Textfield name="" value="09시" readOnly />
                      <Textfield name="" value="30분" readOnly />
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
                        <Textfield name="" value="2025-01-05" readOnly />
                      </div>
                      <Textfield name="" value="09시" readOnly />
                      <Textfield name="" value="30분" readOnly />
                    </div>
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">Reason</span>
                    <textarea className="form-textarea" rows={8} readOnly>
                      사유내용입니다.
                    </textarea>
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