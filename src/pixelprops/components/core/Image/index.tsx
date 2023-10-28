import NextImage from 'next/image';
import styled from 'styled-components';

import type { ICSSProps } from '@/models/theme/cssProps';
import cssProps from '@/assets/theme/functions/cssProps';

interface ImageProps extends ICSSProps {};

const Image = styled(NextImage)<ImageProps>`
  ${props => cssProps(props)}
  ${props => props.$css}  
`;

export default Image;
