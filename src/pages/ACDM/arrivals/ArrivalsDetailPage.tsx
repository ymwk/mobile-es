import React from 'react';
import { Header } from '@components/layout';
import Arrivalscard from '@components/content/ArrivalscardComponent';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';

const ArrivalsDetailPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="ARRIVALS" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <Arrivalscard company={'대한항공'} logo={logo_koreanair} extend />
          </div>
        </main>
      </div>
    </>
  );
};

export default ArrivalsDetailPage;
