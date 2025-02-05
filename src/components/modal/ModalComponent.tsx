import React from 'react';
import ModalPortal from './ModalPortal';
import { IconButton } from '@components/button';

interface ModalProps {
	id?: string;
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	width?: number;
	children: React.ReactNode;
	fullSize?: boolean
}

const Modal: React.FC<ModalProps> = (props) => {
	const { id, isOpen, onClose, title, width, children, fullSize=false } = props;

	return (
    <>
      {isOpen && (
        <ModalPortal>
          <div id={id} className={`modal-root ${fullSize ? 'modal-maxh' : ''}`}>
            <div className="modal-backdrop" onClick={onClose} />

            <div className="modal-panel" style={{ maxWidth: width }}>
              {title && (
                <div className="modal-header">
                  <h2 className="modal-title">{title}</h2>
                  <IconButton icon="close" label="Close" onClick={onClose} />
                </div>
              )}

              <div className="modal-body">{children}</div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export {Modal};