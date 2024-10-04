import React from 'react';
import { useTheme } from '@emotion/react';
import { PalettesTypes } from '@/assets/styles/global/palettes';

type Props = {
  element?: keyof JSX.IntrinsicElements;
  size?: string;
  color?: PalettesTypes;
  style?: React.CSSProperties;
  bold?: boolean;
  children: React.ReactNode;
};

export default function Typo({ element = 'div', size, color, children, style, bold }: Props) {
  const theme = useTheme();
  const Component = element;
  const textColor = color ? theme.palettes[color] : 'black';
  const fontWeight = bold ? '700' : '400';

  return <Component css={{ fontSize: size, color: textColor, fontWeight, ...style }}>{children}</Component>;
}
