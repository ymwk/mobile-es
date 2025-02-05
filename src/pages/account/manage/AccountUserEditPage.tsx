import React from 'react';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { Header } from '@components/layout';
import { Button } from '@components/button';
import { Textfield } from '@components/input';

const AccountUserEditPage: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="wrapper">
        <Header title="사용자정보변경" />

        <main className="portal-main">
          <form method="post">
            <ul className="form-input-list">
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">사용자 아이디</span>
                    <Textfield name="" value="abc123" readOnly />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">성명</span>
                    <Textfield name="" value="홍길동" readOnly />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">핸드폰 번호</span>
                    <Textfield name="" value="010-1234-5678" readOnly />
                  </label>
                  <Button label="변경" />
                </div>
              </li>
              {/* <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">핸드폰 번호</span>
                    <div className="forms-row">
                      <div className="select-root" style={{ width: 100 }}>
                        <select>
                          <option>010</option>
                        </select>
                      </div>
                      <Textfield name="" placeholder="- 없이 숫자만 입력하세요." value="12345678" />
                    </div>
                  </label>
                  <Button label="변경" />
                </div>
              </li> */}
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">비밀번호</span>
                    <Textfield type="password" name="" value="adfafdasdf" readOnly />
                  </label>
                  <Button label="초기화" onClick={openModal} />

                  <Alert isOpen={isOpen} onClose={closeModal} type={'confirm'}>
                    <p>
                      등록하신 휴대폰번호로 OTP를 발송하였습니다.
                      <br />
                      확인 후 로그인해주세요.
                    </p>
                  </Alert>
                </div>
              </li>
            </ul>
          </form>
        </main>
      </div>
    </>
  );
};

export default AccountUserEditPage;
