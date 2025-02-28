import { useState } from 'react';
import { Textfield, Radiogroup } from '@components/input';
import { IconButton } from '@components/button';
import { useModal } from '@hooks/useModal';
import { FltModal } from '@pages/modal/FltModal';

function FlightSearch(props: { getRadioValue: (val: string) => void }) {
  const [radioval, setRadioVal] = useState('');
  
  const FltModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <IconButton icon="search" onClick={openModal} label="편명조회" />
        <FltModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  }

  return (
    <>
      <form method="post">
        <div className="search-root">
          <div className="search-row">
            <span>FLT</span>
            <div className='flt-search'>
              <Textfield value="OZ" readOnly/>
              <FltModalOpen/>
            </div>

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
