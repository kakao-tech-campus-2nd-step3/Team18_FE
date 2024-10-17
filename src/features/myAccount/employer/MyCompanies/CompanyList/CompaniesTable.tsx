import { Button, Flex, Icon, List, Typo, Image, Table, Th, Td } from '@/components/common';
import { responsiveStyle } from '@/utils/responsive';
import IndustryIcon from '@assets/icons/companyInfo/industry.svg?react';
import BrandIcon from '@assets/icons/companyInfo/brand.svg?react';
import RevenueIcon from '@assets/icons/companyInfo/revenue.svg?react';
import { CompanyItem } from '@/types';
import { css } from '@emotion/react';

type Props = {
  companyList: CompanyItem[];
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
                  <Flex direction="column" gap={{ y: '15px' }} css={{ maxWidth: '570px' }}>
                    <Typo element="h3" size="22px" style={{ fontWeight: 'bold' }}>
                      {company.name}
                    </Typo>
                    <Flex alignItems="center" gap={{ x: '30px' }} css={infoGroupStyle}>
                      <Flex alignItems="center" gap={{ x: '12px' }}>
                        <IndustryIcon />
                        <Typo element="div" style={infoStyle}>
                          {company.industryOccupation}
                        </Typo>
                      </Flex>
                      <Flex alignItems="center" gap={{ x: '12px' }}>
                        <BrandIcon />
                        <Typo element="div" style={infoStyle}>
                          {company.brand}
                        </Typo>
                      </Flex>
                      <Flex alignItems="center" gap={{ x: '12px' }}>
                        <RevenueIcon />
                        <Typo element="div" style={infoStyle}>
                          {company.revenuePerYear} 원
                        </Typo>
                      </Flex>
                    </Flex>
                  </Flex>
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

const infoGroupStyle = css`
  ${responsiveStyle({
    tablet: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '80%',
      gap: '20px',
    },
    mobile: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  })}
`;

const infoStyle = {
  color: '#474C54',
  whiteSpace: 'nowrap',
};
