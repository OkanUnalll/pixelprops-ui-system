import styled from 'styled-components';

import Box from '@root/elements/Box';
import Typography from '@root/elements/Typography';
import Divider from '@root/elements/Divider';

import type { ICSSProps } from '@root/models/theme/cssprops';

import cssProps from '@root/theme/functions/cssProps';

interface WidgetContainerTemplateProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly title?: string;
}

function WidgetContainerTemplate({ className, children, title }: WidgetContainerTemplateProps) {
  return (
    <Box className={className}>
      {title && (
        <Box>
          <Typography $variant="h3">
            {title}
          </Typography>
          <Divider $spacing="small" />
        </Box>
      )}  
      <Box>
       {children}
      </Box>  
    </Box>
  );
}

interface WidgetContainerProps extends ICSSProps {}

const WidgetContainer = styled(WidgetContainerTemplate)<WidgetContainerProps>`
  background-color: ${
    props => props.theme.mode === 'light' ? props.theme.colors.white.main : props.theme.colors.dark.light
  };
  border-radius: 12px;
  padding: 1.3rem 1.7rem;
  position: relative;

  ${props => props.theme.mode === 'light' ? `box-shadow: ${props.theme.boxShadows.xs}` : ''}

  ${props => cssProps(props)}
`;

export default WidgetContainer;