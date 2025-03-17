import { useState } from 'react';
import { Radiogroup } from '@components/input';
import { IconButton } from '@components/button';
import { FltModalOpen } from './ModalopenComponent';

function FlightSearch(props: { getRadioValue: (val: string) => void }) {
  const [radioval, setRadioVal] = useState('');
  return (
    <>
      <form method="post">
        <div className="search-root">
          <div className="search-row">
            <span>FLT</span>
            <FltModalOpen />

            <Radiogroup
              name={'search-radio'}
              type="type4"
              select={radioval}
              onChange={(e) => {
                const selectedValue = e.target.value;
                setRadioVal(selectedValue);
                props.getRadioValue(selectedValue);
              }}
              items={[
                {
                  label: 'ALL',
                  value: 'all',
                },
                {
                  label: 'Arrive',
                  value: 'arrive',
                },
                {
                  label: 'Departure',
                  value: 'departure',
                },
              ]}
            />
          </div>
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
              <span>FST</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>
            <div className="search-row flex-grow">
              <span>Ter</span>
              <div className="select-root flex-grow">
                <select>
                  <option>ALL</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { FlightSearch };
