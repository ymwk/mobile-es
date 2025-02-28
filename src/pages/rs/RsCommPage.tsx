import React from 'react';
import { Header } from '@components/layout';

const RsCommPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="공용시설 신청관리" />

        <main className="portal-main"></main>
      </div>
    </>
  );
};

export default RsCommPage;