import { useState } from 'react';

import Box from 'ui-system/components/Box';

import { TooltipBox } from 'ui-system/components/core/base/Tooltip/root';

interface TooltipProps {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly placement?: 'top' | 'left' | 'bottom' | 'right';
}

function Tooltip({ children, title, placement, ...rest }: TooltipProps) {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      $display="inline-block"
      $css="position: relative;"
    >
      <TooltipBox $isShow={isShow} $placement={placement} >
        {title}
      </TooltipBox>  
      <Box $width="auto" $display="inline-block">
        {children}
      </Box>  
    </Box>
  );
}

export { Tooltip };