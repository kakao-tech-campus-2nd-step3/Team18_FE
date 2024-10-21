import CloseIcon from '@assets/icons/navigation/menu-close.svg?react';
import MenuIcon from '@assets/icons/navigation/menu-open.svg?react';
import Button from '@components/common/Button';
import { Flex, Image } from '@/components/common';
import useToggle from '@/hooks/useToggle';
import {
  commonButtonStyle,
  customButtonStyle,
  Dropdown,
  flexStyle,
  HeaderContainer,
  imageStyle,
  LogoImg,
  menuIconStyle,
  Nav,
} from './index.styles';
import { UserData } from '@/types';

type Props = Pick<UserData, 'profileImage'>;

export default function Header({ profileImage }: Props) {
  const [menuOpen, toggleMenu] = useToggle();

  return (
    <HeaderContainer>
      <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
        <LogoImg />
        <Flex justifyContent="flex-end" css={menuIconStyle} onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </Flex>
        <Nav open={menuOpen}>
          <Dropdown>
            <option value="none">언어</option>
            <option value="kr">한국어</option>
          </Dropdown>
          <Button theme="outlined" style={commonButtonStyle}>
            채용공고 등록
          </Button>
          <Flex justifyContent="center" alignItems="center">
            <Image url={profileImage} size={{ width: '40px', height: '40px' }} css={imageStyle} />
          </Flex>
          <Button style={customButtonStyle}>로그아웃</Button>
        </Nav>
      </Flex>
    </HeaderContainer>
  );
}
