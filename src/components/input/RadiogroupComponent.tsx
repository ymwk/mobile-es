import React, { useState } from 'react';

interface RadiogroupProps {
  id?: string;
  type?: 'type1' | 'type2' | 'type3' | 'type4';
  name?: string;
  items: Array<RadioItems>;
  className?: string;
  select?: boolean | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioItems {
  label?: string;
  value?: any;
}
const Radiogroup: React.FC<RadiogroupProps> = ({ id, items, name, className, type, select, onChange }) => {
  const [radioVal, setRadioVal] = useState(items[0].value);

  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    } else {
      const selectedValue = event.target.value;
      setRadioVal(selectedValue);
      console.log(selectedValue);
    }
  };

  return (
    <div className={`radiogroup-root ${type} ${className ? className : ''}`}>
      {items.map((item) => {
        return (
          <label className="label" key={item.value}>
            <input
              key={item.label}
              id={id}
              type="radio"
              name={name}
              value={item.value}
              checked={select ? select === item.value.toString() : radioVal === item.value.toString()}
              onChange={onChangeRadio}
            />
            {item.label && <span>{item.label}</span>}
          </label>
        );
      })}
    </div>
  );
};

export { Radiogroup };
