import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { Textfield } from '@components/input';

const NoticelistPage: React.FC = () => {
  const navigate = useNavigate();

  const Noticelist = [
    {
      sort: 'new',
      title: '항공사별 40분전 TOBT준수율(12월) 및 A-CDM Q&A게시',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'normal',
      title: '모바일 ES 계정신청 안내',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'normal',
      title: 'ATFM 흐름관리실행',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'new',
      title: '모바일 ES 사용안내(이메일 주소 수정)',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'normal',
      title: '모바일 ES 계정신청 안내',
      date: '2025-01-10 09:10',
    },
  ];

  return (
    <>
      <div className="wrapper">
        <Header title="공지사항" />

        <Tabs>
          <TabContent label="전체">
            <main className="search-main">
              <div className="search-box">
                <Textfield placeholder="제목 또는 내용을 입력해주세요" className="form-search" />
              </div>
              <div className="search-result">
                <div className="search-result-top">
                  <span className="count">
                    전체<em>26</em>건
                  </span>
                </div>

                <div className="notice-list">
                  {Noticelist.map((item, index) => (
                    <div
                      className="notice-item"
                      key={index}
                      onClick={() => {
                        navigate('/notice-detail');
                      }}
                    >
                      <span className={`sort ${item.sort}`}>
                        {item.sort == 'new' && '신규'}
                        {item.sort == 'normal' && '일반'}
                      </span>
                      <em className="title">{item.title}</em>
                      <span className="date">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </main>

            <div className="portal-action">
              <div className="action-inner">
                <ActionButton
                  type="submit"
                  styleType="confirm"
                  label="조회"
                  onClick={() => {
                    navigate('/notice-search');
                  }}
                />
              </div>
            </div>
          </TabContent>
          <TabContent label="A-CDM"></TabContent>
          <TabContent label="AC"></TabContent>
          <TabContent label="RS"></TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default NoticelistPage;