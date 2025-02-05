import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Header } from '@components/layout';
import { Stepper } from '@components/stepper';
import { ActionButton } from '@components/button';

const SignupStep2Page: React.FC = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="wrapper">
        <Header title='계정신청' />

        <Stepper
          items={[
            '개인정보수집',
            '정보보호 서약서',
            '신청서 작성'
          ]}
          active={2}
        />

        <main className="portal-main">
          <div className="terms-root">

            <div className='terms-section'>
              <p className='terms-msg'>인천국제공항공사(이하 "공사"라 함)에 직.간접적으로
                근무하는 모든 인원들은 아래의 보안사항을 준수할 것임을
                입증하는 서약서에 서명해야 합니다. 본 서약서의 내용은
                회사에 근무하는 기간뿐만 아니라, 퇴직 후에도 동일하게 적용됨을 인식하고 서명하기 전에 반드시 숙독해 주시기 바랍니다.
              </p>
            </div>

            <div className='terms-section'>
              <div className="terms-box">
                <ol className='terms-list'>
                  <li>1. 나는 공사에 관한 정보와 비밀유지 대상으로 지정된 정보에 대해서는 공사의 승인을 받은 경우에만 이용한다.</li>

                  <li>2. 나는 공사로부터 얻은 정보, 자산의 모든 지적 재산권 및 권리는 특별히 명시하지 않는 한 공사에 귀속되며 이를 공사의 승인 없이 내 외부에 유출, 공개하지 않는다.</li>

                  <li>3. 나는 업무와 관련한 각종 문서, 디스켓, PC 및 매뉴얼 등 정보 기록매체에 대하여 파괴, 유출</li>
                </ol>
              </div>
            </div>

            <div className='terms-section'>
              <p className='terms-msg notice'>본인은 이상과 같은 서약사항을 숙지하여 성실히 준수할 것을 
              동의하며, 위반했을 경우에는 관련 법령에 의한 민형사항 책임과 공사 보안관련 제 규정에 따른 징계조치 등 어떠한 처벌도 감수하겠습니다.
              </p>
            </div>
          </div>
          {/* terms-root end */}
          <div className='terms-bottom'>
            위와 같이 정보보호 서약서를 확인하십니까?
          </div>
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              label='이전'
              onClick={() => { navigate('/signup'); }}
            />
            <ActionButton
              type='submit'
              styleType='confirm'
              label='다음'
              onClick={() => { navigate('/signup3'); }}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupStep2Page;
