import React from 'react';

interface TextfieldProps {
  id?: string;
  name?: string;
  title?: string;
  type?: 'text' | 'password' | 'button';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  value?: any;
  // style: React.CSSProperties
  width?: number;
  className?: string;
  other?: any;
}

const Textfield: React.FC<TextfieldProps> = (props) => {
  const {
    type = 'text',
    id,
    name,
    title,
    placeholder,
    value,
    required,
    disabled,
    readOnly,
    className,
    width,
    ...other
  } = props;
  return (
    <>
      <input
        type={type}
        name={name}
        id={id}
        title={title}
        placeholder={placeholder}
        value={value}
        className={`form-textfield ${className ? className : ''}`}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        style={{ width: width }}
        {...other}
      />
    </>
  );
}

export {Textfield};