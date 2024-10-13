import { Typo } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';

export default function Salary() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo element="p" size="16px" color="gray" style={{ marginBottom: '4px' }}>
      {recruitment.salary}
    </Typo>
  );
}
