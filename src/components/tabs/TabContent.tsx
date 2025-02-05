import React, { Fragment } from 'react';

interface TabContentProps {
	label: string;
	children?: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};

export { TabContent };