import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { Stepper } from '@components/stepper';
import { Checkbox, Switch, Textfield } from '@components/input';
import { Button, ActionButton } from '@components/button';

const SignupStep3Page: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="계정신청" />

        <Stepper items={['개인정보수집', '정보보호 서약서', '신청서 작성']} active={3} />

        <main className="portal-main">
          <div className="terms-root">
            <div className="terms-section">
              <span className="terms-list-title">작성 유의사항</span>
              <ol className="terms-list">
                <li>1. 6개월 이상 미사용인 계정은 임의로 삭제됨</li>
                <li>2. 신청아이디는 6자리이상~10자리 이하로 지정</li>
                <li>3. 신청아이디는 영어 소문자, 숫자 혼합 6~10자리</li>
                <li>4. 동 양식은 정보보안지침 “사용자 계정 신청서”의 내용에 준합니다.</li>
                <li>*중간관리자가 계정 승인시 권한을 변경할 수 있습니다</li>
              </ol>

              <form method="post">
                <ul className="form-input-list">
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">성명</span>
                        <Textfield name="" placeholder="이름을 입력하세요." />
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">핸드폰 번호</span>
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
                        <Textfield name="" placeholder="아이디를 입력하세요." />
                      </label>
                      <Button label="중복체크" />
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <span className="label">소속사</span>
                    </div>

                    <div className="forms-column">
                      {/* line1 start */}
                      <div className="forms-row">
                        <div className="select-root">
                          <select>
                            <option>항공사</option>
                            <option>조업사</option>
                            <option>경항공기</option>
                            <option>공항공사</option>
                          </select>
                        </div>

                        <Checkbox name="" label="중간관리자" onChange={() => {}} />
                      </div>

                      {/* line2 start */}
                      <div className="textfield-root">
                        <Textfield name="" value="IATA" readOnly width={80} />
                        <Textfield name="" width={80} />
                        <div className="select-root">
                          <select>
                            <option>선택</option>
                            <option>ACT항공</option>
                            <option>ACVILAAIR</option>
                            <option>AEROCANCUN</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* forms-column end */}
                  </li>
                  <li>
                    <div className="textfield-root">
                      <span className="label">권한</span>
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

              <p className="terms-msg notice">
                *소속사를 잘못 선택할 경우 타 회사의 중간관리자에게 <br />
                개인정보가 노출될 수 있습니다.
              </p>
            </div>
            {/* terms-section end */}
          </div>
          {/* terms-root end */}
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              label="이전"
              onClick={() => {
                navigate('/signup2');
              }}
            />
            <ActionButton
              type="submit"
              styleType="confirm"
              label="신청"
              onClick={() => {
                navigate('/signup4');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupStep3Page;
