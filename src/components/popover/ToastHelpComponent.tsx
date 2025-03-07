import React from 'react';
import { IconButton } from '@components/button';
import ModalPortal from '@components/modal/ModalPortal';
import { useModal } from '@hooks/useModal';

interface ToastProps {
  title?: string
  children: React.ReactNode;
}

const ToastHelp: React.FC<ToastProps> = (props) => {
  const { isOpen, openModal, closeModal } = useModal();
  const { title, children } = props;

  return (
    <>
      <IconButton label="도움말" icon="help" onClick={isOpen ? closeModal : openModal} />

      {isOpen && (
        <ModalPortal>
          <div className="toast-root">
            <div className="toast-paper">
              <div className="toast-title">
                <i className="ico-root help" />
                <span>{title}</span>
              </div>
              <div className="toast-desc">
                {children}
              </div>
              <IconButton label="닫기" icon="close" onClick={closeModal} />
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export { ToastHelp };