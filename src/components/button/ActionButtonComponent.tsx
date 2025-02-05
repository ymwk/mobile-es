import React from 'react';

interface ActionButtonProps {
  type?: 'button' | 'submit' | 'reset'
  styleType?: 'confirm'
  label?: string
  disabled?: boolean
  onClick?: any
}

const ActionButton: React.FC<ActionButtonProps> = (props) => {
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
          className={`button-action ${styleType ? styleType : ''}`}
          onClick={onClick}
          disabled={disabled}
          {...other}
        >
          {label}
        </button>
    </>
    
  )
}

export {ActionButton};