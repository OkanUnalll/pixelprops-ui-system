import { device } from 'ui-system/core';
import type { IDevice, BreakPoint } from 'ui-system/core';

const getResponsive = (sizes: IDevice) => {
  const sizeKeys = Object.keys(sizes);

  let css = '';

  sizeKeys.forEach((key) => {
    const sizeKey = key as BreakPoint;
    
    css += `
      @media ${device[sizeKey]} {
        ${sizes[sizeKey]}
      }
    `;
  });

  return css;
};

export { getResponsive };
