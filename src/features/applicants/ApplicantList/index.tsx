import { Flex, Typo } from '@/components/common';
import ApplicantsTable from './ApplicantsTable';

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
      <ApplicantsTable applicantList={applicantList} />
    </Flex>
  );
}
