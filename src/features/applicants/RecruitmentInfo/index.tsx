import { Button, Flex, Icon, Image, Typo } from '@/components/common';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';
import AreaIcon from '@assets/icons/recruitmentInfo/area.svg?react';
import SalaryIcon from '@assets/icons/recruitmentInfo/salary.svg?react';
import styled from '@emotion/styled';
import theme from '@/assets/theme';
import { palettes } from '@/assets/styles/global/palettes';

interface RecruitmentProps {
  companyImage: string;
  companyName: string;
  koreanTitle: string;
  area: string;
  salary: number;
}

export default function RecruitmentInfo({ companyImage, companyName, koreanTitle, area, salary }: RecruitmentProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center" gap={{ y: '100px' }} css={recruitmentFlexStyle}>
      <ImageWrapper>
        <Image url={companyImage} size={imageSize} css={imageStyle} />
      </ImageWrapper>
      <Flex css={infoFlexStyle}>
        <Typo color="blue">{companyName}</Typo>
        <Typo element="h3" size="20px">
          {koreanTitle}
        </Typo>
        <Flex css={infoGroupStyle}>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <AreaIcon />
            <Typo color="gray">{area}</Typo>
          </Flex>
          <Flex alignItems="center" gap={{ x: '12px' }}>
            <SalaryIcon />
            <Typo color="gray">시급 {salary}</Typo>
          </Flex>
        </Flex>
      </Flex>
      <Button css={buttonStyle}>
        <Flex gap={{ x: '15px' }}>
          <Typo size="16px" color="white" style={buttonTextStyle}>
            자세히 보러가기
          </Typo>
          <Icon.Arrow.RightWhite />
        </Flex>
      </Button>
    </Flex>
  );
}

const recruitmentFlexStyle = css`
  ${responsiveStyle({
    default: {
      gap: '100px',
      border: `1px solid ${theme.palettes.borderGray}`,
      borderRadius: '8px',
      padding: '15px 30px',
    },
    tablet: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 30px',
      gap: '30px',
    },
    mobile: {
      padding: '30px',
    },
  })}
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 120px;
`;

const imageStyle = css`
  height: 100%;

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

const imageSize = {
  width: '277px',
  height: 'auto',
};

const infoFlexStyle = css`
  ${responsiveStyle({
    default: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '10px',
    },
    tablet: {
      width: '80%',
      alignItems: 'center',
    },
    mobile: {
      gap: '15px',
    },
  })}
`;

const infoGroupStyle = css`
  ${responsiveStyle({
    default: {
      alignItems: 'center',
      gap: '30px',
    },
    tablet: {
      width: '80%',
      gap: '20px',
      justifyContent: 'center',
    },
    mobile: {
      flexDirection: 'column',
      gap: '10px',
    },
  })}
`;

const buttonStyle = css`
  background-color: ${palettes.blue};
`;

const buttonTextStyle = {
  fontWeight: '600',
  whiteSpace: 'nowrap',
};
