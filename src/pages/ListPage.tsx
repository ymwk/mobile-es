import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '@components/layout';
// import { useModal } from '@hooks/useModal';

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
              <th>Login</th>
              <td>
                <Link to="/" target="_blank">
                  Login
                </Link>
              </td>
              <td>본인인증 Modal / 아이디찾기결과 Modal / 공지사항 Modal / 개인정보처리방침 Modal</td>
            </tr>

            <tr>
              <th rowSpan={11}>Portal</th>
              <td>
                <Link to="/portal" target="_blank">
                  Main
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/setting" target="_blank">
                  설정
                </Link>
              </td>
              <td>비밀번호 변경 Modal / 변경 완료 Confirm</td>
            </tr>
            <tr>
              <td>
                <Link to="/set-push" target="_blank">
                  푸쉬 알림 수신 설정
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/set-push" target="_blank">
                  로그인 방식 설정
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/set-note" target="_blank">
                  유의사항 확인
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/set-finger" target="_blank">
                  지문설정 안내
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/set-finger-err" target="_blank">
                  지문설정 안내 - 지원불가단말
                </Link>
              </td>
              <td>지원단말안내 Modal</td>
            </tr>
            <tr>
              <td>
                <Link to="/set-finger-rec" target="_blank">
                  지문설정 완료
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/set-finger-fail" target="_blank">
                  지문설정 실패
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/set-finger-edit" target="_blank">
                  지문설정 확인
                </Link>
              </td>
              <td>지문해지 Alert / 지문 확인 confirm / 지문 불일치 confirm</td>
            </tr>
            <tr>
              <td>
                <Link to="/set-finger-break" target="_blank">
                  지문해지 완료
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
              <th rowSpan={9}>
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
              <td>날짜 선택 Modal</td>
            </tr>
            <tr>
              <td>
                <Link to="/account-edit-manage" target="_blank">
                  사용자관리 상세
                </Link>
              </td>
              <td>변경 승인 Confirm / 변경 반려 Modal</td>
            </tr>
            <tr>
              <td>
                <Link to="/account-user-edit" target="_blank">
                  사용자정보변경
                </Link>
              </td>
              <td>비번초기화 OTP 발송 Confirm</td>
            </tr>

            <tr>
              <th rowSpan={4}>공지사항</th>
              <td>
                <Link to="/notice" target="_blank">
                  공지사항
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/notice-search" target="_blank">
                  공지사항 검색결과
                </Link>
              </td>
              <td>검색결과 없음</td>
            </tr>
            <tr>
              <td>
                <Link to="/notice-detail" target="_blank">
                  공지사항 상세
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/notice-write" target="_blank">
                  공지사항 작성
                </Link>
              </td>
              <td></td>
            </tr>

            <tr>
              <th rowSpan={4}>A-CDM</th>
              <td>
                <Link to="/arrivals" target="_blank">
                  Arrivals
                </Link>
              </td>
              <td>시간선택 Modal / 새로고침 시간설정 Modal</td>
            </tr>
            <tr>
              <td>
                <Link to="/arrivals-detail" target="_blank">
                  Arrivals 상세
                </Link>
              </td>
              <td>즐겨찾기 Alert / 언어선택 Confirm</td>
            </tr>

            <tr>
              <td>
                <Link to="/departures" target="_blank">
                  Departures
                </Link>
              </td>
              <td>시간선택 Modal / 새로고침 시간설정 Modal</td>
            </tr>
            <tr>
              <td>
                <Link to="/departures-detail" target="_blank">
                  Departures 상세
                </Link>
              </td>
              <td>즐겨찾기 Alert / 언어선택 Confirm</td>
            </tr>
          </table>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ListPage;
