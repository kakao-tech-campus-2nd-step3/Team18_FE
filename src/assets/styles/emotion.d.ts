import '@emotion/react';
import { PalettesTypes } from './global/palettes';

declare module '@emotion/react' {
  export interface Theme {
    palettes: PalettesTypes;
  }
}
