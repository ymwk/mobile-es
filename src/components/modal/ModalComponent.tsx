import React from 'react';
import ModalPortal from './ModalPortal';
import { IconButton } from '@components/button';

interface ModalProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
  fullSize?: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { id, isOpen, onClose, title, header, children, fullSize = false } = props;

  return (
    <>
      {isOpen && (
        <ModalPortal>
          <div id={id} className={`modal-root ${fullSize ? 'modal-max' : ''}`}>
            <div className="modal-backdrop" onClick={onClose} />

            <div className="modal-panel">
              <div className="modal-header">
                <IconButton icon="close" label="Close" onClick={onClose} />
                {title && <h2 className="modal-title">{title}</h2>}

                {header && header}
              </div>

              <div className="modal-body">{children}</div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export { Modal };
