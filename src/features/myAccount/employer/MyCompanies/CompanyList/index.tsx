import { Flex, Typo } from '@/components/common';
import CompaniesTable from './CompaniesTable';

interface MyCompanyProps {
  id: number;
  name: string;
  industryOccupation: string;
  brand: string;
  revenuePerYear: number;
  logoImage: string;
}

interface MyCompanyListProps {
  companyList: MyCompanyProps[];
}

export default function CompanyList({ companyList }: MyCompanyListProps) {
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
