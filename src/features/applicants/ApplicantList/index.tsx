import { palettes } from '@/assets/styles/global/palettes';
import { Button, Flex, List, Typo } from '@/components/common';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ApplicantProps {
  userId: number;
  name: string;
  resumeId: number;
  applyId: number;
  applicantNation: string;
  korean: string;
}

interface ApplicantListProps {
  applicantList: ApplicantProps[];
}

export default function ApplicantList({ applicantList }: ApplicantListProps) {
  return (
    <Flex direction="column" justifyContent="center" gap={{ y: '15px' }}>
      <Flex alignItems="center" gap={{ x: '20px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          지원자 목록
        </Typo>
        <Typo element="span" size="16px">
          총 {applicantList.length}건
        </Typo>
      </Flex>
      <Table>
        <thead>
          <tr>
            <Th>이름</Th>
            <Th>국적</Th>
            <Th>한국어 실력</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          <List
            items={applicantList}
            renderItem={(applicant) => (
              <tr key={applicant.applyId}>
                <Td>{applicant.name}</Td>
                <Td>{applicant.applicantNation}</Td>
                <Td>{applicant.korean}</Td>
                <Td css={buttonsCellStyle}>
                  <Flex justifyContent="flex-end" alignItems="center" gap={{ x: '20px' }} css={buttonGroupStyle}>
                    <Button css={buttonStyle}>이력서</Button>
                    <Button css={buttonStyle}>지원서</Button>
                    <Button css={buttonStyle}>계약하기</Button>
                  </Flex>
                </Td>
              </tr>
            )}
          />
        </tbody>
      </Table>
    </Flex>
  );
}

const Table = styled.table`
  ${responsiveStyle({
    default: {
      width: '100%',
      fontSize: '16px',
      borderCollapse: 'collapse',
      wordWrap: 'break-word',
    },
    tablet: {
      fontSize: '15px',
    },
  })}
`;

const Th = styled.th`
  padding: 10px 30px;
  background-color: ${palettes.backgroundGray};
  border: none;
  border-top: 1px solid ${palettes.black};
  border-bottom: 1px solid ${palettes.black};
  text-align: left;
`;

const Td = styled.td`
  padding: 20px 30px;
  border: none;
  border-bottom: 1px solid ${palettes.borderGray};
  text-align: left;
`;

const buttonsCellStyle = css`
  ${responsiveStyle({
    default: {
      width: '600px',
    },
    tablet: {
      width: '280px',
    },
    mobile: {
      width: '200px',
    },
  })}
`;

const buttonGroupStyle = css`
  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '10px',
    },
  })}
`;

const buttonStyle = css`
  ${responsiveStyle({
    default: {
      whiteSpace: 'nowrap',
    },
    mobile: {
      fontSize: '15px',
    },
  })}
`;
