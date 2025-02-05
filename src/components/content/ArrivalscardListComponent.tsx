import React from 'react';
import { useNavigate } from 'react-router-dom';
import Arrivalscard from './ArrivalscardComponent';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';

const arrivalArray = [
  {
    logo: logo_koreanair,
    company: '대한항공',
    url: '/arrivals-detail',
  },
  {
    logo: logo_asiana,
    company: '아시아나',
    url: '/arrivals-detail',
  },
  {
    company: '항공사',
    url: '/arrivals-detail',
  },
];

const ArrivalscardList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="Arrivalscard-list">
        {arrivalArray.map((item, idx) => {
          return (
            <div className="Arrivalscard-wrap" key={idx}>
              <Arrivalscard company={item.company} logo={item.logo} />
              <button
                type="button"
                onClick={() => {
                  navigate(`${item.url}`);
                }}
              ></button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArrivalscardList;
