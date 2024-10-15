import { ReactNode, useState } from 'react';
import Layout from '@features/layout';
import { InnerContainer } from '@components/common';
import { responsiveStyle, responsiveSectionPadding } from '@utils/responsive';
import RoleSelection from '@/features/auth/SignUp/RoleSelection';
import RoleModal from '@/features/auth/SignUp/components/RoleModal';
import useToggle from '@hooks/useToggle';
import SignUpText from '@/features/auth/SignUp/SignUpText';

const sectionStyle = responsiveStyle(responsiveSectionPadding);

export default function SignUp() {
  const [isToggle, toggle] = useToggle();
  const [modalContent, setModalContent] = useState<ReactNode>();

  const handleRoleSelect = (modalContent: ReactNode) => {
    toggle();
    setModalContent(modalContent);
  };

  return (
    <Layout>
      <section css={sectionStyle}>
        <InnerContainer>
          <SignUpText />
          <RoleSelection onRoleSelect={handleRoleSelect} />
        </InnerContainer>
      </section>
      {isToggle && <RoleModal content={modalContent} onClose={toggle} />}
    </Layout>
  );
}
