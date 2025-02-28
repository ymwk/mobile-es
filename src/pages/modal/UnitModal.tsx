import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const UnitModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'지문설정 지원가능 모델 안내'}>
      <>
        <div className="modal-column">
          <div>
            <h3 className="pop-title">삼성전자</h3>
            <div className="box-msg">
              갤럭시노트5, 갤럭시S6, 갤럭시A5이상/ <br />
              안드로이드OS대상
            </div>
          </div>
          <div>
            <h3 className="pop-title">아이폰</h3>
            <div className="box-msg">iPhone5S이상/IOS9.0이상</div>
          </div>
        </div>
        <ModalAction>
          <ModalButton styleType="confirm" label="확인" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
