import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import ImgAirplane from '@assets/images/pic/pic_airplane.png';

const AccountBreakRecPage: React.FC = () => {
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
              <em>모바일 A-CDM 계정해지</em>가<br />
              완료되었습니다.
            </p>
            <p className="desc">이용해주셔서 감사합니다.</p>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              styleType="confirm"
              label="홈으로"
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

export default AccountBreakRecPage;
