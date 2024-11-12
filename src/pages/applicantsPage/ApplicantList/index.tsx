import { Flex, Typo } from '@/components/common';
import ApplicantsTable from './ApplicantsTable';
import { ApplicantData } from '@/types';
import { useTranslation } from 'react-i18next';

type Props = {
  applicantList: ApplicantData[];
};

export default function ApplicantList({ applicantList }: Props) {
  const { t } = useTranslation();

  return (
    <Flex direction="column" justifyContent="center" gap={{ y: '15px' }}>
      <Flex alignItems="center" gap={{ x: '20px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          {t('applicants.applicant_list')}
        </Typo>
        <Typo element="span" size="16px">
          {t('applicants.total_applicants', { count: applicantList.length })}
        </Typo>
      </Flex>
      <ApplicantsTable applicantList={applicantList} />
    </Flex>
  );
}
