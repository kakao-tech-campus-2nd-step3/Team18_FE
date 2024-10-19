import { Flex, Typo } from '@/components/common';
import { CompanyData } from '@/types';
import IndustryIcon from '@assets/icons/companyInfo/industry.svg?react';
import BrandIcon from '@assets/icons/companyInfo/brand.svg?react';
import RevenueIcon from '@assets/icons/companyInfo/revenue.svg?react';
import { infoStyle, infoWrapperStyle } from './index.styles';

type Props = Pick<CompanyData, 'name' | 'industryOccupation' | 'brand' | 'revenuePerYear'>;

export default function CompanyInfo({ name, industryOccupation, brand, revenuePerYear }: Props) {
  return (
    <Flex direction="column" gap={{ y: '15px' }} css={infoWrapperStyle}>
      <Typo element="h3" size="22px" style={{ fontWeight: 'bold' }}>
        {name}
      </Typo>
      <Flex alignItems="center" gap={{ x: '30px' }} css={infoStyle}>
        <Flex alignItems="center" gap={{ x: '12px' }}>
          <IndustryIcon />
          <Typo element="div">{industryOccupation}</Typo>
        </Flex>
        <Flex alignItems="center" gap={{ x: '12px' }}>
          <BrandIcon />
          <Typo element="div">{brand}</Typo>
        </Flex>
        <Flex alignItems="center" gap={{ x: '12px' }}>
          <RevenueIcon />
          <Typo element="div">{revenuePerYear} 원</Typo>
        </Flex>
      </Flex>
    </Flex>
  );
}
