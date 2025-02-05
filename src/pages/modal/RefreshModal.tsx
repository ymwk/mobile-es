import React, { useState, useCallback } from 'react';
import { Modal, ModalAction } from '@components/modal'
import { ModalButton } from '@components/button'
import { Radiogroup } from '@components/input';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const RefreshModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  //RadioGroup
  const [radioVal, setRadioVal] = useState('30');
  const onChangeRadio = useCallback((getvalue: string) => {
    setRadioVal(getvalue);
  }, []);

  return (
    <Modal id={'privacy-modal'} isOpen={isOpen} onClose={onClose} title={'새로고침 시간설정'}>
      <>
        <Radiogroup
          name={'setlist'}
          onChange={onChangeRadio}
          type="type3"
          className="refreshset-group"
          items={[
            {
              label: '30초',
              value: '30',
            },
            {
              label: '1분',
              value: '60',
            },
            {
              label: '3분',
              value: '180',
            },
            {
              label: '5분',
              value: '300',
            },
          ]}
          getvalue={radioVal}
        />
        <ModalAction>
          <ModalButton label="취소" onClick={onClose} />
          <ModalButton type="submit" styleType="confirm" label="확인" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
