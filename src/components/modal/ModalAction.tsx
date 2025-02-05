import React from 'react';

interface ModalActionProps {
  children: React.ReactNode;
}

const ModalAction: React.FC<ModalActionProps> = (props) => {
	const { children } = props;

	return (
		<>
			<div className='modal-action'>
        {children}
      </div>
		</>
	);
};

export {ModalAction};