import React, { useState } from 'react';
import { useModal } from '@hooks/useModal';
import { BookmarkAlertOpen, LangAlertOpen } from '@components/content/ModalopenComponent';
import { DeparturescardProps } from './DeparturescardComponent';
import { IconButton } from '@components/button';
import { Switch } from '@components/input';
import { ReqModal } from '@pages/modal/ReqModal';
import { TOBTModal } from '@pages/modal/TOBTModal';
import { EEZTModal } from '@pages/modal/EEZTModal';
import { MilestonehistoryModal } from '@pages/modal/MilestonehistoryModal';
import logo_default from '@assets/images/logo/logo_incheon.svg';
import { Tooltip, ClickAwayListener, Grow } from '@mui/material';

const Departurescarddetail: React.FC<DeparturescardProps> = (props) => {
  const { company, logo, className, isBookmark, isSnow, isArt, isTobt, ...other } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const HandleSwitchChange = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <Switch label={'[REQ.]'} onChange={openModal} />
        <ReqModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  const TOBTModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <button type="button" className={`btn ${isTobt ? 'mile-btn-01' : ''}`} onClick={openModal} />
        <TOBTModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  const EEZTModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <button type="button" className="btn" onClick={openModal} />
        <EEZTModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  const MilestoneModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <IconButton icon="history" label="마일스톤 변경이력 조회" onClick={openModal} />
        <MilestonehistoryModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  const TooltipComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };

    const handleTooltipOpen = () => {
      setOpen(true);
    };

    return (
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          open={open}
          onOpen={handleTooltipOpen}
          onClose={handleTooltipClose}
          // disableFocusListener
          disableHoverListener
          disableTouchListener
          slots={{
            transition: Grow,
          }}
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, -20],
                  },
                },
              ],
              disablePortal: true,
            },
          }}
          classes={{popper: 'tooltip-root'}}
          title={
            <React.Fragment>
              <div className="tooltip-title">Alfa South Zone(AS)</div>
              <p>Zone No : 821, 822, 823, 825</p>
              <IconButton label="닫기" icon="close" onClick={handleTooltipClose} />
            </React.Fragment>
          }
        >
          <IconButton label="도움말" icon="help" onClick={handleTooltipOpen} />
        </Tooltip>
      </ClickAwayListener>
    );
  }

  return (
    <>
      <div className={`arrivalscard-root ${className ? className : ''}`} {...other}>
        <div className="card-detail">
          <div className="card-logo">
            <img src={logo ? logo : logo_default} alt={company} />
          </div>
          <div className="card-info">
            <em className="flt">KE011</em>
            <span className="info">SOBT 19:45</span>
            <span>LAX(*HKG) / A388, #268,BOR</span>
            <span>
              <em>2022-12-25</em> BOARDING
            </span>
          </div>
          <div className="card-option">
            <div className="icons">
              {isSnow && <i className="ico-root snow" />}
              <BookmarkAlertOpen isBookmark={true} />
            </div>
            <span className="msg">
              64분 지연
              <br />
              (CODE)
            </span>
          </div>
        </div>

        <div className="card-section-toggle card-badge">
          <div className="title-bar">
            <span className="title">TIMES</span>
            <div className="title-option">
              <MilestoneModalOpen />
            </div>
          </div>

          <ul className="card-schedule">
            <li>
              <span>EOBT</span>
              <em className="time">11:50</em>
            </li>
            <li>
              <span>TOBT</span>
              <em className={`time ${isTobt ? 'mile-t-01' : ''}`}>12:00</em>
              <TOBTModalOpen />
            </li>
            <li>
              <span>TSAT</span>
              <em className={`time ${isArt ? 'mile-t-03' : ''}`}>12:10</em>
            </li>
            <li>
              <span>TTOT</span>
              <em className={`time ${isArt ? 'mile-t-03' : ''}`}>12:10</em>
            </li>
            {isOpen && (
              <>
                <li>
                  <span>ARDT</span>
                  <em className="time">11:50</em>
                </li>
                <li>
                  <span>ASAT</span>
                  <em className="time">11:50</em>
                </li>
                <li>
                  <span>AOBT</span>
                  <em className="time">11:50</em>
                </li>
                <li>
                  <span>ATOT</span>
                  <em className="time">11:50</em>
                </li>
                <li>
                  <span>CTOT</span>
                  <em className="time">11:50</em>
                </li>
              </>
            )}
          </ul>
          <IconButton icon={isOpen ? 'ut' : 'dt'} label="더보기" className="btn-toggle" onClick={toggleHandler} />
        </div>

        <div className="card-section2">
          <div className="title-bar">
            <span className="title">RESOURCES</span>
          </div>

          <ul className="card-schedule">
            <li>
              <span>GATE</span>
              <em className="time">230</em>
            </li>
            <li>
              <span>STAND</span>
              <em className="time">541</em>
            </li>
            <li>
              <span>RWY</span>
              <em className="time">33L</em>
            </li>
          </ul>
        </div>

        <div className="card-section3">
          <div className="title-bar">
            <span className="title">DE-ICING</span>
            <TooltipComponent />

            <div className="title-option">
              <HandleSwitchChange />
              <MilestoneModalOpen />
            </div>
          </div>

          <ul className="card-schedule">
            <li>
              <span>ELDT</span>
              <em className="time">11:55</em>
            </li>
            <li>
              <span>EEZT</span>
              <em className="time">15:45</em>
              <EEZTModalOpen />
            </li>
            <li className="column-2">
              <span>DEICING POSITION</span>
              <em className="time">
                AS<small>ZONE</small>831
              </em>
            </li>
          </ul>
        </div>
      </div>

      <LangAlertOpen />
    </>
  );
};

export default Departurescarddetail;
