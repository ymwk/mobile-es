import React from 'react';
import { Link } from 'react-router-dom';
import Arrivalscard from '@components/content/ArrivalscardComponent';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';

const arrivalArray = [
  {
    logo: logo_koreanair,
    company: '대한항공',
    url: '/arrivals-detail',
    bookmark: true,
  },
  {
    logo: logo_asiana,
    company: '아시아나',
    url: '/arrivals-detail',
    bookmark: false,
  },
  {
    company: '항공사',
    url: '/arrivals-detail',
    bookmark: false,
  },
];

const ArrivalscardList: React.FC = () => {
  return (
    <>
      <div className="arrivalscard-list">
        {arrivalArray.map((item, idx) => {
          return (
            <div className="arrivalscard-wrap" key={idx}>
              <Arrivalscard company={item.company} logo={item.logo} isBookmark={item.bookmark} />
              <Link to={item.url} className="arrivalscard-link"/>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArrivalscardList;
