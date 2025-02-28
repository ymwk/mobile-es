import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import ImgFail from '@assets/images/pic/pic_nodata.png';

const SetfingerfailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="지문설정" />

        <main className="portal-main">
          <div className="account-complete">
            <div> 
              <img src={ImgFail} className="account-fail-img" alt="" />
            </div>
            <p className="title">
              <em>지문 설정 실패</em>
            </p>
            <p className="desc">오류사유 : 시스템 오류</p>

            <div className="box-msg">
              시스템 오류입니다.
              <br />
              지문 설정을 재시도 해주시기 바랍니다
            </div>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              styleType="confirm"
              label="확인"
              onClick={() => {
                navigate('/set-finger-rec');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetfingerfailPage;