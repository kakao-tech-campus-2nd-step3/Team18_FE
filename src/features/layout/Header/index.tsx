import CloseIcon from '@assets/icons/navigation/menu-close.svg?react';
import MenuIcon from '@assets/icons/navigation/menu-open.svg?react';
import Button from '@components/common/Button';
import { Flex, Image } from '@/components/common';
import useToggle from '@/hooks/useToggle';
import LanguageFilter from './components/LanguageFilter';
import { customButtonStyle, flexStyle, HeaderContainer, imageStyle, LogoImg, menuIconStyle, Nav } from './index.styles';
import { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useUser } from '@/components/providers/User.provider';
import { userLocalStorage } from '@/utils/storage';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, toggleMenu] = useToggle();
  const { user, setUser } = useUser();
  const { t } = useTranslation();

  const goToHome = () => {
    startTransition(() => {
      navigate(ROUTE_PATH.HOME);
    });
  };

  const login = () => {
    navigate(ROUTE_PATH.AUTH.SIGN_IN);
  };

  const logout = () => {
    userLocalStorage.removeToken();
    userLocalStorage.removeUser();
    setUser(undefined);
    startTransition(() => {
      navigate(ROUTE_PATH.HOME);
    });
  };

  const goToMyPage = () => {
    if (user?.type === 'employer') {
      navigate(ROUTE_PATH.MY_PAGE.EMPLOYER);
    } else if (user?.type === 'employee') {
      navigate(ROUTE_PATH.EMPLOYEE.EMPLOYEE_PAGE);
    }
  };

  return (
    <HeaderContainer>
      <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
        <LogoImg className="logo" onClick={goToHome} />
        <Flex justifyContent="flex-end" css={menuIconStyle} onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Flex>
        <Nav open={menuOpen}>
          <LanguageFilter />
          {!user ? (
            <Button style={customButtonStyle} onClick={login}>
              {t('header.login')}
            </Button>
          ) : (
            <>
              <Flex justifyContent="center" alignItems="center" onClick={goToMyPage}>
                <Image
                  data-testid="profile"
                  url={user.profileImage}
                  size={{ width: '40px', height: '40px' }}
                  css={imageStyle}
                />
              </Flex>
              <Button style={customButtonStyle} onClick={logout}>
                {t('header.logout')}
              </Button>
            </>
          )}
        </Nav>
      </Flex>
    </HeaderContainer>
  );
}
