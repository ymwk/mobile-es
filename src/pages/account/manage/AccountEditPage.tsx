import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';
import { Checkbox, Switch, Textfield } from '@components/input';
import { ActionButton } from '@components/button';

const AccountEditPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <Header title="계정신청 변경/해지" />

        <Tabs>
          <TabContent label="계정변경">
            <main className="portal-main">
              <form method="post">
                <ul className="form-input-list">
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">성명</span>
                        <Textfield name="" placeholder="이름을 입력하세요." value="홍길동" readOnly />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">휴대폰 번호</span>
                        <div className="forms-row">
                          <div className="select-root" style={{ width: 100 }}>
                            <select>
                              <option>010</option>
                            </select>
                          </div>
                          <Textfield name="" placeholder="- 없이 숫자만 입력하세요." />
                        </div>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">신청아이디</span>
                        <Textfield name="" placeholder="아이디를 입력하세요." value="hhh123" readOnly />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">신청사유</span>
                        <Textfield name="" placeholder="신청사유를 입력하세요." />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">소속사</span>
                        <Textfield name="" placeholder="아이디를 입력하세요." value="항공사/항공사코드" readOnly />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <span className="label">신청권한</span>
                    </div>

                    <ul className="switch-list">
                      <li>
                        <Switch label={'A항공사코드 / A항공사명'} onChange={() => {}} />

                        <div className="chk-list-btn">
                          <Checkbox name="" type="type3" label="TOBT 조회" onChange={() => {}} />
                          <Checkbox name="" type="type3" label="TOBT 입력" onChange={() => {}} />
                          <Checkbox name="" type="type3" label={`제방빙신청 EEZT입력`} onChange={() => {}} />
                        </div>
                      </li>
                      <li>
                        <Switch label={'B항공사코드 / B항공사명'} onChange={() => {}} />
                      </li>
                      <li>
                        <Switch label={'C항공사코드 / C항공사명'} onChange={() => {}} />
                      </li>
                      <li>
                        <Switch label={'D항공사코드 / D항공사명'} onChange={() => {}} />
                      </li>
                      <li>
                        <Switch label={'E항공사코드 / E항공사명'} onChange={() => {}} />
                      </li>
                    </ul>
                  </li>
                </ul>
              </form>
            </main>

            <div className="portal-action">
              <div className="action-inner">
                <ActionButton
                  label="이전"
                  onClick={() => {
                    navigate('/account-search');
                  }}
                />
                <ActionButton
                  type="submit"
                  styleType="confirm"
                  label="확인"
                  onClick={() => {
                    navigate('/account-edit-rec');
                  }}
                />
              </div>
            </div>
          </TabContent>
          <TabContent label="계정해지">
            <main className="portal-main">
              <form method="post">
                <ul className="form-input-list">
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">성명</span>
                        <Textfield name="" placeholder="이름을 입력하세요." value="홍길동" readOnly />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">휴대폰 번호</span>
                        <Textfield name="" value="010-1234-5678" readOnly />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">신청아이디</span>
                        <Textfield name="" placeholder="아이디를 입력하세요." value="hhh123" readOnly />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">신청사유</span>
                        <Textfield name="" placeholder="신청사유를 입력하세요." />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">소속사</span>
                        <Textfield name="" placeholder="아이디를 입력하세요." value="항공사/항공사코드" readOnly />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <span className="label">신청권한</span>
                    </div>

                    <ul className="switch-list">
                      <li>
                        <Switch label={'A항공사코드 / A항공사명'} checked disabled />

                        <div className="chk-list-btn">
                          <Checkbox name="" type="type3" label="TOBT 조회" checked disabled />
                          <Checkbox name="" type="type3" label="TOBT 입력" checked disabled />
                          <Checkbox name="" type="type3" label={`제방빙신청 EEZT입력`} disabled />
                        </div>
                      </li>
                      <li>
                        <Switch label={'B항공사코드 / B항공사명'} checked disabled />

                        <div className="chk-list-btn">
                          <Checkbox name="" type="type3" label="TOBT 조회" checked disabled />
                          <Checkbox name="" type="type3" label="TOBT 입력" checked disabled />
                          <Checkbox name="" type="type3" label={`제방빙신청 EEZT입력`} disabled />
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </form>
            </main>

            <div className="portal-action">
              <div className="action-inner">
                <ActionButton
                  label="이전"
                  onClick={() => {
                    navigate('/account-search');
                  }}
                />
                <ActionButton
                  type="submit"
                  styleType="confirm"
                  label="확인"
                  onClick={() => {
                    navigate('/account-break-rec');
                  }}
                />
              </div>
            </div>
          </TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default AccountEditPage;
