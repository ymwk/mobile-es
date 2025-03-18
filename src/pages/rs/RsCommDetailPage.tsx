import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';

const RsCommDetailPage: React.FC = () => {
  const navigate = useNavigate();

  const DeleteAlertOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();

    return (
      <>
        <ActionButton label="삭제" onClick={openModal} />

        <Alert isOpen={isOpen} onClose={closeModal} onConfirm={closeModal}>
          <p>삭제하시겠습니까?</p>
        </Alert>
      </>
    );
  };

  return (
    <>
      <div className="wrapper">
        <Header title="공용시설 신청관리" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <table className="table-data">
              <tbody>
                <tr>
                  <th>신청일자</th>
                  <td>
                    <span className="text-right">2024-11-08</span>
                  </td>
                </tr>
                <tr>
                  <th>시설구분</th>
                  <td>
                    <span className="text-right">카운터의자</span>
                  </td>
                </tr>
                <tr>
                  <th>조업사</th>
                  <td>
                    <span className="text-right">OOOO</span>
                  </td>
                </tr>
                <tr>
                  <th>항공사</th>
                  <td>
                    <span className="text-right">OZ</span>
                  </td>
                </tr>
                <tr>
                  <th>신청구분</th>
                  <td>
                    <span className="text-right">지급</span>
                  </td>
                </tr>
                <tr>
                  <th>신청수량</th>
                  <td>
                    <span className="text-right">2</span>
                  </td>
                </tr>
                <tr>
                  <th>비고</th>
                  <td>
                    <span className="text-right">-</span>
                  </td>
                </tr>
                <tr>
                  <th>수령희망일자</th>
                  <td>
                    <span className="text-right">2025-03-22</span>
                  </td>
                </tr>
                <tr>
                  <th>승인구분</th>
                  <td>
                    <span className="text-right">승인완료</span>
                  </td>
                </tr>
                <tr>
                  <th>승인수량</th>
                  <td>
                    <span className="text-right">2</span>
                  </td>
                </tr>
                <tr>
                  <th>비고</th>
                  <td>
                    <span className="text-right">-</span>
                  </td>
                </tr>
                <tr>
                  <th>지급일자</th>
                  <td>
                    <span className="text-right">2025-03-22</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <DeleteAlertOpen />
            <ActionButton
              type="submit"
              label="수정"
              onClick={() => {
                navigate('/rs-comm-request');
              }}
            />
            <ActionButton
              type="submit"
              styleType="confirm"
              label="목록"
              onClick={() => {
                navigate('/rs-comm');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsCommDetailPage;