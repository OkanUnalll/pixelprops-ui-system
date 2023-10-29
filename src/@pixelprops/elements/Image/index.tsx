import NextImage from 'next/image';
import styled from 'styled-components';

import type { ICSSProps } from '@pixelprops/models/theme/cssprops';
import cssProps from '@pixelprops/theme/functions/cssProps';

interface ImageProps extends ICSSProps {};

const Image = styled(NextImage)<ImageProps>`
  ${props => cssProps(props)}
`;

export default Image;
