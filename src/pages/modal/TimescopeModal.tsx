import React from 'react';
import { Modal, ModalAction } from '@components/modal'
import { ModalButton } from '@components/button'
import { Radiogroup } from '@components/input';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const TimescopeModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'Time Scope'}>
      <div className="modal-column">
        <div>
          <h3 className="modal-title-sub">TIME</h3>
          <Radiogroup
            name={'timelist'}
            type="type3"
            className="timescope-radio"
            items={[
              {
                label: '1H',
                value: '1',
              },
              {
                label: '2H',
                value: '2',
              },
              {
                label: '3H',
                value: '3',
              },
              {
                label: '4H',
                value: '4',
              },
              {
                label: '5H',
                value: '5',
              },
              {
                label: '6H',
                value: '6',
              },
              {
                label: '7H',
                value: '7',
              },
              {
                label: '8H',
                value: '8',
              },
              {
                label: '9H',
                value: '9',
              },
              {
                label: '10H',
                value: '10',
              },
              {
                label: '11H',
                value: '11',
              },
              {
                label: '12H',
                value: '12',
              },
            ]}
          />
        </div>

        <div>
          <h3 className="modal-title-sub">DAY</h3>
          <Radiogroup
            name={'timelist'}
            type="type3"
            className="timescope-radio"
            items={[
              {
                label: '1DAY',
                value: '24',
              },
              {
                label: '2DAY',
                value: '48',
              },
            ]}
          />
        </div>

        <ModalAction>
          <ModalButton label="취소" onClick={onClose} />
          <ModalButton type="submit" styleType="confirm" label="확인" onClick={onClose} />
        </ModalAction>
      </div>
    </Modal>
  );
};
