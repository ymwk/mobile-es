import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk, Textfield } from '@components/input';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { TimepkModalOpen } from '@components/content/ModalopenComponent';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const TOBTModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  const DeleteAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <ModalButton type="submit" styleType="delete" label="삭제" onClick={openModal} />

        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onConfirm={() => {
            closeModal();
            onClose();
          }}
        >
          <p>삭제하시겠습니까?</p>
        </Alert>
      </>
    );
  };

  const ModalHeader = () => (
    <>
      <div className="modal-header-inner">
        <img src={logo_koreanair} className="logo" alt="대한항공" />
        <div className="modal-header-cont">
          <h2 className="modal-title">KE011</h2>
          <ul className="card-schedule">
            <li>
              <span>GATE</span>
              <em className="time">231</em>
            </li>
            <li>
              <span>TYP</span>
              <em className="time">330</em>
            </li>
            <li>
              <span>DES</span>
              <em className="time">HKG</em>
            </li>
            <li className="wide">
              <span>EOBT</span>
              <em className="time">2022-01-25 19:45</em>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} header={<ModalHeader />}>
      <div className="modal-column">
        <div className="forms-column tobt-group">
          <h3 className="modal-title-sub">TOBT 설정</h3>
          <div className="forms-row">
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
              <Datepk />
            </LocalizationProvider>

            <div className="timepk-wrap">
              <Textfield value="10시" width={80} readOnly />
              <Textfield value="15분" width={80} readOnly />
              <TimepkModalOpen />
            </div>
          </div>
          <Textfield placeholder="사유를 입력하세요" title="수정 사유" />

          <p className="msg c-err">TOBT설정 시 기준일시는 KST입니다.</p>
        </div>

        <div className="box-msg error">
          TOBT를 00:50로 수정하시겠습니까?
          <br />
          <em>잘못된 TOBT 입력 시 출발 순서가 변경 될 수 있습니다.</em>
        </div>
        <ModalAction>
          <ModalButton styleType="confirm" label="확인" onClick={onClose} />
          <ModalButton type="submit" label="수정" onClick={onClose} />
          <DeleteAlertOpen />
        </ModalAction>
      </div>
    </Modal>
  );
};
