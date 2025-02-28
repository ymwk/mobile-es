import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderingModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'notice-modal'} isOpen={isOpen} onClose={onClose} title={'항목설정'} fullSize>
      <>
        <p className="modal-msg-s">
          *원하는 항목을 선택하면 항목이 활성화 되고 원하는 위치로 옮겨서(드래그앤드랍) 순서를 정합니다.
        </p>

        <div className="ordering-list">
          <div className="ordering-item">AOD</div>
          <div className="ordering-item">FLT</div>
          <div className="ordering-item">OD</div>
          <div className="ordering-item">GAT</div>
          <div className="ordering-item">PAK</div>
          <div className="ordering-item">SDT</div>
          <div className="ordering-item">ETT</div>
          <div className="ordering-item">TST</div>
          <div className="ordering-item">TER</div>
          <div className="ordering-item">ORM</div>
          <div className="ordering-item">STA</div>
          <div className="ordering-item">ETA</div>
        </div>

        <ModalAction>
          <ModalButton label="취소" onClick={onClose} />
          <ModalButton styleType="confirm" label="적용" onClick={onClose} />
          <ModalButton styleType="delete" label="초기화" onClick={() => {}} />
        </ModalAction>
      </>
    </Modal>
  );
};