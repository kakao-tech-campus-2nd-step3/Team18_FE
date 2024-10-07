import { Button, Flex, Typo } from '@/components/common';
import styled from '@emotion/styled';
import RightArrow from '@assets/icons/companyInfo/arrow-right.svg?react';

interface CompanyInfoProps {
  logo: string;
  company: string;
  industryOccupation: string;
  revenuePerYear: string;
}

export default function CompanyInfo({ logo, company, industryOccupation, revenuePerYear }: CompanyInfoProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center" style={{ maxWidth: '1300px' }}>
      <Logo src={logo} />
      <Flex direction="column" justifyContent="center" gap={{ y: '10px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          {company}
        </Typo>
        <Flex alignItems="center" gap={{ x: '8px' }}>
          <InfoName>업직종</InfoName>
          <Info>{industryOccupation}</Info>
          <InfoName>연평균 매출액</InfoName>
          <Info>{revenuePerYear} 원</Info>
        </Flex>
      </Flex>
      <Button style={{ backgroundColor: '#0A65CC', color: '#fff', borderRadius: '4px', whiteSpace: 'nowrap' }}>
        <Flex gap={{ x: '15px' }}>
          <Typo size="16px" style={{ color: '#fff' }}>
            회사 정보 수정하기
          </Typo>
          <RightArrow />
        </Flex>
      </Button>
    </Flex>
  );
}

const Logo = styled.img`
  width: 280px;
  height: auto;
  margin-right: 100px;
`;

const InfoName = styled.div`
  font-size: 16px;
  color: #0a65cc;
  background-color: #e7f0fa;
  border-radius: 15px;
  padding: 5px 10px;
`;

const Info = styled.span`
  font-size: 16px;
  color: #474c54;
  margin-right: 20px;
`;
