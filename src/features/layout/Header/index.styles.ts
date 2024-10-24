import { palettes } from '@/assets/styles/global/palettes';
import { responsiveStyle } from '@/utils/responsive';
import styled from '@emotion/styled';
import LogoIcon from '@assets/images/hirehigher-logo.svg?react';
import { css } from '@emotion/react';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palettes.white};
  height: 88px;

  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
      height: 'auto',
      padding: '10px',
    },
    mobile: {
      padding: '5px',
    },
  })}
`;

export const LogoImg = styled(LogoIcon)`
  cursor: pointer;
  height: auto;

  ${responsiveStyle({
    tablet: {
      width: '150px',
    },
    mobile: {
      width: '160px',
    },
  })}
`;

export const flexStyle = css`
  width: 100%;
  max-width: 1300px;

  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
    },
  })}
`;

export const menuIconStyle = css`
  display: none;

  svg {
    cursor: pointer;
  }

  ${responsiveStyle({
    mobile: {
      display: 'flex',
    },
  })}
`;

type NavProps = {
  open: boolean;
};

export const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  gap: 35px;
  transition: all 0.3s linear;

  ${responsiveStyle({
    tablet: {
      width: '100%',
      justifyContent: 'center',
      marginTop: '10px',
    },
    mobile: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  })}

  @media (max-width: 480px) {
    max-height: ${({ open }) => (open ? '420px' : '0')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  }
`;

export const commonButtonStyle = {
  whiteSpace: 'nowrap',
  borderRadius: '4px',
};

export const imageStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const customButtonStyle = {
  ...commonButtonStyle,
  backgroundColor: `${palettes.blue}`,
  color: `${palettes.white}`,
};
