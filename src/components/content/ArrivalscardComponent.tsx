import React, { useState } from 'react';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { IconButton } from '@components/button';
import logo_default from '@assets/images/logo/logo_incheon.svg';

interface ArrivalscardProps {
  company: string;
  logo?: any;
  extend?: boolean;
}

const Arrivalscard: React.FC<ArrivalscardProps> = (props) => {
  const { company, logo, extend, ...other } = props;

  const BookmarkAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [isMark, setIsMark] = useState(false);

    const toggleHandler = () => {
      if (isMark) {
        setIsMark(false);
      } else {
        setIsMark(true);
        openModal();
      }
    };

    const cancelHandler = () => {
      setIsMark(false);
      closeModal();
    };

    return (
      <>
        <IconButton icon="bookmark" label="즐겨찾기" className={isMark ? 'active' : ''} onClick={toggleHandler} />

        <Alert isOpen={isOpen} onClose={closeModal} onCancel={cancelHandler} onConfirm={closeModal}>
          <p>즐겨찾기에 추가되었습니다.</p>
        </Alert>
      </>
    );
  };

  const LangAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <button type="button" onClick={openModal}></button>

        <Alert isOpen={isOpen} onClose={closeModal} type={'confirm'}>
          <p>시용언어를 선택하지 않으시면<br/>한국어로 제공됩니다.</p>
        </Alert>
      </>
    );
  };

  return (
    <>
      <div className="Arrivalscard-root" {...other}>
        <div className="card-detail">
          <div className="card-logo">
            <img src={logo ? logo : logo_default} alt={company} />
          </div>
          <div className="card-info">
            <em className="name">KE011</em>
            <span className="line1">SIBT 12:10</span>
            <span className="line2">CDG, B748, 230, Dep</span>
          </div>
          <div className="card-option">
            <BookmarkAlertOpen/>
            <span className="msg">
              64분 지연
              <br />
              (CODE)
            </span>
          </div>
        </div>

        <ul className="card-timeline">
          <li>
            <span>ELDT</span>
            <em className="num">11:50</em>
          </li>
          <li>
            <span>ALDT</span>
            <em className="num">12:00</em>
          </li>
          <li>
            <span>EIBT</span>
            <em className="num">12:10</em>
          </li>
          <li>
            <span>ELDT</span>
            <em className="num">12:10</em>
          </li>
        </ul>

        {extend && (
          <>
            <div className="card-section2">
              <div className="card-section">
                <span className="title">TIMES</span>
              </div>

              <ul className="card-timeline">
                <li>
                  <span>TIMES</span>
                  <em className="num">11:50</em>
                </li>
                <li>
                  <span>ARIT</span>
                  <em className="num">--:--</em>
                </li>
              </ul>
            </div>

            <div className="card-section3">
              <div className="card-section">
                <span className="title">RESOURCES</span>
              </div>

              <ul className="card-timeline">
                <li>
                  <span>GATE</span>
                  <em className="num">230</em>
                </li>
                <li>
                  <span>STAND</span>
                  <em className="num">541</em>
                </li>
                <li>
                  <span>RWY</span>
                  <em className="num">33L</em>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>

      <LangAlertOpen
      />
    </>
  );
};

export default Arrivalscard;
