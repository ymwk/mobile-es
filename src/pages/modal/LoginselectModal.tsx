import React from 'react';
import { Modal } from '@components/modal'
import pass_pattern from '@assets/images/login/img_pass_pattern.svg';
import pass_finger from '@assets/images/login/img_pass_finger.svg';
import pass_pin from '@assets/images/login/img_pass_pin.svg';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginselectModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'로그인 방식'}>
      <>
        <div className="index-pass-btns">
          <button type="button">
            <div className="index-pass-icon">
              <img src={pass_pattern} alt="패턴" />
            </div>
            <span>
              패턴
              <br />
              로그인
            </span>
          </button>
          <button type="button">
            <div className="index-pass-icon finger">
              <img src={pass_finger} alt="지문" />
            </div>
            <span>
              지문
              <br />
              로그인
            </span>
          </button>
          <button type="button">
            <div className="index-pass-icon">
              <img src={pass_pin} alt="PIN" />
            </div>
            <span>
              PIN번호
              <br />
              로그인
            </span>
          </button>
        </div>
      </>
    </Modal>
  );
};
