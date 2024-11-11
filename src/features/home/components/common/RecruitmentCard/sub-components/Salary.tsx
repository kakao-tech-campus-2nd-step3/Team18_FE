import { Flex, Typo } from '@components/common';
import { useRecruitmentCardContext } from '../index.context';

const SALARY_TITLE_STYLE = { marginRight: '4px' };
const SALARY_STYLE = { marginBottom: '4px' };

export default function Salary() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Flex>
      <Typo element="strong" color="gray" bold style={SALARY_TITLE_STYLE}>
        급여:
      </Typo>
      <Typo element="p" size="16px" color="gray" style={SALARY_STYLE}>
        {recruitment.salary}원
      </Typo>
    </Flex>
  );
}
