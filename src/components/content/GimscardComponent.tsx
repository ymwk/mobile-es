import React, { useState } from 'react';
import { IconButton } from '@components/button';
import logo_default from '@assets/images/logo/logo_incheon.svg';

interface GimscardProps {
  company: string;
  logo?: any;
  getIsOpen: (val: boolean) => void;
}

const GimscardComponent: React.FC<GimscardProps> = (props) => {
  const { company, logo, getIsOpen } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    const openState = !isOpen;
    setIsOpen(openState);
    getIsOpen(openState);
  };

  return (
    <>
      <div className="arrivalscard-root gimscard-root">
        <div className="card-detail">
          <div className="card-logo">
            <img src={logo ? logo : logo_default} alt={company} />
          </div>
          <div className="card-info">
            <em className="flt">OZ753</em>
            <ul className="key-list">
              <li>
                <span className="name">Status :</span>
                <span className="value">Ready</span>
              </li>
              <li>
                <span className="name">Ter :</span>
                <span className="value">P01</span>
              </li>
              <li>
                <span className="name">Gate :</span>
                <span className="value">33</span>
              </li>
              <li>
                <span className="name">Destination :</span>
                <span className="value">INC</span>
              </li>
            </ul>
          </div>
        </div>
        <ul className="card-schedule">
          <li>
            <span>
              STD
              <br />
              (SOBT)
            </span>
            <em className="time">11:50</em>
          </li>
          <li>
            <span>
              ETD
              <br />
              (SOBT)
            </span>
            <em className="time">12:00</em>
          </li>
          <li>
            <span>TOBT</span>
            <em className="time">12:10</em>
          </li>
          <li>
            <span>CTOT</span>
            <em className="time">-</em>
          </li>
          <li>
            <span>
              Twr
              <br />
              TSAT
            </span>
            <em className="time">-</em>
          </li>
        </ul>
        <div className="card-section-toggle section-gims">
          <IconButton icon={isOpen ? 'ut' : 'dt'} label="더보기" className="btn-toggle" onClick={toggleHandler} />

          {isOpen && (
            <>
              <form method="post">
                <ul className="form-input-list">
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">IDD(Free Remark1)</span>
                        <textarea className="form-textarea"></textarea>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">IDD(Free Remark2)</span>
                        <textarea className="form-textarea"></textarea>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">IDD(Free Remark3)</span>
                        <textarea className="form-textarea"></textarea>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="textfield-root">
                      <label>
                        <span className="label">IDD(Free Remark4)</span>
                        <textarea className="form-textarea"></textarea>
                      </label>
                    </div>
                  </li>
                </ul>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GimscardComponent;
