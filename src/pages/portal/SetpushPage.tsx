import React from 'react';
import { Header } from '@components/layout';
import { Checkbox } from '@components/input';

const SetpushPage: React.FC = () => {  
  return (
    <>
      <div className="wrapper">
        <Header title="푸시 알림 수신 설정" />

        <main className="portal-main">
          <div className="portal-cont">
            <ul className="setting-checklist">
              <li>
                <span className="label">A-CDM</span>
                <div className="chk-list-btn">
                  <Checkbox name="" type="type3" label="TOBT조회" checked />
                  <Checkbox name="" type="type3" label="TOBT입력" />
                  <Checkbox name="" type="type3" label="제방빙신청 EEZT입력" />
                  <Checkbox name="" type="type3" label="공지사항" />
                </div>
              </li>
              <li>
                <span className="label">자원배정</span>
                <div className="chk-list-btn">
                  <Checkbox name="" type="type3" label="주기장관리" checked />
                  <Checkbox name="" type="type3" label="체크인 카운터 배정" />
                  <Checkbox name="" type="type3" label="항공기 관제운영" />
                  <Checkbox name="" type="type3" label="배정신청 조회" />
                  <Checkbox name="" type="type3" label="체크인 카운터 변경" />
                  <Checkbox name="" type="type3" label="공지사항" />
                </div>
              </li>
              <li>
                <span className="label">항공기관제</span>
                <div className="chk-list-btn">
                  <Checkbox name="" type="type3" label="공지사항" checked />
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default SetpushPage;