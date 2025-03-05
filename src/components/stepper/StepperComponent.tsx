import React from 'react';

interface StepperProps {
  items: Array<string>;
  active: number;
}

const Stepper: React.FC<StepperProps> = (props) => {
  const { items, active } = props;
  return (
    <>
      <ol className="stepper-root">
        {items.map((item, idx) => (
          <li key={item} className={active - 1 === idx ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ol>
    </>
  );
};

export { Stepper };
