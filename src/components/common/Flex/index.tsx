import styled from '@emotion/styled';
import type * as CSS from 'csstype';
import { HTMLAttributes } from 'react';

type FlexGap = {
  x?: string;
  y?: string;
};

interface FlexProps {
  direction?: 'column' | 'row';
  gap?: FlexGap;
  wrap?: boolean;
  justifyContent?: CSS.Properties['justifyContent'];
  alignItems?: CSS.Properties['alignItems'];
}

type Props = HTMLAttributes<HTMLDivElement> & FlexProps;

export default function Flex({
  direction = 'row',
  gap,
  wrap = false,
  justifyContent = 'start',
  alignItems = 'start',
  children,
  ...rest
}: Props) {
  return (
    <Container
      direction={direction}
      gap={gap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      {...rest}
    >
      {children}
    </Container>
  );
}

const Container = styled.div<FlexProps>`
  width: 100%;
  display: flex;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  flex-direction: ${(p) => p.direction};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  column-gap: ${(p) => p.gap?.x};
  row-gap: ${(p) => p.gap?.y};
`;
