import { device } from 'ui-system/core';
import type { IDevice } from 'ui-system/core';

const getResponsive = (sizes: IDevice) => {
  let css = `
    @media ${device.xxl} {
      ${sizes.xxl}
    }

    @media ${device.xl} {
      ${sizes.xl}
    }

    @media ${device.lg} {
      ${sizes.lg}
    }

    @media ${device.md} {
      ${sizes.md}
    }

    @media ${device.sm} {
      ${sizes.sm}
    }

    @media ${device.xs} {
      ${sizes.xs}
    }
  `;

  return css;
};

export { getResponsive };
