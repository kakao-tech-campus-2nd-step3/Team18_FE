import { useFetchPostContract } from '@/apis/contract/hooks/usePostContract';
import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import ROUTE_PATH from '@/routes/path';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

export default function EmployerContract() {
  const { t } = useTranslation();
  const { applyId: applicationId } = useParams();
  const mutation = useFetchPostContract();
  const navigate = useNavigate();

  const [isSigned, setIsSigned] = useState(false);
  const [showSignError, setShowSignError] = useState(false);

  const [inputs, setInputs] = useState({
    salary: '',
    workingHours: '',
    dayOff: '',
    annualPaidLeave: '',
    workingPlace: '',
    responsibilities: '',
    rule: '',
    applyId: Number(`${applicationId}`),
  });

  const { salary, workingHours, dayOff, annualPaidLeave, workingPlace, responsibilities, rule } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostContract = () => {
    if (!isSigned) {
      setShowSignError(true);
      return;
    }
    mutation.mutate(inputs, {
      onSuccess: () => {
        navigate(ROUTE_PATH.HOME);
      },
      onError: () => {
        alert('값이 정상적으로 저장되지 않았습니다.');
      },
    });
  };

  const handleSign = () => {
    setIsSigned(!isSigned);
    setShowSignError(false);
  };

  return (
    <Layout>
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="24px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                {t('contract.CONTRACT')}
              </Typo>
              <InputWrapper>
                <InputContainer>
                  <Input
                    label={t('contract.WORKING_PLACE')}
                    name="workingPlace"
                    value={workingPlace}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('contract.RESPONSIBILITIES')}
                    name="responsibilities"
                    value={responsibilities}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('contract.WORKING_HOURS')}
                    name="workingHours"
                    value={workingHours}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('contract.DAY_OFF')}
                    name="dayOff"
                    value={dayOff}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('contract.SALARY')}
                    name="salary"
                    value={salary}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('contract.ANNUAL_PAID_LEAVE')}
                    name="annualPaidLeave"
                    value={annualPaidLeave}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label={t('contract.RULE')}
                    name="rule"
                    value={rule}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
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
                <Button design="default" onClick={handlePostContract}>
                  {t('contract.SUBMIT')}
                </Button>
              </ButtonWrapper>
              {showSignError && !isSigned && <ErrorText>{t('contract.ERROR')}</ErrorText>}
            </Flex>
          </LineWrapper>
        </Flex>
      </section>
    </Layout>
  );
}

const LineWrapper = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  padding: 100px 200px;
  margin: 52px 0;
`;

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

const InputStyle = { width: '450px', height: '48px' };
