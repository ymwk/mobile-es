import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';

const BookmarkemptyPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="즐겨찾기" />

        <main className="">
          <div className="portal-action">
            <div className="action-inner">
              <ActionButton
                label="홈으로"
                styleType="confirm"
                onClick={() => {
                  navigate('/portal');
                }}
              />
            </div>
          </div>
        </main>

        <div className="nodata-item">
          <i className="ico-root nodata" />
          <p className="title">내용이 없습니다.</p> 
        </div>
      </div>
    </>
  );
};

export default BookmarkemptyPage;
