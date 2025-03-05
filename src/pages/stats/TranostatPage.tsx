import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import 'dayjs/locale/ko';

const TranostatPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="항공 교통량 순위" />

        <div className="search-root">
          <div className="search-row">
            <span className="label">기준일자</span>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
              <Datepk />
            </LocalizationProvider>
          </div>
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <Tabs type="cdm-sm">
              <TabContent label="운항현황"></TabContent>
              <TabContent label="운항지연"></TabContent>
            </Tabs>
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

export default TranostatPage;