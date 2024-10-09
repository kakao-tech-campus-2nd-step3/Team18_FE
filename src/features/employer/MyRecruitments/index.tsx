import { responsiveStyle } from '@/assets/styles/helpers/responsive';
import { Button, Flex, Typo } from '@/components/common';
import styled from '@emotion/styled';

interface RecruitmentProps {
  koreanTitle: string;
  area: string;
  koreanDetailedDescription: string;
}

interface RecruitmentsListProps {
  recruitmentsList: RecruitmentProps[];
}

export default function MyRecruitments({ recruitmentsList }: RecruitmentsListProps) {
  return (
    <Flex direction="column" justifyContent="center" gap={{ y: '15px' }} style={{ maxWidth: '1300px' }}>
      <Flex alignItems="center" gap={{ x: '20px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          내 공고글
        </Typo>
        <Typo element="span" size="16px">
          총 {recruitmentsList.length}건
        </Typo>
      </Flex>
      <Flex direction="column" justifyContent="center">
        <Flex alignItems="center" style={tableHeaderStyle}>
          <Typo size="16px" style={{ ...tableHeaderTitleStyle, width: '30%' }}>
            근무지
          </Typo>
          <Typo size="16px" style={{ ...tableHeaderTitleStyle, flex: 1, width: '70%' }}>
            공고 제목
          </Typo>
        </Flex>
        {recruitmentsList.map((recruitment, index) => (
          <RecruitmentItem key={index}>
            <Typo size="16px" style={{ width: '30%' }}>
              {recruitment.area}
            </Typo>
            <DetailsFlex>
              <Flex direction="column" gap={{ y: '5px' }}>
                <Typo size="16px" style={recruitmentTitleStyle}>
                  {recruitment.koreanTitle}
                </Typo>
                <Typo element="p" size="16px">
                  {recruitment.koreanDetailedDescription}
                </Typo>
              </Flex>
              <ButtonGroup>
                <Button style={customButtonStyle}>지원자 보러가기</Button>
                <Button style={customButtonStyle}>마감하기</Button>
              </ButtonGroup>
            </DetailsFlex>
          </RecruitmentItem>
        ))}
      </Flex>
    </Flex>
  );
}

const tableHeaderStyle = {
  padding: '10px 25px',
  backgroundColor: '#F1F2F4',
  borderTop: '1px solid #000',
  borderBottom: '1px solid #000',
};

const tableHeaderTitleStyle = {
  color: '#474C54',
  fontWeight: 'bold',
};

const RecruitmentItem = styled(Flex)`
  align-items: center;
  border-bottom: 1px solid #e4e5e8;
  padding: 30px 25px;
`;

const recruitmentTitleStyle = {
  color: '#0A65CC',
};

const DetailsFlex = styled(Flex)`
  width: 70%;
  gap: 10px;

  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
  })}
`;

const ButtonGroup = styled(Flex)`
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  ${responsiveStyle({
    tablet: {
      justifyContent: 'flex-start',
    },
    mobile: {
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'stretch',
    },
  })}
`;

const customButtonStyle = {
  backgroundColor: '#F1F2F4',
  whiteSpace: 'nowrap',
};
