import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const IdfindModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'아이디 찾기'}>
      <>
        <div className="search-result-top">
          <span className="count">
            총<em>26</em>건
          </span>
        </div>

        <table className="table-list">
          <thead>
            <tr>
              <th>번호</th>
              <th>성명</th>
              <th>휴대폰 번호</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>2</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>3</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>4</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>5</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>6</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>7</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>8</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>9</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
            <tr>
              <td>10</td>
              <td>홍길동</td>
              <td>010-1234-5678</td>
            </tr>
          </tbody>
        </table>

        <ModalAction>
          <ModalButton styleType="confirm" label="더보기" onClick={() => {}} />
        </ModalAction>
      </>
    </Modal>
  );
};
