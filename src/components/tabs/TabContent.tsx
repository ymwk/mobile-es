import React, { Fragment } from 'react';

interface TabContentProps {
  label: string;
  children?: React.ReactNode;
  disabled?: boolean
}

const TabContent: React.FC<TabContentProps> = ({ children }) => {
	return <Fragment>{children}</Fragment>;
};

export { TabContent };