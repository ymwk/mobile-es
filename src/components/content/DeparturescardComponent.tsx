import React from 'react';
import { BookmarkAlertOpen } from '@components/content/ModalopenComponent';
import logo_default from '@assets/images/logo/logo_incheon.svg';

export interface DeparturescardProps {
  company: string;
  logo?: any;
  isBookmark?: boolean;
  isSnow?: boolean;
  isArt?: boolean;
  isTobt?: boolean;
  type?: 'normal' | 'auto' | 'edit' | any;
}

const Departurescard: React.FC<DeparturescardProps> = (props) => {
  const { company, logo, isBookmark, isSnow, isArt, isTobt, type, ...other } = props;

  return (
    <>
      <div
        className={`arrivalscard-root ${type ? 'card-t-' + type : ''}`}
        {...other}
      >
        <div className="card-detail card-badge">
          <div className="card-logo">
            <img src={logo ? logo : logo_default} alt={company} />
          </div>
          <div className="card-info">
            <em className="flt">KE011</em>
            <span className="info">SOBT 19:45</span>
            <span>LAX(*HKG) / A388, #268,BOR</span>
          </div>
          <div className="card-option">
            <div className="icons">
              {isSnow && <i className="ico-root snow" />}
              {/* <i className={`ico-root bookmark ${isBookmark ? 'active' : ''}`} /> */}
              <BookmarkAlertOpen isBookmark={isBookmark} />
            </div>
            <span className="msg">
              64분 지연
              <br />
              (CODE)
            </span>
          </div>
        </div>

        <ul className="card-schedule">
          <li>
            <span>EOBT</span>
            <em className="time">11:50</em>
          </li>
          <li>
            <span>TOBT</span>
            <em className={`time ${isTobt ? 'mile-t-01' : ''}`}>12:00</em>
          </li>
          <li>
            <span>TSAT</span>
            <em className={`time ${isArt ? 'mile-t-03' : ''}`}>12:10</em>
          </li>
          <li>
            <span>TTOT</span>
            <em className={`time ${isArt ? 'mile-t-03' : ''}`}>12:10</em>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Departurescard;
