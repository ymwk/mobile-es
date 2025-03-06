import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { Tabs, TabContent } from '@components/tabs';
import Arrivalscard from '@components/content/ArrivalscardComponent';
import Departurescard from '@components/content/DeparturescardComponent';
import logo_koreanair from '@assets/images/logo/logo_koreanair.png';
import logo_asiana from '@assets/images/logo/logo_asiana.jpg';

const BookmarkPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="wrapper">
        <Header title="즐겨찾기" />

        <Tabs>
          <TabContent label="전체">
            <main className="portal-main search-main">
              <div className="portal-cont">
                <div className="arrivalscard-list">
                  <div className="arrivalscard-wrap">
                    <Arrivalscard company="대한항공" logo={logo_koreanair} isBookmark={true} />
                    <button
                      type="button"
                      className="arrivalscard-link"
                      onClick={() => {
                        navigate('/arrivals-detail');
                      }}
                    />
                  </div>

                  <div className="arrivalscard-wrap">
                    <Departurescard
                      company={'아시아나'}
                      logo={logo_asiana}
                      isBookmark={true}
                      isSnow={true}
                      isArt={true}
                      isTobt={true}
                      type={'auto'}
                    />
                    <button
                      type="button"
                      className="arrivalscard-link"
                      onClick={() => {
                        navigate('/departures-detail');
                      }}
                    />
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="도착편">
            <main className="portal-main search-main">
              <div className="portal-cont">
                <div className="arrivalscard-list">
                  <div className="arrivalscard-wrap">
                    <Arrivalscard company="대한항공" logo={logo_koreanair} isBookmark={true} />
                    <button
                      type="button"
                      className="arrivalscard-link"
                      onClick={() => {
                        navigate('/arrivals-detail');
                      }}
                    />
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
          <TabContent label="출발편">
            <main className="portal-main search-main">
              <div className="portal-cont">
                <div className="arrivalscard-list">
                  <div className="arrivalscard-wrap">
                    <Departurescard
                      company={'아시아나'}
                      logo={logo_asiana}
                      isBookmark={true}
                      isSnow={true}
                      isArt={true}
                      isTobt={true}
                      type={'normal'}
                    />
                    <button
                      type="button"
                      className="arrivalscard-link"
                      onClick={() => {
                        navigate('/departures-detail');
                      }}
                    />
                  </div>
                </div>
              </div>
            </main>
          </TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default BookmarkPage;
