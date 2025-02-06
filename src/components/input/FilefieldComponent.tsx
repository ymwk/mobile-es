import React, { ChangeEvent, useState } from 'react';

interface FilefieldProps {
  id?: string;
  name?: string;
  title?: string;
  placeholder?: string;
  required?: boolean;
  value?: any;
  // onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filefield: React.FC<FilefieldProps> = (props) => {
  const {
    id,
    name,
    title,
    value,
    required,
    ...other
  } = props;

  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name)
    }
  };

  return (
    <>
      <label className="forms-row">
        <input
          type="file"
          name={name}
          id={id}
          title={title}
          value={value}
          className="form-filefield"
          required={required}
          onChange={handleFileChange}
          {...other}
        />
        <span className="form-textfield">{fileName}</span>
        <span className="button-root">파일찾기</span>
      </label>
    </>
  );
};

export { Filefield };