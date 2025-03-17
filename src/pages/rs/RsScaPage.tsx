import React from 'react';
import { Header } from '@components/layout';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';

const RsScaPage: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="wrapper">
        <Header title="Stand Change Alarm" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="search-result-top">SDT : 12-08</div>
            <table className="table-list c-t04">
              <thead>
                <tr>
                  <th>STS</th>
                  <th>FLT</th>
                  <th>ETD</th>
                  <th>P-P</th>
                  <th>N-P</th>
                </tr>
              </thead>
              <tbody>
                <tr onClick={openModal} className={'active'}>
                  <td>A</td>
                  <td>TW021</td>
                  <td className="bg-c01">15:00</td>
                  <td className="bg-c02">25/301</td>
                  <td className="bg-c03">25/111</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>TW021</td>
                  <td className="bg-c01">18:30</td>
                  <td className="bg-c02">25/301</td>
                  <td className="bg-c03">25/111</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <Alert isOpen={isOpen} onClose={closeModal} onConfirm={closeModal} onCancel={closeModal}>
        <p>확인하시겠습니까?</p>
      </Alert>
    </>
  );
};

export default RsScaPage;