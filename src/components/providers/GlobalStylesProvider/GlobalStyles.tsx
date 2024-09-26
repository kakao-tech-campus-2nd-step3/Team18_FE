import { Global, css } from '@emotion/react';
import resetStyles from '@assets/styles/global/resetStyles';

const globalStyles = css`
  ${resetStyles}
`;

export default function GlobalStyles() {
  return <Global styles={globalStyles} />;
}
