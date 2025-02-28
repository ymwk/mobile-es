import React from 'react';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { MobileDatePicker, MobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker';
import { PickersCalendarHeaderProps } from '@mui/x-date-pickers/PickersCalendarHeader';
import { IconButton } from '@components/button';

function CustomCalendarHeader(props: PickersCalendarHeaderProps<Dayjs>) {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () => onMonthChange(currentMonth.add(1, 'month'), 'left');
  const selectPreviousMonth = () => onMonthChange(currentMonth.subtract(1, 'month'), 'right');

  return (
    <div className="datepk-header">
      <IconButton icon="lt" label="이전달" className="prev" onClick={selectPreviousMonth} />
      <span>{currentMonth.format('YYYY. MM')}</span>
      <IconButton icon="gt" label="다음달" className="next" onClick={selectNextMonth} />
    </div>
  );
}

interface DateInputProps {
  label?: any;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

function Datepk(
  props: Omit<MobileDatePickerProps<Dayjs>, 'open' | 'onOpen' | 'onClose' | 'onChange'>
) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const { format } = props;
  const today = dayjs(new Date());

  function DateInput(props: DateInputProps) {
    const { setOpen, label } = props;

    return (
      <input
        type="text"
        value={label ? label : today.format('YYYY-MM-DD')}
        className="form-textfield form-datepk"
        onClick={() => setOpen?.((prev) => !prev)}
        readOnly
      />
    );
  }

  return (
    <MobileDatePicker
      slots={{
        ...props.slots,
        calendarHeader: CustomCalendarHeader,
        textField: DateInput,
      }}
      slotProps={{
        ...props.slotProps,
        textField: { setOpen } as any,
        toolbar: { hidden: true },
        actionBar: { actions: [] },
      }}
      open={open}
      defaultValue={today}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      label={value == null ? null : format ? value.format(format) : value.format('YYYY-MM-DD')}
      onChange={(newValue) => {
        setValue(newValue);
        setOpen(false);
      }}
      {...props}
    />
  );
}

export {Datepk};