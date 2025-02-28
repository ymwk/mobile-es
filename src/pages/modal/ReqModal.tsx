import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { Button, ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const ReqModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'제방빙 사전요청'}>
      <>
        <div className="modal-req">
          <p>(편명) 제방빙작업을 요청하시겠습니까?</p>
          <p className="noti">잘못된 요청 시 출발순서가 변경될 수 있습니다.</p>

          <div className="req-switch">
            <p>엔진 상태를 선택하세요</p>
            <div className="req-btns">
              <Button styleType="confirm" className="button-switch">
                <i className="ico-root power" />
                ON
              </Button>
              <Button className="button-switch">
                <i className="ico-root power" />
                OFF
              </Button>
            </div>
          </div>
        </div>

        <ModalAction>
          <ModalButton label="취소" onClick={onClose} />
          <ModalButton type="submit" styleType="confirm" label="확인" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
