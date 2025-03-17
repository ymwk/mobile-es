import React from 'react';

interface CrmcardProps {
  type?: 'request' | 'approved' | 'rejected' | string;
  day?: string;
  tof?: string;
  hdc?: string;
  aln?: string;
  ter?: string;
  from?: string;
  to?: string;
  open?: string;
  close?: string;
  add1?: boolean;
}

const Crmcard: React.FC<CrmcardProps> = (props) => {
  const { type, day, tof, hdc, aln, ter, from, to, open, close, add1 } = props;

  return (
    <>
      <div className={`arrivalscard-root runupcard-root ${type ? 'card-t-' + type : ''}`}>
        <ul className="card-schedule">
          <li>
            <span>Day</span>
            <em className="time">{day}</em>
          </li>
          <li>
            <span>Tof</span>
            <em className="time">{tof}</em>
          </li>
          <li>
            <span>Hdc</span>
            <em className="time">{hdc}</em>
          </li>
          <li>
            <span>Aln</span>
            <em className="time">{aln}</em>
          </li>
          <li>
            <span>Ter</span>
            <em className="time">{ter}</em>
          </li>
        </ul>
        <ul className="card-schedule">
          <li>
            <span>From</span>
            <em className="time">{from}</em>
          </li>
          <li>
            <span>To</span>
            <em className="time">{to}</em>
          </li>
          <li>
            <span>Open</span>
            <em className="time">{open}</em>
          </li>
          <li>
            <span>Close</span>
            <em className="time">{close}</em>
          </li>
          <li>
            <span>+1</span>
            <em className="time">{add1 ? 'Y' : 'N'}</em>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Crmcard;
