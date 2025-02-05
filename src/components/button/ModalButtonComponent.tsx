import React from 'react';

interface ModalButtonProps {
  type?: 'button' | 'submit' | 'reset'
  styleType?: 'confirm'
  label?: string
  disabled?: boolean
  onClick?: any
}

const ModalButton: React.FC<ModalButtonProps> = (props) => {
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
          className={`button-modal ${styleType ? styleType : ''}`}
          onClick={onClick}
          disabled={disabled}
          {...other}
        >
          {label}
        </button>
    </>
    
  )
}

export {ModalButton};