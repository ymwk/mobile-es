import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { Button, ActionButton } from '@components/button';
import { useModal } from '@hooks/useModal';
import { UnitModal } from '@pages/modal/UnitModal';
import { Alert } from '@components/modal';

const UnitModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button label="지원가능 단말기 확인" onClick={openModal} />
      <UnitModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const FingerConfirmAlertOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  return (
    <>
      <ActionButton type="button" label="지문 등록" onClick={openModal} />

      <Alert
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={() => {
          navigate('/set-finger-fail');
        }}
        type={'confirm'}
      >
        <div className="pop-finger">
          <i className="ico-root finger" />
          <p>지문이 확인되었습니다.</p>
        </div>
      </Alert>
    </>
  );
};

const SetfingererrPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="지문설정 안내" />

        <main className="portal-main">
          <div className="setting-wrap">
            <div className="setting-finger-section mc">
              <p className="setting-msg">
                지문 설정은 고객님의 스마트폰에 등록된 지문을 <br />
                통해 간편하게 로그인을 할 수 있습니다.
              </p>
              <div className="setting-box">
                <p className="title">단말기 지원가능 확인</p>
                <p>
                  사용하고 계신 기기는 <br />
                  <em className="c-err">지문설정이 불가능한 휴대폰입니다</em>
                </p>
                <UnitModalOpen />
              </div>
            </div>

            <div className="setting-finger-section rg">
              <p className="setting-msg">지문 설정을 지원하는 스마트폰에서 이용 가능합니다</p>
              <div className="setting-box b-err">
                <p className="title">단말기 지문등록 확인</p>
                <p>
                  사용하고 계신 기기는 <br />
                  <em className="c-err">지문이 등록되어 있지 않습니다</em>
                </p>
                <Button label="단말기 지문등록" onClick={() => {}} />
              </div>
            </div>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <FingerConfirmAlertOpen />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetfingererrPage;