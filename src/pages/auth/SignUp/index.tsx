import Layout from '@features/layout';
import { InnerContainer } from '@components/common';
import { responsiveStyle, responsiveSectionPadding } from '@utils/responsive';
import RoleSelection from '@/features/auth/SignUp/components/RoleSelection';
import SignUpText from '@/features/auth/SignUp/components/SignUpText';

const sectionStyle = responsiveStyle(responsiveSectionPadding);

export default function SignUp() {
  return (
    <Layout>
      <section css={sectionStyle}>
        <InnerContainer>
          <SignUpText />
          <RoleSelection />
        </InnerContainer>
      </section>
    </Layout>
  );
}
