import NextImage from 'next/image';
import styled from 'styled-components';

import type { ICSSProps } from '@root/models/theme/cssprops';
import cssProps from '@root/theme/functions/cssProps';

interface ImageProps extends ICSSProps {};

const Image = styled(NextImage)<ImageProps>`
  ${props => cssProps(props)}
`;

export default Image;
