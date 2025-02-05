import React from 'react';

interface SwitchProps {
  name?: string
  label?: string
  disabled?: boolean
  checked?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

const Switch: React.FC<SwitchProps> = (props) => {
  const { checked, name, label, disabled, onChange } = props;
  return (
    <>
      <label className={'switch-root'}>
        {label &&
          <span>{label}</span>
        }
        <input
          type='checkbox'  
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
      </label>
    </>
    
  )
}

export {Switch};