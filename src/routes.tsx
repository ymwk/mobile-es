import { lazy } from 'react';
import Layout from '@pages/_layout';

const List = lazy(() => import('@pages/ListPage'));

const Index = lazy(() => import('@pages/account/SigninPage'));
const PortalIndex = lazy(() => import('@pages/portal/MainPage'));

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
const AccountSearch2 = lazy(() => import('@pages/account/manage/AccountSearch2Page'));
const AccountUserEdit = lazy(() => import('@pages/account/manage/AccountUserEditPage'));

const Arrivals = lazy(() => import('@pages/ACDM/arrivals/ArrivalsPage'));
const ArrivalsDetail = lazy(() => import('@pages/ACDM/arrivals/ArrivalsDetailPage'));

const NoticeList = lazy(() => import('@pages/notice/NoticelistPage'));
const NoticeResult = lazy(() => import('@pages/notice/NoticeresultPage'));
const Noticedetail = lazy(() => import('@pages/notice/NoticedetailPage'));
const Noticewrite = lazy(() => import('@pages/notice/NoticeWritePage'));

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/list', element: <List /> },
      { path: '/', element: <Index /> },
      { path: '/portal', element: <PortalIndex /> },
      { path: '/signup', element: <SignupIndex /> },
      { path: '/signup2', element: <SignupStep2 /> },
      { path: '/signup3', element: <SignupStep3 /> },
      { path: '/signup4', element: <SignupComplete /> },

      { path: '/account-search', element: <AccountSearch /> },
      { path: '/account-edit', element: <AccountEdit /> },
      { path: '/account-edit-rec', element: <AccountEditRec /> },
      { path: '/account-break-rec', element: <AccountBreakRec /> },
      { path: '/account-search-cancel', element: <AccountSearchCancel /> },
      { path: '/account-cancel', element: <AccountCancel /> },
      { path: '/account-user', element: <AccountUser /> },
      { path: '/account-edit-manage', element: <AccountEditManage /> },
      { path: '/account-search-2', element: <AccountSearch2 /> },
      { path: '/account-user-edit', element: <AccountUserEdit /> },

      { path: '/arrivals', element: <Arrivals /> },
      { path: '/arrivals-detail', element: <ArrivalsDetail /> },

      { path: '/notice', element: <NoticeList /> },
      { path: '/notice-search', element: <NoticeResult /> },
      { path: '/notice-detail', element: <Noticedetail /> },
      { path: '/notice-write', element: <Noticewrite /> },
    ],
  },
];

export const pages = [
  { route: '/list' },
  { route: '/' },
  { route: '/portal' },

  { route: '/signup' },
  { route: '/signup2' },
  { route: '/signup3' },
  { route: '/signup4' },
  { route: '/account-search' },
  { route: '/account-edit' },
  { route: '/account-edit-rec' },
  { route: '/account-break-rec' },
  { route: '/account-search-cancel' },
  { route: '/account-cancel' },
  { route: '/account-user' },
  { route: '/account-edit-manage' },
  { route: '/account-search-2' },
  { route: '/account-user-edit' },

  { route: '/arrivals' },
  { route: '/arrivals-detail' },

  { route: '/notice' },
  { route: '/notice-search' },
  { route: '/notice-detail' },
  { route: '/notice-write' },
];