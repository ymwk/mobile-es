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

export const MobilechangeModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  const ConfirmAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <ModalButton type="button" styleType="confirm" label="확인" onClick={openModal} />

        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onConfirm={() => {
            closeModal();
            onClose();
          }}
          type={'confirm'}
        >
          <p>정상 처리되었습니다.</p>
        </Alert>
      </>
    );
  };

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'휴대폰 번호 변경'}>
      <>
        <form method="post">
          <ul className="form-input-list">
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">휴대폰 번호</span>
                  <div className="forms-row">
                    <div className="select-root" style={{ width: 100 }}>
                      <select>
                        <option>010</option>
                      </select>
                    </div>
                    <Textfield name="" placeholder="- 없이 숫자만 입력하세요." value="12345678" />
                  </div>
                </label>
              </div>
            </li>
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">비밀번호</span>
                  <Textfield type="password" name="" placeholder="영문,숫자,특수문자 포함 8~15자리" />
                </label>
              </div>
            </li>
          </ul>
          <ModalAction>
            <ModalButton label="취소" onClick={onClose} />
            <ConfirmAlertOpen />
          </ModalAction>
        </form>
      </>
    </Modal>
  );
};
