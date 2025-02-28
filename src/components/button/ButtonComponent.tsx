import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'confirm' | 'action' | 'outlined' | 'small' | 'common' | 'icon';
  label?: 'add' | 'del' | string;
  disabled?: boolean;
  checked?: boolean;
  onClick?: any;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'button',
    styleType,
    label,
    disabled,
    onClick,
    className,
    children,
    ...other
  } = props;

  return (
    <>
      <button
        type={type}
        className={`button-root ${className ? className : ''} ${styleType ? styleType : ''}`}
        onClick={onClick}
        disabled={disabled}
        {...other}
      >
        {(label == 'add' && <i className="ico-root add" />) ||
          (label == 'del' && <i className="ico-root del" />) ||
          label}
        {children && children}
      </button>
    </>
  );
}

export {Button};