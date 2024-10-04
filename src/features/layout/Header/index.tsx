import styled from '@emotion/styled';
import LogoImg from '@assets/images/hirehigher-logo.svg?react';
import Button from '@components/common/Button';
import { Flex } from '@/components/common';
import { css } from '@emotion/react';

export default function Header() {
  return (
    <HeaderContainer>
      <StyledFlex>
        <LogoImg />
        <Nav>
          <Dropdown>
            <option value="none">언어</option>
            <option value="kr">한국어</option>
          </Dropdown>
          <Button theme="outlined" css={[commonButtonStyles]}>
            채용공고 등록
          </Button>
          <Button theme="textbutton" css={[commonButtonStyles]}>
            닉네임
          </Button>
          <Button
            css={[
              commonButtonStyles,
              css`
                background-color: #0a65cc;
                color: #fff;
              `,
            ]}
          >
            로그아웃
          </Button>
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

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 5px;
  }
`;

const StyledFlex = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
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

const Dropdown = styled.select`
  padding: 10px 20px;
  color: #0a65cc;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  border: none;
`;

const commonButtonStyles = css`
  white-space: nowrap;
  border-radius: 4px;
`;
