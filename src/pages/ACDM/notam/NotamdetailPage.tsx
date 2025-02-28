import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';

const NoticedetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="NOTAM/ATFM" />

        <main className="portal-main">
          <div className="notice-header">
            <span className='ico-label'>발령</span>
            <h3 className="title">NOTAM번호 : A1511/24</h3>
            <div className="title">
              <p>발효일시 : 2410310000(UTC)</p>
              <p>종료일시 : 2410310800(UTC)</p>
            </div>
            <div className="info">
              <span>2025-01-10 09:10</span>
              <span>조회 1054</span>
            </div>
          </div>
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
            <p>
              <Link to="#">
                (수정발령) NOTAM번호 : A1504/24 / 발효일시 : 2410280920(UTC) / 종료일시 : 2410290200(UTC)
              </Link>
            </p>
          </div>
          <div className="notice-nav-item">
            <small>다음글</small>
            <p>
              <Link to="#">
                (발령) NOTAM번호 : A1484/24 / 발효일시 : 2410310000(UTC) / 종료일시: 2410310800(UTC)
              </Link>
            </p>
          </div>
        </div>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              type="button"
              styleType="confirm"
              label="목록"
              onClick={() => {
                navigate('/notam');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticedetailPage;
