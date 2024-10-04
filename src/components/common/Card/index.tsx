import styled from '@emotion/styled';
import { PalettesTypes } from '@assets/styles/global/palettes';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  borderColor?: PalettesTypes;
  borderRadius?: string;
  children: ReactNode;
}

export default function Card({ borderColor, borderRadius = '12px', children, ...rest }: Props) {
  return (
    <CardContainer borderColor={borderColor} borderRadius={borderRadius} {...rest}>
      {children}
    </CardContainer>
  );
}

const CardContainer = styled.div<Omit<Props, 'children'>>`
  display: inline-block;
  box-shadow: 0px 12px 32px 0px rgba(24, 25, 28, 0.08);
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
