import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'confirm' | 'action' | 'outlined' | 'small' | 'icon';
  label?: 'add' | 'del' | string;
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
        {label == 'add' && <i className="ico-root add" /> || label == 'del' && <i className="ico-root del" /> || label}
      </button>
    </>
  );
}

export {Button};