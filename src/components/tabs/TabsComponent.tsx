import React, { useState } from 'react';

interface TabsProps {
  type?: 'login' | 'main' | 'cdm' | 'modal' | 'cdm-sm' | 'cdm-ttot';
  className?: string
  // children?: React.ReactNode
  children?: any;
  onTabChange?: (tabLabel: string) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { type = 'cdm', className, children, onTabChange } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
    if (onTabChange) {
      onTabChange(tabLabel);
    }
  };

  return (
    <div
      className={`tabs-root ${type} ${children.length > 4 && children.length < 8 ? 'tabs-flex-3' : ''} ${
        className ? className : ''
      }`}
    >
      {/*tabButton*/}
      <div className="tabs-btn-wrap">
        {children &&
          React.Children.toArray(children).map((child) => (
            <button
              className={`tabs-btn ${activeTab === (child as React.ReactElement).props.label ? 'active' : ''}`}
              key={(child as React.ReactElement).props.label}
              onClick={() => handleTabClick((child as React.ReactElement).props.label)}
              disabled={(child as React.ReactElement).props.disabled}
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

export { Tabs };
