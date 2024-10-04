import { Icon } from '@components/common';
import styled from '@emotion/styled';
import Logo from '@assets/images/hirehigher-logo.svg?react';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo />
          <Gap height="24px" />
          <p>(주)Hire Higher 임OO</p>
          <p>대전광역시 유성구 궁동</p>
          <p>전화번호: 042-821-5114</p>
          <Gap height="12px" />
          <p>사업자등록번호: 111-11-00000</p>
          <p>통신판매번호: 2024-대전유성-3147</p>
          <p>유료직업소개사업등록번호: (국내) 제2024-1111111-11-1-00011호</p>
        </Content>
      </Wrapper>
      <Gap border="0.1px solid #767f8c;" />
      <Wrapper>
        <Copyright>
          <p>@ 2024 Hire Higher. All rights Rserved</p>
          <IconContainer>
            <Icon.Social.Facebook />
            <Icon.Social.Youtube />
            <Icon.Social.Instagram />
            <Icon.Social.Twitter />
          </IconContainer>
        </Copyright>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;

  background-color: #18191c;
  font-size: 12px;
  color: #767f8c;
  line-height: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 300px;

  @media (max-width: 1024px) {
    padding: 0 150px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0 43px 0;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Gap = styled.div<{ height?: string; border?: string }>`
  width: 100%;
  height: ${(props) => props.height || '0'};
  border: ${(props) => props.border || 'none'};
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default Footer;
