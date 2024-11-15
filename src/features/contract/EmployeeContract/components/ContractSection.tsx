import { useState } from 'react';
import { useGetMyContract } from '@/apis/contract/hooks/useGetMyContract';
import { Button, Typo } from '@/components/common';
import ROUTE_PATH from '@/routes/path';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { usePostSignEmployeeContract } from '@/apis/contract/hooks/usePostEmployeeSign';

export type ContractResponseData = {
  salary: string;
  workingHours: string;
  dayOff: string;
  annualPaidLeave: string;
  workingPlace: string;
  responsibilities: string;
  rule: string;
};

export default function ContractSection() {
  const { t } = useTranslation();
  const { applyId } = useParams();
  const applicationId = Number(applyId);
  const { data: contract } = useGetMyContract(applicationId);
  const mutation = usePostSignEmployeeContract();
  const navigate = useNavigate();
  const contractData: ContractResponseData = contract || {};

  const [isSigned, setIsSigned] = useState(false);
  const [showSignError, setShowSignError] = useState(false);

  const handlePostSignEmployeeContract = () => {
    if (!isSigned) {
      setShowSignError(true);
      return;
    }
    mutation.mutate(
      { applyId: applicationId },
      {
        onSuccess: () => {
          navigate(ROUTE_PATH.HOME);
        },
        onError: () => {
          alert('값이 정상적으로 저장되지 않았습니다.');
        },
      },
    );
  };

  const handleSign = () => {
    setIsSigned(!isSigned);
    setShowSignError(false);
  };

  return (
    <>
      <InputWrapper>
        <InputContainer>
          <Typo>{t('contract.WORKING_PLACE')}</Typo>
          <Typo>{contractData.workingPlace}</Typo>
        </InputContainer>
        <InputContainer>
          <Typo>{t('contract.RESPONSIBILITIES')}</Typo>
          <Typo>{contractData.responsibilities}</Typo>
        </InputContainer>
        <InputContainer>
          <Typo>{t('contract.WORKING_HOURS')}</Typo>
          <Typo>{contractData.workingHours}</Typo>
        </InputContainer>
        <InputContainer>
          <Typo>{t('contract.DAY_OFF')}</Typo>
          <Typo>{contractData.dayOff}</Typo>
        </InputContainer>
        <InputContainer>
          <Typo>{t('contract.SALARY')}</Typo>
          <Typo>{contractData.salary}</Typo>
        </InputContainer>
        <InputContainer>
          <Typo>{t('contract.ANNUAL_PAID_LEAVE')}</Typo>
          <Typo>{contractData.annualPaidLeave}</Typo>
        </InputContainer>
        <InputContainer>
          <Typo>{t('contract.RULE')}</Typo>
          <Typo>{contractData.rule}</Typo>
        </InputContainer>
      </InputWrapper>
      <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
        {t('contract.SENTENCE1')}
      </Typo>
      <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
        {t('contract.SENTENCE2')}
      </Typo>
      <ButtonWrapper>
        <SignButton design="outlined" isSigned={isSigned} onClick={handleSign}>
          <TypoWrapper isSigned={isSigned}>{t('contract.SIGN')}</TypoWrapper>
          {isSigned && <CheckIcon>✅</CheckIcon>}
        </SignButton>
        <Button design="default" onClick={handlePostSignEmployeeContract}>
          {t('contract.SUBMIT')}
        </Button>
      </ButtonWrapper>
      {showSignError && !isSigned && <ErrorText>{t('contract.ERROR.SIGN')}</ErrorText>}
    </>
  );
}

const InputWrapper = styled.div`
  margin-top: 28px;
`;

const InputContainer = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
`;

const ButtonWrapper = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
`;

const SignButton = styled(Button)<{ isSigned: boolean }>`
  width: 150px;
  background-color: ${({ isSigned }) => (isSigned ? '#3960d7' : 'white')};
  color: ${({ isSigned }) => (isSigned ? 'white' : 'black')};
  padding: 10px 0;
  display: flex;
  align-items: center;
  transition:
    background-color 0.3s,
    color 0.3s;
`;

const TypoWrapper = styled.span<{ isSigned: boolean }>`
  margin-right: ${({ isSigned }) => (isSigned ? '8px' : '0')};
  transition: margin-right 0.3s;
`;

const CheckIcon = styled.span`
  transition: opacity 0.3s;
  opacity: 1;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;
