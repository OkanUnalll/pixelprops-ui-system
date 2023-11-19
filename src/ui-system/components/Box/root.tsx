import styled from '@emotion/styled';

import { baseProperties } from 'ui-system/core';
import type { BaseProperties } from 'ui-system/core';

interface BoxProps extends BaseProperties {
  color?: string;
}

const Box = styled('div')<BoxProps>({
}, (props) => ({
  ...baseProperties(props),
}));


export { Box };