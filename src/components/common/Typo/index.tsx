import React from 'react';
import { useTheme } from '@emotion/react';
import { PalettesTypes } from '@/assets/styles/global/palettes';

type Props = {
  element?: keyof JSX.IntrinsicElements;
  size?: string;
  color?: PalettesTypes;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Typo({ element = 'div', size, color, children, style }: Props) {
  const theme = useTheme();
  const Component = element;
  const textColor = color ? theme.palettes[color] : 'black';

  return <Component style={{ fontSize: size, color: textColor, ...style }}>{children}</Component>;
}
