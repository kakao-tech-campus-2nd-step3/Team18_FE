import { usePostNotice } from '@/apis/postNotice/hooks/usePostNotice';
import { Button, Input, Modal } from '@/components/common';
import useToggle from '@/hooks/useToggle';
import ROUTE_PATH from '@/routes/path';
import { NoticeRequestData } from '@/types';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

const default_inputs: NoticeRequestData = {
  title: '',
  companyScale: '',
  area: '',
  salary: 0,
  workDuration: '',
  workDays: '',
  workType: '',
  workHours: '',
  requestedCareer: '',
  majorBusiness: '',
  eligibilityCriteria: '',
  preferredConditions: '',
  employerName: '',
  companyName: '',
  companyId: 0,
};

export default function PostNoticeForm() {
  const { t } = useTranslation();
  const mutation = usePostNotice();
  const navigate = useNavigate();
  const { companyId: curCompanyId } = useParams();

  const [inputs, setInputs] = useState({ ...default_inputs });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isToggle, toggle] = useToggle();
  inputs.companyId = Number(curCompanyId);

  const {
    title,
    companyScale,
    area,
    salary,
    workDuration,
    workDays,
    workType,
    workHours,
    requestedCareer,
    majorBusiness,
    eligibilityCriteria,
    preferredConditions,
    employerName,
    companyName,
  } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'salary') {
      if (!/^\d*$/.test(value)) {
        setErrors({
          ...errors,
          salary: '숫자로 입력해주세요.',
        });
        return;
      }
    }

    setInputs({
      ...inputs,
      [name]: name === 'salary' ? Number(value) : value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const onClickSubmitButton = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title) newErrors.title = t('postNotice.ERROR.NOTICE_TITLE');
    if (!companyScale) newErrors.companyScale = t('postNotice.ERROR.COMPANY_SCALE');
    if (!area) newErrors.area = t('postNotice.ERROR.AREA');
    if (!salary) newErrors.salary = t('postNotice.ERROR.SALARY');
    if (!workDuration) newErrors.workDuration = t('postNotice.ERROR.WORKDURATION');
    if (!workDays) newErrors.workDays = t('postNotice.ERROR.WORKDAYS');
    if (!workType) newErrors.workType = t('postNotice.ERROR.WORKTYPE');
    if (!workHours) newErrors.workHours = t('postNotice.ERROR.WORKHOURS');
    if (!requestedCareer) newErrors.requestedCareer = t('postNotice.ERROR.REQUESTED_CAREER');
    if (!majorBusiness) newErrors.majorBusiness = t('postNotice.ERROR.MAJOR_BUSINESS');
    if (!eligibilityCriteria) newErrors.eligibilityCriteria = t('postNotice.ERROR.ELIGIBILITY_CRITERIA');
    if (!preferredConditions) newErrors.preferredConditions = t('postNotice.ERROR.PREFERRED_CONDITIONS');
    if (!employerName) newErrors.employerName = t('postNotice.ERROR.EMPLOYER_NAME');
    if (!companyName) newErrors.companyName = t('postNotice.ERROR.COMPANY_NAME');

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    toggle();
  };

  const onPostNotice = () => {
    mutation.mutate(inputs, {
      onSuccess: () => {
        navigate(ROUTE_PATH.HOME);
      },
      onError: () => {
        alert('값이 정상적으로 저장되지 않았습니다.');
      },
    });
  };

  return (
    <>
      <InputContainer>
        <Input
          aria-label={t('postNotice.NOTICE_TITLE')}
          label={t('postNotice.NOTICE_TITLE')}
          name="title"
          style={InputStyle}
          value={title}
          onChange={onChange}
        />
        {errors.title && <ErrorText>{errors.title}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.COMPANY_NAME')}
          label={t('postNotice.COMPANY_NAME')}
          name="companyName"
          style={InputStyle}
          value={companyName}
          onChange={onChange}
        />
        {errors.companyName && <ErrorText>{errors.companyName}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.EMPLOYER_NAME')}
          label={t('postNotice.EMPLOYER_NAME')}
          name="employerName"
          style={InputStyle}
          value={employerName}
          onChange={onChange}
        />
        {errors.employerName && <ErrorText>{errors.employerName}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.COMPANY_SCALE')}
          label={t('postNotice.COMPANY_SCALE')}
          name="companyScale"
          style={InputStyle}
          value={companyScale}
          onChange={onChange}
        />
        {errors.companyScale && <ErrorText>{errors.companyScale}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.AREA')}
          label={t('postNotice.AREA')}
          name="area"
          style={InputStyle}
          value={area}
          onChange={onChange}
        />
        {errors.area && <ErrorText>{errors.area}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.SALARY')}
          label={t('postNotice.SALARY')}
          name="salary"
          style={InputStyle}
          value={salary}
          onChange={onChange}
        />
        {errors.salary && <ErrorText>{errors.salary}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.MAJOR_BUSINESS')}
          label={t('postNotice.MAJOR_BUSINESS')}
          name="majorBusiness"
          style={InputStyle}
          value={majorBusiness}
          onChange={onChange}
        />
        {errors.majorBusiness && <ErrorText>{errors.majorBusiness}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.WORKDURATION')}
          label={t('postNotice.WORKDURATION')}
          labelStyle={{ width: '100px', textAlign: 'left' }}
          name="workDuration"
          style={InputStyle}
          value={workDuration}
          onChange={onChange}
        />
        {errors.workDuration && <ErrorText>{errors.workDuration}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.WORKDAYS')}
          label={t('postNotice.WORKDAYS')}
          name="workDays"
          style={InputStyle}
          value={workDays}
          onChange={onChange}
        />
        {errors.workDays && <ErrorText>{errors.workDays}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.WORKHOURS')}
          label={t('postNotice.WORKHOURS')}
          name="workHours"
          style={InputStyle}
          value={workHours}
          onChange={onChange}
        />
        {errors.workHours && <ErrorText>{errors.workHours}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.WORKTYPE')}
          label={t('postNotice.WORKTYPE')}
          name="workType"
          style={InputStyle}
          value={workType}
          onChange={onChange}
        />
        {errors.workType && <ErrorText>{errors.workType}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.REQUESTED_CAREER')}
          label={t('postNotice.REQUESTED_CAREER')}
          name="requestedCareer"
          style={InputStyle}
          value={requestedCareer}
          onChange={onChange}
        />
        {errors.requestedCareer && <ErrorText>{errors.requestedCareer}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.ELIGIBILITY_CRITERIA')}
          label={t('postNotice.ELIGIBILITY_CRITERIA')}
          name="eligibilityCriteria"
          style={InputStyle}
          value={eligibilityCriteria}
          onChange={onChange}
        />
        {errors.eligibilityCriteria && <ErrorText>{errors.eligibilityCriteria}</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input
          aria-label={t('postNotice.PREFERRED_CONDITIONS')}
          label={t('postNotice.PREFERRED_CONDITIONS')}
          name="preferredConditions"
          style={InputStyle}
          value={preferredConditions}
          onChange={onChange}
        />
        {errors.preferredConditions && <ErrorText>{errors.preferredConditions}</ErrorText>}
      </InputContainer>
      <Button onClick={onClickSubmitButton} design="default" style={{ marginTop: '52px' }}>
        {t('postNotice.SUBMIT')}
      </Button>
      {isToggle && (
        <Modal
          textChildren={<ModalContainer>{t('postNotice.SUBMIT_CHECK')}</ModalContainer>}
          buttonChildren={<CustomBtn onClick={onPostNotice}>{t('postNotice.SUBMIT')}</CustomBtn>}
          onClose={toggle}
        />
      )}
    </>
  );
}

const InputContainer = styled.div`
  width: 700px;
  align-items: start;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
`;

const InputStyle = { width: '600px', height: '48px', marginTop: '12px' };

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

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
