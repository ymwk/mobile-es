import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';

const NoticedetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="공지사항" />

        <main className="portal-main">
          <div className="notice-header">
            <h3 className="title">IIS 시스템 개인정보 파기 공지</h3>
            <div className="info">
              <span>2025-01-10 09:10</span>
              <span>조회 1054</span>
            </div>
          </div>
          <ul className="notice-file-list">
            <li>
              <Link to="">
                <span>20250108 모바일 ES 개인정보 유의사항.pdf</span>
                <span className="ico-root download">
                  <span className="blind">다운로드</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>20250108 모바일 ES 매뉴얼.pdf</span>
                <span className="ico-root download">
                  <span className="blind">다운로드</span>
                </span>
              </Link>
            </li>
          </ul>
          <div className="notice-body">
            안녕하세요.
            <br />
            <br />
            계정 신청 및 사용을 첨부로 안내해드립니다.
            <br />
            비밀번호, 휴대폰 번호는 로그인 후 상단의 이름을 클릭하여 직접 수정이 가능합니다.
            <br />
            <br />
            *TOBT입력 항공사/조업사는 아래 정보를 회사 이메일 계정으로 lis@airport.kr에 송부해주시기 바랍니다.
            <br />
            (소속 확인목적, 기존 엑셀 양식과 내용동일)
            <br />
          </div>
        </main>

        <div className="notice-nav">
          <div className="notice-nav-item">
            <small>이전글</small>
            <p className="title">이전 글이 없습니다.</p>
          </div>
          <div className="notice-nav-item">
            <small>다음글</small>
            <p className="title">
              <Link to="#">[일반]흐름관리실행 발령번호</Link>
            </p>
          </div>
        </div>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              type="button"
              label="수정"
              onClick={() => {
                navigate('/notice-write');
              }}
            />
            <ActionButton
              type="button"
              styleType="confirm"
              label="목록"
              onClick={() => {
                navigate('/notice');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticedetailPage;
