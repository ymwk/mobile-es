import React from 'react';
import { Header } from '@components/layout';
import { ArrovalsSearch } from '@components/content/ArrovalsSearchComponent';
import DeparturesList from '@components/content/DeparturesListComponent';
import { IconButton } from '@components/button';
import { useModal } from '@hooks/useModal';
import { MilestoneModal } from '@pages/modal/MilestoneModal';

const MilestoneModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <IconButton label="도움말" icon="help" onClick={openModal} />
      <MilestoneModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

const DeparturesPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="DEPARTURES" />

        <ArrovalsSearch />

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="departures-legend">
              <ul className="departures-legend-list">
                <li>
                  <span className="legend card-b-01" />
                  <span>TOBT 자동생성</span>
                </li>
                <li>
                  <span className="legend card-b-02" />
                  <span>TOBT 정상입력</span>
                </li>
                <li>
                  <span className="legend card-b-03" />
                  <span>TOBT 입력/수정필요</span>
                </li>
              </ul>
              <div className="departures-legend-btn">
                <MilestoneModalOpen />
              </div>
            </div>

            <div className="search-result-top">
              <span className="date">2024.12.17</span>
              <span className="time">10~14</span>
              <span className="count">
                총<em>26</em>건
              </span>
            </div>

            <DeparturesList />
          </div>
        </main>
      </div>
    </>
  );
};

export default DeparturesPage;
