import React from 'react';

interface CommcardProps {
  type?: 'request' | 'approved' | 'rejected' | string;
  appdate?: string;
  facnm?: string;
  airline?: string;
  division?: string;
  appqua?: string;
  appnm?: string;
  appcount?: string;
  supdate?: string;
}

const Commcard: React.FC<CommcardProps> = (props) => {
  const { type, appdate, facnm, airline, division, appqua, appnm, appcount, supdate } = props;

  return (
    <>
      <div className={`arrivalscard-root runupcard-root ${type ? 'card-t-' + type : ''}`}>
        <ul className="card-schedule">
          <li>
            <span>신청일자</span>
            <em className="date">{appdate}</em>
          </li>
          <li>
            <span>시설구분</span>
            <em className="small">{facnm}</em>
          </li>
          <li>
            <span>항공사</span>
            <em className="small">{airline}</em>
          </li>
          <li>
            <span>신청구분</span>
            <em className="small">{division}</em>
          </li>
        </ul>
        <ul className="card-schedule">
          <li>
            <span>신청수량</span>
            <em className="small">{appqua}</em>
          </li>
          <li>
            <span>승인구분</span>
            <em className="small">{appnm}</em>
          </li>
          <li>
            <span>승인수량</span>
            <em className="small">{appcount}</em>
          </li>
          <li>
            <span>지급일자</span>
            <em className="date">{supdate}</em>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Commcard;
