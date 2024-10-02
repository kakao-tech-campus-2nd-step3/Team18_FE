import { ReactNode, useState } from 'react';
import Layout from '@features/layout';
import { Flex, Typo, InnerContainer } from '@components/common';
import { responsiveStyle, responsiveSectionPadding } from '@assets/styles/helpers/responsive';
import RoleSelection from '@features/auth/components/RoleSelection';
import RoleModal from '@features/auth/components/RoleModal';
import useToggle from '@hooks/useToggle';

export default function SignUp() {
  const [isToggle, toggle] = useToggle();
  const [modalContent, setModalContent] = useState<ReactNode>();

  const handleRoleSelect = (modalContent: ReactNode) => {
    toggle();
    setModalContent(modalContent);
  };

  return (
    <Layout>
      <section css={responsiveStyle(responsiveSectionPadding)}>
        <InnerContainer maxWidth="1300px">
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Typo
              element="h1"
              size="24px"
              bold
              style={{
                marginBottom: '38px',
                ...responsiveStyle({
                  tablet: {
                    marginBottom: '28px',
                  },
                  mobile: {
                    marginBottom: '20px',
                    fontSize: '20px',
                  },
                }),
              }}
            >
              가입자 정보 선택
            </Typo>
            <Typo
              element="p"
              size="20px"
              color="gray"
              style={{
                marginBottom: '38px',
                ...responsiveStyle({
                  tablet: {
                    marginBottom: '28px',
                  },
                  mobile: {
                    marginBottom: '20px',
                    fontSize: '16px',
                  },
                }),
              }}
            >
              대상에 해당하는 가입자 정보를 선택해주세요.
            </Typo>
          </Flex>
          <RoleSelection onRoleSelect={handleRoleSelect} />
        </InnerContainer>
      </section>
      {isToggle && <RoleModal content={modalContent} onClose={toggle} />}
    </Layout>
  );
}
