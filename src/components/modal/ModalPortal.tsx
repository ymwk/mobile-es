import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
		return () => setMounted(false);
	}, []);

	if (typeof window === 'undefined') return <></>;

	return mounted ? createPortal(children, document.getElementById('modal-root') as HTMLElement) : <></>;
};

export default ModalPortal;