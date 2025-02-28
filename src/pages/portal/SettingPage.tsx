import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from '@components/layout';
import { Button, ActionButton } from '@components/button';
import { Radiogroup } from '@components/input';
import { useModal } from '@hooks/useModal';
import { PwchangeModal } from '@pages/modal/PwchangeModal';
import { AuthModal } from '@pages/modal/AuthModal';

const PwchangeModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <ActionButton label="비밀번호 변경" onClick={openModal} />
      <PwchangeModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const AuthModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <ActionButton type="button" styleType="confirm" label="비밀번호 초기화" onClick={openModal} />
      <AuthModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const SettingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="설정" />

        <main className="portal-main">
          <ul className="setting-list">
            <li>
              <Link to="/set-push" className="setting-link">
                푸시 알림 수신 설정
                <i className="ico-root gt" />
              </Link>
            </li>
            <li>
              <Link to="/set-login" className="setting-link">
                로그인 방식 설정
                <i className="ico-root gt" />
              </Link>
            </li>
            <li>
              적용시간 설정
              <Radiogroup
                name={'setlist'}
                type="type2"
                items={[
                  {
                    label: 'KST',
                    value: 'KST',
                  },
                  {
                    label: 'UTC',
                    value: 'UTC',
                  },
                ]}
              />
            </li>
            <li>
              <span>공사 코드 설정</span>
              <Radiogroup
                name={'setlist2'}
                type="type2"
                items={[
                  {
                    label: 'IATA',
                    value: 'IATA',
                  },
                  {
                    label: 'ICAO',
                    value: 'ICAO',
                  },
                ]}
              />
            </li>
            <li>
              <span>버전정보</span>
              <span className="value">최신버전</span>
            </li>
            <li>
              <Link to="" className="setting-link">
                권한 설정
                <i className="ico-root gt" />
              </Link>
            </li>
          </ul>

          <div className="setting-btns">
            <Button
              label="사용자정보변경"
              onClick={() => {
                navigate('/account-user-edit');
              }}
            />
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <PwchangeModalOpen />
            <AuthModalOpen />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
