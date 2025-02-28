import React from 'react';
import { Header } from '@components/layout';

const RsSearchPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="현행배정 조회" />

        <main className="portal-main"></main>
      </div>
    </>
  );
};

export default RsSearchPage;