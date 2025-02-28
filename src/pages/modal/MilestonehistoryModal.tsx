import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';
import { Textfield } from '@components/input';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const MilestonehistoryModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'출발 마일스톤 변경이력 조회'}>
      <>
        <div className="modal-column">
          <table className="table-data">
            <tbody>
              <tr>
                <th>FLIGHT</th>
                <td>ABD614</td>
              </tr>
              <tr>
                <th>SDT</th>
                <td>2022-02-21</td>
              </tr>
              <tr>
                <th>FLC</th>
                <td>ABD</td>
              </tr>
              <tr>
                <th>DES</th>
                <td>ORD</td>
              </tr>
              <tr>
                <th>LKT</th>
                <td>ABD614</td>
              </tr>
              <tr>
                <th>SEARCH</th>
                <td>
                  <Textfield className="textfield-table-search" />
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table-list">
            <thead>
              <tr>
                <th>마일스톤</th>
                <th>시간</th>
                <th>변경ID</th>
                <th>상태</th>
                <th>최종수정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ELDT</td>
                <td>2022-02-21 10:23</td>
                <td>abcd</td>
                <td>APP</td>
                <td>2022-02-21 10:23</td>
              </tr>
              <tr>
                <td>ELDT</td>
                <td>2022-02-21 10:23</td>
                <td>abcd</td>
                <td>APP</td>
                <td>2022-02-21 10:23</td>
              </tr>
              <tr>
                <td>ELDT</td>
                <td>2022-02-21 10:23</td>
                <td>abcd</td>
                <td>APP</td>
                <td>2022-02-21 10:23</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ModalAction>
          <ModalButton type="button" styleType="confirm" label="확인" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
