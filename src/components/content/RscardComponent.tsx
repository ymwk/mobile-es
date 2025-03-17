import React from 'react';

interface RscardProps {
  type?: 'request' | 'approved' | 'rejected' | string;
  hdc?: string;
  aln?: string;
  ter?: string;
  from?: string;
  to?: string;
  open?: string;
  close?: string;
  add1?: boolean;
}

const RsCard: React.FC<RscardProps> = (props) => {
  const { type, hdc, aln, ter, from, to, open, close, add1 } = props;

  return (
    <>
      <div className={`arrivalscard-root runupcard-root ${type ? 'card-t-' + type : ''}`}>
        <div className="flex-row">
          <ul className="card-schedule flex-column">
            <li>
              <span>Hdc</span>
              <em className="time">{hdc}</em>
            </li>
            <li>
              <span>Aln</span>
              <em className="time">{aln}</em>
            </li>
          </ul>

          <div className="flex-column flex-grow">
            <ul className="card-schedule">
              <li>
                <span>Ter</span>
                <em className="time">{ter}</em>
              </li>
              <li>
                <span>From</span>
                <em className="time">{from}</em>
              </li>
              <li>
                <span>To</span>
                <em className="time">{to}</em>
              </li>
            </ul>

            <ul className="card-schedule">
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
                <em className="time">
                  <span>{add1 ? 'Y' : 'N'}</span>
                </em>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RsCard;
