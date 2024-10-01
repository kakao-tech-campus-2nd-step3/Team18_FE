import { InnerContainer, Flex, Typo, Button } from '@components/common';
import Layout from '@features/layout';
import theme from '@assets/styles/theme';
import GoogleIcon from '@assets/icons/icon-google.svg?react';
import Illustration from '@assets/images/signin-Illustration.svg?react';
import { responsiveSectionPadding, responsiveStyle } from '@/assets/styles/helpers/responsive';

export default function SignIn() {
  return (
    <Layout>
      <section
        css={{
          backgroundColor: theme.palettes.backgroundGray,
          ...responsiveStyle(responsiveSectionPadding),
        }}
      >
        <InnerContainer maxWidth="1300px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            css={responsiveStyle({
              mobile: {
                'flex-direction': 'column',
              },
            })}
          >
            <Flex
              direction="column"
              css={{
                marginRight: '24px',
                ...responsiveStyle({
                  mobile: { 'margin-right': '0', 'align-items': 'center', 'margin-bottom': '32px' },
                }),
              }}
            >
              <Flex
                direction="column"
                css={responsiveStyle({
                  default: {
                    'margin-bottom': '72px',
                  },
                  tablet: {
                    'margin-bottom': '56px',
                  },
                  mobile: {
                    'margin-bottom': '42px',
                    'align-items': 'center',
                  },
                })}
              >
                <Typo
                  element="h1"
                  size="58px"
                  style={{
                    marginBottom: '24px',
                    ...responsiveStyle({ tablet: { 'font-size': '32px' }, mobile: { 'font-size': '28px' } }),
                  }}
                >
                  지금 바로 시작하세요. 🚀
                </Typo>
                <Typo
                  element="p"
                  size="18px"
                  color="gray"
                  style={responsiveStyle({ tablet: { 'font-size': '16px' }, mobile: { 'font-size': '14px' } })}
                >
                  안정적이고 투명한 고용 관계의 시작, 지금 바로 경험해보세요!
                </Typo>
              </Flex>
              <Button theme="outlined">
                <Flex alignItems="center" gap={{ x: '12px' }}>
                  <GoogleIcon />
                  <Typo size="14px" color="gray" element="span" style={{ fontWeight: '300' }}>
                    Sign up with Google
                  </Typo>
                </Flex>
              </Button>
            </Flex>
            <Illustration />
          </Flex>
        </InnerContainer>
      </section>
    </Layout>
  );
}
