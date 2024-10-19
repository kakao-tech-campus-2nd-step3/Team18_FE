import { Flex, Typo } from '@/components/common';
import CompaniesTable from './CompaniesTable';
import { CompanyData } from '@/types';

type Props = {
  companyList: CompanyData[];
};

export default function CompanyList({ companyList }: Props) {
  return (
    <Flex direction="column" justifyContent="center" gap={{ y: '15px' }}>
      <Flex alignItems="center" gap={{ x: '20px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          내 회사
        </Typo>
        <Typo element="span" size="16px">
          총 {companyList.length}곳
        </Typo>
      </Flex>
      <CompaniesTable companyList={companyList} />
    </Flex>
  );
}
