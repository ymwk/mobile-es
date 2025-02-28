import React, { useState } from 'react';
import { Header } from '@components/layout';
import { Button, IconButton } from '@components/button';

const NotifyPage: React.FC = () => {
  const [isDel, setIsDel] = useState(false);
  return (
    <>
      <div className="wrapper">
        <Header title="알림" />

        <main className="portal-main">
          <div className="notify-wrap">
            <div className="notify-header">
              <p className="msg">
                최근 3개월 동안의 알람을 확인할 수 있습니다.
                <br />
                현재 앱에서 수신된 내역부터 조회됩니다.
              </p>
              <Button label="삭제" styleType="small" onClick={() => setIsDel(!isDel)} />
            </div>

            <ul className="notify-list">
              <li>
                <div className="cont">
                  <p>KE001- TOBT가 변경되었습니다. KE001- TOBT가 변경되었습니다. : 05:00</p>
                  <span className="date">2025-02-14 09:10</span>
                </div>
                {isDel && <IconButton icon="close" label="삭제" className="small" />}
              </li>
              <li>
                <div className="cont">
                  <p>CTOT가 발부되었습니다. : 05:40</p>
                  <span className="date">2025-02-14 09:10</span>
                </div>
                {isDel && <IconButton icon="close" label="삭제" className="small" />}
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotifyPage;
