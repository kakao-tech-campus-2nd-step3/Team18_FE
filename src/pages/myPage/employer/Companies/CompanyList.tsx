import { Flex, Typo } from '@/components/common';
import CompaniesTable from './CompaniesTable';
import { CompanyData } from '@/types';
import { useTranslation } from 'react-i18next';

type Props = {
  companyList: CompanyData[];
};

export default function CompanyList({ companyList }: Props) {
  const { t } = useTranslation();

  return (
    <Flex direction="column" justifyContent="center" gap={{ y: '15px' }}>
      <Flex alignItems="center" gap={{ x: '20px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          {t('employerMyPage.my_companies')}
        </Typo>
        <Typo element="span" size="16px">
          {t('employerMyPage.total_companies', { count: companyList.length })}
        </Typo>
      </Flex>
      <CompaniesTable companyList={companyList} />
    </Flex>
  );
}
