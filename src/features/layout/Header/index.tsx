import styled from '@emotion/styled';
import LogoImg from '@/assets/images/hirehigher-logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={LogoImg} alt="Hire Higher" />
      <Nav>
        <Dropdown>
          <option value="none">언어</option>
          <option value="kr">한국어</option>
        </Dropdown>
        <OutlinedButton>채용공고 등록</OutlinedButton>
        <TextButton>닉네임</TextButton>
        <PrimaryButton>로그아웃</PrimaryButton>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  height: 88px;

  @media (max-width: 1024px) {
    padding: 0 15px;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 5px;
  }
`;

const Logo = styled.img`
  height: 70px;
  width: auto;

  @media (max-width: 720px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 50px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 720px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
  }
`;

const ButtonStyle = styled.button`
  padding: 10px 20px;
  width: 100%;
  background-color: #fff;
  color: #0a65cc;
  border: 1px solid #cee0f5;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;

  @media (max-width: 720px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const PrimaryButton = styled(ButtonStyle)`
  background-color: #0a65cc;
  color: #fff;
  border: none;
`;

const OutlinedButton = styled(ButtonStyle)``;

const TextButton = styled(ButtonStyle)`
  background-color: none;
  border: none;
`;

const Dropdown = styled.select`
  padding: 10px 20px;
  width: 100%;
  color: #0a65cc;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border: none;

  @media (max-width: 720px) {
    padding: 8px 10px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export default Header;
