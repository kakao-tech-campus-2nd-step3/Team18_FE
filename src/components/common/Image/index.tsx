import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

type Props = {
  url: string;
  size: {
    width: string;
    height: string;
  };
  borderRadius?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Image({ url, borderRadius = '0px', size, ...rest }: Props) {
  return <Container size={size} url={url} borderRadius={borderRadius} {...rest} />;
}

const Container = styled.div<Props>`
  border-radius: ${({ borderRadius }) => borderRadius};
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
  min-width: ${({ size }) => size.width};
  min-height: ${({ size }) => size.height};
`;
