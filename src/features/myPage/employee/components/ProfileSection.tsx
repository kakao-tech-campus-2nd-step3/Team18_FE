import styled from '@emotion/styled';
import EmployeeProfile from './EmployeeProfile';
import ButtonGroup from './ButtonGroup';

export default function ProfileSection() {
  return (
    <Wrapper>
      <EmployeeProfile />
      <ButtonGroup />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  direction: column;
  align-items: center;
  margin-bottom: 52px;
  border: 3px solid #0a65cc;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
