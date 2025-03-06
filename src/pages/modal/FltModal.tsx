import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';
import { Tabs, TabContent } from '@components/tabs';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const FltModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal id={'notice-modal'} isOpen={isOpen} onClose={onClose} title={'FLT'} fullSize>
      <>
        <Tabs type="modal">
          <TabContent label="DEPARTURE">
            <main className="portal-main">
              <div className="portal-cont">
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
                      <td>
                        <button type="button">OZ721</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ36</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">NQ8476</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ721</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ36</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">NQ8476</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ721</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ36</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">NQ8476</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ721</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ36</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">NQ8476</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </TabContent>
          <TabContent label="ARRIVAL">
            <main className="portal-main">
              <div className="portal-cont">
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
                      <td>
                        <button type="button">OZ721</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">OZ36</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>
                        <button type="button">NQ8476</button>
                      </td>
                      <td>09:00</td>
                      <td>74Y</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </TabContent>
        </Tabs>

        <ModalAction>
          <ModalButton label="취소" onClick={onClose} />
          <ModalButton styleType="confirm" label="적용" onClick={onClose} />
          <ModalButton styleType="delete" label="초기화" onClick={() => {}} />
        </ModalAction>
      </>
    </Modal>
  );
};