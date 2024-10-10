// styles/emotion.d.ts
import '@emotion/react';
import { palettes } from './global/palettes';
import { mediaQueries } from './global/breakpoints';

declare module '@emotion/react' {
  export interface Theme {
    mediaQueries: typeof mediaQueries;
    palettes: typeof palettes;
  }
}
