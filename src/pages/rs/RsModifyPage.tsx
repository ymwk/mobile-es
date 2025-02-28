import React from 'react';
import { Header } from '@components/layout';

const RsModifyPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="현행배정 변경/삭제 신청" />

        <main className="portal-main"></main>
      </div>
    </>
  );
};

export default RsModifyPage;