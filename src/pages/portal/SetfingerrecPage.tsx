import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import ImgAirplane from '@assets/images/pic/pic_airplane.png';

const SetfingerrecPage: React.FC = () => {
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
              <em>지문 설정 완료</em>
            </p>
            <p className="desc">
              고객님은 간편하게 지문으로 <br />
              로그인 하실 수 있습니다.
            </p>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              styleType="confirm"
              label="확인"
              onClick={() => {
                navigate('/set-finger-edit');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetfingerrecPage;
