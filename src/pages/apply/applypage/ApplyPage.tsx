import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { Flex, Typo, Button, Modal } from '@/components/common';
import useApplyHook from './useApplyHook';
import { ApplyInput, ApplyTextArea } from './FormElements';

export default function ApplyPage() {
  const { applyInfo, handleSubmit, handleChange, toggle, isToggle, goAhead } = useApplyHook();
  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center">
        <ApplyCard>
          <Typo size="24px" bold={true}>
            지원서 작성
          </Typo>
          <ApplyInput
            name="name"
            title="이름"
            placeholder="이름을 입력하세요."
            value={applyInfo.name}
            onChange={handleChange}
          />
          <ApplyInput
            name="address"
            title="주소"
            placeholder="주소를 입력하세요."
            value={applyInfo.address}
            onChange={handleChange}
          />
          <ApplyInput
            name="phoneNumber"
            title="번호"
            placeholder="번호를 입력하세요. 010-0000-0000.."
            value={applyInfo.phoneNumber}
            onChange={handleChange}
          />
          <ApplyTextArea
            name="applyMotivation"
            title="지원 동기"
            placeholder="지원 동기를 입력하세요"
            value={applyInfo.applyMotivation}
            onChange={handleChange}
          />
          <CustomBtn onClick={handleSubmit}>지원하기</CustomBtn>
        </ApplyCard>
        {isToggle && (
          <Modal
            textChildren={<ModalContainer>정말 지원하실겁니까?</ModalContainer>}
            buttonChildren={<CustomBtn onClick={goAhead}>지원하기</CustomBtn>}
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
`;

const ModalContainer = styled.div`
  font-size: 24px;
  margin: 30px 0;
`;
