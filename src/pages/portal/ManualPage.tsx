import React from 'react';
import { Header } from '@components/layout';
import { IconButton } from '@components/button';

const ManualPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="매뉴얼" />

        <main className="portal-main">
          <ul className="notify-list">
            <li>
              <div className="cont">
                <p>항공사용 사용매뉴얼 3</p>
                <span className="date">2025-02-14</span>
              </div>
              <IconButton icon="pdf" label="pdf보기" className="btn" />
            </li>
            <li>
              <div className="cont">
                <p>항공사용 사용매뉴얼 2</p>
                <span className="date">2025-02-14</span>
              </div>
              <IconButton icon="pdf" label="pdf보기" className="btn" />
            </li>
            <li>
              <div className="cont">
                <p>항공사용 사용매뉴얼 1</p>
                <span className="date">2025-02-14</span>
              </div>
              <IconButton icon="pdf" label="pdf보기" className="btn" />
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default ManualPage;