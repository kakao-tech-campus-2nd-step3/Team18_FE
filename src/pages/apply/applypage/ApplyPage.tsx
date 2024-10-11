import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { Flex, Typo, Button, Modal } from '@/components/common';
import { useApplyHook } from './useApplyHook';
import ApplyInput from './ApplyInput';

export default function ApplyPage() {
  const { toggle, isToggle, register, handleSubmit, onSubmit, handleApplySubmit, errors } = useApplyHook();

  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center">
        <ApplyCard>
          <Typo size="24px" bold={true}>
            지원서 작성
          </Typo>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <ApplyInput
              errors={errors}
              title="이름"
              label="name"
              register={register}
              placeholder="이름을 입력해주세요."
              required
            />
            <ApplyInput
              errors={errors}
              title="주소"
              label="address"
              register={register}
              placeholder="주소를 입력해주세요. (예: 대전광역시 유성구 궁동)"
              required
            />
            <ApplyInput
              errors={errors}
              title="번호"
              label="phoneNumber"
              register={register}
              pattern={/^010-\d{4}-\d{4}$/}
              patternMessage="올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)"
              placeholder="010-0000-0000 형식의 번호를 입력해주세요."
              required
            />
            <ApplyInput
              errors={errors}
              title="지원동기"
              label="applyMotivation"
              register={register}
              placeholder="지원 동기를 입력해주세요."
              required
            />
            <CustomBtn type="submit">지원하기</CustomBtn>
          </StyledForm>
        </ApplyCard>
        {isToggle && (
          <Modal
            textChildren={<ModalContainer>정말 지원하시겠습니까?</ModalContainer>}
            buttonChildren={<CustomBtn onClick={handleApplySubmit}>지원하기</CustomBtn>}
            onClose={toggle}
          />
        )}
      </Flex>
    </Layout>
  );
}

const ApplyCard = styled.div`
  width: 70%;
  box-shadow: 0px 12px 32px 0px rgba(24, 25, 28, 0.08);
  border-radius: 12px;
  border: 1px solid #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px 0;
  margin: 40px 0;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const CustomBtn = styled(Button)`
  background-color: #0a65cc;
  height: 50px;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
  align-self: center;
`;

const ModalContainer = styled.div`
  font-size: 24px;
  margin: 30px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: start;
  gap: 50px;
`;
