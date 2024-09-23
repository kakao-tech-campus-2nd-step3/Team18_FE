import styled from '@emotion/styled';
import type * as CSS from 'csstype';
import { HTMLAttributes } from 'react';

interface FlexProps {
  direction?: 'column' | 'row';
  xGap?: string;
  yGap?: string;
  justifyContent?: CSS.Properties['justifyContent'];
  alignItems?: CSS.Properties['alignItems'];
}

type Props = HTMLAttributes<HTMLDivElement> & FlexProps;

export default function Flex({
  direction = 'row',
  xGap,
  yGap,
  justifyContent = 'start',
  alignItems = 'start',
  children,
  ...rest
}: Props) {
  return (
    <Container
      direction={direction}
      xGap={xGap}
      yGap={yGap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </Container>
  );
}

const Container = styled.div<FlexProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(p) => p.direction};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  column-gap: ${(p) => p.xGap};
  row-gap: ${(p) => p.yGap};
`;
