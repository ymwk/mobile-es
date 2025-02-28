import React from 'react';

interface IconButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon:
    | 'close'
    | 'back'
    | 'bell'
    | 'hamburger'
    | 'refresh'
    | 'bookmark'
    | 'prev'
    | 'next'
    | 'lt'
    | 'gt'
    | 'dt'
    | 'ut'
    | 'user'
    | 'set'
    | 'out'
    | 'help'
    | 'history'
    | 'pdf'
    | 'home'
    | 'search';
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: any;
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    type = 'button',
    icon,
    label,
    className,
    disabled,
    onClick,
    children,
    ...other
  } = props;

  return (
    <>
      <button
        type={type}
        className={`button-icon ${className ? className : ''}`}
        onClick={onClick}
        disabled={disabled}
        {...other}
      >
        <span className="blind">{label}</span>
        <span className={`ico-root ${icon}`} />
        {children}
      </button>
    </>
  );
}

export {IconButton};