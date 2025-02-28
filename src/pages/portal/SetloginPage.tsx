import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { Button } from '@components/button';

const SetloginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="로그인 방식 설정" />

        <main className="portal-main">
          <ul className="setting-list">
            <li>
              <span>패턴</span>
              <span className="value">사용중</span>
            </li>
            <li>
              <span>지문</span>
              <Button
                styleType="small"
                label="설정"
                onClick={() => {
                  navigate('/set-note');
                }}
              />
            </li>
            <li>
              <span>PIN번호</span>
              <Button styleType="small" label="설정" />
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

export default SetloginPage;