import { HTMLAttributes, ReactNode } from 'react';
import { TableStyle, TdStyle, ThStyle } from './index.style';

type TableProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableElement>;

type ThProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

type TdProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLTableCellElement>;

export function Table({ children, ...rest }: TableProps) {
  return (
    <table css={TableStyle} {...rest}>
      {children}
    </table>
  );
}

export function Th({ children, ...rest }: ThProps) {
  return (
    <th css={ThStyle} {...rest}>
      {children}
    </th>
  );
}

export function Td({ children, ...rest }: TdProps) {
  return (
    <td css={TdStyle} {...rest}>
      {children}
    </td>
  );
}
