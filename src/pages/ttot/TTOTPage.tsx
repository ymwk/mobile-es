import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { Textfield } from '@components/input';
import { useNavigate } from 'react-router-dom';

import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';
import logo_jin from '@assets/images/logo/logo_jinair.png';

const ttotArray = [
  {
    logo: logo_koreanair,
    flt: 'KE631',
    code: 'ZRH',
    time: 'TTOT 09:30',
    match: false,
  },
  {
    logo: logo_asiana,
    flt: 'OZ753',
    code: 'FUK',
    time: 'TTOT 09:35',
    match: true,
  },
  {
    logo: logo_jin,
    flt: 'LJ751',
    code: 'SFO',
    time: 'TTOT 09:50',
    match: false,
  },
  {
    logo: logo_asiana,
    flt: 'KE631',
    code: 'MAN',
    time: 'TTOT 09:55',
    match: false,
  },
  {
    logo: logo_koreanair,
    flt: 'KE631',
    code: 'ZRH',
    time: 'TTOT 09:30',
    match: false,
  },
  {
    logo: logo_asiana,
    flt: 'OZ753',
    code: 'FUK',
    time: 'TTOT 09:35',
    match: false,
  },
  {
    logo: logo_jin,
    flt: 'LJ751',
    code: 'SFO',
    time: 'TTOT 09:50',
    match: false,
  },
  {
    logo: logo_asiana,
    flt: 'KE631',
    code: 'MAN',
    time: 'TTOT 09:55',
    match: false,
  },
];

const TTOTPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="TTOT(목표 이륙시간)" />

        <div className="search-root">
          <Textfield placeholder="편명을 입력하세요" className="form-search" />
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <Tabs type="cdm-ttot">
              <TabContent label="33R"></TabContent>
              <TabContent label="15L"></TabContent>
              <TabContent label="33L" disabled></TabContent>
              <TabContent label="15R" disabled></TabContent>
              <TabContent label="34R"></TabContent>
              <TabContent label="16L"></TabContent>
              <TabContent label="34L"></TabContent>
              <TabContent label="16R" disabled></TabContent>
            </Tabs>

            <ul className="airline-list ttot-list">
              {ttotArray.map((item, idx) => (
                <li
                  key={idx}
                  className={`${item.match ? 'match' : ''}`}
                  onClick={() => {
                    navigate('/departures-detail');
                  }}
                >
                  <div className="flt-wrap">
                    <img src={item.logo} alt={item.flt} />
                    <em>{item.flt}</em>
                  </div>
                  <span className="code">{item.code}</span>
                  <span className="time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <div className="portal-action">
          <div className="action-inner">
            <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TTOTPage;