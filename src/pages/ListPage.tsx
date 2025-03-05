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
              <th rowSpan={2}>Portal</th>
              <td>
                <Link to="/portal" target="_blank">
                  Main
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/error" target="_blank">
                  시스템점검
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <th rowSpan={10}>설정</th>
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
                <Link to="/set-login" target="_blank">
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
              <th rowSpan={4}>계정신청</th>
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
            {/* 공통관리 */}
            <tr>
              <th rowSpan={7}>공통관리</th>
              <td>
                <Link to="/guide" target="_blank">
                  이용가이드
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/manual" target="_blank">
                  매뉴얼
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/terms" target="_blank">
                  이용약관
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/notify" target="_blank">
                  알림
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/notify-empty" target="_blank">
                  알림내용 없음
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
                <Link to="/account-user-edit" target="_blank">
                  사용자정보관리
                </Link>
              </td>
              <td>비번초기화 OTP 발송 Confirm</td>
            </tr>
            {/* 계정관리 */}
            <tr>
              <th rowSpan={7}>계정관리</th>
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
                <Link to="/account-edit-manage" target="_blank">
                  사용자관리 상세
                </Link>
              </td>
              <td>변경 승인 Confirm / 변경 반려 Modal</td>
            </tr>
            {/* 공지사항 */}
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
            {/* A-CDM */}
            <tr>
              <th rowSpan={7}>A-CDM</th>
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
            <tr>
              <td>
                <Link to="/weather" target="_blank">
                  기상정보
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/notam" target="_blank">
                  NOTAM/ATFM
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/notam-detail" target="_blank">
                  NOTAM/ATFM 상세
                </Link>
              </td>
              <td></td>
            </tr>
            {/* TTOT */}
            <tr>
              <th>TTOT</th>
              <td>
                <Link to="/ttot" target="_blank">
                  TTOT
                </Link>
              </td>
              <td></td>
            </tr>
            {/* 통계 */}
            <tr>
              <th rowSpan={8}>통계</th>
              <td>
                <Link to="/stats" target="_blank">
                  통계 메인
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/operstat" target="_blank">
                  항공기 운항현황
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/traffstat" target="_blank">
                  항공 교통량 현황
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/tranostat" target="_blank">
                  항공 교통량 순위
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/rate" target="_blank">
                  정시율
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/rateno" target="_blank">
                  정시율 순위
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/tobtc" target="_blank">
                  TOBT 변경 횟수
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/flystat" target="_blank">
                  항공기 운항현황
                </Link>
              </td>
              <td></td>
            </tr>
            {/* 즐겨찾기 */}
            <tr>
              <th rowSpan={2}>즐겨찾기</th>
              <td>
                <Link to="/bookmark" target="_blank">
                  즐겨찾기
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/bookmark-empty" target="_blank">
                  즐겨찾기 목록 없음
                </Link>
              </td>
              <td></td>
            </tr>
            {/* 항공기관제 */}
            <tr>
              <th rowSpan={2}>항공기관제</th>
              <td>
                <Link to="/ac-total" target="_blank">
                  Total Panel
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/ac-deicing" target="_blank">
                  Deicing Information
                </Link>
              </td>
              <td></td>
            </tr>

            {/* 운항계획 */}
            <tr>
              <th rowSpan={3}>운항계획</th>
              <td>
                <Link to="/fp" target="_blank">
                  현행 운항 스케쥴 조회
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/fp-arrivals" target="_blank">
                  현행 도착 스케쥴 상세
                </Link>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Link to="/fp-departures" target="_blank">
                  현행 출발 스케쥴 상세
                </Link>
              </td>
              <td></td>
            </tr>

            {/* 자원배정 */}
            <tr>
              <th>자원배정</th>
              <td>
                <Link to="/rs-sca" target="_blank">
                  자원배정
                </Link>
              </td>
              <td></td>
            </tr>
          </table>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ListPage;
