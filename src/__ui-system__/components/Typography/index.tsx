import { TextProps } from './props.types';
import {
  TextRoot,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Strong as StrongV,
  Em as EmV,
  Del as DelV,
  Ins as InsV,
} from './root';

export function Text({
  children,
  // Base Props
  color,
  fontFamily,
  fontSize,
  fontWeight,
  limit,
  lineHeight,
  textAlign,
  // Other Props
  variant = 'paragraph',
  ...rest
}: TextProps) {
  const findElement = () => {
    switch (variant) {
      case 'h1': return H1;
      case 'h2': return H2;
      case 'h3': return H3;
      case 'h4': return H4;
      case 'h5': return H5;
      case 'h6': return H6;
      case 'paragraph': return Paragraph;
      case 'strong': return StrongV;
      case 'em': return EmV;
      case 'del': return DelV;
      case 'ins': return InsV;
    }
  };

  const element = findElement();

  return (
    <TextRoot
      baseProps={{
        color,
        fontFamily,
        fontSize,
        fontWeight,
        limit,
        lineHeight,
        textAlign
      }}
      as={element}
      {...rest}
    >
      {children}
    </TextRoot>
  );
}

export function Strong({ children, ...rest }: Omit<TextProps, 'variant'>) {
  return (
    <Text variant="strong" {...rest}>
      {children}
    </Text>
  );
}

export function Em({ children, ...rest }: Omit<TextProps, 'variant'>) {
  return (
    <Text variant="em" {...rest}>
      {children}
    </Text>
  );
}

export function Del({ children, ...rest }: Omit<TextProps, 'variant'>) {
  return (
    <Text variant="del" {...rest}>
      {children}
    </Text>
  );
}

export function Ins({ children, ...rest }: Omit<TextProps, 'variant'>) {
  return (
    <Text variant="ins" {...rest}>
      {children}
    </Text>
  );
}