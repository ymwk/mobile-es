import * as React from 'react';
import { Textfield } from '@components/input';
import { Button } from '@components/button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Datepk } from '@components/input';
import 'dayjs/locale/ko';

interface SearchGroupProps {
  className?: string;
}

const SearchGroup: React.FC<SearchGroupProps> = (props) => {
  const { className } = props;

  return (
    <>
      <form method="post">
        <div className={`search-root ${className ? className : ''}`}>
          <div className="search-row-wrapper">
            <label className="search-row" htmlFor="search-id">
              <span className="label">구분</span>

              <div className="select-root" style={{ width: 90 }}>
                <select id="search-id">
                  <option>전체</option>
                  <option>신규</option>
                  <option>변경</option>
                  <option>해지</option>
                </select>
              </div>
            </label>

            <div className="search-row flex-grow search-calendar">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <Datepk format={'MM-DD'} />
                ~
                <Datepk format={'MM-DD'} />
              </LocalizationProvider>
            </div>
          </div>

          <div className="search-row-wrapper">
            <div className="search-row">
              <label htmlFor="" className="label">
                상태
              </label>
              <div className="select-root" style={{ width: 90 }}>
                <select>
                  <option>전체</option>
                  <option>신청대기</option>
                  <option>반려</option>
                  <option>1차승인</option>
                  <option>승인완료</option>
                </select>
              </div>
            </div>

            <label className="search-row flex-grow">
              <span className="label">성명</span>
              <Textfield />
            </label>

            <Button label="초기화" styleType="confirm" />
          </div>
        </div>
      </form>
    </>
  );
};

export { SearchGroup };
