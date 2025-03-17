import React from 'react';
import { Header } from '@components/layout';
import { IconButton } from '@components/button';
import { Textfield } from '@components/input';
import { ActionButton } from '@components/button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RsCard from '@components/content/RscardComponent';

const cardArray = [
  {
    type: 'request',
    hdc: 'OZ',
    aln: 'OZ',
    ter: 'T1',
    from: 'A01',
    to: 'A01',
    open: '03:00',
    close: '04:00',
    add1: true,
    url: '/rs-modify-detail',
  },
  {
    type: 'approved',
    hdc: 'OZ',
    aln: 'OZ',
    ter: 'T1',
    from: 'A01',
    to: 'A01',
    open: '03:00',
    close: '04:00',
    add1: false,
    url: '/rs-modify-detail',
  },
  {
    type: 'rejected',
    hdc: 'OZ',
    aln: 'OZ',
    ter: 'T1',
    from: 'A01',
    to: 'A01',
    open: '03:00',
    close: '04:00',
    add1: true,
    url: '/rs-modify-detail',
  },
];

const RsModifyPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <Header title="현행배정 변경/삭제 조회" />

        <div className="search-root">
          <div className="search-row">
            <div className="search-date">
              <div className="search-month">
                <input type="text" value="04" readOnly />
              </div>
              <div className="search-day">
                <IconButton icon="prev" label="이전" />
                <input type="text" value="24" readOnly />
                <IconButton icon="next" label="다음" />
              </div>
            </div>

            <div className="search-row flex-grow">
              <span>Ter</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>

            <div className="search-row flex-grow">
              <span>Type</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="search-row">
            <div className="search-row flex-grow">
              <span style={{ width: 43 }}>Airline</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>

            <div className="search-row flex-grow">
              <span>Status</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="search-row">
            <span style={{ width: 43 }}>From</span>
            <Textfield />
          </div>
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="arrivalscard-list">
              {cardArray.map((item, idx) => (
                <div className="arrivalscard-wrap" key={idx}>
                  <RsCard
                    type={item.type}
                    hdc={item.hdc}
                    aln={item.aln}
                    ter={item.ter}
                    from={item.from}
                    to={item.to}
                    open={item.open}
                    close={item.close}
                    add1={item.add1}
                  />
                  <Link to={item.url} className="arrivalscard-link" />
                </div>
              ))}
            </div>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              label="신청"
              onClick={() => {
                navigate('/rs-hpm-request');
              }}
            />
            <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsModifyPage;