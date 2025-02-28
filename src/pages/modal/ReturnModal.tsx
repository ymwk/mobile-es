import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';
import { Textfield } from '@components/input';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const ReturnModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'반려사유'}>
      <>
        <form method="post">
          <ul className="form-input-list">
            <li>
              <div className="textfield-root">
                <span className="label">구분</span>
              </div>
              <div className="forms-column">
                <div className="select-root">
                  <select>
                    <option>선택</option>
                    <option>권한 부적절</option>
                    <option>미계약 업체</option>
                    <option>사용자 확인 불가</option>
                    <option>기타</option>
                  </select>
                </div>
                <Textfield name="" placeholder="직접입력" disabled />
              </div>
            </li>
          </ul>
          <ModalAction>
            <ModalButton label="취소" onClick={onClose} />
            <ModalButton type="submit" styleType="confirm" label="확인" onClick={onClose} />
          </ModalAction>
        </form>
      </>
    </Modal>
  );
};
