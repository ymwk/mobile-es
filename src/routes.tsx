import { lazy } from 'react';
import Layout from '@pages/_layout';

const List = lazy(() => import('@pages/ListPage'));
const Index = lazy(() => import('@pages/account/SigninPage'));
const PortalIndex = lazy(() => import('@pages/portal/MainPage'));
const Error = lazy(() => import('@pages/portal/ErrorPage'));

const Guide = lazy(() => import('@pages/portal/GuidePage'));
const Manual = lazy(() => import('@pages/portal/ManualPage'));
const Terms = lazy(() => import('@pages/portal/TermsPage'));
const Notify = lazy(() => import('@pages/portal/NotifyPage'));
const NotifyEmpty = lazy(() => import('@pages/portal/NotifyemptyPage'));

const Setting = lazy(() => import('@pages/portal/SettingPage'));
const SetPush = lazy(() => import('@pages/portal/SetpushPage'));
const SetLogin = lazy(() => import('@pages/portal/SetloginPage'));
const SetNote = lazy(() => import('@pages/portal/SetnotePage'));
const SetFinger = lazy(() => import('@pages/portal/SetfingerPage'));
const SetFingerErr = lazy(() => import('@pages/portal/SetfingererrPage'));
const SetFingerRec = lazy(() => import('@pages/portal/SetfingerrecPage'));
const SetFingerFail = lazy(() => import('@pages/portal/SetfingerfailPage'));
const SetFingerEdit = lazy(() => import('@pages/portal/SetfingereditPage'));
const SetFingerBreak = lazy(() => import('@pages/portal/SetfingerbreakPage'));

const SignupIndex = lazy(() => import('@pages/account/signup/SignupPage'));
const SignupStep2 = lazy(() => import('@pages/account/signup/SignupStep2Page'));
const SignupStep3 = lazy(() => import('@pages/account/signup/SignupStep3Page'));
const SignupComplete = lazy(() => import('@pages/account/signup/SignupCompletePage'));

const AccountSearch = lazy(() => import('@pages/account/manage/AccountSearchPage'));
const AccountEdit = lazy(() => import('@pages/account/manage/AccountEditPage'));
const AccountEditRec = lazy(() => import('@pages/account/manage/AccountEditRecPage'));
const AccountBreakRec = lazy(() => import('@pages/account/manage/AccountBreakRecPage'));
const AccountSearchCancel = lazy(() => import('@pages/account/manage/AccountSearchCancelPage'));
const AccountCancel = lazy(() => import('@pages/account/manage/AccountCancelPage'));
const AccountUser = lazy(() => import('@pages/account/manage/AccountUserPage'));
const AccountEditManage = lazy(() => import('@pages/account/manage/AccountEditManagePage'));
const AccountUserEdit = lazy(() => import('@pages/account/manage/AccountUserEditPage'));

const Arrivals = lazy(() => import('@pages/ACDM/arrivals/ArrivalsPage'));
const ArrivalsDetail = lazy(() => import('@pages/ACDM/arrivals/ArrivalsDetailPage'));

const Departures = lazy(() => import('@pages/ACDM/departures/DeparturesPage'));
const DeparturesDetail = lazy(() => import('@pages/ACDM/departures/DeparturesDetailPage'));

const Weather = lazy(() => import('@pages/ACDM/WeatherPage'));
const Notam = lazy(() => import('@pages/ACDM/notam/NotamPage'));
const NotamDetail = lazy(() => import('@pages/ACDM/notam/NotamdetailPage'));

const NoticeList = lazy(() => import('@pages/notice/NoticelistPage'));
const NoticeResult = lazy(() => import('@pages/notice/NoticeresultPage'));
const NoticeDetail = lazy(() => import('@pages/notice/NoticedetailPage'));
const Noticewrite = lazy(() => import('@pages/notice/NoticeWritePage'));

const TTOT = lazy(() => import('@pages/ttot/TTOTPage'));

const Stats = lazy(() => import('@pages/stats/StatsPage'));
const Operstat = lazy(() => import('@pages/stats/OperstatPage'));
const Traffstat = lazy(() => import('@pages/stats/TraffstatPage'));
const Tranostat = lazy(() => import('@pages/stats/TranostatPage'));
const Rate = lazy(() => import('@pages/stats/RatePage'));
const Rateno = lazy(() => import('@pages/stats/RatenoPage'));
const Tobtc = lazy(() => import('@pages/stats/TobtcPage'));
const Flystat = lazy(() => import('@pages/stats/FlystatPage'));

const Bookmark = lazy(() => import('@pages/bookmark/BookmarkPage'));
const FlightPlan = lazy(() => import('@pages/fp/FlightplanPage'));
const FlightPlanDetail = lazy(() => import('@pages/fp/FlightplandetailPage'));
const FlightPlanDetail2 = lazy(() => import('@pages/fp/Flightplandetail2Page'));
const Bookmarkempty = lazy(() => import('@pages/bookmark/BookmarkemptyPage'));

const AcTotal = lazy(() => import('@pages/ac/AcTotalPage'));
const AcDeicing = lazy(() => import('@pages/ac/AcDeicingPage'));

const RsSCA = lazy(() => import('@pages/rs/RsScaPage'));
const RsSF = lazy(() => import('@pages/rs/RsSfPage'));
const RsSFDetail = lazy(() => import('@pages/rs/RsSfDetailPage'));
const RsSFEdit = lazy(() => import('@pages/rs/RsSfEditPage'));
const RsRPM = lazy(() => import('@pages/rs/RsRpmPage'));
const RsRPMDetail = lazy(() => import('@pages/rs/RsRpmDetailPage'));
const RsRpmRequest = lazy(() => import('@pages/rs/RsRpmRequestPage'));
const RsHPM = lazy(() => import('@pages/rs/RsHpmPage'));
const RsHPMDetail = lazy(() => import('@pages/rs/RsHpmDetailPage'));
const RsHpmRequest = lazy(() => import('@pages/rs/RsHpmRequestPage'));
const RsModify = lazy(() => import('@pages/rs/RsModifyPage'));
const RsModifyDetail = lazy(() => import('@pages/rs/RsModifyDetailPage'));
const RsModifyRequest = lazy(() => import('@pages/rs/RsModifyRequestPage'));
const RsCRM = lazy(() => import('@pages/rs/RsCrmPage'));
const RsCRMDetail = lazy(() => import('@pages/rs/RsCrmDetailPage'));
const RsSearch = lazy(() => import('@pages/rs/RsSearchPage'));
const RsSearchDetail = lazy(() => import('@pages/rs/RsSearchDetailPage'));
const RsComm = lazy(() => import('@pages/rs/RsCommPage'));
const RsCommDetail = lazy(() => import('@pages/rs/RsCommDetailPage'));
const RsCommRequest = lazy(() => import('@pages/rs/RsCommRequestPage'));
const RsGIMS = lazy(() => import('@pages/rs/RsGimsPage'));



export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/list', element: <List /> },
      { path: '/', element: <Index /> },

      // 포털
      { path: '/portal', element: <PortalIndex /> },
      { path: '/error', element: <Error /> },

      // 설정
      { path: '/setting', element: <Setting /> },
      { path: '/set-push', element: <SetPush /> },
      { path: '/set-login', element: <SetLogin /> },
      { path: '/set-note', element: <SetNote /> },
      { path: '/set-finger', element: <SetFinger /> },
      { path: '/set-finger-err', element: <SetFingerErr /> },
      { path: '/set-finger-rec', element: <SetFingerRec /> },
      { path: '/set-finger-fail', element: <SetFingerFail /> },
      { path: '/set-finger-edit', element: <SetFingerEdit /> },
      { path: '/set-finger-break', element: <SetFingerBreak /> },

      //공통관리
      { path: '/guide', element: <Guide /> },
      { path: '/manual', element: <Manual /> },
      { path: '/terms', element: <Terms /> },
      { path: '/notify', element: <Notify /> },
      { path: '/notify-empty', element: <NotifyEmpty /> },

      // 계정신청
      { path: '/signup', element: <SignupIndex /> },
      { path: '/signup2', element: <SignupStep2 /> },
      { path: '/signup3', element: <SignupStep3 /> },
      { path: '/signup4', element: <SignupComplete /> },

      // 계정관리
      { path: '/account-search', element: <AccountSearch /> },
      { path: '/account-edit', element: <AccountEdit /> },
      { path: '/account-edit-rec', element: <AccountEditRec /> },
      { path: '/account-break-rec', element: <AccountBreakRec /> },
      { path: '/account-search-cancel', element: <AccountSearchCancel /> },
      { path: '/account-cancel', element: <AccountCancel /> },
      { path: '/account-user', element: <AccountUser /> },
      { path: '/account-edit-manage', element: <AccountEditManage /> },
      { path: '/account-user-edit', element: <AccountUserEdit /> },

      // A-CDM
      { path: '/arrivals', element: <Arrivals /> },
      { path: '/arrivals-detail', element: <ArrivalsDetail /> },

      { path: '/departures', element: <Departures /> },
      { path: '/departures-detail', element: <DeparturesDetail /> },

      { path: '/weather', element: <Weather /> },
      { path: '/notam', element: <Notam /> },
      { path: '/notam-detail', element: <NotamDetail /> },

      // 공지사항
      { path: '/notice', element: <NoticeList /> },
      { path: '/notice-search', element: <NoticeResult /> },
      { path: '/notice-detail', element: <NoticeDetail /> },
      { path: '/notice-write', element: <Noticewrite /> },

      // 통계
      { path: '/stats', element: <Stats /> },
      { path: '/operstat', element: <Operstat /> },
      { path: '/traffstat', element: <Traffstat /> },
      { path: '/tranostat', element: <Tranostat /> },
      { path: '/rate', element: <Rate /> },
      { path: '/rateno', element: <Rateno /> },
      { path: '/tobtc', element: <Tobtc /> },
      { path: '/flystat', element: <Flystat /> },

      // 목표이륙시간
      { path: '/ttot', element: <TTOT /> },

      // 즐겨찾기
      { path: '/bookmark', element: <Bookmark /> },
      { path: '/bookmark-empty', element: <Bookmarkempty /> },

      // 운항계획
      { path: '/fp', element: <FlightPlan /> },
      { path: '/fp-arrivals', element: <FlightPlanDetail /> },
      { path: '/fp-departures', element: <FlightPlanDetail2 /> },

      // 항공기관제
      { path: '/ac-total', element: <AcTotal /> },
      { path: '/ac-deicing', element: <AcDeicing /> },

      // 자원배정
      { path: '/rs-sca', element: <RsSCA /> },
      { path: '/rs-sf', element: <RsSF /> },
      { path: '/rs-sf-detail', element: <RsSFDetail /> },
      { path: '/rs-sf-edit', element: <RsSFEdit /> },
      { path: '/rs-rpm', element: <RsRPM /> },
      { path: '/rs-rpm-detail', element: <RsRPMDetail /> },
      { path: '/rs-rpm-request', element: <RsRpmRequest /> },
      { path: '/rs-hpm', element: <RsHPM /> },
      { path: '/rs-hpm-detail', element: <RsHPMDetail /> },
      { path: '/rs-hpm-request', element: <RsHpmRequest /> },
      { path: '/rs-modify', element: <RsModify /> },
      { path: '/rs-modify-detail', element: <RsModifyDetail /> },
      { path: '/rs-modify-request', element: <RsModifyRequest /> },
      { path: '/rs-crm', element: <RsCRM /> },
      { path: '/rs-crm-detail', element: <RsCRMDetail /> },
      { path: '/rs-search', element: <RsSearch /> },
      { path: '/rs-search-detail', element: <RsSearchDetail /> },
      { path: '/rs-comm', element: <RsComm /> },
      { path: '/rs-comm-detail', element: <RsCommDetail /> },
      { path: '/rs-comm-request', element: <RsCommRequest /> },
      { path: '/rs-gims', element: <RsGIMS /> },
    ],
  },
];

export const pages = [
  { route: '/list' },
  { route: '/' },
  { route: '/portal' },
  { route: '/error' },

  // 설정
  { route: '/setting' },
  { route: '/set-push' },
  { route: '/set-login' },
  { route: '/set-note' },
  { route: '/set-finger' },
  { route: '/set-finger-err' },
  { route: '/set-finger-rec' },
  { route: '/set-finger-fail' },
  { route: '/set-finger-edit' },
  { route: '/set-finger-break' },

  //공통관리
  { route: '/guide' },
  { route: '/manual' },
  { route: '/terms' },
  { route: '/notify' },
  { route: '/notify-empty' },

  // 계정신청
  { route: '/signup' },
  { route: '/signup2' },
  { route: '/signup3' },
  { route: '/signup4' },

  // 계정관리
  { route: '/account-search' },
  { route: '/account-edit' },
  { route: '/account-edit-rec' },
  { route: '/account-break-rec' },
  { route: '/account-search-cancel' },
  { route: '/account-cancel' },
  { route: '/account-user' },
  { route: '/account-edit-manage' },
  { route: '/account-user-edit' },

  // A-CDM
  { route: '/arrivals' },
  { route: '/arrivals-detail' },

  { prouteth: '/departures' },
  { route: '/departures-detail' },

  { route: '/weather' },
  { route: '/notam' },
  { route: '/notam-detail' },

  // 공지사항
  { route: '/notice' },
  { route: '/notice-search' },
  { route: '/notice-detail' },
  { route: '/notice-write' },

  // 통계
  { route: '/stats' },
  { route: '/operstat' },
  { route: '/traffstat' },
  { route: '/tranostat' },
  { route: '/rate' },
  { route: '/rateno' },
  { route: '/tobtc' },
  { route: '/flystat' },

  // 목표이륙시간
  { route: '/ttot' },

  // 즐겨찾기
  { route: '/bookmark' },
  { route: '/bookmark-empty' },

  // 운항계획
  { route: '/fp' },
  { route: '/fp-arrivals' },
  { route: '/fp-departures' },

  // 항공기관제
  { route: '/ac-total' },
  { route: '/ac-deicing' },

  // 자원배정
  { route: '/rs-sca' },
  { route: '/rs-sf' },
  { route: '/rs-sf-detail' },
  { route: '/rs-sf-edit' },
  { route: '/rs-rpm' },
  { route: '/rs-rpm-detail' },
  { route: '/rs-rpm-request' },
  { route: '/rs-hpm' },
  { route: '/rs-hpm-detail' },
  { route: '/rs-hpm-request' },
  { route: '/rs-modify' },
  { route: '/rs-modify-detail' },
  { route: '/rs-modify-request' },
  { route: '/rs-crm' },
  { route: '/rs-crm-detail' },
  { route: '/rs-search' },
  { route: '/rs-search-detail' },
  { route: '/rs-comm' },
  { route: '/rs-comm-detail' },
  { route: '/rs-comm-request' },
  { route: '/rs-gims' },
];