import React from 'react';

interface RunupcardProps {
  type?: 'request' | 'approved' | 'rejected' | string;
  status?: string;
  reqdate?: string;
  reqno?: string;
  currstand?: string;
  reqstand?: string;
  fromDate?: string;
  fromTime?: string;
  to?: string;
}

const RunupCard: React.FC<RunupcardProps> = (props) => {
  const { type, status, reqdate, reqno, currstand, reqstand, fromDate, fromTime, to } = props;

  return (
    <>
      <div className={`arrivalscard-root runupcard-root ${type ? 'card-t-' + type : ''}`}>
        <ul className="card-schedule">
          <li>
            <span>Status</span>
            <em className="time">{status}</em>
          </li>
          <li>
            <span>Req Date</span>
            <em className="time">{reqdate}</em>
          </li>
          <li>
            <span>Req No</span>
            <em className="time">{reqno}</em>
          </li>
        </ul>

        <ul className="card-schedule">
          <li>
            <span>Curr Stand</span>
            <em className="time">{currstand}</em>
          </li>
          <li>
            <span>Req Stand</span>
            <em className="time">{reqstand}</em>
          </li>
          <li>
            <span>From</span>
            <em className="date">
              <span>{fromDate}</span>
              <span>{fromTime}</span>
            </em>
          </li>
          <li>
            <span>To</span>
            <em className="time">{to}</em>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RunupCard;
