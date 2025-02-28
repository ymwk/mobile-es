import React from 'react';
import { Modal, ModalAction } from '@components/modal';
import { ModalButton } from '@components/button';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const TimepkModal: React.FC<props> = (props) => {
  const { isOpen, onClose } = props;
  const hour = Array(24).fill(1).map((v, i) => v + i);
  const minute = Array(60).fill(1).map((v, i) => v + i);

  return (
    <Modal id={'modal'} isOpen={isOpen} onClose={onClose} title={'시분선택'}>
      <>
        <div className="timepk-group">
          <div className="timepk-swiper-wrapper">
            <Swiper
              className="timepk-swiper"
              direction="vertical"
              slideToClickedSlide={true}
              slidesPerView={3}
              centeredSlides={true}
              onSlideChange={(swiper) => console.log(swiper.realIndex)}
            >
              {hour.map((idx) => (
                <SwiperSlide key={idx}>
                  <span className="value">{(idx - 1).toString().padStart(2, '0')}</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <span>시</span>
          </div>

          <div className="timepk-swiper-wrapper">
            <Swiper
              className="timepk-swiper"
              direction="vertical"
              slideToClickedSlide={true}
              slidesPerView={3}
              centeredSlides={true}
              onSlideChange={(swiper) => console.log(swiper.realIndex)}
            >
              {minute.map((idx) => (
                <SwiperSlide key={idx}>
                  <span className="value">{(idx - 1).toString().padStart(2, '0')}</span>
                </SwiperSlide>
              ))}
            </Swiper>
            <span>분</span>
          </div>
        </div>
        <ModalAction>
          <ModalButton label="취소" onClick={onClose} />
          <ModalButton type="submit" styleType="confirm" label="설정" onClick={onClose} />
        </ModalAction>
      </>
    </Modal>
  );
};
