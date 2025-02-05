import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button'

interface props {
	isOpen: boolean;
	onClose: () => void;
}

export const NoticeModal: React.FC<props> = (props) => {
	const { isOpen, onClose } = props;

	return (
		<Modal
			id={'notice-modal'}
			isOpen={isOpen}
			onClose={onClose}
			title={'공지사항'}
			fullSize
		>
			<>
				<div className='notice-header'>
					<h3 className='title'>IIS 시스템 개인정보 파기 공지</h3>
					<div className='info'>
						<span>2025-01-10 09:10</span>
						<span>조회 1054</span>
					</div>
				</div>
				
				<ul className='notice-file-list'>
					<li>
						<Link to=''>
							<span>20250108 모바일 ES 개인정보 유의사항.pdf</span>
							<span className='ico-root download'><span className='blind'>다운로드</span></span>
						</Link>
					</li>
					<li>
						<Link to=''>
							<span>20250108 모바일 ES 매뉴얼.pdf</span>
							<span className='ico-root download'><span className='blind'>다운로드</span></span>
						</Link>
					</li>
				</ul>

				<div className="notice-body">
					안녕하세요.<br/><br/>

					계정 신청 및 사용을 첨부로 안내해드립니다.<br/>
					비밀번호, 핸드폰번호는 로그인 후 상단의 이름을
					클릭하여 직접 수정이 가능합니다.<br/><br/>

					*TOBT입력 항공사/조업사는 아래 정보를 회사 이메일 계정으로 lis@airport.kr에 송부해주시기 바랍니다.<br/>
					(소속 확인목적, 기존 엑셀 양식과 내용동일)<br/>
				</div>

				<ModalAction>
					<ModalButton
						styleType='confirm'
						label='닫기'
						onClick={onClose}
					/>
        </ModalAction>
			</>
		</Modal>
	);
};