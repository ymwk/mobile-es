import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button'

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'개인정보 처리방침'} fullSize>
      <>
        <div className="privacy-header">
          <div className="select-root">
            <select>
              <option>2024년</option>
            </select>
          </div>
        </div>

        <div className="notice-body">
          ㈜인천공항공사는 고객님의 개인정보를 중요시하며 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 개인정보보호법
          등 개인정보와 관련된 법령상의 규정들을 준수하고 있으며, 개인정보처리방침을 제정하여 이용자의 권익보호에 최선을
          다하고 있습니다.
          <br />
          <br />
          ㈜인천공항공사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고
          있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
          <br />
          <br />
          ㈜인천공항공사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.
          <br />
          <br />
          ■ 수집하는 개인정보 항목
          <br />
          ㈜인천공항공사는 회원가입을 위해 아래와 같은 개인정보를 수집 및 처리하고 있습니다.
          <br />
          회원가입 등 필요시점에서 수집하는 정보
          <br />
          필수 : 이름, 휴대전화, 생년월일, 중복가입확인정보(DI)값, 연계정보
          <br />
          선택 : 아이디(온라인)
          <br />
        </div>

        <ModalAction>
          <ModalButton
						styleType='confirm'
            label='닫기'
            onClick={onClose}
          />
        </ModalAction>
      </>
    </Modal>
  );
};
