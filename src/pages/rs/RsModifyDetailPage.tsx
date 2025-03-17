import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';

const RsModifyDetailPage: React.FC = () => {
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
        <Header title="현행배정 변경/삭제" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="table-gap">
              <table className="table-data">
                <tbody>
                  <tr>
                    <th>Day</th>
                    <td>
                      <span className="text-right">FRI</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Tof</th>
                    <td>
                      <span className="text-right">1</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Hdc</th>
                    <td>
                      <span className="text-right">OZ</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Aln</th>
                    <td>
                      <span className="text-right">OZ</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-data">
                <thead>
                  <tr>
                    <th colSpan={2}>Assigned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Ter</th>
                    <td>
                      <span className="text-right">T1</span>
                    </td>
                  </tr>
                  <tr>
                    <th>From</th>
                    <td>
                      <span className="text-right">A02</span>
                    </td>
                  </tr>
                  <tr>
                    <th>To</th>
                    <td>
                      <span className="text-right">A09</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Qty</th>
                    <td>
                      <span className="text-right">8</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Open</th>
                    <td>
                      <span className="text-right">05:30</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Close</th>
                    <td>
                      <span className="text-right">19:30</span>
                    </td>
                  </tr>
                  <tr>
                    <th>+1</th>
                    <td>
                      <span className="text-right">y</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-data">
                <tbody>
                  <tr>
                    <th>*Tof</th>
                    <td>
                      <span className="text-right">1</span>
                    </td>
                  </tr>
                  <tr>
                    <th>*Hdc</th>
                    <td>
                      <span className="text-right">1</span>
                    </td>
                  </tr>
                  <tr>
                    <th>*Aln</th>
                    <td>
                      <span className="text-right">OZ</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-data">
                <thead>
                  <tr>
                    <th colSpan={2}>*Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Ter</th>
                    <td>
                      <span className="text-right">T1</span>
                    </td>
                  </tr>
                  <tr>
                    <th>From</th>
                    <td>
                      <span className="text-right">A02</span>
                    </td>
                  </tr>
                  <tr>
                    <th>To</th>
                    <td>
                      <span className="text-right">A09</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Qty</th>
                    <td>
                      <span className="text-right">8</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Open</th>
                    <td>
                      <span className="text-right">05:30</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Close</th>
                    <td>
                      <span className="text-right">19:30</span>
                    </td>
                  </tr>
                  <tr>
                    <th>+1</th>
                    <td>
                      <span className="text-right">y</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-data">
                <thead>
                  <tr>
                    <th colSpan={2}>*Effect Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>From</th>
                    <td>
                      <span className="text-right">2024-11-22</span>
                    </td>
                  </tr>
                  <tr>
                    <th>To</th>
                    <td>
                      <span className="text-right">2024-11-23</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="table-data">
                <tbody>
                  <tr>
                    <th>*Remark</th>
                    <td>
                      <span className="text-right">-</span>
                    </td>
                  </tr>
                  <tr>
                    <th>*Type</th>
                    <td>
                      <span className="text-right">Change</span>
                    </td>
                  </tr>
                  <tr>
                    <th>*Status</th>
                    <td>
                      <span className="text-right">Request</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Chg All</th>
                    <td>
                      <span className="text-right">Y</span>
                    </td>
                  </tr>
                  <tr>
                    <th>Aft Asn</th>
                    <td>
                      <span className="text-right">Y</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <div className="portal-action">
          <div className="action-inner">
            <DeleteAlertOpen />
            <ActionButton
              label="수정"
              onClick={() => {
                navigate('/rs-modify-request');
              }}
            />
            <ActionButton
              type="submit"
              styleType="confirm"
              label="목록"
              onClick={() => {
                navigate('/rs-modify');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsModifyDetailPage;