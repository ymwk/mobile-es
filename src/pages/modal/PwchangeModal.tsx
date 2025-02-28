import React, { useState, useEffect } from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { Textfield } from '@components/input';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const PwchangeModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;
  const [modifyOpen, setModifyOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const ModifyAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
      openModal();
    }, []);

    return (
      <>
        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onCancel={closeModal}
          onConfirm={() => {
            closeModal();
            setModifyOpen(false);
            setConfirmOpen(true);
          }}
        >
          <p>비밀번호 변경 시 다시 로그인해 주시기 바랍니다.</p>
          <p>정보를 수정하시겠습니까?</p>
        </Alert>
      </>
    );
  }

  const ConfirmAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
      openModal();
    }, []);

    return (
      <>
        <Alert
          isOpen={isOpen}
          onClose={closeModal}
          onCancel={closeModal}
          onConfirm={() => {
            closeModal();
            setModifyOpen(false);
            setConfirmOpen(false);
            onClose();
          }}
        >
          <p>정상 처리되었습니다.</p>
        </Alert>
      </>
    );
  };

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'비밀번호 변경'}>
      <>
        <form method="post">
          <ul className="form-input-list">
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">현재 비밀번호</span>
                  <Textfield type="password" name="" placeholder="영문,숫자,특수문자 포함 8~15자리" />
                </label>
              </div>
            </li>
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
            <ModalButton type="button" styleType="confirm" label="확인" onClick={() => setModifyOpen(true)} />
          </ModalAction>
        </form>

        {modifyOpen && <ModifyAlertOpen />}
        {confirmOpen && <ConfirmAlertOpen />}
      </>
    </Modal>
  );
};
