import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { Textfield } from '@components/input';

const NotamPage: React.FC = () => {
  const navigate = useNavigate();

  const Notamlist = [
    {
      sort: 'appoint',
      title: 'NOTAM번호 : A1511/24',
      start: '2410310000(UTC)',
      end: '2410310800(UTC)',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'edit',
      title: 'NOTAM번호 : A1511/24',
      start: '2410310000(UTC)',
      end: '2410310800(UTC)',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'appoint',
      title: 'NOTAM번호 : A1511/24',
      start: '2410310000(UTC)',
      end: '2410310800(UTC)',
      date: '2025-01-10 09:10',
    },
  ];

  const Atfmlist = [
    {
      sort: 'appoint',
      title: 'ATFM 흐름관리실행',
      start: '202410310000',
      end: '20241031 02:34:50',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'edit',
      title: 'ATFM 흐름관리실행',
      start: '202410310000',
      end: '20241031 02:34:50',
      date: '2025-01-10 09:10',
    },
    {
      sort: 'appoint',
      title: 'ATFM 흐름관리실행',
      start: '202410310000',
      end: '20241031 02:34:50',
      date: '2025-01-10 09:10',
    },
  ];
  return (
    <>
      <div className="wrapper">
        <Header title="NOTAM/ATFM" />

        <Tabs>
          <TabContent label="NOTAM">
            <div className="search-root">
              <Textfield placeholder="제목 또는 내용을 입력해주세요" className="form-search" />
            </div>
            <main className="portal-main search-main">
              <div className="portal-cont">
                <div className="search-result-top">
                  <span className="count">
                    전체<em>26</em>건
                  </span>
                </div>
                <div className="notice-list">
                  {Notamlist.map((item, index) => (
                    <div
                      className="notice-item"
                      key={index}
                      onClick={() => {
                        navigate('/notam-detail');
                      }}
                    >
                      <span className={`sort ${item.sort}`}>
                        {item.sort == 'appoint' && '발령'}
                        {item.sort == 'edit' && '수정'}
                      </span>
                      {item.sort == 'appoint' && <span className="ico-label">발령</span>}
                      {item.sort == 'edit' && <span className="ico-label c-err">수정</span>}

                      <p className="title">
                        <em>{item.title}</em>
                        <em>발효일시 : {item.start}</em>
                        <em>종료일시 : {item.end}</em>
                      </p>
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

          <TabContent label="ATFM">
            <div className="search-root">
              <Textfield placeholder="제목 또는 내용을 입력해주세요" className="form-search" />
            </div>
            <main className="portal-main search-main">
              <div className="portal-cont">
                <div className="search-result-top">
                  <span className="count">
                    전체<em>26</em>건
                  </span>
                </div>
                <div className="notice-list">
                  {Atfmlist.map((item, index) => (
                    <div
                      className="notice-item"
                      key={index}
                      onClick={() => {
                        navigate('/notam-detail');
                      }}
                    >
                      <span className={`sort ${item.sort}`}>
                        {item.sort == 'appoint' && '발령'}
                        {item.sort == 'edit' && '수정'}
                      </span>
                      {item.sort == 'appoint' && <span className="ico-label">발령</span>}
                      {item.sort == 'edit' && <span className="ico-label c-err">수정</span>}

                      <p className="title">
                        <em>{item.title}</em>
                        <em>발령번호 : {item.start}</em>
                        <em>발령일시 : {item.end}</em>
                      </p>
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
        </Tabs>
      </div>
    </>
  );
};

export default NotamPage;
