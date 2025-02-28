import React from 'react';
import { Header } from '@components/layout';

const RsCrmPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="Change Request Monitoring" />

        <main className="portal-main"></main>
      </div>
    </>
  );
};

export default RsCrmPage;