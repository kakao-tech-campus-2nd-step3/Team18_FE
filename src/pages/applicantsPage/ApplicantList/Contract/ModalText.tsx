import { palettes } from '@/assets/styles/global/palettes';
import { ForeignerData } from '@/types';
import { Typo } from '@/components/common';
import { headingStyle, paragraphStyle, titleStyle } from './ModalText.styles';
import { Trans, useTranslation } from 'react-i18next';

type Props = Pick<ForeignerData, 'foreignerIdNumber' | 'visaGenerateDate'>;

export default function ModalText({ foreignerIdNumber, visaGenerateDate }: Props) {
  const { t } = useTranslation();

  return (
    <>
      <Typo element="h3" size="18px" style={titleStyle}>
        ✅ {t('contractModal.title')}
      </Typo>
      <Typo element="p" size="14px" style={paragraphStyle}>
        {t('contractModal.warning')}
      </Typo>
      <hr />
      <Typo element="h4" size="14px" style={headingStyle}>
        {t('contractModal.applicant_info')}
      </Typo>
      <Typo element="p" size="14px" style={paragraphStyle}>
        {t('contractModal.foreigner_number')} : <strong>{foreignerIdNumber}</strong>
        <br />
        {t('contractModal.visa_generate_date')} : <strong>{visaGenerateDate}</strong>
        <br />
        <br />
        <Trans
          i18nKey="contractModal.message.part1"
          components={[
            <a
              href="https://www.hikorea.go.kr/info/InfoFrnJobIdentityPageR.pt?locale=kr"
              target="_blank"
              style={{ color: `${palettes.blue}` }}
              rel="noopener noreferrer"
            >
              children
            </a>,
          ]}
        />
        <br />
        <br />
        {t('contractModal.message.part2')}
      </Typo>
    </>
  );
}
