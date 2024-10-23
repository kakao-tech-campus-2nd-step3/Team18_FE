import { palettes } from '@/assets/styles/global/palettes';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';

export const TableStyle = css`
  ${responsiveStyle({
    default: {
      width: '100%',
      fontSize: '16px',
      borderCollapse: 'collapse',
      wordWrap: 'break-word',
    },
    tablet: {
      fontSize: '15px',
    },
  })}
`;

export const ThStyle = css`
  padding: 10px 30px;
  background-color: ${palettes.backgroundGray};
  border: none;
  border-top: 1px solid ${palettes.black};
  border-bottom: 1px solid ${palettes.black};
  text-align: left;
`;

export const TdStyle = css`
  padding: 20px 30px;
  border: none;
  border-bottom: 1px solid ${palettes.borderGray};
  text-align: left;
`;
