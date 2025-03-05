import React, { useState } from 'react';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { Button, IconButton } from '@components/button';
import { useNavigate } from 'react-router-dom';
import { Sitemap } from './SitemapComponent';
import { LoginselectModal } from '@pages/modal/LoginselectModal';

interface HeaderProps {
  title?: string;
  className?: string;
  backspace?: boolean;
  children?: React.ReactNode;
  main?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title, className, backspace = true, children, main } = props;
  const [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleHbgClick = () => {
    // if (!isOpen) {
    //   const currentY = window.scrollY;
    //   document.body.style.cssText = `
    //     top: -${currentY}px;
    //     overflow: hidden
    //   `;
    // } else {
    //   const scrollY = document.body.style.top;
    //   document.body.style.cssText = '';
    //   window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    // }

    setisOpen(!isOpen);
  };

  const SignoutAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <IconButton icon="out" label="Signout" onClick={openModal} />

        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          type={'alert'}
          onConfirm={() => navigate('/')}
          onCancel={closeModal}
        >
          <p>로그아웃 하시겠습니까?</p>
        </Alert>
      </>
    );
  };

  const LoginModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <Button styleType="small" label="로그인방식" onClick={openModal} />
        <LoginselectModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  return (
    <>
      <header className={`header-portal ${main ? 'header-main' : ''} ${className ? className : ''}`}>
        <div className="header-portal-utils">
          {!main && <IconButton icon="home" label="Home" onClick={() => navigate('/portal')} />}

          <div className="utils">
            <span className="time">
              <span className="ico_clock" />
              UTC 10 : 21
            </span>

            <IconButton icon="bell" label="알림" className={`active`} onClick={() => navigate('/notify')}>
              <span className="badge" />
            </IconButton>

            <IconButton icon="hamburger" label="전체메뉴" onClick={handleHbgClick} />
          </div>
        </div>
        <div className="header-portal-title">
          {backspace && <IconButton icon="back" label="이전" onClick={handleBackClick} />}
          {title && <h2 className="title">{title}</h2>}
          {children && children}
        </div>
      </header>

      <nav className={`full-root ${isOpen ? 'open' : ''}`}>
        <h2 className="blind">전체메뉴</h2>
        <div className="header-portal">
          <div className="header-portal-utils">
            <div className="utils">
              <SignoutAlertOpen />
              <IconButton icon="set" label="Setting" onClick={() => navigate('/setting')} />
              <IconButton icon="hamburger" label="전체메뉴 닫기" className="active" onClick={handleHbgClick} />
            </div>
          </div>

          <div className="full-user">
            <i className="ico-root user" />
            <em>Mjcourage님</em>

            <LoginModalOpen />
          </div>
        </div>

        <Sitemap />
      </nav>
    </>
  );
};
export { Header };
