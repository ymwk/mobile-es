import React, { useState, useEffect } from 'react';
import { useModal } from '@hooks/useModal';
import { Header } from '@components/layout';
import { Button, ActionButton } from '@components/button';
import { Textfield } from '@components/input';
import { MobilechangeModal } from '@pages/modal/MobilechangeModal';
import { Alert } from '@components/modal';

const MobilechangeModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button label="변경" onClick={openModal} styleType="common" />
      <MobilechangeModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const AccountUserEditPage: React.FC = () => {
  const [modifyOpen, setModifyOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  
  const ModifyAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
      openModal();
    }, []);

    return (
      <>
        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onCancel={closeModal}
          onConfirm={() => {
            closeModal();
            setModifyOpen(false);
            setConfirmOpen(true);
          }}
        >
          <p>비밀번호 변경 시 다시 로그인해 주시기 바랍니다.</p>
          <p>정보를 수정하시겠습니까?</p>
        </Alert>
      </>
    );
  };

  const ConfirmAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
      openModal();
    }, []);

    return (
      <>
        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onCancel={closeModal}
          onConfirm={() => {
            closeModal();
            setModifyOpen(false);
            setConfirmOpen(false);
          }}
        >
          <p>정상 처리되었습니다.</p>
        </Alert>
      </>
    );
  };
  
  return (
    <>
      <div className="wrapper">
        <Header title="사용자정보변경" />

        <main className="portal-main">
          <ul className="setting-list">
            <li>
              <span>사용자 아이디</span>
              <span className="value">jkds0002</span>
            </li>
            <li>
              <span>사용자명</span>
              <span className="value">홍길동</span>
            </li>
            <li>
              <span>휴대폰</span>
              <div className="value">
                <span className="value">010-1234-5678</span>
                <MobilechangeModalOpen />
              </div>
            </li>
          </ul>

          <form method="post">
            <ul className="form-input-list">
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">현재 비밀번호</span>
                    <Textfield type="password" name="" placeholder="영문,숫자,특수문자 포함 8~15자리" />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">변경할 비밀번호</span>
                    <Textfield type="password" name="" placeholder="영문,숫자,특수문자 포함 8~15자리" />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">비밀번호 확인</span>
                    <Textfield type="password" name="" placeholder="영문,숫자,특수문자 포함 8~15자리" />
                  </label>
                </div>
              </li>
            </ul>
          </form>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton type="submit" styleType="confirm" label="확인" onClick={() => setModifyOpen(true)} />
          </div>
        </div>
      </div>

      {modifyOpen && <ModifyAlertOpen />}
      {confirmOpen && <ConfirmAlertOpen />}
    </>
  );
};

export default AccountUserEditPage;
