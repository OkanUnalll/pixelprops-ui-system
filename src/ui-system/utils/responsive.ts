import { BreakPoints } from 'ui-system/theme';

interface Responsive {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export const responsive = (sizes: Responsive) => {
  let css = `
    @media (min-width: ${device.xxl}) {
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
