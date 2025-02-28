import React from 'react';
import ModalPortal from './ModalPortal';
import { ModalAction } from './ModalAction';
import { ModalButton } from '@components/button';

interface AlertProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
  type?: 'alert' | 'confirm';
  width?: number;
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { id, isOpen, onClose, onCancel, onConfirm, width, children, type = 'alert' } = props;

  return (
    <>
      {isOpen && (
        <ModalPortal>
          <div id={id} className={`modal-root modal-alert`}>
            <div className="modal-backdrop" onClick={onClose} />

            <div className="modal-panel" style={{ maxWidth: width }}>
              <div className="modal-body">
                <div className="modal-msg">{children}</div>

                {type === 'confirm' ? (
                  <ModalAction>
                    <ModalButton type="button" styleType="confirm" label="확인" onClick={onConfirm} />
                  </ModalAction>
                ) : (
                  <ModalAction>
                    <ModalButton label="취소" onClick={onCancel} />
                    <ModalButton type="submit" styleType="confirm" label="확인" onClick={onConfirm} />
                  </ModalAction>
                )}
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export { Alert };