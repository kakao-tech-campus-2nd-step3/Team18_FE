import { Flex, Typo } from '@/components/common';
import RecruitmentsTable from './RecruitmentsTable';
import { RecruitmentItem } from '@/types';

type Props = {
  recruitmentList: RecruitmentItem[];
};

export default function RecruitmentList({ recruitmentList }: Props) {
  return (
    <Flex direction="column" justifyContent="center" gap={{ y: '15px' }}>
      <Flex alignItems="center" gap={{ x: '20px' }}>
        <Typo element="h3" size="24px" style={{ fontWeight: 'bold' }}>
          내 공고글
        </Typo>
        <Typo element="span" size="16px">
          총 {recruitmentList.length}건
        </Typo>
      </Flex>
      <RecruitmentsTable recruitmentList={recruitmentList} />
    </Flex>
  );
}
