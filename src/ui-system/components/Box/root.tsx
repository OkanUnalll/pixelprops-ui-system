import styled from '@emotion/styled';

import { baseProperties } from 'ui-system/core';
import type { BaseProperties, Color, Devices } from 'ui-system/core';

interface BoxProps extends BaseProperties {
  backgroundColor?: Color | Devices<Color>;
}

const Box = styled('div')<BoxProps>(
  (props) => ({
    ...baseProperties(props),
  })
);


export { Box };