import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Header } from '@components/layout'
import { ActionButton } from '@components/button';
import ImgAirplane from '@assets/images/login/img_airplane.png'

const AccountEditRecPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="wrapper">
        <Header title='계정신청'/>

        <main className="portal-main">
          <div className='account-complete'>
            <div><img src={ImgAirplane} className='account-complete-img' alt=''/></div>
            <p className='title'><em>모바일 A-CDM 계정신청 변경</em>이<br/>정상적으로 접수 되었습니다.</p>
            <p className='desc'>계정신청 처리는 신청일로부터 근무일 기준 1~2일 소요되며, 계정신청조회에서 처리 진행현황 확인이 가능합니다.</p>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              styleType='confirm'
              label='홈으로'
              onClick={() => { navigate('/'); }}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountEditRecPage;