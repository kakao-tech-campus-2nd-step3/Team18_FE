import CloseIcon from '@assets/icons/navigation/menu-close.svg?react';
import MenuIcon from '@assets/icons/navigation/menu-open.svg?react';
import Button from '@components/common/Button';
import { Flex, Image } from '@/components/common';
import useToggle from '@/hooks/useToggle';
import LanguageFilter from './components/LanguageFilter';
import {
  commonButtonStyle,
  customButtonStyle,
  flexStyle,
  HeaderContainer,
  imageStyle,
  LogoImg,
  menuIconStyle,
  Nav,
} from './index.styles';
import { UserData } from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, toggleMenu] = useToggle();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate(ROUTE_PATH.HOME);
  };

  return (
    <HeaderContainer>
      <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
        <LogoImg />
        <Flex justifyContent="flex-end" css={menuIconStyle} onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Flex>
        <Nav open={menuOpen}>
          <LanguageFilter />
          {!user ? (
            <Button style={customButtonStyle}>로그인</Button>
          ) : (
            <>
              {user.type === 'employer' && (
                <Button design="outlined" style={commonButtonStyle}>
                  채용공고 등록
                </Button>
              )}
              <Flex justifyContent="center" alignItems="center">
                <Image url={user.profileImage} size={{ width: '40px', height: '40px' }} css={imageStyle} />
              </Flex>
              <Button style={customButtonStyle} onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          )}
        </Nav>
      </Flex>
    </HeaderContainer>
  );
}
