import styled from '@emotion/styled';

import { baseProperties, breaker, onDevice } from 'ui-system/core';
import type { BaseProperties, Color, Devices } from 'ui-system/core';

interface BoxProps extends BaseProperties {
  backgroundColor?: Color | Devices<Color>;
}

const Box = styled('div')<BoxProps>(
  (props) => ({
    ...baseProperties(props),
    ...breaker({
      backgroundColor: onDevice(props.backgroundColor),
    })
  })
);


export { Box };