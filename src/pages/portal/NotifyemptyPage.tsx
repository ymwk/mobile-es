import React, { useState } from 'react';
import { Header } from '@components/layout';
import { Button } from '@components/button';

const NotifyemptyPage: React.FC = () => {
  const [isDel, setIsDel] = useState(false);
  return (
    <>
      <div className="wrapper">
        <Header title="알림" />

        <div className="notify-header">
          <p className="msg">
            최근 3개월 동안의 알람을 확인할 수 있습니다.
            <br />
            현재 앱에서 수신된 내역부터 조회됩니다.
          </p>
          <Button label="삭제" styleType="small" onClick={() => setIsDel(!isDel)} />
        </div>

        <main className="portal-main">
          <div className="notify-wrap">
            <div className="nodata-item">
              <i className="ico-root nodata" />
              <p className="title">받으신 알림이 없습니다.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotifyemptyPage;
