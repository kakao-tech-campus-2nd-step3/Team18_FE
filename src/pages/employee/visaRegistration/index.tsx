import { responsiveStyle } from '@/assets/styles/helpers/responsive';
import { Flex, InnerContainer } from '@/components/common';
import Layout from '@/features/layout';
import VisaRegistrationForm from '@/features/employee/visaRegistration';
import styled from '@emotion/styled';

export default function VisaRegistration() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer maxWidth="1300px" style={innerContainerStyle}>
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={{ y: '60px' }}
            style={{ height: '100%' }}
          >
            <Title>
              외국인 번호 및<BreakableText> 비자 발급 일자 등록</BreakableText>
            </Title>
            <VisaRegistrationForm />
          </Flex>
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 40px 0;
`;

const innerContainerStyle = {
  height: '520px',
  padding: '50px 0',
  border: '1px solid #E9E9E9',
  borderRadius: '12px',
};

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const BreakableText = styled.span`
  ${responsiveStyle({
    default: {
      display: 'inline',
    },
    mobile: {
      display: 'block',
    },
  })}
`;
