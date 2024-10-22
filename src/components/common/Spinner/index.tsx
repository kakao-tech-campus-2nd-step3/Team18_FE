import { css } from '@emotion/react';

const spinnerStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner() {
  return <div css={spinnerStyle} />;
}
