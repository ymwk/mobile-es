import React from 'react';

interface CheckboxProps {
  type?: 'type1' | 'type2' | 'type3'
  name?: string
  label?: string
  disabled?: boolean
  required?: boolean
  checked?: boolean
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { type='type1', checked, name, label, disabled, required, onChange } = props;
  return (
    <>
      <label className={`checkbox-root ${type}`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          required={required}
          onChange={onChange}
        />
        {label && <span className="label">{label}</span>}
      </label>
    </>
  );
}

export {Checkbox};