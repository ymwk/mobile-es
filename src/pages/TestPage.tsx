import React from 'react';
import { Textfield, Radiogroup, Datepk, Checkbox } from '@components/input';
import { Button } from '@components/button';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TestPage: React.FC = () => {
  return (
    <div className="test-wrap">
      <div>
        <p className="title">Page 36</p>
        <div className="flex-3">
          <table className="table-test list">
            <caption>전시관 목록</caption>
            <thead>
              <tr>
                <th colSpan={5}>순서조정</th>
              </tr>
              <tr>
                <th></th>
                <th>전시관</th>
                <th>
                  모바일
                  <br />
                  사용여부
                </th>
                <th>
                  시스템메뉴
                  <br />
                  사용여부
                </th>
                <th>코드(DT)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="checked">
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} checked />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">상설전시실 I</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0001</td>
              </tr>
              <tr>
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">상설전시실 II</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0002</td>
              </tr>
              <tr>
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">상설전시실 III</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0003</td>
              </tr>
              <tr>
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">기증전시실</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0004</td>
              </tr>
              <tr>
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">아카이브전시실</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0005</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <table className="table-test list">
            <caption>전시관 목록</caption>
            <thead>
              <tr>
                <th colSpan={5}>순서조정</th>
              </tr>
              <tr>
                <th></th>
                <th>전시실</th>
                <th>
                  모바일
                  <br />
                  사용여부
                </th>
                <th>
                  시스템메뉴
                  <br />
                  사용여부
                </th>
                <th>코드(DM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">동구의 형성과 역사</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0002</td>
              </tr>
              <tr>
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">동구의 산업화 생업 현장</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0003</td>
              </tr>
              <tr>
                <td>
                  <div className="radiogroup-root">
                    <label className="label">
                      <input type="radio" name={'tmp1'} />
                    </label>
                  </div>
                </td>
                <td>
                  <a href="#">동구의 문화와 교육</a>
                </td>
                <td>Y</td>
                <td>Y</td>
                <td>0004</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <table className="table-test">
            <caption className="white">s</caption>
            <thead>
              <tr>
                <th colSpan={3}>전시관 상세정보</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={2}>박물관</th>
                <td>수도국산달동네박물관</td>
              </tr>
              <tr>
                <th colSpan={2}>박물관</th>
                <td>DT0001</td>
              </tr>
              <tr className="short">
                <th rowSpan={5}>전시관명</th>
                <th>한국어</th>
                <td>동구의 형성과 역사</td>
              </tr>
              <tr className="short">
                <th>영어</th>
                <td>
                  <input type="text" placeholder="" className="input-comm" />
                </td>
              </tr>
              <tr className="short">
                <th>중국어</th>
                <td>
                  <input type="text" placeholder="" className="input-comm" />
                </td>
              </tr>
              <tr className="short">
                <th>일본어</th>
                <td>
                  <input type="text" placeholder="" className="input-comm" />
                </td>
              </tr>
              <tr className="short">
                <th>스페인어</th>
                <td>
                  <input type="text" placeholder="" className="input-comm" />
                </td>
              </tr>
              <tr>
                <th colSpan={2}>층정보</th>
                <td>
                  <div className="wrap-flex" style={{ width: '100%', justifyContent: 'space-between' }}>
                    지상 1층 <Button label="혼잡도 설정" />
                  </div>
                </td>
              </tr>
              <tr>
                <th colSpan={2}>층 색상</th>
                <td>#332492</td>
              </tr>
              <tr>
                <th colSpan={2}>모바일 사용여부</th>
                <td>Y</td>
              </tr>
              <tr>
                <th colSpan={2}>메뉴사용여부</th>
                <td>Y</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex-3">
        <table className="table-test list" style={{ flex: '1 1 70%' }}>
          <caption>전시관 / 전시실 관리</caption>
          <thead>
            <tr>
              <th>관 / 실 명</th>
              <th>전시관 / 실 내 안내여부</th>
              <th>이미지 안내여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="left">
                <a href="#">상설전시실 Ⅰ</a>
              </td>
              <td>Y</td>
              <td>Y</td>
            </tr>
            <tr>
              <td className="left">
                <a href="#">ㄴ 동구의 형성과 역사</a>
              </td>
              <td>Y</td>
              <td>Y</td>
            </tr>
            <tr className="checked">
              <td className="left">ㄴ 동구의 산업화와 생업 현장</td>
              <td>Y</td>
              <td>Y</td>
            </tr>
            <tr>
              <td className="left">
                <a href="#">ㄴ 동구의 문화와 교육</a>
              </td>
              <td>Y</td>
              <td>Y</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <table className="table-test list">
          <caption className="white">s</caption>
          <thead>
            <tr>
              <th>
                <Checkbox />
              </th>
              <th>전시안내여부</th>
              <th>제목</th>
              <th>등록(수정)자</th>
              <th>등록(수정)일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>전시안내중</td>
              <td>
                <a href="#">동구의 산업화와 생업 현장 전시안내 - 20170630</a>
              </td>
              <td>홍길동/학예부</td>
              <td>2025-01-30</td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>전시안내중</td>
              <td>
                <a href="#">동구의 산업화와 생업 현장 전시안내 - 20170830</a>
              </td>
              <td>홍길동/학예부</td>
              <td>2025-01-10</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex-3">
        <table className="table-test" style={{ flex: '1 1 70%' }}>
          <thead>
            <tr>
              <th colSpan={4}>진열장 기본정보</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>진열장전시안내여부</th>
              <td colSpan={3}>Y</td>
            </tr>
            <tr>
              <th>전시실위치</th>
              <td colSpan={3}>상설전시 I &gt; 동구의 산업화와 생업 현장</td>
            </tr>
            <tr>
              <th>비고</th>
              <td>-</td>
            </tr>
            <tr>
              <th>등록(수정)자</th>
              <td>홍길동/학예부</td>
              <th>최종등록(수정)일</th>
              <td>2025-01-30</td>
            </tr>
          </tbody>
        </table>

        <table className="table-test">
          <thead>
            <tr>
              <th colSpan={3}>진열장 전시안내정보</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2}>진열장번호</th>
              <td>1202</td>
            </tr>
            <tr className="short">
              <th rowSpan={5}>진열장주제</th>
              <th>한국어</th>
              <td>염매매 기탁업개시안내문</td>
            </tr>
            <tr className="short">
              <th>영어</th>
              <td>
                <input type="text" placeholder="" className="input-comm" />
              </td>
            </tr>
            <tr className="short">
              <th>중국어</th>
              <td>
                <input type="text" placeholder="" className="input-comm" />
              </td>
            </tr>
            <tr className="short">
              <th>일본어</th>
              <td>
                <input type="text" placeholder="" className="input-comm" />
              </td>
            </tr>
            <tr className="short">
              <th>스페인어</th>
              <td>
                <input type="text" placeholder="" className="input-comm" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="table-test">
        <caption>진열장 설명</caption>
        <tbody>
          <tr>
            <th rowSpan={3} className="th-n">
              한국어
            </th>
            <th className="th-n">내용</th>
            <td colSpan={3}>
              <input type="text" placeholder="관리자가 입력한 전시안내 내용이 보여집니다." className="input-comm" />
            </td>
          </tr>
          <tr>
            <th className="th-n">TTS</th>
            <td colSpan={3}>
              <input type="text" placeholder="관리자가 입력한 TTS 내용이 보여집니다." className="input-comm" />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성듣기</th>
            <td>
              <input type="text" placeholder="" className="input-comm" />
            </td>
            <th className="th-n">음성파일</th>
            <td>
              <a href="#">3452096187.mp3</a>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-test" style={{ marginTop: '-3.5rem' }}>
        <tbody>
          <tr>
            <th rowSpan={3} className="th-n">
              영어
            </th>
            <th className="th-n">내용</th>
            <td colSpan={3}>
              <input type="text" placeholder="관리자가 입력한 전시안내 내용이 보여집니다." className="input-comm" />
            </td>
          </tr>
          <tr>
            <th className="th-n">TTS</th>
            <td colSpan={3}>
              <input type="text" placeholder="관리자가 입력한 TTS 내용이 보여집니다." className="input-comm" />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성듣기</th>
            <td>
              <input type="text" placeholder="" className="input-comm" />
            </td>
            <th className="th-n">음성파일</th>
            <td>
              <a href="#">3452096187.mp3</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="wrap-pop" style={{ maxWidth: 500 }}>
        <table className="table-test">
          <tbody>
            <tr>
              <th rowSpan={2}>
                혼잡도
                <br />
                체류시간
                <br />
                (분)
              </th>
              <th>최소 체류 시간</th>
              <td>
                <Textfield />
              </td>
            </tr>
            <tr>
              <th>최대 체류 시간</th>
              <td>
                <Textfield />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table-test" style={{ marginTop: '-2rem' }}>
          <tbody>
            <tr>
              <th rowSpan={3}>
                혼잡도
                <br />
                기준
                <br />
                (명)
              </th>
              <th>여유</th>
              <td>
                <Textfield />
              </td>
            </tr>
            <tr>
              <th>보통</th>
              <td>
                <Textfield />
              </td>
            </tr>
            <tr>
              <th>혼잡</th>
              <td>
                <Textfield />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="wrap-pop">
        <table className="table-test">
          <caption>동구의 산업화와 생업 현장 전시안내</caption>
          <tbody>
            <tr>
              <th>전시안내여부</th>
              <td colSpan={3}>
                <Radiogroup
                  name={'tmp2'}
                  items={[
                    {
                      label: '전시안내 함',
                      value: 't1',
                    },
                    {
                      label: '전시안내 안함',
                      value: 't2',
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <th>최종정보등록(수정)일</th>
              <td>2025-01-30</td>
              <th>등록(수정)자</th>
              <td>홍길동/학예부</td>
            </tr>
          </tbody>
        </table>

        <table className="table-test" style={{ marginTop: '-3.1rem' }}>
          <thead>
            <tr>
              <th colSpan={2}>전시안내내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>한국어</th>
              <td>
                <textarea className="form-textarea noline">한국어 전시안내 내용이 보여집니다.</textarea>
              </td>
            </tr>
            <tr>
              <th>영어</th>
              <td>
                <textarea className="form-textarea noline">영어 전시안내 내용이 보여집니다.</textarea>
              </td>
            </tr>
            <tr>
              <th>중국어</th>
              <td>
                <textarea className="form-textarea noline">중국어 전시안내 내용이 보여집니다.</textarea>
              </td>
            </tr>
            <tr>
              <th>일본어</th>
              <td>
                <textarea className="form-textarea noline">일본어 전시안내 내용이 보여집니다.</textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className="title">Page 37</p>
        <table className="table-test">
          <caption>다운로드</caption>
          <tr>
            <th>엑셀 양식 다운로드</th>
            <td>
              <Button label="파일 다운로드" />
            </td>
          </tr>
          <tr>
            <th>진열장 번호 다운로드</th>
            <td>
              <div className="wrap-flex">
                <div className="select-root" style={{ width: 250 }}>
                  <select>
                    <option>바다와 부두의 생업</option>
                  </select>
                </div>
                <Button label="전시실 진열장번호 다운로드" />
              </div>
            </td>
          </tr>
        </table>
      </div>

      <table className="table-test">
        <caption>엑셀 다운로드</caption>
        <tr>
          <th>전시실 위치 선택</th>
          <td>
            <div className="select-root" style={{ width: 250 }}>
              <select>
                <option>선택</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <th>일괄등록 엑셀 파일</th>
          <td>
            <Button label="찾아보기" />
          </td>
        </tr>
        <tr>
          <th>일괄등록 이미지 압축파일(zip)</th>
          <td>
            <Button label="찾아보기" />
          </td>
        </tr>
      </table>

      <table className="table-test" style={{ marginBottom: '-3.5rem' }}>
        <caption>업로드 목록</caption>
        <tr>
          <th>전시실 위치</th>
          <td>바다와 부두의 생업</td>
        </tr>
      </table>

      <table className="table-test list">
        <thead>
          <tr>
            <th rowSpan={2}>구분</th>
            <th colSpan={2}>진열장번호</th>
            <th colSpan={2}>소장품 정보</th>
            <th>진열장 및 전시품명</th>
            <th rowSpan={2}>수정</th>
            <th rowSpan={2}>비고</th>
          </tr>
          <tr>
            <th>진열장번호</th>
            <th>전시품번호</th>
            <th>유물번호</th>
            <th>세부번호</th>
            <th>한국어</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>전시품</td>
            <td>1001</td>
            <td>1</td>
            <td>000013</td>
            <td>00014</td>
            <td>화도진도</td>
            <td>
              <Button label="수정" />
            </td>
            <td>해당 진열장 안내번호가 없습니다.</td>
          </tr>
          <tr className="checked">
            <td>전시품</td>
            <td>1002</td>
            <td>1</td>
            <td>000013</td>
            <td>00014</td>
            <td>인천부지도</td>
            <td>
              <Button label="수정" />
            </td>
            <td></td>
          </tr>
          <tr className="checked">
            <td>전시품</td>
            <td>1002</td>
            <td>2</td>
            <td>000013</td>
            <td>00014</td>
            <td>1940년대 조선기계제작소</td>
            <td>
              <Button label="수정" />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <table className="table-test" style={{ marginBottom: '-3.5rem' }}>
        <caption>적용 목록</caption>
        <tr>
          <th>전시실 위치</th>
          <td>바다와 부두의 생업</td>
        </tr>
      </table>

      <table className="table-test list">
        <thead>
          <tr>
            <th rowSpan={2}>구분</th>
            <th colSpan={2}>진열장번호</th>
            <th colSpan={2}>소장품 정보</th>
            <th>진열장 및 전시품명</th>
            <th rowSpan={2}>수정</th>
            <th rowSpan={2}>비고</th>
          </tr>
          <tr>
            <th>진열장번호</th>
            <th>전시품번호</th>
            <th>유물번호</th>
            <th>세부번호</th>
            <th>한국어</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>전시품</td>
            <td>1001</td>
            <td>1</td>
            <td>000013</td>
            <td>00014</td>
            <td>화도진도</td>
            <td>
              <Button label="실패" className="err" />
            </td>
            <td>해당 진열장 안내번호가 없습니다.</td>
          </tr>
          <tr>
            <td>전시품</td>
            <td>1002</td>
            <td>1</td>
            <td>000013</td>
            <td>00014</td>
            <td>인천부지도</td>
            <td>
              <Button label="성공" className="suc" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>전시품</td>
            <td>1002</td>
            <td>2</td>
            <td>000013</td>
            <td>00014</td>
            <td>1940년대 조선기계제작소</td>
            <td>
              <Button label="성공" className="suc" />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div>
        <p className="title">Page 38</p>
        <table className="table-test list">
          <caption>총 60건</caption>
          <thead>
            <tr>
              <th rowSpan={2}>
                <Checkbox />
              </th>
              <th rowSpan={2}>비콘명</th>
              <th rowSpan={2}>ZONING</th>
              <th rowSpan={2}>비콘위치</th>
              <th colSpan={4}>배터리</th>
              <th rowSpan={2}>Dummy 여부</th>
            </tr>
            <tr>
              <th>남은양</th>
              <th>최종 수신일</th>
              <th>교체일</th>
              <th>비콘 시스템 등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>
                <a href="#">1608-100</a>
              </td>
              <td>
                <a href="#">Z1001-0015</a>
              </td>
              <td>기획전시실</td>
              <td>정상</td>
              <td>YYYY-MM-DD</td>
              <td>-</td>
              <td>YYYY-MM-DD</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>
                <a href="#">1608-099</a>
              </td>
              <td>
                <a href="#">Z1001-0014</a>
              </td>
              <td>기획전시실</td>
              <td>정상</td>
              <td>YYYY-MM-DD</td>
              <td>-</td>
              <td>YYYY-MM-DD</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>
                <a href="#">1608-098</a>
              </td>
              <td>
                <a href="#">Z1001-0013</a>
              </td>
              <td>기획전시실</td>
              <td>정상</td>
              <td>YYYY-MM-DD</td>
              <td></td>
              <td>YYYY-MM-DD</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>
                <a href="#">1608-100</a>
              </td>
              <td>
                <a href="#">Z1001-0015</a>
              </td>
              <td>상성전시실 I</td>
              <td>정상</td>
              <td>YYYY-MM-DD</td>
              <td></td>
              <td>YYYY-MM-DD</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>
                <a href="#">1608-100</a>
              </td>
              <td>
                <a href="#">Z1001-0015</a>
              </td>
              <td>상성전시실 I</td>
              <td>정상</td>
              <td>YYYY-MM-DD</td>
              <td></td>
              <td>YYYY-MM-DD</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>
                <a href="#">1608-100</a>
              </td>
              <td>
                <a href="#">Z1001-0015</a>
              </td>
              <td>상성전시실 I</td>
              <td>충전필요</td>
              <td>YYYY-MM-DD</td>
              <td></td>
              <td>YYYY-MM-DD</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex-3">
        <table className="table-test">
          <caption>Zoning 기본정보</caption>
          <tbody>
            <tr>
              <th>Zoning 번호</th>
              <td>Z00002-0001</td>
              <th>사용여부</th>
              <td>
                <div className="select-root">
                  <select>
                    <option>사용함</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th>위치정보</th>
              <td></td>
              <th>최종 등록(변경)일</th>
              <td>-</td>
            </tr>
            <tr>
              <th>유사도 이미지</th>
              <td colSpan={3}>
                <div className="wrap-flex">
                  <Button label="찾아보기" />
                  &nbsp;
                  <a href="">20191018.zip</a>×
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex-3">
        <table className="table-test list">
          <caption>비콘 목록 : 총 3건</caption>
          <thead>
            <tr>
              <th rowSpan={2}>번호</th>
              <th rowSpan={2}>비콘명</th>
              <th colSpan={3}>배터리</th>
              <th rowSpan={2}>Dummy 구분</th>
            </tr>
            <tr>
              <th>잔여량</th>
              <th>수신날짜</th>
              <th>교체일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a href="#">1608-0890</a>
              </td>
              <td>정상</td>
              <td>2025-01-30</td>
              <td>2025-01-30</td>
              <td>N</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a href="#">1608-0870</a>
              </td>
              <td>충전 필요</td>
              <td className="c-err">2025-01-30</td>
              <td>2025-01-30</td>
              <td>N</td>
            </tr>
          </tbody>
        </table>

        <table className="table-test list">
          <caption>기획전시 목록 : 총 8건</caption>
          <thead>
            <tr>
              <th>
                <Checkbox />
              </th>
              <th>기획 전시명</th>
              <th>진열장 번호</th>
              <th>전시품</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Checkbox />
              </td>
              <td>무네미 넘어 벌말까지 화수동·화평동</td>
              <td>001</td>
              <td>화촌포가 명기된 인천부 지도 부분</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className="title">Page 39</p>
        <table className="table-test list">
          <thead>
            <tr>
              <th>번호</th>
              <th>일자</th>
              <th>이용 수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2025-01-01(토)</td>
              <td>00000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2025-01-01(토)</td>
              <td>00000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2025-01-01(토)</td>
              <td>00000</td>
            </tr>
            <tr>
              <td>4</td>
              <td>2025-01-01(토)</td>
              <td>00000</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2025-01-01(토)</td>
              <td>00000</td>
            </tr>
            <tr>
              <td>6</td>
              <td>2025-01-01(토)</td>
              <td>00000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="table-test list">
        <thead>
          <tr>
            <th>번호</th>
            <th>전시관</th>
            <th>전시실</th>
            <th>방문 수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>5</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>6</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>00000</td>
          </tr>
        </tbody>
      </table>

      <table className="table-test list">
        <thead>
          <tr>
            <th>번호</th>
            <th>전시관</th>
            <th>전시실</th>
            <th>전시품</th>
            <th>이용 수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>전시품 3</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>전시품 3</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>전시품 3</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>4</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>전시품 3</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>5</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>전시품 3</td>
            <td>00000</td>
          </tr>
          <tr>
            <td>6</td>
            <td>전시관 1</td>
            <td>전시실 2</td>
            <td>전시품 3</td>
            <td>00000</td>
          </tr>
        </tbody>
      </table>

      <div>
        <p className="title">Page 40</p>
        <table className="table-test">
          <caption></caption>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <p className="title">Page 9</p>
        <table className="table-test">
          <caption>기본정보</caption>
          <tbody>
            <tr>
              <th>특별전시우선순위</th>
              <td colSpan={3}>
                <div className="wrap-flex">
                  <Textfield name="" placeholder="두자리수" />
                  <Button label="중복체크" />
                </div>
              </td>
            </tr>
            <tr>
              <th>구분</th>
              <td colSpan={3}>
                <Radiogroup
                  name={'setlist'}
                  items={[
                    {
                      label: '기획전시',
                      value: 't1',
                    },
                    {
                      label: '행사/이벤트',
                      value: 't2',
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <th>전시표출여부</th>
              <td colSpan={3}>
                <Radiogroup
                  name={'setlist2'}
                  items={[
                    {
                      label: 'Y',
                      value: 't1',
                    },
                    {
                      label: 'N',
                      value: 't2',
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <th>비콘신청</th>
              <td colSpan={3}>
                <Radiogroup
                  name={'setlist3'}
                  items={[
                    {
                      label: 'Y',
                      value: 't1',
                    },
                    {
                      label: 'N',
                      value: 't2',
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <th>등록(수정)자</th>
              <td>홍길동 / 학예부</td>
              <th className="th-w">최종등록(수정)일</th>
              <td>2025-01-30</td>
            </tr>
          </tbody>
        </table>
        <p className="msg">비콘 서비스는 실내측위 관리에서 Zoning을 등록해야 합니다.</p>
      </div>

      <table className="table-test">
        <caption>
          전시명 <small>&amp;</small> 기간 <small>&amp;</small> 관련 URL 정보
        </caption>
        <tbody>
          <tr>
            <th rowSpan={5}>
              전시명 &amp;
              <br />
              행사 / 이벤트명
            </th>
            <th className="th-n">한국어</th>
            <td colSpan={3}>
              <Textfield placeholder="무네미 넘어 벌말까지 화수동·화평동" />
            </td>
          </tr>
          <tr>
            <th className="th-n">영어</th>
            <td colSpan={3}>
              <Textfield placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">중국어</th>
            <td colSpan={3}>
              <Textfield placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">일본어</th>
            <td colSpan={3}>
              <Textfield placeholder="ムネミを越えてボルマルまでの華水洞・華平洞" />
            </td>
          </tr>
          <tr>
            <th className="th-n">스페인어</th>
            <td colSpan={3}>
              <Textfield placeholder="Hwasu-dong y Hwapyeong-dong, desde más allá de Munemi hasta Beolmal" />
            </td>
          </tr>
          <tr>
            <th>전시기간</th>
            <th className="th-n">시작일</th>
            <td>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <Datepk label="2023-06-23" />
              </LocalizationProvider>
            </td>
            <th className="th-n">종료일</th>
            <td>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <Datepk label="2023-09-23" />
              </LocalizationProvider>
            </td>
          </tr>
          <tr>
            <th>모바일 노출기간</th>
            <th className="th-n">시작일</th>
            <td>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <Datepk label="2023-06-23" />
              </LocalizationProvider>
            </td>
            <th className="th-n">종료일</th>
            <td>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <Datepk label="2023-09-23" />
              </LocalizationProvider>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>관련 URL</th>
            <td colSpan={3}>
              <Textfield placeholder="https://www.icdonggu.gr.kr" />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-test">
        <caption>상세내용</caption>
        <tbody>
          <tr>
            <th rowSpan={5}>장소</th>
            <th className="th-n">한국어</th>
            <td>
              <Textfield placeholder="수도국산달동네박물관 기획전시실" />
            </td>
          </tr>
          <tr>
            <th className="th-n">영어</th>
            <td>
              <Textfield placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">중국어</th>
            <td>
              <Textfield placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">일본어</th>
            <td>
              <Textfield placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">스페인어</th>
            <td>
              <Textfield placeholder="" />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-test">
        <tbody>
          <tr>
            <th rowSpan={5}>간략내용</th>
            <th className="th-n">한국어</th>
            <td>
              <textarea className="form-textarea">
                인천 동구청과 시립박물관이 동구의 화수동, 화평동을 주제로 2023년 공동특별전을 개최한다.
                수도국산달동네박물관은 ｢무네미 넘어 벌말까지 화수동·화평동｣을 제목으로, 조선시대부터 변화해 온 일대
                지명과 지형의 변화, 19세기 말 화도진의 창설과 임무, 나아가 1950년대 이곳에 자리를 잡은 황해도 피난민들의
                이야기에 이르는 지역의 다양한 이야기들을 다룬다. 이번 전시를 통해 조선시대부터 현재까지 인천 사람들의
                중요한 생활터로 자리매김해 온 화수동과 화평동의 옛 기억을 다시금 되새기는 기회가 되길 바란다.
              </textarea>
            </td>
          </tr>
          <tr>
            <th className="th-n">영어</th>
            <td>
              <textarea className="form-textarea">
                ncheon Dong-gu Office and the City Museum are jointly hosting a special exhibition in 2023, focusing on
                Hwasu-dong and Hwapyeong-dong in Dong-gu. The Sudoguksan Daldongne Museum presents an exhibition titled
                "Hwasu-dong and Hwapyeong-dong, from beyond Munemi to Beolmal," covering various local stories. These
                include the changes in place names and topography since the Joseon Dynasty, the establishment and duties
                of Hwadojin in the late 19th century, and the stories of Hwanghae-do refugees who settled here in the
                1950s. Through this exhibition, we hope to provide an opportunity to revisit the old memories of
                Hwasu-dong and Hwapyeong-dong, which have been important living spaces for the people of Incheon from
                the Joseon Dynasty to the present.
              </textarea>
            </td>
          </tr>
          <tr>
            <th className="th-n">중국어</th>
            <td>
              <textarea className="form-textarea">
                仁川东区厅和市立博物馆将在2023年共同举办以东区华水洞、华平洞为主题的特别展览。首都国山达洞内博物馆以"从穆内米以外到伯玛尔的华水洞和华平洞"为题，涵盖了从朝鲜时代以来该地区地名和地形的变化、19世纪末华道镇的创建和职责，以及20世纪50年代在此定居的黄海道难民的故事等多样化的地区故事。希望通过本次展览，能够重新回顾从朝鲜时代至今一直作为仁川人重要生活场所的华水洞和华平洞的往日记忆
              </textarea>
            </td>
          </tr>
          <tr>
            <th className="th-n">일본어</th>
            <td>
              <textarea className="form-textarea">
                仁川東区庁と市立博物館が東区の華水洞、華平洞をテーマに2023年共同特別展を開催する。首都国山ダルドンネ博物館は「ムネミを越えてボルマルまでの華水洞・華平洞」をタイトルに、朝鮮時代から変化してきた一帯の地名と地形の変化、19世紀末の華道鎮の創設と任務、さらに1950年代にここに居を構えた黄海道避難民たちの物語に至るまでの地域の多様な話を扱う。今回の展示を通じて、朝鮮時代から現在まで仁川の人々の重要な生活の場として位置づけられてきた華水洞と華平洞の昔の記憶を改めて振り返る機会となることを願う。
              </textarea>
            </td>
          </tr>
          <tr>
            <th className="th-n">스페인어</th>
            <td>
              <textarea className="form-textarea">
                La Oficina del Distrito Dong-gu de Incheon y el Museo de la Ciudad organizan una exposición especial
                conjunta en 2023, centrada en Hwasu-dong y Hwapyeong-dong en el distrito de Dong-gu. El Museo Sudoguksan
                Daldongne presenta una exposición titulada "Hwasu-dong y Hwapyeong-dong, desde más allá de Munemi hasta
                Beolmal", que abarca diversas historias locales. Estas incluyen los cambios en los nombres de lugares y
                la topografía desde la dinastía Joseon, el establecimiento y las funciones de Hwadojin a finales del
                siglo XIX, y las historias de los refugiados de Hwanghae-do que se asentaron aquí en la década de 1950.
                A través de esta exposición, esperamos brindar una oportunidad para revisitar los viejos recuerdos de
                Hwasu-dong y Hwapyeong-dong, que han sido espacios de vida importantes para la gente de Incheon desde la
                dinastía Joseon hasta el presente.
              </textarea>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-test">
        <caption>혼잡도 설정</caption>
        <tbody>
          <tr>
            <th rowSpan={3}>혼잡도 체류 시간 (분)</th>
            <th className="th-n">최소 체류 시간</th>
            <td>
              <Textfield />
            </td>
            <th rowSpan={3} className="th-n">
              혼잡도 기준 (명)
            </th>
            <th className="th-n">여유</th>
            <td>
              <Textfield />
            </td>
          </tr>
          <tr>
            <th className="th-n">최대 체류 시간</th>
            <td>
              <Textfield />
            </td>
            <th className="th-n">보통</th>
            <td>
              <Textfield />
            </td>
          </tr>
          <tr>
            <th className="th-n"></th>
            <td></td>
            <th className="th-n">혼잡</th>
            <td>
              <Textfield />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="wrap-pop">
        <table className="table-test">
          <caption>전시품 기본정보</caption>
          <tbody>
            <tr>
              <th colSpan={2}>소장품 번호</th>
              <td>
                <input type="text" placeholder="-" className="input-comm" />
              </td>
            </tr>
            <tr>
              <th rowSpan={5}>전시품명</th>
              <th>한국어</th>
              <td>
                <input type="text" placeholder="내용입력" className="input-comm" />
              </td>
            </tr>
            <tr>
              <th>영어</th>
              <td>
                <input type="text" placeholder="내용입력" className="input-comm" />
              </td>
            </tr>
            <tr>
              <th>중국어</th>
              <td>
                <input type="text" placeholder="내용입력" className="input-comm" />
              </td>
            </tr>
            <tr>
              <th>일어</th>
              <td>
                <input type="text" placeholder="내용입력" className="input-comm" />
              </td>
            </tr>
            <tr>
              <th>스페인어</th>
              <td>
                <input type="text" placeholder="내용입력" className="input-comm" />
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table-test">
          <tbody>
            <tr>
              <th rowSpan={3} style={{ width: '10%' }}>
                한국어
              </th>
              <th style={{ width: '15%' }}>
                전시안내
                <br />
                TEXT
                <br />
                내용
              </th>
              <td colSpan={3}>
                <textarea className="form-textarea noline">내용입력</textarea>
              </td>
            </tr>
            <tr>
              <th style={{ width: '15%' }}>
                전시안내
                <br />
                음성안내
              </th>
              <td colSpan={3}>
                <textarea className="form-textarea noline">내용입력</textarea>
              </td>
            </tr>
            <tr>
              <th style={{ width: '15%' }}>음성듣기</th>
              <td style={{ width: '30%' }}></td>
              <th style={{ width: '15%' }}>음성파일</th>
              <td style={{ width: '30%' }}>
                <a href="#">3452096187.mp3</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="table-test table-center table-fixed">
        <caption>전시품 목록</caption>
        <tbody>
          <tr>
            <td colSpan={2} style={{ height: 200 }}></td>
            <td colSpan={2}></td>
            <td colSpan={2}></td>
            <td colSpan={2}></td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <a href="#">화수동 부영목욕탕</a>
            </td>
            <td colSpan={2}>
              <a href="#">도쿄시바우라전기회사의 전경</a>
            </td>
            <td colSpan={2}>
              <a href="#">이천전기주식회사 본관</a>
            </td>
            <td colSpan={2}>
              <a href="#">1959 대한성냥공장의 모습</a>
            </td>
            <td colSpan={2}>
              <a href="#">1960년대 인천도시산업선교회</a>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>선택</td>
            <td colSpan={2}>선택</td>
            <td colSpan={2}>선택</td>
            <td colSpan={2}>선택</td>
            <td colSpan={2}>선택</td>
          </tr>
          <tr>
            <td>진열장번호</td>
            <td>01</td>
            <td>진열장번호</td>
            <td>-</td>
            <td>진열장번호</td>
            <td>02</td>
            <td>진열장번호</td>
            <td>03</td>
            <td>진열장번호</td>
            <td>04</td>
          </tr>
        </tbody>
      </table>

      <div>
        <p className="title">Page 10</p>
        <table className="table-test">
          <caption>전시품 기본정보</caption>
          <tbody>
            <tr>
              <th>전시안내여부</th>
              <td>
                <Radiogroup
                  name={'setlist10'}
                  items={[
                    {
                      label: 'Y',
                      value: 't1',
                    },
                    {
                      label: 'N',
                      value: 't2',
                    },
                  ]}
                />
              </td>
              <th>전시여부</th>
              <td>
                <Radiogroup
                  name={'setlist11'}
                  items={[
                    {
                      label: 'Y',
                      value: 't1',
                    },
                    {
                      label: 'N',
                      value: 't2',
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <th>전시품 위치</th>
              <td colSpan={3}>
                <div className="select-wrap">
                  <div className="select-root">
                    <select>
                      <option>상설전시실 Ⅰ</option>
                    </select>
                  </div>
                  <div className="select-root">
                    <select>
                      <option>동구의 문화와 교육</option>
                    </select>
                  </div>
                  <div className="select-root">
                    <select>
                      <option>교육</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>비고</th>
              <td colSpan={3}>
                <textarea className="form-textarea noline">
                  관리상에 필요한 사항을 기입합니다. 기입된 내용은 모바일 전시안내에서는 보여지지 않습니다.
                </textarea>
              </td>
            </tr>
            <tr>
              <th>등록(수정)자</th>
              <td>홍길동 / 학예부</td>
              <th className="th-w">최종등록(수정)일</th>
              <td>2025-01-30</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="table-test">
        <caption>전시품 전시안내정보</caption>
        <tbody>
          <tr>
            <th colSpan={2}>진열장번호</th>
            <td>
              <div className="wrap-flex">
                <span>1111 -</span>
                <div>
                  <Textfield name="" placeholder="숫자입력" width={120} />
                </div>
                <Button label="중복체크" />
              </div>
            </td>
          </tr>
          <tr>
            <th rowSpan={5}>
              전시
              <br />
              품명
            </th>
            <th className="th-n">한국어</th>
            <td>
              <Textfield name="" placeholder="초등학교 교육자료" />
            </td>
          </tr>
          <tr>
            <th className="th-n">영어</th>
            <td>
              <Textfield name="" placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">중국어</th>
            <td>
              <Textfield name="" placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">일본어</th>
            <td>
              <Textfield name="" placeholder="" />
            </td>
          </tr>
          <tr>
            <th className="th-n">스페인어</th>
            <td>
              <Textfield name="" placeholder="" />
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-test">
        <caption>전시안내</caption>
        <tbody>
          <tr>
            <th rowSpan={3}>한국어</th>
            <th className="th-n">내용</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="1960 ~ 1970년대 초등학교 교육자료" />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성안내</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="1960 ~ 1970년대 초등학교 교육자료" />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성듣기</th>
            <td>
              <div style={{ width: 180 }}></div>
            </td>
            <th className="th-n">음성파일</th>
            <td>
              <a href="#">MP3파일로 직접 업로드하기</a>
            </td>
          </tr>

          <tr>
            <th rowSpan={3}>영어</th>
            <th className="th-n">내용</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 내용을 영어로 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성안내</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 음성안내에 대한 내용을 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성듣기</th>
            <td>
              <div style={{ width: 180 }}></div>
            </td>
            <th className="th-n">음성파일</th>
            <td>
              <a href="#">MP3파일로 직접 업로드하기</a>
            </td>
          </tr>

          <tr>
            <th rowSpan={3}>중국어</th>
            <th className="th-n">내용</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 내용을 중국어로 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성안내</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 음성안내에 대한 내용을 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성듣기</th>
            <td>
              <div style={{ width: 180 }}></div>
            </td>
            <th className="th-n">음성파일</th>
            <td>
              <a href="#">MP3파일로 직접 업로드하기</a>
            </td>
          </tr>

          <tr>
            <th rowSpan={3}>일본어</th>
            <th className="th-n">내용</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 내용을 일본어로 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성안내</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 음성안내에 대한 내용을 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성듣기</th>
            <td>
              <div style={{ width: 180 }}></div>
            </td>
            <th className="th-n">음성파일</th>
            <td>
              <a href="#">MP3파일로 직접 업로드하기</a>
            </td>
          </tr>

          <tr>
            <th rowSpan={3}>스페인어</th>
            <th className="th-n">내용</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 내용을 스페인어로 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성안내</th>
            <td colSpan={3}>
              <Textfield name="" placeholder="모바일 전시안내의 음성안내에 대한 내용을 입력하십시오." />
            </td>
          </tr>
          <tr>
            <th className="th-n">음성듣기</th>
            <td>
              <div style={{ width: 180 }}></div>
            </td>
            <th className="th-n">음성파일</th>
            <td>
              <a href="#">MP3파일로 직접 업로드하기</a>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-test">
        <caption>검색 색인어</caption>
        <tbody>
          <tr>
            <th>한국어</th>
            <td>
              <Textfield name="" placeholder="초등학교, 교육자료, 1960년대, 1970년대" />
            </td>
          </tr>
          <tr>
            <th>영어어</th>
            <td>
              <Textfield name="" placeholder="검색어1, 검색어2, 검색어3, 검색어4, 검색어5" />
            </td>
          </tr>
          <tr>
            <th>중국어</th>
            <td>
              <Textfield name="" placeholder="검색어1, 검색어2, 검색어3, 검색어4, 검색어5" />
            </td>
          </tr>
          <tr>
            <th>일본어</th>
            <td>
              <Textfield name="" placeholder="검색어1, 검색어2, 검색어3, 검색어4, 검색어5" />
            </td>
          </tr>
          <tr>
            <th>스페인어</th>
            <td>
              <Textfield name="" placeholder="검색어1, 검색어2, 검색어3, 검색어4, 검색어5" />
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <p className="title">Page 13</p>
        <table className="table-test">
          <caption>다운로드</caption>
          <tr>
            <th>엑셀 양식 다운로드</th>
            <td>
              <Button label="파일 다운로드" />
            </td>
          </tr>
          <tr>
            <th>진열장 번호 다운로드</th>
            <td>
              <div className="wrap-flex">
                <div className="select-root" style={{ width: 250 }}>
                  <select>
                    <option>바다와 부두의 생업</option>
                  </select>
                </div>
                <Button label="전시실 진열장번호 다운로드" />
              </div>
            </td>
          </tr>
        </table>
      </div>

      <table className="table-test">
        <caption>엑셀 다운로드</caption>
        <tr>
          <th>전시실 위치 선택</th>
          <td>
            <div className="select-root" style={{ width: 250 }}>
              <select>
                <option>선택</option>
              </select>
            </div>
          </td>
        </tr>
        <tr>
          <th>일괄등록 엑셀 파일</th>
          <td>
            <Button label="찾아보기" />
          </td>
        </tr>
        <tr>
          <th>일괄등록 이미지 압축파일(zip)</th>
          <td>
            <Button label="찾아보기" />
          </td>
        </tr>
      </table>

      <table className="table-test" style={{ marginBottom: '-3.5rem' }}>
        <caption>업로드 목록</caption>
        <tr>
          <th>전시실 위치</th>
          <td>바다와 부두의 생업</td>
        </tr>
      </table>

      <table className="table-test list">
        <thead>
          <tr>
            <th rowSpan={2}>구분</th>
            <th colSpan={2}>진열장번호</th>
            <th colSpan={3}>진열장 및 전시품명</th>
            <th rowSpan={2}>수정</th>
            <th rowSpan={2}>비고</th>
          </tr>
          <tr>
            <th>진열장번호</th>
            <th>전시품번호</th>
            <th>한국어</th>
            <th>영어</th>
            <th>중국어</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>전시품</td>
            <td>1001</td>
            <td>1</td>
            <td>화도진도</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Button label="수정" />
            </td>
            <td>해당 진열장 안내번호가 없습니다.</td>
          </tr>
          <tr className="checked">
            <td>전시품</td>
            <td>1002</td>
            <td>1</td>
            <td>인천부지도</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Button label="수정" />
            </td>
            <td></td>
          </tr>
          <tr className="checked">
            <td>전시품</td>
            <td>1003</td>
            <td>2</td>
            <td>1940년대 조선기계제작소</td>
            <td>-</td>
            <td>-</td>
            <td>
              <Button label="수정" />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div>
        <p className="title">Page 17</p>
        <table className="table-test list">
          <caption>모바일 콘텐츠 수동적용관리</caption>
          <thead>
            <tr>
              <th>박물관</th>
              <th>업데이트 정보</th>
              <th>소요시간</th>
              <th>성공여부</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>수도국산달동네박물관</th>
              <td>
                <div style={{ padding: '10px 0', lineHeight: 1.5 }}>
                  <p>
                    <em>성공 날짜 </em>2018/08/06 10:05:05
                  </p>
                  <p>
                    <em>시작 날짜 </em>2018/08/06 10:05:05
                  </p>
                  <p>
                    <em>종료 날짜 </em>2018/08/06 10:05:05
                  </p>
                </div>
              </td>
              <td>2분 0초</td>
              <td style={{ color: '#0059ff' }}>성공</td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="table-test">
        <caption></caption>
        <tbody>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestPage;