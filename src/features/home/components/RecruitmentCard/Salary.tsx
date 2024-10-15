import { Typo } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';

const SALARY_STYLE = { marginBottom: '4px' };

export default function Salary() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo element="p" size="16px" color="gray" style={SALARY_STYLE}>
      {recruitment.salary}
    </Typo>
  );
}
