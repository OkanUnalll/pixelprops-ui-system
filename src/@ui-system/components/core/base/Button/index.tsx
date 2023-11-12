import { HTMLAttributes } from 'react';

import { ButtonWrapper } from 'ui-system/components/core/base/Button/root';
import type { ButtonWrapperCSSProps } from 'ui-system/components/core/base/Button/root';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, ButtonWrapperCSSProps {
  readonly children?: React.ReactNode;
  readonly iconLeft?: React.ReactElement
  readonly iconRight?: React.ReactElement;
}

function Button({
  children,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) {
  return (
    <ButtonWrapper {...rest}>
      <>{iconLeft}</>
      {children}
      <>{iconRight}</>
    </ButtonWrapper>
  );  
}

export { Button };