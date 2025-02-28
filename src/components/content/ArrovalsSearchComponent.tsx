import React from 'react';
import { Textfield, Checkbox } from '@components/input';
import { IconButton } from '@components/button';
import { useModal } from '@hooks/useModal';
import { RefreshModal } from '@pages/modal/RefreshModal';
import { HourpkModalOpen } from '@components/content/ModalopenComponent';

const RefreshModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      {/* 세팅된 시간마다 새로고침시 active className 추가되었다가 삭제 */}
      <IconButton icon="refresh" label="새로고침" onClick={openModal} className={'active'} />
      <RefreshModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const ArrovalsSearch: React.FC = () => {
  return (
    <>
      <form method="post">
        <div className="search-root">
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
            <div className="timepk-wrap">
              <Textfield value="10~14" width={80} readOnly />
              <HourpkModalOpen />
            </div>
            <div className="select-root flex-grow">
              <select>
                <option>전체</option>
                <option>종료편 제외</option>
                <option>종료편</option>
                <option>지연편</option>
              </select>
            </div>
          </div>
          <div className="search-row">
            <Textfield placeholder="편명, 도착지를 입력하세요" className="form-search" />
            <Checkbox name="" label="전체" />
            <RefreshModalOpen />
          </div>
        </div>
      </form>
    </>
  );
};

export { ArrovalsSearch };
