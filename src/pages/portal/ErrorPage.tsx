import React from 'react';
import { Header } from '@components/layout';

const ErrorPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="시스템 점검" />

        <main className="portal-main">
          <div className="account-complete">
            <p className="title-em">시스템 점검 중입니다.</p>
            <p className="desc">
              현재 시스템을 새롭게 하기 위하여
              <br />
              시스템 개편 중입니다.
              <br />
              서비스 이용에 불편을 드려 죄송합니다.
            </p>

            <div className="box-msg em">
              <em>점검시간</em>
              <p className="desc c-state">
                2025년 7월 12일(월) 오후 10시 <br />~ 2025년 7월 13일 오전 06시
              </p>
            </div>
            <p className="desc">
              시스템 점검 후 더 나은 서비스로 찾아가겠습니다.
              <br />
              감사합니다.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default ErrorPage;