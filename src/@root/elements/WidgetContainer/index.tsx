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
          <Divider $weight="large" />
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
  background-color: ${props => props.theme.colors.dark2.main};
  border-radius: 12px;
  padding: 1.3rem 1.7rem;
  position: relative;
  box-shadow: 0 0 45px rgba(20, 20, 20, 0.9);

  ${props => cssProps(props)}
`;

export default WidgetContainer;