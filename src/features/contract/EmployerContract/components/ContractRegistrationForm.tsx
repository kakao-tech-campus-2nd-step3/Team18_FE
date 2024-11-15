import { useFetchPostContract } from '@/apis/contract/hooks/usePostContract';
import { Button, Input, Modal, Typo } from '@/components/common';
import useToggle from '@/hooks/useToggle';
import ROUTE_PATH from '@/routes/path';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const default_inputs = {
  salary: 0,
  workingHours: '',
  dayOff: '',
  annualPaidLeave: '',
  workingPlace: '',
  responsibilities: '',
  rule: '',
};

export default function ContractRegistrationForm() {
  const { t } = useTranslation();
  const { applyId: applicationId } = useParams();
  const mutation = useFetchPostContract();
  const navigate = useNavigate();

  const [isToggle, toggle] = useToggle();
  const [isSigned, setIsSigned] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [inputs, setInputs] = useState({ ...default_inputs });

  const { salary, workingHours, dayOff, annualPaidLeave, workingPlace, responsibilities, rule } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === 'salary') {
      if (!/^\d*$/.test(value)) {
        setErrors({
          ...errors,
          revenuePerYear: t('registerCompany.ERROR.NUMBER'),
        });
        return;
      }
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const onClickSubmitButton = () => {
    const newErrors: { [key: string]: string } = {};

    if (!salary) newErrors.salary = t('contract.ERROR.SALARY');
    if (!workingHours) newErrors.workingHours = t('contract.ERROR.WORKING_HOURS');
    if (!dayOff) newErrors.dayOff = t('contract.ERROR.DAY_OFF');
    if (!annualPaidLeave) newErrors.annualPaidLeave = t('contract.ERROR.ANNUAL_PAID_LEAVE');
    if (!workingPlace) newErrors.workingPlace = t('contract.ERROR.WORKING_PLACE');
    if (!responsibilities) newErrors.responsibilities = t('contract.ERROR.RESPONSIBILITIES');
    if (!rule) newErrors.rule = t('contract.ERROR.RULE');
    if (!isSigned) newErrors.sign = t('contract.ERROR.SIGN');

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    toggle();
  };

  const onPostContract = () => {
    const postData = { ...inputs, applyId: Number(`${applicationId}`) };

    mutation.mutate(postData, {
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
  };

  return (
    <>
      <InputWrapper>
        <InputContainer>
          <Input
            aria-label={t('contract.WORKING_PLACE')}
            label={t('contract.WORKING_PLACE')}
            name="workingPlace"
            value={workingPlace}
            onChange={onChange}
            style={InputStyle}
          />
          {errors.workingPlace && <ErrorText>{errors.workingPlace}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Input
            aria-label={t('contract.RESPONSIBILITIES')}
            label={t('contract.RESPONSIBILITIES')}
            name="responsibilities"
            value={responsibilities}
            onChange={onChange}
            style={InputStyle}
          />
          {errors.responsibilities && <ErrorText>{errors.responsibilities}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Input
            aria-label={t('contract.WORKING_HOURS')}
            label={t('contract.WORKING_HOURS')}
            name="workingHours"
            value={workingHours}
            onChange={onChange}
            style={InputStyle}
          />
          {errors.workingHours && <ErrorText>{errors.workingHours}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Input
            aria-label={t('contract.DAY_OFF')}
            label={t('contract.DAY_OFF')}
            name="dayOff"
            value={dayOff}
            onChange={onChange}
            style={InputStyle}
          />
          {errors.dayOff && <ErrorText>{errors.dayOff}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Input
            aria-label={t('contract.SALARY')}
            label={t('contract.SALARY')}
            name="salary"
            value={salary}
            onChange={onChange}
            style={InputStyle}
          />
          {errors.salary && <ErrorText>{errors.salary}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Input
            aria-label={t('contract.ANNUAL_PAID_LEAVE')}
            label={t('contract.ANNUAL_PAID_LEAVE')}
            name="annualPaidLeave"
            value={annualPaidLeave}
            onChange={onChange}
            style={InputStyle}
          />
          {errors.annualPaidLeave && <ErrorText>{errors.annualPaidLeave}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Input
            aria-label={t('contract.RULE')}
            label={t('contract.RULE')}
            name="rule"
            value={rule}
            onChange={onChange}
            style={InputStyle}
          />
          {errors.rule && <ErrorText>{errors.rule}</ErrorText>}
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
        <Button design="default" onClick={onClickSubmitButton}>
          {t('contract.SUBMIT')}
        </Button>
      </ButtonWrapper>
      {!isSigned && errors.sign && <ErrorText>{errors.sign}</ErrorText>}
      {isToggle && (
        <Modal
          textChildren={<ModalContainer>{t('contract.SUBMIT_CHECK')}</ModalContainer>}
          buttonChildren={<CustomBtn onClick={onPostContract}>{t('contract.SUBMIT')}</CustomBtn>}
          onClose={toggle}
        />
      )}
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
  flex-flow: wrap;
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
  width: 100%;
  color: red;
  font-size: 12px;
  margin-top: 8px;
`;

const InputStyle = { width: '450px', height: '48px' };

const CustomBtn = styled(Button)`
  background: #0a65cc;
  color: white;
  border: 1px solid #e4e5e8;
  align-self: center;
`;

const ModalContainer = styled.div`
  font-size: 24px;
  margin: 30px 30px;
`;
