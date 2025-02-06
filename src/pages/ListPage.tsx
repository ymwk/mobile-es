import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '@components/layout';

import logo from '@assets/images/logo/logo_incheon.svg';

const ListPage: React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header main>
          <h1 className="header-portal-logo">
            <img src={logo} alt="인천공항 로고" />
            <span>모바일 ES</span>
          </h1>
        </Header>
        <main className="portal-main">
          <table className="table-data">
            <tr>
              <th rowSpan={3}>Login</th>
              <td rowSpan={3}>
                <Link to="/" target="_blank">
                  Login
                </Link>
              </td>
              <td>본인인증 Modal</td>
            </tr>
            <tr>
              <td>공지사항 Modal</td>
            </tr>
            <tr>
              <td>개인정보처리방침 Modal</td>
            </tr>
            <tr>
              <th>Portal</th>
              <td>
                <Link to="/portal" target="_blank">
                  Main
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <th rowSpan={4}>Signup</th>
              <td>
                <Link to="/signup" target="_blank">
                  개인정보수집
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/signup2" target="_blank">
                  정보보호서약서
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/signup3" target="_blank">
                  신청서작성
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/signup4" target="_blank">
                  신청완료
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <th rowSpan={10}>
                Account
                <br />
                Manage
              </th>
              <td>
                <Link to="/account-search" target="_blank">
                  계정신청 조회
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/account-edit" target="_blank">
                  계정신청 변경/해지
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/account-edit-rec" target="_blank">
                  계정신청 변경 접수완료
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/account-break-rec" target="_blank">
                  계정해지 접수완료
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/account-search-cancel" target="_blank">
                  계정신청 대기상태
                </Link>
              </td>
              <td>OTP확인 Modal</td>
            </tr>
            <tr>
              <td>
                <Link to="/account-cancel" target="_blank">
                  계정신청 취소 완료
                </Link>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>
                <Link to="/account-user" target="_blank">
                  사용자관리
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/account-edit-manage" target="_blank">
                  사용자관리 상세
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/account-search-2" target="_blank">
                  계정신청 조회-대기상태
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/account-user-edit" target="_blank">
                  사용자정보변경
                </Link>
              </td>
              <td></td>
            </tr>

            <tr>
              <th rowSpan={4}>A-CDM</th>
              <td rowSpan={2}>
                <Link to="/arrivals" target="_blank">
                  Arrivals
                </Link>
              </td>
              <td>시간선택 Modal</td>
            </tr>
            <tr>
              <td>새로고침 시간설정 Modal</td>
            </tr>
            <tr>
              <td rowSpan={2}>
                <Link to="/arrivals-detail" target="_blank">
                  Arrivals 상세
                </Link>
              </td>
              <td>즐겨찾기 Alert</td>
            </tr>
            <tr>
              <td>언어선택 Confirm</td>
            </tr>
          </table>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ListPage;
