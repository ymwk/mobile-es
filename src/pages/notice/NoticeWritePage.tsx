import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { Button, ActionButton } from '@components/button';
import { Textfield, Filefield } from '@components/input';

const NoticeWritePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="공지사항" />

        <main className="portal-main">
          <form method="post" className="flex-grow flex-column">
            <ul className="form-input-list flex-grow">
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">구분</span>
                    <div className="select-root">
                      <select>
                        <option>선택</option>
                      </select>
                    </div>
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <label>
                    <span className="label">제목</span>
                    <Textfield name="" placeholder="제목을 입력하세요." />
                  </label>
                </div>
              </li>
              <li className="flex-grow flex-column">
                <div className="textfield-root flex-grow flex-column">
                  <label className="flex-grow flex-column">
                    <span className="label">내용</span>
                    <textarea className="form-textarea"></textarea>
                  </label>
                </div>
              </li>
              <li>
                <div className="textfield-root">
                  <span className="label">파일첨부</span>
                </div>
                <ul className="form-filelist">
                  <li>
                    <Filefield name="" />
                    <Button label="add" styleType="icon" />
                  </li>
                  <li>
                    <Filefield name="" />
                    <Button label="del" styleType="icon" />
                  </li>
                  <li>
                    <Filefield name="" />
                    <Button label="del" styleType="icon" />
                  </li>
                </ul>
                <p className="input-msg">Jpg, png, gif, pptx, docx, hwp, 10MB이내</p>
              </li>
            </ul>
          </form>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              type="button"
              label="취소"
              onClick={() => {
                navigate('/notice');
              }}
            />
            <ActionButton
              type="submit"
              styleType="confirm"
              label="저장"
              onClick={() => {
                navigate('/notice');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeWritePage;