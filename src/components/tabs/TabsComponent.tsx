import React, { useState } from 'react';

interface TabsProps {
  type?: 'login' | 'main' | 'cdm'
  // children?: React.ReactNode
  children?: any
  onTabChange?: (tabLabel: string) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    type = 'cdm',
    children,
    onTabChange
  } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
    if (onTabChange) {
			onTabChange(tabLabel);
		}
  };

  return (
    <div className={`tabs-root ${type}`}>
      {/*tabButton*/}
      <div className="tabs-btn-wrap">
      {children &&
        React.Children.toArray(children).map((child) => (
          <button
              className={`tabs-btn ${activeTab === (child as React.ReactElement).props.label ? 'active' : ''}`}
              key={(child as React.ReactElement).props.label}
              onClick={() => handleTabClick((child as React.ReactElement).props.label)}
          >
            {(child as React.ReactElement).props.label}
          </button>
        ))}
      </div>

      {/*tabContent*/}
      {children &&
				React.Children.toArray(children).map((child) =>
					(child as React.ReactElement).props.label === activeTab ? (child as React.ReactElement).props.children : null
      )}
    </div>
  );
};

export {Tabs}