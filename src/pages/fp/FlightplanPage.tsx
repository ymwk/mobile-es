import React, { useState } from 'react';
import { Header } from '@components/layout';
import { Button, ActionButton } from '@components/button';
import { FlightSearch } from '@components/content/FlightSearchComponent';
import { useModal } from '@hooks/useModal';
import { OrderingModal } from '@pages/modal/OrderingModal';
import { useNavigate } from 'react-router-dom';

const OrderingModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Button label="설정" styleType="outlined" className="s-sm" onClick={openModal}>
        <i className="ico-root set" />
      </Button>
      <OrderingModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const FlightplanPage: React.FC = () => {
  const [radioVal, setRadioVal] = useState('all');
  const getRadioValue = (val: string) => setRadioVal(val);
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="현행 운항 스케쥴 조회" />

        <FlightSearch getRadioValue={getRadioValue} />

        <main className="portal-main search-main">
          <div className="portal-cont">
            {radioVal === 'all' && (
              <>
                <div className="search-result-btns">
                  <OrderingModalOpen />
                </div>
                <table className="table-list">
                  <thead>
                    <tr>
                      <th></th>
                      <th>AOD</th>
                      <th>FLT</th>
                      <th>OB</th>
                      <th>GAT</th>
                      <th>PAX</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onClick={() => {
                        navigate('/fp-arrivals');
                      }}
                    >
                      <td>
                        <i className="badge-root">L</i>
                      </td>
                      <td>A</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>-</td>
                      <td>631</td>
                    </tr>
                    <tr
                      onClick={() => {
                        navigate('/fp-arrivals');
                      }}
                    >
                      <td>
                        <i className="badge-root c-b02">LM</i>
                      </td>
                      <td>D</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>10</td>
                      <td>631</td>
                    </tr>
                    <tr
                      onClick={() => {
                        navigate('/fp-arrivals');
                      }}
                    >
                      <td>
                        <i className="badge-root c-b03">S</i>
                      </td>
                      <td>A</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>233</td>
                      <td>631</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {radioVal === 'arrive' && (
              <>
                <div className="search-result-btns">
                  <OrderingModalOpen />
                </div>
                <table className="table-list c-t02">
                  <thead>
                    <tr>
                      <th></th>
                      <th>AOD</th>
                      <th>FLT</th>
                      <th>OB</th>
                      <th>GAT</th>
                      <th>PAX</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onClick={() => {
                        navigate('/fp-arrivals');
                      }}
                    >
                      <td>
                        <i className="badge-root">L</i>
                      </td>
                      <td>A</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>-</td>
                      <td>631</td>
                    </tr>
                    <tr
                      onClick={() => {
                        navigate('/fp-arrivals');
                      }}
                    >
                      <td>
                        <i className="badge-root c-b02">LM</i>
                      </td>
                      <td>D</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>10</td>
                      <td>631</td>
                    </tr>
                    <tr
                      onClick={() => {
                        navigate('/fp-arrivals');
                      }}
                    >
                      <td>
                        <i className="badge-root c-b03">S</i>
                      </td>
                      <td>A</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>233</td>
                      <td>631</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
            {radioVal === 'departure' && (
              <>
                <div className="search-result-btns">
                  <OrderingModalOpen />
                </div>
                <table className="table-list c-t01">
                  <thead>
                    <tr>
                      <th></th>
                      <th>AOD</th>
                      <th>FLT</th>
                      <th>OB</th>
                      <th>GAT</th>
                      <th>PAX</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      onClick={() => {
                        navigate('/fp-departures');
                      }}
                    >
                      <td>
                        <i className="badge-root">L</i>
                      </td>
                      <td>A</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>-</td>
                      <td>631</td>
                    </tr>
                    <tr
                      onClick={() => {
                        navigate('/fp-departures');
                      }}
                    >
                      <td>
                        <i className="badge-root c-b02">LM</i>
                      </td>
                      <td>D</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>10</td>
                      <td>631</td>
                    </tr>
                    <tr
                      onClick={() => {
                        navigate('/fp-departures');
                      }}
                    >
                      <td>
                        <i className="badge-root c-b03">S</i>
                      </td>
                      <td>A</td>
                      <td>LH345</td>
                      <td>FRA</td>
                      <td>233</td>
                      <td>631</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton label=" 조회" onClick={() => {}} styleType="confirm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightplanPage;
