import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const PushModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'푸시알림 수동송신'}>
      <>
        <form method="post">
          <div className="flex-column-gap">
            <div className="textfield-root">
              <label>
                <span className="label">구분</span>
                <div className="select-root">
                  <select>
                    <option>지연공지</option>
                  </select>
                </div>
              </label>
            </div>
            <textarea className="form-textarea">(편명) The plane has benn delayed because of the bad weather.</textarea>
            <textarea className="form-textarea">(편명) 기상악화로 인하여 지연되고 있습니다.</textarea>
          </div>

          <ModalAction>
            <ModalButton label="취소" onClick={onClose} />
            <ModalButton type="button" styleType="confirm" label="확인" onClick={onClose} />
          </ModalAction>
        </form>
      </>
    </Modal>
  );
};
