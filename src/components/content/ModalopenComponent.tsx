import { useState } from 'react';
import { useModal } from '@hooks/useModal';
import { Alert } from '@components/modal';
import { IconButton } from '@components/button';
import { HourpkModal } from '@pages/modal/HourpkModal';
import { TimepkModal } from '@pages/modal/TimepkModal';
import { FltModal } from '@pages/modal/FltModal';
import { Textfield } from '@components/input';

export interface BookmarkProps {
  isBookmark?: boolean;
}

// 즐겨찾기 추가
export const BookmarkAlertOpen: React.FC<BookmarkProps> = (props) => {
  const { isBookmark } = props;
  const { isOpen, openModal, closeModal } = useModal();
  const [isMark, setIsMark] = useState(isBookmark);

  const toggleHandler = () => {
    setIsMark(!isMark);
    openModal();
  };

  const cancelHandler = () => {
    setIsMark(false);
    closeModal();
  };

  return (
    <>
      <IconButton
        icon="bookmark"
        label="즐겨찾기"
        className={`btn-bookmark ${isMark ? 'active' : ''}`}
        onClick={toggleHandler}
      />

      <Alert isOpen={isOpen} onClose={closeModal} onCancel={cancelHandler} onConfirm={closeModal} type="confirm">
        {isMark ? <p>즐겨찾기에 추가되었습니다.</p> : <p>즐겨찾기에서 삭제되었습니다.</p>}
      </Alert>
    </>
  );
};

// 언어 선택
export const LangAlertOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" onClick={openModal} style={{ position: 'absolute' }}></button>

      <Alert isOpen={isOpen} onClose={closeModal} onConfirm={closeModal} type={'confirm'}>
        <p>
          시용언어를 선택하지 않으시면
          <br />
          한국어로 제공됩니다.
        </p>
      </Alert>
    </>
  );
};

//time combobox
export const HourpkModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" className="timepk-btn" onClick={openModal} />
      <HourpkModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

//time picker
export const TimepkModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <button type="button" className="timepk-btn" onClick={openModal} />
      <TimepkModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

// Flt
export const FltModalOpen = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="flt-search">
      <Textfield value="OZ" readOnly />
      <IconButton icon="search" onClick={openModal} label="편명조회" />
      <FltModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};