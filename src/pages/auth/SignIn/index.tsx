import { InnerContainer, Flex, Typo, Button } from '@components/common';
import Footer from '@features/layout/footer';
import Header from '@features/layout/Header';

import GoogleIcon from '@assets/icons/icon-google.svg?react';
import Illustration from '@assets/images/signin-Illustration.svg?react';

export default function SignIn() {
  return (
    <>
      <Header />
      <section>
        <InnerContainer maxWidth="1300px">
          <Flex justifyContent="space-between" alignItems="center">
            <div>
              <div css={{ marginBottom: '71px' }}>
                <Typo element="h1" size="56px" style={{ marginBottom: '24px' }}>
                  지금 바로 시작하세요. 🚀
                </Typo>
                <Typo element="p" size="18px" color="gray">
                  안정적이고 투명한 고용 관계의 시작, 지금 바로 경험해보세요!
                </Typo>
              </div>
              <Button theme="outlined">
                <Flex alignItems="center" gap={{ x: '12px' }}>
                  <GoogleIcon />
                  <Typo size="14px" color="gray" element="span" style={{ fontWeight: '300' }}>
                    Sign up with Google
                  </Typo>
                </Flex>
              </Button>
            </div>
            <Illustration />
          </Flex>
        </InnerContainer>
      </section>
      <Footer />
    </>
  );
}
