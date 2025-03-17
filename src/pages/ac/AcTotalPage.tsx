import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';
import { useModal } from '@hooks/useModal';
import { Textfield } from '@components/input';
import { TimescopeModal } from '@pages/modal/TimescopeModal';
import { FltModalOpen } from '@components/content/ModalopenComponent';

const AcTotalPage: React.FC = () => {

  const TimesetModalOpen = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
      <>
        <button onClick={openModal} />
        <TimescopeModal isOpen={isOpen} onClose={closeModal} />
      </>
    );
  };

  return (
    <>
      <div className="wrapper">
        <Header title="Total Panel" />

        <div className="search-root">
          <div className="search-row">
            <span className="label">FLT</span>
            <FltModalOpen />
            <div className="search-row search-time">
              <span className="label">Time Scope</span>
              <Textfield value="1H" readOnly />
              <TimesetModalOpen />
            </div>
          </div>
        </div>

        <Tabs>
          <TabContent label="Departure">
            <main className="portal-main search-main">
              <div className="portal-cont">
                <Tabs type="cdm-sm">
                  <TabContent label="Departure">
                    <table className="table-list c-t01">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>ETD</th>
                          <th>TYP</th>
                          <th>GATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>09:00</td>
                          <td>74Y</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>OZ36</td>
                          <td>09:05</td>
                          <td>772</td>
                          <td>22</td>
                        </tr>
                        <tr>
                          <td>NQ8476</td>
                          <td>09:30</td>
                          <td>76Y</td>
                          <td>624</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="Apron">
                    <table className="table-list c-t01">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>TYP</th>
                          <th>GATE</th>
                          <th>RQ</th>
                          <th>O/B</th>
                          <th>R/O</th>
                          <th>RWY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>74Y</td>
                          <td>119</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>15L</td>
                        </tr>
                        <tr>
                          <td>OZ721</td>
                          <td>74Y</td>
                          <td>119</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>
                            <i className="ico-root snow-b">
                              <span className="blind">Icing</span>
                            </i>
                          </td>
                          <td>15L</td>
                        </tr>
                        <tr>
                          <td>NQ8476</td>
                          <td>74Y</td>
                          <td>119</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>15L</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="Towing">
                    <table className="table-list c-t01">
                      <thead>
                        <tr>
                          <th>G-H</th>
                          <th>OFF</th>
                          <th>ON</th>
                          <th>O/B</th>
                          <th>I/B</th>
                          <th>TYP</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>362</td>
                          <td>12</td>
                          <td>27</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>74Y</td>
                        </tr>
                        <tr>
                          <td>362</td>
                          <td>12</td>
                          <td>27</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>74Y</td>
                        </tr>
                        <tr>
                          <td>362</td>
                          <td>12</td>
                          <td>27</td>
                          <td>09:00</td>
                          <td>09:00</td>
                          <td>74Y</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="De-Icing">
                    <table className="table-list c-t01">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>PAD</th>
                          <th>START</th>
                          <th>END</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>823</td>
                          <td>09:00</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>OZ721</td>
                          <td>823</td>
                          <td>09:00</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>OZ721</td>
                          <td>823</td>
                          <td>09:00</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="De-Icing PAD">
                    <table className="table-list c-t01">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>PAD NO</th>
                          <th>PAD STAT</th>
                          <th>STAT COLOR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>-</td>
                          <td>blue</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="Departed">
                    <table className="table-list c-t01">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>ATD</th>
                          <th>RWY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>TW291</td>
                          <td>09:00</td>
                          <td>15L</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                </Tabs>
              </div>
            </main>
            <div className="portal-action">
              <div className="action-inner">
                <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
              </div>
            </div>
          </TabContent>
          <TabContent label="Arrival">
            <main className="portal-main search-main">
              <div className="portal-cont">
                <Tabs type="cdm-sm" className="c-t02">
                  <TabContent label="Arrival">
                    <table className="table-list c-t02">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>ETD</th>
                          <th>TYP</th>
                          <th>GATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>09:00</td>
                          <td>74Y</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>OZ36</td>
                          <td>09:05</td>
                          <td>772</td>
                          <td>22</td>
                        </tr>
                        <tr>
                          <td>NQ8476</td>
                          <td>09:30</td>
                          <td>76Y</td>
                          <td>624</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="Landed">
                    <table className="table-list c-t02">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>ATA</th>
                          <th>RWY</th>
                          <th>TYP</th>
                          <th>GATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>09:00</td>
                          <td>-</td>
                          <td>321</td>
                          <td>45</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="Apron">
                    <table className="table-list c-t02">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>TYP</th>
                          <th>GATE</th>
                          <th>R/I</th>
                          <th>I/B</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>321</td>
                          <td>45</td>
                          <td>09:00</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                </Tabs>
              </div>
            </main>
            <div className="portal-action">
              <div className="action-inner">
                <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
              </div>
            </div>
          </TabContent>
          <TabContent label="Event">
            <main className="portal-main search-main">
              <div className="portal-cont">
                <Tabs type="cdm-sm" className="c-t03">
                  <TabContent label="Event">
                    <table className="table-list c-t03">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>TYP</th>
                          <th>EVENT</th>
                          <th>GATE</th>
                          <th>REMARK</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>321</td>
                          <td>GATE RETURN</td>
                          <td>45</td>
                          <td>01AB- ABRG</td>
                        </tr>
                        <tr>
                          <td>OZ721</td>
                          <td>321</td>
                          <td>GATE RETURN</td>
                          <td>45</td>
                          <td>01AB- ABRG</td>
                        </tr>
                        <tr>
                          <td>OZ721</td>
                          <td>321</td>
                          <td>GATE RETURN</td>
                          <td>45</td>
                          <td>01AB- ABRG</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                  <TabContent label="Divert">
                    <table className="table-list c-t03">
                      <thead>
                        <tr>
                          <th>FLT</th>
                          <th>DIVERT</th>
                          <th>DATE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>OZ721</td>
                          <td>ICN</td>
                          <td>09:30</td>
                        </tr>
                      </tbody>
                    </table>
                  </TabContent>
                </Tabs>
              </div>
            </main>
            <div className="portal-action">
              <div className="action-inner">
                <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
              </div>
            </div>
          </TabContent>
        </Tabs>
      </div>
    </>
  );
};

export default AcTotalPage;