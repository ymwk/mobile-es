import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import ImgAirplane from '@assets/images/pic/pic_airplane.png';

const SetfingerbreakPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <Header title="지문설정" />

        <main className="portal-main">
          <div className="account-complete">
            <div>
              <img src={ImgAirplane} className="account-complete-img" alt="" />
            </div>
            <p className="title">
              <em>지문 해지 완료</em>
            </p>
            <p className="desc">
              지문해지가 <br />
              정상적으로 처리되었습니다.
            </p>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              styleType="confirm"
              label="확인"
              onClick={() => {
                navigate('/set-login');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetfingerbreakPage;
