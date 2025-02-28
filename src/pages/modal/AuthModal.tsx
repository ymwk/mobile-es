import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { Button, ModalButton } from '@components/button';
import { Textfield } from '@components/input';
import { useModal } from '@hooks/useModal';
import { PwchangeModal } from '@pages/modal/PwchangeModal';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

const PwchangeModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <ModalButton type="button" styleType="confirm" label="확인" onClick={openModal} />
      <PwchangeModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export const AuthModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'본인인증'}>
      <>
        <form method="post">
          <ul className="form-input-list">
            <li>
              <div className="textfield-root">
                <label>
                  <label className="label">아이디</label>
                  <Textfield name="" placeholder="아이디를 입력하세요." />
                </label>
              </div>
            </li>
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">휴대폰 번호 </span>
                  <Textfield name="" placeholder="- 없이 숫자만 입력하세요." />
                </label>

                <Button label="확인" />
              </div>
            </li>
            <li>
              <div className="forms-row">
                <div className="select-root">
                  <select name="" title="인증방법선택">
                    <option>인증방법선택</option>
                  </select>
                </div>
                <Button label="OTP 전송" />
              </div>
            </li>
            <li>
              <div className="textfield-root">
                <label>
                  <span className="label">OTP 번호</span>
                  <Textfield name="" placeholder="" />
                  <div className="btns">
                    <span className="ico-root chk" />
                  </div>
                </label>
              </div>
              <p className="input-msg">
                남은시간 <em>02:43</em>초
              </p>
            </li>
          </ul>
          <ModalAction>
            <ModalButton label="취소" onClick={onClose} />
            <PwchangeModalOpen />
          </ModalAction>
        </form>
      </>
    </Modal>
  );
};
