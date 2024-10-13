import styled from '@emotion/styled';
import LogoIcon from '@assets/images/hirehigher-logo.svg?react';
import CloseIcon from '@assets/icons/navigation/menu-close.svg?react';
import MenuIcon from '@assets/icons/navigation/menu-open.svg?react';
import Button from '@components/common/Button';
import { Flex } from '@/components/common';
import { responsiveStyle } from '@utils/responsive';
import useToggle from '@/hooks/useToggle';

interface NavProps {
  open: boolean;
}

export default function Header() {
  const [menuOpen, toggleMenu] = useToggle();

  return (
    <HeaderContainer>
      <StyledFlex>
        <LogoImg />
        <MobileMenuIcon onClick={toggleMenu}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</MobileMenuIcon>
        <Nav open={menuOpen}>
          <Dropdown>
            <option value="none">언어</option>
            <option value="kr">한국어</option>
          </Dropdown>
          <Button theme="outlined" style={commonButtonStyle}>
            채용공고 등록
          </Button>
          {/* Avatar */}
          <Button theme="textbutton" style={commonButtonStyle}>
            닉네임
          </Button>
          <Button style={customButtonStyle}>로그아웃</Button>
        </Nav>
      </StyledFlex>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
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

const LogoImg = styled(LogoIcon)`
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

const StyledFlex = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;

  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
    },
  })}
`;

const MobileMenuIcon = styled(Flex)`
  display: none;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }

  ${responsiveStyle({
    mobile: {
      display: 'flex',
    },
  })}
`;

const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;
  gap: 15px;
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

const Dropdown = styled.select`
  padding: 10px 20px;
  color: #0a65cc;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border: none;
`;

const commonButtonStyle = {
  whiteSpace: 'nowrap',
  borderRadius: '4px',
};

const customButtonStyle = {
  ...commonButtonStyle,
  backgroundColor: '#0a65cc',
  color: '#fff',
};
