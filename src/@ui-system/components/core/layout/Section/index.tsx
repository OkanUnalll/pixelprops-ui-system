import Box from 'ui-system/components/Box';
import Continer from 'ui-system/components/Container';

interface SectionProps {
  readonly children: React.ReactNode;
  readonly title: string;  
};

function Section({ children, title }: SectionProps) {
  return (
    <Box $width="100%">
      <Continer>
        {children}
      </Continer>
    </Box>
  );
}

export { Section };