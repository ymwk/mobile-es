import React, { TouchEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Departurescard from './DeparturescardComponent';
import { IconButton } from '@components/button';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';

const arrivalArray = [
  {
    logo: logo_koreanair,
    company: '대한항공',
    url: '/departures-detail',
    type: 'auto',
    bookmark: true,
    snow: true,
    art: true,
    tobt: false,
  },
  {
    logo: logo_asiana,
    company: '아시아나',
    url: '/departures-detail',
    type: 'normal',
    bookmark: false,
    snow: true,
    art: true,
    tobt: true,
  },
  {
    logo: '',
    company: '항공사',
    url: '/departures-detail',
    type: 'edit',
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
          const [isTouch, setIsTouch] = useState(false);
          const [prevTouch, setPrevTouch] = useState<React.Touch | null>(null);

          const handleTouchMove: TouchEventHandler = (event) => {            
            const touch = event.touches[0]!;
            setPrevTouch(touch);
            if (!prevTouch) return;

            const diff = touch.pageX - prevTouch.pageX;
            if (diff > 0) {
              setIsTouch(true);
            } else if (diff < 0) {
              setIsTouch(false);
            }
          }
          
          return (
            <div
              className={`arrivalscard-wrap ${isTouch ? 'open' : ''}`}
              key={idx}
              onClick={() => {
                navigate(`${item.url}`);
              }}
              onTouchMove={handleTouchMove}
            >
              <IconButton icon="push" label="알림설정" className="button-card" />

              <Departurescard
                company={item.company}
                logo={item.logo}
                isBookmark={item.bookmark}
                isSnow={item.snow}
                isArt={item.art}
                isTobt={item.tobt}
                type={item.type}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DeparturesList;
