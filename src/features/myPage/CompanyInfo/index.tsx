import { Button, Flex, Typo } from '@/components/common';
import styled from '@emotion/styled';
import RightArrow from '@assets/icons/companyInfo/arrow-right.svg?react';
import { responsiveStyle } from '@/assets/styles/helpers/responsive';

interface CompanyInfoProps {
  logo: string;
  company: string;
  industryOccupation: string;
  revenuePerYear: string;
}

export default function CompanyInfo({ logo, company, industryOccupation, revenuePerYear }: CompanyInfoProps) {
  return (
    <CompanyFlex justifyContent="space-between" alignItems="center">
      <Logo src={logo} />
      <InfoFlex>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          {company}
        </Typo>
        <InfoGroup>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <Typo element="div" size="16px" style={infoNameStyle}>
              업직종
            </Typo>
            <Typo element="div" style={infoStyle}>
              {industryOccupation}
            </Typo>
          </Flex>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <Typo element="div" size="16px" style={infoNameStyle}>
              연평균 매출액
            </Typo>
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

const infoNameStyle = {
  backgroundColor: '#E7F0FA',
  color: '#0A65CC',
  borderRadius: '15px',
  padding: '5px 10px',
  whiteSpace: 'nowrap',
};

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
