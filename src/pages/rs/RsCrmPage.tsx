import React from 'react';
import { Header } from '@components/layout';
import { IconButton, ActionButton } from '@components/button';
import { Checkbox } from '@components/input';
import Crmcard from '@components/content/CrmcardComponent';
import { Link } from 'react-router-dom';

const cardArray = [
  {
    type: 'request',
    day: 'FRI',
    tof: '1',
    hdc: 'OZ',
    aln: '3P',
    ter: 'T1',
    from: 'A01',
    to: 'A01',
    open: '03:00',
    close: '04:00',
    add1: true,
    url: '/rs-crm-detail',
  },
  {
    type: 'approved',
    day: 'FRI',
    tof: '1',
    hdc: 'OZ',
    aln: '3P',
    ter: 'T1',
    from: 'A01',
    to: 'A01',
    open: '03:00',
    close: '04:00',
    add1: true,
    url: '/rs-crm-detail',
  },
  {
    type: 'rejected',
    day: 'FRI',
    tof: '1',
    hdc: 'OZ',
    aln: '3P',
    ter: 'T1',
    from: 'A01',
    to: 'A01',
    open: '03:00',
    close: '04:00',
    add1: true,
    url: '/rs-crm-detail',
  },
];

const RsCrmPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="Change Request Monitoring" />

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
              <span>Aln</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
              <Checkbox label="Portable Only" />
            </div>
          </div>

          <div className="search-row">
            <div className="search-row flex-grow">
              <span>Ter</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="arrivalscard-list">
              {cardArray.map((item, idx) => (
                <div className="arrivalscard-wrap" key={idx}>
                  <Crmcard
                    type={item.type}
                    day={item.day}
                    tof={item.tof}
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
            <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsCrmPage;