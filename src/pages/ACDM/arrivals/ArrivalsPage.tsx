import React from 'react';
import { Header } from '@components/layout';
import { ArrovalsSearch } from '@components/content/ArrovalsSearchComponent';
import ArrivalscardList from '@components/content/ArrivalscardListComponent';

const ArrivalsPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="ARRIVALS" />

        <ArrovalsSearch />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="search-result-top">
              <span className="date">2024.12.17</span>
              <span className="time">10~14</span>
              <span className="count">
                총<em>26</em>건
              </span>
            </div>

            <ArrivalscardList />
          </div>
        </main>
      </div>
    </>
  );
};

export default ArrivalsPage;
