import React, { useState } from 'react';
import { Header } from '@components/layout';
import { TooltipHelp } from '@components/popover'
import Gimscard from '@components/content/GimscardComponent';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';
import { ActionButton } from '@components/button';

const RsGimsPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const getIsOpen = (val: boolean) => setIsOpen(val);
  return (
    <>
      <div className="wrapper">
        <Header title="Gate IDD Message Sending" />

        <div className="search-root">
          <div className="search-row">
            <div className="flex-grow">
              <div className="search-row">
                <span>터미널</span>
                <div className="select-root" style={{ width: 100 }}>
                  <select>
                    <option>1시간</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="search-row">
              <span>게이트</span>
              <div className="select-root" style={{ width: 100 }}>
                <select>
                  <option>1시간</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <main className="portal-main search-main">
          <div className="portal-cont">
            <div className="search-result-top">
              <span className="date">2024.12.17</span>
              <span className="time">12:14:31</span>
              <div className="tooltip-wrapper">
                <TooltipHelp title="Tip">
                  <ul className="tooltip-list">
                    <li>현재 화면에서 IDD메시지를 저장하더라도, Gate FIA화면의 IDD칸에는 자동 표출되지 않습니다.</li>
                    <li>Gate FIA 사용시 반드시 Refresh를 눌러 마지막으로 저장된 내용을 확인하시기 바랍니다.</li>
                    <li>현재 화면과 Gate FIA화면 동시 사용(저장)시, 데이터가 정상 반영되지 않을 수 있습니다.</li>
                  </ul>
                </TooltipHelp>
                <span>Tip</span>
              </div>
            </div>
            {/* search-result-top end */}

            <div className="arrivalscard-list">
              <Gimscard company={'아시아나'} logo={logo_asiana} getIsOpen={getIsOpen} />
            </div>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            {isOpen ? (
              <>
                <ActionButton label="취소" onClick={() => {}} />
                <ActionButton label="저장" type="submit" styleType="confirm" onClick={() => {}} />
              </>
            ) : (
              <>
                <ActionButton label="조회" styleType="confirm" onClick={() => {}} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RsGimsPage;