import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const FinishedModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'FINISHED'}>
      <>
        <table className="table-list c-t03">
          <thead>
            <tr>
              <th>NO</th>
              <th>FLT</th>
              <th>ETD</th>
              <th>ATD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>2</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>3</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>4</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>5</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>6</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>7</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>8</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>9</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
            <tr>
              <td>10</td>
              <td>OZ721</td>
              <td>09:00</td>
              <td>09:30</td>
            </tr>
          </tbody>
        </table>

        <ModalAction>
          <ModalButton type="button" styleType="confirm" label="확인" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
