import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const TimeSetModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'privacy-modal'} isOpen={isOpen} onClose={onClose} title={'시간선택'}>
      <>
        <div className="timeset-group">
          <div className="select-root">
            <select>
              <option>0시</option>
              <option>1시</option>
              <option>2시</option>
              <option>3시</option>
              <option>4시</option>
              <option>5시</option>
            </select>
          </div>
          <span>~</span>
          <div className="select-root">
            <select>
              <option>0시</option>
              <option>1시</option>
              <option>2시</option>
              <option>3시</option>
              <option>4시</option>
              <option>5시</option>
            </select>
          </div>
        </div>
        <ModalAction>
          <ModalButton label="취소" onClick={onClose} />
          <ModalButton type="submit" styleType="confirm" label="설정" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
