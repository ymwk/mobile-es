import React from 'react';
import { IconButton } from '@components/button';
import { Tooltip, ClickAwayListener, Grow } from '@mui/material';

interface TooltipHelpProps {
  className?: string;
  children?: React.ReactNode;
}

const TooltipHelp: React.FC<TooltipHelpProps> = (props) => {
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        open={open}
        onOpen={handleTooltipOpen}
        onClose={handleTooltipClose}
        // disableFocusListener
        disableHoverListener
        disableTouchListener
        slots={{
          transition: Grow,
        }}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -20],
                },
              },
            ],
            disablePortal: true,
          },
        }}
        classes={{ popper: 'tooltip-root' }}
        title={
          <React.Fragment>
            {children}
            <IconButton label="닫기" icon="close" onClick={handleTooltipClose} />
          </React.Fragment>
        }
      >
        <IconButton label="도움말" icon="help" onClick={handleTooltipOpen} />
      </Tooltip>
    </ClickAwayListener>
  );
};

export { TooltipHelp };