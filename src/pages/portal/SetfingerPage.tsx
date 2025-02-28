import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';

const SetfingerPage: React.FC = () => {
  const navigate = useNavigate();

  const FingerErrorAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <ActionButton type="button" label="지문 등록" onClick={openModal} />

        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onConfirm={() => {
            navigate('/set-finger-err');
          }}
          type={'confirm'}
        >
          <div className="pop-finger">
            <i className="ico-root finger" />
            <p className="c-err">
              지문이 일치하지 않습니다.
              <br />
              다시 시도해주세요.
            </p>
          </div>
        </Alert>
      </>
    );
  };

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
                  <em className="c-primary">지문설정이 가능한 휴대폰입니다</em>
                </p>
              </div>
            </div>

            <div className="setting-finger-section rg">
              <p className="setting-msg">지문 설정을 지원하는 스마트폰에서 이용 가능합니다</p>
              <div className="setting-box b-primary">
                <p className="title">단말기 지문등록 확인</p>
                <p>
                  사용하고 계신 기기는 <br />
                  <em className="c-primary">지문이 등록되어 있습니다</em>
                </p>
              </div>
            </div>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <FingerErrorAlertOpen />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetfingerPage;