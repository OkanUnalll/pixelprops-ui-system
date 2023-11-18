import styled from 'styled-components';
import NextImage, { ImageProps } from 'next/image';

import { cssProps } from 'ui-system/core';
import type { ICSSProps } from 'ui-system/core';

export interface ImageTemplateCSSProps extends ICSSProps, ImageProps {};

const ImageTemplate = styled(NextImage)<ImageTemplateCSSProps>`
  ${props => cssProps(props)}
`;

export { ImageTemplate };
