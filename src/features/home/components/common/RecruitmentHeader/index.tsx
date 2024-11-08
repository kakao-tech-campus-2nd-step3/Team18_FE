import { Flex, Typo } from '@components/common';
import { flexStyle, divStyle, headerTypoStyle, subheaderTypoStyle } from './index.styles';
import { useTranslation } from 'react-i18next';

export default function RecruitmentHeader() {
  const { t } = useTranslation();

  return (
    <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
      <div css={divStyle}>
        <Typo element="h1" size="38px" bold style={headerTypoStyle}>
          {t('home.recruitmentHeader.heading')}
        </Typo>
        <Typo element="span" color="gray" size="24px" style={subheaderTypoStyle}>
          {t('home.recruitmentHeader.description')}
        </Typo>
      </div>
    </Flex>
  );
}
