import React from 'react';
import { useModal } from '@hooks/useModal';
import { IconButton } from '@components/button';
import { BookmarkAlertOpen, LangAlertOpen } from '@components/content/ModalopenComponent';
import { MilestonearrivalshistoryModal } from '@pages/modal/MilestonearrivalshistoryModal';
import logo_default from '@assets/images/logo/logo_incheon.svg';

interface ArrivalscardProps {
  company: string;
  logo?: any;
  extend?: boolean;
  isBookmark?: boolean;
  className?: string;
}

const MilestoneModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <>
      <IconButton icon="history" label="마일스톤 변경이력 조회" onClick={openModal} />
      <MilestonearrivalshistoryModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const Arrivalscard: React.FC<ArrivalscardProps> = (props) => {
  const { company, logo, extend, className, isBookmark, ...other } = props;

  return (
    <>
      <div className={`arrivalscard-root ${className ? className : ''}`} {...other}>
        <div className="card-detail">
          <div className="card-logo">
            <img src={logo ? logo : logo_default} alt={company} />
          </div>
          <div className="card-info">
            <em className="flt">KE011</em>
            <span className="info">SIBT 12:10</span>
            <span>CDG, B748, 230, Dep</span>
          </div>
          <div className="card-option">
            <BookmarkAlertOpen isBookmark={isBookmark} />
            <span className="msg">
              64분 지연
              <br />
              (CODE)
            </span>
          </div>
        </div>

        <ul className="card-schedule">
          <li>
            <span>ELDT</span>
            <em className="time">11:50</em>
          </li>
          <li>
            <span>ALDT</span>
            <em className="time">12:00</em>
          </li>
          <li>
            <span>EIBT</span>
            <em className="time">12:10</em>
          </li>
          <li>
            <span>ELDT</span>
            <em className="time">12:10</em>
          </li>
        </ul>

        {extend && (
          <>
            <div className="card-section2">
              <div className="title-bar">
                <span className="title">TIMES</span>
                <div className="title-option">
                  <MilestoneModalOpen />
                </div>
              </div>

              <ul className="card-schedule">
                <li>
                  <span>TIMES</span>
                  <em className="time">11:50</em>
                </li>
                <li>
                  <span>ARIT</span>
                  <em className="time">--:--</em>
                </li>
              </ul>
            </div>

            <div className="card-section3">
              <div className="title-bar">
                <span className="title">RESOURCES</span>
              </div>

              <ul className="card-schedule">
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

      <LangAlertOpen />
    </>
  );
};

export default Arrivalscard;
