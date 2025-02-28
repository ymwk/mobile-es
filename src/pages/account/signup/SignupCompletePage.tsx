import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import ImgAirplane from '@assets/images/pic/pic_airplane.png';

const SignupCompletePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <Header title="계정신청" />

        <main className="portal-main">
          <div className="account-complete">
            <div>
              <img src={ImgAirplane} className="account-complete-img" alt="" />
            </div>
            <p className="title">
              <em>모바일 ES 계정신청</em>이 <br />
              정상적으로 접수 되었습니다.
            </p>
            <p>확인 후 신속히 처리하겠습니다.</p>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              label="계정신청조회"
              onClick={() => {
                navigate('/account-search');
              }}
            />
            <ActionButton
              styleType="confirm"
              label="로그인"
              onClick={() => {
                navigate('/');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupCompletePage;
