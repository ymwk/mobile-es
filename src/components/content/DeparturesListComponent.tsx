import React from 'react';
import { useNavigate } from 'react-router-dom';
import Departurescard from './DeparturescardComponent';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';

const arrivalArray = [
  {
    logo: logo_koreanair,
    company: '대한항공',
    url: '/departures-detail',
    type: 'b-01',
    bookmark: true,
    snow: true,
    art: true,
    tobt: false,
  },
  {
    logo: logo_asiana,
    company: '아시아나',
    url: '/departures-detail',
    type: 'b-02',
    bookmark: false,
    snow: true,
    art: true,
    tobt: true,
  },
  {
    logo: '',
    company: '항공사',
    url: '/departures-detail',
    type: 'b-03',
    bookmark: false,
    snow: false,
    art: false,
    tobt: false,
  },
];


const DeparturesList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="arrivalscard-list">
        {arrivalArray.map((item, idx) => {
          return (
            <div className="arrivalscard-wrap" key={idx}>
              <Departurescard
                company={item.company}
                logo={item.logo}
                isBookmark={item.bookmark}
                isSnow={item.snow}
                isArt={item.art}
                isTobt={item.tobt}
                className={`card-` + item.type}
              />
              <button
                type="button"
                className="arrivalscard-link"
                onClick={() => {
                  navigate(`${item.url}`);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DeparturesList;
