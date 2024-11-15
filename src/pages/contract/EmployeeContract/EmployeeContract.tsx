import { Flex, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import ContractSection from '@/features/contract/EmployeeContract/components/ContractSection';

export type ContractResponseData = {
  salary: string;
  workingHours: string;
  dayOff: string;
  annualPaidLeave: string;
  workingPlace: string;
  responsibilities: string;
  rule: string;
};

export default function EmployeeContract() {
  const { t } = useTranslation();

  return (
    <Layout>
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="24px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                {t('contract.CONTRACT')}
              </Typo>
              <ContractSection />
            </Flex>
          </LineWrapper>
        </Flex>
      </section>
    </Layout>
  );
}

const LineWrapper = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  padding: 100px 100px;
  margin: 52px 0;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;