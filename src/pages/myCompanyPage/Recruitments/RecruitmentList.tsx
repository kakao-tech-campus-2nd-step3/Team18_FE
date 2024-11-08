import { Flex, Typo } from '@/components/common';
import RecruitmentsTable from './RecruitmentsTable';
import { RecruitmentItem } from '@/types';
import { useTranslation } from 'react-i18next';

type Props = {
  recruitmentList: RecruitmentItem[];
};

export default function RecruitmentList({ recruitmentList }: Props) {
  const { t } = useTranslation();

  return (
    <Flex direction="column" justifyContent="center" gap={{ y: '15px' }}>
      <Flex alignItems="center" gap={{ x: '20px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          {t('myCompany.my_recruitments')}
        </Typo>
        <Typo element="span" size="16px">
          {t('myCompany.total_recruitments', { count: recruitmentList.length })}
        </Typo>
      </Flex>
      <RecruitmentsTable recruitmentList={recruitmentList} />
    </Flex>
  );
}
