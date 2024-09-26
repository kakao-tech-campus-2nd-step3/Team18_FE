import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  borderRadius?: string;
  children: ReactNode;
}

export default function Card({ borderRadius = '12px', children, ...rest }: Props) {
  return (
    <CardContainer borderRadius={borderRadius} {...rest}>
      {children}
    </CardContainer>
  );
}

const CardContainer = styled.div<{ borderRadius: string }>`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.palettes.white};
  box-shadow: 0px 12px 32px 0px rgba(24, 25, 28, 0.08);
  border-radius: ${({ borderRadius }) => borderRadius};
`;
