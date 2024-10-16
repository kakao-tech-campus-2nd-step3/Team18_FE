export const palettes = {
  white: '#fff',
  black: '#000',
  blue: '#0A65CC',
  gray: '#5E6670',
  backgroundGray: '#F1F2F4',
  borderGray: '#e4e5e8',
} as const;

export type PalettesTypes = keyof typeof palettes;
