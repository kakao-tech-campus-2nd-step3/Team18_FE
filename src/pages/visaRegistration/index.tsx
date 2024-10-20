import { Flex, InnerContainer, Typo } from '@/components/common';
import Layout from '@/features/layout';
import VisaRegistrationForm from '@/features/visaRegistration';
import { BreakableText, innerContainerStyle, titleStyle } from './index.styles';

export default function VisaRegistration() {
  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={{ y: '60px' }}
            css={{ height: '100%' }}
          >
            <Typo element="h2" size="24px" style={titleStyle}>
              외국인 번호 및<BreakableText> 비자 발급 일자 등록</BreakableText>
            </Typo>
            <VisaRegistrationForm />
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
