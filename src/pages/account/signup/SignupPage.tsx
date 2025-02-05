import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '@components/layout';
import { Stepper } from '@components/stepper';
import { Checkbox } from '@components/input';
import { ActionButton } from '@components/button';

const SignupPage: React.FC = () => {
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
          active={1}
        />

        <main className="portal-main">
          <div className="terms-root">
            <h2 className='terms-header'>인천공항 모바일ES 이용약관</h2>

            <section className='terms-section'>
              <div className='terms-title'>
                <h3 className='title'>모바일ES 이용약관</h3>
                <span className='label-required'>필수</span>

                <div className="option">
                  <Checkbox
                    type='type2'
                    name=''
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>

              <div className="terms-box fixed">
                <h4 className='title'>이용약관</h4>
                <p>1. 본 어플리케이션은~</p>
              </div>
            </section>

            <section className='terms-section'>
              <div className='terms-title'>
                <h3 className='title'>개인정보 수집‧이용 내역</h3>
                <span className='label-required'>필수</span>

                <div className="option">
                  <Checkbox
                    type='type2'
                    name=''
                    onChange={() => {}}
                    required
                  />
                </div>
              </div>

              <table className='table-data'>
                <tbody>
                  <tr>
                    <th>항목</th>
                    <td>성명, ID, 회사명, 휴대전화번호</td>
                  </tr>
                  <tr>
                    <th>수집이용목적</th>
                    <td>모바일 ES 서비스 제공</td>
                  </tr>
                  <tr>
                    <th>보유기간</th>
                    <td className='important'>
                      1. 계정 해지 시까지<br/>
                      2. 최종 로그인부터 6개월까지
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <div>
                <p>해당 회사의 중간관리자가 계정승인을 위해 개인정보를 확인할 수 있습니다.</p>
                <p>위의 개인정보 수집•이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 원활한 서비스 제공에 일부 제한을 받을 수 있습니다</p>
              </div>
            </section>
          </div>
          {/* terms-root end */}
        </main>

        <div className="portal-action">
          <div className="action-inner">
            <ActionButton
              label='이전'
              onClick={() => { navigate('/'); }}
            />
            <ActionButton
              type='submit'
              styleType='confirm'
              label='다음'
              onClick={() => { navigate('/signup2'); }}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
