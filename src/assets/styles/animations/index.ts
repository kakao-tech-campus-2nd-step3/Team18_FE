import { css } from '@emotion/react';

export const bounceAnimation = css`
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: translate(-4px, -4px);
  }
`;
