import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Commcard from '@components/content/CommcardComponent';

const cardArray = [
  {
    type: 'request',
    appdate: '2024.11.08',
    facnm: '카운터의자',
    airline: 'OZ',
    division: '지급',
    appqua: '2',
    appnm: '승인완료',
    appcount: '2',
    supdate: '2025.03.08',
    url: '/rs-comm-detail',
  },
  {
    type: 'approved',
    appdate: '2024.11.08',
    facnm: '카운터의자',
    airline: 'OZ',
    division: '지급',
    appqua: '2',
    appnm: '승인완료',
    appcount: '2',
    supdate: '2025.03.08',
    url: '/rs-comm-detail',
  },
];

const RsCommPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <Header title="공용시설 신청관리" />

        <div className="search-root">
          <div className="search-row">
            <div className="search-row flex-grow">
              <span>시설구분</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>

            <div className="search-row flex-grow">
              <span>승인구분</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>
          </div>

          <div className="search-row">
            <div className="search-row">
              <span>Aln</span>
              <div className="select-root" style={{ minWidth: 120 }}>
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="table-gap"></div>
            <table className="table-data table-fixed table-center">
              <thead>
                <tr>
                  <th>시설구분</th>
                  <th>신청가능수량</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>카운터의자</th>
                  <td>3</td>
                </tr>
                <tr>
                  <th>게이트의자</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>클래스아이디</th>
                  <td>1</td>
                </tr>
              </tbody>
            </table>

            <hr className='hr-mg' />

            <div className="arrivalscard-list">
              {cardArray.map((item, idx) => (
                <div className="arrivalscard-wrap" key={idx}>
                  <Commcard
                    type={item.type}
                    appdate={item.appdate}
                    facnm={item.facnm}
                    airline={item.airline}
                    division={item.division}
                    appqua={item.appqua}
                    appnm={item.appnm}
                    appcount={item.appcount}
                    supdate={item.supdate}
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
              type="submit"
              label="신청"
              onClick={() => {
                navigate('/rs-comm-request');
              }}
            />
            <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RsCommPage;