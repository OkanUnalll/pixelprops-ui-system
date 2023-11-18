'use client';

import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';

import { ButtonWrapper } from 'ui-system/components/core/base/Button/root';
import type { ButtonWrapperCSSProps } from 'ui-system/components/core/base/Button/root';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>, ButtonWrapperCSSProps {
  readonly children?: React.ReactNode;
  readonly iconLeft?: React.ReactElement
  readonly iconRight?: React.ReactElement;
  readonly href?: string;
}

function Button({
  children,
  iconLeft,
  iconRight,
  href,
  ...rest
}: ButtonProps) {
  const router = useRouter();

  const onRoute = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <ButtonWrapper onClick={onRoute} {...rest}>
      <>{iconLeft}&nbsp;</>
      {children}
      <>&nbsp;{iconRight}</>
    </ButtonWrapper>
  );  
}

export { Button };