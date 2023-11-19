export const unitDetector = (value: number | string | undefined): string | undefined => {
  if (typeof value === 'number') {
    return `${value}rem`;
  } else if (typeof value === 'string') {
    return value;
  }

  return undefined;
};
