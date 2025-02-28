import React, { useState, useCallback } from 'react';

interface RadiogroupProps {
  id?: string
  type?: 'type1' | 'type2' | 'type3'
  name?: string
  items: Array<RadioItems>
  className?: string
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

interface RadioItems {
  label?: string;
  value?: any;
}

const Radiogroupbk: React.FC<RadiogroupProps> = (props) => {
  const { type, items, name, className } = props;
  const [radioVal, setRadioVal] = useState(items[0].value);

  const onChangeRadio = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRadioVal(e.target.value);
    },
    []
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
                checked={radioVal.toString() === item.value}
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

export { Radiogroupbk };
