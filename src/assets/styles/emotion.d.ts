// styles/emotion.d.ts
import '@emotion/react';
import { palettes } from './global/palettes';

declare module '@emotion/react' {
  export interface Theme {
    palettes: typeof palettes;
  }
}
