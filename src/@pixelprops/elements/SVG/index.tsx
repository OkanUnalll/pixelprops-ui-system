import InlineSVG from 'react-inlinesvg';
import styled from 'styled-components';

import { ICSSProps } from '@pixelprops/models/theme/cssprops';
import cssProps from '@pixelprops/theme/functions/cssProps';

interface SVGProps extends ICSSProps {
    src: string;
    width?: number | string;
    height?: number | string;
    fill?: string;
};

const SVG = styled(InlineSVG)<SVGProps>`
    ${props => cssProps(props)}
`;

export default SVG;