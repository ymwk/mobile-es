import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@components/layout';
import RunupCard from '@components/content/RunupcardComponent';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import { Radiogroup } from '@components/input';
import { ActionButton } from '@components/button';
import { useNavigate } from 'react-router-dom';

const cardArray = [
  {
    type: 'request',
    status: 'Request',
    reqdate: '11-22',
    reqno: 'HL7414',
    currstand: '21',
    reqstand: '802',
    fromDate: '2025.03.08',
    fromTime: '12-08',
    to: '12-09',
    url: '/rs-hpm-detail',
  },
  {
    type: 'approved',
    status: 'Request',
    reqdate: '11-22',
    reqno: 'HL7413',
    currstand: '21',
    reqstand: '802',
    fromDate: '2025.03.08',
    fromTime: '12-08',
    to: '12-09',
    url: '/rs-hpm-detail',
  },
  {
    type: 'rejected',
    status: 'Request',
    reqdate: '11-20',
    reqno: 'HL7412',
    currstand: '21',
    reqstand: '802',
    fromDate: '2025.03.08',
    fromTime: '12-08',
    to: '12-09',
    url: '/rs-hpm-detail',
  },
];

const requestArray = cardArray.filter((item) => item.type === 'request');
const approvedArray = cardArray.filter((item) => item.type === 'approved');
const rejectedArray = cardArray.filter((item) => item.type === 'rejected');

const RsHpmPage: React.FC = () => {
  const [radioVal, setRadioVal] = useState('all');
  const navigate = useNavigate();
  
  return (
    <>
      <div className="wrapper">
        <Header title="Hangar Pad Management" />

        <div className="search-root">
          <div className="runup-datepk-wrap">
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
              <Datepk />
            </LocalizationProvider>
          </div>
          <Radiogroup
            name={'runup-radio'}
            type="type4"
            select={radioVal}
            onChange={(e) => {
              const selectedValue = e.target.value;
              setRadioVal(selectedValue);
            }}
            items={[
              {
                label: 'ALL',
                value: 'all',
              },
              {
                label: 'Request',
                value: 'request',
              },
              {
                label: 'Approved',
                value: 'approved',
              },
              {
                label: 'Rejected',
                value: 'rejected',
              },
            ]}
          />
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            {radioVal === 'all' && (
              <>
                <div className="arrivalscard-list">
                  {cardArray.map((item) => (
                    <div className="arrivalscard-wrap" key={item.status}>
                      <RunupCard
                        type={item.type}
                        status={item.status}
                        reqdate={item.reqdate}
                        reqno={item.reqno}
                        currstand={item.currstand}
                        reqstand={item.reqstand}
                        fromDate={item.fromDate}
                        fromTime={item.fromTime}
                        to={item.to}
                      />
                      <Link to={item.url} className="arrivalscard-link" />
                    </div>
                  ))}
                </div>
              </>
            )}
            {radioVal === 'request' && (
              <>
                <div className="arrivalscard-list">
                  {requestArray.map((item) => (
                    <div className="arrivalscard-wrap" key={item.status}>
                      <RunupCard
                        type={item.type}
                        status={item.status}
                        reqdate={item.reqdate}
                        reqno={item.reqno}
                        currstand={item.currstand}
                        reqstand={item.reqstand}
                        fromDate={item.fromDate}
                        fromTime={item.fromTime}
                        to={item.to}
                      />
                      <Link to={item.url} className="arrivalscard-link" />
                    </div>
                  ))}
                </div>
              </>
            )}
            {radioVal === 'approved' && (
              <>
                {approvedArray.map((item) => (
                  <div className="arrivalscard-wrap" key={item.status}>
                    <RunupCard
                      type={item.type}
                      status={item.status}
                      reqdate={item.reqdate}
                      reqno={item.reqno}
                      currstand={item.currstand}
                      reqstand={item.reqstand}
                      fromDate={item.fromDate}
                      fromTime={item.fromTime}
                      to={item.to}
                    />
                    <Link to={item.url} className="arrivalscard-link" />
                  </div>
                ))}
              </>
            )}
            {radioVal === 'rejected' && (
              <>
                {rejectedArray.map((item) => (
                  <div className="arrivalscard-wrap" key={item.status}>
                    <RunupCard
                      type={item.type}
                      status={item.status}
                      reqdate={item.reqdate}
                      reqno={item.reqno}
                      currstand={item.currstand}
                      reqstand={item.reqstand}
                      fromDate={item.fromDate}
                      fromTime={item.fromTime}
                      to={item.to}
                    />
                    <Link to={item.url} className="arrivalscard-link" />
                  </div>
                ))}
              </>
            )}
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

export default RsHpmPage;
