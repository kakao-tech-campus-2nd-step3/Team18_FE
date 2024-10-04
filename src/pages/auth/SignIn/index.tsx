import { InnerContainer, Flex, Typo, Icon, Button } from '@components/common';
import Layout from '@features/layout';
import theme from '@assets/styles/theme';
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
                flexDirection: 'column',
              },
            })}
          >
            <Flex
              direction="column"
              css={{
                marginRight: '24px',
                ...responsiveStyle({
                  mobile: { marginRight: '0', alignItems: 'center', marginBottom: '32px' },
                }),
              }}
            >
              <Flex
                direction="column"
                css={responsiveStyle({
                  default: {
                    marginBottom: '72px',
                  },
                  tablet: {
                    marginBottom: '56px',
                  },
                  mobile: {
                    marginBottom: '42px',
                    alignItems: 'center',
                  },
                })}
              >
                <Typo
                  element="h1"
                  size="58px"
                  bold
                  style={{
                    marginBottom: '24px',
                    ...responsiveStyle({ tablet: { fontSize: '32px' }, mobile: { fontSize: '28px' } }),
                  }}
                >
                  지금 바로 시작하세요. 🚀
                </Typo>
                <Typo
                  element="p"
                  size="18px"
                  color="gray"
                  style={responsiveStyle({ tablet: { fontSize: '16px' }, mobile: { fontSize: '14px' } })}
                >
                  안정적이고 투명한 고용 관계의 시작, 지금 바로 경험해보세요!
                </Typo>
              </Flex>
              <Button theme="outlined">
                <Flex alignItems="center" gap={{ x: '12px' }}>
                  <Icon.Social.Google />
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
