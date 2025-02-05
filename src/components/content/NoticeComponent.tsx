import React from 'react';
import { useModal } from '@hooks/useModal'
import { NoticeModal } from '@pages/modal/NoticeModal';

const Notice: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="index-box">
        <ul className="index-notice">
          <li>
            <button type="button" className="title" onClick={openModal}>IIS 시스템 개인정보 파기 공지</button> 
            <span className="date">2024-08-20</span>
          </li>
          <li>
            <button type="button" className="title" onClick={openModal}>리포트 출력 시 차트가 안나오는 경우</button>
            <span className="date">2024-08-20</span>
          </li>
          <li>
            <button type="button" className="title" onClick={openModal}>운항계획 일정 공지</button>
            <span className="date">2024-08-20</span>
          </li>
          <li>
            <button type="button" className="title" onClick={openModal}>(발령) 모바일 A-CDM 사용안내</button>
            <span className="date">2024-08-20</span>
          </li>
          <li>
            <button type="button" className="title" onClick={openModal}>(발령) ATFM 흐름관리실행 1</button>
            <span className="date">2024-08-20</span>
          </li>
        </ul>
      </div>
      
      <NoticeModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
    
  )
}

export default Notice