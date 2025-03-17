import React from 'react';
import { IconButton } from '@components/button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import { FltModalOpen } from '@components/content/ModalopenComponent';

const SpecialFlightSearch: React.FC = () => {
  return (
    <>
      <form method="post">
        <div className="search-root">
          <div className="search-row">
            <span className="label">FLT</span>
            <div className="flex-grow">
              <FltModalOpen />
            </div>

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
            <div className="datepk-wrap">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <Datepk />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { SpecialFlightSearch };
