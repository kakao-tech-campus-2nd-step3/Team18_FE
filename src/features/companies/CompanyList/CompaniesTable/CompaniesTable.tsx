import { Button, Flex, Icon, List, Image, Table, Th, Td } from '@/components/common';
import { CompanyData } from '@/types';
import CompanyInfo from '@/features/companies/CompanyInfo/CompanyInfo';
import { cellStyle, imageSize, imageStyle } from './CompaniesTable.styles';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

type Props = {
  companyList: CompanyData[];
};

export default function CompaniesTable({ companyList }: Props) {
  const navigate = useNavigate();

  const handleCompanyClick = (companyId: number) => {
    navigate(ROUTE_PATH.MY_COMPANY.replace(':companyId', companyId.toString()));
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>회사 정보</Th>
        </tr>
      </thead>
      <tbody>
        <List
          items={companyList}
          renderItem={(company) => (
            <tr key={company.companyId}>
              <Td>
                <Flex justifyContent="space-between" alignItems="center" gap={{ x: '100px' }} css={cellStyle}>
                  <Image url={company.logoImage} size={imageSize} css={imageStyle} />
                  <Flex justifyContent="space-between" alignItems="center" css={{ padding: '15px 0' }}>
                    <CompanyInfo
                      name={company.name}
                      industryOccupation={company.industryOccupation}
                      brand={company.brand}
                      revenuePerYear={company.revenuePerYear}
                    />
                    <Button design="textbutton" onClick={() => handleCompanyClick(company.companyId)}>
                      <Icon.Arrow.BigRightBlue />
                    </Button>
                  </Flex>
                </Flex>
              </Td>
            </tr>
          )}
        />
      </tbody>
    </Table>
  );
}
