import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { SearchGroup } from '@components/content/SearchGroupComponent';
const AccountUserPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header title="사용자관리" />

        <SearchGroup />

        <main className="portal-main">
          <div className="portal-cont">
            <div className="search-result-top">
              <span className="date">2024.12.17 ~ 2024.12.31</span>
              <span className="count">
                총<em>26</em>건
              </span>
            </div>

            <table className="table-list">
              <thead>
                <tr>
                  <th>구분</th>
                  <th>아이디</th>
                  <th>성명</th>
                  <th>신청일</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>신규</td>
                  <td>hhh123</td>
                  <td>홍길동</td>
                  <td>25-06-15</td>
                  <td>신청대기</td>
                </tr>
                <tr>
                  <td>신규</td>
                  <td>hhh123</td>
                  <td>홍길동</td>
                  <td>25-06-15</td>
                  <td>1차승인</td>
                </tr>
                <tr>
                  <td>변경</td>
                  <td>hhh123</td>
                  <td>홍길동</td>
                  <td>25-06-15</td>
                  <td>반려</td>
                </tr>
              </tbody>
            </table>
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

export default AccountUserPage;
