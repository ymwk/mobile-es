import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const MilestoneModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'마일스톤 색상정보'}>
      <>
        <ul className="milestone-legend">
          <li>
            <span>A-CDM 자동생성시간</span>
            <span className="legend">검은색</span>
          </li>
          <li>
            <span>항공사/조업사에서 입력</span>
            <span className="legend mile-b-01">TOBT</span>
          </li>
          <li>
            <span>관제탑에서 제공한 TSAT보다 늦은</span>
            <span className="legend mile-b-02">TOBT</span>
          </li>
          <li>
            <span>관제탑에서 제공한</span>
            <span className="legend mile-b-03">TSAT/TTOT</span>
          </li>
          <li>
            <span>항공교통통제센터 CTOT를 반영한</span>
            <span className="legend mile-b-04">TSAT/TTOT</span>
          </li>
          <li>
            <span>CTOT를 반영한 TSAT이 TOBT보다 빠른</span>
            <span className="legend mile-b-05">TSAT/TTOT</span>
          </li>
        </ul>
        <ModalAction>
          <ModalButton type="button" styleType="confirm" label="확인" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
