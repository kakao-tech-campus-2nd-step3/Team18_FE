import { Button, Flex, Typo } from '@/components/common';
import styled from '@emotion/styled';
import IndustryIcon from '@assets/icons/companyInfo/industry.svg?react';
import BrandIcon from '@assets/icons/companyInfo/brand.svg?react';
import RevenueIcon from '@assets/icons/companyInfo/revenue.svg?react';
import RightArrow from '@assets/icons/companyInfo/arrow-right.svg?react';
import { responsiveStyle } from '@/assets/styles/helpers/responsive';

interface CompanyInfoProps {
  company: string;
  industryOccupation: string;
  brand: string;
  revenuePerYear: string;
  logo: string;
}

export default function CompanyInfo({ company, industryOccupation, brand, revenuePerYear, logo }: CompanyInfoProps) {
  return (
    <CompanyFlex justifyContent="space-between" alignItems="center">
      <Logo src={logo} />
      <InfoFlex>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          {company}
        </Typo>
        <InfoGroup>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <IndustryIcon />
            <Typo element="div" style={infoStyle}>
              {industryOccupation}
            </Typo>
          </Flex>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <BrandIcon />
            <Typo element="div" style={infoStyle}>
              {brand}
            </Typo>
          </Flex>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <RevenueIcon />
            <Typo element="div" style={infoStyle}>
              {revenuePerYear} 원
            </Typo>
          </Flex>
        </InfoGroup>
      </InfoFlex>
      <Button style={customButtonStyle}>
        <Flex gap={{ x: '15px' }}>
          <Typo size="16px" style={{ color: '#fff' }}>
            회사 정보 수정하기
          </Typo>
          <RightArrow />
        </Flex>
      </Button>
    </CompanyFlex>
  );
}

const CompanyFlex = styled(Flex)`
  ${responsiveStyle({
    default: {
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '100px',
    },
    tablet: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
    },
    mobile: {
      flexDirection: 'column',
    },
  })}
`;

const Logo = styled.img`
  width: 280px;
  height: auto;

  ${responsiveStyle({
    tablet: {
      margin: '0 auto',
      width: '50%',
    },
    mobile: {
      width: '70%',
    },
  })}
`;

const InfoFlex = styled(Flex)`
  ${responsiveStyle({
    default: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '10px',
    },
    tablet: {
      alignItems: 'center',
      margin: '10px 0 20px 0',
      width: '70%',
    },
  })}
`;

const InfoGroup = styled(Flex)`
  ${responsiveStyle({
    default: {
      alignItems: 'center',
      gap: '30px',
    },
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

const customButtonStyle = {
  backgroundColor: '#0A65CC',
  color: '#fff',
  borderRadius: '4px',
  whiteSpace: 'nowrap',
};
