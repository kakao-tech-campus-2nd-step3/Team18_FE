import { InnerContainer, Flex } from '@components/common';
import Layout from '@features/layout';
import Illustration from '@assets/images/signin-Illustration.svg?react';
import { sectionStyle, innerContainerStyle, catchphraseContainerStyle } from './index.styles';
import { SignInText } from '@/features/auth/SignIn/components/SignInText';
import { SignInButton } from '@/features/auth/SignIn/components/SignInButton';

export default function SignIn() {
  return (
    <Layout>
      <section css={sectionStyle}>
        <InnerContainer>
          <Flex justifyContent="space-between" alignItems="center" css={innerContainerStyle}>
            <Flex direction="column" css={catchphraseContainerStyle}>
              <SignInText />
              <SignInButton />
            </Flex>
            <Illustration />
          </Flex>
        </InnerContainer>
      </section>
    </Layout>
  );
}
