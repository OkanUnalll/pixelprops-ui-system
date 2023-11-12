import Box from 'ui-system/components/Box';
import Container from 'ui-system/components/Container';
import Typography from 'ui-system/components/Typography';
import Divider from 'ui-system/components/Divider';

import { SectionTemplate } from 'ui-system/components/core/layout/Section/root';
import type { SectionTemplateCSSProps } from 'ui-system/components/core/layout/Section/root';

interface SectionProps extends SectionTemplateCSSProps {
  readonly children: React.ReactNode;
  readonly title?: string;
  readonly titleAlign?: 'left' | 'center' | 'right';
  readonly showTitleLine?: boolean;
  readonly fullScreen?: boolean;
  readonly noContainer?: boolean;
};

function Section({ children, title, titleAlign, showTitleLine, fullScreen, noContainer, ...root }: SectionProps) {
  return (
    <SectionTemplate $width="100%" $minHeight={fullScreen ? '100vh' : 'auto'} {...root}>
      <Container $isDisable={noContainer} $py={4}>
        {title && (
          <Box $pb={!showTitleLine ? 4 : 2}>
            <Typography $variant="h2" $textAlign={titleAlign}>
              {title}
            </Typography>
            {showTitleLine && (
              <Divider />
            )}
          </Box>
        )}
        <Box $position="relative">
          {children}
        </Box>
      </Container>
    </SectionTemplate>
  );
}

export { Section };