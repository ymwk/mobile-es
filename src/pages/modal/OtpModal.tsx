import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { Button, ModalButton } from '@components/button';
import { Textfield } from '@components/input';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const OtpModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'OTP 확인'}>
      <>
        <form method="post">
          <ul className="form-input-list">
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">OTP 번호</span>
                  <Textfield name="" placeholder="" />
                </label>
                <Button label="인증받기" />
              </div>
              <p className="input-msg">
                남은시간 <em>02:43</em>초
              </p>
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
