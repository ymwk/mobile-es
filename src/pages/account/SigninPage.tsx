import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@components/layout';
import Notice from '@components/content/NoticeComponent';
import { Tabs, TabContent } from '@components/tabs';
import { useModal } from '@hooks/useModal';
import { AuthModal } from '@pages/modal/AuthModal';
import { IdfindModal } from '@pages/modal/IdfindModal';
import { Alert } from '@components/modal';
import logo from '@assets/images/logo/logo_incheon.svg';
import pass_pattern from '@assets/images/login/img_pass_pattern.svg';
import pass_finger from '@assets/images/login/img_pass_finger.svg';
import pass_pin from '@assets/images/login/img_pass_pin.svg';

const AuthModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <button type="button" onClick={openModal}>
        비밀번호 초기화
      </button>
      <AuthModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const IdfindModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        아이디 찾기
      </button>
      <IdfindModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const LockAlertOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal}>
        잠금해제
      </button>

      <Alert isOpen={isOpen} onClose={closeModal} onCancel={closeModal} onConfirm={closeModal} type={'alert'}>
        <p>
          해당 계정은 아이디/비밀번호 5회 오류로 잠겼습니다.
          <br />
          잠금을 해제하시겠습니까?
        </p>
      </Alert>
    </>
  );
};

const SignupPage: React.FC = () => {
  const [isView, setIsView] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => {
    setIsView(!isView);
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      >
        <Link to="/test">TABLE</Link>
      </div>
      <div className="wrapper index-wrapper">
        <header className="index-header">
          <h1 className="index-logo">
            <img src={logo} alt="인천공항 로고" />
            <span>모바일 ES</span>
          </h1>
        </header>
        <main className="portal-main">
          <div className="index-box index-login">
            <Tabs type={'login'}>
              <TabContent label="일반로그인">
                <form method="post">
                  <div className="index-login-container">
                    <div className="index-login-form">
                      <div className="login-input-root">
                        <label>
                          <span className="label">ID</span>
                          <input type="text" className="form-textfield" />
                        </label>
                      </div>

                      <div className="login-input-root">
                        <label>
                          <span className="label">PW</span>
                          <input type="password" className="form-textfield" />
                        </label>
                        <div className="btns">
                          <button
                            type="button"
                            className={`btn-pw-view ${isView ? 'active' : ''}`}
                            onClick={toggleHandler}
                          >
                            <span className="blind">비밀번호 {isView ? '숨김' : '표시'}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="index-login-content">
                      <div className="item">
                        <div className="select-root index-cont-select">
                          <select>
                            <option>인증방법 선택</option>
                          </select>
                        </div>
                        <button type="button" className="index-cont-btn">
                          OTP 전송
                        </button>
                      </div>
                      <div className="item">
                        <div className="pw-input-root">
                          <input type="password" className="form-textfield" title="인증번호 입력" />
                          <div className="btns">
                            {/* active className on/off */}
                            <span className="ico-root chk active" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="index-login-btn" onClick={() => navigate('/portal')}>
                      LOGIN
                    </button>
                    <div className="index-login-link">
                      <IdfindModalOpen />
                      <AuthModalOpen />
                      <LockAlertOpen />
                    </div>
                  </div>
                </form>
              </TabContent>

              <TabContent label="간편로그인">
                <div className="index-login-pass">
                  <div className="index-pass-btns">
                    <button type="button">
                      <div className="index-pass-icon">
                        <img src={pass_pattern} alt="패턴" />
                      </div>
                      <span>
                        패턴
                        <br />
                        로그인
                      </span>
                    </button>
                    <button type="button">
                      <div className="index-pass-icon finger">
                        <img src={pass_finger} alt="지문" />
                      </div>
                      <span>
                        지문
                        <br />
                        로그인
                      </span>
                    </button>
                    <button type="button">
                      <div className="index-pass-icon">
                        <img src={pass_pin} alt="PIN" />
                      </div>
                      <span>
                        PIN번호
                        <br />
                        로그인
                      </span>
                    </button>
                  </div>
                </div>
              </TabContent>
            </Tabs>
          </div>
          <section className="index-section">
            <div className="tabs-btn-wrap">
              <h2 className="tabs-btn active">Notice</h2>
            </div>
            <Notice />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SignupPage;
