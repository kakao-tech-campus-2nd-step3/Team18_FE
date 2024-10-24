import { breakpoints } from '@assets/styles/global/breakpoints';
import { responsiveStyle } from '@utils/responsive';
import { HTMLAttributes, ReactNode } from 'react';

const containerStyle = responsiveStyle({
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
});

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function InnerContainer({ children, ...rest }: Props) {
  return (
    <div css={containerStyle} {...rest}>
      {children}
    </div>
  );
}
