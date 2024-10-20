import { Flex, InnerContainer } from '@/components/common';
import Layout from '@/features/layout';
import VisaRegistrationForm from '@/features/visaRegistration';
import { BreakableText, innerContainerStyle, MainContainer, Title } from './index.styles';

export default function VisaRegistration() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer style={innerContainerStyle}>
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
