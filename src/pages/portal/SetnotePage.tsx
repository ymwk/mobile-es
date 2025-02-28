import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@components/layout';
import { Checkbox } from '@components/input';
import { ActionButton } from '@components/button';

const SetnotePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <Header title="유의사항 확인" />

        <main className="portal-main">
          <div className="setting-wrap">
            <Checkbox type="type2" label="전체동의" />
            <ul className="terms-box">
              <li>
                <Checkbox />
                <p className="desc">
                  지문인증을 이용하려는 본인의 스마트폰에 지문을 사전 등록해야 하며, 등록된 지문은 반드시 이용자 본인의
                  지문이어야 합니다.
                </p>
              </li>
              <li>
                <Checkbox />
                <p className="desc">
                  인천공항공사는 고객님의 지문정보를 저장하거나보관 하지 않으며, 고객님의 스마트폰에 저장된 지문을
                  이용하여 지문인증 서비스를 제공하므로 스마트폰에 등록된 지문의 관리 및 사용에 대한 책임은 고객님에게
                  있습니다.
                </p>
              </li>
              <li>
                <Checkbox />
                <p className="desc">
                  고객님의 지문정보가 타인에게 유출되지 않도록 유의해 주시기 바라며, 타인의 이용이 의심되는 경우, 즉시
                  스마트폰의 지문정보를 삭제하시고, 지문 서비스를 해지 또는 재등록하여 이용해야 합니다.
                </p>
              </li>
              <li>
                <Checkbox />
                <p className="desc">
                  인천공항공사는 고객님의 스마트폰에 저장된 지문정보와 고객님의 지문인증 이용 시 입력한 지문정보의 일치
                  여부를 확인한 결과값을 이용하여 인증을 진행합니다.
                </p>
              </li>
              <li>
                <Checkbox />
                <p className="desc">
                  총 누적 횟수 5회 지문정보가 일치하지 않을 경우,지문인증이 불가하오니 지문을 재설정하여 이용해야
                  합니다.
                </p>
              </li>
            </ul>
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton type="button" label="취소" onClick={() => {}} />
            <ActionButton
              type="button"
              styleType="confirm"
              label="다음"
              onClick={() => {
                navigate('/set-finger');
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SetnotePage;