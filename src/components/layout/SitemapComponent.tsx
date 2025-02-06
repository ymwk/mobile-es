import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const Sitelist = [
    {
      name: '공지사항',
      icon: 'notice',
      type: 'link',
      link: '/notice',
      child: [],
    },
    {
      name: '운항계획(EP)',
      icon: 'ep',
      type: 'button',
      link: '',
      child: [
        {
          name: '현행 운항 스케쥴 조회',
          link: '/',
        },
        {
          name: 'Airport Operation',
          link: '/',
        },
      ],
    },
    {
      name: '자원배정(RS)',
      icon: 'rs',
      type: 'button',
      link: '',
      child: [
        {
          name: '공지사항',
          link: '/',
        },
        {
          name: 'Stand Change Alarm',
          link: '/',
        },
        {
          name: 'Special Flight 신청관리',
          link: '/',
        },
        {
          name: 'Runup Pad Management',
          link: '/',
        },
        {
          name: 'Hangar Pad Management',
          link: '/',
        },
        {
          name: '현행배정 변경/삭제 신청',
          link: '/',
        },
        {
          name: 'Change Request Monitoring',
          link: '/',
        },
        {
          name: '현행배정 조회',
          link: '/',
        },
        {
          name: '공용시설 신청관리',
          link: '/',
        },
      ],
    },
    {
      name: '항공기관제(AC)',
      icon: 'ac',
      type: 'button',
      link: '',
      child: [
        {
          name: '공지사항',
          link: '/',
        },
        {
          name: 'Total Panel',
          link: '/',
        },
        {
          name: 'De-icing Info',
          link: '/',
        },
        {
          name: 'RWY TRAFFIC',
          link: '/',
        },
      ],
    },
    {
      name: 'A-CDM',
      icon: 'acdm',
      type: 'button',
      link: '',
      child: [
        {
          name: 'ARRIVALS',
          link: '/arrivals',
        },
        {
          name: 'DEPARTURES',
          link: '/',
        },
        {
          name: '운항편 통계',
          link: '/',
        },
        {
          name: '기상정보',
          link: '/',
        },
        {
          name: '공지사항',
          link: '/',
        },
        {
          name: '즐겨찾기',
          link: '/',
        },
      ],
    },
    {
      name: '공통관리(CA)',
      icon: 'ca',
      type: 'button',
      link: '',
      child: [
        {
          name: '로그인',
          link: '/',
        },
        {
          name: '계정신청',
          link: '/',
        },
        {
          name: '계정관리/조회',
          link: '/',
        },
        {
          name: '사용자 관리',
          link: '/',
        },
        {
          name: '이용가이드',
          link: '/',
        },
        {
          name: '매뉴얼',
          link: '/',
        },
        {
          name: '이용약관',
          link: '/',
        },
        {
          name: '알림',
          link: '/',
        },
      ],
    },
    {
      name: '알림',
      icon: 'bell',
      type: 'link',
      link: '/notice',
      child: [],
    },
    {
      name: '즐겨찾기',
      icon: 'bookmark',
      type: 'link',
      link: '/notice',
      child: [],
    },
    {
      name: '사용자관리',
      icon: 'manage',
      type: 'link',
      link: '/notice',
      child: [],
    },
  ];

  return (
    <>
      <div className="nav-wrapper">
        <ul className="nav-list">
          {Sitelist.map((item, index) => {
            const [isFold, setisFold] = useState(true);

            const handleOpen = () => {
              setisFold(!isFold);
            };

            return (
              <li key={index}>
                {item.type === 'link' && (
                  <Link to={item.link} className="menu-root">
                    <span className="name">
                      <i className={`ico-root nav-${item.icon}`} />
                      {item.name}
                    </span>
                    <i className="ico-root gt" />
                  </Link>
                )}
                {item.type === 'button' && (
                  <>
                    <button type="button" className="menu-root" onClick={handleOpen}>
                      <span className="name">
                        <i className={`ico-root nav-${item.icon}`} />
                        {item.name}
                      </span>
                      <i className={`ico-root ${isFold ? 'dt' : 'ut'}`} />
                    </button>
                    <div className={`accordion-root ${isFold ? 'fold' : ''}`}>
                      <div className="child-list">
                        {item.child.map((child, index) => (
                          <Link key={index} to={child.link} className="link-child">
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export { Sitemap };
