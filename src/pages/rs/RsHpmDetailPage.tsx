import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';

const RsHpmDetailPage: React.FC = () => {
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
        <Header title="Hangar Pad Request" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <table className="table-data">
              <tbody>
                <tr>
                  <th>Req Date</th>
                  <td>
                    <span className="text-right">2024-11-22 Wed</span>
                  </td>
                </tr>
                <tr>
                  <th>Req No</th>
                  <td>
                    <span className="text-right">HL7414</span>
                  </td>
                </tr>
                <tr>
                  <th>Curr Stand</th>
                  <td>
                    <span className="text-right">21</span>
                  </td>
                </tr>
                <tr>
                  <th>Req Stand</th>
                  <td>
                    <span className="text-right">802</span>
                  </td>
                </tr>
                <tr>
                  <th>From</th>
                  <td>
                    <span className="text-right">2024-11-22 06:00</span>
                  </td>
                </tr>
                <tr>
                  <th>To</th>
                  <td>
                    <span className="text-right">2024-11-22 18:00</span>
                  </td>
                </tr>
                <tr>
                  <th>Reason</th>
                  <td>
                    <span className="text-right">CC</span>
                  </td>
                </tr>
                <tr>
                  <th>FLC</th>
                  <td>
                    <span className="text-right">OZ</span>
                  </td>
                </tr>
                <tr>
                  <th>Req By</th>
                  <td>
                    <span className="text-right">IS Stand Airline</span>
                  </td>
                </tr>
                <tr>
                  <th>App Stand</th>
                  <td>
                    <span className="text-right">-</span>
                  </td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>
                    <span className="text-right">-</span>
                  </td>
                </tr>
                <tr>
                  <th>App Date</th>
                  <td>
                    <span className="text-right">-</span>
                  </td>
                </tr>
                <tr>
                  <th>App By</th>
                  <td>
                    <span className="text-right">-</span>
                  </td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>
                    <span className="text-right">Request</span>
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
              label="수정"
              onClick={() => {
                navigate('/rs-hpm-request');
              }}
            />
            <ActionButton
              type="submit"
              styleType="confirm"
              label="목록"
              onClick={() => {
                navigate('/rs-hpm');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsHpmDetailPage;