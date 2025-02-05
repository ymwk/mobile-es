import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'confirm' | 'action' | 'outlined' | 'small';
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'button',
    styleType,
    label,
    disabled,
    onClick,
    ...other
  } = props;

  return (
    <>
        <button
          type={type}
          className={`button-root ${styleType ? styleType : ''}`}
          onClick={onClick}
          disabled={disabled}
          {...other}
        >
          {label}
        </button>
    </>
    
  )
}

export {Button};