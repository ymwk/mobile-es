import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { Textfield } from '@components/input';

const NoticeresultPage: React.FC = () => {
  const navigate = useNavigate();

  const Noticelist = [
    {
      sort: 'normal',
      title: (
        <>
          <span className="result">ATFM</span> 흐름관리실행
        </>
      ),
      date: '2025-01-10 09:10',
    },
    {
      sort: 'normal',
      title: (
        <>
          <span className="result">ATFM</span> 흐름관리실행
        </>
      ),
      date: '2025-01-10 09:10',
    },
    {
      sort: 'normal',
      title: (
        <>
          <span className="result">ATFM</span> 흐름관리실행
        </>
      ),
      date: '2025-01-10 09:10',
    },
    {
      sort: 'normal',
      title: (
        <>
          <span className="result">ATFM</span> 흐름관리실행
        </>
      ),
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
                <Textfield placeholder="제목 또는 내용을 입력해주세요" value="ATFM" className="form-search" />
              </div>
              <div className="search-result">
                <div className="search-result-top">
                  <span>
                    <em>"ATFM"</em>에 대한 검색결과
                  </span>
                  <span className="count">
                    전체<em>4</em>건
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
          </TabContent>
          <TabContent label="A-CDM">
            <main className="search-main">
              <div className="search-box">
                <Textfield placeholder="제목 또는 내용을 입력해주세요" value="ATFMXX" className="form-search" />
              </div>
              <div className="search-result">
                <div className="notice-list">
                  <div className="notice-item noresult">
                    <div className="notice-result">
                      <i className="ico-root nodata" />
                      <p className="title">"ATFMXX"에 대한 내역이 없습니다.</p>
                      <p>키워드를 변경한 후 다시 검색하세요.</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="AC">
            <main className="search-main">
              <div className="search-box">
                <Textfield placeholder="제목 또는 내용을 입력해주세요" value="뷁" className="form-search" />
              </div>
              <div className="search-result">
                <div className="notice-list">
                  <div className="notice-item noresult">
                    <div className="notice-result">
                      <i className="ico-root nodata" />
                      <p className="title">해당 내역이 없습니다.</p>
                      <p>데이터를 변경한 후 다시 검색하세요.</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="RS"></TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default NoticeresultPage;
