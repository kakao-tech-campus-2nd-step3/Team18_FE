import { breakpoints } from '@assets/styles/global/breakpoints';
import { responsiveStyle } from '@utils/responsive';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function InnerContainer({ children, ...rest }: Props) {
  return (
    <div
      {...rest}
      css={responsiveStyle({
        default: {
          maxWidth: '1300px',
          margin: '0 auto',
        },
        tablet: {
          maxWidth: breakpoints.tablet,
          padding: '0 12px',
        },
        mobile: {
          maxWidth: breakpoints.mobile,
        },
      })}
    >
      {children}
    </div>
  );
}
