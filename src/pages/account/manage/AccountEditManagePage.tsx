import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Header } from '@components/layout'
import { ActionButton } from '@components/button';
import { Textfield, Checkbox, Switch } from '@components/input';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { ReturnModal } from '@pages/modal/ReturnModal';

const AccountEditManagePage: React.FC = () => {
  const navigate = useNavigate()

  const ConfirmAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <ActionButton styleType="confirm" label="승인" onClick={openModal} />

        <Alert isOpen={isOpen} onClose={closeModal} type={'confirm'}>
          <p>승인하시겠습니까?</p>
        </Alert>
      </>
    );
  };

  const ReeturnModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <ActionButton label="반려" onClick={openModal} />

        <ReturnModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  return (
    <>
      <div className="wrapper">
        <Header title="사용자관리" />

        <main className="portal-main">
          <form method="post">
            <ul className="form-input-list">
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">구분</span>
                    <Textfield name="" value="신규" readOnly />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">신청아이디</span>
                    <Textfield name="" value="hhh123" readOnly />
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
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">소속사</span>
                    <Textfield name="" value={'항공사/항공사 코드'} readOnly />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <span className="label">권한</span>
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
                    <Switch label={'B항공사코드 / B항공사명'} disabled />
                  </li>
                </ul>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">신청일</span>
                    <Textfield name="" value={'2024-05-15'} readOnly />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">상태</span>
                    <Textfield name="" value={'신청대기'} readOnly />
                  </label>
                </div>
              </li>
            </ul>
          </form>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              label="목록"
              onClick={() => {
                navigate('/account-user');
              }}
            />
            <ReeturnModalOpen />
            <ConfirmAlertOpen />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountEditManagePage;