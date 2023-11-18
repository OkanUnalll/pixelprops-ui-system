import { HTMLAttributes } from 'react';

import { BoxWrapper } from 'ui-system/components/core/base/Box/root';
import type { BoxWrapperCSSProps } from 'ui-system/components/core/base/Box/root';

interface BoxProps extends HTMLAttributes<HTMLDivElement>, BoxWrapperCSSProps {
  readonly children: React.ReactNode;
};

function Box({ children, ...rest }: BoxProps) {
  return (
    <BoxWrapper {...rest}>
      {children}
    </BoxWrapper>
  );
};

export { Box };