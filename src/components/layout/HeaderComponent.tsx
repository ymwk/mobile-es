import React, { useState } from 'react'
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { Button, IconButton } from '@components/button'
import { useNavigate } from 'react-router-dom';
import { Sitemap } from './SitemapComponent';

interface HeaderProps {
  title?: string
  className?: string
  backspace?: boolean
  children?: React.ReactNode
  main?: boolean
}

const Header: React.FC<HeaderProps> = (props) => {
  const {
    title,
    className,
    backspace = true,
    children,
    main
  } = props;
  const [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();

  const handleBackClick = () => {}
  const handleBellClick = () => { }
  const handleSetClick = () => {};
  const handleHbgClick = () => {
    setisOpen(!isOpen)
  }

  const SignoutAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <IconButton icon="out" label="Signout" onClick={openModal} />

        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          type={'alert'}
          onConfirm={() => {
            navigate('/');
          }}
          onCancel={closeModal}
        >
          <p>로그아웃 하시겠습니까?</p>
        </Alert>
      </>
    );
  };

  return (
    <>
      <header className={`header-portal ${main ? 'header-main' : ''} ${className ? className : ''}`}>
        <div className="header-portal-utils">
          <span className="time">
            <span className="ico_clock" />
            UTC 10 : 21
          </span>

          <IconButton icon="bell" label="알림" className={`active`} onClick={handleBellClick}>
            <span className="badge" />
          </IconButton>

          <IconButton icon="hamburger" label="전체메뉴" onClick={handleHbgClick} />
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
            <SignoutAlertOpen />
            <IconButton icon="set" label="Setting" onClick={handleSetClick} />
            <IconButton icon="hamburger" label="전체메뉴" className="active" onClick={handleHbgClick} />
          </div>

          <div className="full-user">
            <i className="ico-root user" />
            <em>Mjcourage님</em>

            <Button styleType="small" label="로그인방식" />
          </div>
        </div>

        <Sitemap />
      </nav>
    </>
  );
}
export {Header};