import React from 'react';
import { Header } from '@components/layout';
import { useNavigate } from 'react-router-dom';

const StatsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="wrapper">
        <Header title="통계" />

        <main className="portal-main">
          <div className="portal-cont">
            <div className="stats-title">통계선택</div>
            <ul className="stats-portal">
              <li
                className="stat-operstat"
                onClick={() => {
                  navigate('/operstat');
                }}
              >
                <span className="tit">
                  A-CDM 운영 현황
                  <i className="ico-root gt" />
                </span>
              </li>
              <li
                className="stat-traffstat"
                onClick={() => {
                  navigate('/traffstat');
                }}
              >
                <span className="tit">
                  항공 교통량 현황
                  <i className="ico-root gt" />
                </span>
              </li>
              <li
                className="stat-tranostat"
                onClick={() => {
                  navigate('/tranostat');
                }}
              >
                <span className="tit">
                  항공 교통량 순위
                  <i className="ico-root gt" />
                </span>
              </li>
              <li
                className="stat-rate"
                onClick={() => {
                  navigate('/rate');
                }}
              >
                <span className="tit">
                  정시율
                  <i className="ico-root gt" />
                </span>
              </li>
              <li
                className="stat-tobtc"
                onClick={() => {
                  navigate('/tobtc');
                }}
              >
                <span className="tit">
                  TOBT 변경 횟수
                  <i className="ico-root gt" />
                </span>
              </li>
              <li
                className="stat-rateno"
                onClick={() => {
                  navigate('/rateno');
                }}
              >
                <span className="tit">
                  정시율 순위
                  <i className="ico-root gt" />
                </span>
              </li>
              <li
                className="stat-flystat"
                onClick={() => {
                  navigate('/flystat');
                }}
              >
                <span className="tit">
                  항공기 운항 현황
                  <i className="ico-root gt" />
                </span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default StatsPage;