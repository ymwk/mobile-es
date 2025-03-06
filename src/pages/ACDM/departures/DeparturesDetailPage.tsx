import React from 'react';
import { Header } from '@components/layout';
import Departurescarddetail from '@components/content/DeparturescarddetailComponent';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';

const DeparturesDetailPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="DEPARTURES" />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <Departurescarddetail
              company={'대한항공'}
              logo={logo_koreanair}
              isBookmark={true}
              isSnow={true}
              isArt={true}
              isTobt={true}
              type={'normal'}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default DeparturesDetailPage;
