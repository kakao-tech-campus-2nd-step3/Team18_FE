import { Button, Flex, Icon, List, Image, Table, Th, Td } from '@/components/common';
import { CompanyData } from '@/types';
import CompanyInfo from '@/features/companies/CompanyInfo';

type Props = {
  companyList: CompanyData[];
};

export default function CompaniesTable({ companyList }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>이미지</Th>
          <Th>회사 정보</Th>
        </tr>
      </thead>
      <tbody>
        <List
          items={companyList}
          renderItem={(company) => (
            <tr key={company.id}>
              <Td>
                <Image url={company.logoImage} size={{ width: '150px', height: '100px' }} />
              </Td>
              <Td>
                <Flex justifyContent="space-between" alignItems="center" css={{ padding: '15px 0' }}>
                  <CompanyInfo
                    name={company.name}
                    industryOccupation={company.industryOccupation}
                    brand={company.brand}
                    revenuePerYear={company.revenuePerYear}
                  />
                  <Button theme="textbutton">
                    <Icon.Arrow.BigRightBlue />
                  </Button>
                </Flex>
              </Td>
            </tr>
          )}
        />
      </tbody>
    </Table>
  );
}
