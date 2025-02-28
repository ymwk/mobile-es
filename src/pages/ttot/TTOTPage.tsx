import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { Textfield } from '@components/input';

const TTOTPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="TTOT(목표 이륙시간)" />

        <div className="search-root">
          <Textfield placeholder="편명을 입력하세요" className="form-search" />
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <Tabs type="cdm-ttot">
              <TabContent label="33R"></TabContent>
              <TabContent label="15L"></TabContent>
              <TabContent label="33L" disabled></TabContent>
              <TabContent label="15R" disabled></TabContent>
              <TabContent label="34R"></TabContent>
              <TabContent label="16L"></TabContent>
              <TabContent label="34L"></TabContent>
              <TabContent label="16R" disabled></TabContent>
            </Tabs>
          </div>
        </main>
        <div className="portal-action">
          <div className="action-inner">
            <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TTOTPage;