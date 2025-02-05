import React from 'react';
import { Header } from '@components/layout';
import { ActionButton } from '@components/button';
import { Textfield } from '@components/input';
import { useModal } from '@hooks/useModal';
import { OtpModal } from '@pages/modal/OtpModal';

const AccountSearch2Page: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className="wrapper">
        <Header title="계정신청조회" />

        <main className="portal-main">
          <form method="post">
            <ul className="form-input-list">
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">성명</span>
                    <Textfield name="" placeholder="이름을 입력하세요." />
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">핸드폰 번호</span>
                    <div className="forms-row">
                      <div className="select-root" style={{ width: 100 }}>
                        <select>
                          <option>010</option>
                        </select>
                      </div>
                      <Textfield name="" placeholder="- 없이 숫자만 입력하세요." />
                    </div>
                  </label>
                </div>
              </li>
            </ul>
          </form>

          <table className="table-data">
            <tbody>
              <tr>
                <th>신청일</th>
                <td>2025-01-10</td>
              </tr>
              <tr>
                <th>신청권한</th>
                <td>A-CDM</td>
              </tr>
              <tr>
                <th>상태</th>
                <td>신청대기</td>
              </tr>
            </tbody>
          </table>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton label="계정신청 취소" onClick={openModal} />
            <ActionButton type="submit" styleType="confirm" label="조회" onClick={() => {}} />
          </div>
        </div>
      </div>

      <OtpModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default AccountSearch2Page;
