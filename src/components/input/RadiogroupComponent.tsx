import React, { useCallback } from 'react';

interface RadiogroupProps {
  type?: 'type1' | 'type3';
  name?: string;
  items: Array<RadioItems>;
  getvalue: string;
  className?: string;
  onChange: (getvalue: string) => void;
}

interface RadioItems {
  label?: string;
  value?: any;
}

const Radiogroup: React.FC<RadiogroupProps> = (props) => {
  const { type, items, name, getvalue, className, onChange } = props;

  const onChangeRadio = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <>
      <div className={`radiogroup-root ${type} ${className ? className : ''}`}>
        {items.map((item) => {
          return (
            <label className="label" key={item.label}>
              <input
                type="radio"
                name={name}
                value={item.value}
                checked={getvalue.toString() === item.value}
                onChange={onChangeRadio}
              />
              {item.label && <span>{item.label}</span>}
            </label>
          );
        })}
      </div>
    </>
  );
};

export { Radiogroup };
