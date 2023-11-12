import { device } from 'ui-system/core';
import type { ISize, Size } from 'ui-system/core';

const getResponsive = (sizes: ISize) => {
  const sizeKeys = Object.keys(sizes);

  let css = '';

  sizeKeys.forEach((key) => {
    const sizeKey = key as Size;
    
    css += `
      @media ${device[sizeKey]} {
        ${sizes[sizeKey]}
      }
    `;
  });

  return css;
};

export { getResponsive };
