import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const Sitelist = [
    {
      name: '공지사항',
      icon: 'notice',
      link: '/notice',
      child: [],
    },
    {
      name: 'A-CDM',
      icon: 'acdm',
      link: '',
      child: [
        {
          name: '도착편 운항정보',
          link: '/arrivals',
        },
        {
          name: '출발편 운항정보',
          link: '/departures',
        },
        {
          name: 'TTOT(목표 이륙시간)',
          link: '/ttot',
        },
        {
          name: '통계',
          link: '/stats',
        },
        {
          name: '즐겨찾기',
          link: '/bookmark',
        },
        {
          name: 'NOTAM/ATFM​',
          link: '/notam',
        },
        {
          name: '기상정보',
          link: '/weather',
        },
      ],
    },
    {
      name: '항공기관제',
      icon: 'ac',
      link: '',
      child: [
        {
          name: 'Total Panel​',
          link: '/ac-total',
        },
        {
          name: 'Deicing Information',
          link: '/ac-deicing',
        },
      ],
    },
    {
      name: '운항계획',
      icon: 'ep',
      link: '/fp',
      child: [],
    },
    {
      name: '자원배정',
      icon: 'rs',
      link: '',
      child: [
        {
          name: 'Stand Change Alarm​',
          link: '/rs-sca',
        },
        {
          name: 'Special Flight 신청관리',
          link: '/rs-sf',
        },
        {
          name: 'Runup Pad Management',
          link: '/rs-rpm',
        },
        {
          name: 'Hangar Pad Management',
          link: '/rs-hpm',
        },
        {
          name: '현행배정 변경/삭제 신청',
          link: '/rs-modify',
        },
        {
          name: 'Change Request Monitoring',
          link: '/rs-crm',
        },
        {
          name: '현행배정 조회',
          link: '/rs-search',
        },
        {
          name: '공용시설 신청관리',
          link: '/rs-comm',
        },
        {
          name: 'Gate IDD Message Sending',
          link: '/rs-gims',
        },
      ],
    },
    {
      name: '공통관리',
      icon: 'ca',
      link: '',
      child: [
        {
          name: '이용가이드',
          link: '/guide',
        },
        {
          name: '매뉴얼',
          link: '/manual',
        },
        {
          name: '이용약관',
          link: '/terms',
        },
        {
          name: '알림',
          link: '/notify',
        },
        {
          name: '사용자 관리',
          link: '/account-user',
        },
        {
          name: '사용자 정보관리',
          link: '/account-user-edit',
        },
      ],
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
                {item.child.length === 0 ? (
                  <Link to={item.link} className="menu-root">
                    <span className="name">
                      <i className={`ico-root nav-${item.icon}`} />
                      {item.name}
                    </span>
                    <i className="ico-root gt" />
                  </Link>
                ) : (
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
