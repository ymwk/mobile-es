import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';

const SetfingereditPage: React.FC = () => {
  const navigate = useNavigate();

  const FingerBreakAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const navigate = useNavigate();

    return (
      <>
        <ActionButton type="button" label="해지" onClick={openModal} />

        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onConfirm={() => {
            navigate('/set-finger-break');
          }}
          type={'confirm'}
        >
          <div className="pop-finger">
            <p>
              지문을 해지하시려면 <br />
              다른 로그인 방식이 설정되어 있어야 합니다.<br />
              설정하시겠습니까?
            </p>
          </div>
        </Alert>
      </>
    );
  };

  return (
    <>
      <div className="wrapper">
        <Header title="지문변경" />

        <main className="portal-main">
          <div className="setting-wrap">
            <div className="setting-finger-section mc">
              <div className="setting-box">
                <p className="title">지문 설정 확인</p>
                <p>
                  고객님은 2024-09-14에 <br />
                  <em className="c-primary">지문이 설정되어 있습니다</em>
                </p>
              </div>
            </div>

            <div className="setting-finger-section rg">
              <h3 className="setting-title">지문변경 안내사항</h3>
              <div className="box-msg">
                <p className="title">지문재설정이 필요한 경우</p>
                <ul>
                  <li>스마트폰 기기변경(1인 1단말기에만 사용가능)</li>
                  <li>지문인증 5회연속 오류</li>
                  <li>스마트폰에 등록된 지문 변경 또는 삭제</li>
                  <li>스마트폰 설정 초기화 등</li>
                </ul>
              </div>

              <div className="box-msg">
                <p className="title">지문해지 안내</p>
                <ul>
                  <li>지문을 해지하시려면 다른 로그인 방식이 설정되어 있어야 합니다</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <FingerBreakAlertOpen />
            <ActionButton
              type="button"
              styleType="confirm"
              label="재설정"
              onClick={() => {
                navigate('/set-finger-fail');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetfingereditPage;