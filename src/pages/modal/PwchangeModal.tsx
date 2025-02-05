import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';
import { Textfield } from '@components/input';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmAlertOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <ModalButton type="button" styleType="confirm" label="확인" onClick={openModal} />

      <Alert isOpen={isOpen} onClose={closeModal} type={'confirm'}>
        <p>정상적으로 변경되었습니다.</p>
      </Alert>
    </>
  );
};

export const PwchangeModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'privacy-modal'} isOpen={isOpen} onClose={onClose} title={'비밀번호 변경'}>
      <>
        <form method="post">
          <ul className="form-input-list">
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">변경할 비밀번호</span>
                  <Textfield type="password" name="" placeholder="영문,숫자,특수문자 포함 8~15자리" />
                </label>
              </div>
            </li>
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">비밀번호 확인</span>
                  <Textfield type="password" name="" placeholder="영문,숫자,특수문자 포함 8~15자리" />
                </label>
              </div>
            </li>
          </ul>
          <ModalAction>
            <ModalButton label="취소" onClick={onClose} />
            <ConfirmAlertOpen/>
          </ModalAction>
        </form>
      </>
    </Modal>
  );
};
