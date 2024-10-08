import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  maxWidth: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function InnerContainer({ maxWidth, children, ...rest }: Props) {
  return (
    <Container maxWidth={maxWidth} {...rest}>
      {children}
    </Container>
  );
}

const Container = styled.div<{ maxWidth: string }>`
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 0 auto;
`;
